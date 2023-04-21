---
layout: page
title: "PC-SIG Diskette Library (Disk #2495)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2495/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2495"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2495.TXT

{% raw %}
```
Disk No: 2495                                                           
Disk Title: QUE Accounting General Ledger                               
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: Que Accounting General Ledger                            
Author Version: 2.2                                                     
Author Registration: $45.00                                             
Special Requirements: 640K RAM, and a hard drive.                       
                                                                        
QUE ACCOUNTING GENERAL LEDGER (QUE G/L) is a full-featured general      
ledger that supports multiple companies and multiple departments.  While
the QUE G/L is easy to use because of its menu-based design and context 
sensitive help screens, it is a serious accounting package.  You must   
have accounting knowledge to use it.                                    
                                                                        
QUE G/L includes the following features:                                
                                                                        
~ Batch entry of transactions                                           
                                                                        
~ Detailed listings with account and department totals                  
                                                                        
~ Automatic repeating entries                                           
                                                                        
~ Posting to closed periods                                             
                                                                        
~ Audit trails with batch dates                                         
                                                                        
~ 99 fiscal periods and transaction limit of $99,999,999                
                                                                        
~ Budget entries by company, department, and account                    
                                                                        
~ Financial statements by corporation, company, and department          
                                                                        
~ Financial and budget comparisons between companies and periods        
                                                                        
~ dBase file compatibility                                              
                                                                        
QUE G/L comes with a functional practice set that quickly introduces you
to its many features.  The extensive report writer and query systems    
make it the type of system that's popular with CPA firms.  QUE G/L      
integrates easily with the other QUE accounting modules and is a great  
way to get serious about your financial information.                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
                         QUE ACCOUNTING
                          Installation

For the system to function properly, it must be installed on a
hard drive.  The specific requirements are listed below.  Note
some adjustments may be required of DOS configuration files.

HARDWARE

QUE requires : 
  - 640K MEMORY 
  - 1,000,000 BYTES FREE on hard disk * 
  - a floppy drive used for installation 

SOFTWARE 

  - CONFIG.SYS - needs to have FILES=25 and a BUFFERS=16 
  - Must be installed on C or D drive. To install to other 
    drives the knowledgeable person can change the INSTALL bat 
    files. 

The directory structure created during installation is the value
entered at the command: 
 
     eg A:INSTALL QUEACC

       where QUEACC is the name of the directory to be created
 
In case this directory is already used for another application,
no files or programs will be overwritten and no harm should come
to that system.  However removing the other system to a separate
directory, is advised.

PROCEDURE

The system comes with 1 diskette. To install the system insert
the diskette into  drive A and type in 

        C> A:INSTALL QUEACC 
 
To install from another drive(example B), change the INSTALL.BAT
file to read B: in all places where A: is found or type in the
following commands:

        C> MD QUEACC
        C> CD QUEACC
        C> B:PKUNZIP -O B:QUEACC

The documentation may be viewed on line or printed out by typeing
the following command. Note the manual is segregated into several
sections following the Main Menu structure.

        PRINTDOC 

You are now ready to start. Please do the following: 

        C: 
        CD\ 
        C> CD QUEACC
        C> MAINMENU 

Enter "AAA" for COMPANY and "test" for PASSWORD and then go to
the UT Menu and select the REINDEX option in order to create the
index files. If you don't do this step, the system will not work. 


```
{% endraw %}

## BACCMAIN.TXT

{% raw %}
```

                            Chapter 4
                        Signon Procedure 
                  

Introduction

Starting the system by typing in MAINMENU at the C prompt (C>)
will display the following screen:


              Enter the COMPANY Code AAA
              WELCOME TO THE QUE ACCOUNTING PACKAGE
              PLEASE ENTER THE PASSWORD TO CONTINUE:


The user is given 3 attempts at entering the correct password
before the system is aborted.  Once successful, the MAINMENU will
be displayed.  For first time users a ZZZ company code and 'TEST'
password provides access.

Passwords and Company codes are setup in the ST Setup file.


Main menu


                   * YOUR COMPANY NAME HERE *
                           ACCOUNTING
                            MAINMENU

             QUIT. EXIT FROM SYSTEM - RETURN TO DOS
             ET. GENERAL LEDGER TRANSACTIONS
             RE. REPEATING ENTRIES
             GL. GENERAL LEDGER MASTER
             DT. DEPARTMENT MASTER
             TB. START UP PROCEDURE AND COMPARISONS
             FS. FINANCIAL STATEMENTS AND ACCOUNT QUERY
             PE. END OF PERIOD PROCESSING
             UT. UTILITY MENU.
             ST. Setup Files



Operations

Options are selected by pressing the leftmost character in the
desired selection or by highlighting it with the cursor bar and
pressing enter.
DESCRIPTION

Although functions overlap, the MAINMENU may be segregated into
four areas:

                   SYSTEM FUNCTIONS
                   MASTER FILES
                   TRANSACTION PROCESSING
                   REPORTING

The SYSTEM FUNCTIONS are named so because of their broad and
general affect on the entire system.  They include:

     TB - Used to install beginning account balances, to enter
          Budget information, to perform account balance
          comparisons between periods and to display current and
          Year to date balances when desired.

     PE - End of Period processing assures all transactions were
          posted and the balanced sheet is balanced before
          current transactions are deleted. Also any valid
          Repeating entries are Posted to the GL transaction file
          for the new period after the current transactions files
          are archived.

     UT - Utility menu includes the Backup, Restore and Reindex
          commands.  The backup procedure copies the current data
          files to seperate areas.  Restore is used to transfer
          saved files back to hard disk.  Reindex is used to
          reorder the files and to remove unneeded space.  This
          menu also provides the means to activate the Practice
          System.

     ST - The install program is used to set up the system. 
          Entered here is a record for each company that includes
          company names to appear on reports and screen headings,
          passwords and access controls and other initialization
          data.

The MASTER TABLES are used to create and modify the validation
tables and the Chart of Accounts.  They include:

     GL - General Ledger chart of accounts module allows the
          addition, deletion and modification of account records.
          Also, records may be displayed based on ACCOUNT ranges,
          TYPEs and CLASSes.

     DT - Department master is used to manipulate and display the
          Department Master file.

The TRANSACTION PROCESSING section concerns the recording of
daily operational transactions such as, cash receipts, cash
disbursements, incoming bills, and journal entries. 


     ET - The General Ledger transaction module handles the
          recording of all transactions not recorded in the
          special journals (AP,AR and INV) such as cash receipts,
          jounal entries, prior period adjustments, etc.

     RE - Repeating entries are applied to the GL data file at
          the time of EP.  Validation is made against the chart
          of account to assure the account exists and hasn't been
          retired or marked closed.


The REPORT menu provides the ability to produce the necessary
financial statements at any desired point throughout the period. 
The balance sheet, income statement, and detailed trial balance
may be created for individual companies, for departments within a
company, or for the corporation as a whole.  Subsidiary schedules
and individual account transaction listings are provided.


     RP - The report menu includes:

            o  Balance sheets by dept, by company, and
               consolidated.
            o  Income statement by dept, by company, and
               consolidated.
            o  Account Query by account within a company,
               account/department combinations, and queries
               across company boundaries.  The queries may be
               printed or sent to the screen and may include
               searches through history files.
            o  Detailed balanced sheet, detailed trial balance,
               and  detailed income statement.


```
{% endraw %}

## COMMON.TXT

{% raw %}
```

                      QUE ACCOUNTING SYSTEM
                       USEFUL DOS COMMANDS




Command           Description

CTRL S            These two keys when pressed together will
                  pause the present activity.  It will stop
                  screen scrolling and halt the printer.  A
                  likely use would be  to change the printer's
                  paper when jammed.  Hitting CTRL S again will
                  resume activity.

CTRL ALT DEL      These three keys when hit together will
                  "reboot" the system.  Rebooting is similar to
                  turning the machine off and back on.  This is
                  a good command to try only when the computer
                  seems hung and no input is accepted from the
                  keyboard.

SHIFT PRTSC       These two keys allows us to print whatever is
                  on the screen.  It may be useful in recording
                  error messages or displaying data not readily 
                  available on reports.  For instance printing a 
                  single master file record.

CHKDSK /F         Used to check the memory  available for use 
                  and the amount of diskspace. The /F parameter
                  is used to rebuild bad file allocations.

FORMAT            Used to ready a diskette for copying during
                  the backup procedure.

                      QUE ACCOUNTING SYSTEM
                        USEFUL Keystrokes

Cursor Movement

The cursor, a flashing minus sign, may be moved through the use
of the four directional keys on the right hand side of the
keyboard.  The upper arrow is used to return back to the
preceding field.  The down arrow or the RETURN key are used to
move on to the next field.  The right and left arrows move the
cursor one space in the corresponding direction.

      Vendor PE     
      Invoice test12     
      Date    12/31/87

For instance, if the cursor was sitting on the eight of the date
field, hitting the up arrow twice would move it to the Vendor
field.  If I wanted to move it only to the beginning of date, I
would hit the left arrow 4 times, since the "/" are fixed and not
considered part of the data.

Any field where the last character entered fills up the display,
the computer will automatically assume the entry is finished and
will continue onto the next field.  In the case of most menu
selections, therefore, hitting return after a selection is not
necessary.

Screen Function Keys

While processing data on a data screen, certain key combination
can be used to facilitate the process. Intuitively, moving the
cursor key with the arrows, as described above and pressing the
DEL and INS keys will get the job done  and may be all that is
necessary. However, there are advantages to using the keystrokes
listed below:

  CTRL A          Moves the cursor a Word to the left.
  CTRL F          Moves the cursor a Word to the right.
  CTRL Home       Moves the cursor to the top of the screen.
  CTRL END        Moves the cursor to the bottom of the screen.
  CTRL T          Deletes the word to the right of the cursor.
  CTRL Y          Deletes from the cursor position to the end of
                  the field.
  CTRL U          Restore the current field to its original
                  value, as long as you did not exit the field. 
  CTRL U          Terminate the current process, saving all
                  changes made including the current field.
  ESC             Terminate current process, saving all changes 
                  but those made to the current field.

```
{% endraw %}

## CONVERSN.TXT

{% raw %}
```

                         QUE ACCOUNTING
                           CONVERSION

Version 2.0 was developed and tested on a 80386 based machine
using a 28 millisecond hard drive. The performance we found to be
quite impressive however, with the next upgrade, the machine will
be optimized for speed and tested on lower end machines using
8088 based chips.

The systems comes equipped with a conversion program that will
take the older version files and format them for use in Version
2.0. To execute this conversion type in

     MAINMENU C

Version 1.2 and older files will be saved under OLDQUE directory
on the current drive.


It is very important that the conversion be done during the
beginning of a new period, since transaction batches from the
older system cannot be referenced by the batch date and number.

These transactions however are accessible through those programs
accessing history files.


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

## FUNCKEY.TXT

{% raw %}
```


                         QUE ACCOUNTING
                    FUNCTION KEYS ASSIGNMENT



          Generally, the following keys are assigned
          within each module. 
 
 
               F1 - Help key to Help Database 

               F6  - Pop Up calculator

               F10 - Window to the Appropriate Master file 

               ESC - To abort out of a process or menu.
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

## GETSTART.TXT

{% raw %}
```

                            Chapter 2
                         GETTING STARTED 
                 


This section prepares the user for the system by highlighting the
file structures and system functions in a simple descriptive
overview illustrated by two dissimilar examples.

Overview

The QUE Accounting system can be structured in various ways
because of the freedom it allows in defining the General Ledger,
the Department file and the Company Master.  It can accommodate a
single company that uses a simple chart of accounts or a more
elaborate setup that uses subsidiary accounts and departments and
requires reporting for multiple companies, and departments within
companies. 

The following examples depict these extremes. 

     EXAMPLE - Company A The Corporation 
 
Company A is a corporation composed of two separate companies,
XYZ and ABC.  Each company has multiple departments which include
subsidiaries.  Likewise, the Chart of Accounts has both Group and
Subsidiary accounts.  The controller wishes to run a tight ship
and does so by reporting financials departmentally.

     EXAMPLE - Company B The Small Company 
 
Company B is a small company that is composed of two departments.
The departments represent a Warehouse and a Sales Office.  The
proprietor wishes to record expenses separately for these two
areas and is accomplishing this by recording transactions by the
department identifier (10 for Warehouse and 20 for Sales).  The
Chart of Accounts is a simple structure that uses no subsidiary
accounts.

Each company has been setup in the system according to its own
specific needs. 

 
There are six files used in the system Setup.  The SOURCE code,
SETUP and RANGE files come predefined but may be changed to
reflect your specific needs.  The files are inter-related and
should be setup in the sequence shown.



 Table           Description
 
 SYSTEM        stores a record for each Company in the
               corporation. Keeps track of company data such as
               current period, password and miscellaneous
               information

 RANGE         This file identifies the Account number ranges
               used for the different account classifications in
               the Chart of Accounts.  For example, 1000 - 1999
               are reserved for Assets, etc. *(Inventory range).

 GENERAL       The Chart of Accounts is responsible for account
 LEDGER        validations, transaction limits and controlling
               the printing of financial statements.
 
 DEPT          The Department Master records a record for each
               department in the system.
 
 TRIAL         The Trial Balance contains a record for each
 BALANCE       unique combination of Company, Department and
               Account.  It can be created as Departments and
               Accounts are being entered or by selecting the
               'REBUILD TRIAL BALANCE' option on The SU menu.

 SOURCE        The Source Code table is used to identify the
               batches entered in ET and to identify the default
               Debit and Credit Account numbers. 


The actual table layouts appear below as well as transaction
examples and a discussion on the implication of setup design on
reporting capabilities.

   SETUP
   TRANSACTION PROCCESSING
   REPORTING

SETUP TABLES

Both Companies use similar Range and Souce Code tables

a) Range Table

The three columns below represent the account type, starting and
ending account ranges from the table.

   A    1000    1999      Assets        * When interfacing with
   L    2000    2999      Liabilities     inventory, the Cost of
   C    3000    3999      Capital         Goods Sold field is
   R    4000    4999      Revenue         used to record the
   E    5000    5999      Expenses        reduction in inventory.


b) Source Code Table

The table below represent the three character source code,
followed by the default Debit and Credit account numbers.

   INV   1500  4100       Invoicing= Debit to Accounts Receivable
                          Credit to Sales  
   CSR   1100  1500       Cash receipts= Debit to Cash, Credit to
                          Accounts Receivable
   CSD   2010  1100       Cash Disbursements= Debit Accounts
                          Payable and Credit to Cash

The companies use different Chart of Accounts, Department file
and Setup files as illustrated in the following pages.

The Chart of Accounts shows the Account number, the account
class, the account type, the account group indicator and the
ending account range.

The Department file shows the Company code, the Department code,
the department group indicator and the ending department range.

The System file shows only the Company Code and the company name.

**  For the purposes of these illustrations, only selected
elements appear in these tables. Chapter 3 provides a detailed
description of each element in the tables aligned with the Setup
process.

Company A 
 

CHART OF ACCOUNTS
 
Acct Cls Type Group End     Description

1000  A   L    Y    1050    Group Cash Account 
1010  A   L    N    1010    Subsidiary cash account (Bank 1)
1020  A   L    N    1020    Subsidiary cash account(Bank 2)
1100  A   L    Y    1100    Inventory w/ no subs
1500  A   L    Y    1500    Equipment no sub accounts
2000  L   L    Y    2050    Group Payables
2010  L   L    N    2010    Accounts Payable sub account
2020  L   L    N    2020    Accounts Payable sub account    
4100  R   L    Y    4100    Revenue Account


DEPARTMENT FILE
 
Comp Dept Group End  

ABC  10    Y    19 
ABC  11    N    11 
ABC  12    N    12 
ABC  13    N    13 
ABC  20    Y    20 
XYZ  10    Y    19 
XYZ  20    Y    20 


SETUP TABLE

Comp  Name

ABC   ABC Company 
XYZ   XYZ Company

 
The Trial Balance is a result of each unique Company, account and
Department combination entered into the system. The Current and
Year To Date figures are included in the example to illustrate
the update process.

Both companies are starting out with clean balance sheets.

TRIAL BALANCE  (only ABC is shown)
 
Cmp Acct Dept Current  YTDbal

ABC 1000 10    0.00    0.00    ABC 2010 10-1000.00   0.00 
ABC 1000 11    0.00    0.00    ABC 2010 11    0.00   0.00 
ABC 1000 12    0.00    0.00    ABC 2010 12    0.00   0.00 
ABC 1000 13    0.00    0.00    ABC 2010 13    0.00   0.00 
ABC 1010 10    0.00    0.00    ABC 2020 10    0.00   0.00 
ABC 1010 11    0.00    0.00    ABC 2020 11    0.00   0.00 
ABC 1010 12    0.00    0.00    ABC 2020 12    0.00   0.00 
ABC 1010 13    0.00    0.00    ABC 2020 13    0.00   0.00 
ABC 1010 20    0.00    0.00 
ABC 1020 10    0.00    0.00 
ABC 1020 11    0.00    0.00 
ABC 1020 12    0.00    0.00 
ABC 1020 13    0.00    0.00 
ABC 1020 20    0.00    0.00 
ABC 1100 10    0.00    0.00 
ABC 1100 11  300.00    0.00 
ABC 1100 12  300.00    0.00 
ABC 1100 13  400.00    0.00 
ABC 1500 10    0.00    0.00 
ABC 1500 11    0.00    0.00 
ABC 1500 12    0.00    0.00 
ABC 1500 13    0.00    0.00 
ABC 2000 10 1000.00    0.00 
ABC 2000 11    0.00    0.00 
ABC 2000 12    0.00    0.00 
ABC 2000 13    0.00    0.00 


 The dollar amounts represent balances of transactions occurring
in the current period. These transactions may come from one of
the input modules, ET, Accounts Payable, Accounts Receivable,
Payroll or directly changed through the Change Trial Balance
function of the TB module.
 Company B

CHART OF ACCOUNTS
 
Acct Cls Type Group End      Description

1000  A   L    Y    1000   Cash
1100  A   L    Y    1100   Office Furniture
1500  A   L    Y    1500   Equipment
2010  L   L    Y    2010   Accounts payable
4100  R   L    Y    4100   Revenue

DEPARTMENT FILE
 
Comp Dept Group End

BBB  10    Y    10  
BBB  20    Y    20 

SETUP FILE

Comp  Name

BBB   BBB Company


TRIAL BALANCE    Company B 

Cmp Acct Dept Current  YTDbal 

BBB 1000 10   0.00   0.00 
BBB 1000 20   0.00   0.00 
BBB 1100 10   0.00   0.00 
BBB 1100 20   0.00   0.00 
BBB 1500 10   0.00   0.00 
BBB 1500 20   0.00   0.00 
BBB 2000 10   0.00   0.00 
BBB 2000 20   0.00   0.00 

 Comparisons


Company B books are less extensive than Company A. As depicted
there is a direct relationship between the number of accounts,
companies and departments entered and the number of entries in
the Trial balance.  At any time through the course of the year,
department and account records may be added at will and without
affecting any existing balances. Likewise, Departments and
Accounts may be deleted as long as there are no transaction
balances, current or Year to Date.
 
TRANSACTION PROCESSING 


As transactions are entered, deleted, and modified through one of
the update modules (ET, AR and AP), and the Trial Balance is
updated simultaneously. For example, Company A wishes to
distribute inventory just purchased on credit to the three
subsidiary departments in Company ABC.  Since Account Payable is
recorded at the Group level, the transaction would be entered in
ET as:


          Company   Account   Department     Amount

            ABC      2010        10        -1000.00 
            ABC      1100        11          300.00 
            ABC      1100        12          300.00 
            ABC      1100        13          400.00 
 

A similar transaction for Company B would yield like results. But
instead of recording the credit (Accounts Payable) for one
department, the expense of purchasing office furniture is divided
equally between the two departments receiving the goods.


          Company   Account   Department     Amount

            BBB      2010        10        -1000.00 
            BBB      1100        11          300.00 
            BBB      1100        12          300.00 
            BBB      1100        13          400.00 

  
The appropriate adjustments to the Trial balance are shown. 
Note both sets of transactions constitute a balanced accounting
entry and that the adjustments made to the Trial Balance keep the
books in balance.
 
REPORTING 


Detailed transactions reports can be printed through the
Transaction Register function in each of the input entry
processes. Ranges on accounts and dates may be specified as well
as specifying certain source codes.

The Transaction Register is used to produce standard registers
such as Cash Receipts, Cash Disbursements, and Sales jounals.

Since the financial statements access the Trial Balance directly,
all balances will encompass all  entries in the Transaction
files. The financial statements may be ran as often as needed
without any restrictions to the contrary. As new transactions are
added to the transaction files, changed or deleted, the Trial
Balance is affected, accordingly. A value set in the SYSTEM file
for each company keeps track of changes to the Trial Balance and
forces the print of certain financial statements before the
period may be closed.

To access transactions which reside in multiple modules such as
Accounts Payable and Accounts Receivable, the Detailed Trial
Balance or Report Writer modules may be used. If a specific
account is the target, the Account Query function provides a
listing of all transaction for that account number for Current or
History files.

Company A has more reporting options since it has more accounts,
companies and department entries. Financial statements may be
produced for an individual department, a group department  an
entire company or for the entire corporation.

Company B has less options. Reports can be produced for the
entire company as a whole or for one of the individual
departments.              Chapter 3 
                             Setup 
       

The Setup section covers the setup process, that is necessary
before the system may be used in a 'live' mode. If you are
uncomfortable at this time or at any time throughout the process,
you may end the session and continue later without any
interruptions to the system. All the information entered will be
intact as you left it. For a overview of how the system is used
we strongly suggest using the Practice system that is installed
with the system. 

Practice System

To start the system enter 'ZZZ' for the Company and TEST for the
password.  As you will notice, all files in the production system
are blank except for the ZZZ Company record.

To install the Practice System go to the UT menu and select
'START PRACTICE' from the menu.  

SETUP Files
 
The files used in the system Setup are listed below.  The SOURCE
code, SETUP and RANGE files come predefined but may be changed to
reflect your specific needs.  The files are inter-related and
should be setup in the sequence shown.

 Table           Description
 
 SETUP         stores a record for each Company in the
               corporation. Keeps track of company data such as
               current period, password and miscellaneous
               information
 RANGE         This file identifies the Account number ranges
               used for the different account classifications in
               the Chart of Accounts.  For example, 1000 - 1999
               is reserved for assets.
 GENERAL       The Chart of Accounts is responsible for account
 LEDGER        validations, transaction limits and controlling
               the printing of financial statements.
 DEPT          The Department Master records a record for each
               department in the system.
 TRIAL         The Trial Balance contains a record for each
 BALANCE       unique combination of Company, Department and
               Account.  It can be created as Departments and
               Accounts are being entered or by selecting the
               'REBUILD TRIAL BALANCE' option on The SU menu.
 SOURCE        The Source Code table is used to identify the
               batches entered in ET and to identify the default
               Debit and Credit Account numbers. 

 System Table


      Field             Field Description

     Period         Ending date of the current period
     Password       The password used to log in to the package. 
     Company        3 character alphabetical mnemonic for the
                    company. 
     Report Flag    Identifies which required financial
                    statements have been executed during the
                    current period.  No entry needed.
     Balance?       Tells whether or not the Balance Sheet is
                    balanced for that company.  No entry needed.
     Number         The number of periods in fiscal year. 
     Current        The value of the current period. 
     Screen         The title to appear on the screen.
     Report         The title to appear on the reports.
     Retained Earnings   The Retained earnings account number. 
                         Imperative for proper Balance Sheet
                         operations.
     Printer Control     80 or 132 columns printer identifier. 
                         Use the condense print sequence for 80
                         col printers. 
     Restore Check       Used to alert system of incomplete
                         updates.  Set by system ET process.
     Auto Restore        Tells system whether or not to do
                         automatic restore during signon. Also is
                         used to signify automatic backup during
                         logoff.
     Restore Password    Password to be able to do restores.
     Change/Delete Access  Field signifies whether or not
                           changes can be made to transactions.
     Trial Balance Access  Field signifies whther or not
                           access is granted to Trial Balance
                           Change mode and Budget Entries
     Override Password     Password used to enter the ST Setup
                           function which allows the setting
                           of passwords and access control.
     Report Writer Password  Password to guard access to Report
                             Writer option.
     General Ledger Access   Controls access to update functions
                             to the Chart of Accounts
     Accts Receivable Dir    The directory where AR resides *
     Accts Payable Directory The directory where AP resides *  
     Payroll Directory       The directory where Payroll resides.


 * Only used in case the QUE Accounting modules are used in an
integrated fashion.

Range Table


     Class     The accounting classification.  (A-Assets,
               L-Liabilities, R-Revenue, E-expense, C-Capital) In
               case the Inventory Module is installed, it is used
               also to identify the range of Inventory.
     Start     The first account in range. 
     End       The last account in range. 

     Cost of   The Account number form the Chart of Accounts used
     Goods     to record the offsetting entry to an inventory
               reduction

Source Code


     Code           The 3 character code to represent transaction 
     Description    Description
     Default Debit  The debit account normally associated with 
                    this transaction type.
     Default Credit The credit account normally associated with
                    this transaction type.
Chart of Accounts
 
     Account        Account number
     Class          Account Classification such as A for Assets,
                    etc.
     Type           Identifies Type of account such as L for pos- 
                    table. 
     Group          Group indicator to identify group accounts 
     End            Identifies the last possible account in the 
                    group. 
     Closed         Closed indicator
     Retire         Retirement date for assets
    
Department

     Comp           Three Character company identifier. 
     Department     Two digit identifier. Comp+Dept must 
                    be unique to the file. 
     Group          Group indicator
     End            Identifies the last possible Dept in that
                    group

The Source Code table and the Range table are modified through
the ST function off of the main menu. The Chart of Accounts and
Department master files are changed through their own functions.

For a more detailed description of the elements composing the
Chart of Accounts and Department Master, please consult the
operational manual.

Table Design

The focal point of the Accounting System is composed of the
structure set up in the General Ledger and Department Master. 
The Trial Balance is a conglomeration of this structure.  When
designing your system, it is advisable to sketch your Chart of
Account (GL) and Departments out on paper before entering them
into the computer.  Make sure to plan for future growth if you
expect to add some accounts between existing numbers.  For
example:

         Before                     After Addition 
 
   1000 Cash                    1000 Cash 
   1100 CDs at First Pennsy.    1100 CDs at First Pennsy 
   1200 Accounts Receivable     1110 CDs at Mellon 
   1300 Inventory               1200 Accounts Receivable 
                                1300 Inventory 

Accounting principle
 
QUE Accounting System follows a standard double entry accounting
system.  The system assumes no default values for accounts and
therefore requires the keyer to use the proper signs (+ and -)
for debits and credits.  Please consult Chapter 1 if you are
unsure of the accounting terms of debits and credits.

                     To increase         To decrease 
 
 Assets           use positive numbers  use negative values
 Liabilities      use negatives         use positive
 Capital          use negatives         use positive
 Revenue          use negatives         use positive
 Expense          use positive          use negatives

Group Accounts and Departments

Group accounts appear on as single line items on the financial
statements while any subsidiary account appears in a detailed
schedule printed as optioned at the end of an Income statement or
Balance sheet.

Group accounts facilitate reporting while providing detail if
needed. Larger firms with many accounts might want to use group
account to assure their financial statemenst are unclutterred.

Group departments are similar in that financial statements
printed for group departments will include all amounts for the
subsidiary departments. However unlike accounts, a single
subsidiary department balance sheet and income statement can be
produced.

User Defined Reporting


The TYPE categories in the Chart of Accounts allows you to define
your own sub totaling, report headings and page breaking on the
financial statements.

The Transaction Registers allow selection of date and account
ranges thereby providing reports for a wide range of data.

The Query and Report Writer provides the most flexibilty in
producing reports. It allows you to combine information from
several files and to determine  conditional selection, much like
the range selection of Transaction Registers. The order of fields
to appear on the report as well as the sorting sequence and
subtotaling may be defined as well. Queries may be saved for
future reference.
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
                         QUE ACCOUNTING
                          Installation

For the system to function properly, it must be installed on a
hard drive.  The specific requirements are listed below.  Note
some adjustments may be required of DOS configuration files.

HARDWARE

QUE requires : 
  - 640K MEMORY 
  - 1,000,000 BYTES FREE on hard disk * 
  - a floppy drive used for installation 

SOFTWARE 

  - CONFIG.SYS - needs to have FILES=25 and a BUFFERS=16 
  - Must be installed on C or D drive. To install to other 
    drives the knowledgeable person can change the INSTALL bat 
    files. 

The directory structure created during installation is the value
entered at the command: 
 
     eg A:INSTALL QUEACC

       where QUEACC is the name of the directory to be created
 
In case this directory is already used for another application,
no files or programs will be overwritten and no harm should come
to that system.  However removing the other system to a separate
directory, is advised.

PROCEDURE

The system comes with 1 diskette. To install the system insert
the diskette into  drive A and type in 

        C> A:INSTALL QUEACC 
 
To install from another drive(example B), change the INSTALL.BAT
file to read B: in all places where A: is found or type in the
following commands:

        C> MD QUEACC
        C> CD QUEACC
        C> B:PKUNZIP -O B:QUEACC

The documentation may be viewed on line or printed out by typeing
the following command. Note the manual is segregated into several
sections following the Main Menu structure.

        PRINTDOC 

You are now ready to start. Please do the following: 

        C: 
        CD\ 
        C> CD QUEACC
        C> MAINMENU 

Enter "AAA" for COMPANY and "test" for PASSWORD and then go to
the UT Menu and select the REINDEX option in order to create the
index files. If you don't do this step, the system will not work. 


```
{% endraw %}

## PASSECT.TXT

{% raw %}
```

                         Que Accounting
                      Password and Security


The passwords and access flags are stored in the company record.
There are three passwords in the system:

 1) logon access
 2) override password
 3) report writer password.

Each controls access to the system and/or a particular function.
The override password controls access to the company setup file.
Once into the Setup record, access to the General Ledger, the
Trial Balance balances and budget amounts are controlled by the 
access control flags.


Data integrity

  Restore Flag                     The two restore flags work in
  Automatic Online Restore         unison to assure data
                                   integrity. The Restore flag
                                   is the indicator showing 
                                   when a power failure occurred
                                   during transaction entry. The
                                   second flag is used to tell
                                   the computer to do an
                                   automatic backup if it occurs.
                                   Otherwise a warning message
                                   is displayed during the next
                                   sign-on.

Two level password protection

  Company Logon                    The Company Logon controls
                                   access to the system while
  Override password                the override controls access
                                   to the ST Setup function. 

Access Control

  Change and Delete transactions   These access flags may be set
  Change Trial Balance and Budget  in the Setup option. They
   entries                         control access to various
  General Ledger access permission segments of the system.
  Report Writer permission


```
{% endraw %}

## PRODESC.TXT

{% raw %}
```
              
                           QUE ACCOUNTING
                       PRODUCT ANNOUNCEMENTS
                             MAY 1990


QUE Accounting General Ledger           --------------  $45.00


    The General Ledger is the foundation on which all the other
    accounting modules are based. It is a double entry system that
    boasts a powerful and flexible Chart of Accounts that allows
    group and subsidiary account definitions and recording of
    transactions by departments within individual companies.

    The reporting functions include user-defined financial
    statements that may be produced for a single company or
    several companies, as in a consolidation. A complete set of
    transaction registers with a broad range of selection criteria
    and a full feature Query and Report Writer are also included.


QUE Accounting Accounts Payable         --------------  $45.00


    Comes complete with a vendor master and a separate
    transaction file. Invoices may be entered with an unlimited
    number of detail lines which may be used to distribute
    charges to several departments and to record expenses and 
    replenish inventory.

    No invoice is added or changed without balancing the invoice
    amount with the detail entries.

    Invoices may be partially paid and adjusted with credit and
    debit memo transactions.

    The flexible Transaction Register provides various reports and
    journals, such as Payment registers, Vendor balances, and
    several ad hoc reports:

      1)  by account number and date ranges
      2)  show vendor balances by product code
      3)  vendor balances exceeding a certain value
      4)  more...

    An Aging report provides a chronological breakdown of
    outstanding bills. 

    Discounts may be expressed as percentages or dollar values and
    are calculated based on the payment date entered.
   
    Mail merge capabilities.
  
QUE Accounting Payroll                  --------------- $45.00


    This 'after the fact' system records labor expenses, federal
    and state income taxes, FICA, and any other deductions
    normally associated with payroll.

    The General Ledger trial balance is updated as data is added,
    deleted or modified for each employee.

    History files can be used to study trends, determine expenses
    by job class, localities, etc..

    An interface with the QUE Accounting Time and Attendance
    system is available.


QUE Accounting Accounts Receivable      --------------  $45.00

   Similar in concept to the Accounts Payable module, this
   function provides similar type reports and has the same
   control features.

   Invoices may be printed on user-defined criteria.

   Client Statements may be printed in various sequences.

   Client records record credit limit, year to date balances,   
   payment terms and other pertinent and active information.


* The integrated accounting series of programs include the
previous four modules (GL,AP,AR,PR) and may be purchased as one
integrated system for $149.00.




QUE Accounting Time and Attendance      -------------- $195.00 *


   Time and Attendance is used to keep track of employee time
   punches and to validate entries against user-defined tables
   and employee schedules. Time tracking includes vacation,
   holidays, personal time and other user-defined categories.

   May be used with or without an electronic time clock. Punches
   can be recorded for specific job codes or departments for
   job costing purposes.

   Employees can be grouped by like workrules, such as, shift
   differentials, break and lunch durations, grace periods for
   time punches, overtime calculations, etc..

   Benefits include increased accuracy and reduced clerical
   expenses in determining gross pay, on demand reporting, and
   historical data to be used in forecasting future budgets.




QUE Accounting Personal Information Manager   --------  $45.00

    The Personal Information Manager system provides the ability
    to access information based on a range of values using simple 
    'english like' phrases, such as;  ( State='PA' .and.
    Amount>1000.or. Name='SMITH'). The query statements can be
    saved for future recall.

    The selected subset of information is either printed or
    displayed in the order of the fields selected and in the
    sequence desired.  The display mode allows full update
    capabilities of deleting, adding and modifying records.

    The system allows for the creation and design of your own file
    structures and the import/export of information into and out
    of these files to interface with other systems such as
    speadsheets, database products, and word processors.

    Also included are several nice utilities. A mini word
    processor that includes 'block' commands and mail merge
    features, an appointment calendar and a pop-up calculator
    make this a complete system that can be used to track any
    information desired.

CUSTOMIZATION

    Most encouraged!
    Most software purchased 'off the shelf' or 'as is' never does
100 % of what is needed. However, some demands such as an
additonal report or to have additional space added to an invoice
detail line can be a simple and inexpensive solution.  Optimally,
enhancements to software is best done by the same team as those
who have developed the software.

    Customization of systems based around the 'core' products
listed in this brochure is most cost effective. Actual costs are
almost always much cheaper than complete customized systems and
are frequently within the range of higher priced PC accounting
packages.

    Customization may be applied to existing systems or new
development. 

TRAINING

     QUE Accounting performs in house training on:

       1) introduction to computers
       2) DBASE Beginners
       3) DBASE Intermediate / Advanced

    (also includes other DBASE dialects such as Clipper and
     FOXPRO, and FOXBASE)  


Prices for customization and training are done on an individual
contract basis.
 
```
{% endraw %}

## QUEACCT.TXT

{% raw %}
```

              
                          Introduction 
              

     The QUE Accounting series of programs has been developed
over the years with much input from the user community. Many of
the features included in Version 2.0 are based on the results    
from a graduate study of PC based accounting systems and    
direct inquiry from the users of earlier versions of QUE
Accounting. We are confident our system offers a number of
advantages over other PC accounting packages.

     It is easy to understand and use

provides on-line help and a completely functional practice system
that may be started and stopped at will without affecting 'live'
data

     It is flexible and will grow with you

much thought has been placed in the design to allow the system to
adapt to your organization and not vice-versa

     It is inexpensive

packages with these capabilities are often priced many times the
QUE Accounting list price.

     Supported by professionals

developed by accounting and data processing professionals   

     Customization

because the system is entirely developed by QUE Accounting,
changes and enhancements are inexpensive  


About this manual

This manual is meant to be both an introduction into computerized
accounting system and a detailed description of the QUE
Accounting system. As you progress through the pages, you'll find
many screen displays that may be viewed on the computer. 

The manual has an introduction to accounting and some
illustrations but does not pretend to be an accounting text book.
Accordingly, some skills on how to use a computer is assumed.
There are many excellent books on both subjects that may be
obtained from your local library or bookstore to supplement the
material presented here.

Conventions used in this manual


 Bold                    highlight functions
 Underlined              highlight field names on screens
 Capital letters         highlight field names in files
 Shadowed Box outlines   screen displays 



How this book is organized


 This book is organized into several chapters. Users familiar
with accounting systems and computers may go directly to the
operational manual starting with Chapter 4.

 Chapter 1 gives a brief description of accounting fundamentals
and illustrates how computers are used in the automation of the
accounting process and what additional benefits are derived.

 Chapter 2 gets more specific with accounting transactions and
outlines how two dissimilar corporations may use the QUE
Accounting system. An example of the Chart of Accounts and common
accounting transactions are illustrated for both.

 Chapter 3 covers the preplanning process and details how the QUE
Accounting system is setup to be used.

 Chapter 4 begins the operation manual starting with the sigon-on
screen and continuing through the Utility Menu.

 Chapter 5 describes how to use the report writer, the pop-up
calculator and the mini word processor.

 The Appendix includes miscellaneous information such as help
text on cursor control and function keys, report examples and
installation instructions.
 


                            Chapter 1
                        Accounting Basics 
                   


 Control and operations

 Accounting is used to measure how your business is doing. It is
the process of recording sales and expenses and groups that
information into meaningful data to be used in determining the
financial well-being of your firm.

 Accounting weaves its way into everyday activity. When a
salesman is on the road  he has expenses that must be recorded.
Just as the office person receives a paycheck or a check is
written to acquire office furniture, all these activities
constitute an accounting transaction. The accounting transaction
records the fundamental operation used in determining how to
better control costs and thereby increase the 'bottom line'.

 The importance of controlling costs may mean the difference
between profit and loss. With proper accounting practices,
expenses can be easily tracked to departments and or individuals
highlighting problem areas. Perhaps your sales force is spending
too much time on the road or your advertising budget is out of
kilter with revenues. With a good accounting system, these areas
can be easily detected.

 In recording daily activity such as sales, petty cash
disbursements, material expenses and the like, a good accounting
system should facilitate the transaction entry process and
provide a good tracking mechanism. Perhaps certain recurring
expenses such as rent could be automatically posted to the trial
balance monthly while various edits may be put into place to
avoid errant data entry. Limit checking by account, date and
account number validations, batch control to assure proper book
balancing, are just some of the features used to help control
costs and facilitate data entry.

 Depending on the size and needs of your organization, you may
need more or less in automation. A basic General Ledger system
may be just fine for a company with a few transactions monthly,
while larger firms need more control and automation through
integration with Accounts Receivable, Accounts Payables, Payroll
and Inventory modules.

 Reporting and Planning

 Once the information is in the computer you need to get it out
into a meaningful format. The reporting needs of an automated
system should meet requirements for reporting on a range or
subset of information; for the entire corporation or for honing
in on a given department.  A report writer and parameter driven
reports are vital extensions to a system that has needs for
reporting on any imaginable grouping of information. Whatever
your needs the reports produced should include at the minimum, an
income statement, a balance sheet and detailed ledgers to back
these vital reports.

 Reports highlight the company's performance. The sooner these
reports can be produced the sooner management is aware of
problems. Systems providing dynamic transaction updating are
necessary in providing on-demand, real-time reporting. In other
words, to produce reports as frequently as desired, all
information entered into the computer should be accessible to all
reporting mechanisms. Systems with separate posting requirements
do not easily provide this opportunity.

 Reporting needs also facilitate the reporting requirements for
outside concerns such as your CPA firm and federal and state
authorities.

 The planning process starts with the evaluation of past
performance. With the reports provided from the accounting system
performance can be evaluated for specific profit and cost centers
thus aiding in the determination of future budgetary needs.
Moreso, with a good foundation of information your company is
better positioned to determine and attain realistic goals.

 Fundamentals

 Accounts, Transactions and Summarization

 The basic building block of the accounting system is an Account.
The chart of Accounts or General Ledger is a list of all accounts
used in the system. Accounts can be viewed as buckets or storage
areas for information. If for instance your are writing a check
against a certain bank account then that checking account could
be assigned an account number to represent it, or one account
number could be used to represent all bank accounts. The level of
detail is up to you. The more account numbers used the more
detail in the ledger and the finer the reporting possibilities.

 The transaction is the recording of an event against an account.
It is the mechanism used to increase or decrease an account's
balance. For instance you purchase computer supplies from the
local computer store, you need to record the reduction in cash
and the increase of computer supply inventory. The transaction
may appear as:

   Computer supplies  100.00
   Cash              -100.00

 The two parts of this transaction constitute one 'double entry'
accounting transaction. A double entry always nets to zero. For
every positive fiqure there must be an equal amount of negatives
and vice-versa. The positive amounts are referred to debits and
the negatives as credits. Depending on the type of account,
debits and credits either increase or decrease an accounts
balance.

 Account types are used to group accounts in like categories. The
five major groupings are assets, liabilities, capital, revenue
and expense.

 Assets are resources your company uses to generate revenues. In
the example above, both Cash and Computer Supplies are used to
keep the company going. A truck used to pick up the supplies and
an office building where office staff are working are also
contributing to the company's on-going existance and are assets
but of a more permanent nature. Assets, like all the account
types, can be broken down further into sub groupings (such as
Current Assets, Buildings and Equipment). Assets are increased
with positive (debits) amounts and decreased with negatives
(credits).

 Liabilities, on the other hand, are claims against your
companies assets. When you purchase supplies on credit that
creditor has a claim against you company as recorded in a
liability account. Liabilities like assets can be of a short-term
or long term nature. Vendor invoices, accrued salaries, and
outstanding bank loans all represent liabilities.  Liabilities
are increased with negative amounts.

 Capital accounts represent the net worth of a company. If you
have more assets than liabilities you are said to have postive
net worth. This can be seen when assets (positive) are greater
than liabilities (negatives) a positive value remains. When
liabilities exceed assets, the company has negative net worth and
an unfavorable position.  Capital accounts are treated like
liabilities in that they are increased with negative values and
decreased with positives.

 Revenue accounts record incoming funds from the sales of
products and services. The offsetting entry may be to cash and/or
Accounts Receivable in the case where clients pay by credit.

 Expense accounts are the day to day costs of operation. Office
salaries, computer supplies, rent, utilities are all examples of
costs that must be paid to keep a business going. 

 Accounts are grouped and summarized into standard
classifications and reports used to compare your company's
performance either to past performances and/or other firms in
your industry.


 Financial Statements

 The Asset, Liability and Capital accounts make up the company's
Balance Sheet. The Balance sheet is a snapshot of your company's
well-being. It always lists Assets first followed by  Liabilities
and Capital. The equation used to represent the Balance Sheet is

 Assets=Liabilities+Capital

 The Revenue and Expense accounts make up the Income Statement.
Perhaps the single most important piece of information on your
company's performance is the amount of profitability for a period
of time. When Revenue exceeds expenses you are said to have a
profit. This profit increases your company's net worth and value.
When Expenses exceed Revenues, the amount reduces the company's
value. Considerable losses over a period of time will deteriorate
a company's balance sheet and may result in bankruptcy.

 Profit(loss)=Revenue-Expenses

 Automation with QUE Accounting


 Automating with QUE Accounting is easy and perhaps one of the
most valuable investments you can make. When forethought is
placed upfront in understanding the QUE system and designing the
company's Chart of Accounts, Company amd Department master files
an invaluable understanding of your company may result. Effective
application of the system may save thousands in manual processing
costs, the time tracking down errors and accounting fees.

     increased efficiency

 avoid costly billing errors, bookkeeping time, and tying up
valuable resources in manually recording transactions, writing
checks and determining balances owed and due.

     flexibility

 expanding reporting needs is as simple as adding new accounts,
departments and/or companies

     more information analysis

 timely reports are available that were before cost prohibitive.
History files are easily accessible to produce trend analysis,
and vendor history may be used to help bargain for vendor
discounts by showing volumes purchased.








 
 
```
{% endraw %}

## TABLECON.TXT

{% raw %}
```
                                
                         QUE ACCOUNTING
                         SYSTEM CONTENTS

                                                             Page

I.     Introduction                                           A
       A.    About this manual
       B.    Conventions used in the manual
       C.    How this manual is organized      

II.    Chapter I Accounting Basics
       A.    Control and Operations
       B.    Reporting and Planning
       C.    Fundamentals
       D.    Automation with QUE Accounting

III.   Chapter 2 Getting Started                              A 4
       A.    Overview
       B.    Setup                                            A 4
       C.    Transaction Processing                           A 7
       D.    Reporting

IV.    Chapter 3 Setup
       A.    Setup file
       B.    Table Design
       C.    Group Accounts and Departments
       D.    User Defined Reports

V.     Chapter 4 Operations Manual                             A 
       A. System Overview                                      A 
       B. ET Enter Transactions                                A 
       C. RE Repeating Entries                                 A 
       D. GL General Ledger                                    A 
       E. DT Department Master                                 A 
       F. TB Trial Balance and Comparisons                     A 
       G. RP Financial Statements                              A 
       H. PE End of Period                                     A 
       I. UT Utility Menu                                      A 

VI.    Chapter 5  Other Functions
       A. Query and Report Writer
       B. Notepad
       C. Calculator 

APPENDIX
       A. Useful DOS Commands                                  A 
       B. Function Key Assignment                              A 
       C. System features
       D. System Installation
       E. Report Examples
       F. Windowed Screen
       G. Conversion from older versions
    
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2495

     Volume in drive A has no label
     Directory of A:\

    QUEACC   ZIP    288377   5-11-91   1:14p
    INSTALL  TXT      1956   7-09-90   1:29p
    PKUNZIP  EXE     22022  10-01-89   1:02a
    INSTALL  BAT       166   3-30-91   2:48p
    GO       BAT        39   6-14-91   1:28a
    FILE2495 TXT      3553   6-14-91   2:47p
            6 file(s)     316113 bytes
                            3072 bytes free
