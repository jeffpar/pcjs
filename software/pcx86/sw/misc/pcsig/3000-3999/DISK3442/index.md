---
layout: page
title: "PC-SIG Diskette Library (Disk #3442)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3442/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3442"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## NOTE.TXT

{% raw %}
```
This is a sample teacher note.  You may modify it using the Misc, Teacher Note menu.  It may also be customized for each student by selecting the Custom Note option on the Score or Grade List Dialog Box.

This is the final report for this period.  The next report will be issued in November.  If you notice any errors or have any questions please call during office hours - 10 AM to 11 AM or send me a note.

My office phone is:
         727-1234

Please sign and have NAME return this form by September 12, 1992.

Parent's Signature: ___________________________
```
{% endraw %}

## README.DOC

{% raw %}
```
                         GRADEBOOK for Windows

Program Author:

  Russell Stevens
  5191 Pine Grove Dr.
  Spruce, MI 48762
  517-727-2066
  CompuServe 70150,323

Important Note:

  GRADEBOOK requires the Visual Basic Runtime dynamic link library 
VBRUN200.DLL in order to run.  This file is widely available and has not been 
included to save disk space and or download times.  If you do not yet have 
this file you may obtain much more detailed program information from the 
included GRADEBK.HLP on-line Windows help file.  To view this file do a File, 
Run from the Windows Program Manager and run the WINHELP.EXE file which is 
located in the \WINDOWS subdirectory.  After the help program starts, do a 
File, Open and select the GRADEBK.HLP file.  You may then browse through the 
help file.  If you have difficulty obtaining the VBRUN200.DLL file, you may 
order a complete review copy of the program from the author for $3.  The 
review program includes an automatic install program and all required files.  
The $3 is deductible if you later register the program.

ASP Information:

  This program is produced by a member of the Association of Shareware 
Professionals (ASP).  ASP wants to make sure that the shareware principle 
works for you.  If you are unable to resolve a shareware related problem with 
an ASP member by contacting the member directly, ASP may be able to help.  
The ASP Ombudsman can help you resolve a dispute or problem with an ASP 
member, but does not provide technical support for members' products.  Please 
write to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442 or send a 
CompuServe message via CompuServe Mail to the ASP Ombudsman 70007,3536.

Program Description:

  GRADEBOOK allows you to keep student scores and calculate grades 
automatically.  Because every instructor records and calculates grades 
differently, the program was designed to be flexible.  GRADEBOOK can be used 
by elementary, junior high school, high school and college instructors.  It 
sets no practical limit on the number of terms, classes, students or tasks.  
Multiple periods per term and custom term names are supported.

  GRADEBOOK keeps track of student scores on various tasks in up to ten 
different categories.  All categories except extra credit are user-definable.  
GRADEBOOK will keep your student list in alphabetical order or you may place 
the students in any desired order to agree with a manually kept grade book.  
Reports may be in rank order if desired.  Student names and optional ID 
numbers may be entered manually or optionally imported from an ASCII file.  
All program input is checked for validity as it is entered.

  Using GRADEBOOK, you can calculate your grades by summing the individually 
weighted raw scores (total points), by assigning weighting factors to 
particular categories of tasks (category weights), or by combining both 
methods (total points with category weights).  You have the option of 
ignoring low scores in each category when you calculate the final grade.  
Several options are available for extra credit and not counted scores may be 
entered.  Scores may be incremented, scaled or adjusted to obtain the desired 
mean or standard deviation.  Custom scores may be calculated as a function of 
other scores.

  GRADEBOOK can calculate and plot the distribution of scores for a single 
class or for several combined classes, for a single task or for all the 
tasks.  Based on this distribution, you specify the interval of scores for 
each letter grade.  GRADEBOOK then automatically calculates the final grade 
for each student.  GRADEBOOK can assign either A, B, C, D, and E grades, or 
plus and minus grades.  Custom letter grades may also be assigned.  GRADEBOOK 
can automatically support pass/fail, 4.0, 7.5, etc., type systems.  Grades 
may be manually overridden.  GRADEBOOK can also calculate and plot the 
distribution of grades for a single class or for several combined classes.  
Grades and scores may be printed on an instructor summary sheet for your use 
or as individual student reports.  Different report formats are available.  
You can issue progress reports any time during a grading period and GRADEBOOK 
will automatically calculate the appropriate interim weights.  Progress 
reports may contain teacher notes.  If you wish, reports can be printed for 
posting using student ID numbers.  GRADEBOOK allows you to revise any data 
including student and task order at any time.  GRADEBOOK will quickly 
calculate what score would be required on the final exam to get a particular 
term grade.  GRADEBOOK allows students that have different grading criteria 
to be extracted from the main class and allows extracted students to be 
combined back into the main class.  Students, tasks, scores and averages may 
be automatically transferred to new classes or summary classes.

  GRADEBOOK will work with any printer (optional) that is supported by 
Microsoft Windows.  Full font support is provided for Window's printer and 
screen fonts.  GRADEBOOK may easily be interfaced with other programs.  
Student names and ID numbers may be imported from ASCII files.  Student names 
and ID numbers, score lists and grade lists may be exported to ASCII files.  
In addition GRADEBOOK allows you to use the Windows clipboard to import and 
export GRADEBOOK data and charts to other Windows applications.  You may copy 
term lists, class lists, student lists, score lists, score distributions, 
grade lists, grade distributions, interim weight reports and required final 
scores using the clipboard to programs such as Excel and Word for Windows.  
The score distribution charts and grade distribution charts may also be 
copied into other applications.  Scores may be copied to and from other 
programs using the clipboard.

  GRADEBOOK includes commands for easily backing up and restoring your 
student data for extra security.  It may be used to generate statistics for 
an entire department or school.  GRADEBOOK will keep its data files on the 
hard disk, or if you prefer, it will keep your data files on floppy disks for 
added security.  An optional password may be used.  GRADEBOOK allows the data 
files to be kept in separate subdirectories if several instructors must share 
one computer.

System Requirements:

  GRADEBOOK requires Windows version 3.0 or later running in standard or 
enhanced mode.  Microsoft recommends at least a 10Mhz 80286 computer with 2 
MB of memory for running Windows applications.  GRADEBOOK requires 768 K of 
extended memory.  Because memory is usually added in .5 MB or 1 MB or 2 MB 
increments, this requires a computer with 2 MB of memory installed.  Windows 
3.0 may operate in three modes, real, standard or enhanced.  Real mode is the 
only mode available for computers with less than 1 megabyte of memory (640K 
conventional, 256K extended).  Enhanced mode requires at least 1024 K of 
extended memory and a 386 or 486 computer.  You may determine what mode 
Windows is operating in by clicking on Help from the program manager and then 
clicking on About.  Please refer to your Windows manual for more information 
on how to change modes.  Note that in version 3.0 of Windows it is possible 
to start Windows when Windows is already running.  If you start Windows and 
then double click the DOS icon, you are returned to the DOS prompt.  Typing 
WIN to start Windows from the DOS prompt will then start a second instance of 
Windows.  Even though the first instance of Windows was in standard mode, the 
second instance of Windows will start in real mode.  The correct way to 
return to Windows from the DOS prompt is by typing EXIT.  If you get an error 
message saying that this program needs Windows in standard or enhanced mode 
you need to restart Windows in the correct mode.

Shareware Information:

  GRADEBOOK is a shareware program.  You can think of shareware as try before 
you buy software.  It is not free software or public domain software.  If you 
like the program and use it for more than a 30 day trial period, you must 
register the program by sending in payment with the registration form, by 
calling 800-242-4775 and ordering item number 10763 by credit card or by 
registering program ID number 685 on CompuServe (GO SWREG).  A registered 
copy of this program is required for each computer operating the program 
simultaneously whether the computer stands alone or is on a network.  The 
shareware version of GRADEBOOK has all the features and capabilities of the 
registered program.  You may make and distribute copies to others and are 
encouraged to do so.  You should distribute the self extracting GB.EXE file 
which is a compressed file containing the GRADEBOOK distribution files.  You 
may also distribute the GB.ZIP file which requires a program such as PKUNZIP 
to decompress the files.  These file names may be followed by the program 
version number such as GB203.EXE or GB203.ZIP.

  GRADEBOOK is continuously being revised to incorporate user suggestions.  
Please let the author know of any improvements or features that you would 
like to see in the program.  Low cost disk updates or review copies (includes 
install program and VBRUN200.DLL) are available for $3.00 to both registered 
and unregistered users directly from the author.  Unregistered users may 
deduct the $3.00 if they later register the program.  The latest unregistered 
version of the program may be obtained and downloaded from the Edforum or 
WinShare forum on Compuserve (file GB.EXE).  It is usually less expensive to 
order a copy from the author than it is to download it.

  In an effort to make it easier for you to obtain your favorite software, 
the latest updates of many ASP authored programs can be found on the BBSs 
listed below.  These BBSs are members of the ASP Hub Network (AHN).

Zone 1 - East Coast USA

     North-East Coast                      Mid-East Coast

[Site #1]                             [Site #2]
     The Consultant BBS                    The Break RBBS <East>
     Jay Caplan                            Bruce Jackson
     P.O. Box 8571                         4660 Whitaker PL
     New York NY 10116-4655                Dale City, VA 22193-3011
     Data1) 718-837-3236                   Data1) 703-680-9269
     Data2)                                Data2) 703-551-0000

Zone 2 - North Mid-USA               Zone 3 - Southern Mid-USA

[Site #3]                             [Site #4]
     The Twilight Zone                     The DataExchange BBS
     John Hrusovszky                       Don Morris
     1119 E. Main St                       119 Herring St.
     Auburndale, WI 54412                  Leesville, LA 71446
     Data1) 715-652-2758                   Data1) 318-239-2122
     Data2)                                Data2)

Zone 4 - West Coast USA                              

[Site #5]                            [Site #6]
     Attention to Details BBS             Space BBS
     Clint Bradford                       Owen Hawkins
     5085 Trail Canyon Dr                 PO Box X
     Mira Loma CA 91752                   Menlo Park, CA 94026
     Data1) 909-681-6221                  Data1) 415-323-4398 (ASP Files)
     Data2)                               Data2) 415-323-4193 (Other Files)

Zone 5 - Canada

[Site #7]
     Knightec BBS
     Phil Knight
     35 Robb Blvd #6
     Orangeville, ONT L9W 3L1
     Data1) 519-940-0007
     Data2)

  These BBSs are bound by special agreement with the ASP.  In the case of a 
dispute contact the ASP Omsbudsman.

  Although the unregistered version is fully functional, there are several 
advantages to registering the program.

1.  Registered users may obtain program support directly from the author.  
Please contact the author at the following address.

       Russell Stevens
       5191 Pine Grove Dr.
       Spruce, MI 48762

  Telephone support is available by request (517-727-2066).  Comments and 
suggestions are welcome.  If you have a problem with the software, report 
what you did (the steps or procedures you followed) leading up to the 
problem.  Also report the exact error message, if one appeared and any 
pertinent information about your hardware or software configuration.  You may 
also contact the author by leaving a message on CompuServe to Russell 
Stevens, 70150,323.  The latest unregistered version of the program may be 
downloaded from the Edforum or WinShare forum on CompuServe (file GB.EXE).  
Registered users may obtain a registered version of any future update to the 
program for $3.00.  User manual updates are also available.

Additional support is available by request for customized program features, 
user training, interfacing with other programs and system wide data 
collection and analysis.

2.  Registered users receive a 130 page bound, laser printed, illustrated and 
indexed user manual and the latest program version.  The manual includes an 
extensive tutorial to help get proficient at using the program.  The manual 
also includes samples of all the different types of reports and charts that 
may be generated by the program and by the supplied Word for Windows and 
Excel macros and Works worksheet.

3.  The unregistered version starts up with a copyright notice (nag screen) 
stating that it is an unregistered copy.  This notice will stay on screen for 
a few seconds or you may press any key to bypass it.  Registered versions of 
the program contain your name in the copyright notice.  The "Unregistered 
Copy" watermark note on some of the printouts does not appear in registered 
versions of the program.

4.  Registered users receive a collection of Word for Windows and Excel 
templates, macros and workbooks which allow custom reports to be 
automatically generated from GRADEBOOK data.  Word for Windows may be used to 
reformat grade and score lists to include a large number of tasks on a single 
page in either a horizontal or vertical layout.  Teacher notes and graphics 
such as grade and score distribution charts may also be included.  The charts 
may be pasted, linked or embedded and may be further modified using Microsoft 
Draw.  The user may modify styles as desired.  The Excel workbook can also be 
used to reformat GRADEBOOK reports and to prepare grade and score 
distribution charts using any of the Excel chart formats such as exploded pie 
charts, 3-D charts, overlaid frequency and cumulative frequency charts, etc.  
Raw GRADEBOOK score data may be extensively analyzed using the Analysis 
ToolPak.  An Excel worksheet is also furnished that will track various types 
of attendance and calculate an attendance score that may be copied into 
GRADEBOOK.  Requires Word for Windows version 2.0, Excel version 4.0 and 4 MB 
(recommended).  A Works for Windows worksheet is also included for attendance 
tracking.  All macros may be modified by the user if desired.

5.  Registered users receive a substantial discount on a future companion 
program that will automate attendance tracking and scoring, prepare seating 
charts, create lesson plans and track various student data.

6.  The program author appreciates and needs the support to continue 
improving the program.

  You may register the program by sending in the registration form with a 
check for $34.  You may print out a registration form by selecting Help from 
the GRADEBOOK menu bar and then selecting Registration.  Educational system 
purchase orders are accepted.  To order by credit card (MC, Visa, AmEx, or 
Discover) call 800-242-4775 (item # 10763).  This number is for ordering 
only.  Contact the program author for order status, latest available version, 
technical information or return authorizations.  You may also register on 
CompuServe (GO SWREG) by ordering program ID number 685.

Installation Instructions:

  The shareware version of GRADEBOOK is contained in a compressed file named 
GB.EXE or GB.ZIP.  The file may also be named GBxxx.EXE or GBxxx.ZIP where 
xxx designates the version number.  It may be downloaded with a modem or 
supplied on a floppy disk.  To minimize download time and disk space the 
shareware version of GRADEBOOK does not include the automatic install program 
or the Visual Basic dynamic link library VBRUN200.DLL.  This file is 
available on most bulletin boards and may be downloaded separately if you do 
not already have a copy.  It may also be found on the WINFUN or WINSHARE 
forums (library 1) on CompuServe.  Copy the GB.EXE or GB.ZIP file to a 
separate subdirectory on your hard disk such as \GRADEBKW.  The GB.EXE file 
is a self extracting file.  Extract the GRADEBOOK files by running the GB.EXE 
file from the DOS prompt by typing GB.  If you have the GB.ZIP file, 
decompress the files using a program such as PKUNZIP.  The following files 
should be included in your copy of GRADEBOOK:

  GRADEBK.EXE       GRADEBOOK executable program
  GRADEBK.HLP       GRADEBOOK on-line help file
  FA90_1.DAT        Sample class file
  README.DOC        This file
  NOTE.TXT          Sample teacher note
  VENDOR.DOC        Vendor information file
  FILE_ID.DIZ       BBS ID file
  GRID.VBX          Grid interface dynamic link library

  You also need to copy the GRID.VBX and VBRUN200.DLL files to your 
\WINDOWS\SYSTEM subdirectory if you have not previously installed them.  The 
GB.EXE or GB.ZIP file may be deleted after the files are extracted.  Then 
start Windows in standard or enhanced mode.  You may then use the Windows 
program manager and manually add the program to a group such as the Windows 
applications group.  To run the GRADEBOOK program, just double click its icon 
from the Windows program manager.  Additional information on how to use a 
command line parameter to store your data on a floppy or separate 
subdirectory may be found in the manual or in the on-line help.

How to Use the Program:

  GRADEBOOK has extensive on-line help.  You may press the F1 key in any 
dialog box or window to get context sensitive help.  You may also press the 
Shift-F1 key combination to get help on any menu command.  You may also 
select the Help Index, Help Commands or Help Using Help menu commands.

  The retail version of GRADEBOOK includes an extensive tutorial.  However, 
the following is a description of the basic program steps needed to start 
using GRADEBOOK.

  After installing GRADEBOOK you should be able to start the program by 
double clicking the program icon.  The program will start with an empty main 
window displayed.  The title of the main window will display the currently 
selected term and class.  If there are no classes for the current term the 
title bar will say "No Classes".  If you have not used GRADEBOOK previously 
the current term will be the current season of the current year such as 
Winter 1992.  You should first select the term that you want to use by 
clicking on the Term Select menu.  Term names may be customized if you do not 
use seasonal terms.

  After selecting the term, you may add a class using the Class Add menu.  
You may then indicate if you want to use plus and minus grades and whether 
you want to blank incomplete scores.  More grading options are available from 
the Grades, Custom Grades menu.  Incomplete scores are usually printed with 
an "NA".  If you use the blank option you can print out reports that you may 
use as data entry forms (blank gradebooks).  You may also indicate the 
distribution spacing you want to use for score distributions.  If you grade 
on a straight curve, you will not need to do score distributions.  If you 
adjust your grading curve based on student results (you want 10% A's, 15% 
B's, etc.) you can set the spacing as desired.  If you are using plus and 
minus grades or a system with a larger number of cutoff points, you will need 
to use a finer spacing than if you are using straight letter grades.  This 
data may be revised at any time.  If you have previous classes, you can 
automatically add the students from a previous class to the new class.  You 
may also use any previous class as a task template if you want all the tasks 
and existing grading criteria to be automatically entered.

  After adding a class, you may then add students to the class by selecting 
the Student Add menu.  The only required entry is the last name.  You may add 
students in any order.  You may alphabetize or reorder the students by 
selecting the Student Reorder menu.  A student list may also be imported if 
you have an ASCII file available containing their names.

  After adding students, you may add tasks using the Task Add menu.  You may 
add the tasks as you go or add them all at the beginning of the term.  If you 
plan on isssuing progress reports during the term, it is simpler to add the 
tasks as they are completed instead of adding them all at the beginning of 
the term.  For each task, you enter the task name, its category type, and its 
perfect score.  In addition, if you are using total points or total points 
with category weights, you may enter an individual task weight.  A 300 point 
task has the same weight as a 100 point task with an individual task weight 
of 3.  You may locate the task in any position - normally new tasks would be 
the last task.  There are 10 task categories.  You may redefine all of them 
from the Misc Category Name menu except for the extra credit task category.  
Custom tasks may be added which are the highest of, sum of, average of, 
weighted average of, lowest of, difference of, total NC, total NA or category 
average of existing tasks.

  After a task has been added, you may add scores for that task using the 
Score Add menu.  The add scores dialog box has been designed to minimize the 
keystrokes required to enter scores.  The Score, Edit menu may also be used 
to add and edit scores if you prefer a spreadsheet grid type interface.  Some 
instructors prefer to sort their papers or to record the scores on a sorted 
list prior to entering the data into GRADEBOOK.  The sorted list may be a 
regular gradebook or a data entry form that you have printed from GRADEBOOK 
using the Class, Print Data Form menu.  If you are entering sorted scores, 
very few keystrokes are required.  The Random Entry Check Box should not be 
checked when entering sorted scores.  The default student shown in the 
Student List Box is the first student.  The Score Edit Box shows the existing 
score for the student highlighted in the Student List Box.  Just Press the 
Tab key to shift the focus to the Score Edit Box and enter the score for the 
first student.  Since the Add Button is the default key, just press the Enter 
key to enter the score for the first student.  The focus will stay at the 
Score Edit Box and the highlighted student will automatically increment to 
the next student in the list.  Enter the next score and press the Enter key 
or just press the Enter key to skip the student.

  Some instructors find that sorting the papers or recording the scores on a 
sorted list prior to entering the data into GRADEBOOK is not worth the extra 
effort.  GRADEBOOK allows you to quickly locate a student by entering in a 
search string.  The first letter of the search string would be the first 
letter of the student's last name.  If there is only one student whose last 
name begins with that letter, GRADEBOOK narrows the search to that student.  
If several students have a last name that begin with the same letter, just 
enter the next letter of the last name to narrow the search.  You may 
continue until the desired student is located.

  To use this method, first check the Random Entry Check Box and then pick 
the desired task from the Task To Add Score To List Box.  Then start entering 
the search string for the first student.  The search string is listed after 
the Search Text Label.  As you enter the search string, the highlight in the 
Student List Box will shift to the first student that matches the search 
string.  If it is the desired student, press the Tab key and enter the score.  
If not, enter the next letter of the search string.  If you enter a search 
string for which there is no match, the Search Text will not be revised.  If 
you enter an incorrect search string, you may use the Backspace key to 
correct it.  When you enter a score by clicking the Add Button or by pressing 
the Enter key, the Search Text will be reset.  The Search Text will also be 
reset if you click on a student in the Student List Box.

  You may also just use the Student List Box to select the student directly.  
Click the down arrow to drop down the list box, use the scroll bar controls 
to locate the student and then click on the desired student.  The cursor 
control keys may also be used to locate the student.  The one student, 
several tasks option may be used if you want to enter several scores for just 
one student instead of one score for several students.

  Fractional scores such as 82.37 are permitted.  You may also enter "NA" for 
a score.  It is not necessary to enter "0" for incomplete scores.  The 
GRADEBOOK program will treat "NA" scores as zero scores if you have elected 
that option on the Misc Category Weights menu.  You may also enter letter 
grades instead of scores.  You may choose to have the program automatically 
use the grading curve midpoints or may assign grade input equivalents using 
the Grade, Input Equivalents menu.  You may also enter "NC" (not counted) 
scores for students that have joined the class late or who have an excused 
absence.

  You next need to input your grading method using the Misc Final Category 
Weights menu.  You may use the total points method,the category weights 
method or the total points with category weights method.  If you use the 
total points method you do not have to enter category weights.  Relative 
weights are then based on the perfect scores (points) assigned to each task 
times the individual weight for each task.  The term average is determined by 
summing the individual scores except for discarded and not counted scores, 
dividing by the total perfect score and then adding on the extra credit.  The 
total perfect score would not include discarded or not counted scores.  Extra 
credit may have a weight when using the total point method or may be 
calculated normally where its weight is determined only by the points of the 
extra credit.

  Incomplete scores may be treated as zeros or incomplete.  If treated as 
zeros, they are included in score distributions and grade distributions.  If 
you want to know what the distribution of scores is without including the 
incomplete scores (to prevent skewing the average lower) you can select the 
Treat Incomplete option.

  If you use the category weights method, the term average is determined by 
averaging the percent scores for all tasks in a category except for discarded 
and not counted scores, and then adjusting each category by its category 
weight.  Extra credit is then added.  The task weights, except for extra 
credit, must add up to 100%.

  If you use the total points with category weights method, each category 
average is determined using total points and the overall average is 
calculated by averaging the category averages with the category weights.

  The final category weights dialog box is used to enter the task weights you 
want to be in effect at the end of the term after you have entered scores for 
all the tasks.  However, if you are printing a progress report in the middle 
of a term, all the tasks will not yet be entered.  For example, you may want 
the final to be weighted at 20% at the end of the term, but you will not have 
a final score available in mid term.  The final category weights need to be 
adjusted when doing a progress report.  You can do this using the Misc 
Interim Category Weights menu.

  You may select the number of tasks you want to include using the Misc 
Selected Task menu.  You may calculate grades and do grade and score 
distributions for a single task or for all the tasks.  If you select all 
tasks you may specify how many of each task type you want to discard.  The 
Misc Grading Curve menu is used to adjust your grading curve.  You may use 
the Score Distribution and Grade Distribution menus to calculate 
distributions.  Distributions may be plotted after they are calculated using 
the Score Chart and Grade Chart Options.  Scores and grades may be printed 
using the Score List and Grade List menus.  You may exclude the letter grades 
if you use averages for grades instead of letter grades.  You may print 
individual or instructor summary reports.  If printing individual summaries, 
you may select the one page per student option and include teacher notes.  
You may combine several period classes into a single overall term class using 
the Score, Add Previous Average menu.

  Additional information on the above topics and other program features may 
be found in the on-line help.

Common Questions:

1.  May I run GRADEBOOK without installing it on my hard disk?

    GRADEBOOK may be run completely from a high density (1.2MB or 1.44MB) 
floppy disk.  The disk needs the GRADEBK.EXE, GRADEBK.HLP, GRID.VBX and 
VBRUN200.DLL files.  The program will also keep its data files on the floppy.  
Operating GRADEBOOK in this manner will noticeably slow the program down due 
to the frequent disk accesses required.  If all you want to do is keep your 
data on a floppy for security purposes, you should run GRADEBOOK from the 
hard disk but start it with a command line parameter so that only your data 
is stored on the floppy.  The GRID.VBX and VBRUN200.DLL files are not 
required on the floppy if they are in your \WINDOWS\SYSTEM subdirectory or in 
your DOS PATH.

2.  I have other Visual Basic applications already installed.  Do I need to 
install the Visual Basic dynamic link library?

    If you currently have the Visual Basic dynamic link library VBRUN200.DLL 
installed in your \WINDOWS\SYSTEM subdirectory or in a subdirectory that is 
included in your DOS PATH, you do not need to install the Visual Basic 
dynamic link library.  You only need one copy of the library installed on 
your hard disk.

3.  May GRADEBOOK be installed on top of itself?

    Yes.  You may install GRADEBOOK on top of itself by replacing all the 
distribution files.  You may need to do this if you have a new program 
revision.  Reinstalling the GRADEBOOK distribution files will not delete or 
alter any of your existing class data.

4.  What must be done to remove the GRADEBOOK program?

    Delete all the files in your \GRADEBKW subdirectory and then remove the 
subdirectory.  If you have no other Visual Basic applications, you may also 
delete the GRID.VBX and VBRUN200.DLL files from your \WINDOWS\SYSTEM 
subdirectory.  If you have existing class files you may use the File, Backup 
command in GRADEBOOK to make a backup copy of your existing classes before 
you delete the program.

5.  My computer has 2 MB of memory but when I start GRADEBOOK I get a UAE 
(unrecoverable application error) or an out of memory error message?

    You have enough memory installed but it may not all be available for 
Windows applications.  If you have reserved some memory for a ram disk or for 
use as expanded instead of extended memory, it will not be available to 
Windows.  Revise your CONFIG.SYS file to make more memory available to 
Windows.  You can determine your free memory by clicking on Help and then 
clicking on About from the Windows program manager.  Windows should report at 
least 600 K of free memory prior to starting GRADEBOOK.  You may determine 
how much memory GRADEBOOK requires by starting GRADEBOOK and then clicking on 
Help and then clicking About to see how much memory is free after loading 
GRADEBOOK.

6.  How do I use the supplied sample file?

    The sample class file is named FA90_1.DAT.  To make this the default 
class, first do a Term, Select and select the Fall 1990 term.  Then do a 
Class, Select and select the Physics 121 - College Physics M, W, F @ 2:00 PM 
class.

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
      GRADEBOOK for Windows Copyright (c) 1991 by Russell Stevens

                      _______
                 ____|__     |                (R)
              --|       |    |-------------------
                |   ____|__  |  Association of
                |  |       |_|  Shareware
                |__|   o   |    Professionals
              -----|   |   |---------------------
                   |___|___|      MEMBER

SHAREWARE VENDOR INFORMATION
----------------------------

If you are a Shareware Vendor, this information is for you.

You are free to distribute this program and its associated files freely, as 
long as you charge nothing except for a small handling fee.

Required Files for Distribution:

    GRADEBK.EXE  - program file
    GRADEBK.HLP  - on-line help file
    README.DOC   - read-me file with installation instructions
    FA90_1.DAT   - sample class file
    NOTE.TXT     - sample teacher file
    VENDOR.DOC   - this file
    FILE_ID.DIZ  - BBS ID file
    GRID.VBX     - Grid interface DLL

The GB.EXE (GBxxx.EXE) file is a self extracting compressed file which 
contains the above files.  The GB.ZIP (GBxxx.ZIP) file also contains the 
above files.  The user will also need a copy of the Visual Basic dynamic link 
library - VBRUN200.DLL in order to run the program.

If you include this program in any catalogs, please use the following 
description (or one very similar to this):

"Advanced Windows based GradeBook for the professional educator.  Extensive 
on-line help.  Supports multiple periods per term.  No practical limit on 
classes, students or tasks.  User defined categories, opt ID#'s, tot pts or 
weighted scores, discard worst score(s), ext credit, multiple class score and 
grade distributions with charts, progress reports, imp/exp, clipboard and 
font support, interim weights, reqd final scores, teacher notes, supplemental 
Word and Excel templates, much more.  Requires Win ver 3.x with 2MB.

Author:  Russell Stevens, Member Association of Shareware Professionals."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3442

     Volume in drive A has no label
     Directory of A:\

    GBWIN    ZIP    299974   8-04-93   2:41p
    GO-STRT  DAT       541   6-01-93  11:07a
    GO-FORM  DAT      3336   6-01-93   2:30p
    GO       EXE     26022   1-10-92  12:14p
    PKUNZIP  EXE     29378   2-01-93   2:04a
            5 file(s)     359251 bytes
                            1024 bytes free
