---
layout: page
title: "PC-SIG Diskette Library (Disk #396)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0396/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0396"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PDS*BASE 1 OF 2 (ALSO 1025)"

    A complete hierarchical database system of the master/detail (or
    mother/daughter) type and, although written for BASIC programmers, is
    particularly well-suited to inventory systems, payroll or job control
    systems.
    
    A series of program generators create both a custom database (with up
    to 10 files) and BASIC programs to operate against the custom
    database. The generated programs can be easily modified. The system
    has excellent documentation and BASIC source code is included.
    
    This is the database management system for anyone who doesn't want to
    go to the expense and trouble of learning a new programming language.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0396.TXT

{% raw %}
```
Disk No:  396                                                           
Disk Title: PDS*BASE 1 of 2 (Disk 1025 also)               
PC-SIG Version: S3.5                                                    
                                                                        
Program Title: PDS*BASE Database System                                 
Author Version: 4.04                                                    
Author Registration: $40.00                                             
Special Requirements: A version of BASIC and two floppy drives.         
                                                                        
A complete hierarchical database system of the master/detail (or        
mother/daughter) type and, although written for BASIC programmers, is   
particularly well-suited to inventory systems, payroll or job control   
systems.                                                                
                                                                        
A series of program generators create both a custom database (with up to
10 files) and BASIC programs to operate against the custom database.    
The generated programs can be easily modified.  The system has excellent
documentation and BASIC source code is included.                        
                                                                        
This is the database management system for anyone who doesn't want to   
go to the expense and trouble of learning a new programming language.   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk No: 396  PDS*BASE (Disk 1 of 2)  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To install type program, type: INSTALL (press enter)                  ║
║                                                                         ║
║   To view more on installation doc, type: LIST README.DOC (press enter) ║
║                                                                         ║
║   To print documentation, insert disk 2, and type: MANUAL (press enter) ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## QUICKGO.DOC

{% raw %}
```

                        PDS*BASE DATA BASE - README.DOC

                      Copyright 1987 by PRO DEV Software

                         Version 4.04 - March 10, 1990

This  instruction will help you make copies of the PDS*BASE Data Base disks and
to  provide  other helpful hints.  If you have a HARD DISK, BE SURE to read the
notes  about  ASSIGN  B=C  on  page  3  of  this  document  so  you can run the
demonstration.    If  you have only 256k of memory in your computer, see Page 4
of this document.

YOU  MUST  HAVE DOS 2.0 OR HIGHER AS, THE PDSBASE.EXE PROGRAM USES FEATURES NOT
SUPPORTED UNDER DOS 1.XX.  The PDSBASE.EXE program locks up under DOS 1.1.


                 MAKING A WORKING COPY OF THE PDS*BASE SYSTEM

Please  keep  the  original  PDS*BASE  Program  and Documentation disks, as you
received  them,  so  that  you  will be able to make complete copies to give to
someone else.


+------------------------ 2 Floppy Drive System -----------------------------+
|                                                                            |
|To make working copies you will need to insert your DOS master in drive A:, |
|a new disk in drive B: and type the following:                              |
|                                                                            |
|   DISKCOPY A: B:   (Press Enter)                                           |
|                                                                            |
|When prompted to place the Source disk in drive A:, remove your DOS disk and|
|replace it with the PDS*BASE Program disk and Strike any key.               |
|                                                                            |
|When the first disk is copied, and you are being asked if you wish another  |
|copy, place the PDS*BASE Documentation disk in drive A: a new disk in drive |
|B: and answer Y and proceed to copy the second disk.                        |
|                                                                            |
+---------------------- Single Floppy Drive System --------------------------+
|                                                                            |
|If you have a single floppy disk system (possibly with a hard disk), type:  |
|                                                                            |
|   DISKCOPY A: A:   (Press Enter)                                           |
|                                                                            |
|When prompted to place the Source disk in drive A:, remove your DOS disk and|
|replace it with the PDS*BASE Program disk and Strike any key.  Follow the   |
|screen instructions.                                                        |
|                                                                            |
|When the first disk is copied, and you are being asked if you wish another  |
|copy, place the PDS*BASE Documentation disk in drive A:, answer Y and       |
|proceed to copy the second disk.                                            |
|                                                                            |
+----------------------------------------------------------------------------+

Please make additional copies for your friends and/or business acquaintances.


                                    PAGE 1

                        PDS*BASE DATA BASE - README.DOC


                            HARD DISK Installation

Insert  the  PDS*BASE  Program  Disk  in  drive  A:.    This  disk contains the
BASEPROG.EXE, UTILPROG.EXE and other files.  Type the following:

    A:  (Enter)
    INSTALL  (Enter)

The  INSTALL  program  has a menu.  Select Option 1 to install the system.  You
MUST  install  the  system  BEFORE  you  can  print  or  Screen View any of the
documentation.


                          2 FLOPPY DRIVE Installation

Format  5  disks  per  the  README.DOC file.  If you haven't printed that file,
type COPY A:README.DOC PRN (Enter) to print the start-up instructions.

Insert  the  PDS*BASE  Program  Disk  in  drive  A:.    This  disk contains the
BASEPROG.EXE, UTILPROG.EXE and other files.  Type the following:

    A:  (Enter)
    INSTALL  (Enter)

The  INSTALL  program  has a menu.  Select Option 1 to install the system.  You
MUST  install  the  system  BEFORE  you  can  print  or  Screen View any of the
documentation.







The  INSTALL  program  will ask you for the target drive letter to continue the
installation after you select one of the menyu options.

Please carefully read the INSTALL program screen instructions.















                                    PAGE 2

                        PDS*BASE DATA BASE - README.DOC

                                CONFIG.SYS FILE


It  is very important that your DOS "boot-up" disk contain a CONFIG.SYS file if
you  are  going  to  have  more than 2 files in your data base. The DOS default
number  of  files  that can be open at one time is 3.  Your data base will also
have  1  additional automatic file that keeps a running record of active record
numbers.    If you already have a CONFIG.SYS file on your boot-up disk, add the
FILES  and  BUFFERS  commands.    If  you don't already have a CONFIG.SYS file,
create it as shown below.

    With the DOS prompt on the screen enter:

         COPY CON:CONFIG.SYS
         FILES = 20
         BUFFERS = 15
         (Press F6 and Return)

You can copy this file to all of your "boot-up" disks.

                        IF YOU HAVE ONLY 256K OF MEMORY

The  PDSBASE.EXE  program  is  quite large.  If you only have 256k of memory in
your  computer AND/OR you use many memory resident programs AND you get an "Out
of  memory"  message  when  you  run  the  PDSBASE.EXE program, you MAY have to
prepare  2  DOS  boot  disks.    If  this is the case, when you wish to run the
PDSBASE.EXE  program, you will have to start your computer with a DOS disk that
does  NOT  contain  the  FILES and BUFFERS commands in the CONFIG.SYS file.  In
fact,  you  can  just  DELete  the  CONFIG.SYS file.  This will give you enough
memory to run the PDSBASE.EXE program.

The  second  DOS  boot disk will have the CONFIG.SYS file and you must use that
disk  to  start  your  computer  when  you  are going to run the BASIC language
programs that will be written for you by the PDSBASE.EXE program.


                             STARTING PDSBASE.EXE

If  you  have  a  HARD  DISK  COMPUTER, with the PDS*BASE programs installed as
described  on  the  previous  page,  start your computer, and at the C> prompt,
type  ASSIGN  B=C.    This  ASSIGN  command  is only necessary when you run the
PDSBASE.EXE  program  the  first time, so that you can run the demonstration of
the  PDS*BASE  system  shown  starting  on  Page 1-3 of the on-disk instruction
manual  PDSBASE.DOC.   If you get the "Bad command or file name" error message,
place your DOS Master disk in drive a and type A:ASSIGN B=C  (Enter).

If  you  have a FLOPPY DISK COMPUTER, start your computer with your DOS boot-up
disk  and  enter  the Time and Date.  Insert the PDS*BASE Program disk in drive
A:.  The PDS*BASE Program disk contains at least the PDSBASE.EXE file.





                                    PAGE 3

                        PDS*BASE DATA BASE - README.DOC


At the DOS prompt of A> (floppy disk system) or C> (hard disk), type:

    PDSBASE   (press Enter)

Since  the  PDSBASE.CFG (configuration) file is missing, you will see a message
warning  you  of  that.   If you don't see the message, that file is present on
the disk.  You should see something like the following:

+------------------------------------------------+---------------------------+
| Create  Modify  Reports   Set-Up   Tools  Quit | PDS*BASE Data Base System |
+------------------------------------------------+---------------------------+
                     +-------------------------+
   Highlight desired | Color Graphics Adapter  | N
   selection with    | Color Monitor           | N
   up & down arrows  | Drive A: Num of Bytes   | 362496
   and press Enter.  | Drive B: Num of Bytes   | 362496
   Type in desired   | Is hard disk present ?  | Y
   default and press | Printer Action Table    | DUMBPRTR
   Enter again.      | Files Drive & Path      | C:\PDS\
                     | Save New Set-Up Values  | N
                     +-------------------------+


Use  the  right  or  left  arrows (on the cursor pad) to highlight the "Set-Up"
pull-down sub-menu.

Use  the  down  arrow to highlight "Color Graphics Adapter" and press the Enter
key.    YOU  MAY  NOT SEE THE CURSOR AT THIS TIME. Press Y if you have either a
Color Graphics or EGA monitor adapter card in your computer. Press N if not.

Use  the down arrow to highlight "Color Monitor".  If you have a green or amber
(or  white)  single  color  screen,  press  N.    If  you have a color monitor,
press Y.

Highlight  the  "Printer Action Table" and press Enter.  You will see the names
of  the  .PAT  files  on the PDS*BASE program disk.  You can highlight the file
you  wish to use with the cursor keys and press Enter.  See Appendix E to learn
how  you  can  make  a  Printer Action Table for any printer not shown.  If you
have  a  dot  matrix printer and your printer is not shown, select EPSONFX as a
starter.

I  tried to make the PDSBASE.EXE program smart enough to figure out what drives
are  equipped.    Further,  if  your current DOS default is in a sub-directory,
when  you run PDSBASE, the program will display that default as the "Work Files
Drive  &  Path".   The above example indicates that the PDSBASE program was run
from the \PDS sub-directory on a C: drive hard disk.

Highlight  the  "Work  Files  Drive  &  Path"  and  press Enter.  If you have a
2 floppy drive system, enter "B:\" (without the quotes) and press Enter.




                                    PAGE 4

                        PDS*BASE DATA BASE - README.DOC


So  you  don't  have  to enter this stuff every time you run PDSBASE, highlight
the  "Save  New Set-Up Values", press Enter and press Y.  This information will
be saved to a file named PDSBASE.CFG.

The next thing to be done is to print the instruction manual.

Using  the  right  or  left cursor keys, highlight the TOOLS sub-menu.  Use the
down  arrow  cursor  key  to highlight the "Print PDS Manual" selection.  Press
Enter.

You  will  see a menu that will allow you to press T to print the Total manual,
or  other  keys  to  print parts of the manual.  If you wish, you can print one
section  at  a  time,  as  you  find  time  to read them.  BE SURE TO PRINT THE
REGISTRATION FORM!!!

If  you  didn't see a Printer Action Table for your printer, I suggest that you
press  E to print just Appendix E.  This will explain how you can create a .PAT
file  for  your  printer  so  that you can print the manual with your printer's
Near  Letter  Quality  turned  on.  If you have an HP-LaserJet, see the special
note at the end of Appendix E.

If  you  are  rusty  at  programming  in  the BASIC language, you can highlight
"Print  BASIC  Primer"  to  print  a 66 page book that will explain many of the
elements of the BASIC language.


                             SAMPLE DEMONSTRATION

Print  at least Section 1 of the on-disk instruction manual.  You should follow
the  instructions  starting  on  Page  1-3.    This  will  lead  you  through a
demonstration  of  the  incredible power of the PDS*BASE data base system.  You
will find this demonstration quite fascinating.

If  you  have  a  hard  disk system, be BE SURE type the ASSIGN B=C command, as
described  on  page  3  of  this  README.DOC  instruction,  before  running the
PDSBASE.EXE  program.   If you have a hard disk and you fail to ASSIGN B=C, the
PDS*BASE.EXE  program will try to create data files and BASIC programs on drive
B:.  This  problem  is  only  when  running the sample demonstration.  When you
create your own data base definitions, this problem will not occur.


                        ENDING THE PDSBASE.EXE PROGRAM

Use  the  cursor  keys  to  highlight the QUIT sub-menu.  Use the down arrow to
highlight YES and press Enter.  You can print the Registration form now.








                                    PAGE 5

                        PDS*BASE DATA BASE - README.DOC

                                  COMMAND.COM

If  you do not have a hard disk on your computer, you will want to COPY the DOS
COMMAND.COM  file  to  your working copy of the PDS*BASE disk.  If there is not
room  on  the  PDS*BASE working disk for COMMAND.COM, I suggest that you DELete
several  of the Printer Action Table files (they all have a .PAT extender) that
you will not likely use, to make room on the disk for COMMAND.COM.

DO  NOT  delete any files from your original copy of the PDS*BASE disks so that
you can make COMPLETE copies for others later.

When  COMMAND.COM  is  on  the  disk  that is in the drive that you "boot" your
computer  on, the "Disk Directory" selection on the "Tools" sub-menu is able to
produce a better looking directory listing.


              PLEASE READ THE MANUAL BEFORE YOU WRITE OR CALL ME.

If  you  can't  un-arc  all of the MANUAL.EXE file to a floppy disk because you
get  a  "Disk full" error message, it is because you insisted on formatting the
target  disk  with  DOS  (FORMAT B: /S).  Re-format the target floppy disk with
just  FORMAT  B:.    If  that doesn't work, please notify me where you obtained
your  disk.  Some Disk Copying Services illegally add their messages to the end
of  my copyrighted files, thus increasing the file size.  Since the un-archived
MANUAL completely fills a disk, any additions will cause problems.

You  can  press  the  F1  key  at any point in the PDSBASE.EXE program for help
screens.

You  can  use  the  PDSBASE.EXE program to define your data base.  It will also
write  BASIC  language  programs for you to "run" your data base.  You can then
modify the generated programs to meet your specific special requirements.

The   PDSBASE.EXE   program,   the  files  with  the  .SRC  extenders  and  the
Documentation  disk  files, as supplied by PRO DEV Software, are Copyrighted by
PRO DEV Software.

However,  the BASIC language programs that are written for YOU and the MENU.BAS
program  are  YOURS.    They  are NOT Copyrighted by PRO DEV Software.  You can
modify  them, remove the PDS designations and sell the generated BASIC programs
if  you  wish.    If  you  have  developed  a  system  of programs that use the
generated  BASIC  programs  and  wish  to copyright your system, go for it.  Of
course,  you  can't copyright the MENU.BAS program, but you can distribute your
disks with it.










                                    PAGE 6

                        PDS*BASE DATA BASE - README.DOC

                         SUPPORT FROM PRO DEV SOFTWARE

If   you   have   questions,  you  can  call  the  author,  George  Abbott,  at
616-788-2243,  8:00-5:00 M-F Eastern Time.  If you have NOT YET registered your
copy,  your  questions  should  be limited to perceived "bugs" or how to obtain
the  latest  version  in  case  you  think  you  have  obtained  a defective or
out-dated  copy.  Normal telephone or written support is usually only available
after you send in the registration fee.

                               WHEN YOU REGISTER

You  will  be sent the latest version disks of the Shareware PDS*BASE Data Base
system.    The  registered  disks  will  not  require  the random number on the
opening  program  screens and you will be told how to quit the programs without
the registration screen.

As  you  currently  have  COMPLETE  instruction  manuals,  you will NOT be sent
printed copy of the manuals.  This keeps the registration fee low.

Thank  you  for  obtaining a Shareware copy of my PDS*BASE Data Base system.  I
hope  that  you  find it useful.  Please remember that this is Shareware.  That
means  that  you  are  obligated to register your copy with PRO DEV Software if
you continue to use this system beyond the evaluation stage.

                           Very truly yours,

                             George Abbott

                        Member - Association of
                        Shareware Professionals

                           PRO DEV Software
                            545 Grover Road
                       Muskegon, Michigan  49442




















                                    PAGE 7


```
{% endraw %}

## README.DOC

{% raw %}
```
This program is produced by a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.  If you are unable to resolve a shareware-
related problem with an ASP member by contacting the member directly,
ASP may be able to help.  The ASP Ombudsman can help you resolve a dispute
or problem with an ASP member, but does not provide technical support for
members' products.  Please write to the ASP Ombudsman at P.O. Box 5786,
Bellevue, WA 98006 or send a Compuserve message via easyplex to ASP Ombudsman
70007,3536

                       PDS*BASE Hard Disk Installation

 Insert this disk in drive A:.  Type A: (Enter) and INSTALL (Enter)
 -----------------------------------------------------------------------------
               PDS*BASE Floppy Disk Installation Instructions

 If  you  have  a 2 FLOPPY DISK drive system, format (5) disks without DOS for
 your working PDS*BASE disks.     To format these disks,  insert your DOS disk
 in  drive  A:  and  the  fresh  disks in drive B: and type FORMAT B: (Enter).
 Follow the screen instructions.   After you have formatted the (4) disks, re-
 insert the 4th and 5th disks in drive B:, type . . .
 
     COPY COMMAND.COM B: (Enter)
 
 Label the (5) disks as follows:
 
    1. "PDS*BASE Documentation Disk"
    2. "Utility Documentation Disk"
    3. "BASIC Primer Disk"
    4. "PDS*BASE Program Disk"  - This disk has COMMAND.COM on it.
    5. "Utility Program Disk"  - This disk has COMMAND.COM on it.

 Insert the Shareware PDS*BASE disk in drive A: and type INSTALL B: (Enter).

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
   Version  4.04     PDS*BASE DATA BASE SYSTEM REGISTRATION FORM      03/10/90

   Thank  you  for evaluating my Shareware Software.  If you find that you are
   able  to  use  this software beyond the evaluation stage, you MUST register
   your  copy  with PRO DEV Software.  The Registration Fee is only $40.00 FOR
   EACH  COPY  IN  USE.    The  next  page  is the order form.  To insure your
   satisfaction, I offer the following.



                            Pre-Registration Support

       You  can  call  (preferred)  or  write  to  PRO  DEV  Software with any
       necessary   questions  about  setting  up  or  effectively  using  this
       Shareware  IF  you  encounter  problems.  This system is used mostly by
       those  that  already  program in the BASIC language.  Please be sure to
       follow the Setup instructions in the README.DOC file . . .

            COPY A:README.DOC PRN  (Enter)

       .  .  .  before  calling  or  writing.    If  I determine that you have
       received  a  faulty  evaluation  copy,  I  will  probably  send  you  a
       complimentary  evaluation  copy.   PRO DEV Software's hours are 8:00 to
       5:00 Monday to Friday Eastern Time USA.




                 Here is what you will get for your registering.

   1.  You  will  receive  a  registered  copy  of  the  latest version of the
       PDS*BASE  Data  Base system Shareware disk.  You will NOT have to enter
       the  copyright screen random number.  You will also be able to skip the
       closing  screen.    You  will  NOT  be  sent  a  printed  copy  of  the
       documentation  as  the  on-disk  manual  is  complete and describes all
       features.   This also holds down the registration cost of this powerful
       system.


   2.  You  will  receive  at least 1 year of telephone (preferred) or written
       support.    For  registrants  outside  the USA or Canada, I will not be
       able  to  return  telephone  calls  as  the  overseas rates can rapidly
       exceed the low registration cost.


   3.  If  you  discover  what  appears  to  be  a  bug, PRO DEV Software will
       attempt  to  resolve  the bug within 30 days from the time that PRO DEV
       Software   receives   your   full  telephoned  (preferred)  or  written
       description  of the bug.  If the cause of the perceived bug is a result
       of  unusual  hardware  or software that you are using, PRO DEV Software
       can  not  always  modify  the  programs  to  operate  with your unusual
       arrangements.

   Version  4.04     PDS*BASE DATA BASE SYSTEM REGISTRATION FORM      03/10/90

   Please  Send  Check,  Money  Order,  Postal  Order  OR  you  can enter your
   American  Express,  Master  or  Visa  card  number  below  along  with your
   signature.    If you are outside the USA or Canada obtain a check from your
   bank  in  USA  funds  on  a  USA  bank.  You may find it easiest to send an
   American  Express  Check or even USA cash.  Canadian registrants can submit
   their  check  using  Canadian  funds WITHOUT exchange rate adjustments.  If
   Canadians  use a Credit Card the Credit Card Company WILL apply the current
   exchange  rate.   Registrants outside the USA or Canada should add an extra
   $5.00 USA equivalent to cover extra banking and/or postage costs.

         Send $40 ($45 non-USA/Canada) FOR EACH COPY to:

                  PRO DEV Software
                  545 Grover Road
                  Muskegon, Michigan 49442


            Desired Disk Format:   5 1/4 360k __      3 1/2 720k __ 


   NAME _____________________________________________________________________

   COMPANY __________________________________________________________________

   ADDRESS __________________________________________________________________

           __________________________________________________________________

   CITY _______________________________  STATE ____________ ZIP _____________

   PHONE _____________________________  SIGNATURE ___________________________
   (In case of questions & Credit Card)       (Required ONLY for Credit Card)

                                 Type of payment

   Check/Money Order__   American Express Card__  Master Card__   Visa Card__

   Credit Card Number _________ _________ _________ ________  Expires ___/___


   You  can  phone  your  order/questions  to PRO DEV Software at 616-788-2243
   (8:00-5:00  M-F  Eastern  Time).   If you reach my answering machine I will
   return  USA/Canada  calls.  You can also register with PRO DEV Software via
   an EasyPlex message to CompuServe PPN: 72617,1266.

                             Or, you can order from:

         Public (Software) Library                  Shareware Marketing

     1-800-2424-PSL (for ORDERS only)                      Beer
     1-713-665-7017 (information only)                    ENGLAND
     Box 35705  Houston, TX 77235-5705                   EX12 3HW
           Master/Visa Accepted                       Tel 0297 24088
             ASP Vendor Member                       ASP Vendor Member

   Version 4.04                     PDS*BASE                         03/10/90



```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
  Copyright  1989 by PRO DEV Software                    PDS*BASE Version 4.04

                                 March 10, 1990

  To Disk Copying OR Bulletin Board Service Librarian OR SYSOP:

                             You are authorized . . .

  This  file  authorizes  you to include the (2) disk PDS*BASE Data Base system
  Version  4.04  Shareware  software  in  your  Shareware  Cataloging  and Disk
  Copying  Service  or  BBS.  This  is a non-exclusive authorization.  Further,
  this  file  notifies  you  that  you may NOT continue distribute or allow BBS
  access  to any PDS*BASE software with any version lower than Version 4.04 and
  file date stamps of 03-10-90.

                           I request that you NOT . . .

  You  may not further compress the software on these disks, particularly so as
  to  add  competing  Shareware or Public Domain software to the disks.  If you
  operate  an  Electronic  Bulletin Board service, you MAY compress this entire
  system  for  use  on  the  BBS  as  long  as  you  do  NOT first unSCRNCH the
  MANUAL.EXE,  UTILDOC.EXE  and  PRIMER.EXE  files.   Please note that previous
  issues   of   the   PDS*BASE  disks  included  the  PKWARE  software  on  the
  distribution  disk  and  the  instruction  manual  was  compressed  from many
  individual files.  This release (with all files dated 03-10-90) will unSCRNCH
  the  MANUAL.EXE  file  into  just  one (1) PDSBASE.DOC file.  The PDSBASE.EXE
  program  (also  dated  03-10-90)  is  rewritten to print from one PDSBASE.DOC
  file  rather than the prior many files.  Thus, BE SURE to place BOTH of these
  disks  into  your  library  or  I  will get nasty calls and letters from your
  customers.

                                   You may . . .

  Disk  Copying  Services  are encouraged to add your own files to the disks. I
  think that I have allowed sufficient space to do that.

  Now  that  I  have gotten all of that legal stuff out of the way, let me tell
  you  about the PDS*BASE Data Base system.   For three very important reasons,
  the  PDS*BASE  Data Base system is probably the most unusual data base system
  in the Shareware market place.

  FIRST    This  is  a  multi-file automatic relational data base system.  This
           random  access hierarchal type of file arrangement is often referred
           to  as a Master/Detail or Mother/Daughter relational data base.  You
           can also have stand-alone random accessed files.

  SECOND   The  PDS*BASE  Data Base system generates (or writes) BASIC language
           programs  to  operate  the  data base.  Thus, after the user defines
           the  data files and their relations, stand-alone BASIC programs take
           over  from  there.    This  allows  anyone  conversant  in the BASIC
           language  to  "tweek"  the  generated  programs to obtain incredible
           power over their data.

  THIRD    Since  the  system  generates  BASIC  language  programs,  a 66 page
           on-disk  BASIC  Language  Primer  is  included for those that always
           wanted  to learn BASIC, but couldn't find a book written in "people"
           language.  Now they have one.

  Copyright  1989 by PRO DEV Software                   PDS*BASE Version 4.04

                                March 10 - Page 2

  This  release  adds  a  second utility program to create Mail Label programs
  and  programs  to  export and import data from other systems.  The Shareware
  disks have complete documentation and fully functional programs.

  Following  are  one  liner  and  complete  descriptions  to  include in your
  catalog:

  1. One Liner Description

     (disk  number)  PDS*BASE  Multi-File  Data  Base  system  perfect for the
     BASIC programmer (2 disks) [ASP]


  2. Complete Description

     PDS*BASE  Data  Base  system  (2 disks) [ASP].  This is a multi-file data
     base  system  for  those that want nothing hidden.  The system allows you
     to  define  your  single  or  multi-file  random access data base and the
     system  then  generates  BASIC  language  programs  to  operate your data
     base.   The program definer/generator has pull-down menus, pop-up F1 Help
     Screens,  full  on-screen  editing  and  much  more.    The  system  will
     generate  a  variety  of  report  programs  that  can  automatically pull
     together  data  from  one  or many data base files as required. Since the
     system  gives  you  customized  BASIC  language  programs, you can modify
     those   programs   to   add   additional   features   as  desired.    The
     documentation  disk  includes  a complete 144 page instruction manual and
     a  66  page  on-disk  "BASIC Primer" book for those that always wanted to
     learn BASIC, but couldn't find an easy-to-read manual.

     Although  designed  with  the  BASIC  programmer in mind, this system can
     also  easily be used by non-programmers.  The step-by-step examples  show
     you  how  to  create,  run  and  report  on  your  custom data base files
     without  even  looking  at  the  BASIC  language programs.  Included is a
     flexible  menu program for automatically running the BASIC programs.  The
     system requires DOS 2.0 or higher with either BASICA or GWBASIC.

  Thank you very much for carrying my Shareware software.  If you have any
  questions, please write or call 616-788-2243 or CompuServe 72617,1266.

                                         _______ 
        Very truly yours,           ____|__     |                   (tm)
                                 --|       |    |-------------------
                                   |   ____|__  |  Association of
                                   |  |       |_|  Shareware
                                   |__|   o   |    Professionals
        George Abbott            -----|   |   |---------------------
                                      |___|___|    MEMBER



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0396

     Volume in drive A has no label
     Directory of A:\

    VERSION4 04         64   3-10-90  12:00p
    BASEPROG EXE    146371   3-10-90  12:00p
    UTILPROG EXE    121753   3-10-90  12:00p
    PRINTERS EXE      9833   3-10-90  12:00p
    INSTALL  EXE     24042   3-10-90  12:00p
    LIST     COM     10231   3-10-90  12:00p
    VENDOR   DOC      6065   3-10-90  12:00p
    QUICKGO  DOC     16833   3-10-90  12:00p
    REGISTER DOC      5279   3-10-90  12:00p
    README   DOC      1635   3-10-90  12:00p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771   4-15-90   3:34a
    FILE0396 TXT      1986   4-17-90   9:49a
           13 file(s)     344901 bytes
                           12288 bytes free
