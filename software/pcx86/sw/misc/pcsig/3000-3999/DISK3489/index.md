---
layout: page
title: "PC-SIG Diskette Library (Disk #3489)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3489/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3489"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## STARTUP.TXT

{% raw %}
```


                        StartupScreen Version 1.0
                        -------------------------
                             by Mike Mezaros

                             Quality Freeware
                                   from
                           [x]CheckBox Software


 Full documentation for StartupScreen is provided in the included Windows
 help file.  This file just contains a few odds and ends, etc.  I would
 have named it READ.ME or README.TXT, but how many of those can you have?


                                INVENTORY
                                ---------

 This archive should've included:

 STARTUP.EXE - The actual program.
 STARTUP.HLP - The Windows help file.
 STARTUP.TXT - This text file.
     HAL.RLE - Sample RLE file.


                               VISUAL BASIC
                               ------------

 This program is written in Microsoft Visual Basic.  Therefore, it can
 only be used in Windows' Standard or Enhanced modes, and requires the
 royalty-free Visual Basic runtime DLL.  This DLL is widely available,
 and free... It is available on CompuServe in the Microsoft Basic Forum
 (GO MSBASIC) in library #5, and on GEnie in the IBM PC RoundTable
 (IBMPC), as VBRUN.ZIP.


                SETTING A DEFAULT DIRECTORY IN WINDOWS 3.0
                ------------------------------------------

 Windows 3.0 doesn't provide an easy way to set a default directory for
 your programs... For example, let's say that you keep all of your
 graphics files in C:\GRAPHICS, and all of your Windows applications in
 C:\WINAPPS.  There's no simple way to have a Windows program default to
 your C:\GRAPHICS directory, without actually moving the program.

 So, in the Program Manager (or whatever replacement you use), add the
 name of the directory you want StartupScreen to default to to the
 command line.  (If it looks like I have too many to's, read it again.)

 For example, if it currently reads...

 C:\WINAPPS\STARTUP.EXE

 and you want it to default to C:\GRAPHICS, change it to...

 C:\WINAPPS\STARTUP.EXE C:\GRAPHICS


                         SAMPLE RLE FILE, HAL.RLE
                       ----------------------------

 The included sample RLE file, HAL.RLE, will display properly only on VGA
 or better systems.

 HAL.RLE is a picture of Hal 9000, the famous fictional computer turned
 killer.

 This picture was previously available publicly in other graphics formats
 and is included in this archive as a sample only.  It is not part of the
 copyrighted StartupScreen package.


 This package (consisting of the StartupScreen software and the
 associated documentation) is Copyright 1991, 1992 by Mike Mezaros. The
 Microsoft Visual Basic runtime DLL (VBRUN100.DLL) is Copyright 1991 by
 Microsoft Corp.  This package may be used and distributed freely.
 However, only vendors approved by the ASP (Association of Shareware
 Professionals) may distribute this software for a fee without prior
 permission.  (Receipt of disk from author implies permission.)

 Please read the "Legal Disclaimers and Notices" section of the help file
 for further legal information.

 Windows and Visual Basic are trademarks of Microsoft Corp.
 CompuServe is a trademark of CompuServe Information Service Inc.
 GEnie is a trademark of General Electric Corp.
 All other trademarks mentioned in this file and other parts of the
 StartupScreen package are owned by their respective companies.


                                -the end-

```
{% endraw %}

## SWAPPER.TXT

{% raw %}
```


                       StartupSwapper Version 1.0 A
                       ----------------------------
                             by Mike Mezaros

                            Quality Shareware
                                   from
                           [x]CheckBox Software


 Full documentation for StartupSwapper is provided in the included
 Windows help file.  This file just contains a few odds and ends, etc. I
 would have named it READ.ME or README.TXT, but how many of those can you
 have?

 To get to the full documentation for this evaluation version, run
 SWAPCON.EXE and click the 'Help' button.


                                INVENTORY
                                ---------

 This archive should've included:

 SWAPPER.EXE - The StartupSwapper Randomizer application.
 SWAPCON.EXE - The StartupSwapper Control Panel application.
 SWAPCON.HLP - The StartupSwapper help file.
 SWAPPER.TXT - This text file.
 SWAPPER.REG - The StartupSwapper registration form.
   LUNAR.RLE - Sample RLE file.
    SNOW.RLE - Sample RLE file.

 Note: Copies of StartupSwapper located on the REGISTERED version disk
 do not contain the RLE files.  A group of RLE files is provided in
 a separate archive.  SWAPPER.REG is also still included in the
 REGISTERED version disk archive, in case our customers would like to
 pass it along.

                               VISUAL BASIC
                               ------------

 This program is written in Microsoft Visual Basic.  Therefore, it can
 only be used in Windows' Standard or Enhanced modes, and requires the
 royalty-free Visual Basic runtime DLL.  This DLL is widely available,
 and free... It is available on CompuServe in the Microsoft Basic Forum
 (GO MSBASIC) in library #6, and on GEnie in the IBM PC RoundTable
 (IBMPC), as VBRUN.ZIP.


                               BACKUP FILE
                               -----------

 StartupSwapper makes a backup of your WIN.COM file named WINBAK.COM.
 If, for some reason, you can no longer run Windows after using
 StartupSwapper, delete WIN.COM and rename WINBAK.COM to WIN.COM.

 If your current startup screen is the standard Microsoft screen,
 following the procedure above will also restore your original startup
 screen.  If not, use StartupScreen to restore the original screen.
 StartupScreen is available almost everywhere StartupScreen can be found,
 and is also included on the REGISTERED version disk.



                 SAMPLE RLE FILES, LUNAR.RLE AND SNOW.RLE
                 ----------------------------------------

 The included sample RLE files, LUNAR.RLE and SNOW.RLE, will display
 properly only on VGA or better systems.

 LUNAR.RLE is a picture of astronaut Buzz Aldrin from the first moon
 landing.  The reflection in his helmet shows astronaut Neil Armstrong.

 SNOW.RLE is a Calvin and Hobbes-inspired drawing.  Calvin is
 contemplating several designs for snowmen.

 These pictures were previously available publicly in other graphics
 formats and are included in this archive as samples only.  They are not
 part of the copyrighted StartupSwapper package.



 This package (consisting of the StartupSwapper software and the
 associated documentation) is Copyright 1991, 1992 by Mike Mezaros. The
 Microsoft Visual Basic runtime DLL (VBRUN100.DLL) is Copyright 1991 by
 Microsoft Corp.  This package may be distributed freely. However, only
 vendors approved by the ASP (Association of Shareware Professionals) may
 distribute this software for a fee without prior permission.  (Receipt
 of disk from author implies permission.)

 Please read the "Legal Disclaimers and Notices" section of the help file
 for further legal information.  Please read the "Registration
 Information" section of the help file for registration information.
 Please support the shareware concept by registering StartupSwapper.

 Windows and Visual Basic are trademarks of Microsoft Corp.
 CompuServe is a trademark of CompuServe Information Service Inc.
 GEnie is a trademark of General Electric Corp.
 All other trademarks mentioned in this file and other parts of the
 StartupSwapper package are owned by their respective companies.


                                -the end-


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

 INFORMATION FOR DISK VENDORS

 STARTU.ZIP - StartupSwapper 1.0 - SHAREWARE
   SWAP.ZIP - StartupScreen 3.2  - FREEWARE

 by Mike Mezaros, [x]CheckBox Software

 StartupSwapper is offerred as shareware, StartupScreen is freeware.
 They may be distributed together or separately.

 This document need not be included with either program if you so desire;
 it isn't being included with the versions uploaded to information
 services or BBS's.  It is only included on the disks prepared for disk
 vendors. The regular documentation contains a blanket statement that all
 ASP approved vendors may distribute the software, all others must obtain
 permission or receive a disk from the author (I am not yet a member of
 the ASP, this permission is granted out of respect for their policies
 covering disk vendors).

 Both programs require Microsoft Windows, a 286 or better system, at
 least 1MB of RAM, and the VBRUN100.DLL (Visual Basic Runtime).  That
 file is included on this diskette, but you need not distribute it along
 with these programs if 1) you offer it separately, and/or 2) it is
 clearly stated that this program requires that DLL.  VBRUN100.DLL may be
 freely distributed and is Copyright 1991 by Microsoft Corp.

 StartupScreen allows Windows users to replace the Microsoft Windows
 startup screen with a picture of their own design or choosing.  It
 includes complete instructions in Windows Help format as well as a
 sample startup screen.  It also allows users to use RLE files as
 wallpaper, saving them significant amounts of disk space.

 StartupSwapper will automatically change the startup screen each time
 Windows is loaded -- and will choose between 32,000 different screens.
 It includes complete instructions in Windows Help format as well as two
 sample startup screens.

 StartupSwapper is SHAREWARE.  You are granted a limited license to copy
 StartupSwapper ONLY FOR THE TRIAL USE OF OTHERS. Public Domain and
 Shareware Disk Vendors May NOT CHARGE a fee for StartupSwapper itself.
 However you may include StartupSwapper on a diskette for which you
 charge a nominal distribution fee. The purchaser of said diskette must
 be informed in advance that the fee paid to acquire the diskette does
 NOT relieve said purchaser from paying the registration fee for
 StartupSwapper if said purchaser uses StartupSwapper.

 StartupScreen is a freeware program.  You may NOT CHARGE a fee for
 StartupScreen itself.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3489

     Volume in drive A has no label
     Directory of A:\

    VENDOR   DOC      2490   1-31-92   2:41p
    VBRUN100 ZIP    169189   1-31-92   2:43p
    STARTU   ZIP     39881   1-21-92   2:14a
    SWAP     ZIP     62275   1-31-92   2:44p
    GO       BAT        36   4-12-93   3:23p
    SHOW     EXE      2040   9-12-88  10:48a
            6 file(s)     275911 bytes
                           44032 bytes free
