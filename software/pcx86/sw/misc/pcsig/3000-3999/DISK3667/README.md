---
layout: page
title: "PC-SIG Diskette Library (Disk #3667)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3667/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3667"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## E.DOC

{% raw %}
```
INTRODUCTION

   Welcome to the Hours/Expenses/Miles program!  This program is designed 
   primarily for sales professionals and consultants needing to keep track 
   of their expenses and billable hours.

WHAT IT DOES

   HEM keeps track of expenses such as meals, parking, tolls, hotel, etc.
   The expenses are gathered day by day and categorized according to the
   client that the expense should be charged to.

   Billable time is also tracked.  Simply enter the hours worked and any
   miscellaneous charges.  HEM will automatically calculate the taxes
   and total charge.

TO RUN

   Simply enter the command:

            E

   from the DOS prompt.  The Hours/Expense/Mileage program will start
   automatically.


CONTENTS

   The following files should be present:

            NAME              DESCRIPTION
            ============      ==================================
            e.exe             actual expense program
            e.set             tutorial slide-show set
            e.hlp             Online help file (do not modify)
            friend.bat        Makes copies of system for friends
            prorun.exe        tutorial slide-show program
            e.doc             this file
            expense.hdr       Expense database
            expense.dt           "       "
            billing.dt           "       "
            billing.nx1          "       "
            expense.nx1          "       "
            expense.nx2          "       "
            billing.nx0          "       "
            expense.nx0          "       "
            ebackup.bat       Backup batch program 

TUTORIAL

   The system comes with a short slide-show tutorial.  The slide-show
   will give you some hints on how to run the system effectively.

   To run the tutorial, press ALT-S from any of the HEM prompts.

DATA EXPORT

   The REPORTS menu contains an EXPORT command that will allow you to
   send the information to DBASE or a spreadsheet.  The information is
   dumped out in COMMA-DELIMITED format in the following order:

   EXPENSE OUTPUT

        1)  Expense type
        2)  date
        3)  amount
        4)  payment
        5)  chargeto
        6)  purpose
        7)  location
        8)  memo
        9)  "T" if paid, "F" otherwise
        10) date if paid, otherwise blank
        11) categories,  i.e. "ABC"

    MILEAGE OUTPUT

        1) chargeto
        2) date
        3) starting odometer
        4) ending odometer
        5) number of miles
        6) rate of charge per mile
        7) total charge
        8) chargeto
        9) purpose
       10) location
       11) memo
       12) "T" if paid, "F" otherwise
       13) date if paid, otherwise blank
       14) categories,  i.e. "ABC"

    BILLING OUTPUT

        1) chargeto
        2) when
        3) number of hours to bill
        4) billing rate
        5) misc charges
        6) tax charge
        7) total charge
        8) chargeto
        9) purpose
       10) location
       11) memo
       12) "T" if paid, "F" otherwise
       13) date if paid, otherwise blank
       14) categories,  i.e. "ABC"

USER INTERFACE

   Press the ESC key at all times to exit what you are doing.  Press
   the F1 key for on-line help at all times.  

   If you have a mouse available, setup the MOUSE in the SYSTEM SETUP
   MENU.

   The ENTER key will allow you to "enter" a menu or update an expense.
   If the prompt ends with "...", press the F10 key to bring up a 
   popup menu or popup calendar.

BACKUPS

   Make sure that you make regular backups of your data.  When you quit 
   the program you will be asked if you wish to make a backup.  Answer
   'y' and the batch file EBACKUP.BAT will be run.  This batch file 
   will copy the data files to drive A. You may modify the batch file 
   to suit your personal needs.

DISCLAIMER

   This program is provided AS IS, with no warranty expressed or implied.
   Contact Plus Corporation specifically disclaims any and all warranties, 
   including but not limited to, fitness for a particular purpose.
   In no event, shall Contact Plus Corporation be liable for any loss of 
   profit or any other commercial damage, including but not limited to
   special, incidental, consequential or other damages.

REGISTRATION 

   This program is being distributed as shareware - meaning that you may 
   try before you buy the system.  If you don't have use for the system,
   you can simply discard it with no risk.  If you decide that this software
   is useful, you must register.  Registration entitles you to an update
   disk and phone support.  The price to register this program is only $39.

   To register, send a check for $39 (US funds) to :

       Contact Plus Corporation
       PO Box 372577
       Satellite Beach, FL  32937
       USA

       (407) 779-4900 voice
       (407) 779-3311 fax
       (407) 779-4422 BBS 9600 baud 24 hours

   Contact Plus Corporation also distributes the following programs.  Many of
   which have been reviewed in major publications such as InfoWorld,
   Business Marketing, and national newspapers.  Versions of all the 
   programs below are available through the major bulletin boards.

   CONTACT PLUS (R) - A contact management program called "The Year's 
           Best Buy" by Business Marketing Magazine - January 1989.
           Keeps track of phone calls, letters, appointments.  Includes
           a phone dialer, and plenty of calendars.  Interfaces to
           WordPerfect(TM).  

   VMSYS PLUS - A vehicle management system keeping track of mileage,
           MPG, warranties, scheduled services, repairs, oil changes.

   PERINV - A personal inventory system including depreciation schedules.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3667

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        33   5-21-93   9:58a
    BILLING  DT       1403   5-21-93   9:57a
    BILLING  NX0       357   5-21-93   9:57a
    BILLING  NX1       553   5-21-93   9:57a
    E        DOC      5878  10-16-92   3:44p
    E        HLP     33108   6-10-92  10:54a
    E        SET     42344  10-08-91   9:28a
    EBACKUP  BAT       111   1-06-92  12:24p
    EXPENSE  DT       1976   5-21-93   9:57a
    EXPENSE  HDR      2853   5-21-93   9:57a
    EXPENSE  NX0       357   5-21-93   9:57a
    EXPENSE  NX1       553   5-21-93   9:57a
    EXPENSE  NX2       553   5-21-93   9:57a
    PRORUN   EXE     27611  10-08-91   9:28a
    FRIEND   BAT       794  12-28-92  10:10a
    START    BAT         3  10-16-92   3:43p
    E        EXE     95492  11-09-92   3:38p
    SHOW     EXE      2040   9-12-88  10:48a
           18 file(s)     216019 bytes
                           97280 bytes free
