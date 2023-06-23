---
layout: page
title: "PC-SIG Diskette Library (Disk #3426)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3426/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3426"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DEBT.DOC

{% raw %}
```








                        The
                                         Debt
                                                           Analyzer





                              A Financial Software Tool

                                         for

                                    Debt Reduction

                                         and

                                   Debt Elimination
























                       Copyright 1992 Insight Software Solutions















                                                          THE DEBT ANALYZER



                                  TABLE OF CONTENTS

          General Information . . . . . . . . . . . . . . . . . . . . .   2
               Disclaimer . . . . . . . . . . . . . . . . . . . . . . .   2
               About Insight Software Solutions . . . . . . . . . . . .   2
               Contents of Distribution Disk  . . . . . . . . . . . . .   2
               Shareware Defined  . . . . . . . . . . . . . . . . . . .   3
               Program Registration . . . . . . . . . . . . . . . . . .   3
               Program Support  . . . . . . . . . . . . . . . . . . . .   3

          Getting Started With the Debt Analyzer  . . . . . . . . . . .   4
               System Requirements  . . . . . . . . . . . . . . . . . .   4
               Installation . . . . . . . . . . . . . . . . . . . . . .   4
               Running The Debt Analyzer  . . . . . . . . . . . . . . .   4

          Screen Layout In The Debt Analyzer  . . . . . . . . . . . . .   5
               Common Screen Lines  . . . . . . . . . . . . . . . . . .   5
               Menu Screens . . . . . . . . . . . . . . . . . . . . . .   5
               Data Input Screens . . . . . . . . . . . . . . . . . . .   5
               Data View Screens  . . . . . . . . . . . . . . . . . . .   5

          Moving Around In The Debt Analyzer  . . . . . . . . . . . . .   6
               Menu System  . . . . . . . . . . . . . . . . . . . . . .   6
               Moving Field to Field  . . . . . . . . . . . . . . . . .   6
               Editing Within a Field . . . . . . . . . . . . . . . . .   7
               Special Fixed Fields . . . . . . . . . . . . . . . . . .   7
               Special Function Keys  . . . . . . . . . . . . . . . . .   7

          Debt Entry Screen . . . . . . . . . . . . . . . . . . . . . .   9
               Loan Payment Matrix Inputs . . . . . . . . . . . . . . .   9
               Loan Consolidation Inputs  . . . . . . . . . . . . . .    10
               Function Keys  . . . . . . . . . . . . . . . . . . . .    11

          Print Report  . . . . . . . . . . . . . . . . . . . . . . .    12
               Print Report Inputs  . . . . . . . . . . . . . . . . .    12
               Print Report Function Keys . . . . . . . . . . . . . .    12

          On-line User Manual . . . . . . . . . . . . . . . . . . . .    13

          Configuration . . . . . . . . . . . . . . . . . . . . . . .    14
               Color Attribute Selection  . . . . . . . . . . . . . .    14
               Printer Selection  . . . . . . . . . . . . . . . . . .    15
               Report Printing Defaults . . . . . . . . . . . . . . .    16
               Miscellaneous Selection  . . . . . . . . . . . . . . .    17

          Filing System . . . . . . . . . . . . . . . . . . . . . . .    18



                                                                     Page 1






          THE DEBT ANALYZER

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

            INSIGHT SOFTWARE SOLUTIONS
            P.O. BOX 354
            BOUNTIFUL, UT  84011-0354
            Phone/Fax: 801-295-1890

                            Contents of Distribution Disk

          The Debt Analyzer diskette contains several files which are
          needed for optimal performance. Their names and functions are
          listed below.

          DEBT.EXE       This is the main executable program.
          DEBT.CFG       This contains program configuration information
                         such as screen color and printer selections. This
                         file is automatically created if not found.
          DEBT.PTR       This contains printer definitions for a variety of
                         printers.
          DEBT.DOC       This is the User Manual for The Debt Analyzer.
          DEBT.BAT       This is a start up batch file for hard disks.
          INSTALL.EXE    This copies the program to a hard disk.
          DEBT.DAT       This contains all saved cases.













          Page 2






                                                          THE DEBT ANALYZER

                                  Shareware Defined

          Shareware is a marketing concept in which copyrighted software
          products are distributed by allowing and encouraging duplication
          of the program for evaluation by interested parties. As a
          recipient of a shareware program, you are granted the right to
          use the program for a short period to determine if it meets your
          needs. The program developer receives payment from the users
          after they have determined that the product meets their needs.
          The motivation for making payment for a shareware program is
          honest payment for a valuable tool, desire for support, updates,
          enhancements and documentation, and to help encourage shareware
          authors to produce additional quality programs.

                                 Program Registration

          The Debt Analyzer can be registered with Insight Software
          Solutions by sending a check or money order in the amount of
          $20.00 U.S. funds to the address listed above. Upon receipt,
          Insight Software solutions will send you the latest version of
          The Debt Analyzer along with a printed manual. Once registered,
          you will receive notification of major updates and new products.
          Registration includes a 90 day support policy where free updates
          will be provided for major problems. If a problem cannot be
          resolved, then a refund of money will be made.

                                   Program Support

          Insight Software Solutions offers support through the mail,
          phone, fax and BBS. Please refer to address and phone number
          above. Our official support BBS is the Rocky Mountain Software
          BBS (RMS).  RMS can be reached 24 hours a day at (801) 963-8721
          where a conference dedicated to us can be found.  Our latest
          software products and versions, bulletins, news and message
          system are located on RMS. RMS accepts modem baud rates of 1200
          to 38400.

                      ----------------------------------------

          Insight  Software Solutions is  a member of  the Association of
          Shareware Professionals (ASP).  ASP wants to make sure that the
          shareware principal works for you. If you are unable to resolve
          a  shareware related problem  with an ASP  member by contacting
          the member directly, ASP may be able to help. The ASP Ombudsman
          can help you  resolve a dispute or problem with  an ASP member,
          but does  not provide technical support  for members' products.
          Please write to the ASP Ombudsman at 545 Grover Road, Muskegon,
          MI 49442 or  send a CompuServe  message via CompuServe  Mail to
          ASP Ombudsman 70007.3536.


                                                                     Page 3






          THE DEBT ANALYZER

          Getting Started With the Debt Analyzer

                                 System Requirements

          The Debt Analyzer is almost hardware independent. It will run on
          most PC systems. The minimum requirements are as follows:

            IBM type PC, XT, AT or PS/2 (or compatible)
            512K Ram
            Dos 2.0 or higher
            any monochrome, color, or composite monitor
            virtually any printer that supports condensed printing

                                     Installation

          The Debt Analyzer may be run from either a floppy or hard disk.
          There are no special installation procedures to set up the
          program. To load the program onto a hard disk, simply copy the
          contents of the floppy diskette onto the hard disk. We recommend
          that it be placed into its own subdirectory. An installation
          program called INSTALL.EXE is provided to assist you in the
          installation of the program on a hard drive. From the A> prompt,
          simply type "INSTALL". This will prompt you through the
          installation process.

                              Running The Debt Analyzer

          To run The Debt Analyzer, simply type "DEBT". This can be done
          from the floppy disk or from a hard drive if you used the
          provided installation procedure.





















          Page 4






                                                          THE DEBT ANALYZER

          Screen Layout In The Debt Analyzer

                                 Common Screen Lines

          There are several common screen lines found in The Debt Analyzer.
          This includes the first, second, twenty-third, twenty-fourth, and
          twenty-fifth lines. The first line contains the current date and
          time as specified by DOS; it also contains the copyright notice
          of INSIGHT SOFTWARE SOLUTIONS. The second line is part of the box
          surrounding the user work area; it generally contains a centered
          title describing the function of the current screen. The twenty-
          third line is the status line--it shows the status of the Help,
          Caps, Scroll Lock, Num Lock, and Insert keys. The twenty-fourth
          line is the prompt line. It indicates what you are supposed to do
          for a given input field. The twenty-fifth line is the Function
          Keys Status line. It shows what Function Keys (F1, F2, ...) are
          available for use and what their particular functions are.

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
















                                                                     Page 5






          THE DEBT ANALYZER

          Moving Around In The Debt Analyzer

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




          Page 6






                                                          THE DEBT ANALYZER

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




                                                                     Page 7






          THE DEBT ANALYZER

          <F2>..<F10> KEYS:  These other function keys may or may not be
          active and have different functions in different parts of the
          program. Brief explanations of what these keys do are displayed
          on the screen in the Function Key line. Detailed information is
          given under the documentation of each particular screen as to
          which Function Keys are active and what their function is.













































          Page 8






                                                          THE DEBT ANALYZER

          Debt Entry Screen

                              Loan Payment Matrix Inputs

          TITLE:  This is a title line printed on the top of the report.
          This uses a line on the report only if something is entered;
          therefore, you can fit more of the report on a page if the title
          is left blank.

          PRODUCED FOR:  This is for personalizing the report. This uses a
          line on the report only if something is entered; therefore, you
          can fit more of the report on a page if this is left blank.
          Please note that if you are saving and restoring client
          information, that the filer system distinguishes unique cases by
          this name; therefore, you should specify a name if you wish to
          save multiple client information.

          PRODUCED BY:  This is for personalizing the report. This uses a
          line on the report only if something is entered; therefore, you
          can fit more of the report on a page if this is left blank.

          START DATE:  The first date that you will begin to make payments
          using the loan payment matrix.

          DEBT REDUCTION TYPE:  Specifies the type of loan reduction method
          to use. This must be set to "Debt Payoff Matrix" in order to
          produce a loan payment matrix.

          USE MINIMUM PAYMENT:  If you are currently paying more than the
          minimum payments on your loan, you make elect to have minimum
          payments paid on the lower priority loans. The difference between
          the minimum payment and current payment will be applied to the
          high priority loans.

          EXTRA PAYMENT:  If you wish to accelerate your loan payments, you
          may specify the extra amount to be applied to the loans each
          month here. If you do not wish to make extra payments, then leave
          this empty.

          The following field names appear as headers on the screen. These
          fields represent the information regarding a debt. Under each
          header, up to 17 values may be entered. Each value represents a
          unique debt.

          DEBT:  The name of the debt. This may be a credit card, a bank
          loan, a car loan or any type of loan you may have.

          MINIMUM PAYMENT:  The minimum payment required on the loan.



                                                                     Page 9






          THE DEBT ANALYZER

          CURRENT PAYMENT:  The current payment that you are making on the
          loan. If you are making minimum payments, then enter the minimum
          payment.

          CURRENT BALANCE:  The current loan balance--it is the amount
          currently owed on the loan.

          EFFECTIVE INT. RATE:  The annual EFFECTIVE interest rate on the
          loan. PLEASE NOTE: if the interest rate is 18.00% compounded
          monthly, then the effective interest rate is 19.562% and NOT
          18.00%. 

          PAYOFF PRIORITY:  Specifies the priority of which debt to
          eliminate first. The lower the priority, the sooner a loan is
          paid off. Therefor, a priority of 1 will be paid off before a
          priority of 2.

                              Loan Consolidation Inputs

          The Loan Consolidation feature uses many of the same fields as
          the loan payment matrix. These fields are the Title, Produced
          For, Produced By and Start Date. In addition, the debt
          information fields is a subset of those used in the loan payment
          matrix. These include the Debt, Current Payment, Current Balance
          and Effective Int. Rate. If not specified below, please refer to
          the description of the field under the Loan Payment Matrix Inputs
          section.

          START DATE:  The first date that you will begin to make payments
          on the new consolidated loan.

          DEBT REDUCTION TYPE:  Specifies the type of loan reduction method
          to use. This must be set to "Loan Consolidation" in order to
          produce a loan consolidation report and schedule.

          CONSOLIDATE METHOD:  When consolidating a loan, you may choose an
          automatic method or specify either the amount you want to pay on
          the new loan or the number of months you want to pay on the new
          loan. In the automatic method, the payment is automatically
          determined by the total of the payments on all current debts. The
          term of the loan is then calculated automatically. If you elect
          to specify the amount, the number of months to pay will
          automatically be calculated for you. If you elect to specify the
          number of months, then the amount to be paid will automatically
          be calculated for you.


          PAYMENT AMOUNT:  This only appears if the consolidate method is



          Page 10






                                                          THE DEBT ANALYZER

          selected as Payment--it is the payment you wish to pay on your
          new consolidated loan. By specifying the payment, the number of
          months to make the payment will automatically be calculated for
          you.

          MONTHS IN LOAN:  This only appears if the consolidate method is
          selected as Term--it is the number of months you wish to pay on
          you new consolidated loan. By specifying the term, the monthly
          payment will automatically be calculated for you.

          NEW EFFECTIVE RATE:  This is the new annual effective rate of the
          loan.

                                    Function Keys

          F4 KEY (VIEW/PRINT):  This invokes the Print Report Screen. This
          screen allows for several options on how your report is to
          appear. Please refer to the Print Report section for more
          information.

          F6 KEY (FILER):  This invokes the saving and retrieving of client
          information menu. Please refer to the section on the Filer System
          for more information.

          F7 KEY (MANUAL):  This invokes the user manual. Please refer to
          the section on the On-line User Manual for more information.

          F8 KEY (CONFIGURATION):  This invokes the configuration menu.
          Please refer to the section on the Configuration for more
          information.





















                                                                    Page 11






          THE DEBT ANALYZER

          Print Report

                                 Print Report Inputs

          The Print Schedule/Summary screen allows for a variety of options
          which affect the way the reports are to be printed. The fields
          are listed below with their respective functions.

          PRINT DESTINATION:  This function allows you to specify where the
          report is to be sent--it can be sent to the screen or the
          printer. The schedule appears on the screen as it will appear
          when it is printed. When viewing the report on the screen,
          function keys are available to send the report directly to the
          printer without having to come back and change the print
          destination to the printer.

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
          report.

          DOLLAR VALUES:  This function specifies the use of dollar values
          in the report.  If "no" is selected, cents appear in the figures.
          You would normally use dollar values if you prefer working with
          whole numbers or if you are working with a very large debts where
          the numbers start to merge when showing the cents.

          DATE FORMAT:  This specifies the format in which the dates will
          appear in a report. For example, a date of October 23, 1992 would
          appear as follows:
            MM/DD/YY     =  10/23/92       DD/MM/YY    =  23/10/92
            MM/DD/YYYY   =  10/23/1992     DD/MM/YYYY  =  23/10/1992
            MMM YYYY     =  Oct 1992

                              Print Report Function Keys

          F4 KEY (START PRINT):  This function starts the actual printing
          of the report. Based on the print destination, it either sends
          the report to the screen or the printer.



          Page 12





                                                          THE DEBT ANALYZER

          On-line User Manual

          The Debt Analyzer provides the capability to review this manual
          on-line. The manual review is accessed by use of the F7 Manual
          function key. Once selected, the user manual is loaded into
          memory and displayed on the screen; you can scroll through at
          will by use of the arrow keys and PgUp and PgDn keys. The manual
          can be printed by your printer by pressing the F2 key. The file
          "DEBT.DOC" contains the user manual--it is in standard ASCII
          format and can be read in by virtually any editor or word
          processor. It can be printed by simply using the Dos Print
          command. (PRINT DEBT.DOC)







































                                                                    Page 13







          THE DEBT ANALYZER

          Configuration

          The configuration section allows you to configure the program to
          work with the printer of your choice, to work with the colors of
          your choice, to select default report printing options and to set
          miscellaneous options. Pressing the F8 Configuration function key
          brings up this menu. The menu contains four options. The first is
          to allow you to change the colors used in the program. The second
          is to select a printer and set up specific printer options. The
          third is for selecting Report Printing Defaults. The fourth is
          for setting up miscellaneous functions and data in the program.

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




          Page 14






                                                          THE DEBT ANALYZER

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



                                                                    Page 15






          THE DEBT ANALYZER

          fields desired. If the printer name is changed, the changed
          definition will not be overwritten but will appear as a new
          printer definition--this allows you to create a similar printer
          definition without rekeying all the control sequences back in.

          The altering line spacing and margins allows you to specify six
          different items. These items are: the top margin, left margin,
          line spacing, page pausing, IBM graphics characters and Printer
          Port. The illustration is automatically centered on the page left
          to right starting at line one. If you desire a top margin it can
          be specified. (Note: Laser printers should not normally specify a
          top margin.) If a larger left margin is desired (for punched
          holes, etc) then a larger left margin can be specified. The line
          spacing can be sent to either 6 lines per inch or 8 lines per
          page if more information per page is desired. "Pause After Each
          Page" allows you to insert new pieces of paper if your printer
          does not have continuous form paper. Selecting the IBM graphics
          characters, tells the program to build the illustration using
          graphic characters for dashes and double dashes. Using the
          graphic characters produces a solid line. These characters are
          used under headings, etc. Some printers do not support these
          characters. If you select this option and you get strange results
          on your printout, then you will need to turn this option off. You
          may select to have your printed output go to either LPT1, LPT2 or
          LPT3; this is helpful if you have more than one printer connected
          to your computer.

                               Report Printing Defaults

          The Report Printing Defaults section brings up a screen identical
          to the Print Report screen. In this section, you choose the
          values you want to use most frequently in the Print Report
          screen. The values chosen here in the Report Printing Defaults
          will be those which appear automatically in the Print Report
          screen when the program is initially run. Please refer to the
          section on Print Report screen for more specific detail on the
          fields.














          Page 16






                                                          THE DEBT ANALYZER

           
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
































                                                                    Page 17






          THE DEBT ANALYZER

          Filing System

          The Debt Analyzer provides the capability to save and retrieve
          all information that has been entered. To invoke this option,
          press the F6 Filer function key--this will bring up a menu. The
          menu allows you to load saved client information or save out the
          existing client information you are working on. Multiple clients
          are distinguished by the name specified as the client. When
          saving client information, if a client by that name already
          exists, you will be prompted to either not save or to overwrite
          the existing client. Retrieving client information is simple. A
          list of all saved client names will appear. You can scroll
          through the client names and by pressing the <Enter> Key, load in
          the highlighted client. Saved client information can be marked
          for deletion by pressing the F2 (MARK A CASE) Key. This simply
          puts a little box to the left of the client name. You can mark as
          many as desired for deletion. No client information is deleted
          until the F3 (DELETE MARKED CASES) key is pressed. Pressing the
          F3 (DELETE MARKED CASES) Key still gives you one more chance to
          back out before deletion begins.































          Page 18


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3426

     Volume in drive A has no label
     Directory of A:\

    INSTALL  EXE     14033  12-16-92
    DEBT     PTR     25334  12-16-92
    FILE_ID  DIZ       454  12-16-92
    DEBT     EXE     60332  12-16-92
    DEBT     DOC     38192  12-16-92
    DEBT     CFG       730  12-16-92
    README            6108  12-16-92
    GO       BAT        34   2-25-93   5:25p
    SHOW     EXE      2040   9-12-88  10:48a
            9 file(s)     147257 bytes
                           11264 bytes free
