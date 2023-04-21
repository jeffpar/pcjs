---
layout: page
title: "PC-SIG Diskette Library (Disk #2471)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2471/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2471"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FPLAN - RETIREMENT PLANNER"

    Not sure about how much money you'll have when retirement comes?  Don't
    depend on someone to tell you -- find out yourself with FPLAN.  First,
    enter your the amount of money you would like to receive monthly when
    you retire.  Then enter when you would like to retire and then the
    savings, pensions, IRA's, social security, and other retirement
    information.  FPLAN will display or print an analysis of how your
    existing plans compare to your goals.
    
    Developed by a Certified Financial Planner, FPLAN gives you the power to
    control your retirement planning.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2471.TXT

{% raw %}
```
Disk No: 2471                                                           
Disk Title: FPLAN - Retirement Planner                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: FPlan - Retirement Planner                               
Author Version: 2.0                                                     
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## UGUIDE.TXT

{% raw %}
```
-------------------------------------------------------------------------------







                            FIRST FINANCIAL SOFTWARE


                                 * * * * * * *
                                 *   FPLAN   *
                                 * * * * * * *


                         RETIREMENT PLANNER Version 2.0

                                  USERS GUIDE









     Information presented in this guide is available throughout the regular 
     program indicated at various menu options. 




















-------------------------------------------------------------------------------
      Copyright(c) 1990 by First Financial Software. All Rights Reserved   

















-------------------------------------------------------------------------------

                                  TABLE OF CONTENTS
                                  -----------------

     SECTION       PROGRAM ITEM                                         PAGE
    --------- -------------------------------------------------------  ------

        A     Introduction:............................................   1

        B     Initial Screen:..........................................   2

          B-1 Demo & Regular Program Option:...........................   2

          B-2 Suggested Instructions to Use Program:...................   2

          B-3 Introduction Screen (Regular/Automatic Presentation):....   2

        C     Main Menu:...............................................   3

          C-1 Narrative Presentation:..................................   4

          C-2 Planning Module Menu:....................................   5

          C-3 Main Utilities Menu:.....................................   5

                        C-3-1 User Code:...............................   5
                        C-3-2 Total Analysis:..........................   6
                        C-3-3 Special Instructions to Print:...........   7
                        C-3-4 General Help Training:...................   7
                        C-3-5 License Agreement:.......................   7
 
          C-4 Customer Service Information & Ordering:.................   8

          C-5 Exiting Program:.........................................   8

        D     Retirement Planner Module:...............................   8

          D-1 Module Initial Screen:...................................   9

          D-2 Screen Options:..........................................   9

                        D-2-A Print Illustration:......................  10
                        D-2-1 Input all Information:...................  11
                        D-2-2 Module Utilities/Edit Menu:..............  12
                        D-2-3 Exit without Saving Data:................  12
                        D-2-4 Print Questionnaire:.....................  12
                        D-2-5 Exit Saving New/Changed Data:............  13
                        D-2-6 Annuity Options:.........................  13


-------------------------------------------------------------------------------












-------------------------------------------------------------------------------

                             TABLE OF CONTENTS CONTINUED
                             ---------------------------

     SECTION       PROGRAM ITEM                                         PAGE
    --------- -------------------------------------------------------  ------

        E     Module Utilities/Edit Option Menu:.......................  13

          E-1 Economic Assumptions:....................................  14

          E-2 Edit Completed:..........................................  14

          E-3 Delete Module Data:......................................  14

          E-4 Changing Modes (Current/Current vs Proposed):............  15

          E-5 Help/Training Menu:......................................  15

          E-6 Editing Specific Line Number:............................  15

        F     Help/Training Menus:.....................................  16

          F-1 General Help/Training:...................................  16

                        F-1-1 General Problem Items:...................  16
                        F-1-2 Starting Program:........................  17
                        F-1-3 Stopping & Operating Program:............  17
                        F-1-4 Printing Problems:.......................  17

          F-2 Module Help/Training:....................................  18

                        F-2-1 General Purpose:.........................  18
                        F-2-2 Module Options Menu:.....................  18
                        F-2-3 Special Features:........................  19
                        F-2-4 Utilities/Edit Menu:.....................  21
                        F-2-5 Rational of Computations:................  21
                        F-2-6 Normal Problems:.........................  22


        G     Technical Information:...................................  22

          G-1 General & System Requirements:...........................  22

          G-2 Files Listing:...........................................  23


-------------------------------------------------------------------------------















-------------------------------------------------------------------------------
SECTION A - INTRODUCTION
------------------------

     Retirement Planning is becomming more and more complex due to the 
     numerous changes in Tax Laws and the differenct types of retirement
     benefits available. Social Security, Personal Savings and Business
     Retirement Programs are usually what compromise the retirement benefits
     a person gets. Now since people are living longer, retirement benefits
     are of prime importance to most individuals. A big fear is outliving
     your income benefits. To add to the problem, most retirement programs,
     includeing IRA, 401K, and other company benefit programs do not have
     a defined retirement benefit (not even considering the impact of increases
     in the cost of living), but pay benefits depending on the results of the
     investment performance of the program. Future availablility of Social 
     Security benefits are also a question. 

     Individuals are more and more responsible to insure they have sufficient
     assets to support themselves in retirement. 

     This program is designed to help you to reach your retirement goal. You
     need to know where you are and if what your doing leads to your goal.
     By using this program all these questions can be answered. You can 
     monitor your progress as ofter as you like, because you have the tool
     to do it with this program. 

     This program is always being revised because of changes in the tax laws
     and improvement suggestions from users. 

     If retirement planning is important to you, then registration of this 
     program is a valuable asset for your retirement financial planning.

-------------------------------------------------------------------------------
SECTION B - INITIAL SCREEN
--------------------------

     When the Program is Started by Typeing RETIRE at the DOS Prompt>, the
FPLAN logo will appear with the following at the bottom of the screen:

...............................................................................
-------------------------------------------------------------------------------
This Program is provided under the Shareware Distribution System. You may feel
free to copy and pass this program to others for their evaluation. If you
make use of this program, you are expected to submit a registration fee.
(See Main Menu Option 4 (Section C-4) for details). Thank you.
-------------------------------------------------------------------------------
Type 1 & Press Return for DEMONSTRATION Program or
                                 Just Press Return for REGULAR Program:....
...............................................................................
-------------------------------------------------------------------------------




                            FPLAN USERS GUIDE Page 1











-------------------------------------------------------------------------------
SECTION B-1 - Demo & Regular Program Option
-------------------------------------------

   If you have not reviewed the program, suggest you Type 1 & Press Return for
   the Demonstration Version of the Program (See B-3). The program will not 
   accept any input of data, but will illustrate demo figures and extra 
   explanations of items.

   If you have reviewed the program or if desired, you may proceed directly to
   the Main Menu (See Section C). In this mode, the program will accept your
   own data and avoid general explanation screens.

   The top of most screens will show the mode the program is in as follows:
...............................................................................
FPLAN - RETIREMENT PLANNER - DEMONSTRATION MODE or
FPLAN - RETIREMENT PLANNER - REGULAR MODE
...............................................................................

   Changing of the program between Demo & Regular can be done at Main Utilities
   Option 1 (User Code) (See C-3-1) or by Exiting and Restarting the program.


-------------------------------------------------------------------------------
SECTION B-2 - SUGGESTED INSTRUCTIONS TO USE THIS PROGRAM
--------------------------------------------------------

 (This program has two main Modes, DEMONSTRATION and REGULAR. Suggest review
     of the DEMONSTRATION Mode before using the REGULAR Mode.)

   1. At the Introduction Screen, choose the AUTOMATIC PRESENTATION (Type 1
      and Press Return). After reviewing each screen, Press Return to Continue
      until you reach the end of the program. This is a quick general review
      of the programs features and benefits.

   2. After the end of the Automatic Presentation, the MAIN MENU will reappear
      as just the Demonstration Mode. You may choose any item desired for
      for furthur review. You should, as a minimum, review menu items not
      presented during the Automatic Presentation.

   3. Use the REGULAR MODE of the program. At MAIN MENU choose # 3 Utilities
      Option Menu. At Utilities Option Menu choose Option # 1 to INPUT USER
      CODE. Input Shareware User Code - 1234 and proceed to MAIN MENU. The
      program will then allow for your input and computation of the analysis.
      (You may also Exit and Restart the Program)
-----------------------------------------------------------------------------
SECTION B-3 - INTRODUCTION SCREEN (Regular/Automatic Presentation Option
------------------------------------------------------------------------

  FPLAN - RETIREMENT PLANNER - DEMONSTRATION MODE -        INTRODUCTION SCREEN

                            RETIREMENT PLANNER
                                Version X.0

-----------------------------------------------------------------------------



                            FPLAN USERS GUIDE Page 2








----------------------------------------------------------------------------
 For This DEMONSTRATION you have the Option for an AUTOMATIC PRESENTATION or
 you may choose to proceed at your choice. If you have not reviewed the
 program, suggest you use the AUTOMATIC PRESENTATION first. You may STOP
 the Automatic Presentation when offered that option. This will present
 the MAIN MENU OF OPTIONS and allow you to proceed by your choice.

 Type 1 and Press Return for AUTOMATIC PRESENTATION or
                             Just Press Return for MAIN MENU OF OPTIONS:..
...............................................................................
   If you have not reviewed the program, suggest you Type 1 & Press Return for
   the Automatic Demonstration Version of the Program. The program will
   continue from screen to screen by just Pressing Return. The next option
   to be presented will be noted by >>>>>. You may cancel the Automatic
   Presentation by Typeing Z and Pressing Return at each prompt>. This will
   return the Regular Demo program and the Main Menu. 

   If you have reviewed the program or if desired, you may proceed directly to
   the Main where you may proceed at your choice to review or select other
   Demo items.

   The top of most screens will show the mode the program is in as follows:
...............................................................................
  FPLAN - RETIREMENT PLANNER - DEMONSTRATION MODE or
  FPLAN - RETIREMENT PLANNER - DEMONSTRATION MODE -      AUTOMATIC PRESENTATION
...............................................................................
   At the completion of the Automatic Presentation the following appears:

   >>>>> This ENDS the AUTOMATIC PRESENTATION - When MAIN MENU reappears,
              you may proceed at your choice - Press Return for Main Menu:..  

   Changing of the program between Demo & Regular can be done at Main Utilities
   Option 1 (User Code) (See C-3-1) or by Exiting and Restarting the program.
-------------------------------------------------------------------------------
SECTION C - MAIN MENU
---------------------

The MAIN MENU OF OPTIONS allows for the selection of any of five options:

   OPTION 1 = Program Narrative Presentation: General Information relative to
              the features/benefits of the program and First Financial.

   OPTION 2 = RETIREMENT PLANNER MODULE MENU: Questionnaire, Data Input and
              Illustration for Retirement Planning Analysis.

   OPTION 3 = Utilities Options Menu: Presents program maintenance and special
              options.

   OPTION 4 = Customer Service and Order Information/Form: Shows where to call
              for help, price information and to print the Registration Form.

   OPTION 5 = Exit FPLAN Demonstration Program: Will exit the program and
              return your computer system to DOS.
-------------------------------------------------------------------------------


                            FPLAN USERS GUIDE Page 3







-------------------------------------------------------------------------------
   MAIN MENU OF OPTIONS:                            FOR DETAILS SEE SECTION
   ---------------------                            -----------------------

             1 = Program Narrative Presentation:............... C-1
             2 = RETIREMENT PLANNER MODULE MENU:............... D-2
             3 = Main Utilities Options Menu:.................. C-3
             4 = Customer Service and Order Information/Form:.. C-4
             5 = Exit FPLAN Demonstration Program:............. C-5

-------------------------------------------------------------------------------
SECTION C-1 - Program Narrative Presentation
--------------------------------------------

     First Financial Software has been providing professional financial
     planning software to professionals (Financial Planners, Stockbrokers,
     Insurance Agents, CPA's, etc.) since 1982. Our commercial program, FPLAN,
     covers all aspects of personal financial planning from investments to
     insurance. Because of the need for an organized approach to financial
     planning and to make it available to more people, we have decided to
     provide various FPLAN modules as Shareware.

     This Retirement Planner module is designed to assist individuals in the
     planning of their retirement. Retirement programs, IRA's, 401K's, etc.
     require active management by the individual to be able to achieve their
     retirement goals. This program will help you do that. You will know if
     your current programs will achieve your retirement goal or if not, what
     you need to do.

     The program was designed to be easy to use, even for those who do not
     have extensive experience with computers. The program Menus encompass
     all that you need to know to perform your own retirement analysis.

     (In the Demonstration Mode, Each Menu will be preceded by an explanation
      screen)

     If you find this program useful and would like more financial planning in
     this format, we have a few suggestions and requests.

     1. Notify your Shareware Distributor to let you know when new FPLAN
        Modules are available. If you register, we will notify you also.

     2. We can provide you a printed Total Preliminary Financial Analysis.
        You would submit a completed 8 Page Questionnaire, the Order Form,
        and a $30 fee. We will process your analysis and send you a report
        followed with a telephone discussion. (See Main Utilities Option 2).
        (Also See Section C-3-2)

     3. If your a financial planning professional or would like your advisor
        to consider using the Professional FPLAN Program, order the FPLAN DEMO
        KIT (See Main Menu Option 4) (Also See Section C-4).

     4. Since there are Financial Planning Professionals using FPLAN throughout
        the US from Hawaii to New York, we can place you in contact with the
        closest FPLAN user. They would be happy to discuss financial planning
        and give suggestions for implementation of financial programs.
-------------------------------------------------------------------------------


                            FPLAN USERS GUIDE Page 4








-------------------------------------------------------------------------------
SECTION C-2 - RETIREMENT PLANNER MODULE MENU
--------------------------------------------

     SEE SECTION D

-------------------------------------------------------------------------------
SECTION C-3 - MAIN UTILITIES MENU
---------------------------------

  The MAIN UTILITIES MENU allows for the selection of any of five options:

  OPTION 1. TO INPUT USER CODE: Allows for input of User Code to change program
            from Demonstration to Regular Program or back to Demonstration.

  OPTION 2. INSTRUCTIONS FOR TOTAL PRELIMINARY FINANCIAL ANALYSIS. Special
            offer to provide you a total professional financial analysis.

  OPTION 3. SPECIAL INSTRUCTIONS FOR PRINTING: Allows for Set-Up to accommodate
            Laser Printers and comments on printing problems.

  OPTION 4. GENERAL HELP/TRAINING MENU: Program items explained in detail.

  OPTION 5. LICENSE AGREEMENT: Our agreement which allows you use the program.

...............................................................................

   MAIN UTILITIES MENU                              FOR DETAILS SEE SECTION
   -------------------                              -----------------------

       1. TO INPUT USER CODE:................................ C-3-1
       2. ORDERING A TOTAL PRELIMINARY FINANCIAL ANALYSIS:... C-3-2
       3. SPECIAL INSTRUCTIONS FOR PRINTING:................. C-3-3
       4. GENERAL HELP/TRAINING MENU:........................ F-1
       5. LICENSE AGREEMENT:................................. C-3-5

-------------------------------------------------------------------------------
SECTION C-3-1
-------------
Utilities Option 1 - USER CODE INPUT     (User Code in Use:... XXXX  )
------------------------------------

   (Demo)    1. TO INPUT USER CODE
                (This will ask for a provided 4 digit code which will
                 activate the REGULAR MODE of the program, if desired.)

   (Regular) 1. TO INPUT USER CODE (You MUST Enter Your 4 Digit User Code
                                    or press return for DEMONSTRATION Mode.)

  The USER CODE system is used for the Commercial Version of FPLAN to validate
  and authorize use of the program during the lease period. For Shareware,
  you may enter the USER CODE 1234 to change the Program from DEMONSTRATION
  to REGULAR Mode. If you enter other than 1234, the Program Mode will change
  to or continue with the DEMONSTRATION Mode.
-------------------------------------------------------------------------------


                            FPLAN USERS GUIDE Page 5








-------------------------------------------------------------------------------
  Various Messages depending on Mode in Use:
  ------------------------------------------
  To Continue with DEMONSTRATION Mode, just Press Return or
  Enter USER CODE: 1234 to validate the program (Change to Regular Mode).

  To Input USERS CODE, you must be in REGULAR MODE or NON-AUTOMATIC
  PRESENTATION

  You must enter 4 Digit USERS CODE: 1234 or program will revert to DEMO.
  If Desired, INPUT 4 DIGIT USER CODE AND PRESS RETURN:....

  (CANNOT CHANGE WHILE IN AUTOMATIC PRESENTATION)

  INPUT 4 DIGIT USER CODE AND PRESS RETURN:....
-------------------------------------------------------------------------------
SECTION C-3-2
-------------
Utilities Option 2 - Instructions for TOTAL PRELIMINARY FINANCIAL ANALYSIS
--------------------------------------------------------------------------
     As mentioned in the Program Narrative, we can provide you with a Total
     Preliminary Financial Analysis. This analysis will be performed by a
     Certified Financial Planner. It will cover the following financial areas:

     Income & Expense, Balance Sheet (Assets & Liabilities), Economic
     Assumptions, College Education Planning, Retirement, Capital Needs
     (Life Insurance), Estate Planning and Disability Income Planning.

     If you desire to do this (or just completing the questionnaire is a good
     financial experience), print the 8 page questionnaire and submit it with
     the Order Form (Main Menu Option 4) and fee. We will process your plan and
     send you a printed report. After you review the report, we can discuss it
     by phone. Please insure you note convenient time to call on the FPLAN
     Order Form.
..............................................................................
     Type 1 and Press Return to PRINT 8 Page QUESTIONNAIRE or
                                   Just Press Return for UTILITIES MENU:.....

  WHEN THE PRINT OPTION IS CHOOSEN, THE FOLLOWING ITEMS APPEAR-

        PRINTER SET-UP FOR:  (REGULAR OR LASER PRINTER)
        (Can Change at MAIN UTILITIES MENU Option #3)

        WILL PRINT BLANK TOTAL ANALYSIS QUESTIONNAIRE

        (You may EXIT to MAIN UTILITIES MENU WITHOUT PRINTING
         by Typeing 2 and Pressing Return)

        This Questionnaire is 8 Pages
  -------------------------------------------------------------
  Type 1 and Press Return to Print Continuous (Fan-Fold Paper) or
              Just Press Return and Printer will STOP between Pages:.. 
..............................................................................
  ------ LOADING QUESTIONNAIRE PRINT MODULE, WAIT FOR NEW SCREEN ------
  (After Printing Utilities Option #2 will reappear)
-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 6









-------------------------------------------------------------------------------
SECTION C-3-3
-------------
  Utilities Option 3 - Special Instructions for Printing
  ------------------------------------------------------
     This Program is now set-up for LASER PRINTERS
         You may change the set-up to use a regular printer as instructed
     below.
                   ---- or ----
     This Program is now set-up for REGULAR PRINTERS
        Align top of sheet at paper guide bar on your printer. This will
        be the proper position on most printers. If you have a Laser Printer
        you need to change the set-up as instructed below.

        Most printing problems are due to the printer not being turned on and
     running out of paper. Before printing the program will ask you if the
     printer is ready. Please take that time to check.

  NOTE: This Option is not available in the AUTOMATIC Presentation Mode.

  Type 1 and Press Return to CHANGE PRINTER SET-UP or
                                   Just Press Return for UTILITIES MENU:.....

-------------------------------------------------------------------------------
SECTION C-3-4 - Utilities Option 4 - General Help/Training Menu
---------------------------------------------------------------

SEE SECTION F

-------------------------------------------------------------------------------
SECTION C-3-5 - Utilities Option 5 - License Agreement
------------------------------------------------------
FPLAN COMPUTER PROGRAM LICENSE AGREEMENT - LICENSOR: First Financial Software
-------------------------------------------------------------------------------
1. COPYRIGHT: THIS PROGRAM IS PROTECTED BY FEDERAL COPYRIGHT LAW. THE PROGRAM
REMAINS THE EXCLUSIVE PROPERTY OF THE LICENSOR. THE USER IS GRANTED A NON-
EXCLUSIVE LICENSE TO USE THE PROGRAM. THE USER MAY NOT SELL OR USE THIS PROGRAM
FOR COMMERCIAL PURPOSES. AFTER AN INITIAL REVIEW PERIOD, THE USER WILL PAY A
REGISTRATION FEE, AS NOTED IN THE PROGRAM, FOR CONTINUED USE OF THE PROGRAM.
2. INSTALLATION OF PROGRAM: THE USER WILL PROVIDE ANY NECESSARY OPERATION MS-
DOS OR RELATED SOFTWARE TO OPERATE THE PROGRAM.
3. EXCLUSION OF WARRANTY: THE PROGRAM IS PROVIDED 'AS IS' WITHOUT WARRANTY OF
ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR ANY PARTICULAR PURPOSE.
4  LIMITATION OF LIABILITY: FIRST FINANCIAL SOFTWARE OR ITS PRINCIPALS,
EMPLOYEES OR ANY RELATED COMPANIES SHALL NOT BE LIABLE FOR ANY DAMAGES (WHETHER
DIRECT OR INDIRECT, CONSEQUENTIAL OR INCIDENTAL, COMPENSATORY OR PUNITUVE)
ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM. THIS PROGRAM IS NOT
INTENDED TO PROVIDE INVESTMENT/LEGAL ADVICE. CONSULT YOUR PROFESSIONAL ADVISOR.
5. ENTIRE AGREEMENT, MODIFICATIONS: THE USE OF THE PROGRAM OR ANY RELATED
MATERIAL IS DEFACTO ACCEPTANCE OF THIS AGREEMENT. THIS INSTRUMENT CONSTITUTES
THE ENTIRE AGREEMENT OF THE PARTIES. NO MODIFICATION OR AMENDMENT OF THIS
AGREEMENT SHALL BE BINDING EXCEPT IF IN WRITING AND SIGNED BY THE PARTIES.

-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 7









------------------------------------------------------------------------------
SECTION C-4 - CUSTOMER SERVICE AND ORDER INFORMATION/FORM:
----------------------------------------------------------
Any questions regarding this program can be directed to Customer Service:
          First Financial Software .... Please Call:  1-800-736-4920
          P.O. Box 592967               (Messages taken 24 hours/day)
          Orlando, FL 32859-2967
------------------------------------------------------------------------------
This Program is provided under the Shareware System. If you wish to use the
program after your initial review, a Registration Fee of $ 30.00 is requested.
Payment of the Registration fee will provide telephone support, 20% discount
on other FPLAN Programs and a 50% discount on future versions. Registration
Total Financial Planning Preliminary Analysis (See Utilities Option #2). It
also provides for the continued development and distribution of these programs.
Please submit a completed FPLAN ORDER FORM to effect registration. You may
also use this form to order a Total Financial Planning Preliminary Analysis
and/or order a FPLAN Commercial Version Demonstration Kit.
(Printing of Order Form will not affect Automatic Presentation)

(You can print the FPLAN ORDER FORM from the Regular Program or from DOS>
 at ORDER.FRM (See README.1ST File)
------------------------------------------------------------------------
SECTION C-5 - EXIT OF PROGRAM
-----------------------------
    (From DEMO)    5 = Exit FPLAN Demonstration Program. (To Use the Automatic
                            Presentation, you must exit and Restart the  
                            Program)

    (From Regular) 5 = Exit FPLAN Program.

   Choosing this option will bring FPLAN Logo screen and return your system to
   DOS>
-------------------------------------------------------------------------------
SECTION D - RETIREMENT PLANNER MODULE
-------------------------------------
     We will now present the Retirement Planning Module. For the Demon-
     stration Version, the data will already be noted as an example. The
     Current Situation illustrates a monthly shortage of $ 148 at retirement
     for this person to reach their retirement goal. They would need to put
     away a lump-sum of $ 17,566 or a yearly amount of $ 3,203 for 7 years to
     attain their goal. The Proposed illustration notes that just by reducing
     their tax bracket, they can reach their goal without any other changes or
     additions. (You reduce a tax bracket by repositioning taxable assets to
     tax-free or tax-deferred items.)

     For the Automatic Presentation we will only view the module screen for
     Current and Proposed Situation. You should review all the attributes and
     print the Questionnaire and Illustration from the Regular or Non-Automatic
     Demo Mode.

     For the Demonstration version you can review all the attributes and
     print the Questionnaire and Illustration with the sample numbers noted.
     For your analysis, you need to be in the REGULAR MODE. Do this by entering
     the USER CODE 1234 at Utilities Option # 1.
-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 8








-------------------------------------------------------------------------------
SECTION D-1 - Module Initial Screen
-----------------------------------
  When Option #2 (RETIREMENT PLANNER MODULE MENU) of the MAIN MENU is Choosen
  the following appears:

     ------ LOADING RETIREMENT PLANNING MODULE, WAIT FOR NEW SCREEN -------

     GETTING DATA FROM DATA FILES - WAIT FOR NEW SCREEN (Appears in Regular
                                                         Mode Only)

  RETIREMENT PLANNING MODULE                   CURRENT (Mode Only)
  --------------------------                 ------------
  RETIREMENT PLANNING MODULE                   CURRENT     PROPOSED    CHANGE
  --------------------------                 ----------- ----------- ----------
  (If title says DEMO then figures are from Demonstration Version. If in
   Regular Mode, figures are those last saved under Option #5)
  Each line of the screen is explained: 

Input Line #   Item                               Remarks
------------ ----------------------------------   ----------------------------
  H1.  CURRENT AGE:.............................. H1
  H2.  RETIREMENT AGE:........................... (NOT LESS THAN H1)
       YEARS TO GO:.............................. H2-H1
       DESIRED INCOME:
  H3.  MONTHLY INCOME IN CURRENT DOLLARS:........ H3
       MONTHLY INCOME IN FUTURE DOLLARS:......... Adjusted for Inflation
  F2.  AMOUNTS ADJUSTED FOR INFLATION RATES OF:.. F2
  H3.  AND ADJUSTED FOR AVERAGE INCREASE TO AGE:. (See Section F-2-3)
           TOTAL FUTURE INCOME AMOUNTS:.........  Total of Income Items
                                                  (See Section D-2-A)
           FUTURE NET AMOUNT (OVER/-SHORT):.....  Future Income Amounts less
                                                  Desired Future Income
      AT RETIREMENT REQUIREMENTS TO FUND/MO.:...  Same as above
      AT RETIREMENT TOTAL (WITH ANNUITY AMT):...  (See Section D-2-6/F-2-3) 
      AT RETIREMENT TOTAL TO HAVE:..............  Required Total at Retirement
  H11.INCLUDES DEDUCTION FOR SALE OF ASSETS:....  (See Section F-2-3)
      LUMP-SUM NOW TO INVEST:...................  Total Needed Currently
      BASED ON AFTER-TAX RATE OF RETURN OF:.....  F1 adjusted for F3
      YEARLY DEPOSIT REQUIRED TO MEET GOAL:.....  Amount Each Year to Meet Goal
-------------------------------------------------------------------------------
SECTION D-2 - MODULE SCREEN OPTIONS
-----------------------------------
 (Appears at Bottom of RETIREMENT PLANNING MODULE Screen)
//CURRENT MODE//
OPTIONS: (CR) PRINT ILLUSTRATION        3. TO MAIN MENU (NOT SAVING NEW DATA)
         1. ENTER ALL INFORMATION       4. PRINT BLANK QUESTIONNAIRE
         2. UTILITIES/EDIT MENU         5. TO MAIN MENU (SAVES NEW DATA)
//CURRENT VS. PROPOSED MODE//
OPTIONS: (CR) PRINT ILLUSTRATION        3. TO MAIN MENU (NOT SAVING NEW DATA)
         1. ENTER ALL INFORMATION       4. PRINT QUESTIONNAIRE WITH SAVED DATA
         2. UTILITIES/EDIT MENU         5. TO MAIN MENU (SAVES NEW DATA)
            (Need Data in Current)      6. TO CONSIDER ANNUITY OPTION
Type Number of OPTION DESIRED and Press Return or
                         Just Press Return to Print Illustration:......
------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 9









------------------------------------------------------------------------------
   MAIN MODULE MENU                                 FOR DETAILS SEE SECTION
   ----------------                                 -----------------------

      (CR) PRINT ILLUSTRATION:............................... D-2-A
      1. ENTER ALL INFORMATION:.............................. D-2-1
      2. UTILITIES/EDIT MENU:................................ D-2-2
      3. TO MAIN MENU (NOT SAVING NEW DATA):................. D-2-3
      4. PRINT QUESTIONNAIRE:................................ D-2-4
      5. TO MAIN MENU (SAVES NEW DATA):...................... D-2-5
      6. TO CONSIDER ANNUITY OPTION:......................... D-2-6

------------------------------------------------------------------------------
SECTION D-2-A - MODULE OPTION MENU OPTION 0: PRINT ILLUSTRATION:
----------------------------------------------------------------

  WHEN THIS OPTION IS CHOOSEN, THE FOLLOWING ITEMS APPEAR-

        PRINTER SET-UP FOR:  (REGULAR OR LASER PRINTER)
        (Can Change at MAIN UTILITIES MENU Option #3)

        WILL PRINT (CURRENT or CURRENT VS PROPOSED) ILLUSTRATION
        (Can Change at UTILITIES/EDIT MENU Option #4)

        This Illustration is One Page

        (You may CANCEL this Print by Typeing 1 and Pressing Return)

-------------------------------------------------------------
   - PRINTER READY? - PRESS RETURN TO PRINT ILLUSTRATION -
-------------------------------------------------------------------------------
The Printed Illustration contains the following:

  (If Demo)          SAMPLE PERSONAL RETIREMENT ANALYSIS
                     -----------------------------------
  (Regular)              PERSONAL RETIREMENT ANALYSIS
                         ----------------------------
(Current has only one set of figures,       CURRENT     PROPOSED   CHANGE
 Proposed has three)                       ----------  ---------  ---------

  Each line of the illustration is explained: 

Input Line #   Item                               Remarks
------------ ----------------------------------   ----------------------------
  H2.  Age or Desired Retirement:................ (NOT LESS THAN H1)
       Years to Go Before Retirement:............ H2-H1
       DESIRED INCOME:
  H3.  Monthly Income in Current Dollars:........ H3
       Monthly Income in Future Dollars:......... Adjusted for Inflation
  F2.  Inflation Rate Adjustment Used:........... F2
  H3.  Adjusted for Average to Age:.............. (See Section F-2-3)

------------------------------------------------------------------------------


                            FPLAN USERS GUIDE Page 10









------------------------------------------------------------------------------
         RETIREMENT INCOME SOURCES (Amounts in Future Dollars)

       Balance of Cash & Investments:............ H5a+H6 at Retirement
       After-Tax Growth Rate Used:............... F1 adjusted for Tax F3
  H6.  Includes Yearly Additions of:............. H6
       Monthly Earnings on Cash & Investments:... at Retirement
       After-Tax Rate of Earnings Used:.......... F1 adjusted for Tax F3

       Balance of IRA/Keogh & Annuities:......... D12a+H8 at Retirement
  H8.  Growth Rate of Return Used:............... H8
  H7.  Includes Yearly Additions of:............. H7
       Earnings on IRA/Keogh & Annuities:........ at Retirement
       After-Tax Rate of Earnings Used:.......... H8 adjusted for Tax F3

       Balance of Pension Investments:........... D12b+H10 at Retirement
  H10. Growth Rate of Return Used:............... H10
  H9.  Includes Yearly Additions of:............. H9
       Earnings on Pension Accounts:............. at Retirement
       After-Tax Rate of Earnings Used:.......... H10 adjusted for Tax F3

       Estimated Social Security Benefits:....... H4 adjusted for Increase
  H4.  Yearly Increase in Benefits Rate Used:.... H4 item

       Estimated Other Retirement Benefits:...... H5 adjusted for Increase
  H5.  Yearly Increase in Benefits Rate Used:.... H5 item
           TOTAL FUTURE INCOME AMOUNTS:.......... Total of Income Items
           FUTURE NET AMOUNT (OVER/-SHORT):...... Future Income Amounts less
                                                  Desired Future Income
RETIREMENT FUNDING REQUIREMENTS
-------------------------------
      At Retirement Monthly Income to Fund:...... Amount, If Short Above
   F2. Inflation Rate Adjustment Used:........... F2
      To provide for desired income needed is:... Total at Retirement 
   (Which will not be depleted during retirement)
   (Using Annuity Option Based on Todays Rates):. (See Section D-2-6/F-2-3) 
   H11.(Includes Sale of Assets at Retirement:... (See Section F-2-3)
      Can be funded with a lump-sum now of:...... Total Needed Currently
       Investment Rate Adjustment Used:.......... F1 adjusted for Tax F3
      or by a yearly deposit of:................. Amount Each Year to Meet Goal
   (After printing, Module Screen reappears)
-------------------------------------------------------------------------------
SECTION D-2-1 - MODULE OPTION MENU OPTION #1: ENTER ALL INFORMATION:
--------------------------------------------------------------------
   THIS OPTION REQUIRES THE INPUT OF ALL INFORMATION FOR THIS MODULE.
   AT THE END OF EACH INPUT SCREEN YOU HAVE THE FOLLOWING OPTION:

        CORRECT=PRESS RETURN - REEDIT=TYPE 1 AND PRESS RETURN

   IF YOU HAVE MADE A MISTAKE IN DATA INPUT - YOU ARE ALLOWED TO (MUST)
   REENTER THE DATA FOR THE WHOLE SCREEN. IF YOU PASS THE SCREEN OR DESIRE
   YOU CAN CONTINUE TO THE MAIN SCREEN AND EDIT THE LINE(S) USING OPTION 2
   (EDIT SELECTED DATA) TO CORRECT THE ITEM.
-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 11











-------------------------------------------------------------------------------
SECTION D-2-2 - MODULE OPTION MENU OPTION #2: UTILITIES/EDIT MENU:
------------------------------------------------------------------
   YOU MAY EDIT DATA AS NOTED ON EDIT MENU. INFORMATION ASKED FOR MUST BE
   BE ENTERED IN TOTAL.

   IF YOU EXIT WITHOUT SAVING (OPTION 3) CHANGES WILL NOT BE SAVED.

   TO SAVE CHANGED DATA USE EXIT SAVING (OPTION 5) AT THE MAIN SCREEN.

   THIS IS WHERE YOU CAN CHANGE MODES (CURRENT TO PROPOSED OR PROPOSED TO
   CURRENT) WITH OPTION 4 AND DELETE ALL EXISTING DATA FOR A NEW MODULE
   WITH OPTION 3.

   AN ERROR MESSAGE WITH POSSIBLE ERROR CAUSE WILL APPEAR IF IMPROPER
   INPUT IS MADE.
          ------------------------------------------------------------
          Possible Error:       1. Questionnaire Line Number Incorrect
                                2. Not an Option (Use 1 - 5  or Valid
                                   Questionnaire Line Variable)
                                3. Use Option #2 for Main Screen
          ------------------------------------------------------------
   EACH UTILITIES/EDIT OPTION IS EXPLAINED IN DETAIL IN SECTION E.
-------------------------------------------------------------------------------
SECTION D-2-3
-------------
MODULE OPTION MENU OPTION #3: RETURN TO MAIN MENU (NOT SAVING NEW DATA):
------------------------------------------------------------------------
   IF YOU DO NOT WANT TO SAVE NEW/CHANGED DATA
     AND RETURN TO THE MAIN MENU - TYPE 3 AND PRESS RETURN

   NOTE: THIS WILL NOT SAVE ANY NEW/CHANGED DATA FOR THE MAIN PROGRAM
         BUT THE DATA SAVED WILL BE THE LAST DATA SAVED WITH OPTION 5.
         MAKE SURE YOU WANT TO DO THIS
-------------------------------------------------------------------------------
SECTION D-2-4 - MODULE OPTION MENU OPTION #4: PRINT //  // QUESTIONNAIRE:
-------------------------------------------------------------------------
  WHEN THIS OPTION IS CHOOSEN, THE QUESTIONNAIRE PRINT MODULE WILL LOAD
  AND THE FOLLOWING INFORMATION WILL APPEAR:

          PRINTER SET-UP FOR: REGULAR (or LASER) PRINTER
          (Can Change at MAIN UTILITIES MENU Option #3)

          WILL PRINT BLANK (or with Data Noted) QUESTIONNAIRE
          (Can Change at UTILITIES/EDIT MENU Option #4)

          (You may EXIT WITHOUT PRINTING by Typeing 1 and Pressing Return)

     This Questionnaire is 2 Pages and Pringer will STOP Between Pages

   - PRINTER READY? - PRESS RETURN TO PRINT FIRST PAGE -

  Make sure your printer is ON and paper is ready or Type 1 to Cancel.
  The RETIREMENT MODULE SCREEN Will Return after Printing.
-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 12









-------------------------------------------------------------------------------
SECTION D-2-5 - MODULE OPTION MENU OPTION #5: TO MAIN MENU (SAVES NEW DATA):
---------------------------------------------------------------------------
   IF YOU WANT TO ACTUALLY SAVE NEW/CHANGED DATA
     AND RETURN TO THE MAIN MENU - TYPE 5 AND PRESS RETURN

   NOTE: THIS WILL SAVE NEW/CHANGED DATA FOR THE MAIN PROGRAM NOW IN FPLAN
         MAKE SURE YOU WANT TO DO THIS - FOR MAIN HELP MENU USE OPTION 3
         TO NOT SAVE ANY NEW/CHANGED DATA.

  (The following message appears before returning to Main Menu)

   SAVING DATA TO DATA FILES - WAIT FOR NEW SCREEN
-------------------------------------------------------------------------------
SECTION D-2-6
-------------
OPTION=6. ANNUITY OPTION CONSIDERATION ANALYSIS //AVAILABLE IN PROPOSED ONLY//
-----------------------------------------------
  AT RETIREMENT REQUIREMENTS TO FUND/MO:.. $ 1,234 //FUNDING SHORTAGE//
  AT RETIREMENT TOTAL TO HAVE:............ $ 123,456 //TOTAL NEEDED//
  INCLUDES DEDUCTION FOR SALE OF ASSETS:.. $  50,000
  LUMP-SUM NOW TO INVEST:................. $  99,999 //LUMP-SUM AMOUNT//
                         (BASED ON AFTER TAX  9.00% RATE OF RETURN)
  YEARLY DEPOSIT REQUIRED TO MEET GOAL:... $  11,111
  BASED ON FUNDING NEED OF: $ 1,234 PER MONTH OR $ 14,808 PER YEAR //1234 X
  12//
  AT RETIREMENT AND A CURRENT AFTER-TAX RATE OF RETURN OF:..... 9.00%

  ENTER COST FOR PROPOSED ANNUITY TO FUND INCOME REQUIREMENTS AT
  RETIREMENT (PRESS RETURN TO CANCEL ANNUITY OPTION):.......... $

   //PRESS RETURN AND NO ANNUITY OPTION WILL ILLUSTRATE. TO DETERMINE THE
     AMOUNT FOR THE ANNUITY OPTION: FROM AN INSURANCE FIRM= AMOUNT TODAY TO
     FUND THE 1,234 PER MONTH FOR THE TYPE IMMEDIATE ANNUITY THE CLIENT WOULD
     DESIRE (JOINT/SURVIVOR, STRAIGHT LIFE, PERIOD CERTAIN, ETC.). THE PROGRAM
     WILL COMPUTE THE AMOUNT FOR A LUMP-SUM TODAY AND YEARLY AMOUNT TO HAVE 
     THE REQUIRED AMOUNT AT RETIREMENT. YOU WILL NEED TO UPDATE AS RATES ON
     ANNUITIES CHANGE. (ANOTHER GOOD REASON FOR AT LEAST YEARLY UPDATES)//
  (Also See Section F-2-3 Special Items, Annuity)
-------------------------------------------------------------------------------
SECTION E - MODULE UTILITIES/EDIT MENU:
---------------------------------------
EDITING DATA FOR //CURRENT MODE (SEE #4)// RETIREMENT ANALYSIS
--------------------------------------------------------------
       1. ECONOMIC ASSUMPTIONS(F(1) - F(3))
               (RATE OF RETURN - INFLATION RATE  - TAX BRACKET)
       2. EDIT COMPLETE - RETURN TO RETIREMENT MODULE MENU SCREEN
       3. DELETE ALL EXISTING DATA
       4. CHANGE MODE FROM //CURRENT MODE// TO //OTHER MODE// ANALYSIS
       5. HELP/TRAINING MENU
       6. NOTE: To Edit Specific Line Number - Refer to Questionnaire
             and Enter Line Number WITHOUT the () i.e. H(4) as H4
  ENTER ITEM DESIRED OR LINE NUMBER FROM QUESTIONNAIRE TO EDIT:

------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 13











------------------------------------------------------------------------------
   UTILITIES/EDIT MENU                              FOR DETAILS SEE SECTION
   -------------------                              -----------------------

       1. ECONOMIC ASSUMPTIONS:.............................. E-1
       2. EDIT COMPLETE:..................................... E-2
       3. DELETE ALL EXISTING DATA:.......................... E-3
       4. CHANGE MODE:....................................... E-4
       5. HELP/TRAINING MENU:................................ E-5
       6. NOTE: To Edit Specific Line Number:................ E-6


-------------------------------------------------------------------------------
SECTION E-1 - UTILITIES/EDIT MENU ITEM #1: ECONOMIC ASSUMPTIONS 
---------------------------------------------------------------

     This Option will require entering the three Economic Assumptions:

          F(1) BEFORE-TAX Yield Rate
          F(2) Annual Inflation Rate
          F(3) Marginal Tax Bracket

     The calculated AFTER-TAX RATE (Except for IRA/Pension/Annuity) will
     be shown.
     Guidelines for these items are found on the Questionnaire.

-------------------------------------------------------------------------------
SECTION E-2 - UTILITIES/EDIT MENU ITEM #2:
             EDIT COMPLETE - RETURN TO RETIREMENT MODULE MENU SCREEN:
---------------------------------------------------------------------

     This Option is used when the UTILITIES/EDIT items are completed to
     Return to the Retirement Planning Module Screen and Options Menu.

-------------------------------------------------------------------------------
SECTION E-3 - UTILITIES/EDIT MENU ITEM #3: DELETE ALL EXISTING DATA:
--------------------------------------------------------------------

  When this OPTION is choosen, the following question appears:

  ARE YOU SURE YOU WANT TO DELETE EXISTING DATA?

  TYPE 1 AND PRESS RETURN TO DELETE DATA or
                         Just Press Return for Utilities Menu:....
  
  If you are not sure, just press return and no data will be erased. If
     you want all data erased, Type 1 and press return. The following message
     will appear:   ******  DELETING DATA FILES - WAIT ******

  When all data has been erased, the module screen will appear. There will
     be some 1's noted which you can ignore.
------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 14











-------------------------------------------------------------------------------
SECTION E-4 - UTILITIES/EDIT MENU ITEM #4:
            CHANGE MODE FROM //CURRENT MODE// TO //OTHER MODE// ANALYSIS:
-------------------------------------------------------------------------

   You can determine which MODE the program is in two ways:

      1. The MAIN SCREEN will have ONE COLUMN OF NUMBERS for CURRENT MODE.
         It will have THREE COLUMNS (CURRENT-PROPOSED-CHANGE) for the
         CURRENT VS. PROPOSED MODE.

      2. The UTILITIES/EDIT MENU heading (OPTION 2) will state - EDITING DATA
         FOR - (Mode the program is in).

   You would ALWAYS start with the CURRENT SITUATION MODE.

   You would enter the information AS IS and NOT AS PLANNED FOR to show the
   effects after the PROPOSED has been implemented. The QUESTIONNAIRE printed
   in this MODE will be a BLANK QUESTIONNAIRE.

   PROPOSED SITUATION is used once data has been entered already for the

   CURRENT SITUATION. Proposed data will be compared with the CURRENT to
   show the effect of the change. The QUESTIONNAIRE printed in this MODE will
   print CURRENT NUMBERS on the QUESTIONNAIRE for reference.


-------------------------------------------------------------------------------
SECTION E-5 - UTILITIES/EDIT MENU ITEM #5: HELP/TRAINING MENU:
--------------------------------------------------------------

     This Option activates Help/Training for the Retirement Planning
     Module (SEE SECTION F-2). General Items Help is available at the Main
     Menu Utilities Option #4 (SEE SECTION F-1).

-------------------------------------------------------------------------------
SECTION E-6 - UTILITIES/EDIT MENU ITEM #6: To Edit Specific Line Number:
------------------------------------------------------------------------

     To Edit Specific Line Number, Refer to the Questionnaire
         and Enter Line Number WITHOUT the () i.e. H(4) as H4.
         (DO NOT ENTER - H 4 - H( 4) - H/4 - ETC.)

     With the MODE as CURRENT, you will edit CURRENT DATA ONLY.

     With the MODE as CURRENT VS. PROPOSED, you will edit PROPOSED DATA ONLY.

     You may edit as many Line Numbers as desired. When finished use OPTION
     2 (Edit Complete) to Return to the Retirement Menu.

     If you enter a Non-Valid Line Number, **** ENTRY ERROR **** will
     appear on screen with a list of possible errors. Just Press Return
     for the EDIT MENU and Input Correct Item to Continue.
-----------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 15











------------------------------------------------------------------------------
SECTION F - HELP/TRAINING MENUS
-------------------------------
SECTION F-1 - Utilities Option 4 - GENERAL HELP/TRAINING MENU
-------------------------------------------------------------
     We will not review the individual items from the AUTOMATIC Presentation,
  but you can and should review each one from the Non-Automatic Demonstration
  Mode or Regular Mode.

  MOST ALL PROBLEMS CAN BE SOLVED BY REVIEWING HELP/TRAINING RELATIVE TO THE
  ITEM IN QUESTION. IF YOU NEED OTHER HELP - CALL 1-800-736-4920 - IF NO-ONE
  IS AVAILABLE OR IF AFTER HOURS - LEAVE YOU NAME, NUMBER AND BEST TIME TO
  CALL YOU BACK.

    1. GENERAL OPERATING ITEMS (General Problems and How to Fix)
    2. STARTING & OPERATING PROGRAM
    3. STOPPING PROGRAM (Various Ways)
    4. PRINTING (Various Problems and Solutions)
   
   CHOOSE OPTION DESIRED OR PRESS RETURN FOR MAIN UTILITIES MENU:.....

   GENERAL HELP/TRAINING MENU                       FOR DETAILS SEE SECTION
   --------------------------                       -----------------------

       1. GENERAL OPERATING ITEMS:........................... F-1-1
       2. STARTING & OPERATING PROGRAM:...................... F-1-2
       3. STOPPING Program:.................................. F-1-3
       4. PRINTING:.......................................... F-1-4

-------------------------------------------------------------------------------
SECTION F-1-1 - GENERAL HELP/TRAINING MENU OPTION #1: GENERAL OPERATING ITEMS
-----------------------------------------------------------------------------
  GENERAL PROBLEMS WITH THE PROGRAM NOT OPERATING CORRECTLY AND SUGGESTED
  CORRECTIVE MEASURES=FIX

  1. (FLOPPY DISK) You Started your system, the program didn't run and
     displayed the message 'Non-System disk or disk error': Didn't Boot
     your system with your DOS Disk first. FIX=Re-Boot your system with
     DOS Disk first.

  2. (HARD-DISK) You Typed - FPLAN and the program didn't run and displayed
       the MESSAGE 'Bad command of file name': You are not in the Proper Sub-
       Directory and/or correct Drive. FIX=If installed on Drive X -
       on X> type CD\Proper Directory, Press Return, Then Type RETIRE and Press
       Return.

  3. Report/Questionnaire will not print: Some kind of Printer Problem.
       FIX=Insure your printer is on and connected correctly.

  4. The program will only display DEMONSTRATION Information: Incorrect USERS
       CODE or Started wrong Module. FIX=INPUT CORRECT USERS CODE (1234) in
       Utilities Option 1 and DO NOT start any program other than RETIRE.
-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 16










-------------------------------------------------------------------------------
SECTION F-1-2 - GENERAL HELP/TRAINING MENU OPTION #2:
                                      STARTING & OPERATING PROGRAM
------------------------------------------------------------------
    To Start the Program: At the DOS prompt > for the Drive where the program
     is located, type RETIRE and Press Return.

    If while operating the program you incurr the following messages:

     Type mismatch in module XXXXX at address XXX:XXX - Hit any key to
     return to system - means there is a problem with the program.
     Reinstall program if on a hard-disk and/or try again. If the
     Problem is still present, contact your distributor or us for a
     replacement program disk.

     File not found in module XXXXX at address XXX:XXX - Hit any key to
     return to system - means there is a file missing from yout disk
     or sub-directory. The following programs need to be present for the
     program to work:      RETIRE.EXE  and  RETIRM.EXE
     If you do not have files, contact your distributor or us for a
-------------------------------------------------------------------------------
SECTION F-1-3 - GENERAL HELP/TRAINING MENU OPTION #3: STOPPING PROGRAM
----------------------------------------------------------------------
THREE WAYS CAN BE USED TO EXIT THE PROGRAM:

    1. Normally use Option #5 of the Main Menu of Options. In the planning
       Module use Option #3 (Not Saving New/Changed Data) or Option #5
       (Saving New/Changed Data) to Return to Main Menu of Options.

    2. While any place in the Program, Hold CTRL and Press the Break Key.
       *Break* Hit any key to return to system - will appear. No New or
        Changed Data will be saved and when the program is restarted, it
        will start at the last main menu used.

    3. While any place in the Program, Turn OFF your Computer Systems.
        No New or Changed Data will be saved and when the program is
        restarted, it will start at the last main menu used.
    (Suggest ONLY using Item One for EXIT of the Program)
-------------------------------------------------------------------------------
SECTION F-1-4 - GENERAL HELP/TRAINING MENU OPTION #4: PRINTING
--------------------------------------------------------------

    PRINT THE SCREEN:  ON MOST SYSTEMS=Hold Shift Key and Press PrtSc

    KEEPS PRINTING SAME ILLUSTRATION OVER & OVER: Usually Problem with
         a Damaged Disk or Program.

    TRIED TO PRINT BUT DISPLAYED MESSAGE: Device fault/timeout in module
    XXXXX at address XXX:XXX - Hit any key to return to system - means:
    Printer was NOT ON, NO PAPER or PAPER JAM. You need to fix the problem
    and start over. Any changed or new data will not be saved.

------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 17












-----------------------------------------------------------------------------
    DOES NOT PRINT AND HAS STRANGE SCREEN MESSAGES: Problem with Computer
         or Printer. Try Turning OFF then Turning ON Printer. NOTE: THIS
         WILL ALSO CLEAR PRINT BUFFER OF TEXT.

    SPACING OF TEXT IS NOT CORRECT: Problem with Printer Dip Switches. Need
         to Refer to Your Printer Manual.

    SPACING OF PAGES IS NOT CORRECT: See Spacing of Text Above or If You
         Have a LAZER PRINTER it needs to be setup in MAIN UTILITIES MENU #3.
-------------------------------------------------------------------------------
SECTION F-2 - RETIREMENT PLANNING MODULE HELP/TRAINING MENU
-----------------------------------------------------------
This Menu can be reached from the RETIREMENT PLANNING MODULE using Option #2
(Module Utilities/Edit Menu) - and choosing Option #5 (Module Help/Training).

       1. GENERAL:  EXPLAIN PURPOSE OF MODULE (Benefits to You)
       2. OPTIONS MENU: EXPLAIN SELECTED OPTION (Printing of Illustrations,
             Questionnaires, Input of Data, Saving and Exiting Program)
       3. SPECIAL FEATURES: SPECIAL OPTION AND INPUT FEATURES
       4. UTILITIES/EDIT MENU: EXPLAIN SELECTED OPTION (Editing, Deleting Data,
             Changing Modes from/to Current & Current vs. Proposed and the
             Module Help/Training Module)
       5. EXPLANATIONS: RATIONAL FOR COMPUTATIONS IN MODULE
       6. NORMAL PROBLEMS: WHAT USUALLY CAUSES INACCURATE RESULTS
...............................................................................
  MODULE HELP/TRAINING MENU                            SEE DETAILS IN SECTION
  -------------------------                            ----------------------

       1. GENERAL:...........................................  F-2-1
       2. OPTIONS MENU:......................................  F-2-2
       3. SPECIAL FEATURES:..................................  F-2-3
       4. UTILITIES/EDIT MENU:...............................  F-2-4
       5. EXPLANATIONS:......................................  F-2-5
       6. NORMAL PROBLEMS:...................................  F-2-6

-------------------------------------------------------------------------------
SECTION F-2-1 - MODULE HELP/TRAINING MENU OPTION #1: GENERAL
------------------------------------------------------------
           THIS MODULE WILL SHOW RETIREMENT INCOME REQUIRED ADJUSTED FOR
           INFLATION. GROWTH OF RETIREMENT ITEMS AND FUTURE INCOME. NET
           AMOUNT BASED ON RATE OF RETURN ASSUMTIONS AND IF SHORT, THE
           THE AMOUNT OF FUNDING REQUIRED BOTH AS A LUMP SUM AND YEARLY
           DEPOSIT AMOUNT. AN ANNUITY OPTION IS OFFERED IN THE PROPOSED
           MODE.
-------------------------------------------------------------------------------
SECTION F-2-2 - MODULE HELP/TRAINING MENU OPTION #2 MODULE OPTIONS MENU
-----------------------------------------------------------------------

  SEE SECTION D-2

-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 18











-------------------------------------------------------------------------------
SECTION F-2-3 - MODULE HELP/TRAINING MENU OPTION #3: SPECIAL FEATURES
---------------------------------------------------------------------
  AFTER INPUT OF ECONOMIC ASSUMPTIONS (F1-F3), THE AFTER-TAX RATE USED
        IN COMPUTATIONS WILL BE DISPLAYED. THIS RATE IS APPLIED TO THE
        EARNINGS ON ANY NON-QUALIFIED (OTHER THAN PENSIONS, IRAS, ANNUITIES,
        ETC.) AMOUNTS AND AFTER RETIREMENT DISTRIBUTIONS.

   Current Situation:

   F(1)  CURRENT BEFORE-TAX  Yield Rate:............. %
         NEW RATE  (PRESS RETURN FOR SAME):.......... %

   F(2)  CURRENT Annual Inflation Rate:.............. %
         NEW RATE  (PRESS RETURN FOR SAME):.......... %

   F(3)  CURRENT Marginal Tax Bracket:............... %
         NEW RATE  (PRESS RETURN FOR SAME):.......... %

   (HINT) If you desire to change a number to 0, Just Input .000001)

   Proposed Situation:

   F(1)  CURRENT BEFORE-TAX  Yield Rate:............. %
       * PROPOSED RATE (AS INDICATED):............... %
         NEW PROPOSED RATE (RETURN FOR SAME *):...... %

   F(2)  CURRENT Annual Inflation Rate:.............. %
       * PROPOSED RATE (AS INDICATED):............... %
         NEW PROPOSED RATE (RETURN FOR SAME *):...... %

   F(3)  CURRENT Marginal Tax Bracket:............... %
       * PROPOSED RATE (AS INDICATED):............... %
         NEW PROPOSED RATE (RETURN FOR SAME * ):..... %
...............................................................................
  AT INPUT H(3) INCOME DESIRED CAN BE ADJUSTED FOR FUTURE INFLATION AFTER
        RETIREMENT USING AVERAGE OF AGE AT RETIREMENT AND A FUTURE AGE.

  Current Situation:

   H(3) Desired RETIREMENT INCOME Per Month:
        ENTER AMOUNT DESIRED IN CURRENT DOLLARS:......... $
   NOTE: Based on Retirement age (XX) and Inflation Rate of XX%, the Projected
         Required Income at Retirement in XX years will be $ XXXXX per month.

        This figure does not account for any inflation during retirement. As
        a suggestion, you have the option to use an average figure for the
        amount and a future amount say at age 85. To do this input the age
        at which you want the average based or just press return to not use.

   FUTURE AGE TO USE WITH RETIREMENT AGE FOR AVERAGE:....

        New Adjusted Monthly Required Income at Retirement will be $ XXXXX
------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 19









------------------------------------------------------------------------------
  Proposed Situation:

   H(3) Desired RETIREMENT INCOME Per Month:
        CURRENT DESIRED MONTHLY INCOME:.................. $
        PROPOSED INCOME (TYPE 1 IF SAME AS CURRENT):..... $

   NOTE: The Current Situation is NOT using an Average between Retirement Age
         XX and ANY Age
                          ---- OR ----
   NOTE: The Current Situation is using the Average between Retirement Age
         XX and Age XX to Allow for future inflation in Retirement Income
         Required.

      To Apply the Strategy to the Proposed Requirement, Input Age for the
      application of the average or Just Press Return to Not Use.

   FUTURE AGE TO USE WITH PROPOSED RETIREMENT AGE FOR AVERAGE:....
..............................................................................
  AT INPUT H(4) SOCIAL SECURITY AND H(5) RETIRE INCOME, CAN ADJUST FOR ANY
        INFLATION RATE FOR INCREASE IN BENEFITS AMOUNTS.

  Current Situation:

   H(4)  CURRENT Est Monthly Social Security Benefits:... $

      NOTE: Table Amounts of Monthly Benefits are Approximate Amounts in
            TODAYS Dollars. If you want to show an amount increased by a
            percentage per year until retirement, enter that percentage.
            If no increase is desired, just Press Return.
      CURRENT Yearly Rate of Increase for Benefits:... %

  Proposed Situation:

   H(4)  CURRENT Est Monthly Social Security Benefits:... $
         Adjusted for Yearly Increase in Benefits of:....   XX%
         PROPOSED Benefits (TYPE 1 IF SAME AS BASE RATE). $
         PROPOSED Yearly Rate of Increase ( 1 IF SAME):.. %

  Current Situation:

   H(5)  CURRENT Monthly Other Retirement Benefits:...... $

      NOTE: If Benefit Amount is Amount at Retirement, just Press Return.
            If Benefit Amount needs to be adjusted, input percentage amount
            of yearly increase until retirement.

         CURRENT Yearly Rate of Increase for Benefits:... %

  Proposed Situation:

   H(5)  CURRENT Monthly Other Retirement Benefits:...... $
         Adjusted for Yearly Increase in Benefits of:....   XX%
         Adjusted for Yearly Increase in Benefits of:....   XX%
         PROPOSED Benefits (TYPE 1 IF SAME AS BASE RATE). $
         PROPOSED Yearly Rate of Increase ( 1 IF SAME):.. %
-------------------------------------------------------------------------------
                            FPLAN USERS GUIDE Page 20








------------------------------------------------------------------------------
  AT INPUT H(11) SALE OF ASSETS AT RETIREMENT (HOME, BUSINESS, ETC.):.. $
        INPUT NET PROCEEDS OF SALE AMOUNT AT TIME OF RETIREMENT.

   Current:

     H(11) Sale of Assets at Retirement (Home,Business, etc)$ Need Input or 0

   Proposed:

     H(11) Sale of Assets at Retirement (Home,Business, etc)$ Shows Current
           PROPOSED Sale of Assets (TYPE 1 IF SAME):....... $ Need Input or 0
..............................................................................
  IN THE PROPOSED MODE, IF THERE IS A SHORTAGE, OPTION 6 ALLOWS TO CHOOSE
        AN ANNUITY TO FUND THE RETIREMENT SHORTAGE AMOUNT. WILL RECOMPUTE
        LUMP-SUM AND YEARLY DEPOSIT AMOUNTS BASED ON THIS COST.

  ANNUITY OPTION CONSIDERATION ANALYSIS
  -------------------------------------

  PROPOSED SITUATION (Only Available in Proposed Mode)
  ------------------

     BASED ON FUNDING NEED OF: $ xxxxx  PER MONTH OR $ xxxxxx PER YEAR -
     AT RETIREMENT AND A CURRENT AFTER-TAX RATE OF RETURN OF:...... xx.xx$

     ENTER COST FOR PROPOSED ANNUITY TO FUND INCOME REQUIREMENTS AT
     RETIREMENT. (PRESS RETURN TO CANCEL ANNUITY OPTION):.. $ Input Amount or 0

     LUMP-SUM NOW TO INVEST:................... $ Will Compute
     YEARLY DEPOSIT REQUIRED TO MEET GOAL:..... $ Will Compute
     
     CURRENT AFTER-TAX RATE (EXCEPT FOR IRA/PENSION/ANNUITY):.... xx.xx%
     PROPOSED AFTER-TAX RATE (EXCEPT FOR IRA/PENSION/ANNUITY):... xx.xx%
     (NOTE: This Can Be Changed in EDIT DATA # 1)

   (Also See Section D-2-6)
-------------------------------------------------------------------------------
SECTION F-2-4 - MODULE HELP/TRAINING MENU OPTION #4 UTILITIES/EDIT MENU
-----------------------------------------------------------------------

  SEE SECTION E

-------------------------------------------------------------------------------
SECTION F-2-5 - MODULE HELP/TRAINING MENU OPTION #5: EXPLANATIONS
-----------------------------------------------------------------

   AFTER TAX RATE FOR CALCULATIONS: THE ASSUMED BEFORE TAX RATE OF RETURN
              TIMES 1-THE ASSUMED MARGINAL TAX BRACKET.

   MARGINAL TAX BRACKET: THE RATE THE NEXT DOLLAR OF INCOME IS TAXED AT.

-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 21











-------------------------------------------------------------------------------

   BALANCE OF CASH.../IRA.../PENSION.... : IS CURRENT AMOUNTS ADJUSTED FOR
               GROWTH RATES AS INDICATED WITH BALANCE AT RETIREMENT. INCLUDES
               ANY YEARLY ADDITIONS INDICATED.

   MONTHLY EARNINGS ON CASH.../IRA.../PENSION... : IS FUTURE AMOUNT AT THE
               COMPUTED AFTER TAX RATE OF RETURN.

   NET AMOUNT: AMOUNT IN FUTURE DOLLARS THAT SOURCES ARE -SHORT OR OVER
               INCOME DESIRED IN FUTURE INFLATION ADJUSTED DOLLARS.

   AT RETIREMENT MONTHLY INCOME TO FUND: INFLATION ADJUSTED SHORTAGE AMOUNT

   TO PROVIDE FOR DESIRED INCOME NEEDED IS: TOTAL AMOUNT AT RETIREMENT THAT
         IS NEEDED TO FUND MONTHLY AMOUNT WITHOUT DEPLETEING ASSETS. (TO
         SHOW DEPLETION, USE THE ANNUITY OPTION)


-------------------------------------------------------------------------------
SECTION F-2-6 - MODULE HELP/TRAINING MENU OPTION #6: NORMAL PROBLEMS
--------------------------------------------------------------------

     INPUT OF DECIMALS i.e. .28 INSTEAD OF WHOLE NUMBERS i.e. 28

     INPUT OF CURRENT AGE EQUAL TO OR OLDER THAN AGE TO RETIRE.

     USING YEARLY FIGURES INSTEAD OF MONTHLY FIGURES.

     INPUT OF H(11) SALE OF ASSETS USING NET PROCEEDS AS OF TODAY INSTEAD

-------------------------------------------------------------------------------
SECTION G - TECHNICAL INFORMATION
---------------------------------
-------------------------------------------------------------------------------
SECTION G-1 - GENERAL & SYSTEM REQUIREMENTS
-------------------------------------------

  To operate this program you need:

        1. An IBM or Compatable PC computer with at least 256K RAM. 

        2. DOS Operating System Version 2.0 or higher.

        3. If you desire to print you may use a regular or laser printer.

  The program may be installed on a hard-disk, if desired. You would need
  to set up a sub-directory and copy the files to it. See your Operating
  Manual.

-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 22

















-------------------------------------------------------------------------------
SECTION G-2 - FILES LISTING
---------------------------

  The following files MUST be present on your disk/sub-directory for the
  program to function correctly:

           RETIRE.EXE
           RETIRM.EXE

  The following files MAY be present on your disk/sub-directory for the
  special functions as outlined below: You may delete them to save space,
  if desired.

           README.1ST    Initial operating instructions.

           ORDER.BAT
           ORDER.FRM     Files to print registration/order form.

           UGUIDE.BAT
           UGUIDE.TXT    Files to Print this Users Guide.

           PAGE.COM      File that controls screen scrolling.

           (There may be a VENDOR.BAT and VENDOR.TXT file which pertains
            only to Shareware Vendors for marketing and should have been
            deleted from your distribution Disk)

  The following files MAY be present on your disk/sub-directory after you 
  have used the program and should not be deleted.

           OPNS.CTR      Control file for program functions.

           RET(1-10).DAT Data files of your Saved Data.



-------------------------------------------------------------------------------

                            FPLAN USERS GUIDE Page 23






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2471

     Volume in drive A has no label
     Directory of A:\

    UGUIDE   TXT     71152   8-09-90   7:53p
    RETIRM   EXE    140359   1-01-80  12:12a
    RETIRE   EXE    114117   8-07-90  10:14p
    PAGE     COM       350   7-26-89   8:20a
    OPNS     CTR        27   8-10-90   7:59a
    GO       BAT        40   1-01-80   6:00a
    ORDER    BAT       646   8-12-90  12:00a
    UGUIDE   BAT       749   8-11-90  11:50p
    README   1ST      1590   8-09-90   6:53p
    ORDER    FRM      4285   8-09-90   6:12p
    FILE2471 TXT      1111  10-30-90  11:33a
    GO       TXT      1079  11-21-90  12:40a
           12 file(s)     335505 bytes
                           18432 bytes free
