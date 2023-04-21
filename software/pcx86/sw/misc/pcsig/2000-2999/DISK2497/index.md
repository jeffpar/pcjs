---
layout: page
title: "PC-SIG Diskette Library (Disk #2497)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2497/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2497"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2497.TXT

{% raw %}
```
Disk No: 2497                                                           
Disk Title: QUE Accounting Time and Attendance                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: QUE Accounting Time & Attendance                         
Author Version: 1.1                                                     
Author Registration: $45.00                                             
Special Requirements: 640K RAM, and two floppy drives and a hard drive. 
                                                                        
QUE ACCOUNTING TIME AND ATTENDANCE (QUE TM) is a system used to record  
and control the attendance of workers.  Managers enter the work         
schedules and work rules (rates, break times, overtime OK, late arrival 
grace period, etc.).  The workers' punch in/out times are entered from  
the time cards or from a ASCII file created by a time clock system.     
                                                                        
Now the QUE TM system takes over.  Three levels of reports are possible:
corporate, company, and work rule.  Reports include: employee listing,  
employees approaching overtime, employee schedules, time card validation
period summaries, and more.  The extensive report writer and query      
systems makes any information easily accessible.                        
                                                                        
QUE TM will help you increase accuracy of payroll calculations, reduce  
payroll preparation time, improve labor allocation efficiency, timely   
report errant behavior, and improve forecasting with the use of         
historical data.                                                        
                                                                        
QUE TM is completely menu driven, includes context sensitive help,      
documentation, and a tutorial to help get started.  QUE TM uses dBase   
compatible files, integrates with the other QUE accounting modules,     
and is a great way to get control of your payroll expense.              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## DISCLAIM.TXT

{% raw %}
```


                           QUE Accounting

                       Copyright (c) 1989,1990


                             DISCLAIMER





              The QUE Accounting series is a well prepared
              and tested series of Accounting programs.
              QUE Accounting makes no expressed or implied
              warranty of any kind in regards to the
              programs and documentation. In no event
              will QUE Accounting be liable for
              damages incurred due to incidental use of
              these programs. QUE Accounting reserves the
              right to modify the programs and documentation
              as deemed necessary without any obligation of
              notifying any persons or organizations.
  





                          QUE Accounting
                          Suite 180
                          1450 West Chester Pike
                          West Chester, PA 19382
```
{% endraw %}

## GENFUNC.TXT

{% raw %}
```


                            Chapter 5
                         Other Functions


                            
 RW Query and Report Writer 
                            

The RW Query and Report writer function is a powerful utility to
select information upon complex condtions set with 'easy to
follow' instructions. It can even be used to access files outside
the QUE Accounting series or programs.

Description

The popup window style access allows you to select files, set
relations between files and to select the fields to appear on the
output. The output may be directed to either a table format on
the screen or a report.

Chosing Files

When you first enter the program, a listing of files in the
current directory are displayed. Highlight the desired file(s)
and press F10 to continue to the next phase.

Making Relations

When more than one file is selected, the first file chosen is
considered the parent and a relation must be set between it and
its children( subsequent files).

To relate files select the field in the parent by highlighting it
and pressing enter. Select the corresponding field in the child
file.

   eg. Soc Sec Num   relates to   Soc Sec Num

Press F10 when complete.

Select, Sorted by and Where

This section tells the computer what data is to be selected and
in what sequence.

  Select the fields from the files and press F10 when complete.
  Sort the fields in the order in which you would like to see
them displayed by selecting them in the sort sequence.

   eg. Lastname Firstname

  The Where section uses boolean algebra and range values to
create a subset of data.

  eg. State='PA' .and. Lastname>'MAAA' .or. rate>100.00


Screen or Printer Output

The selected information automatically goes to a table display
but may be redirected to a printer.

Printed reports may include one or more of the following:

    report headings
    subtotaling
    summation
    averaging
    maximum and minimun values
    margins
    page widths and lengths
  
The math functions are also available while in the screen mode.

Saving the Query

The selected boolean criteria may be saved for future reference
by pressing the F6 key and entering in the brief description.

Saved queries may be accessed and executed at any time
eliminating the need of having to rekey in the selection
criteria. Each time executed the latest data is read from the
files.

An example of a typical output screen appears below








╔═════════╗
║Filelist ║
╚═════════╝

General Ledger

     MEMFILE        Company Setup file
     GLMAS          Chart of Accounts
     GLTRANS        General Ledger Transactions
     GLBATCH        General Ledger Transaction Batch Headers
     TBDEPT         Trial Balance
     DEPTMAS        Department Master
     SOURCE         Source Code table
     RETRANS        Repeating entries
     SYSFILE        Account range file
     GLHIST         General Ledger Transaction History

Accounts Receivable

     ARMEM          AR Setup
     ARHEAD         Invoice Headers
     ARDETL         Invoice Line Items
     PRODUCT        Inventory file
     ARMAS          Customer master records




╔════════════╗
║Utility Menu║
╚════════════╝

 ┌──────────────────────────────────────────────────────────┐
 │09:51:48           Accounts Receivable           02/24/90 │
 │Company-> ABC         Utility Menu               Period: 7│
 │                                                          │
 │F1 Help      ESC Exit         F6 Calculator    F10 Window │
 │                 ┌────────────────────────┐               │
 │                 │QUIT return to MAIN MENU│               │
 │                 │                        │               │
 │                 │BU. Backup files        │               │
 │                 │RS. Restore from Backups│               │
 │                 │IX. Reindex files       │               │
 │                 └────────────────────────┘               │
 └──────────────────────────────────────────────────────────┘

Description

The utility menu includes miscellaneous functions and those
outside the normal realm of operations. They are however very
important elements of the system.

Backup / Restore / Reindex

The first three options on the menu prime responsibility is
recovering from hardware and unexpected system malfunctions. 

The Backup feature copies the system files to backup diskettes.
So that in the case of an emergency they may be used to restore
the system back to the point in time the copy was made. It is a
good idea to perform this operation periodically based on a
specific event such as after the close of a period. 

The Restore function is selected to perform the restoration of
files back onto the system. Diskettes must be saved using the
backup feature of this system in order to perform a restore.

The Reindexing utility is called automatically by the end of
period process but may be called more frequently. It recreates
your file linkages and cleans up any unused space reserved by
deleted records. It is usually the first recourse when
experiencing index problems as may be noted by missing or out of
sequence data.

The simple on screen instructions will guide you through the
operations.


NOTEPAD (optional)

Description

The NOTEPAD is a handy, mini word processor that will meet most
of your word processing needs. It works most effectively with
memo and letters but may be used to access larger documents.

Like many word processors it is limited by the size of available
memory. Most typical users (640K) will not have a problem.
However, it s a good precautionary measure to periodically save
your file as you are typing.

Operations

The NOTEPAD option may be activated from the menu or by pressing
the F9 key from within other designated functions.The following
keys are active within the NOTEPAD window.

    Alt-A  (A)ppend a file to current file and continue
    Alt-B  (B) place a block marker
    Alt-F  Insert a field from a database 
    Alt-G  (G)oto line number
    Alt-H  (H)elp screen
    Alt-I  (I)nsert line     
    Alt-K  (K)ill current line
    Alt-L  page (L)ength for printing
    Alt-M  change (M)argins
    Alt-N  edit (N)ew file             
    Alt-P  (P)rint file
    Alt-Q  (Q)uit but save edits           
    Alt-R  search and (R)eplace
    Alt-S  (S)ave file & continue          
    Alt-T  (T)oggle wordwrap on/off
    Alt-W  (W)rite to new file             
    Alt-X  e(X)it without saving
    Alt-Y  change director(Y)/wildcard

FUNCTIONS:

EDIT WINDOW/STATUS LINE: when you enter the notepad, the edit
window takes up nearly the full screen.  There is a status line
at the bottom, which displays the name of the file being edited,
the current line and column position of the cursor, the left and
right margins, and the status of wordwrap and insert modes
(displayed when active as "<Wrap>" and "<Ins>", respectively.)

When a file has been edited, an asterisk will appear at the right
side of the top row (next to the "Alt-H=Help" message).

CURRENT DIRECTORY/WILDCARD - the notepad gives you the ability to
change the working directory and/or filemask at any time.  When
you first enter the notepad, the current directory will be set to
the default DOS directory, and the wildcard will be set to '*.*'.

If you would like to change either the directory where the
notepad looks for files or the wildcard used (e.g., "*.TXT",
"*.PRG"), press Alt-Y and enter the new information.  You do not
have to enter slashes in front or back of the directory name
UNLESS you include a wildcard.  For example, to change the
current directory to "\ACCT\", you need only enter "ACCT". 
However, if you want the notepad to look for all the .TXT files
in subdirectory \ACCT\, you must enter "\ACCT\*.TXT".

If you enter just the wildcard, the current directory will remain
unchanged.  If you enter a directory name only, the wildcard will
be reset to "*.*".  If you press Enter without typing in
anything, neither the current directory nor the wildcard will be
changed.

Examples: let's assume that your application is in a subdirectory
named \WORKSTUF.  The initial current directory/wildcard will be
set to "\WORKSTUF\*.*".  If you press Alt-Y and enter "*.TXT
<CR>", the directory/wildcard will be changed to
"\WORKSTUF\*.TXT".  If you wish to change to the ACCT
subdirectory, press Alt-Y and enter "\ACCT <CR>".  The
directory/wildcard will then be changed to "\ACCT\*.*".   Suppose
you then want to look at only the .TXT files starting with the
letter P in the directory \ACCT You would press Alt-Y again, and
enter "\ACCT\P*.TXT".

FILENAMES: when you press Alt-N to edit a new file or Alt-W to
write to another file, a scrolling window will appear containing
all files that match the current directory and wildcard mask.

The directory and wildcard mask will be shown at the top of this
window for reference.  Note that files with the following
extensions will not appear in this directory, based on the
assumption that there should be no need to edit binary files:
.EXE .COM .DBF .NTX .DBT .NDX .OBJ.

To select a file, move the highlight bar to it and press Enter.
Also note by pressing a letter key, the first file starting with
that value is highlighted. PgUp, PgDn, Home and End keys are also
available.

INSERT and WORDWRAP: the start-up values for these modes is on.
They may toggled off and on at any time by pressing Insert and
Alt-W, respectively.  The status of these modes appears at the
right side of the status line.  Additionally, the cursor size
will change from large (insert) to small (overwrite) based on the
current mode.

MARGINS: the start-up margins are 1 and 80.  However, you may
change these margins at any time by pressing Alt-M and entering
the desired values.  When you change the margins, the on-screen
display will adjust to reflect the new margins.  You may use
larger values for the right margin than would appear on the
80-column screen.  In such instances, you should toggle wordwrap
off and scroll to the right to display text beyond the on-screen
right margin.  The current values of the margins appear on the
status line.


PAGE LENGTH: the start-up page length for printing is 60 lines. 
You can change this at any time by pressing Alt-L.

SEARCH AND REPLACE: you can search and replace for all or for
only a specific number of occurrences of a character string. 
When you press Alt-R, you will be prompted first to enter the
search string, then the replacement string.  You will then be
asked if you want to replace all occurrences of the search
string.  If you answer 'N', you will be prompted to enter the
number of occurrences to replace.

Please note that the search begins at the top of the file and
continues either to the end of the file or until the specified
number of occurrences have been replaced.

PRINTING: you may print the current file at any time by pressing
Alt-P.  Printing may be aborted at any time by pressing Esc.  The
format of the printed page is determined by the current settings
of the margins and page length.

BLOCK COPY used to highlight a block of text to be copied moved
or deleted. Alt-B both starts and stops the block marking. A
third Alt-B brings up the function window.

FIELD INSERTION used to bring in fields from a database. The
selected fields will be printed in the body of the letter.
 

CALCULATOR:(optional)

Description

This is a useful calculator that includes all the basic
operators: addition (+), subtraction (-), multiplication (*), and
division (/).

But it also has some other goodies, including exponentation (^),
a percentage(%), a paste function and a full-featured memory. 
Plus, whenever you press an operator ('+', '-', '*', '/', or
'^'), the previous number is shown above the display window. 
This is handy for when you are processing a list of numbers and
forget where you were.  Also the calculator can be moved around
the screen using the directional arrow keys.

The maximum value that can be stored in the calculator is
99,999,999,999.9999.

Operations

Active Keys:

    '+' -- addition                        '-' -- subtraction
    '*' -- multiplication                  '/' -- division
    '^' -- exponentation                   'C' -- clear 
    '%' -- Percentage                           current number
    'E' -- clear entry (does not clear previously
           entered number in pending operation)
    'P' -- print (adding machine mode)     'M' -- Memory
                                                operations
    '=' or Enter -- process operation       Esc -- exit
                                                Calculator
    'D' -- change the number of decimal options
    'R' -- round the numbers to a specified number pf places

Calculator movement keys:

    UpArrow      -- move calculator up one row
    DnArrow      -- move calculator down one row
    LtArrow      -- move calculator left one column
    RtArrow      -- move calculator right one column
    Ctrl-LtArrow -- move calculator to far left (rows
                    unchanged)
    Ctrl-RtArrow -- move calculator to far right (rows
                    unchanged)
    Home         -- move calculator to top left corner
    End          -- move calculator to bottom right corner
    PgUp         -- move calculator to top row (columns
                    unchanged)
    PgDn         -- move calculator to bottom row (columns
                    unchanged)
Memory Functions:

To access memory functions, press "M", then one of the flashing
function keys.  The function keys are:

    'R' -- recall number stored in memory
    'C' -- clear memory (reset to zero)
    '+' -- add current number to number stored in memory
    '-' -- subtract current number from number stored in
           memory
    '*' -- multiply number stored in memory by current number
    '/' -- divide number stored in memory by current number


PASTE function

The paste function enables you to paste the current calculator
value into a numeric field while adding or changing records in a
file.

However, erratic results may occur if the number of decimal
places in the number to be pasted is larger than the number
of decimals of the field described in your file. For example,
suppose that you have just used the calculator to derive the
result 75.2877.  You wish to paste this number into an amount
field on the screen prior to popping up the calculator. If the
field is only 2 decimal places than the probability is strong
that this number will be stored on-screen as 75.29 (although
internally it will remain 75.2877).


PRINT - Adding machine mode

By pushing "P" for Print, the calculator emulates an adding
machine.This will be noted by a small "P" to the right of the
number window. Each calculation will be sent to the printer (if
it is on-line). After all, if you have invested several thousand
dollars in PC hardware (and software), why bother spending more
money on a ten-key adding machine?  Press "P" again to leave
adding machine mode.


```
{% endraw %}

## OPERMAN.TXT

{% raw %}
```
     ┌───────────────────────────────────────────────────┐
     │                ▄▄▄▄ ▄  ▄ ▄▄▄     Version 1.1      │
     │                █  █ █  █ █▄▄     January 90       │
     │                █  █ █▄▄█ █▄▄                      │
     │                ▀▀▀▀▀                              │
     │                █▄▄▄▄▄▄▄▄▄▄▄█                      │
     │            <<< QUE ACCOUNTING >>>                 │
     │            Copyright (c) 1989,1990                │
     │              Time and Attendance                  │
     └───────────────────────────────────────────────────┘


                     OPERATIONS MANUAL


╔═════════════╗
║Installation ║
╚═════════════╝

Requirements

 Memory - 525,000 bytes *
 Drives - floppy or hard disk
 Monitor - monochrome or color
 Printer - any type 80 or 132 column
 Operating System - DOS 2.0 or above but 3.3 or above is
           preferred.
 Config.sys -(files=20) minimum entry needed
 
QUE Time and Attendance may be used from floppy drives but
performance is greatly enhanced if it is installed on a hard
disk.

Instructions

The system may be installed in any directory on your hard drive
and if you desire the files may be moved to a separate area and
then accessed with the dos pathname.

For example:

a) simple hard drive installation          To Run

C> MD QUETNA                            C> TAMAS
C> CD QUETNA
C> A:PKUNZIP A:QUETNA

b) hard drive installation with files placed on D drive

C> MD QUETNA                            C> TAMAS D:
C> CD QUETNA
C> A:PKUNZIP A:QUETNA
C> COPY *.DBF D:*.*
C> COPY *.NTX D:*.*
C> COPY *.DBT D:*.*

C) hard drive installation with files placed in a separate
   directory

C> MD QUETNA                            C> TAMAS \FILES
C> CD QUETNA
C> A:PKUNZIP A:QUETNA
C> COPY *.DBF \FILES\*.*
C> COPY *.NTX \FILES\*.*
C> COPY *.DBT \FILES\*.*

* May be affected by TSR programs, device drivers and other
software concurrently running.
** Consult a DOS book for Config.sys and other unknown terms.╔═════════════════╗
║ OPERATION MANUAL║
╚═════════════════╝

Start-up

At your operating system prompt (eg. C>), under the directory on
which QUE was installed, type in TAMAS.  If files are to be
accessed in another area place the path following TAMAS.
For example to access files stored on drive B, TAMAS B.

Sign-on Screen
     ┌───────────────────────────────────────────────────┐
     │                ▄▄▄▄ ▄  ▄ ▄▄▄     Version 1.1      │
     │                █  █ █  █ █▄▄     January 90       │
     │                █  █ █▄▄█ █▄▄                      │
     │                ▀▀▀▀▀                              │
     │                █▄▄▄▄▄▄▄▄▄▄▄█                      │
     │            <<< QUE ACCOUNTING >>>                 │
     │            Copyright (c) 1989,1990                │
     │              Time and Attendance                  │
     └───────────────────────────────────────────────────┘
Description

When you first bring up the system you are greeted with the
banner screen. If you have a demonstration copy, instructions
will appear on the bottom of the screen directing you on how to
obtain a registered version.

In the upper right hand corner of the screen, the version number
and date of issue are displayed. These numbers are important when
calling the helpline. Please have these handy for the Support
Service individual to hasten research.

Getting Started

Press enter to display the Company logon screen and enter the 3
character company identifier and Password to proceed.

For first time users, enter 'AAA' and 'test' to acquire access
into the system. In you desire to run the built-in practice
system enter ZZZ and 'test'.

Recommendation

Remember, once your own company records are entered, delete the
'AAA' record to avoid unauthorized entry.

Please refer to this manual as necessary. It is written as an
'hands-on' instructional operational tool but has a brief
narrative (Functional Description) section that helps to explain
the sometime complex issues inherent in such a powerful and
flexible package.
            ╔═══════════╗
║ Main Menu ║
╚═══════════╝
   ┌─────────────────────────────────────────────────────────┐
   │19:45:10            Time and Attendance        12/23/90  │
   │Company-> ABC           Main Menu              Period: 7 │
   │                                                         │
   │F1 Help      ESC Exit         F6 Calculator   F10 Window │
   │              ┌───────────────────────────┐              │
   │              │ QUIT EXIT from System     │              │
   │              │                           │              │
   │              │ EM. Employee Files        │              │
   │              │ VR. Time Card Validations │              │
   │              │ TS. Time Sheet Report     │              │
   │              │ PE. End of Period Close   │              │
   │              │ AR. Adhoc Report Menu     │              │
   │              │ CK. Clock and Polling Menu│              │
   │              │ MT. Maintenance of Tables │              │
   │              │ RW. Query and Report Write│              │
   │              │ UT. Utility Menu          │              │
   │              └───────────────────────────┘              │
   └─────────────────────────────────────────────────────────┘

Description

The Main Menu provides the entry point to the various functions
within the system. The menu items are in the sequence most likely
to be used. 

Items are selected by moving the highlight bar to the desired
option and pressing enter or by pressing the leftmost character
of the desired selection ( eg. V for VR Time Card Validations).

The top two lines are standard screen headings and indicate the
time and date the function was accessed, the company logged onto,
and the current period.

The third line describes the global function keys that may be
used throughout most of the system. 

    F1  Help        Context senstive help
    ESC Exit        Exit current process
    F6  Calculator  Popup calculator
    F10 Window      Context sensitive lookup table 

╔═══════════════════╗
║EM EMPLOYEE RECORDS║     
╚═══════════════════╝
   ┌────────────────────────────────────────────────────────┐
   │  09:23: 3         Time and Attendance      02/23/90    │
   │ Company-> ABC      Employee Records        Period: 7   │
   │                                                        │
   │ F1 Help      ESC Exit     F6 Calculator     F10 Window │
   │                                                        │
   │                                                        │
   │                 Workrule:  99                          │
   │                 Company:  ALL                          │
   │                                                        │
   │                                                        │
   │ This screen allows you to select only those individual │
   │ related to a particular workrule and/or company.       │
   │ The default values, as they appear, will provide all   │
   │ employees in the system.                               │     
   └────────────────────────────────────────────────────────┘    

Description:

The access screen to EM allows selection of a subset of      
employees. The default values as they appear in the example will
grab all employees in the system. This segregation, although not
a requirement of the system, increases control and workflow by
presenting employees into logical groupings.                     

The values accepted in the Workrule field are any valid code that
exists in the workrule file as well as '99', the identifier used
for all workrules.  

Corporate Access

Accordingly, the Company field will accept any entry from the
SETUP file and 'All', if the Corporate Access field in the SETUP
file is turned on ('T' value). Otherwise, only individuals from
the logged-on company will be accessible.
╔══════════════╗
║EM Main Screen║
╚══════════════╝                                                
   ┌────────────────────────────────────────────────────────┐
   │  09:23: 3         Time and Attendance      02/23/90    │
   │ Company-> ABC      Employee Records        Period: 7   │
   │                                                        │
   │                                                        │
   │ F1 Help     ESC Exit       F6 Calculator   F10 Window  │
   │                                                        │
   │  Soc Sec Num  Employee Name         WR  Job    Company │
   │ ┌─────────────────────────────────────────────────────┐│
   │ │ 111-22-3331 Jay              J     A1  ABCD         ││
   │ │ 111-22-3333 Smith            John  A1  ABCD         ││
   │ │ 111-22-3335 McQueen          Jerry     ABCD         ││
   │ │ 222-22-2222 Kong             King  A2  ABCD     AAA ││
   │ │ 333-33-3333 Kzajan           Goth      ABCD         ││
   │ │ 444-44-4444 McLaughlin       John  A2  ABCD     BBB ││
   │ └─────────────────────────────────────────────────────┘│
   │F2 Address  F3  Print report  F4  Schedule  F5 Time Card│
   │                                                        │
   │ A Add    E Edit   D Delete  <> to move     Esc to exit │
   └────────────────────────────────────────────────────────┘

Description:

The EM main screen acts like a control center for all employee
related functions. Except for F3, all functions work on an
individual employee. 
 
An employee is selected by moving the highlight bar to the
desired individual. For quicker search methods, PgUP and PgDn
keys may be used to skip through the master file, a page at a
time.

If the selection screen requested a specific workrule and/or
company, only employees with that workrule and assigned to the
specified company would appear in the screen.

F2 Address Info

                                                                  
 ┌───────────────────────────────────────────────────────────┐
 │ 19:45:43           Time and Attendance            02/23/90│
 │ Company-> ABC       Employee Records             Period: 7│
 │                                                           │
 │ F1 Help      ESC Exit         F6 Calculator    F10 Window │
 │                                                           │
 │        ┌───────■<< ADDRESS INFORMATION >>■──────┐         │    
 │        │Name:      J Jay                        │         │    
 │        │Workrule:  A1       Socsec#:111-22-3331 │         │    
 │        │Job Class: ABCD     Company: ABC        │         │    
 │    ┌──■└────────────────────────────────────────┴─┐       │    
 │    │Street: 1123 Market Street                    │       │    
 │    │City: West Chester        St:PA   Zip:19182   │       │
 │    │  Rate:10.000   Status:A    Hiredate:01/01/83 │       │
 │    │  Type: F                                     │       │
 │    └──────────────────────────────────────────────┘       │
 └───────────────────────────────────────────────────────────┘
                                                              

Description

F2 is used to keep certain private information on employees. Only
the bottom portion of the screen is accessible in this mode. The
other information is recorded and modified through the Add and
Edit functions decribed later.

Edits

The Status field accepts two values: 'A' for active and 'I' for
inactive.

The Type field accepts either a 'P' or 'F', for Part-time and
full time, respectively.

The State field only accepts valid states while the Hiredate
entry must be a valid date.

** As the system matures, undoubtedly more fields will be added
to this screen. For now it is our intentions to keep the
application as simple as possible and to not duplicate a Payroll
System, especially our own, QUE Accounting Payroll. 


F3 Print Master


  ┌─────────────────────────────────────────────────────────┐
  │ 19:49:18            Time and Attendance       02/23/90  │     
  │ Company-> ALL         Employee Print          Period: 7 │
  │                                                         │
  │  F1 Help      ESC Exit      F6 Calculator   F10 Window  │
  │                                                         │
  │                                                         │
  │                       Workrule:  99                     │
  │                       Company:  ALL                     │
  │                                                         │
  │  This screen allows you to select only those individuals│
  │  related to a particular workrule and/or company.       │
  │  The default values, as they appear, will provide all   │
  │  employees in the system.                               │     
  │  ┌──────────────────────────────────────────────────┐   │     
  │  │ Sort by 1)last name 2)social sec num 3) workrule │   │
  │  │     (Press ESC to exit without printing)         │   │     
  │  └──────────────────────────────────────────────────┘   │
  └─────────────────────────────────────────────────────────┘

Description

This option prints the information recorded in the employee
master file for all those employees meeting the criteria as
defined in the previous screen. Two lines of information are
printed for each employee.

The report should be periodically ran and stored offsite to
assure a recent list of employees is accessible, in case of a
mechanical failure.
 
The operator has the option of printing the report in three
different sequences. The social security number order is shown
below.




               (report example goes here)






F4 Employee Schedule

 ┌────────────────────────────────────────────────────────┐
 │19:45:43          Time and Attendance           02/23/90│
 │Company-> ABC       Employee Records           Period: 7│
 │                                                        │
 │F1 Help      ESC Exit       F6 Calculator     F10 Window│
 │                                                        │
 │          ┌─────────■<< Schedule >>■────────────┐       │
 │          │Name:  J Jay                         │       │
 │          │Workrule: A1      Sosec#: 111-22-3333│       │
 │          │Job Class: DISHR                     │       │
┌┘          └─────────────────────────────────────┘       └┐
│   1/10/89 1/11/89 1/12/89 1/13/89 1/14/89 1/15/89 1/16/89│
│Strt 06:12   11:30                   07:30           07:30│
│End  15:00   19:00                   15:30           14:30│
│Code  REG     REG     REG     REG     REG     REG     VAC │
│Add    T       F       F       F       F       F       T  │
│Job   DISH    DISH    DISH    DISH    DISH    DISH    DISH│
│                                                          │
│Ctrl-W save edits Esc exit without saving  Ctrl-C  delete │
└──────────────────────────────────────────────────────────┘
Description

The employee schedule is used to monitor variable shift employees
and to create time records for times when the employee is absent
or otherwise unable to use the clock.

Operations

If a schedule for the employee selected has not been created for
the current week, the operator will be prompted with a message
and the schedule will be created using the current week as
recorded in the SETUP table. Default values of 'REG', 'F' and the
jobclass from the employee's master file will be placed in the
Code, Add and Job fields ,respectively.

Not until a value is placed in the Strt and End fields will the
date be activated for use by the Validation Report (VR) as edits
for the arrival and departure checks.

Using the cursor and/or the CTRL Home and CTRL End keys the
cursor is moved about the screen. All Time fields, Codes, and
Jobs must be validated at the time of entry or an error will be
displayed and correction forced before continuing. If the value
is unknown, the F10 key may be pressed to display the appropriate
table of available values or ESC may be used to abort the current
process.


F5 Time Cards

┌────────────────────────────────────────────────────────────┐
│ 19:45:43          Time and Attendance           02/23/90   │
│ Company-> ABC       Employee Records           Period: 7   │
│                                                            │
│ F1 Help      ESC Exit       F6 Calculator     F10 Window   │
│                                                            │
│  Soc Sec Num  Employee Name           WR  Job    Company   │
│    ┌────────────────■<<Time Records>>───────────────────┐  │
│    │                                                    │  │
│    │  Name:    J Jay               Socsec#: 111-22-3331 │  │
│    │  Workrule: A1        Job Class: DISHW              │  │
│    │                                                    │  │
│    │  Date  Punch Acttime Adjtime Timecode Job Override │  │
│    │ ┌───────────────────────────────────────────────┐  │  │
│    │ │10/10/89 1   12:23   12:24     REG  DISHW      │  │  │
│    │ │10/10/89 9   16:22   16:24     REG  DISHW      │  │  │
│    │ │10/11/89 1   07:30   07:30     VAC  DISHW      │  │  │
│    │ │10/11/89 9   12:00   12:00     VAC  DISHW      │  │  │
│    │ │10/12/89 1   07:23   07:24     REG  COOK1      │  │  │
│    │ │10/12/89     11:23   11:24     REG  COOK1      │  │  │
│    │ └───────────────────────────────────────────────┘  │  │
│    └────────────────────────────────────────────────────┘  │
│                                                            │
│ A Add     E Edit     D Delete  <>  to move     Esc to exit │
└────────────────────────────────────────────────────────────┘
Description

The Time Card function offers a scrolling screen full of time
records for the selected employee. Similar to the EM main screen,
the desired record is chosen by highlighting it and pressing one
of the active function keys (A,E,D).

Edits

Proper validations are activated; valid date within the current
period, valid punch values(1,2,9 AND SPACE), military time
range(00:00 - 23:59), and timecode and override codes that exist
in the corresponding tables.

Windows are available while in the TimeCode, Job and Override
Code fields.
Add and Edit Function

 ┌─────────────────────────────────────────────────────────┐
 │19:45:43            Time and Attendance         02/23/90 │
 │Company-> ABC         Employee Records          Period: 7│
 │                                                         │
 │F1 Help      ESC Exit        F6 Calculator     F10 Window│
 │                                                         │ 
 │    Soc Sec Num  Employee Name           WR  Job  Company│  
┌┴─────────────────────────────────────────────────────────┴─┐
│  (SSN)      (First)      (Last)            (WR)(Job) (Comp)│ 
│111-22-3331   J            Jay               A1 ABCD        │ 
└┬─────────────────────────────────────────────────────────┬─┘
 │   111-22-3335 McQueen              Jerry A1  ABCD    AAA│
 │   222-22-2222 Kong                 King  A2  ABCD    AAA│
 │   333-33-3333 Karakin              Gaya  A1  ABCD    BBB│
 │   444-44-4444 McLaughlin           John  A2  ABCD    BBB│
 ├─────────────────────────────────────────────────────────┤ 
 │        Ctrl-W save edits    Esc exit without saving     │
 └─────────────────────────────────────────────────────────┘
Description

Both the Add and Edit functions use the same expanded screen as
highlighted in the center of the screen. The example shown is the
EM function but a similar screen is available for time records. 

Operations

Add will create a blank record for data entry. Upon exiting with
Ctrl W the new record will be saved into the file and placed in
the proper date sequence. If ESC is pressed the record is not
added and the employee's records will be restored to the previous
values.

Edit will popup the highlighted record for modification. Ctrl W
will save the new changes and ESC will abort them, restoring the
original values upon return to the screen. 

All the validation checks as defined in the F5 Time Cards
function are entact.

Delete Screen

Pressing D for deletion will automatically warn the operator that
he/she has made the selection. A confirmation key press (Y or N)
is needed before the record is actually deleted.

Deletion of any record will reposition the remainding records on
the screen placing the cursor on the record prior to the one last
deleted.
╔═══════════════════════╗
║VR Time Card Validation║
║TS Time Sheet Report   ║
╚═══════════════════════╝

Report Parameter Screen
    
 ┌──────────────────────────────────────────────────────────┐
 │06:50:38           Time and Attendance           02/24/9  │
 │Company-> ABC       Time Card Report             Period:  │
 │                                                          │
 │F1 Help      ESC Exit        F6 Calculator     F10 Window │
 │                                                          │
 │                                                          │
 │             Enter Date Range     From : 10/12/90         │
 │             to be processed       To  : 10/12/90         │
 │                                                          │
 │             Workrule Code for edit  : 99                 │
 │             Print by 'A'lpha or 'S'ocial order?          │
 └──────────────────────────────────────────────────────────┘

Description

The parameter screen is used for both the Time Sheet and
Validation report programs. It allows selection of a range of
records based on date and workrule values.

Any date range within the current period may be entered.

(For a detailed description of both the Time Sheet Report
and Validation Report programs consult the functional description
portion of this manual.)

Validation Report

An example of a report is shown below:


        (report example goes here)






Time Sheet Report

An example of a report is shown below:



        (report example goes here)




The operator has the option of producing single sheet time sheets
or multiple employees on 1 page. The single sheet option is to
enhance privacy while an employee verifies his earnings and signs
for his receipt.╔═══════════════════════════╗
║PE End of Period Processing║
╚═══════════════════════════╝

┌────────────────────────────────────────────────────────┐
│ 19:45:43          Time and Attendance         02/23/90 │
│ Company-> ABC     PE Period Process          Period: 7 │
│                                                        │
│                                                        │
│                                                        │
│                Do you wish to continue?                │
└────────────────────────────────────────────────────────┘

Description

The PE end of period process clears out the current
transaction files, archives the Time Sheet entries into
history files and rolls forward the Employee Schedules and
current period dates.

Once performored the only way to go back into this closed period
is to restore files from diskettes.

If you are currently logged onto a company with corporate access,
you will be given the chance to close the periods for all
companies. If the Force VR/TS flag is turned on, each company in
the computer must have a 'go ahead' status to continue the Period
End Process.

To obtain the 'go ahead' state, run both the Validation Report
and the Time Sheet and clean up any errors before proceeding.

End of Year Process

When the current period is the same as the number of periods as
set in the company's setup record (SW), the end of period process
is activated. The operator will be prompted for the year just
closed and all records for employees in that compeny will be
copied from the yearly history file to a file named after the
closing year (eg. TAAA1989).

Each company must be closed separately at the end of year
process.╔════════════════════╗
║AR Adhoc Report Menu║
╚════════════════════╝
 ┌──────────────────────────────────────────────────────────┐
 │09:51:48            Time and Attendance          02/24/90 │
 │Company-> ABC        Adhoc Report Menu           Period: 7│
 │                                                          │
 │F1 Help      ESC Exit         F6 Calculator    F10 Window │
 │                 ┌────────────────────────┐               │
 │                 │QUIT return to MAIN MENU│               │
 │                 │                        │               │
 │                 │AO. Approaching Overtime│               │
 │                 │EL. Employee Listing    │               │
 │                 │TS. Time Sheet Summary  │               │
 │                 │SC. Employee Schedules  │               │
 │                 └────────────────────────┘               │
 └──────────────────────────────────────────────────────────┘

Description

The Approaching Overtime report prompts for the number of hours,
the company code and the workrules to used in the selection
criteria. 

The report is only an estimate of the actual time worked and does
not include modifications due to grace periods.

An example of a report appears below:









The Employee Listing is a listing of employees in a selected
range similar to the Time Card Validation report but excluding
any edits.







The History reports access the history file and may be used to
get reports based on time codes, social security numbers and job
classes. 


** At the current time (version 1.1) the user is directed to use
the RW Query and Report Writer function to produce reports from
the history file (TAHIST). This is done for two reasons; a) to
receive feedback on what reports should be included in this
section and b) to receive feedback on the use of RW.

It is the intent in future releases to produce some commonly
requested report programs as options off of this menu. 







The Employee Schedules may be printed in three different formats.
The two ghant charts may be used for posting of weekly schedules.
The symbol used to produce the ghant charts is retrieved from the
companies setup record (SW).


























╔══════════╗
║Clock Menu║
╚══════════╝
 ┌──────────────────────────────────────────────────────────┐
 │09:51:48            Time and Attendance          02/24/90 │
 │Company-> ABC         Clock Menu                 Period: 7│
 │                                                          │
 │F1 Help      ESC Exit         F6 Calculator    F10 Window │
 │                 ┌────────────────────────┐               │
 │                 │QUIT return to MAIN MENU│               │
 │                 │                        │               │
 │                 │SU. Transfer file Setup │               │
 │                 │TR. Transfer Time Record│               │
 │                 │BD. Badge Table         │               │
 │                 │CK. Clock Table         │               │
 │                 └────────────────────────┘               │
 └──────────────────────────────────────────────────────────┘

Description
   
The Clock Menu has the functions necessary to connect the QUE
Time and Attendance to time clocks and/or other computer systems.
However, none of these functions are necessary if you are only
keying in the data.

SU Setup Transfer Table

    09:53:29          Time and Attendance          02/24/90
    Company-> ABC    Setup Transfer Table         Period: 7

    F1 Help      ESC Exit            F6 Calculator   Record 1

            Field Name  Start  Ending   Length
      ■────────────────┬──────┬───────┬─────────■
               DATE    │   1  │   7   │    8
               HOUR    │   8  │   9   │    2
               MIN     │  10  │  11   │    2
               BADGE   │  12  │  21   │   10
               JOB     │  22  │  27   │    6
                       │      ■       ■
Description

The Setup table relates the fields needed for Time and Attendance
to the source file produced from external sources. The field
locations as defined by the Start and Ending parameters to be
entered, are based upon the particular positions these values
possess in the input file. The values will of course depend on
the type of clock and/or system you are using to collect time
records.

CAUTION

If these locations are incorrect so will be the data derived from
these files. It is therefore very important to have accurate
figures and it is suggested that the file be printed out, the
positions counted by hand and the conversion process tested
thoroughly before placing into production.

Assume for example the following record is created for each time
entry pulled from the time clock.

  000000X011390otherzz07:361000010010otherdata
  |      |            |  |  | 
  Job    Date         Hr Min Badge

The needed information as underlined would be identified in the
Setup table as the following:


   Field Name  Start  Ending   Length

     DATE        8     13        6
     HOUR       21     22        2
     MIN        24     25        2
     BADGE      26     35       10
     JOB         1      6        6

Although the JOB field is reserved for job transfers and job
costing requirements, other data may be used for other needs.

Note the field lengths are not negotiable but their positions in
the source file are. Also note that gaps are acceptable and will
be handled properly in the creation of the cross reference file
(TAXREF).

Once the table is complete and the screen exited the cross
reference file (TAXREF) is actually created. It may be reviewed
by selecting it in the RW function.

TR Transfer Time Records

This program uses the cross reference file(TAXREF) to transfer
time records into the proper format. It also validates all badge
numbers against the Badge Id table and kicks out all transactions
with invalid or inactive badges, and social security numbers not
on the master file.

The records printed on the error report are not transferred into
the system and must be entered by hand. This discipline enforces
usage of the system as intended.

(report example here)

Badge Table

    09:53:29          Time and Attendance          02/24/90
    Company-> ABC        Badge Table            Period: 7

    F1 Help      ESC Exit            F6 Calculator   Record 1

                Badge Id   SocSecNum   Status     
                ■─────────┬──────────┬───────■
                1000010010│123445666 │   A
                1000010011│123445668 │   I
                          ■          ■
Description


The badge table keeps the cross reference of badges to employees.
It also provides the ability to mark badges as inactive or lost
(I status). Inactive badges will not transfer into the Time Card
file.

Only valid Social Security numbers may be entered. Therefore a
new hire must be assigned a master record before a badge can be
issued.

Clock Table

    09:53:29          Time and Attendance          02/24/90
    Company-> ABC        Clock Table            Period: 7

    F1 Help      ESC Exit            F6 Calculator   Record 1

           Clock Id  Location      Type    Connection
           ■─────┬───────────────┬───────┬───────────■
             03  │  Morris Hall  │ Amano │ Direct
             04  │  Student Union│ Latham│ Modem
                 ■               ■       ■

This information has little to do with actual operations. As
employed here, it simply records some basic information on
installed clocks. The table is not used in any other way with the
standard package.

** Most Time Clock manuafacturers will provide software that has
all the necessary tables needed to transfer records from the time
clock, determine when data is to be  collected and record other
information about the time clocks.╔════════════════╗
║Maintenance Menu║
╚════════════════╝

 ┌──────────────────────────────────────────────────────────┐
 │09:51:48            Time and Attendance          02/24/90 │
 │Company-> ABC         Maintenance Menu           Period: 7│
 │                                                          │
 │F1 Help      ESC Exit         F6 Calculator    F10 Window │
 │                 ┌────────────────────────┐               │
 │                 │QUIT return to MAIN MENU│               │
 │                 │                        │               │
 │                 │JC. Job Class Table     │               │
 │                 │TC. Time Code Table     │               │
 │                 │OC. Override Code Table │               │
 │                 │HL. Holiday Table       │               │
 │                 │WR. Workrule Table      │               │
 │                 │SW. Setup Table         │               │
 │                 └────────────────────────┘               │
 └──────────────────────────────────────────────────────────┘

Description

The maintenance menu provides the ability to modify and print the
system tables used in validation and in assuring system
integrity. 

Each option on this menu uses the same key strokes for navigation
and updating procedures. Once you're familiar using these keys in
one program the knowledge is easily transferred to other tables.

For this reason description of these keys is only presented once:

  Ctrl Home    Beginning of record
  Ctrl End     End of Record
  Ctrl ->      Pan to the right
  Ctrl <-      Pan to the left
  Enter        Open a field for modification
  F7           Find a specific value
  CTRL-PgDn    Goto Bottom of file
  Ctrl-PgUp    Goto Top of file
  -            Delete current record
  +            Add a record                         

Also upon making a selection the operator will be asked whether
or not a printed report is desired. Each of the entries on the
menu has this print option.
Job Class Table

 ┌──────────────────────────────────────────────────────────┐
 │09:52:12            Time and Attendance           02/24/90│
 │Company-> ABC         Job class Table             Period: │
 │                                                          │
 │F1 Help      ESC Exit        F6 Calculator  F10 Window    │
 │Record 4                                                  │
 │                                                          │
 │            Job Class Description          Rate           │
 ├─────────────────────┬────────────────────┬───────────────┤
 │             ABCD    │ Dishwasher lead    │ 11.111        │
 │             CDEF    │ Dishwasher II      │ 12.340        │
 │             GGGG    │ Cook Helper        │  8.340        │
 │             LLLL    │ Supervisor         │ 13.110        │
 │             ZZZZZZ  │ Last entry         │  0.000        │
 ├─────────────────────┴────────────────────┴───────────────┤ 
 │< Select + Add - Delete F2 Go Bot F7 Find > Change Esc Exi│
 └──────────────────────────────────────────────────────────┘
Description

Used throughout the system to verify Job Class values entered on
the clock or through the EM Schedule, Time Cards and Add
functions.

The Time Sheet program uses the rate in determining exceptional
pay for temporary assignments.

Time Code Table

    09:52:34           Time and Attendance           10/24/90
    Company-> ABC        Time Code Table            Period: 7

    F1 Help      ESC Exit         F6 Calculator   Record 3

           Time Code Description          Factor Type
    ■─────────────┬───────────────────────┬──────────■
            150   │   Time and a half     │ 1.500 O
            200   │   Double Time         │ 2.000 O
            HOL   │   Holiday             │ 1.000 N
            REG   │   Regular             │ 1.000 N
            SCK   │   Sick time           │ 1.000 N
            VAC   │   Vacation            │ 1.000 N

Description

The Time Code table is used in verifying the types of
transactions processed and to record activity by time categories.

The Factor field is used in determining the actual overtime pay
given for daily and weekly ovetime hours. A 1.500 factor, for
instance, would pay an individual 1.5 times their normal rate for
each hour worked. * Type is currently inactive.Override Code Table

    09:52:50           Time and Attendance          02/24/90
    Company-> ABC      Override Code Table         Period: 7

    F1 Help      ESC Exit           F6 Calculator   Record 3

                    Override Code Description
   ■──────────────────────────┬─────────────────────────────■
                    AUT       │   Authorized
                    OK1       │   OK first time
                    OK2       │   OK second time but..
                              ■

Description

The override code table contains whatever three characters you
prefer to designate as exception authorizations. 

The override code is used to skip the suspension placed on
records with errors.


Holiday Table


    09:53:11           Time and Attendance         02/24/90
    Company-> ABC         Holiday Table           Period: 7

    F1 Help      ESC Exit           F6 Calculator   Record 5

                    Holiday Date Description
 ■──────────────────────────────┬───────────────────────────■
                     10/15/89   │ test holiday
                     01/01/90   │ New Year's
                     05/29/90   │ Birthday
                     07/04/90   │ July 4th
                     12/25/90   │ Christmas
Description

Keeps a file of all valid holidays in the coming year. All valid
employees will get pay for the holiday week as represented by a
HOL record created during the VR process.

Workrule Table


    09:53:29          Time and Attendance          02/24/90
    Company-> ABC        Workrule Table            Period: 7

    F1 Help      ESC Exit            F6 Calculator   Record 1

Workrule Description      Skip Edits Weekly Hours Daily Hours 
■──────┬──────────────┬─────────────┬───────────┬────────────■
  A1   │ First Shift  │    N        │    37.5   │     6.5     
       ■              ■             ■           ■
Time Unit Daily Rd Start Hr Start Min End Hr End Min Holiday
■───────┬────────┬────────┬─────────┬───────┬──────┬─────────■
  3     │  12    │   07   │   30    │   15  │  00  │  1.230
        ■        ■        ■         ■       ■      ■
Minimal Punch Brk Duration Lunch Reqd? Paid for Lunch
■────────────┬─────────────┬──────────┬──────────────■
     2       │     30      │     Y    │      N
             ■             ■          ■
Arrival Grace  Lunch Grace Depart Grace  Differential?
■────────────┬────────────┬─────────────┬─────────────■
  5     10   │    15      │  10     5   │     Y
             ■            ■             ■
Mon fact Mon rate Tue fact Tue rat  Wed fact Wed rate 
■───────┬───────┬─────────┬───────┬─────────┬────────■
REG     │  0.00 │ 150     │   0.00│ REG     │   0.00  

Thu fact Thu rate Fri fact Fri rate Sat fact Sat rate 
■───────┬───────┬─────────┬───────┬─────────┬────────■
REG     │  0.00 │ 150     │   0.00│ REG     │   0.00  
        ■       ■         ■       ■         ■
OT? Over Under Fact Over Under Fact Over Under Fact Weekly
■──┬──────────┬────┬─────────┬─────┬──────────┬─────┬───────■
 Y │6.5   8.0 │150 │8.0   9.0│ 150 │9.0  24.0 │150  │ 150
   ■          ■    ■         ■     ■          ■     ■


Description

There are several screens of information pertaining to each
workrule. These screens may be accessed by panning to the right
either on a field by field basis or by using the control keys
combination (CTRL->, Ctrl <-, Ctrl Home, Ctrl End).

The first four lines are basically related to edits performed
during the Validation Report.

   Skip Edits  -  Y means don't suspend a record if there is
                  an error.
   Weekly Hours - Number of normal hours worked during a week.
                  Anything over constitutes weekly overtime.
   Daily Hours -  Number of normal hours worked during a day.
                 Anything over constitutes daily overtime.
   Time Unit   - Rounding factor for Punches. If ' 1', 
                 rounding is done on a daily basis using the
                 Daily Rd. amount.
   Start Hr    - The default starting time for this workrule.
   Start Min     Is used in VR when no scheduled times are
                 used.

   End Hr      - The default ending time for this workrule. Is
   End Min       used in VR when no scheduled times are used.

   Holiday Pay - Factor applied to an employee who works a
                 Holiday.
   Minimal Punch - The minimal number of punches necessary to
                   constitute a shift.
   Brk Duration  - The amount of time(minutes) allocated for
                   a break or lunch period.
   Arrival Graces - The amount of leeway given for a punch.
   Depart Graces

The remainding fields relate more to the actual pay calculations
performed in the Time Sheet report.

   Lunch Reqd?    - If 'Y' lunch must be deducted.
   Paid for Lunch?- If 'Y' lunch is not deducted but the
                    duration is still calculated.
   Mon-Sun Factors - The extra factor given to hours worked
                     on the assigned days.
   Mon-Sun Rates   - The differential rate in dollars given
                     for hours worked on specified days.
   OT?             - If 'Y' daily overtime will be considered.
   Differential?   - If 'Y' differentials will be assigned.
   Over Under Factor - Determines the pay factors for daily
                       overtime ranges.

An example of a printed workrule appears below:






SW Setup Table

    09:52:50           Time and Attendance          02/24/90
    Company-> ABC         Setup Table              Period: 7

    F1 Help      ESC Exit           F6 Calculator   Record 3

   Week Date  Company  Passwo d  Number of Periods Current
 ───────────┬────────┬───────┬────────────────────┬────────
   01/01/90 │  AAA   │  test │        52          │  26    
            │        │       │                    │        
 Screen Head  Report Head  Print Code  Auto Backup and Restore
 ────────────┬────────────┬──────────┬────────────┬───────────
  Test AAA   │ Test AAA   │   15     │    T       │   F

 Force VR/TS  VR/TS Status Corporate Access Barcode
 ────────────┬────────────┬────────────────┬──────┬───────────
     T       │    1       │      F         │  >   │
                                            


Description

The setup table controls:

  1) access through the company password and corporate access
     fields,
  2) screen and report headings and print format through 
     Screen Head, Print Head and Print Code
  3) period processing through the VR/TS status code and
     Number of Periods, Week Date and Current values.


╔════════════╗
║File Listing║
╚════════════╝

This information is provided to work with the RW function but may
contain certain information that should be restricted from
personnel.

TACARDS        Stores the time records as collected from the
               clock or as keyed in (F5).
TASHEET        Stores the time sheet entries created during the
               Time Sheet report. Same as the summary section
               for each employee
TAHIST         Stores all time sheet entries for the year.
               TASHEET is appended during the PE process
TA9999         Stores all time sheet entries for the year(9999)
               TAHIST is appended during the End of Year PE
               process.
TAMAS          Employee master file. Includes name, address, job
               class and other information.
TAWORK         Workrule file. Includes the starting and ending
               times for various workrules along with the grace
               periods, differential rates and other criteria.
TNAMEM         Company control file. A record exists for each
               company in the system. Controls processing and
               system access.
TASCHED        Employee schedules.
TABADGE        Stores badges assigned to employees. Used for 
               electronic time clocks and transferring punches
               from other systems.
TACLOCK        Miscellaneous Table that keeps information on time
               clocks.
TAHOLD         Holiday Table
TAJOBC         Job class table
TAOCODE        Override code table
TATCODE        Time code table


╔════════════╗
║Utility Menu║
╚════════════╝

 ┌──────────────────────────────────────────────────────────┐
 │09:51:48            Time and Attendance          02/24/90 │
 │Company-> ABC         Utility Menu               Period: 7│
 │                                                          │
 │F1 Help      ESC Exit         F6 Calculator    F10 Window │
 │                 ┌────────────────────────┐               │
 │                 │QUIT return to MAIN MENU│               │
 │                 │                        │               │
 │                 │BU. Backup files        │               │
 │                 │RS. Restore from Backups│               │
 │                 │IX. Reindex files       │               │
 │                 │HP. Help Manual         │               │
 │                 └────────────────────────┘               │
 └──────────────────────────────────────────────────────────┘

Description

The utility menu includes miscellaneous functions and those
outside the normal realm of operations. They are however very
important elements of the system.

Backup / Restore / Reindex

The first three options on the menu prime responsibility is
recovering from hardware and unexpected system malfunctions. 

The Backup feature copies the system files to backup diskettes.
So that in the case of an emergency they may be used to restore
the system back to the point in time the copy was made. It is a
good idea to perform this operation periodically based on a
specific event such as after the close of a period. 

The Restore function is selected to perform the restoration of
files back onto the system. Diskettes must be saved using the
backup feature of this system in order to perform a restore.

The Reindexing utility is called automatically by the end of
period process but may be called more frequently. It recreates
your file linkages and cleans up any unused space reserved by
deleted records. It is usually the first recourse when
experiencing index problems as may be noted by missing or out of
sequence data.

The simple on screen instructions will guide you through the
operations of each function.


Help Manual

The Help Manual module provides the mechanism to display text
onto the CRT screen and allow for paging through the manual as if
paging through a book.

Since any ASCII files may be perused through this function, it
serves as an excellent conduit on which to provide notes, and
training material to individuals using the system.

Note files must have an extension of TXT in order to be visible
in the file selection window. 

```
{% endraw %}

## ORDER.TXT

{% raw %}
```


                       QUE ACCOUNTING     June 1990
                         Order Form

                                     Price  Qty

  QUE Accounting General Ledger      $ 45   ____

  QUE Accounting Accounts Payable    $ 45   ____

  QUE Accounting Accounts Receivable $ 45   ____

  QUE Accounting Payroll             $ 45   ____  

  QUE Accounting Query / Report      $ 10   ____  **
      Writer, Notepad and Calculator


All modules above may be purchased together for the reduced
price of $145.00.

  QUE Time and Attendance            $135   ____
      Query and Report Writer

  Printed Manual                      $10   ____
(for each function)

** Must be included with purchase of another module.


Mail Order and check payment to:

  QUE Accounting
  Suite 180
  1450 West Chester Pike
  West Chester, PA 19382

 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2497

     Volume in drive A has no label
     Directory of A:\

    QUETNA   ZIP    234163   9-14-90  10:13a
    INSTALL  BAT       345   9-14-90  10:08a
    PKUNZIP  EXE     22022  10-01-89   1:02a
    GO       BAT        28  10-04-90   5:21a
    GO       TXT      1118  10-10-90   1:53p
    FILE2497 TXT      2669  10-10-90   2:06p
            6 file(s)     260345 bytes
                           58368 bytes free
