---
layout: page
title: "PC-SIG Diskette Library (Disk #2279)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2279/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2279"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EASYMAIL - NETWORK EMAIL"

    Here's a very easy-to-use electronic mail program for networks which
    offers most of the features that commercial programs provide.
    
    The interface consists of pull-down menus and single keystroke access
    to all functions with extensive on-line Help.  EASYMAIL provides each
    authorized user with a complete environment for creating documents,
    selecting addressees, reading mail, and tailoring the program to their
    specific needs.  Other features include text importing, document
    printing, and mail archiving.  It works on all NetBIOS compatible
    networks (all popular networks). This version allows up to five users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DATAFILE.DOC

{% raw %}
```
Database Structure and Indexes:  EASYMAIL System



Database:   EASYMAIL.DBF
Index File: EASYMAIL.IDX  Key: INITIALS

Field Name  Type  Width  Dec  Description
----------  ----  -----  ---  --------------------------------------
INITIALS    Char      3       Unique initials to identify user
FULL_NAME   Char     35       Full & complete name of authorized user
PASSWORD    Char     10       Secret password of the user
ACCESS      Nume      1       Access level (1=supervisor, 2=general)
LAST_LOGIN  Char     19       Last date & time of login (MM/DD/YY - 99:99:99)
NEW_MAIL    Logi      1       Is there new mail since last login
ACTIVE_USR  Logi      1       Is this an active system user
PRT_SETUP   Char     40       User defined printer setup code
TOP_MAR     Nume      3       Top margin for printing (in lines)
BOT_MAR     Nume      3       Bottom margin of paper (in lines)
LEFT_MAR    Nume      2       Indent from left (in columns)
RIGHT_MAR   Nume      3       Right margin from 0 left (in columns)
DEVICE      Char      4       Output printer port (LPT1, LPT2, LPT3, LPT4)


Database:   MAIL_DOC.DBF
Index File: MAIL_DOC.IDX  Key: SERIAL_NO
Index File: MAIL_DO1.IDX  Key: INITIALS
Memo file:  MAIL_DOC.DBT

Field Name  Type  Width  Dec  Description
----------  ----  -----  ---  --------------------------------------
INITIALS    Char      3       Unique initials to identify creator
ORIG_INIT   Char      3       When the file is ARC/DEL this is INITIALS
FULL_NAME   Char     35       Full & complete name of authorized user
TITLE       Char     36       User assigned descriptive document title
SERIAL_NO   Char      7       Computer assigned unique key ('SMT   3')
CREATED     Char     19       Text date & time created (MM/DD/YY - 99:99:99)
EDITED      Char     19       Last date & time edited (MM/DD/YY - 99:99:99)
SENT        Char     19       Date & time when sent (MM/DD/YY - 99:99:99)
UNOPENED    Nume      3       Number of users who have not opened it yet
TEXT        Memo     10       Complete text of the document
PRIORITY    Nume      1       Document priority level (1-archive, 2-delete)


Database:   MAIL_TO.DBF
Index File: MAIL_TO1.IDX  Key: SERIAL_NO
Index File: MAIL_TO2.IDX  Key: INITIALS

Field Name  Type  Width  Dec  Description
----------  ----  -----  ---  --------------------------------------
INITIALS    Char      3       Unique initials to identify reader
ORIG_INIT   Char      3       When the file is ARC/DEL this is INITIALS
SERIAL_NO   Char      7       Computer assigned unique key ('SMT   3')
RECEIVED    Char     19       Date & time when rec'd (MM/DD/YY - 99:99:99)
OPENED      Char     19       Date & time when opened (MM/DD/YY - 99:99:99)

Database Structure and Indexes:  EASYMAIL System




Database:   HELPFILE.DBF
Memo file:  HLEPFILE.DBT

Field Name  Type  Width  Dec  Description
----------  ----  -----  ---  --------------------------------------
HELPID      Char     20       Unique key to identify help for a window
TOP         Nume      2       Top row for window border
LEFT        Nume      2       Left column for window border
BOTT        Nume      2       Bottom row for shadow border
RIGHT       Nume      2       Right column for shadow border
TEXT        Memo     10       Memo text of help window



System Structure (program profile):

                        EASYMAIL.PRG
                             |
                             + _GLOBAL.PRG
                             |
                             + _SET_ENV.PRG
                             |
                             + _PSWD.PRG
                                     |
                             |<-yes--OK?---no--> _END_PRG.PRG
                             |
                        _MAINMEN.PRG
                             |
       ----------------------+---------------------------------------
       |                                      |                     |
 _MAILOUT.PRG                            _MAILIN.PRG           _UTILITY.PRG
    |                                       |                     |
    + _OUTPUT.PRG -> _PRINT.PRG             + _MEMO.PRG           + _EDITUSR.PRG
    |                                       |                     |        |
    + _MEMO.PRG                             + _OUTPUT.PRG         |    _PICKUSR.PRG
    |                                               |             |
 _SNDFUNC.PRG                                   _PRINT.PRG        |
    |                                                             + _PACKFILE (proc)
    +------------------------------
    |             |               |
 _TO_USER.PRG  _WHOMAIL.PRG   _IMPTEXT.PRG

```
{% endraw %}

## EASYMAIL.DOC

{% raw %}
```











                      EasyMail - Electronic Mail Program


                  Copyright 1990 - Superior Micro-Techniques



     



     GENERAL INTRODUCTION


     EasyMail brings the paperless office one step closer to reality.

     EasyMail provides a means of communication for those on a network
     by providing a simple electronic mail program.  The program
     interface is easy to use and understand. And if more information
     is needed, simply press the 'F1' function key and immediate help
     if provided.

     This program can be used for the simplest form of "junk" mail or
     corporate policy documents.  Its ability to distinguish between
     unimportant mail and permanent mail makes it suitable for quick
     communications and short-term memos as well as important data to
     be retained.
     



     INSTALLATION & CONFIGURATION


     EasyMail works on most NetBIOS compatible networks.  It has been
     thoroughly tested on the latest Novell network technology as well
     as on the simplest peer-to-peer network (Invisible LAN).

     The program should be installed onto the network server disk.
     Place the program into its own 'EasyMail' sub-directory if
     possible.  To install it, simply copy the contents from the
     program disk onto your network server.  Once copied, it is ready
     to operate.

     Two batch files are provided to start the program running.  EMC
     will simply start the executable program running (EASYMAIL.EXE).
     This batch is intended for those using color monitors or mono
     monitors with gray scale resolution.  The EMM batch file is to
     be used when the monitor is black and white.  These batch files
     may be called directly from the DOS prompt or via network batch
     files.  Test your workstations to find the best startup.  You may
     want to modify these batch files to suite your specific network
     and system needs.

     Each workstation boot-up disk needs to have a CONFIG.SYS file
     present.  The Easymail program requires about 12 file handles
     to operate.  DOS system files and network shell programs will
     also consume file handles.  Setting the number of file handles
     to 20 is a minimum.

     The database file activity involved with EasyMail requires that
     disk buffer space be allocated above the normal DOS environment.
     Setting the buffers to 15 is recommended.  Ensure that the
     following lines exist in your CONFIG.SYS file:

     FILES = 20
     BUFFERS = 15

     Create the CONFIG.SYS file using any word processor in ASCII
     format if none presently exists.  This file must be placed in
     the root directory of the boot disk to be properly accessed.
     (See you DOS operations manual for more information.)
     



     INITIAL OPERATION


     This program is password protected.  Authorized users will not
     be able to start the program without providing the intial screen
     with their predefined initials and a secret password.  To get
     your system up and running initially you should use the initials
     'NEW' and the secret password is 'NEW'.  Upon first use of the
     program you should immediately access the Utility Menu and add
     your own authorized user information.  Be sure that you have an
     access level of '1' (level 2 users cannot access the Utility
     Menu).  Then delete the 'NEW' user from the system to prevent
     users from reading this document and gaining access to your
     files.  Exit the system and using your own intials and password
     log back in.

     You will want to quickly establish a list and entries of all
     system users.  Keep the number of users with access level 1 to
     a minimum for maximum security.

     With this completed, the system is configured and ready to
     use.
     



     HOW EASYMAIL WORKS


     The concept behind EasyMail is quite simple.  A system user creates
     a document, memo, report, etc. via the 'Create Mail' screen.  They
     then send the completed document to any other user(s) listed in the
     authorized user file.  As those users log into the EasyMail program
     they are notified of new mail and they read the mail by accessing
     the 'Read Mail' section.

     In the databases themselves here's how it works;  Each document or
     piece of mail is created in the MAIL_DOC.DBF data file.  This record
     indicates who created the document, when it was created and a memo
     field contains the body of the mail text.  When the originator of
     the document sends the mail, a link or pointer is created in the
     MAIL_TO.DBF, one for each addressee.  These records contains the
     serial number of the mail (relates to MAIL_DOC.DBF), the initials of
     the addressee, when it was sent and a field for the date and time
     that the mail was read (or printed) by the recipient.  Indexes are
     maintained which group the records in these files by user id code.

     When the mail originator elects to delete or archive a document, the
     originator id takes on the value '000' and their initials move into
     a different field.  This way recipients can continue to access this
     document until they also delete or archive their links to it.

     Whenever the 'Reindex' option on the 'Utility Menu' is selected, all
     temporary mail and pointers, which have been completed deleted by
     originator and recipients, are permanently removed from the database
     files.  Those Permanent documents which have been archived will not
     be removed by Reindexing.
     



     DOCUMENTATION

     This constitutes the complete documentation for this version of
     EasyMail.  Its complete on-line help system should provide all needed
     details to operate the system.  More advanced versions of the program
     will have complete documentation describing the menu options in
     detail.


     UPCOMING ENHANCEMENTS

     This first shareware version contains the basic elements for using
     electronic mail.  It will build the foundation for a truely powerful
     work-group program.  Registered users will receive the following
     modules which further expand the program:


     - Complete Supervisor access to all archived documents
     - Individual users access to archived documents they created or were
         addressed to
     - Reporting capabilities needed to maintain an efficient system
     - Abilty to start and maintain a converstion thread
     - Control over originated document format (margins, width, paje ejects)
     - Users can maintain their own default environment
     - Access to network printers (versus local printers)
     - Instant notice of message transmission to on-line parties


     REGISTRATION

     To register your review copy of EasyMail which supports a maximum of 5
     authorized users, send your check, cash or money order in the amount
     of $70.00 (65.00 + 5.00 S/H) to:

             Superior Micro-Techniques
             5510 Orchard Street W., Suite B1473
             Tacoma, WA  98467

     You may want to upgrade to the unlimited number of users version if
     you are on a larger network.  Registration for this version is $100.00
     ($95.00 + 5.00 S/H).

     Registration entitles you to reasonable and unlimited support via
     telephone (206) 564-0803 or mail for as long as you use the product.
     You will also receive the aforementioned product extensions, complete
     documentation and further enhancements at nominal fees.

     Product source code, written in Clipper extended dbase language, is
     available for $250.00.


     FINAL NOTE

     Thanks for trying EasyMail shareware E-Mail for networks.  I hope you
     find it useful, but you may have many suggestions which can be
     incorporated into a future version of the program.  Please send these
     to us and they will be implemented as time allows if they fit within
     the overall structure of the existing databases and product.
     

```
{% endraw %}

## FILE2279.TXT

{% raw %}
```
Disk No: 2279                                                           
Disk Title: EasyMail - Network Email                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: EasyMail - Network Email                                 
Author Version: 1.0                                                     
Author Registration: $65.00                                             
Special Requirements: 384K RAM, and Netbios network.                    
                                                                        
Here's a very easy-to-use electronic mail program for networks which    
offers most of the features that commercial programs provide. Interface 
consists of pull-down menus and single keystroke access to all          
functions.  It has extensive on-line help. EasyMail provides each       
authorized user with a complete environment for creating documents,     
selecting addressees, reading mail and tailoring the program to their   
specific needs.  Other features include text importing, document        
printing and mail archiving.  It works on all NetBIOS compatible        
networks (all popular networks). This version allows up to five users.  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
EasyMail Program Description:

EasyMail is a very easy to use electronic mail program for networks
offering most of the features that commercial programs
provide. The user-interface consists of pull-down menus and single
keystroke access to all functions.  It has extensive on-line help.
EasyMail provides each authorized user with a complete environment
for creating documents, selecting addressees, reading mail and
tailoring the program to their specific needs.  Other features
allow for text importing, document printing and mail archiving.  It
should work on all NetBIOS compatible networks (all popular networks).


EasyMail System Files:

FILENAME EXT    SIZE   DESCRIPTION
-------- ---   ------  -----------------------------------------------
EMC      BAT       11  Batch file to start EasyMail on a color system
EMM      BAT       14  Batch file to start EasyMail on a mono system
EASYMAIL DBF      576  dbase database file containing authorized users
HELPFILE DBF     1098  dbase database file containing help system headers
MAIL_DOC DBF      386  dbase database file containing mail to links
MAIL_TO  DBF      194  dbase database file containing mail header
HELPFILE DBT    21915  memo file containing help system text
MAIL_DOC DBT      512  memo file containing actual mail text
DATAFILE DOC     4737  dbase database structures
EASYMAIL DOC     8239  EasyMail documentation & registration information
EASYMAIL EXE   212660  EasyMail executable program file
EASYMAIL NTX     2048  Clipper index file for authorized users
MAIL_DO1 NTX     2048  Clipper index file on documents
MAIL_DOC NTX     2048  Clipper index file on documents
MAIL_TO1 NTX     2048  Clipper index file on addressed users
MAIL_TO2 NTX     2048  Clipper index file on addressed users
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2279

     Volume in drive A has no label
     Directory of A:\

    EMC      BAT        11   5-06-90   7:22a
    EMM      BAT        14   5-06-90   7:22a
    EASYMAIL DBF       576   5-06-90   7:51a
    HELPFILE DBF      1098   5-06-90   7:26a
    MAIL_DOC DBF       386   5-06-90   7:51a
    MAIL_TO  DBF       194   5-06-90   7:51a
    HELPFILE DBT     21915   5-06-90   7:26a
    MAIL_DOC DBT       512   5-06-90   7:49a
    DATAFILE DOC      4737   5-06-90   8:13a
    EASYMAIL DOC      8239   6-15-90   8:59a
    EASYMAIL EXE    212932   5-06-90   8:40a
    EASYMAIL NTX      2048   5-06-90   7:51a
    MAIL_DO1 NTX      2048   5-06-90   7:51a
    MAIL_DOC NTX      2048   5-06-90   7:51a
    MAIL_TO1 NTX      2048   5-06-90   7:51a
    MAIL_TO2 NTX      2048   5-06-90   7:51a
    FILES    TXT      1799   6-15-90   9:03a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       496   1-01-80   1:48a
    FILE2279 TXT      1777   7-17-90   9:22a
           20 file(s)     264966 bytes
                           48128 bytes free
