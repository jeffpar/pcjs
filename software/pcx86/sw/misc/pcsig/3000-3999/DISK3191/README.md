---
layout: page
title: "PC-SIG Diskette Library (Disk #3191)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3191/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3191"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CBPFILES.DOC

{% raw %}
```
 ------------------------------------------------------------------------------
  CHECKBOOKS & BUDGETS PLUS (CBP)               (archived on two disks)  v4.00
 ------------------------------------------------------------------------------
 Checkbooks & Budgets Plus is a full featured, NETWORKABLE, checkbook database,
 single entry accounting, check printing and budgeting program which will
 allow you to painlessly keep track of an unlimited number of business and/or
 personal checking accounts.  Checkbooks & Budgets Plus lets you automatically
 set aside a portion of your income into each different category in your
 budget.  The budgeting section of the program is completely flexible as it
 allows you to move budgeted funds from account to account at will.

 Checkbooks & Budgets Plus is fully NETWORK compatible for multi-user access or
 it can be used by a single user on a networked or non-networked computer. Do
 not let the low registration fee fool you, this is a professional software
 package - quality software at a reasonable price.  See the partial list of
 features below.

 FEATURES:

    o Professional, easy-to-use, pull-down menu-driven, checkbook
      and budgeting accounting system
    o Use on Novell Avanced Netware, Netware Lite, Lantastic, MSNet and other
      networks - unlimited users
    o Use on single user DOS systems
    o Full multi-colored displays with user moveable pop-up windows for easy
      readability
    o Context sensitive help windows provide on-line manual
    o Fully formatted, 50+ page printed manual creation routine
    o Full two or three button mouse support
    o Data-input editing and error checking
    o Window scroll bars standard
    o Supports 43/50 line EGA/VGA modes
    o Built-in macro processor for user added hot keys <AltM>
    o Built-in calendar <AltL> can be popped-up at any time
    o Built-in calculator <AltC> with ability to paste results
    o Built-in text file browser and text file editor with block printing
    o Optional Save mode helps to ensure that there will be no loss of data
       due to a power outage, a non harddisk hardware failure or incorrect
       program exiting
    o Unlimited databases
    o Unlimited accounts
    o Multiple accounts per transaction
    o Unlimited check-register entries (limited by disk space avail.)
    o Unlimited customer/vendor/creditor entries
    o Uses ISAM keyed index files for rapid data storage and retrieval
    o Multiple format listings to screen, printer, files or print spooler
    o Built in printer setup for most popular printers
    o Generates financial statements
    o Automatically or manually balances the check register
    o Quickly reconciles check register with monthly bank statements
    o Automated weekly, monthly, bimonthly, etc. check printing
    o Table browse windows for easy data viewing and fast adding,
       modifying and deleting of table records
    o Table modify, add, delete, search, and key change functions are
       performed instantly on the selected record in the database browse
       windows
    o Browse window record tagging for block deleting and printing
    o Individual database password protection
    o Built-in database backup and restore routines
    o Optional printing of industry-standard checks

 PRODUCT OVERVIEW:

   TABLES:
     Accounts, To/From, Check Register
   REPORTS:
     Accounts
     Check Register - By Account
     Check Register - Long form
     Check Register - Short form
     Financial Statement
     To/From Database - Long form
     To/From Database - Short form
   LISTINGS:
     Each table can be listed in any of its keyed orders over any range
       or by individual records by using the tag functions
     Fully formatted, 50+ page user manual with Index and Table of Contents


 MINIMUM REQUIREMENTS:

    o IBM PC/AT or compatible
    o One 360K or higher floppy disk drive and a hard disk
       - A hard disk is highly recommended!
       - Two 720K or higher floppy disk drives if no hard disk
    o 448K free DOS memory
    o Monochrome or color monitor
    o DOS 3.0 or higher

    Note: Database size is limited when installed to floppies.  A system with
          two floppy disk drives in any combination of 720K, 1.2M or 1.44M
          is required.  Larger sizes accomodate larger databases.  There
          is enough room on a two floppu disk setup to meet the requirements
          of most bookkeeping needs for a year.


 USAGE:

    Business - single entry networkable accounting, Home finance


 HOW TO START:

    Place installation disk in drive A (or B) and type:

           A:       <Enter>  ( or B: <Enter> )
           CBPINSTL <Enter>  ( installs to floppy or hard disk )

           CBP /PRNTHELP <Enter>   ( prints a complete user manual )


 LIMITATIONS ON UNREGISTERED VERSION:

    None - no record limits, no time limits, no delayed pauses


 REGISTRATION FEES:

    $19.95 ( CA residents $21.60 - includes 8.25% sales tax )


 FILES INCLUDED:

   Files prior to unarchiving:

   CBPINSTL EXE  Installation program
   LHA      EXE  Unarchiving program
   LHA      DOC  Unarchiving program documentation
   CBP1     LZH  Archived program and demo database files
   CBP2     LZH  Archived program and demo database files
   CBPFILES DOC  This file
   HARDDISK DOC  Instructions for manually installing to a harddisk
   FLOPPY   DOC  Instructions for manually installing to floppy disks
   QSTART   DOC  Quick start instructions
   DISK     ID   Disk identification file
   README   BAT  Batch file for viewing DOC files

   Unarchived files:

   CBP      EXE  Main program
   CBP      OVR  Overlay file called by CBP.EXE
   CBP      HLP  Hlp file for CHECKBOOKS & BUDGETS PLUS
   CBPPATH  EXE  Utility for setting Data/Overlay/Help paths in CBP.EXE
   filename CBP  Demo table data files
   filename NDX  Demo table index files
   filename DAT  Demo general purpose data files


 DIGITAL PROCESSES
 PO Box 260
 Tujunga, CA  91043-0260
 (818) 951-2859

 Checkbooks & Budgets Plus is a good example of the type of NETWORK ready
 database programs which we at Digital Processes have created for a number
 of our clients.  We have an extensive library of object oriented routines
 available for quickly creating custom database programs such as CBP.

 Digital Processes can create similar programs for you or your business.
 If you are interested in knowing more please give us a call.

```
{% endraw %}

## FLOPPY.DOC

{% raw %}
```
 ------------------------------------------------------------------------------
              Installing CHECKBOOKS & BUDGETS PLUS to FLOPPY DISKS
 ------------------------------------------------------------------------------

 All installations require that you boot your computer up using DOS 3.0 or
 higher.

 All installations require that you have the line FILES=20 or higher in your
 boot disk's CONFIG.SYS file.

 You may install to all but 360K floppies by using CBPINSTL on DISK 1 OF 2 or
 follow the steps outlined below.  To use CBPINSTL place DISK 1 OF 2 ( or
 DISK 1 OF 1) in drive A (or B) and type:

     A:   <Enter>      ( or B: <Enter> )
     CD\  <Enter>
     CBPINSTL  <Enter>

 The following installation instructions assume that you will be placing the
 CBP installation disk in drive A and the blank floppy(s) to be installed to
 in drive B.  If not, transpose the drive letters below to match the disk
 drives you will be using.

 SINGLE FLOPPY:

   To run CBP from a single floppy requires that the floppy disk have at least
   1200K (1.2M) of free disk space.

   Place the CBP installation DISK 1 OF 2 (or 1 OF 1) in drive A.

   Place a blank formatted disk labeled PROGRAM disk in drive B.

   Type:  B:  <Enter>
          CD\ <Enter>
          A:\LHA  X  A:\CBP1  *.*  <Enter>

   Remove the CBP installation DISK 1 OF 2 (or 1 OF 1) from drive A.

   Place the CBP installation DISK 2 OF 2 (or 1 OF 1) in drive A.

   Type:  A:\LHA  X  A:\CBP2  *.*  <Enter>
          CBPPATH  _  _  _           <Enter>  ( '_' is the underscore char )

          (type: CBPPATH <Enter> for info on how to use CBPPATH)

          if you want to remove the demo data files type:

          DEL *.CBP <Enter>
          DEL *.NDX <Enter>

   Remove the CBP installation DISK 2 OF 2 (or 1 OF 1) from drive A.

   Place the PROGRAM DISK in drive A or B.

   Type:  A:    <Enter>
          CBP   <Enter>
       or
          B:    <Enter>
          CBP   <Enter>

 DUAL FLOPPY:

   To run CBP from two floppies requires that each floppy disk have at least
   720K of free disk space.

   Place the CBP installation DISK 1 OF 2 (or 1 OF 1) in drive A.

   Place a blank formatted disk labeled PROGRAM DISK in drive B.

   Type:
          B:  <Enter>
          CD\ <Enter>
          A:\LHA  X  A:\CBP1  CBP.EXE      <Enter>
          A:\LHA  X  A:\CBP1  CBPPATH.EXE  <Enter>
          CBPPATH  B:\  B:\  A:\  <Enter>    (there must be a disk in A and B)

          (type: CBPPATH <Enter> for info on how to use CBPPATH)

   Remove the CBP installation DISK 1 OF 2 (or 1 OF 1) from drive A.

   Place the CBP installation DISK 2 OF 2 (or 1 OF 1) in drive A.

   Type:
          A:\LHA  X  A:\CBP2  CBP.HLP  <Enter>

   Remove the PROGRAM DISK from drive B.

   Place a blank formatted disk labeled DATA DISK in drive B.

   Type:
          A:\LHA  X  A:\CBP2  CBP.OVR    <Enter>
          A:\LHA  X  A:\CBP2  *.MAC      <Enter>

          if you want to use the demo data files then type:

          A:\LHA  X  A:\CBP2  *.CBP      <Enter>
          A:\LHA  X  A:\CBP2  *.NDX      <Enter>

   Remove the CBP installation DISK 2 OF 2 (or 1 OF 1) from drive A.

   If your computer's A drive and B drive are different size drives then copy
   the contents of the PROGRAM DISK in drive B to a new PROGRAM DISK in drive
   A.  To do so place both the original PROGRAM DISK in drive B and a newly
   formatted disk in drive A and type:

          COPY B:*.* A:  <Enter>

   Place the (new) PROGRAM DISK in drive A.

   Place the DATA DISK in drive B.

   Type:
          A:   <Enter>
          CBP  <Enter>

```
{% endraw %}

## HARDDISK.DOC

{% raw %}
```
 ------------------------------------------------------------------------------
              Installing CHECKBOOKS & BUDGETS PLUS to a HARD DISK
 ------------------------------------------------------------------------------

 All installations require that you boot your computer up using DOS 3.3 or
 higher.

 All installations require that you have the line FILES=20 or higher in your
 boot disk's CONGIG.SYS file.

 Place DISK 1 OF 2 (or DISK 1 OF 1) in drive A (or B) and type:

     A:   <Enter>      ( or B: <Enter> )
     CD\  <Enter>
     CBPINSTL  <Enter>

```
{% endraw %}

## QSTART.DOC

{% raw %}
```
 ==============================================================================
                        CBP INTRODUCTION & QUICK START
 ==============================================================================

 Checkbooks & Budgets Plus can help you to organize and manage your financial
 record keeping quickly and easily once you have taken the time to set your
 accounts up.

 Don't be scared away by the setup, because it really does not take too long
 and the benefits that you will reap are more than worth the effort. In fact
 you may want to just use the demo account files which come with the program,
 then you can reduce the setup time to almost nothing - more on this below.

 SPECIAL NOTE: In the program's main menu system under "File" there is a
 "Step-by-step" menu item which will walk you through the entire process
 described below.

 If you have never set up a budgeting or tracking system for your finances,
 some of this will be new to you, but we will attempt to explain it all in such
 a way that you will be able to get set up relatively easily and then be on
 your way to easy yet powerful financial management.

 First a word about terminology.  When we use the word "database" we will be
 referring to one of your bank-type accounts either checking or savings or
 whatever else you may have.  For each of those bank-type accounts you wish to
 keep track of, you will need to set up a unique database.  When we use the
 word "account" (as opposed to "bank-type account"), we will be referring to
 categories that you set up within your databases to keep track of where your
 money is going to or coming from.  For instance, in your personal checking
 database, you may set up accounts called "Groceries", "Gas", "Wages" etc. and
 these accounts would represent all the ways you either spend or earn money
 that you wish to keep track of.

 The first thing that you will want to do is set up "accounts" that your
 database will be using. If you have never done this before, this may be a bit
 confusing, but really it is quite natural and logical once you get the hang of
 it.  Simply think of all the things that you spend money on...Groceries, Gas,
 VISA bills, Entertainment, Bank service charges etc. and set them up as
 accounts that are either of type CHECK or BANK CHARGE.  To make this easy,
 simply look at your check register and make categories for all the things you
 wrote checks for.  Do the same thing for sources of income, except that they
 will be of type DEPOSIT or BANK CREDIT.  This is possibly the most difficult
 step and it really isn't that bad.  When you have done that you are ready for
 the next step, entering the "To/From" information.  (You don't have to worry
 about getting all the accounts you'll ever need entered since you can add more
 at any time in the future as the need arises.)  {Budgeting info will be
 covered later}

 Checkbooks & Budgets Plus comes with a demo database with may predefined
 accounts.  To use these accounts simply use CBPINSTL to install only the demo
 data files to a new directory.  Then copy the files CBPACNT.CBP and
 CBPACNT.NDX to each new database directory you create.

 The To/From information is really more for your convenience so that you don't
 have to enter names and addresses more than one time.  It is simply a
 compilation of all the names and addresses that you write checks to, transfer
 funds to or receive monies from.  This is similar to the accounts that you set
 up except that this information is what is printed on the checks, if you use

 the check printing facility.  You may have multiple To/From records that would
 apply to one account (e.g. Safeway Foods, John's Bakery and Bob the Butcher
 applying to "Groceries" or "Food") and you might also have multiple accounts
 that apply to one To/From record (e.g. Thrifty Drug Store might use accounts
 "Medicine" and "Food").  If you don't understand this last point, it isn't too
 important at this time.  Just keep going you're almost done.

 Now you are ready to begin entering transactions!  The first one that you will
 need to enter is the Beginning Balance entry.  Go to the check register table
 and put the highlight bar on the BANK CREDIT "Beginning Balance +" if your
 balance is positive or the BANK CHARGE "Beginning Balance -" if negative.
 Then press <Enter> and enter your actual balance in the Primary Amount field.
 Then press <CtrlEnter> to update the record.  Now you can just enter any past
 checks you wish and add checks as you write them (or use CBP to write them).

 You are now up and running and ready to manage your money with the ease and
 power of CBP.  Try printing some reports and see the great functionality and
 resources that you have now at the touch of a button!

 To start CBP on a single user DOS system type:

    CBP <Enter>


 To start CBP on a Lantastic or Novell Netware Lite system type:

    CBP /M <wn> <Enter>    ( where wn is the workstation number )


 To start CBP on a Novell Advanced Netware system type:

    CBP /N <Enter>


 Remember to press <F1> for help at any time!
 Press <F1> twice to see an index of help topics.


 To print out a partial or complete user manual type:

    CBP /PRNTHELP <Enter>

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3191

     Volume in drive A has no label
     Directory of A:\

    README   BAT       124   6-15-92   4:00a
    CBPFILES DOC      6612   6-15-92   4:00a
    FLOPPY   DOC      3721   6-15-92   4:00a
    HARDDISK DOC       584   6-15-92   4:00a
    QSTART   DOC      5336   6-15-92   4:00a
    LHA      EXE     33965   6-15-92   4:00a
    DISK     ID         44   6-15-92   4:00a
    CBP2     LZH    305740   6-15-92   4:00a
            8 file(s)     356126 bytes
                            1024 bytes free
