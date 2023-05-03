---
layout: page
title: "PC-SIG Diskette Library (Disk #3420)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3420/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3420"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FINCALC.DOC

{% raw %}
```














                                    F I N C A L C




                        A Memory Resident Financial Calculator























                  (C) Copyright 1991,92  Insight Software Solutions




          FINCALC                                                  Page 1
          ---------------------------------------------------------------

                           About Insight Software Solutions

          Insight Software Solutions is located in Bountiful Utah. Please
          send any inquiries, questions, suggestions or comments to the
          following address:

               INSIGHT SOFTWARE SOLUTIONS
               P.O. BOX 354
               BOUNTIFUL, UT  84011-0354
               Phone/Fax: (801) 295-1890
               Support BBS: (801) 963-8721  (Rocky Mountain Software BBS)

                                      Disclaimer

          Insight Software Solutions makes no warranties or representations
          of any kind, expressed or implied, including any implied
          warranties of merchantability and fitness for any particular
          purpose. Insight Software Solutions shall not be liable for any
          errors contained herein or for any loss of profit or for
          incidental or consequential damages or for any other damages.

                                   Program Overview

          FINCALC is a Memory Resident (TSR) Financial Calculator. When not
          being used, FINCALC only takes about 6.5K of memory. It consists
          of 3 calculators. They are a four function calculator, a present
          value / future value / solve for missing value calculator and a
          loan / solve for missing value calculator.  

          The four function calculator allows one of the four basic math
          functions (addition, subtraction, multiplication, division) to be
          applied to two numbers. The resulting number becomes the first
          number of the next math operation.

          The present value / future value calculator allows for seven
          inputs of which five can be solved for. The inputs are Deposit
          Mode, Compound Method, Present Value, Deposit Amount, Duration,
          Interest Rate and Future Value. The last five items can all be
          solved for.

          The loan calculator allows for six inputs of which four can be
          solved for. The inputs are Payment Mode, Compound Method, Loan
          Principal, Payment Amount, Duration and Interest Rate. The last
          four items can be solved for.

                                     Installation

          FINCALC comes with an installation utility called INSTALL. It
          installs FINCALC onto a hard disk by copying the appropriate
          files. It also gives the option of having FINCALC loaded into
          memory each time you boot up your computer. To run the
          installation program, insert the FINCALC diskette into drive A:





          FINCALC                                                  Page 2
          ---------------------------------------------------------------

          and at the A> prompt, type INSTALL.

                                   Loading FINCALC

          FINCALC is loaded into memory by typing "FINCALC". A prompt
          appears telling you if the load into memory was successful or
          not. It also indicates what key sequence is required to active
          FINCALC.

          FINCALC has several command line parameters which can be used at
          the time FINCALC is loaded into memory. Listed below are the
          available parameters and the function they perform.
                   
               /C1  This tells FINCALC that you wish to use the first
                    alternate startup key sequence for the 4 function
                    calculator only. It is <ALT><BACKSPACE>.
               /C2  This tells FINCALC that you wish to use the second
                    alternate startup key sequence for the 4 function
                    calculator only. It is <ALT><RIGHT-SHIFT>.
               /C3  This tells FINCALC that you wish to use the third
                    alternate startup key sequence for the 4 function
                    calculator only. It is <ALT><RIGHT-SHIFT><BACKSPACE>.
               /E   This tells FINCALC not to use EMS memory when swapping
                    itself out of memory.
               /F   This forces the use of Monochrome Colors. This is
                    useful for laptops.
               /M   This tells FINCALC not to display the messages that
                    occur when swapping in and out of memory occurs.
               /N   This tells FINCALC to turn on the NumLock Key when it
                    is called up. The status of the NumLock Key is returned
                    to what it was before invoking FINCALC.
               /T1  This tells FINCALC that you wish to use the first
                    alternate startup key sequence. It is <ALT><TAB>.
               /T2  This tells FINCALC that you wish to use the second
                    alternate    startup key sequence. It is
                    <ALT><LEFT-SHIFT>.
               /T3  This tells FINCALC that you wish to use the third
                    alternate startup key sequence. It is
                    <ALT><LEFT-SHIFT><TAB>.
               /U   This unloads FINCALC from memory.
               /?   This displays the list of command line options for
                    FINCALC.

                                  Activating FINCALC

          By default, FINCALC is activated by holding the <ALT> key down
          and pressing the letter "F" at the same time. If you want to use
          only the 4 function calculator, then by default, it is activated
          by holding the <ALT> key down and pressing the letter "C" at the
          same time. It is possible to use other key sequences to activate





          FINCALC                                                  Page 3
          ---------------------------------------------------------------

          FINCALC. These are possible by use of command line options. See
          Loading FINCALC above for more information.

                               Moving Around in FINCALC

          When FINCALC is activated, a menu consisting of a list of choices
          appears. This list consists of the four function calculator and
          nine solve for values. One of the items will always be
          high-lighted. By using the arrow keys, you can highlight anyone
          of the items.  Pressing the enter key activates the calculator
          for the highlighted item. To exit a calculator, press the <ESC>
          key and control returns to the menu. To exit FINCALC, press the
          <ESC> key while in the menu. It is possible to move around the
          financial calculators by use of the arrow keys and the return
          key.

                                  Function Key Usage

          Active function keys appear at the bottom of the FINCALC screen.
          After each function key is a brief description of what each key
          does. Function keys F1, F2 and F3 are always active. A brief
          description of what each key does follows:

               F1 is a help key. When F1 is pressed, it toggles the help
               mode off or on.  When the help mode is activated, a box
               below the calculator appears which give additional help on
               what you can do or what information is required for the
               field you are working on.

               F2 is a solve for missing value key or a number of decimal
               places key. When in the financial calculators, you press the
               F2 key after you have entered all the other values you want.
               After pressing F2, the value is displayed up in the top box
               of the calculator. When in the 4 function calculator, it
               lets you change the number of decimal places to be used.

               F3 is a registration screen. It shows how to register the
               product with INSIGHT SOFTWARE SOLUTIONS and allows you to
               print a registration form.


```
{% endraw %}

## ORDER.DOC

{% raw %}
```




                 INSIGHT SOFTWARE SOLUTIONS Registration Form


      Product Name:   FINCALC 1.07

      Diskette Type:  5.25"  or  3.5"  (Circle One)

                        Product Cost:  $6.00

                        Quantity   x ________

                        Subtotal    $________

        Utah Residents add Sales Tax ________  (6.25%)

             Total Amount Enclosed  $________


        (Quantity discounts and site license agreements available)


        Name ______________________________________________________

        Company ___________________________________________________

        Address ___________________________________________________

        City __________________   State _____________   Zip _______


        How did you come accross FINCALC?
          Circle One:  Bulletin Board   Catalog   Friend   Other
                    Name:_______________________________________

        Comments/Remarks __________________________________________

        ___________________________________________________________
          
        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________





        Please send check or money order to:

                      INSIGHT SOFTWARE SOLUTIONS
                      P.O. Box 354
                      Bountiful, Utah  84011-0354
                      Phone/Fax: (801) 295-1890

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║         <<<<  PC-SIG Disk #3420 INSIGHT FINANCIAL PROGRAMS  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ The programs included on this disk are in Zipped (compressed) format.   ║
║                                                                         ║
║ Copy all of the files to a sub-directory on your hard disk drive.       ║
║                                                                         ║
║ To Unzip the programs, type: PKUNZIP (file name) (press Enter).         ║
║                                                                         ║
║ PKUNZIP is available from PC-SIG or on most local Bulletin Boards.      ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INT.DOC

{% raw %}
```











               The

                                       Interest

                                                                   Analyzer








                                   A Financial Tool

                                         for

                                       Interest

                                     Amortization

                                     Depreciation














                      Copyright 1990-93 Insight Software Solutions

















                                                      THE INTEREST ANALYZER



                                  TABLE OF CONTENTS

          Program Overview  . . . . . . . . . . . . . . . . . . . . . .   3

          General Information . . . . . . . . . . . . . . . . . . . . .   4
               Disclaimer . . . . . . . . . . . . . . . . . . . . . . .   4
               About Insight Software Solutions . . . . . . . . . . . .   4
               Contents of Distribution Disk  . . . . . . . . . . . . .   4
               Program Support  . . . . . . . . . . . . . . . . . . . .   5

          Getting Started With the Interest Analyzer  . . . . . . . . .   6
               System Requirements  . . . . . . . . . . . . . . . . . .   6
               Installation . . . . . . . . . . . . . . . . . . . . . .   6
               Running The Interest Analyzer  . . . . . . . . . . . . .   6

          Screen Layout In The Interest Analyzer  . . . . . . . . . . .   7
               Common Screen Lines  . . . . . . . . . . . . . . . . . .   7
               Menu Screens . . . . . . . . . . . . . . . . . . . . . .   7
               Data Input Screens . . . . . . . . . . . . . . . . . . .   7
               Data View Screens  . . . . . . . . . . . . . . . . . . .   7

          Moving Around In The Interest Analyzer  . . . . . . . . . . .   8
               Menu System  . . . . . . . . . . . . . . . . . . . . . .   8
               Moving Field to Field  . . . . . . . . . . . . . . . . .   8
               Editing Within a Field . . . . . . . . . . . . . . . . .   9
               Special Fixed Fields . . . . . . . . . . . . . . . . . .   9
               Special Function Keys  . . . . . . . . . . . . . . . . .   9

          Interest Illustrations  . . . . . . . . . . . . . . . . . .    11
               Interest Inputs  . . . . . . . . . . . . . . . . . . .    11
               Interest Function Keys . . . . . . . . . . . . . . . .    13

          Amortization Illustrations  . . . . . . . . . . . . . . . .    15
               Amortization Inputs  . . . . . . . . . . . . . . . . .    15
               Amortization Function Keys . . . . . . . . . . . . . .    19

          Depreciation Illustrations  . . . . . . . . . . . . . . . .    20
               Depreciation Inputs  . . . . . . . . . . . . . . . . .    20
               Depreciation Function Keys . . . . . . . . . . . . . .    21

          Immediate Annuity Illustrations . . . . . . . . . . . . . .    22
               Immediate Annuity Inputs . . . . . . . . . . . . . . .    22
               Immediate Annuity Function Keys  . . . . . . . . . . .    23

          Quick Calculator  . . . . . . . . . . . . . . . . . . . . .    24
               Financial Calculator . . . . . . . . . . . . . . . . .    24



                                                                     Page 1






          THE INTEREST ANALYZER

               Four Function Calculator . . . . . . . . . . . . . . .    25

          On-line User Manual . . . . . . . . . . . . . . . . . . . .    26

          Configuration . . . . . . . . . . . . . . . . . . . . . . .    27
               Color Attribute Selection  . . . . . . . . . . . . . .    27
               Printer Selection  . . . . . . . . . . . . . . . . . .    28
               Miscellaneous Selection  . . . . . . . . . . . . . . .    29

          Filing System . . . . . . . . . . . . . . . . . . . . . . .    31

          Answers To Common Problems  . . . . . . . . . . . . . . . .    31







































          Page 2






                                                      THE INTEREST ANALYZER

          Program Overview

                                The Interest Analyzer

          The Interest Analyzer is a financial software program designed
          with ease and flexibility in mind. It comes complete with a
          variety of financial tools for calculating Annuities (Savings,
          Interest Accumulation), Amortization (Loans, Mortgages),
          Depreciation, Immediate Annuities and Calculators for solving for
          missing values. Each financial tool contains a variety of options
          to allow maximum flexibility. 

          The Interest (Savings) tool allows variable deposit modes,
          deposits, withdrawals and interest rates. Professional reports
          can be created with varying detail. Special options are available
          to illustrate the time value of compounding and the impact of
          taxes on savings.

          The Amortization (Loan) tool allows variable payments, interest
          rates and compounding methods. Professional schedules can be
          generated with varying detail. Special options are available to
          illustrate the savings incurred with an early payoff of a loan
          and to show tax savings with mortgages.

          The Depreciation tool allows for a variety of depreciation
          methods to be illustrated using different time conventions.

          The Immediate Annuity tool allows variable payout modes and
          compounding methods. Professional schedules are produced.

          The Interest Analyzer produces illustrations and schedules for
          each of the financial tools. These can be viewed on the screen or
          sent to a printer. The Interest Analyzer is a menu driven program
          that also contains an on-line manual and individual help for each
          input to allow the user to easily navigate and understand the
          program. 

          Client names can be entered and included in the illustrations.
          Each financial tool has the ability to save and retrieve all
          information entered. The Interest Analyzer provides several
          miscellaneous configuration options for setting the program up to
          your individual liking.









                                                                     Page 3






          THE INTEREST ANALYZER

          General Information

                                      Disclaimer

          Insight Software Solutions makes no warranties or representations
          of any kind, expressed or implied, including any implied
          warranties of merchantability and fitness for any particular
          purpose. Insight Software Solutions shall not be liable for any
          errors contained herein or for any loss of profit or for
          incidental or consequential damages or for any other damages.

                           About Insight Software Solutions

          Insight Software Solutions is located in Bountiful Utah. Please
          send any inquiries, questions, suggestions or comments to the
          following address:
            INSIGHT SOFTWARE SOLUTIONS         Tel: (801) 295-1890
            P.O. BOX 354                       Fax: (801) 299-1781
            BOUNTIFUL, UT  84011-0354          BBS: (801) 963-8721
                                               CIS: [71672,3464]
          In Canada Contact:
            US-CAN COMPUTER SERVICES INC.      Tel: (403) 243-2393
            BOX 34146, 1200 37th St. S.W.      Fax: (403) 243-2396
            Calgary, Alberta  T3C 3W2          Orders Only: 1-800-663-1537
                                   Internet: BARRY.DUFRESNE@T8000.CUC.AB.CA

                            Contents of Distribution Disk

          The Interest Analyzer diskette contains several files which are
          needed for optimal performance. Their name and function are
          listed below.

          INT.EXE        This is the main executable program.
          INT.CFG        This contains program configuration information
                         such as screen color and printer selections. This
                         file is automatically created if not found.
          INT.PTR        This contains printer definitions for a variety of
                         printers.
          INT.DOC        This is the User Manual for The Interest Analyzer.
          INT.BAT        This is a start up batch file for hard disks.
          INSTALL.EXE    This copies the program to a hard disk.
          INTEREST.DAT   This contains client information for the Interest
                         Calculations.
          AMORT.DAT      This contains client information for the
                         Amortization Calculations.
          DEPREC.DAT     This contains client information for the
                         Depreciation Calculations.
          ANNUITY.DAT    This contains client information for the Annuity
                         Calculations.


          Page 4






                                                      THE INTEREST ANALYZER


                                   Program Support

          Once registered, you will receive notification of major updates
          and new products. Registration includes a 90 day support policy
          where free updates will be provided for major problems. If a
          problem cannot be resolved, then a refund of money will be made.

          Insight Software Solutions offers support through the mail,
          phone, fax, BBS and CIS. Please refer to the address and phone
          numbers on the previous page. Our official support BBS is the
          Rocky Mountain Software BBS (RMS). RMS can be reached 24 hours a
          day at (801) 963-8721 where a conference dedicated to us can be
          found. Our latest software products and versions, bulletins, news
          and message system are located on RMS under conference #4. RMS
          accepts modem baud rates of 1200 to 38400.



                     Insight  Software Solutions is  a member of
                     the Association  of Shareware Professionals
                     (ASP).  ASP  wants to  make  sure  that the
                     shareware  principal works for  you. If you
                     are unable to  resolve a shareware  related
                     problem  with an  ASP member  by contacting
                     the  member directly,  ASP  may be  able to
                     help.   The  ASP  Ombudsman  can  help  you
                     resolve  a dispute  or problem with  an ASP
                     member,  but  does  not  provide  technical
                     support for members' products. Please write
                     to  the ASP Ombudsman  at 545  Grover Road,
                     Muskegon, MI  49442  or send  a  CompuServe
                     message   via   CompuServe  Mail   to   ASP
                     Ombudsman 70007.3536.

















                                                                     Page 5






          THE INTEREST ANALYZER

          Getting Started With the Interest Analyzer

                                 System Requirements

          The Interest Analyzer is almost hardware independent. It will run
          on most PC systems. The minimum requirements are as follows:

            IBM type PC, XT, AT or PS/2 (or compatible)
            384K Ram
            Dos 2.0 or higher
            any monochrome, color, or composite monitor
            virtually any printer that supports condensed printing

                                     Installation

          The Interest Analyzer may be run from either a floppy or hard
          disk. There are no special installation procedures to set the
          program up. To load the program onto a hard disk, simply copy the
          contents of the floppy diskette onto the hard disk. We recommend
          that it be placed into its own subdirectory. An installation
          program called INSTALL.EXE is provided to assist you in the
          installation of the program on a hard drive. From the A> prompt,
          simply type in "INSTALL". This will prompt you through the
          installation process.

                            Running The Interest Analyzer

          To run The Interest Analyzer, simply type "INT". This can be done
          from the floppy disk or from a hard drive if you used the
          provided installation procedure.





















          Page 6






                                                      THE INTEREST ANALYZER

          Screen Layout In The Interest Analyzer

                                 Common Screen Lines

          There are several common screen lines found in The Interest
          Analyzer. This includes the first, second, twenty third, twenty
          fourth, and twenty fifth lines. The first line contains the
          current date and time as specified by DOS. It also contains the
          copyright notice of INSIGHT SOFTWARE SOLUTIONS. The second line
          is part of the box surrounding the user work area. It generally
          contains a centered title describing the function of the current
          screen. The twenty third line is the status line. It shows the
          status of the Help, Caps, Scroll Lock, Num Lock, and Insert keys.
          The twenty fourth line is the prompt line. It indicates what you
          are supposed to do for a given input field. The twenty fifth line
          is the Function Keys Status line. It shows what Function Keys
          (F1, F2, ...) are available for use and what their particular
          functions are.

                                     Menu Screens

          Menu Screens appear as a list of numbered items. There is also a
          movable highlight bar indicating the current menu selection.

                                  Data Input Screens

          Data Input Screens contain fields or areas which can be changed
          by you. These fields are generally preceded by a label indicating
          what type of value is desired for the field.

                                  Data View Screens

          Data View Screens contain scrollable text for your viewing.
          Generally, the text can be scrolled up and down and left and
          right. Indications of the current location in the text are given
          on the left side of the status line.















                                                                     Page 7






          THE INTEREST ANALYZER

          Moving Around In The Interest Analyzer

                                     Menu System

          Menus appear as a list of numbered options. To select the option
          desired, you may press the associated number. An alternate method
          is to use the arrow keys along with the <Enter> key. One option
          is always highlighted and indicates the current option. To change
          the current option, you may press the UP and DOWN arrow keys to
          move the highlight bar. Once the desired option is highlighted,
          pressing the <Enter> key selects it.

                                Moving Field to Field

          Moving from one field to another field can be accomplished by
          many different keystrokes. Listed below is a summary of the
          keystrokes available and the function they perform.

          ENTER KEY:  Moves you to the next logical field.

          RIGHT ARROW KEY:  If the cursor is on the last editing character
          of the field, this key moves the cursor to the right of the
          current field.

          LEFT ARROW KEY:  If the cursor is on the first character of the
          field, this key moves the cursor to the field to the left of the
          current field.

          DOWN ARROW KEY:  Moves the cursor to the field below the current
          field.

          UP ARROW KEY:  Moves the cursor to the field above the current
          field.

          PAGE DOWN KEY:  Moves the cursor to the last field on the screen.

          PAGE UP KEY:  Moves the cursor to the first field on the screen.

          TAB KEY:  Moves the cursor to the next logical field.

          TAB LEFT KEY:  Moves the cursor to the previous logical field.

          <CTRL> RIGHT ARROW KEY:  Moves the cursor to the field to the
          right of the current field.

          <CTRL> LEFT ARROW KEY:  Moves the cursor to the field to the left
          of the current field.




          Page 8






                                                      THE INTEREST ANALYZER

                                Editing Within a Field

          Editing within a field can be accomplished with many different
          keystrokes. Listed below is a summary of the keystrokes available
          and the functions they perform.

          RIGHT ARROW KEY:  Moves the cursor one character to the right.

          LEFT ARROW KEY:  Moves the cursor one character to the left.

          HOME KEY:  Moves the cursor to the beginning of the field.

          END KEY:  Moves the cursor to the last character in the field.

          BACKSPACE KEY:  Moves the cursor to the left one character and
          erases that character and shifts all trailing characters to the
          left one space.

          INSERT KEY:  Toggles between insert mode and typeover mode.

          DELETE KEY:  Erases the character under the cursor and shifts all
          trailing characters to the left one space.

          ALPHA/NUMERIC KEY:  Outputs the character where the cursor is and
          moves the cursor over to the right, one space. If insert mode is
          on, then all trailing characters are moved to the right, one
          space.

                                 Special Fixed Fields

          There are certain fields which have fixed values. When the cursor
          is moved to these fields, a window of choices appears. Each
          choice has either an associated number or letter next to it.
          Pressing the associated number or letter automatically makes the
          desired selection and moves the choice into the input field.

                                Special Function Keys

          There are a number of special function keys which perform a
          variety of tasks. These keys are as follows.

          <ESC> KEY:  This key always takes you back one level from where
          ever you are. For example: if you enter a screen from a menu,
          then the <Esc> key will take you back to that menu. 

          <F1> KEY:  This key is the help key. It toggles off and on
          whether help messages should be shown with each input.




                                                                     Page 9






          THE INTEREST ANALYZER

          <F2>..<F10> KEYS:  These other function keys may or may not be
          active and have different functions in different parts of the
          program. Brief explanations of what these keys do are displayed
          on the screen in the Function Key line. Detailed information is
          given under the documentation of each particular screen as to
          which Function Keys are active and what their function is.













































          Page 10






                                                      THE INTEREST ANALYZER

          Interest Illustrations

                                   Interest Inputs

          There are up to 17 different Interest Inputs depending on the
          Interest Illustration chosen. They are as follows:

          TITLE:  This is a title line printed on the top of the
          illustration. This uses a line on the illustration print out only
          if something is entered; therefore, you can fit more illustration
          on a page if the title is left blank.

          PRODUCED FOR:  This is for personalizing the printed
          illustration. This uses a line on the illustration print out only
          if something is entered; therefore, you can fit more illustration
          on a page if this is left blank. Please note that if you are
          saving and restoring client information (files) that the filer
          system distinguishes unique cases by this name; therefore, you
          should specify a name if you wish to save different cases.

          PRODUCED BY:  This is for personalizing the printed illustration.
          This uses a line on the illustration print out only if something
          is entered; therefore, you can fit more illustration on a page if
          this is left blank.

          DEPOSIT METHOD:  This is the frequency of deposits to be made.
          This may be on a weekly, bi-weekly, semi-monthly, monthly,
          quarterly, semi-annual or annual basis.

          COMPOUND METHOD:  This is the frequency at which the interest
          rate is compounded. This may be on a daily (360 or 365 days),
          monthly, quarterly, semi-annual or annual basis.

          BEGINNING BALANCE:  This is a beginning balance or a lump sum
          amount that the interest calculation starts out with above and
          beyond the first monthly or yearly deposit.

          MONTHLY DEPOSIT:  This is the amount of money that is to be
          deposited every month. Depending on the "deposit method", this
          may be "weekly deposit", "bi-weekly deposit", etc. in which case
          it is the amount of money to be deposited for the given period.
          Deposits are assumed made at the beginning of each period. A
          notation to the right of the deposit will say either "flat
          deposits", "variable deposits" or "COLA deposits". "Flat
          deposits" means that the monthly deposit shown is for every
          single period during the term of the illustration. "Variable
          deposits" means that it has been specified at some point to use a
          different deposit. Variable deposits are made possible through



                                                                    Page 11






          THE INTEREST ANALYZER

          the F2 (DEPOSITS) function key. "COLA deposits" means that the
          COLA option has been selected and that the deposits are to be
          automatically adjusted for a given cost of living percentage.

          DURATION IN MONTHS:  This is the number of months to compute and
          run the illustration. The maximum number of months allowable is
          480 or 40 years. If the "deposit mode" has been specified as a
          period greater than a month, then the months are automatically
          truncated to the nearest specified period. For example, an annual
          deposit mode would change an input of 123 to 120.

          INTEREST RATE:  This is the rate at which to compound the money.
          Three decimal places are allowed. A notation to the right of the
          interest rate will say either "flat rate" or "variable rate".
          "Flat rate" means that the interest rate shown is for every
          single period during the term of the illustration. "Variable
          rate" means that it has been specified at some point to use a
          different rate. Variable interest rates are made possible through
          the F3 (INTEREST) function key.

          ORIGINATION DATE:  This is the date at which the money is first
          deposited and the illustration starts. The printed illustration
          keeps track of each payment period based upon the origination
          date.

          ILLUSTRATION DETAIL:  This determines whether to print every
          month, quarter, half year or year of detail on the illustration.
          The illustration detail cannot be a smaller period than that
          specified in the deposit mode. For example, you cannot illustrate
          monthly values for an illustration which has only annual
          deposits. Deposit Methods of weekly, bi-weekly and semi-monthly
          are always illustrated on an annual basis.

          YEARLY BASIS:  The cumulative totals of the illustration can be
          displayed on either a calendar or fiscal year basis. A fiscal
          year basis displays the totals at exact yearly intervals. For
          example, a monthly deposited illustration which starts in March
          would show totals each March. If a calendar basis is chosen, then
          totals would be shown at the end of each calendar year or the
          period closest to the end of the year.

          SPECIAL OPTIONS:  This consists of five choices which are as
          follows: None, Tax Imposed Comparison, Cost of Waiting
          Comparison, Tax Imposed Cost of Waiting Comparison, and Cost of
          Lower Interest Rates. Selecting "None" will produce a basic
          interest accumulation illustration. The "Tax Imposed Comparison"
          does a comparison of the Basic Interest Illustration along side
          the same illustration with the interest rate adjusted for a given



          Page 12






                                                      THE INTEREST ANALYZER

          tax bracket. It shows your real return on money for non tax-
          sheltered savings. It also shows the difference in savings using
          non-taxed investments. The "Cost of Waiting Comparison" does a
          comparison of the Basic Interest Illustration along side itself
          offset by a given number of months. It shows the difference in
          savings over the years that you can make by saving now instead of
          later. The "Tax Imposed Cost of Waiting Comparison" is the same
          as the "Cost of Waiting Comparison" except that its values have
          the interest rate adjusted for a given tax bracket. The Basic
          interest illustration is not shown here. The "Cost of Lower
          Interest Rates" does a comparison of two interest rates on the
          same deposits for the same duration and shows them side by side
          with the difference in earnings. This allows you to see the
          difference in savings that can be made by obtaining higher
          interest rates.

          ALTERNATE INT. RATE:  This is a second interest rate for interest
          rate comparisons. This only appears when the special option "Cost
          of Lower Interest Rates" is selected.

          TAX BRACKET:  This is the estimated tax bracket in a percentage
          form of the person for whom the illustration is for. This only
          appears when the special option "Tax Imposed Comparison" or "Tax
          Imposed Cost of Waiting Comparison" is selected.

          MONTHS TO WAIT:  This specifies the number of months to wait
          before doing the comparison. This only appears when the special
          option "Cost of Waiting Comparison" or "Tax Imposed Cost of
          Waiting Comparison" is selected.

          USE AUTOMATIC COLA:  This selection forces the deposits to be
          incremented each year by a "cost of living adjustment". Selecting
          this field, disables the F2 Deposits key. This is helpful for
          those savings which are based on a percentage of salary where the
          deposit amount increases with an annual salary increase.

          COLA PERCENTAGE RATE:  This is the percentage amount that the
          deposits are to be incremented by each year. This field only
          appears when the "Use Automatic COLA" is selected.

                                Interest Function Keys

          F2 KEY (DEPOSITS):  This pops up another screen which allows up
          to 100 deposit inputs. Each deposit is numbered. New function
          keys appear indicating how to change deposits above 100. There
          will be enough inputs and function keys to cover the duration
          specified for the illustration. By this fashion you may enter in
          different deposits for the entire span of the illustration. The



                                                                    Page 13






          THE INTEREST ANALYZER

          new F2 key (DUP) will duplicate the previous value and advance
          the cursor. This allows easy duplication of deposits without
          having to rekey them all in.

          F3 KEY (INTEREST):  This pops up another screen which allows up
          to 120 interest rate inputs. Each interest rate is numbered. New
          function keys appear indicating how to change interest rates
          above 120. There will be enough inputs and function keys to cover
          the duration specified for the illustration. By this fashion you
          may enter in different interest rates for the entire span of the
          illustration. The new F2 key (DUP) will duplicate the previous
          value and advance the cursor. This allows easy duplication of
          interest rates without having to rekey them all in.

          F4 KEY (VIEW):  This calculates the illustration with the given
          values and displays the illustration in a window on the screen.
          The illustration can be scrolled around the window vertically and
          horizontally by use of the arrow, PgUp, PgDn, Home and End keys.
          The viewed illustration is identical to what the printed
          illustration will look like with the exception that the printed
          illustration may use condensed and bold print.

          F5 KEY (PRINT):  This calculates the illustration with the given
          values and sends the results to the printer. Depending on the
          width of the illustration, the program chooses whether to print
          using condensed print or not. All illustrations are centered, but
          can be adjusted by means of the printer configuration section,
          and have titles and totals in bold print. Each page is numbered.

          F6 KEY (FILER):  This brings up the filing system menu. See the
          documentation on the filing system.

          F9 KEY (QUICK CALC):  This simply pops up the quick calculator.
          See the documentation about the quick calculator for usage.

















          Page 14






                                                      THE INTEREST ANALYZER

          Amortization Illustrations

                                 Amortization Inputs

          There are up to 16 different Amortization Inputs depending on the
          Amortization Illustration chosen. They are as follows.

          TITLE:  See "title" under Interest Inputs.

          PRODUCED FOR:  See "produced for" name under Interest Inputs.

          PRODUCED BY:  See "produced by" under Interest Inputs.

          PAYMENT MODE:  This is the frequency of payments to be made. This
          may be on a monthly, quarterly, semi-annual or annual basis.

          COMPOUND METHOD:  This is the frequency at which the interest
          rate is compounded. This may be on a daily (360 or 365 days),
          monthly, quarterly, semi-annual or annual basis. Generally, a
          mortgage is compounded on a monthly basis.

          ORIGINAL PRINCIPAL:  This is the original principal of the amount
          to amortize.

          ROUND TO THE CENT:  When selected, payments are rounded up to the
          nearest cent, Interest and Principal are rounded to the nearest
          cent. This produces a schedule where all values are totally in
          sync. Since the payments are rounded to the nearest cent, the
          last payment will generally be slightly different than the rest.
          If not selected, then values are not rounded internally. They
          appear on the schedule rounded to the nearest cent, but totals
          may be slightly out of sync by a few cents.

          NUMBER OF MONTHS:  This is the number of months over which to
          amortize the original principal. This can be up to 360 months
          allowing for a 30 year amortization.

          INTEREST RATE:  This is the rate at which to amortize. Three
          decimal places are allowed. A notation to the right of the
          interest rate will indicate either "flat rate" or "variable
          rate". "Flat rate" means that the interest rate shown is for
          every period during the amortization. "Variable rate" means that
          it has been specified at some point to use a different rate.
          Variable interest rates are made possible through the F3
          (INTEREST) function key.

          ORIGINATION DATE:  This is the date at which the amortization
          starts. The printed illustration keeps track of every month and



                                                                    Page 15






          THE INTEREST ANALYZER

          year based upon the origination date.

          ILLUSTRATION DETAIL:  This determines whether to print every
          month, quarter, half year or year of detail on the illustration.
          The illustration detail cannot be a smaller period than that
          specified in the payment mode. For example, you cannot illustrate
          monthly values for an illustration which has only annual
          payments.

          SEQUENCE COLUMN:  This allows you to specify the left column of
          the illustration. The options produce the following columns:
          "Date Only"  "Payment Number Only"   "Date & Payment Number"

               PMT                 PMT
               DATE                NUM            NUM    DATE
               --------            ---            ---  --------
               10/25/94             1              1   10/25/94
               11/25/94             2              2   11/25/94

          YEARLY BASIS:  This allows you to select when the cumulative
          totals of the illustration are to be displayed. They can be
          displayed on either a calendar or fiscal year basis. A fiscal
          year basis displays the totals at exact yearly intervals. For
          example, a loan paid monthly which starts in March would show
          totals each March. If a calendar basis is chosen, then totals
          would be shown at the end of each calendar year or the period
          closest to the end of the year. For example, a loan paid
          quarterly which starts in April would have payments in April,
          July and October. The yearly totals would then be displayed each
          October because it is the last period in the calendar year.

          SPECIAL OPTIONS:  This consists of seven choices which are as
          follows: None, Recurring Extra Payment, Variable Extra Payment,
          Double Principal Payment, Balloon Payment, 13 Monthly Payments
          Per Year and Variable Payment. Selecting "None" is for doing
          basic amortization illustrations consisting of six basic
          elements: Original Principal, Payments, Interest Rate, Interest
          Paid, Principal Paid, and Remaining Principal. The "Recurring
          Extra Payment" option adds the ability to specify a constant
          extra amount payable towards the principal each month. The new
          amortization is compared to the Basic Amortization. This allows
          you to see how a little more of a payment reduces the length of a
          mortgage by a great deal. The "Variable Extra Payment" option
          works just like the "Recurring Extra Payment" except that a
          different extra amount can be specified for any month or period
          of the loan. The "Double Principal Payment" option displays what
          doubling the principal payment each month does to the loan. It
          cuts the loan period almost in half. The "Balloon Payment" option



          Page 16






                                                      THE INTEREST ANALYZER

          adds the ability to show the loan for a short period of time and
          then what one final payment would be to pay off the loan. The "13
          Monthly Payments Per Year" option allows you to specify a month
          where two normal payments will be made. This typically reduces a
          30 year mortgage to 21 years. This closely simulates a bi-weekly
          payoff schedule. The "Variable Payment" option adds the
          flexibility to specify whatever payments you would like for every
          month of the mortgage. This amortization is compared to the Basic
          Amortization. You can specify exactly how you plan to pay your
          mortgage and see the effect it has.

          EXTRA PAYMENT AMOUNT:  This field appears only with the special
          option of "Recurring Extra Principal" or "Variable Extra
          Payment". It is an additional amount of money which is to be
          applied to the loan each and every period. This amount of money
          pays towards the principal of the loan and accelerates the
          amortization and pays it off early.

          PAYMENT AMOUNT:  This field appears only with the special option
          of "Variable Payment". The periodic payment is normally
          determined by amortizing the original principal at the given
          interest rate for a given duration. The Periodic Payment field;
          however, lets you override the periodic payment amount. You can
          specify whatever amount you want to pay towards the loan. This
          allows total flexibility in the amounts you wish to pay towards
          your loan. A notation to the right of the periodic payment will
          indicate either "flat payments" or "variable payments". "Flat
          payments" means that the periodic payment shown is for every
          single period during the term of the illustration. "Variable
          Payments" means that it has been specified at some point to use a
          different periodic payment. Variable payments are made possible
          through the F2 (PAYMENTS) function key.

          MONTHS UNTIL BALLOON:  This field appears only with the special
          option of "Balloon Payment". It allows the number of months to be
          specified before the balloon payment is to be made.

          USE TAX SAVINGS:  This field appears only if the payment mode is
          monthly. It is intended to be used for mortgages only. The tax
          savings option adds several elements to the Basic Illustration.
          Property taxes and insurance amounts are added to give a fuller
          picture of your total payment. Tax savings (based on itemized
          deductions) are also computed with a given tax bracket. Tax
          savings may be used in conjunction with any of the special
          options.

          TAX BRACKET:  This field appears only if the tax savings feature
          has been selected. This is the estimated tax bracket in a



                                                                    Page 17






          THE INTEREST ANALYZER

          percentage form of the person for whom the amortization is for.
          This allows an estimated savings in taxes that a person can
          realize from a mortgage based on itemized deductions.

          MONTHLY PROPERTY TAX:  This field appears only if the tax savings
          feature has been selected. This is the amount of property tax
          paid per month for a mortgage. This allows a fuller picture of
          actual payments of a mortgage and helps estimate the tax savings.

          MONTHLY INSURANCE:  This field appears only if the tax savings
          feature has been selected. This is the cost of insurance which is
          required on most mortgages. This allows a fuller picture of
          actual payments for a mortgage.






































          Page 18






                                                      THE INTEREST ANALYZER



                              Amortization Function Keys

          F2 KEY (PAYMENTS):  This function key is available only if one of
          the following special options has been selected: Variable Extra
          Payment, Variable Payments. This pops up another screen which
          allows up to 100 payment inputs. Each payment is numbered. New
          function keys appear indicating how to change payments above 100.
          There will be enough inputs and function keys to cover the
          duration specified for the illustration. By this fashion you may
          enter in different payments for the entire span of the
          illustration. The new F2 key (DUP) will duplicate the previous
          value and advance the cursor. This allows easy duplication of
          payments without having to rekey them all in.

          F3 KEY (INTEREST):  This pops up another screen which allows up
          to 120 interest rate inputs. Each interest rate is numbered. By
          this fashion you may enter in different interest rates for each
          period of the illustration and produce a stepped rate or variable
          rate mortgage illustration. The new F2 key (DUP) will duplicate
          the previous value and advance the cursor. This allows easy
          duplication of interest rates without having to rekey them all
          in.

          F4 KEY (VIEW):  This calculates the illustration with the given
          values and displays the illustration in a window on the screen.
          The illustration can be scrolled around the window vertically and
          horizontally by use of the arrow, PgUp, PgDn, Home and End keys.
          The viewed illustration is identical to what the printed
          illustration will look like with the exception that the printed
          illustration may use condensed and bold print.

          F5 KEY (PRINT):  This calculates the illustration with the given
          values and sends the results to the printer. Depending on the
          width of the illustration, the program chooses whether to print
          using condensed print or not. All illustrations are centered, but
          can be adjusted by means of the printer configuration section,
          and have titles and totals in bold print. Each page is numbered.

          F6 KEY (FILER):  This brings up the filing system menu. See the
          documentation on the filing system.

          F9 KEY (QUICK CALC):  This simply pops up the quick calculator.
          See the documentation about the quick calculator for usage.






                                                                    Page 19






          THE INTEREST ANALYZER

          Depreciation Illustrations

                                 Depreciation Inputs

          There are up to 16 different Depreciation Inputs. They are as
          follows.

          TITLE:  See "title" under Interest Inputs.

          PRODUCED FOR:  See "produced for" under Interest Inputs.

          PRODUCED BY:  See "produced by" under Interest Inputs.

          STRAIGHT LINE METHOD:  This allows you to select the straight
          line method of depreciation to appear on the illustration.

          LIFE PERIODS METHOD:  This allows you to select the life periods
          method of depreciation to appear on the illustration.

          ANNUITY METHOD:  This allows you to select the annuity method of
          depreciation to appear on the illustration.

          SINKING FUND METHOD:  This allows you to select the sinking fund
          method of depreciation to appear on the illustration.

          MACRS METHOD (200%):  This allows you to select the MACRS (200%)
          method of depreciation to appear on the illustration.

          MACRS METHOD (150%):  This allows you to select the MACRS (150%)
          method of depreciation to appear on the illustration.

          ITEM TO DEPR.:  This is simply the name of the item to be
          depreciated. It appears as a header on the illustration.

          ORIGINAL COST:  This is the original cost or value of the item to
          be depreciated.

          RESIDUAL VALUE:  This is the value of the depreciated item after
          the depreciation period ends.

          YEARS OF DEPRECIATION:  This is the depreciation period. It is
          the number of years over which to depreciate the item.

          ANNUITY INTEREST RATE:  This is an interest rate which is used
          internally for calculating the Annuity and Sinking Fund methods
          of depreciation. This field only appears if one these methods is
          selected.




          Page 20






                                                      THE INTEREST ANALYZER

          TIME CONVENTION:  This is the period during the year which the
          depreciation starts. Available conventions are full year, half
          year and 1st - 4th midquarters. These time conventions only apply
          to the Straight Line, Life Periods and MACRS depreciation
          methods. It only appears if one of these methods is selected.

          PERCENT ROUNDING:  This is the accuracy or rounding of the
          percentages used each year for depreciation. It indicates the
          number of decimal places to use in the percentages. These
          percentages only apply to the Straight Line, Life Periods and
          MACRS depreciation methods. It only appears if one of these
          methods is selected.

                              Depreciation Function Keys

          F4 KEY (VIEW):  This calculates the illustration with the given
          values and displays the illustration in a window on the screen.
          The illustration can be scrolled around the window vertically and
          horizontally by use of the arrow, PgUp, PgDn, Home and End keys.
          The viewed illustration is identical to what the printed
          illustration will look like with the exception that the printed
          illustration may use condensed and bold print.

          F5 KEY (PRINT):  This calculates the illustration with the given
          values and sends the results to the printer. Depending on the
          width of the illustration, the program chooses whether to print
          using condensed print or not. All illustrations are centered, but
          can be adjusted by means of the printer configuration section,
          and have titles and totals in bold print. Each page is numbered.

          F6 KEY (FILER):  This brings up the filing system menu. See the
          documentation on the filing system.

          F9 KEY (QUICK CALC):  This simply pops up the quick calculator.
          See the documentation about the quick calculator for usage.
















                                                                    Page 21






          THE INTEREST ANALYZER

          Immediate Annuity Illustrations

                               Immediate Annuity Inputs

          There are 10 different Immediate Annuity Inputs. They are as
          follows.

          TITLE:  See "title" under Interest Inputs.

          PRODUCED FOR:  See "produced for" under Interest Inputs.

          PRODUCED BY:  See "produced by" under Interest Inputs.

          BEGINNING BALANCE:  This is a beginning balance that the annuity
          starts out with.

          PAYOUT:  This is the desired payout. It will be calculated based
          on the other values. Entering a desired payout will adjust the
          beginning balance to indicate the amount of money required.

          PAYOUT METHOD:  This is the frequency at which payouts are made.
          This may be on a weekly, bi-weekly, semi-monthly, monthly,
          quarterly, semi-annual or annual basis.

          DURATION IN MONTHS:  This is the number of months to compute and
          run the illustration. The maximum number of months allowable is
          480 or 40 years. If the "payout method" has been specified as a
          period greater than a month, then the months are automatically
          truncated to the nearest specified period. For example, an annual
          payout mode would change an input of 123 to 120.

          INTEREST RATE:  This is the rate at which to compound the money.
          Three decimal places are allowed. 

          COMPOUND METHOD:  This is the frequency at which the interest
          rate is compounded. This may be on a daily (360 or 365 days),
          monthly, quarterly, semi-annual or annual basis.

          ORIGINATION DATE:  This is the date at which the money is first
          deposited and the illustration starts. The printed illustration
          keeps track of each payment period based upon the origination
          date.









          Page 22






                                                      THE INTEREST ANALYZER


                           Immediate Annuity Function Keys

          F4 KEY (VIEW):  This calculates the illustration with the given
          values and displays the illustration in a window on the screen.
          The illustration can be scrolled around the window vertically and
          horizontally by use of the arrow, PgUp, PgDn, Home and End keys.
          The viewed illustration is identical to what the printed
          illustration will look like with the exception that the printed
          illustration may use condensed and bold print.

          F5 KEY (PRINT):  This calculates the illustration with the given
          values and sends the results to the printer. Depending on the
          width of the illustration, the program chooses whether to print
          using condensed print or not. All illustrations are centered, but
          can be adjusted by means of the printer configuration section,
          and have titles and totals in bold print. Each page is numbered.

          F6 KEY (FILER):  This brings up the filing system menu. See the
          documentation on the filing system.

          F9 KEY (QUICK CALC):  This simply pops up the quick calculator.
          See the documentation about the quick calculator for usage.




























                                                                    Page 23






          THE INTEREST ANALYZER

          Quick Calculator

          The Quick Calculator can be selected as option five from the main
          menu or by the F9 (QCALC) Key from one of the input screens. The
          Quick Calculator option is used to calculate a variety of
          financial calculations and for simple math functions. Selecting
          the Quick Calculator pops up a window which contains its own
          menu. You can select a financial value to solve for or a four
          function calculator.

                                 Financial Calculator

          The financial calculator consists of two parts. One is for
          calculating present values and future values and the other is for
          calculating loans. The first consists of five solve for values
          and the second consists of four solve for values. By selecting
          one of these values to solve for, inputs appear which you must
          enter to solve for the selected value. These values and inputs
          are listed below.

                                Present/Future Values

          PRESENT VALUE:  This lets you solve for a lump sum amount (or
          present value) given the future value, interest rate, number of
          months, and any period deposits.

          DEPOSITS:  This lets you solve for a periodic deposit given the
          future value, interest rate, number of periods, and a lump sum
          amount (present value).

          DURATION:  This lets you solve for the number of periods it takes
          to reach a future value given the future value, interest rate,
          periodic deposit, and a lump sum deposit.

          INTEREST RATE:  This allows you to solve for an interest rate
          based on the present value, the number of periods, the number of
          deposits and the future value.

          FUTURE VALUE:  This allows you to solve for a future value given
          a lump sum amount (present value), a periodic deposit, an
          interest rate, and the number of periods.

                                        Loans

          PRINCIPAL:  This allows you to solve for the principal amount of
          a loan given the periodic payment, duration and interest rate.

          PAYMENT:  This allows you to solve for the periodic payment of a



          Page 24






                                                      THE INTEREST ANALYZER

          loan given the principal amount, duration and interest rate.

          DURATION:  This allows you to solve for the duration of a loan
          given the principal amount, periodic payment and interest rate.

          INTEREST RATE:  This allows you to solve for the interest rate of
          a loan given the principal amount, periodic payment and duration.

                               Four Function Calculator

          The four function calculator simply allows you to type in numbers
          and add, subtract, multiply, and divide them. It displays the
          result. The result can then be used as one of the next numbers in
          a calculation.





































                                                                    Page 25






          THE INTEREST ANALYZER

          On-line User Manual

          The Interest Analyzer provides the capability to review this
          manual on-line. Option number six from the main menu allows this.
          Once option six is selected, the user manual is loaded into
          memory and displayed on the screen. You can scroll through it at
          will by use of the arrow keys and PgUp and PgDn keys. The manual
          can be printed by your printer by simply pressing the F2 Key. The
          file "INT.DOC" contains the user manual. It is in standard ascii
          format and can be read in by virtually any editor or word
          processor. It can be printed by simply using the Dos Print
          command.







































          Page 26






                                                      THE INTEREST ANALYZER

          Configuration

          The configuration section allows you to configure the program to
          work with the printer of your choice, to work with the colors of
          your choice and to set up miscellaneous functions and data used
          in the program. Option number seven from the main menu brings up
          this menu. 

                              Color Attribute Selection

          Selecting the color attribute option brings up a screen with a
          list of all the different areas where different colors are used
          and a displayed list of color to choose from. These are listed
          below with a brief description of what areas are effected by the
          specified color attribute names. Listed below the attribute names
          is a list of active Function Keys which can help in setting up
          your colors. 

          SCREEN ATTRIBUTE:  This is the color that the screen uses
          everywhere except for the following special areas. This is the
          most common color.

          FIELD ATTRIBUTE:  This is the color that input fields appear in
          while they are not being edited. This distinguishes them from
          normal text on the screen.

          EDIT ATTRIBUTE:  This is the color of an input field while it is
          being edited. This helps identify where you are at on the screen.

          FKEY ATTRIBUTE:  This is the color that the FKey line appears as
          at the bottom of the screen.

          ERROR ATTRIBUTE:  This is the color that error messages pop up
          in.

          MENU NORMAL ATTRIBUTE:  This is the color that pop up scrollable
          selection windows appear in.

          MENU HIGHLIGHT ATTRIBUTE:  This is the color that the highlighted
          selection of menus and pop up scrollable selections appear in.

          STATUS ATTRIBUTE:  This is the color that the screen title
          appears in. It is also the color of the Caps Lock, Num Lock,
          Insert, Scroll, and Help status appear in.

          F2 KEY (SHOW COLOR):  This displays the current color specified
          in the field where the cursor is located. The color is displayed
          in a little window in the bottom right corner.



                                                                    Page 27






          THE INTEREST ANALYZER

          F3 KEY (OTHER COLORS):  There are 256 colors available, but only
          128 of them are displayed on the screen at one time. The F3 Key
          toggles between displaying the different sets of 128 colors.

          F4 KEY (DEFAULT MONO):  This automatically sets all the fields to
          the default colors selected by Insight Software Solutions for a
          monochrome monitor.

          F5 KEY (DEFAULT COLOR):  This automatically sets all the fields
          to the default colors selected by Insight Software Solutions for
          a color monitor.

                                  Printer Selection

          The printer selection brings up a menu which has several options.
          The options are to Select A Printer, Delete A Printer, Add A
          Printer, Modify A Printer, and to Alter Line Spacing and Margins.
          Below the menu items is a list of the current printer
          specifications.

          Selecting a printer brings up a list of printers. Simply use the
          arrow keys to highlight your printer type and press the <Enter>
          key. If your printer is not listed, you may try several of the
          printers listed to see if your printer is compatible with one of
          those listed. If it is not then you may enter your own printer
          definition for your exact printer.

          Deleting a printer definition should not be used very often.
          Simply use the arrow keys to select the printer definition to be
          deleted and press the <Enter> Key. You will be prompted to verify
          that you really want to delete the printer definition.

          Adding a printer definition can be difficult if you are not
          familiar with printer control sequences. Selecting this option
          brings up a printer input screen. It asks for a printer name
          along with many different printer control sequences. The printer
          control sequences need to be entered in hexadecimal notation. If
          you are incapable of performing this task, Insight Software
          Solutions is willing to set up your printer definition for free
          if you are a registered user and you send Insight Software
          Solutions a copy of the control codes out of your printer manual.

          Modifying a printer definition brings up the same screen as
          Adding a printer definition. You may then change any of the
          fields desired. If the printer name is changed, the changed
          definition will not be overwritten, but will appear as a new
          printer definition. This allows you to create a similar printer
          definition without rekeying all the control sequences back in.



          Page 28






                                                      THE INTEREST ANALYZER

          The altering line spacing and margins allows you to specify seven
          different items. These items are: the top margin, left margin,
          line spacing, page pausing, IBM graphics characters, Printer Port
          and printer error bypass. The illustration is automatically
          centered on the page left to right starting at line one. If you
          desire a top margin it can be specified. (Note: Laser printers
          should not normally specify a top margin.) If a larger left
          margin is desired (for punched holes, etc) then a larger left
          margin can be specified. The line spacing can be sent to either 6
          lines per inch or 8 lines per page if more information per page
          is desired. "Pause After Each Page" allows you to insert new
          pieces of paper if your printer does not have continuous form
          paper. Selecting the IBM graphics characters, tells the program
          to build the illustration using graphic characters for dashes and
          double dashes. Using the graphic characters produces a solid
          line. These characters are used under headings, etc. Some
          printers do not support these characters. If you select this
          option and you get strange results on your printout, then you
          will need to turn this option off. You may select to have your
          printed output go to either LPT1, LPT2 or LPT3; this is helpful
          if you have more than one printer connected to your computer. You
          may select to have the program bypass all printer error checking.
          There are rare cases where the printer error checking can cause
          an error message to display even though there really is not an
          error. Certain hardware like an automatic printer switching box
          or some software spoolers may cause this. You may turn the error
          checking off by selecting "Y" here to avoid this rare problem.
          CAUTION: If your system works with the error checking on, then DO
          NOT turn it off. If there is a real printer problem, the computer
          could get hung and require a reboot.

                               Miscellaneous Selection

          The Miscellaneous Configuration section allows you to adjust the
          program and the illustration more to your liking. There are eight
          inputs. The first three are for permanent illustration header
          lines. Typically these lines would be set to your company name
          and address, but can be set to anything. These lines appear at
          the top of every illustration before anything else. These lines
          do not need to be retyped each time the program is run. They are
          saved and retrieved each time it is used. By selecting the "Turn
          Sound Off" selection, most sound effects will not occur. If you
          do not wish to see the startup logo each time you run The
          Interest Analyzer, then you may select "Bypass Logo at Start". By
          selecting "Erase Numeric Fields", this will cause the program to
          clear a numeric field of its current value when you type a digit
          as the first thing you do when editing the field. "Erase Alpha
          Fields" is identical to the "Erase Numeric Field", but applies to



                                                                    Page 29






          THE INTEREST ANALYZER

          fields that allow normal text in them. The "Report Date Format"
          allows you to choose one of several date formats. The format
          selected is used in the reports and illustrations.  
















































          Page 30






                                                      THE INTEREST ANALYZER

          Filing System

          The Interest Analyzer provides the capability to save and
          retrieve Interest, Amortization, Depreciation and Annuity client
          information that you have been working on. To invoke this option,
          press the F6 FILER Key from within one of the input screens--this
          will bring up a menu. The menu allows you to load saved client
          information or save out the existing client information you are
          working on. Multiple clients are distinguished by the type of
          illustration (interest, amortization, depreciation or annuity)
          and the name specified as the client. When saving client
          information, if a client by the chosen name already exists, you
          will be prompted to either not save or to overwrite the existing
          client information. Retrieving client information is simple. A
          list of all saved client names will appear. You can scroll
          through the client names and by pressing the <Enter> Key, load in
          the highlighted client. Saved client information can be marked
          for deletion by pressing the F2 (MARK A CASE) Key. This simply
          puts a little box to the left of the client name. You can mark as
          many as desired for deletion. No client information is deleted
          until the F3 (DELETE MARKED CASES) key is pressed. Pressing the
          F3 (DELETE MARKED CASES) Key still gives you one more chance to
          back out before deletion begins.

                              Answers To Common Problems

          Problem:  The reports do not print out correctly on my printer.
          Solution:  Make sure that the correct printer driver has been
          selected.  To select a printer driver, you enter the
          configuration menu.  Select "Printer Selection", then select
          "Select A New Printer Default".  Choose the appropriate printer. 
          If your printer is not listed, then it is more than likely
          compatible with another printer listed.  Almost all printers fall
          under one of the following printers: Epson, IBM Graphics Printer
          or HP LaserJet II.  

          Problem:  Every time I try to print, the program tells me that my
          printer is either off-line or out of paper.
          Solution:  The program attempts to make sure the printer is okay. 
          Some networks, spoolers and hardware fool the program into
          thinking that the printer is not okay.  There is an option in the
          program to bypass this printer error checking.  You must turn it
          on.  To turn it on, do the following: Enter the configuration
          menu, Select "Printer Selection", then select "Alter Line
          Spacing, Margins & Misc".  This brings up an entry screen. 
          Change the "Bypass Printer Check" to a "Y".





                                                                    Page 31


```
{% endraw %}

## ORDER.DOC

{% raw %}
```
                    INSIGHT SOFTWARE SOLUTIONS Software Order Form

  Name:    ___________________________________________________________

  Address: ___________________________________________________________

  Address: ___________________________________________________________

  City: ___________________  State/Prov: ____________  Zip: __________               

  Country: ________________________

  Day Phone: ________________   Evening Phone:  _________________
                                     
  Payment Method:  [ ] Check   [ ] Money Order   [ ] Visa   [ ] MasterCard

  Card Number: _____________________________________  Exp. Date:  ___/___
  
  Signature:   _______________________________________________________
  
  Diskette Size:   5.25"     3.5"   (Circle One)

                      The Debt           The Mortgage       The Interest
  Product Name:       Analyzer             Analyzer           Analyzer

  Product Cost:        $20.00 U.S.        $25.00 U.S.         $25.00 U.S.
                       $25.00 Canadian    $32.00 Canadian     $32.00 Canadian

  Quantity       x    ________            ________            ________

  Subtotal       $    ________            ________            ________

  Total          $    ________            ________            ________

  Subtotal of all products  $ ________

  Sales Tax                   ________     (Utah Residents Only [6.25%])

  Shipping & Handling         ________     ** See charges below

  Goods and Service Tax       ________     (Canadian Orders Only [7.00%])

  Total Amount Enclosed     $ ________

  Please send check, money order, Visa or MasterCard order to:
                                                 ** IN CANADA **
        INSIGHT SOFTWARE SOLUTIONS          US-CAN Computer Services Inc.
        P.O. Box 354                        Box 34146, 1200 37th St. S.W.
        Bountiful, Utah  84011-0354         Calgary, Alberta, T3C 3W2

  OR Phone or Fax your Visa or MasterCard order to:
                                                 ** IN CANADA **
       Tel: 801 295-1890                    Tel: 403-243-2393
       Fax: 801 299-1781                    Fax: 403-243-2396
                                    Orders Only: 800-663-1537

  ** Shipping & Handling                        ** IN CANADA **
   U.S. First Class Mail     -- $3.00     Canada Post Commercial -- $4.00
   U.S. Priority Mail        -- $5.00     Priority Post Next Day -- $9.00
   U.S. Air Mail (over seas) -- $5.00

   *** Site Licenses with quantity discounts available.  Please Call. ***

```
{% endraw %}

## PRODUCTS.DOC

{% raw %}
```
                  Insight Software Solutions Product Briefs

                             THE DEBT ANALYZER

  The Debt Analyzer, a financial software package for the IBM PC, is the
  perfect tool to help reduce and eliminate debt.  Debt reduction can be
  illustrated through a loan payment schedule or through loan consolidation.
  Up to 20 debts can be handled at one time.  The loan payment schedule
  displays the payments to be applied to each debt and the balance of each
  debt until the balance reaches zero. Minimum payments or current payments
  may be used. Additional accelerated payments can be applied. One of nine
  debt payoff priority methods can be specified or priorities can be user 
  specified. For consolidated loans, the term or payment of the loan can be
  specified or the sum of all debt payments may be used as the consolidated 
  loan payment. Professional reports, schedules and summaries can be viewed
  on screen, printed or saved to file. Interest savings as well as the number
  of months paid off early are shown. All information can be saved and
  retrieved for multiple clients.

                          THE INTEREST ANALYZER

  The Interest Analyzer, a financial software package for the IBM PC, comes
  complete with a variety of financial tools for calculating Annuities (Sav-
  ings, Interest Accumulation), Amortization (Loans, Mortgages), Depreciation,
  Immediate Annuities and Calculators for solving for missing values. Each
  financial tool contains a variety of options to allow maximum flexibility.
  The Interest (Savings) tool allows variable deposit modes, deposits, with-
  drawals and interest rates.  Professional reports can be generated with
  varying detail. Special options are available to illustrate the time value 
  of compounding and the impact of taxes on savings. The amortization (Loan)
  tool allows variable payments, interest rates and compounding methods.  
  Professional schedules can be generated with varying detail. Special 
  options are available to illustrate the savings incurred with an early 
  payoff of a loan and to show tax savings with mortgages. The depreciation
  tool allows for a variety of depreciation methods to be illustrated using
  different time conventions. The Immediate Annuity tool allows variable
  payout modes and compounding methods.  Professional schedules are produced.
  Professional illustrations and schedules can be viewed on the screen or
  sent to a printer.  Each financial tool has the ability to save and
  retrieve all information entered for multiple clients. 

                          THE MORTGAGE ANALYZER

  This is NOT an ORDINARY mortgage program.  It includes seven predefined
  loan acceleration methods such as bi-weekly, double principal and growing
  equity payments plus the ability to set up *ANY* acceleration method con-
  ceivable through variable extra payments.  Accelerated schedules and/or
  summaries can be produced side by side with the original mortgage or by
  themselves.  Features mortgage comparisons--enter all values for two
  complete mortgages.  Print, view or save to file complete schedules 
  and/or summaries for both side by side. The input screen contains Purchase
  Price, Down Payment, Duration, Interest Rate, Interest Type (Fixed,
  Stepped, Adjustable, Reset), Closing Date, First Payment Date, Points,
  Property Tax, Homeowners Insurance, Mortgage Insurance and closing costs.
  It calculates payments, points, tax savings, daily interest, interest paid,
  interest saved (for acceleration) and complete schedules. Other features 
  include Qualification Analysis reports for conventional, FHA and VA loans.
  Includes solve for missing loan value calculator, loan refinancing, 
  daily interest and points calculators.  Save and restore multiple clients.


               THE DEBT ANALYZER - PROGRAM FEATURES

      Loan Payment Matrix                   Consolidated Loan             
        Up to 20 debts                        Up to 20 debts              
        Payments                              Select Term of Loan
          Minimum Payments                    Select Payment To Make
          Current Payments                    Use Sum of Debt Payments
          Accelerated Payments                Current Debt Summary
        Prioritize Debts                        Name of Debt
          Highest Interest Rate First           Loan Balance
          Smallest Balance First                Number of Months To Pay
          Largest Balance First                 Interst Rate
          Smallest Minimum Payment First        Interest Paid
          Largest Minimum Payment First         Total Interest Paid for all
          Smallest Current Payment First          Debts
          Largest Current Payment First         Total Interest Saved with 
          Shortest Term Debt First                Consolidation
          Largest Term Debt First             Consolidated Loan Schedule
          User Defined
        Debt Payoff Schedule                Other Features                
          Name of Debt                        Save and Retrieve Multiple
          Date To Pay                           Client Information          
          Amount To Pay                       On-line Manual              
          Remaining Balance                   On-line Help for each field 
        Debt Payment Summary                  Effective Rate Calculator
          Name of Debt
          Loan Balance                      Configuration
          Payment Schedule                    Select Own Colors
          Number of Months To Pay             Select/Modify Printer Driver
          Number of Months Saved              Up to 3 Permanent Header Lines
          Interst Rate                        Turn off/on Sound Effects
          Interest Paid                       Bypass Logo Screen
          Interest Saved                      Default Report Options
          Total Interest Paid for all Debts
          Total Interest Saved for all Debts

                      Reports
                        Calendar or Fiscal Year
                        Cumulative or Non Cumulative
                        Whole Dollars or Exact Cents
                        18 Date Formats--International Included
                        View on screen before printing
                        6 or 8 Lines Per Inch
                        Top and Left Margin Adjustment
                        Automatic Bolding of Headers and Totals
                        Automatic Condensed Print when Needed
                        IBM Graphic Characters












                  THE INTEREST ANALYZER - PROGRAM FEATURES

                Interest (Savings, Deferred Annuities, CDs, IRAs)
                -------------------------------------------------
Deposit Modes:     Weekly, Bi-Weekly, Semi-Monthly, Monthly, Quarterly, 
                   Semi-Annual and Annual
Variable Deposits,
Withdrawals &
Interest Rates:    Monthly, Quarterly, Semi-Annual and Annual
Compound Methods:  Daily (360 or 365), Monthly, Quarterly, Semi-Annual, Annual
Report Detail:     Monthly, Quarterly, Semi-Annual and Annual on either a
                   calendar or fiscal year basis
Special Options:   Automatic Cost of Living Adjustments to deposits, Side by
                   side comparisons of: tax and non tax sheltered savings, 
                   different rates and waiting before starting to save.

                               Depreciation
                               ------------
Methods:           Straight Line, Life Periods, Annuity, Sinking Fund,
                   MACRS (200%), MACRS (150%)
Conventions:       Annual, Half-Year and 1st Mid Quarter - 4th Mid Quarter

                      Amortization (Loans, Mortgages)
                      -------------------------------
Payments Modes:    Monthly, Quarterly, Semi-Annual and Annual
Interest Rates:    Monthly, Quarterly, Semi-Annual and Annual
Compound Methods:  Daily (360 or 365), Monthly, Quarterly, Semi-Annual, Annual
Report Detail:     Monthly, Quarterly, Semi-Annual and Annual on either a
                   calendar or fiscal year basis
Special Options:   Side by side comparisons of Recurring Extra Payment,
                   Variable Payments, Variable Extra Payments, Double 
                   Principal Payments and 13 Payments per year. Balloon
                   Payments and Tax Savings Analysis for Mortgages.

                            Immediate Annuities
                            -------------------
Payout Methods:    Weekly, Bi-Weekly, Semi-Monthly, Monthly, Quarterly,
                   Semi-Annual and Annual
Compound Methods:  Daily (360 or 365), Monthly, Quarterly, Semi-Annual, Annual

                             General Features
                             ----------------
Help:              On-line manual, easy menu driven, help for each field
View:              Complete Illustration on screen
Print:             6 or 8 lines per inch, top and left margin adjustment, 
                   automatic bolding of titles and totals, automatic 
                   condensed print when necessary, use of IBM graphic 
                   characters, and support of virtually any printer via 
                   printer definition tables
Save & Retrieve:   Save and retrieve files (cases)
Header Lines:      Up to 3 saved header lines plus one Title Line for each
                   report
Dates:             International Date Formats in Reports
Sound effects:     Choose off or on
Colors:            Choose own
Logo Screen:       Choose to see or bypass
Calculators:       4 function calculator, Interest Calculator: Future 
                   Value, Present Value, Solve for Value, Amortization 
                   Calculator: Solve for Missing Loan Value


                 THE MORTGAGE ANALYZER - PROGRAM FEATURES

Amortization Features               Reports & Schedules      
  Interest Rates                      Qualification Analysis 
    Fixed, Stepped                    Amortization Summaries 
    Adjustable, Reset                 Amortization Schedules 
  Early Payoffs                         Yearly or Monthly    
    Recurring Extra Payment             Calendar or Fiscal Year     
    Variable Extra Payment              Cumulative or Non Cumulative
    Variable Payment                    Whole Dollars or Exact Cents
    Double Principal Payment            Two Loans Side by Side Comparison  
    13 Monthly Payments                 Standalone Early Payoff  
    26 Half Month Payments              Side by Side Early Payoff Comparison 
    52 Quarter Month Payments           International Date Formats
    Growing Equity Payments           View on screen before printing
  Tax Savings Analysis                6 or 8 Lines Per Inch  
  Comparison of Two Separate Loans    Top and Left Margin Adjustment
  Balloon Mortgages                   Automatic Bolding of Headers and Totals 
  Points                              Automatic Condensed Print when Necessary
  Daily Interest                      IBM Graphic Characters 
  Closing Costs                    
  Mortgage Insurance                Other Features                         
  Homeowners Insurance                Qualification Analysis
  Property Tax                        Calculators
                                        4 Function
Configuration                           Solve for Mortgage Value
  Select Own Colors                     Loan Refinance
  Select/Modify Printer Driver          Points
  Up to 3 Permanent Header Lines        Daily Interest
  Turn off/on Sound Effects           Save and Retrieve Client Information
  Bypass Logo Screen                  On-line Manual
  Default Report Options              On-line Help for each field



                FOR MORE INFORMATION CONTACT:

                     Insight Software Solutions
                     P.O. Box 354
                     Bountiful, UT  84011-0354

                     Phone: 801 295-1890
                     Fax:   801 299-1781
                     BBS:   801 963-8721  (Join Conference #4)
                     CIS:   [71672,3464]

                  In Canada Contact:

                     US-CAN Computer Services Inc.
                     Box 34146, 1200 - 37th STREET S.W.
                     Calgary, Alberta, T3C 3W2

                     Phone: 403 243-2393     
                     Fax:   403 243-2396
                     Orders Only: 1-800-663-1537
                     Internet: Barry.Dufresne@T8000.CUC.AB.CA 




```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Insight Software Solutions Shareware Programs -- VENDOR INFORMATION

Introduction

The files on this diskette are the latest versions of several DOS programs 
from Insight Software Solutions. These files replace all previous versions
of the same programs.

Copyright Information

All Insight Software Solutions programs, shareware and commercial, are
protected under the copyright laws of the United States and foreign
countries. All rights are reserved to Insight Software Solutions. Violations
of copyright laws are investigated by the FBI. Distribution of Insight 
Software Solutions products implies that you have read and agreed to the 
distribution terms described below. Insight Software Solutions makes test
orders from time to time to verify compliance with its distribution terms.

Distributor Information and License Information

The license information and distribution requirements in this document
supersede all previous license statements. To continue to distribute
Insight Software Solutions products, you must adhere to the licensing 
and distribution requirements below.

If you are a mail order or BBS-type distributor of shareware software, you
may distribute these programs as they are, without any changes other than
expanding files contained in the ZIP archives. However, you have a 
responsibility to check from time to time, at a minimum interval of 6
months, for new versions of these programs, and to update your copies in a
timely manner. Insight Software Solutions will gladly send you a diskette
containing the current versions on request, or you may download current
versions from the Insight Software Solutions Support BBS at the number
listed below. 

You may not distribute any Insight Software Solutions programs as part of
any commercial program or in conjunction with any collection of software
of any kind without express written permission from Insight Software
Solutions. Special licenses are required for any bundling of Insight
Software Solutions products, whether shareware or commercial, with any other 
software or hardware. This does not prohibit including Insight Software 
Solutions programs on individual disks containing other, clearly identified,
shareware programs.  

You must fully identify all Insight Software Solutions programs in your
advertising, by the program's full name and version, and indicate the 
registration fee in the program description. The words Insight Software 
Solutions must appear in all program descriptions.

Within 30 days of the receipt of this disk, you must replace all older
versions of all programs contained on this disk. You may not distribute
older versions of Insight Software Solutions programs under any 
circumstances after that period. Please check your catalog for previous
versions of these programs and replace them with the current version.

Shareware Disclosure Required

All advertising and packaging information including references to Insight
Software Solutions products must contain a statement explaining the
shareware concept. Specifically, that statement must explain that shareware
software MUST be registered by the user, after a trial period, by paying 
a registration fee, and that all monies paid for the shareware version are
duplication and distribution charges only. The declaration specified by
the Association of Shareware Professionals is a good model. All such
statements must be clearly displayed in a position where they are likely
to be read by potential customers.

Retail Rack and CD-ROM Distribution

If you distribute shareware in a retail setting in racks, store displays,
vending machines, at computer fairs, or in any way other than normal BBS
or catalog-based sales, you must contact Insight Software Solutions for
permission to distribute any Insight Software Solutions program. Rack or
retail-like sales require a special distribution license, normally requiring
royalties paid to Insight Software Solutions. If you distribute shareware
on CD-ROM disks, you must also contact Insight Software Solutions before
including any Insight Software Solutions shareware program on a CD-ROM disk.
Normally, permission is granted, but current versions must be included and 
all old versions of any Insight Software Solutions program removed from any
CD-ROM disk containing Insight Software Solutions products.

PROGRAM DESCRIPTIONS

You can find descriptions of all programs on this disk in the PRODUCTS.DOC
or README files, and in the brochure enclosed. You may use these
descriptions, editing them to the length required for your marketing
efforts. However, you MUST include the word Insight Software Solutions,
the program name, version number, and system requirements information with
all descriptions to avoid customer confusion.

Contacting Insight Software Solutions
 
You may contact Insight Software Solutions at any of the following locations:
 
Insight Software Solutions
P.O. Box 354
Bountiful, UT 84011-0354
Tel: (801) 295-1890
Fax: (801) 299-1781
BBS: (801) 963-8721  1200-38400 baud, 8/N/1
   (Rocky Mountain Software BBS - Join Conference #4)
CompuServe ID: 71672,3464

```
{% endraw %}

## MORT.DOC

{% raw %}
```








               The

                                       Mortgage

                                                                   Analyzer










                               A Mortgage Software Tool

                                         for

                                    Qualification

                                     Amortization

                                     Refinancing

                                 Mortgage Comparison

                                Mortgage Acceleration














                      Copyright 1992-93 Insight Software Solutions














                                                      THE MORTGAGE ANALYZER



                                  TABLE OF CONTENTS

          Program Overview  . . . . . . . . . . . . . . . . . . . . . .   3

          General Information . . . . . . . . . . . . . . . . . . . . .   4
               Disclaimer . . . . . . . . . . . . . . . . . . . . . . .   4
               About Insight Software Solutions . . . . . . . . . . . .   4
               Contents of Distribution Disk  . . . . . . . . . . . . .   4
               Program Support  . . . . . . . . . . . . . . . . . . . .   5

          Getting Started With the Mortgage Analyzer  . . . . . . . . .   6
               System Requirements  . . . . . . . . . . . . . . . . . .   6
               Installation . . . . . . . . . . . . . . . . . . . . . .   6
               Running The Mortgage Analyzer  . . . . . . . . . . . . .   6

          Screen Layout In The Mortgage Analyzer  . . . . . . . . . . .   7
               Common Screen Lines  . . . . . . . . . . . . . . . . . .   7
               Menu Screens . . . . . . . . . . . . . . . . . . . . . .   7
               Data Input Screens . . . . . . . . . . . . . . . . . . .   7
               Data View Screens  . . . . . . . . . . . . . . . . . . .   7

          Moving Around In The Mortgage Analyzer  . . . . . . . . . . .   8
               Menu System  . . . . . . . . . . . . . . . . . . . . . .   8
               Moving Field to Field  . . . . . . . . . . . . . . . . .   8
               Editing Within a Field . . . . . . . . . . . . . . . . .   9
               Special Fixed Fields . . . . . . . . . . . . . . . . . .   9
               Special Function Keys  . . . . . . . . . . . . . . . . .   9

          Loan Qualification  . . . . . . . . . . . . . . . . . . . .    11
               Qualification Inputs . . . . . . . . . . . . . . . . .    11
               Qualification Function Keys  . . . . . . . . . . . . .    12

          Amortization Schedules  . . . . . . . . . . . . . . . . . .    14
               Amortization Inputs  . . . . . . . . . . . . . . . . .    14
               Amortization Function Keys . . . . . . . . . . . . . .    18

          Print Schedule/Summary  . . . . . . . . . . . . . . . . . .    20
               Print Schedule/Summary Inputs  . . . . . . . . . . . .    20
               Print Schedule/Summary Function Keys . . . . . . . . .    21

          Quick Calculator  . . . . . . . . . . . . . . . . . . . . .    22
               Four Function Calculator . . . . . . . . . . . . . . .    22
               Solve For Missing Loan Value Calculator  . . . . . . .    22
               Points Calculator  . . . . . . . . . . . . . . . . . .    22
               Daily Interest Calculator  . . . . . . . . . . . . . .    23
               Loan Refinancing Calculator  . . . . . . . . . . . . .    23



                                                                     Page 1






          THE MORTGAGE ANALYZER

          On-line User Manual . . . . . . . . . . . . . . . . . . . .    24

          Configuration . . . . . . . . . . . . . . . . . . . . . . .    25
               Color Attribute Selection  . . . . . . . . . . . . . .    25
               Printer Selection  . . . . . . . . . . . . . . . . . .    26
               Schedule Printing Defaults . . . . . . . . . . . . . .    28
               Miscellaneous Selection  . . . . . . . . . . . . . . .    28

          Filing System . . . . . . . . . . . . . . . . . . . . . . .    29

          Answers To Common Problems  . . . . . . . . . . . . . . . .    29








































          Page 2






                                                      THE MORTGAGE ANALYZER

          Program Overview

                                The Mortgage Analyzer

          The Mortgage Analyzer is a financial software program designed
          with ease and flexibility in mind. It comes complete with a
          variety of mortgage options for calculating and producing
          mortgage amortization schedules, loan qualification, payoff time
          for refinancing, and a group of mortgage related calculators. 
          Each area contains a variety of options to allow maximum
          flexibility. 

          A variety of different mortgage types are supported such as Fixed
          Rate, Adjustable Rate (ARM), Stepped Rate and Reset Rates. Early
          payoffs of mortgages are supported with options like Recurring
          Extra Payment, Balloon Payment, Variable Extra Payment, Double
          Principal Payment, Growing Equity Payment, 52 Quarter Month
          Payments per year, 26 Half Month Payments per Year (Bi-Weekly),
          13 Monthly Payments per Year and Variable Payments. Tax Savings
          Analysis on the mortgage is also available. Two complete
          mortgages can be illustrated side by side with one or all items
          of information varied. The Mortgage Analyzer accounts for all
          expenses associated with Mortgages such as Points, Down Payment,
          Daily Interest and Other Closing Costs.  Complete schedules
          and/or summaries are produced.

          Calculators provided are:  a Four Function Calculator, a Solve
          For Missing Loan Value Calculator, a Points Calculator, a Daily
          Interest Calculator, and a Refinance Payback Calculator.

          Schedules and reports can be viewed on the screen or sent to a
          printer. The Mortgage Analyzer is a menu driven program that also
          contains an on-line manual and individual help for each input to
          allow the user to easily navigate and understand the program. 

          Client names can be entered and included in the schedules; all
          information can be saved and retrieved for multiple clients. The
          Mortgage Analyzer provides several miscellaneous configuration
          options for setting the program up to individual needs.












                                                                     Page 3






          THE MORTGAGE ANALYZER

          General Information

                                      Disclaimer

          Insight Software Solutions makes no warranties or representations
          of any kind, expressed or implied, including any implied
          warranties of merchantability and fitness for any particular
          purpose. Insight Software Solutions shall not be liable for any
          errors contained herein or for any loss of profit or for
          incidental or consequential damages or for any other damages.

                           About Insight Software Solutions

          Insight Software Solutions is located in Bountiful, Utah. Please
          send any inquiries, questions, suggestions or comments to the
          following address:

          INSIGHT SOFTWARE SOLUTIONS         Tel: (801) 295-1890
          P.O. BOX 354                       Fax: (801) 299-1781
          BOUNTIFUL, UT  84011-0354          BBS: (801) 963-8721
                                             CIS: [71672,3464]
          In Canada Contact:

          US-CAN COMPUTER SERVICES INC.      Tel: (403) 243-2393
          BOX 34146, 1200 37TH ST. S.W.      Fax: (403) 243-2396
          CALGARY, ALBERTA  T3C 3W2          Orders Only: 1-800-663-1537
                                   Internet: BARRY.DUFRESNE@T8000.CUC.AB.CA

                            Contents of Distribution Disk

          The Mortgage Analyzer diskette contains several files which are
          needed for optimal performance. Their names and functions are
          listed below.

          MORT.EXE       This is the main executable program.
          MORT.CFG       This contains program configuration information
                         such as screen color and printer selections. This
                         file is automatically created if not found.
          MORT.PTR       This contains printer definitions for a variety of
                         printers.
          MORT.DOC       This is the User Manual for The Mortgage Analyzer.
          MORT.BAT       This is a start up batch file for hard disks.
          INSTALL.EXE    This copies the program to a hard disk.
          MORT.DAT       This contains all saved client information.







          Page 4






                                                      THE MORTGAGE ANALYZER


                                   Program Support

          Once registered, you will receive notification of major updates
          and new products. Registration includes a 90 day support policy
          where free updates will be provided for major problems. If a
          problem cannot be resolved, then a refund of money will be made.

          Insight Software Solutions offers support through the mail,
          phone, fax, BBS and CIS. Please refer to the address and phone
          numbers on the previous page. Our official support BBS is the
          Rocky Mountain Software BBS (RMS). RMS can be reached 24 hours a
          day at (801) 963-8721 where a conference dedicated to us can be
          found. Our latest software products and versions, bulletins, news
          and message system are located on RMS under conference #4. RMS
          accepts modem baud rates of 1200 to 38400.



                     Insight  Software Solutions is  a member of
                     the Association  of Shareware Professionals
                     (ASP).  ASP  wants to  make  sure  that the
                     shareware  principal works for  you. If you
                     are unable to  resolve a shareware  related
                     problem  with an  ASP member  by contacting
                     the  member directly,  ASP  may be  able to
                     help.   The  ASP  Ombudsman  can  help  you
                     resolve  a dispute  or problem with  an ASP
                     member,  but  does  not  provide  technical
                     support for members' products. Please write
                     to  the ASP Ombudsman  at 545  Grover Road,
                     Muskegon, MI  49442  or send  a  CompuServe
                     message   via   CompuServe  Mail   to   ASP
                     Ombudsman 70007.3536.

















                                                                     Page 5






          THE MORTGAGE ANALYZER

          Getting Started With the Mortgage Analyzer

                                 System Requirements

          The Mortgage Analyzer is almost hardware independent. It will run
          on most PC systems. The minimum requirements are as follows:

            IBM type PC, XT, AT or PS/2 (or compatible)
            512K Ram
            Dos 2.0 or higher
            any monochrome, color, or composite monitor
            virtually any printer that supports condensed printing

                                     Installation

          The Mortgage Analyzer may be run from either a floppy or hard
          disk. There are no special installation procedures to set up the
          program. To load the program onto a hard disk, simply copy the
          contents of the floppy diskette onto the hard disk. We recommend
          that it be placed into its own subdirectory. An installation
          program called INSTALL.EXE is provided to assist you in the
          installation of the program on a hard drive. From the A> prompt,
          simply type "INSTALL". This will prompt you through the
          installation process.

                            Running The Mortgage Analyzer

          To run The Mortgage Analyzer, simply type "MORT". This can be
          done from the floppy disk or from a hard drive if you used the
          provided installation procedure.





















          Page 6






                                                      THE MORTGAGE ANALYZER

          Screen Layout In The Mortgage Analyzer

                                 Common Screen Lines

          There are several common screen lines found in The Mortgage
          Analyzer. This includes the first, second, twenty-third, twenty-
          fourth, and twenty-fifth lines. The first line contains the
          current date and time as specified by DOS; it also contains the
          copyright notice of INSIGHT SOFTWARE SOLUTIONS. The second line
          is part of the box surrounding the user work area; it generally
          contains a centered title describing the function of the current
          screen. The twenty-third line is the status line--it shows the
          status of the Help, Caps, Scroll Lock, Num Lock, and Insert keys.
          The twenty-fourth line is the prompt line. It indicates what you
          are supposed to do for a given input field. The twenty-fifth line
          is the Function Keys Status line. It shows what Function Keys
          (F1, F2, ...) are available for use and what their particular
          functions are.

                                     Menu Screens

          Menu Screens appear as a list of numbered items. A movable
          highlight bar indicates the current menu selection.

                                  Data Input Screens

          Data Input Screens contain fields or areas which can be changed.
          These fields are generally preceded by a label indicating what
          type of value is needed for the field.

                                  Data View Screens

          Data View Screens contain scrollable text for your viewing. Where
          applicable, the text can be scrolled up and down and left and
          right. Indications of the current location in the text are given
          on the left side of the status line.















                                                                     Page 7






          THE MORTGAGE ANALYZER

          Moving Around In The Mortgage Analyzer

                                     Menu System

          Menus appear as a list of numbered options. To select the option
          desired, press the associated number. An alternate method of
          selection is to use the arrow keys along with the <Enter> key.
          One option is always highlighted and indicates the current
          option. To change the current option, press the UP and DOWN arrow
          keys to move the highlight bar. Once the desired option is
          highlighted, press the <Enter> key to make the selection.

                                Moving Field to Field

          Moving from one field to another field can be accomplished by
          many different keystrokes. Listed below is a summary of the
          keystrokes available and the functions they perform.

          ENTER KEY:  Moves the cursor to the next logical field.

          RIGHT ARROW KEY:  If the cursor is on the last editing character
          of the field, this key moves the cursor to the right of the
          current field.

          LEFT ARROW KEY:  If the cursor is on the first character of the
          field, this key moves the cursor to the field to the left of the
          current field.

          DOWN ARROW KEY:  Moves the cursor to the field below the current
          field.

          UP ARROW KEY:  Moves the cursor to the field above the current
          field.

          PAGE DOWN KEY:  Moves the cursor to the last field on the screen.

          PAGE UP KEY:  Moves the cursor to the first field on the screen.

          TAB KEY:  Moves the cursor to the next logical field.

          TAB LEFT KEY:  Moves the cursor to the previous logical field.

          <CTRL> RIGHT ARROW KEY:  Moves the cursor to the field to the
          right of the current field.

          <CTRL> LEFT ARROW KEY:  Moves the cursor to the field to the left
          of the current field.




          Page 8






                                                      THE MORTGAGE ANALYZER

                                Editing Within a Field

          Editing within a field can be accomplished with many different
          keystrokes. Listed below is a summary of the keystrokes available
          and the functions they perform.

          RIGHT ARROW KEY:  Moves the cursor one character to the right.

          LEFT ARROW KEY:  Moves the cursor one character to the left.

          HOME KEY:  Moves the cursor to the beginning of the field.

          END KEY:  Moves the cursor to the last character in the field.

          BACKSPACE KEY:  Moves the cursor to the left one character and
          erases that character and shifts all trailing characters to the
          left one space.

          INSERT KEY:  Toggles between insert mode and typeover mode.

          DELETE KEY:  Erases the character under the cursor and shifts all
          trailing characters to the left one space.

          ALPHA/NUMERIC KEY:  Outputs the character where the cursor is and
          moves the cursor over to the right, one space. If insert mode is
          on, then all trailing characters are moved to the right, one
          space.

                                 Special Fixed Fields

          There are certain fields which have fixed values. When the cursor
          is moved to these fields, a window of choices appears. Each
          choice has either an associated number or letter next to it.
          Pressing the associated number or letter automatically makes the
          desired selection and moves the choice into the input field.

                                Special Function Keys

          There are a number of special function keys which perform a
          variety of tasks. These keys are as follows.

          <ESC> KEY:  This key always takes you back one level from where
          ever you are. For example: if you enter a screen from a menu,
          then the <Esc> key will take you back to that menu. 

          <F1> KEY:  This key is the help key. It toggles off and on
          whether help messages should be shown with each input.




                                                                     Page 9






          THE MORTGAGE ANALYZER

          <F2>..<F10> KEYS:  These other function keys may or may not be
          active and have different functions in different parts of the
          program. Brief explanations of what these keys do are displayed
          on the screen in the Function Key line. Detailed information is
          given under the documentation of each particular screen as to
          which Function Keys are active and what their function is.













































          Page 10






                                                      THE MORTGAGE ANALYZER

          Loan Qualification

                                 Qualification Inputs

          There are 17 different Qualification input fields. They are as
          follows:

          TITLE:  This field is a title line printed on the top of the
          report. This uses a line on the report only if something is
          entered; therefore, you can fit more of the report on a page if
          the title is left blank.

          PRODUCED FOR:  This field is for personalizing the report. This
          uses a line on the report only if something is entered;
          therefore, you can fit more of the report on a page if this is
          left blank. Please note that if you are saving and restoring
          client information, that the filer system distinguishes
          information by this name; therefore, you should specify a name
          when saving clients.

          PRODUCED BY:  This is for personalizing the report. This uses a
          line on the report only if something is entered; therefore, you
          can fit more of the report on a page if this is left blank.

          MORTGAGE TYPE:  This is the type of loan you want to qualify for. 
          This can be a Conventional Loan with a fixed interest rate, a
          Conventional ARM Loan whith an adjustible interest rate, an FHA
          Loan (Federal Housing Administration) or a VA Loan (Veterans
          Administration).  It is more difficult to qualify for a
          conventional loan.  Lenders usually prefer ARMs making it easier
          to qualify for them.  FHA and VA loans have less stringent
          qualification ratios.

          PURCHASE PRICE:  The price of the home you want to buy.  If you
          are refinancing, then enter the approximate value.

          DESIRED MORTGAGE:  The amount you want to finance--it is the
          purchase price minus any down payment.

          YEARS IN MORTGAGE:  The number of years in the mortgage
          (typically 15 or 30 years).

          INTEREST RATE:  The interest rate on the mortgage. If you plan on
          using an ARM (Adjustable Rate Mortgage) or a Stepped Rate
          Mortgage or Buydowns, then enter the initial interest rate.

          PROPERTY TAXES:  Your estimated annual real estate taxes. Be sure
          to enter the annual amount--the computer will automatically



                                                                    Page 11






          THE MORTGAGE ANALYZER

          figure out the monthly amount.

          HOME INSURANCE:  Your estimated annual homeowners insurance
          amount. Be sure to enter the annual amount--the computer will
          automatically figure out the monthly amount.

          MORTGAGE INSURANCE:  This is your estimated Mortgage Insurance.
          You may press the F2 Estimate Mortgage Ins Key to have it
          estimated for you. Typically, the Mortgage Insurance is based on
          your Loan-to-Value Ratio. The Loan-to-Value Ratio is the amount
          of the loan divided by the value of the house. For example:
          Mortgage = 90,000 and Purchase Price = 100,000 then Loan-to-Value
          = 90% or 90,000 / 100,000. Typically, if the Loan-to-Value ratio
          is 80% or less, then no Mortgage Insurance is needed. At 90%, the
          Mortgage Insurance is usually around 0.30% of the loan amount.
          Above 90%, it is usually around 0.44%.

          ASSOCIATION DUES:  This is any condominium or homeowner
          association dues you may have. This amount only applies to
          condominiums or homes which have shared common areas.

          GROSS MONTHLY INCOME:  This is the total of all your income. This
          amount should include salaries, bonuses, commissions, interest,
          dividends, etc. This is your monthly income. If you know your
          gross annual income, then divide it by twelve. Last year's income
          tax return may be helpful.

          CAR PAYMENTS:  This is your monthly car payment if you have one.
          If you have less than ten car payments left, then this is usually
          not required.

          ALIMONY/CHILD SUPPORT:  This is any alimony or child support
          payments you make each month.

          CREDIT CARD PAYMENTS:  This amount is the total of all the
          minimum payments for your credit card accounts.

          OTHER LOAN PAYMENTS:  This is the total monthly payment of all
          other loans you may have. This may include other mortgages,
          student loans, personal loans, etc.

                             Qualification Function Keys

          F4 KEY (VIEW/PRINT):  This function produces a Qualification
          Analysis Report and displays it in a window on the screen. Once
          in the window, the report can be scrolled within the window
          vertically and horizontally by use of the arrow, PgUp, PgDn, Home
          and End keys; it can also be sent to the printer by use of the F2



          Page 12






                                                      THE MORTGAGE ANALYZER

          Key (Print). The viewed report is identical to what the printed
          report will look like with the exception that the printed report
          may use condensed and bold print. 

          F9 KEY (QUICK CALC):  This simply pops up the quick calculator.
          See the documentation about the quick calculator for usage.













































                                                                    Page 13






          THE MORTGAGE ANALYZER

          Amortization Schedules

                                 Amortization Inputs

          There are up to 16 different Amortization Inputs depending on the
          Amortization Illustration chosen. They are as follows:

          TITLE:  See "title" under Qualification Inputs.

          PRODUCED FOR:  See "produced for" name under Qualification
          Inputs.

          PRODUCED BY:  See "produced by" under Qualification Inputs.

          SPECIAL OPTIONS:  This feature consists of eleven choices which
          are as follows: None, Recurring Extra Payment, Variable Extra
          Payment, Double Principal Payment, Variable Payment, 13 Monthly
          Payments Per Year, 26 Half Month Payments Per Year, 52 Quarter
          Month Payments Per Year, Growing Equity Payments, Balloon Payment
          and Mortgage Comparison.
          None is for producing a basic amortization schedule.
          Recurring Extra Payment option adds the ability to specify a
            constant extra amount payable towards the principal each month.
          Variable Extra Payment option adds the ability to specify a
            different amount each month of extra money to be paid towards
            principal.
          Double Principal Payment option displays what doubling the
            principal payment each month does to the loan (it cuts the loan
            period almost in half).
          Variable Payment option adds the flexibility to specify whatever
            payments you would like for every month of the mortgage.
          13 Monthly Payments Per Year option allows you to specify a month
            where two normal payments will be made (typically reduces a 30
            year mortgage to 21 years).
          26 Half Month Payments Per Year option allows you to specify two
            months where three half payments will be made (typically
            reduces a 30 year mortgage to 21 years).
          52 Quarter Payments Per Year option allows you to specify four
            months where five quarter payments will be made (typically
            reduces a 30 year mortgage to 21 years)
          Growing Equity Payments Option allows you to specify a percentage
            that the mortgage payment is to go up each year. The extra
            money goes towards the principal and accelerates the loan.
          Balloon Payment option adds the ability to show the loan for a
            short period of time and then what one final payment would be
            to pay off the loan.
          Mortgage Comparison Option allows two complete and separate
            mortgages to be compared side by side. Typically, this would be



          Page 14






                                                      THE MORTGAGE ANALYZER

            used to compare two similar loans to see how a slight change
            impacts the loan.

          COMPARISON:  A comparison will produce a pair of schedules side
          by side. The first schedule will be the standard mortgage
          schedule. The second schedule will illustrate the results of the
          special option. For example: if using the Recurring Extra Payment
          option, the second schedule would illustrate the effect of paying
          a constant extra payment towards the loan.

          TAX ANALYSIS:  This allows you to have a tax savings analysis
          done on your mortgage. This is based on using Itemized Deductions
          in the current U.S. tax code. Additional columns appear on the
          schedule indicating the potential tax savings. If a special
          option comparison is selected, then the tax savings will be based
          on the special option side of the comparison. Due to column
          limitations, the tax analysis is unavailable for the special
          option of Mortgage Comparison.

          TAX BRACKET:  This field only appears if Tax Analysis has been
          selected. This is the tax bracket of the person who is obtaining
          the mortgage. This will illustrate the portion of the payments
          that can be returned or saved through declaring the mortgage as a
          deduction on the individual's taxes.

          PURCHASE PRICE:  The price of the home you want to buy.

          DOWN PAYMENT:  The down payment you plan to make on the loan.
          This does not include any points, closing costs, etc.

          MONTHS IN MORTGAGE:  The number of months that payments will be
          made. This is typically 360 (30 years) or 180 (15 years).

          INTEREST TYPE:  This provides for four common mortgage interest
          rate methods. They are FIXED, STEPPED, ADJUSTABLE and RESET. A
          fixed rate uses the same interest rate throughout the entire
          length of the mortgage. A stepped rate mortgage typically starts
          the interest rate out below the prevailing rates and over a
          period of a few years, rises each year until it peaks and levels
          off. An adjustable rate mortgage (ARM) allows the interest rate
          to be adjusted each and every month. The rate typically goes up
          or down, depending on the prevailing mortgage rates during a
          given month. A reset rate allows two different interest rates on
          the mortgage; the first is a lower rate and lasts for usually 5
          or 7 years, then the second rate takes over and remains until the
          completion of the loan.

          INTEREST RATE:  This is the interest of the loan. For STEPPED,



                                                                    Page 15






          THE MORTGAGE ANALYZER

          ADJUSTABLE and RESET types of rates, you may press the F2
          INTEREST key to enter additional rates.

          CLOSING DATE:  This is the date that you close on the house.
          Closing is the process of "signing the papers". Daily interest is
          calculated and applied to the closing costs based on the
          difference in days between the closing date and the origination
          date of the loan. The closing date is the date that the papers
          are signed and the origination date is the date that the loan
          actually starts.

          FIRST PAYMENT DATE:  This is the date that the first payment is
          due. It is the date upon which the loan schedule is created. All
          payments are based upon this date--it should not be less than a
          month after the closing date or more than 2 months after the
          closing date.

          POINTS:  The points should include those for the Loan Origination
          Fee and any Discount Points. 1 POINT is equal to 1 percent of
          your loan. For example: 2 points on a $100,000 loan would be
          $2,000. Most lenders charge a Loan Origination Fee in points. To
          receive a lower interest rate on your mortgage, you can pay
          points to the lender. It is the concept of buying down your
          interest rate. You pay more money up front so you pay less all
          the way along. If you do not plan to stay in your house for a
          long period of time, then it is generally not wise to buy down
          your interest rate very far.

          PROPERTY TAX:  This is your annual real estate tax assessment.
          Assessments are usually between 0.75% to 2.0% of a home's value.

          HOMEOWNERS INS:  This is your yearly homeowners insurance
          premium.

          CLOSING COSTS:  This is the amount of money to be paid to close
          on your house. This amount should include such items as:
          Appraisal, Credit Report, Inspection Fee, Documentation Fee,
          Attorney's Fees, Title Insurance, Transfer Tax, Recording Tax,
          Survey and Termite Inspection. DO NOT include the following: Loan
          Origination Fee, Discount Points, Odd Days' Interest, Mortgage
          Insurance, Homeowner's Insurance and Real Estate Taxes. These are
          all accounted for elsewhere.

          MRTGE DEFAULT INS:  This is the Mortgage Default Insurance. It
          insures the lender against default and foreclosure. This is
          typically charged on FHA loans as a front end premium. Most
          conventional loans require this insurance if the loan-to-value
          ratio is greater than 80%. Annual renewal insurance is a premium



          Page 16






                                                      THE MORTGAGE ANALYZER

          which is added each year based on a percentage of the outstanding
          loan; this is typically between 0.4% and 0.8%. Many times this
          premium will be dropped once the loan value ratio drops to around
          70 to 80 percent.

          PREMIUM/PERCENT:  This field appears if a Mortgage Default
          Insurance is selected. If the "Front End Premium" is chosen, then
          this is the premium which is paid up front to cover the Mortgage
          Default Insurance. If the "Annual Renewal Insurance" is chosen,
          then this is a yearly premium based on a percentage of the
          remaining balance of the loan; this is usually between 0.4% and
          0.8%.

          PERCENT STOP:  This field appears only if the "Annual Renewal
          Insurance" has been selected as the type of Mortgage Default
          Insurance--it is the loan value ratio when the mortgage default
          insurance is to drop off. This is usually around 70% to 80%.

          POINTS TAX DEDUCT:  This determines when and if any tax deduction
          is allowed on the points paid. The points are typically fully
          deductible the first year on a first home. The points are
          typically deductible over the life of the loan on a second home.
          It is unusual for points not to be deductible.

          EXTRA PAYMENT:  This field appears only with the special option
          of Recurring Extra Payment or Variable Extra Payment. This is an
          additional amount of money which is to be applied to the
          principal of the loan each month--it accelerates the mortgage and
          pays it off early.  For Variable Extra Payments, the F2 PAYMENTS
          Key is available to add different payments.

          VARIABLE AMOUNT:  This field appears only with the special option
          of Variable Payment. The monthly payment is normally determined
          by amortizing the original principal at the given interest rate
          for a given duration. The Variable Payment field, however, lets
          you override the monthly payment amount. You can specify whatever
          amount you want to pay towards the loan. This option allows total
          flexibility in the amounts you wish to pay towards your loan. A
          notation to the right of the periodic payment will indicate
          either flat payments or variable payments. "Flat Payments" means
          that the monthly payment shown is for every single month during
          the term of the mortgage. "Variable Payments" means that it has
          been specified at some point to use a different monthly payment.
          Variable payments are made possible through the F2 PAYMENTS
          function key.

          MNTH UNTIL BALLOON:  This field appears only with the special
          option of Balloon Payment. It allows the number of months to be



                                                                    Page 17






          THE MORTGAGE ANALYZER

          specified before the balloon payment is to be made.

          EXTRA PAYMENT MNTH:  This field appears only with the special
          option of 13 Payments per year. When this option is selected,
          there are 13 payments made a year. One month of the year will
          have an extra payment made. This field is to specify the month
          that will have the extra payment.
           
          3 PAYMENT MONTH:  This field appears only with the special option
          of 26 Bi-Weekly Payments. When this option is selected, there are
          26 half-payments made a year. Two months of the year will have 3
          payments made and the rest will have 2 payments made. This field
          is to specify one of the months that will have an extra payment
          (3 payments). The other month to have 3 payments is computed
          automatically at 6 months from the month chosen here.

          5 PAYMENT MONTH:  This field appears only with the special option
          of 52 Weekly Payments. When this option is selected, there are 52
          quarter-month payments made in a year. Four months of the year
          will have 5 payments made and the rest will have 4 payments made.
          This field is to specify one of the months that will have an
          extra payment (5 payments). The other months to have 5 payments
          are computed automatically at 3 month intervals from the month
          chosen here.

          PAYMT GROWTH RATE:  This field appears only with the special
          option of Growing Equity Payments. The Payment Growth Rate is the
          percentage at which to increase the monthly payment each year. By
          increasing the payments each year, your payment can go up with
          increases in salary, etc; the extra money goes towards principal
          and pays off the loan early. A 4% yearly increase will pay a
          typical 30 year loan off in 15 years.

                              Amortization Function Keys

          F2 KEY (PAYMENTS):  This function key is available only if the
          special option of Variable Extra Payment or Variable Payments has
          been selected and the cursor is on the Extra Payment or Variable
          Payment field. This pops up another screen which allows up to 100
          payment inputs. Each payment is numbered. New function keys
          appear, indicating how to change payments above 100. There will
          be enough inputs and function keys to cover the duration
          specified for the mortgage. By this method, you may enter in
          different payments for the entire span of the mortgage. The new
          F2 key (DUP) will duplicate the previous value and advance the
          cursor--this allows easy duplication of payments without having
          to rekey them.




          Page 18






                                                      THE MORTGAGE ANALYZER

          F2 KEY (INTEREST):  This function key is available only if the
          Interest Type selected is Stepped, Adjustable or Reset and the
          cursor is in the Interest Rate field. For the Stepped Rate, this
          pops up another screen which allows you to enter an interest rate
          for each year in the mortgage. For the Adjustable Rate, this pops
          up another screen which allows up to 120 interest rate inputs.
          Each interest rate is numbered. By this method, you may enter
          different interest rates for each month of the mortgage. The new
          F2 key (DUP) will duplicate the previous value and advance the
          cursor--this allows easy duplication of interest rates without
          having to rekey them. For the Reset Rate, this pops up another
          screen which allows you to enter two interest rates and the year
          when the second rate takes over.

          F4 KEY (VIEW/PRINT):  This brings up the Print Schedule/Summary
          Menu. This menu allows for several options on how your schedule
          is to appear. Please refer to the section on this menu for more
          information.

          F5 KEY (SUMMARY):  This function calculates the mortgage and
          produces a summary page of all mortgage information selected.

          F9 KEY (QUICK CALC):  This simply pops up the quick calculator.
          See the documentation about the quick calculator for usage.



























                                                                    Page 19






          THE MORTGAGE ANALYZER

          Print Schedule/Summary

                            Print Schedule/Summary Inputs

          The Print Schedule/Summary screen allows for a variety of options
          which affect the way the schedule and summary are to be printed.
          The fields are listed below with their respective functions.

          PRINT DESTINATION:  This function allows you to specify where the
          schedule is to be sent--it can be sent to the screen or the
          printer. The schedule appears on the screen as it will appear
          when it is printed. When viewing the schedule or summary on the
          screen, function keys are available to send the schedule or
          summary directly to the printer without having to come back and
          change the print destination to the printer.

          SCHEDULE DETAIL:  This specifies the schedule detail--it allows
          you to show each and every month or to view yearly results.

          YEARLY BASIS:  This function allows you to select how the
          cumulative totals of the schedule are to be displayed. They can
          be displayed on either a calendar or fiscal year basis. A fiscal
          year basis displays the totals at exact yearly intervals. For
          example, a loan paid monthly which starts in March would show
          totals each March. If a calendar basis is chosen, totals would be
          shown at the end of each calendar year. For example, a loan which
          starts in April would show totals each December or end of the
          year.

          CUMULATIVE VALUES:  This allows you to show each line of values
          as cumulative totals from all previous years or months in the
          schedule.

          CUMULATIVE TOTALS:  This field only applies if you are using a
          monthly schedule and you are not using cumulative values.
          Selecting "Yes" here will show the totals after each year as a
          cumulative total. Selecting "No" will show the totals for each
          individual year.

          DOLLAR VALUES:  This function specifies the use of dollar values
          in the schedule.  If "no" is selected, cents appear in the
          figures. You would normally use dollar values if you prefer
          working with whole numbers or if you are working with a very
          large mortgage where the numbers start to merge when showing the
          cents.






          Page 20






                                                      THE MORTGAGE ANALYZER

          DATE FORMAT:  This specifies the format in which the dates will
          appear in a report. For example, a date of October 23, 1992 would
          appear as follows:
            MM/DD/YY     =  10/23/92       DD/MM/YYYY  =  23/10/1992
            MM-DD-YY     =  10-23-92       DD-MM-YYYY  =  23-10-1992
            MM.DD.YY     =  10.23.92       DD.MM.YYYY  =  23.10.1992
            MM/DD/YYYY   =  10/23/1992     YY-MM-DD    =  92-10-23
            MM-DD-YYYY   =  10-23-1992     YY.MM.DD    =  92.10.23
            MM.DD.YYYY   =  10.23.1992     YYYY-MM-DD  =  1992-10-23
            DD/MM/YY     =  23/10/92       YYYY.MM.DD  =  1992.10.23
            DD-MM-YY     =  23-10-92       MMM YYYY    =  Oct 1992
            DD.MM.YY     =  23.10.92       DD MMM YY   =  23 Oct 92

          PAGES TO PRINT:  This function allows you to specify what part of
          the report you would like to view or print. You may choose either
          the schedule, summary or both. The summary can be viewed directly
          form the main Amortization Input screen by use of the F5 KEY.

                         Print Schedule/Summary Function Keys

          F4 KEY (START PRINT):  This function starts the actual printing
          of the schedule or summary. Based on the print destination, it
          either sends the schedule to the screen or the printer.




























                                                                    Page 21






          THE MORTGAGE ANALYZER

          Quick Calculator

          The Quick Calculator can be selected as option three from the
          main menu or by the F9 (QCALC) Key from one of the input screens.
          This option is used to calculate a variety of mortgage
          calculations and for simple math functions. The Quick Calculator
          contains its own menu. You can select a loan value to solve for,
          a four function calculator or a specific mortgage related
          calculator.

                               Four Function Calculator

          The four function calculator simply allows you to type in numbers
          and add, subtract, multiply, and divide them. The result is
          displayed and can then be used as one of the next numbers in a
          calculation.

                       Solve For Missing Loan Value Calculator

          This feature consists of four "solve for values". By selecting
          one of these values to solve for, inputs appear which you must
          enter to solve for the selected value. These values and inputs
          are listed below.

          PRINCIPAL:  Allows you to solve for the principal amount of a
          loan when given the monthly payment, duration and interest rate.

          PAYMENT:  Allows you to solve for the monthly payment of a loan
          when given the principal amount, duration and interest rate.

          DURATION:  Allows you to solve for the duration of a loan when
          given the principal amount, monthly payment and interest rate.

          INTEREST RATE:  Allows you to solve for the interest rate of a
          loan when given the principal amount, monthly payment and
          duration.

                                  Points Calculator

          The points calculator simply calculates the amount of money that
          the points will cost based on the loan amount. The fields are
          listed below. Pressing the F2 KEY will calculate the value of the
          points.

          PRINCIPAL:  The loan amount.

          POINTS:  The number of points that are to be applied to the loan
          amount.



          Page 22






                                                      THE MORTGAGE ANALYZER

                              Daily Interest Calculator

          The daily interest calculator simply calculates the amount of
          daily interest to be paid on a given loan. The fields are listed
          below. Pressing the F2 KEY will calculate the amount of daily
          interest.

          LOAN AMOUNT:  The amount of the loan.

          INTEREST RATE:  The interest rate of the loan.

          DAYS:  The number of days for which to calculate interest on the
          loan.

                             Loan Refinancing Calculator

          The loan refinancing calculator estimates the amount of money to
          be saved in the first year of the refinanced mortgage; it also
          determines the number of months that it will take before the
          money saved pays back the cost to refinance the mortgage. The
          fields are listed below. Pressing the F2 KEY will calculate the
          described values.

          INITIAL MORTGAGE:  The loan amount of your current mortgage.

          TERM OF MORTGAGE:  The original number of years scheduled to pay
          off your current mortgage.

          AGE OF MORTGAGE:  The number of months that you have already paid
          on your current mortgage.

          OLD INTEREST RATE:  The interest rate on your current mortgage.

          REFINANCE COSTS:  The cost to refinance your mortgage.

          NEW INTEREST RATE:  The new interest rate that you will obtain on
          your refinanced mortgage.














                                                                    Page 23






          THE MORTGAGE ANALYZER

          On-line User Manual

          The Mortgage Analyzer provides the capability to review this
          manual on-line. The manual review is accessed from option number
          six from the main menu. Once option six is selected, the user
          manual is loaded into memory and displayed on the screen; you can
          scroll through at will by use of the arrow keys and PgUp and PgDn
          keys. The manual can be printed by your printer by pressing the
          F2 key. The file "MORT.DOC" contains the user manual--it is in
          standard ASCII format and can be read in by virtually any editor
          or word processor. It can be printed by simply using the Dos
          Print command. (PRINT MORT.DOC)







































          Page 24






                                                      THE MORTGAGE ANALYZER

          Configuration

          The configuration section allows you to configure the program to
          work with the printer of your choice, to work with the colors of
          your choice, to select default schedule printing options and to
          set miscellaneous options. Option number six from the main menu
          brings up this menu. The menu contains four options. The first is
          to allow you to change the colors used in the program. The second
          is to select a printer and set up specific printer options. The
          third is for selecting Schedule Printing Defaults options. The
          fourth is for setting up miscellaneous functions and data in the
          program.

                              Color Attribute Selection

          Selecting the color attribute option brings up a screen with a
          list of all the different areas where different colors are used
          and a displayed list of color to choose from. These are listed
          below with a brief description of what areas are effected by the
          specified color attribute names. Listed below the attribute names
          is a list of active Function Keys which can help in setting up
          your colors. 

          SCREEN ATTRIBUTE:  The color that the screen uses everywhere
          except for the following special areas. This is the most common
          color.

          FIELD ATTRIBUTE:  The color that input fields appear in while
          they are not being edited. This distinguishes them from normal
          text on the screen.

          EDIT ATTRIBUTE:  The color of an input field while it is being
          edited. This helps identify where you are at on the screen.

          FKEY ATTRIBUTE:  The color that the FKey line appears in at the
          bottom of the screen.

          ERROR ATTRIBUTE:  The color that error messages pop up in.

          MENU NORMAL ATTRIBUTE:  The color that pop up scrollable
          selection windows appear in.

          MENU HIGHLIGHT ATTRIBUTE:  The color that the highlighted
          selection of menus and pop up scrollable selections appear in.

          STATUS ATTRIBUTE:  The color that the screen title appears in.
          Also the color of the Caps Lock, Num Lock, Insert, Scroll, and
          Help status.



                                                                    Page 25






          THE MORTGAGE ANALYZER

          F2 KEY (SHOW COLOR):  Displays the current color specified in the
          field where the cursor is located. The color is displayed in a
          window in the bottom right corner.

          F3 KEY (OTHER COLORS):  There are 256 colors available, but only
          128 of them are displayed on the screen at one time. The F3 Key
          toggles between displaying the different sets of 128 colors.

          F4 KEY (DEFAULT MONO):  Automatically sets all the fields to the
          default colors selected by Insight Software Solutions for a
          monochrome monitor.

          F5 KEY (DEFAULT COLOR):  Automatically sets all the fields to the
          default colors selected by Insight Software Solutions for a color
          monitor.

                                  Printer Selection

          The printer selection brings up a menu which has several options.
          The options are to Select A Printer, Delete A Printer, Add A
          Printer, Modify A Printer, and to Alter Line Spacing and Margins.
          Below the menu items is a list of the current printer
          specifications.

          Selecting a printer brings up a list of printers. Simply use the
          arrow keys to highlight your printer type and press the <Enter>
          key. If your printer is not listed, you may try several of the
          printers listed to see if your printer is compatible with one of
          those listed. If it is not, then you may enter your own printer
          definition for your exact printer.

          Deleting a printer definition should not be used very often.
          Simply use the arrow keys to select the printer definition to be
          deleted and press the <Enter> Key. You will be prompted to verify
          that you really want to delete the printer definition.

          Adding a printer definition can be difficult if you are not
          familiar with printer control sequences. Selecting this option
          brings up a printer input screen; it asks for a printer name
          along with many different printer control sequences. The printer
          control sequences need to be entered in hexadecimal notation. If
          you are unable of performing this task, Insight Software
          Solutions is willing to set up your printer definition for free
          if you are a registered user and you send Insight Software
          Solutions a copy of the control codes out of your printer manual.

          Modifying a printer definition brings up the same screen as
          Adding A Printer definition, you may then change any of the



          Page 26






                                                      THE MORTGAGE ANALYZER

          fields desired. If the printer name is changed, the changed
          definition will not be overwritten but will appear as a new
          printer definition--this allows you to create a similar printer
          definition without rekeying all the control sequences back in.

          The altering line spacing and margins allows you to specify seven
          different items. These items are: the top margin, left margin,
          line spacing, page pausing, IBM graphics characters, Printer Port
          and printer error bypass. The illustration is automatically
          centered on the page left to right starting at line one. If you
          desire a top margin it can be specified. (Note: Laser printers
          should not normally specify a top margin.) If a larger left
          margin is desired (for punched holes, etc) then a larger left
          margin can be specified. The line spacing can be sent to either 6
          lines per inch or 8 lines per page if more information per page
          is desired. "Pause After Each Page" allows you to insert new
          pieces of paper if your printer does not have continuous form
          paper. Selecting the IBM graphics characters, tells the program
          to build the illustration using graphic characters for dashes and
          double dashes. Using the graphic characters produces a solid
          line. These characters are used under headings, etc. Some
          printers do not support these characters. If you select this
          option and you get strange results on your printout, then you
          will need to turn this option off. You may select to have your
          printed output go to either LPT1, LPT2 or LPT3; this is helpful
          if you have more than one printer connected to your computer. You
          may select to have the program bypass all printer error checking.
          There are rare cases where the printer error checking can cause
          an error message to display even though there really is not an
          error. Certain hardware like an automatic printer switching box
          or some software spoolers may cause this. You may turn the error
          checking off by selecting "Y" here to avoid this rare problem.
          CAUTION: If your system works with the error checking on, then DO
          NOT turn it off. If there is a real printer problem, the computer
          could get hung and require a reboot.
















                                                                    Page 27






          THE MORTGAGE ANALYZER


                              Schedule Printing Defaults

          The Schedule Printing Defaults section brings up a screen
          identical to the Print Schedule/Summary screen. In this section,
          you choose the values you want to use most frequently in the
          Print Schedule/Summary screen. The values chosen here in the
          Schedule Printing Defaults will be those which appear
          automatically in the Print Schedule/Summary screen when the
          program is initially run. Please refer to the section on Print
          Schedule/Summary for more specific detail on the fields.
           
                               Miscellaneous Selection

          The Miscellaneous Configuration section allows you to adjust the
          program and the reports and schedules to your preference. There
          are seven inputs--the first three are for permanent illustration
          header lines. Typically these lines would be set to your company
          name and address, but can be set to anything. These lines appear
          at the top of every illustration before anything else and do not
          need to be retyped each time the program is run--they are saved
          and retrieved each time it is used. By selecting the "Turn Sound
          Off" selection, most sound effects will not occur. If you do not
          wish to see the startup logo each time you run The Mortgage
          Analyzer, then you may select "Bypass Logo at Start". By
          selecting "Erase Numeric Fields", the program will clear a
          numeric field of its current value when you type a digit as the
          first thing you do when editing the field. "Erase Alpha Fields"
          is identical to the "Erase Numeric Field", but applies to fields
          that allow normal alphabetic text.





















          Page 28






                                                      THE MORTGAGE ANALYZER

          Filing System

          The Mortgage Analyzer provides the capability to save and
          retrieve all information that has been entered in the
          Qualification and Mortgage Schedule Input Screens. To invoke this
          option, select option 4 from the main menu--this will bring up
          another menu. The menu allows you to load saved client
          information or save out the existing client information you are
          working on. Multiple clients are distinguished by the name
          specified as the client. When saving client information, if a
          client by that name already exists, you will be prompted to
          either not save or to overwrite the existing client information.
          Retrieving client information is simple. A list of all saved
          client names will appear. You can scroll through the client names
          and by pressing the <Enter> Key, load in the highlighted case.
          Saved client information can be marked for deletion by pressing
          the F2 (MARK A CASE) Key. This simply puts a little box to the
          left of the client name. You can mark as many as desired for
          deletion. No client information is deleted until the F3 (DELETE
          MARKED CASES) key is pressed. Pressing the F3 (DELETE MARKED
          CASES) Key still gives you one more chance to back out before
          deletion begins.

                              Answers To Common Problems

          Problem:  The reports do not print out correctly on my printer.
          Solution:  Make sure that the correct printer driver has been
          selected.  To select a printer driver, you enter the
          configuration menu.  Select "Printer Selection", then select
          "Select A New Printer Default".  Choose the appropriate printer. 
          If your printer is not listed, then it is more than likely
          compatible with another printer listed.  Almost all printers fall
          under one of the following printers: Epson, IBM Graphics Printer
          or HP LaserJet II.  

          Problem:  Every time I try to print, the program tells me that my
          printer is either off-line or out of paper.
          Solution:  The program attempts to make sure the printer is okay. 
          Some networks, spoolers and hardware fool the program into
          thinking that the printer is not okay.  There is an option in the
          program to bypass this printer error checking.  You must turn it
          on.  To turn it on, do the following: Enter the configuration
          menu, Select "Printer Selection", then select "Alter Line
          Spacing, Margins & Misc".  This brings up an entry screen. 
          Change the "Bypass Printer Check" to a "Y".






                                                                    Page 29


```
{% endraw %}

## ORDER.DOC

{% raw %}
```
                    INSIGHT SOFTWARE SOLUTIONS Software Order Form

  Name:    ___________________________________________________________

  Address: ___________________________________________________________

  Address: ___________________________________________________________

  City: ___________________  State/Prov: ____________  Zip: __________               

  Country: ________________________

  Day Phone: ________________   Evening Phone:  _________________
                                     
  Payment Method:  [ ] Check   [ ] Money Order   [ ] Visa   [ ] MasterCard

  Card Number: _____________________________________  Exp. Date:  ___/___
  
  Signature:   _______________________________________________________
  
  Diskette Size:   5.25"     3.5"   (Circle One)

                      The Debt           The Mortgage       The Interest
  Product Name:       Analyzer             Analyzer           Analyzer

  Product Cost:        $20.00 U.S.        $25.00 U.S.         $25.00 U.S.
                       $25.00 Canadian    $32.00 Canadian     $32.00 Canadian

  Quantity       x    ________            ________            ________

  Subtotal       $    ________            ________            ________

  Total          $    ________            ________            ________

  Subtotal of all products  $ ________

  Sales Tax                   ________     (Utah Residents Only [6.25%])

  Shipping & Handling         ________     ** See charges below

  Goods and Service Tax       ________     (Canadian Orders Only [7.00%])

  Total Amount Enclosed     $ ________

  Please send check, money order, Visa or MasterCard order to:
                                                 ** IN CANADA **
        INSIGHT SOFTWARE SOLUTIONS          US-CAN Computer Services Inc.
        P.O. Box 354                        Box 34146, 1200 37th St. S.W.
        Bountiful, Utah  84011-0354         Calgary, Alberta, T3C 3W2

  OR Phone or Fax your Visa or MasterCard order to:
                                                 ** IN CANADA **
       Tel: 801 295-1890                    Tel: 403-243-2393
       Fax: 801 299-1781                    Fax: 403-243-2396
                                    Orders Only: 800-663-1537

  ** Shipping & Handling                        ** IN CANADA **
   U.S. First Class Mail     -- $3.00     Canada Post Commercial -- $4.00
   U.S. Priority Mail        -- $5.00     Priority Post Next Day -- $9.00
   U.S. Air Mail (over seas) -- $5.00

   *** Site Licenses with quantity discounts available.  Please Call. ***

```
{% endraw %}

## PRODUCTS.DOC

{% raw %}
```
                  Insight Software Solutions Product Briefs

                             THE DEBT ANALYZER

  The Debt Analyzer, a financial software package for the IBM PC, is the
  perfect tool to help reduce and eliminate debt.  Debt reduction can be
  illustrated through a loan payment schedule or through loan consolidation.
  Up to 20 debts can be handled at one time.  The loan payment schedule
  displays the payments to be applied to each debt and the balance of each
  debt until the balance reaches zero. Minimum payments or current payments
  may be used. Additional accelerated payments can be applied. One of nine
  debt payoff priority methods can be specified or priorities can be user 
  specified. For consolidated loans, the term or payment of the loan can be
  specified or the sum of all debt payments may be used as the consolidated 
  loan payment. Professional reports, schedules and summaries can be viewed
  on screen, printed or saved to file. Interest savings as well as the number
  of months paid off early are shown. All information can be saved and
  retrieved for multiple clients.

                          THE INTEREST ANALYZER

  The Interest Analyzer, a financial software package for the IBM PC, comes
  complete with a variety of financial tools for calculating Annuities (Sav-
  ings, Interest Accumulation), Amortization (Loans, Mortgages), Depreciation,
  Immediate Annuities and Calculators for solving for missing values. Each
  financial tool contains a variety of options to allow maximum flexibility.
  The Interest (Savings) tool allows variable deposit modes, deposits, with-
  drawals and interest rates.  Professional reports can be generated with
  varying detail. Special options are available to illustrate the time value 
  of compounding and the impact of taxes on savings. The amortization (Loan)
  tool allows variable payments, interest rates and compounding methods.  
  Professional schedules can be generated with varying detail. Special 
  options are available to illustrate the savings incurred with an early 
  payoff of a loan and to show tax savings with mortgages. The depreciation
  tool allows for a variety of depreciation methods to be illustrated using
  different time conventions. The Immediate Annuity tool allows variable
  payout modes and compounding methods.  Professional schedules are produced.
  Professional illustrations and schedules can be viewed on the screen or
  sent to a printer.  Each financial tool has the ability to save and
  retrieve all information entered for multiple clients. 

                          THE MORTGAGE ANALYZER

  This is NOT an ORDINARY mortgage program.  It includes seven predefined
  loan acceleration methods such as bi-weekly, double principal and growing
  equity payments plus the ability to set up *ANY* acceleration method con-
  ceivable through variable extra payments.  Accelerated schedules and/or
  summaries can be produced side by side with the original mortgage or by
  themselves.  Features mortgage comparisons--enter all values for two
  complete mortgages.  Print, view or save to file complete schedules 
  and/or summaries for both side by side. The input screen contains Purchase
  Price, Down Payment, Duration, Interest Rate, Interest Type (Fixed,
  Stepped, Adjustable, Reset), Closing Date, First Payment Date, Points,
  Property Tax, Homeowners Insurance, Mortgage Insurance and closing costs.
  It calculates payments, points, tax savings, daily interest, interest paid,
  interest saved (for acceleration) and complete schedules. Other features 
  include Qualification Analysis reports for conventional, FHA and VA loans.
  Includes solve for missing loan value calculator, loan refinancing, 
  daily interest and points calculators.  Save and restore multiple clients.


               THE DEBT ANALYZER - PROGRAM FEATURES

      Loan Payment Matrix                   Consolidated Loan             
        Up to 20 debts                        Up to 20 debts              
        Payments                              Select Term of Loan
          Minimum Payments                    Select Payment To Make
          Current Payments                    Use Sum of Debt Payments
          Accelerated Payments                Current Debt Summary
        Prioritize Debts                        Name of Debt
          Highest Interest Rate First           Loan Balance
          Smallest Balance First                Number of Months To Pay
          Largest Balance First                 Interst Rate
          Smallest Minimum Payment First        Interest Paid
          Largest Minimum Payment First         Total Interest Paid for all
          Smallest Current Payment First          Debts
          Largest Current Payment First         Total Interest Saved with 
          Shortest Term Debt First                Consolidation
          Largest Term Debt First             Consolidated Loan Schedule
          User Defined
        Debt Payoff Schedule                Other Features                
          Name of Debt                        Save and Retrieve Multiple
          Date To Pay                           Client Information          
          Amount To Pay                       On-line Manual              
          Remaining Balance                   On-line Help for each field 
        Debt Payment Summary                  Effective Rate Calculator
          Name of Debt
          Loan Balance                      Configuration
          Payment Schedule                    Select Own Colors
          Number of Months To Pay             Select/Modify Printer Driver
          Number of Months Saved              Up to 3 Permanent Header Lines
          Interst Rate                        Turn off/on Sound Effects
          Interest Paid                       Bypass Logo Screen
          Interest Saved                      Default Report Options
          Total Interest Paid for all Debts
          Total Interest Saved for all Debts

                      Reports
                        Calendar or Fiscal Year
                        Cumulative or Non Cumulative
                        Whole Dollars or Exact Cents
                        18 Date Formats--International Included
                        View on screen before printing
                        6 or 8 Lines Per Inch
                        Top and Left Margin Adjustment
                        Automatic Bolding of Headers and Totals
                        Automatic Condensed Print when Needed
                        IBM Graphic Characters












                  THE INTEREST ANALYZER - PROGRAM FEATURES

                Interest (Savings, Deferred Annuities, CDs, IRAs)
                -------------------------------------------------
Deposit Modes:     Weekly, Bi-Weekly, Semi-Monthly, Monthly, Quarterly, 
                   Semi-Annual and Annual
Variable Deposits,
Withdrawals &
Interest Rates:    Monthly, Quarterly, Semi-Annual and Annual
Compound Methods:  Daily (360 or 365), Monthly, Quarterly, Semi-Annual, Annual
Report Detail:     Monthly, Quarterly, Semi-Annual and Annual on either a
                   calendar or fiscal year basis
Special Options:   Automatic Cost of Living Adjustments to deposits, Side by
                   side comparisons of: tax and non tax sheltered savings, 
                   different rates and waiting before starting to save.

                               Depreciation
                               ------------
Methods:           Straight Line, Life Periods, Annuity, Sinking Fund,
                   MACRS (200%), MACRS (150%)
Conventions:       Annual, Half-Year and 1st Mid Quarter - 4th Mid Quarter

                      Amortization (Loans, Mortgages)
                      -------------------------------
Payments Modes:    Monthly, Quarterly, Semi-Annual and Annual
Interest Rates:    Monthly, Quarterly, Semi-Annual and Annual
Compound Methods:  Daily (360 or 365), Monthly, Quarterly, Semi-Annual, Annual
Report Detail:     Monthly, Quarterly, Semi-Annual and Annual on either a
                   calendar or fiscal year basis
Special Options:   Side by side comparisons of Recurring Extra Payment,
                   Variable Payments, Variable Extra Payments, Double 
                   Principal Payments and 13 Payments per year. Balloon
                   Payments and Tax Savings Analysis for Mortgages.

                            Immediate Annuities
                            -------------------
Payout Methods:    Weekly, Bi-Weekly, Semi-Monthly, Monthly, Quarterly,
                   Semi-Annual and Annual
Compound Methods:  Daily (360 or 365), Monthly, Quarterly, Semi-Annual, Annual

                             General Features
                             ----------------
Help:              On-line manual, easy menu driven, help for each field
View:              Complete Illustration on screen
Print:             6 or 8 lines per inch, top and left margin adjustment, 
                   automatic bolding of titles and totals, automatic 
                   condensed print when necessary, use of IBM graphic 
                   characters, and support of virtually any printer via 
                   printer definition tables
Save & Retrieve:   Save and retrieve files (cases)
Header Lines:      Up to 3 saved header lines plus one Title Line for each
                   report
Dates:             International Date Formats in Reports
Sound effects:     Choose off or on
Colors:            Choose own
Logo Screen:       Choose to see or bypass
Calculators:       4 function calculator, Interest Calculator: Future 
                   Value, Present Value, Solve for Value, Amortization 
                   Calculator: Solve for Missing Loan Value


                 THE MORTGAGE ANALYZER - PROGRAM FEATURES

Amortization Features               Reports & Schedules      
  Interest Rates                      Qualification Analysis 
    Fixed, Stepped                    Amortization Summaries 
    Adjustable, Reset                 Amortization Schedules 
  Early Payoffs                         Yearly or Monthly    
    Recurring Extra Payment             Calendar or Fiscal Year     
    Variable Extra Payment              Cumulative or Non Cumulative
    Variable Payment                    Whole Dollars or Exact Cents
    Double Principal Payment            Two Loans Side by Side Comparison  
    13 Monthly Payments                 Standalone Early Payoff  
    26 Half Month Payments              Side by Side Early Payoff Comparison 
    52 Quarter Month Payments           International Date Formats
    Growing Equity Payments           View on screen before printing
  Tax Savings Analysis                6 or 8 Lines Per Inch  
  Comparison of Two Separate Loans    Top and Left Margin Adjustment
  Balloon Mortgages                   Automatic Bolding of Headers and Totals 
  Points                              Automatic Condensed Print when Necessary
  Daily Interest                      IBM Graphic Characters 
  Closing Costs                    
  Mortgage Insurance                Other Features                         
  Homeowners Insurance                Qualification Analysis
  Property Tax                        Calculators
                                        4 Function
Configuration                           Solve for Mortgage Value
  Select Own Colors                     Loan Refinance
  Select/Modify Printer Driver          Points
  Up to 3 Permanent Header Lines        Daily Interest
  Turn off/on Sound Effects           Save and Retrieve Client Information
  Bypass Logo Screen                  On-line Manual
  Default Report Options              On-line Help for each field



                FOR MORE INFORMATION CONTACT:

                     Insight Software Solutions
                     P.O. Box 354
                     Bountiful, UT  84011-0354

                     Phone: 801 295-1890
                     Fax:   801 299-1781
                     BBS:   801 963-8721  (Join Conference #4)
                     CIS:   [71672,3464]

                  In Canada Contact:

                     US-CAN Computer Services Inc.
                     Box 34146, 1200 - 37th STREET S.W.
                     Calgary, Alberta, T3C 3W2

                     Phone: 403 243-2393     
                     Fax:   403 243-2396
                     Orders Only: 1-800-663-1537
                     Internet: Barry.Dufresne@T8000.CUC.AB.CA 




```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Insight Software Solutions Shareware Programs -- VENDOR INFORMATION

Introduction

The files on this diskette are the latest versions of several DOS programs 
from Insight Software Solutions. These files replace all previous versions
of the same programs.

Copyright Information

All Insight Software Solutions programs, shareware and commercial, are
protected under the copyright laws of the United States and foreign
countries. All rights are reserved to Insight Software Solutions. Violations
of copyright laws are investigated by the FBI. Distribution of Insight 
Software Solutions products implies that you have read and agreed to the 
distribution terms described below. Insight Software Solutions makes test
orders from time to time to verify compliance with its distribution terms.

Distributor Information and License Information

The license information and distribution requirements in this document
supersede all previous license statements. To continue to distribute
Insight Software Solutions products, you must adhere to the licensing 
and distribution requirements below.

If you are a mail order or BBS-type distributor of shareware software, you
may distribute these programs as they are, without any changes other than
expanding files contained in the ZIP archives. However, you have a 
responsibility to check from time to time, at a minimum interval of 6
months, for new versions of these programs, and to update your copies in a
timely manner. Insight Software Solutions will gladly send you a diskette
containing the current versions on request, or you may download current
versions from the Insight Software Solutions Support BBS at the number
listed below. 

You may not distribute any Insight Software Solutions programs as part of
any commercial program or in conjunction with any collection of software
of any kind without express written permission from Insight Software
Solutions. Special licenses are required for any bundling of Insight
Software Solutions products, whether shareware or commercial, with any other 
software or hardware. This does not prohibit including Insight Software 
Solutions programs on individual disks containing other, clearly identified,
shareware programs.  

You must fully identify all Insight Software Solutions programs in your
advertising, by the program's full name and version, and indicate the 
registration fee in the program description. The word Insight Software 
Solutions must appear in all program descriptions.

Within 30 days of the receipt of this disk, you must replace all older
versions of all programs contained on this disk. You may not distribute
older versions of Insight Software Solutions programs under any 
circumstances after that period. Please check your catalog for previous
versions of these programs and replace them with the current version.

Shareware Disclosure Required

All advertising and packaging information including references to Insight
Software Solutions products must contain a statement explaining the
shareware concept. Specifically, that statement must explain that shareware
software MUST be registered by the user, after a trial period, by paying 
a registration fee, and that all monies paid for the shareware version are
duplication and distribution charges only. The declaration specified by
the Association of Shareware Professionals is a good model. All such
statements must be clearly displayed in a position where they are likely
to be read by potential customers.

Retail Rack and CD-ROM Distribution

If you distribute shareware in a retail setting in racks, store displays,
vending machines, at computer fairs, or in any way other than normal BBS
or catalog-based sales, you must contact Insight Software Solutions for
permission to distribute any Insight Software Solutions program. Rack or
retail-like sales require a special distribution license, normally requiring
royalties paid to Insight Software Solutions. If you distribute shareware
on CD-ROM disks, you must also contact Insight Software Solutions before
including any Insight Software Solutions shareware program on a CD-ROM disk.
Normally, permission is granted, but current versions must be included and 
all old versions of any Insight Software Solutions program removed from any
CD-ROM disk containing Insight Software Solutions products.

PROGRAM DESCRIPTIONS

You can find descriptions of all programs on this disk in the PRODUCTS.DOC
or README files, and in the brochure enclosed. You may use these
descriptions, editing them to the length required for your marketing
efforts. However, you MUST include the word Insight Software Solutions,
the program name, version number, and system requirements information with
all descriptions to avoid customer confusion.

Contacting Insight Software Solutions
 
You may contact Insight Software Solutions at any of the following locations:
 
Insight Software Solutions
P.O. Box 354
Bountiful, UT 84011-0354
Tel: (801) 295-1890
Fax: (801) 299-1781
BBS: (801) 963-8721  1200-38400 baud, 8/N/1
   (Rocky Mountain Software BBS - Join Conference #4)
CompuServe ID: 71672,3464

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3420

     Volume in drive A has no label
     Directory of A:\

    MORT     ZIP    143500   8-23-93
    INT      ZIP    144895   8-23-93
    FINCALC  ZIP     51415  10-12-92
    GO       BAT        32   9-20-93  12:34p
    GO       TXT      1232   9-20-93  12:40p
            5 file(s)     341074 bytes
                           17408 bytes free
