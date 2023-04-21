---
layout: page
title: "PC-SIG Diskette Library (Disk #588)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0588/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0588"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SYMPHONY BANK"

    This disk contains Symphony sample files that illustrate how Symphony
    can be used in banking, medical and insurance applications.  Business
    professionals can use some of the sample files directly in their
    applications with simple modification.  Financial analysis worksheets
    are quite sophisticated and can be used for developing ratios, creating
    forecasts, tracking performance.  BUDGET.WRK is useful in calculating
    the financial prospects of medical practice.  Medical practitioners can
    track and graph patient data and generate reports from the findings.
    Homeowners can calculate the appropriate amount of home owner's
    insurance.  Small businesses can manage and track their inventory
    throurgh INVENTORY.WRK.
    
    System Requirements:  512K, two disk drives, monochrome display and
    Lotus SYMPHONY
    
    How to Start:  Access through Lotus SYMPHONY
    
    File Descriptions:
    
    ASSET    WRK  Assists in asset-liability management.
    AUTODEMO WRK  Autorun Demo
    2_APPLIC WRK  Example file for APPLIC worksheet
    2_BOND   WRK  Example file for BOND worksheet
    2_ASSET  WRK  Example file for ASSET worksheet
    2_MORTGA WRK  Example file for MORTGAGE worksheet
    2_HUMANR WRK  Example file for HUMANRES worksheet
    2_EXCHAN WRK  Example file for EXCHANGE worksheet
    2_CASH   WRK  Example file for CASH worksheet
    IVENTORY WRK  Maintain, stock and order inventory items.
    FORECAST WRK  Calculates historical growth figures for insurance product
    CLIENT   WRK  Manage client information. Make follow-up sales call sched
    AUDIT    WRK  Calculate the appropriate amount of home owner insuranc e.
    1_LIFE   WRK  Example file for LIFE worksheet
    1_IVENTO WRK  Example file for IVENTORY worksheet
    1_FORECA WRK  Example file for FORECAST worksheet
    1_CLIENT WRK  Example file for CLIENT worksheet
    1_AUDIT  WRK  Example file for AUDIT worksheet
    1_APPLIC WRK  Example file for APPLIC worksheet
    MORTGAGE WRK  Determines if customer qualifies for mortgage loan
    BOND     WRK  Calculates a bond market price.
    HUMANRES WRK  Organizes employee information.
    EXCHANGE WRK  Effects of exchange rates on loan payments.
    DEMO     PIC  Graphics file for demo.
    CASH     WRK  Forecasts cash flow.
    LIFE     WRK  Estimate appropriate life insurance coverage for client.
    1_BUDGET WRK  Example file for BUDGET worksheet
    SCHEDULE WRK  Schedule patient appointments.
    RESEARCH WRK  Track and graph patient data. Generate reports from findin
    DEMI     PIC  Graphics file for demo
    CAPEQPT  WRK  Determine investment quality of potential purchases.
    BUDGET   WRK  Forecast the financial prospects of a medical practice.
    1_SCHEDL WRK  Example file for SCHEDULE worksheet
    1_RESEAR WRK  Example file for RESEARCH worksheet
    1_CAPEQP WRK  Example file for CAPEQPT worksheet
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES588.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  588  SYMPHONY BANK/INSURANCE/MEDICAL APPLICATIONS         v1 DS2
---------------------------------------------------------------------------
The files on this disk demonstrate the uses that Symphony can be put to in
the Banking, Insurance, and Medical industries.
 
2_APPLIC WRK  Example file for APPLIC worksheet
2_ASSET  WRK  Example file for ASSET worksheet
2_BOND   WRK  Example file for BOND worksheet
2_CASH   WRK  Example file for CASH worksheet
2_EXCHAN WRK  Example file for EXCHANGE worksheet
2_HUMANR WRK  Example file for HUMANRES worksheet
2_MORTGA WRK  Example file for MORTGAGE worksheet
ASSET    WRK  Assists in asset-liability management.
AUTODEMO WRK  Autorun Demo
BOND     WRK  Calculates a bond market price.
CASH     WRK  Forecasts cash flow.
DEMO     PIC  Graphics file for demo.
EXCHANGE WRK  Effects of exchange rates on loan payments.
HUMANRES WRK  Organizes employee information.
MORTGAGE WRK  Determines if customer qualifies for mortgage loan
1_APPLIC WRK  Example file for APPLIC worksheet
1_AUDIT  WRK  Example file for AUDIT worksheet
1_CLIENT WRK  Example file for CLIENT worksheet
1_FORECA WRK  Example file for FORECAST worksheet
1_IVENTO WRK  Example file for IVENTORY worksheet
1_LIFE   WRK  Example file for LIFE worksheet
AUDIT    WRK  Calculate the appropriate amount of home owner insurance.
CLIENT   WRK  Manage client information. Make follow-up sales call schedule.
FORECAST WRK  Calculates historical growth figures for insurance products.
IVENTORY WRK  Maintain, stock and order inventory items.
LIFE     WRK  Estimate appropriate life insurance coverage for client.
1_BUDGET WRK  Example file for BUDGET worksheet
1_CAPEQP WRK  Example file for CAPEQPT worksheet
1_RESEAR WRK  Example file for RESEARCH worksheet
1_SCHEDL WRK  Example file for SCHEDULE worksheet
BUDGET   WRK  Forecast the financial prospects of a medical practice.
CAPEQPT  WRK  Determine investment quality of potential purchases.
DEMI     PIC  Graphics file for demo
RESEARCH WRK  Track and graph patient data. Generate reports from findings.
SCHEDULE WRK  Schedule patient appointments.
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, California  94086
(408) 730-9291
```
{% endraw %}

## NOTES588.TXT

{% raw %}
```
Program name:       SYMPHONY BANK/INSURANCE/MEDICAL APPLICATIONS
 
Author name:  LOTUS CORPORATION
 
Program Descriptions:
 
CASH.WRK shows how you can use Symphony to forecast cash flow.

EXCHANGE.WRK demonstrates the effects of changing exchange rates on loan pay-
ments made to a bank.

MORTGAGE.WRK shows how Symphony can help you determine whether a customer
qualifies for a particular mortgage loan, and what the monthly payment 
schedule might be.

HUMANRES.WRK demonstrates how Symphony can help organize employee information.

ASSET.WRK shows how Symphony can be used to produce a forecasted balance sheet
broken out by repricing for asset liability management.

BOND.WRK illustrates how Symphony can be used to calculate a bond market price
according to changes in the required rate.

CLIENT.WRK demonstrates how Symphony can be used to manage client information
and generate a schedule of follow-up sales calls.

LIFE.WRK demonstrates how Symphony can be used to estimate the appropriate
life insurance coverage for a client.

AUDIT.WRK demonstrates how Symphony can be used to calculate the appropriate 
amount of insurance for a home owner.

FORECAST.WRK demonstrates how Symphony calculates historical growth and 
forecasts growth figures for a line of insurance products.

BUDGET.WRK is an example of Symphony's ability to forecast the financial
prospects of a medical practice, given a predicted percentage growth rate.

IVENTORY.WRK is an example of how Symphony can be used to maintain, stock
and order inventory items.

CAPEQPT.WRK is an example of how Symphony can be used to determine whether
purchases under consideration are a good investment.

RESEARCH.WRK an example of how Symphony can be used to track patient data, 
graph it, and generate reports from the findings.

SCHEDULE.WRK is an example of how Symphony can be used to schedule patient
appointments.

System requirements are an IBM or compatible PC with 512K, a monochrome or
Color Board, two disk drives, the Symphony program disk, and an IBM compati-
ble 80 column printer.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0588

     Volume in drive A has no label
     Directory of A:\

    1_APPLIC WRK      1508   1-01-80   2:56a
    1_AUDIT  WRK      3849   1-01-80   1:03a
    1_BUDGET WRK      3713   1-01-80  12:52p
    1_CAPEQP WRK      4346   1-01-80  12:59p
    1_CLIENT WRK      5158   1-01-80  12:43p
    1_FORECA WRK      4716   1-01-80   1:37a
    1_IVENTO WRK      4980   1-01-80   1:05p
    1_LIFE   WRK      4568   1-01-80   2:24p
    1_RESEAR WRK      8848   1-01-80   1:10p
    1_SCHEDL WRK      4354   1-01-80   1:13p
    2_APPLIC WRK      1843   1-01-80   2:51a
    2_ASSET  WRK      3494   8-22-85   2:30p
    2_BOND   WRK      2903   8-22-85   2:42p
    2_CASH   WRK      3866   8-22-85   1:12p
    2_EXCHAN WRK      5281   8-22-85   1:36p
    2_HUMANR WRK      3279   8-22-85   2:14p
    2_MORTGA WRK      3590   8-22-85   1:56p
    ASSET    WRK      7378  12-07-84   9:10a
    AUDIT    WRK     10147   2-25-85  12:18a
    AUTODEMO WRK      3276   7-17-85  11:51p
    BOND     WRK      1366   2-25-85  11:53a
    BUDGET   WRK      3138  12-20-84  10:34a
    CAPEQPT  WRK      2849  11-06-84  11:33a
    CASH     WRK      2769  10-29-84  10:48a
    CLIENT   WRK      6725   2-25-85  11:22a
    DEMI     PIC      1750   1-01-80   4:43a
    DEMO     PIC       930   1-01-80   4:26a
    EXCHANGE WRK      7217   2-25-85  10:49a
    FILES588 TXT      2347   8-16-86   3:59p
    FORECAST WRK      3504   1-01-80  12:57a
    GO       BAT       174   1-01-80   3:57p
    HUMANRES WRK      6131  12-18-84  10:30a
    IVENTORY WRK     15609  12-20-84  10:25a
    LIFE     WRK      4594   1-01-80   3:20a
    MORTGAGE WRK     17972  10-22-82   4:52p
    NOTES588 TXT      2114   1-01-80   2:20a
    RESEARCH WRK      6177  12-10-84  12:45p
    SCHEDULE WRK      6556   2-25-85  11:18a
           38 file(s)     183019 bytes
                          118784 bytes free
