---
layout: page
title: "PC-SIG Diskette Library (Disk #2682)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2682/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2682"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DICMAN.DOC

{% raw %}
```






















                          Dictionary Manager v1.4
                       Acropolis Software Dictionary
                             Management Utility
                   (C) Copyright 1991, Acropolis Software

                             Acropolis Software
                               P.O. Box 5037
                            Fair Oaks, CA  95628




      THE LEGAL STUFF


         Dictionary Manager is provided on an "as is" basis without
         warranty of any kind expressed or implied. In no event will
         Acropolis Software be liable to you for any damages, including
         any lost profits, lost savings or other incidental or con-
         sequential damages arising out of the use of or inability to
         use the program, even if Acropolis Software has been advised
         of the possibility of such damages, or for any claim by any
         other party.

         Dictionary Manager v1.4 is a utility program for maintaining
         the dictionary file included with Acropolis software products
         which include but are not limited to ShareSpell and Acropolis
         BBS.  Distribution for any other purpose is not allowed.

         Dictionary Manager is copyrighted by Acropolis Software.





      TABLE OF CONTENTS




        Introduction              ......................................  1

        File list                 ......................................  1

        Installation              ......................................  2

        Using Dictionary Manager  ......................................  3

        Quick Reference           ......................................  5

        Use with BBS software     ......................................  6
                                                                        Page 1



      INTRODUCTION

       Dictionary Manager version 1.4 is a utility program for maintaining
       the dictionary file included with Acropolis software products which
       include but are not limited to ShareSpell, and Acropolis BBS version
       4.22 or higher.

       Dictionary Manager allows you to add and delete words from the
       dictionary used with either ShareSpell or Acropolis BBS.



      FILE LIST

        Dictionary Manager comes with the following files:


           DICMAN.EXE         The Dictionary Manager Program.
           DICMAN.DOC         This manual.
           DICMAN14.NEW       New features / bug fix reports.


        It you give copies of this program away you MUST include all three
        files in their original form.  Distribution with one or more of
        the files missing or altered in anyway is strictly prohibited.
        In addition you should distribute it only with another Acropolis
        Software product that makes use of it.
                                                                        Page 2



      INSTALLATION OF DICTIONARY MANAGER

        Installation of Dictionary Manager is simple to perform.  The
        only special consideration is whether you are using a hard disk
        based system or a floppy disk based system.



           With ShareSpell:


             HARD DISK SYSTEM:

             Copy DICMAN.EXE to the directory were you have ShareSpell
             installed.  If the ShareSpell is installed properly
             Dictionary Manager will be able to find the dictionary file
             for you when it is executed.  Proper installation only requires
             that the dictionary file ACROP.DIC is in either the directory
             that Dictionary Manager is being executed from or in a directory
             included in the PATH that MSDOS searches for files.



             FLOPPY INSTALLATION:

             Copy DICMAN.EXE to the floppy disk that holds the program you
             are using and the ACROP.DIC file.  If you plan on adding a
             large number of word to the dictionary I recommend that you
             place ACROP.DIC on a floppy by itself and add the drive the
             dictionary is to the path with the use of the MSDOS PATH=
             command.




           With Acropolis BBS:

             Copy DICMAN.EXE to the directory were the BBS.EXE file is
             kept.  There are a few special considerations to account for
             when using Dictionary Manager with Acropolis BBS.  See the
             section "Use with BBS Software" for more information.
                                                                        Page 3



      USING DICTIONARY MANAGER

        To use Dictionary Manager type DICMAN at the DOS prompt.  It will
        search for the dictionary file and then read in all of the words
        added by the user.

        The screen is divided into three sections.  On the left of the
        screen are the words that will be in the dictionary.  At first
        this list will contain the words loaded from the dictionary.  It
        may be empty if no words have yet been added to it.  In the middle
        of the screen is the list of available commands in addition input
        widows will appear in this area.  On the right side of the screen
        is the holding list.  The holding list is useful for temporarily
        storing lists of words before adding them to the dictionary or
        completely deleting them.

        The most basic commands are the arrow keys Page Up/Down and the
        Spacebar.  They allow you to navigate around the word lists and
        to mark the words to be operated on.

        The Left and Right arrow keys allow you to select the currently
        active word list.  Pressing the Left arrow moves you to the
        "Word List" column on the left part of the screen.   The Right
        arrow moves you to the "Holding List" column on the right part of
        the screen.  The currently selected column is indicated by its
        name at the top of the column flashing.  Knowing which list is
        currently selected is important since the other commands operate
        on the current list.

        The Up and Down arrow keys allow you to move up and down in the
        words displayed in the currently selected word list.  Page Up and
        Down move through the list a screen at a time.  The high lighted
        word in the center of the list is the current word.  Pressing the
        Spacebar will mark the current word.  Marked words are indicated
        by a right pointing triangle to their left.

        The commands are:

         [A]dd single word
           You will be prompted to enter a word in a window in the middle
           of the screen.  The word you enter will be added to the list
           of words in the currently selected column.  The exception is
           if the word is already present in the list it will not be added.
           Added words will be maintained in alphabetical order.  If you
           decide not to add a word just press [RETURN] and nothing will
           be added.

         [M]ark all words
           This will mark all of the words in the currently selected list.
           You will be prompted to confirm the command before the words
           are marked.

         [U]nmark all words
           This will unmark all of the words in the currently selected list.
           You will be prompted to confirm the command before the words
           are unmarked.
                                                                        Page 4


         [L]oad file of words
            You will be asked if you want to unmark the words that are
            marked in the current word list.  A no response will leave
            the words marked.  Yes will unmark all of them.  This allows
            you to distinguish the words that were already in the list
            from the words that are loaded from the file since the newly
            loaded words will be marked as they are loaded.  If the file
            you specify cannot be found you will be prompted again for a
            file name.  If you decide not to load a list of words just
            press the [RETURN] key.  The format for the list of words
            is simple.  One word after another each on its own line.

              EXAMPLE:    BOY
                          DOG
                          CAT

         [E]xchange marked words
           Moves the marked words in the currently selected list to the
           other list.  You will be prompted to confirm the move before
           it takes place.  A good example for this command is:
           Load a list of words into the Holding list with the [L]oad
           command.  Now scan through the words and use the Spacebar
           to unmark the words you do not wish to include in the
           dictionary.  Use the [E]xchange command to move the still
           marked words to the Word list for inclusion in the dictionary.

         [D]elete marked words
           Deletes the marked words from the currently selected list.
           Use this command with caution, once the words are deleted you
           will have to manually re-enter them.  You will be prompted to
           confirm the deletion before it takes place.  Use it when you
           have some words that you've added to the dictionary and decided
           that you no longer want there.

         [W]rite words to file
           Write the words from the current list to a disk file.  You will
           be prompted for the name of the file to save the list of words
           to.  If you decide not to save the word list just press the
           [RETURN] key.  With this command and the [L]oad file of words
           command you can easily move your personal words from one version
           of the dictionary to the next by [W]riting the word list from
           the old dictionary and then [L]oading the word list into the
           new dictionary.

         [Q]uit and abandon changes
           Quits Dictionary Manager without applying any of the changes
           you have made to the dictionary.  It is a "save out" if you
           think you have mangled the word list beyond all hopes of putting
           it into the condition that you wanted it in.  Example: You
           deleted all of the words.  You will be prompted to confirm the
           operation.

         [S]ave Word List & Quit
           This is the normal why of exiting Dictionary Manager.  All of
           the user supplied words will be removed from the dictionary and
           the new list of words in the "Word List" column on the left side
           of the screen will be place into the dictionary.  Only the
           words from the "Word List" will be place in the dictionary
           regardless of whether it is the currently selected list or
           not.
                                                                        Page 5



      QUICK REFERENCE

        Left / Right Arrows
          The left and right arrows select which word list is the currently
          selected list.  The left arrow moves to "Word List" and the right
          arrow moves to "Holding List".  The current list is indicated by
          the name at the top of the column flashing.  The list that is
          currently selected affects the operation of the [L]oad, [D]elete,
          [A]dd, [M]ark, [U]nmark, and [E]xchange commands.

        Up / Down Arrows
          The up and down arrows let you move through the current list.

        [SPACEBAR] mark word
          The word that is highlighted in the current list is marked or
          unmarked.  The right pointing triangle to the left of the word
          indicates that it is marked.

        [A]dd Single Word
          Allows you to type in a word manually to add to the currently
          selected list.

        [L]oad file of words
          Load a file containing a list of word into the currently selected
          word list.  The file must have a format of one word per line.

        [W]rite words to file
          Write the words from the current list to a disk file.

        [E]xchange marked words
          Move the marked words from the currently selected list to the
          other list.  If the "Word List" is flashing then the marked words
          from it will be moved to the holding list.  If "Holding List" is
          flashing then the marked words from it will be moved to the other
          list.

        [D]elete marked words
          Delete the marked words in the currently selected list.
          *WARNING* once deleted you cannot retrieve the words again without
          manually entering them or recovering them from a file.

        [M]ark all words
          Mark all words in the currently selected list.

        [U]nmark all words
          Unmark all words in the currently selected list.

        [Q]uit and abandon changes
          Quit Dictionary Manager and abandon any changes make to the
          dictionary.

        [S]ave Word List & Quit
          Save the words in "Word List" back into the dictionary.  The old
          user created words are removed from the dictionary and replaced
          with the words in that list.
                                                                        Page 6



      USE WITH ACROPOLIS BBS SOFTWARE

      Using Dictionary Manager with Acropolis BBS software adds a small
      amount of complexity to the problem of maintaining the dictionary.
      Since the BBS software doesn't allow the direct addition of words
      to the dictionary all of the new words come from a file stored
      with the BBS data files.  So you will be using it mostly to add
      the file ADDLIST.TXT from the DFS directory.  The recommendation
      is to create a batch file to start Dictionary Manager and then
      delete the ADDLIST.TXT file so you do not have the same list of
      words to add again and again.

      Create a batch file that looks like the following:

        COPY DFS\ADDLIST.TXT ADDLIST.TXT
        DICMAN
        DEL DFS\ADDLIST.TXT

      Call it something like ADDDICT.BAT.  That way the dictionary
      addition file created by the BBS will be deleted when you finish
      adding the words.  The reason for copying the addition list file
      is that if you use the [Q]uit and abandon changes option the batch
      file would have deleted your only copy of the file containing the
      words.  Another benefit is that you do not have to type in the path
      as part of the file name when you load the word list in, just type
      ADDLIST.TXT.  It makes life a little simpler.

```
{% endraw %}

## FILE2682.TXT

{% raw %}
```
Disk No: 2682
Disk Title: ShareSpell
PC-SIG Version: S2.3

Program Title: ShareSpell
Author Version: 2.3
Author Registration: $20.00
Special Requirements: None.

SHARESPELL is an excellent, easy to use, spelling checker system. Among
the best anywhere. It is a stand-alone system that works with ASCII
files. It shows the word in context and a list of possible replacements
to highlight for overlaying directly into the document. You can also
ignore the word once, throughout the document, or add the word to the
dictionary.

SHARESPELL contains a 112,000+ word dictionary is included that is
quite good.  The system as a whole is very fast and the dictionary is
compress to take up minimal space.

Also included is a mass word-adding utility to merge in specialized word
lists of your own and delete words that have been added to the dictionar

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## SS.DOC

{% raw %}
```




















                                 ShareSpell v2.3
                            Text File Spelling Checker
                    Copyright 1989-1991, Acropolis Software

                                 Robert Bequette
                                Acropolis Software
                                  P.O. Box 5037
                               Fair Oaks, CA  95628





      THE LEGAL STUFF

         ShareSpell is provided on an "as is" basis without warranty of
         any kind expressed or implied. In no event will Acropolis
         Software be liable to you for any damages, including any lost
         profits, lost savings or other incidental or consequential
         damages arising out of the use of or inability to use the
         program, even if Acropolis Software has been advised of the
         possibility of such damages, or for any claim by any other party.

         ShareSpell is copyrighted by Acropolis Software.  You are
         encouraged to give copies to your friends and upload it to
         bulletin boards.  However, sale of the program for profit by
         anyone except Acropolis Software is strictly prohibited, except
         for a small fee for duplication.  That fee does not register
         you as a user of ShareSpell.  If you like ShareSpell and find
         it useful you are asked to register as a users with Acropolis
         Software.  (See "REGISTRATION" at the bottom of this document
         for information on how to register).




      INDEX



        Introduction              ......................................  1

        File list                 ......................................  1

        Requirements              ......................................  1

        Installation

          One Drive System        ......................................  2

          Two Drive System        ......................................  3

          Hard Drive System       ......................................  3

        Monitor Configuration     ......................................  4

        How to use to ShareSpell  ......................................  5

        Quick Reference           ......................................  7

        Questions or Comments     ....................................... 8

        Registration              ....................................... 9
                                                                      Page 1



      INTRODUCTION

       ShareSpell version 2.3 is a "stand-alone" spelling checker.  With it
       you can check the spelling of text files that you have written.  It
       is completely interactive.  It will display the text of the file as
       it goes through the file, checking for spelling errors.  At each word
       that it thinks is misspelled, you'll be given the option of replacing
       the word from a list of suggested correct spellings, manually
       correcting it, adding it to the dictionary, marking it for later
       correction, or ignoring it throughout the rest of the document.
       Currently ShareSpell has a 112,000+ word dictionary, and you have the
       option of adding words that you use all the time such as your name and
       words specific to your field of writing.

       ShareSpell is a shareware product.  It is not "freeware" or public
       domain.  If you use ShareSpell, you are expected to pay for it just
       like any other program.  In return for the $20 registration fee, you
       will receive the latest version of the program and the newest
       dictionary on either a 5 1/4" or 3 1/2" disk (whichever you prefer).



      FILE LIST

        ShareSpell comes with the following files:


           SS.EXE         The ShareSpell Program.
           SS.DOC         This manual.
           ACROP.DIC      The dictionary containing all the words.
           SS211.NEW      New features / bug fixes for ShareSpell.
           DICMAN.EXE     Dictionary Manager utility.
           DICMAN.DOC     Documentation for Dictionary Manager.
           DICMAN13.NEW   New features / bug fixes for Dictionary Manager.


        It you give copies of this program away you MUST include all seven
        files in their original form.  Distribution with one or more of
        the files missing or altered in anyway is strictly prohibited.



      REQUIREMENTS

        The minimum system requirements to run ShareSpell are:

           256K of RAM
           1 Floppy disk drive
           MSDOS/PCDOS version 2.1 or higher

        A hard drive or two floppy drives are recommended.  A single drive
        system leaves very little room for storage of the file to be checked
        and its backup.

        If using a 256K RAM system MSDOS/PCDOS version 2.1 is recommended.
        It allows more memory so that ShareSpell can check the spelling of
        larger documents.
                                                                      Page 2



      INSTALLATION

       Single Disk Drive System Installation

        It is possible to use ShareSpell on a single-drive system, though
        it will require a little more work from you and it limits the
        size of the file that you can check.  Further, you will not be able
        to use Dictionary Manager to alter your dictionary, since a single
        drive system has too little disk space.

        Format a floppy disk and copy the files SS.EXE and ACROP.DIC to
        it. It will be your working ShareSpell disk.  Here is how to do it:

        Have a blank disk ready and start up your computer with a DOS
        disk in the disk drive.  Type the following:

          FORMAT A:

        When asked to insert a blank disk in drive A: take out your DOS
        disk and insert the blank disk that will be you ShareSpell working
        disk.  When the formatting is done, place your master ShareSpell
        disk in drive A: and type the following:

          COPY SS.EXE B:

        When asked to insert the disk in drive B: take the master ShareSpell
        disk out of your disk drive and insert the ShareSpell working disk.
        If asked to insert the disk in drive A: take out the ShareSpell
        working disk and insert the ShareSpell master disk.  Continue doing
        so until you are returned to the A> prompt.  Now with your
        ShareSpell master disk in drive A: type:

          COPY ACROP.DIC B:

        Follow the same procedure outlined above inserting your ShareSpell
        working disk in your drive when asked to insert the disk in drive
        B: and inserting your ShareSpell master disk in your drive when
        asked to put a disk in drive A:.  You now have a ShareSpell working
        disk.  Put your master ShareSpell disk away in a safe place so that
        if something happens to your working disk you can make a new copy by
        following the steps outlined above.

        To check the spelling of a file, you must copy the file to the
        ShareSpell working disk first.  For example you want to check the
        spelling of a file named LETTER.TXT.  First place the disk with
        the LETTER.TXT file on it in your disk drive and then type:

            COPY A:LETTER.TXT B:

        Don't worry that you do not have a B: drive, MSDOS will read the
        file into memory and ask you to insert the destination disk in
        drive B:.  Take the disk with your file on it out of drive,
        insert the ShareSpell working disk and press the RETURN key.
        LETTER.TXT will be copied to the ShareSpell disk.  Now you can type
        SS to start ShareSpell and check the spelling of your document.
                                                                      Page 3


        There are three things to remember when using ShareSpell on a
        single-drive system.  First, you will have to copy the corrected
        document back to the disk that you copied it from.  Second, the
        amount of space on the ShareSpell disk is limited.  You must delete
        the files that you have been checking when you are finished with
        them, or you will run out of room on the ShareSpell work disk.
        Third, since ShareSpell places a backup copy of the checked file
        on the disk you can only check files that are half the size of the
        amount of free space on your ShareSpell disk.



       Two Disk Drive System Installation

        Setting up ShareSpell on a two disk drive system is easy.  Start
        up you computer with a DOS disk in drive A:.  Now place a blank
        disk in drive B: and type:

          FORMAT B:

        When the formatting is finished, replace the DOS disk in drive A:
        with your ShareSpell master disk and type the following commands:

          COPY SS.EXE B:
          COPY ACROP.DIC B:
          COPY DICMAN.EXE B:

        You now have a ShareSpell working disk in drive B:.  Put your master
        ShareSpell disk away in a safe place so that if something happens to
        your working disk you can make a new copy by repeating the steps
        above.  To run ShareSpell, place the ShareSpell working disk in drive
        A: and place the disk with the document you want to check the spelling
        of in disk drive B: type SS to start ShareSpell.  When asked for the
        name of the file to check type B: and the name of the file you wish
        to correct.  An example would be B:LETTER.TXT.



       Hard Drive System Installation

        To install ShareSpell on your hard drive you can do one of two things.
        Install it into the subdirectory that holds your MSDOS/PCDOS external
        commands or install it into it's own subdirectory.  Installing it in
        the MSDOS command directory is the easiest and most convenient.

        Most people with hard drives have a subdirectory called DOS, MSDOS,
        PCDOS, BIN, UTILITY, or something similar that they use to store
        the external commands for DOS (i.e. FORMAT, CHKDSK and so on) and
        other utilities.  It usually already has the PATH set up to search
        it.  If that is how you have your hard drive set up, just copy the
        following files into your directory and ShareSpell is ready to use.

        Copy -> SS.EXE
                ACROP.DIC
                DICMAN.EXE

        If you do not have your external commands in the path or you do
        not wish to add ShareSpell into your DOS directory, you can make
        a subdirectory just for ShareSpell. Call it whatever you like. It
        doesn't matter to ShareSpell.
                                                                      Page 4


      Monitor Configuration


       You can now configure ShareSpell to display in monochrome mode
       even on a color monitor.  To do so when you start ShareSpell up
       give it a command line parameter of -m.  You only have to do that
       the first time, after that it will remain in monochrome mode each
       time you run the program again, provided that it could create the
       configuration file.  If you want to switch it back to color mode
       use the -c command line parameter.  When you use either of those
       commands ShareSpell will create a file called SS.CFG that stores
       the display type that you wish to use.  It will be placed wherever
       it finds the dictionary file "ACROP.DIC" so if you move the
       dictionary to a different place remember to move the "SS.CFG" file
       along with it.  If you do not specify an option on the command line
       ShareSpell will continue to use whatever display type it finds.
       And of course you cannot specify a color display when you only have
       a monochrome monitor.

         Examples:

           SS -m
           SS -c myfile.txt
           SS thefile.asc -m


                                                                      Page 5



        You can either change to the directory that ShareSpell is in to use
        it, or you can add/change the PATH command in you AUTOEXEC.BAT file.
        By doing so you can use ShareSpell from anywhere (i.e. in your word
        processor's subdirectory, from a floppy...).  Assuming you called
        the subdirectory that you copied ShareSpell into SPELL on your C:
        drive, use a text editor and add the following line to your
        AUTOEXEC.BAT file:

          PATH=C:\SPELL

        It you call the directory something else or place it on a different
        hard drive, change the name of the drive and subdirectory
        accordingly.  If you already had a PATH command in your subdirectory,
        add the ShareSpell directory by separating it from the other
        directories with a semicolon:

          PATH=C:\MSDOS;C:\TURBO;C:\SPELL

        Once you have rebooted the system so that the ShareSpell subdirectory
        is added to the path, you can use both ShareSpell and the Dictionary
        Manager from any subdirectory.



      HOW TO USE SHARESPELL

      To use ShareSpell all you need is the file that you want to check the
      spelling of and, of course, the ShareSpell program and dictionary.
      Type SS and then press the <RETURN> key.  ShareSpell will start up and
      display its opening screen.  You can use the arrow keys to move around
      the screen and select the file of which you want to check the spelling.
      To select the file move to it and press the <RETURN> key.  Some of the
      file names really aren't files, but directories.  The files that have
      <DIR> after their name instead of the file size are subdirectories in
      the current directory you are in.  There also can be one other special
      file name on the list ".." with the word "PARENT" after it.  If you
      select that file you will be taken to the directory that contains the
      subdirectory you are in.  The only directory that will not have a
      parent is the root directory of the disk (either hard disk or floppy).
      If you decide not to check a document just press the <ESC> key and you
      will be exited from ShareSpell.

      ShareSpell now scans your document file looking for all of the unique
      words and then checks the list of words to see if there are any
      misspelled words.  If there are any misspellings ShareSpell will
      start displaying your file stopping to show you the incorrect words.

      When ShareSpell finds a word that it does not like it, will stop and
      search the dictionary to find a list of words that it thinks you might
      have wanted to use instead of the current word.  On the lower right
      side of the screen it will display the list of suggested words.
      To the left of that you will see the list of available commands, and
      just above that you will see the word that it does not like.  After
      the list is displayed, you can use the following keys to make changes
      to the word.  Before the list of suggestions is display you can also
      use any of these commands, and ShareSpell will quit the search for
      suggestions and display the list of alternative words that is has
      found so far.
                                                                      Page 6



      At this point you can use the up and down arrow keys to move through
      the list of suggested spellings.  Use them to select the one that you
      wish to choose.  Pressing the <RETURN> key will replace the
      currently misspelled word with the highlighted word.  The empty word
      at the top is a special location;  If the highlight bar is on it when
      you press the <RETURN> key, the current word will be skipped and not
      replaced.  If you wish to ignore all following occurrences of that word
      in the document press the <ESC> key.


      One of your other options is to correct the word manually.  When you
      press either the left arrow, right arrow, or backspace, you will see
      the cursor move over to the suspected word window.  Now you can use
      the arrow keys to move around in the word and the <DEL> and
      <BACKSPACE> key to correct the spelling manually.  Once you press
      <RETURN>, the corrected word will replace the misspelling in the text.
      Before doing the replacement, however, ShareSpell will check to see if
      the word that results from your changes is in the dictionary.  If it
      is not, it will ask you if you really want to make the replacement.
      If you answer <N>o you will be back to editing the word.  A response of
      <Y>es will cause the word to replace the one in the document file.  If
      you decide that you do not want to correct the word manually use the
      up or down arrow to move back to the suggestion list.  Alternatively
      you can press any of the other command keys to perform that command
      instead of the manual correction.

      Pressing the <F8> key will cause ShareSpell to add that word to its
      dictionary.  From that point on that word will not be flagged as
      misspelled.  If at a later date you decide that you did not want the
      added word in the dictionary you can use the Dictionary Manager utility
      to remove it from the dictionary.

      Pressing the <F7> key will cause ShareSpell to mark the word in the
      file for you by placing a '@' character before it and before all
      further occurrences of that word in the document.  The main use for
      this is for cases where you think the word may be spelled correctly,
      but do not have a dictionary at hand to check it.  Later, you can use
      your word processor to find all the marked words by having it search
      for the '@' character.

      To quit ShareSpell just press the <F10> key.  If you have made any
      changes to the document, it will ask if you want to save those changes
      before quitting ShareSpell.  If you answer <Y>es the updated file will
      be written to disk in place of the old version and the old version will
      be saved with a .BAK extension.  If you answer <N>o the file will
      remain as it was before you started ShareSpell.
                                                                      Page 7



      QUICK REFERENCE

        Starting ShareSpell:

          At the DOS Prompt type one or the following:

          SS or SS filename

        Starting ShareSpell without a file name will make it prompt you
        for the name of the file to spell check.  Otherwise, it will spell
        check the file you specify.  If the file does not exist, you will
        be told so and asked for a new file name.  Pressing the <ESC> key
        will exit you immediately from ShareSpell.

        ShareSpell will scan through the file until it finds a word that it
        thinks is misspelled.  It will than give you a list of possible
        correct spellings.  At that point you can press one of the following
        keys:

        <RETURN>
          To accept the word as is and continue.

        <ESC>
          To ignore the word in the document.  This is useful for words such
          as proper names that you know are spelled correctly, but do not
          want to add to the dictionary.

        <F7>
          Mark and ignore the word.  Place a "@" in front of the word and
          all later occurrences of it so that you can find it later with your
          word processor.

        <F8>
          To add the current word to the dictionary.  Good words to add are
          things such as your name or other proper nouns that you use often.

        <UP ARROW>
        <DOWN ARROW>
          To select one of the alternative spellings.  When the word you want
          to replace the misspelled word with is highlighted press the
          <RETURN> key and it will be replaced.

        <LEFT ARROW>
        <RIGHT ARROW>
          To correct the current word manually.  After you press one of the
          arrow keys you can use the <DEL>, <BACKSPACE>, and arrow keys to
          edit the misspelling.  When you have it corrected, press the
          <RETURN> key to replace it in the document.  Otherwise pressing
          the up or down arrow will bring you back to the list of suggestions.

        <F10>
          Quit ShareSpell.  If you have made any changes ShareSpell will ask
          if you want to save the changes made so far.


        Use the selected keys until you have corrected all of the document and
        ShareSpell ends or until you end ShareSpell with the <F10> key.
                                                                      Page 8



      QUESTIONS OR COMMENTS

      If you have any questions or comments I can be reached through the
      U.S. Mail at:

         Acropolis Software
         P.O. Box 5037
         Fair Oaks, CA  95628


      Or electronically:

         On CompuServe by sending EasyPlex mail to 75146.3471
                                                                      Page 9



      REGISTRATION

      As the name implies it is a shareware product.  This is not a demo or
      crippled version of ShareSpell, but a full working version as all the
      earlier releases have been.  If you use ShareSpell, I ask you to send
      $20 to Acropolis Software to register your copy in return you will
      receive a disk containing the latest version of both the program and
      the dictionary.  When you register your copy of ShareSpell, please use
      the order form below. If you do not use the form, please specify that
      you are registering ShareSpell and indicate your preferred disk format
      (5 1/4" or 3 1/2").

      Purchases of 10 or more copies will receive a site license package
      with consists of a master copy of the latest version and an agreement
      that you can make the specified number of copies.  Site license are
      charged $10.00 per copy they wish to make.

      The spell checking technology is also available for purchase.  Contact
      me for more information.


    _______________________________________________________________________

                               Registration / Order Form


     Name       : __________________________
     Company    : __________________________
     Address    : __________________________
                  __________________________
     City/State : __________________________
     Zip Code   : __________________________

     (Optional)
     Phone      : __________________________



     Basic registration (less than 10 copies)      : $20 x ___ = $ ______
     Site license registration (10 or more copies) : $10 x ___ = $ ______
             ** California residents please add sales tax.  **

     Disk Format:    5 1/4" ___    3 1/2"  ___

     The product being registered is ShareSpell v2.3.
     You will receive a registered copy of the latest version of ShareSpell
     without the shareware screen at the end, the latest dictionary and
     related utilities.

     Send check or money order to:

         Acropolis Software
         P.O. Box 5037
         Fair Oaks, CA  95628


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2682

     Volume in drive A has no label
     Directory of A:\

    ACROP    DIC    250573   2-20-90  10:56a
    DICMAN   DOC     15011   2-22-91   6:24p
    SS       DOC     23675   1-25-91   3:50a
    DICMAN   EXE     14695   2-22-91   6:31p
    SS       EXE     19879   1-25-91   4:21a
    DICMAN14 NEW      1203   2-22-91   6:28p
    SS23     NEW      5710   1-25-91   3:46a
    PREVIEW  EXE      7347   4-18-91   1:15p
    GO       BAT       101   7-17-91   5:41p
    FILE2682 TXT       974   1-01-80  12:44a
           10 file(s)     339168 bytes
                           17408 bytes free
