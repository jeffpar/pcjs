---
layout: page
title: "PC-SIG Diskette Library (Disk #1144)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1144/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1144"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPELL GAMES"

    SPELL GAMES is a spelling game set in the scenario of the World
    Olympics.
    
    The program temporarily flashes a word in the corner of the screen, and
    you must type it correctly in order to win the round.  If a mistake is
    made in typing, you immediately lose the round.  SPELL GAMES has four
    levels of difficulty in its selection of words to spell and you can
    select the amount of time the word flashes on the screen each time.
    
    You have eight countries to choose from to represent your team and your
    opponent.  SPELL GAMES has interesting color graphics and even plays
    different types of music depending on the country you choose to
    represent your team.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1144.TXT

{% raw %}
```
Disk No: 1144                                                           
Disk Title: Spell Games                                                 
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Spell Games                                              
Author Version: 1.0                                                     
Author Registration: $19.00                                             
Special Requirements: CGA.                                              
                                                                        
SPELL GAMES is a spelling game set in the scenario of the World         
Olympics.                                                               
                                                                        
The program temporarily flashes a word in the corner of the screen, and 
you must type it correctly in order to win the round.  If a mistake is  
made in typing, you immediately lose the round.  SPELL GAMES has four   
levels of difficulty in its selection of words to spell and you can     
select the amount of time the word flashes on the screen each time.     
                                                                        
You have eight countries to choose from to represent your team and your 
opponent.  SPELL GAMES has interesting color graphics and even plays    
different types of music depending on the country you choose to         
represent your team.                                                    
                                                                        
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
║                  <<<<  Disk No 1144 SPELL GAMES  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type: COPY SPELL.DOC PRN  (press enter).        ║
║                                                                         ║
║ To start the program, type: SPELL (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SPELL.DOC

{% raw %}
```







                                DOCUMENTATION FOR

                                   SPELL GAMES




                               (C) Alan C. Elliott
                                    TexaSoft
                                  P.O. Box 1169
                             Cedar Hill, Texas 75104



          DESCRIPTION OF THE PROGRAM
          ________________________________________________________

          SPELL GAMES is a SHAREWARE program.  This means that you
          may copy it and give it to friends, and that user groups
          and bulletin boards may distribute it (as long as no files
          have been altered). This gives you a chance to try the
          program without having to spend money up front for something
          that may not meet your needs.  If SPELL GAMES is useful to
          you, please become a registered user by sending in the
          registration form.  Thank you.

          SPELL GAMES is a game to help you learn how to spell.  The
          game displays a word on the screen for an instant, then
          you must spell the word by typing it on the keyboard.

          The game pits your country against an opponent.  Each time
          you spell a word correctly, your team wins a point.  If
          you make a mistake, your opponent gains a point.  A board
          containing nine flags must be filled for one team to win.

          When you begin SPELL GAMES, you will choose your country
          (your team), and your opponent.  Next, you will choose the
          level of difficulty of words to spell.  Typically, your
          choices will be:

          1) Very easy words
          2) Easy words
          3) Moderately difficult words
          4) Difficult words

          After you choose one of these options, you must then
          choose the speed at which the words will be flashed on the
          screen, a value between 1 and 100.  The number 1 is the



                                        1





          SLOWEST, and 100 is the fastest.  Try about 50 to begin
          with, and adjust the speed later to your expertise.

          The program will warn you that the spelling word is about
          to flash on the screen.  When you press the Enter key, a
          word will appear in the lower left corner of the screen.
          The word will flash off quickly, and you will hear a short
          beep.  Now the program is ready for you to type the word.

          If you make a mistake while entering the word, your
          opponent gets the point.  The scoreboard on the screen
          will keep track of who is winning.  Remember, it takes 9
          points (flags) to win.


          HOW TO RUN SPELL GAMES
          ________________________________________________________

          Running the program from a floppy disk:

          Place the program disk in the A: disk drive.  Make sure
          the DOS prompt is A>.  If it is not, enter the command
          "A:" (no quotes).  At the A> prompt, enter SPELL

          A>SPELL

          This will begin the program.  Following directions on the
          screen.

          Running the program from a hard disk:

          Copy all of the SPELL GAME files to a directory on the
          hard disk.  Be sure the files SPELL.ACE, SPELL1.ACE,
          SPELL2.ACE, SPELL3.ACE, SPELL4.ACE, SPELL.ORD, FLAGS.ACE,
          and SPELL.EXE are copied to the hard disk.  From the C>
          prompt, enter the command:

          C>SPELL

          This will begin the program.  Following directions on the
          screen.












                                        2





          ADDITIONAL INFORMATION ABOUT SPELL GAMES
          ________________________________________________________


          Spelling words for this game have been carefully selected.
          Please do not alter the files SPELL1.ACE to SPELL4.ACE.

          If you wish to add spelling files, you may do so with the
          following technique:

          The names of the files to be used in SPELL GAMES are
          contained in the file named SPELL.ACE.  Its original
          contents is:

          ---------------------------------------------
          |spell1.ace, Very easy words                |
          |spell2.ace, Easy words                     |
          |spell3.ace, Moderately difficult words     |
          |spell4.ace, Difficult words                |
          ---------------------------------------------

          Each of these four files contains lists of words.  To add
          your own spelling file, for example, named MYFILE.ACE
          containing legal words, you would add a new line to the
          file SPELL.ACE:

          myfile.ace, Legal Words

          Then, you would place a file on disk named myfile.ace
          containing the words you want to be included in the SPELL
          GAMES program.  The option "Legal Words" will be added to
          the SPELL GAMES menu options.





















                                        3





          REGISTRATION INFORMATION FOR SPELL GAMES
          ________________________________________________________

          By becoming a registered user, you not only help promote
          Shareware, you will also receive a disk the latest copy of
          SPELL GAMES and other programs from TexaSoft.


          Registration for SPELL GAMES ($19)           $____________
          Includes disk of other programs.

          Texas Residents add 7%  sales tax            $____________

          Add $2.00 Postage and Handling or
          PO, COD, Rush: add $4, Overseas add $5.00    $____________

          TOTAL ENCLOSED                               $
                                                        ============
          Payment method:check one
          _____ Check or M.O.         _____ Credit Card (MC or VISA)
          ------------------------------------------------------------
          IF CREDIT CARD:

          Name on Card:_____________________________________________

          Type Card is __________________  Exp Date is:_____________

          Card Number is:___________________________________________

          Authorized Signature:_____________________________________
          -----------------------------------------------------------

          Mail order to:____________________________________________

          Address:__________________________________________________

          City:___________________ St_______ ZIP ___________________

          Phone (    )______________________________________________
          -----------------------------------------------------------
          Where did you get SPELL GAMES?_____________________________
          -----------------------------------------------------------
          Please mail to:TexaSoft, Post Office Box 1169, Cedar Hill,
          Texas 75104. Thanks.  Phone orders call 214-291-2115.

                                   MAIL TODAY!






                                        4

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1144

     Volume in drive A has no label
     Directory of A:\

    FILE1144 TXT      2073   2-15-90   7:10p
    GO       BAT        38   9-30-88   4:16p
    GO       TXT       540   1-01-80  12:42a
    SPELL    ACE       128   1-01-90  12:04p
    SPELL    DOC      7320   1-01-90  12:04p
    SPELL    EXE     83971   1-01-90  12:04p
    SPELL    FLA      8960   1-01-90  12:05p
    SPELL    ORD      1946   1-01-90  12:04p
    SPELL1   ACE      2358   1-01-90  12:04p
    SPELL2   ACE      3456   1-01-90  12:04p
    SPELL3   ACE      3712   1-01-90  12:04p
    SPELL4   ACE      8832   1-01-90  12:04p
           12 file(s)     123334 bytes
                           32768 bytes free
