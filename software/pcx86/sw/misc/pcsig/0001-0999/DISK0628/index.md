---
layout: page
title: "PC-SIG Diskette Library (Disk #628)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0628/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0628"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BIBLEQ"

    BIBLE-Q is a trivia-type game with 600 multiple-choice questions drawn
    from the Bible (600 more available with registration). Bible students
    and teachers of the church school variety will certainly want this in
    their collections.
    
    Test youself and others on a wide range of topics including geography of
    the Biblical lands, personalities, incidents, and teachings of the
    Gospels. Players can choose the category and difficulty level of the
    question. Combine with WORDWORKER (PC-SIG disk #'s 581, 582) and you
    have the foundation for an excellent on-line scripture study system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIBLEQ.DOC

{% raw %}
```



                          BIBLE-Q DOCUMENTATION

     DESCRIPTION:

          "Bible-Q" is a quiz-type game for the IBM PC and
          compatibles.  It is designed to challenge your factual
          knowledge of the Scriptures and to encourage you to dig in
          them. The shareware version of the game contains 600
          multiple-choice questions drawn from the Scriptures.  More
          questions are available through registration.

     THE SHAREWARE CONCEPT:

          "Bible-Q" is provided as user-supported software.
          User-supported software is a means for the computing
          community to receive quality software and at the same time
          support software authors directly.  It is based on the
          following assumptions:

                 The user can best determine the value and usefulness
                 of software by trying it on his own system.  After
                 trying a program one can tell whether it serves his
                 or her applications, needs, and tastes.

                 The creation of independent personal computer
                 software can and should be supported by the computing
                 community.

                 People should be able to copy programs freely to make
                 the most use of the powerful tools provided by
                 electronic information.

          If you like this program and decide to make use of it,
          please register for $10.  In return, you get the latest
          version of "Bible-Q" with 1200 questions.  I also have
          another program called "Daily Bread" available.  Please see
          below for a description of that program.  Your support helps
          me maintain my hardware and software and in turn support
          you.

                                Robert S. Smith
                               557 Plantation Rd.
                            Pelican Lake, WI  54463

          Copyright (C) 1986 - 1989 by Robert S. Smith.  All rights
          reserved. Non-registered users are granted a limited license
          to use this product on a trial basis, and to copy the
          program for trial use by others subject to the following
          limitations: 1) This program is distributed as is.  2) No
          fee, charge, or other consideration is requested or
          accepted.  Shareware distributors who charge for disks must
          have written permission to distribute this program.

     SYSTEM REQUIREMENTS:

          Beyond an IBM PC or good compatible with one disk drive and
          256 K of memory, no special equipment is necessary.  The
          game runs equally well on monochrome or color systems.

                                       1






    SPECIAL OFFER

          I have another program called "Daily Bread."  This program
          is a calendar which displays the day, date, a Bible passage,
          and a suggested Bible reading.  The readings cover the
          entire Bible over the course of a year.  You can run "Daily
          Bread" in a memory-resident mode and pop up passages over
          your applications.  Verses are available from either the
          King James Version or the New International Version.
          To receive the latest registered copies of both "Daily
          Bread" and "Bible-Q," send $15.

          Also available:  Quizzle, a program which allows you to
          generate your own quizzes in a Bible-Q format.  Quizzle
          allows you to use your word processor to generate quizzes as
          long as it can handle ASCII or DOS text files.  Add $10 to
          registration for this program.

     INSTALLATION:

          First you will probably want to make a backup copy of the
          game. Use the "diskcopy" command or the "copy a:*.* b:"
          command.  Then set aside one of the disks in your archive.
          To start the game, boot your computer with your DOS disk.
          At the A> prompt insert your "Bible-Q" disk in the a: drive,
          type "bq" (no quotes), and hit enter.  The game will load
          automatically.  You may also copy the files to your hard
          drive, if you have one, and run the game from there.  The
          only thing to remember is that the game must be run from the
          default drive and the default subdirectory.  For example, if
          you copy this game to a directory called c:\games you must
          be in that directory when you type "bq" to run the program.
          You can change to that directory with the "cd" change
          directory command. The program must be able to find the data
          files (cat1.dat through cat5.dat).  Note:  "Bible-Q" is also
          available on 3.5" diskettes.

      SOUND

          If you want sound while running the program, use the "s"
          switch when starting the program from the command line.
          Example:  at the A> prompt type "bq s" (no quotes) and hit
          <enter>.  Make sure there is a space between the "bq" and
          the "s. "

      COLOR

          With certain types of monochrome systems, the print may be
          hard to read because some text is bright while the rest is
          dim.  If you have this problem, use the "c" switch at the
          command line.  (At the prompt enter "bq c").

      PLAYING THE GAME:

          "Bible-Q" is meant to be easy to play.  Simply follow the
          onscreen instructions. There are modes of play.  types of
          game.  In the manual game the player(s) can choose the
          category and difficulty level of the question.  In the
          automatic game the program does this automatically.

                                       2






     BIBLE REFERENCES:

          At the request of several users, Bible references were added
          so that users can check the context of the questions.   At
          times no specific reference was applicable, so the program
          refers the user to a map or dictionary, or simply replies
          with the word "general." Here is a list of the abbreviations
          used for Bible books:


                              OLD TESTAMENT

        Gn  Genesis                          Ec  Ecclesiastes
        Ex  Exodus                          Sol  Song of Solomon
        Lv  Leviticus                        Is  Isaiah
        Nu  Numbers                          Jr  Jeremiah
        Dt  Deuteronomy                      Lm  Lamentations
       Jos  Joshua                          Eze  Ezekiel
       Jdg  Judges                           Dn  Daniel
        Ru  Ruth                             Ho  Hosea
      1 Sm  1 Samuel                         Jl  Joel
      2 Sm  2 Samuel                         Am  Amos
     1 Kgs  1 Kings                          Ob  Obadiah
     2 Kgs  2 Kings                         Jon  Jonah
     1 Chr  1 Chronicles                    Mic  Micah
     2 Chr  2 Chronicles                     Na  Nahum
       Ezr  Ezra                            Hab  Habakkuk
        Ne  Nehemiah                        Zph  Zephaniah
       Est  Esther                           Hg  Haggai
       Job  Job                             Zch  Zechariah
        Ps  Psalms                          Mal  Malachi
        Pr  Proverbs

                              NEW TESTAMENT

        Mt  Matthew                        1 Tm  1 Timothy
        Mk  Mark                           2 Tm  2 Timothy
        Lk  Luke                             Tt  Titus
        Jn  John                            Phm  Philemon
        Ac  Acts                             He  Hebrews
        Ro  Romans                          Jas  James
     1 Cor  1 Corinthians                  1 Pe  1 Peter
     2 Cor  2 Corinthians                  2 Pe  2 Peter
        Ga  Galatians                      1 Jn  1 John
       Eph  Ephesians                      2 Jn  2 John
       Php  Philippians                    3 Jn  3 John
       Col  Colossians                       Jd  Jude
      1 Th  1 Thessalonians                  Re  Revelation
      2 Th  2 Thessalonians







                                       3









     QUESTION CATEGORIES:

          The questions are arranged in five categories--Old Testament
          1, Old Testament 2, Geography etc., Life of Jesus, and New
          Testament.  The "Old Testament 1" category contains
          questions drawn from the books of Genesis through Ruth.
          "Old Testament 2" contains questions from 1 Samuel through
          Malachi.  "Geography etc." contains questions on
          geographical facts drawn from the whole Bible.  It also
          contains general questions on the Bible. "Life of Jesus"
          contains questions drawn from the four gospels. "New
          Testament" contains questions drawn in general from the New
          Testament.  Each category has 120 (240 for registered
          version) questions.

     ENDING THE GAME:

          Press the Esc key.

     PRINTING QUIZZES

          You now have the option of printing out quizzes.  This
          option appears on the first menu.  Subsequent menus will
          display the types of quizzes available.  This feature should
          be useful for Bible classes and church groups.

     TANDY USERS (& other compatibles)

          If you have arrow keys separate from your number pad, they may
          not work for the manual mode of the game.  You may need to use
          the 2,4,6, or 8 keys for the arrow keys.

     THE BEREAN AWARD:

          Players scoring more than 30,000 points in the game get the
          Berean award on the scoreboard screen.  What is the significance
          of this award?  I can't tell you--it's related to one of the
          questions!

     AUTHOR:

          Robert S. Smith
          557 Plantation Rd.
          Pelican Lake, WI  54463

     ADDRESS FOR REGISTRATIONS

          "Bible-Q"
          PO Box 1790
          White Salmon, WA  98672

          (Wisdom Research has kindly consented to handle the registrations to
          free up my time for ministry and programming.)


                                       4










                            REGISTRATION FORM
                BIBLE-Q 4.0 FOR THE IBM PC AND COMPATIBLES


    WR89     Invoice #________   (office use only)

                                                    Date: _______________


    Name:     __________________________________________________

    Address:  __________________________________________________

    City    _________________________  State ______  Zip _____________



    Where did you receive your copy of "Bible-Q"? _____________________

    Amount enclosed   $__________

    "Bible-Q" only  __           "Bible-Q" and "Daily Bread"  __

    Add "Quizzle" __

    Send $10 to register "Bible-Q."  Send $15 if you would like to
    receive "Daily Bread" along with the latest version of "Bible-Q."
    A demo version of "Godspeed," a speedy Bible search program with
    many features, is included with orders of $15 or more.  Add $10 if
    you would like "Quizzle" included.  (Price may rise in coming
    years.  Check with the author if the program file is more than 2
    years old.)


    Check one:

            5.25" 360 K diskettes __

            3.5"  720 K diskettes __  (add $1)


     Type of computer:


     Comments:



     Please make check payable to Wisdom Research and mail to:

              Bible-Q
              PO Box 1790
              White Salmon, WA  98672




     Thank you for your support.

```
{% endraw %}

## FILE0628.TXT

{% raw %}
```
Disk No:  628
Disk Title: BibleQ
PC-SIG Version: S3.5

Program Title: Bible-Q
Author Version: 4.1
Author Registration: $12.00
Special Requirements: None.

BIBLE-Q is a trivia-type game with 1,000 multiple-choice questions drawn
from the Bible.  Bible students and teachers of the church school
variety will certainly want this in their collections.

Test youself and others on a wide range of topics including geography of
the Biblical lands, personalities, incidents, and teachings of the
Gospels.  Players can choose the category and difficulty level of the
question.  Combine with WORDWORKER (PC-SIG disk #'s 581, 582) and you
have the foundation for an excellent on-line scripture study system.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FILES.TXT

{% raw %}
```
BIBLEQ   DOC		Documentation for program      
CAT1     DAT    	Questions on Old Testament
CAT2     DAT            More questions on Old Testament    
CAT3     DAT            Geography and general questions    
CAT4     DAT    	Questions on life of Jesus
CAT5     DAT    	Questions on New Testament
README              	Must read file before starting
BQ       EXE    	Main program
BQ       SET      	file with settings for program
PRINTDOC BAT      	batch file to print documentation
FILES    TXT            this file
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0628

     Volume in drive A has no label
     Directory of A:\

    BIBLEQ   DOC     12032  10-09-89  11:49a
    BQ       EXE     99110  10-11-89  10:09p
    BQ       SET       128  10-08-89   9:32p
    CAT1     DAT     25680   8-23-89  10:21p
    CAT2     DAT     25680   8-23-89  10:22p
    CAT3     DAT     25680   8-23-89  10:22p
    CAT4     DAT     25680   8-23-89  10:23p
    CAT5     DAT     25680   8-23-89  10:23p
    FILE0628 TXT       824  12-07-89   1:11p
    FILES    TXT       529  10-11-89  10:52p
    GO       BAT        38   8-31-87  11:15a
    GO       TXT       540   4-05-88   8:21a
    PRINTDOC BAT       283  10-08-89  10:06p
    README             322  10-08-89   9:37p
           14 file(s)     242206 bytes
                           70656 bytes free
