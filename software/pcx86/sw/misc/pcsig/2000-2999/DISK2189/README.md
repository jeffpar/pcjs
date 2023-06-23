---
layout: page
title: "PC-SIG Diskette Library (Disk #2189)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2189/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2189"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VIDEO TAPE CONTROL"

    Automate the rental and membership operations of your retail video
    store!  VIDEO TAPE CONTROL's many unique features, such as a tape
    library, pop-up windows and the ability to take advantage of your
    computer's maximum processing speed, let you handle movie rentals and
    returns quickly and easily. Keep track of membership, rental revenue,
    film inventory and reservation information vital to your store's
    operation.
    
    Reservations can be made on tapes and items for more than a week in
    advance and you're reminded of the reservations when the tape is
    rented or returned. Late fees are automatically calculated and you're
    alerted when fees are due. Customer receipts are generated with
    each transaction. Included is the opportunity to simplify your
    operations even further by connecting VIDEO TAPE CONTROL to your cash
    register drawer. Accounting data is collected regarding daily,
    monthly and annual rental revenues.
    
    Print reports on member rental activity, revenue by member, film
    reservations, late returns, and tape inventory. Mailing labels for all
    members or specific categories of members may be generated. VIDEO TAPE
    CONTROL's timesaving and efficient transaction processing assists you in
    increasing your store's profitability.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2189.TXT

{% raw %}
```
Disk No: 2189
Disk Title: Video Tape Control
PC-SIG Version: 1.1

Program Title: VIDEO TAPE CONTROL
Author Version: 6.4
Author Registration: $95.00
Special Requirements: 512K, hard drive, and 80 column printer.

Automate the rental and membership operations of your retail video
store!  VIDEO TAPE CONTROL's many unique features, such as a tape
library, pop-up windows and the ability to take advantage of your
computer's maximum processing speed, let you handle movie rentals and
returns quickly and easily.  It keeps track of membership, rental
revenue, film inventory and reservation information vital to your
store's operation.

Reservations can be made on tapes and items for more than a week in
advance and you're reminded of the reservations when the tape is
rented or returned.  Late fees are automatically calculated and you're
alerted when fees are due.  Customer receipts are generated with
each transaction.  Included is the opportunity to simplify your
operations even further by connecting VIDEO TAPE CONTROL to your cash
register drawer.  Accounting data is collected regarding daily,
monthly and annual rental revenues.

VIDEO TAPE CONTROL lets you print reports on member rental activity,
revenue by member, film reservations, late returns, and tape
inventory.  Mailing labels for all members or specific categories of
members may be generated.  VIDEO TAPE CONTROL's timesaving and
efficient transaction processing assists you in increasing your
store's profitability.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989, 1990 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No 2189 VIDEO TAPE CONTROL  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program, type: INSTALL  (press enter)                    ║
║                                                                         ║
║ To print the documentation, type: COPY VTC.DOC PRN  (press enter)       ║
║                                                                         ║
║ To start the program, type: VTC (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## VTC.DOC

{% raw %}
```

























                                 VIDEO TAPE CONTROL

                         (C)  COPYRIGHT, 1990 MICRO METHODS

                             WRITTEN BY KIM G. THORNTON




































          VIDEO TAPE CONTROL REGISTRATION

          This is a SHAREWARE copy of VIDEO TAPE CONTROL which means you
          may try the software before you buy.  If you like what you see,
          you can receive a registered copy of VIDEO TAPE CONTROL which
          cost $95.00.  The benefits of registering is that you will
          receive a printed manual, the most recent copy of the software
          and phone support.


          Please direct all inquiries to:

          Micro Methods
          c/o  Kim G. Thornton
          P.O. Box 2027
          Evansville, In. 47728
          Ph. (812) 476-0999




                                     ORDER FORM

               NAME_______________________________________________________

               COMPANY____________________________________________________

               ADDRESS____________________________________________________

               CITY, STATE & ZIP__________________________________________

               PHONE (______) ____________________________________________


               VIDEO TAPE CONTROL REGISTRATION FEE               $95.00

               INDIANA RESIDENTS ADD 5%                          ________

               TOTAL                                             ________


               Circle One:

               Cash    Check    Money Order    COD    VISA    Master Card

               Acct#__________________________________  Exp Date__________

               Signature__________________________________________________
























          LIMITED WARRANTY

               The program is provided "as is" without warranty of any
          kind, either expressed or implied.  Micro Methods does not
          warrant that the functions contained in the program will meet
          your requirements or that the operation if the program will be
          uninterrupted or error free.  In no event will Micro Methods be
          liable to you for any damages, including any lost profits, lost
          savings or other incidental or consequential damages arising out
          of the use or inability to use such program.

               Any liability of seller or Micro Methods will be limited
          exclusively to software replacement or refund of the purchase
          price.









































                                  TABLE OF CONTENTS



                    Introduction.............................  1

                    Hardware Requirements....................  2

                    Installation & Initialization............  2

                    Price Codes..............................  4

                    Starting Video Tape Control..............  5

                    The Main Menu............................  6

                    Rental Transactions......................  7

                    Tape Library.............................  8

                    Reservations............................. 10

                    Process Returned Tapes................... 11

                    Collecting Late Charges.................. 12

                    Membership File.......................... 13

                    Tape File................................ 15

                    Report Generator......................... 19

                    Accounting Information................... 21

                    Exiting Video Tape Control............... 24
























          INTRODUCTION



               Video Tape Control is a computer program designed to
          automate your video tape rental business.

               The program has many unique features such as the Tape
          Library and pop-up windows to provide a more user friendly
          environment.

               The program was designed to take full advantage of the speed
          your computer possesses.  Video Tape Control handles movie
          rentals and returns quickly and easily.  Late fees are
          automatically calculated and you are alerted when fees are due.

               It will keep track of membership, film, and reservation
          information important to your stores operation.  Reservations can
          be made on tapes and items for more than a week in advance and
          you are reminded of the reservation when the tape is rented or
          returned.

               Video Tape Control's printed report capabilities include
          information on tapes and rental items, the rental activity and
          the amount of money a member has spent at your store, reservation
          list, and members with late tapes.  It also produces mailing
          labels for your stores mail outs or advertisements.

               Video Tape Control has the capacity of holding up to 8,000
          tapes and 8,000 members in it's data base.
          















          Video Tape Control                                     Page 1







          HARDWARE REQUIREMENTS

               Video Tape Control will operate on any IBM PC, XT, AT or
          compatible computer with at least 512K of memory using MSDOS 2.1
          or higher.

               1 360K floppy disk drive.

               1 10 MEG or larger hard disk drive.

               Any black and white, monochrome, or color monitor.

               Dot matrix printer (a speed of 160 cps is recommended).




          INSTALLING VIDEO TAPE CONTROL

               If you are a first time user of a computer system please
          refer to your operators manual in turning on your system and the
          procedure in making backups of your data and programs.

               To load Video Tape Control on to the hard disk drive insert
          the program disk that came with this manual into drive A and at
          the C> prompt type A:INSTALL
               This will create a sub-directory called VTC and copy all the
          files from the disk in drive A to the sub-directory.



          INITIALIZATION

               Before using Video Tape Control you must let the program
          know some information about your business. To do this a stand
          alone program is used called INIT.  This program may be used at
          any time to enter new or change existing company information.

               To use the initialization program at the C> prompt type INIT
          and press [ENTER].  In a moment a Enter Password prompt will
          appear. If this is your first time using INIT or if you have not
          yet entered a password just press [ENTER] here.










          Video Tape Control                                     Page 2






          INITIALIZATION (CONT.)

               When the initialization screen appears you have the option
          of entering or changing the data on the screen by moving the bar,
          [F2] setting up your printer, [F3] changing price codes or late
          fee codes, and [F1] exiting INIT.

               To change the opening screen you must use the arrow keys
          located on your numeric key pad (you must have the num lock off
          to use the arrow keys).  Move the bar to the line you wish to
          change, press [ENTER] and type in the new information for that
          line.  After you have keyed in the new line press [ENTER] again
          to accept the line.

          *    When entering your companies city state and zip, remember to
          use a 2 letter state abbreviation with a period (.) behind it.
          Video Tape Control will use this data when you are entering
          membership information.

               The "Sales Tax Percent" can be entered as a decimal or a
          whole number i.e.  a 5% sales tax could be entered as .05 or 5.

               The "Add To Non-Members" Rental line is for stores that have
          memberships but rent to non-members at a higher rental price.  If
          you wish to use this feature enter in the extra amount to add to
          non-members. If you do not wish to use it leave it zero.

               The "Return Time" is the time that all items rented are due
          back.  The time must be entered in as a 24 hour format i.e. 6:00
          P.M. would be 18:00.  If your store is on a 24 hour rental then
          enter 24 on this line.

               The "Next Invoice #" is a counter the computer keeps for
          each invoice printed.  This can be changed at any time such as
          the beginning of the year if you wish.

               Video Tape Control can be used with a serial cash drawer.
          Refer to the users manual for the cash drawer for the proper
          serial port settings and to the MSDOS operators manual for using
          the MODE command to set the serial port. If you do not have a
          cash drawer installed on your computer then answer NO to the
          "Cash Drawer Installed?" prompt.

               "Invoice Information" is what will appear at the bottom of
          your printed invoices. This could include store rules or
          promotions if you wish.

               The "Password" line is an option for protecting your
          accounting information. You also must have the password to gain
          access to the INIT program. If you do not want to use a password
          just leave this line blank.


          Video Tape Control                                     Page 3







          INITIALIZATION (CONT.)

               The "Display Receipt Prompt?" is an option which if is YES
          then after each transaction a "Print Receipt (Y/N/ESC)?" prompt
          will appear before each receipt is printed. This would allow you
          the option of not printing a receipt for members. If you will be
          printing a receipt for every transaction, then you would want to
          answer NO here.  New users of Video Tape Control may want to
          leave this prompt on while learning the program.


          [F2] Printer Setup:
               This option is used to tell Video Tape Control what codes
          (in decimal) are necessary to print in condensed format.
               Line "A" would be the printer codes to select condensed
          print.  For many printers this code would be 27  15.  Line B is
          the codes (in decimal) used to cancel condensed print. Again for
          many printers this would be 18.
               If the current codes do not make your printer print in
          condensed format, please refer to your printer manual for the
          proper control codes.
               Option "C" is used to control your invoice length. Pressing
          "C" will toggle line C from 5 1/2" to 11".  If your printer has
          the tractor feed behind the platen and has a tear bar then you
          should be able to get 2 receipts from each 8 1/2" by 11" sheet of
          paper. In this case, you would leave line C at 5 1/2".  Some
          printers are not designed in this manner so you may have to use
          the 11" option which would give you 1 receipt per 8 1/2" by 11"
          sheet.


          [F3] Price Codes/Late Fees:
               Video Tape Control has 12 price codes and 4 late fee codes.
          The price codes are used for different rentals or prices you wish
          to put on tapes or items in your store. It is suggested that your
          normal or most used rental price be placed in Price 1.

               Example:
               Lets say your store has three different rentals. Most tapes
          are $2.00 but you have some children's tapes renting for $1.00.
          You also rent VCR Machines for $6.00. So you could then make
          Price 1 $2.00, Price 2 $1.00, and Price 3 $6.00.  The other price
          codes could be used for membership fees, VCR head cleaning, etc.
          Any price codes not being used should be left at zero.  These
          codes will be displayed when you are entering your tapes and
          inventory items. There is also a manual feature you can use (for
          more information on this see Add Tapes or Items).





          Video Tape Control                                     Page 4







          INITIALIZATION (CONT.)

               The "Late Fees Codes" are used only if your late fees will
          be different than your rental amount. If your late fees are the
          value of your rentals then leave all the late fee codes zero.

          [F1] Exit
               This is used for saving all the information you keyed in and
          quitting the initialization program.  After pressing [F1] a
          "Verify Exit (Y/N)?" will appear.  To exit press Y or the [ENTER]
          key, if you do not wish to exit press N to return to the program.



          STARTING VIDEO TAPE CONTROL

               At the C> prompt type VTC and press [ENTER].  The Micro
          Methods logo will appear and a One Moment Please... message will
          be displayed for a few seconds.

               You will then be prompted for the current date.  The proper
          format for the date is MM/DD/YY, i.e. April 25, 1987 would be
          entered as 04/25/87 and then  press [ENTER].  If you enter the
          date in the wrong format it will not be accepted and you must
          then re-enter it.

               After the current date is entered a "Tapes Rented Today To
          Be Returned On (MM/DD/YY)?"  prompt will be displayed.  This is
          the date that your rentals are due back.  Again the MM/DD/YY
          format must be used.  If you press [ENTER] here with out entering
          a date the next day determined by your current date will be
          displayed.

               The next prompt will be the current time.  The time must be
          enter in as a 24 hour format  i.e. 1:00 P.M. would be 13:00.

               If you have entered the current date and time previously or
          have a real time clock in the computer you may just press [ENTER]
          at each of the date and time prompts to get the current system
          date and time.

               After all time and date information is entered a "Correct
          (Y/N)?"  prompt will be displayed. This allows you to check the
          information you just keyed in before starting the program.  Video
          Tape Control uses the current date and time to Calculate late
          fees so make sure this information is correct before proceeding.






          Video Tape Control                                Page 5







          THE MAIN MENU

               The main menu is the central control area of the program. It
          is from this area you will access the different modules of Video
          Tape Control and you will always be returned here after exiting
          any of the modules.



              Video Tape Control 5.2    (C) Copyright 1987 by Micro Methods


                                       M E N U


                              [1]  Rental Transactions

                              [2]  Membership File

                              [3]  Tape File

                              [4]  Report Generator

                              [5]  Accounting Information

                              [6]  End-Of-Day Report

                              [7]  Exit Program


                                 > Enter Selection _



          [1] Rental Transactions:
          This is where most of your time in Video Tape Control will be
          spent.  All transactions are performed here and many other
          functions can be executed from this area of the program.

          [2] Membership File
          Used for adding new members to your data base.  New members can
          also be added from Rental Transactions.
          Member information can be viewed or changed here, you can also
          delete a member here.


          [3] Tape File
          Used for adding inventory items, tapes or VCR machines.
          Inventory items and tapes can be viewed, changed, or deleted
          here.


          Video Tape Control                                     Page 6







          [4] Report Generator:
          This is where all reports such as membership, tape list, late
          tape list, reservation list, and mailing labels are produced.

          [5] Accounting Information:
          Daily, monthly and year-to-date totals can be viewed here.  All
          price codes can also be changed here.  This area is password
          protected.

          [6] End-of-day Report:
          Displays Only Daily information.  No password is is necessary to
          access this area.

          [7] Exit Program:
          This selection will exit you from Video Tape Control and return
          you to the computers operating system.  Never shut down your
          computer  system until Video Tape Control has been exited
          properly.

               When entering a menu selection or most other prompts such as
          "Enter Selection?" or "Correct (Y/N)?" you do not have to press
          [ENTER] after keying in your response.  Also for any Yes or No
          (Y/N) responses, pressing the [ENTER] key would be accepted as a
          yes answer.  The only exception is when you are deleting a member
          or tape item.









          RENTAL TRANSACTIONS

               After selecting 1 from the main menu the transaction screen
          will be displayed.  The bottom 2 lines are command lines
          controlled by the function keys. To use the different commands
          the cursor must be at the bottom right of the screen. This is
          accomplished by pressing the [ENTER] key.


          The Command Line:

          [F1] Find Mem  [F2] Tape Lib  [F3] Chg Ret Date  [F4] Enter Tapes
          [F5] Memship   [F6] Reserv    [F9] Return Tapes  [F10] Menu





          Video Tape Control                                     Page 7







          RENTAL TRANSACTIONS (CONT.)

          Function Key Descriptions:

          [F1] Find Member:
               Used to display a member you wish to process
          for rentals, reservations, and changing member information.
          After press [F1] a "Mem # Or Name?" prompt will be displayed,
          here you may key in the members number or the members name as it
          is in the membership file.  If you enter a member number and
          press [ENTER] you are telling Video Tape Control exactly which
          member you want.  The member is displayed, and you are
          automatically transferred to the [F4] Enter Tapes mode.  If you
          key in a members name (up to 6 characters of the name) you are
          telling Video Tape Control to search for a name to match what you
          keyed in.  After a match is found the member is displayed and a
          "OK? (Y/N/P/ESC)" prompt is displayed.  If you answer with a "Y"
          or [ENTER] you will be transferred to the [F4] Enter Tapes mode,
          if you answer with a N the next occurrence will be displayed a P
          response would display the previous occurrence.  Pressing the
          [ESC] key will cancel the search and you will be returned to the
          "Mem # Or Name?"  prompt.

               The member information displayed on the transaction screen
          includes the member number, name and address, telephone number,
          membership type, membership date, total items or tapes currently
          rented, and a comments line.

               The [ENTER] key can be substituted for [F1] if you wish.
          This is to allow easier keyboard input as the [F1] Find Member is
          used very often.

          [F2] Tape Library:
               The Tape Library is a very handy feature used to check the
          status of a tape. The Tape Library can be be used during a
          transaction if you wish.  When you press [F2] the Tape Library
          screen is windowed and you are prompted for the tape number or
          title. Again the search works in the same manner as in searching
          for a member.  If the tape or item is rented a Not Available
          message will flash on the screen and the date of return will also
          be displayed.  If the tape is reserved a  * Reserved *  message
          will be displayed.  The Tape Library is very fast way of letting
          a member know the availability of a tape.

          [F3] Chg. Return Date:
               This option is used in the event a member wishes to rent
          items or tapes longer than your normal rental times.  The rentals
          are automatically adjusted depending on the number of days they
          wish to rent.  Changing the return date must be done before the
          invoice items are entered.


          Video Tape Control                                     Page 8







          RENTAL TRANSACTIONS (CONT.)

          [F4] Enter Tapes:
               The Enter Tapes option is usually automatic but is needed
          after you use the Tape Library or Reservation option.  After the
          member is displayed on the screen you will be placed in the Enter
          Tapes mode.  A  "#" will be displayed on the screen which means
          Video Tape Control is waiting for an Item number to be keyed in.
          You can only enter a tape or item number here.  After a valid
          item number is entered and [ENTER] is pressed, the description,
          rental amount, and a "OK?" prompt will be displayed. If you press
          "N" here the line will be erased and you must re-enter the
          number.  If you press "Y" or [ENTER], the item will be accepted
          on the transaction and the "#" prompt will drop to the next line
          for another item number to be entered.  You are allowed a maximum
          of 10 items per invoice.  To quit entering item numbers just
          press [ENTER] at the "#" prompt.

               After pressing [ENTER] at the "#" prompt you will notice at
          the top right of the screen  Sub-Total, Sales Tax, and Total
          Amount lines will be displayed also the command line at the
          bottom of the screen will change to:

          [F1] Receipt        [F2] Tape Library      [F4] Enter Tapes
          [F6] Reservations   [F7] Erase             [F9] Return Tapes

               By pressing [F1] or [ENTER], you are telling Video Tape
          Control that the transaction is done and you are ready to print a
          receipt.  After pressing [F1] an "Amount Tendered $" prompt will
          be displayed, waiting for you to enter the amount of cash
          received (if you want to by-pass this just press [ENTER] here.
          The members change will be displayed and depending on how you
          initialized Video Tape Control in the INIT program a receipt will
          be printed or a "Print Receipt (Y/N/ESC)?" prompt will be
          displayed.  If the Receipt prompt is displayed answering "Y"
          would of course print the receipt and "N" would not, Pressing the
          [ESC] key would return you to the command line.

          [F5] Membership:
               The [F5] option works in two ways, if a member is not
          displayed on the transaction screen and at the command line you
          press [F5] a window would be opened to add a new member.  If a
          member is displayed on the transaction screen then the [F5] would
          open a window to change information of the member currently on
          the transaction screen.   This is very useful for keeping
          addresses and telephone numbers current on your members.






          Video Tape Control                                     Page 9







          RENTAL TRANSACTIONS (CONT.):

          [F5] Membership (Cont.):
               For more information on adding and changing membership
          information see ADD MEMBERSHIP INFORMATION or VIEW/CHANGE
          MEMBERSHIP INFORMATION.


          [F6] Reservations:
               In order to reserve a tape or item for a member you first
          must find the member wishing to reserve using the [F1] Find
          Member option.  After locating the proper member press [ENTER] to
          gain control at the command line and press [F6] to open the
          window for the reservation screen.  A "Enter Tape # Or Title"
          prompt will be displayed. Entering a title will begin the search
          sequence as in searching for a member, entering a number tells
          Video Tape Control you know the item you want. After you have the
          tape to reserve on the screen a "<A>dd Or <R>emove Reservation ?"
          will be displayed.  Pressing "A" would allow you to add the name
          to the reservation (up to 8 different names and dates) and
          pressing "R" would let you manually remove names if any exists.
          To add a reservation press "A" and at the "Enter Date To Reserve"
          prompt key in the date the customers wishes to reserve the tape
          on.  The reservation date can be keyed in any format you wish:
          08/29/87 or Aug 29 would be acceptable.  There can be a maximum
          of 8 characters in the reservation date.

               When a tape is reserved and it is rented or returned a
          "* Reserved *" message will flash by the item number.  This is to
          alert you that there is a waiting list for this tape.  When
          renting a reserved tape, if the member renting the item is on the
          reservation list they will be automatically removed during the
          rental transaction.  Reserving a tape does not keep you from
          renting to someone that is not on the list, the reservation list
          acts more of a reminder and you make the decision to rent it or
          not.  Keep in mind that all reservations are made by item numbers
          and not titles.



          [F7] Erase:
               This option is used to erase a complete transaction.  This
          allows you to start over if you wish.  After erasing you will be
          returned to the [F1] Find Member mode.








          Video Tape Control                                     Page 10







          RENTAL TRANSACTIONS (CONT.):

          [F9] Return Tapes:
               This option is for processing the the rental items a member
          returns.  Any information on the transaction screen will be saved
          and re-displayed when you change to the [F9] Process Returns
          screen option.  After pressing [F9] at the command line, the
          Process Returned Tapes screen will be displayed and a  "Enter
          Item #" prompt will be at the lower left of the screen.

               Returns can be made by item number or member number.  To
          return by item number, enter any of the tape or item numbers a
          member has out, press [ENTER], then the original transaction will
          be displayed.  To return by member number enter an "M" then the
          members number.  To exit from the Process Returned Tapes area
          just press [ENTER] at the "Enter Item #" prompt.

               After the return transaction has been displayed the
          following line will be at the bottom of the screen:

          <A> All Items Returned   <P> Partial Return   <ESC> To Exit


               If you enter an "A" here, all items on the invoice will be
          returned.  If you enter a "P" here, each item will have to be
          returned individually.  On a partial return "Returned (Y/N)?"
          will be displayed by each item on the return invoice.  You would
          then answer "Y" or "N" for each item.  All items not returned
          will be saved on the original invoice and may be returned at a
          later time.  On a partial return after all items have been marked
          returned or not, the message "OK To Update Files (Y/N)?" will be
          displayed.  If you answer "N" to this no action will be taken and
          you will be returned to the "Enter Item #" prompt.

               Pressing the [ESC] key will erase the invoice and no action
          will be taken.  This allows you to view your returns at any time
          if you wish.

               When processing returns and the member is late in returning
          their tapes you will be alerted by two beeps and the amount of
          the late charge will flash on the upper right of the screen.
          After returning the rented items you will be asked "Charge Late
          Fees (Y/N)?".  If you answer with "Y" the members file will be
          tagged with the late fee amount (if a late fee amount already
          exist in their file it will be added to the existing amount).
          Answering with an "N" here would waive the late charges.






          Video Tape Control                                     Page 11







          RENTAL TRANSACTIONS (CONT.):

          Collecting Late Charges:

               To Collect the late charges from the member you must return
          to the Rental Transaction screen and recall the member using the
          [F1] Find Member option.  When the member is displayed again you
          will be alerted by 2 beeps and the amount of the late charge will
          be displayed at the top right of the screen.  At the bottom line
          of the screen the message "Will Late Charges Be Collected (Y/N)?"
          will be waiting for you response.  If you answer "Y" here an
          "Amount $" prompt will be displayed.  To collect the amount
          flashing on the screen just press [ENTER].  To change the amount
          just enter in the amount you wish to charge the member (entering
          zero here would be the same as waiving the amount).  After the
          correct amount is accepted the 9999 LATE CHARGES DUE record
          (which should always be in your tape files) will automatically be
          displayed on the transaction screen.  After the 9999 LATE CHARGES
          DUE is displayed you will be in the [F4] Enter Tapes mode.  If
          The member only wants to pay their late charges then just press
          [ENTER] at the "#" prompt to end the transaction.

               If you answer with a "N" at the prompt the late charges will
          not be charged to the member but will be remembered by Video Tape
          Control.  Any time you display a customer with late charges in
          their file you will be alerted.


          [F10] Menu:
               This option at the command line will return you to the main
          menu.





















          Video Tape Control                                     Page 12







          MEMBERSHIP FILE

               This is where you maintain your membership or customer file.
          After pressing selection 2 you will have the option of <V>
          viewing members, <A> adding members, <C> changing members, <D>
          deleting members and pressing [ENTER] would return you to the
          main menu.


          Here are a few basic guide lines for entering new data:

               After you enter each line of data you must press [ENTER] to
               accept the line.

               Remember to enter all letters in upper case (keep the
               caps lock on).

               Commas are allowed in all lines except the Member #.

               The Member # can be up to 7 characters long.
               The first character must begin with a number (1-9).
               Any Characters after the first may be alpha or numeric.
               Each member must have their own Member # (Video Tape Control
               checks and will alert you if you key in duplicate number).


               The Suggested format for the members name is:

               LAST NAME, FIRST NAME  - i.e.  SMITH, FRED A.

               This is important when you search for a member by name.


               When entering the city, state, and zip code, and the member
               your keying in has the same city and state as your stores,
               pressing [ENTER] at this line will display the city and
               state you entered in the initialization program.  Then you
               would type in the zip code after the displayed city and
               state.  This feature will save key strokes when entering
               membership information.  This feature only works if the
               company city, state, and zip was entered correctly (with a
               period (.) behind a 2 digit state) in the initialization
               program.



               If you press [ENTER] at the Membership Date line the current
               system date will be displayed.




          Video Tape Control                                     Page 13







          MEMBERSHIP FILE (CONT.)

          *    If the first character of the Membership Type line is a "N"
               then this would indicate that this is a non-member.
               They would be charged the extra amount for non-members
               entered in the initialization program.


          *    Placing a "C" in the first column of Membership Type
               would indicate that this member would receive complimentary
               or free rentals.  This is for the owner of the store or if
               you wish your employees to receive free rentals.

               NOTE: The "C" option will only be active on Price Codes
                     1 thru 6.  A "C" or complimentary member would be
                     charged on Price Codes 7 thru 12.

          *    If you place a "R" in the first column of the Membership
               Type this would indicate a Risk member.  Any member with
               an "R" membership type displayed on the transaction screen
               would trigger two beeps and the message:

               THIS MEMBER MARKED AS RISK
               Rent To This Member (Y/N)?

               This will remind you of a bad member and you have the option
               of renting to them or not.  The member Comments line can be
               used with this feature to leave a message why they have
               been mark as a risk member.


               The comments line will be displayed with the member
               information on the transaction screen.



               After all the membership information has been keyed in, the
          message "Correct (Y/N)? will be displayed.  Answering "Y" here
          would write the member information to the files. A "N" response
          would allow you to change any of the lines and pressing the [ESC]
          key would erase all the information and start over.











          Video Tape Control                                     Page 14









               If you press "C" you would be prompted for the member to
               change and would be allowed you to change lines A thru P.
               You will  notice that while changing lines the old
               information will be displayed at the right.

               Pressing "D" would allow you to delete a member.  After
               finding a member and entering "D" at the options the
               message :  "Delete This Member (Y/N)?" will appear.
               Responding with a "Y" here would remove this member from
               your files, a "N" would take no action.

          *    NOTE:  A member cannot be deleted or have their member-
               ship number changed if they have items out on rental.

               To return to the main menu just press [ENTER] at the
               options.



          TAPE FILE

               This is where you enter and change your tape or item
               inventory.  After pressing selection 3 at the main menu the
               add ADD/CHANGE TAPE SELECTIONS screen will be displayed.
               Here, you can <V> view existing tapes, <A> add new tapes,
               <C> change tapes, and <D> delete tapes. To exit this area
               just press [ENTER] at the "Item #" prompt.

          *    There are two items already your item data files:

               9998 CREDIT/REFUND
               9999 LATE CHARGES DUE


               Video Tape Control requires these items to operate properly.
               The 9998 CREDIT/REFUND is used in rental transactions to
               give your members credits if needed or can be used for
               specials such as adjusting a transaction for a free tape
               rental.

          *    When you use 9998 CREDIT/REFUND in your transaction the
               amount will always be a negative value.  This is so the
               transaction total will balance.

          *    The 9999 LATE CHARGES DUE is used for collecting late fees
               from your members which can be called up manually or Video
               Tape Control will automatically call it up for you in
               collecting late charges.


          Video Tape Control                                     Page 15







          Here are a few basic guide lines for entering data:

               You must press [ENTER] after entering each line of data.

               Remember to enter all letters in upper case (keep the
               caps lock on).
               Commas are allowed in the Title and Status/Comment lines.

               The Item # can be up to 7 characters long.
               The first character must begin with a number (1-9).
               Any Characters after the first may be alpha or numeric.
               Each item must have its own item # (Video Tape Control
               checks and will alert you if you key in duplicate number).

               To insure a correct sort of item numbers in the report gen-
               erator it is suggested to use this following format:

               123.1     would be for item #123 copy#1
               123.2     would be for item #123 copy#2

               1009.1    would be for item #1009 copy #1


               Video Tape Control will accept any method of item numbers
               as long as the first digit is numeric (1-9) but keep in mind
               that the numbers with the longest length will be at the end
               of the list when sorting by item number in the report
               generator.




               The title can be up to 25 characters long and CANNOT begin
               with a number.  For titles that begin with a number such as,
               48 HOURS or the movie 2010 you will need to place a asterisk
               (*) or an apostrophe (') in front of the title.

               i.e. (movie titles with numbers),  '48 HOURS      '2010

               Remember, this is only necessary for titles that begin with
               a number.  This is so Video Tape Control can tell movie
               titles from numbers while searching the files.










          Video Tape Control                                     Page 16







               When entering the Category line the following descriptions
               will be displayed:

               1)MISC, 2)ACTION, 3)COMEDY, 4)CHILDREN, 5)MUSICAL
               6)HORROR, 7)DRAMA, 8)WESTERN, 9)ADULT, 10)SCIENCE FICTION
               11)MYSTERY, 12)ADVENTURE, and  N)NON-RENTAL.

               At the Category line you must enter a number between 1 and
               12 or the letter "N".  Non-rental items are items for sale
               such as blank tapes or can be be used for membership fees.
               It is important to use the category properly as you can
               print your lists by categories.


               The Rating can be entered in as PG, PG-13, R, or X as
               you wish.

               By pressing [ENTER] at the Date Purchased line you will
               get the current system date.

               In the Cost line do not use a "$" sign or commas.


               When entering the price code, prices 1 thru 12 and M)MANUAL
               will be displayed. These are the codes you entered in the
               initialization program.  If an "M" is placed in the Price
               Code when the item is displayed on the transaction screen
               you will be prompted for the price.  This feature, when used
               with the Non-rental category, could be used for misc. sales.


               The Actor, Movie Length, Vendor, and Location lines are
               optional.  If you do not wish to use these, press
               [ENTER] at each of these lines.



               If you press [ENTER] at the Format line, VHS will be
               displayed.

               The Status/Comment line can be used for any information
               you wish to save on the tape.  This line will be displayed
               in the Tape Library.

          *    If the first 2 characters of the Status/Comment line are
               NT then no sales tax will be charged.  This is for certain
               non-taxable items you would want to sell in your store.





          Video Tape Control                                     Page 17







               The last line to input is the Late Fee Code.  If your late
               fees are the amount of the rental item then you would just
               press [ENTER] here.  If your late fees are different than
               your rental amount you would enter the code (1-4) depending
               on what values you placed in the code during the
               initialization program.



               After all the item information has been keyed in, the
          message "Correct (Y/N)?"  will be displayed.  Answering "Y" here
          would write the item information to the files. A "N" response
          would allow you to change any of the lines and pressing the [ESC]
          key would erase all the information and start over.





               Pressing "C" and entering a tape number would allow you to
               change lines A thru O.  You will notice that while changing
               lines the old information will be displayed at the right.

               Pressing "D" would allow you to delete an item.  After
               finding a member and entering "D" at the options the
               message :  "Delete This Item (Y/N)?" will appear.
               Responding with a "Y" here would remove this item from
               your files, a "N" would take no action.

          *    NOTE:  An item cannot be deleted or you cannot change
               the item number if it is out on rental.

               To return to the main menu just press [ENTER] at the
               options.


















          Video Tape Control                                     Page 18







          REPORT GENERATOR

               The Report Generator is where you will print all of your
          membership and tape information.  After pressing selection 6 at
          the main menu the following sub menu will be displayed:

          Video Tape Control 6.x          (C) Copyright 1987, Micro Methods
          -----------------------------------------------------------------

                               *  REPORT GENERATOR  *


               <1> Members With Late fee     <5> Membership List

               <2> Members With Late Tapes   <6> Reservation List

               <3> Tape Information List     <7> Membership Mailing Labels

               <4> Tape List For Members     <8> Return To Main Menu


                              > Enter Selection _






               When printing any of the membership or tape list you will
          have the option of sorting the printed output by number or
          name/title.
          After selecting the list you wish to print, the following will be
          displayed:

                          [1] Sort By Member # (or Tape #)
                          [2] Sort By Name (or Title)

                          Enter Option or [ESC] To Exit_

               Here you would choose how you wish to sort the report or
          press the [ESC] key to return to the Report Generator Menu.

               When printing any of the tape or item list you will also
          have the option of choosing which category you wish to print.
          The categories are:

          1)MISC, 2)ACTION, 3)COMEDY, 4)CHILDREN, 5)MUSICAL, 6)HORROR,
          7)DRAMA, 8)WESTERN, 9)ADULT, 10)SCIENCE FICTION, 11)MYSTERY,
          12)ADVENTURE, N)NON-RENTAL, and A)FOR ALL CATEGORIES.



          Video Tape Control                                     Page 19







          REPORT GENERATOR (CONT.)

               After the printing starts on any of the reports you may
          abort or stop the process by pressing the [ESC] key.



               Description of each report:

               <1> Members With Late Fees:
               This report will give you a list of all the members which
               have late fees not paid in their file.

               <2> Members With Late Tapes:
               A listing of all the members who have tapes or items out
               pass the return time.

               <3> Tape Information List:
               A condensed list with all the tape information such as cost,
               date purchased, times rented, revenue earned, etc.  You also
               have the option of sorting in ASCENDING or DESCENDING order
               on the following fields:

               [1] Item Number
               [2] Item Title
               [3] Date Purchased
               [4] Last Date Rented
               [5] Times Rented
               [6] Item Revenue


               <4> Tape List For Members:
               A condensed list that you may sell or give to your
               customers.  The tape list is formatted in 3 columns with
               item#, title, and rating.

               <5> Membership list:
               A condensed list of membership information such as total
               items rented, revenue earned from each customer, etc.

               <6> Reservation List:
               A list of tape reservations you have made for your
               members.  The list contains the items reserved and all the
               members who are on the waiting list.  You will have the
               option of printing all reservations or just the reservations
               on items that are currently available in you store.






          Video Tape Control                                     Page 20






               <7> Membership Mailing Labels:
               This feature will print membership mailing labels.  The
               address label required is 3 1/2" X 15/16" - 1 across.
               After pressing selection 7 you will be prompted for the
               letter range you wish to print, FROM > is the starting
               range, and THRU > would be the ending range of the names
               you wish to print labels for.  If you want to print one
               range of names such as "C" then you would make FROM >C
               and THRU >C.  This would print only the names beginning
               with the letter "C".



               After the sorting has taken place this message and prompt
               will be displayed:

               Ready Printer, xx Labels Will Be Printed...

               Print 2 Test Labels (Y/N/ESC)?_

               xx = the number of labels.  If you answer "Y" at the prompt
               2 test labels used for alignment will be printed and you
               will return to the "Print 2 Test Labels (Y/N/ESC)?" prompt.
               You can keep printing test labels until your mailing labels
               are aligned properly in you printer.  If you answer "N" at
               this prompt the labels will be printed.  Pressing the [ESC]
               key would not print and allow you to start over.

               While the labels are printing you can abort the process by
               pressing the [ESC] key.

               <8> Return To Main Menu:
               Option 8 will return you to the main menu.



          ACCOUNTING INFORMATION

               Selection 5 on the main menu will let you access your stores
          revenues.  To access this area you must know the password which
          was entered in the initialization program.  If the password is
          not entered correct after 3 tries you will be returned to the
          main menu.  If no password is being used just press [ENTER] at
          the "Enter Password ?" prompt.  After gaining access to the
          accounting area and the screen is displayed you will notice that
          all money received is kept track of on a daily, monthly, and
          year-to-date basis.  These totals are broken down into rentals
          and sales, late fees collected, credits (negative number), and
          sales tax collected.




          Video Tape Control                                     Page 21







                      The options in the Accounting Information are:

                                  [1] Print Totals
                                  [2] Zero Totals
                                  [3] Change Price Codes
                                  [RETURN] For Menu





               [1] Print Totals:
               This option will send the totals to the printer as they are
               displayed on the screen.  A break down of the activity on
               each of the price codes and a daily summary will also be
               printed.  The daily summary is a listing of all invoices
               processed that day.  After selecting option 1, the following
               prompt will be displayed:

               xx transactions in the summary file...
               Do you wish to print a Daily Summary (Y/N/ESC)? _

               (xx = the number of transactions for the the day.)

               If you press the "Y" key, then the daily summary will be
               printed.  If you press "N" then no summary will be printed.
               Pressing the [ESC] key here would return you to the "Enter
               Option" prompt and no action would be taken.  This feature
               will give you the option of using, or not using the daily
               summary report.

               The "Daily Break Down By Price Code" consists of a break
               down of the activity on each of the price codes.  Price
               Codes 1 thru 12, and the manual code will be listed along
               with the activity and the amount each code has produced
               during the day.  All credits and late fees collected ARE NOT
               included in the break down but are listed only in the Daily,
               Monthly, and Year-To-Date summary.

               When you zero the daily totals, the daily break down by
               price code will also be zeroed.



               [2] Zero Totals:
               Option 2 is used for zeroing your daily, monthly, and year-
               to-date totals. This is a manual operation and must be done
               by you when the need arises.  Which means you should zero
               daily totals every day, monthly totals at the beginning of
               each month, and year-to-date at the beginning of the year.


          Video Tape Control                                     Page 22








               When you press option 2 the following will be displayed:

                    <D>AILY  <M>ONTHLY  or  <Y>EAR-TO-DATE

               Here you would enter "D", "M", or "Y" depending on which
               column you wish to zero.  After choosing the proper column
               to zero the word <D>AILY, <M>ONTHLY, or <Y>EAR-TO-DATE will
               flash on and off depending on your selection and you will be
               prompted to "Verify (Y/N)?" your selection.  Pressing "Y"
               here would zero the column you selected, a "N" response
               would take no action and return you to the "Enter Option"
               prompt.


          *    When you zero the daily column the summary file will also be
               erased so before zeroing any column be sure to print your
               totals first.

               [3] Change Price Codes
               This option is used for changing or adding price codes.
               These are the same codes you entered in the initialization
               program.  The codes are changed by entering the the line
               (A thru L) to change.  Press [ENTER] to exit this area and
               answer the prompt "> Make Above Prices Defaults (Y/N)?" with
               a "Y" or "N".  A "Y" response here would make the changes
               you made permanent in the files.  A "N" response would make
               the changes temporary.  This feature could be used for
               specials you may have during the week on certain tapes.


               Example: Lets say you have tapes with a normal rental price
                        of $2.00 which is price code 1.  Every Tuesday you
                        have a special price of $1.00.  So to make the
                        temporary price change you would change Price 1
                        from $2.00 to $1.00 on Tuesdays and answer "N"
                        to the "> Make Above Prices Defaults (Y/N)?".
                        This would change the $2.00 rentals to $1.00 for
                        that day only.

               Keep in mind that if you exit and re-enter Video Tape
               Control, any temporary price code changes will have to be
               re-entered.









          Video Tape Control                                Page 23







          EXITING VIDEO TAPE CONTROL

               Selection 7 on the main menu will exit the program and
          return you to the C> prompt of the computers operating system.
          Even though Video Tape Control protects your data in the event of
          a power failure, always exit the program properly before shutting
          down your computer.













































          Video Tape Control                                     Page 24







```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2189

     Volume in drive A has no label
     Directory of A:\

    VTC      COM     31616   5-07-90   9:26a
    INIT     COM     31488   5-31-88  10:35a
    VTC1     CHN     38144   5-07-90   9:32a
    VTC2     CHN     19968   4-30-90   7:00a
    REPORTS  CHN     24576   5-07-90  10:05a
    ACCOUNT  CHN      9600   4-04-89   3:03p
    CUST     KEY       128   5-08-90  11:19a
    TAPE     KEY       128   5-08-90  11:19a
    ACCOUNT  DTA       512   5-08-90  11:19a
    RESERVE  DTA       128  10-11-87   7:14p
    CUST     DTA       128   5-08-90  11:19a
    TAPE     DTA       768   5-08-90  11:17a
    SUMMARY  DTA         0   5-07-90  10:00a
    INSTALL  BAT       863  12-28-89  10:39a
    INIT     BAT        19  12-11-87   8:24p
    VTC      BAT        29   1-07-88   8:21p
    BKVTC    BAT        22   1-07-88   8:17p
    RSVTC    BAT        23   1-07-88   8:18p
    VTC      DOC     56297   5-07-90   9:47a
    READ     ME        920   5-07-90   9:52a
    TRANS    DTA       256   5-08-90  11:17a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   5-02-90   4:12p
    FILE2189 TXT      1631   6-01-90   3:04a
           24 file(s)     217976 bytes
                           91136 bytes free
