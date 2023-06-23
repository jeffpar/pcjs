---
layout: page
title: "PC-SIG Diskette Library (Disk #3125)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3125/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3125"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```

             Money Smith V2.0 for Windows
       Home/Small Business Accounting System 
       Program, Documentation, and Examples
      Copyright 1991-1992 by Bradley J. Smith
		All Rights Reserved
   Member of Association of Shareware Professionals

Release Notes: Version 2.0 (Windows 3.1 compatible!)
Requires: Windows 3.0 or 3.1 running standard or enhanced mode,
  hard disk & Mouse.

Files in this release:
 setup.exe     - Installation program - run this to install
 setup.inf     - Setup information file
 smith.exe     - Money Smith executable
 smith.hlp     - Money Smith Help File (Windows format)
 smith.wri     - Users Manual - use Windows Write to view/print
 mscalc.exe    - Money Smith calculator
 mscalc.hlp    - Help file for calculator
 mscalc.wri    - User's manual for calculator
 vendor.txt    - Sample review and distribution rules 
 readme.txt    - This file
 register.txt  - Registration/licensing form.
 home.act      - Homeowner accounts template
 renter.act    - Renter accounts template
 business.act  - Business accounts template
 smitharc.exe  - Self extracting archive of above files

 smith2.zip    - Zipped version of above files (bulletin boards)

Release Policy:
 The shareware version of Money Smith can be freely distributed
 as long as you abide by the terms of the license and don't 
 charge a fee or otherwise profit from distribution.  See 
 vendor.txt or the license for sample reviews and for-profit
 distribution terms.

Printing this file: (Approx 6 pages)
  Use the notepad to view/print this file or just use the DOS
  PRINT command as in:
    c:>  print readme.txt

Looking at the manual:
  Use the windows program manager to bring up the Write
  Application that comes with windows 3.0.  It is usually under
  the 'Applications' program group.  Use the File Open command
  in Write to open the file SMITH.WRI.  Use the File Print
  command in to print it.  The calculator user's manual is in
  the file MSCALC.WRI.  You may prefer to set the font for the
  manuals to a printer font before printing them.

Installation using the setup program:
  If you are loading Money Smith from a floppy disk you should
  have a file called "setup.exe" on it.  Run this command 
  Choose the File Run command from the menu of your program 
  manager and type in 'a:\setup' or 'b:\setup' to run the Money
  Smith setup program from your drive.  Alternately you can
  double click on the file from the Windows program manager.
  Setup will fully install Money Smith including installation
  in the program manager.  If you have trouble running setup 
  consult the manual instructions below.

From the shareware source: 
 Odds are pretty good you downloaded this from a bulletin board
 or copied it from a friend.  Odds are equally good the program
 is compacted in some way.  Create a new directory for Money
 Smith on your hard disk and copy the archived version to this
 new directory.  The most popular file compaction programs 
 follow: 

 Self Extracting Archive example: smith2.exe - you need to run 
	smith.exe 
 PKZIP format: example: smith2.zip - you need to run  
	pkunzip smith2.zip 
 PKARC format: example smith2.arc - you need to run 
	pkunpak smith2.arc 
 LHARC format: example smith2.lzh - you need to run 
	lharc x smith2.lzh 
 
 You can get all three of these shareware unpacking programs
 from your nearest bulletin board or a local users group.  
 Other packing programs are popular, so ask the person you 
 got the program from. Once unpacked you can use the setup.exe
 program to setup Money Smith. See the instructions above.

Manual Installation:
 You can manually install Money Smith if setup fails to do so
 or if you simply prefer manual installation.  Setup sometimes
 will fail to unpack the self extracting archive SMITHARC.EXE 
 if enough memory is not available in in a MSDOS window from 
 Windows.  This usually occurs only on computers with 2MB or
 fewer.  Comments are marked with * and should not be typed in.
 Type the commands that are in ALL CAPS at the C> MSDOS prompt.

If you have not run setup:
 *  1. Create a destination directory on your hard disk of
 *     your choice
 MKDIR C:\SMITH2
 *  2. Copy the files from your disk to the new directory
 COPY  A:*.* C:\SMITH2
 *  3. Change to the new directory
 CD  \SMITH2
 *  4. Manually run the self extracting archive if present
 SMITHARC.EXE
 *  5. Install Money Smith in the Windows Program Manager
 *     using the File New command as described in your Windows
 //    manual.  You need to add the executables SMITH.EXE and
 //    MSCALC.EXE to your program manager groups.

If you have run Setup and it failed:
 Assuming Setup has already created the directory and copied 
 the files for you - all you need to do is go through steps 
 3-5 above.  (Change to the directory, run SMITHARC, and add
 the files SMITH.EXE and MSCALC.EXE to your program manager.

Licensing:
  The license terms are online accessible from the Help menu
  of Money Smith. They are listed at the end of the smith.wri
  documentation file. Money Smith is shareware and not free.
  You have 30 days to try it. The shareware version is 
  provided completely AS IS with no warranty either express or
  implied.  You take the risk for using it.  If you are a 
  registered user you get mail support for 90 days.

Licensing Screen:
  When you start Money Smith for the first time a licensing 
  screen will pop up asking you to read the license and type
  in your name.  Please read the license, type your name in,
  and press the 'I Agree' button.  The 'I Agree' button will
  not be enabled until you type your name in.  You only need
  to go through this process once.

Registration:
  You are granted a 30 day trial license to decide if Money
  Smith is for you.  After that period you are expected to
  register Money Smith to continue using it.  Registration 
  costs $29.95 + $4 shipping & handling.  You can print the 
  register.txt file to register or order toll free using the
  number below. Discounts for group (MAIL ONLY) orders, site
  licenses, etc.. are listed in the register.txt file.  Please
  note: discounts and site licenses are only available via mail
  directly from Money Smith Systems using the register.txt 
  file.  You cannot get quantity discounts or site licenses by
  phone or from Foreign registraion agents! 

Phone Ordering Service:  1-800-242-4775 ASK FOR PRODUCT #10441
 To make it easy to register we have arranged for the Public
 (software) Library (PsL) to take orders via Mastercard, 
 American Express, Visa, or Discover.
  
 You can call 1-800-242-4775 or (713) 524-6394 or FAX to 
 (713) 524-6398 or order via Compuserve at 71355,470, or via 
 mail (no group discounts/site licenses) at PsL, P.O. Box 35705,
 Houston, TX 77235-5705.  These numbers are for ORDERING ONLY.
 PsL will not provide technical support, site licenses, 
 discounts, handle returns, or give you any technical 
 information. They only take orders!  Contact Money Smith 
 systems at P.O. Box 333, Converse TX 78109 if you want to
 order in quantity or do anything but order.

Second Phone Ordering Service: 1-800-444-5457 Prod #V303
 We have an arrangement with Software Excitement! to take 
 registrations as well.  You can call them toll free at the 
 number above or FAX: 503-826-8090 or for foreign orders call
 503-826-8082.  Mail address is Software Excitement, 
 6475 Crater Lake Hwy. , Central Point, OR 97502.

Compuserve Electronic Mall: 
 Order your copy via compuserve mall:  type: GO SE

Direct International Registration: 
 (Price is US $29.95 + $6 Shipping)
 Credit card orders can be made at the voice or FAX phone
 number above. For mail orders, Checks/Money Orders should be
 in US dollars drawn on US banks. Many post offices offer 
 International Money orders which are also acceptable. 

Eurosoft Registration Service: In Foreign Currency!
 For convinience of European users we have signed with Eurosoft
 Registration Service. Mail orders can be made in foreign 
 currency to the following:

United Kingdom and Scandinavia: Mail 19.97 Pounds Sterling To:
 Hillfoots Data Services
 Mains House
 Tillcoultry
 Clackmannanshire
 FK13 6PQ,  UK

Remainder of Europe: Mail DM 59,92 or equivalent To:
 Abegglen, Heinz
 0367-206054-50
 Credit Suisse
 CH-3800 Interlaken
 Switzerland
 (Currencies are OK)

Other Services:
 The following groups offer currency conversion services to aid 
 in international registrations.  Terms vary, but these services
 generally charge a small fee to take your order in local
 currency and write a check in US dollars drawn on a US bank
 to us.  I have no affiliation with any of these services, but
 rather offer their addresses as a convinience here.

UK: PC Independent User Group
    87 Higland St, TONBRIDGE, Kent TN9 1RX, ENGLAND   
    Phone: 0732 771512
    International: +44 732 771512  or Fax +44 732 771513

Australia: BrightsPark Computers
    P.O. Box 253, Morley, WA 6062
    Phone: (09)375-1178 or 018 917-877; FAX (09) 375-1668
    Accepts Visa, Mastercard, AMEX, Diners Club, Bankcard

Benefits of Registration:
 - A disk (720k or 360k) including the latest version of 
     Money Smith.
 - A printed manual (112 pages professionally bound).
 - A 90 day limited warranty with mail support. 
    (see license for details).
 - All of the annoying reminder dialogs are removed.
 - Notification and discounts on later versions.

Money Smith Version 2.0 Features:
 - A complete double entry accounting system with arbitrary 
     accounting dates.  You can look at just the data you're
     interested in.
 - A complete financial calculator.
 - A graphical toolbar with the most frequent functions on it.
 - A new completely interactive graphical interface including
     fully interactive reports and graphs.
 - Powerful automatic  and memorized transactions.
 - A full suite of Reports and Graphs that change as you update
     data.  Naturally you can print them as well.
 - Investment support for stocks, mutual funds and securities.
 - Press and point help - just press the '?' button on the
    toolbar or the Shift+F1 keys then press the selection you
    want help on. Complete online and printed documentation.
 - Easy exporting of graphs and reports to spreadsheets and word
    processing programs.
 - International currency and date support using windows control
    panel international options.
 - Right mouse button popup menus.
 - Smart entry fields that let you do simple math right in the
    field.
 - Improved printer support including fonts and margins.
 - Check or transaction style entry.
 - Completely Windows 3.1 compatible.

The latest fixes are always on Compuserve in the IBMAPP forum.

ASP Ombudsman Statement 
 "Bradley J. Smith is a member of the Association of Shareware 
 Professionals (ASP).  ASP wants to  make sure that the shareware 
 principle works for you. If you are  unable to resolve a 
 shareware-related problem with an ASP member by contacting the
 member directly, ASP may be able  to help.  The ASP Ombudsman
 can help you resolve a dispute or problem with an ASP member,
 but does not provide  technical support for members' products.
 Please write to the ASP Ombudsman at 545 Grover  Road, Muskegon,
 MI 49442 or send a CompuServe message via CompuServe Mail to
 ASP Ombudsman 70007,3536." 

Reaching Me:
  You can reach me at the registration address or write to me
  on the services below.  Your comments and questions are
  always welcome. Registered  users - PLEASE include your
  registration number with your letter or message.  Online
  services will get you the quickest answer!

  Money Smith Systems
  P.O. Box 333
  Converse, TX 78109

  Prodigy: VTDW36A
  Compuserve: 70324,1077
  Internet: 70324.1077@compuserve.com

Have fun using Money Smith!!!
  
Bradley J. Smith
Author and President, Money Smith Systems
Association of Shareware Professionals Member
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3125

     Volume in drive A has no label
     Directory of A:\

    SMITHARC EXE    305210   6-28-92  10:54p
    SETUP    EXE     23722   6-28-92  10:54p
    SETUP    INF       593   6-28-92  10:54p
    README   TXT     12176   6-28-92  10:54p
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        17   1-13-92   3:24a
            6 file(s)     343758 bytes
                           15360 bytes free
