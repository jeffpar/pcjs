---
layout: page
title: "PC-SIG Diskette Library (Disk #287)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0287/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/0001-0999/DISK0287/DISK0287.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0287"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILE EXPRESS 1 OF 2 (ALSO 288)"

    FILE EXPRESS is a database management system, useful to both novice and
    professional user. All commands are available from an easy-to-use menu
    system that will make handling your data almost effortless.
    
    FILE EXPRESS databases can handle an incredible 16 million records with
    120 fields per record and 250 characters per field. Included is a
    powerful formula handler with if/then logic and math-and-string
    functions. A report generator allows full screen editing and makes
    reports in a wide variety of formats. If you're using FILE EXPRESS for
    an address list, print mailing labels up to five across.
    
    With all these capabilities, tedious jobs like mailing lists, order
    processing, sales journals, billing and A/R, inventories, and
    summary reports will be done with more ease than ever imagined.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES287.TXT

{% raw %}
```
Disk No:  287
Program Title:  FILE EXPRESS version 4.28 (Disk 1 of 2)
PC-SIG version: 3.5

FILE EXPRESS is a database management system that is menu-driven and
easy to use.  A mailing list and report generator are included in the
system.  It has a complete and comprehensive manual on disk #288.  It
can make your organizational tasks easier.  Highly recommended!

Features:

    o  Define new databases.
    o  Easily add, delete, edit and display information from files.
    o  Generate reports.
    o  Sort records on up to ten fields.
    o  Search or sort for specific information within a record.
    o  Designate certain fields for automatic entry of time and date.
    o  Define fields within a record to be self-calculating.
    o  Print mailing labels, up to three across.
    o  Create new databases from existing ones.
    o  Create mailmerge-type files from your datases.

Usage:  Database.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $69.95

File Descriptions:

FE       EXE  Main FILE EXPRESS program.
FE       PRO  Data file.
FE-DEF   EXE  Program definition file.
FE-LBL   EXE  Label maker for FILE EXPRESS.
FE-MAIN  EXE  Sub-program.
FE-OVL   EXE  Program overlay file.
ORDER    BAT  Batchfile to print order form.
ORDERFRM DOC  Documentation.
PRINTDOC EXE  Program to print documentation.
RESPONSE      Text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```
-

    -----------------------------------------------------------------
                         O R D E R   F O R M
    -----------------------------------------------------------------

                        E X P R E S S W A R E
                            P.O. Box 230
                         Redmond, WA  98073
                        Phone (206) 788-0932

                                                      PRICE   PRICE
    DESCRIPTION                           QUANTITY     EACH  EXTENDED
    -----------------------------------------------------------------

    File Express Disk Set                  _____      $15.00  $_______
      (Database Management)
    File Express Registered Copy           _____      $69.95  $_______
      Includes User's Guide, program
      diskette, supplemental diskette,
      technical support and newsletters

    ExpressCalc Disk Set                   _____      $15.00  $_______
      (Spreadsheet)
    ExpressCalc Registered Copy            _____      $49.00  $_______

    ExpressGraph Disk Set                  _____      $10.00  $_______
      (Business Graphics)
    ExpressGraph Registered Copy           _____      $49.00  $_______

    ExpressCheck Disk Set                  _____      $15.00  $_______
      (Checkbook Management)
    ExpressCheck Registered Copy           _____      $29.95  $_______

    On-Side Registered Copy                _____      $19.95  $_______
      (Sideways printing)

    Subtotal                                                  $_______

    Shipping and Handling:                                       $3.50

    Special handling: COD $3  *  Rush $5  *  Foreign $10      $_______

    Washington residents add 8.1% State Sales Tax             $_______

                                             Total:           $_______

    Visa _____    MC _____   Check _____   COD _____

    Card Number:  ____________________________________________________

    Expiration Date: ________________

    Signature: _______________________________________________________

    Please make checks payable to : EXPRESSWARE (U.S. funds only)

    Name:   __________________________________________________________

    Address:__________________________________________________________

            __________________________________________________________

    City:   ______________________  State: _____  Zip Code: __________


-





    If you have received this program from a User's Group or a friend
    and would like to be put on Expressware's mailing list so that
    you will receive information on upcoming releases and notification
    of new products, please fill in your name and address below and
    send to:

                        E X P R E S S W A R E
                        P.O. Box 230
                        Redmond, WA  98073




    Name ___________________________________________________________

    Address ________________________________________________________

    ________________________________________________________________

    City _________________________ State _________ Zip Code ________

    Date ________________ File Express version _____________________

    Other Expressware products used ________________________________

    ________________________________________________________________

    We would also appreciate any input you would care to offer about
    File Express. If you have any ideas or comments that would make
    them better programs, please let us know.

    We are working hard to make Expressware software the best, most
    useful, and affordable products of their kind on the market today.
    With your input we will be well on our way to achieving that goal.


    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    __________________________________________________________________FE



```
{% endraw %}

## README.DOC

{% raw %}
```




Program name:	File Express (tm)
	       (C) Copyright 1991 Expressware Corporation

Developer   :   Expressware Corporation
                P.O. Box 1800
                Duvall, WA 98019
                (206) 788-0932  office
                (206) 788-4493  fax
                (206) 788-4008  BBS
                (800) 753-FILE  orders only

Price       :   $99.00




What is File Express?

File Express is a database management program written for the IBM Personal 
Computer and PC-compatible computers.  Using File Express, information 
of virtually any kind can be put into the computer, printed, sorted, 
displayed and reported.  For example, a list of names and addresses can be 
entered, then they can be sorted into zip code sequence or last name 
sequence, printed out onto mailing labels, and updated as the list changes.  
The same data can be included in reports, or simply displayed on the 
computer screen when needed.  Customized form letters can also be written 
in File Express by merging names from the database file with a letter. 

File Express is very popular among first-time database users and non-
technical users.  But as File Express has continued to be improved over 
the last six years, it has also become very powerful.  Some of its early 
first-time  users have advanced to true "power users" and we have
addressed their  needs too, while maintaining the simplicity of the manual 
and the software.  


Installing File Express

The diskettes included in this package contain compressed files which
must be expanded using the File Express Installation program.  To do
this, insert the diskette labelled "0287 File Express" into drive A and
at the DOS prompt A>, type INSTALL and press <Enter>.  Then follow the
instructions on the screen.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0287

     Volume in drive A is #287  S5.0
     Directory of A:\

    README   DOC      1824   5-23-91   2:33p
    DISK     ID         34   5-18-91   5:00a
    INSTALL  EXE    110146   5-18-91   5:00a
    INSTALL  DAT     44441   5-18-91   5:00a
    FILE     001    146554   5-18-91   5:00a
    FILE     002     49391   5-18-91   5:00a
    GO       BAT        34   5-23-91   2:33p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     354464 bytes
                            3072 bytes free

![PC-SIG Library Disk #0287]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0287/DISK0287.jpg)
