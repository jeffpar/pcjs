---
layout: page
title: "PC-SIG Diskette Library (Disk #2698)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2698/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2698"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ABSTRACT.TXT

{% raw %}
```
                    XREF  -  SUMMARY DESCRIPTION

XREF is a Data Dictionary documentation tool for dbase-language databases
that allows you view and print database structures, index expressions, and
cross-references between them. You can also add and edit descriptions for
each database field to provide more extensive documentation.

Using XREF, you can do a quick on-screen lookup, or print permanent reports
of all or selected databases and indexes. Reports may also be directed to a
file for offline viewing or printing.

With the cross-referencing function, it's easy to determine which indexes
belong with which database file, and to determine if there is an existing
index on a particular field which you may be interested in.

XREF is network aware, and can be used while your databases and indexes are
in use on other workstations. Multiple workstations may also run XREF at the
same time.

XREF works with both NDX and NTX index formats. The program needs a minimum
of 360k memory to run, more depending on the number of databases and indexes
you are documenting. The registration fee is $15 per copy.

                        XREF 1.40 cross reference utility
┌────────────────────────────────────────────────────────┬────────────────────┐
│ Path = C:\dbase\soms\                                  │ DBF = *.dbf        │
│ 8 cross-references to "UNIT_NUM"                       │ NDX = cpi*.ntx     │
└────────────────────────────────────────────────────────┴────────────────────┘
  ╔═ DBF ════╗   ┌─ NDX ────┐   ┌── CPINMUN.NDX ──────────────────────────────┐
  ║ LETTER   ║   │ CPINMUN  │   │DOCT_NUM+PAT_LAST+PAT_FIRST+UNIT_NUM+APP_DAT │
  ║ MEDACTI  ║   │ CPIPRODR│   │E+APP_TIME                                   │
  ║√MEDILLN  ║   │ CPIUNIT │   │                                             │
  ║√MEDIMMU  ║   │ CPILGRP  │   │                                             │
  ║√MEDPERM  ║   │ CPIGCODE │   └─────────────────────────────────────────────┘
  ║ PATIENT  ║   │ CPIGDESC │   ┌── PATIENT.DBF ──────────────────────────────┐
  ║ PATRECAL ║   │ CPICATE  │   │     Field        Type   Len   Decimals      │
  ║ PHYFILE  ║   │ CPIUNUM │   ├────────────────┬──────┬─────┬───────────────┤
  ║√PROCFILE ║   │ CPITORY  │   │ --> UNIT_NUM   │ C    │   7 │        0      │
  ║ PROFILE  ║   │ CPIURE   │   │     SP_UNUM    │ C    │   7 │        0      │
  ║ PSTMTRPT ║   │ CPITER   │   │     PAT_LAST   │ C    │  15 │        0      │
  ║ REFERRAL ║   │√CPIACTI  │   │     PAT_FIRST  │ C    │  10 │        0      │
  ║ TRANSACT ║   │√CPIILLN  │   │     PAT_MIDDLE │ C    │   1 │        0      │
  ║ VISIT    ║   │√CPIIMMU  │   │     PAT_STREET │ C    │  20 │        0      │
  ║ VISITCON ║   │√CPIPERM  │   ├────────────────┴──────┴─────┴───────────────┤
  ║ VISITSUP ║   │ CPINAME  │   │unique id of this patient                    │
  ╚══════════╝   └──────────┘   └─────────────────────────────────────────────┘
F1=Help   Tab=Change_Window   X=Xref   R=Reports   E=Edit_Field_Desc   Esc=Quit
```
{% endraw %}

## FILE2698.TXT

{% raw %}
```
Disk No: 2698
Disk Title: XREF
PC-SIG Version: S1

Program Title: XREF
Author Version: 1.40A
Author Registration: $15.00
Special Requirements: 360K RAM.

XREF is a data dictionary documentation tool for dBASE-language
databases.  View and print database structures, index expressions, and
cross-references between them.  Add and edit descriptions for each
database field to provide more extensive documentation.

Do a quick on-screen lookup, or print reports of all or selected
databases and indexes.  Reports may be directed to a file for off-line
viewing or printing.  With the cross-referencing function, it's easy to
determine which indices belong with which database file, and to
determine if there is an existing index on a particular field.

XREF is network-aware and can be used while your databases and indices
are in use on other workstations.  Multiple workstations may run XREF at
the same time.

XREF is written almost entirely in Clipper.  XREF also works with both
NDX and NTX index formats.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## ORDER.DOC

{% raw %}
```

   XREF version 1.40a                 Order Form and Software License
   ---------------------------------------------------------------------

   Use this form to register XREF. Purchase orders are also accepted.
   Each copy purchased entitles you to exclusive use of XREF on a single
   computer. On local area networks, for each copy purchased, only one
   copy of XREF may be in use at any given time.

   Registration also entitles you to lifetime technical support, notices
   of upgrades, and one free upgrade to the next release. Registered
   copies also have the advertising screen removed.

   Site Licenses for ten or more users are also available; please
   contact the author.  Make checks payable to:

       Jim Lynch
       P.O. Box 140192
       Staten Island, NY 10314
       USA


   *************************** PLEASE PRINT ***************************



    ___ copies  @ $15 ea.....................................   $______



       Name____________________________________________________________

    Company____________________________________________________________

    Address____________________________________________________________

           ____________________________________________________________

      Phone____________________________________________________________


    Where did you obtain XREF 1.40a?  (Please check one)


                     BBS_____    Catalog_____     Other?____


    Catalogue or BBS Name______________________________________________


    Comments___________________________________________________________

             __________________________________________________________

             __________________________________________________________

             __________________________________________________________


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2698

     Volume in drive A has no label
     Directory of A:\

    XREF     EXE    295894  12-05-90   1:41a
    XREF     DOC     12711  12-05-90   1:41a
    ORDER    DOC      1867  12-05-90   1:41a
    ABSTRACT TXT      3058  12-05-90   1:41a
    PREVIEW  EXE      7347   4-18-91   1:15p
    GO       BAT       118   7-26-91   2:05a
    FILE2698 TXT      1140   7-25-91   1:13a
            7 file(s)     322135 bytes
                           36864 bytes free
