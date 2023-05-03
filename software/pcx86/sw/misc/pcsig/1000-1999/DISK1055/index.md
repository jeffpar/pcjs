---
layout: page
title: "PC-SIG Diskette Library (Disk #1055)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1055/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1055"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOAN WARRIOR"

    LOAN WARRIOR is a full-featured loan amortization program that not only
    calculates monthly payments but also helps you make decisions about a
    loan by letting you compare different terms or early payoff.  It works
    with both fixed and variable interest rates.  Given the
    principal, the interest rate, and the term of the loan, LOAN WARRIOR
    gives a complete monthly amortization schedule, yearly interest
    payments, yearly principal payments, and both a detailed and summary
    report.  An accelerated payoff option is included, analyzing money that
    can be saved by making larger payments.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1055.TXT

{% raw %}
```
Disk No: 1055                                                           
Disk Title: Loan Warrior                                                
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Loan Warrior                                             
Author Version: 2.01                                                    
Author Registration: $6.00.                                             
Special Requirements: CGA, EGA, or VGA.                                 
                                                                        
LOAN WARRIOR is a full-featured loan amortization program that not only 
calculates monthly payments but also helps you make decisions about     
a loan by letting you compare different terms or early payoff.  It      
works with both fixed and variable interest rates.  Given the           
principal, the interest rate, and the term of the loan, LOAN WARRIOR    
gives a complete monthly amortization schedule, yearly interest         
payments, yearly principal payments, and both a detailed and summary    
report.  An accelerated payoff option is included, analyzing money that 
can be saved by making larger payments.                                 
                                                                        
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
║                  <<<<  Disk No 1055 LOAN WARRIOR  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type: COPY LW.TXT PRN  (press enter)        ║
║                                                                         ║
║ To start the program, type: STARTLW2  (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LW-DSCL.TXT

{% raw %}
```
                                DISCLAIMER                                      
                                                                                
               Io Engineering Research makes no warrantee or                    
               representation, expressed or implied, with respect               
               to the accuracy, completeness, or usefulness of                  
               the information contained on this disk.  Io                      
               Engineering Research assumes no liability with                   
               respect to the use of, or for damages resulting                  
               from the use of an information or methods                        
               disclosed on this disk.                                          
```
{% endraw %}

## LW-UG.TXT

{% raw %}
```
         Loan Warrior Amortization Program                                      
                                                                                
         The LoanWarrior (LW) is a basic tool used in calculating loan          
         characteristics.  One of the most popular uses of                      
         amortization programs is to provide the user a quick look at           
         the loan schedule of potential home mortgage payment                   
         schedules.  In practice, however, LW can be used for any type          
         of amortizing problem.  The dictionary defines the term                
         "amortize" as : 1. To liquidate (a debt) by installment                
         payments or payment into a sinking fund.  While there are              
         other types of uses for amortization schedules, the following          
         documentation is intended to be used in terms of this                  
         definition.                                                            
                                                                                
         Running Loan Warrior :  LW will run on any IBM PC/XT/AT or             
         compatible with 128K memory available.  Two different modules           
         are available, Fixed and Variable.  These are accessed from            
         the Main Menu.  The Main Menu is accessed directly from the            
         disc with the command 'STARTLW2'.  LW is not copy protected, and             
         therfore may be transfered easily to fixed disc by copying             
         all of the files on the disc.                                          
                                                                                
         LoanWarrior Available Options : The following is a description         
         of each menu in LW, presented in the order the menus appear.           
                                                                                
         (1) Start Menu : From here you can run LW with or without an           
         existing data file.  If you choose an existing data file, a            
         list of files available is shown; you must enter one of these          
         file names with the proper extension.  If you choose to run LW         
         without an existing file, a dummy file is input for you to             
         edit.                                                                  
                                                                                
         (2) Input Definition Menu : Four variables define the loan -           
         interest rate (percent), term (years), initial principle ($),          
         and compounding period (year or month).  You may edit one or           
         all of these from this menu.                                           
                                                                                
         (3) Accelerated Principle Payments :  If you choose this               
         option, you can put money toward added principle payment,              
         above the scheduled fixed payment.  This money goes directly           
         toward reducing the principle, and thus reduces the term of            
         the loan and the final total interest paid.  This is useful            
         to determine the effect of regular added payments and/or lump          
         sum payments on the life of the loan.                                  
                                                                                
         To use this option, you will be asked to input interest rates          
         for any given block of periods you specify, with the "last             
         year" being input for all remaining periods. For example, if           
         you have an adjustable rate mortgage, with interest increasing         
         from 7%, one percent per year for 3 years:                             
                                                                                
                         LW Prompt              enter:                          
                                                                                
                   first period to be changed :    2                            
                   last year to be changed    :    4                            
                                                                                
                   interest for period 2      :    8                            
                   interest for period 3      :    9                            
                   interest for period 4      :    10                           
                                                                                
         Note that the rate for all periods after 4 will be 10 also.            
                                                                                
         (4) Variable Interest Rate (only on Variable module) : The             
         interest rate applied to each period can be specified with this        
         option.  This is useful in determining the effect of ARM's             
         (adjustable rate mortgages) on the loan schedule.  Input data          
         the same way you did in (3).                                           
                                                                                
         (5) Report Destination : You may designate your printer or             
         monitor as the output device.                                          
                                                                                
         (6) Specify Output Period : In a given analysis, you may               
         designate one specific block of periods you wish to view/print.        
         This is helpful when you have, for example, a 30 year loan and         
         are using monthly analysis (360 periods), and only wish to see         
         the 15th year (months 180 to 192). Input 180 as start and 192          
         as finish.  When using the accelerated principle option with           
         this, you may inadvertantly specify a period that only                 
         partially exists, or doesn't exist at all because your                 
         additional payments pay the loan off sooner than you think.  If        
         the first period you specify exists, but the loan ends                 
         somewhere in between, you will just be shown the final period.         
         If the first period does not exist, you will immediately get           
         just the final period, with no report header.                          
                                                                                
         (7) Report Format : You may designate either a Summary (only           
         inputs, calculated payment per period and total interest               
         paid) or Detailed (loan status per period; principle payment,          
         interest payment, total interest paid to date, principle               
         remaining) reports.   A detailed report on a long term loan            
         with monthly compounding will produce a very large amount of           
         data.  (See (6) to help with this problem)                             
                                                                                
         (8) Saving a Data File :  After the reports are processed,             
         you will be asked if you wish to leave the program, return to          
         the main menu, or save the current data.  If you choose to             
         save the data, you will be asked to input a file name (up to           
         8 characters) with thr proper extension (.FIX or .VAR,                 
         depending which module you are in).                                    
                                                                                
         Note that option 3 is the only difference between the Fixed            
         and Variable LoanWarrior Modules; in all other repects they            
         run in the same way.                                                   
                                                                                
         Good Luck!                                                             
```
{% endraw %}

## LW.TXT

{% raw %}
```
         Loan Warrior Amortization Program                                      
                                                                                
         The LoanWarrior (LW) is a basic tool used in calculating loan          
         characteristics.  One of the most popular uses of                      
         amortization programs is to provide the user a quick look at           
         the loan schedule of potential home mortgage payment                   
         schedules.  In practice, however, LW can be used for any type          
         of amortizing problem.  The dictionary defines the term                
         "amortize" as : 1. To liquidate (a debt) by installment                
         payments or payment into a sinking fund.  While there are              
         other types of uses for amortization schedules, the following          
         documentation is intended to be used in terms of this                  
         definition.                                                            
                                                                                
         Running Loan Warrior :  LW will run on any IBM PC/XT/AT or             
         compatible with 128K memory available.  Two different modules           
         are available, Fixed and Variable.  These are accessed from            
         the Main Menu.  The Main Menu is accessed directly from the            
         disc with the command 'STARTLW2'.  LW is not copy protected, and             
         therfore may be transfered easily to fixed disc by copying             
         all of the files on the disc.                                          
                                                                                
         LoanWarrior Available Options : The following is a description         
         of each menu in LW, presented in the order the menus appear.           
                                                                                
         (1) Start Menu : From here you can run LW with or without an           
         existing data file.  If you choose an existing data file, a            
         list of files available is shown; you must enter one of these          
         file names with the proper extension.  If you choose to run LW         
         without an existing file, a dummy file is input for you to             
         edit.                                                                  
                                                                                
         (2) Input Definition Menu : Four variables define the loan -           
         interest rate (percent), term (years), initial principle ($),          
         and compounding period (year or month).  You may edit one or           
         all of these from this menu.                                           
                                                                                
         (3) Accelerated Principle Payments :  If you choose this               
         option, you can put money toward added principle payment,              
         above the scheduled fixed payment.  This money goes directly           
         toward reducing the principle, and thus reduces the term of            
         the loan and the final total interest paid.  This is useful            
         to determine the effect of regular added payments and/or lump          
         sum payments on the life of the loan.                                  
                                                                                
         To use this option, you will be asked to input interest rates          
         for any given block of periods you specify, with the "last             
         year" being input for all remaining periods. For example, if           
         you have an adjustable rate mortgage, with interest increasing         
         from 7%, one percent per year for 3 years:                             
                                                                                
                         LW Prompt              enter:                          
                                                                                
                   first period to be changed :    2                            
                   last year to be changed    :    4                            
                                                                                
                   interest for period 2      :    8                            
                   interest for period 3      :    9                            
                   interest for period 4      :    10                           
                                                                                
         Note that the rate for all periods after 4 will be 10 also.            
                                                                                
         (4) Variable Interest Rate (only on Variable module) : The             
         interest rate applied to each period can be specified with this        
         option.  This is useful in determining the effect of ARM's             
         (adjustable rate mortgages) on the loan schedule.  Input data          
         the same way you did in (3).                                           
                                                                                
         (5) Report Destination : You may designate your printer or             
         monitor as the output device.                                          
                                                                                
         (6) Specify Output Period : In a given analysis, you may               
         designate one specific block of periods you wish to view/print.        
         This is helpful when you have, for example, a 30 year loan and         
         are using monthly analysis (360 periods), and only wish to see         
         the 15th year (months 180 to 192). Input 180 as start and 192          
         as finish.  When using the accelerated principle option with           
         this, you may inadvertantly specify a period that only                 
         partially exists, or doesn't exist at all because your                 
         additional payments pay the loan off sooner than you think.  If        
         the first period you specify exists, but the loan ends                 
         somewhere in between, you will just be shown the final period.         
         If the first period does not exist, you will immediately get           
         just the final period, with no report header.                          
                                                                                
         (7) Report Format : You may designate either a Summary (only           
         inputs, calculated payment per period and total interest               
         paid) or Detailed (loan status per period; principle payment,          
         interest payment, total interest paid to date, principle               
         remaining) reports.   A detailed report on a long term loan            
         with monthly compounding will produce a very large amount of           
         data.  (See (6) to help with this problem)                             
                                                                                
         (8) Saving a Data File :  After the reports are processed,             
         you will be asked if you wish to leave the program, return to          
         the main menu, or save the current data.  If you choose to             
         save the data, you will be asked to input a file name (up to           
         8 characters) with thr proper extension (.FIX or .VAR,                 
         depending which module you are in).                                    
                                                                                
         Note that option 3 is the only difference between the Fixed            
         and Variable LoanWarrior Modules; in all other repects they            
         run in the same way.                                                   
                                                                                
         Good Luck!                                                             
```
{% endraw %}

## README.TXT

{% raw %}
```
    Loan Warrior Amortization Program

    LoanWarrior (LW) is a computer tool used to calculate loan
    characteristics.  One of the most popular uses of loan
    amortization programs like LW is to provide the user with a
    quick look at payment schedules for potential home mortgages.
    In practice, however, LW can be used to examine any type of
    amortizing problem.

    Given principal, interest rate (FIXED OR VARIABLE !!), and
    duration of the loan, LW delivers a complete monthly amortization
    schedule, yearly interest payments, yearly principal payments,
    and handy summaries of all costs.  The program also features a
    user-specified accelerated loan payoff option.  Output reports
    can be directed to either the screen or printer. Additionally,
    alternative loan option data can be saved and retrieved with an
    easy to use filing system.

    LW is ideal for evaluating the new "creative" home loans available
    to home buyers and home owners interested in refinancing.  LW is
    one of the only shareware loan programs available which can
    handle annually adjusted ARM loans.

    Disk files are described below :

    lwarv2       .exe        fixed interest rate program
    var23        .exe        variable interest rate program
    fixdata      .fix        sample data for fixed interest rate loan
    vardata      .var        sample data for variable interest rate loan
    startlw2     .exe        program to start LOAN WARRIOR
    lwv2         .exe        program to generate user manual
    lw           .txt        on line user guide
    lw-dscl      .txt        disclaimer
    lw-ug        .txt        user guide text file
    readme       .txt        brief description of program and files
    lwintro      .bas        digitized start screen

    To start the program, type STARTLW2 and hit <enter>.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1055

     Volume in drive A has no label
     Directory of A:\

    FIXDATA  FIX       276   3-01-90   5:27p
    LW       TXT      8618   2-27-90   5:30p
    LW-DSCL  TXT       821   3-15-87   5:37p
    LW-UG    TXT      8618   2-27-90   5:29p
    LWARV2   EXE     63654   2-27-90   4:46p
    LWINTRO  BAS     16391   2-22-90   5:26p
    LWV2     EXE     45308   2-27-90   4:36p
    README   TXT      1899   2-28-90   5:06p
    STARTLW2 EXE     27282   2-28-90   5:01p
    VAR23    EXE     67154   2-27-90   5:04p
    VARDATA  VAR       575   2-28-90   5:31p
    FILE1055 TXT      1777   3-26-90  12:09p
    GO       BAT        38   5-24-88   9:56a
    GO       TXT       540   3-26-90  12:15p
           14 file(s)     242951 bytes
                           71680 bytes free
