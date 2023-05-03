---
layout: page
title: "PC-SIG Diskette Library (Disk #533)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0533/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0533"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PDS*QUOTE"

    This group of programs helps you quickly and accurately prepare
    quotations for projects based on your databases with the elements
    required for the project; i.e., materials, processes, parts, labor
    rates, markups, etc.  If you need quick analysis and production of
    financial data, this could be a great help.  A very professional package
    for small to medium-sized businesses needing analysis and projection
    tools.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FEATURES.DOC

{% raw %}
```
               PDS*QUOTE.DOC FEATURES.DOC - Version 4.10

This   document  provides  the  page  numbers  in  the  new  QUOTE.DOC
PDS*QUOTE  documentation  file for various new features added over the
last  several  version  releases.    You  can  use Option 4 of the new
INSTALL  program  to  selectively  print  pages of the new instruction
manual  via the Shareware LIST.COM program.  Before you can access the
QUOTE.DOC  file,  you  MUST have used the INSTALL program Option 1, to
initially   install,   or   Option   2,   to   upgrade  the  PDS*QUOTE
installation.      Both   of  these  INSTALL  Options  uncompress  the
QUOTEDOC.EXE file to create the QUOTE.DOC file.

After  the  installation  or upgrade is complete, the LIST.COM program
will  be  on the same sub-directory or disk as the QUOTE.DOC file.  If
you  prefer,  you can change directory to the sub-directory containing
the  QUOTE.DOC  and  LIST.COM files and type LIST QUOTE.DOC (Enter) in
place  of  using  Option  4  of  the INSTALL program.  Please note the
registration  information  on  the  F1  Help  screen  for the LIST.COM
program.   You will want to register your copy of LIST.COM as you will
find it a VERY handy utility to list and print ASCII files.

Use  "/page-num"  to cause LIST to search for the desired page numbers
in  the  QUOTE.DOC  file.    Place  the top of the section you wish to
print  at the top of the screen and press Alt/M.  Place the end of the
section  on the bottom line of the LIST screen and press Alt/B.  Then,
press Alt/P to print.

NOTE  - All page numbers are of the format "Page 3 - 5" with spaces on
BOTH  sides  of  the  hyphen (-).  In using the LIST / search feature,
you MUST include those 2 spaces when searching for a page number.

Each  page  starts  with  a Form Feed to eject the previous page.  You
can  toggle  the  Form Feed off/on with Alt/J.  If you wish to print a
series of pages, you probably want the Form Feed turned on.

Following is a partial list of recent new features:

* F1 Help Windows            1-1      * Backup Data Files    2-7, 11-6
* Customize Field Names 2-7, 3-2      * Pop-Up Calendar            1-1
* Bulk Quantity Prices 3-8, 10-3      * Country & State Config     2-5
* Multi-State Tax/Labor      C-1      * non-USA Date Formats       E-5
* On-Screen Calculator       5-2      * PC-File:dB Compatible      B-1
* Customize Screen Colors    E-3      * Insurance Costs  5-5, 8-4, 8-5
* Bid/Invoice printing       7-2      * Optional Footnotes    2-5, 5-2
* Rental Items    3-10, 8-4, 8-5      * Print Quote to PRN & SDF files
* Mass Price Changes        11-2        allowing quote to be imported
* Upgrade Data Files        11-4        into data base and spreadsheet
* Purchase Order Lists      10-4        systems                    7-1
* Change Material ROS                 * Electrical Contractors     3-1
    On-The-Fly               5-4      * Fixed Labor Costs     3-2, 3-9
* Discount Entry             5-6      * Fixed Price Items          5-6
* LIST Prices     3-3, 3-8, 3-12



```
{% endraw %}

## FILES533.TXT

{% raw %}
```
Disk No:  533                                                           
Disk Title: PDS*Quote                                                   
PC-SIG Version: S2.3                                                    
                                                                        
Program Title: PDS*Quote                                                
Author Version: 4.10                                                    
Author Registration: $45.00                                             
Special Requirements: 512K RAM, hard drive recommened.                  
                                                                        
This group of programs helps you quickly and accurately prepare         
quotations for projects based on your databases with the elements       
required for the project; i.e., materials, processes, parts, labor      
rates, markups, etc.  If you need quick analysis and production of      
financial data, this could be a great help.  A very professional package
for small to medium-sized businesses needing analysis and projections   
tools.                                                                  
                                                                        
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
║                     <<<<  Disk #533 PDS*QUOTE  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install the program, type: INSTALL (press enter)                     ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
This program is produced by a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.  If you are unable to resolve a shareware-
related problem with an ASP member by contacting the member directly,
ASP may be able to help.  The ASP Ombudsman can help you resolve a dispute
or problem with an ASP member, but does not provide technical support for
members' products.  Please write to the ASP Ombudsman at P.O. Box 5786,
Bellevue, WA 98006 or send a Compuserve message via easyplex to ASP Ombudsman
70007,3536

                   PDS*QUOTE Install & Upgrade Instructions

The INSTALL program menu will handle Install, Upgrade and Print Manual.

Place the PDS*QUOTE Shareware disk in drive A:.  Type A: (Enter) to see the
A: prompt.

If you have a HARD DISK, type INSTALL C: (Enter) or whatever drive letter you
wish to install the PDS*QUOTE system on.  The INSTALL program will create the
C:\PDS sub-directory for you (or whatever drive letter you specify).

If you have a 2 FLOPPY DISK drive system, format (3) disks without DOS for your
working PDS*QUOTE disks.  To format these disks, insert your DOS disk in drive
A: and the fresh disks in drive B: and type FORMAT B: (Enter).  Follow the
screen instructions.  After you have formatted the (3) disks and before you
have removed the 3rd disk from drive B:, type COPY COMMAND.COM B: (Enter).

Label the (3) disks as follows:              FLOPPY DISKS MUST BE 720K OR
   1. "PDS*QUOTE Documentation Disk"         HIGHER AS 360K ARE TOO SMALL
   2. "PDS*QUOTE Data Files Disk"
   3. "PDS*QUOTE Working Program Disk"  - This disk has COMMAND.COM on it.

The FLOPPY DISK user should insert the PDS*QUOTE disk & type INSTALL B: (Enter)

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
  Version  4.10     PDS*QUOTE QUOTATION SYSTEM REGISTRATION FORM     03/10/90

  Thank  you  for evaluating my Shareware Software.  If you find that you are
  able  to  use  this software beyond the evaluation stage, you MUST register
  your  copy  with PRO DEV Software.  The Registration Fee is only $40.00 FOR
  EACH  COPY  IN  USE plus $5.00 Shipping and Handling.  The next page is the
  order form.  To insure your satisfaction, I offer the following.

                           Pre-Registration Support

      You  can  call  (preferred)  or  write  to  PRO  DEV  Software with any
      necessary   questions  about  setting  up  or  effectively  using  this
      Shareware  for your type of company.  This system is extremely flexible
      and  can  be  used  by  a WIDE variety and size of business.  Please be
      sure to follow the installation instructions in the README.DOC file

           COPY A:README.DOC PRN  (Enter)

      .  .  .  before  calling or writing.  You must operate this system on a
      hard  disk OR with the data files on a separate disk in drive B: (those
      with  DBF  and  DBT file name extenders) if you don't have a hard disk.
      If  I determine that you have received a faulty evaluation copy, I will
      probably  send you a complimentary evaluation copy.  PRO DEV Software's
      hours  are  8:00  to  5:00  Monday  to  Friday Eastern Time USA and the
      telepnone number is 616-788-2243.

                Here is what you will get for your registering.

  1.  You  will  receive  a  registered  copy  of  the  latest version of the
      PDS*QUOTE  Quotation system Shareware disk.  You will NOT have to enter
      the  copyright screen random number.  You will also be able to skip the
      closing  screen.    You  will  NOT  be  sent  a  printed  copy  of  the
      documentation  as  the  on-disk  manual  is  complete and describes all
      features.   This also holds down the registration cost of this powerful
      system.

  2.  You  will  receive  at least 1 year of telephone (preferred) or written
      support.    For  registrants  outside  the USA or Canada, I will not be
      able  to  return  telephone  calls  as  the  overseas rates can rapidly
      exceed the low registration cost.

  3.  If  within  90 days of receiving the registered disks you find that you
      are  not  satisfied  with  the  registered software, you may return the
      REGISTERED  DISK  in  the  original  PRO  DEV  Software disk mailer (or
      equivalent) for a full refund.

  4.  If  you  discover  what  appears  to  be  a  bug, PRO DEV Software will
      attempt  to  resolve  the bug within 30 days from the time that PRO DEV
      Software   receives   your   full  telephoned  (preferred)  or  written
      description  of the bug.  If the cause of the perceived bug is a result
      of  unusual  hardware  or software that you are using, PRO DEV Software
      can  not  always  modify  the  programs  to  operate  with your unusual
      arrangements.

  Version  4.10     PDS*QUOTE QUOTATION SYSTEM REGISTRATION FORM     03/10/90

  Please  Send  Check,  Money  Order,  Postal  Order  OR  you  can enter your
  American  Express,  Master  or  Visa  card  number  below  along  with your
  signature.    If  you  are  outside the USA or Canada please have your bank
  prepare  a  check  in  USA  dollars  drawn  on a USA bank.  You may find it
  easiest  to  send  an  American  Express  Check or even USA cash.  Canadian
  registrants  can  submit  their check using Canadian funds WITHOUT exchange
  rate  adjustments.   If Canadians use a Credit Card the Credit Card Company
  WILL  apply  the  current  exchange  rate.   Registrants outside the USA or
  Canada  should  add  an  extra  $5.00 USA equivalent to cover extra banking
  and/or postage costs.
                         Send $45 ($50 non-USA/Canada) FOR EACH COPY to:

                                     PRO DEV Software
                                     545 Grover Road
                                     Muskegon, Michigan 49442

  Be SURE to enter your desired PASSWORD for file packing below!

    Password:________    Disk Format:   5 1/4 360k __      3 1/2 720k __
    (up to 8 characters)

  NAME _____________________________________________________________________

  COMPANY __________________________________________________________________

  TYPE OF BUSINESS _________________________________________________________

  ADDRESS __________________________________________________________________

  CITY _______________________________  STATE ____________ ZIP _____________

  PHONE __________________________  SIGNATURE ______________________________
  (In case of questions & Credit Card)       (Required ONLY for Credit Card)

                                Type of payment

  Check/Money Order__   American Express Card__  Master Card__   Visa Card__

  Credit Card Number _________ _________ _________ ________  Expires ___/___

  You  can  phone  your  order/questions  to PRO DEV Software at 616-788-2243
  (8:00-5:00  M-F  Eastern  Time).   If you reach my answering machine I will
  return  USA/Canada  calls.  You can also register with PRO DEV Software via
  an EasyPlex message to CompuServe PPN: 72617,1266.

                            Or, you can order from:

        Public (Software) Library                  Shareware Marketing

    1-800-2424-PSL (for ORDERS only)                      Beer
    1-713-665-7017 (information only)                    ENGLAND
    Box 35705  Houston, TX 77235-5705                   EX12 3HW
          Master/Visa Accepted                       Tel 0297 24088
            ASP Vendor Member                       ASP Vendor Member

  Version 4.10                    PDS*QUOTE                         03/10/90


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Copyright 1990 By PRO DEV Software                  PDS*QUOTE Version 4.10

             Vendor Encouragements And Restrictions  03/10/90

This document contains PRO DEV Software's message to Disk Copying and
Bulletin Board Services.  This release has 15 NEW FEATURES.

First of all, thank you for carrying my Shareware software in your Disk
Copying Service catalog or on your Bulletin Board Service.  You are a
vital link in the Shareware distribution process.

                               You MAY . . .

1.  This on-disk letter authorizes you to include the enclosed PDS*QUOTE
Version 4.10 disk of Shareware software in your Shareware Cataloging and
Disk Copying Service.  This is a non-exclusive authorization.  Further,
this on-disk letter notifies you that you may NOT continue to distribute
PDS*QUOTE software with any version number lower than Version 4.10.  If
you receive a copy with the file REGISTER.MEM, you MUST delete this file
to make the disk un-registered.

2.  You may sell disks containing copies of this software as long as you
do NOT imply to your customers that this is "free" software.  It is best
if your catalogs make it clear that this is Shareware software that the
end user must register with PRO DEV Software to continue using beyond the
evaluation stage.  You may add your own files to this disk as long as none
of them give any impression that this Shareware software is "free".  If
you list the registration fees in your catalog, DO NOT use words like
"Donation", "Contribution", or other such words.  It is a REGISTRATION FEE
or COST of $45.

3.  If you are a Disk Copying or Bulletin Board Service and you obtained
this software from other than PRO DEV Software, you may not have the
latest version.  You are encouraged to write or call PRO DEV Software and
ask for the latest version.

    PRO DEV Software   545 Grover Road   Muskegon, MI 49442
    616-788-2243 (8:00-5:00 M-F Eastern Time)  CompuServe PPN: 72617,1266

                             You may not . . .

1.  LIST.COM is included on this disk with written permission from Vernon
Buerg and may NOT be removed or replaced with a different version.DO NOT
remove any of the following files from the disk (or compressed file if you
are a BBS):

    QUOTE.EXE    QUOTEDAT.EXE   PRINTERS.EXE  QUOTEDOC.EXE  INSTALL.EXE
    LIST.COM     VENDOR.DOC     FEATURES.DOC  REGISTER.DOC  README.DOC

2.  If you are a Disk Copying Service, please do not further compress the
above files, particularly so as to add other software to the same disk.
You may NOT put one of my competitors products on the same disk!  You may
add your identifying and instruction files.  Naturally, a BBS operator
will compress the entire system as required.



                                  Page 1
Copyright 1989 By PRO DEV Software                  PDS*QUOTE Version 4.10

                  Vendor Encouragements And Restrictions

3.   You may NOT replace the QUOTEDOC.EXE SCRNCHed documentation file with
the ASCII QUOTE.DOC file or another form of archiving, packing or ziping.
If you are a BBS, archive/pack/zip the QUOTEDOC.EXE file along with the
other files WITHOUT first unSCRNCHing the QUOTEDOC.EXE file.  This is
because my INSTALL program expects the SCRNCHed file.  The same applys to
the LHARCed QUOTPROG.EXE, PRINTERS.EXE and QUOTEDAT.EXE files.


I also encourage you to give this full featured system the write-up it
deserves in your catalog.  The last page gives my "unbiased" {grin}
suggested catalog descriptions.  I really get discouraged when I see
catalogs that just say "PDS*QUOTE Quote/Bid system".  It is really a
powerful, low registration fee system that is currently being used by all
types and sized business from small contractors to consultants to at least
1 Fortune 100 company.

Now that I have gotten all of that legal stuff out of the way, let me tell
you what is in the Version 4.10 MAJOR upgrade.  The PDS*QUOTE system has
been evolving for 10 or 12 years, first on a mainframe computer and then
as Version 3.0 for PC/MS-DOS Shareware about 4 years ago.

                              15 NEW FEATURES

(1)  Three new reports;  Bulk Purchases, Rental Items and Purchase Order
     Lists.

(2)  Completely revised Material Data Base (or catalog) report that allows
     the data to be displayed in ANY order.  The report will also
     accommodate compressed print or wide carriage printers to allow a
     more desirable report format.  Further, the unlimited text, that can
     be used for Material Masters, can optionally be printed.  The
     incremental Automatic Labor costs can optionally be printed.

(3)  Menu driven backup selection so that the user will have (almost) no
     excuse not to backup data files.  The backup menu even prompts the
     user to change disks if necessary.  The program has a backup warning
     that is displayed if the user quits a session that may have changed
     data files.

(4)  Menu driven selective restoral of backed up data files in case of
     file crash.

(5)  Optional Footnotes of any length that can be printed on the First,
     Last or All pages of the quotation.  The system even has a Default
     Footnote feature to quickly add the default footnote to a quotation.
     The footnote can readily be modified to fit the particular quotation.

(6)  Many system defaults added to allow configuring the system for any
     State or Country.



                                  Page 2
Copyright 1989 By PRO DEV Software                  PDS*QUOTE Version 4.10

                        13 NEW FEATURES (Continued)

(7)  Mass Price Changes by supplier to react quickly to price changes.

(8)  Quotations can now be printed to spreadsheet and data base compatible
     Comma Delimited PRN and System Data (SDF) files in addition to
     straight Text files.  This allows the user to import the quote into
     other spreadsheet and data base systems.

(9)  The ability to change individual material profit rates "on-the-fly"
     for a particular quotation.

(10  Discount And Special List Price Items

(11) COMPLETE context sensitive pop-up F1 Help window giving quick and
     total explanation of every feature and option.  You can even
     selectively print the contents of the Help window being viewed.  This
     allows you to take optional notes while learning the system.  New
     users will be able to make the registration decision without even
     printing the complete on-disk manual that is still provided.

(12) Pop-Up Calendar.  The user can even move the calendar around the
     screen so that date fields on the screen will not be overlaid by the
     calendar.

(13) Pop-Up Calculator with result transfer to data field.

(14) An on-screen "Insert" status indicator is displayed for all field and
     text windows.

(15) Memory Overlay Management has been added so that only a portion of
     the QUOTE.EXE file is in memory at any time.  Separate overlay files
     are not required for this feature.  This allowed me to add the
     previous 13 features and still run the program in about the same
     amount of memory as before.

Again, thank you for carrying my Shareware software.

     Very truly yours,



      George Abbott

     Member - Association Of
     Shareware Professionals









                                  Page 3
                           Catalog Descriptions

1.  One Liner Description

    (disk #) PDS*QUOTE 4.10 - Extremely full featured quote/bid system for
    any type or size business [ASP].

2.  Complete Description

    (disk #)  PDS*QUOTE Version 4.10 [ASP] is an excellent full featured
    Quotation or Bid Estimating system for any type or size business.
    Consulting services can even use the Auto Labor feature to create
    labor only quotes without material, or any combination in between.  An
    unlimited number of Labor Groups can be associated with any
    quotation.  Using dBASE compatible files for the Supplier, Labor and
    Material costs, you can browse the material data base 4 different ways
    with a Point & Shoot browse method to rapidly build a customized
    quote.  The latest in pull-down menus and constant on-screen and F1
    Help "what to do next" instructions make the system highly intuitive
    to learn and use.  You can use the system's natural defaults to build
    simple quotes or use all of the many bells and whistles to build
    complex quotes.  The stand-alone program does NOT require the user to
    own Ashton-Tate's dBASE III Plus or dBASE IV systems.

    To support your sales efforts, you can print complete catalogs of your
    products and services with either your prices, List prices or both.
    You can even include unlimited sized Specifications for the material
    items in your data base and optionally print them on the quote.
    Material items can also carry automatic multi-rate labor units so that
    labor can optionally be pulled in with the selected material items.
    You can place notes anywhere in the quote as desired.  Sub-assemblies
    can be rapidly merged to a quote to save time and increase accuracy.
    When modifying a large quote, you can instantly jump to any item.  At
    a registration price of only $45 this is a BEST BUY.

3.                             Feature List

* Pull-Down Menus          * Multi-optional State     * Merge Quotes
* Extensive Windowing        and/or Federal Tax       * Printer Support
* Instant Screens            combinations             * non-USA Date Formats
* On-Screen Help           * On-Screen Calculator     * Very Fast To Learn
  Messages                 * Customize Screen           And Use
* F1 Help Windows            Colors                   * dBASE III Plus
* Complete program         * Print to printer,          and PC-File:dB
  with all features          screen or disk             compatible
* Complete Manual          * Bid/Invoice printing     * Insurance Costs
* Customize Field          * Rental Items             * Optional Footnotes
  Names                    * Mass Price Changes       * Print Quote to PRN &
* Bulk Quantity Prices     * Pop-Up Calendar            SDF files allowing
* Virtually unlimited      * Optional multiple          the quote to be
  data file size             profit rates               imported into data
* Multi-State Tax/Labor    * Non-Standard items         base and spreadsheet
* Optional Auto multi-     * Point & Shoot Browse       systems
  group labor units        * Country and State        * Pop-Up Calculator
  per material item          configuration            * Insert Status
* Discount Amounts         * List Price Items         * Non-Tax Items

                                  Page 4


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0533

     Volume in drive A has no label
     Directory of A:\

    QUOTPROG EXE    161372   3-10-90  12:00p
    QUOTEDAT EXE     34523   3-10-90  12:00p
    PRINTERS EXE      9833   3-10-90  12:00p
    QUOTEDOC EXE     67152   3-10-90  12:00p
    INSTALL  EXE     31088   3-10-90  12:00p
    LIST     COM     10231   3-10-90  12:00p
    VENDOR   DOC     10935   3-10-90  12:00p
    FEATURES DOC      3090   3-10-90  12:00p
    REGISTER DOC      5939   3-10-90  12:00p
    README   DOC      1789   3-10-90  12:00p
    FILES533 TXT      1629   4-04-90   1:13p
    GO       BAT        38   4-21-88   9:08a
    GO       TXT       540  12-11-89   1:28p
           13 file(s)     338159 bytes
                           18432 bytes free
