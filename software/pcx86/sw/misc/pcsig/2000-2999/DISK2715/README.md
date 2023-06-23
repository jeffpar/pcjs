---
layout: page
title: "PC-SIG Diskette Library (Disk #2715)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2715/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2715"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## KIT.DOC

{% raw %}
```
About The Kit

	The Electronic Catalog Construction Kit is a program which
allows you create your own electronic catalog and computer
generated order form on either a hard or floppy disk.  The catalog
which you generate is a simple spreadsheet of items.   Your
customers can fill in the spread sheet with their computer and the
subtotal and tax is automatically computed.   They can press a
single key and get very detailed information about a product.  They
can press another key and get a printout of an invoice.

	The program and documentation were written by Mark A. Garber
of Cerebral Software.  The source code for this program is PDC
Prolog which is a fifth generation language.  

	Both the Kit and documentation are both copyrighted and are
distributed as ShareWare.  As a ShareWare program it is not free. 
If after reasonable evaluation period you decide to use the kit to
catalog your products then you must register your copy of the kit. 
After you have registered, you may distribute any number of
catalogs you have created.  You may also make any number of copies
of the kit to distribute to others for their evaluation provided
that you distribute kit in its original PKZIP format.


Technical Support

	The author of this presently does support work for another
company.  At this time he cannot provide telephone support for the
product.  However, support is available through other channels :

Mail 		Cerebral Software
		1815 Wynfair Way
		Marietta, GA 30062

CompuServe	71571,2006

MCI Mail	Cerebral Software



Organizing Data

	The Construction Kit allows you to define catalogs with up to
12 categories.  Prior to entering data for your catalog you should
decide on an organization.  For example, if you sell computer
equipment you could categorize your catalog as follows :

Computers
Monitors
Printers
Keyboards
Software
.
	Under each category you could list the items that you sell. 
For example, you could have a listing of the brands of printers
that you sell and these would be entered in the printers category
of your catalog.

Installation

	If you have received a copy of the Electronic Catalog
Construction Kit from a ShareWare distributor then please follow
the instructions provided on the diskette.


Startup

	1) Make certain that you are in the CATALOG directory which
           you defined in step 3) of the installation procedure. 
           You can do this by typing :

				CD \CATALOG

	2) From the C> prompt type CATALOG.

Program Operations		

categories

	1)	With the menu bar over categories, press Enter.

	2)	Choose Create/Revise

	3)	An edit window appears, enter each category on one line. 
           	For example, if you sell computer hardware, you could
           	define categories as follows :

					  	Figure 1
Note that the categories are entered 	  	
in small letters and one letter 	     	Computers			
is a capital letter.   The capital 	     	Printers		
letter will serve as a hot key.		     	Monitors	
A hot key is a key which quickly 	     	cAbles	
activates a selection on the menu.  For	     	mEmory Devices
example, the hot key for the category 	  
Computers is the letter C.		  


	4) Once you have entered all your categories then press F10
           or ESC to return you to the preceeding menu.  Choose
           Select from this menu.  Another menu appears with the
           categories you have entered.  Move the menu bar to the
           desired category.   Press ESC to return to the main menu.


Invoice

	The electronic catalog that you create with the kit can 
generate invoices and purchase orders.  You define the title which
is printed on your invoice as well as the sales tax and other
information.  

Title

	From the Invoice menu select Title.  An edit window appears. 
Enter the title you wish to appear on your invoice.  An example
title would look as follows :

Make certain that you center	 	    Figure 2
your title as you want it to
appear on the invoice.  This		    Cerebral Software
title will also appear on the		    1815 Wynfair Way
first screen of your electronic		    Marietta, GA 30062
catalog.





Payment

	In this section you specify how your customer will submit
payment.  A default method list is already shown.  You may accept
this list or change it to your preference.


Footer

	The footer is extra information that is printed on the computer
generated invoice of your electronic catalog.  An example of a typical 
text you would print on your footer could be :
	
	Prices valid through December 1991.  If you have an out of 
	date catalog, please call us for most recent edition.


State and Tax Rate

	You may leave these fields blank or enter the two letter
abbreviation for your state and a decimal number for your state tax
rate.  If you enter your two letter abbreviation and tax rate then
the tax will be computed on the invoice and added to the subtotal;
this information will be printed on the invoice generated by your
electronic catalog. 

Shipping Cost

	If you have a fixed shipping cost for all items then you
may enter this cost here.  The shipping cost will be printed on
the invoice generated by your catalog and added to the subtotal.


Enter

	Prior to entering your data, make sure that you have selected
the proper category.  If not, then go to the cAtegories, and then
Select option.  Choose the proper category.

	This selection will activate an edit window.  On the first
line you must enter a short description followed by the price.  On
the following lines you may enter a detailed description.  An
example entry could look as follows:

	VGA Card	$200.00
	This card can display 16 colors with 640 X 480 resolution.


	If you wish to make entries in another category, you must go
to the main menu and select a new category.

	You can also copy text from external text files.  See the
section on Advanced Editor Features.

Revise

	From this option you may revise entries.  Choose the entry
you wish to revise.  You may also mark records for deletion. 
Records are not deleted until you exit the program.


Build

	This selection prepares your catalog to be copied onto a
floppy disk.	You must Build your catalog prior to copying it to
a floppy or hard disk.

cOpy

	This selection permits you to copy a catalog to a floppy disk
or to the directory OUTPUT on your hard disk.  Prior to copying a
catalog to a floppy disk, make sure that it is formatted and that
it is big enough for your catalog.  

eXit

	This selection allows you to exit back to DOS.  Data is
automatically saved.

Advanced Editor Features

	The editor supplied with the electronic catalog construction
kit is an ascii editor with features comparable to editors from
WordStar (R) and Multimate (R).  You can import text from external
files just as you can using these popular editors.


External Copy

	If you wish to copy data from an external file, do the
following :

1)   Press F7:Xcopy.  You are then asked for the file name.  Wild
     card names such as *.DOC may be entered or you may leave the
     entry blank.  Press the carriage return.  You may then choose
     from a list of files.

2)   Mark the start of the text you wish to copy by pressing F7.

3)   Move the cursor to the end of the text and mark the end by
     pressing F7 again.	The external edit window will disappear
     the marked text will be copied.Edit Key List

The following is a listing of edit keys which are active in the
editor.  The Ctrl key is represented by ^.

Insert and Delete
Insert New Line				^N
Backspace				^H	
Delete Character		Del
Delete to start of line			^Q^T
Delete to end of line			^Q^Y
Delete line			^bs 

Cursor Movement
Line up				^E
Line down				^X
Word left				^A
Word right			^F
Start of line			^Q^S
End of line			^Q^D
Start of page			^Home	^Q^E
End of page			^End		^Q^X
Scroll up				^W
Scroll down			^Z
Page up				PgUp		^R
Page down				PgDown	^C
Start of text			^PgUp	^Q^R
End of text			^PgDn	^Q^C
Previous position		^Q^P		
Goto line				^F2
Goto block end			^Q^K

Searching

Search				^F3
Search again			Shift F3
Replace				^F4
Replace again			Shift F4
WordStar search		^Q^F
WordStar search again	^O
WordStar replace		^Q^A
WordStar replace again	^L


Block Functions

Block select			^K^M
Copy block to pastbuffer	^K^I
Move block to pastbuffer	^K^Y
Paste				^F7		^U
Mark blockstart		^K^B
Mark blockend			^K^K
WordStar show/hide block	^K^H
WordStar copy block		^K^C
MultiMate copy block	^F5
Multimate move block	Alt-F6
Multimate delete block	Alt-F7

Special Block Functions

Copy block to printer	Alt-F8
Copy block to file		Alt-F5
Change case for block	^F6
Copy block from file	F7

File Functions

Load file				F3
Pick file				Alt-F3
Save file				F2		^K^S
Change dir			^K^L
Filemenu				Alt-F

Miscellaneous

Auxiliary edit			F8
Edit paste buffer		^F8
Popup help menu		F1
Show help file			Shift-F1
Auto indentation		Alt-I	^Q^I
Insert mode			Ins	^V
Text mode				^Q^W
Lower case word		^B^L
Upper case word		^B^U
Reverse case word		^B^R
Exit editor			F10	^K^D
```
{% endraw %}

## FILE2715.TXT

{% raw %}
```
Disk No: 2715
Disk Title: The Electronic Catalog Construction Kit
PC-SIG Version: S1.0

Program Title: The Electronic Catalog Construction Kit
Author Version: 2.0
Author Registration: $45.00
Special Requirements: Hard drive or high density floppy drive.

The Revolution is here!  THE ELECTRONIC CATALOG replaces the traditional
paper catalog.  Create a personalized catalog of items for sale,
including short descriptions and prices.  Define such details as a
company letterhead, state and Federal taxes (if applicable), methods of
payment, and any shipping and handling charge to be added to orders.

This catalog is then ``built'' to a floppy disk.  This built version
contains the program to electronically display the catalog, the database
of products offered, and a customizable README file with information
about the program.  All this is done without any user intervention.

The catalog can then be viewed from DOS.  It allows the user (a buyer)
to select the items s/he wants to purchase and enter quantities for
each.  The program keeps a running total of the price, taxes, and
shipping/handling charges.  It generates an invoice for the totals and
provides space for entering the addresses for shipping and billing.  The
quantities for each of the items purchased and the shipping and billing
information are the only things the user enters.

The Electronic catalog is written in PROLOG and takes advantage of the
powerful features offered by the language.  The inclusion of a
Wordstar-like editor and the ability to import text files makes THE
ELECTRONIC CATALOG a very efficient and powerful program.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║  <<<<  PC-SIG Disk #2715  THE ELECTRONIC CATALOG CONSTRUCTION KIT  >>>> ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install the program to Hard Disk C type:  HD                        ║
║                                                                         ║
║  To install the program to Disk Drive B type: FLOPPY                    ║
║          {You need a 720K disk in drive B for this option}              ║
║                                                                         ║
║  After installing the program, print the documentation and installation ║
║  instructions by typing:  COPY READ.ME PRN  (press Enter)               ║
║                           COPY KIT.DOC PRN  (press Enter)               ║
║                                                                         ║
║  Start the program by typing:  CATALOG  (press Enter)                   ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2715

     Volume in drive A has no label
     Directory of A:\

    CATALOG  ZIP    216833   1-09-91   3:25p
    FLOPPY   BAT        34   2-26-91   9:50p
    HD       BAT        73   7-03-91   4:00a
    GO       BAT        38   2-26-91  10:19p
    PKUNZIP  EXE     19025   3-15-90   1:10a
    GO       TXT      1310   7-03-91   4:37a
    FILE2715 TXT      1752   7-21-91  11:59a
            7 file(s)     239065 bytes
                           78848 bytes free
