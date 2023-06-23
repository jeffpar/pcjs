---
layout: page
title: "PC-SIG Diskette Library (Disk #1955)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1955/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1955"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-BID+"

    PC-BID, developed for contractors, is a database program for bid items,
    but it can also be useful to others for obtaining cost estimates.  For
    each bid-item, you may record the costs for labor, equipment, materials
    and sub-contractors, along with the prices.  PC-BID also provides for
    various percentage overhead factors such as insurance, taxes and other
    costs based on the various bid cost items.  You may edit or delete bid
    records individually.  The program also allows you to change all bid
    unit costs by a percentage factor.  A standard labor rate for each bid
    can also be used for those using time based labor records.  After the
    data is entered you may print out reports for bid estimates, bid
    analyses, bid proposals, and master listings of each bid category.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1955.TXT

{% raw %}
```
Disk No: 1955                                                           
Disk Title: PC-Bid+                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Bid+                                                  
Author Version: 2.1                                                     
Author Registration: $35.00                                             
Special Requirements: 384K RAM.                                         
                                                                        
PC-BID is a database program for bid items intended for contractors,    
but it can also be useful to others for obtaining cost estimates.  For  
each bid-item, you may record the costs for labor, equipment, materials 
and sub-contractors, along with the prices.  PC-BID also provides for   
various percentage overhead factors such as insurance, taxes and other  
costs based on the various bid cost items.  You may edit or delete bid  
records individually.  Program also allows you to change all bid unit   
costs by a percentage factor.  A standard labor rate for each bid can   
also be used for those using time based labor records.  After the data  
is entered you may print out reports for bid estimates, bid analyses,   
bid proposals, and master listings of each bid category.                
                                                                        
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
║                   <<<<  Disk #1955  PC-BID  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  PC-BID (press enter)                           ║
║                                                                         ║
║ To print documentation, type:  COPY PCBIDP.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PCBIDP.DOC

{% raw %}
```

























                               P C  -  B I D   P L U S
                               -----------------------

                                         By:

                                     I. J. Smith
                                  9795 Rustling Oaks
                                Baton Rouge, La. 70818

                                ----------------------


































                                * * *  PC-BID PLUS * * *
                                      (Version 2.1)


                 This program maintains a database of bid items together with
            Labor, Equipment, Material and Sub-Contractor costs.  Ease of use
            was the primary goal.  What use is a program so complex that it
            discourages you to use it?  This program was designed to make it
            easier to estimate, not harder.  While originally intended for
            contractors, many type businesses have found it useful for their
            cost estimating purposes as well.  Since labor costs can be
            maintained by both time or monetary values, it could be useful
            for many types of estimating.

                The application uses the (c)BTRIEVE file handler.  This
            translates to superb data integrity...no lost files due to power
            failures, etc.  This does not mean you should not make backups of
            your data files however, disk failures and system problems do
            occur.  Use of memory resident programs should be tested before
            using, since BTRIEVE is a memory resident program also.  The
            program will remove the BTRIEVE file handler upon exiting.

            NOTE:  Use of accelerated file handlers such as ram-disks will
            defeat the recovery features of BTRIEVE.  Use them with care.

                Requirements for this application is DOS 3.x or higher, 384k
            memory and one drive.  A hard disk is highly recommended since
            file capacities are virtually unlimited and performance is
            greatly enhanced.  You will probably run out of floppy space
            otherwise.

            NOTE:  A proper CONFIG.SYS file is also required.  If you have
            problems running the program, see CONFIG.SYS at the end of this
            document file.

                A list of the required files are at the end of this document
            file.  Make sure all files are in the same directory.  The
            program is started by entering PCBID which will load the Btrieve
            program properly and then run the PC-BID program.

                If you like this program, registration is 35.00.  You will
            then be sent the registered version which allows for additional
            user defined overhead factors which could come in handy for
            additional cost burdens such as out-of-town, storage, etc.
            It will also create bid prices by percentage factor over all
            costs.  This could be useful for checking bid items as well as
            establishing unit bid prices.  Some contractors use the program
            and this feature just to check other complex estimating programs
            they have to use.


                Feedback is welcome.  Your continued support is appreciated.

                                    I. J. Smith
                                    9795 Rustling Oaks
                                    Baton Rouge, La. 70818

                                       - - - - -








                As stated above, the program allows for two ways to maintain
            unit labor costs, time and monetary.  A rate is assigned to each
            bid created and is thus used with the time data in each record.
            For those wishing to maintain monetary costs, this rate should be
            left to the default of 1.  Notice however, that total labor costs
            can still be manipulated with this feature, leaving unit costs
            unchanged.  This can be useful for "what if" cost purposes.

                As an example, to increase or decrease total labor costs by
            5 percent, the rate is changed to 1.05 or .95 respectively.  This
            cost will be reflected on the reports only and will not change
            your existing bid data.

                You will notice that default fields are used frequently,
            simply press ENTER to accept these values.  The cursor keys are
            also allowed to move from one field to another and will accept
            defaults also.  Program is designed to maintain three decimal
            fields which should not create any problems for most users.  Some
            contractors have items that need these decimal positions.  The
            ESC key is used frequently to restart or exit data entry screens.
            The F10 key is used to process data entry screens when input is
            complete.  You do not need to exit all fields to save the data.
            Menu options can be selected by number or cursor keys.  Where
            allowed, the PgUp and PgDn keys are displayed on the screen
            for browsing purposes.



                           SUGGESTIONS FOR DIFFERENT USERS

                The application is very versatile.  You will find many
            features that you may never use.  I have tried to make the
            program useful to all contractors and at the same time keep it
            fast and simple to use.  In programs, quantity of features
            usually means complexity and time consuming data entry.  By
            monitoring your costs and keeping a good updated master bid file
            such as the one in this program, your bidding should be much
            easier, along with more accurate costs.

                I hope you take a little time to become familiar with the
            program's features and capabilities.  Following are suggestions
            which you may find useful for your own bid needs.

                As stated above, you can use a time based bid file for your
            labor costs.  Rates can then be entered in the job name file for
            various job rates.  This can be very useful for some contractors
            not having various labor rates.  I don't suggest mixing your
            master bid files with both time and monetary labor costs until
            you become familiar with the program.  You may then find by
            adding a T or M to your master bid item numbers helpful, (T for
            time, M for monetary) so as to bid jobs with the appropriate job
            labor rate.

                Contractors having various labor rates will find that
            monetary values are needed in their bid master file.  Labor
            rates in job name files should then be left at 1.00 unless you
            wish to use it to manipulate the labor costs for different jobs.
            Remember, you can change all labor costs with the change all
            option also.







                Building contractors having standard jobs (jobs whose
            quantities do not change) will probably find that establishing
            standard bids and maintaining those costs and prices may be more
            effective than maintaining a large bid master file.  Updates
            can then be done on a regular basis.  For example, you could
            have bathroom bids, kitchen bids, etc. that could be used for
            an item in a main bid.

                Some contractors may need to create separate small bids
            representing one bid item in the main bid...for subcontractor
            prices, etc.  This can easily be done, and use of the selective
            bid field listings could be very useful for this purpose.  For
            example, you may have an item in your main bid number 1000
            for electrical.  You may wish to create a job number 1000E so
            as to relate it to the main bid.

                Please keep in mind that the master bid file records are
            kept sorted by their numbers.  A good numbering system for
            adding records is essential in maintaining a good bid master
            file.

                For those requiring a large bid master file, the bid item
            numbers allow for both numeric and alphabetic characters.  You
            may wish to maintain several bid items for the same unit of work
            by adding digits.  Examples could be 10011, 10012 and 10013,
            where 1 could stand for your lowest cost and prices, 3 for high
            and 2 for medium, etc.  I have found this to be very useful
            through the years I have been estimating and bidding jobs.
            Although you can easily change the costs in a bid, you may find
            less changes are necessary by using this method in establishing
            your bids.  (Of course, many items may require more records then
            above).

                A sample bid number 100 is included for fast trial purposes.
            Master item numbers 1, 101, 202 and 303 are also included.  Please
            experiment with these items.  They can be deleted when no longer
            needed.  After some practice, I think you will find the program
            to be very easy to use, fast and reliable.

                Following are instructions in the order of the main menu
            options, with sub-menus described under the menu option calling
            it.  Pop up windows are used for prompts and informational
            purposes where needed.



                        PC-BID  (INSTRUCTIONS BY MENU OPTIONS)

            MENU OPTION 7. Company Data

                This option is introduced first since it is the first to be
            executed on startup.  A sample file has been created and you
            will need to change the information to tailor the costs for your
            particular uses.  The values used are only for testing purposes
            and examples.











                The following information will be needed to properly install
            the application.  Any field you do not need, or choose not to
            use, may be eliminated by entering zeroes in the field.  The
            information may still be used in the future with this option.
            ALL PERCENTAGES MUST BE ENTERED AS DECIMAL VALUES (12 percent
            must be entered as 0.12).  Some estimators may need to change
            some of these values for each bid.  Your accountant and/or
            insurance agent should be able to furnish you with these
            percentage factors.

                When choosing this option, a pop-up menu will appear.  The
            first option is for changing the company name, address and phone
            number.

                The second option is for entering company data for indirect
            overhead cost factors as follows:


            Terms:            (Any data you wish printed on proposals.)

            Percentages:

                  Payroll Taxes on labor costs.
                  Worker's comp or other labor based insurance.
                  Insurance on equipment costs.
                  Insurance on sub-contractor's costs.
                  Insurance based on bid.
                  Bond Premium based on bid.
                  Sales taxes on materials.
                  Overhead on sub-contractor's costs.
                  Overhead based on direct costs (Labor, Equipment,
                           Materials (sales taxes included.)


                For convenience purposes, the following will default in
            their respective fields of the Job Name screens.  You can change
            them in the bid name file as needed or when creating new bid
            name records.

                  Default labor rate
                  Default sales tax rate used on proposals (If any)


            MENU ITEM 1. BID NAMES

                In order to create a bid, you must first establish a job
            name record. This record will contain the bid number, job name,
            job description, labor rate and proposal sales tax rate if used.
            Letters as well as numbers are allowed for bid numbers.

                A pop-up menu will appear when choosing this option.  The
            first choice is for adding and changing data.  If you enter an
            existing bid number, a tone will be heard and the current data
            will be displayed for changes.  Otherwise, a blank data entry
            screen will be displayed for the new bid.

                The second option is for deleting bids.  It's important to
            note that all items pertaining to the bid will be deleted with
            this option.  Use this option when a bid is no longer needed.







            MENU ITEM 2.  ADD BID ITEMS

                Create or add new bid items with this option.

                You will be prompted for the job number, item number and the
            master file item number to be used.  The job number must exist in
            the job name file and the master file item number must exist in
            the job cost master file.  You can reuse the same master file
            item number as frequently as needed for your bid items.  A blank
            master record with a number such as 1 can be handy to enter bid
            items not needed in the master file.  You can then enter bid data
            at this time or wait and enter it with the change bid option 3.

                The bid item number determines the order of the listing on the
            printer. The program will automatically increment these numbers
            by 1.  Some may wish to use larger item numbers so as to insert
            missed or new items later.  Duplicates are not allowed.

                The master job cost data will then be displayed and you will
            be prompted for the quantities to be used for this bid item.  You
            can also change any data you wish at this time or change it later
            with option 3 below.  Press F10 to save this bid item when ready.
            An option is also available to change the master file data
            displayed.  By pressing PgUp you can step backwards thru the
            master file, step forward by pressing PgDn.  This feature can
            obviously be very useful in deciding which cost you wish to
            choose (assuming you have multiple costs for the same bid item
            and their record numbers are closely related).  Locating items
            in a data file which may have thousands of records is not what
            you want to use this option for.


            MENU ITEM 3.  CHANGE BID ITEMS

                When your bid file is created with the above options, you
            can now make bid changes as needed.  This includes all data
            inserted from the bid master file, description, unit, costs, etc.

                The program will prompt you for the bid number and item
            number to be changed.  You may have to use the report menu to
            get a listing in order to make the changes.  You can also step
            forwards or backwards to locate items in a bid.  This is done
            with the PgUp and PgDn keys.  Remember however, you must use
            the F10 function key to save changes to an item.  This feature
            can be very useful to browse through a bid in order to make
            changes as necessary.  To avoid errors, the program will only
            step thru the bid number called for.

                Remember, you can change all the values at one time with
            option 5 below.


            MENU ITEM 4.  DELETE BID ITEMS

                This option allows you to delete items from a bid.  You will
            be prompted for the item number to be deleted.










            MENU ITEM 5.  GROUP CHANGES

                This option allows you to change all common fields in a bid
            by percentage factor.  A pop-up menu will allow you to choose
            which fields to change.  For example; if you choose the labor
            field and want to increase all labor field costs by 5%, enter
            1.05 at the prompt.  To decrease the costs by 5%, enter .95 at
            the prompt.

                Some restrictions have been added to avoid errors.  You
            cannot use a factor greater then 2.0 or less then 0.5.  These
            two factors double or halve the existing data fields.  Should
            the need arise, simply re-use the factors again.


            MENU OPTION 6.  BID MASTER FILE

                Maintains the job cost data base used for bids.  It allows
            for labor, equipment, material and sub-contractor's costs, along
            with bid prices, description and unit description.

                Five positions are used for each job cost item.  You may use
            any combination of letters and numbers.  Remember, this file has
            virtually unlimited capacity so choose your numbering system for
            future expansion.  For consistency in your job cost listings, it
            is usually best to keep the same number of characters in your
            numbering system.  The index will maintain the records in sorted
            order by the item number.

                It should be noted again that the labor data will be
            multiplied by the labor rate used in the job name file.
            Obviously, this data can be used to store time or monetary
            values, depending on the contractor's cost system.

                A pop-up menu will appear after choosing this option.  The
            first option allows for adding and changing records.  If the
            record exists, it's data will be displayed for changes, otherwise
            a data entry screen with blanks will be displayed for the new
            record.


                The second option is for material updates.

                Since material prices are the most constantly changing cost
            factors, this option was included to make the master file
            changes easier.  Many contractors will choose not to use the
            material or sub-contractor costs in their master files, choosing
            to enter them in the bid update option instead.  If your
            material prices are fairly standard, you should find this option
            useful.


                The third option allows for deletions of master records.


            MENU OPTION 7.  COMPANY DATA

                See first option described above.








            MENU OPTION 8.  REPORTS MENU

                Several reports and optional file listings are offered.
            Pop-up menus are used for options where needed.  The following
            descriptions are in the order of the report menu options.  Please
            try them all out so as to familiarize yourself with them.  While
            explanations are brief, I don't think you will have any problems
            understanding the information contained in them.


                 OPTION 1.  PRINT BID ESTIMATE

                This report may very well be the most important of all.
            Unit costs are shown with bid extensions below them.  A summary
            sheet is generated listing the various indirect costs as well.
            The summary sheet will also show the profit or loss based on the
            estimated costs and prices used.


                 OPTION 2.  PRINT BID ANALYSIS

                This report prints the totals of direct costs, other costs,
            total cost, profit (or loss) and percentage of cost associated
            with each bid item.  This is a good report to decide which
            prices need adjustments.


                 OPTION 3.  SELECT BID LISTINGS

                This option allows for bid listings of a single field only.
            You may, for example, only want a bid listing of material fields
            to use for incoming material quotes.  Extra lines are included on
            the report for this purpose.  A listing of prices may be useful
            for bid tabulations.  A pop-up menu allows you to choose which
            field you want listed.


                 OPTION 4.  DISPLAY BID TOTALS

                This option allows for displaying a bid total on the screen.
            You may often make price changes and want to see the total bid
            amount before printing it out.  Sometimes you may know what the
            final figure should be, this is a fast way to check it out.  It
            will display the bid total and bid sales taxes.


                 OPTION 5.  PRINT PROPOSAL

                This option will print a report useful for proposal purposes.
            It can be useful as an attachment to a contract or in some cases,
            the only quote needed.


                 OPTION 6.  PRINT BID NAMES

                This option will print a name listing of all bids currently in
            your files.









                 OPTION 7.  PRINT COMPANY DATA

                This option will list the various overhead percentages
            currently being used.


                OPTION 8.   MASTER LISTINGS

                This option will print out the items in your bid master file.
            A pop-up menu will allow you to choose a full listing or only
            selected field listings...useful to maintain material costs,
            price lists, etc.


            MENU OPTION 9.  EXIT

                Closes files and returns to system.  You should always exit
            programs with the menu options when finished.  You may lose some
            data if the storage buffers are not properly flushed to disk.

            ===============================================================

                The following files are needed for this application.
            With the exception of the Company data file, you will get an
            error if these files are not present in the same directory.

                PCBID.BAT             Start up batch program
                PC-BID.EXE            Main program
                PCBIDP.LBR            Screen library
                BTRIEVE.EXE           File handler

                BNQJNAM.DAT           Job name file
                BNQJBID.DAT           Job bid file
                BNQJCOST.DAT          Master file
                BNQCMPNY.DAT          Company data file
                BNQTNADR.DAT          Company name & address

            ================================================================


                                   CONFIG.SYS file


                This application, like many others, requires a CONFIG.SYS
            file in your root directory.  Specifically, the file should
            contain two lines assigning values to the files and buffers.  A
            typical entry might look like:

                                      files=24
                                      buffers=16

                While this application does not require the numbers above,
            they are good ones to start with.  You will find many data base
            applications requiring this file as above.

                If you do have a CONFIG.SYS file in your root directory,
            check to see if it has statements similar to the above.  If it
            does not, use your editor to add these two line of code to it.








                If you do not have a CONFIG.SYS file then copy the
            CONFIG.DTA file included on the application disk into your root
            directory and rename it CONFIG.SYS.

                The above changes only go into effect when computer is first
            turned on.  After adding the above, reboot the computer and the
            program should run properly.

            ================================================================


                To print this file on your printer, enter the following at
            the DOS prompt:

                              COPY PCBID.DOC LPT1:


   ==========================================================================
                            DISCLAIMER OF WARRANTY

   THIS SOFTWARE IS SOLD "AS IS" AND WITHOUT WARRANTIES AS TO PERFORMANCE OF
   MERCHANTABILITY OR ANY OTHER WARRANTIES WHETHER EXPRESSED OR IMPLIED.
   BECAUSE OF THE VARIOUS HARDWARE AND SOFTWARE ENVIRONMENTS INTO WHICH THIS
   PROGRAM MAY BE PUT, NO WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE IS
   OFFERED.

   GOOD DATA PROCESSING PROCEDURE DICTATES THAT ANY PROGRAM BE THOROUGHLY
   TESTED WITH NON-CRITICAL DATA BEFORE RELYING ON IT.  THE USER MUST ASSUME
   THE ENTIRE RISK OF USING THE PROGRAM.  ANY LIABILITY OF THE SELLER WILL
   BE LIMITED EXCLUSIVELY TO PRODUCT REPLACEMENT OR REFUND OF PURCHASE PRICE.
   ==========================================================================

   Some other programs by this author you may wish to look into:

        BID-BIZ             More complex estimating program offering
                            multiple component and phase costs tied to
                            each bid or primary item, direct and indirect
                            costs burdens...

        COST BIZ            Job cost program.

        WYS-AR              Accounts receivable program.

        EIMS                Equipment Inventory and Maintenance Scheduler.

        EASY QUOTE          Product quotes and cost estimates.

        EASY INVENTORY      Easily adapted for in-house uses.


                           - Others -




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1955

     Volume in drive A has no label
     Directory of A:\

    FILE1955 TXT      1925  12-29-89  12:06p
    PC-BID   EXE    124054  11-01-89   3:23a
    PCBIDP   LBR     25408  11-01-89   1:56a
    BNQJBID  DAT     10752  11-01-89   1:04a
    BNQJNAM  DAT      1536  11-01-89   1:04a
    BNQJCOST DAT     12288  11-01-89   1:05a
    BNQCMPNY DAT       254  11-01-89   1:04a
    BNQTNADR DAT       136  11-01-89   1:03a
    PCBIDP   DOC     26497  11-01-89   3:15a
    PCBID    BAT        40  11-01-89   2:01a
    CONFIG   DTA        22  11-01-89   3:15a
    BTRIEVE  EXE     32684  10-02-89   2:33p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-29-89  12:55p
           14 file(s)     236174 bytes
                           78848 bytes free
