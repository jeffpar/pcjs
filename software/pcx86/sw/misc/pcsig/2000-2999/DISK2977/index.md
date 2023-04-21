---
layout: page
title: "PC-SIG Diskette Library (Disk #2977)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2977/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2977"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CWCLIP.DOC

{% raw %}
```

Crossword Clipper for Windows
-----------------------------

Crossword Clipper is a Microsoft Windows Clipboard utility, and a
companion application to Crossword Creator and Crossword Publisher. 
It is not an "editor" like Crossword Creator; it is a customizeable
"viewer" and layout tool.

CWCLIP's singular purpose is to place a WYSIWYG image of your puzzle
into the Clipboard, so you can "paste" it into another Windows
application.  Crossword Clipper is not a complex application, and its
operation should be immediately familiar to any Windows user.


Product Support
---------------

PC HELP-LINE
35250 Silver Leaf Circle
Yucaipa, CA  92399
United States

Sales/Technical Support Hours

M-F  6pm - 10pm, Pacific time
S-S  10am - 2pm, Pacific time

Telephone:  714-797-3091
Compuserve: 72357,3523

PC HELP-LINE is a member of the Association of Shareware Professionals
(ASP).  ASP wants to make sure that the shareware principle works for
you.  If you are unable to resolve a shareware-related problem with an
ASP member by contacting the member directly, ASP may be able to help.

The ASP Ombudsman can help you resolve a dispute or problem with an
ASP member, but does not provide technical support for members'
products.  Please write to the ASP Ombudsman at 545 Grover Road,
Muskegon, MI 49442 or send a Compuserve message via easyplex to ASP
Ombudsman 70007,3536.


Crossword Clipper, Copyright PC HELP-LINE, 1992
System Requirements
-------------------

-  IBM PC or compatible computer, 80286 processor or higher
-  Microsoft Windows 3.0, standard or enhanced mode
-  Crossword Creator 5.0 required for puzzle design


Setup
-----

1.   Copy the VBRUN100.DLL library file from the CROSSWORD CLIPPER
     DISK into your main Windows subdirectory, usually \WIN.  This
     library file must be present before you can run CWCLIP. 

2.   Copy CWCLIP.EXE from the CROSSWORD CLIPPER DISK to a subdirectory
     on your hard disk.  CWCLIP requires Microsoft Windows 3.0
     "standard" mode or "enhanced" mode.  Run it as you would any
     other Windows application.

3.   If you are going to add CWCLIP to one of your Program Manager
     groups, you may want to add Crossword Creator as well.  A Windows
     icon, CWC.ICO, has been provided on the CROSSWORD CLIPPER DISK.


Tips and Hints
--------------

1.   Don't try to run CWCLIP from the distribution floppy disk. If you
     do, Windows may load VBRUN100.DLL from the floppy, too, and
     CWCLIP will run very s--l--o--w--l--y. 

2.   CWCLIP will only read XWP-formatted puzzle files.  You can create
     .XWP files with Crossword Creator's "Export" tool.

3.   To change the size of the puzzle boxes, simply resize CWCLIP's
     window -- the puzzle will be redrawn to fill the new window
     dimensions.  Note, however, that resizing the window does not
     alter the font size you've selected.  It is up to you to select
     an appropriate font for the new box size. 

4.   Avoid resizing the puzzle grid once you've pasted it into another
     application.  Since you are now manipulating a bitmap graphic,
     rather than specific fonts and lines, resizing the image will
     distort its clarity.  Instead, go back to CWCLIP.  Resize the
     grid, clip it again, then re-paste the new image into your target
     application. 

5.   Some Windows applications, Pagemaker, for example, allow you to
     choose the resolution at which graphics are displayed.  Since
     CWCLIP creates relatively high-resolution bitmaps, you may only
     see a "rough" image on the screen if you've selected a
     low-resolution graphics display.  The resolution of the display,
     however, should have no effect on printed output.

```
{% endraw %}

## FILE2977.TXT

{% raw %}
```
Disk No: 2977                                                           
Disk Title: Crossword Clipper                                           
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Crossword Clipper for Windows                            
Author Version: 1.0                                                     
Author Registration: $50.00                                             
Special Requirements: Microsoft Windows 3.0                             
                                                                        
This is a companion program to the Crossword Creator program also by PC 
Help-Line.  It's a Windows utility that lets you capture an image of a  
puzzle created in Crossword Creator and paste it in any Windows program 
through the use of the Windows clipboard.  It's a work-around that makes
Crossword Creator Window's compatible.                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```

Crossword Clipper for Windows, Version 1.0
------------------------------------------

The following files should be present on your disk:

Crossword Clipper SHAREWARE disk
--------------------------------
README.DOC   - this file
REGISTER.DOC - registration forms/instructions
CWCLIP.DOC   - Crossword Clipper documentation
CWCLIP.EXE   - the Crossword Clipper program
VBRUN100.DLL - Visual BASIC runtime library
CWC.ICO      - Windows icon for Crossword Creator
*.XWP        - sample puzzle files


Setup
-----

1. Copy the VBRUN100.DLL library file from the distribution
   disk into your main Windows subdirectory, usually \WIN.  This
   library file must be present before you can run CWCLIP. 

2. Copy CWCLIP.EXE from the distribution disk to a subdirectory
   on your hard disk.  CWCLIP requires Microsoft Windows 3.0
   "standard" mode or "enhanced" mode.  Run it as you would any
   other Windows application.


To print Crossword Clipper's documentation, copy the CWCLIP.DOC
file to your printer.

   Example:   COPY CWCLIP.DOC PRN

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

=============================================================
               PC HELP-LINE REGISTRATION CARD
=============================================================

Date: ___________   PCHL Registration Number: _______________
                                              (upgrades only)

Name:        ________________________________________________


Address:     ________________________________________________


             ________________________________________________


City/St/Zip: ________________________________________________


Country:     ________________________________________________


Phone:       (day)_________________  (night)_________________

Disk Format: 5.25" floppy ______    3.5" micro-floppy _______


Occupation: _________________________________________________


Acquired the software from: _________________________________



Briefly describe your computer/printer configuration:


_____________________________________________________________


_____________________________________________________________


_____________________________________________________________



Comments / Bugs / Wish lists:


_____________________________________________________________


_____________________________________________________________


_____________________________________________________________

==========================================================================
                                ORDER FORM                            
==========================================================================

Crossword Creator 5.0: ----------------------------> $50.00
                                                               ___________
   Includes: - Crossword Creator program (English)
             - WFMAKE utility (make custom WORDFIND databases)
             - Crossword Creator Cookbook (tutorial and reference, NEW!)

             - Crossword Clipper for Windows (NEW!)
                  > WYSIWYG crossword layout/publishing tool
                  > Selectable fonts and grid sizes        
                  > Copy to Clipboard, paste into other Windows apps
                  > Create Windows .BMP files (bitmap graphics)

             - Free, lifetime technical support


WORDFIND database (English) -----------------------> $15.00    ___________

   - Use with Crossword Creator's WORDFIND tool.
   - 110,000+ words


Additional language support for Crossword Creator:

   Spanish (includes WORDFIND database) -----------> $15.00    ___________

   French  (includes WORDFIND database) -----------> $15.00    ___________


Crossword Publisher 1.3 (Postscript utility): -----> $30.00    ___________
   by Longridge Software

   Features: - Generates Encapsulated Postscript (EPS) files
             - Shadowing, shading, other special effects
             - Requires Crossword Creator 5.0
             - Requires Postscript-compatible printer
             - Runs from batch files or command line
             - Printable documentation provided on disk


Overseas postage: --------------------------------->  $3.00    ___________
   (outside of North America)

Shipping/Handling, all orders: -------------------->               $5.00  
                                                               -----------  

                                                       Total:
                                                               ===========
Return the above REGISTRATION CARD and
this ORDER FORM with your payment to:

                            PC HELP-LINE
                            35250 Silver Leaf Circle
                            Yucaipa, CA 92399
                            United States

==========================================================================
                             PAYMENT OPTIONS                          
==========================================================================
1. Personal or corporate checks drawn on a U.S. bank are the preferred
   method of payment.  Purchase Orders are also welcome.

2. PC HELP-LINE cannot accept charge card payments.

3. If you are registering from a country other than the U.S., please
   DO NOT send checks drawn on non-U.S. banks.  Use a cashier's check
   or international money order valued in "U.S. DOLLARS".

   PCHL recognizes that the purchase of an international money order
   or other negotiable instrument may be expensive.  To equalize the
   cost of foreign registration, you may subtract your bank charges
   from the registration fee.  In other words, don't let your total 
   "out-of-pocket" costs exceed what a U.S. registrant would pay.


==========================================================================
                                SHIPPING
==========================================================================
All orders are shipped within 1 week after receipt, via First Class
mail.  Overseas orders are customs-tagged and shipped Air Mail.

If you have a special need or an urgent deadline, please call us to make
arrangements -- we'll be glad to help.  If you're willing to incur the
additional postage, we can ship via next-day courier.


==========================================================================
                       DISCOUNTS AND SITE LICENSES                          
==========================================================================
PC HELP-LINE offers volume discounts and customizable site licenses on
all of its products:

   Discounts
   ---------
   First 10 units, no discount
   Next 20 units, 40% discount
   Additional units, 70% discount


   Site Licenses
   -------------
   PCHL provides 2 master disk sets, 2 bound manuals, 1 loose-leaf manual.
   You provide all disk and documentation duplication as needed.
   You are licensed for unlimited use in the workplace.
   Employees or students may purchase copies for personal use at 40% discount.
   
   Site license fees range from $500-$2000, depending on the number of users.
   Licenses are renewable at 40% of the original contract, whenever a new
      software version is released.

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Crossword Clipper for Windows, Version 1.0
------------------------------------------

SHORT: Crossword puzzle layout/publishing tool

LONG:  Crossword Clipper is a WYSIWIG crossword puzzle layout tool
       for Windows-based desktop publishing.  Resize the grid,
       select fonts, etc.  Requires a companion program,
       Crossword Creator, for puzzle design.

VENDORS: I prefer that you do not distribute the files on this disk
         in an archived format, but if you must, please provide
         "unarchiving" instructions for the end-user. 

TARGET AUDIENCE: 95% of my registrants are teachers or trainers;
                 the rest are newsletter publishers, gamers, and
                 professional puzzle designers.

BEST CATALOG CATEGORIES: Desktop publishing, games

IMPORTANT!: As mentioned in the LONG description above, Crossword Clipper
            requires my other program, Crossword Creator.  Please make
            sure this fact makes it into your catalog description.  Your
            customers will appreciate it, and you'll sell two disks
            instead of one.


Features
--------
- Full WYSIWIG control of grid size, fonts, and display attributes.
- Familiar Windows user-interface.
- Works with the Windows Clipboard for pasting into other applications.
- Creates Windows bitmap (.BMP) graphic files.
- Not copy-protected.

Requirements
------------ 
- IBM AT (80286) or compatible computer.
- Windows 3.0 or higher (standard or enhanced mode)

Registration
------------
Crossword Clipper: $50; includes Crossword Creator
                        and printed manual


PC HELP-LINE  -  Member of the Association of Shareware Professionals (ASP)
------------
35250 Silver Leaf Circle
Yucaipa, CA  92399
United States
714-797-3091
CIS: 72357,3523

Author: Brad Kaenel

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2977

     Volume in drive A has no label
     Directory of A:\

    VENDOR   DOC      1862   1-28-92  12:51a
    README   DOC      1080   2-01-92  10:00p
    REGISTER DOC      6275   2-01-92  10:00p
    CWCLIP   DOC      3799   2-01-92  10:00p
    CWCLIP   EXE     46248   2-01-92  10:00p
    VBRUN100 DLL    271264   5-10-91   1:00a
    CWC      ICO       766   2-01-92  10:00p
    MOVIES   XWP      3090   2-01-92  10:00p
    PRES     XWP      3141   2-01-92  10:00p
    GO       BAT        38   1-31-91  12:58a
    FILE2977 TXT      1481   4-24-92   1:12p
    GO       TXT      1001   4-24-92   2:19p
           12 file(s)     340045 bytes
                           15360 bytes free
