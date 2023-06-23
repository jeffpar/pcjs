---
layout: page
title: "PC-SIG Diskette Library (Disk #1663)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1663/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1663"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SYNERGISTIC SOFTWARE"

    GCP is a graphics conversion utility for Microsoft Windows.  Converts to
    and from Windows Paint (both old and new formats), PC Paintbrush,
    CompuServe GIF, Macintosh MacPaint, Mac Startup screens and Windows
    clipboard bitmaps.  Stretching, shrinking, inverting, dithering and
    cropping can also be performed using GCP.
    
    File Descriptions:
    
    GCP425    ARC  Archived GCP program and documentation.
    ???????   MSG  Brief descriptions.
    
    COLORFIX is a "patcher" for Microsoft Windows EGA/VGA and similar screen
    drivers that will permit truer color reproduction in 64 color mode.
    Fixes "pinkish" reds and other off-color screen colors.
    
    File Descriptions:
    
    COLORFIX  ARC  Archived COLORFIX program and documentation.
    ???????   MSG  Brief description.
    
    FIREWORKS is a screen blanking utility for Microsoft Windows.  When
    keyboard and mouse buttons are inactive for a user-specified length of
    time, the screen is blanked and simulated fireworks shoot off on the
    screen to let the user know the computer is still alive.  In "active"
    mode (selecting the FIREWORK icon) the mouse cursor becomes a plane
    flying amongst the fireworks.  The screen blank can also be blanked
    voluntarily using a hot-key.
    
    File Descriptions:
    
    FIRE43    ARC  Archived FIREWORK program and documentation.
    ???????   MSG  Brief description.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLORFIX.DOC

{% raw %}
```

COLORFIX v1.00 -- Copyright (c) 1988 Kim Levitt
Another shareware program for Microsoft Windows from Synergistic Enterprises


WHAT COLORFIX DOES

COLORFIX is a simple program which I have written to "fix" the color palette
as used in the EGA and VGA screen drivers for Microsoft Windows. The hardware
palette setup by these drivers produces colors which are not quite right on
64 color monitors. On 16 color (RGBI) monitors, the standard driver palette
looks just fine, but on 64 color (RGBrgb) monitors (what most people use with
their EGA and VGA display adapters), red looks like pink and the green and
blue are washed out. The reason for this is the way the RGB bits are set:

Each palette register value is determined as follows:

       Bit #  7  6  5  4  3  2  1  0
              -  -  r  g  b  R  G  B

        "Stock" Palette             My version

            rgb RGB                  rgb RGB
  Red       111 100    (3Ch)         100 100    (24h)
  Green     111 010    (3Ah)         010 010    (12h)
  Yellow    111 110    (3Eh)         110 110    (36h)
  Blue      111 001    (39h)         001 001    (09h)
        .
        .
        .

The stock setup produces washed-out looking colors. The red, for instance is
pink because it is red mixed with white, blue is light blue, etc..

Instead of having all 3 secondary rgb bits stuck on all the time, I "copy"
the primary RGB bits. This gives much purer colors with more vibrancy. No
more "pinkish" reds...

On 64 color (RGBrgb) monitors, my revised palette colors look fantastic.
Since most EGA and VGA users have 64 color monitors, I believe these "purer"
colors should be used.

On 16 color monitors, the secondary red and blue bits are ignored. Instead,
secondary green is "intensity". This means the new palette will produce
darker blues and reds on 16 color monitors and so is not recommended for them.

How can you tell if your monitor is 16 or 64 color? Well, read the manual. If
the connection diagram for the pins shows you having only R,G,B and I color
bits then you have a 16 color monitor. If you have R,G,B and r,g,b (or it
may be shown as secondary R, secondary G/I, secondary B) you have a 64 color
monitor. Note that you do NOT have to have analog to get 64 colors. If you
have a VGA board driving an analog monitor, then you also can get 64 colors
(in fact more) and can also use the new palette. In general, most people with
EGA monitors will have 64 color RGBrgb. Only some very early EGA monitors
were 16 color RGBI.


USING COLORFIX

COLORFIX is designed for use with Windows version 2.03 and up (both 286
and 386 versions) it is a normal DOS application that you run once to fix
your screen drivers palette setup and thereafter you will have purer colors.

You can use COLORFIX in two different ways. The simplest is just to switch
to your Windows subdirectory and run it there (under normal DOS, WITHOUT
Windows running). COLORFIX will look for and patch the palette information
contained in your WIN200.BIN file. If you want to make a backup copy of this
WIN200.BIN file before you run COLORFIX, do so.

If you are running the "slow boot" version of Windows or wish to patch the
screen driver directly (so you won't have to run COLORFIX after a new setup),
you can specify the screen driver name on the command line (or a wildcard
can be used to patch multiple drivers in one shot) like so:

	C:>COLORFIX A:EGAHIRES.DRV
	(will patch the EGAHIRES.DRV file on drive A:)

	A:>COLORFIX *.DRV
	(will patch all patchable drivers, current drive and directory)

Note that COLORFIX searches the file looking for the "old palette" and
patches the new one over it. This means it should work on all EGA and
VGA and related screen drivers. If the "old palette" isn't found, COLORFIX
will report that either a non-standard palette was found or that the palette
was already patched. In either of these latter cases, COLORFIX will NOT
alter the file. (This means it won't "stomp" on your HERCULES driver or
whatever if you use a wildcard.) This also means it won't patch 16 color
drivers.

Once you have run COLORFIX, you can simply startup Windows (or run Setup
if you patched the .DRV file and aren't using the "slow boot") and you
will have the "True Colors" that Cyndi Lauper sings about!!

If you use COLORFIX, PPPPLLLLLEEEEAAASSSEEEEE ("please" like Roger Rabbit
says it) send me $5 as your shareware registration fee!!! (That's not too
much to ask to get rid of those pink reds, is it?)

Send your registration fee to:

		Kim Levitt
		Synergistic Enterprises
		8033 Sunset Blvd., #975
		Los Angeles, CA  90046

Your fee will help encourage more goodies like FIREWORKS and COLORFIX to be
released as shareware in the future. If I don't start getting more fees, I'm
going to get very discouraged!! Support a struggling shareware author today!!
Thank you!!
							Yours truly,

								Kim Levitt
```
{% endraw %}

## FILE1663.TXT

{% raw %}
```
Disk No: 1663                                                           
Disk Title: Synergistic Software                                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: GCP                                                      
Author Version: 4.20                                                    
Author Registration: $40.00                                             
                                                                        
The SYNERGISTIC SHAREWARE package contains three separate utilities for 
Microsoft windows.  COLORFIX is a DOS program whereas both FIREWORKS and
GCP are Windows applications and require a version of windows to run.   
                                                                        
COLORFIX is a "patcher" for Microsoft Windows EGA/VGA and similar screen
drivers that will permit truer color reproduction in 64 color mode.          
Fixes "pinkish" reds and other off-color screen colors.                 
                                                                        
GCP is a graphics conversion utility for Microsoft Windows.  Converts to
and from Windows Paint (both old and new formats), PC Paintbrush,       
CompuServe GIF, Macintosh MacPaint, Mac Startup screens and Windows     
clipboard bitmaps.  Stretching, shrinking, inverting, dithering and     
cropping can also be performed using GCP.                               
                                                                        
FIREWORKS is a screen blanking utility for Microsoft Windows.  When     
keyboard and mouse buttons are inactive for a user-specified length of  
time, the screen is blanked and simulated fireworks shoot off on the    
screen to let the user know the computer is still alive.  In "active" mo
(selecting the FIREWORK icon) the mouse cursor becomes a plane flying   
amongst the fireworks.  The screen blank can also be blanked voluntarily
using a hot-key.                                                        
                                                                        
Usage:  MS-Windows Utility.                                             
                                                                        
Special Requirements:  MS-WINDOWS 1.0 or greater.                       
                                                                        
How to Start:  Type GO (press ENTER).                                   
                                                                        
Suggested Registration: $50 for package. $5, $40, and $5 separately.    
                                                                        
File Descriptions:                                                      
                                                                        
COLORFIX  ARC  Archived COLORFIX program and documentation.             
GCP425    ARC  Archived GCP program and documentation.                  
FIRE43    ARC  Archived FIREWORK program and documentation.             
READ      ME   Summary information.                                     
???????   MSG  Brief description of each program.                       

```
{% endraw %}

## FIRE43.DOC

{% raw %}
```

	FIREWORKS -- A Screen saver program for Microsoft Windows
	(c) 1988-1989 Kim Levitt -- Synergistic Enterprises
	version 4.30 -- 02/25/89

The enclosed program FIREWORK.EXE and it's accompanying dynamic link
library file FIRELIB.EXE together make up a program for Windows which
will blank out your screen after a specified interval of time and display
a fireworks simulation to let you know your computer hasn't "died" and
to entertain you. (It was inspired by a similar screen blanker for the
Macintosh known as "Pyro".) (WIN87EM.EXE is included for those who lack
this dynamic link library which is needed for Windows programs which can
use 8087/80287/80387 math chips if present. Note that you need WIN87EM.EXE
whether or not you have a math chip in your system.)

This version (v4.30) includes a couple of fixes for bugs that occured
when using Fireworks with Excel. One bug would crash Windows if you were
running the Excel tutorial or feature guide and Fireworks blanked the screen.
The other bug prevented Excel's graphing feature from working properly
on some systems when Fireworks was running. The same bug fix may also
allow Fireworks to work properly on some systems on which it did not work
properly before.

A new feature added to v4.30 includes the ability to turn the automatic
blanking on and off. To turn blanking off, you hold down the ALT key and
press the keypad minus key. To turn auto blanking back on, enter ALT and
the keypad plus key. This is for temporary disabling of the auto blanking
only. You can still set the delay time to 0 to disable auto blanking
completely.

Fireworks v4.30 also now compensates for the aspect ratio of systems (such
as EGA) which do not have square pixels. This gives the fireworks better
shapes on such systems.

To install Fireworks, copy all 3 EXE's to your WINDOWS subdirectory. Edit
your WIN.INI file LOAD= line to include FIREWORK. When you start windows,
Fireworks will appear as an icon at the bottom of the screen. Double click on
it to open the window and choose "Setup  Screen Save Delay..." to specify
the number of minutes of system inactivity you want Fireworks to wait before
blanking out the screen. Then use "Alt-Spacebar N" to restore Fireworks to
an icon. (Fireworks will only autoblank the screen when running as an icon.)

Fireworks will not blank while there is keyboard activity or a mouse button
is being pressed. It uses Windows GDI calls to blank the screen and should
therefore work on any system running Windows. (No hardware specific code.)
(This also means however, that Fireworks will not work when full screen
"OldApps" are running.)

Fireworks will NOT blank out any windows you may have (like the one in
Command Post) which tries to keep itself visible. If you don't want the
Command Post clock to show up, set it off (so it displays the program name
and version number instead of the clock, (or with the latest version, so it
only shows minutes and not seconds).

In addition to the auto blanking feature, you can use a "hot key" to enable
blanking at any time. Simply press "Alt-Control" (NOT "Control-Alt" by the
way, which means "Control-Alt-Delete" will not cause the blanker to come on
when you are trying to reboot). When the blanking is enabled, no cursor is
visible. Press any key or a mouse button to disable blanking and Fireworks
will return to icon state.

When running in "normal mode" as a window, you may notice the cursor changes
into an airplane.. (Cute huh?) Try pressing a button...

Fireworks has only minimal system impact when running in icon state. It checks
for system inactivity only once every 5 seconds.

Fireworks is a shareware program. If you use it, please send a $5 registration
fee per copy to:

		Kim Levitt
		Synergistic Enterprises
		8033 Sunset Blvd. #975
		Los Angeles, CA 90046

(Checks can be made payable to either Kim Levitt or Synergistic Enterprises.)

						Enjoy!!
							-- Mr. Kim Levitt
							   02/25/89
```
{% endraw %}

## GCP420.DOC

{% raw %}
```

    GCP (tm) version 4.20SW
    ------------------------------------------------------------------------
    a program for displaying, manipulating and converting picture files
    ************************************************************************
    copyright (c) 1987-1989 Doren Kim Levitt
    ------------------------------------------------------------------------
                         a quality product from Synergistic Enterprises (tm)


    GCP*  is a Microsoft Windows* program for displaying,  manipulating  and
    converting  various format picture files. It is designed to work on  any
    system which is running Microsoft Windows, versions 2.03 and up. An  EGA
    or VGA resolution display adapter and a high speed 80286 or 80386 system
    is recommended but not required. Memory requirements vary depending upon
    the  type  of picture file being displayed. At least 640K  is  required,
    with  additional EMS v4.0 memory recommended, especially if you will  be
    displaying  and/or  converting  color  pictures.  (NOTE:  GCP  does  not
    directly  use EMS or extended memory, as the memory bitmaps used by  GCP
    (as  of  Windows  v2.10 anyway) are stored only in  the  lower  640K.  I
    believe  that  virtual memory and/or  device-independent  color  bitmaps
    using  expanded  and/or extended memory will be forthcoming  in  Windows
    v3.xx  and therefore am waiting for the next Windows release to  address
    memory  usage  problems. In the meantime, reduce your use of  the  lower
    640K  as much as you can to give GCP as much elbow room as  possible  if
    you are handling large color bitmaps. EMS and extended memory  (XMS.SYS)
    usage  by  Windows can free up more of the lower 640K memory  space  for
    bitmaps.)

    Since  GCP  is  a Windows application, it features  a  standard  Windows
    graphic  user interface with pull-down menus, scroll bars, dialog  boxes
    and multiple instance support. In addition to full support for use  with
    a  mouse,  accelerator  keys are provided to  facilitate  quick  use  by
    keyboard  for experienced users. A mouse is currently required in  order
    to  select  regions  of pictures for copying to the  clipboard,  but  is
    otherwise not required. (File display and format conversions can be done
    using  only keyboard commands.) If you have Microsoft Excel, GCP can  be
    used in conjunction with it to display pictures related to records in an
    Excel database.

    GCP  is  available  in  two versions,  a  shareware  version  (currently
    4.20SW), and a professional version (4.20). The only difference  between
    the two currently being that the professional version supports more file
    formats (four more currently). Registered users of the shareware version
    receive a manual and a license number which disables the "reminder  box"
    on  startup.  The professional version comes packaged with  a  disk  and
    manual and a binder (and there is no "reminder box", of course).

    Current picture formats supported by GCP (both versions) include:

                    Microsoft Windows* Paint (old and new formats)
                    Macintosh* MacPaint & StartUpScreen
                    CompuServe GIF*
                    PC Paintbrush*

    In addition, the professional version of GCP also supports:

                    Windows Bitmap
                    Windows Cursor
                    Windows Icon
                    Hewlett-Packard* PCL Files

    PCL  files can be used to build graphics and logos  for  Hewlett-Packard
    LaserJet and compatible laser printers.



    GCP  can  also read black and white and color bitmaps from  the  Windows
    clipboard. Every one of these formats can be read in and the result  can
    be  written out to any format desired. Pictures or portions of  pictures
    can  also  be copied into the clipboard for pasting into  other  Windows
    applications such as Microsoft Windows Write or Aldus PageMaker*.

    GCP  also allows you to "stretch" or "shrink" pictures from one size  to
    another.  You  can also "invert" portions or all of  the  screen  image.
    Using  the  copy and paste and invert features in conjunction  with  the
    stretch  and  shrink option allows you to manipulate pictures to  fit  a
    particular size or shape, aspect ratio or polarity.

    Future enhancements for GCP will include support for more file  formats,
    more  conversion  options, full keyboard support for  non-mouse  Windows
    systems  and more. Registered users will be notified of updates as  soon
    as  they  are  available.  Users interested  in  particular  formats  or
    features are encouraged to send in their ideas for possible inclusion in
    future releases.

    GCP is not copy protected, nor does it require any special  installation
    procedure.  It  does  require that Microsoft Windows  v2.03  and  up  be
    installed   and   working  on  your  system.  (Refer  to   the   Windows
    documentation  for  information on using the Windows  SETUP  program  to
    install Windows.)

    Since GCP is a Windows program, it really doesn't need any documentation
    in order to start using it. Just start it up and pull down the menus  to
    see  the main functions. The basic idea is that you open a picture  file
    of  one  format, and then you can either directly save it  into  another
    file  format, or else copy part of it to the clipboard, then  paste  the
    piece in and save that. The .GIF file support is very slow and will stop
    everything  else  when  you  are opening or  saving  a  .GIF  file,  but
    otherwise  the  program  is  pretty much bug  free.  (DO  send  in  your
    registration  fee  and get the manual, however, it will  explain  a  few
    things and make using GCP even easier.)

    The  shareware version (4.20SW) of GCP is released for  distribution  on
    bulletin  boards  and  public access data networks  and  may  be  freely
    distributed  as long as the program and accompanying document files  are
    included  with  it.  Users  of  the  program  are  expected  to  pay   a
    registration fee. (See below for details.) Inquires concerning "bundling
    arrangements"  or publishing of the professional version of the  program
    should be directed to Mr. Kim Levitt at the address listed below.

    If you use GCP and would like an illustrated manual to explain how  more
    about  how  to use it, (and a license number to  disable  the  "reminder
    box"),   please  send  a  registration  fee  of  $40  made  payable   to
    "Synergistic Enterprises" to: (see price schedule below)

                    Synergistic Enterprises
                    8033 Sunset Blvd., #975
                    Los Angeles, CA  90046

    If you use GCP, PLEASE register it!!! I have invested a lot of money and
    time in working on this program but have received very few registrations
    to  date. Your registrations will help encourage more  improvements  and
    more features. You will also get a manual which may answer a lot of your
    questions and help you use GCP more effectively.

    For  an  additional  $20, the professional version  of  the  program  is
    available  which  does  not have a "reminder box" at  all  and  it  also
    supports  four  more  file formats (listed  above)  than  the  shareware
    version, and comes packaged in a nice binder.



    If your company requires a bill in order to make a payment, there is  an
    extra $5 charge for billing services. Send a purchase order for $45  (or
    $65) and we will bill you. (See price schedule below.)

    GCP  is  a program still undergoing improvement, with plans  for  future
    releases. If you are a registered owner, you will be notified of updates
    as  they become available and will be able to upgrade for  a  reasonable
    fee.

    IMPORTANT  NOTE: GCP was formerly named "Easel*". The name  was  changed
    because  another  company  produces a computer  software  product  named
    "Easel" and has registered that name as their trademark. If you have any
    versions  of  the  shareware  program  named  "Easel"  from  Synergistic
    Enterprises which was previously distributed, PLEASE DELETE THEM. GCP is
    an  update  to this older program, and should replace  the  old  "Easel"
    programs in any case.


    CURRENT GCP PRICE/UPDATE SCHEDULE (subject to change) as of 06/17/89:

            Shareware Version (manual & reg #) ............... $40
            Shareware Version with disk (& manual & reg #) ... $50
            Professional Version (disk, manual & binder) ..... $60

            Update from Easel Shareware to GCP Shareware ..... $10
              (For new manual only. Previous registered users of
               Easel can update to GCP Shareware for no charge.)
            Update Easel Shareware to GCP SW with disk ....... $20
            Update Easel Commercial to GCP Professional ...... $25
            Upgrade Easel Shareware to GCP Professional ...... $45

    (If  you are sending in for an update or upgrade, be sure to  include  a
    copy of your registration.)


    ADDITIONAL SHIPPING/BILLING CHARGES:

            C.O.D. Shipping .................................. $ 5
            International Shipping (no Int'l COD's, sorry) ... $ 5
            Purchase Order billing fee (non prepaid orders) .. $ 5

    (International  customers: Please make payment in US dollars drawn on  a
    US bank. Items shipped via international air mail.)











    *  GCP  & Synergistic Enterprises are trademarks of  Doren  Kim  Levitt.
    Microsoft and MS-DOS are registered trademarks of Microsoft Corporation.
    GIF and Graphics Interchange Format are trademarks of CompuServe,  Inc.,
    an H&R Block Company. PC Paintbrush is a registered trademark of  Z-Soft
    Corporation.  Macintosh is a trademark of Apple Computer Inc. IBM  is  a
    registered  trademark  of International Business  Machines  Corporation.
    PageMaker  is  a  registered trademark of  Aldus  Corporation.  Hewlett-
    Packard is a trademark of Hewlett-Packard Company. Easel is a registered
    trademark of Interactive Images, Inc.
```
{% endraw %}

## GCP420.DOC

{% raw %}
```

    GCP (tm) version 4.20SW
    ------------------------------------------------------------------------
    a program for displaying, manipulating and converting picture files
    ************************************************************************
    copyright (c) 1987-1989 Doren Kim Levitt
    ------------------------------------------------------------------------
                         a quality product from Synergistic Enterprises (tm)


    GCP*  is a Microsoft Windows* program for displaying,  manipulating  and
    converting  various format picture files. It is designed to work on  any
    system which is running Microsoft Windows, versions 2.03 and up. An  EGA
    or VGA resolution display adapter and a high speed 80286 or 80386 system
    is recommended but not required. Memory requirements vary depending upon
    the  type  of picture file being displayed. At least 640K  is  required,
    with  additional EMS v4.0 memory recommended, especially if you will  be
    displaying  and/or  converting  color  pictures.  (NOTE:  GCP  does  not
    directly  use EMS or extended memory, as the memory bitmaps used by  GCP
    (as  of  Windows  v2.10 anyway) are stored only in  the  lower  640K.  I
    believe  that  virtual memory and/or  device-independent  color  bitmaps
    using  expanded  and/or extended memory will be forthcoming  in  Windows
    v3.xx  and therefore am waiting for the next Windows release to  address
    memory  usage  problems. In the meantime, reduce your use of  the  lower
    640K  as much as you can to give GCP as much elbow room as  possible  if
    you are handling large color bitmaps. EMS and extended memory  (XMS.SYS)
    usage  by  Windows can free up more of the lower 640K memory  space  for
    bitmaps.)

    Since  GCP  is  a Windows application, it features  a  standard  Windows
    graphic  user interface with pull-down menus, scroll bars, dialog  boxes
    and multiple instance support. In addition to full support for use  with
    a  mouse,  accelerator  keys are provided to  facilitate  quick  use  by
    keyboard  for experienced users. A mouse is currently required in  order
    to  select  regions  of pictures for copying to the  clipboard,  but  is
    otherwise not required. (File display and format conversions can be done
    using  only keyboard commands.) If you have Microsoft Excel, GCP can  be
    used in conjunction with it to display pictures related to records in an
    Excel database.

    GCP  is  available  in  two versions,  a  shareware  version  (currently
    4.20SW), and a professional version (4.20). The only difference  between
    the two currently being that the professional version supports more file
    formats (four more currently). Registered users of the shareware version
    receive a manual and a license number which disables the "reminder  box"
    on  startup.  The professional version comes packaged with  a  disk  and
    manual and a binder (and there is no "reminder box", of course).

    Current picture formats supported by GCP (both versions) include:

                    Microsoft Windows* Paint (old and new formats)
                    Macintosh* MacPaint & StartUpScreen
                    CompuServe GIF*
                    PC Paintbrush*

    In addition, the professional version of GCP also supports:

                    Windows Bitmap
                    Windows Cursor
                    Windows Icon
                    Hewlett-Packard* PCL Files

    PCL  files can be used to build graphics and logos  for  Hewlett-Packard
    LaserJet and compatible laser printers.



    GCP  can  also read black and white and color bitmaps from  the  Windows
    clipboard. Every one of these formats can be read in and the result  can
    be  written out to any format desired. Pictures or portions of  pictures
    can  also  be copied into the clipboard for pasting into  other  Windows
    applications such as Microsoft Windows Write or Aldus PageMaker*.

    GCP  also allows you to "stretch" or "shrink" pictures from one size  to
    another.  You  can also "invert" portions or all of  the  screen  image.
    Using  the  copy and paste and invert features in conjunction  with  the
    stretch  and  shrink option allows you to manipulate pictures to  fit  a
    particular size or shape, aspect ratio or polarity.

    Future enhancements for GCP will include support for more file  formats,
    more  conversion  options, full keyboard support for  non-mouse  Windows
    systems  and more. Registered users will be notified of updates as  soon
    as  they  are  available.  Users interested  in  particular  formats  or
    features are encouraged to send in their ideas for possible inclusion in
    future releases.

    GCP is not copy protected, nor does it require any special  installation
    procedure.  It  does  require that Microsoft Windows  v2.03  and  up  be
    installed   and   working  on  your  system.  (Refer  to   the   Windows
    documentation  for  information on using the Windows  SETUP  program  to
    install Windows.)

    Since GCP is a Windows program, it really doesn't need any documentation
    in order to start using it. Just start it up and pull down the menus  to
    see  the main functions. The basic idea is that you open a picture  file
    of  one  format, and then you can either directly save it  into  another
    file  format, or else copy part of it to the clipboard, then  paste  the
    piece in and save that. The .GIF file support is very slow and will stop
    everything  else  when  you  are opening or  saving  a  .GIF  file,  but
    otherwise  the  program  is  pretty much bug  free.  (DO  send  in  your
    registration  fee  and get the manual, however, it will  explain  a  few
    things and make using GCP even easier.)

    The  shareware version (4.20SW) of GCP is released for  distribution  on
    bulletin  boards  and  public access data networks  and  may  be  freely
    distributed  as long as the program and accompanying document files  are
    included  with  it.  Users  of  the  program  are  expected  to  pay   a
    registration fee. (See below for details.) Inquires concerning "bundling
    arrangements"  or publishing of the professional version of the  program
    should be directed to Mr. Kim Levitt at the address listed below.

    If you use GCP and would like an illustrated manual to explain how  more
    about  how  to use it, (and a license number to  disable  the  "reminder
    box"),   please  send  a  registration  fee  of  $40  made  payable   to
    "Synergistic Enterprises" to: (see price schedule below)

                    Synergistic Enterprises
                    8033 Sunset Blvd., #975
                    Los Angeles, CA  90046

    If you use GCP, PLEASE register it!!! I have invested a lot of money and
    time in working on this program but have received very few registrations
    to  date. Your registrations will help encourage more  improvements  and
    more features. You will also get a manual which may answer a lot of your
    questions and help you use GCP more effectively.

    For  an  additional  $20, the professional version  of  the  program  is
    available  which  does  not have a "reminder box" at  all  and  it  also
    supports  four  more  file formats (listed  above)  than  the  shareware
    version, and comes packaged in a nice binder.



    If your company requires a bill in order to make a payment, there is  an
    extra $5 charge for billing services. Send a purchase order for $45  (or
    $65) and we will bill you. (See price schedule below.)

    GCP  is  a program still undergoing improvement, with plans  for  future
    releases. If you are a registered owner, you will be notified of updates
    as  they become available and will be able to upgrade for  a  reasonable
    fee.

    IMPORTANT  NOTE: GCP was formerly named "Easel*". The name  was  changed
    because  another  company  produces a computer  software  product  named
    "Easel" and has registered that name as their trademark. If you have any
    versions  of  the  shareware  program  named  "Easel"  from  Synergistic
    Enterprises which was previously distributed, PLEASE DELETE THEM. GCP is
    an  update  to this older program, and should replace  the  old  "Easel"
    programs in any case.


    CURRENT GCP PRICE/UPDATE SCHEDULE (subject to change) as of 06/17/89:

            Shareware Version (manual & reg #) ............... $40
            Shareware Version with disk (& manual & reg #) ... $50
            Professional Version (disk, manual & binder) ..... $60

            Update from Easel Shareware to GCP Shareware ..... $10
              (For new manual only. Previous registered users of
               Easel can update to GCP Shareware for no charge.)
            Update Easel Shareware to GCP SW with disk ....... $20
            Update Easel Commercial to GCP Professional ...... $25
            Upgrade Easel Shareware to GCP Professional ...... $45

    (If  you are sending in for an update or upgrade, be sure to  include  a
    copy of your registration.)


    ADDITIONAL SHIPPING/BILLING CHARGES:

            C.O.D. Shipping .................................. $ 5
            International Shipping (no Int'l COD's, sorry) ... $ 5
            Purchase Order billing fee (non prepaid orders) .. $ 5

    (International  customers: Please make payment in US dollars drawn on  a
    US bank. Items shipped via international air mail.)











    *  GCP  & Synergistic Enterprises are trademarks of  Doren  Kim  Levitt.
    Microsoft and MS-DOS are registered trademarks of Microsoft Corporation.
    GIF and Graphics Interchange Format are trademarks of CompuServe,  Inc.,
    an H&R Block Company. PC Paintbrush is a registered trademark of  Z-Soft
    Corporation.  Macintosh is a trademark of Apple Computer Inc. IBM  is  a
    registered  trademark  of International Business  Machines  Corporation.
    PageMaker  is  a  registered trademark of  Aldus  Corporation.  Hewlett-
    Packard is a trademark of Hewlett-Packard Company. Easel is a registered
    trademark of Interactive Images, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #1663  SYNERGISTIC SOFTWARE  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Programs on this disk must be unarchived using a program such as        ║
║    PKUNPAC (on disk 1330)                                               ║
║ To start COLORFIX program, type:  COLORFIX (press enter)                ║
║ To start FIREWORK program, type:  FIREWORK (press enter)                ║
║ To start GCP program, type:  GCP (press enter)                          ║
║                                                                         ║
║ To print COLORFIX documentation, type:  COPY COLORFIX.DOC PRN           ║
║ To print FIREWORK documentation, type:  COPY FIRE43.DOC PRN             ║
║ To print GCP documentation, type:  COPY GCP420.DOC PRN                  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1663

     Volume in drive A has no label
     Directory of A:\

    COLORFIX ARC     15716  11-18-88  11:48a
    COLORFIX MSG       299  11-18-88  12:03p
    FILE1663 TXT      3337  11-28-89  11:10a
    FIRE43   ARC     33735   2-25-89   9:05p
    FIRE43   MSG       306   2-25-89   9:05p
    GCP42ARC MSG       453   6-17-89   6:55p
    GCP42REL NOT      3734   6-22-89   3:26p
    GCP42S   ARC     50736   6-17-89   4:58p
    GCP42S   EXE     59272   6-24-89   1:33p
    GCP42S   ZIP     43684   6-17-89   5:04p
    GCP42ZIP MSG       453   6-17-89   6:59p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1002  11-28-89  12:20p
           13 file(s)     212765 bytes
                          103424 bytes free
