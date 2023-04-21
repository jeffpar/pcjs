---
layout: page
title: "PC-SIG Diskette Library (Disk #1502)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1502/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1502"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XACT SERIES CALCULATORS"

    XACT brings you a trio of programs emulating three top Hewlett Packard
    hand held calculators -- the HP-11C Scientific Calculator, the HP-12C
    Financial Calculator, and the HP-16C Programmer's Calculator.
    
    All three programs have approximately 70 functions keys laid out in the
    standard HP format. The prefix key usage is the same on the
    computer and the calculator.
    
    "When a program performs flawlessly, it makes writing a review hard.
    Such is the case with XACT-16C."-- Jacques Benavente, PCM Magazine,
    August 1988.
    
    "PC-12C's (an OEM version of XACT-12C) emulation of the HP-12C is
    exact....  Popular's PC-12C gets my vote." Jim Seymour, "The Best of
    the Best Utilities," PC Magazine, June 1987.
    
    "XACT-16C...  It has power to burn." Johnathan Matzkin, PC
    Magazine, May 29, 1988.
    
    "It's (XACT-11C) just like my HP-11C. I use it all the time and keep it
    on my laptop computer when travelling." Bill Treneer, 1776 Corporation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1502.TXT

{% raw %}
```
Disk No: 1502                                                           
Disk Title: Xact Series Calculators                                     
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Xact Series Calculators                                  
Author Version: 4.1                                                     
Author Registration: $28.00 each or three for $48.00.                   
Special Requirements: None.                                             
                                                                        
XACT brings you a trio of programs emulating three top Hewlett Packard  
hand held calculators.  They are the HP-11C Scientific Calculator, the  
HP-12C Financial Calculator, and the HP-16C Programmer's Calculator.    
All three programs have approximately 70 functions keys laid out in the 
same way as the HP standards, with prefix key usage the same on the     
computer as on the calculator.  Previous knowledge of using HP          
calculators is assumed.                                                 
                                                                        
"When a program performs flawlessly, it makes writing a review hard.    
Such is the case with XACT-16C."  Jacques Benavente, PCM Magazine,      
August 1988.                                                            
                                                                        
"PC-12C's (an OEM version of XACT-12C) emulation of the HP-12C is       
exact...  Popular's PC-12C gets my vote."  Jim Seymour, "The Best of the
Best Utilities," PC-Magazine, June 1987.                                
                                                                        
"XACT-16C...  It has power to burn."  Johnathan Matzkin, PC Magazine,   
May 29, 1988.                                                           
                                                                        
"It's (XACT-11C) just like my HP-11C.  I use it all the time and keep it
on my laptop computer when travelling."  Bill Treneer, 1776 Corporation.
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## X11SHARE.DOC

{% raw %}
```







                                 Shareware XACT-11C




                           The Hewlett-Packard Compatible

                                Scientific Calculator

                                    USER'S MANUAL



















                                CalcTech Incorporated

                        13629 Bellevue-Redmond Rd., Suite 202

                                 Bellevue, WA. 98005







                          Sales, 9:00AM-5:00PM Pacific time
                                    206-643-1682

                      Tech Support,Info Line,24 Hour Voice Mail
                                    206-527-9950



                                Description


     This shareware version of XACT-11C is not a demo program!   It is
     a  complete,  full  featured  Scientific  Calculator  for  MS-DOS
     computers,  equivalent to  the  Hewlett-Packard  HP-11C  handheld
     calculator.

     Since  it  is  a  shareware  program,  you  may make  copies  and
     distribute them to your friends and co-workers, on bulletin board
     systems, and so on.  However, you may not modify this  program or
     documentation in any  manner,  nor may you distribute the program
     or documentation for profit (handling fees are OK).


                             License Agreement

     THE SOFTWARE HEREIN ARE PROVIDED  "AS IS" WITHOUT WARRANTY OF ANY
     KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
     THE IMPLIED  WARRANTIES  OF  MERCHANTABILITY  AND  FITNESS  FOR A
     PARTICULAR PURPOSE.   THE  ENTIRE  RISK  AS  TO  THE  QUALITY AND
     PERFORMANCE OF THE PROGRAMS IS WITH YOU.

     IN  NO  EVENT  SHALL CALCTECH OR ANY OF IT'S OFFICERS, DIRECTORS,
     SHAREHOLDERS, EMPLOYEES,  AFFILIATES,  OWNERS,  OR  OTHER RELATED
     PARTIES BE LIABLE  TO  YOU  OR  ANY OTHER THIRD PARTY FOR DAMAGES
     INCLUDING ANY  LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR
     CONSEQUENTIAL DAMAGES ARISING OUT OF  THE USE OF OR THE INABILITY
     TO USE THIS PRODUCT OR AS TO THE PERFORMANCE OF THIS PRODUCT EVEN
     IF WE HAVE  BEEN  ADVISED  OF  THE POSSIBILITY OF SUCH DAMAGES IN
     ADVANCE.

     SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY
     FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO  THE  ABOVE LIMITATION
     OR EXCLUSION MAY NOT APPLY TO YOU.

     THIS  AGREEMENT  IS  GOVERNED  BY   THE  LAWS  OF  THE  STATE  OF
     WASHINGTON.



                           Trademarks/Copyrights

     HP-11C, HP-12C, and HP-16C are trademarks of Hewlett-Packard
     PC-DOS, IBM-PC, PC-XT, PC-AT and PS/2 are trademarks of IBM.
     MS-DOS, Microsoft, and Word are trademarks of Microsoft Corp.
     Tornado Notes is a trademark of Micro Logic Corp.
     Hotline is a trademark of General Information, Inc.

     (C)Copyright 1986-1989, 1990 by CalcTech Inc.  Specifications
     herein are subject to change without notice.


                                   - 2 -








                 Registration & Commercial Version Upgrade



     When  you register XACT-11C for only  $28.00  +  $4.00  shipping,
     we'll mail you the COMMERCIAL  VERSION UPGRADE to the program. It
     contains a number of features  not  available  in  this shareware
     version including:


         o  TSR RAM-Resident (Pop-Up) capability
         o  Mouse Support
         o  Import/Export data from an application
         o  Full programming. Programs may be saved as disk files.
         o  Simulated tape which may be viewed, printed, stamped
            with messages, and saved to disk.
         o  Typeset printed user's manual
         o  Discounts on future upgrades and notice of new products


     Or, you may  wish  to  register  all three XACT calculators:  the
     XACT-11C SCIENTIFIC, XACT-12C FINANCIAL, and XACT-16C PROGRAMMER,
     for only  $48.00 + $4.00 shipping, and receive COMMERCIAL VERSION
     UPGRADES for all three calculators.

     Why not register today?






















                                   - 3 -



               XACT SERIES CALCULATORS - REGISTRATION ORDER FORM


     +------+----------------------------------------+----------+----------+
     | Quan |  Description                           |  Price   |  Total   |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-11C Scientific Calculator        |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-12C Financial Calculator         |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-16C Programmer's Calculator      |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |  SPECIAL OFFER!                        |          |          |
     |      |  All 3  (XACT-11C, XACT-12C, XACT-16C) |  $48.00  |          |
     +======+========================================+==========+==========+
                       |                                        |          |
                       | WA. state residents add 8.1% sales tax |          |
                       +========================================+==========+
                                            |                   |          |
     Mail this form to:                     | Shipping/Handling |  $4.00   |
                                            +===================+==========+
     CalcTech, Inc.                                      Total  |          |
     13629 Bellevue-Redmond Rd. Suite 202               Amount  |          |
     Bellevue, WA.  98005                             Enclosed  +==========+
     (206) 643-1682


     Your Name: ______________________________  Phone: _____________________

     Company (if applicable)________________________________________________

     Address: ______________________________________________________________

     City: ________________________________  State __________ Zip __________




     [ ] Check Enclosed   [ ] VISA         [ ] Mastercard

     Credit card #:____________________________________ Exp. Date: ____/____

     Signature: ____________________________________________________________

     Cardholder's name: ____________________________________________________





                                   - 4 -




          ! ! ! !   P L E A S E    R E A D    T H I S   ! ! ! !


     This  user's  manual  contains  complete  documentation  for  the
     COMMERCIAL VERSION of XACT-11C.  As such, several of the features
     described  within  this  manual will not be  available  with  the
     SHAREWARE VERSION of the program included on this disk.


     We have included documentation for the COMMERCIAL VERSION UPGRADE
     so that should you find benefit from the use  of  these  programs
     and decide to register (and we  hope  you will), you would have a
     good idea of what to  expect from the COMMERCIAL VERSION UPGRADE.
     Please  note  that  this  is  not the actual  commercial  version
     documentation  but rather a disk based  "reprint".    Should  you
     decide to register,  you  will receive a complete typeset printed
     manual of the product(s).


     XACT SERIES  CALCULATORS are shareware, not freeware.  Payment is
     voluntary and on the "honor system".  We ask  that  you  register
     the  product(s) if after a short period of  use,  you  find  them
     useful in your work.  We hope that you appreciate the "try before
     you buy" concept and that you will register.


     Anyone who has ever  purchased  expensive  (or  even inexpensive)
     software can attest to  the  frustration  of  being "burned" by a
     lousy product.  We  think  XACT  SERIES CALCULATORS are excellent
     products  but  we're  giving  you  the opportunity to  judge  for
     yourself.  If you agree, please take a moment to register.





















                                   - 5 -
                             TABLE OF CONTENTS



     Section  Title                                                 Page

     1   Getting Started  ..........................................  8

     1.1      Introduction .........................................  8
     1.2      Other Guides .........................................  8
     1.3      System Requirements ..................................  9
     1.4      Installing XACT-11C and Making Backups ...............  9
     1.5      Command Line Options & Changing Hot Keys .............  9

     2   Loading XACT-11C .......................................... 10

     2.1      XACT-11C Shareware Version ........................... 10
     2.2      XACT-11C as a RAM Resident Program ................... 10
     2.3      XACT-11C as a Removable RAM Resident Program ......... 10
     2.4      XACT-11C as a Standalone DOS Program ................. 11
     2.5      Keyboard Conventions ................................. 11
     2.6      Function Keys ........................................ 11
     2.7      Prefix Keys .......................................... 12
     2.8      Entering Numbers ..................................... 12
     2.9      Short Cut Keys ....................................... 12

     3   Basic Operations .......................................... 13

     3.1      Setting the Display Format ........................... 13
     3.2      Arithmetic Calculations and RPN ...................... 13
     3.3      Clearing Numbers ..................................... 14
     3.4      Negative Numbers ..................................... 15
     3.5      Mathematical Operations .............................. 15
     3.6      Percentage Operations ................................ 15
     3.7      Exponential Notation ................................. 16
     3.8      Memory Storage Registers ............................. 17
     3.9      Stack Operations ..................................... 17
     3.10     The LastX Register ................................... 17
     3.11     The Index Register and Using Memories Indirectly ..... 18

     4   Scientific Functions ...................................... 19

     4.1      Trigonometric Functions .............................. 19
     4.2      Angle Conversions .................................... 19
     4.3      Polar/Rectangular Conversions ........................ 20
     4.4      Permutations and Combinations ........................ 20
     4.5      Random Numbers ....................................... 20









                                   - 6 -
     Section  Title                                                 Page

     5   Features (Commercial Version) ............................. 21

     5.1      Getting Help ......................................... 21
     5.2      Viewing the Tape ..................................... 21
     5.3      Feeding a Result ..................................... 21
     5.4      Stamping the Tape .................................... 21
     5.5      Printing the Tape .................................... 22
     5.6      Storing the Tape ..................................... 22
     5.7      Loading a Program .................................... 22
     5.8      Storing a Program .................................... 22
     5.9      Importing Data from an Application ................... 23

     6   Programming ............................................... 24

     6.1      Entering a Program into XACT-11C ..................... 24
     6.2      Labels in Programs ................................... 25
     6.3      Using Subroutines .................................... 25
     6.4      Returning from a Program or Subroutine ............... 26
     6.5      Entering Data and the Run/Stop Key ................... 26
     6.6      The [GoTo] Instruction ............................... 26
     6.7      Branching Using the Index Register ................... 27
     6.8      Program Loops Using the Index Register ............... 27
     6.9      Program Loops and Branches Using the X and Y Registers 28
     6.10     Branching on Flags Set/Clear ......................... 29
     6.11     The Single Step Instruction .......................... 29
     6.12     Moving to a Program Line Number ...................... 30
     6.13     Inserting and Deleting Program Lines ................. 30

     7   Statistical Calculations .................................. 31

     7.1      Entering and Removing Numbers ........................ 31
     7.2      Statistical Mean ..................................... 31
     7.3      Standard Deviation ................................... 32
     7.4      Linear Estimate ...................................... 32
     7.5      Linear Regression .................................... 33

     Appendix / Error Conditions ................................... 34

















                                   - 7 -
     1 Getting Started



     1.1 Introduction

     XACT-11C is a software emulation  of  the  famous Hewlett-Packard
     HP-11C.  If you are familiar with the HP-11C, you will  find that
     you  already  know how to use XACT-11C.    If  not,  you'll  find
     XACT-11C easy to  learn  and  use.   It will become an invaluable
     tool in your work.

     XACT-11C  is a RAM resident program  (Commercial  Version).    It
     remains loaded in your computer's memory ready to "pop-up" at the
     activation of a "hot key", even if you're running another program
     at  the  time. XACT-11C can also be  run  as  a  stand-alone  DOS
     program, if desired.

     If you are already familiar with DOS and with the HP-11C, you may
     only need to read Chapters 2 and 3.    This  will  provide enough
     information to get you started.

     If you are new to DOS and/or the HP-11C, you may wish to read, or
     at least skim, Chapters 1 through 6.

     NOTE:

     A number of  the  function  keys  on  the  XACT-11C  use graphics
     characters to represent them.  Because this  disk-based shareware
     documentation is printed  in  ASCII text mode, some function keys
     cannot be accurately shown in this file.  We've tried our best to
     emulate the look of the graphics  symbols  and to make it easy to
     infer  which  functions  are  intended  from the context  of  the
     Documentation.



     1.2 Other Guides

     There are a number  of  guides  and  references available for the
     HP-11C  that  can  be  used  with  XACT-11C  as  well.  These are
     generally available in bookstores and other places where Hewlett-
     Packard calculators are sold.   Some  of  these  publications are
     listed below.

     "HP-11C  Owner's  Handbook  and  Problem  Solving  Guide"  Covers
     general  operations, functions, applications, and programming  of
     the HP-11C.  Published by the Hewlett-Packard Company.

     Grapevine Publishing, Inc. P.O. Box  118,  Corvallis,  OR, 97339,
     also has a number of publications about the HP-11C.





                                   - 8 -
     1.3 System Requirements

     To operate the XACT-11C calculator, you will need an IBM PC,  PC-
     XT, PC-AT, PS/2, or close compatible equipped with  at  least the
     following:

        256K RAM
        One floppy disk drive
        PC-DOS or MS-DOS version 2.00 or later



     1.4 Installing XACT-11C and Making Backups

     You should make a copy of the programs contained on  the XACT-11C
     diskette for backup purposes. Use  the DOS "copy" command to copy
     all the files to another diskette or to your hard disk. There may
     be  a  file  named README.DOC on your disk.  If  so,  you  should
     examine it using your word processor or the DOS "type" command.



     1.5 Command Line Options/Changing Hot-Keys (Commercial Version)

     A command line option  is  an  additional  command typed when you
     first  load  XACT-11C.    There  are  several  of  these  options
     available.   For example, if you wish to  save  memory  space  by
     running  XACT-11C in non RAM-Resident mode,  you  would  use  the
     nopop command line option, i.e.:

         x11   /nopop  [ENTER]

     ([ENTER] means press  the  ENTER  key).   You can also change the
     invocation "hot-key" using a command line  option.  Valid hot-key
     definitions are  Alt-Shift-S  (default),  Alt-S,  and Alt-Ctrl-S.
     For example, to change the invocation "hot-key" from it's default
     setting of Alt-Shift-S to Alt-S,  and  also  change  the tapefile
     name to test.txt in the \bin directory:

         x11   /alt-s   /tapefile=\bin\test.txt

     The  following  is  a  list  of available command  line  options:
     (Commercial Version only)

         /nopop       Run XACT-11C in non RAM Resident mode.
         /mono        Force XACT-11C into monochrome mode.
         /tapefile=   Name of file used to save the tape.
         /alt-s       Change the invocation key to Alt-S.
         /alt-ctrl-s  Change the invocation key to Alt-Ctrl-S.
         /sci         Start up XACT-11C in scientific notation.
         /nomouse     Disable mouse operation.





                                   - 9 -
     2 Loading XACT-11C



     2.1 XACT-11C shareware version

     To load the Shareware XACT-11C, at the DOS prompt type:

         x11share  [ENTER]



     2.2 XACT-11C as a RAM Resident program  (Commercial Version)

     To load XACT-11C, at the DOS prompt type:

         x11  [ENTER]

     You will see  the  copyright  message  appear on the screen.  The
     computer  will then return to the DOS prompt  and  appear  as  if
     nothing had happened.    However, the XACT-11C calculator has now
     been loaded into your computer's memory and is ready to pop-up at
     the activation of the hot key.  To activate XACT-11C, press:

         Alt-Shift-S

     XACT-11C  will  now  appear  on  your  screen,  ready to  perform
     calculations.  To exit from XACT-11C, press the Esc key.



     2.3 XACT-11C as a  Removable  RAM-Resident  Program   (Commercial
     Version)

     When XACT-11C is loaded  as  a RAM Resident program as in section
     2.1 above, it remains loaded in your computer's memory until your
     computer is rebooted  or  powered  off.   There is another way to
     install  XACT-11C in such a way that it  may  be  removed  memory
     without rebooting.   To  do  so,  you must use the TSRADD.COM and
     TSRDROP.COM utilities provided.  Using  this  method,  to install
     XACT-11C, you would type at the DOS prompt:

         tsradd x11 [ENTER]
         x11 [ENTER]

     In fact, you may load RAM-Resident programs from other vendors as
     well  using  the  TSRADD.COM utility.  For example, to load other
     vendor's TSR's such as Tornado Notes and Hotline, you would type:

         tsradd tn [ENTER]
         tn [ENTER]
         tsradd hotline [ENTER]
         hotline [ENTER]



                                   - 10 -
     If you aren't running these programs from your current directory,
     be sure to provide  a  complete pathname, or use the PATH command
     provided with DOS.

     To remove your  memory  resident  programs,  use  the TSRDROP.COM
     utility.  It is necessary to drop your TSR's in the reverse order
     that they were added.  When you run TSRDROP.COM, the utility will
     prompt you with  the  next  TSR  to be removed from memory. Press
     ENTER to confirm the drop or Esc to exit the utility.



     2.4 XACT-11C as a Stand Alone Program  (Commercial Version)

     XACT-11C defaults to being a RAM Resident program,  but  can also
     be run as a stand-alone DOS program.  To run XACT-11C as a stand-
     alone program, type:

        x11 /nopop


     2.5 Keyboard Conventions

     Throughout this manual, XACT-11C function keys are denoted within
     a  box.    For example, the function key for the sine function is
     shown as [SIN].  In the case of  function  keys  which  require a
     prefix key (discussed in the next section), the prefix key is not
     given in this manual since it can easily be determined.

     Keys on the PC keyboard are listed in this  manual  using  single
     quotes  such as 'a'.  Numbers to be  entered  into  XACT-11C  are
     shown in normal type.



     2.6 Function Keys

     XACT-11C has approximately 70 different function keys arranged in
     the same ordering as  on  the HP-11C.  Function keys are arranged
     in  groups of up to 3 functions per key; an upper, a lower and  a
     middle  function  all  correspond to one function key.  The upper
     and  lower  functions  are invoked by first pressing a prefix key
     (discussed in the next  section)  and then the function key.  The
     middle function does not require the use of a prefix key.  The PC
     keystroke corresponding to function key is  shown  immediately to
     the left of the function box.

     The  first  row  of function keys use the PC keys F1 through F10.
     The second through  fourth  rows use the alphabetic characters as
     arranged left to right on your PC keyboard.

     For  example,  the  [SIN]  function  on  XACT-11C  is invoked  by
     pressing the letter 'e' on the PC keyboard.  Likewise,  the [RCL]



                                   - 11 -
     function is invoked  by  pressing  the  letter  'b'.    The [e^x]
     function is invoke by pressing F2.



     2.7 Prefix Keys

     The left shift key and the right shift  key  on  the  PC keyboard
     operate as prefix keys.  They  are  equivalent  to the gold [ f ]
     key and the blue [  g ] key on the HP-11C.  Prefix keys allow you
     to activate the  upper  and  lower  functions  assigned  to  a PC
     function key.  For  example,  to  invoke  the [HYP] function, you
     would press and release the left shift key, and  then  press  the
     letter 'w'.  Likewise, to  invoke the [HYP-1] function, you would
     press and release the  right  shift key and then press the letter
     'w'.  To invoke  the  [LOG] function, press and release the right
     shift key, and then press F3.



     2.8 Entering Numbers

     To enter numbers into  XACT-11C,  use  the  numeric keypad on the
     right  side of your keyboard or the  numbers  on  the  typewriter
     portion of the keyboard.



     2.9 Short Cut Keys

     You can use the Enter key  on  the  PC, (also known as the Return
     key) as the XACT-11C [ENTER] key  as  a short cut. Also, the '+',
     '-', '*', and '/' keys adjacent to the numeric keypad function as
     you would expect.






















                                   - 12 -
     3. BASIC OPERATIONS

     3.1 Setting the Display Format

     When you first start  it  up,  XACT-11C  defaults to displaying 4
     digits  to  the  right  of  the  decimal  point.   To change this
     setting, you can use  the  [Fix], the [Sci] or the [Eng] function
     keys followed by  a number from 0 to 9 (enter numbers  using  the
     numeric keypad).  This number  represents  the  number  of digits
     displayed  to the right of the decimal point. The  [Fix] function
     is used to  display  numbers in fixed (non-exponential  notation)
     format.  A number will not be displayed  in  exponential notation
     unless  it  is  too large to be displayed.  The [Sci] function is
     used  to  display  numbers  in  scientific notation.   The  [Eng]
     (Engineering)  display  function  is  much  like  the  scientific
     format  except  that  the  exponent  displayed will always  be  a
     multiple of 3 (kilo).

     Note that the  display    format  does   not affect the number of
     digits used to perform calculations, only the way  in  which they
     are displayed.  If you were  using  a 2 digit display format, the
     number  12.006  would  be shown on the display as 12.01.  In this
     example, the display  has  been  rounded  to  2  digits  past the
     decimal point.    However,  the  internal  representation  of the
     number is still kept as 12.006,  and  this value would be used in
     subsequent calculations.

     To round the number internally to match the number in the display
     use the [Rnd] key.  In the above example, if  the  [Rnd] key were
     pressed, the internal  value  12.006 would be converted to 12.01.
     To set the display format  for scientific notation, use the [Sci]
     function  key,  again  followed by a number between 0 and 9.  For
     engineering notation (the exponent is a multiple of  3),  use the
     [Eng] function key followed by a number between 0 and 9.


     3.2 Arithmetic Calculations and RPN

     You may already  be  familiar with Reverse Polish Notation (RPN).
     RPN is a type of calculator logic that eliminates  the  need  for
     the  equals  key  and  the  use of parenthesis  in  computations.
     Instead,  multiple  operands  are  entered  into  the  calculator
     separated by the [ENTER] key.  For example, to add the  numbers 3
     and 4:

     Keystroke                Display        Comment
     ================================================================
        3  [ENTER]            3.00
        4  [ + ]              7.00           Add 3 + 4







                                   - 13 -
     The result, 7.00 is now displayed.  To multiply this result by 5:

     Keystroke                Display        Comment
     ================================================================
        5  [ * ]              35.00          7.00*5.00


     The way that XACT-11C performs  these calculations with RPN is by
     using a stack.  The stack consists of 4 registers:  X,  Y, Z, and
     T.

     Any number displayed is said to be in the X  register.   When the
     [ENTER]  key is pressed, a number in the  X  Register  is  pushed
     into the Y Register and the previous number in the Y  Register is
     pushed  into  the  Z  Register.    The  previous  number in the Z
     register is pushed into the T  Register.   T stands for "Top" and
     represents the top of  the  stack of numbers.  The previous value
     of  the T register is lost.  When a function key such as the  [+]
     key  is pressed, the value held in the Y register is added to the
     X register  and  this  result  is  now  stored in the X register.
     Pressing  [ENTER]  does  one  other  thing, it leaves  the  stack
     disabled.  This means that a number entered after the [ENTER] key
     has  been pressed is not pushed on the stack, it remains in the X
     register.  When a calculator function key is pressed, it utilizes
     numbers on the stack to  perform the function. Depending upon the
     function, it may alter  the  X and/or Y registers, and also leave
     the stack enabled or disabled.

     Most operations leave the stack "enabled" so that the next number
     entered will first  push  the  stack.   The [ENTER] and the [CLx]
     functions are the most notable exceptions to this rule.



     3.3 Clearing Numbers

     You can  clear  a  number  in  the  display by pressing the [CLx]
     function  key.  The calculator is now  ready  to  accept  another
     entry.  Unlike other calculators, XACT-11C does not require a key
     for clearing a number  and  a different key for clearing the last
     entry.  Whether you have made a mistake  in  adding  a  series of
     numbers, or simply wish to start a new calculation, use the [CLx]
     function  key.    The [Bksp] key  will  clear  a  number  in  two
     different manners.    If  you  are  in  the process on entering a
     number, but have not pressed a function  key yet, the  [Bksp] key
     will clear the last numeric digit entered.  On the other hand, if
     the most recent key pressed was a function key (for  example, the
     [e^x] key), pressing [Bksp]  works  just  like  the [CLx] key, it
     clears the number in the x register.







                                   - 14 -
     XACT-11C  also  contains  other  function  keys    to  clear  the
     following:

         [S]     Clear Sum.  Used to clear the statistical registers
                 when perform statistics calculations.
         [Prgm]  Clear Program.  Used to clear the program memory when
                 programming XACT-11C.
         [Reg]   Clear Registers.  Used to clear all registers;
         [Prfx]  Clear the [ f ] or [ g ] prefix keys.



     3.4 Negative Numbers

     To  change  the  sign of a number in the display, press the [ChS]
     (Change Sign) function key.  The [ChS] function  will  toggle the
     sign of the  value in the display.  The [ChS] key is also used to
     change the sign of an exponent if you    are  using   exponential
     notation.



     3.5 Mathematical Operations

     XACT-11C contains a large number  of  commonly  used mathematical
     functions.


         [x^2]       Square of a number.
         [ x ]       Square root of a number.
         [Ln]        Natural log of a number.
         [Log]       Base 10 log of a number.
         [10^x]      Raise 10 to the value in the x register
         [e^x]       Exponential of a number.
         [1/X]       Reciprocal of a number.
         [Intg]      Return the integer portion of a number.
         [Frac]      Return the fractional portion of a number.
         [y^x]       Raise a number to a power of another number.



     3.6 Percentage Operations

     Use the [ % ] key to calculate the percent amount of a number and
     the [D%] to calculate  the  difference  in  percent one number is
     from another.

     Determine the total amount you would  pay  for a $39.95  radio if
     the sales tax is 8.1%.







                                   - 15 -

     Keystroke                Display        Comment
     ================================================================

     39.95 [ENTER]            39.9500
     8.1 [ % ]                3.2360         Sales tax
     [ + ]                    43.1860        Total paid.

     You would pay $43.19 including sales tax.


     What is 20% of $3500.00?

     Keystroke                Display        Comment
     ================================================================
     3500 [ENTER]             3500.00
     20 [ % ]                 700.00


     Example: Gasoline prices fell last month from an average of $1.09
     to $.98.  What percent difference does this represent?

     Keystroke                Display        Comment
     ================================================================
     1.09 [ENTER]             1.0900
     .98 [D%]                 -10.0917

     Gasoline prices have fallen 10.09%.



     3.7 Exponential Notation

     Use  exponential  notation  to  enter  very large or  very  small
     numbers into XACT-11C.   The  [EEx] function key is used to enter
     an  exponent.    For  example,  to  enter  the   number   12  E09
     (12,000,000,000) type:

     Keystroke                Display        Comment
     ================================================================
     12 [EEx] 9               12.0000  +09

     Likewise, to enter the number 12-09, type:

     Keystroke                Display        Comment
     ================================================================
     [CLx]                    0.0000
     12 [EEx] 9               12.0000 +09
     [ChS]                    12.0000 -09







                                   - 16 -
     3.8 Memory Storage Registers

     XACT-11C contains 20 different memory storage registers,  used to
     perform  storage  and  memory  arithmetic  calculations.    These
     memories will  retain their values until your computer is powered
     off or re-booted.  Memory registers in XACT-11C  are  referred to
     as R0-R9 (for register 0 through  9), and R.0  through  R.9.  For
     example, to store the value 20.3 in memory register 2, type:

     Keystroke                Display        Comment
     ================================================================
     20.3 [Sto] 2             20.3000

     To add the number 9.6 to the contents of register 2, type:

     Keystroke                Display        Comment
     ================================================================
     9.6 [Sto] [ + ] 2        9.6000

     Now, if you wish to view the contents of memory register 2, type:

     Keystroke                Display        Comment
     ================================================================
     [Rcl] 2                  29.9000

     Memory register 2 contains the value 29.90.



     3.9 Stack Operations

     The  [x<>y]  function  exchanges the contents  of  the  X  and  Y
     registers.    The   [R|] function rolls down the stack.    The  T
     register is copied into the Z register.  The Z register is copied
     into the Y  register,  and  the  Y  register is copied into the X
     register.  The X register is "rolled around" into the T register.


     3.10 The LastX Register

     The [LSTx] function key  is  not technically a part of the stack.
     It is used to recover  numbers entered just before a mathematical
     operation  was  performed  on the stack.  The number recovered is
     held  in  a register referred to as  the  LastX  register.    For
     example,  assume  you  meant  to  add  the  numbers  12 and 5 but
     accidentally pressed 6 instead of  5.

     Keystroke                Display        Comment
     ================================================================
     12 [ENTER]               12.00
     6 [ + ]                  18.00         Wrong value
     [Lstx]                   6.00
     [ - ]                    12.00         Subtract
     5 [ + ]                  17.00         Correct result


                                   - 17 -
     3.11 The Index Register and Using Memories Indirectly

     Memories  can  also  be  accessed  indirectly  using   the  Index
     register.  The index register is accessed with  the  [I] function
     key.    A  number may be stored in the index register using [Sto]
     [I] and recalled from the index register using [Rcl] [I].   Also,
     the [x<>I] function key  is  used to exchange the X register with
     the Index register in the same fashion as the [x<>y] function key
     is used to exchange the X and Y registers.  For example:

     Keystroke                Display        Comment
     ================================================================
     5 [Sto] [ I ]            5.0000         Register I= 5
     20 [Sto] [(i)]           20.0000        Register 5 = 20
     [CLx]                    0.0000         Clear X reg
     [Rcl] 5                  20.0000        Reg 5 = 20

     In the above example, the  Indirect Index Register [(i)] was used
     to store a number indirectly.  The memory  register  accessed was
     determined by the contents  of  the  [I]  register.  Memories can
     also be  recalled indirectly using the operation [Rcl] [(i)], and
     exchanged  with  the  X  register  indirectly  using  the  [x(i)]
     function.

































                                   - 18 -
     4. SCIENTIFIC FUNCTIONS

     XACT-11C provides a  rich  set  of  scientific  and trigonometric
     functions to choose from.  Each of these will be described below.



     4.1 Trigonometric Functions

     XACT-11C  contains  a complete set  of  trigonometric  functions,
     including hyperbolics.  Trig functions can be displayed in either
     Degrees by pressing  the  [Deg] function key; Radians by pressing
     the [Rad] function key, or Grads by pressing  the  [Grd] function
     key.  The available trig functions are as follows:


         [Sin]       Sine function
         [Cos]       Cosine function
         [Tan]       Tangent function
         [Sin-1]     Arc Sine function
         [Cos-1]     Arc Cosine function
         [Tan-1]     Arc Tangent function

     In  addition,  the  [Hyp] or the [Hyp-1] functions can be pressed
     prior to pressing [Sin], [Cos], or [Tan] functions to compute the
     hyperbolic or inverse hyperbolics of these functions.


     Keystroke                Display        Comment
     ================================================================
     [Deg]                                   Degree mode
     30 [Sin]                 0.5000         Sine of 30 degrees
     [Rad]                    0.5000         Use radian mode.
     [Pi]                     3.1416
     [Cos]                   -1.0000         Cosine of Pi radians
     [Deg]                   -1.0000         Use degree mode.
     1 [Tan-1]               45.0000         Arc Tangent of 1



     4.2 Angle Conversions

     Use XACT-11C to convert from  Degrees to Radians and from Radians
     to Degrees with the [->Rad] and [->Deg] functions respectively.

     You can  also  convert  from  fractional  degrees  (or fractional
     hours)  to  minutes  and  seconds  with the [->H.ms] key and from
     minutes  and  seconds  to  fractional  degrees    with the  [->H]
     function key

     Keystroke                Display        Comment
     ================================================================
     60 [Rad]                 1.0472         Convert to radians
     1.333 [H.ms]             1.1959         1 hr 19 min 59 sec


                                   - 19 -
     4.3 Polar/Rectangular Conversions

     XACT-11C can convert between  polar  and  rectangular coordinates
     with  the  [->P]  and  [->R]  functions  respectively.  For polar
     coordinates,  the  magnitude  "r"  is  placed/returned  in  the y
     register, and the angle theta is placed in the x register.  Theta
     may be in degrees, radians, or grads depending upon the trig mode
     set.  For rectangular coordinates,  the y coordinate is placed in
     the y register and the x coordinate in the x register.

     Keystroke                Display        Comment
     ================================================================
     1 [ENTER]
     1.3                      1.3000         x = 1.3, y = 1.0
     [->P]                    1.6401         magnitude "r" = 1.6401
     [x<>y]                   37.5686        theta = 37.5686 degrees



     4.4 Permutations and Combinations

     XACT-11C can calculate the two most common probability functions.
     Combinations are the number groups of y items, taken in groups of
     x, without regard to their order.  Permutations are the number of
     different changes in position possible  within a group of y where
     the group size is x.

     For   example,   the  number  of   different   permutations   and
     combinations of the  group  1  through  7 inclusive, taken 3 at a
     time are:

     Keystroke                Display        Comment
     ================================================================
     7 [ENTER]                7.0000
     3 [Cy,x]                 35.0000        combinations
     7 [ENTER]                7.0000
     3 [Py,x]                 210.0000       permutations



     4.5 Random Numbers

     XACT-11C will generate a  different  random  number each time the
     [Ran#] function key is pressed.  The generated number will  be in
     the range 0 < n  < 1.  In addition, a random number "seed" may be
     planted by storing  an  arbitrary  number  between 0 and 1 in the
     Random number generator register.

     Keystroke                Display        Comment
     ================================================================
     [Ran#]                   0.4100         Random number
     [Ran#]                   0.1847         Random number
     .123 [Sto] [Ran#]        0.1230         An arbitrary seed.
     [Ran#]                   0.6334         Random number with seed


                                   - 20 -
     5. Features  (Commercial Version only)



     5.1 Getting Help

     A Help menu is available when you are working with XACT-11C.   To
     obtain  help  press:

         Alt-F1

     An information screen will appear in a window.  The help menu can
     be removed by pressing F1 again.



     5.2 Viewing the Tape

     XACT-11C provides a  simulated  tape display which keeps a record
     of your  calculations  as  you  perform  them.   To view the tape
     press:

        Alt-F2

     The tape will appear in a window.  To remove  the  tape, press F2
     again.



     5.3 Feeding a Result

     To  feed  the  result  of  a calculation into the program  you're
     running  press:

         Alt-F3

     The calculator will disappear and  the number in the display will
     be fed to your application.



     5.4 Stamping the Tape

     To stamp a message on the simulated tape press:

         Alt-F4

     The message will appear on the tape as  well  as  the  printer or
     tape disk file if either of these options are being used.







                                   - 21 -
     5.5 Printing the Tape

     To print the tape as you make calculations press:

         Alt-F5

     To turn off printing, press F5 again.



     5.6 Storing the Tape

     The simulated tape may be  saved  to  a  disk  file  as  you make
     calculations.   Each  time you  use  XACT-11C,  calculations  are
     appended to the tape file.  To store the tape, press

         Alt-F6

     The  tape will be saved under the name  X11.TAP  in  the  current
     directory.  If   you  change  directories,  a different tape file
     with the same name  will    be    used.    If  you  wish to use a
     different name for your  tape  file, use  the command line option
     /tapefile=filename where filename  is  any  valid    DOS filename
     which can include a path.  (see section 1.6).



     5.7 Loading a Program

     To load a program previously saved press:

         Alt-F7

     A window  will  appear  requesting  a  file  name.  Enter the DOS
     filename  of the program you wish to retrieve.



     5.8 Storing a Program

     XACT-11C  allows  you  to save programs as disk files.  To save a
     program  on disk, press:

         Alt-F8

     A window will appear prompting you for comments.  You   can enter
     up   to 3 lines of comments, associated with the program you  are
     saving.  Press  the  Esc key after you have entered any comments.
     Another window will  appear  prompting you for a filename.  Enter
     any  valid DOS filename.






                                   - 22 -
     5.9 Importing Data from an Application

     You can "import" data from the screen of the previous program you
     were running before  popping-up  XACT-11C.  For instance, you may
     be working with a spreadsheet or word-processing program and wish
     to  add  a  series of numbers from the display screen.  To import
     data, press:

         Alt-F9

     You will see the screen you were working  with  before popping-up
     XACT-11C.    However,  you  have  not returned to  your  previous
     program.  Use the up, down, left, or right arrow keys to move the
     cursor to a number on the screen  you wish to import. Then, press
     F9 again to import the number into   XACT-11C.    It  will appear
     just  as if you had typed it in by hand.  If  you  now  press  F9
     again, you'll see the cursor will have moved down a row.  This is
     to help facilitate the importing of a "column" of  numbers.    If
     you wish to accept the data where the cursor rests,   again press
     F9. If not, use the arrow keys to move to the desired  location.

     It isn't possible to import data  from  a screen if the screen is
     in graphics  mode.    In  this  case,  XACT-11C will sound a beep
     indicating  that it can't import a number.    One  commonly  used
     program which utilizes graphics mode is Microsoft Word.    If you
     use  Word, you should use text mode.   Pressing  Alt-F9  in  Word
     allows you to switch between graphics and text modes.





























                                   - 23 -
     6. PROGRAMMING

     Programming  XACT-11C  is  a  process  whereby  you  "teach"  the
     calculator a series of keystrokes, similar to the  way  you would
     normally enter the keystrokes if  you  were  computing  a problem
     manually.  In addition,  you  can  have  a program take different
     actions in a program  based  upon  values contained in registers.
     For example, the program could  take a different course of action
     if the value contained in the X register is less-than-or-equal-to
     the value  in  the  Y  register.    This is known as "conditional
     branching".    Programming  also  allows  you  to   repeat  given
     keystroke sequences a certain number of times.  This is  known as
     "looping".

     If  you  are  interested  in  advanced  programming  features  of
     XACT-11C, we suggest you  obtain  a  copy  of the "HP-11C Owner's
     Handbook and Problem Solving Guide"



     6.1 Entering a Program into XACT-11C

     To begin entering a new  program  into  XACT-11C,  the calculator
     must be placed in  Program  mode  by  pressing the [P/R] function
     key.   When in program mode,  subsequent  keystrokes  are  simply
     stored  in  the  calculator's  internal  memory.  The  [P/R]  key
     toggles between program and run modes.

     Keystroke                Display        Comment
     ================================================================
     [P/R]                    000-           Program mode
     [P/R]                    (as before)    Run mode.

     When first entering program mode,  the  display  shows  the value
     000.  This  represents  the current program line  number  of  the
     program    you  are entering.  Line 000- is special  in  that  it
     always represents  the beginning  of program memory.  Let's enter
     a very simple program:

     Keystroke             Display        Comment
     ================================================================
     [P/R]                 000-           Program mode
     [Prgm]                000-           Clear program memory
     [Lbl] [ A ]           001- 42 21 11  Label begins program
     1                     002-        1
     0                     003-        0
     [ENTER]               004-       36
     4                     005-        4
     [ + ]                 006-       10
     [Rtn]                 007-    43 32  Return from program
     [P/R]                                Run mode

     The  program simply adds the numbers 10+4  and  finishes.    When
     XACT-11C  is in program mode, the numbers to  the  right  of  the


                                   - 24 -
     program line are a code which represents which  key  was pressed.
     The first digit of the number indicates the row  and  the  second
     indicates the column  of  where  the  key  is  positioned  on the
     XACT-11C screen.    If  you  think  of  all the keystrokes on the
     calculator face as being in a  table  with 4 rows and 10 columns,
     each key can be identified as being in a certain row  and column.
     For  example the [ENTER] key is located in Row 3, Column 6.  Thus
     in  instruction  line  03-    the display contains the value  36.
     Likewise the [ + ] key is in  row  1,  column  10, so the display
     shows 10.]

     To run the program:

     Keystroke                Display        Comment
     ================================================================
     [ A ]                    14.0000        Program result.

     Be sure to use the [ A ] function key mapped to the number '1' on
     the PC keyboard, not the letter 'A' on the PC keyboard.



     6.2 Labels In Programs

     There are 15 labels  available  in programming, 0-9 and A-E.  The
     previous example used the  label  [ A ] to identify the beginning
     of  the  program.   An alphabetic label is always used to begin a
     program.    Both  alphabetic  and  numeric labels can be used  as
     labels  within a program.  Labels are also  used  as  targets  of
     [Gto] (go to) and [Gsb]  (go to subroutine) instructions.  Labels
     can also be used to separate programs in XACT-11C's memory;  as a
     way  of keeping multiple programs in memory  at  the  same  time,
     although this is generally  not  necessary  since programs may be
     saved as disk files.



     6.3 Using Subroutines

     A program can call a subroutine from within the program  when the
     [Gsb] instruction is used within  the program.  For instance, the
     instruction  [Gsb]  5  will  transfer  control  to   the  program
     instruction  immediately    following  the  instruction  [Lbl]  5
     contained elsewhere within the program.  Control will transfer to
     the  label  that  identifies  the  subroutine.    Subroutines can
     "nest",  that  is  one subroutine may call another which may call
     another, and so on.    The maximum level of subroutine nesting is
     4.








                                   - 25 -
     6.4 Returning from a Program or Subroutine

     The last instruction in a program  must  always be a [Rtn].  This
     tells the program to reset it's program line number  to  000  (go
     back to the beginning) and stop executing.  The [Rtn] instruction
     is  also the last instruction in a subroutine.    In  this  case,
     after  the  execution  of  the  [Rtn]  instruction,   control  is
     transferred  back  to the instruction  following  the  subroutine
     call.



     6.5 Entering Data and the Run/Stop Key

     There  are  generally  2 ways to get data into a  program.    The
     easiest  is  to  use  the  [Sto]  instruction  to store  data  in
     registers prior to running  the  program.    Then the program can
     contain [Rcl] instructions  to  fetch the data from the register.
     The second method is required when there is more data to be input
     than available storage registers.    It  involves using the [R/S]
     (run/stop) function key.  When  this  key  is  encountered during
     program execution, the program  stops.    At  this point, you can
     enter  new  data  and then press the [R/S] key.  The program will
     begin running again.

     Let's write a program to solve the equation z= 1/(x+y)  using the
     [R/S] key to allow us to enter both the x and y variables.

     Keystroke           Display             Comment
     ================================================================
     [P/R]
     [Prgm]                                  Clear program memory
     [Lbl] [ A ]         001-  42 21 11      Beginning of program
     [ENTER]             002-        36      x value
     [R/S]               003-        31      Stop to accept y value
     [ + ]               004-        10      Add x + y
     [1/x]               005-        15      Invert
     [Rtn]               006-     43 32      End of program
     [P/R]                                   Return to run mode.

     Now, to execute the program where x= 3 and y= 4:

     Keystroke                Display        Comment
     ================================================================
     3 [ A ]                  3.0000         Waiting for y input.
     4 [R/S]                  0.1429         Result



     6.6 The [Goto] Instruction

     The  [Gto]  instruction  can be used to unconditionally jump to a
     location  in the program  identified  with  a  [Lbl] instruction.



                                   - 26 -
     For example, let's write a program that will keep  track  of  the
     sum of the squares of a group of numbers we wish  to enter.

     Keystroke            Display            Comment
     ================================================================
     [P/R]
     [Prgm]                                  Clear program memory
     [Lbl] [ A ]          001-   42 21 11    Beginning of program
     0                    002-          0
     [ENTER]              003-         36    Clear x register
     [Lbl] 2              004-    42 21 2    Label used for looping
     [R/S]                005-         31    Stop to accept input
     [x^2]                006-      43 11    Square the input value
     [ + ]                007-         10    Add to sum of squares
     [Gto] 2              008-       22 2    Branch to label
     [P/R]

     To calculate the sum of the squares of 3, 7, 11, and 15:

     Keystroke                Display        Comment
     ================================================================
     [ A ]                    0.0000         Waiting for 1st value
     3 [R/S]                  9.0000
     7 [R/S]                 58.0000
     11 [R/S]               179.0000
     15 [R/S]               404.0000



     6.7 Branching Using the Index Register

     In the previous example, we used a [Gto] instruction to branch to
     a label, in this case, label  2.  As previously  mentioned, there
     are  15  available labels, 0-9 and  A-E.  You can  also  use  the
     index register [I] to indirectly branch to a label, or indirectly
     call  a  subroutine.   If the  [I]  register  contains  a  number
     representing a label, the  instructions  [Gto]  [I] and [Gsb] [I]
     will  indirectly  branch   to   a  label  or  indirectly  call  a
     subroutine.



     6.8 Program Loops Using the Index Register

     XACT-11C   contains  2  instructions  that  first  increment   or
     decrement a special value contained  in  the  index  register and
     either execute or  skip the next program line depending  upon the
     condition met.   These instructions are [Isg] (increment and skip
     if greater), and [Dse] (decrement and skip less  than  or equal).
     They  can  be  used to control loops where the number of times to
     execute the loop is contained in the index register.

     Looping with the index register requires placing a special "coded
     value" in the index register.  This value is of the form:


                                   - 27 -
           aaaaa.bbbcc

     In  the encoding, aaaaa represents a starting  value  of  a  loop
     counter  and will default to 0  if  it  is  not  included.   This
     value is incremented    or  decremented  each  time  the  flow of
     execution of the program encounters an [Isg] or [Dse] instruction
     respectively.   The value contained in  aaaaa  is  then  compared
     against the value in bbb.  In the case of the  [Isg] instruction,
     if the value aaaaa is greater than bbb, the  instruction  in  the
     program code which follows the [Isg] instruction will be skipped,
     and program  execution  will    begin  immediately  following the
     skipped  instruction.     Likewise  in  the  case  of  the  [Dse]
     instruction, if the value aaaa is less than or equal to the value
     bbb, the same skipping over event will occur.

     In the encoding, the value cc represents the  count  to increment
     or decrement by each time the loop is executed.

     For  example, if we wanted to execute  a  group  of  instructions
     within a loop 10 times where  the  loop counter begins at 10, and
     decrements by steps of 1 until  it  reaches 0, we would place the
     value  10.00001  in  the index register.    Notice  that  in  the
     encoding, aaaaa= 10, bbb= 000, and cc= 01.   A  program  fragment
     using this loop is shown below:

     10.00001
     [Sto] [ I ]
     [Lbl] [ A ]

        (Instructions within loop)
     [Dse]
     [Gto] [ A ]

        (Instructions after loop)



     6.9 Program Loops and Branches Using the X and Y Registers

     XACT-11C can also  make  "conditional  tests"  based  upon values
     contained  in    the X and Y registers.  There  are  8  different
     possible conditions in all.   These  functions  each  execute the
     next instruction in the  program  if  the  condition is true, and
     skip over it  if  the  condition  is false.  The instructions are
     defined as:

        [x<=y]     true if x less than or equal to y
        [x<0]      true if x less than 0
        [x>y]      true if x greater than y
        [x>0]      true if x greater than 0
        [x<>y]     true if x not equal to y
        [x<>0]     true if x not equal to 0
        [x=y]      true if x equal to y
        [x=0]      true if x equal to 0


                                   - 28 -
     6.10 Branching On Flags Set/Clear

     XACT-11C contains two flags  which  can be set (1) or cleared (0)
     and then may  be  later  tested  and a conditional jump may occur
     depending on the state of the  flags.    The flags are Flag 0 and
     Flag  1.  The flags are set or cleared with the [SF] or the  [CF]
     function  keys respectively.  To set flag  1,  for  example,  you
     would press [SF] 1. You may  test  the  status of a flag with the
     [F?] function key within a program.  Again, follow this  key with
     either 0 or 1 depending on  which  flag  you wish to test. If the
     flag was set, the instruction in memory immediately following the
     [F?] will be executed.  If  not,  the program will skip over this
     instruction line number and  proceed  with  execution at the next
     line number.

     The example below illustrates a program fragment  utilizing flags
     testing:


           (Program instructions)
     [Lbl] 3
     [SF] 0
     [Gto] B

           (Program instructions)

     [Lbl] 4
     [CF] 0
     [Gto] B

           (Program instructions)

     [Lbl] B
     [F?] 0      (test to see if flag 0 is set)
     [Gto] C     (transfer control to label C if flag 0 set)
     [Gto] D     (transfer control to label D if flag 0 clear)

     If  the program executes at label 3, flag 0 is set and control is
     transferred to label B.  At this point,  since  flag  0  was set,
     control  will transfer to label C.   Similarly,  if  the  program
     executes at label 4, flag 0 is cleared, and thus, when control is
     transferred to label B, the flag test will fail.  This will cause
     the [Gto] D  instruction to be executed.



     6.11 The Single-Step Instruction

     The [SST] (single-step) instruction can be used in either program
     mode or run mode.    In program mode, pressing [SST] will display
     the next program  line  number  in  a  program.  In run mode, the
     [SST] function can be used to execute a  program  one  step  at a
     time.  This is useful for program debugging.   The  [BST]  (back-
     step) instruction works like  the  [SST]  instruction  in program


                                   - 29 -
     mode except that it displays  the previous program line number in
     a program.  The  [BST]  instruction does not operate in run mode,
     that is, it won't back-step  execution of a program, only display
     the previous program line number.



     6.12 Moving to a Program Line Number

     You can move to a specific line number in either program  mode or
     run  mode.    Press [Gto] [.]  nnn  where nnn is a 3 digit number
     between  0  and 203.  In run  mode,  pressing  [R/S]  will  begin
     execution at that line number.



     6.13 Inserting and Deleting Program Lines

     XACT-11C can edit an  existing  program  by inserting or deleting
     lines  within the program.   To  do  this, you must be in program
     mode  and  move  to the line number where you wish  to  make  the
     insertion/deletion using the [Gto] [.] nnn instruction  where nnn
     is the  line  number  (described  ]  in  section 6.12 above).  To
     insert a line, simply enter the instruction for the line you wish
     to insert.  The insertion  will happen immediately  following the
     line and all other line numbers will be pushed ahead in memory.

     To delete a line, move to the line you wish  to  delete and press
     the [<-] function key.



























                                   - 30 -
     7. STATISTICAL CALCULATIONS



     XACT-11C  can  perform  common statistical calculations including
     mean and standard deviation using it's built-in  capabilities. In
     addition, programs can be written to perform  complex statistical
     analysis.



     7.1 Entering and Removing Numbers.


     The [S+] function  key  is  used  to  enter a new number into the
     statistical  registers.    XACT-11C    can  be  used  to  perform
     statistical operations using both  one  and  two variables.  When
     using  one  variable,  that variable is  referred  to  as  the  X
     variable.  With two variable  analysis,  the  second  variable is
     referred to as the Y variable.

     When entering  single variable numbers, enter the number and then
     press the [S+] function  key.    Continue  this process until all
     numbers have been entered.

     With two variables,  first  key  in  the Y variable and press the
     [ENTER] key, then enter the X variable and press the [S+] key.

     When the [S+] function key is used, memory registers 1  through 6
     will  hold  intermediate  values.  You can use the [Rcl] function
     key to view these values, or to use them within  a  program.  The
     values contained in registers 1 through 6 are summarized below:

        R0   contains the value N, the number of data values
             (or data pairs) entered thus far.
        R1   contains the sum of all the X variable values.
        R2   contains the sum of the squares of all the X variable  values.
        R3   contains the sum of all the Y variable values.
        R4   contains the sum of the squares of all the Y variable  values.
        R5   contains the sum of the products of the X variable  values
             and the Y variable values.

     To  remove an incorrectly entered value, you  can  use  the  [S-]
     function key.  Simply re-enter the incorrect value and then press
     the [S-] function key.



     7.2 Statistical Mean

     Example: Suppose you are a  teacher  with  5  students. Student's
     scores on their  last test were 80, 63, 77, 94, and 79.  Find the
     mean  of the test results.



                                   - 31 -
     Keystroke                Display        Comment
     ================================================================
     [S]                                     Clear statistics
     80 [S+]                  1.0000         1st score
     63 [S+]                  2.0000         2nd score
     77 [S+]                  3.0000         3rd score
     94 [S+]                  4.0000         4th score
     79 [S+]                  5.0000         5th score
     [xbar]                  78.6000         Mean

     The mean of the test scores is 78.6.



     7.3 Standard Deviation

     XACT-11C can be used to  calculate the standard deviation of both
     x and y variables using the [S] function key.

     Example:   Assume  a  set  of  students  test scores for math and
     English tests are as follows:

     Student       Math       English
     =================================
        1          59         64
        2          66         69
        3          88         82
        4          70         51

     Calculate the standard deviation for the students results.

     Keystroke                Display        Comment
     ================================================================
     [S]                                     Clear registers
     59 [ENTER] 64 [S+]       1.0000         1st student
     66 [ENTER] 69 [S+]       2.0000         2nd student
     88 [ENTER] 82 [S+]       3.0000         3rd student
     70 [ENTER] 51 [S+]       4.0000         4th student
     [S]                      12.8193        Math standard deviation
     [x<>y]                   12.3659        English std. deviation

     The standard deviation for  the  student's  math scores was 12.82
     and for the English scores was 12.37.



     7.4 Linear Estimate

     Using values entered  for  x  and  y variables, you can compute a
     "best  guess"  for  either variable, given a sample value for the
     other one.

     Example: Using the above  data  for  student test scores, compute
     an estimate for a student's  English score given that the student


                                   - 32 -
     has  a math score of 80.  Compute the correlation coefficient for
     this  value.

     Keystroke                Display        Comment
     ================================================================
     80 [y,r]                 78.8692        Math score estimate
     [x<>y]                    0.6235        correlation coefficient



     7.5 Linear Regression

     Linear regression is a method used for determining the "best fit"
     straight  line equation for a set  of  paired  statistical  data.
     XACT-11C can determine  the  factors  for  the equation Y= MX + B
     where M is  the   slope of the line and B is the Y intercept. The
     [L.R.] function key  returns  the  slope  M in the Y register and
     the intercept B in the X register.

     Keystroke                Display        Comment
     ================================================================
     [L.R.]                   30.7556        Y intercept
     [R|]                      0.6014        Slope

































                                   - 33 -
     APPENDIX



     Error Conditions

     When an error  is  encountered  during  operation,  XACT-11C will
     display the word "Error" in the calculator's display, followed by
     a 1 digit  error code. These error codes are defined below:

     Error 0  -  Invalid math operation.  This  error  is  encountered
     when an operation attempted  division  by 0, the square root of a
     negative number, or other invalid operation.

     Error  1    -    Out-of-Bounds Storage register operation.   This
     happens if a storage  register  operation  overflows the range of
     the calculator.

     Error 2  -  Invalid Statistical operation.    This  happens  if a
     statistical operation cannot be performed or is out of range, for
     instance taking the mean of 0 numbers.

     Error 3  -  Invalid Register.  An attempt was  made  to  access a
     label or line number that is out of range.

     Error 4  -  Invalid label or line number.  An attempt was made to
     access a label or line number that is out of range.

     Error 5  -  Invalid subroutine nesting.  A subroutine  was nested
     more than 4 levels deep.

     Error 6  -  Invalid flag accessed. An invalid flag  was accessed,
     valid flags are 0 and 1.























                                   - 34 -
```
{% endraw %}

## X12SHARE.DOC

{% raw %}
```







                                 Shareware XACT-12C




                           The Hewlett-Packard Compatible

                                Financial Calculator

                                    USER'S MANUAL



















                                CalcTech Incorporated

                        13629 Bellevue-Redmond Rd., Suite 202

                                 Bellevue, WA. 98005







                          Sales, 9:00AM-5:00PM Pacific time
                                    206-643-1682

                      Tech Support,Info Line,24 Hour Voice Mail
                                    206-527-9950


                                Description

     This shareware version of XACT-12C is not a demo program!   It is
     a  complete,  full   featured  Financial  Calculator  for  MS-DOS
     computers,  equivalent to  the  Hewlett-Packard  HP-12C  handheld
     calculator.

     Since  it  is  a  shareware  program,  you  may make  copies  and
     distribute them to your friends and co-workers, on bulletin board
     systems, and so on.  However, you may not modify this  program or
     documentation in any  manner,  nor may you distribute the program
     or documentation for profit (handling fees are OK).


                             License Agreement

     THE SOFTWARE HEREIN ARE PROVIDED  "AS IS" WITHOUT WARRANTY OF ANY
     KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
     THE IMPLIED  WARRANTIES  OF  MERCHANTABILITY  AND  FITNESS  FOR A
     PARTICULAR PURPOSE.   THE  ENTIRE  RISK  AS  TO  THE  QUALITY AND
     PERFORMANCE OF THE PROGRAMS IS WITH YOU.

     IN  NO  EVENT  SHALL CALCTECH OR ANY OF IT'S OFFICERS, DIRECTORS,
     SHAREHOLDERS, EMPLOYEES,  AFFILIATES,  OWNERS,  OR  OTHER RELATED
     PARTIES BE LIABLE  TO  YOU  OR  ANY OTHER THIRD PARTY FOR DAMAGES
     INCLUDING ANY  LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR
     CONSEQUENTIAL DAMAGES ARISING OUT OF  THE USE OF OR THE INABILITY
     TO USE THIS PRODUCT OR AS TO THE PERFORMANCE OF THIS PRODUCT EVEN
     IF WE HAVE  BEEN  ADVISED  OF  THE POSSIBILITY OF SUCH DAMAGES IN
     ADVANCE.

     SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY
     FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO  THE  ABOVE LIMITATION
     OR EXCLUSION MAY NOT APPLY TO YOU.

     THIS  AGREEMENT  IS  GOVERNED  BY   THE  LAWS  OF  THE  STATE  OF
     WASHINGTON.



                           Trademarks/Copyrights

     HP-11C, HP-12C, and HP-16C are trademarks of Hewlett-Packard
     PC-DOS, IBM-PC, PC-XT, PC-AT and PS/2 are trademarks of IBM.
     MS-DOS, Microsoft, and Word are trademarks of Microsoft Corp.
     Tornado Notes is a trademark of Micro Logic Corp.
     Hotline is a trademark of General Information, Inc.

     (C)Copyright 1986-1989, 1990 by CalcTech Inc.  Specifications
     herein are subject to change without notice.




                                   - 2 -








                 Registration & Commercial Version Upgrade



     When  you register XACT-12C for only  $28.00  +  $4.00  shipping,
     we'll mail you the COMMERCIAL  VERSION UPGRADE to the program. It
     contains a number of features  not  available  in  this shareware
     version including:


         o  TSR RAM-Resident (Pop-Up) capability
         o  Mouse Support
         o  Import/Export data from an application
         o  Full programming. Programs may be saved as disk files.
         o  Simulated tape which may be viewed, printed, stamped
            with messages, and saved to disk.
         o  Typeset printed user's manual
         o  Discounts on future upgrades and notice of new products


     Or, you may  wish  to  register  all three XACT calculators:  the
     XACT-11C SCIENTIFIC, XACT-12C FINANCIAL, and XACT-16C PROGRAMMER,
     for only  $48.00 + $4.00 shipping, and receive COMMERCIAL VERSION
     UPGRADES for all three calculators.

     Why not register today?






















                                   - 3 -



               XACT SERIES CALCULATORS - REGISTRATION ORDER FORM


     +------+----------------------------------------+----------+----------+
     | Quan |  Description                           |  Price   |  Total   |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-11C Scientific Calculator        |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-12C Financial Calculator         |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-16C Programmer's Calculator      |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |  SPECIAL OFFER!                        |          |          |
     |      |  All 3  (XACT-11C, XACT-12C, XACT-16C) |  $48.00  |          |
     +======+========================================+==========+==========+
                       |                                        |          |
                       | WA. state residents add 8.1% sales tax |          |
                       +========================================+==========+
                                            |                   |          |
     Mail this form to:                     | Shipping/Handling |  $4.00   |
                                            +===================+==========+
     CalcTech, Inc.                                      Total  |          |
     13629 Bellevue-Redmond Rd. Suite 202               Amount  |          |
     Bellevue, WA.  98005                             Enclosed  +==========+
     (206) 643-1682


     Your Name: ______________________________  Phone: _____________________

     Company (if applicable)________________________________________________

     Address: ______________________________________________________________

     City: ________________________________  State __________ Zip __________




     [ ] Check Enclosed   [ ] VISA         [ ] Mastercard

     Credit card #:____________________________________ Exp. Date: ____/____

     Signature: ____________________________________________________________

     Cardholder's name: ____________________________________________________





                                   - 4 -




          ! ! ! !   P L E A S E    R E A D    T H I S   ! ! ! !


     This  user's  manual  contains  complete  documentation  for  the
     COMMERCIAL VERSION of XACT-12C.  As such, several of the features
     described  within  this  manual will not be  available  with  the
     SHAREWARE VERSION of the program included on this disk.


     We have included documentation for the COMMERCIAL VERSION UPGRADE
     so that should you find benefit from the use  of  these  programs
     and decide to register (and we  hope  you will), you would have a
     good idea of what to  expect from the COMMERCIAL VERSION UPGRADE.
     Please  note  that  this  is  not the actual  commercial  version
     documentation  but rather a disk based  "reprint".    Should  you
     decide to register,  you  will receive a complete typeset printed
     manual of the product(s).


     XACT SERIES  CALCULATORS are shareware, not freeware.  Payment is
     voluntary and on the "honor system".  We ask  that  you  register
     the  product(s) if after a short period of  use,  you  find  them
     useful in your work.  We hope that you appreciate the "try before
     you buy" concept and that you will register.


     Anyone who has ever  purchased  expensive  (or  even inexpensive)
     software can attest to  the  frustration  of  being "burned" by a
     lousy product.  We  think  XACT  SERIES CALCULATORS are excellent
     products  but  we're  giving  you  the opportunity to  judge  for
     yourself.  If you agree, please take a moment to register.





















                                   - 5 -
                             TABLE OF CONTENTS



     Section  Title                                                    Page

     1      Getting Started  ..........................................  8

     1.1         Introduction .........................................  8
     1.2         Other Guides .........................................  8
     1.3         System Requirements ..................................  9
     1.4         Installing XACT-12C and Making Backups ...............  9
     1.5         Command Line Options & Changing Hot Keys .............  9

     2      Loading XACT-12C .......................................... 11

     2.1         XACT-12C Shareware Version ........................... 11
     2.2         XACT-12C as a RAM Resident Program ................... 11
     2.3         XACT-12C as a Removable RAM Resident Program ......... 11
     2.4         XACT-12C as a standalone DOS program ................. 12

     3      XACT-12C Basics ........................................... 13

     3.1         Keyboard Conventions ................................. 13
     3.2         Function Keys ........................................ 13
     3.3         Prefix Keys .......................................... 13
     3.4         Entering Numbers ..................................... 14
     3.5         "Short Cut" Keys ..................................... 14

     4      Basic Operations .......................................... 15

     4.1         Setting the Display Format ........................... 15
     4.2         Arithmetic Calculations and RPN ...................... 15
     4.3         Clearing Numbers ..................................... 16
     4.4         Negative Numbers ..................................... 16
     4.5         Mathematical Operations .............................. 17
     4.6         Exponential Notation ................................. 17
     4.7         Memory Storage Registers ............................. 17
     4.8         Stack Operations ..................................... 18
     4.9         The LastX Register ................................... 18

     5      Features (Commercial Version) ............................. 19

     5.1         Getting Help ......................................... 19
     5.2         Viewing the Tape ..................................... 19
     5.3         Feeding a Result ..................................... 19
     5.4         Stamping the Tape .................................... 19
     5.5         Printing the Tape .................................... 20
     5.6         Storing the Tape ..................................... 20
     5.7         Loading a Program .................................... 20
     5.8         Storing a Program .................................... 20
     5.9         Importing Data from an Application ................... 21




                                   - 6 -
     Section  Title                                                    Page

     6      Financial Calculations .................................... 22

     6.1         Financial Registers and Functions .................... 22
     6.2         Cash Flow Notation ................................... 22
     6.3         Percentage Operations ................................ 23
     6.4         Simple Interest ...................................... 24
     6.5         Compound Interest .................................... 24
     6.6         Amortization ......................................... 27
     6.7         Net Present Value .................................... 27
     6.8         Internal Rate of Return .............................. 28

     7      Bond Calculations ......................................... 30

     7.1         Bond Yield ........................................... 30
     7.2         Bond Price ........................................... 30

     8      Statistical Calculations .................................. 31

     8.1         Entering and Removing Numbers ........................ 31
     8.2         Statistical Mean ..................................... 31
     8.3         Statistical Weighted Mean ............................ 32
     8.4         Standard Deviation ................................... 32
     8.5         Linear Estimate ...................................... 33

     9      Calendar Calculations ..................................... 34

     9.1         Days Between Dates ................................... 34
     9.2         Date Calculations .................................... 34

     10     Programming ............................................... 35

     10.1        Introduction to Programming .......................... 35
     10.2        Entering a Program Into XACT-12C ..................... 35
     10.3        Program Loops and Branches ........................... 37

     11     Appendix/Error Conditions ................................. 38


















                                   - 7 -
     1 Getting Started



     1.1 Introduction

     XACT-12C is a software emulation  of  the  famous Hewlett-Packard
     HP-12C.  If you are familiar with the HP-12C, you will  find that
     you  already  know how to use XACT-12C.    If  not,  you'll  find
     XACT-12C easy to  learn  and  use.   It will become an invaluable
     tool in your work.

     XACT-12C  is a RAM resident program  (Commercial  Version).    It
     remains loaded in your computer's memory ready to "pop-up" at the
     activation of a "hot key", even if you're running another program
     at  the  time. XACT-12C can also be  run  as  a  stand-alone  DOS
     program, if desired.

     If you are already familiar with DOS and with the HP-12C, you may
     only need to read Chapters 2 and 3.    This  will  provide enough
     information to get you started.

     If you are new to DOS and/or the HP-12C, you may wish to read, or
     at least skim, Chapters 1 through 6.

     NOTE:

     A number of  the  function  keys  on  the  XACT-12C  use graphics
     characters to represent them.  Because this  disk-based shareware
     documentation is printed  in  ASCII text mode, some function keys
     cannot be accurately shown in this file.  We've tried our best to
     emulate the look of the graphics  symbols  and to make it easy to
     infer  which  functions  are  intended  from the context  of  the
     Documentation.



     1.2 Other Guides

     There are a number  of  guides  and  references available for the
     HP-12C  that  can  be  used  with  XACT-12C  as  well.  These are
     generally available in bookstores and other places where Hewlett-
     Packard calculators are sold.   Some  of  these  publications are
     listed below

     "HP-12C  Owner's  Handbook  and  Problem  Solving  Guide"  Covers
     general  operations, functions, applications, and programming  of
     the HP-12C.  Published by the Hewlett-Packard Company.

     "HP-12C Solutions Handbook" Supplement  to  the  Owner's Handbook
     and Problem Solving Guide.    Applications  include  real estate,
     lending, savings, investment  analysis,  securities, forecasting,
     pricing, statistics, personal finance, and  more.    Published by
     the Hewlett-Packard Company.


                                   - 8 -
     "HP-12C Training  Guide"  Tutorial  introduction  to  the  HP-12C
     containing lots of examples.   Published  by  the Hewlett-Packard
     Company.

     "An Easy  Course in using the HP-12C" by Coffin/Wadman. Published
     by Grapevine Publishing, Inc. P.O. Box 118, Corvallis, OR, 97339.



     1.3 System Requirements

     To operate the XACT-12C calculator, you will need an IBM  PC, PC-
     XT, PC-AT, PS/2, or close compatible equipped with  at  least the
     following:

        256K RAM
        One floppy disk drive
        PC-DOS or MS-DOS version 2.00 or later



     1.4 Installing XACT-12C and Making Backups

     You should make a copy of the programs contained on  the XACT-12C
     diskette for backup purposes. Use  the DOS "copy" command to copy
     all the files to another diskette or to your hard disk. There may
     be  a  file  named README.DOC on your disk.  If  so,  you  should
     examine it using your word processor or the  DOS  "type" command.
     You may wish to  install  XACT-12C  in  your AUTOEXEC.BAT file so
     that  it's  automatically  ready each time you power up or reboot
     your computer.  If you  are unfamiliar with an AUTOEXEC.BAT file,
     see your DOS manual.



     1.5 Command Line Options/Changing Hot-Keys (Commercial Version)

     A command line option  is  an  additional  command typed when you
     first  load  XACT-12C.    There  are  several  of  these  options
     available.   For example, if you wish to  save  memory  space  by
     running  XACT-12C in non RAM-Resident mode,  you  would  use  the
     nopop command line option, i.e.:

         x12  /nopop  [ENTER]

     ([ENTER] means press  the  ENTER  key).   You can also change the
     invocation "hot-key" using a command line  option.  Valid hot-key
     definitions are Alt-Shift-F (default), Alt-F, and Alt-Ctrl-F. For
     example, to change the  invocation  "hot-key"  from  it's default
     setting of Alt-Shift-F to Alt-F,  and  also  change  the tapefile
     name to test.txt in the \bin directory:

         x12  /alt-f   /tapefile=\bin\test.txt



                                   - 9 -
     The  following  is  a  list  of available command  line  options:
     (Commercial Version only)

        /nopop        Run XACT-12C in non RAM Resident mode.
        /mono         Force XACT-12C into monochrome mode.
        /tapefile=    Name of file used to save the tape.
        /alt-f        Change the invocation key to Alt-F.
        /alt-ctrl-f   Change the invocation key to Alt-Ctrl-F.
        /nomouse      Disable mouse operation.















































                                   - 10 -
     2 Loading XACT-12C



     2.1 XACT-12C shareware version

     To load the Shareware XACT-12C, at the DOS prompt type:

         x12share [ENTER]



     2.2 XACT-12C as a RAM Resident program    (Commercial Version)

     To load XACT-12C, at the DOS prompt type:

         x12 [ENTER]

     You will see  the  copyright  message  appear on the screen.  The
     computer  will then return to the DOS prompt  and  appear  as  if
     nothing had happened.    However, the XACT-12C calculator has now
     been loaded into your computer's memory and is ready to pop-up at
     the activation of the hot key.  To activate XACT-12C, press:

         Alt-Shift-F

     XACT-12C  will  now  appear  on  your  screen,  ready to  perform
     calculations.  To exit from XACT-12C, press the Esc key.



     2.3 XACT-12C as a  Removable  RAM-Resident  Program   (Commercial
     Version)

     When XACT-12C is loaded  as  a RAM Resident program as in section
     2.1 above, it remains loaded in your computer's memory until your
     computer is rebooted  or  powered  off.   There is another way to
     install  XACT-12C in such a way that it  may  be  removed  memory
     without rebooting.   To  do  so,  you must use the TSRADD.COM and
     TSRDROP.COM utilities provided.  Using  this  method,  to install
     XACT-12C, you would type at the DOS prompt:

         tsradd x12 [ENTER]
         x12 [ENTER]

     In fact, you may load RAM-Resident programs from other vendors as
     well  using  the  TSRADD.COM utility.  For example, to load other
     vendor's TSR's such as Tornado Notes and Hotline, you would type:

         tsradd tn [ENTER]
         tn [ENTER]
         tsradd hotline [ENTER]
         hotline [ENTER]



                                   - 11 -
     If you aren't running these programs from your current directory,
     be sure to provide  a  complete pathname, or use the PATH command
     provided with DOS.

     To remove your  memory  resident  programs,  use  the TSRDROP.COM
     utility.  It is necessary to drop your TSR's in the reverse order
     that they were added.  When you run TSRDROP.COM, the utility will
     prompt you with  the  next  TSR  to be removed from memory. Press
     ENTER to confirm the drop or Esc to exit the utility.



     2.4 XACT-12C as a Stand Alone Program  (Commercial Version)

     XACT-12C defaults to being a RAM Resident program,  but  can also
     be run as a stand-alone DOS program.  To run XACT-12C as a stand-
     alone program, type:

        x12 /nopop





































                                   - 12 -
     3 XACT-12C Basics



     3.1 Keyboard Conventions

     Throughout this manual, XACT-12C function keys are denoted within
     a  box.     For   example,  the  function  key  for  amortization
     calculations is shown as  [AMORT].   In the case of function keys
     which require a prefix key (discussed in the  next  section), the
     prefix key is not given in this manual  since  it  can  easily be
     determined.

     Keys on the PC keyboard are listed in this  manual  using  single
     quotes  such as 'a'.  Numbers to be  entered  into  XACT-12C  are
     shown in normal type.



     3.2 Function Keys

     XACT-12C has approximately 70 different function keys arranged in
     the same ordering as  on  the HP-12C.  Function keys are arranged
     in  groups of up to 3 functions per key; an upper, a lower and  a
     middle  function  all  correspond to one function key.  The upper
     and  lower  functions  are invoked by first pressing a prefix key
     (discussed in the next  section)  and then the function key.  The
     middle function does not require the use of a prefix key.  The PC
     keystroke corresponding to function key is  shown  immediately to
     the left of the function box.

     The  first  row  of function keys use the PC keys F1 through F10.
     The second through  fourth  rows use the alphabetic characters as
     arranged left to right on your PC keyboard.

     For  example,  the  [Clx]  function  on  XACT-12C  is invoked  by
     pressing the letter 'g' on the PC keyboard.  Likewise,  the [Rcl]
     function  is  invoked  by pressing the  letter  'b'.    The  [PV]
     function is invoke by pressing F3.



     3.3 Prefix Keys

     The left shift key and the right shift  key  on  the  PC keyboard
     operate as prefix keys.  They are equivalent to the gold  [f] key
     and the  blue  [g]  key  on the HP-12C.  Prefix keys allow you to
     activate the upper and lower  functions assigned to a PC function
     key.  For example, to invoke the [SOYD] function, you would press
     and release the left shift key, and then press  the  letter  'r'.
     Likewise,  to invoke the [Frac] function,  you  would  press  and
     release  the  right  shift key and then press the letter 'r'.  To
     invoke the [NPV] function, press  and release the left shift key,
     and then press F3.


                                   - 13 -
     3.4 Entering Numbers

     To enter numbers into  XACT-12C,  use  the  numeric keypad on the
     right  side of your keyboard or the  numbers  on  the  typewriter
     portion of the keyboard.



     3.5 Short Cut Keys

     You can use the Enter key  on  the  PC, (also known as the Return
     key) as the XACT-12C [ENTER] key  as  a short cut. Also, the '+',
     '-', '*', and '/' keys adjacent to the numeric keypad function as
     you would expect.










































                                   - 14 -
     4. Basic Operations



     4.1 Setting the Display Format

     When you first start  it  up,  XACT-12C  defaults to displaying 2
     digits  to  the  right  of  the  decimal  point.   To change this
     setting, press the [Fix] function key followed by a number from 0
     to  9  (enter  numbers  using  the numeric keypad).  This  number
     represents the number of  digits  displayed  to  the right of the
     decimal point.  Note that the display format does not  affect the
     number  of  digits  used to perform calculations, only the way in
     which they are  displayed.  If  you  were using a 2 digit display
     format, the number 12.006 would be shown on the display as 12.01.
     In this example, the display has been rounded to  2  digits  past
     the decimal point. However, the  internal  representation  of the
     number is still kept as 12.006,  and  this value would be used in
     subsequent calculations.

     To round the number internally to match the number in the display
     use the [Rnd] key.  In the above example, if  the  [Rnd] key were
     pressed, the internal value 12.006 would be converted to 12.01.



     4.2 Arithmetic Calculations and RPN

     You may already  be  familiar with Reverse Polish Notation (RPN).
     RPN is a type of calculator logic that eliminates  the  need  for
     the  equals  key  and  the  use of parenthesis  in  computations.
     Instead,  multiple  operands  are  entered  into  the  calculator
     separated by the [ENTER] key.  For example, to add the  numbers 3
     and 4:

     Keystroke                 Display        Comment
     ================================================================
        3  [ENTER]             3.00
        4  [ + ]               7.00           Add 3 + 4

     The result, 7.00 is now displayed.  To multiply this result by 5:

     Keystroke                 Display        Comment
     ================================================================
        5 [ * ]                35.00          7.00*5.00

     The way that XACT-12C performs  these calculations with RPN is by
     using a stack.  The stack consists of 4 registers:  X,  Y, Z, and
     T.   It is not generally necessary  to  understand  the  internal
     workings of the stack but for completeness they  will  briefly be
     discussed below.

     Any number displayed is said to be in the X  register.   When the
     [ENTER] key is pressed, a number in the X Register is pushed into


                                   - 15 -
     the Y  Register  and  the  previous  number  in the Y Register is
     pushed  into  the  Z  Register.    The  previous  number in the Z
     register   is pushed into the T Register.  T stands for "Top" and
     represents the top of  the  stack of numbers.  The previous value
     of the T register   is lost.  When a function key such as the [+]
     key  is pressed, the value held in the Y register is added to the
     X register  and  this  result  is  now  stored in the X register.
     Pressing  [ENTER]  does  one  other  thing, it leaves  the  stack
     disabled. This means that a  number entered after the [ENTER] key
     has  been pressed is not pushed on the stack, it remains in the X
     register.  Most operations enable the stack so that  when  a  new
     number  is  entered,  the previous contents of the X register are
     pushed into the Y register.  The most notable exceptions  to this
     rule are the [ENTER] and the [Clx] function keys.



     4.3 Clearing Numbers

     You can  clear  a  number  in  the  display by pressing the [Clx]
     function  key.  The calculator is now  ready  to  accept  another
     entry.  Unlike other calculators, XACT-12C does not require a key
     for clearing a number  and  a different key for clearing the last
     entry.  Whether you have made a mistake  in  adding  a  series of
     numbers, or simply wish to start a new calculation, use the [Clx]
     function  key.  XACT-12C also contains  other  function  keys  to
     clear the following:


        [S]     Clear Sum.  Used to clear the statistical registers
                when perform statistics calculations.
        [Prgm]  Clear Program.  Used to clear the program memory when
                programming XACT-12C.
        [Fin]   Clear Financial Registers.  Used to clear the financial
                registers when performing a new compound interest
                calculation.
        [Reg]   Clear Registers.  Used to clear all registers; display,
                stack, memory, financial, and LastX.  This key is used
                when beginning a new [NPV] or [IRR] calculation, as
                well as various other places.



     4.4 Negative Numbers

     To  change  the  sign of a number in the display, press the [ChS]
     (Change Sign) function key.  The [ChS] function  will  toggle the
     sign of the  value in the display.  The [ChS] key is also used to
     change  the  sign  of  an  exponent if you are using  exponential
     notation.






                                   - 16 -
     4.5 Mathematical Operations

     XACT-12C   contains  a  number  of  commonly  used   mathematical
     operations.


        [x]      Square root of a number.
        [Ln]     Natural log of a number.
        [e^x]    Exponential of a number.
        [1/x]    Reciprocal of a number.
        [Intg]   Return the integer portion of a number.
        [Frac]   Return the fractional portion of a number.
        [y^x]    Raise a number to a power of another number.



     4.6 Exponential Notation

     Use  exponential  notation  to  enter  very large or  very  small
     numbers into XACT-12C.   The  [EEx] function key is used to enter
     an  exponent.    For  example,  to  enter  the  number 12 * 10**9
     (12,000,000,000) type:


     Keystroke                 Display        Comment
     ================================================================
        12 [EEx] 9                 12.00        +09

     Likewise, to enter the number 12-09, you would type:

     Keystroke                 Display        Comment
     ================================================================
        12 [EEx] 9             12.00 +09
        [ChS]                  12.00 -09



     4.7 Memory Storage Registers

     XACT-12C contains 20 different memory storage registers,  used to
     perform  storage  and  memory  arithmetic  calculations.    These
     memories will  retain their values until your computer is powered
     off or re-booted.  Memory  registers in XACT-12C are  referred to
     as  R0-R9  (for  register 0 through 9), and R.0 through R.9.  For
     example, to store the value 20.3 in  memory register 2, type:


     Keystroke                 Display        Comment
     ================================================================
        20.3 [Sto] 2           20.30

     To add the number 9.6 to the contents of register 2, type:

     Keystroke                 Display        Comment


                                   - 17 -
     ================================================================
        9.6 [Sto] [ + ] 2      9.60

     Now, if you wish to view the contents of memory register 2, type:

     Keystroke                 Display        Comment
     ================================================================
        [Rcl] 2                29.90

     Memory register 2 contains the value 29.90.



     4.8 Stack Operations

     The  [x<>y]  function  exchanges the contents  of  the  X  and  Y
     registers.    The [R|] function rolls down  the  stack.    The  T
     register  is  copied  into the  Z register.  The  Z  register  is
     copied into the Y register,  and the  Y  register  is copied into
     the  X register.  The X register  is "rolled  around" into the  T
     register.



     4.9 The LastX Register

     The [Lstx] function key  is  not technically a part of the stack.
     It is used to recover  numbers entered just before a mathematical
     operation  was performed  on  the stack.  The number recovered is
     held  in  a register referred to as  the  LastX  register.    For
     example,  assume  you  meant  to  add  the  numbers  12 and 5 but
     accidentally pressed 6 instead of 5.

     Keystroke                 Display        Comment
     ================================================================
        12 [ENTER]             12.00
        6 [ + ]                18.00          Wrong value
        [Lstx]                  6.00
        [ - ]                  12.00          Subtract
        5 [ + ]                17.00          Correct result
















                                   - 18 -
     5. Features  (Commercial Version only)



     5.1 Getting Help

     A Help menu is available when you are working with XACT-12C.   To
     obtain  help  press:

         Alt-F1

     An information screen will appear in a window.  The help menu can
     be removed by pressing F1 again.



     5.2 Viewing the Tape

     XACT-12C provides a  simulated  tape display which keeps a record
     of your  calculations  as  you  perform  them.   To view the tape
     press:

         Alt-F2

     The tape will appear in a window.  To remove  the  tape, press F2
     again.



     5.3 Feeding a Result

     To  feed  the  result  of  a calculation into the program  you're
     running press:

         Alt-F3

     The calculator will disappear and  the number in the display will
     be fed to your application.



     5.4 Stamping the Tape

     To stamp a message on the simulated tape press:

         Alt-F4

     The message will appear on the tape as  well  as  the  printer or
     tape disk file if either of these options are being used.







                                   - 19 -
     5.5 Printing the Tape

     To print the tape as you make calculations press:

         Alt-F5

     To turn off printing, press F5 again.



     5.6 Storing the Tape

     The simulated tape may be  saved  to  a  disk  file  as  you make
     calculations.   Each  time you  use  XACT-12C,  calculations  are
     appended to the tape file.  To store the tape, press

         Alt-F6

     The  tape will be saved under the name  X12.TAP  in  the  current
     directory.  If you change directories, a different tape file with
     the same name will be  used.  If you wish to use a different name
     for   your   tape   file,   use   the    command    line   option
     /tapefile=filename where filename is any valid DOS filename which
     can include a path (see section 1.6).



     5.7 Loading a Program

     To load a program previously saved press:

         Alt-F7

     A window  will  appear  requesting  a  file  name.  Enter the DOS
     filename of the program you wish to retrieve.



     5.8 Storing a Program

     XACT-12C  allows  you  to save programs as disk files.  To save a
     program on disk, press:

         Alt-F8

     A window will appear prompting you for comments.  You   can enter
     up   to 3 lines of comments, associated with the program you  are
     saving.  Press the  Esc key after you have entered  any comments.
     Another window will appear prompting you for a  filename.   Enter
     any valid DOS filename.






                                   - 20 -
     5.9 Importing Data from an Application

     You can "import" data from the screen of the previous program you
     were running before  popping-up  XACT-12C.  For instance, you may
     be working with a spreadsheet or word-processing program and wish
     to  add  a  series of numbers from the display screen.  To import
     data, press:

         Alt-F9

     You will see the screen you were working  with  before popping-up
     XACT-12C.    However,  you  have  not returned to  your  previous
     program.  Use the up, down, left, or right arrow keys to move the
     cursor to a number on the screen you wish to import.  Then, press
     F9 again to import the number into   XACT-12C.    It  will appear
     just  as if you had typed it in by hand.  If  you  now  press  F9
     again, you'll see the cursor will have moved  down a row. This is
     to help facilitate the importing of  a  "column"  of numbers.  If
     you wish to accept  the  data where the cursor rests, again press
     F9. If not, use the arrow keys to move to the desired location.

     It isn't possible to import data  from  a screen if the screen is
     in graphics  mode.    In  this  case,  XACT-11C will sound a beep
     indicating  that it can't import a number.    One  commonly  used
     program which utilizes graphics mode is Microsoft Word.    If you
     use  Word, you should use text mode.   Pressing  Alt-F9  in  Word
     allows you to switch between graphics and text modes.





























                                   - 21 -
     6. Financial Calculations



     6.1 Financial Registers and Functions

     XACT-12C  contains  a  number  of  financial  registers.    These
     registers  are  function  keys used for storing  values  and  for
     computing compound interest problems. The financial registers are
     summarized here:


        [PV]      Store/Calculate Present Value
        [FV]      Store/Calculate Future Value
        [I]       Store/Calculate the Interest Rate per
                  compounding period
        [N]       Store/Calculate the Number of periods

     In addition, there are a  number of additional function keys used
     for financial calculations:

        [AMORT]   Calculate Amortization
        [INT]     Calculate simple Interest
        [NPV]     Calculate Net Present Value
        [IRR]     Calculate Internal Rate of Return
        [PRICE]   Calculate the Price of a Bond
        [YTM]     Calculate the Yield To Maturity of a Bond
        [SL]      Calculate Straight Line Depreciation
        [SOYD]    Calculate Sum of Years Digits Depreciation
        [DB]      Calculate Declining Balance depreciation



     6.2 Cash Flow Notation

     Compound  interest  calculations  involve  both  the  paying  and
     receiving of monies.  For example if you  take  out  a  loan, you
     initially receive  money  from the bank, then you must  pay money
     to the bank at periodic  intervals.   Likewise    if  you deposit
     money  into  a  savings account, you  are paying money  into that
     account and receiving money later in terms   of  what  you   have
     earned as principal and interest.

     There  is  a  convention used within XACT-12C  to  designate  the
     paying and receiving of monies when calculation compound interest
     calculations.  Money paid is always a negative  number,  since it
     is being subtracted from a source.  Likewise, money received is a
     positive  number.    Thus when  entering or calculating a problem
     using the [PV]  the  [FV]  or  the  [PMT]  registers,  you should
     observe the proper sign convention.    This  concept  will become
     clear in the examples of section 6.5.





                                   - 22 -
     6.3 Percentage Operations

     XACT-12C  performs   several   different   types   of  percentage
     calculations.  The [ % ] function calculates  the  percent amount
     of  a  number.  The [D%] calculates the difference in percent one
     number is from  another,    and  is used in percentage markup and
     discount calculations.   The  [%T]  calculates  the  percentage a
     number is of a total of numbers.

     Example:  Determine  the  total amount you would pay for a $39.95
     radio if the sales tax is 8.1%.

     Keystroke                 Display        Comment
     ================================================================
        39.95 [ENTER]          39.95
        8.1 [ % ]               3.24          Sales tax
        [ + ]                  43.19          Total paid.


     You would pay $43.19 including sales tax.

     Example: What is 20% of $3500.00?

     Keystroke                 Display        Comment
     ================================================================
        3500 [ENTER]           3500.00
        20 [ % ]               700.00


     Example: Gasoline prices fell last month from an average of $1.09
     to $.98.  What percent difference does this represent?

     Keystroke                 Display        Comment
     ================================================================
        1.09 [ENTER]             1.09
        .98 [D%]               -10.09

     Gasoline prices have fallen 10.09%.


     Example:  If last year, you spent $640.00 on  gasoline  for  your
     car, $340.00 in insurance, and $448.00 in maintenance and repair,
     what  percentage of your total automotive  costs  were  spent  on
     gasoline?

     Keystroke                 Display        Comment
     ================================================================
        640 [ENTER]            640.00         Gasoline
        340 [ + ]              980.00         Plus insurance
        448 [ + ]             1428.00         Plus repair
        640 [%T]                44.82

     You spent nearly 45 percent on gasoline.



                                   - 23 -
     6.4 Simple Interest

     Simple interest calculations involve calculations  where interest
     is not compounded over a number of periods but rather is a single
     fixed amount  over a fixed  period  of time.  Simple interest can
     be computed either using a 360 day year or a 365 day year.

     Example:    Suppose  you wish to compute the amount owed on a 180
     day loan of  $5000.00  computed using 12% simple interest. Assume
     that interest is calculated using a 360 day year.

     Keystroke                 Display        Comment
     ================================================================
     5000 [ChS] [PV]          -5,000.00       Loan amount
     180 [ N ]                   180.00       Loan period
     12 [ I ]                     12.00       Interest rate.
     [INT]                       300.00       Interest, 360 Day basis
     [ + ]                     5,300.00       Total amount

     The amount owed, including interest is 5,300.00.   If  you wished
     to compute the interest based on a 365 day year, you  would press
     the [R|] key sequence after pressing [Int].



     6.5 Compound Interest

     Compound  interest calculations involve monies where interest  is
     computed at regular compounding periods.    A  compounding period
     may  be  a  day, month, year, etc.  The more  often  interest  is
     compounded, the greater  the  amount  of  interest  payment since
     interest is being earned/paid on interest.

     XACT-12C uses the  [PV]  [FV]  [PMT]  [N]  and  [I]  registers in
     compound interest calculations.  Any  of  four  of  the variables
     must be known and the fifth one can then be calculated.

     In calculations where  the  compounding period is monthly and the
     length of annuity or interest rate are given  in  years, XACT-12C
     provides two convenient short cut function keys.   The  [12x] key
     is used  to  store  the  number of years and the [12/] is used to
     store the annual interest rate.

     In addition, the [Beg] and [End] function keys can  be  used  for
     when interest is to be compounded at the Beginning of  a compound
     period  (annuity  due),  or  at  the End of a compounding  period
     (ordinary annuity).  When first  loaded, XACT-12C is in End mode.
     To change to Begin mode, you would press the [Beg]  function key.
     When you do so, the letters "Beg" will be  shown  to the right of
     the display to remind you that  you  are in Begin mode. To change
     back to End mode, press [End].

     A number of  compound  interest  calculation  examples  are shown
     below.


                                   - 24 -
     LOAN CALCULATIONS

     Example:  Suppose you  wish  to take out a home improvement loan.
     Calculate the monthly  payment  if  your  loan is for $7500 at 9%
     annual interest compounded monthly over 4 years.

     Keystroke                 Display        Comment
     ================================================================
     [Fin]                                    Clear finance registers
     7500 [PV]                 7,500.00       Store PV amount
     [End]                     7,500.00       Use "end" mode
     9 [12/]                       0.75       Interest rate/period
     4 [12x]                      48.00       Number of periods
     [PMT]                      -186.64       Monthly payment.


     Example:   How much could you afford to pay for a new car if  you
     could afford $300.00 monthly payments.  Assume a 4 year loan with
     6% interest compounded monthly.

     Keystroke                 Display        Comment
     ================================================================
     [Fin]                                    Clear finance registers
     300 [ChS] [PMT]           -300.00        Monthly payment
     6 [12/]                      0.50        Monthly interest rate
     4 [12x]                     48.00        Number of periods
     [PV]                    12,774.10        Purchase price

     You could afford to spend as much as $12,774.10 for your car.


     Example:  Calculate the Annual Percentage Rate (APR) on a 20 year
     home loan of $125,000 at 9.5%  interest.   Assume the loan fee is
     1.5%.

     Keystroke                 Display        Comment
     ================================================================
     [Fin]                                    Clear registers
     [End]                                    End mode
     125000 [PV]            125,000.00        Amount of loan
     9.5 [12/]                    0.79        Monthly interest
     20 [12x]                   240.00        Number of months
     [PMT]                   -1,165.16        Monthly payment
     [Rcl] [PV]                   1.50
     [ % ] [ - ] [PV]       123,125.00        Amount less loan fee
     [ I ]                        0.81        Monthly interest
     12 [ * ]                     9.72        APR interest

     The APR interest rate is 9.72%.


     Example:  Suppose you  purchased  a home 7 years ago for $75,000.
     You have just sold the home for 124,000.    In  terms  of monthly
     compound interest rate, how much has the home appreciated?


                                   - 25 -
     Keystroke                 Display        Comment
     ================================================================
     [Fin]                                    Clear finance registers
     [End]                                    End mode
     75000 [ChS] [PV]       -75,000.00        Purchase price
     124000 [FV]            124,000.00        Sell price
     7 [12x]                     84.00        Number of months
     [ I ]                        0.60        Monthly interest rate
     12 [ * ]                     7.20        Annual interest rate

     The home has appreciated at an annual rate of 7.2%.


     SAVINGS CALCULATIONS

     Example:  Suppose  you  presently  have  $9600  in  your  savings
     account.  You have just received a raise  and  are  able  to make
     monthly deposits of $400 into this account.  How long will  it be
     before  you  have  $17000 if your account  earns  6.50%  interest
     compounded quarterly?

     Keystroke                 Display        Comment
     ================================================================
     [Fin]                                    Clear finance registers
     9600 [ChS] PV            9,600.00        Beginning amount
     400 [ChS] [PMT]            400.00        Monthly deposit
     6.5 [ENTER] 4 [/] [I]        1.63        Interest rate per period
     17000 [FV]              17,000.00        Future value
     [ N ]                       13.00        Number of months

     It would take 13 months to reach $17,000 in your account.


     Example:  How  much will you have to save each month in order  to
     have $3500 at the end  of  14  months.    Assume  you  make equal
     monthly  deposits  into  a new savings account  that  earns  5.5%
     interest compounded monthly.

     Keystroke                 Display        Comment
     ================================================================
     [Fin]                                    Clear finance registers
     3500 [FV]                3,500.00        Future value
     14 [N]                      14.00        14 periods
     5.5 [12/]                    0.46        Interest rate/period
     [PMT]                     -242.64        Monthly deposit

     You would have to save $242.64 per month.









                                   - 26 -
     6.6 Amortization

     XACT-12C can produce  a  loan  amortization  schedule  using it's
     built  in  [AMORT]  function.     To   perform   an  amortization
     calculation, you must:

        1- Enter the loan amount, interest, and payment amount.
        2- Enter the number of payments to amortize and press
           [AMORT] to display the interest amount paid toward the loan.
        3- Press the [x<>y] function to display the principal amount paid
           toward the loan.
        4- Press [Rcl] [PV] to display the balance of the loan.

     Example:  Suppose you  have  purchased  an automobile for $23,000
     at 7.5% interest compounded monthly on  a  4 year loan.  Find the
     amount you will have  paid  in interest and principal on the loan
     after 10 months and after 20 months.

     Keystroke                 Display        Comment
     ================================================================
        [Fin]                                 Clear registers
        [End]                                 End mode
        23000 [PV]           23,000.00        Loan amount 7.5
        [12/]                     0.63        Interest per month
        4 [12x]                  48.00        Number of months
        [PMT]                  -556.11        Monthly payment
        10 [AMORT]           -1,319.57        Interest paid 10 mo.
        [x<>y]               -4,241.53        Principal paid 10 mo.
        [Rcl] [PV]           18,758.47        Balance
        10 [AMORT]           -1,046.90        Interest paid 20 mo.
        [x<>y]               -4,514.20        Principal paid 20 mo.
        [Rcl] [PV]           14,244.27        Balance 20 mo.

     After  10  months,  you would have paid  $1,319.57  in  interest,
     $4,241.53  in  principal,  and  have  a   remaining   balance  of
     $18,758.47.  After 20 months, you would have  paid  an additional
     $1,046.90  in  interest,  $4,514.20  in  principal,  and  have  a
     remaining balance of $14,244.27.



     6.7 Net Present Value

     The [NPV] function calculates the net present value  of  a series
     of cash flows, made at regular intervals.  It  is  most  commonly
     used  to perform  an analysis between  a  variety  of  investment
     opportunities.     A  negative  NPV  represents  a  loss  on  the
     investment.

     Example:  Suppose that you wanted to buy a business  for $150,000
     and sell it after 4 years.  If you project  that  your cash flows
     will be -7,500 after  the  first  year,  $9,000 after the second,
     $28,000 after the  third,  and finally $164,000 after the fourth,
     would you be receiving at least 12% return?


                                   - 27 -
     Keystroke                 Display        Comment
     ================================================================
        [Reg]                                 Clear registers
        150000 [ChS] [CFo]    -150,000.00     Initial cash outlay
        7500 [ChS] [CFj]         7,500.00     1st cash flow
        9000 [CFj]               9,000.00     2nd cash flow
        28000 [CFj]             28,000.00     3rd cash flow
        164000 [CFj]           164,000.00     4th cash flow
        12 [ I ]                    12.00     Desired interest rate
        [NPV]                  -11,974.01     Net Present Value.


     Since the result is a negative number, the desired 12% rate would
     not be achieved.

     The [Nj] function can be used when there are a number of times in
     which the same cash flow occurs.

     Example:    Suppose  you are considering purchasing  a  hotel  in
     Colorado  for  an  initial payment of $110,000.  You predict that
     cash flows for the first 2 years be $45,000  each  year,  $55,000
     for the third year and $60,000 for the fourth year.  You desire a
     20% return on investment.  Can this amount be realized?

     Keystroke                 Display        Comment
     ================================================================
     [Reg]                                    Clear registers
     110000 [ChS] [CFo]      -110,000.00      Initial cash outlay
     45000 [CFj]               45,000.00
     2 [Nj]                         2.00      1st and 2nd cash flow
     55000 [CFj]               55,000.00      3rd cash flow
     60000 [CFj]               60,000.00      4th cash flow
     20 [ I ]                      20.00      Interest rate
     [NPV]                     19,513.89      Net Present Value

     The NPV for the hotel is positive, thus the investment will yield
     the desired result.



     6.8 Internal Rate of Return

     The internal rate of return is a discount rate which  equates the
     present value of the expected cash outlays with the present value
     of expected cash income.  It is the rate of return  an investment
     is expected to return.

     Example:  Calculate the  Internal  Rate  of  Return for the above
     example.







                                   - 28 -

     Keystroke                 Display        Comment
     ================================================================
     [IRR]                       28.60        Internal rate of return


     The investment will yield a 28.6% return.


     Example:    An  investment in a startup  technology  business  is
     projected to  involve negative cash flows of $30,000, $50,000 and
     $70,000  for  the  first three years, and finally a positive cash
     flow of $180,000 for  the  fourth  year.   Calculate the internal
     rate of return, the return on the investment.

     Keystroke                 Display        Comment
     ================================================================
     [Reg]                                    Clear registers
     30000 [ChS] [CFo]       -30,000.00       1st cash flow
     50000 [ChS] [CFj]       -50,000.00       2nd cash flow
     70000 [ChS] [CFj]       -70,000.00       3rd cash flow
     180000 [CFj]            180,000.00       4th cash flow
     [IRR]                        10.89       IRR

     The investment would yield a 10.89% return after 4 years.































                                   - 29 -
     7. Bond Calculations



     7.1 Bond Yield

     The [Price] and [YTM] functions  calculate the price and yield to
     maturity of a semi-annual  coupon  bond.   Using these functions,
     calculations are done using a par value of 100.

     Example:  If you are interested in purchasing an 8.5% semi-annual
     coupon  bond  at 94 1/2.  Determine  the  yield  this  bond  will
     produce if you purchase it on November 15, 1987 and it matures on
     April 7, 1996.

     Keystroke                 Display        Comment
     ================================================================
     [M.DY]                                   Mon/Day/Yr format
     8.5 [PMT]                   8.50         Coupon rate
     94.5 [PV]                  94.50         Bond price
     11.151987 [ENTER]          11.15         Purchase date
     4.071996 [YTM]              9.46         Yield

     The bond would yield 9.46%.



     7.2 Bond Price

     Example:    Assume  you desire a yield of 8.75% on  a  bond  that
     reaches  maturity  on  August 4, 1998.  If the bond  is  a  7.25%
     Treasury bond, how much should you pay for the bond on October11,
     1988?

     Keystroke                 Display        Comment
     ================================================================
     [M.DY]                                   Mon/Day/Yr format
     7.25 [PMT]                  7.25         Coupon rate
     8.75 [ I ]                  8.75         Desired yield
     10.111988 [ENTER]          10.11         Purchase date
     8.041998 [Price]           90.24         Compute price

     You should pay $90.24.













                                   - 30 -
     8. Statistical Calculations



     XACT-12C  can  perform  common statistical calculations including
     mean and standard deviation using it's built-in  capabilities. In
     addition, programs can be written to perform  complex statistical
     analysis.



     8.1 Entering and Removing Numbers

     The [S+] function  key  is  used  to  enter a new number into the
     statistical  registers.    XACT-12C  can  be   used   to  perform
     statistical operations using both  one  and  two variables.  When
     using  one  variable,  that variable is  referred  to  as  the  X
     variable.  With two variable  analysis,  the  second  variable is
     referred to as the Y variable.

     When entering  single variable numbers, enter the number and then
     press the [S+] function  key.    Continue  this process until all
     numbers have been entered.

     With two variables,  first  key  in  the Y variable and press the
     [ENTER] key, then enter the X variable and press the [S+] key.

     When the [S+] function key is used, memory registers 1  through 6
     will  hold  intermediate  values.  You can use the [Rcl] function
     key to view these values, or to use them within  a  program.  The
     values contained in registers 1 through 6 are summarized below:


        R1 contains the value N, the number of data values
           or data pairs) entered thus far.
        R2 contains the sum of the X values.
        R3 contains the sum of the squares of the X values.
        R4 contains the sum of the Y values.
        R5 contains the sum of the squares of the Y values.
        R6 contains the sum of the products of the X values
           and the Y values.

     To  remove an incorrectly entered value, you  can  use  the  [S-]
     function key.  Simply re-enter the incorrect value and then press
     the [S-] function key.



     8.2 Statistical Mean

     Example: Suppose you are a  teacher  with  5  students. Student's
     scores on their  last test were 80, 63, 77, 94, and 79.  Find the
     mean of the test results.



                                   - 31 -
     Keystroke                 Display        Comment
     ================================================================
     [S]                                      Clear statistics
     80 [S+]                    1.00          1st score
     63 [S+]                    2.00          2nd score
     77 [S+]                    3.00          3rd score
     94 [S+]                    4.00          4th score
     79 [S+]                    5.00          5th score
     [xbar]                    78.60          Mean

     The mean of the test scores is 78.6.



     8.3 Statistical Weighted Mean

     Data for  statistical  weighted  mean  calculations  are  entered
     similarly to data for other 2  variable  statistical calculations
     except  that  the  [x  w]  function  key  is  used to compute the
     weighted mean.

     Example:  Find the  average  cost per minute of your monthly long
     distance calls if you were charged for the  following:  3 minutes
     for $0.35 per minute, 13 minutes for $0.70 per minute,  9 minutes
     for $0.56 per minute, and 4 minutes for $0.98 per minute.

     Keystroke                 Display        Comment
     ================================================================
     [S]                                      Clear registers
     .35 [ENTER]                 0.35
     3 [S+]                      1.00         First charge
     .70 [ENTER]                 0.70
     13 [S+]                     2.00         Second charge
     .56 [ENTER]                 0.56
     9 [S+]                      3.00         Third charge
     .98 [ENTER]                 0.98
     4 [S+]                      4.00         Fourth charge
     [x w]                       0.66         Weighted mean

     You paid  an  average  of  66  cents  per minute in long distance
     charges.



     8.4 Standard Deviation

     XACT-12C can be used to  calculate the standard deviation of both
     x and y variables using the [S] function key.

     Example:   Assume  a  set  of  students  test scores for math and
     English tests are as follows:





                                   - 32 -
     Student       Math      English
     ===============================
       1            59         64
       2            66         69
       3            88         82
       4            70         51

     Calculate the standard deviation for the students results.

     Keystroke                 Display        Comment
     ================================================================
     [S]                                      Clear registers
     59 [ENTER] 64 [S+]         1.00          1st student
     66 [ENTER] 69 [S+]         2.00          2nd student
     88 [ENTER] 82 [S+]         3.00          3rd student
     70 [ENTER] 51 [S+]         4.00          4th student
     [S]                        12.82         Math standard deviation
     [x<>y]                     12.37         English std. deviation

     The standard deviation for  the  student's  math scores was 12.82
     and for the English scores was 12.37.



     8.5 Linear Estimate

     Using values entered  for  x  and  y variables, you can compute a
     "best  guess"  for  either variable, given a sample value for the
     other one.

     Example:  Using the above data for student  test  scores, compute
     an estimate for a student's  English score given that the student
     has a math score of 80.  Compute the correlation  coefficient for
     this value.

     Keystroke                 Display        Comment
     ================================================================
     80 [y,r]                   78.87         Math score estimate
     [x<>y]                      0.62         Correlation Coefficient

















                                   - 33 -
     9. Calendar Calculations



     9.1 Days between Dates

     XACT-12C can compute the number of days between 2 dates using the
     [DDays] and future or past date given a number of days  using the
     [Date] function.  These functions  can  be  utilized  in compound
     interest    calculations   as   well  as  bond  price  and  yield
     calculations.

     Example:  Compute  the  number  of  days between July 4, 1987 and
     October 31, 1987.

     Keystroke                 Display        Comment
     ================================================================
     7.041987 [ENTER]           7.04          First date
     10.311987                 10.311987      Second date
     [DDays]                  119.00          Days between dates

     There are 119.00 days between these 2 dates.

     XACT-12C   can   also  perform  date   calculations   using   the
     Day/Month/Year format.  To use  this  format,  press  [d.my]. The
     calculator will display D.MY on the right of the screen to remind
     you that you're using this format.  To  return  to Month/Day/Year
     format, press [M.DY].



     9.2 Date Calculations

     Example:   What  will  the  date be 178 days from now if today is
     July 19, 1988?.

     Keystroke                 Display        Comment
     ================================================================
     [D.MY]                                   Day/Mon/Yr format
     19.071988 [ENTER]          19.07         First date
     178 [Date]                 13,1,1989 5   Future date

     The date  will  be  January  13, 1989.  It will fall on a Friday.
     (The   last  digit  indicates  the  day   of   the   week,   i.e.
     0=Sunday,1=Monday, etc.).

     Example: On what day were you born if your  birthday  was  August
     27, 1958?

     Keystroke                 Display        Comment
     ================================================================
     [M.DY]                                   Mon/Day/Yr format
     8.271958 [ENTER]         8.27
     0 [Date]                 8,27,1958 3     Wednesday


                                   - 34 -
     10. Programming



     10.1 Introduction to Programming

     Programming  XACT-12C  is  a  process  whereby  you  "teach"  the
     calculator a series of keystrokes, similar to the  way  you would
     normally enter the keystrokes if  you  were  computing  a problem
     manually.  In addition,  you  can  have  a program take different
     actions in a program  based  upon  values contained in registers.
     For example, the program could  take a different course of action
     if the value contained in the X register is less-than-or-equal-to
     the value  in  the  Y  register.    This is known as "conditional
     branching".    Programming  also  allows  you  to   repeat  given
     keystroke sequences a certain number of times. This  is  known as
     "looping".

     If  you  are  interested  in  advanced  programming  features  of
     XACT-12C,  we  suggest  you  obtain  a copy of the HP-12C Owner's
     Handbook and Problem   Solving  Guide  and  optionally any of the
     other manuals which were mentioned  earlier in Chapter 1.2.


     10.2 Entering a Program into XACT-12C

     To begin entering a new  program  into  XACT-12C,  the calculator
     must be placed in  Program  mode  by  pressing the [P/R] function
     key.   When in program mode,  subsequent  keystrokes  are  simply
     stored in the calculator's internal memory. The [P/R] key toggles
     between program and run modes.

     Keystroke                 Display        Comment
     ================================================================
     [P/R]                     00-            Program mode
     [P/R]                     (as before)    Run mode.

     When first entering program mode,  the  display  shows  the value
     00-.  This  represents  the current program line  number  of  the
     program you are entering.  Line 00- is special in that  it always
     represents the beginning of program memory.  Let's  enter  a very
     simple program:

     Keystroke                 Display        Comment
     ================================================================
     [P/R]                   00-               Program mode
     [Prgm]                  00-               Clear program memory
     1                       01-        1
     0                       02-        0
     [ENTER]                 03-       36
     4                       04-        4
     [ + ]                   05-       10
     [P/R]                                      Run mode



                                   - 35 -
     The  program simply adds the numbers 10+4  and  finishes.    When
     XACT-12C  is in program mode, the numbers to  the  right  of  the
     program line are a code which represents which  key  was pressed.
     The first digit of the number indicates the row  and  the  second
     indicates the column  of  where  the  key  is  positioned  on the
     XACT-12C screen.   If  you  think  of  all the  keystrokes on the
     calculator face as being in a  table  with 4 rows and 10 columns,
     each key can be identified as being in a certain row  and column.
     For  example the [ENTER] key is located in Row 3, Column 6.  Thus
     in  instruction  line  03-    the display contains the value  36.
     Likewise the [ + ] key is in  row  4,  column  10, so the display
     shows 40.]

     To run the program:

     Keystroke                 Display        Comment
     ================================================================
     [R/S]                     14.00          Program result


     As  a  more  practical example, we  will  write  a  program  that
     converts  a  nominal  interest  rate  into  an  effective  annual
     interest  rate.    To  use  the  program,  enter  the  number  of
     compounding periods per year  in  memory  1, the nominal interest
     rate in memory 2, and run the program by pressing [R/S].

     Keystroke                 Display        Comment
     ================================================================
     [P/R]                                    Switch to program mode
     [Prgm]                   00-             Clear program
     [Fin]                    01-   42  34    Clear fin. registers.
     [Rcl] 2                  02-   45   2    Recall interest rate
     [Rcl] 1                  03-   45   1    Recall compound interval
     [ N ]                    04-       11    Store in N register
     [ / ]                    05-       40    Divide
     [ I ]                    06-       12    Store int. rate per
                                              compounding period
     1                        07-        1
     0                        08-        0
     0                        09-        0
     [Chs]                    10-       16
     [ENTER]                  11-       36
     [PV]                     12-       13    Set PV to -100
     [FV]                     13-       15    Compute FV
     [ + ]                    14-       10
     [P/R]                                    Return to Run mode

     For example, assume you wanted to compute the effective rate of a
     savings account that earned 6 7/8% compounded semi-annually.

     Keystroke                 Display        Comment
     ================================================================
     7 [ENTER]                  7.00
     8 [ / ]                    0.88


                                   - 36 -
     6 [ + ]                    6.88
     [Sto] 2                    6.88          Nominal interest rate
     2 [Sto] 1                  2.00          Compounding interval
     [R/S]                      6.99          Effective Rate is 6.99%



     10.3 Program Loops and Branches

     XACT-12C can make "conditional tests" based upon values contained
     in  the  X  and Y registers.    When  running  a  program,  these
     functions will execute the next instruction in the program if the
     condition is true, and skip over it if the  condition  is  false.
     The instructions are defined as

        [x<=y]      true if x less than or equal to y
        [x=0]       true if x equals 0

     For example, you could execute  a series of instructions within a
     loop using the above conditional tests.  The  example  below adds
     the  numbers  1  through 5 in a loop, stores the result in memory
     register 1 and then finishes.

     Keystroke                 Display        Comment
     ================================================================
     [P/R]                                    Programming mode
     [Prgm]                   00-             Clear program
     0                        01-         0
     [Sto] 1                  02-      44 1   Clear register 1
     5                        03-         5   Start with 5
     [Sto] [ + ] 1            04-   44 40 1   Add to Memory 1
     1                        05-         1   Decrement
     [ - ]                    06-        30
     [x=0]                    07-     43 35   Test for 0
     [R/S]                    08-        31   Done
     [Gto] 04                 08-  43 33 04
     [P/R]

     When the program is run, the resulting answer  will  be contained
     in memory register 1.
















                                   - 37 -
     Appendix



     Error Conditions

     When an error  is  encountered  during  operation,  XACT-12C will
     display the word "Error" in the calculator's display, followed by
     a 1 digit error code.  These error codes are defined below:


     Error  0    -  Invalid math operation.  This error is encountered
     when an operation  attempted  division  by  0, a square root of a
     negative number, or other invalid math operation.

     Error  1    -    Out-of-Bounds Storage register operation.   This
     happens if a storage  register  operation  overflows the range of
     the calculator.

     Error 2  -  Invalid Statistical operation.    This  happens  if a
     statistical operation cannot be performed or is out of range, for
     instance taking the mean of 0 numbers.

     Error  3  -  IRR.   This  error  happens  if  an  IRR  cannot  be
     performed or has ambiguous data.

     Error 4  -  Memory range  overflow.    This  error  occurs  if an
     attempt has been made to access an out-of-range memory location.

     Error 5  -  Invalid interest operation.    This  error  occurs if
     invalid or ambiguous input data  was used to calculate a compound
     interest result, for instance  if  all  cash  flows have the same
     sign.

     Error 6    -    Invalid storage register.  This error occurs if a
     storage register is invalid, or if N or N20 when  calculating NPV
     or IRR.

     Error 7  -  IRR.    The  IRR calculation cannot be performed with
     the given input data.

     Error 8  -  Invalid calendar calculation.  A date is out of range
     or in an ambiguous format.













                                   - 38 -
```
{% endraw %}

## X16SHARE.DOC

{% raw %}
```







                                 Shareware XACT-16C




                           The Hewlett-Packard Compatible

                               Programmer's Calculator

                                    USER'S MANUAL



















                                CalcTech Incorporated

                        13629 Bellevue-Redmond Rd., Suite 202

                                 Bellevue, WA. 98005







                          Sales, 9:00AM-5:00PM Pacific time
                                    206-643-1682

                      Tech Support,Info Line,24 Hour Voice Mail
                                    206-527-9950



                                Description


     This shareware version of XACT-16C is not a demo program!   It is
     a  complete,  full featured Programmer's  Calculator  for  MS-DOS
     computers,  equivalent to  the  Hewlett-Packard  HP-16C  handheld
     calculator.

     Since  it  is  a  shareware  program,  you  may make  copies  and
     distribute them to your friends and co-workers, on bulletin board
     systems, and so on.  However, you may not modify this  program or
     documentation in any  manner,  nor may you distribute the program
     or documentation for profit (handling fees are OK).


                             License Agreement

     THE SOFTWARE HEREIN ARE PROVIDED  "AS IS" WITHOUT WARRANTY OF ANY
     KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
     THE IMPLIED  WARRANTIES  OF  MERCHANTABILITY  AND  FITNESS  FOR A
     PARTICULAR PURPOSE.   THE  ENTIRE  RISK  AS  TO  THE  QUALITY AND
     PERFORMANCE OF THE PROGRAMS IS WITH YOU.

     IN  NO  EVENT  SHALL CALCTECH OR ANY OF IT'S OFFICERS, DIRECTORS,
     SHAREHOLDERS, EMPLOYEES,  AFFILIATES,  OWNERS,  OR  OTHER RELATED
     PARTIES BE LIABLE  TO  YOU  OR  ANY OTHER THIRD PARTY FOR DAMAGES
     INCLUDING ANY  LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR
     CONSEQUENTIAL DAMAGES ARISING OUT OF  THE USE OF OR THE INABILITY
     TO USE THIS PRODUCT OR AS TO THE PERFORMANCE OF THIS PRODUCT EVEN
     IF WE HAVE  BEEN  ADVISED  OF  THE POSSIBILITY OF SUCH DAMAGES IN
     ADVANCE.

     SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY
     FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO  THE  ABOVE LIMITATION
     OR EXCLUSION MAY NOT APPLY TO YOU.

     THIS  AGREEMENT  IS  GOVERNED  BY   THE  LAWS  OF  THE  STATE  OF
     WASHINGTON.



                           Trademarks/Copyrights

     HP-11C, HP-12C, and HP-16C are trademarks of Hewlett-Packard
     PC-DOS, IBM-PC, PC-XT, PC-AT and PS/2 are trademarks of IBM.
     MS-DOS, Microsoft, and Word are trademarks of Microsoft Corp.
     Tornado Notes is a trademark of Micro Logic Corp.
     Hotline is a trademark of General Information, Inc.

     (C)Copyright 1986-1989, 1990 by CalcTech Inc.  Specifications
     herein are subject to change without notice.


                                   - 2 -








                 Registration & Commercial Version Upgrade



     When  you register XACT-16C for only  $28.00  +  $4.00  shipping,
     we'll mail you the COMMERCIAL  VERSION UPGRADE to the program. It
     contains a number of features  not  available  in  this shareware
     version including:


         o  TSR RAM-Resident (Pop-Up) capability
         o  Pop-Up ASCII Table
         o  Mouse Support
         o  Import/Export data from an application
         o  Full programming. Programs may be saved as disk files.
         o  Simulated tape which may be viewed, printed, stamped
            with messages, and saved to disk.
         o  Typeset printed user's manual
         o  Discounts on future upgrades and notice of new products


     Or, you may  wish  to  register  all three XACT calculators:  the
     XACT-11C SCIENTIFIC, XACT-12C FINANCIAL, and XACT-16C PROGRAMMER,
     for only  $48.00 + $4.00 shipping, and receive COMMERCIAL VERSION
     UPGRADES for all three calculators.

     Why not register today?





















                                   - 3 -



               XACT SERIES CALCULATORS - REGISTRATION ORDER FORM


     +------+----------------------------------------+----------+----------+
     | Quan |  Description                           |  Price   |  Total   |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-11C Scientific Calculator        |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-12C Financial Calculator         |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |                                        |          |          |
     |      |  XACT-16C Programmer's Calculator      |  $28.00  |          |
     +======+========================================+==========+==========+
     |      |  SPECIAL OFFER!                        |          |          |
     |      |  All 3  (XACT-11C, XACT-16C, XACT-16C) |  $48.00  |          |
     +======+========================================+==========+==========+
                       |                                        |          |
                       | WA. state residents add 8.1% sales tax |          |
                       +========================================+==========+
                                            |                   |          |
     Mail this form to:                     | Shipping/Handling |  $4.00   |
                                            +===================+==========+
     CalcTech, Inc.                                      Total  |          |
     13629 Bellevue-Redmond Rd. Suite 202               Amount  |          |
     Bellevue, WA.  98005                             Enclosed  +==========+
     (206) 643-1682


     Your Name: ______________________________  Phone: _____________________

     Company (if applicable)________________________________________________

     Address: ______________________________________________________________

     City: ________________________________  State __________ Zip __________




     [ ] Check Enclosed   [ ] VISA         [ ] Mastercard

     Credit card #:____________________________________ Exp. Date: ____/____

     Signature: ____________________________________________________________

     Cardholder's name: ____________________________________________________





                                   - 4 -




          ! ! ! !   P L E A S E    R E A D    T H I S   ! ! ! !


     This  user's  manual  contains  complete  documentation  for  the
     COMMERCIAL  VERSION  of  XACT-16C.  As such, some of the features
     described  within  this  manual will not be  available  with  the
     SHAREWARE VERSION of the program included on this disk.


     We have included documentation for the COMMERCIAL VERSION UPGRADE
     so that should you find benefit from the use  of  these  programs
     and decide to register (and we  hope  you will), you would have a
     good idea of what to  expect from the COMMERCIAL VERSION UPGRADE.
     Please  note  that  this  is  not the actual  commercial  version
     documentation  but rather a disk based  "reprint".    Should  you
     decide to register,  you  will receive a complete typeset printed
     manual of the product(s).


     XACT SERIES  CALCULATORS are shareware, not freeware.  Payment is
     voluntary and on the "honor system".  We ask  that  you  register
     the  product(s) if after a short period of  use,  you  find  them
     useful in your work.  We hope that you appreciate the "try before
     you buy" concept and that you will register.


     Anyone who has ever  purchased  expensive  (or  even inexpensive)
     software can attest to  the  frustration  of  being "burned" by a
     lousy product.  We  think  XACT  SERIES CALCULATORS are excellent
     products  but  we're  giving  you  the opportunity to  judge  for
     yourself.  If you agree, please take a moment to register.





















                                   - 5 -
                             TABLE OF CONTENTS



     Section  Title                                                    Page

     1      Getting Started  ..........................................  8

     1.1         Introduction .........................................  8
     1.2         Other Guides .........................................  8
     1.3         System Requirements ..................................  9
     1.4         Installing XACT-16C and Making Backups ...............  9
     1.5         Command Line Options & Changing Hot Keys .............  9

     2      Loading XACT-16C .......................................... 11

     2.1         XACT-16C Shareware Version ........................... 11
     2.2         XACT-16C as a RAM Resident Program ................... 11
     2.3         XACT-16C as a Removable RAM Resident Program ......... 11
     2.4         XACT-16C as a standalone DOS program ................. 12

     3      XACT-16C Basics ........................................... 13

     3.1         Keyboard Conventions ................................. 13
     3.2         Function Key Usage ................................... 13
     3.3         Prefix Keys .......................................... 13

     4      Features (Commercial Version) ............................. 14

     4.1         Getting Help ......................................... 14
     4.2         Viewing the Tape ..................................... 14
     4.3         Feeding a Result ..................................... 14
     4.4         Stamping the Tape .................................... 14
     4.5         Printing the Tape .................................... 15
     4.6         Storing the Tape ..................................... 15
     4.7         Loading a Program .................................... 15
     4.8         Storing a Program .................................... 15
     4.9         Importing Data from an Application ................... 16
     4.10        ASCII Table .......................................... 16

     5      Using XACT-16C ............................................ 17

     5.1         Prefix Keys .......................................... 17
     5.2         Clearing the Display and Prefix Keys ................. 17
     5.3         Entering Numbers ..................................... 17
     5.4         Short Cut Keys ....................................... 18
     5.5         RPN Logic, the Stack and the ENTER Key ............... 18
     5.6         Stack Operations ..................................... 19
     5.7         Memories and Memory Operations ....................... 19
     5.8         The Index Register and Using Memories Indirectly ..... 20
     5.9         Modes of Operation and Word Size ..................... 20
     5.10        1's Compliment Numbers ............................... 21
     5.11        2's Compliment Numbers ............................... 21



                                   - 6 -
     Section  Title                                                    Page

     5.12        Unsigned Numbers ..................................... 21
     5.13        Word Size ............................................ 21
     5.14        "SHOW" Functions ..................................... 22
     5.15        Display Windows ...................................... 22
     5.16        Flags ................................................ 23
     5.17        Status ............................................... 24

     6      Arithmetic, Bit Manipulation, and Logical Functions ....... 25

     6.1         Addition and Subtraction ............................. 25
     6.2         Multiplication and Division .......................... 25
     6.3         Remainder after Division ............................. 25
     6.4         Square Root .......................................... 26
     6.5         Absolute Value ....................................... 26
     6.6         Logical Functions .................................... 26
     6.7         Bit Functions ........................................ 27
     6.8         Summing Bits ......................................... 28
     6.9         Masking .............................................. 28
     6.10        Left Justify ......................................... 28

     7      Shifting and Rotating Bits ................................ 29

     7.1         Shift Instructions ................................... 29
     7.2         Rotate Instructions .................................. 29

     8      Floating Point Mode ....................................... 30

     8.1         Converting to Floating Point Mode .................... 30
     8.2         Floating Point Calculations .......................... 30
     8.3         Returning to Integer Mode ............................ 31

     9      Programming XACT-16C ...................................... 32

     9.1         Introduction to Programming .......................... 32
     9.2         Entering a Program ................................... 32
     9.3         Labels in Programs ................................... 33
     9.4         Using Subroutines .................................... 34
     9.5         Returning From a Program or Subroutine ............... 34
     9.6         Entering Data and the Run/Stop Key ................... 34
     9.7         Branching Using the Index Register ................... 35
     9.8         Program Loops Using the Index Register ............... 35
     9.9         Program Loops and Branches Using the X and Y Registers 36
     9.10        Branching Using Flags ................................ 36
     9.11        Branching On Bit Set/Clear ........................... 37
     9.12        The Single-Step Instruction .......................... 37
     9.13        Moving to a Program Line Number ...................... 38

     10     Appendix .................................................. 38

     10.1        Error Conditions ..................................... 38




                                   - 7 -
     1 Getting Started



     1.1 Introduction

     XACT-16C is a software emulation  of  the  famous Hewlett-Packard
     HP-16C.  If you are familiar with the HP-16C, you will  find that
     you  already  know how to use XACT-16C.    If  not,  you'll  find
     XACT-16C easy to  learn  and  use.   It will become an invaluable
     tool in your work.

     XACT-16C  is a RAM resident program  (Commercial  Version).    It
     remains loaded in your computer's memory ready to "pop-up" at the
     activation of a "hot key", even if you're running another program
     at  the  time.   XACT-16C can also be run as  a  stand-alone  DOS
     program, if desired.

     If you are already familiar with DOS and with the HP-16C, you may
     only need to read Chapters 2 and 3.    This  will  provide enough
     information to get you started.

     If you are new to DOS and/or the HP-16C, you may wish to read, or
     at least skim, Chapters 1 through 6.

     NOTE:

     A number of  the  function  keys  on  the  XACT-16C  use graphics
     characters to represent them.  Because this  disk-based shareware
     documentation is printed  in  ASCII text mode, some function keys
     cannot be accurately shown in this file.  We've tried our best to
     emulate the look of the graphics  symbols  and to make it easy to
     infer  which  functions  are  intended  from the context  of  the
     Documentation.



     1.2 Other Guides

     There are a number  of  guides  and  references available for the
     HP-16C  that  can  be  used  with  XACT-16C  as  well.  These are
     generally available in bookstores and other places where Hewlett-
     Packard calculators are sold.   Some  of  these  publications are
     listed below

     "HP-16C  Owner's  Handbook  and  Problem  Solving  Guide"  Covers
     general  operations, functions, applications, and programming  of
     the HP-16C.  Published by the Hewlett-Packard Company.

     "An Easy Course in using the HP-16C" by Ed  Keefe.  Published  by
     Grapevine Publishing, Inc. P.O. Box 118, Corvallis, OR, 97339.





                                   - 8 -
     1.3 System Requirements

     To operate the XACT-16C calculator, you will need an IBM  PC, PC-
     XT, PC-AT, PS/2, or close compatible equipped with  at  least the
     following:

        256K RAM
        One floppy disk drive
        PC-DOS or MS-DOS version 2.00 or later



     1.4 Installing XACT-16C and Making Backups

     You should make a copy of the programs contained on  the XACT-16C
     diskette for backup purposes. Use  the DOS "copy" command to copy
     all the files to another diskette or to your hard disk. There may
     be  a  file  named README.DOC on your disk.  If  so,  you  should
     examine it using your word processor or the  DOS  "type" command.
     You may wish to  install  XACT-16C  in  your AUTOEXEC.BAT file so
     that  it's  automatically  ready each time you power up or reboot
     your computer.  If you  are unfamiliar with an AUTOEXEC.BAT file,
     see your DOS manual.



     1.5 Command Line Options/Changing Hot-Keys (Commercial Version)

     A command line option  is  an  additional  command typed when you
     first  load  XACT-16C.    There  are  several  of  these  options
     available.   For example, if you wish to  save  memory  space  by
     running  XACT-16C in non RAM-Resident mode,  you  would  use  the
     nopop command line option, i.e.:

         x16  /nopop  [ENTER]

     ([ENTER] means press  the  ENTER  key).   You can also change the
     invocation "hot-key" using a command line  option.  Valid hot-key
     definitions are Alt-Shift-P (default), Alt-P, and Alt-Ctrl-P. For
     example, to change the  invocation  "hot-key"  from  it's default
     setting of Alt-Shift-P to Alt-P,  and  also  change  the tapefile
     name to test.txt in the \bin directory:

         x16  /alt-p   /tapefile=\bin\test.txt












                                   - 9 -
     The  following  is  a  list  of available command  line  options:
     (Commercial Version only)

        /nopop        Run XACT-16C in non RAM Resident mode.
        /mono         Force XACT-16C into monochrome mode.
        /wsize=       Set the machine word size on startup.
        /radix=       Set radix on startup.  Radix types are
                      h,d,o,b, or f. (Hex,dec,oct,bin,float).
        /tapefile=    Name of file used to save the tape.
        /alt-p        Change the invocation key to Alt-P.
        /alt-ctrl-p   Change the invocation key to Alt-Ctrl-P.
        /nomouse      Disable mouse operation.












































                                   - 10 -
     2 Loading XACT-16C



     2.1 XACT-16C shareware version

     To load the Shareware XACT-16C, at the DOS prompt type:

         x16share [ENTER]



     2.2 XACT-16C as a RAM Resident program    (Commercial Version)

     To load XACT-16C, at the DOS prompt type:

         x16 [ENTER]

     You will see  the  copyright  message  appear on the screen.  The
     computer  will then return to the DOS prompt  and  appear  as  if
     nothing had happened.    However, the XACT-16C calculator has now
     been loaded into your computer's memory and is ready to pop-up at
     the activation of the hot key.  To activate XACT-16C, press:

         Alt-Shift-P

     XACT-16C  will  now  appear  on  your  screen,  ready to  perform
     calculations.  To exit from XACT-16C, press the Esc key.



     2.3 XACT-16C as a  Removable  RAM-Resident  Program   (Commercial
     Version)

     When XACT-16C is loaded  as  a RAM Resident program as in section
     2.1 above, it remains loaded in your computer's memory until your
     computer is rebooted  or  powered  off.   There is another way to
     install  XACT-16C in such a way that it  may  be  removed  memory
     without rebooting.   To  do  so,  you must use the TSRADD.COM and
     TSRDROP.COM utilities provided.  Using  this  method,  to install
     XACT-16C, you would type at the DOS prompt:

         tsradd x16 [ENTER]
         x16 [ENTER]

     In fact, you may load RAM-Resident programs from other vendors as
     well  using  the  TSRADD.COM utility.  For example, to load other
     vendor's TSR's such as Tornado Notes and Hotline, you would type:

         tsradd tn [ENTER]
         tn [ENTER]
         tsradd hotline [ENTER]
         hotline [ENTER]



                                   - 11 -
     If you aren't running these programs from your current directory,
     be sure to provide  a  complete pathname, or use the PATH command
     provided with DOS.

     To remove your  memory  resident  programs,  use  the TSRDROP.COM
     utility.  It is necessary to drop your TSR's in the reverse order
     that they were added.  When you run TSRDROP.COM, the utility will
     prompt you with  the  next  TSR  to be removed from memory. Press
     ENTER to confirm the drop or Esc to exit the utility.



     2.4 XACT-16C as a Stand Alone Program  (Commercial Version)

     XACT-16C defaults to being a RAM Resident program,  but  can also
     be run as a stand-alone DOS program.  To run XACT-16C as a stand-
     alone program, type:

        x16 /nopop  [ENTER]





































                                   - 12 -
     3 XACT-16C Basics



     3.1 Keyboard Conventions

     Throughout this manual, XACT-16C function keys are denoted within
     a box.  For example, the  function  key  for a left shift (SL) is
     shown as [SL].    In  the  case  of function keys which require a
     prefix key (discussed in the next section), the prefix key is not
     given in this manual since it can easily be determined.

     Keys on the PC keyboard are listed in this  manual  using  single
     quotes  such as 'a'.  Numbers to be  entered  into  XACT-16C  are
     shown  in normal type, except for the hex  numbers  A  through  F
     which are shown as function keys.



     3.2 Function Key Usage

     XACT-16C has approximately 70 different function keys arranged in
     the same ordering as  on  the HP-16C.  Function keys are arranged
     in  groups of up to 3 functions per key; an upper, a lower and  a
     middle  function  all  correspond to one function key.  The upper
     and  lower  functions  are invoked by first pressing a prefix key
     (discussed in the next  section)  and then the function key.  The
     middle function does not require the use of a prefix key.  The PC
     keystroke corresponding to function key is  shown  immediately to
     the left of the function box.

     The  first  row  of function keys use the PC keys F1 through F10.
     The second through  fourth  rows use the alphabetic characters as
     arranged left to right on your PC keyboard.

     For example,  the XACT-16C's [Sto] (store) function key is mapped
     to the letter  'v'  on  the  PC  keyboard.    Likewise, the [ A ]
     function key is invoked by pressing F1.


     3.3 Prefix Keys

     The left and the right shift  keys  on the PC keyboard operate as
     prefix keys, functionally equivalent to the gold [ f  ]  and  the
     blue  [ g ] keys on the HP-16C.  They let you activate the  upper
     and lower sets of functions assigned to a function key.  The left
     shift key on the PC is used as a prefix key to activate the upper
     set of functions.  The right shift key is used as a prefix key to
     activate the lower set of functions.  For example, to  invoke the
     [SR]  function,  you  would press and release the left shift key,
     then press  F2.    To  invoke  the  [ASR] function, you press and
     release the right shift key, then F2.  Likewise,  to  invoke  the
     [sqrtx] function, you would press  and  release  the  right shift
     key, then press 't'.


                                   - 13 -
     4. Features  (Commercial version only)



     4.1 Getting Help

     A Help menu is available when you are working with XACT-16C.   To
     obtain help press:

         Alt-F1

     An information screen will appear in a window.  The help menu can
     be removed by pressing F1 again.



     4.2 Viewing the Tape

     XACT-16C provides a  simulated  tape display which keeps a record
     of your  calculations  as  you  perform  them.   To view the tape
     press:

         Alt-F2

     The tape will appear in a window.  To remove  the  tape, press F2
     again.



     4.3 Feeding a Result

     To  feed  the  result  of  a calculation into the program  you're
     running press:

         Alt-F3

     The calculator will disappear and  the number in the display will
     be fed to your application.



     4.4 Stamping the Tape

     To stamp a message on the simulated tape press:

         Alt-F4

     The message will appear on the tape as  well  as  the  printer or
     tape disk file if either of these options are being used.







                                   - 14 -
     4.5 Printing the Tape

     To print the tape as you make calculations press:

         Alt-F5

     To turn off printing, press F5 again.



     4.6 Storing the Tape

     The simulated tape may be  saved  to  a  disk  file  as  you make
     calculations.   Each  time  you  use  XACT-16C,  calculations are
     appended to the tape file.  To store the tape, press

         Alt-F6

     The  tape will be saved under the name  X16.TAP  in  the  current
     directory.  If you change directories, a different tape file with
     the same name  will be used.  If you wish to use a different name
     for   your   tape   file,   use   the    command    line   option
     /tapefile=filename where filename is any valid DOS filename which
     can include a path (see section 1.6).



     4.7 Loading a Program

     To load a program previously saved press:

         Alt-F7

     A window  will  appear  requesting  a  file  name.  Enter the DOS
     filename of the program you wish to retrieve.



     4.8 Storing a Program

     XACT-16C  allows  you  to save programs as disk files.  To save a
     program on disk, press:

         Alt-F8

     A window will appear  prompting  you for comments.  You can enter
     up to 3 lines of comments, associated with the  program  you  are
     saving.  Press the  Esc  key after you have entered any comments.
     Another window will appear prompting you for a  filename.   Enter
     any valid DOS filename.






                                   - 15 -
     4.9 Importing Data from an Application

     You can "import" data from the screen of the previous program you
     were running before  popping-up  XACT-16C.  For instance, you may
     be working with a spreadsheet or word-processing program and wish
     to  add  a  series of numbers from the display screen.  To import
     data, press:

         Alt-F9

     You will see the screen you were working  with  before popping-up
     XACT-16C.    However,  you  have  not returned to  your  previous
     program.  Use the up, down, left, or right arrow keys to move the
     cursor to a number on the screen you wish to import.  Then, press
     F9 again to import the number into XACT-16C.  It will appear just
     as  if  you  had typed it in by hand.  If you now press F9 again,
     you'll see the cursor will have moved down a row. This is to help
     facilitate the importing of  a  "column" of numbers.  If you wish
     to accept the  data  where  the  cursor rests, again press F9. If
     not, use the arrow keys to move to the desired location.

     It isn't possible to import data  from  a screen if the screen is
     in graphics  mode.    In  this  case,  XACT-11C will sound a beep
     indicating  that it can't import a number.    One  commonly  used
     program which utilizes graphics mode is Microsoft Word.    If you
     use  Word, you should use text mode.   Pressing  Alt-F9  in  Word
     allows you to switch between graphics and text modes.



     4.10 ASCII Table

     An ASCII table will appear in a window over XACT-16C by pressing

         Alt-F10

     Press the PgUp or PgDn keys  to  move through the ASCII table, or
     press  Esc to remove the ASCII table.


















                                   - 16 -
     5. USING XACT-16C



     5.1 Prefix Keys

     The left and the right shift  keys  on the PC keyboard operate as
     prefix keys, functionally equivalent to the gold [ f  ]  and  the
     blue  [ g ] keys on the HP-16C.  They let you activate the  upper
     and  lower sets of functions assigned to each PC  key.   The left
     shift key on the PC is used as a prefix key to activate the upper
     set of functions.  Likewise, the right shift  key  is  used  as a
     prefix key to activate the lower set of functions.    The  prefix
     keys are "sticky", that is, you press a prefix key and it remains
     set, even after you release the key.  When you press  and release
     a prefix key,  the  corresponding set of prefixes will highlight,
     indicating which prefix was set.  To clear a prefix key,  use the
     [PRFX] function.

     For example, to activate the [HEX] function, press the letter 'e'
     on the PC keyboard.  On the other hand, the [DSZ] function key is
     mapped  to  the  same PC key as the [Hex] function but requires a
     prefix key.  To invoke the [DSZ] function, press and  release the
     right  shift  key,  (the  lower  prefix key), and then press  the
     letter 'e'.

     The prefix keys can also be invoked using the function keys [ f ]
     and [ g ].



     5.2 Clearing the Display and Prefix Keys

     To  clear  a number in the display,  press  the  [CLx]  (Clear  X
     Register) key.  The display will now contain the value 0.   While
     entering a number, you may clear the last digit entered  with the
     [BKSP] key.  For example, if  you  meant to enter the number 1234
     and mistakenly entered 1235,  press  [BKSP]  and  then press 4 to
     correct  the  number.   To clear a prefix key, i.e., the lower or
     the upper prefix, press the [PREFIX] key.  To  clear  all  memory
     storage registers, press  [REG].   This key doesn't affect values
     stored in the stack or the LastX register.



     5.3 Entering Numbers

     Numbers  are  entered  into XACT-16C by using the numeric keys or
     the  numeric keypad for the numbers 0 through  9,  and  the  keys
     mapped to the hex numbers A  through  F  on the PC keyboard.  The
     decimal point key is only  operational in floating point mode and
     is mapped to  the  '.'  key  on  the numeric keypad.  Notice that
     XACT-16C  will  not  accept  certain  numbers  in   integer  mode
     depending on the radix value being used.   If  the  radix  is Bin


                                   - 17 -
     (Binary), XACT-16C will only accept the numeric digits  0  and 1,
     all others are  ignored.    When  using the Octal radix, only the
     digits  0  through  7 are valid, and so on.  XACT-16C will accept
     only  as  many  entered  digits  as  the  current word  size  and
     complement mode will allow.  For example:

     Keystroke                 Display        Comment
     ================================================================
     [Dec]                                    Set decimal mode
     8 [Wsize]
     [2's]                                    2's comp. 8 bit

     255                       -1 Dec
     [Unsgn]                  255 Dec

     The  number   255  (FF  Hex)  cannot  be  represented  using  2's
     complement  8 bit math. Since the high order bit  (interpreted as
     a sign bit)  is  a 1, the 2's complement of the number is formed.
     When unsigned math  is used, the number is interpreted correctly.
     Notice that if you tried  to enter the number 256 (100 Hex) while
     operating with a word size  of 8 bits, the  last  digit would not
     be accepted since 256 requires  a word size of at least 9 bits to
     be represented.



     5.4 Short Cut Keys

     You can use the Enter key  on  the  PC, (also known as the Return
     key)  as the XACT-16C [ENTER] key as a short cut.  Also, the '+',
     '-', '*', and '/'  keys   adjacent to the numeric keypad function
     as you would expect.



     5.5 RPN Logic, the Stack, and the ENTER key

     You may already  be  familiar with Reverse Polish Notation (RPN).
     RPN  is a type of  calculator  logic that eliminates the need for
     the equals   key  and for parenthesis in calculator computations.
     Instead, operands   are entered into the calculator and separated
     using the [ENTER] key.  For example, to add the numbers 3 and 4:

     Keystroke                 Display        Comment
     ================================================================
     [Dec]                                    Decimal mode
     3 [ENTER]                 3 Dec
     4 [ + ]                   7 Dec          Add

     The result, 7, is now displayed.  To multiply this result by 5:

     Keystroke                 Display        Comment
     ================================================================
     5 [ * ]                   35 Dec


                                   - 18 -
     The way that XACT-16C performs  these calculations with RPN is by
     using a stack.  The stack consists of 4 registers:  X,  Y, Z, and
     T.   It is not generally necessary  to  understand  the  internal
     workings of the stack but for completeness they  will  briefly be
     discussed below.

     Any number displayed is said to be in the X  register.   When the
     [ENTER] key is pressed, a number in the X Register is pushed into
     the Y  Register  and  the  previous  number  in the Y Register is
     pushed  into  the  Z  Register.    The  previous  number in the Z
     register   is pushed into the T Register.  T stands for "Top" and
     represents the top of  the  stack of numbers.  The previous value
     of the T register   is lost.  When a function key such as the [+]
     key  is pressed, the value held in the Y register is added to the
     X register  and  this  result  is  now  stored in the X register.
     Pressing  [ENTER]  does  one  other  thing, it leaves  the  stack
     disabled. This means that a  number entered after the [ENTER] key
     has  been pressed is not pushed on the stack, it remains in the X
     register.  Most operations enable the stack so that  when  a  new
     number  is  entered,  the previous contents of the X register are
     pushed into the Y register.  The most notable exceptions  to this
     rule are the [ENTER] and the [Clx] function keys.



     5.6 Stack Operations

     Roll Up - The [R|] function rolls up the stack.    The X register
     is copied  into the Y  register.    The Y register is copied into
     the  Z  register,   and the Z  register  is  copied  into  the  T
     register.  The T register is "rolled around" into the X register.

     Roll Down - The [R|]  function  rolls  down  the  stack.    The T
     register  is  copied   into the Z register.  The  Z  register  is
     copied  into  the  Y register,  and the Y register is copied into
     the  X  register.  The X register  is rolled around  into  the  T
     register.

     X exchange Y - The [x<>y] function exchanges the contents  of the
     X and Y registers.

     Last X register - The [LSTx] register holds the previous contents
     of the X register before an operation was performed.   The [LSTx]
     register  is  used  to restore the number entered if an incorrect
     function key is mistakenly pressed.





     5.7 Memories and Memory Operations

     XACT-16C  has  16  memories that can  be  used  for  storing  and
     recalling  numbers.    These memories are called memory registers


                                   - 19 -
     and  are  referred   to as registers R0 through R9 and RA through
     RF. To store  a  number  in a memory, press [Sto] n, where n is a
     number 0 through 9 (using the numeric keypad)  or hex  number [A]
     through [F].

     For example:

     Keystroke                 Display        Comment
     ================================================================
     32 [Sto] [ A ]            32 Dec         32 in register RA
     14 [Sto] 2                14 Dec         14 in register R2
     [Rcl] [ A ]               32 Dec         Recall reg. RA
     [Rcl] 2 [ + ]             46 Dec         Add to reg. R2


     Notice in the preceding example that  the  [  A ] key is a mapped
     XACT-16C  key,  not  the letter 'A' on the  PC  keyboard  (it  is
     invoked by pressing the F1 key on the PC keyboard.



     5.8 The Index Register and Using Memories Indirectly

     Memories  can  also  be  accessed  indirectly  using   the  Index
     register.    The    index  register  is  accessed with the [ I  ]
     function key.    A  number  may  be  stored in the index register
     using  [Sto] [ I ] and recalled from  the  index  register  using
     [Rcl] [ I ].  Also, the [x<>I] function key  is  used to exchange
     the X register with the Index Register in the same fashion as the
     [x<>y] function key is used to exchange the X  and  Y  registers.
     For the examples below, assume STATUS= 2-16-0000.

     Keystroke                 Display        Comment
     ================================================================
     5 [Sto] [ I ]             5 Dec          Register I= 5
     20 [Sto] [(i)]           20 Dec          Register 5= 20
     [CLx]                     0 Dec          Clear X reg
     [Rcl] 5                  20 Dec          Reg 5= 20


     In the above example, the  Indirect Index Register [(i)] was used
     to store a number indirectly.  The memory register   accessed was
     determined by the contents  of  the  [I]  register.  Memories can
     also be recalled indirectly using  the operation [Rcl] [(i)], and
     exchanged  with  the  X  register  indirectly  using  the  [x(i)]
     function.



     5.9 Modes of Operation and Word Size

     XACT-16C operates in 2 modes, integer and floating point. Integer
     mode  is  active  when  any  of  the  following radix  conversion
     function  keys are pressed: [HEX], [DEC], [OCT], [BIN]


                                   - 20 -
     These keys allow numbers in integer mode to be displayed  in hex,
     decimal, octal  and binary respectively.  In addition, numbers in
     integer mode may be  interpreted  as  unsigned  values, or as 1's
     complement or 2's complement numbers using word sizes  from  2 to
     64 bits.



     5.10 1's Complement Numbers

     To use 1's complement  arithmetic,  press  [1's]. All numbers and
     operations entered while in integer  mode  will be interpreted as
     1's complement numbers.  Pressing  the  [ChS]  function  key will
     display the 1's complement of a number  in the display.



     5.11 2's Complement Numbers

     Pressing [2's] will activate 2's  complement  arithmetic  when in
     integer mode.  All operations subsequently performed will be done
     using  2's complement arithmetic.  2's  complement  mode  is  the
     default mode when XACT-16C is first loaded.



     5.12 Unsigned Numbers

     Pressing  [Unsgn]  will  activate  unsigned  arithmetic  when  in
     integer mode.   All  arithmetic  operations  will  be interpreted
     using unsigned math.   When  the [ChS] key is pressed, the result
     has  no  meaning.   However, the  2's complement of the number is
     displayed along with the Overflow flag, shown as  the  letter 'G'
     to the right of the number.



     5.13 Word Size

     In decimal mode, XACT-16C can operate using any word size  from 2
     to  64  bits.   To set the word size, enter a number from 2 to 64
     and  press [Wsize].  Notice that if you're  using  a  small  word
     size,  say 4 bits, you won't be able to enter the number into the
     calculator larger than +3 (if  you're  in  2's  complement mode).
     Thus, you won't be able  to increase the word size to say 16 bits
     without first resetting the word size to 64 bits.


     To reset the word size to  64  bits,  press 0 [Wsize].  This will
     allow    you  to then set a word size of  say  16  bits  if,  for
     example,  you  were   previously using a 4 bit word size and thus
     couldn't enter the number 16 to set a 16 bit word size.




                                   - 21 -
     Changing  word  size  will affect numbers held  in  the  XACT-16C
     registers.  For example:

     Keystroke                 Display        Comment
     ================================================================
     [Dec]
     16 [Wsize]                               16 bit word size
     [2's] [Hex]                              2's compl, hex
     4E20 [ENTER]              4E20 Hex
     8 [Wsize]                   20 Hex       8 bits word size


     Notice when the  display  was  set  to  8 bits, the number in the
     display was truncated to 8 bits.



     5.14 "SHOW" Functions

     XACT-16C will display a  number  in a different radix for about 2
     seconds,  then revert  back  to  the  current radix, whenever the
     [Show]  function  key,  immediately  above  that  radix  key,  is
     pressed.   For instance, say you have  pressed  [Bin]  to  select
     binary as your default radix.  You may view a  number temporarily
     in hex by pressing the [Show] key immediately above the [Hex] key
     (press the left shift key, then press the letter 'e').



     5.15 Display Windows

     In  decimal  mode,  XACT-16C  can  show  up  to  8 digits on it's
     display.  Since XACT-16C is capable of word sizes up to  64 bits,
     in  some cases, not all the digits can be shown on the display at
     a time.  For example:

     Keystroke                 Display        Comment
     ================================================================
     [Hex]
     10 [Wsize]                               16 bit word
     7B2 [Bin]            <- 10110010 Bin     More digits left
     [Wndo] 1                111 ->   Bin     Leftmost 8 bits.
     [Wndo] 0             <- 10110010 Bin     Reset window


     The number 7B2 Hex (11110110010 Bin) cannot be displayed within 8
     digits.  Only the lower order 8 bits are displayed.  The [Wndo] 1
     key sequence sets the display window to the next higher   order 8
     bits, bits 7 through 15.  Likewise, [Wndo]  2  would  be  used to
     display bits 8 through 23 and  so  on.   In  the current example,
     the number 7B2 is an 11 bit number. Setting [Wndo] 2 would show a
     blank display.




                                   - 22 -
     Windows  may  also  be "scrolled" one digit at a time.  To scroll
     the   window  one  digit  to the right press [>>].  To scroll the
     digit to the left, press [<<]. Window scrolling is reset  back to
     window 0 whenever an  operation key affecting the value displayed
     is pressed.



     5.16 Flags

     XACT-16C  incorporates 6 built in "flags" which  may  be  set  or
     cleared  under either program control, or as  the  result  of  an
     operation, or both.  The flags  are  numbered 0 through 5.  Flags
     are active in integer mode.

     The first 3  flags,  0  through  2, are used in programming only.
     These flags can be  set,  cleared,  and  tested within a program.
     These  flags  are  discussed  in  detail  in  the  section  under
     Programming.

     Flag 3 is used to control the display of leading zeros in integer
     mode.  When  set,  a  number  in  the display will be padded with
     leading zeros (leading zeros will not be displayed when the [Dec]
     radix is used).  To set flag3:

     Keystroke                 Display        Comment
     ================================================================
     [Hex]
     10 [Wsize]                               16 bit word, hex
     3A [ENTER]                3A Hex
     [SF] 3                  003A Hex         Set flag 3
     [CF] 3                    3A Hex         Clear flag 3


     Flag 4 is  also  known as the Carry (C) flag.  It is set when the
     result of an  algebraic  or bit manipulation function generates a
     carry.    When  performing a subtraction, a  carry  is  generated
     whenever there is a borrow in the most significant bit.

     Keystroke                 Display        Comment
     ================================================================
     [Hex]
     10 [Wsize] [2's]
     FF80 [ENTER]              FF80 Hex       (-128 Decimal)
     100  [ + ]                  80 Hex C     Carry generated
     1 [ + ]                     81 Hex       No carry


     Flag 5 is  also  known as the Overflow (G) flag.  It is set by an
     arithmetic operation which  would  result in a value which cannot
     be shown with the current word size and/or complement mode.  When
     Flag 5 is set, the letter 'G' appears in the  display, indicating
     an overflow.  For example:



                                   - 23 -
     Keystroke                 Display        Comment
     ================================================================
     [Dec]
     16 [Wsize] [2's]
     32767 [ENTER]             32767 Dec
     16384 [ + ]              -16385 Dec G


     In the above example, the result created an overflow and  the 'G'
     flag (overflow) was displayed.



     5.17 Status

     Pressing the [Stat] function key temporarily  alters  the display
     to show the  current  complement  mode,  word  size  and  flags 0
     through 3. When [Stat] is pressed, the display appears similar to
     the following:

               2-16-0000

     The value above indicates 2's  complement mode, 16 bit word size,
     and flags 3,2,1,0 are all cleared.

     The first number, shown before the dash, indicates the complement
     mode.   It is either 0, 1, or 2, for unsigned, 1's complement, or
     2's   complement respectively.  The  next  number  indicates  the
     current word  size in bits.  It may range from 1 to 64.  The last
     4  digits indicate  the status of flags 3,2,1,0 in that order.  A
     value of 1 indicates  the flag is set, 0 indicates it is cleared.

























                                   - 24 -
     6. Arithmetic, Bit Manipulation, and Logical Functions



     6.1 Addition and Subtraction

     XACT-16C can perform the operations of  addition  and subtraction
     using  decimal,  hex,  binary,  and  octal radix types as well as
     floating point mode.  For example, to add the  numbers  3c0  hex,
     and 126 octal, and  then  subtract  35 decimal, (assuming STATUS=
     2-16-0000):

     Keystroke                 Display        Comment
     ================================================================
     [Hex]
     3C0 [ENTER]               3C0 Hex
     [Oct]                    1700 Oct
     126 [ + ]                2026 Oct
     [Dec]                    1046 Dec
     35 [ - ]                 1011 Dec


     The  result  is  1011 (decimal).  The carry flag will be set when
     the  addition  of  2  numbers  generates  a carry out of the most
     significant bit, or when the subtraction of 2 numbers generates a
     borrow from the most significant bit.



     6.2 Multiplication and Division

     Multiplication and division operations can  be  performed  in any
     available  radix.    Results of these operations may set or clear
     flag  4 (carry) and flag 5 (overflow) just  as  in  addition  and
     subtraction (except that multiplication does not affect  flag 4).
     In a division operation, only the integer portion  of  the result
     is returned, the decimal point part is truncated.  Flag 4 (carry)
     will  be  set  if the result  of  the  division  has  a  non-zero
     remainder.

     Keystroke                 Display        Comment
     ================================================================
     [Dec]
     12 [ENTER]                12 Dec         12 in X register
     4 [ * ]                   48 Dec         Multiply 12 * 4
     5 [ / ]                    9 Dec C       C Indicates remainder



     6.3 Remainder after Division

     To compute the remainder after division, (also known  as  the mod
     function), use the [RMD] function key.  The [RMD] key  will yield
     the result of the Y register mod the X register  with the sign of


                                   - 25 -
     the result set  to  be the same as the sign of X.  In the example
     below, assume STATUS= 2-16-0000.

     Keystroke                 Display        Comment
     ================================================================
     [Dec]
     52 [ENTER]                52 Dec         52 in Y register
     7 [RMD]                    3 Dec         Remainder



     6.4 Square Root

     The  [sqrtx]  function  can be used in either decimal or floating
     point mode.  In  decimal  mode, the fractional part of the result
     is truncated just as it is in division.  Likewise, flag 4 (carry)
     will be set if the fractional part of  the  square  root  is non-
     zero.  Assuming STATUS=  2-16-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Dec]
     26 [sqrtx]                5 Dec C


     The carry flag indicates that a fractional part exists.



     6.5 Absolute Value

     This function will take the absolute  value  of a number in the X
     register  when the [Abs] key is pressed.  In unsigned  mode, this
     function has no effect.  Otherwise, a negative  number  will form
     the 1's or 2's complement of the number.



     6.6 Logical Functions

     The  [AND]  function  logically  and's together the corresponding
     bits in the X and Y registers  and  forms  the  result  in  the X
     register.  A particular bit of the result is set to 1 only if the
     corresponding  bits  in  both the X and Y registers was set to 1.
     For example (assume  STATUS= 2-16-0000):

     Keystroke                 Display        Comment
     ================================================================
     [Bin]
     1010 [ENTER]              1010 Bin
     11 [AND]                    10 Bin       Result of "and"





                                   - 26 -
     The [OR] function forms a result by or'ing together corresponding
     bits in the  X  and Y registers.  A bit in the result will be set
     to   1 if a corresponding bit in either the X or the Y  registers
     is set  to 1.  In the example below, assume STATUS= 2-16-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Bin]
     1001 [ENTER]              1001 Bin
     11 [OR]                   1011 Bin       Result of OR


     With the [XOR] (Exclusive OR) function, a bit in  the  result  is
     set to 1 if either a corresponding bit in the X register or the Y
     register,  but  not  both, is set to 1.  In  the  example  below,
     assume STATUS= 2-16-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Bin]
     1001 [ENTER]              1001 Bin
     11 [XOR]                  1010 Bin       Result of XOR


     The [Not] function complements all the bits of the value in the X
     register.    This  is equivalent to forming the 1's complement of
     the  number.  In the example below, assume  STATUS= 2-16-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Hex] 9                   9 Hex
     [Not]                  FFF6 Hex          Result of NOT



     6.7 Bit Functions

     A specific bit can be set (1) or cleared (0) within a number.  To
     set a bit, the [SB] function key is used.   The  [CB] function is
     used to clear a bit.  A bit can also be tested   to  see  if it's
     set or cleared  with  the    [B?]  function.  (See the section on
     Programming for more information  on testing bits).  When setting
     or clearing a bit, the number in which the bit is to be set, must
     be in the Y register and the bit number in the  X  register.   In
     the example below, assume STATUS= 2-16-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Bin]
     10000 [ENTER]             100000 Bin     100000 in Y register
     10 [SB]                    10100 Bin     Set bit 2


     To clear a bit in a number:


                                   - 27 -
     Keystroke                 Display        Comment
     ================================================================
     [Hex]
     FFFF [ENTER]              FFFF Hex       FFFF in Y register
     4 [CB]                    FFEF Hex       Clear bit 4


     6.8 Summing Bits

     The number of bits in a word  can  be  found  by  using  the [#B]
     function.  This function takes a number in the  X  register,  and
     returns the number of '1' bits, also in the X  register.   In the
     example below, assume STATUS= 2-16-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Bin] 1101                1101 Bin
     [#B]                        11 Bin
     [DEC]                        3 Dec       3 bits were set


     6.9 Masking

     The mask functions form a mask of '1' bits in the X register. The
     number of '1' bits is set to the value in  the  X register before
     the  mask  function key was pressed.  A mask can be made as large
     as the  current word size.  The [MaskR] function  right justifies
     the mask and the [MaskL] function left justifies the  mask.    In
     the example below, assume STATUS= 2-16-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Bin]
     100 [MaskR]               1111 Bin       Mask right
     [Hex]                        F Hex
     2 [MaskL]                 C000 Hex       Mask left


     6.10 Left Justify

     A word in  the  X  register  can be left-justified using the [LJ]
     function key.   This  operation returns the left justified number
     in the Y register.  The X register  contains  the  number  of '0'
     bits preceding the first '1' bit in the number before  being left
     justified.  In the example below, assume STATUS= 2-08-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Bin]
     111 [LJ]                  101 Bin        5 leading zeros
     [R|]                 11100000 Bin        Roll Down stack


     Rolling down the stack shows the left justified number.


                                   - 28 -
     7. Shifting and Rotating Bits


     7.1 Shift Functions

     XACT-16C can  perform shift operations on numbers when in integer
     mode.  Shifts  can  be  either  logical or arithmetic.  A logical
     shift simply shifts bits left or right, bringing in  a  zero  bit
     from  the end.  An arithmetic shift is  similar  except  that  it
     preserves the sign bit  when  shifting.  Both types of shifts can
     shift into the carry, causing flag 4 (C)  to  be  set  or cleared
     accordingly.  In the examples below, assume STATUS=  2-08-0000:

     Keystroke                 Display        Comment
     ================================================================
     [Bin]
     1001 [SL]                 10010 Bin      Logical shift left
     01000000 [SL]          10000000 Bin      Logical shift left
     [SL]                          0 Bin C    Shift into carry.
     100000000 [ASR]        11000000 Bin      Brings in sign bit


     7.2 Rotate Functions

     Rotate  functions  are  like shift functions except  that  a  bit
     shifted out of  one end of a word is brought back in at the other
     end.  As in shifting, rotations can be either left or right using
     the [RL] or the [RR] functions.  Assume STATUS= 2-08-0000:

     Keystroke                 Display        Comment
     ================================================================
     10000010 [RL]             101 Bin C

     Rotations may also be made "through the carry".   The  [RRC]  and
     the [RLC] functions respectively shift  the low order or the high
     order bit into the carry.  The carry flag (flag 4) will be set if
     the bit rotating into the carry was a '1'.  The previous state of
     the carry flag will be brought back around at the other end.

     Keystroke                 Display        Comment
     ================================================================
     1 [RRC]                   0 Bin C        Rotates to carry
     [RRC]              10000000 Bin          Carry rotates

     Rotate operations may also rotate more than 1 bit at a  time with
     the  [RRn]  [RLn]  [RRCn]  and  [RLCn] functions.  Each of  these
     functions use the value in the  X register as a count of how many
     times to rotate the value in the Y register.    Assuming  STATUS=
     2-08-0000:

     Keystroke                 Display        Comment
     ================================================================
     1000 [ENTER]              1000 Bin
     100 [RLn]             10000000 Bin       Rotate 4 times


                                   - 29 -
     8. Floating Point Mode



     8.1 Converting to Floating Point Mode

     In addition to  integer  mode, XACT-16C also operates in floating
     point mode.    In  this  mode,  XACT-16C  acts much like a second
     "independent"  calculator.    Many  functions  operate  in either
     floating  point mode or integer mode,  for  example  the  [sqrtx]
     function.  However, unlike integer  mode, this function  will not
     truncate a result to an integer result, it will  return  a  value
     with up to 9 significant digits beyond the decimal point.

     To convert XACT-16C to floating point mode:

     Keystroke                 Display        Comment
     ================================================================
     [Float] 2                 0.00           2 dec pt digits


     You may press any number (using  the  numeric keypad) from 0 to 9
     after pressing the  [Float]  key.    The  number  you  press will
     determine  the  number  of  digits  past the decimal point to  be
     displayed.  For example:

     Keystroke                 Display        Comment
     ================================================================
     26 [sqrtx]                5.10           2 dec pt digits
     [Float] 5                 5.09902        5 dec pt digits


     Notice  that  when  using  2  digits  beyond  the decimal  point,
     XACT-16C will "round" the next digit into the number displayed.



     8.2 Floating Point Calculations

     Calculations in floating point mode work in the same  way  as  in
     integer  mode.  However, there are a  number  of  functions  that
     operate only in  integer  mode  and  some  that  operate  only in
     floating  point  mode.    Generally  speaking,  all  of  the  bit
     manipulation,  radix  conversion,  and  logical functions are not
     available in floating point mode.











                                   - 30 -
     The reciprocal function [1/x] and the exponent function [EEx] are
     only available in floating point mode.  To  illustrate  them, for
     example:

     Keystroke                 Display        Comment
     ================================================================
     [Float] 4                                4 dec pt digits
     12 [EEx] 3                12.  +03
     [ChS]                     12.  -03
     [ENTER]                    0.0120
     .001 [ - ]                 0.0110        Subtract
     [1/x]                     90.9091        Reciprocal



     8.3 Returning to Integer Mode

     To return to integer  mode,  press  any  of the following: [Hex],
     [Dec],  [Oct]  or [Bin].  You may  notice  that  the  same  value
     appears in the display as  before you converted to floating point
     mode.  In  fact,  all  the  memory  registers,  stack,  etc., are
     retained.


































                                   - 31 -
     9. Programming XACT-16C

     9.1 Introduction to Programming

     XACT-16C may  be  programmed  to  "memorize"  keystrokes  for the
     purpose  of executing a program.  Programs may use  constructs of
     conventional   programming languages such as branching,  looping,
     data input and output,  etc.  The basics of  programming XACT-16C
     involve entering, editing,  debugging and finally  executing your
     program.



     9.2 Entering a Program

     To begin entering a new  program  into  XACT-16C,  the calculator
     must be placed in  program  mode  by  pressing the [P/R] function
     key.   When in program mode,  subsequent  keystrokes  are  simply
     stored in the calculator's internal memory. The [P/R] key toggles
     between program and run modes.

     Keystroke                 Display        Comment
     ================================================================
     [P/R]                     000-           Program mode
     [P/R]                     (as before)    Run mode


     The display shows 000-.  This represents the current program line
     number of the program you are  entering.   Line 000 is special in
     that    it  always represents the beginning  of  program  memory.
     Let's enter  a simple program:

     Keystroke                 Display        Comment
     ================================================================
     [P/R]
     [Prgm]                   000-            Clear pgm
     [Lbl] [ A ]              001- 43 22 A    Start pgm
     [Hex]                    002-      23
     3                        003-       3
     [ENTER]                  004-      36
     4                        005-       4
     [ + ]                    006-      10
     [RTN]                    007-   43 21    Last pgm line
     [P/R]                                    Run mode


     This program simply adds the numbers 3 and 4 then finishes.   The
     first keystroke, [P/R] puts XACT-16C in program mode.  The [Prgm]
     key clears any  programs  previously in memory. Skipping over the
     [Lbl] instruction for the  moment,  the  [Hex]  key is the second
     program line in  the  program.    In the  display, 002- indicates
     program  line  2  (there  are  a  maximum  of  203  program lines
     available).  Just  to  the  right  of  the program line is a code
     which  represents  which  key was pressed. The first digit of the


                                   - 32 -
     number indicates the row and the second indicates  the  column of
     where the key is positioned on the XACT-16C screen.  If you think
     of all the keystrokes on the calculator face as being in  a table
     with 4 rows and 10 columns, the [Hex] function key is  located in
     the 2nd row and  3rd  column, thus the program line displays 002-
     23.    Back  to the first line of the program,  it  contains  the
     keystrokes [Lbl] [  A ] to refer to that line as a label.  Labels
     are used in XACT-16C in much the same way as they are in assembly
     language or Basic programming.  Labels can be  locations  used to
     identify  the  start  of  a  program,  the  location  of  a  goto
     instruction,  or  the  location  to  call in a  subroutine  call.
     Programs  must  begin  with a label to identify where the program
     starts.  The program line  for our label reads 001-  43 22 A.  In
     this case, since the [Lbl] key requires a prefix, the position of
     the  prefix  key  is the first value shown to the  right  of  the
     program line number.  The number 43 indicates row  4,  column  3,
     which is the position of the [ g ] (or right shift) prefix key.

     The  last value displayed on program line 2  is  the  value  'A'.
     Notice that it is not referred  to by a  location  in the "table"
     of  XACT-16C function keys, but rather   by  it's  numeric  value
     itself.   All the numbers 0 through 9 and A through  F are  shown
     as their numeric values when in programming mode.

     Notice the use of the  [RTN]  function  key  at  the  end  of the
     program.    This  key  must  always  be  the  last entered, it is
     required to end the program.    In  the  very  last  line  of the
     program,  you will notice the [P/R] key.  It is used to exit from
     program mode so that we can  run the program.

     Now we have our program contained in memory,  we  can  run  it by
     typing:

     Keystroke                 Display        Comment
     ================================================================
     [GSB] [ A ]               7 Hex          Result


     The [GSB] (goto subroutine) function key is used to begin program
     execution at the  first  instruction in the program following the
     label,   in this case the label was A.  The [GSB] instruction can
     also  be  used  within  a  program,  to  perform   a  call  to  a
     subroutine.



     9.3 Labels in Programs

     There are 16 labels  available  in programming, 0-9 and A-F.  The
     previous  example used a label to identify  the  beginning  of  a
     program.   In general, a label is always  necessary  to  begin  a
     program.    Labels  are also used  as  targets  of  [GTO]  (goto)
     instructions and [GSB] (goto  subroutine)  instructions.   Labels
     can  also  be  used to separate  programs  from  one  another  in


                                   - 33 -
     XACT-16C's program  memory; as a way of keeping multiple programs
     in memory at one time (although this is  generally  not necessary
     since programs can be loaded as disk  files).



     9.4 Using Subroutines

     A program can call a subroutine from within the program  when the
     [GSB] instruction is used within  the program.  For instance, the
     instruction  [GSB]  5  will  transfer  control  to   the  program
     instruction  immediately    following  the  instruction  [Lbl]  5
     contained elsewhere within the program.  Control will transfer to
     the label that identifies the subroutine. Subroutines can "nest",
     that is one subroutine may call another which may call   another,
     and so on.  The maximum level of subroutine nesting is 4.



     9.5 Returning from a Program or Subroutine

     The last instruction in a program  must  always be a [RTN].  This
     tells the program to reset it's  program  line number  to 000 (go
     back to  the beginning) and stop executing. The [RTN] instruction
     is  also the last instruction in a subroutine.    In  this  case,
     after  the  execution  of  the  [RTN]  instruction,   control  is
     transferred back to the  instruction    following  the subroutine
     call.



     9.6 Entering Data and the Run/Stop Key

     There  are  generally  2 ways to get data into a  program.    The
     easiest  is  to  use  the  [Sto]  instruction  to store  data  in
     registers prior to running  the  program.    Then the program can
     contain [Rcl] instructions  to  fetch the data from the register.
     The second method is required when there is more data to be input
     than available storage registers.    It  involves using the [R/S]
     (run/stop) function key.  When  this  key  is  encountered during
     program execution, the program  stops.    At  this point, you can
     enter  new  data  and then press the [R/S] key.  The program will
     begin running again.

     For  example,  let's  write  a  program which will  accept  input
     numbers, one at a  time,  and "exclusive or" each number with the
     number  3A9 Hex.  The program will  display  the  exclusive  or'd
     result after each input.

     Keystroke                 Display        Comment
     ================================================================
     [P/R]
     [Prgm]                                   Clear program memory
     [Lbl] 1               001-  43  22  1


                                   - 34 -
     [Hex]                 002-         23
     1                     003-          1
     0                     004-          0
     [WSIZE]               005-     42  44
     0                     006-          0
     [ENTER]               007-         36
     [Lbl] 2               008-  43  22  2
     [R/S]                 009-         31
     [ENTER]               010-         36
     3                     011-          3
     A                     012-          A
     9                     013-          9
     [x<>y]                014-         34
     [XOR]                 015-     42  10
     [GTO] 2               016-     22   2
     [RTN]                 017-     43  21
     [P/R]                                    Return to RUN mode


     To execute the program:

     Keystroke                 Display        Comment
     ================================================================
     [Gsb] 1                   0            Wait for input data
     1 [R/S]                 3A8 Hex        Result of 3a9 xor 1
     F [R/S]                 3A6 Hex        Result of 3a9 xor F Hex
     20 [R/S]                389 Hex        Result of 3a9 xor 20 Hex



     9.7 Branching Using the Index Register

     In the previous example, we used a [Gto] instruction to branch to
     a label, in this  case,  label 2.  As previously mentioned, there
     are 16 available labels, 0-9 and A-F.  You can also use the index
     register [I] to indirectly branch  to a label, or indirectly call
     a subroutine.  If the [I] register contains a number representing
     a label, the instructions [GTO] [I] and [GSB] [I] will indirectly
     branch to a label or indirectly call a  subroutine.



     9.8 Program Loops Using the Index Register

     XACT-16C   contains  2  instructions  that  first  increment   or
     decrement  the  index  register and skip the next program line if
     the  index  register  is  zero.    These  instructions are  [Isz]
     (increment  and  skip  if zero), and [Dsz] (decrement and skip if
     zero).  They can be used to control  loops  where  the  number of
     times to execute the  loop  is  contained  in the index register.
     For  example,   a  program  fragment  may  look  similar  to  the
     following:




                                   - 35 -
        5 [STO] [ I ]
        [LBL] [ B ]

     (instructions within loop)

        [DSZ]
        [GTO] [ B ]
        [RTN]

     In this case, the instruction within the loop  between  the [Lbl]
     [B] program line and the [Gto] [B] program line will  be executed
     5 times.  After the 5th  time,  the index register will contain 0
     and the [Gto]  [B]    instruction  will be skipped.  Instead, the
     [Rtn] instruction will be executed.



     9.9 Program Loops and Branches Using the X and Y Registers

     XACT-16C can also  make  "conditional  tests"  based  upon values
     contained  in  the X and Y registers.    There  are  8  different
     possible conditions in all.   These  functions  each  execute the
     next instruction in the  program  if  the  condition is true, and
     skip over it  if  the  condition  is false.  The instructions are
     defined as


        [x<=y]   true if x less than or equal to y
        [x<0]    true if x less than 0
        [x>y]    true if x greater than y
        [x>0]    true if x greater than 0
        [x<>y]   true if x not equal to y
        [x<>0]   true if x not equal to 0
        [x=y]    true if y equal to y
        [x=0]    true if x equal to 0



     9.10 Branching Using Flags

     The [F?] (text flag) function can be used to branch based  on the
     status of the flags.  There are a total of  6  flags in XACT-16C,
     identified    as  flags  0-5.    The  first  3  flags  (0-2)  are
     programmable general purpose   flags.   Flag 3 is used to display
     leading  zeros. Flag 4 is the Carry  (C) flag, and Flag 5 is  the
     overflow (G) flag.  Any of the  flags  may    be  used  in branch
     tests.  The  example  below   illustrates   a   program  fragment
     utilizing flags testing:








                                   - 36 -


        (Program instructions)

       [Lbl] 3
       [SF] 3
       [Gto] [ B ]

       (Program instructions)

        [Lbl] 4
        [CF] 0
        [Gto] [ B ]

        (Program instructions)


        [Lbl] [ B ]
        [F?] 0          (test to see if flag 0 is set)
        [Gto] [ C ]     (transfer control to label C if flag 0 set)
        [Gto] [ D ]     (transfer control to label D if flag 0 clear)

     If  the program executes at label 3, flag 0 is set and control is
     transferred to label B.  At this point,  since  flag  0  was set,
     control  will  transfer  to  label  C.  Likewise, if the  program
     executes at label 4, flag 0    is cleared, and thus, when control
     is  transferred  to  label B, the flag test will fail.  This will
     cause the [Gto] [ D ] instruction to be executed.



     9.11 Branching On Bit Set/Clear

     Programs can branch on the status of a specific bit set  or clear
     using the [B?] function.  This function operates similarly to the
     [F?] function.



     9.12 The Single-Step Instruction

     The [SSt] (single-step) instruction can be used in either program
     mode or run mode.    In program mode, pressing [SSt] will display
     the next program  line  number  in  a  program.  In run mode, the
     [SSt] function can be used to execute a  program  one  step  at a
     time.  This is useful for program debugging.   The  [BSt]  (back-
     step) instruction works like  the  [SSt]  instruction  in program
     mode except that it displays  the previous program line number in
     a program.  The [Bst] instruction does not operate in run mode.







                                   - 37 -
     9.13 Moving to a Program Line Number

     You can move to a specific line number in either program  mode or
     run mode.  Press [Gto] [ . ] nnn  where nnn is a  3  digit number
     between  0  and 203.  In run  mode,  pressing  [R/S]  will  begin
     execution at that line number.



     10 Appendix


     10.1 Error Conditions

     When an error  is  encountered  during  operation,  XACT-16C will
     display  the  word  "Error" in the calculator's display, followed
     by a 1 digit  error code.  These error codes are defined below:


     Error 0  -  Invalid math operation.  This  error  is  encountered
     when  an  operation  attempted division by 0 or square  root of a
     negative number.

     Error 1 - Invalid identifier.  A flag, window,  or  program  line
     number was out of range.

     Error  2  -  Invalid  Bit  Number.  This happens when  operations
     attempt to set bits, mask bits, or rotate  multiple  bits greater
     than the current word size.

     Error 3 -  Invalid  Register.    An  attempt was made to access a
     label or line number that is out of range.

     Error 4 - Invalid label or line number.  An  attempt  was made to
     access a label or line number that is out of range.

     Error  5  -  Invalid subroutine nesting.  A subroutine was nested
     more than 4 levels deep.


















                                   - 38 -
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1502

     Volume in drive A has no label
     Directory of A:\

    RUNME    EXE     12293   3-01-90   4:00a
    XACT     ZIP    180947   5-09-90   4:09p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       BAT        38   7-14-89   8:01a
    GO       TXT      1233   5-16-90   9:06a
    FILE1502 TXT      2671   5-18-90   3:18p
            6 file(s)     220710 bytes
                           98304 bytes free
