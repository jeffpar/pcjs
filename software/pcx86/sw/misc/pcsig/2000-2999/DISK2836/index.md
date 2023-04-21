---
layout: page
title: "PC-SIG Diskette Library (Disk #2836)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2836/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2836"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2836.TXT

{% raw %}
```
Disk No: 2836                                                           
Disk Title: PC-Talk                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Talk                                                  
Author Version: 1.2                                                     
Author Registration: $29.50                                             
Special Requirements: 512K RAM. A hard drive is recommended.            
                                                                        
PC-TALK is a new product for business and personal applications. The    
library consist of over 100 words that can be used in all sorts of      
possibilities. There is no special hardware need to run the voice       
library ( it works thru the PC speaker).  The voice commands can be put 
in any batch file (*.bat) and added to your programs/menus. This package
is very easy to use, you simply need to type PC-TALK at the dos prompt, 
followed by the words you would like to say (example: to say happy      
birthday, type in "PC-TALK happy birthday").  Also included in this     
package is a PCX display program (EGA/VGA, 640x350, 16 colors) that can 
be used to display PCX pictures, and talk over them. Imagine creating a 
rolling PCX demo with real human speech describing exactly what the     
computer is displaying.                                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PC-TALK.DOC

{% raw %}
```
								 PC-TALK.DOC

			    *      PC-TALK      *
				   ~~~~~~~
			    * THE VOICE LIBRARY *
			      ~~~~~~~~~~~~~~~~~


 VERSION 1.2                                           C.S.S. Inc.
 COPYRIGHT                                             3005 GLENMORE AVE.
 1990, 1991                                            BALTI., MD 21214
 CREATIVE SOFTWARE SOUNDS Inc.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


                            Table of Contents
                            -----------------

                            I.     Introduction

			    II.    Files on this Disk

			    III.   How to Run THE DEMO/TUTORIAL PROGRAM

			    IV.    Errors/Problems

                            V.     How to use THE VOICE LIBRARY

			    V.     Other Products

			    VI.    Shareware Distribution

			    VII.   Ordering information



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


 I. Introduction
 ---------------

     THE VOICE LIBRARY is a new product designed to be used by all PC users.
     This is one of the first packages that enable you to reproduce real
     human speech thru the PC speaker. This disk contains many words and
     phrases that can be used for business and personal applications. For
     personal use, You can make the computer say greetings, holidays,
     birthdays and jokes. For business use, you can have the computer
     welcome your customer/client, talk about your products and instruct
     the computer user. This package is very easy to use, all you need to
     do is type PC-TALK followed by the words you would like to say (see
     word list below). These voice commands can be added to any batch file
     or menu program. Also included on this disk is a PCX display program.
     the PCX display program can be used to display hi-resolution graphic
     pictures on your EGA/VGA monitor. This will give you a talking slideshow
     capability. When you register your software you will receive a voice
     library with over 1,000,000 bytes of voice, music and sound effects.

     TO REGISTER, Send $ 29.50 (free shipping in USA) to C.S.S. Inc.....






II. Files on this Disks
-----------------------

     Below is a list of the files that should be on this distribution disk: 


	  TALKDEMO.EXE    This is a demo and tutorial program. Run this
			  program the first time you use this package.

	  PC-TALK.EXE     This is the main voice output program. This file
			  should be executed to have the computer say
			  words. EXAMPLE: PC-TALK hi welcome

	  DISPLAY.EXE     This is the PCX display program. This file should
			  be executed to display PCX pictures on your
			  monitor. This program will run much faster from
			  your hard drive. EXAMPLE: display happy.pcx

	  ALLWORDS.BAT    This is a batch file that will say all of the words
			  that are contained on this disk.

	  HAPPY.BAT       This is a batch file that will display the
			  happy.pcx file and sing the happy birthday song.

	  PHONE.BAT       This is a batch file that will make the computer
                          sound like a phone ringing.

          PRINTDOC.BAT    This will print all of the document files.

	  SAYDEMO.SLB     These are sound library files used by TALKDEMO.

	  HAPPY.PCX       This is the PCX graphic picture for happy birthday.

	  PC-TALK.DOC     This document file. To print this document
			  type: "print PC-TALK.doc"

	  README.DOC      A introduction document to THE VOICE LIBRARY.

	  RUNME.BAT       For the first time user of this package.

	  ORDER.FRM       Order form for THE VOICE LIBRARY.



Below are the VOICE OUTPUT files on this disk.


   TYPE IN   	TO SAY THESE WORDS       EXAMPLE: TO SAY "GOOD AFTERNOON"
   -------      ------------------       TYPE IN: PC-TALK AFTERNOON

   AFTERNOON    GOOD AFTERNOON
   ALARM        ALARM
   AND          AND
   ANYKEY       PRESS ANY KEY TO
   BIRTHDAY     BIRTHDAY
   BULL         BULLCRAP
   BYE          BYE
   CHRISTMAS    CHRISTMAS
   COMEAGAIN    COME AGAIN
   CONTINUE     PRESS ANY KEY TO CONTINUE

   DEMO         DEMONSTRATION
   EASTER       EASTER
   ENTER        PRESS ENTER TO            EXAMPLE: TO SAY "PRESS ESC TO EXIT"
   ESC          PRESS ESCAPE TO           TYPE IN: PC-TALK ESC EXIT
   EXIT         EXIT
   FORHELP      FOR HELP
   FORUSING     FOR USING OUR
   FORVISIT     FOR VISITING
   GOODBYE      GOODBYE
   GOTCHA       GOTCHA

   HAPPY        HAPPY
   HBDSONG      THE HAPPY BIRTHDAY SONG
   HELLO        HELLO
   HI           HI
   MAYIHELP     MAY I HELP YOU
   MENU         PLEASE ENTER A MENU ITEM
   MERRY        MERRY
   MORNING      GOOD MORNING
   NAME         PLEASE ENTER YOUR NAME
   NEWYEAR      NEW YEAR

   PASSWORD     PLEASE ENTER YOUR PASSWORD
   PAUSE        THIS WILL PAUSE THE VOICE OUTPUT FOR 0.5 SECONDS
   PHONERIN     THIS IS THE SOUND OF A PHONE RINGING
   PLEASE       PLEASE
   PRESS        PRESS
   PRESSF1      PRESS F1 FOR
   PRODUCT      PRODUCT
   QUIT         QUIT
   REDO         PLEASE REDO
   REGISTER     PLEASE REGISTER YOUR SOFTWARE

   RETRY        PLEASE RE-TRY
   STORE        STORE
   THANKYOU     THANK YOU
   THATIT       THAT'S IT                 EXAMPLE: TO SAY "WOW - WAY TO GO"
   TOUR         TOUR                      TYPE IN: PC-TALK WOW WAYTOGO
   WARNING      WARNING
   WAYTOGO      WAY TO GO
   WELCOME      WELCOME
   WELTOOUR     WELCOME TO OUR
   WOW          WOW

   YESORNO      PLEASE ENTER YES OR NO
   YOUGOTIT     YOU GOT IT

   THERE ARE OVER 1,000,000 BYTES (3 DISK) OF VOICE FILES ON THE REGISTERED
   VERSION.   **** PLEASE REGISTER YOUR SHAREWARE ****



III. How to Run THE DEMO/TUTORIAL PROGRAM
-----------------------------------------

     We recommend that you run this package from your HARD DRIVE.
     -----------------------------------------------------------

     SYSTEM REQUIREMENTS: 512K of memory
			  any graphic monitor (EGA/VGA for PCX display).
			 

     If you have a FLOPPY based system, insert the disk into the A
     drive, then log onto the A drive, by typing in:
     
     A:

	  Then to start the program, type in :

     TALKDEMO


     If you have a HARD DRIVE system, insert the disk into your A
     drive, then make a subdirector on your hard drive, by typing in:

     C:
     MD\ PC-TALK

	  Then log onto the ABC-TALK subdirector, by typing in:

     CD\ PC-TALK

	  Then copy all the files on this disk to the subdirector on
	  your hard drive, by typing in:

     COPY A:*.*

	  Then to start the program, type in :

     TALKDEMO



IV.  ERRORS/PROBLEMS
--------------------

     REMOVE ALL TSR PROGRAMS AND HAVE 512K OF FREE MEMORY AVAILABLE
     BEFORE RUNNING THIS PROGRAM.

     If the sound output is distorted or muffled or slow, this usually
     reflects that a TSR (Terminate and Stay Resident) program is running.
     Remove all TSR programs before running PC-TALK.

     If you have a problem displaying the HAPPY.PCX file, this may be
     caused by not having a EGA graphic display adapter or a VGA display
     adapter that is not compatiable with the EGA adapter.

     If you have a problem with the keyboard this maybe caused by not
     having enough memory in your system (512K needed) or the file size
     in your config.sys file is to small. Try increasing your file size.

     If the speech output is not loud enough, this is usually caused by a
     inexpensive PC that has a ceramic speaker built on to the mother board.
     There is no cure for this problem (your PC is not 100% IBM compatible).

     If you have any problems other then the ones listed above, please call
     us or send us a letter, with the error information. This will enable us
     to correct the error(s).     THANKS........



V. HOW TO USE THE VOICE LIBRARY
-------------------------------


     The Voice and graphics commands listed below can be executed from dos
     (C>) or added to your batch files (autoexec.bat).


	  FIRST, log onto the PC-TALK subdirector, by typing in:

     CD\ PC-TALK


	  Then to say a single word, type in:

     PC-TALK WELCOME                        Will say: WELCOME


	  To say multiple words, type in:


     PC-TALK CONTINUE                       Will say: PRESS ANY KEY TO
                                                       CONTINUE
	  or
     PC-TALK PRESSF1 FORHELP                Will say: PRESS F1 FOR HELP

	  or

     PC-TALK ESC EXIT                       Will say: PRESS ESC TO EXIT

	  or

     PC-TALK AFTERNOON STORE MAYIHELP       Will say: GOOD AFTERNOON WELCOME
						      TO OUR STORE MAY I
	  or					      HELP YOU

     PC-TALK HI WELTOOUR DEMO PAUSE MENU    Will say: HI WELCOME TO OUR
						      DEMONSTRATION
						      (0.5 SECOND PAUSE)
						      PLEASE ENTER A MENU
						      ITEM

     THERE ARE ALL SORTS OF COMBINATIONS THAT CAN BE
     USED TO COMBINE THESE WORD AND PHRASES (BE CREATIVE).



  Using the PXC display program
  -----------------------------

     The PCX display program can be used to display any picture that is
     compatible with the EGA display adapter (most VGA systems are
     compatible). You can display any picture that is equal-to or less
     then 640 x 350 pixels in size and 16 colors or less.

	   To display a PCX picture, type in:

     DISPLAY HAPPY.PCX


    You can create a PCX picture file in just about any paint program
    (PC Paintbrush, Deluxe Paint, etc.). With a paint program you can
    capture screens from your programs/charts or use a scanner to scan
    images to use with the VOICE LIBRARY, to Create your TALKING SLIDESHOW.



V. Other Products
-----------------

      When you register your software we will send you a updated list of
      other products available thru C.S.S. Inc..

      C.S.S. can record your voice, just send us a audio cassette with
      your recording and we will digitize if for you. The cost for this
      process is only $ 10.00 per sentences/phrase.

      NOW YOU CAN RECORD YOUR OWN VOICE LIBRARY, The voice digitizer
      plugs into your serial port.  This complete  hardware/software
      package is VERY EASY TO USE and cost only $ 224.00.
			   


  ALPHABET and WORDS
  ------------------

      ABC-TALK is a  NEW EDUCATIONAL PROGRAM with a real human voice that
      teaches children how to talk, learn the alphabet, read, spell and
      work with a computer.  ABC-TALK  will teach young children to say
      early words (hi, mama, dada, I love you, drink, please, thank you,
      up, bye, etc.) and how to interact with a computer.  For older
      children, ABC-TALK will teach them to say and understand the
      alphabet, how to find letters on the keyboard,  how to recognize
      the letters in words  and how to spell words.  Also included is the
      ABC SONG and EASY DRAW for the child's creativity.  The voice output
      will work with any  IBM PC compatible and any graphic monitor.  This
      program will give children great encouragement to learn.  When a
      question is answered correctly, ABC-TALK will say positive words (way
      to go, great, excellent, etc.). The hi-resolution graphics are
      designed to bring out the childs creativity by using kaleidoscopes
      and collages (the child will recognize various objects , letters
      and words hidden in the graphics). (cost only $ 24.50)


  NUMBERS and COUNTING
  --------------------

      123-TALK is designed for children 2-7 years old. This program will
      teach your child how to say numbers, recognize numbers on the keyboard,
      remember their phone number and address, how to count and add.
      This is one of our best selling packages. (cost only $ 24.50)



  OTHER PRODUCTS WITH TALKING TEACHER
  -----------------------------------


      COLORS and SHAPES - Designed for children 1-6 years old.
			  (cost only $19.50)

      ADDITION and SUBTRACTION - Designed for children 4-9 years old.
                                 (cost only $24.50)

      MULTIPLICATION and DIVISION - Designed for children 7-11 years old.
                                    (cost only $24.50)

      WORD GAMES GRADE 1-3 - Designed for children 6-9 years old.
                             (cost only $29.50)

      WORD GAMES GRADE 4-6 - Designed for children 9-12 years old.
                             (cost only $29.50)

      EARLY SPANISH - Designed for children 4-12 years old.
		      (cost only $29.50)


  GOTCHA !!
  ---------

      GOTCHA is a  NEW  ARCADE  ACTION/STRATEGY GRAPHIC GAME. This game
      is CHALLENGING, very ADDICTIVE and lots of FUN. GOTCHA has high
      speed Nintendo style graphics, arcade sound effects and voice output,
      multiple skill levels and VGA graphic support. The object of the game
      is to outsmart and outlast the computer. The computer uses ARTIFICIAL
      INTELLIGENCE to made decisions. There are  four rounds in this version,
      each round is more difficult to beat and use different tactics to trick
      you into making mistakes. When you complete all four rounds, a wild
      graphic screen will entertain you. We feel this game is a new and
      exciting interactive graphic game. First there was PAC-MAN, then there
      was TETRIS, now there is GOTCHA. (cost only $14.50)



VI. Shareware Distribution
--------------------------

         Shareware is a growing concept for now and the future. This gives
     YOU the chance to freely obtain and try out this software to see if it    
     fits your needs or provides  you child with entertainment. Shareware
     means that you try it, and if you like it, you should BUY it...........

	 If you continue to use this Shareware program, after trying it out,
     you are expected to register your copy with C.S.S. Inc. and pay the
     registration fee.  What you get in return  will be the COMPLETE version
     of this program, WITH OVER 1,000,000 BYTES OF VOICE .

	 Please support the Shareware concept. This will enable us to
     continue to support our software and create new and exciting educational
     programs. Considering the price of a comparable commercial software
     package, it's obvious that Shareware is a good deal for everyone.

	 There are real advantages to the Shareware system. You get to try
     out software to make sure it's compatible with your system and that it
     fits your needs before you "buy" it. C.S.S. Inc. saves the expense of
     advertising, packaging and distribution and passes the savings on to you.
     Plus, We are much more accessible than commercial software sources, so
     your questions and suggestions are much more likely to be responded to.

	 Copyright laws apply to both Shareware and commercial software, and
     the copyright holder retains all rights, with a few specific exceptions
     as stated below.  Shareware authors are accomplished programmers, just
     like commercial authors, and the programs are of comparable quality. (In
     both cases, there are good programs and bad ones!)  The main difference
     is in the method of distribution.
        
	 Shareware is a distribution method, not a type of software. You
     should find software that suits your needs and pocketbook, whether it's
     commercial or Shareware.  The Shareware system makes finding software
     easier, because you can try before you buy.  Shareware has the ultimate
     money-back guarantee- if you don't use the product, you don't pay for it.



DISCLAIMER OF WARRANTY
----------------------

     THIS SOFTWARE IS PROVIDED "AS IS,"  THERE ARE NO WARRANTIES, EXPRESSED
     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
     MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ALL SUCH
     WARRANTIES ARE EXPRESSLY AND SPECIFICALLY DISCLAIMED.  NEITHER C.S.S.
     Inc. PRODUCTS NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE CREATION,
     PRODUCTION, OR DELIVERY OF THIS SOFTWARE SHALL BE LIABLE FOR ANY DIRECT,
     INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES ARISING OUT OF THE USE
     OR INABILITY TO USE SUCH SOFTWARE . THIS DISCLAIMER SHALL BE GOVERNED
     BY THE LAWS OF MARYLAND.



Shareware Dealers
-----------------
     
	If you are a Shareware dealer/dist. and plan on adding this program
     to your library, please send us a letter so we can add you company to
     our database. This will allow us to send you any updates to this
     program and all future Shareware prducts that we develop.



Distribution restriction
------------------------
  
     The files and programs on this disk may not modified or deleted.

     Disk vendors, those who sell Shareware for a profit shall not 
     charge more then $10.00 per disk.  

     The programs cannot be sold as part of some other package, without
     written permission from C.S.S. Inc..

     The distribution disk cannot contain any other programs. If you plan
     on adding this program to a CD-ROM package, please write us for approval.

     When distributed via a modem link all files must be transferred 
     in a archive format.  We recommend that you use ZIP or ARC format
     when you would like to transfer this program over a telecommunication
     link.



VII.  Ordering Information
--------------------------

	To order THE VOICE LIBRARY (3 DISK), with over 1,000,000 bytes of
     voice, music and sound effects, send $29.50 U.S. dollars (Free shipping
     in USA, $3.50 shipping for foreign orders) to the address below. Make
     your check or money order payable to C.S.S. Inc..



			      C.S.S. Inc.
			      3005 Glenmore Ave.
			      Balti., MD  21214



     If you have any comments or suggestions, please send us a letter or 
     reach us on CompuServe [70461,3520].



                          THANK YOU FOR YOUR SUPPORT
			  --------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2836

     Volume in drive A has no label
     Directory of A:\

    README            1613   7-03-91  11:20a
    RUNME    BAT       219   7-03-91  11:20a
    PC-TALK  DOC     18312   7-03-91  11:20a
    PC-TALK  EXE     23250   7-03-91  11:20a
    TALKDEMO EXE     32864   7-03-91  11:20a
    DISPLAY  EXE     13310   7-03-91  11:20a
    ALLWORDS BAT       518   7-03-91  11:20a
    HAPPY    BAT       116   7-03-91  11:20a
    PHONE    BAT       127   7-03-91  11:20a
    PRINTDOC BAT       155   7-03-91  11:20a
    HAPPY    PCX     31245   7-03-91  11:20a
    ORDER    FRM      1477   7-03-91  11:20a
    SAYDEMO  SLB     40515   7-03-91  11:20a
    AFTERNOO          2048   7-03-91  11:20a
    ALARM             1536   7-03-91  11:20a
    AND               1280   7-03-91  11:20a
    ANYKEY            3966   7-03-91  11:20a
    BIRTHDAY          1664   7-03-91  11:20a
    BULL              1920   7-03-91  11:20a
    BYE               1152   7-03-91  11:20a
    CHRISTMA          1664   7-03-91  11:20a
    COMEAGAI          1536   7-03-91  11:20a
    CONTINUE          1664   7-03-91  11:20a
    DEMO              2304   7-03-91  11:20a
    EASTER            1280   7-03-91  11:20a
    ENTER             4864   7-03-91  11:20a
    ESC               4224   7-03-91  11:20a
    EXIT              1024   7-03-91  11:20a
    FORHELP           2560   7-03-91  11:20a
    FORUSING          3200   7-03-91  11:20a
    FORVISIT          2239   7-03-91  11:20a
    GOODBYE           1920   7-03-91  11:20a
    GOTCHA            1920   7-03-91  11:20a
    HAPPY             1408   7-03-91  11:20a
    HBDSONG          29696   7-03-91  11:20a
    HELLO             1279   7-03-91  11:20a
    HI                1280   7-03-91  11:20a
    MAYIHELP          1920   7-03-91  11:20a
    MENU              6528   7-03-91  11:20a
    MERRY             1408   7-03-91  11:20a
    MORNING           1792   7-03-91  11:20a
    NAME              4992   7-03-91  11:20a
    NEWYEAR           1792   7-03-91  11:20a
    PASSWORD          5760   7-03-91  11:20a
    PAUSE             1137   7-03-91  11:20a
    PHONERIN          3968   7-03-91  11:20a
    PLEASE            1599   7-03-91  11:20a
    PRESS             1024   7-03-91  11:20a
    PRESSF1           3456   7-03-91  11:20a
    PRODUCT           1792   7-03-91  11:20a
    QUIT              1280   7-03-91  11:20a
    REDO              1408   7-03-91  11:20a
    REGISTER          6912   7-03-91  11:20a
    RETRY             1664   7-03-91  11:20a
    STORE             3584   7-03-91  11:20a
    THANKYOU          1536   7-03-91  11:20a
    THATIT            1280   7-03-91  11:20a
    TOUR              1408   7-03-91  11:20a
    WARNING           1408   7-03-91  11:20a
    WAYTOGO           1664   7-03-91  11:20a
    WELCOME           1152   7-03-91  11:20a
    WELTOOUR          2816   7-03-91  11:20a
    WOW               1280   7-03-91  11:20a
    YESORNO           6016   7-03-91  11:20a
    YOUGOTIT          1408   7-03-91  11:20a
    FILE2836 TXT      1999  10-10-91   4:26p
    GO       TXT      1386  10-10-91   4:48p
    GO       BAT        38   1-31-91  12:58a
           68 file(s)     316756 bytes
                           12288 bytes free
