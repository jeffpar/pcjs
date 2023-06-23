---
layout: page
title: "PC-SIG Diskette Library (Disk #399)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0399/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0399"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCLOAN5"

    PCLOAN 5 was designed by a retired bank president who negotiated,
    originated and collected over 30,000 commercial loans.
    
    PCLOAN 5 provides analysis data for amortizing loans with output
    to the screen, disk or printed reports.  Perform almost any
    calculation needed for a business or personal loan which is amortized
    in multiple payments. It is menu-driven and includes quite a bit of
    on-line help.
    
    Use PCLOAN 5 functions to project just what a loan is going to cost and
    when.  Know what you're getting into, financially, before you take that
    final plunge.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES399.TXT

{% raw %}
```
Disk No:  399
Program Title: PCLOAN4 version 4.07sw
PC-SIG version: 3.2

Both programs on this disk are written in Microsoft Business BASIC but
have been compiled for superior speed.  PCLOAN4 provides analysis data
for amortizing loans with output either to the screen or printed
reports.  It is menu-driven and includes quite a bit of on-line help.
The second program maintains a "prospect" mailing list.

Usage:  Loan Calculations and Prospect Listings.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $39.95

File Descriptions:

1        BAT  Batch files used by MENU.BAT.
2        BAT  Batch files used by MENU.BAT.
3        BAT  Batch files used by MENU.BAT.
4        BAT  Batch files used by MENU.BAT.
5        BAT  Batch files used by MENU.BAT.
AMORTIZE DOC  Documentation file.
MANUAL   DOC  Documentation file.
PC4INFO  DOC  Documentation file.
PROBLEM  DOC  Documentation file.
REQUEST  DOC  Documentation file.
AMORTIZE PAR  Parameters file.
AMORTIZE Q&A  Informational text file.
HELP     BAT  Batch file to bring up help section.
MENU     BAT  Batch file to bring up menu of program.
MENU     SCR  Data file.
PCLOAN4  EXE  Main program.
PRINTMAN EXE  Program to print documentation.
WHATIS   IT   Program file list text file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk #399 PCLOAN4  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation for to your printer, Type:                    ║
║                         PRINTDOC (press enter)                          ║
║                                                                         ║
║ To start PCLOAN4, Type: PCLOAN4 (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```


























                                       PCLOAN4
                                     Version 4.x

                                Bottom Line Software
                                   P. O. Box 1804
                             Burleson, Texas 76028-1804
                                    817-447-5524

                             Copyright 1984,85,86,87,88






                                  TABLE OF CONTENTS

          LICENSE AGREEMENT AND WARRANTY . . . . . . . . . . . . . . .    1

          INTRODUCTION . . . . . . . . . . . . . . . . . . . . . . . .    2

          TO INSTALL THE PROGRAM ON A WORKING DISK . . . . . . . . . .    2


          TO RUN THE PROGRAM . . . . . . . . . . . . . . . . . . . . .    3

          TO PRINT A SCHEDULE  . . . . . . . . . . . . . . . . . . . .    4

          MENUS  . . . . . . . . . . . . . . . . . . . . . . . . . . .    5
               MAIN MENU . . . . . . . . . . . . . . . . . . . . . . .    5
               LOAN AMORTIZATION MENU  . . . . . . . . . . . . . . . .    6
               LOAN CALCULATION MENU . . . . . . . . . . . . . . . . .    7
               RULE OF 78THS CALCULATION MENU  . . . . . . . . . . . .    7
               HELP  . . . . . . . . . . . . . . . . . . . . . . . . .    9
               OUTPUT OPTIONS MENU . . . . . . . . . . . . . . . . . .   10
                    Setting output options . . . . . . . . . . . . . .   10

          Selecting the report format. . . . . . . . . . . . . . . . .   12
               INTEREST OPTIONS MENU . . . . . . . . . . . . . . . . .   12
                    Setting interest calculation options.  . . . . . .   12
               Simple interest loans . . . . . . . . . . . . . . . . .   14
                    1)   Principal amount  . . . . . . . . . . . . . .   14
                    2)   Number of payments to amortize  . . . . . . .   15
                    3)   Number of payments per year . . . . . . . . .   15
                    4)   Number of interest only payments  . . . . . .   15
                    5)   Payment at which loan balloons  . . . . . . .   16
                    6)   Interest rate . . . . . . . . . . . . . . . .   16
                    7)   Date of note  . . . . . . . . . . . . . . . .   17
                    8)   Date of first payment . . . . . . . . . . . .   17
                    9)   Payment type  . . . . . . . . . . . . . . . .   17
                         Interest included . . . . . . . . . . . . . .   17
                         Plus accrued interest . . . . . . . . . . . .   17
                    10)  Payment amount  . . . . . . . . . . . . . . .   18
               Rule of 78ths loans . . . . . . . . . . . . . . . . . .   18
                    1)   Principal amount of note  . . . . . . . . . .   18
                    2)   Total finance charges . . . . . . . . . . . .   18
                    3)   Total amount of note  . . . . . . . . . . . .   19
                    4)   Number of payments  . . . . . . . . . . . . .   19
                    5)   Payment amount  . . . . . . . . . . . . . . .   19
                    6)   Date of note  . . . . . . . . . . . . . . . .   20
                    7)   Date of first payment . . . . . . . . . . . .   20
                    8)   Number of payments per year . . . . . . . . .   20

          Correcting errors  . . . . . . . . . . . . . . . . . . . . .   21

          Customizing. Remembering option settings.  . . . . . . . . .   21

          Setting foreground and background colors . . . . . . . . . .   23






          Bugs and errors  . . . . . . . . . . . . . . . . . . . . . .   24

          Reporting bugs or errors . . . . . . . . . . . . . . . . . .   25

          Requests for future versions . . . . . . . . . . . . . . . .   25

          New feature request  . . . . . . . . . . . . . . . . . . . .   27









          LICENSE AGREEMENT AND WARRANTY

          I have read and agree to the following license agreement.

               The  program  and  the     users   manual  contain  valuable
          intellectual property  and trade secrets of Bottom Line Financial
          Software, Inc. I understand that I may make  as many  copies as I
          want  for  backup  but  I  will  not  sell,  rent,  loan, give or
          otherwise transfer possession of  any copy  of the  program or of
          any other  materials supplied to any person or other entity.

               This product  is supplied  with only one warranty. Within 30
          days of receipt, if this product fails to  perform any advertised
          function, I  may return  it   postage prepaid, with a printout of
          any erroneous result, or a written description  of the advertised
          function  which  failed,  for  a  full  refund. Computer rounding
          differences are not considered to be erroneous operation.  
          Bottom Line Financial Software, Inc. disclaims any other warranty
          expressed   or   implied,   including   without  limitation,  the
          warranties of merchantability  or fitness for any purpose.  













          INTRODUCTION.

               PCLOAN4 is a program to help you with  loan calculations and
          with loan amortization schedules. 

               PCLOAN4  was  designed  by  a retired bank president who has
          negotiated,  originated  and  collected  over  30,000  commercial
          loans.

               PCLOAN4  is  quite  complete  and  will  perform  almost any
          calculation needed for  a  business  or  personal  loan  which is
          amortized in multiple payments.

               PCLOAN4 has  on line help for most functions but is designed
          in such a manner that if  you understand  the loan,  you will not
          need much help to use the program.

               PCLOAN4 is distributed on an unprotected floppy disk. It can
          be copied to another floppy or to a hard disk  with the  DOS Copy
          command.


          TO INSTALL THE PROGRAM ON A WORKING DISK.


               Place the distribution disk in drive A:.

               Log on to drive a: by typing the command

                         A:<return>

               then type the command

                         menu<return>

               You will  find options on the menu to install the program on
          either your hard disk, or a floppy disk in drive b:

               Select the option of your choice.

               If you do not wish to use the install programs supplied, you
          may simply  copy the files PCLOAN4.EXE  and AMORTIZE.PAR wherever
          you like.








                  AMORTIZE           Bottom Line Software              Page  2






               General installation.

               To copy the program from any disk to any other working disk,
          you must  first turn  on the  computer and  boot it  up with your
          normal DOS diskette. when this is accomplished and your screen is
          displaying the normal dos prompt A>, perform these steps.

               Determine  the   drive  letters   for  the  source  and  the
          destination  drives   you  intend   to  use.   In  the  following
          instructions, the source drive is  S and the destination drive is
          D. You must replace S and D with the Drive letters for the drives
          you will be using in your system.

               To  copy  from  drive  A  to  drive  B, replace the S in the
          instructions with A and replace the D in the instructions with B.

          1)   Place you working diskette in drive D:

          2)   Place the PCLOAN4 diskette in drive S:

          3)   Be sure the doors are closed properly on both drives.

          4)   Type the following command lines:

                    copy S:pcloan4.exe D:

                    when this copy is complete,

                    copy S:amortize.par D:


          5)   Press the <Return> key to end each copy command.
               On some keyboards this key is  marked  <Enter>  or    with a
               broken arrow that looks something like this <---'.

          6)   When  each  copy  is  complete,  the  screen  will display a
               message that says

                    1 file(s) copied.


          TO RUN THE PROGRAM

               With a copy of the program  on  your  working  disk  and the
          working disk in drive A, type the following command,

                    A>pcloan4<return>

               After a  few seconds  wait you will see the sign on message.
          At the bottom of the screen  you  will  see  a  message  that say
          <Return to continue>. Press the <return> key and you will get the
          main menu.

                  AMORTIZE           Bottom Line Software              Page  3







          TO PRINT A SCHEDULE

               PCLOAN4 will print these different types of schedule.

                    1)   Normal simple interest amortization.

                    2)   Constant  principal  payment   plus   all  accrued
                         interest.

                    3)   Rule of  78ths amortization  schedule with accrued
                         interest paid.

                    4)   Rule of 78ths rebate  schedule with  rebate amount
                         and payoff.

               To print  a schedule,  you must first be sure that output is
          sent to the  printer.  From  the  main  menu,  select  the output
          options selection  and turn  on the printer output. At this point
          you may turn on or off the output to the  screen, the  text file,
          or  the  data  file.  For  long schedules, it is recommended that
          screen output be turned off.

               To print either a normal  or  a  constant  principal payment
          schedule,  select option 1 from the main menu. This will take you
          to the loan amortization menu. Select option 1 again on  the loan
          amortization  schedule.  This  action  will  take you to the data
          input  screen.  Enter  the  data  requested.   For  the  Constant
          principal reduction  loan, the  question "Does the payment amount
          include the interest" is answered "N". This answer will alert the
          logic of  the program to provide constant principal reduction and
          collect all accrued interest in addition to that amount.

               To print the rule  of  78ths  amortization  schedule, select
          option 1 from the main menu to get to the loan amortization menu.
          then select option 2 "Amortize rule of 78ths". These actions will
          take you  to the data input screen and you will be asked to enter
          the data about the loan.

               To print the rule of 78ths rebate schedule,  select option 1
          from the  main menu  and then option 7 from the loan amortization
          menu. You  will be  asked for  exactly the  same data  as for the
          amortization schedule but the report will be different.

               If both  reports are  needed, it is not necessary to reenter
          the  data  for  the  second  report.  Simply  answer  by pressing
          <return> when  you are asked for the line number of the data item
          to change.

               Setting the Date. The date printed on the  report comes from
          the computer  system date.  You computer may ask you for the date
          when you boot it up. If  it  does,  the  date  you  give  will be

                  AMORTIZE           Bottom Line Software              Page  4






          printed on the printed reports. If it does not, your DOS disk has
          a command called DATE which will allow you  to set  the date. See
          your DOS manual if you have trouble with the DATE commands



          MENUS

               PCLOAN4 is completely menu driven. You will have no commands
          to remember.
           
               There are seven menus. This is what they do.

      ------------------------------- MAIN  MENU--------------------------------

      OPTION NO:                             DOES THIS:

      1)  Amortize a loan.                   Takes you to the amortization menu

      2)  Loan Calculations.                 Takes you to the calculation menu

      3)  Review or change output options.   Takes you to the options menu

      4)  Review or change interest options  Takes  you  to  the interest option
                                             menu

      5)                                     5) is not used
      6)                                     6) is not used

      7)  Save (remember) ...options         Save the interest and output option
                                             settings to a file. They   will  be
                                             retrieved and used again  next time
                                             you use the program

      8)  Help.                              Takes you to the help menu

      9)  Return to DOS.                     Exits  the  program  and returns to
                                             DOS















                  AMORTIZE           Bottom Line Software              Page  5






      -------------------------- LOAN  AMORTIZATION MENU------------------------

      OPTION NO:                             DOES THIS:

      1)  Amortize simple interest loan.     Accept data and print a schedule

      2)  Amortize rule of 78ths loan.       Accept data and print a schedule

      3)  Review or change options.          Takes  you  to  the  output options
                                             menu 

      4)  Review or change interest options  Takes you to  the  interest options
                                             menu 

      5)  Reset all variables.               Reset  all  data  so  you can start
                                             over
      6)  Display a calendar                 Display a  calendar  for  any month
                                             from 1901 to 2099

      7)  Rebate schedule rule of 78ths      Compute and print a rebate schedule

      8)  Help.                              Takes you to the help menu

      9)  Return to main menu.               Takes you back to the beginning
                                             (You  must  do  this before you can
                                             quit.)


               Options one and  two  on  this  menu  print  an amortization
          schedule.  The  only  difference  between  them  is the method of
          computing the interest. Option one uses the method  selected from
          the interest  options menu.  Option two  uses the  rule of 78ths.
          Both schedules will show the same balance due or "payoff" amount.

               Most lenders quote "payoff" or "rebate"  figures on  rule of
          78ths  loans.  If  you  want  these  figures  instead of interest
          accrued and paid, select option seven to print a rebate schedule.
          The rebate schedule will list both the rebate and the payoff.















                  AMORTIZE           Bottom Line Software              Page  6







      --------------------------- LOAN  CALCULATION MENU-----------------------

      OPTION NO:                             DOES THIS:
      1)  Calculate payment.                 Option 1 through  4  calculate the
                                             amount  redquested  when the other
                                             amounts have been entered.
      2)  Calculate number of payments.
      3)  Calculate amount of loan. three
      4)  Calculate interest rate.
      5)  Reset all variables.               Reset all data  so  you  can start
                                             over
      6)  78ths calculationsTakes you to the rule of 78ths calculation menu
      7)                                     7) is not used
      8)  Help.                              Takes you to the help menu
      9)  Return to main menu.               Takes you to the beginning menu


      ------------------------ RULE OF  78THS CALCULATION MENU-----------------

      OPTION NO:                             DOES THIS:
      1)  Calculate payment.            Option 1 through 4 calculate the amount
                                        requested  when  you  have  entered the
                                        other variables.

      2)  Calculate number of payments.

      3)  Calculate amount of loan.

      4)  Calculate interest rate.

      5)   Reset all variables to 0.    Not used.

      6)  Calculate rebate factor       Calculate  the  rebate  factor  and the
                                        amount  of  the  rebate  at any payment
                                        date.

      7)                                7) is not used

      8)  Help.                         Takes you to the help menu

      9)  Return to main menu.          Takes you to the beginning menu


               The 78ths  calculation  menu  allows  you  to  calculate the
          payment amount,  the number  of payments,  the loan amount or the
          interest rate for a rule  of  78ths  loan.  This  is  not  a true
          regulation  Z  installment  loan  calculator  but is adequate for
          personal use. If you need more  capability in  this area,  a true
          Reg Z  installment loan  calculator is available from Bottom Line
          Software.


                  AMORTIZE           Bottom Line Software              Page  7






               Option 6 calculates the rebate factor and the rebate amount.
           
               Rule of 78ths loans have the entire interest amount included
          in the  amount of  the loan. It will be listed on the face of the
          note as Finance  Charge.  Credit  life  and  accident  and health
          insurance   charges   are   also   subject  to  the  same  rebate
          calculation.

               To calculate the rebate, select option 7 from  this menu and
          enter the  data. You  will be  asked to enter the total number of
          payments in the contract,  the  current  payment  number  and the
          amount of  the charge  to be  rebated. The input screen will look
          like this:

                    Total of charge to be rebated........:    #########.##
                    Total number of contract payments....:
                    Total number of payments made........:
                    Rebate factor........................:
                    Rebate amount........................:

               The total charge to be rebated  is the  Total Finance Charge
          from  the  face  of  the  note. (Or alternatively the credit life
          insurance charge, or other  charge). Each  such charge  should be
          rebated separately. This is the way the lender will do it because
          the insurance companies pay the insurance rebate while the lender
          pays the finance charge rebate.

               For a  quick estimate however, you can add all these charges
          together and compute the rebate on the total.

               The total number of contract payments is the total number of
          payments in the contract. This amount will be listed somewhere on
          the face of the note. Look for "Number of payments"

               The total number of payments made is the  number of payments
          which have  matured since  the beginning of the contract (whether
          or not they have actually been paid.) If they have  not been paid
          when due, there will be late charges due.















                  AMORTIZE           Bottom Line Software              Page  8






               If the  contract was a three year contract beginning January
          first 1985 with the first payment due on February first 1985, the
          Total number of payments made would be:

                    As of          Number of
                    this date      Pmts made

                    02-01-85       1
                    03-01-85       2
                    04-01-85       3
                    05-01-85       4
                    :              :
                    :              :
                    etc            etc

                         Rebates are  computed as  of payment dates. If you
          need a payoff as of March 15th, you would select  the April first
          payment date  and use  3 as  the number of payments made. Compute
          the rebate and then subtract it from the contract balance.

               After entering the requested  data,  the  rebate  factor and
          amount will  be computed and displayed on the screen. You can get
          a printed report by holding down the shift  key and  pressing the
          PrtScr key.  (Be sure  the printer  is ready or you will  lock up
          the computer!)



          --------------------- HELP MENU  ---------------------I  can help
          you with questions on the following topics. 

          Which would you like?

          1 Principal amount of note.
          2 Number of payments for amortization.
          3 Number of payments per year.
          4 Number of interest only payments.
          5 Balloon payment number.
          6 Interest rate per annum.
          7 Dates (both).
          8 Payment includes interest? (Y?N).
          9 Payment amount - 0 = I compute it.

          Esc   Return to main menu.

          The information  presented by  the   help facility is necessarily
          brief.






                  AMORTIZE           Bottom Line Software              Page  9






          ------------------ OUTPUT  OPTIONS MENU--------------------------

          If you select the output options menu, this is what you can do.

               off         1  Print report to printer.
               off         2  Print report to ASCII text file.
               off         3  Print data file containing transactions only.
               on          4  Print report to console.
               MM-DD-YYYY  5 Set fiscal year end.

               0-0         6  Partial report - periods to report.
                           7  Reset all options to beginning values.
               A           8  Set report format.
                           9  RETURN TO PREVIOUS MENU.


               To set these options, you press the number key indicated for
          each option.


          Setting output options

               Option 1 determines  if  the  report  will  be  sent  to the
          printer. If  option 1  is off, the report will not be sent to the
          printer. To send the report to the printer, press the  "1" key on
          the keyboard.  You can  use either the numeric keypad or the type
          writer keypad. Either will work.

               When the 1 key is pressed  the word  "off" displayed  to the
          left of the option number will change to "on". If you press the 1
          key again, the "on"  will change  back to  "off". Try  this a few
          times. The  option will  switch from  "on" to "off" and back each
          time you press the 1 key.

               Options 1 through 4 work exactly the same way. When you have
          them all  set the way you want them, press the 9 key and you will
          return to the point in the  program from  which you  came to this
          menu. 

               The reports you produce now will be printed (or not printed)
          according to the output options you have set.  Each output option
          is independent of all the others. Any option can be on or off. It
          is possible to turn all output  options "off".  If this  is done,
          the calculations  will be  performed but nothing will be printed.
          An interesting but nonproductive exercise.

               Output option 1 through 4

               These options allow you to specify where the  report will be
          printed.



                  AMORTIZE           Bottom Line Software              Page  10






               Option 1  sends the  report to  the printer.  This option is
          initially turned off. If  you want  the report  printed, you must
          turn it on.

               Option 2  will cause the report to be printed to a text file
          on your disk. The file will have the name AMORTIZE.TXT. This file
          will contain  only the schedule of payments. It will not have any
          of the header information. You may load this file into  your word
          processor and  add any  type of  header information  you like. An
          example of the use of this feature would  be to  add the  name of
          your company  to the  report header.  Another example might be to
          print payments 24 through 36 and add them to the body of a letter
          describing the loan.

               Option 3 will cause the report to be printed to a file named
          AMORTIZE.DTA. This file will contain only  the raw  data from the
          payment  schedule.  This  file  can  be  loaded  into  your  word
          processor if you like or it can be typed on the screen or printed
          on the printer if you want to see what it looks like.

               This file  will be  of use  only to  programmers however and
          they will know how to use it so no examples will be given.

               Option 4 causes the report to be printed to the  console. If
          this option  is turned off, the report will not be printed on the
          screen. This is very handy  when  printing  long  reports  to the
          printer because  the screen  report pauses  every 12 payments for
          the operator to inspect it. This pause will also stop the printer
          until the  operator indicates it is ok to proceed by pressing the
          return key.

               When printing long reports turn output option 4 off.

               Option 5 allows you to set a fiscal year end. If it  is set,
          interest paid  will be  reported at  the end  of each fiscal year
          end. If this date is not set, the  program will  set December 31,
          and report interest for each calendar year.


               If you select option 6, you will see a message at the bottom
          of the screen. You will be asked to enter the number of the first
          payment to  print. When  this has been entered, you will be asked
          for the number of the last payment to  print. These  numbers will
          be displayed  to the left of option 6. All schedules printed will
          begin and end with these  payment  numbers  until  you  reset the
          numbers. These  numbers are  reset for you when you change from a
          simple interest loan to a rule of 78ths or vice versa.

               If you do not set these payment numbers,  the schedules will
          begin with  payment 1 and continue for the number of payments you
          specify as the total number of payment for  amortization or until
          the loan is paid off.

                  AMORTIZE           Bottom Line Software              Page  11







               Option  7  resets  the  output options to their beginning or
          default values. This will result in the report being printed to
           the screen only.

               Option 8.  Selecting the  report format.  This option allows
          you  to  choose  between  two  report formats for simple interest
          loans.
          option A or option B. Option A prints a blank  column for  you to
          write the  date the  payment was received. Option B replaces this
          column with the total payment amount.

               Option 9 will return you to  the point  in the  program from
          which  you  came  to  this  menu. There are several places in the
          program which will allow you the opportunity to come to this menu
          and set  or reset  the output  options. When you have the options
          set as you want them, then  9 key  will take  you back  where you
          started.


          ----------------------- INTEREST  OPTIONS MENU-------------------


          1)  Set basis 360 day year - 360 divisor.
          2)  Set basis 365 day year - 360 divisor.
          3)  Set basis 365 day year - 365 divisor.
          4)  Set negative amortization.
          6)  Set fiscal year end (MM-DD-YY)."            
          7)  Reset all options to beginning values."     
          8)  Help."
          9)  RETURN TO PREVIOUS MENU."


          Setting interest calculation options.

               To set the interest calculation option, press the number key
          that  corresponds  to  the  interest  option  desired. To set the
          360/360 option, press the 1 key  (not  F1).  The  word  "on" will
          appear  to  the  left  or  the option you selected and "off" will
          appear to the left of the other options. 

               To set the 365/365 option, press  the 3  key, (not  F3). The
          word "on"  will appear  to the left of the 365/365 day option and
          "off" will appear to the left of the other options.

          Interest options. What do they do?

               Options 1-3 set the basis for calculation of interest. There
          are many  methods of calculating interest. Each method results in
          a slightly different interest amount.



                  AMORTIZE           Bottom Line Software              Page  12






               The normal method of  computing an  amortization schedule is
          method  1,  a  360  day  year  and a 360 day divisor. This method
          assumes all months are 30 days long and results in  charging 1/12
          year interest each month or 1/4 year interest each quarter. etc.

               All payments  are computed  assuming the 360/360 basis. This
          is the only option which will result in the balance being exactly
          zero after  the payment  of the  final payment.  Even this method
          will not come out exactly if interest only payments or 

               Option 2, 365 day year, 360 day divisor. This is  the method
          used by many banks and other lenders. When computing the interest
          using this method, the actual number of days  between payments is
          calculated. For example:

                    Payment date        Days charged

                    Jan 1
                    Feb 1               31
                    Mar 1               28 (or 29)
                    Apr 1               31
                    May 1               30
                    Jun 1               31
                    Jul 1               30

               Note  that  the  number  of  days charged is the same as the
          number of days in the preceding month.

               This method results in computing interest  for every  day of
          the  year.  The  catch  is  that  the  divisor  in  the  interest
          calculation is 360 instead of 365.  The interest formula  used by
          this method is

                                             Principal X Rate X days
                         interest  =    -----------------------------
                                                       360

               This formula  charges 1/360th of a year interest 365 times a
          year. The amount of interest  actually  charged  is  greater than
          method 1  by the  fraction 365/360 or 1.01389. An increase in the
          amount of interest collected of almost  1.4%. This  becomes quite
          significant when dealing with many loans.

               Option 3,  365 day  year, 365 day divisor. This method makes
          no assumptions. It charges interest every  day, 365  days (or 366
          days) each  year. It  uses 365 as the divisor however so the 1.4%
          difference of the 365/360 day method does not occur.

               This method is required by some  government guaranteed loans
          like the SBA or FMHA.



                  AMORTIZE           Bottom Line Software              Page  13






               Option  4.  Set  negative amortization. Normally the program
          accumulates unpaid interest and  collects  it  when  possible but
          does  not   add  it  back  to  the  principal.  If  the  negative
          amortization option is set, the  unpaid  interest  will  be added
          back to the principal after each payment.

               Option 6,  set fiscal  year end. One of the most common uses
          of  an  amortization  schedule  is  to  determine  the  amount of
          interest paid  on the  loan in order to deduct it for income tax.
          This option allows you to set a fiscal  year end.  If you  do not
          set  the  year  end,  December  31 is assumed. As the schedule is
          printing, each fiscal  year  end,  the  amount  of  interest paid
          during that year is reported. 

               Note  that  this  is  interest actually paid. If the payment
          date is not the same  as  the  fiscal  year  end,  there  will be
          interest accrued but unpaid at year end. This situation is called
          a timing difference. If you use accrual accounting, you will have
          to make the adjustment manually.

               Option 7, Reset all (interest) options to beginning values.

               This  will  reset  all  options to the default values. These
          values are 360/360 interest computation.


          ENTERING DATA

               Simple interest loans.

               When this screen is printed, you will be asked for each item
          in the  order they are presented on the screen. The computer will
          print a message in the message area. This  message will  tell you
          what to enter and occasionally how to enter it.

          1)   Principal amount 

               First you will be asked to enter the principal amount.

                The principal  amount of the note is the face amount of the
          loan, the amount on the note document. This will usually (but not
          always) be  the same  as the amount borrowed. It is the amount on
          which interest will be calculated. 

               You can enter any amount from  $0.01 to  $999,999,999.99. If
          you have  occasion to  use the  latter number,  I hope it is on a
          loan receivable.






                  AMORTIZE           Bottom Line Software              Page  14






          2)   Number of payments to amortize

          Next you will  be  asked  to  enter  the  number  of  payments to
          amortize.

               This number  is the  maximum number  of payments the program
          will process.  The  loan  balance  will  be  amortized  until the
          balance is  zero or  until the number of payments to amortize has
          been processed.

               When this number of payments has  been amortized, processing
          will stop even if the balance is not zero.


          3)   Number of payments per year.

               The  number  of  payments  per  year is simply the number of
          payments the debtor is expected to pay each year during  the life
          of  the  loan.  If  payments  are required monthly, the number of
          payments per year is 12. 

               Examples

               payments            number of payments
               required            per year 

               weekly                   52
               semi monthly             24        eg. first & fifteenth
               every other week         26        eg. every other Friday
               monthly                  12
               each fourth week         13        eg. every fourth payday.
               quarterly                 4
               thirdly                   3
               semi-annually             2
               annually                  1

               The number of payments per year may be any integer from 1 to
          365 and  the calculations  would be correct but the payment dates
          will not be computed correctly with any other  number of payments
          per year. 

               The  program  will  therefore  restrict your entry to one of
          these options and will not allow any other number to be entered.


          4)   Number of interest only payments

               The number of interest only payments  will usually  be zero.
          It may  be any  integer number. The amortization routine will not
          collect any principal payment until this number of  payments have
          been collected charging only the interest due.


                  AMORTIZE           Bottom Line Software              Page  15






               If the  number of interest only payments is greater than the
          number of payments to amortize, the program will never charge any
          principal.  It  will  collect  interest  only  to  the end of the
          schedule.

               If the payment amount  entered is  larger than  the interest
          due, the  excess amount will simply be ignored. This type loan is
          quite common in real estate financing.

               Example:

                    Interest due             1000.00
                    Payment amount           1350.00

                    Amount collected         1000.00
                    Applied to interest      1000.00
                    Applied to principal       0.00 

               If there are no interest only payments, simply enter zero or
          press the <return> key.


          5)   Payment at which loan balloons
                    (Final maturity)

               It  is  quite  common  in  real  estate  financing  for  the
          amortization period to be  longer than  the term  of the  loan. A
          loan might  have an  amortization period of 30 years (360 months)
          and a final maturity or balloon payment at the end of the seventh
          year (84 months).

               The  balloon  payment  is  the  payment  at which the entire
          amount is due. This is sometimes called the call date.  It is the
          final maturity date of the note. 

               The final maturity date of most notes is simply the date the
          last payment matures. If no balloon payment is  required, enter 0
          or press <return>. 

               An other example. The note is payable in annual installments
          based on a ten year amortization  schedule but  the entire amount
          unpaid is due on the fifth anniversary. the balloon payment would
          be payment number 5, the fifth payment.


          6)   Interest rate

               The interest rate is entered as  a percent  or as  a decimal
          number.
           
               Twelve and one fourth percent can be entered as 12.25, or it
          can be entered as .1225. 

                  AMORTIZE           Bottom Line Software              Page  16







          7)   Date of note.
          8)   Date of first payment.

               Dates must be entered as  MMDDYY.  Zeros  do  count  and are
          necessary. To  enter June  18, 1985,  type the  following six key
          strokes:

                          061885

               The result on the screen will be

                         06-18-85


               The date entry routine  was  designed  for  persons familiar
          with ten key. It allows very simple error correction. If you make
          a mistake, just start over at the beginning. Simply keep entering
          numbers until  you like  what you  see on  the screen. (Backspace
          does not work.)

          9)   Payment type

               Interest included
               Plus accrued interest

          Does the payment amount include the interest?

               There  are  two  commonly  used  methods   of  quoting  loan
          payments. In  the first  and most  common method, the interest is
          included in the payment  amount quoted.  When a  payment is made,
          the  interest  due  is  calculated  and deducted from the payment
          amount. The amount remaining is applied to the  principal balance
          of the  note. This results in all payments being the same amount.
          This is the normal manner in which loan payments are quoted.

               In the second method, the loan  amount is  simply divided by
          the number of payments to be made and the result is quoted as the
          payment amount. In this  case it  is understood  that all accrued
          interest is  due each  payment date  in addition to the principal
          payment.

               When a payment is made on  this type  note. the  interest is
          calculated and  added to  the quoted  payment amount to arrive at
          the amount of the total payment. This method results in  a larger
          total payment  in the beginning but the payment declines over the
          life of the loan as the interest amount declines. 






                  AMORTIZE           Bottom Line Software              Page  17






          10)  Payment amount

               Enter the payment amount or zero.

               If you answer zero or <return>,  The program  will calculate
          the payment  amount according  to the  prior information you have
          given.

               If you have specified interest only or balloon  payments, it
          will ignore  them and  assume the payment you want is the payment
          necessary to amortize the  loan over  the number  of payments you
          specified as the number of payments to amortize. 

               If you  enter a  payment amount,  it will use the amount you
          enter. (For better or worse!) 

               If you specify interest only payments and allow  the program
          to compute  the payment  amount, the  payment amount it uses will
          not completely  amortize  the  loan  unless  you  also  specify a
          balloon payment.

               If you want interest only, and complete amortization WITHOUT
          a balloon payment, use option 1 on the loan calculations  menu to
          calculate the proper payment for you.

               For this  to work,  you must trick the program by telling it
          to amortize the number of payments from the  end of  the interest
          only schedule  to the  final payment. This is the total number of
          payments less the number of interest only payments.


          Rule of 78ths loans.

          1)   Principal amount of note.

               When using the rule of 78ths, there are  quite often several
          charges  added  to  the  amount  of  the  loan  before  computing
          interest. These might be such  things  as  credit  life insurance
          premium, filing fees, etc. 

               The amount  to enter here is the amount shown on the note as
          the TOTAL AMOUNT FINANCED.

          2)   Total finance charges.

               This amount will include the interest  charged on  the total
          amount financed.  This amount  will be  labeled FINANCE CHARGE or
          TOTAL FINANCE CHARGE on the loan.





                  AMORTIZE           Bottom Line Software              Page  18






          3)   Total amount of note.

               This is the total of everything. All the  payments scheduled
          for payment  on the  loan will add up to this amount. This amount
          will be found on the note labeled TOTAL OF PAYMENTS.

               This amount can be entered at  this time  but it  is best to
          enter  a  0  or  just  simply  press the <return> key and let the
          program calculate the amount from the previous data entered. This
          practice  will  give  you  a  check  point.  Check the amount the
          computer displays against your former  figures.  If  they  do not
          agree, you have made an error somewhere.

          4)   Number of payments

               This  number  is  the  number  of  payments the program will
          process. The loan balance will be amortized until  the balance is
          zero  or  until  the  number  of  payments  to  amortize has been
          processed.

               When this number of payments has  been amortized, processing
          will stop even if the balance is not zero.

               If you  allow the  program to compute the payment amount for
          you,  it  will  calculate  a  payment  amount  that  will exactly
          amortize the loan in this number of payments.


          5)   Payment amount
               The  program  expects  to  calculate this amount for you and
          will do so if you enter a zero or simply press the <return> key.

               If you enter a payment  amount  you  may  receive  a message
          telling you  the amount  is too large or too small. If you ignore
          this message, the program will use the amount you entered  and do
          the best it can.

               If you  want to  change the  amount of  payment, you will be
          given the opportunity to do so.














                  AMORTIZE           Bottom Line Software              Page  19






          6)   Date of note
          7)   Date of first payment

               Dates must be entered as  MMDDYY.  Zeros  do  count  and are
          necessary. To  enter June  18, 1985,  type the  following six key
          strokes

                          061885

               The result on the screen will be

                         06-18-85


               The date entry routine  was  designed  for  persons familiar
          with ten key. It allows very simple error correction. If you make
          a mistake, just start over at the beginning. Simply keep entering
          numbers until  you like  what you  see on  the screen. (Backspace
          does not work.)


          8)   Number of payments per year.

               The number of payments per  year  is  simply  the  number of
          payments the  debtor is expected to pay each year during the life
          of the loan. If payments  are  required  monthly,  the  number of
          payments per year is 12. 

               Examples

               payments            number of payments
               required            per year 

               weekly                   52
               semi monthly             24
               monthly                  12
               quarterly                 4
               thirdly                   3
               semi-annually             2
               annually                  1

               The number of payments per year may be any integer from 1 to
          365 and the calculations would be  correct but  the payment dates
          will not  be computed correctly with any other number of payments
          per year. 

               The program will therefore restrict  your  entry  to  one of
          these options and will not allow any other number to be entered.





                  AMORTIZE           Bottom Line Software              Page  20






               NOTE

               The  rule  of  78ths  is  a  formula  which  was devised for
          amortizing monthly  amounts.  The  formula  will  work  for other
          periods  of  time  but  the  results  will  not be what you might
          expect. For  a  given  finance  charge,  the  yield  or  APR will
          decrease with the length of time between payments. 

               Check this  out for  yourself by entering a loan and writing
          down the APR. When the schedule  is completed  repeat the process
          with the  same numbers but change the number of payments per year
          from 12 to 4 then to 2 and  finally to  1. You  will see  the APR
          decline with each change in the payment frequency. 

               If  you  are  borrowing  money,  this  is  great. If you are
          lending it WATCH OUT!


          Correcting errors.

               When you have entered all the data for  a loan,  you will be
          asked if the data is ok. If it is, you simply respond "Y" or "y".

               If you  have made  an error, or simply changed your mind and
          want to change something, respond to this question with a  "N" or
          a "n". You will then be given the opportunity to change any thing
          you have entered.

               If you make a change that  would  require  a  change  in the
          payment amount,  you may  enter the  new payment amount or change
          the payment amount to 0  and  let  the  program  compute  the new
          payment amount for you.


          Customizing. Remembering option settings.

               Option 7  on the  main menu allows you to save your interest
          calculation and output options to a disk file. These options will
          be read  by the program each time you run it and they will be set
          for you just like you used them last time. 

               If you have a special need, you can  change the  options for
          one  schedule  and  then  not  save  them.  Next time you run the
          program, you old options will be reset.









                  AMORTIZE           Bottom Line Software              Page  21






               The  name  of  the  file  which  contains  your  options  is
          AMORTIZE.PAR. The PAR is an abbreviation for parameters.

               The AMORTIZE.PAR file contains the following data:

                         courtesy=Bottom Line Software
                         output=printer
                         output=screen
                         OUTPUT=TEXT
                         output=data
                         basis=360/360
                         display=off
                         background=01
                         foreground=07 

               This is what it means. 

               The words  on the  left side  of the = are the options which
          can be set from this file. The words on the  right side  of the =
          are what they are set to.

               The  output   options  can   be  set   to  printer,  screen,
          text(file), or data(file). Any or all of these options may  be on
          at the same time.

               The basis  option can  be set  only to one option at a time,
          360/360; 365/360; or 365/365.

               The courtesy message can be set to any message you  like but
          it must be only one line. Maximum of about 75 characters.

               The display option.

               When PCLOAN4  is run, it checks to see if the display option
          is "on". If it is, PCLOAN4  displays  a  screen  showing  you the
          setting of all options. If the display option is off, this screen
          is bypassed.

               This file allows you  to save  your favorite  output options
          and your interest computation option. You may also set a courtesy
          message. This message will be printed at the top center  of every
          printed report.

               The output=printer  means the  program will send all reports
          to the printer. 

               Output=screen sends all reports to the console. 

               Output=text sends all reports to a  text file  on your disk.
          The filename is AMORTIZE.TXT. 



                  AMORTIZE           Bottom Line Software              Page  22






               The output=data  sends all  reports to  a data  file on your
          disk. The name of this file is AMORTIZE.DTA. This file will be of
          no interest to you unless you are a programmer.

               Basis=360/360 sets the basis to the 360/360 option.

               Display=off  turns  off  the  display  that  tells  you what
          options are set when you first run the program.

               Courtesy=Bottom Line Software causes  "Bottom Line Software"
          to be printed at the top center of each printed schedule.


          Setting foreground and background colors

               Background=01 sets the background color to 01.

               Foreground=07 sets the foreground to 07.

               Remember, the leading 0 is required and there may not be any
          spaces before or after the = sign.

               The color codes are:

                    0    Black
                    1    Blue
                    2    Green
                    3    Cyan
                    4    Red
                    5    Magenta
                    6    Brown
                    7    White

               Other color combinations are possible, see your Basic manual
          for additional color codes. read about the COLOR statement.

               Color combinations  cannot be  set from  within the program.
          They can only be set by  editing the  parameter file  with a text
          editor or word processor.


          How to change the AMORTIZE.PAR file.

               You can  save the options you have in effect by using option
          7 on the main menu. This  option however  does not  allow as much
          flexibility as  using an  editor to  edit the file. If you do not
          have an  editor, you  can use  your word  processor if  it has an
          option to  save a  file in  ASCII format.  If you  cannot find an
          option to save a file in the ASCII format, do  not use  your word
          processor on this file. The results will be unpredictable.



                  AMORTIZE           Bottom Line Software              Page  23






               If you use an editor to edit the AMORTIZE.PAR file, you must
          not place a space  before or  after the  "=". You  may use either
          upper or lower case characters.

               You may  turn an  option off  by simply deleting it from the
          file. You may also turn an option off by inserting  any character
          before it. 

               Example:

                         courtesy=Name of your company, Inc.
                         output=printer
                         output=screen
                         ;OUTPUT=TEXT
                         basis=360/365
                         display=on


               Make a  backup copy  of the  file AMORTIZE.PAR and then edit
          the file to look like this. Notice the output=data line  has been
          deleted. Copy  your edited  version of  the file to the same disk
          that contains the PCLOAN4 program and start the program.

               Note: The file must not have more than nine lines.

               If the  display option  is "on".  When PCLOAN4  signs on, it
          will tell you what options are set. and that the courtesy message
          is "Name of your company, Inc."

               Interest will be computed  by  the  360/365  day  method and
          output will  go to  the screen and the printer. The text file and
          the data file options are "off".

               Each printed report will have "Name  of your  company, Inc."
          centered at the top of the report.

          Bugs and errors

               A bug  is a problem with a program that causes it to produce
          erroneous output  or  to  do  something  unexpected  or otherwise
          unacceptable. An error is more generic. It might be a serious bug
          or only a misspelled word.

               Please keep in mind  that the  program cannot  do everything
          for everybody.  If it  will not  do something you need done, that
          does not constitute a bug or an error. If you need a feature that
          is not  available, refer  to the  section on  requests for future
          versions.

               There are so many different combinations  of amounts, rates,
          payments,  dates,  partial  schedules,  interest only periods and
          balloons that I cannot possibly test them all.

                  AMORTIZE           Bottom Line Software              Page  24







               It is possible that you may find a combination that does not
          work at  all or  that produces  erroneous results. If you do, you
          have discovered  a bug.  I would  sincerely appreciate  it if you
          would report it to me.

          Reporting bugs or errors

               Bug reports  should contain  all available information about
          what you were doing  before  the  error  occurred.  This  is very
          simple to report. 

               Turn on  your printer, be sure it is selected or on line, go
          to the data entry screen, hold down the "Shift" key and while you
          are holding  it down,  press the  "PrtSc" key. This will cause an
          exact duplicate of the  data input  screen to  be printed  on the
          printer.  Next  go  to  the  output options screen and repeat the
          procedure. 

               Do not switch from simple interest to rule of 78ths  or back
          during  this  procedure.  Switching  from one method to the other
          will cause all the data variables to be reset and  you will loose
          your set of conditions you are trying to report.

               In  addition  to  the  screen  printouts, please provide the
          information on the problem report form in the back of the manual.

          Requests for future versions

               New features are constantly  being added  to PCLOAN4. Future
          versions are  expected to  have the features most needed by users
          but this is only possible if users make their needs known.


               Supporting material  is very  important in  requesting a new
          feature.  It  is  necessary  to  know exactly what information is
          needed, how it is to be calculated and how it  is to  be used. If
          there are  accounting or  legal (usury  law) considerations, they
          must also be explained in detail.

               See the form for requesting a new feature. It is in the back
          of this manual
           
           









                  AMORTIZE           Bottom Line Software              Page  25







      Bottom Line Software                                  Date ___________ 
      Problem report
                              PCLOAN4 version _______   
       
      Name     ______________________________     Type  of  problem (check one,
      or more) 
       
      Address  ______________________________     [  ] Problem with program 
       
      Address  ______________________________     [  ] Problem with documents 
       
      City     ______________________________     [  ] Problem with display 
       
      State    ______________________________     [  ] Problem with printer 
       
      Zip ______________________________          [  ] Other problem 
       
      Computer used: 
       
      Brand    _________________        Model      ______________________ 
       
      Memory(K)_________________        Operating system  MS-DOS or PC-dos 
       
      Video card ______________         System version ___________________ 
       
      Printer brand & model ________________________________ 
       
      When I do this, 
       
      _____________________________________________________________________ 
       
       
      This is what happens, 
       
      _____________________________________________________________________ 
       
      I can make it work right if I, 
       
      _____________________________________________________________________ 
       
      I would prefer for it to 
       
      _____________________________________________________________________ 
       
       
      Other details you think might be important? 
       
      _____________________________________________________________________




                  AMORTIZE           Bottom Line Software              Page  26









      Bottom Line Software                                  Date ______________

      New feature request
       
      Program name _____________________               Version ___________ 
       
       
      I need to do this: 
       
      _______________________________________________________________________
       
      _______________________________________________________________________
       
      _______________________________________________________________________
       
       
      I need this because 
       
      ________________________________________________________________________
       
      ________________________________________________________________________
       
       
           
      The amounts should be calculated like this: 
       
      ________________________________________________________________________
       
      ________________________________________________________________________
       
      ________________________________________________________________________
       
       
      The report should look like this: 
       
      Column    Column     Column   Column     Column  Column     Column
      name      name       name     name       name    name       name        
        
       
      Please  enclose  a  sample  copy  of  all  notes, calculations, reference
      material and anything else you have to insure accuracy. 
       








                  AMORTIZE           Bottom Line Software              Page  27


```
{% endraw %}

## PROBLEM.DOC

{% raw %}
```


Bottom LIne Software            Date ___________
Problem report                  
                    AMORTIZE version _______    

Name    ______________________________  Type of problem (check one, or more)

Adress  ______________________________  [  ] Problem with program

Address ______________________________  [  ] Problem with documents

City    ______________________________  [  ] Problem with screen display

State   ______________________________  [  ] Problem with printer

Zip ______________________________  [  ] Other problem

Computer used:

Brand   _________________       Model    ______________________

Memory(K)_________________      Operating system  MS-DOS or PC-dos

Video card ______________       System version ___________________

Printer brand & model ________________________________

When I do this,

_____________________________________________________________________


This is what happens,

_____________________________________________________________________

I can make it work right if I,

_____________________________________________________________________

I would prefer for it to

_____________________________________________________________________


Other details you think might be important?

_____________________________________________________________________

```
{% endraw %}

## REQUEST.DOC

{% raw %}
```
Bottom Line Software                        Date ______________
New feature request                 

Program name _____________________          Version ___________


I need to do this:

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________


I need this because

___________________________________________________________________________

___________________________________________________________________________


    
The amounts should be calculated like this:

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________


The report should look like this:

 Column  Column  Column  Column   Column Column  Column  Column   
 name    name    name    name     name   name    name    name      
________________________________________________________________
|   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |
                        

Please enclose a sample copy of all notes, calculations, reference material
and anything else you have to insure accuracy.

 




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0399

     Volume in drive A has no label
     Directory of A:\

    1        BAT       756   3-03-03   4:13a
    AMORTIZE PAR       125   2-24-87   8:14p
    AMORTIZE Q&A      9680  10-22-88   3:13a
    PROBLEM  DOC      1367   7-04-87   9:20a
    HELP     BAT        26  11-07-87   2:33p
    PRINTMAN EXE     40356  10-22-88   3:22a
    3        BAT        43  11-07-87   2:42p
    AMORTIZE DOC      1280   7-08-86   7:54a
    4        BAT        45  11-07-87   2:59p
    REQUEST  DOC      1420   7-04-87   9:19a
    5        BAT        93   3-03-03   4:09a
    PCLOAN4  EXE    156742  10-22-88   4:25a
    WHATIS   IT        912  11-07-87   2:14p
    MENU     BAT        31  11-07-87   2:19p
    MANUAL   DOC     63688  10-22-88   4:16a
    MENU     SCR      1386  11-07-87   3:00p
    2        BAT      1121   3-03-03   4:13a
    PC4INFO  DOC      1320  10-24-88   7:06p
    FILES399 TXT      1443  12-19-88  10:26a
    GO       BAT        38   1-18-88  10:29a
    GO       TXT       617  12-07-88   9:32a
           21 file(s)     282489 bytes
                           24576 bytes free
