---
layout: page
title: "PC-SIG Diskette Library (Disk #4089)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4089/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4089"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## KWSORDER.DOC

{% raw %}
```
      * * * * * *  REGISTRATION AND ORDER FORM  * * * * * *


Name:                                                                     ________________________________________________________________

Address:                                                                     _____________________________________________________________

City:                                State/Prov:                          _______________________________            _____________________

Country:                             Zip/Postal Code:                        ____________________________                 ________________

                                              Unit
Qty                                           Price        Total

     KNITWARE registration . . . . . . . . $35.00 US___
       (includes all applicable taxes) . . $40.00 Can                                                                       ____________

     Shipping and handling outside ___
      U.S.A. and Canada  . . . . . . . . . . $ 5.00                                                                         ____________

                                             TOTAL                                                                          ____________

      Disk format:      5.25"       3.5"                   _____       _____


      We will accept US or Canadian currency.
      Make cheques payable to: Morningdew Consulting Services Ltd.

      Send this form and your registration fee to:

                Morningdew Consulting Services Ltd
                7604 Morningdew Rd.
                R.R. #5 Victoria, B.C.
                Canada     V8X 4M6


Please fill in the following information if you can.  It may help 
improve our product and service to you.

Computer: PC-XT-286AT-386AT-PS/2 Model:             Make:                                                   ____________      ____________

DOS version:                 RAM:      K         Hard Disk: Yes - No            ____________         ______

Display:  CGA-MCGA-EGA-VGA                Floppy Disk: 5.25" - 3.50"

How did you receive your copy of KNITWARE?  If it is a BBS or shareware 
distributor, please indicate the name.

BBS - SHAREWARE DISTRIBUTOR - FRIEND  Name:                                                                       ____________________________



*** KNITWARE SWEATER DESIGN ***   Version 1.10   *** January 1992 ***













```
{% endraw %}

## KWSUSER.DOC

{% raw %}
```













                         K N I T W A R E

                   S W E A T E R    D E S I G N


                           USER MANUAL



                      Shareware version 1.10
                           January 1992








               Morningdew Consulting Services Ltd.
                       7604 Morningdew Road
                    R. R. #5   Victoria, B.C.
                        CANADA    V8X 4M6














        This manual and the KNITWARE (TM) program and data
                   are Copyright (C) 1991, 1992
             by Morningdew Consulting Services, Ltd.
                       All rights reserved












*** KNITWARE *** SWEATER DESIGN *********************************  Page 1


                             TABLE OF CONTENTS


                      1.   INTRODUCTION

                      1.1       Design notes
                      1.2       Caution

                      2.   INSTALLING THE PROGRAM

                      2.1       Floppy Disk Installation
                      2.2       Hard Disk Installation

                      3.   GETTING STARTED

                      3.1       Starting the Program
                      3.2       Initializing
                      3.3       Set Designer Defaults

                      4.   MENU OPTIONS

                      4.1       Design a new pattern
                      4.2       Change existing pattern
                      4.3       Print pattern instructions
                      4.4       Utilities
                      4.5       Help
                      4.6       Quit

                      5.   ENTERING DESIGN DATA

                      5.1       Designer Data
                      5.2       Yarn and Gauge Data
                      5.3       Sweater Style Data
                      5.4       Finished Measurements Data

                      6.   HOW TO QUIT

                      7.   IF YOU HAVE A PROBLEM...

                      8.   SYSTEM MESSAGES 

                           APPENDIX
                      A         Detailed Knitting Instructions
                      B         Comment/Problem Form
                      C         Shareware Order Form



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 2

0.1  LIMITATION OF LIABILITY

     KNITWARE Sweater Design is supplied as is.  There are no warranties, 
     expressed or implied.

     MORNINGDEW CONSULTING SERVES LTD DISCLAIMS ALL WARRANTIES RELATING TO 
     THIS SOFTWARE, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
     TO ANY IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A 
     PARTICULAR PURPOSE, AND ALL SUCH WARRANTIES ARE EXPRESSLY AND 
     SPECIFICALLY DISCLAIMED.  NEITHER MORNINGDEW CONSULTING SERVICES LTD. 
     NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE CREATION, PRODUCTION, OR 
     DELIVERY OF THIS SOFTWARE SHALL BE LIABLE FOR ANY INDIRECT, 
     CONSEQUENTIAL, OR INCIDENTAL DAMAGES ARISING OUT OF THE USE OR 
     INABILITY TO USE SUCH SOFTWARE EVEN IF MORNINGDEW CONSULTING SERVICES 
     LTD. HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR CLAIMS.  
     IN NO EVENT SHALL MORNINGDEW CONSULTING SERVICES LTD.'S LIABILITY FOR 
     ANY DAMAGES EVER EXCEED THE PRICE PAID FOR THE LICENSE TO USE THE 
     SOFTWARE, REGARDLESS OF THE FORM OF THE CLAIM.  THE PERSON USING THE 
     SOFTWARE BEARS ALL RISK AS TO THE QUALITY AND PERFORMANCE OF THE 
     SOFTWARE.

     This agreement shall be governed by the laws of the Province of 
     British Columbia and shall inure to the benefit of Morningdew 
     Consulting Services Ltd. and any successors, administrators, heirs and 
     assigns.  Any action or proceeding brought by either party against the 
     other arising out of or related to this agreement shall be brought 
     only in a PROVINCIAL or FEDERAL COURT of competent jurisdiction 
     located in Victoria, British Columbia.  The parties thereby consent to 
     in personam jurisdiction of said courts.

     Morningdew Consulting Services, Ltd. reserves the right to update the 
     contents of the KNITWARE Sweater Design program and its associated 
     data and documentation at its discretion and without the consent of or 
     any obligation to any licensed users.

0.2  LICENSE

     KNITWARE Sweater Design is NOT public domain or free software.  This 
     version of KNITWARE Sweater Design is distributed as "SHAREWARE".  
     KNITWARE Sweater Design is Copyright (C) 1991, 1992 by Morningdew 
     Consulting Services, Ltd.  All rights reserved.  Morningdew Consulting 
     permits the copying and transfer of the Shareware Version of KNITWARE 
     Sweater Design to others, under the following conditions:

     1.   No fee shall be charged for copies of the KNITWARE Sweater Design 
          program, its data, or documentation.  A charge for the copying 
          service and media is allowed as long as this charge does not 
          exceed $10.00.

     2.   The recipient receives an unmodified copy of all the KNITWARE 
          Sweater Design files, including this document.

     3.   You may not disassemble or decompile the KNITWARE Sweater Design 
          files or in any fashion attempt to reverse engineer the program.



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***






*** KNITWARE *** SWEATER DESIGN *********************************  Page 3

0.2  LICENSE   (continued)

     Morningdew Consulting encourages the copying and transfer of the 
     program to others so that it may be evaluated by as many interested 
     users as possible.  After the evaluation period, it is expected that 
     the users either register their copy of the program, or discontinue 
     using it.

0.3  TRADEMARK ACKNOWLEDGEMENT

     MS-DOS is a registered trademark of Microsoft Corporation.
     XT, AT, and PC-DOS are registered trademarks of IBM Corporation. 
     BOND is a registered trademark of Kimberly Marketing Corporation.

0.4  REQUIRED EQUIPMENT

     KNITWARE Sweater Design will run on most IBM PC/AT/XT/PS-2 or 
     compatible computers, with at least 256 KB of free RAM after DOS and 
     any TSR programs are installed, PC-DOS or MS-DOS 2.1 or greater, one 
     floppy disk drive, and a printer.  A hard disk and a colour monitor 
     are optional.

0.5  REGISTRATION INFORMATION

     The cost of registration is $40.00 (Canadian) or $35.00 (US), 
     including shipping and handling and all applicable taxes.   This 
     registration fee provides you with the following benefits:

     1.   You will receive the most recent commercial version of KNITWARE 
          Sweater Design.  You will also receive a printed manual.

     2.   It will put you on the mailing list to receive information about 
          KNITWARE updates and new programs as they become available.  
          Updates will be provided at a minimal cost (to cover media, 
          processing, and shipping costs).

     3.   We will provide you with free support by mail and/or telephone 
          for at least 6 months after registration.

     We encourage you to support the Shareware method of software 
     distribution by becoming a registered user.  A registration form is 
     provided in Appendix C of this manual, or can be printed from the file 
     KWSORDER.DOC.

0.6  MONEY BACK GUARANTEE

     If you are not completely satisfied with your REGISTERED version, you 
     may return it within 60 days for a full refund.  NO QUESTIONS ASKED.


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***













*** KNITWARE *** SWEATER DESIGN *********************************  Page 4

1.0   INTRODUCTION

      The KNITWARE Sweater Design program has been written by a 
      knitter for knitters.  I knit both by hand, and using a BOND 
      CLASSIC knitting frame.  I was frustrated by the continual need 
      to convert patterns for different yarns, or sizes, for changing 
      a neckline, or lengthening a sleeve.  The KNITWARE Sweater 
      Design program was the eventual outcome of this frustration.

      This program will print a knitting pattern for you to use in 
      knitting a customized sweater, using the data that you give it, 
      and tables of standard body measurements and needle sizes.  The 
      program uses your measurements, your style selections, your 
      gauge and yarn information to create a unique pattern.  This 
      pattern also gives you a permanent record of what you have 
      knitted, and when.

      The pattern instructions are written for either hand or machine 
      knitters.  The machine knitting instructions are very 
      simplified, assuming you are using a basic knitting frame, 
      without a ribber.  If you have a ribber (lucky you) feel free to 
      use it.  There are no specific instructions for punchcard or 
      electronic machines.

      KNITWARE Sweater Design will handle most combinations of the 
      following:

        -  Knit body of sweater in stocking stitch by machine or hand.
        -  Knit ribbing by machine or hand.
        -  Pullover or cardigan style. 
        -  Drop shoulder, raglan, or set-in (fitted) sleeve style.
        -  Crew (round) or V neckline, or rolled cowl collar.
        -  Body length: waist, regular, hip, or coat.
        -  Children's sizes 20 - 32, Women's sizes 30 - 48,
           Men's sizes 32 - 52.
        -  Variable amount of ease from very tight to oversized fit.
        -  All default finished measurements (e.g. length of body, 
           ribbing, sleeve, depth or width of neck, etc.) can be 
           changed.
        -  Measurements in imperial (inches) or metric (cm).
        -  Calculate amount of yarn required.

      There are many things the program doesn't do.  If there is 
      something particular you would like to see, let us know about 
      it.  The program is continually under revision, and I am happy 
      to incorporate anyone's good ideas.

      Particularly important, please let us know if you find any 
      mistakes or errors.  The program has been tested exhaustively, 
      but there are so many possible combinations that some small 
      mistakes may have slipped through.

      In this documentation, values to enter on the screen are often 
      shown in quotes (e.g. "N") to help distinguish them from the 
      surrounding text.  Only the value inside the quotes should be 
      typed, NOT the quotes themselves.  Please refer to section 5.1 
      for information on data entry, keyboard functions, help, error, 
      and verification messages.


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***



*** KNITWARE *** SWEATER DESIGN *********************************  Page 5

1.1   DESIGN NOTES

      The program gives you a pattern for a plain sweater tailored to 
      your size and specifications.  You can easily add stripes, 
      intarsia, lace holes, cables, etc..  Remember, if adding cables 
      (or anything else that will change the stitch gauge), to either 
      knit a test swatch with the cables (if a lot of it), or to 
      adjust the ease a bit (for a small amount).

      If you are using two or more different yarns (e.g. body in a 
      multi-coloured nubbly yarn, ribbing in a plain yarn) it is a 
      good idea to make a test swatch with each yarn, and run the 
      program twice, once with each stitch gauge.  You will have to 
      manually combine the two patterns, or decide which bits to use, 
      but it will give you a better-looking finished garment.

1.2   CAUTION

      The patterns created by the KNITWARE program will produce 
      wearable, well-fitting sweaters in most cases.  However, just as 
      for off-the-shelf patterns, knitting with the wrong needles, or 
      to a different gauge will give unpredictable results.  

      With the KNITWARE program, you have an even greater possibility 
      of error, since you can also change any of the measurement 
      data.  For example, you could make the front neck width wider 
      than the back neck width, or the wrist measurement larger than 
      the upper arm.  There are far too many possibilities for the 
      program to check them all, we assume that you will use common 
      sense.

      Also, if you do change any measurement data, check your 
      measurements and the knitting instructions for reasonableness, 
      BEFORE starting to knit.

2.0   INSTALLING THE PROGRAM

      This program can be run on any IBM-PC compatible micro 
      computer.  The computer must run under DOS, have a 5.25" or 3.5" 
      diskette drive, and a printer.  The program can be run from the 
      diskette or installed on a hard disk.

      The following instructions are to be executed from native DOS.  
      You may have easier ways to do these things if you have a DOS 
      shell, windows or menu program installed.




*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 6

2.1   FLOPPY DISK INSTALLATION

      Before running the program for the first time, you should make a 
      working copy of the KNITWARE diskette, in case the original is 
      destroyed.

      Use the DOS DISKCOPY command to format a blank diskette and copy 
      all the files.  If you need more information, check your DOS 
      User's Guide.

      Insert the KNITWARE diskette in drive A.  If you have two floppy 
      drives of the same size (i.e. both 5.25 or both 3.5), insert the 
      blank diskette in drive B and type the following:
                DISKCOPY A: B:    [Enter]
      Otherwise (only one floppy drive, or two of different sizes), 
      type:
                DISKCOPY A: A:    [Enter]
      and follow the instructions on the screen.

      When the copy is complete, label the working copy.  Store the 
      original KNITWARE disk in a safe place.


2.2   HARD DISK INSTALLATION

      If you have a hard disk, the Sweater Design program can be 
      installed on it.  The install program provided with KNITWARE 
      will create a directory called KNIT on the hard drive of your 
      choice.  If the directory KNIT already exists, the install 
      program will use it.

      If you do not want to use the default KNIT directory, then do 
      not use the install program.  Instead, create your own directory 
      and copy the files from the KNITWARE disk to it.

      To run the install program, insert the KNITWARE disk in the 
      floppy drive, and type a command of the format:
                KWSINSTL X Y [Enter]   (e.g. KWSINSTL A C)
      X should be the floppy drive directory (usually A or B), and Y 
      is the hard drive directory (usually C, might be D, E, or F, 
      etc.).

      When the install is complete, remove the KNITWARE diskette and 
      store it in a safe place.  You will not need it again to run the 
      Sweater Design program.




*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 7

3.    GETTING STARTED

      Before you start running the program, you need a few things from 
      your knitting world:

       -   An idea of the sweater design that you want to knit.
       -   The size, and approximate finished measurements required 
           (or at least an idea as to how your model varies from the 
           "average").
       -   The yarn information, from the manufacturer's ball-band, or 
           from the spinner, if homespun.
       -   A test swatch of the yarn knitted on the needles (or dial 
           gauge or keyplate) and the pattern (usually stocking 
           stitch) that is to be used for the body of the sweater.  
           From this, the gauge over 4 inches (10 cm) for rows and 
           stitches must have been calculated.  AN ACCURATE TEST GAUGE 
           IS CRUCIAL to designing and knitting a sweater that will 
           fit well.


3.1   STARTING THE PROGRAM

      Once the program has been installed (see Section 2), you are 
      ready to run it.

      If installed on hard disk, go to the working directory.  Under 
      native DOS, type:

                CD \KNIT   [Enter]      Replace KNIT with the name of
                                        your directory, if different.
                KWS        [Enter]

      If running from a floppy disk, insert your working copy of the                                                  _______
      KNITWARE disk in drive A and type:

                A:         [Enter]      To point to drive A as your
                                        working directory.
                KWS        [Enter]











*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 8

3.2   INITIALIZING

      The Sweater Design program will start with a Designer Identification 
      Screen.


                * * * * * DESIGNER IDENTIFICATION * * * * *
                *                                         *
                *   Name:                                 *
                *                                         *
                *       [F1] Help       [Esc] Quit        *
                *                                         *
                * * * * * * * * * * * * * * * * * * * * * *

     
      The program needs to know who you are, so it can retrieve the correct 
      designer defaults and pattern data for you.  The first time that you 
      run the program, the name field will be blank.

      Whenever you run the program after that first time, the name that you 
      entered will be displayed.  To use the displayed name, simply press 
      [Enter].  To use a different name, type over the displayed name, then 
      press [Enter].

      If for some reason you do not wish to run the program at this time, 
      simply press the [Esc] key, and turn off the computer (removing the 
      disk first if running from floppy disk).

3.3   SET DESIGNER DEFAULTS

      The first time you run the program (that is, the first time the 
      program recognizes a new name), you must set the designer defaults.  
      The designer defaults data screen is displayed.

      Read section 5.0 for general information regarding data entry, and 
      section 5.1 for specifics relating to the designer data form.  In 
      general, you use the down arrow to move from one field to the next.  
      If you wish to change the data shown, press the [Enter] key, and a 
      menu of valid selections will pop up.  Highlight a value from the 
      menu, using the first letter or the up and down arrows, then press 
      [Enter] to make your selection and return to the form.

      Enter the values you would most commonly use.  For example, you may 
      knit both by hand and machine, but if you use the machine most often, 
      select "Machine" from the menu. 

      When you have entered this data, it is saved on a file, and these 
      values are then used as the defaults for any patterns that you design 
      with the program.  Any or all of them may be changed at design time.


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***












*** KNITWARE *** SWEATER DESIGN *********************************  Page 9

4.    MENU OPTIONS

      The Sweater Design program is run from the Main Menu.

                         MAIN MENU

                     Design new pattern
                     Change existing pattern
                     Print pattern instructions
                     Utilities
                     Help
                     Quit

                Press cursor keys or first letter
                 of command to position cursor,
                 then press [Enter] to select.

      To highlight a line (position cursor), type the first letter of an 
      option (or command), or use the UP and DOWN arrow keys.  Press the 
      [Enter] key to make your selection.

      In a typical session you would design a new pattern (first option), 
      and print it.  After checking the printed measurements, you may 
      decide to change the pattern (second option), and print it again. If 
      you lose the pattern instructions, or it becomes too tattered, you 
      can then print the changed instructions again (third option).

      A full description of each menu option, along with how and when you 
      might want to use it, is given in the following sections.  


4.1   DESIGN A NEW PATTERN

      This is where it all starts.  You have some wool, a test swatch, some 
      ideas as the size and style of sweater you want.  Here all your 
      information is entered, and the program calculates the number of 
      stitches, of rows, of decreases, and cast-offs to make this 
      one-and-only just-for-you sweater.

      Section 5 takes you through the data entry procedures step by step.  
      When all the data has been entered and verified, the program saves it 
      and gives you the option to print it.  Usually, you would print the 
      pattern, but you may exit at this time, and print it (selecting the 
      print option from the main menu) in a later session.

      When the program is ready to save the data it will display:

           Enter pattern name: 

      Try to choose a name that is meaningful.  One suggestion is the name 
      of the person the sweater is knitted for, followed by a description, 
      number or date (e.g. Mary flowers, Judith Oct90, Kevin#7).  The name 
      may be up to 15 characters long, and be composed of letters, spaces, 
      numbers and most special characters (e.g. -   * # , . /).                                                  _

      If the name already exists on your pattern file, a message will be 
      displayed and you will have to choose a new name.


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***




*** KNITWARE *** SWEATER DESIGN *********************************  Page 10

4.2   CHANGE EXISTING PATTERN

      If you want to change some part of a saved pattern design, you 
      should choose this option.

      Initially, the program will display:

                     LOAD OLD PATTERN DATA

           PATTERN NAMES CURRENTLY ON FILE:

           1.  aaaaa     6.  fffff 
           2.  bbbbb
           3.  ccccc
           4.  ddddd
           5.  eeeee

           Type number for pattern name,  
             [ESC] to quit, [Page Up] or [Page Down] to scroll:

      Up to fifteen pattern names will be displayed at one time.  If the 
      pattern name that you require (it is printed at the top of your 
      pattern) is not shown, use the [Page Down] key to scroll down to 
      it.  When the pattern name you want is displayed, enter the number 
      associated with it, then press [Enter].  

           Pattern name is: xxxxxxxx
           Accept: Yes or No:  Y

      The confirmation message just checks that you selected the correct 
      number.  If the pattern name is the one you want, press [Enter] to 
      verify, otherwise press 'N' then [Enter] to chose a different 
      pattern name.

      When the pattern data has been retrieved, the program proceeds to 
      the "Entering Design Data" screens.  Your data values, as they 
      were last entered, will be displayed.  To change any of this data, 
      follow the instructions in Section 5.  For any screen that you do 
      not wish to change, simply press [Page Down] to accept the data as 
      displayed.

      When the Finished Measurements have been verified, the data must 
      be saved again.  The screen will show:

           Current pattern name:  xxxxx
           Re-save pattern under old name(O)
                or with a new name (N):   O

      If you are just correcting some values, and you have no reason to 
      save the old data, press [Enter].  


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***











*** KNITWARE *** SWEATER DESIGN *********************************  Page 11

4.2   CHANGE EXISTING PATTERN  (continued)

      If, however, you have made major changes to create a new pattern 
      from an old one, or you want to decide between the two at some 
      later time, press "N" [Enter].  The program will then request a 
      new name for the pattern data.  See section 4.1 if you need 
      further information.

      All data that is displayed for a CHANGE is as you last entered and 
      stored it.  This holds true for measurement data as well, as long 
      as none of the size or style data is changed.

      However, when you change ANY of the size, sex, or style data the 
      program will recalculate default values for ALL the measurement 
      data.  If the measurement data has been recalculated from default 
      values, the "** Default Measurements **" message will appear near 
      the top right of the data entry window.  

      This may occasionally be a nuisance.  For example, if you change 
      the size, if affects every measurement field, so recalculating 
      them is important.  However, changing from a crew to a V neck 
      affects only the neck shaping, and if you have previously 
      customized sleeve length, back width, etc., these custom changes 
      to the measurement data will have to be re-entered.

      After the changed data has been saved, you would normally print 
      it.


4.3   PRINT PATTERN INSTRUCTIONS

      When you have just finished designing a new pattern, or changing 
      an old one, you are automatically given the option to print it.  
      You should print the pattern to verify the details.  You can then 
      use it to knit the sweater.

      The print procedure may also be used to print a pattern that has 
      been saved on file previously.

      If you select the print option from the main menu, and there is a 
      current pattern, the following message is displayed:

           Print current pattern (C) or one from file (F):  C

      For the current pattern (name is displayed on the upper left of 
      the screen) simply press [Enter].  If you wish to print a 
      different pattern (that you have previously saved on file), type 
      'F', then press [Enter].  In this case the LOAD OLD PATTERN DATA 
      screen will be displayed (see section 4.2).

      The next message displayed is:

           Calculate amount of yarn required (Y/N):  N

*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***









*** KNITWARE *** SWEATER DESIGN *********************************  Page 12

4.3   PRINT PATTERN INSTRUCTIONS  (continued)

      There are many ways to calculate the amount of yarn required.  The 
      program uses only one method, and for that method you must tell it 
      how far one ball of yarn will go.  To find how far one ball will 
      go, you can simply cast on a number of stitches (e.g. 50) and knit 
      until the ball is finished, or you can continue knitting your test 
      swatch until the ball is gone.

      Optionally, you can initially say no to this question, and start 
      knitting your sweater.  When one ball is gone in knitting the 
      back, then re-run the program saying Yes to this question, and 
      check whether you have purchased enough yarn to finish the 
      garment.

      If you have knit up your one ball, then type 'Y' and press 
      [Enter].  

                One ball of yarn knits    stitches
                                    by    rows.

      Fill in the blanks (e.g. if your one ball knitted 27.5 rows of 50 
      stitches, you would type 50 on the first line, and 28 on the 
      second line), then press [Enter].

      The final message displayed is:

           Check that printer is turned on, and set to top of form.
                Press any key to continue.

      Check your printer is turned on, that the paper is inserted 
      correctly and is set to the top of form.  The pattern prints on 
      standard letter size paper (8.5 x 11 inches).  If you commonly use 
      a different size, check that the correct size is loaded, and the 
      form length is set to 11.

      The pattern usually prints on two pages.  The time taken will 
      depend on the speed of your printer.


4.4   UTILITIES

      Certain procedures that are used infrequently are combined under 
      this heading.  Selecting the Utilities option on the Main Menu 
      brings up the Utilities Menu.

                        UTILITIES MENU

                     Change designer defaults
                     Delete pattern data
                     List pattern names
                     Return to main menu

      Select "Return" if you do not wish to do a utilities function at 
      this time, or when you have completed the utilities function(s).

*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***







*** KNITWARE *** SWEATER DESIGN *********************************  Page 13

4.4.1 CHANGE DESIGNER DEFAULTS

      The first time that you used the program, you had to enter the 
      Designer Defaults (see Section 3.3).  However, as you use the 
      program more, or as your needs change, you may want to change some 
      of these default values.

      Changing the designer defaults is identical to Setting Designer 
      Defaults (Section 3.3) except for the values displayed on the 
      screen.  Change those values that you wish to and they will be 
      changed on the defaults file.  Upon completion, you will be 
      returned to the Utilities menu.


4.4.2 DELETE PATTERN DATA

      As the number of patterns on your pattern file increases, 
      accessing (loading and/or saving) the data takes longer.  The 
      program allows a maximum of 99 patterns on the file, but you will 
      probably decide long before then that the file access is taking 
      too long.

      You may also have patterns on the file that were trials, never 
      used, or unwanted.  The delete function can be used to tidy up the 
      file.

      WARNING.  Once deleted, the pattern data can no longer be 
      retrieved or used again.  The program does NOT make a backup of 
      your pattern data file before the deletions are done.  If you want 
      a backup, refer to your DOS manual on how to do it.  The file name 
      is KWS PATT.DAT.            _

      The Delete Pattern Data utility function allows you to select 
      which patterns to delete from the file.  You may delete any 
      number, from none to all of them.  Selecting this option on the 
      Utilities menu takes you to the DELETE OLD PATTERN DATA screen:

                     DELETE OLD PATTERN DATA

           PATTERN NAMES CURRENTLY ON FILE:

           1.  aaaaa     6.  fffff 
           2.  bbbbb
           3.  ccccc
           4.  ddddd
           5.  eeeee

           Type number for pattern name, [F2] for all deletes selected, 
             [ESC] to quit, [Page Up] or [Page Down] to scroll:

      Enter the number of the first pattern to delete, verify the name, 
      then enter the next number as it is requested.  Pattern numbers 
      may be entered in any order.  Pattern numbers marked for deletion 
      will be highlighted on the screen.  Press [ESC] at any time to 
      exit without deleting any patterns, for example, if you enter and 
      verify a pattern that you really want to keep.


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***





*** KNITWARE *** SWEATER DESIGN *********************************  Page 14

4.4.2 DELETE PATTERN DATA   (continued)

      When you have finished selecting the pattern numbers to delete, 
      press [F2] to physically delete the patterns from the file.  The 
      computer will take a few moments to process the deletes, and then 
      will display:

           PATTERN FILE DELETIONS COMPLETED.
           Press any key to continue.

      when finished.  Press any key and you will be returned to the 
      Utilities Menu.


4.4.3 LIST PATTERN NAMES

      This function allows you to look at the names of the patterns you 
      have stored on the file.  It simply displays the pattern names in 
      the same format as the CHANGE or DELETE, and allows you to scroll 
      through them using the [Page Up] and [Page Down] keys.  Press 
      [ESC] when you have finished.

4.5   HELP

      A lot of the information covered in this manual is available as 
      on-line help.  There are two kinds of help in the Sweater Design 
      program.  

      During data entry, when you are entering information to specific 
      fields, pressing the [F1] key will provide a single line of 
      information in the lower left of your screen.  It will describe 
      the field, its uses, whether it is mandatory or optional, etc.

      General information about the different program functions is 
      available through the HELP option on the Main Menu.  Selecting the 
      HELP option will bring up a series of menus for you to select the 
      topic of interest.  The information will be displayed on a full 
      screen.  Use the [Page Up] and [Page Down] keys to scroll through 
      the screens, [ESC] when you are finished.


4.6   QUIT

      When you have finished your Sweater Design session, select this 
      option to quit.  This ensures that all files are closed properly 
      and that no data will be lost.

      This option may also be selected before any other, in case you 
      remember that there is something else that you should be doing 
      instead.


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***











*** KNITWARE *** SWEATER DESIGN *********************************  Page 15

5.    ENTERING DESIGN DATA

      All data entry for this program follows a few simple rules.  

       -   Default (displayed) values will be used unless you type over 
           them.
       -   Type the value you want, then press the [Enter] key.
       -   The backspace <--, [Insert], and [Delete] keys can be used to 
           change data as it is being entered in a field.
       -   You may use the UP and DOWN arrow keys to move from one field 
           or position to another, without changing the data.
       -   The [Esc] key is used to quit the data entry altogether, and 
           return to the Main Menu.
       -   Use the [F1] key for Help. A single line of instructions will 
           be provided at the bottom left of the screen.
        -  Use the [Page Down] key to bypass all or the remaining fields 
           on the screen, if they do not need changing.
        -  A "BEEP" will sound if you try to enter a character in a 
           numeric field, or if your data is too long.

      There are two major types of data to be entered: mandatory, and 
      optional.  Mandatory data fields are those that will be used to 
      calculate the pattern data.  Some examples are: stitch and row 
      gauge, size, sleeve length.  If the required data values are not 
      accurate, the sweater will, in all probability, not fit.

      Optional data is for information purposes only.  It is printed on 
      the pattern to help you remember when, or with what the sweater 
      was knitted.  Some examples of optional data are: the date 
      finished, for whom the sweater is knitted, the yarn information.

      Some data values are entered by a pop-up menu selection: e.g. sex, 
      size.  Use the UP and DOWN arrow keys to move from one field to 
      another.  Use the [Enter] key to select a field to change.  A menu 
      of options will pop up.  The first option, "No change", allows you 
      to return to the data entry screen without changing the previously 
      displayed value.  Otherwise, use the first letter or cursor keys 
      to highlight an option, then the [Enter] key to select.

      After the last data field on the screen has been passed, the 
      verify message appears near the bottom of the screen:

           Press ENTER to Accept, any other key to Edit.

      You should check everything on the screen.  If all is fine, press 
      [Enter], and the program will display the next screen.  However, 
      if there IS something you want to change, press any other key, and 
      the cursor will return to the first field on the screen.




*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***











*** KNITWARE *** SWEATER DESIGN *********************************  Page 16

5.    ENTERING DESIGN DATA   (continued)

      The program checks all data as it is entered.  If it is found to 
      be incorrect, or questionable, the beep is sounded and a message 
      is displayed in the lower left of the screen.  The message must be 
      acknowledged (press any key) before you can correct the entry. 
      Most messages are self-explanatory, but if you have trouble, check 
      Section 8 which contains a list of some messages and their 
      explanations.

      However, not all possibilities can be checked by the program.  You 
      should verify that what you have entered on the screen is what you 
      want, before pressing [Enter] on the Verify response.  You should 
      also check the printed pattern thoroughly (especially the Finished 
      Measurements section) BEFORE starting to knit the sweater.


5.1   DESIGNER DATA

      The Designer Data Screen is the first screen to be displayed for 
      designing a new pattern, or changing an old pattern.  It is the 
      same screen used for setting or changing Designer Defaults. 

      The screen display is as follows:

                                         ----KNITTING METHOD-----
           Measurement units: ins        Body of sweater: Machine
               Screen colour: Magenta            Ribbing: Machine

                                  Type of knitting needles: Metric
                                  Type of knitting machine: Bond
                                Ribbing done first or last: First

      All data fields on this screen are mandatory.  Values are entered 
      from pop-up menus.

      The default values shown on the screen will depend on what your 
      designer defaults have been set to.  Review the data on the 
      screen, and determine which fields need changing for the current 
      pattern.  If the meaning of a field is not clear, press [F1] for 
      help.

      If you do not want to make any changes, use the [Page Down] key to 
      bypass each field on the screen, then press [Enter] for the verify 
      message.

      If you change the COLOUR, the new colours will not be used until 
      you finish the screen.  If you have a monochromatic (no colours) 
      monitor, your colour will automatically be set to "None".  
      Changing it to a different colour may have unpredictable results.



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***










*** KNITWARE *** SWEATER DESIGN *********************************  Page 17

5.1   DESIGNER DATA   (continued)

      If you are knitting either the body or ribbing by hand, the "TYPE 
      OF NEEDLES" message will be displayed.  Entering this field 
      correctly will improve the clarity of the printed pattern. 
      Likewise, if you are knitting either the body or ribbing by 
      machine, the "TYPE OF MACHINE" message will be displayed.

      If you are changing from all hand or all machine to the other, or 
      a combination, the screen will be displayed twice, the second time 
      with the new "TYPE OF NEEDLES/MACHINE" message.

      You may knit both the body and the ribbing by machine, or both by 
      hand.  You may also knit the body by machine and the ribbing by 
      hand.  However, the program does not allow the reverse (body by 
      hand, and ribbing by machine).

      If you are knitting both the body and the ribbing by machine, the 
      "RIBBING FIRST OR LAST" message will be displayed.  If you have a 
      ribber, or prefer to do the ribbing first, continuing from it to 
      the body of the sweater, enter "First".  If, instead, you like to 
      knit the body first, then rehang the stitches to do the ribbing, 
      enter "Last".  This field is used only to determine the order of 
      the printed pattern instructions for the ribbing.

























*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 18

5.2   YARN AND GAUGE DATA

      The second screen is for entry of the yarn and tension gauge 
      information.

           Knitting sweater for whom:
                          Start date: xxxxxxxxxxx
                         Finish date:

           (Manufacturers) yarn name:
                      Yarn colour(s):
                    Yarn composition:
                Washing instructions:

           TEST SWATCH GAUGE: 
           (over 10 cm = 4 in)
               Stitches: 20       Keyplate size for body of sweater: 4
                   Rows: 28               Keyplate size for ribbing: 3

      The first seven fields on this screen are optional.  If entered, 
      they are printed on the pattern.  Sometimes, it is handy to have 
      this information available.  At other times, you may feel it is a 
      waste of time to enter the yarn data, and decide instead to tape a 
      ball-band and a few strands of yarn to the back or the bottom of 
      the pattern.

      The default value for START DATE is the current date.  If there is 
      not enough room in the yarn data fields, abbreviate some part of 
      it and try again.

      The GAUGE DATA is crucial.  Check the measurements and 
      calculations of your test swatch gauge carefully.   Remember that 
      this gauge is measured over 4 inches or 10 cm (NOT one inch).

      DIAL GAUGE/KEYPLATE/NEEDLE SIZES are not used in any calculations, 
      but they are necessary for clarity of the printed pattern 
      instructions.  The dial gauge/keyplate size messages are displayed 
      if knitting by machine.

      NEEDLE SIZE messages are displayed if knitting by hand.  The 
      needle size should be in the needle type entered on the Designer 
      Data.  e.g. "4.25" is valid for metric, but not for American.  The 
      needle size entered will be checked against a table, and a message 
      displayed if the value is not valid.





*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 19

5.3   SWEATER STYLE DATA

      The sweater style data screen is as follows:

                 Sex: Woman             Ease style: Moderate
                Size: 36

                 Sweater style: Pullover
                Sweater length: Regular

                Neckline style: Crew

                Shoulder style: Drop shoulder
                 Sleeve length: Full

      All data fields on this screen are mandatory.  Values are entered 
      from pop-up menus.

      The SIZE and SEX are used to look up standard measurements in the 
      size table, and to calculate the finished measurements of your 
      sweater.  The sex field is important; the measurements for a 
      child's 32 are different from a woman's 32, which are in turn 
      different from a man's 32.  Usually, you should chose the size 
      closest to the actual chest measurement.

      CHILDREN's sizes relate to approximate ages as follows:
           Size (in):   20   22   24   26   28   30   32
           Size (cm):   51   56   61   66   71   76   81
           Age:          2    4    6    8   10   12   14
      As we are all well aware, children vary greatly in their growth.  
      The chest size, body length and arm lengths should be used 
      primarily in selecting a size, not the age.  For example, the 
      sweater knitted for a short chubby 4 year old will not fit his 
      tall skinny 4 year old friend.

      EASE STYLE determines the amount of ease in the garment.  It 
      varies from very tight (with no ease) to oversized (which has 5 to 
      6 inches of ease around the chest for women's sizes).  Ease is 
      applied to the chest, back width, armhole and upper arm 
      measurements.

      The CARDIGAN style is for a buttoned front on overlapping vertical 
      ribbing, which is the same width as the neckline ribbing.  

      The SWEATER BODY LENGTH code is used to calculate the finished 
      body length measurement.  It is also used to determine where the 
      ribbing will fit.  Use "Waist" to have the ribbing snug around the 
      waist, "Hip" or "Coat" to have it fit around the hips, "Regular" 
      to have it fit between the waist and hips (exactly where depends 
      on the finished body length measurement).

      Note: if you want the ribbing to fit more snugly below the hips 
      for a coat length sweater, you may want to decrease the body 
      ribbing width.



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***






*** KNITWARE *** SWEATER DESIGN *********************************  Page 20

5.4   SWEATER STYLE DATA  (continued)

      Both the CREW (round) and V NECKLINE have a ribbing finish. The 
      instructions call for a K1P1 rib by hand, or a 2x1 rib by 
      machine.  However, it is a relatively easy matter for an 
      experienced knitter to change this to a different kind of ribbing, 
      or to a rolled neck, a picot edge, etc..

      The COWL NECK is for a fairly loose collar knitted in stocking 
      stitch, that will roll naturally.  Knitting to a tighter gauge 
      (smaller needles/keyplate/dial gauge) will give a collar with a 
      closer fit.  Likewise, a looser gauge will give a looser fit.  
      Optionally, the collar may be knit in garter stitch, or any 
      ribbing or pattern, instead of stocking stitch.

      The COWL NECK collar is knit in one piece on the sweater, with a 
      seam on the left side.  When finished, and rolled down, the right 
      (knit) side will be showing.

      The SLEEVE LENGTH style is used to calculate the finished sleeve 
      length, and to determine where the sleeve ribbing will fit.  A 
      full length sleeve will come down to the hand, and the ribbing 
      will fit around the wrist.  A 3/4 length sleeve will end midway 
      between the wrist and elbow, and the ribbing should fit around the 
      forearm at that point.
























*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 21

5.5   FINISHED MEASUREMENTS DATA

      An example of the finished measurements data screen is as follows:

                           FINISHED MEASUREMENTS DATA

           Woman's size 36 with Moderate fit.  * Default measurements *

           ---------- SET-IN SLEEVE REGULAR LENGTH PULLOVER -----------
             Chest: 38.1     Back width: 13.8      Body length:    22.7
           Ribbing: 34.2                           incl. ribbing:   2.5

           ---------------------- CREW NECKLINE -----------------------
           Front neck width at bottom:  3.5      Back neck width:  6.5
           Front neck depth at centre:  3.7      Neck ribbing:     1.

           -------------------- FULL LENGTH SLEEVE --------------------
           Armhole:  16.      Sleeve top:    11.8    Sleeve length: 18.3
           Ribbing:   7.1     Sleeve bottom:  7.9    incl. ribbing:  2.

      Not all of the fields shown above will be displayed for every 
      style.  Back width is used only for set-in sleeves.  Neck ribbing 
      length is replaced with collar length for a cowl neck.  Sleeve top 
      (upper arm) measurement is not needed for a drop shoulder style.  

      The data shown here is that which the program calculated using the 
      size and style data that you entered in the previous screens, and 
      the size table.  The size table contains standard or "average" 
      measurements for given sizes.  How close to average you are will 
      determine how many of these fields you will want to change.

      Since it is hard to check all these numbers on the screen, it is a 
      good idea to print the pattern using this "first-pass" data, check 
      the data from the printed pattern, then return to the program to 
      change those fields that need changing, and finally print the 
      revised pattern to knit from.

      Not every measurement needs to be checked.  Check those that are 
      crucial to the fit of the garment, and the way you want it to 
      look.

      All data shown on this screen (except size) are finished 
      measurements of the sweater.  They are calculated including the 
      ease specified in EASE STYLE.





*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 22

5.5   FINISHED MEASUREMENTS DATA   (continued)

      BODY RIBBING WIDTH (labelled as ribbing, below chest on screen) is 
      the finished measurement of the ribbing when very slightly 
      stretched, so that it fits comfortably at the length specified.

      SLEEVE BOTTOM is the finished measurement of the sleeve at the 
      wrist for full length sleeves or at the forearm for 3/4 length 
      sleeves.  To allow for blousing, it is a separate measurement from 
      SLEEVE RIBBING WIDTH (shown below it on the screen).  The ribbing 
      width is measured at the same place, for a comfortable fit of the 
      ribbing when it is very slightly stretched.
 
      LENGTHS are also calculated with a certain amount of ease, for 
      comfort and style.  Remember this ease when measuring your body 
      and sleeve lengths.   

      The finished measurements for body and sleeve length include the 
      ribbing length shown below them.  BODY LENGTH is measured from the 
      back of the neck (below the neck ribbing) to the bottom of the 
      ribbing.  SLEEVE LENGTH is measured from the underarm armhole seam 
      to the bottom of the ribbing.

      NECK measurements do not include the ribbing.  Neck depth is 
      measured from the centre bottom front of the neck to the top.  The 
      front neck width for a cardigan is both sides combined.

      NECK RIBBING length is also used as ribbing width for the vertical 
      front button/buttonhole ribbing on a cardigan.

      While reviewing or entering the finished measurement data, you may 
      decide that you would like to try a different size or style.  In 
      that case, press [Page Up] to return to the STYLE DATA screen.  
      This allows you to try several different sizes or styles, to see 
      what the finished measurements look like, without having to save, 
      or re-enter all the other data.













*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 23

6.    HOW TO QUIT

      The most common way to quit is to select the Quit option from the 
      main menu.  This closes the files and exits neatly from the 
      program.

      However, for any one of a number of reasons, you may wish to quit 
      before completing the pattern you are working with.

      If you wish to exit while in the data entry process, you can press 
      [Esc], and you will be returned to the main menu, where you can 
      choose option Quit.  Remember, if you press [Esc], that your 
      current data will NOT be saved.

      If you have a problem with the program, and even the [Esc] key 
      does not work, try [Ctrl] [Break] held down together.  This is not 
      such a tidy way of exiting, the data you were working on will be 
      lost, and files will not be closed properly.

      If even this does not work, you will have to reset your computer, 
      and start your session all over.  Remove any diskettes you may 
      have in your floppy drives.  To reset, press the RESET button if 
      you have one, press the [Ctrl] [Alt] and [Del] keys all together, 
      or turn the machine off, then on again.

7.    IF YOU HAVE A PROBLEM

      If you have a problem, first note (on paper), the exact nature of 
      the problem.  If it's a message on the screen, then do a [Print 
      Screen].

      Next read the documentation thoroughly.  If it is all still Greek 
      to you, then get help.  For the install, DOS commands, file 
      recovery, or start-up, you need someone who knows a bit of DOS and 
      how computers work.

      If it is something that has always worked fine before, try 
      resetting your system, and starting again.

      If it is a problem with the way the program works, the results it 
      gives you, or the data it uses, describe it on the Comment / 
      Problem Form (Appendix B) and mail or phone it to us.







*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 24

8.0   SYSTEM MESSAGES:

      There are several types of messages that may appear on your 
      screen.  Usually the beep will sound and the message will appear 
      at the bottom left of the screen.  

      Most of the messages require acknowledgement (press any key), and 
      a change in the input data.  Fatal errors will exit from the 
      program, and will require a change to the system environment 
      before the program can be re-run.

      Most messages are self-explanatory, ones that may be confusing are 
      listed below to help you understand them, and to continue with 
      your sweater design.

8.1   INFORMATION MESSAGES:

      These messages are displayed to provide information regarding the 
      status or activities of the program.   They may request you to 
      wait until a certain action is completed, before entering any more 
      data.

      ESC KEY PRESSED.  PRESS ENTER TO VERIFY, ANY OTHER KEY TO RETURN.
           This message is displayed to ensure that the [Esc] key is not 
           pressed accidentally.  Escaping from certain activities could 
           lose a lot of data.  If you pressed the [Esc] key 
           intentionally, now press [Enter] to confirm.  Any other key 
           will return you to the point you were before pressing [Esc].

      * * *   WORKING.   DO NOT DISTURB * * *
           Wait; do not use the keyboard.  This message is displayed 
           when the program is busy accessing file data, or doing 
           calculations.  If the file is large, a few seconds may be 
           required to complete the operation.  No keyboard instructions 
           can be accepted at this time.


8.2   WARNING MESSAGES:

      These messages indicate that the data entered MIGHT be incorrect. 
      The program will accept your entry, and move on to the next 
      field.  However, you should check the value you entered carefully, 
      and if it is incorrect, return to the field and revise it.

      *** DELETE A PATTERN NOW OR NEXT ONE WON'T SAVE
           A maximum of 99 patterns are allowed on the pattern file.  
           You have 98.  You MUST delete at least one now, or the next 
           time you try to save a pattern there will not be room on the 
           file for it.  See Utilities menu, section 4.4.2.


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***












*** KNITWARE *** SWEATER DESIGN *********************************  Page 25

8.2   WARNING MESSAGES    (continued):

      NECK OPENING MAY NOT BE BIG ENOUGH.  CHECK MEASUREMENTS.
           For a child's size 24 or less, a machine knit crew neck 
           pullover with grafted drop shoulder sleeves may not fit over 
           the child's head.  You can increase the back neck width, 
           front neck width, and/or front neck depth.  You can instead 
           use set-in or raglan sleeves, or do not graft both 
           shoulders.  The pattern will print the warning message too.  
           If you have remedied the situation as suggested above, then 
           ignore it.  The pattern will also print instructions for a 
           shoulder button placket closure.

      NEEDLE SIZE NOT FOUND ON FILE.
           The needle size you entered was not found on the needle size 
           table for your needle type (Metric, Canadian, or American).  
           However, the value you entered will be accepted unless you 
           change it.  Verify the value before continuing.

      PATTERN FILE NEARLY FULL.  TIME TO DELETE.
           A maximum of 99 patterns are allowed on the pattern file.  
           You have 90 or more. You should delete some of them, using 
           the Utilities Menu Delete Pattern Data function (see section 
           4.4.2).

      SLEEVE TOP TOO WIDE FOR RAGLAN SHAPING.  WILL MAKE NECKLINE TOO 
      BIG.
           The sleeve top measurement is too large, compared to the body 
           measurement.  The raglan shaping for the sleeve should match 
           that of the back and front.  With your measurements, this 
           leaves a large section at the top of the sleeve to 
           incorporate into the neckline (which will make it baggy).  
           Usually we like to keep this section less than 2 in. (adult 
           sizes).

           Your options are:
             -  If the measurement is fairly small, leave it as it is.
             -  Decrease sleeve top measurement.
             -  Use set-in sleeve or drop shoulder style.
             -  When knitting, decrease raglan slope on sleeve more 
                steeply than for back and front.  Make sure you keep the 
                same number of rows on sleeve cap, as on the printed 
                pattern.






*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 26

8.3   ERROR MESSAGES:

      These messages indicate that an error in the data entered has been 
      found.  The value entered will not be accepted, and MUST be 
      revised.

      ARMHOLE DECREASES TOO FLAT/STEEP FOR RAGLAN SHAPING.
           This is probably an error in your finished measurements 
           data.  A too flat condition may be caused by a comparatively 
           very large chest measurement, small back neck width, or small 
           armhole measurement.  Likewise, a too steep condition may be 
           caused by small chest / large back neck / large armhole.  In 
           particular, a raglan sleeve is not suitable for a wide back 
           neck.  

           Check your measurements.  If an error is found, change the 
           data, and try printing the pattern again.  If you think your 
           data is reasonable and see no reason why it should be 
           changed, send me a note with screen prints of all the input 
           and measurement data.  Otherwise, try a set-in sleeve or drop 
           shoulder style.

      CANNOT HAVE COWL NECK ON CARDIGAN OR SMALL CHILD.
           Cowl neck styling is not included for a cardigan, or for a 
           child size 24 or less pullover (it would not fit over their 
           head).  Try a different neckline style.

      IF BODY KNITTED BY HAND, RIBBING MUST BE BY HAND ALSO.
           There is no option to allow hand ribbing on a machine knit 
           body.  If you really need this, print the pattern for all 
           hand, then change it to all machine, and print it again.

      MEASUREMENT DATA OUT OF RANGE, NOT REASONABLE.
           The finished measurement data is all numeric.  For each field 
           the program has a predefined 'range of reasonableness'; e.g. 
           you can have 2 inches of ribbing, but not 20 inches.  This 
           message is displayed when the program detects that the data 
           you just entered is outside this range. 

      NO DATA ON PATTERN FILE.
           Most probably you have requested an old pattern file name, 
           but have not yet stored any on file.  Once a new pattern has 
           been stored on file, it is then available for change or 
           printing.
 
      PATTERN NOT SAVED.  PATTERN FILE IS FULL.
           The pattern file is full, it has the maximum of 99 allowable 
           patterns on it.  Your current pattern has NOT been saved.  
           You must delete at least one pattern now (see Utilities 
           section 4.4.2), then re-enter your new pattern again to save 
           it.
*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***












*** KNITWARE *** SWEATER DESIGN *********************************  Page 27

8.3   ERROR MESSAGES:    (continued)

      PATTERN NAME ALREADY ON FILE.  CHOOSE A NEW ONE.
           When saving pattern data, you have chosen a name that already 
           exists on the file.  Each name on the file must be unique, so 
           you will have to change this new one slightly, and try again.

      SEX, SIZE COMBINATION NOT FOUND ON SIZE TABLE.
           Only certain combinations of size and sex are valid.  Default 
           data for these combinations is stored on the size table.  
           Valid combinations are: children sizes 20 - 32, women sizes 
           30 - 48, and men sizes 32 - 52.





































*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 28

8.4   FATAL ERROR MESSAGES:

      These messages indicate that the error found was so severe that 
      the program cannot continue.  After acknowledgement of the error, 
      the program will exit.  Be sure to note the error message, (or use 
      [Print Screen] key to print it) before acknowledging the message.

      Section 8.4.1 lists error messages for missing data files.  If 
      your message is one of these, follow the instructions in that 
      section.  Otherwise, continue reading here. Some examples follow:
                FATAL ERROR. WN OPEN FAILED IN .....
                FATAL ERROR. WN FRMOPN FAILED IN ....                               _

      RECOVERY.  After the program has quit, restart your computer 
      system, and try again.  If the error persists, there is probably a 
      problem with the program.  Try re-installing the Sweater Design 
      program (see section 2 and use the original KNITWARE disk).  If 
      the error still persists, write or call us for a new copy of the 
      program at no charge.

8.4.1      FILE MISSING MESSAGES:

           These messages are displayed when one of the data files is 
           missing.  The program needs this data to continue working.  
           The data files were originally installed from your KNITWARE 
           disk to your working disk (see section 2.0), but may somehow 
           have been deleted.

           BACKUP DEFAULTS FILE NOT FOUND.  CANNOT OPEN.

           BACKUP PATTERN DATA FILE NOT FOUND. CANNOT OPEN.

           NEEDLE SIZE FILE NOT FOUND.  CANNOT OPEN.

           PATTERN DATA FILE NOT FOUND.  CANNOT OPEN.

           SIZE TABLE NOT FOUND.  CANNOT OPEN.

           DESIGNER DEFAULTS FILE NOT FOUND.  CANNOT OPEN.










*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 29

8.4.1.1    RESTORE SYSTEM DATA FILES

           System data files are those files that the program reads 
           only, it never writes user data to them.  They are: size 
           table, needle sizes table, and the original defaults and 
           pattern files.

           To restore the data for these files, take your original 
           KNITWARE disk and copy the required file to your working 
           directory.  With the original KNITWARE disk in drive A, 
           follow one set of steps below, depending on where your 
           working directory is.

           For a hard disk installation, type:

                cd \knit  

           to change to the working directory, then type one of the 
           following:

                copy a:kws size.dat c:        for size data                          _
            or  copy a:kws ndl.dat  c:        for needle sizes                          _
            or  copy a:kws dflt.org c:        for original defaults                          _
            or  copy a:kws patt.org c:        for original pattern data                          _

           If running the program from floppy disk, insert the working 
           disk in drive B, then type one of the following:

                copy a:kws size.dat b:        for size data                          _
            or  copy a:kws ndl.dat  b:        for needle sizes                          _
            or  copy a:kws dflt.org b:        for original defaults                          _
            or  copy a:kws patt.org b:        for original pattern data                          _

















*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 30

8.4.1.2    RESTORE USER DATA FILES

           User data files are those files that the program modifies 
           with user data.  They are changed every time the program is 
           run.  They are the designer defaults file and the pattern 
           data file.

           To restore these files you should copy from their backups.  
           If the backups are also missing, then the original files will 
           have to be copied from the KNITWARE disk. (see 8.4.1.1).

           For a hard disk installation, type:

                cd \knit  

           to change to the working directory, then type one of the 
           following:

                copy kws dflt.bkp kws dflt.dat     for designer defaults                        _            _
            or  copy kws patt.bkp kws patt.dat     for pattern data                        _            _

           If running the program from floppy disk, insert the working 
           disk in drive A, then type one of the following:

                copy a:kws dflt.bkp a:kws dflt.dat     for designer                          _              _
                                                         defaults
            or  copy a:kws patt.bkp a:kws patt.dat     for pattern data                          _              _






















*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 31

APPENDIX A
DETAILED KNITTING INSTRUCTIONS

      The instructions printed on the KNITWARE patterns should be 
      sufficient for most knitters.  However, inexperienced knitters or 
      those trying a new technique may need more detailed instructions.  
      For these reasons, step-by-step instructions for some of the 
      repetitive, or more complex procedures are included below.

      These instructions cover only a few procedures.  A good knitting 
      reference book is essential, and the owner's guide for a knitting 
      machine.  Many knitting machines provide a step-by-step guide 
      including diagrams, such as BOND's Row by Row Kit.

      There are many ways of doing each knitting procedure.  For the 
      KNITWARE patterns, I have selected only one way, usually the most 
      common method.  In some cases, I have instead used one that I feel 
      works especially well, or provides a better result.

      You, of course, can choose the method you are most comfortable 
      with.  Just because the pattern says to sew side seams with an 
      invisible seam, does not mean you cannot use an overlock stitch, a 
      backstitch, or your sewing machine.  Choose what works best for 
      you.

      This appendix is divided into three main sections.  The first is 
      for those procedures common to both hand and machine knitting, 
      mostly finishing details.  The second section is for hand 
      knitters, and the third for machine knitters.

A.1   ALL KNITTERS 

      ABBREVIATIONS:

           alt       alternate
           beg       beginning
           cm(s)     centimetre(s)
           cont      continue(ing)
           dec       decrease
           foll      following
           inc       increase
           in(s)     inch(es)
           K         knit
           meas      measures or measurement
           MY        main yarn
           P         purl
           rem       remaining
           st(s)     stitch(es)


*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***













*** KNITWARE *** SWEATER DESIGN *********************************  Page 32

A.1   ALL KNITTERS  (continued)

      TENSION SWATCH:
           A tension or gauge swatch is one of the most important parts 
           of your knitted garment.  Without it, your sweater will not 
           fit.  Always knit a tension swatch BEFORE knitting your 
           sweater.  The gauge can change, not only between makes of 
           yarn, but between different dye lots of the same yarn.  Make 
           your tension swatch and BE SURE!!

           Remember, also, to treat your swatch as you would your 
           sweater, e.g. wash, dry, steam or block, BEFORE measuring.

           There are many different ways to do your tension swatch.  
           Personally, I like to do a fairly large piece (at least 40 
           sts by 40 rows) to get a more accurate sample.  You can 
           measure out 4 inches in each direction, and count the rows 
           and stitches.  With nubbly, mohair, or very fine yarns this 
           is sometimes quite difficult.

           In these cases, and especially easy on a knitting machine, 
           you can mark off a fixed number of rows and stitches as you 
           are knitting (e.g. 20 by 20).  You then measure the marked 
           area and convert it to a standard 4 inch (10 cm) gauge, using 
           your handy calculator.


      INVISIBLE SEAM:
           This method of sewing side seams and underarm seams provides 
           the cleanest finish.  It takes a little longer, but the 
           result is well worth it.

           1.   Place both pieces right side up, seams abutting each 
                other, on a table or your lap.  Using a tapestry needle, 
                secure the yarn at the beginning of the seam.
           2.   Pick up the cross thread one stitch in from the edge, 
                one side, then the other, for each row up the seam.  
                Keep the pieces right side up as you work on them.
           3.   Pull the seam from top to bottom every few inches, to 
                keep it elastic.

      BACKSTITCH:
           This stitch is most commonly used for ribbed seams and set-in 
           armhole seams.

           1.   Place both pieces right sides together, on a table or 
                your lap.  Pin the seam to keep it from shifting.
           2.   Using a tapestry needle, secure the yarn at the 
                beginning with a couple of overlapping running stitches, 
                then move one stitch ahead.
           3.   Put the needle into the left end of the last stitch and 
                bring it out one stitch ahead.  Pull the yarn through to 
                the front.  Repeat until seam is finished.

*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***









*** KNITWARE *** SWEATER DESIGN *********************************  Page 33

A.2   HAND KNITTERS

      KNITTING IN THE ROUND:
           The KNITWARE pattern instructions are all written for "flat" 
           knitting, with straight needles knitting stocking stitch as 
           knit 1 row, purl 1 row.  You may prefer to knit in the 
           "round", using circular or double pointed needles.  They are 
           particularly useful for cowl necks and neckline ribbing, 
           giving an even unseamed finish.

      EQUIVALENT NEEDLE SIZES:
           If you have, as I do, a great variety of needles from many 
           different sources, a conversion chart is invaluable.  
           Following is a chart of equivalent needle sizes for those 
           most commonly used (I have excluded the very large and the 
           very small).  Metric needles are in mm.  Canadian needles are 
           the same as Old U.K.

                    .....small...........medium...........large....
           Metric   2.75  3 3.25 3.5 3.75  4 4.25 4.5  5 5.5  6 6.5
           American  2    3  -    4   -    5  6    7   8  9  10  -
           Canadian  12   11  10  -   9    8  -    7   6  5   4  3

      RIBBING:
           The pattern instructions call for K1P1 ribbing for back, 
           front, sleeve and neckband ribbing.  Experiment: try K2P2 
           ribbing, braided ribbing, cables, picot or garter stitch 
           edging: please do not be limited by the pattern 
           instructions.  Think about what would look and work best for 
           your sweater.



















*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 34

A.3   MACHINE KNITTERS

      ABBREVIATIONS:

           COL       Carriage on the left
           COR       Carriage on the right
           FWP       Forward working position (also called HKP)
                     Needles halfway between WP and HP, latches should
                     be open to knit.
           HKP       Half-knit position (also called FWP)
           HP        Holding position (needles all the way out)
           LH        Left hand
           NWP       Non-working position (needles all the way in)
           RH        Right hand
           WP        Working position (needles against the bed front)
           WY        Waste yarn

      OPEN EDGE CAST ON:
           For an open edge cast on (ribbing to be done later), hang the 
           weighted hem, thread up the carriage with waste yarn, and 
           start knitting.  Knit 6 rows with waste yarn, then change to 
           MY, and reset row counter to 0.

      CLOSED EDGE CAST ON:
           This cast on method is used for a finished edge that will not 
           unravel, such as ribbing.  COR, thread the carriage with MY, 
           push the needles to HP, and tie yarn to left-most needle.  
           Wind thread anticlockwise around the needles behind the 
           latches, one at a time.  Hang the hem, put needles to FWP, 
           and knit.

           For a closed edge cast-on for a rib, do as above, leaving 
           every third needle in NWP.  When ribbing, remember to twist 
           the bottom ladder around the latchet tool to form the bottom 
           stitch.

      RIBBING:
           The pattern instructions call for 2x1 ribbing.  This could as 
           easily be 1x1 or 2x2.  Different types of ribbing will give 
           differently, and some types may be unsuitable for certain 
           types or weights of yarn.

           For those of us with a single bed (knitting machine bed, that 
           is!) the ribbing may be done in several ways.  The 
           instructions mention two ways, but you should use the method 
           that is most comfortable for you, and will work best for your 
           sweater.  If you happen to be lucky enough to have a ribber, 
           use it.



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***












*** KNITWARE *** SWEATER DESIGN *********************************  Page 35

A.3   MACHINE KNITTERS   (continued)

      SLEEVE GRAFTING:
           A drop shoulder design is ideal for grafting the sleeve on.  
           The sleeve is worked on the garment from the armhole edge 
           down to the wrist.  Follow the instructions as detailed on 
           the pattern.

           You may find that the armhole between the markers will not 
           stretch as far as the required number of needles (you are 
           knitting to a very tight gauge with a non-stretchy yarn).  
           Your options are to either use fewer needles and adjust the  
           sleeve decreases, or to pick up a few more sts from the front 
           and back to fit the required number of needles.

      GRAFTING A SHOULDER SEAM.
           The shoulder seams for a drop shoulder sweater lend 
           themselves to grafting on the machine.  This gives a very 
           clean join, and no seam to sew by hand later.  A set-in 
           sleeve shoulder can also be grafted, if the stitches are put 
           into HP instead of cast off as the decreases are done, and 
           then knit with waste yarn to hold them.

           1.   Bring out the given number of needles to HP.
           2.   Rehang sts from left back shoulder, with knit side 
                facing, and waste yarn folded down towards you.  Push 
                these sts behind the needles and remove the waste yarn.
           3.   Rehang sts from left front shoulder, purl side facing, 
                and waste yarn folded to the back, in the open latches 
                of the same needles.  The right sides of the knitting 
                will be together.  Remove the waste yarn.
           4.   Pull the sides of the back piece forward so that the 
                latches close and the back sts are pulled over the front 
                sts and the needles.  One row of sts remains.  Push 
                needles to WP, latches can be open or closed.
           5.   Use a keyplate or dial gauge 2 - 3 sizes larger than you 
                used to knit the body.  Place carriage on side of 
                knitting that has the long strand.  Thread carriage with 
                the long strand.
           6.   Knit the row.  Cast off using the latch tool method.


      LATCH TOOL CAST-OFF.
           Provides a firm, non-elastic edge.
           1.   Start at end opposite the carriage.  Remove the first st 
                with the latch tool, and place behind the latch.  Remove 
                the second st into the hook of the latch tool. 
           2.   Pull this st through the first st.  Continue in the way 
                across the row.  
           3.   Pull the end of the yarn through the last st.



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***










*** KNITWARE *** SWEATER DESIGN *********************************  Page 36

A.3   MACHINE KNITTERS   (continued)

      BACK STITCH CAST-OFF.
           Provides an elastic edge.
           1.   Thread a tapestry needle with the yarn tail.  Insert it 
                into the first st in the row, pull the yarn through.
           2.   Insert the needle into the second st and pull it out 
                through the first st.
           3.   Continue, going into the third and out the second, into 
                the fourth, etc. until you reach the last st.
           4.   Fasten off the yarn, and remove the knitting from the 
                machine.





































*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***














*** KNITWARE *** SWEATER DESIGN *********************************  Page 37

APPENDIX B
COMMENT / PROBLEM FORM

Name:                                                                     ________________________________________________________________

Address:                                                                     _____________________________________________________________

City:                                State/Prov:                          _______________________________            _____________________

Country:                             Zip/Postal Code:                        ____________________________                 ________________



Date:                                Program Version:                     _______________________________                 ________________

                                     Serial Number:                                                                     __________________

Comments or Description of Problem:___________________________________






























      To:       Morningdew Consulting Services Ltd.
                7604 Morningdew Road
                R.R. # 5, Victoria,  B.C.
                Canada     V8X 4M6

                Phone:  (604) 652-4097



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***






*** KNITWARE *** SWEATER DESIGN *********************************  Page 38

APPENDIX C
KNITWARE REGISTRATION FORM

Name:                                                                     ________________________________________________________________

Address:                                                                     _____________________________________________________________

City:                                State/Prov:                          _______________________________            _____________________

Country:                             Zip/Postal Code:                        ____________________________                 ________________

                                              Unit
Qty                                           Price        Total

     KNITWARE registration . . . . . . . . $35.00 US___
       (includes all applicable taxes) . . $40.00 Can                                                                       ____________

     Shipping and handling outside ___
      U.S.A. and Canada  . . . . . . . . . . $ 5.00                                                                         ____________

                                             TOTAL                                                                          ____________

      Disk format:      5.25"       3.5"                   _____       _____


      We will accept US or Canadian currency.
      Make cheques payable to: Morningdew Consulting Services Ltd.

      Send this form and your registration fee to:

                Morningdew Consulting Services Ltd
                7604 Morningdew Rd.
                R.R. #5 Victoria, B.C.
                Canada     V8X 4M6


Please fill in the following information if you can.  It may help 
improve our product and service to you.

Computer: PC-XT-286AT-386AT-PS/2 Model:             Make:                                                   ____________      ____________

DOS version:                 RAM:      K         Hard Disk: Yes - No            ____________         ______

Display:  CGA-MCGA-EGA-VGA                Floppy Disk: 5.25" - 3.50"

How did you receive your copy of KNITWARE?  If it is a BBS or shareware 
distributor, please indicate the name.

BBS - SHAREWARE DISTRIBUTOR - FRIEND  Name:                                                                       ____________________________



*** MORNINGDEW CONSULTING *****   Version 1.10   *** January 1992 ***












```
{% endraw %}

## KWSVENDR.DOC

{% raw %}
```
FILE: KWSVENDR.DOC                                       13 February 1992

KWS - KNITWARE(TM) SWEATER DESIGN  Version 1.10, January 1992
from: Morningdew Consulting Services Ltd., R.R. #5 Victoria, B.C.
      Canada V8X 4M6.
Copyright 1991, 1992 - Morningdew Consulting Services, Ltd.
All rights reserved

Vendors, you must contact us to register as an authorized distributor/dealer
of this software before selling copies of it.  In this way, we can send you
the latest version of this software and can provide you with updates as they
are issued. We only want the best and most current version of this software
to be distributed and will work with you to ensure that your library has the
most recent versions of all our software.

-----------------------------------------------------------------------------

LONG DESCRIPTION:

KNITWARE SWEATER DESIGN allows a hand or machine knitter to custom design a
sweater, to revise and change the design, to use any type of yarn knit to any
gauge, and to print the pattern from which they will knit the design.  It
removes the tedium of, and errors from, calculating adjustments for different
yarns, sizes, measurements, or gauges.  The program includes a feature to
calculate the amount of yarn required to knit the sweater.  Metric (cm) or
imperial (inches) units can be used.

The program allows the user to design a sweater in a variety of styles and
sizes.  Pattern styles include pullovers or cardigans, in crew or V
necklines, or with a rolled cowl collar.  Also included are: raglan, set-in,
and drop shoulder styles, full or 3/4 length sleeves, variable body lengths,
and variable ease style.

Measurement data is included for 28 standard sizes for men, women and
children.  Any measurement can be changed, to suit the individual knitter's
requirements.  Once a pattern has been designed, the pattern data is saved,
and can be modified and/or re-printed at any time.  Up to 100 patterns can be
on file at one time, and a utility is provided to delete unwanted patterns.

The pattern instructions are for a stocking stitch body with ribbed trim. 
Different pattern instructions are given for hand knitters and for machine
knitters.  A simple knitting frame is assumed, although owners of punchcard
or electronic machines may also use the program.  There is also an option for
a hand knit rib on a machine knit body.

The program is designed for both the novice and experienced computer user. 
There is extensive use of menus for display and input, colour support, plus
menu level and on-line help facilities.  There is a comprehensive user
manual, which provides step by step assistance to the new user, and a useful
reference with hints and techniques for those who are more familiar with the
program.

-----------------------------------------------------------------------------

SHORT DESCRIPTION:

KNITWARE Sweater Design assists hand and machine knitters in custom designing 
sweaters and prints the pattern instructions to knit from.  It allows any
yarn gauge, provides a variety of "mix-and match" sweater style components,
provides 28 standard sizes, and allows all measurements to be customized.
-----------------------------------------------------------------------------


SYSTEM REQUIREMENTS are: an IBM PC or compatible computer with 256K free RAM,
DOS 2.1 or greater, a floppy disk drive and a printer.  A hard disk drive and
colour monitor are optional.

-----------------------------------------------------------------------------

BULLETIN BOARDS may carry this software, if the date at the top of this file
is less than one year old.  We ask that bulletin boards contact us for a copy
of the latest version.

-----------------------------------------------------------------------------

REGISTRATION: The registration cost is $35 US or $40 Canadian (includes all
taxes), plus $5 shipping and handling outside Canada and USA.
Orders should specify disk size (5.25" or 3.5").

The KNITWARE SWEATER DESIGN registration package includes: a disk containing
the latest version of the program and data files, a printed and bound user
manual, free program support for 6 months, and minimal cost program updates.

-----------------------------------------------------------------------------

ALL SERVICES, ORGANIZATIONS, USER GROUPS, BULLETIN BOARDS, DISTRIBUTORS,
DEALERS, whether profit or nonprofit must meet the following requirements or
they may not distribute copies of this software.

The files on each disk may not be modified or adapted in any way.  All of the
files provided on the disk must be distributed together.  Individual files or
groups of files may not be sold separately.  Additional files may be added
and this software may be combined on disks with other software.

Individual copies of this software may not be sold for more than $10.

This software may not be represented as anything other than shareware and the
shareware concept must be explained in any ad or catalog or promotion that
quotes a price and on any packaging used to display the disk.

You must stop selling/distributing copies of this disk upon notice from
Morningdew Consulting Services Ltd.

Thank you for your support.

Janet Tombu
Morningdew Consulting Services, Ltd.
(604) 652-4097

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4089

     Volume in drive A has no label
     Directory of A:\

    KWS      EXE    177848   2-12-92   9:35a
    KWS_PATT ORG       347  11-25-91   8:46a
    KWS_DFLT ORG        50  11-05-91   9:57a
    KWS_NDL  DAT       339   9-25-91   8:49a
    KWS_SIZE DAT      2425  11-18-91  10:36a
    KWS_PATT DAT       347  11-25-91   8:46a
    KWS_PATT BKP       347  11-25-91   8:46a
    KWS_DFLT DAT        50  11-05-91   9:57a
    KWS_DFLT BKP        50  11-05-91   9:57a
    KWSUSER  DOC     85690   1-20-92  10:01a
    KWSREAD  ME       2558   1-14-92   8:01a
    KWS      HLP     35235   1-22-92   7:34a
    KWS      NDX       368   1-22-92   7:34a
    KWSINSTL BAT      1405   1-07-92   8:26a
    KWSORDER DOC      2504   1-14-92   7:56a
    KWSVENDR DOC      5351   2-17-92   7:49a
    GO       BAT        18   9-22-93   1:59p
    SHOW     EXE      2040   9-12-88  10:48a
           18 file(s)     316972 bytes
                           33792 bytes free
