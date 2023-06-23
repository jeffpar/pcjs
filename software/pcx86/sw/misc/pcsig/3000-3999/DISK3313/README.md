---
layout: page
title: "PC-SIG Diskette Library (Disk #3313)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3313/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3313"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MANUAL.DOC

{% raw %}
```


















                                   PERSONALIZED
                                     TRAINING
                                       DIARY


                                    VERSION  1.01

                           Release Date:  August 17, 1992










                               _______
                          ____|__     |                (R)
                       --|       |    |-------------------
                         |   ____|__  |  Association of
                         |  |       |_|  Shareware
                         |__|   o   |    Professionals
                       -----|   |   |---------------------
                            |___|___|    MEMBER








                    (c) Copyright 1992 Lake fFfips Software, Inc.
                                All Rights Reserved


                              Lake fFfips Software, Inc.
                              P.O. Box 8904
                              New Haven, CT  06532-8904















                                 TABLE OF CONTENTS

          INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . . . .   1
                    BACKGROUND  . . . . . . . . . . . . . . . . . . . .   1
                    DEFINITION OF SHAREWARE . . . . . . . . . . . . . .   2
                    DISCLAIMER - AGREEMENT  . . . . . . . . . . . . . .   2
                    OMBUDSMAN STATEMENT . . . . . . . . . . . . . . . .   3
                    SUPPORT . . . . . . . . . . . . . . . . . . . . . .   4

          GETTING STARTED . . . . . . . . . . . . . . . . . . . . . . .   5
                    SYSTEM REQUIREMENTS . . . . . . . . . . . . . . . .   5
                    INSTALLATION  . . . . . . . . . . . . . . . . . . .   5
                    PROGRAM FILES . . . . . . . . . . . . . . . . . . .   6
                    BACKING UP DATA FILES . . . . . . . . . . . . . . .   6
                    KEYS TO KNOW  . . . . . . . . . . . . . . . . . . .   7
                    MODE DISPLAY  . . . . . . . . . . . . . . . . . . .   8
                    STATUS LINE . . . . . . . . . . . . . . . . . . . .   9
                    STARTING THE PROGRAM  . . . . . . . . . . . . . . .   9

          MAIN MENU . . . . . . . . . . . . . . . . . . . . . . . . .    10

          SETUP AND MAINTENANCE . . . . . . . . . . . . . . . . . . .    10
                    ACTIVITIES  . . . . . . . . . . . . . . . . . . .    10
                    CATEGORIES  . . . . . . . . . . . . . . . . . . .    11
                    ATTRIBUTES  . . . . . . . . . . . . . . . . . . .    11
                    USING CATEGORIES & ATTRIBUTES . . . . . . . . . .    11
                    DELETING CATEGORIES & ATTRIBUTES  . . . . . . . .    11
                    PRINT BLANK LOGS  . . . . . . . . . . . . . . . .    12

               DELETE LOG RECORDS . . . . . . . . . . . . . . . . . .    12
                    SCREEN COLORS . . . . . . . . . . . . . . . . . .    12
                    REPAIR DATABASES  . . . . . . . . . . . . . . . .    12

          TRAINING  . . . . . . . . . . . . . . . . . . . . . . . . .    13
                    INSERTING . . . . . . . . . . . . . . . . . . . .    13
                    MODIFYING . . . . . . . . . . . . . . . . . . . .    14
                    SEARCHING/VIEWING . . . . . . . . . . . . . . . .    14
                    DELETING  . . . . . . . . . . . . . . . . . . . .    15
                    DISPLAY ATTRIBUTES  . . . . . . . . . . . . . . .    15
                    MILES/KILOMETERS  . . . . . . . . . . . . . . . .    15

          REPORTS . . . . . . . . . . . . . . . . . . . . . . . . . .    16
                    DEFINING  . . . . . . . . . . . . . . . . . . . .    16
                    MODIFYING . . . . . . . . . . . . . . . . . . . .    17
                    RUNNING . . . . . . . . . . . . . . . . . . . . .    17
                    DELETING  . . . . . . . . . . . . . . . . . . . .    17






















          USING THE REPORTS SYSTEM  . . . . . . . . . . . . . . . . .    18
                    REPORT NAME/DESCRIPTION/TITLE . . . . . . . . . .    18
                    DISPLAY FIELDS  . . . . . . . . . . . . . . . . .    18
                    SORTED BY . . . . . . . . . . . . . . . . . . . .    18
                    GROUPED BY  . . . . . . . . . . . . . . . . . . .    18
                    ANALYZE ACTIVITIES  . . . . . . . . . . . . . . .    18
                    SEARCH CRITERIA . . . . . . . . . . . . . . . . .    18
                    ATTRIBUTE SEARCH  . . . . . . . . . . . . . . . .    19
                    PRINTER SETUP . . . . . . . . . . . . . . . . . .    20
                    ENDING REPORT DEFINITION  . . . . . . . . . . . .    20

          EXPLORING THE TRAINING RECORDS  . . . . . . . . . . . . . .    21
                    SCANNING  . . . . . . . . . . . . . . . . . . . .    21
                    REPORTS . . . . . . . . . . . . . . . . . . . . .    21

          SUMMARY . . . . . . . . . . . . . . . . . . . . . . . . . .    22














































                                                                    Page  1

          INTRODUCTION

               BACKGROUND

          Personalized Training Diary (PTD) was developed to help track
          those elusive factors that affect performance.  As someone
          involved in endurance activities such as running, cross-country
          skiing, or biking, you appreciate how equipment, weather, or
          route conditions can change your outcome.  Cross-country skiers,
          as an example, must take into account such factors as
          temperature, humidity, course profile, and type of wax.

               Until now, it was difficult to record and evaluate those
          factors.  PTD  helps you review training performance of any
          endurance activity, based upon self-determined categories and
          attributes.  You can define a category such as weather and then
          identify attributes such as rainy, humid, hot, cold, etc.  By
          tracking these attributes, you will find it easier to study the
          impact of various conditions.  You can study the effects of
          humidity, temperature, or brand of running shoe, bicycle or ski
          you use.

               PTD helps you explore athletic performance in new ways.  By
          design the program will enable you to think and perform smarter.
          It helps you determine what conditions enhance or hinder
          performance.  An example might be the runner who periodically
          develops sore feet.  The program may help the runner find that
          this occurs when wearing certain shoes, when running up hills, or
          only on humid days.

               You determine the degree of detail and control the
          activities described, the categories and attributes defined, and
          the reports developed.  PTD changes perspective to find new
          understanding of performance.  The program is a tool to test
          assumptions.

               PTD can also be used as educational software.  The program
          adapts well for use in a school setting, enabling integration
          with learning experiences.  PTD can integrate what a student does
          in physical education class with computer sciences as well as
          with other sciences and math classes, allowing the student to
          begin to analyze his or her physical performance.  PTD can bridge
          the gap between courses of study the student may feel are
          unrelated.  Thus, it supports the core of the sciences:  to
          observe and predict.

               Version 1.01 is a step in developing new tools.  It will be
          the users of this software who will shape future versions.  Lake
          fFfips Software encourages your comments and suggestions.


          Lake fFfips Software   Personalized Training Diary












          Page  2

               A word of caution.  When undertaking any training and
          physical-fitness program, one should consult with a physician or
          other qualified health-care professional.  Such consultation is
          advisable when drawing any conclusions based upon information you
          have entered or used from this program.


               DEFINITION OF SHAREWARE

          Shareware distribution gives users a chance to try software
          before buying it.  If you try a Shareware program and continue
          using it, you are expected to register.  Individual programs
          differ on details   some request registration while others
          require it, some specify a maximum trial period.  With
          registration, you get anything from the simple right to continue
          using the software to an updated program with printed manual.

               Copyright laws apply to both Shareware and commercial
          software, and the copyright holder retains all rights, with a few
          specific exceptions as stated below.  Shareware authors are
          accomplished programmers, just like commercial authors, and the
          programs are of comparable quality.  (In both cases, there are
          good programs and bad ones!) The main difference is in the method
          of distribution.  The author specifically grants the right to
          copy and distribute the software, either to all and sundry or to
          a specific group.  For example, some authors require written
          permission before a commercial disk vendor may copy their
          Shareware.

               Shareware is a distribution method, not a type of software.
          You should find software that suits your needs and pocketbook,
          whether it's commercial or Shareware.  The Shareware system makes
          fitting your needs easier, because you can try before you buy.
          And because the overhead is low, prices are low also.  Shareware
          has the ultimate money-back guarantee -- if you don't use the
          product, you don't pay for it.


               DISCLAIMER - AGREEMENT

          Users of  Personalized Training Diary  must accept this
          disclaimer of warranty:

               Personalized Training Diary  is supplied as is.  The
               author disclaims all warranties, expressed or implied,
               including, without limitation, the warranties of
               merchantability and of fitness for any purpose.  The
               author assumes no liability for damages, direct or
               consequential, which may result from the use of
               Personalized Training Diary.

          Lake fFfips Software   Personalized Training Diary












                                                                    Page  3

               The trial version of Personalized Training Diary  is a
          "shareware program" and is provided at no charge to the user for
          evaluation.  Feel free to share it with your friends, but please
          do not give it away altered or as part of another system.  The
          essence of "user-supported" software is to provide personal-
          computer users with quality software without high prices, and yet
          to provide incentive for programmers to continue to develop new
          products.  If you find this program useful and find that you are
          using  Personalized Training Diary  and continue to use
          Personalized Training Diary  after a reasonable trial period, you
          must make a registration payment of $79.95 to Lake fFfips
          Software.  The $79.95 registration fee will license one copy for
          use on any one computer at any one time.  You must treat this
          software just like a book.  An example is that this software may
          be used by any number of people and may be freely moved from one
          computer location to another, so long as there is no possibility
          of it being used at one location while it's being used at
          another. Just as a book cannot be read by two different persons
          at the same time.

               Commercial users of Personalized Training Diary  must
          register and pay for their copies of  Personalized Training Diary
          within 30 days of first use or their license is withdrawn.
          Site-License arrangements may be made by contacting Lake fFfips
          Software.

               Anyone distributing  Personalized Training Diary  for any
          kind of remuneration must first contact Lake fFfips Software for
          authorization. This authorization will be automatically granted
          to distributors recognized by the (ASP) as adhering to its
          guidelines for shareware distributors, and such distributors may
          begin offering Personalized Training Diary  immediately (However
          Lake fFfips Software must still be advised so that the
          distributor can be kept up-to-date with the latest version of
          Personalized Training Diary).

               You are encouraged to pass a copy of the trial version of
          Personalized Training Diary  along to your friends for
          evaluation.  Please encourage them to register their copy if they
          find that they can use it.  All registered users will receive a
          copy of the latest version of PTD  with registration and trial
          information removed and a professionally printed copy of the
          manual.


               OMBUDSMAN STATEMENT

          Lake fFfips Software, Inc. is a member of the Association of
          Shareware Professionals (ASP). ASP wants to make sure that the
          shareware principle works for you. If you are unable to resolve a

          Lake fFfips Software   Personalized Training Diary












          Page  4

          shareware-related problem with an ASP member by contacting the
          member directly, ASP may be able to help. The ASP Ombudsman can
          help you resolve a dispute or problem with an ASP member, but
          does not provide technical support for members' products. Please
          write to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442
          or send a CompuServe message via CompuServe Mail 70007,3536 to
          ASP.

               SUPPORT

          Registered users receive one year of product support.  Support is
          available by telephone, mail, or CompuServe.  Phone support is
          available Monday through Friday, 10:00 A.M. to 3 P.M. Eastern
          Time.  Please include a self-addressed, stamped envelope, when
          requesting support by mail.

          Users evaluating the trial version can get support for
          installation only.


               Lake fFfips Software, Inc.
               P.O. Box 8904
               New Haven, CT  06532-8904
               (203) 933 9321

               CompuServe:  73500.3261

























          Lake fFfips Software   Personalized Training Diary












                                                                    Page  5

          GETTING STARTED

               SYSTEM REQUIREMENTS

          1.  DOS version 2.11 or later

          2.  Hard disk

          3.  640K RAM

          4.  Config.sys should contain:

                  files = 20
                  buffers = 15

          5.  A 286 or better processor is recommended.


               INSTALLATION

          Be sure to make backup copies of all diskettes before beginning
          the installation process.

          Trial Version:

          1.  Create a directory on your hard drive.

          2.  Copy all files to that directory.

          3.  Type: PKUNZIP PTD10101 <cr> to "unzip" all files into
              directory.

          Registered Version:

          1.  Put PTD disk 1 into your computer's floppy drive.

          2.  At the DOS prompt type your floppy's drive letter followed by
              a colon and press Enter.

          3.  Type Install at  the DOS prompt and press Enter.

          4.  Follow the instructions of the install program.











          Lake fFfips Software   Personalized Training Diary












          Page  6

               PROGRAM FILES

          The following is a list of files which make up Personalized
          Training Diary:

                  Training.exe
                  Log.exe
                  Set_up.exe
                  Reports.exe
                  Training.err
                  Run.scr
                  Runrep.scr
                  Ptr.scr
                  Def.bin
                  Register.txt  (trial version only)
                  Manual.doc  (trial version only)


               BACKING UP DATA FILES

          Personalized Training Diary creates and maintains 4 files which
          store data:

                  Log.bin:  stores training records.

                  Def.bin:  stores setup information for activities,
          categories, and attributes.

                  Rep.bin:  stores reports.

                  Color.set:  stores screen color information.

          You should make backup copies of these files regularly to protect
          your data.  Consult your computer manual if you need more
          information about backup procedures.
















          Lake fFfips Software   Personalized Training Diary












                                                                    Page  7

               KEYS TO KNOW

           KEY            FUNCTION

          Home      When in records or reports display mode, moves to
                    the first one

          End       When in records or reports display mode, moves to
                    the last one

          Esc       Cancels or exits a function

          Enter     Accepts input or makes a menu selection

          Cursor    Used to scan records or reports one at a time;
                    moves cursor in menus; move cursor during report
                    output to screen

          Page-up
          Page-down Used to move through records 25 at a time or
                    reports 10 at a time

          Tab       Moves cursor from field to field in Insert and
                    Define modes

          Insert    Changes from Overwrite to Insert mode while
                    entering training records or defining reports

          F2        Enters Insert mode in training records; enters
                    Define mode in reports definition; enters Add mode
                    in activity, category, and attribute setup

          F3        Enters Modify mode in training records or  report
                    definition

          F4        Begins a new search while in training records; enters
                    Output mode in reports definition

          Ctrl F4   Allows the changing of search items

          F5        Deletes training records or reports

          F6        Selects or unselects attributes or items in multiple
                    choice menus

          F7        Displays training record attributes

          F8        Changes display from miles to kilometers

          F10       Accepts input or choices

          Lake fFfips Software   Personalized Training Diary












          Page  8

               MODE DISPLAY

          Display screens contain information to help you use the program.
          In the lower left-hand corner a MODE display reminds you of what
          you are now doing.  For example, when a menu is displayed  CHOOSE
          appears.  When you need to select an operation  "DO WHAT?"
          appears, and so on.

                  MODE                MEANING

                  DO WHAT?       Choose an action using an F key

                  CHOOSE         Choose a menu item

                  INSERT         Insert new training record

                  ADD            Add activities, categories, or attributes

                  DELETE         Delete activities, categories, attributes,
                                 records, or reports

                  CANCEL         Cancel requested action

                  MODIFY         Modify a training record or report

                  PRINTING       Send output to printer

                  OUTPUT         Run a report

                  UPDATING       Databases are updated after deleting
                                 categories or attributes

                  SEARCH         Search training records based upon user
                                 criteria

                  DISPLAY        Display attributes of a training record or
                                 after finding a record during a search

                  DEFINE         Define a report

                  FIXDATA        Fix a database marked as invalid










          Lake fFfips Software   Personalized Training Diary












                                                                    Page  9

               STATUS LINE

          The status line at the bottom of the screen is another source of
          information.  The status line presents three types of
          information:

          1.  Availability and action of certain keys

          2.  Explanations if you entered inappropriate data

          3.  Confirmation of "Are you Sure? (Y/N)" before the program
              completes the request


               STARTING THE PROGRAM

          At the DOS prompt, type Training and press Enter.  This will
          bring you to the main menu.  If this is the first time you are
          using the software and you have not loaded the default file
          def.bin, you must enter the setup and maintenance option.  Here
          you will identify your training activities, categories, and
          attributes.





























          Lake fFfips Software   Personalized Training Diary












          Page  10

          MAIN MENU

          The main menu gives you access to the training records, the
          reports system, setup and maintenance, and registration
          information, or allows you to exit the program.  When using the
          program for the first time, begin with the setup and maintenance
          option.

          SETUP AND MAINTENANCE

          The setup and maintenance menu allows you to customize PTD to
          your needs.  This is where you define your activities,
          categories, and attributes.  Here you may print out blank log
          pages to record your workouts, adjust screen colors, and do file
          maintenance.

          When you first use Personalized Training Diary the file Def.bin
          supplied with the program contains predefined activities,
          categories, and attributes.  Use this file as is or modify or
          delete it.  It is supplied as a starting point.  If you do not
          wish to use these, just erase the file.

               ACTIVITIES

          By selecting the activities option, you may add or delete
          training activities.  You may list up to 15 separate training
          activities.  These activities will pop up on the training records
          input screen when you are inserting or modifying your training
          records.

               There are several ways to approach defining activities.  If
          you are primarily a runner, you may wish to classify the types of
          running activities you do.  You may have runs geared toward
          endurance, speed, or distance.  Your training regimen may involve
          sprints, interval training, or fartleks.  PTD will allow you to
          define or categorize running activities any way you choose.

               If you participate in multiple activities, you can specify
          each.  You may bike, walk, swim, or cross-country ski.  You may
          participate in two or more activities that have the same
          subcomponents.  An example would be the person who runs and XC
          skis.  In this case, possible activities may be:  "Run endure,"
          "Run sprint," "Xc endure," and "Xc sprint".  The only limitation
          is that the keyed-in activity description cannot be longer than
          10 characters.

               When deleting a specific activity, you no longer can insert
          records containing the activity.  However, the program maintains
          all previous records with this activity, and they are available
          in report mode.

          Lake fFfips Software   Personalized Training Diary












                                                                   Page  11

               CATEGORIES

          By selecting the category option, you can maintain up to 10
          different self-defined categories.  Categories organize
          attributes; they are a means of grouping the various attributes
          that you wish to track.  Examples of categories are weather,
          route, shoes, temperature, and so on.

               ATTRIBUTES

          By selecting the attributes option, you can maintain up to 25
          different attributes under each of the categories that you
          defined.  The program presents these attributes to you when you
          enter, modify, or display training records.

               Under the category of weather, examples of attributes are
          hot, cold, humid, cloudy;  under temperature, examples are ranges
          such as: 51F  - 55F  and 56F   - 60F ; and under route, examples
          of attributes include pond loop, country run, hillside.

               USING CATEGORIES & ATTRIBUTES

          As with activities, you can approach categories and attributes in
          various ways.   Just about anything you can imagine can be an
          attribute and tracked.  The amount of detail is up to you.  Here
          are some examples:


                    Weather:  Hot, Humid, Cool, 51F-55F, Sunny, Rainy

                    Equipment:  Reboks, Nikes, Weights

                    Course:  Park loop, Hill run, In town, Country

                    Course profile:  01, 02, 03, Hilly, Flat

                    Physical:  Strong, Weak, Fatigued, Inspired, Sore Knees

                    Emotional:  Inspired, Up, Relaxed, Stressed

          Also types or brands of equipment such as running shoes,
          bicycles, or skis.

               DELETING CATEGORIES & ATTRIBUTES

          When deleting categories or attributes, PTD will search all
          training records and reports for references to that category.
          The program will ask whether or not to continue with the deletion
          process.  If you select "Yes" from the menu, the program will
          delete that reference from all records and reports that contain

          Lake fFfips Software   Personalized Training Diary












          Page  12

          it.  The remainder of the record or report will be unchanged.  If
          you select "No" the program will not delete any categories or
          attributes.  In either case, you will return to the setup menu.

               PRINT BLANK LOGS

          This option allows you to print out blank log forms.  You may use
          these to record training sessions and as data entry forms.  The
          blanks will include all your self-defined categories and
          attributes; you only need to circle those that apply to the
          particular session.

               DELETE LOG RECORDS

          By selecting this option, you can delete all training records
          while maintaining defined activities, categories, attributes, and
          reports.  This allows you to purge records but keep all other
          information intact.

               SCREEN COLORS

          This option allows you to change screen colors on any EGA\VGA
          color or VGA monochrome monitor running in color mode.  The
          program stores these settings in the file color.set.  If this
          file is missing, PTD will run in monochrome mode.  The first time
          you adjust the screen colors, the program will create the file
          color.set.  Note:  that certain color combinations may produce
          undesirable effects such as invisible text.  Use CAUTION when                                                           CAUTION
          adjusting colors.

               REPAIR DATABASES

          Use this option only for the error "1317  Database(s) are
          invalid" and only when no backup copies of the database exist.
          One reason the databases could be marked as invalid is because a
          power failure occurred before the program finished updating the
          records.  This procedure attempts to recover all undamaged data.
          However, some data may not be recovered.  Regular backup of *.bin
          files is your best protection.












          Lake fFfips Software   Personalized Training Diary












                                                                   Page  13

          TRAINING

          Selecting the training option from the main menu allows you to
          insert, modify, delete, display, and search for training records.
          You also can scan records by using the Cursor keys to move one
          record at a time, the Page-up and Page-down keys to move forward
          and back 25 records at a time, the Home key to go to the first
          record, or End key to go to the last record.

               INSERTING

          Selecting F2 insert mode displays a blank record.  You enter the
          information requested.  Press Enter or Tab to move from field to
          field.

               FIELD               USE

               Date           Is a required field and must be in the format:
                              MM/DD/YYYY

               Session        Is automatically calculated based upon the
                              number of training records per day

               Activity       Brings up a menu of your activities; use the
                              Cursor keys to move, Enter to select, or Tab to
                              skip

               Distance       Is a required field and must be between 0.01 and
                              999.99

               Elapsed Time   Is a required field and must be in the format:
                              MM:SS or HH:MM:SS

               Miles/Minute
               Minutes/Mile   Are calculated automatically

               Pulse Rates
                 Resting
                 Training     Must be whole numbers

               Weight         Must be a whole number

               Time of Day    Brings up a menu:  morning, afternoon, evening,
                              night; use the Cursor keys to move, Enter to
                              select, or Tab to skip.

               After "Time of Day" you enter the category menu.  When you
          select one of the categories, a screen appears with your
          predefined attributes for that category.  Use the Cursor keys to
          move from attribute to attribute, F to select or unselect

          Lake fFfips Software   Personalized Training Diary












          Page  14

          attributes.  You can select more than one attribute.  Then use
          F10 to accept the selections or Esc to cancel all selections.
          Either option will return you to the category menu.  If you were
          on the last category item on the menu, you will return to the
          date field of the training record.

               You may now review what you entered.  Select F10 to save or
          Esc to cancel the record.  In either case, the program will ask,
          "Are You Sure? (Y/N)".  Press "Y" to confirm your decision or "N"
          if you wish to reconsider your choice.

               MODIFYING

          To modify a record, first scan or use the search option to find
          the record.  After locating the record, press F3.  You can modify
          all items except date.

               When you are in the attributes' menus, all previously
          selected attributes are highlighted.  Use F to select or unselect
          attributes.  F10 will accept the changes.  Esc will cancel the
          changes.

               Once you have modified the record, as in insert mode, F10
          will accept all changes.  Esc will cancel changes.  Again, the
          program will ask, "Are You Sure?  (Y/N)".  Press "Y" to confirm
          your decision or "N" if you wish to reconsider your choice.

               SEARCHING/VIEWING

          The search function allows you to find a specific record or
          groups of records.  By entering information in one or more fields
          or selecting attributes you can find records that match.

               Pressing F4 brings up a blank screen.  You can enter
          criteria into as many or as few fields as you like.  You can also
          select attributes.  Then by pressing F10 the program will search
          for the first record that matches all the fields you filled out
          and attributes you selected.  If more than one attribute was
          selected a menu will ask if records must meet all the attributes
          or just any one.

               By using the Cursor keys the program will search for the
          next or previous record that matches while Page Up and Page Down
          will move 25 at a time.  Pressing F7 will allow you to look at
          the attributes of the current record.

               You can begin a new search at any time by pressing F4 or
          Ctrl F4.  F4 clears all previous search criteria, while Ctrl F4
          saves the previous search criteria so that you can modify it.


          Lake fFfips Software   Personalized Training Diary












                                                                   Page  15

               Pressing F3 while in search mode will let you modify the
          currently displayed record.  Once you are done modifying the
          record you will return to search mode.

               DELETING

          You can delete the currently displayed record by pressing F5.
          The program will asked, "Are You Sure?  (Y/N)".  Press "Y" to
          delete the record or "N" to keep it.

               DISPLAY ATTRIBUTES

          You can view the attributes of any displayed record by pressing
          F7.  This places you in the category menu.  Then, simply select
          the category of attributes you wish to view.  Pressing Esc while
          in the category menu will return you to where you were.

               MILES/KILOMETERS

          By pressing F8 you can change the format of how distance and pace
          are displayed.  Miles, miles per minute, and minutes per mile
          become kilometers, kilometers per minute, and minutes per
          kilometer.  The program calculates and stores both formats.




























          Lake fFfips Software   Personalized Training Diary












          Page  16

          REPORTS

          Personalized Training Diary allows you to develop comprehensive
          reports.  It can sort, select, and display various training
          records.  The program also can group the records by activity and
          report minimums, maximums, and averages of distance, pace,
          elapsed time and pulse rates.

               The report option allows you to define, modify, delete, and
          run reports.  You can scan through reports by using the Cursor
          keys to move one report at a time, Page-up or Page-down to move
          10 forward or backward, use the Home key to go to the first, or
          use the End key to go to the last.

               DEFINING

          You can define a report by selecting F2.  Enter the information
          requested.  Press Enter or Tab to move from field to field.

                FIELD               USAGE

                Name                Is a required field and must be unique.

                Title               Any title you chooses.

                Description         Additional optional space for describing
                                    what the report does.

                Display Fields      A menu to choose fields to display.

                Sort Fields         A menu to choose sort order.

                Group               A menu to group information.

                Analyze             A menu to select whether or not to do a
                                    standardized set of calculations grouped
                                    by activity

                Search Criteria     A prompt based system to set search
                                    criteria.  It allows you to search for
                                    records based upon any number of criteria.
                                    Items can be linked together by logical
                                    and's and or's or by grouping criterion in
                                    parentheses.

                Attribute Search    Whether to search or not search for
                                    common, or selected attributes.

                Printer Setup       Allows column width, page length, and
                                    printer set up string to be set.

          Lake fFfips Software   Personalized Training Diary












                                                                   Page  17

               After entering or selecting items for your report, press F10
          to save or Esc to cancel the report.  In either case, the program
          will ask, "Are You Sure? (Y/N)".  Press "Y" to confirm your
          decision or "N" if you wish to reconsider your choice.

               MODIFYING

          To modify a report, first scan to find the report.  After
          locating it, press F3. You can modify all items except the name.

               Once you modify a report, as in define mode, F10 will accept
          all changes.  Esc will cancel changes.  The program will ask "Are
          You Sure?  (Y/N)".  Press "Y" to confirm your decision or "N" if
          you wish to reconsider your choice.

               RUNNING

          You can run the displayed report by pressing F4.  A menu will
          appear and ask you send output to the screen or printer.  When
          displayed on the screen you may move around with the Cursor keys,
          use Page-down to see the next page of the report, or Esc to quit.

               Output sent to the printer will print out based upon the
          width defined in the printer setup.  If the report is wider than
          the defined width, the program will print the remaining text on
          the next page.  In other words, you can print wide reports on a
          narrow-carriage printer without any extra software.

          Output is in the following order:

          1.  Records matching search and attribute criteria

          2.  Math calculations if selected

          3.  Common attributes if selected

               DELETING

          You can delete the current report by pressing F5.  The program
          will asked "Are You Sure?  (Y/N)".  Press "Y" to delete the
          report or "N" to keep it










          Lake fFfips Software   Personalized Training Diary












          Page  18

          USING THE REPORTS SYSTEM

               REPORT NAME/DESCRIPTION/TITLE

          It is simple to use the report system.  You begin by selecting
          reports from the main menu.  To define a report, select F2.  Type
          in a name and press Enter.  You may enter a title and description
          or Tab to skip those fields.

               DISPLAY FIELDS

          You are now in the reports definition menu.  Press Enter to
          select the display fields option.  Using the Cursor keys to move
          and F to select, choose the fields to display.  The order in
          which you choose will be the order left to right in which the
          fields are displayed.  If you change your mind, use the select
          reset to clear your previous choices.  Once selected, press F10
          to accept choices.

               SORTED BY

          You are now in the sort by option.  Select by pressing Enter.
          This is similar to the display fields option, and you use it the
          same way:  F to select, F10 to accept.  Both display fields and
          sort by are required options.

               GROUPED BY

          The next option is grouped by.  This is optional and allows you
          to group records together by one of fields in the record.  Common
          choices are activity or time of day.

               This option works in conjunction with sorted by.  If you
          want each activity grouped together, you must choose activity as
          your first sort field.

               ANALYZE ACTIVITIES

          The analyze activity option performs comparisons, averages, and
          summaries.  It reports the number of sessions and the dates
          involved for each activity.  It also reports the minimum,
          maximum, and average of distance, elapsed time, miles/minute,
          minutes/mile, pulse rates, and weight, along with the totals of
          distance and elapsed time.  Analysis is performed on only those
          records meeting the search and attribute criteria.  This allows
          you to compare your performance based upon different criteria.

               SEARCH CRITERIA

          Search criteria is the most sophisticated option.  It operates in

          Lake fFfips Software   Personalized Training Diary












                                                                   Page  19

          two modes:  a prompt system for the novice, and direct edit for
          the experienced user.  Your may select multiple criteria linked
          by and's and or's, and grouped by parentheses.

               The first choice is whether or not to open a set of
          parentheses.  Parentheses allow you to group criteria and set
          conditions which must be met as a single criteria.  Next, you
          will be prompted to select a field, comparison method, and
          criteria.  If you opened parentheses, you will be asked whether
          or not to close the parentheses.  You can now select a logical
          link to the next field, comparison method, and criteria or end
          the process. As an example:



                  Activity = Running and Date > 1/1/1991 or Date < 1/1/1992

                  This will give you records where the activity is running
                  that occurred after 1/1/1991 and all records regardless
                  of activity before 1/1/1992.
                  Activity = Running and (Date > 1/1/1991 or Date <
                  1/1/1992)

                  This will give you records where the activity is running
                  and is between the dates 1/1/1991 and 1/1/1992.

               When you press Esc to end the search criteria selection the
          program prompts gives the option of direct edit.  You can edit,
          Esc discard, or F10 accept to search criteria.  As always, the
          program asks, "Are You Sure? (Y/N)".  If there are any errors in
          the search criteria, the program will display a message and the
          cursor will appear by the error.

               Note:  If you have deleted an activity, it will not appear
          on the prompt menu, even if records still contain the activity.
          Simply press Esc and a blank criteria field will appear.  Type in
          the activity and press Enter.

               ATTRIBUTE SEARCH

          There are three options for searching attributes:

                  Do Not Search:  Ignore attributes when searching for
                                  records

                  Find Common:  Identify all attributes that records have
                                in common

                  Find Selected:  Select records that contain the selected
                                  attributes

          Lake fFfips Software   Personalized Training Diary












          Page  20

               The find selected option allows you to search for records
          that contain one or more of the attributes that you select.  When
          you select this option, the attribute menu system appears and
          functions the same as when you enter training records.  You
          (un)select  attributes with F and accept with F10.

               Once you have finished selecting attributes, the program
          will give you the choice between "aLl matching" or "aNy
          matching".  aLl matching means the records must contain all the
          attributes identified.  aNy matching means only one of the
          identified attributes need be present.

               PRINTER SETUP

          The printer setup option sends basic information to the printer.
          You can accept or change lines per page, page width in columns,
          or printer setup string.  When your report goes to the printer,
          the printer setup determines how much information will fit on a
          page.  If the report is wider than the page width,  the printer
          will sent the extra columns to the next page.  This allows you to
          print wide reports on narrow-carriage printers without
          compressing print.

               Note:  The default for laser printers is usually 60 lines
          per page.  This may cause a blank page to eject between printed
          pages and cause misalignment of the report.  To avoid this,
          change the page-length option to 59 lines per page or 1 less than
          what the printer is set at.

               ENDING REPORT DEFINITION

          Once you have finished defining a report, press F10 to accept it
          or Esc to cancel it.  The program will ask,  "Are You Sure?
          (Y/N)".  Press "Y" to confirm your decision or "N" if you wish to
          reconsider your choice.  Once you save a report, you can run it
          by pressing F4 and selecting screen or printer from the output
          menu.














          Lake fFfips Software   Personalized Training Diary












                                                                   Page  21

          EXPLORING THE TRAINING RECORDS

          There are two basic ways to explore training records.  First, you
          can scan through individual records with selected criteria using
          the search function in the training record area.  The second
          option is to develop reports.


               SCANNING

          The simplest enquiries can be handle through the training log
          option of the main menu.  By simply using the Cursor keys or
          Page-up and Page-down, you can scan the records in chronological
          order.  To narrow down the scope of the search you can select F4,
          enter some criteria such as type of activity, date, or time of
          day and press F10.  For example, select the activity of "Running"
          and time of day "Afternoon" to see only those matching records.
          Press F7 to view the attributes of the displayed record.

               You can modify your search at any time by pressing Ctrl F4
          and change the item you are searching for.  Press F4 if you wish
          to begin a totally new search.

               REPORTS

          The reports system offers a more sophisticated approach to
          analyzing training records.  Here are some hints for getting the
          most out of your reports.

               The best approach is to start with reports that are broad in
          scope, and later define additional reports that narrow down
          factors.  For example, if you are interested in your biking
          performance, you might begin by developing a report that displays
          all biking records and looks for common attributes.  You may find
          there are no common attributes on the first pass.

               You can then narrow the scope of records by choosing only a
          certain period of dates, time of day, or distance.  You may find
          common attributes appearing such as you are emotionally
          "Stressed" on distances less than 4 miles, or you physically have
          a "Sore back" on distances over 10 miles.  In fact, if the latter
          were the outcome you might explore adding new attributes to the
          physical category like handlebar type and height or change of
          seat or seating position.

          Another approach is to look for specific attributes.  As a
          runner, you may find very different performances over the same
          course correlated to such factors as temperature, humidity, or
          type of running shoe.  By running two or more reports and varying
          one attribute in each, you may begin seeing  where the

          Lake fFfips Software   Personalized Training Diary












          Page  22

          differences are in your overall performances.

               Remember correlations do not mean cause and effect.  Some
          other factor may be the cause of two other unrelated factors
          occurring together.  This program is a tool to help you gain
          another perspective on your training.

          SUMMARY

          Personalized Training Diary is a platform to build upon.  It
          introduces a way to assess the effect of various factors on
          endurance performance.  Through the development of your own
          categories and attributes, you assess their effect on your
          performance.  PTD helps organize your approach towards training
          by giving you a framework to evaluate performance.  You as a
          registered user play an important role in its evolution.  Your
          insights will help enhance this program.  Many suggestions were
          used in the development of this product.  Your support is
          appreciated.
































          Lake fFfips Software   Personalized Training Diary






```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
			  Lake fFfips Software, Inc.
			  P.O. Box 8904
			  New Haven, CT.  06532-8904
			
	       Personalized Training Diary - Trial Ver. 1.01 is
       (c) copyright 1992 Lake fFfips Software, Inc.  All Rights Reserved.
	       It may be distributed freely in its entirety and
		 used for the purposes of a 60 day evaluation.  
		
	  Registration is $59.95.  (After December 1, 1992 - $79.95)
		       CT residents include sales tax.
		
 Registered owners receive a printed manual, software (with registration and 
 trial information removed), and support via CompuServe, phone or mail.  They 
 will also receive discounts on upgrades and future products.  When ordering 
 specify 3.5" or 5.25" disks.

 Lake fFfips Software is interested in developing software that enhances our
 understanding of how various factors effect our physical, emotional, and 
 intellectual performances.  Lake fFfips Software welcomes your comments 
 and suggestions.  Thank you for your support.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3313

     Volume in drive A has no label
     Directory of A:\

    DEF      BIN      8878   8-17-92   8:02a
    FILE_ID  DIZ       455   8-17-92   8:02a
    MANUAL   DOC     52178  11-12-92   2:11p
    REGISTER TXT       996   8-17-92   8:02a
    REPORTS  EXE    135204   8-17-92   8:02a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        36  11-12-92   2:07p
            8 file(s)     223315 bytes
                           96256 bytes free
