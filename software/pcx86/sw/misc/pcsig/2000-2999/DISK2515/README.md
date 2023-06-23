---
layout: page
title: "PC-SIG Diskette Library (Disk #2515)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2515/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2515"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2515.TXT

{% raw %}
```
Disk No: 2515                                                           
Disk Title: The Noble Gradebook                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Noble Gradebook                                      
Author Version: 1.1                                                     
Author Registration: $49.95                                             
Special Requirements: None.                                             
                                                                        
THE NOBLE GRADEBOOK is a teacher's gradebook that can handle the most   
complex grading tasks.  Based on a familiar spreadsheet format, THE     
NOBLE GRADEBOOK lets you quickly enter up to 150 scores for as many as  
150 students.                                                           
                                                                        
You can set up NOBLE to handle 18 different categories of tests,        
quizzes, or homework.  NOBLE lets you enter the percent of final grade  
for each category, the maximum grade, the number of low scores to throw 
out, and any extra credit/no credit available for each category.        
                                                                        
Once grades are entered, THE NOBLE GRADEBOOK does the rest.  It sorts by
any item (name, ID#, final grade, etc.); creates a bar graph on any     
item; and calculates statistics like average, median, and standard      
deviation.  You can also print the entire gradebook, or a grade summary 
for all students or selected students.                                  
                                                                        
THE NOBLE GRADEBOOK isn't the simplest gradebook program around, but    
it's not intended to be.  This is serious power for the grader who      
demands total control over even the most complex grading systems.       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  DISK #2515 THE NOBLE GRADEBOOK  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To start the program, type: NGB                                        ║
║                                                                         ║
║  To print the documentation, type: PRINTDOC                             ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1991, PC-SIG Inc.
```
{% endraw %}

## NGB.DOC

{% raw %}
```


















                                      THE 
                                     NOBLE
                                   GRADEBOOK

                                SHAREWARE VERSION
                                      V1.1






           NOTE: This is a text file version of THE NOBLE GRADEBOOK.
                     The screen displays may be missing some
                        detail or may not be shown at all.










                     (C) COPYRIGHT 1988 1990 NOBLE SOFTWARE CO
                               ALL RIGHTS RESERVED



                                NOBLE SOFTWARE CO
                              11903 Pythian Cave Rd
                                 Yreka, Ca 96097













                                      DISCLAIMER

     Noble Software Co. presents this software package "as is" and makes no
     representation or warranties with respect to the contents hereof and
     specifically disclaims any implied warranties or merchantability or fitness
     for any particular purpose.  Further, Noble Software Co. reserves the right
     to revise this publication and to make changes in the contents hereof
     without obligation of Noble Software Co. to notify any persons or
     organization of such revisions or changes.

     Noble Software Co. shall have no liability or responsibility to customer or
     any other person or entity with respect to any liability, loss or damage
     caused or alleged to be caused directly or indirectly by computer programs
     sold by Noble Software Co.




                                  TABLE OF CONTENTS


  GETTING STARTED  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   1
      1-1 Readme.first   . . . . . . . . . . . . . . . . . . . . . . . . . .   1
      1-2 Installing the program   . . . . . . . . . . . . . . . . . . . . .   2

  GENERAL INFORMATION/COMMAND SUMMARY  . . . . . . . . . . . . . . . . . . .   3
      2-1 Features   . . . . . . . . . . . . . . . . . . . . . . . . . . . .   3
      2-2 Command Summary  . . . . . . . . . . . . . . . . . . . . . . . . .   4

  DESIGNING YOUR GRADE BOOK  . . . . . . . . . . . . . . . . . . . . . . . .   6
      3-1 Starting From Scratch  . . . . . . . . . . . . . . . . . . . . . .   6
      3-2 (S)aving and (R)etieving   . . . . . . . . . . . . . . . . . . . .   9
      3-3 (P)rint  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
      3-4 (C)lear-gradesheet   . . . . . . . . . . . . . . . . . . . . . . .  12
      3-5 (D)isplay-one  . . . . . . . . . . . . . . . . . . . . . . . . . .  12
      3-6 (Q)uit   . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  13

  ADVANCED FEATURES  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
      4-1 # to drop  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
      4-2 % of Total Grade   . . . . . . . . . . . . . . . . . . . . . . . .  14
      4-3 Optional grading   . . . . . . . . . . . . . . . . . . . . . . . .  16
      4-4 Letter Grade   . . . . . . . . . . . . . . . . . . . . . . . . . .  18
      4-5 (L)etter-conversion  . . . . . . . . . . . . . . . . . . . . . . .  19
      4-6 Scale  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22
      4-7 (I).D. Field   . . . . . . . . . . . . . . . . . . . . . . . . . .  23
      4-8 Sort   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  24
      4-9 Calculation On/Off   . . . . . . . . . . . . . . . . . . . . . . .  24
      4-10 Graph   . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  24
      4-11 Special Key-prefixes  . . . . . . . . . . . . . . . . . . . . . .  25

  EDIT-KEYS EXAMPLES . . . . . . . . . . . . . . . . . . . . . . . . . . . .  27
      5-1 Edit-Keys Examples   . . . . . . . . . . . . . . . . . . . . . . .  27

  ERROR MESSAGES . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  29
      6-1 Error Messages   . . . . . . . . . . . . . . . . . . . . . . . . .  29
                                                                 GETTING STARTED
                                                                1-1 Readme.first

          This documentation should enable the complete beginner to create his
          first working gradesheet within a few hours.

          The following notes will make the instructions easier to follow.

          Parentheses are used for comments and explanations.

          Boldface is used for characters or words that appear on the screen.

          "Keyboard in" means type on the keyboard.

          Occasionally, periods will be left off of the end of sentences.  This
           is done on purpose so that the period will not be included as part
           of a command.

          When you are working in the gradesheet screen there may be two
           highlighted areas, one which is always in the name column and the
           other which is moveable.  When you are asked to move the highlighted
           area we are referring to the moveable one.

          Most of the screens used in this documentation are files included on
           THE NOBLE GRADEBOOK (NGB) disk.  The actual file names appears
           either in the  Filename: part of the screen or directly under the
           screen.  When using the sample file, be careful not to save them
           when exiting or loading new files.






























                                          1

                                                                 GETTING STARTED

                                                      1-2 Installing the program

          Make a working copy of the master disk.  Store the original disk in a
     safe place and use the copy as your program disk. 

     One Disk Drive System:

     1.   Boot DOS or
          copy NGB.EXE onto a DOS Disk (see your DOS manual) and
     2.   Load the program by typing NGB and pressing return.
     3.   Remove the program disk and place a data disk in drive A.

     Two Disk Drive System:

     1.   Boot DOS or
          copy NGB.EXE onto a DOS Disk (see your DOS manual) and
     2.   place the program disk in drive A and a data disk in drive B.
     3.   Change to Drive B (B: press RETURN)
     4.   Load the program by typing  A:NGB and press RETURN 

     Fixed drive System:

     1.   Create a subdirectory for NGB data (see your DOS manual).
     2.   Copy NGB.EXE to the subdirectory or to where application programs
          reside and
     3.   Load the program while in the subdirectory.





























                                          2

                                             GENERAL INFORMATION/COMMAND SUMMARY
                                                                    2-1 Features

          Think of this program as your Grade Book and each Gradesheet that you
     design as a page in your Grade Book.  Each Gradesheet (one for each class)
     will hold up to 150 students and each student may have up to 150 entered
     grades.  The entered grades are keyed to subject headings of your choice ie
     tests, quizzes, homework, attendance.  The total number of grade entries
     for any key is only subject to the 150 entry limit.

          Keyed items are defined by Key prefix; Description, Max grade, # to
     drop, % of Total Grade.  These definitions are explained further in section
     3-1, "Starting from Scratch".

          After scores are entered, any column of scores may be scaled up or
     down to adjust the curve.  The result of scaling will change the Total
     Grade (end of term).  The original "raw" grades are not altered by the
     program.

          Once designed, each Gradesheet can be edited.  Students (rows) can be
     added or deleted.  Keyed items (columns) may also be added, deleted, or
     altered.

          Grades may be entered as either numbers or letters.

          A gradesheet may be sorted in any column ( ID number, names, any key
     column, or Total Grade).

          The whole Gradesheet may be viewed at one time or individual students
     may be viewed separately.

          Printouts can be made of the entire Gradesheet, for individual
     students, or for any graded column.

          A graph of the number of students versus percent correct can be
     generated for each keyed item (column), or the Total Grade.

          Blank grades (an area in the gradesheet where no grade is entered)
     are ignored.  Only grades that are entered are used to calculate the Total
     Grade.  If a student is to receive a '0' or an 'F' for a given assignment
     then the grade must be entered. By ignoring the 'blank' grade you can
     excuse a student from any assignment without affecting the Total Grade.

          The Gradesheet will display the number of missing grades, average,
     median and standard deviation and the bottom of every graded column.  These
     statistics will also print on the appropriate reports.











                                          3

                                             GENERAL INFORMATION/COMMAND SUMMARY
                                                             2-2 Command Summary



     Command    Keystroke     Used from             Action

     Help       F1            While in gradesheet   Shows help screen
                              or edit-keys

     Escape     Esc           Anywhere              Backs out of current action
                                                    to previous menu or screen.

     Insert     Ins           While in gradesheet.  Inserts new column to the
     column                                         left of the present column/
                                                    asks for new "key" and
                                                    description

     Delete     Del           While in gradesheet.  Deletes column
     column                   Highlight top grade
                              in column

     Insert                   While in gradesheet   Adds name to bottom of
     Names                    below the last name   gradesheet

     Insert     Ins           In gradesheet         Inserts a blank row above
     Names                    highlight name and    highlighted name 
                              press Ins key

     Delete     Del           In gradesheet         Deletes row
     Name                     highlight name and
                              press Del Key

     Change                   In gradesheet,        Allows names to be edited
     name                     highlight name and
                              type new name

     Delete     Del           In edit-keys,         Allows a Key-Prefix to be
     Key-                     highlight key-        deleted
     prefix                   prefix & press Del
                              Key

     Sort       ALT-S         While in gradesheet;  Sorts column in ascending
                              any column            or descending order

     Graph      ALT-G         While in gradesheet;  Will produce graph of
                              highlight column      students versus percent
                                                    correct for that column

     Calcula-   ALT-C         Gradesheet            Toggle for calculation on
     tion                                           or off
     On/Off




                                          4

                                             GENERAL INFORMATION/COMMAND SUMMARY


     Command    Keystroke     Used from             Action

     Display    ALT-D         Gradesheet            Toggle for display
     Statis-                                        statistics at bottom of
     tic                                            screen

     Scale      +,-,*         In gradesheet         + or - will to add or
                              highlight scale over  subtract from the raw score
                              column; enter +,-     a *.9 will result in 90%
                              ,or * and a number    and *1.1 will result in
                              to add, subtract or   110%  The raw score is not
                              multiply the raw      changed; only the Total
                              score. In graph       Grade. A scale change while
                              enter same commands   in the graph affects the
                                                    gradesheet

     Print      P             While in main menu    Print entire gradesheet  or
                                                    print individual grade
                                                    summery for all students

     Print      ALT-P         While in gradesheet   Will print grade summary
                              highlight student     for selected student or
                              name or top of        names and scores for
                              column                selected columns

     Page up    Pg Up         GradeSheet            Moves cursor up one page

     Page       Pg Dn         Gradesheet            Moves cursor down one page
     down

     Screen     Ctrl ->       Gradesheet            Moves cursor one screen to
     right                                          the right

     Screen     Ctrl <-       Gradesheet            Moves cursor on screen to
     left                                           the left

     Top        Ctrl-Home     Gradesheet            Moves cursor to the top row


     End        Ctrl-End      Gradesheet            Moves cursor to bottom row

     Left       Home          Gradesheet            Moves cursor to the left
                                                    most column 

     Right      End           Gradesheet            Moves cursor to the right
                                                    most column






                                          5

                                                       DESIGNING YOUR GRADE BOOK
                                                       3-1 Starting From Scratch

          In this section we will create, save, retrieve, print, clear,
     display-one and quit a simple gradesheet.  The Total Grade (end of term
     grade) will be calculated as a straight percentage, that is, total points
     earned divided by total points possible.

          Start the program by typing NGB and pressing return (for a detailed
     explanation see section 1-2 Installing the program).  When the title page
     appears with the copyright message, press return and the following screen
     will appear:  

----------------------------------------------------------------------------                                                                              
      command:                                                                
                                     *** MAIN MENU ***                        
                                                                              
                                                                              
                 (G)radesheet                             (E)dit-keys          
                 (S)ave                                   (C)lear-gradesheet     
                 (R)etrieve                               (I).D.-field         
                 (P)rint                                  (L)etter-conversion  
                 (D)isplay-one                            (Q)uit               
                 (O)rder form, print
----------------------------------------------------------------------------                                                                              

          The options listed are used by typing the first character of the
     command (upper or lower case).

          We are going to create a gradesheet that will have:

           5 quizzes worth 20 points each  

           2 tests worth 100 points each  

           1 final worth 100 points 

          The first step is to define key-prefixes for the different categories
     (quizzes, tests & final).  Enter the (E)dit-keys option by pressing E or e.

          The following screen will appear:
----------------------------------------------------------------------------                                                                              
      Command or data: _                                         F1=Help      
                                                                              
      Key     Description          Max    # to  % of Total |---Optional gradin 
      prefix                       grade  drop  Grade      100  90   80   70   
                                                                              
                                                                              
                                                                              
----------------------------------------------------------------------------                                                                                
      
          There is a blinking cursor after Command or data: and a highlighted
     block under Key-prefix

          A Key prefix is one or two letters followed by a hyphen.  The Key
                                          6

                                                       DESIGNING YOUR GRADE BOOK

     prefix may be entered in either upper or lower case.  The Gradebook will
     convert the entries to uppercase.  For the sample gradesheet, we will
     assign quizzes the Key prefix of QZ.  Type a prefix  QZ-  the characters
     will appear on the command line.  Press the Right Arrow (cursor movement
     key) and QZ- will now be  under Key prefix  and the highlighted block will
     move one column to the right. (QZ- could also have been entered by using
     Return and the highlighted block moved with a separate use of the Right
     Arrow key.)  Now the area under Description will have a highlighted block. 

          The entry under Description may be up to twenty characters in length
     or may be left blank.  Type quizzes and press the Right Arrow Key.  quizzes
     will appear under Description and the highlighted block will move under Max
     grade.  

          The entry under Max grade is the maximum grade for a single
     gradesheet entry (one column) for the given Key prefix and may be between 0
     and 999.9 (or a valid letter grade) and must be made.  If a letter grade is
     entered here, then all of the grades entered for this Key may only be
     alphabetic.  Enter 20 (20 is the maximum grade for each quiz) for the grade
     and use the down cursor movement key to position the highlighted block for
     the next Key prefix.  Make the entries for T-  tests 100; and F- final 100
     in the same manner as for the quizzes.  The result will look like the
     following screen:

----------------------------------------------------------------------------                                                                              
      Command or data: _                                         F1=Help      
                                                                              
      Key     Description          Max    # to  % of Total |---Optional gradin 
      prefix                       grade  drop  Grade      100   90   80   70  
                                                                              
       QZ-    quizzes                 20                                      
        T-    tests                  100                                      
        F-    final                  100                                      
----------------------------------------------------------------------------                                                                              
      Filename: NGB31A

      A Key-prefix can be deleted by highlighting the Key-prefix and pressing
     the Del key.

          The maximum number of Keys that can be defined is 18.  The columns to
     the right of Max grade will be explained in sec 4 Advanced features.  Now
     that the prefixes have been defined, press Escape and return to the Main
     Menu.  Proceed to the (G)radesheet by pressing G (or g).











                                          7

                                                       DESIGNING YOUR GRADE BOOK

     The following screen will appear with a highlighted block under Name:
----------------------------------------------------------------------------                                                                              
      Command or data: _                             F1=Help                  
      Filename:                                                               
                   Key      Total Est.  Lettr                                 
             Max-score      Grade Total Grade                                 
      Name       Scale        +0 Grade                                        
                                                                              
                                                                              
      # of missing grades      0     0     0                                  
      Average                                                                 
      Median                                                                  
      Standard Deviation                                                       
----------------------------------------------------------------------------                                                                               

          There are several different ways to construct the gradesheet at this
     step.  We will choose a way which will allow a "template" gradesheet that
     can be used for several different classes. 

     Columns add:
          Using the right arrow (cursor movement key), move the  highlighted
     block one column to the right (to beneath the Total Grade column) and press
     the Insert key.  At the top of the screen the line Command or data: _  will
     be replaced by key: _

          Keyboard in  QZ-  followed by a 1

          The entry will look like this  key: QZ-1     press return; the
     command line will now display   description: _

          Keyboard in quiz 1  and press return.  The following screen will
     appear:
----------------------------------------------------------------------------                                                                               
      Command or data: _                            F1=Help          quiz 1     
      Filename:NGB31B                                                          
                   Key      QZ-1 Total Est.  Lettr                             
             Max-score        20 Grade Total Grade                             
      Name       Scale        +0    +0 Grade                                   
                                                                               
                                                                               
      # of missing grades      0     0     0     0                             
      Average                                                                  
      Median                                                                   
      Standard Deviation                                                       
----------------------------------------------------------------------------                                                                               
      Filename: NGB31B               

          Note that a column has been inserted between Key and Total Grade. 
     The highlighted area was underneath the Total Grade column and the new
     column was inserted to the left of the Total Grade column.  Columns are
     inserted to the left of the column in which the highlighted area is
     positioned.

          While the highlighted block is in a Key column, a description of the
     column is presented in the upper right hand corner of the screen.  
                                          8

                                                       DESIGNING YOUR GRADE BOOK

          Move the highlighted area to the Total Grade column and insert
     columns for quiz 2, quiz 3, quiz 4, quiz 5, test 1, test 2, and final.  As
     more columns are inserted, the columns to the right of Total Grade will
     move off of the screen to the right.  By using the right and left cursor
     movement keys, any column may be shifted conveniently close to the name
     column.

     Column delete:
          If any errors were made while entering the columns,  the column can
     be deleted by highlighting that column (first name below the heading) and
     pressing the Delete key.  

          If this gradesheet were to be used for several different classes, it
     would now be saved as a "template" before entering students names.


                                                    3-2 (S)aving and (R)etieving

          Saving the gradesheet on a regular interval will safeguard against
     loss in case the power goes off.  To save:  press Escape to return to the
     Main Menu and choose (S)ave by pressing S. The first time during a session
     that a file is saved or retrieved, there will be a prompt for the name of
     the file:  gradesheet name: _   (after the first time, the save feature
     "remembers" the last file name that was used; to delete the presented name,
     use the backspace key).  Choose a meaningful name, one that will help in
     referring to the contents of the gradesheet.  A proper name may contain up
     to eight letters and numbers, a drive prefix and a path.  Do not add an
     extension to the file name.  When the file is saved the gradebook adds the
     extension of .GBK to all of the gradesheets names.  The file will be saved
     to the default data drive if no drive prefix is used.  An improper file
     name will return an error message.  If the data disk already has a file
     with the same name as the filename you just entered, the message File
     already exists, overwrite (y or n) appears before the file is saved. 
     Pressing y will save the new version over the old file.  Pressing n  WILL
     NOT save the file.  

          Retrieving a file is done by using (R)etrieve from the main menu.  A
     listing of available gradesheets on the default drive will be presented. 
     To retrieve a file on a different drive, preface the filename with the
     drive letter (and path if needed).  Warning: remember to save any file
     being worked on before retrieving a new file.  If you are working on a
     gradesheet when you select the (R)etrieve option you are asked if you wish
     to save the current gradesheet.

          After saving, return to the gradesheet by using choice (G)radesheet
     from the Main Menu.  Note that the filename of the current gradesheet now
     appears  under Command or data: _

     Names add:
          The next step is to enter student names in the names column.  Using
     the cursor movement keys, move the highlighted area into the Name column.
     Enter a name and press return.  The highlighted area moves down a row,
     ready for the next entry.  In our practice gradesheet, I have entered five
     names:  Lilli, Mike, Susan, Phil, and Max.  I have also entered a grade of
     17 on QZ-2 for Lilli.
                                          9

                                                       DESIGNING YOUR GRADE BOOK

----------------------------------------------------------------------------                                                                              
      Command or data: _                            F1=Help      quiz 2        
      Filename:NGB32A                                                         
                   Key  QZ-2  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total  Est   
             Max-score    20    20    20    20   100   100   100 Grade  Total 
      Name       Scale    +0    +0    +0    +0    +0    +0    +0    +0  Grade 
                                                                              
      Lilli                                                       85.0  85.0  
      Mike                                                         0.0   0.0  
      Susan                                                        0.0   0.0  
      Phil                                                         0.0   0.0  
      Max                                                          0.0   0.0  
                                                                              
      # of missing grades  5     5     5     5     5     5     5     0     0  
      Average                                                     17.0  17.0  
      Median                                                       0.0   0.0  
      Standard Deviation                                          38.0  38.0   
----------------------------------------------------------------------------                                                                              

          You will see that the Total Grade shows 85.0, which is obtained from
     the 17 points received out of the 20 points possible.  Note that only
     columns with scores affect the Total Grade, because 'blank' grades are
     ignored.  Also note that the Total Grade and Est. Total Grade (Estimated
     Total Grade) are the same - this will be the case in a straight percentage
     gradesheet (they will have different values in a weighted percentage
     gradesheet as discussed in section 4-2).

          Enter grades for the other students for QZ-1, QZ-2, QZ-3 and T-1. 
     Whenever grades are being entered for a student, the student's name will be
     highlighted.  The screen may be "scrolled" to the left or right (use the
     cursor movement keys) so that the column that the grades are being entered
     into is next to the name's column.
----------------------------------------------------------------------------                                                                              
      Command or data: _                            F1=Help      quiz 4        
      Filename:NGB32B                                                         
                   Key  QZ-1  QZ-2  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total  
             Max-score    20    20    20    20    20   100   100   100 Grade  
      Name       Scale    +0    +0    +0    +0    +0    +0    +0    +0    +0  
                                                                               
                                                                              
      Lilli               17    18    19                91              90.6  
      Mike                16    19    20                89              90.0  
      Susan               14    16    19                85              83.8  
      Phil                12    18    17                82              80.6  
      Max                 13    15    15                69              70.0  
                                                                              
      # of missing grades  0     0     0     5     5     0     5     5     0  
      Average           14.4  17.2  18.0              83.2              83.0  
      Median            14.0  18.0  19.0              85.0              83.8  
      Standard Deviation 2.1   1.6   2.0               8.7               8.4  
----------------------------------------------------------------------------                                                                              
      Filename:NGB32B

          If you need to remove a grade (change a grade to a blank grade) you
     can do so by highlighting the grade to remove, press the space bar one time
                                          10

                                                       DESIGNING YOUR GRADE BOOK

     and press 'return'.  You will be asked to confirm the change; type 'Y' and
     the grade will be changed to a blank.

          By using the cursor movement keys, the screen can be "scrolled" to
     the left to show the Letter Grade.  
             
----------------------------------------------------------------------------                                                                              
      Command or data: _          F1=Help      final                          
      Filename:NGB32B                                                         
                   Key  QZ-5   T-1   T-2   F-1 Total Est.   Lettr             
             Max-score    20   100   100   100 Grade Total  Grade             
      Name       Scale    +0    +0    +0    +0    +0    +0 Grade              
                                                                              
      Lilli                      91              90.6  90.6     B             
      Mike                       89              90.0  90.0     B             
      Susan                      85              83.8  83.8     C+            
      Phil                       82              80.6  80.6     C             
      Max                        69              70.0  70.0     D             
                                                                              
      # of missing grades   5     0     5     5     0     0     0             
      Average                  83.2              83.0  83.0    C+             
      Median                   85.0              83.8  83.8    C+             
      Standard Deviation        8.7               8.4   8.4   8.3              
----------------------------------------------------------------------------                                                                              
      Filename:NGB32B






























                                          11

                                                       DESIGNING YOUR GRADE BOOK
                                                                     3-3 (P)rint

          Return to the Main Menu and choose option (P)rint by pressing P (or
     p).
     The following screen will appear:

----------------------------------------------------------------------------                                                                              
       enter option (1-4) _                                                   
                                                                              
                                                                              
                                                                              
       1  print entire gradesheet                                             
       2  print individual grade summary for all students                     
       3  print grade summary for selected students                           
       4  print names & scores for selected columns                           
----------------------------------------------------------------------------                                                                              

          Option 1 & 2 work directly from the above menu. 
          Option 3 requires a return to the gradesheet, then highlight the
              student's name and press Alt-P ( hold the Alt key down and at the
              same time press P or p).
          Option 4 requires a return to the gradesheet, then highlight any    
          grade in a column and press Alt-P ( hold the Alt key down and at    
          the same time press P or p).

                                                          3-4 (C)lear-gradesheet

          This option allows the gradesheet currently being worked on to be
     cleared from memory so that a new gradesheet can be designed.  When using
     (C)lear-gradesheet, the current gradesheet may be saved  similarly to the
     (S)ave command.

                                                               3-5 (D)isplay-one

          If a student would like to see his grades, it is possible to display
     the grades for only one student.  Escape to the Main Menu and choose
     (D)isplay-one.  The gradesheet will be displayed with only that one
     student's grades showing as shown below.















                                          12

                                                       DESIGNING YOUR GRADE BOOK

----------------------------------------------------------------------------                                                                              
      Command or data: _                            F1=Help      quiz 4        
      Filename:NGB35                                                          
                   Key  QZ-1  QZ-2  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total  
             Max-score    20    20    20    20    20   100   100   100 Grade  
      Name       Scale    +0    +0    +0    +0    +0    +0    +0    +0        
                                                                              
      Lilli               17    18    19                91              90.6      
      Mike                16    19    20                89              90.0              
      Susan               14    16    19                85              83.8              
      Phil                12    18    17                82              80.6              
      Max                 13    15    15                69              70.0              
                                                                              
      # of missing grades  0     0     0     5     5     0     5     5     0
      Average           14.4  17.2  18.0                                   2
      Median            14.0  18.0  19.0              85.0              83.2
      Standard Deviation 2.1   1.6   2.0               8.7               8.4
      ----------------------------------------------------------------------------                                                                              
      Filename:NGB35
          You can use the up & down arrow keys to go from one student to
     another; the left and right arrows move the same as before.  To return to
     the regular display, Escape to the Main Menu and choose (G)radesheet. 

                                                                      3-6 (Q)uit

          This option allows the user to exit the program.  If there is a
     gradesheet currently being worked on,  the option to save is included when
     using (Q)uit.



























                                          13

                                                               ADVANCED FEATURES

          This section will discuss dropping lowest scores for any key (# to
     drop), weighted keys (% of Total Grade), Optional grading, letter/number
     grade conversion, and the Scale feature.  In section 3-1 the Total Grade
     was calculated as a straight percentage (i.e. total points earned divided
     by total points possible), in this section the weighted keys allows us to
     calculate the Total Grade by assigning different weight value to each of
     the keys, therefore giving us a weighted percentage.

          Continuing with our gradesheet from section 3, return to the (E)dit-
     keys menu and we will add more options to the gradesheet.  Press the Escape
     key to return to the Main Menu and then E to go to (E)dit-keys.

                                                                   4-1 # to drop

          In the column # to drop highlight the area to the right of quizzes. 
     This column allows the program to drop the lowest grade or grades in the
     defined Key.   The maximum number of grades that can be dropped in any Key
     is 9. Enter a 1 in the # to drop  in the row for quizzes.  HINT --> If this
     option is chosen when the keys are first defined, then the first grade
     entered for the quizzes will be dropped.  As this is the only grade, it
     will be the lowest.  Usually you should wait until half or all of the
     grades are entered before selecting this option.


----------------------------------------------------------------------------                                                                              
       Command or data: _                                        F1=Help      
                                                                              
      Key   Description            Max    # to  % of Total |---Optional gradin 
      prefix                       grade  drop  Grade      100   90   80   70  
                                                                              
      QZ-  quizzes                    20    1                                 
       T-  tests                     100                                      
       F-  final                     100                                      
----------------------------------------------------------------------------                                                                              
      Filename:NGB41

          Return to the gradesheet and note that the Total Grade has changed.
----------------------------------------------------------------------------                                                                             
      Command or data: _                            F1=Help      quiz 4       
      Filename:NGB41                                                         
                   Key  QZ-2  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total Est.  
             Max-score    20    20    20    20   100   100   100 Grade Total 
      Name       Scale    +0    +0    +0    +0    +0    +0    +0    +0 Grade 
                                                                             
      Lilli               18    19                91              91.4  91.4 
      Mike                19    20                89              91.4  91.4 
      Susan               16    19                85              85.7  85.7 
      Phil                18    17                82              83.6  83.6  
----------------------------------------------------------------------------                                                                             
      Filename:NGB41
                                                            4-2 % of Total Grade

          We will now assign a weight (% of Total Grade) to each of the keys. 
     This will allow us to assign more value to keys which are considered more
     important.
                                          14

                                                               ADVANCED FEATURES

     Return to the (E)dit-keys.  

          In the column  % of Total Grade make the entries as shown in the
     following screen.  The Gradebook will now calculate each Key as a
     percentage of the final grade.  

----------------------------------------------------------------------------                                                                               
      Command or data: _                                         F1=Help       
                                                                               
      Key   Description            Max    # to  % of Total |---Optional grading 
      prefix                       grade  drop  Grade      100   90   80   70    
                                                                               
      QZ- quizzes    20               1     25                                  
       T- tests     100                     40                                  
       F- final     100                     35                                  
                                            Total % 100.0                      
----------------------------------------------------------------------------                                                                               
      Filename:NGB42

          Return to the gradesheet

----------------------------------------------------------------------------                                                                              
      Command or data: _                           F1=Help      quiz 4         
      Filename:NGB42                                                          
                   Key  QZ-2  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total Est.   
             Max-score    20    20    20    20   100   100   100 Grade Total  
      Name       Scale    +0    +0    +0    +0    +0    +0    +0    +0 Grade  
                                                                              
      Lilli                18    19                91              59.5 91.5  
      Mike                 19    20                89              60.0  92.3 
      Susan                16    19                85              55.9  86.0 
      Phil                 18    17                82              54.7  84.2 
      Max                  15    15                69              46.4  71.4 
                                                                              
      # of missing grades   0     0     5     5     0     5     5     0     0 
      Average            17.2  18.0              83.2              55.3  85.1 
      Median             18.0  19.0              85.0              55.9  86.0 
      Standard Deviation  1.6   2.0               8.7               5.5   8.4  
----------------------------------------------------------------------------                                                                              
      Filename:NGB42

          Note that the Total Grade reflects the score as a percentage of the
     final grade as was just set in the Edit-Keys.  The Est. Total Grade
     reflects the grade that the students would get if they continued making the
     same score in all of the Keys.  At the end of the term the Total Grade and
     the Est. Total Grade should be the same.  If they are not the same then the
     student is missing a grade for one or more Key Prefix or the # to Drop is
     the same count as the number of scores the student has for a particular Key
     Prefix.  Press the right arrow key until the column to the right of the
     letter grade is showing.  There will be a "#" in this column for every
     student, which indicates that the Total Grade and Est. Total Grade are not
     equal.  At the end of the term there will not be any "#" for students who
     have completed their work.
          Let's look at how the Total Grade is calculated for student Lilli. 
     In our Edit Key table we defined the # to drop as being 1 for the key of
                                          15

                                                               ADVANCED FEATURES

     QZ-, which would leave us with the scores of 18 and 19.  The total for the
     two scores is 37 points out of a possible 40 (2 times 20) , which is 92.5%. 
     Now quizzes are worth 25% of the Total Grade so the quizzes part of the
     Total Grade is 92.5 times 25% or 23.1%.  There is one score for T-1 which
     is 91 out of a possible 100 for 91%.  Tests are worth 40% of the final
     grade so 91 times 40% is 36.4%.  There is no score for the key of F- so our
     Total Grade is the 23.1% from the quizzes and 36.4% for the tests, which
     add up to 59.5%.  Note that from the scores entered so far (only the
     quizzes and one test) that Lilli has an Est. Total Grade of 91.5%.

     Key   Scores     Dropped   Total  Total      %     %-of        
     Total_grade                                            Possible        
     Total_Grade

     QZ-      17,18,19     17       37  /    40  =  92.5  x   25     =      23.1
     T-       91           -        91  /   100  =  91    x   40     =      36.4
     F-       -            -        0   /   100  =   0    x   35     =       0.0
                                                   total:    59.5   

                                                            4-3 Optional grading

          Optional grading allows a means of accumulating points for
     attendance, daily homework or other similar items.  Then based on the
     points accumulated assign a percentage or letter grade.  The percentage or
     letter grade is then calculated into the Total Grade.

          Let's use attendance as our example for optional grading.  First we
     set a value for each day:  1 point if present and 0 points if absent.  Then
     we must determine how many attendance points can be accumulated in the
     semester.  5 points per week (one for each day) times 18 weeks = 90 points. 
     As each entry in the gradesheet will take one column, let's keep track of
     attendance on a weekly basis. So, we will have 18 columns in the gradesheet
     (one for each week)  and each entry will have a maximum value of 5 (one
     point for each day).  Holidays and excused absences would be managed by
     "giving" the student a point for that day.  Next, we must determine what
     percent of the total grade to assign to attendance.  We will let attendance
     be 5% of the total.  The last step is to assign a grade to the accumulated
     points.  The following table will help set this up:

                                   Accumulated            Assigned
                                   attendance             grade

     perfect attendance            90                     100
     miss 3 days                   87                      90
     miss 5 days                   85                      80
     miss 7 days                   83                      70
     miss 10 days                  80                      50

     A student having 90 accumulated attendance will receive a grade of 100.
     A student having 87, 88 or 89 accumulated attendance will receive a grade
     of 90.
     A student having 85 or 86 accumulated attendance will receive a grade of
     80.
     A student having 83 or 84 accumulated attendance will receive a grade of
     70.
                                          16

                                                               ADVANCED FEATURES

     A student having 80, 81, 82, or 83 accumulated attendance will receive a
     grade of 50.
     A student having less than 80 accumulated attendance will receive a grade
     of 0.

          When designing a key that will use optional grading this outline
     should be followed:
           1.  Determine the total number of points that can be accumulated.
           2.  Calculate the number of entries(columns in the gradesheet) and
     the                  maximum value for these entries.
           3.  Decide  what percent of the final grade this key will have.
           4.  Assign a grade value to the accumulated points.


          Let's modify the file NGB42 from the last section.  The optional
     grading is set in the (E)dit-keys.  Go to the (E)dit-keys and create a new
     Key  A-  Attend.  We are giving 1 point for attendance each day and keeping
     records on a weekly basis. Enter 5 in the column Max grade. We also decided
     to make attendance 5% of the total grade.  In the column % of Total Grade
     enter a 5.  Let's also reduced the % of Total Grade in the Key QZ- quizzes
     from 25 down to 20 to maintain the Total % 100.0 .  Then, under the heading
     |--- Optional grading--|, we will enter the accumulated attendance points
     under the column value we want to assign them.  The following screen
     reflects a Key using Optional grading.

----------------------------------------------------------------------------                                                                             
      Command or data: _                                         F1=Help     
                                                                             
      Key Description      Max     # to   % of Total |---Optional grading--|  
      prefix               grade   Drop   Grade       100   90   80   70  50  
                                                                             
      QZ- quizzes              20     1     20                                
       T- tests               100           40                                
       F- final               100           35                                
       A- attend               5             5          90   86  85   84  83  
                                                                             
                                 Total % 100.0                               
----------------------------------------------------------------------------                                                                             
      Filename:NGB43A

          It should be pointed out here that the numbers in the column
     headings:  100  90  80  70  50  can be changed to different numerical
     values or to letter grades by moving the cursor to the number and entering
     the change.  Be sure you understand how the Optional grading works before
     you change these values.

          When using Optional grading, it is important that all of the entries
     (columns) be inserted in the gradesheet for the Est. Total Grade to be
     calculated properly.  Based on the grades entered and the number of 'blank'
     grades remaining, Gradebook will project an end of term grade for this Key-
     prefix.  The projected grade is then used in calculating the Est. Total
     Grade.  Remember that 'blank' grades in non-optional-grading keys are
     ignored.   Return to the gradesheet and insert 18 entries using the key A-
     . Name the entries week1 through week18.    The file NGB43b contains all of
     the changes made in this section.  After the changes are made part of the
                                          17

                                                               ADVANCED FEATURES

     gradebook will look like the following screen: 
----------------------------------------------------------------------------                                                                             
      Command or data: _                           F1=Help      week14        
      Filename:NGB42B                                                        
                   Key  A-12  A-13  A-14  A-15  A-16  A-17  A-18 Total Est.  
             Max-score     5     5     5     5     5     5     5 Grade Total 
      Name       Scale    +0    +0    +0    +0    +0    +0    +0    +0 Grade 
                                                                             
      Lilli                                                       54.9  91.5 
      Mike                                                        55.1  91.8 
      Susan                                                       51.5  85.8 
      Phil                                                        50.3  83.8 
      Max                                                         42.6  71.0 
                                                                             
      # of missing grades  5     5     5     5     5     5     5     0     0 
      Average                                                     50.9  84.8 
      Median                                                      51.5  85.8 
      Standard Deviation                                           5.1   8.5  
----------------------------------------------------------------------------                                                                             
      Filename:NGB42B

                                                                4-4 Letter Grade
          Reterive file NGB44 and scroll the screen to the left to show the
     letter grades.  The letter grade is derived form the Est-Total-Grade,
     therefore reflects the students current level of work.  At the end of the
     term the Total-Grade and Est-Total-Grade should be the same value.  So the
     letter grade would be the end of term final grade.

----------------------------------------------------------------------------                                                                              
      Command or data: _                           F1=Help      quiz 4         
      Filename: NGB44                                                         
                   Key  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total Est.  Letter 
             Max-score    20    20    20   100   100   100 Grade Total Grade  
      Name       Scale    +0    +0    +0    +0    +0    +0    +0 Grade        
                                                                              
      Lilli               19                91              54.9  91.5    B   
      Mike                20                89              55.1  91.8    B   
      Susan               19                85              51.5  85.6    C+  
      Phil                17                82              50.3  83.8    C+  
      Max                 15                69              42.6  71.0    D   
                                                                              
      # of missing grades  0     5     5     0     5     5     0     0     0  
      Average           18.0              83.2              50.9  84.8    C+  
      Median            19.0              85.0              51.5  85.4    C+  
      Standard Deviation 2.0               8.7               5.1   8.5   8.2   
----------------------------------------------------------------------------                                                                              
      Filename:NGB44

          As the grades are entered, the Gradebook will calculate the Total
     Grade and a Letter Grade automatically.  The letter grades have a default
     setting.  These settings may be modified for each gradesheet.  Escape to
     the Main Menu and choose (L)etter-conversion.  The (L)etter-conversion
     option allows the letter -  numeric conversion to be set separately for the
     Total Grade and All Entries. 
                                          18

                                                               ADVANCED FEATURES

                                                         4-5 (L)etter-conversion
 ----------------------------------------------------------------------------                                                                          
      Command or data:                                                     
                                                                           
                                                                           
      Letter       All          Total                                      
      Grade        Entries      Grade                                      
                                                                           
      A+              103          103                                     
      A               100          100                                     
      A-               97           97                                     
      B+               93           93                                     
      B                90           90                                     
      B-               87           97                                     
      C+               83           83                                     
      C                80           80                                     
      C-               77           77                                     
      D+               73           73                                     
      D                70           70                                     
      D-               67           67                                     
      F+               63           63                                     
      F                60           60                                     
      F-               57           57                                     
----------------------------------------------------------------------------                                                                           
       Filename:NGB45A

          The All Entries column is the numeric value that the GRADEBOOK
     assigns to the letter grade entered for a student.  Any letter grade that
     appears in a gradesheet or in the Edit-key option will be converted to the
     value in the All-Entries column and then used to calculate then Total
     Grade.  The default values are designed so that a gradesheet may be made up
     of mixed entries (both numeric and letter grades).
      
          The Total Grade column would normally be changed to reflect the
     individual teachers grading style.  As an example highlight each number in
     column Total Grade and change the values by keyboarding in the new numbers
     shown below (press return or use the down arrow key to enter the changes). 
     The changes only affect the gradesheet currently being worked on.













                                          19

                                                               ADVANCED FEATURES


----------------------------------------------------------------------------                                                                           
      Command or data:                                                     
                                                                           
                                                                           
      Letter       All          Total                                      
      Grade        Entries      Grade                                      
                                                                           
      A+              103           98                                     
      A               100           95                                     
      A-               97           90                                     
      B+               93           88                                     
      B                90           85                                     
      B-               87           80                                     
      C+               83           78                                     
      C                80           75                                     
      C-               77           70                                     
      D+               73           68                                     
      D                70           65                                     
      D-               67           60                                     
      F+               63           58                                     
      F                60           55                                     
      F-               57           50                                     
----------------------------------------------------------------------------                                                                           
      Filename:NGB45B

          Return to the gradesheet, note the difference in the letter grades.

----------------------------------------------------------------------------                                                                              
      Command or data: _                           F1=Help      quiz 4         
      Filename:NGB45B                                                         
                   Key  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total Est.  Letter 
             Max-score    20    20    20   100   100   100 Grade Total Grade  
      Name       Scale    +0    +0    +0    +0    +0    +0    +0 Grade        
                                                                              
      Lilli               19                91              54.9  91.5    A-  
      Mike                20                89              55.1  91.8    A-  
      Susan               19                85              51.5  85.8    B   
      Phil                17                82              50.3  83.8    B-  
      Max                 15                69              42.6  71.0    C-  
                                                                              
      # of missing grades  0     5     5     0     5     5     0     0     0  
      Average           18.0              83.2              50.9  84.8    B   
      Median            19.0              85.0              51.5  85.8    B   
      Standard Deviation 2.0               8.7               5.1   8.4   8.4   
----------------------------------------------------------------------------                                                                              
      Filename:NGB45B

          It should be stated here that it is not advisable to change the All
     Entries values unless the user has a firm understanding of how the letter-
     to-numeric conversion works.

          The letter conversion can be set so that there are letters without
                                          20

                                                               ADVANCED FEATURES

     "+"s and "-"s.  The whole letter range is set in the following manner: 
     Highlight the + or - conversion in the in the Total Grade column.  Press
     the spacebar and then return (or the down arrow); the number will be
     replaced with a blank space.  Do the same for every number in the Total
     Grade column that is across from a + or a -.  Next, in the same column, set
     the number across from the A at 90; B at 80; C at 70; D at 60; F at 50. 
     Now 90 and above will be an A; 80 to 89 will be a B; 70 to 79 will be a C
     and so on.

----------------------------------------------------------------------------                                                                           
      Command or data:                                                     
                                                                           
                                                                           
      Letter       All          Total                                      
      Grade        Entries      Grade                                      
                                                                           
      A+              103                                                  
      A               100           90                                     
      A-               97                                                  
      B+               93                                                  
      B                90           80                                     
      B-               87                                                  
      C+               83                                                  
      C                80           70                                     
      C-               77                                                  
      D+               73                                                  
      D                70           60                                     
      D-               67                                                  
      F+               63                                                  
      F                60           50                                     
      F-               57                                                  
----------------------------------------------------------------------------                                                                           
      Filename:NGB45C

          Return to the gradesheet, note the difference in the letter grades.

----------------------------------------------------------------------------                                                                              
      Command or data: _                           F1=Help      quiz 4         
      Filename:NGB45C                                                         
                   Key  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total Est.  Letter 
             Max-score    20    20    20   100   100   100 Grade Total Grade  
      Name       Scale    +0    +0    +0    +0    +0    +0    +0 Grade        
                                                                              
      Lilli               19                91              54.9  91.5    A   
      Mike                20                89              55.1  91.8    A   
      Susan               19                85              51.5  85.8    B   
      Phil                17                82              50.3  83.8    B   
      Max                 15                69              42.6  71.0    C    
                                                                              
      # of missing grades  0     5     5     0     5     5     0     0     0  
      Average           18.0              83.2              50.9  84.8    B   
      Median            19.0              85.0              51.5  85.8    B   
      Standard Deviation 2.0               8.7               5.1   8.5   8.4   
----------------------------------------------------------------------------                                                                              
      Filename:NGB45C
                                          21

                                                               ADVANCED FEATURES
                                                                       4-6 Scale

          The Scale is used to modify the scores for any Key column in the
     gradesheet.  When a scale is used all the scores in the selected column are
     increased or decreased by a given number of points or a percentage.

          Retrieve the file NGB46.

          There are 3 ways to scale in the gradesheet: add points to a key,
     subtract points from a key, and multiply the score by either a number
     smaller than 1 (ie .9 to scale down ) or a number larger than 1 (ie 1.1 to
     scale up).  For QZ-2, add 2 points to the score.  Highlight the +0 in the
     scale row in column QZ-2.  Keyboard in +2 and press return.  Confirm the
     entry with a y.  Note in the screen below that the "raw score" does not
     change.  The Total Grade, Est. Total Grade and Lettr Grade are recomputed
     and changed.  To return to a +0 scale keyboard in +0 in the scale row.

----------------------------------------------------------------------------                                                                              
      Command or data: _                           F1=Help      quiz 4         
      Filename:NGB46A                                                         
                   Key  QZ-2  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total Est.   
             Max-score    20    20    20    20   100   100   100 Grade Total  
      Name       Scale    +2    +0    +0    +0    +0    +0    +0    +0 Grade  
                                                                              
      Lilli               18    19                91              55.9  93.2  
      Mike                19    20                89              56.1  93.5  
      Susan               16    19                85              52.5  87.5  
      Phil                18    17                82              51.3  85.5  
      Max                 15    15                69              43.6  72.7  
                                                                              
      # of missing grades  0     0     5     5     0     5     5     0     0  
      Average           17.2  18.0              83.2              51.9  86.5  
      Median            18.0  19.0              85.0              52.5  87.8  
      Standard Deviation 1.6   2.0               8.7               5.1   8.5   
----------------------------------------------------------------------------                                                                              
      Filename:NGB46A

          To subtract 2 points, highlight a scale position and keyboard in -2
     and press return.

          To add 10%, we multiply by 1.1 (the whole value plus .1).  Raise the
     scale of T-1 by 10%.  In the scale position under the Key T-1, keyboard in
     *1.1.












                                          22

                                                               ADVANCED FEATURES

----------------------------------------------------------------------------                                                                              
      Command or data: _                          F1=Help       quiz 4         
      Filename:NGB46B                                                         
                   Key  QZ-3  QZ-4  QZ-5   T-1   T-2   F-1 Total Est.  Letter 
             Max-score    20    20    20   100   100   100 Grade Total Grade  
      Name       Scale    +0    +0    +0  *1.1    +0    +0    +0 Grade        
                                                                              
      Lilli               19                91              59.5  99.2    A+  
      Mike                20                89              59.7  99.5    A+  
      Susan               19                85              55.9  93.2    A-  
      Phil                17                82              54.6  91.0    A-  
      Max                 15                69              46.4  77.3    C   
                                                                              
      # of missing grades  0     5     5     0     5     5     0     0     0  
      Average           18.0              83.2              55.5  92.0    A-  
      Median            19.0              85.0              55.9  93.2    A-  
      Standard Deviation 2.0               8.7               5.4   9.0   9.4   
----------------------------------------------------------------------------                                                                              
      Filename:NGB46B

          Note the changes to Total Grade, Est. Total Grade and Letter Grade. 
     To reduce the grade by 10% use *.9  (90% of the grade) instead of *1.1
     (110% of the grade)

          The Total-Grade can also be scaled.  This provides a way to raise or
     lower the class curve.  Any scaling of the Total-Grade will also affect the
     Est-Total-Grade and the letter grade.  Beware that scaling of the Total-
     Grade before the end of the term (all grades entered) can lead to inflated
     Est-Total-Grade and letter grade.

                                                                4-7 (I).D. Field

          The I.D. Field is an optional column which will appear to the left of
     the name column.  From the MAIN MENU choose (I).D.-Field  by pressing I and
     then return.  The following screen will appear:

----------------------------------------------------------------------------                                                                             
      enter option  (0, 1 or 2)                                                  
                                                                             
                                                                             
                                                                             
      The I.D.  field is a column which will appear on the left side of      
      the students name.  This column can be used for the student-number,    
      social-security-number or anything else  There are 2 possible          
      field widths as shown below.  Once and I.D.  field is selected it      
      can not be changed.                                                    
                                                                             
      Option                                                                 
         0    No I.D.  field                                                 
         1    1-5 characters                                                 
         2    1-11 characters                                                
----------------------------------------------------------------------------                                                                             
          If you enter the (I).D.-field option by mistake, use choice 0 or Esc
     to exit.  Once option 1 or 2 is taken, the field cannot be changed or
                                          23

                                                               ADVANCED FEATURES

     removed.  Numbers are entered into the ID # column while in the gradesheet. 
     Move the cursor into the area where you want to enter the ID number,
     keyboard in the number and press return or use the cursor movement arrows.

                                                                        4-8 Sort

          The gradesheet can be sorted in the ID # column, Name column, any Key
     column, and either Total Grade column.  Place the cursor in the column to
     be sorted.  Press Alt-S (hold down the Alt key and press S or s).  The
     following prompt will appear on the second line of the screen.

           Ascending or Descending, Enter option (a or d)

          Choose a (or A) for an ascending sort or d (or D) for a descending
     sort.  The program does a secondary sort in the name column when any column
     other than the name column is being sorted.  If the sort option is chosen
     by mistake, press Esc to return the gradesheet.

                                                          4-9 Calculation On/Off

          The program automatically recalculates the Total Grade, Est. Total
     Grade, and Letter Grade when scores are changed or new scores are entered. 
     The automatic recalculation can be turned off with the toggle Alt-C (hold
     down the Alt key and press C or c).  A message  calculation-off will appear
     in the upper right hand corner of the screen.  To turn recalculation back
     on, use Alt-C again.

          Calculation Off will save time when entering a large amount of data
     in big gradesheets.  If data entry is slowed down by recalculation, try
     Alt-C while entering grades.  Remember to turn Calculation On when
     finished.

                                                                      4-10 Graph

          The gradesheet can generate a bar graph of the Number-of-Students vs.
     Percent -Correct for any graded column, the Total Grade or the Est. Total
     Grade.  While in the gradesheet select a column to be graphed by moving the
     cursor into that column.  Press Alt-G (or Alt-g) and a graph will replace
     the gradesheet (Esc will return you to the gradesheet).  While in the Bar
     Graph, the left and right cursor movement arrows will "scroll" the graph to
     the left and the right.  If there is a score off of the screen, a small
     arrow will appear in the lower right or left hand corner of the screen to
     indicate that there are more grades out of sight.  The scale feature works
     while in the Bar Graph in the same manner as while in the gradesheet (see
     4-6) and any scale changes made will be effective in the gradesheet.  If
     the graph is of the Total Grade column, then the Letter-number conversion
     may also be changed.  Keyboard in the letter grade to be changed and press
     return. A prompt New percentage will appear on the command line.  Keyboard
     in the new number grade for the letter selected and press return.  The
     graph will reflect the changes.  Remember, all changes made in the graph
     are also effective in the gradesheet.  To exit the graph, press Esc.  IBMr 
     graphics printers will print the graph by using the PrtSc function.  Return
     to the Gradesheet (Filename: NGB46B), highlight the Est. Total Grade column
     and press Alt-G.  The following screen will appear.
                                          24

                                                               ADVANCED FEATURES
----------------------------------------------------------------------------                                                                             
        20   command or scale:                                               
      N      present scale: +0                                               
      u                                                                      
      m                                                                      
      b                                                                      
      e 15                          //                                       
      r                                                                      
     ~    ~                                                                 ~  
     ~s   ~                                                                 ~ 
      t                             //                                       
      u                             //                                       
      d                             //                                       
      e                             //                                       
      n                             //                                       
      t  0                          //                                       
      s                             //                                       
                                    //                                       
           0        40        50    //  70        80        90        100    
                              F-   D//D+C-   C  C+B-   B  B+A-   A  A+       
                           Scaled percentage                                   
----------------------------------------------------------------------------                                                                             

                                                       4-11 Special Key-prefixes

          This section discusses 2 special Keys:  the extra-credit Key and the
     no-credit Key.

     Extra credit:
          The extra credit Key allows student to increase their final grade by
     any percentage of the Total Grade but does not penalize students who have
     no entry in this column.  The extra-credit key is limited to only one
     column in the gradesheet per defined key.  If you want several extra-credit
     entries in the gradesheet, there will have to be a Key defined for each
     column used.  The Amount of extra credit that can be earned in the
     extra-credit key is set in the % of Total Grade column.  As an example, if
     the extra-credit key would be worth and extra 10% of the Total Grade, Enter
     10 in the % of Total Grade column.  Note that the Total % should now read
     100.0. (+ 10% Extra Credit).  The amount of extra credit in the Total Grade
     that the student receives would be his score on the extra credit Key
     divided by the Max grade possible multiplied by the % of Total Grade.

     No credit:
          The No-credit key allows grades to be entered into the gradesheet
     that are not calculated into the Total Grade.  When the No-credit key-
     prefix is used the message '1 No credit key' is displayed under the
     description column.  If more than one No-credit key is used the number '1'
     would be replaced by the number of No-credit keys defined.  The no-credit
     key entries are only limited by the total column limit of 150 entries in
     the gradesheet.  The Max grade must be set for the no-credit key but do not
     set the % of Total Grade

          Go to the (E)dit-keys and add 2 new Key prefixes: X- for extra credit
     and N- for no credit. Preface the description of X- with a *  and preface
     the description N- with a #.  After entering the #nocredit key a message
                                          25

                                                               ADVANCED FEATURES

     will appear at the bottom of the Description column  1 No-credit-keys.  You
     should see something similar to the following screen:

----------------------------------------------------------------------------                                                                              
      Command or data: _                                         F1=Help      
                                                                              
      Key     Description          Max    # to  % of Total |---Optional gradin 
      prefix                       grade  drop  Grade      100   90   80   70  
                                                                              
      QZ-     quizzes                 20     1    20                           
       T-     tests                  100          40                           
       F-     final                  100          35                           
       A-     attend                   5           5        90   86 85  84 83 
       X-     *extra                  10          10                           
       N-     #nocredit               25                                      
                                                                              
          1 No-credit-keys                Total % 100.0  (+ 10.0 Extra Credit 
----------------------------------------------------------------------------                                                                              
      Filename:NGB411



































                                          26

                                                              EDIT-KEYS EXAMPLES
                                                          5-1 Edit-Keys Examples

----------------------------------------------------------------------------                                                                             
      Command or data: _                                         F1=Help     
                                                                             
      Key   Description            Max    # to  % of Total |---Optional gradi 
      prefix                       grade  drop  Grade      100   90   80   70 
                                                                             
      QZ-   quizzes                   20     1    20                          
       T-   tests                    100          40                          
       F-   final                     100         35                          
       A-   attend                     5           5                          
       EA-  *extra credit 1           20           5                       
       EB-  *extra credit 2           20           5                       
       P-   #participation             1                                       
                                                                              
           1 No-credit-key             Total % 100.0  (+ 10.0 Extra Credit)  
----------------------------------------------------------------------------                                                                             

     QZ-  quizzes Gradesheet may contain any number of columns for quizzes.     
     Each quiz column is worth 20 points.
              The lowest score on any quiz will be dropped.
              Quizzes are worth 20% of the Total Grade.
      T-  tests   Gradesheet may contain any number of columns for tests.
              Each test column is worth 100 points.
              No Tests will be dropped.
              Tests are worth 40% of the Total Grade.
      F-  final   Gradesheet may contain any number of columns for final.
              Each final column is worth 100 points.
              No finals will be dropped.
              Final are worth 35% of the Total Grade.
      A-  attendance  Gradesheet may contain any number of columns for
              attendance. 
              Each attendance column is worth 5 points.
              No attendance will be dropped.
              Attendance is worth 5% of the Total Grade.
     EA-  *extra credit1   Gradesheet may contain only 1 column with this Key
              prefix.
              Extra credit 1 is worth 20 points.
              After the Total Grade is calculated based on the other Key      
              prefixes up to 5% can be added to that total.
              First character of description must be a '*' for extra credit.
     EB-  *extra credit2   Gradesheet may contain only 1 column with this Key
              prefix.
              Extra credit 2 is worth 20 points.
              After the Total Grade is calculated based on the other Key      
              prefixes up to 5% can be added to that total.
              First character of description must be a '*' for extra credit.
      P-  #participation   Gradesheet may contain any number of columns for
              participation.
              Each participation column is worth 1 point.
              Participation is not calculated into the Total Grade.
              Entries in this Key prefix are for information only.
              First character of description must be '#' for No-Credit.
                                          27

                                                              EDIT-KEYS EXAMPLES

----------------------------------------------------------------------------                                                                             
      Command or data: _                                         F1=Help     
                                                                             
      Key   Description      Max   # to   % of Total |---Optional grading--|  
      prefix                 grade drop   Grade       A    B    C    D   F    
                                                                             
      QZ-   Quizzes             20    1     20                                
       C-   Concerts             1          30        6    5    4    3   3    
      TP-   Term Paper           A          20                                
       A-   Attendance           1          20       30  25   20   15  10     
       W-   Written Assignments  A          10                                
                                                                              
                                          Total % 100.0                      
----------------------------------------------------------------------------                                                                             

     QZ-  Quizzes   Gradesheet may contain any number of columns for quizzes.     
               Each quiz column is worth 20 points.
               The lowest score on any quiz will be dropped.
               Quizzes are worth 20% of the Total Grade.
      C-  Concerts  Optional grading;  The gradesheet will contain 6 columns.
               One column for each concert and each column being worth 1
               point.
               If the student attends all 6 concerts he/she will receive a
               'A', 5 concerts a 'B', 4 concerts a 'C', 3 concerts a 'D' and
               less then 3 will receive no credit.
               Concerts are worth 30% of the Total Grade.
     TP-  Term Paper   Gradesheet may contain any number of column for
               the Term Paper.
               Letter grades will be given to the Term Paper.
               Term Paper is worth 20% of the Total Grade.
      A-  Attendance  Optional grading; The gradesheet will contain 30
               columns for Attendance.  Each column will be worth 1 point.
               If a student accumulates 30 points he/she will receive a 'A',
               25 points a 'B', 20 points a 'C', 15 points a 'D', 10 points
               a 'F' and less than 10 points will receive no credit.
               Attendance is worth 20% of the Total Grade.
      W-  Written Assg.    Gradesheet may contain any number of columns for
               Written Assignments.
               Letter grades will be given to the Written Assignments.
               Each assignments is worth 10 points.
               Written Assignments are worth 10% of the Total Grade.  

     Note:     When using Optional grading it is important to enter all the
          columns required.  In our example: 6 columns for Concerts and 30
          columns for Attendance.  Unlike the regular grading which ignores
          the blank grades, Optional grading uses the number of blank
          grades to project the Est. Total Grade.  At the end of the term
          every Optional grading column must have a score.  See the Optional
          grading section for additional information.


                                          28

                                                                  ERROR MESSAGES
                                                              6-1 Error Messages

     Error, 8 characters max for the name (may be preceded by path).
          A file name can only be 8 characters maximum.  The name can be
          preceded by a valid path, ie c:\grades\name.  The Noble Gradebook
          will append the extension .GBK to each name.

     Error, data must be a numeric value. 
          A number is the only valid response to the question asked.  No
          letters or special characters are allowed. 

     Error, disk write.  Gradesheet 'not' saved. (possibly disk full) 
          Your Gradesheet is not saved.  The most probable cause of this error
          is insufficient disk space to save the current Gradesheet.  If this
          should be the case, save the Gradesheet on another disk before
          proceeding.  Malfunctioning hardware can also cause this error.

     Error, each key_prefix must have a 'Max Grade' assigned.
          One or more of the Key-Prefix have a blank in the Max-Grade column. 
          Each Key-Prefix must have a Max-Grade assigned.

     Error, extra credit Key-prefixes can only have one gradesheet entry.
          This Key-prefix can not be changed to Extra-credit because there are
          more than one column in the Gradesheet with this Key-prefix. Each
          Extra-credit Key-prefix can only have one column (entry) in the
          gradesheet. 

     Error, extra credit or non credit keys can not use optional grading. 
          Optional grading will not work with either Extra-credit or Non-
          credit Key prefixes.  The Optional grading columns must be blank in
          order to have a Key-prefix either Extra-credit or Non-credit.

     Error, invalid key-prefix
          A valid Key-prefix must be one or two letters followed by a
          hyphen (-). Examples of valid Key-prefixes would be T-, TT-, HW-
          , F-, MT-, etc.  Key-prefix may be enter either in upper or lower
          case.  In either case Gradebook will convert to upper case.

     Error, must be 0 - 100
          Valid numbers would be greater than or equal to zero and less then or
          equal to 100.  Examples are 0, 100, 45, 87, etc.

     Error, must be 0 - 9
          Valid numbers would be a whole number greater than or equal to zero
          and less than or equal to 9.  Examples 0, 9, 3, 6, etc.

     Error, must be 0 to 999.9
          Valid numbers would be greater than or equal to zero and less then
          1000.  Examples are 0, 1.25 ,100, 34.5, 150.5, etc.






                                          29

                                                                  ERROR MESSAGES
     Error, must be 1 to 20 characters
          The entry must be less than 20 characters.  Letters, numbers or
          special characters are allowed.

     Error, must be 4 digits max from 0 - 9999.
          A valid number must be greater than or equal to 0 and less than or
          equal to 9999 and can not contain more than 4 characters.

     Error, must be a numeric value preceded by '+', '-' or '*'."
          Examples of valid Scale factors would be: *1.1 for 10% increase, *.9
          for a 10% decrease, +2 for a 2 point increase, -3 for a 3 point
          decrease.  If you use the '*' the students raw score will be
          multiplied by the value.  If you use the '+' or '-' the raw score
          will be either increased or decreased by the value.  Remember that
          the raw score which shows in the Gradesheet is not changed its value
          is adjusted before being used to calculate the Total Grade.

     Error, must be a valid key-prefix & 1 or 2 characters
          A valid key must be a valid Key-prefix (defined in the Edit-Key
          option) followed be one or two number, letters or special characters. 
          The only character not allowed is the hyphen (-).

     Error, must be a valid letter grade.
          Valid Letter-Grades are A+, A, A-, B+, B, B-, C+, C, C-, D+, D, D-,
          F+, F, OR F-.

     Error, must be a whole number between 0 - 130. 
          Valid numbers would be greater or equal to zero and less than or
          equal than 130 and would have no fractional part.  Examples would be
          0, 130, 25, 67, 105, etc.

     Error, must be one or two letters followed by a '-' 
          A valid Key-prefix must be one or two letters followed by a hyphen
          (-). Examples of valid Key-prefixes would be T-, TT-, HW-, F-, MT-,
          etc.  Key-prefix may be enter either in upper or lower case.  In
          either case Gradebook will convert to upper case.

     Error, non credit keys can not have entries in %-of-Total Grade.
          %-of-Total-Grade does not apply to Non-credit Key-prefixes.  %-of-
          Total-Grade must be blank for Non-credit Key-prefixes.  

     Error, please answer 'y' or 'n'
          You must answer 'y' or 'n' or 'Y' or 'N'.  No other response will be
          accepted.

     Error, printer is not ready, please fix.
          The printer is either not connected or is not on-line (ready).

     Error, scores in the 'All Entries' column can not be deleted.
          Scores can not be deleted form the All-Entries column.  These scores
          are used to convert letter grades to number grades which are then
          used to calculate the Total Grade and the Est. Total Grade.

     Error, the maximum number of columns have been added.
          The maximum number of entries (columns) for a single Gradesheet is
          150.  The current Gradesheet has the 150 entry limit.
                                          30

                                                                  ERROR MESSAGES

     Error, the maximum number of Key-prefixes have been added. 
          The maximum number of Key-prefixes is 18.  The current Gradesheet has
          reached that limit.

     Error, the maximum number of students have been added.
          The maximum number of students for a single Gradesheet is 150.  The
          current Gradesheet has the 150 student limit.

     Error, this key already exists
          A key can not be repeated in the same Gradesheet.  A Key-prefix can
          be repeated (except for extra-credit) however the characters
          following the '-' must be unique.

     Error, this Key-prefix already exists
          The Key-prefix entered is already used.  Each Key-prefix must be
          unique.

     Error, this Key-prefix has more than one entry in the gradesheet.
          This Key-prefix can not be changed to extra-credit because there is
          more than one column in the Gradesheet with using this Key-prefix. 
          Each extra-credit Key-prefix can only have one column (entry) in the
          Gradesheet.  You can however have more than one extra-credit Key-
          prefix.

     Error, this Key-prefix must first be deleted from the gradesheet
          Before the Key-prefix can be removed from the Edit-Keys tables all
          columns in the gradesheet using this Key-prefix must be removed.

     Error, too many characters for this field.
          You typed too many characters for the current field.

     Error, Total Grade can not be changed.
          The Total Grade is a calculated field which is derived from the other
          entries in the Gradesheet.  The Total Grade can be scaled but not
          changed directly from the keyboard.

     Error, unable to open file
          The file name entered does not exist on the selected/default disk. 
          Be sure the name is spelled correctly and do not include the
          extension .GBK

     Error, values in letter-conversion table are no loger sequential
          While either in the letter_conversion or the bar-graph options you
          changed the values of the letter grades so that values do not
          decrease sequentially.  An example would be that a "B" was changed to
          110 and the "A" has a value of 100.








                                          31

                                        INDEX
  (C)lear-gradesheet . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
  (D)isplay-one  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
  (E)dit-keys  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
  (G)radesheet . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
  (I).D. Field . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
  (L)etter-conversion  . . . . . . . . . . . . . . . . . . . . . . . . . . .  19
  (P)rint  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
  (Q)uit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  13
  (R)etrieve . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
  (S)ave . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
  +
      Letter grades  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  21
      Scale  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22
  +,-,*
      Scale  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  -
      Letter grades  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  21
      Scale  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22
  *
      Extra credit   . . . . . . . . . . . . . . . . . . . . . . . . . . . .  25
      Scale  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22
  % of Total Grade . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3, 14
  #
      No credit  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  25
      Total-Grade/Est-Total-Grade  . . . . . . . . . . . . . . . . . . . . .  15
  # to drop  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3, 14
  ADVANCED FEATURES  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
  All Entries  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  19
  ALT-C
      Calculation On/Off   . . . . . . . . . . . . . . . . . . . . . . . . 4, 24
  ALT-D
      Display Statistics   . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  ALT-G
      Graph  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4, 24
  ALT-P
      Print  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5, 12
  ALT-S
      Sort   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Blank grade
      Entering a   . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  10
  Blank grades . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3, 10, 17
  Calculation On/Off . . . . . . . . . . . . . . . . . . . . . . . . . . . 4, 24
  Change name  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Column delete  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
  Columns add  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
  Command Summary  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Delete
      Key-prefix   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
  Delete column  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Delete Key-prefix  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Delete Name  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Description  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  3, 7
  DESIGNING YOUR GRADE BOOK  . . . . . . . . . . . . . . . . . . . . . . . . . 6
  Display Statistic  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  EDIT KEYS
      Examples   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  27
                                          32


  End  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Error Messages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  29
  Escape . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Est. Total Grade . . . . . . . . . . . . . . . . . . . . . . . . . . .  10, 15
      same value as Total Grade  . . . . . . . . . . . . . . . . . . . . . .  15
  Exit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  13
  F1
      Help   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
  GENERAL INFORMATION/COMMAND SUMMARY  . . . . . . . . . . . . . . . . . . . . 3
  GETTING STARTED  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
  Gradesheet name  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
  Graph  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4, 24
  Help . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Home . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Insert column  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Insert Names . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
  Installing the program . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
  Key prefix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  3, 6
  Letter grade . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7, 18
  Max grade  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  3, 7
  Maximum number of Keys . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
  Names add  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
  Optional grading . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  16
  Page down  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Page up  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Pg Dn  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Pg Up  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Print  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5, 12
  Readme.first . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
  Retrieving a file  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
  Saving . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
  Scale  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5, 22
      Total Grade  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
  Screen left  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Screen right . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
  Sort . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4, 24
  Special Key-prefixes . . . . . . . . . . . . . . . . . . . . . . . . . . .  25
  Starting From Scratch  . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
  Total Grade  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6, 10, 15
      same value as Est. Total Grade   . . . . . . . . . . . . . . . . . . .  15
  Weighted grades  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14












                                          33


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2515

     Volume in drive A has no label
     Directory of A:\

    NGB      EXE    108030   9-19-90   8:54p
    NGB35    GBK       920   1-02-89   1:54p
    NGB31B   GBK       528   1-03-89   8:50p
    NGB31A   GBK       506   1-02-89   1:56p
    NGB45    GBK       986   1-02-89   1:58p
    NGB42    GBK       956   1-02-89   1:59p
    NGB42B   GBK      1337   1-02-89   1:54p
    NGB44    GBK       956   1-02-89   1:56p
    NGB45A   GBK       986   1-02-89   1:58p
    NGB45C   GBK       982   1-02-89   1:59p
    NGB41    GBK       923   1-02-89   1:59p
    NGB32B   GBK       920   1-02-89   1:55p
    NGB45B   GBK       986   1-02-89   1:56p
    NGB32A   GBK       781   1-02-89   1:58p
    NGB46    GBK       986   1-02-89   1:59p
    NGB46A   GBK       985   1-02-89   2:00p
    NGB411   GBK      1061   1-02-89   1:55p
    NGB46B   GBK       990   1-02-89   1:56p
    NGB410   GBK       986   1-02-89   1:58p
    PRINTDOC EXE     17865   9-16-90   7:09p
    README             854   9-18-90   7:54a
    NGB      DOC    110150   9-19-90   8:26p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       803  10-04-90   1:40p
    FILE2515 TXT      2521  10-04-90   1:40p
           25 file(s)     257026 bytes
                           58368 bytes free
