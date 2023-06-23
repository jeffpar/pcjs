---
layout: page
title: "PC-SIG Diskette Library (Disk #651)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0651/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0651"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO CALC"

    Turbo Calc is a spreadsheet program of about medium size; 512 rows by
    64 columns. It is relatively easy to use and supports the usual
    range of functions, as well as text entries. Commands are by
    letter entry and there is on screen display of command choices.
    
    AsEasyAs is a refined spreadsheet program supporting 52 columns and 200
    rows. Worksheet extension is .wks and files are compatible with another
    popular spreadsheet program. Function keys are utilized, and operation
    is by use of complete on-screen menus. AsEasyAs creates x-y
    graphs and bar charts as well.
    
    System Requirements:  256K, two floppy drives and a monochrome display;
    AsEasyAs requires a graphics option for its x-y graphs and bar charts.
    
    How to Start:  Consult all documentation files before starting either
    program (they are marked with filename.DOC).  While the TurboCalc
    program can be run immediately, you must use the ARC utility to un-
    archive the AsEasyAs program.  Once done, either may be started from
    the DOS prompt.
    
    Suggested Registration:  TurboCalc $20.00; AsEasyAs $25.00
    
    File Descriptions:
    
    -------- ---  Turbo Calc (V5.01)
    UNARC         Notes: How to retrieve AsEasyAs files from archive.
    ARC      EXE  Program for archival storage and retrieval.
    TC511    COM  Turbo Calc command file.
    TC511    000  Turbo Calc overlay file.
    TC511-EX SSF  Sample Turbo Calc worksheet (template). Family budget.
    TC511    TXT  Notes about Turbo Calc overlay file.
    ASEASY   COM  AsEasyAs system command file.
    -------- ---  AsEasyAs (V1A)
    ASEASYAS ARC  Archived AsEasyAs System files.
    TC511    DOC  User documentation file for Turbo Calc.
    AUTOEXEC BAT  Batch file for root directory, hard disk, color.
    PRINTER  COM  Printer control routine.
    CMODE    COM  Command file, switches mono to color.
    SPREAD   MSG  Data file for spreadsheet messages.
    S-DUMP   COM  A Hires graphic screen dump routine.
    PS-READ  DOC  Notes about S-DUMP.COM and PRINTER.COM.
    README   WKS  Complete function list available with AsEasyAs running.
    README   DOC  User documentation - Instructions. 7 pages.
    87TC810  ARC  Archived version of TurboCalc for 8087 chip
    TC810    ARC  Archived version of TurboCalc
    PKXARC   COM  Unarchiving utility
    README   TOO  Notes on programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FORM.DOC

{% raw %}
```

------------------------------------------------------------------------
[                                                                      ]
[                         Registration Form                            ]
[                                                                      ]
[   Date: __________                    TO:  P & M Software Co.        ]
[                                            9350 Country Creek #30    ]
[                                            Houston, Tx  77036        ]
[                                                                      ]
[   FROM:     Name: ________________________________________           ]
[                                                                      ]
[          Address: ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[           Phone # (_____)_______________________                     ]
[                                                                      ]
[                                                                      ]
[   Check One:                                                         ]
[                                                                      ]
[   ____ Initial registration of "Turbo CALC" (suggest $40).           ]
[        NOTE: initial registration includes an upgrade to current     ]
[              version.                                                ]
[                                                                      ]
[   ____ Upgrade to current version of "Turbo CALC" (suggest $10).     ]
[        If you are a registered user, you can use this option to      ]
[        obtain an officially registered copy.                         ]
[                                                                      ]
[   PLEASE INDICATE SERIAL # AND VERSION OF PROGRAM YOU HAVE:          ]
[                                                                      ]
[             Serial # __________      Version # _______               ]
[                                                                      ]
[   PLEASE INDICATE AMOUNT ENCLOSED:                                   ]
[                                                                      ]
[             Contribution Amount ........... __________               ]
[                                                                      ]
[             TX residents add sales tax .... __________               ]
[                                                                      ]
[             Total Enclosed ................ __________               ]
[                                                                      ]
[   PLEASE INDICATE METHOD OF PAYMENT:                                 ]
[                                                                      ]
[       If using major bank card, please indicate your card no.,       ]
[       expiration date and Interbank ID Number.                       ]
[                                                                      ]
[   ___ MasterCard (r)   Interbank ID #  ______________                ]
[   ___ Visa                                                           ]
[   ___ Check            Credit Card No. ___________________________   ]
[   ___ Money Order                                                    ]
[                        Expiration Date ______________                ]
[   Sales Tax Note                                                     ]
[   --------------                                                     ]
[   To compute the proper sales tax you should include 5.25% for the   ]
[   TX state tax, Houston residents should add 1% for the city sales   ]
[   tax, and MTA residents should add an amount equal to their local   ]
[   MTA rate.  In Houston and Dallas, the MTA rate is 1%.              ]
[                                                                      ]
[   Please DO NOT send cash.  Send check, money order, or credit card  ]
[   information.  Your request will be filled promptly upon receipt.   ]
------------------------------------------------------------------------


```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

Dear Turbo CALC User:                                             2-25-87

I know you are asking yourself, "Why should I send a contribution
for Turbo CALC"?   Here are a few answers.


1.  You will receive a registered copy of Turbo CALC, with your own serial
    number.  If you distribute Turbo CALC, and someone registers your serial
    number, you will get a split of the contribution.  For every copy
    registered with your serial number, you will receive 25% of the amount
    tendered.

2.  You will receive a copy of "GT PowerComm".  This is the powerful comm-
    unications program from P & M Software Co.

2.  You will receive notification of upgrades available to Turbo CALC, as
    well as other software available though P & M Software Co., such as
    GT PowerComm.  Registered users can receive an upgrade to the latest
    version for $10.

3.  Phone support is available to registered users, have your serial #
    handy when you call.  The number is (713) 778-9471 voice and (713)
    772-2090 modem.  Usually, the voice line will answered by my wife
    during the day, so if you wish to speak with the programmer, call
    between 6pm and 10pm Central Time.  The modem line is open 24 hours.

4.  A key will be provided to registered users, so that the opening
    copyright screen can be bypassed.  In the spirit of shareware, we
    ask that the key not be disclosed to non-registered users.

5.  You will receive a live program, supported by its author.  Continued
    support of Turbo CALC or any other "User Supported" program depends on
    the financial support of its users.  Pure survival of the best and
    fitest.


As an indication of our intention to stand behind our products, we are
proud to offer all new customers a 30 day money back guarantee.

If you wish to register, or if you are already registered and wish to
upgrade to the latest version of Turbo CALC, please fill out and return
the following form:


------------------------------------------------------------------------
[                                                                      ]
[                         Registration Form                            ]
[                                                                      ]
[   Date: __________                    TO:  P & M Software Co.        ]
[                                            9350 Country Creek #30    ]
[                                            Houston, Tx  77036        ]
[                                                                      ]
[   FROM:     Name: ________________________________________           ]
[                                                                      ]
[          Address: ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[           Phone # (_____)_______________________                     ]
[                                                                      ]
[                                                                      ]
[   Check One:                                                         ]
[                                                                      ]
[   ____ Initial registration of "Turbo CALC" (suggest $40).           ]
[        NOTE: initial registration includes an upgrade to current     ]
[              version.                                                ]
[                                                                      ]
[   ____ Upgrade to current version of "Turbo CALC" (suggest $10).     ]
[        If you are a registered user, you can use this option to      ]
[        obtain an officially registered copy.                         ]
[                                                                      ]
[   PLEASE INDICATE SERIAL # AND VERSION OF PROGRAM YOU HAVE:          ]
[                                                                      ]
[             Serial # __________      Version # _______               ]
[                                                                      ]
[   PLEASE INDICATE AMOUNT ENCLOSED:                                   ]
[                                                                      ]
[             Contribution Amount ........... __________               ]
[                                                                      ]
[             TX residents add sales tax .... __________               ]
[                                                                      ]
[             Total Enclosed ................ __________               ]
[                                                                      ]
[   PLEASE INDICATE METHOD OF PAYMENT:                                 ]
[                                                                      ]
[       If using major bank card, please indicate your card no.,       ]
[       expiration date and Interbank ID Number.                       ]
[                                                                      ]
[   ___ MasterCard (r)   Interbank ID #  ______________                ]
[   ___ Visa                                                           ]
[   ___ Check            Credit Card No. ___________________________   ]
[   ___ Money Order                                                    ]
[                        Expiration Date ______________                ]
[   Sales Tax Note                                                     ]
[   --------------                                                     ]
[   To compute the proper sales tax you should include 5.25% for the   ]
[   TX state tax, Houston residents should add 1% for the city sales   ]
[   tax, and MTA residents should add an amount equal to their local   ]
[   MTA rate.  In Houston and Dallas, the MTA rate is 1%.              ]
[                                                                      ]
[   Please DO NOT send cash.  Send check, money order, or credit card  ]
[   information.  Your request will be filled promptly upon receipt.   ]
------------------------------------------------------------------------


Thanks for your support!  With your help, we can continue to bring
quality software to the "User Supported" marketplace.

Best Regards,
Paul Meiners

Proprietor
P & M Software Co.


```
{% endraw %}

## FILES651.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  651  Turbo Calc  version 8.10                               v2
---------------------------------------------------------------------------
Turbo Calc is a spreadsheet program of about medium size; 512 rows by 64
columns. It is relatively easy to use and supports the usual range of
functions, as well as text entries. Commands are by letter entry and there
is onscreen display of command choices.
 
TC810    COM  TurboCalc Main program
TC810    DOC  Documentation for TurboCalc
CALC     ???  Programs used by TurboCalc (3 files)
EDIT     ???  Programs used by TurboCalc (2 files)
EDITERR  MSG  Message header used by TurboCalc
EXAMPLE  SSF  Sample program
FORM     DOC  Registration form
GRAPH    SSF  Program used by TurboCalc
MENU     ???  Program used by TurboCalc (2 files)
PRT      BAT  Batch file to print registration form
READ     ME   Historical listing of updates to TurboCalc
README   TOO  Readme file about the archived programs
REGISTER DOC  Registration form for TurboCalc and what you'll get for it
PKXARC   COM  Unarchiveing program
87TC810  ARC  Version of TurboCalc for machines with 8087 chips
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG
```
{% endraw %}

## NOTES651.TXT

{% raw %}
```
Program name:  Turbo Calc  (v8.10)
 
Author name:   P & M Software Co.
Address:       9350 Country Creek #30
               Houston, Tx  77036
 
Telephone Number:  None
 
Suggested Donation:  $20
 
Program Description:
 
Turbo Calc is a spreadsheet program written in Turbo Pascal and supports
a medium size spreadsheet, 512 rows by 64 columns. The program uses a broad
range of mathamatical, statistical, logic, and financial functions. Column
width can be adjusted, and text entries are allowed to eighty characters.
The program requires a minimum of 256K and can use up to 640K. Turbo Calc
will import and export DIF(tm) files. The command mode for Turbo Calc is by
letter entry with ALT key, or by selection from an on-screen list that may
be displayed by pressing ESC in the program mode.
```
{% endraw %}

## FORM.DOC

{% raw %}
```

------------------------------------------------------------------------
[                                                                      ]
[                         Registration Form                            ]
[                                                                      ]
[   Date: __________                    TO:  P & M Software Co.        ]
[                                            9350 Country Creek #30    ]
[                                            Houston, Tx  77036        ]
[                                                                      ]
[   FROM:     Name: ________________________________________           ]
[                                                                      ]
[          Address: ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[           Phone # (_____)_______________________                     ]
[                                                                      ]
[                                                                      ]
[   Check One:                                                         ]
[                                                                      ]
[   ____ Initial registration of "Turbo CALC" (suggest $40).           ]
[        NOTE: initial registration includes an upgrade to current     ]
[              version.                                                ]
[                                                                      ]
[   ____ Upgrade to current version of "Turbo CALC" (suggest $10).     ]
[        If you are a registered user, you can use this option to      ]
[        obtain an officially registered copy.                         ]
[                                                                      ]
[   PLEASE INDICATE SERIAL # AND VERSION OF PROGRAM YOU HAVE:          ]
[                                                                      ]
[             Serial # __________      Version # _______               ]
[                                                                      ]
[   PLEASE INDICATE AMOUNT ENCLOSED:                                   ]
[                                                                      ]
[             Contribution Amount ........... __________               ]
[                                                                      ]
[             TX residents add sales tax .... __________               ]
[                                                                      ]
[             Total Enclosed ................ __________               ]
[                                                                      ]
[   PLEASE INDICATE METHOD OF PAYMENT:                                 ]
[                                                                      ]
[       If using major bank card, please indicate your card no.,       ]
[       expiration date and Interbank ID Number.                       ]
[                                                                      ]
[   ___ MasterCard (r)   Interbank ID #  ______________                ]
[   ___ Visa                                                           ]
[   ___ Check            Credit Card No. ___________________________   ]
[   ___ Money Order                                                    ]
[                        Expiration Date ______________                ]
[   Sales Tax Note                                                     ]
[   --------------                                                     ]
[   To compute the proper sales tax you should include 5.25% for the   ]
[   TX state tax, Houston residents should add 1% for the city sales   ]
[   tax, and MTA residents should add an amount equal to their local   ]
[   MTA rate.  In Houston and Dallas, the MTA rate is 1%.              ]
[                                                                      ]
[   Please DO NOT send cash.  Send check, money order, or credit card  ]
[   information.  Your request will be filled promptly upon receipt.   ]
------------------------------------------------------------------------


```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

Dear Turbo CALC User:                                             2-25-87

I know you are asking yourself, "Why should I send a contribution
for Turbo CALC"?   Here are a few answers.


1.  You will receive a registered copy of Turbo CALC, with your own serial
    number.  If you distribute Turbo CALC, and someone registers your serial
    number, you will get a split of the contribution.  For every copy
    registered with your serial number, you will receive 25% of the amount
    tendered.

2.  You will receive a copy of "GT PowerComm".  This is the powerful comm-
    unications program from P & M Software Co.

2.  You will receive notification of upgrades available to Turbo CALC, as
    well as other software available though P & M Software Co., such as
    GT PowerComm.  Registered users can receive an upgrade to the latest
    version for $10.

3.  Phone support is available to registered users, have your serial #
    handy when you call.  The number is (713) 778-9471 voice and (713)
    772-2090 modem.  Usually, the voice line will answered by my wife
    during the day, so if you wish to speak with the programmer, call
    between 6pm and 10pm Central Time.  The modem line is open 24 hours.

4.  A key will be provided to registered users, so that the opening
    copyright screen can be bypassed.  In the spirit of shareware, we
    ask that the key not be disclosed to non-registered users.

5.  You will receive a live program, supported by its author.  Continued
    support of Turbo CALC or any other "User Supported" program depends on
    the financial support of its users.  Pure survival of the best and
    fitest.


As an indication of our intention to stand behind our products, we are
proud to offer all new customers a 30 day money back guarantee.

If you wish to register, or if you are already registered and wish to
upgrade to the latest version of Turbo CALC, please fill out and return
the following form:


------------------------------------------------------------------------
[                                                                      ]
[                         Registration Form                            ]
[                                                                      ]
[   Date: __________                    TO:  P & M Software Co.        ]
[                                            9350 Country Creek #30    ]
[                                            Houston, Tx  77036        ]
[                                                                      ]
[   FROM:     Name: ________________________________________           ]
[                                                                      ]
[          Address: ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[                   ________________________________________           ]
[                                                                      ]
[           Phone # (_____)_______________________                     ]
[                                                                      ]
[                                                                      ]
[   Check One:                                                         ]
[                                                                      ]
[   ____ Initial registration of "Turbo CALC" (suggest $40).           ]
[        NOTE: initial registration includes an upgrade to current     ]
[              version.                                                ]
[                                                                      ]
[   ____ Upgrade to current version of "Turbo CALC" (suggest $10).     ]
[        If you are a registered user, you can use this option to      ]
[        obtain an officially registered copy.                         ]
[                                                                      ]
[   PLEASE INDICATE SERIAL # AND VERSION OF PROGRAM YOU HAVE:          ]
[                                                                      ]
[             Serial # __________      Version # _______               ]
[                                                                      ]
[   PLEASE INDICATE AMOUNT ENCLOSED:                                   ]
[                                                                      ]
[             Contribution Amount ........... __________               ]
[                                                                      ]
[             TX residents add sales tax .... __________               ]
[                                                                      ]
[             Total Enclosed ................ __________               ]
[                                                                      ]
[   PLEASE INDICATE METHOD OF PAYMENT:                                 ]
[                                                                      ]
[       If using major bank card, please indicate your card no.,       ]
[       expiration date and Interbank ID Number.                       ]
[                                                                      ]
[   ___ MasterCard (r)   Interbank ID #  ______________                ]
[   ___ Visa                                                           ]
[   ___ Check            Credit Card No. ___________________________   ]
[   ___ Money Order                                                    ]
[                        Expiration Date ______________                ]
[   Sales Tax Note                                                     ]
[   --------------                                                     ]
[   To compute the proper sales tax you should include 5.25% for the   ]
[   TX state tax, Houston residents should add 1% for the city sales   ]
[   tax, and MTA residents should add an amount equal to their local   ]
[   MTA rate.  In Houston and Dallas, the MTA rate is 1%.              ]
[                                                                      ]
[   Please DO NOT send cash.  Send check, money order, or credit card  ]
[   information.  Your request will be filled promptly upon receipt.   ]
------------------------------------------------------------------------


Thanks for your support!  With your help, we can continue to bring
quality software to the "User Supported" marketplace.

Best Regards,
Paul Meiners

Proprietor
P & M Software Co.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0651

     Volume in drive A has no label
     Directory of A:\

    87TC810  ARC    154288   3-18-87   5:29p
    FILES651 TXT      1322   5-11-07   9:09a
    NOTES651 TXT       815   5-11-07   9:16a
    PKXARC   COM     11482  12-15-86
    README   TOO       563   2-28-87   4:53p
    TC810    ARC    155800   3-18-87   5:28p
            6 file(s)     324270 bytes
                           34816 bytes free
