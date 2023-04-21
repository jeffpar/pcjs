---
layout: page
title: "PC-SIG Diskette Library (Disk #1021)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1021/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1021"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-BILLMASTER"

    PC-BILL MASTER manages your checkbook for you. It was written because
    the author needed a system that was easy to use, had a regular checkbook
    register type display, and could handle recurring payments.
    
    PC-BILL MASTER features:
    
    ~ Familiar easy-to-use register type display
    
    ~ Ability to enter items as posted (immediately balanced) or unposted
    (totaled into an unposted balance)
    
    ~ Ability to merge multiple checkbooks
    
    ~ Easy bank statement balancing
    
    ~ Retrieval of items from all checkbooks on disk, with reports
    displayed, filed, or printed
    
    ~ A search capability based on the contents of any field including a
    partial string search
    
    ~ Up to 500 items per check register with an unlimited number of
    registers
    
    ~ Up to 100 ledger account codes and titles.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BMASTER.DOC

{% raw %}
```



                        PC-BILL MASTER USER'S GUIDE

                                 Version 3.02


                       copyright 1989 by John Davis

                            ALL RIGHTS RESERVED






INTRODUCTION

PC-BILL MASTER is, plain and simple, a system that manages your checkbook
for you. PC-BILL MASTER was written because the author wanted a system that 
was easy to use, had a regular checkbook register type display and could 
handle recurring payments.  Many other public domain and shareware programs 
were examined before development was begun, but none met the author's needs 
exactly.

     Some features of PC-BILL MASTER -

          -    Familiar easy to use register type display.
          -    Ability to enter items as posted (immediately effecting.
               the balance) or unposted future items (totaled into
               an unposted balance).
          -    Ability to merge multiple checkbooks, recurring payments can be 
               maintained in one checkbook as unposted items and merged into 
               the main checkbook when desired.
          -    Easy bank statement balancing.
          -    Reporting capability that allows retrieval of items from 
               current checkbook or all checkbooks on disk, reports displayed 
               on screen or sent to printer.
          -    Reports use a search capability that allows retrieval of 
               items based upon the contents of any field including a partial
               string search; items retrieved are also totaled.
          -    Up to 500 items per check register with an unlimited
               number of separate registers.
          -    Up to 100 ledger account codes and titles.



SHAREWARE

PC-BILL MASTER is being marketed under a unique scheme known as shareware.
This software is not public domain and is fully protected by all federal
copyright laws. You are encouraged to make copies of PC-BILL MASTER and
distribute them to anyone that you wish. The only stipulation for making 
copies is that you do not charge for making copies (except for the cost of 
copying and distribution) and you copy all files on the disk.  If you found 
PC-BILL MASTER to be usefull and plan to continue using it; it is to your 
benefit that you register your copy.  By registering your copy of PC-BILL 
MASTER you let the author know that there is enough interest in the program to 
make future enhancements and changes.  In addition, as a registered user you 
will be entitled to receive future versions for the cost of distribution 
(currently $5.00).

To register your copy of PC-BILL MASTER, send $25.00 along with your name and 
address to (a handy form has been supplied on the disk for your use) -

                    John Davis
                    1011 Brookgreen Dr.
                    Cary, N.C. 27511



CHANGES IN VERSION 3.02 OF PC-BILL MASTER (April 1989)

-    The last item of the Utilities Menu now provides for the printing of all 
     account codes and titles on a printer as well as displaying on the 
     screen.

-    All print routines now print 60 lines per page and then send a form feed 
     to the printer and reprint the page headings.

-    A bug was fixed in the program which would not allow check numbers to be 
     changed.


CHANGES IN VERSION 3.01 OF PC-BILL MASTER (March 1989)

-    A new display is now included which will present all 100 account codes 
     and titles.  This display is accessed via the last item on the Utilities 
     Menu.

-    Several "bugs" fixed including

     -    A blank type field is now changed to type "C".
     -    A blank posted field is now changed to "N".
     -    Non-posted items are now excluded when computing the statement
          balance in the statement routine.


CHANGES IN VERSION 3.00 OF PC-BILL MASTER (February 1989)

-    Streamlined menus and operation, only one program module is now needed - 
     BMASTER.EXE.  The functions of the payments module have been incorporated 
     into the main module.

-    Delete key will now delete any item; posted or unposted.

-    Insert key gives option for adding at end or after current record.

-    The Search function (function key 6) has been renamed Reports.  Items can 
     be selected from current checkbook or all checkbooks on disk.  Items 
     selected can either be displayed on screen or sent to printer (LPT1).  
     Alternatively, pressing the print key displays the print function also.

-    Date and posted fields are automatically duplicated from previous entry.

-    Changing check number to 0 on item entry, does not change the check 
     number that is duplicated for next entry.  This is especially usefull for 
     entering service charges, teller machine transactions, etc.

-    Checkbooks can now be merged.  This is usefull for handling recurring 
     payments.  One checkbook can contain all recurring payments for a month 
     as unposted items.  At the beginning of each month, the amounts of the 
     items can be changed for that months bills.  The payments checkbook can 
     then be merged to the end of the regular checkbook and the items posted 
     as they are paid.

-    Checkbooks can now be selected from a menu rather than having to key the 
     name into a field.

-    Pressing F10 saves the checkbook and exits you directly to DOS, rather 
     than the main menu.


FILES ON DISK

     README      -  Any last minute changes to the documentation
     BMASTER.DOC -  This documentation
     BMASTER.EXE -  PC-BILL MASTER program module
     REG.FRM     -  PC-BILL MASTE registration form


TO USE PC-BILL MASTER

     1)   Boot DOS,
     2)   Insert PC-BILL MASTER program disk into disk drive,
     3)   Type "BMASTER" and PC-BILL MASTER will begin execution. 
          Alternatively type "BMASTER /Q" to avoid the opening credits screen.


A NOTE ABOUT MENUS

A number of different menus appear within PC-BILL MASTER. When a menu
appears, to highlight a menu item, simply press the up or down arrow. To
select the highlighted menu item, press the enter key. To exit from the
menu, either select the last menu item or press the escape key.


PC-BILL MASTER MAIN MENU

After the program loads and displays a credit's screen you will be presented 
with the main menu.  From this menu you can load the default checkbook, 
specify a checkbook to load, specify the default checkbook or exit PC-BILL 
MASTER. It is important that you always exit PC-BILL MASTER
by using this option rather than simply turning off your machine, as
PC-BILL MASTER rewrites the configuration file while executing the last
option.  


PC-BILL MASTER CHECKBOOK

The first option on the main menu is to access the default checkbook. If this 
is the first time you have executed PC-BILL MASTER, an empty checkbook will be
created for you. At the top of the screen on the very first line will be
the account name and also the checkbook file name. On the next line the
current account balance will appear; as will the total of all unposted
items and the unposted balace (current account balance plus unposted items).
Next the bottom most portion of the register will appear, with the last
posted item in the checkbook being the last item on the screen. To scroll
through the register simply press the up and down arrow keys. As scrolling
takes place the current item appears highlighted. To scroll backwards and
forwards a screen within the register press pgup and pgdown. To go to the
beginning of the register press home and to go to the end of the register
press end.

PC-BILL MASTER actually uses two different types of displays. The initial
display is the previously mentioned register display. If you press the
escape key, the item display appears. The item display shows one item on
the screen at a time, but at a greater level of detail. Where certain
fields in the register display might have to be truncated, the item display
shows the entire field. In addition, the item display gives a list of
account codes and titles that are currently being used. The item
positioning keys mentioned previously (up and down arrows, pgup, pgdown,
home and end) work identically on the item display as they do on the
register display. To return back to the register display from the item
display simply press escape.

At the bottom of either display appears a list of function keys that
perform certain commands. Before describing the function keys however I
wish to describe the various fields associated with each item on the
screen.

     FIELD                    DESCRIPTION
     -----                    -----------

     Date           Contains the date of the item, when entering if you
                    press enter without keying anything the current
                    date is taken as the default.  It is advised that dates be 
                    entered as MM/DD/YY.  That way you can do a search based 
                    upon MM and retrieve an entire months records.

     Type           "C" for check, "D" for deposit.

     Number         Sequential check number for the item, when entering
                    if you press enter without keying anything the previous
                    number is incremented automatically by 1.

     Payee          Payee for the item.

     Amount         Amount of the item.

     Memo           Memo for the item.

     Code           Ledger account code from 00 to 99.

     Code Title     Appears to right of code on item display, does not
                    appear on the register display. When adding a new
                    item if the code has not been used before you will
                    be prompted to enter a new title if desired, titles
                    are optional though.

     Flag           Can be used for any reason needed, for example
                    a value of "T" could be used to flag tax deductions.

     Posted         "Y" means item is posted, while "N" means item is
                    unposted.

     Clear          "Y" means item has cleared bank, while " " means item
                    has not cleared.

     Balance        Account balance when item was posted, note - this is
                    not necessarily the current balance, it is only
                    the current balance at the point the item is posted.

It should be noted that regardless of which display is on the screen, the
above fields for each item will be present; except for code title which
appears only on the item display.

The following is a list of all function keys that perform certain commands
in PC-BILL MASTER. The function keys work identically from both item and
register displays.

     FUNCTION KEY             DESCRIPTION
     ------------             -----------

          F1        Displays a help screen.

          F2        Enter a new item.  A blank item display will appear.
                    You should then key values followed by the enter key
                    for each field on the screen.  By pressing enter
                    without keying a value within a field, the default
                    value for the field will be taken.  During entry (or 
                    changing) of an item, you can press the up and down arrows 
                    to position you at a field. If the field already 
                    has a value, the cursor will appear at the end of the 
                    value. Press backspace to delete the field and reenter or 
                    change the value as needed. To exit from entry (or change)
                    mode, press the escape key. The entry (or change)
                    menu will then appear. From this menu you can choose
                    to accept the entry as keyed, abort the entry or
                    to return to entry mode.  You are also given the option of 
                    adding the item to the end of the checkbook or inserting 
                    the item after the current record.

          F3        Change current item.  You can change any field except
                    for three exceptions.  First you can not change the
                    amount for a posted item.  Also you can not change
                    the posted field itself. Nor can you change the
                    type field.

          F4        Delete current item.

          F5        Post current item.  The current item can only
                    be posted if it is unposted.  When posting occurs
                    the posted field is changed to "Y", the current
                    balance is changed to reflect the amount change,
                    the balance field on the item is updated and
                    the item is removed from the unposted items
                    total. In addition, if the posted item had a
                    blank date, the last keyed date is entered as the
                    item date and the check number is incremented
                    by one and entered as the item check number.
                    Note, once an item is posted it can
                    not be unposted.  If you have made an error
                    you will have to add a new item reflecting
                    the correction amount.

          F6        Print reports. Search can be performed on most
                    of the fields on the item display. The search is
                    of the "AND" type meaning that if you have
                    search values entered into two fields both searches
                    have to be true for the item to be selected. A partial
                    string search is allowed on all string type fields.
                    For example to select all items entered during the
                    month of November, simply key "11" in the date
                    field. Note, the up and down arrow keys will position
                    you at a field just like in enter and change mode.
                    Once you have entered the search criteria, press the
                    escape key and the search will begin.  You will next be 
                    prompted if the search is to be performed on the current 
                    checkbook or all checkbooks on the disk.  You will also be 
                    prompted if the results are to be displayed on the screen 
                    or sent to the printer.  The PRINT key serves a similar 
                    function except the output is only sent to the printer and 
                    printing occurs for all items beginning at the current 
                    record.

          F7        Mark item as having cleared bank. This function key
                    is used when you balance your bank statement. By
                    positioning an item as the current item and pressing
                    this function key, the item will be marked as cleared.
                    A "Y" will appear in the cleared field on the screen.
                    A subsequent press of this function key will erase the
                    "Y". After you have marked all the items that have
                    cleared on your statement, press function key 8
                    to display the statement balance.

          F8        Displays statement balance for use in bank
                    reconciliation. After you have marked all items as
                    cleared you should enter any bank charges that appear
                    on your bank statement. The charges should be entered
                    as posted and also be marked as having cleared the
                    bank. Function key 8 will then compute a statement
                    balance which should match the balance that
                    appears on your bank statement.

          F9        Utilities menu. Will be explained below.

          F10       Save checkbook and exit PC-BILL MASTER.


UTILITIES MENU

     Function key 9 will display the utilities menu. The various menu
selections appear below.

     MENU SELECTION                     DESCRIPTION
     --------------                     -----------

Registration Information      Displays information on how to register your
                              copy of PC-BILL MASTER.


Merge Two Checkbooks          Loads to the current checkbook all items from 
                              another checkbook.  This function is very 
                              valuable for handling recurring payments.

Display Checkbook Menu        Displays a checkbook menu that is similar to the 
                              opening main menu.  The current checkbook is 
                              saved before any additional actions take place.

Set Screen Colors             You can change colors for normal text,
                              highlighted text and the background. Your
                              color changes are automatically saved when
                              the configuration file is written to disk.

Change Account Name           Allows you to change the account name of
                              the currently loaded checkbook. This does
                              not change the disk file name only the
                              name that appears at the top of the
                              register screen. To change the disk file
                              name use the DOS rename command. Note though
                              that all checkbook files must end with
                              a ".REG" suffix.

Change Accout Balance         Allows you to change the current balance
                              of the currently loaded checkbook.

Zero Amounts                  Does just as it says, this is a very
                              powerful function and should be used
                              very carefully.  I use it to zero the amounts in 
                              my recurring payments checkbook at the beginning 
                              of each month, before entering the amounts for 
                              the new month.

Update Account Titles         Allows you to update any of the
                              account titles. Use the up and down arrows
                              to position the account code desired. Then
                              either enter or change the title as
                              needed. Press escape to return to the menu.

Displays/Prints Titles        This option allows the user to display on the 
                              screen or print to the printer ALL account codes 
                              and titles.


FINALLY

I hope you find PC-BILL MASTER to be as usefull to you as I have found it
to be myself.  I would encourage you to register your copy of PC-BILL 
MASTER.  The main advantage to registering is that you will be notified when 
future versions are available and have the opportunity to acquire future 
versions for a small distribution charge (currently $5.00).  If enough people 
register version 3.02, additional versions will be forthcoming.  Some 
changes I have been thinking about include an interface to Lotus 1-2-3 and a 
check writing function.

Finally I would like to bring to your attention a new shareware program that I 
have developed.  It is called "I FOUND IT".  It is a database program written 
specifically for the home and small business.  You would have to look far and 
wide to find an easier to use database program.  It's appearance is very 
similar to PC-BILL MASTER.  It includes both table and record views of your 
data, a powerfull search facility and reports in either record, labels or 
tabular report format.  Reports can be printed for all records in the file or 
selected via a search criteria.  Tabular reports include a facility for 
printing totals if desired.  The database is composed of 19 fields with each 
field being of any length up to 70 characters.  Fields can be given any field 
names desired by the user.  "I FOUND IT" is available now, with a registration 
fee of $20.00.  If you would like a copy, send me $20.00 along with your name 
and address and I will send you a copy.  

                              John Davis
                              1011 Brookgreen Dr.
                              Cary, N.C. 27511


STATEMENT OF WARRANTY AND LIABILITY

The author makes no warranty of any kind, express or implied, including
without limitation, any warranties of merchantability and/or fitness for a
particular purpose. The author shall not be liable for any damages, whether
direct, indirect, special or consequential arising from a failure of this
program to operate in the manner desired by the user. In addition, the
author shall not be liable for any damage to data or property which may be
caused directly or indirectly by use of the program.

IN NO EVENT WILL THE AUTHOR BE LIABLE FOR ANY DAMAGES, INCLUDING ANY LOST
PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF YOUR USE OR INABILITY TO USE THE PROGRAM, OR FOR ANY CLAIM BY ANY
OTHER PARTY.


```
{% endraw %}

## FILE1021.TXT

{% raw %}
```
Disk No: 1021
Program Title: PC-BILL MASTER version 3.02
PC-SIG version: 1.5

PC-BILL MASTER is, plain and simple, a system that manages your
checkbook for you.  PC-BILL MASTER was written because the author wanted
a system that was easy to use, had a regular checkbook register type
display and could handle recurring payments.  Many other public domain
and shareware programs were examined before development was begun, but
none met the author's needs exactly.

Some features of PC-BILL MASTER

  o  Familiar easy to use register type display.
  o  Ability to enter items as posted (immediately effecting.
     the balance) or unposted future items (totaled into
     an unposted balance).
  o  Ability to merge multiple checkbooks, recurring payments can be
     maintained in one checkbook as unposted items and merged into
     the main checkbook when desired.
  o  Easy bank statement balancing.
  o  Reporting capability that allows retrieval of items from
     current checkbook or all checkbooks on disk, reports displayed
     on screen or sent to printer.
  o  Reports use a search capability that allows retrieval of
     items based upon the contents of any field including a partial
     string search; items retrieved are also totaled.
  o  Up to 500 items per check register with an unlimited
     number of separate registers.
  o  Up to 100 ledger account codes and titles.


Usage:  Checkbook Balancing

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

BMASTER  DOC  Program Documentation.
REG      FRM  Registration form.
BMASTER  EXE  Main program.
README        Information file from the author.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1021

     Volume in drive A has no label
     Directory of A:\

    BMASTER  DOC     21499   1-01-80  12:34a
    BMASTER  EXE    106369   4-02-89  12:58a
    FILE1021 TXT      1849   4-26-89   9:42a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       617   3-27-89  11:46a
    MANUAL   BAT       147   3-27-89  11:46a
    README             956   1-01-80  12:32a
    REG      FRM       819   1-01-80  12:35a
            8 file(s)     132294 bytes
                           26112 bytes free
