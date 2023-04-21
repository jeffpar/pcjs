---
layout: page
title: "PC-SIG Diskette Library (Disk #1333)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1333/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1333"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BALLOON SPELLER"

    Your kindergarten or early elementary student will delight in these
    three happy games that teach spelling. Make 20-word lists of the words
    you want your child to learn and sit back while your PC turns into an
    infinitely patient tutor.
    
    In one game, the word flashes for an instant on the screen. The child
    pilots a balloon around the screen, picking up the correct letters to
    rebuild the word. If the child forgets the word, you can flash it again
    by pressing the space bar. The second game is like the first, except
    that each flashing of the word costs a point. In the last game, the
    letters are scattered about the screen and the game
    resembles Hangman.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BSPELL.DOC

{% raw %}
```
         
         
         
         
         
         
         
         
         
         
         
         
                                 User's Guide For:
         
         
                                  BALLOON SPELLER
         
         
         
         
         
         
                                (c) 1989 by KIDware
         
                        Portions (c) 1988 by Microsoft Corp.
         
         
         
         
         
         
         
                                      KIDware
                              1380 156th NE, Suite H2
                                 Bellevue, WA 98007
                                   (206) 725-4859
         
         
         
         BALLOON SPELLER User's Guide - Page 2
         
         
                                  BALLOON SPELLER
         
             BALLOON SPELLER is a program for home or school.  You can 
         play three different spelling games using lists of words you 
         input or any of the 70 built-in lists.  In each game, you move a 
         hot air balloon around the screen picking up the letters you 
         need.  In "Word Flash," the word to be spelled is flashed to you 
         and then you spell the word.  In "Word Jumble," the letters of 
         the word are scattered around -- you pick them up in proper 
         order.  And, in "Word Guess," you guess the letters in the word 
         to be spelled (a Hangman type game).  
         
         
         COMPUTER REQUIREMENTS AND INSTALLATION PROCEDURE:
         
             To use BALLOON SPELLER, you need an IBM compatible computer 
         with at least 256K of memory, at least one floppy disk drive, 
         DOS 2.0 (or higher), and color or monochrome graphics.  Before 
         using the program, you must do two things:  install the program 
         on your disk, then configure the program to your particular 
         system.  Depending on the number and types of disk drives you 
         have, follow the given instructions for installing the programs. 
         
         
         INSTALLATION ON SINGLE FLOPPY DRIVE SYSTEM: 
         
             Working with a single drive system can be tricky.  Please 
         pay close attention to instructions provided.     
         
         
              1.  Place DOS disk in drive A and start system.
              
              2.  You first need to format a disk and put a copy of 
                  the operating system on it.  Type: FORMAT A:/S 
              
              3.  Replace DOS disk with blank disk and follow 
                  instructions provided by computer.    
              
              4.  When formatting is complete, replace blank disk 
                  with BALLOON SPELLER disk and type: COPY A:*.* B:  
                  This will allow you to copy the files from the 
                  BALLOON SPELLER disk (referred to by DOS as disk 
                  A) to your newly formatted disk (referred to by 
                  DOS as disk B).  Follow instructions provided by 
                  computer.
              
              5.  Installation is now complete.  Put the original 
                  copy of the BALLOON SPELLER disk in a safe place; 
                  you will always use your copy.  Now, place that 
                  copy of the program in drive A and proceed to 
                  configuration instructions. 
                  
              
         
         
         BALLOON SPELLER User's Guide - Page 3
         
         
         INSTALLATION ON DUAL FLOPPY DRIVE SYSTEM: 
         
             Pay close attention to instructions provided.     
         
         
              1.  Place DOS disk in drive A and blank disk in drive 
                  B; start system.   
              
              2.  You first need to format a disk and put a copy of 
                  the operating system on it.  Type: FORMAT B:/S   
              
              3.  Replace DOS disk in drive A with BALLOON SPELLER 
                  disk.  Type: COPY A:*.* B:  This will allow you to 
                  copy the files from the BALLOON SPELLER disk in 
                  drive A to your newly formatted disk in drive B.  
              
              4.  Installation is now complete.  Put the original 
                  copy of the BALLOON SPELLER disk in a safe place; 
                  you will always use your copy.  Now, place that 
                  copy of the program in drive A and proceed to 
                  configuration instructions.  
              
              
              
         INSTALLATION ON HARD DISK SYSTEM: 
         
             Pay close attention to instructions provided.     
         
         
              1.  Start system.   
              
              2.  You first need to create a directory for the 
                  programs.  At C: prompt, type:  MKDIR C:\SPELL\  
                  This creates a directory named SPELL on your hard 
                  disk (you may use another name if you want).  Now, 
                  move to that directory by typing: CD C:\SPELL\   
              
              3.  Place BALLOON SPELLER disk in floppy drive A.  
                  Type: COPY A:*.* C:  This will allow you to copy 
                  the files from the BALLOON SPELLER disk to your 
                  hard disk.   
              
              4.  Installation is now complete.  Put the original 
                  copy of the BALLOON SPELLER disk in a safe place.  
                  Proceed to configuration instructions. 
                      
             
         
         
         BALLOON SPELLER User's Guide - Page 4
         
         
         CONFIGURATION INSTRUCTIONS: 
         
             To configure the program to your system, place your copy of 
         the program disk in drive A (or go to directory C:\SPELL\ on a 
         hard disk) and type:  BSCON 
         
             You will be asked two (or three) questions; answer 
         accordingly.  The first question asks you if you have color 
         graphics (press 1) or Hercules monochrome graphics (press 2).  
         If you have both, press 1 and use color graphics, because the 
         monochrome graphics simulator will not work properly when both 
         color and monochrome graphics cards are installed.  The second 
         question asks if you have a single floppy system (press 1), a 
         dual floppy system (press 2), or a hard drive system (press 
         3).  If you answer dual floppy system (2), you will then be 
         asked which letter designates the drive you will be storing 
         your spelling lists on (press A, B, C, D, or E).   
         
             Once the program is installed and configured, you can run 
         it.  Please note if you ever change your system configuration, 
         you should rerun the configuration program.  
         
         
         PROGRAM RUNNING INSTRUCTIONS: 
         
             Running the program is simple.  If you are using floppy 
         drives, place your copy of the program disk in a drive.  If 
         using a hard disk, move to the proper directory by typing:  
         CD:\SPELL\  Type BS and press <Enter>.  The program will begin 
         running after a few seconds of loading some needed files.  Once 
         the title screen appears, press any key to continue.  (If the 
         title screen is unreadable, rerun the configuration program 
         making sure you answer the question concerning graphics 
         correctly.)   
         
         
         
         
         
         BALLOON SPELLER User's Guide - Page 5
         
         
         SPELLING LIST EDITOR MENU: 
         
             The first screen to appear is the list editor menu.  You 
         have six choices: 
         
         
              1.  Input new word list:  choose this option to input 
                  a new list.  The use of the list editor is quite 
                  straightforward.  All instructions are provided in 
                  the program.  The cursor control keys move you 
                  around the list, the <Enter> key moves you from 
                  word to word, the <Space> bar deletes characters 
                  in a forward direction, the <Backspace> key 
                  deletes in the reverse direction, and the slash 
                  key (/) ends the editing session.  Once the list 
                  is input, you may save it on disk or print it 
                  out.  Note when saving a list, the list name must 
                  begin with a letter and be no more than 8 
                  characters long. 
              
              2.  Edit current word list:  choose this option to 
                  change/save/print the list currently being used by 
                  the program.  You can add new words or delete old 
                  ones.  To delete a word simply blank it out using 
                  the space bar or backspace key.  The program will 
                  close up any gaps left in the list.  To add a 
                  word, type it in a blank space or type over an 
                  unwanted word. 
              
              3.  Read user list from disk:  choose this option to 
                  read in a list you have previously saved using the 
                  list editor.  The files you have stored (maximum 
                  of 54 files per disk) will be listed.  Use the 
                  cursor keys to point to the file you wish to read 
                  in, then press <Enter>.  Once read in, you may 
                  edit/save/print that list. 
              
              4.  Use built-in list:  choose this option to use one 
                  of the 70 built-in spelling lists.  There are 10 
                  lists for each grade level from K to 6.  The 
                  program will first ask which grade level 
                  (K,1,2,3,4,5,6) and then which particular list (1-
                  10).  The built-in spelling lists cannot be 
                  changed. You may, however, read in a built-in 
                  list, modify it and then save it to your own disk 
                  for future use. 
              
         
         
         BALLOON SPELLER User's Guide - Page 6
         
         
               5. Change cursor/letter input option:  choose this 
                  option if you want to change the method of 
                  inputting your answers in the spelling games.  
                  There are two input options.  With the Cursor 
                  Input option, you use the cursor control keys to 
                  move the hot air balloon around the screen picking 
                  up letters.  This option requires no keyboarding 
                  skills.  Using the Letter Input option, you simply 
                  press the desired letter on the keyboard and the 
                  balloon will move and pick up that letter.  This 
                  option results in faster game play and helps teach 
                  letter locations on the keyboard.  We suggest the 
                  Cursor Input option for younger children, while 
                  older children like the faster play of the Letter 
                  Input option.  Default option is Cursor Input.
              
              6.  Go to Game Selection Menu:  choose this option to 
                  select a game to play.  You may only choose this 
                  option if a word list has been input or 
                  selected.   
                  
              
             The final option from the list editor menu is stopping the 
         program (press 0); select this option when you no longer want 
         to use the program.  Once your spelling list is selected and 
         ready and the desired input option is chosen, you should 
         proceed to the Game Selection Menu. 
         
         
         
         
         
         BALLOON SPELLER User's Guide - Page 7
         
         
         GAME SELECTION MENU: 
         
             You may choose from three different games.  In each game, 
         every word on the spelling list will be used (unless you stop 
         the game before completing the list).  Also, in each game, you 
         maneuver a hot air balloon around the screen picking up the 
         desired letters.  If using the Cursor Input option, the cursor 
         control keys are used to move the balloon.  Once the letter you 
         want is in the balloon's basket, press <Enter> to pick it up.  
         If using the Letter Input option, press the desired letter on 
         the keyboard.  The balloon will move to that letter and pick it 
         up.  To stop any of the games, simply press the slash (/) key.  
         These instructions are also printed on each game screen. 
         
             The three games that can be played are: 
         
         
              1.  Word Flash:  In this game, you first flash the 
                  word to be spelled by pressing the <Space> bar.  
                  You must then pick up, in proper order, the 
                  letters to spell the word.  If you make a mistake 
                  and pick up a letter out of order, an 'uh-oh' is 
                  heard.  You are allowed three mistakes before you 
                  are given the proper spelling.  If you need help, 
                  you may press the <Space> bar to flash the word 
                  again.  But note each additional flash counts as 
                  one mistake. 
              
              2.  Word Jumble:  Here, the letters to spell the word 
                  are scattered about.  You must spell the word by 
                  picking up the letters in proper order.  Incorrect 
                  letters count as one mistake.  The word may be 
                  flashed by pressing the <Space> bar, but each 
                  flash counts as one mistake.  You are allowed a 
                  maximum of three mistakes per word. 
              
              3.  Word Guess:  A game like Hangman.  You guess at 
                  letters in the word.  If your guess is correct, 
                  the letters are shown in their proper position.  
                  If your guess is incorrect, you continue.  If you 
                  make more than five mistakes, the proper spelling 
                  will be given to you.  
                  
              
             You can return to the List Editor Menu screen from the Game 
         Selection Menu by pressing 4 and the program can be stopped by 
         pressing 0.   
         
             Once you have finished playing a game (either by trying all 
         words in the list or stopping the game), your score will be 
         given to you and a list of the words you had trouble with will 
         be provided.  At this point, you will be returned to the Game 
         Selection Menu. 
         
         
         
         
         
         BALLOON SPELLER User's Guide - Page 8
         
         
         HIDDEN MENU OPTION: 
         
             Realizing this program will usually be used by unattended 
         children, we have added an option that should prevent any 
         accidental or intentional stopping of the program or changing 
         of the spelling lists; it is the Hidden Menu option.  
         
             The Hidden Menu option works with the Game Selection Menu 
         only.  What the option does is turns off the ability to stop 
         the program (pressing 0) and the ability to return to the List 
         Editor Menu (pressing 4).  The option is turned off or on by 
         pressing <Ctrl>-H while in the Game Selection Menu.  Notice 
         that when the option is on, only one of the three games can be 
         selected and the message "HM On" appears at the lower right 
         hand corner of the screen.  When the option is off, the Menu 
         appears as normal. 
         
         
         GENERAL COMMENTS: 
         
             Some other things to be aware of concerning the program: 
         
         
              1.  When saving spelling lists on disk, please make 
                  sure the disk you want to save the list on is in 
                  the proper drive and the drive is ready.  The 
                  program contains some error trapping routines, but 
                  at times erratic behavior occurs when trying to 
                  read/write from/to a disk drive that is not 
                  properly ready.  
              
              2.  Similarly, when printing your list, make sure the 
                  printer is on-line and ready before starting the 
                  print option.  
              
              3.  If you need to abruptly stop the program at some 
                  point, pressing <Ctrl>-Break will accomplish 
                  this.  Note this will take you completely out of 
                  the program, so make sure you have saved any lists 
                  you may have input.  This option is disabled when 
                  using the Hidden Menu option described above.  
              
              
         
         
         BALLOON SPELLER User's Guide - Page 9
         
         
              4.  Note there are no provisions in the program for 
                  deleting unwanted spelling lists.  This was done 
                  for a purpose--we did not want children to have 
                  the ability to accidentally erase a needed list.  
                  To delete a file, you must use the DOS ERASE 
                  command (refer to your DOS manual).  Spelling 
                  lists are stored with the name you have given it, 
                  plus a .BSL extension.  So if you want to erase a 
                  file named LIST1 from the disk in drive A:, you 
                  would type ERASE A:LIST1.BSL at the DOS prompt.  
              
              5.  When using Hercules monochrome graphics, the 
                  screen may appear compressed; this is normal.  If 
                  any screen appears scrambled, you have to adjust 
                  your monitor's vertical and/or horizontal hold 
                  controls.
              
              
              
         WARRANTY INFORMATION: 
         
             The BALLOON SPELLER program has been written with care, but 
         there still may be bugs and problems.  If you find any such 
         problems, please let us know.  We cannot guarantee the program 
         is completely error free.  We do guarantee it will load and 
         run.  If, within one year of purchase, the programs fail to 
         load and run, simply return the original disk to us (postpaid) 
         for quick replacement. This warranty only applies to 
         manufacturing defects.  No further guarantees are expressed or 
         implied.  Also note that copying this disk, other than for 
         personal archival purposes, is strictly prohibited by US and 
         world copyright laws. For further information or help, contact 
         us at:   
         
                                      KIDware
                              1380 156th NE, Suite H2
                                Bellevue, WA 98007
         
                                  (206) 725-4859
         
         
         
         BALLOON SPELLER User's Guide - Page 10
         
         
                            BALLOON SPELLER ORDER FORM
         
             The commercial version of BALLOON SPELLER allows 20 words 
         per spelling list, has 70 built-in lists, has a printed user's 
         guide, and sells for just $11.95 ($12.95 for 3.5" disk).  
         Purchasing the commercial version also keeps you informed of 
         future program updates and new program releases.  If you use 
         the shareware version of BALLOON SPELLER and like it, we ask 
         that you purchase the commercial version.  Thank You!
         
         Name
              ----------------------------------------------------------
         
         Address 
                 -------------------------------------------------------
         
         City                               State        Zip 
              -----------------------------       ------     -----------
         
         Please send BALLOON SPELLER on:
         
                  5.25" disk ($11.95)          3.5" disk ($12.95)
         --------                     --------
         
         Washington residents must add 8.1% sales tax.  
         
         Payment Method:  
         
                   Check            Money Order          VISA/MasterCard
         ---------        ---------             --------
         
         Card Number                                  Exp. Date   
                     --------------------------------           --------
         
         Signature 
                   -----------------------------------------------------
         
         Where did you obtain your shareware copy of BALLOON SPELLER?
         
         
         ---------------------------------------------------------------
         
         Send order to:   KIDware
                          1380 156th NE, Suite H2
                          Bellevue, WA 98007
                          (206) 725-4859

```
{% endraw %}

## FILE1333.TXT

{% raw %}
```
Disk No: 1333
Disk Title: Balloon Speller
PC-SIG Version: S1.1

Program Title: Balloon Speller
Author Version: 2.02
Author Registration: $11.95 or $12.95.
Special Requirements: Hercules graphics.

Your kindergarten or elementary student will delight in these three
joyous games that teach spelling.  You make 20 word lists of the
words you want your child to learn and sit back while your PC turns into
a combination teacher and babysitter.

In one game, the word flashes for an instant on the screen.  The child
pilots a balloon about the screen to pick up the correct letters.  If
the child forgets the word, you can flash it again by pressing the space
bar.  The second game is played like the first except each flashing of
the word costs a point.  In the last game, the letters are scattered
about the screen and the game resembles Hangman.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## ORDER.DOC

{% raw %}
```
         
         
                            BALLOON SPELLER ORDER FORM
         
             The commercial version of BALLOON SPELLER allows 20 words 
         per spelling list, has 70 built-in lists, has a printed user's 
         guide, and sells for just $11.95 ($12.95 for 3.5" disk).  
         Purchasing the commercial version also keeps you informed of 
         future program updates and new program releases.  If you use 
         the shareware version of BALLOON SPELLER and like it, we ask 
         that you purchase the commercial version.  Thank You!
         
         Name
              ----------------------------------------------------------
         
         Address 
                 -------------------------------------------------------
         
         City                               State        Zip 
              -----------------------------       ------     -----------
         
         Please send BALLOON SPELLER on:
         
                  5.25" disk ($11.95)          3.5" disk ($12.95)
         --------                     --------
         
         Washington residents must add 8.1% sales tax.  
         
         Payment Method:  
         
                   Check            Money Order          VISA/MasterCard
         ---------        ---------             --------
         
         Card Number                                  Exp. Date   
                     --------------------------------           --------
         
         Signature 
                   -----------------------------------------------------
         
         Where did you obtain your shareware copy of BALLOON SPELLER?
         
         
         ---------------------------------------------------------------
         
         Send order to:   KIDware
                          1380 156th NE, Suite H2
                          Bellevue, WA 98007
                          (206) 725-4859

```
{% endraw %}

## README.DOC

{% raw %}
```
Welcome to BALLOON SPELLER!

The BALLOON SPELLER disk should have the following files:

     BSCON.EXE     BSPELL.DOC    BSPELL.EXE     C0.COM
     C1.COM        M0.COM        ORDER.DOC      README.DOC
     
We suggest you first print out the user's guide which is found in file 
BSPELL.DOC.  To do this, at the DOS prompt >, type: 

     TYPE BSPELL.DOC >PRN

This guide tells you everything you need to know about running and using 
the program.  Of particular importance, note you must run the 
configuration program BSCON.EXE before you can use the program (to do this 
enter the command BSCON at your DOS prompt).  The BSCON program will write 
two additional files to your disk:  BS.BAT and BSCON.DAT.  Once you have 
run the configuration program, the program is executed by simply typing 
BS.  We hope you enjoy the BALLOON SPELLER program.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1333

     Volume in drive A has no label
     Directory of A:\

    BSCON    EXE     46116  12-11-88   2:12p
    BSPELL   DOC     22057   6-13-89   7:22a
    BSPELL   EXE    117918   6-05-89   7:49p
    C0       COM       957   1-18-87   9:55p
    C1       COM         7   9-10-86  11:54a
    FILE1333 TXT       972  12-14-89  12:32p
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       540   3-06-89   2:00p
    M0       COM         7   9-10-86  11:55a
    MANUAL   BAT       147   3-06-89   2:00p
    ORDER    DOC      1990   6-13-89   6:46a
    README   DOC       868  12-11-88   3:20p
           12 file(s)     191617 bytes
                          123904 bytes free
