---
layout: page
title: "PC-SIG Diskette Library (Disk #290)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0290/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0290"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FITT TAX WORKSHEETS"

    A Lotus 1-2-3 worksheet to help you simplify the preparation of your
    Federal Income Tax Return.  You don't have to be a Lotus 1-2-3 expert
    to take advantage of FITT.
    
    Three new forms have been included with the most recent version:
    
    ~ Form 2210 - Underpayment of Estimated Tax by Individuals and
    Fiduciaries
    
    ~ Form 1116 - Computation of Foreign Tax Credit
    
    ~ Form 8615 - Computation of Tax for Children Under Age 14 Who Have
    Investment Income of More Than $1,000
    
    Forms 1040 and 2441, Schedules A, B, C, D, E, G and W can also be
    produced.  In addition to the official IRS forms and schedules, FITT
    includes a number of the worksheets that appear within the Form 1040
    instruction package, such as:
    
    ~ Taxable Refunds of State and Local Income Taxes, Social Security
    Benefits
    
    ~ IRA Worksheets 1 and 2, Self-Employed Health Insurance Deduction
    
    ~ Schedule SE Worksheet
    
    Fill in the blanks on the screen forms and FITT automatically performs
    all the calculations, comparisons, table look-ups and other required
    checks and cross-references.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES290.TXT

{% raw %}
```
Disk No:  290
Program Title:  Fitt Tax Worksheets for 1988
PC-SIG version: 2.3

FITT is a Lotus 1-2-3 worksheet (or template) to simplify the process of
preparing a Federal Income Tax Return.  It's designed so you don't have
to be an expert user of Lotus 1-2-3 in order to take advantage of FITT.
Forms 1040 and 2441, Schedules A, B, C, D, E, G, and W are produced.

Three new forms have been included with the 1988 version: Form 2210-
Underpayment of Estimated Tax by Individuals and Fiduciaries, Form
1116-Computation of Foreign Tax Credit, and Form 8615-Computation of Tax
for Children Under Age 14 Who Have Investment Income of More Than
$1,000.

In addition to the official IRS forms and schedules, FITT now includes a
number of the worksheets that appear within the Form 1040 instruction
package.  These worksheets are: Taxable Refunds of State & Local Income
Taxes, Social Security Benefits, IRA Worksheets 1 and 2, Self-Employed
Health Insurance Deduction, and the Schedule SE worksheet.

Usage:  Financial.

Special Requirements:  LOTUS 1-2-3.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

FITT88   DOC  Manual file.
FITT88   WKS  Lotus worksheet file.
FITTCOMP DOC  Manual file.
WHATSNEW DOC  Manual file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## FITT88.DOC

{% raw %}
```


                                                                       


     
     
     
                        Federal Income Tax Template
     
                                  (FITT)
     
     
         Copyright 1984, 1985, 1986, 1987, 1988 by Ronald A. Ruel
     
     
     
     
     
     
     
     
     
     
     
                     A Tax Preparation & Planning Aid
     
                       For Users Of Lotus 1-2-3 (tm)
     
     
     
     
     
     
     
     
     
     
     
                               1988 Version
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








                                                                       


                     T A B L E   O F   C O N T E N T S
     
     
     1. PREFACE....................................................  1
     
     2. INTRODUCTION...............................................  2
          2.1 What is FITT?........................................  2
          2.2 What FITT is not.....................................  2
          2.3 New Additions To FITT In 1988........................  3
          2.4 Hardware Requirements................................  3
          2.5 Software Requirements................................  5
          2.6 FITT Files...........................................  5
     
     3. OVERVIEW...................................................  7
     
     4. USING THE MENUS............................................ 10
          4.1 The DATA, GO TO, and REINIT menus.................... 10
          4.2 The PRINT menu....................................... 12
          4.3 How to make a selection from a menu.................. 14
          4.4 A shortcut for reaching a menu option................ 14
     
     5. ENTERING YOUR INCOME TAX DATA.............................. 16
          5.1 Order Of Data Entry.................................. 16
          5.2 Cell Protection...................................... 16
          5.3 Two alternative methods for data entry............... 16
          5.4 Use of the @NA Value for "Switches".................. 17
          5.5 Use of the @ERR Value as an Error Flag............... 18
          5.6 A Few Words About Recalculation...................... 19
          5.7 Data Entry Specifics................................. 19
               5.7.1 Form 1040 - U.S. Individual Income Tax
                    Return......................................... 19
               5.7.2 Form 1116 - Computation of Foreign Tax
                    Credit......................................... 22
               5.7.3 Form 2106 - Employee Business Expenses........ 22
               5.7.4 Form 2119 - Sale Or Exchange Of Principal
                    Residence...................................... 22
               5.7.5 Form 2210 - Underpayment Of Estimated Tax By
                    Individuals.................................... 23
               5.7.6 Form 2441 - Credit for Child and Dependent
                    Care Expenses.................................. 23
               5.7.7 Form 4136 - Computation Of Credit For Federal
                    Tax On Fuels................................... 23
               5.7.8 Form 4562 - Depreciation And Amortization..... 24
               5.7.9 Form 4684 - Casualties And Thefts............. 24
               5.7.10 Form 6251 - Alternative Minimum Tax -
                    Individuals.................................... 24
               5.7.11 Form 8396 - Mortgage Interest Credit......... 25
               5.7.12 Form 8582 - Passive Activity Loss
                    Limitations.................................... 25
               5.7.13 Schedule A - Itemized Deductions............. 25
               5.7.14 Schedule B - Interest And Dividend Income.... 26
               5.7.15 Schedule C - Profit Or Loss From Business.... 26
               5.7.16 Schedule D - Capital Gains And Losses........ 26
               5.7.17 Schedule E - Supplemental Income Schedule.... 26
               5.7.18 Schedule F - Farm Income and Expenses........ 27











               5.7.19 Schedule R - Credit For The Elderly And
                    Disabled....................................... 27
               5.7.20 Schedule SE - Computation Of Social Security
                    Self-Employment Tax............................ 27
          5.8 Reinitializing Specific Forms and Schedules.......... 28
     
     6. DISCLAIMER................................................. 29
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








     


                       L I S T   O F   F I G U R E S
     
     
     Figure 1:  FORM portion of the DATA, GO TO, & REINIT menu
          trees.................................................... 11
     Figure 2:  SCHEDULES portion of the DATA, GO TO, & REINIT menu
          trees.................................................... 12
     Figure 3:  WORKSHEETS portion of the DATA, GO TO, & REINIT
          menu trees............................................... 12
     Figure 4:  FORM portion of the PRINT menu tree................ 13
     Figure 5:  SCHEDULE portion of the PRINT menu tree............ 13
     Figure 6:  WORKSHEET portion of the PRINT menu tree........... 13
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     









     February 3 1989  FITT88 User's Manual  Page  1


     1. PREFACE
     
     
     If you decide to make use of this program, and find it to be of
     value, I ask that you become a registered user by sending $35.00
     to:
     
                              Ronald A. Ruel
                            665 Clinton Avenue
                      Washington Township, N.J. 07675
     
     As a registered user, you are entitled to support.  In addition,
     you will be notified of future releases or revisions to the current
     release.  Developing a model of this complexity requires many, many
     hours of painstaking work.  The continued development of this
     product since 1984 is a direct result of your financial support.
     
     Regardless of whether you make a contribution, you are encouraged
     to copy and share this program with others under the following
     guidelines:
     
          -    Do not distribute this program in connection
               with any other product.
     
          -    Do not make the program available for any
               consideration or fee.  A nominal fee not to
               exceed $10.00 may be charged to defray the cost
               of reproduction and distribution.
     
          -    This program must be distributed in unmodified
               form, and include this documentation file.
     
     
     Reference is made in this manual to the following:
     
     Lotus 1-2-3 is a copyrighted program of the Lotus Development
     Corporation.  IBM is a trademark of the International Business
     Machines Corporation.
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








     February 3 1989  FITT88 User's Manual  Page  2


     2. INTRODUCTION
     
     This manual should help you get the most out of using the Federal
     Income Tax Template.  It is not necessary for you to read this
     document all the way through before you get started.  FITT is menu
     driven, and its use should be more or less self-explanatory.  It
     is a good idea to at least read through the sections which deal
     with the specific forms and schedules that you will be using.
     
     If you wish to get started immediately, start up Lotus 1-2-3,
     retrieve the worksheet file called FITT88.WKS, and watch what
     happens.
     
     This document assumes that you have some basic familiarity with
     Lotus 1-2-3.  You should know how to retrieve and store worksheets. 
     You should also understand the concepts of cell protection, and
     recalculation.  These topics will be touched on briefly, but this
     is not intended to be a tutorial on how to use Lotus 1-2-3.
     
     
     2.1 What is FITT?
     
     FITT stands for Federal Income Tax Template.  FITT is a Lotus 1-2-3
     worksheet (or template) intended to simplify the process of
     preparing a Federal Income Tax Return.  It has been designed to be
     easy to use.  You do not have to be an expert user of Lotus 1-2-3
     in order to take advantage of the capabilities of FITT.
     
     FITT contains a total of 24 tax forms and schedules, making it one
     of the most comprehensive tax programs available anywhere.  This
     means that the vast majority of taxpayers can prepare their entire
     Federal Income Tax return using FITT88. In fact, most people will
     need to use only four or five of these forms and schedules.
     
     You use FITT by simply filling in the "blanks" on the appropriate
     tax forms shown on the screen in the same way you would normally
     fill out the actual forms.  FITT takes care of all the calculations
     that need to be made including carrying over information from one
     form to another, looking up numbers in the tax tables, etc.
     
     After you've entered the information, FITT will print out those
     forms that you need in order to file your return.  According to the
     Internal Revenue Service, you cannot computer-generate a tax form
     that requires a signature and establish tax liability. This means
     that the 1040 cover page must be government-issue.
     
     
     2.2 What FITT is not
     
     FITT is not a tax advisor.  No tax software package can be a
     substitute for competent professional advice in what is clearly a
     complex field.  If you are in doubt about any aspect of your income
     tax preparation, do yourself a favor and consult an expert.
     
     Furthermore, this document is not an income tax instruction manual. 








     February 3 1989  FITT88 User's Manual  Page  3


     Many of the instructions from the tax forms have been reproduced 
     in an abbreviated form within FITT for your convenience, however
     it is a good idea to have the actual 1040 package of forms and
     instructions available for reference as you use this program.
     
     
     2.3 New Additions To FITT In 1988
     
     For those of you who have used previous versions of this product
     in past years, there are a few significant additions in FITT88
     worth mentioning.  Three new forms have been included:  Form 2210-
     Underpayment of Estimated Tax by Individuals and Fiduciaries,  Form
     1116-Computation of Foreign Tax Credit, and Form 8615-Computation
     of Tax for Children Under Age 14 Who Have Investment Income of More
     Than $1,000..
     
     In addition to the official IRS forms and schedules, FITT now
     includes a number of the worksheets that appear within the Form
     1040 instruction package.  These worksheets are:  Taxable Refunds
     of State & Local Income Taxes, Social Security Benefits, IRA
     Worksheets 1 and 2, Self-Employed Health Insurance Deduction, and
     the Schedule SE worksheet.
     
     An extra navigational aid has been added to the menus.  In addition
     to the NEXT and PREVIOUS options which appear on all intermediate
     level menus, the lowest level menus now include a FIRST option. 
     This will bring you directly back to the first menu in the series. 
     Previous, you had to use MAIN to go all the way to the top, and
     then proceed back down, or use PREVIOUS to back out one level at
     a time.
     
     The reference manual no longer includes a complete set of all the
     printed forms and schedules.  A number of people suggested that
     they be deleted since anyone who wants to print a complete set can
     easily do so directly from the FITT Print menu.
     
     This has several advantages.  The resulting reduction in the size
     of the documentation file allows all the FITT files to reside on
     the distribution diskette in uncompressed form.  This saves you the
     trouble of having to "unsqueeze" the files onto another disk before
     you can use them.  This also cuts down on the time required to
     download these files from bulletin board systems.
     
     These are the main differences that will be obvious to previous
     users.
     
     
     2.4 Hardware Requirements
     
     FITT will run on any computer that can run Lotus 1-2-3, and has
     sufficient memory to accommodate the FITT worksheet.  The minimum
     memory required may vary from machine to machine, and even from
     configuration to configuration on a given machine.
     
     Once you have loaded Lotus 1-2-3, FITT88 consumes about 206K of








     February 3 1989  FITT88 User's Manual  Page  4


     memory under version 1A, and about 204K of memory under version
     2.01.  The improved memory allocation scheme employed in version
     2 doesn't significantly reduce the memory required because FITT is
     a very "dense" worksheet with little wasted space.
     
     On most configurations, this probably means you'll need 512K of RAM
     to load the entire worksheet.  Hopefully, this will not be a
     problem to the vast majority of you since memory limitations are
     becoming less of an issue these days.
     
     If you don't have sufficient memory to load the entire worksheet,
     Lotus 1-2-3 will beep and display the MEMORY FULL indicator in the
     upper left corner of the screen.  If this is the case, you should
     check to see how much of the worksheet got loaded in.  You may find
     that FITT can still be used.
     
     Lotus 1-2-3 loads worksheets a row at a time starting from the
     upper left corner and ending with the lower right corner.  The
     structure of FITT has been designed with this in mind.  The most
     critical portions of the worksheet, and the most commonly used
     forms and schedules have been positioned so that they will be
     loaded into memory first.
     
     Therefore, it is quite likely that you can still make use of FITT
     without the benefit of some of the less frequently used forms at
     the bottom of the worksheet.  If you get the MEMORY FULL error
     message, press the Esc key to clear the error. Then use the GO TO
     menu to move to each of the forms and schedules you need to prepare
     your particular tax return and check them to see if they are
     intact.
     
     I will gladly produce special versions of FITT88 containing
     specific forms and schedules for registered users who want a subset
     of the complete package to fit within limited memory.
     
     There are no special printer requirements.  The tax forms and
     schedules are printed without the use of set-up strings to perform
     any special printer control functions.  This enables any text
     printer to be used. All of the printed reports are based on an 80
     character print line, and a 66 line page.
     
     This means that you can insert your own setup string within
     worksheet to accommodate any special requirements of your printer. 
     For example, if you have an HP LaserJet printer, the page length
     default is normally 60 lines.  You could change it manually by
     using the front control panel each time you use FITT, or you could
     use the Print Options Setup (/PPOS\027.......) command to specify
     the appropriate setup string to change the page length to 66 lines. 
     Lotus 1-2-3 will then send this sequence of characters to the
     printer at the start of each printing operation.
     
     If you enter a setup string, remember to save the worksheet so that
     it is retained for future use.
     
     








     February 3 1989  FITT88 User's Manual  Page  5


     2.5 Software Requirements
     
     FITT was written and tested using Lotus 1-2-3 Release 1A.  I do not
     know whether there were any differences in the worksheet structure,
     or the macro command language under release 1 that will prevent
     FITT from working properly.  If you've got release 1A, there is no
     problem. If you've got release 1, try it and see if it works.
     
     FITT88 is compatible with the 1-2-3 release 2 and 2.01 as well. 
     The first time you retrieve FITT, it will take longer than usual
     because Lotus 1-2-3 is converting the file from Release 1 to
     Release 2 format as it loads it in.  When you save it, the file
     name extension becomes WK1 instead of WKS, signifying that the
     worksheet is in Release 2 format. The next time this file is
     retrieved, the conversion won't have to be repeated, and it will
     load more quickly. Note that the original file (FITT88.WKS) remains
     intact.
     
     I had also hoped to provide FITT88 in directly executable form by
     using one of the spreadsheet compilers that are available from
     third party vendors.  Unfortunately, the compiler I tried was
     unable to successfully process this worksheet for some reason. 
     Since I haven't had time to pursue this problem, FITT88 still
     requires the use of Lotus 1-2-3 for now.
     
     
     2.6 FITT Files
     
     FITT consists of a collection of three separate files.  The
     worksheet file is named FITTyy.WKS.  The yy after the acronym
     signifies the last two digits of the tax year for which this
     version was designed. In this case, the file is named FITT88.WKS
     because it is the version to be used in preparing the federal tax
     return for the 1988 tax year.  Those of you who are users of Lotus
     1-2-3 will recognize the familiar WKS extension  which signifies
     that the file is a Lotus 1-2-3 release 1A worksheet.
     
     This documentation is contained in a file called FITTyy.DOC.  It
     is a plain ASCII text file which can be displayed or printed by
     using the DOS TYPE command.
     
     A third file called WHATSNEW.DOC contains the contents of section
     2.3.  This file is intended for experienced users who don't like
     reading manuals in order to find out what has changed.  (I'm one
     of these people.)
     
     There is a fourth file called FITTCOMP.DOC.  It contains a chart
     that compares FITT88 with 13 other commercially available tax
     preparation programs.  The chart shows which forms and schedules
     are supported by each program.  Personally, I think FITT88 compares
     quite well, but you be the judge.
     
     FITT is distributed in two ways.  It is available directly from me
     on diskette, and it can be downloaded from many bulletin board
     systems.  On bulletin boards, FITT is distributed in the form of








     February 3 1989  FITT88 User's Manual  Page  6


     an archive file called FITTyy.ARC.  This file contains the
     worksheet (FITTyy.WKS), this documentation file (FITTyy.DOC), and
     the whats new file (WHATSNEW.DOC).  The fourth file is kept
     separate, and is called FITTCOMP.ARC.  The distribution diskettes
     I send out contain all four files in their normal uncompressed
     form.
     
     To run FITT, start up Lotus 1-2-3, place a diskette containing the
     file FITTyy.WKS in the drive which is the default start up
     directory for 1-2-3 (usually  B),  or copy the file into the
     subdirectory on your hard disk which serves as the default for
     Lotus 1-2-3, and enter the following key strokes:
     
          /FRFITTyy~  (~ signifies the ENTER key.)
     
     FITT will start up by itself, and display the title screen. 
     Pressing the ENTER key will get you to the main menu.  That's all
     there is to it.
     
     It is important that you keep the original worksheet file intact
     in case you decide to reinitialize any of the forms or schedules
     back to their original state.  There is a set of menus to
     facilitate this, but it requires that the original copy of
     FITTyy.WKS be available in the default directory of 1-2-3.  For
     this reason, you should make a copy of FITTyy.wks, assigning it a
     different name, and use this copy instead of the original.
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








     February 3 1989  FITT88 User's Manual  Page  7


     3. OVERVIEW
     
     FITT has been designed to be as easy to use as possible. The tax
     forms and schedules included in FITT have been modeled after the
     actual forms.  A "fill-in-the-blanks" approach is used so that the
     data can be entered in the same way that it is on the actual tax
     forms.  Some changes in format were inevitable due to constraints
     imposed by Lotus 1-2-3 and the display screen.  The form layout and
     text are close enough to the actual forms so that there should be
     no confusion.
     
     While FITT will considerably simplify tax return preparation, its
     greatest value is probably in tax planning, and examining the
     implications of different filing strategies.  For example, it can
     be used to easily determine whether a married couple would be
     better off filing separate returns, or filing a joint return. 
     After you fill out Schedule A, it will automatically compute the
     standard deduction to which you are entitled, compare this with
     your itemized deductions, and use whichever are greater. If you
     complete Schedule D, FITT will figure the Alternative Tax
     Computation and use it if it results in less tax compared to the
     tax schedules.
     
     FITT can also be used to prepare Pro Forma returns during the year
     to estimate your tax liability in advance, so you can take action
     to minimize it.  In addition, it can help you determine the right
     amount to be withheld from your salary. If too much is being
     withheld, then you're giving Uncle Sam an interest-free loan.  If
     too little is being withheld, you may be subject to penalties and
     have to make estimated tax payments.
     
     FITT is based on the U.S. Individual Income Tax Return, and
     contains the following forms and schedules:
     
          Form 1040 -    U.S. Individual Income Tax Return
          Form 1116 -    Computation of Foreign Tax Credit (Individual,
                         Fiduciary, or Nonresident Alien Individual)
          Form 2106 -    Employee Business Expenses
          Form 2119 -    Sale Or Exchange Of Principal Residence
          Form 2210 -    Underpayment of Estimated Tax by Individuals
                         and Fiduciaries
          Form 2441 -    Credit For Child And Dependent Care Expenses
          Form 3903 -    Moving Expenses
          Form 4136 -    Computation of Credit for Federal Tax on
                         Gasoline and Special Fuels
          Form 4137 -    Computation of Social Security Tax on
                         Unreported Tip Income
          Form 4562 -    Depreciation and Amortization
          Form 4684 -    Casualties And Thefts
          Form 4835 -    Farm Rental Income and Expenses
          Form 6251 -    Alternative Minimum Tax - Individuals
          Form 8396 -    Mortgage Interest Credit
          Form 8582 -    Passive Activity Loss Limitations
     
          Form 8615 -    Computation of Tax for Children Under Age 14








     February 3 1989  FITT88 User's Manual  Page  8


                         Who Have Investment Income of More Than $1,000
          Schedule A -   Itemized Deductions
          Schedule B -   Interest And Dividend Income
          Schedule C -   Profit Or (Loss) From Business
          Schedule D -   Capital Gains And Losses
          Schedule E -   Supplemental Income Schedule
          Schedule F -   Farm Income And Expenses
          Schedule R -   Credit For The Elderly And The Permanently And
                         Totally Disabled
          Schedule SE-   Computation Of Social Security Self-Employment
                         Tax
     
     FITT also contains the following worksheets contained within the
     Form 1040 instruction package:
     
     -    Taxable Refunds of State & Local Income Taxes
             (Form 1040-line 10)
     -    Social Security Benefits Worksheet
             (Form 1040-lines 21a and 21b)
     -    Self-Employed Health Insurance Deduction Worksheet
             (Form 1040-line 26)
     -    IRA worksheets 1 and 2 (Form 1040-lines 25a and 25b)
     -    Schedule SE worksheet (Schedule SE-line 8)
     
     
     In addition, FITT contains the Tax Rate Schedules X (Single
     Taxpayers), Y (Married Taxpayers Filing Joint Returns or Filing
     Separate Returns, and Qualifying Widows and Widowers), and Z
     (Unmarried Heads of Household).
     
     The Tax Table is not used.  The IRS states that it should be used
     by persons with taxable incomes of less than $50,000.  In these
     cases, FITT uses the Tax Rate Schedules to achieve the same result
     by adjusting taxable income to place it in the middle of the
     appropriate bracket before performing the calculation specified by
     the corresponding Tax Rate Schedule.
     
     When FITT uses the Tax Rate Schedules, it checks to see if the
     taxable income falls within the highest bracket on the schedule
     being used.  If it does, then FITT will automatically use the
     special Tax Rate Schedule Worksheet to properly compute the tax.
     
     On the page in the 1040 instruction package containing the 1988 Tax
     Rate Schedules, you will see the following notice:  "Caution: 
     Pending legislation would require married persons filing separately
     who did not claim an exemption for their spouse to add $546 to the
     result otherwise figured on line 7 above.  Get Pub. 553, Highlights
     of 1988 Tax Changes, to find out whether this law was passed." 
     Believe it or not, the IRS could not tell me if in fact this change
     had passed until today (2/3/89).  Publication 553 is still not
     available (I've had it on order for two months, and neither the
     central or local IRS offices have it yet.)
     
     For those of you who would be affected by this change, I can only
     relay the answer I just received after repeated calls over the last








     February 3 1989  FITT88 User's Manual  Page  9


     month had been fruitless:  "As far as we know, nothing has
     changed."  Therefore, I have not included this extra $546 in the
     tax calculation.  It's no wonder that the IRS has difficulty in
     getting people to file their returns earlier.
     
     When FITT is retrieved, the title screen will appear.  Pressing the
     enter key causes the main menu screen to be displayed. You will
     notice that a version letter appears on this screen. FITT is
     initially released as Version A for a particular tax year. Should
     subsequent versions be released with improvements or corrections,
     the version letter will be updated accordingly. This will enable
     you to identify whether or not you have the most current version.
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








     February 3 1989  FITT88 User's Manual  Page  10


     4. USING THE MENUS
     
     FITT utilizes menus which appear on the top two lines of the
     screen.  The first line contains the available choices on that
     particular menu. You select a choice by using the left and right
     arrow keys to move the pointer from one item to another.  You will
     note that as the pointer is moved to each item, the item appears
     in inverse video.  The text on the line below also changes to
     provide a brief description of that particular menu choice.
     
     The main menu choices are:  DATA (to enter your tax data), GO TO
     (to quickly go to a particular form or schedule), PRINT (to print
     out one or more of your completed forms), REINIT (to reinitialize
     a particular form or schedule), and QUIT (to leave the menu
     system.)  They appear like the standard Lotus 1-2-3 command menus
     with the choices listed across the top of the screen.  The main
     menu appears as follows:
     
          DATA    GOTO    PRINT   REINIT  QUIT
     
     Each of these options will be described in more detail in the
     following sections.
     
     The menu structure has been designed so that at any point, you can
     return to the previous menu used, or return to the main menu.  This
     flexibility permits you to efficiently move back and forth through
     the various choices.
     
     
     4.1 The DATA, GO TO, and REINIT menus
     
     The DATA, GO TO, and REINIT choices on the main menu bring up very
     similar looking menus, the primary difference being the operation
     they invoke.  DATA allows you to enter data on one or more forms
     using a guided "fill-in-the-blanks" approach.  GO TO provides you
     with a facility to quickly "jump" from one form to another.  REINIT
     allows you to reinitialize a particular form or schedule back to
     its original state using the copy on the original FITTyy.WKS file
     on the distribution disk.
     
     All of the forms are grouped within one set of menus, and the
     schedules grouped within a second set. The sub-menus for forms
     present the menu choices in numerical order. Thus, Form 1040 is
     shown first, and Form 8615 is shown last. Schedules are ordered
     alphabetically, with Schedule A appearing first, and Schedule SE
     appearing last.
     
     Many of the forms and schedules supplied by the Internal Revenue
     Service must be filled out on both the front and back sides.  This
     structure has been preserved in FITT.  The front and back sides of
     the affected forms are listed as separate menu choices within the
     DATA, GO TO, and REINIT menus even though they are part of the same
     form.  Each form is identified in the menus by its number, and each
     schedule by its letter. When the form or schedule has two sides,
     the suffix -Frt designates the front sheet, and -Bak designates the








     February 3 1989  FITT88 User's Manual  Page  11


     back sheet.  For example, the actual Form 1040 consists of one
     sheet of paper on which both front and back sides are used.  In
     this case, the front sheet of form 1040 appears in the menus as
     1040-Frt, and the back sheet as 1040-Bak.
     
     Within the FITT worksheet, a row of equal signs is used to identify
     the start and the end of a physical page on the corresponding IRS
     forms and schedules.  This convention makes it easier to navigate
     throughout the worksheet, and know when you've moved from one form
     to another, or one side to another.
     
     The distinction between front and back sheets is not made within
     the PRINT menus. My rationale is that a form or schedule should
     always be printed in its entirety.  The GO TO, DATA, and REINIT
     menus deal specifically with the front and back sheets because you
     may wish to enter, change, or view data on one side of a form only.
     
     When you choose either the DATA, GOTO, or REINIT option shown on
     the main menu, a second level menu appears as follows:
     
          FORMS  SCHEDULES  WORKSHEETS  MAIN
     
     From here, choosing Forms, Schedules, or Worksheets will bring you
     to a third menu level.  From this level down, the menu trees are
     the same regardless of which option you started with.  The
     structure of the form menu tree is shown in Figure 1.  All figures
     only show the brief menu option name.  The actual menus themselves
     have a second line of explanatory text that appears directly below
     the command line.  This text fully names the specific form,
     schedule, or worksheet that is currently being highlighted.
     
     ----------------------------------------------------------------
      Figure 1:  FORM portion of the DATA, GO TO, & REINIT menu trees
     
     1040-FRT  1040-BAK  1116-FRT  1116-BAK  2106-FRT  NEXT  PREV  MAIN
     
     2106-BAK  2119      2210-FRT  2210-BAK  2441      NEXT  PREV  MAIN
     
     3903      4136      4137      4562-FRT  4562-BAK  NEXT  PREV  MAIN
     
     4684-FRT  4684-BAK  4835      6251      8396      NEXT  PREV  MAIN
     
     8582      8615      FRONT     PREV      MAIN
     -----------------------------------------------------------------
     
     
     The structure of the schedule menu tree is shown in Figure 2.
     
     
     
     
     
     
     
     








     February 3 1989  FITT88 User's Manual  Page  12


     ----------------------------------------------------------------
     Figure 2:  SCHEDULES portion of the DATA, GO TO, & REINIT menu trees
     
     A         B         C-FRT     C-BAK     D-FRT     NEXT  PREV  MAIN
     
     D-BAK     E-FRT     E-BAK     F-FRT     F-BAK     NEXT  PREV  MAIN
     
     R-FRT     R-BAK     SE-FRT    SE-BAK    FIRST     PREV  MAIN
     ----------------------------------------------------------------
     
     
     The structure of the worksheet menu is shown in Figure 3.
     
     ----------------------------------------------------------------
     Figure 3:  WORKSHEETS portion of the DATA, GO TO, & REINIT menu trees
     
     1040-L10  1040-L21  1040-L26  IRA-1  IRA-2  SE-L8  PREV  MAIN
     ----------------------------------------------------------------
     
     
     There is one case where the Worksheet menu is slightly different
     from what is shown in Figure 3.  The Schedule SE-Line 8 worksheet
     does not appear as an option within the DATA menu tree.  This
     worksheet does not contain any locations for entry of data by the
     user.  FITT automatically activates this worksheet when necessary,
     and fills in all of the required information.  For this reason, you
     can access it from the GOTO, PRINT, and REINIT menus only.
     
     
     
     4.2 The PRINT menu
     
     The print menu allows you to select individual forms and schedules
     to be printed. In addition, groups of forms and schedules can be
     printed automatically.  FITT automatically initiates a
     recalculation before printing anything to guarantee that the
     printed results will be up-to-date.
     
     Each printed page contains a standard heading which consists of the
     date on the left, a title in the center, and a page number on the
     right.  The title consists of the word "Schedule" or "Form"
     followed by the appropriate number or letter, and the words "-Front
     Sheet" or "- Back Sheet" where applicable.  The page number
     corresponds to the printed page, and it always begins with 1 for
     each form or schedule, even if a group of them are being printed
     at one time.
     
     For example, Form 2119 - Sale or Exchange of Principal Residence
     requires two printed pages, even though the IRS form is contained
     entirely on the front sheet. Schedule D on the other hand consists
     of a front sheet printed as pages 1 and 2, and a back sheet printed
     as page 3.
     
     The printouts have been designed to make the page breaks fall in
     a logical place.  This is accomplished by dynamically changing the








     February 3 1989  FITT88 User's Manual  Page  13


     top and bottom margins during the printing process.  Therefore you
     shouldn't think anything is wrong with your printer when some forms
     begin printing farther down the page than others.  The page breaks
     were calculated on the basis of a 66 line page.
     
     When you choose the PRINT option shown on the main menu, a second
     level menu appears as follows:
     
     FORMS  SCHED  WRKSHEETS  1040-ABD  ALL-Frms  ALL-Schs  ALL-F&S MAIN
     
     From here, choosing the Forms, Schedules, or Worksheets options
     will bring you to a third menu level.  From this level down, the
     menu trees are similar to those shown in Figures 1-3.  The
     difference is that each form or schedule is always printed in its
     entirety.  You do not have the option of printing out only the
     front side or back side.  The structure of the form menu tree is
     shown in Figure 4.
     
     ----------------------------------------------------------------
              Figure 4:  FORM portion of the PRINT menu tree
     
          1040    1116    2106    2119    2210    NEXT    PREV    MAIN
     
          2441    3903    4136    4137    4562    NEXT    PREV    MAIN
     
          4684    4835    6251    8396    8582    NEXT    PREV    MAIN
     
          8615    FIRST   PREV    MAIN
     ----------------------------------------------------------------
     
     
     Figure 5 shows the structure of the SCHEDULE portion of the PRINT
     menu tree.
     
     ----------------------------------------------------------------
            Figure 5:  SCHEDULE portion of the PRINT menu tree
     
          A       B       C       D       E       NEXT    PREV    MAIN
     
          F       R       SE      PREV    MAIN
     ----------------------------------------------------------------
     
     
     The WORKSHEET print menu is shown below in Figure 6.
     
     ----------------------------------------------------------------
            Figure 6:  WORKSHEET portion of the PRINT menu tree
     
     1040-L10  1040-L21  1040-L26  IRA-1  IRA-2  SE-L8  PREV  MAIN
     ----------------------------------------------------------------
     
     
     The 1040-ABD option on the PRINT menu prints out the Form 1040, and
     Schedules A, B, and D.  These are probably the most commonly used
     set of forms, and this option provides a convenient way to print








     February 3 1989  FITT88 User's Manual  Page  14


     this group out at once.
     
     The All-Frms option prints out each and every form in numerical
     order.  The All-Schs option will print out each Schedule in
     alphabetical order.  Finally, the All-F&S option will produce a
     complete set of all forms and schedules.
     
     For these print options that print out a group of forms,
     recalculation is initiated only once at the start of the group, and
     not repeated after each form since FITT retains control and
     updating is not possible until after the operation is completed.
     
     
     4.3 How to make a selection from a menu
     
     You make your selection by moving the pointer using the left arrow
     and right arrow keys on the numeric pad on the right side of the
     keyboard until the desired choice is highlighted in inverse video. 
     Pressing the ENTER key will then invoke your choice.
     
     Note that the Num Lock key must be disengaged in order for the
     arrow keys to work. Lotus 1-2-3 displays NUM in the bottom right
     corner of the screen if it is engaged.  Pressing the Num Lock key
     once causes the indicator to disappear showing that it has been
     disengaged.  If you have the newer keyboard with separate cursor
     control keys, then you can use these keys regardless of how Num
     Lock is set.
     
     The NEXT, FIRST, PREVIOUS, and MAIN selections can be invoked by
     the method described above, or simply pressing the letter N key for
     NEXT, F for FIRST, P for PREVIOUS, and M for MAIN.
     
     
     4.4 A shortcut for reaching a menu option
     
     The main menu is automatically brought up after FITT is loaded, and
     the initial title screen is displayed.  If you leave the menu
     command mode via the QUIT selection, you may wish to reactivate the
     main menu without restarting FITT.  Holding down the Alt key and
     pressing the M key (Alt-M) will bring up the main menu anytime you
     are not in the menu command mode.  Schedule A, for example, could
     be printed out by following these steps:
     
          -       Bring up the main menu (Alt-M) if not under menu
                  control
     
          -       Select the PRINT option
     
          -       Select the SCHEDULE option
     
          -       Select the A option to print Schedule A
     
     There is a shortcut available for you to use if you wish.  Holding
     down the Alt key and pressing the P key (Alt-P) will immediately
     bring up the PRINT  menu, bypassing the first and second steps








     February 3 1989  FITT88 User's Manual  Page  15


     shown above.  Similarly, Alt-D will bring up the DATA menu, Alt-G
     will bring up the GO TO menu, and Alt-R will bring up the REINIT
     menu.
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








     February 3 1989  FITT88 User's Manual  Page  16


     5. ENTERING YOUR INCOME TAX DATA
     
     Entering your income tax data involves inputting your data on the
     appropriate forms which apply to you.  It is unlikely that you will
     need to use every one of the forms and schedules that FITT
     provides.  A few people will only need to use Form 1040.  Most
     people will probably need to use Schedules B and D to report
     interest and dividend income and capital gains and losses.  Many
     will need to use Schedule A to report itemized deductions.  The
     remaining forms and schedules will apply to a relatively small
     number of taxpayers.  They have been included to insure that FITT
     will have maximum utility for the vast majority of people.
     
     
     5.1 Order Of Data Entry
     
     In general, the order in which you enter your data doesn't matter. 
     I recommend that you start with Form 1040, and enter your filing
     status and exemptions.  Then you should complete the income section
     line by line and use the supplementary forms when you reach a line
     that requires it.
     
     You can complete the forms in a different order if you wish.  You
     will see the Lotus 1-2-3 indicators NA or ERR displayed in those
     locations where there are calculations which require data that has
     not yet been entered.  This won't matter since the errors will be
     removed once all of the required data has been entered.
     
     
     5.2 Cell Protection
     
     To safeguard the contents of those cell locations which should not
     be altered by the user, the cell protection feature has been
     employed. Those cells in which the user may enter data are in an
     "unprotected" state. These cells are highlighted in green if you
     are using a color monitor, or appear in a higher intensity if you
     are using a monochrome monitor.
     
     The remaining cells are "protected".  If you attempt to enter data
     in one of these cells, you will hear a beep, and the message
     "Protected Cell" will appear in the lower left corner of the
     display.  You will not be able to proceed until you reset the error
     condition by pressing the Esc key.
     
     
     5.3 Two alternative methods for data entry
     
     There are two different methods that you can use to enter your
     data.  The method you choose is purely a matter of personal
     preference.
     
     The first method is to use the DATA menu, and select the specific
     form or schedule in which you wish to enter data.  This will cause
     the designated form to appear, and move the cell pointer (the
     rectangular bar in inverse video that points to the current cell)








     February 3 1989  FITT88 User's Manual  Page  17


     to the first unprotected cell.  When you use the arrow keys on the
     numeric keypad to move the cell pointer, it will skip over any
     intervening protected cells to the next unprotected cell.
     
     In general, pressing the right arrow key will move you through the
     unprotected cells on a form in the proper sequence from top to
     bottom.  Pressing the HOME key on the numeric keypad moves the cell
     pointer to the unprotected cell closest to the upper left corner
     of the form.  Pressing the END key moves the cell pointer to the
     unprotected cell closest to the lower right corner of the form.
     
     When you are done entering data on the form, pressing the ENTER key
     without entering any data will return you back to the DATA menu. 
     From here, you can select the next form or schedule that you wish
     to complete.
     
     The second method for entering data is to use the GO TO menu to
     move to the form or schedule of your choice.  You then move the
     cell pointer to the unprotected cells on that form and enter the
     data.
     
     There are distinct differences between these two methods of data
     entry.  When you use the DATA menu, you automatically skip from one
     unprotected cell to another which makes it easier to determine
     where the data needs to be entered.  The disadvantage is that you
     may not see all parts of the form or schedule; you will only see
     those parts containing the unprotected cells.  This becomes more
     of a problem when you wish to view the bottom of a form where the
     results are shown, but can't get there because there are no
     unprotected cells in that vicinity.  You also don't have complete
     flexibility of movement.
     
     When you enter data outside of the control of the menu system, you
     will have to move the cell pointer through a greater range of cell
     locations yourself.  While this requires more manipulation of the
     cell pointer on your part, you do have the flexibility to move
     anywhere on the forms you wish.  The choice of method is yours.
     
     
     5.4 Use of the @NA Value for "Switches"
     
     As you look through the various forms and schedules, you will see
     that NA appears in a number of different places.  They have special
     significance, and it is important for you to understand how they
     are used within FITT88.
     
     In Lotus 1-2-3, there is a special function: @NA. This means Not
     Available.  The important thing is that there is another function
     which can be used to test for the presence or absence of this value
     in a specific cell.  FITT88 makes extensive use of this value as
     a switch.  In many places within the Federal Tax Return, you are
     supposed to check a box in answer to a question, and follow
     different calculation methods depending on your answer.  FITT88
     uses the NA value to indicate the absence of one of these check
     marks.  When you "check" a box in FITT88 that contains NA, you are








     February 3 1989  FITT88 User's Manual  Page  18


     in effect setting a switch (by removing the NA value) which will
     cause a different sequence or method of calculation to occur.
     
     An example should make this clear.  On the back sheet of Form 1040,
     there are a series of questions on lines 33a, 33b and 33c.  An NA
     appears next to each of these questions.  Whether or not you remove
     the NA values from these lines will make a significant difference
     in the way FITT88 works.
     
     If you haven't removed any of the NA values on these lines, FITT88
     will apply the standard deduction rules, and compare the
     appropriate standard deduction with your itemized deductions (if
     any) from Schedule A to determine which would be more advantageous. 
     If you remove the NA value from line 33c, you are signaling FITT88
     that you are married filing a separate return and your spouse
     itemizes deductions, or that you are a dual- status alien. This
     means that you are not allowed to claim the standard deduction.
     Accordingly, FITT88 will not calculate one.
     
     If you removed any of the NA values from line 33a, then the special
     Standard Deduction tables are used.  This usually results in a
     higher deduction.  If you remove the NA value from line 33b
     indicating that you can be claimed as a dependent on another
     person's return, FITT88 will use the special Worksheet for
     Dependents to compute the proper deduction.
     
     There are two points to this lengthy explanation.  First, it is
     important for you to answer these types of questions carefully and
     correctly by removing or not removing the appropriate NA values. 
     Secondly, if you remove an NA value and change your mind, you must
     enter @NA to restore this special value.  Simply entering the
     letters NA will not have the same affect even though the cell
     display may appear that way.
     
     
     5.5 Use of the @ERR Value as an Error Flag
     
     As we all know, simply filling in the correct information on a tax
     return is tough enough by itself even if a program is doing all the
     calculations for us.  There are lots of opportunities to make
     mistakes.  For example, on some forms losses are to be entered as
     negative numbers, and on others as positive numbers.
     
     I have tried to build in as much error checking as possible to help
     you catch these kinds of errors.  The ERR value is used to indicate
     that you've entered something that doesn't make sense.  Therefore,
     if you see ERR displayed on a form or schedule, don't ignore it. 
     Check the information that you've entered in the immediate vicinity
     because something is wrong.
     
     For example, on line 5 of the front of Form 1040, you must enter
     your filing status in the form of a number from 1 to 5.  There is
     a formula in the cell immediately to the right which checks this
     value.  If it is less than 1 or more than 5, the ERR value will be
     displayed in this cell.








     February 3 1989  FITT88 User's Manual  Page  19


     
     
     5.6 A Few Words About Recalculation
     
     Due to the size and complexity of FITT, recalculation of the
     worksheet takes several seconds on an 8088-based PC (which really
     isn't very long - one of my 1-2-3 worksheets takes over 10
     minutes).  If this recalculation took place every time a data item
     was entered, the resulting pause after each entry would quickly
     become annoying.  Since it isn't necessary to recalculate this
     often, the recalculation mode has been set to manual.  This means
     that recalculation will only take place on demand when you press
     the F9 function key.
     
     The disadvantage of this approach is that you must remember to
     invoke recalculation before examining any results.  You can tell
     if recalculation is required by looking for the CALC indicator in
     the lower right portion of the screen.  If it is present, it
     signifies that something has been changed since the last time the
     worksheet was recalculated.
     
     If you enter data through the use of the DATA menu, the worksheet
     is automatically recalculated for you when you exit from entering
     data in a particular form or schedule.  This is another advantage
     of the DATA menus; you don't have to be concerned about invoking
     recalculation.
     
     Whenever you initiate a printing operation from the print menu, the
     worksheet is recalculated first before printing.  This guarantees
     that the printed information is correct and up-to-date.
     
     I'm emphasizing this subject because all too often, I've seen
     worksheets yield incorrect answers because the user (myself
     included) forgot to invoke recalculation before recording the
     results.
     
     
     5.7 Data Entry Specifics
     
     In general, you need only follow the instructions contained in your
     1040 package to supply the data required by FITT.  In the sections
     that follow, specific areas that may require clarification are
     treated on a form-by-form basis.  In forms where several
     alternative calculation methods are possible, certain "switches"
     may need to be set as described earlier to indicate the method
     you've chosen.  These "switches" will be described as well.
     
     A number of the forms and schedules are not treated in the
     following sections because their operation within FITT88 is self-
     explanatory.
     
     
     5.7.1 Form 1040 - U.S. Individual Income Tax Return
     
     On the top of this form, you will see space for identifying








     February 3 1989  FITT88 User's Manual  Page  20


     information like your name and social security number.  Completing
     this section is entirely optional since it does not affect the
     calculations in any way.  This is also true for the other tax forms
     and schedules as well.  If you are preparing several alternate tax
     returns, you might wish to enter some text in this section to
     identify which alternative this return represents.
     
     In the Filing Status section, you must enter a number (1 through
     5) to indicate your filing status instead of the check mark in a
     box on the real Form 1040.  Entering a number outside this range
     will cause the ERR indicator to be displayed immediately to the
     right.
     
     In the exemptions section, you must remove the NA on those parts
     of lines 6a, and 6b which apply to you.  Complete section 6c to add
     your dependents.
     
     You are to enter the total of your wages, salaries, tips, etc. on
     line 7.  FITT88 will add the excess reimbursement reported on line
     9 of Form 2106, and unreported tips reported on line 3 of Form 4137
     to the number that you enter, and place the total in the cell
     immediately to the right.
     
     There are three cases where the use of a supplementary schedule is
     optional.  FITT has been set up under the assumption that Schedule
     B for interest and dividend income will be used, and brings the
     totals from this schedule forward onto lines 8a and 9 of Form 1040. 
     Similarly, the appropriate amount from Schedule D for capital gains
     and losses is brought forward to line 13.  If you do not have to
     file these schedules, it is possible for you to enter the data
     directly onto the appropriate lines of Form 1040.
     
     Line 8 contains the total interest income reported on Part I of
     Schedule B.  If this total is $400 or less, you don't need to
     complete Part I of Schedule B.  The amount can be entered directly
     on this line.  This cell location has been protected to prevent
     accidental obliteration of its formula.  (See section 5.2 for more
     information about cell protection.)  Therefore you will have to
     unprotect this cell before you can enter your total interest
     income.
     
     You cannot unprotect a cell when you have entered data entry mode
     via the DATA menu.  If you are in data entry mode, you must first
     exit this mode by pressing the ENTER key.  Then use the GO TO menu
     to bring you to the first page of Form 1040, and move the cell
     pointer to line 8a of this form.  Once the cell pointer is
     positioned on line 8a where interest income is to be entered, you
     can unprotect the cell by pressing the Alt-U keys.  Now you can
     enter your interest income directly on line 8 without using
     Schedule B.
     
     Similarly, line 9 contains dividend income from Part II of Schedule
     B.  If the amount of your dividends are $400 or less, then you may
     unprotect this cell and enter the total directly. 
     








     February 3 1989  FITT88 User's Manual  Page  21


     Line 13 should only be completed if you do not need Schedule D for
     other capital transactions.  You will have to unprotect this cell
     before entering your capital gain distributions.
     
     Line 16b should contain the taxable portion of line 16a.  Therefore
     if the amount entered on line 16b is larger than 16a, the ERR
     indicator will appear immediately above the amount on line 16b. 
     The same check is performed on line 20b.
     
     A number of lines on the front sheet of Form 1040 require you to
     complete the associated forms, schedules, or worksheets.  They are:
     
          -       lines 8a & 9-Schedule B (Interest And Dividend Income)
          -       line 10-Taxable Refunds of State and Local Income   
                     Taxes worksheet
          -       line 12-Schedule C (Business Income Or Loss)
          -       line 13-Schedule D (Capital Gains and Loss)
          -       line 18-Schedule E (Supplemental Income Schedule)
          -       line 19-Schedule F (Farm Income Or Loss) and
          -       lines 21a and 21b-Social Security Benefits Worksheet
          -       line 24-Form 2106 (Employee Business Expenses).
          -       lines 25a and 25b-IRA Worksheet 1 or 2
          -       line 26-Self-Employed Health Insurance Deduction   
                     Worksheet
     
     If the ERR indicator appears on any of these lines, then you should
     go back and recheck the information that you entered on the related
     form, schedule, or worksheet.  For example, you can only use one
     of the two IRA worksheets to compute the deduction.  FITT checks
     to make certain that only one of those worksheets contain non-zero
     values.  If this is not the case, FITT alerts you to this fact by
     displaying the ERR indicator on lines 25a and 25b.  Once you have
     put zero values back in one of these worksheets (either through
     data entry or the reinitialization function), the ERR indicators
     will disappear after the first recalculation.
     
     On the back sheet of Form 1040, line 34 contains your total
     deductions from Schedule A if they exceed the standard deduction
     to which you are entitled.
     
     Line 38 contains the tax which is computed from the appropriate tax
     rate schedule based on your filing status, and taxable income.  As
     described earlier, a complete copy of the tax table is not used.
     Taxable incomes below $50,000 are rounded to the center of the tax
     bracket to yield the same result as if the tax table were used. 
     Note that if you've completed Form 8615-Computation of Tax for
     Children Under Age 14 Who Have Investment Income of More Than
     $1,000, FITT88 will use the amount calculated on line 18 of this
     form.
     
     In the Credits section, lines 41, and 42 are brought forward from
     Form 2441 (Credit for Child and Dependent Care Expenses), and
     Schedule R (Credit for the Elderly or the Disabled) respectively. 
     Below line 42, the Mortgage Interest Credit is transferred from
     line 13 of Form 8396.








     February 3 1989  FITT88 User's Manual  Page  22


     
     In the Other Taxes section, line 48 comes from Schedule SE
     (Computation of Social Security Self- Employment Tax), line 49 from
     Form 6251 (Alternative Minimum Tax - Individuals), and line 51 from
     Form 4137 (Computation of Social Security Tax on Unreported Tip
     Income).
     
     In the Payments section, the Credit for Federal tax on fuels (line
     59) is transferred from Form 4136 (line 11.)
     
     If you have completed Form 2210 to calculate any penalty that you
     owe because of underpayment of estimated taxes, the penalty will
     appear under line 65.
     
     
     5.7.2 Form 1116 - Computation of Foreign Tax Credit
     
     The IRS wants you to complete a separate Form 1116 for each type
     of income listed on the top of this form.  If you have some
     knowledge of Lotus 1-2-3, you can place additional copies of this
     form within the worksheet if your computer has sufficient memory
     to accommodate them.  Within this form, absolute cell references
     were used to facilitate copying it.  Just be sure that you add the
     credits together, and enter them in Part IV of the original form
     so they are properly recognized by FITT.
     
      
     5.7.3 Form 2106 - Employee Business Expenses
     
     On this form, you have a choice of using the standard mileage rate
     (Part II, Section B), or actual expenses (Part II, Section C), in
     computing vehicle expenses on line 1. If you choose to use the
     standard mileage rate, you must remove the NA above line 11. This
     tells FITT that you want Section B to serve as the basis for the
     vehicle expense calculations.
     
     If you wish to use Section C instead, no special action is
     required.
     
     
     5.7.4 Form 2119 - Sale Or Exchange Of Principal Residence
     
     There are several "switches" that may need to be set on this form.
     If your former residence was held six months or less, be sure to
     enter YES in the cell to the right of line 1a.  This will remove
     the NA on this line which causes the gain to be treated as a short
     term capital gain instead of a long term capital gain.
     
     If you bought a new residence, be sure to check YES on line 2a
     replacing the NA indicator on that line.  This will activate the
     calculations in Part III - Gain To Be Postponed and Adjusted Basis
     of New Residence.
     
     If you elect to take the once in a lifetime exclusion of the gain
     on the sale, be sure to check YES on line 3d.  This will activate








     February 3 1989  FITT88 User's Manual  Page  23


     the calculations in Part II - Age 55 or Over One-Time Exclusion.
     
     If you have indicated that the gain is to be treated as short term,
     and you have not elected to take the once in a lifetime exclusion,
     the gain on line 8a is carried forward to line 3 of Schedule D.
     Otherwise, any gain is reported on line 10 of Schedule D.
     
     
     5.7.5 Form 2210 - Underpayment Of Estimated Tax By Individuals
     
     When completing this form, be sure to replace the number of days
     shown on lines 23b, 24b, and 25b with the actual number of days
     between the start of the periods and the payment dates.  The
     numbers initially supplied with FITT represent the "worst case"
     values - ie. no payments were made at all.
     
     
     5.7.6 Form 2441 - Credit for Child and Dependent Care Expenses
     
     Under certain circumstances, you may need to complete Form 6251 -
      Alternative Minimum Tax.  If FITT determines that this is indeed
     the case, it checks to see whether you've activated Form 6251
     (indicating that you've completed it.)  If you need to complete
     Form 6251, and it hasn't been activated, then the ERR indicator
     will be displayed on line 8 of Form 2441.  Once you activate Form
     6251, and fill it out, the ERR indicator will disappear after the
     next recalculation.
     
     
     5.7.7 Form 4136 - Computation Of Credit For Federal Tax On Fuels
     
     In column A of lines 2 - 10 of this form, you are to enter the
     number of gallons of fuel used in 1988, and then multiply by one
     of several alternative tax rates in column B depending on the type
     of fuel.  The subtotals of these calculations are to be entered in
     column C.
     
     FITT88 does all of these calculations for you.  Simply enter the
     proper numbers in column A.  Then enter the index  of the proper
     tax rate in the cell to the right of column B.  For example, on
     line 2a i, there are three tax rates: .03, .0333, & .09.  If you
     enter 1 to the right of column B, then the number of gallons in
     column A will be multiplied by .03.  If you enter a 2, .0333 will
     be used.  A 3 will cause .09 to be used.  The results of this
     calculation for lines 2a i-iii are totaled in column C.
     
     The tax index that you enter is checked to be certain that it is
     within the permissible range for that line.  If you see the ERR
     indicator anywhere on this form, go back and recheck the tax
     indices that you've entered.
     
     The results from this form are reported on Form 1040, line 59.
     
     
     








     February 3 1989  FITT88 User's Manual  Page  24


     5.7.8 Form 4562 - Depreciation And Amortization
     
     Much of the information that you must enter on this form is of a
     descriptive nature.  The values that you enter on lines 6 - 10 in
     column F are added to the calculated amount on line 5 to arrive at
     your total depreciation deduction on line 11.  This amount is
     reported on the depreciation lines of the return (Schedule C - line
     12, Schedule F - line 17, and Form 4835 - line 12.)
     
     Total Amortization calculated in Part II - line 3, is reported on
     the Other Deductions or Other Expenses lines of the return
     (Schedule C - line 29a, Schedule F - line 35a, and Form 4835 - line
     31a.
     
     
     In Part III, Section B on the back of this form, the total business
     miles, commuting miles, and other personal miles are added and
     compared with the total miles you've entered.  If they are not the
     same, the ERR indicator will be displayed above the line 4 totals.
     
     
     5.7.9 Form 4684 - Casualties And Thefts
     
     If there was a gain from casualty or theft, lines 5 through 13 in
     Section A, and lines 5 through 10 in Section B should be skipped.
     If you have a gain, and mistakenly enter values on lines 5 or 6 of
     Section A or B, the ERR indicator will appear immediately below the
     cells in which you've entered non-zero values.  Also, the amount
     entered on line 6 can't be greater than line 5 in Section A and B. 
     This condition will also cause the ERR indicator to be displayed.
     
     In Section A, if you are completing more than one Form 4684, the
     sum of the line 12 amounts are to be entered on line 13, and the
     sum of the line 4 amounts are to be entered on line 14.  In this
     case, you should unprotect the cells for lines 13 & 14, and enter
     the totals directly.
     
     If the result on line 18 of Section A is greater than zero, it is
     reported on Schedule A - line 18.  The amount on line 20b of
     Section B - Part II is reported on Schedule A, line 21.
     
     
     5.7.10 Form 6251 - Alternative Minimum Tax - Individuals
     
     In order to activate this form, you must remove the NA value
     located directly above the value in line 1.  You have to determine
     from the instructions whether or not you are liable for the
     alternative minimum tax.  There are several forms which may require
     information from Form 6251.  These forms check to be sure that this
     form has been activated.  If it has not, FITT won't use any data
     from this form.  Instead, it will display the ERR indicator within
     the forms that require this information.
     
     For purposes of computing your regular tax for the line 18
     calculation, FITT assumes that the entire amount, if any, that








     February 3 1989  FITT88 User's Manual  Page  25


     you've entered on line 39 of Form 1040 is due to tax from Form
     4970.  If in fact, the Form 1040-line 39 amount comes from Form
     4972, then the formula on line 18 should be modified to exclude
     this cell.
     
     
     5.7.11 Form 8396 - Mortgage Interest Credit
     
     The amount used on line 8 of this form includes the credits
     reported on lines 40 and 41 of Form 1040 as well as any Residential
     Energy Credit carryforward (REC).
     
     Line 10 requires that Form 6251, Alternative Minimum Tax -
     Individuals, be completed through line 15.  It does not require
     that Form 6251 actually be filed.  It only uses that Form for the
     purposes of this specific calculation.
     
     It is important that you complete Form 6251 through line 15 to
     satisfy the requirements of this form.  However, don't activate
     Form 6251 by removing the NA value above line 1 (described above)
     unless you actually intend to file that form.
     
     The amount calculated on line 12 is reported on Form 1040 - line
     41 next to the "MIC" acronym.
     
     
     5.7.12 Form 8582 - Passive Activity Loss Limitations
     
     You must be careful on lines 1a - 1g, and 2a - 2g to enter net
     income as positive numbers, and net losses as negative numbers. 
     The amounts you enter on each line are checked for proper sign. 
     If you've made a mistake, the ERR indicator will appear directly
     to the right of the value you've entered with the wrong sign.
     
     The amount you enter on line 5 is also checked.  The default is
     $150,000.  FITT88 can't automatically enter $75,000 if you are
     married filing separately because in this case there is the
     additional stipulation that you have lived apart for the entire
     year.  If you do change this value, it can't be anything other than
     $75,000, and you must be married filing separately.  If any of
     these conditions are not met, the ERR indicator will appear
     immediately to the right of this value.
     
     
     
     
     5.7.13 Schedule A - Itemized Deductions
     
     Casualty or theft losses reported on line 18 are taken from Section
     A of Form 4684 - line 18.
     
     Moving expenses on line 19 are taken from line 23 of Form 3903.
     
     Other expenses on line 21 consists of two values.  The value shown
     next to line 21b is available for you to enter.  The second value








     February 3 1989  FITT88 User's Manual  Page  26


     is automatically added by FITT.  This consists of the sum of any
     amounts from Section B of Form 4684 - line 14 & line 20b.  These
     two amounts are included in the total shown on line 22.
     
     
     5.7.14 Schedule B - Interest And Dividend Income
     
     There is nothing unusual about filling out this form.  Space has
     been provided for you to enter the descriptive information
     regarding the names of payers.
     
     Line 3 of Part I is carried forward to line 8a of Form 1040, and
     line 9 of Part II is carried forward to line 9 of Form 1040.  Also,
     line 6 containing capital gain distributions is brought over to
     line 13 of Schedule D.
     
     
     5.7.15 Schedule C - Profit Or Loss From Business
     
     Line 12 for Depreciation is brought forward from Form 4562, Section
     D-line 12.  Line 29a for Other Expenses contains Amortization
     calculated in Part II of Form 4562, line 3.
     
     
     5.7.16 Schedule D - Capital Gains And Losses
     
     Columns d (Gross sales price) and e (Cost or other basis) are used
     to compute the loss (column f) or gain (column g) for each item of
     property described on line 2a of Part I and line 9a of Part II. 
     Columns a, b, and c are not used in the calculations, but contain
     descriptive information only.
     
     When completing lines 5, 6, 12, & 15, be sure that you enter any
     losses as negative numbers in the loss column (column f).  If they
     are gains, they should be entered as positive numbers in the gain
     column (column g).  A check is made to insure that any values
     entered in the loss column are negative.
     
     Line 13 in Part II contains the capital gain distributions reported
     on line 6 of Schedule B.  If you did not use Schedule B, and have
     capital gain distributions to report, enter them directly on line
     13 of Schedule D after unprotecting that cell.
     
     
     
     5.7.17 Schedule E - Supplemental Income Schedule
     
     Any deductible rental losses reported on line 24 of Part I must be
     entered as negative numbers.  If they are not, the ERR indicator
     will appear immediately above the incorrect value.
     
     Net farm rental profit or (loss) on line 28 of Part I is taken from
     Form 4835 - line 35 or 36c.
     
     In Parts II and III on the back of this form, income and losses for








     February 3 1989  FITT88 User's Manual  Page  27


     both Passive and Nonpassive activities must be entered.  Again, it
     is important to remember that losses must be entered as negative
     values, and income as positive values.  Error checking is performed
     to insure that you've used the correct signs.  If not, the ERR
     indicator will appear at the bottom of the column where the error
     has occurred.
     
     
     5.7.18 Schedule F - Farm Income and Expenses
     
     Depreciation and section 179 expense deduction on line 17 is taken
     from Part I of Form 4562, line 12.  Amortization is shown on line
     35a for Other Expenses.  This also comes from Form 4562, line 3 of
     Part II.
     
     
     5.7.19 Schedule R - Credit For The Elderly And Disabled
     
     Be sure that you check one, and only one line in lines 1 through
     9.  The line you check determines how the calculations are
     performed.  If you check more than one line, or you do not check
     any lines, the ERR indicator will appear on line 10.
     
     On line 21 of Part III, the credit is figured as follows. 
     Schedules C, D, E, and F are checked for zero values.  If this is
     true, then you haven't filed any of these forms and the credit can
     be calculated directly and reported on line 42 of Form 1040.
     
     If you have filed Schedule C, D, E, or F, you may not be entitled
     to the full amount of the credit.  The detailed instructions for
     Schedule R spell out how the limitation on the credit must be
     calculated.  The procedure is rather complex, and has been
     completely automated within FITT88.  You should however, fill out
     Form 6251 through line 15 since that value may be required to
     properly carry out the calculation of the credit limit.  This does
     not necessarily mean that you must file Form 6251.
     
     
     5.7.20 Schedule SE - Computation Of Social Security Self-Employment
     Tax
     
     FITT will use the short schedule SE by default.  If you need to use
     the long form on the back, you need to set one of the three
     "switches" at the top of this schedule.
     
     If you elect to complete Part II - Optional Method To Figure Net
     Earnings, you must indicate if you are using the Farm option, or
     Non-Farm option of calculating net earnings from self- employment. 
     There are two "switches" appropriately labeled at the top of the
     form for this purpose.  If you are not using Part II, then leave
     the FARM OPT, and NON-FARM OPT switches set to a value of NA.
     
     
     
     








     February 3 1989  FITT88 User's Manual  Page  28


     5.8 Reinitializing Specific Forms and Schedules
     
     FITT is distributed with zero values in the input cells on all of
     the forms and schedules.  You may find yourself in a position where
     it would be desirable to reinitialize one or more of the schedules
     with zeros, while retaining the values you've entered into the rest
     of FITT.
     
     This can be done quite easily by combining specific schedules from 
     the original FITT worksheet into your working copy, replacing the
     schedule you wish to initialize.  This is done using the REINIT
     option on the main menu.
     
     This operation requires that the original FITTyy.WKS file on the
     distribution disk be present in the default directory of 1-2-3. 
     If the default directory is drive A or B, simply place the original
     disk in that drive before initiating the REINIT selection on the
     main menu.
     
     If the default directory is on a hard disk (drive C or D), then
     make sure that a copy of FITTyy.WKS exists in that directory.  Your
     other option is to temporarily change the default directory from
     your fixed disk to one of the floppy diskette drives (eg. /FDB:\).
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








     February 3 1989  FITT88 User's Manual  Page  29


     6. DISCLAIMER
     
     The author makes no representations or warranties with respect to
     the contents hereof and specifically disclaims any implied
     warranties of merchantability of fitness for any particular
     purpose.  Further, the author reserves the right to revise this
     publication and to make changes from time to time in the content
     hereof without obligation of the author to notify any person or
     organization of such revision or changes.





















































```
{% endraw %}

## FITTCOMP.DOC

{% raw %}
```


     February 2 1989                        Page  1


     COMPARISON OF FITT VERSUS COMMERCIAL TAX PREPARATION SOFTWARE
     
     The February, 1989 issue of PC World contained a feature article
     entitled "Buyers' Guide:  Personal Tax Preparation Software."  This
     article reviewed 13 tax preparation programs and templates.  The chart
     that follows compares FITT with these products based on which specific
     forms and schedules are supported.
     
     You can draw your own conclusions from the chart.  I would however like
     to offer some general suggestions to individuals who are evaluating tax
     preparation software programs for their personal use.
     
     First, you should begin by determining which IRS forms you will need. 
     Then look at the chart to see which programs come closest to supporting
     the forms you require.  Obviously price will in most cases be a
     consideration.  Also, you may have a preference as to whether the
     product comes in the form of a stand alone program, or a spreadsheet
     template.  If at all possible, try the software before you buy -
     preferrably on a computer configured like your own.  That is by far the
     best way of evaluating how easy the program is to use.
     
     The individual products listed in the chart are identified using the
     following key:
     
                   KEY   PRODUCT
                    *    Federal Income Tax Template (FITT)
                    A    Andrew Tobias' Managing Your Taxes
                    B    Ask Dan About Your Taxes
                    C    EasyTax
                    D    Executive Federal Tax Template
                    E    EZTax-Prep 1040
                    F    J. K. Lasser's Your Income Tax
                    G    Personal Tax Filer
                    H    Swiftax
                    I    The Tax Advantage
                    J    Tax Ease
                    K    Tax Preparer
                    L    TaxView
                    M    TurboTax
     
     Following the comparison chart is an index listing many of the principal
     forms and schedules by name.  (Believe it or not, this is far from a
     complete list.)
     
     I hope you find this information useful.
     
                             R. A. Ruel - 2/1/89
     
     
     
     
     
     
     
     








     February 2 1989                        Page  2


                             PRODUCT DATA
     
   Product         *   A   B  C   D   E  F   G   H  I   J   K  L   M
   List Price     35  80  90 89  15 130 75  20  70 60  99 295 119 75
   Annual Updates 35  46  45 35  15  78 30  20  35 40  59  95 55  38
   Prog/Template   T   P   P  T   T   T  P   P   P  P   T   P  P   P
     
                             FORMS & SCHEDULES SUPPORTED
     
     Schedule A    Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Schedule B    Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Schedule C    Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Schedule D    Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Schedule E    Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Schedule F    Y   Y   Y  -   -   Y  Y   -   Y  Y   Y   Y  Y   Y
     Schedule R    Y   -   Y  Y   -   Y  Y   -   Y  Y   Y   Y  Y   Y
     Schedule SE   Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form W-2      -   -   -  -   -   -  -   -   -  -   -   Y  -   -
     Form W-2P     -   -   -  -   -   -  -   -   -  -   -   Y  -   -
     Form 1040     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form 1040-A   -   -   -  -   -   -  -   -   Y  -   -   -  Y   -
     Form 1040-ES  -   Y   Y  -   -   Y  Y   -   Y  -   -   Y  -   Y
     Form 1040-EZ  -   -   -  -   -   -  -   -   -  -   -   -  Y   -
     Form 1040-X   -   -   -  -   -   -  -   -   -  -   Y   -  Y   -
     Form 1116     Y   -   -  -   -   -  -   -   -  -   -   -  Y   -
     Form 2106     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form 2119     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form 2210     Y   Y   Y  -   -   Y  Y   -   -  -   Y   -  Y   Y
     Form 2210F    -   -   -  -   -   -  -   -   -  -   Y   -  -   -
     Form 2441     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form 2555     -   -   -  -   -   -  -   -   -  -   -   -  Y   -
     Form 3468     -   Y   -  -   -   -  Y   -   -  -   -   Y  -   -
     Form 3800     -   -   -  -   -   Y  Y   -   -  -   Y   Y  -   Y
     Form 3903     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     
                             (chart continued on next page)
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     








     February 2 1989                        Page  3


                             PRODUCT DATA
     
   Product         *   A   B  C   D   E  F   G   H  I   J   K  L   M
   List Price     35  80  90 89  15 130 75  20  70 60  99 295 119 75
   Annual Updates 35  46  45 35  15  78 30  20  35 40  59  95 55  38
   Prog/Template   T   P   P  T   T   T  P   P   P  P   T   P  P   P
     
                             FORMS & SCHEDULES SUPPORTED (continued)
     
     Form 4136     Y   -   -  -   -   -  -   -   -  -   Y   -  -   -
     Form 4137     Y   -   -  -   -   -  Y   -   -  -   -   -  -   -
     Form 4255     -   -   -  -   -   -  Y   -   -  -   Y   -  -   Y
     Form 4562     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form 4684     Y   -   Y  -   -   Y  Y   -   -  -   -   -  Y   Y
     Form 4797     -   Y   Y  -   -   Y  Y   -   -  -   Y   Y  Y   Y
     Form 4835     Y   -   -  -   -   -  -   -   -  -   -   -  -   -
     Form 4868     -   -   -  -   -   -  Y   -   -  -   -   -  -   -
     Form 4952     -   Y   -  -   -   Y  Y   -   -  -   Y   -  Y   Y
     Form 4972     -   -   -  -   Y   Y  Y   Y   -  -   Y   -  -   Y
     Form 5329     -   -   -  -   -   -  Y   -   -  -   -   -  -   -
     Form 5695     -   Y   -  -   -   -  -   -   -  -   -   -  -   -
     Form 6251     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form 6252     -   -   Y  -   -   Y  Y   -   -  -   Y   Y  Y   Y
     Form 8283     -   -   -  -   -   -  -   -   -  -   -   -  Y   -
     Form 8396     Y   -   -  -   -   -  -   -   -  -   -   -  -   -
     Form 8582     Y   -   Y  Y   Y   Y  Y   Y   -  -   Y   Y  Y   Y
     Form 8598     -   -   Y  -   Y   Y  -   Y   -  Y   Y   Y  Y   Y
     Form 8606     -   -   Y  -   -   -  Y   -   -  -   Y   -  Y   Y
     Form 8615     Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y   Y  Y   Y
     Form 8801     -   -   -  -   -   Y  -   -   -  -   -   -  Y   -
     
     TOTAL        24  21  24 16  17  27 31  17  18 17  29  25 31  28
     
                            WORKSHEETS SUPPORTED
     
  Taxable Refunds
  of State & Local
     Income Taxes  Y   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?
     
   Soc. Sec. Ben.  Y   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?
     
   IRA Worksheets  Y   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?
     
Self-Employed Health
   Insur. Deduct.  Y   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?
     
     Schedule SE   Y   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?   ?  ?   ?
     
     
     
     
     
     
     
     








     February 2 1989                        Page  4


     1989 IRS TAX FORMS

     Schedule A    Itemized Deductions
     Schedule B    Interest and Dividend Income
     Schedule C    Profit or Loss From Business
     Schedule D    Capital Gains and Losses
     Schedule E    Supplemental Income Schedule
     Schedule F    Farm Income and Expenses
     Schedule R    Credit for the Elderly or the Disabled
     Schedule SE   Social Security Self-Employment Tax
     Form W-2      Wage and Tax Statement
     Form W-2P     Statement for Recipients of Annuities, Pensions,
                   Retired Pay, or IRA Payments
     Form 1040     U.S. Individual Income Tax Return
     Form 1040-A   U.S. Individual Income Tax Return
     Form 1040-ES  Estimated Tax for Individuals
     Form 1040-EZ  Income Tax Return for Single filers with no
                   dependents
     Form 1040-X   Amended U.S. Individual Income Tax Return
     Form 1116     Computation of Foreign Tax Credit (Individual,
                   Fiduciary, or Nonresident Alien Individual)
     Form 2106     Employee Business Expenses
     Form 2119     Sale of Your Home
     Form 2210     Underpayment of Estimated Tax by Individuals and
                   Fiduciaries
     Form 2210F    Underpayment of Estimated Tax by Farmers and
                   Fishermen
     Form 2441     Credit for Child and Dependent Care Expenses
     Form 2555     Foreign Earned Income
     Form 3468     Computation of Investment Credit
     Form 3800     General Business Credit
     Form 3903     Moving Expenses
     Form 4136     Computation of Credit for Federal Tax on Fuels
     Form 4137     Computation of Social Security Tax on Unreported Tip
                   Income
     Form 4255     Recapture of Investment Credit
     Form 4562     Depreciation and Amortization
     Form 4684     Casualties and Thefts
     Form 4797     Sales of Business Property
     Form 4835     Farm Rental Income and Expenses
     Form 4868     Application for Automatic Extension of Time To File
                   U.S. Individual Income Tax Return
     Form 4952     Investment Interest Expense Deduction
     Form 4972     Tax on Lump-Sum Distributions
     Form 5329     Return for Individual Retirement Arrangement and
                   Qualified Retirement Plans Taxes
     Form 6251     Alternative Minimum Tax - Individuals
     Form 6252     Installment Sale Income
     Form 8283     Noncash Charitable Contributions
     Form 8396     Mortgage Interest Credit
     Form 8582     Passive Activity Loss Limitations
     Form 8606     Nondeductible IRA Contributions, IRA Basis, and
                   Nontaxable IRA Distributions
     Form 8615     Computation of Tax for Children Under Age 14 Who Have
                   Investment Income of More Than 1,000
     Form 8801     Credit for Prior Year Minimum Tax






```
{% endraw %}

## WHATSNEW.DOC

{% raw %}
```
     New Additions To FITT In 1988
     
     For those of you who have used previous versions of this product
     in past years, there are a few significant additions in FITT88
     worth mentioning.  Three new forms have been included:  Form 2210-
     Underpayment of Estimated Tax by Individuals and Fiduciaries,  Form
     1116-Computation of Foreign Tax Credit, and Form 8615-Computation
     of Tax for Children Under Age 14 Who Have Investment Income of More
     Than $1,000.
     
     In addition to the official IRS forms and schedules, FITT now
     includes a number of the worksheets that appear within the Form
     1040 instruction package.  These worksheets are:  Taxable Refunds
     of State & Local Income Taxes, Social Security Benefits, IRA
     Worksheets 1 and 2, Self-Employed Health Insurance Deduction, and
     the Schedule SE worksheet.
     
     An extra navigational aid has been added to the menus.  In addition
     to the NEXT and PREVIOUS options which appear on all intermediate
     level menus, the lowest level menus now include a FIRST option. 
     This will bring you directly back to the first menu in the series. 
     Previous, you had to use MAIN to go all the way to the top, and
     then proceed back down, or use PREVIOUS to back out one level at
     a time.
     
     The reference manual no longer includes a complete set of all the
     printed forms and schedules.  A number of people suggested that
     they be deleted since anyone who wants to print a complete set can
     easily do so directly from the FITT Print menu.
     
     This has several advantages.  The resulting reduction in the size
     of the documentation file allows all the FITT files to reside on
     the distribution diskette in uncompressed form.  This saves you the
     trouble of having to "unsqueeze" the files onto another disk before
     you can use them.  This also cuts down on the time required to
     download these files from bulletin board systems.
     
     These are the main differences that will be obvious to previous
     users.
     
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0290

     Volume in drive A has no label
     Directory of A:\

    FILES290 TXT      1420   2-15-89   3:22p
    FITT88   DOC     79641   2-03-89  12:09p
    FITT88   WKS    248704   2-03-89   8:44a
    FITTCOMP DOC     10383   2-02-89  12:27p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       925   2-15-89  11:26a
    MANUAL   BAT       147   1-19-89   9:21a
    WHATSNEW DOC      2131   2-03-89   4:29p
            8 file(s)     343389 bytes
                           14336 bytes free
