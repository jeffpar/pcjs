---
layout: page
title: "PC-SIG Diskette Library (Disk #1233)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1233/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1233"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRADESCAN"

    GRADESCAN is a menu-driven grade-keeping system designed with the busy
    teacher in mind.  Its operation is so simple that it can be used with
    full confidence the very first time.  Menu selectable options include:
    create/select class, enter assignments, enter grades, add new students,
    examine class data, and print reports.
    
    GRADESCAN allows up to 17 classes to be created.  Each class can contain
    50 students and 14 assignments.  The assignments can be weighted and
    student names can be copied into more than one class.
    
    GRADESCAN was developed for teachers by a teacher.  The program includes
    complete instructions on disk, self-explaining menus, and provides
    several sample class exercises for the new or timid user to experiment
    on without hurting anything.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1233 GRADESCAN  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type GRDSCN (press enter)                         ║
║                                                                         ║
║ To install program to your hard disk, type INSTALL (press enter)        ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```








                                    GRADESCAN

                                  (Version 3.2)



                                   USER'S GUIDE





                 FOR IBM PC, XT, AT, AND COMPATIBLE COMPUTERS



                         Developer:  C. Robert Blum

                         Educational Consultant:  Joan Barnett Blum




                                 A Product of

                             CROFTON BINARY CONCEPTS

                             1722 Golden Court

                             Crofton, Maryland 21114

                             (301) 261-3177









                      Copyright (C) 1989 by C. Robert Blum











                               NEEDED EQUIPMENT



         IBM PC, XT, AT, or Compatible Computer

         At least one disk drive

         Printer (optional)



                      FILES REQUIRED FOR COMPLETE PROGRAM


         README.DOC
         NOTICE.DOC
         REGISTER.DOC
         MANUAL.DOC
         GRDSCN.BAT
         GRDSCN.EXE
         CYA.BAT
         CYB.BAT
         CYC.BAT
         PRINTOPT.PRF
         INSTALL.BAT


















         CONGRATULATIONS

               Your purchase of GRADESCAN will make your record keeping and
         grade computation much quicker and easier, giving you more time to
         devote to lesson planning, preparation of new instructional
         methods, counseling of students, and - who knows? - maybe even a
         little relaxation.

               GRADESCAN was designed with the teacher in mind.  It was
         developed by a former teacher, under the close guidance of his
         wife, who happens to be a very busy teacher.  You don't have time
         to master a complicated computer program that taxes your patience
         and threatens destruction of your valuable records at every turn.
         You need a program that is so simple it can be used with full
         confidence the very first time.  That's what GRADESCAN is all
         about.  After using it for several weeks, you'll wonder how you
         ever got along without it.  It is a professional product and will
         respond like commercially distributed software.  Its user
         interface is so sophisticated that it does not require you to
         memorize arcane syntax or constantly think about the operation of
         the program while you are recording or examining grades.  You will
         quickly discern that the low registration fee of this product
         ($25.00) is a delightful bargain in professionally developed
         software.






                             NEW FEATURES IN VERSION 3.0

               Version 3.0 of GRADESCAN retains all the best features of
         Version 2.1.  Furthermore, it is fully compatible with all the
         files you have created under Version 2.1.  No conversion is
         necessary.  A summary of the new features follows:


         o  Names of students can be alphabetized at the stroke of a key.

         o  Class averages can be listed in descending order by grade, with
            the overall class average appearing at the top of the screen.
            Naturally, they may also be listed alphabetically.

         o  The grades on any assignment can be listed in descending order,
            with the class average on the assignment appearing at the top
            of the screen.

         o  Multiple grades can be changed for any one student without
            returning to the roster between each change.

         o  Screen prompts have been changed in numerous places for
            clarity.

         o  Minor changes in the layout of screens and printed reports have
            been introduced to eliminate ambiguities.

         o  The program has been made faster and more compact.


                                     VERSION 3.2

              Version 3.0 was found to have problems with computations in
         several seldom-encountered situations.  These problems resulted
         from unpredictable results in the rounding of decimals to the tens
         place.  Version 3.2 corrects these problems so that computations
         are now reliable.

              Additionally, Version 3.2 now detects situations in which
         users operating GRADESCAN from a floppy disk drive are attempting
         to use the GRADESCAN'S backup procedure without first copying
         COMMAND.COM to their program disk.  The error is trapped and the
         user is informed on how to proceed.
         GETTING STARTED

               Let's get one thing straight from the outset.  You don't
         need this USER'S GUIDE unless you literally don't know how to turn
         on a computer.  While we suggest you read through it quickly, you
         really can go right to the program and experiment for several
         minutes until you feel confident enough to insert your class
         records.  It's that simple!  HOWEVER,  just for the record, here 
         is how to "boot" the program (that's computer jargon for loading 
         the program into the memory of your computer).

               o  Turn on the monitor.

               o  Turn on the computer and let it run until it completes
                  its "power-on self test".

               o  MAKE A BACKUP COPY OF THE GRADESCAN PROGRAM DISK.  DO IT
                  NOW.  Some of the procedures set forth below will alter
                  or add material to the program disk.  It is important
                  that you have at least one unaltered copy of the program
                  disk as a safeguard against loss.


         INSTALLING GRADESCAN FOR USE ON A HARD DISK DRIVE


               o  Insert the GRADESCAN program disk in the floppy ("A")
                  drive.  At the ">" prompt, type "a:install" (without the
                  quotation marks).

               o  Remove the program disk from the floppy drive and file it
                  away.  We suggest you make a backup copy using the
                  DISKCOPY command from your computer's Disk Operating 
                  System (DOS).

               o  Type "GRDSCN" (without the quotation marks) to begin the
                  program.  It does not matter whether you type upper case
                  or lower case letters.


         RUNNING GRADESCAN FROM A FLOPPY DISK DRIVE


               o  If you do not have a hard disk, you will have to run
                  GRADESCAN from the floppy drive.  The program disk will
                  have to remain in the floppy drive throughout operation
                  of the program, and your class files will be written to
                  the program disk.

               o  At the prompt (">"), type "A:" (without the quotation
                  marks) to log on to the "A" drive.

               o  Once you have logged on to the "A" drive you will again
                  see the system prompt (">").  At the system prompt, type
                  the word "GRDSCN" (without the quotation marks).  This
                  will invoke the program.

               o  GRADESCAN has an internal procedure which permits you to
                  easily back up your class data to a floppy disk
                  periodically.  This procedure requires that you copy the
                  file COMMAND.COM from your DOS disk to the GRADESCAN
                  program disk.  You must have you have two floppy drives
                  to use this procedure.  If you have only one floppy
                  drive, you must use the DOS "COPY" command to
                  periodically back up your files.


         NOW, FOR A TEST DRIVE


               We have included several sample classes on the program disk.
         If you're the impatient sort, this is a good time for you to try 
         your wings.  Unfortunately, once you do, you may no longer feel a
         need to read this manual.  That's understandable and we'll forgive
         you!

               After invoking the GRDSCN command you should be at the main
         menu.  It has nine choices on it.  Press "1" (SELECT CLASS), to
         bring up a submenu with three more choices.  From the submenu,
         Press "2" (SELECT CLASS) and you will be given a list of several
         sample classes.  Select one of these by entering the number.  (Go
         ahead!  Get it out of your system!  Enter some key other than a 1,
         2, or 3 so you can see what happens.)  The class you selected will
         be loaded into memory and you can experiment with all aspects of
         the program without hurting a thing.  Come to think of it, that
         might be the best way to learn this program.  It will take all of
         about ten minutes to become thoroughly familiar with it.
         Meanwhile, back to the USER'S GUIDE... 


         THE MAIN MENU


               Now you are ready to explore GRADESCAN in more depth.  After
         you have entered the appropriate start-up commands at the system
         prompt (C > GRDSCN), you will be presented with the GRADESCAN logo
         screen.  Press any key to invoke the Main Menu.  The Main Menu
         looks like the following:


                                   GRADESCAN


                             1.  SELECT CLASS

                             2.  ENTER ASSIGNMENTS

                             3.  ENTER GRADES

                             4.  EXAMINE DATA

                             5.  ADD NEW STUDENTS

                             6.  PRINT REPORTS

                             7.  SAVE DATA TO DISK

                             8.  FILE MAINTENANCE

                             9.  QUIT


                     ENTER THE NUMBER OF YOUR SELECTION:


               Your use of the program is closely keyed to the Main Menu.
         You choose the option you need from the menu and proceed to the
         appropriate program module.  In each module you will be guided by
         the prompts (that's computer jargon for instructions that appear 
         on the screen) as to what to do.  If you make a mistake by
         entering something unacceptable to the program, such as a letter
         when you should be entering a number, the program either lets you
         reenter the number or returns you to the menu.  Either way, you
         get as many chances as you need to make the proper entry.  And by
         the way, if you enter a module that you didn't mean to enter (by 
         selecting the wrong option from the Main Menu), you can easily
         return to the menu.  Now let's look at each of the menu options.  


         1.  SELECT CLASS

              Before we talk about Option No. 1, it is necessary to
         say a special word about Option No. 7:  "SAVE DATA TO DISK."
         NEWLY ENTERED DATA WILL BE LOST IF YOU EXIT THE PROGRAM OR CALL IN
         ANOTHER CLASS WITHOUT FIRST SAVING THE DATA TO DISK.  Therefore,
         after you have entered new data for a class, or changed data
         already in the files, select Option No. 7 from the Main Menu to
         save all data from the current class to disk.

         The data will be saved to the same disk on which you are running
         the program.

               Now, for Option No. 1, selecting a class.  Choosing this
         option from the Main Menu brings up a submenu that allows you to
         do one of the following:

                         1.  CREATE NEW CLASS

                         2.  SELECT CLASS

                         3.  RETURN TO MENU

         The third option returns you to the Main Menu, in case you ended
         up in this module by mistake.

         The second option allows you to select from a list of existing
         classes.  We will discuss it in a moment.

         Use the first option, CREATE NEW CLASS, to enter your new classes
         into the program.  You are permitted to have up to 17 classes.
         Selecting this option will bring up a prompt asking you for the
         name to be assigned to the class (i, e., the subject).  GRADESCAN
         does not permit you to create a class without any students in it.
         Therefore, your next task will be to enter the names of the
         students.  You may need to type the names in at the keyboard, but
         not necessarily:  if you have entered other classes, you may have
         the same group of students for other subjects you teach.  This is
         common in the elementary schools.  For example, you may teach the
         same students for English and Mathematics, or perhaps you have the
         same students for all subjects.  Therefore, GRADESCAN will allow
         you to use the names from another class that is already stored on
         disk.  You will not have to type the names separately for each
         class.  If grades have been entered for the class, these will not
         be brought forward into the new class.  Only the names are
         transferred.

         So, you will be presented with three options:

                         1.  ENTER NAMES FROM KEYBOARD

                         2.  ENTER NAMES FROM ANOTHER CLASS

                         3.  ABORT PROCESS - RETURN TO MENU

         After you have entered the name of the subject, select the method
         you will use for entering the names of the students.

         If you elect to enter the names from the keyboard, you will be
         presented with an input screen.  You are allowed up to 50
         students, with up to 25 characters (letters, commas, blank spaces,
         etc.) per name.  You may enter last names first or first names
         first - it doesn't matter.  Also, you may include middle initials,
         or any other designators, as long as you stay within the limit of
         25 characters.  The program will not permit you to exceed the
         limit, so there is no need for you to count the number of
         characters used.

         After you have entered the names, press [enter].  The program will
         then allow you to proceed or cancel the entire effort.

         If you have made a mistake in one of the names that has already
         been entered, or if you entered a name that you didn't mean to 
         enter, there is a way to correct it easily.  We will discuss that
         under Option 4 of the Main Menu.  Any of your entries in any part
         of the program can be easily revised or deleted.

         To use the names from an established class in the class you are
         setting up, select the option worded as "ENTER NAMES FROM ANOTHER
         CLASS".  A list of all established classes will come up on the 
         screen.  Pick the one you want to use and enter its number.  The
         program will then duplicate the names into a class roster for the
         class you are establishing.

         New classes will automatically be stored to disk as part of the
         process of establishing the class.  No extra step is required.

         Option 2, SELECT A CLASS, brings up a list of classes on file.
         Simply type in the number of the class you want to load into
         memory.

               But one important thing here.  THE CLASS CURRENTLY IN MEMORY
               WILL BE REPLACED BY THE NEW CLASS.  MAKE SURE YOU SAVE THE
               CURRENT CLASS TO DISK USING OPTION 7 FROM THE MAIN MENU.  If
               you don't do this, any changes you have made to the data 
               since you last saved the data to disk will be lost.  All
               those grades you just entered over the past twenty minutes
               will not have been saved to disk.  Of course, if you don't 
               want to retain the new data, you would not save it to disk
               prior to calling a new class into memory.


         2.  ENTER ASSIGNMENTS

               Option No. 2 on the Main Menu allows you to enter a
         description of each assignment.  The word "assignment" is used
         here in its broadest sense to include any task given to the
         student, whether it be an examination, test, quiz, homework,
         project, or report.  You may enter up to 40 assignments during
         each grading period.

         You must enter the assignment before going to Option No. 3 on the
         Main Menu, whereby the grade on the assignment is recorded.

         You are permitted to describe up to 14 assignments at one time
         before entering the grades, but we recommend that you keep things
         manageable by entering assignments regularly so your work doesn't
         pile up (more than it already is).

               Three types of information are required for entry of
         assignments:

                         DATE (mm/dd/yy)

                         DESCRIPTION (up to 40 characters)

                         WEIGHT  (1 to 50)

         NOTE ABOUT WEIGHTING FACTORS:  The weighting of assignments
         requires special mention.  Some assignments probably should count
         more than others.  If you elect to weight a pop quiz with a
         weighting factor of 1, you probably want to assign a larger
         weighting factor to a major examination - 2,4,10, or whatever you
         may think the assignment is worth.  GRADESCAN uses these weighting
         factors in calculating the student's average for all assignments. 
         If you assigned a weighting factor of 4 to the major examination,
         GRADESCAN will treat the examination as if the student received
         the grade on four assignments each having a weighting factor of 1.
         That is, the assignment counts four times as much as an assignment
         with a weighting factor of 1.  This extra weight is reflected in
         the overall average for the student.

         Although the display screen identifies the range of weighting
         factors as being 1 to 50,  there may be occasions where you want
         to record a grade for students without having it count in their
         calculated average.  There is a way to do this.  Enter the weight
         as zero.  GRADESCAN will accept the zero weight, but be careful
         when using it.  Assignments with a zero weight will not count in
         the average.

         When you have finished entering assignments, press [enter] and
         GRADESCAN will automatically bring you to Option No. 3 on the Main
         Menu:  ENTER GRADES.


         3.  ENTER GRADES

               GRADESCAN accepts only those grades that are expressed as a
         percentage.  You may exceed 100% if warranted (up to 999%).

         Each student's name will appear on the screen and you will be 
         prompted to record the grade for each assignment for the student
         before proceeding to the next student.

         If a student was excused from an assignment, either temporarily or
         permanently, enter the letter "x" (either upper or lower case)
         instead of a grade.  Grades recorded as "x" do not count in the
         average, but allow you to keep track of which students have work
         which must be made up.  If the student makes up the work, you can
         enter the grade through the methods contained in Option No. 4 of
         the Main Menu, whereby data can be changed.

         After all grades have been entered you will be prompted to press
         any key to return to the Main Menu.  After entering grades, when
         you arrive at the Main Menu, it is time to store the new grades
         and assignments to disk.  Select Option No. 7 from the Main Menu
         to save your new data to disk.  If you select another class before
         having saved you data to disk, you will lose your data for the
         present class and have to reenter it!



         4.  EXAMINE DATA


               This module is the core of GRADESCAN.  This is where
         GRADESCAN tells you what data has been recorded, informs you of
         the averages of your students, and allows you to revise data as
         required.

         Selecting Option No. 4 brings to the screen a submenu containing
         the following options:

                         1.  SUMMARY AVERAGES

                         2.  ROSTER, GRADES

                         3.  ASSIGNMENTS

                         4.  LIST OF SUBJECTS

                         5.  RETURN TO MENU


         We will look at each option in turn.


         SUMMARY AVERAGES:

               Now to really put the program through its paces.  This is
         probably why you bought the program in the first place--to save
         you from the laborious task of averaging your grades.

         This menu option produces summary averages on the screen for each
         student.  It does not show you the individual grades on each task
         that went into that average.  Option No. 2 from the submenu does
         that (and it also computes the average).  With the current option
         you can view the averages on the screen at any time during the
         marking period.

         Selecting Option No. 1, SUMMARY AVERAGES, brings up a submenu with
         the following options:


                         1.  SORTED BY NAME OF STUDENT

                         2.  SORTED BY AVERAGE

                         3.  SUBMENU

                         4.  MENU


         Option No. 1 produces an average for each student in the class.
         The names will be alphabetical if the roster has been
         alphabetized.

         Option No. 2 will show the overall class average at the top, and
         the average of each student in descending order by average.

         You can generate a printed report of these summary averages using
         Option No. 6 from the Main Menu: PRINT REPORTS.  Option No.  6
         will produce a submenu, of which one option will be the summary
         averages.  The averages in the printed report are listed
         alphabetically.


         ROSTER, GRADES:

               This option from the submenu allows you to do more than just
         examine grades.  It allows you to change two types of data:  the
         names of the students, and the grades themselves.

         A list of students in the class appears on the screen.  Using the
         bottom-line menu on the screen, you indicate whether your want to
         examine the grades (E) or change the data (C).  The only data on
         this screen that can be changed is the names of the students.
         Once you select an "E" or "C" the prompt will ask you to indicate
         the number of the student involved.

         If you entered a "C" to change the data, you will be given the
         option of changing the student's name or deleting the student from
         the class.  Deletion is a very permanent procedure.  Make sure you
         have a record of this student's progress on hard copy or on a 
         back-up disk before deleting the student.

         If you entered an "E", you will be presented with the student's 
         achievement on each assignment, along with a calculated average.
         Again, you will be presented with a bottom-line menu that allows
         you to change data (the data here is the student's grades).  This
         is where we can correct erroneous grades or record the grades for
         assignments for which the student has been temporarily excused -
         the ones we entered an "x" for previously.  Entering a "C" to
         change data allows us to carry out this procedure.

         You can print hard-copy reports of the grades of the entire class
         or of individual students using Option No. 6 from the Main Menu.
         We will defer the instructions for printing until we discuss that
         option from the Main Menu.


         The bottom-line menu allows you to return to the roster to select
         other students for examination of grades, or to return to the
         submenu or the Main Menu.


         ASSIGNMENTS:


               Selecting this option from the submenu brings up a screen
         displaying all assignments recorded to date.  It shows the date,
         description, and weight associated with each assignment.

               In the bottom line menu, you are given an option to list the
         grades for each student on any particular assignment.  To do this,
         select "L" from the menu.  You will then be asked to enter the
         number of the assignment you want to examine.  Entering the number
         will produce a screen showing the class average on the assignment
         and the grade earned by each student on the assignment.  The
         grades will be listed in descending order.

               In the bottom-line menu, you are given the option of
         changing any of the data.  To do this, enter a "C" at the prompt.
         You will then be given the option of changing the date,
         description, or weighting factor, or of deleting the assignment
         entirely.

         You may choose to delete the assignment entirely, but if you do,
         you will erase any record of the grades earned by students on the
         assignment.  These grades will no longer count in the students' 
         averages.

         Other prompts on the bottom-line menu allow you to return to the
         submenu or the Main Menu.


         LIST OF SUBJECTS:

               Selecting this option from the submenu brings up a list of
         all subjects on file.

         Again, you are given the option of changing the data.  To do so,
         enter a "C" at the bottom-line menu.  You will then be given a
         choice of changing the name of the subject or deleting the class
         entirely from your records.

         Other prompts on the bottom-line menu allow you to return to the
         submenu or the Main Menu.


         5.  ADD NEW STUDENTS (and deleting students)

               What about that new student who comes to your class from
         another school or the student who transfers in to your class from
         that of another teacher?  This menu option does the trick.  You
         may add students to the class at any time during the grading
         period, as long as you do not exceed the limit of 50 students per
         class.

         All assignments entered before the addition of the new student
         will be automatically recorded for the new student as if he or she
         was excused.  They will not be calculated in the student's 
         average.

         One additional point.  Instead of wanting to add a student, what
         if you want TO DELETE A STUDENT.  To delete a student, you need to
         bring up a roster of the class.  To do this, use Option 4, EXAMINE
         DATA, from the main menu.  From the submenu, select Option 2,
         GRADES.  This will produce a roster of the class.  From the bottom
         line menu, select "C", CHANGE DATA.  This will produce a question
         asking whether you want to revise the student's name.  Answering 
         "no" will produce a question asking whether you want to delete the
         student entirely.  Answering "yes" to this question will delete
         the student from the class.



         6.  PRINTED REPORTS


               This option produces a submenu with the following options


                             1.  GRADES, ENTIRE CLASS

                             2.  GRADES, ONE STUDENT

                             3.  SUMMARY AVERAGES

                             4.  ROSTER

                             5.  OPTIONS

                             6.  MENU


         Naturally, the sixth option on the submenu will return you to the
         main menu at any time.

         The fifth option allows you specify whether, in printing the
         grades for an entire class, you want to begin each student on a
         new page or print the records contiguously to save paper.  The
         default is contiguous records.

         Options 1 and 2 from this submenu permit you to produce those
         valuable reports from Option 4 on the Main Menu, showing the
         student's grade on each assignment and the average of all grades. 
         You may want to distribute these to students at least once during
         the marking period to prevent any surprises at report card time
         ("but you never warned me").  They are also useful for
         parent-teacher conferences.

         In printing the report of the GRADES FOR ONE STUDENT, you will be
         presented on screen with a roster of the students.  Indicated the
         student whose grades are to be printed by using the EXAMINE GRADES
         option from the bottom-line menu (i.e., enter "E", then the number
         of the student).  You are indeed examining the grades, only this
         time you are doing it on hard copy.

         The option for a printed roster will give you a formatted
         spreadsheet on which you can record attendance, payment of fees,
         turn-in of books, or a myriad of other checklist items.

               Have you found certain screens in GRADESCAN that you would
         like to print but which are not included among the options on the
         printing submenu.  Simple!  YOU CAN PRINT ANY SCREEN BY PRESSING
         THE SHIFT KEY (hold it down) AND PrtSc AT THE SAME TIME.



         7.  SAVE DATA TO DISK

               NEWLY ENTERED DATA WILL BE LOST IF YOU EXIT THE PROGRAM OR
         CALL IN ANOTHER CLASS WITHOUT FIRST SAVING THE DATA TO DISK.
         Therefore, after you have entered new data for a class, or changed
         data already in the files, select Option No. 7 from the Main Menu
         to save all data from the current class to disk.

         The data will be saved to the same disk on which you are running
         the program.


         8.  FILE MAINTENANCE

               Selecting this option brings up a submenu with the following
         additional options:


                             1.  BACK UP ALL CLASSES

                             2.  SET UP NEXT MARKING PERIOD

                             3.  ERASE ALL CLASSES

                             4.  MENU

              Option 1 should be used frequently.  Once you have suffered a
         disaster you will understand that.  EVERY COMPUTER USER HAS HAD AT
         LEAST ONE DISASTER FROM FAILURE TO BACK UP HIS OR HER WORK.

         If you are running GRADESCAN from a hard disk, back up your files
         to a floppy disk in Drive A or Drive B (if you have a Drive B).

         If you are running GRADESCAN from a floppy disk, back up your
         files to a floppy disk in the unused disk drive.  In order to use
         GRADESCAN'S internal backup procedure to copy files from one
         floppy to another, you must first have copied the file COMMAND.COM
         from your DOS disk to the GRADESCAN program disk.

         If you are running GRADESCAN from a computer that has no hard
         drive and only one floppy drive, you will not be able to use
         Option No. 8 from the Main Menu.  You will have to use make your
         copies by exiting the program and using the DOS "COPY" OR
         "DISKCOPY" commands.

         When making back-up copies, we recommend that you devote a
         complete floppy disk to the back-up files.  At any rate, do not
         mix GRADESCAN files with other files having a ".DAT" file
         extension.  If GRADESCAN finds insufficient space on the
         destination disk when making the back-up copy, it will erase all
         the ".DAT" files it has written to the destination disk, along
         with all other ".DAT" files already on the destination disk.  For
         this reason, we recommend that you devote one floppy disk to
         GRADESCAN back-ups and not place any other files on that floppy
         disk.

               Option 2 allows you to set up your files for the next
         marking period.  It performs two tasks:

                   o  It makes a back-up copy of all your class files.

                   o  It purges all assignments and grades from you class
                      files so you can enter new assignments during the new
                      grading period.

         Its operational procedures are identical to those for making
         back-up copies.

               Option 3 erases all your class files.  This is a complete
         erasure and no trace of the data is left:  not the subject,
         student names, assignments, or grades.

                   o  Use this option to erase the practice files that came
                      with the program, or to erase all files after the
                      school year is completed.

                   o  Using Option 1, make a copy of the files before you
                      erase them.  This will prevent you from losing class
                      records or practice files that you might want to
                      refer to in the future.


         9.  QUIT

               This option allows you to exit from the program.  Make sure
         you SAVE ALL NEW DATA before exiting from the program.


         CHANGING YOUR DATA


               Although we have discussed how to make corrections and
         revisions to data entries in our discussion of the individual menu
         topics, special mention is necessary so that the user understands
         the approach taken by the program in permitting easy modifications
         and revisions to previous entries.

         The gateway to all data revisions is Option 4 on the Main Menu.
         Option 4 permits you to examine data.  That data may be in the
         form of summary averages, grades, assignments, or names of
         subjects.  Although you entered the data through one of the other
         menu options, if you need to revise it you must do so through Menu
         Option 4.  The forms which these changes may take are described
         below:


               -  Correcting the names of students or deleting students

                  Select Option 2 (GRADES) from the submenu.  Select
                  "Change Data" from the bottom-line menu.  This will allow
                  you to correct the student's name or delete the student 
                  from the class roster.

               -  Correcting grades (including the entry of make-up grades
                  when the student was previously excused from an
                  assignment

                  Again, select Option 2 (GRADES) from the submenu, but
                  this time, select "Examine Grades" from the bottom-line
                  menu.  You will be prompted to identify which student's 
                  grades you want to examine.  After you respond to this
                  prompt, you will be presented with the grades.  From the
                  bottom-line menu of this screen, select "Change Data".
                  You will then be prompted for the changes you wish to
                  make.


               -  Revising information about assignments, or deleting the
                  assignment from the record

                  Select Option 3 (ASSIGNMENTS) from the submenu.  You will
                  be presented with a list of all assignments on record for
                  the class in memory.  Select "Change Data" from the
                  bottom-line menu.  This selection will permit you to
                  change the date, description or weighting factor of the
                  assignment.  If you respond negatively to each of these
                  options, you will be asked if you want to delete the
                  assignment.  If you say "yes", you will be warned that
                  deleting the assignment will erase the record of the
                  assignment and all grades earned on the assignment for
                  every student in the class.

               -  Modifying the names of subjects, or deleting classes
                  entirely

                  Select Option 4 (LIST OF SUBJECTS) from the submenu and
                  select "Change Data" from the bottom-line menu.  You will
                  be asked whether you want to change the name of the
                  subject.  If you respond in the negative, you will be
                  asked if you wish to delete the class entirely.  Electing
                  to delete the class causes the erasure of all data
                  associated with the class:  the students' names, the 
                  assignments, and the grades.

                                   LICENSE



                 GRADESCAN, its component files, and its documentation are
         copyrighted.  They are licensed for use by a single registered
         user after payment of the appropriate fee, except as provided for
         under a thirty-day trial period during which the user may
         determine the applicability of the program to his or her needs.
         Users may make backup copies to protect against physical damage to
         the principal working copy, and may make copies to share with
         others for the purpose of permitting others to evaluate the
         program.  This program may not be modified in any way without the
         express written consent of Crofton Binary Concepts.  Site licenses
         are available from Crofton Binary Concepts.  Distributors may
         charge a nominal fee for copying and distributing the program
         under normal shareware arrangements.



                                       Crofton Binary Concepts
                                       1722 Golden Court
                                       Crofton, Maryland 21114








                                   WARRANTY


               GRADESCAN has been developed and tested to ensure that it
         performs correctly and produces accurate and reliable results.  It
         is developed,produced, and distributed with the understanding that
         it is high quality software and will work as intended.  It is
         designed to facilitate the work of the teacher by providing an
         easy, yet powerful device for maintaining records of student
         performance.  Nevertheless, this program is sold and distributed
         without any warranty of any kind, either expressed or implied.
         The developer and distributor (Crofton Binary Concepts) is not
         responsible for any damage caused by this program to equipment,
         other software, or humans and is not responsible for the accuracy
         of its results.

                          GRADESCAN REGISTRATION FORM
                                   Ver. 3.2

         REQUIREMENT

               GRADESCAN is shareware, but it is not free of charge.  If,
         after a reasonable evaluation period (usually 30 days), you decide
         to use GRADESCAN on a regular basis, or as you primary software
         for recording grades, you are obligated to register the program
         with the developer.

               In addition to providing you the legal rights to continue
         use of the program, registered owners receive notification and
         significant discounts on any future versions of GRADESCAN and
         telephone hot-line privileges.



         LAST NAME________________________________________________________

         FIRST NAME_______________________________________________________

         MIDDLE INITIAL_____________

         ADDRESS___________________________________________________________

         CITY__________________________________  STATE_____________________


                                 ZIP CODE____________________


         ( )  $20.00:  Registration Fee

         ( )  $25.00:  Registration Fee + Program Disk and Printed Manual

                    ( ) 5 1/4" Disk            ( ) 3 1/2" Disk

         ( )   $5.00:  Program Disk and Printed Manual for Previously
                       Registered Owner (One per customer, if not purchased
                       as part of registration.)


         Registration fee to be enclosed in form of check or money order.


         MAIL TO:                  Crofton Binary Concepts
                                   1722 Golden Court
                                   Crofton, Maryland 21114
```
{% endraw %}

## NOTICE.DOC

{% raw %}
```

                                   LICENSE



                 GRADESCAN, its component files, and its documentation are
         copyrighted.  They are licensed for use by a single registered
         user after payment of the appropriate fee, except as provided for
         under a thirty-day trial period during which the user may
         determine the applicability of the program to his or her needs.
         Users may make backup copies to protect against physical damage to
         the principal working copy, and may make copies to share with
         others for the purpose of permitting others to evaluate the
         program.  This program may not be modified in any way without the
         express written consent of Crofton Binary Concepts.  Site licenses
         are available from Crofton Binary Concepts.  Distributors may
         charge a nominal fee for copying and distributing the program
         under normal shareware arrangements.



                                       Crofton Binary Concepts
                                       1722 Golden Court
                                       Crofton, Maryland 21114








                                   WARRANTY


               GRADESCAN has been developed and test to ensure that it
         performs correctly and produces accurate and reliable results.  It
         is developed,produced, and distributed with the understanding that
         it is high quality software and will work as intended.  It is
         designed to facilitate the work of the teacher by providing an
         easy, yet powerful device for maintaining records of student
         performance.  Nevertheless, this program is sold and distributed
         without any warranty of any kind, either expressed or implied.
         The developer and distributor (Crofton Binary Concepts) is not
         responsible for any damage caused by this program to equipment,
         other software, or humans and is not responsible for the accuracy
         of its results.



```
{% endraw %}

## README.DOC

{% raw %}
```

                                 GETTING STARTED


         NOTICE:

         GRADESCAN is copyrighted.  If after trying it out and evaluating
         it, you intend to use it on a regular basis, a nominal fee should
         be remitted to the developer.  The terms of this arrangement are
         spelled out in the file labelled "NOTICE.DOC".  To view this file,
         type "TYPE NOTICE.DOC".  To make a printed copy, type "TYPE 
         NOTICE.DOC > PRN". 


         REGISTRATION:

         Forms for registering the program can be printed by typing "TYPE 
         REGISTER.DOC > PRN". 


         MANUAL:

         To make a printed copy of the GRADESCAN USERS MANUAL, type "TYPE 
         MANUAL.DOC > PRN". 


         STARTING THE PROGRAM:

              From a FLOPPY DISK, type "GRDSCN".

              From a HARD DISK, type "A:INSTALL".  Upon completion of the
              installation process, type "GRDSCN".


         ELIMINATING THE PRACTICE CLASSES:

              Select Option 8, FILE MAINTENANCE, from the Main Menu.

              Select Option 3, ERASE ALL CLASSES, from the Submenu.

         This will remove the practice classes when you are ready to enter
         your own class data.

         SAVING DATA TO DISK:

              NEWLY ENTERED DATA WILL BE LOST IF YOU EXIT THE PROGRAM OR
              CALL IN ANOTHER CLASS WITHOUT FIRST SAVING THE DATA TO DISK.
              Therefore, after you have entered new data for a class or
              changed data already in the files, select Option No. 7 from
              the Main Menu to save all data from the current class to disk.

         BACKING UP YOU DATA FILES:

              Using GRADESCAN'S internal backup procedure requires that
              you have two floppy disk drives.  If you have only one
              drive, you should periodically use the DOS "DISKCOPY"
              function to back up your work.

              If you are running GRADESCAN from a floppy disk and have at
              least two floppy drives, you must copy the file COMMAND.COM
              from your DOS disk to the GRADESCAN disk to be able to use
              the program's internal backup procedure.  Selecting the "FILE
              MAINTENANCE" option from the Main Menu brings up the backup 
              procedure.

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                           GRADESCAN REGISTRATION FORM
                                    Ver. 3.2

         REQUIREMENT

               GRADESCAN is shareware, but it is not free of charge.  If,
         after a reasonable evaluation period (usually 30 days), you decide
         to use GRADESCAN on a regular basis, or as you primary software
         for recording grades, you are obligated to register the program
         with the developer.

               In addition to providing you the legal rights to continue
         use of the program, registered owners receive notification and
         significant discounts on any future versions of GRADESCAN and
         telephone hot-line privileges.




         LAST NAME________________________________________________________

         FIRST NAME_______________________________________________________

         MIDDLE INITIAL_____________

         ADDRESS___________________________________________________________

         CITY__________________________________  STATE_____________________


                                 ZIP CODE____________________


         ( )  $20.00:  Registration Fee

         ( )  $25.00:  Registration Fee + Program Disk and Printed Manual

         ( )   $5.00:  Program Disk and Printed Manual for Previously
                       Registered Owner (One per customer, if not purchased
                       as part of registration.)


         Registration fee to be enclosed in form of check or money order.


         Mail to:

                                   Crofton Binary Concepts
                                   1722 Golden Court
                                   Crofton, Maryland 21114

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1233

     Volume in drive A has no label
     Directory of A:\

    CLASS01  DAT       519   4-02-88   8:14p
    CLASS02  DAT      1091   6-26-88   2:52p
    CLASS03  DAT       308   6-26-88  10:34a
    CLASS04  DAT      4779   6-26-88   3:11p
    CYA      BAT        22   1-23-88   1:58p
    CYB      BAT        22   1-23-88   2:01p
    CYC      BAT        22   1-23-88   2:00p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       694   3-02-89   9:30a
    GRDSCN   BAT        35   6-26-88  10:25a
    GRDSCN   EXE    118298  10-29-89  10:15p
    INSTALL  BAT        75   6-26-88  10:17a
    MANUAL   BAT       152  11-21-88   3:15p
    MANUAL   DOC     41450  11-04-89  12:16p
    NOTICE   DOC      2083   3-26-88  10:31a
    PRINTOPT PRF         5   6-12-88   8:22a
    README   DOC      2381  11-04-89  12:08p
    REGISTER DOC      1748  11-04-89   8:58a
           18 file(s)     173722 bytes
                          135168 bytes free
