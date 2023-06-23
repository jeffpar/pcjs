---
layout: page
title: "PC-SIG Diskette Library (Disk #3224)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3224/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3224"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## CLMREAD.TXT

{% raw %}
```
*** CLMREAD.TXT ***
Installation and release notes for
ClipMate (TM) for Windows v1.52 (8/9/92)
Initial Release on 12/23/91

Notice:
  Thornton Software Solutions is owned and operated by Chris Thornton,
  author and copyright owner of ClipMate(TM) for Windows.  

Upgrading from a previous version? 
  If you're running a previous version of ClipMate,
  you should shut it down before installing.
  
  If you decide to keep both versions on the same system,
  keep in mind that data files created with version 1.5 can't
  be read by earlier versions.

  See What's New in the on-line help.


***************************************
* Notice to Compuserve Users:         *
*  On-Line registration is available. *
*  See HELP for details!              *
***************************************

Product Description:
--------------------
ClipMate remembers all text items that appear on the Clipboard.  You 
can retrieve, edit, and append clipboard data, with the aid of functions
such as Word Find, Magnify, Auto-Glue, Re-Flow Paragraph, and Print. 
ClipMate saves the data to disk between sessions, and features both 
short and long-term storage.  Easy-to-use Toolbar, and Windows Help. 
** New update features Print, Auto-Glue **  
Shareware $25 U.S. ASP Author. 


Inventory:
----------
CLIPMATE.EXE    The executable program - requires Windows 3.x
CLIPMATE.HLP    Help file.
CLMICONS.DLL    Dynamic Link Libary to support the iconbar.
CLMREAD.TXT     README file with installation notes.
CLMREG.TXT      Registration form.
VENDOR.DOC      Vendor Description for Shareware vendor or BBS Sysops.
FILE_ID.DIZ     BBS Standard Description File
NOTE:           The OMBUDSMN statement can be found in the on-line help.
                For that reason, it is not duplicated on its own file.

Optional Files: Archives, containing all above files.
                May or may not be present, depending upon where you obtained
                ClipMate.
---------------
CLIPMT.ZIP or   ZIP file containing all of above files.  May or may not
  CLIPMT15.ZIP    be present, depending upon where you got ClipMate from.
CLIPMT15.EXE    Self-Extracting archive, often used instead of .ZIP file.

OBSOLETE FILE:  CLMVEND.DOC - Old version of VENDOR.DOC.  Name changed
                to conform to standards.

Installation Notes:
-------------------
To install ClipMate, just copy all of the
Distribution Files to the directory of your
choice.  It doesn't need to be in the path, and
there are no funny environment variables to set.
For the lack of anything better, create
\windows\clipmate, and put the files there.

Create an icon in the program manager with a
Command Line that points to ClipMate.

For example:
C:\windows\clipmate\clipmate.exe

Effect on Your System:
----------------------
The first time that you run ClipMate, it will
create \windows\clipmate.ini.  WIN.INI is NOT 
altered in any way, nor are any of your other
system files.

See CLIPMATE.INI in the on-line help.

ClipMate will create and save the clipboard data
into DEFAULT.CLM, or another .CLM file that you
specify.


De-Installation Notes:
----------------------
These instructions are included in the event that you determine that
ClipMate does not meet your needs, and therefore should be removed
from your system. 

Before deleting ClipMate, you should review the contents of 
the OVERVIEW screen in the on-line help.  If you have put ClipMate through
a proper evaluation, then everything on that screen should be familiar to
you.  If this is not the case, then you may want to spend some more time 
evaluating ClipMate.  

In the event that you wish to remove ClipMate from your system, 
erase the following files:
    CLIPMATE.EXE   |ClipMate distribution files.
    CLIPMATE.HLP   |
    CLMICONS.DLL   |
    CLMREAD.TXT    |
    CLMREG.TXT     |  
    CLMVEND.DOC    |if present - from previous versions
    VENDOR.DOC     |
    FILE_ID.DIZ    |
    

    CLIPMT.ZIP     |The archive file should
    CLIPMT15.ZIP   |be one of these.
    CLIPMT15.EXE   |

    *.CLM          |{your data files}

    CLIPMATE.INI   |found in your Windows directory.

Please note that no changes were made to your WIN.INI, System.INI,
or any other Windows system files.  There are no hidden files.


System Requirements:
--------------------
Windows 3.x, running in Standard or Enhanced mode.
VGA or better display.  Monchrome vga is ok.
Mouse.

Bug Reports:
------------
Please send any bug reports, along with a description of your
system (hardware and software) to CompuServ id: 70743,2546 or
	Chris Thornton
	PO Box 26263
	Rochester, NY  14626

Known Problems:
--------------
Norton Desktop for Windows users should upgrade to Norton Desktop 
version 2.0.  

Revision History:
-----------------
v1.152 (8/9/92)
  Minor change to Magnification Window.  Sometimes it came up blank
  when opened.  This is now fixed.  The magnification window now 
  remembers its position, even if it is not re-sized.
  Documentation Change: Re-name of feature from Pro-Active Glue to 
  Auto-Glue.    

v1.15 (8/6/92)
  Major enhancements include printing, proacive "Glue Mode", fixed font
  in Magnification Window, Auto Update for editing in Magnification 
  Window, smarter Titles, smarter Wrapping in Magnification Window,
  fix for the "shutdown bug", and a fix for the "WIN31 Startup Bug".  

v1.14 (3/07/92)
  Fine tuning of 8515 fonts - used on some XGA systems.
  Included info on BONUS utilities.

v1.12 (3/02/92)
  Fix for 8514 fonts.  Window didn't size correctly when 8514 fonts
  were used in some 800x600 SVGA modes.
  ASP logo fixed to diaplay properly on monochrome screens.
  Magnification Window used to ignore manual edit changes when the
  "Wrap Text?" checkbox was clicked.  This is now fixed.

v1.11 (2/13/92)
  Documentation and screens updated to reflect author membership
  in the ASP.  I started using the (TM) thing.  CLMHYPE.TXT has
  been replaced by CLMVEND.TXT.

v1.10 (2/6/92)
  Version 1.10 adds several enhancements to the Magnification Window.
  There is also a help button in the Config Dialog.

v1.05 (1/22/92)
  Find and FindNext didn't actually put anything on the Clipboard.
  Now they do!

v1.04 (1/21/92)
  On some XGA systems, the system font was so wide that it caused the
  menu to wrap, which caused some of the controls to be hidden.  The
  wide font is now detected, and the window is sized accordingly.

v1.03 (1/07/92)
  Fixed problem with Concatenate:
  Bug in Windows causes negative values to sometimes be returned for
  MAXAVAIL, which checks to see if there is enough contiguous free
  memory to complete the concatenation.  Negative values are now ignored.

v1.02 (1/06/92)
  Fixed RunTime error 204 - occurred when editing Magnification Window,
  in the event that the user deletes the item that is being edited.

v1.01 (1/02/92)
  Minor bug fixes:
    Problem with memory allocation.
    Problem switching to an empty list - contents of other list were shown.

v1.0 (12/23/91) is the initial release
  .CLM files created with versions prior to 0.84 beta are invalid, and should
  be discarded.  You beta-testers know who you are!


```
{% endraw %}

## CLMREG.TXT

{% raw %}
```
ClipMate for Windows version 1.5 (8/6/92)
Registration Agreement for Personal Use

License Agreement:

This license gives the user the right to install and use one copy of 
ClipMate for Windows.  If the user of a registered copy of ClipMate is 
the PRIMARY USER of more than one machine (for example, one at work, 
one at home, and a laptop), a single license will cover all machines 
that are USED PRIMARILY by the registered user.  

Users of ClipMate must accept this disclaimer of warranty:  "ClipMate 
is supplied as is.  The author disclaims all warranties, expressed or 
implied, including, without limitation, the warranties of 
merchantability and of fitness for any purpose.  The author assumes no 
liability for damages, direct or consequential, which may result from 
the use of ClipMate ."

Service will be guaranteed for a period of at least 90 days of the 
date of registration.  Support will be provided by U.S. Mail, or by 
electronic mail in CompuServe.

------------------------------------------------------------
        ORDER FORM FOR CLIPMATE FOR WINDOWS V 1.52

Please print electronically, or clearly by hand.

   Name:

Address:
       :
       :

  Phone:

Compuserve:

Diskette Size (3.5" is default):


Signature:______________________________________________


Please attach a check or money order for $25.00 (U.S.)
Shipping and Handling is free in U.S. and Canada. 
(Overseas locations please add $2.00)  and mail to:
	
	Thornton Software Solutions
	PO Box 26263
	Rochester, NY  14626

Make check payable to: Chris Thornton

Please note that volume discounts, site licenses, and bundling
prices can be obtained by contacting the author directly.


--------------------------------------------------------------
USER SURVEY

While I have your attention, please answer the following survey.  This 
will help me to determine future enhancements to ClipMate, and to 
track the distribution of ClipMate.  If you need more room, just add 
more lines.  You should note that many new features that are found in 
version 1.5 are a result of feedback from registered users.  Examples
are Print capability, and re-design of the GLUE function.  This is YOUR
chance to particpate in the development process.

1) Where did you get ClipMate?  (ex: CompuServe WINADV Forum)

2) Do you ever use the Safe List?

3) Do you find the Brief View to be limiting?

4a) If it was available, would you use Graphics capability?
4b) How would you expect the GLUE function to be implemented for 
    graphic data?  

5) What are your two favorite features?
   a
   b

6) What are your two least favorite features?
   a
   b

7) Have you ever registred a Shareware Program before?
   If so, how many? (enter 0 if none)?

8) What features would you like to add to ClipMate?

9) Had you looked at previous versions of ClipMate?
   If so, what about this new release prompted you to 
   register?

10) Any general comments?


Thank you for your input!
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Vendor/BBS Information for ClipMate for Windows v1.5:
This file contains an acceptable description for catalog, library,
or BBS use, along with requirements for NON-ASP vendors.

Notice:
  Thornton Software Solutions is owned and operated by Chris Thornton,
  author and copyright owner of ClipMate(TM) for Windows.  
  Thornton Software Systems was previously (but briefly) known as
  Thunderware(tm), but has changed names, due to a conflicting trademark.
  If you have records that refer to Thunderware (in association with this
  product), please make the appropriate changes.


Here is an acceptable description for use in catalogs or on BBS:
---------------------------------------------------------------

Title   : ClipMate for Windows 1.5 - Clipboard Enhancement
Keywords: ClipMate Clipboard Windows Cut Paste Append ASP 

ClipMate remembers all text items that appear on the Clipboard.  You 
can retrieve, edit, and append clipboard data, with the aid of functions
such as Word Find, Magnify, Auto-Glue, Re-Flow Paragraph, and Print. 
ClipMate saves the data to disk between sessions, and features both 
short and long-term storage.  Easy-to-use Toolbar, and Windows Help. 
** New update features Print, Auto-Glue **  
Shareware $25 U.S. ASP Author. 


Preferred File Name is CLIPMT15.ZIP
In the case of Compuserve, which uses shorter names, CLIPMT.ZIP is used.

Note the inclusion of BONUS programs with registration.
See BONUS in the on-line help for details.

Distribution Agreement / ASP Waiver:
------------------------------------
ASP Vendor Members may freely distribute ClipMate (TM) in accordance with
established ASP guidelines.  Other vendors must adhere to the following
aggreement:


CLIPMATE DISTRIBUTION LICENSING AGREEMENT

Anyone wishing to charge people a fee for giving them a copy of ClipMate
must have the written authorization of the author, without which, the
distributor is guilty of copyright violation.  To receive such
authorization, send this completed application, along with a copy of your
software library's order form to:

Thornton Software Solutions
PO Box 26263
Rochester, NY 14626

For distributors already recognized by the Association of Shareware
Professionals, this application is not necessary.

         Name of Organization: ____________________________________
         Your Name: _______________________________________________
         Address:   _______________________________________________
                    _______________________________________________

         TERMS OF DISTRIBUTION OF CLIPMATE:

         1. The fee charged may not exceed $10, including postage,
            mailer and any other charges.
            (CD-ROM distribution can be waived of the $10 limit,
             just explain the nature of your CD to the author.)

         2. Your library's catalog or listing must state that this
            program is not free, but is copyrighted software that is
            provided to allow the user to evaluate it before paying.

         3. The offering and sale of CLIPMATE will be stopped at any
            time the author so requests.

         4. Copies must be made from the copy of CLIPMATE sent to you
            with this agreement. This is required for control purposes.

         5. Problems or complaints about the program will be reported to
            the author for investigation.

         In return for a license to charge a fee for the distribution of
         the program CLIPMATE, I agree to comply with the above terms of
         distribution.

         Signed,

         ______________________________________    ______________
                  your signature                        date

         __________________________   _________    ______________
                Chris Thornton        control #         date





```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3224

     Volume in drive A has no label
     Directory of A:\

    CLIPMT15 ZIP    104252   8-10-92  11:42a
    CDROM    TXT      3972   6-24-92   1:25p
    GO-FORM  DAT      3109   6-29-92   3:26p
    GO-STRT  DAT       541  11-05-92  11:48p
    GO       EXE     26022   1-10-92  12:14p
    PCSIG    TXT      2335   1-21-92   6:09a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    SHAREMAG TXT      1837   1-21-92   6:11a
    SIGORDER TXT      3332   6-25-92   2:28p
            9 file(s)     168928 bytes
                          149504 bytes free
