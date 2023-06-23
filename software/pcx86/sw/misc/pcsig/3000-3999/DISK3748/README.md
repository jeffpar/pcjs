---
layout: page
title: "PC-SIG Diskette Library (Disk #3748)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3748/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3748"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MD.DOC

{% raw %}
```
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        
        
        
        
        
        
        
                        M O R T G A G E   D E S I G N E R
        
        
        
        
        
                                   Version 2.x
        
                                Reference Manual
        
        
        
        
          Mortgage calculations complete with amortization schedules!
                  Supports easy to use "What if?" calculations.
        
        Context sensitive help and on-line manual make it easy!  Mortgage
        Designer for Windows is user supported software (Shareware). If you
        use it past the initial 15 day evaluation period, you are
        required to register it.  No exceptions!
        
        Registered Users: Your serial number can be found on the back of
        your manual, the distribution disk, or on the registration card.
        
        
                           Mortgage Designer for Windows
        
        
               "Mortgage Calculations -- Fast, Accurate, and Easy"
        
        
                                 is published by
        
        
                               MaeDae Enterprises
                                 5430 Murr Road
                            Peyton, CO 80831  U.S.A.
                                 (719) 683-3860
        
              Published and printed in the United States of America.
        
         Copyright 1991-1993  MaeDae Enterprises as a licensed, unpublished,
              proprietary work.  All international rights reserved.
        
        
        
        
        
        
        
        
        
                                   Page 1
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        The printed Reference Manual and associated registered software
        may not be copied, resold, reproduced, disclosed, archived,
        transmitted, or transferred in any form, electronic or otherwise,
        without the express written permission of MaeDae Enterprises.
        You may freely distribute the Shareware version.
        
        REGISTERED USERS: (those who paid and received a serial number)
        
        MaeDae Enterprises hereby grants a "book" license to the original
        individual (even if purchased by a company) user of this copy of
        Mortgage Designer.  You may use the program on your computer and
        make one backup for storage as long as there is no possibility of
        use or residence on more than one machine at any time.  Every
        registered copy of Mortgage Designer has a unique, embedded
        serial number for traceabililty.  You may not sell or give copies
        of the registered program or printed documentation to anyone.  No
        exceptions.
        
        Pricing, specifications, and conditions are subject to change
        without notice.
        
        Send all registrations and inquiries for site (multiple CPU or
        network) licensing to MaeDae Enterprises at the address on the
        previous page.
        
        DISCLAIMER:
        
        MaeDae Enterprises makes NO claims AND offers NO warranties of
        any sort with Mortgage Designer.  MaeDae Enterprises assumes NO
        responsibility for any damage resulting from the apparent or
        actual use of Mortgage Designer (mental or physical).  The program
        provided is not guaranteed as to merchantability or fitness for
        its ultimate use.  The user accepts all responsibility for use
        and may not resell the program.
        
        IBM PC/AT is a registered trademarks of the International
        Business Machines Corporation.
        
        Mortgage Designer is a trademark of MaeDae Enterprises.  Other
        trademarks belong to their respective owners.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 2
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        PREFACE
        
        ABOUT THIS MANUAL
        
        You will notice that this manual is concise.  This is intentional
        as we strived to make Mortgage Designer the easiest program of its
        type to use.  We opted to provide an extensive built-in user help
        system.  Feel free to use this reference manual to install and
        get acquainted with the program.
        
        For many of you, this may be your first exposure to Shareware.
        To help eliminate possible confusion, we included a short
        description of the Shareware marketing concept, explaining what
        it is and why it relies on YOU for its survival.
        
        WHAT IS SHAREWARE?
        
        Shareware is not a kind of software.  It is a revolutionary
        method of marketing Commercial software.  Our software is
        Commercial software that we are allowing you to examine for 15
        days before you make the purchase decision.  With traditional
        marketing methods, you have to purchase Commercial software from
        a computer store or through mail order businesses, then try it
        out, and hope it does what you want.  Shareware allows you to
        "try before you buy!"
        
        We rely upon you, the customer, to examine our software.  If you
        find it useful, please register.  Your support is needed for us
        to continue to improve our products.
        
        With warmest regards,
        
        David Black
        President, MaeDae Enterprises
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 3
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
                                   Table of Contents
                                   =================
        
        Page    Description
        ====    ===========
        
        5.      What is Mortgage Designer?  An overview of its features.
        
        6.      Hardware Requirements
        
        7.      Installation - the "README.DOC" file.
        
        7.      Installation Notes
        
        8.      Getting Started
        
        9.      Tutorial
        
        10.     Using "What If?" Calculations
        
        11.     Troubleshooting
        
        12.     Basic Definitions
        
        13.     Mortgage Designer Limits
        
        14.     Additional Information
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 4
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        WHAT IS MORTGAGE DESIGNER?
        ==========================
        
        Mortgage Designer is a powerful and easy to use mortgage package
        for Windows 3.x that allows you to:
        
        1. Quickly calculate mortgage repayment information,
        
        2. Generate amortization schedules for output to the screen,
        printer, or file, with the flexibility of choosing which payments
        are shown,
        
        3. Perform complex "What if?" calculations where the principal,
        interest rate, term, or payment can be adjusted,
        
        4. And do it all without cryptic commands!  Windows even makes it
        fun!
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 5
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        HARDWARE REQUIREMENTS
        =====================
        
        1.  IBM PC/AT, IBM PS/2, or fully compatible computer capable
        of running Windows 3.0 or later.
        
        2.  At least one 5.25" or 3.5" floppy disk drive.  Two floppy disk
        drives or one floppy and a hard disk (400K free space minimum for
        the full system) are strongly recommended.
        
        
        INSTALLATION - README.DOC
        =========================
        
        For all installation information see the README.DOC on the main
        distribution diskette.  You can view the information on-line or
        print it out on your printer.  README.DOC is constantly updated
        to contain the latest information.
        
        P.S. The Shareware version of Mortgage Designer is complete.
        However, it is a 15 day trial version.  Also, additional product
        information screens have been added.
        
        Feel free to share ONLY the Shareware version with friends and
        potential users of Mortgage Designer for 15 day trial/evaluation
        purposes only.  You may not use the Shareware version on other
        machines in order to avoid purchasing additional copies of the
        full program.  You may not give away any copies or make more than
        one copy of the fully operational program for other than archival
        purposes.  The full version of Mortgage Designer has a unique
        serial number embedded in each copy for traceability.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 6
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        IMPORTANT INSTALLATION NOTES:
        
        1.  Diskette #1 contains many files in addition to MD.EXE.
        Please make sure these files are all installed in the same
        directory when running the program.
        
        2.  If Mortgage Designer does not run properly:
        
            A.  Your machine may not be 100% IBM PC operating system
            compatible or Windows may be installed incorrectly.  This
            is not always disastrous and a quick call to our phone
            support staff may solve your problem.
        
            B.  You may have a slightly incompatible Windows video
            driver.  Usually, updating your driver or re-installing
            Windows solves the problem.
        
            C.  If you have any memory resident programs or system
            drivers, try running without them loaded on your computer.
        
        3.  This manual is designed to give you a general overview and
        familiarity with the program.  More complete, up-to-date
        information is available to you through the extensive built-in
        user help (F1) system or the help button when available on dialog
        boxes.  When using the more advanced features of the program, the
        help screens will guide you through the toughest questions with
        ease.  As Mortgage Designer continues to add more features, you can
        be sure that the built in help will give you the guidance needed.
        This way everybody wins.  We don't spend money continually
        revising manuals and charging you higher prices.  You get what
        you want and deserve: accurate, up-to-date information.  So fire
        up the computer, dig in, and welcome to Mortgage Designer!
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 7
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        GETTING STARTED
        ===============
        
        After you run MD.EXE using the file manager, the MAIN MENU will
        appear on your screen.
        
        The Main Menu options with descriptions are below.
        
        *File:  This menu option provides the preferences area that
        allows the basic data editing option for selecting the mortgage
        info you want to work with.  This option also provides access to
        the database for saving the mortgage information as the default
        which is to be used each time you run Mortgage Designer.
        
        Note:  You must first tell Mortgage Designer the specifics of the
        mortgage before you can use the other sections of Mortgage Designer.
        
        *Calculate:  Allows you to calculate the remaining balance, cost
        of loan, and pay "What If?" to solve for missing information.
        
        *Reports:  Generate amortization schedules and compare mortgage
        options.
        
        *Tax Time:  Calculates the distribution of your payments divided
        into yearly principal and interest totals.  This should be very
        useful at tax time.  It will also estimate your yearly tax
        savings due to interest paid on the mortgage.  Use these figures
        as rough estimates only since each person's tax situation is
        normally very different.
        
        *Help:  Provides the help index/commands, invoice printing, and
        information about the version of Mortgage Designer.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 8
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        TUTORIAL (CALCULATING A MORTGAGE)
        =================================
        
        Now let's do something simple to demonstrate how Mortgage Designer
        works.
        
        Choose the File menu option.  Then pick the Edit option from the
        menu.  A dialog box will appear allowing you to edit the
        information concerning the mortgage.  Use your mouse and click on
        the edit field containing the principal amount.  You may also
        select the principal edit field by pressing Alt+P (the P is
        underlined, so Alt plus the underlined key will select it).
        
        For our sample mortgage edit each field to contain the following:
        
        Principal:  100000.00
        Interest rate: 10.000
        Term: 30 years
        
        After you alter the edit fields to contain the above information,
        select the payment button.  A dialog box will pop up showing that
        the payment is $877.57 per month.  Thats all there is to it.
        Select OK then select the done button and we're finished.
        
        Note:  If you normally work with a certain principal, interest
        rate, or term, use the database option to save the information as
        defaults for Mortgage Designer.  They will be added to LoanData.INI
        and automatically loaded each time you run Mortgage Designer (if
        specified as the default).
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 9
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        USING "WHAT IF?" CALCULATIONS
        =============================
        
        Mortgage Designer supports calculating the missing item from
        principal, interest rate, term, and payment.  Any missing item
        can be calculated given the other three.
        
        When using the missing variable area under the calculate
        pulldown, you enter the information you know.  Mortgage Designer
        will calculate the missing item.  Tell Mortgage Designer which item
        is missing by checking the radio button for the missing data
        item.  Then select the calculate button to calculate the missing
        item.
        
        You will notice that as you solve for different items, the basic
        mortgage information will change slightly.  Example:  Use the
        data from our tutorial on the previous page and solve for the
        principal.  The principal will be changed from 100000.00 to
        99999.82.  The difference of 18 cents is caused by the rounding
        of the math.
        
        The term in years has the most granularity.  Since we can only
        have whole years, it is extremely hard to accurately handle this
        area.  Mortgage Designer rounds to the nearest whole year.  After
        you solve for year, we recommend you perform a second calculation
        solving for a second area.  We might first solve for the term,
        then solve for the payment to allow Mortgage Designer to compensate
        for the granularity of the years.
        
        As you run through the mortgage what if calculations, consider a
        15 year mortgage verses a 30 year mortgage.  The payments are not
        twice as high!  They are only a little higher and you reap huge
        savings over the life of a mortgage.  (You can use the calculate
        cost of loan section of Mortgage Designer to obtain the total
        cost of a mortgage over its lifetime.)
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 10
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        TROUBLESHOOTING
        ===============
        
        If Mortgage Designer will not run, you may have insufficient memory
        or too many memory resident programs.  Try running Mortgage
        Designer with no memory resident programs or allocate a larger
        swapfile under Windows.  See your Windows User's Guide for help
        with the Swapfile program.
        
        If Mortgage Designer just stops running and you get an
        "Unrecoverable Application Error," you may have incompatible
        hardware/software. Try running Mortgage Designer in the 386
        Enhanced mode (if you have a 386 computer) to see if that
        corrects the problem.
        
        Occasionally, certain memory resident TSR or "pop-up" programs
        conflict with Mortgage Designer.  In general, there is no problem,
        but there are many new programs being written without regard to
        the system requirements of other programs that may be running at
        the same time.  Remove them from memory, and try again.  If that
        fails, try getting rid of device drivers in your CONFIG.SYS file.
        
        Invalid values for the principal, interest rate, or term can
        create math problems.  Invalid values used in the math
        calculations can result in Mortgage Designer failing to run
        correctly.  If this occurs AND you have saved the values as
        the default, delete LoanData.INI and then rerun Mortgage Designer.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 11
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        BASIC DEFINITIONS:
        ==================
        
        The terms used in Mortgage Designer may be a little confusing.
        They are terms frequently used when discussing mortgages.  We
        have defined the most important ones for you in the definitions
        listed below.  They are:
        
        Amortization schedule - A report showing each period during a
        mortgage with information on how much went to principal/interest
        and the loan balance.
        
        Interest Rate - The cost of the mortgage expressed as the percent
        per year.  The rate of repayment for money being borrowed.
        
        Payment - The amount of money to be repaid per repayment period.
        
        Principal - The amount of money being borrowed or loaned out.
        
        Term - How long is the money being borrowed or loaned out.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 12
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        MORTGAGE DESIGNER LIMITS
        ========================
        
        The limitations on accuracy for built-in math causes Mortgage
        Designer to place limits on the range of data you can enter.
        Listed below are the most important areas:
        
        
        Principal - $100.00 to $999,999,999.99
        
        Interest rate - 0.100% to 50.000%
        
        Term - 1 to 50 years
        
        Payments - $1.00 to $999,999,999.99 per period
        
        Mortgage start date - MM/DD/YYYY where month is 1-12, day is
        normal day of month, and year ranges from 1900 to 2100
        
        
        Notes:
        
        1.  Mortgage Designer uses double length floating point numbers for
        its calculations.  This means Mortgage Designer will be more
        accurate than many of the figures from banks and financial
        institutions.  However, even double length floating point numbers
        have a limit on their accuracy.  Because of these limits, the
        values for principal, interest, term, and payment used by
        Mortgage Designer have built-in checks to ensure they are limited
        so the calculations are accurate.
        
        2.  The above limits are imposed to ensure the accuracy of
        answers and should not limit users in solving mortgage
        calculations.  However, we do want to be receptive to your needs.
        If any of the limits need to be adjusted, please let us know.
        
        3.  Database - No limits except for minor performance slowdown
        with exceptionally large databases.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 13
        
        
        
        
                    (C) Copyright 1991-1993  MaeDae Enterprises
        
        ADDITIONAL INFORMATION
        ======================
        
        The information listed below is provided in an effort to aid you
        in working with Mortgage Designer and understanding the mortgage
        calculation process.
        
        Before you can use Mortgage Designer you have to define the problem
        to be solved.  Get all the facts you need to solve the problem.
        If you do not have the principal, interest rate, or term then
        use the calculate missing variable area of Mortgage Designer to
        obtain this information.
        
        After you have defined the problem and start using Mortgage
        Designer you may notice that numbers you enter are changed
        slightly.  This is because pure numbers used by computers do not
        contain commas, dollar signs, etc.  Because of the limitations of
        number conversions, Mortgage Designer works in the background to
        constantly strip out invalid characters.  This is transparent to
        you unless the "cleaned up" number is invalid.  Then you will be
        notified of the problem.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                   Page 14
        
        
        
        
```
{% endraw %}

## ORDER.DOC

{% raw %}
```
                                ORDER FORM

        See README.DOC and VENDORS.DOC for additional information.

   Send to:  MaeDae Enterprises         Info:  CompuServe at 72571,3245
             5430 Murr Road                    GEnie and BIX at MAEDAE
             Peyton, CO 80831-7402 USA         MaeDae Ent (719) 683-3860

   Registration benefits:  1.  No additional information screens.
                           2.  Unlimited support - written or by phone.
                           3.  Full DES encryption enabled for Encrypt-It.
                           4.  Extensive hard copy reference manual.

   Upgrades:  Upgrades may be obtained at any time.  Add $5 per application
              for an updated hard copy manual.
   ========================================================================

                Item               Unit Price  Qty   Upgrade  Qty    Total
   =============================   ==========  ===   =======  ===   =======
   Encrypt-It for Windows (DES!)      $59      ___     $15    ___   $______
   Encrypt-It for DOS (DES!)          $59      ___     $15    ___   $______
   Both Windows and DOS Encrypt-It    $99      ___     $25    ___   $______
   Mortgage Designer for Windows      $39      ___     $10    ___   $______
   WinDupe - Windows Disk Duplicator  $39      ___     $10    ___   $______

   Both 5 1/4" and 3 1/2" media are included.          Subtotal     $______

                            CO State residents add 4% sales tax     $______

                                Shipping and handling per order        5.00

                                                          Total     $______

   Checks, money orders, VISA, and Master Card accepted.  Make payable to
   MaeDae Enterprises.  Prices subject to change without notice.  If paying
   by charge card please provide the following information with signature.

   Visa [ ] M/C [ ]  Card#: ______________________________  Exp date: __/__

   Cardholder Name: _________________________________  Phone#: ____________

   Signature required!  ___________________________________________________

   Note:  It is illegal to export Encrypt-It outside the US and Canada due
   to the DES encryption technology used to protect your data.
   ========================================================================

   Which product and version are you using? _______________________________

   Where did you obtain it? _______________________________________________
   ========================================================================

   Ship to:     Name __________________________________________

             Company __________________________________________

             Address __________________________________________

                City _________________ State _____ Zip ________
```
{% endraw %}

## README.DOC

{% raw %}
```

Dear Mortgage Designer user,                           4 Jan 1993

This version of Mortgage Designer provides many features to make it easier
to use and more powerful than any mortgage program you may have used in
the past.  Version 2.0 adds several new features over 1.4 (see the
Whatsnew.DOC file for a complete listing of new features).

                                  David Black
                                  MaeDae Enterprises

==============================================================================

                             INSTALLATION

Follow the directions provided with the registered version or make a directory
called MD (for Mortgage Designer) and copy all the files into it.  Run MD.EXE
for the main application using the Windows File Manager.  You can either
highlight MD.EXE and double click on it or use the run command and specify
the complete path (i.e. C:\MD\MD.EXE).

==============================================================================

                                HISTORY

v1.0 OCT 91 - Initial release of Mortgage Designer for Windows.  Provided
              mortgage calculations complete with amortization schedules!
              Supported easy to use "What if?" calculations.

v1.1 DEC 91 - Added graphic pie charts to several dialog boxes.  Added to
              and expanded several other areas of Mortgage Designer including
              a new "Equity vs Balance" function and "Yearly P&I" function.

v1.2 FEB 92 - Added a graphic pie chart to "What if?" dialog boxes.  Speeded
              up yearly P&I calculation.  Added a database for default loans.
              Expanded several other areas of Mortgage Designer including the
              repayment option and PITI areas.

v1.3 JUL 92 - Added break even analysis for mortgage refinancing.  Expanded
              the "What if?" area.  Improved the user interface to better
              conform to Common User Access (CUA) guidelines.  Changed all
              menus and keyboard shortcut keys to automatically load when you
              load Mortgage Designer (results in faster execution).  Many
              other touchups and minor enhancements.

v1.4 NOV 92 - Added variable rate mortgage calculations, expanded refinance
              options, semiannual payments, easy keyboard selection in
              dialog boxes, plus much more.

v2.0 JAN 93 - Major rewrite adding a command/icon bar, status line, print
              from all list boxes, plus much more!  Note:  MD v2.00 uses
              a different file format for MD.INI.  Don't be alarmed when
              MD v2.00 flags your previous MD.INI as outdated and creates
              a new one.

Note:  Have suggestions for additional features?  Write us.  We want to
       continue improving Mortgage Designer so that it will completely meet
       your needs.

==============================================================================

                            SITE LICENSING

Site licenses are available for Mortgage Designer.  Site licenses provide you
the low cost and flexibility to use Mortgage Designer to completely satisfy
your mortgage calculation needs.  Please contact us for pricing.

==============================================================================

                        VENDOR INFORMATION

Shareware resellers have permission to place Mortgage Designer in their catalog
provided diskettes are not sold for more than $10.  We would like your
address so we can keep you updated with the latest version of our packages.
Please send us a copy of your latest catalog and your requirements for us
to be added.  We will automatically update you as each new version is
released to ensure you provide only the latest version to your customers.
Send to:

MaeDae Enterprises
5430 Murr Road
Peyton, CO 80831
(719) 683-3860
```
{% endraw %}

## SUGGEST.DOC

{% raw %}
```
                              SUGGESTION FORM

  Please take the time to suggest ways to improve Mortgage Designer.
  Fill out and mail in the enclosed suggestion form (SUGGEST.DOC) to
  provide inputs.

   Send to:  MaeDae Enterprises     EMail to:  CompuServe at 72571,3245
             5430 Murr Road                    GEnie or BIX at MAEDAE
             Peyton, CO 80831-7402 USA

   Your info:     Name __________________________________________

               Company __________________________________________

               Address __________________________________________

                  City _________________ State _____ Zip ________

   =====================================================================

   Which version of Mortgage Designer are you using?  __________________

   Where did you obtain Mortgage Designer?  ____________________________

   What do you like about Mortgage Designer? ___________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   How can we improve Mortgage Designer? _______________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   What other products would you like us to develop? ___________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________

   _____________________________________________________________________
```
{% endraw %}

## VENDORS.DOC

{% raw %}
```
==============================================================================
|         *** More Sources for Encrypt-It and Mortgage Designer ***          |
==============================================================================

==============================================================================
You may now register Encrypt-It and Mortgage Designer with your VISA/MC,
check, or money order through Software Excitement!'s registration service
by choosing any of the following options...

1)  Call----800-444-5457
2)  Fax-----503-826-8090
3)  Write---Software Excitement!
            Attn: Registrations
            6475 Crater Lake Hwy.
            Central Point, OR 97502
4)  CompuServe members may log on and type GO SE, to access Software
    Excitement!'s new Electronic Mall Store, where you can choose option #7
    to register your favorite shareware products, including Encrypt-It and
    Mortgage Designer.
==============================================================================
Encrypt-It for DOS or Windows is also available in an international version
under the name of WINDEX! from:

Jack Graziano, Director
DataSafe
Bahnhofstrasse 19
2150 Buxtehude
Germany

Telephone:  011 49 41 61 543 67
FAX:        011 49 41 61 532 35

Contact Jack for the latest pricing information.  The international version
is the same as the USA version except several additional layers of proprietary
encryption are substituted for the Data Encryption Standard (DES) encryption.
Multiple layers of proprietary encryption are subsituted for DES in order to
comply with US government restrictions on exporting this technology outside the
US and Canada.
==============================================================================

```
{% endraw %}

## WHATSNEW.DOC

{% raw %}
```

Mortgage Designer v2.00 for Windows provides the following over v1.40:

- Added a command/icon bar for easy execution of common commands.
- Added a status line complete with date and time.
- Now you can use F1 access from all points in Mortgage Designer
  (even message boxes).
- Mortgage Designer limits have been greatly extended on principal
  (from $500,000,000.00 to $999,999,999.99), interest rate (from
  25.000% to 50.00%), and term (from 30 years to 50 years).  Extensive
  checks are now performed during math calculations to inform you if
  your mortgage is too complex to calculate.
- Greatly expanded the error checking to validate values in as many
  places as possible.  The "What if?", refinance, variable rate mortgage,
  and PITI areas now validate all numbers when you exit each of the
  areas.  Each of these areas have a built-in memory to retain your
  last values between uses.
- Expanded the built-in help adding hints on how to get more out of
  Mortgage Designer.
- Combined the preferences and loan database areas.  The preferences
  area can now provide customized loan information, tax brackets, PITI
  defaults, and more on each loan (record) in the database.  This
  really allows you to customize Mortgage Designer.
- Expanded the database area to provide easier selection of records.
- Expanded the about Mortgage Designer box to provide free memory,
  operating mode, and co-processor status information.
- Expanded all calculations to handle 3 decimals on interest rates.
  Several users have asked to be able to handle 1/8 percent (0.125)
  rate increments.
- Rewrote the mortgage amortization area to provide additional features
  that several users had requested.
- Rewrote the mortgage comparisons area to use a listbox and provided a
  print option for it.
- Numerous minor additions users had requested.
- Do you have suggestions for improving Mortgage Designer?  Please fill
  out the SUGGEST.DOC form and send it to us.  We would like to hear
  from you.

Mortgage Designer v2.01 for Windows provides the following over v2.00:

- Touched up the help icon on the tool bar to be easier to read.
- Corrected a minor problem with the cursor when using the Show
  Comparisons function.

Mortgage Designer v2.02 for Windows provides the following over v2.01:

- Touched up the location of some of the buttons on the dialog boxes.
- The amortization screen now has a final payment button that calculates
  the last mortgage payment.  This function uses the normal payment and
  the remaining balance at the end of the amortization period to calculate
  an adjusted last mortgage payment.
- Adjusted the vertical size of the Mortgage Designer main window so that
  CGA and EGA resolutions would show a taller opening screen.  Before this,
  CGA and EGA would show a fairly narrow main window.
- Changed all the list boxes from fixed line height to adjusted spacing
  to prevent the list boxes from changing heights under some unusual video
  modes and overwritting the top of the command buttons.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3748

     Volume in drive A has no label
     Directory of A:\

    MD       EXE    224256   2-27-93   8:07p
    MD       HLP     39835   1-15-93   7:58p
    MD       DOC     26378  12-24-92   6:51a
    WHATSNEW DOC      3092   2-18-93  10:09a
    ORDER    DOC      2872   2-14-93   3:08p
    SUGGEST  DOC      2266   2-14-93   3:09p
    README   DOC      3934  12-22-92   4:56p
    VENDORS  DOC      1790   1-18-93   8:13a
    GO       BAT        32   6-04-93   1:10p
    SHOW     EXE      2040   9-12-88  10:48a
           10 file(s)     306495 bytes
                           12288 bytes free
