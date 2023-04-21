---
layout: page
title: "PC-SIG Diskette Library (Disk #1309)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1309/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1309"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ROSEWOOD JOURNAL"

    ROSEWOOD JOURNAL is a sales journal and accounts receivable program
    designed for small-to medium-sized businesses.  It is especially
    suitable for businesses which record sales on serially-numbered
    invoices.  A variety of reports can be viewed or printed, including
    monthly and yearly sales, accounts receivable lists, and aged customer
    statements.  ROSEWOOD JOURNAL is an extension to your general ledger
    program, not a replacement for it.  ROSEWOOD JOURNAL also generates a
    special report which tells you the amounts and which accounts your
    sales, receipts, accounts receivable, and sales tax should be entered.
    
    ROSEWOOD JOURNAL is completely menu-driven and performs error checking
    on all data entries.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1309.TXT

{% raw %}
```
Disk No: 1309
Program Title: ROSEWOOD JOURNAL version 3.00
PC-SIG version: 1.1

ROSEWOOD JOURNAL is a sales journal and accounts receivable program
designed for small-to medium-sized businesses.  It is especially
suitable for businesses which record sales on serially-numbered
invoices.  A variety of reports can be viewed or printed, including
monthly and yearly sales, accounts receivable lists, and aged customer
statements.  ROSEWOOD JOURNAL is an extension to your general ledger
program, not a replacement for it.  ROSEWOOD JOURNAL also generates a
special report which tells you the amounts and which accounts your
sales, receipts, accounts receivable, and sales tax should be entered.

ROSEWOOD JOURNAL is completely menu-driven and performs error checking
on all data entries.

Usage:  Business.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $38.00

File Descriptions:

AUTOEXEC FIL  Data file.
CONFIG   FIL  Data file.
CUSTACCT DTA  Data file.
FEB88    DTA  Data file.
FILES    DOC  Text file.
HARDDISK BAT  Batch file to install program on a hard disk.
INITIAL  DTA  Data file.
INITIAL  HRD  Data file.
INITIAL  TWO  Data file.
JAN88    DTA  Data file.
JOURNAL  DOC  Documentation.
JOURNAL  EXE  Main program.
ORDER    FRM  Form file.
README   DOC  Introductory text file.
RECEIVE  DTA  Data file.
SOFTKEY  DTA  Data file.
SOFTKEY2 DTA  Data file.
TOTALS88 DTA  Data file.
TWODISK  BAT  Batch file to install program onto floppy disks.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FILES.DOC

{% raw %}
```








                                  LISTING OF FILES

               "JOURNAL.EXE" is the main program.

               "JOURNAL.DOC" The manual for Rosewood Journal.

               "README.DOC" a brief overview and instruction.

               "ORDER.FRM"  an  order  form  for  registering Rosewood
               Journal. Please use it.

               "TWODISK.BAT",    "INITIAL.TWO",    "CONFIG.FIL"    and
               "AUTOEXEC.FIL" are  all used for automatic installation
               on a two drive system.

               "HARDDISK.BAT" and "INITIAL.HRD" are used for automatic
               installation on a hard disk.

               "FILES.DOC" is the file that you are reading.

          Rosewood Journal generates its own data file names. After running
          the program, you will find several  files on  your data  disk (or
          the program disk if you are using the sample data). They are:

               "INITIAL.DTA"  is  a  file  containing  details  of the
               company for which the books are  being kept  as well as
               the disk  drives or  directories where  the program and
               data are kept and the starting month of  the business's
               fiscal year. This file is ALWAYS on the LOGGED drive.

               "SOFTKEY.DTA"  and  "SOFTKEY2.DTA"  are the files which
               contain  the  user-configured  softkey   data  for  the
               invoice entry and customer accounts modules.

               "RECEIVE.DTA" stores accounts receivable data.

               "CUSTACCT.DTA"   stores   names,   addresses,   account
               numbers, etc. for persons  and businesses  which owe or
               have owed you money.

               "monyr.DTA"  e.g.  JAN89.DTA  stores  details  of  each
               invoice entered in any  particular  month.  There  is a
               separate file for each month.

               "TOTALSyr.DTA"  e.g.  TOTALS89.DTA  stores  the summary
               data for each month of any fiscal year.

               If you export data for  use  in  other  programs, files
               with  extensions  of  ".FX",  ".TX",  ".MM",  ".SF" and
               ".PRN" will be generated depending on the data exported
               and  the  format  used.  See  the section on "Exporting
               Data" for more information.






               In addition to the above  files,  two  other  files are
               produced after  using the  "End of period housekeeping"
               option   from   the   "Utilities"    Menu.   They   are
               "RECEIVE.OLD"  and   "CUSTACCT.OLD".  These  files  are
               generated to preserve old  data  before  the  files are
               purged of unused data at year-end.





```
{% endraw %}

## JOURNAL.DOC

{% raw %}
```















                                  ROSEWOOD JOURNAL


                                    VERSION 3.00


                           O P E R A T I N G   M A N U A L





                                  ROSEWOOD SOFTWARE

                                 BOX 2070  STATION B

                                SCARBOROUGH, ONTARIO

                                       M1N 2E5


                                   (416) 284-6119






                       COPYRIGHT (C) 1988-89 ROSEWOOD SOFTWARE
           
                                AND BERT CHRISTENSEN

                                 ALL RIGHTS RESERVED












                                  ROSEWOOD JOURNAL


                                  TABLE OF CONTENTS

          WARRANTY DISCLAIMER  . . . . . . . . . . . . . . . . . . . .    4

          LICENSE  . . . . . . . . . . . . . . . . . . . . . . . . . .    5

          REGISTRATION INFORMATION . . . . . . . . . . . . . . . . . .    6

          THIS MANUAL  . . . . . . . . . . . . . . . . . . . . . . . .    7

          TYPOGRAPHICAL CONVENTIONS  . . . . . . . . . . . . . . . . .    7

          DECISION LINES . . . . . . . . . . . . . . . . . . . . . . .    7

          OVERVIEW . . . . . . . . . . . . . . . . . . . . . . . . . .    7

          SYSTEM REQUIREMENTS  . . . . . . . . . . . . . . . . . . . .    8

          DEFINITIONS  . . . . . . . . . . . . . . . . . . . . . . . .    8
               Journal . . . . . . . . . . . . . . . . . . . . . . . .    8
               Invoice . . . . . . . . . . . . . . . . . . . . . . . .    8
               Ledger  . . . . . . . . . . . . . . . . . . . . . . . .    8
               Statement . . . . . . . . . . . . . . . . . . . . . . .    8

          GETTING STARTED  . . . . . . . . . . . . . . . . . . . . . .    9

          CONFIG.SYS . . . . . . . . . . . . . . . . . . . . . . . . .    9

          USING THE PROGRAM WITH YOUR OWN DATA . . . . . . . . . . . .    9
               INSTALLATION  ON   A  TWO   FLOPPY  DISK  SYSTEM  USING
                    "TWODISK.BAT"  . . . . . . . . . . . . . . . . . .    9
               MANUAL INSTALLATION IN A ONE OR TWO DRIVE SYSTEM  . . .   10
               INSTALLATION ON A HARD DISK USING "HARDDISK.BAT"  . . .   10
               MANUAL INSTALLATION ON A HARD DISK  . . . . . . . . . .   10
               AFTER ROSEWOOD JOURNAL IS INSTALLED . . . . . . . . . .   11

          LISTING OF FILES . . . . . . . . . . . . . . . . . . . . . .   11

          NOTE ON NUMERICAL ENTRIES  . . . . . . . . . . . . . . . . .   12
               Credit notes  . . . . . . . . . . . . . . . . . . . . .   12

          NOTE ON CUSTOMER ACCOUNT NUMBERS . . . . . . . . . . . . . .   13

          DETAILED PROGRAM INSTRUCTIONS  . . . . . . . . . . . . . . .   13

          MAIN MENU  . . . . . . . . . . . . . . . . . . . . . . . . .   13
               Enter Invoice Data  . . . . . . . . . . . . . . . . . .   13
               Change Invoice Data . . . . . . . . . . . . . . . . . .   15
               Enter Payments on Account . . . . . . . . . . . . . . .   15

                       Copyright (C) 1988-89 Rosewood Software      Page 2







                                  ROSEWOOD JOURNAL


               Accounts Receivable Menu  . . . . . . . . . . . . . . .   16
               Reports Menu  . . . . . . . . . . . . . . . . . . . . .   16
               Utilities Menu  . . . . . . . . . . . . . . . . . . . .   16
               Exit Program  . . . . . . . . . . . . . . . . . . . . .   16

          ACCOUNTS RECEIVABLE MENU . . . . . . . . . . . . . . . . . .   17
               View or Print Individual Accounts . . . . . . . . . . .   17
               Print ALL Statements for Month  . . . . . . . . . . . .   17
               Establish New Customer Accounts . . . . . . . . . . . .   17
               Modify Customer Data  . . . . . . . . . . . . . . . . .   18
               List Customer Accounts  . . . . . . . . . . . . . . . .   18
               Reports Menu  . . . . . . . . . . . . . . . . . . . . .   18
               Exit to Main Menu . . . . . . . . . . . . . . . . . . .   18

          REPORTS MENU . . . . . . . . . . . . . . . . . . . . . . . .   18
               Monthly Report  . . . . . . . . . . . . . . . . . . . .   18
               Yearly Report . . . . . . . . . . . . . . . . . . . . .   18
               Accounts Receivable List  . . . . . . . . . . . . . . .   19
               Payments on Account List  . . . . . . . . . . . . . . .   19
               General Ledger Report . . . . . . . . . . . . . . . . .   19
               Accounts Receivable Menu  . . . . . . . . . . . . . . .   19
               Exit to Main Menu . . . . . . . . . . . . . . . . . . .   19

          UTILITIES MENU . . . . . . . . . . . . . . . . . . . . . . .   20
               Change Softkey Settings . . . . . . . . . . . . . . . .   20
               Re-Initialize (Company Name etc.) . . . . . . . . . . .   20
               DOS Functions . . . . . . . . . . . . . . . . . . . . .   21
               End of Period Housekeeping  . . . . . . . . . . . . . .   21
               Print Labels  . . . . . . . . . . . . . . . . . . . . .   22
               Export Data for Use in Other Programs . . . . . . . . .   22
               Exit to Main Menu . . . . . . . . . . . . . . . . . . .   23

          FILE LENGTHS AND NAMES IN ROSEWOOD JOURNAL . . . . . . . . .   23

          INTEGRATING YOUR PREVIOUS RECEIVABLE FILES . . . . . . . . .   24

          PROGRAMMING DETAILS  . . . . . . . . . . . . . . . . . . . .   24

          CHANGES AND ENHANCEMENTS . . . . . . . . . . . . . . . . . .   25

          SHAREWARE  . . . . . . . . . . . . . . . . . . . . . . . . .   25









                       Copyright (C) 1988-89 Rosewood Software      Page 3







                                  ROSEWOOD JOURNAL


















                                 WARRANTY DISCLAIMER



          Rosewood Software makes  no  warranty  of  any  kind,  express or
          implied,   including   without   limitation,  any  warranties  of
          merchantability and/or fitness for a particular purpose. Rosewood
          Software  shall  not  be  liable for any damages, whether direct,
          indirect, special,  or consequential,  arising from  a failure of
          this  program  to  operate  in  the  manner  desired by the user.
          Rosewood Software shall not be liable for any  damage to  data or
          property which may be caused directly or indirectly by use of the
          program.

          IN NO EVENT WILL ROSEWOOD  SOFTWARE  BE  LIABLE  TO  YOU  FOR ANY
          DAMAGES,  INCLUDING  ANY  LOST  PROFITS,  LOST  SAVINGS  OR OTHER
          INCIDENTAL OR CONSEQUENTIAL DAMAGES  ARISING OUT  OF YOUR  USE OR
          INABILITY  TO  USE  THE  PROGRAM,  OR  FOR ANY CLAIM BY ANY OTHER
          PARTY.















                       Copyright (C) 1988-89 Rosewood Software      Page 4







                                  ROSEWOOD JOURNAL


                                       LICENSE

          Rosewood Journal  is Copyright  (C) 1988-89  by Rosewood Software
          and Bert Christensen.

          Rosewood   Journal   is   distributed  under  the  user-supported
          Shareware concept. Non-registered users  of Rosewood  Journal are
          granted a  limited license  to use  Rosewood Journal  for a trial
          period in order to determine its suitability for  their purposes.
          Any  use  of  non-registered  copies  of  Rosewood  Journal  by a
          business, organization, or any kind of institution is forbidden.

          Registering a copy of Rosewood Journal allows a  user to  make as
          many  copies  of  Rosewood  Journal  as  desired,  and  use it on
          various  machines,  but  the  same  registered  copy  of Rosewood
          Journal may  not be  in use  on more than one machine at the same
          time.

          No user may modify Rosewood Journal in any way, including but not
          limited  to  decompiling,  disassembling,  or  otherwise  reverse
          engineering the program.

          All users are granted a license to copy Rosewood Journal  for the
          trial use  of others,  subject to the above restrictions and also
          the following:

               Rosewood  Journal  must  be  copied  in  absolutely un-
               modified form, including all program files and complete
               documentation;

               Rosewood Journal may not  be  included  with  any other
               product for any reason whatever;

               No  licensee  may  accept  or request a charge or other
               payment for Rosewood journal.

          Operators of electronic bulletin board systems  may post Rosewood
          Journal for  downloading by their users only as long as the above
          conditions are met.

          Distributors of  public  domain  or  user-supported  software may
          distribute  copies  of  Rosewood  Journal  subject  to  the above
          conditions only after obtaining written permission  from Rosewood
          Software. Such  permission is  usually granted;  please write for
          details. All non-profit organizations  or groups  are exempt from
          this restriction.  In any  case, no charge may be made for a disk
          containing Rosewood Journal except for a disk handling  charge of
          up to $12.


                       Copyright (C) 1988-89 Rosewood Software      Page 5







                                  ROSEWOOD JOURNAL


                              REGISTRATION INFORMATION

          Rosewood Journal  is not  in any  way free  software. If you have
          tried Rosewood  Journal  and  have  decided  that  it  suits your
          purposes,  please  register.  Continued  use  of Rosewood Journal
          beyond a trial period is an infringement of copyright laws.

          Registered users will receive notices of major updates and of any
          new  products  which  may  be  introduced  by  Rosewood Software.
          Registered users will receive preference when requesting support.

          Registration costs $38 US or $45  Canadian. Upon  receipt of your
          registration  fee,  a  disk  containing the latest version of the
          program and the documentation will be  mailed to  you. Evaluation
          disks which do not include registration may be ordered for $10 US
          or $12 Canadian. Ontario residents please add 8% sales tax. Write
          for information on quantity purchases.

          When ordering,  please print  and use the file "Order.frm", which
          was included on your distribution disk,  or simply,  include your
          name,  address,  company  name,  and your telephone number, along
          with a cheque or money order to:

                              Rosewood Software
                              Box 2070 Station B
                              Scarborough, Ontario M1N 2E5

          Cheques in US dollars must  be  drawn  on  US  banks.  Cheques in
          Canadian dollars must be drawn on Canadian banks.
          C.O.D. orders are not accepted.


          Thank you for supporting Rosewood Software and Shareware.

















                       Copyright (C) 1988-89 Rosewood Software      Page 6







                                  ROSEWOOD JOURNAL


                                     THIS MANUAL

          This manual is designed to be succinct. This means that not every
          little, obvious command such  as "Send  Output to  Screen <S>, or
          Printer <P>"  will be  described in detail. This keeps the manual
          short and easier to read.

                              TYPOGRAPHICAL CONVENTIONS

          Keyboard commands such as  "Enter", "Esc",  etc. are  enclosed in
          angle brackets  <>. When  instructed to  enter "Esc" for example,
          the manual and the program show  the  command  as  <Esc>.  Do not
          enter the  angle brackets. They are there simply to tell you that
          a  keyboard  entry  is  expected.  The  program  itself  is  case
          insensitive. You can enter any combination of upper or lower case
          characters.
                                   DECISION LINES

          A "decision line" is a line  (or more)  of text,  generally at or
          near the  bottom of the screen, which prompts you for a decision.
          For example, you may see a  line  which  says,  "<Esc>  to abort.
          <Enter>  to  continue".  In  Rosewood  Journal,  this is called a
          "decision line".

                                      OVERVIEW

          Rosewood Journal  is  a  sales  journal  and  accounts receivable
          program  suitable  for  small  to  medium sized businesses. It is
          especially suitable for businesses which record sales on serially
          numbered invoices. A variety of reports can be viewed or printed,
          including monthly and yearly  sales,  accounts  receivable lists,
          and aged  customer statements.  Rosewood Journal is an adjunct to
          your general ledger program, not a  replacement for  it. Rosewood
          Journal generates  a special  report which  tells you the amounts
          and to which accounts  your sales,  receipts, accounts receivable
          and sales  tax should be entered. Rosewood Journal is menu driven
          and  designed  to  minimize  keystrokes.  Rosewood  Journal  is a
          friendly  program.  It  will  complain,  nicely,  via beeps and a
          refusal to continue if you enter  inappropriate data  by mistake.
          In some  cases, it  will even correct your spelling (try entering
          "Febuary" when you are asked to enter the name of a month).









                       Copyright (C) 1988-89 Rosewood Software      Page 7







                                  ROSEWOOD JOURNAL


                                 SYSTEM REQUIREMENTS

          Rosewood Journal requires the following minimum configuration:

               IBM or compatible computer
               MS/PC-DOS 2.00 or later
               1 360K floppy drive, at the very minimum 
               320K RAM
               Printer if you wish printed reports and statements.

          Rosewood Journal will make good use of:

               Another drive (360K, 1.2M, 5", 3.5",  hard drive,  ram disk)
               Laser printer (for nicer customer statements).

          In  short,  Rosewood  Journal  should  work  on most MS-DOS based
          computers!

          Some maximums:

               Maximum individual invoice amount is $99,999.99
               Maximum yearly sales amount is $9,999,999.99
               Maximum number of entries per year is dependent on disk
                    storage.

                                     DEFINITIONS

          During  the  testing  phase  of  this  program,  some people were
          confused by some of  the terms  used in  Rosewood Journal  and in
          bookkeeping generally. Therefore, some dictionary definitions are
          included  from  Webster's   New   Twentieth   Century  Dictionary
          (unabridged)1978

               Journal, n,  in bookkeeping,  (a) a daybook; (b) a book
               of original entry, used,  in  the  double-entry system,
               for  recording  all  transactions with an indication of
               the special accounts to which they belong.

               Invoice, n, an itemized  list  of  goods  shipped  to a
               buyer,  stating  quantities,  prices, shipping charges,
               etc.

               Ledger, n, in bookkeeping, the book  of final  entry in
               which  a  record  of  debits,  credits,  and  all money
               transactions is kept.

               Statement,  n,  an  abstract  of  a  financial account,
               especially of money due.


                       Copyright (C) 1988-89 Rosewood Software      Page 8







                                  ROSEWOOD JOURNAL


                                   GETTING STARTED

          IMPORTANT.  WHEN  INSTALLING  THIS  PROGRAM  IN  ANY MODE, FLOPPY
          DISKS OR  HARD DRIVE,  YOUR "CONFIG.SYS"  FILE MUST  HAVE A LINE,
          "FILES=15"  AND,   OPTIONALLY,  A   LINE  "BUFFERS=12".  IF  YOUR
          "CONFIG.SYS" FILE DOES NOT HAVE THE  "FILES=15" LINE  THE PROGRAM
          WILL,  AT  SOME  POINT  TERMINATE  WITH  A  "TOO MANY FILES OPEN"
          MESSAGE. SEE  YOUR  DOS  MANUAL  FOR  DETAILS  ABOUT "CONFIG.SYS"
          FILES.


          The best  way to  learn the  program is  to use  the sample files
          provided with it. The sample  files  concern  a  small fictitious
          business called "Ripley's Fine Catering". Only two months of data
          are supplied, January and  February 1989.  Here is  how to start,
          using the sample files:

          Copy "JOURNAL.EXE"  and all  files with the extension ".DTA" from
          the Rosewood Journal Distribution Disk or from the  archived file
          to a  disk formatted  with the "format/s" option. In other words,
          copy it to a formatted disk with system. Then place  this disk in
          drive  "A"  and  reboot  your  computer. At the "A>" prompt, type
          <JOURNAL>  (no  quotation  marks)  and  press  <ENTER>.  After an
          opening screen  and a  brief initialization,  you will  come to a
          "Main Menu". From there, explore the  menus and  the reports. Try
          entering some  data of  your own to the sample months or to other
          months. If you get confused (unlikely), consult the manual. Note,
          however, that  Rosewood Journal  does not write invoices; it only
          reports invoices and handles  accounts  receivable.  Also, "Gross
          Invoice Amount"  means the  total amount of the invoice INCLUDING
          sales tax.

                        USING THE PROGRAM WITH YOUR OWN DATA

          INSTALLATION ON A TWO FLOPPY DISK SYSTEM USING "TWODISK.BAT"

          Format one disk  with  DOS  system  installed  (Format  B:/s) and
          another  one  without  DOS  installed. Place the Rosewood Journal
          Distribution disk in drive  A and  the blank  disk formatted with
          DOS  system  in  drive  B.  At the "A>" prompt type <TWODISK> and
          press <ENTER>. All the necessary files from the Distribution Disk
          will be  transferred to  the disk in drive B. A "CONFIG.SYS" file
          which contains the  lines,  "FILES=15"  and  "BUFFERS=12"  and an
          "AUTOEXEC.BAT"  which  will  make  your program disk self-booting
          will be added as well.  If  the  installation  program  finds the
          latter two  files already on drive B, it will not overwrite them.
          Note, however, that if you supply  your own  "CONFIG.SYS" file it
          MUST contain  the line,  "FILES=15" (or more) or the program will
          eventually halt  with  a  "Too  many  files"  message.  After the

                       Copyright (C) 1988-89 Rosewood Software      Page 9







                                  ROSEWOOD JOURNAL


          installation is  complete, put  the disk  which is now in drive B
          into drive A. This is your program disk. Put the  blank formatted
          disk   in    drive   B    and   reboot    your   computer   using
          <Ctrl>+<Alt>+<Del>. If you didn't supply your  own "AUTOEXEC.BAT"
          file the  program will  start by  itself. If  you did supply one,
          type <JOURNAL> and press  <ENTER>. At  the Initialization Screen,
          fill in  the details  of your  company as asked but do not change
          the Program Drive or the Data Drive lines.  After this,  you will
          be at  the Main Menu and installation is complete. Later, you can
          edit the "CONFIG.SYS" and "AUTOEXEC.BAT" files to add other files
          and/or devices  which you  normally use  on your system such as a
          clock, etc.

          MANUAL INSTALLATION IN A ONE OR TWO DRIVE SYSTEM

          If you are experienced in installing programs, or you have only a
          single  drive   system,  simply  copy  "JOURNAL.EXE"  to  a  disk
          formatted with  system  and  containing  a  "CONFIG.SYS"  file as
          outlined above,  and reboot  the computer.  You will be presented
          with an Initialization Screen  for  which  you  should  enter all
          information requested.  It is  up to you to add an "AUTOEXEC.BAT"
          file and any other files or  programs, such  as a  clock that you
          normally use in your particular configuration.

          INSTALLATION ON A HARD DISK USING "HARDDISK.BAT"

          This  installation  option  will  install  Rosewood  Journal in a
          directory called "C:\ROSEJOUR". The installation program (and the
          main program) needs a copy of "COMMAND.COM" in the root directory
          of drive C and a "CONFIG.SYS" file as outlined above. If you want
          to install  Rosewood Journal in a directory called "C:\ROSEJOUR",
          place the Rosewood Journal Distribution Disk  in drive  A, and at
          the  A:\  prompt,  type  <HARDDISK> and press <Enter>. Follow the
          instructions as they come up on the screen. At the Initialization
          Screen, answer the questions about your company but do not change
          the Program Drive or the  Data  Drive  lines.  You  will  then be
          presented  with  the  Main  Menu. If you include "C:\ROSEJOUR" in
          your "PATH" command you will  be  able  to  reach  "JOURNAL" from
          anywhere on your hard disk.

          MANUAL INSTALLATION ON A HARD DISK

          Copy the  file "JOURNAL.EXE"  from the Rosewood Journal Distribu-
          tion Disk to a directory of  your choice.  From the  directory in
          which  you  installed  the  program,  type  <JOURNAL>  and  press
          <ENTER>. When you arrive at the Initialization Screen  answer the
          questions  about  your  company  and  type  the  drive and direc-
          tory(ies) for the Program Drive and the Data Drive. You then will
          be presented  with the Main Menu. The program will expect to find

                       Copyright (C) 1988-89 Rosewood Software      Page 10







                                  ROSEWOOD JOURNAL


          "COMMAND.COM" where the DOS environment lists it. If  you are not
          sure about  this, see your DOS manual under "SET". If you include
          the directory in  which  you  installed  Journal  in  your "PATH"
          command, DOS  will be  able to find Journal from anywhere on your
          hard disk.

          AFTER ROSEWOOD JOURNAL IS INSTALLED

          Put the  Rosewood Journal  Distribution Disk  in a  safe place in
          case  your  working  copies  get  damaged  in  some  way. This is
          probably a good time  to issue  the usual  warning. BACK  UP YOUR
          DATA DISKS  OFTEN, PREFERABLY  AFTER EACH USE. Without a back-up,
          all your data will have to be re-entered  should the  original be
          lost or corrupted. There, you've been warned!


                                  LISTING OF FILES

               "JOURNAL.EXE" is the main program.

               "JOURNAL.DOC" is this manual.

               "README.DOC" a brief overview and instruction.

               "ORDER.FRM"  an  order  form  for  registering Rosewood
               Journal. Please use it.

               "TWODISK.BAT",    "INITIAL.TWO",    "CONFIG.FIL"    and
               "AUTOEXEC.FIL" are  all used for automatic installation
               on a two drive system.

               "HARDDISK.BAT" and "INITIAL.HRD" are used for automatic
               installation on a hard disk.

               "FILES.DOC" is a listing of files similar to this one.

          Rosewood Journal generates its own data file names. After running
          the program, you will find several  files on  your data  disk (or
          the program disk if you are using the sample data). They are:

               "INITIAL.DTA"  is  a  file  containing  details  of the
               company for which the books are  being kept  as well as
               the disk  drives or  directories where  the program and
               data are kept and the starting month of  the business's
               fiscal year. This file is ALWAYS on the LOGGED drive.

               "SOFTKEY.DTA"  and  "SOFTKEY2.DTA"  are the files which
               contain  the  user-configured  softkey   data  for  the
               invoice entry and customer accounts modules.

                       Copyright (C) 1988-89 Rosewood Software      Page 11







                                  ROSEWOOD JOURNAL



               "RECEIVE.DTA" stores accounts receivable data.

               "CUSTACCT.DTA"   stores   names,   addresses,   account
               numbers, etc. for persons  and businesses  which owe or
               have owed you money.

               "monyr.DTA"  e.g.  JAN89.DTA  stores  details  of  each
               invoice entered in any  particular  month.  There  is a
               separate file for each month.

               "TOTALSyr.DTA"  e.g.  TOTALS89.DTA  stores  the summary
               data for each month of any fiscal year.

               If you export data for  use  in  other  programs, files
               with  extensions  of  ".FX",  ".TX",  ".MM",  ".SF" and
               ".PRN" will be generated depending on the data exported
               and  the  format  used.  See  the section on "Exporting
               Data" for more information.

               In addition to the above  files,  two  other  files are
               produced after  using the  "End of period housekeeping"
               option   from   the   "Utilities"    Menu.   They   are
               "RECEIVE.OLD"  and   "CUSTACCT.OLD".  These  files  are
               generated to preserve old  data  before  the  files are
               purged of unused data at year-end.



                                      WARNING!!

          As  with  most  programs  using  disk  files, it is of the utmost
          importance that data disks not be exchanged while  the program is
          running or  data may  be lost. Also, the program must be ended by
          the "Exit program" command from the Main Menu. 

                              NOTE ON NUMERICAL ENTRIES

               Rosewood Journal  expects a  decimal point  when one is
               required.  That  is,  an  amount such as 149.95 must be
               entered <149.95> and not <14995>. However,  if you have
               an amount  to enter  such as  149.00, it may be entered
               as <149>. Credit notes  (reverse entries)  are preceded
               by a  "-" (minus  sign). Rosewood Journal will complain
               with beeps and will refuse to go forward if you  try to
               enter  alphabetical  characters where numerical charac-
               ters are expected.



                       Copyright (C) 1988-89 Rosewood Software      Page 12







                                  ROSEWOOD JOURNAL



                          NOTE ON CUSTOMER ACCOUNT NUMBERS

               Rosewood Journal assigns  its  own  account  numbers to
               customer  accounts.  When  asked  to  'enter an account
               number or press zero for a  new account',  you must use
               either an  existing account  number as  shown, or press
               zero for a new account. After performing "End of period
               housekeeping"  (see  Utilities),  account numbers which
               you have decided to  delete  will  be  re-used  for new
               accounts in  order to  keep the  "Custacct.dta" file as
               small and  fast  as  possible.  Any  attempt  to assign
               arbitrary  account   numbers  of  your  own  will  make
               Rosewood  Journal  complain  or  will  cause  erroneous
               results.




                            DETAILED PROGRAM INSTRUCTIONS




                                      MAIN MENU
                           
                                                             
                                                             
                              1.  Enter Invoice Data         
                              2.  Change Invoice Data        
                              3.  Enter Payments on Account  
                              4.  Accounts Receivable Menu   
                              5.  Reports Menu               
                              6.  Utilities menu             
                              7.  Exit Program               
                                                             
                                                             
                                                             
          1. Enter Invoice Data
            
          To begin  entering new  invoices, press <1>, <e> or <E> (Rosewood
          Journal is not case sensitive). You then will be presented with a
          screen which  will ask  you the  month and  the year in which you
          want the invoices entered. The default  is the  current month and
          year if  you are just starting the program, or the month that you
          have been working on in  another  part  of  the  program.  If the
          current  date,  for  example,  is  October  1989,  these  are the
          defaults, and if that is the  month and  year you  wish, you only
          need press  <Enter> to  accept them.  If it is not the month that

                       Copyright (C) 1988-89 Rosewood Software      Page 13







                                  ROSEWOOD JOURNAL


          you wish, you can (a) type the name of the  month in  full (upper
          case or  lower case or a combination of both), (b) type the first
          three letters of the month, or (c) type  the number  of the month
          (1 for  January, 3 for March etc.). If the default year is wrong,
          type the year that you wish in full (1989 for example).

          The screen will then clear and  the "Enter  Invoices" screen will
          appear.

          First,  you  will  be  asked  to  "Enter Invoice Number or <X> to
          quit". There also will be a default invoice number shown.  If you
          have stumbled onto this screen by mistake, you only have to enter
          <X> and <Enter> to go back to the Main Menu.  If it  is the first
          time that  invoices have been entered for this month, the default
          number will be "1". If invoices already have been entered for the
          month, the default number will be the last invoice number entered
          plus one. If the default number  is not  the same  as the invoice
          number you  intend to  enter, you  should enter the proper number
          (up to  five digits,  numerical only).  If the  default number is
          correct,  you  only  need  to  press  <Enter>. Subsequent invoice
          numbers will be increased by  one  each  time,  thus  saving key-
          strokes. PLEASE  NOTE that  Rosewood Journal will not complain if
          you enter identical invoice numbers in  any given  month, but the
          report results  may be inaccurate. You may have identical invoice
          numbers in different months without incurring any problems.

          Then, you will be asked to  "Enter the  Invoice Date  (e.g. 15)".
          This means  the day  of the month. The default is "1" or the date
          of the last invoice entered in the current  session. Again, press
          <Enter> if  the date is correct. Rosewood Journal will not accept
          invalid dates such as February 30.

          Next, you  will be  asked to  "Enter Customer's  Name". Enter the
          customer's name  (last name first, please), or you may use one of
          the softkeys displayed at  the  bottom  of  the  screen.  See the
          section under  "Utilities" to  learn how  to set up these keys so
          that frequently used customer's names  can  be  entered  with one
          keystroke. Maximum length is 30 characters.

          Then you  will be  asked to  "Enter Gross  Invoice Amount". Gross
          invoice amount is the "bottom line", that is,  the amount  of the
          sale  INCLUDING  sales  tax.  After  entering  the  gross invoice
          amount, you will be asked to "Enter Sales Tax Amount".  Enter the
          amount of the sales tax or, if it is zero, simply press <Enter>.

          The final  invoice entry item is "Enter "R" if this Invoice is to
          be Added to Accounts Receivable". IF  ANY PORTION  OF THE INVOICE
          BEING  ENTERED  HAS  NOT  BEEN  PAID  IN FULL PRESS <R> (upper or
          lower case) and <Enter>.  See the  section on  "Enter Payments on

                       Copyright (C) 1988-89 Rosewood Software      Page 14







                                  ROSEWOOD JOURNAL


          Account" if  a partial  payment has  been made.  If, however, the
          invoice has been paid in full, then press <ENTER>. If you should,
          by mistake,  press any  other key  than <R>  or <Enter>, Rosewood
          Journal will complain.

          You will then be  presented  with  a  decision  line  as follows:
          "<Esc>  to  stop  entering  invoices. <Enter> to continue. <R> to
          redo". If you have  finished  entering  invoices  for  now, press
          <Esc>; if  you have  more invoices to enter, press <Enter>, or if
          you have made an entry error, press <R> to redo  the last invoice
          entered.

          When you  have finished entering invoices and have pressed <Esc>,
          each invoice for which you have pressed <R> for "receivable" will
          be presented  in turn  along with  a list of existing accounts. A
          decision line will be  displayed near  the bottom  of the screen:
          "<PgDn> to  scroll. <Enter>  when ready to enter account number".
          When ready to enter account number  (even if  the name  is not on
          the  list),  press  <Enter>.  You  will  then be asked, "To which
          account do you wish to put  invoice  number  xxxxx  or  press <0>
          (zero) to open a new account". If the invoice is to be charged to
          an existing account, enter the number  of the  account. If  it is
          to be  charged to a new account, press <0> (zero). If the invoice
          is charged to an existing account, the next "R" invoice will come
          up on  the screen  and the process is repeated until there are no
          more "R" invoices, at which time you will be returned to the Main
          Menu. If  you have  pressed <0> for a new account, another screen
          will come up and you will be asked to enter the name, address and
          phone number  of the  customer. After  entering this information,
          the next "R" invoice will come up, or, if there are no  more, you
          will be returned to the Main Menu.

          2. Change Invoice Data

          If you discover that you have made an error entering invoice data
          which was not corrected at the time of entry, you may correct the
          error  by  using  the  "Change  Invoice Data" option. You will be
          asked the month and year for  the invoice.  After entering these,
          you will  be shown  the list of invoices for that month. When you
          have found the invoice that you wish to change, press <Enter> and
          then  enter  the  invoice  number.  You  will  be  shown a screen
          containing the  invoice as  originally entered.  Make any changes
          required  and  the  data  will  be  updated.  NOTE: You may press
          <Enter> to accept any line as is, but you must  rewrite the whole
          line if any corrections are made to it.

          3. Enter Payments on Account



                       Copyright (C) 1988-89 Rosewood Software      Page 15







                                  ROSEWOOD JOURNAL


          This  option  serves  two  purposes.  The  first  is to enter any
          deposits  or  down-payments  entered  on  invoices  so  that  the
          accounts  receivable  will  show  the  proper  amount. The second
          purpose is to enter payments made to accounts, typically recorded
          in a receipt book. In either case, you will be asked to enter the
          month and year in which to enter the payment. A  screen will then
          come up  which will  ask for  the day  of the  month on which the
          payment was made, and the amount of that payment. The next screen
          will show a list of existing accounts with a decision line at the
          bottom which says, "<Esc> to  abort.  <PgDn>  to  scroll. <Enter>
          when  ready  to  enter  account  number". After pressing <Enter>,
          another decision line will appear, "To which account  do you wish
          to  credit  the  payment  on  account?  Or  press  <0>  (zero) to
          establish a new account". If the customer account already exists,
          enter the  appropriate number,  or if you need to establish a new
          account, press <0> (zero). If you press <0>, you will be asked to
          enter the  name, address  etc. of the customer. The amount of the
          payment will be entered to the  account which  was set  up by the
          program.



          4. Accounts Receivable Menu

          This option  transfers you  to the Accounts Receivable Menu which
          is detailed later.


          5. Reports Menu

          This option transfers you to the  Reports Menu  which is detailed
          later.


          6. Utilities Menu

          This option transfers you to the Utilities Menu which is detailed
          later.


          7. Exit Program

          Use this option when you  are  finished  using  Rosewood Journal.
          This is  the ONLY acceptable way to quit the program. Data may be
          lost if you reboot  or  turn  off  the  computer  without exiting
          through "Exit  Program". If you stumble into the exit screen, you
          will be given an opportunity to go back to the program.



                       Copyright (C) 1988-89 Rosewood Software      Page 16







                                  ROSEWOOD JOURNAL




                              ACCOUNTS RECEIVABLE MENU
                                        
                                                                 
                         1.  View or Print Individual Accounts   
                         2.  Print ALL Statements for month      
                         3.  Establish New Customer Accounts     
                         4.  Modify Customer Accounts            
                         5.  List Customer Accounts              
                         6.  Reports Menu                        
                         7.  Exit to Main Menu                   
                                                                 
                    

          1. View or Print Individual Accounts

          This option allows you to  view  (on  the  screen)  or  print (on
          paper)  an  individual  customer's  account  as of the end of any
          month that you choose. After entering the month and the year, you
          will be  presented with  the following  decision line: "Enter the
          number that you wish to view or <Enter>  to view  active accounts
          or <X> to exit". If you know the account number which you wish to
          view, simply enter that number, and the customer's  statement for
          that month  will be  printed on  the screen,  or on  paper as you
          choose. If you do not know the account  number for  the customer,
          press <Enter>  and you  will be presented with a list of existing
          accounts. Another decision line  will appear  as follows: "<PgDn>
          to  scroll.  <Esc>  for  Accounts  Rec.  Menu.  <Enter> to select
          account". After locating, by scrolling if  necessary, the account
          you wish  to view or print, press <Enter> and type in the account
          number that you wish.  As above,  that account  will be processed
          for viewing or printing.

          2. Print ALL Statements for Month

          This  option  allows  you  to  print  or  view statements for all
          accounts which have a non-zero  balance  as  of  the  end  of any
          specified month.  These statements  are designed  to fit properly
          into a standard business size window envelope. After the printing
          starts, you may press <Esc> to stop the printing after the end of
          the current statement.

          3. Establish New Customer Accounts

          This  option  is  provided  for  those  people  who  may  wish to
          establish new  customer accounts  before entering invoices. It is
          only necessary to enter  the customer's  name, address,  etc. The


                       Copyright (C) 1988-89 Rosewood Software      Page 17







                                  ROSEWOOD JOURNAL


          same  process  is  entered  into  automatically  from  the "Enter
          Invoice Data" option on the Main Menu.

          4. Modify Customer Data

          You may  make any  changes in  a customer's  name, address, tele-
          phone, etc.  from this  option. You will be presented with a list
          of existing accounts from which to choose.

          5. List Customer Accounts

          This option  allows you  to list,  on the  screen or  on paper, a
          complete  list  of  all  existing  customer  accounts  along with
          addresses and telephone numbers. This list can make it simpler to
          view  individual  statements  because  you  will not have to wait
          while all accounts are printed on the screen before selecting the
          one account that you wish.

          6. Reports Menu

          Selecting this option transfers you to the Reports Menu.

          7. Exit to Main Menu

          This returns you to the Main Menu.



                                    REPORTS MENU

                                                            
                              1. Monthly Report             
                              2. Yearly Report              
                              3. Accounts Receivable List   
                              4. Payments on Account List   
                              5. General Ledger Report      
                              6. Accounts Receivable Menu   
                              7. Exit to Main Menu          
                                                            

          1. Monthly Report

          This option  produces a  summary for  any particular month of all
          invoices for that month. It may  be printed  on the  screen or on
          paper.

          2. Yearly Report



                       Copyright (C) 1988-89 Rosewood Software      Page 18







                                  ROSEWOOD JOURNAL


          This produces  a report  showing the individual monthly totals of
          invoices for any fiscal year in which invoices have been entered.
          The report can be printed on screen or on paper.

          3. Accounts Receivable List

          This option  produces a  list of  all customer accounts with non-
          zero balances as of the end of any month requested.  The accounts
          are "aged"; that is, the amounts for any customer account will be
          listed  as  "current",  "30  days",  "60  days",  or  "90+ days".
          Negative balances will always be shown as current.


          4. Payments on Account List

          This produces  a list  of payments  to customer  accounts for any
          selected month.


          5. General Ledger Report

          This report gives you  a summary  of amounts  to be  entered into
          your general  ledger (whether  it be a manual or computer system)
          and tells you the accounts to which the totals are to be entered.
          The general  ledger accounts  to which  information from Rosewood
          Journal is to be entered are:  1)  Sales  Account,  2)  Sales Tax
          Payable Account, 3) Bank Account, 4) Accounts Receivable Account.
          Your system may use somewhat different  names for  these accounts
          but they  will be in your bookkeeping system. Ask your accountant
          for help with these account names, if necessary. If your business
          has no  accounts receivable (none of your customers ever owes you
          money), the entries for accounts receivable will be  zero and can
          be ignored.  This report  also lists  all invoices  for the month
          which have been entered with "R"  (receivable) option.  The total
          of  these  invoices  is  the  same as "Debit Accounts Receivable"
          amount.


          6. Accounts Receivable Menu

          This option transfers you to the Accounts Receivable Menu.


          7. Exit to Main Menu

          This option returns you to the Main Menu.




                       Copyright (C) 1988-89 Rosewood Software      Page 19







                                  ROSEWOOD JOURNAL






                                   UTILITIES MENU

                                                                   
                         1. Change Softkey Settings                
                         2. Re-Initialize (Company Name etc.)      
                         3. Dos Functions                          
                         4. End of Period Housekeeping             
                         5. Print Labels                           
                         6. Export Data for Use in Other Programs  
                         7. Exit to Main Menu                      
                                                                   

           
          1. Change Softkey Settings

          Rosewood Journal uses two separate "softkey lines". The  first is
          displayed at the bottom of the "Enter Invoice" screen, the second
          at the  bottom of  the "Add  Customer Accounts"  screen. Both are
          there  to  save  you  keystrokes.  The  "Enter  Invoice" softkeys
          generally are used to enter the names of customers who frequently
          do business  with you (e.g. Green River Rafts), or for a standard
          amount of an invoice (your widgets are all  sold for  498.64), or
          for  entries  such  as  "Cash  Sale". The "Add Customer Accounts"
          softkeys are used for frequently  used  names  of  towns, cities,
          states  or  provinces.  If  you  do most of your business in Sas-
          katchewan, it is nice to be able to enter it  with one keystroke.
          After choosing  the "Change Softkey Settings" option, you will be
          asked which of the two softkey lines you wish to enter or change.
          After making your choice, you will be asked, "Which Softkey would
          you like to change or <X> to exit". If, for example, you  wish to
          change F6,  press <6>  (not F6).  You can  then type  the text or
          numbers that you want to have  typed  when  you  press  <F6>. The
          maximum length  of the  entry is  13 characters. Rosewood Journal
          will display the first  5 characters  in the  appropriate spot on
          the  softkey  line.  You  may continue adding or changing softkey
          definitions until you choose the exit <X> option to return to the
          Utilities Menu.

          2. Re-Initialize (Company Name etc.)

          This option  allows you  to change details of YOUR company (name,
          address etc.) and the drives and/or directories where the program
          and data can be found. Directories and sub-directory names can be
          up to 29  characters  long.  The  program  actually  allocates 30
          spaces but reserves 1 space for a trailing "\" which is automati-

                       Copyright (C) 1988-89 Rosewood Software      Page 20







                                  ROSEWOOD JOURNAL


          cally added if you do not do it yourself. See your DOS manual for
          details on  drives, directories  and paths.  In addition, you can
          choose the month in which your fiscal year begins.

                                      WARNING!!

               The fiscal  year should  be chosen  BEFORE invoices are
               entered because  the file which holds the yearly totals
               is initialized with this  option. If  you are  going to
               change your fiscal year, it is best to start a new data
               disk so that the  data  can  be  entered  properly. If,
               through  some  mishap  (we  all  make  them),  you have
               entered or changed to a  wrong  fiscal  year  after you
               have entered  invoices, you  must follow these instruc-
               tions to rectify the problem:

                    1. From DOS, erase  the current  yearly total
                    file. This  will be  called "Totals88.dta" if
                    the year is 1988; "Totals89.dta" if  the year
                    is 1989, etc.

                    2. From  Rosewood Journal,  enter the "Change
                    Invoice Data" option from the Main Menu. Make
                    a "null"  change in one invoice in each month
                    in the year for which you have data. That is,
                    call  up  one  invoice  for  changing in each
                    month, but simply press <Enter> for each item
                    such as name, gross invoice amount, etc. This
                    will "fool" the program  into  writing  a new
                    and correct year total file.

               If  this  seems  complex,  please  remember  that  this
               procedure probably  never will  need to  be done. Also,
               you  are  most  likely  to make this error when experi-
               menting with the program rather than when you are using
               it.


          3. DOS Functions

          This option  will "shell"  you to  DOS. You  may run a directory,
          erase a file, or even run another program. When you  are ready to
          return to  Rosewood Journal,  type <Exit>  and <Enter>. A copy of
          "COMMAND.COM" must be installed where DOS can find it.

          4. End of Period Housekeeping

          This option "cleans up" the accounts  receivable files.  Clean up
          is needed  from time  to time because all receivable data remains

                       Copyright (C) 1988-89 Rosewood Software      Page 21







                                  ROSEWOOD JOURNAL


          in the files,  "receive.dta"  and  "custacct.dta",  even  if some
          accounts have  been paid  and therefore  have zero balances. This
          data is kept because you  may  wish  to  find  the  status  of an
          account  as  of  several  months  ago. Eventually, the receivable
          files will become so  large that  the speed  of the  program will
          become unacceptably  slow. When  this will  happen depends on how
          many accounts receivable entries you have and your  patience when
          waiting for  a listing  of accounts  receivable. The most natural
          time to invoke this  option is  at the  end of  your fiscal year.
          Housekeeping  checks  each  customer  account in turn to find out
          whether the current balance of the  account  is  zero.  If  it is
          zero, all  references to  that account  will be  deleted from the
          "receive.dta" file and you will be queried as to whether you wish
          to keep or delete those customer account files which have current
          zero balances. The old, fat and  slow "receive.dta"  and "custac-
          ct.dta" files will be renamed "receive.old" and "custacct.old" so
          that the new, slim and fast files  can  be  used  by  you.  IT IS
          STRONGLY  URGED  THAT  YOU  MAKE  A COPY OF YOUR DATA DISK BEFORE
          BEGINNING THE HOUSEKEEPING PROCESS. If you have made a disk back-
          up of  your data  files, the  ".old" files can be deleted. If you
          have not made a back-up, the  ".old"  can  always  be  renamed to
          ".dta" files from DOS.

          5. Print Labels

          This option  allows you to print mailing labels for your customer
          accounts on standard 6 line, continuous form, continuous  feed, 3
          1/2 inch  by 15/16  size labels.  You have the option of printing
          labels for all or selected customer  accounts. You  will be given
          an opportunity  to print  one or more test labels so that you can
          align your printer's print head before actually printing labels.

          6. Export Data for Use in Other Programs

          This option allows you to export data from  your customer account
          file  (CUSTACCT.DTA)  or  from  any monthly data file (monyr.DTA,
          e.g. JAN88.DTA) to any of 5 common formats so that you can import
          the data into many other programs. The formats are:
               FIXED LENGTH  (RANDOM). A  format used by many programs
               which use  "random files",  including Rosewood Journal.
               There  are  no  delimiters  so  you must know the exact
               length of each field.  The  lengths  of  files  will be
               given later.  Files produced with this option will have
               file extensions of ".FX".

               LOTUS PRN. is a format which allows data to be imported
               into  Lotus  1-2-3  using  the  "File  import  numbers"
               command. Use this Lotus  command for  both monthly data
               and customer account data because the export file is in

                       Copyright (C) 1988-89 Rosewood Software      Page 22







                                  ROSEWOOD JOURNAL


               a format which will let  Lotus  know  which  fields are
               strings  (words)  and  which  are  numbers.  Fields are
               delimited  by  commas  and  strings  are   enclosed  in
               quotation marks.  Files produced  with this option will
               have file extensions of ".PRN".

               MAILMERGE. Used by many  word processing  programs such
               as Wordstar  and Microsoft  Word. It is the format used
               by many Basic programs  which write  data to sequential
               files. Files  produced with  this option will have file
               extensions of ".MM".

               TEXT EDITOR (SDF).  An  import/export  option  for many
               database programs.  It is produced by many text editors
               and word processing programs. Files produced  with this
               option will have file extensions of ".TX".

               WORDPERFECT (.SF). This format changes Rosewood Journal
               data  into  the  format  used  by  WordPerfect  in  its
               secondary files  for merging.  Files produced with this
               option will have file extensions of ".SF".


          7. Exit to Main Menu
               This option will transfer you to the Main Menu.


          FILE LENGTHS AND NAMES IN ROSEWOOD JOURNAL

          All files written by Rosewood Journal, except those  generated by
          the "Export"  function, are  random access,  fixed length with no
          delimiters between fields and no carriage  returns or  line feeds
          at  the  end  of  records.  The  data  in the monthly files (e.g.
          JAN89.DTA) are all stored as strings.  The same  is true  for the
          customer  account  file  (CUSTACCT.DTA)  except that the customer
          account number  is  stored  as  an  integer.  In  all  the export
          formats, this integer is changed to a string. 



          The details of the fields for the monthly files are:

               Invoice Number:          length 5 bytes
               Invoice Date:            length 2 bytes
               Customer Name:           length 30 bytes
               Gross Invoice Amount:    length 8 bytes
               Sales tax Amount:        length 8 bytes
               Rec (the  "R" that  identifies the invoice as a receiv-
                    able:               length 1 byte

                       Copyright (C) 1988-89 Rosewood Software      Page 23







                                  ROSEWOOD JOURNAL



          Each record  then is  54 bytes  long whether  or not  some of the
          fields are empty.

          The details of the customer account file (CUSTACCT.DTA) are:

               Account number in CUSTACCT.DTA:    length 2 bytes
               Account number in export formats:  length 4 bytes
               Customer Name:                     length 30 bytes
               Street:                            length 25 bytes
               City:                              length 20 bytes
               Province or State:                 length 20 bytes
               Postal Code or ZIP:                length 12 bytes
               Phone:                             length 12 bytes

          The  total  length  of  CUSTACCT.DTA  which  is  used only by the
          program is 121 bytes.  The total  record length  required for any
          export format is 123 bytes.

          The above  should give sufficient information to export your data
          to most programs.



                     INTEGRATING YOUR PREVIOUS RECEIVABLE FILES

          Unless you are starting  a new  business, it  is likely  that you
          will have accounts receivable "on the books" when you begin using
          Rosewood Journal. These can be integrated  into Rosewood Journal.
          Let us  assume that  you are  starting to use Rosewood Journal on
          the first day of your fiscal year which  begins January  1, 1989.
          Using the  "Enter Invoice  Data" option for December 1988 (or for
          whatever month the previous  receivable was  incurred), enter all
          your previous  receivables as  invoices, being  sure to press the
          <R> (receivable) option. After you have entered all your previous
          receivables and,  in the  process, set  up accounts for them, you
          may, if you wish, delete the  "Dec88.dta" (or  the other previous
          months which you may have used) and the "Totals88.dta" file. Your
          previous accounts receivable  will  now  be  integrated  with the
          records that you will be entering for 1989.

                                 PROGRAMMING DETAILS

          Rosewood Journal  is programmed in Microsoft Quick Basic 4.00 and
          4.50, in three modules and  an  "Include"  file.  It  is compiled
          with Quick  Basic 4.50 compiler using the "/o" (standalone), "/x"
          (on error),"/ah" (arrays larger than 64K)  options. The resulting
          object  files  are  linked  with Microsoft Overlay Linker version
          3.69 using the "/e" (exepack) option. The program  is extensively

                       Copyright (C) 1988-89 Rosewood Software      Page 24







                                  ROSEWOOD JOURNAL


          error protected,  both by  "on error" routines and by "protecting
          inputs". Every effort has been  made  to  prevent  the  user from
          entering inappropriate  data such  as invalid dates, alphabetical
          data where numerical data is expected, inputs longer than allowed
          and even spelling mistakes. In many cases the program will give a
          message telling you  what  the  error  is.  In  other  cases, the
          program will beep and return you to the input line expecting that
          you will realize your  error.  Messages  for  every  single error
          would  unnecessarily  bloat  the  program. The error routines are
          designed to save your  data wherever  possible. If,  however, you
          have  placed  the  wrong  disk  in the drive which holds the data
          (perhaps after shelling to DOS), you may lose  some data.  If you
          get a message, "Data Disk problem: is the proper disk in place?",
          please use the "Reports" option to  check whether  any data which
          you have  entered after such an error has in fact been written to
          the file. The program was written on a Hyperion (more or less IBM
          compatible,  now  defunct)  computer  with  640K ram and two 360k
          floppy drives. There are  no machine  specific routines,  so that
          the program  should run  on any  computer using MS/PC DOS 2.00 or
          higher.

                              CHANGES AND ENHANCEMENTS

          Rosewood Software is  vitally  interested  in  your  comments and
          suggestions, or your ideas for new programs. If you like Rosewood
          Journal but need changes  to  fit  your  business  better, please
          contact  us.  Only  by  hearing  from  you,  the  users, can this
          product, or any other, be improved.

                                      SHAREWARE

          The only way that you can  be assured  of a  continuing supply of
          low-cost, quality  software for almost any purpose, is to support
          Shareware. Shareware  is  non-shrink-wrapped,  low  cost software
          that  you  try  at  your  own  convenience.  Shareware is used by
          everyone from individuals to the largest  multi-national corpora-
          tions. Shareware,  as a  marketing concept, is at the very least,
          unusual and quite possibly  unique. It  trusts you,  the user, to
          buy it  if you  like it. If you like Rosewood Journal, and if you
          use  it,  please  send  your  registration  fee  today.  For your
          convenience,  there  is  an  order form (Order.frm) which you can
          print from your Rosewood Journal distribution disk.

          Send your registration fee to:

                                  ROSEWOOD SOFTWARE
                                 BOX 2070  STATION B
                                SCARBOROUGH   ONTARIO
                                       M1N 2E5

                       Copyright (C) 1988-89 Rosewood Software      Page 25







                                  ROSEWOOD JOURNAL


                                   (416) 284-6119

                                     THANK YOU!!















































                       Copyright (C) 1988-89 Rosewood Software      Page 26



```
{% endraw %}

## README.DOC

{% raw %}
```






                  ROSEWOOD JOURNAL (C) 1988-89 BY ROSEWOOD SOFTWARE

                            ROSEWOOD JOURNAL VERSION 3.00

          Rosewood  Journal  is  a  sales  journal  and  complete  accounts
          receivable package designed for small to  medium sized businesses
          which  record  sales  on  serially  numbered  invoices.  Rosewood
          Journal is menu-driven and easy to  use,  so  easy  to  learn, in
          fact, that  the best  way to  learn about its many features is to
          try the program using the sample data included  with the program.
          There are, however a few things that you need to know.

                                    REQUIREMENTS

               DOS 2.00 or higher,
               IBM or compatible computer,
               320K RAM,
               1 or more floppy drives or a hard disk,
               Printer if you wish printed reports
               YOUR "CONFIG.SYS" FILE MUST HAVE AN ENTRY "FILES=15".


                                        FILES

          The following files should be on the disk that you received or on
          the file which you down-loaded:

               JOURNAL.EXE, the main program.

               README.DOC, the file that you are reading.

               JOURNAL.DOC, the manual for Rosewood Journal.

               ORDER.FRM, Form for registering Rosewood Journal.

               Please note that the following files, all of which have
               the  extension  ".DTA"  are  specific files used by the
               demonstration data.  When  you  begin  to  use Rosewood
               Journal in  your own business, they must be deleted, or
               you must start a new data disk so  that your  data does
               not get mixed in with the demo data.

               INITIAL.DTA,  contains  information  about  the company
               name, address and program  and data  drives as  well as
               the month in which the company's fiscal year begins.

               JAN88.DTA and  FEB88.DTA, invoice  data for January and
               February 1989.

               TOTALS88.DTA, stores summary invoice data for  the 1988
               fiscal year.


                                          1





                  ROSEWOOD JOURNAL (C) 1988-89 BY ROSEWOOD SOFTWARE

               RECEIVE.DTA,  stores  information  about invoices which
               have been added to accounts receivable.

               CUSTACCT.DTA, stores information (name, address, phone,
               etc.) of your customers who owe or have owed you money.

               SOFTKEY.DTA  and  SOFTKEY2.DTA  store information about
               the two user-defined  softkey  lines  used  by Rosewood
               Journal.

          The following  files are  used if  you choose to have the program
          install itself. Please see "JOURNAL.DOC" for details.

               HARDDISK.BAT,  TWODISK.BAT,  INITIAL.HRD,  INITIAL.TWO,
               CONFIG.FIL AND AUTOEXEC.FIL.

                                    DEMONSTRATION

          The  disk  that  you  received or downloaded contains sample data
          files for a fictitious  company called  "Ripley's Fine Catering".
          The files  are for January and February 1989. The best way to try
          the program is to copy all files onto a blank disk formatted with
          the "/S" or "system" option. If you are using a 360K floppy disk,
          do not copy the files with the extension ".DOC" as there will not
          be enough  room on  the disk.  Place this disk into drive "A" and
          type "JOURNAL" <Return>. The  menus should  take you  from there.
          Try entering new invoice data for any month you choose, including
          the demonstration months. You  can  view  or  print  the reports,
          change softkey  settings and  the initialization  or set-up file.
          One warning: the  program  will  accept  but  will  not  like two
          identical invoice  numbers in  any one month (who would have that
          anyway?). Rosewood Journal will  complain  if  you  try  to enter
          "unacceptable" data  such as alphabetical data where numerical is
          expected. Try it  if  you  like  complaints  from  your computer;
          nothing  worse  will  happen  as  the  program is carefully error
          protected.

                             USING YOUR OWN COMPANY DATA

          To start  using Rosewood  Journal with  "real" data  of your own,
          use  the  installation  batch  files (see "JOURNAL.DOC"), or copy
          "JOURNAL.EXE" to a disk formatted with  "/S" and,  after entering
          "JOURNAL",  enter  the  data  requested  on  the  "Initialization
          Screen"  which  will  automatically  come  up  after  the opening
          screen. Or, you may install the program on a hard disk. Please be
          sure that your "CONFIG.SYS" file has the line, "FILES=15" in it.

                                  OPERATING MANUAL

          If you  like Rosewood  Journal after  your first  test drive, you

                                          2





                  ROSEWOOD JOURNAL (C) 1988-89 BY ROSEWOOD SOFTWARE

          will  find  it  useful  to  read  the  manual.   The manual is as
          succinct as possible. It is in the file called "JOURNAL.DOC".

                                      SHAREWARE

          Rosewood Journal is distributed as SHAREWARE. It is  not free. If
          you decide to use the program, please send $45 Canadian or $38 US
          to the address below.  Shareware is  low-cost, non-shrink-wrapped
          software that  you can  try before  you buy.  If you use Rosewood
          Journal,  or  any  other  Shareware  program,   please  send  the
          registration  fee.  Only  by  supporting  Shareware  will  you be
          assured of a continuing supply of quality, low-cost  programs. If
          Rosewood Journal  does not  meet your  needs, perhaps you know of
          someone else whose needs it will meet. If so, please  give them a
          copy of Rosewood Journal, or upload it to your favourite bulletin
          board. But, above all, if you do use it, please pay for it.

                                     HELP WANTED

          If you have suggestions for improvements to Rosewood  Journal, or
          ideas for  new programs,  or if  you find  a bug  in the program,
          please let us know. Or, if you have a "but", or an  "if" reserva-
          tion (Rosewood Journal would be great BUT it doesn't do so and so
          or IF it only  did such  and such),  write or  telephone. Perhaps
          Rosewood Journal  could be  made to  do what  you REALLY want. It
          doesn't hurt to ask!

                                     LEGALITIES

          Rosewood Software makes  no  warranty  of  any  kind,  express or
          implied,   including   without   limitation,  any  warranties  of
          merchantability and/or fitness for a particular purpose. Rosewood
          Software  shall  not  be  liable for any damages, whether direct,
          indirect, special or consequential arising from a failure of this
          program to  operate in  the manner  desired by the user. Rosewood
          Software shall not be liable for any damages to data  or property
          which may be caused directly or indirectly by use of the program.

          Rosewood Journal  is copyright (C) 1988-89 by Rosewood Software  
                              and by Bert Christensen.

                                  Rosewood Software
                                 Box 2070  Station B
                                Scarborough,  Ontario
                                       M1N 2E5

                                   (416) 284-6119


                        THANK YOU FOR TRYING ROSEWOOD JOURNAL

                                          3

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1309

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC FIL        39   2-25-89   9:31a
    CONFIG   FIL        23   2-25-89   9:32a
    CUSTACCT DTA      2299   2-25-89   2:53p
    FEB89    DTA      1080   1-29-89  11:01a
    FILE1309 TXT      1648   5-23-89   9:07a
    FILES    DOC      2866   2-15-89   7:34p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   3-24-89  11:25a
    HARDDISK BAT       974   2-15-89   8:17p
    INITIAL  DTA       197   1-23-89   3:33p
    INITIAL  HRD       197   2-25-89   3:10p
    INITIAL  TWO       197   2-25-89   9:10a
    JAN89    DTA      1188   1-29-89  10:40a
    JOURNAL  DOC     64812   2-25-89   8:37a
    JOURNAL  EXE    228939   2-21-89   4:29p
    MANUAL   BAT       147   3-24-89  11:25a
    ORDER    FRM      2000   2-13-89   9:45p
    README   DOC      8126   2-25-89   8:30a
    RECEIVE  DTA       968   1-29-89  11:10a
    SOFTKEY  DTA       130   2-25-89   2:52p
    SOFTKEY2 DTA       130   2-25-89   2:55p
    TOTALS89 DTA       120   1-29-89  11:01a
    TWODISK  BAT      2541   1-17-89   2:41p
           23 file(s)     319661 bytes
                           28672 bytes free
