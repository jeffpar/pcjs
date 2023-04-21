---
layout: page
title: "PC-SIG Diskette Library (Disk #695)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0695/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0695"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EZ-SPREADSHEETS"

    You too can become a spreadsheet pro in 20 minutes or less!
    EZ-SPREADSHEET won't confuse you, try your patience, or force you to
    learn 457 commands to get started. What you get is a spreadsheet that
    will produce 64 columns by 512 rows; more than enough for 99% of users'
    needs.  For Epson type printers, a sideways printing program is
    supplied.  Includes printed manual/tutorial plus 5 sample spreadsheets.
    
    Construct your own spreadsheet or use one of the templates included.
    The applications provided range from budget worksheets and loan
    calculators to savings plans and financial statements.  A good tool for
    home and business.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZS.DOC

{% raw %}
```












                         OVERVIEW FOR VALUEWARE VERSION

                        AN EASY BUT POWERFUL SPREADSHEET!

                         *******************************
                         *                             *
                         *  E Z - S R E A D S H E E T  *
                         *                             *
                         *******************************


                                Reference Manual

                                  Version  S23


                                 February  1990


                                VALUEWARE VERSION


                     Exclusive Distributor:  EZX Publishing
                                             P.O. Box 58177
                                           Webster, TX 77598-8177
                                           713/280-9900 BBS:713/280-8180
                                             FAX: 713/280-0525


              Credit card orders ONLY:   1-800-USEASYX ext. EZS23

            VISA/MASTERCARD/AMERICAN EXPRESS/DISCOVER GLADLY ACCEPTED.


   Portions (c) Copyright 1986, thru 1990 by: EZX PUBLISHING, P&M Software.
                               All rights reserved.

                 Program enhanced by: David Black and Allen Baker












                                     Page 1






                                     PREFACE


        EZ-SpreadSheet  is  distributed  under the  "Valueware"  concept.
        Feel  free  to  pass  copies of  diskette  #1  to  your  friends,
        neighbors, PC users groups, and other interested parties. Disk #2
        is reserved for registered users only.   The Valueware version of
        this  program  may be uploaded to bulletin boards  provided  this
        documentation file and sample spreadsheets are included.   Please
        check the distribution diskette labels to see which diskettes can
        be  freely  distributed.  If you're a registered user,  you  will
        receive  a  commission for every new registration based  on  your
        unique registration number.


        You may NOT sell EZ-SpreadSheet!


        Disclaimer:

        EZX  Publishing  make NO claims  AND offer NO warranties  of  any
        sort   with   EZ-SpreadSheet.    EZX   Publishing    assumes   NO
        responsibility for any sort of damage resulting from the apparent
        or actual use of EZ-SpreadSheet (mental or physical).

        EZX Publishing  DOES want to know of any problems users have with
        EZ-SpreadSheet and will fix any "bugs"  found by our users.   The
        first  5 users documentating each bug will receive a free copy of
        the  fixed  version  as soon as it is available.   If you  are  a
        registered user, you will receive the 2 diskette set.  Otherwise,
        you   will  receive  the  ValueWare  version  of   EZ-SpreadSheet
        (diskette  #1).    We  will also try to incorporate  changes  and
        enhancements based on your suggestions.


























                                     Page 2






                                TABLE OF CONTENTS
        -----------------------------------------------------------------

        1.0  INTRODUCTION

        2.0  GENERAL INFORMATION

             2.1  Installation of EZ-SpreadSheet (Registered Version)
             2.2  Installation of EZ-SpreadSheet (ValueWare Version)

        3.0  USING EZ-SPREADSHEET

             3.1  Getting Started
             3.2  Field Entry Information
             3.3  Row Labels and Column Headings

        4.0  CURSOR CONTROL AND EDITING KEY DEFINITIONS

        5.0  LIST OF COMMANDS

        6.0  FORMULAS

        7.0  MISC INFORMATION

             7.1  Overwritten cells
             7.2  The Range and Commands using it
             7.3  Defining a Worksheet
             7.4  Printer Setup
             7.5  Internal Rate of Return
             7.6  Autocalc modes

        8.0  REGISTRATION -- $49.00

        9.0  TUTORIAL AND SAMPLE WORKSHEETS

























                                     Page 3






        1.0  INTRODUCTION
        -----------------------------------------------------------------

        WHAT IS EZ-SPREADSHEET (A QUICK OVERVIEW)

        A  spreadsheet  is  a  powerful electronic  pad  and  pencil  set
        designed to let you add, subtract, multiply, and divide with ease
        and efficiency.   Or the spreadsheet can act as a "crystal  ball"
        letting  you "divine"  the end results of various  situations  by
        performing  "what-if"   calculations to fit a variety  of  future
        scenarios.  Think of EZ-SpeadSheet this way: the computer display
        is your paper,  the cursor and keyboard is your pencil,  and your
        PC  is the calculator.   Worksheets provided with  EZ-SpreadSheet
        are made up of "mailboxes" or "cells" which hold formulas,  text,
        or numbers.  The cells are arranged in 64 columns by 512 rows for
        a  total of 32768  cells.   These worksheets provide  the  needed
        information to tie all the elements together to get your job done
        quickly  and  accurately.    If the worksheets provided  are  not
        adequate,     EZ-SpreadSheet   lets   you   generate   worksheets
        specifically tailored to your unique needs.

        EZ-SpreadSheet is a fast,  efficient,  and ideal tool to let  you
        easily   solve  your  math-related  home  or  business   problems
        (however,   it's  a  good  idea  not to let  your  kids  see  EZ-
        SpreadSheet  or  else it will be doing their  math  homework  for
        them).   In most cases, you can just enter your own data into the
        worksheet  and  EZ-SpreadSheet will do all the  calculations  for
        you.    Applications  for the home include  calculating  budgets,
        loans,   savings  plans,  etc.    Business  applications  include
        everything  from  simple loan calculations to complete  financial
        statements.

        The EZ-SpreadSheet worksheet processes inputs much the same way a
        calculator  does,  (so if you need to use a word processor,   you
        will need to load a different program).  The worksheet is divided
        into cells which can store text, numbers, and formulas.   Text or
        numbers  are  displayed  at  the  screen  cell  where  they  were
        originally entered.  Results of a calculated formula is displayed
        in  the cell where that formula is stored.   The numbers or  text
        displayed  in  this case is dependent upon the  contents  of  the
        cells  referenced by the formula cell.   Worksheets can be stored
        to  disk and retrieved any number of times.   Several  worksheets
        are provided with the EZ-Spread package.

        Why another spreadsheet?  Well, almost all of the spreadsheets on
        the  market  today  require  you to have  a  Master's  degree  in
        Computer  Science  just  to  get the  darn  things  going.    EZ-
        SpreadSheet  is  designed to be a easy and  friendly  spreadsheet
        (only you can tell us if we have done our job right).   Hopefully
        you  will feel right at home using EZ-SpreadSheet.  If you are an
        experienced  spreadsheet  user,   we  hope  you  find  the  quick
        simplicity refreshing and turn to EZ-SpreadSheet for all but your
        most difficult problems.  In addition,  EZ-SpreadSheet costs less
        than 10% of what the "Big Boys" do but provides over 95% of their
        features (including compatibility with other spreadsheet packages
        via "DIF" files).



                                     Page 4






        2.0  GENERAL INFORMATION
        -----------------------------------------------------------------

        The  executable portion of EZ-SpreadSheet consists of two  files,
        EZS.COM  and  EZS.000.    EZ-SpreadSheet,   like  many   powerful
        programs, is too big to fit into memory and still leave you space
        to  work in.   EZ-SpreadSheet keeps part of itself in an  overlay
        file,  EZS.000,  which is called into your computer's memory only
        when  needed.    Keep  all parts of EZ-SpreadSheet  in  the  same
        directory.    This will eliminate a lot of unnecessary hassle for
        you.    You may change directories after starting  EZ-SpreadSheet
        because  EZ-SpreadSheet will  automatically  find its way back to
        the original directory for the overlay file This is also true for
        the  configuration  file,   EZ-Spred.CNF.   This file  holds  the
        information for your printer and screen setup.


        2.1  INSTALLATION OF EZ-SPREADSHEET (REGISTERED VERSION):

        Your EZ-SpreadSheet package should contain two diskettes  labeled
        #1 of 2 "ValueWare OK to Distribute" and #2 of 2 "Not ValueWare".
        MAKE BACKUP COPIES IMMEDIATELY of both these diskettes using  the
        DOS DISKCOPY command and store the originals in a safe place.

        Diskette System:

        Copy  all of the files from Diskette #1  to a formatted  diskette
        (if  you want to be able to boot your PC from the  EZ-SpreadSheet
        diskette, then add SYSTEM files and your own AUTOEXEC.BAT.   This
        is covered in your DOS manual).  Next copy all desired files from
        diskette #2  to your work diskette (at a minimum,  you must  copy
        EZS.COM and EZS.000).   This will override the Valueware  version
        of  EZS.COM and EZS.000,  giving you full access to  the  printer
        functions.    Copy  any spreadsheet from diskette #2  that  looks
        interesting to you onto your work diskette.   To run the program,
        just type "GO"  <cr>  (or enter).   However,if you want to bypass
        the documentation overview (which does make interesting reading),
        then type "EZS" <cr>.

        Hard Disk System:

        First, create a subdirectory called "EZS".  eg, at C> type MD\EZS
        <cr>. Copy all of the files from diskette #1 to this subdirectory
        followed by diskette #2.

        That is, put diskette #1 into drive A and type:
        COPY A:*.* C:\EZS <cr>

        Then do the save for diskette #2 and type:
        COPY A:*.* C:\EZS <cr>

        Make sure you log to the C:\EZS subdirectory:
        At C> type, CD\EZS <cr>

        You can then run EZS.COM or GO.BAT as per above.




                                     Page 5






        2.2  INSTALLATION OF EZ-SPREADSHEET (VALUEWARE VERSION):

        Follow  the same installation as above but refer only to diskette
        #1.   The ValueWare version of EZ-SpreadSheet consist of only the
        first  diskette  of the two diskette set provided  to  registered
        users.   The files will normally be combined into a .LBR or  .ARC
        file.   If the extension is .LBR then you must use either LU86 or
        LUE to "break out" the files from the library.   If the extension
        is .ARC then use ARC to "break out" the files.


















































                                     Page 6






        3.0  USING EZ-SPREADSHEET
        -----------------------------------------------------------------

        Insert the diskette containing EZ-SpreadSheet and type EZS.  Some
        nice  to  know information will come up.   Please note  that  EZ-
        SpreadSheet  is  a  ValueWare  product and  as  such  needs  user
        suggestions  for improvement.   We will try very hard to  include
        your suggestions in future versions of EZ-SpreadSheet.  Press any
        key  to  continue  from  the  opening  screen  into  the   actual
        spreadsheet.


        3.1  Getting Started

        What you see on the screen is only a small section (21  rows by 7
        columns)  of the entire worksheet.  Your worksheet can "grow"  to
        512   rows by 64  columns (which is nearly twice as large as  the
        largest  commercial spreadsheet available only a couple of  years
        ago.)    Several keys are provided to move your "viewing  window"
        around   within  the  larger  spreadsheet.    Additional   status
        information is also provided on the top and bottom of the screen.
        The  cursor  indicates where on the worksheet a number  you  type
        will be placed.

        You may scroll vertically or horizontally.   To scroll vertically
        press  the PgUp or PgDn keys.   This will scroll 20  rows  up  or
        down.    To scroll a single line,  move the cursor off the top or
        bottom of the screen, with the up or down arrow keys.   To scroll
        horizontally, press the Ctrl key and the left or right arrow keys
        at the same time.  All of the cursor movement keys will repeat if
        you hold them down.   You can "lock"  the screen on the currently
        displayed  section  of  the spreadsheet by pressing  the  "scroll
        lock"  key.   The "scroll lock"  may be activated by pressing the
        "Scroll Lock"  key,  an indicator will show this at the bottom of
        the screen.  When the "scroll lock" is NOT active, you can scroll
        right  or left by moving the cursor off the right or left of  the
        screen.    When "scroll lock"  is active,  the cursor will  wrap-
        around when moved off the sides of the screen.

        Status  information  appears on the top and bottom lines  of  the
        screen.   These lines show you:  the current cell,  the amount of
        free  memory  available,  the auto-calc indicator,   the  current
        marked  range,  the current drive and directory,  the Caps,   Num
        Lock,   and  Scroll Lock indicators.   On the second line of  the
        screen will appear messages and the numeric or formula content of
        the current cell.













                                     Page 7






        3.2  Field Entry Information

        In general,  you may move the cursor to any cell you desire,  and
        enter  the  text,   number or formula that needs to  be  in  that
        location.   What you type will first appear on the second line of
        your  computer screen.   This line is used as a status  area  and
        will  have various messages displayed here during your use of EZ-
        Spread.

        When  you  begin  to  enter something into  a  cell,   the  first
        keystroke is VERY important.   It will determine the type of item
        stored  in  the cell:  formulas begin with  the  '('   character,
        numbers with 0 thru 9, '+' or '-', text with any other character.
        If  you want to enter a text string that begins with a number,  0
        thru  9,   you  must  prefix it with a  single  quote  character,
        example: '109.  The quote will show on the screen, but not in the
        printed report.

        When  making  the  first keystroke of a  cell,   some  keys  have
        different meanings,  than on succeeding keystrokes.  For example,
        the  left  and right arrow keys will move the cursor  around  the
        worksheet,  but during the entry of data into a cell,  these keys
        will act to move the cursor within the cell, allowing you to more
        easily  edit the data.   Other keys that behave differently,  are
        the  Home,   End and "/"  keys.   The Home and End keys move  the
        cursor  to the beginning or the end of the worksheet,  but during
        the  entry  of  data,  they move to the beginning or end  of  the
        current cell.   Also during data entry,  the Esc key will act  to
        finish the entry and move to the cell below,  so that a column of
        numbers may be entered with the Num Lock turned on.

        EZ-SpreadSheet  gives you the ability to extend a cell out to  80
        characters.   This is very useful when you want a cell to contain
        a long formula or a long section of text.  Extending the width of
        one  cell  will  cause  those cells to the  right  of  it  to  be
        overwritten.    The cells you overwrite will be locked  out  from
        further data entry until you release the first cell (Ctrl+End).

        If you depress the "/"  key,  at the start of a cell,  a  list of
        commands  will  appear,   any of the displayed  commands  may  be
        executed  by  pressing  the indicated letter.    For  experienced
        users,  the commands may be entered directly,  without using  the
        "/" key, by pressing the Alt key and the command letter together.
















                                     Page 8






        3.3  Row Labels and Column Headings

        Worksheets  are  laid out in rows and columns.   This  wasn't  by
        chance, it really does make sense.  Each row in EZ-SpreadSheet is
        assigned a number,  and each column a letter.  Running across the
        top  of a typical worksheet will be a series of  column  headings
        (identified by leters) describing what is in the vertical columns
        located underneath them.   Running up and down the left side of a
        worksheet  is  a  series of row labels  (identified  by  numbers)
        describing  the  information  located  across from  them  in  the
        worksheet.   The intersections of the rows and columns are called
        cells.  Cells are identified by their row-column positions.  When
        you  start  creating your own worksheets,  you should make  these
        labels  and headings as descriptive as possible.   This will  all
        become  clear when you call up one of the example worksheets  and
        start working with it.











































                                     Page 9






        4.0  CURSOR CONTROL AND EDITING KEY DEFINITIONS
        -----------------------------------------------------------------

        The  following are a list of keys and the effect they have within
        EZ-SpreadSheet.    You will notice that each key has two possible
        actions depending upon whether you are in the data entry mode.

                                Action                  Action
        Key Name          During Data Entry           Otherwise
        -------------------------------------------------------------
        /               | Put a "/" character  | Display the command
                        | in the text of cell. | menu.
        -------------------------------------------------------------
        Up Arrow        | Finish entry and     | Move to cell above
                        | move to cell above.  | the one you are in.
        -------------------------------------------------------------
        Down Arrow      | Finish entry and     | Move to cell below
                        | move to cell below.  | the one you are in.
        -------------------------------------------------------------
        Left Arrow      | Move 1 character to  | Move to cell on the
                        | the left.            | left.
        -------------------------------------------------------------
        Right Arrow     | Move 1 character to  | Move to cell on the
                        | the right.           | right.
        -------------------------------------------------------------
        Home            | Move to the start of | Move to cell at the
                        | the cell.            | start of worksheet.
        -------------------------------------------------------------
        End             | Move to the end of   | Move to cell at the
                        | the cell.            | end of worksheet.
        -------------------------------------------------------------
        Ctrl + End      | Erase contents of    | Erase current cell
                        | cell from cursor to  | entirely.
                        | end of cell.         |
        -------------------------------------------------------------
        Ctrl +          | Finish entry and     | Scroll to the left.
            Left Arrow  | scroll to the left.  |
        -------------------------------------------------------------
        Ctrl +          | Finish entry and     | Scroll to the right.
            Right Arrow | scroll to the right. |
        -------------------------------------------------------------
        Tab             | Finish entry and     | Move to cell on the
                        | move to cell right.  | right.
        -------------------------------------------------------------
        Shift + Tab     | Finish entry and     | Move to cell on the
                        | move to cell left.   | left.
        -------------------------------------------------------------












                                     Page 10






                                Action                  Action
        Key Name          During Data Entry           Otherwise
        -------------------------------------------------------------
        Ins             | Toggle Insert Mode.  | Toggle Insert Mode.
                        | Fat cursor = Insert. | Fat cursor = Insert.
        -------------------------------------------------------------
        Del             | Delete character at  | Delete cursor at
                        | cursor.              | cursor.
        -------------------------------------------------------------
        Backspace       | Delete character to  | No action.
                        | left of cursor.      |
        -------------------------------------------------------------
        Enter           | Finish entry.  Stay  | No action.
                        | in current cell.     |
        -------------------------------------------------------------
        Esc             | Finish entry and     | Move cursor to the
                        | move to cell below.  | cell below.
                        | Nice for using NUM   |
                        | Lock mode with a     |
                        | column of numbers!   |
        -------------------------------------------------------------






































                                     Page 11






        5.0  LIST OF COMMANDS
        -----------------------------------------------------------------

        The following are a list of commands for EZ-SpreadSheet.  You can
        enter these commands in one of two ways.   The first way,  type /
        within the spreadsheet.   A  command menu will come up for you to
        select  the desired command.   Once you become familiar with  EZ-
        SpreadSheet you will be able to use the second method for command
        entry.    That is to simply hold down the Alt key and  press  the
        desired command letter.   You won't get a menu using this method.
        The commands are:


        COMMANDS:  With  Alt key or / brings up the command menu.


        X   - Exit to DOS.   If you haven't saved your worksheet then  you
              will be asked if you want to save it prior to exiting to DOS.

        Q   - Quit command menu and return to the worksheet.

        L   - List the files in the current directory.

        N   - New directory or disk drive.

        R   - Read a worksheet from disk into memory.

        S   - Store  a  worksheet from memory onto disk.

            Note:  Please  keep a close eye  on the free disk  space  and
                   don't  try to store a worksheet on a diskette that  is
                   already full!   More than likely,  EZ-SpreadSheet will
                   return  you to DOS if this happens.   We are  hard  at
                   work  on  a  program change to protect you  from  this
                   error.  If this does happen and you aren't returned to
                   DOS,   then use the N command to switch to a new  disk
                   drive or specify a drive extension as part of the file
                   name.    Be careful of wild-card characters (*  and ?)
                   in  response to file name prompts.   These are invalid
                   characters  but  may  be accepted by  DOS  and  create
                   undesired results.

            Note:  Both the  R  and S  commands  assume that the filename
                   extension  is .EZS if you don't specify one.   If  you
                   don't  want an extension then end the filename with  a
                   '.' and no extension will be used.

        E   - Erase the current worksheet from memory.   Be careful, this
            command really does work.










                                     Page 12






        G   - Perform  the calculations specified by your formulas.  Very
            useful  in big worksheets when you have turned off auto-calc.
            This  will  allow you to bring all the  calculations  in  the
            worksheet back up to date.

            Note:  The   worksheet   contents   are   not   automatically
                   recalculated  after  you  insert or delete  a  row  or
                   column.  You should use the G command to do this.

        P   - Print  the worksheet to disk file or printer.  This feature
            is limited in the ValueWare version.

        F   - Change cell format.  Each cell may have a different format.
            The  default  is  leading sign,  no comma,  and  no  currency
            symbol.   You may choose 1 of 6 different formats: financial,
            percent,  scientific,  hidden, date, and the default.  If the
            date format is chosen, the cell is treated as if it contained
            a  Julian date and then it is converted to one of three  sub-
            formats:  DD-MMM-YY, DD-MMM or MMM-YY.  You will be given you
            choice of these 3 date formats,  if you select the date type.
            If  the  financial format is chosen,  you will be  given  the
            choice of 4 sub-formats:

               A.  $1,000- .... Dollar sign and comma insertion.
               B.   1,000- .... Comma insertion.
               C.  (1,000) .... Dollar sign and comma insertion,
                                parentheses for negative.
               D. $(1,000) .... Comma insertion, parens for negative.

        W   - The  width  of each column defaults to 10,  but it  can  be
            changed  with  this command to any value between  0  and  30.
            After  setting  the width,  you will be asked if  the  column
            should be given the "blank zero" attribute.

            Note:  If  you choose a column width of 0,  then this has the
                   same  effect as if the whole column had  the  "hidden"
                   format.   Anything  in  a 0 width column or  with  the
                   "hidden" format, will appear on the status line at the
                   top  of  the  screen,  but  will  not  appear  in  the
                   worksheet.


        B   - Mark the start of the range at the current cell.

        K   - Mark the end of the range at the current cell.

        H   - You  may specify that columns are to be held static on  the
            left  of  the  screen and  not  horizontally  scrolled.   The
            maximum number of column you can hold is 4.










                                     Page 13






        I   - Insert  a Row or Column.   All formulas will be adjusted to
            reflect their new locations.  Absolute addresses may be used,
            by  placing  a '0' before the row.   For example  'C5'  is  a
            relative  cell address and would be adjusted if  needed,  but
            'C05'  is an absolute cell address and would not be  adjusted
            if  you  insert  a row or column.    Recalculation  does  not
            automatically  take  place after execution of  this  command.
            This command is very useful when you want to move a column or
            row  over  one position.   You can use this  command  to  get
            around  copying a portion of the worksheet over itself in  an
            attempt to make room for new information.  See the note under
            the  move and copy commands for further clarification on this
            process.

        D   - Delete  Row or Column.   All formulas will be  adjusted  as
            given above for 'I'.   If the range option is selected,  then
            the rows or columns that fall within the specified range will
            be deleted.

            Note:  Only rows or columns are deleted, not both at the same
                   time.  Recalculation does not automatically take place
                   after execution of this command.

        J   - Jump directly to a cell. This command gives you an easy way
            to  avoid  scrolling thru the worksheet when you  know  which
            cell you want to go to.

        M   - Move  the  section of the worksheet shown in the  indicated
            range  at  the  bottom of the screen to  the  current  cursor
            location.   This  command  allows  you  to  alter  the  range
            specification.   Formulas are adjusted as above for 'I'. Make
            sure  that  the  cell  or  cells  you  are  copying  to   are
            empty  (clear).  If you try to copy over cells which  already
            contain information,  unintelligible garble may result.   Use
            the  Delete command if necessary to clean up after  the  move
            command.

        C   - Copy the indicated range to the current location.  You will
            be  able  to alter the  range  specification.   Formulas  are
            adjusted as above for 'I'.   Make sure that the cell or cells
            you are copying to are empty (clear). If you try to copy over
            cells  with  current information,  unintelligible garble  may
            result. Use the Delete command if necessary to clean up after
            the copy command.

            Note:  You  cannot move or copy a section of a worksheet over
                   itself.   Make  sure  that the source and  destination
                   ranges   do  not overlap.    EZ-SpreadSheet will  give
                   you   a warning  message if you attempt this and  will
                   prevent  any  damage to the worksheet.     The  insert
                   command  will give you an easy workaround for this  in
                   many cases.







                                     Page 14






        O   - Sort  the indicated range into ascending order.   The  sort
            key  is the first column of the range and the rows within the
            range  are  arranged  into ascending sequence  based  on  the
            textual  content  of  the key column (the first  one  in  the
            indicated range).

        A   - Toggle auto-calculate.   If you have a large worksheet with
            many formulas,  it will save time to turn auto-calculate off,
            and  manually  calculate with the 'G' command only  when  you
            need the calculated information to be correct.

        Y   - Import  a  DIF(tm) format file.   DIF(tm) stands  for  Data
            Interchange Format and is commonly supported by many programs
            including 1-2-3(tm),  & Supercalc(tm).   The DIF(tm) supports
            only  the  storage  of  the  data,   so  the  format  control
            information  and  the formulas are not found in  the  in  the
            DIF(tm) file. The extension ".DIF" is used automatically.

        Z   - Export  a DIF(tm) format file.   Please read the  paragraph
            about for the 'Y' command.  The output file will contain data
            only,  no formulas or format control information.   Also, the
            DIF(tm)   format  is  not as efficient as the  EZ-SpreadSheet
            .EZS  format,   so  the exported file will probably be  about
            10%  to 300% larger than the original file.

            Note:  DIF  is  a trademark of Software Arts  Products  Corp.
                   1-2-3 is a trademark of Lotus Development Corp. A good
                   description of exactly what a DIF file is, can be hard
                   to come by.  Basically, a DIF file is similar to other
                   files   you have in EZ-SpreadSheet but  contains  only
                   values   or   labels   and   cannot   be    used    to
                   reconstruct    a worksheet.   It does not contain  the
                   formulas,  formats,  or  functions  that are  normally
                   stored is  a  regular worksheet  file.   DIF  files do
                   provide   the   means   by  which  you  can   transfer
                   information    from   your   worksheet    to     other
                   applications.     These  applications  can   be  other
                   spreadsheets  or even a BASIC  language  program  that
                   you   write   yourself   to access   the   DIF   file.
                   Support  of the Data Interchange Format gives you  the
                   potential   to   extend   the   capability   of    EZ-
                   SpreadSheet manyfold.

















                                     Page 15






        U   - You  can  control the screen colors and other  options  via
            this  command.   The colors are entered as numbers  from  the
            following list:

                    0 : Black             8 : Dark Grey
                    1 : Blue              9 : Light Blue
                    2 : Green            10 : Light Green
                    3 : Cyan             11 : Light Cyan
                    4 : Red              12 : Light Red
                    5 : Magenta          13 : Light Magenta
                    6 : Brown            14 : Yellow
                    7 : Light Grey       15 : White

            Note:  Other user installable options will be available under
                   the  Alt  U command menu in the  future.   Check  your
                   version  of  EZ-SpreadSheet using the Alt U command to
                   get the latest list.










































                                     Page 16






        6.0  FORMULAS
        -----------------------------------------------------------------

        Formulas are composed of operational symbols (like >, =, <), cell
        addresses (A1),  constants (3.14), and functions ((A1+A2)).  Each
        formula is enclosed within parentheses,  like this:   (A1+C2+F4).
        This  formula would take the content of the 3 cells and add  them
        together,   putting the result in the cell where the  formula  is
        located.   This all sounds very complex but is really quite  easy
        once you start using it.

        The following functions are available:

        Name      Description                             Usage
        ----      -----------                             --------
        ABS       Absolute value.                         ABS(p)
        ROUND     Rounded value.                          ROUND(p,prec)
        TRUNC     Truncated value.                        TRUNC(p,prec)
        SQRT      Square root.                            SQRT(p)
        SQR       Square.                                 SQR(p)
        MOD       The remainder of p1 divided by p2.      MOD(p1,p2)
        INT       Returns the integer portion of p.       INT(p)

        PI        3.1415926536                            PI
        SIN       Sine of angle in radians.               SIN(p)
        ASIN      Arc sine.                               ASIN(p)
        COS       Cosine of angle in radians.             COS(p)
        ACOS      Arc cosine.                             ACOS(p)
        TAN       Tangent of angle in radians.            TAN(p)
        ATAN      Arc Tangent.                            ATAN(p)

        LN        Natural Log.                            LN(p)
        LOG       Log base 10.                            LOG(p)
        E         2.7182818285                            E
        EXP       E raised to the p power.                EXP(p)

        NPV       Net present value of a series           NPV(i,r)
                    of future cash flows.
        PMT       Mortgage payment per period.            PMT(pa,i,n)
        PV        Present value of ordinary annuity.      PV(pp,i,n)
        FV        Future value of ordinary annuity.       FV(pp,i,n)
        RATE      Periodic rate needed to produce         RATE(fv,pv,n)
                    a future value.
        TERM      The number of payment periods required  TERM(pp,i,fv)
                    for an annuity to grow to a future
                    value.
        CTERM     The number of compounding periods       CTERM(i,fv,pv)
                    required for a present value to
                    future value.
        IRR       Internal Rate of Return.                IRR(g,r)









                                     Page 17






        Name      Description                             Usage
        ----      -----------                             --------
        AVG       The arithmetic average (mean).          AVG(r)
        COUNT     The number of items in range.           COUNT(r)
        MIN       The smallest number in range.           MIN(r)
        MAX       The biggest number in range.            MAX(r)
        VAR       The population variance.                VAR(r)
        STD       The population standard deviation.      STD(r)

        SYD       The depreciation for the specified      SYD(cst,sal,
                    period, using the "Sum Of The Years       lif,per)
                    Digits" method.

                  Note:  Sum of  the  years  digits  depreciation  is  an
                         accelerated   depreciation  method  derived   by
                         multiplying  the depreciable cost by a  fraction
                         which decreases each year during the useful life
                         of the asset.

        SLN       The "Straight-line" depreciation for    SLN(cst,sal,
                    1 period.                                 lif)

                  Note:  Straight-line       depreciation        provides
                         approximately   equal  amounts  of  depreciation
                         expense in each accounting period.   It  results
                         in  a linear or "straight-line," decline in book
                         value during the useful life of the asset.   The
                         amounts  of  depreciation will be the  same  for
                         equal time periods.

        DDB       The depreciation for the specified      DDB(cst,sal
                    period, using the "Double Declining       lif,per)
                    Balance" method.

        IF        Choose between two values.              IF(t,p1,p2)
                    p1 is returned if t is true,
                    p2 is returned if t is false.
        NOT       Reverse true and false values.          NOT(t)
        TRUE      Returns the value for true.             TRUE
        FALSE     Returns the value for false.            FALSE
        ERR       Returns the value for ERR.              ERR
        ISERR     Returns the value for true if the       ISERR(p)
                    parameter has the ERR value,
                    otherwise returns the value for
                    false.
        NA        Returns the value for NA.               NA
        ISNA      Returns the value for true if the       ISNA(p)
                    parameter has the NA value,
                    otherwise returns the value for
                    false.









                                     Page 18






        Name      Description                             Usage
        ----      -----------                             --------
        DATE      Returns the Julian date from the        DATE(y,m,d)
                    calendar date given as a parameter.
                    The year maybe between 1800 and
                    2100 and the date is measured in
                    days from December 31, 1899.

                  Note:  Date   assumes  that you give it a  valid  date.
                         That is: the year should be 1800-2100, the month
                         should  be 1-12,  and the day 1-31.   Valid date
                         example: DATE(1986,6,1).

        TODAY     Returns the Julian date for today.      TODAY
                    Taken from the DOS clock, so if
                    you have set it wrong, then this
                    will be wrong.
        DAY       Returns the day of the month,           DAY(p)
                    given the Julian date.
        MONTH     Returns the month of the year,          MONTH(p)
                    given the Julian date.
        YEAR      Returns the year, given the             YEAR(p)
                    Julian date.

        HLOOKUP   Table lookups find the largest table   HLOOKUP(trgt,tbl,
                    entry not greater than the target             ofs)
                    value.  The "HLOOKUP" function
                    defines a horizontal table.































                                     Page 19






        VLOOKUP   The "VLOOKUP" function defines a       VLOOKUP(trgt,tbl,
                    vertical table.                                ofs)

                  Note:  There   are   many  examples   in   the   sample
                         worksheets that accompany the program.

                  Note:  There is no SUM function, instead use the colon,
                         ":", as discussed below under symbols.

                  Where:  p,p1,p2  ...   Constants,   cell  addresses  or
                          algebraic expressions.

                i ......... Interest rate, may be any of the items
                              listed for "p" above.  Note: all
                              interest rates are stated in their
                              fractional format, i.e. "10% = 0.1".
                              Note: this is an interest rate per period
                              and not per annum, however if the period
                              in use is a year, then it is per annum.
                              If a month is the period in use, then
                              conversion from the yearly rate must
                              be done by division by 12.
                r ......... A range of cell addresses, i.e. "D4..H21".
                pa ........ Principle amount, may be any of the items
                              listed for "p" above.
                n ......... Number of periods, may be any of the
                              items listed for "p" above.
                pp ........ Payment per period, may be any of the
                              items listed for "p" above.
                g ......... A guess at the interest rate, usually
                              between 0.0 and 1.0.
                pv ........ A present value, may be any of the items
                              listed for "p" above.
                fv ........ A future value, may be any of the items
                              listed for "p" above.
                t ......... A logical expression whose result is
                              0.0 for false and non-zero for true.
                y,m,d ..... May be any value listed for "p" above.
                             They are the symbols for year, month and day.
                trgt ...... May be any value listed for "p" above.  It is
                             the value which is the target of the lookup.
                tbl ....... A range  of  cell addresses that  define  the
                             values to be searched to find the match  for
                             the target in a lookup.
                ofs ....... May be any value listed for "p" above.  It is
                              the value added to the matching entry's
                              coordinates to find the answer in a lookup
                              table.  Usually is a 1.
                cst ....... The cost of an asset.
                sal ....... The salvage value of an asset.
                lif ....... The life expectancy of an asset.
                per ....... The period for which depreciation is to be
                              calculated.
                prec ...... The precision desired for rounding or
                            truncating a number 'p'.




                                     Page 20






        Formulas may be quite complicated, an example is:

                    (A1+SIN(PI/2*(B2-C1)))

        The  only  limitations imposed are those of available memory  and
        the fact that no formula may be longer than 80  characters.   The
        financial and trig function are not recursive,  for example don't
        do this:  (IRR(IRR(.2,D4..D20),E2..M2)), it won't work very well,
        if at all.

        If  any of the formulas cannot calculate the answer,  for example
        if  you  ask for the SQRT of a negative number,  then the  result
        will be ERROR and you will see the word "ERR" in the result cell.
        ERR may also show up if you enter a division formula in which the
        denominator  (the  bottom  part  of  the  fraction)   includes  a
        reference  to  a  empty cell.   Sometimes the  ERR  message  will
        disappear as you continue to add information in the rest of  your
        worksheet,   adding the information the cell with the ERR  in  it
        needed to complete its' calculations.  The bottom line here is if
        you see ERR displayed in any cell, then something is wrong either
        in its formula or the information it uses.

        Finally, a formula may contain the following symbols:

                     ^      Raise to the power.
                     *      Multiplication
                     /      Division
                     +      Addition
                     -      Subtraction
                     :      Range summation
                     |      Logical OR
                     &      Logical AND
                     >      Greater than test
                     <      Less than test
                     =      Equal test
                     >=     Greater than or equal test
                     <=     Less than or equal test

        These are probably familiar,  with the exception of the colon ":"
        for range summation.   Let's say that you want to sum a column of
        numbers,  beginning at D1 and ending at D20, then this expression
        would sum the column, (D1:D20).

















                                     Page 21






        7.0  MISC INFORMATION
        -----------------------------------------------------------------

        7.1  Overwritten cells.

        EZ-SpreadSheet  will allow you to make text entries of any length
        up to a maximum of 80 characters, numeric entries may be up to 11
        characters.    Any  text entry that exceeds the cell  width  will
        automatically lock the adjacent cell on the right.  The lock will
        be  released when the length of the entry shrinks to fit within a
        single cell.


        7.2  The Range and commands using it.

        The  range is shown on the bottom left of the  worksheet  screen.
        It is of the form:  cell address..cell address.   If you have not
        set  the range,  it defaults to the beginning and ending cell  of
        the worksheet.  There are two methods of setting the range:  1st,
        you  can  make the beginning and ending cells with the Alt+B  and
        Alt+K commands,  2nd,  whenever one of the commands that use  the
        range is invoked,  you have the opportunity of changing the range
        by  entering  the new range.   For example the Copy command  will
        give  you a menu with 3 options:  Range,  Copy and eXit.   If you
        select  the  Range  option,  you will be allowed to enter  a  new
        range,   in  the  same format as displayed at the bottom  of  the
        screen.   The commands affected by the Range are:  Format,  Copy,
        Move and Print.































                                     Page 22






        7.3  Defining a worksheet.

        EZ-SpreadSheet  combined  with  your creativity can  be  used  to
        duplicate  anything  you're  doing  now  with  a  calculator  and
        multicolumn worksheet.

        To  start,   you label the columns and rows with text  or  number
        headings.    Enter the formulas into the cells in the  worksheet.
        The  results  are  quickly computed based  on  your  mathematical
        formulas  and  inserted into your worksheet.   If you  decide  to
        change  one  or more numbers,  an electronic spreadsheet  program
        will  automatically  recalculate  and alter  all  other  affected
        numbers.  In other words, what used to take you many days can now
        be  done  hours.    Yes,  worksheets can be used for  income  tax
        calculations!


        Other uses for spreadsheets include:

        Business:

        - Depreciation calculations/schedules
        - Marketing forecasts for new products (cost analysis)
        - Stock portfolio management
        - Sales commission register
        - Break-even point analysis
        - Job  costing.   How much it would cost you to a specific job if
          certain options were changes.   Spreadsheets are great at "what
          if" calculations.
        - Balance sheets
        - Inventory for very small businesses
        - Income statement

        Home/Personal:

        - Stock portfolio management
        - Tax worksheet
        - Keeping track of personal finances (home budget)
        - Property management (Do you have any rental property?)




















                                     Page 23






        7.4  Printer Setup.

        A SPECIAL NOTE TO UNREGISTERED USERS.  We hope that you find this
        program  useful.    Although  we do not limit any  of  the  prime
        functions,   we do not allow you to print to a file (which  would
        allow the use of one of the many "sideways"  programs).  The only
        other  limitation in the ValueWare version of  EZ-SpreadSheet  is
        that  the speed of printing (to a printer)  is limited after  the
        first 15 lines or 25% of the printout is completed.

        The  Print Command "/P",  or Alt+P,  allows printing to  a  file,
        setting a range, printing to the printer and Setup.

        If you select the Print command,  one of the options presented on
        the  Print menu is "Setup".   If you select the Setup option  you
        will be able to control the margins and dimensions of the printed
        report.  Also, you will be given the option called Control.   The
        Control  option allows you to specify printer setup control codes
        and printer exit control codes. These control codes are initially
        undefined,    but  you  may specify  whatever   necessary.    The
        convention  for  specifying  these codes is to use  the   decimal
        numbers representing the control codes separated by commas.   You
        can also put plain text in the control strings,  if you  surround
        the  text  with  "  marks.   For example:   "This  is  a  control
        string",12,12.    If this was the setup control string,  when the
        print began the program would send the following to the  printer:
        'This is a control string'  FF FF.   Of course,  the quotes would
        not  be sent,  and the FF is just a symbolic way to represent the
        form  feed character.   With this method,  you may  program  your
        printer in whatever way you wish.

        Printer dot commands:

        EZ-SpreadSheet allows 2 dot commands within a worksheet that will
        allow  you more control over your printer.   If you put .PAGE  in
        column A of any row,  it will cause a page break to occur at that
        place.    The remainder of the row with the dot command will  not
        print.   After you have entered .PAUSE in column A of a row, page
        breaks  will  cause a pause for you to insert the next  page  and
        give you an option to reprint a page or exit the print function.



















                                     Page 24






        7.5  Internal Rate of Return.

        This   function  provides  an  iterative  approximation  for  the
        interest rate which will produce a zero for the Net Present Value
        function.    The range for this function should  include  present
        cash flows as well as future cash flows.  The approach to finding
        the  zero is as follows,  14  loops thru the "Bisection  Method",
        followed  by  up  to 6 loops thru  the  "Modified-False  Position
        Method".    Usually  the  IRR function will  converge  to  within
        0.000001.   In some instances, where the cash flows turn negative
        in  a later period,  there are multiple solutions,   however  IRR
        finds  the closest one only.   Your guess input to this  function
        should be between 0.0 and 1.0.  In some cases,  the function will
        not converge,  either the solution is too small or too large,  in
        these  cases the function will return ERR.   Try  adjusting  your
        guess and recalculate.

        7.6  Autocalc modes.

        EZ-SpreadSheet calculates in two modes, Autocalc-ON and Autocalc-
        OFF.    Use Autocalc-ON,  to alter a few cells for automatic  re-
        calculation.     All  cells  affected  by  your  inputs  will  be
        automatically re-calculated and updated.  However,  if you have a
        lot  of  changes to make and the worksheet is large,   then  turn
        Autocalc-OFF.   This will save you time by not having to wait for
        each  individual calculation,  you can do them all at once  after
        until  you  have completed all changes.   Once again,   any  cell
        affected   by   your   inputs  will   be   re-calculated   either
        automatically or at your command.






























                                     Page 25






        8.0  EZ-SpreadSheet REGISTRATION -- $49.00
        -----------------------------------------------------------------

              BENEFITS:

              a.  Unique   Registration  Number.
                  
                  
                  You  will also receive the latest version of
                  EZ-SpreadSheet.

              b.  Printed users manual.

              c.  Free  phone support for 90 days.   After that,  you can
                  subscribe  for additional phone support for $49.00  per
                  year  (must  be purchased within  45  days).

              d.  Membership in the Worksheet Exchange Service.   We will
                  act  as  a focal point so members can  exchange  useful
                  worksheets.   Mail  in several of your  worksheets  (on
                  diskette),  and  we  will return your diskette  with  a
                  selection  of other worksheets in your requested  field
                  of interest.

        NOTE:  Add $6 shipping and handling to all above prices.
               Add $20 U.S. for foreign orders.
               UPS BLUE(2 day), add $10, UPS RED (1 day), add $15.
               Texas residents must add 8% sales tax.

        You  may also order EZ-SpreadSheet and EZ-Forms Executive  (Forms
        Generation  and  Management package)  together  for only  $109.
        Add appropriate shipping and handling.

        Send all registrations and inquires to:

                               EZX CORPORATION
                               P.O. Box 58177
                               Suite 1777
                               Webster, TX 77598-8177
                 713/280-9900  BBS:713/280-8180  FAX:713/280-8180

        Credit card orders ONLY: 1-800-US-EASY-X ext. EZS23

        We accept Visa,  American Express,  and Master Charge by mail and
        phone.  POs are accepted only from established companies and must
        be hard copy.   We will ship your copy of EZ-SpreadSheet normally
        within 48 hours.

        Pricing,   specifications,  and conditions are subject to  change
        without  notice.   We will always try to ensure you are aware  of
        any  changes in policy and try to provide you the greatest  value
        for your dollar.







                                     Page 26






        9.0  TUTORIAL AND SAMPLE WORKSHEETS
        -----------------------------------------------------------------

        Your  distribution  diskette  contains  two  example  worksheets:
        Example1.EZS and CashFlow.EZS.

        To  use EZ-SpreadSheet,  just put your working diskette (or  hard
        drive) in the proper directory and type EZS<cr>.   You will get a
        screen that shows CELLS A1..thru..G21.   Now press the "/" (right
        slash) key and you will bring up the command menu.  Press "R" and
        you will be prompted to type in the desired worksheet name.    In
        this  case,  type in Example1  <cr>.   The extension .EZS is  not
        required as this is automatically appended.

        To  use the template (or worksheet),  just use the cursor keys to
        position  the light bar or cursor over the appropriate  cell  and
        enter  numbers in each expense category for your monthly  budget.
        EZ-SpreadSheet  will calculate the total expenses and the  amount
        that you can save or must take from savings.

        Next  is  an  example  of  EZ-SpreadSheet's  ability  to  forward
        reference cells.  This simply means that you can put a formula or
        number  anywhere  in the worksheet and come up  with  the  proper
        results.    Experienced  spreadsheet users will  appreciate  this
        feature.

        An example of the Internal Rate of Return (IRR) Function is shown
        next. By definition, the IRR is defined as the interest rate that
        will  discount the cash flow to zero.   What this simply means is
        that  you  can quickly determine the true profitability  of  most
        business transactions. This is quite handy if you are doing break
        even analyses. The function is powerful, but it does take a while
        to calculate.

        The LOOKUP TABLE function can save a lot of time by  pre-defining
        certain  courses  of  action based on  the  circumstances.    For
        instance,  you may want to increase the annual percentage rate on
        car  loans  base  on the length of the loan as is shown  in  this
        example.

        With EZ-SpreadSheet, depreciation calculations are a snap.   Just
        put  in  the numbers and enter the desired functions  and  you're
        done.

        When you're done with the worksheet,  save it by typing Alt+S, or
        / followed by S.

        Now  lets  call  up CashFlow.EZS.   Just type Alt+R  followed  by
        CashFlow <cr>.  This is a rather large worksheet, so it will take
        almost a minute to load and calculate, so be patient.









                                     Page 27






        CashFlow  is  a 5 year quarterly cash flow and profit  projection
        for Example Co.   Inc.  As you can see,  some of the formulas can
        get rather complex, especially in the accounts receivable area.

        At  this  point it is appropriate to mention the  date  and  cell
        format  functions.    When using the date function,  remember  to
        change the cell format (Alt+F)  to correspond to the M,Y,D format
        you require.  Otherwise only a cryptic number will appear. By the
        way,   this number is useful in trying to determine the number of
        days  between any two dates.   Don't forget as I did,   that  the
        first  day of a month is 1 not 0 when you enter the date  formula
        in  a cell (example:  (DATE(86,6,1))  verses (DATE(86,6,0))   for
        first day).

        Some accountants and financial people prefer to see the  brackets
        around negative numbers,  (1000)= -1000.   You can use the format
        function  (Alt+F)  to customize the way information is  displayed
        within any cell.









































                                     Page 28




```
{% endraw %}

## FILE0695.TXT

{% raw %}
```
Disk No:  695                                                           
Disk Title: EZ-Spreadsheets                                             
PC-SIG Version: S1.7                                                    
                                                                        
Program Title: EZ-Spreadsheet                                           
Author Version: S23                                                     
Author Registration: $49.00                                             
Special Requirements: None.                                             
                                                                        
Designed to be easy-to-use spreadsheet for the first-time user.  EZ-    
SPREADSHEET has straight-forward commands which are logical and         
understandable.  It also has 512 column by 64 rows structure -- big     
enough for most users.                                                  
                                                                        
Construct your own spreadsheet or use one of the templates included.    
The applications provided range from budget worksheets and loan         
calculators to savings plans and financial statements.                  
                                                                        
A good tool for home and business.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## ORDER.DOC

{% raw %}
```

 EZ-SPREADSHEET AND EZ-FORMS EXECUTIVE REGISTRAION/ORDER SPREADSHEET

 For more info on EZX products, see EZXINFO.COM (self running program).

      DATE: 13-Feb-90             DELIVER TO:
 NEW REG. # S23XXXXXX             ___________________________________________
 FROM: EZX CORP. (WAS ENERCO)     ___________________________________________
 P.O. BOX 58177-S23               ___________________________________________
 WEBSTER, TX 77598                ___________________________________________
 PH:713/280-9900 FAX:713/280-0525 ___________________________________________
 CREDIT CARD ORDERS: 1-800-US-EASY-X ext.S23
 Please EZXINFO.COM for more Info. on EZX products.
 PRODUCT DESIRED:  (NOTE QUANTITY)
                                                          QUANTITY   EXT.
 **EZ-SPREADSHEET $49.00                                           $
 
 
 **EZ-FORMS EXECUTIVE  - $119.00                                   $    
 "The Ultimate Forms Generator, Manager and Filler"

 **EZ-InFORMa dB - $69 Introductory Pricing                        $    
 
 **ONE YEAR OF PHONE SUPPORT. YOU PAY FOR    EZS $49               $     
   CALL. RETURN CALLS ARE COLLECT.           EZFX $119             $     
 **ADDITIONAL SUPPORT AVAILABLE AT $1 PER
   MINUTE, 15 MIN. MINIMUM, VISA/MC/AX ONLY.
                                             MINIMUM
 SHIPPING AND HANDLING: ADD $6 USA-48        AMOUNT-->>       6.00       
 ADD $10/UPS BLUE(2 DAY), $20/ RED (1 DAY)
 ADD $20OR EX-USA SHIPMENTS, $10 /CANADA.
 SORRY< NO COD's                             SUBTOTAL                   
 
                       TOTAL TO TEXAS RESIDENTS (8% SALES TAX)          
                       TOTAL TO ADDRESSES OUTSIDE OF TEXAS.             
 
 METHOD OF PAYMENT:    CHECK [ ]  CHARGE [ ] CASHIERS CHECK [ ]    M.ORD. [ ]
 VISA [ ], MASTERCARD [ ], AX [ ], CARD #    1232222222222222      EXP.  /
 CHECK #_______________           P.O. # ___________________________
 AUTO CODE:___________ PHONE # REQUIRED ON ALL CHARGES (___)___-_____
 
 SIGNATURE: X________________________________________________________________
 
 TERMS: ALL MAIL AND PHONE ORDERS MUST BE PREPAID. CHECKS TAKE AT LEAST 10
        BUSINESS DAYS TO CLEAR. ALL ORDERS ARE SHIPPED AS SOON AS PAYMENT IS
        RECEIVED (CHECKS MUST CLEAR BANK).   
        Subject to change without notice.    
 
 WOULD YOU PLEASE ANSWER SOME QUESTIONS FOR US???????
 WHAT TYPE OF COMPUTER ARE YOU USING? ______________________________________
 HOW MUCH MEMORY DOES IT HAVE? _____________________________________________
 WHAT TYPE OF PRINTER IS ATTACHED? _________________________________________
 HOW DID YOU FIND OUT ABOUT EZ-XXXXX? ______________________________________
 HOW CAN WE IMPROVE EZ-XXXXX? ______________________________________________
     FEEL FREE TO ADD MORE PAGES.

 THANK YOU.   EZX Publishing.     FAX order to: 1-713-280-0525

```
{% endraw %}

## SIDERITE.DOC

{% raw %}
```

SideRite v1.0 is provided by EZX Corporation for your convenience.  It is
a program to permit sideways printing.  Version 1.0 of SideRite is very
limited (no character graphics) and is provided on an "as is" basis.  SideRite
works ONLY with text files and Epson printers.  If you want to use SideRite to
print forms created under EZ-Forms, first export the form WITH character
graphics translation before trying to print it.

Usage:  SideRite filename
Where:  filename is the name of the file to be printed
        sideways to an Epson printer using LPT1:

EZX Corporation is actively working on a complete sideways printing program.
Until then, we wanted to provide you some capability in that area without
you having to purchase SideWays 3.0 (tm).

Look for full capability in the sideways printing area in the near future.


                                         David Black
                                         Software Development Manager
                                         EZX Corporation

```
{% endraw %}

## SOFTPERF.DOC

{% raw %}
```
----------------------*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*------------------------
----------------------*  Software Performance Report  *-----------------------:
----------------------*...............................*-----------------------:
                                                                              :
       NAME                            MAIL TO:  EZX Corporation              :
            --------------------                 P. O. Box 58177              :
                                                 WEBSTER, TX  77598           :
    ADDRESS                                                                   :
            --------------------       PRODUCT: _____________________________ :
    C,S,Z                              SERIAL NUMBER:                         :
            --------------------                     ------------------------ :
    Phone # (   )    -      When can you be reached?                          :
------------------------------------------------------------------------------:
  Please describe your equipment configuration.  If you are reporting a       :
  problem, please describe the sequence of steps we can use to duplicate the  :
  problem.  If you have some new features you would like to see in EZ-Forms   :
  Executive, then describe those features as clearly as possible.             :
                                                                              :
  Computer:  Brand name?                     Model number?                    :
                          ------------------               ----------------   :
             Amount of RAM?       K   Number of disk drives?                  :
                            -----                            --------------   :
             Any memory resident software or device drivers (if so, what)?    :
             (Try running without any if your system seems balky.)            :
                                                                              :
             --------------------------------------------------------------   :
                                                                              :
             --------------------------------------------------------------   :
                                                                              :
             Number of floppy drives?         Number of hard disks?           :
                                      ------                        -------   :
                                                                              :
  Printer:   Brand name?                     Model number?                    :
                         -------------------               ----------------   :
             Serial or parallel?             Which port?                      :
                                 ----------- (LPT1,2,etc) -----------------   :
                                                                              :
 Video card:  Mono  [ ]               Video monitor:  IBM Mono  [ ]           :
              CGA   [ ]                               Color CGA [ ]           :
              EGA   [ ]                               Color EGA [ ]           :
              Herc  [ ]                               Composite [ ]           :
              Other [ ]                               Other     [ ]           :
              Desc:                                   Desc:                   :
                   ------------------                       ----------------- :
                                                                              :
  Feel free to list any comments below.                                       :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
  -------------------------------------------------------------------------   :
                                                                              :
-------------------------------------------------------------------------------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0695

     Volume in drive A has no label
     Directory of A:\

    BALSHEET EZS      1469   6-10-86  10:47p
    CASHFLOW EZS     15344   5-06-86   9:12p
    EXAMPLE1 EZS      4494   5-18-86  10:13p
    EZS      000     67584   2-15-90  10:55p
    EZS      COM     55595   2-15-90  10:55p
    EZS      DOC     62593   2-13-90   7:03p
    EZXINFO  COM     20832   2-28-90   9:28a
    FINSTMT  EZS      3954   6-10-86  10:39p
    GO       BAT        77   3-07-89   4:47p
    INCOME   EZS      6638   6-03-88   9:21a
    METRICNV EZS      3360   6-10-86   9:11p
    ORDER    COM      6122   2-13-90   6:58p
    ORDER    DOC      2945   2-13-90   6:57p
    ORDER    EZS      3314   2-13-90   6:38p
    README   COM      6523   2-28-90   5:46p
    SAMPLE   EZS       568   6-03-88   9:20a
    SIDERITE DOC      1032  12-21-86   7:05a
    SOFTPERF COM      8371   3-07-89   4:43p
    SOFTPERF DOC      5182   3-07-89   4:42p
    FILE0695 TXT      1851   7-09-90   6:21p
           20 file(s)     277848 bytes
                           33792 bytes free
