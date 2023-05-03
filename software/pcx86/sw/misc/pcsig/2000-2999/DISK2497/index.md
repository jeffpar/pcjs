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

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  DISK #2497 QUE ACCOUNTING TIME & ATTENDANCE  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install the program from your hard drive root directory, type:       ║
║ A:INSTALL SUBDIRECTORY  (eg. C>A:INSTALL TAMAS )                        ║
║                                                                         ║
║ To start the program once it's been installed, type: TAMAS              ║
║ (Note: The program needs at least FILES=20 in your config.sys)          ║
║                                                                         ║
║ To print the documentation, type: COPY TNAMAN.TXT PRN   and             ║
║                                   COPY OPERMAN.TXT PRN                  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990-1991, PC-SIG Inc.

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

## TNAMAN.TXT

{% raw %}
```
╔══════════════════════╗
║FEATURES AND BENEFITS ║
╚══════════════════════╝


                       HARDWARE REQUIREMENTS

 The system requires an IBM PC or PC compatible computer with
640K memory, a printer, and a 5 1/4 inch diskette drive, although
a hard disk is highly recommended.

                                
                         SYSTEM BENEFITS

 $ Increased accuracy in Payroll calculations
 $ Reduction in Payroll Preparation Time
 $ Improved efficiency in labor allocation
 $ Timely reporting of errant behavior
 $ Improved forecasting using historical data


                         SYSTEM FEATURES

 * Customized workrules
 * Reporting by client specified groupings
 * Menu and screen driven
 * Live tutorial
 * Pop-up validation tables
 * Query and Report Writer capabilities
 * Transmission capabilities
 * Interface with General Ledger and other popular software
 * Customized programming
 * Support Network

                                                  
                        SYSTEM OPERATIONS

 The emphasis on ease of use is demonstrated in the ergonomically
designed user interface. The Menus and screens provided serve as
a control center to the various functions performed daily and on
an interim basis.

 The daily process includes the iterative process of collecting
employee punches, producing edit reports and making the necessary
modifications to employee time records and schedules.

 On a less frequent interval (eg. weekly), the current period is
posted, final reports are produced, transactions are archived,
and changes are made to employee schedules for the upcoming week.╔════════════════╗
║SYSTEM BENEFITS ║
╚════════════════╝

 Increased accuracy in Payroll calculations

 *   Elimination of clerical errors through computerized
     calculations.
 *   Instantaneous comparison of time records against predefined
     management or labor negotiated constraints.
 *   Data integrity through badge validation and edit routines
     that only allow posting of good transactions.
 **  Audit trail database shows what changes were made by who and
     when.

 Reduction in Payroll preparation time

 *   Automatic cost extensions for gross pay, overtime and
     differential calculations.
 *   Transmission of time records directly into computer files.
 *   Reduces staff clerical requirements freeing up personnel for
     other activities.
 *   Provide on demand, neat, typed reports for presentation
 **  Provide transmission capabilities of data to Payroll
     department and/or Service bureaus

 Improved efficiency in labor allocation

 *   Timely information allows for immediate reaction to avoid
     unnecessary costs such as overtime.
 *   Historical database easily massaged to aid in forecasting
     and budgetary needs.
 *   Dynamic changes to employee schedule, workrules and job
     assignments.
 *   Record department / location, and job costing changes via
     time clock punch

 Timely reporting of errant behavior

 *   Edit reports show employees reporting late, leaving early,
     extending breaks, etc..
 *   History files can be used to highlight trends and document
     past behavior.
 *   Instant access tells which employees are absent or late for
     current shift.

 Improved forecasting using historical data

 *   Determine average labor costs per job class within specific
     locations.
 *   Show cyclical trends to aid forecasting of labor
     requirements.╔══════════════════╗
║SYSTEM OPERATIONS ║
╚══════════════════╝


Daily Process


 *   Employee(s) records arrival, breaks and departure at time
     clock.
 *   Operator selects the clock for transmission of data to
     computer or sets up for night time transmission.
 *   Operator runs the Transfer and Time Card Validation report
     to produce a report of time records failing validations as
     determined by the assignment of workrules to each employee.
 *   Operator distributes reports to supervisory personnel for
     confirmation and authorization of errors.
 *   Operator adjusts time card records accordingly using the
     Time Card Maintenance function.
 *   Management requests various reports to determine weekly
     hours, approaching overtime, scheduled hours and other
     employee data used to make quick schedule adjustments.



End of Period


 *   Processes all records in the system for the current period
     and prints out final Time Sheet reports.
 **  Transactions are posted to the General Ledger trial balance.
 *   Active file is closed and archived to the cumulative history
     files.
 *   Employee Master Schedules are modified and rolled forward
     for the upcoming week.
╔════════════════╗             
║SYSTEM FEATURES ║
╚════════════════╝


Customized Workrules

 *   Group employees together with similar edit rules such as the
     same start and ending times, lunch and break durations,
     grace periods for arrival and departures, overtime and
     differential calculations and more.
 *   Modified at any time.
 *   Flexibility ranges from having zero edits to a vast
     combination of individual factors.


Report by Groupings

 *   Three levels of reporting: Corporate, Company, and Workrule
 *   All reports may be executed for groupings and other
     delimiters such as date and hour ranges.
 *   All reports are dynamic and may be executed at will and as
     often as desired to assure the most up todate information.
 *   Powerful Query and Report Writer can produce most reports
     imaginable. Works with any DBASE type file.

Menu and Screen driven

 *   Latest technology using popup windows and highlight bars
     makes system easy to use.


Live Tutorial

 *   Practice system is based on a group of practice workrules
     and employees assigned during training sessions.
 *   Practice system may be invoked at any time while the real
     data is safely stored on a separate area of the computer.
 *   Provides all the features of real system.
 *   Integrated with system.


Popup Validation Tables

 *   Data entry validated against tables to avoid errors in
     recording.
 *   Tables are accessible from within data entry mode to access
     desired values.
 *   User defined codes for Time Codes, Authorization
     overrides,job classes and workrules.


Query and Report Writer

 **  Access window to data that allows operator to design his/her
     own data groups that may be printed or displayed on the CRT
     terminal.


Transmission Capabilities

 **  Payroll transactions may be transmitted to headquarters.


Interface with QUE General Ledger and Payroll

 **  System can be linked into QUE Accounting General Ledger
     or Payroll.
 *   Data may be converted to other file formats used by popular
     spreadsheet programs and other systems.

 
Customization

 **  Any part of the system may be modified to meet the
     individual customer's needs. Functions may be added or
     deleted as desired.
 **  Other systems development and consulting services available.
 *   Solely owned, developed and maintained by QUE Accounting.
 **  Customized manual

Support Network

 **  Telephone support by experienced computer users.
 **  Remote linkup capabilities enable support from afar as if
     the support individual were physically on location.



** If desired by client, these features can be easily
implemented. The base version does not include these items.  
╔══════════════════════╗
║FUNCTIONAL DESCRIPTION║
╚══════════════════════╝




INTRODUCTION



The Time and Attendance (T&A) system is used to collect, store
and validate time card entries as they are entered into the
computer via an electronic time clock interface, through the
keyboard or converted over from another computer system.


In order to use the system properly, a strong functional
understanding is needed. That is the intent of this section as
well as to introduce you to the various terms and concepts used
throughout this manual.


This section groups the various functions into four main areas:


      SETUP
      DAILY PROCESSING
      PERIOD END PROCESS
      UTILITIES



If you wish to skip this section and begin entering your tables
proceed to the MT section of the operator's manual.

╔══════╗
║SETUP ║
╚══════╝

T & A requires that applicable rules and regulations be set in
table formats recognized by the system. As an added benefit, this
exercise forces a rethink of payroll policies and many times
highlights inconsistencies and inefficiencies resulting from the
implementation of the manual system.

The table and rules listed below constitute the SETUP section.
They may be changed as often as needed but are rarely modified
after the initial setup. 

These tables are presented in the order in which they are to be
entered. The sequence given facilitates the SETUP process since
certain files depend on the entries of other files for
completion.

System Tables

     Time Code Table
     Setup Table
     Job Class Table
     Override Table
     Holiday Table
     Workrules
     Employee Master
     Employee Schedules 
     Clock Menu



Time Code Table

The Time Code Table contains the time codes and calculation
factors recognized by the system. Certain predetermined values
must reside in the table for the system to function properly.
These codes are:
     
    Code    Description     Factor

     HOL  holiday records    1.0
     REG  time card entries  1.0
     VAC  vacation time      1.0

The file may be expanded to include overtime codes, sick time,
personal time off and other categories.  Only codes residing in
this table may be used in the system

     150  time and a half    1.5
     200  double time        2.0
     SCK  sick time          1.0
     PTO  personal time off  1.0
Usage:

Time codes are assigned in the workrule file for overtime and
differential calculations and are required when entering time
entries.  Entries retrieved from a clock are given REG default
values.

Holiday records are assigned Time code='HOL'

Setup Table

The Setup Table contains many fields which control processing.
Each company in your system must have a separate company record
in this file.

The fields include:

  Company Code         The Company Code and Password are
  Password             used to gain access. With the 
  Corporate Access     Corporate Access set on, the person
                       logging into this company may access
                       records in other companies.

  Number of periods    The total number of periods (weeks, 
  Current period       months,etc..) and the current period
  Week Date            in the year. The Week Date is the
                       week ending date of the current week.

  Screen Header        This text will be printed on top of
  Report Header        each screen and report and usually
  Printer Code         includes the company name. The
                       printer code is used to send a
                       sequence to the printer to compress,
                       bold or italicize print.

  Automatic Backup     When this field is turnrd on then
    and Restore        anytime the computer is disrupted 
  End of Period        (eg. rebooted) during an update
    Status             a warning message will come on and
  Bar Code for Gantt   an automatic restoration of files
    Charts             from the last 'good save' will occur.

Job Class Table

The Job Class Table contains job classes, job descriptions and
pay rates for all the valid job classes accepted by the system.
Job classes are entered in the Employee Master file and when
needed into the actual time card entries and employee schedules.
All records coming from an electronic clock are automatically
assigned the job class in the employee's master record when no
temporary assignments have been entered on the clock.

When a Job class other than that of the employee's master record
appears in a time record a 'TJ' (temporary job) is marked in the
validation matrix of the Validation report. If the job class
doesn't exist a 'IJ' (invalid job) is used.

In determining gross pay on the Time Sheet report, the higher
rate between the temporary and master job classes is used in the
calculation.

Example

    Jobclass Description  Rate

    CASHR    Cashier      7.500
    COOK     Cook        12.500
    PANTRY   Pantry cook  9.750
    DISHWR   Dishwasher   7.250 

Usage:

Used in Time Sheet to produce gross pay, validated in the Time
Card Validation report and entered in the Employee Master, Time
Card and Schedule.
 
Override Code Table

The override code table is a collection of codes used to track
authorization of exceptional time entries such as overtime,
leaving early and working in another job class. The appearance of
an override, as entered in the time card function, overrides the
otherwise normal error suspension associated with that record. 

One predetermined value is assigned for generated records. When
holiday records are created or entries are pulled from the
employee's schedule, a GEN will be placed in the override field.
Example

     Code  Description 

     GEN  generated record     
     OT   authorized overtime
     LOK  late arrival OK
     EOK  early arrival ok

Usage:

Overrides error flag in Time Card Validation report and is
entered using the Time Card option in EM.

Holiday Table

The Holiday table is a collection of dates for paid holidays in
the coming year. Whenever a period is processed during a holiday
week, time records are generated for all  individuals that
receive holiday pay.

     Date     Description

     1/1/90   New Years
    1/16/90   Martin Luther King
    4/13/90   Good Friday
    7/04/90   Independence day

Usage:

Used to create Holiday pay records and identify schedule
conflicts in the Time Card Validation Report.

Workrules

The workrule file contains records for groups of employees that
share the same policies, overtime and differential calculations.
The record is used in the validation report process to determine:

        late and early arrivals
        long and short lunch period
        late and early departures
        lunch period deductions
        daily and weekly overtime

In the Time Sheet report, the workrule is used in calculating:

        overtime rates(daily and weekly)
        differentials based on day of the week
        pay for holidays actually worked

A more extensive description of each field is provided in the
Operation Manual.

Employee Master

Each employee in the system must have a record in the Employee
Master file. The master file keeps track of an employee's
demographics and pay information. Notably, address, name, social
security number, status, pay rate and job class are stored here.

A workrule and job class entry are required for employees. Both
values must pre-exist in the appropriate tables before entered.
The pay rate field, automatically transferred over from the
Jobclass Table during an Add, may be overriden, so that,
seniority and other differences between employees may be noted
without requiring a new job classification.

Usage:

Used to store information related to an employee. Controls
processing.

Employee Schedule

The use of employee schedules is optional. Simply speaking, if a
schedule is set up in the current period it will be used by the
Validation report to edit start and ending times and/or create
time card entries.

The operator has the option of using one or all of the days
within the current period. To skip a day, leave the start and end
times blank, and the default values in the Workrule will be used
for early and late time checks.

To use the daily record for creating records place a 'T' in the
ADD field. The next time the validation report is ran for that
employee two records will be created for each schedule entry with
a "T" ADD value.

Schedule created records can only be deleted from the time card
file through the F5 time card function.

Example

     10/10/89 10/11/89 10/12/89 10/13/89 ...

Start  07:30   -----    08:00     09:00
End    15:00   -----    16:00     12:00
Add      T     -----      F         T
Job   DISHWR   -----   DISHWR    CASHER
Code   REG     -----    REG       REG

Usage:

In the above scenario, two of the entries would create records on
the time card file. The entry marked with a 'F' ADD field would
be used as a schedule validation only. The blank entry for
10/11/89 would default to the entries in the workrule for
starting and ending time validations.


Clock Menu

The clock menu includes several functions that provide the
mechanism to bring time card entries from electronic time clocks
and other computerized systems into the QUE Time and Attendance
package. It is a safe assumption that the communications software
needed to bring records to the computer is provided by the
external company.

QUE works with any ASCII type file that is produced by other
systems. ASCII files are a standard on PC compatible machines and
should present little problem for any vendor dealing in this
environment. However there are those companies which chose to
keep file structures proprietary. This in itself should raise
questions on the firm's motives.

Certain field lengths and other criteria exists as defined in the
operation manual.

Usage

To interface the system with outside input from time clocks
and/or other systems.
╔═════════════╗
║Daily Process║
╚═════════════╝

This section describes the functions which are done normally on a
day to day basis. Depending on your volume they may be done more
or less frequently. Frequency, therefore, is a function of demand
and not a limitation of the system. 

Collecting data

Time Card entries constitute the basic level of information used
by the system. The data can be entered using the F5 Time Card
function within the EM module or collected externally from time
clocks using the transfer process(TR) on the CK menu. Also by
using the special ADD function within the employee schedule
function, records can be generated for vacation and other
time-off categories.

 An employee's schedule serves two purposes; 

     1) to monitor starting and ending times for variable
        shifts
     2) to create records in the time card file for
        vacation and other time-off categories.

The schedule is interactive and is read each time the Validation
report is executed. Therefore adjustments may be made on a daily
basis. If however, records were created in the time card file by
error through the scheduling process, they must be deleted
through the Time Card function (EM).

Each shift's entries must include at least two card entries; an
arrival punch and one for departure. Additional entries may be
made for logging in and out of breaks and temporary assignments
to other departments and/or job classes. 

Time is recorded in military format ranging from 00:00 to 23:59. 

The acceptable punch values are '1','9',' ' and '2'. The punches
are automatically set by the time clock but must be entered if
entries are keyed through the Time Card entry function.

For systems obtaining clock records from electronic time clocks
or other systems, the TR function on the CK menu must be used to
transfer time card records into the system. Certain crucial edits
are performed in this process and displayed on an edit report.
They include duplicate time card entries and records with invalid
or disabled badges.  These records are not transferred into the
system amd must be entered by hand after correction.


Modifying data

Once in the system records can be added, changed or deleted
through the Time Card function F5 in the EM module. Certain
validations are automatically performed as data is entered. These
includes job class and override code verifications, and correct
time and date values. An audit trail can be established for all
records changed through keypunch. 

Validation report

The validation report performs the various edits established in
the Workrule file and calculates the hours worked for each
employee and day within the selected period. The report provides
also for the selection of individual workrules and date ranges to
accommodate the need to have several supervisors inspect employee
reports simultaneously.

The edit restrictions are based on workrule values and if used,
employee schedules. The range of edits may be extensive or
liberal as need be for individual situations.

 The basic edits include:

     automatic rounding of actual time 
     short and long break durations
     early and late arrivals
     early and late departures
     job class validations
     missing or duplicate punches
     daily and weekly overtime

Each shift must contain at least two punches. The system begins
counting a shift when it detects a '1' punch and determines the
end of the shift with the first subsequent '9' punch. Any punches
in between must constitute break durations (spaces) or
interdepartmental transfers ('2' punches).

The total time per shift is calculated as the difference between
the arrival and departure punches minus any break durations
either as a result of time punches or as an automatic deduction
as noted in the Workrule file.


Automatic Rounding

Each record is rounded according to the time accounting unit in
the workrule. If the field contains a '1', rounding is done only
at the conclusion of the shift otherwise each time card entry is
rounded to the next occurrence of the time account unit.
(workrule file).

Example

   Time Accounting Unit    Actual Time   Adjusted Time
                                        (after rounding)
          3                  7:31          7:30
          3                  7:33          7:33
          3                  7:34          7:36
          6                  7:31          7:36
          6                  7:33          7:36
          6                  7:34          7:36   
     
         

Early and Late Arrivals and Departures

The early and late checks are performed on arrivals and
departures. Each time frame has an associated grace period
composed of a before and after grace figure. These values are
stored in the Workrule file as minutes and are applied
against the actual times entered in a shift and compared to the
starttime on the workrule or if employee schedules are used to
the start time for the given date. 

These two sided graces provide the means to avoid unnecessary
labor expenses associated with unworked time. Also with the
application of a short before grace on departure accompanied with
a long after grace, employees are more apt to leave on schedule. 

This same logic may be applied to arrivals to discourage lateness
and early arrivals.


Example

 Assuming the Time Accounting unit=6

 Before   Actual Time    After    Schedule Time  Adjust Time

  -3         17:34        +15         17:30          17:30
  -5         17:34        +15         17:30          17:30
  -5         17:22        +15         17:30          17:24


The actual grace periods are 17:31 - 17:45
                             17:25 - 17:45
                             17:25 - 17:45  respectively.


Short and Long Durations


Lunch periods are deducted from the total hours per shift if the
PAID FOR LUNCH field in the Workrule is set to 'N'. As determined
by the LUNCH REQUIRED field, lunch is deducted using the actual
punched values or the default duration recorded in the workrule.
If the value is 'N' lunch is only deducted if there are actual
lunch punches made. 

Applying the lunch grace to the total lunch period in effect
increases the time span. A 30 minute lunch with a 10 minute grace
extends to a 40 minute time frame. Any lunch period within the 40
minutes would constitute a 'within grace' deduction of 30
minutes.

Durations below the thirty would be highlighted as a 'short
lunch' (SL) while times exceeding the forty would be marked as an
'extended lunch'(EL) on the Time Card Validation report. 

Job Class Validations

Any time card entry may contain a JOBCLASS value other than what
is normally assigned to the individual in the Master file. This
is to identify temporary job assignments and allows for proper
tracking of expenses by job categories. If the value is different
a check is peformed to verify that the value exists in the valid
JOBCLASS TABLE. If it doesn't a 'IJ' is placed in the JC column
of the validation report, otherwise a 'TJ' notation is made. 

Missing and Duplicate Punches

There are certain punch values that must exist in sequence to
signify a valid shift. If a '9' punch is missing or a there are
two '9' punches in succession a missing or duplicate error is
noted, respectively.

Overtime


The system will identify daily and weekly overtime by comparing
actual values to the limits imposed in the DAILY OVERTIME and
WEEKLY OVERTIME  fields in the employee's assigned workrule.
Hours which are considered daily overtime are not considered in
the weekly determination. Each workrule has the option of
applying one or both overtime calculations.


Example


  Daily Hours        Over  Under  Over  Under  Over  Under
                      8     10     10    12     12    24
    8.5                 .5 OT
   10.5                              2.5 OT  
   12.0                                           4.0 OT    


Management Queries

One of the most used feature of the system is the ability to
query against the collected information.

The Approaching Overtime report is used in avoiding unnecessary
overtime. The selection screen to the report provides the ability
to select a given group of employees that exceed the time limit
entered.

The Tardy and Late report can be used to track errant behavior on
a timely basis.*

The Time Sheet summary is used to track expenses over a period of
time beyond the current period. It produces the average hourly
cost per job class and aids in the budgeting process.*

Employee schedules may be produced in ghant chart style reports
or vertical text displays. The vertical display is a printed copy
of what appears on the employee schedule option in the EM
function. Each employee in the range selected will have a printed
schedule.

The ghant selections are more useful in depicting schedule
bottlenecks and conflicts. The advantage of having bar charts is
readily captured in both formats; showing all employees for a
given day or all days in the period for each employee.

For a detailed example of reports please consult the operational
manual.



* Represents two of the many reports derived using the built-in
Query and Report Writer function.╔═════════════════╗
║PERIOD PROCESSING║
╚═════════════════╝

This section describes the processes that occur at the end of a
pay period. Once a period is closed the time card records can no
longer be modified but may be displayed through the history
queries.


Time Sheet Report 

The TS module applies the time card records to the logic placed
within the workrule file and creates gross dollar figures for the
period of time selected. It shows all temporary job assignments,
overtime, vacation and other time off categories as separate
entries for each day in the selected time frame. A summary for
these distinct categories is given for each employee, as well as,
a grand total for all employees in the selected range.

The TS function does not perform validations and assumes only
good transactions are being processed. As an added security
measure, a check may be made to force a good VR before this
report can be created.

The following example shows how Time Cards are transferred into
Time Sheet Entries.

           ADJ
  DATE     TIME PUNCH CODE JOB   HRS FACTOR RATE DIFF GROSS
  
 10/10/89  07:30  1   REG  COOK      
 10/10/89  11:30      REG  COOK
 10/10/89  12:00      REG  COOK
 10/10/89  16:00  9   REG  COOK   8  1.00  8.00  0.00  64.00
 10/11/89  07:30  1   VAC  COOK   
 10/11/89  16:00  9   VAC  COOK   8  1.00  8.00  0.00  64.00
 10/12/89  07:30  1   REG  COOK
 10/12/89  10:00  2   REG  DISH  1.5 1.00  8.00  0.00  12.00
 10/12/89  11:30      REG  COOK
 10/12/89  12:00      REG  COOK
 10/12/89  16:30  9   REG  COOK  6.5 1.00  8.00  0.00  52.00
                                  .5 1.50  8.00  0.00   6.00
 10/13/89  20:00  1   REG  COOK 
 10/14/89  03:00  9   REG  COOK  5.0 1.00  8.00  1.00  41.00

At first glance its obvious there are less time sheet
transactions than there are time card entries. This is an
expected outcome of the conversion process which summarizes daily
time records by timecode and jobclass.

Straight Transfer

On a normal day, such as 10/10, there will be one time sheet
entry for the total amount of time worked minus lunch if
applicable.

An individual may punch out for lunch even though it is not
deducted as well as having lunches deducted automatically without
any punches. 

Generated Records

On 10/11, a schedule entry was used to generate a vacation
record. This is signified by the GEN override code, which is also
used to identify records created for non-working holidays. 

Temporary Assignment / Job Costing

The 10/12 entry shows what happens when an individual is assigned
to another area. The time card entry at 10:00 has a job class
entry of DISH. When the time sheet program recognizes this break
in sequence it assigns the calculated period to the previous
jobclass (COOK) and upon recognizing a second change back to the
original jobclass, calculates the time period spent in the
temporary assignment.

Daily Overtime

Also as indicated by this shift's entry is an overtime
calculation of one/half hour. This constitutes a separate
overtime record with a payment factor one and a half times
greater (time and a half) than normal.

Crossing over Dates

The last entry in our example shows that shifts may expand over
date ranges without causing any problems.

The time sheet file is stored for future reference and is
archived into the yearly file during the PE Period End process.

Posting to General Ledger or Payroll

If desired, the gross pay for each employee can be transferred to
the QUE Payroll system or directly into the General Ledger. With
the Payroll intermediary step, taxes and other deductions can be
removed in creating net pay figures and labor cost posting can be
done simultaneously with these entries.

Closing a Period

When the current period is closed, the pay period range is moved
forward, current transactions are archived and erased and
employee schedules, so marked, are carried forward into the next
period.

Historical data may be accessed through one of the 'can' reports
provided in the History Report menu or more flexibility and
formats can be achieved using the RW Query and Report Writer.

At the end of the year, the history file is archived into a file
bearing the current year's name (eg TAAA1989) and the records for
that copy are erased from the yearly history file.


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
