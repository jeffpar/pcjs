---
layout: page
title: "PC-SIG Diskette Library (Disk #3319)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3319/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3319"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## QUIKSTRT.DOC

{% raw %}
```

Introduction - ProDev*MEMBER Church Membership Tracking System

The ProDev*MEMBER Church Membership System is designed to allow you to quickly
and easily add and modify Members, Spouses, Children and Visitors to your
membership data files.  You can track all talents and accomplishments.  You can
easily print a variety of Mailing Labels and Reports to help manage your
church.

PLEASE NOTE - As you are building the Member/Visitor records, you MUST fill in
the "Date Joined" to indicate to this system that the person is a member of
your church.  If you are not sure of the date, I suggest that you use
01/01/1899 so that the system will realize the person is a member.  "Joined"
may be changed to "Confirmed" or some other term by the "Change Field Titles"
selection in the Setup Menu.

If  the  date  is BLANK ("  /  /    ") the system assumes the person is NOT a
member of your church.  If you wish to blank a date, locate the cursor at the
beginning of the date field and press Ctrl/Y (while holding down the Ctrl key,
tap the Y key).

BE SURE you look at the bottom of the screen if you don't know what to do next.
The messages there usually tell you all of the options available at any time.

                      When All Else Fails - Press F1 for Help!

If you have below DOS 3.3, the F1 Help screens are not functional.

Insert the ProDev*MEMBER disk in drive A: and type ...

     INSTALL C:   (Enter)

This will run the INSTALL program that will create the C:\MEMBER sub-directory
and copy (and un-compress) all of the necessary files to the C:\MEMBER
sub-directory (or whatever drive letter you type).

To run the ProDev*MEMBER system from the hard disk, type the drive letter of
the hard disk followed by a colon. For example "C:". You should see the hard
disk prompt (such as "C>"). Then, type:

     CD\MEMBER   (Enter)
     MEMB        (Enter)

System Files

The CONFIG.SYS File

THE MEMBER PROGRAM WILL CRASH with a "file open error" at the middle of the
screen when you try to Create, Modify or Print Labels or Reports, you will need
to re-start the computer with a CONFIG.SYS file as described below.  It will
contain information that tells the PC that there will be more than 3 files open
at the same time.

To create the CONFIG.SYS file, use the MEMBER program "Tools Menu", "Modify
System Files" Sub-Menu to create or modify your CONFIG.SYS file.  Highlight
that selection and press Enter.  You will be asked for the Password.  This is
the word PASSWORD (if unregistered) or the Password you specified when you
registered the program.  Press C to Create/Modify the CONFIG.SYS file.

If you are creating the CONFIG.SYS file, just type in the following two
commands and press F10 to save.  If you are modifying the CONFIG.SYS file,
either modify these two lines (if they exist) or add them to the end of the
CONFIG.SYS file.  Press F10 to save the changes. YOU MUST RE-START YOUR
COMPUTER for the changes to take effect.

     FILES=25
     BUFFERS=15

The FILES command can be higher than 25 if required by other software on your
computer.  Having a large BUFFERS command usually slows your system and higher
than 15 is not recommended.  Actually, only 23 FILES is required, however,
Windows and other shell type hard disk managers use files.

IF YOU HAVE BELOW MS/IBM-DOS VERSION 3.3, the program can have only 20 files
open at a time.  To stay within this limit, the program will disable the HELP
screens to keep from opening too many files at a time.

The AUTOEXEC.BAT File

Your computer looks at both the CONFIG.SYS file and the AUTOEXEC.BAT file at
start-up time.  The AUTOEXEC.BAT file contains the commands that usually take
you into a hard disk menu, Windows or some other shell type hard disk manager.
If you have DOS 3.3 or higher, you need the command SET CLIPPER=F:25 in your
AUTOEXEC.BAT file.

As above, use the MEMBER program "Tools Menu", "Modify System Files" Sub-Menu
to create or modify your AUTOEXEC.BAT file.  Highlight that selection and press
Enter.  You will be asked for the password.  This is the the word PASSWORD or
the Password you specified when you registered the program.  Then, press A to
Create/Modify the AUTOEXEC.BAT file.

If you do not already have an AUTOEXEC.BAT file, just add the command SET
CLIPPER=F:25 and press F10 to save. If you are modifying an existing
AUTOEXEC.BAT file, move to the beginning of the last line and press Enter. This
should open up a blank line just above the last line.  Use the Up Arrow to move
to the beginning of the blank line and type SET CLIPPER=F:25.  Press F10 to
save.

This needs to be BEFORE the last line, as the existing last line probably
transfers control of the computer to your menu system or Windows. IF YOU HAVE
BELOW DOS 3.3 you don't need the SET CLIPPER command as your older version of
DOS will allow only 20 open files anyway.  To prevent the MEMBER program from
crashing, it will automatically disable the F1 Help screens that use 3 files.

First Time Program Set-Up Options

The first time you run the MEMBER program, a file named MEMBER.MEM file should
not be on your hard disk.  This will cause the program to ask you for the
program Set-Up defaults.  Highlight the "Set-Up" Main Menu and you will see the
screen shown below.  Highlight each Sub-Menu with the cursor arrow keys and
press Enter.

Color/Monochrome Monitor - Highlight the "Monitor (Color/Mono)" Sub-Menu and
press Enter.  Press C for a color monitor or an M if you have a monochrome
(non-color) monitor.  Highlight "Save New Set-Ups" and press Enter to add this
to the MEMBER.MEM file.

Data File Drive & Path - Highlight the "Data File Drive & Path" Sub-Menu and
press Enter.  The program will display the Drive and Sub-Directory where the
ProDev*MEMBER system is installed.

Printer Action Table - Highlight the "Printer Action Table" Sub-Menu and press
Enter.  Using the cursor arrow keys, highlight the name of your printer.  If
you do not see the name of your printer and have a dot matrix printer, start
with the EPSONFX file.  Appendix A of the manual will describe how you can
create your own Printer Action Table file if you have a printer not shown.
Highlight "Save New Set-Ups" and press Enter to add this to the MEMBER.MEM
file.

Label Printing Defaults - There are many types of label stock for both dot
matrix and laser printers.  You need to select the type of stock for your
printer and needs.

Establish Church Name - Highlight this Sub-Menu and press Enter.  Type the name
of your church.  This will appear at the top of many reports.  Although the
screen field is only 35 characters wide, you can type up to 50 characters for
your church name as the field will scroll.  When you press Enter, you can type
in the name or two letter abbreviation for your State.  This is so the
Pictorial Directory will only print the State if it is different than your own.

Change Field Titles - Highlight "Change Field Titles" on the Setup Menu and
press Enter.  If you intend to use Titles, such as Mr., Mrs., etc., place a Y
in the Use Titles field.  Otherwise use N.  Some churches use "Joined" where
your church may use the term "Confirmed".  Spec Info Code Width can be 1, 2 or
3 depending on how many codes you wish to create and how many you wish to
assign to each person.  Two is recommended.  See the detailed discussion of
this under Special Information Codes on page 12 of the manual.

Some churches use "Flier List" to indicate those that are to receive the
monthly newsletter.  You may wish to call it "Mail List".

Many churches have a building improvement fund. Thus, the "Bld List" title.
You may want to call it "Mem List" for a Memorial Fund list.  When you get to
Section 7 on Giving Statements, you will find that giving is tracked under 3
categories (General, Bld Giving and Other).  The title on the Post Giving
screen and on the Statement could be changed from Bld Giving to "Mem. Fund".

The Sunday School list is used by many churches to send letters or newsletters
to the parents of Sunday School attendees.  You may want to call it "Bus List"
for those that should be picked up by the Bus each Sunday morning (children
and/or adults).

The Service Titles are the titles of up to 3 events for tracking attendance.
These titles will appear on the screen while you post the attendance.

The Giving #4, #5 and #6 are the titles of 3 additional categories of Giving.
If you leave ALL 3 of these titles blank, your Giving posting screen and
statements will show only the General, Building and Other categories of giving.
If you use at least one of the extra Giving Titles, the Giving Posting screen
and the Statements will be expanded to show all 6 categories of giving.
Compressed printing is used if all 6 categories are printed to keep the
statement to only one report line per giving day.

Status Code Table - When you are working with the Create Member or Modify
Member (not Browse Member) screens, you can pop-up a Status Code table, pick
the code you desire and press Enter to use that code in the member record.  Use
this selection to manage this pick list table.

Special Information Code Table - When you are working with the Create Member or
Modify Member (not Browse Member) screens, you can pop-up a Special Information
Code table, pick the code you desire and press Enter to use that code in the
member record.  Use this selection to manage this pick list table.

On the upper right of the "Change Field Titles" Setup screen, you can specify
if you want 1, 2 or 3 character Special Information Codes.  One character codes
would really limit you to A-Z and 0-9 for codes.  Two character codes give you
AA-Z9; LOTS of codes.  Three character codes give you even more combinations.

However, each person has a 21 character field for Special Info Codes.  With 1
character codes, EACH person could have up to 21 codes.  With 2 character
codes, you can have 10 codes per person and with 3 character codes, you can
have only 7 codes per person.  Pro Dev Software recommends the compromise of 2
character codes.  This allows over 1200 possible codes for the Special
Information Code table and allows you to assign up to 10 codes to each person.

Save New Setups - After changing any of your Setups, be sure to highlight Save
New Setups and press Enter.  This will save the new setups to the file
MEMBER.MEM.

Highlight the "Create Member Record" Sub-Menu and press Enter.  Press the PgDn
key when you wish to create the next record. If you press F10 or PgDn on a
blank record, you will be returned to the Main Menu.  Fill in each of the
fields (or windows).  If you do not fill a field, press Enter to move to the
next field.  You can use the Down Arrow to move to the next field and the Up
Arrow to move back a field.  After the last Spouse field, you will move to the
first field on the screen (Last Name).  Press PgDn to move to the next new
record.

When you are printing labels, you will be given the choice of printing the
Street Address (probably in the first Address field) and/or the PO Box
(probably in the second Address field).  To do this, the program looks for
either "P.O." as the first 4 characters or "PO " (PO and a space) as the first
3 characters in the field.  Therefore, you must be careful to enter PO Box
addresses using one of these two forms.  The line (Address or PO Box) printed
just above the City, State and ZIP will be used by the Postal Service to
deliver the piece.

The "Zone" is a designation for a geographical area around your church.  You
may have certain persons designated to call on certain zone(s).

If a person has officially joined your church, you MUST show a "Joined" date.
Many reports trigger on if this field has a date or not to tell if a person is
a member or not.  The same is true of the "Joined" field in the Spouse's and
Child's section of the screen.  If you wish to blank a date, place the cursor
at the beginning of the field and press Ctrl/Y (while holding down the Ctrl key
tap the Y key).  If you wish to call this something other than "Joined" be sure
to read Page 2-9 of the manual to find out how to change the title of this
field.

If you are on the Status Code field, you can press F7 to pop-up a table of
Status Codes.  Press the first letter of the desired code description and use
the Down Arrow to select the exact code and press Enter to pick.
Special Information Codes - DANGER - Be sure to use the F7 pop-up table to pick
Special Information Codes.  Although you can type them manually, the spacing is
VERY important.  If you have selected (with the Change Field Titles Setup Menu)
2 or 3 character codes, your manual spacing must be exactly 2 or 3 characters
per code and codes shorter than the selected 2 or 3 character width must be
right justified in the 2 or 3 character spacing.  When reports are written, the
program expects the proper spacing and your errors at this point will cause
scrambled reports.  Thus, let the F7 pop-up table do all the work accurately
and easily.  It will insure the correct alignment.  With the blinking cursor on
the Special Information Code field, press F7.  Press the first letter of the
desired code description and use the Down Arrow to select the exact code and
press Enter to pick.

The M/F field is used to indicate the gender of the person. F=Female and
M=Male.  If the wife is shown on the upper part of the screen because the
husband is not a member and he is shown on the Spouse portion of the screen, it
is VERY IMPORTANT to put an "F" in the upper part of the screen for the wife.
On certain label runs and reports, you will be given the option to print the
husband's name first, even though he is on the lower or Spouse part of the
screen. Only if an "F" is in the M/F upper field, when the wife is on the upper
part of the screen, will the names be optionally reversed when printed.

There is a "Spouse Last Name" field in those cases where the spouse's last name
is different than the upper screen Last Name.  "Husband Name First" reports
with the different Last Name husband on the lower part of the screen will print
out of order.

A "Y" is required in the Directory field to have the record included in printed
directories.

The Reference Number (you can change this field title) is used by some
denominations with this number being assigned when a person "joins" the church.

A "Y" in the Flier List field will cause this member's record to be used when
printing the Flier Labels.  These are labels for your newsletter.  A "Y" in the
Bld List field will cause this member record to be included on the Bld label
run.  Section 2 shows you how to change the screen name for this field.  A "Y"
in the Sunday School List field will cause this record to be included in the
Sunday School List label run. See Section 2 to change the screen name for this
field.

Child Records - When you wish to create or modify a Child Record, press F6 WHEN
you have the Parents member record on the screen.  All of the information about
children are kept in records in the CHILD.DBF data base file.  The Spouse
portion of the screen is replaced with the Child record.  A new blank CHILD
record is displayed.  Use the Last Name field ONLY if the child's last name is
different from the last name on the upper part of the screen.  You can PgDn to
add additional records.

If you PgUp, you can review/modify any previously added children.



If the child (children) has joined and live(s) with non-Member adult(s), be
sure to put "F" as the Status for the adult part of the record.  This will
cause just the child name(s) to be listed in the Directory reports.  The
non-Member adult(s) will not be listed.  To get the Flier labels to list one of
the child names, rather than the non-Member Adult(s), place the name of the
oldest child as the first name on the Adult part of the record.


                              Register Now!

When you register, you will receive a 96 page bound manual, technical support
and the latest registered version.

You can use the INSTALL program or MEMBER program Tools Menu to print the full
on-disk manual.  This will use a lot of your printer paper.

```
{% endraw %}

## README.DOC

{% raw %}
```
              ProDev*MEMBER Installation & Upgrade Instructions

The INSTALL.EXE program can be used to BOTH initially install or to upgrade
the ProDev*MEMBER Church Membership system.  It will also print the manual.
Place the ProDev*MEMBER Shareware disk (Disk #1) in drive A:. Type  . . .

   A: (Enter)
   INSTALL C: (Enter)

Follow the screen instructions.  Do NOT run the INSTALL program from within
your hard disk menu, Windows or shell type disk manager.  Exit to the C:
prompt first.

The INSTALL program will create the C:\MEMBER sub-directory for you (or
whatever drive letter you specify).  You MUST have a hard drive.  The system
is too large to install on floppy disks.

This is a TWO DISK system for 5 1/4 inch floppy disks and a ONE DISK system
for 3 1/2 inch disks.  If you obtained only ONE 5 1/4 inch disk from a
shareware Disk Copying Service, contact them for the second disk.  If you
received a single 3 1/2 inch disk, you may have the complete system.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3319

     Volume in drive A has no label
     Directory of A:\

    VERSION2 0          81   4-15-92  12:00p
    MEMBDOC  EXE     65148   4-15-92  12:00p
    LIST     COM     11761   8-13-91   7:06a
    LHA213   EXE     44381   7-20-91   2:13a
    QUIKSTRT DOC     16412   4-15-92  12:00p
    README   DOC       999   4-15-92  12:00p
    GO       BAT        36  11-14-92   5:33p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     140858 bytes
                           17408 bytes free
