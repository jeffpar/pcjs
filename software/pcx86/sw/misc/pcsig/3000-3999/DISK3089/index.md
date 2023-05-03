---
layout: page
title: "PC-SIG Diskette Library (Disk #3089)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3089/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3089"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  PC-SIG Disk #3089 SHAREWARE TRACKER  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To install the program, copy the files on this disk to your hard      ║
║   drive\subdirectory.                                                   ║
║                                                                         ║
║   To then extract the files, from the hard drive\subdirectory, type:    ║
║                              SWT20  (Enter)                             ║
║                                                                         ║
║                                                                         ║
║   To print the program documentation, type:  COPY                       ║
║                                   COPY README.1ST PRN    (press Enter)  ║
║                                   COPY MANUAL.FRM PRN    (press Enter)  ║
║                                   COPY REGISTER.DOC PRN  (press Enter)  ║
║                                                                         ║
║   To start SHAREWARE TRACKER, type:  SWT  (press Enter)                 ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REVISION.TXT

{% raw %}
```
            REVISIONS TO SHAREWARE TRACKER v1.0


SHAREWARE TRACKER V2.0
----------------------

In the Registered Users database.

    The registration number field is now a numeric that will be automatically 
incremented and inserted into that record. It can be edited in the Utilities
Menu at the Set Registration # option.

    Several fields have been altered and added to allow for Overseas 
registrations.

    The ability to allow for tracking of multiple registrations and site 
licenses for each user has been added. Shipping charges were also added. 
These values will be totaled in the "Income and Expense" module
and in the "Registration Info" module.

    In the "Program Name and Version" field, the user will be allowed 
    to add any NEW programs to "Registration Info" database. If the program 
    and version already exists in that database, the user only presses the 
    <ENTER> key at the blank field. A browse screen pops up, the user selects 
    the proper program and presses <ENTER>. "Sharware Tracker" inserts the 
    program into the field in the "Registered Users" database.

    Another field has been added for the 'latest version sent to user'.
This should be helpful to the author when mail-merging update notices to 
his users. 
    I've also tried to make things a little easier, here and there.


Registration Info....,

    This is a new database that will keep tabs on the programs, number of 
registrations and totals, site licenses and totals, and shipping charges for 
EACH program and version the author has written.

Income and Expenses....,

    This screen and database has been expanded.
    This is a grand total of all the income and expenses for all the 
programs the author has written. It breaks the information into number of 
registrations, total of income for regs, site licenses, total of income 
from site licenses, income from shipping, and total of expenses.
Then it adds it all up and tells the author how he's doing.

Other Mailing Labels...,

    This replaces "Return Address Labels".
    It will allow the author to maintain a database of labels he uses often. 
One would most likely be 'return address'. But other labels could be helpful, 
such as;
                    Floppy Disk Enclosed
                    Do not magnetize, xray, bend
                        mutilate, or shoot.

 

In the 'Expenses' database..,

    The 'Type of Expenses' field is no longer limited to the types supplied 
in a pop-up.  The author can press the <ENTER> key at the blank field, 
and if that type of expense has already been entered, a box will allow the 
author to select it and insert it into the field.  If it is a new entry, 
he will be allowed to add it to the list.

In the 'Submissions' database..,

    In the 'Program Name and Version' field. Press the <ENTER> key to 
select an existing program.  The same can now be done for an 'existing' 
dealer.  Once a dealer has been entered, the author will no longer need to 
type in all the information again. Just select it from the 'browse' screen 
and slam it in.

    Check the 'Dealer Database'. Press <ENTER> in the BLANK 'Sent To' 
field. A browse screen will appear. You can locate a certain dealer by typing 
a couple of letters of the Company name and pressing <ENTER>. That will get 
you in the Neighborhood. A database of over 250 ASP Approved Vendors is 
included for the author's convenience. 

    The list of Vendors came from the ASPVEND.DBF and ASPBBS.DBF.
  
    If a dealer's info needs to be edited, it can be done in the 'Dealer 
Database'.   
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Program name....: Shareware Tracker
Version.........: 2.0
Registration fee: $29.00
Requirements....: Hard drive
Benefits for
 registration...: Tech support (voice, Fax, mail, or CompuServe mail),
			latest upgrade sent to new user, newsletters
			of future upgrades.
Author..........: Bill Sturgell
		  BlueCollar Software
		  1323 S. Rt. 68
		  Urbana, OH 43078
		  (513) 653-8388 (voice or Fax)
		  CompuServe Mail: 72630,1714
		  ASP Member
Permission......: You have permission to distribute this program in any
			way you wish, providing you stay within the
			guidelines established by the Association of
			Shareware Professionals.
Short descrptn..: For the shareware author. Tracks registered users,
			income, expenses, submissions. Mail-merged letters
			to all. Unlimited user-defined reports. Much more.
Long description:  For the Shareware author. Tracks users, registrations,
			site licenses, shipping, submissions, income,
			expenses, profits, and more.  It comes with a
			database of over 540 ASP approved vendors. Quick,
			easy data entry. Has pull-down menus, context                                    
			sensitive on-line help. Can create an unlimited 
			number of user-defined reports. A small word 
			processor mail-merges letters to users and vendors.
			And much more. Hard Drive required  SH $29.00

    PLEASE ADVISE ON ACCEPTANCE SO THAT I CAN SEND YOU THE UPGRADES WHEN
    THEY BECOME AVAILABLE.
	      _______
	 ____|__     |               (R)
      --|       |    |-------------------          Thank you,
	|   ____|__  |  Association of
	|  |       |_|  Shareware
	|__|   o   |    Professionals
      -----|   |   |---------------------          Bill Sturgell
	   |___|___|    MEMBER


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3089

     Volume in drive A has no label
     Directory of A:\

    REVISION TXT      3660   8-23-92   6:51a
    SWT20    EXE    320043   8-31-92   9:11a
    VENDOR   DOC      1768   8-23-92   6:37a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1617   8-31-92   3:32a
            5 file(s)     327119 bytes
                           32768 bytes free
