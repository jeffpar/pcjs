---
layout: page
title: "PC-SIG Diskette Library (Disk #3140)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3140/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3140"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## OE.DOC

{% raw %}
```






















                                 MAIL ORDER MANAGER
                                    Version 1.02

                             Written By Kim G. Thornton
               (C) Copyright 1992, Micro Methods, All Rights Reserved








          Mail Order Manager is distributed and marketed through SHAREWARE.
          This shareware disk is for evaluation purposes and  gives  you  a
          chance to "try before you buy".  If you find this software useful
          a  registration  fee is requested.  Registered users will receive
          the most recent version of the program (a  serialized  copy  with
          out the shareware messages), a users manual and phone support.

          Thank you for supporting Shareware.



          Kim G. Thornton

















                          * MAIL ORDER MANAGER ORDER FORM *




          COMPANY _______________________________________________________

          NAME __________________________________________________________

          ADDRESS _______________________________________________________

          CITY, STATE & ZIP _____________________________________________

          COUNTRY _______________________________________________________

          PHONE  (_______) ______________________________________________



          MAIL ORDER MANAGER REGISTRATION FEE                    $79.00

          INDIANA RESIDENTS ADD 5%                               ________


          TOTAL                                                  ________



          CIRCLE ONE:

          CHECK          MONEY ORDER         VISA           MASTER CARD


          ACCT# ______________________________________ EXP DATE _________

          SIGNATURE _____________________________________________________



                                  PLEASE RETURN TO:

                                    MICRO METHODS
                                 C/O KIM G. THORNTON
                                    P.O. BOX 2027
                               EVANSVILLE, IN.  47728

                                   (812) 476-0999









          LIMITED WARRANTY
          The program is provided "as is" without warranty of any kind,
          either expressed or implied.  Micro Methods does not warrant that
          the functions contained in the program will meet your
          requirements or that the operations of the program will be
          uninterrupted or error free.  In no event will Micro Methods be
          liable to you for any damages, including any lost profits, lost
          savings or other incidental or consequential damages arising out
          of the use or inability to use such program.
          Any liability of seller or Micro Methods will be limited
          exclusively to software replacement or refund of the purchase
          price.


          INTRODUCTION
          Mail Order Manager is an easy to use order entry program which
          combines invoicing, inventory control, and a salesperson file for
          tracking commissions.  Although designed for use in a mail order
          type business, it can be used in any kind of business requiring
          order entry management.  Some of the many features are, abilities
          to save all orders to disk which can be recalled by invoice
          number, name, phone, or zip code.  An inventory window which
          allows you to search your files by number or description and
          "paste" items to the invoice you are working on.  A mailing list
          which allows you to locate names and place on an invoice and is
          automatically updated when new orders are entered.

          Mail Order Manager will print invoices with address labels, or
          can use preprinted forms if you wish.  Some of the many printed
          reports are inventory lists, items below reorder level, item
          price list, sales personnel list, and customer mailing labels.

          The program has file capacities of 65,000 inventory items, 65,000
          names in the mailing list, and up to 65,000 orders on file.



          HARDWARE REQUIREMENTS
          The following hardware is required to use Mail Order Manager:
          IBM PC, XT, AT or compatible computer with at least 256K of free
          memory.
          MSDOS 2.1 or higher.
          1  5 1/4" or 3 1/2" floppy disk drive.
          10 MEG. or higher hard disk drive.
          80 column dot matrix printer.












          INSTALLING MAIL ORDER MANAGER
          To load Mail Order Manager on to the hard disk, insert the
          program disk into your floppy drive and run INSTALL.COM


          The installation screen will be displayed and you will then
          answer questions on which drive and sub-directory you will
          install the program into.

          The default sub-directory is \OE and the data files have an
          extension of .DTA  If you use \OE as the sub-directory, to backup
          your data files you would use the DOS command:

          BACKUP C:\OE\*.DTA A:

          It is important to back up your data on a regular basis.  For
          more information on backing up and restoring data from your hard
          disk drive, refer to your MSDOS users manual.



          STARTING  MAIL ORDER MANAGER
          To start Mail Order Manager, at the C:> prompt, type OE and press
          [ENTER].  After the program loads The main menu will be
          displayed.

          If this is your first time running Mail Order Manager  you will
          need to initialize the system by selecting option  COMPANY SETUP.
          This is where you enter information such as company name,
          address, and how Mail Order Manager will be configured.


          THE MAIN MENU
          The main menu is the central control area of the program.  It is
          from this area you will access the different modules of Mail
          Order Manager and you will always be returned here after exiting
          any of the modules.  The access the different menu selections,
          move the bar and press [ENTER] at the appropriate line.



















          ORDER ENTRY
          This is where orders are entered, viewed or changed.  You can
          also print orders, mailing labels, and close-out processed
          orders.

          The status of each order (which is displayed at the upper left of
          the screen) can be one of the three:
          1.  ORDER PROCESSED,  which means the inventory has been updated
          and this order is ready to print.
          2.  ORDER PROCESSED and PRINTED,  this order has been printed and
          closed-out.
          3.  ORDER ON HOLD,  which allows you to place a pending order
          which can be processed or changed later.

          The different areas of the order entry module are controlled by
          function keys which are displayed on the bottom line of the
          screen:

          [F2]  Add Orders
          Use this function to enter a new order.  The order entry screen
          is composed of three parts the first is for entering the sold to
          and ship to name addresses, the second part is for entering the
          salesperson, shipped via, terms, FOB, PO#, and tax code.  And the
          third part is for entering the inventory items.    You can easily
          move between each of these areas by pressing the [PgUp] or [PgDn]
          keys.  To move the cursor and edit, use the Up and Down arrow
          keys.  While entering inventory items on the order you can move
          the cursor to an existing item number with the up and down with
          the arrow keys and press the [DEL] key to remove an item. You can
          use the right and left arrow keys to change qty sold or price.
          The [HOME] key will place the cursor at the first item and the
          [END] key will place it at the last item.


          To save a completed order, press the [F10] key to display the
          Save Menu and choose the selection you want for this order,
          PROCESS ORDER (saves the order for batch printing later, updates
          inventory and accounting file),  PROCESS and PRINT ORDER
          (processes order and prints this order now),  HOLD ORDER (places
          order on hold, does not update inventory or accounting).

















          [F3] View Edit
          This function is for viewing or changing existing orders.  You
          can search for an order by invoice#, company, name, zip code, or
          phone number.  Move the cursor with the arrow keys to the line to
          search and enter the information you wish to find.  The [PgUp]
          and [PgDn] keys will display the previous or next order.  To edit
          an order press [F5] and use the [PgUp] and [PgDn] keys to move
          between the different areas of the order and the up and down
          arrow keys to move the cursor and edit.  To save the changes,
          press [F10].


          [F4] Mail List
          Mail Order Manager maintains a mailing list of all your
          customers.  Each time a new order is entered, that name is added
          to the mailing list accept when the name is originally taken from
          the list and placed on the order.  You can also add names to your
          list manually.
          When entering a new order you have the option of using a name
          from your mailing list, this is done by pressing the [F4] key.
          After keying in and finding the name you wish, press the [F9] key
          to "paste" the name on the order.  You can also copy the Sold To
          name and address to the Ship To by pressing the [F9] key again.


          [F5] View Inventory
          While entering items you have the option of viewing the inventory
          file by using the [F5] View Inventory window. This option is used
          for searching inventory items and can also "paste" the high
          lighted item onto the order.  To search for an item press the ?
          (question mark) key. Then enter in all or part of the inventory
          number or the description of the item.  When searching by
          description, the first character must be a ?    I.E. to search
          for WIDGET you could type in ?WID and the closest match would be
          displayed.  To place an item on the order press the [ENTER] key.
          To exit the window with out choosing an item press the [ESC] key.

          [F6] Print Orders
          This is where you will print your orders, mailing labels, and
          perform a close-out on processed orders.  You can also preview or
          list processed orders on the screen.

          Print Processed Orders
          After choosing this selection you will be prompted to press any
          key to begin.  Depending on which invoice option you selected in
          the company setup, the standard and the standard with label will
          print on 8 1/2" X 11" plain paper the NEBS 9040 will print on a
          NEBS preprinted form #9040.  All orders saved as PROCESSED will
          be "batched" printed.








          Print Labels For Processed Orders
          This option will print labels on all PROCESSED orders.  The size
          required is 3 7/8"  X  2 7/8".

          Preview Processed Orders
          This option will display the invoice number and name of each
          PROCESSED order.  You can use the [PgUp] and [PgDn] keys if
          necessary to view all processed orders. To exit this area, press
          the [F1] key.


          Close-out Processed Orders
          This procedure is done after you print your orders.  You will be
          prompted with "Print Summary Y/N? " The summary will print the
          invoice #, date, name, payment type, order total, and it was
          shipped. This list can be used for credit card verification as
          the credit card numbers and expiration dates are also printed on
          the list.
          The purpose of closing out orders is to mark each PROCESSED order
          as PROCESSED and PRINTED.  It is very important to close-out the
          orders after you print, if you skip this process these existing
          processed orders will remain active and will print again with the
          next batch of orders.  If you have printed the orders and try to
          exit the [F6] Print Orders area with out doing a close-out, you
          will be reminded to do the close-out.


          When the orders are closed-out the salesperson file totals and
          commissions will be updated at that time.

          To exit the Print Orders area, press the [F1] key and you will
          return to the Order Entry screen.



          INVENTORY ITEM FILE
          Selection 2 from the main menu will allow you to maintain you
          inventory items.  You can add, change, view and delete items
          here.   Your options are A to add items, C to change items, V to
          view, and D to delete.  [F1] will return you to the main menu.

          Guide lines for entering inventory items:
          The item number can have a maximum of 15 characters and can be
          alpha or numeric.
          The category field can have up to 10 digits and can be alpha or
          numeric.  The category is important as you can print information
          about you inventory sorted by category.
          The description field can have a maximum of 25 characters.
          Use only numbers or decimals in the qty on hand, reorder level,
          cost, retail price, and mark up lines.







          The mark up percent lines will automatically be calculated for
          you using the retail prices.
          If you enter a zero in the cost line, the retail price and mark
          up lines will be by passed and during a transaction , you will be
          prompted to key in the price manually.  This feature could be
          used for misc. sales.
          The vendor line is used for the company name of the vendor or
          supplier of the item.  You can sort and print by vendor on some
          of your printed reports.   The vendor line will also be printed
          on your inventory item lists.

          The Taxable (Y/N) prompt is for identifying taxable and non
          taxable items.  Enter a Y or an N here.

          Last update is the last time the item was received.
          Last sold is the date it was last purchased.
          Total sold, Item Revenue and Item Profit are automatically
          updated at each transaction.  You can enter amounts in here or
          press [ENTER] at each of these lines to leave at zero.
          Item Revenue is the total sales of the item and the Item Profit
          is calculated by the selling price and the item cost.

          To edit any of the lines use to up or down arrow key and re-type
          the line.  To save the information press the [F10] key.

          To return to the Add, Change, View or Delete options, just press
          the [F1] key.

          When you enter C at the options you will be prompted to enter a
          item number to change. Here you would key in the item number or
          an ? and the description to search for and use the page up or
          page down key to display your inventory items.  After finding the
          record you want, you may then used to arrow keys to edit and
          press [F10] to save the changed information.
          To return to the options, press the [F1] key.

          The V option allows you to view any of the items. You can enter
          the item number or ?description to view and page up or page down.

          To delete an item you would enter a D at the options, and enter
          in the item number or ?description to delete.  To delete the item
          displayed press the [Del] (DELETE) key.

          Pressing [F1] at the options will return you to the main menu.













          ADD RECEIVED INVENTORY

          This selection of the main menu is used to add inventory
          purchases to your item file.

            You will be prompted for the inventory item number to update.
          After keying in a valid number, the item description, quantity on
          hand, last update, and current item cost will be displayed.  You
          can then enter the number of items received and at the "OK?"
          prompt answer Y to write the information to the file or enter N
          to re-enter the total amount received. If you enter in an L at
          the "OK?" prompt you can print price labels for that item being
          received.  You can change the items wholesale cost by pressing
          [F3] at the total received prompt. When changing the cost of an
          item, you will be prompted to adjust the mark up percent or
          retail price of the item.

          Pressing [F2] here would erase the line and allow you to start
          over.  [F1] will return you to the main menu.
          After adding received inventory the quantity on hand will be
          adjusted and the last update will be changed to the current date.
          f the item cost was changed then the markup or retail price will
          also be changed.

          The inventory window can also be accessed by pressing the [F5]
          function key  (for more information on this feature see
          Inventory Window in the Order Entry section of this manual).



          SALES PERSONNEL FILE
          Selection 4 from the main menu will allow you to maintain you
          sales personnel file.  You can add, change, view and delete
          salesmen here.


          Guide lines for entering sales personnel:
          The salesman number can have a maximum of 2 characters.
          The name, address, and city state zip lines can have up to 25
          characters. The phone and social security # lines can have 15
          characters.
          The comments line is for misc. information.
          The commission % line is the amount of commission in a percent
          the salesman will receive.
          The commission on line can be G for gross sales made or P for
          profit made on sales.  The commission % is used with this
          information to calculate the salesman's total commission.










          The Micro Register will keep track of a salesman's commission and
          total sales on a current or year-to-date basis.  The totals are
          updated at the time you do a close-out on the orders in the Print
          Orders area of the program.  These totals can be zeroed at any
          time.  This is done by pressing [F10] at the options, entering a
          C for to zero current totals or a Y to zero year-to-date totals.
          Before any totals are you are prompted to "... Verify (Y/N)?".
          Here you would answer with a Y or a N.

          Pressing [F1] will return you to the main menu.


          ACCOUNTING INFORMATION
          The Accounting Information tracks current and year-to-date totals
          on taxable and tax exempt sales, and the 4 tax code totals.
          These totals are updated each time an invoice is processed or
          changed but you must manually zero the totals by pressing the
          [F3] Clear Totals function.  To print the totals, use the [F4]
          Print Totals function.


          PRINT REPORTS
          Print Reports is where you will print all lists of inventory
          items, sales personal lists, etc.

          [F2] will return you to the print reports menu and [F1] will
          return you to the main menu.
          You can stop the printing process on any of the reports by
          pressing the [ESC] key.




          Inventory Item List

          This list, which is sorted by the item numbers, includes current
          information such as quantity on hand, last time sold, and revenue
          produced.  The vendor information line will also be printed.
          You will be prompted for the category to print, here you would
          enter up to a 10 digit category which was used in your inventory
          item file or press [ENTER] to print all categories.  You can
          print this list by vendors if you wish by entering the vendor on
          the next prompt. This vendor name must be present on line  of the
          inventory item file information. To print all vendors, press
          [ENTER] here.  It is suggested that you print by categories as
          this will keep your list shorter and more organized.
          After the list is sorted, it will be sent to the printer.










          Items Below Reorder Level

          This list will print all items that have quantity on hand levels
          below the reorder level.  It is sorted by item number.  You will
          have the option of printing categories or all of the inventory
          items which have fallen below reorder level.  This list can also
          be printed by vendors if you wish.


          Item Price Labels

          The Micro Register will print price labels for your inventory.
          You will be asked for the category.  Here you would enter the
          inventory category you wish to print or press [ENTER] for all
          categories.  The next prompt will be for the number of labels for
          each item.  After the list is sorted (which will be by item
          number), you be prompted for test or alignment labels. Answering
          Y would print the test labels and N would proceed to print the
          price labels.  You can print labels for one item by by pressing
          [F3] at the Enter Category prompt.  After pressing [F3], you must
          enter the item number you wish to print and enter the number of
          labels to print for that particular item.


          Item Price List

          The Item price list consist of the item number, description and
          retail prices.  This is a handy list to place in a book to use as
          a reference.   This list can be printed by category or a complete
          inventory price can be printed.


          Physical Inventory List

          This list is used for taking inventory in your store.  It consist
          of the inventory number, description, quantity on hand, and a
          blank line used to write in the actual inventory physically
          counted. This list may then be used to correct the quantity on
          hand totals for your inventory file.  This list is double spaced
          and may be printed by category.


          Inventory Value & Analysis

          This will give you your current inventory value determined by the
          cost and profits or revenues of each item.  After Selecting   the
          option,  you will be prompted on which type of list.  "C" would
          list combined categories and "I" would list each item
          individually.  You then must chose "P" to print profit amounts or
          "R" for total revenue amounts.







          If you print the list by items you will also be prompted for
          which category to print.  For all categories press [ENTER] at
          this prompt.


          Sales Personnel List

          Prints information on sales personnel, includes current and year-
          to-date sales and commission earned.  You have the option of
          sorting this list by salesman number or name.


          Customer  Mailing Labels

          This Selection will allow you to print mailing labels from your
          customer account file.  A label size of 3 1/2" X 15/16" - 1
          across is required.  Before the labels are printed you must tell
          Mail Order Manager which range (by zip code) to print.  You will
          be prompted with a "FROM" and a "THRU".  "FROM" is the staring
          range and "THRU" would be the end of the range.  If you wish to
          print all names, you would press [ENTER] for "FROM" and [ENTER]
          for "THRU".

          While the labels are printing you can abort the process by
          pressing the [ESC] key.



          COMPANY SETUP
          The company setup is where you enter information about your
          business.  The company name, address, city, state, and zip will
          appear on the  invoices and labels printed.

          You have the option of printing 3 different invoices:
          1) Prints invoice on  8 1/2" X 11" paper.     2) Prints invoice
          on  8 1/2" X 11" paper also prints mailing label on bottom of
          invoice.     3) Prints on a preprinted form available from NEBS
          (form #9040).

          The 4 different tax codes are used when entering an invoice.  You
          can use 1 code on an invoice or a combination of all 4 codes.

          The next invoice number can be changed at any time such as at the
          first of the year.

          The printer codes are used to make your printer print condensed
          or normal type.  Many printers use the EPSON codes which would be
          27  15 for condensed print and 18 for normal or to release
          condensed print.  If these codes do not make your printer print
          on condensed format then refer to your printers owners manual for
          the proper codes and enter then here.






          The password is used to protect the accounting information and
          will also protect the company setup.  If you do not want to use a
          password then leave the password line blank.  To remove or blank
          out an existing password just move the cursor to the password
          line and press [ENTER].


          EXITING MAIL ORDER MANAGER
          Selection EXIT PROGRAM on the main menu will exit the program and
          return you to the C prompt of the computers operating system.
          Even though Mail Order Manager protects your data in the event of
          a power failure, always exit the program properly before shutting
          down your computer.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3140

     Volume in drive A has no label
     Directory of A:\

    OE       COM     20608   4-29-92   5:14p
    INSTALL  COM     22912   5-04-92   8:30p
    ACCOUNT  CHN      6784   4-29-92   5:07p
    INV      CHN     23936   4-29-92   5:07p
    LABELS   CHN     17152   4-29-92   5:07p
    MENU     CHN     11264   9-11-92   2:49p
    ML       CHN     20352   8-28-92  11:42a
    OE       CHN     44928   7-26-92  10:01p
    PRNTORD  CHN     28800   4-29-92   5:10p
    RECINV   CHN     24576   4-29-92   5:12p
    REPORTS  CHN     40960   5-26-92   3:29p
    SALESPRS CHN     20992   4-29-92   5:13p
    SALESRPT CHN     12672   4-29-92   5:14p
    SETUP    CHN      6528   4-29-92   5:14p
    COMP     NDX       640   3-15-92   1:01p
    NAME     NDX       640   3-15-92   1:01p
    INVOICE  NDX       640   3-15-92   1:01p
    INVDATE  NDX       640   3-15-92   1:01p
    INVSTAT  NDX       640   3-15-92   1:01p
    PHONE    NDX       640   3-15-92   1:01p
    ORDZIP   NDX       640   3-15-92   1:01p
    MLCOMP   NDX       640   3-15-92   1:02p
    MLNAME   NDX       640   3-15-92   1:02p
    MLZIP    NDX       640   3-15-92   1:02p
    INVNO    NDX       640   3-15-92   1:04p
    INVDESC  NDX       640   3-15-92   1:04p
    SALESNO  NDX       640   3-15-92   1:04p
    SALESNAM NDX       640   3-15-92   1:04p
    MLPHONE  NDX       640   4-26-92   9:07p
    INV      DTA       256   3-15-92   1:04p
    SALESMEN DTA       128   3-15-92   1:04p
    ML       DTA       128   9-01-91   9:35p
    ORDERS   DTA       128   5-04-92  11:43a
    DEFAULTS DTA       640   8-29-92  10:18p
    TRANS    DTA       128   9-01-91   9:40p
    ACCOUNT  DTA       384   4-26-92   4:53p
    OE       DOC     26852   5-04-92   9:15p
    READ     ME        439   5-04-92   8:27p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847  12-04-92   4:51p
           40 file(s)     342025 bytes
                            1024 bytes free
