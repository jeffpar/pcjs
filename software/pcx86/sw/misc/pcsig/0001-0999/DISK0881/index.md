---
layout: page
title: "PC-SIG Diskette Library (Disk #881)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0881/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0881"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HERITAGE CHURCH SYSTEM"

    HERITAGE CHURCH SYSTEM is designed to automate the most mundane
    clerical tasks of the local church. Record and access contributions
    and membership information in a quick and concise manner. Entries can
    be made for families in general and for each individual in a family.
    
    Each entry includes the name, address, phone, and church status. An
    envelope number can be entered if pre-numbered envelopes are used for
    recording family giving. Contributions are entered separately and the
    program then processes the data in a weekly accounting system and
    prints contribution reports for each family.
    
    Mail merge capabilities work with PC-WRITE and Microsoft WORD,
    allowing mass mailings to the congregations.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DBFIX.DOC

{% raw %}
```

 ***************************************************************************
 *                                                                         *
 *                 POSSIBLE FILE SYNCHRONIZATION PROBLEMS AFTER            *
 *                                                                         *
 *                        PURGING TRANSACTION RECORDS                      *
 *                                                                         *
 ***************************************************************************


We Goofed!  and we sincerely apologize.

Due to a programming oversight on our part, files were not being
correctly updated during a transaction record purge.

Most sites noticed this after year-end, since they purged their
files then.  The enclosed version of Heritage Church (version 1.03A)
corrects this problem, however you may still experience some file
inconsistencies.  Therefore we have written a "fix" program which
appears on this disk also.

NOTE: The following procedure is only necessary if you have purged
records from your transaction file! ! ! ! !

The following procedure will synchronize your data-base once again:

 1. Start Up Heritage Church (HCS)

 2. Select the SYSTEM FUNCTIONS selection from the main menu.

 3. Select the PURGE option.

 4. Select TRANSACTION records for purge.

 5. When prompted for the latest cycle to retain, enter: 8800

 6. After the purge, exit from the program to DOS.

 7. Key in: DBFIX.

 8. After the program completes, start up Heritage Church (HCS).

 9. Select the CONTRIBUTIONS option.

 10. Select GIVING.

 11. When prompted for the Family ID, simply depress ENTER.

 12. Your files will now be synchronized.

 We apologize for this inconvenience and any concern which this may
 have caused you.  We are constantly working on this product, however
 the potential always exists that we may miss something (Microsoft does
 too, so we're not alone).

 Our Apologies,

 Jim Thomson,
 Heritage Micro Systems
```
{% endraw %}

## FILES881.TXT

{% raw %}
```
Disk No  881
Program Title:  HERITAGE CHURCH SYSTEM  version 1.07
PC-SIG version 1.1

    HERITAGE CHURCH SYSTEM is designed to automate the most mundane
clerical tasks of the local church. The program records and accesses
contributions and membership information in a quick and concise manner. Not
only can entries be made for families in general, but also for each
individual in a family.

    Each entry includes the name, address, phone, and church status. An
envelope number can be entered if pre-numbered envelopes are used for
recording family giving. Contributions are entered separately, and the
program then handles the data in a weekly accounting system. Address and
contribution reports can be printed out for each family or individual.

    In addition to all this, HERITAGE CHURCH SYSTEM has mail merge
capabilities with the word processors PC-WRITE and Microsoft WORD, thus
allowing you to do mass mailings to the congregations.

Usage: Record-Keeping

System Requirements: 256K memory and two disk drives (a hard disk is
recommended).

How to Start: Type: README (press enter)

Suggested Registration: $89.00

File Descriptions:

HCS      EXE  Main program.
HCS      HLP  Help file.
BTRIEVE  EXE  Data file program.
README   COM  Displays READ.ME file.
READ     ME   Introduction.
PCWRITE  DOC  Documentation for mail merge function.
MSWORD   DOC  Documentation for mail merge function.
COMPRESS EXE  Compression utility
DBFIX    DOC  Documentation
DBFIX    EXE  File fixer program
HCS      XZ   Compressed documentation file
SECURITY DOC  Documentation
UP104    EXE  Upgrade programs prior to version 1.04

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## PCWRITE.DOC

{% raw %}
```
{Last,}
{First,}
{Address1,} 
{Address2,} 
{City,} 
{State,} 
{Zip,} 
{Phone,} 

        {First} {Last},
        {Address1}
        {Address2}
        {City}, {State} {Zip}
        {Phone}

        Dear {First} {Last},

        This is a demonstration on how to use the Heritage Church System's
        Mail Merge interface with the PC-WRITE word processor by 
        QuickSoft.

                                        Sincerely,

                                        Jim Thomson
                                        Heritage Micro Systems
```
{% endraw %}

## SECURITY.DOC

{% raw %}
```


                        HERITAGE CHURCH SYSTEM
                            Version 1.05
                       Password Security Feature

    At the request of many churches, we have introduced PASSWORD
    security as a feature of Heritage Church.  This feature may
    be turned on or off at the local site at will.

    Turning PASSWORD checking on is activated by including the
    U option of the HCS Environment variable.  This means from
    the DOS prompt, the following command will enforce password
    checking:

              SET HCS=U

    If you intend to user PASSWORD checking, please include the
    above command in your AUTOEXEC.BAT file (to be included
    whenever the systems boots).  (See Your DOS manual for
    setting up an AUTOEXEC.BAT file.)

    This option may be combined with the other HCS environment
    variable options.  Thus if you desire PASSWORD checking AND
    do not wish to be prompted for the date each time HCS initiated,
    then include the following command in your AUTOEXEC.BAT file:

             SET HCS=TU

    OVERVIEW OF PASSWORD SETUP
    --------------------------
    Each password set up may restrict the update and accessability
    of each of HCS' 4 main modules, SYSTEM FUNCTIONS, FAMILY MAINTENANCE,
    INDIVIDUAL MAINTENANCE, and GIVING MAINTENANCE.

    To enter or update a PASSWORD select the SYSTEM FUNCTIONS selection from
    the MAIN MENU then select the PASSWORD option.  The system will
    prompt for a PASSWORD.  You may either enter a new or existing
    PASSWORD.  You will then be promted for a name to be associated with
    this PASSWORD and the area for which that user may ACCESS the system.

    The following details the functions available with each of the
    settings:

    SYSTEM FUNCTIONS - RETRIEVAL:
                                  SET DATE
                       UPDATE;
                                  PASSWORD
                                  PURGE
                                  CHURCH INFO

    FAMILY           - RETRIEVAL:
                                  LIST FAMILY
                                  FAMILY REPORTS
                                  MAIL MERGE
                       UPDATE:
                                  ADD FAMILY
                                  CHANGE FAMILY
                                  DELETE FAMILY
    INDIVIDUAL       - RETRIEVAL:
                                  INDIVIDUAL REPORTS
                       UPDATE:
                                  MAINTAIN (ADD/CHANGE/DELETE) INDIVIDUALS
    GIVING           - RETRIEVAL:
                                  FAMILY GIVING
                                  GIVING REPORTS
                                  EXPORT to Spreadsheet
                       UPDATE:
                                  ENTER GIVING
                                  UPDATE ACCOUNTS
                                  UPDATE PLEDGES

   To set up your initial PASSWORD(s) simply leave the U option off
   the HCS environment variable.  When the system comes up, no
   PASSWORD will be required and you will be able to add PASSWORDs
   without restriction.

   Once you have entered your initial PASSWORD(s) simply exit out of
   HERITAGE CHURCH (HCS) and add the U option to the HCS environment
   variable (see above).

   Now you may sign back into HCS and PASSWORD enforcement will be
   activated.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0881

     Volume in drive A has no label
     Directory of A:\

    BTRIEVE  EXE     28656   7-13-87  11:38a
    COMPRESS EXE     17468  11-28-87   8:31p
    DBFIX    DOC      2064   1-22-88   6:09p
    DBFIX    EXE     32414   1-22-88   6:17p
    FILES881 TXT      1776   1-01-80  12:32a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   5-18-88  12:58p
    HCS      EXE    132149   5-07-88   7:39a
    HCS      HLP     30208   9-19-87  10:35a
    HCS      XZ      27582   2-11-88   5:30a
    MSWORD   DOC      1280   9-14-87   7:50p
    PCWRITE  DOC       573   9-14-87   8:17p
    READ     ME       7994   5-07-88   7:43a
    README   COM     13988   9-14-87   4:55p
    SECURITY DOC      3452   2-26-88   9:28p
    UP104    EXE     10624   2-11-88   6:36a
           16 file(s)     310806 bytes
                            3072 bytes free
