---
layout: page
title: "PC-SIG Diskette Library (Disk #672)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0672/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0672"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREEWAY 2 OF 3 (ALSO 671, 673)"

    This is a payroll management system built expressly for the European
    businessplace. FREEWAY PAYROLL programs can accomodate weekly,
    fortnightly, four weekly and monthly pay frequencies. The programs
    provide:
    
    ~ Payslip stationery (obtainable from the author)
    
    ~ Bank Giro's and payment lists
    
    ~ Cheque printing
    
    ~ Internal pension schemes with fixed sum or percentage contributions
    ~ Additional voluntary contributions
    
    ~ Up to 99 departments each with a coin analysis and cost of payroll
    total
    
    You may create your own headings for taxable and non-taxable additions
    to pay and post-tax deductions. You may produce lists of deductions
    under these headings. (Year-end documentation includes P35 and P60
    forms, also obtainable from author.) The system accommodates
    statutory sick pay, and password protection. The user may change tax
    rates and bandwidths, as well as earnings brackets.
    
    Each employee may have attached to his record card, in addition to basic
    pay and hours, any regularly occuring payment or deduction. During
    entry of pay data, only these employees will have the variables entered.
    Calculation of pay and deductions is very flexible,
    permitting recalculation if necessary.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES672.TXT

{% raw %}
```
Disk No  672
Program Title: FREEWAY PAYROLL SOFTWARE (disk 2 of 3)
PC-SIG version 2
 
    FREEWAY is the complete financial package for any company or
individual. The program has everything that you need ranging from
checkbook balancing, purchasing, payroll, general ledger, check printing
and more.
 
    FREEWAY PAYROLL programs can accommodate weekly, fortnightly, four
weekly and monthly pay frequencies. The programs provide for: Payslip
stationery (obtainable from FREEWAY), Bank Giro's, payment Lists, Check
printing internal pension schemes with fixed sum or percentage
contributions and additional voluntary contributions. Up to 99 departments
each with a coin analysis and cost of payroll total. You may create your
own headings for taxable and non-taxable additions to pay - and post tax
deductions. You may produce lists of amounts deducted / paid under these
headings. Year-end documentation includes P35 and P60 forms. (Obtainable
from FREEWAY.) Accommodates statutory sick pay and password protection. The
user may change tax rates, bandwidths, earnings brackets, Etc and bulk paye
code change facility.
 
    Each employee may have attached to his record card, in addition to
basic pay and hours, any regularly occurring payment - or deduction. During
entry of pay data only those employees who have variables need be examined
and the variables entered. Calculation of pay and deductions are very
flexible permitting the pay cycle to be easily re-done should errors come
to light, until an End-Processing Update is carried out. This may be the
first operation of the following week.
 
Usage: Financial
 
System Requirements: 256K
 
How to Start: Type GO (press enter)
 
Suggested Registration: Refer to PRICES.DOC for complete costs.
 
File Descriptions:
 
BASRUN   EXE  Compiler library
????????      Data file (15 files)
FREEWAY  DOC  Documentation file
FREEWAY  SYS  System file
HDINIT   BAT  Hard disk system intializing batch file (part 1)
HDINIT2  BAT  Hard disk system intializing batch file (part 2)
HSTART   BAT  Batch file to start program on hard disk
HSTATUS  PAY  Data file
INIT     BAT  Batch file to install DOS on a working disk
ORDER    DOC  Order form text file
PRICES   DOC  Accessory price list
PRINTMAN BAT  Batch file to print manual
PRINTORD BAT  Batch file to print order form
READ     ME   Introductory text file
README   BAT  Batch file to type out READ.ME file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## FREEWAY.DOC

{% raw %}
```







                                WELCOME TO


                     F R E E W A Y   S O F T W A R E


                         A totally new concept in

                                  F R E E

                      professional business software.


                             [ February 1987 ]
















 









                                             Freeway Software Ltd
                                             P.O. Box 33
                                             Wigan
                                             Lancashire
                                             WN3 4EG

                                             Tel: 0942 826329
     ID No. ______________



                    AN INTRODUCTION TO FREEWAY SOFTWARE      



     Welcome to FREEWAY Software - a new concept introducing you to 
     a whole range of software for the business user.

     This software,  now available to you and your colleagues,has been 
     in  daily  use  in many and varied businesses for  the  last  six 
     years.  The  enhancements made  over this period are all included 
     in your version. 

     The enclosed disks contain  FREEWAY programs for Sales Ledger,    
     Purchase Ledger, Invoice Production and Payroll.

     FREEWAY SOFTWARE is available for you to use freely and there are 
     no limitations to its use other than those imposed by disk  size. 
     (Unlike  many other software companies we actively encourage  you 
     to  take copies of FREEWAY programs for other users - no  licence 
     fee is involved.)

     This  introductory leaflet will provide adequate information  for 
     you to use the system in its entirety. We feel sure that you will 
     find  the  programs  invaluable in  the  administration  of  your 
     business. 

     Should  you require a full and detailed manual to enable  you  to 
     use  the programs to full advantage telephone FREEWAY for a  copy 
     at minimal cost. 


     Should you require ASSURED SUPPORT you may wish to take advantage 
     of our telephone help service. Contact FREEWAY for details.









                           FREEWAY SOFTWARE LTD
                               (0942) 826329



                        SALES & PURCHASE ACCOUNTING


                         INSTALLATION INSTRUCTIONS

      
     BEFORE  PROCEEDING  FURTHER TAKE A COPY OF THE FREEWAY  DISK  AND 
     KEEP THE ORIGINAL IN A SAFE PLACE.

     If  you  are not familiar with copy routines refer to the  manual 
     accompanying your computer.

     Before  you  can  start  using  your  FREEWAY  Sales  &  Purchase 
     Accounting Software, it is necessary to configure the programs to 
     match your requirements.  This installation procedure is normally 
     performed once only. 

             IF YOUR COMPUTER CONTAINS TWO FLOPPY DISK DRIVES

     These instructions refer to a computer with two floppy drives. An 
     explanation for HARD DISK users follows on the next page.

     You will now require:

     1. A COPY (not the original) of the Master DOS Disk supplied with
        your computer. LABEL IT FREEWAY DOS DISK. Ensure that this disk 
        contains the ANSI.SYS file provided with your Master DOS disk.
      
        [Use  DISKCOPY  to  copy your Master DOS disk - refer  to  the 
        manual supplied with your computer for details.]

        Apricot & Sirius users will require instead a formatted disk 
        containing DOS.   LABEL IT FREEWAY DOS DISK.

     2. A new disk  which has been formatted ready for use.
        LABEL IT FREEWAY ACCOUNTING DATA DISK.

        [If you  are unfamiliar with the format routine refer  to  the 
        manual supplied with your computer.]


                               AWAY WE GO !

     Switch  on  the computer and Boot Up from your FREEWAY  DOS  disk 
     which should be placed in drive A.


     Place the FREEWAY ACCOUNTING PROGRAM DISK in drive B 

     Type B: and press the enter key. 

     Type INIT1 and press the enter key. 
     [ Apricot or RM Nimbus users instead type APRFD 
       then skip to the GETTING STARTED section ]

     Follow the instructions displayed on the screen until the "INIT1 
     COMPLETE" message appears on the screen. 

     Re-boot the computer OR (without removing the disks) switch off 
     the computer, wait for a few seconds and then switch on again. 



     Type B: and press the enter key. 

     Type INIT2 and press the enter key.

     Follow  the  instructions on the screen.  

     The  computer will ask you for details of your business  name and 
     address  etc.  (Have your VAT registration number and  post  code 
     handy.)

     Having created your accounting data disk, your FREEWAY Accounting
     System is ready to use. 

     General  instructions  and system conventions are shown later  in 
     this introduction. 



                IF YOUR COMPUTER CONTAINS A HARD DISK DRIVE
                ===========================================

  IF YOUR COMPUTER IS IBM COMPATIBLE :

     If ANSI.SYS was provided with the Operating System when you
     purchased your computer, ensure that it is contained in your
     root directory.

     Insert the FREEWAY ACCOUNTING PROGRAM disk in drive A

     Type A: and press the enter key. 

     Type HDINIT1 then press enter.

     Follow  the  instructions  displayed  on  the  screen  until  the        
     "HDINIT1  COMPLETE" message  appears. 

     You may then remove the FREEWAY ACCOUNTING PROGRAM disk.

     Switch  off the computer,  wait for a few seconds then switch  on 
     again. 

     Type HDINIT2 and press the enter key. 

     The  computer  will  ask you for details of your  business  name, 
     address  etc.  (Have your VAT registration number  and  post-code 
     handy.)

     This information will be permanently stored with your  accounting 
     data  and  will be used where appropriate,  on printouts such  as 
     statements of account.

     Having  created  your  accounts data on the hard  disk  (for  the 
     technically  oriented in  \FREEACC\   Subdirectory) your  FREEWAY 
     Accounting System is ready to use. 

     
  IF YOUR COMPUTER IS AN APRICOT OR SIRIUS :

     Insert the FREEWAY ACCOUNTING DATA disk in drive B

     Type B:    and press the enter key

     Type APRHD and press the enter key

     The  computer  will  ask you for details of your  business  name, 
     address  etc.  (Have your VAT registration number  and  post-code 
     handy.)

     This information will be permanently stored with your  accounting 
     data  and  will be used where appropriate,  on printouts such  as 
     statements of account.

     Having  created  your  accounts data on the hard  disk  (for  the 
     technically  oriented in  \FREEACC\   Subdirectory) your  FREEWAY 
     Accounting System is ready to use. 




               OUTLINE INSTRUCTIONS AND SYSTEM CONVENTIONS. 

     GETTING STARTED

     If your computer is a twin floppy drive system: 

     Insert the FREEWAY ACCOUNTING PROGRAM DISK in drive A 
     Insert the FREEWAY ACCOUNTING DATA DISK in drive B 

     Ensure  that  you are in CAPS lock and NUMBER lock mode. 

     For  hard disk and twin floppy systems alike all you need now  do 
     is :

     Type ACCOUNTS and press the enter key. 

     Enter the date in the following format (DDMMYY) e.g.

     Date: 210784

     Enter 21st July 1984 in the format shown above.

                         Select S for Sales Ledger 
                                P for Purchase Ledger

     SYSTEM CONVENTIONS

     The use of the system is largely self-explanatory. 

     The following rules generally apply to all modules: 


          C  (Enter)  will  CANCEL an entry  part  way  through- where 
             appropriate.

          E  (Enter) will END what you are doing.
             (Usually inserted in the date or account number field.)
      
     In  certain circumstances you will CANCEL what you are doing  and 
     then E to END.


     Having  selected Sales or Purchases print out a Sales or Purchase 
     Daybook Summary and note the "Nominal  Analysis  Headings" 

     These  should  be  amended  to  be appropriate for your own business.

     NOTE  THAT THE FIRST HEADING OF EITHER SALES OR PURCHASES  SHOULD 
     BE SET UP FOR THE MOST PREDOMINANT TYPE OF SALE OR  PURCHASE. 

     In  default  of an alternative number being entered  this  number 
     will be adopted. This speeds entry up considerably.

     CUSTOMERS  or SUPPLIER  records should be created  and  documents 
     encoded with the customer number and nominal analysis code before 
     entering a batch of invoices. 











     VAT  STATISTICS   accumulate values from both sales and  purchase 
     ledgers.  They should be printed and cleared at intervals to  co-
     incide with your VAT periods.

     The Vat Code numbers are used when entering invoices to allow for 
     correct  allocation to the Vat Statistics file and  for  charging 
     VAT at the correct rate during Invoice Production.


     CASH  POSTING  includes the facility to  automatically  discharge 
     invoices in order of entry. In addition invoices may be placed on 
     HOLD  if  in  dispute  and there is a facility  to  note  JOURNAL 
     entries.

     This introduction should enable you to become operational.

     Should  you  require a full and detailed manual to enable you  to 
     use  the  programs  to full advantage telephone  FREEWAY  at  the 
     number below for a  copy at minimal cost. 

     Should  you  require  ASSURED SUPPORT  from  our  telephone  help 
     service,  contact FREEWAY software support on: 

                           FREEWAY SOFTWARE LTD
                               (0942) 826329

              *********************************************
              * ALWAYS REMEMBER TO BACKUP YOUR DATA DISKS *
              *                                           *
              * DATA Files to be copied are :-   *.       *
              *                                  *.TAB    *
              *   (for SALES/PURCHASE)                    *
              *********************************************












                                WELCOME TO

             F R E E W A Y    P A Y R O L L    S O F T W A R E

                          A totally new concept in 

                                  F R E E

                      professional business software.

























                                             Freeway Software Ltd
                                             P.O. Box 33
                                             Wigan
                                             Lancashire
                                             WN3 4EG

                                             Tel: 0942 826329
     ID No. ______________




             AN INTRODUCTION TO THE FREEWAY PAYROLL PROGRAMS.


     FREEWAY PAYROLL programs can accomodate weekly, fortnightly, four 
     weekly and monthly pay frequencies. 

     The programs provide for: 

     Payslip stationery (obtainable from FREEWAY)
      
     Bank Giro's and Payment Lists.

     Cheque Printing.

     Internal   Pension   Schemes   with  fixed  sum   or   percentage 
     contributions.

     Additional Voluntary Contributions.

     Up  to  99  departments each with a coin  analysis  and  cost  of 
     payroll total.

     You  may  create  your own headings for taxable and  non-taxable 
     additions to pay - and post tax deductions. 

     You  may  produce lists of amounts deducted /  paid  under  these 
     headings. 

     Year-end documentation includes P35 and P60  forms.   (Obtainable 
     from FREEWAY.)

     Accomodates Statutory Sick Pay. 

     Password protection.

     The user may change Tax Rates and Bandwidths,  Earnings  Brackets 
     Etc. 

     Bulk PAYE code change facility.




                             GENERAL APPROACH

     Each  employee may have attached to his record card,  in addition 
     to  basic  pay and hours,   any  regularly  occuring  payment  - or 
     deduction.

     During entry of pay data only those employees who have  variables 
     need be examined and the variables entered.

     Calculation  of pay and deductions is very flexible permitting the 
     pay cycle to be easily re-done should errors come to light, until 
     an  End-Processing Update is carried out.  This may be the  first 
     operation of the following week. 




                              FREEWAY PAYROLL

                         INSTALLATION INSTRUCTIONS

      
     BEFORE  PROCEEDING  FURTHER TAKE A COPY OF THE FREEWAY  DISKS AND 
     KEEP THE ORIGINALS IN A SAFE PLACE.

     If  you  are not familiar with copy routines refer to the  manual 
     accompanying your computer.

     Before  you can start using your FREEWAY PAYROLL Software,  it is 
     necessary  to configure the programs to operate on your machine. 

     This installation procedure is normally performed once only. 

             IF YOUR COMPUTER CONTAINS TWO FLOPPY DISK DRIVES

     These  instructions  refer  to a computer with  two  floppy  disk 
     drives.  An  explanation for HARD DISK users follows on the  next 
     page.


     If you have not created a Freeway DOS Disk then you will now
     require:

        A COPY (not the original) of the Master DOS Disk supplied with
        your computer. LABEL IT FREEWAY DOS DISK! Ensure that this disk 
        contains the ANSI.SYS file (if this file was provided with your   
        Master DOS disk).
      
        [Use  DISKCOPY  to  copy your Master DOS disk - refer  to  the 
        manual supplied with your computer for details.]

        Apricot & Sirius users will require instead a formatted disk 
        containing DOS. LABEL IT FREEWAY DOS DISK - PAYROLL PROGRAMS 
                                                            AND DATA 

                               AWAY WE GO !



     Switch  on  the computer and Boot Up from your FREEWAY  DOS  disk 
     which should be placed in drive A.

     Place the FREEWAY PAYROLL DATA disk in drive B 

     Type B: and press the enter key. 

     Type INIT and press the enter key. 
     [ Apricot and RM Nimbus users instead type APRFD ]

     Wait for the "PAYROLL INSTALLATION COMPLETE" message to appear on 
     the  screen,  then  (without removing the disks) switch  off  the 
     computer. Wait for a few seconds and then switch on again. Alter-
     natively you may Re-Boot the computer. 

     Your FREEWAY PAYROLL system  is now ready to use. 




                IF YOUR COMPUTER CONTAINS A HARD DISK 
                =====================================

  IF YOUR COMPUTER IS IBM COMPATIBLE :

     If ANSI.SYS was provided with the Operating System when you
     purchased your computer, ensure that it is contained in your
     root directory.

     Insert the FREEWAY PAYROLL DATA disk in drive A

     Type A: and press the enter key. 

     Type HDINIT and press the enter key. 


     Follow the instructions displayed on the screen until the
     "PAYROLL INSTALLATION COMPLETE" message appears then you may 
     remove the FREEWAY disk.

     Re-boot the computer OR switch off the computer, wait for a few 
     seconds then switch on again. 

     Your FREEWAY PAYROLL System is now ready to use, installed on the 
     hard disk drive.

     Remove the floppy disk and store in a safe place.

     Instructions on the use of the system now follow. 


  IF YOUR COMPUTER IS AN APRICOT OR SIRIUS :

     Insert the FREEWAY PAYROLL DATA disk in drive B

     Type B:    and press the enter key

     Type APRHD and press the enter key

     Follow the instructions displayed on the screen until the
     "PAYROLL INSTALLATION COMPLETE" message appears then you may 
     remove the FREEWAY disk.

     Your FREEWAY PAYROLL System is now ready to use, installed on the 
     hard disk drive.

     Remove the floppy disk and store in a safe place.

     Instructions on the use of the system now follow. 






                      HOW TO USE THE PAYROLL PROGRAMS



     If your computer contains two floppy disk drives place the prog-
     ram disk in drive A and the data disk in drive B.
     [ Apricot and Sirius users use drive A only. ]

     When  installed on a hard disk system the programs and data  will 
     be resident on the hard disk. 

     On  some computers the keyboard will have to be set to  recognise 
     U.K.  character  sets.  Refer  to  the  documentation  with  your 
     computer - or your supplier.

     Ensure that you are in CAPSLOCK mode. 

     Type PAYSTART and press the enter key.

     Enter  the password -  PAYROLL and press the enter key.

     (The password  may be changed by accessing the AMEND COMPANY 
     CONSTANTS routine - instructions follow later) 

     Insert the date  (1st June 1985 should be entered as 010685 ) 

     You will be rewarded with a menu of the available options.



                            SYSTEM CONVENTIONS

            E    followed by the enter key will END the routine. 
            C    followed  by  the  enter  key  will  CANCEL  the 
                 entry  where appropriate. 
            ?    entered  in  most  fields will reward  you  with  an 
                 explanation of valid entries. 

            @    entered in the company constants area related to the 
                 additional user defined payments and deductions, will
                 clear  the  original  description and  permit  a  new 
                 insertion.      

             EMPLOYEE REFERENCES ARE STRICTLY NUMERIC 2 - 100
                  (Number 1 is used internally by the system.) 


              *********************************************
              * ALWAYS REMEMBER TO BACKUP YOUR DATA DISKS *
              *                                           *
              * DATA Files to be copied are :-   *.       *
              *                                  *.KEY    *
              *   (for PAYROLL)                           *
              *********************************************




                 HAVING INSTALLED YOUR PAYROLL WHAT NEXT ?



     You will wish to amend the Company Constants to show your name 
     and address.

     Select Option 1 - TABLES MAINTENANCE followed by sub-menu Option 
     7. Amend the details as appropriate. 

     Print all the tables and examine them. Confirm that the tax 
     bandwidths and rates and national insurance figures are those 
     currently in force. 

     Whilst   you  should  be  able  to  process  your  payroll  quite 
     routinely  from these outline instructions,  a MANUAL  obtainable 
     from FREEWAY at minimal cost also includes a list of the  current 
     bandwidths etc. 

     To  change  the  PASSWORD select TABLES MAINTENANCE  followed  by 
     AMEND COMPANY CONSTANTS and enter field number 40. 

     Now  you  can  create  your employee  records  and  proceed  with 
     processing.



                  THE NORMAL ORDER OF ROUTINE PROCESSING. 


          1       Create new Employees and do any amendments.  

          2       Enter any PAY VARIABLES. 

          3       Calculate Pay.

          4       Print Pay Advices.
                  (  Check  the result and go back to  1  if  required 
                     followed by a recalculate.) 

          5       Print the Department Summary.

          6       Print a Payroll Summary (if required)

          7       Take a backup copy of the data disk. 

          8       When you are satisfied that the paycycle is FINAL
                  do the End Processing Up-date.

     Should you require a MANUAL or ASSURED SUPPORT then contact:


                           FREEWAY SOFTWARE LTD

                               (0942) 826329

```
{% endraw %}

## ORDER.DOC

{% raw %}
```

FROM:                                  TO: FREEWAY SOFTWARE LTD
                                           PO Box 33
                                           Wigan
                                           Lancs
                                           WN3 4EG


Tel:

Order orginated by:

PURCHASE ORDER  No .............                 DATE .........


PLEASE SUPPLY THE FOLLOWING:-
===========================

ITEM                                 QTY          PRICE inc VAT
====                                 ===          =============

Starter Kit......................    ...          .............

Accounting User manual...........    ...          .............

Accounting Telephone Support
and Upgrade Eligibility..........    ...          .............

Invoice Stationery...............    ...          .............

Statement Stationery.............    ...          .............

Payroll User Manual..............    ...          .............

Payroll Telephone Support
and Upgrade Eligibility..........    ...          .............

Payslips.........................    ...          .............

Year-end P14/P60 Stationery......    ...          .............

Printout Binders (5 Pack)........    ...          .............

Drive Head Cleaning Kit..........    ...          .............

.................................    ...          .............

.................................    ...          .............

                                                  -------------
                       Cheque enclosed for   
                                                  =============

Please indicate your interest in any other 
products that you would like Freeway to offer..................

...............................................................

We heard of you through........................................


* To print another order form, insert the Payroll Data Disk,
  type PRINTORD then press enter.

```
{% endraw %}

## PRICES.DOC

{% raw %}
```
                FREEWAY SOFTWARE - PRICE LIST              April 1987
                =============================

                                                NET           PRICE     
                                                PRICE         inc VAT      
STARTER KIT                                                          
                                                                     
   Sales ledger, purchase ledger,               13.04           15.00 
   payroll, disks and introductory manual                            
                                                                     
                                                                     
ACCOUNTING SYSTEM                                                    
                                                                     
   User Manual                                  30.00           30.00 (No VAT)
                                                                     
   Telephone Support and Upgrade Eligibility    30.00           34.50 
                                                                     
   Invoice Stationery (2-Part)                                          
     1000 pack                                  59.00           67.85 
      250 pack                                  20.00           23.00 
                                                                     
   Statement Stationery (2-Part)                                        
     1000 pack                                  59.00           67.85 
      250 pack                                  20.00           23.00 
                                                                     
PAYROLL SYSTEM                                                       
                                                                     
   User Manual                                  30.00           30.00 (No VAT)
                                                                     
   Telephone Support and Upgrade Eligibility    30.00           34.50 
                                                                     
   New Tax & N.I. Rates Disk                    20.00           23.00
      (Free to current support contract holders) 

   Payment/Deduction Analysis Program           20.00           23.00

   Payslips (2-Part)                                                 
      2000 Pack                                 90.00          103.50 
      1000 Pack                                 55.00           63.25 
       250 Pack                                 20.00           23.00 

   Bank Giro Credits
       250 Pack                                 17.50           20.13 
   Year-End P14/P60 Stationery                                       
       100 Pack                                 17.00           19.55 

Printout Binders (5 Pack)                        5.48            6.30
Drive Head Cleaning Kit                         10.00           11.50

PC MAP (IBM Compatibles only)                    5.65            6.50

"Coffee-Time" Utility Disk 1                     5.65            6.50
[ IBM and compatibles only (Requires Graphics) ]

Please send cheque with order to:  FREEWAY SOFTWARE LTD
                                   PO BOX 33
                                   WIGAN, LANCS
                                   WN3 4EG          TEL: (0942 826329)

[ To print an order form, insert the Payroll Data Disk, type PRINTORD 
  then press Enter.                                                   ]
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0672

     Volume in drive A has no label
     Directory of A:\

    BASRUN   EXE     20608   1-01-80  12:21a
    CODETS             571   4-03-87   5:01p
    EBTAB              160   3-31-87   6:32p
    FILES672 TXT      2566   7-30-87  11:43a
    FREEWAY  DOC     20608   4-03-87   5:04p
    FREEWAY  SYS       128   4-14-87  10:09a
    GO       BAT        38   7-28-87   3:00p
    GO       TXT       463   7-28-87   3:00p
    HDINIT   BAT       256   4-09-87   1:51p
    HDINIT2  BAT       640   9-02-86   1:18p
    HSTART   BAT       128   9-02-86  10:18a
    HSTATUS  PAY       128   9-02-86  12:35p
    INIT     BAT       896   9-02-86   1:16p
    MSGFILE           4864   4-01-87  10:19a
    NIRATES            268   3-31-87   6:08p
    ORDER    DOC      2048   1-28-87   5:21p
    PFRATES            128   5-20-86   4:16p
    PIWSEG           21000   4-03-87   5:02p
    PMF1             12800   4-03-87   5:01p
    PMF2             12800   4-03-87   5:01p
    PMF3             12800   4-03-87   5:02p
    PMF4             12800   9-01-86   6:14p
    PMF5             16000   4-03-87   5:02p
    PMF6             25600   9-01-86   6:18p
    PRICES   DOC      3584   4-16-87   2:57p
    PRINTMAN BAT       256  11-12-86  12:47p
    PRINTORD BAT       256  11-12-86  12:47p
    READ     ME        256  10-02-86  10:09a
    README   BAT       128   4-14-87  10:42a
    SMPRATES            12   3-30-87   7:38p
    SSPRATES            32   3-30-87   7:38p
    TAXRATES           104   3-28-87  10:48p
           32 file(s)     172926 bytes
                          129024 bytes free
