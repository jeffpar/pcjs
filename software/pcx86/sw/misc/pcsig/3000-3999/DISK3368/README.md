---
layout: page
title: "PC-SIG Diskette Library (Disk #3368)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3368/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3368"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FORM.DOC

{% raw %}
```
                                    tm
                           ABC PAINT   v.1.2
                           Registration Form

                        Make Check/MO payable to:

                           Belinda Aboshanab
                           P.O. Box 31014
                           Aurora, CO   80041

    NAME: _____________________________________________________

    ADDRESS:  _________________________________________________

    CITY:  ________________________,  STATE: _____   ZIP: _____


                Quantity  ___  x  $10.00   = $___.__

                Shipping and Handling:       $  5.00

                Subtotal:                    $___.__

                3.0% State Sales Tax         $___.__
                 (CO residents only)
                  (Subtotal x .03)

                Total:                       $___.__

    DISK FORMAT:  5 1/4 ___     3 1/2 ___    (check one)


    Please take a few moments to answer these few questions.

    TYPE OF COMPUTER/MONITOR:  ________________________________

    AGES OF CHILDREN USING SOFTWARE:  _________________________

    WHERE DID YOU OBTAIN A COPY OF THIS PROGRAM:  (If source is
    a BBS or Software Distributor please include phone number
    of BBS and Name/Address of Dist.)__________________________

    ___________________________________________________________

    COMMENTS/SUGGESTIONS:  ____________________________________

    ___________________________________________________________

    ___________________________________________________________

    ___________________________________________________________


                            Thank-you!

```
{% endraw %}

## README.TXT

{% raw %}
```







                                  tm
                         ABC Paint   v. 1.2
                (C) Copyright 1991 Belinda D. Aboshanab.
                         All Rights Reserved.


         Hi!  Thank-you for trying ABC Paint v.1.2.  I hope your children
    will enjoy this program as much as mine do.  Before getting into the
    instructions for using this program I need to dispense with the legal-
    ities.

                             DISCLAIMER OF WARRANTY
          THIS SOFTWARE IS SOLD "AS IS" AND WITHOUT WARRANTIES AS TO
          PERFORMANCE OR MERCHANTABILITY.
          THIS PROGRAM IS SOLD WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES
          WHATSOEVER.  BECAUSE OF THE DIVERSITY OF CONDITIONS AND HARDWARE
          UNDER WHICH THIS PROGRAM MAY BE USED, NO WARRANTY OF FITNESS FOR
          A PARTICULAR PURPOSE IS OFFERED.  THE USER IS ADVISED TO TEST
          THE PROGRAM THOROUGHLY BEFORE RELYING ON IT.  THE USER MUST
          ASSUME THE ENTIRE RISK OF USING THE PROGRAM.


                                WARNING

          THIS SOFTWARE AND MANUAL ARE BOTH PROTECTED BY U.S. COPYRIGHT
          LAW (TITLE 17 UNITED STATES CODE). UNAUTHORIZED REPRODUCTION
          AND/OR SALES MAY RESULT IN IMPRISONMENT OF UP TO ONE YEAR AND
          FINES OF UP TO $10,000 (17 USC 506). COPYRIGHT INFRINGERS MAY
          ALSO BE SUBJECT TO CIVIL LIABILITY.


         All screens and pictures included with this program are
    copyrighted and may not be distributed without the copyright notices.


    ABOUT SHAREWARE / USER SUPPORTED SOFTWARE

         Shareware is a form of software marketing where users have the
    opportunity to try the software before buying it.  The price you may
    have paid to a shareware distributor for a copy of the program is not
    the cost of the software itself.  I do not get any money from these
    distributors.  This is not "free" software.  In this case you have the
    opportunity to see how much your children like the program before
    paying for it (Wouldn't it be great if we could do the same thing
    with toys?).  One week should be sufficient time for testing this
    program.  If, at the end of this time, you are not satisfied please
    discontinue its use and pass it on to someone else.  If you decide to
    register you are also encouraged to "share" a copy with others.
    Please upload the program to any BBS or other distribution source.


    NOTICE TO DISTRIBUTORS

         No more than $10.00/disk may be charged for distribution fees.
    Your catalog must also notify customers about the shareware method,
    specifying additional payment is due to the authors if the customer
    chooses to continue using the program.
         THIS PROGRAM CANNOT BE LISTED in any catalog that also contains
    "X-rated" or "adult only" programs and/or graphics.
         This program may not be combined on disk with other programs by
    other authors, except a menu or other help screens set up by you to
    help the customer.  This program may not be combined with any hard-
    ware specials without the express written permission of the author.
    Not required, but appreciated, would be a copy of your current
    catalog.  If I know you're distributing my program I can supply you
    with the latest updates.


    ABOUT THE PROGRAM

         ABC Paint is a flashcard coloring program for children.  Your
    child is given a flashcard to color for a letter of the alphabet from
    A-L ( in the shareware version.  Upon registration you will receive a
    registered copy that contains the flashcards for the complete range of
    the alphabet A-Z.  The registered copy MAY NOT be distributed).  Each
    flashcard displays a picture/word combination (the word can also be
    colored) to help your child learn.
         At this time, a mouse is required to operate the program, which
    helps your child further develop hand/eye coordination.
         An EGA or VGA color monitor is required.  I choose these video
    modes because children like the choice of many colors.  There are a
    total of 50 colors to choose from, not including white.


    HOW TO USE THIS PROGRAM

         At the DOS prompt type:
            A:> ABCPAINT

         The following files must be in the current directory for the
    program to operate properly:

                   ABCPAINT.EXE     The program.
                   AIRPLANE.BW       Picture files all have ext. of BW.
                   BALLOON.BW
                   COMPUTER.BW
                   DRUM.BW
                   EGGS.BW
                   FLOWER.BW
                   GRAPES.BW
                   HOUSE.BW
                   JACKET.BW
                   KITE.BW
                   LAMP.BW
                   MENU.BW             The menu of picture files.


         Other files on disk not necessary for running the program, but
    required for distribution of the program include:

                    README.TXT        This file contains all instructions
                                         and information.
                    READ.BAT           A batch file which allows you to
                                          easily read this file on screen.
                    PRINT.BAT          Outputs this file to your printer.
                    FORM.DOC           The registration form.
                    ORDER.BAT          Batch file to print order form.

   ALL THE ABOVE FILES MUST BE INCLUDED ON ANY DISTRIBUTION DISK WITHOUT
   CHANGES.  NO ADDITIONAL FILES MAY BE ADDED WITHOUT WRITTEN CONSENT FROM
   THE AUTHOR.

         The first screen presented to you upon starting the program will
    be the disclaimer of warranty and reminder for registering the
    program. Press any key to continue.  Then the alphabet song,
    accompanied by the display of the letters will appear (you may end the
    song at any time by pressing any key).  After the program loads you
    will have the main screen showing the crayon choices and File related
    icons (graphical buttons) on the left side of the screen.  After
    explaining to your child what each button is for, he/she should be
    able to operate the program by his/herself.
         All file icons may be chosen by placing the mouse arrow in the
    center of the button and pressing the left mouse button.  The button
    will reverse colors while in use.

         LOAD: (wheelbarrow icon)  Choosing this feature presents your
               child with a picture menu that contains a miniature version
               of the flashcards available for coloring.  To choose the
               desired flashcard, place the mouse arrow in the center of
               the flashcard and press the left mouse button.  If
               successful, that flashcard will automatically load for your
               child.  If the arrow was not directly placed on a flashcard
               you will here a warning sound, and the load button must be
               chosen to try again.  If the flashcard(picture) file is
               missing from the current directory a black message box will
               appear to notify you.  Have your child let you know each
               time a black box appears on the screen.  To remove the
               error message press the right mouse button.

         NO COLOR: (No symbol over crayon)  Choosing this feature erases
               all the color from the current flashcard.  This allows your
               child to recolor the same flashcard without having to
               choose from the menu again.

         HELP: (Question Mark) Choosing this feature will pop-up a help
               screen for quick reference for using the program.

         EXIT: (Exit sign) Let's the child quit the program.


    HOW TO COLOR

         Choose a color by placing the mouse arrow in the middle of the
    desired crayon and press the left mouse button.  The smile face in the
    right hand corner will show your child the color chosen.  Also, your
    child will hear a sound to indicate he/she has chosen a valid color.
    To color the flashcard, point the mouse arrow to the portion you want
    colored and press the left mouse button.  The color will not change if
    the arrow point is on top of the black picture lines. To color small
    areas (i.e., the spaces between the letters of the copyright notice)
    hold the left mouse button down while moving the mouse arrow over the
    area.  To change colors or choose a file icon press the right mouse
    button.  The smile face will turn white to indicate no color is in
    use.  (This could be a little confusing for your child if she/he
    decides to chose white as a valid color.  This is rare since you can
    change a color on the flashcard by coloring over it with the new
    color.  Also, your child can listen for the audible indicator.).

    DIFFERENCES BEWTEEN VERSION 1.0 AND 1.2

         The inhancements made for version 1.2 are as follows:

         1.  Copyright notices on screens were fixed.
         2.  ABC song may be stopped at any time.
         3.  I improved the error messages that can occur if a menu or
             picture file is missing.
         4.  With version 1.0, upon exiting the program the keyboard
             buffer was not flushed.  For some menu programs this would
             cause the reloading of ABC Paint if a child had pressed
             the enter key while using the program.  This has been fixed.

    ADDITIONAL NOTES

         If you have any suggestions for improvement I would like to
    hear from you.

         Individual registration is $10.00 plus $5.00 s/h of your
    registered copy.  The registration fee is non-refundable once you
    receive the registered copy (you've already tried the program).
    Defective disks will be replaced. Schools and institutions should
    contact me for site license information.  If you do not have a printer
    please figure your cost as follows:
                Quantity  ___  x  $10.00   = $___.__

                Diskette, post. and hand.    $  5.00

                Subtotal:                    $___.__

                3.0% State Sales Tax         $___.__    (Subtotal x .03)
                 (CO residents only)

                Total:                       $___.__

    Send your check or money order made payable to:

                Belinda Aboshanab
                P.O. Box 31014
                Aurora, CO   80041

    Please indicate:
              1).  Disk format needed 5 1/4 or 3 1/2
              2).  Your computer/monitor name and type
              3).  Ages of children using the program
              4).  Where you obtained a copy of this program
              5).  Any other comments, suggestions, or bug reports.

    For your registration you will receive:
              1).  A registered copy of the program containing pictures
                   from A-Z
              2).  Update information when available
              3).  Unlimited mail support
              4).  An appreciation for your honesty

     Don't forget to send your NAME and COMPLETE MAILING ADDRESS for your
     registered copy.

     To print the order form:
           1. At DOS prompt type:
                A:>order

     To print this document:
           1. At DOS prompt type:
                 A:> print
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3368

     Volume in drive A has no label
     Directory of A:\

    ABCPAINT EXE     92118   9-11-91   4:10a
    README   TXT     11613  11-12-91  10:44a
    FORM     DOC      1715   9-09-91   9:33p
    READ     BAT        24   4-11-91   8:57a
    ORDER    BAT       414   4-15-91  12:11p
    PRINT    BAT       137   4-15-91  12:49p
    MENU     BW      19328   3-31-91   2:44p
    AIRPLANE BW       4864   5-20-91   4:35p
    BALLOON  BW       7296   5-20-91   4:36p
    COMPUTER BW       6016   5-20-91   4:37p
    DRUM     BW       5376   5-20-91   4:37p
    EGGS     BW       5760   5-20-91   4:38p
    FLOWER   BW       5504   5-20-91   4:39p
    GRAPES   BW       4992   5-20-91   4:39p
    HOUSE    BW       6016   5-20-91   4:35p
    IGLOO    BW       6656   5-20-91   4:42p
    JACKET   BW       6528   5-20-91   4:43p
    KITE     BW       4224   5-20-91   4:43p
    LAMP     BW       4480   5-20-91   4:44p
    GO       BAT        32   2-24-93  10:05a
    SHOW     EXE      2040   9-12-88  10:48a
           21 file(s)     195133 bytes
                          116736 bytes free
