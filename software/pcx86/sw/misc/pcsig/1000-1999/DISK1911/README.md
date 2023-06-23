---
layout: page
title: "PC-SIG Diskette Library (Disk #1911)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1911/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1911"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BANKBOOK"

    A truly easy to use checkbook manager -- really intuitive. BANKBOOK was
    designed to make the management of your home finances easy and automated
    in a way that doesn't require an accountant to understand.
    
    BANKBOOK makes the presentation of your home finances look just like
    your checkbook entries, and adds automated support for bill payment and
    budget analysis.
    
    ~ Print checks on your PC printer.
    
    ~ Enter checks you have handwritten.
    
    ~ Enter ATM (automated teller) and EFT (electronic funds transfer)
    transactions.
    
    ~ Enter deposits from a variety of sources.
    
    ~ Go back in time to enter checks you wrote over the past several
    months to set up a history of spending trends.
    
    ~ Define a list of bills that you pay each month so they will be
    printed automatically on the proper date.
    
    ~ Associate each check with a spending category so you can divide your
    expenses into meaningful groups for later analysis.
    
    ~ Print reports and view displays of spending trends in various ways to
    see YTD spending patterns or patterns over other periods of time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BB.DOC

{% raw %}
```

                              ABOUT BANKBOOK


  BankBook  was  designed  to  make the management of your home finances
  easy,  understandable, and automated in a way that does not require an
  accountant to understand.

  The  intent  of  BankBook  is  to  make  the presentation of your home
  finances  "look"  just  like they do using your checkbook entries, and
  to  add  to  that  the  automated support to make the payment of bills
  easier and the analysis of your budget possible.

  With this program, you can:

          o   Print checks on your PC printer
          o   Enter checks you have handwritten
          o   Enter  ATM  (automated  teller)  and EFT (electronic funds
              transfer) transactions
          o   Enter deposits from a variety of sources
          o   Balance your checkbook in a matter of minutes
          o   Go  back  in  time to enter checks you wrote over the past
              several months to set up a "history" of spending trends
          o   Define  a  list  of  bills that you pay each month so they
              will be printed automatically on the proper date
          o   Associate  each  check with a spending category so you can
              divide  your  expenses  into  meaningful  groups for later
              analysis
          o   Print  reports  and  view  displays  of spending trends in
              various  ways  to  see  YTD  spending patterns or patterns
              over other periods of time


                           ABOUT PC REQUIREMENTS

  BankBook  runs on IBM PC, XT, AT machines and compatibles. It requires
  512K  of  memory.    The program works with color (either CGA, EGA, or
  VGA) monitors or monochrome monitors.

  Printers  supported  are  dot-matrix  and letter-quality printers with
  either pin-feed or tractor feed paper advance mechanisms.


                             RUNNING BANKBOOK

  BankBook  may  be  run  from  either  a floppy diskette or a hard disk
  drive  (or a virtual disk drive).  To run the program, select the disk
  drive  and directory into which you have installed BankBook, and enter
  the DOS command:

          C> BB

  The  program  assumes you have a color monitor; if not (or if you want
  to  do  a  screen  print  of the graphics images on your IBM graphics-
  compatible  printer), you can improve the display contrast by entering












  the run command with the monochrome flag as shown below:

          C> BB MONO

  After  you  run BankBook with this flag once, it remembers the type of
  monitor  you  have  and  you  don't have to type in the MONO flag with
  subsequent  runs.    If  you want to revert back to the use of a color
  monitor, enter the run command:

          C> BB COLOR

  Again,  the  program  remembers  the monitor type so you don't have to
  reenter the COLOR parameter for future runs.


                            PROGRAM CONVENTIONS

  BankBook conforms to the following operating standards:

  MENUS

  Controlling  the  functions  and screens of BankBook is done through a
  series  of menu screens.  The menus are controlled using the right and
  left  arrow  keys  on your PC keyboard.  Move the highlighted menu op-
  tion  right  or left with the arrow keys and press <ENTER> to invoke a
  menu  option.   Or, you can just press the first letter of the desired
  menu  option  and  invoke the desired function without using the arrow
  keys.    The  HOME key positions the menu to the first option; the END
  key  positions the menu to the last option.  The <ESC> key lets you to
  exit  from  any menu to the prior menu; if in the main menu, the <ESC>
  key stops BankBook and exits back to DOS.

  FUNCTION KEYS

  BankBook  recognizes only function key F1.  To complete a transaction,
  in  most  cases,  you  will be instructed by a highlighted message bar
  across the bottom of the screen to press F1 .

  <ESC> KEY

  The  <ESC>  key  is  used  to abort a transaction or function in prog-
  ress.   If pressed while in a menu, BankBook will take you back to the
  prior  menu.   If used in a transaction other than as described below,
  BankBook  will  terminate the transaction.  If used in a WriteCheck or
  Deposit  transaction  at the point where you are identifying the payee
  name  or the source of funds, the <ESC> key will exit the list of pre-
  defined  names  and allow you to enter a new or different name for the
  check  or  deposit.    In this case, pressing <ESC> a second time will
  abort the transaction.

  ARROW KEYS

  The  UP  ARROW,  DOWN ARROW, LEFT ARROW, and RIGHT ARROW keys are used
  to  control  scrolling  display  screens  and to choose options from a
  predefined list of choices.











  INTERACTIVE HELP

  Across  the  bottom  of  the  screen, a highlighted bar will appear on
  most  screens  to  direct  you  when  a specific response is expected.
  Other  times,  a  pop-up  window will direct you or query you for what
  action the program should take next.

  YES/NO RESPONSES

  At  some  points  in  BankBook processing, the program will ask you to
  make  a  decision  by entering a "YES/NO" choice.  Any time a question
  is  posed by the program that asks for a (Yes/No) or (Y/N) answer, the
  only  acceptable  entry is a "Y" or an "N", and the program will go no
  further until you reply one or the other.


                         ABOUT MILTON MILQUETOAST

  BankBook  comes already set up with the finances of Milton Milquetoast
  so  you  can see how he uses BankBook and get ideas on how you can set
  up your own finances.

  Milton has income from a variety of sources:

      1.  He  is employed by Ed's Widget Company and receives a paycheck
          on the 1st and 15th of each month
      2.  Years  ago  he  purchased a house which he now rents out, col-
          lecting the rent money on the first of each month
      3.  He  receives  a monthly stipend from the government as a World
          War I veteran
      4.  He gets a check from an annuity each month.

  Milton's monthly expenses fall into three categories:

      1.  Fixed  monthly  expenses such as his Ferrari car payment, home
          mortgage  payment,  and  costs  that  DON'T vary from month to
          month;
      2.  Monthly  expenses  which  he  pays through the mail in amounts
          that DO vary from month to month;
      3.  Checks  he  writes  away  from home at irregular times and for
          varying amounts.

  The way Milton incorporates his finances into BankBook is:

      1.  Checks  he  writes from the first category above he defines to
          BankBook  using  "DefineAuto".  Then, on the first and 15th of
          each  month,  he  tells  BankBook to automatically print these
          checks on the PC printer.
      2.  For  checks  he  pays  in  the  second  category,  he uses the
          WriteCheck  option of BankBook and fills in the dollar amount,
          printing the checks on his PC printer.
      3.  Because  Milton  finds  it  awkward to carry his IBM AT to the
          grocery  store,  he  "hand  writes"  the checks he uses to pay
          grocery  bills or payments for hardware store purchases.  When












          he  gets  home,  he  saves  the  cash  register receipt on the
          kitchen  refrigerator  and  later enters the check amount into
          BankBook  using  the  WriteCheck  function  the  next  time he
          cranks up his PC.

  Milton  only  uses  the continuous form checks for printing on the PC;
  when  he  manually  writes  checks, he uses the checks he got from his
  bank.    BankBook  allows  him  to keep track of both types of checks,
  even  though  the  numbering is not consecutive. He finds that most of
  the  checks  he writes he prints at home, so the supply of checks from
  the  bank  which  he  uses  when away from home lasts much longer.  He
  uses  the  deposit slips from his personal check book to handle making
  account deposits.





















































                         ABOUT ATLANTA IDEAS, INC.

  Atlanta  Ideas  is  a  tiny company nestled in the suburbs of Atlanta,
  Georgia.    We  slave  away each day to create little products to make
  life  easier  for  the  beleaguered middle-class citizen, although you
  may  also  use  BankBook if you are lucky enough to be a member of the
  "upper crust".

  This  shareware  is  a  small  part  of a package we market to support
  flying clubs and individual aircraft ownership.

  Our  philosophy is that you shouldn't have to pay an arm and a leg for
  quality  software.  The shareware copy of BankBook is free (our lowest
  cost  product  on  the market today).  The more complete BankBook copy
  is  $15,  which  covers  the cost of materials, handling, and shipping
  (our second lowest cost product on the market today).

  If  you  like  the  program  and  find  it makes your beleaguered life
  easier,  then  we have succeeded.  To make your life easier still, you
  should  order  the  checks we provide so you can print them on your PC
  printer.   That would make OUR beleaguered lives easier, since we make
  a small commission on the checks you order.


                               ABOUT CHECKS

  Producing  continuous form checks for use with the BankBook program is
  a  manually  labor-intensive  process.   The name and address informa-
  tion,  your  bank  account information, the starting sequential number
  for  your check order, and the Federal Reserve code for your bank have
  to be entered into the systems controlling the printing presses.

  Because  of  the  accuracy  required  in producing financial documents
  such  as  check  forms,  your  check order will be hand verified by no
  fewer  than  4  separate  individuals  before  the finished checks are
  mailed to you.

  The  checks themselves are printed with a special magnetic ink so that
  the  MICR  (Magnetic Ink Character Recognition) equipment used by your
  bank to process your checks can identify your account number.

  The  checks are printed for Atlanta Ideas by the J. William Company, a
  division  of  the  John  Harland  Company.  Assistance with your check
  order  is  available from John Harland at a toll-free telephone number
  which  is  displayed  in  your  BankBook software under the OrderCheck
  menu option.




















                            INSTALLING BANKBOOK

  To  install  BankBook,  all you have to do is use the DOS COPY command
  to  duplicate the BB.EXE file from wherever you got it to wherever you
  want it to go. If you received the program on a diskette, then enter:

          C> COPY A:BB.EXE

  to  copy the program to your hard drive. You may also choose to set up
  a  directory  and  keep  the BankBook program and its associated files
  segregated that way.

  Because  BankBook  comes delivered with Milton Milquetoast's financial
  data  already set up, you need to either not copy the following files,
  or you need to delete them after you have reviewed their contents:

          FINANCE
          BANKBOOK.CFG
          AUTO.CFG


                  PLANNING HOW YOU WILL SET UP YOUR FILES

  After  you  have  copied the BB.EXE file to your PC, we suggest you go
  through  the  following  steps  to  customize  the  files to suit your
  needs.

      1.  Spend  a  few  minutes  going through your checkbook and write
          down  a  list of companies or people that you frequently write
          checks  to, along with the amounts.  This list will be used to
          build  a  file  of  "PAYEE NAMES" so you don't have to type in
          the  full  name  each time you write a check.  BankBook allows
          you to define up to 30 payee names.

      2.  From  this  list, identify those that recur on a regular basis
          for  the  same  dollar  amount, such as a monthly car payment,
          rent  or  mortgage payment, alimony or child support payments,
          a  utility  such  as cable TV that has a fixed monthly charge,
          or  club  dues  or  service charges that accrue monthly.  This
          list  will  be  used  to  build  a  file of "PAYEE NAMES" that
          BankBook  will  automatically  print  checks  for so you don't
          have  to enter anything at all.  BankBook allows you to define
          up  to  18 payee names to be automatically paid on a recurring
          basis.






















      3.  Decide  on a list of "CATEGORIES" of spending that you want to
          keep  track  of.    A  category of expense is a way to collect
          common  items  into meaningful groups.  For example, you prob-
          ably  pay  an  electric  bill, a water bill, a phone bill, and
          possibly  a  natural gas bill each month.  BankBook will track
          each  of  these separately if you desire, but it will probably
          be  more  convenient  to  lump  them all together for analysis
          purposes  into  a  category  called  "UTILITIES".  In the same
          way,  gasoline  bills,  auto  insurance, and auto repair bills
          can  probably  be  grouped  into  an "AUTO EXPENSES" category.
          BankBook  allows  you  to define and track up to 20 categories
          of expenses.

      4.  Having  defined  the  lists above, enter the data according to
          the directions which follow.


                   TAILORING BANKBOOK TO SUIT YOUR NEEDS

  There  are only a few steps you need to complete to set up BankBook to
  support  your  financial  processing  and  analysis requirements.  The
  checklist  printed  below  steps  you  through  the "tailoring" of the
  software so it will work for you.

  1.  Delete any unnecessary files
          If  you  haven't  already  done  so, delete or erase the files
          "FINANCE",   "BANKBOOK.CFG",   and  "AUTO.CFG"  so  that  YOUR
          financial  data  will  be  the only data in these files.  When
          BankBook  first  starts  up,  it detects any missing files and
          creates  them,  so  these  files  will reappear after you have
          purged them and then run BankBook.

  2.  Run BankBook
          Enter the DOS command:        C> BB

          If  you have a monochrome monitor, you may choose to enter the
          monochrome        flag        for       improved       display
          contrast:                     C> BB MONO

  3.  Press any key
          The  initial  run of BankBook, or any time thereafter when the
          bank  balance is zero will cause the BankBook billboard screen
          to  display.   Press <ENTER> to resume processing and the Main
          Menu will be displayed.

  4.  Choose OPTIONS menu selection
          Press  the  letter  "O"  or  use  the  arrow  keys to move the
          highlight  bar over the menu item labelled "Options" and press
          <ENTER>.  This will cause the options submenu to appear.

  5.  Choose NAME menu option
          Enter  your  name and address and optionally your phone number
          the  way  you  want  it  to  appear  on  your  printed checks.
          BankBook  does  not  actually  print  this  information on the












          check  itself,  but  will  use  this  data  to  format  report
          headers.  Press F1 when you are satisfied with your entry.

  6.  Choose INCOME menu option
          Enter  here a list of places from which you receive money that
          you  deposit  to  your bank account.  For a joint account, you
          probably  will  list  both  your  and your spouse's employers.
          The  list  can  be in any order and can be changed at any time
          in  the  future,  if  desired.    If you have fewer names than
          there  are  lines  available,  that's  okay.  BankBook formats
          empty  lines  with  a series of dots; it will be easier if you
          leave  the  dots  in  place on blank lines, although it is not
          required.  Press F1 when you are satisfied with your entries.

  7.  Choose PAYMENTS menu option
          Enter  here  the  complete  list  of PAYEE NAMES you developed
          when  you examined your account payment history.  The list can
          be  in  any  order and you can change the order of payee names
          at  any  time  in the future.  If you have fewer than 30 payee
          names  to  enter, that's okay.  Again, leave the dots in place
          in  the  entries  for  which you have no names.  Press F1 when
          you are done.

  8.  Choose CATEGORY menu option
          Enter  here the list of categories you developed earlier while
          examining  your  account  payment  history.  If you have fewer
          than 20 entries, that is acceptable.

          NOTE:   You  will  not  want  to  rearrange the order of these
                  entries  once  you begin inputting check payment data,
                  otherwise  the  analysis displays will return mislead-
                  ing information about payments by expense categories

          After  you  have  entered  the  category data, press the RIGHT
          ARROW  key  to  allow you to tie the payee names to the proper
          categories.    A  window of predefined payee names will pop-up
          and  you must then scroll through this list of names and enter
          the  number  associated  with the expense category you want to
          track  for  this  payee  name.    For example, if the category
          "UTILITIES"  is  the  fourth  entry  in  the  list of category
          names,  then  you will want to enter the digit "4" in front of
          the  electric  company,  gas company, water company, and phone
          company  payee  names.    Press F1 when you are satisfied with
          your entries.

  9.  Press <ESC> to exit to the main menu.

  10. Choose the Checks main menu option

  11. Choose DefineAuto menu option
          This  window  allows  you  to define the day of the month, the
          payee  name,  and the amount of each check you write for those
          cases  where the amount doesn't vary from month to month.  For













          lines  of  data  where  the  day  of the month is greater than
          zero,  you can view the predefined vendor names using the DOWN
          ARROW  and  UP ARROW keys.  Press <ENTER> when the proper name
          is  displayed.    Press F1 when you have identified all checks
          to be written automatically.

  12. Press <ESC> repeatedly to exit back to DOS.
          You  now  have  "tailored"  BankBook to fit your requirements.
          You  can  begin  entering  checks written from this point for-
          ward,  or  if  you  want  to  establish a history of financial
          transactions,  you  can  enter checks from your check register
          that you have written in the past.


                            BANKBOOK FUNCTIONS

  The  main  menu  of BankBook provides you with access to all the major
  functions  of  the  program.  The list below contains each of the main
  menu options and the functions they invoke:

      1.  VIEW     -  Displays the checkbook register
      2.  CHECKS   -  Write     checks,     enter    special    checking
                      transactions,   define   checks   to   be  written
                      automatically, print a check order form
      3.  DEPOSIT  -  Make deposits to your account
      4.  BALANCE  -  Reconcile your checkbook with the bank
      5.  ANALYSIS -  Print  reports and show displays that analyze your
                      personal finances
      6.  OPTIONS  -  Define  your  income  sources, people or companies
                      to   whom   you   routinely   write   checks,  and
                      categories  of  spending  to  allow you to analyze
                      your finances

  Each  of  these  functions  is  described  in detail on the pages that
  follow.































                                   VIEW

  This  main  menu  option allows you to look at the check register.  It
  "opens  up"  to  the  last  page,  just  like your check book register
  should  do;  you can then scroll forwards and backwards using the keys
  defined  on  the  screen.    In addition, you can scroll the display a
  single line at a time using the DOWN ARROW and UP ARROW keys.

  Entries  in  your  checkbook register are identified by date and check
  number.    If  the  entry is for something other than a written check,
  the following codes will appear:

              DPST - for deposits to your account
              SVC. - for banking service charges
              INT. - for interest payments to your account
              AUTO - for automated teller (ATM) withdrawals
              ADJ. - for adjustments to your account

  Checks  which  have  been  voided  will  appear  with the nomenclature
  "CHECK VOIDED" in the description field.

  If  you  have  over  400 entries in your check register file, only the
  last  400  items  will  be  loaded  into  memory  for  display.  Those
  transactions  prior  to  the first check displayed in the VIEW display
  when  the  HOME  key is pressed can be accessed using one of the print
  report options.


                                  CHECKS

  This  main menu option invokes the check writing submenu.  The options
  accessible from this submenu are described below.

                                CHANGE DATE

  This  menu option pops up a window into which you can enter a new date
  to  be  used  for writing checks and making deposits.  This allows you
  to  enter  checks  you have written in the past or to set the date for
  checks  you  want  to  write  today but mail later this week.  This is
  also  useful  to  force the AutoWrite check feature to kick off as ex-
  plained later.

  Another  technique for changing the date is to simply type in the date
  on  either the check or deposit transactions. If you enter a date that
  is  higher than the last date used by BankBook, the program will adopt
  the higher date as the new "current" date.

                                WRITE CHECK

  This  menu  displays  a  check on the screen for you to enter the ele-
  ments  you  normally  write  on  the face of a check.  You can use the
  keyboard  arrow  keys  to move between the data items, changing values
  until  you  are  satisfied.    Pressing  F1 will cause the check to be













  accepted  by  BankBook  for entry in the checkbook register.  In addi-
  tion,  you  will  prompted to enter a spending category for the check,
  if  not  already  known by the program.  You will be prompted to indi-
  cate  whether the check is to be printed; and, if so, whether you need
  help in aligning the checks in the printer.

  CK NO   BankBook  initializes  this  item to the next sequential check
          number;  if  this is not the correct number for the check, you
          can  change  it.  The check number is not printed on the check
          by BankBook, but shows up in the checkbook register.

  DATE    BankBook  inserts  the current date. You can change this date,
          if desired.

  TO:     BankBook  presents  you  with a list of the 30 payee names you
          have identified using the Options menu.

          To select from the list you may:

          1.  Use  the arrow keys to position the highlight bar over the
              desired payee name and press <ENTER>.

          2.  Press  the  first  letter  of the desired payee name.  The
              highlight  bar  will move to the next payee name beginning
              with  that  letter.  If multiple names begin with the same
              letter,  press  the  letter again to select the next payee
              name.    When  the  desired  name  is  highlighted,  press
              <ENTER>.

          3.  Pressing  the  <HOME>  key  positions the highlight bar to
              the  top  of  the  list; the <END> key positions the high-
              light to the last entry in the list.

              If  the  name  of  the person or company you want to write
              the  check to is not included in the predefined payee name
              list,  press  <ESC>  once to enter the desired name on the
              check.    To  escape out of the check writing transaction,
              without writing a check, press <ESC> again.

  AMOUNT  Enter  the  amount  of the check.  You can write checks in the
          range of $.01 to $99,999.99.

  MEMO    Enter  any  special  identifying  data  here  you  want  to be
          printed  on  the  check.    To  keep  the file size down, this
          information  is  not  retained  by BankBook, so unless you are
          printing  the  check  on  your  PC  printer, you can omit this
          entry.



















                                  SPECIAL

  This  function  allows  you  to  enter banking transactions other than
  simple  checks  and  deposits.  The functions you can do are described
  below:

  1.  ADJUSTMENTS You  can  use  this  transaction  to  adjust your bank
                  balance  either  plus  or  minus  a needed amount.  If
                  your  balance is $100 and you need to correct it by 10
                  cents  to  $99.90,  then enter an adjustment amount of
                  $.10.  If  your  balance  needs to be $100.10, enter a
                  transaction  amount of $-.10. The minus sign is needed
                  to make the transaction into a credit amount.

  2.  INTEREST    If  you have an interest-bearing checking account, use
                  this  transaction  to  indicate  the interest payments
                  made to your account by the bank.

  3.  SVC CHARGE  This  transaction  allows  you  to  enter  any  one of
                  several  banking service charges, from monthly service
                  fees,  checking  overdraft charges, ATM usage charges,
                  minimum  balance  charges,  check purchase charges, or
                  others unique to your bank.

  4.  EFT DEBIT   Increasingly  common  today are electronic debits that
                  the  banks  use to withdraw money from your account to
                  pay  for  installment loans without the need for writ-
                  ing  a check. This transaction allows you to enter the
                  EFT debits made to your account.

  5.  ATM         Withdrawals  of  funds using automated teller machines
                  can be entered using this code.

  6.  SET BAL TO: This  special  transaction allows you to force balance
                  your account to whatever value (+ or -) you enter.

  7.  VOID CHECK  The  VOID A CHECK transaction reverses the effect of a
                  debit  to  your account from a check you have written.
                  You  just  enter the check number and BankBook locates
                  the  check  in  your check journal and "backs out" the
                  debit,  even  if  it  occurred  many  months ago. Each
                  journal  entry since that check was written is updated
                  to reflect the "new" account balance.

  For  each  of  the  transactions described above, BankBook initializes
  the  "description"  field  which  shows  up in your checkbook register
  with  a  generic  description  of  the  transaction.   You may want to
  change  or  elaborate on the description when you process the transac-
  tion to make it more meaningful for your purposes.

















                            AUTO WRITE A CHECK

  The  AutoWrite  menu  option  may be invoked at any time.  It examines
  the  current  date  and determines if you have defined any checks that
  get  written  on  this  day  of  the month.  If there are checks to be
  written,  the  AutoWrite  transaction  will  "set up" BankBook to both
  make  a  journal  entry  in your checkbook for the check and print the
  check on your PC printer.

  You  first  will  be  prompted  to  enter  the next check number to be
  printed.    BankBook  will  initialize  this  number  to  be  the next
  sequential  check after the last one written.  If the number displayed
  is  correct,  just press <ENTER>, otherwise type in the desired number
  of the next check.

  If  a  check  is found which is due to be printed today, BankBook will
  "build"  an  image of that check and display it for you on the screen.
  You  will  first be asked if this check should be entered in the check
  register; answer "Y" or "N".

  Next  you  will  be asked if the check should be printed; again answer
  "Y"  or  "N" as appropriate.  After this check has been properly proc-
  essed  by  BankBook,  it  will  seek  out the next check defined to be
  printed on this day of the month, and the process will repeat.

  The  ChangeDate  transaction  is  useful in conjunction with this fea-
  ture.    Assume that you have defined your home mortgage payment to be
  due  on  the  1st of each month.  Assume that today is the 27th of the
  current  month  and  you are paying your bills for the next month.  If
  the  PC  date  remains at the 27th, the home mortgage payment will not
  be  printed  in  this session; use the ChangeDate transaction to reset
  the  program  date  to  the 1st, then invoke the AutoWrite transaction
  and the desired check will be produced.

































                                DEFINE AUTO

  The  DefineAuto  menu  selection  brings  up  a data entry screen into
  which  you  can  enter  up  to  18  checks  which are to be written by
  BankBook  on  the  appointed  day  of  the  month  using the AutoWrite
  transaction.

  Enter  the  day of the month on which you want a check to be produced.
  BankBook  will next allow you to scroll through a menu of the 30 payee
  names  you  have defined to the program. You can control the scrolling
  display  with  the  UP/DOWN  ARROW  keys.  When the desired payee name
  shows  in  the  window,  press  <ENTER>  and BankBook will move to the
  amount  field  where  you then enter the dollar amount the check is to
  be written for each month.

  This  feature  of  BankBook  is  intended only for bills you pay which
  come  due on the same date each month and for the same amount, such as
  rent  payments,  home mortgages, cable TV fees, car payments, or other
  recurring  bills. If you budget to make payments on a revolving charge
  account  in a fixed amount each month, even though the amount you act-
  ually  owe  may vary, this feature can be used to print the check each
  month.


                               ORDER CHECKS

  This  transaction  steps  you  through the process of printing a check
  order  form  for computer checks suitable for use with BankBook.  When
  you  order  your computer checks, be sure to call the toll-free number
  listed  on the printed form to verify current check costs.  If you are
  ordering  checks,  be  sure  also  to include with your order a sample
  check  (VOIDED)  or  deposit  slip  that  has your bank account number
  encoded along the bottom of the check.


                                  DEPOSIT

  Checking  account  deposits are handled through this main menu option.
  Deposits  to  your  account  show  up  on the check register as a DPST
  transaction.

  To  complete  the  deposit,  enter the date.  BankBook initializes the
  date  field  with  the  current  program date which you can change, if
  needed.

  Next,  identify  the SOURCE of the money being deposited.  You will be
  presented  with a menu of income sources you defined using the OPTIONS
  main  menu  selection.  Use the arrow keys to scroll up and down until
  the  desired  source  of money is highlighted; then press <ENTER>.  If
  the  source  of funds is not listed in the menu (maybe you won $100 in
  a  beauty contest), press <ESC> and BankBook will allow you to type in
  the name of some other source of funds.

  Then  enter  the  deposit amount.  When you are satisfied with all the
  data you have entered, press <F1> to complete the transaction.











  If  you  want  to abort the deposit at any stage, just press <ESC> and
  you  will  be returned to the main menu with no effect on your account
  balance.


                                  BALANCE

  The  BALANCE transaction allows you an automated way to reconcile your
  bank  account  with the statement provided you by the bank.  There are
  three  stages  to the act of balancing your account and these are sup-
  ported in full by BankBook.

  1.  If  there  are  any  credits to your account such as interest pay-
      ments,  dividends  deposited  via EFT transactions, or adjustments
      made  by  the  bank  to  correct bank errors, these would not have
      been  entered  in  your  checkbook  register, and would not be re-
      flected  in  what  you think is your current balance.  By the same
      token,  bank  service  charges, check fees or other debits to your
      account  assessed  by  your bank would not be in your check regis-
      ter,  either,  since  you  would not know the amount until you get
      your monthly statement.

      Therefore,  the  first  step in balancing your account is to enter
      all  credits  and  debits  posted  to  your  account which are not
      already  in  your checkbook.  The BALANCE transaction first "pops-
      up"  a  window  asking  you  if there are any such transactions to
      enter  in  your  checkbook  before  balancing  begins ... you must
      answer  "Y"  or  "N".  If your answer is "Y", BankBook invokes the
      "SPECIAL"  transaction  screen,  into which you can enter whatever
      adjustments  or  service  charges  you need.  When all entries are
      made,  press  <ESC>  to  exit  the SPECIAL transaction; then, bal-
      ancing continues.

  2.  Stage  2  of the balancing is to check off all the checks or other
      debits  to  your  account  returned  by the bank with your monthly
      statement.   To do this, just enter an "X" on the line showing the
      check,  just  as  you  would  enter a check mark in your checkbook
      register.    To abort the transaction during this phase, press the
      <ESC> key.

  3.  Stage  3  is where you identify all deposits received and recorded
      by  the bank.  Here, you put an "X" on the affected deposits. Here
      again, to abort the transaction, press <ESC>.

  After  all  checks and deposits have been processed, BankBook displays
  what  the  bank statement balance SHOULD be based on your answers.  If
  the  balances  agree,  answer  "Y" to the question posed, else enter a
  "N"  and  all  "X"  marks you made will be removed from the file as if
  you  had  not  made  them.  Then you can go examine the bank statement
  and your checkbook to try to resolve why the balances don't agree.

  NOTE:   If  you  DO  answer  "N"  (the balances do not agree), at some
          time  in  the future you will, no doubt, try to balance again.
          Please  observe  that  if you entered any bank service charges
          or  interest payments using the SPECIAL transaction, they have
          already  been  "X"ed  by  BankBook, so do not re-enter them on
          the  next BALANCE attempt, or you will be double-posting these
          amounts and create more balancing problems for yourself.








                                 ANALYSIS

  The  set  of  reports and display screens provided by BankBook to give
  you  insights  into  your  financial history and budget are invoked by
  choosing  this  option  on  the  main  menu.  The shareware version of
  BankBook  provides  you  with three menu entries; others are available
  with the $15 version, if purchased.

  1.  JOURNAL     This  is  a sequential listing of your checkbook jour-
                  nal.    You  can  limit the amount of paper printed by
                  specifying  a  beginning and ending date for the jour-
                  nal  print.  If you have more than 400 entries in your
                  checkbook  journal,  this  is the only way you can see
                  those  entries  earlier  than  the first one displayed
                  when you press <HOME> on the VIEW display screen.

  2.  ANALYSIS    This  is a single-page printout showing an analysis of
                  where  your  money  is coming from (sources of income)
                  and  where  it  is  being  spent.  You can control the
                  date  range  of  this  report,  so  you can produce an
                  analysis  for  a  single  month, a YTD analysis, or an
                  analysis  that covers the entire period from the first
                  journal entry to the current date.

  3.  CATEGORY    This  option  displays  a  screen that graphically de-
                  picts  the  percentage  of  your  spending broken down
                  according   to  the  categories  you  defined  in  the
                  OPTIONS  menu.  You can control the date range of this
                  display  and  use  it  to  compare  expenditures  on a
                  monthly  basis,  use it for YTD analysis, or any other
                  time period for which data exists in your checkbook.

                  On  a  color  monitor, the bars representing costs per
                  category  are  red,  white  and  blue  to provide easy
                  contrast  between  categories.   However, these colors
                  will  not be reproduced on a printer if you do a print
                  screen.   You can, however, print this graphic display
                  on  a  dot matrix printer if you run BankBook with the
                  MONO  option  (i.e.    C>  BB  MONO ).  After you have
                  printed  the  screen  image,  if you want to revert to
                  color  again,  you must run the program with the COLOR
                  option (i.e.  C> BB COLOR ).


                                  OPTIONS

  The  Options  menu  entry allows you to customize the BankBook program
  so the reports and displays accurately reflect your expenses.

  NAME        Enter  here  your  name and address; this is cosmetic only
              and  is used to provide headings for the financial reports
              and  the screen display check image. Your name and address
              must be printed on the checks themselves by a printer.













  INCOME      You  can  define  up to 10 sources of income.  These names
              are  used  to  build  a  list so that each time you make a
              deposit,  you  can  indicate  where  the  money came from.
              This data is used in the financial analysis reports.

  PAYMENTS    This  option  allows you to enter up to 30 names of people
              or  companies to whom you write checks on a routine basis.
              If  you  have  fewer  than  30 names to enter here, that's
              okay,  you  can  always  add names later on.  You probably
              want  to  limit the names you do enter here to those names
              you  use  frequently  or  expect  to use frequently in the
              future.    You can write checks to people other than those
              in  this  list  by  pressing  the  <ESC> key when asked to
              choose a name while writing a check.

  CATEGORY    You  can  define up to 20 groups of expenses that you want
              BankBook  to  track for you.  Whereas you can get tracking
              on  payments  you  make to the electric power company, the
              water  company,  the  natural  gas company, the phone com-
              pany,  and  other  public  service companies, you also can
              define  each  of  these companies as belonging to a common
              "category",  say  "UTILITIES".  This provides you with in-
              teresting  insights  into  how  you  spend your money in a
              more  generic  way  than adding up the checks you write to
              each specific payee by name.

              You  will  want  to  give  careful thought to the CATEGORY
              names  you decide to use, because once you define them and
              start  entering  check  data, you can't change them.  Some
              suggestions  you  may want to consider are categories such
              as:

              RENT PAYMENTS       MORTGAGE PAYMENTS    CAR PAYMENTS
              FOOD                UTILITIES            MEDICAL
              INSURANCE           CHARITIES            ENTERTAINMENT
              AUTO OPERATING      CHURCH DONATIONS     CREDIT CARDS
              CLOTHING            CHILDCARE EXPENSES   ALIMONY
              HOBBIES             VACATION             CHRISTMAS
              HOME MAINTENANCE    AUTO MAINTENANCE     BUSINESS EXPENSE

              You  will, no doubt, derive categories more useful to you.
              If  you have fewer than 20 entries defined, you can always
              add  more  later as you see the need; you cannot, however,
              change  the  "meanings" of categories you have already de-
              fined,  otherwise  the  analysis  reports  will yield mis-
              leading financial information.


                           DEFINE PRINTER CODES

  Define  your  printer  as  IBM-graphics  compatible.   To complete the
  three  printer  control  codes,  you may need to refer to your printer
  owner's  manual.    Common  printer codes are:  COMPRESSED PRINT = 15,
  NORMAL  PRINT  =  18,  DOUBLE-WIDE  PRINT  = 14.  If you are unable to
  determine  the  correct settings for your printer type, just set these
  codes to "00" and BankBook will work just fine.










                                  AboutBB

  The  About BankBook display screen tells you what great guys we are to
  give  you  this software free.  Share BankBook with your friends.  The
  shareware  version of BankBook is a complete package for managing your
  checking account, and you may never have a need for anything more.

  Of  course,  we are hoping you will like the product enough to want to
  upgrade  to  the more complete version which we sell for $15 (shipping
  and  handling  included!).   Here's a summary of the shareware version
  and  its  purchased  counterpart.  The stars indicate features present
  only in the purchased program.

      1.  Constant screen summary of checking account information
  *-      Year-to-date checks, deposits, and amount summary
      2.  Automated check register
      3.  Predefine names of commonly written check payees
      4.  Keep  track  of  expenses  by  category without resorting to a
          chart of accounts or general ledger codes
      5.  Write checks using predefined payee names
      6.  Write checks to payees not in the predefined list
      7.  Enter "hand written" checks so the journal is kept correct
      8.  Define checks to be written on set dates in fixed amounts
      9.  Automatically print checks from defined list on set date
      10. Print checks on your PC printer
      11. Printer forms alignment assistance with no "spoiled" checks
      12. Integrated support for printing computer check order form
      13. Automated  support for reconciliation of your checking account
          (balancing your checkbook)
      14. Support for other common banking transactions including:
          a.  Deposits            f.  Adjustments (+ OR -)
          b.  Interest payments   g.  Bank service charges
          c.  Overdraft charges   h.  ATM service fees
          d.  EFT debits          i.  Automatic teller machine debits
          e.  Check voids         j.  Force balancing (+ OR -)

      15. Hardcopy printing of checkbook register
      16. Printed  analysis of income and expenses within specified date
          range (monthly, YTD, since beginning of journal)
      17. Graphic display of expenses by category within a date range
  *-  18. Calendar year analysis of expenses by:
  *-          Check payee name
  *-          Check category
  *-          All expenses by month
  *-  19. Display all checks written by category within a date range
  *-  20. Automated support for developing a monthly personal budget
  *-  21. Display of monthly variance (+ OR -) from budget by category
  *-  22. Report of 12-month spending pattern for budget analysis
  *-  23. Report   of  12-month  spending  by  category  and  percentage
          deviation from budgeted amount
      24. Displays allow graphics screen print to dot-matrix printers
      25. Support for monochrome/CGA/EGA/VGA monitors
  *-  26. Typeset reference manual


                                  THE END










```
{% endraw %}

## FILE1911.TXT

{% raw %}
```
Disk No: 1911                                                           
Disk Title: BankBook                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: BankBook                                                 
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: 512K RAM.                                         
                                                                        
A truly easy to use checkbook manager -- really intuitive.              
BANKBOOK was designed to make the management of your home finances easy 
and automated in a way that doesn't require an accountant to understand.
                                                                        
BANKBOOK makes the presentation of your home finances "look" just like  
they do using your checkbook entries, and adds automated support for    
bill payment and budget analysis.                                       
                                                                        
~ Print checks on your PC printer.                                      
                                                                        
~ Enter checks you have handwritten.                                    
                                                                        
~ Enter ATM (automated teller) and EFT (electronic funds transfer)      
transactions.                                                           
                                                                        
~ Enter deposits from a variety of sources.                             
                                                                        
~ Go back in time to enter checks you wrote over the past several months
to set up a "history" of spending trends.                               
                                                                        
~ Define a list of bills that you pay each month so they will be printed
automatically on the proper date.                                       
                                                                        
~ Associate each check with a spending category so you can divide your  
expenses into meaningful groups for later analysis.                     
                                                                        
~ Print reports and view displays of spending trends in various ways to 
see YTD spending patterns or patterns over other periods of time.       
                                                                        
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
║                     <<<<  Disk #1911  BANKBOOK  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program on a monochrome system, type:  BB MONO (press enter)   ║
║ To start program on a color system, type:  BB COLOR (press enter)       ║
║                                                                         ║
║ To print documentation, type:  COPY BB.DOC PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1911

     Volume in drive A has no label
     Directory of A:\

    BB       EXE    100208   4-28-90   1:41p
    FINANCE          12738  10-03-89   8:22p
    BANKBOOK CFG      1637   5-01-90   3:16p
    AUTO     CFG       180   9-02-89   6:34a
    MAIL     CFG      3690  10-03-89   8:24p
    BB       DOC     45687   9-24-89   6:03p
    README            1943   9-24-89   3:37p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-01-80   1:59a
    FILE1911 TXT      3189   5-29-90   4:05a
           10 file(s)     169927 bytes
                          147456 bytes free
