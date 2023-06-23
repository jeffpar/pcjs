---
layout: page
title: "PC-SIG Diskette Library (Disk #742)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0742/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0742"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHURCH MEMBERSHIP SYSTEM"

    The CHURCH MEMBERSHIP SYSTEM, designed as a database to keep track of
    members of your church, works equally well for your group, club, or
    business. Keep track of birthdays and anniversaries, or any other
    special or important dates. Some of the handy features include:
    modify/delete, browsing, and making multiple reports. Menu-driven and
    user-friendly.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CMS.DOC

{% raw %}
```





                    Church Membership System
                    ========================






                    Version 5.5 - Revision 08







               Copyrighted (c) 1986,90 by Ron Byxbe

                       ALL RIGHTS RESERVED



                           _______
                      ____|__     |               (tm)
                   --|       |    |-------------------
                     |   ____|__  |  Association of
                     |  |       |_|  Shareware
                     |__|   o   |    Professionals
                   -----|   |   |---------------------
                        |___|___|    MEMBER



================================================================
What's Available?
================================================================

Church Membership System..................................$95.00
        * includes 30 days of telephone support.

        Tracks Attendance, Members, Contributions and more!

Church Accounting System..................................$95.00
        * includes 30 days of telephone support.

         Assets, Liabilities, Income, Expenses, Bank Accounts!
         Reports include: Income Statement, Balance Sheet,
         General Ledger, Expense Statement, Checkbook Statement
         and many more.

         * Both programs require 640K.  A hard disk is
           recommended but will work with a two floppy system.

Annual Support and Update Plan............................$59.00+

        Annual Support Fee .................. $40.00
        Program Updates ..................... $19.00 each

        Includes ONE YEAR of TELEPHONE SUPPORT and Free Updates.


Dealers for our products are wanted!  If you are a pastor who
travels to church conventions or seminars, we would like to
talk with you!  Give us a call at (912) 272-1714.

SonShine Office Hours:  9 am to 4 pm EASTERN TIME. (912) 272-1714


=================================================================
                         GETTING STARTED
=================================================================

Requirements:

To run the system it is recommended that you have a hard disk.
The system can be run on two floppies with limited disk space.
Dos Version 3.0 or higher is also recommended.  Ram Memory should
be 640k or more.

You MUST have a CONFIG.SYS file on your startup disk.  If you
have a hard disk then this file must be in your root directory
i.e. "C:\".  If you are using floppies then this file must be on
your DOS diskette.  The file must contain the following
statements:

          FILES=35
          BUFFERS=30

The system will not run unless these commands are added to your
CONFIG.SYS file.  Once you have added them you must reboot your
system.  This can be accomplished by CTRL-ALT-DEL sequence or
turning off the computer and turning it back on.

If you do not have an existing CONFIG.SYS file on your computer
then copy the one supplied on the program disk to either your
root directory (if using a hard disk) or to your DOS diskette (if
using two floppies).

Examples:

Hard Disk:    Copy A:CONFIG.SYS C:\   (Program Disk in drive A:)
Floppy Disk:  Copy B:CONFIG.SYS A:    (Program Disk in drive B:)

=================================================================
                          INSTALLATION
=================================================================

To install the system on your computer simply follow the sequence
below:

Hard Disk:     Place Membership Diskette in Drive A: or B:

               Type INSTALL <enter>

               Follow Instructions on the Screen

               Load the program by typing:   CMS <enter>


Floppy Disk:   Place Membership Diskette in Drive A:

               Type INSTALL <enter>

               Follow Instructions on the Screen.

               Load the Program by typing A:CMS <enter>
               *Note:  You will be on Drive B:  B>

=================================================================
                   INDEXING DATA FILES
=================================================================

Every now and then you should Re-Index your data files.  Especially
if you do a lot of deletions.

The Option on the Re-Index Data Files Menu will do this for you.

This option will physically remove any deleted records and reorganize
your member file indexes.

=================================================================
                          SYSTEM SETUP
=================================================================

Load the program by type CMS (floppy disk users type A:CMS).  The
program will check for all data files.  If a file is not found
the computer will automatically create it.

EDIT NAME

Use this option to enter the name of you Church.  Also enter a
password for stewardship, what type of monitor you have (C)olor
or (M)onochrome.  If this is a registered version enter your
serial number.

Press enter through all fields and the computer will save the
system setup record.

DEFINE LABEL SIZE

Use this option to define the size of your mailing labels.  The
default has been set to the standard mailing label.  If you are
using a larger label then you must change this number. If you are
Using an HP Laserjet then set this to "L".  It will print two
across Laser Labels.

DEFINE MERGE TYPE

Use this option to tell the computer what type of Word Processor
(if any) you are using.  The default is "WS" for Word Star.  This
code will produce a comma delimited ascii file compatible with
most word processors.  The other options are "WP" for Word
Perfect and "LE" for Leading Edge.

DEFINE PRINT CODES

Use this option to define Compressed and Normal print.  The codes
for this can be found in your printer manual.

=================================================================
                          SYSTEM CODES
=================================================================

EDUCATION CODES

Here you must define all Education Departments and Classes.
Select option "Create Department".  Enter a six character code
such as "ADULT " for Adult Department or "ADULT1" for Adult 1
Department, etc.  Enter a description for the department and
press enter.  Continue this process until all departments have
been created.

To change a department description use the "EDIT/DEL" option. 
This will allow you to change the description or "DELETE" the
department code.  To delete the code press the "F4" function key.

To View the departments on the screen select "VIEW DEPARTMENTS". 
This will place a list of all departments on the screen.  Use the
Pagedown Key to Page through the list.

To print a department code list select option "PRINT
DEPARTMENTS".  This will print a list of all the departments you
have entered.

After you have entered all departments select "CREATE CLASS" and
follow the same procedure.


ORGANIZATION CODES

Here you must define all Organizations & Committees.  Select
option "Create Organization".  Enter a six character code such as
"DEACON " for Church Deacon or "TRUSTE" for Church Trustee, etc.
Enter a description for the organization and press enter. 
Continue this process until all Organizations have been created.

To change a organization description use the "EDIT/DEL" option. 
This will allow you to change the description or "DELETE" the
organization code.  To delete the code press the "F4" function
key.

To View the organizations on the screen select "VIEW
ORGANIZATIONS".  This will place a list of all organizations on
the screen.  Use the Pagedown Key to Page through the list.

To print a department code list select option "PRINT
ORGANIZATIONS".  This will print a list of all the organizations
you have entered.


STEWARDSHIP CODES

Here you must define all Stewardship Funds.  Select option
"Create Stewardship".  Enter a number such as 601 for General
Fund or 7845 for Building Fund, etc.  Enter a description for the
Fund and press enter.  Continue this process until all Funds have
been created.

To change a Stewardship Fund description use the "EDIT/DEL"
option.  This will allow you to change the description or
"DELETE" the Fund code.  To delete the code press the "F4"
function key.

To View the Stewardship Funds on the screen select "VIEW
STEWARDSHIP".  This will place a list of all Funds on the screen.
Use the Pagedown Key to Page through the list.

To print a stewardship fund list select option "PRINT
STEWARDSHIP".  This will print a list of all the Funds you have
entered.


EDUCATION POSITION CODES

Here you must define all Education Positions.  Select option
"Create Position".  Enter a number such as "TEACH " for Teacher
or "STUDNT" for Student, etc.  Enter a description for the
Position and press enter.  Continue this process until all
Positions have been created.

To change a Position description use the "EDIT/DEL" option.  This
will allow you to change the description or "DELETE" the Position
code.  To delete the code press the "F4" function key.

To View the Positions on the screen select "VIEW POSITIONS".
This will place a list of all Positions on the screen.  Use the
Pagedown Key to Page through the list.

To print a Position list select option "PRINT POSITION".  This
will print a list of all the Positions you have entered.


CHURCH STATUS CODES

Here you must define all Church Status Codes.
Select option "Create Status Code".  Enter a code such as
"VI" for Visitor or "Ch" for Child, etc.  Enter a description
for the Code and tell if this code is mode "Church Members" or
not.  Continue this process until all Codes have been created.

To change a Code description use the "EDIT/DEL" option.  This
will allow you to change the description or "DELETE" the Position
code.  To delete the code press the "F4" function key.

To print a Code list select option "PRINT CODES".  This
will print a list of all the Codes you have entered.

=================================================================
                        MEMBERSHIP MODULE
=================================================================

FILE MENU

The File Menu allows you to Create, Modify, Delete, or View your
members.

To Create a new member select the "CREATE" option.  A blank
screen will appear.  Assign a "Family Number" and a "Member
Number" to this member. (See Note below for these numbers).  Fill
in all information and Press the "PAGEDOWN" key.  (If you press
the "ESC" key the record will NOT be saved.

*NOTE:  Family Numbers are unique numbers that are assigned to
each Family Group.  They can be any number from 1 to 99,999 but
each family must have a different number.  Each Member within the
family will also have a two digit unique Member Number.  An
example of this would be..  There are six members in my family,
Myself, My wife, 2 Sons, and 2 Daughters.  Our Family number
might be 1000 but the member numbers would be different.  I would
be member number 01, my wife 02, my first Son 10, my first
daughter 11, my second Son 12, my second daughter 13.  The
numbers do not have to be assigned in the order I have assigned
them but they must be unique!

If you enter a family number of a family that has already been
created then the computer will retrieve information from the
existing family record and display it on the screen.  This saves
time keying duplicate information within family groups.

The field "Family Mail (Y/N)" is very important.  This is were
all mail is going; such as Church Bulletins, etc.  My record
would be coded Family Mail "Y" and the rest of the family would
say "N".  That way we do not have 6 Church Letters going to the
same address.  There is a filed for the name you wish to appear
on the Mailing Label.  Here you can put "Mr. and Mrs. Ron byxbe".
Otherwise the name will be the members name.

The Church Status codes are "RM" for Resident Member, "NM" for
Non-Resident Member, and "PR" for Visitor or Prospect.

*** PLEASE READ ***

When you have entered all information press the "PAGEDOWN" key. 
This will save your record.  (** Do not press the "ESC" key
unless you wish to abort the record).

When you have entered the last Member and pressed the pagedown
key the computer will display an empty screen.  Here you can
press the "ESC" key to leave the Member Create Option.
Edit Member Record

The "EDIT MEMBER RECORD" allows you to change information on a
given record.  You can page back and forth through the Database
by pressing "PAGEDOWN" or "PAGEUP".  If you want to go directly
to a member you can press the "F1" key, enter part of the
person's last name, and the computer will take you directly to
that spot.

Edit Employer Info

This option allows you to enter information about the members
work including telephone number.

Delete Member Record

The "DELETE MEMBER RECORD" allows you to delete the entire record
on a given record.  You can page back and forth through the
Database by pressing "PAGEDOWN" or "PAGEUP".  If you want to go
directly to a member you can press the "F1" key, enter part of
the person's last name, and the computer will take you directly
to that spot.

Once you have located the member you wish to delete press the
"F4" key.  The member is now deleted.

*NOTE:  If you do very much deleting you will want to ReIndex
your data files.  Do this by selecting the "SYSTEM MENU", then
"REINDEX FILES MENU", then "ALL FILES".


Change Member Numbers

This option allows you to change a member's number.  There are
several reasons for this.  One good example is marriage.  Your
son or daughter gets married.  They are no longer part of your
family group but have now become their own family group.  You can
use this option to change their numbers.

View Members on Screen

This option will display all members currently in the database. 
You can page forward only by using the "PAGEDOWN" key.  If you
wish to go directly to a name in the database press the "F1" key,
enter part of the last name, press enter and the computer will
start the display with this name.

REPORTS MENU

There are several reports in this section.  I will not describe
each one of them but tell you about some of the parameters needed
to run them.

Starting Date and Ending Date:  This option has been
misunderstood for some time.  Basically what I am asking is for a
date to start looking at and a date to quit looking at.  Example
would be:  If I am printing a Birthday report I would ask for a
Starting Date and an Ending Date.  I would then print all
Birthdays that fell on or between these dates.  If you enter
02/01 and 02/28 I would print all Birthdays on and between Feb 1
and Feb 28.

Reports                       Description
=======                       ===========
Family Roster                 Complete List of Families
Church Status with Address    Codes "RM,NM,PR" with Addresses
Church Status Alpha           Codes "RM,NM,PR" List
Birthdays                     Names and Birthdate
Anniversaries                 Names and Anniversaries
New Church Members            Codes "RM,NM"
Non Church Members            Not Codes "RM,NM"
List by Family Number         List in Family Number Order
Shepherd Report               List of Members showing Shepherd


LABEL MENU

The Label section gives you the ability to print labels for
mailing purposes.  There are several options here depending on
what you would like to do.  The labels are standard size unless
you have changed the size in the "Setup" menu.

I have added a screen that will ask for a message that will print
on the first line of the label.  Example of this would be:
"HAPPY BIRTHDAY"
John Doe
P. O. Box 3456
Winston Salem, NC  99999

If you do not wish to print a message then press enter.  No
message will print.

There is also an option here to print "Return Address Labels" for
your church.  The name and address printed on the label will be
the one entered in the "Setup" menu.

MERGE MENU

The merge section will build a merge file that will be used as a
secondary file to your Word Processor.  Basically this has
nothing to do with my program.  I just build the file.  To merge
this file into your Word Processor you will have to refer to the
manual that came with your Word Processor.  Refer to the section
that talks about "Merging"

The merge file will be created in the format selected in the
"Setup" menu.  If you chose "WS" then you will get a comma
delimited Ascii file.  If you chose "WP" then you will get a
Would Perfect Secondary File, Etc.


PRINT ROLODEX

This option was placed here to allow churches to print rolodex
cards.

CHURCH DIRECTORY

This is a complete church directory with names, addresses, phone
numbers.

=================================================================
                        EDUCATION MODULE
=================================================================

MODIFY MEMBER RECORD

This section allows you to add a person to an Education
Department & Class and give that person's position within that
Class.  

If you are adding this member to an Education Class then enter
"Y" under Class Member.  Enter the Department and press enter or
press the "F2" key for a list of departments.  Place the menu bar
on the one you want and press enter.  The computer will place
that department into the members record.

Next enter the Class and press enter or press the "F2" key for a
list of classes.  Place the menu bar on the one you want and
press enter.  The computer will place that class into the members
record.

Last enter the members position within the class or press "F2"
for a list of positions.  Place the menu bar on the one you want
and press enter.  The computer will place that position into the
members record.

To advance to the next member press the "PAGEDOWN" key.  To
backup to a previous member press the "PAGEUP" key.  To go
directly to a member press the "F1" key, enter part of the
member's name, press enter.  The computer will retrieve the name
closet to the one you entered.

To exit this section press the "ESC" key.


ATTENDANCE MENU

This section allows you to keep up will class attendance for 52
weeks.

Enter Members Present:  This option will allow you to enter the
members present for a given Sunday.  A screen will appear asking
for the date, month, and Sunday.  Enter this information and
press enter.  You will also be given a list of classes.  Place
the menu bar on the class you want and press enter.  The computer
will then build a file of just the members in that class.  When
the attendace screen appears place an "A" for absent or a "P" for
present.  The screen will advance to the next member.  Continue
this process until all members have been entered.

When you are finished you will be prompted for the next class. 
Place the menu bar on the class you want and press enter.  If you
are finished then press the "ESC" key.

VIEW MEMBER ATTENDANCE

This section allows you to view you member attendance records on
the scree.  The list is in alphabetical order.  Press "PAGEDOWN"
for the next member, "PAGEUP" for the previous member, "F1" to go
directly to a member, or "ESC" to exit.

Reports                       Description
=======                       ===========
Member Attendance #1          Prints Member Attendance
Member Attendance #2          Prints Member Attendance
Attendance Stat Report        Prints Percentages

CLEAR ATTENDANCE

This option will clear all the attendance records in the
computer.  You will only want to do this when you are starting a
new year.

ABSENTEE LABELS

The Label section gives you the ability to print labels for
mailing purposes.  It will print all absentees for a given date.

ABSENTEE MERGE

The merge section will build a merge file that will be used as a
secondary file to your Word Processor.  Basically this has
nothing to do with my program.  I just build the file.  To merge
this file into your Word Processor you will have to refer to the
manual that came with your Word Processor.  Refer to the section
that talks about "Merging"

The merge file will be created in the format selected in the
"Setup" menu.  If you chose "WS" then you will get a comma
delimited Ascii file.  If you chose "WP" then you will get a
Would Perfect Secondary File, Etc.
REPORTS MENU

There are several reports in this section.  I will not describe
each one of them but tell you about some of the parameters needed
to run them.

Most of the reports will prompt you with a menu of Department,
Classes, Positions, Etc.  Place the menu bar on the option you
want and press enter.

Reports                       Description
=======                       ===========
Alpha Listing of Member       Alphabetical list of all Members
Class Attendance Rolls        Class Rolls
Class Enrollment Report       Names,Addresses,Birthdate,Phone #
Department Report             List all all members in Department
Position Rolls                All Members in A given position
New Members Report            All members Between two dates
Non Members Report            Class Member = "N"
Birthday Report               Members by Selected Birth Date
Anniversary Report            Members by Selected Anniv. Date


LABEL MENU

The Label section gives you the ability to print labels for
mailing purposes.  There are several options here depending on
what you would like to do.  The labels are standard size unless
you have changed the size in the "Setup" menu.

I have added a screen that will ask for a message that will print
on the first line of the label.  Example of this would be:  
"WE MISSED YOU"
John Doe
P. O. Box 3456
Winston Salem, NC  99999

If you do not wish to print a message then press enter.  No
message will print.

MERGE MENU

The merge section will build a merge file that will be used as a
secondary file to your Word Processor.  Basically this has
nothing to do with my program.  I just build the file.  To merge
this file into your Word Processor you will have to refer to the
manual that came with your Word Processor.  Refer to the section
that talks about "Merging"

The merge file will be created in the format selected in the
"Setup" menu.  If you chose "WS" then you will get a comma
delimited Ascii file.  If you chose "WP" then you will get a
Would Perfect Secondary File, Etc.

=================================================================
                         ORGS/ACT MODULE
=================================================================

EDIT MEMBER ORGANIZATION

This option allows you to add members to different Organizations
and Activities within the Church.  

To see a list of the Organizations that were entered in the
"SETUP" section press the "F2" key.  Select the Organization you
wish and press enter.

Press the "PAGEDOWN" key for the next member, "PAGEUP" key for
the previous member, "F1" to find a member, "ESC" to exit this
section.

**NOTE:  If you have entered an organization for a member you
must press the "PAGEDOWN" to save the record before pressing the
"ESC" key to exit.


PRINT ORGANIZATION

This option will print everyone for the selected organization.

PRINT LABELS

This option will print labels for the selected organization.

BUILD MERGE FILE

This option will build a merge file for the selected
organization.

=================================================================
                       STEWARDSHIP MODULE
=================================================================

This module allows you to keep track of all contributions given
to the church for the year.

CONTRIBUTIONS MENU

This is were you will enter the weekly contributions.  All
contributions entered are placed in a "WORK" file.  When you have
printed an Edit Report and "FINALIZED" then this entries are
moved from the work file and "POSTED" to the members giving
record.

Enter Member Contribution:

Select this option to enter the member contribution.  You will be
prompted for the date.  Enter the date and press enter.

Next you must tell the computer who the contribution is for.  If
you do not know the Family Number then press the "F1" key.  You
will be given a list of names.  Place the Menu Bar on the Member
you want and press enter.

You can enter up to four funds for each member.  For a list of
Funds press the "F2" key.  Place the Menu Bar on the Fund you
want and press enter.  Next enter the amount.  You must press
enter on every field until the fields on the screen are reset to
blanks or zeroes.  If you press the "ESC" key before saving the
record the information for the member you were working on will be
lost.

Print Contribution Edit Report:

After you have entered your Contributions you will need to print
an edit report.  This report will tell you exactly what you have
entered.  Review this report carefully.  If you find any errors
you can correct them by selecting "EDIT/DELETE MEMBER
CONTRIBUTIONS".

Edit/Delete Member Contributions:

This option will allow you make corrections to the Contribution
work file in the event you posted something wrong.

*******  READ THIS SECTION CAREFULLY  *******

Finalize Contributions:

This option MUST be taken after you have reviewed the
contributions.  If you are satisfied with what you have entered
select this option.  This will take all the contributions that
you have entered and Post them to the members record.
CHANGE STATEMENT FOOTER

This option allows you to change the message that appears at the
bottom of the Member Statements.

SINGLE MEMBER STATEMENT

This option will allow you to print a Statement for ONE member
only.  The output is the same as "ALL MEMBER STATEMENT".

ALL MEMBER STATEMENTS

This option will print the Giving Statements for ALL persons in
the Membership Database File.

SUMMARY GIVING REPORT

This option will print a Summary Report by selected dates.  It
will summarized all contributions by Funds.

EDIT MEMBER GIVING RECORD

This option was placed here to allow you to make corrections to
the member statements after you have finalized.  Be very careful
when using this option.  All changes made are FINAL.  If you
discover you made an error you can fix it here.

SELECT NEW GIVING YEAR

This option allows you to select another stewardship year. 
Example:  You may wish to reprint a member statement for last
year.  You this option to select that year.  BE SURE YOU CHANGE
THE YEAR BACK TO THE CURRENT YEAR.  Otherwise, all entries posted
to Stewardship will go into last year.

CREATE NEW GIVING YEAR

This option allows you to Create a new giving year.  You will
need this option when going into a new year.  Simply select this
option, enter the year i.e 1988,1989,1990, etc and press enter. 
You will note that the year is displayed in the lower left corner
of your screen.

From this point on all contributions will go to this year.

DELETE OLD GIVING YEAR

All the years that you created are still on the disk.  Due to
disk space you may wish to delete them.  If so just select this
option, select the year you wish to delete and press enter.  This
year is gone forever.

=================================================================
                 PLEDGES TO STEWARDSHIP MODULE
=================================================================

CREATE PLEDGE

This option will allow you to create a New pledge for a member.
Enter the Family and Member Number.  If you do not know the number
press the F1 key to reveil a list of names.

Next, enter the Fund for the Pledge.  If you do not know the fund
then press the F2 key and a list of funds will be placed on the
screen.

Enter the Amount Pledged, the date of the pledge (Regardless of the
date the fund is activated immediately), and the *Close after Date.
The computer will update the Date Last Given and Total Amount Paid.

* The Close After Date is the Date the Pledge Ends. (Ex: 12/31/90)

EDIT/DELETE PLEDGE

Select this option to edit or delete a pledge.  To Edit simply make the
changes desired and press enter.  To delete press the F4 function key.
The F5 function key is used to toggle the pledge as *CLOSED* or *OPEN*.

Example:  If a person had a pledge to the Building fund and called the
church and told them they  wanted it closed because of whatever reason,
death, levaing the church, etc., you could CLOSE that pledge only by
pressing the F5 function key.  Pressing the F5 key on an *OPEN* pledge
will *CLOSE* it and press the F5 key on a *CLOSED* pledge will *OPEN* it.

CHURCH PLEDGE REPORT

This option will print a report for the Church that shows ALL pledges
in the pledge file, including history, in alphabetical order.

CLOSE PLEDGES

At the End of a Year you will want to close all outstanding pledges that
have not been paid.  The computer will ask you for a date.  The computer
will then close all pledges with a closing date less than or equal to the
date that you entered.   (THE DATE IS NOT THE PLEDGE DATE BUT THE CLOSE
DATE).

If you have a pledge that extends greater than one year year then it will
still be active. (This is setup in the create option).

CLEAR PLEDGES

Years from now you may wish to physically remove all closed pledges from
your computer.  Remember, if you do this you will lose all history for
these pledges.  The only reason to to this is to conserve disk space, so
if you have plenty of space you may want to leave them on the disk.

To clear the pledges select the Clear Option, Enter the date to clear,
and press enter.  The computer will delete all pledges less than or
equal to the date specified.  (THE DATE IS NOT THE PLEDGE DATE BUT THE
CLOSE DATE).

=================================================================
                        VISITATION MODULE
=================================================================

This module allows you to place members (or non members) on a
visitation list.  You can also place them on the permenant shut
in list.  This options then become very handy for the Pastor when
he needs a list of people to visit.

As people call in reporting sickness, hospitalization, or other
areas that require a visit the member should be placed on this
list.

This list can also be used for Education Minister, Music
Minister, or anyone else.


Place on Visitation List (Y/N) ...  Y

Place on Shut In List ..  Y

Who should Visit ...  PASTOR

Date to Visit ..  03/02/89

Purpose of Visit .. NEW MEMBER


Reports                  Description
=======                  ===========

Print Visit List         Prints all persons with "Y"
Print Shut In List       Prints all persons with "Y"

=============================================================
SHAREWARE
=============================================================

This program is "shareware".  Shareware is a marketing method
by which a user can "test drive" the program before paying
for it.  The normal "test drive" period is two weeks to a month.
After that period, continued use requires registration.  Registration
is just $95 (plus $4 shipping).  Included with registration is
the right to use the program, the latest version of the program,
and 30 days of free telephone support for Installation.

Fees paid for a copy of this program do not constitute registration.
This means that when you pay a shareware distributor $3-4 for a copy,
you have not paid for continued use of the program.  It means you
have paid for an evaluation copy.

```
{% endraw %}

## FIXSTW.DOC

{% raw %}
```
Fix Stewardship Files
============================================================================
Earlier versions 5.0 .. 5.5 MUST have their stewardship files converted
to work with this version of "CMS".

To convert the files do the following....

1:  List all Stewardship files:

    To Do this type-->  DIR *.DBG

    Write these file names down for later reference

* Note:  You should BACKUP all these files before starting this conversion

2:  Load DBFAST.EXE   To Do this type-->  DBFAST


Continue 3 & 4 until you have converted ALL files

3:  Load FIXSTW.EXE   To Do this type-->  FIXSTW

4:  Enter the name of your stewardship file

    Example #1     Enter File Name : DEFAULT.DBG
    Example #2     Enter File Name : 1988.DBG

    The computer will convert this file

    Go Back to #3 and convert the next file

5:  After all files have been converted you must "REBOOT" your computer

    Key Sequence-->  CTRL-ALT-DEL

       or

    Turn off the power and turn it back on

6:  Run "CMS" and ReIndex Stewardship Files

```
{% endraw %}

## FILE0742.TXT

{% raw %}
```
Disk No:  742                                                           
Disk Title: Church Membership System                                    
PC-SIG Version: S4.3                                                    
                                                                        
Program Title: Church Membership System                                 
Author Version: 5.58                                                    
Author Registration: $95.00                                             
Special Requirements: Two floppy drives and a printer.                  
                                                                        
The CHURCH MEMBERSHIP SYSTEM is a wonderful database to keep track of   
members of your church, but it works equally well for your group, club, 
or business.  You can keep track of your members' birthdays and         
anniversaries, or any other special or important dates.  Some of the    
features include modify/delete, browsing, and making multiple           
reports.  It is menu-driven and user-friendly.                          
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #742  CHURCH MEMBERSHIP SYSTEM  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install program, type: INSTALL  (press enter)                        ║
║ To print instructions for installation, type: COPY INSTALL.DOC PRN      ║
║                                                                         ║
║                       ** AFTER INSTALLATION **                          ║
║                                                                         ║
║ To start the program, type: CMS  (press enter)                          ║
║                                                                         ║
║ To print the documentation, type: COPY CMS.DOC PRN  (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
=============================================================================
             Church Membership System - Installation Procedures
=============================================================================

If the INSTALL.EXE program fails then you can install the program by
following the instructions below.

HARD DISK INSTALLATION:

   1.  Create a sub directory on your hard disk to place the program.
   2.  Change to that subdirectory
   3.  Change to drive A:
   4.  Type:  PKUNZIP CMS <drive>

   -   Installation is Complete

   Example:

   1.  C> MD CHURCH
   2.  C> CD\CHURCH
   3.  C> A:
   4.  A> PKUNZIP CMS C:

   To run the program change to drive 'C' and type:  CMS


FLOPPY DISKETTE INSTALLATION:

   Note:  You will need four formatted diskettes to use this system.
          They will be PROGRAM, OVERLAY, DATA, & UTILITY Diskettes.

   1.  Insert Original Diskette into drive A:
   2.  Insert PROGRAM (1st blank diskette) into drive B:
   3.  Change to drive A:
   4.  Type:  PKUNZIP CMS B: CMS.EXE
   5.  Remove PROGRAM Diskette from drive B:
   6.  Insert OVERLAY (2nd blank diskette) into drive B:
   7.  Type:  PKUNZIP CMS B: @floppy
   8.  Insert UTILITY (3nd blank diskette) into drive B:
   9.  Type:  PKUNZIP CMS B: @utility

   -   Installation is complete

   Example:

   3.  A:
   4.  PKUNZIP CMS B: CMS.EXE
   7.  PKUNZIP CMS B: @floppy
   9.  PKUNZIP CMS B: @utility

   To run the program do the following:

   1.  Insert PROGRAM Diskette into drive A:
   2.  Insert DATA Diskette into drive B:
   3.  Change to drive B:
   4.  Type A:CMS

   This will create all data files on drive B:


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0742

     Volume in drive A has no label
     Directory of A:\

    INSTALL  EXE     37712   3-22-90   5:38p
    INSTALL  DOC      1699   6-24-89   5:20p
    FLOPPY              37  11-08-89   7:57p
    UTILITY             50   6-24-89   5:22p
    CMS      ZIP    266550   5-12-90   8:34a
    CONFIG   SYS        22  10-02-89   8:21p
    PKUNZIP  EXE     21440   7-21-89   1:01a
    CMS      X01        33   3-27-90   7:05a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       925   5-05-90   3:36p
    FILE0742 TXT      1635   6-05-90   1:47p
           11 file(s)     330141 bytes
                           25600 bytes free
