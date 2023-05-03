---
layout: page
title: "PC-SIG Diskette Library (Disk #1960)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1960/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1960"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPC-PAYROLL"

    SPC-PAYROLL is a payroll system designed for small companies which allow
    you to keep a payroll record and print out payroll forms for all your
    employees. For each employee you may enter all the information for thei
    wages, taxes and deductions from your checkbook stubs. SPC-PAYROLL can
    then print out transaction reports showing all the information entered.
    Various quarterly reports can be printed as needed. One report allows
    for maximum yearly earnings in which overages are listed separately.
    Program allows for SDI deductions where needed. SPC-PAYROLL also prints
    a year to date report, and you may print out payroll W-2 forms for your
    employees as well.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1960.TXT

{% raw %}
```
Disk No: 1960                                                           
Disk Title: SC-Payroll                                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Payroll                                               
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
SPC-PAYROLL is a payroll system designed for small companies which allow
you to keep a payroll record and print out payroll forms for all your   
employees.  For each employee you may enter all the information for thei
wages, taxes and deductions from your checkbook stubs.  SPC-PAYROLL can 
then print out transaction reports showing all the information entered. 
Various quarterly reports can be printed as needed.  One report allows  
for maximum yearly earnings in which overages are listed separately.    
Program allows for SDI deductions where needed.  SPC-PAYROLL also prints
a year to date report, and you may print out payroll W-2 forms for your 
employees as well.                                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1960  SC-PAYROLL  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  SPCPRL  (press enter)                          ║
║                                                                         ║
║ To print documentation, type:  COPY SPCPRL.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SPCPRL.DOC

{% raw %}
```

























                                    SPC - PAYROLL
                                   ---------------
                                     Version 1.0

                                         By:

                                     I. J. Smith
                                  9795 Rustling Oaks
                                Baton Rouge, La. 70818

                                ----------------------

































                                     OVERVIEW

            This program is intended for accountants and various small
       businesses not needing a complex program to generate and print payroll
       checks.  This allows for an easier to use program to maintain payroll
       information.  By eliminating hand postings, payroll data can be kept
       in balance and fast reports generated as needed.  Transaction report
       totals can easily be used for general ledger entries.

            Rather then try to satisfy all the various states's form
       requirements, the program will generate several quarterly reports
       that in the very least should provide the needed information.  Some
       states may accept these printed employee earnings reports by simply
       attaching them to their cover sheets.

            The program provides a report for those needing to reflect
       fixed annual maximum wages.  A default amount is provided for in the
       company data file and this amount can be changed when the report is
       generated.  A prompt is provided at that time.

            Printing of W2's is provided for.  A single W2 can be printed as
       well.  These can be printed as needed.  A W2 register can be printed
       as well.  This W2 report can be useful throughout the year as well.

            Requirements for the program is DOS 2.x (or higher), at least
       384k ram, a printer capable of printing at least 110 characters per
       line, and a proper CONFIG.SYS file in the root directory (see
       CONFIG.SYS below).  A hard disk and color monitor is highly recommended
       as well.

            Following are instructions in the use of the program.  They are
       listed in the order of the main menu options and report menu options.
       Popup menu options are described under the above options calling them.
       Program is started by entering  PRL  at the prompt.

            The ESC key is used thruout to cancel or end data entries, and
       the F10 function key is used to save or process.  Other options are
       displayed on the various data entry screens.  Data displayed in data
       entry fields can be accepted as defaults.

            If you like this program, send 25.00 to become an owner of record.
       You will then be sent an enhanced version of the program which will
       allow you to change descriptions of the four misc deductions used in
       the program.  You will also have the option of placing the data files
       on floppies (useful for accountants with various small accounts).
       Owners of record of SC-PAYROLL desiring this program, send only 5.00.

            Please feel free to make copies of this program for anyone who
       may have use of it.

                               I. J. Smith
                               9795 Rustling Oaks
                               Baton Rouge, La. 70818

       =======================================================================
                                    DISCLAIMER
       =======================================================================
       The author makes no warranty concerning the fitness of this program and
       shall have no liability for any loss of business or other damages. Make
       sure you understand this program before using it.
       =======================================================================





       MAIN MENU OPTION 1   Transactions                       INSTRUCTIONS

            Use this option to enter, change and delete check stub entries.
       A popup menu will allow you to choose data entry or changes to previous
       entries.

            You will be prompted for the employee number the data pertains to.
       Make sure you have entered an employee master record for the employee,
       the program will not allow you to enter data for the employee otherwise.
       Employee master records are entered with option 4 - employee file.

            The next data entry screen will display the employee number and
       name, and allow for payroll data entries.

            Enter the quarter number this entry is for.  The program displays
       the last quarter number used as the default.  Simply press Enter if no
       change is needed.

            A reference field is provided for check numbers, dates, etc.  Use
       as needed.

            The first amount to be entered is the check (or net pay) amount.
       This allows you to press F10 at anytime data entry is complete.  The
       program checks to make sure your entries are in balance.  Out of
       balance amounts will be displayed.  Simply press Enter to correct
       amounts.  The program will not accept out of balance amounts.

            The following data entry fields are filled as needed:

                FICA amount withheld.
                Federal withholding amount.
                State withholding amount.
                Local withholding amount.
                SDI withholding amount.

                Four miscellaneous deduction amounts.

            When data entries are completed, a report can be generated with
       menu option 2 described below.

            Transaction changes are made by choosing option 2 of the popup
       menu.  The program keeps this file sorted by employee number.  Since
       you may have several entries for the same employee, the first entry
       data will be displayed.  Use the PgDn and PgUp function keys to find
       the entries needing changes.  Make sure to press F10 to save changes.
       A transaction entry can be deleted by pressing F4 when the record is
       displayed.



       MAIN MENU OPTION 2   Print Entries

            The report printed will be in the order of the employee numbers.
       This should make it easier to make corrections if needed.  It will
       also serve as your record of transaction entries.  You should make
       sure to print a final report before posting entries with option 3
       below, otherwise you will lose your audit trail.









       MAIN MENU OPTION 3   Post Entries

            This option is used to update the employee records when the above
       transactions are ready to be posted.  The program will issue a warning
       if you have not printed a final report with option 2 above.


       MAIN MENU OPTION 4   Employee File

            Use this option to maintain employee master records.  A popup menu
       will allow you to add/change/delete employee records, print an employee
       list, and reset year to date amounts.

            Enter the employee number for adding or changing employee records.
       If the employee record exists, the current data will be displayed for
       changes or deletions.  Use F4 if the employee record is to be deleted.

            The following information fields are provided for the records with
       descriptions as needed.

            Social Security Number
            M/S/H field               (Married/Single/Head of Household)
            Dependents
            Employee Name
            Employee Address
            Employee City, State & Zip

            Phone Number
            Gender                    (Male or Female)
            Other                     (Useful for payrates, salaries, etc.)

            Various quarterly amounts to date should be updated with
       transaction entries so as to print a report for audit trails.  This
       includes initial set up.

            The employee listing option provides for a compact listing of
       employee numbers, names, social security numbers, Gender, M/S/H,
       dependents, other data field, and phone numbers.

            The Reset YTD option is used at the end of the year to reset all
       employee data to zeroes.  You should make backup copies of your data
       files before choosing this option, in case you have to refer back to
       this information at a later date.  You should also make sure you have
       run the W2 report from the Report Menu (option 2).



       MAIN MENU OPTION 5   Company Data

            Maintain company data with this option.  A popup menu allows the
       choice of changing information or printing the company data.

            The following data fields are provided:

            Federal ID number
            State WH ID number
            State UT ID number           (Unemployment tax number printed
                                          on the Excess report)








            Local ID number              (For W2 purposes; leave these blank
            Locality Name                if not used)

            State Name                   (For W2 WH purposes)

            W2 FICA Wages                (Maximum wages to be used and printed
                                          on W2's)

            Default Maximum              (Used for Excess report, can be
                                          changed at report run time)

            Company Name
            Company Address
            Company City-State and Zip

            SDI Description              (Description to be used for W2
                                          purposes...example    CA SDI
                                          Leave blank if not used.)



       MAIN MENU OPTION 6   Reports       (REPORTS MENU)


         REPORTS MENU OPTION 1  Quarterly Reports

            A popup menu allows for the following quarterly reports:


            Excess Report

               This report is primarily intended for those needing a
               listing of employee quarterly wages and yearly overages
               over a maximum reported amount.  The maximum amount in
               the company data file is shown as the default but can
               be changed as needed.  If left zero, the report will
               list quarterly wages only (useful for other purposes).
               The overage printed on the report reflects the amount
               of overage for the current quarterly wages.


           Federal Taxes Report

               This report will print the quarterly wages, FICA taxes
               withheld, and the Federal withholding taxes.


           State and Local Tax Report

               This report will print the quarterly wages, state withheld
               taxes, local withheld taxes, and state disability taxes
               withheld.


           Miscellaneous Deductions Report

               Quarterly report listing miscellaneous withheld deductions
               for the quarter.








       REPORTS MENU OPTION 2   W2 REPORT

            This report is primarily designed to be run at the end of
       the year.  It can be saved and used in case of lost W2s, etc.
       It can be generated as needed.


       REPORTS MENU OPTION 3   Print Single W2

            Use this option to print single employee W2's as needed.  You
       will be prompted for the employee number.


       REPORTS MENU OPTION 4   Print All W2s

            Use this option to print W2s at the end of the year.  Use as
       often as needed, some printers do not do well with multiple copy
       paper.  Use continuous forms for this option.

                                  -------------

                                 CONFIG.SYS FILE

                A CONFIG.SYS file is needed in your root directory to
           expand the default file and buffer numbers.  The file should
           contain two lines of code similar to the following:

                                    files=24
                                    buffers=16

               If the numbers are greater in your CONFIG.SYS file then
           leave them as is (many applications require more).  If you are
           not sure if you have this file, enter  DIR CONFIG.SYS  at the
           prompt.  TYPE the file on the screen or use your editor to see
           if the above lines of code are present.  If not, then use your
           editor and add them in the file.  If you do not have this file,
           copy the CONFIG.DTA file included with this application and
           rename it CONFIG.SYS.  NOTE: IT MUST BE IN THE ROOT DIRECTORY.
           System must be restarted for these changes to take affect.

                                  -------------

               This program uses the (c)Btrieve file handler for data
           integrity.  Program must be started with the PRL.BAT file to
           load it prior to the SPCPRL.EXE program file.  Program is
           started by entering  PRL  at the prompt.

               Portions of this program, copyright 1987 SOFTWAY, INC.

                                  -------------

               Other shareware programs by this author you may want to
           try out:

                           SPC-ACCOUNTS RECEIVABLE
                           SPC-INVENTORY PLUS
                           PC-BID PLUS


                                     -  END  -



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1960

     Volume in drive A has no label
     Directory of A:\

    BTRIEVE  EXE     28656   7-13-87  11:38a
    CONFIG   DTA        22   3-09-89  10:32p
    FILE1960 TXT      1851  12-29-89  12:39p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-29-89  12:53p
    PRL      BAT        17   2-26-89   7:32p
    SPCONAM  DAT       234   3-09-89   8:35p
    SPCPRL   DOC     13860   3-08-89   7:15p
    SPCPRL   EXE    170638   3-09-89   9:25p
    SPCPRL   LBR     26800   3-04-89   8:45p
    SPRLMAST DAT      1536   2-26-89   8:20p
    SPRLSTA  DAT         5   3-09-89   8:24p
    SPRLTRAN DAT      1536   2-26-89   4:41p
           13 file(s)     245733 bytes
                           68608 bytes free
