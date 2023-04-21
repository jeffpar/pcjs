---
layout: page
title: "PC-SIG Diskette Library (Disk #1806)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1806/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1806"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICRO REGISTER"

    MICRO REGISTER is a point-of-sale and invoicing program designed to
    automate a retail or service related business. MICRO REGISTER can be
    set up for many different types of business applications. You can print
    invoices for customers, statements for charged sales or services, and
    even generate price quotations.
    
    The program keeps track of inventory and customer account information
    and gives you the option of using a salesperson file that will
    automatically give you total commissions earned by each salesperson.
    Income is recorded on a daily, monthly, and year-to-date basis. These
    totals can be printed at any time and have password protection.
    
    MICRO REGISTER produces many printed reports such as inventory item
    lists, item below reorder level, customer and sales personnel list, and
    will print price labels for your inventory. MICRO REGISTER can hold
    65,000 inventory item numbers, 65,000 customer accounts, and 100
    salespeople in its database.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MR.DOC

{% raw %}
```






          Thank for reviewing Micro Register and supporting Shareware.   If
          you  find  this  software  useful,  a  registration  is required.
          Registered users will receive the  the  most  recent  version,  a
          printed  manual  and  phone support.  Any comments or suggestions
          that you may have would also be appreciated.



                            * MICRO REGISTER ORDER FORM *


          NAME ____________________________________________________________

          COMPANY _________________________________________________________

          ADDRESS _________________________________________________________

          CITY, STATE & ZIP _______________________________________________

          PHONE (______) __________________________________________________




          MICRO REGISTER REGISTRATION FEE                        $75.00

          INDIANA RESIDENTS ADD 5%                          _______________

          TOTAL                                             _______________



          CIRCLE ONE:

          CASH     CHECK     MONEY ORDER     COD     VISA     MASTER CARD


          ACCT# _______________________________________ EXP DATE___________

          SIGNATURE _______________________________________________________



                                  PLEASE RETURN TO:

                                    MICRO METHODS
                                    P.O. BOX 2027
                                EVANSVILLE, IN. 47728

                                   (812) 476-0999







          INTRODUCTION
          Micro Register is a point-of-sale and invoicing computer  program
          designed to automate a retail or service related business.
          Micro  Register can be setup for many different types of business
          applications.   You can print invoices for customers,  statements
          for   charged   sales  or  services,   and  even  generate  price
          quotations.   You also have the option  of  saving  invoices  and
          price quotations to disk and view them at any time.
          The  program  keeps  track  of  inventory  and  customer  account
          information and gives you the option of  using  a  salesman  file
          that will automatically give you total commissions earned by each
          salesman.
          Income  is  recorded on three user defined periods such as daily,
          monthly,  and year-to-date.   These totals can be printed at  any
          time and can have password protection.
          Micro  Register  produces  many printed reports such as inventory
          item lists, item below reorder level, customer and sales personal
          list, and will print price labels for your inventory.
          Micro Register can hold 65,000 inventory item numbers and  65,000
          customer  accounts  in  it's data base depending on the amount of
          disk space available.

          HARDWARE REQUIREMENTS
          The following hardware is required to use Micro Register:
          IBM PC, XT,  AT or compatible computer with at least 256K of free
          memory.
          MSDOS 2.1 or higher.
          1  5 1/4" or 3 1/2" floppy disk drive.
          10 MEG. or higher hard disk drive.
          80 column dot matrix printer.

          Optional:
          Star DP-8340 40 column serial receipt printer.
          RS-232 serial port.
          Serial cash drawer.



          INSTALLING MICRO REGISTER
          To  load  Micro  Register  on to the hard disk drive,  insert the
          program disk the came with this manual into drive A and at the  C
          prompt type:

          A:INSTALL

          This  will  create  a  sub  directory  called MR and copy all the
          program and data files to your hard drive.










          COMPANY SETUP
          Before you use Micro Register you must first  setup  the  program
          with information about your business.   This is done by selecting
          option [S] on the main menu.   The company setup  consists  of  2
          pages and has 17 options that you can change.

          Company Setup Page 1
          Your options in Company Setup are:
          Changing  one line by entering the line number at the "Enter Line
          # To Change?" prompt.
          Pressing [F1] to save what is displayed on the screen and  return
          to the menu.
          Pressing  [F2]  to  undo  changes  and  return screen to previous
          settings.
          Pressing [F9] to change all lines.
          [PgDn] to display second page of setup information.
          Lines 1 though 4 -   These  4  lines  are  your  companies  name,
          address  and phone number.   This information will appear on your
          invoices and statements.

          Sales Tax Codes
          Line 5 -  Are the sales tax codes.   You can have  up  to  4  tax
          codes,  the first code should be the most used as it is a default
          code.  If you have only one sales tax in your state then place it
          in code 1 and leave codes 2 - 4 zero.
          Line 6 -  This is the next  number  to  appear  on  your  printed
          invoices.    Micro  Register  automatically  numbers each invoice
          printed.   You may change this number at any  time  such  as  the
          beginning  of  the year.   After entering the next invoice number
          you will be prompted for an AUTO or  MANUAL  number.    A  manual
          number  would allow you to change each invoice number at the time
          of the transaction and a auto number would not.    Keep  in  mind
          that  Micro  Register  will  always keep track of the last number
          used,  the manual option just allows you to change the number  if
          you wish.
          Line  7  -      The  annual  percentage  rate charged on past due
          receivables.
          Line 8 -  The due time in days of receivables.
          Line 9 -  Three lines of information  to  be  displayed  on  each
          invoice  printed.    This can be used to advertise store sales or
          the hours of your business.

          Company Setup Page 2
          Line 10 -  Password Protection On:
          This is where you define which areas of the program you  wish  to
          password  protect.    Each line is menu selection of the program.
          After selecting option 10 you can then highlight the the lines by
          using the up or down arrow keys.    To  add  or  remove  password
          protection press [ENTER] at the highlighted number.  Pressing the
          [ENTER]  key  acts  as  a switch to add or remove the check mark.
          When the line has a check mark by it, it has password protection.







          Password
          Line 11 -  A password you can assign to  Micro  Register    which
          works with the information on option 10.
          Line  12  - These are the printer codes used to make your printer
          print condensed or normal type.   Many  printers  use  the  EPSON
          codes which would be 27  15 for condensed print and 18 for normal
          or  to release condensed print.   If these codes do not make your
          printer print in condensed format then check your printer  owners
          manual for the proper codes and enter them here.
          Line 13 -  Allows you to identify the 3 accounting total headers.
          These headers will be displayed on the Accounting Information and
          on the inventory file information.
          Line  14 -  This option gives you the option of allowing negative
          amounts to accumulate in the quantity on  hand  amounts  of  your
          inventory items.
          Line 15 - Allows you to save past invoices.
          Line 16 - Allows you to save past quotations.
          Line  17  -    An  option used for the printing the invoice or 40
          column receipt.  Entering an A here would always print an invoice
          or receipt.   Entering an N here would never print an invoice  or
          receipt  and  a  P  here  would  prompt  you with the line "Print
          Invoice (Y/N)?" giving you the option to print,  or not to  print
          at  each transaction.  After type you answered the invoice option
          prompt,  you must enter which type.   1 would be a 80 column full
          page  invoice and 2 would be a 40 column receipt.   To use the 40
          column receipt you  must  have  a  Star  DP-8340  serial  receipt
          printer.

          STARTING  MICRO REGISTER
          To start The Micro Register,  at the C prompt,  type MR and press
          [ENTER].    After  the  program  loads  The  main  menu  will  be
          displayed.

          THE MAIN MENU
          The main menu is the central control area of the program.   It is
          from this area you will access the different modules of The Micro
          Register.   To select a menu option,  use the arrow keys to  move
          arrow pointer to the desired line and press [ENTER] or key in the
          number of the line.

          SALES TRANSACTIONS
          The  sales  transactions is where sales are enter and the invoice
          is printed.   After selecting option 1 from  the  main  menu  the
          transaction screen will be displayed.

          If  you installed The Micro Register with a manual invoice number
          (in the setup program),  you will be  prompted  for  the  invoice
          number.    Here,  you  can  enter  in the invoice number or press
          [ENTER] to accept the next number kept  track  of  by  The  Micro
          Register.






          If  you  enter  in  an invoice number,  that number be be used to
          calculate the next number.  Keep in mind that this prompt is only
          displayed if you answered with  an  M  for  the  AUTO  or  MANUAL
          invoice number option in the setup program.
          At  the "Customer :" prompt you have 4 options.   The first is to
          enter a customer account number, which if exist, will display the
          customer.   The second option would be entering a customers  name
          this  would make The Micro Register search for the name you keyed
          in and display each match found.  To search by name you the first
          character must be a "?", i.e. to search for JONES, FRANK A.   you
          would key in ?JONES.
          When  a  match  is  found,  it will be displayed and you would be
          prompted with an "OK (Y/N/P/ESC)?" ( Here,  if you answer with  a
          Y,  or  press [ENTER] for YES,  and then be readied to enter item
          numbers).     If you enter an N here the next occurrence would be
          displayed,  and  a  P would display the previous match.   You can
          keep pressing N or P until you  find  the  customer  or  no  more
          matches  are  found.    The  third  option  would be to type in a
          customers name and address that does not exist  in  the  customer
          account  file.    To  do this you must enter a period (.) for the
          first character of the first line.  This tells The Micro Register
          not   to  search  the  files  and  allows  you  to  continue  the
          transaction.  The purpose of this is to allow you to enter a name
          and address to be printed on the invoice. The Micro Register does
          not save this name.   The fourth and last option here would be to
          press  [ENTER],  this  would  display  the word CASH and then you
          would be prompted for the first item number of the invoice.  This
          is used for cash sales and the  customers  name  address  is  not
          needed.
          When  entering  an  inventory  item  number,  if  it  exist,  the
          description will be displayed and you will be  prompted  for  the
          quantity sold.   After entering the proper quantity, the price of
          the item and the extended amount will be displayed with an  "OK?"
          prompt.    Answering with a Y or pressing [ENTER] here would drop
          the the cursor down to enter another item.  Entering N here would
          back the cursor up under the "Price" column,  which  would  allow
          you to change the selling price by entering price code A,  B,  C,
          D,   or keying in an amount manually (at this point you may erase
          the line and start it over by pressing [ENTER]).   Another option
          at the "OK?" prompt is to enter a C.   This  is  for  entering  a
          comment  or  serial  number for the item being sold.   Pressing C
          would drop the cursor down below the items description  to  allow
          you  to  enter  the  information.   To quit entering information,
          press [ENTER] at the beginning of the next new line and you  will
          then  be prompted for the next item number on the invoice.   Keep
          in mind that each invoice can hold up to 25  total  lines.    The
          screen will scroll when it becomes full.
          When  you  are  done entering items just press [ENTER] to get the
          sub-total of the invoice.  Here the sales tax is  calculated  and
          the total due is displayed.







          PAYMENT TYPE
          To complete the transaction you must enter in the type of payment
          received.  There are six payment types; 1 CASH, 2 CHECK, 3 CREDIT
          CARD,  4 GIFT CERT,  5 OTHER,  and 6 ACCTS REC.  If the sale is a
          CASH type, payment type 1 CASH will be displayed.  You may key in
          another payment type (1 though 6) if you wish.  When  the  proper
          payment  type  is  displayed,   press  [ENTER]  to  complete  the
          transaction.    Payment type 6 ACCTS REC can only be  used  if  a
          customer account is displayed.
          If  the  sale  has a 1 CASH payment type you will be prompted for
          the amount tendered or cash received.  You may enter  the  amount
          here and the change due will be calculated. This prompt can be by
          passed by pressing [ENTER].  If you wish to enter more items, the
          [F3] function key can  be  pressed,  which  will  return  you  to
          entering item numbers for the transaction.    Micro Register will
          automatically update the customer  accounts,  inventory  records,
          and accounting totals for each transaction performed.

          The other options in the Sales Transactions are:
          [F1] To return to the main menu.
          [F2] To erase an invoice and start over.
          [F3] Add, view, change or delete a customer account.
          [F4] Add, view, change or delete a inventory item.
          [F5] View Inventory,  which opens a window and allows you to page
          through your inventory file and view quantity on hand amounts and
          prices.
          [F6] To view past invoices and/or price quotations.
          [F7] View customer statements.
          [F8] Post money received on accounts.
          [F9] Print a price quotation.

          [F5] View Inventory
          Pressing  this  function  key will open a window and allow you to
          search your inventory item file by the item description.
          You can enter up to 12 characters  of  the  item  description  to
          search  by  or  press [ENTER] to list all items in your inventory
          file and the item number,  price,  and quantity on hand  will  be
          displayed.    If  there  is a customer currently displayed on the
          screen when using the inventory window,  then the prices will  be
          the  price code which that customer has.   If no customer or CASH
          is displayed then the prices displayed will default to price code
          A.    Up to 8 items matching what you keyed in will be  displayed
          at one time.  To view more items, you can use the Page Up or Page
          Down  keys.    If you wish to search by a different key press the
          [ESC] key to clear the window and start a new  search.    If  the
          inventory  window  is  opened while you are entering items on the
          invoice you will have the option of moving an arrow (with the  up
          and  down arrow keys on your keyboard) displayed on the left side
          of the item description.   Aligning this arrow next  to  an  item
          displayed  and pressing the [ENTER] key will close the window and
          place the item on the invoice.






          If you wish to exit without placing  the  item  on  the  invoice,
          press the [F1] key.

          [F6] View Invoices
          The  [F6]  key  will  allow  you  to  view  all  past invoices or
          quotations.
          The options at the View Past Invoices  screen  are  to  enter  an
          invoice  number  you  wish  to find,  enter in a customer name to
          find, [F1] Exit, [F3] Print, [F5] Purge Invoices,  [Home], [End],
          [PgUp],  and [PgDn].   The  [F1]  key  will  return  you  to  the
          transaction  screen.    The  [F3]  key  will  print  the  invoice
          displayed on the screen. [F5] will open a window and allow you to
          purge existing invoices in the data file.   The purge is done  by
          invoice  dates.      [Home] will display the first invoice in the
          file.   [End] will display the last invoice in the file.   [PgUp]
          and [PgDn] will display the next or previous invoices as they are
          located in the file.   If you know the invoice number you wish to
          find,  enter it in and if it is in the file it will be displayed.
          If you wish to search for an invoice by name,  enter in up to ten
          characters of the name and if  found  the  first  match  will  be
          displayed.    You  will then have the option of locating the next
          match by pressing "N",  the previous match by  pressing  "P",  or
          cancel the search by pressing the [ESC] key.

          Disk Space Requirements for Saving Invoices
          Saving  past  invoices and quotations requires much space on your
          hard disk drive.   1,000 invoices or quotations will occupy about
          1.5  meg of space.   To control the amount of disk space used you
          will need to occasionally purge this file.

          Credits & Refunds
          To enter a credit for returned merchandise you would first  enter
          the  number  of  the  item  being returned.  Answer No at the OK?
          prompt,  and key in a negative number (which would be the  amount
          of the credit).  WHEN A NEGATIVE NUMBER IS ENTERED ON AN ITEM THE
          QUANTITY SOLD WILL BE ADDED BACK INTO INVENTORY AND THE CUSTOMERS
          AND  ITEM  TOTALS WILL BE ADJUSTED ACCORDINGLY.     Remember,  to
          automatically return items  back  in  your  inventory,  you  must
          credit the item being returned.

          INVENTORY ITEM FILE
          Selection  2  from  the  main menu will allow you to maintain you
          inventory items.   You can add,  change,  view and  delete  items
          here.    Your options are A to add items, C to change items, V to
          view, and D to delete.  [F1] will return you to the main menu.

          Guide lines for entering inventory items:
          The item number can have a maximum of 15 characters  and  can  be
          alpha or numeric.
          The  category  field can have up to 10 digits and can be alpha or
          numeric.






          The category is important as you can print information about  you
          inventory sorted by category.
          The description field can have a maximum of 25 characters.
          Use  only numbers or decimals in the qty on hand,  reorder level,
          cost, retail price, and mark up lines.
          You can have up to 4 different retail prices on you items.   When
          entering  customer accounts you will be prompted for a price code
          for that customer.   Price A is always charged to CASH customers.
          The  mark  up  percent lines will automatically be calculated for
          you using the retail prices or you can press [ENTER] at each  for
          the  retail price lines,  enter the mark up and the retail prices
          will be calculated.
          If you enter a zero in the cost line,  the retail price and  mark
          up lines will be by passed and during a transaction , you will be
          prompted  to  key  in the price manually.   This feature could be
          used for misc. sales.
          The vendor line is used for the company name  of  the  vendor  or
          supplier  of the item.   You can sort and print by vendor on some
          of your printed reports.    The vendor line will also be  printed
          on your inventory item lists.
          The Item Status is reserved to identify special inventory records
          used for service type line items.   By placing a *SV in this line
          you can then used this item number for services rendered.    With
          the  *SV  in  the  Item Status line all transactions on this item
          will  automatically  be  added  to  the  service  totals  on  the
          accounting information.
          The Taxable (Y/N) prompt is for identifying taxable and non-
          taxable items.
          Last update is the last time the item was received.
          Last sold is the date it was last purchased.
          Total  sold,  Item  Revenue  and  Item  Profit  are automatically
          updated at each transaction.   You can enter amounts in  here  or
          press [ENTER] at each of these lines to leave at zero.
          Item  Revenue  is the total sales of the item and the Item Profit
          is calculated by the selling price and the item cost.
          To edit any of the lines use to up or down arrow key and  re-type
          the line.  To save the information press the [F10] key.
          To return to the Add,  Change, View or Delete options, just press
          the [F1] key.

          When you enter C at the options you will be prompted to  enter  a
          item  number to change.  Here you would key in the item number or
          an ?  and the description to search for and use the  page  up  or
          page down key to display your inventory items.  After finding the
          record  you  want,  you  may  then used to arrow keys to edit and
          press [F10] to save the changed information.

          The V option allows you to view any of the items.  You can  enter
          the item number or ?description to view and page up or page down.








          To  delete an item you would enter a D at the options,  and enter
          in the item number or ?description to delete.  To delete the item
          displayed press the [Del] (DELETE) key.

          CUSTOMER ACCOUNT FILE
          Selection 3 from the main menu will allow  you  to  maintain  you
          customer accounts.  You can add, change, view and delete accounts
          here.

          Guide lines for entering customer accounts:
          The account number can have a maximum of 7 characters.
          If  the  last  character  of  the account number is an E then the
          customer will not be charged or would be exempt from interest  on
          past due receivables.
          The  name,  address,  and  city state zip lines can have up to 25
          characters. The phone line can have 15 characters.
          The comments line is for misc.  information and will be displayed
          on the transaction screen.
          The  credit  limit  is  the  maximum credit you will give to this
          customer.   If a customer goes over his limit you will be alerted
          of this during the transaction.
          The  tax exempt number is for the customers sales tax number.  If
          you place a number in this line the customer will not be  charged
          sales  tax.  Leave  this line blank if a customer is to pay sales
          tax.
          The price code line must be the letter A, B, C, or D.   This code
          tells The Micro Register which price to charge this customer.  If
          you are only using price A then always leave an A on this line.
          The  last  purchase  is the last time the customer file purchased
          items.
          The total purchases is the total to date  amount  of  money  this
          customer has spent at you store.

          The  Sales  Tax  code can be a number between 1 and 4 or can be a
          combination of any or all of the codes depending on how the sales
          tax is charged in your area.

          Adding, changing,  viewing,  and deleting records are done in the
          same manner as the inventory file.


          SALES PERSONNEL FILE
          Selection  4  from  the  main menu will allow you to maintain you
          sales personnel file.
          Guide lines for entering sales personnel:
          The salesman number can have a maximum of 2 characters.
          The name,  address,  and city state zip lines can have up  to  25
          characters.  The  phone  and  social security # lines can have 15
          characters.








          The comments line is for misc. information.
          The commission % line is the amount of commission  in  a  percent
          the salesman will receive.
          The  commission  on  line  can be G for gross sales made or P for
          profit made on sales.    The  commission  %  is  used  with  this
          information to calculate the salesman's total commission.
          The Micro Register will keep track of a salesman's commission and
          total sales on a current or year-to-date basis.  These totals can
          be  zeroed  at  any time.   This is done by pressing [F10] at the
          options,  entering a C for to zero current totals or a Y to  zero
          year-to-date  totals.  Before  any totals are you are prompted to
          "... Verify (Y/N)?".

          ADD RECEIVED INVENTORY
          Selection 5 of the main menu is used to add  inventory  purchases
          to your item file.

          You  will  be  prompted  for the inventory item number to update.
          After keying in a valid number, the item description, quantity on
          hand, last update, and current item cost will be displayed.   You
          can  then  enter  the  number  of items received and at the "OK?"
          prompt answer Y to write the information to the file or  enter  N
          to  re-enter  the total amount received.  If you enter in an L at
          the "OK?" prompt you can print price labels for that  item  being
          received.    You  can change the items wholesale cost by pressing
          [F3] at the total received prompt.  When changing the cost of  an
          item,  you  will  be  prompted  to  adjust the mark up percent or
          retail price of the item.

          Pressing [F2] here would erase the line and allow  you  to  start
          over.  [F1] will return you to the main menu.
          After  adding  received  inventory  the  quantity on hand will be
          adjusted and the last update will be changed to the current date.
          f the item cost was changed then the markup or retail price  will
          also be changed.


          POST ACCOUNTS RECEIVABLE
          The  Micro Register maintains a balance forward receivable system
          and all money  received  towards  outstanding  accounts  must  be
          entered here.
          To  enter  money received,  you must find the customer account to
          post.   This is done by entering their account number or you  may
          search  for  a  customer  by  entering  their  name.  The  search
          procedure is done in the same manner as you would  in  the  sales
          transactions.
          After a customer has been located, their name and address will be
          displayed  along  with  their previous balance,  current charges,
          current payments,  and current balance due.   You  will  then  be
          prompted of the date of the payment.







          After  the  date  is entered you are prompted for the amount paid
          (use numbers and decimals only), and a check or reference #.  The
          reference can be a check or money order number (this number  will
          be displayed on the monthly statement).   If you press [ENTER] or
          P at  the  reference  #  prompt,  "PAYMENT"  will  be  displayed.
          Entering  a  D  would display a DISCOUNT.    The discount feature
          allow you to give discounts to customer  accounts  if  you  wish.
          After  all  information  has been entered an "OK?" prompt will be
          displayed.  An Y here would update the files  and  allow  you  to
          enter  another account number.  N would return you to the "Amount
          Paid" prompt to re-enter the money received.  An R response would
          print a receipt on the amount paid.
          [F2] will erase the line and allow you to start over.   [F1] will
          return you to the main menu.

          ACCOUNTING INFORMATION
          Selection  7  on  the  main menu will let you view and print your
          stores revenues.    You will notice that all  money  received  is
          keep  track  of in 3 different groups.  The 3 groups have headers
          which can be changed in the [S] Company Setup (we will  refer  to
          these totals as Daily, Monthly and Year-To-Date).    These totals
          are broken down into Sales Taxable,  Sales Non-Taxable, Sales Tax
          Exempt (which are the sales made to customer accounts with a  tax
          number), total services, and total sales tax received.

          The options in the Accounting Information are:
          [1] Print Totals
          [2] Zero Totals
          [F1] For Menu

          [1] Print Totals:
          This  option  will  send  the  totals  to the printer as they are
          displayed on the screen.   A daily summary can  also  be  printed
          which is a listing of all transactions processed that day.  After
          selecting option 1, the following prompt will be displayed:
          xx transactions in the summary file...
          Do you wish to print a daily summary (Y/N/ESC)?
          (xx = the number of transactions for the day.)
          Answering  Y  or  N  here  would  print or not print the summary,
          pressing the ESC key would  return  you  to  the  "Enter  Option"
          prompt.

          [2] Zero Totals
          Option  2  is for zeroing your daily,  monthly,  and year-to-date
          totals.   This is a manual operation and must be done by you when
          the  need arises.   This means you should zero daily totals every
          day, monthly totals at the beginning of each month,  and year-to-
          date totals at the beginning of each year.









          When you press option 2, the following will be displayed:
          [1]DAILY [2]MONTHLY or [3]YEAR-TO-DATE

          Here  you  would enter 1,  2,  or 3 depending on which column you
          wish to zero.  After choosing the proper column to zero, the word
          DAILY,  MONTHLY,   or  YEAR-TO-DATE  will  blink  on  the  screen
          (depending  on  your  selection).  You  will  then be prompted to
          "Verify (Y/N)?" your selection.
          After answering Y,   you will be prompted with  "Perform  (Daily,
          Monthly,  or Year-To-Date) Close-Out On Inventory (Y/N)?".   This
          feature will zero the Total Sold,  Item Revenue and  Item  Profit
          lines  on  each  one  of your inventory items.  You will normally
          answer Yes to this prompt.     This  will  allow  you  to  easily
          maintain each of the 3 running totals of your inventory items.

          When  you  zero  the  daily  column the summary file will also be
          erased so before zeroing any column be sure to print your  totals
          first.


          PRINT REPORTS
          Print  Reports  is  where  you  will print all lists of inventory
          items, customer account lists,  sales personal lists,  etc.   The
          monthly  closing  of  your  accounts receivable must also be done
          from this menu.

          [F2] will return you to the print  reports  menu  and  [F1]  will
          return you to the main menu.

          [1] Inventory Item List
          This list,  which is sorted by the item numbers, includes current
          information such as quantity on hand, last time sold, and revenue
          produced.  The vendor information line will also be printed.
          You will be prompted for the category to print,  here  you  would
          enter  up to a 10 digit category which was used in your inventory
          item file or press [ENTER] to print  all  categories.    You  can
          print  this list by vendors if you wish by entering the vendor on
          the next prompt. This vendor name must be present on line  of the
          inventory item file information.  To  print  all  vendors,  press
          [ENTER] here.

          [2] Items Below Reorder Level
          This  list will print all items that have quantity on hand levels
          below the reorder level.

          [3] Item Price Labels
          The Micro Register will print price labels  for  your  inventory.
          You will be prompted for the number of labels for each item.  You
          will  have  to  option  of  printing  test  or  alignment labels.
          Answering Y would print the test labels and N  would  proceed  to
          print the price labels.






          You  can  print  labels  for  one item by by pressing [F3] at the
          Enter Category prompt.   After pressing [F3],  you must enter the
          item  number  you wish to print and enter the number of labels to
          print for that particular item.

          [4] Item Price List
          The Item price list consist of the item number,  description  and
          retail prices.  This is a handy list to place in a book to use as
          a  reference.  You  can  print all price codes or choose just one
          code (A through D) to print.

          [5] Physical Inventory List
          This list is used for taking inventory in your store.  It consist
          of the inventory number,  description,  quantity on hand,  and  a
          blank  line  used  to  write  in  the actual inventory physically
          counted.  This list may then be used to correct the  quantity  on
          hand totals for your inventory file.

          [6] Inventory Value & Analysis
          This will give you your current inventory value determined by the
          cost  and  profits  or  revenues  of each item.   After Selecting
          option 6, you will be prompted on which type of list.   "C" would
          list   combined   categories   and   "I"  would  list  each  item
          individually.  You then must chose "P" to print profit amounts or
          "R" for total revenue amounts.


          [7] Customer Account List
          This is a complete customer information list list which gives you
          their number, name, phone, credit limit,  sales tax # (if one was
          entered), discount received, last date of purchase, and amount of
          money spent at your store.
          You  will  have the option of sorting the list by [1] Account# or
          [2] Name.   After selecting the sort  option  the  list  will  be
          printed.

          [8] Sales Personnel List
          Prints information on sales personnel, includes current and year-
          to-date  sales  and  commission  earned.   You have the option of
          sorting this list by salesman number or name.

          [9] Print Monthly Statements
          Selection 9 will print statements on all  customer  accounts  who
          have  a  current  balance  due.    If  interest  is  to be charge
          (determined in the setup  program)  on  past  due  accounts,  the
          amount  of  the  interest  charged will be assessed on the unpaid
          previous balance and will be printed on the statement.
          Before the statements are printed,  you will have the  option  of
          typing a 3 line message to be printed on all the statements.








          [A] View Monthly Statements
          This  option  will  allow you to view customer statements on your
          screen.  At the "Acct#" prompt, you may key in the account number
          or ?  and the customers name.      After  the  customers  current
          statement is displayed you may print it by pressing the [F3] key.
          To find another customer account,  press [F2],  to go back to the
          Print Reports menu, Press [F1].

          [B] Monthly Close-Out Of Accounts
          Your accounts receivable file will be closed and a summary of all
          active accounts will  be  printed  here.    When  you  close  the
          accounts  all  charges  will  be  added  and  all  payments  will
          subtracted from the previous balance,  giving a balance  forward.
          Then the activity will be zeroed for each account in the file, to
          prepare for the new month.  After you have printed the statements
          you would then normally close out the accounts.
          Before  the  summary  is printed you will be prompted for date of
          closing,  here you would enter a date (MM/DD/YY) or press [ENTER]
          for  the current date.   After the summary is printed you will be
          prompted to print a accounts receivable aging report.    You will
          also  be prompted with an "OK To Close Accounts (Y/N)?".   If you
          answer N to this prompt,  no action will be taken  and  the  file
          will  not  be  closed.    This  option  will allow you to print a
          summary on your receivables at any time if you wish.
          [C] Print AR Aging Report
          You may print an  accounts  receivable  aging  report  with  this
          option.  The Reports will list each customers balance by current,
          31-60 days, 61-90 days, and 90+ days.
          [D] Customer  Mailing Labels
          Selection B will allow you to  print  mailing  labels  from  your
          customer  account  file.    A  label  size of 3 1/2" X 15/16" - 1
          across is required.   Before the labels are printed you must tell
          The  Micro Register which range (by name) to print.   You will be
          prompted with a "FROM" and a "THRU".  "FROM" is the staring range
          and "THRU" would be the end of the range.   If you wish to  print
          all names,  you would enter A for "FROM" and Z for "THRU", if you
          wish only to print the names beginning with C then you would make
          "FROM" C and "THRU" C.
          While the labels are  printing  you  can  abort  the  process  by
          pressing the [ESC] key.

          EXITING  MICRO REGISTER
          Selection Q on the main menu will exit the program and return you
          to  the  C>  prompt  of  the  computers operating system.   After
          choosing selection Q,  you will be  prompted  with  "Verify  Exit
          (Y/N)?".  Here, you would respond with Y to exit the program or N
          to  return to the menu.   Even though The Micro Register protects
          your data in the event  of  a  power  failure,  always  exit  the
          program properly before shutting down your computer.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1806

     Volume in drive A has no label
     Directory of A:\

    MR       COM     20864   5-23-90   6:42a
    MENU     CHN     11392   5-23-90   6:43a
    RP       CHN     43648   5-23-90   6:53a
    CUST     CHN     20480   5-23-90   6:51a
    SALES    CHN     20992   5-23-90   6:49a
    INV      CHN     25344   5-23-90   7:19a
    SETUP    CHN     13312   4-18-90   2:15p
    VIEWINV  CHN     19968   5-23-90   7:18a
    POSTAR   CHN     22784   5-23-90   6:48a
    ADDINV   CHN     16256   5-23-90   6:47a
    VIEWSTAT CHN     18688   5-20-90   6:02p
    REPORTS  CHN     45056   4-18-90   2:13p
    ACCOUNT  CHN     16256   5-23-90   6:46a
    CUST     DTA       128   2-01-90  12:30p
    INV      DTA       256   5-23-90   8:10a
    SALESMEN DTA       128   2-01-90  12:32p
    INVOICE  DTA       256   5-20-90   8:19p
    ACCOUNT  DTA       896   5-20-90   8:19p
    TRANS    DTA       128   2-01-90  12:41p
    STATUS   DTA       128   5-20-90   8:19p
    INV_ST   DTA       128   2-13-90  12:49p
    CUST_ST  DTA       128   2-13-90  12:50p
    SALES_ST DTA       128   2-13-90  12:50p
    CUSTNO   NDX       640   2-01-90  12:30p
    CUSTNAM  NDX       640   2-01-90  12:30p
    INVNO    NDX       640   2-01-90  12:30p
    INVDESC  NDX       640   2-01-90  12:31p
    SALESNO  NDX       640   2-01-90  12:32p
    SALESNAM NDX       640   2-01-90  12:32p
    MR       BAT        24   4-18-90   3:34p
    INSTALL  BAT       264   4-18-90   3:34p
    MR       DOC     40549   4-27-90   2:16p
    READ     ME        608   5-04-90   2:59p
    GO       BAT       924   7-11-90   1:04a
           34 file(s)     343553 bytes
                            1024 bytes free
