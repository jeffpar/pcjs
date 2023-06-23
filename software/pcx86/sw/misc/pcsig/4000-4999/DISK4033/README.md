---
layout: page
title: "PC-SIG Diskette Library (Disk #4033)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4033/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4033"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BAREBONE.DOC

{% raw %}
```
Instructions For BARE BONES ACCOUNTING SOFTWARE

(c) Copyright 1993 James W. Funsten
    All Rights Reserved
       
     This on disk manual is an abbreviation of the 113 page
printed manual which is issued to registered owners.  The bound
manual has screen pictures, sample reports, and index.  The
shareware program and the registered program are identical except
that the registered program is always the last version whereas
the shareware program may not be.  Different versions operate
with the same data files. 
       
       This manual and the program BARE BONES Accounting are
proprietary products of J. W. Funsten, the author of both of
them, and are protected by copyright law.  The author retains
full title to and ownership of the program. 
       When you are an owner of BARE BONES Accounting, you are
licensed to use the program on the following terms and
conditions:
       1.  You may use the program only on one computer or
computer terminal at a time.
       2.  You may transfer your right to use the program to
another party, which terminates your license.  You may not rent
or lease the program.  You may distribute copies of the program,
but not the manual, to other persons, but solely for their
evaluation, so that they may decide whether to register and
become users. 
       3.  You may not decompile, disassemble, reverse engineer,
or in any way modify the program code without the prior written
consent of the author.  You may not employ components of the
product in any kind of derivative program, manual, or product.
       4.  No part of the manual may be reproduced or copied
without the written permission of the author.
       BARE BONES Accounting software is not public domain or
freeware.
         
       Registration entitles the user to the manual, one year of
updates, and one year of telephone support.  The cost of
registration is $55.00 (US$55.00 in Canada), which may be charged
on Visa or Mastercard by calling (415) 974-6201. 
       The mailing address of the author is:  J. W. Funsten, 140
Second Street, Suite 601, San Francisco, California 94105.







       
       
7/93

                  * * TABLE OF CONTENTS * *
       

         
       DESCRIPTION 
       DEMONSTRATION 
       OPERATION 
           Installing the Program File
           Summary of Setup Procedures
           Opening New Data Files
           Project List
           Account List
           Name List
           Setup and Enter Beginning of Year Balance Sheet
           Enter Transaction
           Correct Transaction
           Repeat Prior Transactions
           Delete/Restore Transaction
           Print Checks
           Print Transactions
           Read/Print Selected Transactions
           Balance Sheet & Profit/Loss Statement
           Read/Print/File Account Totals
           Audit
           Bank Balances and Reconcile Bank Statement
           Backup Data Current Year
           Change To Another Year
           Setting Up For A New Year
           Copy Balance Sheet Totals to Next Year
           Exit Program
       PROGRAM & DATA FILES

















                                 * * DESCRIPTION * *

     BARE BONES Accounting is a simple but powerful double entry
bookkeeping system.  One project or up to 100 different projects
or activities may be accounted in the same database.  Reports are
for all projects together or for any one project.  One bank
account or up to eight bank accounts may be shared by all
projects.

     BARE BONES Accounting is ideal for fund accounting, where
there are several funds being operated jointly, and separate
statements and balance sheets are required for each fund.  It is
useful for contractors operating several projects jointing but
requiring cost breakdown.  It is useful for charities,
condominium associations and other non-profit organizations or
for real estate accounting where a balance sheet is required.  It
may be used as an educational tool for demonstration of balance
sheet accounting. 

     The rules of debit and credit are incorporated in the
software.  For an entry the user designates an account that is to
be increased or decreased and a second account to offset that
action.  BARE BONES Accounting software determines whether the
second account is to be increased or decreased.  BARE BONES
Accounting is menu-driven.  The user selects the year and then
makes entries for each project or allocates entries between
several projects.  The journal of transactions for each year may
contain over 7,000 entries and up to $999,999,999.00.  There is a
project list of up to 250 projects, a chart of accounts of up to
250 accounts, and a Name list of up to 250 names (plus unlimited
special names).

      BARE BONES Accounting prints checks (with or without
payee's address for window envelope), reconciles bank statements,
and provides instant access to bank balances.  It provides
balance sheets, and profit & loss statements for all projects
together or separately for any individual project.  BARE BONES
Accounting automatically allocates earned interest between
projects according to the daily average bank balance of each
project.  In the audit mode, all entries to each of the accounts
are traced, either from all projects or from any one project. 
Reports may be to the screen, to the printer, or to a file.  Up
to a year of monthly account totals from one project or from all
may be sent to a file for import by Lotus 1-2-3.


       
                    * * DEMONSTRATION * *
      
         The BARE BONES ACCOUNTING diskette contains the program
BBA.EXE together with other files containing sample data which
illustrate in a brief way how the program operates with data.     
         A user wishing to view the demonstration may start the
computer, move to the "A" drive, and then place the diskette
which was delivered with this Manual on that drive and begin the
demonstration by typing BBA and pressing Enter.  The screen will
show an introduction.
         When any key, except the "Y" key, is pressed, the main
menu for a year will appear on the screen.  The year will
automatically be the same year which was worked on at the last
computer session.  The demonstration data is for the year 1960, a
year not likely to be confused with user data.
         (If instead of pressing "Enter" at the introductory
screen, the user had pressed "Y" or "y", the Year List Screen
would have appeared and the user could have chosen any year for
accounting).
         The main menu screen is a menu of the various operations
which the user may perform in relation to the year shown at the
bottom of the screen.  Footnotes on the screen instruct the user
how to choose one of the operations.  It is also possible at this
screen to press F8 at the Main Menu for any year to go to various
procedures for beginning of year setup including Fiscal Year
choice and Beginning of Year Balance Sheet mode. 
         As long as the user continues to work in this database,
that is with respect to this year, the last line on the screen
will show the year for which accounting is being done.  Here it
is the sample year of 1960.
         If "Enter Transaction" is chosen from the Main Menu,
before displaying the Enter Transaction screen,  BARE BONES
Accounting will show the last three transactions in the data to
remind the user of the last activity.  As to each of the two
accounts affected by each transaction, the screen shows whether
that account was increased or decreased and what class of account
each account is, such as "Asset-Bank", "Capital", or
"Liabilities".  Check numbers are only shown were a bank account
has been decreased.
         Pressing Enter again will bring the user to the screen
in which a new transaction may be entered.
         Now, as anywhere else in the program when working in a
specific year, it is possible to return to the Main Menu by
pressing F10.  From the Main Menu, the user may again select
another function in the same year.  After viewing that function
the user may then press F10 to return to the Main Menu and view
all of the screens with demonstration data.
         It is also possible anywhere in the program to go
directly to the Bank Balances screen for the year on which the
user is working by pressing F4 or to the Year List screen by
pressing F5.  It is only by going to the Year List screen that
the user may go to another year of accounting.  The other choices
on the Main Menu all relate to the active year of accounting.
           
    
                * * INSTALLING THE PROGRAM FILE * *
       
         The only file which is necessary for the installation of
BARE BONES Accounting is the file named BBA.EXE, which contains
the entire program.  It may be installed either on a diskette or
on a hard disk.  When installing the program, no other file
should be copied from the diskette supplied by the author
because new data files will be created by the program as needed.
         The fastest and simplest operations occur if the program
(BBA.EXE) is installed on the hard disk.  On the other hand, the
user may transfer the program file (BBA.EXE) to a formatted
diskette and operate the program completely without the use of a
hard disk.
         To install the program on a hard disk drive, the file
BBA.EXE should be copied (using the DOS command COPY) to the hard
disk from the diskette supplied by the author.  A typical command
would be:  COPY  A:BBA.EXE  C:  
         The program may be installed on a formatted diskette by
copying BBA.EXE to the diskette (using the DOS command COPY). 
With the formatted diskette in the A drive and the diskette
furnished by the author in the B drive, the command would be:
COPY B:BBA.EXE  A:
         Before loading BBA.EXE onto a diskette the user should
install DOS operating system files on that diskette. 


                * * SUMMARY OF SETUP PROCEDURES * *
       
         When setting up for the user's data only the BBA.EXE
file is necessary.
    ** Copying the Program File to your Diskette or Hard Disk  ** 
The section immediately preceding this section, Installing the
Program File, explains how to transfer the BBA.EXE file to a
diskette or to a hard disk.
     ** Creating Blank Data Files **
When the program is copied to the user's diskette or hard disk,
it may be started by typing BBA.  The screen will report that the
"Year List" file has not been found on the then current drive,
and ask the user whether the program should create such a file. 
When such a file has been created on the then current drive, a
year for accounting may be chosen and a destination drive for the
files of that year designated.  Immediately, the program creates
all the necessary files for that year on the drive designated for
the files of that year.  In the section Opening New Data Files
there is explanation of how the program creates all the necessary
blank files.  When the files for the year have been created, the
program will go to the Main Menu.
    ** Putting Initial Data into the Project, Account, and Name
List Files**
After the program has created the blank files for
the chosen year, the user should first put some entries into the
three list files.  In the sections titled Project List, Account
List, and Name List there is explanation of how to fill in these
lists.  The user may always return to these lists to make more
entries.
          ** Setup Year and Beginning Balance Sheet **
After pressing F8 at the Main Menu the user may choose to change
from Calendar to Fiscal Year, to change from Capital to Fund
Balance as a designation for equity, and to enter Beginning of
Year Balances.  All of these F8 items are explained under the
subject Setup Year and Enter Beginning of Year Balance Sheet.  


                  * * OPENING NEW DATA FILES * *
       
         The user has copied the program file (BBA.EXE) from the
diskette on which it was furnished to a formatted diskette or a
hard disk without transferring any of the other files which were
on the diskette.  The user keys in the characters BBA and presses
Enter to start the program.  A title screen will appear.  Then
when any key is pressed, the program will look for the Year List
file BBAY on what is then the current drive.  Since BARE BONES
Accounting is being installed and the demonstration BBAY file
(that is, the Year List file) was not transferred at the time of
installation, this file will not be present.  The screen will ask
the user whether to search again for the Year List file, or
create a new Year List file, or terminate the program.
         To make the choice of these items on the screen, the
user moves the highlight with the UpArrow and DnArrow keys to the
item "Make New Year List File" and presses Enter.   Then a new
Year List file (BBAY) will be created automatically on the
current drive and the blank Year List will appear on the screen.
         When the program is started on subsequent occasions, the
program will search for the Year List file (BBAY) on whatever is
the current drive and will not continue until there is a Year
List file on the current drive.  If in fact there is a Year List
file existing, the user will not want to create a new Year List
file.  Before starting the program, the user should be sure that
the current drive is the one on which the Year List File is
located.  
         In the year list screen, which is illustrated above on
this page, operations may only be performed on the year which is
at the center of the screen designated as "active".  To change
this year the entire list of years is moved up or down with the
Up and Down Arrow keys.  To choose a year for accounting the user
must first bring that year to the center of the screen at the
active position and then, if it has not already been done, key in
the letter of the disk drive where data for that year is to be
located.
         On a computer with just two diskette drives and no hard
disk, this may be either A or B.  In that case, data for a
particular year may be sent either to the drive which contains
the program file or to the other drive for storage on another
diskette.  On a computer with a hard disk designated "C", the
user may place the data for a year on the main directory of the
hard disk by entering the drive name as C, or a subdirectory
named BBA.
         Most users will choose to place data on a sub-directory
of the hard disk.  Only one subdirectory may be used for BARE
BONES Accounting data on any one drive and it must be named
"BBA".  Such a subdirectory will be created by the program
automatically whenever the user directs data to the subdirectory. 
After bringing the chosen year of accounting to the active
position on the screen, the user presses the Alt key at the same
time as the drive letter. Thus, pressing Alt and C at the same
time will result in "C:\BBA\" appearing on the screen.  The data
files for that year will be located on the "BBA" subdirectory of
the "C" drive.
         The user may have subdirectories named "BBA" on two or
more hard drives or diskette drives.  The user may direct the
data to any drive and may direct the data for one year to a
different drive from that designated for another year, or if
sufficient memory is available on a diskette or hard disk, data
for all years may be sent to the same disk or subdirectory of a
disk. (See Program & Data Files for information on file names
created by BARE BONES Accounting.)
         When a drive has been designated on the line of the
active year, the user may press enter to go to the data files for
that year.  Since BARE BONES Accounting is being installed and
the demonstration data files were not transferred at the time of
installation, these files will not be present and the screen will
report that the first of the files, the Project List file, cannot
be found.  (Indeed, the demonstration data was for the year 1960,
and there were no demonstration files for other years.)  The
screen will ask the user for instructions as to whether to
terminate the program, search for the Project List file, create a
blank Project List file on the current drive, copy a Project List
file from another year, or change to another year. 
         To make the choice of the items on the screen, the user
moves the highlight with the UpArrow and DnArrow keys.  When
originally setting up, the user will highlight the item "Make
Blank Project List File" and presses Enter.  Then a new Project
List file will be created automatically on the whatever drive or
drive and subdirectory that the user has designated for the year. 
If a project list for another year has already been created, the
user may elect to direct the program to copy that list for use in
the new year.  
         As soon as the blank project list has been created,
another screen similar to the one shown above will appear asking
the user whether the program should create a blank account list
for the year.  After such a list is created by the program, still 
another screen similar to the one above will appear asking the
user whether the program should create a blank Name List file. 
After such a list is created the program will instruct the user
to press F7 to cause the program to create a blank journal file. 
        (This warning is to prevent the creation of a new file
when such a file has already been created and filled with data,
but is not found by the program.  In such a case the user will
either search again or terminate the program, and determine what
happened to the already existing journal file.)  After this file
created, a similar message appears on the screen regarding
creation of a Special Name file, a Comment file, an Address file,
and a Breakdown file.  When all of these files have been created  
by the program after the user so directs, the screen will then
show the Main Menu.
         When the program is started on subsequent occasions, the
program will search for the Year List file (BBAY) on the current
drive and will not continue until there is a Year List file on
the current drive.  Thus, before the program is started on
subsequent occasions after the data files have been set up, the
current drive should be the drive where this Year List file is
located.  If the Year List file is found, the program will
determine which year was last worked on by the user and will go
directly from the introductory screen to the Main Menu for that
last year.  Now the year list file has been created on the
current drive and the data files for the year chosen have been
created on the drive (or drive and directory) designated, and the
user is located at the Main Menu, which was illustrated on the
previous page.  The user may now commence placing data in the
Project List file, the Account List file, and the Name List file
for this year (which is all one database).  When these lists are
at least partially filled in, the user may setup the year and
enter the beginning of year balances as detailed later.

                        * * PROJECT LIST * * 
       
         When the user is at the Main Menu, the highlight on the
screen may be moved with the UpArrow or DnArrow keys to the words
"Project List" and then the Enter key pressed, whereupon the
Project List screen will appear.  Instructions appear at the
bottom of the Project List screen.  The user may now press F8 to
"Amend or Add to List".  This activates the cursor, highlights
the first line, and causes the screen footnote instructions to
change.  Now the user may enter the names of the projects for
which accounting is to be done.  A name may have up to 38
characters.  When it has been keyed in, the user should press
Enter and then the cursor will go on to the next line.  The data
for a particular line of the Project List screen is not recorded
to disk until the user exits the data entry mode.  Before exiting
the data entry mode, the user may enter another project name on
the next line or any of the 250 lines of the Project List.        
         When finished entering project names, at least for the
time being, the user returns to the initial Project List screen
mode by pressing ESC or F8.   Now the data is recorded to disk,
the highlight and cursor disappear, and the main Project List
footnotes reappear.  From the initial Project List screen, the
user may return to the Main Menu by pressing F10.  Before
returning to the Main Menu, the user may want to rearrange the
order of the items in the Project List.  This subject appears in
the Project List screen footnotes as "Change Sequence of Items
in List".  The user may wish to change the sequence of the
Project List either when initially entering project names, or at
some later date for many different reasons.  This may be done
without disturbing the project number or the project data.
         The user presses F2 when at the initial Project List
screen and the screen footnotes of the project exchange mode
appear.  The highlight is now moved to the line which the user
wishes to relocate.  This movement of the highlight is
accomplished with the Up and Down Arrow keys. 
       When the highlight is over the project name to be
relocated, the user presses F8 to exchange that project name with
whatever are the contents of the line above, or F9 to make a
similar exchange with the contents of the line below.  Holding
down F9 or F8 will cause the exchange to be continued from one
line to another and from one page to another.  These changes are
not recorded to disk and made permanent until the user exits this
mode by pressing ESC, F2, or F10.  When the desired relocation of
a line has occurred, the Up and Down Arrow keys may be used to go
to and highlight another line for relocation.  Then following the
same procedure with the F8 and F9 keys, that line is relocated. 
When all desired movement or exchange of lines has occurred, the
user should press ESC, F2, or F10 to record the changes to disk
and return to the initial screen of the Project List mode.
         Whenever a line is relocated, the project number goes to
the new location with the project name so the program continues
to recognize the data for that project at the same place in data
storage.
         A user may wish to relocate projects on the Project List
screen to place the most frequently referenced at the top where
they are most accessible.  As long as there are some transactions
in the year regarding a project, it must remain on the list      
but may be moved to a later page of the list.  Also, it may be
convenient to move blank lines to separate previously entered
names.
         When all of the lines of project names have been
relocated, the user presses ESC, F2, or F10 to record the changes
to disk and return to the initial Project List screen.  In the
case of the Project List as well as the Name List and the Account
List, the user may always return from the Main Menu to these
screens to add more items or change the order of items.
         Pressing F7 at the initial Project List screen, gives
the user the choice of sending a copy of the Project list to
either the screen, the printer, or the file.  If sending to the
file is chosen, the screen will display the name of that file.  A
typical name given to this file by the program is "BBA93000.PRO". 
The "93" is the year and the "PRO" means Project List.  It will
be filed in the same drive and directory as the rest of the files
for the year.
         Pressing F10 will cause a return to the Main Menu.

                           * * ACCOUNT LIST * *

      When setting up a year of accounting, the user must
enter the names of accounts to be used.  (This may be avoided
when the user has been using BARE BONES Accounting for another
year of accounting from which the list of accounts could have
been copied as described later in this manual.  Accounts may be
added at any time, however, a few will be necessary to get
started.    
         The user may always return to add more accounts, so it
is not necessary to list them all at once.  Because the user may
change the sequence of the accounts within any class of account,
it is not necessary to get them in exactly the most convenient
sequence the first time.
         The user gets to the Account List screen, from the Main
Menu.  At the Main Menu the user either presses the letter on
either side of the words "Account List", that is, the letter "N"
or "n", or uses the highlight method.  To use the highlight
method the user presses Enter and then moves the highlight with
the Down Arrow down to cover the words "Account List" and then
presses Enter again.
         When either method of selection has been completed, the
first page of an Account List screen will appear, and, if this is
a new year data base, will be blank.
     When finished entering account names, the user presses F8
and then the cursor and highlight will be on the first line ready
for entry of an account name.  The original Account List
footnotes will then reappear.
         An account name may be entered on the first line or any
other line or page.  An account name may be of up to 38
characters.  After each account name the user must press Enter
and then the cursor will advance to the right hand column of the
same line for entry of a letter to indicate what class of account
the item is. 
         When the cursor is in that right hand column the
possible classes of account appear at the bottom of the screen. 
At this point the user must key in an A, B, L, C, I, or E, which
signify one of the five classes, Assets-Other, Assets-Bank,
Liabilities, Capital (or Fund Balance), Income, or Expense.  The
class Assets-Bank signifies any deposit asset, such as bank,
savings & loan, or credit union or other depositary.  This
designation will control all use of the named account in the
program.  Indeed, as later explained, based upon these
designations, the computer program will determine which accounts
should be increased and which decreased in a transaction
involving a pair of accounts.  When a letter designating the
class of account has been entered, the cursor will go to the
beginning of the next line for another account name.
         When finished entering account names, at least for the
present, the user presses ESC, F8, or F10 to record the data to
disk and to return to the initial Account List screen.  While the
classes of accounts may be mixed in the list, the program will
reorder the account names when they are recorded to disk so that
all accounts of a certain class are listed together.  Thus,
regardless of what order they were entered, all liability
accounts will be together, and all Asset-Bank accounts will be
together.
         The user may rearrange the sequence of the accounts just
as in the case of the Project List, but only within a class.  To
rearrange the sequence of account names the user presses F2 and
proceeds just as described above for the Project List.
     Because there are 250 possible account names for each year,
there are several pages to the Account List screen, just as there
are for the Name List and the Project List screens.  The user
will find that there are two account names entered by the program
which cannot be changed by the user.  These are used in
connection with the setting up of the beginning of year balance
sheet, and are "249 - Offset Beginning of Year Entries" and "250
- Beginning of Year Net Profit or Loss".       
         Pressing F7 at the initial Account List screen, gives
the user the choice of sending a copy of the Account List to the
screen, the printer, or the file.  If sending to the file is
chosen, the screen will display the name of that file.  A typical
name given to this file by the program is "BBA93000.ACC".  The
"93" is the year and the "ACC" means Account List.  It will be
filed in the same drive and directory as the rest of the files
for the year.
         Messages regarding printing appear in the warning box. 
         The user may then return to the Main Menu by pressing
F10.

                         * * NAME LIST * *
       
         Before the entry of transactions, the user should enter
names in the Name List.  Names which are to be used infrequently
need not be entered in the list, as it is possible to enter
special names in a transaction without putting them on the Name 
List.  This is explained in the discussion of the Enter
Transaction section.
       Names need not be put in some particular sequence because,
as explained elsewhere, BARE BONES Accounting allows the changing
of the sequence within the list at any time.  The user reaches
the Name List screen from the Main Menu.  The user presses F8 to
be able to Amend or Add to the Name List screen.
         The user may commence entering a name of up to 38
characters.  After a name has been keyed in, the user presses
Enter and the cursor advances on the same line to the place were
there is the option of entering a tentative project number under
the words "Tentative Proj".  Without making any entry in the
tentative account column, the user may press Enter again go to
the next line for another name.  If the name is involved with
only one project it would be wise to designated that project at
the tentative project for that name.
         The advantage gained in making a tentative project
entries is that each time a transaction is entered with that
name, that project number will appear automatically, thus saving
the user some keying operation.  The user can override the
tentative project at the time of entering a transaction.
         If the user wishes to enter a tentative project number
for a name in the Name List, but does not know the number, it may
be found in the Project List window.  Pressing F1 in the first
column under the title "Tentative Proj" of the Name List data
entry screen will bring up a window which contains the Account
List from which the user may choose a tentative account number
for automatic entry and use in the Name List screen.       
         When the user chooses a Project by either pressing the
letter at either side of that account or by pressing Enter and
using the UpArrow and DnArrow keys to highlight a project and
then pressing Enter, the program will return to the Name List
screen and the number of the project so chosen will appear
in the tentative project column.  When Enter has been pressed,
with or without entry of Tentative Project number, the highlight
and cursor will pass on to the next line where the user may
continue entering names.  When all desired names have been
entered, at least for the present, the user may press ESC to exit
the amend or add to list mode, record the data to disk, and
return to the initial Name List screen.
         As with the Project List and Account List screens, the
user may rearrange the sequence of names on the list by pressing
F2.  After setting up or amending the Name List, the user may
exit the entry mode by pressing ESC when the cursor is at the
left hand side.  Then the user may return to the Main Menu by
pressing ESC or F10. 
         At any time later the user may return to either the
Project List screen, the Account List Screen, or the Name List
screen and add or amend the items on each list.
         At the Name List screen the user may press F9 to enter
addresses for Names so that name addresses may be printed on
checks and window envelopes may be used.
         Pressing F7 at the initial Name List screen, gives the
user the choice of sending a copy of the Name List to the screen,
the printer, or the file.  If sending to the file is chosen, the
screen will display the name of that file.  A typical name given
to this file by the program is "BBA93000.NAM".  The "93" is the   
year and the "NAM" means Name List.  It will be filed in the same
drive and directory as the rest of the files for the year.
         Messages regarding printing appear in the warning box.   
         The user may then return to the Main Menu by pressing
F10.
       
         * * SETUP AND ENTER BEGINNING OF YEAR BALANCE SHEET * *
       
         The year should be setup before transactions are
entered.  When F8 is pressed at the Main Menu, the setup options
appear on the Main Menu. 
         First, either Calendar Year or Fiscal Year should be
chosen for the particular year being worked on.  At the center of
the bottom of the screen the current choice appears.  It is
usually Calendar Year.  To change to a Fiscal Year or back, the
user merely presses the CNTL-PGUP or CNTL-PGDN keys, and the
successive changes show at the bottom of the screen and will be
recorded as made.  This choice should be made before entering
data in the beginning of year balance sheet mode, or date
corrections will be needed.
         Next, there is a choice between "CAPITAL" or "FUND
BALANCE" as a name for the equity accounts.  This is a matter of
form, not accounting substance.  Pressing * causes a toggle
between "Capital" and "Fund Balance" which appears in the box on
the screen.  Again the choice is recorded to disk each time of a
change.
         The next thing to be done is to enter the beginning of
year balance sheet for those projects which existed before the
use of Bare Bones Accounting.  At the setup screen the user
presses ALT-S to begin that mode.  The plan of this module is
that each item of the initial balance sheet for one project is
entered with an automatic companion entry in "Offset Beginning of
Year Balance" and when all beginning balance entries have been
made for that project the "Offset Beginning of Year Balance"
should have returned to zero.
     The first screen to appear is the one in which the user
chooses a project regarding which to enter a balance sheet. 
While the user may use BARE BONES Accounting for just one project
or for several projects at the same time, nevertheless each time
beginning balances are being entered they must relate to one
designated project.  A project is chosen by typing in the number
of the project, if known, or, by scrolling through the projects
by pressing the UpArrow or DnArrow keys, or by pressing F1 and
bringing up the Project List as a Window from which a project may
be chosen and brought back to the former screen.
         In the course of entering beginning of year Balance
Sheets, the user will come back to this screen to designate
another project for its entries so that there will be combined in
the data beginning balance sheets for each project.  Later this
data may be read separately for each project or together for
all projects.
         When a project is selected ENTER is pressed and the
screen appears for entry of a beginning of year balance for
that project.  This is the same screen as that which appears in
the Enter Transaction and Correct Transaction, however, when in
Enter Beginning of Year Balance some data is pre-fixed.  The
pre-fixed items are the date which is the first day of the
Calendar or Fiscal Year, the Name which is name number 250 which
is "No Name With This Transaction", the second Account which is
account number 249 which is "Offset Beginning of Year Entries",
and the project which is the project already chosen in the
previous screen.
         The only things left to be entered by the user in this
mode are the amount of the transaction, the first account
affected, whether the first account is increased or decreased,
and the comment line.  Each time the user enters these items and
then presses ENTER one transaction will be placed on disk and a
fresh screen will appear with the transaction number incremented
by one.  Each transaction serves to place just one number of the
balance sheet into the data, and changes the offset account in
the same amount.  As each account is increased or decreased it
will be offset in the "Offset Beginning of Year Entries".  The
balance of that account is shown under the name of that account. 
When all the entries to create a balance sheet for one project
have been made, the balance of the "Offset Beginning of Year      
Entries" account should return to zero.  Then pressing ESC
returns to the screen for choice of another project for entry of
Beginning of Year Balances.
         The user may be using Bare Bones Accounting for only one
project or for several projects at the same time.  Each project
which existed before the use of Bare Bones Accounting must have
its beginning of year balance sheet created as set forth above. 
         If a project begins after the Bare Bones Accounting is
set up, there is no beginning of year balance sheet and the
balance sheet will be created by the transactions which occur
during the year.
         If this is the second year of accounting with Bare Bones
Accounting all balance sheets for all properties from the first
year may be brought forward at one time by pressing ALT-T after
coming to the setup options by pressing F8 at the Main Menu. 
         Once the beginning balance sheets have been established
in the current year the setup has been completed.
       
                     * * ENTER TRANSACTION * *

          The Enter Transaction screen is the place where
individual transactions are entered into the data.  To get to the
Enter Transaction screen, choose Enter Transaction on the Main
Menu. (The Main Menu appears after a particular year has been
chosen from the Year List screen or when the user presses F10
anywhere in the program.)
          Items on the Main Menu are chosen either by pressing
the keyboard letter which appears opposite the item in the
outside columns or by the highlight method.  With the highlight
method the user follows the screen instruction to move the
highlight over the item to be selected and then presses Enter.  
Immediately after "Enter Transaction" has been chosen, the screen
will display the last three existing transactions, if any exist. 
In the example below, the only transactions entered are those
which were entered in the Enter Beginning of Year Balance Sheet
mode, and consequently those entries show portions of the data
which are standard for that mode.  The date is always the first
day of the calendar or fiscal year, there is no name with the
transaction, and the second account is always Offset Beginning of
Year Balances.
          When Enter is pressed again the Enter Transaction
screen will appear.  The cursor is blinking at the place for the
entry of the month.  The month may be entered by entering a
number from 1 to 12.  If transactions have already been entered
in this accounting session, the date previously entered will
appear automatically.  If F7 is pressed the date appears in the
window on the bottom part of the screen.  If F7 is pressed again,
the current date will be entered from the computer clock.  If any
other key is pressed, the displayed date will be erased without
entering it in the transaction.  The date may always be keyed in
by the user.
          After the month and day have been entered, the cursor
will advance for entry of the amount of the transaction. 
Normally at this point BARE BONES Accounting will be in the
"typeover" mode; however, the user may switch to the "insert"
mode by pressing the insert key.  The amount of the transaction
may be up to $999,999,999.99, but may not be negative.  No commas
are allowed as the program adds those automatically.  Where there
are no cents the decimal and zeros need not be entered as the
program adds those automatically.   If there is a repetition of
the amount entered in the last transaction, that same amount may
be entered by pressing F3.  An erroneous entry may be erased by
pressing F6.   Should an amount be entered and then after leaving
the entry location, need to be corrected, the user while at the
same screen may return to the amount location by pressing the ESC
key and then make the correction.   When an amount is entered and
the ENTER key is pressed, the cursor will pass to the place were
the name of the outside person or business involved in the
transaction is to be entered.
     * * Enter Transactions - First Method of Entering Name * *
         To enter a name which is on the Name List, when the Name
List number of that name is known (number 250 if no name is
applicable to the transaction), the user may key in that number
and press Enter, and the name will appear on the Enter
Transaction screen. When the Name number was entered as described
in the last paragraph, the cursor went down to the place for
entry of the project number.  If the Name entry was satisfactory,
the user may skip the other methods of entering Name number and
go to the section regarding entry of project number. Otherwise,
the user should press the ESC key to return to the position for
entering the Name number.
    * * Enter Transactions - Second Method of Entering Name * *
         To select a name from the list when the number is
unknown, the user may press PgUp or PgDn to scroll through the
Name List.   For greater access to the Name List, the user may
press F1 and the Name will appear as a window.  When the Name
List appears as a window, the entire list may be viewed by
pressing the PgDn and PgUp keys.  Then the user may select a name
on the list, either by pressing the letter shown in the left hand
column opposite the name or by the highlight method, which is
initiated by pressing Enter and  completed by following the
instructions then appearing in the screen footnotes.  When a
selection is made, the program carries both the number selected
and the corresponding name back to the Enter Transaction screen.  
Even though the Name List is appearing as a window in the Enter 
Transaction mode, the user may amend and add to the Name List
while it appears as a window.  If the desired name is not on the
Name List, it may be added to that list by pressing F8 to enter a
new name.  Exit that mode with ESC, and then choose the new name
and send it to the Enter Transaction screen by either pressing
the letter in the left column opposite the new name or by
pressing Enter and using the highlight method.   To return to the
Enter Transaction screen without selecting a name  from the Name
List window, the user may do so by pressing F1.  The user may
wish to return without choosing a name to pursue the third
option.
    * * Enter Transactions - Third Method of Entering Name * *
          If the proposed name is not to be used frequently and
the user does not wish to have it cluttering up the Name List,
the name of a special Name which will not appear on the Name List
may be entered.  To do this the user, while at the Name location
on the Enter Transaction screen, types (*), whereupon the cursor
will move from the name number entry position to the name
location of the Enter Transaction screen.  The user may then
commence typing the special name.
     * Enter Transactions - Enter Account in Left Account Box * *
          After a project has been chosen or an allocation of a
transaction to several projects made, and Enter has been pressed,
BARE BONES Accounting will go to the location on the Enter
Transaction screen for entry of an account in the left account
box.  The user may enter an account number, if known, or press
PgUp or PgDn to scroll the account names.  Or, by pressing F1 the
Account List screen may be brought up as a window.  Proceed then
in the same manner as described above for entry names from a
window in the Enter Transaction screen.  The Account List window
in the Enter Transaction screen will appear.
          To add to or amend the Account List while it appears as
a window from the Enter Transaction mode, proceed the same as by
direct access to the Account List screen from the Main Menu. 
Thus, if when referring from the Enter  Transaction mode to the
Account List window, a suitable account is not found, the user
may press F8 and enter that account in the Account List which is
displayed as a window.  Then the user presses ESC to return to
the initial Account List mode in the window, and chooses the
account so entered to return to the Enter Transaction mode.   No
account may be used which is not entered on the Account List. 
Should the user attempt to proceed without entering an account
number or enter a number for which no account has been assigned,
BARE BONES Accounting will not allow advancement to the next line
of the Enter Transaction screen, and an appropriate message will
appear in the warning box on the lower part of the screen.
      * * Enter Transactions - Choose Increase or Decrease in     
          Left Account Box * *
            When an account has been chosen for the left account
box and ENTER has been pressed, the cursor will move to the next
location where the user may choose to increase or decrease the
account just chosen by the amount entered above.  Pressing the
UpArrow or DnArrow keys will toggle between increase and decrease
for this account shown in the left account box.  When this choice
has been made and ENTER is pressed the cursor will move to the
next location where the account in the right box may be chosen.   
 * * Enter Transactions - Enter Account in Right Account Box * *
          This account is chosen in the same manner as the
account in the left account box was chosen, except that choosing
the same account for both boxes is not permitted.  As an account
is chosen for the right account box the computer will determine
the class of both accounts and then decide whether the account in
the right account box is to be increased or decreased.  The
increase or decease in the right account box cannot be changed
directly by the user but is changed in accordance with the rules
of bookkeeping by the computer program.   If the user wishes to
check the balance of the accounts which have been chosen without
leaving this screen the user may do so by pressing ALT/A.  After
the data base has been searched and calculations performed,
figures showing the balances before the current entry will appear
below each account name.
          If either of the accounts chosen is an "Asset-Bank"
account and it has been decreased and box will appear for a check
number under that account box, and the cursor will stop at the
check box so that the user may fill in a check number.  A check
number is merely an information notation and not necessary to the
BARE BONES Accounting program, so the user may elect not to enter
any check number and press Enter to move on to the next location. 
Later, in either the Correct Transaction mode or the Reconcile
Bank Statement mode, a check number may be entered for an
existing transaction.   Next, the cursor will go to the location
on the Enter Transaction screen for designation of which project
or projects the transactions relates to.
          * * Enter Transactions - Entering a Project for         
              Entering a Transaction * *
          The user may either designate one project for the
transaction or direct that the dollar amount of the transaction
be allocated among several transactions.   If there was a
tentative project number in the Name List, a project number may
have been automatically entered on the screen.  To eliminate that
project number in the transaction, the user may erase that
project number or enter another project number.  If the
transaction involves just one project, and the number of that
project which appeared on the Project List is known, the user may
enter the number and the project name will appear on the Enter
Transaction screen.  If the number of the project to be entered
is not known, the various projects may be brought up for viewing
by pressing the UpArrow or DnArrow keys.  The entire Project List
may be brought up as a window by pressing F1; a project can then
be chosen by highlighting the line where the project is located
and pressing Enter to return to the Enter Transaction screen. 
         The user may wish to allocate a transaction among
several projects.  To do this, instead of entering the number of
one project, the user presses (*) and then an (*) will appear in
the place where the project number might have been keyed in.  If
the user presses Enter, the center of the screen will change to a
screen for entry of the allocations.  At this point the user must
either press F2 to go to the screen where the transaction may be
allocated among several projects or abandon the entry of the
transaction and return to the main menu by pressing F10.  If the
user presses F2, the resulting screen for entry of allocations
will appear.
          As shown in the screen side notes, the user may move
the highlight from project to project and enter the amount to be
allocated to each project.  On the second line of the screen, the
total amount of the transaction, the cumulative amount which has
been allocated, and the balance left to be allocated will appear. 
To return to the Enter Transaction screen after making the
allocations, press F2.  The program refuses to return to that
screen with the F2 instruction if the balance left to be
allocated is other than zero.   If the transaction is receipt of
interest income which is to be allocated between the projects
according to their daily average balance during the period when
the interest was earned, the user presses F9 while still on the
allocation screen.  A screen appears in which the user enters the
beginning and ending dates of the period in which interest was
earned, and then the program calculates the daily average
balances and returns to the allocation screen and automatically
enters the allocations among the projects.  The user may then
press F2 to return to the  Enter Transaction screen with those
allocations.
          After the a project has been designated or the
transaction has been allocated between several projects, the
cursor will move to the Comment location, unless the account in
the right box is an Asset-Bank account which has been  decreased,
in which case there will be a Check Number box).  The user need
not put anything at the Comment location or may enter up to 70
characters.
          When Enter is pressed at the Comment location of the
Enter Transaction screen, the transaction is recorded to disk and
the screen is ready for entry of the next transaction.  The user
may enter another transaction or press F10 to return to Main
Menu.  To quit, choose "Exit Program" at the Main Menu (which
will insure that the cursor appears on the screen after the
exit). 


                    * * CORRECT TRANSACTION * *

          At the Main Menu highlight "Correct Transaction" and
press Enter; the Correct Transaction screen will appear.  It is
the same as the Enter Transaction screen except that the screen
footnotes are different and the cursor is blinking in an empty
transaction number box, rather than at the month box.  A
transaction number must be chosen before the cursor moves to the
month box.  It is possible to view transactions before choosing a
transaction for correction.   The user may choose the transaction
to be corrected either by keying in the number of that
transaction or by pressing the UpArrow or DnArrow keys to have
successive transactions appear upon the screen from which to
choose.   If the user presses the UpArrow key to find a
transaction to be corrected when no transaction is displayed or
transaction number 1 is displayed, then there will be a message
in the warning box "No More Items in Backward Search".  Pressing
the UpArrow key again will bring up on the screen the last
transaction in the transaction journal.   If the user presses the
DnArrow key when the last transaction in the transaction journal
is displayed on the screen, there will be a message  in the
warning box "No More Items in Forward Search".  Pressing the
DnArrow again will bring up the first transaction in the journal. 
When there are many transactions, these are handy ways to get to
the end or the beginning of the transactions journal.   When the
transaction to be corrected is displayed on the screen, the user
may choose it for correction by pressing Enter, and the cursor
will advance to the month box.  Then any desired changes to the
transaction can be made.  Corrections are made in exactly the
same manner as described earlier in this manual for entry of
transactions; the user merely presses Enter to pass through data
which is to remain the same as it was.  It is necessary to pass
beyond the comment line to record the corrected data to disk.  
After choosing a transaction for correction, to eliminate the
transaction altogether, the user may presses F9 to go directly to
the Delete/Restore module for deletion of that transaction.  (See
Delete/Restore Transaction).   When a user has completed
correction of a transaction and pressed Enter at the comment line
of the correct transaction screen, the data will be entered and 
the program will return to the screen from which another
transaction to be corrected may be chosen.  At this time the
transaction just corrected will appear on the screen.  The user
may choose another transaction to be corrected or press F10 to
return to the Main Menu.


                 * *  REPEAT PRIOR TRANSACTIONS * *

           When a user has transactions in a year which are
repeated every month, it is convenient to be able to duplicate
them, with a new date, for entry in the next month in the same
year without the necessity of making all of the keystrokes.  Even
repeating one transaction with a new date may be more convenient
than keying it in anew, especially where the dollar amount of the
transaction was allocated to several projects in a manner which
the user wishes to repeat.   As described later in this section,
it is also possible to copy a transaction from one year to
another year which has similar Project List, Account List, and
Name list.  While rarely done, this is useful when a data base
for a new year is being opened.   To repeat a prior transaction
with a new date, the user selects Repeat Prior Transactions at
the Main Menu, and a Repeat Prior Transactions screen appears. 
The user must select the first and last transactions to be
repeated.  In the example the box for entering the number of the
first transaction is highlighted.  The user may key in the number
of the first transaction to be repeated, press Enter, and that
transaction will appear.  Or, the user may bring transactions to
the screen by pressing the UpArrow or the DnArrow keys.
          If the transaction shown at the top of the screen is
not a transaction which the user wishes to copy, another
transaction can be brought up.  This is done either by entering
another number and pressing Enter or by pressing the Uparrow or
Dnarrow keys to cause successive transactions to appear on that
part of the screen.   Finally, when the first transaction to be
copied appears, the user presses Enter and the cursor passes down
to the place on the screen for the last transaction to be copied. 
 Initially, the same transaction chosen as first transaction to
be copied will show up on the bottom half of the screen as the
last transaction to be copied.  Unless the user makes a change,
only that one transaction will be copied.  Two or more
transactions will be copied if the user chooses the next or any
subsequent transaction as the last transaction to be copied in
the same manner as the first transaction to be copied was chosen. 
The first and last will appear on the screen.  Then the user must
press Enter again to choose the date to be given to transaction
or transactions.
          At this time the user, by pressing F7, may request the
computer to display the current date. By pressing F7 again the
current date for the new transactions may be chosen
automatically, or another  date may be keyed in.  A message then
appears that if ENTER is pressed the transaction will be copied
as a new transaction in the same year and database, or if F2 is
pressed it will be copied to another year and database. 
Normally, the user will press ENTER to copy to the same year and
data base.  When Enter is pressed, the transactions will be
copied and the first and last new transactions will appear on the
screen.  This completes the normal copying procedure in which the
user will be copying transactions in the same year.  It should be
noted that if the dollar amount of a transaction has been
allocated among several projects, the same allocation will appear
in the new transaction which appeared in the old.   In the
example two transactions were copied, one setting up gross pay as
an accrued payroll liability paired with a payroll expense and
the other reducing a bank account in the amount of net pay with a
corresponding decrease in the accrued payroll liability.  A
payroll check may be written by hand, or as described  later, a
check may be printed referring to the second transaction.  The
withholding reserve will remain in the accrued payroll liability
account.   Only rarely, as when starting a new data base for a
new year of accounting, will the user wish to copy transactions
from the data base of one year to the data base of another year. 
It should not be done where the Project, Account, and Name lists
for the two years are different.  To copy transactions from one
year to another, the user proceeds in the Repeat Prior
Transactions mode just as described above.  When the beginning
and ending transactions and the date have been designated, the
footnote will announce that by pressing F2 the user may copy to a
different year.  A screen will appear in which the user may
choose the destination year.   When copying transactions from one
year database to another year database, there is a warning that
because the procedure involves opening more than the usual number
of files, the user's computer system must be able to accommodate
at least eight open files.  If the user's system is DOS 3.0 or
later, nothing need be done because DOS 3.0 allows the opening of
eight files at one time without any special setting.  Even with
an earlier version of DOS, the user may already have set up a
"CONFIG.SYS" file to increase the allowable number of files in
connection with some other program such as a word processing
program.  Details of how an earlier version of DOS may be set up
to accommodate more files are found in the user's DOS manual
under the subject "CONFIG.SYS".  Except for this routine and the
routine for copying Project List, Account List and Name List
files from one year to another, BARE BONES Accounting operates
without the necessity of capacity for opening eight files at
once.   While normally the user will wish the old dates and check
numbers eliminated, when copying transactions to another year
data base, a message comes on the screen that the old dates and
check numbers may be retained by pressing F8.


                 * * DELETE/RESTORE TRANSACTION * *

          BARE BONES Accounting will allow a transaction to be
either corrected or deleted.  In the Correct Transaction mode,
the user can change a transaction in to an entirely different
transaction, but cannot eliminate the transaction or cause the
dollar effect to be zero.  If that is the objective, the
Delete/Restore Transaction mode must be used.   When a
transaction is deleted, it is not removed from the data base. 
When deleted, it no longer appears in any search of the data,
except in the Delete/Restore mode.  It will not appear in any
report or in any account totals or bank balances, but it is saved
so that it may be restored.  A deleted transaction can be seen
when the Delete/Restore Transaction mode is selected from the
Main Menu.   To delete a transaction, restore a transaction that
has been deleted, or to see the details of a deleted transaction,
select the Delete/Restore Transaction mode at the Main Menu and
then the screen will appear.  Before taking any action with
regard to a transaction, the user must first bring the
transaction to the Delete/Restore Transaction screen.  To bring
deleted transactions to the screen, press the UpArrow or DnArrow
keys and each deleted transaction will successively appear.  This
method will only bring any transactions to the screen if no
transactions are currently deleted.  The user may bring a 
transaction to the screen, whether currently deleted or not, by
keying in the transaction number and then pressing Enter.  If the
user does not wish to take any action regarding the transaction
displayed, the number of another transaction may be keyed in. 
Press Enter to bring it to the display or press the UpArrow or
DnArrow keys to see another deleted transaction.   If, after
viewing one or more transactions, the user decides not to take
any Delete or Restore action, F10 should be pressed to return to
the Main Menu.  When the user has brought a transaction to the
Delete/Restore Transaction screen, the screen will appear.
          To delete or restore a transaction which has been
brought to the screen in the Delete/Restore Transaction mode, the
user again presses Enter to enable the power to delete or restore
and the screen footnotes change.  The user may toggle between
Delete and Not Deleted by pressing the (+) and (-) keys.  Each
time the user toggles from Delete to Not Deleted or from Not
Deleted to Deleted, the change is immediately recorded to the
transaction file on the disk.  To correct a transaction which is
currently "Not Deleted", the user may press F9 and the Correct
Transaction screen will appear with this transaction  number.  
After the user deleting or restoring a transaction, the user
presses Enter, and the program will return to the initial screen
of the Delete/Restore Transaction mode and permit movement to
another transaction for delete or restore action.  On the other
hand, if finished with the delete and restore actions, the user
may press F10 to return to the Main Menu.

                     * * PRINT CHECKS * *

          When the Print Checks mode is chosen at the Main Menu a
Print Checks screen appears.  Checks are only printed for
transactions which have already been entered in the data. 
Accordingly, the user must select from the existing transactions
the first and last transactions for which checks are to be
printed.  The program will only print checks for transactions
which involve an "Asset-Bank" class of account which is being
reduced in the transaction.  If other transactions are designated
for check printing, Bare Bones Accounting will skip them.  In
Bare Bones Accounting the printing of a check does not cause any
entry in the database, but merely reflects an entry which is
already in the database.   In the screen picture above, the
cursor will be blinking in the empty transaction number box for
the first check to be printed.  By keying in a number and
pressing Enter, or by pressing the UpArrow or DnArrow keys, the
user may bring successive transactions to the screen as possible
first transactions for which checks are to be printed.  If the
last transaction in the data base is to be printed, it may be
brought to the screen by pressing the UpArrow twice before any
transaction is showing on the screen.  If the transaction on the
screen is the first one for which a check is to be printed, the
user presses Enter and the cursor passes to the box for the last
transaction to be printed.  The program automatically displays as
the last transaction for which a check is to be printed the same
transaction which was chosen as first transaction to be printed. 
If this setting is not disturbed, only one check will be printed. 
This choice may be overridden at the last transaction box by the
user by keying in another check number or pressing the UpArrow or
DnArrow keys.
          When the first and last transactions for which checks
are to be printed appear on the screen, the user presses Enter
and the checks will be printed using the parallel printer port.   
          BARE BONES Accounting will skip and not print checks
for deleted transactions.

                  * * MODIFYING CHECK FORMAT * *

           At the upper right hand side of the Print Checks
screen, either the words "Standard Check Format" or "User Check
Format" will appear.  The user is given the option of either
using the standard check format which comes with the program or
using the User Print Format.  In User Print Format the user may
select the items of information to appear on the check and the
exact location where each item of information is to appear.   By
moving the highlight with the UpArrow and DnArrow keys, the user
may choose to modify or create a User Print Format.  Creating a
User Check Format will not overwrite the Standard Check Format,
so the user may toggle back and forth between a User Print Format
and the Standard Print Format.   A check printed in standard
format will fit on Moore Business Forms multi- purpose check
Series 7010 or 7020.  A User Print Format may be created to fit
any check style.   To create a "User Check Format" or switch
between "User Check Format" and "Standard Check Format", the user
presses F9 while in the Print Checks mode.  Highlighting "Modify
User Check Format" and pressing Enter results in a screen in
which a User Check Format may be created.  Before the user has
made any changes, the user check format will be the same as the
standard check format, as shown on the last screen.   The
standard check format directs that a three-line address of the
payee will be printed on the check so that window envelopes may
be used.  (The user must have previously entered an address for
the payee by going to the Name List from the Main Menu and then
pressing F9 to add addresses.)
           User Check Format may be modified by the user, and
when modified is completed, the new User Check Format is recorded
to disk.   When the above screen first appears, the cursor is
blinking in the box for the number of lines in the check.  In the
example this is set at 42 lines, the number of lines in a
standard two-part check.  To change this entry, or any other
entry on this screen, the user presses the (+) or (-) keys. 
Normally  this check length entry will not need changing.  
Pressing Enter brings the cursor to the screen position showing
the first matter to be printed.  The screen footnotes now change. 
The two numbers on the left-half side of the screen row under the
words "Line" and "Column" in the previous illustration are the
line and column of the location on the check where the first item
is to be printed.  The last item on that half of the screen row
is the description of the item to be printed at that location. 
The first-half screen row directs that the name of the payee will
be printed on line 1 and column 9 of the check.  Line 1 will be
the place on the check where the printer head is located  when
printing starts.  In the Standard Check Format the first printing
of the payee name is set for line 1 and assumes that before
printing commences, the printer head will be located about 13
lines below the top of the voucher section of the first check
blank.  The user may direct that selected information be printed
anywhere   Print Checks on the check or in two or more places. 
The possible items to be printed are as follows:
     DATE                              2ND LINE ADDRESS
     COMMENT                           3RD LINE ADDRESS
     ALPHA DOLLARS                     PROJECT NAME
     NUMERAL DOLLARS                   2ND ACCOUNT NAME
     NAME                              PROJECT NAME
     TRANSACTION #                     SECOND ACCOUNT #
     CHECK NUMBER                      PROJECT NUMBER
     1ST LINE ADDRESS
          The user changes the line and column by pressing the
(+) or (-) keys when the cursor is under "Line" or "Column" and
then pressing the Enter key.  When the cursor is blinking in the
third position of any half row of the screen, those same (+) and
(-) keys change the description of the item to be printed at that
location.  Then the user presses Enter to move on to the next row
on the screen.  However, the program refuses data which will not
print correctly.  So, if the instructions would cause
overprinting of the next or previous item or printing past the
right-hand edge of the check, a warning will appear in the
warning box and the program will refuse to move forward from that
screen row.   The user may make room for another row on the
screen by pressing the insert key (Ins), and then a blank row
will appear at the cursor and the remaining rows will move down
the screen.  The user may eliminate one or more rows from the
screen by pressing the delete key (Del), and the current row will
disappear and all subsequent rows will move up the screen.   The
user may print on a check any of the items which are listed on
the previous page at more than one place.  For instance, in the
Standard Check Format, several of the items including the date
and the amount are printed twice - once to appear on the stub and
once to appear on the check.
          When the user has gone entirely through the list and
the first blank line at the end of the list, changes will be
recorded to disk by pressing Enter.   After the user has modified
the User Check Format, the program returns to the Print Checks
screen, but now the upper right-hand corner specifies  "User 
Check Format" rather than "Standard Check Format".  Without
losing the new user check format (because it has been recorded to
disk), the user may elect to return to Standard Check Format by
pressing F9 at the Print Checks screen, highlighting "Standard
Check Format" and pressing Enter.  Whichever of the two, Standard
Check Format or User Check Format, is being used will continue to
be the chosen format when the program is terminated and
restarted, until another election is made.  Both formats are kept
in disk memory.

                      * * PRINT TRANSACTIONS * *           

          Transactions may be printed for a hard copy either in
this mode,  in the Read/Print Selected Transactions mode, or in
abbreviated form, in the Reconcile Bank Statement mode.  The
Print Transactions mode prints all of the transactions starting
with a chosen transaction.  It is normally used to create or
update a hardcopy backup of all of the transactions.
          To enter this mode, select "Print Transactions" from
the Main Menu.  The cursor is blinking in a box for the
transaction number.  The user may bring a transaction to the
screen either by keying in a number and pressing Enter, or by
pressing the UpArrow or DnArrow keys.  The screen asks for a
beginning transaction number because the user may already have
printed record of most of the transactions and may want only the
most recent transactions printed for a complete record.   When
the transaction to be the first transaction printed is on the
screen, the user presses Enter and the screen footnotes change
and the line for choosing printing mode appears.  These choices
are with or without paper change stop and printing to the file
rather than to the printer.   By pressing the Right Arrow and the
Left Arrow, the user may toggle between "Print Auto Paper Change"
and "Manual Paper Change" and "File Only".  In the case of a
laser printer or a printer with continuous form paper, the user
would choose "auto paper change" and the program will advance to
the top of each page without stopping. In "manual paper change"
the program will stop the printer at the end of each page to
afford the user the opportunity of putting new paper in the
printer.  When print to file is chosen the file created may be
picked up in a word processing program after leaving Bare Bones
Accounting.   After this choice is made, and ENTER is pressed,
another line appears on  the screen in which the user may choose
whether or not to print any allocations where transactions have
been entered which were allocated between projects.
          By pressing the Right Arrow and the Left Arrow on the
next line, the user may toggle between "Print Allocations" and
"Do Not Print Allocations".  If this  printing is for a hard copy
backup of the data, the user would want to print the  allocations
because it would be hard to reconstruct the data without knowing
how the transactions had been allocated between the projects. 
The option to print allocations is normally chosen, whether or
not any allocation transactions have been entered.  Where it is
chosen and there are transactions where the amount involved has
been allocated between two or more projects, the allocations are
listed after each allocated transaction.  An example of printed
transactions is in the Sample Reports section of this manual.  
Now when ENTER is chosen the printing takes place.  If print to
file was chosen, the file name will appear on the screen.  A
typical file name will be: "C:\BBA\BBA93000.PTW".  These file
names always begin with the same drive and subdirectory as was
designated by the user for the remainder of the files for the
year.  The "93" designates the year.  The "000" indicates that
all projects were involved rather than any one.  The "PT"
indicates that the file came from the Print Transactions mode. 
The "W" means that it was printed to file with allocations.       
           For selective search, sorting, viewing and printing
the mode Read/Print Selected Transactions is used rather than the
Print Transactions mode.


              * * READ/PRINT SELECTED TRANSACTIONS * *

           This mode, selected from the Main Menu, allows the
user to search for selected transactions of the active year, sort
the transactions, and send them either to the screen, to the
printer, or to a file.  The various options in the mode are
listed on the screen.
           When the screen first appears, the cursor is blinking
on the top line over the word "ALL".  To select data from all
months, the user merely presses Enter to leave the line as it is
and move on to the next line.  To search for entries with the
date of one month only, the user presses the Left or Right Arrow
keys to move the highlight to the desired month changing that
portion of the screen.
           To select all transactions from one month through a
later month, the user first  moves to the desired first month
with the Left and Right Arrow keys and then presses Control and
Right Arrow at the same time to highlight a blocks of months,
resulting in the appearance of the month line.  When the month or
months have been chosen, the user presses Enter to move on to the
next line.  On that line the user may use the Left and Right
Arrow keys to choose whether to search for All Transactions, only
for transactions affecting an income account, only for
transactions affecting an expense account, or for transactions
affecting the Balance Sheet Only.
           When ENTER is again pressed, the cursor will be
blinking in the box where the user may choose whether the search
will be limited to transactions with a designated project, or
should be of transactions with all projects.  If the space is
left blank, as illustrated below, the search will not be limited
to any one project and the full amount of each transaction will
be shown.  A project number is entered, either by scrolling
through the project list with the UpArrow or DnArrow keys, by
pressing F1 for a window of the list from which to select, or by
merely entering the number of a project if it is known.  The
project number and name will appears as in the example below, and
the search will be confined to transactions involving that
project.  If a transaction has been allocated between the chosen
project and other projects, only the amount allocated to the
chosen project will be shown.  A choice to confine the search to
just one project will appears.
           At the next line the user determines whether
transactions will be chosen on the basis of the identity of the
name.  If the user merely presses Enter at this location allowing
the name number space to remain blank as shown in the above
illustration, no transaction will be excluded on the basis of the
identity of the name in that transaction.   If an asterisk (*) is
entered on that line, only transactions with Special name will be
selected.  Just as in the case of the Project choice, the user
may press the UpArrow or DnArrow keys to scroll through the list
of Names, or may press F1 to bring the Name List to the screen in
a window from which a selection may be made, or may enter the
number of a name if that number known.  If a name number is
entered on this line, no transaction will be selected which does
not involve that name.  BARE BONES Accounting will refuse to
continue when a number is entered to which no name has been
assigned on the Name List, and a message will appear in the
warning box advising the user of that problem.   After the user
has pressed Enter and left the name line, the cursor will be at
the number box of the Account line.
           Entries here may be made in the same manner as for the
name line, except that the asterisk (*) is not used.  Pressing
Enter without putting a number in this field will cause the
program to display or print transactions with all account
numbers.  Entering an account number will limit the search to
transactions with that account number.  Just as with the project
and name choices, the user may scroll through the account list by
pressing the UpArrow and DnArrow keys, or call up a window of the
Account List by pressing F1 and choose an account from the list.  
         The next line allows the user to elect whether, when
displaying data on the screen, the transactions will be displayed
in five lines with all data, or in one line with the name but
without the project or accounts, or in one line with just the 
project, or in one line with just an abbreviated showing of both
accounts. The choices are made with the Left and Right Arrow
keys.  These different forms of data appear in on the screen or
in the printed or filed output.
          The next line allows the user to choose whether the
selected transactions shall merely be displayed on the screen or
shall be printed with or without pause for manual paper change,
or should be printed to a file.  This election is made by moving
the highlighted with the Left and Right Arrow keys.  (If the
choice was print to a file the name of the destination file name
will be composed of the following elements:  First, will be the
drive and subdirectory used for other files of the current year
(for example, "C:\BBA\"), next will be the letters "BBA", next
will be the last two digits of the year (for example, "93"), then
three digits to represent the project designated for the search
(for example "000" if all projects were designated, or "003" if
just project 3 was designated), then the letters "RS", then a
single letter, either "L", "N", "P", or "A", depending on which
form of data was chosen.  Thus a file name might be
"C:\BBA\BBA93000.RSP".  When the data is recorded to a file the
file name will be displayed on the screen.)   After Enter is
pressed again,  the cursor will go to the Change Sequence of
Transactions box.  Here the user may elect that the transactions
chosen by the previous choices be sorted so as to appear in a
sequence chosen by the user.  If not so sorted, they will appear
in the sequence as originally entered.
           The user presses one of the numbers to obtain the
search named with that number.  If two numbers are chosen, the
last chosen is dominant.  Then, when Enter is pressed once again,
the selected and sorted transactions will be displayed, printed,
or filed.  If the search is limited to one account, the program
will display the total of all of the transactions selected with
that account number.


            * * BALANCE SHEET & PROFIT/LOSS STATEMENT * *         

          At the Main Menu the user may elect to make a Balance
Sheet or a combined Balance Sheet and Profit & Loss Statement by
choosing the line "Balance Sheet with Profit/Loss Statement.
          At first the cursor will be blinking in the box where a
project may be chosen.  If no project number is entered,
transactions from all projects will be reflected in the report. 
If the user enters a project number, only transactions involving
that project will be reflected in the data.   To choose a project
the user may scroll through the projects with DnArrow and UpArrow
or press F1 to bring up the Project List in a window and choose
from it.  Or, if the user knows the number of a project, the user
may enter that number.   After choosing all projects or a
particular project and pressing ENTER the cursor will go down to
the point where the user may press the UpArrow and DnArrow keys
to choose whether to have a report showing the balance sheet and
the profit and loss statement, or just the balance sheet at the
beginning of the year, or a balance sheet with closing entries.   
          A report of the Beginning of Year Balance Sheet will
contain only transactions in which one of the accounts affected
is account number 249 which is "Offset Beginning of Year
Entries".  This account will appear in all of the entries created
with the Setup procedure "Setup Beginning Balances".   A report
of the "Balance Sheet with Closing Entries" will make closing
entries only for the purpose of the report, and the Income and
Expense figures will continue to be in the data for other types
of reports.   If "Beginning of Year Balance Sheet" is chosen the
choice of ending month for the report will not appear on the
screen, but it will appear in the case of the other two choices
after the cursor comes down to the next line.
         When the type of report has been chosen and ENTER
pressed, the cursor will drop to the point where pressing the
Left Arrow or Right Arrow will chose whether the report will be
to the screen, to the printer, or to the file.  If the report is
to the file, when the report is being made the name of the file
will appear on the screen.  A typical file name will be:
"C:\BBA\BBA93002.BL1".  These file names always begin with the
same drive and subdirectory as was designated by the user for the
remainder of the files for the year.  The "93" designates the
year.  The "002" indicates that only project data is involved
rather than data for all projects.  The "BL" indicates that the
file came from the Balance Sheet & P/L Statement mode.  The "1"
means that the first of the three options in that mode (Balance
Sheet with Profit & Loss Statement) was chosen.   In the case of
the first or the third chose the user will have the opportunity
to choose the last month for which the report is made.  This
choice is made with the Left Arrow and Right Arrow keys.  If no
choice is made, the report will be for all months in which there
is data.   When the reports are made to the screen the user may
scroll through them with the UpArrow, Dnarrow, PgUp, & PgDn keys. 
The last portions of each report will be different.  The end of
the Balance Sheet with Profit & Loss Statement Report will
appear.  In this example the income and expense items are fully
set forth and the profit and loss appears not as part of the
capital, but as an addition to it.


             * * READ/PRINT/FILE ACCOUNT TOTALS * *

          In the Read/Print/File Account Totals mode, the program
calculates the totals of entries in each account for each month
and the totals of each account for the year.  The user may elect
to send these totals to the screen, to the printer, to a file, or
to a Lotus123 import file.  If sent to a file they may be picked
up by a word processing program.  If sent to a Lotus123 import
file, they may be imported by Lotus123 and then manipulated with
all the features of Lotus123.  The user may use any or all of
these methods depending on the needs and preferences of the user. 
         The cursor will be blinking in the box where the user
may choose whether the report will be limited to transactions
with a designated project, or not.  If the space is left blank,
as illustrated below, the report will be for all projects
combined.  If a project number is entered, as illustrated below,
the report will be for transactions with that project.  If the
project number is known, it may be keyed in.  If it is unknown
the user may scroll through the list with the UpArrow or DnArrow
keys or may bring up the project list in a window with the F1 key
and make a selection.  Where a transaction has been allocated
between several projects, only the amount allocated to the chosen
project will be included in the report.   After Enter is pressed
at the project number location, the program moves down to the box
where the user determines whether the report will go to the
screen, to the printer, or to a Lotus123 Import file.  The user
may press the UpArrow and DnArrow keys to move the highlight from
one to another of the  options, and press Enter to select.
          If either of the Lotus123 options is chosen the program
will proceed to create the report as discussed later.  If the top
option is selected, two more selections will appear at the bottom
part of the screen.  The screen footnotes direct how the user may
select three different periods of months for the screen, the
printer, or the file.   The first method is to press the Left or
Right Arrow key without pressing the control key, in which case
the first column of the report shows the account totals for the
highlighted month and the second column of the report shows the
totals for a period beginning in at the first month of the year
through that highlighted month.  If the report was sent to the
screen, after the totals appear on the screen the user may press
the Left or Right Arrow keys to change all the totals to reflect
a different last month.  If all the account totals do not fit on
the screen, pressing PgUp, PgDn, UpArrow, or DnArrow will move
around the remainder of the list.  Pressing Enter or Pressing F10
will exit to the Main Menu.  Pressing ESC will take the user back
to the screen for selection of Read/Print/File Account Totals
options.   If, when designating months, the user presses the
Control key with the Right Arrow key, this will designate a
middle group of months for the report starting after the first
month of the year.  Such a report will be similar to the
illustration above.   If, when designating the months for the
report, the user presses the (+) or (-) keys, the two columns of
the report will show two successive months side by side.  When
this selection is being made the month line of the selection
screen appears.
           After the totals for the two months appear on the
screen side by side, the user may scroll through the totals for
each of the twelve months by pressing the LeftArrow or RightArrow
keys.   If the user had elected the printer rather than the
screen as the destination, substantially the same report is sent
to the printer.  If the user had elected the file as a
destination, the same report would be sent to a file the name of
which would be similar to C:\BBA\BBA93002.RA1.  The "93" is the
year abbreviated, the "002" signifies that the report was
confined to project number 2, and the 1 at the end shows that the
report was of month and year to date rather than of two months
side by side.   If the user had chosen the second or the third
option to "Create Lotus123 File", which were in the lower part of
the box at the first Read/Print/File Account Totals screen, the
account totals would not go to the screen or the printer, but
would go to a disk file capable of being imported by Lotus123.    
           The second and third options create a Lotus123 import
file with a filename  ".PRN" similar to "BBA91001.PRN" (the 91
signifies the year 1991 and the 001 signifies project number 1). 
It will be located on the same drive and directory, as designated
for the remainder of the files for the year's data base.  Once
such a file is created, the user may run Lotus123 and pick the
data up in the Lotus123 "File Import - Numbers Mode" and then may
manipulate the data in Lotus123.  The second option on the
Read/Print/File Account Totals screen will list several months,
as chosen by the user, which in this example is January through
May.
           As the Lotus123 program starts with small column
width, it cuts off the account names and crowds the appearance of
the numbers.  Using the Lotus123 commands the user may widen the
columns and change the format to present proper appearance. 
After the example of the year totals in Lotus123 is picture
showing how the appearance of that data is improved by changing
the Lotus123 format.   Of course, many more operations may be
performed on the information in Lotus123.   If the last option on
the Read/Print/File Account Totals screen is chosen, only the
account totals for the entire year will be shown.


                       * * AUDIT * *

           In the audit mode each account is displayed with all
transactions involving that account in order and a cumulative
total of the transactions displayed.  It may be displayed for
only transactions of one project or for all transactions.  It may
be sent to the screen, to the printer, or to a file.  Below is a
display of the first screen where the user has pressed ENTER
twice to choose the screen as a destination and all Transactions
rather than transactions of just one project.
           Had the user wished other choices the user could have
used the Left Arrow and Right Arrow keys to chose a different
destination or could have keyed in a project number to limit the
transactions to those involving that project.  When choosing a
project, as at other screens, the user could have scrolled
through the project list with the UpArrow and DnArrow keys or
called up a window of the project list with F1.   When the user
presses ENTER again the transactions and data will be displayed
on the screen.  Then the user may press UpArrow, DnArrow, PageUp,
or Pagedn to travel through the list.  Displayed below is a page
of the audit data.  Below each account on the highlighted line
are all of the transactions with that account.  Each transaction
in the display shows the name involved in that transaction, the
amount of the transaction and cumulative balance.  Had any
transaction been one which decreased rather than increased the
account on the highlighted line, the transaction would have been
shown with a minus.
            At this screen the user may press ALT and A to
display the same screen as above except with the second account
displayed on each line rather than the name or could press ALT
and P to display the same screen as above except with the project
displayed on each line rather than the name.  The user may press
ESC to return to the first screen of audit to direct the same
matter go to the printer or to the file rather than the screen. 
If the data is directed to the file, the program will give the
file a name such as BBA93002.AUN, in which "93" is the year,
"002" is the project, "AU" is audit mode, and "N" is display name
on each line.  If the instruction had been to display the second
Account on each line instead of name the last letter would be
"A", and if the instruction were to display the project on each
line instead of the name, the last letter would be "P".


         * * BANK BALANCES AND RECONCILE BANK STATEMENT * *       

          Every account which is designated by the user on the
Account List as a class "B" account (Assets-Bank) is considered
by the program to be a bank, savings, or credit union account. 
The balance of such an account can be determined just as the
balance of any other account in the system.  In addition, the
first screen of the Bank Balances and Reconciliation shows up to
eight bank accounts and their balances.  Before each time these
balances are displayed the program reads all of the data, so the
balances always reflect the latest transactions.  This screen is
selected from the main menu and appears.
           In this example there are just two bank accounts shown
because in this database only two accounts of class "B"
(Assets-Bank) were entered in the Account List.  Up to eight bank
accounts will appear on this screen if entered in the data.   If
the user merely wished to see the bank balances, the user may
press F10 and return to the Main Menu.  For reconcile bank
statement matters the user should highlight the bank account on
which the user wishes to work by moving the highlight with the
UpArrow or DnArrow keys and then press ENTER to choose the
highlighted bank.
          After a bank account is chosen, the next screen will
show the bank chosen and, on the same line, the current balance
of that bank account.  On the same screen are the dates of the
bank statements together with the balance of cleared items after
each statement.  The example shows May of the year 1993 where
four bank statements have been entered and reconciled for the
Wells Fargo Bank  account.   (The statement dates are not entered
until each bank statement is received, so the list will be blank
when the program is set up until the user enters a statement date
or dates.  The balances will be the result of the user marking in
those items which have cleared the bank - see later.)
          The statement dates are stored in the same file where
the Name List is stored.  Therefore, if a user has copied a Name
list from another year using DOS rather than the facility in BARE
BONES Accounting, statement dates from that year will also be
copied.  Accordingly, the program provides an option to erase the
statement dates by pressing F8.  For more information about
copying the Name or Account List files, see "Suggestions to the
User - Setting Up for Another Year".   If a new bank statement
for this account has just been received, the user should first
enter the date of that new statement below the last statement
date presently appearing.  To view transactions related to one of
the twelve statements whose dates are shown on the screen, the
user may highlight the date of that statement and press F1 to go
on to the next screen with that statement date as the active
statement date.  Usually the user will wish to highlight the last
statement date or the one which has just been entered.
          Thus later when an item is marked as having cleared it
will be marked with the active statement date.  The first screen
appearing after the user presses F1 shows the bank name and the
active statement date, together with the footnotes needed to
proceed.
          Now there are several choices to be made, all of which
are set forth in the screen footnotes as seen in this screen. 
The user must choose one of four options in respect to the next
screen - (1) to see all items which have not been marked as
having cleared the chosen bank account, (2) to see those items
which have been marked as having cleared the chosen bank account
in the chosen statement period, (3) to see both the items above
described at the same time, or (4) to see all items, cleared and
uncleared, relating to the chosen bank account.  Most frequently
the user will choose option (1) to see and amend what has not
cleared the  bank.
          Before making those choices, the user may press F8 to
sort the transactions, as explained later in this section of the
manual.   After the user chooses (1), (2), (3), or (4), a new
screen with a list of transactions and new footnotes appears.  If
(4) is pressed all transactions with the selected bank will
appear, showing the date that they cleared the bank, or the word
"NO" indicating that they have not cleared the bank.
          When reconciling with the bank statement, the user may
enter a check number for a transaction, if this has not already
been done, and may indicate whether or not the transaction has
cleared the bank statement currently being examined.
          Pressing (*) records in disk memory that the
transaction has cleared the bank statement currently being worked
on and notes the statement date currently being examined.  This
statement date will appear on the transaction line in the column
titled "CLRD?".  To enter another statement date, the user must
return to the statement screen and choose that date before
pressing (*).  Pressing F1 will restore the "-NO-" to that
column, again showing the transaction as not cleared.  Pressing
Enter, (*), or F1 records to disk the check number and the bank
statement action.  The user may key in a check number, without
any statement action, and press Enter to record that number to
disk and go to the next line.  On the very last line of the
screen is a reminder that the pressing ALT/A will show the
current statement balance without leaving the screen.   The user
may pass up or down in the lines of data with either the (+) or
(-) keys or the UpArrow or DnArrow keys.  When using these keys
(rather than the Enter key or the (*) key) after keying in a
check number, the check number would not be recorded to disk and
would be lost.  Thus, to go up in the list after keying in  a
check number, the user must first press either Enter or (*)
before pressing (-) or UpArrow to go up in the list, or the check
number will not be recorded to disk.   By pressing ESC twice the
user may see the results of the check reconciliation in the
second screen of this Bank Balances and Reconciliation mode.  Or,
just to see the balance reconciled to the current bank statement
without leaving the Reconcile screen, press ALT/A.   At the same
transaction at which the cursor was blinking when reconciling a
statement, the user may press F9 to go to the Correct Transaction
screen.  This would be useful if, in performing the bank
reconciliation, an error in the transaction was noted.  By
pressing F10 the user goes to the Main Menu.   By pressing ESC
the user goes to the previous screens in Bank Balances &
Reconcile Bank Statements mode.  This would be useful where the
user wishes to go back one screen and choose to view the cleared
transactions rather than the uncleared transactions.  It would
also be useful to go back two screens and choose a different
statement date.  Or, the user could go back three screens and
choose a different bank account.  When notation is made of all
items which are shown as cleared on a given statement, one can
view all of those items on the screen by using option  (2) in the
third screen of the Bank Balances & Reconcile Bank Statement
mode.   When at the third screen of the Bank Balances & Reconcile
Bank Balance mode, a hard copy of any of the lists is made by
pressing ALT and the mode number desired, that is 1, 2, 3, or 4. 
For such a hard copy see the end of this manual.   If it appears
during the reconciliation that an item shown as cleared in the
bank statement never was entered (possibly a handwritten check),
the user returns to the Enter Transaction mode to put that item
in and then back to the Bank Balances & Reconcile Bank Statement
mode to note it as cleared.  In the Enter Transactions and
Correct Transactions modes press ALT/R, when "ALT/R =   Bank
Balances & Reconcile Bank Accounts" appears in the screen
footnotes, for quick return to Bank Balances & Reconcile Bank
Statement.  Upon pressing F8 at the third screen of Bank Balances
& Reconcile Bank Balances, the sort instructions appear.  Both in
the Bank Balances & Reconcile Bank statements mode and in
Read/Print Selected Transactions, the user may sort the order of
the transactions.  The sorting facilities of the Bank Balances &
Reconcile Bank Statement mode are discussed here.
          As can be seen from the screen, all the transactions
with the chosen bank may be sorted according to any one, or more,
of four criteria.  After the sorting process the user chooses the
display or print options in the footnote; then, in the case of a
sort by amount, the transactions will be shown.  This sorting
does not affect the data base.  The sorted sequence is kept in
temporary memory and is gone as soon as the user leaves the Bank
Balances & Reconcile Bank Balance module.   The sorting facility
is also available in Read/Print Selected Transactions where it
may be applied to all transactions, not just bank transactions as
in this mode.  In Bank Balances & Reconcile Bank Statement it is
useful to find checks of a certain amount or with a certain check
number.   It is possible to print a list of transactions by
pressing Alt with either 1, 2, 3, or 4.  When one of these
choices is made the screen will show a choice of whether to print
or send to a file.  If the choice is to send to file, when the
data is being sent to file, the screen will show the name of the
file which will be similar to C:\BBA\BBA93001.4 in which the "93"
indicates the year, the "001" indicates that the bank is account
number 1 and the number after the period is the 1, 2, 3, or 4
selection of data as discussed above.


                 * * BACKUP DATA CURRENT YEAR * *                 
         BARE BONES Accounting will copy all data files for the
active year to the drive and directory designated by the user. 
The user must designate the disk to which backup is to be sent as
directed in the screen instructions.
          If the program and the data are on a hard disk, the
backup of any year can be sent to any diskette disk drive.  With
two diskette drives (one having the program and the other the
data), the user may remove the program disk, put the backup disk
in its place, and then backup the active year, being careful to
replace the program disk before entering more data.
          Backup is only of the current year.  To backup another
year the user makes that year the current year and repeats the
backup procedure.  To back up all years on the subdirectory BBA
of the hard disk C, the user can return to DOS and enter a
command in the form COPY C:\BBA\BBA????? A:  This will copy all
BARE BONES Accounting data files on the "BBA" subdirectory of the
"C" drive to the "A" drive, but will not copy the program file
which is "BBA.EXE" or the year list file BBAY which are not
normally in the subdirectory "C:\BBA".  Every time a the data
files for any year are copied the system also copies the Year
List file which relates to all years (BBAY).   In addition to
backup on disk, the user should make a hard copy of all
transactions in the Print Transactions mode, updating it
frequently.  The user should also print a hard copy of the
Project, Account, and Name Lists.


                  * * CHANGE TO ANOTHER YEAR * *

           By selecting the "Change to Another Year" mode at the
Main Menu or pressing F5 at any point in the program, the user is
taken to the Year screen and may switch to another year.  To
change to another year, the user moves the desired year to the
center of the screen with the UpArrow and DnArrow keys and then
presses Enter.  If no disk drive has been specified for the year,
a warning will appear so stating and the user must designate a
disk drive before proceeding.  If no files exist for the year,
successive screens will appear asking whether the user wishes to
create new files for the new year.


                   * * SETTING UP FOR A NEW YEAR * *

           BARE BONES Accounting has a separate database for each
calendar or fiscal year.  Normally, the user will want to
continue to do accounting for the next year.  A new year is set
up by going to the Year List screen from the Main Menu.  When the
new year is brought to the active position on the Year List
screen, the user will designate a drive (and possibly also a
directory) as a destination for the data for that new year.  
When the user first selects a new year, there will be no data
files for that year and the program will ask for permission to
create them or to copy them from  another year.  This is
discussed earlier in this manual under the topic "Opening New
Data Files".   The user may create new lists without copying from
a prior year.  However, it is very likely that the user will wish
to copy the Name List, Project List, Account List, and Name
Address files from one year to another.  The screens which appear
when a new year is being set up offer an option to have the
program copy these files.  A sample of these screens is in shown
earlier in this manual under the topic "Opening New Data Files".  
The user may choose "Copy Other Account List File" and on the
next screen may select an existing year's data base from which to
copy the Account List file and, if desired, the Name List file,
Name Address file, and the Project List File.  When the Account
List file is copied in this manner, the old Bank Statement dates,
which are also kept in the Account List File, are not copied to
the new account file.
          The Account List, Project List, Name List, and Name
Address files may also be copied in DOS with the following
instructions:
COPY A:BBA1993P   A:BBA1994P   (copies Name List)
COPY A:BBA1993I   A:BBA1994I   (copies Project List)
COPY A:BBA1993A   A:BBA1994A   (copies Account list)
COPY A:BBA1993E   A:BBA1994E   (copies Name Address)
          If the DOS method is used, any statement dates copied
from the old data base as part of the old Account List file will
have to be erased when in the Bank Balances & Reconcile mode. 
The statement screen of the Bank Balance and Reconcile mode has
an instruction on how to do this.   See the next section for
bringing the balance sheet forward from the old year to the new
year.


              * * COPY BALANCE SHEETS TO A NEW YEAR * *           
            
            After all the files have been established in the new
year, the user will wish to return to the old year to send the
balance sheet and accumulated net profit or loss forward to the
new year.  End of year adjustments to move the net profit or loss
are automatically made by the program and no manual end of year
adjustment entries are necessary for that purpose.   To bring the
balance sheet with the net profit and loss forward to another
year the user returns from the new year to the previous year and
goes to the Main Menu in the current year and presses F8 at which
time a box appears showing that the user may press Alt and T to
carry the balance sheet with next profit and loss over to the
next year.
          If the user has directed the program to setup the files
for the next year then when the user returns to the previous year
and directs the program to send the balance sheet and the net
profit or loss to the next year, it will do so.  If the data
files for the next year have not been set up, the program will
warn that since those files have not been set up the balance
sheet and net profit or loss cannot be sent forward.  The user
then must move to the next year and set up those files and then
return again to the previous year to send the data forward.  
Once the data is sent forward the user may change to the new year
and then commence entering transactions.


                    * * EXIT PROGRAM * *

          Selecting the "Exit Program" mode at the Main Menu,
either by the highlight method or by pressing q or Q at the Main
Menu, terminates the program and returns control to DOS with the
blinking cursor restored.  Anywhere in the program, the program
may be terminated by pressing Control-C.  With some operating
systems, using Control-C to terminate the program will leave the
user in DOS without a blinking cursor.  Also, terminating the
program with Control-C while entering data in the Project, Name,
or Account Lists results in loss of the currently entered data. 
For those reasons, the user may not want to terminate the program
using Control-C.

                  * * PROGRAM & DATA FILES * *

          The file containing the program is "BBA.EXE".  All
other files are data files created and named by the program.
          When the program is started, after the introductory
message, the program locates or creates on the current drive a
file named "BBAY", which is a list of the years for which
accounting may be done together with a designation of which drive
the data for each year is located.  This list is displayed on the
Year List screen.   When a user chooses a year on the Year List
screen after designating a drive (and possibly a directory) for
the data for that year, BARE BONES Accounting locates or creates
(on the designated drive and directory) all the files which may
be used in connection with that year with the exception of the
Lotus123 Import Files; these are  created only when that option
is requested.   The files BARE BONES Accounting located or
created when a year is chosen are:  a Name List file, an Account
List file, a Project List file, a Transaction Journal file, a
Transaction Breakdown file, a Special Name file, a Comment file,
and a Name Address file.  The names which BARE BONES Accounting
automatically gives these files follow the following formula:  
"BBA" + Year + data type      Thus, the files for the year 1993
would have the name as listed below:
         Name List             BBA1993P
         Account List          BBA1993A
         Project List          BBA1993I
         Transaction Journal   BBA1993J
         Breakdown Journal     BBA1993B
         Special Name          BBA1993S
         Comment               BBA1993C
         Name Address          BBA1993E
      If the user had designated a subdirectory on the "C" drive
as the location of data files for the year 1991 data base, the
transaction journal file would be C:\BBA\BBA1991J.   The diskette
on which the program is delivered contains the program file,
BBA.EXE, and data files created by the author to demonstrate the
use of BARE BONES Accounting.  Only the BBA.EXE file is necessary
to the user for setting up an accounting system.   Should the
user elect to create a Lotus123 Import file in the
Read/Print/File Account Totals mode, BARE BONES Accounting would 
automatically name it according to the following formula: "BBA" +
2 Digits Year + three digits for project number + ".PRN".   If
the Lotus123 file was for the year 1993 and Project Number 1, the
file name would be "BBA93001.PRN".  If the Lotus123 file was
created for all transactions, rather than just for one project,
the file would be "BBA93000.PRN".  This Lotus123 Import file will
be located on the same drive and directory as the remainder of
the BARE BONES Accounting files for that year.   Everywhere in
the program where the user may print a hard copy there is the
option of sending the same data to a file.  The program makes a
different file name for each of these files which are all sent to
the same drive and directory as occupies the other data files for
the year:   Where the user sends the Project List to file the
program typically names the file "BBA93000.NAM", where the "93"
indicates the year 1993.
          Where the user sends the Account List to file the
program typically names the file "BBA93000.ACC", where the "93"
indicates the year 1993.
          Where the user sends the Name List to file the program
typically names the file "BBA93000.NAM", where the "93" indicates
the year 1993.
          Where the user Print Transactions to a file a typical
file name created by the program will be: "BBA93000.PTW".  The
"93" designates the year.  The "000" indicates that all projects
were involved rather than any one.  The "PT" indicates that the
file came from the Print Transactions mode.  The "W" means that
it was printed to file with allocations.
          In Read/Print Selected Transactions if the choice was
print to a file a typical file name created by the program will
be "BBA93000.RSP".  The "93" signifies the year 1993, then three
digits represent the project designated for the search (for
example "000" if all projects were designated, or "003" if just
project 3 was designated), then the letters "RS", then a single
letter, either "L", "N", "P", or "A", depending on which form of
data was chosen.
          If the Balance Sheet and P&L Statement report is to the
file, when the report is being made the name of the file will
appear on the screen.  A typical file name will be:
"BBA93002.BL1".  The "93" designates the year.  The "002"
indicates that only project data is involved rather than data for
all projects.  The "BL" indicates that the file came from the
Balance Sheet & P/L Statement mode.  The "1" means that the first
of the three options in that mode (Balance Sheet with Profit &
Loss Statement) was chosen.   In the Read/Print/File Account
Totals mode if the user had elected the file as a destination, a
typical name given to the file by the program would be
"BBA93002.RA1".  The "93" is the year abbreviated, the "002"
signifies that the report was confined to project number 2, and
the 1 at the end shows that the report was of month and year to
date rather than of two months side by side.   In the Audit mode
if the choice is to send to file a typical name given to the file
by the program would be "BBA93000.AUN".  The "93" is the year,
the "000" indicates that the user choose to include data from all
projects, the "AU" indicates the audit mode, and the "N" means
the user elected that each transaction display the name involved
in that transaction.  If the last letter were "P" each
transaction would display the Project involved, and if the last
letter were "A" each transaction would have displayed the second
account involved in the transaction.   In the Bank Balances and
Reconciliation mode if the choice is to send to file a typical
name given to the file by the program would be "BBA93001.4" in
which the "93" indicates the year, the "001" indicates that the
bank is account number 1 and the number after the period is the
1, 2, 3, or 4 selection of data as discussed above.    
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
T h e  P C - S I G  L i b r a r y  o n  C D - R O M,

                1 2 t h E d i t i o n



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The PC-SIG Library on CD-ROM, winner of the Optical Publishing
Association's Best Consumer Product Award, has added a hypermedia
interface that makes it easy to find and download any type of program
you could want. The WordCruncher text retrieval program has also been
implemented to assist you insearching this vast collection.

This CD-ROM contains over 3700 fully functional shareware programs, each
with a detailed review. The 12th Edition has added over 300 new programs
and over 500 updates since the release of the 11th Edition. The
collection is always kept current and now contains over 70 megabytes of
Windows 3.0 and 3.1 applications, fonts, icons, games and wallpaper
files.

The range of software is phenomenal! There are huge assortments of
games, everything from adventure games with full SVGA and SoundBlaster
support to favorites like Klondike, Chess and Othello. Spreadsheets,
databases, wordprocessors and graphics programs are instantly available
and there are literally hundreds of unique and specialized programs that
will save you time and money. This amazing collection will help you get
a handle on all your business and home accounting and also teach your
children about zoology.

Each of the more than 3700 programs has a one-line description for quick
reference, Just pick one of the 13 software categories and a subcategory
to begin browsing for a program that interests you. You might choose the
Games Category, where you can pick from 12 subcatgories including
Adventure, Arcade, Cards and more. A mouse click (or keyboard stroke) on
the program title takes you to a detailed description of the program.
you can immediately download the software to your hard or floppy drive,
and in many cases view a screen shot.

You can find any program in the collection quickly and easily by using
the search button. When you are in a program category just type in the
title of the program and you will be taken to the description of that
program. The popular WordCruncher text retrieval program has been added
to allow searching every description for any word within that
description, not just in the title or keywords chosen by someone who
thinks differently than you do. The WordCruncher is ideal for finding
programs which perform a specific function, just try searching for
"split", "math" or "subtract". Or switch to the Disks section where you
will find an alphabetical list of all the programs which can be searched
by program title or disk number.

Everyone has their favorite programs and we're no exception. Our 44
favorite programs can be run immediately. No downloading is necessary,
all you do is click on the word "RUN" in the program description and
you'll be working or playing with top notch software right on the CD.

The power of hypermedia will allow you to try out more software than you
ever thought possible. We are sure that you will find a multitude of
programs to your liking on the P-SIG Library on CD-ROM.

System Requirements: IBM PC/AT PS/2 or compatible with 640K, DOS 3.3 or
higher, Microsoft MS-DOS CD-ROM Extensions and a CD-ROM player. We
recommend a 386 with a VGA monitor.










T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed by title, filename, PC-SIG disk
number, and every word in the program description.  A new utility, Narc,
is implemented so you can look at the program files and the author's
on-line documentation without having to first copy the program to your
hard disk.  By using WordCruncher and Narc, you can quickly find the
program you want and review it to be sure, without ever having to run it
from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.


T h e  P C - S I G   G a m e s    C D - R O M
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Now you can play a game a day fo over a year.  This CD-ROM is jammed
with over 380 shareware games of all types, designed to appeal to the
new generation of CD-ROM users out for fun.  The CD incorporates a
hypermedia interface and allows 250 of the games to be played directly
from the CD-ROM.

The hottest games in shareware are on this disk, including the
action/arcade games "Jill of the Jungle" and "Wolfenstein 3D," which
rival or surpass commercial PC and Nintendo for use of animation,
SoundBlaster audio, and VGA graphics.  There are also games designed to
teach children mathematics, spelling and even ecology.  All these games
for less than a dime each!

Over 250 of the games can be played directly from the CD without copying
them to a floppy or a hard drive.  Being able to run from the CD means
that users can explore games without using up valuable hard disk space
or spending time downloading and deleting files.  The hypermedia
interface makes it easy to browse the titles, read a one line
description or full review, and copy or start a game by clicking the
mouse or using the keyboard.

T h e   P C - S I G   W o r l d   o f   G a m e s   C D - R O M
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The new PC-SIG World of Games CD-ROM contains over 550 of the best
shareware games, including 53 educational games for children and 57
Windows games. 430 of them can be played directly from the CD without
using your hard drive space.

This edition employs the award-winning HyperReader interface, allowing
easy searching and playing by using a mouse or the keyboard.

This CD is the first in a six-volume PC-SIG Encyclopedia of Shareware
series. Each volume will include the programs from a section of the
PC-SIG collection and also the programs and text from the current issue
of Shareware Magazine. This CD contains the entire text from the
May/June issue of Shareware Magazine, featuring hardware reviews of
the Tandy Sensation and the Media Vision Pro 16 Multimedia System.
Software reviews included cover 58 new shareware releases, security,
educational, CD audio and PIM's. 159 of the programs mentioned in the
magazine are included and can be downloaded using the HyperReader
interface.

There are also 89 programs which were updated since the last issue of
Shareware Magazine, helping those of you who have purchased the 12th
edition of the PC-SIG Library keep on top of the everchanging world
of shareware.

As well, a description of every program in the PC-SIG Library can be
searched with the WordCruncher text retrieval program. This Games CD
continues the ten year PC-SIG tradition of providing quality programs
and information to help you find the best program for your purpose.

System Requirements: IBM PC/AT/PS/2 or compatible computer with 640K,
DOS 3.3 or higher, Microsoft MS-DOS CD-ROM Extensions and a CD-ROM
player. We recommend a 386 with a VGA monitor.



To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

For Technical information: Call 408-730-9291 and ask for Technical
Support

Outside the U.S.A.: Call (408) 730-9291 for the name of the dealer near
you.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 3500 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A.: Call (408) 730-9291 for the name of the dealer near
you.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A.: Call (408) 730-9291 for the name of the dealer near
you.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.50 for 5.25" or $4.00 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $19.95  ______

Super Saver Membership                                 $39.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $5.00  ______
($5.00 is refundable with your first order)

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

The PC-SIG World of Games CD-ROM                       $19.95  ______ 

The PC-SIG World of Windows CD-ROM                     $19.95  ______

The PC-SIG 12th Edition Library CD-ROM                 $99.00  ______

Upgrade to the 12th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $59.00  ______

Upgrade from ANY other CD-ROM just!                    $59.00  ______

The PC-SIG Encyclopedia of Shareware on CD-ROM
(1 year subscription)                                  $99.00  ______


                                                    Subtotal   ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD: Call (800) 245-6717
Ask for operator #2351
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4033

     Volume in drive A has no label
     Directory of A:\

    BAREBONE ZIP    164476   8-31-93   2:26p
    CDROM    TXT      8196   6-01-93   3:26p
    GO       EXE     26022   1-10-92  12:14p
    GO-FORM  DAT      3336   6-01-93   2:30p
    GO-STRT  DAT       541   6-01-93  11:07a
    PCSIG    TXT      2329   6-01-93   2:31p
    PKUNZIP  EXE     29378   2-01-93   2:04a
    SHAREMAG TXT      1831   6-01-93   2:32p
    SIGORDER TXT      3334   8-31-93  12:45p
            9 file(s)     239443 bytes
                           77824 bytes free
