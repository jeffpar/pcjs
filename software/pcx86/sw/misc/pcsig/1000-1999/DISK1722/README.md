---
layout: page
title: "PC-SIG Diskette Library (Disk #1722)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1722/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1722"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PERSONAL APT"

    Want to learn Numerical Control programming?  This exciting and
    expanding field can be opened to you with PERSONAL APT.  Need
    programming help?  With its totally integrated working environment,
    including screen editor and graphic tool path display, PERSONAL APT is
    very helpful in teaching and learning this exciting and expanding field
    and yet powerful enough for significant industrial productivity
    improvement.
    
    APT (Automatically Programmed Tools) is the oldest and most widely used
    Numerical Control programming language in use today.  APT development
    was initially sponsored by the US Air Force, and later the AIA
    (Aerospace Industries Association), and has evolved into a universal
    programming language.  PERSONAL APT is a subset of this powerful
    programming language, but is powerful enough to handle most
    requirements.
    
    The minimum hardware requirements and features of PERSONAL APT make it
    an ideal program for schools and individuals to use in teaching and
    learning the APT language.
    
    PERSONAL APT can be a very productive tool for engineers, draftsmen and
    others who spend time on complex mathematical and geometric
    computations.  PERSONAL APT provides preprogrammed functions for the
    solution of intersection and tangency problems, transformation of
    dimensional data between coordinate systems and vector functions to aid
    computations.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```

This distribution disk or the archived file from a BBS should contain
the following files.  If any of these files are missing, please contact
Digital Manufacturing Systems for a complete set of files.

    README------------Initial instructions
    PERAPT.EXE--------The executable program
    PERAPT-H.COM------CGA simulator for Hercules graphics
    PERAPT.DOC--------PERSONAL APT Mini-Manual
    MILLEXMP.APT------Sample milling program
    LATHEXMP.APT------Sample lathe program
    REGISTER.TXT------PERSONAL APT registration form
    INVOICE.TXT-------Invoice form for PERSONAL APT registration
    SCHOOLS.TXT-------Educational discount policy
    FILES.TXT---------This list of files & descriptions

Additionally, there may be some additional *.APT files.  These are just
miscellaneous PERSONAL APT part programs.

Good Computing!

Bob Drewry
Digital Manufacturing Systems
PO Box 1079
Rogers, AR   72757

Ph 501-925-3666
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1722  PERSONAL APT  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, type: COPY README PRN  (press enter)        ║
║                                                                         ║
║ To print the manual, type:  PRINTDOC (press Enter)                      ║
║                                                                         ║
║ To view educational discount policy, type:  TYPE SCHOOLS.TXT (Enter)    ║
║                                                                         ║
║ To print registration form, type:  COPY REGISTER.TXT PRN (press Enter)  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## INVOICE.TXT

{% raw %}
```



                        *******************************
                                  INVOICE
                        *******************************


     Purchased from:
        Digital Manufacturing Systems
        P.O. Box 1079
        Rogers, Ar   72757


     Date: ________________                         Invoice No. 900901
     -----------------------------------------------------------------
                                             PRICE      PRICE
     QTY  PRODUCT                             EACH      EXTENDED
     -----------------------------------------------------------------

     ____ PERSONAL APT Registration fee and   $49      $___________
                       Distribution kit
     ____ MASTER MILL POSTPROCESSOR           $49      $___________
                      Registration fee
     ____ MASTER LATHE POSTPROCESSOR          $49      $___________
                      Registration fee
     ____ PERSONAL APT HIGH RESOLUTION        $49      $___________
          GRAPHICS    Registration fee
     ____ NUMERICAL CONTROL PART PROGRAMMING  $29      $___________
            Text book by James J. Childs

     5% State Sales Tax (Arkansas residents only)      $___________


          S & H charges for shipment outside the       $___________
             USA -- $15 for the first item, $4 each
             for additional items.

                                            TOTAL:     $___________



     Please make checks and money orders payable to:
                       DIGITAL MANUFACTURING SYSTEMS

            ALL PAYMENTS MUST BE MADE IN USA FUNDS
            ALL CHECKS MUST BE DRAWN ON USA BANKS


            You may retain this invoice for your records.












```
{% endraw %}

## PERAPT.DOC

{% raw %}
```
    
    
    
    
    
    Dear Reader,
    
    May I take a few minutes to  tell you about PERSONAL APT, this  friendly
    and personal adaptation  of the most  widely  used  NC part  programming
    language to the IBM PC/XT/AT/PS2, and compatible, family of computers.
    
    PERSONAL APT offers  2 1/2  axis NC  part programming  capability and  a
    powerful set of mathematical functions and geometry descriptions to  aid
    in the  solution  of complex  problems  that are  often  encountered  in
    Engineering, Design and Drafting functions.  PERSONAL APT uses a  subset
    of the most powerful and most widely used NC programming language,  APT.
    Compatibility with APT provides users  of PERSONAL APT an upward  growth
    path, as their work increases in  complexity, without having to learn  a
    new programming language.  Also, PERSONAL APT is so easy to use that  it
    is ideal  for teaching  and learning  the APT  language and  programming
    concepts.  Text editing and graphic  display of tool paths are  built-in
    features of PERSONAL APT.  Also, PERSONAL APT offers capabilities beyond
    other programming languages (BASIC, Fortran,  C, etc.) for the  solution
    of complex mathematical and geometric problems.
    
    The basic PERSONAL APT  processor is distributed  as SHAREWARE, free  of
    charge, except perhaps a nominal charge for media, handling and postage.
    Documentation and  example programs  are included  on this  distribution
    disk.
    
    Why are we offering you a free  copy of PERSONAL APT when other  similar
    systems are being sold today for thousands of dollars?  Well, we believe
    that when you experience the power of PERSONAL APT and the friendly user
    interface; when you evaluate PERSONAL APT in your own enviornment and on
    your own applications, you will be in the best position to determine the
    value of  this system  to you.   If  you, like  most users,  agree  that
    PERSONAL APT  offers  the  best  value  available  today  for  a  NC/CNC
    programming system  and you  intend to  use PERSONAL  APT on  a  regular
    basis, you are expected to become a registered user.
    
    We make every effort to  not inflate customer expectations for  PERSONAL
    APT.  Happy customers  are easiest to service  and, therefore, a  larger
    portion of our resources can be devoted to enhancing and maintaining the
    software.  This is another reason we want each and every user to have an
    opportunity to personally evaluate PERSONAL APT before registering.  The
    concept is simple; If it works for you, buy it.
    
    Copyrighted software  that  is distributed  in  this manner  is  usually
    called SHAREWARE.  Thus, PERSONAL APT is being distributed as  SHAREWARE
    and is NOT being placed in the Public Domain.
    
        You may use and evaluate PERSONAL APT on your own computer,  in
        your own work area and on your own applications.  Also, you may
        copy PERSONAL  APT  (Shareware  version  only)  and  share  the
        program with others for their  private and non-commercial  use.
        If you  find PERSONAL  APT to  have value  to you  and wish  to
        contribute to the further   development and enhancement of  the
        program, you should become a registered user.
    
        Registered users receive the latest version of the PERSONAL APT
        software, the printed and  bound PERSONAL APT REFERENCE  GUIDE,
        sample postprocessors  for both  mill  and lathe  machines  and
        APTHELP, a memory-resident  program that  provides pop-up  help
        windows for  PERSONAL  APT.    You will  also  receive  a  disk
        containing the POSTPROCESSOR WRITERS  GUIDE and source code  in
        both Fortran and  QuickBasic for  skeleton postprocessors  that
        interface with PERSONAL APT.
    
        You will be  placed on the mailing list for PERSONAL APT  NEWS,
        the newsletter for PERSONAL APT users.   Also, you will have  a
        voice on the prioritization of future enhancements and you will
        be notified of all PERSONAL APT updates.
    
        DMS also  offers Master  Postprocessors, for  both milling  and
        turning machines,  and a  high resolution  graphics program  to
        further enhance  the value  of PERSONAL  APT. The  output  from
        these postprocessors is controlled by user selectable  options.
        MASTER MILL  POSTPROCESSOR  (MMP), MASTER  LATHE  POSTPROCESSOR
        (MLP) and  PERSONAL APT  HIGH RESOLUTION  GRAPHICS (PAHRG)  are
        seperate programs and  require an  additional registration  fee
        for each.
    
        To become a registered user of PERSONAL APT, just complete  the
        registration form, enclose the charges computed on the  Invoice
        form found at the end of this document and mail to:
    
              Digital Manufacturing Systems
              P.O. Box 1079
              Rogers, Arkansas   72757
    
        Even if  you elect  not  to become  a registered  user,  please
        complete the  registration  form  and  mail  it  to  the  above
        address.  You will be placed  on our mailing list for  PERSONAL
        APT NEWS.
    
        The PERSONAL APT NEWS newsletter provides for an interchange of
        information between users.  Also,  users will be able to  share
        their  own  enhancements   (Postprocessors,  Plotter   Drivers,
        Macros) with others,  either as  a donation  or on  a fee  paid
        basis.  In addition, we will try to keep you informed of  other
        low  cost,  or free,  software that might  have application  in
        Engineering and Manufacturing functions.
    
    I believe that this concept provides a very valuable software package at
    minimum  cost,  affordable  by  all.    Registration  fees  support  the
    continuing development and enhancement of PERSONAL APT.
    
    I appreciate your interest in PERSONAL APT and DMS.  We look forward  to
    hearing from you.
    
    
    Sincerely yours,
    
    Robert G. Drewry
    Digital Manufacturing Systems
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                            PERSONAL APT MINI-MANUAL
                                   Version 1.50
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (C)Copyright 1985-1990, by;
    Digital Manufacturing Systems
    P.O. Box 1079
    Rogers, AR   72757
    Voice: (501) 925-3666  BBS: 501-273-9257
                                                PERSONAL APT MINI-MANUAL   1
    
    
    
    INTRODUCTION
    
    PERSONAL APT is  a computer program  which translates Numerical  Control
    Programs, written in a subset of the APT language, into an  intermediate
    format (CL file)  for subsequent postprocessing  into a Machine  Control
    Tape or other control media.
    
    APT (Automatically Programmed Tools) is the oldest and most widely  used
    NC programming  language  in  general use  today.  APT  development  was
    initially sponsored by the  US Air Force, and  later the AIA  (Aerospace
    Industries Association), and has evolved into an extremely powerful  and
    universal programming language. PERSONAL APT recognizes only a subset of
    the APT vocabulary but is powerful enough to handle most requirements.
    
    Additionally, the minimum hardware requirements and abundant features of
    PERSONAL APT make it an ideal program for schools and individuals to use
    in teaching and learning the APT programming language and its concepts.
    
    PERSONAL APT can be a very productive tool for Engineers, Draftsmen  and
    others  who   spend  time   on   complex  mathemetical   and   geometric
    computations. PERSONAL  APT  provides preprogrammed  functions  for  the
    solution  of  intersection  and  tangency  problems,  transformation  of
    dimensional data between coordinate systems and vector functions to  aid
    computations.
    
    PERSONAL APT was developed to run on the IBM/PC and compatible  personal
    computers. The minimum  hardware requirements are  512kb memory and  two
    floppy disks (384kb memory and one floppy disk for Shareware version). A
    hard disk is recommended  for greater productivity.   You must also  use
    PC/MS DOS 2.xx or later.
    
    Many books and magazine articles have been written outlining the history
    of  numerical  control  and  the  development  of  the  APT  programming
    language.  Also, there are numerous books available which fully  explain
    the APT language concepts and act as a tutorial covering its usage.  For
    the  inexperienced  programmer,  we  recommend  NUMERICAL  CONTROL  PART
    PROGRAMMING, published  by Industrial  Press and  authored by  James  J.
    Childs.  This book may  be purchased from Digital Manufacturing  Systems
    for $29.00 or ordered through your  local book store.  Other books  that
    would aid in learning the APT language are:
    
          TITLE                                PUBLISHER
    
          Principals of Numerical Control      Industrial Press
          Numerical Control Programming        John Wiley & Sons, Inc.
    








    
                  (C) Digital Manufacturing Systems 1985-1990               
    2   PERSONAL APT MINI-MANUAL                                            
    
    
    COPYRIGHT
    
    PERSONAL APT  is  copyrighted  (C) 1985-1990  by  Digital  Manufacturing
    Systems. All rights are reserved. Users are granted a limited license to
    use this product on a trial basis, and to copy the program for trial use
    by others subject to the following limitations:
    
         PERSONAL APT is distributed in unmodified form, complete with  this
         documentation.
    
         No fee, charge or other consideration is requested or accepted.
    
         PERSONAL APT  is  not distributed  in  conjunction with  any  other
         product.
    
    If you intend to  use PERSONAL APT on  a regular basis, please  register
    and give your support  to the continued  development and enhancement  of
    the system. Commercial, business  or governmental use by  non-registered
    users is prohibited.
    
    If you  are interested  in multiple  copies of  PERSONAL APT,  Site  and
    Corporate licenses are available. Please contact us.
    
    TRADEMARKS
    
    PERSONAL APT is a trademark of Digital Manufacturing Systems.
    
    
    REGISTRATION
    
    If you use,  or intend  to use,  PERSONAL APT  on a  regular basis,  you
    should become a  registered user and  support the continued  development
    and enhancement of this system.
    
    Registered  users  receive  the  latest  version  of  the  PERSONAL  APT
    software, sample postprocessors  for both milling  and turning  machines
    and APTHELP, a memory-resident program that provides pop-up help windows
    for PERSONAL APT syntax. Additionally, you will be placed on the mailing
    list for PERSONAL APT NEWS, the newsletter for PERSONAL APT users. Also,
    you will be notified of all PERSONAL APT updates and have a voice on the
    prioritization of future enhancements.
    
    You will also receive a  disk containing the PERSONAL APT  POSTPROCESSOR
    WRITERS guide which provides information on writing and interfacing your
    own  postprocessor   programs.     Additionally,   DMS   offers   Master
    Postprocessors, for  both  milling  and turning  machines,  and  a  high
    resolution graphics program to fully utilize CGA, EGA, VGA and  Hercules
    colors and resolution.  The output of these postprocessors is controlled
    by the  users selection  of various  options available.   MASTER    MILL
    POSTPROCESSOR (MMP), MASTER LATHE  POSTPROCESSOR (MLP) and PERSONAL  APT
    HIGH RESOLUTION GRAPHICS  (PAHRG) are  seperate programs  and require  a
    registration fee for each.
    
    Registered users will  receive notification  of all  future updates  and
    technical support via mail, telephone and our support BBS.
    
                  (C) Digital Manufacturing Systems 1985-1990               
                                                PERSONAL APT MINI-MANUAL   3
    
    
    To become a registered user, just complete the registration form at  the
    end of  this document  and send  the form  along with  the  registration
    fee(s) to:
    
      Digital Manufacturing Systems
      P.O. Box 1079
      Rogers, AR  72757
    
    NO WARRANTY
    
    PERSONAL APT and other  associated programs are provided  on an "as  is"
    basis without warranty of any kind, expressed or implied, including  but
    not limited to the implied warranties of merchantability and fitness for
    a particular purpose. The entire risk  as to quality and performance  of
    these programs  is with  you. Should  any program  prove defective,  you
    assume the entire cost of all necessary repair, servicing or correction.
    In no event will Digital Manufacturing Systems be liable to you for  any
    damages, including lost  profits, lost savings,  or other incidental  or
    consequential damages arising out of the  use or inability to use  these
    programs, even if Digital Manufacturing Systems has been advised of  the
    possibility of such damages.


































    
                  (C) Digital Manufacturing Systems 1985-1990               
    4   PERSONAL APT MINI-MANUAL                                            
    
    
    GETTING STARTED WITH PERSONAL APT
    
    PERSONAL APT  is distributed  by  DMS and  Public-Domain/Shareware  disk
    vendors on a DS/DD 360kb floppy disk.  Also, the files on this disk  are
    made available on Bulletin Boards in an archived form.  A complete  list
    of the distribution files and a  brief description of each follows.   If
    any of these files are missing or if  you just want to be sure you  have
    the latest version of PERSONAL APT, call us at 501-925-3666 and tell  us
    what version you have (this is version 1.50).  We'll be glad to send you
    the latest  Shareware distribution  disk.   Also, the  latest  Shareware
    version of PERSONAL APT  is always available on  our support BBS.   Just
    call 501-273-9257 and access the CAM Special Interest Group and you  may
    download on  your first  call.   Set  your communication  parameters  to
    N,8,1.  Call 501-273-0152 if you have a 9600 baud modem.
    
        README------------Initial instructions
        PERAPT.EXE--------The executable program.
        PERAPT_H.COM------CGA simulator for Hercules graphics
        PERAPT.DOC--------PERSONAL APT Mini-Manual
        MILLEXMP.APT------Sample milling program
        LATHEXMP.APT------Sample lathe program
        REGISTER.TXT------PERSONAL APT registration form
        INVOICE.TXT-------Invoice form for PERSONAL APT registration
        SCHOOLS.TXT-------Educational discount policy
        FILES.TXT---------This list of files & descriptions
        *.APT-------------Miscellaneous PERSONAL APT part programs
    
    Your system must have a minimum of 384kb memory and one 360kb disk drive
    to run PERSONAL APT.  You should have a minimum of 512kb memory and  two
    360kb, one 720kb (or greater) disk to run PERSONAL APT productively.
    
    You also need PC/MS DOS 2.xx or later and an IBM Color Graphics (CGA) or
    Hercules compatible graphics capability  to display the programmed  tool
    path.  Registered users  are able to configure  PERSONAL APT to  utilize
    their own special programs, or  additional software products offered  by
    DMS, for plotting, tape punching and postprocessing.
    
    Before you do  anything else,  make a backup  copy of  the PERSONAL  APT
    distribution disk. This may be  accomplished by typing "diskcopy a:  b:"
    at the DOS prompt.  Your computer will instruct  you when to insert  the
    SOURCE (distribution) disk and the TARGET (backup copy) disk.
    
    Next place the PERSONAL  APT distribution disk in  a safe place and  use
    the backup copy.
    
    Now, be sure to print and read the  README  and PERAPT.DOC files.   Just
    type PRINTDOC at the DOS prompt.  If you have trouble doing this,  refer
    to your DOS manual or seek the help of a knowledgeable friend.
    
          **********************************************************
          * Registered users receive a second disk which  contains *
          * sample postprocessors for both Mill and Lathe machines *
          * and APTHELP,  a pop-up help program for APT syntax and *
          * capabilities.  Please register today!                  *
          **********************************************************
    
                  (C) Digital Manufacturing Systems 1985-1990               
                                                PERSONAL APT MINI-MANUAL   5
    
    
    INSTALLATION PROCEDURES
    
      * Installing PERSONAL APT on a Floppy Disk System
          1. Boot the system in the normal manner
          2. Remove your system disk
          3. Insert the PERSONAL APT backup disk
          4. Delete unnecessary files from the PERSONAL APT work disk to allow
             room for programs and PERSONAL APT generated files thus:
                  DEL PERAPT.DOC
                  DEL README
          5. Type PERAPT to start the program (PERAPT_H for Hercules)
          6. Immediately after you exit PERSONAL APT, remove the PERSONAL
             APT disk and re-insert the system disk.
    
    
    
      * Installing PERSONAL APT on a Hard Disk System
    
          1. Boot your system in the normal manner
          2. Create a sub-directory 'APT' thus: >md apt
          3. Change to the APT directory thus: >cd apt
          4. Copy the distribution files thus: >copy a:*.*
          5. Remove and store the PERSONAL APT backup disk.
          6. Type PERAPT (PERAPT_H for Hercules) to start the program































    
                  (C) Digital Manufacturing Systems 1985-1990               
    6   PERSONAL APT MINI-MANUAL                                            
    
    
    USING PERSONAL APT
    
    To execute PERSONAL APT, type 'PERAPT'  at the DOS prompt. PERSONAL  APT
    commands are single keystroke choices from  the Main Menu. The key  used
    may be either the numeric  key or the function  key of the same  number.
    The function key  "f10" will be  interpreted as the  zero (0) key.  File
    names must be terminated with the "Enter" key. You should not  terminate
    the Y/N response to questions with a "Enter". PERSONAL APT allows you to
    type commands ahead of the menu display and therefore, the "Enter" would
    simply be used for the next command, normally a zero (0).
    
    After the  initial  screen   is  displayed and  a  key is  pressed,  the
    PERSONAL APT Main Menu is displayed.  The menu header shows the  version
    of PERSONAL APT that is being used, the date and the input file.  Notice
    that the name of the Input file is 'none' until a file is loaded (f5).
    
    The Main Menu  gives the user  a choice of  10 commands.   If a  command
    requires additional  information, a  sub-menu is  displayed for  you  to
    choose from or a query is made for a file name.
    _____________________________________________________________________
      ***PERSONAL APT   V1.50**(C) Digital Manufacturing Systems  1985-1990
                                   P.O. Box 1079,    Rogers, AR   72757
    Input File: none                       Number of characters=    0
    
         MAIN MENU
    
      1. Run Program
      2. Plot CL File
      3. Postprocess
      4. Edit Text
      5. Load program
      6. Save program
      7. Print
      8. Punch Tape
      9. Configure
      0. Exit to DOS
    
        Choose one: _
    ________________________________________________________________________
    
    At this time you choose one of the commands and enter that number  using
    the numeric keys or the function keys of the same number.  Function  key
    f10 is used for zero.  You  may press Alt-f1 for help whenever  PERSONAL
    APT is waiting for input.
    
            ********************************************************
            * The screen examples shown are  close  approximations *
            * of actual screens.  The PERSONAL APT REFERENCE GUIDE *
            * distributed  to  registered  users  contains  actual *
            * screen examples.  Please register today!             *
            ********************************************************




    
                  (C) Digital Manufacturing Systems 1985-1990               
                                                PERSONAL APT MINI-MANUAL   7
    
    
    First we choose  to load  the sample part  program MILLEXMP.   Thus,  we
    would press key  f5 (do not  press enter).   Selecting the load  command
    causes the system to display a file name query thus;
    
    _________________________________________________________________________
      ***PERSONAL APT   V1.50**(C) Digital Manufacturing Systems  1985-1990
                                   P.O. Box 1079,    Rogers, AR   72757
    Input File: none                       Number of characters=    0
    
         MAIN MENU
    
      1. Run Program
      2. Plot CL File
      3. Postprocess
      4. Edit Text
      5. Load program
      6. Save program
      7. Print
      8. Punch Tape
      9. Configure
      0. Exit to DOS
    
        Choose one: 5
    
                                 File Name: millexmp____________
    
    _________________________________________________________________________
    
    A list of APT program files  in the current directory are displayed  for
    help in remembering the file name.
    
    Then we type the  file name.  If  the file extension  is not typed,  the
    extension APT is chosen and  the file is loaded  (note that you have  to
    end the file name input by pressing the Enter key).
    
    Now notice how the menu header has changed  to add the file name as  the
    Input file, and also the  file size.  This  new header is now  displayed
    with the menu selections.
    
    ________________________________________________________________________
      ***PERSONAL APT   V1.50**(C) Digital Manufacturing Systems  1986-1990
                                   P.O. Box 1079,    Rogers, AR   72757
    Input File: MILLEXMP.APT               Number of characters= 1739
    ________________________________________________________________________











    
                  (C) Digital Manufacturing Systems 1985-1990               
    8   PERSONAL APT MINI-MANUAL                                            
    
    
    Next you select the RUN command by pressing the f1 key.  The screen will
    go blank  and then  you will  see a  line at  the bottom  of the  screen
    labeled "Processing Monitor Window".     Below  this line, you will  see
    the program line about  tobe processed displayed on  the bottom line  of
    thescreen.The region inside the box is scrolled as another program  line
    is about to  be processed.   Thus, you will  be able to  see the last  4
    program lines that have been processed.  To further aid in following the
    program processing, GOSUB and MACRO processing boxes are displayed  with
    the name of the MACRO or the label identifier for the GOSUB.  This  aids
    the programmer in following  the nesting of these  two features.   Also,
    since the boxes remain  visible when an error  is encountered, you  will
    have  visual  confirmation  of  the  nest  chain  when  the  error   was
    encountered.
    
    When program processing has completed, the Main Menu is again displayed.
    
    Next you probably  want to verify  the results of  the program. This  is
    menu choice f2 (Plot).  A submenu is then displayed showing the  choices
    that are available  for plotting.   Refer to the  section "PERSONAL  APT
    PLOTTING" for additional information.
    
    Don't be afraid to try  all the menu choices.   With a little  practice,
    you will feel very comfortable with the menu system.
    
    The Edit (f4) command allows  you to add, delete  or change the text  of
    the part program.  Refer to the section "PERSONAL APT VISUAL EDITOR" for
    additional information.
    
    The Configure (f9) command displays  some default flags and values  that
    the user may configure to his/her own needs.
    
    NOTE: Read  the  documentation  thoroughly.    You  will  probably  save
    considerable time.






















    
                  (C) Digital Manufacturing Systems 1985-1990               
                                                PERSONAL APT MINI-MANUAL   9
    
    
    PERSONAL APT VISUAL EDITOR
    
    Part programs  are a  series  of statements  representing  computational
    commands and machine  instructions. These  statements are made  up of  a
    string of alphanumeric characters. The part program therefore is  merely
    a text file much like any other text file.
    
    It would  be very  unusual to  write a  part program  that contained  no
    errors, either in logic or typing.  Thus, we must have an easy method to
    alter or change the text to correct these errors. Also, we would like to
    use the computer  to help prepare  the initial input.  The PERSONAL  APT
    VISUAL EDITOR provides the  ability to easily  prepare the initial  part
    program and to  make the  alterations and changes  necessary to  correct
    problems and update programs.
    
    PERSONAL APT VISUAL EDITOR COMMANDS
    
    The Visual Editor displays a 24-line window of the text and a 25th  line
    of status and help information.  Editing is allowed on the line of  text
    where the cursor is  displayed. Most editing  commands require a  single
    keystroke. You are prompted  for additional information when  necessary.
    All information  input  in  response  to a  prompting  message  must  be
    terminated by pressing  the Enter key.   Holding the  ALT key  depressed
    while pressing the H (Alt-H) key will display a help screen.
    
        * FUNCTION KEY COMMANDS
            f1---Mark the beginning of a block of text
            f2---Save the text from the 'f1' mark to this line
            f3---Insert a file
            f4---String search (not case sensitive)
            f5---String replacement
            f6---Duplicate present line
            f7---Unassigned
            f8---Delete the present line
            f9---Unassigned
           f10---Unassigned
           Esc---Exit
    
        * OTHER COMMANDS
           Up_Arrow------Moves cursor one line toward the top of the text
           Down_Arrow----Moves cursor one line toward the end of the text
           Right_Arrow---Moves cursor one position to the right
           Left_Arrow----Moves cursor one position to the left
           Home----------Moves cursor to beginning of line
           End-----------Moves cursor to end of line
           Pg Up---------Moves cursor to top or next screen
           Pg Dn---------Moves cursor to bottom or next screen
           Ins-----------Toggles between Insert and Replace mode
           Del-----------Deletes the character at the cursor position
           Backspace-----Deletes the character at the left of the cursor
           Enter---------Begins a new line, following the present line
           Any character-Inserts, or Replaces, a character



    
                  (C) Digital Manufacturing Systems 1985-1990               
    10   PERSONAL APT MINI-MANUAL                                           
    
    
        * ALT KEY COMMANDS
    
           These commands are executed by holding the Alt key
           depressed while pressing the second key.
    
             Alt-T------Positions to the top of the text.
             Alt-B------Positions to the bottom of the text.
    
    DESCRIPTION OF EDITING COMMANDS
    
         f1---This command causes the  program line on  which the cursor  is
              located to be  marked and remembered  as the first  line of  a
              block of text  that will be  saved as a  separate file.   Each
              execution of the f1 command updates the marked location.   The
              f1 mark will be cleared only when the f2 command is executed.
    
         f2---This command causes the  program line on  which the cursor  is
              located to be used as the last  line in a block of text to  be
              saved as a  separate file.   You will be  prompted for a  file
              name on which to save the text.  Once the text is saved, or if
              no file name is  entered, the f1 and  f2 markers are  cleared.
              The f2  command is  ignored if  the f1  command has  not  been
              previously executed.
    
         f3---This command prompts for a file  name.  The text in the  given
              file will be inserted into the present text following the line
              on which the cursor appears.   If no file name is entered,  no
              action will be taken.  The  cursor will remain on the  present
              line after the file is inserted.
    
              The inserted  text  will  be  truncated if  the  size  of  the
              inserted file is such that it would cause the maximum size  of
              text to be exceeded.
    
         f4---This command initiates a prompt for  a text string.  A  search
              for  the  entered  text  string  begins  with  the   character
              following the present  cursor position and  continues until  a
              string match is found or the end of the text is reached.  If a
              string match is found,  that text line  will be positioned  in
              the  approximate  center  of   the  screen  with  the   cursor
              positioned on the first character of the string.  If a  string
              match is not found, no action is taken.
    
              In order  to search  the  complete file,  the cursor  must  be
              positioned at the first character of the first line of text.
    
         f5---This command  provides  for  replacing one  text  string  with
              another.  The search  for the matching  text string begins  at
              the character following the cursor and continues to the end of
              the text.  You  may elect to  confirm each string  replacement
              before the text is altered.  You may abort the command at  any
              time you  are asked  to  confirm the  replacement.   Any  text
              replaced prior  to the  'abort' will  remain in  its  replaced
              form.
    
    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   11
    
              See the f4  command for additional  information on the  string
              search procedure.
    
         f6---This  command  causes  the  present  line  to  be   duplicated
              following the present line.   The cursor  will be advanced  to
              the new line.
    
         f8---This command deletes the  entire line on  which the cursor  is
              presently shown.  The  cursor will then  be positioned on  the
              following line.
    
         Esc--This command exits the Editor and returns to the Main Menu.
    
         Up Arrow--This command moves the cursor one line toward the top  of
              the screen.  If the cursor is already located on the top line,
              the text will be scrolled down to make room for the next  line
              toward the top of the text.  A flashing "End of file"  message
              is displayed when  the cursor cannot  be moved farther  toward
              the top of the text (i.e. the  cursor is on the first line  of
              the file).
    
         Down Arrow--This  command moves   the  cursor one  line toward  the
              bottom of the screen.  If the cursor is already located on the
              bottom line, the text will be scrolled up to make room for the
              next line toward the bottom of  the text.  A flashing "End  of
              file" message is  displayed when  the cursor  cannot be  moved
              farther toward the bottom of the  text (i.e. the cursor is  on
              the last line of the file).
    
         Right Arrow--This command  moves   the cursor one  position to  the
              right.  A flashing "End of  line" message is displayed if  the
              cursor is already at the end of the line.
    
         Left Arrow--This command moves the cursor one position to the left.
              A flashing "End of line" message is displayed if the cursor is
              already at the beginning of the line.
    
         Home--This command causes the cursor  to be moved to the  beginning
              of the line.  A flashing "End of line" message is displayed if
              the cursor is already at the beginning of the line.
    
         End--This command causes the cursor to  be moved to the end of  the
              line.  A flashing  "End of line" message  is displayed if  the
              cursor is already at the end of the line.
    
         PgUp--This command moves the cursor to the top line of the  screen.
              The text window is moved 23  lines toward the top of the  text
              if the cursor is already on the top line.  A flashing "End  of
              file" message is  displayed if  the cursor is  already on  the
              first line of the text.  A full 23 line screen move means that
              the top line of  the previous screen will  be the bottom  line
              displayed on the new screen.  This allows the user to  confirm
              the continuity of the text.



    
                  (C) Digital Manufacturing Systems 1985-1990               
    12   PERSONAL APT MINI-MANUAL                                           
    
    
         PgDn--This command  moves the  cursor  to the  bottom line  of  the
              screen.  The text window is  moved 23 lines toward the  bottom
              of the text if the  cursor is already on  the bottom line.   A
              flashing "End of file" message if the cursor is already on the
              last line of text.  A full 23 line screen move means that  the
              bottom line of the previous screen is the top line of the  new
              screen.  This allows the user to confirm the continuity of the
              text.
    
         Ins--This command toggles between the Insert and Replace modes  for
              entering text.  The  present mode is  displayed at the  bottom
              right of the screen with "Ins" or "Rep".
    
              Insert mode means that the new character typed will be entered
              in the text at  the present cursor  position.  All  characters
              following the present cursor  position are moved one  position
              to the right.  The cursor is moved one position to the right.
    
              Replace mode means that the  new character typed will  replace
              the character at the present cursor position.  The cursor will
              be moved one position to the right.  Characters will be  added
              to the line  if the  cursor is positioned  at the  end of  the
              line.
    
         Del--This command  deletes the  character at  the cursor  position.
              All remaining  characters  on  the  line  will  be  moved  one
              position to the left.  No action is taken if the cursor is  at
              the end of the line or there are no characters on the line.
    
         Backspace---This command deletes the character  to the left of  the
              present cursor position.  All remaining characters on the line
              will be moved one  position to the left.   The cursor is  also
              moved one position  to the left.   No action  is taken if  the
              cursor is  at  the beginning  of  the  line or  there  are  no
              characters on the line.
    
         Enter--This command causes  a blank line  to be inserted  following
              the present cursor line.   The inserted line will be  indented
              the same number of spaces as  the preceding line.  The  cursor
              is moved to the new line.
    
         Any Printing Character--Normal   printing   characters are   either
              inserted into the text or replace an existing text  character.
              See the Ins toggle command.
    
         Alt-T--Positions the screen  window to the  top of the  text.   The
              cursor is placed at the beginning of the top screen line.
    
         Alt-B--Positions the screen window to the bottom of the text.   The
              cursor is placed at the beginning of the bottom screen line.





    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   13
    
    
    PERSONAL APT PROGRAM PREPARATION
    
    Preparation of a new PERSONAL APT part program may be done with any text
    editor.  When using the PERSONAL  APT Visual Editor for initial  program
    preparation, simply enter  the editor  command (f4) prior  to loading  a
    program. A  blank  screen will  be  displayed  and the  cursor  will  be
    positioned in the upper left corner of  the screen.  Just type your  new
    program text.  You may use all the editing commands on the entered text.
    
    You should make a  practice of exiting the  editor and saving your  work
    after approximately 15  minutes of work.   This will  avoid repeating  a
    great deal  of  work should  you  have a  power  failure or  some  other
    unforseen difficulty that would require you to start over.
    
    Upon exit from the editor, you will be prompted for a file name on which
    to save the text.







































    
                  (C) Digital Manufacturing Systems 1985-1990               
    14   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT PLOTTING
    
    Plotting  is  accomplished  by  reading   the  CL  file  just   created.
    Therefore, you cannot plot a program until you have "run" the program to
    create the CL file.  The plotting capability includes 2-dimensional (XY-
    YZ-ZX) and 3-dimensional (Perspective and Isometric) options.
    
    To avoid interference between text and graphics, the screen is  divided.
    The text will be scrolled through the bottom three lines of the  screen,
    and the remainder of the screen  will be used for graphics (approx.  9x6
    inches).
    
    Each time a FROM, PPLOT, LOADTL or  END record is encountered in the  CL
    file, you are allowed to interact with the system to change the plotting
    window, clear the screen, etc..  These actions are taken as a result  of
    the choice you make from the menu presented.  The following choices  are
    offered:
    
        0) Continue------Continue with the plot.
        1) Window--------Reset the plot window and scale.
        2) Step----------Pause before plotting the results of each input
                         statement that generated motion.
        3) Clear---------Clear the screen.
        4) Axis----------Draw axis lines from 0,0,0.
        5) Abort---------Terminate plotting and return to the Main Menu.
    
    PERSONAL APT plotting is done in  the 640x200 B&W mode.  Obviously,  you
    must have  a graphics  controller board  capable of  this resolution  in
    order to plot.   PERSONAL APT plotting should  work on anything that  is
    compatible with the IBM Color Graphics Adapter (CGA).
    
    Rapid moves  will be  plotted as  dashed lines,  all other  motions  are
    plotted as solid lines.
    
    CHANGING THE PLOT WINDOW
    
    Regardless of which  view you  are plotting,   PERSONAL  APT chooses  an
    initial plotting  scale that  will  allow all  tool  path points  to  be
    displayed.
    
    When plotting the XY, YZ or ZX views, the plot window may be thought  of
    as the CRT screen being placed somewhere within the program   coordinate
    system.  When  you select  the 'Window'  command, you  are prompted  for
    three values, Xmin-Ymin-Scale (for the  XY View).  The Xmin-Ymin  values
    locate the lower left  corner of the CRT  screen in the part  coordinate
    system.  Scale determines how much of the part coordinate system will be
    visible on the screen.  A scale of 1.0 means that you will see all  tool
    paths that fall  within the  rectangle defined by  the opposing  corners
    (Xmin-Ymin) and (Xmin+9-Ymin+6).  A scale of 2.0 means that you will see
    the rectangle (Xmin-Ymin) and (Xmin+4.5-Ymin+3), etc..  An automatic re-
    draw of all tool paths, since the last Clear command, will occur in  the
    new window just specified.
    


    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   15
    
    
    PERSONAL APT OUTPUT
    
    The PERSONAL APT  processor generates  two different  output files,  the
    LIST file and  the CL file.   The  LIST file contains  the part  program
    input statements, in  the sequence processed,  followed by the  computed
    data generated.  Geometry  canonical form data is  printed   after  each
    definition statement, if PRINT/ON has been programmed, and the  computed
    tool center locations are printed after each motion statement.
    
    The LIST file may be displayed on the console or printed on the printer.
    The CL file is used as input to the plotting program and postprocessors,
    and cannot be printed by PERSONAL APT.
    
    Following is a sample PERSONAL APT  part program and the LIST file  that
    it generated.
    
          PARTNO PERSONAL APT SAMPLE PART PROGRAM
          PRINT/ON      $$ PRINT GEOMETRY CANONICAL FORMS
          MACHIN/MILL1,1
          P1=POINT/4,5.25,0
          C1=CIRCLE/CENTER,P1,RADIUS,1.5
          L1=LINE/P1,ATANGL,35
          L2=LINE/(P2=POINT/1,3),RIGHT,TANTO,C1
          L3=LINE/(POINT/INTOF,L1,L2),PERPTO,L2
          SPINDL/1800,RPM,RANGE,2
          FROM/0,0,3
          CUTTER/.5
          RAPID,GO/PAST,L1,(PLANE/0,0,1,0),L3
          TLLFT,GORGT/L1,PAST,2,INTOF,C1,15
          GORGT/C1
          GOFWD/L2,PAST,L3
          RAPID,GODLTA/3,200
          RAPID,GOTO/0,0,3
          END
          FINI
    
    
             ******************************************************
             * The  PERSONAL APT REFERENCE GUIDE  distributed  to *
             * registered users contains a drawing of this sample *
             * part.  Please register today!                      *
             ******************************************************













    
                  (C) Digital Manufacturing Systems 1985-1990               
    16   PERSONAL APT MINI-MANUAL                                           
    
    
    THE PERSONAL APT LIST FILE
    
    The asterisk in the  first print position  denotes information that  was
    generated by  PERSONAL APT  from  the input  program.   The  information
    following a geometry definition is the canonical form of that   element.
    The information following the startup and motion statements is:
    
         Linear Motion---X, Y and Z coordinates of the tool end.
       Circular Motion---X, Y, Radius and direction of the arc.  X-Y
                         represent the arc center and Radius is the
                         tool center radius.  The three following numeric
                         values represent the X, Y and Z location of the
                         tool end at the completion of the arc motion.
    
      PARTNO PERSONAL APT SAMPLE PART PROGRAM
      -PERSONAL APT- Ver 1.2   20-Jan-89  12:22:12
      PRINT/ON      $$ PRINT GEOMETRY CANONICAL FORMS
      MACHIN/MILL1,1
      P1=POINT/4,5.25,0
     *P1              4.0000    5.2500     .0000
      C1=CIRCLE/CENTER,P1,RADIUS,1.5
     *C1              4.0000    5.2500    1.5000
      L1=LINE/P1,ATANGL,35
     *L1              -.5736     .8192     .0000    2.0062
      L2=LINE/(P2=POINT/1,3),RIGHT,TANTO,C1
     *P2              1.0000    3.0000     .0000
     *L2              -.2299     .9732     .0000    2.6897
      L3=LINE/(POINT/INTOF,L1,L2),PERPTO,L2
     *L3               .9732     .2299     .0000    1.3321
      SPINDL/1800,RPM,RANGE,2
      FROM/0,0,3
     *FROM     .0000     .0000    3.0000
      CUTTER/.5
      RAPID,GO/PAST,L1,(PLANE/0,0,1,0),L3
     *GT       .3958    3.0315     .0000
      TLLFT,GORGT/L1,PAST,2,INTOF,C1,15
     *GT      5.2754    6.4483     .0000
      GORGT/C1
     *CIR     4.0000    5.2500    1.7500 CLW
              4.4023    3.5469     .0000
      GOFWD/L2,PAST,L3
     *GT       .4922    2.6232     .0000
      RAPID,GODLTA/3,200
     *GT       .4922    2.6232    3.0000
      RAPID,GOTO/0,0,3
     *GT       .0000     .0000    3.0000
      END
      FINI







    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   17
    
    
    PERSONAL APT LANGUAGE SPECIFICATIONS
    
    Basically, this document contains the specifications for PERSONAL APT
    along with the APT vocabulary and APT statement formats that have been
    implemented.  This information shoild be sufficient to allow evaluation
    of PERSONAL APT for your needs.
    
    PERSONAL APT conforms to "standard" APT syntax and computational
    results, within the scope of its implementation, with the following
    exceptions:
    
       1.) The PERSONAL APT canonical form for a CIRCLE is X-Y-R.
       2.) GOSUB and RETURN are unique to PERSONAL APT.
       3.) Subscript computation is limited to addition and/or subtraction.
       4.) Pocketing tool paths may not be compatible.
    







































    
                  (C) Digital Manufacturing Systems 1985-1990               
    18   PERSONAL APT MINI-MANUAL                                           
    
    
    DOCUMENT FORMAT CONVENTIONS
    
    * PERSONAL APT vocabulary words are printed in capital letters.
          Examples: POINT, XLARGE, INTOF
    
    * A word in lower case letters, beginning with "s", designates a pre-
      viously defined symbol (or nested definition).
          Examples: spoint, sline, scircle
    
    * Other words in lower case letters designate a numeric value, a pre-
      viously defined scalar quantity or a nested computation.
          Examples: x, y, z, radius
    
    * When multiple items appear in a vertical list, one of them must be
      chosen unless they are enclosed in brackets..
    
    * Optional items are enclosed in brackets ([optional]).






































    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   19
    
    
    PERSONAL APT PUNCTUATION
    
        .   Decimal point
        ,   Comma (Field separator)
        /   Word separator
        $   Statement continuation
        $$  Comment line
        =   Equal, Symbol assignment
        (   Left Paren, Begin expression or nested definition
        )   Right Paren, End expression or nested definition
            (may be used as a terminator for a statement label)
        :   Colon, terminator for a statement label
    
    PERSONAL APT ARITHMETIC OPERATORS
    
        +   Addition
        -   Subtraction
        *   Multiplication
        /   Division
        **  Exponentiation
    
    PERSONAL APT FUNCTIONS
    
        * ABSF (scalar)
        * ACOSF(cosine)
        * ASINF(sine)
        * ATANF(tangent)
        * ATAN2F(y, x)
        * COSF  (angle)
        * DISTF (spoint, spoint)
        * DISTF (spoint, sline )
        * DISTF (spoint, splane)
        * DISTF (splane, splane)
        * DISTF (sline , sline )
        * DOTF  (svector, svector)
        * INTF  (scalar)
        * LOG10F(scalar)
        * LOGF  (scalar)
        * NUMF  (spattern)
        * ROUNDF(scalar)
        * SINF  (angle)
        * SQRTF (scalar)
        * TANF  (angle)












    
                  (C) Digital Manufacturing Systems 1985-1990               
    20   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT MISCELLANEOUS INFORMATION
    
                ON
        * REDEF/OFF
              REDEF/ON allows redefinition of any symbol  provided  the  new
              defined element is the same type as the initial definition.
    
              REDEF/OFF   (default)   only  allows  redefinition  of  scalar
              symbols.
    
              Scalars may be redefined at any time.
    
                splane
        * ZSURF/z-value
    
        * OBTAIN,type/symbol, scalar_symbols
          "symbol" may not be a nested definition.
    
            The Canonical Forms Are:
    
                POINT ------- x, y, z
                LINE -------- i, j, k, d
                CIRCLE ------ x, y, r
                PLANE ------- i, j, k, d
                VECTOR ------ i, j, k
                MATRIX ------ a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3
    
    
    SUBSCRIPTS
    
        * RESERV/symbol,max, symbol,max, .......
              Reserves symbol table space for  pointers  to  canonical  form
              data.
    
        * symbol(subscript_expression)
              Subscript_expression is restricted to simple addition and/or
              subtraction of scalar symbols or numeric data.
                  Example: PT(I-J+3)

















    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   21
    
    
    DEFINITION CAPABILITY
    
    PERSONAL APT provides a rich set of APT definition formats.  These
    definition formats are illustrated in the PERSONAL APT REFERENCE GUIDE
    which registered users receive.  Obviously graphic illustrations cannot
    be included in this document.  Please register today!

















































    
                  (C) Digital Manufacturing Systems 1985-1990               
    22   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT POINT DEFINITIONS
    
        * POINT/ x, y
    
        * POINT/ x, y, z
    
        * POINT/spoint [[,DELTAX,dx] [,DELTAY,dy] [,DELTAZ,dz] $
                        [,XCOORD,xc] [,YCOORD,yc] [,ZCOORD,zc]]
    
                        XYROT
        * POINT/spoint, YZROT, angle
                        ZXROT
    
        * POINT/INTOF, sline, sline
    
                XLARGE         scircle  scircle
        * POINT/XSMALL, INTOF, sline  , scircle
                YLARGE         scircle  sline
                YSMALL
    
        * POINT/CENTER, scircle
    
        * POINT/scircle, ATANGL, angle
    
        * POINT/INTOF, splane, splane, splane
    
                                  XYPLAN
        * POINT/[spoint,] RTHETA, YZPLAN, radius, angle
                                  ZXPLAN
    
                                  XYPLAN
        * POINT/[spoint,] THETAR, YZPLAN, angle, radius
                                  ZXPLAN
    
        * POINT/TRFORM, spoint, smatrix
    
        * POINT/spattern, number
    
            ****************************************************
            * The PERSONAL APT REFERENCE GUIDE distributed  to *
            * registered users contains illustrations of point *
            * definitions.  Please register today!             *
            ****************************************************












    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   23
    
    
    PERSONAL APT LINE DEFINITIONS
    
        * LINE/ x1, y1, x2, y2
    
        * LINE/ x1, y1, z1, x2, y2, z2
    
        * LINE/spoint, spoint
    
                XAXIS
        * LINE/ YAXIS
    
        * LINE/XCOORD, x-coordinate
    
        * LINE/YCOORD, y-coordinate
    
        * LINE/DIAMTR, diameter
    
                       LEFT
        * LINE/spoint, RIGHT, TANTO, scircle
    
               LEFT                   LEFT
        * LINE/RIGHT, TANTO, scircle, RIGHT, TANTO, scircle
    
                       PARLEL  XAXIS
        * LINE/spoint, PERPTO, sline
                               YAXIS
    
                              XLARGE
        * LINE/PARLEL, sline, XSMALL, distance
                              YLARGE
                              YSMALL
    
        * LINE/INTOF, splane, splane
    
                                     [,XAXIS]
        * LINE/spoint, ATANGL, angle [,sline]
                                     [,YAXIS]
    
                XLARGE                                [, XAXIS]
        * LINE/ XSMALL, TANTO, scircle, ATANGL, angle [, sline]
                YLARGE                                [, YAXIS]
                YSMALL
    
    
            ***************************************************
            * The PERSONAL APT REFERENCE GUIDE distributed to *
            * registered users contains illustrations of line *
            * definitions.  Please register today!            *
            ***************************************************






    
                  (C) Digital Manufacturing Systems 1985-1990               
    24   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT CIRCLE DEFINITIONS
    
        * CIRCLE/ x, y, radius
    
        * CIRCLE/ x, y, z, radius
    
        * CIRCLE/CENTER, spoint, RADIUS, radius
    
        * CIRCLE/CENTER, spoint, TANTO, sline
    
        * CIRCLE/CENTER, spoint_at_center, spoint_on_circle
    
                                 LARGE
        * CIRCLE/CENTER, spoint, SMALL, TANTO, scircle
    
        * CIRCLE/spoint, spoint, spoint
    
                 XLARGE         XLARGE
        * CIRCLE/XSMALL, sline, XSMALL, sline, RADIUS, radius
                 YLARGE         YLARGE
                 YSMALL         YSMALL
    
                 XLARGE         XLARGE  IN
        * CIRCLE/XSMALL, sline, XSMALL, OUT, scircle, RADIUS, radius
                 YLARGE         YLARGE
                 YSMALL         YSMALL
    
    
                 XLARGE  IN            IN
        * CIRCLE/XSMALL, OUT, scircle, OUT, scircle, RADIUS, radius
                 YLARGE
                 YSMALL
    
    
                               XLARGE
        * CIRCLE/TANTO, sline, XSMALL, spoint, RADIUS, radius
                               YLARGE
                               YSMALL
    
                          LARGE
        * CIRCLE/scircle, SMALL, distance
    
    
            *****************************************************
            * The PERSONAL APT REFERENCE GUIDE  distributed  to *
            * registered users contains illustrations of circle *
            * definitions.  Please register today!              *
            *****************************************************







    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   25
    
    
    PERSONAL APT PLANE DEFINITIONS
    
        * PLANE/ a, b, c, d
    
        * PLANE/sline
    
        * PLANE/spoint, spoint, spoint
    
        * PLANE/spoint, PARLEL, splane
    
        * PLANE/spoint, PERPTO, svector
    
        * PLANE/spoint, PERPTO, splane, splane
    
        * PLANE/PERPTO, splane, spoint, spoint
    
                                XLARGE
                                XSMALL
        * PLANE/PARLEL, splane, YLARGE, distance
                                YSMALL
                                ZLARGE
                                ZSMALL
    
    
            ****************************************************
            * The PERSONAL APT REFERENCE GUIDE  distributed to *
            * registered users contains illustrations of plane *
            * definitions.  Please register today!             *
            ****************************************************


























    
                  (C) Digital Manufacturing Systems 1985-1990               
    26   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT VECTOR DEFINITIONS
    
        * VECTOR/x [, y [, z]]
    
        * VECTOR/x1, y1, z1, x2, y2, z2
    
        * VECTOR/spoint, spoint
    
                                spoint
        * VECTOR/scalar, TIMES, svector
    
                 spoint          spoint
        * VECTOR/svector, CROSS, svector
    
                       spoint
        * VECTOR/UNIT, svector
    
                  spoint  PLUS   spoint
        * VECTOR/svector, MINUS, svector
    
                                                XYPLAN
        * VECTOR/LENGTH, length, ATANGL, angle, YZPLAN
                                                ZXPLAN
    
    
            *****************************************************
            * The PERSONAL APT REFERENCE GUIDE  distributed  to *
            * registered users contains illustrations of vector *
            * definitions.  Please register today!              *
            *****************************************************

























    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   27
    
    
    PERSONAL APT MATRIX DEFINITIONS
    
        * MATRIX/a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3
    
        * MATRIX/TRANSL, x[, y[, z]]
    
                 XYROT
        * MATRIX/YZROT, angle
                 ZXROT
    
        * MATRIX/SCALE, scale
    
        * MATRIX/smatrix, smatrix
    
                 XYROT
        * MATRIX/YZROT, angle, TRANSL, x[, y[, z]]
                 ZXROT
    
        * MATRIX/INVERS, smatrix
    
                         sline
                         splane
        * MATRIX/MIRROR, XYPLAN
                         YZPLAN
                         ZXPLAN
    
        * MATRIX/spoint, svector, svector
    
    
            *****************************************************
            * The PERSONAL APT REFERENCE GUIDE  distributed  to *
            * registered users contains illustrations of matrix *
            * definitions.  Please register today!              *
            *****************************************************





















    
                  (C) Digital Manufacturing Systems 1985-1990               
    28   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT PATTERN DEFINITIONS
    
        * PATERN/LINEAR, spoint, spoint, number
    
        * PATERN/LINEAR, spoint, svector, number
    
        * PATERN/LINEAR, spoint, svector, INCR, increment_list
    
        * PATERN/LINEAR, spoint, svector, INCR, number, AT, increment
    
                                                       CLW
        * PATERN/ARC, scircle, start_angle, end_angle, CCLW, number
    
                                            CLW
        * PATERN/ARC, scircle, start_angle, CCLW, INCR, angle_increment_list
    
                                            CLW
        * PATERN/ARC, scircle, start-angle, CCLW, INCR, number,AT,increment
    
                         spoint   spoint
        * PATERN/RANDOM, spatern, spatern,.............
    
        * PATERN/PARLEL, spatern, spatern
    
        * PATERN/PARLEL, spatern, svector, number
    
    
            ******************************************************
            * The PERSONAL APT REFERENCE  GUIDE  distributed  to *
            * registered users contains illustrations of pattern *
            * definitions.  Please register today!               *
            ******************************************************























    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   29
    
    
    PERSONAL APT VOCABULARY
    
      MAJOR WORDS
    
          AUTOPS      CALL        CIRCLE      CLPRNT      CUT
          CUTTER      DNTCUT      FINI        FROM        GO
          GOBACK      GODLTA      GOFWD       GOLFT       GORGT
          GOSUB       GOTO        IF          INDIRP      INDIRV
          INTOL       JUMPTO      LINE        MACRO       MATRIX
          NOPOST      OBTAIN      OUTTOL      PATERN      PLANE
          POCKET      POINT       PRINT       PSIS        REDEF
          REMARK      RESERV      RETURN      SYN         TERMAC
          THICK       TLLFT       TLOFPS      TLON        TLONPS
          TLRGT       TOLER       TRACUT      VECTOR      ZSURF
    
    







































    
                  (C) Digital Manufacturing Systems 1985-1990               
    30   PERSONAL APT MINI-MANUAL                                           
    
    
      MINOR WORDS
    
          AAXIS       ABSF        ACOSF       ADJUST      ALL
          ARC         ASINF       AT          ATAN2F      ATANF
          ATANGL      AUTO        AVOID       BAXIS       BLACK
          BLUE        BORE        BOTH        BRKCHP      CAM
          CAXIS       CCLW        CENTER      CIRCUL      CLW
          COARSE      COLLET      CONST       COSF        CROSS
          CSINK       CTRLIN      CUTANG      DARK        DASH
          DECR        DEEP        DELTA       DELTAX      DELTAY
          DELTAZ      DIAMTR      DISTF       DITTO       DOTF
          DOTTED      DOWN        DRAG        DRILL       DWELL
          ENDARC      FACE        FEDTO       FINE        FLOOD
          FRONT       GREEN       GRID        HIGH        HOLDER
          IN          INCR        INTENS      INTOF       INVERS
          IPM         IPR         LARGE       LAST        LEFT
          LENGTH      LIGHT       LINCIR      LINEAR      LOCK
          LOW         MAIN        MANUAL      MAXIPM      MAXRPM
          MED         MEDIUM      MILL        MINUS       MIRROR
          MIST        MODIFY      MULTRD      NEGX        NEGY
          NEGZ        NEUTRL      NEXT        NIXIE       NOBACK
          NOMORE      NORMAL      NOW         NOX         NOY
          NOZ         NUMF        OFF         OMIT        ON
          OPTION      ORIENT      OUT         PALLET      PARAB
          PARLEL      PAST        PEN         PERPTO      PLUS
          POSX        POSY        POSZ        QUILL       RADIUS
          RANDOM      RANGE       RAPTO       REAM        REAR
          RED         RETAIN      REV         RIGHT       ROTREF
          RPM         RTHETA      SADDLE      SAME        SCALE
          SCRIBE      SETANG      SETOOL      SFM         SIDE
          SINF        SLOPE       SMALL       SOLID       SPLINE
          SQRTF       START       STEP        TABLE       TANF
          TANTO       TAP         TAPKUL      THETAR      THRU
          TIMES       TO          TPI         TRANSL      TRAV
          TRFORM      TURN        TYPE        UNIT        UP
          XAXIS       XCOORD      XLARGE      XSMALL      XYPLAN
          XYROT       XYVIEW      XYZ         YAXIS       YCOORD
          YLARGE      YSMALL      YZPLAN      YZROT       YZVIEW
          ZAXIS       ZCOORD      ZIGZAG      ZLARGE      ZRAPID
          ZSMALL      ZXPLAN      ZXROT       ZXVIEW
    
    
    












    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   31
    
    
      POSTPROCESSOR MAJOR WORDS
    
          AIR         ARCSLP      ASLOPE      AUXFUN      BREAK
          CAMERA      CHECK       CHUCK       CLAMP       CLEARP
          CLRSRF      COOLNT      COUPLE      CUTCOM      CYCLE
          DEBUGG      DELAY       DISPLY      DRAFT       DRESS
          END         FEDRAT      GOHOME      HEAD        INSERT
          ISTOP       LEADER      LETTER      LINTOL      LOAD
          LOADTL      LPRINT      MACHIN      MAXDPM      MAXVEL
          MCHFIN      MCHTOL      MODE        OPSKIP      OPSTOP
          ORIGIN      OVPLOT      PARTNO      PENDWN      PENUP
          PITCH       PIVOTZ      PLABEL      PLOT        PLUNGE
          POSMAP      POSTN       PPLOT       PPRINT      PREFUN
          RAPID       RESET       RETRCT      REVERS      REWIND
          ROTABL      ROTATE      ROTHED      SAFETY      SELCTL
          SELECT      SEQNO       SET         SLOWDN      SPINDL
          STOP        SWITCH      THREAD      TMARK       TOOLNO
          TRANS       TURRET      UNLOAD      VTLAXS





































    
                  (C) Digital Manufacturing Systems 1985-1990               
    32   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT SYNONYM FEATURE
    
        * SYN/ON
              Invokes the standard synonym table
    
        * SYN/synonym, vocabulary_word,.............
    
                PERSONAL APT STANDARD SYNONYMS
    
     SYN WORD      SYN WORD      SYN WORD      SYN WORD
    
     AA  ATANGL    CE  CENTER    CI  CIRCLE    CO  COOLNT
     FD  FEDRAT    GB  GOBACK    GD  GODLTA    GF  GOFWD
     GL  GOLFT     GR  GORGT     GT  GOTO      IO  INTOF
     IP  INDIRP    IV  INDIRV    LL  PARLEL    LN  LINE
     MX  MATRIX    PL  PLANE     PN  PATERN    PP  PERPTO
     PT  POINT     RA  RADIUS    RP  RAPID     SP  SPINDL
     TT  TANTO     TL  TLLFT     TR  TLRGT     VE  VECTOR
     XL  XLARGE    XS  XSMALL    YL  YLARGE    YS  YSMALL
     ZL  ZLARGE    ZS  ZSMALL
    
    PERSONAL APT INPUT CONTROL
    
        * INPUT/'prompting message', scalar_variable
    
    PERSONAL APT PRINT CONTROL
    
        * PRINT/3, ALL
    
        * PRINT/3, symbol_list
    
                ON
        * PRINT/OFF
    
          PRINT/ON causes the canonical form of each geometric element to be
          printed  immediately  following  the  statement  in  which  it  is
          defined.  PRINT/OFF (default) turns off the printing of  canonical
          form data.
    
    PERSONAL APT PROCESSING CONTROL STATEMENTS
    
        * JUMPTO/slabel
    
        * IF (scalar) slabel1, slabel2, slabel3
    
        * GOSUB/slabel
          RETURN
    
        * READ/2,'filename'
    





    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   33
    
    
    PERSONAL APT MACRO CAPABILITY
    
        * smacro=MACRO/var1, var2= default, var3,..............
          -- some more PERSONAL APT program statements ---
          TERMAC
    
        * CALL/smacro, var1= symbol, var2=.........
    
    PERSONAL APT POCKETING
    
       * POCKET/Re, c, f, F1, F2, F3, q, p, PT1, PT2, PT3,......
    
          The  "q"  parameter  is included for compatibility only and is not
          acted upon by PERSONAL APT.
    
    PERSONAL APT MOTION STATEMENTS
    
               x, y
        * FROM/x, y, z [, ipm_feed_rate]
               spoint
    
               x, y
        * GOTO/x, y, z [, ipm_feed_rate]
               spoint
    
        * GOTO/spattern [,INVERS] [,AVOID,scalar,loc_number,loc_number..] $
                               [[,OMIT,number[,THRU,number]......]
    
                 dz
        * GODLTA/dx, dy, dz [, ipm_feed_rate]
                 svector
    
              TO                               TO
        * GO/[PAST,] d_surf [[[,TO],p_surf] [[,PAST],c_surf]] [,ipm_feed_rate]
              ON                               ON
    
          GOLFT             TO
          GORGT             ON
        * GOFWD /d_surf [[, TANTO], c_surf] [, ipm_feed_rate]
          GOBACK            PAST















    
                  (C) Digital Manufacturing Systems 1985-1990               
    34   PERSONAL APT MINI-MANUAL                                           
    
    
    PERSONAL APT TOOL OFFSET STATEMENTS
    
        * TLLFT
        * TLRGT
        * TLON
        * TLONPS
        * TLOFPS
    
    PERSONAL APT PART SURFACE CONTROL
    
        * AUTOPS
    
               z
        * PSIS/splane
               spoint
    
    PERSONAL APT CUTTER STATEMENTS
    
        * CUTTER/diameter [, corner_radius]
    
    PERSONAL APT DIRECTION INDICATORS
    
                  x, y, z
        * INDIRP/ spoint
    
                  x, y, z
        * INDIRV/ svector
    
    PERSONAL APT TOLERANCE SPECIFICATION
    
        * INTOL/scalar
        * OUTTOL/scalar
        * TOLER/scalar






















    
                  (C) Digital Manufacturing Systems 1985-1990               
                                               PERSONAL APT MINI-MANUAL   35
    
    
                          PERSONAL APT REGISTRATION FORM
    
          Digital Manufacturing Systems                    Ph: 501-925-3666
          P.O. Box 1079
          Rogers, AR   72757
    
           ___I want to become a registered user of PERSONAL APT.  Please
                send me the following:
                 1.) Latest version of PERSONAL APT software.
                 2.) PERSONAL APT REFERENCE GUIDE
                 3.) Sample Mill and Lathe postprocessors (Doc on disk).
                 4.) APTHELP pop-up help windows for PERSONAL APT.
                 5.) PERSONAL APT Postprocessor Writers Guide & Skeleton
                     Postprocessors (including source code) on disk.
                 6.) Subscription to PERSONAL APT NEWS.
    
              I am enclosing the charges computed on the INVOICE form.
          Form of payment: __Cash  __Check  __Money Order  __Visa __Master Card
    
          Card Number:__________________________________ Exp Date:_______
          Print name
           as on card:__________________________ Signature:___________________
    
                 **** ALL PAYMENTS MUST BE MADE IN USA FUNDS ****
    
              NAME:_______________________________ Phone: __________________
    
           COMPANY:_______________________________________ TITLE:___________
    
           ADDRESS:_________________________________________________________
    
           ADDRESS: ________________________________________________________
    
              CITY: ____________________________ STATE:_____ ZIP: __________
    
    
        From where/whom did you learn of PERSONAL APT? _____________________
    
           (Please check all that apply)
         COMPUTER TYPE       MEMORY          DISK TYPE      GRAPHICS HARDWARE
         ___IBM/PC/XT       ___512kb      ___5.25" Floppy   ___IBM CGA
         ___IBM/PC/AT       ___640kb      ___3.5" Floppy    ___IBM EGA
         ___IBM PS-2        ___Ext/Exp    ___Hard Disk      ___IBM VGA
         ___IBM Compatible                                  ___Hercules Mono
         ___Other (Explain)                                 ___Other (Explain)
    
         I (plan to) use PERSONAL APT for: ___Programming NC Machines,
         ___Teaching APT, ___Self Instruction in APT, ___Computations
    
         I program these types of NC Machines: ___2 1/2-3 Axis Mills,
         ___Machining Centers, ___Punch Presses, ___2-Axis Lathes,
         ___4-Axis Lathes, ___Multi-turret Lathes, ___5-Axis Machining Centers
    
         Do you own a Modem or plan to purchase one? ____Yes ____No

    
                  (C) Digital Manufacturing Systems 1985-1990               
    
    
    
























































    
    
    
    
                            *******************************
                                      INVOICE
                            *******************************
    
    
         Purchased from:
            Digital Manufacturing Systems
            P.O. Box 1079
            Rogers, Ar   72757
    
    
         Date: ________________                         Invoice No. 900101
         -----------------------------------------------------------------
                                                 PRICE      PRICE
         QTY  PRODUCT                             EACH      EXTENDED
         -----------------------------------------------------------------
    
         ____ PERSONAL APT Registration fee and   $49      $___________
                           Distribution kit
         ____ MASTER MILL POSTPROCESSOR           $49      $___________
                          Registration fee
         ____ MASTER LATHE POSTPROCESSOR          $49      $___________
                          Registration fee
         ____ PERSONAL APT HIGH RESOLUTION        $49      $___________
              GRAPHICS    Registration fee
         ____ NUMERICAL CONTROL PART PROGRAMMING  $29      $___________
                Text book by James J. Childs
    
         5% State Sales Tax (Arkansas residents only)      $___________
    
         ____ S & H charges for shipment outside the       $___________
                 USA -- $15 for first item.  $4 each
                 for additional items.
                                                TOTAL:     $___________
    
    
    
         Please make checks and money orders payable to:
                           DIGITAL MANUFACTURING SYSTEMS
    
                ALL PAYMENTS MUST BE MADE IN USA FUNDS
    
    
                You may retain this invoice for your records.
    
    










    

```
{% endraw %}

## REGISTER.TXT

{% raw %}
```

                      PERSONAL APT REGISTRATION FORM

      Digital Manufacturing Systems                    Ph: 501-925-3666
      P.O. Box 1079                                   BBS: 501-273-9257
      Rogers, AR   72757

       ___I want to become a registered user of PERSONAL APT.  Please
            rush me the following:
             1.) Latest version of PERSONAL APT software.
             2.) PERSONAL APT REFERENCE GUIDE
             3.) Sample Mill and Lathe postprocessors (Doc on disk).
             4.) APTHELP pop-up help windows for PERSONAL APT.
             5.) PERSONAL APT Postprocessor Writers Guide & Skeleton
                 Postprocessors (including source code) on disk.
             6.) Subscription to PERSONAL APT NEWS.

          I am enclosing the charges computed on the INVOICE form.
      Form of payment: __Cash  __Check  __Money Order  __Visa __Master Card

      Card Number:__________________________________ Exp Date:_______
      Print name
       as on card:__________________________ Signature:___________________

             **** ALL PAYMENTS MUST BE MADE IN USA FUNDS ****

          NAME:_______________________________ Phone: __________________

       COMPANY:_______________________________________ TITLE:___________

       ADDRESS:_________________________________________________________

       ADDRESS: ________________________________________________________

          CITY: ____________________________ STATE:_____ ZIP: __________


    From where/whom did you learn of PERSONAL APT? _____________________

       (Please check all that apply)
     COMPUTER TYPE       MEMORY          DISK TYPE      GRAPHICS HARDWARE
     ___IBM/PC/XT       ___512kb      ___5.25" Floppy   ___IBM CGA
     ___IBM/PC/AT       ___640kb      ___3.5" Floppy    ___IBM EGA
     ___IBM PS-2        ___Ext/Exp    ___Hard Disk      ___IBM VGA
     ___IBM Compatible                                  ___Hercules Mono
     ___Other (Explain)                                 ___Other (Explain)

     I (plan to) use PERSONAL APT for: ___Programming NC Machines,
     ___Teaching APT, ___Self Instruction in APT, ___Computations

     I program these types of NC Machines: ___2 1/2-3 Axis Mills,
     ___Machining Centers, ___Punch Presses, ___2-Axis Lathes,
     ___4-Axis Lathes, ___Multi-turret Lathes, ___5-Axis Machining Centers

     Do you own a Modem or plan to purchase one? ____Yes ____No











                  NUMERICAL CONTROL PART PROGRAMMING
    
    Author: James J. Childs
    Publisher: Industrial Press
    350+ Pages -- Fully Illustrated
    Price: $29.00
    
    Numerical  Control  Part  Programming  explains  NC/CNC   part
    programming from the  general concepts  to actual  programming
    examples.  Examples are presented for both manual and computer
    assisted programming.  A large part of the book is devoted  to
    explaining the  concepts of  APT  part programming  with  many
    examples of actual programming problems.
    
    Numerical Control Part  Programming is  an excellent  textbook
    for a basic NC/CNC programming course. This book has been used
    for a number of years in  many colleges and trade schools  for
    that purpose.  Each chapter  is followed by questions for  the
    reader to determine the  level of comprehension and  exercises
    to reinforce what has been learned.
    
    Digital Manufacturing Systems is pleased to offer this book to
    PERSONAL APT users as  a text that  provides the APT  tutorial
    material not included in the PERSONAL APT REFERENCE GUIDE.
    
    To order, just  specify the number  of books you  need on  the
    Invoice form and enclose $29.00 (plus applicable sales tax) in
    cash, check or money order for each book required.
   



                        *******************************
                                  INVOICE
                        *******************************


     Purchased from:
        Digital Manufacturing Systems
        P.O. Box 1079
        Rogers, Ar   72757


     Date: ________________                         Invoice No. 900901
     -----------------------------------------------------------------
                                             PRICE      PRICE
     QTY  PRODUCT                             EACH      EXTENDED
     -----------------------------------------------------------------

     ____ PERSONAL APT Registration fee and   $49      $___________
                       Distribution kit
     ____ MASTER MILL POSTPROCESSOR           $49      $___________
                      Registration fee
     ____ MASTER LATHE POSTPROCESSOR          $49      $___________
                      Registration fee
     ____ PERSONAL APT HIGH RESOLUTION        $49      $___________
          GRAPHICS    Registration fee
     ____ NUMERICAL CONTROL PART PROGRAMMING  $29      $___________
            Text book by James J. Childs

     5% State Sales Tax (Arkansas residents only)      $___________


          S & H charges for shipment outside the       $___________
             USA -- $15 for first item, $4 each
             for additional items.

                                            TOTAL:     $___________



     Please make checks and money orders payable to:
                       DIGITAL MANUFACTURING SYSTEMS

            ALL PAYMENTS MUST BE MADE IN USA FUNDS
            ALL CHECKS MUST BE DRAWN ON USA BANKS


            You may retain this invoice for your records.










```
{% endraw %}

## SCHOOLS.TXT

{% raw %}
```









                                                    January 3, 1989
                                               Rev:February 6, 1989
                                               Rev:   March 1, 1989



           PERSONAL APT DISCOUNT POLICY FOR INSTRUCTOR/STUDENT USE


          Reflecting the desire of  Digital Manufacturing Systems to
          support  and  promote  the  expansion  of  NC  programming
          knowledge,  we  are  pleased  to  announce  the  following
          discount policy for Instructors and Students.

          When  a  single  order  for  five  (5)  or  more copies of
          PERSONAL APT are ordered for Instructor/Student use, by an
          accepted school or training program, registration packages
          will be provided for the Instructor/Student Discount price
          of $15 per package.

          Following  are   the  terms   of  qualification   for  the
          Instructor/Student Discount:

              1. The order must be received on official school forms
                 (PO's, letterhead, etc.) and signed by a school
                 official (Instructor, Administrator, etc.).

              2. A PERSONAL APT Registration form must be completed
                 for each Instructor/Student.

          Digital   Manufacturing   Systems   further   grants   the
          Instructor or Student the  right to install the officially
          registered copy  of PERSONAL  APT on  a classroom computer
          for his/her personal use during the duration of the class.

          In  addition  to   the  above,  under   this  policy,  the
          registered  Instructor/Student  user  will  have  the same
          rights and privileges  as any registered  user of PERSONAL
          APT.

          Any questions regarding this policy should be directed to:

                        Robert G. Drewry
                        Digital Manufacturing Systems
                        P.O. Box 1079
                        Rogers, AR   72757
                        Ph: 501-925-3666











```
{% endraw %}

## WHATSNEW.TXT

{% raw %}
```
              WHATS NEW IN PERSONAL APT V1.5

* Added the CANF(sname, element_number) function.  CANF is 
used to extract one of the scalar values from the 
canonical form of a defined element.  CANF is generally 
easier to use than the OBTAIN statement for extracting 
such scalar values.  Also, the CANF function may be used 
in a computation expression the same as any other 
function.  For example;

          P1= POINT/ CANF(PX, 1), CANF(PY,2), 0

In the preceding example, P1 is defined as having the same 
X value as PX and the same Y value as PY.


* Also, added the following functions for extracting 
scalar values from the canonical form of defined elements.

          XVALF ---- For Points and Circles
                 scalar= XVALF([point-circle])
          YVALF ---- For Points and Circles
                 scalar= YVALF([point-circle])
          ZVALF ---- For Points
                 scalar= ZVALF(point)
          RVALF ---- For Circles
                 scalar= RVALF(circle)
          IVALF ---- For Lines, Planes and Vectors
                 scalar= IVALF([line-plane-vector])
          JVALF ---- For Lines, Planes and Vectors
                 scalar= JVALF([line-plane-vector])
          KVALF ---- For Lines, Planes and Vectors
                 scalar= KVALF([line-plane-vector])
          DVALF ---- For Lines and Planes
                 scalar= DVALF([line-plane])
          ANGLF ---- For Lines
                 scalar= ANGLF(line)
          ANGLF ---- For angle of point on a circle
                 scalar= ANGLF(circle, point)
          ROTF  ---- For Planes (XY Angle of the normal  
                     vector, which will point in the  
                     direction of the highest             
                     elevation of the plane)
                 scalar= ROTF(plane)
          TILTF ---- For Planes (Angle plane makes with XY  
                     plane)
                 scalar= TILTF(plane)
          LNTHF ---- For Vectors
                 scalar= LNTHF(vector)
          DMSF  ---- Convert degrees, minutes & seconds to  
                     decimal.
                 scalar= DMSF(degrees, minutes, seconds)


             WHATS NEW IN PERSONAL APT V1.50        PAGE 2

* Added two new point definition formats;

        P1=POINT/ spoint, DELTA, svector
        P2=POINT/CLDATA

* Added options to the Configuration Menu to avoid 
deleting the *.LST and *.CLF files

* Increased the number of MACROs allowable in one program 
to 32.  Increased the total number of MACRO variables 
allowed in one program to 128.

* Added the the ability to use planes as drive and check 
surfaces.

* Added the ability to use the cursor keys to select a 
part program file name from the displayed list for the 
LOAD command.  The first 300 file names in the directory, 
with the APT extension, will be sorted in alphabetical 
order and displayed in a frame to the right of the screen.  
The Up/Dn cursor keys may be used to highlight one of 
these file names.  When the correct file name is high
lighted, press the ENTER key.  Of course, you may still 
type the file name as before.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1722

     Volume in drive A has no label
     Directory of A:\

    BARREL   APT      1225   9-01-90  12:00p
    DEFTEST  APT      4283   9-01-90  12:00p
    PERAPT_H COM     19042   9-01-90  12:00p
    LATHEXMP APT      1688   9-01-90  12:00p
    MILLEXMP APT      1740   9-01-90  12:00p
    PERAPT   EXE    224833   9-01-90  12:00p
    PRINTDOC BAT        42   9-01-90  12:00p
    README            6458   9-01-90  12:00p
    SCHOOLS  TXT      2142   9-01-90  12:00p
    INVOICE  TXT      1787   9-01-90  12:00p
    FILES    TXT       955   9-01-90  12:00p
    REGISTER TXT      5656   9-01-90  12:00p
    PERAPT   DOC     76547   9-01-90  12:00p
    WHATSNEW TXT      3197   9-05-90   3:31p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1035   1-01-80   2:16a
           16 file(s)     350668 bytes
                            2048 bytes free
