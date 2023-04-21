---
layout: page
title: "PC-SIG Diskette Library (Disk #3004)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3004/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3004"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3004.TXT

{% raw %}
```
Disk No: 3004                                                           
Disk Title: Windows Reminder                                            
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Windows Reminder                                         
Author Version: 1.2E                                                    
Author Registration: $59.95                                             
Special Requirements: Microsoft Windows.                                
                                                                        
This is a slick Windows personal scheduling program.  It lets you enter 
date, time, category, and type of appointments.  Multiple entries can be
added to create to-do lists.  Appointments can be reviewed and printed  
out by time or category.  Like your favorite alarm clock, Windows       
Reminder sounds an audible alarm, and even has a snooze function that   
will re-remind you at a later time.  It can also launch a program when  
you are away from your computer.                                        
                                                                        
Text can be easily imported or exported in ASCII files.  It also        
supports DDE (Dynamic Data Exchange) as both a client and server,       
letting you easily exchange data with other Windows programs.           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.TXT

{% raw %}
```
                WELCOME TO WINDOWS REMINDER!

 This disk contains Windows Reminder 1.2E

  NEW features for 1.2E
  
  The graph now shows all REPEATED items.

  Features added in  for 1.2D
  
  The last Category is displayed for new items.
  If you have an item with NO time, it will still be displayed
     when you first start the program.  As an example, Birthday items
     did not show up unless a time was given.  Now everything for
     that day will show up even there is no time given.
     
  Fixes in 1.2D
  
  When an item was deleted, the graph was not updated.

  Features added for 1.2C
  
  Improved Help file
  You can get a list of Categories via DDE.
  
 Fixes in 1.2C 
 
  Items.DAT file will stay in one place.  Check for
      items.dat files in other directories.
  Entering dates with YearMonthDay format works now.
  Other minor corrections like making Calendar minimized with Reminder.
  
  Features added in Reminder 1.2B

  You can now close Calendar automatically when Reminder is closed by
  setting the Options Preferences dialog

  Fixes in 1.2B 
  When the date is repeated for next month or year, the day is also updated.
  Fixed a few problems entering non-US dates.

  Features added in Reminder 1.2A

  Repeat feature for daily, weekly, monthly, yearly and end of month.
  Display a graph of scheduled times.
  Enter new items by clicking on the graph.
  Option to display the date in the icon.
  Send a DDE Execute command to dial a phone number for you.

  Fixed in 1.1B 
  This version works with Norton's Desktop program.

  Features added in 1.1A
  Internationalization.
  Demonstration for first time users.
  When Iconic, displays the current time.
  Chimes were added on the hour, 1/2 hour and 1/4 hour.
  Chimes also support MultiMedia, if it's installed.
  Auto Dial of phone number.
  Advance Warning has been added to each item.
  Length of time  has been added to each item for reports.
  Re-scheduling of item to next day, week, month or year with
          "next business day" option.
  Categories can be added inside the item dialog.
  A Calendar button has been added to the Control bar
  A Calendar button has been added in the Item dialog.
  The Calendar will line up next to dialog box


 This file contains the following information:

        1) Late-Breaking News
        2) The pesky registration reminder screens
        3) A few legal matters
        4) Packing List
        5) Installation Instructions
        6) Online Support Information
        7) Association of Shareware Professionals Ombudsman Statement
        8) The complete licensing agreement
        9) Order Form


            *** LATE-BREAKING NEWS ***

 This is the second version of Windows Reminder.
 We have fixed all known problems and added a lot more
 functionality as noted above.

 We believe the program to be bug free and fully functional.  We 
 and others have been using it for months without problems.

 Since this is the second release, we encourage any feedback as to 
 what you would like to see in future versions, and also any bugs 
 or problems with the program. 

 While the hard copy manual is still being edited and will be 
 sent to registered customers, complete online documentation is 
 available in the installation directory as REMINDER.HLP. You 
 can view the help file by using Windows WinHelp or pressing the 
 F1 key while in Windows Reminder. 




                 REGISTRATION REMINDERS

 Unlicensed copies of Windows Reminder are 100% fully functional.

 Unlicensed copies of Windows Reminder have a pesky registration 
 reminder screen that pops up whenever you start the program.

 We're sure that once you see the incredible quality of our 
 software, you will dig out your credit card, pick up the phone, 
 call the nice people at our 800 number and register Windows 
 Reminder. 

 When you pay for the shareware you like, you are voting with your
 pocketbook, and will encourage us to bring you more of the same kinds
 of products.  Pay for what you like, and voila, more of what you like
 will almost magically be developed.


                        LEGAL MATTERS

 Of course the usual disclaimers still apply.  We are not 
 responsible for anything at all.  Nothing.  Even if we are held 
 responsible, the limit of our liability is the licensing fees 
 you paid.  The full text of our license agreement is found near 
 the bottom of this file. 



                       PACKING LIST:

 With this version you have the following files:

  CAL      EXE  A calendar program.
  ITEMS    CAT  The "category" data base file - Press F4 to add more.
  ITEMS    DAT  Tutorial data file.
  README   TXT  This File
  REMINDER EXE  The Reminder program.
  REMINDER HLP  The Reminder Help file - press F1 to display it.
  REMINDER DOT  A WinWord template file that has a few sample DDE
                samples and reports to use with Reminder.
  REMINDER XLM  A Microsoft Excel macro file that has a few sample DDE
                samples to use with Reminder.
  RMDDE    EXE  A Visual Basic DDE Demo with Reminder
  RMDDE    FRM  A Visual Basic form to do DDE with Reminder
  WWWDBMS  DLL  The data base engine
  SETUP-RM EXE  The Setup Program
  BINXZ    EXE  More of the setup program
  SETUP    INF  The setup script file



               HOW TO INSTALL WINDOWS REMINDER

 Use our SETUP-RM.EXE program, which will copy the files for you and install 
 a WINDOWS REMINDER group in the program manager with a TUT (Tutorial) account.
 To use our SETUP-RM.EXE program...   (Manual install instructions below)

   1) Close down all extraneous Windows applications.

   2) Double-Click on the SETUP-RM.EXE program

   3) When the setup program asks for a directory, specify initial directory,
      or accept the given default (C:\REMINDER).




                    ON-LINE SUPPORT

 Windows Reminder has on-line support!

 The home of Windows Reminder is on Compuserve, in the WINAPA
 forum, in the Wilson WindowWare section (#15 currently).  Also
 the latest and greatest downloads are available from DL15 of the
 WINAPA forum.  The Wilson WindowWare section of the WINAPA forum
 is checked on a daily basis, and all questions will be responded to.

 Registered users may also call our BBS for the latest versions of
 our products. (206) 935-5198   USR HST D/S V.42bis 9600+ 8N1


     Association of Shareware Professionals Ombudsman Statement


       Wilson WindowWare, the producer of Windows Reminder, is a
       member of the Association of Shareware Professionals
       (ASP).  ASP wants to make sure that the shareware
       principle works for you. If you are unable to resolve a
       shareware-related problem with an ASP member by contacting
       the member directly, ASP may be able to help. The ASP
       Ombudsman can help you resolve a dispute or problem with
       an ASP member, but does not provide technical support for
       members' products. Please write to the ASP Ombudsman at
       545 Grover Road, Muskegon MI 49442 or send a Compuserve
       message via easyplex to ASP Ombudsman 70007,3536


 The legalese section...

 WINDOWS REMINDER and WINDOWS CAL
 Copyright ⌐ 1988-1991 by Wilson WindowWare
 All rights reserved.


 SOFTWARE LICENSE

 Windows Reminder is not and has never been public domain 
 software, nor is it free software. 

 Non-licensed users are granted a limited license to use Windows 
 Reminder on a 21-day trial basis for the purpose of determining 
 whether Windows Reminder is suitable for their needs.  The use 
 of Windows Reminder, except for the initial 21-day trial, 
 requires registration.  The use of unlicensed copies of Windows 
 Reminder, outside of the initial 21-day trial, by any person, 
 business, corporation, government agency or any other entity is 
 strictly prohibited. 

 A single user license permits a user to use Windows Reminder
 only on a single computer.  Licensed users may use the
 program on different computers, but may not use the program
 on more than one computer at the same time.

 No one may modify or patch the Windows Reminder executable files 
 in any way,  including but not limited to decompiling, 
 disassembling, or otherwise reverse engineering the program. 

 A limited license is granted to copy and distribute Windows 
 Reminder only for the trial use of others, subject to the above 
 limitations, and also the following: 

  1)    Windows Reminder must be copied in unmodified form, complete
        with the file containing this license information.

  2)    The full machine-readable Windows Reminder documentation must
        be included with each copy.

  3)    Windows Reminder may not be distributed in conjunction with
        any other  product with out a specific license to do so
        from Wilson WindowWare.

  4)    No fee, charge, or other compensation may be requested or
        accepted, except as authorized below:

        A) Operators of electronic bulletin board systems (sysops)
           may make Windows Reminder available for downloading only as
           long as the above conditions are met.  An overall or
           time-dependent charge for the use of the bulletin board
           system is permitted as long as there is not a specific
           charge for the download of Windows Reminder.

        B) Vendors of user-supported or shareware software approved by
           the ASP may distribute Windows Reminder, subject to the
           above conditions, without specific permission.  Non-
           approved vendors may distribute Windows Reminder only after
           obtaining written permission from Wilson WindowWare.
           Such permission is usually granted.  Please write for
           details (enclose your catalog).  Vendors may charge a
           disk duplication and handling fee, which, when pro-rated
           to the Windows Reminder product, may not exceed eight dollars.

        C) Non-profit user groups may distribute copies of the 
           Windows Reminder diskette to their members, subject to 
           the above conditions, without specific permission.  
           Non-profit groups may collect a disk duplication fee 
           not to exceed five dollars. 

  LIMITED WARRANTY

  Wilson WindowWare guarantees your satisfaction with this
  product for a period of 60 days from the date of original
  purchase.  If you are unsatisfied with Windows Reminder
  within that time period, return the package in saleable
  condition to the place of purchase for a full refund.

  Wilson WindowWare warrants that all disks provided are
  free from defects in material and workmanship, assuming
  normal use, for a period of 60 days from the date of
  purchase.

  Wilson WindowWare warrants that the program will perform
  in substantial compliance with the documentation supplied
  with the software product.  If a significant defect in
  the product is found, the Purchaser may return the
  product for a refund.  In no event will such a refund
  exceed the purchase price of the product.

  EXCEPT AS PROVIDED ABOVE, WILSON WINDOWWARE DISCLAIMS ALL
  WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
  LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE
  PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE
  PURCHASER ASSUMES THE RISK OF PAYING THE ENTIRE COST OF
  ALL NECESSARY SERVICING, REPAIR, OR CORRECTION AND ANY
  INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO EVENT WILL
  WILSON WINDOWWARE BE LIABLE FOR ANY DAMAGES WHATSOEVER
  (INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
  BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS
  INFORMATION AND THE LIKE) ARISING OUT OF THE USE OR THE
  INABILITY TO USE THIS PRODUCT EVEN IF WILSON WINDOWWARE
  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

  Use of this product for any period of time constitutes
  your acceptance of this agreement and subjects you to its
  contents.

  U.S. GOVERNMENT RESTRICTED RIGHTS

  Use, duplication, or disclosure by the Government is subject
  to restrictions as set forth in subdivision (b)(3)(ii) of
  the Rights in Technical Data and Computer Software clause at
  252.227-7013.  Contractor/manufacturer is Wilson WindowWare
  2701 California Ave SW /suite 212/ Seattle, WA 98116

  TRADEMARKS

  Microsoft and MS-DOS are registered trademarks of
  Microsoft Corporation.
  Windows is a trademark of Microsoft Corporation.

  Windows Reminder is a trademark of Wilson WindowWare.



                          ORDERING INFORMATION

 Licensing Windows Reminder brings you wonderful benefits.  Some of these are:
    - Gets rid of that pesky reminder window that comes up when you start
      Windows Reminder.
    - Entitles you to one hour free phone support for 90 days (Your dime).
    - Insures that you have the latest version of Windows Reminder.
    - Gets you your own printed copy of the manual.
    - Encourages the authors of this program to continue bringing you
      updated/better versions and new products.
   -  Gets you on our mailing list so you are occassionally notified of
      spectacular updates and our other Windows products.
   -  And, of course, our 60-day money back gaurantee.



              WINDOWS REMINDER ORDER FORM 1.2E

 Name:   ____________________________________________________

 Company:____________________________________________________

 Address:____________________________________________________

         ____________________________________________________

 City:   ________________________  St:______  Zip:___________

 Phone: (______)_________________    Country:________________


            ____ Windows Reminder(s)  @ $59.95 : _______.____

 Foreign air shipping (except Canada) @  $9.50 : _______.____

                                          Total: _______.____


 Disk Size(circle one)    5.25" acceptable     3.5" required

 Please enclose a check payable to Wilson WindowWare; or you may
 use Amex, Visa, MasterCharge, or EuroCard.  For credit cards,
 please enter the information below:

 Card #:__ __ __ __ - __ __ __ __ - __ __ __ __ - __ __ __ __

 Expiration date: ____/____

 Signature:  _________________________________________

 
 Where did you hear or get your copy of Windows Reminder?


 ____________________________________________________________


          Send to:  Wilson WindowWare
                    2701 California Ave SW #212 
                    Seattle, WA 98116 
                    USA 

          or call:  (800) 762-8383  (orders only)
                    (206) 937-9335
                    (206) 935-7129  (fax) 

          (Please allow 2 to 3 weeks for delivery)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3004

     Volume in drive A has no label
     Directory of A:\

    CAL      EX$      7968   1-30-92   9:55p
    ITEMS    CA$       589  12-05-91   1:20a
    ITEMS    DA$      4006  12-05-91   1:20a
    README   TXT     15085   1-27-92  10:09p
    REMINDER DO$      5708  12-05-91   1:20a
    REMINDER EX$    106864   1-28-92   9:55p
    REMINDER HL$     71201  12-29-91   9:00p
    REMINDER XL$      2466  12-05-91   1:20a
    RM-NEWS  TX$      7658  12-05-91   1:20a
    RMDDE    EX$      8194  12-05-91   1:20a
    RMDDE    FR$      2201  12-05-91   1:20a
    RM__VER  12E       121  12-01-91   1:20a
    WBINXZ   EXE     48736  12-28-91   4:54p
    WSETUP   EXE      5248  12-05-91  12:17p
    WSETUP   INF      1456   1-07-92   1:27p
    WWWDBMS  DL$     28951  11-19-91  11:58p
    WWWDEALR DL$      2912  12-12-91  11:37p
    GO       BAT        38   1-31-91  12:58a
    FILE3004 TXT      1925   5-05-92   1:11p
    GO       TXT       693   5-04-92   2:14a
           20 file(s)     322020 bytes
                           29696 bytes free
