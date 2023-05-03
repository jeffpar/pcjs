---
layout: page
title: "PC-SIG Diskette Library (Disk #3091)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3091/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3091"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BONUS.TXT

{% raw %}
```
In this directory you'll find the file:

    SL-10.ZIP

It's a separate Windows application from Graphical Dynamics.  It's a 
little application that makes Windows start-up much more flexible and 
powerful for the user.

It's "BannerWare", that is, it's designed to give people an idea of 
the quality applications we believe in.  We've included it on this
distribution diskette as a convenience for you.  Enjoy SuperLoad and
feel free to pass it along to others.

Happy Windows!

Graphical Dynamics Development Team
```
{% endraw %}

## CLOK-CHG.TXT

{% raw %}
```
************************ CHANGES TO CLOCKMAN **************************

VERSION 1.1 (05/15/92)
======================
THE INFOBARS --
--> NEW!  DateBar - Displays today's date on the active window's
    caption bar.  TimeBar was so popular, we thought we'd keep it
    company!

--> IMPROVED!  Both DateBar's and TimeBar's formats are controlled by
    the International settings from the Control Panel.

--> NEW!  DateBar & TimeBar are both hotspots.  Right-click on them to
    quickly bring up the ClockMan system menu.  Left-click on them to
    go directly to the Set Alarms dialog.  You can even run ClockMan
    hidden, and yet still have full access to its dialog boxes!


MORE ALARM OPTIONS --
--> NEW!  TimeSquare message type.  Your alarm message scrolls across
    the active window's caption bar.  Choose from several scrolling
    patterns.  "It's NEAT-O!"
                                             \  /\  / /\ \  /
--> NEW (Win31)!  Audible alarms can now play \/  \/ /--\ \/  files!
    See Help: "Audible alarms/WAV files".


LAUNCHING PROGRAMS & SENDING KEYSTROKES --
--> NEW!  Send keystrokes to a DOS APP!  You can send _any_ key to a
    DOS app in a DOS box.  (It can't be iconized or full screen.)
    Read Help: "Sending Keystrokes To A DOS App".

--> NEW!  You can now put a datafile in the program line instead of
    having to specify the program name itself (if there's an associa-
    tion for it in WIN.INI).

--> NEW!  New sendkey command:  {#exitwindows}.  This lets you exit
    Windows gracefully.  You can also put an errorlevel to return to
    DOS, as in {#exitwindows 4}.  Use it to automate DOS processes that
    can't run when Windows is running!

--> IMPROVED!  More nonstandard keys have sendkey names.  If you use a
    122-key keyboard, Olivetti, or Nokia, then sending those strange
    extra keys should be much easier!

--> IMPROVED!  ClockMan is even more tenacious in sending keystrokes to
    the correct window.


INTERNATIONAL --
--> NEW!  The date formats respond completely to your WIN.INI [intl]
    settings.  Change the long and short date formats, & the dates
    change accordingly in the Set Alarms listbox, When dialog spin-
    fields, Now dialog spinfields, DateBar, and icon title.

--> NEW!  ClockMan now supports foreign names for days of the week and
    months.  Just adapt one of our "language customization" files to
    your needs!  See Help: "Power User's Secrets/Different Countries
    & Languages".


MISCELLANY --
--> NEW!  F1 context-sensitive help available from whichever dialog box
    you're in.

--> NEW!  Customize the icon's title bar.  Add date, day of week, alarm
    filename, etc.  Make it short - make it long; it's all up to you.
    See Power Users' Secrets for more details.

--> NEW!  If you want ClockMan to run hidden, you can now choose it
    directly from the Options dialog instead of having to add a
    CLOCKMAN.INI entry.

--> NEW!  If you try to start another instance of ClockMan with the
    same alarm file, you now get a File|Open dialog to choose a dif-
    ferent or a new alarm file.

--> NEW!  The Set date/time dialog now starts with focus on the minutes
    field, to make it even simpler for you to correct clock drift.

--> FIXED!  Countdown alarms no longer count down 3 times per second.

--> FIXED!  LAN users should experience fewer SHARE violations when
    running many ClockMans in (C)lient mode with the same alarm file.

--> NEW (Win31)!  You can drag & drop a ClockMan alarm file onto the
    ClockMan icon to load another instance of the program with that
    file.

--> IMPROVED!  Each field in the date & time spinfields now carry over
    to the next higher field if you spin to the end of the range. (i.e.
    spinning past March 31 bumps up the month to April.)

```
{% endraw %}

## CLOKREAD.TXT

{% raw %}
```
===========================================================
                    WELCOME TO CLOCKMAN!
===========================================================
ClockMan is the Intelligent Alarm Clock for Windows 3.0.
Now you can set reminders for yourself to occur sometime in
the future, AND you can schedule unattended operations
complete with automatic keystrokes, all in one very
powerful program!


===========================================================
                         CONTENTS
===========================================================
1. GETTING STARTED
      INSTALLING CLOCKMAN
      PACKING LIST
2. HOW TO REGISTER CLOCKMAN
3. EVALUATION AGREEMENT
4. LIMITED WARRANTY AND DISCLAIMERS


===========================================================
                      GETTING STARTED
===========================================================
INSTALLING CLOCKMAN
====================
Installing ClockMan is simple:

1) Run SETUP.EXE from within Windows.  Setup will let you
   choose the destination directory and which parts of the
   ClockMan package you wish to install (i.e. program files
   only, .HLP file, updated CLOCKMAN.INI file, etc.).

2) Run CLOCKMAN.EXE.  It comes with an alarm file already
   filled with sample alarms for you to try.

3) Choose Help from the System menu to read our comprehen-
   sive online manual.


PACKING LIST
============
Your ClockMan distribution diskette contains the following
files:

SETUP.EXE     The ClockMan setup program.
SETUP.INF     A configuration file for SETUP.EXE.
V1.1          A placeholder file that identifies the
              current version.
CLOKREAD.TXT  This file.
CLOK-CHG.TXT  A list of enhancements and bugfixes since the
              last release.
CLOCKMAN.INI  The default ClockMan .INI file.  Contains
              alarm tune definitions.
SAMPLES.ALR   A ClockMan alarm file, filled with sample
              alarms.
CLOCKMAN.DEU  German language customization file.
CLOCKMAN.FRA  French language customization file.

Other files (compressed - diskette version):
CLOCKMAN.EX$  The ClockMan program file.
CLOCKMAN.HL$  The ClockMan online manual.
JSTART.EX$    JumpStart - a handy little thank-you utility
              which will be activated once you register
              ClockMan.

Other files (uncompressed - zipped version):
CLOCKMAN.EXE  The ClockMan program file.
CLOCKMAN.HLP  The ClockMan online manual.



===========================================================
                     HOW TO REGISTER CLOCKMAN
===========================================================
ClockMan is currently being marketed as shareware.  If you
register the program you'll receive these remarkable
benefits:

  * The latest version of ClockMan.
  * A typeset, illustrated manual.
  * An end to the nag screens and opening banner.
  * Unlimited free technical support by phone.
  * A special thank-you program called JumpStart.  This
    lets you launch a program and send it keystrokes, all
    from within a Program Manager icon!
  * Deep discounts on the next major version (2.0)
  * Free upgrade to non-English versions (when available)

Registration is $49.95 (US funds) +$5.00 outside the
Western Hemisphere.   We accept VISA, MasterCard, EuroCard,
Access, money orders, checks, or purchase orders (call our
sales dept. beforehand).  Quantity pricing and LAN pricing
available.

You can print a handy order form inside Windows Help!
Select the "How To Order ClockMan" topic, then select
"Order Form", then select the File|Print Topic menu to
print the order form.

Graphical Dynamics, Inc.     1(800) 779-1799  orders only
2701 California Ave SW #301  1(206) 935-6032  orders/tech
Seattle, WA  98136           Mon-Sat,  9:00am-6:00pm PST
USA                                   (1700h -0200h GMT)
                             1(206) 935-2464  fax
                             1(206) 938-2398  BBS
                             Anytime,  Anyday


===========================================================
                       EVALUATION AGREEMENT
===========================================================
ClockMan is not and has never been public domain software,
nor is it free software.  ClockMan is copyrighted by
Graphical Dynamics, Inc.

You are granted a limited license to use ClockMan on a
30-day trial basis for the purpose of determining whether
ClockMan is suitable for your needs.  After this initial
30-day trial license expires, you must register the program
to continue using it.  The use of unlicensed copies of
ClockMan by any person, business, corporation, government
agency or any other entity is strictly prohibited.

A single user license permits a user to use ClockMan only
on a single computer at a time.

No one may modify or patch the ClockMan executable files in
any way, including but not limited to decompiling, disas-
sembling, changing the icon or string resources, or
otherwise reverse engineering the program.

A limited license is granted to copy and distribute
ClockMan only for the trial use of others, subject to the
above limitations, and also the following:

1) ClockMan must be copied in unmodified form, complete
   with the file containing this license information.

2) The full machine-readable ClockMan documentation must be
   included with each copy.

3) ClockMan may not be distributed in conjunction with any
   other product without a specific license to do so from
   Graphical Dynamics.

4) No fee, charge, or other compensation may be requested
   or accepted, except as authorized below:

   A) Operators of electronic bulletin board systems
      (sysops) may make ClockMan available for downloading
      as long as the above conditions are met.  An overall
      or time-dependent charge for the use of the bulletin
      board system is permitted as long as there is not a
      specific charge for the download of ClockMan.

   B) Vendors of user-supported or shareware software
      approved by the ASP may distribute ClockMan, subject
      to the above conditions, without specific permission.
      Non-approved vendors may distribute ClockMan only
      after obtaining written permission from Graphical
      Dynamics.  Such permission is usually granted.
      Vendors may charge a reasonable disk duplication and
      handling fee.


===========================================================
               WARRANTIES AND DISCLAIMERS
===========================================================

LIMITED WARRANTY
================
Graphical Dynamics guarantees your satisfaction with this
product for a period of 90 days from the date of original
purchase.  If you are unsatisfied with ClockMan within that
time period, return the package in saleable condition to
the place of purchase for a full refund.  Graphical
Dynamics warrants that all disks provided are free from
defects in material and workmanship, assuming normal use,
for a period of 90 days from the date of purchase.

Graphical Dynamics warrants that the program will perform
in substantial compliance with the documentation supplied
with the software product.  If a significant defect in the
product is found, you may return the product for a refund.
In no event will such a refund exceed the purchase price of
the product.

EXCEPT AS PROVIDED ABOVE, GRAPHICAL DYNAMICS DISCLAIMS ALL
WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE
PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE PURCHASER
ASSUMES THE RISK OF PAYING THE ENTIRE COST OF ALL NECESSARY
SERVICING, REPAIR, OR CORRECTION AND ANY INCIDENTAL OR CON-
SEQUENTIAL DAMAGES.  IN NO EVENT WILL GRAPHICAL DYNAMICS BE
LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING WITHOUT LIMIT-
ATION DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTER-
RUPTION, LOSS OF BUSINESS INFORMATION AND THE LIKE) ARISING
OUT OF THE USE OR THE INABILITY TO USE THIS PRODUCT EVEN IF
GRAPHICAL DYNAMICS HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.  THIS LIMITED WARRANTY GIVES YOU SPECIFIC
LEGAL RIGHTS.  YOU MAY HAVE OTHERS, WHICH VARY FROM STATE
TO STATE.

Use of this product for any period of time constitutes your
acceptance of this agreement and subjects you to its
contents.  This agreement is governed by the laws of the
State of Washington.

U.S. GOVERNMENT RESTRICTED RIGHTS
=================================
This product is provided with restricted rights.  Use,
duplication, or disclosure by the government is subject to
restrictions set forth in subdivision (c)(1)(ii) of the
Rights in Technical Data and Computer Software clause at
48 CFR 252.227-7013, or in subdivision (c)(1) and (2) of
the Commercial Computer Software--Restricted Rights clause
at 48 CFR 52.27-19, as applicable.  The contractor/
manufacturer is Graphical Dynamics, Inc., 2701 California
Ave SW, ste 301, Seattle, WA  98116.

```
{% endraw %}

## CLOK-CHG.TXT

{% raw %}
```
************************ CHANGES TO CLOCKMAN **************************

VERSION 1.1 (05/15/92)
======================
THE INFOBARS --
--> NEW!  DateBar - Displays today's date on the active window's
    caption bar.  TimeBar was so popular, we thought we'd keep it
    company!

--> IMPROVED!  Both DateBar's and TimeBar's formats are controlled by
    the International settings from the Control Panel.

--> NEW!  DateBar & TimeBar are both hotspots.  Right-click on them to
    quickly bring up the ClockMan system menu.  Left-click on them to
    go directly to the Set Alarms dialog.  You can even run ClockMan
    hidden, and yet still have full access to its dialog boxes!


MORE ALARM OPTIONS --
--> NEW!  TimeSquare message type.  Your alarm message scrolls across
    the active window's caption bar.  Choose from several scrolling
    patterns.  "It's NEAT-O!"
                                             \  /\  / /\ \  /
--> NEW (Win31)!  Audible alarms can now play \/  \/ /--\ \/  files!
    See Help: "Audible alarms/WAV files".


LAUNCHING PROGRAMS & SENDING KEYSTROKES --
--> NEW!  Send keystrokes to a DOS APP!  You can send _any_ key to a
    DOS app in a DOS box.  (It can't be iconized or full screen.)
    Read Help: "Sending Keystrokes To A DOS App".

--> NEW!  You can now put a datafile in the program line instead of
    having to specify the program name itself (if there's an associa-
    tion for it in WIN.INI).

--> NEW!  New sendkey command:  {#exitwindows}.  This lets you exit
    Windows gracefully.  You can also put an errorlevel to return to
    DOS, as in {#exitwindows 4}.  Use it to automate DOS processes that
    can't run when Windows is running!

--> IMPROVED!  More nonstandard keys have sendkey names.  If you use a
    122-key keyboard, Olivetti, or Nokia, then sending those strange
    extra keys should be much easier!

--> IMPROVED!  ClockMan is even more tenacious in sending keystrokes to
    the correct window.


INTERNATIONAL --
--> NEW!  The date formats respond completely to your WIN.INI [intl]
    settings.  Change the long and short date formats, & the dates
    change accordingly in the Set Alarms listbox, When dialog spin-
    fields, Now dialog spinfields, DateBar, and icon title.

--> NEW!  ClockMan now supports foreign names for days of the week and
    months.  Just adapt one of our "language customization" files to
    your needs!  See Help: "Power User's Secrets/Different Countries
    & Languages".


MISCELLANY --
--> NEW!  F1 context-sensitive help available from whichever dialog box
    you're in.

--> NEW!  Customize the icon's title bar.  Add date, day of week, alarm
    filename, etc.  Make it short - make it long; it's all up to you.
    See Power Users' Secrets for more details.

--> NEW!  If you want ClockMan to run hidden, you can now choose it
    directly from the Options dialog instead of having to add a
    CLOCKMAN.INI entry.

--> NEW!  If you try to start another instance of ClockMan with the
    same alarm file, you now get a File|Open dialog to choose a dif-
    ferent or a new alarm file.

--> NEW!  The Set date/time dialog now starts with focus on the minutes
    field, to make it even simpler for you to correct clock drift.

--> FIXED!  Countdown alarms no longer count down 3 times per second.

--> FIXED!  LAN users should experience fewer SHARE violations when
    running many ClockMans in (C)lient mode with the same alarm file.

--> NEW (Win31)!  You can drag & drop a ClockMan alarm file onto the
    ClockMan icon to load another instance of the program with that
    file.

--> IMPROVED!  Each field in the date & time spinfields now carry over
    to the next higher field if you spin to the end of the range. (i.e.
    spinning past March 31 bumps up the month to April.)

```
{% endraw %}

## CLOKREAD.TXT

{% raw %}
```
===========================================================
                    WELCOME TO CLOCKMAN!
===========================================================
ClockMan is the Intelligent Alarm Clock for Windows 3.0.
Now you can set reminders for yourself to occur sometime in
the future, AND you can schedule unattended operations
complete with automatic keystrokes, all in one very
powerful program!


===========================================================
                         CONTENTS
===========================================================
1. GETTING STARTED
      INSTALLING CLOCKMAN
      PACKING LIST
2. HOW TO REGISTER CLOCKMAN
3. EVALUATION AGREEMENT
4. LIMITED WARRANTY AND DISCLAIMERS


===========================================================
                      GETTING STARTED
===========================================================
INSTALLING CLOCKMAN
====================
Installing ClockMan is simple:

1) Run SETUP.EXE from within Windows.  Setup will let you
   choose the destination directory and which parts of the
   ClockMan package you wish to install (i.e. program files
   only, .HLP file, updated CLOCKMAN.INI file, etc.).

2) Run CLOCKMAN.EXE.  It comes with an alarm file already
   filled with sample alarms for you to try.

3) Choose Help from the System menu to read our comprehen-
   sive online manual.


PACKING LIST
============
Your ClockMan distribution diskette contains the following
files:

SETUP.EXE     The ClockMan setup program.
SETUP.INF     A configuration file for SETUP.EXE.
V1.1          A placeholder file that identifies the
              current version.
CLOKREAD.TXT  This file.
CLOK-CHG.TXT  A list of enhancements and bugfixes since the
              last release.
CLOCKMAN.INI  The default ClockMan .INI file.  Contains
              alarm tune definitions.
SAMPLES.ALR   A ClockMan alarm file, filled with sample
              alarms.
CLOCKMAN.DEU  German language customization file.
CLOCKMAN.FRA  French language customization file.

Other files (compressed - diskette version):
CLOCKMAN.EX$  The ClockMan program file.
CLOCKMAN.HL$  The ClockMan online manual.
JSTART.EX$    JumpStart - a handy little thank-you utility
              which will be activated once you register
              ClockMan.

Other files (uncompressed - zipped version):
CLOCKMAN.EXE  The ClockMan program file.
CLOCKMAN.HLP  The ClockMan online manual.



===========================================================
                     HOW TO REGISTER CLOCKMAN
===========================================================
ClockMan is currently being marketed as shareware.  If you
register the program you'll receive these remarkable
benefits:

  * The latest version of ClockMan.
  * A typeset, illustrated manual.
  * An end to the nag screens and opening banner.
  * Unlimited free technical support by phone.
  * A special thank-you program called JumpStart.  This
    lets you launch a program and send it keystrokes, all
    from within a Program Manager icon!
  * Deep discounts on the next major version (2.0)
  * Free upgrade to non-English versions (when available)

Registration is $49.95 (US funds) +$5.00 outside the
Western Hemisphere.   We accept VISA, MasterCard, EuroCard,
Access, money orders, checks, or purchase orders (call our
sales dept. beforehand).  Quantity pricing and LAN pricing
available.

You can print a handy order form inside Windows Help!
Select the "How To Order ClockMan" topic, then select
"Order Form", then select the File|Print Topic menu to
print the order form.

Graphical Dynamics, Inc.     1(800) 779-1799  orders only
2701 California Ave SW #301  1(206) 935-6032  orders/tech
Seattle, WA  98136           Mon-Sat,  9:00am-6:00pm PST
USA                                   (1700h -0200h GMT)
                             1(206) 935-2464  fax
                             1(206) 938-2398  BBS
                             Anytime,  Anyday


===========================================================
                       EVALUATION AGREEMENT
===========================================================
ClockMan is not and has never been public domain software,
nor is it free software.  ClockMan is copyrighted by
Graphical Dynamics, Inc.

You are granted a limited license to use ClockMan on a
30-day trial basis for the purpose of determining whether
ClockMan is suitable for your needs.  After this initial
30-day trial license expires, you must register the program
to continue using it.  The use of unlicensed copies of
ClockMan by any person, business, corporation, government
agency or any other entity is strictly prohibited.

A single user license permits a user to use ClockMan only
on a single computer at a time.

No one may modify or patch the ClockMan executable files in
any way, including but not limited to decompiling, disas-
sembling, changing the icon or string resources, or
otherwise reverse engineering the program.

A limited license is granted to copy and distribute
ClockMan only for the trial use of others, subject to the
above limitations, and also the following:

1) ClockMan must be copied in unmodified form, complete
   with the file containing this license information.

2) The full machine-readable ClockMan documentation must be
   included with each copy.

3) ClockMan may not be distributed in conjunction with any
   other product without a specific license to do so from
   Graphical Dynamics.

4) No fee, charge, or other compensation may be requested
   or accepted, except as authorized below:

   A) Operators of electronic bulletin board systems
      (sysops) may make ClockMan available for downloading
      as long as the above conditions are met.  An overall
      or time-dependent charge for the use of the bulletin
      board system is permitted as long as there is not a
      specific charge for the download of ClockMan.

   B) Vendors of user-supported or shareware software
      approved by the ASP may distribute ClockMan, subject
      to the above conditions, without specific permission.
      Non-approved vendors may distribute ClockMan only
      after obtaining written permission from Graphical
      Dynamics.  Such permission is usually granted.
      Vendors may charge a reasonable disk duplication and
      handling fee.


===========================================================
               WARRANTIES AND DISCLAIMERS
===========================================================

LIMITED WARRANTY
================
Graphical Dynamics guarantees your satisfaction with this
product for a period of 90 days from the date of original
purchase.  If you are unsatisfied with ClockMan within that
time period, return the package in saleable condition to
the place of purchase for a full refund.  Graphical
Dynamics warrants that all disks provided are free from
defects in material and workmanship, assuming normal use,
for a period of 90 days from the date of purchase.

Graphical Dynamics warrants that the program will perform
in substantial compliance with the documentation supplied
with the software product.  If a significant defect in the
product is found, you may return the product for a refund.
In no event will such a refund exceed the purchase price of
the product.

EXCEPT AS PROVIDED ABOVE, GRAPHICAL DYNAMICS DISCLAIMS ALL
WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE
PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE PURCHASER
ASSUMES THE RISK OF PAYING THE ENTIRE COST OF ALL NECESSARY
SERVICING, REPAIR, OR CORRECTION AND ANY INCIDENTAL OR CON-
SEQUENTIAL DAMAGES.  IN NO EVENT WILL GRAPHICAL DYNAMICS BE
LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING WITHOUT LIMIT-
ATION DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTER-
RUPTION, LOSS OF BUSINESS INFORMATION AND THE LIKE) ARISING
OUT OF THE USE OR THE INABILITY TO USE THIS PRODUCT EVEN IF
GRAPHICAL DYNAMICS HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.  THIS LIMITED WARRANTY GIVES YOU SPECIFIC
LEGAL RIGHTS.  YOU MAY HAVE OTHERS, WHICH VARY FROM STATE
TO STATE.

Use of this product for any period of time constitutes your
acceptance of this agreement and subjects you to its
contents.  This agreement is governed by the laws of the
State of Washington.

U.S. GOVERNMENT RESTRICTED RIGHTS
=================================
This product is provided with restricted rights.  Use,
duplication, or disclosure by the government is subject to
restrictions set forth in subdivision (c)(1)(ii) of the
Rights in Technical Data and Computer Software clause at
48 CFR 252.227-7013, or in subdivision (c)(1) and (2) of
the Commercial Computer Software--Restricted Rights clause
at 48 CFR 52.27-19, as applicable.  The contractor/
manufacturer is Graphical Dynamics, Inc., 2701 California
Ave SW, ste 301, Seattle, WA  98116.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  PC-SIG Disk #3091 CLOCK MANAGER!  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To install the program, Run A:\SETUP from Windows                      ║
║                                                                         ║
║                                                                         ║
║                                     (c) Copyright 1992, PC-SIG Inc.     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SUPRLOAD.TXT

{% raw %}
```
Quick Notes:

⌐ Graphical Dynamics, Inc.  

You can fully distribute SuperLoad as far and wide as you desire.  It's free to use - both for individuals, corporations and even governments!  You may even distribute SuperLoad with other applications.

The following restrictions apply:

	We retain the copyright on it. 

	If distributed with another program, acknowledgement of copyright
	  in the documentation.

	No modifying SuperLoad.  Distribution MUST include these three 	  	  files: SUPRLOAD.EXE, SUPRLOAD.WRI and SUPRLOAD.TXT.

Disk vendors:

	No charge in excess of 6 dollars may be charged for SuperLoad.

Feel free to contact us with any questions.

Enjoy this cool little app & remember, take a look at... 

       * ClockMan!  The Intelligent Alarm Clock for Windows *
```
{% endraw %}

## BONUS.TXT

{% raw %}
```
In this directory you'll find the file:

    SL-10.ZIP

It's a separate Windows application from Graphical Dynamics.  It's a 
little application that makes Windows start-up much more flexible and 
powerful for the user.

It's "BannerWare", that is, it's designed to give people an idea of 
the quality applications we believe in.  We've included it on this
distribution diskette as a convenience for you.  Enjoy SuperLoad and
feel free to pass it along to others.

Happy Windows!

Graphical Dynamics Development Team
```
{% endraw %}

## SUPRLOAD.TXT

{% raw %}
```
Quick Notes:

⌐ Graphical Dynamics, Inc.  

You can fully distribute SuperLoad as far and wide as you desire.  It's free to use - both for individuals, corporations and even governments!  You may even distribute SuperLoad with other applications.

The following restrictions apply:

	We retain the copyright on it. 

	If distributed with another program, acknowledgement of copyright
	  in the documentation.

	No modifying SuperLoad.  Distribution MUST include these three 	  	  files: SUPRLOAD.EXE, SUPRLOAD.WRI and SUPRLOAD.TXT.

Disk vendors:

	No charge in excess of 6 dollars may be charged for SuperLoad.

Feel free to contact us with any questions.

Enjoy this cool little app & remember, take a look at... 

       * ClockMan!  The Intelligent Alarm Clock for Windows *
```
{% endraw %}

## ZIP.TXT

{% raw %}
```
This directory contains the shareware version of ClockMan in the file CMAN-10B.ZIP, suitable for uploading to your favorite BBS.  Feel free to upload this file to your favorite BBSs.  This will help to make ClockMan successful by reaching as many people as possible.

Stay tuned to Graphical Dynamics for other exciting Windows applications!

Thank You!
```
{% endraw %}

## ZIP.TXT

{% raw %}
```
This directory contains the shareware version of ClockMan in the file CMAN-10B.ZIP, suitable for uploading to your favorite BBS.  Feel free to upload this file to your favorite BBSs.  This will help to make ClockMan successful by reaching as many people as possible.

Stay tuned to Graphical Dynamics for other exciting Windows applications!

Thank You!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3091

     Volume in drive A has no label
     Directory of A:\

    LZEXPAND DLL      6016   5-10-92   5:59p
    SETUP    EXE     85074   5-10-92   5:59p
    SETUP    INF      1803   5-10-92   5:59p
    V1       1C1         1   5-10-92   5:59p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       693   8-31-92   1:29a
    COMPRESD     <DIR>    
    FILES        <DIR>    
    LANGUAGE     <DIR>    
    SUPRLOAD     <DIR>    
           10 file(s)      93625 bytes

     Directory of A:\COMPRESD

    .            <DIR>    
    ..           <DIR>    
    CLOCKMAN EX$     83609   5-10-92   5:59p
    CLOCKMAN HL$     91742   5-10-92   5:59p
    JSTART   EX$     20025   5-10-92   5:59p
            5 file(s)     195376 bytes

     Directory of A:\FILES

    .            <DIR>    
    ..           <DIR>    
    SAMPLES  ALR      6868   5-10-92   7:59a
    CLOCKMAN INI      2929   5-10-92   5:59p
    SAMPLES  PIF       545   5-10-92   5:59p
    CLOK-CHG TXT      3892   5-10-92   5:59p
    CLOKREAD TXT      9122   5-10-92   5:59p
            7 file(s)      23356 bytes

     Directory of A:\LANGUAGE

    .            <DIR>    
    ..           <DIR>    
    CLOCKMAN FRA       799   5-10-92   5:59p
    CLOCKMAN DEU       826   5-10-92   5:59p
            4 file(s)       1625 bytes

     Directory of A:\SUPRLOAD

    .            <DIR>    
    ..           <DIR>    
    ZIP      TXT       359  11-11-91   1:00p
    SL-10    ZIP     13834  11-25-91   1:00p
    BONUS    TXT       533  11-25-91   1:00p
            5 file(s)      14726 bytes

    Total files listed:
           31 file(s)     328708 bytes
                           21504 bytes free
