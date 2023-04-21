---
layout: page
title: "PC-SIG Diskette Library (Disk #3807)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3807/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3807"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FREEOFFR.DOC

{% raw %}
```
    A Project/Event Planner 1.1              (FREEOFFR.DOC - March 9, 1993)
    =======================================================================
                        A Free Registration Offer
    =======================================================================
    Dear User:

    I am looking for some "real world" examples of how this program is
    used.  For a limited time, the registration fee for this program
    will be waived if you send instead a realistic sample plan.  This
    sample plan must have a minimum of 35 events and must reflect a
    real situation.

    The sample plan should be created in a separate directory.  To set
    up a separate directory, first create the new sub-directory
    and then use the "Directories" option of the "Option" menu to set
    the data directory to the new directory.  Blank pvcal.dat (calendars),
    pvidx.dat (index), and pvrsc.dat (resource) files will automatically
    be created.  You can then proceed to set up the sample plan.

    When your sample is completed, copy ALL of the files in the data
    directory to a diskette (3-1/2" or 5-1/4") and mail it to me.
    For may mailing address, see Section 1 of the README.DOC file.

    Please include a brief description of your sample.  This description
    may be a text file on the diskette or a printed document.

    If you do send a sample plan, you must agree in advance that you
    are sending the sample plan with no restrictions or obligations
    placed upon Sapphire Software Inc.  You must further agree that
    the sample plan or a similar sample plan can be included in future
    releases of this program.

    With this in mind, please do not send any information that you
    consider to be prorietary or confidential.

    I am looking forward to some interesting sample plans.  Thank you and
    Happy Planning !

    Layton S. Fujii



```
{% endraw %}

## README.DOC

{% raw %}
```
    A Project/Event Planner 1.1               (README.DOC - March 9, 1993)
    Copyright 1992-1993 Sapphire Software Inc. - All Rights Reserved
    ======================================================================
        This file contains the following sections:
            1.  General Program and Author Information.
            2.  ASP Member.
            3.  Registration Requirements.
            4.  Description of Distributed Files.
            5.  Installation and Getting Started.
    ======================================================================
            ****************************************************
            ***   PLEASE NOTE NAME CHANGE FROM VERSION 1.0   ***
            ***----------------------------------------------***
            ***   A Project/Event Planner 1.1 replaces       ***
            ***   PlanView 1.0.  Refer to VENDOR.DOC and     ***
            ***   RELEASE.DOC for additional information.    ***
            ****************************************************
    =======================================================================
            Section 1.  General Program and Author Information.
    =======================================================================
    Dear User:

    This program can be used for quick overall project planning, activity
    scheduling, and resource scheduling.  You can assign income and costs
    to events (tasks) and resources to estimate a project's income and
    cost.  You can define events that are tied to predecessors.  For these
    related events, start and end times are automatically calculated.

    You can shift all events in a plan forward or backward in time.  You
    can define multiple calendars and use different calendars for each
    resource.  The program allows free-form drawing of events on a scale
    of days, weeks, months, or years.  On-line help and sample plans are
    provided.

    It will handle up to a few hundred events in a given plan, but it is
    not suited for highly complex projects where thousands of tasks are
    defined within a project plan.

    This program requires Microsoft Windows 3.0 or 3.1 and a mouse (or a
    equivalent pointing device).  (NOTE: Subsequent releases will require
    Microsoft Windows 3.1.)

    Thank you for trying this program.

                Layton Fujii
                Sapphire Software Inc.
                6650 Hawaii Kai Drive
                Suite 219
                Honolulu, Hawaii  96825

                Phone: (808) 395-5587
                CompuServe: 71223,3653

    ======================================================================
                         Section 2.  ASP Member
    ======================================================================
    This program is produced by a member of the Association of Shareware
    Professionals (ASP).  ASP wants to make sure that the shareware
    principle works for you. If you are unable to resolve a
    shareware-related problem with an ASP member by contacting the member
    directly, ASP may be able to help. The ASP Ombudsman can help you
    resolve a dispute or problem with an ASP member, but does not provide
    technical support for members' products.  Please write to the ASP
    Ombudsman at 545 Grover Road, Muskegon, MI 49442 or send a CompuServe
    message via CompuServe Mail to ASP Ombudsman 70007,3536.

    ======================================================================
                   Section 3.  Registration Requirements
    ======================================================================
    This is a shareware program.  If you find this program useful and find
    that you are using it after a reasonable trial period, you must make a
    registration payment to Sapphire Software Inc.  To register, use the
    program's "Registration" option in the "Help" menu or use the
    "register.doc" file.

    You are encouraged to pass a copy of this program (in its original form)
    along to your friends for evaluation.  Please encourage them to
    register their copy if they find that they can use it.

    ======================================================================
                Section 4.  Description of Distributed Files.
    ======================================================================
    1.  Informational Files:
        file_id.diz  -  Program summary information for BBS.
        freeoffr.doc -  Description of a free registration offer.
        readme.doc   -  The file you are reading.
        release.doc  -  Information about the differences between this
                        version and the previous version.
        register.doc -  Registration information.  Information is also
                        provided in the "Registration" option of the
                        program's "Help" menu.
        vendor.doc   -  Information for shareware vendors and BBS SYSOPs.

    2.  Required files for execution (may be placed in separate directory):
        aplanr.exe   -  The program executable.
        aplanr.hlp   -  On-line Windows help (not in text file format).

    3.  Sample data files (may be placed in separate directory):
        pvcal.dat    -  Calendar definitions file with sample definitions.
        pvidx.dat    -  Plan index file.
        pvrsc.dat    -  Resource definitions file with sample definitions.
        pvyymmdd.sss -  These are plan files that use the following naming
                        convention: yy = year, mm = month, dd = day,
                        sss = sequence number.

    4.  Windows Files:
        aplanr.ini   -  This file is not distributed, but it is a Windows
                        initialization file that is automatically created and
                        maintained.  It is located where Windows keeps its
                        other ".ini" type files.

    ======================================================================
                Section 5.  Installation and Getting Starting.
    ======================================================================
    1.  If upgrading from a previous version, refer to the RELEASE.DOC
        file.

    2.  To install from the standard distribution diskette received
        directly from Sapphire Software Inc.:
            a.  Create a directory to place the program files.  You
                may use the Windows File Manager or DOS.  For example
                in DOS type:
                    md c:\aplanr
            b.  Copy all the program files from the diskette to the
                new directory.  You may use the Window File Manager or
                DOS.  For example in DOS type:
                    copy  a:\*.*  c:\aplanr

        [NOTE: The above only applies to diskettes received directly from
        Sapphire Software Inc.  Files received from bulletin boards or
        Shareware vendors will typically be in compressed format.]

    3.  How to run the program:
        The program executable is named "APLANR.EXE".  You may execute
        it directly with the Windows File manager.

        If you want to set up an icon in a program group to execute
        APLANR.EXE, refer to the Windows Users' Guides for the
        appropriate version:
            Windows 3.0:  See Chapter 3 "Program Manager" in a section
                          titled "Changing the Contents of Groups"
                          near page 89.
            Windows 3.1:  See Chapter 3 "Program Manager" in a section
                          titled "Working with Program Items" near
                          page 78.
            
        Use the directory that APLANR.EXE is located in as the path for
        the default directory.

    4.  Upon starting the program for the first time, review the on-line
        help information that is available from the program's "Help" menu.
        You may print any of the help sections.

    5.  Look at the sample plans, resource definitions, and calendar
        definitions that are provided.

    6.  Refer to the RELEASE.DOC file for additional information regarding
        the current release.

    7.  By default, all data resides in the same directory as the program
        executable.  You may place your data in another location by doing
        the following:
            a.  Create the directory you want to store the data in.
            b.  Use the "Directories" option of the "Options" menu to tell
                the program to use this directory for all data.

    =======
    THE END
    =======

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
    A Project/Event Planner 1.1              (REGISTER.DOC - March 8, 1993)
    =======================================================================
                            DISCLAIMER AGREEMENT
    =======================================================================
    Users of this software must accept the following disclaimer of warranty:
        "This software is supplied as is.  The author disclaims all
        warranties, expressed or implied, including, without limitation,
        the warranties of merchantability and of fitness for any purpose.
        The author assumes no liability for damages, direct or conse-
        quential, which may result from the use of this software."

    =======================================================================
                                Registration
    =======================================================================
    To register, use the program's "Registration" option in the "Help" menu
    or use the form at the end of this document.
    
    This is a Shareware program and is provided at no charge to the user
    for evaluation.  Feel free to share it with your friends, but please
    do not give it away altered or as part of another system.  The essence
    of Shareware software is to provide personal computer users with
    quality software without high prices, and yet to provide incentive
    for programmers to continue to develop new products.

    If you find this program useful and continue to use it after a
    reasonable trial period, you must make a registration payment of $29
    to Sapphire Software Inc.
    
    Refer to the FREEOFFR.DOC file for information on a free offer.

    Payment of the registration fee will license one copy for your use
    only, on any one computer at any one time.

    Site-License arrangements may be made by contacting Sapphire Software
    Inc.

    COPYRIGHT - This software is owned by Sapphire Software Inc. with
    all rights reserved.
    =======================================================================
                            Updates and Support
    =======================================================================
    Upon payment of the registration fee, you will receive the most current
    version of the program.  If you already have the current version,
    you will automatically receive (at no charge) the next version if it
    becomes available within 90 days of your registration.

    You will be informed of future updates as they become available.

    Registered users receive free support on the two most recent releases
    of this program.

    =======================================================================

    ------------------------------------------------------------------
            REGISTRATION FORM - A Project/Event Planner 1.1
    ------------------------------------------------------------------
    SEND TO:    Sapphire Software Inc.
                6650 Hawaii Kai Drive
                Suite 219
                Honolulu, Hawaii  96825
                (808) 395-5587
    -----------------------------------------------------------------
    REGISTER TO:
            Name:________________________________________

         Company:________________________________________

         Address:________________________________________

                 ________________________________________

            City:________________________________________

           State:_____________________   Zip:____________

    -----------------------------------------------------------------
    REGISTRATION PAYMENT METHOD (select one):

           ___  $29.00 (USA) Payment enclosed.

           ___  $34.00 (USA) Please bill me (includes handling fee).

    -----------------------------------------------------------------
    COMMENTS OR SUGGESTIONS:







    -----------------------------------------------------------------

```
{% endraw %}

## RELEASE.DOC

{% raw %}
```
    A Project/Event Planner 1.1               (RELEASE.DOC - March 9, 1993)
    =======================================================================
                        Version 1.1 Release Notes
    =======================================================================
    1.  The product name of PlanView has been dropped, because of a
        trademark conflict.  Changes have been made so that this name does
        not appear on any reports or screens.  The program executable name
        has been changed to APLANR.EXE and the Windows initialization file
        will be APLANR.INI.

    2.  To upgrade from a previous version:
            a.  As a precautionary measure, be sure you have a backup
                copy of all your files, before upgrading.

            b.  Replace PLANVW.EXE with APLANR.EXE (program executable).
                Replace PLANVW.HLP with APLANR.HLP (program help file).

            c.  Change the Program Manager item properties to reflect the
                new executable file name.

            d.  DO NOT copy the sample plans of the new version into the
                same directory as your current plan files, because the sample
                plan files will over-write yours.  The sample plans in this
                release are the same as the previous version.

            e.  After the new version is installed, you can use the
                use the "Directories" option of the "Options" menu to tell
                the program to use your original data directory.

            f.  Go through the registration process again so that the
                startup notification dialog box will automatically close
                on startup.

            g.  After this version has been installed, you may delete the
                old PLANVW.INI file from the Windows area where
                initialization files are stored.  The new initialization
                file is called APLANR.INI.

    2.  A "Shift Events" options has been added to the "Options" menu
        which will let you shift all the events in a plan to an earlier
        or later time.

    3.  A "New" option has been added to the "Edit" menu so that events
        can be created using the keyboard.

    4.  It is now possible to move to fields or buttons in a dialog box
        by using the ALT key in combination with a letter.  You will see
        that the label for each field will have one letter underlined.
            For example:   
                               +------------------+
                         Name: |                  |
             underline-> -     +------------------+

            Type the ALT and N keys simultaneously to move directly
            to the Name field.
        
    5.  After registering the program, the startup notification dialog
        box will automatically close within 2 seconds instead of the
        previous 3 seconds.

    6.  Better date range checks have been placed into the program.
        The valid dates that can be assigned are from 1985 through
        2034.

    7.  A problem with the year label on the week scale of the time
        grid has been fixed.  Previously if the first column of the
        display represented a week which started in December and
        ended in January of the next year, the year label would show
        the year for December instead of the year for January.

    8.  A problem with the delete line command has been fixed.  If
        any event on the line to be deleted cannot be deleted, the
        delete command will stop.  The line will not be deleted
        and the events from the line below will not be shifted upward.

    9.  NOTE:  Future versions will require Windows 3.1.

    =======
    THE END
    =======

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
    A Project/Event Planner 1.1                (VENDOR.DOC - March 8, 1993)
    =======================================================================
                    ***** PLEASE NOTE NAME CHANGE *****
        This release replaces PlanView 1.0 (usually with a compressed
        filename starting with PLANVW or PLANVIEW).  Due to a trademark
        conflict the name of the program has been changed to
        "A Project/Event Planner"  Please replace the older version with
        this one and remove any references you may have to the word
        "PlanView".
                                            Thank you,
                                            Layton Fujii
    =======================================================================
    Dear Shareware BBS SYSOP/Vendor:

    You may distribute this software or place it on a Bulletin Board
    System as long you clearly identify the product as a shareware
    product as defined by the Association of Shareware Professionals (ASP).
    Sapphire Software Inc. reserves the right to deny distribution rights
    to any vendor or BBS.

    New releases will be automatically sent to ASP member vendors and BBSs.
    If you are not an ASP member, you should register with Sapphire
    Software Inc. as a shareware vendor so that you may be automatically
    updated with the latest releases of the product.  Please use the form
    at the end of this document to register.

    Program Description:
        For a description of this program, please refer to the FILE_ID.DIZ
        file and to section 1 of the README.DOC file.

    Program Category:
        Primary: Project Management
        Secondary: Time Management, PIM, etc.

    Compressed File Names:
        Please use "APLANR" as the first 6 characters.  You may also use
        "APLANR11" if you would like to include the version in the name.

    Search Keywords:
        Please use the following as the primary keywords for this program:
            Windows, Project, Planner, Time, Schedule, APLANR
        Feel free to add any others that you feel are appropriate.

    Thank you,
    Layton Fujii
    =======================================================================

    ------------------------------------------------------------------
        VENDOR REGISTRATION FORM - A Project/Event Planner 1.1
    ------------------------------------------------------------------
    SEND TO:    Layton Fujii
                Sapphire Software Inc.
                6650 Hawaii Kai Drive
                Suite 219
                Honolulu, Hawaii  96825

                Phone: (808) 395-5587
                CompuServe: 71223,3653
    -----------------------------------------------------------------
    REGISTER TO:
            Name:________________________________________

         Company:________________________________________

         Address:________________________________________

                 ________________________________________

            City:________________________________________

           State:_____________________   Zip:____________

           Phone:________________________________________

    -----------------------------------------------------------------
    DISTRIBUTION MEDIA: (select one):

            ___ 3-1/2 diskette (720K)

            ___ 5-1/4 diskette (1.2MB)

            ___ Download (You will be advised of an available source)

    -----------------------------------------------------------------
    COMMENTS OR SUGGESTIONS:







    -----------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3807

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        36   6-17-93   3:09p
    FILE_ID  DIZ       435   3-07-93  10:53a
    README   DOC      8717   3-09-93   8:22a
    REGISTER DOC      4039   3-08-93   1:16p
    VENDOR   DOC      3702   3-08-93  11:56a
    FREEOFFR DOC      1933   3-09-93   8:33a
    RELEASE  DOC      3851   3-09-93   8:27a
    APLANR   EXE    192064   3-09-93   8:55a
    APLANR   HLP     37295   3-08-93   1:15p
    PVCAL    DAT      7790  11-30-92  10:30a
    PVRSC    DAT      4784  11-30-92  10:30a
    PVIDX    DAT      3826  11-30-92  10:30a
    PV921127 001      9829  11-30-92  10:32a
    PV921127 003      8384  11-27-92   1:39p
    PV921127 004      8649  11-27-92   2:19p
    SHOW     EXE      2040   9-12-88  10:48a
           16 file(s)     297374 bytes
                           18432 bytes free
