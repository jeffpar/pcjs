---
layout: page
title: "PC-SIG Diskette Library (Disk #2183)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2183/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2183"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME TAX OFFICE 1989"

    LONG DESCRIPTION
    If you have a home office, you'll find HOME OFFICE TAX 1989 especially
    useful.  Using simple data entry sheets, you can determine amount of
    your Home Office tax deduction.  Once computed, it can be attached to
    your SCHEDULE 2106 [EMPLOYEE EXPENSE SHEET], or the amount can be
    entered on your SCHEDULE C [SELF-EMPLOYED PERSON] tax form.
    
    The data forms ask for such information as:  Do you own your home or
    rent?  If owned, you'll enter mortgage information, interest, property
    taxes paid, and other information.  If rented, you'll enter the
    monthly payments.  In addition, you'll enter the utilities and other
    maintenance costs.  You'll also enter the total square footage of the
    home and the amount of office square footage being used.
    
    The beauty of the program is it will generate reports in far less time
    than it takes you to gather the data for it.
    
    HOME OFFICE TAX 1989 is simple, functional, and beneficial to those
    looking for a program that determines the tax benefit of having and
    maintaining an office in the home.
    
    This is not a tax preparation program.  It produces only this one set
    of reports.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2183.TXT

{% raw %}
```
Disk No: 2183                                                           
Disk Title: Home Tax Office 1989                                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: Home Office Tax 1989                                     
Author Version: 1989                                                    
Author Registration: $18.00                                             
Special Requirements: None.                                             
                                                                        
Those with an office in their home will find HOME OFFICE TAX 1989       
useful.  Through the use of simple data entry sheets, you can determine 
amount of your Home Office tax deduction.  Once computed, it can be     
attached to your SCHEDULE 2106 [EMPLOYEE EXPENSE SHEET], or the amount  
can be entered on your SCHEDULE C [SELF-EMPLOYED PERSON] tax form.      
                                                                        
The data forms ask for such information as:  Do you own your home or    
rent?  If owned, you will enter mortgage information, interest, property
taxes paid, and other information.  If rented, you will enter the       
monthly payments.  In addition, you will enter the utilities and other  
maintenance costs.  You will also enter the total square footage of the 
home and the amount of office square footage being used.                
                                                                        
This information should be obtainable in a brief period of time.  The   
beauty of it is that the program will generate the reports in far less  
time than it will take you to gather the data for it.  It should be     
mentioned that this is not a Tax Preparation Program.  It produces only 
this one set of reports.                                                
                                                                        
Overall, the program is simple, functional, and will be beneficial to   
those looking for a computer program to determine the tax benefit of    
having and maintaining an office in the home.                           
                                                                        
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



























                           HOME OFFICE TAX (tm) 1989

                                Version 1989.0A

                               Shareware Version

                            Copyright (c) 1988, 1989
                             by ParyTech Associates





         NOTE:  This version is up to date on tax law changes through
                Dec 1, 1989.  If the IRS makes any changes, revised
                versions of this program will be available on the
                CompuServe forums and BBS's listed below, or an
                updated shareware version may be obtained directly
                from us for $8.00.

                CompuServe forums:

                    WORK and IBMAPP

                BBS's:

                    Data Exchange   612/441-7073
                    Twin Cities PC User Group  612/888-7570
                    Plymouth BBS  612/553-0150




                              ParyTech Associates
                              16559 Quincy St. NE
                              Ham Lake, MN  55304







                                 (612) 434-4330
                               TABLE OF CONTENTS


                        SUBJECT                               PAGE


         Copyright Notice ....................................  1

         Trademarks ..........................................  1

         Disclaimer of Warranty ..............................  1

         License .............................................  2

         Registration and Ordering ...........................  3

         Quantity and Corporate Purchases ....................  4

         Shareware ...........................................  5

         Introduction ........................................  6

         System Requirements .................................  7

         Installation ........................................  8

         Information Needed for Data Entry ...................  9
              Your Name ......................................  9
              Social Security Number .........................  9
              Total Square Footage of Home ...................  9
              Square Footage of Office Space .................  9
              Average Hours per Week You Provided Day Care ...  9
              Number of Weeks You Provided Day Care ..........  9
              Date Home Purchased ............................ 10
              Straightline Depreciation ...................... 10
              Straightline Years (if ACRS property) .......... 10
              Cost/Basis of Home ............................. 10
              Mortgage Interest Paid ......................... 10
              Property Tax Paid .............................. 10
              Rent ........................................... 10
              House Insurance Paid ........................... 11
              Gas Utilities Paid ............................. 11
              Electric Utilities Paid ........................ 11
              Other Utilities ................................ 11
              Indirect Maintenance Costs ..................... 11
              Business Expenses .............................. 11
              Business Gross Profit .......................... 11
              Casualty Losses ................................ 12
              Indirect Expense Carry Forward from 1988 ....... 12
              Depreciation Carry Forward from 1988 ........... 12
              Schedule C or Form 2106 Filer .................. 12


         In General .......................................... 13











         (Table of Contents continued on next page)
         Table of Contents (cont'd)


                        SUBJECT                               PAGE


         Main Menu ........................................... 13
              Print Reports .................................. 13
              Data Entry ..................................... 13
              Print Input Form ............................... 13
              View Shareware Notice .......................... 13
              Configure System ............................... 14
              OS Shell ....................................... 14
              Exit to DOS .................................... 14
              Getting Out of a Work Area ..................... 14
              Getting Help ................................... 14
              File Names ..................................... 14

         Depreciation Conventions Used ....................... 15
              Calculation Methods ............................ 15
              Periods Used ................................... 15
              Conventions Used ............................... 15

         Explanation of Worksheet ............................ 16

         Registration Form ................................... 21




































                                                  Home Office Tax 1989




                                COPYRIGHT NOTICE

              HOME OFFICE TAX is copyrighted by Gary W. Lundgren DBA
         ParyTech Associates.

              No parts of HOME OFFICE TAX or the manual may be copied
         in whole or in part except as provided in the License in the
         following pages.








                                   TRADEMARKS

              HOME OFFICE TAX is Trademarked by Gary W. Lundgren DBA
         ParyTech Associates.

              Many product names found throughout this manual are
         trademarks of various companies.







                             DISCLAIMER OF WARRANTY


              THIS SOFTWARE AND MANUAL ARE SOLD "AS IS" AND WITHOUT
         WARRANTIES AS TO PERFORMANCE OF MERCHANTABILITY OR ANY OTHER
         WARRANTIES WHETHER EXPRESSED OR IMPLIED.  BECAUSE OF THE
         VARIOUS HARDWARE AND SOFTWARE ENVIRONMENTS INTO WHICH THIS
         PROGRAM MAY BE PUT, NO WARRANTY OF FITNESS FOR A PARTICULAR
         PURPOSE IS OFFERED.

              GOOD DATA PROCESSING PROCEDURE DICTATES THAT ANY PROGRAM
         BE THOROUGHLY TESTED WITH NON-CRITICAL DATA BEFORE RELYING ON
         IT.  THE USER MUST ASSUME THE ENTIRE RISK OF USING THE
         PROGRAM.  ANY LIABILITY OF THE SELLER WILL BE LIMITED
         EXCLUSIVELY TO PRODUCT REPLACEMENT OR REFUND OF PURCHASE
         PRICE.












                                                                Page 1


                                                  Home Office Tax 1989



                                    LICENSE

              HOME OFFICE TAX (tm) is copyright (c) 1988, 1989 by
         Gary W. Lundgren DBA ParyTech Associates.

              HOME OFFICE TAX is not, nor has ever been, public domain
         or free software.

              The commercial, registered version of HOME OFFICE TAX
         may not be duplicated other than for backup purposes.  A
         registered copy of HOME OFFICE TAX must be treated like a
         book, in that the same registered copy of HOME OFFICE TAX may
         not be used in more than one computer at the same time, just
         as a book may not be read by more than one person at the same
         time.

              Users are granted a limited license to use the User
         Supported, trial version of HOME OFFICE TAX for a limited
         evaluation period of up to 45 days, in order to determine if
         it suits their needs.  Any other use of HOME OFFICE TAX or
         use past this period requires registration.

              All users are granted a limited license to copy the User
         Supported version of HOME OFFICE TAX only for the purpose of
         allowing others to try it, subject to the above restrictions
         as well as the following:

              HOME OFFICE TAX must be distributed in absolutely
              unmodified form, including ALL program, documentation,
              and other files.

              HOME OFFICE TAX may not be included with any other
              product for any reason whatsoever without a license from
              ParyTech Associates.

              No charge or payment may be levied or accepted for HOME
              OFFICE TAX.


              Bulletin Board system operators may post the User
         Supported version of HOME OFFICE TAX on their BBS for
         downloading by their users, without written permission only
         if the above conditions are met, and only if no special fee
         is necessary to access the HOME OFFICE TAX files (a general
         fee to access the BBS is OK).

              Distributors of User Supported and Public Domain
         software MUST obtain written permission from ParyTech
         Associates before distributing HOME OFFICE TAX and must
         follow the above conditions.  Permission is almost always
         granted.  This requirement is necessary to ensure protection
         for ourselves and HOME OFFICE TAX users from unscrupulous
         individuals.

              The following section contains information on
         registration and licensing.



                                                                Page 2


                                                  Home Office Tax 1989



                           REGISTRATION AND ORDERING


              Registering HOME OFFICE TAX allows you to use the
         product after the trial period.  Registered HOME OFFICE TAX
         users get the current copy of HOME OFFICE TAX on disk along
         with their own serial number, mailed notification of HOME
         OFFICE TAX updates, and priority when calling for support.
         Most importantly, registered users know they are helping to
         make sure that high quality software like HOME OFFICE TAX
         continues to be sold in this low cost manner.

              HOME OFFICE TAX registration costs $18 in U.S. funds,
         and includes a copy of HOME OFFICE TAX on disk.  Check and
         money orders are accepted but must be in U.S. funds drawn on
         a U.S. bank.  Corporate purchase orders are accepted also for
         amounts in excess of $180 only.

              An evaluation disk with the current copy of HOME OFFICE
         TAX is available for $10 U.S.  This is to be used to try out
         HOME OFFICE TAX, and does not include registration.  The fee
         covers the cost of postage, diskettes, and handling.

              To place an order, please use the order form at the end
         of this documentation.

         CORPORATIONS and INSTITUTIONS:  please see the section titled
         'Quantity and Corporate Purchases' for information on
         licensing multiple copies of HOME OFFICE TAX.  Under no
         circumstances may an unregistered copy of HOME OFFICE TAX be
         used in a corporate or institutional environment after the
         trial period is over.



























                                                                Page 3


                                                  Home Office Tax 1989



                        QUANTITY AND CORPORATE PURCHASES


              Any commercial (business, corporate, government, or
         other institutional) use of HOME OFFICE TAX must be
         registered.  Volume discounts and site licenses are
         available.

              The order form at the end of this documentation may be
         used to purchase multiple copies of HOME OFFICE TAX with
         discounts as follows:

               1  to  10 copies     no discount
              11  to  20 copies    10% discount
              21  to  50 copies    15% discount
              51  to 100 copies    25% discount
              101 +     copies     40% discount


              Purchases of up to 50 copies are bulk purchases and
         include that many copies of HOME OFFICE TAX on disk as with
         single registrations.  Purchases of 51 or more copies are
         site licenses.  ParyTech Associates provides a master copy of
         HOME OFFICE TAX and the appropriate number of diskette
         labels.  The licensee is responsible for copying the disks
         (backups of the MASTER do not count towards the total copies
         in the license).

              The name on the order form is considered the contact and
         is the person with whom all correspondence will take place.

         NOTE:  All prices and discounts are subject to change without
         notice.  Discounts only apply to separate orders and are not
         cumulative.

























                                                                Page 4


                                                  Home Office Tax 1989



                                   SHAREWARE


              Shareware is user supported software available to you on
         a no risk trial basis.  If the software meets your needs, you
         are encouraged to contribute to the author to encourage that
         author to continue to develop useful and needed software.  By
         contributing you become a registered user entitled to free
         support (the call is on you, however), and future updates at
         minimal cost.  As a registered user you will receive a copy
         of the program without the start up screen and you will
         receive a registration number.


              Home Office Tax was created and is supported by the
         organization listed below.  Users are encouraged to report
         any problems and/or bugs by mail, phone, or thru CompuServe
         (ID# 76407,607).  Our address and phone number is listed
         below.  We will do our best to respond to your questions and
         problems within 48 hours of receipt.


             User supported software (shareware) means that users are
         expected (encouraged) to contribute their opinions,
         suggestions, and criticisms so that the software can evolve
         into a truly useful utility.  We absolutely believe in this.
         Conceptions are fine, but the true product evolves from the
         user's perceptions and needs.










               Suggested Contribution for Home Office Tax is  $18.00







              Please use the registration form at the end of this
         documentation and send your contributions to:

                              ParyTech Associates
                              16559 Quincy St. NE
                              Ham Lake, MN  55304

                             Phone: (612) 434-4330





                                                                Page 5


                                                  Home Office Tax 1989



                                  INTRODUCTION

              Home Office Tax is designed to take the drudgery and
         headaches out of figuring home office expenses for tax
         deductions by letting your computer do the hard work of
         figuring the percentages and allowances.
              In the past, the IRS has printed Publication 587
         "Business Use of Your Home".  While this publication is a
         good effort on the part of the IRS, some people still have a
         difficult time trying to decipher the instructions.  In the
         1987 publication there was an error in reference to the
         amount of gross business income, and a non-existent line
         number was referenced.  This caused some errors on some tax
         returns of the taxpayers who did not happen to catch these
         instruction errors, which required amended returns to be
         filed.  Actually, it caused people to pay more tax than was
         necessary.  The IRS did correct this problem, altho a little
         late for some people.
              Home Office Tax uses a modified approach to the IRS
         worksheet to present information more logically.  You are
         asked to enter information on your home office space and
         expenses.  Home Office Tax asks you for the basic raw data,
         total amounts spent on various items, then computes your
         business percentages and depreciation based on your home
         office space footage.  Home Office Tax then prints a report
         detailing your deduction and limitations (if any), and carry
         forward's of expenses (if any).
              Hopefully this program will appear very simple in
         nature.  That was our purpose.  Approximately 75% of the
         program code involves depreciation calculations by the
         computer that the user doesn't see going on.  This program
         will calculate all depreciation methods for real estate going
         back to the 1940's.
              This manual is brief.  Hopefully we designed the program
         for maximum ease of use so that detailed instructions will
         not be required.



         CHANGES SINCE THE 1988 VERSION:

              *  Use of pop up windows.

              *  Use of standard keys for exiting functions and
                 getting help.  (ESC and F1)

              *  Context sensitive help.

              *  All data entry done in one screen that uses full
                 screen editing.









                                                                Page 6


                                                  Home Office Tax 1989



                              SYSTEM REQUIREMENTS

         IBM PC, XT, AT, PS/2, or compatible with DOS 2.11 or higher.


         256K memory


         1 floppy drive or more, or a hard drive


         Color Graphics Adaptor (CGA) or Hercules

              If you have a Hercules graphics adaptor, execute the
              file HOH.BAT to run the program.


         Printer:  IBM Graphics compatible is known to work, altho no
                   special printer control codes are used so it should
                   work with almost any printer that accepts standard
                   printer commands.  Let us know if yours won't work.






































                                                                Page 7


                                                  Home Office Tax 1989



                                  INSTALLATION

              Copy all the files to your working disk or hard drive.
         You may make a sub-directory for your data files.  Be sure to
         define that directory in the Configure System selection from
         the main menu.  The sample files demonstrate the various
         degrees of deductability with various profit margins.


              All data files have the file extension ".OFF"

















































                                                                Page 8


                                                  Home Office Tax 1989



                               INFORMATION NEEDED

         The following is a list of all the information you will need
         to enter in this program.  You will need to be able to
         document this information (in the event of an audit).  Make
         sure you have receipts, statements, or cancelled checks !


         YOUR NAME

              Your first, middle initial, and last name.


         SOCIAL SECURITY NUMBER

              Your social security number.


         TOTAL SQUARE FOOTAGE OF HOME

              This is the total area of your home.  You can measure it
         a couple of ways.  You can measure every room in the house
         and compute the square footage of each room, then add all the
         square footages to get a total for your home.  Or the easy
         way, take the outer dimensions of your home (e.g. 20 ft wide
         by 40 ft long = 800 square ft.  If you have a two level home,
         multiple the 800 by 2).


         SQUARE FOOTAGE OF OFFICE SPACE

              Measure your office space to get a square footage.
         If your space is not used exclusively for business (such as
         providing daycare), you will need the average hours per week
         and the number of weeks in the year that your home was used
         for providing this service.  Your square footage of office
         space would also be the total area that is used in providing
         this service.  This applies only to those types of services
         where exclusive use is not possible.  Generally this applies
         only to daycare services.  Any other type of business
         activity must use their office space exclusively for
         business.  If you have any question about how this applies to
         your business, contact us or your local IRS office.


         AVERAGE HOURS PER WEEK YOU PROVIDED DAY CARE

              If you provided daycare you will need to figure out the
         average hours each week that you provided day care.


         NUMBER OF WEEKS YOU PROVIDED DAY CARE

              If you provided daycare you will need to figure out how
         many weeks in the year you provided daycare.




                                                                Page 9


                                                  Home Office Tax 1989



         DATE HOME PURCHASED

              This is the date you bought your home.


         STRAIGHTLINE DEPRECIATION

              If you have deducted depreciation on your home office in
         previous years, you will need to know if you elected
         straight line depreciation.

         STRAIGHTLINE YEARS (if ACRS property)

              If the date that you bought your home is between Jan 1,
         1981 and Dec 31, 1986 (inclusive) then your home is ACRS
         property for depreciation purposes.  If you elected
         straightline depreciation in the past, you will need to know
         the number of years that you elected to use; 15, 18, 19, 35,
         or 45 years.


         COST/BASIS OF HOME

              This is the cost of your home (your purchase price) or
         your basis in your home (purchase price plus cost of
         improvements).  Cost or Basis is NOT based on market values.
         It is based on what you paid.

              DO NOT INCLUDE THE COST OF LAND.  The cost of your land
         should be stated on your purchase agreement or closing
         papers.  If not, check with your county assessor to find the
         land value.  Subtract the land value from your total purchase
         price or basis.


         MORTGAGE INTEREST PAID

              This is the amount of interest you paid on your home
         mortgage.  Usually your mortgage company will send you a
         statement at the end of the year stating this amount.


         PROPERTY TAX PAID

              This is the amount of property tax that was paid for the
         year.  This will usually be stated on the same statement as
         your interest paid from your mortgage company, or you may get
         this information from your local government agency (county
         assessor), or your property tax statement.


         RENT

              If you do not own a home you can enter the amount of
         rent you paid for the year.  Do not enter any information
         for; Date House Purchased, Mortgage Interest Paid, Property
         Tax Paid, Cost/Basis of Home.


                                                               Page 10


                                                  Home Office Tax 1989



         HOUSE INSURANCE PAID

              This is the amount of property insurance premiums on
         your home that you paid for the year.  This may also be
         stated on your statement from your mortgage company, on your
         insurance policy, or in your check register.




         GAS UTILITIES PAID

              This is the amount of your heating bills paid for the
         year.  This could be natural gas, LP, oil, or cords of wood.
         Hopefully, you've saved your bills from the year or can track
         the checks paid in your check register.  Or, you may be able
         to get the amount from your utility company.


         ELECTRIC UTILITIES PAID

              This is the amount of your electric bills paid for the
         year.  As with the Gas Utilities, hopefully you have your
         bills or can get the information from your utility company.


         OTHER UTILITIES

              This is the amount of other types of utilities that you
         paid for the year such as; rubbish removal, sewer, water,
         association fees (in condos or trailer parks), etc.


         INDIRECT MAINTENANCE COSTS

              This is the amount of maintenance costs you paid for the
         year to maintain your home such as; exterior painting,
         plumbing and heating maintenance and repairs, etc.

              Painting or repair of rooms other than the home office
         are not deductible.  Any expenses directly related to the
         home office are deductible directly as business expenses.


         BUSINESS EXPENSES

              This is the total amount of your business expenses
         EXCLUDING Cost Of Sales (if you sell a product).  All the
         costs incurred in conducting your business, less the cost of
         your products.


         BUSINESS GROSS PROFIT

              This is the amount of your business income AFTER
         subtracting your Cost Of Sales (if you sell a product).



                                                               Page 11


                                                  Home Office Tax 1989



         CASUALTY LOSSES

              This is the amount of casualty losses you incur on your
         home such as; fire damage, storm damage, vandalism, running
         the car thru the garage, etc.

              As per Code Sect 165  where a loss is sustained with
         respect to property used partly for business purposes
         (including profit making activities), the $100 and 10%
         limitations apply only to that portion of the loss property
         attributable to non-business use.

              For example:

              Your home office percentage is 15%.  Your have storm
              damage to your home of $10,000.  You will be able to
              deduct $1500.

              This is of course calculated for you by the program.
         What you need to enter is the gross amount of loss after
         subtracting actual or expected insurance reimbursements.

         NOTE:
              When calculating your casualty loss on your schedule A,
         you need to apply the limitations to the balance of the loss
         ($8,500 as in the above example, $10,000 - $1,500 = $8,500).
         The $100 and 10% limitation would apply to the $8,500 when
         you enter it on your schedule A.


         INDIRECT EXPENSE CARRY FORWARD FROM 1988

              This is the amount of any indirect expenses that you
         could not deduct on your 1988 return, if any.


         DEPRECIATION CARRY FORWARD FROM 1988

              This is the amount of any depreciation that you could
         not deduct on your 1988 return, if any.


         SCHEDULE C, OR FORM 2106 FILER

              You will need to determine if you are a Schedule C or
         Form 2106 filer on your tax return.  If you are self employed
         you are a Schedule C filer.  If you are an outside person for
         a company and are required to maintain a home office, you are
         a Form 2106 filer.
              If you are a Form 2106 filer you must deduct your Home
         Office tax deduction on your schedule A as a miscellaneous
         itemized deduction which is subject to a 2% exclusion of your
         adjusted groos income.  You can not take the deduction on
         your Form 2106.  This may seem unfair, but it's the law.





                                                               Page 12


                                                  Home Office Tax 1989



                                   IN GENERAL

              This manual is brief.  We assume that you understand the
         rudiments of using a computer and DOS.  We did not provide
         for various file maintenance operations because they can
         easily be handled with common DOS commands (copying,
         deleting, renaming, etc).




                                   MAIN MENU


              When the program starts you are presented with the main
         menu.  You have these selections:

              1. Print Reports

                   This takes you to another menu where you can select
                   to print the home office deduction worksheet,
                   instructions, and schedule to be attached to your
                   tax form, based on the information you have
                   entered.

              2. Data Entry

                   This takes you to a screen where you can enter
                   information in regards to your name, SSN, home, and
                   office space.  To move around the input screen you
                   can press the following keys:

                        PRESS THIS             TO DO THIS

                        ENTER           To move to the next input
                        Down Arrow      field.
                        Tab

                        Shift-Tab       To move to the previous input
                        Up Arrow        field.

                   To get Help, press F1.  To exit the input screen,
                   press ESC.  When exiting you'll be asked if you
                   want to save the input.

              3. Print Input Form

                   This allows you to print out a form for gathering
                   the various items of information you will need for
                   entering in item 2 above (Data Entry).


              4. View Shareware Notice

                   This allows you to view the shareware notice again
                   for registration information.



                                                               Page 13


                                                  Home Office Tax 1989



              5. Configure System

                   This allows you to set options so that the program
                   will run correctly on your computer.  You can
                   select color or monochrome monitors, snow
                   suppression, file paths, and a printer pause.


              6. OS Shell

                   This allows you to shell out of the program and
                   execute DOS commands, or execute other programs.
                   This leaves the program suspended while you perform
                   other functions.  When you are ready to return to
                   the program, enter EXIT at the DOS prompt.
                   This shell will operate correctly as long as you do
                   not run another program that requires more memory
                   than is available with the Home Office Tax Program
                   loaded.

              ESC  Exit to DOS

                   This selection will ask you to confirm that you
                   want to exit the program and return to the
                   operating system.  If you answer anything other
                   than "Y", you will be returned to the Main Menu.





                           GETTING OUT OF A WORK AREA

              At several points in the program you are able to exit
         the area you are working in by pressing "ESC" at any point
         to return to the previous menu.  Watch the status line at the
         bottom of the screen to see various actions that can be
         taken.


                                  GETTING HELP

              At several points in the program you can get help on the
         subject that is being presented to you by pressing "F1".  The
         help is context sensitive.  Watch the bottom of the screen to
         see when help is available.  "F1 Help" will be displayed.


                                   FILE NAMES

         If a file name has not been defined at any time during the
         program, you will be asked for a file name.  You do not need
         to enter the file's extension.  If the file does not exist,
         you will be asked if you want to create it.

         You may also select another file when at the Main Menu by
         pressing "F2".  You can then enter the file name or press
         "F2" again to get a listing of the files in your file

                                                               Page 14


                                                  Home Office Tax 1989


         directory.  To select, move the highlight bar to the file you
         want, then press ENTER.


                         DEPRECIATION CONVENTIONS USED


         CALCULATION METHODS

              Being that this is a computer generated depreciation
         system, the best depreciation calculation is done by use of
         percentage depreciation tables.  These may vary by a few
         pennies from other types of calculations, but are accurate
         enough for tax purposes.

              Any transitional property (placed in service between Jul
         1, 1986 and Dec 31, 1986 electing MACRS) was not provided for
         because it applies to property in progress of being
         constructed, and I don't think very many people in the home
         office position would gain anything by it.  You probably
         didn't even know about it anyway.


         PERIODS USED

              The periods used are the periods defined by law based on
         the date you bought your home.  Exceptions are where you have
         elected straightline depreciation and elected different
         periods.


         CONVENTIONS USED

              The conventions used are those defined by law based on
         the date you bought your home.  The present conventions used
         are:
              CLS  Class Life System.  Generally a straightline
                   depreciation over 40 years.

              ADR  Asset Depreciation Range.  No real change from the
                   CLS convention for real estate.

             ACRS  Accelerated Cost Recovery System.  Enacted by the
                   Tax Reform Act of 1980.  This system incorporated
                   several methods based on the date your home was
                   purchased and defined various periods.

            MACRS  Modified Accelerated Cost Recovery System.  Enacted
                   by the Tax Reform Act of 1986.  This system
                   simplified ACRS and extended the periods of
                   depreciation.


         No depreciation is computed for those of you who rent your
         home or apartment.  Instead, you get to deduct a portion of
         the rent you paid.  The program will figure that for you.




                                                               Page 15


                                                  Home Office Tax 1989


                            EXPLANATION OF WORKSHEET


                             ---- USAGE BASIS ----

                                   AREA BASIS


         Line 1:  Area used for business.

                  This is the square footage of your office space that
                  you entered in the Compute Office Space function.


         Line 2:  Total area of home.

                  This is the total square footage of your home that
                  you entered in the Compute Office Space function.


         Line 3:  Percentage of home used for business.

                  This is the percentage of your home office space
                  based on area.


                 If a time usage basis is not used, the message

           "TOTAL PERCENTAGE OF HOME USED FOR BUSINESS      X.XXXX %"

                             will be printed next.



                                TIME USAGE BASIS


         Line 4:  Hours facility used.

                  This is the average number of hours your home was
                  used that you entered in the Compute Office Space
                  function.  If you did not enter information on time
                  usage, this area on the worksheet will say that the
                  time usage basis was not used.


                 If a time usage basis is not used, the message
                          "Time Usage Basis Not Used"
         will be printed next, and lines 5 thru 7 will not be printed.



         Line 5:  Total hours available.

                  This is the total hours available in the year which
                  is 24 hrs X 365 days, equals 8,736 hours.




                                                               Page 16


                                                  Home Office Tax 1989


         Line 6:  Percentage of time used for business.

                  This is the percentage of the usage hours to total
                  hours available in the year.



         Line 7:  Percentage of home usage for business.

                  This is the percentage of your home usage for
                  business based on the space and hours used.


                  If the time usage basis is used, the message

          "TOTAL PERCENTAGE OF HOME USED FOR BUSINESS        X.XXXX %"

                             will be printed next.



                               ---- EXPENSES ----


         line 8:  Business percentage of otherwise deductible
                  expenses.

                  These are expenses are that are deductible on your
                  schedule A anyway.  However, by taking these as a
                  home office deduction you may avoid exclusions on
                  some of these expenses.  These expenses may be
                  deducted even if you have a loss.

                  These expenses are listed in two columns; TOTAL
                  EXPENSE, and BUSINESS PART.  The business part is
                  the total expense multiplied by the PERCENTAGE OF
                  HOME USED FOR BUSINESS listed above.

                  When you enter these deductions on your schedule A,
                  you should list the amount of TOTAL EXPENSE minus
                  the BUSINESS PART.  This is a favorite part for the
                  IRS to audit because people forget to subtract the
                  business part when they list the expense on schedule
                  A.


                  a) Mortgage Interest.

                     This is the amount of mortgage interest that you
                     entered in the Input Expenses area.

                  b) Property Taxes.

                     This is the amount of property tax that you
                     entered in the Input Expense area.





                                                               Page 17


                                                  Home Office Tax 1989


                  c) Casualty Losses.

                     This is the amount of casualty losses that you
                     entered in the Input Expenses area.

                  d) Totals.

                     This is the total of each column.


         Line 9:  Business Expenses.

                  This is the amount of business expenses that you
                  entered in the Input Expenses area.  This should be
                  the amount of all business expenses excluding any
                  costs of sales.


         Line 10: Indirect Expenses for Business Use of Home.

                  These expenses are deductible only to the extent to
                  which you have a profit from your business and after
                  deducting the amount from line 8d.

                  a) Electric Utilities.

                     This is the amount of electric utilities that you
                     entered in the Input Expenses area.

                  b) Gas Utilities.

                     This is the amount of gas utilities that you
                     entered in the Input Expense area.

                  c) Other Utilities.

                     This is the amount of other utilities that you
                     entered in the Input Expenses area.

                  d) Insurance.

                     This is the amount of home insurance that you
                     entered in the Input Expenses area.

                  e) Maintenance.

                     This is the amount of indirect maintenance that
                     you entered in the Input Expenses area.



                  f) Rent.

                     This is the amount of rent (if any) that you
                     entered in the Input Expenses area.





                                                               Page 18


                                                  Home Office Tax 1989


                  g) Carry Forward from 1987.

                     This is the amount of carry forward from 1987
                     that you entered in the Input Expenses area.


                  h) Totals

                     This is the total of the columns.



         Line 11: Depreciation

                  This is the amount of depreciation calculated for
                  your property based on the Basis and purchase date
                  of your home that you entered in the Input Expenses
                  area.  On the next line the convention used will be
                  stated.

                  This deduction is limited to the amount of profit
                  from your business after deducting the indirect
                  expenses above and the amount of line 8d.  The
                  reason that depreciation is the last deductible item
                  is because it is considered a phantom expense.  It
                  doesn't require a cash outlay in the year.
                  Generally, whether you have a home office or not,
                  you will have depreciation anyway, (or more
                  appropriately, for most real estate, appreciation).


                  Carry Forward from 1987.

                  This is the amount of carry forward from 1987 that
                  you entered in the Input Expenses area.



                  Total

                  This is the total of the depreciation for this year
                  plus any carry forward.




                         ---- DEDUCTION LIMITATION ----


         This area calculates the amount of your home office deduction
         taking into account any limitations as explained as above for
         indirect expenses and depreciation.








                                                               Page 19


                                                  Home Office Tax 1989


              Page 2

                       ---- CARRY FORWARD'S TO 1989 ----


         If you are not able to deduct all your expenses for 1988,
         this area will tell you what expenses are to be carried
         forward to 1989.

                           ---- WHERE TO DEDUCT ----



         This area will tell you where to correctly deduct you various
         home office expenses on your tax returns to effect the best
         tax savings.



              Page 3

         This page should be attached to your income tax return as per
         the instructions on page 2 (above).




































                     HOME OFFICE TAX 1989 REGISTRATION FORM
                                                               Page 20


                                                  Home Office Tax 1989




         Name: ______________________________________________________


         Company: ___________________________________________________


         Address: ___________________________________________________


         City, State, Zip: __________________________________________


         Country: ___________________________________________________


         ************************************************************



         Computer Make and & Model: __________________________________

         Memory: ________________  Disk (5-1/4 or 3-1/2): ___________

         Monitor Type: ____________________  Printer: _______________

         Graphics Adaptor Type: _____________________________________

         Where did you obtain a copy of this program ?: ______________

         _____________________________________________________________

         *************************************************************

                                   Quantity: ______ X $18 = __________

             Less Quantity Discount (see page 5) ______ % - __________

                     Minnesota residents add 6% sales tax + __________

                                                    TOTAL = __________


                **** Upgrades for previous registered users ****

                     Your serial number: _________________

                               Upgrade fee is $10




                                    MAIL TO:
                              ParyTech Associates
                              16559 Quincy St. NE
                              Ham Lake, MN  55304

                              Phone (612) 434-4330

                                                               Page 21

```
{% endraw %}

## README.DOC

{% raw %}
```



                               HOME OFFICE TAX 1989


                                   README.DOC


              If you have a Hercules graphics adapter, execute the
         file HOH.BAT to run the program.


              Print out the file MANUAL.DOC for the instruction
         manual.  At the DOS prompt enter "copy manual.doc prn".  Be
         sure that you have continuous feed paper in your printer, or
         something that will feed sheets.


         Files included with the HOME OFFICE program:

              ACRS.OVL            Depreciation tables
              ACRS2.OVL                   "
              ACRS3.OVL                   "
              ACRS4.OVL                   "
              ACRSSL.OVL                  "
              ACRSSL2.OVL                 "
              ACRSSL3.OVL                 "
              ACRSSL4.OVL                 "
              ACRSSL5.OVL                 "
              ACRSSL6.OVL                 "
              ACRSSL7.OVL                 "
              ACRSSL8.OVL                 "
              ACRSSL9.OVL                 "
              ACRSSL10.OVL                "
              MACRS.OVL                   "
              BRUN45.EXE          Runtime module
              HERC.COM            Hercules graphics adapter driver
              HOT.CFG             Program configuration file
              HOT.EXE             Main program
              HOTE.OVL            Data entry module
              MAIN.MNU            Screen image file
              MANUAL.DOC          Manual on how to use this program
              README.DOC          This file you are reading now
              SAMPLE1.OFF         Sample file
              SAMPLE2.OFF              "
              SAMPLE3.OFF              "
              SAMPLE4.OFF              "
              SAMPLE5.OFF              "
              SAMPLE6.OFF              "


              With the exception of HERC.COM, HOT.EXE is the only
         executable file.






         End of README.DOC





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2183

     Volume in drive A has no label
     Directory of A:\

    ACRS     OVL       599  11-20-88   4:02a
    ACRS2    OVL       688  11-20-88   4:02a
    ACRS3    OVL       690  11-20-88   4:02a
    ACRS4    OVL      1172  11-20-88   4:02a
    ACRSSL   OVL       576  11-20-88   4:02a
    ACRSSL10 OVL      2746  11-20-88   4:04a
    ACRSSL2  OVL       687  11-20-88   4:02a
    ACRSSL3  OVL       687  11-20-88   4:02a
    ACRSSL4  OVL      1188  11-20-88   4:03a
    ACRSSL5  OVL      1296  11-20-88   4:03a
    ACRSSL6  OVL      1302  11-20-88   4:03a
    ACRSSL7  OVL      2150  11-20-88   4:03a
    ACRSSL8  OVL      2745  11-20-88   4:04a
    ACRSSL9  OVL      2746  11-20-88   4:04a
    BRUN45   EXE     77440   9-28-88   1:43a
    HERC     COM      6749   9-28-88   2:03a
    HOH      BAT        17  10-02-89   9:18a
    HOT      CFG        17  11-20-89  10:31p
    HOT      EXE     86934  12-28-89   9:09p
    HOTE     OVL     65014  12-23-89  10:28a
    MACRS    OVL      2404  11-20-88   4:05a
    MAIN     MNU      4000  12-26-89   9:39p
    MANUAL   DOC     47041  12-28-89   8:46p
    README   DOC      2097  11-23-89   1:06a
    SAMPLE1  OFF       139  12-23-89   9:33a
    SAMPLE2  OFF       139  12-23-89   9:39a
    SAMPLE3  OFF       139  12-23-89   9:43a
    SAMPLE4  OFF       139  12-23-89   9:47a
    SAMPLE5  OFF       139  12-23-89   9:55a
    SAMPLE6  OFF       139  12-23-89  10:37a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   4-30-90  11:50p
    FILE2183 TXT      2739   5-01-90   5:46p
           33 file(s)     315136 bytes
                           27648 bytes free
