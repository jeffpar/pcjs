---
layout: page
title: "PC-SIG Diskette Library (Disk #1530)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1530/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1530"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PHONE MESSAGE & COMTRAC"

    PHONE MESSAGE is a memory-resident utility that allows you to quickly
    record phone messages.  Once the program is installed in memory, press
    the "hot-key" to activate this handy phone jotter.  A small screen will
    appear allowing you to record who the phone call is for, who sent the
    phone call, the phone number of the caller, and a short message.  All
    the information is then automatically transferred to an ASCII text file
    for later viewing or editing.
    
    COMTRAC keeps track of your appointments, commitments, phone calls, and
    letters to other companies.  It is the perfect support program for sales
    prospecting, or coordinating other business-to-business activities.  The
    program can work with your modem to perform autodialing and log the time
    spent on each phone call.
    
    COMTRAC maintains records on each company you deal with and organizes
    such information as the company name, the address, two phone numbers,
    the SIC number, the product, and whom to contact.  Within a split
    second you can search for and find a company's record which includes
    logs of your last 15 phone calls, letters, and appointments with the
    contact.  Each record also has a six-month, three-month, and one-month
    calendar showing your commitments, scheduled meetings, etc., with the
    company.
    
    You can export any of this information to your wordprocessor to create
    form letters, Rolodex cards, envelopes and mailing labels.  COMTRAC can
    also print reports such as the day's and week's appointments, a list of
    client companies, a telephone list, a phone log, and a letter log.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COFIX.DOC

{% raw %}
```

COFIX - the program that will repair COMTRAC's file system is simple to
use.  Just enter "COFIX" followed by the name of the file system you
need to repair.  COFIX is a stand alone program run from DOS.

Example:
             c> cofix contact    <- repair the contact file system

Do not enter any extensions in the file system name, (i.e. ".dt" or
".nx0")

COFIX makes sense out of as much data on the disk as possible and 
rebuilds the indexes automatically.   Files can become corrupt
due to loss in power or if the machine is reset before COMTRAC
has had a chance to write current index and data file information
onto the disk.  COFIX is not intended to replace a backup system,
it should supplement a backup strategy.
```
{% endraw %}

## COMTRAC.DOC

{% raw %}
```













                                COMTRAC DOCUMENTATION
                                     Version 1.1
                                     May 1, 1988



                                     Ed Trujillo
                                   P.O. Box 23052
                             Albuquerque, NM  87192-1052



















































                                  TABLE OF CONTENTS


          INTRODUCTION . . . . . . . . . . . . . . . . . . . . . . . .    1

          TO ORDER . . . . . . . . . . . . . . . . . . . . . . . . . .    2

          TIPS . . . . . . . . . . . . . . . . . . . . . . . . . . . .    2

          DATA ENTRY AND FUNCTION KEYS . . . . . . . . . . . . . . . .    2

          SYSTEM REQUIREMENTS  . . . . . . . . . . . . . . . . . . . .    3

          FILE SYSTEM REPAIR . . . . . . . . . . . . . . . . . . . . .    4

          DATA FILE BACKUP . . . . . . . . . . . . . . . . . . . . . .    4

          START UP . . . . . . . . . . . . . . . . . . . . . . . . . .    5

          ACCESSING COMPANIES  . . . . . . . . . . . . . . . . . . . .    5

          ADDING AND DELETING COMPANIES  . . . . . . . . . . . . . . .    6

          PHONE CALL LOGGING . . . . . . . . . . . . . . . . . . . . .    6

          DIALING THE PHONE  . . . . . . . . . . . . . . . . . . . . .    7

          FILE SYSTEMS . . . . . . . . . . . . . . . . . . . . . . . .    8

          MANUAL LETTER LOGGING  . . . . . . . . . . . . . . . . . . .   10

          AUTOMATIC LETTER LOGGING . . . . . . . . . . . . . . . . . .   11

          MAIL MERGE . . . . . . . . . . . . . . . . . . . . . . . . .   11

          CREATING A MAIL/MERGE FILE . . . . . . . . . . . . . . . . .   12

          CREATING A WORDPERFECT MAIL/MERGE FILE . . . . . . . . . . .   15

          ENTERING DATES . . . . . . . . . . . . . . . . . . . . . . .   17

























                                                  COMTRAC 1.1 Documentation



          INTRODUCTION


               This document  file is intended to fill in the gaps that the
          on-line help  function  can't  provide.    Use  this  document in
          conjunction  with  the  on-line  help  to get the most out of the
          system.

               COMTRAC is an  outgrowth  of  the  contact  tracking system-
          CONTACT.    COMTRAC  was  written  in response to those users who
          needed to keep track of product  names, SIC  codes and companies.
          If you have used CONTACT you will notice very similar features in
          many respects including the phone dialer, reports and menus.

               The COMTRAC program is protected by  United States copyright
          law.   COMTRAC is  distributed as  shareware meaning that you are
          welcome to try out the software for a limited period of time.  If
          the  software  meets  your  needs  you should register which will
          entitle you to a calendar generating program integrated  with the
          COMTRAC  file  systems,  an  ASCII import program allowing you to
          import data into COMTRAC and you  will be  on a  mailing list for
          notification of future enhancements.

               COMTRAC  is  provided  AS  IS, with no warranty expressed or
          implied.  Edmund L. Trujillo specifically  disclaims any  and all
          warranties included  but not  limited to fitness for a particular
          purpose.  In no event shall Edmund L. Trujillo be  liable for any
          loss of  profit or any other commercial damage, including but not
          limited to special, incidental, consequential or other damages.




















          Copyright(c) 1988 by Edmund L. Trujillo                    Page 1












                                                  COMTRAC 1.1 Documentation



          TO ORDER


               To  order  COMTRAC,  call  (800)  628-2828   extension  581.
          Operators will  take your  call toll  free 24  hours a day.  This
          number  is  for  orders  only,  the  operator  cannot  answer any
          questions.


          TIPS

               I'm sure you have been nagged by authors of various programs
          on the virtues of making a  backup of  your program  diskette.  I
          don't intend  on breaking  the tradition, so here goes ....   You
          should immediately make a  backup copy  of the  program diskette.
          This is  for your  protection as  often diskettes  can be lost or
          inadvertently destroyed.

               Please don't forget to make  regular  backups  of  your data
          files.   If you plan on using the system regularly, you will find
          the data to be more valuable than the actual program.


          DATA ENTRY AND FUNCTION KEYS


               Use the ESC or TAB key as an  escape hatch  to get  out of a
          screen or  prompt.  It is always available.  If upon pressing the
          ESC or  TAB key  an error  message like:  "PRESS ESC  AT START OF
          LINE" appears,  press the backspace key to position the cursor to
          the start of the prompt then press the ESC key.

               The F1 (function 1 key) is the HELP key.   Use this  key for
          context sensitive  help at  any point  in COMTRAC.  A help window
          will  pop  up  and  a  short  descriptive  help  message  will be
          displayed.   If there is more than one help page, the help window
          will prompt you to  press any  key for  the next  page.   Plan on
          using the help function liberally when first using COMTRAC.











          Copyright(c) 1988 by Edmund L. Trujillo                    Page 2












                                                  COMTRAC 1.1 Documentation


               The F2 (function 2 key) is the SAVE SCREEN key.  By pressing
          the F2 key you  will  be  able  to  capture  a  screen  for later
          printing or  saving to a file.  The F2 key saves the image of the
          screen in  a file  called "screen.sav".   The  menu entries PRINT
          SAVED SCREEN  and DISCARD SAVED SCREEN refer to the screens saved
          in this file.

               Use the LEFT and RIGHT arrows  to move  between fields while
          updating a  screen.   These same keys will move between the pages
          in the COMTRAC MENU.

               The DOWN and UP arrow keys will also move between the fields
          while updating  a screen.  If in the COMTRAC MENU, they will page
          from company to company.

               When prompted for a  "yes" or  "no" response  to a question,
          you may  enter "Y", "y" or "1" for yes and "N", "n" or "0" for no
          (omit the quotes).   Only those commands that need to be followed
          by pressing the ENTER or RETURN key require it.

               While in  the COMPANY MENU, the F3 and F4 keys will dial the
          telephone  if  your  phone  is  connected  to  a  modem  via your
          computer.


          SYSTEM REQUIREMENTS


               COMTRAC works on IBM compatibles and will run with only 256K
          of available RAM memory.  A  color  monitor  is  helpful  but not
          necessary.   COMTRAC will  run on  both a floppy system or a hard
          disk system.  A printer is useful but not absolutely necessary.

               Make sure that the line "FILES  =  20"  is  present  in your
          config.sys  file.    Since  COMTRAC  is  basically  a specialized
          database program, it needs to open  a large  number of  files and
          the default  limit of  8 files  is not enough.  If you don't know
          how to do this, consult your DOS manual or a DOS guru.












          Copyright(c) 1988 by Edmund L. Trujillo                    Page 3












                                                  COMTRAC 1.1 Documentation


          FILE SYSTEM REPAIR


               The installation disks include a repair program - "CFIX.EXE"
          which repairs  broken index  and data files.  The file system may
          become corrupt if the computer loses power or is shut  off before
          COMTRAC has had a chance to update its index files.

               Enter "CFIX  <file_system_name>" at the DOS prompt to repair
          your broken file system.  If  the file  system is  damaged beyond
          repair you  will have  to restore a backup copy.  For example: to
          repair the BUSINESS file system enter:

               > CFIX BUSINESS


          DATA FILE BACKUP


               Although COMTRAC comes with tools to repair broken  data and
          index  files,  you  should  periodically  backup your data files.
          Depending  on  the  media  you  are  using  for  backups  (360 Kb
          diskette, 1.2  Mb diskette  or cassette  tape), you should backup
          the system once a week or more if you are using the  system quite
          heavily.

               Several  products  exist  for  backing  up.   DOS includes a
          BACKUP command especially for this task.  If your data  and index
          files  will  fit  on  one  floppy, the easiest way to backup your
          system is to copy them onto a floppy using the COPY command.

               A simple batch file  "SBACKUP.BAT"  has  been  provided that
          will  copy  a  file  system  and  associated  form files from the
          current directory onto the floppy drive designated.   The command
          is used like:

               > SBACKUP business a:

               This command  COPIES the business file system and form files
          from the current directory into drive A.  










          Copyright(c) 1988 by Edmund L. Trujillo                    Page 4












                                                  COMTRAC 1.1 Documentation



          START UP


               When COMTRAC starts up, it expects to see the following data
          files in the current directory:

                     comtrac.hdr    -  parameter file
                     comtrac.dt     -  data file
                     comtrac.nx0    -  index file
                     comtrac.nx1    -  index file
                     comtrac.nx2    -  index file

               The help file - "COMTRC11.HLP" should also be in the current
          directory if you want on-line help.  Do not modify  the help file
          as COMTRAC will become confused when asked for help and will most
          likely present garbled help information.

               To start up COMTRAC with a different file  system - perhaps,
          "BUSINESS" or "VENDORS", at the DOS prompt enter:

              >  COMTRAC BUSINESS

               In this  case COMTRAC  expects to see the following files in
          the current directory:

                     business.hdr    -  parameter file
                     business.dt     -  data file
                     business.nx0    -  index file
                     business.nx1    -  index file
                     business.nx2    -  index file


          ACCESSING COMPANIES


               Companies are accessible  by  specifying  the  company name,
          product  name  or  SIC  code  at any of the COMPANY MENU prompts.
          Simply enter the first few characters of the company name  at the
          prompt and  the first  match will  be retrieved.  For example, to
          access the record for "Bob Hall's Repair Shop", simply enter "bo"
          at the  prompt.   Pressing the DOWN arrow at that point will call
          up the next company in alphabetic order.







          Copyright(c) 1988 by Edmund L. Trujillo                    Page 5












                                                  COMTRAC 1.1 Documentation


               At the top left corner of the screen is the  message INDEX. 
          The index can be changed by entering "i" at the prompt.  You have
          3 different selections - "Name Product  and SIC".   Enter  one of
          "n" for  company name, "p" for product name, or "s" for SIC code.
          Once the index has changed, pressing the UP  and DOWN  arrow keys
          will  access  each  company  in  alphabetic  order by the current
          index.


          ADDING AND DELETING COMPANIES


               Companies are added by entering the HEADER PAGE and pressing
          the "a"  key at the prompt.  The screen will be cleared and a new
          company can be added.  If  the DEFAULT  CITY, STATE  and ZIP have
          been  set   in  the   MISCELLANEOUS  MENU,   these  will  be  set
          automatically for the new company. 

               To permanently delete  the  company  from  the  file system,
          enter "d"  at the  HEADER PAGE.  Once deleted, the company cannot
          be retrieved.  There is no "undo" command.


          PHONE CALL LOGGING


               A modem attached to a phone  handset will  enable COMTRAC to
          dial telephone  numbers automatically.  The SYSTEM PARAMETER PAGE
          (modem port) must be specified correctly.   Normally,  modems are
          attached  to  COM1.    Choose  the COM1 option under "modem".  If
          there isn't a modem attached to  the computer,  enter "n"  at the
          prompt.

               Phone calls  can be  initiated at  any point  in the COMPANY
          MENU, except  when the  INFO popup  is displayed,  when the TIMER
          popup is displayed or when the MEMO and PLACE fields in the PHONE
          LOG PAGE are being updated.

               Once F3 or F4 has been pressed, the modem will begin dialing
          the  telephone.    Once  the  modem has started to dial, lift the
          receiver off the hook, and press one of  "b" -  busy signal, "n"-
          no answer  or any other key to signify that the call went through
          successfully.  Pressing a key other than "b" or "n" will bring up
          the TIMER POP UP window which will record the elapsed time on the
          call.  Pressing a  key will  also instruct  COMTRAC to disconnect
          the modem from the phone call.  Failure to press a key may prompt
          the modem to think  its communicating  with another  computer and
          you may hear a screeching sound while talking to your contact.


          Copyright(c) 1988 by Edmund L. Trujillo                    Page 6












                                                  COMTRAC 1.1 Documentation


               If the  ESC key  is pressed after the dialing has begun, the
          call will be aborted.   COMTRAC  releases  modem  control  of the
          phone once  a key  is pressed.    If a key other than ESC, 'b' or
          'n' is pressed, then a timer popup is displayed with the starting
          clock time, elapsed time and place to enter a MEMO.

               After the  popup timer  is displayed  press the ESC or ENTER
          key to quit the  elapsed time  logging.   A new  phone call entry
          will be  added to the top of the PHONE LOG PAGE.  The older phone
          calls will be shifted down one  line.   The fifteenth  call (last
          line) will be discarded.

               The log  of phone calls also appears on the 6-month, 3-month
          and 1-month calendar  pages.    Due  to  space  restrictions, the
          following code letters are used in the 3 month calendar:

                 'b' - busy signal
                 'n' - no answer
                 'i' - call was received

               If you  wish to  keep a  history of more than 15 phone calls
          you will need to do this in a paper file.   Periodically  use the
          SAVE  SCREEN  (F2)  key  to  archive ALL phone calls in the PHONE
          PAGE.   Then  print  the  saved  screen  and  file  it  under the
          appropriate paper file for the company.  Then clear out the phone
          calls using the CLEAR  command  by  entering  "c"  after pressing
          ENTER at the PHONE PAGE.


          DIALING THE PHONE


               What follows is a short discussion on how COMTRAC interprets
          and dials a phone number.

               The modem  will pause  for two  seconds if  the phone number
          contains a  "," (comma).   If there is an "x" or "X" in the phone
          number, the remaining numbers are ignored.   Any  character other
          than a  comma is  ignored.  The following list of examples should
          clarify.










          Copyright(c) 1988 by Edmund L. Trujillo                    Page 7












                                                  COMTRAC 1.1 Documentation


               Examples:

              9, 4443212      - Dials 9, pauses for  2  seconds  then dials
                              4443212

              (555) 555-1212  The    parenthesis    are    ignored,   dials
                              15555551212, COMTRAC  automatically dials '1'
                              on  long  distance  numbers.  (10 digit phone
                              numbers)

              432-1244 x 333  Dials  4321244.    333  is  recognized  as an
                              extension and as such is not dialed.

              765-4321 claim  Dials 765-4321 and ignores "claim"

              765-4321 cl 33  Dials 765432133,  "cl" is ignored but "33" is
                              dialed.

              765-4321 clx33  Dials  7654321,  "33"  is  ignored  since  it
                              follows "x".


          FILE SYSTEMS


               COMTRAC keeps information in a set of files referred to as a
          "file system".  The file  system  is  composed  of  the following
          files: a parameter file, a data file, and three index files. When
          COMTRAC starts up, it expects the  following files  to be present
          in the current directory:

                    comtrac.hdr   -  parameter file
                    comtrac.dt    -  data file
                    comtrac.nx0   -  index file
                    comtrac.nx1   -   "     "
                    comtrac.nx2   -   "     "

               These five  files make  up a  file system.   The file system
          name is displayed in the upper left corner of the MAIN MENU.   It
          looks something  like "COMTRAC  (22 records)".   The "22 records"
          refers to the number of  companies  stored  in  the  current file
          system.

               Companies can  be separated into distinct file systems using
          this menu.  For example: friends can be kept in  one file system,
          business  associates  in  another  file  system,  members  of the
          softball team in another, etc.



          Copyright(c) 1988 by Edmund L. Trujillo                    Page 8












                                                  COMTRAC 1.1 Documentation


               To create a new file system the first  step is  to enter the
          CREATE FILE SYSTEM option.  COMTRAC will prompt for a file system
          name.    Choose  a   descriptive  name,   "friends",  "softball",
          "business", and  type it  in.  Do not type any periods "." in the
          name. You are limited to 8 characters.

               If the file system to  be  created  is  "BUSINESS"  then the
          following files will be created:

                    business.hdr   -  parameter file
                    business.dt    -  data file
                    business.nx0   -  index file
                    business.nx1   -   "     "
                    business.nx2   -   "     "

               All parameters such as codes, printer codes and options, and
          modem options will be  copied from  the current  file system into
          the newly created file system.  

               If you  want to  start COMTRAC with a different file system,
          when you first enter company from the DOS prompt type in:

                    > COMTRAC BUSINESS

               COMTRAC will open the "BUSINESS" file system instead  of the
          default "COMTRAC" file system.

               Once the  file systems  have been created, it is possible to
          consolidate records from different  file  systems  into  a common
          file  system.    Use  the  COPY COMPANIES FROM ONE FILE SYSTEM TO
          ANOTHER menu item under the FILE  SYSTEM MENU.   You  are able to
          selectively copy  records from one file system based on the CODES
          field.

















          Copyright(c) 1988 by Edmund L. Trujillo                    Page 9












                                                  COMTRAC 1.1 Documentation



          LETTER LOGGING


               A record of the last 15 letters or correspondence is tracked
          per company.  Letter logging will occur automatically when one of
          the following forms are chosen:


                   FORM             FILE NAME
                   --------------   ----------
                   mailing labels   comtrac.lbl
                   form 1           comtrac.1
                   form 2           comtrac.2
                   form 3           comtrac.3
                   form 4           comtrac.4
                   form 5           comtrac.5

               Letters are  entered manually  or automatically  if the form
          letter function  in the  COMPANY REPORTS menu is used.  The forms
          MUST be sent to either the printer or a capture file to be logged
          automatically.  Forms viewed on the screen will not be logged.

               Note: when  creating a  new file  system, it is up to you to
          create new form files - business.1, business.2, ...


          MANUAL LETTER LOGGING


               From the COMPANY MENU - LETTER PAGE, press ENTER then "a" to
          add a  new letter.  THe older letters will shifted down one space
          and the last entry on the page at the bottom  of the  screen will
          be discarded.   Enter  the date, whether it was Sent or Received,
          and a brief title.















          Copyright(c) 1988 by Edmund L. Trujillo                   Page 10












                                                  COMTRAC 1.1 Documentation



          AUTOMATIC LETTER LOGGING


               Letters will be logged  if  the  output  destination  in the
          REPORTS MENU  is set to either the PRINTER or a CAPTUREFILE.  For
          each company selected on  the "MAILING  LABELS", "FORM  1", "FORM
          2", "FORM 3", "FORM 4", or "FORM 5", a new entry with the current
          date stamp, "sent" status and the  name of  the form  on the memo
          field will be set.

               Letters viewed  (output destination  set to screen) will not
          be logged.


          MAIL MERGE


               COMTRAC provides a built in mail/merge function.  Mail/merge
          allows  the  creation  of  custom forms such as job applications,
          late billing notices, advertising materials, etc.   Rolodex cards
          and envelopes can also be set up.

               Each file system has 6 associated files:

                   comtrac.1        - form 1
                   comtrac.2        - form 2
                   comtrac.3        - form 3
                   comtrac.4        - form 4
                   comtrac.5        - form 5
                   comtrac.lbl      - mailing label format

               After creating a new file system you will want to create its
          associated form  files.   These can  be initially  copied from an
          existing file  system.   For example:  we have just created a new
          file system called "BUSINESS."  We would then want to  create the
          following files:

                   business.lbl
                   business.1
                   business.2
                   business.3
                   business.4
                   business.5






          Copyright(c) 1988 by Edmund L. Trujillo                   Page 11












                                                  COMTRAC 1.1 Documentation


               If you  have tried  to PRINT  or TYPE out a document in word
          processing format,  you most  likely would  have seen  a bunch of
          funny looking  characters.   These are the control codes built in
          to the document.

               COMTRAC currently works with  ASCII files  only.   These are
          files that do not have special control codes built into the file.
          The advantage of ASCII files is that they can be read by most any
          word processor  and can  be printed  using the DOS PRINT command.
          The disadvantage  is  that  they  do  not  containing information
          required to control the printer, or change font styles.

               COMTRAC attempts  to use  the best of both worlds, it access
          ASCII files but uses special CONTROL  flags to  indicate a change
          in the  printer on  output.   This allows  the changing of fonts,
          bold face, and italics if your printer is capable.


          CREATING A MAIL/MERGE FILE


               If you have an ASCII editor such as the Sidekick editor, the
          Norton editor,  or even DOS's Edlin, you may create an ASCII file
          directly.  If you are using Wordstar, put  it into "non-document"
          mode while  editing the  file.  If you are using WordPerfect, use
          the TEXT-OUT option.  For detailed instructions on  how to create
          an ASCII  file sometimes  referred as  a TEXT  file, consult your
          word processor user's manual.






















          Copyright(c) 1988 by Edmund L. Trujillo                   Page 12












                                                  COMTRAC 1.1 Documentation


               A form letter will contain fields that can  be filled  in by
          the computer.   For example, the form may look something like the
          following in creating a late billing notice.

                --------------------------------------------------------- 
                Dear *sa *fn *ln,


                We seem to have missed your last payment.  If this notice

                is in error please let us know.


                Thanks,

                Management.
                ---------------------------------------------------------

               This is a very simple form letter.  The fields  "*sa", "*fn"
          and  "*ln"  are  placeholders  for the salutation, first name and
          last name respectively.

               If the client "Mr.  Bill Smith"  was selected  for printing,
          the form letter would look like:

                --------------------------------------------------------- 
                Dear Mr. Bill Smith,


                We seem to have missed your last payment.  If this notice

                is in error please let us know.


                Thanks,

                Management.
                ---------------------------------------------------------












          Copyright(c) 1988 by Edmund L. Trujillo                   Page 13












                                                  COMTRAC 1.1 Documentation


               The following  table shows the different fields available in
          COMTRAC for mail/merge:

             *d1 - current date (format - 31 Oct 87)
             *d2 - current date (format - October 31, 1987)
             *d3 - current date (format - 11/31/87)
             *t1 - current time (format - 15:23:43) military
             *t2 - current time (format - 15:23) military
             *t3 - current time (format - 03:23:43) standard
             *t4 - current time (format - 03:23) standard
           
             *na - company name 
             *a1 - address line 1 
             *a2 - address line 2 
             *st - two letter abbrev for state 
             *ST - spelled out state 
             *ci - city name 
             *zi - zip code 
             *co - contact name 
             *de - dear salutation 
             *ti - title of contact 
             *me - memo field 
             *pr - product 
             *si - SIC code 
             *po - phone One 
             *pt - phone Two 

             *p0 - printer code 0
             *p1 - printer code 1
              .      ...   ...
             *p7 - printer code 7



















          Copyright(c) 1988 by Edmund L. Trujillo                   Page 14












                                                  COMTRAC 1.1 Documentation


               To pad with blanks and right or left justify a field enter a
          width specification as:

             *po%20  - Phone 1 right justify and pad with space.
             *po%-20 - Phone 1 left justify and pad with space.

               Do  not  use  TAB's  in  the ASCII file.  Currently, COMTRAC
          doesn't correctly  expand  TABS  (this  will  be  fixed  in later
          versions).   Instead, use  the SPACE BAR to place text instead of
          the TAB key.

               The number  of lines  in the  ASCII file  determine the form
          length.   If you  are creating a form letter that will be printed
          on 8 1/2 X 11 inch paper, you will want  to make  sure that there
          are exactly 66 lines in the document.

               Merge files  can be  created that  are compatible with other
          word processors.  For  example  a  comma  delimited  file  use by
          WordStar(tm) can be created using the following as a template:

               "*na","*a1","*a2","*ci","*st","zi"

               An example  using WordPerfect(tm)  is presented  in the next
          section.


          CREATING A WORDPERFECT MAIL/MERGE FILE


               It  is   possible  to   use  COMTRAC   in  conjunction  with
          WordPerfect to  create a  mail merge  file (secondary file).  The
          example  presented  below  works  with  WordPerfect  version 4.2.                                                                         
          Since WordPerfect  has powerful word processing capabilities, you
          may want to consider using WordPerfect instead of  a simple ASCII
          editor with COMTRAC's limited built-in mail/merge feature.

               Enclosed is  a form  file that  you can use as a template in
          creating a "secondary file" for WordPerfect.  The  file is called
          "COMTRAC.WP".   Use the  following steps  to create the secondary
          file.










          Copyright(c) 1988 by Edmund L. Trujillo                   Page 15












                                                  COMTRAC 1.1 Documentation


               First use WordPerfect to  create  a  file  in  the following
          format  or  copy  the  sample  file  COMTRAC.WP to COMTRAC.3 as a
          template :

             *na^R
             *a1^R
             *a2^R
             *ci^R
             *ST^R
             *zi^R
             ^E

               From  WordPerfect   save  this   file  under   the  name  of
          "COMTRAC.3"  if   you  are   running  the  COMTRAC  file  system.
          Similarly, it will be named "BUSINESS.3" if running  the BUSINESS
          file system.  In the SYSTEM PARAMETER MENU, make the name of form
          number 3 "Word Perfect merge" for future reference.

               After creating the form file "COMTRAC.3",  you are  ready to
          create  the  secondary  file  for  use  with  WordPerfect's merge
          feature.  

               In order to properly create the WordPerfect file you need to
          change the  "END OF  LINE" option  to "NL" only.  The END OF LINE
          option is accessible from the PRINTER PARAMETER MENU.

               Then  select  the  CAPTUREFILE  option  after  choosing  the
          REPORTS menu item.  Name the capture file "comtrac.sf" and select
          FORM 3 in the  REPORTS  MENU.    The  ".sf"  extension represents
          Secondary File.   Each  company that you select for printing will
          be stored in the file "comtrac.sf."  The file will  look like the
          following:

              Hamilton Company^R
              511 North Main Avenue^R
              ^R
              Albuquerque^R
              New Mexico^R
              87111^R
              ^E
              Joe's Hamburgers^R
              1763 Central Avenue^R
              Suite 432^R
              Santa Fe^R
              New Mexico^R
              88222^R
              ^E



          Copyright(c) 1988 by Edmund L. Trujillo                   Page 16












                                                  COMTRAC 1.1 Documentation


               You  have  created  a  secondary  file  for  easy  use  with
          WordPerfect's mail merge function.  For  more information  on how
          to   use   WordPerfect's   mail/merge   functions   consult  your
          WordPerfect manual.


          ENTERING DATES


               Dates are  entered  into  COMTRAC  in  many  different ways.
          First a  definition is  in order.   The date displayed at the top
          right corner of the screen is  COMTRACS reference  DATE sometimes
          called the CURRENT date.  It is from this date that relative date
          arithmetic is based.  With a little practice  and experimentation
          it will  become easy  to enter  dates into  COMTRAC. Examples are
          shown to demonstrate the effectiveness of date arithmetic.

               Suppose the CURRENT DATE is 1 Feb 88, Monday:

           YOU ENTER    RESULT     NOTES
           ----------   ---------  -----------------------------------    
            021288      12 Feb 88  Date entered in "mmddyy"  format without
                                   slashes or dashes.  Do not use dashes "-
                                   " since  COMTRAC will  interpret them as
                                   minus signs for date arithmetic.

             3mar       3 Mar 88   Current year is used.

             0311      11 Mar 88   Date entered in "mmdd" format.

             10        10 Feb 88   The 10th  day of month.  The current    
                                   month - Feb and year - 1988 are used.

             21        21 Feb 88   The 21st day of month.  The current     
                                   month "Feb" and year "1988" are used.

             +1w        8 Feb 88   Next week is set.

             +7         8 Feb 88   Adding seven days has the same effect as
                                   adding one week.

             -1w       25 Jan 88   Last week.

             +sat      6 Feb 88    Next Saturday.  The  other  days  of the
                                   week work similarly.  "+mon, +tue, +wed,
                                   +thu, +fri, +sun".

             5+1m      5 Mar 88    The fifth of next  month.    We  add one
                                   month to day 5 of this month.

          Copyright(c) 1988 by Edmund L. Trujillo                   Page 17












                                                  COMTRAC 1.1 Documentation


             1+2m-fri 25 Mar 88    The last  friday of  next month. (1st of
                                   two months from now minus friday)
















































          Copyright(c) 1988 by Edmund L. Trujillo                   Page 18






```
{% endraw %}

## FILE1530.TXT

{% raw %}
```
Disk No: 1530
Program Title:  PHONE MESSAGE version 1.2 & COMTRAC version 1.1
PC-SIG version 1

PHONE MESSAGE is a memory-resident utility that allows you to quickly
record phone messages.  Once the program is installed in memory, all you
have to do is to press the "hot-key" to activate this handy phone
jotter.  A small screen will appear allowing you to record who the phone
call is for, who sent the phone call, the phone number of the caller,
and a short message.  All the information is then automatically
transferred to an ASCII text file for later viewing or editing.

Synopsis: Memory resident phone message jotter.  Always handy!  Throw
away those pesky scraps of paper.

COMTRAC keeps track of your appointments, commitments, phone calls, and
letters to other companies.  It is the perfect support program for sales
prospecting, or coordinating other business-to-business activities.  The
program can work with your modem to perform autodialing and log the time
spent on each phone call.

COMTRAC maintains records on each company you deal with, and organizes
for retrieval such information as the company name, the address, two
phone numbers, the SIC number, the product, and whom to contact.  Within
a split second you can search for and find a company's record which
includes logs of your last 15 phone calls, letters, and appointments
with the contact.  Each record also has a six-month, three-month, and
one-month calendar showing your commitments, scheduled meetings, etc.,
with the company.

You can export any of this information to your word processor to create
form letters, Rolodex cards, envelopes and mailing labels.  COMTRAC can
also print reports such as the day's and week's appointments, a list of
client companies, a telephone list, a phone log, and a letter log.

Synopsis: Keep track of business-to-business contacts, meetings, and
other activities.  Pop-up a client file in a second for reviewing a
log of up to 15 past phone calls, letters or appointments.

Usage:  Appointment Calendar/Address Manager/Phone Log.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for PHONE MESSAGE, $30.00 plus $5.00
shipping for COMTRAC.

File Descriptions:

CO       EXE  Utility program.
COFIX    DOC  COFIX documentation.
COFIX    EXE  Utility program.
COMTRAC  1    Data file.
COMTRAC  2    Data file.
COMTRAC  3    Data file.
COMTRAC  4    Data file.
COMTRAC  5    Data file.
COMTRAC  DOC  COMTRAC documentation.
COMTRAC  DT   Data file.
COMTRAC  HDR  Data header file.
COMTRAC  LBL  Data label file.
COMTRAC  NX0  Data index file.
COMTRAC  NX1  Data index file.
COMTRAC  NX2  Data index file.
COMTRAC  WP   Data file.
COMTRC11 HLP  Help file.
PM       COM  PHONE MESSAGE main program.
PM       DOC  PHONE MESSAGE documentation.
PMGET    EXE  PHONE MESSAGE sub program.
READ     ME   Info file.

The PC-SIG Library
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## PM.DOC

{% raw %}
```

Phone Message version 1.2 is a memory resident program designed to 
take phone messages.   Simple press the hotkey combination and a popup 
will  appear  prompting for "TO", "FROM", "PHONE" and "MESG" fields.
This information is saved in an ASCII file for later viewing or 
printing.  

Version 1.2 includes more space for messages and a utility that 
automatically separates each person's messages.  Thanks to S. McConnel
for her suggestion.

Phone Message was designed for receptionists or secretaries or anyone
who hates to listen to the phone ring while fumbling for a pen and note 
pad while editing a document.

To run Phone Message:

    From DOS enter "PM" with no arguments.

    Phone Message will then be installed in memory and can be invoked
    by pressing the LEFT SHIFT and ALT keys simultaneously.

Phone Message will create a file called "C:\PHONE.MSG" and append each new
phone message to this file.  If the hotkeys conflict with other TSR programs 
you have the ability to make some limited changes.  You can also remove Phone 
Message from memory if you run out of memory.  In order to remove Phone 
Message, it must be the last memory resident program installed.  To change
the drive where the phone messages are stored use "-d" option explained
below.

The phone messages stored in "c:\phone.msg" look like the following:

    TIME:  Wednesday 09:28 pm
    TO:    Dave                
    FROM:  Jim                 
    PHONE: 555-1212            
    MESG:  call back about the
        :  Davis transaction 
        :  ASAP
        : 
    ----------------------------------

You may be better off using initials only in the TO: field for
speed purposes.

After printing the phone messages, delete the file "c:\phone.msg" to
start fresh.  To extract phone messages for individual persons in the
office run the program "pmget".  Pmget will extract the messages for
those individuals whom you select.  Pmget will also put out a form
feed after every 54 lines for convenient printing.

CAVEATS

If you have any experience with using different memory resident programs
commonly known as TSR programs, you should be aware that TSR programs don't
often cooperate with each other.  It is a literal jungle in RAM memory where
many TSR programs are competing for interrupts and memory - hopefully not
the same memory.   If you have problems loading other programs, try removing
Phone Message from memory.   If the machine crashes, try changing the order
in which you install your TSR's or use one of the shareware TSR management
programs to selectively remove and install TSR's.

Phone Message - as it is written in the C language is somewhat of a memory
hog - it gobbles up 80 K of RAM.  Since it was designed primarily for
receptionists and secretaries this shouldn't be too much of a problem.

Phone Message will not come up if the screen is in graphics mode - it
will simply beep the bell.

Phone Message is provided AS IS, with no warranty expressed or implied.
Edmund L. Trujillo specifically disclaims any and all warranties included
but not limited to fitness for a particular purpose.  In no event shall
Edmund L. Trujillo be liable for any loss of profit or any other commercial
damage, including but not limited to special, incidental, consequential
or other damages.


SHAREWARE

If you use Phone Message at home or in your business on a regular
basis, I would appreciate a $10 donation.  Send to:

    Edmund Trujillo
    PO Box 23052
    Albuquerque,  NM  87192-1052

Donations help pay the rent and keep shareware authors interested in
upgrading and maintaining their products.  Thanks for your support.


EXAMPLES

To change the default destination drive enter the following (use a
lower case 'd'):

       > pm -d a		<- phone messages will  be
                                   stored in A:\phone.msg

       > pm -d d		<- phone messages will  be
                                   stored in D:\phone.msg

To change the hotkey combination enter (use a lower case 'k') :

       > pm -k 3          - Right Shift & Left Shift
       > pm -k 5          - Right Shift & Ctrl
       > pm -k 6          - Left Shift & Ctrl
       > pm -k 9          - Right Shift & Alt
       > pm -k 10         - Left Shift & Alt (default)
       > pm -k 12         - Ctrl & Alt


To change the hotkey combination and the default drive enter:

       > pm -d a -k 6

To remove Phone Message from memory freeing up space for other
applications (lower case 'r') :

      > pm -r


To get a usage message displaying command syntax:

      > pm -?

To separate phone messages for different people and store into separate
files for later printing:

      > pmget c:\phone.msg Dave > dave.msg

Each message with a "TO: Dave" line that matches will be stored in the
file "dave.msg".

To send Dave's messages directly to the printer:

      > pmget c:\phone.msg Dave > prn

You will be prompted for a person's name if you don't enter the search
string:

      > pmget c:\phone.msg
      Enter name to search : 

The search is not case sensitive, meaning that upper case will match 
lower case.  Also the name need not be an exact letter for letter
match, only the first characters need to match.  For example:

     DAVE matches with DAVE, DAVE L. and DAVE LOWRY

     DAVE does NOT match with DALE LOWRY
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1530

     Volume in drive A has no label
     Directory of A:\

    CO       EXE    133144   5-01-88   3:08p
    COFIX    DOC       741   5-01-88   2:04p
    COFIX    EXE     24364   5-01-88   2:03p
    COMTRAC  1         932   5-01-88   2:43p
    COMTRAC  2         236   1-18-88  10:17p
    COMTRAC  3         705   1-22-88   8:24p
    COMTRAC  4         309   1-18-88  10:18p
    COMTRAC  5        1251   1-18-88  10:30p
    COMTRAC  DOC     36891   5-01-88   3:01p
    COMTRAC  DT       6507   5-01-88   2:51p
    COMTRAC  HDR       560   5-01-88   1:14p
    COMTRAC  LBL        59   1-18-88  10:11p
    COMTRAC  NX0       553   5-01-88   2:51p
    COMTRAC  NX1       553   5-01-88   2:51p
    COMTRAC  NX2       553   5-01-88   2:51p
    COMTRAC  WP        112   4-16-88   2:25p
    COMTRC11 HLP     40033   5-01-88   3:08p
    FILE1530 TXT      3058   8-10-89   9:58a
    GO       BAT        38   7-14-89   8:01a
    GO       TXT      1002   8-10-89  10:16a
    PM       COM     30039   3-19-88   3:58p
    PM       DOC      5459   3-19-88   4:16p
    PMGET    EXE      9358   3-19-88   4:05p
    READ     ME       7555   5-01-88   3:14p
           24 file(s)     304012 bytes
                            4096 bytes free
