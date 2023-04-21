---
layout: page
title: "PC-SIG Diskette Library (Disk #599)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0599/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0599"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DREAM 1 OF 2 (600 ALSO IN THIS SET)"

    DREAM is a relational database program that comes in three diskettes,
    all three needed to complete the package.  The archiving procedure was
    used to combine the contents of original five DREAM disks into three.
    
    DREAM, produced by PC-Systems, is a relational database system with
    extreme power and flexiblity.  Much like dBASE, it can custom design
    database applications, which include reports, sorting abilities, query
    abilities, and data entry and retrieval abilities without writing
    code.  DREAM comes complete with over 200K worth of on-line and manual
    documentation which lead the user step by step through the program.
    DREAM can handle over 32,000 records per data file with over 1,500
    characters per fixed record length.
    
    Features:
    
    ~ Two modes of operation: technical and end user.
    ~ Three levels of data protection.
    ~ Multiple views of data.
    ~ Multiple record updates (batch processing).
    ~ Edit, format, and range tests on input.
    ~ Computations on input/output, including computations with dates.
    ~ Auto-generation and duplication of data fields and records.
    ~ Single data file reports - post or concurrent with data entry.
    ~ Relational operations for multiple files.
    ~ Data restructuring.
    ~ Copying/moving data from one file to another.
    ~ Screen painting for data entry and reports.
    ~ Windowing technique for multiple data files.
    ~ Unique report layout features.
    ~ Four character sizes for reports and labels.
    ~ Multiple look-up and data transfer from outside files.
    ~ On-line help and tutorial.
    ~ Interrupt routines using function keys.
    ~ Color selection.
    ~ ASCII file format and portability of data.
    ~ Five levels of user expertise.
    ~ Electronic note pad.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## INSTALL.DOC

{% raw %}
```
                                   PC SYSTEMS
                               307 Barwynne Lane
                               Wynnewood, PA 19151, U.S.A
                               tel. (215)649-8981

                                   D R E A M

                     Data Retrieval, Entry, And Management

                                  VERSION 2.2



                  COPYRIGHT (C) 1985, 1986, 1988 PC SYSTEMS

                               ALL RIGHTS RESERVED

===============================================================================
                              REGISTRATION
                              ------------

    Registration  fee for  DREAM  software package is  $59.00  payable
to PC-SYSTEMS. Registered users will receive notifications of future updates,
a copy of DREAM User Guide (shipping and handling charges are included in
the registration fee), and software support.
===============================================================================
                              INSTALLATION
                              ------------

   Before DREAM system can be used on your PC, it has to be installed. DREAM
software comes on two (2) diskettes labeled #1 and #2. The diskettes were
formatted for 360K.

VERY IMPORTANT: READ INFORMATION IN file READ-ME.DOC after installation is
                complete. Use TYPE command of DOS to display it, or same with
                Ctrl+PrtSc to obtain the hard copy on the printer.

NOTE: DREAM may also be installed and used with TWO FLOPPY DRIVES.
      Contact PC-SYSTEMS for details.

                           Systems With Hard Disk
                           ----------------------
1. We assume that your hard disk is formatted and that the necessary DOS files
   have been copied onto the hard disk.
2. Prompt C> should be displayed. Create directory called DREAM.
   The hard disk is assigned to drive C.
                            MKDIR C:\DREAM
3. Change directory         CHDIR  C:\DREAM
4. Insert DREAM system diskette #1 in drive A. If your hard drive id is C,
   then type
                            A:INSTALL   C
   Substitute the hard disk id if it is different then C.
5. Follow the procedure for DREAM system diskette #2 as required by
   the installation program.
6A.If your hard drive id is C, the system is installed, otherwise continue:
6B.Re-define the system parameters to reflect the specifics of your
   installation. At the prompt, type
                                      DREAM
   and press Enter key. This will start your first DREAM session.
   a) If your hard drive id is other than C, at initiation you will
      PRESS ANY KEY in response to warning messages about missing files.
   b) Press Enter key in response to the system's request for Access Name.
   c) Choose option 8 (System Parameters) of the Main menu. A list of system
      parameters and their current values will be displayed.
   d) Choose option 9 (Max Disks) and type the appropriate hard disk id to
      replace value of C.
   e) Choose option 2 (Program Disk Drive) and type the appropriated disk
      id to replace the value of C.
   f) Choose option 3 (Administration and Tutorial Drive) and type the
      appropriate disk id to replace current value of C.
   g) You may change other system defaults, but it is optional at this time.
      Choose option E of the System Parameters menu to save the changes and
      return to the Main menu.
   h) Choose option 9 of Main menu to exit DREAM.
Your system is now installed.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0599

     Volume in drive A has no label
     Directory of A:\

    DREAM2   ARC    207387   4-19-89   9:52a
    DREAM4   ARC     87534   4-18-89   3:51a
    DREAM5   ARC     49772   7-17-88   9:11a
    GO       BAT       666   3-22-90   4:34p
    INSTALL  BAT       409   7-16-88   4:28p
    INSTALL  DOC      3594  10-14-89   4:31p
    PKXARC   COM      9984   9-12-86
            7 file(s)     359346 bytes
                               0 bytes free
