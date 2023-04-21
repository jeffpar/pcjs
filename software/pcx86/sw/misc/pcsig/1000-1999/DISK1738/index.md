---
layout: page
title: "PC-SIG Diskette Library (Disk #1738)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1738/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1738"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POWER DESK"

    Gentlemen, and Ladies, start your engines -- because now you've got
    POWER DESK. This is the desk utility that turns a computer klutz into
    a power user and lets almost anyone else sail through the daily grind
    with confidence.
    
    Do you need a great address filer with mail merge? POWER DESK's got
    it. Would you like a word processor with a spell-checker, letterhead
    and envelope printer, label maker, calendar, scheduler, reminder,
    automatic phone log, expense log, and file handling capabilities that
    rival many hard disk utilities? That's POWER DESK, too.
    
    Not only does POWER DESK rev up and run, it handles like a much more
    expensive model. Drop-down menus give you well-ordered options, and
    every situation is covered by clear instructions available through the
    F1 help button. Back out of any situation with the Escape key.
    
    Whether you use POWER DESK as a complete desk organizer, for personal
    time management, or just take advantage of its excellent address/mail
    merge abilities, POWER DESK is going to take you as far as you want to
    go.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HELP.TXT

{% raw %}
```
Turn Printer on, check paper, press any key to begin.  Press <R> to Restart a   print run that has been interrupted, <ESC>ape to return to Main Menu.           Enter eight character file name.  If file is on another drive, enter Drive:File-name.extension.  Enter <?> for Directory. Press <ESC>ape to return to Main Menu.Enter the printer column you wish address to print in.  Default is column 40,   about the middle of a legal-size envelope.  Press <ESC>ape to return.           Enter the beginning Zip Code and the Ending Zip Code (inclusive) of the Records you wish to select.  Leave blank if you wish all Zip Codes.                     Enter the Beginning Expiration Date and the Ending Expiration Date (inclusive)  of the Records you wish to select. Leave blank if you wish any Expiration Date. Enter the word or words that each Record MUST have in its Notes Field to be     included in this Selection. Leave blank if not being used as a selector.        Entern the Record Type(s) you wish to have included in the selection. Enter eachas THREE DIGITS, separated by commas. Leave blank if not being used.            If you wish ALL names in your database, enter <A>. If you have previously       MARKed records with a selection, enter <M>. Press <ESC>ape to return.           Press First Letter to activate your choice. Press <ESC>ape to return to Main    Menu.  Use UP CURSOR to enter the Record for Editing.                           This function will delete a name and address record.  Enter "Y" if you wish to  proceed, "N" to cancel.                                                         DISPLAY ADDRESSES permits you to search and Display by Name, Company, Zip Code, Record Type, or Expiration Date. Press "D" or <ENTER> to start.                 ENTER ADDRESSES permits you to insert a new name in the database.  Press "E" or <ENTER> to start, <ESC>ape to return.                                           MARK ADDRESSES permits you to select certain Names based on Record Types, Dates,Zip Code Range, or Notes Field.  A Mark File will contain the names MARKED.     UNMARK ADDRESSES will immediately erase and re-set those names MARKED earlier.  Use this function to clear the Mark File before doing a new selection.          GLOBAL MARKED permits you to SHOW MARKED NAMES, CHANGE ALL MARKED names, or     DELETE ALL MARKED names.  Press "G" or <ENTER> for Sub-Menu, <ESC>ape to Return.This function will check ALL addresses in ALL Zip codes for Duplicates and      display near-duplicates for your determination or deletion. Press "C" or ENTER. Move cursor right, left, up, down to select a filename. Press <ENTER> to select.Move cursor to action desired, press enter. <ESC>ape returns to Directory.      Move cursor up, down,right, left to select filename.  Press enter to select a   file.                                                                           Enter the Drive destination of the disk to be formatted.  Do not use colon.     POWER DESK will not format Drive C. Press <ESC>ape to return.                   Enter the time as Military time, i.e. 20:30 equals 8:30pm.  Enter as HH:MM,     four digits seperated by a colon.                                               MAIL MERGE permits you to merge letters you have written on the Word Processor  with Names from the database for a complete document. Press "M" or <ENTER>.     ENVELOPES allow you to print envelopes with or without Return Address using the names from your database.  Press "E" or <ENTER>.                                LABELS will print names and addresses in a 5-line, one across format on 1-inch  labels.  Press "L" or <ENTER>.                                                  CUSTOM REPORTS use Templates to print the database names and addresses in the   format you specify. Press "C" or <ENTER>.                                       PHONE DIRECTORY will print ALL or MARKED names in an alphabetized Telephone     Directory using one of two formats.  Press "P" to start, <ESC>ape to return.    Additional Commands are: A= ASCII Table, SQ= Square Root of Total; H= Hex of    Total; B= Binary of Total; O= Octal of Total; D5 sets to five decimal places.   Specify if your printer is equipped with <C>ontinuous Forms or if you are using <S>ingle sheets and must stop between sheets.                                   <P>rint Letterhead will add your Company Name, Address, and Phone Number to the top of the letter, centered and in emphasized print. <O>mit will skip.          <P>rint Return Address will add your Company, Street, City, State and Zip in    Column One of the Envelope and space seven spaces for the Outgoing Address.     SHOW MARKED will display all MARKed Records. CHANGE ALL will prompt for changes.DELETE ALL MARKED will immediately Delete all MARKed Records.                   WORD PROCESSOR is a full-featured word processor with Spell Checker/Corrector.  Press "W" or <ENTER>.                                                           SCHEDULER/CALENDAR is a perpetual Calendar with Reminders and TO DO list.       Press "S" or <ENTER>.                                                           CALCULATOR is a full-function calculator with Displayed Memory, Decimal Place   settings, Octal, Hex, and Binary Displays. Press "C" or <ENTER>.                LOG IN/OUT is a Timekeeper module which permits logging Client Billing Time,    Expenses, and Phone Logs.  Press "L" or <ENTER>.                                DATE/TIME CHANGE will prompt for input of the current Date and Time and re-set  the system information.  Press "D" or <ENTER>.                                  TIMER/ ALARM will prompt for a time to be reminded and a message. Alarm works   only while in POWER DESK.  Press "T" or <ENTER>.                                This feature permits you to RUN OTHER PROGRAMS that you have configured in the  INSTALLATION menu. Press "R" for a list if programs have been configured.       This is the Number of Image Areas across the page.  The same format will be     repeated in each image area, but with different names and addresses.            This is the depth of the image area.  A label with five lines of information    would have a 6th line added to separate it from following labels. 60 lines max. Enter the first column you wish to begin printing. Usually this is in column    one.                                                                            DIRECTORY will display all files on the Default Drive and premit you to CCOPY,  ERASE, PRINT, VIEW, or RENAME files.  Press "D" or <ENTER>.                     FORMAT A DISK will prompt for the Drive destination to be formatted. Will not   format C:Drive.  Press "F" or <ENTER>.                                          IMPORT FILE will add to the database information that has been formatted        according to the prescribed format(s) in the Manual. Press "I" or <ENTER>.      EXPORT FILE will convert the names and addresses you specify to a format--      either Comma Delimited or ASCII--that is usable by another database.            BACKUP/RESTORE or CLEAR will permit you to make a copy of your ADDRESS.DAT file to A:DRIVE, Restore ADDRESS.DAT from A:DRIVE, or Clear all Addresses.           Enter the Text or the *CODE, in the position and line you wish it to appear on  the final printed form.  Information exceeding the format will be truncated.    Examine the data you have just input.  If it is incorrect, press "N" to re-cyclethrough the input screen again to make corrections. Press "Y" or <ENTER> if OK. Enter the number of names to skip.  You will resume printing at the next name.  Press <ESC>ape to return to the Main Menu.                                      Insure that your default disk drive contains enough room for the BACKUP file    which will be 50% of ADDRESS.DAT.  Do this using the SHELL TO DOS Command.      Specity a color code for the foreground and background for all TEXT in the      Menus and Boxes.  Press <ENTER> if you wish no change.                          ESIT PROGRAM will close all files and return to the DOS prompt on the default   drive.                                                                          SHELL TO DOS will exit POWER DESK to the DOS prompt.  You may resume by typing  "EXIT".  Press "S" or <ENTER>.                                                  LOCK SYSTEM will prompt for a Password and then clear the screen.  Press any keyto reactivate for a password prompt.  Press "L" or <ENTER>.                     INSTALLATION permits you to change certain default information, configure for   printers and modems, input Letterhead, and change Colors. Press <I>.            Enter <C> if yours is a Color Monitor, <B> for Black & White or Monochrome.                                                                                     Enter the familiar form of address, as:Bob  --for Mr. Robert Doe.  This will    appear on the Salutation line of letters as "Dear Bob:" do not enter "Dear" or :Title refers to the position within a company, as Vice President Marketing.     This information will appear on line two of Envelopes and Addresses.            Enter the first Phone number for the Addressee.  Suggested format is:           (703) 978-2339 (W) to designate a Work Phone.                                   Enter the second Phone Number for the Addressee.  Suggested format is:          (703) 978-2339 (H) to designate a Home Phone.                                   Enter the Company Name.  Use this field for long addresses that will not fit    on the regular 5-line format.                                                   Enter the Street Address, Suite Number, Mail Stop, Apartment Number.                                                                                            Enter the City, State (separate by comma). Enter the Zip Code or Postal Code    in the next field.                                                              Enter the Zip Code or Postal code, up to 10 digits.  If a foreign country, enterthe first 10 characters of the country name so it will sort correctly.          Enter any designation code you wish to distinguish this from other Records.     It is best to use a 3-character code, as: CLI for client, FRI for friend.       Enter the Expiration Date, or any date you wish to track this Addressee. If you press enter, today's date will be entered.  Enter as MM-DD-YY, six characters.  Enter any information you wish to include in a letter using *VA code. It might  be an amount due, for example, in a collection letter.                          Enter up to three lines of notes. Enter the word PAGE 2 on the third line of    notes to open a second page of notes.                                           Specify the Sort Order of the Mark File by moving the cursor and pressing Enter or by pressing the highlighted letter.  Your Mark File will sort on this key.   Enter the Record Type you wish to change ALL records to.  All names in the      Mark File will be changed to this Record Type.                                  Enter the new variable information you wish for ALL Marked addresses. The       variable information now there will be replaced with the new variable.          Enter the notes you wish to be ADDED to the notes on each record in the Mark    File.  The notes there will remain and the new notes added to them.             Enter a descriptive file name (up to 8 characters with NO extension) to file    this Template.                                                                  Enter the SEARCH PATTERN to begin the search.  The first Record found matching  the Search Pattern will be displayed.                                           Move cursor Up or Down to locate desired record, press <ENTER> to recall.       Use PageUp (or Minus) or PageDn (or Plus) to Page Forward and Backward.         Specify the Search Key by moving cursor up or down, or by pressing the          highlighted color.                                                              Enter the File name AND EXTENSION of the file desired. Use a Drive designation  if other than the Default Drive. Enter "?" for a Directory of the Default Drive.QUIT will exit to the Main Menu.  Use cursor Left or Right to make another      selection. <ESC>ape will return to the File Directory.                          This function permits you to rename a file from the name shown to a name you    specify.  Use Cursor Left, Right to make another selection. QUIT to return.     This function will print the shown file to your printer. Prepare printer now.   Use Cursor Left, Right to make another selection. QUIT to return to Main Menu.  This function will Delete the shown file, removing it permanently.              Use Curslor Left, Right to make another selection. QUIT to return to Main Menu. This function will copy the contents of the shown file into one you designate.  Use Cursor Left, Right to make another selection. QUIT to return to Main Menu.  This function will show the contents of the shown file on your monitor, pausing between screens.  Use cursor left, right to make another selection.             Enter the Title, Firstname and Middle Initial of the Addressee as: Mr. John E.  The "Mr." affects the sort order of the name, so omit it if possible.           Enter the Last Name and any trailing title, as: Doe, CPA  It is best to use     upper and lower case letters on this and all input fields.                      FIELD COLOR refers to the screen color behind the menus and Legends. Choose any color between Zero and Seven.  Press <ENTER> to leave unchanged.                Specify <A> for straight ASCII file or <C> for Comma Delimited file. This is    critical.  See POWER DESK Manual (EXPORT or IMPORT) for full details.           Enter a Password or phrase by which you wish to re-access POWER DESK. Memorize  it.  System may be accessed by re-starting computer.  Press <ESC>ape to return. BACKUP will copy ADDRESS.DAT to A:DRIVE.  RESTORE will copy ADDRESS.DAT from    A:Drive--file must have been created using BACKUP.  CLEAR will Re-set ALL data. Insert another sheet of paper in the printer and press <ENTER> when ready.      If using continuous forms, index the paper to the top of the next page.         CHANGE DIRECTORIES permits you to change to another sub-directory on your hard  disk drive and display the files for that sub-directory.                        VIDEO permits you to set monitor colors and to configure for Color Monitors or  Monochrome Monitors.  Press "V" or <ENTER>                                      PRINTER permits you to configure for different printers and to set the print    parameters for certain forms. Press <P> or <ENTER>.                             MODEM permits you to configure your modem for Auto-Dialing to set Baud Rate,    Dialing Commands, Modem Port, and Telephone precedent codes. Press <M>.         WORD PROCESSOR permits you to configure certain default values for the Word     Processor including Right/Left Margins, Tab Stops, and Justify.                 LETTERHEAD permits you to set-up your Name and Address for use on Envelopes and Letterhead.  Other parameters may also be set. Press <L> or <ENTER>.            This option permits you to configure to RUN OTHER PROGRAMS from within POWER    DESK and return to POWER DESK when completed.                                   This option permits you to change the Database labels and their screen position,but not the definition of each field. Lengths shown are maximum length.         QUIT and return to the Main Menu.                                                                                                                               Specify a color code for the foreground (color of letters) for text appearing   in Help Messages (like this) and other un-boxed information.                    Specify a color code between Zero and Seven for the background (space between   letters) for text appearing in Help Menus (like this) and other unboxed text.   If you are using a Dot Matrix printer, enter <Y>.  If you have a daisey wheel orletter quality printer, enter <N>.                                              Specify the printer port you are configured for.  Usually this is LPT1:         Don't omit the colon.  Press <ENTER> if you wish to make no changes.            Enter the ASCII (decimal) code for your printer's command for BOLDFACE (or      Shadow Print). Enter up to three digits, each in a separate box.                Enter your printer's ASCII (decimal) code to turn Boldface off.  See your       printer manual for the code.  Press <ENTER> to leave unchanged.                 Enter your printer's ASCII (decimal) code for Emphasized print On.  See your    Printer Manual for this code. Press <ENTER> to leave unchanged.                 Enter your printer's ASCII (decimal) code to turn Emphasized Print off. See yourprinter manual for this code. Press <ENTER> to leave unchanged.                 Enter your printer's ASCII (decimal) code for Underline On.  See your printer   manual for this code.  Press <ENTER> to leave unchanged.                        Enter your Printer's ASCII (decimal) code for Underline OFF.  See your printer  manual for this code.  Press <ENTER> to leave unchanged.                        Enter your printer's ASCII (decimal) code for Doublewide Printing. This applies to DOT MATRIX PRINTERS only.  See your printer Manual for this code.            Enter your printer's ASCII (decimal) code for Doublewide printing off. This     applies to DOT MATRIX printers only.  See your printer manual for this code.    Enter your printer's ASCII (decimal) code for Printer Re-Set, or Initialize.    See your printer manual for this code. Press <ENTER> to leave unchanged.        Enter the depth of the envelopes in PRINTER LINES. Normally, you print 6 lines  per inch.  A standard #10 envelope is 4-1/6 inches deep = 25 lines.             Enter the column number for the default right margin in the Word Processor.     Press <ENTER> to leave unchanged.                                               Enter the column number you wish to set as a default left margin in the Word    Processor. Press <ENTER> to leave unchanged.                                    Enter the column number for Paragraph Indent.  That is, the column you wish to  start the first line of a new paragraph. Press <ENTER> to leave unchanged.      Enter the column numbers for up to four tab stops in the Word Processor.        Press <ENTER> to leave unchanged.                                               Enter <R> if you wish to Word Processor to default to Right Margin Justification(right margin even).  Enter <SPACE> if you wish it ragged right.                Enter your Company Name (or your Name) to appear on Letterhead and Return       addresses when printed.                                                         Enter your Street address, Suite Number, or other information for the second    line of Letterhead and Return Addresses.                                        Enter your City, State, Zip Code to appear on Letterhead and Return Addresses.                                                                                  Enter your phone number to appear when you print a Letterhead.  You may enter   two phone numbers or free-form information.                                     Enter the MINUTES of keyboard inactivity before the screen is blanked (to save  screen burn-in). Enter Zero for no screen-blanking.                             Enter the Record Type you wish entered when you press enter on Record Type fieldon data input.  This is a convenience to save typing the same information.      Enter the Record Types (separated by commas) that you wish highlighted in RED.  This is convenient for flagging, for example BAD's--Bad Debts.                  Enter the Record Types you wish highlighted in YELLOW. This is convenient for   flagging, for example, INQ's--inquiry records.  Separate by commas.             Enter the Modem Port for your modem's configuration.  Usually this is COM1:     Don't omit the colon.                                                           Enter the standard Baud Rate for your modem.  Usually dialing is at 1200, 600 or300 BAUD.                                                                       Enter your modem's command set for Dial Tone.  Usually this is AT DT for touch- tone lines, AT DP for pulse lines.  See your modem manual for your codes.       Enter the Telephone precedent code to be dialed before each Auto-Dial number.   If you have to reach outside by dialing 9 and pause, enter 9<comma).            .                                                                                                                                                               SYSTEM ERROR: POWER DESK has encountered a problem in this process it does not  know how to deal with.  Re-start process making sure all input is valid.        DEVICE TIME OUT: The output to your printer, modem, or disk drive could not be  confirmed.  Check the appropriate device and restart this process.              DEVICE FAULT: An error message has been received from either your Printer,      Modem, or Disk Drive.  Check the appropriate device and restart this process.   OUT OF PAPER: Your printer has signaled that it is out of paper.  Check your    printer and re-start this process.                                              FILE NOT FOUND: The file name (or extension) you specified was not found on the default drive.  Re-start this process and input the correct file name.          DEVICE INPUT/OUTPUT ERROR: There is a problem confirming the input or output to the drive (or modem) you have designated.  Check device and re-start process.   DISK FULL: The disk drive you have designated for this file has returned a      disk full message.  Check disk and re-start this process.                       BAD FILE NAME: The file name (or extension) you specified for this file is not  a legal file name. Filename must be 8 characters or less w/3-character extensionTOO MANY FILES ON THIS DISK: The limit of 255 files per disk has been reached.  Check the files on this disk and eliminate those no longer in use.              DEVICE NOT AVAILABLE: The Disk Drive, Printer, or Modem you specified is not    configured on the system.  Check your configuration under INSTALLATION.         DISK IS WRITE PROTECTED: You have attempted to write to a disk with a write-    protect tab.  Remove the write-protection and re-start this process.            DISK NOT READY: Check the gate on the designated disk drive, insure there is a  disk in the drive and re-start this process.                                    DISK MEDIA ERROR: POWER DESK cannot confirm the Read/Write to the disk you are  using because of a flaw in the disk.  Change disks or check for problems.       OUT OF MEMORY: The program has exceeded available memory.  Exit the program and investigate the memory allocation.                                              OUT OF MEMORY: The data space allocated by the system is insufficient to cope   with the amount of data being input.  Exit the program and re-start the system. PATH NOT FOUND: The Directory, Drive, Path you have designated for this file is not valid.  Re-start this process and input the correct Path.                   FILE/BUFFER overflow: This usually indicates that you have not set FILES and    BUFFERS in your CONFIG.SYS file to 20.  See DESK.DOC for explanation.           RENAME ACROSS DISKS: An attempt was made to rename a file with a new drive      designation. Not allowed. Restart this process.                                 An error occurred during disk read/write. This may indicate that your database  has been damaged and must be restored using the RESTORE function.               INVALID POSITIONING: An attempt was made to update or delete a record without   a valid position. STATUS=8                                                      UNRECOVERABLE ERROR: An unrecoverable error has occurred. Database integrity    cannot be guaranteed. It may be necessary to RESTORE database. STATUS=19        RECORD MANAGER INACTIVE: Exit the system and re-start using PD to call the      Record Manager.  STATUS=20                                                      INVALID DATA RECORD ADDRESS: You have tried to access a record that has been    deleted or moved from its previous position.  Re-MARK records and try again.    LOST POSITION: An attempt has been made to retrieve a record that has been      deleted or modified.  If using MARKed Records, MARK again and retry. STATUS=82  FILE TABLE FULL: This may indicate that your computer memory is insufficient or has been filled with additional programs.  Re-boot system and try again.        RECORD MANAGER ERROR: An error has been reported by the record manager. Try thisprocess again.                                                                  Enter your notes on this record.  Use cursor keys, Insert, Delete, Home, End to edit. Press <ESC>ape to return to Page 1, ALT+P to print, ALT+D for Date.       Enter any SUFFIX CODES that must be dialed for Billing or Accounting purposes.  Leave blank if not required.  Will be dialed only if phone number is 9 digits.  Enter the NAME, DRIVE:\PATH, and COMMAND for executing another of your programs on the hard disk drive from within POWER DESK.                                  Enter the Number of Lines you wish the printer to skip before printing the firstline (the Date) on a letter.  This is used to skip over pre-printed letterhead. Enter the Foreground and Background colors of the moving cursor bars used to    select options from menus.                                                      Enter the message/reminder you wish to have displayed at the given time.        This message will pop onto the screen at the time given.                        Specify a color code between Zero and Seven for the background (screen area     behind the letters) for text inside Menu Boxes.  Press <ENTER> for no change.   
```
{% endraw %}

## PD.DOC

{% raw %}
```
POWER DESK has many features.  It is a complete office environment
for a hard disk drive. Here is a list of the capabilities of POWER
DESK:
    Full Featured Word Processor        Sort/Select Names
    Spell Checker/Corrector             Mail-Merged Letters
    4-Million Name Database             Labels
    Duplicate Name Checker              Custom Reports
    Autodialer                          Envelopes
    Phone Log                           Import/Export Files
    Phone Directories                   Backup/Restore
    Timekeeper                          Shell to DOS
    Calendar/Reminder                   Screen Blanking
    TO DO List                          Automatic Alarms
    DONE List                           Run Other Programs
    DOS File Functions                  Print-to-File
    Calculator                          Printer Restart
    ASCII Table                         Context Sensitive Help
    Pull Down Menus                     Database file protection
    User Selectable Parameters          Global Edit
    Encrypt/Decrypt Text                Lock System
    Boldface/Underline Text             Printed Letterhead
    Supports all Printers/Modems        Browse Files
    On-Screen Time and Date             Color/Monochrome
    Repetitive Labels                   Variables in Text
    PAGE 2 Notes                        Automatic Install
    Ditto Key                           Automatic Date Stamp
    Log Call Backs                      Macro Keys

QUICK START

POWER DESK requires a hard disk drive because of the extensive filing
system and the unlimited capacity of the database and associated modules.

CONFIG.SYS
You must set the Files and Buffers to 20 (or more) in your CONFIG.SYS
file.  If you are not sure how your system is set, change to the root
directory by typing:

"CD\"
"TYPE CONFIG.SYS"

You should see lines reading:
FILES=20
BUFFERS=20

If not, here are the steps to add these vital commands to your CONFIG.SYS
file:

Type "COPY CON:CONFIG.SYS" (Enter)
     "FILES=20" (Enter)
     "BUFFERS=20" (Enter)
Press Function Key 6 (F-6) which will display a control Z on the screen.
Press (Enter).  The system will respons "1 File(s) Copied"
Restart your system using Control+Alternate+Delete

PATH
POWER DESK uses many DOS commands to perform certain functions.  Therefore,
your DOS files must be in the PATH statement in your AUTOEXEC.BAT file on
your root directory.

If you are unsure, from the DOS C:> prompt, type: "PATH"

You should then see a list of all the directories in your path statement
among which should be the subdirectory containing your DOS commands.

If you receive the response "NO PATH" then you must set your PATH statement
in your AUTOEXEC.BAT file on your root directory.  To do so, add the
following statement to your AUTOEXEC.BAT file:

PATH=C:\;C:\(subdirectory)

Where (subdirectory) is the name of the subdirectory containing your DOS
commands.

POWER DESK is shipped with the color code set for color output.  You
can change the color code in the INSTALLATION menu, but on some systems
with a monochrome monitor you may be unable to see the information displayed
on the screen just to get to the INSTALLATION menu.  Therefore, to access
POWER DESK in the Black and White mode from the outset, type:

PD B

This will start POWER DESK in the B&W mode and you can permanently set the
color code in the installation menu.


STARTING POWER DESK
To start POWER DESK simply type PD


POWER DESK is not free.  This program was developed with considerable effort
and craftsmanship over a period of several years.  If you use this program
it is your responsibility to pay the low registration cost of $49 (plus
$5 shipping).  For this registration you will receive a copy of the
detailed, printed documentation, free updates, free telephone support,
and a copy of the most recent version of POWER DESK.

You may register POWER DESK by mail or by phone with a Visa/ MC:

                          Wade B. Dowdle
                          8516 Sugarbush
                          Annandale, VA 22003
                          (703) 978-2339
Please DO NOT CALL for support if you are not registered.
The features of POWER DESK and the instructions may be obtained by pressing
the F-1 HELP key at any option.

```
{% endraw %}

## SETUP.TXT

{% raw %}
```
N
LPT1:
27
69

27
70

27
71

27
72

27
45
1
27
45
0
27
87
1
27
87
0
27
64

25
0
C
1
15
2
15
4
15
4
COM1:
1200
AT DT
1

5
75
5
15
30
45
60
R
ON
Software Studios, Inc.
8516 Sugarbush, Ste. 104
Annandale, Virginia 22003
703-978-2339
30
CLI
BAD
INQ















2
15
21
First Name:
2
49
21
Last Name:
4
15
23
Salutation:
4
49
25
Title:
6
15
16
Telephone:
6
49
16
Telephone:
8
15
40
Company:
10
15
38
Street Address:
12
15
41
City, State:
14
15
10
Zip Code:
14
38
3
Record Type:
14
56
8
Expiration Date:
16
15
56
Variable:
18
15
59
Notes:
19
15
65

20
15
65

```
{% endraw %}

## FILE1738.TXT

{% raw %}
```
Disk No: 1738                                                           
Disk Title: Power Desk                                                  
PC-SIG Version: S1.1
                                                                        
Program Title: Power Desk                                               
Author Version: 1.26                                                    
Author Registration: $49.00 plus $5.00 Shipping.                        
Special Requirements: Hard drive.                                       
                                                                        
Gentlemen, and Ladies, start your engines--because now you've got       
POWER DESK.  This is the desk utility to turn a computer klutz into a   
power user or let most anyone sail through the daily grind with con-    
fidence and without ever looking at a manual.  Do you need a great      
address filer with mail merge?  POWER DESK's got it.  Would you like    
a word processor with a spell checker and letter head printer, plus     
envelope printer, label maker, calender, scheduler, reminder,           
automatic phone log, an expense log, and file handling capabilities     
to rival many a hard disk utility?  That's POWER DESK, too.             
                                                                        
Not only does POWER DESK rev up and run, it handles like a much more    
expensive model.  Drop down menus give you well-ordered options, and    
every situation is covered by clear instructions available through      
the F1 help button.  Back out of any situation with the Escape key.     
                                                                        
Whether you use POWER DESK as a complete desk organizer, for personal   
time management or just take advantage of its excellent address/mail    
merge abilities, POWER DESK is going to take you as far as you want     
to go.  The program installs itself on your hard disk and then tells    
you to "Prepare printer with continuous paper."  Don't worry about it   
running off a lot of documentation, it prints just one page and a       
quarter of very clear instructions on setting up your computer.  And    
that's all the printed instructions you need to get up and going with   
POWER DESK.                                                             
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1738

     Volume in drive A has no label
     Directory of A:\

    ALL      ARC    349928   8-25-89   7:08p
    ARCE     COM      5808   1-24-87   2:11a
    FILE1738 TXT      2985   1-29-90  11:16a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   6:23a
    INSTALL  BAT       415   5-15-89  12:49p
            6 file(s)     359714 bytes
                               0 bytes free
