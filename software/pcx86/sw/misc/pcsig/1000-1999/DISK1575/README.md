---
layout: page
title: "PC-SIG Diskette Library (Disk #1575)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1575/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1575"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC QUOTE"

    Give your business a professional look and save yourself hours of
    paperwork with this quotation/invoice system.  PC-QUOTE is a
    customizable quote/invoice generator for any business with a customer
    list and a product line of goods and/or services.  You enter customers
    and items into a database using online screens.  The system
    automatically creates an index for the customers and items entered.  The
    system produces quotations and invoices using the customer and items
    that you select.
    
    A text editor is supplied with the system to allow customization of the
    document templates to your unique format.  On-line help is available
    from any screen and a manual is provided on-disk.  PC QUOTE supports the
    use of a mouse.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1575.TXT

{% raw %}
```
Disk No: 1575                                                           
Disk Title: PC Quote                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: PC QUOTE                                                 
Author Version: 1.1                                                     
Author Registration: $50.00 for single user version and $100.00 for LAN 
Special Requirements: 384K RAM and a hard drive.                        
                                                                        
Give your business a professional face and save yourself hours of       
paperwork with this Quotation/Invoice system.                           
                                                                        
Enter customers and items into a database using data entry screens which
guide you through the details.  Make an incorrect entry?  No problem.   
PC QUOTE allows immediate corrections.  Once the information is entered,
the system automatically creates an index for the customers and items   
entered Specify prices and quantity- and customer-unique discounts.     
Select customers and items from the helpful display and the system      
enters them the document of your choice.  When you're done, PC-QUOTE    
applies the requisite discounts and taxes and totals everything.  Review
it on screen and then print.                                            
                                                                        
A text editor is supplied with the system to allow customization of the 
document templates to your unique format.  On-line help is available    
from any screen and a manual is provided on-disk.  PC QUOTE supports the
use a mouse.                                                            
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1575 PC Quote  >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install program, type:  INSTALL (press enter)                        ║
║                                                                         ║
║ For installation instructions and manual, type:                         ║
║             COPY MANUAL.DOC PRN                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```




















                          PC QUOTE (TM) USER MANUAL


                                 VERSION 1.1


                            (C) COPYRIGHT 1989 BY


                                   GARY GEE


                             POWER USER SOFTWARE

                                   CONTENTS


1.  INTRODUCTION

    A.  Overview . . . . . . . . . . . . . . . . . . . . . . . . . .    1
    B.  System Requirements  . . . . . . . . . . . . . . . . . . . .    1
    C.  Getting Started  . . . . . . . . . . . . . . . . . . . . . .    1
    D.  Installation . . . . . . . . . . . . . . . . . . . . . . . .    2
    E.  Executing PC Quote . . . . . . . . . . . . . . . . . . . . .    4
    F.  General Information  . . . . . . . . . . . . . . . . . . . .    4

2.  HOW TO USE THE PC QUOTE MAIN MENU  . . . . . . . . . . . . . . .    5

3.  HOW TO PRODUCE A QUOTE/INVOICE . . . . . . . . . . . . . . . . .    6

4.  HOW TO USE THE CUSTOMER SCREEN . . . . . . . . . . . . . . . . .    9

5.  HOW TO USE THE ITEM SCREEN . . . . . . . . . . . . . . . . . . .   11

6.  HOW TO BROWSE A REPORT ONLINE  . . . . . . . . . . . . . . . . .   13

7.  HOW TO USE THE SYSTEM EDITOR . . . . . . . . . . . . . . . . . .   14

8.  HOW TO CUSTOMIZE/CREATE TEMPLATES  . . . . . . . . . . . . . . .   22

9.  WARRANTY . . . . . . . . . . . . . . . . . . . . . . . . . . . .   25

10. CUSTOMIZATION  . . . . . . . . . . . . . . . . . . . . . . . . .   25

11. REGISTRATION . . . . . . . . . . . . . . . . . . . . . . . . . .   25

12. ORDER FORM . . . . . . . . . . . . . . . . . . . . . . . . . . .   26

PC QUOTE USER MANUAL                                                   Page    1


OVERVIEW:


PC Quote is an easy to use online menu-driven quotation/invoice system. You
enter customers and items into a database using online screens. The system
automatically creates an index for the customers and items entered. This index
can be used to search for customers and items. You specify the prices and can
specify quantity and customer unique discounts. The system produces quotations
and invoices using the customer and items that you select. The document produced
can be viewed and edited before it's printed out. The system includes a complete
editor. The quote/invoice can be saved and retrieved and modified at a later
date. The templates used to create quotations and invoices can be customized to
your unique format requirements.


SYSTEM REQUIREMENTS:


o   IBM PC or true compatible
o   Hard Disk
o   384K RAM
o   DOS 2.0 or greater
o   Microsoft mouse or compatible (optional - can also be keyboard driven)


GETTING STARTED:


(1)  Install the system. Refer to the installation instructions below.
(2)  The system comes with a test database. After you have read the user manual
     and are familiar with the system, feel free to generate quotes/invoices
     using the test data and the sample quote/invoice templates. You can also
     run reports and view and change the test data. When you are ready to enter
     your own data, you can erase the test database by typing:

     ERASE \sub-dir\*.DTA
     ERASE \sub-dir\*.KEY

     where sub-dir is name of the sub-directory where you told the Installation
     program to put your database into.

(3)  Customize the quotation and invoice templates. You can use the editor that
     comes with the package or any word processor as long as the file is saved
     in ascii format. Refer to the instructions on customizing the quotation and
     invoice templates.
(4)  Build the customer database. Refer to the Customer screen instructions.
(5)  Build the item database. Refer to the Item screen instructions.
(6)  Set the last quote/invoice # using the Set Last Quote/Invoice # selection
     on the main menu.
(7)  At this point, you're ready to create quotations. Refer to the Quotation
     screen instructions.

PC QUOTE USER MANUAL                                                   Page    2


INSTALLATION:


PC Quote must be installed before it can be used. To install the system:

1.  Place PC Quote diskette in floppy disk drive.

2.  Switch current drive to the floppy disk drive containing the PC Quote
    diskette. For example, if you placed the diskette in drive A, type: 'A:'
    and press Enter.

3.  Type 'INSTALL' and press Enter.

4.  When the system asks you a question, an answer displayed by the system in
    brackets such as [Y] is the default if you press the Enter key.

5.  The system will prompt you for the drive and sub-directory where you want
    the system installed into. Enter the drive and sub-directory as one string
    with no embedded spaces. For example to install the system onto drive C: and
    sub-directory \PCQUOTE, type:  C:\PCQUOTE and press Enter. If the sub-
    directory does not exist, the system will create it for you.

6.  The system will prompt you for the drive and sub-directory where you want
    to keep the database. Enter the drive and sub-directory as one string with
    no embedded spaces as in (5) above. This sub-directory must be different
    from the sub-directory in (5) above. If the sub-directory does not exist,
    the system will create it for you.

7.  The system will prompt you for the drive and sub-directory where you want
    to keep the quotes. Enter the drive and sub-directory as one string with
    no embedded spaces as in (5) above. This sub-directory must be different
    from the sub-directory in (5) above. If the sub-directory does not exist,
    the system will create it for you.

8.  PC Quote can take advantage of a RAM disk if one is present. If you have a
    RAM disk, answer 'Y' when the system asks you if one is present and enter
    the drive letter of the RAM disk when the system prompts you for it.

9.  An EGA adapter is capable of displaying 25 or 43 lines on the screen. A
    VGA adapter is capable of displaying 25 or 50 lines on the screen. If you
    have an EGA or VGA adapter, the system will ask you whether you wish to
    have reports displayed in 43 or 50 line mode. In 43 or 50 line mode, there
    are more lines per screen but the characters in each line are smaller.

10. The system will ask you if you have a color monitor. Answer with 'Y' if you
    have a color monitor attached to your PC otherwise answer with 'N'.

11. The system will ask you for the number of lines your printer can print on
    one page. If you are using portrait type paper (8.5 X 11) and your printer
    is printing 6 lines per inch, answer with 54. If you are using portrait
    type paper and your printer is printing 8 lines per inch, answer with 72.

PC QUOTE USER MANUAL                                                   Page    3


    If you are using some other type of paper:

    (1) Measure the number of inches vertically on one sheet of paper
    (2) Subtract 2 from the above figure (this will allow for a one inch margin
        on the top and bottom)
    (3) Multiply the figure in (2) by the number of lines your printer prints
        per inch

    This system uses the number of lines entered here to determine when to start
    a new page on the Customer, Note and Item reports. The system determines
    when to start a new page on quotes and invoices by the number of lines in
    the quote/invoice template.

12. The system will prompt you for the drive letter of the disk that was used
    to boot up DOS. It needs this information so it can check your 'CONFIG.SYS'
    file. The following statements must be in this file:

    FILES = 20
    BUFFERS = 25

    If the file 'CONFIG.SYS' does not exist, the system will automatically
    create one for you with the two statements above. If the file 'CONFIG.SYS'
    exists but these statements do not exist, the system will add these
    statements to the file. If these statements exist but the numbers are less
    than the numbers above, the numbers will be adjusted by the system. If the
    system has to modify your 'CONFIG.SYS' file, it will first create a backup
    by copying your current 'CONFIG.SYS' file to 'CONFIG.BAK'.

13. If the system had to create a 'CONFIG.SYS' file or modify it, it will reboot
    the system for you.

14. To change any of the above parameters, simply install the system again.

PC QUOTE USER MANUAL                                                   Page    4


EXECUTING PC QUOTE:


To run PC Quote:

(1)  Change the current sub-directory to the sub-directory where PC Quote is
     installed (example:  CD \PCQUOTE).
(2)  Type: QUOTE and press Enter


GENERAL INFORMATION:


In screens, pressing the Tab key will advance the cursor to the next field.
Holding down the Shift key and pressing the Tab key will move the cursor to the
previous field. When a field is completely filled with data, the cursor advances
automatically to the next field. When the cursor is within a field, pressing the
insert and delete keys will insert and delete characters. Whenever a window pops
up, pressing the Esc key will delete the window. White colored fields on screens
are required fields. Light blue colored fields are optional fields. Pick lists
can be displayed for fields which have astericks next to them by pressing the F8
key. Once you are in a pick list, you can select items by pressing the Enter
key or the space bar.

PC Quote is designed to work with a Microsoft or compatible mouse. Moving the
mouse up is the same as the UpArrow key. Moving the mouse down is the same as
the DownArrow key. Pressing the left mouse button is the same as the Enter key.
Pressing the right mouse button is the same as the Esc key.

When entering data in numeric fields, leading and trailing zeros are not
required. The system will automatically add the proper leading and trailing
zeros and perform the proper left and right justification.

When the system asks you a question, the default answer will be displayed. You
can:  (1)  Press Enter to accept the answer  (2)  Press the Backspace key to
edit the displayed answer  (3)  Press any other key to retype the answer. The
system always saves the response to a question and displays that response when
it asks the same question again.

The following files comprise the PC Quote database:

CUST.DTA & CUST.KEY                ----->  Customer Database
PART.DTA & PART1.KEY & PART2.KEY   ----->  Item Database

These files are located in the sub-directory where you told the system to keep
the database. To transfer the database to another computer, simply copy these
files to a diskette and restore them onto the target computer into the proper
sub-directory.

PC QUOTE USER MANUAL                                                   Page    5


                      HOW TO USE THE PC QUOTE MAIN MENU


This is the main menu for the PC Quote system. To make a selection, use the
UpArrow and DownArrow keys to move the highlight up and down. Press the Enter
key when the highlight is at the proper selection. You can also make a
selection by pressing the 'A' thru 'G' keys.

The following is a summary of each selection:

A -> Produce Quote/Invoice

     This selection is used to specify a customer and the items that a customer
     wishes a quotation/invoice on. This selection will produce quotations and
     invoices.

B -> Customers

     This selection is used to build and update the customer database.

C -> Items

     This selection is used to build and update the item database.

D -> Reports

     This selection prints the customer and item reports.

E -> Set Last Quote/Invoice #

     This selection allows you to set the last quote/invoice #. The system
     will add 1 to the last quote/invoice # to create the next number.

F -> Editor

     This is a full-screen editor that can be used to edit the quotation and
     invoice templates and the quotations/invoices produced by the system. It
     can also be used to edit any other ASCII file. The quotation/invoice
     templates and the system-created quotations/invoices don't have to be
     edited by this editor. They are ASCII files and can be edited by any editor
     as long as the result is saved in ASCII format.

G -> DOS Commands

     This selection can be used to exit to DOS to execute DOS commands or run
     other programs. To return to PC Quote from DOS, type 'EXIT' and press
     Enter.

PC QUOTE USER MANUAL                                                   Page    6


                        HOW TO PRODUCE A QUOTE/INVOICE


This screen is used to produce quotations and invoices. You select the customer
from a pick list or enter the customer information manually. You select the
items from a pick list and enter the quantities requested by the customer. The
system produces a quotation or invoice using the appropriate template. It
automatically extends quantities by unit prices and applies discounts and sales
tax. After the quotation/invoice has been produced, the system takes it into the
system editor. From here you can edit the document and print it out.

The first step in creating a quotation/invoice is to enter the customer. This
can be accomplished by pressing the F8 key when the cursor is at the Name field.

This will bring up a pick list of available customers. Use the UpArrow,
DownArrow, PgUp and PgDn keys to move the highlight to the proper customer. When
the highlight is at the proper customer, press Enter to select the customer. The
system will fill in all the customer fields from the customer database. You can
override the values that are brought up by re-typing a field. If a customer is
not in the database and you do not wish to add this customer to the database,
simply enter the customer information manually. Please read the instructions for
the Customer screen on how the Disc Sched fields work.

After the customer information has been entered, item information needs to be
entered. To select items, position the cursor in one of the quantity (Qty)
fields and press F8.

This will bring up a pick list of major categories of items. Use the UpArrow,
DownArrow, PgUp and PgDn keys to move the highlight to the proper major
category. When the highlight is at the proper major category, press Enter to
select the major category.

After a major category has been selected, a pick list of sub categories for the
major category selected will be displayed. A selection is made from this pick
list in the same manner as selecting a major category.

After a sub category has been selected, a pick list of item descriptions for the
sub category selected will be displayed. You can select the proper items from
this pick list. When the highlight is at a certain item and Enter is pressed, a
checkmark will be displayed indicating that the item has been selected. Pressing
Enter when the highlight is at an item where there is already a checkmark will
cause the checkmark to disappear and the item to be un-selected.

After you have selected all of the proper items from the item pick list, press
Esc to delete the pick list. At this point, the sub category pick list will be
displayed. You can select another sub category or press Esc again. If you press
Esc again, the major category pick list will be displayed and you can select
another major category. Pressing Esc will always take you back to the previous
pick list. When you have finished selecting items, press Esc to delete the major
category pick list. The items that were selected will be displayed in the bottom
half of the screen.

PC QUOTE USER MANUAL                                                   Page    7



At this point, it's time to enter the quantities. Enter the quantities by
tabbing to the proper quantity field and filling in the quantity. If there are
more items on the next page, the PgDn=Next label at the bottom of the screen
will be highlighted. If this label is highlighted, pressing the PgDn key will
bring up the next page of items. Similarly, if there are items on a previous
page, the PgUp=Prev label will be highlighed. Lines where the quantity field
is left blank or is filled in with zero will not be printed on the document
produced by the system.

When all the customer, item and quantity information has been entered, press the
F5 key to produce the quote/invoice. If your template includes the parameter
@FREIGHT, the system will prompt you for the freight charges. Freight charges
are not subject to sales tax. If your template includes the parameter @I#, the
system will ask you if you wish to increment the last quote/invoice number. The
system will take the produced quote/invoice into the system editor. From here
you can edit and print the document. Please refer to the instructions for the
System Editor on its operation. In the System Editor, form feed characters show
up as uppercase L's in column 1. If you have a color monitor, the form feed
characters show up as white colored L's while the rest of the text is yellow
colored. Form feed characters are used to tell a printer to skip to the top of a
new page.

Pressing the F3 key will toggle the cursor between the Name and the first Qty
field. If the cursor is in any of the customer fields, pressing the F3 key will
advance the cursor to the first customer field. If the cursor is in any of the
Qty fields, pressing the F3 key will advance the cursor to the Name field.

Pressing the F6 key will display a menu.

The first selection is used to save a quote. The system will ask you for the
name of the file to save the quote into. Enter a filename up to 8 characters.
The system will automatically append the file extension .SAV to the filename.
If you have previously retrieved a quote, the system will display the name of
the last quote you retrieved. You can press the Enter key to accept this name
or press the Backspace key to edit the name.

The system will also ask you for a comment line. Enter comments for the quote
you are saving up to 40 characters. If you have previously retrieved a quote,
the system will display the comments from the last quote you retrieved. You
can press the Enter key to accept these comments or press the Backspace key to
edit the comments.

The system will save everything that appears on the screen. It will also save
the editor file (DOCUMEN.PRT) containing the quote produced by the system.

The second selection is used to retrieve previously saved quotes. The system
will restore to the screen everything that was on the screen when the quote was
saved including the Shipping & Handling charges. It will also restore the editor
file (DOCUMEN.PRT) that existed at the time the quote was saved. Once a quote
has been restored, you can modify the data on the screen and produce the quote

PC QUOTE USER MANUAL                                                   Page    8


again or use the fifth selection to edit and/or printout the quote as it exists.
The system will automatically change the current template to the template that
was used to create the retrieved quote.

The third selection is Delete Quote. This is used to delete quotes that are no
longer needed. The system displays the name of the quote, the date it was last
modified and the comments associated with it in a window. When the highlight is
at a quote, pressing the Enter key will select/unselect the quote. Pressing the
Esc key will exit you from the window and delete all the selected quotes.

The fourth selection is Chg Template. Normally, the default template used is
QUOTE.TPL. This selection allows you to change the default template to the one
that you specify. This change will remain effective as long as you are in this
screen. If you exit the screen and return to the screen, the default template
QUOTE.TPL will again be used. Templates must be stored in the same sub-directory
as the PC Quote database and must have the file extension .TPL. The name of the
current template is displayed in the upper right hand corner of the screen.

The fifth selection is Edit Last Quote. This allows you to bring up whatever is
in the editor file DOCUMEN.PRT and re-edit or print it out.

To clear the screen, press F9. When the system returns from the System Editor,
the customer, item and quantity information is exactly the same as it was
before. You can modify the customer information and quantities and produce
another quote/invoice if that is desired. To start fresh with new item
information, you have to press the F9 key to clear the screen.

To exit the screen, press Esc.

PC QUOTE USER MANUAL                                                   Page    9


                        HOW TO USE THE CUSTOMER SCREEN


This screen is used to create and update the customer database. The customer
database maintains information on customer addresses, phone numbers, sales
tax rates and discount schedules.

The five discount schedule fields are tied to the discount schedule field on the
Item screen. If an item is coded with a discount schedule number, then the
discount percentage in the customer's corresponding schedule number is applied.
For example, suppose an item has the number 3 in the discount schedule field.
The discount percentage in discount schedule 3 for a particular customer will be
applied. The discount schedule allows the application of different discount
percentages to different classes of items. For example, a company may want to
apply one discount percentage against computer hardware items and another
discount percentage against computer software items. This company could code all
the computer hardware items with the number 1 in the discount schedule field on
the Item screen. They could code the number 2 in the discount schedule field on
computer software items. They would then for each customer enter the discount
percentages for hardware and software in discount schedules 1 and 2. The
discount schedule fields can be left blank if there is no discount to be
applied.

To add a customer record:

(1)  Enter 'A' in the process code field
(2)  Fill in the fields
(3)  Press Enter

     The field Name is the key field and duplicates are not allowed.

To inquire on a customer record:

(1)  Enter 'I' in the process code field
(2)  Fill in the Name field
              or
     Position the cursor in the Name field and press the F8 key. This will bring
     up a pick list of available customers. Use the UpArrow, DownArrow, PgUp and
     PgDn keys to move the highlight to the proper customer. When the highlight
     is at the proper customer, press Enter to select the customer.
(3)  Press Enter

To update a customer record:

(1)  Inquire on the customer record that you wish to update
(2)  Enter 'U' in the process code field
(3)  Update the fields as needed. It is not necessary to re-enter fields where
     there are no changes.
(4)  Press Enter

     The field Name can be changed even though it's a key field. The only

PC QUOTE USER MANUAL                                                   Page   10


     restriction is that the new value can't already exist in the database.

To delete a customer record:

(1)  Inquire on the customer record that you wish to delete
(2)  Enter 'D' in the process code field
(3)  Press Enter

To clear the screen, press F9.

To exit the screen, press Esc.

PC QUOTE USER MANUAL                                                   Page   11


                          HOW TO USE THE ITEM SCREEN


This screen is used to create and update the item database. The item database
maintains information on item descriptions, classifications, discount schedules,
and unit prices.

The discount schedule field is tied to the five discount schedule fields on the
Customer screen. If an item is coded with a discount schedule number, then the
discount percentage in the customer's corresponding schedule number is applied.
For example, suppose an item has the number 3 in the discount schedule field.
The discount percentage in discount schedule 3 for a particular customer will be
applied. The discount schedule allows the application of different discount
percentages to different classes of items. For example, a company may want to
apply one discount percentage against computer hardware items and another
discount percentage against computer software items. This company could code all
the computer hardware items with the number 1 in the discount schedule field on
the Item screen. They could code the number 2 in the discount schedule field on
computer software items. They would then for each customer enter the discount
percentages for hardware and software in discount schedules 1 and 2. The
discount schedule field on this screen can be left blank if there is no discount
to be applied.

The system creates an index on the fields Major Category and Sub Category. This
index can be used to search for an item. Spelling is critical for these two
fields. For an item to come under the same Major Category and Sub Category, the
spelling for these fields for a subsequent item must be the same as the spelling
for a previous item. For example if an item is a Compaq computer and the value
entered for an item in the Major Category field is COMPUTER and the value
entered for the Sub Category field is COMPAQ, then subsequent items which are
Compaq computers should be coded with the same Major Category and Sub Category
field values.

The 10 price fields at the bottom of the screen allow you to enter different
prices when different quantities are purchased. It allows you to enter quantity
discount prices. If quantity discounts don't apply, simply enter one price. If
the From Qty And To Qty fields are left blank, they default to 1 and 999,999
respectively.

To add an item record:

(1)  Enter 'A' in the process code field
(2)  Fill in the fields
(3)  Press Enter

     The field Stock No is the key field and duplicates are not allowed.
     Credit amounts should be entered with a leading minus ('-') sign.
     If the unit price has 1 or more positions after the decimal point, then the
     decimal point should be entered as part of the field. For example, 789.12
     should be entered as 789.12


PC QUOTE USER MANUAL                                                   Page   12


To inquire on an item record:

(1)  Enter 'I' in the process code field
(2)  Fill in the Stock No field
                 or
     Position the cursor in the Stock No field and press the F8 key. This will
     bring up a pick list of major categories of items. Use the UpArrow,
     DownArrow, PgUp and PgDn keys to move the highlight to the proper major
     category. When the highlight is at the proper major category, press Enter
     to select the major category. After a major category has been selected, a
     pick list of sub categories for the major category selected will be
     displayed. A selection is made from this pick list in the same manner as
     selecting a major category. After a sub category has been selected, a pick
     list of item descriptions for the sub category selected will be displayed.
     You can select the proper item from this pick list. After the proper item
     has been selected, the system will delete all the pick lists from the
     screen and leave the corresponding Stock No in the Stock No field. If you
     press Esc while in the item pick list, the sub category pick list will be
     displayed. You can select another sub category or press Esc again. If you
     press Esc again, the major category pick list will be displayed and you can
     select another major category. Pressing Esc will always take you back to
     the previous pick list.
(3)  Press Enter

To update an item record:

(1)  Inquire on the item record that you wish to update
(2)  Enter 'U' in the process code field
(3)  Update the fields as needed. It is not necessary to re-enter fields where
     there are no changes.
(4)  Press Enter

     The field Stock No can be changed even though it's a key field. The only
     restriction is that the new value can't already exist in the database. The
     fields Major Category and Sub Category can also be changed even though
     they are index fields.

To delete an item record:

(1)  Inquire on the item record that you wish to delete
(2)  Enter 'D' in the process code field
(3)  Press Enter

To clear the screen, press F9.

To exit the screen, press Esc.

PC QUOTE USER MANUAL                                                   Page   13


                        HOW TO BROWSE A REPORT ONLINE


To go forward one page, press the PgDn key. To go backward one page, press the
PgUp key.

To print the report to the printer, press F2. The system will pop up a window
and ask you for the starting and ending page numbers. If the starting page
number is left blank it will default to page 1. If the ending page number is
left blank it will default to the last page. Since each screen can only contain
23, 41 or 48 lines, it is possible for a physical report page to take up more
than one screen. For example, it is possible that report page 1 may take 3
screen pages. When the system prompts you for the staring and ending page
numbers to print, it is looking for the physical report page numbers.

To go to the top of the report, press the Home key. To go to the end of the
report, press the End key. To exit from the online report browser, press Esc.

PC QUOTE USER MANUAL                                                   Page   14


                         HOW TO USE THE SYSTEM EDITOR


Entering And Editing Text:
--------------------------

You enter text in the System Editor in much the same way as you enter text on
a typewriter, and most of the keys on the keyboard behave in the same fashion
(pressing Enter terminates a text line, for example). But there are many
important differences.

The cursor always indicates where new text will be entered, and you can move
the cursor in a number of ways (the commands to do so are described later).
You can correct mistakes quickly and easily using the delete commands. You can
locate a particular string of text with the Find command and optionally replace
it with another string using the Find-and-replace command.


Quick Command Reference:
------------------------

Function                                Keystrokes
-------------------------------------------------------------------------------

Character left                          Left Arrow
Character right                         Right Arrow
Line up                                 Up Arrow
Line down                               Down Arrow
Scroll up                               Ctrl-W
Scroll down                             Ctrl-Z
Page up                                 PgUp
Page down                               PgDn
Beginning of file                       Ctrl-PgUp
End of file                             Ctrl-PgDn
Beginning of line                       Home
End of line                             End
New line                                Enter
Insert line                             Ctrl-N
Delete current character                Del
Delete character left                   Backspace
Delete to end of line                   Ctrl-QY
Delete line                             Ctrl-Y
Find                                    Ctrl-QF
Find-and-replace                        Ctrl-QA
Find next                               Ctrl-L
Begin block                             F7
End block                               F8
Copy block                              Ctrl-KC
Move block                              Ctrl-KV
Delete block                            Ctrl-KY
Hide block                              Ctrl-KH

PC QUOTE USER MANUAL                                                   Page   15


Read block from file                    Ctrl-KR
Write block to file                     Ctrl-KW
Print block                             Ctrl-KP
Toggle insert mode                      Ins
Toggle autoindent mode                  Ctrl-QI
Save changes and print current file     F2
Exit editor without saving changes      Esc
Exit editor saving changes              F10

Note:  When the notation Ctrl precedes another key, it means that you hold
down the Ctrl key and press the second key. In the case of commands using Ctrl
and two keystrokes (for example, Ctrl-QF), you hold Ctrl down only while you
press the first key, not the second.


The Editing Screen:
-------------------

The top line of any editing screen is always a status line providing the
following information:

  Command Echo

  When the first key of a command assigned to two keystrokes is pressed, the
  keystroke is echoed at the left edge of the status line. For example, if you
  start to enter a command that begins with Ctrl-Q (such as Ctrl-QF), ^Q will
  appear until the second keystroke has been entered.

  Line n

  Shows the number of the line containing the cursor, counted from the start
  of the file.

  Col n

  Shows the column number containing the cursor.

  Insert

  Indicates that Insert mode is in effect.

  Indent

  Indicates that Autoindent mode is in effect. Ctrl-QI toggles autoindent on
  and off; refer to the Toggle autoindent command.

  X:FILENAME.EXT

  The drive, name, and extension of the file being edited. Although the editor
  accepts path designations--for example, C:\DOS\SAMPLE.DOC--the path name
  will not be displayed on the status line.

PC QUOTE USER MANUAL                                                   Page   16




Basic Movement Commands:
------------------------

Character left                         Left arrow

Moves the cursor one character to the left. When the cursor reaches column 1,
it stops.

Character right                        Right arrow

Moves the cursor one character to the right. When the cursor reaches the
right-hand edge of the screen, the text starts scrolling horizontally until it
reaches the extreme right edge of the line (column 248), where it stops.

Line up                                Up arrow

Moves the cursor to the line above. If the cursor is on the top line of the
screen, the screen scrolls down one line.

Line down                              Down arrow

Moves the cursor to the line below. If the cursor is on the next-to-last line
of the screen, the screen scrolls up one line.

Scroll up                              Ctrl-W

Scrolls up toward the beginning of the file, one line at a time. The cursor
remains on its line until it reaches the bottom of the screen.

Scroll down                            Ctrl-Z

Scrolls down toward the end of the file, one line at a time. The cursor
remains on its line until it reaches the top of the screen.

Page up                                PgUp

Moves the cursor one page up with an overlap of one line.

Page down                              PgDn

Moves the cursor one page down with an overlap of one line.

Beginning of file                      Ctrl-PgUp

Moves the cursor to the first character in the file.

End of file                            Ctrl-PgDn

Moves the cursor just beyond the last character in the file.

PC QUOTE USER MANUAL                                                   Page   17



Beginning of line                      Home

Moves the cursor to column 1 of the current line.

End of line                            End

Moves the cursor to the end of the current line (the position following the
last nonblank character on the line). Trailing blanks are always removed from
all lines to preserve space.


Insert And Delete Commands:
---------------------------

New line                               Enter

In Insert mode, this command inserts a line break at the cursor's position. If
Autoindent mode is in effect, the cursor moves to the next line and to the
same column as the first nonblank character in the previous line; otherwise,
it moves to column 1 of the new line.

In Overwrite mode, this command moves the cursor to column 1 of the next line
without inserting a new line, whether Autoindent mode is in effect or not.

Insert line                            Ctrl-N

Inserts a new line break at the cursor's position. The cursor does not move.

Delete current character               Del

Deletes the character over the cursor and moves any characters to the right of
the cursor one position to the left.

Delete character left                  Backspace

Moves the cursor one character to the left and deletes the character
positioned there. Any characters to the right of the cursor are moved one
position to the left. If the cursor is at column 1 at the time the command is
given, the invisible end-of-line marker for the previous line is deleted
instead, and the two lines are joined.

Delete to the end of the line          Ctrl-QY

Deletes all text from the position of the cursor to the end of line.

Delete Line                            Ctrl-Y

Deletes the line containing the cursor and moves any line below it up one
line. The cursor moves to column 1 of the next line.


PC QUOTE USER MANUAL                                                   Page   18



Block Commands:
---------------

A block is any arbitrarily defined, contiguous unit of text; a block can be as
small as a single character or as large as an entire file. Mark a block by
placing a begin-block marker at the first character in the desired block and an
end-block marker just beyond the last character. Once marked, the block can be
copied, moved, deleted, or written to a file.

Although marked blocks are normally hilighted, the block may be "hidden" (or
made visible) with the Hide block command. Many of the block-manipulation
commands described here work only when the block is being displayed.

Begin block                            F7

Marks the beginning of a block. The marker itself is not visible on the screen,
and the block becomes visible only when the end-block marker is set.

End block                              F8

Marks the end of a block. Like the begin-block marker, the end-block marker is
invisible, and the block itself will not be displayed unless both markers are
set.

Copy block                             Ctrl-KC

Creates a copy of a marked and displayed block at the current cursor position.
The original block is left unchanged, and the markers are placed around the new
copy of the block.

Move block                             Ctrl-KV

Moves a marked and displayed block from its current position to the cursor's
position. The markers remain around the block at its new position.

Delete block                           Ctrl-KY

Deletes a marked and displayed block.

Hide block

Toggles off and on the visual marking of a block. Block-manipulation commands
work only when the block is being displayed.

Read block from file                   Ctrl-KR

Reads a file into the text at the cursor's current position exactly as if it
were copied from another part of the text. The file read in is marked as a
block. When you use this command, you are prompted for the name of the file to
read. If you have used this command earlier in the editing session, the last

PC QUOTE USER MANUAL                                                   Page   19


file name entered will be displayed. You may enter a new file name, make minor
changes to the one displayed using the BackSpace key, or accept it by pressing
Enter. The file specified may be any legal file name, including a drive and /
or path identifier. Cancel the command by pressing Ctrl-U.

Write block to file                    Ctrl-KW

Writes the currently marked block to a file. The block is left unchanged, and
the block markers remain in place. You are first prompted for a file name. The
file specified can be any legal file name, including a drive and / or path
identifier. You should avoid using file names with the extension .BAK, because
this extension is used by the editor when creating backup files. If the file
specified already exists, you are asked if you want to overwrite it. If you
press N (for No), you can enter a new file name, make minor changes to the
current one using the BackSpace key, or cancel the command by pressing Ctrl-U.
If no block is marked, this command is ignored.

Print                                  Ctrl-KP

Prints the currently marked (and displayed) block on the default printer. If no
block is marked or if the marked block is hidden, the entire file is printed.


Miscellaneous Commands:
-----------------------

Toggle insert mode                     Ins

Selects Insert or Overwrite mode. In Insert mode, text to the right of the
cursor is moved to the right as new text is entered. In Overwrite mode, any
text above the cursor is overwritten when new text is entered.

Toggle autoindent                      Ctrl-QI

When Autoindent mode is in effect, the New line command (Enter) will move the
cursor to the next row and to the same column as the first nonblank character
on the previous line.

Find                                   Ctrl-QF

Lets you search for a string of up to 30 characters. When you enter this
command, the status line is cleared and you will be asked for a search string.
The last search string entered (if any) will be displayed. You can select it
again by pressing Enter, edit it, or enter a new search string. When editing
strings, Backspace deletes the previous character, Ctrl-R restores the
previous string, Ctrl-S moves the cursor to the left, and Ctrl-D moves the
cursor to the right. Esc will cancel a search command.

After the search string is entered, you must specify your search options. The
options you used last, if any, are displayed. You can enter new options
(canceling the old ones), edit the current options, or select them again by

PC QUOTE USER MANUAL                                                   Page   20


pressing Enter. The following options are available:

B  Searches backwards from the current cursor position toward the beginning of
   the file.

n  n may be any number. Find the nth occurrence of the search string, counted
   from the current position of the cursor.

U  Ignore case; treats all alphabetic characters as if they were uppercase.

W  Searches for whole words only; skips matching patterns embedded in other
   words.

If the text contains a target match the search string, the cursor is
positioned at the end of the target.

Find and replace                       CtrlQA

This operation works the same as the Find command, except that you can replace
the "found" string with any other string up to 30 characters. After entering
the search string, you are asked to enter the replacement string. The last
replacement string, if any, will be displayed; you can accept it, edit it, or
enter a new string.

Finally, you are prompted for options. The options you used last are displayed
at first. You can enter new options (canceling the old ones), edit the current
options with the Backspace key, or select the same options by pressing Enter.
The options available are the same as those for the Find command with the
exception of th following:

G  Searches globally. The entire file is scanned for the search string,
   regardless of the current position of the cursor. The search starts at the
   beginning of the file if searching forwards; at the end if searching
   backwards.

N  Replaces without asking. Does not prompt for confirmation at each
   occurrence of the search string.

If the text contains a target matching the search string, the cursor is
positioned at the end of the target. You are then asked if you wish to replace
it. Press Y to replace it, or N to ignore it. Yo can abort the operation by
pressing Ctrl-U. If you selected the N (no prompting) option, this question
will not be asked.

Find next                              Ctrl-L

Repeats the last search operation. If the last search command called for a Find
operation, the same search string and options will be repeated; for a
Find-and-replace operation, the replacement string will be reused as well.

Saves changes and print file           F2

PC QUOTE USER MANUAL                                                   Page   21



Saves changes made to the file, prints the file to the printer and exits the
editor.

Exit editor without saving changes     F9

If changes have been made to the file, you are prompted as to whether you wish
to save these changes. Press Y to save the changes and exit the editor. Press
N to exit the editor with saving the changes.

Save changes and exit editor           F10

Saves changes made to the file and exits the editor.

PC QUOTE USER MANUAL                                                   Page   22


                      HOW TO CUSTOMIZE/CREATE TEMPLATES


The system uses the template QUOTE.TPL to produce quotations. You can customize
this template and create other templates. Templates must be stored in the same
sub-directory as the PC Quote database and must have the file extension .TPL.
The system by default uses the template QUOTE.TPL. You can change the default
template temporarily by using the Chg Template option in the Produce Quote
screen. To modify a template or to create a new one, you can use the editor
supplied with this system or any word processor as long as the output is saved
in ascii format. Refer to the instructions for the System Editor on its
operation.

The sample templates that come with the system contain text and symbolic
parameters. Parameters start with the character '@' and are filled in by the
system. The text is user defined and is printed as is. You will probably want to
change the company name and address, salesperson and other relevant information.
The text and parameters on the template can be moved around, deleted, added and
customized however you wish.

Symbolic parameters are replaced with data by the system. The replacement starts
in the column where the parameter starts (i.e. in the column where the '@' is).
The parameter is deleted from where it's found and replaced with data for the
length of the data value. Some data value lengths are fixed by the system and
others are variable and depend upon the actual number of characters present.
For example, the length for the parameter @Description is variable and depends
upon the number of characters in the actual item description. The length for the
parameter @Qty on the other hand is fixed by the system at 7 positions.

The first line of any template file is a comment line. The comment line is
limited to 40 characters. The comment line is displayed when the user chooses
the Chg Template option in the Produce Quote screen.

A listing of general parameters and their lengths when substituted by the
system follows:


                              GENERAL PARAMETERS


Parameter Name        Length                          Comments
--------------------------------------------------------------------------------

@EXPDnnn              fixed - 8 pos     Returns a date in the format mm/dd/yy
                                        that is the current date plus nnn days.
                                        nnn must be right justified and zero
                                        filled (i.e. 30 days is entered as 030).
                                        This parm is useful for stating when a
                                        quote expires.

@COMPANYNAME          variable          Returns company name of the customer

PC QUOTE USER MANUAL                                                   Page   23



@ADDRESSLINE1         variable          Returns the first address line of the
                                        customer

@ADDRESSLINE2         variable          Returns the second address line of the
                                        customer

@ATTENTION            variable          Returns the attention line of the
                                        customer

@PHONENO              fixed - 14 pos    Returns the phone number of the customer

@DATE                 fixed - 8 pos     Returns current date. Format is:
                                        mm/dd/yy

@TIME                 fixed - 5 pos     Returns current time. Format is: hh:mm
                                        hh is based on a 24 hour clock

@PN                   fixed - 3 pos     Returns the page number

@INV#                 variable          Returns the quote/invoice number


The following is a listing of item parameters. These parameters are for each of
the detail item lines and should be repeated for as many lines of detail item
information as you wish to print on one page. When the system detects any of the
parameters below on a line, it substitutes the information for the first item
into that line. When it encounters any of these parameters on another line, it
substitutes the information for the second item and so on.


                               ITEM PARAMETERS


Parameter Name        Length                          Comments
--------------------------------------------------------------------------------

@IT#                  fixed - 4 pos     Returns the item number. Items are
                                        numbered sequentially from 1.

@STOCK#               variable          Returns the item stock number

@Qn                   variable          Returns the item quantity

                                        n is the field length for the quantity
                                        field
                                        The field length must be large enough to
                                        hold the largest quantity number.

@DESCRIPTION          variable          Returns the item description


PC QUOTE USER MANUAL                                                   Page   24


@MAJORCAT&DESCRIP     variable          Returns the major category and
                                        description separated by a comma

@UPRCf:n              variable          Returns the item unit price

                                        f is the total field length
                                        If the number of decimal positions is
                                        not zero then the total field length
                                        must include room for a decimal point.
                                        The total field length must also include
                                        room for a negative sign if the unit
                                        price can be a negative number. Finally,
                                        the total field length must include room
                                        for a dollar sign.

                                        n is the number of decimal positions to
                                        print (0 to 9)

@EPRICE               fixed - 10 pos    Returns the extended price for the item
                                        (quantity multiplied by unit price)


The following is a listing of total parameters. These parameters are for the
section of the quotation where the totals are printed. These parameters must
appear after the item parameters.


                               TOTAL PARAMETERS


Parameter Name        Length                          Comments
--------------------------------------------------------------------------------

@ETOTAL               fixed - 11 pos    Returns the total of the extended item
                                        prices

@DISC                 fixed - 10 pos    Returns the discount in dollars and
                                        cents

@SUBTOTAL             fixed - 11 pos    Returns the extended item prices less
                                        the discount

@TAX$                 fixed - 10 pos    Returns the sales tax in dollars and
                                        cents

@TAX%                 fixed - 5 pos     Returns the sales tax in percent form

@FREIGHT              fixed - 10 pos    Returns the shipping and handling
                                        charges

@GTOTAL               fixed - 11 pos    Returns the grand total of the quote

PC QUOTE USER MANUAL                                                   Page   25


WARRANTY:


Power User Software makes no warranties, expressed or implied, including, but
not limited to, merchantability or fitness for any particular purpose. In no
event shall Power User Software be liable for indirect or consequential damages
arising from the use of the software programs.


CUSTOMIZATION & SITE LICENSES:


Custom versions and site licenses are available. Please call (714) 974-2569 for
more information.


REGISTRATION:


You may make copies of PC Quote and share it with others. If you find PC QUOTE
fast, easy and convenient to use, a donation of $50 would be appreciated. If you
send a contribution of $50, you will receive a printed manual, a disk with the
latest version of the software, notice of updates to the software and phone
support. Please use the invoice on the next page.

PC QUOTE USER MANUAL                                                   Page   26


                               I N V O I C E

REMIT TO:                         FROM:

POWER USER SOFTWARE               Name: __________________________________
211 S. State College Blvd
Suite 236                    (Company): __________________________________
Anaheim, CA 92816
(714) 974-2569                 (Title): __________________________________

                               Address: __________________________________
Today's
date: ___________          City, State: __________________________________
                                                                  Zip Code
Version No: __________    Phone Number: _________________________

                                                                 Qty    Total
PC QUOTE
    Current diskette and printed manual . . . . . . . . .  $50  ______  ______

Please add $3.50 for shipping and handling                              ______

California residents add appropriate sales tax                          ______

                                              Total enclosed            ______

Diskette format (choose one)        5.25" disk ____    3.5" disk ____

Terms:  Check or money order drawn on a U.S. bank in U.S. funds.

How did you obtain this copy of PC Quote?  ____________________________________

Note that PC Quote has been delivered and accepted by the customer. Upon receipt
of this paid invoice, a printed manual and current disk will be sent.

Suggestions for enhancements or bugs discovered (attach additional sheet if
necessary).

_______________________________________________________________________________

_______________________________________________________________________________

Software you would like to see developed. If your suggestion is accepted, we
will send you a free copy of the software developed (attach additional sheet if
necessary).

_______________________________________________________________________________

_______________________________________________________________________________

```
{% endraw %}

## README.DOC

{% raw %}
```
                                PC QUOTE (TM)


PC Quote is an easy to use online menu-driven quotation/invoice system. You
enter customers and items into a database using online screens. The system
automatically creates an index for the customers and items entered. This index
can be used to search for customers and items. You specify the prices and can
specify quantity and customer unique discounts. The system produces quotations
and invoices using the customer and items that you select. The document produced
can be viewed and edited before it's printed out. The system includes a complete
editor. The quote/invoice can be saved and retrieved and modified at a later
date. The templates used to create quotations and invoices can be customized to
your unique format requirements.


SYSTEM REQUIREMENTS:


o   IBM PC or true compatible
o   Hard Disk
o   384K RAM
o   DOS 2.0 or greater
o   Microsoft mouse or compatible (optional - can also be keyboard driven)


The file MANUAL.DOC contains the user manual for the system. Please read this
file for instructions on how to use the system.


SOFTWARE LICENSE:


(C) Copyright 1989 by Gary Gee. All Rights Reserved.


WARRANTY:


Power User Software makes no warranties, expressed or implied, including, but
not limited to, merchantability or fitness for any particular purpose. In no
event shall Power User Software be liable for indirect or consequential damages
arising from the use of the software programs.


CUSTOMIZATION & SITE LICENSES:


Custom versions and site licenses are available. Please call (714) 974-2569 for
more information.


REGISTRATION:


You may make copies of PC Quote and share it with others. If you find PC QUOTE
fast, easy and convenient to use, a donation of $50 would be appreciated. If you
send a contribution of $50, you will receive a printed manual, a disk with the
latest version of the software, notice of updates to the software and phone
support. Please use the invoice below.


                               I N V O I C E

REMIT TO:                         FROM:

POWER USER SOFTWARE               Name: __________________________________
211 S. State College Blvd
Suite 236                    (Company): __________________________________
Anaheim, CA 92816
(714) 974-2569                 (Title): __________________________________

                               Address: __________________________________
Today's
date: ___________          City, State: __________________________________
                                                                  Zip Code
Version No: __________    Phone Number: _________________________

                                                                 Qty    Total
PC QUOTE
    Current diskette and printed manual . . . . . . . . .  $50  ______  ______

Please add $3.50 for shipping and handling                              ______

California residents add appropriate sales tax                          ______

                                              Total enclosed            ______

Diskette format (choose one)        5.25" disk ____    3.5" disk ____

Terms:  Check or money order drawn on a U.S. bank in U.S. funds.

How did you obtain this copy of PC Quote?  ____________________________________

Note that PC Quote has been delivered and accepted by the customer. Upon receipt
of this paid invoice, a printed manual and current disk will be sent.

Suggestions for enhancements or bugs discovered (attach additional sheet if
necessary).

_______________________________________________________________________________

_______________________________________________________________________________

Software you would like to see developed. If your suggestion is accepted, we
will send you a free copy of the software developed (attach additional sheet if
necessary).

_______________________________________________________________________________

_______________________________________________________________________________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1575

     Volume in drive A has no label
     Directory of A:\

    FILE1575 TXT      2443   3-03-90   4:09p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       617  10-13-89   3:30p
    INSTALL  EXE     19216   1-04-90   3:58p
    MANUAL   DOC     56218   1-23-90  11:33a
    PROMPT               5   9-29-87   7:15p
    QUOTARC  EXE    226289   1-26-90  11:22a
    README   DOC      4101   1-23-90  11:30a
            8 file(s)     308927 bytes
                            9216 bytes free
