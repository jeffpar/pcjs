---
layout: page
title: "PC-SIG Diskette Library (Disk #1632)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1632/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1632"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRADING ASSISTANT"

    Here's some quality help for harried teachers.  GRADING ASSISTANT churns
    out student grades throughout the grading period with a minimum of
    effort and study.  The well crafted menus let computer-wise teachers
    skip most of the manual and plunge into program installation.  To aid in
    tracking, GRADING ASSISTANT produces a bonanza of student and class
    average reports.
    
    Teachers can use up to 12 grade categories such as work, homework,
    projects, tests and quizzes for each class.  Different weights can be
    assigned to each category, but categories and weights can be changed at
    any time.
    
    Compute both numeric and letter grade averages.  You define your own
    match of numeric grades to letter grades with pluses and minuses.  You
    can automatically drop the lowest score for each student in a class for
    a particular grade category.
    
    A thunderstorm of reports awaits the number conscious teacher.  You get
    current grade average reports for each student in each class. You can
    get student averages for up to 12 different categories of grades per
    class.  You also get the class grade distribution counts by letter
    grade.
    
    An interim grade report lets you produce a listing for each student
    whose average is below a cut-off numeric grade.  This helps the teacher
    notify both parent and child that things need changing.  The class
    roster is handy for taking attendance or manually recording select
    grades.  You get year-to-date grade average reports by student and by
    class and the overall average for each of the past grading periods of
    the school year.  Then you get an overall school year average for each
    student in each class.  You can compute a yearly class grade average at
    the end of the school year.
    
    A special subprogram lets a teacher display current grade averages or
    grade averages from previous grading periods as a simple bar graph.
    And, another included program file lets teachers maintain a file of each
    student's address and telephone number.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1632.TXT

{% raw %}
```
Disk No: 1632                                                           
Disk Title: Grading Assistant                                           
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Grading Assistant                                        
Author Version: 3.2                                                     
Author Registration: $20.00                                             
Special Requirements: 330K RAM.                                         
                                                                        
Here's some quality help for harried teachers.  GRADING ASSISTANT churns
out student grades throughout the grading period with a minimum of      
effort and study.  The well crafted menus let computer-wise teachers    
skip most of the manual and plunge into program installation.  To aid in
tracking, GRADING ASSISTANT produces a bonanza of student and class     
average reports.                                                        
                                                                        
Teachers can use up to 12 grade categories such as work, homework,      
projects, tests and quizzes for each class.  Different weights can be   
assigned to each category, but categories and weights can be changed at 
any time.                                                               
                                                                        
Compute both numeric and letter grade averages.  You define your own    
match of numeric grades to letter grades with pluses and minuses.  You  
can automatically drop the lowest score for each student in a class for 
a particular grade category.                                            
                                                                        
A thunderstorm of reports awaits the number conscious teacher.  You get 
current grade average reports for each student in each class. You can   
get student averages for up to 12 different categories of grades per    
class.  You also get the class grade distribution counts by letter      
grade.                                                                  
                                                                        
An interim grade report lets you produce a listing for each student     
whose average is below a cut-off numeric grade.  This helps the teacher 
notify both parent and child that things need changing.  The class      
roster is handy for taking attendance or manually recording select      
grades.  You get year-to-date grade average reports by student and by   
class and the overall average for each of the past grading periods of   
the school year.  Then you get an overall school year average for each  
student in each class.  You can compute a yearly class grade average at 
the end of the school year.                                             
                                                                        
A special subprogram lets a teacher display current grade averages or   
grade averages from previous grading periods as a simple bar graph.     
And, another included program file lets teachers maintain a file of each
student's address and telephone number.                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TGA.DOC

{% raw %}
```











                             THE GRADING ASSISTANT                             _____________________




                            a grade averaging system
                                  for teachers




                                  Version 3.2

                                 March 31, 1990


                        (SHAREWARE Distribution Version)


















                                COPYRIGHT NOTICE                                ________________

  This program and manual are copyright (C) 1987-1990 by the author, Jim Reid.
                       All rights are reserved worldwide.














                                        1                                        1






System Features...........................................................5
System Requirements.......................................................7
Software Installation.....................................................8
Changing the Display Colors...............................................9
Changing the Printer Setup...............................................10
Using Your Mouse.........................................................12
Telling TGA The Disk/Directory to Use for Data...........................13
Distribution Information.................................................14
Did You Get Everything?..................................................15
Program Limits...........................................................17
Getting Started..........................................................17
The Grading Assistant -- MAIN MENU.......................................18
Your First Lesson........................................................19
Lesson 1 - Setting up a Grading File.....................................20
Lesson 2 - Defining The Grading Information..............................21
Lesson 3 - Entering Grades...............................................22
Normal Processing........................................................23
Entering and Editing Grades..............................................25
The Grading Assistant -- GRADING MENU....................................25
Entering Class Description Information...................................27
Entering Student Names...................................................27
Entering Grading Information.............................................28
Entering Grades..........................................................28
Special Feature - Additions to Final Grade Average.......................29
Special Feature - Extra Points for Specific Grade Types..................30
Entering Scoring Information.............................................31
The Grading Assistant -- SCORING MENU....................................31
Summary of Special Data Entry Keys.......................................33
Displaying and Printing Reports..........................................33
The Grading Assistant -- MAIN REPORTS MENU...............................34
Current Period Grade Average Reports.....................................34
Current Period Reports Menu..............................................34
Entering Heading/Footing/Comments on the Interim Report..................35
Including/Excluding Students on the Interim Report.......................37
Saving Student Names for Labels..........................................37
End-Of-Year Grading Reports..............................................37
Starting a New Grading Period............................................38
The Grading Assistant -- END-OF-GRADING-PERIOD MENU......................39
DOS Utilities............................................................40
The Grading Assistant -- UTILITY MENU....................................41
Detailed Example.........................................................42
Graphing Your Grade Averages.............................................45
The Grading Assistant -- GRAPHICS MENU...................................46
Printing a Copy of your Graph............................................47
Student Information Records..............................................47
The Grading Assistant -- STUDENT INFORMATION MAIN MENU...................48
Loading/Editing Student Information......................................49
Loading Student Names from a Grading File................................49
Editing Student Information..............................................50
Printing Student Information.............................................50
Printing Gummed Labels...................................................50






                                        2                                        2






                                 Use Agreement                                 _____________

   This diskette (or Bulletin Board file) contains The Grading Assistant (TGA),
a program for your IBM compatible personal computer. By using this program you
are agreeing to the terms defined in this section. Please read the following
paragraphs carefully:

1.   The Grading Assistant program and documentation are the property of the
     author. Both are copyright (C) 1987-1990 by Jim Reid, and all rights are
     reserved worldwide. Even though the program is distributed through the
     SHAREWARE method, and it can be freely copied within the limits of this
     agreement, there are still some limitations to protect the integrity of the
     distribution of the program and to support its future enhancements.

2.   This program may not be copied or shared for use outside the United States.
     Within the United States, you may make copies of this diskette, give copies
     to your friends, and even upload TGA to an electronic bulletin board
     service, provided that you in no way alter the contents of the programs or              ________
     documentation, and that all TGA programs and files are included.

3.   The author will not be liable for any damages under any circumstances                __________________
     resulting from your use of, or inability to use, this program. The program
     is provided "as is", without either expressed or implied warranty.

4.   You may not: distribute this program in connection with any other product         _______
     or service; charge anything for copies of, or the use of, this program
     other than a cost reimbursement fee (not to exceed $5) for distributing it;
     modify the program or documentation in any way; or distribute the
     documentation in a printed form.

5.   On whatever computer this program is used productively, a registered copy
     must be obtained from the program's author. Continuing to use The Grading
     Assistant after you have evaluated the program constitutes a violation of
     this agreement.

   The program's author requests that you support his development of this
program, and its future enhancements, by sending the $20 registration fee along
with your name and address on the Shareware Registration Form on the following
page. This $20 will register your copy, and thus entitle you to information
about future releases as well as help should you run into any problems using the
program. Only by supporting SHAREWARE program authors can you encourage them to
provide low-cost, high quality software.















                                        3                                        3






                          Shareware Registration Form                          ___________________________



Please complete and return this registration card if you continue to use The
Grading Assistant (version 3.2) after your 30-day evaluation of it.





________________________________________________________________________________
Last Name                          First                    Initial


________________________________________________________________________________
Street Address or Post Office Box


________________________________________________________________________________
City                               State                    Zip Code


________________________________________________________________________________
Telephone Number (please include area code)


________________________________________________________________________________
Date of Registration                         Your brand/model of PC and printer



________________________________________________________________________________
How did you first learn about TGA?



Please enclose your check for $20, made out to:   JIM REID

and mail it to:     The Grading Assistant
                    505 East Charlotte Street
                    Sterling, VA   22170

You will receive written confirmation of your software registration, the latest
version of the program, and instructions on how to get help from the program's
author if you run into difficulties.

Site license agreements are available to educational institutions.


           THANK YOU FOR SUPPORTING THE SHAREWARE DISTRIBUTION SYSTEM






                                        4                                        4






                                System Features                                _______________

   The Grading Assistant was designed to help teachers record student grades
throughout a grading period and produce student and class average reports
whenever they are required. The Grading Assistant has the following features:

1.   GRADE CATEGORIES: You can define different categories of grades which you     ________________
     will score for each class. For example, a typical class might have grades
     for daily work, homework, projects, tests, and quizzes.

     You can define the grading average percentages (weights) you want each
     grade category to have for each class. For example, in your Social Studies
     class you might want daily work to be 25% of the final grade, homework 25%,
     projects 20%, tests 15%, and quizzes 15%.

     You can change the grade categories and percentages at any time. These can
     be the same for every class, or different for each one, as you choose.

2.   LETTER GRADES: The Grading Assistant computes both numerical and letter     _____________
     grade averages for students. The program uses a standard letter grade
     scheme of "A" through "D" modified with "+" and "-", and "F" for failing
     grades. If you want, you can drop the "+" and "-" qualifiers for letter
     grades. You can define the numerical grade ranges for each letter grade.
     For example, you might define an "A" as any score over 95.

3.   REPORTS: The Grading Assistant has all of the reports you will need in a     _______
     school year. The current grade average report shows for each student in
     each class: final average as a numerical score, final average as a letter
     grade, and student averages for up to 12 different categories of grades per
     class. It also shows the class grade distribution counts by letter grade.
     (For example, 5 A's, 4 B's, and 6 C's.)

     A special grades posting report makes it easy for you to post student
     grades by class, showing grade averages by student identifiers (such as
     Social Security numbers) rather than by names to provide privacy.

     The student interim grade report allows you to produce a listing for each
     student whose current average is below a cut-off numerical grade (such as
     70). Every student, in every class you specify, whose current grade average
     is below the reporting cut-off grade will be listed along with their
     current grade average. You might use this report to send home an interim
     note to the parents of your students who are failing.

     The class roster report lists the students in each of your classes. This
     report might be useful to you for checking class attendance or manually
     recording student grades.

     The year-to-date grade average reports list for each student and each class
     the overall average in each of the past grading periods for this school
     year. An overall school year average is shown for each student in each
     class. You might use this to compute the final class grade average for your
     students at the end of the school year.





                                        5                                        5






     There is also a grade average summary report that lists students
     alphabetically, regardless of their class and subject. There is a student
     grade summary report that lists the current grades for a single student.

4.   GRADING: If you wish, The Grading Assistant will automatically drop the     _______
     lowest score for each student in a class for a particular grade category.
     For example, you might use this feature to drop the lowest DAILY grade for
     each student in your Spelling class. You can also tell The Grading
     Assistant to add one or more points to the final average for selected
     students during the grading period. This feature is useful when you give
     extra credit assignments, or if your school has a minimum grade score.

     The grade presentation menu resembles a typical electronic spreadsheet, and
     it operates in much the same way. You enter rows and columns of grades for
     each class. Rows are students; columns are individual grades. You supply
     the information and The Grading Assistant does the rest.

     The Grading Assistant has a special data entry feature which makes it easy
     to key in a new set of grades for your students. You just position the
     cursor to a new (empty) column of grades and press one key (F4). The
     Grading Assistant prompts you to enter the grades for each student in the
     class, one by one. A special feature of this method of data entry is that
     you can use TGA as a scoring key. For example, suppose you gave a quiz with
     23 questions of equal value. Normally, you would have to grade the quizzes
     and use a scoring key to tell you that - for example - a student who
     answered 21 correct gets a grade of 91. With TGA, you can simply tell the
     program that a perfect score is 23 and enter the number of questions that
     each student got right. TGA will translate each entry into the equivalent
     percentile score. (You enter 21, TGA stores 91.)

     One of the common problems of grading programs is that you often need to
     list student averages during a grading period, before the students have                                                    ______
     grades for every category you have defined for that class. For example,
     your students may not have completed a class PROJECT, yet the PROJECT grade
     is worth 25% of their final grade. What do you do? The Grading Assistant
     handles this problem by substituting for the missing grade category the
     average of the first non-zero grade category, perhaps the DAILY grade. For
     example, if the student has a DAILY average of 92, but no PROJECT grade,
     then The Grading Assistant substitutes the DAILY average for the PROJECT
     average for that student. This is useful for computing interim grade
     averages during the grading period.

5.   UTILITIES: The Grading Assistant has several special features for setting     _________
     up new grading sheets at the start of a new grading period. One feature
     will save the grading period averages (for use in computing the year-to-
     date student grade average). Another feature will keep the current student
     and class information, but remove the grades from the previous grading
     period so that you are ready to enter new grades for this period.

     There are also features that allow you to list the names of grading files,
     rename them, delete them, and make copies of them. Another feature will
     make backup copies of all your data files. While these same functions are
     also available in DOS, The Grading Assistant eliminates the need to learn
     and use DOS to maintain your grading files.



                                        6                                        6






6.   GRAPHICS: If your PC has graphics capability, you can use a special program     ________
     named TGAGRAPH to display your current grade averages, or the grade
     averages from a previous grading period, as a simple bar graph.

7.   STUDENT INFORMATION: An optional program named TGAINFO can be used to     ___________________
     maintain a record of each student's address and telephone number. You can
     use this program in conjunction with the Interim Grade Report to generate
     mailing labels for students whose parents are to be mailed a report of
     their child's grades. You can also use this program to keep a handy student
     information record.

If you are already quite familiar with your PC and you are experienced in
installing and learning new PC programs, you may wish to skip the rest of the
introductory material and go right to the section entitled "Getting Started."
The next few sections describe the basic PC functions needed to install and run
this program.


                              System Requirements                              ___________________

   To use The Grading Assistant, you need an IBM or 100% compatible personal
computer (PC) with:

     *    at least 330K of free memory (called RAM, for random access memory) in
          which TGA can run;

     *    either two floppy diskette drives, or one floppy drive and one hard
          disk drive;

     *    IBM or Microsoft DOS (disk operating system) version 2.1 or later;
          (NOTE: On some "clones" - IBM-compatible PCs, sometimes referred to as
          MSDOS machines - the basic input/output system (BIOS) is not
          completely compatible with IBM's BIOS. If you experience unusual
          problems, please try DOS 3.0 or higher.) and

     *    an Epson "FX" or compatible printer. (However, the program can be
          configured to run with other printers by using the TGAPRINT option
          described later in this documentation.)

Except for the TGAGRAPH program, which uses your PC's graphics interface, all
other TGA programs run in text mode, with 25 lines of 80 characters each.
Virtually all PCs can support this mode. (Although your EGA or VGA display can
run in 43-line mode, or greater, TGA will not work in any mode but 80x25.) TGA
uses your DOS's features to determine whether your PC uses a monochrome or color
monitor. It writes directly to your PC's display memory for speedy display. A
few PCs, primarily the earlier IBM clones that weren't quite IBM compatible, may
have trouble with this. If you seem to have problems displaying TGA menus, this
is probably the culprit. In some cases, merely upgrading to DOS 3.1 or later
will fix this.

TGA was designed to run on a minimally configured IBM compatible system. Thus,
this version of the program does not take any special advantage of graphics,
extended/expanded memory, math coprocessors, laser printers, or other state-of-
the-art PC capabilities. However, it does recognize the presence of a color



                                        7                                        7






monitor and automatically adjusts its display accordingly. You can also use the
TGASETUP option (described later) to tell the program which colors you would
prefer to use if you don't like those selected by the program's author. TGA has
been tested on both 'PC class machines' (with 8086 and 8088 processors) and 'AT
class machines' (with 80286 processors). It has been tested with CGA, Hercules,
PC-3270, EGA, and VGA graphics cards/monitors.

Some TGA customers have experienced problems running on some of the early
"clone" PCs (such as the Panasonic Senior Partner or the Texas Instruments
Professional) which were not 100% IBM compatible. If you experience problems
running TGA, for example if the program aborts while loading or beginning to
run, you might try upgrading your version of DOS from 2.1 to 3.1 or later. The
incompatibilities of some PCs seem to be related to the vendor-unique version of
DOS supplied with them. In these cases, TGA will usually abort with a RUN-TIME
202 (stack overflow) error. A DOS upgrade (to version 3.3 or 4.01) often
corrects this problem.

   This version of TGA includes TGAGRAPH, a program which will display simple
bar graphs of current and prior grading period averages. If you have a PC with
graphics capability then you can use this program. TGAGRAPH supports the
following graphics interfaces: CGA, MCGA, EGA, VGA, Hercules, AT&T 400 line, IBM
8514, and 3270 PC. Refer to the section on TGAGRAPH at the end of this
documentation for more details.


                             Software Installation                             _____________________

   The Grading Assistant is delivered in a compressed format for easier
handling. That permits the delivery of two diskettes of software and
documentation on a single floppy diskette. The TGA distribution disk has an
installation program (INSTALL.EXE) which you should run to decompress the
software and documentation before trying to run The Grading Assistant.

--------------------------------------------------------------------------------
IF YOU PLAN TO RUN TGA USING TWO FLOPPY DISK DRIVES

     Before you start, you need either one blank, formatted high density
     diskette (720K or more) or two blank, formatted standard density (360K)
     diskettes. If you don't have the formatted diskette(s), use the DOS FORMAT
     command to prepare them. (See your DOS Manual for help.) I recommend that
     you format one of the two diskettes (the one to hold the TGA programs) with
     the "/S" option -- to make it "bootable" and copy the DOS system files onto
     it.
--------------------------------------------------------------------------------

If you are installing from diskette, put the TGA distribution diskette in your___________________________________
A: drive and enter the following commands:

     A:
     INSTALL

If you are installing from a downloaded Bulletin Board file, decompress the___________________________________________________________
distribution file (using whatever decompression program the Bulletin Board used
to compress it) into a hard disk directory, change to that directory, and enter:



                                        8                                        8






     INSTALL

   In either case, the INSTALL program will copy TGA onto your floppy or hard
disk. Generally, if you are installing it for use on a floppy disk system, you
will install TGA on the "B" drive, and in the root (\) directory. For hard disk
installation, you will generally install it on the "C" drive, and in the "\TGA"
directory. If you had previously installed TGA on your hard disk and wish to
reinstall the new version in the same directory, the installation program will
delete the earlier version of the TGA software before copying the new version.
Naturally, any grading files you have will be left intact and unharmed.

   Next, you need to print your file of documentation. To do that, ready your PC
printer (power it off, adjust the paper, and power it on). Use the DOS PRINT
command (or any other print utility, such as Peter Norton's LP program) to print
the file named TGA.DOC. [If you installed TGA on your hard disk, then you will
find the documentation file on the disk and path where you installed the TGA
software. If you installed TGA on two standard density (360K) floppy diskettes,
the documentation file will be on the DOCUMENTATION diskette.]

   Printing the documentation will take a while to complete because it prints
about 50 sheets of paper. But you just can't expect to run the program without
reading the manual. If you have the patience to read the documentation on your
monitor, you might want to try Vern Buerg's excellent shareware text display
program (LIST.COM), available from Mr. Buerg directly or from most Bulletin
Boards and Shareware Distributors.

   Unless you are already familiar with TGA, read at least the first part of the
TGA Manual. Then, return to your computer and work through a few of the
examples. Voila! You're ready to use TGA for the real thing.

NOTE: You should always run The Grading Assistant from either your hard disk or____
an installed copy of The Grading Assistant software diskette. Keep the original
Grading Assistant distribution diskette in a safe place.


                          Changing the Display Colors                          ___________________________

   Each time The Grading Assistant program runs, it checks the type of computer
display adapter you have and automatically configures itself for your PC. (TGA
has been tested on MDA, CGA, EGA, and Hercules displays.) If you have a
monochrome display adapter (single color on a contrasting background) then the
program uses white letters on a black background for The Grading Assistant menu
information, and reverse video (black letters on a white background) to hilight
fields. If you have a color display adapter then the program uses a blue
background, white letters, and yellow (or brown, depending on your monitor's
color palette) to hilight fields.

   If you don't like the author's choice of colors, you can change them by using
the TGASETUP program to define your preferences. The following instructions tell
you how to do it. The directions assume that you installed TGA in a hard disk
directory named "TGA".

If you have a dual floppy disk system, put the installed TGA program diskette in_____________________________________          _________     _______
drive A:. When you are ready, enter these commands:



                                        9                                        9






                         A:
                         TGASETUP

If you have a hard disk system, switch to the disk and path in which you______________________________
installed TGA (use the DOS CD command) and enter:  TGASETUP

   Regardless of which type of computer system you have, you will be asked to
select the normal and hilighted background and foreground colors you prefer.
Just follow the instructions on the screen, pressing "B", "F", "H", or "T" to
change the colors, then pressing ESCAPE when you like the colors you see.

   Next, you will be asked to enter the type of PC display adapter and monitor
your system uses.  If you don't have one of the adapters/monitors shown in the
list, or if you aren't sure, just enter zero (0). Otherwise, type the number of
your adapter/monitor from the list shown, then press ENTER.

   After running TGASETUP, you will be asked if you want to save the changes you
just made. You respond with Y--for yes, or N--for no, and the program reacts
accordingly. TGASETUP can be run as many times as you wish. Each time you run
it, it starts with the colors you saved the last time. All of these color codes
are stored in a small file named DISPLAY.TGA. If you ever wish to eliminate the
DISPLAY.TGA file (to return to the author's color defaults), you can erase it
safely because you can always rebuild DISPLAY.TGA by re-running TGASETUP.

   Please note: if you have a monochrome display with a color graphics adapter   ___________
(such as some Compaq computers use), then TGA thinks your PC is capable of
displaying colors even though your monitor can't. You may have to run TGASETUP
to reset the display colors to be more compatible with monochrome display. Also,
if you pick unwise choices for colors (such as black on black), you may have an
invisible highlighted menu area or text. This isn't fatal, though. You can
always erase DISPLAY.TGA or run TGASETUP again to change the colors.


                           Changing the Printer Setup                           __________________________

   TGA is configured to run with an Epson FX or compatible printer. If your
printer is not compatible with an Epson FX, don't worry. TGA has a special
feature (the TGAPRINT program) that lets you tell TGA about the printer controls
your printer uses instead. To do this, first get out your printer manual and
turn to the sections that tell you about software printer commands. Most of
these will be two or more control characters, such as the ESCAPE and "P"
characters to tell your printer to use the Pica font. You will need to know the
exact control characters (expressed as decimal integers) that your printer uses
to set: Pica font, page length, line spacing, left and right margins, and any
other special printer characteristics you need.

If you have a dual floppy disk system, put the installed TGA program diskette in_____________________________________                        _______
drive A:. When you are ready, enter these commands:

                         A:
                         TGAPRINT

If you have a hard disk system, switch to the disk and path that contains TGA______________________________
(use the DOS CD command) and enter:  TGAPRINT



                                        10                                        10






Regardless of which type of computer system you have, you will be prompted to
enter your printer's control character codes to set the following:

  -  66 lines per page (the normal size for 8-1/2 x 11 paper -- used for all
     reports)

  -  Pica font (10 letters per inch, fixed character size -- used for all
     reports)

  -  left margin of 0 (used for all reports)

  -  right margin of 80 (used for all reports)

  -  6 vertical lines per vertical inch (the normal print size -- used for all
     reports) and

  -  any other special printer characteristics you always want to use (such as
     bold printing). This one is optional; you probably won't need to use it.

You will also be asked whether your printer uses continuous sheets of paper (the
typical case) or single sheets (such as an option of the IBM ProPrinter and some
letter quality printers).

   As you are running TGAPRINT, you must respond to each of the six prompts by
typing zero or more sets of decimal integers. (NOTE: You do not enter the                                                         ______
hexadecimal value for printer characters. You enter the decimal value.) Press
ESCAPE for each line when there are no further numbers to enter for it. For
example, to enter the printer command ESCAPE + "P" (for Epson's Pica fonts) you
would type:

               27        <then press RETURN>
               80        <then press RETURN>
               <press ESCAPE>

because "27" is the decimal code for ESCAPE, "80" is the decimal code for "P",
and the final ESCAPE signals that there are no more codes to enter for this
printer command. This may seem a little confusing, but the owners manual for
your printer should help you pick the right codes.

   After running TGAPRINT, you will be asked if you want to save the changes you
just made. You respond with Y--for yes, or N--for no, and the program reacts
accordingly. TGAPRINT can be run as many times as you wish. Each time you run
it, it starts with the printer codes you saved the last time. All of these
printer codes are stored in a small file named PRINTER.TGA. If you ever wish to
eliminate the PRINTER.TGA file (to use TGA's default printer controls), you can
erase it safely because you can always rebuild PRINTER.TGA by re-running
TGAPRINT.

   If you do not run TGAPRINT, then TGA assumes that your printer uses the
following control commands:







                                        11                                        11






Type of printer control                   Command
--------------------------              -----------
66 lines per page                       27,  67, 66
Pica font (10 cpi)                      27,  80
Left margin = 0                         27, 108,  0
Right margin = 80                       27,  81, 80
6 lines per vertical inch               27,  65, 12

Please note that many printers use different control commands than these. If you
notice that the first page of a series of printed reports has extraneous
characters (perhaps "A", "B", "C", "P", or "Q") then your printer differs from
the Epson FX standard. In that case, you will need to run TGAPRINT to properly
configure TGA for your printer. If your reports seem to break for pages
incorrectly, you may need to run TGAPRINT to set the "6 lines per vertical inch"
properly. The "12" in the Epson FX command means 12/72 = 1/6 inch per line. Many
printers use 60ths, rather than 72nds, for this command. In that case, you would
be printing at 12/60 = 1/5 inch per line, and you might experience page
overflows on your printed reports.

   If you wish to print copies of screen graphics displayed using the TGAGRAPH
program, your PC must support the dot matrix graphics commands used by either
the Epson 9-pin printers or the IBM Proprinter 9-pin printers. Due to the
variety of printer graphics formats in use, only these two printer families are
supported in this version of TGAGRAPH.


                                Using Your Mouse                                ________________

   The Grading Assistant recognizes your Microsoft or compatible (Logitech, for
example) mouse. Your mouse driver (the MOUSE.COM program or MOUSE.SYS) should
have already been loaded before you run TGA. TGA supports either keystrokes,
mouse movement and left button clicks, or a mixture of both. The following
section describes how to use your mouse with TGA. Thereafter in this document,
no references are made to mice -- even though your mouse will work with
everything in TGA.

   The first thing to know is that TGA only recognizes mouse movement and the
left mouse button "click" (meaning a press and release). Right button clicks and
middle button clicks (if you have a three-button mouse) are ignored.

   TGA has two basic types of menus in which the mouse is useful. The typical
"activity menu", such as the TGA Main Menu, simply has a list of actions. You
can move the mouse up and down to hilight the desired action. Clicking the left
button selects and executes the hilighted action. The Main Menu, End-of-Grading-
Period Menu, and Utility Menu are all "activity menus". The mouse cursor is
invisible on these menus, but the hilighted cursor bar shows you where the mouse
is.

   The other type of TGA menu typically has a variety of places in which you can
enter and display information. The Grading Menu and Scoring Menu are examples of
this type. In these menus, the mouse cursor will be visible as a solid, non-
blinking block. As you move the mouse, the mouse cursor moves around the screen
in a similar manner. When you move the mouse to a data entry location and click
the left button, TGA allows you to enter data in that area. Or, if you move the



                                        12                                        12






mouse cursor to one of the function key definitions at the bottom of the menu
and click the left button, TGA will execute the action as though you had pressed
that function key. For menus in which the amount of data that can be displayed
is larger than the display screen, you can move the mouse cursor to the left,
top, right, or bottom edge of the menu area and click the left mouse button. TGA
will respond as though you had pressed the corresponding Back Tab (mouse cursor
on left edge), Page Up (mouse cursor on top edge), Tab (mouse cursor on right
edge), or Page Down (mouse cursor on bottom edge).

   In most cases where you would press the RETURN/ENTER key, you can simply
click the left mouse button to have the same effect. The best way to learn what
you can do with the mouse is to simply move it and click the left button while
in a TGA menu. If you click the button in an undefined area of the menu, TGA
will simply ignore it.

   TGA has been tested with both the Microsoft two-button mouse and the Logitech
three-button mouse. If your brand of mouse is not sufficiently compatible with
the Microsoft standard driver, or if you have an old version of the mouse
driver, then TGA may have problems handling your mouse. In that case, you can
either contact the vendor of your mouse for an updated driver, or you can use
the normal cursor and keyboard keys rather than your mouse. The presence of a
mouse on your system in no way prevents you from using the normal keystrokes
available to people without a mouse.

   The rest of this documentation will not make reference to using a mouse
because it makes the manual much harder to read if every section must describe                            ____
how to execute commands with and without a mouse. But mouse fans take heart; TGA
gives you full support anyway.


                 Telling TGA The Disk/Directory to Use for Data                 ______________________________________________

   The Grading Assistant is like most PC programs. It presumes that the data
files it processes (that is, your grading information files) are located in the
"current DOS directory." So, if you don't tell TGA anything to the contrary, the
program looks for grade files on the same disk and in the same directory as your
program file. However, if you're familiar with DOS then you know that you can
establish a "PATH" statement (usually in your AUTOEXEC.BAT program) to tell DOS
where to look for programs. If you are running DOS version 3.1 or later and the
disk/path that contains TGA is in your PATH statement, then you can start TGA
from almost anywhere by simply typing the program name. TGA will determine where
it is stored on your system and change to that directory first. If you are
running DOS version 2.1, then DOS itself does not support the ability for TGA to
determine its disk/path location unless it is executed from the current
disk/path.

   For a typical floppy disk system, DOS will look first in the "root directory"
of your primary diskette drive ("A:\"). For a hard disk system, this is usually
the TGA subdirectory of your primary hard disk drive ("C:\TGA"). However, many
people like to keep their data files on a different disk or in a different
directory than their programs. This makes it easier to backup the data files
without also backing up the programs.





                                        13                                        13






   There are two ways for you to tell TGA where to find your data files. One way
is to specify the disk drive letter and path when you define your grading files
in the Scoring Menu (by pressing F2 from the main TGA menu). If, for example,
you entered "B:\1ENGL" as a grading file name in the Scoring Menu, then TGA
would look for a grading file named "1ENGL" stored in the root directory of your
"B:" diskette.

   Another way for you to tell TGA about your data disk and directory is to
identify it when you start the program. This is the easiest way. When you
execute The Grading Assistant, you can name the desired data disk and directory
on the command line. The DOS command would look like this:

                                 TGA disk/path                                     _________

Where disk/path is the standard DOS file path. For example, you might begin      _________
executing TGA by entering the following command:

                                    TGA B:\

The result is that TGA would look for your data files on the "B:" disk and in
the root ("\") directory. If you give TGA an invalid disk/path name, it will
simply ignore it and use the program disk/path instead.

   Either way of defining the location of your data files is OK. The second way
is probably easier, though. You can also change the data file disk/path during a
TGA session by going to the TGA DOS Utility Menu and pressing F4 (to change
directories). The main TGA menu always tells you the name of the current data
disk/path.


                            Distribution Information                            ________________________

   The Grading Assistant is not "public domain software" (that is, software                            ___
donated to the public for free use). It is, instead, "shareware" (that is,
copyright software which users are encouraged to evaluate for free, and to pay
for it if they continue to use it). You may try this program without obligation
or cost and evaluate it for your use. If you decide to keep the software or
continue to use it after a 30-day evaluation period, you must register your copy                                                         ____
with the program's author by sending in the registration fee and form at the
front of this document. If you do not intend to continue using the software,
simply erase it or give the diskette to a friend.

   If you aren't familiar with the shareware concept, this paragraph gives you a
quick summary. You wouldn't buy a new car without test driving it first, but
many commercial software companies ask you to buy their programs before you use
them. Somehow, that doesn't seem fair. So the concept of shareware was designed
to enable you to try the program first, to evaluate it at your leisure, and then
to pay for it if you decide to use it. Shareware is based on trust; only you
will know if you don't pay for what you use. But when you consider that
shareware is typically very inexpensive and brings you programs that otherwise
wouldn't be marketable, paying for it is just good sense. The alternative is to
deal with the companies that make you pay higher prices up front.





                                        14                                        14






   There are a variety of programs that masquerade as shareware, but aren't. One
category is the demonstration. This is a nonfunctional program that shows you                _____________
what the program can do, but its only purpose is to be an advertisement for the
product. Another category is called (by its detractors) crippleware. This is                                                        ___________
software which is incomplete. The crippleware author wishes to give you enough
of a product to evaluate it, but crucial portions of the program (perhaps the
ability to store more than 20 records) are omitted to force you to pay for it
before it is fully functional. A third category is annoyware. It is shareware                                                   _________
that periodically displays messages, delays processing, stops running, or annoys
you in other ways until you register the program to receive a version without
the annoying side effects.

   The Grading Assistant is true shareware. It is fully functional; it has no                            ____
annoying features to remind you to register. It is priced so inexpensively that
there is no reason not to register it and receive both the current version and
future support from the author. (Try finding even trivial commercial software
products for $20.)

   This diskette and the programs on it are not copy protected (that is,
designed or written in such a way that it is difficult to make copies of them).
There are no "time bombs" which make the program self-destruct after a set
number of uses. The author's purposes in offering this program through the
SHAREWARE distribution method are to reach a wider audience of PC users and to
offer this quality software product to you at a reasonable price. $20 is a small
price to pay for the hours of work you will save if you use The Grading
Assistant to calculate your grades.

   OK, end of advertisement. It's up to you to evaluate TGA and register if you
continue use it after a30-day evaluation period.


                            Did You Get Everything?                            _______________________

   TGA is normally distributed either by shareware distribution firms, such as
PC-SIG or Peoples Choice, or through electronic Bulletin Board services. If you
received TGA from a shareware firm, you should have received a dual-sided, dual
density (DSDD) diskette containing both your TGA software and documentation in a
compressed format. The first step is to install the TGA program. Display or
print the README.TGA file on the TGA distribution diskette for instructions on
how to do this. If you installed your files for use on a dual floppy disk system
with normal density (DSDD) diskettes, you will now have two new diskettes --
your installed program diskette and your documentation diskette. If you     _________________                   _____________
installed TGA on your hard disk or high density diskette, you will have all of
the TGA software and documentation on a single disk and directory.

Your documentation file is stored in a special format (sometimes called TTY, for
teletype) ready to be printed on almost any text printer. The only file you
absolutely need to run The Grading Assistant is "TGA.EXE". If you want to be
able to display help information, you will also need the TGAHELP.0nn files. If
you wish to run the graphics programs, you will need "TGAGRAPH.EXE" and the
appropriate graphics interface file ("*.BGI") for your PC. To run the Student
Information programs, you will need "TGAINFO.EXE". To change printer or display
color default information, you will need TGASETUP.EXE and TGAPRINT.EXE.




                                        15                                        15






The following is a description of the primary TGA files you will find after
installation:

TGA.EXE        This is the main program for The Grading Assistant.

TGAHELP.0nn    These are the TGA help files. When you press ALT and H
               simultaneously, you will see a short help message screen.

TGAPRINT.EXE   This is an optional program to define your printer's codes if
               they are not fully compatible with the Epson FX printer.

TGASETUP.EXE   This is an optional program to define your preferences for
               display colors and adapter/monitor type if you don't like the
               author's default choices.

README.TGA     This is a short file of information about how to install and use
               The Grading Assistant.

WHATSNEW.TGA   This is a short file of information about changes in the program
               with each recent version.

INSTALL.EXE    This program copies TGA onto a floppy or hard disk PC system.

TGAGRAPH.EXE   This program displays simple bar graphs of your current grade
               averages, or the grade averages for a single prior grading
               period. TGAGRAPH is optional, and it is only useful if your PC
               has a supported graphics card and monitor.

*.BGI          These are a series of graphics interface files. They are the
               copyright products of Borland International, and they are
               included with The Grading Assistant under the terms of Borland's
               license with the TGA author. You need the BGI file which is
               appropriate for your PC's graphics card/monitor if you plan to
               run the TGAGRAPH program.

TGAINFO.EXE    This is a program which allows you to maintain an information
               record for each student. The record contains the name of the
               student's parents, the student's mailing address, and telephone
               numbers for the parents.

TGA.DOC        This is the documentation for the programs. Display it on your PC
               or print it on your printer.

PKUNZIP.EXE    This is the copyright (C) product of Phil Katz. It is used to
               decompress the TGA files on the distribution diskette. The
               INSTALL.EXE program uses PKUNZIP. You do not need it to use TGA
               after it is installed. Please note: registering TGA does not                                                                   ________
               register your use of Mr. Katz's programs. For the full set of
               excellent programs he offers, please contact your favorite
               shareware distribution firm or bulletin board system.







                                        16                                        16






                                 Program Limits                                 ______________

   The limits of The Grading Assistant program are:

*    up to 12 grading periods per grading year

*    up to 15 different classes per grading period

*    up to 45 students per class

*    up to 42 grades per class, per grading period

*    up to 12 different categories of grades, each with its own grade average
     percentage, per class. For example, the grade categories for a 1st period
     English class might be:
               15%  Writing Assignments
               25%  Spelling and Vocabulary Assignments
               25%  Tests and Quizzes
               35%  Special Projects

*    the program assumes a letter grading system of "A", "B", "C", "D", and "F",
     where every letter grade except "F" can be modified by a "+" or "-"
     indicator.

*    the program assumes a 100-point grading scale, although individual grade
     scores can range from 0 through 999.


                                Getting Started                                _______________

   Before you try The Grading Assistant, you should first know how to get out of
it. The main Grading Assistant menu has six options from which you can select.
One of them is "Q", for QUIT. Pressing the letter "Q" (or, alternately, the
ESCAPE key) from the main menu will end the program. From other menus, such as
the GRADING and SCORING programs (options F1 and F2 on the main menu), you press
the ESCAPE key to end the program and return to the main menu.

   In general, ESCAPE is a good key to try when you want to stop what you are
doing in The Grading Assistant and return to an earlier menu, or to DOS. If you
are being prompted by TGA to enter some information, simply pressing the RETURN
key without typing any data will often signal TGA that you want to exit. If
ESCAPE fails to get you out and you can't figure out what else to do, you can
press two special keys simultaneously (Control and Break) to abort the program.
If that doesn't seem to work, try pressing the Control, Alternate, and Delete
keys simultaneously. Those three keys pressed together will restart your
computer. Or, if you're truly desperate, press the re-boot button (many PCs have
these on the front of the chassis) or turn off the power switch on your PC. Each
of these is successively more drastic. You may actually lose some of the data
you had keyed but not yet saved, depending on what went wrong. But please be
assured that in hundreds of hours of actual use and testing of The Grading
Assistant program there has not been a single instance in which TGA destroyed
any data.





                                        17                                        17






   From most of the TGA menus, you can press the ALTERNATE key and the H (for
HELP) key simultaneously to display a short help message. This message will
"pop-up" over the current screen. Use the Page Up/Down keys to view the text,
which will usually be one to three screens of information. Press ESCAPE when you
are through viewing the help and want to return to the menu.

   To begin The Grading Assistant, you must first be in DOS mode. "Boot" (that
is, start-up) your PC as you normally do. On a floppy disk system, you boot the
PC by putting your DOS disk in the "A:" drive and turning the power on. On a
hard disk system, you boot the PC by making sure your floppy disk doors are
open, and powering on the PC.

   If you have a floppy disk system, remove and put aside your DOS diskette, and   ________________________________
insert The Grading Assistant installed program diskette in your "A:" drive after
you see the "A>" prompt on the screen. [The "A:" drive is usually the one on
top, or on the left, if you have two diskette drives.]

   If you have a hard disk system, change your hard disk subdirectory to the one   ______________________________
with The Grading Assistant installed in it. For example, if you installed The
Grading Assistant program on your "C:" drive and in the "TGA" directory, then
when you see the "C>" prompt on the screen, you should enter:

                                    CD \TGA

   Regardless of whether you have a floppy or hard disk system, to start The
Grading Assistant, type:

                        TGA    -- or --    TGA disk/path                                               _________

(The disk/path is optional and allows you to tell TGA the disk and path of your     _________
grading files.) The PC screen will clear and The Grading Assistant main menu
will appear:

                       The Grading Assistant -- MAIN MENU                       __________________________________

                    +---------------+Main Menu+------------+
                    |F 1| Enter or change class grades     |
                    |F 2| Define grade computation methods |
                    |F 3| Reports menu                     |
                    |F 4| End-of-Grading-Period menu       |
                    |F 5| Utility menu                     |
                    | Q | Exit                             |
                    +--------------------------------------+

You can use the up/down cursor arrows (or your mouse) to select the desired
option, then press ENTER (or click the left mouse button) to execute it. Or, you
can press one of the keyboard function keys (labeled F1 through F5) to perform
the specified function, or press the letter "Q" (or ESCAPE) to quit and return
to DOS mode. The following is a summary of function key programs:

F1   This is used either to create a new class grading file or to enter, change,
     or delete grades in an existing file. This is the function you will use to
     enter and edit student grades for your classes. The information in these




                                        18                                        18






     grading files is used when you display or print the current grade average
     reports.

F2   This is used to enter or edit the grade average computation percentages for
     each of your grade files. It also allows you to define the numerical grade
     ranges which correspond to each letter grade. The information in this file
     is used to compute class averages when you display or print the current
     grade average reports.

F3   This is used to jump to the Reports Menu. All of The Grading Assistant
     reports can be found in that menu.

F4   This is used to jump to the End-of-Grading-Period Menu. That menu allows
     you to save the grade averages for you students at the end of one grading
     period, while you prepare your grading files for the start of the new
     grading period.

F5   This is used to jump to the Utility Menu. From that menu you can: erase
     files, rename files, copy files, make backup copies of your data, restore
     your data files from earlier backup copies, change your data disk/path, and
     list the names of files in the current data directory.

Q    Exit from The Grading Assistant main menu and return to DOS mode.

(Notice that the main menu display tells you the name of the current disk and
path on which TGA will look for your grading files.)


                               Your First Lesson                               _________________

   Let's begin by drawing an analogy between TGA and your current (manual) grade
book. You start the school year with several classes. In your grade book you
keep each class in a separate section, often separated by tabs or dividers. With
TGA you will keep each class in a separate grading file on your disk. (Five
classes means five grading files.)

   What information does your grade book have? It probably has the class
subject, the class period, your name, the names of all of the class students,
and spaces to record attendance and grades. With TGA your grading files will
keep the same sort of information. You can even use TGA to print a class roster
for taking attendance.

   How do you begin the school year by getting your grade book ready? You
probably start by filling out the information for each class. You enter the
subject, period, and other information on grade sheets for each class. You write
or type in the names of students for each class, and you decide how to score
each class. With TGA you do the same things. You use a program called the
Grading Menu to enter information for each class. You use a program called the
Scoring Menu to tell TGA which classes you have, how you will score class
averages, and how TGA should use numerical grade ranges to assign letter grades
(for example, you might tell TGA that a grade in the range 94-96 is an "A").

   During the school grading period you give assignments and grade papers.
Unfortunately, TGA can't help you very much there. For assignments and grading



                                        19                                        19






papers you are on your own. But instead of entering your grades manually into a
grade book, you can enter the grades for each class into your PC using the TGA
Grading Menu. Then, at any time during the grading period, you can either print
a report or display on the screen the current grade averages for any or all
classes. You can look at the grades for just one class if you want, or for all
of them. Naturally, TGA shows you the grade averages for each of your grading
categories (you defined these earlier using the Scoring Menu). TGA shows you the
overall grade average for each student, both as a numerical score and a letter
grade. It also gives you a breakdown by class of how many students made A's,
B's, C's, D's, and F's.

   If you teach grade school and need to send home interim reports to the
parents, TGA can help you here, too. All you have to do is tell TGA the
numerical grade below which you want an interim report, and it will print a
short note for each student whose grade average is below that score. TGA even
has an option that lets you write individual comments for each student if you
wish. You can also use the TGAINFO program in conjunction with the Interim
Report to print gummed labels for mailing your reports to your students'
parents.

   At the end of the grading period you normally get out your trusty calculator
and a lot of scratch paper to do the grade averages. But with TGA, all it takes
is pressing a few keys and you have complete grade average reports. This is
where TGA really saves you a great deal of time and effort. At the end of the
grading period, you use TGA to save the averages for that period because TGA
will compute year-to-date and end-of-year grade averages for each class as well.

   Now that you've heard the basics, you have a choice. You can work through a
step by step set of three exercises, or you can skip to the next section. If
you're the sort of person who is comfortable with PC programs, skip the rest of
this section and pick up the reading at the "Normal Processing" heading. If you
want to work through a few lessons, read on.

   Let's start at the beginning for your first lesson. In this lesson, whenever
the instructions tell you to Enter something, that means you should type the                             _____
letters shown and then press the Enter key. On some PCs this key is labeled
RETURN or it has a downward left arrow on it. When the instructions tell you to
Press something, that means you should only press the key(s) shown. No need to_____
depress the RETURN key when the instructions say "Press".

   Your PC has many special keys. The ones you will use most often are the
Escape key, the Return (or Enter) key, and the function keys (abbreviated F1
through F10). When you see these keys referenced in the following example, they
mean you should press that key. For example, when you see "Escape" then you
press the Escape key; you don't type the letters E S C A P E.


                      Lesson 1 - Setting up a Grading File                      ____________________________________

   In this lesson you will learn how to set up a single grading file, which we
will name SAMPLE. We will assume that, for a hard disk system, your TGA programs
and data are on the C: disk in the \TGA path. The SAMPLE file is for Ms. Smith's
first period English class, which has only five students (doesn't she wish!).




                                        20                                        20






This lesson shows you the skills you need to set up grading files for each of
your own classes.

Start The Grading Assistant:___________________________

(on a floppy disk system)          1.   Enter TGA                                              TGA

(on a hard disk system)            1a.  Enter CD C:\TGA                                              CD C:\TGA
                                   1b.  Enter TGA                                              TGA

Select the Grading Menu:           2.   Press F1                                              F1_______________________

Name the grading file:             3a.  Enter SAMPLE                                              SAMPLE_____________________
                                   3b.  Enter Y                                              Y

Enter the class description:       4a.  Enter Ms. Smith                                              Ms. Smith___________________________
                                   4b.  Enter English                                              English
                                   4c.  Enter 1st                                              1st

Enter the class students:          5a.  Enter Able, Mary                                              Able, Mary________________________
                                   5b.  Enter Baker, Bill                                              Baker, Bill
                                   5c.  Enter Carson, Susan                                              Carson, Susan
                                   5d.  Enter Davidson, Allen                                              Davidson, Allen
                                   5e.  Enter Elder, Dana                                              Elder, Dana
                                   5f.  Press Enter                                              Enter

Exit from the Grading Menu:        6a.  Press Escape                                              Escape__________________________
                                   6b.  Enter Y                                              Y
                                   6c.  Enter N                                              N

Exit from the TGA program:         7.   Press Q                                              Q_________________________


                  Lesson 2 - Defining The Grading Information                  ___________________________________________

   In this lesson we will define our criteria for computing class averages for
the SAMPLE grading file. We have decided that daily grades and test grades will
each account for one-half (50%) of the final average for each student. To be
generous, though, we have decided to drop the lowest daily grade before we
average. You would use the same set of skills to define the grade computation
for each of your own classes.

Start The Grading Assistant:       1.   See Lesson 1___________________________

Select the Scoring Menu:           2.   Press F2                                              F2_______________________

Enter the grading file name:       3.   Press Y to load created grade file names                                              Y___________________________










                                        21                                        21






Define the grading categories:     4a.  Press F1                                              F1_____________________________
                                   4b.  Enter DAILY                                              DAILY
                                   4c.  Enter 50                                              50
                                   4d.  Enter Y                                              Y
                                   4e.  Enter TEST                                              TEST
                                   4f.  Enter 50                                              50
                                   4g.  Enter N                                              N
                                   4h.  Press F1                                              F1

Define Letter Grade Ranges:        5a.  Press F2                                              F2__________________________
                                   5b.  Enter numeric grade ranges

Exit from the Scoring Menu:        6a.  Press Escape                                              Escape__________________________
                                   6b.  Enter Y                                              Y

Exit from the TGA program:         7.   See Lesson 1_________________________


                           Lesson 3 - Entering Grades                           __________________________

   In this lesson we will enter two sets of grades for Ms. Smith's English class
(remember that we named the grading file "SAMPLE"). The first set is for a daily
grade, verb worksheet, given on October 1, 1988. The second set of grades is for
a pop quiz given on October 2, 1988. Both were graded using a 100% base. These
are the skills you would use to enter grades for students in each of your own
classes.

Start The Grading Assistant:       1.   See Lesson 1___________________________

Select the Grading Menu:           2.   Press F1                                              F1_______________________

Select the Grading File Name:      3.   Enter SAMPLE                                              SAMPLE____________________________

Enter the first set of grades:     4a.  Press F4                                              F4_____________________________
                                   4b.  Press RETURN                                              RETURN
                                   4c.  Enter 10/1/88                                              10/1/88
                                   4d.  Enter DAILY                                              DAILY
                                   4e.  Enter Verb Worksheet                                              Verb Worksheet
                                   4f.  Enter 93                                              93
                                   4g.  Enter 99                                              99
                                   4h.  Enter 87                                              87
                                   4i.  Enter 82                                              82
                                   4j.  Enter 100                                              100
                                   4k.  Listen for the "beep"

Enter the second set of grades:    5a.  Press RIGHT ARROW                                              RIGHT ARROW______________________________
                                   5b.  Press F4                                              F4
                                   5c.  Press RETURN                                              RETURN
                                   5d.  Enter 10/2/88                                              10/2/88
                                   5e.  Enter TEST                                              TEST
                                   5f.  Enter Pop Quiz                                              Pop Quiz
                                   5g.  Invent and Enter 5 grades
                                   5h.  Listen for the "beep"




                                        22                                        22






Exit from the Grading Menu:        6.   See Lesson 1__________________________

Exit from the TGA Program:         7.   See Lesson 1_________________________

   Congratulations! You have just completed the basic skills you will use to
enter TGA grades and define grade average computation. There is much more to
learn to master the details. But for now, you know the basics. Start TGA again
and press F3 from the main menu to select the Reports Menu. From there, press F1
to select the Current Grading Period reports. Display your grade averages or
print a copy on your PC printer using the Averages by Class/Student report.
(NOTE: If you performed these lessons, then you created a dummy grading file ____
named SAMPLE which you may wish to erase. Use the DOS ERASE command to delete
SAMPLE. You will also need to erase or update your SCORING MENU file
(SCORING.!!!) to delete the SAMPLE file entry when you are ready to enter your
real grade file names and scoring criteria.)


                               Normal Processing                               _________________

   The following describes the steps you will usually follow to run The Grading
Assistant:

1.   The first time you use The Grading Assistant, you should select F1 from The
     Grading Assistant main menu to create a grading file for each of your
     classes. For example, if you teach four classes of French, then you will
     create four grading files -- one for each class.

     In DOS, a file identifier has the following format:

               [drive:][path]filename[.extension]

     The [drive:] identifies by letter the disk drive on which your data will be
     kept. Normally, drive identifiers are "A:", "B:", "C:", or "D:", where "A"
     and "B" drives are for floppy diskettes and "C" and "D" are for hard disks.
     Note that the drive identifier always ends in a colon (:). When you do not
     specify which drive you wish, DOS assumes that you want to use the current
     one (usually "A:" if you have a floppy disk system or "C:" if you have a
     hard disk system). Entering the drive is optional unless your current one
     is not the one you want TGA to use.

     The [path] identifies the disk directory, if any, on which your data will
     be kept. Floppy disk systems rarely use paths; hard disk systems almost
     always do. Disk paths must be specifically created (by using the DOS MKDIR
     (make directory) command). The path identifier always ends in a backslash
     (\). When you do not specify which path you wish, DOS assumes that you want
     to use the current one. On a floppy disk system, you rarely worry about
     paths. On a hard disk system, you generally use paths to separate different
     types of programs and data files. Entering the path is optional unless your
     current one is not the one you want TGA to use. In most cases, you will
     enter nothing for the TGA path.

     The filename is a name of your own invention, composed of letters and
     digits, from one to eight characters in length. You must enter a filename
     since, without one, DOS has no way to know which file you wish to use.



                                        23                                        23






     Don't get too fancy with file names. The simpler they are, the more likely
     you will remember them. For example, FRENCH1 is a better name for a first
     period French class than F1S102A (for French 1, Section 102-A). Entering a
     file name is required.                  ________

     The [.extension] identifies an optional extension to the file name. It can
     be from one to three characters in length, and is preceded by a period (.).
     Extensions let you group files of a particular type. For example, you might
     give all of your grading files an extension of ".GRD". Like the filename,
     the extension is composed of letters and digits. The extension is not
     required. If you leave it out, then DOS simply leaves the extension blank.
     Normally, you can omit this for TGA data files.

     The following are examples of valid DOS file identifiers:                                   _____

     B:SAMPLE
     C:\DIR1\DIR1A\TEST
     EXAMPLE.TGA

     The following file identifiers are invalid:                                        _______

     B:ENGLISHLIT             (Name longer than 8 letters)
     C:\DIR1\                 (No filename was given)
     B:\DATA\LANG+ENG.GRD     (Illegal character [+] in filename)

     If you are not familiar with using DOS paths and disk subdirectories, don't
     worry. You don't need them to run The Grading Assistant. If you are
     uncomfortable with DOS file identifiers then, to be safe, stick with simple
     file names of eight characters or less, composed of letters (A-Z) and
     digits (0-9). In any case, give your files names which are easy to
     remember, such as "1SCIENCE" for "1st period Science." A grading file
     consists of class information (teacher's name, the subject, and the
     period), student names, and grade information (initially, students have no
     grades).

2.   During the current grading period, as students receive grades for their
     work, you should enter student grades once a week (or once a day if you are
     truly industrious) by selecting F1 from the main menu. You enter student
     grades into the Grading Menu much the same way as you enter grades manually
     into your grade book.

3.   When you are ready to print a report of grade averages for the first time,
     you should first select F2 (the Scoring Menu) from the main menu. You will
     be asked if you want to automatically load the names of grading files you
     created using the Grading Menu. Normally, the answer is Yes. After loading
     the grading file names, you can enter the scoring percentages you plan to
     use for each class. You should also define the range of scores for letter
     grades. You need not run the F2 (Scoring Menu) program again unless the
     names of grading files, the class scoring information, or the letter grade
     ranges change.

4.   To display/print a report of current student averages any time during the
     grading period, select F3 from the main menu. This will display the
     available reports. Most of these can either be printed or displayed on your



                                        24                                        24






     PC. If, for example, you select the current grading average report, you
     will have an opportunity to select the classes you want to display or
     print, in case you don't want to see all of them. The student grade
     averages for each grading file you selected will be displayed on your
     monitor or printed on a single sheet of paper. The report shows student
     names and averages for each category, and gives a distribution count of the
     student scores for that class by letter grades. Often, it is a good idea to
     first display the grade report before actually printing it.


                          Entering and Editing Grades                          ___________________________

   By selecting F1 from the main Grading Assistant menu, you will run the grade
entry/edit program. As the program starts, the PC screen will clear and The
Grading Assistant GRADING MENU will appear.


                     The Grading Assistant -- GRADING MENU                     _____________________________________


TEACHER: ______________
SUBJECT: ______________                 +--DATE-----TYPE-------DESCRIPTION-----+
 PERIOD: ____                           |        |        |                    |
                       +-----GRADES--------------------------------------------|
                       |#  |#  |#  |#  |#  |#  |#  |#  |#  |#  |#  |#  |#  |#  |
##+------STUDENTS------+-------------------------------------------------------|
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  |                    |                                                       |
  +----------------------------------------------------------------------------+

   The first thing that will happen is that you will be prompted to enter the
name of a grading file. If you want to create a new file, simply invent and
enter a new file name. (Invent a name of eight or fewer letters or digits unless
you are familiar with DOS file drive, path, and extension identifiers, then
press ENTER.) If you want to edit or enter grades for an existing file, simply
type the name of the previously created file and press ENTER. When you are
creating a new file, it is a good idea to pick simple, unique file names. (I
also recommend that you write them down somewhere convenient.)

   If you enter the name of a grading file which already exists, the information
in that file will be retrieved and displayed in the menu on your screen. If you



                                        25                                        25






enter the name of a file which does not exist, the GRADING MENU program will ask
you if you wish to create it. If you respond by entering "Y", a new grading file
will be created and you will be asked to enter student and class descriptions
for it. If you enter "N", you will be prompted to re-enter the file name you
wish. (Normally, you will use "N" only when you typed an incorrect file name by
mistake.)

   What do you do if you can't remember the names of your grading files? Well,
if you have already defined them in the SCORING Menu (by pressing F2 from the
main TGA menu), then you can enter "?" in response to the grading file name and
TGA will pop-up a list of the defined files. Move the cursor up/down to the
desired file name and press ENTER to select that grading file. Or, select EXIT
to exit from the grading menu. NOTE: Since there are no restrictions in TGA
(other than those imposed by DOS) about what you may name your grading files,
this feature can only work by reading the names you have previously defined in
the SCORING Menu.

   If you create a new grading file, the name of that file is stored in a
special, temporary file named NEWFILES.TGA. Later, when you run the Scoring Menu
(F2 from the main menu), you will have the option to load the names of any newly
created grading files. If you respond "Y" -- yes, load the grading file names --
then TGA will load them into empty file name spaces in your Scoring Menu. This
is simply a time-saving measure to make it faster and easier to setup your grade
computation data the first time.

   The information at the top left corner of the grading menu (TEACHER, SUBJECT,
and PERIOD) is called the class description. When you create a new grade file,
you will automatically be prompted to enter this information. Thereafter, if you
wish to change it, you can use the F3 key while in the GRADING MENU.

   The information at the bottom left of the menu is the list of student names.
When you create a new grading file, you will automatically be prompted to enter
up to 45 student names. Thereafter, if you wish to add, change, or delete a name
from the GRADING MENU, just move the hilighted cursor to the same line (row) as
the student name, and press F2 (to edit it), F6 (to insert a new name), or F7
(to delete the student from the class).

   Each student has an optional identification (ID) field. You don't have to use
this, but it might be handy for recording the student record identifier used by
your school (perhaps the Social Security Number). This ID is only used in one
report -- the Current Grading Period:  Post Grade Averages Report. That report,
run from the Reports Menu, lists student grade averages by ID, rather than by
name, so the instructor can post grades and retain student privacy. When you
initially enter student names, or when you edit them by pressing F2 from the
Grading Menu, you will be able to see and enter/change the student ID if
desired.

   The information at the bottom right of the menu is the student grade area.
You can enter a grade by merely moving the hilighted cursor (the hilighted block
on the screen) to a student grade location (cell) and typing the grade. For
example, to enter a grade of "100" you would position the cursor to where you
want the grade entered, then type "100". You can also use the F4 key from the
GRADING MENU to enter an entire column of grades for your students.




                                        26                                        26






   The information at the top right of the menu is the grade description. Each
column of grades has a description (the date of the grade, a grade category used
in computing student averages, and a short note you add to describe the grade
activity). When you use the F4 key to enter a column of grades, you will
automatically be prompted to enter the grade date, type, and description.
Thereafter, you can change the description by moving the hilighted cursor to the
desired grade column and pressing F1.


                     Entering Class Description Information                     ______________________________________

   When you create a new grading file, you will automatically be prompted to
enter the name of the TEACHER, the SUBJECT, and the class PERIOD. One by one,
these fields will be hilighted. You simply type the information inside the
hilighted area on the screen, and press ENTER for each one when it is complete.
Use the BACKSPACE key to correct any typing errors. You can also use the left
and right arrow keys, the HOME key, and the END key to position the cursor
within the field you are typing. Pressing the DELETE key will remove the
character directly over your cursor. Pressing INSERT will enable you to insert
additional characters to the left of the cursor.

   Thereafter, any time you wish to change the class descriptive information
from the GRADING MENU, just press F3.


                             Entering Student Names                             ______________________

   When you create a new grading file, you will automatically be prompted to
enter the names of your students. One by one, a new area of the STUDENTS section
will be hilighted. You simply type the name of the student and press ENTER. When
there are no more student names to enter, just press ENTER without typing a
name. This (pressing ENTER without typing anything) signals the GRADING MENU
program that you don't wish to type any more student names for this grading
file. Up to 45 student names can be entered in each grading file.

   Thereafter, to change a student name (for example, to correct a typographical
error), simply move the hilighted cursor up or down the grade column, or use the
Page Up/Down keys, so that the cursor is on the same line (row) as the name to
be changed. Press F2 to hilight the name and edit it.

   NOTE: When you blank (erase) a student's name from a class, you automatically
exclude the student's grades from the class average. The grades for that student
are not deleted, however, as insurance against inadvertent student name
deletion. So, if you unintentionally blank a student name, you can simply use F2
to retype it. Once the name is present, the student will once again show up in
your class average listings. Thus, a blank student name is different from using
F7 to delete the student entirely.

   Pressing F5 from the Grading Menu will sort the student names alphabetically.
NOTE: This is only useful if you have entered the student names in LAST-FIRST
order (such as "Jones, Tom").

   Pressing F6 from the Grading Menu will insert a blank student grade line
ABOVE the row (student line) your cursor is on at the time. (If the program



                                        27                                        27






didn't insert the blank line ABOVE the current line, you couldn't add a line to
the top of your class list.) This feature is useful for making room in your
grade sheet for a new student, and putting that student in alphabetical order.
(NOTE: You could achieve the same effect by adding the student to the end of
your grading sheet, then using the SORTING function -- pressing F5 -- as
described above.)

   Pressing F7 from the Grading Menu will delete the student on the line (row)
your cursor is on at the time. As a safety check, the program will ask you to
verify that you really want to do this. When you respond with a Y, for Yes, the
student record will be deleted from this class.


                          Entering Grading Information                          ____________________________

   Grade descriptions are stored for each column of grades. The descriptions
include: (1) the date of the grade, (2) the type (or category) of grade, and (3)
a short descriptive note about the grade assignment. For example, a typical test
grade might have this description:

     DATE:          12/25/87
     TYPE:          Test
     DESCRIPTION:   Unit Test, CH. 2

   You will automatically be prompted to enter grade descriptive information
when you enter a column of grades using the F4 key. Thereafter, you can change
this information by pressing the F1 key while the hilighted cursor is in the
desired grade column.

   NOTE: It is important that you decide very early in the grading period about
which grade TYPEs you will use in a class. For each of these TYPEs you must
enter a grade average percentage (weight) later in the SCORING MENU program. If
you use a grade TYPE not defined in the SCORING MENU, then when you run the
current grade average report program you will see an error message listing the
undefined grade type.


                                Entering Grades                                _______________

   There are two ways to enter grades: a grade at a time, or a column at a time.
The first way is used to enter or correct a single grade, such as entering a
grade for a student who turned in his/her work late after you had already
entered the grades for the rest of the class. The second way is used to enter a
grade for every student in the class, such as entering yesterday's test grades
for your 4th period science class.

   Cursor Movement: Move the hilighted cursor around the grade area of the   _______________
screen by pressing the arrow keys. To go to the next screen of student grades,
press the TAB key. To go to the previous screen of student grades, press the
SHIFT and TAB keys simultaneously (called the BACK TAB). To go to the next
screen of student names, press the PAGE UP or PAGE DOWN keys. To move the top
left corner of the grade area, press HOME. To move to the bottom right corner of
the grade area, press END.




                                        28                                        28






   Entering a grade at a time: Move the hilighted cursor to the desired student   __________________________
and grade, and type the numeric grade. To remove a grade completely, press the
DEL key. NOTE: A grade of zero ("0") is absolutely not the same as a DELeted                                                   ___
grade. DELeted grades show up as blank (or empty) in the grade areas. Zero
grades show up as "0". DELeted grades are ignored in computing averages. Zero
grades count toward the student's average (in a strongly negative way).

   Entering a column of grades: This is the most typical method you will use to   ___________________________
enter student grades. Move the hilighted cursor to a grade column which is blank
(meaning that all of the students have no grades). Press F4. You will be
prompted to enter the integer value of a perfect score. This will normally be
"100" if you are working on a 100-point system. However, if you give a quiz with
38 questions and you want TGA to compute the percentile scores for you based on
the number of questions each student got right, then you would enter "38". Next,
you will be prompted to enter the grade descriptive information. Then, one by
one, you will be prompted to enter a grade for each student. Enter the grade by
typing the number (either the percentile score or the number of questions the
student got right) and pressing ENTER.

   NOTE: During column entry the GRADING MENU automatically turns on the NUMERIC   ____
LOCK so that your numeric keypad can be used to enter grades. The fastest way to
enter grades is to use your numeric keypad. Key the grade, then press ENTER
after each student's grade. After grades have been entered for all students in
the class, the GRADING MENU will "beep" to let you know you are finished
entering the column of grades. This feature is included in case you are looking
at your grade sheet, and not the screen, and you get ahead of yourself in typing
grades. After the column of grades is entered, the GRADING MENU turns off the
NUMERIC LOCK key (to its normal setting).

   NOTE: You do not have to enter a grade for every student. If you simply press   ____
the ENTER key without typing a grade, then the current grade for that student
remains.

   NOTE: You can also use the F4 grade column entry feature to fill-in missing   ____
grades in a column. Any student who already has a grade will be skipped.


               Special Feature - Additions to Final Grade Average               __________________________________________________

   The Grading Assistant has a special feature that permits you to add one or
more points to final student grade point averages for the grading period. Follow
these steps to use this feature:

1)   While you are in the Grading Menu for the class whose grades you want to
     adjust, move the cursor to any unused column of grades. Press F4 to tell
     TGA that you want to enter a column of grades.

2)   Enter anything you want for the column's grade DATE and DESCRIPTION. But
     the FIRST letter of the grade TYPE must be a plus sign (+). This plus sign                                        ____
     tells TGA that this column represents additions to the final grading period                                           _________
     average, rather than a normal grade type.

3)   Enter the number of points to add to each student's final average, just as
     though you were entering a normal grade. For students who do not get extra



                                        29                                        29






     points, you can either enter a zero (0), or just press the ENTER key. This
     allows you to give each student a different number of extra credit points
     if you wish.

When you run the current grade average report, you will see these extra credit
points shown at the far right of the report. You can have more than one set of
extra credit points during a grading period. They are simply accumulated and
shown once in the reports.


            Special Feature - Extra Points for Specific Grade Types            _______________________________________________________

   The Grading Assistant allows you to add extra points to a particular grade
type. This has the same effect as if you had simply added the points to an
existing grade of that type. Follow these steps to use this feature:

1)   While you are in the Grading Menu for the class whose grades you want to
     adjust, move the cursor to any unused column of grades. Press F4 to tell
     TGA that you want to enter a column of grades.

2)   Enter the column's grade DATE and the grade TYPE to which you want to add
     extra credit points. For the grade DESCRIPTION, make sure the first two
     letters of the description are two plus signs (++). These dual plus signs
     tell TGA that this column represents additions to the grading period                                          _________
     average for this grade TYPE. The points you enter will simply be added to
     the total number of points for this grade type before the average is                                                    ______
     computed. For example, if a student had ten DAILY grades and you added a
     special extra credit of 20 points to his DAILY score, you would have raised
     his overall DAILY grade by 2 points (20 total DAILY points divided by ten
     DAILY grades).

     Why two plus signs? This is simply a way to avoid the problem of         ___
     unintentionally entering a grade as extra credit. For example, if you
     entered a description of "+ and - problems" for a grade column in your math
     class, you wouldn't want TGA to misinterpret your description and change
     the grades to extra credit points. On the other hand, you need to be
     careful when entering this type of extra credit. Suppose you intended to
     enter DAILY extra credit points, and your description was "+ Extra Credit
     Points" (instead of "++ Extra Credit Points"). Since you only entered one                                                                           ___
     plus sign, TGA would treat this as a DAILY grade. So, the ten points you
     wanted to give your students for extra credit would, instead, be treated as
     a daily grade of "10". That would certainly harm their grades rather than
     helping them! The bottom line: be careful with extra credit points! TGA may
     misunderstand your intent if your description has too many or two few plus
     signs.

3)   Enter the number of points to add to each student's grade type score, just
     as though you were entering a normal grade. For students who do not get
     extra points, you can either enter a zero (0), or just press the ENTER key.
     This allows you to give each student a different number of extra credit
     points if you wish. Naturally, any or all of your normal grade types can
     have extra credits added, and you can add more than one set of extra credit
     points per grade type.




                                        30                                        30






When you run the current grade average report, you will see these extra credit
points reflected in the students' average grades for that type.


                          Entering Scoring Information                          ____________________________

   When you press F2 from the main Grading Assistant menu, you will display the
SCORING MENU. Your PC screen will clear, and you will see the following menu:

          The Grading Assistant -- SCORING MENU          _____________________________________

+----GRADE-FILES-----+ +--TYPE--++PCT++DROP?+   GRADE   >=
|                    | |        ||   ||     |     A+    __
|                    | |        ||   ||     |     A     __
|                    | |        ||   ||     |     A-    __
|                    | |        ||   ||     |     B+    __
|                    | |        ||   ||     |     B     __
|                    | |        ||   ||     |     B-    __
|                    | |        ||   ||     |     C+    __
|                    | |        ||   ||     |     C     __
|                    | |        ||   ||     |     C-    __
|                    | |        ||   ||     |     D+    __
|                    | |        ||   ||     |     D     __
|                    | +--------++---++-----+     D-    __
|                    |                            F     __
|                    |
|                    |
+--------------------+



   The GRADE FILES section of the menu can have the names of up to fifteen
grading files (which you created using the F1 key from The Grading Assistant
main menu). The TYPE section of the menu lists up to 12 grade types for each of
the grading files. Each grade TYPE has a grading percent (PCT) value and a low-
score DROP indicator. Your TYPE values should match the grade TYPE you entered
when you keyed grades into the grading file. The percentage values are defined
by you, according to your grade weighting scheme. The DROP indicator is either
"Y" for yes or "N" for no, to indicate whether or not you wish to automatically
drop the lowest score for each student in that category. A blank means NO.

   For example, a typical Speech class might have the following SCORING record:

     GRADING FILE   TYPE      PCT  DROP?     ____________   ____      ___  _____
     4SPEECH        Orals     55   Y
                    Tests     35   N
                    Homework  15   N

In this record, "4SPEECH" is the name of the grading file you created (using the
GRADING program) for 4th period Speech class. There are three types of grades:
"Orals" for in-class speeches, "Tests" for in-class tests, and "Homework" for
outside assignments. Respectively, these three categories of grades contribute
55%, 35%, and 15% toward the final grade for the grading period. The lowest




                                        31                                        31






"Orals" grade will automatically be dropped for each student in the class
(unless the student has only one grade).

   From the SCORING MENU, pressing F1 will allow you to enter or edit the TYPE,
PCT, and DROP values for the hilighted grading file. The grading file whose
type/percent/drop information you are editing will remain hilighted. You will be
prompted to enter a grade type (up to 8 letters), a grade percentage (up to 100
percent), and a Yes/No indicator to automatically drop the lowest grade for each
student. When you have entered all of the scoring information for a particular
grading file, just press F1 again to return to the menu of grading files.

   From the SCORING MENU, pressing F2 will allow you to enter the letter grade
range values. You probably won't need to do this very often. If you press F2,
you will be prompted to enter the numeric score at which each letter grade range
begins. For example, if the GRADE section looked like:

               A+   98
               A    95
               A-   92
               B+   90
               .......and so on

then you are saying that an "A+" is a score from 98 to 100, an "A" is from 95 to
97, an "A-" is from 92 to 94, a "B+" is from 90 to 91, and so on.

   But what do you do if your school doesn't use the "+" and "-" qualifier for
letter grades? Take heart, TGA can handle this case with ease. Let's suppose
your school uses 90 and over for an "A", 80-89 for a "B", 70-79 for a "C", 65-69
for a "D", and 64 and below for an "F". You define this to TGA by entering the
following grade ranges:

               A+   999
               A    90
               A-   90
               B+   90
               B    80
               B-   80
               C+   80
               C    70
               C-   70
               D+   70
               D    65
               D-   65
               F    0

These grade ranges tell TGA to skip "A+" (since no average will be above 999),
to use "A" for 90 and up, to skip "A-" and "B+", to use "B" for 80-89, and so
on...

   From the Scoring Menu, pressing F3 will insert a blank line above the                                                               _____
currently highlighted grading file. This might be useful if the order of grading
files is significant in your reports.





                                        32                                        32






   Pressing F4 from the Scoring menu will remove the currently highlighted
grading file entry from your list of grading files. It does not actually delete
the grading file; it merely removes it from the Scoring Menu list of classes.


                       Summary of Special Data Entry Keys                       __________________________________

   When you are entering textual information (like student names) or numerical
information (like grades), you may find the following special keys handy:

ESCAPE         signals The Grading Assistant program that you wish to exit

DEL            removes (deletes) the character above the cursor, or the whole
               grade

BACKSPACE      removes the letter/digit to the left of the cursor

END            positions the cursor to the end of the value

HOME           positions the cursor to the start of the value

arrow          moves the cursor around on the screen, in the direction of the
               arrow keys

INSERT         turns insert mode on or off to permit either overtyping (the
               default) or insertion of text. (This does not work on numeric
               values, like grades.)

When you are entering alphanumeric information (such as student names or class
descriptions), The Grading Assistant automatically removes any leading or
trailing blanks from your entry.

   When you are entering numeric information (such as student grades), The
Grading Assistant will automatically replace the current value if you begin to
type a new one. For example, if the hilighted grade is "76" and you type "8",
the "76" disappears and "8" appears in its place. As you type succeeding digits,
the digits are added to the right. In the previous example, if you next type
"6", then you will see a grade of "86" in the hilighted area.


                        Displaying and Printing Reports                        _______________________________

   When you are in The Grading Assistant main menu and you press F3, you will
display the Reports Menu, shown below:













                                        33                                        33







                   The Grading Assistant -- MAIN REPORTS MENU                   __________________________________________

                  +-------------+Main Reports Menu+----------+
                  |F 1| Current Grading Period Reports Menu  |
                  |F 2| 1 Grade Period:  Averages by Student |
                  |F 3| Yearly:  Averages by Class/Student   |
                  |F 4| Yearly:  Averages by Student         |
                  |F 5| Yearly:  Students Changing Classes   |
                  | Q | Exit                                 |
                  +------------------------------------------+


Each of the items in this menu represents a different report. To begin a report,
simply move the cursor bar up or down to highlight the desired report, then
press ENTER, or, press the Function Key noted beside the report. With the
exception of the class roster (which doesn't make much sense to display), all
reports can either be viewed at your PC or printed on your local printer. Any of
the reports can be aborted, if necessary, by pressing the ESCAPE key while they
are running. After noticing the ESCAPE, TGA will stop the report at the next
convenient breaking point and return you to the Reports Menu. The available
reports are described below.


                      Current Period Grade Average Reports                      ____________________________________

   If you press F1 from the Main Reports Menu, you will display the Current
Period Reports Menu. TGA has so many reports that they cannot all fit neatly on
one menu. Thus, the seven reports which use information from your current
grading period have all been collected in a separate menu.


                          Current Period Reports Menu                          ___________________________

                    +------+Current Period Reports Menu+--+
                    |F 1| Averages by Class/Student       |
                    |F 2| Student Interim Grade Report    |
                    |F 3| List of Class/Student Grades    |
                    |F 4| Student ZERO Grades Listing     |
                    |F 5| Print Class Roster              |
                    |F 6| Post Class/Student Averages     |
                    |F 7| Individual Student Grade Report |
                    | Q | Exit                            |
                    +-------------------------------------+

When you press F1 from the Current Reports Menu, the Current Grade Average menu
will be displayed. This report shows current grade averages for each class and
for each student in that class.

When you press F2 from the Current Reports Menu, you will run the Interim Report
program. This program produces an individual report for each of your students
whose overall current grade average is less than a cut-off score which you
specify.




                                        34                                        34






To display or print a listing of the grades for one or more classes
(essentially, this is a snapshot of what you see for a class while in the
Grading Menu), press F3 from the Current Reports Menu.

To generate a listing of students who have one or more ZERO grades in a class,
press F4 to run the ZERO Grades Listing report.

To print a roster of students in one or more of your classes, perhaps for use in
recording grades or attendance, press F5 from the Current Reports Menu.

To post class grades at the end of a grading period, showing student identifiers
rather than names to maintain anonymity, press F6 from the Current Reports Menu.

To generate an individual report for each student in selected classes, press F7
from the Current Reports Menu. This report will list each of the students'
grades, and it shows their overall grade average for this period. Like the
Interim Report, this report allows you to selectively include/exclude students
from the report.

   Except for the Class Roster Report, all of these can be either displayed on
your PC monitor or printed to your local printer. The report program will ask
you to select the desired output method from a menu.

   Regardless which report you select, the reporting program uses the
information you have previously entered from the GRADING MENU and the SCORING
MENU during this period. The report will display a menu with the names of all
your grading files on the screen, and give you the option to either SELECT or
OMIT each one. For example, if you only wanted to print your first period
Science class, you can omit the other grading files by positioning the hilighted
cursor over them one at a time and pressing "O", for OMIT. If you change your
mind about omitting a file, you can position the cursor on it and press "S" for
SELECT. Each grading file has an indicator on the screen which either says
"SELECT" or "OMIT". When all files are marked appropriately, press RETURN to
start the display or printing. Or, press ESCAPE to return to the main menu.

   For the files you decide to display/print, the report programs read the class
grading files and display/print current student information. Any errors which
the program encounters, such as misspelled grading file names or undefined grade
types, are either displayed on your PC screen or printed on your listing.

   All of the report programs check to make sure your printer is ready if you
try to print the report. If your printer isn't ready, the program will beep and
display an error message. All you need to do is correct the situation (for
example, by turning on your printer or by adding paper to it) and press ENTER to
continue.


            Entering Heading/Footing/Comments on the Interim Report            _______________________________________________________

   The Interim Report is a little different from the others. Many schools have
their own formats for these reports, and they may require information not
available to The Grading Assistant (such as a class section number or the dates
of the grading period). To give you the maximum flexibility, the Interim Report
has four sections. Section 1 is the Heading -- up to ten lines of text that you



                                        35                                        35






define. Section 2 is the main body of the report, student grade averages
computed by TGA. Section 3 is up to ten lines of text for individualized student
comments which you may enter. Section 4 is the Footing -- up to ten lines of
text that you define.

   For example, a typical Interim Report would have a Heading that gave the name
of the school system and the grading period number or dates. The Footing for
this report might explain the purpose of an Interim Report, or give your office
hours and telephone number. Using the Heading and Footing, you can personalize
your Interim Reports. Both the Heading and Footing are optional. If you omit
them (leave them blank) then nothing is printed for them. The Heading and
Footing are the same for every student.

   In addition, you can enter an individual comment for each student if you
choose. If you want to enter individual student comments, TGA will prompt you to
enter comments for each student whose grade is below the cut-off. Comments are
optional, and if you omit them for a student (by leaving them blank) then
nothing is printed for them.

   To enter text for the Interim Report Heading, Footing, or Student Comment,
you simply type the desired text in the hilighted area on the screen. TGA will
prompt you once, at the beginning of the report, to enter the Heading and
Footing, and again for each student whose average is below the grade threshold
you set. TGA will pause while you type the student comments, then print them
(after you press ESCAPE) and go on to the next student.

   While you are entering your Heading, Footing, or Student Comments, TGA acts
like a typical typewriter. You simply type the desired text, pressing RETURN (or
ENTER) to go to a new line. Use the arrow keys to move the cursor. HOME and END
take you to the start and end, respectively, of the current line. DELETE removes
the character above the cursor. BACKSPACE removes the character to the left of
the cursor. INSERT toggles you between insertion and overtype modes. (The cursor
is large while you are in insertion mode, and normal sized otherwise.) It is
best to think of the comment as one long stream of letters, rather than ten
lines. As you delete a character, the entire text will move backwards -- not
just the current line.

   To insert a blank line, just move the cursor to the line where you want a new
line to be inserted and press ALTERNATE and S (for Split) at the same time. To
delete the current line, just press ALTERNATE and D (for Delete) at the same
time. To clear the entire text field, press ALTERNATE and C (for Clear)
together.

   If you don't want to enter comments for a particular student, just leave the
comment area blank. TGA will skip the entire comments section printout for a
student if the comments are blank.

   NOTE: TGA does not save the student comments you enter. It merely formats and   ____
prints them on the printed report. The Heading and Footing information, however,
are stored permanently in files named INTERIMS.HDF and INTERIMS.FTF,
respectively, since you will probably wish to use them many times.

   NOTE: TGA does not prompt you to enter Heading, Footing, or Student Comments   ____
if you are displaying the report rather than printing it.



                                        36                                        36







               Including/Excluding Students on the Interim Report               __________________________________________________

   The Interim Report permits you, if you are printing the report rather than
displaying it, to selectively exclude students. Why might you use this feature?
Perhaps you have a class in which special education students have been
"mainstreamed". All of the students in your class, except the special education
students, might be given an interim grade report if their grades are below 70%.
Or, alternatively, you may have a class with a mixture of average and high
achievement students. You might wish to send interim reports for high
achievement students whose grades drop below a "B". In any case, TGA lets you
selectively exclude students from the printed report.

   When you run the printed Interim Report program, TGA will ask you if you wish                    _______
to be able to selectively exclude students. If you enter "Y", for Yes, then you
will be prompted for each student whose grade is below the interim report
threshold. If you enter "N", for No, then all selected students will be printed
in the report and you will not be prompted for each one.

   If you elect to use selective exclusion, then for each student whose average
is below the threshold you will be prompted to enter:

               Y--yes, include this student in the report
               N--no, exclude this student from the report
               I--include this student and all the rest in this class
               X--exclude this student and all the rest in this class

   The "I" and "X" options are simply conveniences that keep you from having to
enter "Y" or "N" for the rest of the students in a class. Note that "I" and "X"
only hold for the current class.  If you select several classes for interim
reports, the exclusion prompts will begin anew with each class.


                        Saving Student Names for Labels                        _______________________________

   If you are printing the Interim Grade Average Report, the program will ask if              ________
you wish to save the names of students for use in printing gummed labels. If you
wish TGA to create a file named INTERIMS.TGA that contains the names of students
whose grade averages are below the threshold you set, simply answer Y (for Yes)
to that prompt. Otherwise, answer N (for No). If you answer Yes, an INTERIMS.TGA
file of ASCII text will be created. Refer to the TGA Information Menu for
additional information about printing gummed address labels.


                          End-Of-Year Grading Reports                          ___________________________

   At the end of the grading year, or during the year if you wish, you can
review the cumulative grade averages for your students. The easiest way to do
this is to run the year-to-date grade average report. To do this, select F3 from
the Reports Menu to display the end-of-grading-period menu.

   The year-to-date report program looks for one or more files named
"YEAREND.!nn" where "nn" is the grading period number from 01 to 12. (Those
files are created at the end of grading periods when you select the F1 key from



                                        37                                        37






the end-of-grading-period menu.) The program reads these saved grade average
summary files, and generates a combined report for each class and student. The
report shows the student average for each grading period, and computes a year-
to-date numerical average and letter grade.

   NOTE: This report matches grade averages from each grading period by using   ____
the class subject, class period, and student name. For example, all of the
grading period average records for subject "English", "1st" period, student
"Doe, John" would be collected to compute the year-to-date grade average. If you
change the name of a student during the year, or if you move the student from
one class period or subject to another, or if you change the class subject,
there is no way for this report to understand the change you made. In that case,
the report will print some of the grading period averages for the student in one
place, and the rest in another. There is, unfortunately, no way around this
problem since: (1) you may have the same student in more than one class subject
or period, (2) you may have different students in different classes with the
same name, and (3) you may have students who join your class at midyear, or who
leave it. TGA is good, but it can't read minds.

   There is, however, one alternative report you might find useful in this case.
By pressing F5 from the Reports Menu, you will display or print the year-to-date
averages for all students who changed periods within the same subject. In other                              _______________________________________
words, if Johnny Appleseed changed from your 2nd period English class to your
3rd period class, this program will notice that fact and display his grade
average summary regardless of the class period to which he is currently
assigned. In combination with the other reports, this should permit you to
compute almost 100% of the yearly averages for your students.

   If you want the Year-to-Date Grade Average Report, but you'd prefer to have
it sorted alphabetically by student name rather than by class, press F4 from the
Reports Menu. This report gives you the same results as pressing F3, but sorted
by student name. (Naturally, this sort is only useful if you entered student
names in LASTNAME, FIRSTNAME format.)

   There is one additional report you might find useful at the end of a grading
period. Some schools require their teachers to keep student grade averages by
class, but to enter them into another master grade register alphabetically by
student name. That means you would have to flip through a lot of pages in your
grade book (or TGA reports) to find the students in alphabetical order. But by
pressing F2 from the Reports Menu, you can generate a report for a single
grading period, listing all of your students in alphabetical order -- regardless
of their class period or subject. You may never need to use this report. But if
your school is like many, it will save you hours of flipping through pages.


                         Starting a New Grading Period                         _____________________________

   OK, your grading period is over and all of your class average reports have
been run. Report cards are handed out. So what do you do to start the next
grading period?

   STEP 1: You need to make a permanent copy of the class averages for use at   ______
the end of the grading year. To do this, you select the end-of-grading-period
menu by pressing F4 from The Grading Assistant main menu. You will see the



                                        38                                        38






following menu appear on your PC screen:

              The Grading Assistant -- END-OF-GRADING-PERIOD MENU              ___________________________________________________

              +------------+End-of-Grading-Period Menu+---------+
              |F 1| Save grades for the year-end reports        |
              |F 2| Reset class grades for the year-end reports |
              |F 3| Edit previous grade average summary files   |
              | Q | Exit                                        |
              +-------------------------------------------------+

Use the cursor arrows to select the desired operation, then press ENTER to
execute it. Or use the function keys instead. Press F1 to save the grade
averages. You will be prompted to enter the grading period number (from 1
through 12). For example, if you are teaching in a six-weeks grading period and
this is the end of the second six-weeks period, you would enter "2". This
program creates a grade average summary file named "YEAREND.!nn", where "nn" is
the grading period (from 01 to 12).

   What do you do if you run the grade average saving program prematurely? Don't
worry. Just wait until your grades are truly final, then run it again. You will
be prompted to confirm that you want to overwrite (replace) the previous grade
average summary file for this grading period. Respond with "Y", and you're back
in business.

   Some schools have a MINIMUM grade average so that students who have one bad
grading period won't ruin their entire year's average. For example, your school
might have a policy that no grading period average below 65 is permitted. TGA
helps you here by prompting you to enter the minimum grade average permitted. If
you enter 65, for example, then any student whose overall grade is below 65 will
be stored for the year-end average as 65. If you don't want to use this feature,
just enter zero (0) for the minimum average -- then whatever grade a student
earns is what TGA will save. NOTE: This feature only applies to the grade
average stored for use in the single-grading-period and year-end reports. It
does not affect the current or interim grade average report grades.

   STEP 2: You should make a backup copy of the floppy diskette or hard disk   ______
directory which has your current grading files on it. That backup copy becomes
your permanent record of the grades and averages. Put the backup diskette aside
for safekeeping. The next section tells you how to make the backup copy.

FLOPPY DISK: If you have a floppy disk system, use the following steps to make___________
your diskette copy:

1.   Exit from TGA to DOS. Put your DOS diskette in drive A:, then enter:

                    A:DISKCOPY A: B:

2.   You will be prompted to insert the source and target diskettes. Put your
     Grading Assistant data diskette (the one with the grade files for this                       _____________
     grading period) in the A: drive, and a blank diskette in the B: drive, when                                            ______________
     you are prompted to do so by the DISKCOPY program. The DISKCOPY command
     will make the B: diskette an exact duplicate of the A: diskette. NOTE: You




                                        39                                        39






     don't need to format the new diskette first since DISKCOPY will format it
     if necessary.

3.   When the DISKCOPY command finishes, put the diskette in the A: drive away
     for safekeeping. Use the diskette in the B: drive for the next grading
     period.

HARD DISK: If you have a hard disk system, use The Grading Assistant Utility_________
Menu BACKUP program (F6) to copy the data files to a blank, formatted floppy
diskette or to another hard disk directory.

   STEP 3: You need to "reset" your grading files for the next grading period --   ______
erasing all of the grades from the period just ended. Start The Grading
Assistant, and select F4 from the main menu. The end-of-grading-period menu will
appear. From that menu, select the F2 key to remove all grades in all grading
files. Respond to the "are you sure?" prompt by pressing Y, for yes.

   The reset program reads the SCORING file to identify your grading files.
Then, one by one, each grading file is copied and all student grades are
removed. All other class and student information is retained. When the program
completes, your grading files are ready for the next grading period. Please be
careful! If you prematurely run the grade reset program, it will erase all of
your data for the current grading period. (Then, only a backup copy can save you
from re-keying the information.)

   By pressing F3 from the end-of-grading-period menu, you can edit the names
and grades of students in any previously saved end-of-grading-period summary
file. This might be useful for: correcting the misspelling of a student's name
throughout several grading periods, deleting the records of a student who
transferred from the school, adding the records of a student who transferred
into the school, or correcting a grade average that was manually adjusted after
the grading period was final. Be careful! The grades and names in TGA grading
period summary files reflect the ones you presumably filed with the school
system. Use this feature judiciously.


                                 DOS Utilities                                 _____________

   DOS provides commands to display file names (DIR), copy files (XCOPY and
COPY), erase them (DEL and ERASE), and rename them (RENAME), as well as programs
to set (CHDIR) and list (DIR) DOS disk and path identifiers. If you are familiar
with these commands, then you may not need to use the TGA DOS utility menu. This
menu simply provides a way for you to perform those functions without leaving
The Grading Assistant program.

   If you wish to use the DOS Utilities, you begin by selecting the F5 key from
The Grading Assistant main menu. The PC screen will clear, and the following
menu will appear:









                                        40                                        40






                     The Grading Assistant -- UTILITY MENU                     _____________________________________

                  +----------------+Utility Menu+------------+
                  |F 1| Change the name of a file            |
                  |F 2| Erase a file                         |
                  |F 3| Make a duplicate copy of a file      |
                  |F 4| Change the TGA data file disk/path   |
                  |F 5| List the files in a disk/path        |
                  |F 6| Make a backup copy of your files     |
                  |F 7| Restore your files from a backup     |
                  |F 8| Temporary exit to DOS;  EXIT returns |
                  | Q | Exit                                 |
                  +------------------------------------------+

Use the cursor arrows and ENTER key to select the desired function, or press one
of the seven function keys (F1 through F8) to execute it. The program will
prompt you to identify the file to be renamed, erased, or copied, or the
disk/path to be listed or changed. If you change your mind about performing this
function, simply press ENTER without typing a file name, and the program will
return to this menu. Press "Q" to exit from this menu and return to The Grading
Assistant main menu.

   One use you might make of the UTILITY program is when you have the same
students in several classes. For example, suppose your class remains the same
for 1st period Reading, 2nd period Spelling, and 3rd period Social Studies. You
can use the GRADING MENU program (F1 from the main Grading Assistant menu) to
enter the students in your 1st period Reading class. Then you can use the
UTILITY COPY program (F3 from the UTILITY menu) to duplicate the 1st period
class for 2nd and 3rd period. That will keep you from having to type the student
names in each class. Now, all you will need to do is correct the class period
and subject information the next time you use the GRADING MENU program for your
2nd and 3rd period classes.

   Pressing F4 is useful if you want to change the disk and directory on which
TGA should look for your grading files. There are several reasons you might want
to do this. First, you may have forgotten to tell TGA the name of your disk and
path when you started the program. No problem. Just go to the Utility Menu,
press F4, and tell TGA the disk/path. Another reason you might want to use this
feature is if several teachers are sharing a single PC, and each keeps their
grading files in a separate directory. With the F4 feature you can switch
between them easily.

   The file listing feature (F5) is handy if you can't remember the name of a
particular file. It gives you a list of all the files in a directory, similar to
the output of a DOS DIR (directory) command.

   Backing up your data files (using F6) is crucial. You never know what might
happen to your data -- your hard disk might crash, your dog might chew your
floppy disks, or your pre-schooler might use your floppy drive for a toaster.
The safest approach is to make backup copies of your data to either another hard
disk path and/or to a floppy diskette. To be truly safe, keep the backup copies
and your original TGA diskette in another location (perhaps locked in your
office). Then, if your data is ever damaged, you can use TGA to restore the data
files (using F7).



                                        41                                        41






   Sometimes you need to temporarily suspend your program, drop into DOS to do a
few commands, then return to the program. TGA lets you do this easily from the
Utility Menu. Simply press F8 from the Utility Menu and you will temporarily
drop into DOS mode. When you are ready to return to TGA, just enter "EXIT" as a
DOS command. Note: TGA remains loaded in memory while you are in DOS, so you             ____
will have about 300K (300,000 characters) less memory while in temporary DOS
mode than you normally have. Also, TGA looks for the location of your
COMMAND.COM file (the main DOS program) by searching for your COMSPEC (don't
worry if you don't know what a COMSPEC is -- it is automatically setup for you
when you load DOS). Naturally, for TGA to be able to drop into DOS, you need to
have a copy of COMMAND.COM in whichever disk and path your COMSPEC points to.
Usually this is in C:\ on your hard disk or A:\ on your floppy disk system.


                                Detailed Example                                ________________

   The following is a detailed example of how you might use The Grading
Assistant. Let's suppose you teach two classes: a first period English class and
a second period Science class. Your first step after installing The Grading
Assistant will be to set up a grading file for each class.

1.   You start The Grading Assistant by entering the command: TGA

2.   The main Grading Assistant menu appears on your screen. You select the
     GRADING MENU by pressing F1.

3.   The grading screen appears. You are prompted to enter the name of the
     grading file you wish. Since you do not yet have any grading files, you
     invent an appropriate name for the first period class; you enter: 1ENGLISH

4.   The program recognizes this as a new file name, and asks you if you want to
     create it. You enter: Y (for YES)

5.   You will be prompted to enter the class description (TEACHER, SUBJECT, and
     PERIOD). Enter each by typing the desired information and pressing ENTER
     after each one. You will be prompted to enter STUDENTS. One at a time, type
     the name of your students. The format of the names doesn't matter. It can
     be LAST, FIRST (Doe, John) or FIRST LAST (John Doe) or whatever you wish.
     (I recommend Last, First.) If you have less than 45 students, when you have
     entered the last student name, merely press ENTER when you are prompted for
     the next name. This signals the Grading Menu that all names have been
     entered.

6.   Press ESCAPE to signify that your grading file is complete. The program
     will ask you if you want to save these changes. Enter: Y

7.   The program will ask you if you want to enter grades for another file.
     Since you want to set up the second period class, enter: Y

8.   A new (blank) grading screen will appear and you will be prompted for the
     desired grading file to use. This time, enter an appropriate name for your
     second period class: 2SCIENCE





                                        42                                        42






9.   Repeat steps 5 and 6 for your second period class. When you are finished,
     you are ready to end the grading menu because your grading files are
     created. This time, when the program asks you if you want to enter grades
     for another file, enter: N (for NO)

10.  You are now back at the main Grading Assistant menu again. You can type Q
     (for QUIT) to end the program.

   Let's now suppose you are ready to enter grades for your first period class.
You need to think about the types of grades you will score in that class. For
example, you might decide to score DAILY grades, TEST grades, and WRITING
projects. Start The Grading Assistant just like you did earlier by entering: TGA

1.   From The Grading Assistant main menu, select the GRADING MENU by pressing
     F1.

2.   The grading menu will appear, and you will be prompted for the name of the
     desired grading file. Enter: 1ENGLISH

3.   Since the 1ENGLISH grading file already exists, the information from the
     file will be retrieved and displayed on the screen. You are now ready to
     enter grades.

4.   Move the cursor (the hilighted area on the screen) by pressing the arrow
     keys until you are in a column which has no grades. Press F4 to enter an
     entire column of student grades. You will be prompted to enter the integer
     value for a perfect score. Just press RETURN if it is "100". Next, you will
     be prompted to enter the DATE, TYPE, and DESCRIPTION for the grade column.
     Type each in turn and press ENTER after each one. Remember: you decided to                                                       ________
     use DAILY, TEST, and WRITING as your grade types. So you should type one of
     these three choices in response to the TYPE prompt.

5.   One by one, the hilighted cursor will prompt you to type the grade for the
     student on that row. Enter each grade by typing the numeric grade and
     pressing ENTER. You can use either the number keys at the top of the
     keyboard or the ones on the numeric keypad. If a student does not have a
     grade, simply press ENTER without typing a grade. When you have entered a
     grade for every student, the computer will beep to signal the end of the
     column.

6.   Repeat steps 4 and 5 until all grades are entered. If you made any mistakes
     keying grades, simply move the cursor to the incorrect grade and retype it.

7.   Press ESCAPE to end grade entry. Do you want to save these changes? Enter:
     Y

8.   Do you want to enter grades for another class? Enter: Y

9.   Repeat steps 2 through 7 for the second period class, substituting
     "2SCIENCE" for "1ENGLISH" as the grading file name. When you are finished,
     respond by entering N to the prompt about entering grades for another
     class. You are now back in the main Grading Assistant menu.





                                        43                                        43






10.  OK, let's define these two classes to our Scoring Menu. Press F2 from the
     main menu (to display the Scoring Menu). Respond with "Y" to the prompt
     about loading recently created grading file names. TGA will load the names
     for you. Then, press ESCAPE and enter "Y" to exit and save the files.

11.  Last, let's print class rosters for these two. Press F3 from the main menu,
     to display the Reports Menu. Press F1 to select the Current Period Reports.
     Then, press F5 to select the Class Rosters report. You will see a listing
     of these two grading files, each with the word "Select" to the right of it.
     Since you want to print rosters for both classes, make sure your printer is
     powere on and ready to print, then press ENTER. The Grading Assistant will
     print a one-page roster for each class. When the printing is complete, you
     will again be in the Current Reports Menu. Now press "Q" three times (once
     to exit from the Current Reports Menu, again to exit from the Reports Menu,
     and a final time to leave The Grading Assistant and return to DOS).

   Let's suppose it is the middle of the grading period, and you are ready to
print grade averages for your students to see how they are doing. You need to
first tell The Grading Assistant how you wish to compute grade averages for each
class. Start the program as before, by entering: TGA

1.   From the main Grading Assistant menu, press F2 to run the SCORING program.
     The SCORING menu will appear on the screen.

2.   TGA will ask you if you wish to load the previously created grading file
     names. Enter Y, for Yes, if you have any. The file name 1ENGLISH will be
     listed among the grading files. Move the cursor up/down until that file is
     highlighted.

3.   Press F1 to enter the grade types, percentages, and low score drop
     indicators for this class.

4.   Notice that the first line (initially blank) in the TYPE column will be
     hilighted. Enter the first grade type you decided to use. (Remember: you
     decided to use DAILY, TEST, and WRITING.) You enter: DAILY

5.   Now the first line of the PCT (short for percentage) column is hilighted.
     Enter the percentage (from 1 to 100) of the final grade which this grade
     type will make up. Let's suppose DAILY grades are worth 50%. You enter: 50

     NOTE: You do not enter the percent sign (%). "50" means "50%".               ______

6.   Now the first line of the DROP? column is hilighted. Enter Y if you want to
     automatically drop the low DAILY score for each student. Otherwise, just
     press ENTER. Let's suppose you enter: Y

     If you don't enter anything at all, The Grading Assistant assumes you do
     not wish to drop the low grades.

7.   Repeat steps 4 through 6 for the other two grade types: TEST and WRITING

8.   There are no more grade types to enter, so you just press the F1 key (the
     same key you pressed to start this process) when prompted for the next TYPE
     category. (Or, you can press the ENTER key 9 more times.) If the total of



                                        44                                        44






     your category percentages does not total 100, you will see an error
     message. But you can ignore it if for some reason you want the total to be
     more or less than 100.

9.   Repeat steps 2 through 8 for each additional grading file. Each file goes
     on a separate line of the GRADE FILES column. As you move the hilighted
     cursor up/down the column, the TYPE, PCT, and DROP values for that grade
     file will be displayed.

10.  When you are finished, press ESCAPE to signal that you are ready to exit.
     You will be asked if you want to save these changes. Enter: Y

11.  You are now back in the main Grading Assistant menu.

   Let's suppose you are ready to print a listing of student averages. You are
in the main Grading Assistant menu, so press F3 to run the Reports Menu program.
From that menu, press F1 to select the Current Period Reports Menu. Press F1
from that menu to run the Current Grade Average report. Select the "Print"
output option from the menu. You will see a list of your grading files (as
defined in the SCORING MENU). Mark any files you wish to OMIT by moving the
cursor to hilight the file and pressing "O". All other files (not omitted) will
be printed. When you are ready to print, press RETURN.

1.   If you told TGA to DISPLAY your report, at the end of each screenfull of
     information you would be asked to press the ENTER key to continue the
     display on the next screen. But since you told TGA to PRINT your report, a
     one-page report will be printed for each grading file you selected. When
     the printing is complete, you will be back in The Grading Assistant main
     menu.

2.   You can review the displayed/printed report to see for each student:
     his/her average for each grade category, his/her overall average as a
     numerical score, and his/her overall average as a letter grade. A count of
     students by grade letter (A, B, C, D, and F) is also shown on the report.

   Now you wish to send home a note to all parents whose children are failing in
your classes. In your school, a grade average below 70 is failing. You select F2
in the Current Period Reports Menu, to print student interim grade reports.
Select the "Print" menu option. Press "N" to skip the entry of individual
comments for each student. The program asks you for the grade below which
students will be reported. You enter: 70. The program generates a report (three
students per page) for all students in all classes who are failing. At the end
of the reports, press ESCAPE to return to the Reports Menu, and press ESCAPE
again to return to the Main Menu. One more ESCAPE and you are back in DOS.

   Congratulations! You have now run through a complete cycle of grade
definition and entry during a grading period.


                          Graphing Your Grade Averages                          ____________________________

   This version of The Grading Assistant includes the first release of a
graphics display program named TGAGRAPH. If your PC has graphics capability,
then you can use TGAGRAPH to display current grade averages and previous grading



                                        45                                        45






period averages as simple bar graphs. This might be useful to help you look for
unusual grade distributions.

   The TGAGRAPH program and data files were automatically installed when you
installed the main TGA program. To run the program, begin as you do to run the
main TGA program. But instead of typing "TGA", enter:

                   TGAGRAPH    -- or --    TGAGRAPH disk/path                                                    _________

where "disk/path" is an optional DOS disk and/or path identifier that specifies
where your data files are located. The syntax for the disk/path is the same as
for the main TGA program. When you run the program, you will see the following
menu appear:

                       The Grading Assistant -- GRAPHICS MENU                       ______________________________________

                  +-----------------+Main Menu+--------------+
                  |F 1| Display current grade average graphs |
                  |F 2| Display prior period average graphs  |
                  | Q | Exit                                 |
                  +------------------------------------------+

Press F1 to display a bar graph for each selected class in the current grading
period. Your menus and graphs will represent the same information as shown in
the Current Grade Average reports seen by pressing F1 from the TGA Reports Menu.

Press F2 to display bar graphs for each class in any of the prior grading
periods. Your graphs will represent the same information as shown in the Grade
Period Summary reports seen by pressing F5 from the end-of-grading-period menu.

Press "Q" or Escape to exit from the TGAGRAPH program.

   TGAGRAPH begins by checking your PC to find out the type of graphics display
and monitor you have. It automatically loads the appropriate graphics interface
(one of several data files whose file extension is BGI). It is important that
the BGI files and the TGAGRAPH.EXE program are both in the same DOS disk and
path, and that you begin executing TGAGRAPH while that directory is the current                                                  ____
directory. Otherwise, the TGAGRAPH program will not be able to find the graphics
interface files and the program will end with an error message.

   NOTE: There are dozens of different types of graphics display adapters and
monitors, each with its own peculiarities. If you seem to have trouble
displaying graphics with TGAGRAPH, try running the TGASETUP program and entering
the type of adapter/monitor your PC has. In most cases, this will solve the
graphics display problems. If you have one of the autoswitch adapters that
emulates many different types of adapters, you should run TGASETUP to tell TGA
which one you prefer.

   TGAGRAPH will display bar graphs one at a time. Just press RETURN to view the
next one. After the last graph has been displayed you will be returned to the
main TGAGRAPH menu.






                                        46                                        46






                         Printing a Copy of your Graph                         _____________________________

   How do you print copies of the bar graphs you see on your PC? Well, if you              _____
have a dot matrix printer that is compatible with the Epson FX graphics mode,
the IBM Graphics Printer mode, or the IBM Proprinter Graphics mode, then it is
easy. Before the first graph is displayed, you will be asked if you wish to be
able to print copies of the graphics. If you enter "Y", for yes, then you will
be prompted to enter the type of graphics your printer supports:  "E" for Epson
FX, or "I" for IBM Graphics/Proprinter. You will also be prompted to make your
printer ready if it isn't already. Then, after each graph is displayed on your
screen, you can either press RETURN to skip to the next graph, or "P" (for
Print) to print that graphic.

   If you have a CGA or MCGA graphics card/monitor, then you can also use the
DOS GRAPHICS command. Just run the GRAPHICS command before you run TGAGRAPH.                                                    ______
(See your DOS manual for instructions.) Then, when you want to print a graphic
that is displayed on your PC, just press the Print Screen key (or press SHIFT
and Print Screen on some keyboards). The DOS GRAPHICS command will do the rest,
translating a copy of the screen and printing it on your IBM/Epson compatible
printer.

   If you have a Hercules card or one of many varieties of EGA/VGA graphics
cards/monitors, then your graphics card may have also come with a special
program that works like the GRAPHICS DOS command does for CGA and MCGA. Just run
that program before you execute TGAGRAPH, then use the Print Screen feature to
print the graphic.

   You will also find a variety of shareware and commercial products that
replace the DOS GRAPHICS command and work on a wide range of PC graphics
cards/monitors. You will only need to use these if your printer doesn't support
the Epson FX, IBM Graphics, or IBM Proprinter graphics standard.


                          Student Information Records                          ___________________________

   This version of TGA contains the first release of a new product -- TGAINFO --
which helps you keep student information records. There are many good reasons
for keeping some basic name and address information for your students. You may
need to call the students or their parents at home or at the parent's office.
You may need to send information to the students or their parents at home. The
Grading Assistant makes it easy for you to keep this information by providing a
separate program named TGAINFO. To run this program, just enter:

                       TGAINFO -- or -- TGAINFO disk/path                                                _________

where disk/path is an optional DOS disk identifier and path name for your      _________
grading files. The screen will clear and you will see the following menu:










                                        47                                        47






             The Grading Assistant -- STUDENT INFORMATION MAIN MENU             ______________________________________________________

                  +-----------------+Main Menu+-------------+
                  |F 1| Add students from grading files     |
                  |F 2| Edit or Delete student information  |
                  |F 3| Run Student Information Report      |
                  |F 4| Interim Grade Average Report Labels |
                  | Q | Exit                                |
                  +-----------------------------------------+

Press one of the four function keys, or Q to quit and return to DOS.

F1   This will display the student information loading menu. You will be
     prompted to enter the name of an existing grading file. The names of
     students from that file will automatically be loaded and displayed in a
     menu. You can enter or edit the student information records for each
     student in the class.

F2   This will display the student information editing menu. The names of
     students that you have previously loaded from your classes (using F1,
     above) will be displayed. You can edit the address information, or delete
     the student information record entirely, for any of these students.

F3   This lets you display on the PC or print on your printer a report of the
     student names and addresses.

F4   When used in conjunction with the Interim Grade Average Report from the
     main TGA program, this can be used to print gummed address labels for each
     of the students to receive an interim report.

Q    Press "Q" to quit and return to DOS when you are finished.

If you press F1 or F2, you will see the student information loading/editing
menu.























                                        48                                        48






               Loading/Editing Student Information               ___________________________________

+--------------------------------------------------------------+
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
|                    |                    |                    |
+--------------------------------------------------------------+
                 +-----HOME------++-----WORK------+
      Telephone: |               ++               |
Parent/Guardian: ++                              ++
        Address:  |                              |
                  |                              |
                  +------------------------------+


                   Loading Student Names from a Grading File                   _________________________________________

   If you pressed F1 from the main TGA Information Menu, then you will be
prompted to enter the name of a grading file. Simply type the name of the file
and press RETURN. If the grading file name is correct, the upper part of the
Loading Menu will display the names of students in that class.

   You can use the cursor to highlight a student, press RETURN to select the
student, and fill in the information at the bottom of the menu for the student.
If you want to enter information for all of the students in a class, just press                                     ___
F1 from the Loading Menu. One by one, each of the students will be automatically
selected and you will be prompted to enter information for that student. Just
type the appropriate telephone numbers, parent's names, and address, and press
RETURN after each entry.

   If you are editing the information for a single student and you want to
duplicate for the selected student the same address information as the student
you just entered, just enter the information for the first student, highlight
the second student's name, then press F2 instead of pressing RETURN. The
information at the bottom will be filled in identically to that of the previous
menu entry.

   Press ESCAPE when you have made all of the additions or corrections you wish
to make for this class.






                                        49                                        49






                          Editing Student Information                          ___________________________

   If you pressed F2 from the main Student Information menu, then you will see
the names of the first 45 students from your loaded classes. Use the Page
Up/Down keys select the desired group of student names. Move the cursor to
highlight the desired name to change, then press RETURN to select a highlighted
student whose information is to be edited. Or, press F1 to delete the student
record entirely.


                          Printing Student Information                          ____________________________

   If you pressed F3 from the main Student Information menu, then you will be
asked whether you wish to print the report or display it on your PC. Select the
"Print" or "Display" option from the output selection menu. Both of the reports
lists students alphabetically regardless of their class.


                             Printing Gummed Labels                             ______________________

   If you pressed F4 from the main Student Information menu, then you will be
asked if you wish to print gummed labels or merely display their format on your
PC. If you elect to print the labels, you should replace the paper in your
printer with gummed labels that are: 1 inch high, 3-1/2 inches wide, and one
column to a page. The program will automatically print the labels for all
students who were identified in an earlier Interim Grade Average Report.

   Refer to the Interim Report of the main TGA program for information about how
to identify these students.


                                   Last Words                                   __________

   The Grading Assistant should make your job of recording grades and computing
class averages much easier. Teachers have enough hard work to do without
spending hours averaging grades with a calculator! Enjoy your copy of The
Grading Assistant. And don't forget to send your registration card and $20 to
the author. Comments and suggestions from registered users are always welcome.
Happy grading!


















                                        50                                        50
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1632

     Volume in drive A has no label
     Directory of A:\

    GO       TXT       848   3-31-90   3:20a
    GO       BAT        38   3-31-90   3:20a
    FILE1632 TXT      3849   4-13-90   4:11p
    INSTALL  EXE     16320   3-31-90   3:20a
    PKUNZIP  EXE     22022  10-01-89   1:02a
    README   TGA      3644   3-31-90   3:20a
    WHATSNEW TGA      9007   3-31-90   3:20a
    TGA-DOC  ZIP     49153   3-31-90   3:20a
    TGA-PROG ZIP    171503   3-31-90   3:20a
            9 file(s)     276384 bytes
                           41984 bytes free
