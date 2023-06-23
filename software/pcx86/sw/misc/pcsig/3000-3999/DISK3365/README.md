---
layout: page
title: "PC-SIG Diskette Library (Disk #3365)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3365/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3365"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## READ1ST.TXT

{% raw %}
```
                          
                          
                          
                          M E G A   E D I T (TM)

                              Version 2.07

                        Copyright ⌐, 1991, 1992 by

                        Computer Witchcraft, Inc.
                        Post Office Box 210441
                        San Francisco, CA, 94121-0441

                        Telephone: (415)-752-2477
                        Fax:       (415)-752-8971
                        CompuServe Mail: 76130,1463  (Feedback welcome!)
                        Internet Mail:   megaedit@witchcraft.com

                            ALL RIGHTS RESERVED



                              (READ1ST.TXT)



  CONTENTS

  I.   A brief description of Mega Edit (TM).  
  II.  How to set up Mega Edit (TM) on your system. (Troubleshooting)
  III. How to upgrade a registered version with these files.
  IV.  Tips on using the Mega Edit (TM).





                I. WHAT IS MEGA EDIT (TM)?  

  Mega Edit (TM) is a Windows 3.0/3.1 application.  Mega Edit (TM)is a 
  powerful ASCII text editor.  It is designed specifically to facilitate 
  complex editing tasks involving multiple and/or large files, where such 
  tasks would be difficult or impossible with other editors currently 
  available for MS Windows 3.0/3.1.

  SYSTEM REQUIREMENTS:
  Mega Edit (TM) requires Microsoft Windows 3.0 or 3.1 running in STANDARD 
  MODE OR HIGHER.  Also, a VGA, SVGA, or XVGA or other high resolution 
  monitor is recommended, as is a mouse.

  FILES INCLUDED WITH MEGA EDIT (TM):

  MEGAEDIT.EXE -- application executable file.  
  MEGAEDIT.HLP -- application on-line help.
  MEGAED.DLL   -- Mega Edit (TM) dynamic link library.
  COMMDLG.DLL  -- Windows 3.1 Common Dialog library.  This file also
                  comes with Windows 3.1.  You can delete the Mega 
                  Edit (TM) copy if you are using Windows 3.1.
  READ1ST.TXT  -- product documentation.
  README.TXT   -- copyright and distribution guidelines.
  REGISTER.TXT -- registration information.
  REG_FORM.TXT -- registration form.
  VENDOR.TXT   -- application for limited distribution rights.
  RELEASE.TXT  -- release notes - improvements from release to release.

                II. SETTING UP MEGA EDIT (TM) ON YOUR SYSTEM

  STEP 1. Make a separate directory anywhere on your system and store ALL
  of the distribution files that are part of Mega Edit (TM) in that 
  directory.  If you are using Windows 3.1, you may want to delete the copy 
  of COMMDLG.DLL that is supplied with Mega Edit (TM) - it is already 
  supplied with Windows 3.1.  It is generally best to keep all the
  distribution files together in the same directory.
  
  STEP 2. Install the Mega Edit (TM) executable file 'MEGAEDIT.EXE' in a 
  Program Manager application folder. If you do not know how to do this, 
  please see your Microsoft Windows 3.x documentation. 

  STEP 3. To RUN Mega Edit (TM), select the Mega Edit (TM) icon by either
  double-clicking on it with your mouse, or cursor to the icon and hit the
  ENTER key.

                III.  UPGRADING YOUR REGISTRATION

  If you already have a registered version of Mega Edit (TM) at version
  2.01 or later you can automatically upgrade your registration
  to this level with these shareware files.  To do so:
  
  STEP 1.  Copy in all of the files from this shareware release into
  your Mega Edit (TM) directory.  

  STEP 2.  Delete these shareware only .TXT files:

        READ1ST.TXT
        README.TXT     (Not to be confused with READ_ME.TXT)
        REGISTER.TXT
        REG_FORM.TXT
        VENDOR.TXT
        
  You should retain these two .TXT files:

        READ_ME.TXT  - From your original registration.
        RELEASE.TXT  - Updated with this shareware release.

  STEP 3.  If you are running Windows 3.1, you will probably not
  need COMMDLG.DLL - it is included with Windows 3.1.  You can 
  delete if you like.


                IV. TROUBLE SHOOTING

  1. YOU DON'T LIKE THE DEFAULT OPENING SIZE OF THE MEGA EDIT SCREEN.

  Mega Edit decides on its opening screen size by checking the
  value set in the Options/Preferences dialog box for word-wrap/
  'right margin at:'.  The size selected will be just large enough
  to accommodate the margin.  If you increase or decrease this value,
  Mega Edit will change its opening size accordingly.  To modify this
  setting, select 'Preferences' from the 'Options' menu.

  2. PROBLEMS WITH GENERAL PROTECTION FAULT WHEN MEGA EDIT STARTS.

  We have had several reports of this, and all have been traced
  to the user's launching Mega Edit from versions of the "Norton
  Desktop for Windows" (TM) prior to version 2.0.  Versions of "Norton 
  Desktop for Windows" (TM) prior to 2.0 are incompatible with Mega Edit.  
  If you have this problem, try running Mega Edit directly from the 
  Program Manager, or using the File Manager.  In most cases, this will 
  eliminate the problem.

  3. PROBLEMS RETAINING PREFERENCE SETTINGS FROM SESSION TO SESSION

  If for some reason you do not have a standard windows directory
  structure, with a directory called /windows/system, you may have some
  problems operating Mega Edit (TM).  It would be recommended that you create
  a sub-directory of whatever directory it is that holds your main windows
  executable files called 'system'.  This should resolve any problems.



                   III. TIPS ON USING MEGA EDIT (TM)

  Mega Edit (TM) includes an extensive on-line help system.  Documentation
  contained in the on-line system explains every feature of the product.
  You can invoke on-line help by pressing the F1 function key any time
  after you have started the editor.  

  The on-line Help system is organized to be practical and concise.  Using
  the browse feature, it is possible to read every topic that it contains
  in 30 minutes or less.  It is recommended strongly that you read through
  the topics in the main index entitled "Up and Running".  These provide a
  good overview of Mega Edit (TM) features.  Although "reading the manual" 
  has become a lost art these days, (generally with good reason!), you are
  encouraged to spend 30 minutes reading the on-line reference to the
  product.  You shouldn't have any problem understanding the product or its
  features anytime thereafter. 

  New user's should note that Mega Edit (TM) has some special, extended
  features to support complex editing tasks that involve many and/or large
  files.  Again, please have a good look at 'Up and Running Topics' in
  the on-line help system. 
```
{% endraw %}

## README.TXT

{% raw %}
```



                          M E G A   E D I T (TM)

                              Version 2.07

                        Copyright ⌐, 1991, 1992 by

                        Computer Witchcraft, Inc.             
                        Post Office Box 210441
                        San Francisco, CA, 94121-0441

                        Telephone: (415)-752-2477
                        Fax:       (415)-752-8971
                        CompuServe Mail: 76130,1463  (Feedback welcome!)
                        Internet Mail:   megaedit@witchcraft.com

                            ALL RIGHTS RESERVED



                                (README.TXT)

                         DISCLAIMER OF WARRANTY

  THIS SOFTWARE AND DOCUMENTATION ARE SOLD "AS IS" AND WITHOUT WARRANTIES
  AS TO PERFORMANCE OF MERCHANTABILITY OR ANY OTHER WARRANTIES WHETHER
  EXPRESSED OR IMPLIED.  BECAUSE OF THE VARIOUS HARDWARE AND SOFTWARE
  ENVIRONMENTS INTO WHICH THIS PROGRAM MAY BE PUT, NO WARRANTY OF FITNESS
  FOR A PARTICULAR PURPOSE IS OFFERED.

  WHILE WE HAVE MADE EVERY EFFORT TO TEST THE PRODUCT IN A WIDE
  VARIETY OF OPERATING ENVIRONMENTS, GOOD PROCEDURE DICTATES THAT ANY
  PROGRAM BE THOROUGHLY TESTED WITH NON-CRITICAL DATA BEFORE RELYING
  ON IT.  THE USER MUST ASSUME THE ENTIRE RISK OF USING THE PROGRAM. 
  ANY LIABILITY OF THE AUTHOR WILL BE LIMITED EXCLUSIVELY TO PRODUCT
  REPLACEMENT OR REFUND OF PURCHASE PRICE. 



                        DISTRIBUTION OF MEGA EDIT (TM)

  THE AUTHOR OF MEGA EDIT (TM) UNCONDITIONALLY RETAINS ALL RIGHTS PURSUANT 
  TO THE COPYRIGHT LAWS OF THE UNITED STATES.

  That said, the author very much encourages distribution of this product,
  under the following conditions:

  1.  Any person serving as a distributor of the Mega Edit (TM) must retain
      exactly the original form of the distribution, by including ALL
      files, in unmodified condition, especially including but not limited 
      to documentation and product screens that refer to registration
      information, forms, and procedures, that are part of distribution
      conducted by the author. 

      The files included in the author's distribution of the Mega
      Edit (TM) product are the following:

      MEGAEDIT.EXE
      MEGAEDIT.HLP
      MEGAED.DLL
      COMMDLG.DLL
      READ1ST.TXT
      README.TXT
      REGISTER.TXT
      REG_FORM.TXT
      VENDOR.TXT
      RELEASE.TXT

  2.  Owners or operators of Electronic Bulletin Boards, such as CompuServe,
      may acquire or accept, and then distribute copies of Mega Edit (TM) 
      through  their EBB service, subject to the conditions above, and may 
      further do so in the context of charging subscribers to their services 
      a general fee for belonging to the membership of the service, and/or 
      for time on-line, as long as these charges are not specifically 
      related to  overt sale of the Mega Edit (TM) product.  This should in 
      no way be construed as relinquishment, by the author, of his 
      copyright protection and sole ownership of Mega Edit (TM).

      SUGGESTED PRODUCT "BLURB":
      -------------------------
      Title:    Mega Edit ASCII File Editor/Windows 3.x
      Keywords: EDITOR, WINDOWS, MACINTOSH, UNIX, TEXT, BINARY
      Product Description:

      Mega Edit (TM): "A fine, fine product, The QEdit of Windows" 
                       PUBLIC BRAND (4 Stars! & Excellence Trophy)

      POWERFUL - NO LIMITS on file sizes.  Split screen editing of 
      one or multiple files.  Variable, Sizable! text fonts.  
      Formatted display of binary files.  IMPORT/EXPORT of UNIX
      Macintosh, and DOS text formats.  Word-wrap. On-line Help.
      All other standard features.  

      FULL WORKING VERSION (Windows Std/Enh mode required)
      Version 2.07  (Shareware)

  3.  Persons wishing to contact the author for purpose of negotiating
      limited distribution rights for Mega Edit (TM) should review the file
      VENDOR.TXT, included with the Mega Edit (TM) distribution files, which
      contains an application form that distributors may use to initiate the
      process. 

  4.  Any persons possessing a bona fide copy of the shareware version of
      the program, as originally distributed by the author, may freely copy 
      and distribute the product to whomever they like, as long as they 
      retain exactly the original form of the distribution, by including ALL 
      files, in unmodified condition, especially including but not limited to 
      documentation and product screens that refer to registration 
      information, forms, and procedures, that are part of distribution 
      conducted by the author, and as long as they assess no fees beyond 
      those required for materials needed in distributing the product, i.e., 
      matching exactly the cost of floppy disks, mailing materials and costs, 
      or long-distance phone charges relevant to electronic distribution. 
  
  5.  With the exceptions of EBB operators, under the conditions described
      above, and that of persons entering into written contractual 
      distribution agreements with Computer Witchcraft, Inc, other persons 
      engaged in the distribution of software for profit ARE EXPLICITLY 
      PROHIBITED from marketing or selling, in any form, any files or parts 
      of files, or modified versions of files, that are part of the author's 
      product distribution.

  6.  Developers of software products who incorporate ANY portion of the
      binary portions of the author's product, or who copy features or 
      aspects of the user-interface of the product subject to protection by 
      the laws of copyright, SHALL BE PROSECUTED, unless they have the 
      express, written permission of Computer Witchcraft, Inc., to do so.
```
{% endraw %}

## REG_FORM.TXT

{% raw %}
```
PRODUCT REGISTRATION FORM 
Mega Edit (TM) Version 2.07     Name:  _________________________________
(REG_FORM.TXT)
                     Company/Address:  _________________________________

                                       _________________________________

                                       _________________________________

               Your Telephone Number:  _________________________________
                                       (include area/country code)

               Disk Media, check one:  [ ] 5.25"  [ ] 3.5"

                        Date Ordered:  Month ________  Day _____  Year ______

Registration Name (Capitalization and Punctuation will be exactly as listed)
-----------------
                Your Name (required):  _________________________________

        Company/Org. Name (optional):  _________________________________

Credit Card Orders      Please Check:  [ ] MasterCard  [ ] Visa  [ ] JCB
------------------                     [ ] American Express  [ ] Discover 
                                       [ ] Carte Blanche  [ ] Diners Club
                  
                  Credit Card Number:  _________________________________
                     
                     Expiration Date:  Month ________  Year ______

              Cardholder's Signature:  _________________________________
             (for Mail or Fax orders)

Price Calculation   Registration Fee:  $35.50
-----------------
  California residents add Sales Tax:  ___________
                                                    $3.50 Unites States
               Shipping and Handling:  ___________  $5.00 Canada & Mexico
                                                    $9.00 Other countries
                          Total Cost:  ___________

Checks or Money orders:  Make payable in U.S. currency on a U.S. bank. 
Credit card payments may be sent via mail, E-Mail, FAX, or telephone.

   Computer Witchcraft, Inc.            Internet:   megaedit@witchcraft.com
   P.O. Box 210441                      CompuServe: 76130,1463
   San Francisco, CA 94121-0441         Fax:        (415) 752-8971
   U.S.A.                               Telephone:  (415) 752-2477

How did you receive your copy of Mega Edit (TM)?    -- Thanks!
------------------------------------------------
[ ] CompuServe  [ ] BIX  [ ] Genie  [ ] AOL  [ ] Other BBS __________________
[ ] Catalog ______________________  [ ] Other _______________________________
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```



                          M E G A   E D I T (TM)

                              Version 2.07

                        Copyright ⌐, 1991, 1992 by

                        Computer Witchcraft, Inc.
                        Post Office Box 210441
                        San Francisco, CA, 94121-0441

                        Telephone: (415)-752-2477
                        Fax:       (415)-752-8971
                        CompuServe Mail: 76130,1463  (Feedback welcome!)
                        Internet Mail:   megaedit@witchcraft.com

                            ALL RIGHTS RESERVED

                              (REGISTER.TXT)

REGISTRATION 
 
We at Computer Witchcraft believe that Mega Edit (TM) is a product
meeting the highest standards of excellence in design and software
craftsmanship.  We hope that you agree! 
 
As an additional benefit to the consumer, Mega Edit (TM) has been
released as shareware, so that you can try out the software on your
system to see if it meets your needs "before you buy."  If you make
the determination that you would like Mega Edit (TM) to become a
part of your shareware library, you should take responsibility to
pay for the product by registering it. 
 
BENEFITS OF REGISTRATION: 

        - Latest version
        - Manual in Write format
        - Registration information on About screen
        - No shareware registration screen
        - Technical support via CompuServe/Internet
        - On our mailing list
        - Upgrade protection
        - Total Customer Satisfaction guarantee

When you register Mega Edit you will receive a diskette containing
the latest version of the product. We are continually improving Mega
Edit (TM) and releasing new versions so it is quite likely that your
registered version will be a more recent version than the one you
picked up via shareware channels. 

You will receive a copy of the Mega Edit (TM) manual in Microsoft 
Write format.  Your name and/or company name will appear on the 
About screen, but your copy of Mega Edit (TM) will otherwise be free 
from start-up screens or registration screens of any kind. 

Registered users are eligible for Technical Support via CompuServe,
Internet mail, fax, or by telephone.   

We will put you on our company's mailing list, so that you
will receive materials describing the availability of upgraded
editions of the software and other new products from Computer
Witchcraft that may be of interest to you.

Upgrade protection!  When you register Mega Edit (TM) you will 
receive the most recent version of Mega Edit (TM), but we are always
improving the product.  At some point in the future you may find
a newer (later) version of Mega Edit (TM) out as shareware.  Not to
worry!  Registered users can just install the newer shareware 
version with the registration file from the older version and 
consider your new version registered!  The new software will display
your name and company information on the About screen and will
eliminate any registration screens.  This feature will work for 
all new shareware versions at least up until the next major release.

We strive for Total Customer Satisfaction and will happily refund
your money, including shipping and handling charges, if for any
reason you are unsatisfied with our product - you do not have to 
return the product.

HOW TO REGISTER: 
 
As of this date, January 1, 1992, the Registration Fee for 
Mega Edit (TM) is $35.50 in U.S. Dollars, PLUS a shipping and handling 
fee, (see table below).  

For your convenience, you may order/register using your credit card
24 hours a day by Telephone, FAX, or Electronic Mail.  We accept
Master Card, Visa, Discover, American Express, JCB Cards, Carte Blanche,
and Diners Club.

        Telephone:  (415) 752-2477   (If no one answers, please
                                      leave your order on our VOICE mail)
        FAX         (415) 752-8971

        Electronic Mail:  CompuServe:      76130,1463
                          Usenet/Internet: megaedit @ witchcraft.com

If not registering by mail, please include essentially all of the 
information that is on the registration form (REG_FORM.TXT).  If 
registering by VOICE mail, please speak clearly and repeat all of the 
important information - your name, address, credit card information, 
and media on which to send you your copy of Mega Edit (TM).

You may of course register by REGULAR MAIL and use either Check, Money
Order, or Credit Card to pay.  Please make all Checks or Money orders
payable to COMPUTER WITCHCRAFT, INC. in U.S. dollar denominated drafts
drawn on a U.S. bank.  The cost to us for non-U.S. checks is prohibitive.
Our address is:
                        Computer Witchcraft, Inc.             
                        Post Office Box 210441
                        San Francisco, CA, 94121-0441
                        U.S.A

Please send the TOTAL that includes the appropriate shipping and 
handling fee from the following table:
               
        Country         Registration   Shipping/handling      TOTAL
        -------------   ------------   -----------------      -----
        Unites States      $35.50            $3.50           $39.00
        Canada & Mexico     35.50             5.00            40.50
        Other countries     35.50             9.00            44.50

If REGISTERING BY MAIL, please enclose the registration form
included with the Mega Edit (TM) distribution (REG_FORM.TXT).
  
NOTE: If for some reason you cannot print the registration form
(perhaps you don't have a printer!), it's fine just to send a
note with the registration information along with your check, money 
order, or credit card information. 
 
PLEASE ALLOW UP TO FOUR WEEKS FOR DELIVERY. (We will try to do
better than that). 
 
------------------------------------------------------------------------------------------------------------------------------ 
 
THANKS FOR REGISTERING MEGA EDIT (TM).  STAY IN TOUCH!                                      


```
{% endraw %}

## RELEASE.TXT

{% raw %}
```



                          M E G A   E D I T (TM)

                              Version 2.07

                        Copyright ⌐, 1991, 1992 by

                        Computer Witchcraft, Inc.
                        Post Office Box 210441
                        San Francisco, CA, 94121-0441

                        Telephone: (415)-752-2477
                        Fax:       (415)-752-8971
                        CompuServe Mail: 76130,1463  (Feedback welcome!)
                        Internet Mail:   megaedit@witchcraft.com

                            ALL RIGHTS RESERVED
                               (RELEASE.TXT)

    
                              VERSION HISTORY
(Version 2.02 - 2.07)
November 11, 92
  Made creation of .BAK files optional with checkoff item
  on Options/Preference dialog.

  Changed location of storage of Mega Edit data files from
    \windows\system to Mega Edit install directory.

  Added support for 3.1 Cut/Copy/Paste accelerator keys.
  (Ctrl+x,c,v)

  Fixed several bugs related to word wrap.

  Added support for double-clicking word in text with mouse to
    select it.

  Fixed bug that crept into 2.02 that caused BackSpace to delete two 
    characters instead of one if cursor positioned at col 2 of any line.

  Minor optimizations and enhancements, memory i/o.

(Version 2.01)
June 16, 1992

  1.  Fixed bug that caused a GP fault when user hits Ctl+END when
on first line of a new document. 

  2.  Fixes to operation of Backspace and Tab keys to work properly
with selected text.  Formerly, hitting these keys would cause the
selected text to be unselected, and then the key would operate
normally.  Now, Backspace will clear the selected text, and Tab will
clear the selected text and then insert a tab at the location of the
cursor.

  3.  Added support for pasting over selected text.

  4.  Added common dialog boxes, to stay in step with interface
requirements for version 3.1 of MS Windows.  The COMMDLG.DLL file
is included in the distribution for backward compatibility with
version 3.0.  User's who have upgraded to version 3.1 may delete
this file.

  5.  Moved the print menu command to the file menu.  This seems
more intuitive to many users, who are used to its position there
from other applications. 

  6.  Eliminated right-justification of the help menu.

  7.  Fixed bug that did not allow Mega Edit to read read-only files.

  8.  Added support for automatic updating for registered users from
shareware versions of Mega Edit greater than version 2.0.

  9.  Modified behavior of initial screen sizing of program on start-
up to be more in line with user suggestions.
 
(Version 1.14) 
June 5, 1992
  
  Fixed bugs related to use of DEL key.

  1. If user highlighted text block and hit DEL, block would
be deleted and additionally the character immediately right of
the caret would also be deleted.  Changed so that only 
the selected block is deleted.

  2. When in word-wrap mode, if user highlighted text block, 
then either hit DEL, or selected 'Cut' or 'Clear' from the 
edit menu, then hit delete again to remove a blank line, 
editor would mistakenly delete existing text of entire line 
on third DEL operation.  Fixed so that on third DEL operation
only character to the right of the cursor is deleted.

  3. Made opening behavior change so that Mega Edit's main window
has an intelligent position on the monitor, and ample size for
editing. 

(Version 1.13c)

May 31, 1992
------------

  1. Fixed bug introduced in v1.13b that failed to release memory 
and fix file menu when user closes a 'binary' file.

(Version 1.13b)

May 29, 1992
------------

  1. Fixed bug introduced in version 1.13 that caused problems when
backspace was pressed after placing caret with mouse.

  2. Fixed bug with File/Save All that could rename the wrong file
when a file named noname is saved.

  3. Fixed bug where modified binary files would trigger request to
save when closing file or closing app. 

  4. Added support for task-threaded file write and read operations,
and also for cut and paste operations.  (Other applications can
operate). 

(Version 1.13)

May 15, 1992    
------------
  1. Fixed a bug related to pressing the delete key at the last
character position in the file.

  2. Added support for typing over selected text, and for hitting
the delete key to clear selected text.

  3. Fixed bug that occasionally concatenated Unix format file
lines on load.

  4. Fixed bug where search text in dialog box was sometimes
initialized incorrectly.

(Version 1.12b)

April 13, 1992  
 --------------
  1. This release of Mega Edit (TM) fixes a bug that made the help
file, MEGAEDIT.HLP, inaccessible under Windows version 3.0 when the
user changed the current working directory by operating the file
dialog box to open or save files in directories other than the Mega
Edit (TM) start-up directory. 

(Version 1.12)

April 9, 1992
--------------
Initial release.




```
{% endraw %}

## VENDOR.TXT

{% raw %}
```



                          M E G A   E D I T (TM)

                              Version 2.07

                        Copyright ⌐, 1991, 1992 by

                        Computer Witchcraft, Inc.
                        Post Office Box 210441
                        San Francisco, CA, 94121-0441

                        Telephone: (415)-752-2477
                        Fax:       (415)-752-8971
                        CompuServe Mail: 76130,1463  (Feedback welcome!)
                        Internet Mail:   megaedit@witchcraft.com

                            ALL RIGHTS RESERVED



                              (VENDOR.TXT)

    Computer Witchcraft Inc., encourages persons interested in
    distributing Mega Edit (TM) for profit to contact us to make contractual
    arrangements with us to do so.

                  Mega Edit (TM) DISTRIBUTION LICENSING AGREEMENT

    Anyone wishing to charge people a fee for giving them a copy of Mega
    Edit (TM) must have the written authorization of the author, without 
    which, the distributor is guilty of copyright violation.  To receive such
    authorization, send this completed application, along with a copy of
    your software library's order form to:   
    
                        Computer Witchcraft, Inc.             
                        Post Office Box 210441
                        San Francisco, CA, 94121-0441

    Include $5 to cover the cost of processing the application and
    of sending you the latest version of Mega Edit (TM).  

         Name of Organization: ____________________________________
         Your Name: _______________________________________________
         Address:   _______________________________________________
                    _______________________________________________
         Telephone:  ______________________________________________

         TERMS OF DISTRIBUTION OF Mega Edit (TM):

         1. The fee charged must be negotiated with the author.

         2. Your library's catalog or listing must state that this
            program is not free, but is copyrighted software that is
            provided to allow the user to evaluate it before paying.

         3. The offering and sale of Mega Edit (TM) will be stopped at any
            time the author so requests.

         4. Copies must be made from the copy of Mega Edit (TM) sent to you
            with this agreement. This is required for control purposes.

         5. Problems or complaints about the program will be reported to
            the author for investigation.

         In return for a license to charge a fee for the distribution of
         the program Mega Edit (TM), I agree to comply with the above terms 
         of distribution.

         Signed,

         ______________________________________    ______________
                  your signature                        date

         __________________________   _________    ______________
          Computer Witchcraft, Inc     control #        date

---------------------------------------------------------------------------
      SUGGESTED PRODUCT "BLURB":
      -------------------------
Title:    Mega Edit ASCII File Editor/Windows 3.x

Keywords: EDITOR, WINDOWS, MACINTOSH, UNIX, TEXT, BINARY

Product Description:

 Mega Edit (TM): "A fine, fine product, The QEdit of Windows" 
                  PUBLIC BRAND (4 Stars! & Tech Excellence Trophy)

      POWERFUL - NO LIMITS on file sizes.  Split screen editing of 
      one or multiple files.  Variable, Sizable! text fonts.  
      Formatted display of binary files.  IMPORT/EXPORT of UNIX
      Macintosh, and DOS text formats.  Word-wrap. On-line Help.
      All other standard features.  

      FULL WORKING VERSION (Windows Std/Enh mode required)
         Version 2.07  (Shareware)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3365

     Volume in drive A has no label
     Directory of A:\

    MEGAEDIT HLP     48234  11-26-92   7:04a
    MEGAED   DLL      3072   7-28-92   9:51a
    COMMDLG  DLL     89248   7-28-92   9:51a
    REG_FORM TXT      2501  11-24-92   1:46p
    REGISTER TXT      6130  11-24-92   1:46p
    VENDOR   TXT      3910  11-24-92   1:46p
    README   TXT      5919  11-24-92   1:45p
    MEGAEDIT EXE    145920  11-24-92   1:36p
    READ1ST  TXT      6751  11-24-92   1:45p
    RELEASE  TXT      5111  11-24-92   1:45p
    GO       BAT        37   2-24-93   9:45a
    SHOW     EXE      2040   9-12-88  10:48a
           12 file(s)     318873 bytes
                           38912 bytes free
