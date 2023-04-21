---
layout: page
title: "PC-SIG Diskette Library (Disk #994)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0994/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0994"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINANCIAL CALCULATOR"

    FINANCIAL CALCULATOR is a simple, menu-driven program that calculates
    interest on loans, savings, or payments.
    
    Calculate your monthly payments, total interest, and the total amount
    you will pay to the bank at the end of the loan.  Get a month-by-month
    breakdown of your monthly payments, interest for that month, payment on
    the principal and the ending balance for that month.  You can also
    figure the approximate annual interest rate for a loan.  A metric
    conversion utility is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```


-------------------------------------------------------------------------------
                FINANCIAL CALCULATOR                              ver 1.00
-------------------------------------------------------------------------------

FC       BAT    Starts Financial Calculator program 
CLEAR1   EXE    Clears screen
CONV100  EXE    Metric conversion program
LOAN100  EXE    Loan program
SCREEN1  PAK    Screen file 
SPEEDSCR COM    The Software Bottling Co. Speed Screen program
README   DOC    Documentation for the Financial Calculator program, please read

```
{% endraw %}

## FILES994.TXT

{% raw %}
```
Disk No  994
Program Title: FINANCIAL CALCULATOR
PC-SIG version 1
 
    FINANCIAL CALCULATOR is an easy-to-use, menu-driven program that
calculates interest on loans, savings, or payments. A metric conversion
utility is also included. For loans, this program calculates your monthly
payments, total interest, and the total amount you will pay to the bank at
the end of the loan. It also gives a month-by-month breakdown of your
monthly payments, interest for that month that was paid on the principle
and the ending balance for that month. The approximate annual interest rate
for a loan can also be calculated.
 
Usage: Financial
 
System Requirements: 128K memory and one disk drive.
 
How to Start: Type: FC (press enter).
 
Suggested Donation: $6
 
File Descriptions:
 
FC       BAT  Starts FINANCIAL CALCULATOR program.
FILES    TXT  File descriptions.
CLEAR1   EXE  Clears screen.
CONV100  EXE  Metric conversion program.
LOAN100  EXE  Loan program.
SCREEN1  PAK  Screen file.
SPEEDSCR COM  Speed Screen program.
README   DOC  Documentation.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```




      
                           FINANCIAL  CALCULATOR


     MAKING A BACKUP OF YOUR ORIGINAL DISK

        1.  Put  a  copy  of your DOS into drive A  and  start  up  the 
            computer.
        2. Type FORMAT B:/S  and format a blank disk in drive B label this 
           disk "working disk".
        3. Remove DOS disk from drive A and insert the FINANCIAL 
           CALCULATOR program.
        4. Type copy A:*.* B: this will copy every thing from disk A to 
           disk B.
        5.  When  this is done remove your original disk from  drive  A 
            and  put  it in a save place in case something happens  to  
            your working disk.
        6.  Remove working disk form B drive and install it in A drive. 
            From  the A> sign type CAL and hit the return key this will 
            start the program.



     1. LOAN PAYMENTS

         When  you  go buy a home  you usually cannot afford to pay the 
     $50,000 to $200,000 in cash. Instead, you take out a 20 to 30 year 
     loan and make monthly payments until the home is paid for.
         When  you go  buy a car,  most people  take out a  5 year loan  
     and make monthly payments until the car is paid for.
         In  these examples,  you make a large purchase and  then  make 
     time  payments to  pay for the purchase.   When you think about  a 
     large  purchase,  you  need to know  what the purchase will  cost;  
     both  the monthly payments and total cost.  Total cost is  monthly 
     payments times the number of payments.  It might be nice to  think 
     about  buying  a  house for  $150,000,  but do you know  what  the 
     monthly payments will be?
         This   part  of the program  will show you what  your  monthly 
     payments will be,  what your total interest will be, and the total 
     amout  you will pay to the bank at the end of the  loan.  It  will 
     also  give  a month by month break down of your monthly  payments, 
     interest  for that month that was paid on the principal  and   the 
     ending   balance  for that month.   You will will  see  that   the  
     total  amount  you   pay the bank is very large.  This is  a  good 
     reason to put money in a saving account and pay as much on a  loan 
     as you can, because of how much it will save you in the long run.
         You   will  see  in the  amortization  tables that  with  each  
     payment  the  amount   of interest you  pay  decreases.   This  is 
     because  the  beginning  balance  has  decreased.   The  principle 
     increases  with each payment because the interest  decreases.  The 
     increase in the principle payment is larger with each payment.





                                 1













         When   you  select  this option you  will get  the  input   as 
     follows.


     Input Amount of loan:                             Date  /  /

     Input payments:

     Input Interest rate:

     Input months of loan:




         The  first field is the date this is used for a the output  to 
     the printer only. In the second field you input the amount of your 
     loan  if  you are taking out a loan for $15,000 then  enter  15000 
     with no dollars or comma signs.   Skip field three at this time by 
     just  pressing the return key.  The next field will ask   you  for  
     the  interest  rate,  enter a valid  rate at this time.   The next 
     field  will  ask you for months of the loan enter  the  number  of 
     months you made the loan for.  For example 30 years is 360 months. 
     If  you  make  a 30 year loan enter  360 in  this  field.   A  few 
     seconds  later  you   will se what your  monthly  payments,  total 
     interest, and total amount paid on the loan will be.
         If you know  what your  monthly payments are,  or what you can 
     afford  to  pay each month then when you get to the  second  field  
     (Input Amount of loan:) skip it bye pressing the return  key.  Now 
     you  will  be  in the (Input payments:) field  enter  the  monthly 
     payments  you can pay then  press return to get to the next  field  
     (Input  months of loan:)  enter the total months  of the loan then 
     press  the return key and in a few seconds you will see  what  the 
     amount of the loan will be.

     2. SIMPLE INTEREST SAVINGS

         This  part  of the program  calculates simple interest  rates.  
     Suppose you want to have $1000 saved in one year.   You could  put 
     $83  in  a jar every month and have $996 at the  end of one  year.  
     Or you could put  $83 in the bank and have $1052.65 at the end  of 
     the year.
         This   part  of  the program is  very simple just   enter  the 
     amount  of your savings the  interest rate and number of years  in 
     the  bank.   The output  will give you the amount of money in  the 
     bank at the end of that period for simple interest.






                                 2








     3. COMPOUND INTEREST SAVINGS (ANNUAL COMPOUNDING)

         This  part of the program  calculates compound  interest rates 
     annually.  Compound  interest  just means  you earn  interest   on  
     the  interest   already earned.   While with  simple you  do  not.   
     There  is  a   considerable difference between   the  two.    This  
     means  leaving  the  interest  in  the  account can increase  your 
     savings dramatically.
         This  is the same input screen as simple interest.  Just enter 
     your values and see your savings.

     4. COMPOUND INTEREST SAVINGS (QUARTERLY COMPOUNDING)

         This   part   of the program  just shows  you  the  difference 
     between  annual compounding and quarterly compounding.  There is a 
     good difference over a long period of time.

     5. INTEREST ON MONTHLY PAYMENTS TO BANK

        Each  of  us   should  have some sort  of  plan  for  financial 
     security  for our future.   This can include everything  from  gum 
     ball banks to savings accounts, annuties,  or  even  progerty  and  
     equipment  for   investment.     For  example,   consider  regular  
     deposits  into  an  interest  bearing  account,   like  a  savings 
     account.  If you deposit $100 each month into an account that pays 
     6% annually how much money would you have in 10 years?
         This  part of the program will calculate this problem for you.  
     Enter  the  amount  you put in the bank   monthly,  then  interest 
     rate,  and number of years you  plan to do this.   The output will  
     give you the total  amount  of  your savings.



     6. TRUTH IN LENDING LAW

         The   Truth-In-Lending   law  demands   that   money   lending   
     institutions disclose fully the annual interest rate on loans. The 
     apporximate rate can be found using this part of the program.

     Ex.
         Assume   you  make a loan for  $5,000  for 36 months.  If  the 
     payments  are  made monthly and are  $162.50 each,   what  is  the 
     annual percentage rate?  The answer is 11%

         The fields are as followed.

     Number of payments per year:

     Monthly payments:

     Number of total payments:



         The  first field which will be 12 if you pay monthly payments. 


                                 3








     The second field  will be which  will be the monthly  payments you  
     will be paying.   The third field is the  total number of payments  
     you will make from the start to the  finish.  That is if your loan 
     is   2  years  and  you  will  make monthly payments,  your  input 
     here will be 24.








     7. METRIC CONVERSIONS

         This part of the program has nothing to do with money but  was 
     put  in for conveniency  of the user.   These  conversions  can be 
     very  useful around the house or at work.   Use it and enjoy  your 
     computer.  The first screen converts english to metric. The second 
     converts from metric to english.




           If  you have received this program from another user or your 
     local  users group and find if of value,  your $6.00  contribution 
     will  be appreciated.  This money goes toward the payment of  time 
     and money spent on hardware and software to create this program.
           It  will also go towards making this software better in  the 
     future.


                                    Thank you
                                    Southern Electronics
                                    P.O. Box 12488
                                    Lake Charles La. 70612





















                                 4


















     ==================================================================

                                 DISCLAIMER

         Southern  Electronics  makes no representations or  warranties 
     with  respect to the  contents or  accuracy of output  of   hereof 
     and   specifically   disclaims   any   implied    warranties    of  
     merchantability  of fitness for any  particular purpose.  Further,  
     Southern    Electronics   reserves   the  right  to  revise   this 
     publication   and   to  make changes from  time to   time  in  the  
     content  hereof without  obligation  of  Southern  Electronics  to  
     notify any such person of such revision or changes.



     ==================================================================































                                 5






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0994

     Volume in drive A has no label
     Directory of A:\

    CLEAR1   EXE     27126   5-13-87   7:27p
    CONV100  EXE     56864   5-13-87   8:03p
    FC       BAT        51   5-13-87   8:41p
    FILES    TXT       579   6-20-87   6:53p
    FILES994 TXT      1185  12-18-87   2:24p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-17-87   9:34a
    LOAN100  EXE     88372   6-20-87   6:35p
    README   DOC      9856   6-20-87   5:41p
    SCREEN1  PAK     10512   6-20-87   5:57p
    SPEEDSCR COM      5333  10-01-86  12:00p
           11 file(s)     200456 bytes
                          114688 bytes free
