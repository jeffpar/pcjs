---
layout: page
title: "PC-SIG Diskette Library (Disk #1838)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1838/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1838"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EZ-FORMS FIRST"

    Take advantage of professional forms created with the popular EZ Forms
    form generator. Included in EZ FORMS FIRST are 13 standard business
    forms that you can customize with your own business data. These forms
    will help you track expenses, invoice labor, take a sales order, plan a
    meeting, bill a customer, keep track of appointments and more.
    
    EZ FORMS FIRST is not a custom form generator such as EZ Forms or EZ
    Forms Lite. Instead, the job of creating the forms has been done for
    you. You can jump right into customizing these forms with your own
    data. Print these forms and use them as masters to be filled out in
    ink, or fill in the forms on your computer and keep each as a computer
    record. And if you find these forms useful, an additional registration
    fee buys 50+ more business forms.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZFF.DOC

{% raw %}
```
















                             **********************
                             *                    *
                             *  E Z - F O R M S   *
                             *                    *
                             *     F I R S T      *
                             **********************


                                Reference Manual

                            TEST DRIVE  Version 1.1


                                 August 1990






                  (c) 1985-1990,          EZX Publishing
                  All rights reserved.    P.O. Box 58177
                                          Webster, TX 77598 USA
                                          713/280-9900
                                          FAX: 713/280-0525







          CREATE / REVISE / FILL-IN / FILE / PRINT ALL KINDS OF FORMS.

           WORD PROCESSING FEATURES AND PROTECTED FIELDS MAKE IT EASY!


        EZ-Forms First, EZ-Forms Lite, and EZ-Forms Executive are
        trademarks of EZX Publishing.



             If you use this TEST DRIVE version of EZ-FORMS FIRST
            for more than a 10-15 day evaluation, you are exptected
                 to regi$ter it. See below for pricing, etc.








        EZ-Forms First v1.1        USERS GUIDE                Page 2


                        REGISTRATION, PREFACE, DISCLAIMER

        EZ-FORMS FIRST (trademark of EZX Corporation) is published by:   EZX
        Publishing,  P.O.  BOX 58177,  Webster,  Texas  77598  U.S.A.  (713)
        280-9900.   Published  and printed in the United States of  America.
        (c)  Copyright 1984,85,86,87,88,89,90 by EZX Corporation.
        All domestic and international rights reserved.

        This TestDrive of EZ-FORMS FIRST is being distributed as  "shareware".
        That is,  try it before you register it.  Basic registration is $39
        plus shipping and handling. Subject to change without notice.
        See end of document. s/h is $6 USA-48, $12 AK/HI/PR/VI/Cda, $22 fgn.
        For   additional  registration information and a  registration  form
        (REGISTER.FRM), consult the program (EZFF.COM).

        A   printed  copy  of  this  reference  manual  cannot  be   copied,
        reproduced,   transmitted  (e.g.  FAX)  or transferred in any  form,
        electronic or otherwise,  except with the expressed written  consent
        of EZX Corporation.

        EZX  hereby grants basic or advanced registered users a limited  use
        license for this copy of EZ-FORMS FIRST.    You man use the  program
        on  your  computer and share complete copies (with all  distribution
        files)  of this program with anyone you wish as long as the  purpose
        is  to encourage registration of the program.   The program must  be
        shared  in  its  complete  form.    Archiving  or  compression   for
        distribution or BBS convenience is allowed.

        You  may  not sell copies of EZ-FORMS  FIRST.   Bonafide  "Shareware
        libraries"  may distribute this version of EZ-FORMS FIRST as long as
        a duplication fee of no more than $10 is charged and it is clear  to
        the  purchaser  that no support or registration is included for  the
        duplication fee.  Note that each copy of EZ-FORMS FIRST has a unique
        embedded serial number for traceability.

        EZ-FORMS,  EZ-FORMS FIRST,  EZ-FORMS LITE,  EZ-FORMS EXECUTIVE,  EZ-
        DATABASE, EZ-SPREADSHEET, EZ-COPY LITE, EZ-COPY PLUS, EZ-CRYPT LITE,
        EZX-WRITE,  EZ-WORD,  EZX-BASE, EZX-TALK, EZ-DISK ADMIRAL, MENU-EZX,
        are  trademarks  belonging  to  EZX  Corporation  with  all   rights
        reserved.   Any  other  trademarks  belonging to others  are  hereby
        acknowledged.

        Pricing,  specifications,  and  conditions  are  subject  to  change
        without notice.    Send inquiries for site (multiple CPU or network)
        licensing to EZX Publishing at the above address or number.

        Disclaimer:
        EZX  Corporation (dba EZX Publishing) makes NO claims AND offers  NO
        warranties  of  any sort for EZ-FORMS FIRST.  This program  and  any
        utilities/forms included are not warranted as to merchantability  or
        fitness for their ultimate use. User has full responsibility for
        this suitability determination.  EZX Corporation assumes NO
        responsibility  for  any sort of damage resulting from the apparent
        or actual use of EZ-FORMS  FIRST (mental or physical).   Use
        indicates acceptance  of these and above terms.








        EZ-Forms First v1.1        USERS GUIDE                Page 3


                                TABLE OF CONTENTS                  PAGE
                                -----------------                 ------

        1.0  INTRODUCTION                                            4

        2.0  GENERAL INFORMATION                                     4

             2.1  Installation of EZ-Forms                           5

        3.0  USING EZ-FORMS FIRST                                    6

             3.1  EZ-Forms Main menu                                 7
             3.2  Suggestions/example usage                          8
             3.3  EZ-Forms Second Level Menus                       10
                  3.3.1  Print Menu                                 10
                  3.3.2  Utilities Menu                             11
             3.4  Setting up fields                                 12
             3.5  Key descriptions                                  13
             3.6  Printing                                          16
                  3.6.1 General                                     16
                  3.6.2 EpsGraph (also see 3.3.1)                   18
                  3.6.3 HPGraph                                     18
             3.7  Notes on EZ-Forms                                 18
             3.8  Information on included forms                     20

        4.0  USING FFINSTAL                                         21

             4.1  FFInstal Main menu                                21
             4.2  Example usage                                     22
             4.3  Second level menus                                23
                  4.3.1  Define colors                              24
                  4.3.2  Printer options                            25
                  4.3.3  Editor options                             26
                  4.3.4  Misc. options                              28
                  4.3.5  Status of options                          29

             APPENDIX A   Printer Selection Menu                    30

             REGISTRATION CERTIFICATE                               31






















        EZ-Forms First v1.1        USERS GUIDE                Page 4


        1.0  INTRODUCTION
        -----------------

        EZ-Forms First (EZ-Forms for short) is a forms manager which lets
        you,  the  user,  generate  master forms tailored to your  unique
        needs.   Version  1.0  of EZ-Forms consists  of  an  installation
        program,   called  FFInstal  and  the  main  program,   EZ-Forms.
        FFInstal,  a  companion program,  lets you customize EZ-Forms  to
        suit your preferences.

        EZ-Forms is a stand-alone program and will work without you  EVER
        having  to specify any defaults unless you want to.   Those of us
        who  have  color  monitors  like to be  able  to  choose  colors,
        FFInstal allows you to choose ALL of the default  colors.   Other
        options  include  support for different printers and  customizing
        the editor (help level, INS/OVR default, and tab distance).


        2.0  GENERAL INFORMATION
        ------------------------

        EZ-Forms  allows  you  to create or revise a  master  form  or  a
        completed  (filled out) form.   A master form can be altered only
        when  in the "create or revise a master form" mode.   Master  and
        completed forms can be stored as well as printed.  Once a  master
        form has been created and saved,  you can  recall it an unlimited
        number of times to fill out and then store as a completed form.

        EZ-Forms  supports  IBM (Epson) compatible printers  as  well  as
        several  other  printers,  however  only  Epson,  Prowriter,  and
        certain other printers can take advantage of the compressed  mode
        used by EZ-Forms for printing out larger forms.

        EZ-Forms  requires an IBM PC or IBM PC compatible with  at  least
        256K  of RAM (only 192K of this is needed by  EZ-Forms).   Direct
        screen  memory  access  is  used to  provide  high  speed  screen
        updates.  This may make EZ-Forms unusable on some "not too close"
        IBM  PC  compatibles.   If after loading EZ-Forms,  you see  only
        text,  no borders,  then you have a compatibility problem.    IBM
        monochrome,  color,  and  enhanced graphics adaptors are known to
        work with EZ-Forms.   If you are using an IBM color graphics card
        with a "green screen" then you must use the DOS MODE command that
        is on your DOS diskette to default to black and white (type  MODE
        BW80 and then run EZ-Forms).   If you are using a serial printer,
        then use the DOS MODE command to route the serial printer to LPT1
        (see your DOS manual for details).

        EZ-Forms  has  grown so large that it now uses a second  file  to
        hold  additional commands.   This file is called an overlay  file
        and is named EZFF.000.   Please ensure that it is on the  default
        drive when you run EZ-Forms.   To check for EZFF.000, use the DOS
        command  DIR <Enter>.   All the names of the files on your  drive
        will  be  listed on the screen.   EZFF.000 MUST remain  available
        during the entire time you are running EZ-Forms. Sections of this
        file  are  brought  into the computer's memory for  some  of  the

        NOTE: For the TestDrive, EZFF.COM is EZFF-TD.COM
        ^^^^                                 ^^^^^^^^^^^





        EZ-Forms First v1.1        USERS GUIDE                Page 5


        commands  in EZ-Forms.  This is one of the penalties for  a  more
        powerful program.  EZ-Forms "knows" where to find EZFF.000 (drive
        and directory), so you still can change drives and directories.


        2.1  INSTALLATION OF EZ-FORMS:
        ------------------------------

        Your  package should contain a diskette labeled  EZ-Forms  First.
        MAKE  A  BACKUP  COPY  of this diskette using  the  DOS  DISKCOPY
        command.   Store  the original in a safe place.   See the license
        notice on page 2 for limitations on distribution.   Remember that
        your   registration  number  is  embedded  in  the  program   for
        traceability.

        Note: <cr> = Enter = Return

        Diskette System:
        ----------------
        Make sure you have DOS (Disk Operating System) loaded and are  at
        the  A>  prompt.  Copy  all of the files  from  the  distribution
        diskette  to a formatted diskette (with SYSTEM files and your own
        AUTOEXEC.BAT  if  you want to boot your PC from  this  diskette).
        See  your  Disk  Operating System manual or  contact  your  local
        computer "guru" for details on DOS.   You may want to delete some
        of  the  forms  to provide additional work  space.   To  run  the
        program, type "EZFF" <cr>.  ("EZFF-TD" for the TestDrive version.

        Hard Disk System (DOS already loaded at the C>):
        ------------------------------------------------
        First, create a subdirectory called "EZFF".  eg, at the prompt C>
        type  MD\EZFF <cr>.  Copy all of the files from the  distribution
        diskette to this subdirectory.

        That is, put the distribution diskette into drive A and type:

        COPY A:*.* C:\EZFF <cr> 


        Make sure you log to the C:\EZFF subdirectory:
        At C> type, CD \EZFF <cr>

        You can then run FFInstal.COM,  GO.BAT,  or EZFF.COM as explained
        above (i.e.,  type  EZFF <cr>).  Run EpsGraph.EXE before EZFF.COM
        if applicable (see section 3.6.2 for details).


















        EZ-Forms First v1.1        USERS GUIDE                Page 6



        3.0 USING EZ-FORMS FIRST
        ------------------------

        Everything has a beginning.  The ballerina begins by sticking her
        foot  into her slipper,  the college professor by finding his box
        of multicolored chalk,  and you'll begin by loading DOS into your
        computer.  If you are an experienced computer user then type EZFF
        and skip to the description of the menu items.

        However,  if  you're not a long time PC user you may need to take
        it slowly.  So after loading DOS, insert your work diskette, type
        EZFF and press enter.   If you have a hard drive see section 2.1.
        At this point, some nice to know information will come up.

        Basically,  if  you are this far along,  your computer has enough
        memory to run EZ-Forms.  Press any key to continue.


        3.1  EZ-FORMS MAIN MENU
        -----------------------

                    -----------[*** EZ-FORMS ***]------------
                    |                                       |
                    |                                       |
                    |    <1> Create/Revise Master Form      |
                    |    <2> Complete a Master Form         |
                    |                                       |
                    |    <3> Revise Completed Form          |
                    |    <4> Print Form                     |
                    |                                       |
                    |    <5> Utilities                      |
                    |    <6> General Information            |
                    |                                       |
                    |    <7> Exit to DOS                    |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    |                                       |
                    |                                       |
                    -----------------------------------------


        The Main Menu options with descriptions are below.

        1.  Create/Revise Master Form:   This option allows you to create
            a  new  master  form  or revise an  existing  one.   You  can
            designate  the  form  size (maximum size is 86 lines  by  130
            columns),  add  (or delete) a border and draw  horizontal  or
            vertical lines.  The cursor control keys are enabled,  so you
            can "walk around" a newly created form.












        EZ-Forms First v1.1        USERS GUIDE                Page 7


        2.  Complete a Master Form:   With this option, you can retrieve,
            and  complete  a copy of a master form.  Text  added  to  the
            original  master form can be manipulated.  However,  any text
            which is part of the master form can't be changed.

        3.  Revise Completed Form:   Here you can recall a completed form
            for revision.   This option is the same as option two, except
            that  you're  not starting with a "clean  slate"  master
            form.  You have complete freedom to revise any portion of the
            form except for the master form outline and text.

        4.  Print  a  Form:   This option gives you full  access  to  the
            computer  directories and drives to allow you flexibility  in
            searching  out  and printing forms.  If you have an Epson  or
            Epson  compatible,   then  you  can  take  advantage  of  the
            solid lines and compressed print format for larger forms.

        5.  Utilities:   This  section lets advanced users really  "play"
            with  EZ-Forms.   You  will be able to  manipulate  forms  --
            erase,  copy,  and even rename forms.

        6.  General Information:   For those of you who will just have to
            run  EZ-Forms  before reading the documentation,  here  is  a
            short overview.

        7. Exit to DOS:  All good things must come to an end. Choose this
           option if you want to leave EZ-Forms and return to DOS.


        3.2  SUGGESTIONS/EXAMPLE USAGE
        ------------------------------

        STEPS FOR EXAMPLE:  Creating a master form named TEMP.

        1.  Bring up EZ-Forms. (i.e. Run it.)

        NOTE:  You  must  be  in DOS with EZFF.COM and  EZFF.000  in  the
               active  drive  or have it on your hard disk in the  active
               directory.  Type EZFF, then press enter.

        2.  Press any key to go from the EZ-Forms logo to the Main Menu.

        3.  Select  1  for Create/Revise  Master Form.   The screen  will
            clear  and  you  will  be presented with a menu  of  all  the
            existing master forms.

        4.  Press  enter  to signal that you are ready to select a  form.
            Type   TEMP  and press enter.   A menu will appear asking you
            to define the form size.

        5.  Select 3 for a 40 line by 80 column form.  You are now in the
            edit mode for a master form.

        6.  Press  F7.   A  border  will appear around the  entire  form.
            Notice that the bottom of the form is missing.   We are  only








        EZ-Forms First v1.1        USERS GUIDE                Page 8


            looking at the 1st 24 lines of a 40 line form.

        7.  Press PgDn.  The rest of the form will now appear.

        8.  Press  F5 for a line.   Move  the cursor to the right side of
            the form by pressing Ctrl and the keypad right arrow.   Press
            F5 again.  We have just drawn a horizontal line on line 17 of
            our form.  Don't worry  about  the  "-" in column  1  of  the
            form  overwriting  part  of  the border.   Just press F7 once
            more to restore the border.

        9.  Be  creative.  Walk around on the form and type in text, make
            vertical lines, or anything you desire.  Refer to this manual
            or press F1 (Help) for more information on the key functions.
            Refer to section  3.4  (Setting up fields) for information on
            how to add fields to the form.  Don't forget to press any key
            to resume editing.

        10. For  some boxes in the form,  hold down the Alt key and press
            one  of the keys between F1 and F10 or Ctrl  F1.   This  will
            allow you to insert graphic characters into the  text.   This
            allows you to make intersecting lines.

        11. Press F10 (Exit).  We are ready to save our masterpiece.

        12. Select  6 (Save and Exit).  When asked for the file name type
            TEMP and press enter.  TEMP will now be saved.

        13. Select  2 (Complete a Master Form).   A  directory of  master
            forms will be displayed.  Press enter, type TEMP,  and  press
            enter again.

        14. You  are now in the "complete a form" mode.   Walk around  on
            the  screen and  "fill out"  the form you generated  earlier.
            Notice  how the master form itself is protected from erasure.

        15. Press F10 (Exit).  We have now completed a master form.

        16. Select 6 (Save and Exit).   When asked for the file name type
            TEMP01  and  press  enter.   We  have just  saved  our  first
            completed form (notice the 01 we added after TEMP in the file
            name, this allows easy reference later).

        17. We  are now back at the Main Menu.   From here you can  print
            TEMP or call it in for further revision.

        18. When you are done, press 7 (Exit to DOS).
















        EZ-Forms First v1.1        USERS GUIDE                Page 9


        NOTE:  EZ-Forms can import normal ASCII text files into any form.
               This  area  of  the EZ-Forms should be  reserved  for  the
               expert  user.

        You  can  import ASCII text files produced by  wordprocessors  or
        even the forms from some of the commercial forms packages.  Steps
        for importing text files are listed below.

        1.  Ensure  the  text file to be imported is in ASCII format.

        2.  Create  a new master form using option 1 from the main  menu.
            A  good size is number 1 -- 84 lines by 130 columns,  you can
            always use F2 later to resize the form.

        3.  Move  the  cursor  to line 2,  column 2 allowing room  for  a
            border you may want to add later.

        4.  Press  CtrlK  R  to  read in a file  at  the  current  cursor
            position.   You  will be given the option to start at a  line
            other  than  the beginning of the file.   Next  type  in  the
            complete  file  name you want to import (read in)  and  press
            enter.   You  will need to enter an offset starting line  the
            next time you use CtrlK R to read the rest of the file.

        5.  When  asked if you want to convert high ASCII  characters  to
            spaces,  answer  Y.   What  this means is the  EZ-Forms  will
            convert  some  of  the  "strange"  (ASCII  1-31 and  127-255)
            characters to spaces.

        6.  Resize form as necessary.  Insert field markers as needed.

        7.  Use F7 to draw a border around the form.

        8.  Press  F10 when finished.   Repeat the above steps until  you
            have  all  the pages in the text file converted  to  separate
            master forms.



























        EZ-Forms First v1.1        USERS GUIDE                Page 10


        3.3  EZ-FORMS SECOND LEVEL MENUS
        --------------------------------

        The  following  menus can only be reached by selecting an  option
        from  a  earlier  menu.   From the main menu - options  4  and  5
        present  you  with  the  second  level  menus  for  printing  and
        utilities.  These menus are described below.

        3.3.1 PRINT MENU
        ----------------

                    ----------[*** PRINT MENU ***]-----------
                    |                                       |
                    |                                       |
                    |    <1> Print Master Form              |
                    |    <2> Print Completed Form           |
                    |                                       |
                    |    <3> Change logged drive            |
                    |    <4> Change Directory               |
                    |                                       |
                    |    <5> Return -- I'm Done!            |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    -----------------------------------------

        From  the print menu you can select either a master or  completed
        form for printing.   If the form you want to print is on  another
        drive  or directory then you can use options 3 or 4 to get to the
        form  and  then  print it or specify a drive  as  the  first  two
        characters (example --> A:myform).

        For  notes  on  how to do the printing and  what  capability  the
        different printers have please refer to section 3.6 PRINTING.

        If you have an Epson or "Epson Code Compatible" printer, EZ-Forms
        installed  for  use with EpsGraph,  and EpsGraph loaded  then  an
        additional menu will come up at this point allowing you to choose
        print  quality.  To  load EpsGraph,  copy EpsGraph.EXE  from  the
        original  diskette  to your current drive  and  directory.   Type
        EpsGraph and press enter.   Within EZ-Forms you will now be  able
        to choose a quick draft,  medium quality with solid lines,  or go
        for  high  quality  with everything in solid  bold  lines.   This
        really  produces  a  nice  form on  the  Epson  series  printers.
        Printers that can use EpsGraph include Epson,  Gemini  Star,  IBM
        Graphics,  Panasonic,  and  many  others.   You  can  even  print
        compressed forms with completely solid lines!

        If  you have a HP LaserJet compatible printer you must load
        HPGraph prior to running the program if you want solid lines,
        etc. Read HPGRAPH.DOC for more details on this.  You must also
        use FFInstall to install the Extended ASCII printer option (type O).
        If you select printer type "HP LaserJet compatible with Y cartridge"
        (type E), and use HPGraph, you will be able to get 66 lines on a
        8.5" by 11 inch piece of paper. We compress the line spacing
        slightly to do this. IF you must have true 6 lpi, select the
        Extended ASCII (type O) printer option. Then you will have to watch
        out for the fact that some HP LaseJets and compatibles will only
        print 60 or 62 lines per 11" long page. You may have to experiment,
        or you will experience "page creep".



        EZ-Forms First v1.1        USERS GUIDE                Page 11


        HPGraph is a memory resident program that will  convert  the
        Extended ASCII line drawing  characters  into graphic codes that
        your HP LaserJet/compatible can understand.  HPGraph supports only
        10 characters per inch horizontally, and 6 (6.4 slightly compressed
        if printer type "E" or something like "LASER66.COM" is used)
        vertically.  Landscape printing is not supported.  See HPGraph.DOC
        for more details.


        3.3.2 UTILITIES MENU
        --------------------

                    --------[*** UTILITIES MENU ***]---------
                    |                                       |
                    |                                       |
                    |    <1> Erase a Form                   |
                    |    <2> Copy a Form                    |
                    |                                       |
                    |    <3> Rename a Form                  |
                    |    <4> Display Directory              |
                    |                                       |
                    |    <5> Check Free Disk Space          |
                    |    <6> Change Directory               |
                    |                                       |
                    |    <7> Change Default Drive           |
                    |    <8> Return to Main Menu            |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    |                                       |
                    |                                       |
                    -----------------------------------------

        From the utilities menu you can erase,  copy,  or rename a master
        or completed form.  Option 4 on this menu will display ALL files,
        not  just  those  related to EZ-Forms.   If you  are  using  this
        section it is assumed that you are fairly familiar with your PC's
        operation.

        Please  note that you cannot use option 3 to rename a form to its
        current  name  or  use option 5 to check free disk space  on  any
        drive other than the default drive.

        WARNING:  EZ-Forms consists of EZFF.COM and EZFF.000, the overlay
                  file.    You   MUST   leave   EZFF.000  in   the   same
                  directory/drive  you started EZ-Forms in,  even if  you
                  use  option 6 or 7 above.   Example:   Do NOT bring EZ-
                  Forms up on drive A, use option 7 to switch to drive B,
                  and  then remove the diskette from drive  A.   EZ-Forms
                  still needs to access EZFF.000 on drive A.  If it isn't
                  found then EZ-Forms will return to DOS!












        EZ-Forms First v1.1        USERS GUIDE                Page 12


        3.4  SETTING UP FIELDS
        ----------------------

        EZ-Forms doesn't support data fields in the normal sense.   Since
        EZ-Forms  is  based around a wordprocessor model instead  a  data
        base model,  a unique method is used to simulate fields. By using
        the  wordprocessing  approach  EZ-Forms  gains a  great  deal  of
        flexibility.  This works by your setting up the master form  such
        that only blank areas in the form are where you want the "fields"
        to be.   In the completed form the tab key will then allow you to
        move to the next unprotected area.

        Two methods are provided to allow easy field set up.

        1.  If  you  have a master form that has very few areas that  you
            want  to write in,  then use F3 to fill the entire form  with
            field  markers  '~' (tilde).  Then just walk around with  the
            cursor and clear out the area you want to be able to fill  in
            for  the completed form.   The space bar works well for this.
            Or you may want to use CtrlK E to erase field markers from  a
            section after marking it as a block.   A field marker, tilde,
            can  be entered from the keyboard simply by pressing that key
            for small touchups.

        2.  To selectively protect a section of the master form,  use the
            block  functions  (CtrlK  plus I) to selectively  insert  the
            field markers.  You can follow this up with the CtrlK E after
            marking a block to selectively erase field markers.

        Don't worry about the field markers from the master form  showing
        up  in  the completed form.   Field markers from the master  form
        will remain invisible.  They are used only to keep track of  what
        is protected.   Also the field markers will not show up when  you
        print the form.   Converting field markers to spaces is automatic
        when you export a block from a form.

        When you are completing a master form,  use insert field  markers
        (F3)  to show the unprotected parts.  The field markers will show
        up  in  the unprotected text color,  highlighting where the  main
        form is unprotected.   These tildes will show you where you  can
        type.   They will appear in the same text color as any other text
        you  type  in but won't print or have any affect on anything  you
        are doing.

        Setting  up fields isn't really that hard.   All you are doing is
        limiting  the unprotected areas to where you REALLY want to type.
        EZ-Forms  then  tabs between these areas in the  completed  form.
        Don't forget that shift+Tab takes you backwards thru the fields.















        EZ-Forms First v1.1        USERS GUIDE                Page 13


        3.5  KEY DESCRIPTIONS
        ---------------------

        Generating a master form consists of determining form dimensions,
        drawing lines, and adding appropriate text.  EZ-Forms defines the
        numeric keypad keys, the keyboard keys, and function keys to make
        this task easy.

        KEYPAD  KEYS:  With the exception of the insert and delete  keys,
                       all keypad keys are non-destructive,  that is, the
                       character under the cursor is not changed.

        FUNCTION KEYS: These  keys perform different functions  depending
                       on  whether you are working on a master form or  a
                       completed form.

        FUNCTION KEYS ARE            NUMERIC KEY PAD CURSOR MOVEMENT KEYS

        F1    HELP                   Up Arrow          ONE LINE UP
        F2    RESIZE FORM            Down Arrow        ONE LINE DOWN
        F3    INSERT FIELD MARKERS   Right Arrow       ONE COLUMN RIGHT
        F4    REMOVE FIELD MARKERS   Left Arrow        ONE COLUMN LEFT
        F5    DRAW LINE              Ctrl Right Arrow  RIGHT SIDE OF FORM
        F6    ERASE LINE             Ctrl Left Arrow   LEFT SIDE OF FORM
        F7    DRAW BORDER            PpUp              ONE PAGE UP
        F8    ERASE BORDER           PgDn              ONE PAGE DOWN
        F9    CLEAR FORM             Home              UPPER LEFT OF PAGE
        F10   EXIT -- SAVE MENU      End               LOWER LEFT OF PAGE
                                     Ctrl Home         UPPER LEFT OF FORM
        NOTE: F3 and F4 work with    Ctrl End          LOWER LEFT OF FORM
        field markers for ENTIRE     Ctrl PgUp         TOP OF FORM
        form.  Use CtrlK I and E     CTRL PgDn         BOTTOM OF FORM " "
        for sections of a form.

        Alt  F1-F10  and  Ctrl  F1 will allow  you  to  draw  the  border
        characters  at any point within the form.   You may need  to  use
        some  of  these  characters to touch up after  drawing  lines  or
        making a border around the form.

        Notes:

        F3 and F4 work with field markers for the entire form, not just a
        portion (use CtrlK I and E for a portion).   These field  markers
        can  be  inserted  using the tilde from the keyboard  and  erased
        simply by spacing over them.

        For  F5  and F6 position the cursor at the  beginning  point  and
        press the function key once.   Then position cursor at the ending
        point  and press the function key again.   F5 and F6 can be  used
        for either vertical or horizontal line drawing/erasing.













        EZ-Forms First v1.1        USERS GUIDE                Page 14


        KEYBOARD  KEYS:  All  letters  and  numbers are  entered  as  you
                         normally would from the keyboard.  Some keys are
                         special keyboard keys which are a combination of
                         the  control key (or ALT) and another  key.   In
                         these  cases  (for  example  the  control  right
                         arrow),  hold  the control (or ALT) key down and
                         press  the second key (in this case,  the  right
                         arrow key).


        The special keyboard keys are:

             enter/return: move one line down, start of line
             backspace: move cursor one position left along with the rest
                        of the line
             ins: toggle between insert and overwrite for the editor


        CURRENT DATE/TIME FEED           INSERT OR DELETE LINE

        CtrlF + D  FEED DATE             Ctrl Enter   INSERT LINE
        CtrlF + T  FEED TIME             Ctrl Y       DELETE LINE

        NOTE: Must have room on the      NOTE: Insert may cause the last
        line to display full time or     line of the form to be pushed off
        date otherwise only part of      the end.  Also text will be lost
        the time or date will appear.    if you try to write over a
        The system time and date must    protected character. Insert line
        be set correctly for these to    will cause EACH and EVERY line
        return the correct values.       to move down by one. BE CAREFUL!


        AUTO  NUMBERING:  - To  set up auto numbering in the master  form
                          press  CtrlN.   Ensure there is enough space to
                          insert  the number between the cursor  position
                          and the right side of the form.   Each time you
                          complete  it  (Main Menu #2)  the  number  will
                          increment.  If you need to change the number in
                          the   master  form,   start  with  a  different
                          sequence  number  then just type over  the  old
                          number.   The  sequence number MUST be a  valid
                          number  (if you choose a five digit  number  it
                          MUST be between 00000 and 99999)!


        SELECT ASSISTANCE LEVEL  - Use  the Esc key to select help  mode.
                                 All of the block operations and many  of
                                 the  operations  in EZ-Forms  will  give
                                 extra  information and prompt you  prior
                                 to  performing  the  function.   In  the
                                 regular  mode you receive all  messages.
                                 The regular mode is the default.











        EZ-Forms First v1.1        USERS GUIDE                Page 15


        BLOCK TEXT OPERATIONS            BLOCK FILE OPERATIONS

        B  BEGIN BLOCK                   W  WRITE BLOCK TO DISK
        K  END BLOCK                     R  READ BLOCK FROM DISK
        V  MOVE MARKED BLOCK
        C  COPY MARKED BLOCK
        Y  DELETE MARKED BLOCK           BLOCK PRINTER OPERATIONS
        U  UNMARK BLOCK
        I  INSERT FIELD MARKERS          P  PRINT COPY AS IS
        E  ERASE FIELD MARKERS

        NOTE:  Block  operations  consist  of two keystrokes  -- CtrlK  +
               above  key.  CtrlK means while holding down the  Ctrl  key
               press the K key.  Block text and block file operations use
               the marked text area and the current cursor location.

        Examples for block operations:

        In  a  block  move  operation the block will be  moved  from  the
        highlighted  area  to where the cursor was when you  pressed  the
        CtrlK V key combination.   A block consists of at least one  line
        and one column.   The beginning of the block, CtrlK B, must be no
        greater than the end of the block, CtrlK E.

        If the beginning of the block is line 2, column 2 then the end of
        the block must be at LEAST line 2, column 2.  A valid block would
        be from line 2, column 2 to line 3, column 5.




































        EZ-Forms First v1.1        USERS GUIDE                Page 16


        3.6  PRINTING
        -------------

        If  you  don't have a printer,  then you've got  problems.   This
        section  assumes you have no problems (at least not printer  type
        problems).   EZ-Forms supports various dot matrix and daisy wheel
        printers such as type Epson MX,  FX, and RX series, the Prowriter
        dot matrix, and the C.ITOH Starwriter series printers.

        3.6.1  General
        --------------
        EZ-Forms does not require you to define your printer type  before
        you  can print.   A default printer type is assumed which  should
        work  with  any  printer but will not be able to  print  out  the
        larger  forms.   All  you have to do is run the  install  program
        (FFInstal)  and select your printer type from the menu to  enable
        printing out larger forms.  That is, if your printer supports it.

        Note:  If  you have a printer (example MX-100) which  can  handle
               wide  forms  and  want to use compressed print  for  large
               forms  on  narrow (80 column)  paper,  then  select  MX-80
               instead of MX-100.

        Once  you get past the option 4 from the main menu or the CtrlK P
        while in the editing mode, you will see the following menu.

               --------------[*** PRINT OPTIONS ***]--------------
               |                                                 |
               |     <1> Print only master form portion          |
               |     <2> Print only completed form portion       |
               |         (Clear Forms Overlay)                   |
               |     <3> Print all portions of form              |
               |     <4> Print multiple copies                   |
               |     <5> Abort printing                          |
               |     <6> Ready to print -- Do it!                |
               |                                                 |
               | Status: Print all portions of the form.         |
               |         Print 1 copy(ies).                      |
               |                                                 |
               | Press your selection (1-6)?                     |
               |                                                 |
               ---------------------------------------------------

        Options 1&2 - Allows  you to selectively print out only a portion
                    of  the form.   One use for option 2 is if  you  have
                    preprinted  forms,  then  on completed forms you  can
                    print  only the filled in portion on  the  preprinted
                    form (clear forms overlay).

        Option 3    - Allows  you  to  return the printing  mode  to  the
                    default -- print all portions of the form.

        Option 4    - Provides  the capability to print multiple  copies.
                    This  might  come  in handy if you need  to  print  2
                    copies for your records or the customer.








        EZ-Forms First v1.1        USERS GUIDE                Page 17


        Option 5    - Allows you to return to what you were doing without
                    going thru the printing.  This is the OOPS option.

        Once you have everything set up,  option 6 allows you to go ahead
        and print.   Please note that the status section on the menu will
        always  reflect  the portion of the form to be  printed  and  the
        number of copies desired.   Press any key to abort printing.  EZ-
        Forms will then give you a chance to stop printing.

        Here  are some notes to help keep your association with  EZ-Forms
        on a friendly basis.

        1.  Most printers can print 66 lines per page.   Most of the pre-
            defined forms are 64 lines x 80 columns, allowing a couple of
            extra  lines  at the end to compensate for  paper  alignment.
            Adjust your printer so that the first line prints at the VERY
            top of the page.   If you don't,  some of the forms may spill
            over onto the next page.

        2.  Some  printers have micro-justification  (usually  controlled
            by  a switch inside the printer).   Make sure this switch  is
            off before using EZ-Forms (usually this means turning off the
            switch  AND  turning the printer off and back on).   If  your
            printer uses micro-justification then the right border of the
            printed form will NOT line up vertically.

        3.  If you do not have an Epson  compatible,  Prowriter,  Toshiba
            dot matrix printer,  or certain other printers then you can't
            use the compressed print mode.

        4.  FFInstal  will  allow you to describe to EZ-Forms  the  codes
            needed for any printer.   If you use this option to install a
            new  printer  type and would like for it to be  supported  in
            future  versions  of FFInstal then do a print screen  on  the
            printer  code  summary  display.   This  summary  display  is
            available in the custom printer installation area.   Mail the
            printout to us and we will try to include direct support  for
            your printer in the next software update.

        5.  Some  laser printers may require that you save the form to an
            ASCII file via the export provisions in EZ-Forms.  Then after
            proper printer initialization,  you can print the ASCII  file
            from  DOS  with the command:  COPY "filename" PRN (or  LPT1:,
            COM1, ETC.).

        6.  You  may  have  noticed that the HP LaserJet printer  is  now
            supported  by  FFInstal.    Completely  solid  vertical   and
            horizontal  lines are supported (you MUST use font  cartridge
            "Y").   Also  compressed  print  and  88 lines  per  page  is
            supported.   Due to the way the HP LaserJet works,  you  must
            completely  finish  printing one form under  EZ-Forms  before
            printing  another.   Let the machine rest a few seconds until
            the motor turns off.  You will then be able to print  another
            form.  If you see error 22 (printer buffer overflow) flash on
            the LaserJet display then you need to press a key to stop EZ-








        EZ-Forms First v1.1        USERS GUIDE                Page 18


            Forms from printing, take the printer off line, and do a form
            feed.   This  will  allow  you  to get your  printer  set  up
            correctly to begin printing another form.

        7.  Sideways  printing.   Sideways  3.0 by  Funk  Software,  Inc.
            supports  sideways printing of text containing the  character
            graphics  symbols like those used in the EZ-Forms forms.   If
            you  have a wide form and want to print it out sideways  then
            continue  reading.   You must export a form before it can  be
            printed under Sideways.  To do this:

            a.  Call up a form under option 1, 2, or 3 from the main EZ-
                Forms menu.
            b.  Press CtrlK W.
            c.  Answer yes to mark the entire form for export.
            d.  Do NOT translate the border characters, we want them left
                as character graphics, not translated to : and -.
            e.  Specify a temporary file name (example: temp).
            f.  Exit EZ-Forms and call up Sideways.
            g.  Tell  it to print your exported file,  NOT the  EZ-Forms
                form.
            h.  Using normal sized print,  you should be able to print  a
                form  130  columns by 53 lines on a  single  page.   Good
                luck.

        3.6.2 EpsGraph
        --------------
        EZ-Forms   now comes with a special program,  EpsGraph,  for  the
        Epson series printers.  Use FFInstal to select either EpsGraph 80
        or  EpsGraph 100 type printer.   Load EpsGraph before you try  to
        print  a form under EZ-Forms.   EpsGraph allows your  printer  to
        print  completely solid vertical and horizontal lines within  EZ-
        Forms.    Draft,  medium,  and  high  quality  printing  is  also
        selectable.  EpsGraph.EXE  was  written in assembly  language  to
        ensure  the highest possible speed.   Outstanding print  quality!
        If  you have EpsGraph 80 or 100 installed as the default  printer
        type and you hear a beep from your printer while you are printing
        a form,  then you have forgotten to load EpsGraph and the printer
        is reacting to one of the codes EZ-Forms uses for EpsGraph.

        3.6.3 HPGraph
        -------------
        HPGraph  is  a  memory  resident Extended ASCII  to  HP  LaserJet
        graphic converter.   It will allow you to print the line  drawing
        characters on your HP LaserJet.   HPGraph must be loaded prior to
        using  EZ-Forms AND you must use FFInstal to select the  Extended
        ASCII printer driver.

        3.7  NOTES ON EZ-FORMS
        ----------------------

        EZ-Forms has been in development over four years.  EZ-Forms First
        is  based  on our EZ-Forms C.30 release and represents about  the
        midpoint in EZ-Forms' development.  Advanced versions of EZ-Forms
        are available (10-100 times more powerful).

        3.8 24 pin printers
        -------------------
        See the file called 24PINDOC.COM on the distribution disk.




        EZ-Forms First v1.1        USERS GUIDE                Page 19


        GENERAL:

        1.  Screen  manipulation,  including  windowing,  is  handled  by
            writing directly to screen memory.   This provides  extremely
            fast  screen updates and allows high speed text scrolling  on
            the screen.  Checks are performed to determine if your system
            is color or monochrome.   The corresponding section of memory
            is used.

        2.  If  you  have  chosen an Epson compatible printer,  then  EZ-
            Forms  will use compressed print and adjust the line  spacing
            as necessary to fit your form on a single sheet of paper.

        3.  The limit on the number of files in a directory for  EZ-Forms
            is 2000 files.   If you have more files that this in a SINGLE
            directory,  then please divide the directory prior to running
            EZ-Forms.

        4.  EZ-Forms First can read  forms created by EZ-Forms rev C  and
            earlier versions.   The only things lost using a form created
            under a earlier version is the solid lines and recognition of
            the  border  in the editor.   The editor won't  automatically
            place the cursor in column 2 when you press enter.

        5.  If  you would like to print a compressed version of a  normal
            sized form (64x80),  then read the form into the editor using
            1,  2, or 3 from the main menu.  Use F2 to resize the form to
            84x130.   Press  CtrlK  P to print the form from the  editor.
            The  form will be printed in a much smaller version  IF  your
            printer  supports  this  feature  (works with  Epson  and  HP
            LaserJet  to  mention  a couple) AND  you  used  FFInstal  to
            install your printer type.


        SAVING:

        1.  Retyping the file name is required only if you have created a
            new  master  form or filled out a master form.   If  you  are
            editing an existing form then press enter when asked for file
            name and the original file name will be used.

        2.  Before saving,  a check is made to ensure sufficient space is
            left on the diskette and that the file doesn't already exist.
            If  a  problem  occurs,  EZ-Forms  will prompt  you  for  the
            necessary  action.   Space  is checked ONLY  on  the  default
            drive!


        DEFAULT DRIVE:

        EZ-Forms  allows you to change the default drive so that you  can
        have full access to all the drives on your system.   If an  error
        occurs  while  saving  to one drive,  you can  always  switch  to
        another  drive and try again.   You MUST leave EZFF.000 available
        in the same drive and directory where you brought up EZ-Forms.








        EZ-Forms First v1.1        USERS GUIDE                Page 20


        CHANGE DIRECTORY:

        Many  of  the  menus allow you to change  directories.   You  can
        access all the directories available on the default drive if  you
        are using DOS ver 2.0 or later.


        FILE NAME EXTENSIONS

        1.  EZ-Forms  uses  the  file  name extensions  FRM  and  FOF  to
            designate   master  form  and  completed  (filled  out)  form
            respectively.   You  won't see the extensions unless you  ask
            for  a complete directory listing from the utilities menu  or
            from DOS.

        2.  Master forms,  when saved to disk,  consist of only the  text
            with  a 128 byte header containing information about the form
            size.   The  file is written without a  carriage  return/line
            feed  added  to the end of each line.   This  saves  diskette
            space  but  makes the file unusable by most  word  processors
            UNLESS  you  export  the form (see the section  on  exporting
            forms).

        3.  Completed  forms,  when  saved to disk consist,  of the  text
            alternated  with the character attribute  for  protected/non-
            protected along with the 128 byte header.


        MEMORY USAGE:

        Memory  resident programs,  such as SideKick or printer  spoolers
        will  subtract  from the amount of memory available  to  run  EZ-
        Forms.   If  you have only 256K of memory and load in any  memory
        resident programs, then EZ-Forms may not run.  Yes, this includes
        EpsGraph.   Don't worry,  EpsGraph is very small and won't affect
        available memory by much (only about 1200 bytes).


        3.8 INFORMATION ON INCLUDED FORMS
        ---------------------------------

        Many pre-designed forms are provided with EZ-Forms.   Their names
        are mneumonic, that is, their names roughly indicate what the form
        is  for.   Call  them  up from the edit menu and  view  each  one
        individually for more information.


















        EZ-Forms First v1.1        USERS GUIDE                Page 21


        4.0  USING FFINSTAL
        -------------------

        The  EZ-Forms diskette contains a program you will never need  to
        run  -- unless  you  want to customize  the  way  EZ-Forms  runs.
        FFInstal is the installation program for EZ-Forms.  Everything in
        EZ-Forms  is  defaulted such that most users will never  NEED  to
        reconfigure it,  except for printer type. If you run FFInstal you
        will see the following menu after the opening credits.


        4.1  FFInstal Main Menu
        -----------------------


                    -----[*** EZ-FORMS Installation ***]-----
                    |                                       |
                    |                                       |
                    |    <1> Define Colors                  |
                    |    <2> Printer Options                |
                    |                                       |
                    |    <3> Editor Options                 |
                    |    <4> Misc Options                   |
                    |                                       |
                    |    <5> Show Options                   |
                    |    <6> Abandon -- No Changes          |
                    |                                       |
                    |    <7> Exit and Retain Changes        |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    |                                       |
                    |                                       |
                    -----------------------------------------


        What  these options offer you is laid out in the following menus.
        When  you select any of the first 5 options you will see  one  of
        the menus listed in the second level menus area (4.3).   Option 6
        will  abandon  (fancy  for throw away) any  changes  made  during
        running FFInstal. Option 7 will exit and update the configuration
        file (EZ-Forms.CNF) on the default drive and directory.

        EZ-Forms.CNF  contains  ALL  the installation  options  you  have
        selected.   You  can have multiple configuration files defined so
        long  as you rename EZ-Forms.CNF to another name.   Look  at  the
        configuration  files provided on disk number 1.   You should  see
        COLOR.CNF and BW.CNF.   These are all configuration files but are
        used based on the type of display you have.  You can use the same
        method to handle several printers connected to a single computer,
        each  printer needing a special configuration file.   Simply copy
        the  appropriate configuration file to EZ-Forms.CNF before  using
        that  printer type (don't forget to use the DOS MODE  command  to
        route your printer to LPT1 if it isn't already on LPT1).









        EZ-Forms First v1.1        USERS GUIDE                Page 22


        4.2  EXAMPLE USAGE
        ------------------

        STEPS FOR EXAMPLE:  Updating configuration file for printer type.

        1.  Bring  up  FFInstal.   To do this insert  the  diskette  with
            FFInstal.COM on it.  Type FFInstal and press enter.

        2.  After you admire the opening menu for a few seconds press any
            key to get rid of it.

        3.  Press  option  5  for  a  display  showing  the status of ALL
            the EZ-Forms installable options.

        4.  Take  note of the default printer type.  It will  be  buried
            about  one half of the way down in the text at the bottom  of
            the screen.  It should be "Plain Dot Matrix".  Not many of us
            have a "plain" anything.  So lets install it for our  printer
            type.

        5.  Press any key to return to the main installation menu.

        6.  Press  2  for printer options.  A menu  containing  different
            printer options will appear.

        7.  Press  1  to  select a new printer  type.  If  you  see  your
            printer  type  on the menu that now appears, then  press  the
            letter  by it.  If not, then probably the  "Plain Dot Matrix"
            printer  type will be a good guess.  Press the letter by  it.

        8.  After  you select your printer type, the previous  menu  will
            return.  Press 5 to exit (return to the main menu).

        9.  The main menu will appear.

        10. Feel free to redefine the colors or any other items you would
            like.   If you change the default colors, please ensure  they
            are  different from each other (i.e. don't use black text  on
            a black background).  Use the show options 5, to see how  all
            the colors look together.

        11. At this point you can press 5 to view the options again or  7
            to save your configuration and return to DOS.




















        EZ-Forms First v1.1        USERS GUIDE                Page 23


        4.3 SECOND LEVEL MENUS
        ----------------------

        The  following menus are used only if you make the  corresponding
        selection from the main FFInstal menu.


        4.3.1 DEFINE COLORS
        -------------------

                    ---------[CHANGE DEFAULT COLORS]---------
                    |                                       |
                    |                                       |
                    |    <1> Change Main Text Color         |
                    |    <2> Change Secondary Text Color    |
                    |                                       |
                    |    <3> Change Warning/Status Text     |
                    |    <4> Change Text Background Color   |
                    |                                       |
                    |    <5> Change Normal Border Color     |
                    |    <6> Change Warning Border Color    |
                    |                                       |
                    |    <7> Change Block Text Background   |
                    |    <8> Exit                           |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    |                                       |
                    |                                       |
                    -----------------------------------------


        This  menu allows you to change ALL colors used in  EZ-Forms.   A
        brief description of how each color is used for follows.

        Main Text Color - This is the main text color used throughout EZ-
        Forms.  This is the text color for protected characters.  For the
        master forms,  this will be the only character text  color.   For
        completed forms this is the protected text color.

        Secondary  Text  Color - This is the text color  for  unprotected
        text in the completed form mode.

        Warning/Status  Text  Color - This color calls your attention  to
        important items in EZ-Forms.   This color is used for the  status
        on  the  bottom line when in the editor and for warning  messages
        when you are about to do something that could cause a problem.

        Normal  Border  Color - The normal border color is used  for  all
        normal window borders.  Try to choose a color that is restful but
        still stands out from the background.  The light blue used in the
        default  may not be your best choice.











        EZ-Forms First v1.1        USERS GUIDE                Page 24


        Warning  Border  Color  - A  special  border  color  is  used  if
        something  is likely to cause a problem or if you are in  a  high
        accident area.  Normally red works well for this.

        Normal Text Background Color - This color is used throughout  EZ-
        FORMS as the background color for the entire screen.

        Block Text Background Color - This color highlights the text that
        is  to  be operated on in the block text operations (that is  the
        CtrlK type functions).

        Listed  below  are some of the colors that seem to work well  for
        EZ-Forms First.


        Color definitions:

                            Dark Colors      Light Colors

                            0  Black         8  Dark Gray
                            1  Blue          9  Light Blue
                            2  Green         10 Light Green
                            3  Cyan          11 Light Cyan
                            4  Red           12 Light Red
                            5  Magenta       13 Light Magenta
                            6  Brown         14 Yellow
                            7  LightGray     15 White


        Some colors that seem to work well:

                            COLOR       COLOR      COMPOSITE
        USED FOR            SET #1      SET #2        B&W        3270 PC
        --------           --------    -------    -----------    -------
        Main text color:      14          0          15            14
        Secondary text:        7          1           8             1
        Warning/status:        4          4          15             4
        Normal window:         9          6           7             6
        Warning window:        4          4          15             4
        Text background:       0          7           0             0
        Block background:      2          2           7             2


        NOTE:  Some  RGB monitors do not have the capability to vary  the
               intensity.   What  this  means  really is  that  your  RGB
               monitor  may have the capability to display only the  dark
               colors  and  not the light colors.   Most newer color  RGB
               systems do not have this problem.















        EZ-Forms First v1.1        USERS GUIDE                Page 25


        4.3.2  PRINTER OPTIONS
        ----------------------

                    --------[CHANGE PRINTER OPTIONS]---------
                    |                                       |
                    |                                       |
                    |    <1> Select different printer       |
                    |    <2> Change printer lf/cr           |
                    |                                       |
                    |    <3> Change lf print delay          |
                    |    <4> Line feed to top of page       |
                    |                                       |
                    |    <5> Exit                           |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    |                                       |
                    |                                       |
                    -----------------------------------------

        With  the  printer  options  menu  you  have  the  capability  to
        customize how EZ-Forms works with your printer.

        Option  1  - Allows  you to select a different type  of  printer.
                   Many  of  the printers listed in option 1 support  the
                   larger  form  sizes (up to 86 lines by  130  columns).
                   Some  of the printers such as the Epson  series,  will
                   even   support   printing  FULL   graphic   characters
                   resulting in SOLID lines on the printed form.
                   See Appendix A for current list.

        Option  2  - Enables  you to compensate for some  printers  which
                   automatically  give  you a line feed  when you send  a
                   carriage return, resulting in double spacing.  If your
                   printer  has  a tendency to double  space,  then  this
                   option  tells  EZ-Forms not to send a line  feed  when
                   printing.  If you make a mistake on this selection and
                   disable  the line feeds when you actually  need  them,
                   then  EZ-Forms will print the entire form on a  single
                   line without advancing the paper.

        Option 3   - Change line feed print delay.  Certain printers have
                   trouble  advancing the paper to the next line  if  you
                   send  a  line feed too soon after a  carriage  return.
                   This  option  allows  you to slow down only  this  one
                   portion of printing.   For example,  the IBM  Graphics
                   Printer  seems  to require a delay of  about  50.   In
                   contrast, my Gemini-10X works fine with 0 print delay.
                   Don't  adjust this delay unless just a couple of lines
                   out  of  the ENTIRE form print  too  closely  together
                   (vertical  spacing).   The required delay is  probably
                   specific to each individual printer and not the entire
                   class itself.










        EZ-Forms First v1.1        USERS GUIDE                Page 26


        Option  4  - Provides you the capability to disable the automatic
                   paper  advance  to  the top of  the  next  page  after
                   printing a form.   This could prove very useful if you
                   like  to  print short forms with several on  a  single
                   page.

        Option 5   - Returns you to the main menu after you're finished.



        4.3.3  EDITOR OPTIONS
        ---------------------

                    --------[EDITOR/DISPLAY OPTIONS]---------
                    |                                       |
                    |                                       |
                    |    <1> Disable display adaptor        |
                    |    <2> Set tab length                 |
                    |                                       |
                    |    <3> Sort file directories          |
                    |    <4> Regular/Expert mode            |
                    |                                       |
                    |    <5> INS/OVR default                |
                    |    <6> Exit                           |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    |                                       |
                    |                                       |
                    -----------------------------------------

        This part of the EZ-Forms install program lets you work with some
        of  the less obvious features and gives you the power to make EZ-
        Forms virtually unusable to anyone but the expert user.  Lets see
        how to go about that.

        Option  1  - Many  computers contain display adaptors that  cause
                   snow  on  your screen whenever you output text on  the
                   screen  in a rapid manner.   EZ-Forms routinely  turns
                   off the display adaptor to prevent this snowy  effect.
                   That's  why you see the entire screen blank at  times.
                   If  your computer doesn't have problems with snow then
                   you can tell EZ-Forms not to disable the  screen.   By
                   not disabling the screen you'll see quicker updates of
                   text with virtually no screen blinking.


















        EZ-Forms First v1.1        USERS GUIDE                Page 27


        Option  2  - The tab key performs two functions in EZ-Forms.   In
                   the  master form mode it is a normal tab.  This option
                   allows  you  to set the number of  spaces  the  cursor
                   moves  to the right when you press the tab key ONLY in
                   the  master form mode.   The form is divided  up  into
                   equal  sections,  each  the  default  tab  length.  In
                   completed     form     mode    it    jumps     between
                   "fields"/unprotected text areas.    When you press the
                   tab key in the completed form mode,  the cursor  moves
                   to the start of the next section.   See the section of
                   this manual dealing with "fields" to get a better feel
                   for how the tab key works with "fields".

        Option  3  - Directory  listings are normally sorted.  Sort  time
                   ranges from a couple of seconds for a small collection
                   of  forms  up to a couple of minutes for  the  maximum
                   number  of  forms  supported by EZ-Forms  (2000  in  a
                   single  directory).   If your patience is shorter than
                   the  sort  time then use option 3 to disable  it  (the
                   sorting  that is).   A quick sort routine (one of  the
                   fastest  sort  routines around) is used  but  even  it
                   takes some time to do the job.   (Be advised,  without
                   the  sort  routine,  you'll have a dickens of  a  time
                   finding your file.  Better to lengthen your patience).

        Option  4  - This  option  allows you to set EZ-Forms up   for  a
                   regular or expert user.  Many of the operations in EZ-
                   Forms provide additional information about selections.
                   If  the  expert  mode is selected  then  none  of  the
                   additional  information is provided.   The user always
                   has  the  option to press Esc while  in  the  EZ-Forms
                   editor  to  alter the default.  We recommend  that  if
                   several  people normally use the program,  then  leave
                   the  default  set to regular user and let the  experts
                   use Esc to temporarily alter the default.

        Option 5   - The  INS/OVR option allows you to alter the  default
                   for the EZ-Forms editor to either insert or overwrite.
                   The normal default is overwrite.  This seems to be the
                   best compromise if you deal a lot with both master and
                   completed  forms.   If you work mostly with  completed
                   forms then insert may be a better default.





















        EZ-Forms First v1.1        USERS GUIDE                Page 28


        4.3.4  MISC OPTIONS
        -------------------

                    ----------[CHANGE MISC OPTIONS]----------
                    |                                       |
                    |                                       |
                    |    <1> Enable/Disable sounds          |
                    |    <2> Exit                           |
                    |                                       |
                    |                                       |
                    |        Press Your Selection           |
                    |                                       |
                    |                                       |
                    -----------------------------------------


        This menu is a kind of catch all for items that didn't fit in any
        other area of the install program.   Look for new options to show
        up here in future revisions of FFInstal.

        Option  1  - Allows  you to turn off all sounds within  EZ-Forms.
                   That  includes all warning beeps before you are  about
                   to  exit  from editing a form and haven't  saved  your
                   revisions.  So disable sounds only if the beeps really
                   get to you.

        Option  2  - Allows you to Exit this menu and return to the  main
                   FFInstal  menu.   If  you  have  any  suggestions  for
                   additional user installable options be sure and let me
                   know.   We hate  to  have just one item  listed  here.
                   Seems like there should be more.
































        EZ-Forms First v1.1        USERS GUIDE                Page 29


        4.3.5  STATUS OF OPTIONS
        ------------------------

        ------------------------[DEFINED OPTIONS]------------------------
        |                                                               |
        |Dark Colors   Light Colors     Current defaults:               |
        |                                                               |
        |0  Black       8  Dark Gray    Main text color is: 0           |
        |1  Blue        9  Light Blue   Secondary text color is: 1      |
        |2  Green      10 Light Green   Warning/status text color is: 4 |
        |3  Cyan       11 Light Cyan    Normal window border color is: 6|
        |4  Red        12 Light Red     Warning window border color is:4|
        |5  Magenta    13 Light Magenta Text background color is: 7     |
        |6  Brown      14 Yellow        Block text background color is:2|
        |7  LightGray  15 White                                         |
        |                                                               |
        |Disable display adaptor during direct access of video memory.  |
        |Sort files when doing a directory listing.                     |
        |Set tab distance to 6 spaces.                                  |
        |Default printer name is: Plain Dot Matrix.                     |
        |Use line feeds to advance printer paper to top of next page.   |
        |Use a line feed/carriage return at the end of printing a line. |
        |Delay 50 ms after printing each line.                          |
        |Editor insert/overwrite default is to overwrite.               |
        |                                                               |
        |       Press any key to continue.                              |
        |                                                               |
        -----------------------------------------------------------------

        When you press option 5 from the main menu you will see a display
        like  the one above.   The colors and status of the options  will
        depend on how you have your default configuration file set up.

        This display is a very useful one because it shows you how ALL of
        the colors are going to look when you use EZ-Forms.   Look at the
        text  under "Current defaults".   If any of the seven  lines  are
        missing,  then  you have chosen an incompatible color  set.   For
        example, you can't choose black text on a black background.

        Most  of the installable options for EZ-Forms are displayed  here
        for  your  review.   We hope you have as much fun  modifying  the
        options as we did when we initially checked everything out.
























                                   APPENDIX A


     SELECT PRINTER OPTIONS  (From within FFINSTAL.COM)

 A.  EpsGraph 80 series Epson printers -- best!  Don't change printer name!!
 B.  EpsGraph 100 series Epson printers -- best!  Don't change printer name!!
      Note: EpsGraph gives full graphics support on any Epson dot matrix
      printer (solid lines).  Don't change printer name with option N.
      For A or B, ALWAYS load EpsGraph from disk #2 before running EZ-Forms.
 C.  IBM Graphics(lg frms), Epson RX/MX/FX-80, Gemini 10X (try type A first!)
 D.  Epson RX/MX/FX-100, Gemini 15X (try type B first!)
 E.  HP LaserJet   *** MUST use font cartridge "Y" ***   Great!!!
 F.  HP ThinkJet 2225C
 G.  Banana
 H.  Toshibia P1351
 I.  Prowriter M8510B (supports character graphics)
 J.  C.Itoh Starwriter
 K.  Okidata 92A
 L.  Plain Dot Matrix
 M.  Plain Daisywheel
 N.  Custom printer installation (NOT for the beginner)
 O.  Extended ASCII.  Use with HPGraph for HP LaserJet.  Max form size: 60x80.
     Use for printers like the FX-85 that can print Extended ASCII directly.
 P.  Return -- No Changes!

               Press your selection (A-P)?


Also see the file called 24PINDOC.EXE for information of 24 pin printes.
  24PINDOC <cr>




                                    THANK YOU
This TestDrive/Valueware version of EZ-Forms First may be "shared" with others,
 for evaluation purposes only. If you use it for more than 10 days, you are
 expected to regi$ter. See info below.

EZ-Forms First(tm) is produced and (C) 1989 & 1990 copyrighted by:
EZX Publishing
P.O. Box 58177-FF11
Webster, Texas 77598 USA

For information call 713/280-9900.  InfoFAX: 713/280-0525

WE ACCEPT VISA, MASTERCARD, DISCOVER, AMERICAN EXPRESS, and OPTIMA orders.

Refer to REGISTER.EXE (will print form with the "T" option) for the
latest pricing, etc.     At DOS, just type REGISTER <cr>
                                           ~~~~~~~~~~~~~
Within EZ-FORMS FIRST, refer to REGISTER.FRM (you can view/print it).

For information on all other EZX ... products, refer to EZXINFO.COM
  At DOS, just type:    EZXINFO <cr>

Registration for EZ-FORMS FIRST is $39. That's right, only 39 bucks!
Send $39 plus shipping (see below) to the above address along with
your name and address to register this version.  We will send the manual, etc.
notify you of future product enhancements.  Refer to the main menu item 6 for
additional information on registration benefits. You can fill out the printed
certificate generated when you print the result of REGISTER.FRM.
Also see EZXINFO.EXE.

Dear Users of EZ-Forms First ver 1.1:                      August 1990

EZ-Forms First provides a documentation file (EZFF.DOC) to help you get
started quickly.  Refer to the on-line help in the editor (F1 while the form
is visible) for a listing of the commands.  Disk space is limited so you may
want to delete the documentation file from your work disk (keep a backup copy).

To print the EZ-FORMS FIRST MANUAL, make sure your printer has about 32 sheets
of paper loaded. Then at the DOS prompt, and with the file EZFF.DOC in the DOS
path or the default directory, type

 COPY EZFF.DOC PRN  (you may have to use LPT1:, LPT2:, etc.)

 For information on EPSGRAPH.EXE, EPSGPH24.EXE, and HPGRAPH.EXE, type:
  EPSGRDOC <cr>, <cr>, and/or HPGRDOC <cr>.
  Print via the "T" option.

Capabilities in EZ-Forms First:
===============================
- Create master forms from scratch using solid graphic lines
- Fill out those forms in a protected mode where only the text can be added
- Save filled out forms for later printing or revision
- Printer support for IBM Extended ASCII line drawing characters
- Graphic driver programs to support Epson and HP LaserJet printers
- Forms are printed out using solid graphic lines with no breaks
- Support for pre-printed forms using the Clear Forms Overlay (CFO) option
  at print time
- Resize master forms at any time without typing in form again
- Auto number, date, and time functions
- Forms created with EZ-Forms First are convertible if you should ever
  move up to EZ-Forms Lite or EZ-Forms Executive, conversion is automatic.
- For more information about EZ-FORMS LITE & EXECUTIVE and about other EZX
  products, see EZXINFO.COM. Just type EZXINFO <cr> at the DOS prompt.

Please help distribute this fully functional version of EZ-Forms First.
Pass copies to friends and upload to your local bulletin boards.  Any
suggestions for improving the EZ-Forms... prodcut line would be appreciated.

Regards, Dave Black  Software Development Manager,  EZX Publishing


                  EZ-FORMS FIRST<tm>  REGISTRATION CERTIFICATE
  MAIL TO:
  ~~~~~~~~  EZX Publishing                FAX TO: 1-713-280-0525
            P.O. BOX 58177 - FF REG.      Voice:  1-713-280-9900
            Webster, TX 77598, USA     VISA/MaterCard/AmeX/Discover accepted.

       REGISTRATION INFO (Please fill out & mail.) Also see REGISTER.EXE
       ^^^^^^^^^^^^^^^^^

  EZ-FORMS FIRST - Benefits include a printed manual, 90 days of free
                   phone support. Additional untilties and over 50
                   pre-designed forms are included. Unlimited use of
                   EZ-HOST BBS for customer support is also included.
                   Cost is only $39 plus shipping and handling.

  EZ-FORMS LITE -  Adds light bar menus and extensive, context sensitive
                   on-line help/manual. Also has basic math. Only $69 +s/h.

  EZ-FORMS EXECUTIVE - Adds big-time math, macros, much, much more!
                   Only $129 plus s/h.

  EZ-FORMS'DATABASE - Adds a ".DBF" comptible database with all the power
                   you'll ever need. Only $239 plus s/h.

Shipping is $6 USA-48, $12 AK,HI,PR,Canada,FPO,APO, $22 other foreign.
   
See EZXINFO.EXE for more details on s/h and EZX's other software products.
(Updated 8/90. Pricing, terms, etc. are subject to change without notice.)


 See REGISTER.FRM, README.EXE, write, or call 713-280-9900 for latest details.

 To the gang at EZX, please register my EZ-FORMS FIRST as follows:
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 REGISTRATION DESIRED:___________________  OTHER PRODUCTS:__________________
 (Note: For other products, see REGISTER.FRM or REGISTER.EXE)

 COST:______________________ + SHIPPING:____________  = TOTAL:_____________

 PAYMENT: Discover/VISA/MC/AX (Circle) NUMBER: ________________________________

 SIGNATURE:____________________________    EXPIRATION DATE:________________
 Signature and Phone Number _________________________ reqd. for cc orders.

 CHECK NUMBER/AMOUNT:______________________________________________________
 Make checks and money orders payable to EZX Publishing. USA funds drawn on
 USA banks/branches only please. May be held until funds are clear. no CODs

 Your Own Name (required):_________________________________________________

  Company Name (optional):_________________________________________________

           Street Address:_________________________________________________

 City, State, Postal Code:_________________________________________________

 Country: _______________  Phone/FAX Numbers:______________________________

 How did you hear about EZX..? ___________________________________________

 Would your like to be on our mailing list? ______________________________

 Type of computer? ___________    _______Kram  ______ FDD  Monitor:_______

 Hard Drive: _________________    Printer:________________________________

 COMMENTS:________________________________________________________________

FAX to 713/280-0525           THANK YOU

```
{% endraw %}

## EZFFHELP.TXT

{% raw %}
```

                                 EZ-FORMS FIRST

                               by EZX Publishing
                             

  EZ-FORMS FIRST (EZ-FORMS for short) gives you the capability to use your
  computer to create master forms tailor-made to suit your unique needs.
  Once created, these forms can be filled out and stored under code names
  pertaining to their use (i.e. billing, invoice, comments, etc).  EZ-FORMS
  also gives you the capability to print and/or store completed or master
  forms.

  Comments or suggestions for improving EZ-FORMS will be appreciated.







                          SYSTEM REQUIREMENTS

  EZ-FORMS requires an IBM PC or compatible with at least 256K of RAM.
  Printers supported include the Epson graphics printer and daisywheel
  printers like the Bytewriter.   Display adapters known to work with
  EZ-FORMS are IBM monochrome, color, and enhanced graphics adapters.
  Because direct screen access is used to enable high speed updating
  of screen information, EZ-FORMS may be unuseable on the not too close
  IBM PC compatibles.  If this occurs please  provide information on
  your screen memory starting address and we will try to include your
  display adapter particulars in the EZ-FORMS defaults.

  If you have a "green screen" monitor attached to your color graphics
  card, don't forget to use the DOS mode command -- MODE BW80.  This
  will ensure correct conversion of colors for your monitor.





                         HELP FOR DIRECTORY SCREEN


  To edit an existing form simply press enter/return and type in one
  of the names in the directory listing.  If you want to generate a
  new form then select option 1 from the main menu and enter a new
  name when prompted for the file name during a directory listing.

  All files in the directory listing are sorted if this option has not
  been disabled with the EZ-FORMS install program.  A very fast sort
  routine is used, but with a large directory it may take a few seconds.

  EZ-FORMS can handle a directory containing up to 2000 files.  If you
  have more files than that in a SINGLE directory then please break the
  directory into smaller ones prior to running EZ-FORMS in that directory.





                         MORE HELP FOR DIRECTORY SCREEN

  When a directory is displayed, the files will be sorted and displayed
  left to right -- top of screen to bottom in order.  Please take note
  of the highlighted commands listed at the bottom of the screen.

  If "Enter --> Input Filename" is displayed then you are expected to
  look over the directory entries using the commands listed in the window
  at the bottom of the screen.  After you do this, use enter/return to
  signal that you are ready to select a form to work with.  Simply type
  in the form name at the prompt and press enter/return again.  If you
  got here by accident the press enter/return without a filename entered
  and EZ-FORMS will return you to the main menu.

  If "Enter --> Input Filename" is not displayed then the directory is
  there as a status and you are expected to press F10 to exit after you
  finish looking it over.

  You can always use F10 to exit without further action.

                            HELP FOR EDITING FORM

  FUNCTION KEYS ARE                  NUMERIC KEY PAD CURSOR MOVEMENT KEYS

  F1    HELP                         Up Arrow           ONE LINE UP
  F2    RESIZE FORM                  Down Arrow         ONE LINE DOWN
  F3    INSERT FIELD MARKERS         Right Arrow        ONE COLUMN RIGHT
  F4    REMOVE FIELD MARKERS         Left Arrow         ONE COLUMN LEFT
  F5    DRAW LINE                    Ctrl Right Arrow   RIGHT SIDE OF FORM
  F6    ERASE LINE                   Ctrl Left Arrow    LEFT SIDE OF FORM
  F7    DRAW BORDER                  PgUp               ONE PAGE UP
  F8    ERASE BORDER                 PgDn               ONE PAGE DOWN
  F9    CLEAR FORM                   Home               UPPER LEFT OF PAGE
  F10   EXIT -- SAVE MENU            End                LOWER LEFT OF PAGE
                                     Ctrl Home          UPPER LEFT OF FORM
  NOTE: F3 and F4 work with          Ctrl End           LOWER LEFT OF FORM
  field markers for ENTIRE           Ctrl PgUp          TOP OF FORM SAME COL
  form.  Use CtrlK I and E           Ctrl PgDn          BOTTOM OF FORM " "
  for sections of form.

                                 OTHER KEYS

  CURRENT DATE/TIME FEED             INSERT OR DELETE LINE

  CtrlF + D  FEED DATE               Ctrl Enter   INSERT LINE
  CtrlF + T  FEED TIME               Ctrl Y       DELETE LINE

  NOTE: Must have room on line       NOTE: Insert may cause the last line of
  to display full time or date.      the form to be pushed off the end.  Also
  Also current system time and       text will be lost if you try to write
  date must be correct (see doc).    over a protected character (see doc).

  AUTO NUMBERING -- To set up auto numbering go to the master form and press
  CtrlN.  Each time you complete it (Main Menu #2) the number will increment.

  Esc  SELECT ASSISTANCE LEVEL -- All of the block operations and many of the
  other operations in EZ-FORMS will give extra information prompt prior to
  performing the function.  In the regular mode you receive all messages.
  The regular mode is the default.
                           HELP FOR BLOCK OPERATIONS

  BLOCK TEXT OPERATIONS     BLOCK FILE OPERATIONS    BLOCK PRINTER OPERATIONS

  B  BEGIN BLOCK            W  WRITE BLOCK TO DISK   P  PRINT COPY AS IS
  K  END BLOCK              R  READ BLOCK FROM DISK
  V  MOVE MARKED BLOCK
  C  COPY MARKED BLOCK      FIELD MARKERS: Use F3 or F4 to work with field
  Y  DELETE MARKED BLOCK                   markers for the entire form.
  U  UNMARK BLOCK                          Field markers are just like
  I  INSERT FIELD MARKERS                  any other character. The ~ can
  E  ERASE FIELD MARKERS                   be entered from the keyboard or
                                           erase by typing over it.

  NOTE: Block operations consist of two keystrokes -- CtrlK + above key.
  CtrlK means while holding down the Ctrl key press the K key.  Block text
  and block file operations use the marked text area and the current cursor
  location.  Example -- for a block move the block will be moved from the
  highlighted area to where the cursor was when you pressed the CtrlK V
  key combination.
                          HELP FOR CHARACTER DRAWING

  Using the F7 key for a border and the F6 key for a line often don't fill
  in all the areas that you might want for forms.  The keys Alt F1-F10 and
  Ctrl F1 have been added to provide the capability for COMPLETELY solid
  forms.  These keys are:

  Alt F1 --> ┌      NOTE: These characters are handled in the editor just as
  Alt F2 -->  ┐           any other characters typed in from the keyboard.
  Alt F3 --> └            If insert is ON then these characters will be
  Alt F4 -->  ┘           inserted into the text on the screen, moving other
  Alt F5 --> ─            characters over.
  Alt F6 -->  │
  Alt F7 --> ├            EZ-FORMS will translate these special characters to
  Alt F8 -->  ┤           characters your printer can understand.  If your
  Alt F9 --> ┬            printer can print character graphics AND you have
  Alt F10-->  ┴           selected it (must use EZINSTAL), then you will get
  Ctrl F1--> ┼            COMPLETELY solid lines.  DEPENDS ON PRINTER!



  REGISTRATION for EZ-FORMS FIRST and other versions of EZ-FORMS

  EZ-FORMS FIRST - Benefits include a printed manual, 90 days of free
                   phone support. Additional untilties and over 50
                   pre-designed forms are included. Unlimited use of
                   EZ-HOST BBS for customer support is also included.
                   Cost is only $39 plus shipping and handling.

  EZ-FORMS LITE -  Adds light bar menus and extensive, context sensitive
                   on-line help/manual. Also has basic math. Only $69 +s/h.

  EZ-FORMS EXECUTIVE - Adds big-time math, macros, much, much more!
                   Only $129 plus s/h.

  EZ-FORMS'DATABASE - Adds a ".DBF" comptible database with all the power
                   you'll ever need. Only $239 plus s/h.
   
See EZXINFO.EXE for more details on s/h and EZX's other software products.
(Updated 8/90. Pricing, terms, etc. are subject to change without notice.)

  NOTES:

  1.  None of the versions of EZ-Forms First have any hooks of any kind.
      We don't slow down printing, limit help, or limit the user's manual.

  2.  We at EZX Publishing realize that many people don't need the power of
      EZ-Forms Lite or EZ-Forms Executive.  Placing an older version of our
      forms product on the BBSs is our way of introducing you to EZ-Forms
      and showing how it can help you.  Thanks for your support.

  DISCLAIMER (we have to cover ourselves):

  EZX Publishing, Inc. makes NO claims AND offers NO warranties of any sort
  with EZ-Forms First.  EZX Publishing assumes NO responsibility for any
  sort of damage resulting from the apparent or actual use of EZ-Forms
  First (mental or physical).  The forms and program provided are not
  guaranteed as to merchantability or fitness for their ultimate use.  The
  user accepts all responsibility for use and may not resell the program
  or any supplied form.

```
{% endraw %}

## FILE1838.TXT

{% raw %}
```
Disk No: 1838                                                           
Disk Title: EZ-Forms First                                              
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: EZ-FORMS FIRST                                           
Author Version: 1.1                                                     
Author Registration: $25.00                                             
Special Requirements: Printer.                                          
                                                                        
Take advantage of professional forms created with the popular EZ Forms  
form generator. Included in EZ FORMS FIRST are 13 standard business     
forms that you can customize with your own business data. These forms   
will help you track expenses, invoice labor, take a sales order, plan a 
meeting, bill a customer, keep track of appointments and more.          
                                                                        
EZ FORMS FIRST is not a custom form generator such as EZ Forms or EZ    
Forms Lite. Instead, the job of creating the forms has been done for    
you. You can jump right into customizing these forms with your own      
data. Print these forms and use them as masters to be filled out in     
ink, or fill in the forms on your computer and keep each as a computer  
record. And if you find these forms useful, an additional registration  
fee buys 50+ more business forms.                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1838

     Volume in drive A has no label
     Directory of A:\

    EZFF     000     14848   8-02-90  10:41a
    HPGRAPH  EXE      1627   5-14-90  12:35p
    README   EXE      5851   8-02-90   7:22a
    SUPPORT  EXE      6779   9-17-90   1:53p
    EZFF     DOC     86241   8-02-90   6:57a
    REGISTER FRM      5376   8-01-90   9:46p
    EZFFHELP TXT      9586   8-01-90   8:53p
    EPSGRAPH EXE      2811   5-14-90  12:35p
    HPGRDOC  EXE      4155   5-14-90  12:16p
    EZFF-TD  COM     57856   8-02-90  10:41a
    REGISTER EXE      4107   8-01-90   9:51p
    EPSGRDOC EXE      3419   5-14-90  12:11p
    EZXINFO  EXE     16011   9-17-90   1:52p
    WEEKPLAN FRM      5248   9-02-88   9:08p
    SALESORD FRM      5376   9-02-88   9:08p
    RENTLINV FRM      4480   9-02-88   9:08p
    PHONEDIR FRM      5248   9-02-88   9:07p
    ORDER    FRM      5248   9-02-88   9:07p
    MEETAGEN FRM      5376   9-02-88   9:07p
    LABORINV FRM      4480   9-02-88   9:07p
    INVOICE  FRM      5376   9-02-88   9:06p
    EXPENSES FRM      5376   9-02-88   9:06p
    DATAENTR FRM      5248   9-02-88   9:06p
    CUSTBILL FRM      5376   9-02-88   9:06p
    CALENDAR FRM      5376   9-02-88   9:05p
    AVOIDVO  FRM      5376   9-02-88   9:05p
    24PIN    COM       512   2-17-90   5:16p
    EPSGPH24 EXE      2779   5-14-90  12:35p
    !EZFF11A          1527   8-01-90   9:47p
    24PINDOC EXE      2699   2-17-90   5:32p
    FFINSTAL EXE     30731   8-01-90   9:04p
    !EZX!!!!          1574   9-17-90   1:53p
    !                 1574   9-17-90   1:53p
    FILE1838 TXT      2073  11-14-90   8:41a
           34 file(s)     329720 bytes
                           10240 bytes free
