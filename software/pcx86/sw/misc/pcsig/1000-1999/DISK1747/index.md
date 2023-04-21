---
layout: page
title: "PC-SIG Diskette Library (Disk #1747)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1747/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1747"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE1747.TXT

{% raw %}
```
Disk No: 1747                                                           
Disk Title: Pirouette  disk 2 of 2 (1746)                               
PC-SIG Version: S1                                                      
                                                                        
Program Title: Pirouette                                                
Author Version: 1.0                                                     
Author Registration: $49.00                                             
Special Requirements: 640 K RAM, two floppy drives or a hard drive.     
                                                                        
Take total control of your database entry screen and report formats     
without doing a lick of programming.  This database lets you ``paint''  
screens and reports giving the user maximum control over the appearance 
of input screens and printed output.                                    
                                                                        
Users can create databases of unlimited size.  Data is loaded into      
memory only one record at a time, so any file limitations are imposed by
your disk size, not your system's memory.  Files are in standard dBase  
format so they are compatible with other database software.             
                                                                        
This database even has "relational" power to let the user work with     
multiple, interrelated databases simultaneously.  In addition, all      
standard search and sort routines are fully implemented.                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LICENSE.TXT

{% raw %}
```



                               PIROUETTE IS NOT FREE!


               Pirouette  is  distributed  as  part  of a marketing concept
          called "Shareware".  The shareware idea means  that  the  authors
          still  own the program, and reserve all rights granted them under
          copyright law, except one.  You are granted the right  to  freely
          reproduce  this  program,  and  to use it for EVALUATION PURPOSES
          ONLY.  If you wish to continue using the program  on  an  ongoing
          basis,  whether  for  business  or  personal  use, you must pay a
          license fee.


                   REGISTER, OR BURN FOREVER IN THE FILES OF HELL!


               Ah, make that "fires" of Hell.

               Oh, well, it's probably a little  extreme  in  either  case.
          Nevertheless,  there  are  several  compelling reasons to send in
          your registration fee.

          (1)  You  get  a printed, bound manual, so you don't have to kill
               your printer printing out the one on this disk;

          (2)  You  get  a  disk  containing  the  most  recent  version of
               Pirouette.   (There's  a  good  chance  we've  upgraded  the
               program since we produced the version you now hold.)

          (3)  You get placed on  our  mailing  list,  and  receive  prompt
               notification  any  time we revise the program in the future.
               Needless to say, these upgrades will be  made  available  to
               you at a considerable (50% or more) discount.

          (4)  You get our customer support telephone  and  bulletin  board
               numbers.

          (5)  You get our newsletter, which offers tips on how to get  the
               most out of Pirouette.

          (6)  You get to save a lot of money in the long run by helping to
               preserve the shareware industry.  Without registration fees,
               there's  no  reason  to  continue marketing programs in this
               manner.  If shareware dies, you'll have  no  alternative  to
               going  to  the  computer  store  and  paying several hundred
               dollars for a comparable program.

               So remember, registration isn't  just  a  moral  obligation,
          it's in your best interests!




                               USER REGISTRATION FORM


               Registration fees for version 1.0 are as follows:

                         $49.00  for the first copy;
                         $29.00  for all additional copies;

               To  clarify  the  above  with  regard  to networks: the full
          $49.00 price must be paid for the network server;  an  additional
          $29.00 must be paid for each additional terminal connected to the
          network.   (Version 1.0 is not designed for use as a network file
          server.  True network  capabilites,  including  record  and  file
          locking, will be part of a future upgrade.)
               Prices for company-wide or site licenses will be quoted upon
          request.

          *****************************************************************


              Name of User:________________________________________________

          Company (if any):________________________________________________

                   Address:________________________________________________

                           ________________________________________________

          County (if California):__________________________________________

          Telephone: (____)_____-________(w)   (____)_____-________(h)

          I obtained Pirouette from:_______________________________________


                  First copy:  $49.00                    $  49.00

                  ___ additional copies @ $29.00          ____.00
                                                         --------

                  Subtotal                                ____.00

                  ___% sales tax (California only)        ____.__
                                                         --------

                  TOTAL                                  $_______

                                      *   *   *

                            Mail check or money order to:

                 DeMars & Tilley, Box 7737, Berkeley, CA  94707-7737





                            DISTRIBUTOR REGISTRATION FORM


               Anyone  charging  a  fee  for  duplicating  this  program is
          subject to the following restrictions:

               (1)  A maximum of $7.50 per disk may be charged;
               (2)  The disks must be distributed in unmodified form
                    (archiving to minimize storage space is exempt);
               (3)  All catalog listings must contain the slogan,
                    "Make your data dance!"; and
               (4)  The following form must be completed and returned
                    within 15 days after the Pirouette is added to your
                    library.

               We  might  add  that this last requirement is simply to help
          us keep an up-to-date list of  our  distributors,  to  assist  in
          disseminating  program updates.  In other words, filling out this
          form is in YOUR interest, because it insures you will always have
          the most current version in your library.
               It  also makes you eligible for future incentive programs we
          will   be announcing.  These programs will result in cash rewards
          based on the number of users you help us register.

          *****************************************************************



          Date Completed: ____________         Pirouette Version: ________

          Name of Organization:___________________________________________

               Mailing Address:__________________________

                               __________________________

                     Telephone:_____/_______________

             Person Completing
                     This Form:____________________________________


           Our organization is:  [  ]  Non-profit
                                 [  ]  A for-profit business





                                     *   *   *

                                     Return to:

                   DeMars & Tilley, Box 7737, Berkeley, CA  94707

```
{% endraw %}

## MANUAL0.TXT

{% raw %}
```



















                                      PIROUETTE

                            A Database Management Program

                                     Version 1.0







                                 Copyright (c) 1989

                                         by

                                   DeMars & Tilley
                            Box 7737, Berkeley, CA  94707







                                   TECHNICAL STUFF




          SYSTEM REQUIREMENTS

               Pirouette requires the following:

               o  A true IBM-compatible computer;
               o  640K of random access memory (RAM);
               o  PC-DOS or MS-DOS 2.0 or higher;
               o  Two floppy disk drives, or one floppy and one fixed
                  disk;
               o  any ASCII printer (sorry, postscript printers aren't
                  supported).





          PROGRAM LIMITATIONS

               Pirouette has the following limitations:

               o  99 fields per database;
               o  99 database files per DOS directory;
               o  25 windows open simulatenously;
               o  A maximum with of 256 for character fields.

               There is no practical limit  on  the  number  of  records  a
          database file can hold.





          COMPABILITY WITH OTHER DATABASE PROGRAAMS

               Pirouette's  files  are  fully compatible with those used by
          dBASE III, dBASE III+, FoxBASE, dBXL, Quicksilver, and Clipper.
               Pirouette  can  also  use  files  created  with  dBASE   IV,
          provided  they  include  no memo fields or floating-point numeric
          fields.

               dBASE  III,  III+, and IV  are  trademarks  of  Ashton-Tate.
          Clipper is a trademark of Nantucket Corporation.  Quicksilver and
          dBXL  are  trademarks  of  Wordtech  corporation.   Foxbase  is a
          trademark of Fox Software.





                                         -2-











                                  LICENSE AGREEMENT


               Pirouette is not free!  It  is  distributed  as  part  of  a
          marketing  concept  called "Shareware".  The shareware idea means
          that the authors still own the program, and  reserve  all  rights
          granted  them  under  copyright law, except one.  You are granted
          the  right  to  freely  reproduce this program, and to use it for
          EVALUATION PURPOSES ONLY.  If you  wish  to  continue  using  the
          program  on  an  ongoing  basis, whether for business or personal
          use, you must pay a license fee.
               A registration form, including  a  rate  schedule,  will  be
          found in the file LICENSE.TXT.
               User groups, businesses and individuals who charge a fee for
          duplicating  this  program  are also advised to review this file.
          Distributors  must  also  register  (no  charge  is  involved  in
          distributor   registration)  and  are  subject  to  some  special
          restrictions.














                              DO YOU HAVE A SUGGESTION?

               We  tried  to be thorough when we designed this program, but
          we  recognize  that  there's   always   room   for   improvement.
          Therefore, we intend to release improved versions of Pirouette at
          least once a year.  If you have an idea you'd  like  incorporated
          in  our  next  release,  don't  be shy.  Write to us at Box 7737,
          Berkeley, CA  94707.









                                         -3-
















                                      WARRANTY


               The  authors  make  no  warranty  of  any kind, expressed or
          implied,  including  any  warranties  of  merchantability  and/or
          fitness for a particular purpose.  DeMars & Tilley shall  not  be
          liable  for  any  damages,  whether  direct, indirect, special or
          consequential, arising from a failure of this program to  operate
          in  the  manner  desired  by  the user.  The authors shall not be
          liable for any damage to data or property  which  may  be  caused
          directly or indirectly by use or misuse of the program.
               In no event will DeMars & Tilley be liable for any  damages,
          including  any  lost  profits or other damages arising out of the
          user's use of or inability to use the program, or for  any  claim
          of any other party.





























                                         -4-






                                  TABLE OF CONTENTS


               Installing the Program  . . . . . . . . . . . . . . . 6

               Introduction to Database Concepts . . . . . . . . .   7
                    Database Terminology . . . . . . . . . . . . .   7
                    Types of Data  . . . . . . . . . . . . . . . .   8
                    Related Databases  . . . . . . . . . . . . . .   9

               The Basics  . . . . . . . . . . . . . . . . . . . .  11
                    The Opening Menu . . . . . . . . . . . . . . .  11
                    Bypassing the Opening Menu . . . . . . . . . .  11
                    Initializing the Directory . . . . . . . . . .  12
                    Commands and Menus . . . . . . . . . . . . . .  12
                    Help . . . . . . . . . . . . . . . . . . . . .  13

               Creating a Database . . . . . . . . . . . . . . . .  14
                    Formatting the Input Window  . . . . . . . . .  14
                    Manipulating Objects . . . . . . . . . . . . .  17
                    Restricting Input  . . . . . . . . . . . . . .  18
                    Relating Databases . . . . . . . . . . . . . .  19
                    Saving the New Database  . . . . . . . . . . .  19

               Database Maintenance  . . . . . . . . . . . . . . .  20
                    Cursor Movement  . . . . . . . . . . . . . . .  20
                    Data Entry . . . . . . . . . . . . . . . . . .  20
                    Altering the Display . . . . . . . . . . . . .  24
                    Using Buffer Fields  . . . . . . . . . . . . .  25
                    Concluding a Data Entry Session  . . . . . . .  26

               Advanced Data Manipulation  . . . . . . . . . . . .  27

               Working with Multiple Databases . . . . . . . . . .  30

               Generating Reports  . . . . . . . . . . . . . . . .  32
                    Report Parameters  . . . . . . . . . . . . . .  32
                    The Report Editing Window  . . . . . . . . . .  33
                    Getting Fancy  . . . . . . . . . . . . . . . .  37

               Housekeeping Tasks  . . . . . . . . . . . . . . . .  38

               Appendix A:  Masks

               Appendix B:  Functions and Formulas

               Appendix C:  The Sample Databases




                                         -5-






                               INSTALLING THE PROGRAM


               Pirouette  can be used on either a system with a fixed  disk
          or  one  with  two  floppy  drives.   The  hard  disk  system  is
          recommended,  since  hard  disks  are  inherently   faster   than
          floppies.


          INSTALLATION ON A HARD DISK

               Create  a  directory  for  the  program  by  using  the  DOS
          makedir, or md, command:

                                    C:\>md \piro

               Then  transfer to this directory using the changedir, or cd,
          command:

                                    C:\>cd \piro

               Next, insert Pirouette disk 1 in the A> drive and  copy  the
          files:

                                   C:\>copy a:*.*

               Repeat  this  procedure  with  disk  2.    The  software  is
          now installed on your hard disk.  Type PIRO to run the program.


          INSTALLATION ON A TWO-FLOPPY SYSTEM

               Simply make copies of both disks, saving the  originals  for
          backups.   Insert  disk 1 in your A> drive, and disk 2 in your B>
          drive.  Switch to the B> drive and type

                                     B:\>A:PIRO

          to run the program.


          OTHER REQUIREMENTS

               Check  to  make  sure  your  CONFIG.SYS  file  contains  the
          following line:

                                      files=20

               If it does not, add this line.  (CONFIG.SYS will be found in
          the root directory on your hard drive, or on your  boot  disk  if
          you are using a two-floppy system).  Files can  also  be  set  to
          greater than 20, if desired.


                                         -6-

```
{% endraw %}

## MANUAL1.TXT

{% raw %}
```





                          INTRODUCTION TO DATABASE CONCEPTS


               You've probably heard the term "database" before.  It  is  a
          common  word  in  the software business.  Although it may sound a
          bit ominous to the new computer user, a "database"  is  simply  a
          group of information that is stored in a pre-described format.
               A database file is, basically,  a  computerized  card  file.
          With  Pirouette,  we  have  attempted to exploit this similarity.
          When you view the data in your database, it  will  appear  within
          "windows"   which  resemble  index  cards.   The  program  itself
          performs two primary tasks: (1) it allows you  to  easily  update
          and  maintain the information in your database; and (2) it allows
          you to retrieve that information in a  variety  of  forms  (e.g.,
          reports, labels, etc.).
               All   databases   have  certain  things  in  common,  and  a
          particular  terminology  is  used  by  all  database   management
          programs.   This  basic  terminology  will  be  described  in the
          following section.  If you have  never  worked  with  a  database
          management system before, please read this section carefully.


          DATABASE TERMINOLOGY

               The best way to explore database terminology is to  look  at
          some  sample  databases.   There  are three common databases that
          most  people  use every day: a checkbook, an address book, and an
          appointment calendar.  Files for these three databases have  been
          provided   with  the  program,  and  will  be  used  as  examples
          throughout the manual.
               For  now, we'll use the personal checkbook.  Below are a few
          typical entries:

                 CHECK #    DATE     PAID TO           AMOUNT    CLEARED

                   122    10/22/88   PG&E               34.97       Y
                   123    10/22/88   Pacific Bell       44.22       Y
                   124    10/25/88   Safeway            21.19       Y
                   125    10/26/88   AAA Finance Co.   204.75       N
                   .      .          .                    .         .
                   .      .          .                    .         .
                   .      .          .                    .         .

               When you stub a check you've written, you keep track of four
          items of information:  the check number, the date the  check  was
          written,   to   whom   it  was  made  payable,  and  the  amount.
          Additionally, when you balance your bank  statement  each  month,
          you mark off the checks which have cleared -- in essence a  fifth
          item of information.





                                         -7-






               In  database terminology, each line (i.e., each transaction)
          in the checkbook register is referred to as a RECORD.
               Each record is composed of five FIELDS; that is, five  items
          of information.
               Each   of  these  four  fields  has  a  distinct  DATA  TYPE
          associated with it.
               The check date will always be a Date.  The payee will always
          consist  of  alphanumeric, or Character, information.  The amount
          will always be Numeric, in that it contains numbers which can  be
          added  or  subtracted.  The "cleared" field is what is known as a
          Logical field, in that it can contain only two  values:  Yes  and
          No.   The  first field, the check number, will be dealt with in a
          moment.
               In    summary    then,    every    database    has   certain
          characteristics: (1) it is  organized  into  records;  (2)  every
          record  has  the same number of fields as every other record; and
          (3) the type of data stored in each field is the  same  in  every
          record in the database.


          TYPES OF DATA

               Pirouette recognizes four types of data:

               Character.  Character fields are used to record descriptive
               information, such as names and addresses.  The payee field
               in our checkbook contains character information.

               Numeric.  Numeric data fields contain information which will
               be manipulated arithmetically (i.e., added, substracted,
               etc.)

               Date.  Date information; specifically the month, date and
               year in the format MM/DD/YY.

               Logical.  As mentioned above, Logical fields are one which
               contain the values True and False, or Yes and No.  In an
               actual checkbook, you generally check off a box to indicate
               that the check has cleared, rather than using a Y or N, but
               the underlying concept is exactly the same.

               Up  till  now  we have avoided dealing with the Check Number
          field.  This is because we must now consider an issue in database
          design.  At first glance, the check number would appear to  be  a
          numeric  field.  Many  people, however, use alphabetical codes in
          this check register column to keep  track  of  things  like  bank
          service  charges  and  automatic  teller  withdrawals.  Moreover,
          while the check number is apparently  numeric  in  nature,  these
          numbers are never used for mathematical computations.  In setting
          up  this  database,  therefore,  it  would  probably be BETTER to
          designate the check number as a Character field.



                                         -8-






               In general, fields should only be declared as  Numeric  when
          they will actually be used for arithmetic computations.


          RELATED DATABASES

               A conventional database, or "flat  file"  has  an  extremely
          simple  structure.   One  could characterize a single database as
          two-dimensional: it has width (the number of fields)  and  length
          (the number of records), but nothing else.
               This two-dimensional structure, however, isn't adequate  (or
          at  lease  efficient)  for  describing many real-life situations.
          One  of  these  situations  is illustrated in CHECKREG, the Check
          Register database we've included.
               CHECKREG  is designed to keep track of your checks and other
          associated  activities,  like  a computerized check register.  It
          tracks the Check number (or other code), date, payee, etc.   This
          database  by  itself is fine for a personal checking account, but
          if you're running a business, things get a bit  more  complicated
          (as   usual,   because   of   the   government).   Under  certain
          circumstances,  the  federal  goverment  requires  businesses  to
          report  money  paid to other businesses or individuals.  The Form
          1099 which the government  uses  has  a  space  for  the  payee's
          Federal  Tax  ID  (or  Social Security) number, so we must have a
          field for TAX_ID as well.
               If  we  place this TAX_ID field in the CHECKREG database, we
          have a small problem.  If multiple checks are written to the same
          payee (as would happen in most business situations), we will wind
          up entering the same ID number over and over again on each check.
          This  not only creates more work for the data entry operator, but
          our database becomes significantly larger than it needs to.
               A BETTER solution is to set up a second database to hold the
          TAX_ID  (which  is  exactly what we've done in our sample).  This
          information can then be "looked up" whenever  we  need  to.   The
          resulting two databases might look something like this:

               DATABASE 1:  Payees

                     PAYEE_NAME                     TAX_ID

                     Ace Typesetting              667-22-8738
                     Law Office of D.B. Cooper    547-18-3299
                     .                            .
                     .                            .
                     .                            .









                                         -9-






               DATABASE 2:  Checkreg

                    PAY DATE     AMOUNT   PAYEE_NAME

                    04/01/87     100.00   Law Office of D.B. Cooper
                    07/25/89     335.75   Ace Typesetting
                    07/27/89     250.00   Law Office of D.B. Cooper
                    .               .         .       .
                    .               .         .       .
                    .               .         .       .

               This  kind  of  set-up  is  referred  to  as  a "relational"
          database structure, because  we  have  two  databases  which  are
          related to each other.   By  definition,  related  databases  are
          tied   together  with  a  common  field  --  in  this  case,  the
          PAYEE_NAME.

               Another side of  database  relationships  is  the  issue  of
          validation.   If  you  were  using the above structure, you would
          probably not want to enter a record into  the  CHECKREG  database
          for  someone who did not appear in the PAYEES database.  For this
          reason, Pirouette provides the ability to restrict  input  for  a
          field  to  only  those  entries found in a corresponding field in
          another database.   We've  restricted  the  PAYEE_NAME  field  in
          CHECKREG  to  allow  only  entries  from  the PAYEE_NAME field in
          PAYEES.
               (Incidentally,  you  don't  necessarily  have  to  have   an
          associated TAX_ID for every payee; the TAX_ID could be left blank
          where  it  wasn't  needed.   And  later  on we'll describe simple
          technique for  adding  to  the  payee  list  as  you're  entering
          checks.)
               This  "restrict to list" feature is not just a powerful tool
          for preventing data entry error.  As we will show a little later,
          it is also a device to greatly speed up data entry.




















                                        -10-

```
{% endraw %}

## MANUAL11.TXT

{% raw %}
```





                           APPENDIX C: SAMPLE APPLICATIONS



          CHECK REGISTER

               The  Check  Register  involves  three  databases,  the  most
          important of which  is  CHECKREG,  which  stores  the  individual
          checks.


          Database: CHECKREG

          Field Name    Type    Length    Input Restriction
          ----------    ----    ------    -----------------
          CHECK_NO      Char       4      Mask: @!
            * the check number or code
          DATE_PAID     Date       8      none
            * the date the check was paid
          PAYEE_NAME    Char      25      List: PAYEES->PAYEE_NAME
            * the payee (links to PAYEES database)
          AMOUNT_PD     Num       10      Mask: ###,###.##
            * the amount of the payment
          CLEARED       Log        1      Mask: Y
            * whether or not the check has cleared
          EXP_TYPE      Char      15      List: TYPES->EXP_TYPE
            * the expense category


          Database: PAYEES

          Field Name    Type    Length    Input Restriction
          ----------    ----    ------    -----------------
          PAYEE_NAME    Char      25      none
            * the party to whom checks are written
          TAX_ID        Char      11      Mask: @!
            * the payee's federal tax identification number


          Database: TYPES

          Field Name    Type    Length    Input Restriction
          ----------    ----    ------    -----------------
          EXP_TYPE      Char      15      none
            * the expense category









                                        -C1-






          Reports Associated with the Check Register (continued)

          Report Spec   Description
          -----------   -----------
          OUTSTAND      A list of checks which haven't cleared
          PAID_TO1      Checks listed by PAYEE_NAME
          PAID_TO2      Summary of amounts paid to each payee
          CK_TYPE1      Checks listed by EXP_TYPE
          CK_TYPE2      Summary of amounts paid for each expense
                          category


          APPOINTMENT CALENDAR

               The appointment calendar involves two databases, CALENDAR
          and LISTS.  LISTS is used only as an input restriction list.

          Database: CALENDAR

          Field Name    Type    Length    Input Restriction
          ----------    ----    ------    -----------------
          DATE          Date       8      none
            * the date of the event for this record
          TIME          Char       5      Mask: ##:##
            * the time of the event
          AM_PM         Char       1      Mask: !
            * whether the time is a.m. or p.m.
          EVENT         Char      30      none
            * a brief description of the event
          LOCATION      Char      30      none
            * the location for the event
          EVENT_TYPE    Char       8      List: LISTS->EVENT_TYPE
            * the event category (e.g., business, personal, etc.)


          Database: LISTS

          Field Name    Type    Length    Input Restriction
          ----------    ----    ------    -----------------
          EVENT_TYPE    Char       8      none
            * category of events (used by CALENDAR)
          RELATNSHIP    Char       8      none
            * category of relationship (used by ROLODEX)


          Reports Associated with the Appointment Calendar

          Report Spec   Description
          -----------   -----------
          DAILY         A daily event calendar
          MONTHLY       A monthly calendar of upcoming events



                                        -C2-






          ROLODEX

               The Rolodex, or personal telephone/address files, involves
          two files, ROLODEX and LISTS.  LISTS is also used by CALENDAR.


          Database: ROLODEX

          Field Name    Type    Length    Input Restriction
          ----------    ----    ------    -----------------
          FIRST_NAME    Char      15      none
            * the individual's first and middle names
          LAST_NAME     Char      15      none
            * the individual's last name
          COMPANY       Char      20      none
            * the individual's employer, if applicable
          ADDRESS       Char      25      none
            * the street address
          CITY          Char      15      none
            * the city
          STATE         Char       2      Mask: @!
            * the state, as a two-letter code
          ZIP_CODE      Char       5      Mask: #####
            * the basic five-digit zip code
          ZIP_PLUS4     Char       4      Mask: ####
            * the additional 4 digits of the zip code
          HOME_PHONE    Char      12      Mask: ###/###-####
            * the individual's home phone number
          WORK_PHONE    Char      12      Mask: ###/###-####
            * the individual's work phone number
          RELATNSHIP    Char       8      List: LISTS->RELATNSHIP
            * relationship to the individual (i.e., personal, etc.)


          Database: LISTS

          Field Name    Type    Length    Input Restriction
          ----------    ----    ------    -----------------
          RELATNSHIP    Char       8      none
            * category of relationship (used by ROLODEX)
          EVENT_TYPE    Char       8      none
            * category of events (used by CALENDAR)


          Reports Associated with the Rolodex

          Report Spec   Description
          -----------   -----------
          DIRECTRY      An alphabetized telephone directory
          MLABELS       Mailing labels for people on your ROLODEX




                                        -C3-
```
{% endraw %}

## MANUAL2.TXT

{% raw %}
```






                                     THE BASICS

          THE OPENING MENU

               After  you  type  PIRO to execute the program, the copyright
          information will  be  displayed.   As  indicated,  press  "C"  to
          proceed past this.  You will then come to the opening menu.
               The opening menu provides you with six choices:

                         VIEW or Revise Data
                         GENERATE Reports
                         MODIFY or Create a Database
                         PERFORM Housekeeping Tasks
                         Execute a DOS command
                         QUIT

               The  capitalized  words are key, or command words. To make a
          selection  from  this  menu  (or  any other menu), you can simply
          press the first letter of the  key  word  (e.g.,  press  "V"  for
          VIEW).   Alternatively,  you  can use the cursor keys to move the
          light bar up and down until you highlight the desired  selection,
          and press <Enter>.
               The function of each menu selection is as follows:

               View.  This will open a window for editing a database.  This
               is the option you will use most, since it enables you to
               perform your actual data entry and database maintenance.

               Generate.  This will open a window for designing reports, or
               running reports you have designed previously.

               Modify.  This is where you define the structure of your
               database(s), and the layout of your input screens.

               Perform.  This gives you access to the Housekeeping Menu.
               Housekeeping includes a variety of file maintenance tasks,
               such as copying and erasing files.  This menu also includes
               the very important task of Initializing your directory,
               which will be discussed momentarily.

               DOS.  This selection allows you to exit to DOS temporarily
               to perform some other task, such as formatting a disk.  You
               can then return to the program by typing "Exit".

               Quit.  This selection returns you to DOS permanently.


          BYPASSING THE OPENING MENU

               Pirouette  also allows you to bypass the opening menu and go
          directly to a database or report.  To go directly to a  database,
          type:


                                        -11-






                                C:\>piro view dbname

          from the DOS prompt, where "dbname" is the name of your database.
          If  you  have particular database you consult frequently, such as
          the ROLODEX, you can then set up a batch file to give  you  quick
          access.  For example:

                    rem  This batch file calls up the Rolodex
                    echo off
                    c:
                    cd\piro
                    piro view rolodex
                    cd\
                    cls

               Similarly, you can pull  up  a  frequently  used  report  by
          giving the command:

                              C:\>piro generate repname

          where "repname" is the name of your report spec.


          INITIALIZING THE DIRECTORY

               Before  you  can actually use Pirouette, you must Initialize
          your DOS directory.  This is a simple process, which need only be
          done once.
               Initializing creates two files, XXXX.DBF and XXXX.NTX, which
          Pirouette uses to keep track of index files.  (If you don't know
          what index files are, don't worry about it -- they are something
          which Pirouette manipulates automatically.)
               To initialize,  follow  these  steps:   (1)  select  PERFORM
          Housekeeping  Tasks  from the opening menu; (2) select Initialize
          Directory from the housekeeping menu; (3) specify the name of the
          directory to hold the documentation (C:\PIRO if you're working on
          a hard disk, or B:\ if your working with  a  two-floppy  system);
          and, (4) press <Esc> to return  to  the  opening  menu  when  the
          initialization process is complete.
               You can now view, edit, or create database files.


          COMMANDS AND MENUS

               Software designers have, in the past, tended to  choose  one
          of   two   methods   for  program  control.   The  first  method,
          popularized by Lotus 1-2-3, uses a system of nested menus.   This
          system  is  helpful  while one is learning a new program, but can
          get rather annoying when you  become  expert,  because  you  must
          use a series of keystrokes to wade through several menus to issue
          the command you want.



                                        -12-






               The  alternative,  exemplified  by WordStar and WordPerfect,
          relies on using function keys or control keys  (<Ctrl>  or  <Alt>
          pressed  simultaneously  with  some  other keyboard key) to issue
          commands.  This is much faster  for  the  experienced  user,  but
          difficult to learn.
               With   Pirouette,   we  believe  we've  hit  upon  an  ideal
          compromise.  At most any point in the program (e.g., when editing
          the data, or designing a screen or report) you can press <F1>  to
          bring  up  a  menu.   All the menus are like the opening menu, in
          that they use key words, such as APPEND, FILTER,  PURGE,  and  so
          on.   To  KILL  an unwanted record in your database, for example,
          you would press <F1> to call up the menu, and then press "K".
               Once you have become familiar with these menus, however, you
          can speed up the process by pressing the <Alt> key in combination
          with   "K"   (throughtout  the  rest of the manual we will simply
          refer to this combination of keystrokes as <Alt-K>, or whatever).
          This will perform exactly the same  function,  but  bypasses  the
          menu.


          HELP

               As alluded to earlier, Pirouette also has  an  on-line  Help
          facility  which enables you to call up this very manual on screen
          while you are using the program.  To access this,  keep  pressing
          <F1>  until  you  are  presented with a menu of chapter headings.
          Then choose the appropriate chapter.
               To return to the program from Help, just press <Esc>.


























                                        -13-

```
{% endraw %}

## MANUAL3.TXT

{% raw %}
```





                                 CREATING A DATABASE


               To  create  a  new database, you must decide upon a name and
          then format an Input Window.  If you are working with an existing
          .DBF  file  previously  created  with  dBASE  III  or  some other
          program, it is not  necessary  to  go  through  this  process;  a
          default Input Window will be created automatically the first time
          you view the data (though you may not like the way it looks).
               At any time in the  future  when  you  wish  to  change  the
          database  structure  or the Input Window, you can use the process
          outlined below.

               Begin by selecting  MODIFY  from  the  opening  menu.  Next,
          select "New File" from the list of databases (or the name of your
          existing  file,  if  you're  making revisions).  You will then be
          prompted for a file name.  The file name must meet the  following
          criteria:

               o  it may be no more than eight characters;
               o  it should not include a DOS file extension, since the
                  .DBF extension will automatically be assigned to the
                  file;
               o  the first character must be a letter;
               o  subsequent characters may be letters, numbers, or the
                  underscore ("_").  No spaces or other characters are
                  allowed.

               Once  a valid file name has been  provided,  the  Formatting
          Window will appear.


          FORMATTING THE INPUT WINDOW

               As mentioned in the introduction, the best way to  think  of
          the Input Window is as an index card.  If you were arranging your
          data  in  a  card file, you would take a stack of index cards and
          arrange the information the same way on each one.  The Formatting
          Window is where you design that format.

               TECHNICAL NOTE:  The Formatting Window actually does two
               things; it allows you to create or modify the structure of
               the .DBF file, and it creates an associated file with the
               same name and a .WDW file extension.  The .WDW file contains
               no data itself, merely the information on how the data
               should be displayed in the Input Window.

               The  Formatting  Window  functions  somewhat  like an office
          bulletin board: you create objects and "tack" them on the  screen
          at  the  desired position.  You can then move them, edit them, or
          delete them.  The following keys allow you to navigate around the
          Formatting Window:


                                        -14-






                         Formatting Window - Navigation Keys

                                   Key       Result
                            ----------       ----------
                           cursor down       down one line
                             cursor up       up one line
                           cursor left       left one column
                          cursor right       right one column
                                  PgDn       down ten lines
                                  PgUp       up ten lines
                                  Home       move to first column
                                   End       move to last column
                                   Tab       left 15 columns
                                 space       insert one column
                                   Del       delete one column
                            Ctrl-Enter       insert one row
                                Ctrl-Y       delete one row

               Three kinds of objects can be placed upon the Input  Window:
          text,  data  fields,  and  calculations.  The commands which deal
          with each of these objects are discussed below.


          enter TEXT <Alt-T>

               Text  is  included  on  your   input   screen   to   provide
          information for the person doing the data entry.  The most common
          example  is  the  field  description  which accompanies each data
          field in the sample databases.  If you are creating a system  for
          use by someone else, you might also use the Text command to enter
          basic  information  about the command keys ("Use <Alt-Q> to Quit,
          for instance), so that person doesn't have the consult  the  Help
          window.
               To place text objects on your screen, move the cursor to the
          location where you wish the first character of the text string to
          appear.  Then press <Alt-T> (or, alternatively, <F1> and <T>).  A
          window  will pop up, into which you can enter up to 50 characters
          of text.  When you press <Enter>, the text string will appear  on
          the screen.  If you press <Alt-T> by accident, just press <Esc>.


          enter a NEW field <Alt-N>

               To  add a new field to your database, move the cursor to the
          appropriate position and press <Alt-N>.   A  window  will  appear
          which requires you to enter several items of information:

              o  Field  Name.  Field names may be up to ten characters.
                 The first character must be a letter.  The other nine
                 characters can be letters, numerals, or the underscore.
                 Spaces are not allowed within a field name, just as they
                 are not allowed in file names.  The underscore is often
                 used in their place (e.g., HOME_PHONE).

                                        -15-






               o  Data Type.  The four data types are discussed in the
                  previous section on database concepts.  They are
                  Character, Numeric, Date, and Logical.

               o  Field Length.  If you select Date or Logical as the data
                  type, the field length will be assigned automatically. If
                  you  select  Character  or  Numeric, you must specify the
                  length.  This  should  be the length of the longest entry
                  you will make in that field (you can  change  the  length
                  later if you need to).

                  When selecting the length for a numeric field, remember
                  to include one position for the minus sign (if you will
                  be entering negative values) and one position for the
                  decimal point.  You will also get a prompt asking for the
                  "# of decimals".  Enter the number of digits that should
                  appear to the right of the decimal point.

                  Selecting a length for a character field is straight-
                  forward.  However, if you create a character field of
                  more than 60 spaces, you will be unable to see the entire
                  contents of the field at once.  The screen is simply not
                  wide enough to display very long fields, and to read or
                  edit them you will have to use the cursor to scroll to
                  the right.  Within the Formatting Window, these fields
                  will appear as if they are only 60 characters in length,
                  even though more space is allocated within the database.

               o  Input Restriction.  It is also possible to place very
                  specific restrictions upon the data being entered.  These
                  restrictions can be used to force the data into a
                  particular form (e.g., all capital letters) or to prevent
                  the entry of erroneous values.  Input restrictions are
                  discussed in more detail a little bit later.


          enter a CALCULATION <Alt-C>

               The third kind of object which can appear in an input window
          is a calculation.  Calculations are expressions of some data type
          (see Appendix B, Functions and Formulas), usually  involving  one
          or more data fields.
               One example of a calculations is found in the CALENDAR.   It
          is  helpful,  in an appointment calendar, to know the date of the
          week corresponding to each event.  In this case, we have used the
          following function:

                                     CDOW(DATE)

          This displays the date  of  the  week  (as  a  character  string)
          corresponding to the field DATE in that record.



                                        -16-






               Another  common  use  is  to show totals or percentages.  If
          your database involved retail purchases, you might wish to have a
          calculation which would display  the  appropriate  sales  tax  on
          screen (.07*BASE_PRICE, if the tax rate were 7%),  or  the  total
          purchase price (1.07*BASE_PRICE).


          MANIPULATING OBJECTS

               After  you  have  created  fields,  calculations,  and  text
          strings,  you  will  undoubtedly  wish  to  manipulate  them.  By
          manipulate we mean change them, move them, or get rid of them all
          together.   The formatting window has commands which allow you to
          perform all three of these tasks.


          EDIT an object <Alt-E>

               To revise an existing object, move the cursor to some  point
          on  that  object  and press <Alt-E>.  The appropriate window will
          pop up to allow you to make changes in the field, calculation, or
          text string.
               If the object is a field, however, there are limitations  as
          to  the  changes  you can make.  Only the field length (including
          the number of decimals, if it's numeric) and  input  restrictions
          can  be  changed.   The  field  name  and its data type cannot be
          altered.  If you need to change either of these  attributes,  you
          must kill the field and create a new one.
               Which brings us to the next topic.


          KILL an object <Alt-K>

               To  kill  an existing object, move the cursor to that object
          and  press  <Alt-K>.   Text  and  calculations  will  be  deleted
          automatically.   For data fields, however, a window  will  appear
          which will require you to confirm your intentions.


          DRAG an object <Alt-D>

               To  move,  or  drag,  an  object  to another location in the
          formatting window, move the  cursor  to  that  object  and  press
          <Alt-D>.  The object will begin to blink.
               Move  the  cursor  to  the  place  where  you wish the first
          character of the object to appear and press <Enter>.  The  screen
          will be repainted with the object at its new location.
               To  abort  this  process  after you start to Drag an object,
          press <Esc>.





                                        -17-






          RESTRICTING INPUT

               At the time you create (or edit) a field, you will be  asked
          whether  or  not  to  create  (or  modify)  an input restriction.
          If  you  answer  "YES", Pirouette will give you a choice of three
          ways to do so: LIST, MASK, and RANGE.   A  fourth  choice,  NONE,
          allows you to remove an existing input restriction.
               Each of the three methods is described below:


          List

               Restricting   input   by  List  connects  that  field  to  a
          corresponding field  in  another  database.   Only  values  which
          already  exist  in  the  second database may be entered into this
          restricted  field.   As  mentioned in the introduction, this is a
          very powerful tool for preventing data entry error.
               When you select List, a menu  will  pop  up  displaying  all
          other  databases  in  the current DOS directory.  Select one from
          this list.  Still another menu will pop up listing the fields  in
          that  database,  so  that  you  can select the appropriate field.
          Needless  to  say,  this  requires  you  to  either  create   the
          restriction  database first, or else come back later and edit the
          field to create the restriction.
               An example of a List restriction is found  in  the  ROLODEX.
          Here,  the  field RELATNSHIP is restricted to a field of the same
          name in the database LISTS.  LISTS is simply a three-record  list
          containing the values Customer, Vendor, and Personal.  Thus, only
          these  three values can be entered into the Relationship field in
          the ROLODEX (unless, of course, you  add  other  records  to  the
          list).


          Mask

               A  mask  allows  only  certain characters to be entered into
          certain places within the field.  A variety of  template  symbols
          and functions are used, each of which is described in Appendix B.
          (If  you're  a  user of dBASE, you'll be pleased to know that the
          same symbol system has been used.)
               Just to whet your appetite, though, here  are  a  couple  of
          examples.  The template symbol # restricts input to only numerals
          or  spaces  for  that  particular  character.  Thus, a mask for a
          telephone number field might look like this:

                                    ###/###-####

               If you wished to restrict input to all capital letters, you
          would use the ! function:
                                         @!

               This topic is covered in depth in Appendix A.


                                        -18-






          Range

               The final type of input restriction is by range. This is
          most commonly used for Date fields, though it can also be used
          for Characters or Numerics.  When Range is selected, you will be
          asked for an upper and lower limit. Only values between those
          limits will then be accepted.
               If you wanted to ensure that all checks entered into your
          check register were from 1990, for instance, you would just
          restrict by range, with the lower limit being 1/1/90, and the
          upper limit being 12/31/90.


          RELATING DATABASES

               Creating a relational database structure,  as  discussed  in
          the  section  on  Database  Concepts,  is  no  more  complex than
          creating the  individual  databases.   Merely  specify  the  same
          Name,  Type,  and Length for the common field when you create the
          related  databases (in our sample databases, CHECKREG and PAYEES,
          this common field is PAYEE_NAME).
               Methods for entering data into related  databases,  and  for
          printing that data out on reports, will be described as we go on.


          SAVING THE NEW DATABASE

               To close the formatting window and  return  to  the  opening
          menu,  press  <Alt-Q>.   If you have made changes to the database
          structure (i.e.,  the  fields  themselves),  you  will  be  asked
          whether or not you wish to save the new structure.  If you answer
          "NO",  the  original  database  structure, along with any data in
          your database, will be preserved.
               If you answer  "YES",  and  you  have  killed  fields  which
          previously existed, the data which was stored within those fields
          will be discarded with no chance of recovery.


















                                        -19-

```
{% endraw %}

## MANUAL4.TXT

{% raw %}
```





                                DATABASE MAINTENANCE


               To enter data, select VIEW from  the   opening  menu.   Once
          VIEW is selected, a list of existing files will appear.  When you
          select  a  database,  the corresponding Input Window will appear.
               The  record  which appears initially will be the last record
          entered.  You may or may not have any interest  in  this  record;
          Pirouette  simply moves to this place in the file as an arbitrary
          starting point.


          CURSOR MOVEMENT

               The  following  keys  are  used to navigate within the Input
          Window, moving from field-to-field and from record-to-record:

                           Input Window - Navigation Keys

                                   Key   Result
                                 -----   ----------
                                 Enter   next field
                                   Tab   next field
                           cursor down   next field
                             cursor up   previous field
                              Ctrl-End   last field in the window
                             Ctrl-Home   first field in window
                                  PgDn   next record
                                  PgUp   previous record
                             Ctrl-PgDn   last record in the database
                             Ctrl-PgUp   first record in the database
                                     "   repeat the last entry

               If you are already at the first record in the  database  and
          press  <PgUp>,  a  low-pitched tone will sound informing you that
          you are attempting to  move  past  the  beginning  of  the  file.
          Similarly,  a tone will sound if you press <PgDn> when you are at
          the end of the file.


          DATA ENTRY


          add NEW record <Alt-N>

               When  performing entry of new data, the first thing you will
          need is a blank input window.  To call up a blank  window,  press
          <Alt-N>.  This  is analagous to adding a new, blank index card to
          your card file. The new window will show only blank spaces and/or
          zeros.  If you do not create a blank window for each new  record,
          you will write over existing data, erasing the old information.



                                        -20-






               NOTE: If you quit (or open a second window) when a blank
               window shows on the screen, you will have a blank record
               stored in your database.  If you print a report when a blank
               record exists in your database, the record will show up as a
               blank line (or lines) on your report.


          key entry

               To enter data in a field, simply move to that field and type
          in the  relevant  information.   The  data  will  be  permanently
          recorded  in  the database as soon as you move to the next field.
          The simplest method of performing data entry is  to  key  in  the
          data,  then  press  <Enter>.   The cursor will then automatically
          move to the next field. If you begin to key the wrong information
          in a field, press <Esc>.  The field will then be restored to  its
          original value.  This is known in the trade as an "oops" key.  If
          you  discover an error after moving into another field, return to
          the previous field and type over the errant information. Remember
          that typing over a field  alters  an  existing  record;  the  new
          information will be stored in its place when you exit the field.


          the ditto feature <">

               Because  data  entry  is  often  repetitive, Pirouette has a
          "ditto" feature to reduce key entry.  Suppose  you  have  written
          several  checks on the same day, which you wish to enter into the
          CHECKREG database.  Enter the first record normally.  Then create
          a blank record to hold the second entry.  For the  second  record
          it  is  not  necessary  re-enter  the  date.   Simply move to the
          CHECK_DATE field and press  <">  (the  ditto,  or  double-  quote
          mark).   Pirouette remembers the value you previously entered and
          will place it in this field.  You can  then  either  accept  this
          value  (by  pressing  <Enter>,  <Tab>,  etc.),  or  discard it by
          pressing <Esc>.
               When  you  first  open an Input Window, the ditto feature is
          programmed with the values of the last record  entered  into  the
          database. The ditto feature works with fields of any data type.


          fields restricted to lists

               If, during the creation of your database, you specified that
          a  field  should  be  restricted  to  a  list,  you  have another
          opportunity to reduce key entry.
               When  you  enter  something  into  the   restricted   field,
          Pirouette  will  consult the list (the corresponding field in the
          other database), to see if that same entry exists.   If  it  does
          not, a window will pop up showing the allowable entries.  Use the
          cursor to highlight the appropriate entry and press <Enter>.  The
          value from the list will be entered into the field.


                                        -21-






               The crucial thing to realize, however, is that the list item
          which is initially highlighted is determined by whatever you have
          keyed into the data field.  For instance,  if  you  are  entering
          records  into  the  CALENDAR database, when you come to the field
          EVENT_TYPE, it is not necessary to type the entire value.  If you
          type "per" (or "pe", or just "p") and  press  <Enter>,  the  list
          window   will   appear,   with   the   entry  "Personal"  already
          highlighted.   Then  you  can press <Enter> again to complete the
          entry.  In other words, in any list-restricted field, you greatly
          simplify your data  entry  by  typing  just  enough  letters  (or
          numerals)  to  pinpoint  the  correct entry in the list, and then
          accepting that entry.

               HINT:  Here's a quick way of adding to a list, without
               exiting from the current window to the main menu: (1) Enter
               the new value into the database as if the field were
               unrestricted; (2) BEFORE pressing <Enter>, press <Alt-O> and
               select the database containing the restriction list; (3) You
               will be told that there is no corresponding entry in the
               second database, and be asked if you wish to add one.  Reply
               YES; (4) the second database will be opened, with a record
               containing the new list entry.  Press <Esc> twice to return
               the the first window.  For more on this, see the section on
               Working With Multiple Databases.


          JOTTINGS <Alt-J>

               Pirouette  also allows you to  add  free-form  comments,  or
          "jottings", to your records.  When you press <Alt-J> (or <F1><J>)
          the jottings window will appear.  You can type your comments into
          this  window  for  later  review.   The  contents of the Jottings
          window are unique for each record.
               No  provision  is made in this version of Pirouette to print
          the  Jottings,  nor  can  you  perform  a  search  based  on  the
          information in this field.  Jottings are strictly online notes to
          yourself or other users.

               TECHNICAL NOTE:  The jottings are actually a DBASE memo
               field, the contents of which are stored in a separate file,
               with a .DBT file extension.  Consequently, each database
               will actually have up to three files associated with it: the
               .DBF file, a .WDW file, and a .DBT file.  Pirouette creates
               the .DBT file when you create or modify the database
               structure.  Thus, the Jottings window will not be available
               if you are working with an unmodified .DBF file created
               with some other program.







                                        -22-






          KILL record <Alt-K>

               The "Kill" command deletes the record currently  showing  in
          the  Input  Window.   After  pressing  <Alt-K>,  you will see the
          message, "Do you wish to delete  the  current  record?".   A  YES
          will carry out the command, a NO will cancel  it.   This  reduces
          the chance of deleting a record by accident.
               <Alt-K>  only allows you to eliminate one unwanted record at
          a time.  It is also possible to delete an entire group of records
          at once.  This is known as Purging and will be discussed  in  the
          section on Advanced Data Manipulation.


          SEARCH and Sort <Alt-S>

               To find a specific record, press  <Alt-S>.   A  blank  Input
          Window  will  appear.  It is easily distinguishable from a normal
          Input Window because the colors are reversed.  Move to the  field
          you wish to search on and enter the value you wish to search for.
          For  instance,  if  you  wish  to  search  for  check #278 in the
          CHECKREG database, move to the CHECK_NO field, type 278 and press
          <Enter>.  A couple of things will happen.  First, Pirouette  will
          quickly  sort all of the records according to the designated data
          field.  Second, it will move to the first record  which  contains
          the value you are looking for.
               It  may  be that several records meet this condition and the
          one you see is not the one you want (as would happen if you  were
          searching  on  the  PAYEE  field instead of CHECK_NO).  Since the
          records are now sorted, use the <PgDn> key to scroll through  the
          records until you find the one you need.
               If  Pirouette  finds  no  records  which  meet the specified
          condition,   it   will  move  to  the  record  which  would  have
          immediately followed the desired record if it had  existed).   It
          will also display a message that no records conform to its search
          instructions.   For example, if there was no check #278, it would
          move to check #279.
               The data will continue to be sorted according to the  search
          field  until  another search is conducted.  If you wish to return
          the data to its original, unsorted  condition,  open  the  Search
          window  and  just press <Enter> repeatedly, going through all the
          fields.
               Note  that  when  you search on a character field, Pirouette
          does not distinguish between uppercase and lowercase letters.











                                        -23-






          ALTERING THE DISPLAY

          DRAG window <Alt-D>

               In certain instances, particularly when  you  begin  working
          with  multiple  databases, you will wish to move the Input Window
          around on the screen.  To do this,  press  <Alt-D>.   The  border
          surrounding  the  window will begin to blink.  Move the cursor to
          the place where you wish the upper left-hand corner of the window
          to appear, then press <Enter>.  The window  will  now  appear  in
          its new location.
               In combination with the Open command <Alt-O>,  this  feature
          can  be used for viewing multiple records at the same time.  More
          on this in the section on Working With Multiple Databases.


          BROWSE <Alt-B>

               Speaking  of  viewing  multiple  records,  there  are   many
          instances   when  it  is  preferable  to  view  your  data  in  a
          columnar-type layout, rather than one record at a time.  To  view
          the records this way, press <Alt-B>.
               In   Browse   mode,   the   navigation  keys  work  somewhat
          differently.  Below is a table of the applicable keys:

                            Browse Mode - Navigation Keys

                                    Key   Result
                                  -----   ----------
                           cursor right   next field
                            cursor left   previous field
                            cursor down   next record
                              cursor up   previous record
                                   Home   first column on screen
                                    End   last column on screen
                              Ctrl-Home   leftmost column
                               Ctrl-End   rightmost column
                                   PgDn   down one screen
                                   PgUp   up one screen
                              Ctrl-PgDn   the last record in the database
                              Ctrl-PgUp   the first record in the database
                                <Alt-E>   Edit the current field

               Pay particular attention to the Edit command (<Alt-E>).   If
          you wish to edit an existing field value beginning with something
          other  than  the  first  character,  you  must   press   <Alt-E>.
          Otherwise, Pirouette assumes that <cursor-left> is an instruction
          to  move  to  the  next  column,  rather than to move to the next
          character within the current column.
               To  switch the Browse mode off and  return  from  Browse  to
          the normal Input Window, press <Alt-B> again.



                                        -24-






          USING BUFFER FIELDS

               As   previously  mentioned,  data  entry  is  often a highly
          repetitive  task.   The  ditto feature is one device which allows
          you  to  reduce  repetitive  key  entry;  buffers  are   another.
          Pirouette has a series of ten "Buffer Fields", which allow you to
          temporarily   store  items  of  information  and  then  copy  the
          information from the buffer to a data field.
               You might think of the buffers as a temporary database  with
          ten  fields.   The  fields  may store data of any type, depending
          upon your immediate needs.  The following  commands  control  the
          buffers.


          WRITE to a buffer <Alt-W>

               To  enter information into one of the buffer fields, move to
          the field which contains the  information  to  be  stored.   Then
          press  <Alt-W>.  A window will appear, showing the data currently
          contained in the ten fields (this allows you to see which buffers
          are empty and which are full).  You  may  then  select  a  buffer
          using one of two methods.  The fastest way is to press one of the
          numeral keys, 0-9.  Alternatively, you may use the cursor keys to
          highlight the desired buffer, and then press <Enter>.


          READ from a buffer <Alt-R>

               To   retrieve   information   from one of the buffer fields,
          move to the field where you wish to place the  data,  then  press
          <Alt-R>.  The  buffer  window will appear, displaying the current
          contents of each buffer.  Select the appropriate  buffer,  either
          numerically  or with the highlight.  The information will then be
          displayed in the blank field.

               NOTE:  When you read from a buffer, the data is simply
               copied from the buffer field, not erased.  The same
               information will remain in a buffer field until you either
               exit Pirouette completely, or write something else into that
               same buffer.


          CALCULATOR <Alt-C>

               Pirouette includes a pop-up calculator  which  can  simplify
          many  tasks  -- particularly when used in  combination  with  the
          buffer  fields.   For  instance, if you must do some mathematical
          computation, you can use  the  on-screen  calculator,  write  the
          result  to  a  buffer,  then  read from the buffer to the desired
          field.  When  the  calculator  is activated, you will be asked to
          select one of four types of computation:



                                        -25-






               o  FORMULA.  This can be any type of formula using the dBASE
                  functions and operators.  This can be a simple
                  mathematical function such as 7*133, or a complex formula
                  using functions and character strings, such as
                  UPPER(SUBSTR(PAYEE,1,10)).  See Appendix B, Functions and
                  Formulas, for detailed a explanation of allowable
                  calculations.

               o  COUNT.  This returns a count of the number of records in
                  the current database.  This count will respect any Filter
                  which is in effect (see the next section on Advanced Data
                  Manipulation).

               o  SUM.  This returns the sum of the values in a numeric
                  field.  Like COUNT, the sum respects any active filter.

               o  AVERAGE.  This returns the average of the values in a
                  numeric field, respecting any active filter.

               If you wish to transfer the result of  a  calculation  to  a
          field,  first  Write  it  to  a  buffer, then exit the Calculator
          window (by pressing either <Enter> or <Esc>), and then  Read  the
          value from the buffer into the appropriate field.


          CONCLUDING A DATA ENTRY SESSION

          QUIT <Alt-Q>

               When you  have  finished  your  data  entry  session,  press
          <Alt-Q>. This will return you to Pirouette's opening menu.























                                        -26-

```
{% endraw %}

## MANUAL5.TXT

{% raw %}
```





                             ADVANCED DATA MANIPULATION


          APPEND records <Alt-A>

                Pirouette allows you to append  (add  on)  records  to  the
          active  database  from  another file.  This may be either another
          .DBF file or an ASCII file.
               The  current  version of Pirouette does not allow data to be
          translated directly from other  programs  such  as  Lotus,  which
          store  data in a different format.  However, the key word here is
          "directly".  Any software package worth its salt will  have  some
          capability to write data to an ASCII format file -- also referred
          to  as  a  Text file.  For instance, to translate from Lotus, one
          simply has to arrange the data in its appropriate  format,  print
          it  to  an ASCII text file and use the Append command to read the
          data from the Text file.
               When  the Append command is issued, you will be prompted for
          a file name.  If you wish to see a list of  files,  use  the  DOS
          wildcards.   For instance, to see all the files in your \WORDSTAR
          directory, enter \WORDSTAR\*.* as the file name.
               You will also be prompted for a file type.  The  three  file
          types are .DBF, ASCII Columnar, and ASCII Delimited.
               If  you  select  .DBF  format,  Pirouette  will  append  all
          records  from  that  database file.  However, it will only append
          from fields which have the same name  as  fields  in  the  active
          database.   For  example,  if  the  active  database contains the
          fields NAME and WORK_PHONE, and the database being appended  from
          contains  the  fields NAME and PHONE_NO, only the field NAME will
          be captured.

               If  you're dealing with an ASCII Text file, the process is a
          little more complicated.  First off, data in a Text file  may  be
          formatted  two  different  ways, so you'll have to tell Pirouette
          how that data is organized; either columnar or delimited.
               Columnar means that the data is arranted in columns, so that
          every  field has the same width within the Text file.  Consider a
          database containing lifetime home runs by major  league  baseball
          players:

                            HENRY AARON       755
                            BABE RUTH         714
                            WILLIE MAYS       660
                            FRANK ROBINSON    586
                            HARMON KILLEBREW  573
                            REGGIE JACKSON    563

               This  format  is  most useful when appending data originally
          created with a spread sheet program.
               Delimited, on the other hand, is useful when importing  data
          created  on  a  word  processor.  Delimited means that a comma is
          used to separate the fields:


                                        -27-






                            HENRY AARON,755
                            BABE RUTH,714
                            WILLIE MAYS,660
                            FRANK ROBINSON,586
                            HARMON KILLEBREW,573
                            REGGIE JACKSON,563

               One problem with delimited ASCII  occurs  when  a  comma  is
          itself part of the field (suppose we had listed the players names
          last  name first, such as AARON, HENRY).  In this case the string
          must be enclosed in quotes (i.e., "AARON, HENRY") or it  will  be
          treated as two items of data.
               Dates also need special treatment.  When you append  a  date
          from  an  ASCII  file,  Pirouette  expects it to be in the format
          YYYYMMDD. That is, the date July  4,  1776  must  be  written  as
          17760704 in order to be appended properly.
               Logical  fields  may  be  listed  as T,t,Y,y for affirmative
          values, and F,f,N,n for negative values.

               Once you have designated the format of your data,  you  must
          indicate which fields will be receiving the data.  At this point,
          a  window will appear which accepts up to twenty field names. (As
          an alternative to typing in the field names, <Alt-L> will display
          a list of the fields in the active database for your  selection.)
          When  you  have selected all the desired fields, press <PgDn> and
          the append process will begin.
               When   Pirouette   is  through appending, a tone will sound,
          and you will be returned to the Input Window.  The appended  data
          is then a permanent part of your database.


          FILTER data <Alt-F>

               The  filter  command  causes  Pirouette to behave as if only
          certain records in  the  database  were  present;  namely,  those
          conforming   to   the   filter   condition.    This   command  is
          particularly important because it works with the Update and Purge
          commands.
               To illustrate, suppose we  open  the  ROLODEX  and  set  the
          filter condition as:

                                     STATE="CA"

               Pirouette will behave as if the database contains  only  the
          records  of people who live in California.  This filter condition
          will stay in effect until you either close that database  or  use
          <Alt-F> to explicitly remove the filter.
               For  more  information  about  formulas which can be used as
          filter conditions, see Appendix B, Functions and Formulas.
               Whenever a filter condition is in effect,  the  word  Filter
          will appear in the top left corner of the screen.



                                        -28-






          PURGE database <Alt-P>

               The  Purge command is used to delete a group of records from
          the  database,  in  contrast  to  Kill, which eliminates only one
          record at a time.
               Purge  works closely with the Filter command.  Once a Filter
          has been set, Purge deletes all records which do  not  meet  that
          filter  condition.   For  example,  if  the  filter  condition is
          LAST_NAME<>"JONES" and a Purge command is issued, Pirouette  will
          delete  all  records  where  the  last name is JONES.  Since this
          offers the potential to delete large portions of  your  database,
          you  will  be  asked  for  confirmation  before  the  command  is
          executed.

               TIP:  Because Purge works with a Filter,  you  can  set  the
               Filter  condition  and  then Browse your database to be sure
               that the Filter  is  correct  before  you  issue  the  Purge
               command.  This method provides a high degree of protection
               against accidental deletion of data.


          UPDATE records <Alt-U>

               On some occasions, you may wish to  change  the  information
          in  a  certain field for an entire group of records.  To do this,
          first activate the appropriate Filter, so you  are  working  with
          only  the  appropriate  "sub-set"  of  your database.  Then press
          <Alt-U>.
               You  will  be prompted for the name of the field you wish to
          update.  You will also be asked for a formula to  substitute  for
          the current value.
               Frequently,  this "formula" may be a single, constant value.
          If the field in question is a character field, simply enclose the
          desired value in quotes (e.g., "SMITH").
               A more complicated example  would  be  when  you  wished  to
          transform  existing  character  data which is currently in upper/
          lowercase, to all uppercase.  If the field were called LAST_NAME,
          you would update the field, with the following formula.

                                  UPPER(LAST_NAME)

               Again, for more information on using formulas, see  Appendix
          B, Functions and Formulas.











                                        -29-

```
{% endraw %}

## MANUAL6.TXT

{% raw %}
```





                           WORKING WITH MULTIPLE DATABASES


               When  dealing with several interrelated databases, you often
          need to consult one while you're working with another.  Pirouette
          offers a way to  do  this  without  exiting  to  the  main  menu.
          Moreover,  using  this  feature,  Pirouette will automatically go
          directly to the record  you  need,  without  the  extra  step  of
          performing a Search.


          OPEN another database <Alt-O>

               When  you  press  <Alt-O>,  a  list of the .DBF files in the
          current directory will appear.  The current  database  will  also
          appear   on  this  list and may be selected.  You can, in effect,
          open the same database more than once.  This allows you  to  view
          several complete records from the same database at the same time,
          as  an  alternative to Browse.  This can be very helpful when you
          think your database might contain duplicate records.
               If you select a different database, however,  one  of  three
          things will happen:

               o  You will be told that there are no common fields between
                  the two databases;

               o  You will be told that there is more than one common
                  field and asked to select one;

               o  Pirouette will find only one linking field and attempt
                  to open the new input window.

               Assuming that Pirouette does attempt to open the new window,
          there is no guarantee that it will find a corresponding record in
          the new database.  Let's examine the following situation.
               Open  the  PAYEES database.   Move to the record for "DeMars
          & Tilley". Press <Alt-O> and open the CALENDAR database.
               If there were no checks issued to  "DeMars  &  Tilley",  you
          would  receive the message "No Corresponding Records Found".  You
          are also asked if you wish to create a new record.  If you  reply
          "Y",  a  new  record  will  automatically be created in which the
          PAYEE_NAME is "DeMars & Tilley".
               If  a  corresponding record IS found, the new window will be
          opened with that record displayed.  Also, a filter will be placed
          on the data, so that only the matching record(s) are  immediately
          available.   You  may  use  <Alt-F>  to  remove  this  filter, if
          desired.







                                        -30-






               HINT:  Using the Open command in this manner is an
               alternative method of establishing a filter condition.
               In many instances, it is quicker and simpler than using
               the Filter command and explicitly typing out a filter
               condition.  This technique is often referred to as
               "zooming" in on a record.

               Another  result  of  moving  from one database to another is
          that the common value (i.e., the value of the field  which  links
          the  two  records)  will  be  written into Buffer 0.  This can be
          helpful if you wish to create several corresponding records.


          Closing a Window

               If you have opened a second window and you wish to return to
          the first window, press <Esc> twice in rapid succession.  The
          current window will be closed and you'll be returned to the one
          immediately beneath it.
               Pirouette allows you to open up to 25 windows.


































                                        -31-

```
{% endraw %}

## MANUAL7.TXT

{% raw %}
```





                                 GENERATING REPORTS


               Pirouette's report generator is extremely powerful, enabling
          you  to  design  virtually  any report you wish.  You can declare
          "zones" for the information you wish to print, such as at the top
          of every page.  You can also work with several databases  in  the
          same  report,  "looking  up" information from database other than
          the primary one when necessary.

               When  you select GENERATE Reports from the opening menu, you
          will then be given a choice of the existing report specifications
          and "New Spec".  If you select "New Spec", you will  be  prompted
          for  a  file  name.   Spec  file  names  follow the same rules as
          database file names (see Creating a Database).
               Regardless of whether you select an existing spec or  a  new
          one, the Report Parameters window will appear.


          REPORT PARAMETERS

               The  Report  Parameters window is where you specify both the
          physical information about the printer and paper size you will be
          printing on, and the scope of the  information  to  be  included.
          The specific parameters are as follows:

               PRIMARY DATABASE.  One way to think of the primary database
               is as the one which will be contributing most of the
               information to the report.  A more literal definition would
               be "the database containing the fields you wish to sort on."
               To see a list of the available database files, press
               <Alt-L>.

               SORT FIELDS.  Pirouette allows you to declare up to three
               fields on which to sort your primary database, for the
               purposes of this report.  To see a list of the fields in
               your primary database, press <Alt-L>.

               FILTER CONDITION.  This is a logical expression, just like
               that used when filtering the database under VIEW and Revise
               Data. See Appendix B for rules and regulations about these.

               PAGE LENGTH.  The number of lines on the page.  This will
               usually be 66, unless you're on a laser printer, in which
               case it will probably by 60.  If you're printing labels, it
               will depend upon the size of the label.  1" labels will be
               6 lines long, 1.5" labels will be 9 lines, and so on.

               TOP & BOTTOM MARGINS.  The number of lines to use as margins
               on the top and bottom of the page/label.



                                        -32-






               PAGE  WIDTH.   The  total  number  of  spaces across on your
               paper. This will, of course, depend on  the  size  type  you
               use.   If  you  are  printing  10 cpi (characters per inch),
               normal size paper will give you a width of  85.   If  you're
               printing 12 cpi, you width will be 102.

               LEFT & RIGHT MARGINS.  The number of blank spaces on either
               side of your report.  Again, this will depend upon the size
               type you use.  At 10 cpi, a left margin of 15 will give you
               an actual margin of 1.5".

               PRINTER SETUP STRING.  A character string to initialize your
               printer to the desired type style.  This is specified in the
               same way that Lotus specifies setup strings: \### signifies
               ASCII character ###, other characters signify themselves.
               For instance, if you wished to print bold face on an Epson
               printer,  you  would  want  to  send  the printer the Escape
               character (ASCII code 27),  followed  by  a  capital  letter
               "G".  This would be specified as:

                                          \027G

               More involved printer control is possible within the report
               itself; something which is discussed later in this chapter.

               OUTPUT DESTINATION.  The name of a DOS device or file.
               Allowable devices are PRN, the parallel ports LPT1, LPT2,
               and LPT3, and the serial ports COM1, COM2, and COM3.
               (Depending upon the configuration of your system, not all of
               these ports will be available.)  To send the output to a
               text file, just specify the name of the file, including the
               drive and directory.

               After you have specified all applicable parameters  for  the
          report,  just  press  <Alt-G> to Go -- that is, to begin printing
          the report.  The report  can  be  aborted  during  generation  by
          pressing <Ctrl-Break>.
               Before you run the report, though, you will probably want to
          design it; i.e., declare the items you want included.  This topic
          consumes the balance of this chapter.


          THE REPORT EDITING WINDOW

               To create the actual report design (or Edit the layout of an
          existing  report),  press  <Alt-E>  from  the  Report  Parameters
          window.  This will open the Editing Window.
               The  Editing  Window  has  few  differences  from   the
          Formatting  Window  used  to  create the input screens.  One
          difference is that the window scrolls  both  vertically  and
          horizontally,  so  that  you  can  create  reports which are
          longer or wider than the computer screen.  There are also  a
          few additional commands available.

                                        -33-






               The  cursor  control  commands,   however,   are   virtually
          identical to those in the input window, with the exception of the
          added "scrolling" keys:

                          Editing Window - Navigation Keys

                                  Key      Result
                           ----------      ----------
                          cursor Down      down one line
                            cursor Up      up one line
                          cursor Left      left one column
                         cursor Right      right one column
                            Ctrl-Left      scroll left ten columns
                           Ctrl-Right      scroll right ten columns
                                 PgDn      down ten lines
                                 PgUp      up ten lines
                                 Home      move to first column
                                  End      move to last column
                                  Tab      left 15 columns
                                space      insert one column
                                  Del      delete one column
                           Ctrl-Enter      insert a new line
                               Ctrl-Y      delete the current line


          change print ZONE <Alt-Z>

               As   mentioned  above,  each  line  of  the  report  has  an
          associated "Print Zone".  These zones are indicated to  the  left
          of  each  line  in  the report.  Print Zones allow you to control
          when each line is printed.  The choices are:

                  Intro     Print only at the beginning
                            of the report

                  Header    Print at the top of each page

                  Body      Print once for every specified
                            record

                  Footer    Print at the bottom of each page

                  Sub-3     Print whenever the tertiary sort
                            field changes in value

                  Sub-2     Print whenever the secondary sort
                            field changes in value

                  Sub-1     Print whenever the primary sort
                            field changes in value

                  Total     Print at the end of the report


                                        -34-






               Pirouette will allow the zones to appear only in  this  same
          order,  although  you  may  omit  any given zone for a particular
          report.  In fact, the way to get a summary report,  showing  only
          totals with no detail, is to omit body lines from your report.


          enter TEXT <Alt-T>

               If  you  wish to add text to your report, move the cursor to
          the desired location and press <Alt-T>.


          LIST data fields <Alt-L>

               To include a data field on your report, move the  cursor  to
          the  desired location and press <Alt-L>.  A list of the databases
          in the primary database will appear.  If you select one of these,
          a block will be places on the window to indicate where the  field
          will be printed.
               You  can also pick one of several other items from this List
          window.  These items are as follows:

               Page #.  Selecting Page # will make the page number of the
               report appear.  This is used primarily in headers and
               footers.

               PgBreak.  PgBreak creates a page break in your report.  This
               is generally used in "Subtot" lines when you wish each group
               of records to appear on a separate page.

               Count.  When placed in a Subtot line, Count prints the
               number of records in the group which was just printed.  When
               placed in a Totals line, Count displays the total number of
               records included in the report.

               Lookup.  The final option allows you to look up a value from
               another, related database.  When you select "Lookup", a
               window will pop up listing the other databases in the
               current DOS directory.  When you select one of these,
               another window will open, listing the fields in that
               database.  You will observe that the second database also
               offers the option of "Lookup", enabling you to repeat the
               process.  In this way, you can look up one database, which
               looks up another, which may yet look up another.  One of
               Pirouette's unique features is that it allows you to use
               data which is up to three levels distant from your primary
               database.






                                        -35-






          enter a CALCULATION <Alt-C>

               Just as you can display the result of a calculation  on  the
          input window, you can display the result of a calculation as part
          of  the  report.   Report calculations are even more powerful, in
          fact, because you can create formulas using fields  from  several
          databases.
               As  you build your formula, you can press <Alt-L> to see the
          same field list  described  above  --  including  the  choice  of
          "Lookup".  This will place a Lookup() function into your formula.
          (Don't  worry about the syntax of this function, just use <Alt-L>
          whenever you need to include it.)
               In general, though, report calculations just follow the same
          rules as all Pirouette expressions (described in Appendix B).

               HINT:  If you wish to include the date on your report, just
               create a calculation consisting of DATE().  This function
               returns your computer's system date in the format MM/DD/YY.
               If you'd like the date written out, use a more complicated
               formula:

                   STR(DAY(DATE()),2) + " " CMONTH(DATE()) + " " +
                                 STR(YEAR(DATE()),4)

               You can use another function, TRANSFORM(), to format numeric
               output.  See Appendix B.


          EDIT an object <Alt-E>

               To edit an existing piece of text or a calculation, move the
          cursor  to  the  appropriate  piece  of  text  and press <Alt-E>.
          Everything in the report window, incidentally, is either text  or
          a  calculation.   When  you press <Alt-L> to include an  isolated
          field,  the  field  is  still regarded as a calculation, albeit a
          simple one.


          KILL an object <Alt-K>

               To remove an existing  field  or  piece  of  text  from  the
          report, move the cursor to that object and press <Alt-K>.


          DRAG an object <Alt-D>

               To  move  an  existing  field  or  piece  of text to another
          location, move the cursor into the object and press <Alt-D>.  The
          object  will  begin  to  flash.   Move  the cursor to the desired
          location and press <Enter>.  You may use <Ctrl-Left>  and  <Ctrl-
          Right> to scroll the screen left or right during this process.



                                        -36-






          Totals and Subtotals.

               Numeric  fields or calculations show a special behavior when
          placed in a Subtot or Totals line.  What appears on the report is
          not the value for the current record, but a subtotal or total for
          the designated field.
               If a non-numeric field is placed in a Totals or Subtot line,
          the value displayed will simply be the value of the last record.


          QUIT report edit <Alt-Q>

               When you are satisfied with the appearance of  your  report,
          press <Alt-Q>.  This will exit the editor and return you  to  the
          Report Parameters window.



          GETTING FANCY

               Using   the   CHR()  function,  it  is  possible  to  create
          remarkably   complex   reports,   utilizing   different    fonts,
          bold-facing, italics, etc.  The only  real  limitations,  really,
          are your level of effort and imagination.
               Suppose  you  wish to have your Intro in bold, with the rest
          of the report in regular typeface.  If you're using an  Epson  or
          Epson-compatible  printer,  just  create  a  Calculation  at  the
          beginning of the Intro, using the following expression:

                                     CHR(27)+"G"

               Because Esc-G is the  character  sequence  which  causes  an
          Epson  printer  to  begin  printing  double-strike,  all  further
          characters will be printed bold.  Then, at the end of  the  Intro
          section,  create  another calculation to cancel the double-strike
          printing.  The character sequence for this is Esc-H, which  would
          be coded as:
                                     CHR(27)+"H"

               Now  let's  take  it  one  step further.  Suppose you have a
          field (PROFIT, let's say) which you wish to print  boldface  when
          it's  negative,  and in regular type when it's positive.  You can
          use the IF() statement in combination with CHR(), like so:

              IF(PROFIT<0, CHR(27)+"G"+STR(PROFIT)+CHR(27)+"H", PROFIT)

               If  the PROFIT field is less than zero, this expression will
          print the Esc-G (to begin double-strike), followed by  the  value
          of  the field PROFIT (converted to a character string, to avoid a
          data  type  conflict),  followed  by   Esc-H   (to   cancel   the
          double-strike).  If  PROFIT is greater than or equal to zero, the
          field PROFIT is printed with no special printer controls.


                                        -37-

```
{% endraw %}

## MANUAL8.TXT

{% raw %}
```





                               HOUSEKEEPING TASKS


               The  fourth  choice  from  the  opening  menu,  PERFORM
          Housekeeping Tasks, deals with file  management  operations.
          These  are things like copying and erasing files.  Each task
          is described below:


          Change Directory

               If  you  are  working  with  several  sets  of  related
          databases, you will probably wish to store them in different
          DOS  directories.   By  selecting  Change Directory, you can
          move  to  a  different  directory  while  within  Pirouette,
          without having to exit to DOS.
               If  you  are working on a two-floppy system and wish to
          change data diskettes, you will have to change from  B:\  to
          B:\.  This sounds silly, but it will force Pirouette to read
          the directory information from the new disk.


          Specify Program Path

               If   you   are  working  with  databases  in  different
          directories, another thing you will probably want to  do  is
          designate  a  program  path.   This enables you to place the
          help files (*.TXT) is a central location, such  as  C:\PIRO,
          and  be  able  to recall them even when the directory you're
          working in is different.


          Initialize Directory

               As mentioned  earlier,  every  DOS  directory  must  be
          initialized  before  it  can  be  used  by  Pirouette.   The
          initialization process creates two files called XXXX.DBF and
          XXXX.NTX,  which  are  used  to  monitor  the  relationships
          between the other database files.
               If Pirouette  ever  seems  to  be  displaying  peculiar
          behavior,  re-initialize the directory.  This will cause the
          XXXX.* files to be rebuilt, which will solve most  problems.
          Even if it doesn't provide a cure, it won't do any harm.


          Copy a Database

               This  task  copies not only the .DBF  and  .DBT  files,
          which  contains  your  data, but also the corresponding .WDW
          file, which contains information  on  how  to  display  that




                                        -38-






          file.   You  may  use  this  tool  to  copy your database to
          another disk or directory, or to create a duplicate of  your
          database under a different name.



          Erase a Database

               This tasks erases a .DBF  file  and  its  corresponding
          .DBT and .WDW files.


          Copy a Report Spec

               Enables you to copy or duplicate a report spec.


          Erase a Report Spec

               Erases an existing report spec.


































                                        -39-

```
{% endraw %}

## MANUAL9.TXT

{% raw %}
```





                                  APPENDIX A: MASKS

               Masks,  used for creating input restrictions, can consist of
          two parts: functions and template symbols.  Functions, which  act
          on  the entire field, are listed at the beginning of the template
          and are preceded  by  an  @  symbol.   Templates,  which  act  on
          specific  characters  in  the  expression being formatted, follow
          this  list  of  functions.   Templates  for  numeric  data   also
          determine the length of the display.
               Seperate functions and templates with a space; e.g., @! XXX.


                              List of Function Symbols
                              ------------------------

                       C   Displays CR after a positive number
                       X   Displays DB after a negative number
                       (   Displays negative numbers in parentheses
                       B   Left justifies input
                       Z   Displays numeric zeros as blanks
                       D   Displays dates in American format
                       E   Displays dates in European format
                       A   Limits display to alphabetic characters
                       !   Displays all letters as uppercase letters
                       R   Characters in template which are not template
                           symbols are added to the data for display
                           only  and  are  not considered part of the
                           input value
                       Sn  Limits display size to n characters.  If the
                           item is larger than n, it will scroll
                           horizontally


                              List of Template Symbols
                              ------------------------

                       9   Allows digits 0-9; also allows + and - signs
                           for numeric data
                       #   Allows digits 0-9, blank, + and - signs
                       A   Allows alpha characters A-Z and a-z
                       L   Allows logical input only
                       Y   Limits input to Y, N, y, n for character data
                           and logical data
                       N   Limits input to A-Z, a-z, and 0-9
                       X   Allows any character
                       !   Displays lowercase letters as uppercase letters
                       $   Replaces leading zeros or blanks with $
                           (in numbers)
                       *   Replaces leading zeros or blanks with * (in
                           numbers)
                       .   Sets decimal position
                       ,   Displayed only if there is a digit to left
                           of the comma

                                        -A1-

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1747

     Volume in drive A has no label
     Directory of A:\

    CALENDAR DBF     10675   8-27-89   9:44p
    CALENDAR DBT       512   8-27-89   9:44p
    CALENDAR WDW      2061   8-27-89   9:45p
    CHECKREG DBF       333   8-28-89   5:07p
    CHECKREG DBT       512   8-28-89   5:05p
    CHECKREG WDW      1731   8-28-89   5:07p
    CK_TYPE1 SPC      1266   8-28-89   5:34p
    CK_TYPE2 SPC      1096   8-28-89   5:37p
    DAILY    SPC      1095   8-27-89   7:20p
    DIRECTRY SPC      1309   8-27-89   7:08p
    FILE1747 TXT      2073  12-19-89  11:07a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-01-80   1:22a
    LICENSE  BAT       132   8-27-89   9:44p
    LICENSE  TXT      6562   8-27-89   2:50p
    LISTS    DBF       212   8-27-89   6:53p
    LISTS    DBT       512   8-27-89   9:44p
    LISTS    WDW      1164   8-27-89   6:53p
    MANUAL   BAT       361   8-27-89   9:44p
    MANUAL0  TXT      9119   8-18-89  11:35a
    MANUAL1  TXT     10754   8-27-89   9:45p
    MANUAL10 TXT     16769   8-18-89  11:50a
    MANUAL11 TXT      5951   8-18-89   3:46p
    MANUAL2  TXT      6858   8-18-89  11:38a
    MANUAL3  TXT     16197   8-18-89  11:41a
    MANUAL4  TXT     18708   8-18-89  11:43a
    MANUAL5  TXT      8472   8-18-89  11:44a
    MANUAL6  TXT      3827   8-27-89   9:45p
    MANUAL7  TXT     16095   8-18-89  11:46a
    MANUAL8  TXT      2983   8-18-89  11:47a
    MANUAL9  TXT      2933   8-18-89  11:48a
    MLABELS  SPC      1108   8-27-89   7:14p
    MONTHLY  SPC      1111   8-27-89   9:44p
    OUTSTAND SPC      1187   8-28-89   5:22p
    PAID_TO1 SPC      1219   8-28-89   5:27p
    PAID_TO2 SPC      1160   8-28-89   5:30p
    PAYEES   DBF       225   8-28-89   5:06p
    PAYEES   DBT       512   8-28-89   5:01p
    PAYEES   WDW      1171   8-28-89   5:06p
    ROLODEX  DBF       563   8-27-89   6:57p
    ROLODEX  DBT      1046   8-27-89   9:44p
    ROLODEX  WDW      2480   8-27-89   6:57p
    TYPES    DBF       775   8-28-89   5:17p
    TYPES    DBT       512   8-28-89   4:58p
    TYPES    WDW       996   8-28-89   5:17p
           45 file(s)     164992 bytes
                          130048 bytes free
