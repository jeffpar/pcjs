---
layout: page
title: "PC-SIG Diskette Library (Disk #2574)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2574/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2574"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2574.TXT

{% raw %}
```
Disk No: 2574                                                           
Disk Title: CTRLCLIB - The CRTL + C Library                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: CTRLCLIB - The CTRL + C Library                          
Author Version: 1.0                                                     
Author Registration: $30.00                                             
Special Requirements: Microsoft or Borland C & C++ compilers and #1364 P
                                                                        
CTRLCLIB - The Ctrl+C Library, contains C-language functions that       
programmers can use to manage user-initiated interrupts.                
                                                                        
Using functions from CTRLCLIB, programmers can have full control over   
the following kinds of user-initiated program interrupts:               
                                                                        
All types of program``breaks'' -- CTRL-c, CTRL-break, CTRL-2, and ALT-3.
                                                                        
The ``pause'' keys -- CTRL-s, and 'pause' (or CTRL-NUMLOCK).            
                                                                        
The print screen keys -- print-screen, CTRL-p, CTRL-printscreen, and    
others.                                                                 
                                                                        
There are functions to trap the system reset keys, and/or force either a
warm or cold reboot.  There are functions to capture and control the    
setting of all 'lock' keys such as caps-lock and num-lock. Facilities   
exist for capturing keyboard make/break codes, if needed, and popular   
C-compilers are supported.  Registration includes FULL SOURCE CODE and  
additional memory-model libraries.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║      <<<<  PC-SIG Disk #2574  CTRLCLIB - THE CTRL+C LIBRARY  >>>>       ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the documentation and installation instructions, type:        ║
║                  COPY README.1ST PRN  (press Enter)                     ║
║                                                                         ║
║  To view the Quick Reference file, type:  TYPE QUICKREF.DOC  (Enter)    ║
║                                                                         ║
║  To print the registration form, type:  COPY REGISTER.FRM PRN  (Enter)  ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```

          CTRLCLIB - The Ctrl+C Library - History File
          ============================================


          09/15/90 - Ver. 1.0 Alpha test disk sent to testers.

          10/15/90 - Ver. 1.0 Beta test disk sent to beta testers.

          12/15/90 - Ver. 1.0 Shareware Master released.
```
{% endraw %}

## QUICKREF.DOC

{% raw %}
```







                 CTRLCLIB - The Ctrl+C Library - Quick Reference Guide


          int  BreakFlag( int action, int flagset )
          Returns: the current effective setting of the flag.


          int  CapsLock( int setting )
          Setting:L_OFF, L_ON, L_ALWAYSOFF, L_ALWAYSON, L_TOGGLE, zero, NULL
          Returns: the functions previous setting; 0 for 1st time


          int  CtrlcLibSetup( unsigned int varg)
          Setting:FCTRLC,CTRLALTDEL,PAUSEKEY,CTRLS,CTRLP,PRINTSCREEN,
                  SYSREQ,CTRLC,CTRLBREAK
                        (Note: FCTRLC includes CTRLC and CTRLBREAK)
          Returns: a count of the interrupt management handlers installed.


          void CtrlcLibCleanup( void )
          Returns: void


          void CtrlAltDel( int action )
          Action: DISABLE, ENABLE
          Returns: void


          void CtrlBreak( int action )
          Action: DISABLE, ENABLE
          Returns: void


          void CtrlC( int action )
          Action: DISABLE, ENABLE
          Returns: void


          void CtrlP( int action )
          Action: DISABLE, ENABLE
          Returns: void


          void CtrlS( int action)
          Action: DISABLE, ENABLE
          Returns: void








          void FullCtrlC( int action )
          Action: DISABLE, ENABLE
          Returns: void


          int  InsertLock( int setting)
          Setting:L_OFF,L_ON,L_ALWAYSOFF,L_ALWAYSON,L_TOGGLE,zero,NULL
          Returns: The functions previous setting;  zero 1st time called


          void KeyboardHandler( int action )
          Action:  INSTALL, REMOVE
          Returns: void


          int  NumLock( int setting )
          Setting: L_OFF,L_ON,L_ALWAYSOFF,L_ALWAYSON,L_TOGGLE,zero,NULL
          Returns: The functions previous setting; zero the 1st time called.


          void PauseKey( int action )
          Action: DISABLE, ENABLE
          Returns: void


          void PrintScreen( int action )
          Action: DISABLE,ENABLE
          Returns: void


          unsigned QueryCtrlC( void )
          Returns:  a break key value: CTRLC,CTRLBREAK,CTRL2,ALT3


          unsigned QueryKeyPad5( void )
          Returns:  a boolean status flag indicating if keypad 5 was pressed.


          unsigned QueryPrtScr( void )
          Returns: a print screen value:CTRLP,CTRLPRTSCR,PRINTSCEEN,zero


          unsigned QuerySysReq( void )
          Returns: SYSREQ, zero


          int  ScrollLock( int setting )
          Setting: L_OFF,L_ALWAYSOFF, L_ALWAYSON,L_TOGGLE,zero,NULL
          Returns: Previous setting or zero








          void ShowCtrlC( void )
          Returns: void


          void SysReq( int action )
          Action: INSTALL, REMOVE
          Returns:  void


          void SystemReset( int action )
          Action: WARMBOOT,COLDBOOT
          Returns: void
```
{% endraw %}

## SYSOP.DOC

{% raw %}
```

     CTRLCLIB - The Ctrl+C Library(Tm) Ver. 1.0  -  BBS SYSOP Information

     Copyright 1990, TRENDTECH CORPORATION,  All Rights Reserved.
     Published by Trendtech Corporation, Inc.,  Wayne, NJ  07470

                            _______
                       ____|__     |     MEMBER
                    --|       |    |-------------------
                      |   ____|__  |  Association of
                      |  |       |_|  Shareware
                      |__|   o   |    Professionals
                    -----|   |   |---------------------
                         |___|___|               (R)
                    

     This file provides information for bulletin board Sysops who wish to
     distribute the Shareware version of "CTRLCLIB - The CTRL+C Library"
     via their BBS systems.   Sysop's please note: It would be a good idea
     to read VENDOR.DOC for full product description and distribution
     restrictions.

     We explicitly permit uploads of the Shareware version of CTRLCLIB to
     BBS systems.  Uploading the registered version containing source is
     not permitted and is a violation of copyright laws.

     Please note, if your BBS is associated with a commercial or user-group
     Shareware library which distributes disks for a fee, you must obtain
     permission in writing from Trendtech Corporation BEFORE placing
     CTRLCLIB in your library.  See the file VENDOR.DOC for distribution
     details.  This restriction does not affect your permission to place
     CTRLCLIB on your BBS as long as you are not charging a fee for its
     distribution, other than normal user fees for general use of your
     board.

     If you have any questions about CTRLCLIB please contact us by any of
     the following methods:

     CompuServe:    76210,771

     Voice:         (201) 694-8622, days; Eastern U.S. time

     FAX:           (201) 694-2543,  24 hrs.

     US Mail:       Trendtech Corporation
                    P.O. Box 3687
                    Wayne, NJ  07474-3687


     An uploaded copy of the Shareware version of CTRLCLIB should normally
     include the following files when everything is uncompressed:


          README.1st     <- Latest information and what to do
          MSC5SH.ZIP     <- Microsoft 5.1 archive library
          MSC6SH.ZIP     <- Microsoft 6.0 archive library
          QC25SH.ZIP     <- Microsoft Quick-C 2.5 archive library
          TC20SH.ZIP     <- Borland Turbo-C 2.0  archive library
          TCXXSH.ZIP     <- Borland Turbo-C++ 1.0 archive library
          QUICKREF.DOC   <- Summary of function calls
          CTRLCDOC.ZIP   <- The User's Manual
          CLDEMO.EXE     <- Demo program
          BOOTDEMO.EXE   <- Demo program for system reset
          CTRLC.H        <- CTRLCLIB header file
          CLDEMO.C       <- Source code for Demo program
          BOOTDEMO.C     <- Source code for reboot demo program
          HISTORY.DOC    <- Revision history
          REGISTER.DOC   <- Registration form
          VENDOR.DOC     <- Distribution notes for disk vendors
          SYSOP.DOC      <- Distribution notes for BBS sysops (this file)


     If one or more of the above files are missing, please contact
     Trendtech Corporation by VOICE: (201) 694-8622, or FAX: (201) 694-2543
     and let us know.


     ARCHIVING

          You can use any good quality archiving software to compress the
     CTRLCLIB software before uploading to your BBS.  We strongly recommend
     PKZIP from PKware,  especially since portions of the CTRLCLIB package
     including the User's Guide were compressed using PKZIP and PKSFX from
     PKware.


     PRODUCT NAME AND DESCRIPTIONS

     The following archived file name should be used for CTRLCLIB Version
     1.0 for distribution on BBS's:

                    CTRLC10.xxx

                              where xxx is the archive used;
                              i.e. .ZIP,  .ARC,  .LHZ,  .ZOO, etc...
     ---------------------------------------------------------------------
     SHORT FORM:

     CTRLCLIB V1.0 - Interrupt Management Library (ASP)

     A complete library of C functions for interrupt management control
     including full control-c protection.  Source code with registration.
     $30.00.


     ---------------------------------------------------------------------
     LONG FORM:

     CTRLCLIB Ver. 1.0 - Interrupt Management Library (ASP)

          CTRLCLIB - The Ctrl+C Library, contains C-language functions that
     programmers can use to manage user-initiated interrupts.  Using
     functions from CTRLCLIB, programmers can have full control over the
     following kinds of user-initiated interrupts:  All types of program
     "breaks" - control-c, control-break, control-2, and alt-3; the "pause"
     keys - control-s, and 'pause' (or control-numlock); the print screen
     keys - print-screen, control-p, and control-printscreen,  and others.
     There are functions to trap the system reset keys, and/or force either
     a warm or cold reboot.  There are also functions to capture and
     control the setting of all 'lock' keys such as caps-lock and num-lock.
     Facilities exist for capturing keyboard make/break codes if needed.
     Popular C-compilers are supported.  Registration includes the latest
     version with FULL SOURCE CODE and technical support.  $30.00.


     ---------------------------------------------------------------------

     TO PRINT THIS FILE

          This file is formatted for printer output and contains form feed
     characters.  To print this file on any printer, type the following
     MS-DOS command:

                           COPY  SYSOP.DOC  PRN <cr>



                      ** End of SYSOP.DOC for CTRLCLIB **
     *
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

        CTRLCLIB - The Ctrl+C Library(Tm) Ver. 1.0  - VENDOR Information

     Copyright 1990, TRENDTECH CORPORATION,  All Rights Reserved.
     Published by Trendtech Corporation, Inc.,  Wayne, NJ  07470

                            _______
                       ____|__     |     MEMBER
                    --|       |    |-------------------
                      |   ____|__  |  Association of
                      |  |       |_|  Shareware
                      |__|   o   |    Professionals
                    -----|   |   |---------------------
                         |___|___|               (R)
                    

     GENERAL COPYING AND DISTRIBUTION REQUIREMENTS

     The software distributed on this disk, known as "CTRLCLIB - The Ctrl+C
     Library",  is copyrighted material and is subject to certain copying
     and distribution restrictions.

     For purposes of this document, any person or organization distributing
     software on disk or through any other medium is considered a disk
     vendor, whether or not fees are charged, and whether or not the
     organization is non-profit.

     Vendors who distribute software without charging a fee of any kind may
     distribute this software, provided they comply with all the terms and
     conditions listed in this document and/or in the accompanying software
     documentation.

     Vendors who charge a fee of any kind, whether it is a "membership"
     fee, "shipping and handling" charge, "copying" fee, or other type of
     fee, must obtain permission from Trendtech Corporation in order to
     distribute CTRLCLIB.  If your are a vendor approved by the Association
     of Shareware Professionals (ASP), you may proceed to distribute
     CTRLCLIB under the terms and conditions listed in this document an/or
     the accompanying software documentation.  However, ASP-approved
     vendors must notify Trendtech Corporation of their INTENTION to
     distribute the software, and must indicate which version of CTRLCLIB
     they have.  Under no circumstances may outdated versions or registered
     versions of CTRLCLIB be distributed.

     Vendors who are not ASP-approved must write to Trendtech Corporation
     to obtain permission BEFORE distributing CTRLCLIB.

     Trendtech Corporation reserves the right to withhold or withdraw
     permission to distribute CTRLCLIB from anyone at any time for any
     reason.
     To apply for distribution permission, send a written request to:

                    Trendtech Corporation
                    CTRLCLIB Distribution
                    P.O. Box 3687
                    Wayne, NJ 07474-3687

         Or call:   FAX: (201) 694-2543    VOICE: (201) 694-8622

     You may distribute CTRLCLIB on the following terms and conditions:

     - You do not rename, change, or omit any of the files that are a part
       of CTRLCLIB unless you receive express permission to do so in
       writing from Trendtech Corporation,

     - CTRLCLIB,  when listed in vendors' catalogs, advertisements,
       brochures, mailers, etc. must be named "CTRLCLIB" and not some other
       name or pseudonym.  Use of any other name than "CTRLCLIB" will
       constitute cause for revocation of vendor's distribution rights.

     - CTRLCLIB may NOT be sold as part of some other more inclusive
       package without the express written permission of Trendtech
       Corporation.

     - CTRLCLIB must not be distributed with other Shareware or public
       domain programs on the same floppy disk without permission from
       Trendtech Corp.  CTRLCLIB may be combined on the same disk with
       other C-language libraries authored by ASP members without
       permission from Trendtech.  The CTRLCLIB may be included in
       Shareware compilations sold on CD-ROM disks or "Mega-Disks" without
       permission from Trendtech.

     - Under no conditions will CTRLCLIB be "rented" or leased to others.

     - Printed copies of the User's Guide and Reference Manual may not be
       distributed in any form without a license from Trendtech
       Corporation.

     - Any distribution of the Shareware version of CTRLCLIB over bulletin
       boards and/or national telecommunication services will be limited to
       distributing a single archived file containing the contents of the
       entire Shareware distribution disk and NO charge above the standard
       charge for connect time will be allowed.  See SYSOP.DOC for details.

     - You do not advertise CTRLCLIB as "free", "cheap", or "public
       domain".  Vendors must comply with the standards set by the
       Association of Shareware Professionals (ASP).

     If you are unable or unwilling to comply with these terms and
     conditions, do not distribute this software.

     If you indicate authors' ASP membership for products listed in your
     catalog, please do so in your listing for CTRLCLIB.

     For information on becoming an ASP-approved Vendor write to:

          VENDOR MEMBERSHIP CHAIR
          Association of Shareware Professionals
          545 Grover Road
          Muskegon, MI  49442-9427


     We strongly recommend you consider becoming an ASP approved vendor if
     you have not already done so.  The ASP vendor member program reduces
     the workload for both authors and vendors alike, and helps give
     customers confidence that reasonable standards are met in the
     distribution of Shareware products.


     Software reviewers:  If you plan to review this software for
     publication, please contact us first to make sure you have the most
     recent upgrade version of the product and that the ordering
     information and registration fee supplied to your readers will be
     accurate.

                         CTRLCLIB - The Ctrl+C Library

             A C-Function Library for Interrupt Management Control

     CTRLCLIB contains C-language functions that system designers, software
     developers, and programmers can use to help their PC programs manage
     the user-initiated class of interrupts such as control-C, control-
     break, system reset, an others.  User-initiated interrupts are
     software/hardware interrupts that are generated when PC users press
     unique keystroke combinations while running application programs under
     MS-DOS.

     With functions from CTRLCLIB libraries, programmers can gain control
     over and program for, the following kinds of interrupts:  All types of
     user-initiated program "breaks" - control-c, control-break, control-2,
     and alt-3; the "pause" keys - control-s, and 'pause' (or control-
     numlock); the print screen keys - print-screen, control-p, and
     control-printscreen,  and others. The program can trap the system
     reset keys, and/or force either a warm or cold reboot.  There are
     functions to capture and control the setting of all 'lock' keys such
     as caps lock and num lock.  Programs can examine keyboard make/break
     codes as they are typed by the user.

     What we are doing with CTRLCLIB is attempting to "pull it all
     together" and create a standard programming support library of easy-
     to-use callable C-functions to trap critical keypresses that cause
     program interrupts and unexpected program termination.  CTRLCLIB is
     the result of a long-term effort to create an integrated set of
     interrupt management functions written entirely in C, and callable
     from any program.  No assembly language knowledge or MASM compilers
     are needed.  Our goal is to make CTRLCLIB the definitive MS-DOS
     standard for managing user-initiated program interrupts.

     The Shareware version of CTRLCLIB will contain libraries for both the
     small and large memory model for popular C-compilers.  The registered
     version will contain FULL SOURCE code and libraries for two additional
     memory models, medium and compact.


     REGISTRATION:

     The SINGLE-USER Registration Fee for CTRLCLIB is $30.00 in U.S. Funds.
     Shipping and Handling is an additional $3.00 for domestic customers,
     $5.00 for Canada customers, and $10.00 for overseas customers.
     Payment may be made with VISA or MASTERCARD, postal money order, and
     checks, in which the amount must be expressed in U.S. Funds and drawn
     on a U.S. Bank.  Site licenses and special purpose licenses are also
     available.  Authorized Purchase Orders will be accepted for site
     licenses.  Write, fax, or call Trendtech  Corporation for General
     Licensing Provisions and fee schedules.


     SUGGESTED PRODUCT NAMES AND DESCRIPTIONS

     The following are suggested product names, titles,  and descriptions
     that can be used in vendor catalogs, brochures, ads, mailings, etc.
     There is both a short form and a long form.

     CTRLCLIB can be listed under any of the following categories:
     PROGRAMMING, LANGUAGES, LIBRARIES, TOOLS, UTILITIES.


     =====================================================================
     SHORT FORM:

     CTRLCLIB V1.0 - Interrupt Management Library -$30.00 (ASP)

     A complete library of C functions for interrupt management control
     including full control-c protection.  Source code with registration.


     =====================================================================
     LONG FORM:

     CTRLCLIB Ver. 1.0 - Interrupt Management Library (ASP)

          CTRLCLIB - The Ctrl+C Library, contains C-language functions that
     programmers can use to manage user-initiated interrupts.  Using
     functions from CTRLCLIB, programmers can have full control over the
     following kinds of user-initiated program interrupts:  All types of
     program "breaks" - control-c, control-break, control-2, and alt-3; the
     "pause" keys - control-s, and 'pause' (or control-numlock); the print
     screen keys - print-screen, control-p, and control-printscreen,  and
     others. There are functions to trap the system reset keys, and/or
     force either a warm or cold reboot.  There are also functions to
     capture and control the setting of all 'lock' keys such as caps-lock
     and num-lock.  Facilities exist for capturing keyboard make/break
     codes if needed.   Popular C-compilers are supported.  Registration
     includes FULL SOURCE CODE and additional memory-model libraries.
     $30.00 (ASP).


     =====================================================================

                              =-=-=-=-=-=-=-=-=-=

     CTRLCLIB is produced by William Letendre of Trendtech Corporation, a
     member of the Association of Shareware Professionals (ASP) since 1987.

     The ASP logo is a registered trademark of the Association of Shareware
     Professionals.


     TO PRINT THIS FILE:

     This file is formatted for printer output and contains form feed
     characters.  To print this file on any printer, type the following
     MS-DOS command:

                           COPY  VENDOR.DOC  PRN <cr>



                           *** End of VENDOR.DOC ***
     *
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2574

     Volume in drive A has no label
     Directory of A:\

    README   1ST     11050   1-15-91
    MSC5SH   ZIP     11724   1-15-91
    MSC6SH   ZIP     11485   1-15-91
    QC25SH   ZIP     14866   1-15-91
    TC20SH   ZIP     10652   1-15-91
    TCXXSH   ZIP     10949   1-15-91
    QUICKREF DOC      2979   1-15-91
    CTRLCDOC EXE     54362   1-15-91
    CLDEMO   EXE     54702   1-15-91
    BOOTDEMO EXE     29106   1-15-91
    CTRLC    H        5485   1-15-91
    CLDEMO   C       47470   1-15-91
    BOOTDEMO C        6720   1-15-91
    HISTORY  DOC       311   1-15-91
    REGISTER FRM      8265   1-15-91
    VENDOR   DOC     11308   1-15-91
    SYSOP    DOC      5905   1-15-91
    FILE2574 TXT      2517   3-18-91  11:01a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1002   3-18-91   1:22a
           20 file(s)     300896 bytes
                           10240 bytes free
