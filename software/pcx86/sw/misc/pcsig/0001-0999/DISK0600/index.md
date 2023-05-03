---
layout: page
title: "PC-SIG Diskette Library (Disk #600)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0600/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0600"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DREAM 2 OF 2 (599 ALSO IN THIS SET)"

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

## READ-ME.DOC

{% raw %}
```
Disk No.:____
Program Title: DREAM (Data Retrieval, Entry, And Management)
Version: 2.2
Software Author: PC-SYSTEMS, Inc., 307 Barwynne Lane, Wynnewood, PA 19151

REGISTRATION
------------
    Registration fee for DREAM software package is $59.00 payable to
PC-SYSTEMS. Registered users will receive notifications of future updates,
a copy of DREAM User Guide (shipping and handling charges are included in
the registration fee), and software support.

Program Description
-------------------
    DREAM - Data Retrieval, Entry, And Management - is a menu-driven data
base management system with relational capabilities. Version 2.2 offers
several improvements over previous version, it is re-written in Microsoft
QuickBASIC Compiler for faster execution. We corrected several errors which
were noted by DREAM users. The size of the program was decreased by about 30%.

    One of the strong features of DREAM is that it accommodates both technical
and end users by providing two modes of operations. The TECHNICAL USER
(or "application designer") is supplied with powerful yet easy to understand
functions and with five (5) levels of complexity which are based on user
expertise with the system. Designer creates files, designs reports, sorts,
queries, etc. With this power, the entire data base application can be built
and made menu driven. Later in the non-technical or END USER environment,
someone without programming knowledge, such as a data entry person, can use
DREAM in a very structured, limited and easy manner to perform file
manipulations from the constructed system. In short, a technical user can build
a powerful system for someone else to use by employing menu driven options that
are nontechnical.

                            Main Features Of DREAM
                            ----------------------
      * two modes of operation: technical and end user
      * three levels of data protection
      * multiple views of data
      * powerful query and selection facility
      * multiple record updates (batch processing)
      * edit, format, and range tests on input
      * computations on input/output, including computations with dates
      * auto-generation and duplication of data fields and records
      * single data file reports - post or concurrent with data entry
      * scrolling and searching within generated reports
      * relational operations for multiple files
      * multi-file reports - post data entry
      * procedures for multiple report generation
      * data restructuring
      * copying/moving data from one file to another
      * sort on fields, sub-fields, and special formats
      * screen painting for data entry and reports
      * full screen operations
      * windowing technique for multiple data files
      * unique report layout features
      * summary reports with totals and subtotals
      * four character sizes for reports and labels
      * multiple look-up and data transfer from outside files
      * 140K of on-line help and tutorial (F4)
      * interrupt routines using function keys (F1 - F3).
      * multi-key index organization
      * color selection
      * re-definable set of keywords for the system and for each user
      * ASCII file format and portability of data
      * system catalog accessible for updates
      * five levels of user expertise
      * electronic note pad (Alt+F4)
      * descriptive titles of the files, reports, and procedures for
        easy access by end users

Hardware and Software requirements:

      * IBM PC, XT, AT or compatible
      * PC-DOS or MS-DOS version 2.02 or higher
      * 256K bytes RAM
      * two double-sided/double-density floppy disk drives or one hard disk
      * color monitor (CGA) and printers are supported

System specifications:

      * maximum fields per record is 60
      * maximum records per file is 32,767
      * maximum characters per field is 79
      * fixed record length with maximum of 1,580 characters
      * maximum total length of sort fields is 255 characters
      * maximum files per report and per relationship is 9
      * maximum total length of key fields (indices) is 80 characters
      * maximum view screens per data file is 30
      * maximum view screens per access name is 30
      * lookup table capacity is 10,000 characters (in memory)
      * maximum lookup fields per view screen is 10
      * maximum computational fields per view screen is 10
      * maximum levels of parentheses for query and computations is 5
      * maximum procedures per access name is 30

PROGRAM OPERATION
-----------------
A. Computer Configuration With A Hard Disk.
   ----------------------------------------
       Change directory to DREAM. To start a DREAM session in technical
   user mode, type DREAM at the prompt, and press Enter key. For end-user
   mode, type UD and press Enter key.

                    HOW TO USE SAMPLE APPLICATIONS
                    ------------------------------
  No.   Application                  Access Name    Relational
  --    -----------                  -----------    ----------

  1.   PERSONNEL ADMINISTRATION      EMPL             No

  2.   SUPPLY - DEMAND MODEL         TRAN             Yes

     At the start of DREAM session, the request "ENTER ACCESS NAME"
     is displayed. To use a sample application, enter one of the above access
     names; select an option from main menu and proceed. Complete explanation
     about the sample applications are found in User Guide.


WHEN INSTALLATION IS COMPLETE, PROGRAM IS INITIATED BY TYPING:

         DREAM [ENTER] - TECHNICAL (designer) ENVIRONMENT
         UD [ENTER] - NONTECHNICAL (end user) ENVIRONMENT

*******************************************************************************
* PC-SYSTEMS has recently released a new product: MODEL-S.                    *
*                                                                             *
* This is a  CASE  and  rapid  prototyping  tool  for  developing  data  base *
* applications.  In addition  to many features, it has a sophisticated screen *
* painter; the screens  and  forms may  be exported to  DREAM  for  execution *
* without any changes. MODEL-S may be purchased from PC-SYSTEMS for $99.00.   *
*******************************************************************************

File Descriptions
-------------------DREAM diskette #1
DREAM2     ARC  archived file:
  VIEWDATA EXE  Program module - data entry module
  VIEWMAIN EXE  Program module - data entry/report setup
  VIEWFORM EXE  Program module - print/display report
  VIEWQRY  EXE  Program module - user selection options
  VIEWSORT EXE  Program module - sort data
DREAM4     ARC  archived files
  COMMENU  EXE  Menu module
  ADMIN    EXE  Program module - administrative options
  REORG    EXE  Program module - reorganize report format
DREAM5     ARC  archived file:
  ???????? ADM  Catalog files
  HELPUSER ???  On-line help files
  ???????? DAT  Sample applications, data files
  ???????? SCR  Sample applications, screen files
  ???????? IND  Sample applications, index files
  ???????? CTL  Sample applications, control files
  ???????? FRM  Sample applications, form files
INSTALL    DOC  Description of installation procedure.
INSTALL    BAT  Installation driver for 2 floppy disk drives
PKXARC     EXE  Un-archiving program Version 1.1 by PKWARE

-------------------DREAM diskette #2
DREAM1     ARC  Archived files
  READ-ME  DOC  This review of DREAM
  BRUN20   EXE  QuickBASIC run-time module by MICROSOFT
  COMLIST  LST  program commamds file
  DESEDIT  EXE  Program module - design edit
  DESIGN   EXE  Design program module
  DREAM    BAT  Batch file for technical mode, hard disk drive
  UD       BAT  Batch file for user mode, hard disk drive
DREAM3     ARC  archived files
  REPMAIN  EXE  Program module - main routine
  REPSORT  EXE  Program module - sort related data bases
  REPQRY   EXE  Program module - query
  REPFORM  EXE  Program molule - display/print report
INSTALL    BAT  Installation batch file
PARM       SYS  Parameter system file

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0600

     Volume in drive A has no label
     Directory of A:\

    DREAM1   ARC    199832  10-14-89   4:13p
    DREAM3   ARC    158558   6-15-88   7:31p
    GO       BAT       666   3-23-90   2:24p
    INSTALL  BAT       268   7-16-88   3:33p
    PARM     SYS        87   7-17-88   8:25a
            5 file(s)     359411 bytes
                               0 bytes free
