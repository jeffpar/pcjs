---
layout: page
title: "PC-SIG Diskette Library (Disk #2457)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2457/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2457"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ALAMANAC"

    ALMANAC is a calendar/scheduler/information utility for Microsoft
    Windows. It provides traditional calendar displays in month and year
    format, as well as a popup desk set for day-to-day notes and schedules.
    Configuration files and overlays allow you to customize calendars for
    your business and personal needs.
    
    An overlay is a set of data which provides ALMANAC with the information
    it needs to calculate the days events will occur on.  The types of
    events ALMANAC will calculate include weekly, monthly, and annual events
    by day or date, as well as birthday, wedding anniversaries, and others.
    Up to ten overlays may be specified in a configuration file, and
    included are three sample files which define holidays for the United
    States, Canada, and Sweden.
    
    In addition to specifying overlay files, ALMANAC auto-load modules allow
    you to configure options for calculating religious holidays (Christian
    and/or Jewish), phases of the moon, and calendar mode
    (Gregorian/Jewish).  A built in database is used to determine your
    location so you can calculate the time and azimuth of the sunrise and
    sunset.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALMORDER.TXT

{% raw %}
```
Almanac Registration Options

Almanac can be registered for use with the following package options:

Basic Registration
------------------

With the Basic registration you will receive a license number which will
prevent the shareware screen from soliciting you for $$$ and also display
your name as a registered user at start-up.  This registration will be
good for all future shareware versions of Almanac.  The basic registration
does not include update disks, a manual, or any other service.  It is up
to the you to acquire any future releases of Almanac through the normal
shareware distribution outlets such as electronic bulletin boards,
shareware mail order catalogs, etc.

Premium Registration
--------------------

With each Premium registration you will receive the latest version of
Almanac on either 5.25 or 3.5 inch floppy disks.  This version will contain
its own license number and will not display a shareware screen upon startup.
Along with your new software you will receive a bound, typeset, operation
manual for Almanac.  As a premium user, you will be notified of new
releases of Almanac and their features and will be offered upgrade packages
at a discount rate.

Registration Upgrades
---------------------

A Premium Upgrade option is available for users who have a Basic
registration and would like to upgrade to Premium.  Shareware users who
have registered prior to September 30, 1990 and would like to upgrade to
the full-service Premium registration may do so at a 50% discount rate.


Registration Form
------------------------------------------------------------------------------

License request for Almanac for Windows
Copyright (c) 1988-1990 by Leonard A. Gray

Almanac is licensed on a per user basis.  The license grants the user the
right to install and use the software on one or more computers so long as
the total number of users does not exceed the license quantity.

Please include the following information:


_______________________________________	
Name

_______________________________________
Street

________________________________________
City          	State/Prov     	ZIP

_______________________________________
Country		Phone


Type				           Qty		 Price	  Total

Basic Registration    ____  x  $34.95  ______

Premium Registration  ____  x  $59.95  ______   Disk Size:  __ 5.25  __ 3.5

Premium Upgrade       ____  x  $29.95  ______   Disk Size:  __ 5.25  __ 3.5
(If reg'd prior to 10/1/90 use $14.95)
(Registration # required. See below)
                                       ______   Sub-total

                                       ______   California residents
                                                add 6.25% sales tax.
                                       ______   Outside U.S. add
                                                10% for Air Mail.

                        Grand total:  _______

Upgrade requests must include:

Name:   __________________________________

Reg #:  _______________

---------------------------------------------------------------------------

If you are requesting an upgrade package, please be sure to enter your name
requested above exactly as it appears on your current registration.  Also
include your registration name and number in the space provided.  If you
do not have your registration information handy, your registered name and
number can be found in your Windows configuration file, WIN.INI.  The
WIN.INI file is located in your Windows directory and can be viewed with
the Windows Notepad application.  Your registration information will be
located under the [Almanac] section in the 'RegName=' and 'Reg#='  fields.

Premium upgrades at reduced rates are only available to users registered
before September 30, 1990.  You do not have to include proof of
registration date.  This information has been recorded during processing
of your registration.  Unauthorized requests for upgrades will be returned.

License requests from outside the United States:  Registrations will be
processed upon receipt of the current equivalent of U.S. funds in check
or money order (cash discouraged, but accepted).


      Mail check or money order to:

                             Impact Software
                             12140 Central Avenue
                             Suite 133
                             Chino, CA  91710

    Thank you for supporting the shareware software concept and
    encouraging the future development of Almanac for Windows!

           Windows is a trademark of Microsoft Corporation


Impact Software
Chino, CA
Voice: (714)590-8522
Data:  (714)590-0500
```
{% endraw %}

## READ-ME.TXT

{% raw %}
```

                          Almanac for Windows
                             Version 1.0
                               10/7/90


     Complete documentation for Almanac is included in the file
     ALMANAC.WRI.  This file has been created for use within
     your Windows WRITE application.  It will be copied into
     your Almanac 'master' directory during installation.

     If you are running Windows 3.0 and would like to 'quick'
     start Almanac: (1) place all of the release files onto a
     floppy disk in drive A: (2) select 'Run...' from the
     'File' menu of Program Manager and (3) enter 'A:\ALMSETUP'
     in the edit box.

     Almanac MUST be installed using the provided installation
     utility, ALMSETUP.EXE.  Critical directory information is
     initialized in both your Windows environment and Almanac's
     default auto-load module (ALMANAC.ALM) by ALMSETUP.  Please
     refer to Chapter 2 of the ALMANAC.WRI file for more
     information on running ALMSETUP.

     The original release of this version of Almanac was created
     at Impact Software in a compressed file, ALM100.ZIP.  The
     Almanac files must be extracted from this compressed format
     using a file decompress utility such as PKUNZIP.  The release
     file was compressed using PKZIP version 1.10 and will produce
     authenticity verification messages if 'unzipped' with PKUNZIP
     version 1.10 (or higher), assuring you of an untampered,
     original release direct from Impact Software.

     Software distributors are authorized to duplicate and sell
     media containing this software, PROVIDED THAT ALL FILES
     CONTAINED IN THIS PACKAGE ARE INCLUDED WITHOUT ALTERATION
     and that the price of such sale is determined by and advertised
     as covering ONLY the cost of the software distribution.

     If you feel that you have obtained a copy of this software
     which has been distributed without compliance to the preceding
     paragraph, please contact Impact Software in Chino, California
     at (714) 590-8522.

     Thank you for your support!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2457

     Volume in drive A has no label
     Directory of A:\

    ALMANAC  EXE    180528  10-17-90  11:05p
    ALMANAC  MST       639  10-17-90  11:05p
    ALMANAC  ALM       319  10-17-90  11:05p
    ALMLOCN  DAT      3995  10-17-90  11:05p
    ALMFONTA FON      2576  10-17-90  11:05p
    ALMFONTB FON      3984  10-17-90  11:05p
    ALMFONTE FON     14832  10-17-90  11:05p
    USA_HDAY ALO      1166  10-17-90  11:05p
    CAN_HDAY ALO      1187  10-17-90  11:05p
    SWE_HDAY ALO      1089  10-17-90  11:05p
    ALMSETUP EXE     19280  10-17-90  11:05p
    ALMANAC  ICN       766  10-17-90  11:05p
    ALMANAC  WRI     62848  10-17-90  11:05p
    ALMORDER TXT      4724  10-17-90  11:05p
    READ-ME  TXT      2125  10-17-90  11:05p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      1156  12-14-90   2:44p
           17 file(s)     301254 bytes
                           11264 bytes free
