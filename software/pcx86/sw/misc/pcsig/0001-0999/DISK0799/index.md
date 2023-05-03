---
layout: page
title: "PC-SIG Diskette Library (Disk #799)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0799/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0799"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIDEFILE"

    SIDEFILE is a memory-based database manager that works with relatively
    small to medium sized files.  These files can be subjected to extremely
    fast manipulation because all of the data is stored in memory,
    eliminating the constant slow down of accessing the disk for
    information.
    
    SIDEFILE is also a disk-based data manager that can operate on large
    numbers of records in a manner similar to larger programs.  In this
    filing mode, SIDEFILE retains its easy to use interface and
    spreadsheet-like screens while affording disk-based usage.
    
    SIDEFILE is a fast, easy, and very forgiving program that attempts to
    make life easier for all who regularly use small business or personal
    data files for nearly any purpose.  SIDEFILE lets you to manipulate
    your many notes, lists and files with a flexibility approaching,
    sometimes surpassing the talents of larger systems.  You can also keep
    some of your small spreadsheet-type applications in SIDEFILE instead of
    in an expensive spreadsheet program.  You can even do small editing
    jobs right within SIDEFILE instead of having to find and load yet
    another program such as a word processor or editor.  Of course, all of
    your SIDEFILE files will still be compatible with those other programs
    should you choose to use them.
    
    SIDEFILE uses two types of files: those with a built-in header line
    (data file), and those without a built-in header line (text file).  You
    can perform all available commands with a data file, but not with a
    text file.  Text file manipulation is mostly for convenience.
    
    SIDEFILE has proven to be one of the most flexible database programs
    available for the IBM PC.
    
    System Requirements:  None.
    
    How to Start: To start the SIDEFILE program, put your working disk in
    one of your disk drives and type SF (press enter).  You may type the
    name of the data file you wish SIDEFILE to load right on the command
    line -- SF DATAFILE (press enter).
    
    File Descriptions:
    
    ???????  SF   Example database file (11 files).
    EXAMPLES DOC  Documentation file explaining example files.
    SF       DOC  Documentation file.
    SF       EXE  Main program.
    SF       HLP  Help file used by SF.EXE.
    PADLOCK  ADD  Advertisement for another of the author's programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EXAMPLES.DOC

{% raw %}
```
                      SideFile (tm) Examples Documentation

        This  file  provides  a short description of  the  example  files 
        provided with the SideFile distribution disk.

        ACCOUNTS.SF - A file to keep information on all of your  accounts 
             up to date.  Includes the companies address, telephone,  and 
             your account number.

        ADDRESS.SF  - Very similar to the accounts.sf file,  except  this 
             one is for your friends and close contacts.

        CHKBOOK.SF  - This particular file is a check book for one  bank, 
             one account.  Every time you write a check or deposit  money 
             into the account, enter into SideFile.  You can get a  total 
             of  the  Amount  field  at any time  to  find  your  current 
             balance.   If  you  enter  it in on  the  day  you  did  the 
             transaction, the date field will come up with the right date 
             for  you.  When it comes time to balance your  account,  you 
             need to do only three things:

              1.  Delete  all  checks  and  deposits  that  cleared  your 
                  account.   You  do not need to add a line  for  service 
                  charge because it will have 'cleared' your account.

              2.  Edit the 'Last BANK balance' record and put in the  new 
                  bank  balance.  Any line entries now left in  the  file 
                  are checks and/or deposits that are already outstanding 
                  for the next month (they did not clear this time).

              3.  Total  the  Amount field to see your new  balance  with 
                  remaining entries.

             Remember  to  add any new debits or credits as  they  occur, 
             just as you would keep your paper checkbook up to date.

             The space before the 'Last BANK balance' entry is so that if 
             you sort on that field, the balance line will end up on  top 
             of the list.  Of course you can also sort or re-sort on  the 
             date field.

        CHKBOOK2.SF  -  This is another example of a check  book  system, 
             however this file uses two different accounts - banking  and 
             checking.   Try  sorting on different fields  while  in  the 
             EDITOR (with <F5>) to see the different affects.  Use  <Alt-
             F9> to total the columns.

        CONTACTS.SF  -  This list is for a person that works at  Acme,  a 
             large  company with lots of departments.  The employee  also 
             has  kept some of his personal, non-work  related  contacts, 
             separating them by description in the first field.

        HOUSECAT.SF  - Exactly like the computer catalog; this one is  on 
             household items.  Great for an insurance listing.

        INVENTRY.SF - A short and simple example of an inventory.

        NUMBERS.SF - A place to keep all of the numbers in your life - no 
             matter what the number, serial number, account number,  etc. 
             belongs to, it can be kept with all the other numbers  right 
             here in this list.

        PHONE.SF  - A little phone list for home.  Print it out  now  and 
             then  and tape it to the kitchen cabinet for the  family  to 
             use.  As more numbers become important for the home,  update 
             the list and print it out again.

        PORTFOLO.SF  -  A  busy file containing lots  of  information  on 
             someone's  'money' accounts.  Total the Amount field to  get 
             green  with  envy (it's not ours!).  All his  accounts,  the 
             why's, where's, when's, and the totals, it's all here.

             The  neat thing about this file is that when you  receive  a 
             report  or statement from one of the accounts on  the  list, 
             get  into SideFile and update the list.  Then make  sure  to 
             edit the date field associated with that record.  just press 
             <enter>  when the date field appears in the edit  block  and 
             the  current date will be added to the record.  If  you  are 
             simply doing some file maintenance editing, then do not edit 
             that date field and the old date will be preserved.  In  the 
             EDITOR,  just use the <arrow keys> to leave the  date  field 
             unchanged, or the <enter> key to leave it with the new date.

        TODO.SF - Everyone needs a 'to do' list.  You may be the type  of 
             person that only wants to keep a list of long term projects, 
             or  you may want a daily list.  Whatever you want,  you  can 
             make a file like this work for you.  Separate your notes out 
             by  category, and then sort the list as you add to it for  a 
             pictorial view of what's up.  Print the list out and take it 
             with you.  But be forewarned, you may become dependent  upon 
             it.


```
{% endraw %}

## FILES799.TXT

{% raw %}
```
Disk No  #799
Program name: SIDEFILE version 2.33
PC-SIG version 1.1
 
SIDEFILE is a memory-based database manager that works with relatively
small to medium sized files.  These files can be subjected to extremely
fast manipulation because all of the data is stored in memory, eliminating
the constant slow down of accessing the disk for information.
 
SIDEFILE is also a disk-based data manager that can operate on large
numbers of records in a manner similar to larger programs.  In this filing
mode, SIDEFILE retains its easy to use interface and spreadsheet-like
screens while affording disk-based usage.
 
SIDEFILE is a fast, easy, and very forgiving program that attempts to make
life easier for all who regularly use small business or personal data
files for nearly any purpose.  SIDEFILE allows you to manipulate your many
notes, lists and files with a flexibility approaching, sometimes
surpassing the talents of larger systems.  You can also keep some of your
small spreadsheet-type applications in SIDEFILE instead of in an expensive
spreadsheet program.  You can even do small editing jobs right within
SIDEFILE instead of having to find and load yet another program such as a
word processor or editor.  Of course, all of your SIDEFILE files will
still be compatible with those other programs should you choose to use
them.
 
SIDEFILE uses two types of files: those with a built-in header line (data
file), and those without a built-in header line (text file).  You can
perform all available commands with a data file, but not with a text file.
Text file manipulation is mostly for convenience.
 
SIDEFILE has proven to be one of the most flexible database programs
available for the IBM PC.
 
Usage:  Database.
 
System Requirements:  None.
 
How to Start:  To start the SIDEFILE program, put your working disk in one
of your disk drives and type SF (press enter).  You may type the name of
the data file you wish SIDEFILE to load right on the command line -- SF
DATAFILE (press enter).
 
Suggested Registration:  $29.95
 
File Descriptions:
 
???????  SF   Example database file (11 files).
EXAMPLES DOC  Documentation file explaining example files.
SF       DOC  Documentation file.
SF       EXE  Main program.
SF       HLP  Help file used by SF.EXE.
PADLOCK  ADD  Advertisement for another of the author's programs.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk #799 SIDEFILE >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type:                         ║
║                      COPY SF.DOC PRN (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SF.DOC

{% raw %}
```
                        SIDEFILE (tm) - SHAREWARE VERSION
                        ---------------------------------
        This  version of SideFile is distributed to you under the  share-
        ware  marketing concept.  Therefore this  shareware  distribution
        diskette  may be freely copied and shared with your friends.   It
        is  not a full version of the SideFile program,  although  nearly
        all  of the functions work exactly like the  registered  version.
        To  obtain the fully operational registered version of  SideFile,
        simply  fill out the order blank below and send it along  with  a
        check for $29.95 to Security Software ($34.95 if you
        would like the program on a 3 1/2 inch disk).  The very latest
        version will be sent to you promptly.  A sample order blank is
        provided below.

        The  shareware concept is being used to market SideFile  for  the
        following reasons:

             1.  It allows people to try out a product before deciding to
        invest money into it.

             2.   It allows software developers to be supported  directly
        by the end users.

             3.   Liberal  distribution allows for large cuts  in  adver-
        tising costs, thereby passing these savings onto the user.

        If  you  are still using a shareware program after  a  couple  of
        weeks,  or if you have developed an application for  the  product
        for your use, then it should be obvious to you that the  software
        is  worth  something  to you, and you should  register  with  the
        company  who made it.  We believe that this should certainly  not
        be  too difficult a decision when you weigh the uses of  SideFile
        against its price.

        Only by supporting the shareware concept can authors continue  to
        bring  you  useful  software products  at  below  market  prices.
        shareware  allows everyone to benefit; the end user  by  allowing
        software to be 'test driven' and by low price offerings, and  the
        maker by providing an inexpensive way to advertise a product.

        Please remember three things when using this shareware version of
        SideFile:

             1. It is a partial version intended to acquaint you with the
        program.   You may use it as you wish.  When you find  a  feature
        that does not work with this version (all restrictions are listed
        below), please remember that this was only done to prompt you  to
        buy our fully supported version.

             2.  A full version is available to you at any time.  If  you
        elect  to buy a supported version of SideFile from us,  you  will
        obtain the following:

                  a. The most recent full version of the SideFile package
        without  any  of  the  restrictions  present  in  this  shareware
        version.

                  b.  Automatic notice of SideFile updates and the  right
        to purchase such for a small maintenance fee.

                  c.  Support for the program in the form of written  (or
        telephonic) responses to any questions you might have.

                  d. You will be supporting the concept that allowed  you
        to  receive SideFile in the first place.  Only with user  support
        can we continue to improve the product and perhaps offer you  new
        products.

             3. THE FOLLOWING RESTRICTIONS ARE PRESENT IN THIS  SHAREWARE
        VERSION OF SIDEFILE:

                  a.  File usage is restricted to the  MEMORY-based  mode
        only.   DISK-based  mode  is not available.  A  maximum  of  1000
        records  can  be used in MEMORY-based mode (depending  on  record
        size).   This  should be more than enough for you  to  accomplish
        small  lists,  banking accounts, and data lists, etc.   The  full
        version allows up to 30000 records in it's DISK-based mode.

                  b.  Conversion  of dBASE II files and  ASCII  delimited
        files  through  the SideTran Conversion Utility is  not  allowed.
        The  full  SideFile package allows conversion of these  types  of
        files to and from SideFile as long as they conform to  SideFile's
        maximum limits.  However, SideFile's ASCII file format will still
        allow transfer of data to and from many programs such as dBASE II
        and III, Lotus 1-2-3, NutShell, BASIC.

                  c.  Printer specification files may not be loaded  into
        SideFile.   The  default  generic mode must be  used.   The  full
        version  allows  loading  of printer specific  files,  which  are
        included on the registered distribution disk.

                  d. Access to DOS and the ability to run DOS programs or
        enter DOS commands from within SideFile is not allowed.  The full
        version allows complete interfacing with DOS.

                  e.  The  opening screen contains  a  shareware  sign-on
        message that is not present in the full version.  This screen may
        not  be over-ridden in the shareware version.  The  full  version
        allows this through command line sequences and default settings.

                  f. Filenames may not be entered on the DOS command line
        when  loading  SideFile.  The full version allows you to  name  a
        data file for SideFile to load on startup.

                  g.  The SideFile help file (SF.HLP) must be located  on
        the same drive/directory that is active when you start  SideFile.
        In the registered version, the DOS environment table may be  used
        to set the drive/directory where SF.HLP will always be located.

                  h.   SideFile defaults may not be entered into the  DOS
        environment  table.  However, most defaults are still  changeable
        from the command line.

        This  list is fairly minor because SideFile is loaded  with  fea-
        tures that will allow you to do things with your data files  that
        you  may not be used to doing with other programs.   Please  read
        the  rest  of  this  on-disk documentation  for  more  about  the
        capabilities of the SideFile program.

        We thank you for your interest in SideFile and hope to hear  from
        you  for an upgrade to the registered version.  But if we  don't,
        Please enjoy this shareware version with our complements.

        By  the way, please feel free to give your shareware  version  of
        SideFile to your friends for their use and experimentation.   But
        please  give  it to them in its complete, unaltered form  as  you
        received  it  on  the shareware distribution  diskette.   If  you
        received  an older or altered copy of the shareware version,  and
        would  like an updated one, simply send a check for $5.00 to  the
        address below.

                                 Order Blank:
            You may call 512/860-2697 to order with Visa or MasterCard
                      24 hours daily, 7 days a week



        =================================================================
        NAME:
        _________________________________________________________________
        COMPANY:
        _________________________________________________________________
        ADDRESS:
        _________________________________________________________________
        CITY:
        _________________________________________________________________
        ST:
        _________________________________________________________________
        ZIP:
        _________________________________________________________________
        How did you learn about SideFile?

        _________________________________________________________________
        What comments can you share with us?

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________
        =================================================================

        MAIL THIS FORM AND A CHECK FOR $29.95 TO:
        Security Software
        P.O Box 161922
        Austin, Texas 78761

        ($34.95 for 3 1/2 inch media)

        Your  new  updated  copy  and  registered  extras  will  be  sent
        immediately upon receipt of this order.

                         Memory/Disk-based Data Manager

                                    ver 2.33

                                 by Skip Bremer

                 (C)Copyright 1988 Security Software Company


                            Shareware
                            Reference
                            (Abidged)

                           DISCLAIMER
                           ----------

        Security Software Company  makes no representation or  warran-
        ties  with respect to the contents hereof and  specifically  dis-
        claims any implied warranties to the suitability of this  program
        for any particular purpose.  You must determine that yourself.

        In  addition, you should understand that using a program of  this
        type on an IBM-PC series machine or compatible has inherent risks
        and  that you may inadvertently damage or destroy  valuable  pro-
        grams or data.  Security Software Company     expressly  declines
        to assume liability for any use of this program by you, and  your
        use  of  this  program  constitutes your  agreement  to  hold  us
        blameless.

        Security Software Company  reserves the right to make  changes
        from  time  to time in the context hereof without  obligation  to
        notify any person or persons of such changes.



                                   TRADEMARKS
                                   ----------

        MS-DOS is a registered trademark of Microsoft Corporation.

        PC-DOS  is  a  registered  trademark  of  International  Business
             Machines Corporation.

        1-2-3 is a registered trademark of Lotus Data Corporation.

        dBASE II and dBASE III are registered trademarks of Ashton-Tate.

        Nutshell  is  a  registered trademark of  Leading  Edge  Software
             Products Inc.

        Reflex is a registered trademark of Borland International Inc.

        SideKick is a registered trademark of Borland International Inc.

        WordStar  and MailMerge are trademarks of Micropro  International
             Corporation.

        Epson is a trademark of Epson America Inc.


                                  INTRODUCTION
                                  ------------
        "Data is but data which can be manipulated into yet more data."
                                                   -Old technical proverb

        Have  you ever wished you could manipulate small to medium  sized
        data bases or listings without the constant disk access (and  the
        resultant slowness) required of most database managers  available
        today.   Let's face it.  We don't all need a dBASE II or  III  to
        take  care of most of our personal data needs.  There  are  many,
        many often overlooked uses for a quick, easy-to-use data manager.

        SideFile  allows  you to manipulate your many  notes,  lists  and
        files with a flexibility approaching and sometimes surpassing the
        talents of larger systems.  You can also keep some of your  small
        spreadsheet-type  applications  in  SideFile  instead  of  in  an
        expensive  spreadsheet  program.  And you can even do  our  small
        editing jobs right within SideFile instead of having to find  and
        load yet another program such as a word processor or editor.   Of
        course, all of your SideFile files will still be compatible  with
        those other programs should you choose to use them.

                                    SYNOPSIS
                                    --------
        First,  SideFile is a MEMORY-based data manager that  works  with
        relatively  small to medium sized files in memory.   These  files
        can be subjected to maximum manipulation because of the  inherent
        advantages to MEMORY-based work.  SideFile is a fast, easy,  very
        forgiving  program that attempts to make life easier for all  who
        regularly  use small business or personal data files  for  nearly
        any purpose.

        Second,  SideFile is also a DISK-based data manager  (should  you
        choose)  that can operate on large numbers records in  a  fashion
        similar  to  larger  programs.  In  this  filing  mode,  SideFile
        retains  its easy to use interface and  spreadsheet-like  screens
        while affording DISK-based (random access) usage.

        SideFile  uses two types of files: those with a  built-in  header
        line  (data file) and those without a built-in header line  (text
        file).  You can perform all available commands with a data  file,
        but not with a text file.  Data files are the norm for  SideFile,
        while text file manipulation is mostly for convenience.

                                    FEATURES
                                    --------
        SideFile manipulates your data in one of two ways (your choice):

             MEMORY-based  mode.  In this mode SideFile loads  your  data
        file  entirely  into memory with the following benefits  -  quick
        file  access, minimum disk access, great flexibility.  Files  are
        limited to 1000 records (depending on record size).

             DISK-based mode.  In this mode, large files may be  utilized
        in  a  more  traditional fashion.  Files  are  limited  to  30000
        records.

        SideFile uses pure ASCII files, allowing your files to be used by
        almost  any other program, be it a word  processor,  spreadsheet,
        memory resident editor such as SideKick, or another data manager.

        SideFile  is  a program unto itself.  It requires  no  additional
        overlay files (with the exception of its help file, SF.HLP, which
        is optional).  It requires no additional startup files either.

        SideFile  does not create additional files required of most  data
        managers  when creating a formatted data file.  No header  files,
        index   files,  temporary  files  or  sort  files  are   produced
        permanently that must be kept.  The only file that is ever needed
        is the data file itself, be it formatted or not.

        SideFile  does common functions like adding,  deleting,  listing,
        sorting,  printing,  finding, replacing, merging,  editing,  etc.
        But  SideFile  also has functions reminiscent  of  more  powerful
        spreadsheet  type  applications, such as changing  field  widths,
        totaling  fields,  and viewing and editing your  data  in  column
        format.   It has functions not found in many other programs  like
        changing   case,  moving  fields,  multiple  date  formats,   and
        splitting and combining files.

        SideFile lets you perform limited editing on non-formatted files,
        similar to a line editor or word processor (without word wrap).

        SideFile  lets  you  look at your data in  multiple  ways.   From
        within the spreadsheet-like column format, you can choose to view
        and  add data in the traditional field oriented format,  and  you
        can even view your data in "raw" format.

        In all, SideFile has over 50 commands available for  manipulating
        your data as you see fit.

                                  REQUIREMENTS
                                  ------------
        SideFile requires the following to operate successfully:

        Any version  of  IBM-PC  (PC, XT, AT, Jr,  Convertible),  or  any
             computer compatible to this line.

        Any 80 column display screen.

        Any MS/PC-DOS  disk drive (1 floppy, micro-floppy, or  hard  disk
             drive).

        Any version of MS/PC-DOS from version 2.0.

        256K of memory.

        Optionally - any 80 column printer.

        In other words ... SideFile should work fine on your computer.

                              THE DISTRIBUTION DISK
                              ---------------------

        The  following  programs are contained on the  shareware  version
        SideFile distribution disk:
        SF.EXE - The SideFile program.
        SF.DOC - The shareware (abridged) documentation on disk, 
                 (Shareware disks only)
        SF.HLP  - The SideFile help file.  Not required, but  recommended
             until you are used to the program.  This file should not  be
             altered.
        ST.EXE - The SideTran conversion utility for SideFile that allows
             you to transfer dBASE II files and ASCII delimited files  to
             and from SideFile. (Registered disks only)
        *.SF -  Various short SideFile example files to help you to  gain
             ideas  on how to use SideFile.  All of these files are  pure
             ASCII  files  that  may  be loaded  into  almost  any  other
             program.   Note  that file extensions like '.SF' are  not  a
             SideFile  requirement.  Choose any extension that you  like,
             or no extension at all, for your own files.
        EXAMPLES.DOC - A short explanation of the example files (*.SF).
        PADLOCK.ADD - INFORMATION ON NEW PROGRAM!
        ST.EXE      - S Disk Catalog Utility (Registered Versions Only)
        
                                  SIDEFILE USES
                                  -------------
        Some  of the possible uses for SideFile are listed  below.   This
        list  is certainly not all inclusive, but it should give  you  an
        idea  of  the ingenuity of its design.  Many short  examples  are
        located on the distribution disk.  Simply load them into SideFile
        and look at and experiment with them.

        Maintain checking, credit card, and saving accounts.  Keep an on-
             going  list  of all your banking  activities  for  different
             banking accounts, savings accounts, credit unions, etc.  You
             won't  need  your checkbook any more.  (See  CHKBOOK.SF  and
             CHKBOOK2.SF example files)
        Maintain  a  reminder/tickler file.  Keep  grocery  lists,  to-do
             lists, to-buy lists, must-do-before lists, any kind of  list
             you want.  (See TODO.SF example file)
        Maintain  simple portfolio management.  Maintain a  listing  with
             the  current  holdings of all your  financial  accounts  for
             instant  retrieval and/or reporting.  Or simply keep a  list
             of all your accounts.  (See PORTFOLO.SF example file)
        Maintain  a list of accounts.  Keep the specifics on all of  your
             accounts  at your fingertips, such as type, purpose,  total,
             interest, etc.  (See ACCOUNTS.SF example file)
        Maintain name and address files.  Or maintain business  contacts,
             accounts, phone numbers, whatever you wish.  (See ADDRESS.SF
             example file)
        Maintain a work contacts list.  Keep track of all those  offices,
             companies,  and  people contacts you  have  throughout  your
             business and the community, like a computerized rolex  file.
             (See CONTACTS.SF example file)
        Maintain catalogs.  Keep as many catalogs as you wish any way you
             like,  and keep totals on the items.  (See  CMPTRCAT.SF  and
             HOUSECAT.SF example files)
        Maintain simple inventories.  Maintain a simple inventory system;
             set it up as you wish.  Track on-hand supplies, keep current
             costs up to date, etc.  (See INVENTRY.SF example file)
        Maintain  telephone directories.  Keep telephone numbers,  names,
             and addresses.  (See PHONE.SF example file)
        Maintain a numbers list.  Keep a list on the hundreds of  import-
             ant  numbers  in your life, from lock combinations  to  bank
             accounts,  social  security numbers to mutual  fund  account
             numbers,  from  your television serial number  to  your  car
             registration number.  (See NUMBERS.SF example file)
        Maintain  dBASE II  files.   Work with  your  dBASE II  files  in
             SideFile; you may find it much easier.  Also SideFile is  an
             excellent  vehicle to use when first planning a  dBASE  data
             file  because of its forgiveness and  changing  flexibility.
             After you are satisfied with the layout and have entered and
             experimented  with a number of records, you may then  easily
             convert  the file to a dBASE II file.  Later if  you  decide
             you  need to make changes in field order and/or  sizes,  use
             SideTran to convert the file back to SideFile, and make  the
             changes.  But be careful - you may decide to leave your data
             in SideFile full time!

        There  are  many more uses that you will find,  such  as  project
        tracking, member lists, doctor expense records, etc.
        The bottom line is that SideFile does what it was designed to  do
        quite  well, much easier than larger, more complicated  programs,
        all of which contain a lot more overhead.

                                 GETTING STARTED
                                 ---------------

                                 MAKING A BACKUP
                                 ---------------
        The  first  thing  you should do is make a  backup  copy  of  the
        distribution disk.  Then put your original away in a safe  place.
        Consult your DOS manual, if necessary, on how to use the DISKCOPY
        command.  Next you should copy the SideFile and SideTran programs
        to whatever working disk you will be using it on, along with  the
        example files for your experimentation.  Consult your DOS manual,
        if necessary, on how to use the COPY command.

                                STARTING SIDEFILE
                                -----------------
        To  start the SideFile program, put your working disk in  one  of
        your  disk drives and type SF<enter>.  You may type the  name  of
        the data file you wish SideFile to load right on the command line
        -- SF DATAFILE<enter>.



                                    THE FILER
                                    ---------

        Once  inside SideFile, if you did not give the data file name  on
        the  command line, you will enter the FILER.  Use the  <F1>  Help
        key to obtain guidelines on how to use this screen.  You will  be
        presented  with  a directory of the current drive  and  directory
        that SideFile started up in.  A maximum of 100 files may be  seen
        in  the  file  name box.  Use the <Up/Down> arrow  keys  and  the
        <PgUp/PgDn>  keys  to  see  more of  the  files.   The  following
        choices are available in the FILER:

         1.  Load  a file:  Use the arrow keys to highlight the file  you
             wish  to  load,  or enter a filename  into  the  edit  block
             (reverse  video answer block).  File extensions are  allowed
             but not mandatory for SideFile files.  SideFile files cannot
             have  the  extensions [.DBF], [.COM], or [.EXE].   The  file
             must  be on the current drive and directory shown.  Use  the
             choices  below to change these.  The file will be loaded  if
             it exists, or a new one will then be created by your choice.
             The following are examples of valid filenames:

             TEST.FLE
             TEST
             TEST.SF

             If SideFile finds the file you entered, it will load it, and
             then  you  are free to manipulate the data as you  wish,  as
             described  in the commands section below.  If SideFile  does
             not  find the file you entered, then it will ask you if  you
             wish to create a new one.  For this procedure, see the  FILE
             Load command in the commands section below.

         2.  Get  a directory:  Entering an asterisk '*' somewhere  in  a
             file specification will give you a directory of those files.
             Examples:

             *.*
             *
             TEST.*

         3.  Change  the  current drive:  Press <F3> to move  the  active
             edit  block to the drive indicator, and enter the letter  of
             the drive you wish to view and use.  SideFile will change to
             the root directory of that drive.

         4.  Change the current directory:  Press <F4> to move the active
             edit  block  to the directory indicator, and enter  the  new
             directory you wish to view and use.  Do not enter a trailing
             backslash '\', a preceding drive and colon 'A:', or a trail-
             ing  file  name or file directory specification  '*.*,  etc'
             here, but only the actual subdirectory name.  Use the  other
             edit blocks for those purposes.

         5.  Return to SideFile's initial drive/directory:  You may,  any
             time  you  are in the FILER, return  to  SideFile's  initial
             drive/directory  by  pressing  the <F2> key.   This  may  be
             useful  if you have been working on another drive and/or  in
             another  directory, and want to return to where you  started
             before you quit SideFile.

         6.  See   (view)  highlighted  file:   You  may  look   at   the
             highlighted file simply by pressing <F5> while in the FILER.
             If the file is not a text file, you will probably see a  lot
             of garbage, and should not try to load these type of  files.
             Use <Alt-F5> to see a WordStar formatted file.

         7.  Move highlighted file:  You can move the highlighted file to
             another  subdirectory  on the SAME disk.  The  file  is  not
             actually copied, but the name is simply changed to show  its
             new  location (just as DOS does).  When using this  command,
             be sure to enter only the directory and the name (which  can
             be  changed  in the process if you wish).  Do  not  enter  a
             drive  specification  like 'B:'.  For example, to  move  the
             file  test to the subdirectory WORK, you would  enter  this:
             \WORK\TEST.   Users without hard disks have little need  for
             this command.

         8.  Rename  highlighted  file:   Similar to  the  MOVE  command,
             except  that only the filename is given.  The file  will  be
             renamed but not moved.

         9.  Delete  highlighted  file:   If  you  choose  this  command,
             SideFile  will  prompt you to be sure.  The command  (as  in
             DOS) is not reversible.

        10.  Run  a program:  You can run the same programs that DOS  can
             directly  from SideFile by simply pointing to  the  filename
             and  pressing  <F9>.  Keep in mind that SideFile  must  find
             COMMAND.COM in order to do this.  Also there must be  enough
             memory  available  to keep SideFile in memory  and  run  the
             program,  or DOS will issue an error message.  Users of  DOS
             3.x can have COMMAND.COM as specified in their COMSPEC table
             (see your DOS book).  Users of 2.x DOS must have COMMAND.COM
             on the active disk drive before issuing this command (or the
             DOS  command).  Even then, it is possible that  DOS  related
             commands  may not work due to a bug in the earlier  versions
             of DOS (and not through any fault of SideFile).

         11.  Choose  MEMORY  or DISK-based filing mode:  Press  <F0>  to
             select  the mode you wish to load your file  under,  MEMORY-
             based  or DISK-based.  A high-pitched or  low-pitched
             sound will accompany the change.

         12.  DOS:  Press <Alt-F1> to go directly but temporarily to  DOS
             from  within  SideFile.   SideFile  must  find  a  copy   of
             COMMAND.COM on your work disk or in the DOS COMSPEC (see DOS
             manual  for an explanation of this).  If you  have  problems
             with  the DOS manual, then try this command first.   If  its
             works,  fine.  If it doesn't, copy the file  COMMAND.COM  to
             your work disk and then it should work.  This will also give
             you  the capability of running other programs that end  with
             [.COM],  [.EXE], or [.BAT] simply by pointing to them  while
             in the FILER.  This can be very convenient, especially in  a
             hard disk environment.

          13.  Quit  and  return to DOS:  You may press  <esc>  to  quit.
             SideFile  will  ask you if you wish to quit; answer  'Y'  or
             'N'.   If  you  pressed  <esc> while  you  were  entering  a
             response  into one of the edit blocks, then it  will  simply
             return  whatever the edit block said before you changed  it.
             In  this  case you will have to press <esc> again  to  quit.
             You may also use <Alt-F0> to quit.

        There  are  other  choices you will learn about  in  the  section
        covering  SideFile's  commands  that  concern  file  loading  and
        saving.  They include reading and writing files or partial files.
        All of these commands will take you to the FILER.  Only the  <F2>
        quick save command will not bring you here.

                                    COMMANDS
                                    --------

        Command discussions will indicate what mode the command is avail-
        able in with a note such as '(MEMORY only)'.

        Some  of  the  commands explained below  are  accessed  with  the
        function  keys (normal or alternate).

        You may cancel any of the below listed commands at the  beginning
        prompt (and sometimes at the second or third prompt) by  pressing
        <esc>.  In the case of a number prompt, leaving or entering a '0'
        into  the edit block will also cancel the command normally.

        Most  commands 'remember' the last data entered when you were  in
        that command, and will display it for you to either accept or  to
        change.  If you enter anything in the very first character  posi-
        tion of the edit block, then the old data will disappear, just as
        if it had never been there at all.

        All references to 'columns' can be read as 'fields'.  All  refer-
        ences to 'rows' can be read as 'records'.

                                    HELP MENU
                                    ---------

        HELP General  -  How to use the pop-up menus, and  a  listing  of
             function keys.

        HELP Navigating - How to move around the file.

        HELP Editing - How to edit the data.

        HELP Headers - All about header/non-header file types.

        HELP Fields - All about character/date/number data fields.

        HELP Modes - All about MEMORY/DISK modes.

        HELP Reporting - All about VIEW parameter affects on reports.

        HELP Defaults - All about SideFile default switches.

        HELP SideTran  -  All about additional  import/export  procedures
             available with with SideTran, SideFile's on-disk  conversion
             utility.

                                    FILE MENU
                                    ---------
        FILE Load - Use this command to load a new or existing file  into
             SideFile  from  disk.   The  current file  in  use  will  be
             discarded.  If it has been changed since it was loaded,  you
             will be asked if you are sure you wish to discard it (if  it
             was  loaded in MEMORY-based mode).  If not, you  may  answer
             'N' and then use the FILE Save command to save it.  Then you
             may reissue the FILE Load command without this safety prompt
             occurring.   Of  course, if you answer 'Y'  to  the  discard
             prompt, the current file will be cleared from memory at that
             time  (if loaded in MEMORY-based mode) and any changed  data
             will  not be permanently saved to disk.  Be careful.   There
             is  no way to undo the FILE Load command once you decide  to
             discard a file.

             You  will be put into the FILER, just as you would  for  the
             other filing commands.  When you attempt to FILE Load a file
             that does not exist, SideFile will ask you for field  types,
             lengths,  and names.  After the new file has  been  created,
             add or delete columns with COLUMN Insert, COLUMN Append, and
             COLUMN  Delete.   Remember  to use the '@'  or  '#'  symbols
             instead  of a number for the width when creating  or  adding
             date or number fields.  Use COLUMN Delete and COLUMN  Insert
             to  move  a column, and COLUMN Width to  change  the  width.
             COLUMN Name will rename a column for you.  When you have the
             file  the way you want it to be, don't forget to  FILE  Save
             it, because the new file process will automatically put  you
             into MEMORY-based mode, if you were not already there.

             If  you  define only one field, you will be creating  a  no-
             header file, basically a simple text file, for editing.

             On the other hand, if your new file does exist, then it will
             be  loaded  just like the first file was  when  you  entered
             SideFile.   The  file  will be checked for  limits  such  as
             maximum line length, minimum/maximum number of fields,  only
             one date field, etc.

        FILE Save  -  (MEMORY  only) Use this command to  save  the  file
             loaded in MEMORY-based mode and then continue operation.  It
             is recommended that you use the FILE Save command often.  It
             is  conveniently  located  as function key  <F2>,  which  is
             similar  to SideKick and some other programs.  Whenever  you
             make  a change to your file that you are sure that you  wish
             to keep, you should consider saving the file by pressing the
             <F2>  key.   More importantly, if you are about to  issue  a
             command   that   could  change  the  data   in   your   file
             considerably,  such  as COLUMN Sort, COLUMN  Insert,  COLUMN
             Delete, VIEW Replace, etc., and if you already have  changes
             made in the data that are not saved, save them first.   This
             way, if the command does not do what you wish, or you regret
             the change accomplished by the command, then you can  simply
             reload  the freshly saved file with the FILE  Load  command.
             The FILE Save command always saves to the original file name
             that  was  loaded, the true working file shown on  the  FILE
             Type screen.

        FILE Squeeze - (DISK only) Saving is not necessary in  DISK-based
             mode, because records are constantly being written to  disk.
             FILE  Squeeze is a convenience command that will remove  all
             blank records from your file, sort of like packing the file.
             You should use it now and then if you have made deletions to
             the  file  in DISK-based mode.  Squeezing is  automatic  for
             files  written  to  disk  using  the  FILE  Write   command.
             SideFile  will  check to be sure there is enough  disk  free
             space  remaining on the disk the current file came  from  to
             perform the FILE Squeeze operation.  There must be disk free
             space  of at least the size of the current file or  SideFile
             will issue an error message.  As an example, to FILE Squeeze
             a  30K file, there must be over 30K free space remaining  on
             the disk.

        FILE Write - Use this command to save all or part of the  current
             file to a file name of your choice, and not necessarily  the
             'remembered' file name as with FILE Save.  You may save  the
             current file to any disk drive you have on line, and to  any
             proper  file name.  Be careful of the file name you  choose,
             however, because FILE Write does not, repeat does NOT, check
             to see if it over-writing an existing file.  You have  three
             choices when writing a file with this command.  You may save
             all of it, part of it by a FIND criteria, or part of it by a
             record  number range.  In any case, the current header  will
             always  be saved with the file.  This command is  SideFile's
             vehicle for splitting up large files into smaller ones.  The
             opposite of this command is the FILE Read command.

        FILE Read  - Use this command to merge another file from disk  to
             the  file in use.  The file you choose to merge should  have
             the exact same field layout as the current file, or you will
             end  up  with a mess.  This is not true, however,  with  no-
             header  text files.  The commands are similar to  those  you
             get when first loading a file into SideFile.  You may join a
             file  from  any other disk that you have on line.   A  small
             delay  after  the FILE Read command has  been  completed  is
             normal.   This is SideFile's vehicle for  combining  smaller
             files  into large ones.  Read files will have  their  header
             line  removed as they are added to the file in use.  If  you
             plan  to  make a large file with this  command,  you  should
             enter  the current file in the DISK-based mode  first.   The
             opposite of this command is the FILE Write command.

        FILE Print  - Use this command to print records in your  file  to
             your printer.  You can print all of the records in your file
             or  you  may  print only records that  fit  a  certain  FIND
             specification.   This  operates  just  like  the  VIEW  Find
             command.   The  records will also be printed with  the  same
             axis  format  that is in affect for viewing,  listing,  etc.
             See  the VIEW ?-axis commands.  If printing to the  printer,
             continuous  feed  is assumed and required  unless  you  have
             changed the default.  You may press <enter> to stop and
             restart the printing  command.  If you press <esc>, the
             printing will be stopped as soon  as your printer buffer
             clears.

             SideFile  will first ask you for a 'title' for your  report.
             If you give one, it will be centered at the top of the first
             page, with the date right-aligned on the next line.

             If  the file is multi-field, and the VIEW Kut switch is  ON,
             and the VIEW X-axis view is active, the field names will  be
             printed at the top of the report.

             All number fields  will be totaled at the  end
             of the report.  The same criteria used for field names  will
             be used to determine if the totals are to be printed at  the
             bottom of the totaled column or separately at the end of the
             report.  Additionally, the length of the printed record with
             dividers  must be less than 75 characters for the totals  to
             be printed at the bottom of each number column.

        FILE Image - This command will print your file (all or part) to a
             disk  file  using the exact same format as  the  FILE  Print
             command, except that print attributes such as bold face  and
             form feeds are stripped from the report.  The file name  you
             choose will be over-written if it exists.

        FILE Filer - Use this command to go to the FILER to perform  disk
             procedures.   You  can change the active disk  drive  and/or
             subdirectory from this screen.  While in the FILER via  this
             command,  you  cannot press <enter> to do something  with  a
             file.   The prompt will read 'File to F1-F9', denoting  that
             you  must press the appropriate function key after  pointing
             to the file to perform the desired function.  Pressing <esc>
             will take you back to the EDITOR.

        FILE Type  -  Use this command to obtain a quick  file  structure
             summary  of the current file in use from SideFile.  It  will
             display  the current available (free) memory if  in  MEMORY-
             based  mode or the available (free) disk space on  the  file
             disk in DISK mode.  The free memory can be useful to you  if
             your  file  is getting large, and you are  taking  steps  to
             reduce its size.  Notice that the free memory will  increase
             as  you delete records or size down columns with the  COLUMN
             Width  command,  or delete columns with  the  COLUMN  Delete
             command.  You should start considering a DISK-based load  if
             available memory approaches zero bytes left.  Use disk  free
             space as an indicator of how big your file can be, and as an
             input when deciding to SORT or SQUEEZE your file (see  those
             commands for more on disk space).

        FILE DOS - Use this command to exit SideFile temporarily to  DOS.
             You  are given a choice of entering the command from  within
             SideFile (which allows SideFile to return immediately  after
             the  command  is  finished) or to go to DOS  to  enter  your
             commands.   SideFile will not quit, but will instead load  a
             copy of your command processor (COMMAND.COM) so that you may
             essentially perform DOS commands or run other programs while
             in  SideFile  without having to quit and  restart  SideFile.
             This  option's effectiveness depends on how much memory  you
             have available.  If you have too little, DOS will tell  you.
             Also  a  copy  of  COMMAND.COM must  be  available  on  your
             SideFile  disk  in  the subdirectory in  which  you  started
             SideFile.  If you are using DOS 3.x, then COMMAND.COM may be
             specified  with  the  COMSPEC function  and  be  located  on
             another disk (see your DOS manual for an explanation of  the
             COMSPEC  function).  If it is not found, SideFile will  give
             you  an error message.  If in the FILER, you may point to  a
             file  that  ends in [.COM], [.EXE], or [.BAT]  and  SideFile
             will  use  DOS to run that file from within  SideFile  after
             pressing  <F9>, depending on memory available.  Be sure  you
             do  not  run  any  programs  that  become  memory   resident
             (terminate  and  stay resident) from SideFile  or  from  any
             other program that allows this feature.

        FILE Quit  -  Use this command to end the  SideFile  program  and
             return  to  DOS.  If you have made changes to  your  MEMORY-
             based  file, you will be reminded of such and asked  whether
             you still wish to quit SideFile.  If you do not answer  with
             'Y',  you  will remain in SideFile with your data  in  tact.
             You  may then issue the FILE Save or FILE Write  command  to
             save  your  data  first.  If you answer  'Y',  you  will  be
             returned to DOS and any changes made to the file in use will
             be  lost and not saved to disk.  If you issue the FILE  Quit
             command  with no changes made to your file or your  file  is
             DISK-based, you will be immediately returned to DOS  without
             further prompting.

        HELP MENU HELP

        HELP General - About the pop-up menu, function keys.
        HELP Navigating - About moving around the file.
        HELP Editing - About editing the data.
        HELP Headers - About header/non-header file types.
        HELP Fields - About character/date/number data fields.
        HELP Modes - About MEMORY/DISK modes.
        HELP Reporting - About VIEW parameter affects on reports.
        HELP Defaults - About SideFile default switches.
        HELP SideTran   -  About  additional   import/export   procedures
             available with with SideTran, SideFile's on-disk  conversion
             utility.

        FILE MENU HELP

        FILE Load - Load new or existing SF file from disk.  Current file
             is discarded if in MEMORY mode.  DISK mode files are  always
             current.
        FILE Save - (MEMORY only) Save current file to disk and  continue
             operation.  DISK mode files are always up-to-date.
        FILE Squeeze - (DISK only) Remove all blank records from  current
             file.  Acts like a file packer.
        FILE Write - Save current file to disk as another SF format  file
             with  new  name.  Can save all or part of  file  (by  record
             numbers or FIND criteria).
        FILE Read  -  Read  SF format file from  disk,  appending  it  to
             current  file.  Can rejoin smaller files to one  large  file
             while in DISK mode.
        FILE Print  -  Print  current file to  printer  in  current  VIEW
             format.  Can print all or part of file (by record numbers or
             FIND criteria).
        FILE Image  - Print current file to disk in current  VIEW  format
             (like printing).  Can include all or part of file (by record
             numbers or with FIND).
        FILE Filer   -  Returns  to  the  FILER  to  allow  disk   and/or
             subdirectory  changes and other DOS commands.  Use <esc>  to
             return to the EDITOR.
        FILE Type - Display structure of current file.
        FILE DOS  -  Go  temporarily to the system to  run  DOS  commands
             and/or other programs (memory permitting).  COMMAND.COM must
             be found.
        FILE Quit  -  Quit SideFile program to DOS permanently.   End  of
             session.  If in MEMORY mode, SAVE current file first.

        RECORD MENU HELP

        RECORD  Insert - Insert blank record just before current  record.
             In  DISK mode APPEND may be more desirable due to  excessive
             disk access.
        RECORD  Delete  - Delete current record (NOT  undo-able  in  DISK
             mode).   BLANK  (DISK  only) may be more  desirable  due  to
             excessive disk access.
        RECORD  Append  - Insert blank record at end of  file.   Consider
             VIEW APPEND for appending multiple records.
        RECORD  Undo  -  (MEMORY only) Insert last  deleted  record  just
             before current record.  Becomes BLANK in DISK mode (UNDO not
             available).
        RECORD Blank - (DISK only) Blank record at cursor position.   Can
             later SQUEEZE file.  Becomes UNDO in MEMORY mode.
        RECORD  Show  - (headers only) Display entire current  record  in
             view temporarily.  For those files with records longer  than
             screen length.
        RECORD  Goto - Goto specified record number.  Can later use  LAST
             to go back to current record.
        RECORD Last - Goto previous record.  Can use after a GOTO command
             to jump back and forth between two sections of the file.

        COLUMN MENU HELP

        COLUMN  Insert - (MEMORY with headers only) Insert  blank  column
             just before current column.  Enter @ or # as length for date
             or number columns.
        COLUMN Delete - (MEMORY with headers only) Delete current column.
             Will  be kept in column buffer if memory  permits.   Restore
             later with UNDO.
        COLUMN Append - (MEMORY with headers only) Insert blank column at
             end  of  file.  Enter @ or # as length for  date  or  number
             columns.
        COLUMN  Undo  - (MEMORY with headers only)  Insert  last  deleted
             column.
        COLUMN  Sort - Sort records on current cursor position.  In  DISK
             mode  a  longer DISK sort will be performed, followed  by  a
             SQUEEZE.
        COLUMN  Width - (MEMORY with headers only) Change current  column
             width.    WARNING!    Clipped  data  is   NOT   recoverable.
             Character columns only.
        COLUMN Name - (headers only) Change current column name.  Can not
             use with columns having thickness of only one character.
        COLUMN  Order  - (MEMORY with headers only)  Insert  a  temporary
             'order'  column to preserve current order before  new  SORT.
             Good for <1000 records.
        COLUMN Case - Change current column to upper/lower case.   Entire
             column will be affected.  Character columns only.
        COLUMN  Redate  -  Reverse date format, Switch  date  edit  block
             default, or Change date spacer.  Must be pointing at a  Date
             column.
        COLUMN Total - (headers only) Total current column.  Multi-column
             total is displayed with (=).  Number columns only.
        COLUMN Kut - (headers only) Toggle display of columns to multiple
             or single.

        SEARCH MENU HELP

        SEARCH  Find - Find non-case-sensitive text starting  at  current
             record.  VIEW FIND also available.
        SEARCH Next - Find next occurrence of non-case-sensitive text.
        SEARCH  Absolute - Find case-sensitive text starting  at  current
             record.
        SEARCH Replace - Replace case-sensitive text starting at  current
             record.  VIEW REPLACE also available.
        SEARCH Continue - Replace next occurrence of case-sensitive text.
        SEARCH  Global - Replace case-sensitive text from current  record
             to end of file.

        VIEW MENU HELP

        VIEW List  - List records depending on current VIEW format.   See
             HELP for more on how VIEW switches affect  print/screen/disk
             reporting.
        VIEW Find  - Find non-case-sensitive text in current VIEW  format
             for all records.  SEARCH FIND also available.
        VIEW Replace - Replace case-sensitive text in current VIEW format
             for all records. SEARCH REPLACE also available.
        VIEW Append   -  (headers  only)  Insert  multiple  records   and
             associated data at end of file.
        VIEW X-axis  - Turn X-axis VIEW mode on (each record  lists  from
             left to right).
        VIEW Y-axis  - Turn Y-axis VIEW mode on (each record  lists  from
             top to bottom).
        VIEW Z-axis - Turn Z-axis VIEW mode on (each record lists exactly
             as on disk).
        VIEW Kut  - Turn Kut VIEW mode on/off (each record lists/may  not
             list one per line).
        VIEW Status - Status of AXIS and KUT switches.  See HELP for more
             on how these switches affect print/screen/disk reporting.

                                  FILE HEADERS
                                  ------------
        SideFile  manages  to keep files in a particular  file  structure
             without  keeping  a  separate header  file  by  putting  the
             required  information  on the first line of the  file.   The
             file remains pure ASCII, and by keeping all the data at  the
             top  in  one  line, the header becomes very  easy  to  make,
             change,  or delete.  Headers are only kept  for  multi-field
             files .  The header retains  four types of information --
             the number of fields, the names of fields, the size of fields,
             and the types of fields.

        The following example has three fields:

        First     |Last     |Date   @|
        FIRST      LAST      DATE

        This header line may be created, changed, or deleted at any  time
             with  a  text editor, such as SideKick, or by  changing  the
             specifications  from  within SideFile  by  changing  widths,
             adding columns, or deleting columns.

        The '|'  characters  define the last position of a field  in  the
             record.  The record length is defined by the position of the
             last  field  ending '|'.  Date fields are defined by  a  '@'
             just  prior to the field end character.  Number  fields  are
             the  same but use a '#' character.  Date and  number  fields
             must have 9 and 11 spaces in the file respectively.  To  add
             this  header to an existing text file, simply make  a  blank
             line at the top and 'paint' this line in.  This can also  be
             done to a text file while in SideFile if the header will  be
             79  characters  or  less.   Then, save  it  and  reload  it.
             SideFile will see the header and treat it as a data file.

        This header  concept  is the key to making SideFile  useful  with
             other  programs such as SideKick.  It retains all  the  data
             necessary  to keep the file formatted as a data  file  (with
             fields,  etc.) while keeping it useful for  other  programs.
             If a file does not contain a header, then it is a  one-field
             text  file  as far as SideFile is  concerned,  as  explained
             below.

                                 DATA/TEXT FILES
                                 ---------------
        SideFile sees files in one of two ways -- with a header line  and
             multiple fields (more than one) or without a header line and
             one field (each line is the one and only field of that  line
             or  record - basically a text file).  Files that  have  only
             one  field have no need to have a header line (and  in  fact
             may not), because SideFile has no information to obtain.

        Here is  an example of a one-field file with no header  line  and
             three records:
        The largest ocean is the Pacific.
        The best country is the US.
        The largest state in is Texas.

        Here is  an example of the same file with a header  line  applied
             (three records, three fields):

        Fld one   |Fld two      |Fld three |
        The largest ocean is the Pacific.  |
        The best country is the US.        |
        The largest state is Texas.        |

        When this  file is loaded into SideFile, the data on  the  second
             line,  '  state is Texa', is the second field of  the  third
             record.   Note  that  if  a file  is  defined  with  fields,
             SideFile automatically adds spaces to the right if necessary
             to  make  all the records the same size.  SideKick,  on  the
             other  hand,  ignores these spaces when loading  and  saving
             such a file.  Therefore SideFile is one of the few  programs
             that  can deal with this end of line problem  automatically,
             and  you  don't have to worry about it.  Your  data  is  not
             really changed, and the dexterity of using the file with any
             program  is  maintained.  Simple but very useful.   If  you,
             however, look at a file with SideKick and then save it,  you
             MUST load it into SideFile with the MEMORY-based mode  first
             and then save it so that the record lengths can be reset  by
             SideFile if you intend to use the file in DISK-based mode.

        When loading  no-header  files, if a line is found to  be  longer
             than 79 characters, then the file will be aborted.

        Any data file or list that you may have will work very nicely  in
             SideFile, as long as it is kept within the bounds imposed by
             SideFile,  such  as maximum record length (see technical
             specifications).  Play with the examples on  disk
             for more explanation on this subject.

                             TECHNICAL SPECS/LIMITS
                             ----------------------
        Maximum number of records/rows:

             MEMORY-based mode - 1000 (depends on memory and record size)
             DISK-based mode - 30000
        Maximum number of fields/columns - 16
        Maximum length of records/rows - 250 characters
        Maximum  length  of fields - 65 characters  (unless  a  no-header
             'text' file, then 250 characters)
        Maximum length of line in no-header text files - 79 characters
        Maximum  number  for formatting purposes - from 9999999.99  to  -
             999999.99
        Required  file  types - pure  ASCII,  ASCII  comma/quote/carriage
             return delimited, and dBASE II


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0799

     Volume in drive A has no label
     Directory of A:\

    ACCOUNTS SF       2449   3-22-87   9:08p
    ADDRESS  SF       2953   3-22-87   9:08p
    CHKBOOK  SF       2191   3-22-87   9:08p
    CHKBOOK2 SF       1563   3-22-87   9:08p
    CONTACTS SF       3409   3-22-87   9:08p
    EXAMPLES DOC      5168   8-13-88  11:13a
    FILES799 TXT      2491   8-31-88  10:11a
    GO       BAT        38   7-02-87  12:53p
    GO       TXT       463   8-22-88  10:52a
    HOUSECAT SF       7129   3-22-87   9:08p
    INVENTRY SF       1441   3-22-87   9:08p
    NUMBERS  SF       3521   3-22-87   9:08p
    PADLOCK  ADD      4288   8-15-88   8:41p
    PHONE    SF       1067   3-22-87   9:08p
    PORTFOLO SF       2437   3-22-87   9:08p
    SF       DOC     58989   8-16-88  11:46a
    SF       EXE    128958   8-12-88   1:52p
    SF       HLP     70912   8-12-88   1:53p
    TODO     SF       1585   3-22-87   9:08p
           19 file(s)     301052 bytes
                           10240 bytes free
