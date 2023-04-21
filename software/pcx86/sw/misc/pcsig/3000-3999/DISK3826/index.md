---
layout: page
title: "PC-SIG Diskette Library (Disk #3826)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3826/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3826"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```

       ---->    Welcome to "Plug-In for Program Manager"  <----  
                                                           
                         _______
                    ____|__     |               (R)
                 --|       |    |-------------------
                   |   ____|__  |  Association of
                   |  |       |_|  Shareware
                   |__|   o   |    Professionals
                 -----|   |   |---------------------
                      |___|___|    MEMBER
                                                           

PLUG-IN README.DOC (April 16, 1993, Version 1.31)

This file contains the following sections:

        - What is Plug-In for Program Manager?
        - Installation Notes
        - User's Guide in On-line Help
        - Updating From a Previous Version of Plug-In
        - International Issues
        - Some Details About the Installation Procedure
        - Installing from a CD-ROM Drive
        - Obtaining the Most Up-To-Date Version of Plug-In
        - The Plannet Crafters BBS
        - Keeping Backups of Plug-In's Data Files
        - Using Microsoft's MS-MOUSE Utility (8.10 or 8.20)
        - Note to Windows 3.0 Users
        - How to De-Install Plug-In
        - Change History
        - How to Contact Plannet Crafters


WHAT IS PLUG-IN FOR PROGRAM MANAGER?

  Plug-In is a utility that dramatically improves Program Manager.

  Plug-In has received press coverage in numerous journals,
  including PC Magazine, PC/Computing, BYTE, and Windows Magazine.
  It is a recipient of the 1993 Windows Magazine WinAward for
  the top 100 Windows products.  It won the BYTE 1993 "User's Choice 
  Award for Shareware of the Year" (Jerry Pournelle, BYTE Magazine).

  Instead of replacing Program Manager, Plug-In simply makes it
  better.  When you run Plug-In, additional items are added to
  Program Manager's menus, and existing commands are enhanced.

  Major features include:

    - Complete group management.  This includes the ability to
      copy, activate, deactivate, and reposition all groups.
      You can remove groups that are used infrequently, and
      restore them when needed.

    - The run command is enhanced with a history list of the last
      25 commands entered, and includes a QuickDOS feature to
      easily run internal DOS commands.

    - You can now assign individual icons to each group!

    - A powerful icon browser lets you visually browse through
      your icons and includes a SpeedList feature to gain
      instant access to your favorite icons.

    - Custom cursors are provided for the standard pointer and
      hourglass.  This adds fun to your Windows environment and
      is great for use on laptops!

    - Detailed system information provides a rundown on your
      configuration and the memory usage by each application.

    - System resource displays and alarms are provided.  You
      will always know how much memory and system resources
      are available.

    - A QuickRun menu provides easy access to frequently used
      commands.

    - A "Save Settings Now" command lets you save your ProgMan
      desktop configuration.

    - A single command allow you to install a new Windows app.
      It allows you to view any ReadMe files before actually
      doing the installation.


  The cost for registration is only $20 plus shipping/handling.


INSTALLATION NOTES

  Once you have unarchived (or copied) all of Plug-In's files to a
  directory on your hard disk (e.g., C:\PLUGIN), run PLUGIN.EXE from 
  Windows.  Plug-In has a built-in install program which will copy
  a few small files to the Windows directory and create the 
  initialization file. 

  Keep in mind that Plug-In is fully integrated with Program Manager. 
  To access Plug-In, you use Program Manager's menus!

  Once installed, you should refer to:

        - The Quick Tour section in Plug-In's on-line Help.
        - Configure Plug-In (Options menu in Program Manager).

  That's all there is to it!  We hope you enjoy the program.  The trial
  license for Plug-In allows you to use it for a period of 21 days,
  after which time you must register it if you continue using it. 
  When you receive your registration number, simply enter it in the 
  "Enter Registration Number" dialog.


USER'S GUIDE IN ON-LINE HELP

  Plug-In contains a complete User's Guide in its on-line help system.
  You can select the "Help" button (or press F1) in all dialogs to go
  directly to specific help for that dialog.


UPDATING FROM A PREVIOUS VERSION OF PLUG-IN

  NOTE:  The following will retain your current configuration for Plug-In.

  1) Shutdown Plug-In by pushing the "Remove Plug-In (Shutdown)"
     button in the "Configure Plug-In" dialog (Options menu in ProgMan).

  2) UnArchive the most recent version of Plug-In into the SAME
     directory currently used for Plug-In (e.g., C:\PLUGIN).
     It is OK to overwrite the existing files in this directory.

  3) COPY GROUP.EXE to your Windows directory (Please don't forget
     to do this!).

  4) You are now updated!  Simply run PLUGIN.EXE to continue.  


INTERNATIONAL ISSUES

  Plug-In will operate under international versions of Windows.  
  However, there is one thing you must do for proper operation 
  if you are using Windows 3.1:  Edit (using NotePad) ProgMan.INI and
  define your StartUp group under the [Settings] section 
  (e.g., "StartUp=Autostart").

  We are planning fully internationalized versions of Plug-In
  for a future release.  Contact us for more details.
  

SOME DETAILS ABOUT THE INSTALLATION PROCEDURE

  If you get a message saying that, "Plug-In is being installed from a 
  location that may not be available during later Windows sessions," 
  this means that Plug-In is being installed from either a removable
  drive (i.e., a floppy drive) or a remote drive (i.e., a network drive).
  Plug-In sets up its initialization file to point to the location
  from which it was installed.  Because of this, you should not install
  Plug-In from a floppy drive.  However, it is fine to install from
  a network drive as long as it is always available from within Windows.

  The "Save Settings On Exit" option in Program Manager is turned
  off during the installation (you can still save on exit if you wish).
  We recommend that you use "Save Settings Now" instead.  Please refer
  to the on-line help for further details.
  
  Plug-In sets itself up to load each time Windows is started.  This 
  is the best way to get optimal use out of the program.  If you decide
  that you don't want to continue using Plug-In, simply disable the 
  "Run Plug-In when Windows starts" option in the configuration dialog.
  
  Plug-In places 5 files in your Windows directory.  These are:
  
        GROUP.EXE
        PLUGINQN.PIF
        PLUGINQN.BAT
        PLUGINQM.PIF
        PLUGINQM.BAT

  These files only take up about 7K bytes.  They are placed in the
  Windows directory because they need to be in a directory listed 
  in the PATH environment variable.  If you do not wish to have
  these files in your Windows directory, it is acceptable to place
  them elsewhere, as long as they are on your path (e.g., you could
  leave them in the directory with the rest of the Plug-In files if
  you added this directory to your PATH environment variable.)

  (Note that two other very small files, PLUGIN.INI and PLUGIN.HST,
  are created and maintained in the Windows directory).


INSTALLING FROM A CD-ROM DRIVE

  If you are installing Plug-In from a CD-ROM drive, you must first
  copy all the files to a directory on your hard disk (e.g, C:\PLUGIN).
  Then, run PLUGIN.EXE from the directory on your hard disk.


OBTAINING THE MOST UP-TO-DATE VERSION OF PLUG-IN

  If, for whatever reason, you want to be SURE that you have the 
  absolute latest version of Plug-In, you may contact Plannet Crafters
  directly.  We will ship you the latest version for a nominal charge
  of:
        $5 (including shipping / handling in the U.S. and Canada)
        $8 (including shipping / handling for International orders)

  Or, you may obtain the latest version directly from the Plannet Crafters 
  BBS.


THE PLANNET CRAFTERS BBS 

  Our BBS contains the latest version of Plug-In as well as other products 
  from Plannet Crafters.  

  It is available 24 hours / day, and supports baud rates up to 14.4 KBPS.  
  The number is (404) 740-8583.  


KEEPING BACKUPS OF PLUG-IN'S DATA FILES

  It is always a good idea to backup your data files!  Most of Plug-In's
  configuration data is kept in one file, PLUGIN.INI, which resides in
  the Windows directory.  Another file, PLUGIN.HST (also in the Windows
  directory) maintains the history list for the run command.  Both of
  these files are small, and a simple backup procedure is to copy them
  to a floppy disk on occasion.

  While on the topic of backups, you might also wish to keep backups of
  your group files.  Simply copy *.GRP (the group files) and *.G_P (the
  deactivated group files) from your Windows directory to a floppy disk.


USING MICROSOFT'S MS-MOUSE UTILITY (8.10 or 8.20)

  If you wish to use this utility and also want to make use of 
  Plug-In's custom cursors, you must not use the "growth" feature
  in the MS-MOUSE utility.  For more details, refer to the on-line Help.


NOTE TO WINDOWS 3.0 USERS

  There are a few commands (some of the group functions and tile 
  horizontal) that are only available under Windows 3.1.  The
  unavailable commands will be grayed out (disabled) in the menus.

  Plug-In requires two DLL files which are a part of the Windows 3.1
  retail package.  These files are COMMDLG.DLL and TOOLHELP.DLL.  If
  you don't have access to these files, you may contact Plannet Crafters
  and we will help you obtain them.

  Please be sure that you have the current versions of these DLL files
  on your system.  If either of these DLL's is dated earlier than
  March 10, 1992, you should try to obtain more current versions.


HOW TO DE-INSTALL PLUG-IN

  If you wish to de-install Plug-In from a system, do the following:

        1) Disable "Run Plug-In when Windows starts" in the Config
           dialog and press the OK button.  (If you fail to do this, 
           you must manually remove the Plug-In entry from either 
           the StartUp group or the "Load=" line in the WIN.INI file.)  
        2) Shutdown Plug-In by selecting "Remove Plug-In" in the 
           Config dialog.
        3) In the Windows directory, Delete the following files:
           PLUGINQ?.*, PLUGIN.INI, PLUGIN.HST, GROUP.EXE
        4) Delete all files in Plug-In's home directory (assuming
           this directory contains ONLY Plug-In files!)



CHANGE HISTORY

  1.00  - Initial Release

  1.01  - Keep the registration screen on top until it is dealt with.
        - Minor documentation changes
        - Display message if "Group Copy" to an existing group
        - Added "SWITCH" option to GROUP.EXE utility
        - Fixed a minor problem with parentheses in group/item names
        - The external Group utility wasn't updating customized group
          icons when a group was activated.

  1.10  - Change to 1.10 so that we can rename PLUGIN10.ZIP to PLUGIN11.ZIP
          This was necessary because many BBS's, etc. won't update a file
          with the same name.
        - Fixed a problem where Plug-In would claim it was being installed
          from a floppy drive when in fact it was not.
        - Increased the max number of QuickRun entries to 25 and the
          max number of SpeedList entries to 20.
        - Minor documentation changes.

  1.11  - Fixed a bug that caused a GP Fault when an application sent
          a broadcast notification of multiple changes to WIN.INI.  
          The only known example of this is selecting a different printer 
          from within the Page Setup dialog in Excel 4.0.
        - Miscellaneous changes to the README.DOC file.


  1.12  - Fixed a couple of problems relating to bugs in several
          256-color drivers on the market.  Since we couldn't fix
          the drivers, we modified the code to work around the problems.
          Note that one of these workarounds was to avoid compressing
          the large bitmaps in Plug-In.  This is why the PLUGIN.EXE file
          is significantly larger than previous versions.
        - Fixed a couple of minor grammatical errors in dialog text.
        - Fixed a problem where the highlited icon in the change icon
          dialog had a black background when it shouldn't  This only
          occured with certain combinations of system colors.
        - In the on-line help, added a jump to the Config topic from
          the QuickRun topic.
        - Fixed a problem involving load orders when more than one
          ProgMan enhancement utility was used on the same system.


  1.20  - Plug-In no longer assumes that a StartUp group is defined.
          If a StartUp group isn't present, Plug-In will be auto-loaded
          via WIN.INI settings
        - Blank entries inserted in the QuickRun menu now show up in
          the Configure QuickRun dialog so they can be deleted.
        - Some utilities that add an icon (or something else) to the
          title bar of the active application do not realize that Plug-In
          has attached itself to Program Manager.  This would cause
          Plug-In to become semi-detached when these utilities switched
          from Program Manager to another active application.  Plug-In
          now attaches itself to Program Manager in a way that avoids
          these problems.
        - If a laptop (or other computer) was started without a mouse,
          a problem could occur when Plug-In tried to load its custom
          cursors.  This has been fixed.
        - Made some modifications to the Registration Dialogs.
        - We are no longer distributing COMMDLG.DLL and TOOLHELP.DLL
          with the shareware version of Plug-In.  If you are running
          Windows 3.0 and don't have these files, please contact
          Plannet Crafters.

  1.21  - Fixed a problem where the highlited icon in the change icon
          dialog had a black background when it shouldn't  This only
          occured with certain combinations of system colors.  (Note:
          This problem was supposed to have been fixed in v1.12, but
          was accidentally left out...).

  1.30  - One of the fixes in v1.20 caused ProgMan to be unresponsive
          if "Minimize On Use" was set in ProgMan's Options menu.
          Even though the majority of users do not set the "Minimize
          on Use" option for ProgMan, this problem was deemed serious
          enough to justify a new minor release number.

        - Modified the default configuration for the QuickRun menu.

        - Added a topic in help on how to contact Plannet Crafters.

  1.31  - When the opening bitmap was disabled, it was not automatically
          discarded from memory.

        - Under some circumstances, a user would be repeatedly asked to
          re-enter the registration number.

        - Running HP's Dashboard utility could cause Plug-In's 
          "Exit Windows" dialog to appear.  

        - A rare bug existed that could cause strange behavior when 
          browsing an icon library using the "Change Icon" dialog.  

        - Added ".ICL" and ."CPL" to the "Icon Library" filetype for use
          in the "Change Icon" dialog.

        - A few minor changes to the registration dialogs.
          



HOW TO CONTACT PLANNET CRAFTERS

  If you have any questions about Plug-In, please contact us at:

               Plannet Crafters, Inc.
               2580 Runic Way
               Alpharetta, GA  30202
               USA

               phone (404) 740-9821 (9-6 Eastern U.S. Time)
               fax   (404) 740-1914 (24 hours /day)
               bbs   (404) 740-8583 (14.4 KBPS; 24 hours/day)

               EMail addresses
               CompuServe:     73040,334
               Internet:       73040.334@compuserve.com
               America Online: DMandell
               BIX:            dmandell
               GEnie:          D.MANDELL1
               Prodigy:        VSFB48A
               MCI Mail:       572-7179

  Thank you for trying Plug-In for Program Manager!

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
             P L U G - I N   F O R   P R O G R A M   M A N A G E R
             -----------------------------------------------------

                                 Version 1.31
                                --------------

                    V E N D O R    I N F O R M A T I O N
                    ------------------------------------

                         Last updated:  April 16, 1993

                         _______
                    ____|__     |               (R)
                 --|       |    |-------------------
                   |   ____|__  |  Association of
                   |  |       |_|  Shareware
                   |__|   o   |    Professionals
                 -----|   |   |---------------------
                      |___|___|    MEMBER
                                                           

This file provides information for Shareware Distributors, Disk Vendors
and Computer Clubs, BBS SysOps, etc. who wish to distribute the 
"Plug-In for Program Manager" package (also referred to as "Plug-In" in 
this document).


Compressed File Name:
--------------------

When distributing the Plug-In package in compressed form, please use
the file name "PLUGIN11" with an extension appropriate to the compres-
sion method (ZIP, PAK, ARC, LZH, etc.).  For example, when compressing
the program using PKZIP, use the file name "PLUGIN13.ZIP".  This will
help users locate the most current version of the program.  
If necessary (i.e., on CompuServe), the name may be shortened to "PLUGIN".


---------------------------------------------------------------------------
                           Product Description
---------------------------------------------------------------------------

Product Name:   Plug-In for Program Manager

Version:        1.31

Categories:     Windows, Windows utilities, Windows shells, menu systems

Keywords:       PLUG-IN PLUGIN WINDOWS 3.1 3.0 UTILITY SHELL DESKTOP
                ASP SHAREWARE 

BBS Description:

  Please refer to the FILE_ID.DIZ file, included with this package.

Vendor Description (Short)

  PLUG-IN FOR PROGRAM MANAGER v1.31 <ASP> - Dramatically improves 
  Windows Program Manager.  Instead of replacing ProgMan, Plug-In 
  simply makes it BETTER!  From Plannet Crafters.  Registration $20

Vendor Description (Long)

  PLUG-IN FOR PROGRAM MANAGER v1.31 <ASP> - is a Windows utility that 
  dramatically improves Program Manager. Instead of replacing ProgMan, 
  Plug-In simply makes it BETTER!  Major features include complete 
  group management (copy, activate / deactivate, reposition, StartUp), 
  run with history, individual icons for groups, detailed system info, 
  system resource displays & alarms, custom cursors, Save Settings Now, 
  a single command to install an application, QuickRun menu for easy 
  access to frequently used commands, and LOTS MORE!  Praised by
  the press.  Won Windows Magazine's 1993 WinAward.
  For Windows 3.1 & 3.0   From Plannet Crafters.  Registration $20

Registration Fee:       $20.00
                        Shipping / Handling - $2 U.S. / Canada
                                              $5 International

System Requirements:    Any system with Windows 3.x (Supports both
                        Windows 3.0 and 3.1).

Produced By:            Plannet Crafters, Inc.
                        2580 Runic Way
                        Alpharetta, GA  30202
                        USA
                        phone (404) 740-9821 (9-6 Eastern U.S. Time)
                        fax (404) 740-1914 (24 hours /day)

                        EMail addresses
                        CompuServe:     73040,334
                        Internet:       73040.334@compuserve.com
                        America Online: DMandell
                        BIX:            dmandell
                        GEnie:          D.MANDELL1
                        Prodigy:        VSFB48A
                        MCI Mail:       572-7179


---------------------------------------------------------------------------
                         Distribution Requirements
---------------------------------------------------------------------------

Individuals, Computer Clubs and User Groups who wish to distribute
the Plug-In package to friends or associates may do so in accordance with 
the restrictions outlined in this documentation.

Limited Distribution License:
-----------------------------

As the exclusive copyright holder for Plug-In, Plannet Crafters, Inc. 
authorizes distribution only in accordance with the following restrictions.

*---------------------------------------------------------------------------*
* ASP Approved Vendors in good standing are hereby given permission to      
* distribute the Plug-In package.  Non-ASP member vendors 
* must request prior permission before distributing the Plug-In package.                           
*                                                                           
* Plannet Crafters, Inc. also hereby grants permission to distribute the
* Plug-In package to Individuals, User Groups, Computer Clubs and BBS's 
* as long as distribution is in accordance with the following restrictions. 
*---------------------------------------------------------------------------*

The Plug-In package is defined as containing all the material listed in 
the PACKING.LST text file.  If any files listed in the PACKING.LST text 
file, or the PACKING.LST file itself, are missing, then the package is 
not complete and distribution is forbidden.  Please contact us to obtain 
a complete package suitable for distribution.

The Plug-In package - including all related program files and documentation
files - CANNOT be modified in any way and must be distributed as a complete
package, with the only exception explained in the next paragraph.  The
PACKING.LST text file contains a list of all files that are part of
the Plug-In package.

There is one exception to the above paragraph.  Many BBS's customarily 
add a small text file (advertisement) to each archived file.  This text 
file describes the BBS and tells people that the file was downloaded from 
that particular BBS.  Other BBSs add a  small one-line message with 
their BBS name and phone number into the compressed file, which will 
display when the file is uncompressed.  Either of these methods of
mentioning your BBS are acceptable and may be used, provided the program
and documentation is otherwise unmodified and complete.

No price or other compensation may be charged for the Plug-In package.
A distribution fee may be charged for the cost of the diskette, shipping
and handling, as long as the total (per disk) does not exceed
US$8.00 (U.S / Canada) or 12.00 (International).


Disk Sets & CD-ROMs:
--------------------

The Plug-In package CANNOT be sold as part of some other inclusive package.  
Nor can it be included in any commercial software packaging offer, without
a written agreement from Plannet Crafters, Inc.

ASP Approved Vendors who wish to distribute the Plug-In package as part
of a collection (such as PsL's MegaDisk set, or a CD-ROM package) may do 
so provided that all the other restrictions are met.

Vendors (non-ASP Vendor Members) who wish to distribute the Plug-In
package as part of a collection (such as PsL's MegaDisk set, or a CD-ROM 
package) must obtain permission from Plannet Crafters, Inc. prior 
to beginning such a distribution.

If you wish to add any of our programs to a CD-ROM or other collection,
please check the release date of the version you have.  If the version
is over six (6) months old then please contact us to ensure that you
have the most current version.  This version was released in April 1993.


Disk-of-the-Month (or Subscription) Distribution:
-------------------------------------------------

If you would like to distribute the Plug-In package as a Disk-of-the-Month,
or as part of a subscription or monthly service, then the following 
restrictions apply:

ASP Associate (Disk Vendor) Members in good standing are hereby given
permission to distribute the Plug-In package under the Disk-of-the-Month
style of distribution.

Others (non-ASP Members) must contact us in advance to ensure that you
have the most current version of the software.

You cannot use a Disk-of-the-Month distribution to use up your inventory
of old (out of date) disks.  Only current versions may be shipped as
Disk-of-the-Month disks.

The Plug-In package cannot be "rented" or "leased" to others.

You may not list any of our products in advertisements, catalogs, or
other literature which describes our products as "FREE SOFTWARE".
Shareware is "Try-Before-You-Buy" software, it is not free.

Plannet Crafters, Inc. prohibits the distribution of outdated
versions of the Plug-In package, without written permission from 
Plannet Crafters, Inc.  If the version you have is over six (6) months old,
please contact us to ensure that you have the most current version. 
This version was released in April 1993.

Licensee shall not use, copy, rent, lease, sell, modify, decompile,
disassemble, otherwise reverse engineer, or transfer the licensed
program except as provided in this agreement.  Any such unauthorized use
shall result in immediate and automatic termination of this license.

U.S. Government Information:  Use, duplication, or disclosure by the
U.S. Government of the computer software and documentation in this
package shall be subject to the restricted rights applicable to
commercial computer software as set forth in subdivision (b)(3)(ii) of
the Rights in Technical Data and Computer Software clause at
252.227-7013 (DFARS 52.227-7013).  The Contractor/manufacturer is
Plannet Crafters, Inc., 2580 Runic Way, Alpharetta, GA  30202, 
(404)740-9821.

All rights not expressly granted here are reserved to Plannet Crafters, Inc.


Applying for ASP Associate Membership:
--------------------------------------

If you would like to apply for ASP Associate Membership (to become an
ASP Approved Vendor), simply write to the following address and request
a Vendor Membership Application Package:

   ASP Executive Director
   545 Grover Road
   Muskegon, MI  49442-9427
   U.S.A.

or send a CompuServe message via CompuServe MAIL to ASP Executive
Director 72050,1433.  You may also FAX a request to the ASP Executive
Director at 616-788-2765.


Please Help Us Serve You Better:
--------------------------------

We would appreciate copies of anything you print regarding Plug-In.
Please send us a copy of any reviews, articles, catalog descriptions,
or other information you print or distribute regarding the Plug-In package.
Thank you for your time and assistance and for supporting the shareware
marketing concept.

Thank you for your support!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3826

     Volume in drive A has no label
     Directory of A:\

    README   DOC     16752   4-16-93   1:31a
    PACKING  LST      1707   4-16-93   1:31a
    FILE_ID  DIZ       442   4-16-93   1:31a
    VENDOR   DOC     10990   4-16-93   1:31a
    PLUGIN   EXE    225568   4-16-93   1:31a
    GROUP    EXE      6096   4-16-93   1:31a
    PLUGIN   HLP     62978   4-16-93   1:31a
    PLUGINQM BAT        28   4-16-93   1:31a
    PLUGINQM PIF       545   4-16-93   1:31a
    PLUGINQN BAT        37   4-16-93   1:31a
    PLUGINQN PIF       545   4-16-93   1:31a
    BATON    CUR       326   4-16-93   1:31a
    FATARR   CUR       326   4-16-93   1:31a
    HAND     CUR       326   4-16-93   1:31a
    MAN      CUR       326   4-16-93   1:31a
    SWATCH   CUR       326   4-16-93   1:31a
    WOMAN    CUR       326   4-16-93   1:31a
    NORMAL   CUR       326   4-16-93   1:31a
    HOURGLAS CUR       326   4-16-93   1:31a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001   8-03-93   2:52p
           21 file(s)     329328 bytes
                           20480 bytes free
