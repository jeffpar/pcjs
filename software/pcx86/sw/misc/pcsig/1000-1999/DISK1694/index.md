---
layout: page
title: "PC-SIG Diskette Library (Disk #1694)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1694/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1694"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORMGEN'S DISK DUPLICATOR"

    Need to make many copies of the same diskette and serialize them at the
    same time?  DISK DUPLICATOR is the program that can do it.
    
    With DISK DUPLICATOR, format, write, and verify can be done in one
    pass.  Both format and verify can be turned off if needed, for
    preformatted disks and for maximum speed.  An audible alarm even
    signals for disk change.
    
    DISK DUPLICATOR is excellent for making distribution copies of
    diskettes.  Serial numbers can be added to the disks for registration
    purposes.  DISK DUPLICATOR supports both high and low density 5.25" and
    3.5" diskettes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DUP.DOC

{% raw %}
```
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |      DUP 5.1
                             |
                             |      Disk Duplicator
                             |
                             |      ---------------------
                             |
                             |      (C) 1988-90 by
                             |
                             |      R.MacLean
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |
                             |      FormGen Corporation
                             |      13 Holland Drive
                             |      Bolton, Ontario, Canada
                             |      L7E 1G4
                             |
                             |      (416) 857-0022
                             |
                             |
                             |
                             |
                             |
                             |
                             |                ---------
                             |         ------|--       |              (tm)
                             |      --|         |      |------------------
                             |        |    -----|---   |  Association of
                             |        |   |         |--   Shareware
                             |         ---|    O    |     Professionals
                             |      ------|    |    |---------------------
                             |             ---------      MEMBER
                             |
                             |
                             |
     DUP 5.1                       Shareware                          Quick Doc
                                   =========
    |
    | "Shareware" is a term used to describe a system for distribution
    | of software.  Under the shareware concept, software may be freely
    | copied and passed along to others, or distributed through bulletin
    | board systems, etc.
    |
    | As a recipient of a shareware program, you may use the software
    | for a short trial period to determine if it meets your needs.  If
    | it does, you pay the registration fee.  By paying the fee, you are
    | granted the right to retain the software for your use.  If the
    | software is not suitable, then you may discard it.
    |
    | The shareware system provides substantial benefits the computing
    | community (of which YOU are a member):
    |
    | 1) You get to try out the software BEFORE you buy it so you know
    |    exactly what you're buying.
    |
    | 2) Shareware is substantially less expensive than most commercial
    |    programs.  You don't pay for costly marketing programs and
    |    fancy packaging.
    |
    | 3) You get access to a MUCH broader base of available programs.
    |    Thousands of excellent programs have been written by expert
    |    programmers who would never consider marketing commercially.
    |    Through the concept of shareware, these people make their
    |    programs available to the community.  Usually, all they ask in
    |    return is a small fee to reward them for the time and effort
    |    they've put into the program.
    |
    | The system is based entirely on the honor system, and generally
    | works quite well.  (Most people are honest and wouldn't violate
    | the trust placed in them by the author of the software.)
    |
    | Shareware is NOT free software - the author counts on your integrity.
    | Please register using the form the end of this manual.
    |
    | You are encouraged to copy this software and pass it along to
    | others who may be interested in using it.
    |
    | This program is produced by a member of the Association of Shareware
    | Professionals (ASP).  ASP wants to make sure that the shareware
    | principle works for you.  If you are unable to resolve a shareware
    | related problem with an ASP member by contacting the member directly,
    | ASP may be able to help.  The ASP Ombudsman can help you resolve a
    | dispute or problem with an
    | ASP member, but does not
    | provide  technical support              ---------
    | for members' products.           ------|--       |              (tm)
    | Please write to the           --|         |      |------------------
    | ASP Ombudsman at                |    -----|---   |  Association of
    | PO Box 5786,                    |   |         |--   Shareware
    | Bellevue, WA 98006               ---|    O    |     Professionals
    | or send a Compuserve          ------|    |    |---------------------
    | message via easyplex to              ---------      MEMBER
    | ASP Ombudsman 70007,3536
     DUP 5.1                 Disk Duplication Utility                 Quick Doc
                             ========================
                             (C)1988-90 - R.MacLean
    |
    |
    |  DUP is a duplication utility intended for use by small firms for
    |  the creation of distribution disks for their software.
    |
    |  It features a simple and informative user interface, and a number of
    |  unique and valuable features:
    |
    |        - audible signal for disk change
    |        - format, write and verify in one pass
    |        - format may turned off for pre-formatted disks
    |        - verify may be turned off for maximum speed
    |        - option to increment serial numbers during production
    |        - ability to read an entire master disk into a compressed
    |          image file, eliminating the need to read the master disk
    |          at the beginning of each duplicating session
    |        - multi-disk copying & autoloader control
    |
    |
    |                                  Setup
    |                                  =====
    |
    |  Before you can use DUP for the first time you MUST set it up for
    |  your particular system configuration.  If you have a 286 or 386
    |  machine, you may simply delete the supplied configuration file
    |  DUP.DRV.  DUP will automatically determine the number and type
    |  of drives in your system.  If you have a PC or XT class machine,
    |  or if you want to override the automatic configuration, will have
    |  to edit DUP.DRV to match your system configuration.
    |
    |  DUP.DRV contains a series of numbers separated by commas.  The first
    |  number represents the number of the last floppy drive in the system.
    |  (ie. A:=1, B:=2, C:=3, D:=4, E:=5, etc.)  Following this, there is
    |  a number representing the type of each drive (regardless of whether
    |  there is actually a corresponding drive in the system) from A: up to
    |  the last floppy.  The drive type numbers should be set as follows:
    |
    |        0 - hard drive or drive not present
    |        1 - 360K 5 1/4" floppy
    |        2 - 1.2M 5 1/4" floppy
    |        3 - 720K 3 1/2" floppy
    |        4 - 1.4M 3 1/2" floppy
    |  ie.
    |    if your system has a 360K 5 1/4" floppy as A:,a 360K 5 1/4" floppy
    |    as B:, C: is a hard disk, and a 720K 3 1/2" as D:, then your
    |    DUP.DRV file should contain:
    |
    |           4,1,1,0,3    (4 drives,360K,360K,hard disk,720K)
    |
    |  The file can be modified using your favorite text editor.
    |
    |

     DUP 5.1                   Starting the Program                   Quick Doc
                               ====================
    |
    |  To start DUP, simply type DUP and press [Enter].
    |
    |  A signon message will appear, and after pressing a key, the main
    |  screen will be displayed.
    |
    |
    |  -----------------------------------------------------------------------
    | |           Disk Duplication Utility           | (C) 1988-90 R. MacLean |
    |  -----------------------------------------------------------------------
    |  -----------------------------------------------------------------------
    | | Write  Read  Display  Options  Serial  Compression  Quit              |
    | | Produce duplicates from master image                                  |
    |  -----------------------------------------------------------------------
    |  ---------------------------------------------------------   -----------
    | |              Options & Status Information               | |           |
    | |---------------------------------------------------------| |           |
    | | Format disk during write       Yes  No  | |  Serial #   | |           |
    | | Verify CRC after write         Yes  No  | |  --------   | |           |
    | | Update program serial number   Yes  No  | |  Trk    0   | |           |
    | | Last serial #                           | |  Cyl    0   | |           |
    | |-----------------------------------------| |  Sec    0   | |           |
    | | Current Function:                       | |  Pos    0   | |           |
    | | Disk Status:   H  - - - - - - - -       | |-------------| |           |
    | | Description:                            | |  Drive  A:  | |           |
    | |-----------------------------------------| |  Track ##   | |           |
    | | ####################################### | |  Side   #   | |           |
    |  -----------------------------------------   -------------  |           |
    |  -----------------------------------------   -------------  |           |
    | |                                         | |   Ver 5.1   | |           |
    |  -----------------------------------------   -------------   -----------
    |
    |
    |  The main screen allows control of all duplication operations and
    |  displays status information.
    |
    |  The main functions are shown in a row near the top of the screen,
    |  and can be selected by either moving the highlight (using the arrow
    |  keys or spacebar) and pressing [Enter], or by typing the first
    |  letter of the desired function.
    |
    |
    |  WRITE (a duplicate disk)
    |
    |    Prompts for the type of image (360K, 720K, etc.), and then for
    |    the target drive(s), and then displays a list of disk images
    |    previously read.  The appropriate image is selected by
    |    highlighting it and pressing [Enter].
    |
    |

     DUP 5.1                 Disk Duplication Utility                 Quick Doc
                             ========================
    |
    |  READ (an original disk)
    |
    |    Prompts for the source drive, and then displays a list of disk
    |    images previously read.  If the disk has not previously been
    |    read into the system, select NEW FILE and enter an appropriate
    |    filename.  If a previous version of the disk is already present,
    |    simply highlight the name of the older image, and press return.
    |    The older image will be updated from the diskette.
    |
    |
    |  DISPLAY (serial number on a disk)
    |
    |    Prompts for the source drive, and then displays a list of disk
    |    images previously read.  It will then read and display the
    |    serial number stored on the disk in the selected drive.  This
    |    allows you to check the serial number on a produced disk.
    |
    |
    |  OPTIONS (set general disk options)
    |
    |    Allows the setting of the various system options.
    |
    |    Format... When ON will format each track prior to writing it,
    |              allowing the use of blank diskettes without the
    |              need to process them prior to software duplication.
    |
    |    Verify... When ON verifies the CRC for the track after each
    |              write.  This is a good check for media flaws but
    |              takes a little more time.
    |
    |    Serial #. When ON will a serial number in each disk that is
    |              produced.
    |              Several parameters must be set before this will
    |              work properly:
    |
    |    Data..... Retrieves the standard options that are stored with
    |              each master image, allowing you to modify them.
    |
    |    Mode..... Switches serial number mode between Automatic
    |              (where the system assigns an incremental serial
    |              number to each disk produced), and Manual (where
    |              the operator is prompted to enter each serial number
    |              as the disks are produced).
    |
    |

     DUP 5.1                 Disk Duplication Utility                 Quick Doc
                             ========================
    |
    |  SERIAL (set serial number parameters)
    |
    |    Allows the setting of the serial number parameters.
    |
    |    Data..... Retrieves the serial number parameters that are
    |              stored with each master image, allowing you to
    |              modify them.
    |
    |    Get S/N.. Searches a master disk for the location of a
    |              particular serial number string.
    |
    |    Track.... Allows you to set the track where the serial number
    |              is to be placed
    |
    |    Cyl...... Allows you to set the side where the serial number
    |              is to be placed
    |
    |    Sector... Allows you to set the sector where the serial number
    |              is to be placed
    |
    |    Position. Allows you to set the position where the serial number
    |              is to be placed
    |
    |    Last #... Allows you to set the last recorded serial number.
    |              The serial number of the next disk produced will have
    |              a serial number one higher than this.
    |
    |
    |  COMPRESSION (enable/disable data compression)
    |
    |    This option allows you to disable the data compression used
    |    when storing master images on the hard disk.
    |

     DUP 5.1                     Serial Numbers                       Quick Doc
                                 ==============
    |
    |  The serial number is a 10 character ASCII string imbedded in one of
    |  the larger files of the production software system.
    |
    |  The steps for imbedding a serial number are as follows:
    |
    |      1) Write a 10 character dummy serial number string into your
    |         main program or other disk file.  I recommend using
    |         "12345600A0" as this is the default that DUP searches for.
    |      2) Set the Compression option ON now - once the master is
    |         read, changing it will have no effect for this particular
    |         image.
    |      3) Read the master disk into an image file.
    |      4) Set the Serial Number Option ON.  (Options menu)
    |      5) Use the search function to scan the master disk and locate
    |         the position where the serial number is stored.  (Serial menu)
    |      6) Use the Last function to set the serial number to the last
    |         number copied (one less than the number you desire to be
    |         embedded in the NEXT copy to be produced).
    |
    |  The serial number routines are intended for use by KNOWLEDGEABLE
    |  PC users.  These routines expect accurate data and no attempt
    |  is made to verify input validity.  Inserting a serial number
    |  indiscriminately WILL make duplicated disks unusable.
    |
    |
    |                             RAM Buffer Option
    |                             =================
    |
    |  To speed the duplication of 360K disks (especially when the data
    |  compression option is used), you can set DUP to retain an image of
    |  the master disk in RAM.  This means that instead of reading the
    |  image track by track for every copy, DUP will read it only once
    |  and then make as many copies as you want without delay.
    |
    |  Your system will need to have 640K of RAM with at least 500K
    |  available to use this option.
    |
    |  To activate it, start DUP by typing:
    |
    |          DUP /R
    |
    |
    |                          Special Acknowledgement
    |                          =======================
    |
    |   Many thanks to Chip Rabinowitz at Innovative Data Concepts
    |   for both the idea and the assembly code for the data compression.
    |   Thanks to his contribution and assistance, we can enjoy a
    |   substantial reduction in the hard drive space used by our master
    |   images.
    |

 -----------------------------------------------------------------------------
|     -------------------------------------------------------------------     |
|    |  -------=======>>>>>>>  DUP  Registration  <<<<<<<=======-------  |    |
|     -------------------------------------------------------------------     |
|                                                                             |
|    DUP is a copyright program distributed on a "Shareware" basis,           |
|    that is, it may be freely distributed for TRIAL use.  This gives you     |
|    the benefit of being able to try it out BEFORE you buy.  If you don't    |
|    find it useful, simply destroy or give away your copy and accept my      |
|    thanks for giving it a shot.                                             |
|                                                                             |
|    If, however, you find it beneficial and wish to continue using it,       |
|    please register it by completing the bottom of this form and sending     |
|    the appropriate fee.  This will give you a nicely printed manual with    |
|    more detailed information, an update of the program including any new    |
|    features, and a clear conscience whenever you use the program.  If       |
|    you believe in the concept of shareware, it will also give you the       |
|    nice feeling that comes from knowing that you are backing up your        |
|    beliefs and are helping to encourage more development of this type       |
|    of distribution.                                                         |
|                                                                             |
|    *** BONUS! *** Your registration will also get you an Introductory       |
|    membership to Compuserve Information Service.  If you're not             |
|    familiar with CIS, it's the world's largest online network with games,   |
|    business information, program libraries, and much, much more.  You       |
|    simply dial a local number to connect your computer to a wide world      |
|    of services (including electronic mail direct to us)!  Your kit          |
|    includes a User Id, Password and a $15.00 credit!  This offer is         |
|    courtesy of the ASP and CIS.          |
|                                                                             |
|    The registration is a very low price, but it helps me to make a          |
|    living and to continue to maintain and improve the program.              |
|    If you do not register, but continue to benefit from the use of my       |
|    program, you are clearly violating the terms of my copyright, and        |
|    I will not be amused.                                                    |
|                                                                             |
|     THANK YOU!      ...for supporting shareware!                            |
|                                                Randy MacLean - DUP author   |
|-----------------------------------------------------------------------------|
|   Please register me as a DUP User!  RUSH my manual and update ASAP!        |
|   Here's my $25 registration fee.                                           |
|                                            Please charge my credit card:    |
|  -----------------------------------                                        |
| | Name:                             |       ------------------------------- |
| |-----------------------------------| VISA |       |       |       |       ||
| | Company:                          |      |-+-+-+-|-+-+-+-|-+-+-+-|-+-+-+-||
| |-----------------------------------| MC   |       |       |       |       ||
| | Address:                          |      |-+-+-+-|-+-+-+-|-+-+-+-|-+-+-+- |
| |-----------------------------------| AMEX |       |           |         |  |
| | City:                 State:      |       -+-+-+-|-+-+-+-+-+-+-+-+-+-+-   |
| |-----------------------------------|          -------                      |
| | Zip:                              | Expires |   |   |                     |
|  -----------------------------------           -+-+-+-                      |
|                                                                             |
|  mail to:                                                                   |
|                                                                             |
|     Randy MacLean              For faster service:                          |
|     c/o FormGen Corporation                                                 |
|     13 Holland Drive               in the US order toll free (800) 263-2390 |
|     Bolton, Ontario                         Canada & foreign (416) 857-4141 |
|     L7E 1G4                    Questions & Technical Support (416) 857-0022 |
 -----------------------------------------------------------------------------

```
{% endraw %}

## FILE1694.TXT

{% raw %}
```
Disk No: 1694                                                           
Disk Title: FormGen's Disk Duplicator                                   
PC-SIG Version: S2                                                      
                                                                        
Program Title: FORMGEN'S DISK DUPLICATOR                                
Author Version: 5.7                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
Need to make many copies of the same diskette, and serialize them at    
the same time?  DISK DUPLICATOR is the program that can do it.          
                                                                        
With DISK DUPLICATOR, format, write, and verify can be done in one pass.
Both format and verify can be turned off if needed, for preformatted    
disks and for maximum speed.  An audible alarm even signals for disk    
change.                                                                 
                                                                        
DISK DUPLICATOR is excellent for the person, or business, that needs to 
make distribution copies of diskettes.  Serial numbers can be added to  
the disks for registration purposes.  DISK DUPLICATOR supports both high
and low density 5 1/4" and 3 1/2" diskettes.                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
 - DUP ----------------------------------------------------------------------- 
|                                                                             |
|  DUP is a copyright work.                                                   |
|                                                                             |
|  Shareware distributors or bulletin board operators may distribute DUP      |
|  provided the following conditions are met:                                 |
|                                                                             |
|    1) DUP must be distributed as a complete system with all original        |
|       files included.                                                       |
|                                                                             |
|    2) DUP and its accompanying files may not be modified in any way.        |
|                                                                             |
|    3) No form of documentation may be added to the system.                  |
|                                                                             |
|    4) No other software may be included on the diskette (or in the .ARC     |
|       or .ZIP file in the case of a bulletin board posting), with the       |
|       exception of GO or START files intended to assist a new user.         |
|                                                                             |
|    5) No purchase fee may be charged.  (a nominal handling and shipping     |
|       fee of $10 or less is allowed)  The recipient must not feel that      |
|       he has "paid" for the software.                                       |
|                                                                             |
 ----------------------------------------------------------------------------- 


DUP - Disk Duplication Utility
==============================

Category: Utilities / Disk Copying

DUP is a package which considerably speeds the duplication of disks.
Master images are stored on your hard drive, but data compession saves
valuable space.  After this, copies can be produced at lightning speed.
Multi-disk option lets you use up to ten drives at once!  Produced disks
can be serialized at your option.  Many options, excellent user interface,
full status screen.  Very powerful, yet easy to use!  If you ever need
to make multiple copies of disks, DUP will make it quick and easy.
Shareware [ASP MEMBER]  Auth/Upl: R.MacLean

Unique features:
 - stores master images on hard drive
 - image compression option for master images
 - full screen status/information display
 - compatible with all disk capacities (360K, 720K, 1.2M, 1.44M)
 - multi-drive mode uses up to ten floppy drives
 - built in autoloader support
 - fast copy times
 - disk serialization option
 - Lotus style menus

No other system has all these features, or is as easy to use!

 -------------------------- Disk Files for DUP 5.x --------------------------- 
|                                                                             |
|   DUP      CFG    DUP configuration file                                    |
|   DUP      DOC    Brief documentation for unregistered version              |
|   DUP      DRV    DUP system drive list file (MUST BE CONFIGURED)           |
|   DUP      EXE    DUP program                                               |
|   DUP      OVL    DUP overlay file                                          |
|   DUP      PCX    Screen shot for publication (2.00"W x 1.75"H)             |
|   DUP      REV    DUP revision history                                      |
|   DUP      SON    DUP overlay file                                          |
|   DUP      TIF    Screen shot for publication (2.00"W x 1.75"H)             |
|   VENDOR   DOC    Vendor/BBS file including distribution terms, description |
|   UPDATE   DOC    Update notice                                             |
|   MANUAL   BAT    Prints brief documentation                                |
|   READ     ME     Brief instructions for getting started                    |
|                                                                             |
 -----------------------------------------------------------------------------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1694

     Volume in drive A has no label
     Directory of A:\

    DUP      CFG        33   7-18-90   1:47a
    DUP      DOC     22365   7-18-90   1:47a
    DUP      DRV        10   7-18-90   1:47a
    DUP      EXE     86322   7-18-90   1:47a
    DUP      INI        25   7-18-90   1:47a
    DUP      OVL      1975   7-18-90   1:47a
    DUP      PCX     10535   7-18-90   1:47a
    DUP      REV      2622   7-18-90   1:47a
    DUP      SON      1896   7-18-90   1:47a
    DUP      TIF      9891   7-18-90   1:47a
    DUPATO              43   7-18-90   1:47a
    MANUAL   BAT       121   7-18-90   1:47a
    UPGRADE  DOC      6967   7-18-90   1:47a
    VENDOR   DOC      4332   7-18-90   1:47a
    READ     ME        568   7-18-90   1:47a
    FILE1694 TXT      1999   8-29-90   5:36p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       727   1-01-80   9:34a
           18 file(s)     150471 bytes
                            4096 bytes free
