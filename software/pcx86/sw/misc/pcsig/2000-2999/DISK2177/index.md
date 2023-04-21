---
layout: page
title: "PC-SIG Diskette Library (Disk #2177)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2177/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2177"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AMORTIZE"

    Would you like to know what a loan costs before talking to your
    banker?  Would you like to know how much profit you could make
    before loaning your money to someone?  Would you like to compare the
    cost of a loan using different interest rates?  If these or other
    questions are important to you, then AMORTIZE can help.  It
    helps solve such matters before you make a loan.
    
    For example, if you know the principal (amount to be borrowed), the
    interest rate, the payment amount, and certain other data, then
    AMORTIZE
    will compute the number of payments to be made.  AMORTIZE will compute
    for principal, interest, number of periods, payments, fixed principal
    amount, and for the balloon payment.
    
    AMORTIZE will save your worksheet for future reference, and also print
    to your printer or to a disk file (ASCII format for transfer purposes).
    
    It doesn't handle simple interest formulas, bond value and
    yield information, and advance payment adjustments.  But what it does
    do, it does easily and quickly.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AMORT.DOC

{% raw %}
```





            AMORTIZE.EXE
            
            LOAN CALCULATION AND AMORTIZATION PROGRAM
            COPYRIGHT (C) 1987 J. GORDON ROWE
            
            DEVELOPED BY:
            
            ROWE SOFTWARE
            912 PARK AVE.
            MARION, S.C. 29571
            (803) 423-5352
            
            THIS PROGRAM IS A SHAREWARE PRODUCT. IF YOU FIND IT USEFUL,
            YOUR CONTRIBUTION OF $20 TO THE AUTHOR WILL BE APPRECIATED.
            PLEASE SEND YOUR NAME, ADDRESS AND ANY SUGGESTIONS FOR
            IMPROVEMENTS. FUTURE UPDATES ARE FREE TO REGISTERED USERS.
            
                            **   DISCLAIMER   **
            
            ROWE SOFTWARE MAKES NO REPRESENTATIONS OR WARRANTIES WITH
            RESPECT TO THE ABOVE MENTIONED PRODUCT AND SPECIFICALLY
            DISCLAIMS ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR
            FITNESS FOR ANY PURPOSE.
            





            
            1. INSTALLATION-
            
                 This program may be used with any PC compatible system
                 with a minimum of 256K with an MDA or CGA compatible
                 video adapter. The program may be used on either a
                 floppy or hard disk system.
                 
                 The program AMINSTAL.EXE allows the user to change the
                 color settings for data entry, text and borders. The
                 file AMORTIZE.EXE must be in the current directory for
                 the installation to work properly. To use the install
                 program, log onto the directory containing AMORTIZE.EXE
                 and AMINSTAL.EXE. Type AMINSTAL at the DOS prompt.
                 
                 The program will display 128 combinations of foreground
                 and background colors. At the bottom of the screen, the
                 program will display the current settings for data
                 entry fields, screen text and borders. You can alter
                 these simply by entering the number of the desired
                 setting. Use TAB to select data entry, screen text or
                 borders. When you have entered the desired settings,
                 press ESC to save and exit. If you make a mistake, you
                 can always repeat the installation procedure. NOTE: If
                 you have an MDA video adapter, try setting the data
                 entry color to 2. This will underline the data entry
                 fields.
                 
                 The installation process changes the file AMORTIZE.EXE.
                 If you copy the file to another computer that has a
                 different video adapter, you may need to install
                 different color combinations. For example, if you
                 install the program on a machine with an MDA adapter,
                 and set the data entry color to 2 (underline), and then
                 copy the program to another machine with a CGA adapter
                 and a monochrome screen, the data entry fields may not
                 be visible. (Color 2 on a CGA adapter is blue on
                 black.)





                 
            2. OPERATION-
            
                 To start the program, be sure you are logged onto a
                 directory containing AMORTIZE.EXE and AMORT.HLP. At the
                 DOS prompt, type AMORTIZE and press Enter.
                 
                 Press <F1> to exit the program at any time.
                 
                 Press <F10> to view the help screen at any time except
                 when viewing, printing or filing a schedule.
                 
              2.1 MENU FUNCTIONS
              
                 LOAD will load a schedule previously saved on disk. You
                   may specify the drive and/or directory.
                      
                           EXAMPLE:     C:\ACC\SCHED1.AMT
                 
                 SAVE will save the current schedule setting in a file
                   on disk. You may specify the drive and/or directory.
                   You may use any valid DOS file name. If the file name
                   you choose already exists, the program will ask you
                   whether you wish to overwrite the existing file.
                 
                 EDIT will allow you to edit the parameters for the loan
                   schedule. This procedure is described in section 2.2.
                 
                 PRINT will allow you to print the schedule. Any PC
                   compatible list device will work. NOTE: The program
                   sends an ASCII character 13 to activate the printer's
                   form feed. If this does not work with your printer,
                   please note your printer's make, model and form feed
                   sequence when you send in for your registration. You
                   will receive an updated version that will work with
                   your printer.
                 
                   When selecting PRINT, VIEW or FILE, you can choose
                   the type of report and the month on which you wish to
                   subtotal. The detail report will output each payment,
                   whereas the summary report will show annual totals
                   only. (If payments are annual, the summary report
                   will show only a total for the entire loan.)
                 
                 VIEW allows you to view the schedule on screen. Allow a
                   moment for the report to begin. Pressing <F3> will
                   switch between slow and fast output. Pressing <F5>
                   will pause the display and pressing <F7> will abort
                   the display.
                 
                 FILE will allow you to file the report in ASCII format
                   on disk for use with a word processor or spreadsheet
                   program. You may use any valid DOS file name and you
                   may specify the drive and/or directory.





                 
              2.2 EDITING THE SCHEDULE
              
                 The EDIT menu selection allows you to specify the known
                   variables for the loan schedule. You may also enter 2
                   heading lines. Use the following keys:
                 
                      <UP> or <TAB>            Move to the previous
                                               field.
                 
                      <LEFT> or <RIGHT>        Move laterally within the
                                               field.
                   
                      <INS>                    Set insert mode on/off.
                   
                      <DEL>                    Delete character at
                                               cursor position.
                   
                      <SPACE>                  Change values for
                                               frequency and loan type.
                   
                      <ENTER>                  Accept current value and
                                               move to next field.
                   
                      <ESC>                    Return to menu.
                   
                 
                 PRINCIPAL is the amount borrowed. The number should be
                   entered as dollars and cents separated by a decimal
                   point.
                 
                 INTEREST RATE is the annual percentage rate of the
                   loan. The number should be entered as a percentage
                   IE. 10.75% should be entered as 10.75.
                 
                 NUMBER OF PERIODS is the term of the loan in periods.
                   This number must be entered as a whole number.
                   EXAMPLE: If the loan is for 10 years and the payments
                   are monthly, then enter 120.
                 
                 FREQUENCY is the interval at which payments are due.
                   The default frequency is monthly. This can be changed
                   by pressing the space bar. Payment frequencies can
                   range from weekly to annual. Be sure the frequency
                   and number of periods correspond correctly. EXAMPLE:
                   If the term of the loan is 2 years and the payments
                   are to be made bi-weekly, then enter 52 for number of
                   periods and set frequency to bi-weekly.





                 
                 LOAN TYPE is the method for calculating the loan
                   amortization. Standard type uses a fixed payment to
                   amortize the loan. (The standard type will adjust the
                   final payment if necessary to cover the proper amount
                   of interest.)
                 
                   Rule of 78's type also uses a fixed payment, but
                   amortizes based upon the rule of 78's.
                   
                   The fixed principal type loan uses a decreasing
                   payment. The payment is calculated for each interval
                   by adding the accrued interest to the principal
                   payment. Typically, the fixed principal amount will
                   be the entire principal amount divided by the number
                   of periods. Enter the fixed principal amount in
                   dollars and cents, separated by a decimal.
                   
                 PAYMENT is the amount of the periodic payment. This
                   should be entered in dollars and cents separated by a
                   decimal. With a fixed principal type loan, this is
                   the amount of the first payment.
                 
                 BALLOON if the principal remaining that is not
                   amortized by the payments over the specified period.
                   This should be entered in dollars and cents separated
                   by a decimal.
                 
                 FIRST PAYMENT DATE is the date on which the first
                   periodic payment falls. The date must be entered in
                   MM/DD/YY format.
                 
                 HEADING allows you to enter 2 lines of text which
                   describes the schedule. These lines will appear on
                   printed and filed reports, and will be automatically
                   centered.
                 
                 PRESS ESC at any time to exit the editing function.
            
              2.3 SOLVE (F2)
            
                 You may solve for the following variables:
                 
                           PRINCIPAL
                           INTEREST RATE
                           NUMBER OF PERIODS
                           FIXED PRINCIPAL AMOUNT
                           PAYMENT
                           BALLOON





                 
                   Once you have entered the known variables, press F2,
                   use the cursor keys to highlight the variable you
                   wish to solve, and press enter. The program will give
                   you an error message if insufficient data exists.
                   
                   To solve for :              You must know:
                   
                   PRINCIPAL                   Interest rate
                                               Number of periods
                                               Fixed principal amount
                                               (if required)
                                               Payment
                                               Balloon (if desired)
                                               
                   INTEREST RATE               Principal
                                               Number of periods
                                               Fixed principal amount
                                               (if required)
                                               Payment
                                               Balloon (if desired)
                   To solve for :              You must know:
                                               
                   NUMBER OF PERIODS           Principal
                                               Interest rate
                                               Fixed principal amount
                                               (if required)
                                               Payment
                                               Balloon (if desired)
                                               
                   FIXED PRINCIPAL AMOUNT      Principal
                                               Interest rate
                                               Number of periods
                                               Balloon (if desired)
                                               
                   PAYMENT                     Principal
                                               Interest rate
                                               Number of periods
                                               Fixed principal amount
                                               (if required)
                                               Payment
                                               Balloon (if desired)
                                               
                   BALLOON                     Principal
                                               Interest rate
                                               Number of periods
                                               Fixed principal amount
                                               (if required)
                                               Payment





                                               
                   When solving, the program disregards the current
                   value of the variable to be solved. Therefore, when
                   editing a schedule, you may simply leave that
                   variable with a value of zero.
                   
                   When solving for interest rate, allow a moment for
                   the program to return a value.
                   
                   NOTE: when solving, be sure that you do not solve for
                   a variable that you are currently editing.
                   
                   
            3. SUGGESTIONS-
            
                   It is common for a loan to have a delayed first
                   payment date. Typically, if the first payment date is
                   later than 1 period from the loan date, the
                   additional interest is capitalized into the
                   principal, resulting in a higher payment. To
                   calculate the correct payment for this type of loan,
                   determine if additional interest is to be charged and
                   capitalized. If so, add the additional interest to
                   the principal before solving for the payment.
            
                      EXAMPLE: A loan is made for $20,000 on
                      January 1, 1989 at 10% for 120 standard
                      monthly payments. The first payment is
                      delayed until March 1, 1989. Depending upon
                      the terms of the loan, this may result in
                      additional interest of $166.67. To determine
                      the proper amortization, set the principal to
                      $20,166.67 and solve for the payment.
                      
                   

```
{% endraw %}

## FILE2177.TXT

{% raw %}
```
Disk No: 2177                                                           
Disk Title: Amortize                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Amortize                                                 
Author Version: 1.1                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
Would you like to know what a loan cost before talking to your          
banker?  Would you like to know how much profit you could make          
before loaning your money to someone?  Would you like to compare the    
cost of a loan using different interest rates?  If these or other       
questions are important to you, then AMORTIZE can help.  It             
helps solve such matters before you make a loan.                        
                                                                        
For example, if you know the principal (amount to be borrowed), the     
interest rate, the payment amount, and certain other data, then AMORTIZE
will compute the number of payments to be made.  AMORTIZE will compute  
for principal, interest, number of periods, payments, fixed principal   
amount, and for the balloon payment.                                    
                                                                        
AMORTIZE will save your worksheet for future reference which is a nice  
feature.  It also will print to your printer or to a disk file (ASCII   
format for transfer purposes) which is good.                            
                                                                        
It doesn't handle simple interest formulas, bond value and              
yield information, and advance payment adjustments.  But what it does   
do, it does easily and quickly.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2177

     Volume in drive A has no label
     Directory of A:\

    AMORTIZE EXE    107764   5-28-90   9:05p
    AMINSTAL EXE     56458   1-27-90   1:47p
    AMORT    HLP      5602   5-01-89  12:46a
    AMORT    DOC     16113   5-08-89  12:15a
    PRINTDOC BAT        18   5-07-89   1:36a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       729   1-01-80   9:41a
    FILE2177 TXT      2591   7-13-90  11:42p
            8 file(s)     189313 bytes
                          128000 bytes free
