---
layout: page
title: "PC-SIG Diskette Library (Disk #2124)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2124/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2124"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-PAYROLL W-4 MODULE"

    Compute the exact withholdings of Federal, FICA and State Taxes for up
    to 30 different employees. The tax tables are valid for 1989 taxes in
    all 50 U.S. states.
    
    PC-PAYROLL W-4 asks questions related to the IRS Form W-4 and
    automatically computes withholdings for each employee. It can also
    compute all taxes for the year 1989. It greatly reduces the amount of
    time normally spent on tax calculations, and prints individual W-4
    worksheets.
    
    Note that this program needs to be updated yearly.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2124.TXT

{% raw %}
```
Disk No: 2124                                                           
Disk Title: PC-Payroll W-4 Module                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Payroll W-4 Module                                    
Author Version: 1.08                                                    
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
PC-PAYROLL W-4 MODULE will compute the exact withholdings of Federal,   
FICA and State Taxes for up to 30 different employees.  The tax tables  
that this program uses are valid for 1989 taxes in all 50 states.  This 
program will ask questions related to IRS Form W-4 and automatically    
compute the withholdings for each employee.  This program is also       
capable of computing all taxes for the year 1989.   PC-PAYROLL W-4      
MODULE will greatly reduce the amount of time that is normally spent on 
tax calculations, and can print out individual W-4 worksheets.          
                                                                        
Program Limitations:  Program needs to be updated yearly.               
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## W-4.DOC

{% raw %}
```





             A W-4 in 8 Easy Screens

These instructions work best with the PC-PAYROLL
W-4 Module "up" and ready to go.  Making a W-4 is
the easiest way to learn this program.

On a FEW machines, an F-Key may give no response.
In those cases the equivalent numeric key works
(1 = F-1, etc.).

TO BEGIN:  At A> type W-4 for the Main Menu.

SCREEN 1) - Main Menu:  Type "F1" (or "1").

SCREEN 2) - Employee Selection Menu:

    * Access an existing record by typing its
      assigned number.
    * Create a new record by typing in an
      "unused" number.

<<<<<<<<<<<<<<<<<<<<< NOTE >>>>>>>>>>>>>>>>>>>>>
   The remaining screens were designed as an
   interview. When all queries answered, the
   result will be a completed W-4 Certificate.
   IF UNNEEDED, SCREENS 6 & 7 WILL NOT APPEAR.
<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>

SCREEN 3) - Enter (or Update) a Record:

    * Name, Address, SSN.  (F1 thru F6 initiate
      the various input prompts: .....  Type in
      data; press ENTER.)
    * All records may be scrolled by menu
      options A, P, or N.
    * Type menu option C when ready for SCREEN 4.




SCREEN 4) - Filing Status/Second Job Worksheet:

    * 5 SETS of queries (F1-F5) make up this
      section.
    * Toggle through choices on each F-Key to
      select appropriate status statements.  The
      number of choices per F-Key varies (2-7).
      Make sure to toggle through all choices per
      F-Key before selection.

SCREEN 5) - Personal Allowances Worksheet:

    * 6 queries (F1-F6) make up this section.
    * All queries toggle (0/1) except F4.
    * F4 initiates input prompt (...).  Type in
       numerical data; press ENTER.

SCREEN 6) - Deductions and Adjustments Worksheet:

    * 3 queries (F1-F3 plus HELP (F10).
    * USE ONLY IN TWO CASE OUTLINED ON SCREEN.

SCREEN 7) - Two-Earner/Two-Job Worksheet:

    * 2 queries (F1, F2) IF APPLICABLE.
    * If not applicable, press "C" to continue.

SCREEN 8) - The completed W-4 Certificate

    * Select "payroll frequency" (F1 toggles
      5 choices).
    * F2; type in "period wages/salary"; press
      ENTER.
    * F3 prints substitute W-4 Certificate.

The W-4 Certificate is now complete.  30 such W-4
Certificates may be stored within this W-4 module
of PC-PAYROLL.




                Other Good Stuff

From the Main Menu of this W-4 Module:

  * F-2 activates a one-screen tax estimator.
    This program contains the 1990 Federal (income
    and FICA) and State withholding formulas for
    all 50 states!  This will enable you to
    estimate withholding tax by pay period AND
    annually.  This info can be used to avoid
    penalties for under withholding and for
    general planning purposes.

  * F-3 summons a 3-screen help file that should
    be read even though you're now an ace
    W-4ologist. It contains info about prompts,
    command lines, facsimile W-4 forms (not IRS
    approved), and other such helpful stuff.

  * F-4 summons a 3-screen library of info about
    W-4s and the process of employer withholding.

  * F-5 summons info about this W-4 module.

  * F-6 is about the real good stuff, PC-PAYROLL,
    the parent program of this W-4 Module.


For information on other software, or updates to
this program, contact us at:

              Peninsula Software, Inc.
              P.O. Box 2010
              Newport News, VA  23609

(Updates for this program are $10 + $5 shipping and 
handling.  Virginia residents add 4 1/2%  sales tax.)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2124

     Volume in drive A has no label
     Directory of A:\

    W-4      EXE    117838   1-21-90   1:08a
    W-4      DOC      3606   1-21-90   1:08a
    READ     ME       1338   1-21-90   1:08a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   4-16-90   5:46a
    FILE2124 TXT      1999   4-16-90   6:59p
            6 file(s)     125359 bytes
                           32768 bytes free
