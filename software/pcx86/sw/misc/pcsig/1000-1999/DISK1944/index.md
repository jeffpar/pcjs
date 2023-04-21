---
layout: page
title: "PC-SIG Diskette Library (Disk #1944)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1944/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1944"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PELTON COMPUTER CONSULTANTS"

    Here are five utility programs with five different purposes, but all
    helpful, easy to use, and well-documented.
    
    Given a starting balance, interest rate, term, and an ending balance
    (lower than the starting balance), DISTRIB will immediately calculate
    the amount of money that you may take out of your interest-bearing
    account (withdrawal amount) so that your money decreases to the ending
    balance over the term.
    
    FUTURE does the same problem but calculates the deposit amount when the
    ending balance you desire is higher than the starting balance.  Both of
    these equations can be tricky with interest bearing accounts.
    
    PAYMENTS is used to print range-and-spreads to the screen or to
    your printer.  You are asked for a starting interest rate which forms a
    spread in increments of 0.5 across the top, and you are asked for a
    starting value of another quantity which is spread in appropriate
    increments down the left column.  In between is a checkerboard of
    values around which your eye may peruse so that you may hone in on an
    interest rate that's best for you.
    
    The SED utility program is a "stream editor." You run the program with
    three qualifiers: the name of the file to be worked on, the old string,
    and the new string. The stream editor then transforms the old string
    into the new string without having to enter a wordprocessing program.
    The SED program works only with ASCII files.
    
    THINGS-TO-DO is a program to help you organize your lists of things to
    do, for example, lists of prospects, appointments, repairmen, phone
    numbers, action items for work projects, events leading up to a
    closing, lists of parts to buy for repairing your house or remodeling,
    grocery lists, lists of friends and their telephone numbers, party
    supplies, or any list limited only by your imagination.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## G5LOAN.DOC

{% raw %}
```

  MANUAL (Ver 1.41) FOR THE "G5LOAN" PROGRAM, Ver 1.4 by:

          Pelton Computer Consultants / Stephen J. Foss
          P.O. Box 687
          Ipswich, MA 01938         Tel:  (508)356-7621,  (508)356-0571

                      TABLE OF CONTENTS BY SECTION NUMBER

   1.   What is the G5LOAN program, and what does it do?
   2.   Features.
   3.   How to print or view this manual.
   4.   Files included with this release.
   5.   Registration procedures and donation.
   6.   Hardware requirements.
   7.   Intended audience for the G5LOAN program.   
   8.   Quick run.  How to run the main program.
   9.   Installing the computer program.
  10.   The questions the computer will be asking you.
  11.   Exiting the program. 
  12.   Entering the Principal.
  13.   Entering the Interest Rate.
  14.   Entering the Compounding Frequency.
  15.   Displaying a Schedule.
  16.   Entering the optional Job Number.
  17.   Entering the optional client's name and address.
  18.   Schedule printing.
  19.   Support for the author.
  20.   Other reasons to register.
  21.   Differences between the Shareware version and the registered version of
        this program.  
  22.   Error messages and problems that may be encountered.
  23.   Known bugs.
  24.   Disclaimer.
  25.   Copyright infringement.
        REGISTRATION FORM FOR:   G5LOAN Program
        USER FEEDBACK FORM FOR:   G5LOAN Program

  1.  What is the G5LOAN program, and what does it do?
  This loan program is not just another "run of the mill" loan scheduler. 
  G5LOAN will print out loan schedules for your documentation, loan summary 
  information, summary-by-years of interest and principal paid, and last pay- 
  ment.  The loan calculator will calculate the payment, principal, rate, or 
  term, if you know three out of four of these quantities.  Your G5LOAN pro- 
  gram will also calculate the add-on interest amount for installment loans as 
  well as show you the current rebate and the current payoff.  How many times 
  have you had to call your bank and ask for this information?   Suppose you 
  have a $3,000 loan.  The interest rate is 13.5%.  Compounding is monthly and 
  the term is 42 months.  The loan calculator immediately calculates the pay- 
  ment as $90.03 per month and the add-on interest as $781.26, bringing the 
  total payback (sometimes called the "deferred payment price") to $3,781.26.  
  With G5LOAN you are able to calculate and document six types of loans: 

         1.  regular direct-reduction, with level monthly payments,
         2.  regular direct-reduction, with twice-monthly payments,
         3.  regular direct-reduction, with payments every-2-weeks,
         4.  add-on interest installments according to the rule of 78's,
         5.  conventional old-fashioned - payments decrease with time,
         6.  direct-reduction using different compounding periods.
  
  2.  Features.  The program offers you the following features:
        o   Full glorious, attractive color screens, or black & white (mono)
        o   Fancy reports to screen or printer
        o   Different compounding frequencies
        o   Pause or quit during report output
        o   Easy-to-understand queries (questions) - you don't need financial
            training to use this program
        o   Escape or quit at any time
        o   Client's name and address block is saved for convenience
        o   This program aids you in solving serious financial-calculation  
            problems
        o   Fast loading
        o   The program is well thought out; people who use it like it
        o   Fast execution
        o   Continuous dedicated support by the author
        o   Excellent documentation
        o   This program will increase your productivity and give you a true
            sense of accomplishment
        o   Information is where you need it.
  
  3.  How to print or view this manual.

               Method 1:     PRINT G5LOAN.DOC
               Method 2:     COPY G5LOAN.DOC LPT1

  To view the manual on your screen just type:  TYPE G5LOAN.DOC.  If you wish 
  to stop the screen at any time simply press the "pause" key, and then press 
  <ENTER> to restart, or press ^S (this means hold down the <CTRL> key with 
  one finger and press the S key) to stop the screen and ^Q to restart.  To 
  make our computing lives easier, there are some very nice screen viewing 
  programs available from your shareware dealer. 

  4.  Files included with this release.

               G5LOAN.DOC       The document file you're reading now
               G5LOAN.COM       The computer program itself
               G5LOAN.CHN       More of the computer program
               G5LOAN.NAD       The client name & address storage file

  5.  Registration procedures and donation.
  See below for registration procedures.  The suggested donation is $22.00.

  6.  Hardware requirements.
  You'll need an IBM PC, XT, AT, or compatible computer with at least one 
  floppy disk drive (unless you plan to run from a diskless workstation) with 
  384K ("K" loosely stands for 1,000 or exactly 1,024 bytes) of memory, pref- 
  erably a color monitor but mono will work fine (see "Quick run" below).  The 
  speed of your computer is not a major factor but the faster the better for 
  you anyway.  You may use a dot matrix or laser printer. 

  7.  Intended audience for the G5LOAN program.   
  Anyone who need loan information or loan schedules, either for mortgage-
  type loans or for commercial (installment) loans, or creative loans be-
  tween two parties, will find G5LOAN very useful, straightforward, and pro-
  fessional looking.

  8.  Quick run.  How to run the main program.
  At the DOS prompt type:  G5LOAN.  This automatically runs the program in 
  either color mode or mono mode (black & white), according to the equipment 
  you have hooked up.  The program actually checks your computer's configura-
  tion and sets the color accordingly.  Sometimes, as in the case of a laptop 
  computer, the screen is actually mono, but the video board is CGA (Color 
  Graphics Adapter).  In this case, the program senses a color configuration, 
  hence, the mono screen washes out some colors.  Therefore, if you have a 
  mono monitor being driven from a color card, you can force the program to 
  display in black & white by typing:  G5LOAN /B.  Similarly, you may force 
  the program into color with  G5LOAN /C. 

  9.  Installing the computer program.
  If you wish to "install" this program on a hard disk, then do the follow-
  ing:  Put your floppy disk in a disk drive, say drive A:.  Change directory 
  to drive C: by typing  C: .  Now, you want to be sure you are situated in 
  the top-level (or root) directory of drive C, so you should see the prompt 
  C:\.  If you don't see this prompt, type CD \. 
  
  If you don't have a favorite directory to use such as \BIN then you can make 
  a new directory by using the MKDIR command of DOS.  Suppose you want to call 
  your new directory FINANCE, then do MKDIR FINANCE (you could also do MD 
  FINANCE since MD is a nickname for MKDIR).  Then do CD FINANCE.  If you want 
  to check your working directory you can CD and the result should be 
  C:\FINANCE.  Finally, just COPY A:*.*.  To list the commands just discussed: 

   use this to                use this if you          do this if you just
   make a dir first           already have a dir       want to run from floppy
  ----------------------------------------------------------------------------
     C:                            C:                      (insert pgm disk
     CD \                          CD \BIN                  in drive A)
     MKDIR FINANCE                 CD                       A:
     CD \FINANCE                   COPY A:*.*         
     CD                           
     COPY A:*.*                   
  ----------------------------------------------------------------------------
  To get a printout of the registration form type:  G5LOAN /R  .  To run the
  program see "Quick Run" section above.

  10.  The questions the computer will be asking you.
  The program will request the principal amount, rate, compounding period, 
  optional payment amount, starting date, optional job number, and optional 
  client name. 
  
  11.  Exiting the program. 
  Pressing <ESCAPE> and sometimes E or e will either back you out of that 
  particular inquiry sequence or completely exit you from the program, depend- 
  ing on the context you are within.  Pressing the <F1> key will repeat the 
  previous question.  Suppose you made a mistake on the principal amount (you 
  typed 9000 instead of 90000), then at the interest rate inquiry just press 
  <F1> to go back to the principal amount inquiry and enter the correct 
  quantity. 
  
  12.  Entering the Principal.
  Here, the program asks how much was borrowed.  Enter any amount up to 
  $99,999,999.99.  Don't use commas or dollar signs.  Below, the user entered 
  $10,000.00.  (Type in E to exit). 
  
  Principal:
      Enter principal amount financed >10000

  13.  Entering the Interest Rate.
  Next, put in the interest rate (per year).  In the example below, the user 
  was "charged" a "yearly" percentage rate of 10.75.  (Type in E to exit). 

  Interest rate:
    Enter yearly interest rate >10.75

  14.  Entering the Compounding Frequency.
  Next, decide what compounding frequency you will be working with.  Some 
  business loans are compounded quarterly.  Most regular consumer loans are 
  compounded "monthly."  To use "monthly" you may just hit carriage return 
  <ENTER> or M.  (Type in E or <ESC> to exit). 

  Compounding Period:
    The interest rate was given as a yearly rate (APR), but
    the lender may calculate payments QUARTERLY which is every
    three months, for example. Please make the appropriate choice
    below.

     <ENTER> OR M =  compounding period is MONTHLY (typical),
              D   =  DAILY,
              W   =  WEEKLY,
              2   =  EVERY TWO WEEKS,
              T   =  TWICE-MONTHLY,
              Q   =  QUARTERLY,
              S   =  SEMI-ANNUALLY,
              A   =  ANNUALLY
  
    Enter a letter on left (or just hit <ENTER> for MONTHLY) >
  
  15.  Displaying a Schedule.
  After all data is entered, the program brings you to a summary screen from 
  which each entry may be further changed by choosing the corresponding num-
  ber.  When all data is correct you may proceed to the next menu, the output 
  menu, from which you may display or print a schedule, last payment, summary,
  or yearly totals of interest and principal paid.  If you selected printed 
  output, the program will request a job number (any arbitrary number).
  
  16.  Entering the optional Job Number.
  You may enter a job number, or hit <ENTER>.  Below, the user put in job 
  number 909.  (Type in E to exit). 

  Job Number:
    Would you like to give this report a job number, 'e' to exit,
    or press <ENTER> for no job number >909

  17.  Entering the optional client's name and address.
  Next, you may enter your name and address or your friend's or client's.  The 
  computer "pulled" the name and address shown below from the disk.  You are 
  asked if you wish to keep it on put in a new name and address.  The name and 
  address are stored to help you save time and energy when processing multiple 
  schedules for the same party. (Type in E to exit). 
  
  Client:
     Enter client name, address, etc.... press <ENTER> for no name, etc.
  
    Pelton Computer Consultants
    P.O. Box 687
    Ipswich, MA 01938
  
    If you want the same client, type 'k' or type 'n' for a new client

     'K' = KEEP  -or-  'N' = NEW ONE  (K/N)

    Pelton Computer Consultants
    P.O. Box 687
    Ipswich, MA 01938
  
  18.  Schedule printing.
  Finally, the schedule starts to print.  Press the <ESCAPE> key to stop the 
  printing.  The bottom line tells you for whom the report is being printed.
  
  ---------------------------------------------------------------------------
   Report now printing....hit <ESC> to stop...        Stephen J. Foss      1
  
  19.  Support for the author.
  The suggested donation for this program is only $22.00.  Please register. 
  The authors of Shareware software work very hard to make good programs which 
  are easy-to-use, useful, and help the computer users to be more productive. 
  The small suggested donation allows us to put the user on our active cust-
  omer list which gives the user many benefits.  We are always releasing 
  newer-version upgrades and program enhancements for you.  If you like this 
  program, use it, and find it beneficial, then please make the small sug- 
  gested donation to the author, and you will become his registered user.  We 
  would like to stay in touch with you.  Use the forms below.  Thank you very 
  much.   The author is a member of the Association of Shareware Programmers. 
  The author who conceived, designed, programmed, and perfected the computer
  programs of Pelton Computer Consultants is Stephen J. Foss, B.S., M.S. (Phy-
  sics), M.S.E.E., M.B.A.

  20.  Other reasons to register.
       Here's what you get when you register:
            a.  An immediate upgrade to the newest available version
            b.  The accompanying newest manual release
            c.  One or more free interim upgrades for major fixes if
                necessary (program plus manual)
            d.  One more free upgrade (program and manual) to the next
                major release when its ready
            e.  Six (6) months worth of telephone support relating to
                use of the program with friendly, patient guidance
            f.  Regular notices of new programs and services
            g.  A free subscription to our product newsletter for the
                life of your registration, which is one (1) year from
                the date of your registration
            h.  The status of valued customer who gets automatic top
                priority on your calls, programming fixes and suggestions,
                and all customer-support issues
            i.  Your source of knowledgeable computer-aided financial prob-
                lem solving.
  
  Please register if you are using the program now, have been using it, or 
  plan to use it in the future.  Thank you for your support in our programming 
  efforts.

  21.  Differences between the Shareware version and the registered version of
  this program. The Shareware and registered versions are identical at release
  time.
  
       The registered version will have (in future revisions):
          a.  other features not discussed here, but in the planning stages.
          b.  quick data entry (using arrow keys to move up and down, then 
              enter data) as well as verbose data entry.
          c.  more human error trapping.
          d.  possible fancier menuing.

       The registered version doesn't have:
          e.  requests for a donation upon program exit;
          f.  registration form printing using the /R qualifier.

  22.  Error messages and problems that may be encountered.
  If a critical part of the payment calculation is missing, the message, 
  "Insufficient data" may be displayed.

  23.  Known bugs.   None at this time.

  24.  Disclaimer.
  In no event will the author be liable for any damages, including any lost 
  profits, lost savings or other incidental or consequential loss or damages 
  arising out of the use of- or the inability to use- this program -- even if 
  the author has been advised of the possibility of such damages. The author 
  makes no warranties, either express or implied, respecting the software, its 
  quality, performance, merchantability, or fitness for any particular 
  purpose. 

  25.  Copyright infringement.
  This program is protected under the copyright laws of the U.S.  This pro-
  gram is not public domain; it is released to the shareware distribution 
  channel as shareware.  Users and shareware vendors may copy it freely and 
  distribute it.  This program may not be sold, nor copied and sold, for 
  profit or under a value-added scheme (to increase the value of a computer 
  system, etc.) or under a new name, etc., because the author reserves all 
  copyright law rights.  The author has the reasonable intent of hoping for
  new registrants obtained from the shareware distribution channel, but does
  not want the program to be stolen by any person or company.  Any person or
  company interested in purchasing the rights to this program should contact
  the author.

  

    
        REGISTRATION FORM FOR:   G5LOAN Program,  Donation = $22.00


        Today's Date________________,19______

        Name_______________________________________________________

        Company____________________________________________________

        Address____________________________________________________

        City, State, Zip___________________________________________

        Daytime telephone__(_______)_________________ext.__________
  


        [ ] $22.00 Check Enclosed.  (Make payable to PELTON COMPUTER)
  

        Charge $22.00 to my  [ ] MasterCard   [ ] Visa  (Must fill in below)

  
               Card #________________________________________

               Expiration Date_______________________________

               Signature_____________________________________



 Send free info about:
   [ ] Other Pelton Computer programs available from your Shareware dealer.
   [ ] Pelton's Financial Utilities.   [ ] Pelton's financial-calc services.
   [ ] Pelton's Financial Utilities Problem-Example Book.
   [ ] Understanding Your Home Mortgage Loan Booklet.      
  

        To register, mail completed registration form and donation to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938





        USER FEEDBACK FORM FOR:    G5LOAN Program

        Likes, dislikes, features wanted, problems?  List below:

        Likes___________________________________________________________

        ________________________________________________________________

        Dislikes________________________________________________________

        ________________________________________________________________

        Features wanted_________________________________________________
                                        
        ________________________________________________________________

        Problems, bugs__________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want something customized?______________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want us to program something
        special for you?________________________________________________

        What?___________________________________________________________

        ________________________________________________________________

        Remarks_________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Mail completed Customer Feedback Form to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938
```
{% endraw %}

## IRA.DOC

{% raw %}
```

  MANUAL (Ver 1.41) FOR THE "IRA CALC" PROGRAM, Ver 1.4 by:

          Pelton Computer Consultants / Stephen J. Foss
          P.O. Box 687
          Ipswich, MA 01938         Tel:  (508)356-7621,  (508)356-0571


                      TABLE OF CONTENTS BY SECTION NUMBER

   1.   What is the IRA CALC program, and what does it do?
   2.   Features.
   3.   How to print or view this manual.
   4.   Files included with this release.
   5.   Registration procedures and donation.
   6.   Hardware requirements.
   7.   Intended audience for the IRA CALC program.   
   8.   Quick run.  How to run the main program.
   9.   Speeding up or slowing down parts of the program.
  10.   Summary of run-time qualifiers.
  11.   Installing the computer program.
  12.   Running the computer program.
  14.   The questions the computer will be asking you.
  15.   The summary.
  16.   Exiting the program. 
  17.   The abbreviated schedule.
  18.   The full schedule.
  20.   Support for the author.
  21.   Other reasons to register.
  22.   Differences between the Shareware version and the registered version of
        this program.  
  23.   Known bugs.
  24.   Disclaimer.
  25.   Copyright infringement.
        REGISTRATION FORM FOR:   IRA CALC Program
        USER FEEDBACK FORM FOR:   IRA CALC Program

  1.  What is the IRA CALC program, and what does it do?
  IRA CALC is a computer program that calculates the ending balance for a 
  money-growth financial problem like that of an individual retirement 
  account.  The program accepts an initial amount (when you open the account, 
  say), a recurring monthly amount, and a recurring yearly amount, with the 
  associated deposit dates.  A summary of information, an abbreviated 
  schedule, and a full schedule can be printed or displayed.  The IRA CALC 
  program solves many growth problems; not just ira's.  Compounded daily 
  interest is used in the calculations. 

  As an example, consider an IRA with interest rate 5.5%, an initial deposit 
  of $100 on Feb. 2, 1989, a recurring monthly deposit of $50 which first 
  starts on Mar. 25, 1989, and a recurring yearly deposit of $500 which starts 
  on Apr 15, 1989. The IRA program calculated the final balance as $6,439.28.
  
  2.  Features.  The program offers you the following features:
        o   Full glorious, attractive color screens, or black & white (mono)
        o   Fancy reports to screen or printer
        o   Accepts three type of financial data:  initial deposit amount, 
            monthly deposit amount, and yearly deposit amount
        o   Pause or quit during report output
        o   Easy-to-understand queries (questions) - you don't need financial
            training to use this program
        o   Escape or quit at any time
        o   Easy to change data and rerun the program
        o   This program aids you in solving serious financial-calculation  
            problems
        o   Fast loading
        o   The program is well thought out; people who use it like it
        o   Continuous dedicated support by the author
        o   Excellent documentation
        o   This program will increase your productivity and give you a true
            sense of accomplishment
        o   Information is where you need it.
  
  3.  How to print or view this manual.

               Method 1:     PRINT IRA.DOC
               Method 2:     COPY IRA.DOC LPT1

  To view the manual on your screen just type:  TYPE IRA.DOC.  If you wish 
  to stop the screen at any time simply press the "pause" key, and then press 
  <ENTER> to restart, or press ^S (this means hold down the <CTRL> key with 
  one finger and press the S key) to stop the screen and ^Q to restart.  To 
  make our computing lives easier, there are some very nice screen viewing 
  programs available from your shareware dealer. 

  4.  Files included with this release.

               IRA.DOC       The document file you're reading now
               IRA.COM       The computer program itself

  5.  Registration procedures and donation.
  See below for registration procedures.  The suggested donation is $22.00.

  6.  Hardware requirements.
  You'll need an IBM PC, XT, AT, or compatible computer with at least one 
  floppy disk drive (unless you plan to run from a diskless workstation) with 
  384K ("K" loosely stands for 1,000 or exactly 1,024 bytes) of memory, pref- 
  erably a color monitor but mono will work fine (see "Quick run" below).  The 
  speed of your computer is not a major factor but the faster the better for 
  you anyway.  You may use a dot matrix or laser printer. 

  7.  Intended audience for the IRA CALC program.   
  Anybody who is interested in money growth needs the IRA CALC program. You
  don't have to be a financial advisor, attorney, or money professional.

  8.  Quick run.  How to run the main program.
  At the DOS prompt type:  IRA.  This automatically runs the program in 
  either color mode or mono mode (black & white), according to the equipment 
  you have hooked up.  The program actually checks your computer's configura-
  tion and sets the color accordingly.  Sometimes, as in the case of a laptop 
  computer, the screen is actually mono, but the video board is CGA (Color 
  Graphics Adapter).  In this case, the program senses a color configuration, 
  hence, the mono screen washes out some colors.  Therefore, if you have a 
  mono monitor being driven from a color card, you can force the program to 
  display in black & white by typing:  IRA /B.  Similarly, you may force 
  the program into color with  IRA /C. 

  11.  Installing the computer program.
  If you wish to "install" this program on a hard disk, then do the follow-
  ing:  Put your floppy disk in a disk drive, say drive A:.  Change directory 
  to drive C: by typing  C: .  Now, you want to be sure you are situated in 
  the top-level (or root) directory of drive C, so you should see the prompt 
  C:\.  If you don't see this prompt, type CD \. 
  
  If you don't have a favorite directory to use such as \BIN then you can make 
  a new directory by using the MKDIR command of DOS.  Suppose you want to call 
  your new directory FINANCE, then do MKDIR FINANCE (you could also do MD 
  FINANCE since MD is a nickname for MKDIR).  Then do CD FINANCE.  If you want 
  to check your working directory you can CD and the result should be 
  C:\FINANCE.  Finally, just COPY A:*.*.  To list the commands just discussed: 

   use this to                use this if you          do this if you just
   make a dir first           already have a dir       want to run from floppy
  ----------------------------------------------------------------------------
     C:                            C:                      (insert pgm disk
     CD \                          CD \BIN                  in drive A)
     MKDIR FINANCE                 CD                       A:
     CD \FINANCE                   COPY A:*.*         
     CD                           
     COPY A:*.*                   
  ----------------------------------------------------------------------------
  To get a printout of the registration form type:  IRA /R  .  To run the
  program see "Quick Run" section above.

  Every once-in-a-while DOS doesn't correctly copy a program, and it may not
  work right away or at some later point during execution.  If the program
  doesn't work try recopying it or maybe use the /V (verify) qualifier on the
  copy command as:  COPY/V A:*.*.  
  
  12.  Running the computer program.
  Put the disk in floppy disk drive and type in IRA (see sections 6, 7, and 
  8 above).  The standard Pelton screen will come right up, and then ask a 
  group of questions (see below).  At any question, you may press <ESCAPE> to 
  exit the program. 

  14.  The questions the computer will be asking you.
  Below is shown a typical session of the IRA CALC program:

     Enter Annual Interest Rate (e.g, 7.5, E=exit) >5.5

     Enter Total Number of Years >5
     Enter Total Number of Months >0
        5 Years, and 0 Months for 60 Total periods

     Initial Deposit Amount:
     This is the amount you first deposited when you opened your account.
     Enter Initial Deposit Amount = 100

     Enter Initial Deposit Date (MMDDYY) = 02-01-89

     Monthly Contribution Amount:
     This is the recurring monthly amount you plan to put into your IRA
     every month.  If zero, just hit <ENTER>, or enter 0.
     Enter Monthly Contribution Amount = 50

     Monthly Contribution Date:
     This is the date of your FIRST monthly contribution.  The day of
     the month will be used in the calculations.
     Enter Monthly Contribution Date (MMDDYY) = 03-25-89

     Yearly Contribution Amount:
     If you plan to make a yearly contribution perhaps at tax time, put
     amount here.  If zero, just hit <ENTER>, or enter 0.
     Enter Yearly Contribution Amount  = 500

     Yearly Contribution Date:
     This is the date of your YEARLY recurring contribution. It will be
     used in the calculations.
     Enter Yearly Contribution Date (MMDDYY)  = 04-15-89
  
 Skip in-between displays and show a summary report (S=skip to summary/N=no)

  15.  The summary.

       Summary Statistics:
        Total Number of Periods  =  60

        Annual Interest Rate     =   5.5000
        Daily Interest Rate      =  .000150685

        Initial Deposit Amount   =   100.00
        Initial Deposit Date     =   02-01-89

        Regular Monthly Contribution      =   50.00
        Regular Monthly Contribution Date =  03-25-89

        Regular Yearly Contribution       =    500.00
        Regular Yearly Contribution Date  =  04-15-89

        Grand Total Interest Gained       =     889.28
        Grand Total Contributions Made    =   5,550.00

        Final Balance = $ 6,439.28
                         =========

  --------------------------------------------------------------------------
               Would you like a prinout of this page?  (Y/N)

  16.  Exiting the program. 
  Pressing <ESCAPE> and sometimes E or e will either back you out of that 
  particular inquiry sequence or completely exit you from the program, depend- 
  ing on the context you are within.  Pressing the <F1> key will repeat the 
  previous question.  Suppose you made a mistake on the principal amount (you 
  typed 9000 instead of 90000), then at the interest rate inquiry just press 
  <F1> to go back to the principal amount inquiry and enter the correct 
  quantity. 
  
  17.  The abbreviated schedule.

   Total Number of   YEAR        DEPOSITS         INTEREST          BALANCE
  -------------------------------------------------------------------------
                     1989        1,100.00            36.08         1,136.08
                     1990        1,100.00           100.17         2,336.25
                     1991        1,100.00           168.03         3,604.28
                     1992        1,100.00           239.72         4,944.00
                     1994        1,100.00           315.46         6,359.46
                     1995           50.00            29.82         6,439.28

             GRAND TOTALS        5,550.00           889.28         6,439.28
                                                                ===========

  18.  The full schedule.

   Total Number of  YEAR         DEPOSITS         INTEREST          BALANCE
  -------------------------------------------------------------------------
     1   FEB        1989           100.00              .41           100.41
     2   MAR        1989            50.00              .52           150.92
     3   APR        1989           550.00             1.85           702.78
     4   MAY        1989            50.00             3.34           756.11
     5   JUN        1989            50.00             3.46           809.57
     6   JUL        1989            50.00             3.84           863.41
     7   AUG        1989            50.00             4.09           917.50
     8   SEP        1989            50.00             4.19           971.69
     9   OCT        1989            50.00             4.59         1,026.29
    10   NOV        1989            50.00             4.69         1,080.97
    11   DEC        1989            50.00             5.11         1,136.08
                                ---------        ---------
   Totals for year = 1989        1,100.00            36.08

    12   JAN        1990            50.00             5.36         1,191.44
    13   FEB        1990            50.00             5.06         1,246.50
     .    .           .               .                .                .
     .    .           .               .                .                .
     .    .           .               .                .                .
    52   MAY        1993            50.00            26.90         5,813.76
    53   JUN        1993            50.00            26.38         5,890.13
    54   JUL        1993            50.00            27.62         5,967.75
    55   AUG        1993            50.00            27.99         6,045.74
    56   SEP        1993            50.00            27.43         6,123.17
    57   OCT        1993            50.00            28.71         6,201.88
    58   NOV        1993            50.00            28.13         6,280.01
    59   DEC        1993            50.00            29.45         6,359.46
                                ---------        ---------
   Totals for year = 1994        1,100.00           315.46

    60   JAN        1995            50.00            29.82         6,439.28
                                ---------        ---------
   Totals for year = 1995           50.00            29.82


             GRAND TOTALS        5,550.00           889.28         6,439.28
                                                                ===========
  
  20.  Support for the author.
  The suggested donation for this program is only $22.00.  Please register. 
  The authors of Shareware software work very hard to make good programs which 
  are easy-to-use, useful, and help the computer users to be more productive. 
  The small suggested donation allows us to put the user on our active cust-
  omer list which gives the user many benefits.  We are always releasing 
  newer-version upgrades and program enhancements for you.  If you like this 
  program, use it, and find it beneficial, then please make the small sug- 
  gested donation to the author, and you will become his registered user.  We 
  would like to stay in touch with you.  Use the forms below.  Thank you very 
  much.   The author is a member of the Association of Shareware Programmers. 
  The author who conceived, designed, programmed, and perfected the computer
  programs of Pelton Computer Consultants is Stephen J. Foss, B.S., M.S. (Phy-
  sics), M.S.E.E., M.B.A.

  21.  Other reasons to register.
       Here's what you get when you register:
            a.  An immediate upgrade to the newest available version
            b.  The accompanying newest manual release
            c.  One or more free interim upgrades for major fixes if
                necessary (program plus manual)
            d.  One more free upgrade (program and manual) to the next
                major release when its ready
            e.  Six (6) months worth of telephone support relating to
                use of the program with friendly, patient guidance
            f.  Regular notices of new programs and services
            g.  A free subscription to our product newsletter for the
                life of your registration, which is one (1) year from
                the date of your registration
            h.  The status of valued customer who gets automatic top
                priority on your calls, programming fixes and suggestions,
                and all customer-support issues
            i.  Your source of knowledgeable computer-aided financial prob-
                lem solving.
  
  Please register if you are using the program now, have been using it, or 
  plan to use it in the future.  Thank you for your support in our programming 
  efforts.

  22.  Differences between the Shareware version and the registered version of
  this program. The Shareware and registered versions are identical at release
  time.

       The registered version will have (in future revisions):
          a.  other features not discussed here, but in the planning stages.
          b.  quick data entry (using arrow keys to move up and down, then 
              enter data) as well as verbose data entry.
          c.  possibly more human error trapping.
  
       The registered version doesn't have:
          d.  requests for a donation upon program exit;
          e.  registration form printing using the /R qualifier.

  23.  Known bugs.
  None to be reported at this time.

  24.  Disclaimer.
  In no event will the author be liable for any damages, including any lost 
  profits, lost savings or other incidental or consequential loss or damages 
  arising out of the use of- or the inability to use- this program -- even if 
  the author has been advised of the possibility of such damages. The author 
  makes no warranties, either express or implied, respecting the software, its 
  quality, performance, merchantability, or fitness for any particular 
  purpose. 

  25.  Copyright infringement.
  This program is protected under the copyright laws of the U.S.  This pro-
  gram is not public domain; it is released to the shareware distribution 
  channel as shareware.  Users and shareware vendors may copy it freely and 
  distribute it.  This program may not be sold, nor copied and sold, for 
  profit or under a value-added scheme (to increase the value of a computer 
  system, etc.) or under a new name, etc., because the author reserves all 
  copyright law rights.  The author has the reasonable intent of hoping for
  new registrants obtained from the shareware distribution channel, but does
  not want the program to be stolen by any person or company.  Any person or
  company interested in purchasing the rights to this program should contact
  the author.

  
    
        REGISTRATION FORM FOR:   IRA CALC Program,  Donation = $22.00


        Today's Date________________,19______

        Name_______________________________________________________

        Company____________________________________________________

        Address____________________________________________________

        City, State, Zip___________________________________________

        Daytime telephone__(_______)_________________ext.__________
  


        [ ] $22.00 Check Enclosed.  (Make payable to PELTON COMPUTER)
  

        Charge $22.00 to my  [ ] MasterCard   [ ] Visa  (Must fill in below)

  
               Card #________________________________________

               Expiration Date_______________________________

               Signature_____________________________________



 Send free info about:
   [ ] Other Pelton Computer programs available from your Shareware dealer.
   [ ] Pelton's Financial Utilities.   [ ] Pelton's financial-calc services.
   [ ] Pelton's Financial Utilities Problem-Example Book.
   [ ] Understanding Your Home Mortgage Loan Booklet.      
  

        To register, mail completed registration form and donation to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938





        USER FEEDBACK FORM FOR:    IRA CALC Program

        Likes, dislikes, features wanted, problems?  List below:

        Likes___________________________________________________________

        ________________________________________________________________

        Dislikes________________________________________________________

        ________________________________________________________________

        Features wanted_________________________________________________
                                        
        ________________________________________________________________

        Problems, bugs__________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want something customized?______________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want us to program something
        special for you?________________________________________________

        What?___________________________________________________________

        ________________________________________________________________

        Remarks_________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Mail completed Customer Feedback Form to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938
```
{% endraw %}

## PROFIT.DOC

{% raw %}
```

  MANUAL (Ver 1.41) FOR THE "PROFIT" SHARE PROGRAM, Ver 1.4 by:

          Pelton Computer Consultants / Stephen J. Foss
          P.O. Box 687
          Ipswich, MA 01938         Tel:  (508)356-7621,  (508)356-0571


                      TABLE OF CONTENTS BY SECTION NUMBER

   1.   What is the PROFIT program, and what does it do?
   2.   Features.
   3.   How to print or view this manual.
   4.   Files included with this release.
   5.   Registration procedures and donation.
   6.   Hardware requirements.
   7.   Intended audience for the PROFIT program.   
   8.   Quick run.  How to run the main program.
   9.   Installing the computer program.
  10.   The Sample and Real Data Bases.
  11.   The Main Menu.
  12.   The Employee List Maintenance Menu.
  13.   Adding new data records.
  14.   Adding or changing the Company Contribution.
  15.   Calculating the actual profit share.
  16.   The Report Generator.
  17.   The Backup Utility.
  18.   Administrating your data files.
  19.   Exiting the program. 
  20.   Support for the author.
  21.   Other reasons to register.
  22.   Differences between the Shareware version and the registered version of
        this program.  
  23.   Known bugs.
  24.   Disclaimer.
  25.   Copyright infringement.
        REGISTRATION FORM FOR:   PROFIT Program
        USER FEEDBACK FORM FOR:   PROFIT Program

  1.  What is the PROFIT SHARE program, and what does it do?
  The PROFIT SHARE program, using a small employee data base and an initial 
  amount called the company contribution, quickly calculates the share of 
  profit of each employee based on a weighted average of five employee fields: 
  salary, time with company (based on anniversary date), hours worked during 
  the profit-sharing year, an arbitrary factor (from 1 to 5 which may be used 
  as a "seniority" factor), and the participation flag ("YES" or "NO") which 
  states whether or not this employee participates in this profit-sharing 
  program.  The calculation takes only a second or two which may save weeks or 
  months of hand-calculation work. 
  
  2.  Features.  The program offers you the following features:
        o   Full glorious, attractive color screens, or black & white (mono)
        o   Fast point-and-shoot menus
        o   Fancy reports to screen or printer
        o   Super fast calculation of individual profit shares
        o   Pause or quit during report output
        o   Easy-to-understand queries (questions) - you don't need financial
            training to use this program
        o   Escape or quit at any time
        o   This program aids you in solving serious financial-calculation  
            problems
        o   Fast loading
        o   The program is well thought out; people who use it like it
        o   Fast execution
        o   Continuous dedicated support by the author
        o   Excellent documentation
        o   This program will increase your productivity and give you a true
            sense of accomplishment
        o   Information is where you need it.
  
  3.  How to print or view this manual.

               Method 1:     PRINT PROFIT.DOC
               Method 2:     COPY PROFIT.DOC LPT1

  To view the manual on your screen just type:  TYPE PROFIT.DOC.  If you wish 
  to stop the screen at any time simply press the "pause" key, and then press 
  <ENTER> to restart, or press ^S (this means hold down the <CTRL> key with 
  one finger and press the S key) to stop the screen and ^Q to restart.  To 
  make our computing lives easier, there are some very nice screen viewing 
  programs available from your shareware dealer. 

  4.  Files included with this release.

            PROFIT.DOC       The document file you're reading now
            PROFIT.COM       The computer program itself
            PROFIT.DAT       The real (live) data file (initially empty)
            PSSAMPLE.DAT     The sample (practice) data file (30 records)

  5.  Registration procedures and donation.
  See below for registration procedures.  The suggested donation is $34.00.

  6.  Hardware requirements.
  You'll need an IBM PC, XT, AT, or compatible computer with at least one 
  floppy disk drive (unless you plan to run from a diskless workstation) with 
  512K ("K" loosely stands for 1,000 or exactly 1,024 bytes) of memory, pref- 
  erably a color monitor but mono will work fine (see "Quick run" below).  The 
  speed of your computer is not a major factor but the faster the better for 
  you anyway.  You may use a dot matrix or laser printer for reports.

  7.  Intended audience for the PROFIT program.   
  The PROFIT share program was created for the small or medium-sized firm
  which needs a way to easily calculate each employee's share of the profit
  given the company's contribution and some information about each employee.

  8.  Quick run.  How to run the main program.
  At the DOS prompt type:  PROFIT.  This automatically runs the program in 
  either color mode or mono mode (black & white), according to the equipment 
  you have hooked up.  The program actually checks your computer's configura-
  tion and sets the color accordingly.  Sometimes, as in the case of a laptop 
  computer, the screen is actually mono, but the video board is CGA (Color 
  Graphics Adapter).  In this case, the program senses a color configuration, 
  but the mono screen washes out some colors.  Therefore, if you have a mono 
  monitor being driven from a color card, you can force the program to display 
  in black & white by typing:  PROFIT /B.  Similarly, you may force the 
  program into color with  PROFIT /C. 

  9.  Installing the computer program.
  If you wish to "install" this program on a hard disk, then do the follow-
  ing:  Put your floppy disk in a disk drive, say drive A:.  Change directory 
  to drive C: by typing  C: .  Now, you want to be sure you are situated in 
  the top-level (or root) directory of drive C, so you should see the prompt 
  C:\.  If you don't see this prompt, type CD \. 
  
  If you don't have a favorite directory to use such as \BIN then you can make 
  a new directory by using the MKDIR command of DOS.  Suppose you want to call 
  your new directory FINANCE, then do MKDIR FINANCE (you could also do MD 
  FINANCE since MD is a nickname for MKDIR).  Then do CD FINANCE.  If you want 
  to check your working directory you can CD and the result should be 
  C:\FINANCE.  Finally, just COPY A:*.*.  To list the commands just discussed: 

   use this to                use this if you          do this if you just
   make a dir first           already have a dir       want to run from floppy
  ----------------------------------------------------------------------------
     C:                            C:                      (insert pgm disk
     CD \                          CD \BIN                  in drive A)
     MKDIR FINANCE                 CD                       A:
     CD \FINANCE                   COPY A:*.*         
     CD                           
     COPY A:*.*                   
  ----------------------------------------------------------------------------
  To get a printout of the registration form type:  PROFIT /R  .  To run the
  program see "Quick Run" section above.

  Every once-in-a-while DOS doesn't correctly copy a program, and it may not
  work right away or at some later point during execution.  If the program
  doesn't work try recopying it or maybe use the /V (verify) qualifier on the
  copy command as:  COPY/V A:*.*.  
  
  10.  The sample and real data bases.
  There are two data bases that come with your PROFIT program.  One is the 
  "live" or real data base (PROFIT.DAT); the other is a sample or practice 
  data base (PSSAMPLE.DAT) with which you may experiment with all the features 
  of the program.  Upon program start, you are asked which data base you want 
  to work with.
  
                 DO YOU WANT TO USE THE SAMPLE DATA BASE,
    
                 OR THE LIVE ONE? (S/L) >
  
  Be careful not to "practice" with the real data.  See section 18 below. 

  11.  The Main Menu.  Shown below is the point-and-shoot main menu.  Just
  move your cursor using the arrow keys to highlight the desired choice and 
  press <ENTER>.
  
                   PROFIT  SHARE  PROGRAM  MAIN  MENU  
                                                               
                     1.  Employee List Maintenance (& Calc)    
                     2.  Set Company P-S Contribution          
                     3.  Reports Generator                     
                     4.  Backup Data                           
                     5.  Exit To DOS                           
  
  12.  The Employee List Maintenance Menu.
  Shown below is the employee list maintenance menu.  Notice selection #5, the 
  "recalculate" selection.  Choose #5 to recalculate and balance the finances. 
  If the company contribution os zero, the recalculate choice won't recalcu- 
  late. 

                     EMPLOYEE LIST MAINTENANCE MENU
                                                             
                    1.  Look at an Employee               
                    2.  Add an Employee                   
                    3.  Make a Change to an Employee      
                    4.  Remove an Employee Permanently    
                    5.  Recalculate the Profit Share      
                    6.  Reports Generator                     
                    7.  Exit this menu to main menu       
                                                             
  13.  Adding new data records.
  To add new employee data, choose #2 from the list employee maintenance menu. 
  Shown below is a sample session.  If you want the employee to partake of a 
  profit share, then type in "Y" (or y) in the participant field.  If you want 
  to disqualify this employee (maybe he or she doesn't want to be included, or 
  can't be included in profit sharing) then type in "N" (or n).  Also, HOURS 
  can stand for hours worked per profit-sharing season (calendar or fiscal 
  year, or whatever).  The data base holds a maximum of 500 entries, as of 
  this version.

                        ADDING  A  DATA  RECORD


          EMPLOYEE ID# (100-200):  109           PARTICIPANT (Y/N):  YES

               SOCIAL SECURITY #:  332-36-9911
                      DEPARTMENT:  HEALTH ED.

                       LAST NAME:  BINDER

                      FIRST NAME:  MARCIA W.

                      START DATE:  02-10-83
                    FACTOR (1-5):  1
                           HOURS:  2,001.00
                   ANNUAL SALARY:  26,500.00

                    PROFIT SHARE:  736.66

  14.  Adding or changing the Company Contribution.
  To create or change you company contribution amount, choose #2 from the main 
  menu (see section 11).  The company contribution is the amount of money that 
  the company is willing to divide among all participants in the profit-shar- 
  ing program.  The maximum amount is $10 Million.  An example is shown below. 

               ENTER  COMPANY  PROFIT  SHARING  CONTRIBUTION

               Company Contribution > 7,500.00
                                      
                  Contribution Date > 12-32-87
  
  --------------------------------------------------------------------------
             Press S to save data, any other key for no-save


  15.  Calculating the actual profit share.
  After you make any employee changes, or if you should change the company 
  contribution amount, you must recalculate the shares.  Choose #5 from the 
  employee list maintenance menu.  This massive calculation takes only a 
  second or so for the computer, where, by hand, it could take weeks or 
  months.

  16.  The report generator.
  The report generator menu is presented to you after choosing #3 from the 
  main menu.  The six types of sorted reports are shown below.

                       REPORT  GENERATION  MENU

                    1.  Print SHARE-LIST by ID#
                    2.  Print SHARE-LIST by LAST NAME
                    3.  Print SHARE-LIST by START DATE
                    4.  Print SHARE-LIST by SALARY
                    5.  Print SHARE-LIST by PROFIT SHARE
                    6.  Print SHARE-LIST by SOCIAL SEC.#
                    7.  Exit this menu


                       Your Choice (E=exit) >
  
  17.  The Backup Utility.
  For your convenience, a data backup utility has been included in the PROFIT
  program.  Choose #4 from the main menu to run it.  The live data base
  (PROFIT.DAT) is the one that gets backed up.  You may choose which diskette 
  drive to use.  See below for a sample session.

                          DATA BACKUP UTILITY


             BACKUP DATA TO WHICH DISKETTE DRIVE?  (A, B): A

             COPYING DATA FILE TO DISKETTE DRIVE A

             PLEASE WAIT A MOMENT....

             BACKUP FINISHED!

  18.  Administrating your data files.
  As previously mentioned, you have two data base files: a sample (PSSAMPLE 
  .DAT) and a live one (PROFIT.DAT).  You should back up your live data base 
  as often as any changes are made.  The backup utility (see section 17) backs 
  up the live data base only.  Make your backup and label it with the profit-
  share year and date.  It wouldn't hurt to make two backups.  Get some hard 
  copies of all reports, which will be used for reference, and store them 
  safely.  Then for the next profit-sharing season just modify the employee 
  fields that have changed, e.g., salary, rank, and then add and delete 
  employee entries accordingly. 

  19.  Exiting the program. 
  Pressing <ESCAPE> and sometimes E or e will either back you out of that par- 
  ticular inquiry sequence or completely exit you from the program, depending 
  on the context you are within. 
  
  20.  Support for the author.
  The suggested donation for this program is only $34.00.  Please register. 
  The authors of Shareware software work very hard to make good programs which 
  are easy-to-use, useful, and help the computer users to be more productive. 
  The small suggested donation allows us to put the user on our active cust-
  omer list which gives the user many benefits.  We are always releasing 
  newer-version upgrades and program enhancements for you.  If you like this 
  program, use it, and find it beneficial, then please make the small sug- 
  gested donation to the author, and you will become his registered user.  We 
  would like to stay in touch with you.  Use the forms below.  Thank you very 
  much.   The author is a member of the Association of Shareware Programmers. 
  The author who conceived, designed, programmed, and perfected the computer
  programs of Pelton Computer Consultants is Stephen J. Foss, B.S., M.S. (Phy-
  sics), M.S.E.E., M.B.A.

  21.  Other reasons to register.
       Here's what you get when you register:
            a.  An immediate upgrade to the newest available version
            b.  The accompanying newest manual release
            c.  One or more free interim upgrades for major fixes if
                necessary (program plus manual)
            d.  One more free upgrade (program and manual) to the next
                major release when its ready
            e.  Six (6) months worth of telephone support relating to
                use of the program with friendly, patient guidance
            f.  Regular notices of new programs and services
            g.  A free subscription to our product newsletter for the
                life of your registration, which is one (1) year from
                the date of your registration
            h.  The status of valued customer who gets automatic top
                priority on your calls, programming fixes and suggestions,
                and all customer-support issues
            i.  Your source of knowledgeable computer-aided financial prob-
                lem solving.
  
  Please register if you are using the program now, have been using it, or 
  plan to use it in the future.  Thank you for your support in our programming 
  efforts.

  22.  Differences between the Shareware version and the registered version of
  this program.  The Shareware and registered versions are identical at 
  release time. 
  
       The registered version will have (in future revisions):
          a.  other features not discussed here, but in the planning stages.
          b.  possibly more human error trapping.
  
       The registered version doesn't have:
          c.  requests for a donation upon program exit;
          d.  registration form printing using the /R qualifier.

  23.  Known bugs.  None at this time.

  24.  Disclaimer.
  In no event will the author be liable for any damages, including any lost 
  profits, lost savings or other incidental or consequential loss or damages 
  arising out of the use of- or the inability to use- this program -- even if 
  the author has been advised of the possibility of such damages. The author 
  makes no warranties, either express or implied, respecting the software, its 
  quality, performance, merchantability, or fitness for any particular 
  purpose. 

  25.  Copyright infringement.
  This program is protected under the copyright laws of the U.S.  This pro-
  gram is not public domain; it is released to the shareware distribution 
  channel as shareware.  Users and shareware vendors may copy it freely and 
  distribute it.  This program may not be sold, nor copied and sold, for 
  profit or under a value-added scheme (to increase the value of a computer 
  system, etc.) or under a new name, etc., because the author reserves all 
  copyright law rights.  The author has the reasonable intent of hoping for
  new registrants obtained from the shareware distribution channel, but does
  not want the program to be stolen by any person or company.  Any person or
  company interested in purchasing the rights to this program should contact
  the author.


  
    
        REGISTRATION FORM FOR:   PROFIT Program,  Donation = $34.00


        Today's Date________________,19______

        Name_______________________________________________________

        Company____________________________________________________

        Address____________________________________________________

        City, State, Zip___________________________________________

        Daytime telephone__(_______)_________________ext.__________
  


        [ ] $34.00 Check Enclosed.  (Make payable to PELTON COMPUTER)
  

        Charge $34.00 to my  [ ] MasterCard   [ ] Visa  (Must fill in below)

  
               Card #________________________________________

               Expiration Date_______________________________

               Signature_____________________________________



 Send free info about:
   [ ] Other Pelton Computer programs available from your Shareware dealer.
   [ ] Pelton's Financial Utilities.   [ ] Pelton's financial-calc services.
   [ ] Pelton's Financial Utilities Problem-Example Book.
   [ ] Understanding Your Home Mortgage Loan Booklet.      
  

        To register, mail completed registration form and donation to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938





        USER FEEDBACK FORM FOR:    PROFIT Program

        Likes, dislikes, features wanted, problems?  List below:

        Likes___________________________________________________________

        ________________________________________________________________

        Dislikes________________________________________________________

        ________________________________________________________________

        Features wanted_________________________________________________
                                        
        ________________________________________________________________

        Problems, bugs__________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want something customized?______________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want us to program something
        special for you?________________________________________________

        What?___________________________________________________________

        ________________________________________________________________

        Remarks_________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Mail completed Customer Feedback Form to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938
```
{% endraw %}

## TIMER.DOC

{% raw %}
```

  MANUAL (Ver 1.41) FOR THE "TIMER" PROGRAM, Ver 1.4 by:

          Pelton Computer Consultants / Stephen J. Foss
          P.O. Box 687
          Ipswich, MA 01938         Tel:  (508)356-7621,  (508)356-0571

  1.  What is the TIMER program, and what does it do?
  TIMER is a neat little utility program that lets you use your computer in 
  real time (it's not a TSR, i.e., a terminate-and-stay-resident program) for 
  a timer - like an egg timer - but with 25 different sound effects.  Via com-
  mand-line qualifiers you set the seconds or minutes between noises (sound 
  effects), the number of cycles, and the noise type (A-Z).  If you have to 
  tape record a phone call and you need a 15-second beep, use TIMER /S=15 /J. 
  TIMER can be used for games or any timed event.  It's fun to explore the 
  different sound effects.  You can even emulate a telephone's sound.

  2.  Features.  The program offers you the following features:
        o   25 different sound effects
        o   Set number of minutes between sound effects
        o   Set number of seconds between sound effects
        o   Set number of cycles for the program to run through and then end
        o   Can explore different sound effects with only one qualifier
        o   Escape or quit at any time
        o   Fast loading and execution
        o   Continuous dedicated support by the author
        o   Excellent documentation
        o   If you ever need a timer on your computer, this is it.
  
  3.  How to print or view this manual.

               Method 1:     PRINT TIMER.DOC
               Method 2:     COPY TIMER.DOC LPT1

  4.  Files included with this release.

               TIMER.DOC       The document file you're reading now
               TIMER.COM       The computer program itself

  5.  Registration procedures and donation.
  See below for registration procedures.  The suggested donation is $10.00.

  6.  Hardware requirements.
  You'll need an IBM PC, XT, AT, or compatible computer with at least one 
  floppy disk drive (unless you plan to run from a diskless workstation) with 
  256K ("K" loosely stands for 1,000 or exactly 1,024 bytes) of memory and a
  mono monitor.

  7.  Intended audience for the TIMER program.   
  Anybody who needs a computerized timer for any kind of timed event like tape 
  recording a telephone call where you must beep every 15 seconds.  

  8.  Quick run.  How to run the main program.
  At the DOS prompt type:  TIMER.  This automatically runs the program in mono 
  mode (black & white).  Just typing TIMER will give you the "usage" display: 
  

      Usage:        timer /M=i /S=j /N=k /A

      where         i is number of minutes (default = 0),
                    j is number of seconds (default = 1)
                    k is max number of cycles (default = 10000)
                    A is a sound effects type (can use A-Z, def.= A)
                    (press any key to quit)

      examples:     timer /s=2 /n=100 /F

                    timer /Q  would test Q's sound effect at 1 sec. intervals
                              (press any key to quit)

                    timer /R  would print a registration form

  9.  Examples of run-time qualifiers.
  Here is a complete sample session of TIMER: 

           timer /g /n=3 /s=2
           Seconds= 2    Max number of cycles= 3    Sound effects G
           12:45:54
           12:46:00
           Program done
  
  In the above session we requested sound effects G, 2-second intervals, and 
  only 3 cycles before the program ends. Here's another example: 

           timer /x /n=4 /s=2
           Seconds= 2    Max number of cycles= 4    Sound effects X
           12:46:45
           12:46:49
           Program done
  
  In the above session we asked for and got 2-second intervals and 4 cycles 
  using the X sound effect. 

  Here are examples of just testing out the sound effects at the default of 1-
  second intervals and infinite cycles.  To stop the program at any time, 
  press any key. 

           timer /U
           timer /b
           timer /M
  
  The qualifiers can be upper or lower case.
  
  10.  Exiting the program. 
  Press any key at any time.  Also pressing ^C or ^Break (the ^ symbol means 
  hold down the <CTRL> key, e.g., ^C means hold down <CTRL> while you tap the 
  C key) will discontinue the program. 

  11.  Support for the author.
  The suggested donation for this program is only $10.00.  Please register. 
  The authors of Shareware software work very hard to make good programs which 
  are easy-to-use, useful, and help the computer users to be more productive. 
  The small suggested donation allows us to put the user on our active cust-
  omer list which gives the user many benefits.  We are always releasing 
  newer-version upgrades and program enhancements for you.  If you like this 
  program, use it, and find it beneficial, then please make the small sug- 
  gested donation to the author, and you will become his registered user.  We 
  would like to stay in touch with you.  Use the forms below.  Thank you very 
  much.   The author is a member of the Association of Shareware Programmers. 
  The author who conceived, designed, programmed, and perfected the computer
  programs of Pelton Computer Consultants is Stephen J. Foss, B.S., M.S. (Phy-
  sics), M.S.E.E., M.B.A.

  12.  Other reasons to register.
       Here's what you get when you register:
            a.  An immediate upgrade to the newest available version
            b.  The accompanying newest manual release
            c.  One or more free interim upgrades for major fixes if
                necessary (program plus manual)
            d.  One more free upgrade (program and manual) to the next
                major release when its ready
            e.  Six (6) months worth of telephone support relating to
                use of the program with friendly, patient guidance
            f.  Regular notices of new programs and services
            g.  A free subscription to our product newsletter for the
                life of your registration, which is one (1) year from
                the date of your registration
            h.  The status of valued customer who gets automatic top
                priority on your calls, programming fixes and suggestions,
                and all customer-support issues
            i.  Your source of knowledgeable computer-aided financial prob-
                lem solving.
  
  Please register if you are using the program now, have been using it, or 
  plan to use it in the future.  Thank you for your support in our programming 
  efforts.

  13.  Differences between the Shareware version and the registered version of
  this program. The Shareware and registered versions are identical at release
  time.

       The registered version will have (in future revisions):
          a.  other features not discussed here, but in the planning stages.
          b.  possibly more sound effects later.

       The registered version doesn't have:
          c.  requests for a donation upon program exit;
          d.  registration form printing using the /R qualifier.

  14.  Disclaimer.
  In no event will the author be liable for any damages, including any lost 
  profits, lost savings or other incidental or consequential loss or damages 
  arising out of the use of- or the inability to use- this program -- even if 
  the author has been advised of the possibility of such damages. The author 
  makes no warranties, either express or implied, respecting the software, its 
  quality, performance, merchantability, or fitness for any particular 
  purpose. 

  15.  Copyright infringement.
  This program is protected under the copyright laws of the U.S.  This pro-
  gram is not public domain; it is released to the shareware distribution 
  channel as shareware.  Users and shareware vendors may copy it freely and 
  distribute it.  This program may not be sold, nor copied and sold, for 
  profit or under a value-added scheme (to increase the value of a computer 
  system, etc.) or under a new name, etc., because the author reserves all 
  copyright law rights.  The author has the reasonable intent of hoping for
  new registrants obtained from the shareware distribution channel, but does
  not want the program to be stolen by any person or company.  Any person or
  company interested in purchasing the rights to this program should contact
  the author.



    
        REGISTRATION FORM FOR:   TIMER Program,  Donation = $10.00


        Today's Date________________,19______

        Name_______________________________________________________

        Company____________________________________________________

        Address____________________________________________________

        City, State, Zip___________________________________________

        Daytime telephone__(_______)_________________ext.__________
  


        [ ] $10.00 Check Enclosed.  (Make payable to PELTON COMPUTER)
  

        Charge $10.00 to my  [ ] MasterCard   [ ] Visa  (Must fill in below)

  
               Card #________________________________________

               Expiration Date_______________________________

               Signature_____________________________________



 Send free info about:
   [ ] Other Pelton Computer programs available from your Shareware dealer.
   [ ] Pelton's Financial Utilities.   [ ] Pelton's financial-calc services.
   [ ] Pelton's Financial Utilities Problem-Example Book.
   [ ] Understanding Your Home Mortgage Loan Booklet.      
  

        To register, mail completed registration form and donation to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938



        USER FEEDBACK FORM FOR:    TIMER Program

        Likes, dislikes, features wanted, problems?  List below:

        Likes___________________________________________________________

        ________________________________________________________________

        Dislikes________________________________________________________

        ________________________________________________________________

        Features wanted_________________________________________________
                                        
        ________________________________________________________________

        Problems, bugs__________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want something customized?______________________________________

        ________________________________________________________________

        ________________________________________________________________

        Want us to program something
        special for you?________________________________________________

        What?___________________________________________________________

        ________________________________________________________________

        Remarks_________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        Mail completed Customer Feedback Form to:

               Pelton Computer, P.O. Box 687, Ipswich, MA  01938
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1944

     Volume in drive A has no label
     Directory of A:\

    CHECK    BAT       482  11-21-89  11:59p
    CHECKDIR DOC     16231  12-04-89   5:53p
    CHECKDIR EXE     45571  12-04-89   3:57p
    G5LOAN   CHN      1344  12-02-89  12:06p
    G5LOAN   COM     64896  10-11-89   4:20p
    G5LOAN   DOC     20271  12-04-89   5:52p
    G5LOAN   NAD       128  10-11-89   4:26p
    IRA      COM     53120  12-02-89  12:20p
    IRA      DOC     21840  12-02-89  12:20p
    PROFIT   COM     63488  12-07-89  12:14a
    PROFIT   DAT      1152  11-20-89  11:29a
    PROFIT   DOC     21669  12-06-89   1:15a
    PSSAMPLE DAT      4224  12-06-89  10:48p
    TIMER    COM     27264  11-22-89   3:23p
    TIMER    DOC     11940  12-04-89   5:52p
           15 file(s)     353620 bytes
                            1024 bytes free
