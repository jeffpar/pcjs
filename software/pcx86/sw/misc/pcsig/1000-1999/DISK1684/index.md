---
layout: page
title: "PC-SIG Diskette Library (Disk #1684)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1684/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1684"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SECURITY ANALYSIS & PORTFOLIO MANAGER"

    The serious investor with a portfolio will find a thoughtful pal in
    SECURITY ANALYSIS AND PORTFOLIO MANAGEMENT.  Developed by a financial
    consulting company, SAPM lets you enter your stock transactions
    quickly and easily.  Then it gives you all
    the reports you need to know what's going on with your portfolio.  A
    highly sophisticated securities analysis system is added, along with a
    number of tools to help you manage your money and deal with loans.
    
    The analysis of individual stocks uses principles developed by the
    National Association of Investors Corp.  Regression analysis is the
    primary tool to estimate future growth rates.  Reports include present
    value and book price, market value, current gain/loss, percent return,
    and percent of holdings a security represents.  SAPM creates
    amortization tables, calculates loan payoffs, determines future
    investment values, calculates current amount required for a desired
    amount (present value), calculates loan amortizations, and determines
    future value of regular additions to an investment plan (annuity).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1684.TXT

{% raw %}
```
Disk No: 1684                                                           
Disk Title: Security Analysis & Portfolio Manager                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Security Analysis & Portfolio Manager                    
Author Version: 2.01                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
The serious investor with a portfolio will find a thoughtful pal in     
SECURITY ANALYSIS AND PORTFOLIO MANAGEMENT.  Developed by a financial   
consulting company, SAPM lets you enter your stock transactions         
quickly and easily.  Then it gives you all                              
the reports you need to know what's going on with your portfolio.  A    
highly sophisticated securities analysis system is added along with a   
number of tools to help you manage your money and deal with loans.      
                                                                        
The analysis of individual stocks uses principles developed by the      
National Association of Investors Corp.  Regression analysis is the     
primary tool to estimate future growth rates.  Reports include present  
value and book price, market value, current gain/loss, per cent return, 
and per cent of holdings a security represents.  SAPM creates           
amortization tables, calculates loan payoffs, determines future         
investment values, calculates current amount required for a desired     
amount (present value),  calculates loan amortizations, and determines  
future value of regular additions to an investment plan (annuity).      
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```













                       SECURITY ANALYSIS AND PORTFOLIO MANAGER
                                     Version 2.01

                                      (ShareWare)











                                      SAPM (tm)


























                            Greg Morrison and Associates
                            Financial Consulting Services
                                 Post Office Box 151
                              Highwood, Illinois  60040






                                  LICENSE AGREEMENT



          This manual and program is Copyrighted (c) 1986, 1987 by Greg
          Morrison and  Associates Financial  Consulting Services.  SAPM is
          intended for use  on  one  individual  personal  computer  by the
          original purchaser  only.  It is expressly forbidden to duplicate
          this utility or its documentation, or to loan or rent  to others.
          The software may not function properly in every hardware/software
          environment.

          THIS SOFTWARE IS SUPPLIED TO YOU "AS IS" WITHOUT WARRANTY  OF ANY
          KIND, EITHER  EXPRESSED OR IMPLIED, WITH RESPECT TO THIS SOFTWARE
          OR DOCUMENTATION, THEIR QUALITY, PERFORMANCE, MERCHANTABILITY, OR
          FITNESS  FOR   A  PARTICULAR  PURPOSE.    CONSEQUENTLY,  YOU  THE
          LICENSEE, ARE ASSUMING THE  ENTIRE RISK  AS TO  THEIR QUALITY AND
          PERFORMANCE.

          Reasonable care  has been taken to insure the accuracy and proper
          operation of this program.  However, Greg Morrison and Associates
          Financial Consulting  Services is not responsible for any damage,
          real or alleged, including but  not  limited  to  interruption of
          services,   loss   of   business,   investments,  capital  gains,
          dividends, or anticipatory profits,  resulting  from  the  use of
          this product.

          This Agreement  is governed by the laws of the State of Illinois.
          You may have other rights which vary from  state to  state.  Some
          states do  not allow the exclusion of incidental or consequential
          damages, so some of the above may not apply to  you.   If a court
          finds that  the above limitation on warranty or on damages do not
          apply to your, or that the above warranty fails of  its essential
          purpose,  then  Greg  Morrison  and  Associates' liability to you
          shall be limited to the total price you paid for this software.


















                                          2





                                  TABLE OF CONTENTS

          PREFACE  . . . . . . . . . . . . . . . . . . . . . . . . . .    4

          HOW TO START-UP SAPM . . . . . . . . . . . . . . . . . . . .    4

          DATA INPUT . . . . . . . . . . . . . . . . . . . . . . . . .    4

          SAPM MAIN MENU . . . . . . . . . . . . . . . . . . . . . . .    5

          SECURITY ANALYSIS  . . . . . . . . . . . . . . . . . . . . .    5

          PORTFOLIO MANAGER  . . . . . . . . . . . . . . . . . . . . .    6

          PORTFOLIO REPORTS  . . . . . . . . . . . . . . . . . . . . .    7

          MISC OPTIONS . . . . . . . . . . . . . . . . . . . . . . . .    7

          UTILITIES  . . . . . . . . . . . . . . . . . . . . . . . . .    8

          ARCHIVE/RETRIEVE . . . . . . . . . . . . . . . . . . . . . .    9

          UPDATES  . . . . . . . . . . . . . . . . . . . . . . . . . .    9

          REGISTRATION . . . . . . . . . . . . . . . . . . . . . . . .   10




























                                          3





                                       PREFACE

          Do I really need to read  the SAPM  manual?  No  - SAPM  is self-
          contained, self-explanatory, and menu-driven.  But to get started
          correctly, and to obtain an  overview  of  SAPM  you  should read
          through this short manual.


                                HOW TO START-UP SAPM

          SAPM will  work on any IBM compatible computer with at least 128K
          of memory and a DOS system disk.  To run the program follow these
          steps:

               1. Turn on your computer.

               2. Insert your  DOS System disk into Drive A and close the
               drive door.  The disk should then boot-up, displaying  the
               normal starting information.

               3. Answer the DATE and TIME prompts.

               4. Remove the DOS System disk from Drive A.

               5. Insert your SAPM disk into Drive A and close the door.

               6. At the DOS prompt, type: SAPM.

               7. Press ENTER.


                                     DATA INPUT

          The following data input procedures are adhered to:

               1. Data displayed  will be kept if the ENTER key is pressed
           without making changes.

               2. The RIGHT ARROW key is used to allow the user  to use
          characters from the current data displayed.

               3. The length  of the input is highlighted to let the user
          know how many characters can be entered.

               4. The  BACK  ARROW  key  deletes  an  entered  character or
          number.

               5. Toggle inputs  are selected  by using the ARROW keys to
          highlight a selection then pressing the ENTER key.




                                          4






                                   SAPM MAIN MENU

          From this menu you  can select  the option  you want  to perform.
          You have the choice of disk and file utilities, money management,
          exiting, portfolio management, or security analysis.   Just press
          the number  of the option you want or use the arrow keys to go to
          that option and press enter.

          If you choose to go to the Portfolio Manager section, you will be
          prompted for  the name of the portfolio you plan to use.  Type in
          that name but DO  NOT  use  a  filename  extension  (*.xxx).  All
          portfolio files  are stored  on the  disk with  the same filename
          extension, '<filename>.SPM'.


                                  SECURITY ANALYSIS

          This section performs an analysis of a particular stock using the
          principals  developed  by  the  National Association of Investors
          Corporation (1515  East 11  Mile Rd,  Royal Oak,  MI 48067).  For
          help  in  understanding  the  analysis output you should obtain a
          copy of The Investors Manual for $12 from NAIC.

          The data must be initially entered manually.  Several  test files
          are included  on the  disk to  demonstrate typical output.  These
          files have  the  filename  extension  '<filename>.DAT'  where the
          filename is the corporation's stock symbol.

          To start  entering data  choose option  2.  If you are using data
          previously saved (a file directory option allows you  to view the
          files on  the logged  drive), you  can do  'What If?' analysis by
          going directly to either the 5  year  table  or  to  the earnings
          growth  entry  area  by  entering  the  appropriate letter at the
          prompt.

          Corrections to input errors can be made when you are  prompted to
          change entered values.  An entry of 'T' (table) or 'E' (earnings)
          will keep the entered  values and  position the  cursor at either
          the 5 year table or the earnings growth entry area.  A 'Q' (quit)
          entry will return you to the Security Analysis Menu.

          To enter data or make corrections  in  the  5  year  table, first
          highlight the entry with the arrow key and Press ENTER.  Make the
          appropriate correction or entry.  Then press ENTER again to leave
          that particular  cell. You  may exit from the table at anytime by
          pressing either the 'Q' (quit)  or 'D'  (done) key.   Pressing an
          'I' in  the first  cell will  insert a  new row  for imputing the
          latest year of data.  This comes in handy when you wish to update
          an old analysis with recently published data.

          The program prompts the user for the following data in the 5 year

                                          5



          table:
               1.  Year
               2.  Price (high and low)
               3.  Earning per Share
               4.  Dividend per Share
               5.  Book Value per Share
               6.  Sales
               7.  % Net Profit Margin (profit divided by sales)
               8.  Long Term Debt

          The input data can be obtained from financial reporting companies
          such as  Value Line  or Standard & Poors.  However, some corpora-
          tions provide enough historical data in  their annual  reports to
          perform the  analysis.  The  Long Term Debt data and % Net Profit
          Margin data should be used in  conjunction with  the %  Earned on
          Investment Capital data (calculated) to evaluate management.  See
          The Investor's  Manual  on  how  to  do  this.   Although,  it is
          possible to  conduct the analysis without this data.  You are not
          restricted to entering Long  Term  Debt  data  and  %  Net Profit
          Margin  data  into  their  respective  columns.  If you have some
          other yearly data that you would rather have  displayed, enter it
          in one  of those columns.  However, you should rename the columns
          on the output to the appropriate data name.

          The program  uses  regression  analysis  to  estimate  the future
          growth rate.  To assist the user in determining the usefulness of
          the estimated rate, the percentage  of  past  earnings  data that
          correlates  is   provided  (known  statistically  as  r-squared).
          Generally, a 60% correlation is considered  good.   Anything less
          should strongly suggest that a different estimator be used.

          Once you are through entering data, the analysis can be conducted
          by choosing the first menu  option.   The  output  can  be either
          directed to the screen, printer, or a file.  You should also save
          your data for future stock analysis.  There is  no restriction on
          the filename or extension which may be used.


                                  PORTFOLIO MANAGER

          To start  adding transactions  select the first menu option.  The
          first entry will be for the portfolio type.  Enter any two letter
          combination which  describes the  portfolio type (eg, 'MF'-Mutual
          Fund, 'SK'-Stock, 'BD'-Bond, etc).  The  next  entry  is  for the
          transaction type.  One of the following codes must be entered:

               1. 'B'  - Bought

               2. 'S'  - Sold

               3. 'RD' - Reinvestment Dividend


                                          6





               4. 'SD' - Stock Dividend

               5. 'IC' - Income Dividend

               6. 'SS' - Stock Split

               7. 'CG' - Capital Gains Distribution Reinvested

               8. 'CI' - Capital Gains Distribution Taken as Income


          After entry of the appropriate code, you will be prompted for the
          information necessary for that particular transaction.   You will
          be given  an opportunity  to make entry changes at the end of the
          required input.

          To change or delete a specific transaction select the second menu
          option.   You  will  be  prompted  for the symbol and transaction
          date.  Enter them and the first record found matching the entries
          will be displayed for deletion or changes.

          To view  the portfolio transactions select the third menu option.
          The records will be  individually  displayed  beginning  with the
          first  one.   You  can  stop  viewing  records  and return to the
          portfolio menu at any time by pressing the ESC key.


                                  PORTFOLIO REPORTS

          From this menu you  can perform  the portfolio  analysis or print
          several transaction reports.  You should first select menu option
          #6 to change either the  output  direction  (screen,  printer, or
          file) or the start and end dates if necessary.

          Open positions  can be analyzed by selecting option #1.  You will
          be prompted for the current market prices of  all open positions.
          If you  make a  mistake during  price entry  you will be given an
          opportunity to make corrections at the end of the input routine.

          Pressing the ESC key during any report screen listing will return
          you to the report menu.

          The following abbreviations are used:

          1.  P/V or
              Shares:   Present value or current shares held in the company

          2.  Book
              Price:    Current shares / Total BUY cost

          3.  Book
              Value:    Total BUY cost of the current shares


                                          7






          4.  Market
              Price:    Market value of the security

          5.  Market
              Value:    Market price * Current shares

          6.  Current
              Gain/Loss: Market value - Book value

          7.  % Rtrn:  Percent return = Gain (or Loss) / Book value

          8.  % Url
              Gains:   Percent unrealized gains (or loss), includes total
                      BUY cost + total REINVESTED cost

          9.  % of
              Hlds:  Percent the security represents of the total portfolio


                                    MISC OPTIONS

          From this menu you can  perform  the  following  money management
          functions:

               1. Create an amortization table

               2. Calculate a loan payoff

               3. Determine the future value of an investment

               4. Calculate the  current amount required for a desired
               amount (Present Value)

               5. Calculate and amortize a loan payment

               6. Determine the future value of regular additions to an
               investment plan (annuity)

          Pressing  the  ESC  key  during  the amortize screen listing will
          return you to the misc menu.


                                      UTILITIES

          From this menu you  are able  to perform  the following  file and
          disk procedures:  (use the arrow key to make your selection)

               1. Delete file - deletes named file.

               2. Rename file - renames named file.


                                          8





               3. Change file  attributes - changes named file attributes
                                           from archive (normal file)  to
                                           read only or hidden file.

               4. Change drive - changes current disk drive.

               5. Change directory - changes current disk directory.

               6. Make a directory - creates named disk directory.

               7. Remove a directory - deletes named disk directory.

               8. Check disk  space - checks disk space of current disk
                                     drive.


                                  ARCHIVE/RETRIEVE

          A special utility is included with the program to remove
          (archive) securities from the transaction file.   This may become
          necessary when  a closed  position no longer needs to be analyzed
          with the rest of the  portfolio.   To  access  the  utility, type
          ARCHIVE at the DOS prompt.  The utility is menu driven and should
          not present any problems to the user.  Additionally, the user may
          use any  filename extension  desired when  naming the output file
          (the program will not accept an  extension when  prompted for the
          active  portfolio  filename).   To  analyze  an archived position
          without first retrieving it, the user must rename the file (under
          DOS) such that the extension becomes '<filename>.SPM'.


                               UPDATES/DISTRIBUTION

          We hope  that the  program meets with your approval.  If you have
          comments or suggestions has  how  it  can  be  improved,  or have
          requests that  you would like to see added to future updates, you
          may forward them to us at the following address:

                            Greg Morrison and Associates
                            Financial Consulting Services
                                     PO Box 151
                              Highwood, Illinois  60040


          Full function versions of SAPM, designated as "ShareWare", are
          distributed on electronic bullentin boards and by computer clubs.
          This keeps our marketing costs low, permitting considerable cost
          savings to users.  If this is to continue you must register your
          copy of the program.




                                          9





                                       INVOICE

          TO: Greg Morrison & Associates               Date: ____________
              PO Box 151
              Highwood, Illinois  60040

          FROM: _____________________
                _____________________
                _____________________
                _____________________


          Quantity          Description                        Cost
          --------          -----------------------            -------
            1               SAPM (postpaid)                    $25.00

                                              TOTAL:           $25.00


          COMMENTS/SUGGESTIONS FOR FUTURE UPDATES:
          ________________________________________________________________
          ________________________________________________________________
          ________________________________________________________________
          ________________________________________________________________
          ________________________________________________________________




























                                         10


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1684

     Volume in drive A has no label
     Directory of A:\

    ARCHIVE  CHN     15017   5-19-88   2:11p
    ARCHIVE  COM     26375   3-01-88   3:27p
    DJ       DAT       866   7-01-84  12:15a
    FILE1684 TXT      2517  12-11-89   5:31p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-12-89   1:39p
    MAIN     000      9728   6-08-88   4:52p
    MAIN     001       512   6-08-88   4:52p
    MAIN     002      3584   6-08-88   4:52p
    MAIN     003       768   6-07-88  12:32p
    MAIN     CHN     46949   6-08-88   3:40p
    MANUAL   DOC     18983   1-05-89  12:49p
    MCD      DAT       866   1-15-87   3:01a
    MISC     CHN     20638   6-06-88   5:06p
    READ     ME        238   3-28-88   9:55a
    SAPM     COM     12685   2-28-88  12:35p
    SB       DAT       866  11-12-87  12:18a
    SECURITY CHN     41213   9-21-88   6:10p
    UTIL     CHN     22904   5-19-88   2:15p
           19 file(s)     225287 bytes
                           88064 bytes free
