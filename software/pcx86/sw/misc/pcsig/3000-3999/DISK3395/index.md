---
layout: page
title: "PC-SIG Diskette Library (Disk #3395)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3395/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3395"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## APF.TXT

{% raw %}
```
Utility Module Auto-Patch File Format:
--------------------------------------

This file allows the user to more easily install your
utility modules.  The file must be in the same directory
as your executable (EXE,COM,PIF,BAT) and must have the
same file name with the extension "APF".  Example:
	goodutil.exe
	goodutil.apf

The file is pure ASCII in the following format:

Line 1: The default menu item title
Line 2: The executable name (goodutil.exe) with no path
Line 3: Pass File Name: 0=none, 1=current, 2=user-select
Line 4: Extention to force on file name (blank if N/A)
Line 5: Pass Current Record Number: 1=yes, 0=no
Line 6: Additional Command-line Flags (blank if N/A)

```
{% endraw %}

## HISTORY.TXT

{% raw %}
```
==========================
InContact! Release History
==========================

10-15-92 Release 1.0
We released the program after 2 man-years of
effort.

11-09-92 Release 1.1
The theme for this release was "refinement" to the
existing feature set.  The following enhancements
and bug fixes are a part of this release:

Enhancements
* New installation program that is more consistent
* Setup now handles multi-disk installations for
  any diskette type
* Setup now uses DDE to create program group
* Setup allows selective diskette installation
* Setup "silently" installs the VBRUN100.DLL
* Attached File View now returns control to the
  InContact window after calling a file view
* More robust comm port handling for Autodial
* Autodial Reads port information from win.ini
* Autodial allow "hangup", "redial" and "cancel"
* Allows selection of pulse-dialing
* Log allows entry of custom results from Autodial
* Extended Log dialog width
* Created several pre-defined label/envelope styles

Bug Fixes
* Fixed problem with notes and delete
* Fixed problem surrounding Cancels from
  the Locate/Select dialogs
* Fixed Auto-Capitalize problem after install
  after startup
* Fixed problems with Autodial hangup on some
  systems

We hope this release improves InContact as a
product.  We were pleased that the number of
confirmed bugs has been small for a fresh product
of this size.  We are committed to create the
best contact manager for Windows available and
we thank the users who provided important the
feedback that is so important in product
improvement.  Enjoy!

```
{% endraw %}

## NOTICE.TXT

{% raw %}
```
        Disclaimer, Notice of Copyright, and Shareware Courtesy:
        
        This diskette contains software made available to 
        customers as a service. In no event will Serious 
        Shareware be liable to you for any damages, lost profits,
        lost savings, or any other incidental or consequential 
        damages arising out of the use or inability to use this 
        software, even if Serious Shareware has been advised of 
        the possibility of such damages, or for any claim by any
        other party.
        
        This product is freely distributed as shareware.  
        However, all copyrights on the name, look-and-feel and 
        operations are strictly enforceable.  It is illegal to 
        change any text within the program code that would remove
        the copyright notice for Serious Shareware.  It is also 
        illegal to change ordering information text in the 
        program or to distort in any way the identity of the 
        rightful copyright holder.
        
        This software was put on the shareware market to allow 
        you, the consumer, to "try before you buy".  If you use 
        this product, please show your appreciation by 
        registering it.  Shareware works on the honor system - 
        Let's keep it alive!


        FOR PROFIT-BASED DISTRIBUTORS
        -----------------------------

        If you intend to distribute any portion of this software
        for a fee, you will need to obtain our written consent.
        Read the file VENDOR.TXT for the distribution 
        requirements.

              Serious Shareware
              P.O. Box 5523
              Arlington, TX 76005-5523

        Thank you for your cooperation!

```
{% endraw %}

## QUESTION.TXT

{% raw %}
```
                                QUESTIONNAIRE

     This questionnaire was compiled as a way for us to get more in 
     touch with our users.  All questions on this questionnaire are 
     designed to help us provide you with better software.  You are 
     encouraged to take the time to fill this out.  And if you 
     complete this and include it with your registration request, we
     will send you a copy of one of our other shareware titles, for 
     free.  We thank you for your time. 

     1.  Circle the appropriate answer.  Tell us what type of 
         equipment you use: 

         CPU:   PC    XT    AT    286    386    486

      MEMORY:   640K or less    More than 640K

     MONITOR:   MDA    CGA    EGA    VGA    Hercules

  HARD DRIVE:   YES    NO

FLOPPY DRIVE:   5 1/4 DS/DD  5 1/4 DS/HD    3 1/2 DS/DD  3 1/2 DS/HD

       MODEM:   YES    NO

ENVIRONMENTS:   DOS    Windows    DeskMate   GEM

PRINTER TYPE:   ____________________________________________________

     2.  Tell us about who uses your computer:

      ADULTS:   YES    NO
     
        AGES:   18-24    25-34    35-45   46 and over

   WHAT USES:   HOME MANAGEMENT    BUSINESS APPS    GAMES    OTHER

    IF OTHER:   Please Specify ___________________________________

    CHILDREN:   YES    NO

        AGES:   2-5    6-10    11-14    15-19

   WHAT USES:   EDUCATIONAL    GAMES    OTHER

    IF OTHER:   Please Specify ___________________________________

    
     If you have any comments, questions, product ideas or product 
     improvement suggestions, we would like to hear them.  Please use 
     the following section to write them down.

     ________________________________________________________________

     ________________________________________________________________

     ________________________________________________________________
    
     Thank you for your time!

```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
InContact! Ver. 1.1  Registration Information
---------------------------------------------

As an unregistered user you are granted a limited license period
of 30 days for a free evaluation of this product.  If you 
continue to use InContact after that point you must register the
program.  If you do not register you must discontinue its use.

We offer several registration options to better serve you.  At
the lowest level, you are granted a permanent license on the copy
you are currently using.  We also offer a professionally printed 
User Guide and Reference Manual.  In addition, we offer technical
support over the phone as an option.  If you elect to purchase 
the support, you receive a credit card style "tech" card with your
name, license number and expiration date for your convenience.
Please read over the following options, and we hope that you find
one that suits you.

Registration Options
--------------------

$20.00 "Basic Level" Base price for unlimited personal use of 
        this product.  Allows low-cost honesty.

$40.00 "Personal Level" Includes a professional printed manual
       PLUS 30 days free telephone support.

$60.00 "Professional Level" Includes the manual PLUS 1 year 
       phone support ($10 savings).

Other Options include:

 Separate Printed Manual: $25.00/ea.
 Technical Phone Support: $25.00/yr.
 Site Licenses and Volume Discounts are also available.

Accepted Registration Methods
-----------------------------

1. Register directly with Serious Shareware:

   Send the following:

   * A completed, printed order form -or- a valid purchase 
     order from your company.  Specify diskette size and 
     format (high/low density) when ordering.

   * A check or money order in U.S. funds for the registration
     amount PLUS:

     Reg Type     U.S. Resident  Texas Resident  Outside U.S.
     ------------ -------------- --------------- -------------
     Basic        $1.00 S/H      $1.00 S/H+TAX   $2.50 S/H
     Personal     $2.90 S/H      $2.90 S/H+TAX   $15.00 S/H
     Professional $2.90 S/H      $2.90 S/H+TAX   $15.00 S/H

   * Any comments or suggestions

   To:  Serious Shareware
        P.O. Box 5523
        Arlington, TX 76005-5523

   NOTE: To make ordering easier, you can try filling-out the
         automated order form (REG.EXE) which you can pull up
         by clicking the "Registration Form" button at the
         bottom of the "Shareware Information" screen.

2. Register ONLINE with Compuserve:

   If you elect to register via CompuServe you will be able to
   register the Personal ($40) version only.  You will also be
   charged a flat $15 shipping charge, since we cannot specify
   domestic or international shipping rates.  International 
   users may find this option most desireable since they may 
   find it easier to pay for registration in this manner, and
   they have little need of the full year of telephone support 
   which comes with the Professional ($60) package option.

   The Registration ID for InContact is:  404

3. Use a CREDIT CARD to register with:

   Public (software) Library: Item #10614.  PsL accepts MC/VISA,
   AMEX, and DISCOVER.  Call 800/2424-PSL or 713/524-6394 or 
   fax your order to 713/524-6398.  PsL also accepts orders 
   via CompuServe at CIS# 71355,470 or by mail to PsL, P. O. 
   Box 35705, Houston TX  77235-5705.  These numbers are for 
   ORDERING ONLY!!  For information about dealer pricing, site
   licenses, shipping of products, returns, latest version 
   numbers or other technical information contact Serious
   Shareware.   

*  Registering with PSL will register the Professional ($60)
   package.  PSL charges $4 for shipping, for a total of $64.
   PSL also accepts international orders, charging $15 for
   shipping for a total charge of $75.
   
   
We hope that you elect to register and continue to use 
InContact.  If you have any questions or comments, feel free 
to drop us a letter (at our address above) or leave mail on
CompuServe at:

David M. Balmer, Jr. #70404,3014.

```
{% endraw %}

## REVIEWR.TXT

{% raw %}
```
InContact! Ver 1.1 ... A Guided Tour
--------------------------------------------

To help your review of this version of our application we have 
compiled a list of features.  Feel free to use this sheet to 
guide you through many of InContact's finer points and unique 
features. 

When you first run the program it opens a file called SAMPLE 
if no files exist.  Thereafter the program will remember and 
auto-load the last file used.  We have included a file called 
(coincidentally) SAMPLE which contains 10 records.  Feel 
free to use this file for testing purposes. 

When you see the About window, select the Overview and Shareware 
buttons.

Once in the program, take a short trip through some of these 
features:

[] All windows are movable and InContact remembers where you put 
   them (even after you exit the program).  This feature can be 
   turned off via the Preferences dialog.

[] The View menu allows you to customize the look of InContact.  
   By selecting items on this menu you can toggle sections of the 
   window on and off.  This can help you reduce the size of the 
   window by hiding information you are not interested in.

[] All applicable fields have an auto-capitalize feature (which 
   you may turn off in the Preferences dialog).  Entry fields 
   will capitalize each word and notes will capitalize only the 
   first word of each sentence.

[] Most date fields have a browse button (with an ellipsis "...") 
   to the right of applicable fields.  When you activate one of 
   these buttons a popup monthly calendar appears, allowing you 
   to easily select the appropriate date.

[] In all cases where a file name is required, a browse button 
   allows you to search for a filename via a standard file 
   selection dialog.

[] Eight user-definable "flags" have been provided to allow you 
   to set up your own yes/no-type identifiers for each file 
   (located at the bottom of the main window).  

[] In addition, InContact has two user-defined "list" fields: 
   Category and Status.  These allow you to set up your own lists 
   of categories for each file  (located toward the upper-right 
   of the main window).

[] InContact features a control bar at the top of the main 
   window.  This bar allows you to access many frequently-used 
   functions directly with the mouse:

   [] The control bar contains three iconic buttons at the far 
      right.  These correspond to: File Attach, Call and Quick 
      Mail and provide visual feedback (i.e. the Call button 
      lights up when you are in a call, the Attach button lights
      up when a contact has any files attached to it, etc.)

   [] The Store, Cancel and Add buttons are predictable.  The 
      Locate button pops-up a dialog that contains a sorted list
      of all contacts on file.  Once the dialog is visible, you 
      can perform some sophisticated selects.  InContact even 
      remembers the last select operation you made for each file.
      From the locate dialog, you can toggle back and forth 
      between the complete and selected list of contacts by using 
      the check box at the bottom of the window.

   [] In addition, the control bar contains a scroll-bar which,
      when activated, will scan quickly through your contacts 
      like flipping through pages of a document.  All keyboard 
      commands work here, too.

   [] Arrow keys and PgUp/PgDn work as expected.  As an extra 
      feature, you can type an alpha character (while the cursor
      is blinking on the scroll bar) to find the first contact on
      file that starts with that character.

[] InContact allows you to "Attach" any number of files to any 
   contact in any contact file via the File Attach option.  You 
   could keep: a picture of a contact (unlikely), a map with 
   directions to their location, copies of recent correspondence,
   spreadsheets or darn near any file type using ENGLISH 
   descriptions.  To view any of these files, you need only 
   select the View button on the file attach dialog.  The program
   will search through your Windows file associations for the 
   correct program to use with that file type.  If a file 
   association does not exist you can add a file association via 
   Windows File Manager. 

[] Complete DDE support is included (look at the last portion of the
   file EXT.WRI for more specific information).

One of the key themes with InContact is accommodating the user's
wishes.  We have taken much care in allowing more than one way to
accomplish a given task.  We try to please both mouse and 
keyboard users (and abusers). We appreciate your time in 
reviewing this product and look forward to any comments or 
suggestions you might have.  Have a pleasant time exploring 
InContact! 

David M. Balmer, Jr.
Serious Shareware
P.O. Box 5523
Arlington, TX 76005-5523

CIS#: 70404,3014

```
{% endraw %}

## SUPPORT.TXT

{% raw %}
```
InContact! Technical Support Policies
-------------------------------------

If you are having trouble using InContact:

   First, make sure InContact is causing the problem:
   A. Check your printer and print configuration
   B. Check your Windows configuration
   C. Try closing any other applications that
      may also be running and try InContact again.

   If none of these produce results, try reading the
   included or printed manual for help.

If all else fails, you may receive technical support
with one of the following methods:

A. Mail us a letter at:

   Serious Shareware
   P.O. Box 5523
   Arlington, TX 76005-5523

B. Use Compuserve:

   Send mail to:  David M. Balmer, Jr.
   CIS Number:    70404,3014

C. REGISTERED USERS of the Personal or Professional level
   package ($40 or $60) will be able to receive telephone
   support for InContact with a special Technical Support
   ID number for your program.  Users of the $60 package
   receive a Tech Card with their unique ID and the tech 
   support phone number.

When contacting us we need the following information:

   1. The make and model of your computer
   2. The type of display
   3. The version number of Windows you are running
   4. The amount of memory your machine has
   5. A detailed account of what you did when using
      InContact and what happened from your view.

```
{% endraw %}

## VENDOR.TXT

{% raw %}
```
InContact! Vendor Information
-----------------------------
InContact is shareware and as such, anyone is permitted to give
copies to friends or associates.  However, if you are a 
distributor of shareware products, we ask that you read the 
following text BEFORE distribution.

Program Descriptions
--------------------
One-Liner:      A complete contact manager for Windows with DDE 
                and more! 

Short Blurb:    A complete contact manager for Windows.  Link 
                files to any contact, track calls & letters.  
                Feature-packed and customizable to meet your 
                needs - even full DDE support! 

Medium:         A complete contact manager for Windows.  Packed 
                with features for the professional:  Work/Home, 
                6 phone numbers, notes (up to 64k/contact), 
                custom category/status, 8 user-defined "flag" 
                fields, last call/call back & more.  Link files 
                from other apps. to any contact.  Customize 
                display.  Auto-dial, call tracking, contact 
                selection, form letters, labels, reports and full
                DDE support round out the features of this 
                aggressive application. 

Long:           A complete contact manager for Windows.  Packed 
                with features for the professional:  Work/Home,
                6 phone numbers, notes (up to 64k/contact), 
                custom category/status, 8 user-defined "flag"
                fields, last call/call back & more.  Link files 
                from other applications to any contact.  
                Customize the display to suit your needs.  
                Convenient entry: auto-capitalize by word or 
                sentence, calendar browser for date entry, mouse
                control bar with fast record scroll, great 
                keyboard interface for keyboard users.  InContact
                is extendable: launch most any application from 
                the menu with "smart" calling to allow tight 
                integration.  Auto-dial, call tracking, contact 
                selection, form letters, labels, reports and full
                DDE support round out the features of this 
                aggressive application. 


Registration Options
--------------------
We offer three levels of registration which range from $20 to $60
(view the file REGISTER.TXT for more specific information). 


Distribution
------------
We encourage vendor-distribution of InContact! but you must 
follow these guidelines to do so: 

1. You must have written confirmation of our permission to 
   distribute the program and/or collect any registration fees 
   for it (Call us & we'll send it).  BBS' and online services 
   may distribute WITHOUT permission and are exempt from #4 and
   #5.  No distributor or BBS may accept registration fees on our
   behalf unless they have made arrangements with us.

2. We have broken the files into segments so that you can 
   distribute them as required.  You must include ALL of the 
   following files for distribution:

   DISK 1
   ------
   SETUP.EXE	SETUP1.EXE	SETUP.1ST	SETUPKIT.DL_
   VBRUN100.DL_	VER.DL_

   DISK 2
   ------
   CONTACT.EXE

   DISK 3
   ------
   CONTACT.HLP	REGISTER.TXT	VENDOR.TXT      README.TXT	
   SUPPORT.TXT	HISTORY.TXT	APF.TXT		REVIEWR.TXT
   NOTICE.TXT	QUESTION.TXT	EXT.WRI		SAMPLE.CNT
   SAMPLE.NDX	SAMPLE.SEL	SAMPLE.NOT	SAMPLE.LNK
   SAMPLE.LOG	SAMPLE.CAT	SAMPLE.STS	SAMPLE.FLG
   ENV9.LBL	ENV10.LBL	ENVDL.LBL	ENV634.LBL	
   MONARCH.LBL  3UPADRS.LBL	2UPADRS.LBL	1UPADRS.LBL
   3UPLASER.LBL 2UPLASER.LBL	1UPLASER.LBL	3X5CARD.LBL
   CONTACT.LLB	CONTACT.RPL	CONTACT.IXL	DEFAULT.IXF 
   DEFAULT.RPF  PERSONAL.EXE	FILEASSC.EXE   	REG.EXE	 	
   FILE_ID.DIZ

   *** For 360K diskette distribution: group as above.  
   *** For 720K diskette distribution: DISK 1 = first disk
       DISK 2 & 3 = second disk 
   *** For 1.2M and 1.44M: DISK 1, 2, & 3 = first disk
   *** Bulletin boards should use these configurations for 
       zip files as well (any option is acceptable).

   The InContact diskette installation will work properly 
   ONLY when configured in the manner laid out above.  
   Users will not be able to install properly if the files 
   are divided in any other manner.
   	
   In addition, this program REQUIRES VBRUN100.DLL which is the 
   Microsoft runtime module for Visual Basic.  This file is 
   freely distributable and is readily available from a variety 
   of sources.  If you received a copy of InContact directly from
   Serious Shareware, we have included a copy of this DLL.  If 
   your shareware library has VBRUN100.DLL, feel free to use it 
   instead of the copy we sent.

3. You may NOT sell InContact as (or included with) a COMMERCIAL
   or RETAIL product WITHOUT OUR WRITTEN CONSENT.  Our name 
   doesn't have the word SHAREWARE in it for nothing!

4. Do not include InContact as part of a shareware package 
   UNLESS the other items in the package are augmentive utilities
   for (or relating to) our application (for large collections 
   like CD-ROMS, please get our permission).

5. If you have a rating system and your reviews deem InContact 
   as average or below overall, please don't bother distributing
   it.  We don't have an ego problem, we just don't want to waste
   your time.

6. Sing our praises (optional, but it would be nice!) 

As a special note: this application allows integrated extension 
modules. These modules can easily be created in most any language
and allow user-installable functionality to extend the product.
Modules could be anything from links to Windows programs, 
conversions for more specialized formats, billing links, etc.  
We maintain a collection of any modules sent to us and can make a
list available to you.  These modules are so easy to build that 
we expect them to appear in droves.  In addition, InContact has
full DDE support. (Check out the WRITE document "EXT.WRI" for 
more information)


Credits
-------
InContact! is Copyright(C)1992 Serious Shareware,
All rights are reserved. 

InContact! was written in Visual Basic v1.0 for the 100% IBM 
AT-compatible computer running a 286 (or higher) with at least 
1meg of memory under Windows version 3.0 or 3.1 in normal or 
enhanced modes.


Trademarks
----------
InContact! is TM Serious Shareware, Windows and Visual Basic are
(R)(C) Microsoft Corp., IBM is (R) International Business 
Machines Corp.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3395

     Volume in drive A has no label
     Directory of A:\

    NOTICE   TXT      1776  11-10-92   9:00a
    VENDOR   TXT      6652  11-10-92   9:00a
    REGISTER TXT      4138  11-10-92   9:00a
    REVIEWR  TXT      4970  11-10-92   9:00a
    HISTORY  TXT      1621  11-10-92   9:00a
    SUPPORT  TXT      1406  11-10-92   9:00a
    APF      TXT       699  11-10-92   9:00a
    EXT      WRI     12800  11-10-92   9:00a
    QUESTION TXT      1950  11-10-92   9:00a
    CONTACT  HLP     70189  11-10-92   9:00a
    CONTACT  IXL         9  11-10-92   9:00a
    CONTACT  LLB       149  11-10-92   9:00a
    CONTACT  RPL        13  11-10-92   9:00a
    DEFAULT  IXF        50  11-10-92   9:00a
    DEFAULT  RPF        40  11-10-92   9:00a
    ENV10    LBL        77  11-10-92   9:00a
    ENV634   LBL        68  11-10-92   9:00a
    ENV9     LBL        63  11-10-92   9:00a
    ENVDL    LBL        69  11-10-92   9:00a
    1UPADRS  LBL        67  11-10-92   9:00a
    1UPLASER LBL        82  11-10-92   9:00a
    2UPADRS  LBL        67  11-10-92   9:00a
    2UPLASER LBL        83  11-10-92   9:00a
    3UPADRS  LBL        68  11-10-92   9:00a
    3UPLASER LBL        82  11-10-92   9:00a
    3X5CARD  LBL        58  11-10-92   9:00a
    MONARCH  LBL        69  11-10-92   9:00a
    SAMPLE   CAT        47  11-10-92   9:00a
    SAMPLE   CNT      5710  11-10-92   9:00a
    SAMPLE   FLG        96  11-10-92   9:00a
    SAMPLE   LNK       170  11-10-92   9:00a
    SAMPLE   LOG        78  11-10-92   9:00a
    SAMPLE   NDX       225  11-10-92   9:00a
    SAMPLE   NOT      1344  11-10-92   9:00a
    SAMPLE   RPF        34  11-10-92   9:00a
    SAMPLE   SEL       148  11-10-92   9:00a
    SAMPLE   STS        22  11-10-92   9:00a
    FILEASSC EXE     28923  11-10-92   9:00a
    PERSONAL EXE     12361  11-10-92   9:00a
    REG      EXE     13229  11-10-92   9:00a
    FILE_ID  DIZ       320  11-10-92   9:00a
           41 file(s)     170022 bytes
                          120832 bytes free
