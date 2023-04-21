---
layout: page
title: "PC-SIG Diskette Library (Disk #1379)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1379/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1379"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VMS VOCABULARY MANAGEMENT SYSTEM"

    Create customized learning games for your children or students to help
    them improve their vocabularies, sharpen their spelling and learn new
    subjects.  A variety of educational games can be created suitable to any
    age level from six year olds to adult and covering almost any topic.
    
    The EDITOR allows you to compile facts and word lists you want used in
    the five different games.
    
    WORD SEARCH makes printed word search puzzles and anagram puzzles.  TEST
    PRINTER makes printed match-the-word-to-its-definition puzzles.  A
    sample included is STATES which challenges students to match the states
    of the United States with their associated capitals, mottos, state
    flowers and state birds.  Similarly the program could be used to learn
    other subjects, such as: presidents/important acts; foreign vocabulary
    words/English words; metric units of measure/English units; dates in
    history/important events; famous writings/their authors, etc.
    
    The other three customizable games are played on the computer.  QUIZZER
    tests players on words and their definitions.  FORTUNE provides a
    ``Wheel of Fortune'' game format where players compete to identify a
    word by guessing the letters of its definition.  SPELLER quizzes
    students on the spelling of words and includes the games FLASH and
    ANAGRAMS.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1379.TXT

{% raw %}
```
Disk No: 1379
Program Title:  VOCABULARY MANAGEMENT SYSTEM
PC-SIG version 1

Create customized learning games for your children or students to help
them improve their vocabularies, sharpen their spelling and learn new
subjects.  A variety of educational games can be created suitable to any
age level from 6 year olds to adult and covering almost any topic.

The EDITOR allows you to compile facts and word lists you want used in
the five different games.

WORD SEARCH makes printed word search puzzles and anagram puzzles.  TEST
PRINTER makes printed match-the-word-to-its-definition puzzles.  A
sample included is STATES which challenges students to match the states
of the United States with their associated Capitals, mottos, state
flowers and state birds.  Similarly the program could be used to learn
other subjects, such as: Presidents/important acts; foreign vocabulary
words/English words; Metric units of measure/English units; dates in
history/important events; famous writings/their authors, etc.

The other three customizeable games are played on the computer.  QUIZZER
tests players on words and their definitions.  FORTUNE provides a "Wheel
of Fortune" game format where players compete to identify a word by
guessing the letters of its definition.  SPELLER quizzes students on the
spelling of words and includes the games FLASH and ANAGRAMS.

Synopsis:  Create your own learning games and puzzles for improving
vocabulary, spelling and learning new subjects.

Usage:  Education/ Vocabulary/Spelling/Games/Teaching Aids.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

CAPITALS VMS  Word file with Capital data.
COMPUTER VMS  Word file with computer related info.
FORTUNE  CHN  Module for the FORTUNE game.
PSEARCH  CHN  Module for word search.
PTEST    CHN  Module for printer test option.
QUIZZER  CHN  Module for QUIZZER game.
README   DOC  User's manual for VMS.
SCI1     VMS  Word file with science topic 1.
SCI2     VMS  Word file with science topic 2.
SCI3     VMS  Word file with science topic 3.
SCI4     VMS  Word file with science topic 4.
SCI5     VMS  Word file with science topic 5.
SCI6     VMS  Word file with science topic 6.
SCI7     VMS  Word file with science topic 7.
SCI8     VMS  Word file with science topic 8.
SCREEN   COM  Runs the screen formats.
SCREENV  MS   Data file.
SCRN1    DAT  Data file for the screen format.
SCRN2    DAT  Data file for the screen format.
SOCST1   VMS  Social studies word file 1.
SOCST2   VMS  Social studies word file 2.
SOCST3   VMS  Social studies word file 3.
SOCST4   VMS  Social studies word file 4.
SPELL    CHN  Module for SPELL game.
SPELL1   VMS  Word/definition file for the spellings.
STATES   VMS  Word file with weather related info.
TITLE    COM  Command file to run the title.
VMS      Bat  Batch file to run VMS.s for text strings.
VMS      CHN  Main program.
VMS      PRN  Printer file for VMS.
VMSEDIT  CHN  Module for VMS EDITOR.
VMSGO    CHN  Module to run Main program.
VMSGO    COM  Subprogram file.
VTEMP    DIR  Backup file.
WEATHER  VMS  Word file.
WITWICS  VMS  Word file.
WIUSAICS VMS  Word file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```



                           The Ultimate Vocabulary Database

                   VMS is a VOCABULARY DATABASE program that is designed
     to help teachers, parents and students to learn vocabulary and
     spelling words.  It may also be used to learn any related set of
     words or ideas.  For example, the file STATES on the VMS disk is a
     listing of the States of the United States with their associated
     Capitals, mottos, state flowers and state birds.  Similarly the
     program could also be used to learn any other related items,
     Presidents / years in office, foreign vocabulary words / English
     words, Metric  units of measure / English units, Dates in history /
     important events, famous sayings / their authors, etc.

                   VMS is composed of an EDITOR, two printer output
     modules, WORDSEARCH and TEST PRINTER, and three game modules,
     QUIZZER, FORTUNE and SPELL.  This program is being used and revised
     continually and more modules will be added in the near future.

                   VMS is distributed under the SHAREWARE concept.  This
     simply means that I have given you the right to use this software,
     evaluate it and share it with your friends.  All that I ask in
     return is that you register the  program with me by sending a check
     for $20.00 to:
                   David G. Bodnar
                   26 Ralston Place
                   Pittsburgh, PA 15216

                   In return I will send you the latest version of the
     program, a disk containing many more VMS word lists, a complete
     printed manual, and a list of other educational computer programs
     that I have written.  I will also act as a clearing house for other
     VMS word lists that you and other users of the program create.  In
     return for your disk of files and $2.00 to cover shipping and
     handling, I will send you one or more disks of files that I have
     received from others.  

                   Registering the program will also give you the
     opportunity to have impact on the growth of the program.  I will be
     happy to consider ideas for revisions to the program including new
     VMS modules that you feel would be useful to you and others. 
     Please be very specific in describing your ideas.  Include sketches
     of screens, samples of what menus would look like, etc.

                                                 



























                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


                              Table of Contents


                   REFERENCE SECTION . . . . . . . . . . . . . . . .   1
                   Getting Started . . . . . . . . . . . . . . . . .   1
                   Title Page MENU . . . . . . . . . . . . . . . . .   1

                   EDITOR  . . . . . . . . . . . . . . . . . . . . .   2
                   l/s/k LOAD/SAVE/KILL  . . . . . . . . . . . . . .   2
                   b  BEGIN NEW FILE . . . . . . . . . . . . . . . .   2
                      using the SCREEN EDITOR  . . . . . . . . . . .   2
                   e  EDIT WORDS/DEFINITIONS . . . . . . . . . . . .   3
                   f  FIND WORD or PHRASE  . . . . . . . . . . . . .   3
                   a  APPEND WORDS . . . . . . . . . . . . . . . . .   3
                   o  ORDER ALPHABETICALLY . . . . . . . . . . . . .   3
                   d  DELETE WORD(S) . . . . . . . . . . . . . . . .   3
                   c  CHANGE CASE  . . . . . . . . . . . . . . . . .   3
                   n  NOTES  . . . . . . . . . . . . . . . . . . . .   3
                   m  MOVE . . . . . . . . . . . . . . . . . . . . .   3
                   x  EXCHANGE DISKS . . . . . . . . . . . . . . . .   4
                   =  FIND DUPLICATE WORDS . . . . . . . . . . . . .   4
                   z  DOS CALL . . . . . . . . . . . . . . . . . . .   4
                   u  SOUND ON/OFF . . . . . . . . . . . . . . . . .   4
                   v  VIEW . . . . . . . . . . . . . . . . . . . . .   4
                   q  QUIT . . . . . . . . . . . . . . . . . . . . .   4

                   WORD SEARCHER . . . . . . . . . . . . . . . . . .   5
                   l  LOAD . . . . . . . . . . . . . . . . . . . . .   5
                   b  BUILD WORD SEARCH  . . . . . . . . . . . . . .   5
                   d  DEVICE = SCREEN/PRINTER/DISK . . . . . . . . .   5
                   f  FORMAT . . . . . . . . . . . . . . . . . . . .   6
                   a  ANAGRAMS . . . . . . . . . . . . . . . . . . .   6

                   TEST PRINTER  . . . . . . . . . . . . . . . . . .   7
                   t  PRINT TEST . . . . . . . . . . . . . . . . . .   7
                   p  PRINT WORD/DEFINITION LIST . . . . . . . . . .   7
                   f  FORMAT FOR PRINTOUT  . . . . . . . . . . . . .   7

                   QUIZZER . . . . . . . . . . . . . . . . . . . . .   8
                   d  SET DIFFICULTY LEVEL (NOW 8 WORDS) . . . . . .   8
                   t  TIME - NOW 20 SECONDS  . . . . . . . . . . . .   8
                   n  NORMAL/SCRAMBLED DEFINITIONS - NOW  
                      NORMAL . . . . . . . . . . . . . . . . . . . .   8
                   w  WORDS OR NUMBERS . . . . . . . . . . . . . . .   8
                   b  BEGIN QUIZ . . . . . . . . . . . . . . . . . .   8
                   c  BEGIN CODE . . . . . . . . . . . . . . . . . .   8

                   FORTUNE . . . . . . . . . . . . . . . . . . . . .  10
                   p  PLAYERS = 1  . . . . . . . . . . . . . . . . .  10
                   e  ENTER PLAYER NAMES . . . . . . . . . . . . . .  10












                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


                   t  TIME - NOW 20 SECONDS  . . . . . . . . . . . .  10
                   b  BEGIN QUIZ . . . . . . . . . . . . . . . . . .  10

                   SPELL . . . . . . . . . . . . . . . . . . . . . .  11
                   d  SET DIFFICULTY LEVEL (NOW = 20)  . . . . . . .  11
                   f  BEGIN FLASH  . . . . . . . . . . . . . . . . .  11
                   b  BEGIN ANAGRAMS . . . . . . . . . . . . . . . .  11

                   TUTORIAL SECTION  . . . . . . . . . . . . . . . .  12
                   Starting VMS  . . . . . . . . . . . . . . . . . .  12
                   Entering a new word list  . . . . . . . . . . . .  12
                   Saving a word list  . . . . . . . . . . . . . . .  13
                   Loading a word list . . . . . . . . . . . . . . .  13
                   Editing a word list . . . . . . . . . . . . . . .  13
                   Moving to another section of VMS  . . . . . . . .  14
                   Printing a word list  . . . . . . . . . . . . . .  14
                   Printing a test . . . . . . . . . . . . . . . . .  14
                   Printing a word search  . . . . . . . . . . . . .  15

                   ADVANCED FEATURES . . . . . . . . . . . . . . . .  16
                   x  EXCHANGE DISKS . . . . . . . . . . . . . . . .  16
                   z  DOS CALL . . . . . . . . . . . . . . . . . . .  16
                   d  DEVICE = DISK  . . . . . . . . . . . . . . . .  16
                   f  FORMAT . . . . . . . . . . . . . . . . . . . .  16






































                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar



                              REFERENCE SECTION

     Getting Started:  Boot the computer.  When the A> prompt is on the
     screen insert the VMS disk.  Type VMS and press ENTER or RETURN.

     Title Page MENU:  Once the program has begun a title page menu will
     be displayed.  The following is a brief description of the menu
     choices.

          e  EDITOR - used to enter, change or delete words and/or
             definitions and to modify word lists
          w  WORD SEARCH - used to create and print word search puzzles
             and anagram printouts
          t  TEST PRINTER - used to print matching tests and
             word / definition lists
          q  QUIZZER - quizzes students on words and their definitions -
             also includes a challenging CODE game
          f  FORTUNE - quizzes students on words and their definitions
             using a "WHEEL OF FORTUNE" game format
          s  SPELLER - quizzes students on the spelling of words -
             includes the games FLASH and ANAGRAMS

























                                     
                                 page 1 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar



                              _____EDITOR_____

     The VMS EDITOR is used to enter and modify word and definition
     lists.  The following is a description of each EDITOR MENU option.

      l/s/k LOAD/SAVE/KILL

          l - loads a word list from disk - select a list by number
          s - saves a word list to disk - notes may be left with the
              list -
              Press ENTER after entering notes.
              File names may be up to 8 characters in length - no
              extension is allowed
          k - kills (removes) a file from disk

      b  BEGIN NEW FILE
              Type each word - press ENTER when done.  See the notes
              that follow this section on using the SCREEN EDITOR.
              Type a definition and press ENTER.  Do not be concerned if
              a word in the definition is split at the end of one screen
              line.  DO NOT add spaces as you type a definition so that
              a word that would be split is forced to the next line. 
              The program will automatically correct for this when the
              definition is displayed or printed.
              Press W if you need to edit the word or D if you need to
              edit the definition.
              Once the word and definition are correct press N to enter
              the next word, P to edit the previous word or F1 to return
              to the main menu.

     **** using the SCREEN EDITOR
          Words and definitions are entered and edited using the
          program's screen editor.  It is similar to using a
          wordprocessor.  Type the word using the arrow keys to move
          around and make corrections.  Use the INSERT key to add spaces
          between words or letters.  Use the DELETE key to remove
          characters.  Use PAGE UP or PAGE DOWN to move one word to the
          LEFT or RIGHT.  Use HOME or END to move to the BEGINNING or
          END of a line.  Use CONTROL END to ERASE a line.
          Note that these commands are printed at the bottom of the
          screen as you enter words and definitions.

          DO NOT FORGET to save a word list once it has been created or
          modified.


                                     
                                 page 2 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


      e  EDIT WORDS/DEFINITIONS
          Press E from the main menu.
          Select the first word to edit by number.
          Edit the word or definition by pressing W or D.  Move to the
          previous word with P or the next word with N.
          Return to the main menu with F1.
          Note that pressing N while the last word is being displayed
          allows you to enter a new word and definition.

      f  FIND WORD or PHRASE
          Press F from the main menu.
          Search for a word, letter or phrase in a word or definition. 
          This is an easy way to search the entire list for a word that
          you had noticed was misspelled.  Press F1 to return to the
          menu.

      a  APPEND WORDS
          You may append (add) words to the list that is already in
          memory by loading them from disk or by typing them from the
          keyboard.  You may combine files to create large lists for a
          test or semester review.


      o  ORDER ALPHABETICALLY
          Places words in alphabetical order.

      d  DELETE WORD(S)
          Select word or words to delete by number or range of numbers.
          Type 7 to delete word 7.  Type 7-15 to delete words 7 through
          15.  Confirm with Y.

      c  CHANGE CASE
          ALL CAPS places each word and/or definition in all capital
          letters.
          ALL LOWER CASE places each word and/or definition in all lower
          case letters.
          SENTENCE FORMAT places all letters of the definition in lower
          case except the first letter of the definition.  A period is
          placed at the end of each definition.

      n  NOTES
          Allows you to leave notes with a file when it is saved.

      m  MOVE
          Move to another section of VMS, such as QUIZZER, WORD SEARCH
          or FORTUNE

                                     
                                 page 3 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar



      x  EXCHANGE DISKS
          Please refer to the ADVANCED FEATURES section of the manual.

      =  FIND DUPLICATE WORDS
          Searches the list that is in memory and prints any words
          entries that are identical.  This function is most often used
          when two or more lists are appended and you wish to find if
          there are any words that are in more than one list.  Once
          duplicates are found you may use the delete function to delete
          one of the duplicates.

      z  DOS CALL
          Please refer to the ADVANCED FEATURES section of the manual.

      u  SOUND ON/OFF
          Press once to disable sound, press again to enable sound
          prompts and error messages.

      v  VIEW
          Displays the words and definitions as they are saved in the
          computer's memory.

      q  QUIT























                                     
                                 page 4 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar



                            ____WORD SEARCHER_____

          This program allows you to create and print a word search
     puzzle or an anagram printout.  The following is a description of
     each of the menu options that are new in this section of VMS.

      l  LOAD
          Allows you to load a file from disk.

      b  BUILD WORD SEARCH
          Once a file has been loaded press B and choose the number of
          words to be included in the word search puzzle.  If you choose
          less than the total number of words on the list you may remove
          the extra words manually or have the computer remove them for
          you.

          The horizontal and vertical dimensions are normally 30 X 30.
          Change this by pressing H or V to change the horizontal or
          vertical respectively.  Press ENTER when done.

          Type a number from 0 to 8 for the number of lines of heading.
          You will be typing the heading in the same SCREEN EDITOR that
          you used when entering words and definitions.  Note that you
          have several other options.  You may press CONTROL C to center
          a line, CONTROL R to move a line flush right or CONTROL L to
          move a line flush left.  You may also automatically enter a
          name line by pressing CONTROL N.

          If the computer has a difficult time placing all of the words,
          press S to start over with the same size puzzle and word list
          or Q to quit and return to the main menu.

          A graphic display will show the relative placement of words as
          the computer creates the word search.  If you wish to have a
          better balance of horizontal or diagonal placements you may
          press S to have the computer start over and recreate the word
          search.

          Note that the word search that is created is printed on the
          screen, not on the printer.  In order to print on the printer
          you must use the following command to change the device from
          screen to printer.


      d  DEVICE = SCREEN/PRINTER/DISK

                                     
                                 page 5 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


          Press D  from the main menu to change the output device from
          screen to printer to disk file.  If printer is selected the
          word search puzzle will be printed on the printer.
          Please refer to the ADVANCED FEATURES section of the manual
          for a discussion of using DEVICE= DISK.

      f  FORMAT
          Please refer to the ADVANCED FEATURES section of the manual.


      a  ANAGRAMS
          Anagrams are created by scrambling the letters of a word.  For
          example, TPOCMERU is an anagram for COMPUTER.  This part of
          the program creates and prints anagrams for the word list that
          is loaded into the computer's memory.
































                                     
                                 page 6 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


                            _____TEST PRINTER_____

          TEST PRINTER allows you to print word and definition lists as
     well as matching tests.  The following is a description of each
     menu option that is new to this section of VMS.

      t  PRINT TEST
          Once a word list has been loaded press T to print a test.
          Select the number of words to be included and press ENTER.
          If you select less than the total number you may remove the
          extra words manually or have the computer remove them.

      p  PRINT WORD/DEFINITION LIST
          Follow the screen directions to create lists of words or words
          and definitions for study or reference.

      f  FORMAT FOR PRINTOUT
          Please refer to the ADVANCED FEATURES section of the manual.





























                                     
                                 page 7 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


                               _____QUIZZER_____

          This section of the program quizzes students on the words and
     their definitions.  It also includes a challenging CODE game.

      d  SET DIFFICULTY LEVEL (NOW 8 WORDS)
          The quiz may contain 4, 8, 12, or 16 words in the word list.
          The more words, the more difficult the quiz.
          Press D to change levels.

      t  TIME - NOW 20 SECONDS
          To change the amount of time allowed for each answer press T.
      
      n  NORMAL/SCRAMBLED DEFINITIONS - NOW NORMAL
          Press N to change the definitions so that the words in the
          definition are in a random order.  Press N again to change it
          back to normal.
          Note that students should not choose the scrambled option
          until they become familiar with a list of vocabulary words.

      w  WORDS OR NUMBERS
          You may answer the QUIZZER questions by either typing a number
          for the correct word or by spelling out the correct word. 
          Press W to change the method of giving answers from WORDS to
          NUMBERS or from NUMBERS to WORDS.

      b  BEGIN QUIZ
          A definition will be chosen at random and between 4 and 16
          words will be displayed, depending on the difficulty level. 
          Press the Number or Letter to the left of the word that you
          think matches the definition.  If you have chosen WORDS rather
          than NUMBERS you must type, and correctly spell, the correct
          word.

      c  BEGIN CODE
          Code uses a simple substitution code to encode a randomly
          chosen word and definition.  For example, all Cs may be
          changed to Ls and all Es to Js.

          To decode the entry type the letter that is used in the code 
          and then the letter that you think it represents.  To change
          Ls to Cs, press L then C.  Press ENTER.  If you are correct
          the change will be made and the correct letters will be
          highlighted.  If you are incorrect points will be deducted
          from the score.  You will also lose a point whenever the time
          display in the upper left hand corner reaches 0.

                                     
                                 page 8 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar



          The alphabet display at the top shows the correct
          substitutions that you have made.












































                                     
                                 page 9 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


                              _____FORTUNE_____

          Fortune is a challenging and fun way for students to review
     their vocabulary once they have become familiar with it.  It uses a
     "WHEEL OF FORTUNE" game format.

      p  PLAYERS = 1
          Press P to change the number of players.  Up to 4 students may
          compete at one time.

      e  ENTER PLAYER NAMES
          Press E to enter each player's name.

      t  TIME - NOW 20 SECONDS
          Press T to change the time allowed between entering guesses.
          Time may range from 5 to 60 seconds.

      b  BEGIN QUIZ
          Note that if you attempt to begin before entering names that
          the program will require you to enter names before beginning.

          The game screen consists of a list of 8 words, the current
          SCORE, and a timer that counts down and deducts 1 point for
          each time period that passes.  Each star displayed on the
          screen represents a letter in the definition that matches one
          of the 8 words.

          One of the player's names is highlighted and his score is
          displayed in parenthesis after the name.

          To begin press a letter.  If the letter is in the definition,
          all occurrences of the letter will be displayed.  If a
          consonant is chosen and found one point will be deducted.  A
          vowel costs 3 points and selecting a letter that is not found
          deducts 5 points from the score.

          Once you think you know which word matches the definition,
          press the number to the word's left.  If you are correct you
          will be awarded the points that you have left.

          Pressing ESC at any time will end the game and display the
          final score.

          The game is over when one player reaches 100 points or when
          all of the definitions have been displayed.


                                     
                                 page 10 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar



                               _____SPELL_____

          SPELL quizzes students on the spelling of words by flashing
     them briefly on the screen and asking the student to spell the word
     or by creating anagrams from the words and challenging students to
     correctly spell the word that was used for the anagrams. 

      d  SET DIFFICULTY LEVEL (NOW = 20)
          Press D to select the difficulty level for FLASH and ANAGRAMS. 
          Press the LEFT ARROW  or RIGHT ARROW  to change the amount of
          time that the words will be displayed.  You may see a sample
          of the time that you have selected for FLASH by pressing S. 
          The time for ANAGRAMS is in seconds.  Press ENTER when done.

      f  BEGIN FLASH
          Press ANY KEY to flash a word.  The spelling must be exact for
          it to be accepted as correct.
          Press ESC to end and have errors displayed.

      b  BEGIN ANAGRAMS
          A selected word will be displayed 12 times as a series of
          anagrams.  Once you know the word type it and press ENTER.
          Press ESC to end early.























                                     
                                 page 11 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar




                               TUTORIAL SECTION

          This section of the manual is designed to walk a first time
     user through the first parts of the program.  Use it along with the
     REFERENCE SECTION to get the most out of the program.

     Starting VMS:
          Boot the computer and get the A> prompt on the screen.  Insert
     the VMS disk into the disk drive and type VMS.   Press ENTER and
     the program will read information from the disk and display the
     first menu.

          The menu allows you to choose one of the following programs:
     EDIT, WORD SEARCH, TEST PRINTER, QUIZZER, FORTUNE or SPELLER.  To
     choose a program press the first letter of its name.  We will start
     with the EDIT program so press E, the first letter of EDIT.

     Entering a new word list:
          When the edit program loads you will see the main edit menu. 
     Like the first menu you saw there is a list of options and again
     you will choose an option by pressing the first letter of its name. 
     Press B so that we can begin entering a new word list.

          You will see the word/definition entry screen appear.  It
     shows you that you are currently editing ENTRY 1 OF 1.  Type the
     first word, let's use COMPUTER.  You may type the word in all caps
     or in lower case.  It doesn't matter as long as you are consistent. 
     If you change your mind later the program can change the case of
     words and definitions for you.  If you make an error use the arrow
     keys to move to the error and type over it.  Notice the keys that
     are listed at the bottom of the screen.  If you need to delete a
     letter or space, press the DELETE key.  If you need to add a space
     between letters press INSERT.  

          Once the word has been typed to your satisfaction press ENTER. 
     Now type the definition for COMPUTER.  Use this:  A MACHINE THAT
     ALLOWS MAN TO EXPAND HIS CAPABILITIES BY ENABLING HIM TO WORK WITH
     AND MANIPULATE LARGE AMOUNTS OF INFORMATION.  When you come to the
     end of the first line the word WITH may be broken between the first
     and second lines.  Don't be concerned about it, just keep on typing
     as though there is only one long line.  The computer will
     automatically format definitions so that words will not be broken
     between lines when they are displayed or printed.


                                     
                                 page 12 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


          Once the definition has been typed make any necessary
     corrections and press ENTER.  If you discover an error after
     pressing ENTER you may edit the word by pressing the W key or the
     definition by pressing D.  To enter the next word press N, for
     NEXT.  Type the second word, KEYBOARD.  Press ENTER when done and
     type a definition, use A DEVICE FOR ENTERING INFORMATION INTO THE
     COMPUTER.

          After you are done with the second word try entering the
     following words with your own definitions:  MONITOR, ENTER KEY,
     DISK, DISK DRIVE, MOUSE, PRINTER, ESCAPE KEY, FUNCTION KEY.

          After the last word and definition have been entered press the
     F1 key to return to the main menu.

          If you have typed all of the words listed above you will see
     WORDS= 10 displayed at the bottom of the screen.

     Saving a word list:
          Now we need to save the list of words on the disk.  Press S
     for SAVE.  You will be given an opportunity to add any notes to the
     list of words that you have just typed.  Type the following:  A
     SAMPLE LIST OF WORDS TYPED ON (TODAY'S DATE).  Again you may use
     the keys listed at the bottom of the screen to make corrections. 
     Press ENTER when you are done.

          Now you must give the list of words a name.  The name must be
     eight or less characters in length and should contain only letters
     and or numbers.  Type SAMPLE for the file name and press ENTER.

     Loading a word list:
          To load in a longer list press L for LOAD, from the main menu. 
     An alphabetized list of the files that are stored on the disk will
     be displayed.  One of them should have the name COMPUTER.  Type the
     number to its left and press ENTER.  The file will be loaded and
     you will be returned to the main menu.  WORDS= 26 should be
     displayed at the bottom of the screen and the list name, COMPUTER,
     should be displayed at the top of the screen.

     Editing a word list:
          To examine and then edit the words and definitions used in the
     program press E for EDIT from the main menu.  All of the words that
     have been loaded will be displayed on the screen.  Type 1, for word
     1, and press enter.  You will find yourself back on the screen that
     you used to enter words.  You should see the first word, its


                                     
                                 page 13 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


     definition and ENTRY 1 OF 26.  You may now press W to edit the
     word, D to edit the definition or N to look at the next word.  

          Press N several times and  you will move forward through the
     list of words.  Press P and you will move backward to the previous
     word.  Notice that you will be given an opportunity to type word 27
     if you move to the end of the word list and continue to press N. 
     Press F1 to return to the main menu.

     Moving to another section of VMS:
          Press M from the main menu to move to the other programs that
     make up VMS.  Press T to move to the TEST section.  This program
     will allow us to print a list of the words that we loaded into VMS.

     Printing a word list:
          You should now see the main menu of the test part of VMS. 
     WORDS= 26 should still be displayed at the bottom of the screen and
     COMPUTER at the top.  If not, use L to load in the COMPUTER list of
     words.

          Press P, for PRINT WORD/DEFINITION LIST, from the main menu. 
     Press D in order to print a list of words and definitions and then
     press 1 to have the program skip one line between words.  When
     asked for then number of lines for the heading use 4.

          You may now type a four line heading for the word list.  Type
     COMPUTER WORD LIST on the first line.  Before pressing ENTER or the
     down arrow to move to line 2, press and hold the CONTROL key and
     press C.   The first line of the heading will move to the center of
     the screen.  Similarly you can move lines to the right or left with
     CONTROL R and CONTROL L.

          Move to the second line and type the date.  Press ENTER three
     more times to leave the other lines of the heading blank.   As soon
     as you enter the last line of the title you will see the word and
     definition list fly past on the screen.  This is because the output
     device is set for screen on the main menu.  When you return to the
     main menu notice that the third menu option says DEVICE = SCREEN. 
     Press D once and DEVICE = PRINTER will be displayed.  Repeat the
     above steps and the list will be printed on your printer rather
     than on the screen.

     Printing a test:
          To print a test made up of the COMPUTER word list, press T
     from the main menu.  You will be asked "HOW MANY OF THE 26 WORDS DO
     YOU WISH TO INCLUDE IN THE PRINTOUT?"  Type 15 and press ENTER. 

                                     
                                 page 14 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


     Press C to allow the computer to select the words to be removed. 
     When the WORDS RETAINED are displayed you may press R to have the
     computer RESELECT another set of 15 words or you may press ENTER to
     continue creating the test.

          Again you will be given an opportunity to type a heading for
     the test.  Once the heading is done the test will be printed on the
     printer or screen, depending on which device you have selected.

     Printing a word search:
          From the main menu press M to move and press W to move to the
     word search section of VMS.

          Press B to begin building the word search.  Just as under the
     test printing section you must decide how many words to include. 
     Press ENTER to use all 26 words.  Next you will be given an
     opportunity to change the size of the rectangle that makes up the
     word search.  It is normally set at 30 X 30.  Press H five times
     and V ten times to change it to 35 X 40.  Press ENTER when you are
     done.

          After you have entered a heading the computer will begin
     creating the puzzle.  Since the rectangle we have chosen is very
     large and we are only using 26 words the computer will be done
     quickly.  If, however, we were using a smaller rectangle or more
     words it is possible to give the computer a difficult or impossible
     task.  For this reason you may press S to have the computer start
     over or Q to quit.

          If you have left DEVICE = SCREEN on the main menu the search
     will be printed on the screen otherwise it will print on the
     printer.  You may also print a key.















                                     
                                 page 15 













                       VOCABULARY MANAGEMENT SYSTEM
                            (c) 1988 D. Bodnar


                              ADVANCED FEATURES

          The advanced features section is included in the complete
     printed manual that is available only to those who have registered
     VMS with the author by sending $20.00 to :

          David G. Bodnar
          26 Ralston Place
          Pittsburgh, PA  15216






































                                     
                                 page 16 






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1379

     Volume in drive A has no label
     Directory of A:\

    CAPITALS VMS      3584   7-02-88   9:32a
    COMPUTER VMS      2816   9-08-87   5:53p
    FILE1379 TXT      3352   5-03-89   1:40p
    FORTUNE  CHN     14848  10-17-88   7:11a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-03-89   1:44p
    MANUAL   BAT       152   5-03-89   1:48p
    PAGE     COM       325   1-06-87   4:21p
    PSEARCH  CHN     21760  10-17-88   7:04a
    PTEST    CHN     19584  10-17-88   7:05a
    QUIZZER  CHN     18944  10-17-88   7:10a
    README   DOC     36069   6-26-88   1:09p
    SCI1     VMS      1408  12-04-87   8:04p
    SCI2     VMS      1152  12-04-87   8:04p
    SCI3     VMS      2048   4-05-87  10:56a
    SCI4     VMS      1024   4-05-87  10:56a
    SCI5     VMS      1792   8-30-87   6:15p
    SCI6     VMS      1536   4-05-87  10:57a
    SCI7     VMS      1152   4-25-87  11:02a
    SCI8     VMS      1024   4-05-87  10:58a
    SCREEN   COM     13184   8-30-87   7:49p
    SCREENV  MS      16391   8-30-87   5:32p
    SCRN1    DAT      4864   5-31-88   7:08a
    SCRN2    DAT      4480   5-31-88   7:08a
    SOCST1   VMS      1280   1-01-80   1:14a
    SOCST2   VMS      1280   1-01-80   1:37a
    SOCST3   VMS      1280  12-04-87   8:04p
    SOCST4   VMS      1664  12-04-87   8:04p
    SPELL    CHN     19712  10-17-88   7:11a
    SPELL1   VMS       512   9-30-87   5:25p
    STATES   VMS      3584   6-26-88   9:21a
    TITLE    COM     20352   6-20-88   9:31p
    VIEW     BAT        42   5-03-89   1:47p
    VMS      BAT        56   6-20-88   9:25p
    VMS      CHN      1024   6-07-87   3:20p
    VMS      PRN       128   8-16-88   4:20p
    VMSEDIT  CHN     15488  10-17-88  10:56a
    VMSGO    CHN      1408   6-18-88   1:26p
    VMSGO    COM     20992  10-05-88   6:45a
    VTEMP    DIR       876  10-17-88  10:56a
    WEATHER  VMS      2432   6-26-88  10:20a
    WITWICS  VMS      1664   6-26-88  10:21a
    WIUSAICS VMS      1280   6-26-88  10:21a
           43 file(s)     267275 bytes
                           30720 bytes free
