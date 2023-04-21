---
layout: page
title: "PC-SIG Diskette Library (Disk #951)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0951/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0951"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CLASSBOOK DELUXE - A TEACHERS AID"

    CLASSBOOK DELUXE is a multi-function, menu-driven package that helps
    teachers keep track of attendance, homework, and test scores just as in
    a regular classbook.  It accepts raw scores, percentages, or letter
    grades.
    
    You can calculate grades, as well as create and print progress reports,
    class lists, and seating charts.  Get the complete status on any student
    at the touch of a few keys!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES951.TXT

{% raw %}
```
Disk No:  951
Program Title:  CLASSBOOK DELUXE version 3.1
PC-SIG version: 1.2

CLASSBOOK DELUXE is a multi-function, menu-driven package designed to
help teachers keep track of attendance, homework, and test scores just
as in a regular classbook.

CLASSBOOK DELUXE can also calculate grades, generate and print progress
reports, class lists, and seating charts, and gives you the complete
status on any student at the touch of a few keys.

Usage:  Teachers Aid

Special Requirements:  Two floppy disk drives, a hard disk is
recommended.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

C        BAT  Startup batch file.
CB       EXE  Main classbook deluxe program.
CONVERT  EXE  Program to convert ver 2.0 files to ver 3.0 files.
GO       BAT  Batch file to start program.
INSTALL  BAT  Hard disk installation batch file.
MANUAL   BAT  Batch file to print documentation.
MANUAL   DOC  Manual.
READ     ME   Special instructions to ver 2.0 users.
REASONS       Data file for CB.EXE.
SETUP    EXE  Initial program to set parameters.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```





























                             CLASSBOOK DELUXE

                             VER 3.10 (c) 1988
                             J & K PROGRAMMING











                             For use in IBM PC's





















CHAPTER 1     INTRODUCTION


CLASSBOOK DELUXE is a multi-function, menu driven package that will allow you to
keep attendance, homework and test scores as one would in a regular classbook.
It will also calculate grades, generate and print progress reports, print class
lists, print seating charts and give you a complete status on any student at the
touch of a few keys.





1.1   SYNTAX NOTATION


         When commands are discussed in this booklet, the following notation
         will be followed.

{ }          Braces will indicate data entered by the user. For example,
             {student name} will mean that you are to type in the name for a
             particular   student.

<NUM LOCK>   Items in capital letters enclosed by angle brackets will describe
             keys to be pressed.

'ALL'        Words or letters enclosed in single quotation marks are words or
             letters that are to be typed in exactly as shown.


             NOTE - All user responses must be made in capital letters. If the
user is asked to enter 'NONE', it must be done in caps. A response of none will
not be treated the same as NONE.  Since this is the case, it is recommended that
the user set the <CAPS LOCK> key to print capital letters at all times.



1.2   SYSTEM REQUIREMENTS

IBM-PC or compatible with 256K and two disk drives or hard disk and printer.



















                                     - 1 -






CHAPTER 2     INSTALLATION AND SETUP


2.1   HARD DISK INSTALLATION


If you have a hard disk, put your CLASSBOOK DELUXE diskette in drive A and with
drive A the default drive, type INSTALL.  This will copy a file called CB.BAT to
your main directory and create a sub-directory called CLASBOOK, then copy the
remaining files from the diskette to this sub-directory on your hard disk.
After this is finished, take the diskette out of drive A and store it in a safe
place as you will no longer need it to run the programs.



2.2   SETUP


Realizing that there are individual differences and preferences in grading
systems, your CLASSBOOK DELUXE has been designed to accommodate these
differences.  In order to accomplish this, you must first configure the package
to your individual requirements.  This has to be done the first time you run the
package and need not be run again.

To configure your system, put the diskette in drive A and turn on the machine.
After a few seconds, the prompt (>A) should appear in the upper left hand corner
of the screen.  (If you have a hard disk, at the prompt (>C) type CD\CLASBOOK.)
Now type

        SETUP  and press  <ENTER>

After a few more seconds, our logo should appear with the instruction to

        PRESS <ENTER> TO CONTINUE

This means you are to press the key marked ENTER

After you press the ENTER key, you will be asked to answer a few questions about
your grading system.  When you have finished all the questions, your CLASSROOM
DELUXE will be configured and the prompt (>A) should appear again in the upper
left hand corner of your screen.


CAUTION - Once you have set your parameters and have started entering grades for
individual students, DO NOT CHANGE YOUR CONFIGURATION.  This will result in
errors when grades are calculated at the end of marking periods.



Now that you have configured your system, you are ready to use the classbook
portion of your package.









                                     - 2 -





CHAPTER 3    CLASSBOOK DELUXE


If you have just completed SETUP, the prompt (>A) should appear in the upper
left hand corner of the screen. If the machine is not turned on, place the
CLASSBOOK DELUXE diskette in drive A and a blank, formatted diskette in drive B.
Turn on the machine. After a few seconds, the prompt (>A) should appear. Now
type CB  and press  <ENTER>

In a few seconds, our logo appear. Now press

       <ENTER>

and the following menu will appear on your screen.


                         1 = CLASSBOOK

                         2 = ALPHABETICAL LISTING

                         3 = PRINT PROGRESS REPORTS

                         4 = HOMEWORK DUMP

                         5 = ATTENDANCE DUMP

                         6 = TEST DUMP

                         7 = CLASSROOM SORT

                         8 = PURGE FILES

                         9 = EXIT


Now enter your choice (1 - 9) and press <ENTER>.  Note that choosing 2 - 7 will
generate an error message if you have not as yet entered student data. These
options read files that are created by option 1 (CLASSBOOK). After you have
entered your student data these options will be operational and will be
explained later.




















                                     - 3 -





3.1  CLASSBOOK

Choosing option 1 in the first menu will generate another menu.

                         1 = INDIVIDUAL STUDENT INQUIRY

                         2 = ADD STUDENTS

                         3 = DELETE STUDENTS

                         4 = CHANGE STUDENT'S DATA

                         5 = ENTER ATTENDANCE, HOMEWORK, OR TESTS

                         6 = PRINT SEATING CHARTS

                         7 = PRINT CLASS LISTINGS

                         9 = EXIT


If you are just starting, the correct choice would be 2, then press

       <ENTER>

After you have picked which period you are going to add students to, the program
will allow you to enter data on a particular student.  ENTER ALL DATA EXACTLY AS
DIRECTED.  This will insure that later options will work properly.

The first piece of information asked for is student number.  It is very
important that every student have a number that is unique to that student. DO
NOT ENTER A STUDENT WITHOUT A STUDENT NUMBER.  The last two questions, NAME OF
CLASS and SECTION NUMBER, will need to be answered only once for each period.
After the first student has been added to a class, the program stores this
information and duplicates it for subsequent additions to that class.

The format for the seating chart is as follows:

-------------------------------------
| 1,7 | 2,7 | 3,7 | 4,7 | 5,7 | 6,7 |
-------------------------------------
| 1,6 | 2,6 | 3,6 | 4,6 | 5,6 | 6,6 |
-------------------------------------
| 1,5 | 2,5 | 3,5 | 4,5 | 5,5 | 6,5 |    The first number is the row number
-------------------------------------    The second number is the seat number
| 1,4 | 2,4 | 3,4 | 4,4 | 5,4 | 6,4 |
-------------------------------------
| 1,3 | 2,3 | 3,3 | 4,3 | 5,3 | 6,3 |
-------------------------------------
| 1,2 | 2,2 | 3,2 | 4,2 | 5,2 | 6,2 |
-------------------------------------
| 1,1 | 2,1 | 3,1 | 4,1 | 5,1 | 6,1 |
-------------------------------------

Option 1 - INDIVIDUAL STUDENT INQUIRY.  Selecting this option will give you a
picture of what is in a student's file.  All pertinent information on a student
is displayed on the screen.

Option 3 - DELETE STUDENTS.  Selecting this option allows you to delete any
           student that has dropped your class.


                                     - 4 -



Option 4 - CHANGE STUDENT'S DATA.  Use this option to correct errors or make
           changes in a student's file.  This option is also used to set
           progress report indicators and to select teacher comments that
           will appear on those reports.

Option 5 - ENTER ATTENDANCE, HOMEWORK, AND TESTS.  With this option, test
           scores, attendance, and homework are entered in each student's file.
           The homework section may be used for daily classroom assignments
           instead of homework.  Option 5 is also used to calculate grades upon
           request.

           NOTE - ATTENDANCE AND HOMEWORK FILES HAVE ROOM FOR 100 ENTRIES.
                  TO TAKE FULL ADVANTAGE OF THE FEATURES OF THIS PACKAGE
                  IT IS RECOMMENDED THAT SECOND MARKING PERIOD ENTRIES USE
                  NUMBERS GREATER THAN 50.

Option 6 - PRINT SEATING CHARTS.  At this time, a 6x6 seating chart is used.

Option 7 - PRINT CLASS LISTINGS.  Use this option to print a complete class
           listing for each period.  The listing includes student number,
           student name, homeroom, counselor, marking period grades, attendance,
           semester grade, progress reports sent and the reasons for those
           progress reports

3.2   ALPHABETICAL LISTING

This program will concatenate all of classes into one file, sort that file
alphabetically, and print a listing of that file.  This list will be very useful
when comparing other list from outside your classroom such as eligibility lists,
schoolwide attendance lists, excused from class lists, etc.

3.3   PRINT PROGRESS REPORTS

Every time test scores are entered for a class, you will be asked if you want
grades calculated or progress reports generated.  If you answer yes to the
latter, an indicator is set in that students file that a progress report is to
be sent.  (NOTE-If you never answer yes to the question: DO YOU WANT PROGRESS
REPORTS GENERATED, or if you do not change the N to a Y in the students file
for progress reports, no progress reports will be printed.)  This program reads
that file and prints progress reports for those students for whom it is
indicated.  There is room on the report for four teacher comments.  These
comments are in a file called REASONS which contains:

        A,TOO MANY ABSENCES
        B,POOR OR FAILING TEST SCORES
        C,MISSING ASSIGNMENTS
        D,DISRUPTS CLASS BY POOR BEHAVIOR
        E,DOES NOT BRING BOOKS, PAPER, OR PENCIL
        F,DOES NOT FOLLOW DIRECTIONS
        G,FAILURE TO DO MAKE-UP WORK
        H,DOES NOT LISTEN TO INSTRUCTIONS
        I,DOES NOT WORK IN CLASS
        Y,FAILED FINAL EXAM
        Z,ABSENT FOR THE FINAL EXAM

Additions and changes to this file can be made by following the directions
in your DOS manual for creating a BAT file or by using EDLIN.  However,
comments A, B, and C are automatically generated and should not be changed.


                                     - 5 -





3.4   HOMEWORK DUMP and ATTENDANCE DUMP and TEST DUMP

These three programs print a listing of everything that is in the homework,test
or attendance file for a particular class.  This can be useful if you wish to
verify the information that is in those files.



3.5   CLASSROOM SORT


Through drops and adds, your classroom listing may get out of alphabetical
order.  This program allows you to alphabetize a particular class file.

IMPORTANT - Have SORT.EXE from DOS on your program disk or CLASBOOK sub-
            directory or in your path command.



3.6   PURGE FILES


This will purge files from your data disk when the semester is over and will
allow for the creation of new class files.











------------------------------------------------------------------------------

                           REGISTRATION FORM  ver 3.1

             NAME:_______________________________________________
           STREET:_______________________________________________
             CITY:________________________ STATE:____ ZIP:_______


                   Please send $25.00 in check or money order to:

                                 J&K PROGRAMMING
                                 1022 KENSINGTON
                                 FLINT, MI 48503











                                     - 6 -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0951

     Volume in drive A has no label
     Directory of A:\

    C        BAT        43   6-03-86   9:13p
    CB       EXE    127330   2-08-89  10:24p
    CONVERT  EXE     52086   9-09-88  12:12a
    FILES951 TXT      1221   2-27-89   1:34p
    GO       BAT        67   2-15-89  10:21p
    INSTALL  BAT        92   3-21-87  11:41a
    MANUAL   BAT        23   2-14-89   9:47p
    MANUAL   DOC     12160   2-16-89   4:35p
    READ     ME        768   9-04-88   2:33p
    REASONS            294   9-06-88   9:35p
    SETUP    EXE     44892   9-01-88   8:09p
           11 file(s)     238976 bytes
                           76800 bytes free
