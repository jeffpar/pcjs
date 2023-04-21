---
layout: page
title: "PC-SIG Diskette Library (Disk #957)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0957/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0957"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-FLOW - BUDGETING SYSTEM"

    PC-FLOW, the personal cash-flow budgeting system, lets you forecast and
    evaluate your home or small-business budget, emphasizing daily cash-
    flow. Each transaction can be designated as once-only, daily, weekly,
    or monthly. The entries can be exact or estimated. Record incoming and
    outgoing activities and sort and categorize by group.
    
    Schedule future transactions within a user-defined time period. This
    approach to budgeting lets you observe the cash-flow situation as the
    transactions are scheduled to occur. Reports of starting resources,
    cash-flow, and transaction breakdown can be printed. Sort budget
    transactions by ID, frequency or ending date. There are three cash-flow
    reports: daily transaction detail; daily, weekly, monthly, or yearly
    cash-flow summaries; and breakdown by transaction classification.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES957.TXT

{% raw %}
```
Disk No  957
Program Title: PC-FLOW version 1.20
PC-SIG version 1.3
 
PC-FLOW, the Personal Cash-Flow Budgeting System, enables you to
forecast and evaluate your budget with an emphasis on daily cash-flow.
Each transaction can be designated as once-only, daily, weekly, or
monthly.  The entries can either be specific or an estimate.  These
transactions can record both incoming and outgoing activities, and may
be sorted and categorized by group.
 
PC-FLOW can transform transactions within a user-defined time period so
the budget may be further analyzed.  This approach to budgeting lets you
observe the cash-flow situation as the transactions are scheduled to
occur.  Reports concerning starting resources, cash flow, and
transaction breakdown can be printed at any time, and you can sort
budget transactions by ID, frequency, ending date, or classification and
configure the system parameters for your printer and screen.
 
Usage:  Financial.
 
Special Requirements:  None.
 
How to Start:  Type PC-FLOW (press enter).
 
Suggested Registration:  $40.00
 
File Descriptions:
 
PCFLOW   EXE  Main program for PC-FLOW.
README        Introductory notes.
MANUAL        User's Manual on disk.
ORDERFRM      Order Form for PC-Flow.
CFCASHR  DBF  Data file for Starting Resources.
CFCLASS  DBF  Data file for Classification Categories.
CFTRANSX DBF  Data file for Transaction Definitions.
CFCALC   DBF  Data file for Transformed Transactions.
CFCFMEM  MEM  Data file for program settings.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0957

     Volume in drive A has no label
     Directory of A:\

    CFCALC   DBF       355   9-06-88   1:20a
    CFCASHR  DBF       131   9-06-88   1:20a
    CFCFMEM  MEM       914   9-06-88   1:20a
    CFCLASS  DBF       274   9-06-88   1:20a
    CFTRANSX DBF       387   9-06-88   1:20a
    FILES957 TXT      1634  10-04-88   1:27p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   9-19-88  11:37a
    MANUAL           34828   9-06-88   1:20a
    MANUAL   BAT        17   6-09-88  11:53a
    ORDERFRM           982   9-06-88   1:20a
    PCFLOW   EXE    253472   9-06-88   1:20a
    README            3849   9-06-88   1:20a
           13 file(s)     297421 bytes
                           17408 bytes free
