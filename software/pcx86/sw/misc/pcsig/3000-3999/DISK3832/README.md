---
layout: page
title: "PC-SIG Diskette Library (Disk #3832)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3832/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3832"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ABOUTSC.TXT

{% raw %}
```
                            SmartCat for Windows


I know that file is here somewhere!

If you are like most PC users you start out with a small collection
of floppy disks, including those that came with your PC when you
bought it, like DOS and Windows distribution disks. You also
probably thought that you could never fill your hard disk!

As time passed you started to collect all sorts of goodies -
shareware disks, magazine cover disks, new packages and the like,
and you were creating your own data in the form of letters,
spreadsheets etc. Your floppy disk collection started to grow and
your hard disk seemed to be shrinking!

Struggling for room on your hard disk you decided a clear up was in
order, and with the benefit of an archiving tool, another box full
of floppy disks and some drastic pruning you managed to make some
free space on your hard disk.

Unfortunately now you haven't a clue what floppy contains what
files and the time it takes to do anything is growing. You are also
fairly sure most of your floppies are only half full, but there is
little you can do about it except accept the waste and buy another
box.

If this sounds like you, don't worry, you aren't alone, and a
solution is at hand -

SMARTCAT for WINDOWS - Bringing order to chaos.

SMARTCAT is a sophisticated new floppy disk management system for
the Microsoft Windows operating environment. SmartCat was designed
from the start as a Windows application, not a conversion of a Dos
product. It makes full use of all the features of Windows to
provide power and extensive functionality with the ease of use and
familiar style of operation that the environment allows.

With SmartCat you can effectively manage your floppy disk
collection, improve your productivity, reduce media wastage,
simplify the use of archive tools and much much more. You will be
putting yourself back in control of your data and allowing your
creativity and talents the time to be effective.

SmartCat's Features

Some of SmartCat's advanced features include:-

Full Windows MDI support, allowing the user multiple views of
catalog data.

Virus scanner interface. SmartCat can optionally automatically call
a virus scanning program before cataloging disks.

Multiple drive support. Both floppy and hard disks can be
cataloged.

Archive support, for the ZIP, ARC, LZH, PAK and ARJ archive
formats. Archive files can be analysed when a disk is cataloged and
the internal files recorded.

Windows association support, where a file which is associated with
a particular application can automatically cause the application to
start with the selected file as its input (the same as
'double-clicking' a file which has a specified association while in
File Manager).

Support for multiple discrete catalogs, and the ability to merge
them for searching, reporting or statistical purposes.

File processing support. Once you have found a particular file you
probably want to do something with it! Smartcat makes it easy to do
almost anything with a file including copying it, moving it,
deleting it, renaming it, running it (if it's executable),
processing it (if it's associated with a particular application),
extracting it if archived, exploding it if it itself is an archive
or printing it. If the file is in an archive it will automatically
be extracted first if appropriate to the requested operation. And
if there is something that you want to do with a file that is not
in the list you can probably achieve it with the user extensibility
feature!

User extensibility. SmartCat allows extension of its file
processing features with the provision of seven "user buttons" the
text and action of which the user can configure himself. As
delivered the caption of the first "user button" is set to "VIEW"
and pressing it causes the NOTEPAD program to start with the
specified file as its input. The second user button is set to
"SCAN" and is configured to call McAfee's Virus scanning
program.The other six buttons are set to "USER2" - "USER7", and
when pressed initiate the WRITE program. As with all other file
processing support if the file in question needs extracting from an
archive first then SmartCat will do so.

User configurability. Certain parameters are modifiable by the user
to accomodate different working approaches. In particular
configuration of the options of the archive extraction utilities
accomodates different requirements.

Sophisticated searching capabilities. SmartCat fully supports Dos
Wildcards when searching for files. Additionally, more complex
searches can be requested by the specification of ranges of
filedates and filesizes in addition to filenames.


Sorting support. SmartCat allows sorting of all lists of files,
however produced, in a number of useful orders.

Full ClipBoard support. Any list of files produced from analysis of
the catalog can be copied to the Windows ClipBoard, in the sort
order requested by the user.

Reporting capabilities. Any list of disks or files generated can be
printed on request.

Full Windows Help.

Maintaining the Catalog

Cataloging a disk is requested from an option in the "Maintain"
Menu. A dialog box appears which allows specification of the drive
to use,  what to do if an unlabelled disk is presented for
cataloging (SmartCat can optionally write a volume label to
unlabelled disks before cataloging), whether to analyse the various
archive formats, and whether to display each file as it is
presented.

Updating a disk presents a similar dialog, and SmartCat will check
the disk label to ensure the correct disk is inserted.

Deleting a disk is a simple menu option, with a confirming query.

There is also the option to renumber a disk in the catalog.

Viewing The Catalog

Viewing the contents of the catalog is a simple matter of scrolling
up and down the catalog list, which displays the disks you have
cataloged in the order you choose. You can choose to arrange the
disks in Name,  Number,  FreeSpace or Date order.

Statistics detailing the content of the catalog are easily
obtained.

To view the contents of a disk all that is required is a
"double-click" on that disk in the catalog window.

Searching the Catalog

There are two options for searching the catalog, a simple search
and a complex search. The simple search option brings up a dialog
box which accepts a filname pattern to search for. Standard Dos
Wildcards are accepted, giving a range of search options, from a
specific file (e.g. LOTUS.WK1), to all PCX files (*.PCX) etc.
 
The result of the serach is displayed as before in an MDI child
window.

A request for a complex search produces the following dialog box
which allows the specification of filename pattern (as before)
and/or minimum and maximum filesizes, and earliest and latest
filedates. The result of the search again appears in an MDI child
window.

A view of the internal components of archive files is also
available as a selection from the View Menu.

I've found the file, now I want to do something with it!

Once a required file has been located, a simple "double-click" on
it (or selecting "process file" from the "maintain" menu) displays
a dialog box from where the user is presented with 16 actions (7 of
which are user defineable) for further processing the file. Option
are only available if appropriate.

Window Management and Help

As usual with an MDI based application all the normal Window
Management options exist under the "Window" menu, including the
usual Cascade, Tile, Tile on Top (Windows 3.1 only) and Arrange
Icons options. Some additional options are also available to allow
manipulation of "Classes" of  Window (i.e. all Search windows).

As usual with Windows based applications, there is comprehensive
online help in the usual Windows format.
```
{% endraw %}

## OMBUDS.DOC

{% raw %}
```
 "This program is produced by a member of the Association of
Shareware Professionals (ASP).  ASP wants to make sure that the
shareware principle works for you. If you are unable to resolve a
shareware-related problem with an ASP member by contacting the
member directly, ASP may be able to help. The ASP Ombudsman can
help you resolve a dispute or problem with an ASP member, but does
not provide technical support for members' products. Please write
to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442- 9427
or send a Compuserve message via CompuServe Mail to ASP Ombudsman
70007,3536"

```
{% endraw %}

## ORDRFORM.TXT

{% raw %}
```
To:  	Shareable Software International, Inc
	PO Box 59102
	Schaumburg IL 60159
	USA.


Please send me ___ registered copy(s) of SmartCat, together
with my registration bonuses of:-

A printed manual with screen-shots.
A SmartCat Configuration Editor.
A SmartCat Catalog Splitter.
A Find Duplicate facility.
A Catalog Export facility.
Additional User Process buttons.
Support and my 30 day money back guarantee!

Choose:  ___ 5¼  or  ___ 3½  Disk

Price: $39.95 per registered copy, plus $4.00 S&H.
(Please enquire for site-licences)

Total Number of disks :    .....................

Total Price :              .....................

Shipping:                  $4.00

Total:                     _______________

I wish to pay by Check/Mastercard/Visa  (delete where applicable)

Card Number : .............................Expiry Date : ......

Cardholders signature:     .....................

Please send my disks and registration bonuses to :

Name :    ..........................................

Address:  .....................................................

	  .....................................................

	  .....................................................

	  .....................................................

Zip Code: ...............   Day Time Tel. No. .................


You can also place your credit card order by calling
1-800-622-2793 (orders Only) Phone: (708) 397 1221 or
FAX:(708) 397 0381  Compuserve: 76226,2652
EXEC-PC: Bill Dickson

Runway BBS Conference 77, Shareable Software International:
215-623-6203 2400 baud
215-623-9462 9600 V.32
215-623-4897 HST
```
{% endraw %}

## README.TXT

{% raw %}
```
This file has been installed as README.TXT, and you can view it again at
any time by double-clicking on the README Icon in SmartCat's group in
Program Manager. Please take the time to read it. Use the scroll-bar at
the right to move down the text.

SmartCat is Shareware!

The registration fee for SmartCat is $39-95 + $4-00 Shipping & Handling. You
are entitled to evaluate SmartCat for a period of up to 30 days. If after
that time you intend to continue to use the program you must register it. 
If you do not intend to continue to use the program you must delete it from
your system. 

You can access an order form which you can use to register SmartCat from within 
the program itself. There is also a file ORDRFORM.TXT on the distribution disk
which you can use and which contains address, phone, fax and E-Mail contacts. 
Alternatively a handwritten note will do just fine.

The shareware copy of SmartCat that you have is not restricted in any way. 
However there are significant benefits to registering your copy.

Upon registration you will receive:-

A copy of the most up-to-date version of SmartCat, without the start-up screens.

A printed manual (with screen-shots).

A SmartCat configuration Editor, to allow you to modify the user-defineable
elements of SmartCat "on-the-fly" without needing to edit the .INI file.

A SmartCat catalog splitter, to allow you to divide catalogs if they become too
large to manage, without having to re-catalog your disks.

Routines to allow you to find duplicate files amongst your cataloged disks. and
If appropriate you can then reclaim the wasted space they use.

Routines to allow you to export the catalog information in Comma Delimited
ASCII format, an almost universal standard file format for transferring data
to and from database packages.

Additional user-defineable file processing buttons. 

You also get support via the phone, by fax, mail or Compuserve, and we can keep
you up to date with information about enhancements and new and complementary
products. 

A 30 day money-back guarantee.

And apart from all that, the knowledge that you are helping to support the 
Shareware concept, a distribution system that brings you quality software 
at realistic prices.

So what is Shareware? 

Shareware is copyrighted software which is distributed by authors through
bulletin boards, on-line services, disk vendors, and by copies being
passed among friends. It is commercial software that you are allowed to try
before you pay for it. This makes shareware the ultimate in money back
guarantees.

Shareware is a distribution method, not a type of software.
There is good and bad shareware, just as there is good and bad retail
software. The primary difference between shareware and retail software
is that with shareware you know if it's good or bad before you pay for it.

You benefit because you get to use the software to determine whether it
meets your needs, before you pay for it.  Authors benefit because they are
able to get their products into your hands without the expenses it takes
to launch a traditional retail software product.

The shareware system and the continued availability of quality shareware 
products depend on your willingness to register and pay for the shareware
you use. It is the registration fees you pay which allow us to support and
continue to develop our products. Please show your support for shareware by
registering those programs you actually use and by passing them on to
others. Shareware is kept alive by your support!
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```





                        S M A R T C A T
                   ---------------------------

                           Version 1.1
                          --------------

               V E N D O R    I N F O R M A T I O N
              --------------------------------------



This file provides information for Shareware Distributors, Disk
Vendors, BBS Sysops and Computer Clubs who wish to distribute the
SMARTCAT package.


-----------------------------------------------------------------
                  Part 1:  Program Information:
-----------------------------------------------------------------


Program Name, Category:
-----------------------

   SMARTCAT, Windows, Utility (Disk)


Preferred File Name For BBSs Etc:
_________________________________

   SMTCATxx.ZIP, where xx is the version number. For example,
version 1.1 would be SMTCAT11.ZIP. Of course, other file name
extensions are perfectly acceptable when compression programs
other than PKZIP are used.


Description:
------------

SMARTCAT for WINDOWS - Bringing order to chaos.

SMARTCAT is a sophisticated new floppy disk management system for the
Microsoft Windows operating environment. SmartCat was designed from the
start as a Windows application, not a conversion of a Dos product.
It makes full use of all the features of Windows to provide power and
extensive functionality with the ease of use and familiar style of
operation that the environment allows.

With SmartCat you can effectively manage your floppy disk collection,
improve your productivity, reduce media wastage, simplify the use of
archive tools and much much more. You will be putting yourself back
in control of your data and allowing your creativity and talents the
time to be effective.

SmartCat's Features

Some of SmartCat's advanced features include:-

Full Windows MDI support, allowing the user multiple views of catalog data.

Virus scanner interface. SmartCat can optionally automatically call a
virus scanning program before cataloging disks.

Multiple drive support. Both floppy and hard disks can be cataloged.

Archive support, for the ZIP, ARC, LZH, PAK and ARJ archive formats.
Archive files can be analysed when a disk is cataloged and the internal
files recorded.

Windows association support, where a file which is associated with a
particular application can automatically cause the application to start
with the selected file as its input (the same as 'double-clicking'
a file which has a specified association while in File Manager).

Support for multiple discrete catalogs, and the ability to merge them
for searching, reporting or statistical purposes.

File processing support. Once you have found a particular file you
probably want to do something with it! Smartcat makes it easy to do
almost anything with a file including copying it, moving it, deleting it,
renaming it, running it (if it's executable), processing it (if it's
associated with a particular application), extracting it if archived,
exploding it if it itself is an archive or printing it. If the file is in
an archive it will automatically be extracted first if appropriate to
the requested operation. And if there is something that you want to do
with a file that is not in the list you can probably achieve it with
the user extensibility feature!

User extensibility. SmartCat allows extension of its file processing
features with the provision of seven "user buttons" the text and action
of which the user can configure himself. As delivered the caption of the
first "user button" is set to "VIEW" and pressing it causes the NOTEPAD
program to start with the specified file as its input. The second user
button is set to "SCAN" and is configured to call McAfee's Virus scanning
program.The other six buttons are set to "USER2" - "USER7", and when pressed
initiate the WRITE program. As with all other file processing support if
the file in question needs extracting from an archive first then SmartCat
will do so.

User configurability. Certain parameters are modifiable by the user to
accomodate different working approaches. In particular configuration of
the options of the archive extraction utilities accomodates different
requirements.

Sophisticated searching capabilities. SmartCat fully supports Dos
Wildcards when searching for files.  Additionally, more complex searches
can be requested by the specification of ranges of filedates and filesizes
in addition to filenames.

Sorting support. SmartCat allows sorting of all lists of files, however
produced, in a number of useful orders.

Full ClipBoard support. Any list of files produced from analysis of the
catalog can be copied to the Windows ClipBoard, in the sort order requested
by the user.

Reporting capabilities. Any list of disks or files generated can be
printed on request.

Full Windows Help.



Short Description:
------------------

SMARTCAT v 1.1 A sophisticated new floppy disk management system for
Windows. Full Windows MDI support, Virus scanner interface, multiple drive
support, both floppy and hard disks, archive support for ZIP, ARC, LZH,
PAK and ARJ. Multiple discrete catalogs, Sophisticated searching, and
reporting capabilities, plus sorting support. Full Windows Help.  By Oakley
Data Services and Shareable Software International. <ASP>


Registration Information:
-------------------------

Registration costs $39.00 + $4.00 shipping in the USA and Canada from
Shareable Software International, Inc.  The benefits of registration include
the latest version of the software, a printed manual, free lifetime support
and reduced price upgrades.


Author/Publisher Information:
-----------------------------

Vendors in the USA or Canada should contact Bill Dickson at the following
address:

   Bill Dickson
   Shareable Software International, Inc
   PO Box 59102
   Schaumburg, IL 60159
   USA

Also by voice or electronically as follows:

   Phone:        (708) 397 1221

   Fax:          (708) 397 0381

   CompuServe:   76226,2652

   Internet:     76226.2652@compuserve.com


-----------------------------------------------------------------
                Part 2:  Distribution Requirements
-----------------------------------------------------------------

ASP Associate (Disk Vendor) Member Information:
-----------------------------------------------

Vendors who are ASP Associate Members in good standing are hereby
given permission to distribute SmartCat. ASP Associate
Members (often called "ASP Approved Vendors") in good standing do
not need to request permission to distribute this package.

This permission is in effect until or unless we notify you
otherwise, in writing.

Other (Non-ASP) Disk Vendor Information:
----------------------------------------

Shareware Distributors and Disk Vendors who are not ASP Associate
Members, but who wish to distribute SmartCat must comply with
the following restrictions:

In order for us to ensure that only current versions are
distributed, we request that you contact Shareable Software International
before distributing any of our products.

You may not list any of our products in advertisements, catalogs,
or other literature which describes our products as "FREE
SOFTWARE".  Shareware is "Try-Before-You-Buy" software, it is not
free.


Applying for ASP Associate Membership:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you would like to apply for ASP Associate Membership (to
become an ASP Approved Vendor), simply write to the following
address and request a Vendor Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

   or send a CompuServe message via CompuServe MAIL to ASP
   Executive Director 72050,1433.


Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding
SmartCat.  Please send us a copy of any reviews, articles,
catalog descriptions, or other information you print or
distribute regarding the SmartCat package.  Thank you for
your time and assistance and for supporting the shareware
marketing concept.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3832

     Volume in drive A has no label
     Directory of A:\

    ABOUTSC  TXT      7936   1-31-93  10:01p
    BWCC     DL$     54641   2-11-93   8:39p
    EXAMPLE  CA$     46636   2-11-93   8:39p
    FILE_ID  DIZ       431   1-31-93  10:05p
    INST     BMP      3662  10-15-92   8:47p
    INSTALL  BIN     39600   9-30-92   7:38p
    INSTALL  EXE      8960   9-28-92   3:49a
    INSTALL  INF       818   2-11-93   9:03p
    OMBUDS   DOC       606   1-31-93   9:50p
    ORDRFORM TXT      1660   2-16-93   9:31a
    README   TXT      3594  12-15-92   8:07p
    SMARTCAT EX$     77450   2-11-93   8:40p
    SMARTCAT HL$     23163   2-11-93   8:40p
    SMARTCAT IN$       657   2-11-93   8:40p
    SMARTCAT WR$     23985   2-11-93   8:40p
    SMCATDOS BA$        62   2-11-93   8:40p
    SMCATDOS PI$       220   2-11-93   8:40p
    VENDOR   DOC      8290   1-31-93  10:11p
    GO       BAT        69   7-07-93   3:41p
    SHOW     EXE      2040   9-12-88  10:48a
           20 file(s)     304480 bytes
                            8192 bytes free
