---
layout: page
title: "PC-SIG Diskette Library (Disk #1381)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1381/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1381"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FACT PACK"

    FACT PACK is a pair of programs, TABLE and FACTRACE, designed to
    sharpen basic arithmetic skills (addition, subtraction, multiplication
    and division) for students in grades 1-8.
    
    TABLE displays a multiplication or addition table minus the answers.
    The computer chooses problems at random which the student then
    calculates. The size of the table can be expanded to larger sums and
    products.
    
    FACTRACE gives a timed quiz on a mix of addition, multiplication,
    subtraction and division problems. A report is generated of the
    problems answered correctly, the problems attempted, the percentage of
    correct answers and any errors made.
    
    Both programs run in practice and test modes. In practice mode, the
    student can work on a problem at a leisurely pace. In test mode, both
    programs provide exciting challenges for the students as they race the
    computer in finding the answers.
    
    FACT PACK supplies both fun and motivation for younger learners, and is
    an excellent tool for providing basic math skill drills.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1381.TXT

{% raw %}
```
Disk No: 1381
Program Title: FACT PACK
PC-SIG version 1

FACT PACK is a pair of programs, TABLE and FACTRACE, that are designed
to sharpen basic arithmetic skills (addition, subtraction,
multiplication and division) for students in grades 1 - 8.

TABLE displays a multiplication or addition table minus the answers.
The computer chooses a problems at random and the student must calculate
the sum or product for that location.  The size of the table can be
expanded to larger sums and products.

FACTRACE gives a timed quiz on a combination of addition,
multiplication, subtraction and division problems.  It then presents a
report of the problems answered correctly, the ones attempted, the
percent correct and any errors made.

Both programs run in practice and test modes.  In practice mode, the
student can work on a problem at a leisurely pace.  In test mode, both
programs provide exciting challenges for the students as they race with
the computer in finding the answers.

FACT PACK supplies both fun and motivation for younger learners, and is
an excellent tool for providing basic math skill drills for first
through eighth graders.

Synopsis:  A pair of fun programs that help sharpen basic arithmetic
skills for students in grades 1 - 8. Drills can be timed and reports of
the results printed.

Usage:  Education/Math.

Special Requirements:  CGA card.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

SCORES   FRC  Contains the computed scores.
TABLE    COM  Program for add/mult tables.
READMEFP DOC  Documentation for FACT PACK.
FACTRACE COM  Quiz program for math problems.

PC-SIG
1030 E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## READMEFP.DOC

{% raw %}
```
                            FACTPACK
                       (C) 1988 D. Bodnar

	FACTPACK consists of 2 programs that are designed for home or
school use.  The programs provide drill and practice with basic
addition, subtraction, multiplication and division facts and are
appropriate for use in grades 1 - 8.  The programs require a 256
K IBM Compatible Computer.  A printer is optional.     

	The first program, TABLE, uses high resolution graphics to
display a blank addition or multiplication table.  The computer
randomly chooses a location on the table.  The student must compute
the sum or product and enter it on the keyboard.  The size of the
table may be reduced from its normal 10 X 10 format for younger
children who are working on simpler facts.  After the drill is
completed a scorecard reports the number correct, the time used and
any errors that were made. 

	TABLE also can be put into a RACE mode where it becomes  very
challenging because the student is in a race against the computer
to see who can fill in the table first!  The amount of time can be
adjusted to allow for students of different ability levels.

	The second program is called FACTRACE.  It is for children who
have a good grasp of most facts and who need to increase their
recall speed.  The program gives a timed quiz on any combination
of addition, subtraction, multiplication or division facts.  At the
end of the quiz a report is presented that displays the number
correct, the number attempted, the percent correct, the total time
used and any errors that were made.  

LOADING INSTRUCTIONS

	Boot the computer.  Once the A> prompt appears remove the DOS
disk and place the TABLE disk in the disk drive.  Type TABLE and
press enter.

Using TABLE

	When the program begins several questions must be answered. 
First, choose between ADDITION and MULTIPLICATION by pressing A or
M.   Next decide on the maximum size of the table that the computer
will generate.  You can choose any number between 3 and 30.  If you
choose a number less than 10 only the numbers between 0 and that
number will be used on the table.  If you choose a number that is
larger than 9 the computer will randomly choose 10 numbers between
0 and the number you entered for the table.  

	The next question asks if you want to Practice or have a Race
with the computer.  Practice allows a leisurely opportunity to fill
in the table.  Race will challenge you to provide each fact before
the timer expires.  If you don't enter a response in time the
computer will provide a randomly selected fact and score a point.

	Finally you must select the amount of time that you will have
to give each fact when using the Race option.  1 second is very
challenging, 9 seconds is good for beginners.

	Press ENTER to begin TABLE or SPACEBAR to make changes or
corrections to your choices.

	At this point the computer will begin to randomly select
squares on the table.  It will put a flashing cursor on the screen
where you must provide a fact.  Type the answer and press ENTER. 
If you wish to correct an entry before pressing ENTER use the
backspace key to erase the error and type the correct number.  If
your response is correct a box will be drawn around it.  An
incorrect response will be erased.  

	The program will continue until you have filled all of the
squares in the table.  If you wish to stop before all squares are
filled you may press ESC.  This will allow you to stop at any time
and go directly to the scorecard.  
	The scorecard displays a fraction showing the number of
correct answers over the number attempted, the percent correct and
total time spent on the table.  If errors were made they will be
displayed.  If you have a printer connected and wish to print the
scorecard answer Y to the question "Print report on printer (Y/N)." 
Finally you will be asked if you wish to do the program AGAIN(Y/N). 
A response of Y will run the program again from the start.  N will
clear the screen and end the program.


                            FACTRACE

LOADING INSTRUCTIONS:     

Boot the computer.  Once the A> prompt appears remove the DOS disk,
insert the FACTRACE disk and type FACTRACE.

USING FACTRACE:

	Like TABLE, FACTRACE also has two operating modes: Practice
and Test.  When you select Practice the computer allows the user
to control the type and size of problems to be answered and the
time allowed.  In the Test mode these selections are made by the
teacher and cannot be changed by the student.

	When Practice is selected you must decide which of the four
basic operations to include in the quiz, Addition, Subtraction,
Multiplication and/or Division.  Press the first letter of an
operation to add it to the list or, if it is already there, to
remove it.  Press ENTER when the selection process is completed.

	Next you will be asked for the number of seconds that the quiz
will last.  This can be from 5 to hundreds of seconds.  It is best
to choose a time, 60 seconds is appropriate, and stick to it so
that you can more easily gauge progress.  

	If you have chosen only one operation for practice you have
another option that you can use when asked for the number of
seconds that the quiz will last.  You may respond with the word
ALL.  This will have the computer give you all 100, or 90 in the
case of division, facts in the operation that you chose.  There
will be no time limit.  For example, if you chose only
multiplication and typed ALL for the time, the computer would give
you all of the multiplication facts from 0 X 0 to 9 X 9.  They
would, of course, be given in a random sequence.     
	The last two questions allow you to select the size of the
first and second numbers to be used in the quiz.  In addition and
multiplication this refers to the addends or factors.  In
subtraction it is the subtrahend and answer and in division the
divisor and answer.  

	After all of the above information is given <ENTER> TO BEGIN
will be displayed at the bottom of the screen.  When you are ready,
press ENTER and a problem will appear on the screen.  

The Author's Use of FACTRACE     

	At the beginning of the year I introduced the program to my
sixth grade math students and told them that they were to use the
program to practice addition, subtraction, multiplication and
division facts for a 60 second time period.  By the end of the
report period they were expected to answer at least 30 problems at
95% accuracy.  I had prepared 8 disks for them so that several
children could use the program in the computer lab at the same
time.  

	I found that the students enjoyed the program and competed
with each other to see who could get the highest score.  (To date
this is a 47.)  Most of them used the program 2 or 3 times each
week.  Each time a student gets a high score it is recorded on a
sheet in my gradebook.  

	In order to take the pressure off of the students that were
having trouble meeting my expectations (30 problems done in 60
seconds at 95% accuracy) I told the class that I would consider
making a 'deal' with those who felt they might not make 30.  These
'deals' were based on their performance up to that point and
required them to improve their best score by 2 or 3 by the end of
the report period.        

	Once a routine was established it has become very easy to
manage the program and the students enjoy it very much. 

SHAREWARE 
	This program is distributed as shareware.  If you are using 
	the program please send $10 to: 
 
             David Bodnar 
             26 Ralston Place 
             Pittsburgh, PA  15216 
 
 
 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1381

     Volume in drive A has no label
     Directory of A:\

    FACTRACE COM     36736  10-17-88   7:29a
    FILE1381 TXT      1782   5-04-89   9:01a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       848   5-04-89   9:04a
    MANUAL   BAT       147   5-04-89   9:08a
    PAGE     COM       325   1-06-87   4:21p
    READMEFP DOC      7722  10-08-88   2:28p
    SCORES   FRC       128  10-17-88   7:30a
    TABLE    COM     30592  10-17-88   7:29a
    VIEW     BAT        44   5-04-89   9:05a
           10 file(s)      78362 bytes
                           78848 bytes free
