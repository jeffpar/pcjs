---
layout: page
title: "PC-SIG Diskette Library (Disk #648)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0648/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0648"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WALMYR PROGRAMS 1 OF 2 (ALSO 649)"

    This disk has three demonstration programs. The WALMYR DISK PROTECTOR
    can prevent unauthorized peolple from gaining access to your computer.
    Upon boot-up, the program will ask for the password. After three
    incorrect attempts, the program sounds an alarm and prompts the user to
    turn off the computer. The program is not fool-proof, but is designed
    to keep out casual intruders. This demo of the program lists the
    password on the opening screen, but it is removed upon registration.
    WALMYR PEN PAL lets you conduct private communications with another
    person. It can administer questionnaires and interviews, as well as
    handle letters. The full version encrypts all correspondence, but in
    this demo any person can read all the text files. WALMYR BOOK
    MAKER lets you integrate separate ASCII text files into one formatted
    and consistently-paged document. In the full version of the program,
    the size of the printed document is unlimited. The demo version of this
    program is limited to 25 pages.
    
    The WALMYR TEACHING ASSISTANT is for teachers, designed to automate
    test taking and grading, and thus reduce the amount of time it takes to
    prepare a course. It can prepare random quizzes from a pool of
    questions, administer quizzes, and grade each quiz for each student.
    You only need write the quiz once, and after that the program takes
    over. You can specify the number of times the students may retake a
    quiz. The program can prepare final grade reports, let students check
    their grades, and print graphs of test scores. It can also display and
    print text files, such as lecture notes, course syllabuses, notices,
    etc. The teacher has a master disk from which the course format is
    designed, while each student's record is kept on his own individual
    disk. Grades are collected by having the students turn in their disk
    after a number of exams or quizzes are completed. The master disk takes
    all data and updates the teacher's records. All records are password-
    protected, so a student's records can only be examined by the
    teacher and that student.
    
    The WALMYR INDEX OF TEACHING ABILITY analyzes a group of students'
    evaluations of the teacher's performance, based upon a questionnaire
    that comes with the program. It produces both an actual and adjusted
    report. The adjusted report is produced after the program eliminates
    students who scored lower or higher than the class average, both on an
    item as well as on a total-score basis. The program provides a report
    that shows the mean, range, and standard deviation, a count of students
    who graded higher or lower than normal, a count of total students who
    rated the course, and an estimate of how consistent the data is.
    
    System Requirements: A modem is required for WALMYR PEN PAL and a
    printer is optional for WALMYR BOOK MAKER.
    
    How to Start: Type README (press enter).
    
    Suggested Registration: $25.00 for DISK PROTECTOR, $30.00 for PEN PAL,
    and $50.00 for BOOK MAKER.
    
    File Descriptions:
    The First Disk Contains:
    README   EXE  Program to view README.
    README        How to get started.
    WDP     <DIR> Directory containing all DISK PROTECTOR files.
    PENPAL  <DIR> Directory containing all PEN PAL files.
    BM      <DIR> Directory containing all BOOK MAKER files.
    
    The Second Disk Contains:
    README   EXE  Program to display README
    README        How to get started
    WTA     <DIR> Directory containing all files for Teaching Assistant
    ITA     <DIR> Directory containing all files for Index of Teaching Abili
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONTENTS.TXT

{% raw %}
```



                        TABLE OF CONTENTS



________________________________________________________________

CHAPTER                                                     PAGE
________________________________________________________________

Preface                                                       2

Introduction                                                  4

Formatting Your ASCII Text Files                              6

Handling Page Numbers                                         8

The File Manager                                              9

A Book Maker Example                                         10

Make A Demonstration Version                                 12
```
{% endraw %}

## DEMO_VER.TXT

{% raw %}
```




                             CHAPTER 6

                   MAKE A DEMONSTRATION VERSION


  If you would like a friend or colleague to have a demonstration 
version of the program, you can prepare one very easily.   First,
format a blank floppy diskette.  Then copy your entire Book Maker
diskette  onto  the blank floppy.  Put away your copy of the Book
Maker diskette and put the copy for your friend in Drive A.  Once
you do that, issue the commands,

     A: <cr>
     MAKEDEMO <cr>

and  you will instantly have a demonstration copy of the program. 
Please DO NOT issue the MAKEDEMO command when using your copy  of
the  program.   If  you do, you will turn it into a demonstration
copy of the program!

```
{% endraw %}

## EXAMPLE.TXT

{% raw %}
```




                           CHAPTER  5

                      A BOOK MAKER EXAMPLE 


  This chapter of the User's Manual provides a  complete  example
to  show  you how to produce a document.  The example consists of 
the program's own User's Manual.  The MANAGER file, as  explained
earlier,  contains  the  names  of all the files that you want to 
print and lists them in the order that they are  to  be  printed.
The  following  lines  contain the entire contents of the MANAGER
file that is used to print the User's Manual.


THE MANAGER FILE FOR THE USER'S MANUAL

     titlepg.txt
     contents.txt
     preface.txt
     intro.txt
     format.txt
     pages.txt
     manager.txt
     example.txt
     demo_ver.txt

  Each of the files shown above are the ordinary ASCII text files
that comprise the separate chapters of the User's Manual.  If you 
wish, you may use your own word processor  to  pull  them  up  on
screen and examine them.


PRINTING YOUR OWN USER'S MANUAL

  If  you would like to print a copy of the User's Manual, choose 
Option B from the main menu of the program.  When you  are  asked
to  indicate  the  DRIVE\PATH  where your MANAGER file is stored, 
indicate the default DRIVE\PATH that you are using.  Here  are  a
couple of examples. 

  If you are logged onto Drive A while  running  the  Book  Maker
program,  you  should  enter  the  following command when you are
asked to enter the DRIVE\PATH for the MANAGER file. 

     A: <cr>

  If you have created a hard disk directory for the  program  and
you have defined it as C:\BM, then you should enter the following
command  when  you  are  asked  to  enter  the DRIVE\PATH for the
MANAGER file. 

     \BM <cr>

  When  you  are  asked  for  the beginning page number, enter 0. 
Also, please use a left margin of 8 spaces.  That's all there  is
to it.  You may print your own User's Manual any time you wish.
```
{% endraw %}

## FILES648.TXT

{% raw %}
```
Disk No  648
Program Title: WALMYR PROGRAMS (Disk 1 of 2)
PC-SIG version 1.1

This disk has three demonstration programs. The WALMYR DISK PROTECTOR can
prevent unauthorized peolple from gaining access to your computer. Upon
boot-up, the program will ask for the password. After three incorrect
attempts, the program sounds an alarm and prompts the user to turn off the
computer. The program is not fool-proof, but is designed to keep out casual
intruders. This demo of the program lists the password on the opening
screen, but it is removed upon registration. WALMYR PEN PAL lets you
conduct private communications with another person. It can administer
questionnaires and interviews, as well as handle letters. The full version
encrypts all correspondence, but in this demo any person can read all the
text files. WALMYR BOOK MAKER lets you integrate separate ASCII text files
into one formatted and consistently-paged document. In the full version of
the program, the size of the printed document is unlimited. The demo
version of this program is limited to 25 pages.

Usage: Disk Protection, Correspondance, Text Utility.

System Requirements: A modem is required for WALMYR PEN PAL and a printer
is optional for WALMYR BOOK MAKER.

How to Start: Type README (press enter).

Suggested Registration: $25.00 for DISK PROTECTOR, $30.00 for PEN PAL, and
$50.00 for BOOK MAKER.

File Descriptions:

README   EXE  Program to view README.
README        How to get started.
WDP     <DIR> Directory containing all DISK PROTECTOR files.
PENPAL  <DIR> Directory containing all PEN PAL files.
BM      <DIR> Directory containing all BOOK MAKER files.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## FORMAT.TXT

{% raw %}
```




                             CHAPTER 2

                  FORMATTING YOUR ASCII TEXT FILES


  There  are  some  specific formatting rules that the Book Maker 
program follows.  They are rigid  but  quite  tolerable,  so  you
should  make sure that your text files conform to them.  The Book
Maker formatting rules are explained as follows.

  The  first  thing  you  should know is that Book Maker does not
format or modify any of your text.  It formats pages only.  Thus, 
the ASCII text image on your disk medium is the text  image  that
will be printed.  If your text is stored on disk as single-spaced
lines,  for  example,  then Book Maker will print a single-spaced
document.


PAGINATION

  When  you  print  an  ASCII  text  file using this program, you 
should know that every file begins on a new page.  The file  that
you wish to print can be any length but it will always begin on a
new page.


LINE LENGTH  

  The  Book  Maker  program will print up to 90 characters on any 
line.  However, it also provides a left margin that you  specify.
Thus,  your  lines could run off the page if you do not attend to
this matter.   

  We suggest that you use a left margin of eight  characters  and
make  sure  your  text  files  contain lines that never exceed 69 
characters if your printer is configured to print  10  characters
per  inch  (Pica).   That  way,  you  will have a nicely centered 
document that will have an eight character margin on  each  side.
Of  course, if you use lines of 70 characters you'll still have a
really neat document.  

  If your printer is configured to print 12 characters  per  inch
(Elite),  we  suggest that you use a left margin of 10 characters 
and that your text files  contain  lines  that  never  exceed  82
characters.   One  or two characters, more or less, won't matter,
but these figures are the ones used by the Book Maker. 

  The thing to remember is that Book Maker  ALWAYS  uses  a  left
margin  that your specify and it ALWAYS prints the characters per 
inch that is  dictated  by  the  way  you  have  configured  your
printer.


NUMBER OF LINES PER PAGE 

  The  Book  Maker  has two options for determining the number of 
text lines that will be printed per page.  If you  indicate  that
your printer is configured to print 6 lines per inch (Pica), then
Book Maker will print no more than 50 lines of text per page.  If
you indicate that your printer is configured to print 8 lines per
inch  (Elite),  then  Book Maker will print no more than 67 lines 
per page.  The program will ask you to indicate whether  you  are
using Pica or Elite when you begin to print a document.

```
{% endraw %}

## INTRO.TXT

{% raw %}
```




                            CHAPTER 1

                      THE WALMYR BOOK MAKER


  The  WALMYR  Book  Maker  is  a  powerful  utility program that 
enables you to print small, large,  very  large,  or  truly  huge
manuals,  monographs,  or  books  by  collecting and printing any
number of ASCII text files as a single integrated volume.  If you 
have ever had a number of different ASCII  text  files  that  you
wanted  to  gather  together  and then merge into a single nicely 
formatted and consistently paginated document,  then  the  WALMYR
Book Maker may be the solution to your problems. 

  Book Maker is truly powerful.  The size of volume that you  may
produce  is  limited  only  by  the  physical  capacity  of  your
equipment and you can even overcome that limitation!  Thus, there 
is no theoretical limit to the size of a single printed  book  or
volume that you can produce with the program.

  If  you  have  a hard disk system, you can easily store a large 
number of ASCII text files on your hard disk and then  print  all
of  them  as  a  single job.  If you prefer, you can simply store
truly huge jobs on separate floppy diskettes and print the entire
job in separate runs.  And, you can have as many diskettes as you
like!  There is no limit! 



                  USING THE BOOK MAKER PROGRAM

  In  order  to use the Book Maker program, you need only put the 
program diskette in Drive A, log onto that drive and  then  issue
the  command,  BM <cr>.  When you do that, the program configures 
itself automatically to your computer  system.   If  you  have  a
color/graphics  board  in  your  computer,  it  will  ask  you to
indicate whether you are using a color monitor. 

  After your computer whirrs  and  chugs  a  little,  the  Master
Screen  for  the program will appear and you will see the program 
menu.  At that point you may choose Option  A  to  examine  these
instructions, or you may choose Option B to print a document.

  If  you  choose  Option B, the program will ask you to indicate 
whether your printer is configured for Pica  or  Elite  printing,
and  it  will  then ask you to indicate the DRIVE\PATH where your 
files are stored.  Once you have provided that  information,  the
program will ask you to indicate whether you are using continuous
or single-feed paper.  It will then begin printing your document,
and that's all there is to actually running the program.

  However,  you  do  have  to  perform  some  setup chores before 
actually printing a  document.   The  remainder  of  this  User's
Manual explains each one of them and describes how you can manage
your text files to get the most out of the program.

  Actually,  the  manual is much larger that it needs to be (it's 
not very large either), but we extended it a little to use it  as
an  example.   The  program  prints its own manual and the User's
Manual is treated as an example for using the program.

```
{% endraw %}

## MANAGER.TXT

{% raw %}
```




                           CHAPTER 4

                        THE FILE MANAGER


  In  order  to  use  this  program, you must create a file named 
MANAGER which will contain the names of the files that  you  want
printed.   The  MANAGER file and all the files to be printed must
reside on the same DRIVE\PATH. 


HEADER INFORMATION

  When  you  prepare your MANAGER file you must reserve the first 
two lines for header information that you may wish to  use.   The
two  header  lines may contain 60 or fewer characters or they may 
be left blank.  If you do not want to use a header, be  sure  the
first two lines each contain at least one blank character.

  Your  two header lines will be printed at the top of every page
in a 'header space' of your document.


LISTING FILE NAMES

  Once you have created your header lines, you must then list all
the  files  that  you want printed. YOUR FILES WILL BE PRINTED IN 
THE ORDER LISTED.

  You can get pretty slick about this.  For  example,  you  could
prepare  a file named TITLEPG.TXT and show that as the first file 
in your MANAGER  file.   You  could  then  create  a  file  named
CONTENTS.TXT  and  place  it  as  the second file in your MANAGER 
file.  By doing that, your document will have a  title  page  and
table of contents designed to suit your needs or purposes.

```
{% endraw %}

## PAGES.TXT

{% raw %}
```




                            CHAPTER 3

                      HANDLING PAGE NUMBERS


  When  you  execute  the  program,  it will ask you to enter the 
beginning page number.  You may enter a 0 if you do not want  the
first page to have a page number.  All subsequent pages will then
be  numbered  from 1 to N.  If you enter any other beginning page
number, k, all pages will be numbered from k to N. 

  This feature makes it possible to run truly large  jobs  during
separate  computer  sessions.   You could, for example, print the
first part of a volume containing pages 0 to 537.  Then you could 
later print the remainder of  the  job  by  beginning  with  page
number 538.

```
{% endraw %}

## PREFACE.TXT

{% raw %}
```




                             PREFACE


  The WALMYR Book Maker is produced and copyrighted by the WALMYR
Publishing Co., PO Box 3554, Leon Station, Tallahassee, FL 32315.
You may copy and distribute the "Free Use Version" of the program
provided  that  you do not sell the program, charge a fee for use 
of the program or modify the program or its documentation in  any
manner. 

  The "Free Use Version" of the program functions in exactly  the
same  manner  as  the  unrestricted  commercial  version  of  the 
program.  The only restriction is that  the  "Free  Use  Version"
will  allow  you  to  print  no  more  than  25  pages  while the
commercial version will allow you to print ANY number of pages. 

  If you would like to purchase a copy of the commercial  version
of  the  program,  choose the option in the main menu to print an 
order form.   Then  send  your  check  or  money  order  and  the
completed  order form to the publisher. 

  PLEASE NOTE: The program will  be  licensed  only  for  use  by
individuals  unless  special site licensing arrangements are made
with the publisher.  Thus, we reserve the right to refuse sale of 
the program if the  order  form  is  improperly  completed.   The
purchaser  must show on the order form the name of the person who
will be licensed to use the program.


                      LIMITED WARRANTY AND
                  TERMS AND CONDITIONS OF SALE

1. All sales of the WALMYR Book Maker are final. 

2.  The sale of each copy of the program conveys  a  license  for
use  ONLY  by  the registered user.  However, the registered user
may install the program on any computer system.

3.  All  software  found to have a diskette medium defect will be
repaired or replaced by WALMYR Publishing Co. at NO CHARGE to the 
customer, if it is returned within 30 days of  the  date  it  was
shipped.  

4. WALMYR Publishing Co. reserves the right  to  discontinue  any
product and any medium format at any time without notice. 

5. WALMYR PUBLISHING CO. MAKES NO REPRESENTATIONS  OR  WARRANTIES
WITH  RESPECT  TO  THE PRODUCTS THAT IT PROVIDES AND SPECIFICALLY 
DISCLAIMS ANY IMPLIED WARRANTIES OF  MERCHANTABILITY  OR  FITNESS
FOR ANY PARTICULAR PURPOSE.  WALMYR PUBLISHING COMPANY SHALL HAVE
NO LIABILITY WITH RESPECT TO ITS OBLIGATIONS UNDER THIS AGREEMENT
FOR   COMPENSATORY,   SPECIAL,   INCIDENTAL,   CONSEQUENTIAL,  OR 
EXEMPLARY DAMAGES.  WALMYR PUBLISHING CO.'S SOLE LIABILITY  SHALL
BE  LIMITED  TO  THE  PURCHASE  PRICE  OF  THE  SOFTWARE LICENSED
HEREUNDER.
```
{% endraw %}

## TITLEPG.TXT

{% raw %}
```
















                    THE WALMYR BOOK MAKER


                             by


                   Walter W. Hudson, Ph.D.




















Copyright (c) 1987, WALMYR Publishing Co.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0648

     Volume in drive A has no label
     Directory of A:\

    FILES648 TXT      1786   8-03-88   1:54p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   6-30-88   9:02a
    README            2796  11-21-87   9:24a
    README   EXE     17568   7-31-87   5:04a
    BM       DEM     29408   7-31-87   2:34p
    BM       EXE     29408   7-31-87   2:34p
    BM       HLP     10256   3-14-87   7:21p
    BM       ORD      1299   8-01-87   9:46a
    BM       SYS       138  11-22-87  10:02a
    CONTENTS TXT       725   2-25-87   9:36a
    DEMO_VER TXT       738   2-25-87   7:23a
    EXAMPLE  TXT      1960   3-14-87   7:05p
    FORMAT   TXT      2715   3-14-87   6:32p
    INTRO    TXT      2999   2-25-87  10:26a
    MAKEDEMO BAT       833   7-31-87   2:43p
    MANAGER            153   2-25-87   8:02a
    MANAGER  TXT      1375   2-27-87   2:13a
    PAGES    TXT       707   2-25-87   7:10a
    PREFACE  TXT      2587   2-24-87   5:24a
    README~1          9306   7-31-87   3:15p
    README~1 EXE     20992   1-11-87   3:36p
    TITLEPG  TXT       244   2-25-87   9:30a
    ANSWERPP MAN      2771  10-02-87   3:47a
    CONTENTS MAN      2872  10-02-87   3:44a
    ENCRYPT  MAN      1946   7-03-87   5:28p
    FREEBIE  BAT       347   7-22-87   7:14p
    HARDPP   BAT       878   9-29-87   5:25p
    INTRO    MAN      9967   9-30-87   5:40a
    LETTER1  PPL       651   7-01-87   5:39p
    LETTER2  PPL       848   7-01-87   5:49p
    LETTER3  PPL       303   7-01-87   5:53p
    MAKEMENU MAN      6633   9-30-87   4:58a
    MAKEPPL  MAN      9064  10-02-87   3:50a
    PENPAL   BAT        40   7-01-87  11:20a
    PENPAL   EXE     55200  10-01-87   5:45a
    PENPAL   NEW       144  11-22-87   9:56a
    PENPAL   ORD      1640   7-04-87   5:32a
    PENPAL   SYS       144  11-22-87   9:56a
    PPMENU              87   7-01-87   3:28p
    PPMENU   FUV        87   7-01-87   3:28p
    PREFACE  MAN      2959   7-04-87   5:27a
    README   BAT       478   7-21-87   6:06a
    READPP   MAN      1666   9-30-87   5:33a
    TRYME    BAT       378   9-29-87   5:02p
    INSTALL  BAT       748   7-19-87   4:51a
    NEWWDP   BAT       236   7-12-87   6:56a
    README~2         10404   7-16-87   5:18a
    README~2 EXE     17568   7-31-87   5:04a
    SETBATCH EXE     11968   7-19-87   4:44a
    WDP      EXE     23472   9-16-87   2:45p
    WDP      NEW       142  11-22-87   9:54a
    WDP      ORD       984   7-12-87   6:41a
    WDP      SYS       142  11-22-87   9:54a
           54 file(s)     303492 bytes
                           31744 bytes free
