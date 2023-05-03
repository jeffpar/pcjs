---
layout: page
title: "PC-SIG Diskette Library (Disk #2887)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2887/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2887"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2887.TXT

{% raw %}
```
Disk No: 2887                                                           
Disk Title: Trivia: Movies and Computers                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: Have You Read That Movie?                                
Author Version: 1.0                                                     
Author Registration: $10.00                                             
Special Requirements: Graphics card.                                    
                                                                        
Have You Read That Movie? is a game of trivia on movies and related     
literature.  The questions are multiple choice, and there are three     
levels of difficulty.  The game has 91 easy questions, 141 medium       
questions, and 136 hard questions.  The game can be played by one or two
players.  In two player games you can alternate turns or compete on each
question simultaneously.  The game can be set up so that you may have up
to three tries before guessing the right answer.  After the correct     
answer is given interesting facts are displayed about the movie or      
literature that should enhance the knowledge of all trivia buffs and    
movie fans.  The game has pull down menus and online help.              
Program Title: Computer Trivia Quiz                                     
Author Version: 1.0                                                     
Author Registration: $20.00                                             
Special Requirements: 320K RAM.                                         
                                                                        
COMPUTER TRIVIA QUIZ is a learning game for people of all ages, computer
skill, education level, and user experience.  The program allows the    
user to test his/her knowledge of computer terms, computer history, our 
famous and not so famous founders, ground-breaking events, etc. COMPUTER
TRIVIA QUIZ is written for those who wish to become more computer       
literate.                                                               
                                                                        
The range of subjects is wide. They cover computing from the stone age  
(Stonehedge) to questions about DOS (name a command new to DOS 3.3). The
questions are designed to provide an enjoyable exercise in learning     
about early microcomputers (remember the Altair?), the various computer 
models (what was the first operational electrical digital computer?),   
individuals important in computer history (who was the first            
programmer?), computer inventions, their inventors & trivia (like how   
did the name Winchestor come up for hard drives), software (who wrote   
Applewriter?) and much much more!!!                                     
                                                                        
COMPUTER TRIVIA QUIZ is organized as a multiple choice game in which up 
to six players can play.  When answering a question, the player can look
at the "hint".  The hints are full of useful information and make an    
enjoyable reading and learning tool!  Questions, hints and answers      
(correct and incorrect) were written with the intended goal of          
increasing the user's understanding of computers, no matter what level  
of computer knowledge and sophistication the individual user possesses. 
                                                                        
Those that are experts with computers can learn interesting things from 
this program.  Beginners can quickly develop a literacy about computers 
which will surely amaze their friends.  Do you know what kind of a bug  
the first computer bug was?  (hint: it was alive and crawled into a     
relay...) Try this program!  There're lots of neat things in it and     
you'll have fun!  Guru level individuals looking for a challenge should 
set the time limit to 10 seconds and see how many questions in a row    
they can get correct.                                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  PC-SIG Disk #2887  HAVE YOU READ THAT MOVIE? and  >>>>      ║
║                         COMPUTER TRIVIA QUIZ                            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Make a directory on your computer hard drive for each of the games and  ║
║ then copy the respective zipped file and PKUNZIP.EXE to it. Or copy     ║
║ the files to respective floppy disks. (For subdirectories, see below.)  ║
║                                                                         ║
║                 C:                         (press Enter)                ║
║                 MD \[directory name]       (press Enter)                ║
║                 CD \[directory name]       (press Enter)                ║
║                 COPY [filename.ext]        (for each file)              ║
║                 PKUNZIP [zipped filename]  (press Enter)                ║
║                                                                         ║
║ HAVE YOU READ THAT MOVIE? =                                             ║
║   To print the program documentation, type:                             ║
║                                   COPY FILMNLIT.DOC PRN  (press Enter)  ║
║                                                                         ║
║   To start the game, type:  FILMNLIT  (press Enter)                     ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  PC-SIG Disk #2887  HAVE YOU READ THAT MOVIE? and  >>>>      ║
║                         COMPUTER TRIVIA QUIZ                            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ (cont.)                                                                 ║
║                                                                         ║
║ COMPUTER TRIVIA QUIZ =                                                  ║
║   To read the quick instructions, type:  TYPE README  (press Enter)     ║
║                                                                         ║
║   To print the program documentation, type:  COPY QUIZ.DOC PRN  (Enter) ║
║                                                                         ║
║   To start the game, type:  QUIZ  (press Enter)                         ║
║                                                                         ║
║   To print the registration form, type:  COPY QUIZ.FRM PRN  (Enter)     ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## FILMNLIT.DOC

{% raw %}
```






                              HAVE YOU READ THAT MOVIE?


                                100% Cotton Software
                                    RR1 Box 1622
                                Hop Bottom, PA 18824


                          Copyright 1990 by George Tylutki
                                All rights reserved.



                                    Introduction
                                    ------------

          Although movies are often based on original screenplays, many are
          adapted from literary works: novels, plays, short stories and
          even poems.  Have You Read That Movie? is a multiple-choice test
          of your knowledge of movies and literature.  There are three
          levels of difficulty and three modes of play.  Each correct
          answer is accompanied by some interesting fact(s) about the movie
          or the literary work.  Enjoy and learn.

          Have You Read That Movie? is a copyrighted shareware product; it
          is not freeware or public domain.  You can try it before you buy
          it and you are encouraged to give copies to others.  But if you
          like it and use it, you should send the registration fee of
          $10.00 to 100% Cotton Software.  Registered users receive:
             - a copy of Have You Read That Movie? which does not display
                  this message;
             - your choice Maze Survey or Double Directory (see below);
             - telephone support;
             - notification of updates;
             - the appreciation of programmers who strive to produce
                  inexpensive, quality, useful and entertaining software.

          Maze Survey is a graphics game in which you use the keyboard to
          maneuver a variable-speed survey vehicle through mazes laying
          down and later picking up markers.  You work against the clock
          and are paid for each marker.  There are 10 mazes and 4 levels of
          difficulty.  You can choose among 4 color palettes and 2 graphics
          resolutions (depending upon your computer's display adapter).
          You may also choose which keys maneuver the vehicle.  High scores
          and the various settings (level, colors, etc.) can be saved to
          disk so that you don't have to reset them each time you play.
          There is on-line help.  Maze Survey requires DOS 2.0 or later and
          128K RAM and it will run with the following graphics adaptors (or
          clones): CGA, MCGA, EGA, VGA, Hercules, AT&T 400.













          Have You Read That Movie?                                     2
          ---------------------------------------------------------------


          Double Directory displays two disk directories side-by-side (up
          to 150 files each).  You can scroll through either or both
          (simultaneously) and delete, rename, and copy files.  Double
          Directory's point-and-shoot interface makes it easy to tag files
          and navigate subdirectories.  It automatically determines whether
          a monochrome or color display is being used, and, if you have an
          EGA or VGA, you can view more files in the 43- and 50-row modes.
          You can set a filename mask, sort directories by filename,
          extension, time, date or size, and shell to DOS to perform DOS
          functions.  Double Directory's commands are mnemonic and it has
          context-sensitive help.  It requires DOS 2.0 or later.
          QuickBASIC 4.5 source code is available.

          There is a registration form at the end of this file.

          To print this documentation, turn your printer on and type "copy
          filmnlit.doc prn" at the DOS prompt.


                                   Taking the Quiz
                                   ---------------

          You will be shown a question and four answers.  Use the direction
          keys (see the Miscellaneous section) to move the inverse cursor
          bar to your answer choice and press the Enter key.  Instructions
          are displayed at the bottom of the quiz window.  If you are in
          Single Player mode or 2 Players Alternate mode (see below), you
          can choose "Skip this question" instead of choosing one of the
          four answers.  Have You Read That Movie? randomly selects
          questions and any you skip will come up again later in the quiz.

          To run Have You Read That Movie?, type "filmnlit" at the DOS
          prompt.


                                    The Main Menu
                                    -------------

          After the program has loaded, it will display a title screen.
          Press any key and the main menu will appear at the top of the
          screen.

          At the main menu, use the direction keys to choose one of the
          menu items and press Enter.  Another menu will then drop down
          below your choice (except HELP).  Again, use the direction keys
          to choose a menu item and press Enter.  Some of the drop-down
          menu items will present a pop-up menu box.  Use the direction
          keys and Enter to make another choice.  Instead of using the
          direction and Enter keys, you can press the highlighted letter of
          a menu choice (for example, Q for quit).  You can press the Esc
          key to cancel any choice.











          Have You Read That Movie?                                     3
          ---------------------------------------------------------------


          1. SETTINGS
          -----------

          There are seven choices on the SETTINGS menu: # of Tries, Show
          answer, Level, Mode, Colors, Background, Mouse speed.

          # of Tries:  You may try 1, 2, or 3 times to get the right answer
               before the program shows you the correct answer or moves on
               to another question (see Show answer below).

          Show answer: You can have the program show you the correct answer
               after you have failed to choose the correct answer # of
               Tries.

          Mode: There are three modes: Single Player, 2 Players Alternate,
               and 2 Players Compete.  Choose Single Player when only one
               person is playing.  In 2 Players Alternate mode, 2 players
               take turns answering questions.  2 Players Compete mode is
               like a TV game show.  After a brief blank screen,the
               question and answers are displayed.  The first player to
               recognize the correct answer, presses any key on his or her
               side of the keyboard (Player 1 = left side and Player 2 =
               right side) and then uses the direction keys to choose an
               answer.

               In Single Player and 2 Players Alternate modes, players may
               choose Skip this question.  In 2 Players Compete, you may
               not choose Skip this question.  Further, wrong answers are
               subtracted from right answers (thus lowering your score).
               Therefore, in 2 Players Compete mode, you should not try to
               be the first player to press a key on your side of the
               keyboard unless you are quite sure you know the answer.

          Level: There are three levels of difficulty: easy, medium and
               hard.  There are 91 easy questions, 141 medium questions and
               136 hard questions.

          Colors: There are four color schemes for the score, settings and
               quiz windows.  One of them should suit your preferences. See
               CGA NOTE below.

          Background: Each time you press Enter the underlying, textured
               background color will change.  There are sixteen background
               colors.  The colors will roll over from 16 to 1 as you
               continue to press Enter.  Sixteen background colors + four
               color schemes = 64 color combinations total.  See CGA NOTE
               below.

          Mouse speed: You can adjust the mouse sensitivity so that it
               moves slowly, moderately or quickly.












          Have You Read That Movie?                                     4
          ---------------------------------------------------------------


          2. PLAY
          -------

          Choose Start new game to play.  While you are taking the quiz,
          you can press the Esc key to return to the top main menu.  If you
          then change the settings of # of Tries, Show answer, Colors,
          Background, or Mouse speed, you can choose Continue game.
          However, if you change the Mode or Level settings, you must Start
          new game (Continue game on the PLAY menu will be dimmed or
          invisible and the cursor bar will not move on to it).

          3. QUIT
          -------

          When you choose QUIT, you will be asked to confirm that you
          really want to quit the program.

          4. HELP
          -------

          You can display help screens by choosing Help at the main menu or
          by pressing the F1 function key while you are in the quiz window.


                                       Windows
                                       -------

          At the upper, left side of the screen is the score box which
          shows the number of questions you have tried to answer, the
          number of right and wrong answers, the percentage of right
          answers and the number of remaining questions ("to go").  In 2
          Players Compete mode, you can have a negative percentage.

          At the upper, right side of the screen is the settings box which
          shows the current settings.

          At the lower center of the screen is the quiz box where questions
          and answers are displayed and you make choices.


                                      CGA NOTE
                                      --------

          Have You Read That Movie? is able to give you 16 background
          colors by manipulating the "blink bit."  Some CGA display
          adapters improperly reset this bit at odd times.  Therefore, if
          you choose color "C" or background colors 9 through 16, you may
          find that the colors blink.  If so, press the space bar while the
          questions and answers are displayed.  If the colors continue to
          blink (rather than turning bright), you will have to use colors
          "A", "B" or "D" and background colors 1-8 (unless you like the
          blinking colors).  Even if the bright colors display correctly,
          you may see a brief flash when the score is updated.









          Have You Read That Movie?                                     5
          ---------------------------------------------------------------


          This problem is related only to SOME CGA display adapters and not
          to EGA, VGA, Hercules, etc.


                                    Miscellaneous
                                    -------------

          Have You Read That Movie? will automatically detect whether a
          mouse driver is loaded.  If so, you may use either the mouse or
          the keyboard.  The left mouse button is used for the Enter key
          and the right mouse button is used for the Escape key.

          In addition to the cursor keypad direction keys (Up Arrow, Down
          Arrow, Left Arrow, Right Arrow, Page Up and Page Down), you can
          use the "WordStar" direction keys (Ctrl-E, Ctrl-X, Ctrl-S, Ctrl-
          D, Ctrl-Q-R and Ctrl-Q-C).

          The author of the literary work on which the movie is based is
          mentioned in the question or appears in square brackets at the
          end of the question: for example, [Edgar Allan Poe].

          Occasionally the film and literary title may differ by a word or
          two: for example, "The Murders in the Rue Morgue" (story) and
          Phantom of the Rue Morgue (movie).

          Have You Read That Movie? requires one disk drive and 256K RAM.
          It will work correctly on CGA, EGA, VGA, Hercules, MDA, and MCGA
          display adapters (color or monochrome).







































                                  REGISTRATION FORM


                                                    Date:_________________




          Register my copy of Have You Read That Movie? ($10.00).  Send me
          a new copy without the registration screen and a copy of:

          [] Maze Survey or [] Double Directory


          Name _________________________________________________________

          Street _______________________________________________________

          City ______________________________ State ____  Zip __________


          I obtained my copy of Have You Read That Movie? from:

                  [] Friend
                  [] User's group
                  [] Commercial service _________________________________
                  [] Other ______________________________________________



          Send $10.00 to:     100% Cotton Software
                                 RR 1 Box 1622
                              Hop Bottom, PA 18824

          [] Check    [] Money order

























```
{% endraw %}

## INFO.TXT

{% raw %}
```
-- Author: George Tylutki
-- Address: RR 1 Box 1622, Hop Bottom, PA 18824
-- Phone: 717-289-4019

-- Program: Have You Read That Movie?

-- Description:  Have You Read That Movie? is an entertainment-educational
program that tests the user's knowledge of literature and films via a
multiple-choice format.  There are 91 easy questions, 141 medium questions
and 136 hard questions (368 total).  Each correct answer is accompanied by
some interesting fact(s) about the movie or the literary work.

There are three modes of play: Single Player; Two Players Alternate; and
Two Players Compete (like a TV game show -- players compete to be first and
correct).

The user may choose to see the correct answer or not after answering
incorrectly.  The user may choose to try 1, 2, or 3 times to get the right
answer before the program shows the correct answer or moves on to another
question.

The program runs correctly with CGA, EGA, VGA, Hercules, MDA, and MCGA
display adapters (color or monochrome) and with or without a mouse. The
user may adjust the mouse sensitivity.

There are four color scheme choices for the score, settings and quiz
windows and the user can choose among sixteen background colors.

The program uses drop-down menus and there is on-line help.


-- Intended user: movie fans, literature enthusiasts, trivia buffs, teachers,
students, general audience

-- Update: no (version 1.0)

-- Unique features: There are no other programs like Have You Read That Movie?

-- Capacity: NA

-- Special hardware requirements: none

-- How to start: type "filmnlit" at the DOS prompt

-- Registration fee: $10.00

-- Registration benefits:  (1) a copy of the program without the request-for-
registation screen; (2) a free copy of a game or utility program (Maze
Survey or Double Directory); (3) telephone support; (4) notification of
updates

-- List of files: filmnlit.exe -- executable program
                  filmnlit.doc -- user manual
```
{% endraw %}

## QUIZ.DOC

{% raw %}
```



		   Documentation for Computer Trivia Quiz

      Computer Trivia Quiz is a learning game for people of all computer
      skill and knowledge levels.    The program allows you to test your
      knowledge of computer terms, computer history, prominent founders,
      ground-breaking events, etc.   Computer Trivia Quiz is written for
      those who wish to become more computer literate.


      The range of subjects is wide. They cover computing from the stone
      age (Stonehenge) to questions about DOS (name a command new to DOS
      3.3).  The questions are designed to provide an enjoyable exercise
      in learning about early microcomputers (remember the Altair?), the
      various computer models (what was the first operational electrical
      DIGITAL computer?), individuals important in computer history (who
      was the first programmer?), computer inventions, their inventors &
      trivia (like how did the name Winchestor come up for hard drives),
      software (who wrote AppleWriter?) and much much more!!!





			  WHAT COMPUTER TRIVIA QUIZ DOES

      Computer Trivia Quiz is organized as multiple choice game in which
      up to six players can play.  When answering a question, the player
      can look at the "hint".   The hints are full of useful information
      and make an enjoyable reading and learning tool!  Questions, hints
      and answers (correct and incorrect) were written with the intended
      goal of increasing an user's understanding of computers, no matter
      what level of computer knowledge and sophistication the individual
      user possesses.

      Those that are experts with computers can learn interesting things
      from this program.  Beginners can quickly develop a literacy about
      computers which will surely amaze their friends.  Do you know what
      kind of a bug the first computer bug was?  (hint: it was alive and
      crawled into a relay...)   Try this program!!!   We think you will
      agree that there's lots of neat things in this one!!!   We believe
      you will have fun!





			    Computer Trivia Quiz
				Version 1.0
		     Copyright 1991, Shoestring Software

      This program is distributed as shareware.  It may be freely copied
      and distributed as long as this file is included. If you find this
      program useful, you are requested to register your program.  Those
      who register will receive the latest updates to this program, hard
      copy of the manual, a colorful tee shirt, and information on other
      products by available from Shoestring Software.

      The registration fee is $20.00.     Please send your name, address
      and any comments today.  Registrations should be sent to:

				Shoestring Software
				P.O. Box 43800
				Las Vegas, NV  89116








			     DISCLAIMER OF WARRANTY

  THIS SHAREWARE IS PROVIDED "AS IS".  SHOESTRING SOFTWARE MAKES NO WARRANTY
  OF PERFORMANCE OR MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
  SHOESTRING  SOFTWARE  MAKES NO WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED.

  THE USER MUST ASSUME THE ENTIRE RISK OF USING THE PROGRAM.   ANY LIABILITY
  OF SHOESTRING SOFTWARE  WILL BE LIMITED EXCLUSIVELY TO PRODUCT REPLACEMENT
  OR REFUND OF THE REGISTRATION FEE FOR REGISTERED VERSIONS ONLY.

  SHOESTRING SOFTWARE  HAS MADE THE BEST EFFORT POSSIBLE TO PROVIDE ACCURATE
  INFORMATION IN THIS PROGRAM.  HOWEVER, AS WITH ANY RESEARCH, WE HAVE FOUND
  CONFLICTING INFORMATION WITHIN IN THE AVAILABLE LITERATURE.     SHOESTRING
  SOFTWARE WILL NOT BE HELD RESPONSIBLE FOR ANY INACCURACIES WITHIN.   IF AN
  INACCURACY IS DISCOVERED, PLEASE CONTACT THE AUTHORS.    PLEASE INCLUDE IN
  YOUR STATEMENT WHAT THE INACCURACY IS AND ALSO PROVIDE US WITH TWO SOURCES
  WHICH PROVIDE AN ACCURATE STATEMENT.







              _______
         ____|__     |               (R)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER


      Shoestring Software is a member of the Association of Shareware
      Professionals (ASP).  ASP wants to make sure that the shareware
      principle  works  for  you.   If  you are  unable to  resolve a
      shareware-related  problem with an ASP member by contacting the
      member directly, ASP may be able to help. The ASP Ombudsman can
      help  you  resolve a dispute or problem with an ASP member, but
      does  not  provide  technical  support  for  members' products.
      Please write to the ASP Ombudsman at 545 Grover Road, Muskegon,
      MI 49442-9427  or send a Compuserve message via CompuServe Mail
      to ASP Ombudsman 70007,3536.





			      WHAT IS SHAREWARE

      Shareware is software that allows you to examine before you spend.
      Shareware authors can get their product to a broad market spectrum
      with few costs.  Since the costs associated with product promotion
      and  distribution are  minimized, the shareware customer gets more
      "bang for his buck".  This product would cost much more if it were
      marketed using standard commerical practices.   There are no fancy
      bubble wrapped packages, distribution costs or retail store profit
      to be added to the cost of software. Shareware authors place their
      trust in their product.  Unlike commerical packages, if you do not
      like the product after you run it, you don't buy it.   Those users
      who decide to keep shareware software after trying it are asked to
      register their product with the authors.   You register by sending
      your name, address and a modest fee to the shareware author of the
      product. Registered owners of shareware often get additional value
      when they register.   Shoestring Software will send you the latest
      version of the program, a colorful tee shirt, a typeset version of
      the online manual,  offer you additional products, and 180 days of
      product support by mail.




			   WHAT IS SHAREWARE (Cont)

      The printed manuals, version updates, and additional support which
      are sent to all registered owners may provide additional incentive
      to register.    If you enjoy the product then the shareware author
      deserves to be compensated.    The only way that the author can be
      compensated is if you register.    When you support the concept of
      shareware by registering, you encourage the authors to continue to
      develop useful and affordable shareware products.   The additional
      incentives provided by `Shoestring Software' to encourage users to
      register include a typeset manual and a colorful tee shirt.

      There are several companies that distribute  shareware for a small
      fee.  This fee covers their costs and profits.   None of the money
      paid to a shareware distibutor goes to the authors.  The shareware
      concept only works if enough of you register your products.







				 DESCRIPTION

      Computer Trivia Quiz is a game in which up to six players can test
      their knowledge of computer terms, information, and the history of
      the developments of computers.   While this program is scored as a
      game, the primary objective is for the player(s) to learn.

      During the game, each player will answer a question in turn. There
      are five possible answers to each question. If the player does not
      know the answer, they can get a hint on the question. The hint can
      provide fascinating information about the possible answers. Should
      the player select the hint, then the player receives no credit for
      answering the question. The hint can be viewed after answering the
      question without penalty.

      The scoring of the game is simple.  Each player receives one point
      for each correctly answered question.  If the player read the hint
      before answering, no point will be awarded.






				REQUIREMENTS

      The disk should contain the following files:

		README.
		QUIZ.DOC
		QUIZ.EXE
		QUIZ.FRM


      In order to play the game you must have the following:

	- An IBM Personal Computer XT or AT or compatible computer.

	- The computer must have 320K of RAM.

	- Your computer must run the PC-DOS or MS-DOS operating
	  system at version 2.0 or higher.

	- Monochrome monitor with graphics or a color monitor.




			     WHAT'S IN EACH FILE?

	README   - This should be the first file you read!

	QUIZ.EXE - This is Computer Trivia Quiz.  Typing `QUIZ' in the
		   directory with this file will execute the program.

	QUIZ.DOC - This is the online manual for Computer Trivia Quiz.
		   This is the file that you are reading currently, if
		   there is information you need to know it is in this
		   file.  Registered users will receive a printed copy
		   of this online manual.

	QUIZ.FRM - This is a one page registration form.    Should you
		   decide to keep this program after reviewing it, you
		   should register with Shoestring Software.  This one
		   page registration form can be printed on almost any
		   printer. QUIZ.FRM is a text file.  QUIZ.FRM doesn't
		   contain any special symbols or format characters.





			     INSTALLING THE PROGRAM

      Before installation or playing the game, it is recommended that you
      make a backup of the original disk that you received.  Instructions
      for the DOS command "DISKCOPY" are displayed on the next page.

      If you need to make a bootable copy do the following:

	 - Format a blank disk with the /s option.

	 - Copy README and quiz.* to that disk.

	 - DO NOT enable the write protect on the disk.

      The program maintains a history of which questions were asked, when
      they were asked and whether they were answered correctly.  Computer
      Trivia Quiz has a finite number of questions.   This information is
      maintained in a file named TRIVIA.HST. The program will create this
      file if it is not found in the current directory.  Since TRIVIA.HST
      is updated after every round, you must not write protect the disk.








				USING DISKCOPY

      The procedure to use to make a backup disk is as follows.   If your
      diskette works in drive A:, then enter the following command:

	   DISKCOPY A: A:

      If your diskette works in Drive B:, enter the following command:

	   DISKCOPY B: B:

      You will need one blank floppy disk for this operation.    The disk
      can be unformatted.  The DISKCOPY command will tell you what to do.





			  HARD DRIVE INSTALLATION:

      If you wish to install Computer Trivia Quiz on your hard drive, use
      your experience or follow these instructions or some combination of
      the two.

	- Place the diskette into your floppy drive.

	- Select the drive which you which to install the software.
	  In this example, we will assume that the drive is C>.

	- Change to the C> drive by entering:   C:

	- Change to the root directory by entering:   CD \

	- Make a directory for Computer Trivia Quiz program:   MD QUIZ

	- Change to the QUIZ directory by entering:   CD QUIZ

	- Copy the diskette to your new QUIZ directory.  If the floppy
	  with Computer Trivia Quiz is located in the `A:' drive, type
	  in the following command:   COPY A:*.*










				 CONVENTIONS

      The keys on the keyboard are referred to in this document within
      < >.   For example, the Escape key is <Escape> and return key is
      <Return>.    The function keys on the top OR along the left side
      of your keyboard are referred to in this document and within the
      program by <Fn>, where n is the number of the function key.  For
      example, function key number one is referred to as <F1>.












			       PLAYING THE GAME

      The game can be played by up to six players.   Begin the game by
      selecting the drive and directory where the game is installed.
      Then type:  QUIZ

      After the initial copyright screens,  a screen will be displayed
      which requests that you  "Enter the number of Players:"   Please
      enter the number of players (range: 1 to 6) by typing the number
      followed by the <ENTER> or <RETURN> key.

      The names of each player are asked for next.    One by one, each
      player can enter his or her name.    Please note: The order that
      these names are entered is the order in which the questions will
      be asked.







				WELCOME SCREEN

      The next screen welcomes the players to the game.     There is a
      menu at the bottom of the screen which displays what key options
      are available.  The screen shows:

		<ESC> = Exit, <F1> = Play Game, <F2> = Options

      If at this time, the player(s) wants to exit the game, the <ESC>
      key can be used.

      Hitting function key number one <F1> will begin the game.

      Hitting function key number two <F2> will allow you to customize
      the game.







		      OPTIONS IN COMPUTER TRIVIA QUIZ

      Quiz has some options that can be set before the game is played.
      Hit Function key number 2 <F2> to display the options menu.  The
      options screen that is displayed defaults as shown below:

	   Music                           Yes
	   Sound                           Yes
	   Nice Comments                   Yes
	   Caustic Comments                No
	   Use History                     Yes
	   Display Correct Answer          No
	   Limit time per Question         No
	   Seconds per Question            30

      The bottom menu bar of the screen displays the `valid' input for
      this screen.  It appears as:

	   <Enter> to toggle, <Esc> to exit, ^ - Up, ^ - Down

      Most of these options are either enabled (Yes) or disabled (No).
      The initial settings of these options is shown above.




				MUSIC OPTION # 1

	 Music  -  When this option is set to Yes, a little tune will
		   be played when the question is answered.   No tune
		   is played when this option is set to No.


				SOUND OPTION # 2

	 Sound  -  When this option is set to Yes,  a Beep sound will
		   be heard when an incorrect key is hit.   This just
		   means that one of the correct keys must be entered
		   before the program can continue.  When this option
		   is set to No, no beeps will be heard, however, the
		   program will still not continue, until a valid key
		   is entered.







			   NICE COMMENTS OPTIONS # 3

	 Nice Comments - This option, when set to "Yes", will display
			 friendly praise-type comment when a question
			 is answered correctly.   If set to "No", the
			 generic "you got it right" is displayed.


			   CAUSTIC COMMENTS OPTION # 4

	 Caustic Comments - Those players who love insults should set
			    the Caustic Comments option to "Yes".  If
			    set to yes,  an insulting comment will be
			    displayed at random intervals when player
			    gets the answer incorrect. If set to "No"
			    the generic "you got it wrong" comment is
			    displayed.






			     USE HISTORY OPTION # 5

	 Use History - The questions appearing in each game are chosen
		       in one of two ways.  The first way is by random
		       choice.   The second keeps a history of all the
		       questions that the players have been asked  and
		       "ages" them.   The program then selects heavily
		       from the "older" questions. There is randomness
		       in this feature, so questions will not be asked
		       in the same order. If set to "Yes", the history
		       of questions asked will be used. If set to "No"
		       the  random question selection strategy will be
		       used. Option is set to "Yes" by default.


			DISPLAY CORRECT ANSWER OPTION # 6

	 Display Answer - When this option is set to "Yes" the program
			  will display the correct answer whenever the
			  player misses the question.   If set to "No"
			  this information will not be displayed.





		       LIMIT TIME PER QUESTION OPTION # 7

	 Limit time - This option selects whether players must respond
		      within a time limit set for the game.   When on,
		      each question must be answered before the limit,
		      or the player will get the question wrong.  When
		      this option is set to "NO", each player can take
		      as much time as they want.    The amount of time
		      can be set in option number 8.


			SECONDS PER QUESTION OPTION # 8

	 Seconds - This option provides the time limit (in seconds) by
		   which the question must be answered.    This option
		   can be set in the range from 10 to 600 seconds.   A
		   time limit is only used if the option number 6, the
		   "Limit time per Question" option, is set to "Yes".













				HOW TO CHANGE OPTIONS

      To change the options, use the up and down cursor keys to position
      the cursor on the option you wish to change.    The current option
      will be displayed in inverse colors.  Once positioned, to change a
      "Yes" or "No", simply hit the <Enter> or <Return> key.

      To change the `seconds per question'  option, just type in the new
      time limit desired, then press the <Enter> or <Return> key.

      To exit the options menu, press the <Escape> key. The options that
      are displayed on the screen will be valid.



	 COMPUTER TRIVIA QUIZ DISTRIBUTION AND LICENSING AGREEMENT

  This disk may be freely copied and distributed.    However, if you wish to
  charge a minimal fee for a copy of Computer Trivia Quiz, you must have the
  written permission of Shoestring Software.     Applications should include
  your statement of consent to the terms below in exchange for authorization
  to distribute Computer Trivia Quiz as shareware.  Send an application to:

			Shoestring Software
			P.O. Box 43800
			Las Vegas, NV  89116.

  Please include $10 for processing. Authorization will be granted upon your
  meeting the following conditions.

     1.)  The distributor's advertising must explain that the program
	  is shareware.   Advertising must state that the software is
	  copyrighted and that the shareware distributor is providing
	  the program for evaluation purposes.   It must explain that
	  further use of the program DOES requires registration.

     2.)  The authors maintain the right to withdraw the program from
	  distribution.

				  SUPPORT

      Shoestring Software is an undertaking by two programmer types who
      work full time jobs.  We pledge fast replies to any question sent
      us by mail.   Shoestring Software regrets that at this time there
      is no way we can offer phone support.  If you should write us for
      assistance, please include all of the following information about
      your system:  brand,  memory,  speed, processor type,  version of
      DOS,  video adapter card,  monitor,  and as complete and detailed
      a description of the problem as possible.  Those who have already
      registered, please include your registration number.  All queries
      and comments should be directed to this address:

				Shoestring Software
				P.O. Box 43800
				Las Vegas, NV  89116.

      Those that question our pledge of support as too general and less
      than specific will appreciate the following.  Shoestring Software
      will provide 180 days of support via the U.S. Postal Service. The
      period of support begins the day we process your registration. If
      you, like us, detest legaleeze, then you  have our honest  pledge
      of support!





			  REQUEST FOR USER SUPPORT

      Shoestring Software requests your support as well.  Yes, we would
      like it if you registered but we would also like to hear from you
      about are product.  If you don't decide to keep our program after
      you have reviewed it, we'd like to know why. If you think of ways
      it could be improved please tell us.  If you know of a subject or
      question we could use, please write us.    Our goal is to develop
      software that educates and informs while being FUN!  Anything you
      can think of that would add to the enjoyment or educational value
      of Computer Trivia Quiz would be appreciative.   Any suggestions,
      questions or comments should be directed to this address:

				Shoestring Software
				P.O. Box 43800
				Las Vegas, NV  89116.






			   FINAL PLEA TO REGISTER

      This program is distributed as shareware.   If you decide to keep
      this program, you have a moral obligation to send us money.   The
      only way that the shareware concept and continued quality and low
      cost software will be available is if a fair portion of the users
      meet this obligation.  A portion, smaller than it should be, will
      always register shareware they use.   This plea is to the rest of
      you!

      You liked the program, you have decided to keep it around.  There
      will come a time when it will be handy.  You'll dazzle Uncle Fred
      by playing him a game of Computer Trivia Quiz.  Just wait till he
      visits again.  You'll play till you've learn every question.  You
      will prey upon any other computer user who happens by.   You will
      use this program to trade with to your friend for other programs.
      You are requested to register your program, BUT, nobody is making
      you register so you decide to save the $20.00. This plea's for U.





			     THIS PLEA'S FOR U!

      When you register you will receive the very latest updated version
      of this program.   You will also receive information on additional
      products offered by Shoestring Software.  You will receive a type-
      set manual for this product.    You will receive a really exciting
      colorful tee shirt that you can proudly wear.

      The registration fee is only $20.00.  We ask you to print the file
      QUIZ.FRM on your printer.  Please fill in the form with your name,
      address, system configuration, and any comments.

      Mail your registration to:

				Shoestring Software
				P.O. Box 43800
				Las Vegas, NV  89116

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

                     Computer Trivia Quiz
                         Version 1.0
             Copyright 1991 by Shoestring Software

      This file contains  information for  anyone  who  wishes to
      distribute  Computer  Trivia Quiz.  If you are a Shareware
      Distributor, Disk Vendor, BBS Sysop, or User Group, please
      read this, as this applies to you.  
 
      Description of Program (brief):  Comuputer Trivia Quiz is a 
      unique and fun learning game in which one to six players can 
      match their knowledge about computer terms, history, famous 
      figures, and other computer-related trivia.  Players can 
      learn much, as there is an informative explaination for
      each question.

Detailed Program Description:    Computer Trivia Quiz is a learning game
-----------------------------    for people of all ages, computer skill,
      education level, and user experience.  The program allows the user
      to test his/her knowledge of computer terms, computer history, our
      famous and not so famous founders, ground-breaking events, trivia,
      etc.  Computer Trivia Quiz is written for those who wish to become
      more computer literate.

      The range of subjects is wide. They cover computing from the stone
      age (Stonehedge) to questions about DOS (name a command new to DOS
      3.3).  The questions are designed to provide an enjoyable exercise
      in learning about early microcomputers (remember the Altair?), the
      various computer models (what was the first operational electrical
      DIGITAL computer?), individuals important in computer history (who
      was the first programmer?), computer inventions, their inventors &
      trivia (like how did the name Winchestor come up for hard drives),
      software (who wrote Applewriter?) and much much more!!!

      Computer Trivia Quiz is organized as multiple choice game in which
      up to six players can play.  When answering a question, the player
      can look at the "hint".   The hints are full of useful information
      and make an enjoyable reading and learning tool!  Questions, hints
      and answers (correct and incorrect) were written with the intended
      goal of increasing the users understanding of computers, no matter
      what level of computer knowledge and sophistication the individual
      user possesses.

      Those that are experts with computers can learn interesting things
      from this program.  Beginners can quickly develop a literacy about
      computers which will surely amaze their friends.  Do you know what
      kind of a bug the first computer bug was?  (hint: it was alive and
      crawled into a relay...)   Try this program!!!   We think you will
      agree that there's lots of neat things in this one!!!   We believe
      you will have fun!  Guru level individuals looking for a challenge
      should set the time limit to 10 seconds and see how many questions
      in a row they can get correct.


Shoestring Software Distribution Policy:

Anyone distributing this package must provide all of the following files
unmodified:  README, QUIZ.DOC, QUIZ.EXE, and QUIZ.FRM.  Shareware vendors
can add files to the package that assist in the ease of use or distribution
of the package.  

Computer Trivia Quiz cannot be sold as part of some other inclusive
package.  Nor can it be included in any commercial software packaging
offer, without a written agreement from Shoestring Software.
 
ASP Approved vendors:   If you are an ASP approved vendor, you have the 
permission of Shoestring Software to distribute Computer Trivia Quiz
provided that:  all of the above files are included in the distribution disk,
the cost of distribution is reasonable,  and the vendor tells us of their
intention to distribute.  We request that the vendor send us the first
catalog in which our product is listed.  

Non ASP Approved Vendors:  If you wish to distribute the shareware version
of Computer Trivia Quiz, please fill out an application for distribution
approval and send to our registration address.  A copy of your catalog
will help us decide.  There is a $10 fee for processing.  After evaluation
we will notify you of our decision.  Refer to file QUIZ.DOC for additional
information on the requirements.  Please let us know what version you 
have, so we can send you the latest if you don't have it.

Non-profit user groups:  If your non-profit user group wishes, it
can distribute the complete shareware version of Computer Trivia Quiz.  A
reasonable charge for the disk and copying may be charged.  You must 
include ALL of the files in the distribution package.
 
BBS:  Any BBS may redistribute this complete shareware package.  If possible,
we ask that you let us know where and how to access it.  An ASP membership
is not necessary for BBS distribution.


All distribution inquires and information should be sent to:
  
                Shoestring Software
                P.O. Box 43800
                Las Vegas, NV  89116

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2887

     Volume in drive A has no label
     Directory of A:\

    TRIVIA   ZIP    199091  12-12-91   4:35p
    MOVIES   ZIP     93414  12-13-91  12:49p
    PKUNZIP  EXE     23536   1-16-91  12:38p
    FILE2887 TXT      4663  12-13-91  12:55p
    GO       TXT      1771  12-13-91   1:50p
    GO       BAT        63  12-13-91   1:22p
    GO1      TXT      1386  12-13-91   1:48p
            7 file(s)     323924 bytes
                           34816 bytes free
