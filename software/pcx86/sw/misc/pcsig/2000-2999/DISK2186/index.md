---
layout: page
title: "PC-SIG Diskette Library (Disk #2186)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2186/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2186"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "YOUR NETWORTH"

    Turn your PC into a personal financial planning assistant with YOUR
    NETWORTH, a 1-2-3 template that lets you take snapshots of
    your investment portfolio and forecast your financial future.
    It's your personal financial planning and analysis tool.
    
    YOUR NETWORTH provides the means to track, manage, and assess your
    overall net worth.  It provides fixed income management, financial
    forecasting, tax estimation, and has record keeping capability for all
    forms of assets and liabilities.  YOUR NETWORTH is not a stock port-
    folio manager, a check writer, or a bill payer.  This system provides
    the means by which you can track and manage your accumulation of all
    assets in order to achieve your total financial goals.
    
    Although YOUR NETWORTH is a spreadsheet template for Lotus 1-2-3, very
    little 1-2-3 knowledge or experience is required.  Use it to record
    and manage your financial assets and liabilities such as bank
    accounts, retirement plans, stocks, bonds, mortgages, and other
    personal assets.  You can inventory and analyze anything of value.
    
    You can also use the program to forecast "what if?" financial
    situations.  Its goal seeking capability predicts your future
    financial condition.  You can project how changing monetary
    conditions, inflation rate, investment yields, and personal tax
    liabilities impact your current and future net worth.
    
    YOUR NETWORTH automatically provides help and/or hints if you
    incorrectly enter critical information.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2186.TXT

{% raw %}
```
Disk No: 2186                                                           
Disk Title: Your Networth                                               
PC-SIG Version: 1                                                       
                                                                        
Program Title: Your Networth                                            
Author Version: 1.06B                                                   
Author Registration: $15.00                                             
Special Requirements: Lotus 1-2-3                                       
                                                                        
YOUR NETWORTH is your personal financial planning and analysis tool.    
This analytical tool enables you to take snapshots of your investment   
portfolio, review how they've grown, and then look into your future     
to see what progress you have made.                                     
                                                                        
YOUR NETWORTH provides the means to track, manage, and assess your      
overall net worth.  It provides fixed income management, financial      
forecasting, tax estimation, and has record keeping capability for all  
forms of assets and liabilities.  YOUR NETWORTH is not a stock port-    
folio manager, a check writer, or a bill payer.  This system provides   
the means by which you can track and manage your accumulation of all    
assets in order to achieve your total financial goals.                  
                                                                        
YOUR NETWORTH is a menu-driven spreadsheet used with Lotus 1-2-3.       
Very little 1-2-3 knowledge or experience is required to use YOUR       
NETWORTH.  With YOUR NETWORTH you can quickly accomplish the            
following:                                                              
                                                                        
A. Record and manage your financial assets and liabilities.  These can  
be bank accounts, retirement plans, stocks, bonds, mortgages, plus      
other personal assets or liabilities.  You can inventory and analyze    
anything of value.                                                      
                                                                        
B. Forecasting "What If?" financial situations.  YOUR NETWORTH's goal   
seeking capability predicts your future financial condition.  You can   
project how changing monetary conditions, inflation rate, investment    
yields, and personal tax liabilities impact your current and future     
net worth.                                                              
                                                                        
YOUR NETWORTH automatically provides help and/or hints if you incor-    
rectly enter critical information.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## NETWORTH.DOC

{% raw %}
```









                              YOUR NETWORTH



           A PERSONAL FINANCIAL PLANNING AND MANAGEMENT SYSTEM






















































                       YOUR NETWORTH - Version 1.06B











Copyright (C) Richard C. Rychtarik 1988, 1989 all rights Reserved.
First edition printed 1989.



YOUR NETWORTH is furnished without warranty.  The author makes no
warranty or representation, either express or implied, with respect
to this program or documentation, including their quality, performance, merchantability, or fitness for a particular purpose.  There are no guarantees of the accuracy or validity of any results.



Under no circumstance will the author be liable for direct, indirect,
special, incidental, consequential or any other damages arising out of
the use of the program or it's documentation.



LOTUS (R) and 123 (R) are registered trademarks of the LOTUS Corporation.
IBM (R) is a registered trademark of International Business Machines. SuperCalc5 (R) and Computer Associates (R) are registered trademarks of Computer Associates, Inc.  VP-Planner Plus (R) is a registered trademark of Paperback Software.  Quattro is a registered trademark of Borland International.  As-Easy-As (R) is a registered trademark of TRIUS, Inc. 
YOUR NETWORTH is an unregistered trademark of Richard C. Rychtarik.
















                           YOUR NETWORTH Version 1.06B

      Copyright (C)  Richard C. Rychtarik 1988, 1989 all rights Reserved.
                         First edition printed 1989.



                           Table of Contents
                           -----------------
     Section                                                 Page

     1. Description .........................................  2

     2. Requirements.........................................  2

     3. Installation ........................................  3

     4. NETWORTH Organization................................  3

     5. YOUR NETWORTH Usage Overview.........................  4

     6. YOUR NETWORTH Usage Detail...........................  8

          Financial Forecasting and Analysis Component.......  8

          Financial Data and Information Component........... 16

     7. Update History....................................... 20

     8. Licensing & disclaimer............................... 20

     9. Registration and Free Software....................... 20

        Appendix............................................. 21

          A - Tips, Hints and Rules.......................... 21

          B - Questions & Answers............................ 21

          C - YOUR NETWORTH Examples......................... 21

          D - QUICK STARTING YOUR NETWORTH................... 25
                             THE ONE HOUR WONDER!

          E - Sage Advice.................................... 26

          F - NETWORTH Data Exchange......................... 27

          G - Representative Menus and Menu Formats.......... 27

          F - SNAPSHOT INDEX................................. 28







1. DESCRIPTION

Welcome to YOUR NETWORTH.  This is your personal financial planning and analysis tool.  This powerful analytical tool enables you to take snapshots of your investment portfolio, review how they've grown and then look into your future to see what progress you've made.

YOUR NETWORTH provides the means to track, manage and assess your overall net worth.  It provides fixed income management, financial forecasting, tax estimation, and has record-keeping capability for all forms of assets and liabilities.  YOUR NETWORTH is not a stock portfolio manager, a check writer or bill payer.  This system provides the means by which you can track and manage your accumulation of all assets in order to achieve your total financial goals.

YOUR NETWORTH is the official name of this software package.  This software works on IBM PC's or compatibles using LOTUS 1-2-3 software, version 2.01. Very little 1-2-3 knowledge or experience is required to use YOUR NETWORTH.

For brevity, this documentation will refer to YOUR NETWORTH and NETWORTH interchangeably.  By reading this users' guide carefully, you'll expedite the use and subsequent benefits of YOUR NETWORTH.

YOUR NETWORTH is a very useful, menu driven, financial spreadsheet.  With NETWORTH you can quickly accomplish the following:

A.  Record and manage your financial assets and liabilities.  These can be bank accounts, retirement plans, stocks, bonds, mortgages, plus other personal assets or liabilities.  You may inventory and analyze anything of value using YOUR NETWORTH.

B.  Forecasting "What If?" financial situations.  NETWORTH's goal seeking capability predicts your future financial condition.  YOUR NETWORTH enables you to easily forecast how changing monetary conditions, within financial markets and the economy, impact your finances.  You can perform analyses base upon on changes in world economic conditions like inflation rate, investment yields and personal tax liabilities.  Projections of how these changes impact your current and future net worth can be developed and viewed quickly.

C.  Future versions of YOUR NETWORTH will provide a financial calculator, a "full screen" data entry and edit capability, and a scratchpad.  Scratchpad is a special area for your general use and note-taking.  This space provides for recording additional information like tracking IRA rollovers, 401k plans, your financial progress or other useful historical data.

NETWORTH automatically provides help and/or hints if you incorrectly enter critical information.  All critical non-user areas of the spreadsheet will be locked if you enable the protect feature provided on your version of 1-2-3.


2. REQUIREMENTS:

YOUR NETWORTH requires LOTUS 1-2-3 version 2.01 and an IBM PC, PCjr, XT, AT or equivalent with 384K bytes or more memory.  For maximum responsiveness, use an IBM or compatible PC with turbo, AT, or 286/386 processor performance.

Spreadsheets claiming 100% compatibility with LOTUS 1-2-3 might also work.  However, these products are currently untested for use with YOUR NETWORTH.  These include 1-2-3 versions 2.2 and 3.0, As-Easy-As, Twin, VP-Planner Plus, Supercalc5, and Quattro.
3. INSTALLATION:

The YOUR NETWORTH spreadsheet file name, as listed on the master disk, is NETWORTH.WK1.  Begin by first making backup and working copies of the NETWORTH spreadsheet, then store the original master copy in a safe place.  You may wish to have several working copies of NETWORTH available for various reasons.  It is recommended that you assign new, unique, file names, like NET1.WK1, NET2.WK1, etc., as you make one or more working copies.

To make copies, insert the NETWORTH master or a backup disk into your "A" disk drive.  Using your version of DOS and a properly formatted disk installed on your "B" drive, type the following at the DOS system prompt:

Copy A:NETWORTH.WK1 B:(anyname.WK1) -or- Copy A:NETWORTH.WK1 B:AUTO123.WK1
The use of the AUTO123 file name is explained later.

"A" and "B" are your floppy disk device names and NETWORTH.WK1 is the file name of the master NETWORTH spreadsheet. If you wish to copy NETWORTH.WK1 to your hard disk drive, substitute its device name, usually "C", for "B" in the above copy procedure.  When copying to your hard disk drive first check that the desired directory is currently active.

Here's how to access YOUR NETWORTH using 1-2-3.  First, insert or transfer a working copy of the NETWORTH.WK1 spreadsheet file onto the disk drive where you normally access your LOTUS 1-2-3 data.  Second, load your version of 1-2-3.  Next, using the 1-2-3 retrieve file command, load the NETWORTH spreadsheet file into 1-2-3's working space by typing /FR.  Now, type the NETWORTH spreadsheet file name, prefaced by the appropriate disk drive letter.  For example, [DISK DRIVE LETTER]:\MYNET1.WK1.  Finally, strike the [Enter] key. Depending upon your system configuration, NETWORTH will load in 4 to 45 seconds.

Please note that 1-2-3 automatically loads a specially named spreadsheet file. This file name is AUTO123.WK1. 1-2-3 always searches its default data disk for spreadsheet files (.WK1 files) beginning with the letters AUTO123.  1-2-3 automatically loads YOUR NETWORTH if it is installed as AUTO123.WK1 on your 1-2-3 (default) data disk.  If you wish to have 1-2-3 load YOUR NETWORTH automatically, copy or rename NETWORTH.WK1 as AUTO123.WK1.

Caution, before you change any spreadsheet file name to AUTO123.WK1, be sure that the filename AUTO123.WK1 is not already in use!  To copy or rename any spreadsheet file to AUTO123.WK1 type at the appropriate system prompt -
COPY: or RENAME:[CURRENT FILE NAME HERE] AUTO123.WK1.  You should refer to your DOS reference manual for more information about how to use the COPY and RENAME commands.

4. YOUR NETWORTH ORGANIZATION:

NETWORTH, a single integrated spreadsheet system with menus, is a personal financial planning tool.  It has two major components.  These components are the Financial Forecasting & Analysis Component and the Personal Financial Data Inventory Component.  Columns A through J plus Rows 1 through 120 of the NETWORTH spreadsheet comprise the Financial Forecasting & Analysis Component (FFAC). The Financial Data Inventory Component (FDIC) begins at Column N, Row 129 and extends to Column AD.  Information you enter into the FDIC will be summarized (after manual recalculation) within the FFAC.

This users guide focuses primarily on the two major components, FFAC and FDIC, contained within the NETWORTH spreadsheet.  All FFAC references in this guide and the NETWORTH spreadsheet are organized by page.  A NETWORTH page has an identical corresponding page as viewed on your computer's CRT display screen. This is an 80 character wide by 25 line high view window.  The two major components of the NETWORTH spreadsheet (FFAC and FDIC) each contain several discrete but interrelated operating sections.

These operating sections, labeled A through F are:

              - Financial Forecasting & Analysis Component (FFAC) -

    A.  Page 1 - A Summary of Your Overall Financial NETWORTH.

    B.  Page 2 - Income Producing Capital Summarized by Maturity Date.

    C.  Page 3 - Financial Analysis and Forecasting - "What If" Capability.

    D.  Page 4 - Yield & Distribution Summary - Income Producing Investments.

    E.  Page 5 - Individual Accounting (Partitions) of Assets/Liabilities.

    F.  Page 6 - NETWORTH Viewgraphs - A Visual Summary of Your Net Worth.


             - Financial Data Entry & Information Component (FDIC) -

    A.  Detailed Personal Financial Data Inventory Information

Financial reports, both visual and hard copy, for all these operating sections are available via the ANALYSIS, DATA and RECORD options found on the MASTER menu.  The following is a two dimensional, column and row, view of YOUR NETWORTH template organization.

***************************************************************
 - FINANCIAL FORECASTING & ANALYSIS COMPONENT (FFAC) AREA -
***************************************************************
NETWORTH FINANCIAL SUMMARY   **********************************
CHRONOLOGICAL SUMMARY        **********************************
FORECASTING & ANALYSIS       **********************************
YIELD ANALYSIS               **********************************
FINANCIAL SUMMARY BY SECTION **********************************
NETWORTH VIEWGRAPHS          ********************************** ***************************************************************************
                     - FINANCIAL DATA & INFORMATION COMPONENT (FDIC) AREA - *************************************************************************** **********************************************************   SECTION 1   ** *************************************************************************** **********************************************************   SECTION 2   ** *************************************************************************** **********************************************************   SECTION 3   ** ***************************************************************************


5. USING YOUR NETWORTH OVERVIEW:

It is important to know that use of YOUR NETWORTH requires very little 1-2-3 knowledge or experience.  This spreadsheet is entirely menu driven and, when renamed AUTO123.WK1, is also self-loading.  YOUR NETWORTH is loaded (into 1-2-3) when the MASTER menu appears in the upper most part of your computer display.   You can also manually evoke the MASTER menu by pressing and holding the "ALT" plus the "M" keys on your computers keyboard.  Manual recall of the MASTER menu is only necessary if control has somehow reverted to LOTUS 1-2-3.
THE MASTER MENU:

MASTER MENU -->  ANALYSIS  CALC  EDIT  RECORD  SORT  UTIL  VIEW
* USE POINTER (-->) OR TYPE FIRST LETTER TO SELECT * [TYPE A,C,E,R,S,U,V,Esc]

The MASTER menu controls the access to all other menus.  The following is a brief description of what is available via this menu.  Seven menu choices are displayed on the MASTER MENU.  When a menu is first displayed the cursor/highlight will always be positioned on the far left menu selection. This is either the name of the menu or a directive of what to do next.

You may return to a previous menu by positioning the cursor/highlight onto the menu name or directive, then press the Enter key on the keyboard.  This procedure works with all menus except the MASTER menu.   Using this procedure at the MASTER MENU evokes the file Save option and Exit prompt.  A yes (Y) response at this prompt saves the current copy of YOUR NETWORTH (by replacing your previous copy) then asks if you wish to leave YOUR NETWORTH.  If yes, control is restored to the DOS operating system.

On the MASTER MENU, the primary menu options are ANALYSIS, EDIT, RECORD, SORT and VIEW.  The CALC and UTIL menu options provide secondary convenience utilities.  All menu options may be selected from the keyboard in two ways. Typing the first letter of the option you desire is one selection method.  The other method uses the right arrow key --> to position the cursor/highlight onto the desired menu option.  Select the highlighted option by typing "Enter".  The latter method provides additional information about the highlighted selection prior to actual use.  This additional information appears directly below the highlighted menu option.


ANALYSIS Menu:

The ANALYSIS menu provides access to the FFAC, allowing you to select and view pages of information about your personal net worth.  The page orientation enables you to view and focus upon condensed yet meaningful information.  This eliminates many distractions that normally occur when manually extracting information from spreadsheet data.  There are at least two other benefits derived from the page orientation.  First, NETWORTH users can conveniently print a "snapshot" view of financial information.  This is easily done by using the standard "Shift and Print Screen" keys found on the computer keyboard.  Second, page size views of information can be displayed rapidly with or without the use of YOUR NETWORTH menus.

The ANALYSIS section presently consists of six pages numbered 1 through 6. Page 1 of the financial analysis section contains a summary of all the data you have previously entered into YOUR NETWORTH.

Pages 2, 3 and 6 are interactive.  Page 2 is the chronological status of your investments.  It provides two views based on the maturity dates of your investments.  Page 3 provides an additional capability for financial forecasting and future projections.  This is a very powerful capability and time spent here doing " what if" kinds of financial forecasting will be time well spent.  These forecasts and projections can be based solely upon data you have entered into YOUR NETWORTH, data you have provided separately, or in combination.  Page 6 provides several graphic summaries of your net worth.

Page 4 is your yields and distributions before and after inflation and taxes. Page 5 shows a separate accounting of assets and liabilities by FDIC section. The FDIC is partitioned into three sections.  Your financial data may be entered into any one or all sections.   This partitioned or sectioned view is shown on page 5 only.  Pages 4 and 5 are not interactive.


CALC Option:

The MASTER menu has a CALC option for manual recalculation of the entire NETWORTH spreadsheet.  To save time, user initiated recalculation is the standard default mode.  As the user, it is your responsibility to initiate recalculation of the entire spreadsheet.  This should be done after any numeric entry or when the word CALC appears in the lower right hand corner.

The CALC function is also available on other NETWORTH menus.  However, these may only recalculate the appropriate or affected section(s), not the entire spreadsheet.  The interactive pages within the financial ANALYSIS section automatically recalculate the affected spreadsheet areas.  Recalculation occurs immediately after each data entry.


EDIT Menu:

The EDIT section provides for data entry and editing of your personal financial data.  EDIT is menu driven and the most interactive of all the sections.  Interaction with computers is primitive since they do not respond well to English language commands.  Therefore, if you are a novice computer user, this section might appear a little cumbersome at first.  However, it is quite simple to learn and use.  The level of difficulty here is trivial compared to mastering 1-2-3 or a word processor.

The EDIT section has three primary functions that support NETWORTH data manipulation.  The functions are add, delete or change the information about your assets.  EDIT provides the capability to enter your financial data, to delete any line of data, or to edit data within a line.  EDIT allows direct access to all three FDIC sections.

EDIT also contains a HELP and data VERIFY capability.  You should select or disable the HELP/VERIFY feature prior to any data entry or EDITOR (line editing support) operations.  When using HELP/VERIFY, each data entry item has three steps.  First, immediately prior to entering data, NETWORTH displays a detailed description of what's expected.  This will appear at the top of your screen.  You should read this information and respond by striking the "Enter" key.  Next, you must enter the data as requested.  Finally, after your data item is entered, NETWORTH prompts you to visually inspect your entry for accuracy.  You may either reenter the data or continue on to the next item. With the HELP/VERIFY capability you will soon master YOUR NETWORTH's data entry section.


RECORD Menu:

The RECORD Section is menu driven and has two basic capabilities for storing NETWORTH data.  These are to PRINT hardcopy information to your printer or to electronically store the current NETWORTH spreadsheet.  PRINT has several options.  These include printing all or portions of YOUR NETWORTH.  PRINT assumes that you have correctly preset 1-2-3 with the correct printer type, parameters, and control codes. The electronic file storage option stores the current version of YOUR NETWORTH onto the originating disk drive.  File storage is in 1-2-3 worksheet format.

Caution!  The file name used to retrieve YOUR NETWORTH is also used for storing your current spreadsheet.  Therefore, it is highly advisable to either alternate floppy disks for storing YOUR NETWORTH or periodically backup your hard drive data.


SORT Menu:

The SORT menu option allows for the sorting of NETWORTH financial data by
line item.  SORT options are available for sorting data using all major data fields.  Sorting is by investment name, description, investment category, purchase date, maturity date, yield and investment amount.

All sorts are done in ascending order and within each FDIC section actually in use.  If desired, you must manually invoke a recompilation of the spreadsheet after any SORT.


UTIL Menu:

A menu of ancillary NETWORTH user support utilities.  The BREAK option allows you to enable or disable the use of the keyboard enabled BREAK feature within 1-2-3.  This feature enables users, via the "Ctrl plus Break" keys on the keyboard, to "escape" a current 1-2-3 operation at any time.  This form of "exit" from YOUR NETWORTH is not recommended unless you feel completely confident of the result.  The BREAK feature is normally disabled and should remain so for most users of YOUR NETWORTH.  The SAVE option has the capability to save the current NETWORTH file to the default disk drive.  This option will automatically replace your last copy of NETWORTH with this latest version.


VIEW Menu:

The VIEW menu enables you to conveniently display your financial data on your computer.  There are several viewing options.  You may view data sequentially in the traditional 1-2-3 row and column orientation or split the view screen vertically.  You may also view your data in a condensed, abbreviated format.
This capability toggles on/off with the NORMAL/DENSE option.

Selecting the WINDOW option causes the split window view to toggle on or off. With the split screen option enabled, you may also reverse the window.  This feature is called MIRROR.  MIRROR instantly toggles the view window, forcing either the left or right view to remain stationary while the other changes.

VIEW is nice for reviewing information on your display screen and it has another equally beneficial attribute.  Using the "Shift" and "Print Screen" keys on your keyboard, you can very rapidly print the information being viewed.  The printing of lengthy, hard copy, reports may not be necessary since this convenience allows you to be more selective.


6. YOUR NETWORTH Usage Detail

The Financial Analysis and Forecasting Component (FFAC)

The following are examples of NETWORTH financial analysis pages 1 through 6. These examples are excerpts from a fictitious NETWORTH spreadsheet.  These excerpts retain their LOTUS 1-2-3 row and column orientation.  Where useful, annotations with pertinent information and explanations are provided.  This documentation also provides detailed explanations following each page view of the NETWORTH spreadsheet.

The NETWORTH Summary Page 1

Page 1 of the FFAC contains the copyright acknowledgement and is always the first page displayed after loading YOUR NETWORTH.  It is an informational summary describing "How are we doing?".
To access Page 1, first display the MASTER menu.  Use the "ALT" plus "M" keys or refer to the appendix for more information on how to access this menu. From the MASTER menu, access the ANALYSIS menu by typing the letter A.  When the financial ANALYSIS menu appears, type the number 1 to display Page 1.  The data you've previously entered into the FDIC is the basis of the information displayed on Page 1.  Using this data, NETWORTH computes and summarizes your financial condition.  NETWORTH data entry or interaction is not required here.


=====================BEGIN FINANCIAL SUMMARY - PAGE 1======================

  FINANCIAL ANALYSIS PAGES:  1   2   3   4   5   6   CALC
 SELECT PAGE: TYPE NUMBER OR POINTER --> FOR MORE INFORMATION (1-6,Enter,Esc)
   A       B            C        D      E      F      G     H      I      J
 1 *************************************************************************
 2 *       YOUR     - YOUR PERSONAL SAVINGS & INVESTMENT SUMMARY -       P1
 3 *     NETWORTH  --- Copyright 1988,1989  Richard C. Rychtarik ---
 4 *************************************************************************
 5 *
 6 *     $419,442  <<< -- YOUR CURRENT NET WORTH - TOTAL ENTRIES -- >>> 50
 7 *     $279,069  <<< TOTAL SAVINGS & INVESTMENTS ONLY
 8 *
 9 *            2  <<< INVESTMENTS MATURE IN THE NEXT 1 TO 90 DAYS !
10 *
11 *     $118,274  <<< INVESTMENTS WITH: FULLY TAXABLE INCOME
12 *     $160,795                      : TAX DEFERRED OR EXEMPT INCOME
13 *
14 *      $99,339  <<< CAPITAL WITH TAXABLE INCOME HELD IN BANKS & S&L's
15 *      $18,935  <<< ALL OTHER CAPITAL WITH TAXABLE INCOME
16 *
17 *     $103,060  <<< ALL RETIREMENT SAVINGS INCLUDING IRA's, 401k/3b's
18 *      $57,735  <<< ALL OTHER CAPITAL WITH TAX EXEMPT/DEFERRED INCOME
19 *
20 *      $22,873  <<< EQUITIES PRODUCING INCOME       4.1%  < EQUITY YIELDS
 ======================END FINANCIAL SUMMARY - PAGE 1========================


Row 6, Column B is your current net worth.  It is the total of all assets and liabilities you have previously entered into the Financial Data Inventory Component (FDIC).  For example, a bank savings account is an interest bearing asset and, when entered as such into YOUR NETWORTH, would be included here.  A house that you live in can represent an asset (property with equity), and a liability (home mortgage).  All these are included in Row 6, Column B. Row 6 also provides the number of entries, shown in Column J, that make up your net worth.

Row 7 contains the dollar value of all income generating assets and liabilities, excluding equities, previously entered into the FDIC.

Row 9 is the total number of investments that will mature over the next 90 days.  This is notification that some action may be required.  These investments are identified by the word "CHECK=" in Column AB of the FDIC.  To locate these investment use the VIEW option located on the MASTER menu.

Rows 11 and 12 are a breakout of the total savings and investment information displayed in Row 7.  Row 11 plus 12 equal the total dollar amount shown on Row 7 for non equity based, income producing savings and investments.  Rows 11 and 12 separate this information into two categories, taxable and tax exempt or tax deferred.

Row 11 displays the dollar value of capital assets currently generating taxable income.  To illustrate, $10,000 invested in a certificate of deposit normally generates taxable income.  If this were your only FDIC data, Row 11 would display $10,000 plus any accrued interest.

Row 12 is identical in function to Row 11.  However, it contains a summary of your federal tax deferred and exempt instruments like municipal bonds, retirement savings plans (401k's), or U.S.  savings bonds, etc.

Rows 14 and 15 breakout the "Investments With Fully Taxable Income" found on Row 11.  Row 14 provides a summary of capital assets held in traditional investments, such as banks, S&L's, money market accounts, etc.  Row 15 is a summary of the data in the category "Other" you provided in the FDIC.  This might include such taxable income producing items as first or second mortgages, notes for a personal loan, etc.

Hint, be creative and use the flexibility of the data identification options provided.  You determine how the information is presented because you select the classification code.  For example, you can classify a stock that pays dividends as an income-producing equity.  However, by not including the dividend as interest during data entry, this same investment will appear as an equity position only.  This is also a very rational option, since the primary purpose of this investment may be capital gains.  In all likelihood any dividends will eventually be reinvested elsewhere.  The point is that you have a choice.

Row 17 and 18 are a breakout of "Investments With Tax Deferred or Exempt Income" provided on Row 12.  Row 17 consolidates all your retirement savings investments like IRA and 401K's.  Row 18 shows the totals for all other federally tax advantaged investments including municipal bonds.

Row 20 provides the total dollar amount invested and the current yield for all income producing equities.  NOTE: The combined yield shown here is for information only.  NETWORTH does not use this information for any other calculations except current tax liability shown on Page 2.


The Financial ANALYSIS Page 2

Access to Page 2 of the FFAC begins at the MASTER menu ("ALT" plus "M" keys). From the MASTER menu, you must first access the financial ANALYSIS menu by typing the letter A.  After the financial ANALYSIS menu appears, type the number 2 to access this page.  It's primary purpose is to allow you to see the chronological distribution of your non equity based, income-producing investments.  This page also provides two different views.  You may use the Page 2 DISPLAY OPTIONS menu to alternately view your actual dollars invested or the percentage of the total investment.








=====================BEGIN FINANCIAL SUMMARY - PAGE 2======================

SELECT A DISPLAY OPTION:  DOLLARS$$   PERCENT%   CALC
 * CHANGE VIEW TO DOLLARS OR PERCENTAGES *  (TYPE D,P,C,Enter,Esc)
   A       B            C        D      E      F      G     H      I      J
21 ************************************************************************
22 *    - SUMMARY OF INCOME PRODUCING INVESTMENTS BY MATURITY DATE -     P2
23 ************************************************************************
24 *                                          CURRENT DATE    18-Dec-89
25 *
26 *            MATURITY YEAR:       $ TOTAL =  $ TAXABLE   +  $ EXEMPT
27 *                      1989 >>>   $23,439       $23,439           $0
28 *                      1990 >>>   $68,411       $25,225      $43,186
29 *                      1991 >>>   $39,197       $32,709       $6,488
30 *                      1992 >>>        $0            $0           $0
31 *                      1993 >>>   $30,000       $20,000      $10,000
32 *        1994 AND BEYOND    >>>  $118,021       $16,900     $101,121
33 *                                 --------      --------     --------
34 *   TOTALS FOR ALL YEARS    >>>  $279,069      $118,274     $160,795
35 *
36 * APPROXIMATE ANNUAL INCOME >>>    27,144        11,064       16,080
37 *
38 * YOUR CURRENT TAX RATE IS: 28%  YOUR ESTIMATED TAXES ARE:    $3,099
39 *
40 *
 =======================END FINANCIAL ANALYSIS - PAGE 2======================

The following is a description of what information is presented on the page shown above.

Rows 27 through 34 provide two views of your income producing investments. Equities that produce income are excluded.  Both views are based upon the maturity dates you previously supplied for these investments.  These views are actual dollar value and distribution percentage by income tax status and year.

Row 37 provides the current date.  This information is obtained from the DOS system date.  Make sure that you have provided DOS with the correct month and year or NETWORTH may not work properly.  For special purposes, any year and month values can be entered into DOS for subsequent use by YOUR NETWORTH. Significantly altering the DOS date can produce unreliable results.

Row 39 contains your marginal tax rate from Page 3 and your tax estimate for the current calendar year.  This estimate is derived from your marginal tax rate plus all taxable income, including income from equities.


The Financial Forecasting Page 3

Access to Page 3 of the FFAC begins at the MASTER menu ("ALT" plus "M" keys). From the MASTER menu, you may access the ANALYSIS menu by typing the letter A. After the financial ANALYSIS menu appears, type the number 3 to access this page.  It's primary purpose is to allow you to set future financial goals and to determine how you might realistically achieve these goals.  It does not require any entries other than those already provide by you in the NETWORTH data input section.  However, you may wish use the Page 3 MENU to alter the data in Column C rows 46 through 53.  By using this "What if" capability you can view the potential impact of current or future investment decisions.

Be creative and experiment.  You won't destroy anything, but you might uncover valuable insight into what your future financial situation could be!
=====================BEGIN FINANCIAL SUMMARY - PAGE 3======================

SELECT FORECASTING OPTIONS:  DOWN   UP   EDIT   FORECAST CONTROL   RESET
* FOR INFORMATION USE THE RIGHT ARROW (--> ) KEY * TYPE (D,U,E,F,R,Enter,Esc)
   A       B            C        D      E      F      G     H      I      J
41 ************************************************************************
42 *           - YOUR PERSONAL INVESTMENT & FORECASTING TOOLS -          P3
43 ************************************************************************
44 * --- ENTER YOUR FINANCIAL SITUATION HERE ---
45 *
46 *    $500,000      $500,000  <-- YOUR GOAL IN TODAY'S DOLLARS
47 *           0             0  <-- HOW MANY MONTHS FROM NOW?
48 *           0            $0  <-- EXTRA MONTHLY CONTRIBUTION
49 *         4.5%          4.5% <-- ESTIMATED ANNUAL INFLATION RATE
50 *        28.0%         28.0% <-- YOUR CURRENT INCOME TAX BRACKET %
51 *         9.7%          0.0% <-- CHANGE YOUR CURRENT INTEREST RATE?
52 *    $279,069            $0  <-- CHANGE SAVINGS & INVESTMENT TOTAL?
53 *        57.6%            0% <-- CHANGE % OF INCOME THAT IS TAX EXEMPT?
54 *   ^ composite ^
55 * > HERE ARE THE RESULTS OF YOUR INVESTMENT STRATEGY AS OF    Jun-89
56 * > REACHING YOUR GOAL REQUIRES  NOTHING  IN ADDITIONAL MONTHLY SAVINGS
57 *     totals                                           monthly income
58 *    $279,069  <<< TOTAL DOLLARS ACCUMULATED/AVAILABLE >>>    $2,262
59 *    $279,069  <<<     NPV - POST INFLATION VALUES     >>>    $1,216
60 *    $279,069  <<<     NPV - POST INFLATION AND TAXES  >>>      $959

 ====================END FINANCIAL FORECASTING - PAGE 3======================


Once you have entered your financial data into the Financial Data Information Component (FDIC), some basic information about your financial condition will be displayed in Column B, Rows 51 through 53.   Using this and/or simulated financial information entered into Column C, you can determine how any change(s) in your financial situation will impact your goal(s).

The data displayed in Column B is always used by YOUR NETWORTH to perform all financial forecasting calculations.  Important!  Entering numeric values other than zero into Column C will always replace corresponding data in Column B.  Therefore, Column B, Rows 46 through 53 are a composite of your current financial data as computed by YOUR NETWORTH plus any non zero data value previously entered into Column C.  After any Column C data entry, a partial recompilation of the spreadsheet is performed and the new results displayed.

The Page 3 FORECASTING OPTIONS menu contains three primary selections.  These are RESET, FORECAST CONTROL and EDIT.

RESET clears all values in Column C, Rows 46 through 53 and sets the new values to zero.

FORECAST CONTROL allows you to perform financial forecasting, "what if", scenarios in one of two modes.  It automatically repositions the control indicator (^ xxxxxxxxx ^) in Row 54 to show what mode is in use.

The "mixed or composite" data mode is described first.  When the control indicator (^ composite ^) in Row 54 is displayed in Column B, data entered into a corresponding row in Column C always overrides data in Column B.  Thus, Column B contains a composite of your current financial data plus any non zero value previously entered into Column C.  This "mixed data" capability allows you to modify some or all of your current financial data to project additional "what if" situations.
In the second mode the control indicator (^ override ^) in Row 54 is displayed in Column C.  Here, data displayed in Column B will always be identical to the data displayed in the corresponding rows of Column C.  Data is never "mixed".  No data other than the data supplied in Column C is used in your forecasts.

EDIT provides an automated data entry capability for Rows 46 through 53, Column C.   The choice of entries and their values are first determined then entered by you.  They allow you, in an iterative fashion, to model then forecast based upon your financial objectives or goals.  The following explains the use and purpose of Page 3 Column C data entries.

Enter in Row 46, Column C, the amount of money, (in today's dollars), you feel is necessary to support your future goal, i.e.  retirement, cash flow etc. This dollar value entry will not be used in any NETWORTH computations unless a value greater than zero (0) is also entered in Column C, Row 47 -"MONTH's".

Row 47, Column C, is the total number of months into the future you would like NETWORTH to forecast the outcome of your financial model.

Row 48, Column C, provides for periodic monthly payments, credits or debits, to be used in any future financial projections.  To obtain a meaningful result, an entry other than zero (0) in Row 47, Column C is also necessary. You may enter a debit here by prefacing the number with a minus (-) sign.

Row 49, Column C, when set to a value other than zero, allows a inflation or deflation value to be use by your financial model.

Row 50, Column C, is your current or estimated income tax rate.  You should consider entering a value that approximates the combined effective rate of your Federal and State income tax liability.

Rows 51, 52, & 53, Column C, are optional and require no entry in order to obtain a financial forecast.

Row 55 and Row 56 display information about your financial forecast.  Row 55 usually contains the date for which future financial projections were made. Row 56 normally displays how many dollars, on a monthly basis, you must contribute to meet your financial goal.  However, if there is insufficient data is available, YOUR NETWORTH will not forecast the amount of monthly savings required to meet your goal.  Directly or indirectly, you must supply all necessary values such as current savings amount, number of months to forecast, additional monthly contribution, interest rates and future goal. Based on the forecast desired, some or most of these values are necessary.


The Yield Distribution and Income Summary Page 4

Access to Page 4 of the FFAC begins at the MASTER menu ("ALT" plus "M" keys). From the MASTER menu, you may access the ANALYSIS menu by typing the letter A. After the financial ANALYSIS menu appears, type the number 4 to access this page.  It's primary purpose is to show what percentage of income and yield is derived from taxable and tax deferred/exempt sources.  It is also designed to present your real, after tax and inflation, rates of return.  You can then determine your true financial gain or loss. This page does not require any entries other than those already provide by you in the financial data input section (Columns N through AO).




==============BEGIN DISTRIBUTION & YIELD ANALYSIS - PAGE 4==================

FINANCIAL ANALYSIS PAGES:  1   2   3   4   5   6   CALC
 SELECT PAGE: TYPE NUMBER OR POINTER --> FOR MORE INFORMATION (1-6,Enter,Esc)
   A       B            C        D      E      F      G     H      I      J
61 ************************************************************************* 62 *   - YIELD & DISTRIBUTION SUMMARY OF INCOME PRODUCING INVESTMENTS -  P4
63 ************************************************************************* 64 *
65 *
66 *        42.4% <<< PERCENTAGE OF INVESTMENT INCOME CURRENTLY TAXABLE
67 *         9.3% <<< ANNUAL YIELD FOR ALL TAXABLE INCOME
68 *         6.7% <<< TAXABLE INCOME YIELD - AFTER TAX
69 *
70 *        57.6% <<< INVESTMENT INCOME NOW TAX DEFERRED OR EXEMPT
71 *        10.0% <<< ANNUAL YIELD FOR ALL TAX DEFERRED OR EXEMPT INCOME
72 *
73 *
74 *         9.7% <<< PRESENT INTEREST RATE AVERAGE FOR ALL INVESTMENTS
75 *         8.6% <<< AFTER TAX YIELD FOR ALL INCOME PRODUCING INVESTMENTS
76 *
77 *         5.2% <<< REAL GROWTH  AFTER INFLATION
78 *         4.1% <<< REAL GROWTH  AFTER INFLATION AND TAXES
79 *
80 *
 ================END DISTRIBUTION & YIELD ANALYSIS - PAGE 4==================


Row 66 highlights the percentage of your investment income that is currently taxable.  Row 67 is the combined average interest rate for all of your taxable income.   Row 68 provides the yield on your taxable investments after adjusting for any tax liability you provided in Row 50, Column C.

Rows 70 and 71 provide the same information as Row 66 & 67 with one exception. These calculations are based upon the combined tax deferred/exempt investment shown on Row 12.  Tax deferred income is considered tax exempt for this comparison.


The Individual Accounting Summary Page 5

Access to this page of the FFAC begins at the MASTER menu ("ALT" plus "M" keys).  From the MASTER menu, access the ANALYSIS menu by typing the letter A. After the financial ANALYSIS menu appears, type the number 5 to access this page.

This page is quite similar to the Page 1 financial summary.  Its' use is optional, providing a three part informational breakout of your FDIC data. Page 6 summarizes, by sections,  your financial condition and answers the question "How are we doing?".  This information is a breakdown of all the data you have entered into the FDIC.  After exiting the ANALYSIS menu (type "Esc" key), you may use 1-2-3 to manually replace the SECTION1, 2, or 3 titles in Row 84.  To do this, position the cursor over the desired location and type another name or title.  No other NETWORTH entries are required here.






================BEGIN INDIVIDUAL ACCOUNTING SUMMARY - PAGE 5=================

FINANCIAL ANALYSIS PAGES:  1   2   3   4   5   6   CALC
 SELECT PAGE: TYPE NUMBER OR POINTER --> FOR MORE INFORMATION (1-6,Enter,Esc)
    A       B            C        D      E      F      G     H      I      J 81  ************************************************************************* 82  *   - INVESTMENT CAPITAL - ACCOUNTING & DISTRIBUTION (OPTIONAL)  -    P5 83 ************************************************************************** 84  *SECTION1     SECTION2       SECTION3         <<< ENTER NAMES/TITLES
85  * $306,746      $29,142        $83,553     <<< --- NET WORTH ---
86  * $180,373      $29,142        $69,563     <<< ALL SAVINGS & INVESTMENTS 87  * --------     --------       --------
88  * --------     --------       --------         INVESTMENTS WITH INCOME:
89  *  $47,345       $1,375        $69,553     <<< FULLY TAXABLE
90  * $133,028      $27,767              0     <<< TAX DEFERRED & EXEMPT
91  * --------     --------       --------
92  * --------     --------       --------         CAPITAL W/TAXABLE INCOME: 93  *  $28,410       $1,375        $69,553     <<< INVESTED IN BANK's S&L's
94  *  $18,935            0              0     <<< ALL OTHER INVESTMENTS
95  * --------     --------       --------
96  * --------     --------       --------         TAX FAVORED INVESTMENTS:
97  *  $75,293      $27,767              0     <<< RETIREMENT - IRA's, 401K's 98  *  $57,735            0              0     <<< ALL OTHER T.E. CAPITAL
99  *
100 *       65%          10%            25%    <<< DIVISION OF CAPITAL (%) =================END INDIVIDUAL ACCOUNTING SUMMARY - PAGE 5==================


Row 85 is the current NETWORTH for each section.  This totals all assets and liabilities you have previously entered into the FDIC area by sections.

Row 86 contains a dollar value total of all income generating assets and liabilities you have entered into each section within the FDIC section.  For example, a bank savings account is an interest bearing asset and, when entered as such into NETWORTH, would be included here.  A house that you live in can be both an asset (property with equity), and a liability (mortgage).  Normally this would be consolidated into the NETWORTH totals shown on Row 85, but not Row 86, "All Savings and Investments".

Rows 89 and 90 are a breakout of the income producing "All Savings & Investments" information displayed in Row 86.  Row 89 plus 90 contain the total dollar value shown for savings and investments from Row 86, but divided into two categories - taxable and tax deferred.

Row 89 shows how much income producing capital you have that is earning a fully taxable return.  For example, at the end of any one year, $10,000 invested in a Bank CD at 10% annual yield will appear on Row 89 as $11,000.

Row 90 is identical to Row 89 except that Row 90 contains a summary of your federal tax deferred and exempt instruments like municipal bonds, retirement savings plans (401K's), or U.S. savings bonds, etc.

Rows 93 and 94 are a breakout of the "Investments With Fully Taxable Income" found on Row 89.  Row 93 provides a summary of capital held in traditional personal investments, banks, S&L's, money market accounts, etc.  Row 94 is a summary of the "Other" category from the information you provided in the FDIC section.  This might include such taxable income producing items as first or second mortgages, stock dividends, personal notes, etc.  Hint: Be creative and use the flexibility of the options provided.  You determine how the information is presented because you select the classification code.
For example, you can classify a stock as an income producing equity.

Rows 97 and 98 are a breakout of "Investments With Tax Deferred or Exempt Income" provided on Row 13.  Row 97 consolidates all your retirement savings investments like IRA and 401K's.  Row 98 shows the totals for all other federally tax advantaged investments including municipal bonds.


The NETWORTH VIEWGRAPHS Page 6

Access to this page of the FFAC begins at the MASTER menu ("ALT" plus "M" keys).  From the MASTER menu, access the ANALYSIS menu by typing the letter A. Type the number 6, after the financial ANALYSIS menu appears, to access this page.

The primary purpose of Page 6 is to provide multiple views of your financial status in graph form.  This page has a primary and a secondary menu.  The primary menu is shown at the top of the screen.  See example below.  The secondary menu appears when you choose the ALLOCATION + INCOME option on the MASTER menu.  The purpose of the secondary menu is to allow you to include or exclude equities in the page view.

The ALLOCATION + INCOME view displays how your investment capital is allocated.  The categories displayed are taxable, tax-exempt, or equities. Monthly incomes associated with each of these categories are shown in Column B, directly above the principal dollar amounts.


 =====================BEGIN NETWORTH VIEWGRAPHS - PAGE 6=====================

SELECT A DISPLAY OPTION:    ALLOCATION + INCOME    CALC    DISTRIBUTION
* NET WORTH - CAPITAL ALLOCATION AND DISTRIBUTION * (TYPE A,C,D,Enter,Esc)
    A       B            C        D      E      F      G     H      I      J 101 ************************************************************************* 102 *                    - YOUR NETWORTH VIEWGRAPHS -                     P6 103 ************************************************************************* 104 *   DOLLARS:                       PERCENT:                     LINES:
105 *        $900  ----+----+----+----+ 40% .........................    1
106 *    $117,179  ----+----+----+----+- 42% ........................    2
107 *      $1,345  ----+----+----+----+----+----+ 60% ...............    3
108 *    $160,795  ----+----+----+----+----+---- 58% ................    4
109 *          $0  ..................................................    5
110 *          $0  ..................................................    6
111 *             0%---+---20%---+---40%---+---60%---+---80%---+----100%
112 *
113 *   - INVESTMENT CAPITAL ALLOCATION AND MONTHLY INCOME GENERATION -
114 *
115 * LINES 1&2  =  FULLY TAXABLE MONTHLY INCOME AND THE PRINCIPAL AMOUNT
116 * LINES 3&4  =  TAX-EXEMPT OR TAX-DEFERRED MONTHLY INCOME & PRINCIPAL
117 * LINES 5&6  =  MONTHLY INCOME FROM ALL EQUITIES AND THE PRINCIPAL
118 *
119 *    $279,069 IS YOUR COMBINED DOLLAR VALUE THAT PRODUCES INCOME AND
120 *      $2,262 IS YOUR TOTAL MONTHLY INCOME PRODUCTION.
 ======================END NETWORTH VIEWGRAPHS - PAGE 6======================


Row 104 provides Column header information for data that appears in Columns 105 through 110.

Row 111 is a linear, horizontal scale that shows percentages.
Row 113 contains the title of the data, graphic or other information as presented on this page.
Row 114 provides additional column header information when the DISTRIBUTION viewgraph is displayed.


Rows 115 through 120 provide additional information, with line number
cross references, regarding data shown in the viewgraph.  Rows 119 and 120 may or may not have notes or summary information.  This is dependent upon which viewgraph is currently displayed.


The Financial Data Inventory Component (FDIC)

The MASTER menu EDIT Selection.

The EDIT option is your tool for supplying YOUR NETWORTH with information about your investments.  These MASTER menu options provide the capability to enter, modify or delete data.  From the MASTER menu, you select this option by typing the letter E or use the pointer to highlight the word EDIT then strike the Enter key.  Once this is complete, another menu and your data will appear as illustrated in the following example.

The EDIT menu provides five major options.  These options are to ADD data in any one of three sections, DELETE, EDIT or REPLICATE existing data, enable HELP and data verification during data entry.

Adding Data to YOUR NETWORTH.

To track and manage your net worth, you must first enter financial data into YOUR NETWORTH.   This one time data entry is accomplished via the EDIT menu. From the EDIT menu, data can be added in any of the three sections simply by typing the number of the section (either 1, 2 or 3).  YOUR NETWORTH will respond by moving the data entry cursor to the correct section and will begin prompting you for data.  As with all the interactive screens provided by NETWORTH, simply follow the instructions.  Instructions will be provided at the top of the display screen and at the cursor location.

Once you begin to enter data, you must complete that line item entry.  Using the data VERIFY option, you may correct errors after each item entered.  If data entry errors still exist after completing the entire line, you may correct these using the EDITOR.  It is advisable that you have your financial information organized and readily available before you begin data entry.

Getting Started - Using HELP & VERIFY.

By selecting the HELP/VERIFY option before starting your data entry, you will receive additional help and one opportunity to correct each entry.  These two features are very beneficial to first time users.

After a few line entries however, you should no longer need the HELP/VERIFY feature.  You should turn off these features when you have sufficient experience with YOUR NETWORTH's data entry requirements.  This will save time and you can always turn them on again if needed.

The following is a sample view of the EDIT menu and FDIC data.




ADD DATA IN SECTION:  1  2  3   -OR->  DELETE  EDITOR  HELP/VERIFY  REPLICATE
* YOU MAY ADD, EDIT OR DELETE FINANCIAL DATA, SELECT OPTION [1,2,3,D,E,H,R,Esc
         N                    O                P
129 CATEGORY...INVESTMENT NAME....SECTION 1.....
130
131         0 CENTRAL SAVINGS & LOAN
132         0 CENTRAL SAVINGS & LOAN
133         0 CITY BANK
134         0 FIRST FEDERAL SAVINGS
135         0 MILL SAVINGS AND LOAN
136         0 STATE SAVINGS & LOAN
137         1 COMMUNITY S & L
138         1 MILL SAVINGS
140         1 MILL SAVINGS
141         1 MILL SAVINGS
142         1 MILL SAVINGS
143         1 MILL SAVINGS
144         1 MILL SAVINGS
145         1 MILL SAVINGS
146         1 UNITED SAVINGS
147         1 US SAVINGS BONDS
148         2 10.3% @ PAR MUNI BOND TE/BBA
149         2 10.4% @ PAR MUNI TRUST 116 BONDS TE/AAA


Entering Data using the EDIT menu

To record your assets, a car, savings account, stocks and bonds, etc., you must supply the FDIC with detailed descriptions. You create a catalog of assets using the data entry portion of EDIT.  Currently, the FDIC data entry area has 12 data fields. Their titles, in usage order, are:

 1. CATEGORY                       7. COMPOUNDING FREQUENCY
 2. INVESTMENT NAME                8. PURCHASE YEAR
 3. DESCRIPTION                    9. PURCHASE MONTH
 4. IDENTIFIER                    10. MATURITY YEAR
 5. REMARKS & COMMENTS            11. MATURITY MONTH
 6. SIMPLE INTEREST               12. INITIAL VALUE

The following explains what data is expected for each FDIC field.

1. CATEGORY

For this data field, enter the predetermined number representing an investment classification, (see CATEGORY table below), that best describes the investment you are about to catalog.  The FDIC expects a numeric entry from 0 through 5. YOUR NETWORTH will not use assets identified by numbers other than 0 through 5.

You have some flexibility in category selection.  Within limits, you may choose how your individual assets and liabilities are tracked and managed. For obvious reasons, all entries must match the overall classification scheme, i.e.  a taxable investment should not be placed into the same category as a non-taxable etc.

You should decide at the start how you will classify and categorize your investments.  Always remain consistent and, if necessary, write down your method in this guide.  For example, categories 1 and 2 both track tax-exempt and/or tax-deferred investments.  However, you must determine which investments are placed into these two categories.
                      - TABLE OF INVESTMENT CATEGORIES -

Recommended use:                              Description/Category number:

Certificate of Deposits, Money Market       REGULAR SAVINGS...............0 accounts, passbooks etc.

Tax deferred or tax exempt investments      IRA-CD / US SAV.BONDS.........1 like IRA's held in bank CD's, U.S.
savings bonds, tax deferred annuities.

Municipal bonds or other tax exempts.       OTHER TAX FREE................2

Mortgages or personal notes and loans,      OTHER TAXABLE.................3 corporate bonds, etc.

Retirement savings plans including 401k's,  401k/b's OTHER R.S.P.'s.......4 403b's, Keogh's.

Stocks, real estate, or other investments   EQUITIES......................5 where you have an equity position.

You should print this table for future reference.


2. INVESTMENT NAME

Describe where this investment is placed.  For instance, Mainstreet Savings & Loan, Merrill Lynch, or New York State double tax exempt muni's.


 3. DESCRIPTION

Describe in more detail what the asset is, such as, five year certificate of deposit, 100 shares of Eastman Kodak stock, or 9% revenue bonds.


4. IDENTIFIER

Usually an account number, serial number or address.


5. REMARKS & COMMENTS

Anything additional you would like to add.


6. SIMPLE INTEREST

This is the interest you will receive without compounding.  No interest will accrue to an asset unless you enter values here and in COMPOUNDING FREQUENCY.


7. COMPOUNDING FREQUENCY

A number representing how often this asset's interest compounds.  Use this formula to determine the number - [total number units in the compounding term/number of units in the compounding period].


For example, the number that represents quarterly compounding is 4,
(12 months/3 months).  For semi-annual compounding enter the number 2, (12months/6 months) or for daily compounding use 365 (365 days/1day).  No interest will accrue to an asset unless you enter values here and in SIMPLE INTEREST.


8. PURCHASE YEAR
9. PURCHASE MONTH

You will be given a choice of entering the actual date, (numeric year and month) that you purchased an asset, or having NETWORTH insert the current (DOS) date.  The DOS date option should be used when you want an asset to show yield (entries 6. & 7.above) but not growth.

A good example is a money market account.  These are highly liquid assets that usually accept (checking) transactions.  Because money market accounts are subject to frequent fluctuations in value, tracking growth due to interest compounding may not be meaningful.  However, for the purpose of investment comparison and analysis, you still need to identify this asset's yield an approximate value.  The (DOS) date option provides for this contingency.


10. MATURITY YEAR
11. MATURITY MONTH

At this prompt, NETWORTH will ask you to type the date, numeric month and year, when this investment ends.  A five year CD you purchased in January, 1989 would have a maturity year and month entry of 1994  1.  No action is required if you selected the DOS date default option.


12. INITIAL VALUE

How much did you pay for this asset when acquired or what is it's current market value?  A CD purchase for $5,000 is entered as such.  You may have bought your home 10 years ago for $100,000, but you should enter it's current market value.

The DELETE command allows you to remove any one data line (row) you have previously entered.  You cannot recover a line after it has been removed.

The EDITOR command allows for the editing of any item on any line (row) of data.  Once a Line has been chosen you must complete the entire line in order to return to the primary menu.

The HELP/VERIFY option provides additional information only when you are first entering information into sections 1, 2 or 3.

The REPLICATE command give you the capability to create an identical copy of any one line (row) of information you previously entered.  This is useful when used in conjunction with the EDITOR for entering nearly identical data items.  You can make identical copies then modify these using the EDITOR.







7. UPDATE HISTORY:

First controlled release was version 1.0. on January 1989.  BETA release is August, 1989.  The first public release is version 1.06B dated October, 1989.


8. LICENSING:

YOUR NETWORTH was written by Richard C. Rychtarik for the IBM PC and compatible systems using LOTUS (R) 123 (R) version 2.01.  This software has been used successfully with the DOS 2.11, and DOS 3.x operating systems.

YOUR NETWORTH is supplied for your personal, private use.  Feel free to distribute NETWORTH given these restrictions:

              o  the program shall be supplied in its original,
                 unmodified form, which includes this documentation;

              o  no fee is charged.

              o  commercial use is prohibited.

              o  NETWORTH may not be included - or bundled - with
                 other goods or services.  Exceptions require written
                 permission of the author.

              o  NETWORTH is furnished without warranty.  The author makes
                 no warranty or representation, either express or implied,
                 with respect to this program or documentation, including
                 their quality, performance, merchantability, or fitness for
                 a particular purpose.  There are no guarantees of the
                 accuracy or validity of any results.

              o  In no event will the author be liable for direct, indirect,
                 special, incidental, consequential or any other damages
                 arising out of the use of the program or it's documentation.

If you use YOUR NETWORTH version 1.06B, a software registration fee in the amount of $15 is required.  For registered owners of YOUR NETWORTH, we will respond to all suggestions, ideas, and potential problems when documented in writing and mailed to the address below.  We will attempt to incorporate your recommendations and change requests into YOUR NETWORTH.  However, we cannot guarantee that all suggestions will be implemented.


9. REGISTRATION:

Registration, plus $5 for shipping and handling, entitles you to receive the next official release of YOUR NETWORTH without charge.  To register, please send your check or money order, payable to Richard C.  Rychtarik, along with your name and address to the address shown below.  Thank you.

                            Richard C. Rychtarik - V1
                            15463 Squires Way Drive
                            Chesterfield, MO  63017-5434





Appendix A.  Suggestions, Helpful Hints and Rules

Using a basic DOS system and memory ranging from 384KB to 640KB, NETWORTH's approximate data capacity ranges from 10 to 130 line item entries.

Control reverts back to 1-2-3 when you press the escape (Esc) key.

Striking the "ALT" plus "M" key invokes the Main menu.

With the cursor positioned in the uppermost left corner of any menu, pressing the "Enter" key causes NETWORTH to return to the previous menu.

Use the spacebar or arrow [<-- -->] keys to highlight menu options.

Select menu options by typing their first letter or the "Enter" key when highlighted.

A NETWORTH status message is displayed in the upper right hand corner of your screen.  These messages usually refer to the current activity such as CALC for computation in progress, EDIT for data entry, or  WAIT for request now being processed.  A > sign followed by a number indicates the time in seconds required to complete the operation.

YOUR NETWORTH always includes equity values when computing your net worth. However, NETWORTH will not perform any "savings and investment" related computations using equity income data unless values greater than zero are entered in both the Yield and Compounding Frequency data fields (FDIC).

Most NETWORTH requests for numeric data entry accept signed values and simple arithmetic statements like 2408+194.  You may enter negative values by using the minus (-) sign.

For spreadsheets exceeding your current memory capacity, consider maintaining at least two NETWORTH files.  One account for active investment and, for historical record keeping, maintain a separate file of inactive accounts.


Appendix B.  Questions and Answers

Question: How do I determine what maturity dates to use for an IRA or a 401k?

Answer: For the IRA you have several options.  For example, if your IRA is invested in a CD, you could use the CD's maturity date.  A less conservative approach would be to set the maturity date the same as the year you become 59.5 years old.  This is the minimum age for unrestricted IRA funds withdrawals.  For an employer 401k, I would suggest the latter method for establishing a maturity date.


Appendix C: YOUR NETWORTH Examples

Situation 1 - Future Value Projections.

You want to begin saving for your child's college education.  Today, a four year college education at your old alma mater is $40,000.  You decide upon a conservative approach to ensure the money is available when needed.  The question is how much money must you contribute now and over time to meet this goal?

You also know your own circumstances.  Your child is two years old; therefore, you have at least 16 years to contribute.  Even with inflation at 4.5 percent, a 9 percent yield from a bank certificate of deposit or money market account is attractive and safe.
You research the advantages of custodial accounts to determine how they could benefit a child's college savings.  You learn that using a custodial account could reduce taxes paid on the earnings.  A custodial account can reduce federal taxes owed since earnings would be taxed at your child's rate of 15 percent.  This is considerably less than your marginal tax rate of 28 percent.

Now you must determine how much money to contribute each month to reach your goal in 16 years.  Remember, the goal in today's dollars is $40,000 after taxes.

You call upon YOUR NETWORTH for some definitive answers.  Possessing this small amount of essential data, you proceed to load YOUR NETWORTH.  A few simple keystrokes later and you are ready to use the ANALYSIS Section Page 3, the "what if" section.

Using the Page 3 EDIT menu option, you enter your data into Column C, Rows 46 - 53. The data entered are self-explanatory.  The example below contains these data. Upon completion, you ready your printer and press the "Shift" and "Print Screen" keys.  This creates a hardcopy of Page 3 for future evaluation.  If no printer is available, write down the information from Rows 55 through 60. This completes the evaluation.

SELECT FORECASTING OPTIONS:  DOWN   UP   EDIT   FORECAST CONTROL   RESET
* FOR INFORMATION USE THE RIGHT ARROW (--> ) KEY * TYPE (D,U,E,F,R,Enter,Esc) 41 ************************************************************************
42 *           - YOUR PERSONAL INVESTMENT & FORECASTING TOOLS -          P3
43 ************************************************************************
44 * --- ENTER YOUR FINANCIAL SITUATION HERE ---
45 *
46 *     $40,000       $40,000  --> YOUR AFTER TAX GOAL IN TODAY'S DOLLARS
47 *          16           192  --> HOW MANY MONTHS FROM NOW?
48 *          $0            $0  <-- EXTRA MONTHLY CONTRIBUTION - IF ANY
49 *         4.5%          4.5% --> ESTIMATED ANNUAL INFLATION RATE
50 *        15.0%         15.0% --> YOUR CURRENT INCOME TAX BRACKET %
51 *         9.0%          9.0% --> ALTERED CURRENT INTEREST RATE!
52 *          $0            $0  <-- CHANGE SAVINGS & INVESTMENT TOTAL?
53 *         0.0%          0.0% <-- CHANGE % OF INCOME THAT IS TAX EXEMPT?
54 *                  ^ override ^
55 * > HERE ARE THE RESULTS OF YOUR INVESTMENT STRATEGY AS OF  Jul-2005
56 * > REACHING YOUR GOAL REQUIRES      $160 IN ADDITIONAL MONTHLY SAVINGS
57 *     totals                     ^ ^ ^ ^ ^                monthly income
58 *          $0  <<< TOTAL DOLLARS ACCUMULATED/AVAILABLE >>>        $0
59 *          $0  <<<     NPV - POST INFLATION VALUES     >>>        $0
60 *          $0  <<<     NPV - POST INFLATION AND TAXES  >>>        $0


For this evaluation to work correctly, the control indicator (^ xxxxxxxxx ^) in Row 54 must be positioned in Column C.  If it is not select FORECAST CONTROL on the Page 3 menu by typing the letter F.

You may further analyze this situation.  You can immediately determine what the gross and net dollar values of this account will be in 16 years.  Use the  EDIT option on this page to enter the value 160 in the MONTHLY CONTRIBUTION row.  These results are shown in the next example.  You could also evaluate this situation using a fixed amount of money deposited into your child's account.  This option is not shown in the example.  to try this, simply use the PAGE 3 EDIT option to enter the amount in Column C, Row 52.
SELECT FORECASTING OPTIONS:  DOWN   UP   EDIT   FORECAST CONTROL   RESET
* FOR INFORMATION USE THE RIGHT ARROW (--> ) KEY * TYPE (D,U,E,F,R,Enter,Esc)
41 ************************************************************************
42 *           - YOUR PERSONAL INVESTMENT & FORECASTING TOOLS -          P3
43 ************************************************************************
44 * --- ENTER YOUR FINANCIAL SITUATION HERE ---
45 *
46 *     $40,000       $40,000  --> YOUR AFTER TAX GOAL IN TODAY'S DOLLARS
47 *          16           192  --> HOW MANY MONTHS FROM NOW?
48 *     $30,720          $160  --> EXTRA MONTHLY CONTRIBUTION - IF ANY
49 *         4.5%          4.5% --> ESTIMATED ANNUAL INFLATION RATE
50 *        15.0%         15.0% --> YOUR CURRENT INCOME TAX BRACKET %
51 *         9.0%          9.0% --> ALTERED CURRENT INTEREST RATE!
52 *          $0            $0  <-- CHANGE SAVINGS & INVESTMENT TOTAL?
53 *         0.0%          0.0% <-- CHANGE % OF INCOME THAT IS TAX EXEMPT?
54 *                   ^ override ^
55 * > HERE ARE THE RESULTS OF YOUR INVESTMENT STRATEGY AS OF  Jul-2005
56 * > REACHING YOUR GOAL REQUIRES        $0 IN ADDITIONAL MONTHLY SAVINGS
57 *     totals                     ^ ^ ^ ^ ^                 monthly income
58 *     $68,226  <<< TOTAL DOLLARS ACCUMULATED/AVAILABLE >>>      $512
59 *     $44,871  <<<     NPV - POST INFLATION VALUES     >>>      $256
60 *     $39,877  <<<     NPV - POST INFLATION AND TAXES  >>>      $179


Situation 2. Comparisons of Alternate Investment & Savings Options.

You've determined your family budget consistently has a monthly surplus of $350.  You decide to invest these funds conservatively.  You pick two simple savings alternatives for an evaluation.

The first is a federally insured money market account at your local bank yielding 8.4 percent.   The second alternative is a 401k plan.   Your employer offers this 401k plan, but without any employer matching funds.  Furthermore, this 401k plan's money market option currently yields only 7.7 percent.  Both of these savings alternatives compound monthly.  Instinctively, you know the answer.  However, you feel more comfortable taking a few minutes for YOUR NETWORTH to validate your choice.

To perform this evaluation, you first decide upon the investment criteria.
The money you have available for investment accrues monthly.  Therefore, the investment vehicle must accept periodic deposits easily and without penalty. For this purpose, money market accounts will do nicely.  Your surplus is also an after tax situation.  For the foreseeable future, you have little doubt that this surplus capital will continue to be available.  As a result, you choose to conduct a long term, 10 year evaluation.

You also need to know the current rate of inflation and your marginal tax rate.  Fortunately, the financial section of your Sunday paper publishes the current rate of inflation which is now at 5.0%.  From last year's tax record, you know that your marginal tax rate is 28%., and that probably won't change soon.

Armed with this information you now load YOUR NETWORTH.   A few simple keystrokes later and you're in the ANALYSIS Section Page 3, the "what if" section.
Using the EDIT capability, you enter into Column C, Rows 46 - 53, the your data as shown in the example below.  Upon completion,  you ready your printer and press the "Shift and Print Screen" keys.  This creates a hardcopy of Page 3 for future evaluation.  If no printer is available write down the information from Rows 55 through 60.  This completes the evaluation of the first alternative, the bank money market account.

SELECT FORECASTING OPTIONS:  DOWN   UP   EDIT   FORECAST CONTROL   RESET
* FOR INFORMATION USE THE RIGHT ARROW (--> ) KEY * TYPE (D,U,E,F,R,Enter,Esc)
41 ************************************************************************
42 *           - YOUR PERSONAL INVESTMENT & FORECASTING TOOLS -          P3
43 ************************************************************************
44 * --- ENTER YOUR FINANCIAL SITUATION HERE ---
45 *
46 *          $0            $0  <-- YOUR AFTER TAX GOAL IN TODAY'S DOLLARS
47 *          10           120  --> HOW MANY MONTHS FROM NOW?
48 *     $42,000          $350  --> EXTRA MONTHLY CONTRIBUTION - IF ANY
49 *         5.0%          5.0% --> ESTIMATED ANNUAL INFLATION RATE
50 *        28.0%         28.0% --> YOUR CURRENT INCOME TAX BRACKET %
51 *         8.4%          8.4% --> ALTERED CURRENT INTEREST RATE!
52 *          $0            $0  <-- CHANGE SAVINGS & INVESTMENT TOTAL?
53 *         0.0%          0.0% <-- CHANGE % OF INCOME THAT IS TAX EXEMPT?
54 *                   ^ override ^
55 * > HERE ARE THE RESULTS OF YOUR INVESTMENT STRATEGY AS OF    Jul-99
56 *
57 *     totals                                              monthly income
58 *     $65,480  <<< TOTAL DOLLARS ACCUMULATED/AVAILABLE >>>      $458
59 *     $49,940  <<<     NPV - POST INFLATION VALUES     >>>      $186
60 *     $44,259  <<<     NPV - POST INFLATION AND TAXES  >>>       $57


For this evaluation to work correctly, the control indicator (^ xxxxxxxxx ^) in Row 54 must be positioned in Column C.  If it is not select FORECAST CONTROL on the Page 3 menu by typing the letter F.

Evaluating the second option, the 401k:

Now you must evaluate your second investment option, the 401k plan.  Again, selecting EDIT from PAGE 3 menu, you enter into Column C, Rows 46 - 53 your data as shown in the example below.  Once again, you ready your printer and press the "Shift" and "Print Screen" keys to obtain a hardcopy of this page for future evaluation.  If no printer is available write down the information contained in Rows 55 through 60.  This completes your evaluation of the second investment alternative, the 401k plan.

While reviewing the first and second evaluations, you discover there are two major differences in the data you've entered into YOUR NETWORTH.  First, in the 401k plan evaluation, the monthly investment amount was increased by 28 percent.  This is because the monthly surplus amount was $350 after tax.  The key is "after tax"!  The 401k plan reduces your tax liability because 401k contributions, within limits, are deducted from your federally taxable (W2) earnings.  This means you can actually increase your 401k monthly contribution by your marginal 28% tax rate without affecting your net income.

Second, the percentage of tax exempt income you entered for the 401k plan evaluation is 100 percent.  This is because no taxes are paid on your 401k account earnings until you withdraw funds.  In other words, contributions to your company 401k and all subsequent earnings are tax deferred until withdrawn.  You evaluation reflects this situation.  Compare the results in Rows 58 through 60 and see which investment is better!





SELECT FORECASTING OPTIONS:  DOWN   UP   EDIT   FORECAST CONTROL   RESET
* FOR INFORMATION USE THE RIGHT ARROW (--> ) KEY * TYPE (D,U,E,F,R,Enter,Esc)
41 ************************************************************************
42 *           - YOUR PERSONAL INVESTMENT & FORECASTING TOOLS -          P3
43 ************************************************************************
44 * --- ENTER YOUR FINANCIAL SITUATION HERE ---
45 *
46 *          $0            $0  <-- YOUR AFTER TAX GOAL IN TODAY'S DOLLARS
47 *          10           120  --> HOW MANY MONTHS FROM NOW?
48 *     $53,760          $448  --> EXTRA MONTHLY CONTRIBUTION - IF ANY
49 *         5.0%          5.0% --> ESTIMATED ANNUAL INFLATION RATE
50 *        28.0%         28.0% --> YOUR CURRENT INCOME TAX BRACKET %
51 *         7.7%          7.7% --> ALTERED CURRENT INTEREST RATE!
52 *          $0            $0  <-- CHANGE SAVINGS & INVESTMENT TOTAL?
53 *       100.0%        100.0% --> ALTERED % OF INCOME NOW TAX EXEMPT!
54 *                   ^ override ^
55 * > HERE ARE THE RESULTS OF YOUR INVESTMENT STRATEGY AS OF    Jul-99
56 *
57 *     totals                                              monthly income
58 *     $80,602  <<< TOTAL DOLLARS ACCUMULATED/AVAILABLE >>>      $517
59 *     $61,638  <<<     NPV - POST INFLATION VALUES     >>>      $181
60 *     $61,638  <<<     NPV - POST INFLATION AND TAXES  >>>      $181

For this evaluation to work correctly, the control indicator (^ xxxxxxxxx ^) in Row 54 must be positioned in Column C.  If it is not select FORECAST CONTROL on the Page 3 menu by typing the letter F.


Appendix D. QUICK STARTING YOUR NETWORTH - THE ONE HOUR WONDER!

Here's how to quickly begin using YOUR NETWORTH.  There are two major components you must become familiar with.  These components control data entry and financial analysis.

The first step toward mastering YOUR NETWORTH is read Sections 1 through 5.  Upon completion, skip forward in Section 6 and read only the data entry (FDIC) description.  You now have sufficient knowledge to begin data entry.

Make a practice run using your own financial data.  Using the installation instructions provided in Section 3, Load 1-2-3 and YOUR NETWORTH.  Using the right arrow key ( -->) Select EDIT from the MASTER menu, Wait for the EDIT menu to appear, then select HELP & VERIFY.  Now enter your financial data, (ADD DATA) into section 1.  Return to the Master menu and select the ANALYSIS Page 1 then CALC.  What do you see?  Now try the EDITOR then DELETE this line.

To familiarize yourself only with the Financial ANALYSIS portion of YOUR NETWORTH, read Section 3 then install and load YOUR NETWORTH.  Now locate and read the description for accessing and using the financial ANALYSIS menu Page 3. This description can be found in Section 6.  Next, go to the Appendix part C and review the Page 3 financial forecasting examples.  Finally, pick one of these examples and try it!  How did you do?









E.  SAGE ADVICE

Today, savings must be synonymous with investing.  This does not necessarily mean taking great risk.  In recent times relatively mundane low risk products like money market accounts and bank CD's are outperforming the 9.6% historical returns of stocks.

Not all investors need or want the same investment strategy.  However, it is generally agreed that those that succeed most often take the long view toward investing.

It is important to cut losses and to let gains continue.  These two very important principals are easy to remember but hard to execute.  Emotions more often than not drive us to making irrational choices.  One should make note of why an investment is made.  What is the perceived potential?  In what time- frame should the potential be realized?  How much of a loss are you willing to absorb in pursuit of your goal?

It is difficult enough for most of us to be expert at something we do full time, like our profession. Why should we think we can also become experts at stocks, bonds, commodities and finance?  If your employed in industry, like automotive, office equipment, mining etc., use your industry knowledge or contacts to find related investment opportunities.

Good advice is almost priceless.  It is hard to find and in great demand.
When unsure about what to do, seek expert investment advice.  When seeking financial advice look for an individual with both experience and knowledge. One without the other is of marginal value.  Expert advice usually has an associated cost.  When it's free it may not be worth anything at all.


F: HOW TO TRANSFER NETWORTH FINANCIAL DATA.

here are the four basic steps you must follow in order to import your data
from another version of YOUR NETWORTH.

First, load the NETWORTH version that contains the data to be imported.  Now
count the number of rows in each section that contain data that you want to
import.  All data to be imported must be in sequential order.  Also record the
beginning and ending coordinates, row numbers and column letters, for the data
in each section.  Beginning and ending columns will always use the letters N
and BU respectively.  To illustrate, you might want to import the first 10
data rows from Section 1.  Their coordinates form a rectangle on the NETWORTH
spreadsheet with the row and column range of N131..BU140.

Second, load the version of YOUR NETWORTH that will receive the data.  Once
loaded you must escape the menu controls of YOUR NETWORTH and use 1-2-3
commands.  Do this from the NETWORTH MAIN menu by striking the EDIT key once
followed by the Esc key twice.  Strike the down arrow key twice.  You are now
positioned at the start of NETWORTH's data area and are under the control of
1-2-3.

Third, use the up/down arrow keys to position the cursor in the section and at
the location you wish to begin importing data.  This will normally correspond
with the same column, but not necessarily the same row, you recorded during
the first step.  Type the following sequence of four characters  /WIR.  Next,
use the down arrow key to move the cursor down the exact number of data rows,
less one, as you recorded in the first step for the corresponding section.
The number of rows now highlighted on your display screen should be identical
to the number you will import.  Now strike the Enter key.
Fourth, At this point you are now ready to import data.  Type the following
sequence of five characters  /FCCN  followed by the starting Column letters
and Row numbers of data you previously recorded.  The starting column will
always be column N and the row number greater than 130 (Nxxx).  Next type two
periods .. and the ending column, always BU and row number (BUxxx).  Referring to the prior illustration this would be N131..BU140.  Now strike the Enter key and use the left/right arrow keys to highlight the file name containing the data to import.  Finally, Strike the Enter key again and your data will load.  Repeat these operations to import data from each section  you want to import.  Press the Alt plus M keys to return to YOUR NETWORTH.


G: REPRESENTATIVE MENUS AND MENU FORMATS


NETWORTH MASTER MENU --> ANALYSIS  CALC  EDIT  RECORD  SORT  UTIL  VIEW

- ANALYSIS -
  FINANCIAL ANALYSIS PAGES -->  1  2  3  4  5  6  CALC

    2: SELECT A DISPLAY OPTION:  DOLLARS$$  PERCENT%  CALC

    3: SELECT FORECASTING OPTIONS:  DOWN  UP  EDIT  FORECAST CONTROL  RESET

    6: SELECT A DISPLAY OPTION:  ALLOCATION + INCOME   CALC   DISTRIBUTION

- EDIT-
  ADD DATA IN SECTION:1 2 3 -OR-> DELETE..EDITOR..HELP/VERIFY..REPLICATE

    EDITOR: CHOOSE A SECTION TO EDIT: 1 2 3
    H/V: PRESS A NUMBER KEY then `ENTER': 0=NONE 1=HELP 2=VERIFY 3=BOTH

- RECORD -
  INFORMATION RECORDING CHOICES: ANALYSIS  DATA  INVOICE  NETWORTH  SAVE FILE

    ANALYSIS: ANALYSIS SECTION PRINT OPTIONS: 1 2 3 4 5 6 ALL PAGE

    DATA: FINANCIAL DATA - PRINT OPTIONS: 1  2  3  ALL SECTIONS  QUIT


- SORT -
  SORT BY: CATEGORY DESCRIPTION INTEREST  MATURITY NAME REMARKS VALUE

- VIEW -
  VIEW DATA: LEFT RIGHT  DOWN UP  NORMAL/DENSE  MIRROR  WINDOW/ON/OFF















F: SNAPSHOT INDEX.

Analysis - 1-10, 12-15, 19, 22, 24, 25
Break - 7
Calc - 5, 6, 8, 10, 13-15, 21, 25
Category - 7, 9, 12, 17-18, 27
Classification - 9, 12, 17
Distribution - 9-10, 12-16, 27
Edit - 2, 5-6, 11-12, 16-17, 21-22, 24-26
Examples - 3, 7, 15, 21, 25
Exit - 5, 9
Financial Data Information Component (FDIC) - 3-9, 11, 13-14, 16-17, 21, 25
Financial Forecasting & Analysis Component (FFAC) - 3, 5-7, 9-10, 12-13, 15
Financial Reports - 4
Forecast - 4, 11, 14, 22-25
For Example - 3, 8-9, 14-15, 17, 19, 22
Getting Started - 4, 25
Investment
   category - 7, 9, 12, 17-18, 27
   classification - 9, 12, 17
MASTER MENU - 4-6, 8-10, 12-13, 15-16, 25, 27
Page 1 - 4-5, 7-8, 13, 25
Page 2 - 4-5, 9-10
Page 3 - 4-5, 10-12, 22-25
Page 4 - 4-5, 12-13
Page 5 - 4-5, 13-14
Page 6 - 4-5, 13, 15
Reports - 4, 7
Record - 2, 5-6, 17, 21, 23, 26
Sort - 5, 7
Table - 17-18
Tax rate - 10, 12, 22-24
View - 4-5, 7-8, 10, 15, 17, 26
Yield - 4, 9, 12-14, 19, 21-22

```
{% endraw %}

## README.DOC

{% raw %}
```






  YOUR NETWORTH IS A PERSONAL FINANCIAL PLANNING & FORECASTING TOOL.

  IT HAS BOTH FINANCIAL TRACKING AND "WHAT IF" FORECASTING CAPABILITY.

  YOUR NETWORTH REQUIRES LOTUS 1-2-3 VERSION 2.01 OR THE EQUIVALENT.

  TO OBTAIN A HARD COPY OF THE USER GUIDE TYPE "PRINTDOC" THEN THE ENTER KEY.

  THE "EXAMPLE" COPY IS PROVIDED FOR USE AS YOUR TRAINING TOOL.

  GOOD LUCK AND MANY HAPPY RETURNS!






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2186

     Volume in drive A has no label
     Directory of A:\

    EXAMPLE  WK1    134694  12-30-89
    NETLETER           874  12-30-89
    NETWORTH DOC     82961  12-30-89
    NETWORTH WK1    113036  12-30-89
    PRINTALL BAT       701  12-30-89
    PRINTDOC BAT       590  12-30-89
    README   DOC       426  12-30-89
    README   NOW      1902  12-30-89
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       463   5-03-90   9:40a
    FILE2186 TXT      3405   5-03-90  10:56p
           11 file(s)     339090 bytes
                           17408 bytes free
