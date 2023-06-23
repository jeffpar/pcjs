---
layout: page
title: "PC-SIG Diskette Library (Disk #2659)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2659/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2659"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## #WB-CHGS.TXT

{% raw %}
```
 3/6/91  3.0A   WinMacro feature added.  Now you can have system
                 and application macro hotkeys with WinBatch.  See
                 documentation and samples.  See GLOBAL.WDF and NOTEPAD.WDF

                 Real Dialog boxes added.  Now you can have full scale
                 windows dialog boxes for user prompting.

                 Added better error messages for WinExec (Run Command) errors

                 FileAppend command added.  Now you can add stuff on to the
                 end of existing files, thus making a new file...

 1/30/91  2.0D   Fixed the CallExt function. Its really fixed now!

 1/21/91  2.0C   Fixed IniWritePvt, IniReadPvt, and DateTime functions
                 Added WallPaper, DirRename, ItemCount and ItemExtract
                 functions.

 1/ 8/91  2.0B   Fixed the setup program to put WBT in the 
                 WIN.INI [extensions] section correctly (ARRGGGHHH)

 1/ 2/91  2.0A	 Initial Shareware Release of WinBatch.

 4/20/89  1.X    Previous incarnations of this code.
```
{% endraw %}

## #WB-INI.TXT

{% raw %}
```
Here are some pointers on the keywords that WinBatch stores
in the WIN.INI file. THIS INFORMATION IS NOT AN INVITATION TO FEEL FREE
TO DINK THESE PARAMETERS.  Generally the information in the ini file
is for the software to use and is not meant for user input.  In fact,
in the OS2 Presentation Manager, the INI information is not in a human
readable format.   Regards to G.K. 

					
[WinBatch]	The Section header

Info =		(Alphabet soup) WinBatch licensing info (Don't modify)
Info2=		(Numbers) Additional Licensing information (Don't modify)

                *** Note: Other WBT files, either supplied by us or
                    others may feel that the WinBatch section of the
                    WIN.INI file is fair game, and may add additional
                    items not documented in this file.



```
{% endraw %}

## FILE2659.TXT

{% raw %}
```
Disk No: 2659                                                           
Disk Title: WinBatch                                                    
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: WinBatch                                                 
Author Version: 3.0A                                                    
Author Registration: $69.95                                             
Special Requirements: Windows 3.0                                       
                                                                        
WINBATCH brings the power of batch language programming to the Windows  
environment.  Although WINBATCH can do everything that the familiar DOS 
batch language can do, WINBATCH's capabilities begin where the DOS batch
language leaves off.                                                    
                                                                        
With more than a hundred functions, WINBATCH can:                       
                                                                        
~  Run Windows and DOS programs.                                        
~  Send keystrokes directly to applications.                            
~  Rearrange, resize, hide, and close windows.                          
~  Run programs either concurrently or sequentially.                    
~  Display information to the user in various formats.                  
~  Prompt the user for any needed input.                                
~  Present scrollable file and directory lists.                         
~  Copy, move, delete, and rename files.                                
~  Read and write files directly.                                       
~  Copy text to and from the Clipboard.                                 
~  Perform string and arithmetic operations.                            
~  Make branching decisions based upon numerous factors.                
                                                                        
And much, much more.                                                    
                                                                        
WINBATCH uses a logical "C-like" syntax, which should prove accessible  
to anyone with even the smallest amount of programming knowledge,       
including DOS batch language programming.                               
                                                                        
If you can write a .BAT file, you can write a WINBATCH file!            
                                                                        
In addition to offering immediate functionality to the novice and       
beginning user, WINBATCH continues to reward the intermediate and       
experienced user with a multitude of advanced capabilities.             
                                                                        
Whether you are creating batch files for others, or looking for a way to
automate your own work and eliminate the drudgery of repetitive tasks,  
you will find WINBATCH to be a powerful, versatile, and easy-to-use     
tool.                                                                   
                                                                        
WINBATCH is a shareware product distributed by Wilson WindowWare of     
Seattle.  Fully functional evaluation copies are available for download 
from Compuserve, WINAPA forum, Data Library 15.                         
                                                                        
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
               HOW TO INSTALL WINBATCH

 >>>AUTOMAGIC INSTALL

 Use our SETUP.EXE program, which will copy the files for you and install
 a WINBATCH group in the program manager with various sample files.
 To use our SETUP.EXE program...   (Manual install instructions below)

   1) Close down all extraneous Windows applications.
   2) Double-Click on the SETUP.EXE program
   3) When the setup program asks for a directory, specify initial directory,
      or accept the given default (C:\WINDOWS).
 NOTE:  If you are updating from a previous version, and made any of the
        WinBatch files READ-ONLY, remove the read-only attribute from
        the files before running setup.
        (Or else the setup process will hang)

 >>>MANUAL INSTALL
 The manual install is not actually recommended, but here is a little
 information you may need if you insist on doing a manual install.
 Any file ending with a $ may be a compressed file which needs to be expanded
 with the provided expand.exe program before use.  (This is mostly done with
 the disk based version of the product, not the ZipFile version)  E.G.
       EXPAND.EXE WINBATCH.EX$ WINBATCH.EXE
```
{% endraw %}

## README.TXT

{% raw %}
```
                WELCOME TO WINBATCH!

 This disk contains WinBatch 3.0A


 This file contains the following information:

        1) Late-Breaking News
        2) The pesky registration reminder screens
        3) A Special Offer for licensees of competing batch languages,
           and users of our now discountinued "Applets" product.
        4) A few legal matters
        5) Packing List
        6) Installation Instructions
        7) Online Support Information
        8) Association of Shareware Professionals Ombudsman Statement
        9) The complete licensing agreement
       10) Order Form



            *** LATE-BREAKING NEWS ***

 Announcing WinBatch, a complete honest-to-goodness Windows 3.0 batch
 language.  WinBatch allows you to create sophisticated batch language
 files to control your Windows environment.  WinBatch has over a hundred
 different functions to manipulate files, directories, windows, and other
 window applications.  WinBatch even has a SENDKEY statement that allows
 you to send keystrokes to other windows applications.  And there is
 even a way to send keystrokes to DOS applications.

 WinBatch now has dialog box capability for real Windows dialog boxes.

 The new WinMacro facility allows you to have menuitems on any and/or all
 applications, and to have HotKeys defined to do most any task.
                                                     
 Please note the online HELP cardfile, WB_HELP.CRD 
 The cardfile has quick help for the entire WinBatch command set.

 *** Be sure the following files win up in a directory defined
     in your DOS PATH statement.

     WINBATCH.EXE
     WINMACRO.EXE
     WINBATHK.DLL
     WINMACHK.DLL

     Also check the extensions section of the WIN.INI file to be
     sure the WBT extension points to the directory where WINBATCH
     is installed.



                 REGISTRATION REMINDERS

 Unlicensed copies of WinBatch are 100% fully functional.  In addition,
 the unlicensed copies have a pesky registration reminder screen that
 pops up on occassion.  The reminder screen will NOT pop up more than
 once per clock hour.

 This allows you to see it once, and then go about writing and debugging
 your own WinBatch WBT files, running the program LOTS of times, and not
 being bothered by the reminder screens till the next hour ticks by.


                    SPECIAL OFFER

 A SPECIAL OFFER for owners of licenses for other Windows batch
 language products or our former Applets product.  If you have
 purchased any of the following  products in the past, you may 
 update to WinBatch for the indicated fee.

          SoftBridge "Batch Tools"     - $35
          SoftBridge "Bridge"          - $35
          PubTech "BatchWorks"         - $35
          Wilson WindowWare "Applets"  - $20

 In order to take advantage of this offer, send the original front
 page of the software manual and a photocopy of the front of the
 program diskette.  Fill out the order form at the end of this file,
 enclose a check plus any applicable shipping and MAIL it in.


                        LEGAL MATTERS

 Of course the usual disclaimers still apply.  We are not
 responsible for anything at all.  Nothing.  Even if we are
 held responsible, the limit of our liability is the
 licensing fees you paid.  The full text of our license
 agreement is found near the bottom of this file.


                       PACKING LIST:

 Files ending with $ may have been compressed and are expanded by the 
 setup program.  


 README   TXT    This File
 SETUP    EXE    The Windows-based setup program.
 SETUP    INF    Information file for the setup program.
 WB__VER  ???    A dummy file.  ??? is the current version number.
 BINXZ    EXE    More of the setup program.

 The following files *might* be in a WINBATCH subdirectory.

 WINBATCH EXE    The main WinBatch EXE file       <Put in DOS Path>
 WINBATHK DLL    A required Dynamic Link Library  <Put in DOS Path>
 WINMACRO EXE    The main WinMacro EXE file       <Put in DOS Path>
 WINMACHK DLL    A required Dynamic Link Library  <Put in DOS Path>
 WININFO  EXE    A utility to help determine window size and
                 position for the WinPlace function.
 WB_HELP  CRD    A cardfile with a mini-manual on it.

 WINBATCH TXT    The disk-based manual.  Possibly compressed.
 #WB-CHGS TXT    Blow by blow differences in recent versions.
 #WB-INI  TXT    Notes on WIN.INI keywords used by WinBatch.

 SLIDES   WBT    Sample WBT file.  BMP Wallpaper Slide Show.
 DOSPASTE WBT    Sample WBT file.  How-2 paste to DOS apps.
 STONES   WBT    Sample WBT file.  "Stones" game -- Can you count?
 STONES   WTX    Text file used by STONES.WBT for instructions
 ZOOMER   WBT    Sample WBT file.  Runs apps from ProgMan as maximized.
 SOL      WBT    Sample WBT file.  Solitaire with a timer.
 PKUNZIP  WBT    Sample WBT file.  PKUNZIP shell.
 PKUNZUP  WBD    Dialog box definition for PKUNZIP shell.
 INTACTV  WBT    Sample WBT file.  Allows for interactive commands.

 GLOBAL   WDF    Sample Macro definition file.  For ALL applications.
 NOTEPAD  WDF    Sample Macro definition file.  For NOTEPAD app only.
 SIMPLE   WBT    Sample Macro file.  Just a simple little WBT file.
 STRANGE  WBT    Sample Macro file.  Just a strange little WBT file.
 RUNGEN   WBT    Sample Macro file.  A generic WBT file launcher.
 RUNPARM  WBT    Sample Macro file.  A special WBT file launcher.
 RUNPARM  WBL    Sample ASCII file of assorted WBT files with parameters.
 OPENALL  WBM    Sample Macro file.  Opens Notepad filebox as *.*
 DATETIME WBM    Sample Macro file.  Inserts date/time into notepad.

 EXPAND   EXE    Expand utility to uncompress WINBATCH.TX$
                 See Manual Install instructions.


               HOW TO INSTALL WINBATCH

 >>>AUTOMAGIC INSTALL

 Use our SETUP.EXE program, which will copy the files for you and install 
 a WINBATCH group in the program manager with various sample files.  
 To use our SETUP.EXE program...   (Manual install instructions below)

   1) Close down all extraneous Windows applications.

   2) Double-Click on the SETUP.EXE program

   3) When the setup program asks for a directory, specify initial directory,
      or accept the given default (C:\WINDOWS).


 NOTE:  If you are updating from a previous version, and made any of the
        WinBatch files READ-ONLY, remove the read-only attribute from
        the files before running setup.
        (Or else the setup process will hang)

 >>>MANUAL INSTALL

 The manual install is not actually recommended, but here is a little
 information you may need if you insist on doing a manual install.

 Any file ending with a $ may be a compressed file which needs to be expanded
 with the provided expand.exe program before use.  (This is mostly done with
 the disk based version of the product, not the ZipFile version)  E.G.
       EXPAND.EXE WINBATCH.EX$ WINBATCH.EXE
    
 For the basic installation, all you have to do is get the following files
 into a directory mentioned in your DOS path statement.
     WINBATCH.EXE
     WINBATHK.DLL
     WINMACRO.EXE
     WINMACHK.EXE
     WININFO.EXE  (Optional)
     WB_HELP.CRD  (Optional)
 and
     GLOBAL.WDF
     NOTEPAD.WDF

 You will probably also want any file whose extension begins with W, as in
 *.W*


                    ON-LINE SUPPORT

 WinBatch has on-line support on a number of computer systems.

 First of all, the home of WinBatch is on Compuserve, in the
 WINAPA forum, in the Wilson WindowWare section (#15 currently).  Also
 the latest and greatest downloads are available from DL15 of the
 WINAPA forum.  The Wilson WindowWare section of the WINAPA forum
 is checked on a daily basis, and all questions will be responded to.

 The FidoNet Windows echomail conference is also monitored for Windows
 questions in general.  Questions about Windows and WinBatch will
 be answered in the echo.

 If your budget is not able to afford Compuserve, we strongly suggest
 that you contact your local BBS sysops and encourage them to carry
 the Windows echomail conferences.

 Registered users may also call our BBS for the latest versions of
 our products. (206) 935-5198   USR HST D/S V.42bis 9600+ 8N1


     Association of Shareware Professionals Ombudsman Statement


       Wilson WindowWare, the producer of WinBatch, is a
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

 WINBATCH
 Copyright ⌐ 1988-1991 by Morrie Wilson.
 All rights reserved.



 SOFTWARE LICENSE

 WinBatch is not and has never been public domain
 software, nor is it free software.

 Non-licensed users are granted a limited license to use
 WinBatch on a 21-day trial basis for the purpose of
 determining whether WinBatch is suitable for their
 needs.  The use of WinBatch, except for the initial
 21-day trial, requires registration.  The use of
 unlicensed copies of WinBatch, outside of the initial 
 21-day trial, by any person, business, corporation, 
 government agency or any other entity is strictly prohibited.

 A single user license permits a user to use WinBatch
 only on a single computer.  Licensed users may use the
 program on different computers, but may not use the program
 on more than one computer at the same time.

 No one may modify or patch the WinBatch executable
 files in any way,  including but not limited to
 decompiling, disassembling, or otherwise reverse
 engineering the program.

 A limited license is granted to copy and distribute
 WinBatch only for the trial use of others, subject
 to the above limitations, and also the following:

  1)    WinBatch must be copied in unmodified form, complete
        with the file containing this license information.

  2)    The full machine-readable WinBatch documentation must
        be included with each copy.

  3)    WinBatch may not be distributed in conjunction with
        any other  product with out a specific license to do so
        from Wilson WindowWare.

  4)    No fee, charge, or other compensation may be requested or
        accepted, except as authorized below:

        A) Operators of electronic bulletin board systems (sysops)
           may make WinBatch available for downloading only as
           long as the above conditions are met.  An overall or
           time-dependent charge for the use of the bulletin board
           system is permitted as long as there is not a specific
           charge for the download of WinBatch.

        B) Vendors of user-supported or shareware software approved
           by the ASP may distribute WinBatch, subject to the
           above conditions, without specific permission.  Non-
           approved vendors may distribute WinBatch only after
           obtaining written permission from Wilson WindowWare.
           Such permission is usually granted.  Please write for
           details (enclose your catalog).  Vendors may charge a
           disk duplication and handling fee, which, when pro-rated
           to the WinBatch product, may not exceed eight dollars.

        C) Non-profit user groups may distribute WinBatch, subject
           to the above conditions, without specific permission.
           Non-profit user groups may charge a disk duplication and
           handling fee, which, when pro-rated to the WinBatch
           product, may not exceed five dollars.

  LIMITED WARRANTY

  Wilson WindowWare guarantees your satisfaction with this
  product for a period of 60 days from the date of original
  purchase.  If you are unsatisfied with WinBatch
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

  IBM, PC/XT, PC/AT, and PS/2 are registered trademarks
  of International Business Machines Corporation.

  Microsoft and MS-DOS are registered trademarks of
  Microsoft Corporation.
  Windows is a trademark of Microsoft Corporation.

  Pagemaker is a trademark of Aldus Corporation.
 
  PubTech and BatchWorks are registered trademarks of
  Publishing Technologies, Inc.

  Bridge and Batch Tools are registered trademarks of
  SoftBridge, Inc.


  Command Post and WinBatch are trademarks of Wilson WindowWare.





                          ORDERING INFORMATION

 Licensing WinBatch bring you wonderful benefits.  Some of these are:
    - Gets rid of that pesky reminder window that comes up when you start
      WinBatch.
    - Entitles you to one hour free phone support for 90 days (Your nickel).
    - Insures that you have the latest version of WinBatch.
    - Gets you your own printed copy of the manual.
    - Encourages the authors of this program to continue bringing you
      new and better products instead of breaking down and getting
      real jobs.
   -  Gets you on our mailing list so you are occassionally notified of
      spectacular updates and our other Windows products.
   -  And, of course, our 60-day money back gaurantee.



              WINBATCH ORDER FORM 3.0A

 Name:   ____________________________________________________

 Company:____________________________________________________

 Address:____________________________________________________

         ____________________________________________________

 City:   ________________________  St:______  Zip:___________

 Phone: (______)_________________    Country:________________


              ____ WinBatch(s)    @ $69.95 : _______.____

 Foreign air shipping (except Canada) @  $9.50 : _______.____

                                          Total: _______.____


 Disk Size(circle one)    5.25" acceptable     3.5" required

 Please enclose a check payable to Wilson WindowWare; or you may
 use Amex, Visa, MasterCharge, or EuroCard.  For credit cards,
 please enter the information below:

 Card #:__ __ __ __ - __ __ __ __ - __ __ __ __ - __ __ __ __

 Expiration date: ____/____

 Signature:  _________________________________________

 
 Where did you get your copy of WinBatch?


 ____________________________________________________________


          Send to:  Wilson WindowWare
                    2701 California Ave SW #212 
                    Seattle, WA 98116 
                    USA 

          or call:  (800) 762-8383  (orders only)
                    (206) 937-9335
                    (206) 935-7129  (fax) 


           (Please allow 3 to 4 weeks for delivery) 
```
{% endraw %}

## #WB-CHGS.TXT

{% raw %}
```
 3/6/91  3.0A   WinMacro feature added.  Now you can have system
                 and application macro hotkeys with WinBatch.  See
                 documentation and samples.  See GLOBAL.WDF and NOTEPAD.WDF

                 Real Dialog boxes added.  Now you can have full scale
                 windows dialog boxes for user prompting.

                 Added better error messages for WinExec (Run Command) errors

                 FileAppend command added.  Now you can add stuff on to the
                 end of existing files, thus making a new file...

 1/30/91  2.0D   Fixed the CallExt function. Its really fixed now!

 1/21/91  2.0C   Fixed IniWritePvt, IniReadPvt, and DateTime functions
                 Added WallPaper, DirRename, ItemCount and ItemExtract
                 functions.

 1/ 8/91  2.0B   Fixed the setup program to put WBT in the 
                 WIN.INI [extensions] section correctly (ARRGGGHHH)

 1/ 2/91  2.0A	 Initial Shareware Release of WinBatch.

 4/20/89  1.X    Previous incarnations of this code.
```
{% endraw %}

## #WB-INI.TXT

{% raw %}
```
Here are some pointers on the keywords that WinBatch stores
in the WIN.INI file. THIS INFORMATION IS NOT AN INVITATION TO FEEL FREE
TO DINK THESE PARAMETERS.  Generally the information in the ini file
is for the software to use and is not meant for user input.  In fact,
in the OS2 Presentation Manager, the INI information is not in a human
readable format.   Regards to G.K. 

					
[WinBatch]	The Section header

Info =		(Alphabet soup) WinBatch licensing info (Don't modify)
Info2=		(Numbers) Additional Licensing information (Don't modify)

                *** Note: Other WBT files, either supplied by us or
                    others may feel that the WinBatch section of the
                    WIN.INI file is fair game, and may add additional
                    items not documented in this file.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2659

     Volume in drive A has no label
     Directory of A:\

    WB__VER  30A        98   2-17-91   3:42p
    BINXZ    EXE     72784   2-06-91   2:04a
    SETUP    EXE      5216  12-06-90   3:13p
    SETUP    INF      1955   3-07-91   2:08a
    README   TXT     17110   3-04-91  10:38p
    GO       TXT      1180   6-12-91   3:59p
    GO       BAT        28   6-12-91  11:47a
    FILE2659 TXT      4071   6-12-91   4:01p
    WINBATCH     <DIR>    
            9 file(s)     102442 bytes

     Directory of A:\WINBATCH

    .            <DIR>    
    ..           <DIR>    
    WB_HELP  CR$     15677   3-07-91   2:09a
    WINBATHK DL$      1966   3-07-91   2:09a
    WINMACHK DL$      5254   3-07-91   2:09a
    WINBATCH EX$     58437   3-07-91   2:09a
    WININFO  EX$      3533   3-07-91   2:09a
    WINMACRO EX$     10006   3-07-91   2:09a
    EXPAND   EXE     14263  10-17-90   7:14a
    WINBATCH TX$     92033   3-07-91   2:09a
    #WB-CHGS TXT      1060   3-07-91   1:49a
    #WB-INI  TXT       831   2-17-91   3:42p
    PKUNZIP  WBD       728   2-17-91   4:09p
    RUNPARM  WBL        94   1-31-91   9:40a
    DATETIME WBM        91   9-21-89   9:09p
    OPENALL  WBM       753   2-17-91   3:59p
    DOSPASTE WBT      1354   2-17-91   4:02p
    INTACTV  WBT       421   2-17-91   4:03p
    PKUNZIP  WBT      1315   2-17-91   7:44p
    RUNGEN   WBT       653   2-17-91   3:54p
    RUNPARM  WBT       858   2-17-91   4:16p
    SIMPLE   WBT       328   2-17-91   4:17p
    SLIDES   WBT      1855   2-17-91   4:23p
    SOL      WBT       833   1-23-91  11:20p
    STONES   WBT      2074   1-23-91  11:43p
    STRANGE  WBT        78   1-31-91   9:39a
    ZOOMER   WBT       861   1-01-91  11:01p
    GLOBAL   WD$       286   2-17-91   3:44p
    NOTEPAD  WD$       101   1-31-91  10:21a
    STONES   WTX       369   8-14-89  12:30a
           30 file(s)     216112 bytes

    Total files listed:
           39 file(s)     318554 bytes
                           22528 bytes free
