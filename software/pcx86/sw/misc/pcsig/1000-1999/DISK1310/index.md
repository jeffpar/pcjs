---
layout: page
title: "PC-SIG Diskette Library (Disk #1310)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1310/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1310"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-PORTFOLIO AND INTCAL"

    INTCAL (INTEREST CALCULATOR) can determine the present and future
    values
    of a series of equal payments for capital recovery or for a specific
    future amount.
    
    The program explains compound-interest transactions, what things will
    cost and earn, and can help make difficult financial decisions easier.
    Asking only two or three questions, INTCAL accurately calculates the
    answer.
    
    PC-PORTFOLIO is a database designed specifically for the collection and
    analysis of financial data for blocks of stocks, bonds, notes, mutual
    funds, and other securities.
    
    While it does not make buy-or-sell recommendations, it does allow the
    investor to collect and view financial data from three aspects: the data
    can be inspected through a history editor; the last 53 records in a
    portfolio can be graphically viewed on screen; or closing prices and
    hi-low prices are graphed while volume of sales are shown.  In addition,
    summary reports are compiled.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1310.TXT

{% raw %}
```
Disk No: 1310
Program Name: INTCAL version 1.0, PC-PORTFOLIO version S.1.0
PC-SIG version: 1

INTCAL explains to people involved in compound-interest transactions
what things will cost and earn and helps make difficult financial
decisions easier.  Asking only two or three questions, INTCAL accurately
calculates the answer.  The program is capable of determining the
present and future values of a series of equal payments for capital
recovery or for a specific future amount.

PC-PORTFOLIO is a database designed specifically for the collection and
analysis of financial data for blocks of stocks, bonds, notes, mutual
funds and other securities.  While it does not make buy-or-sell
recommendations, it does allow the investor to collect and view
financial data from three aspects: the data can be inspected through a
history editor; the last 53 records in a portfolio can be graphically
viewed on screen; or closing prices and hi-low prices are graphed while
volume of sales are shown.  Lastly, summary reports are compiled.

Usage:  Financial calculator, Financial Analysis.

Special Requirements:  A CGA adapter.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for INTCAL, $25.00 for PC-PORTFOLIO.

File Descriptions:

README   DOC  Registration information.
INTCAL   EXE  Main program.
INTCAL   BAS  BASIC code.
INVEST  <DIR> Data directory.
PCP      EXE  Main program.
PCP      DOC  User guide.
CONFIG   PCP  PCP configuration file--must be in current directory when
              PCP is loaded.
README        Directions for printing this document and starting PCP.
STARTUP       Startup message.  Must be in current directory when PCP is
              loaded.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## PCP.DOC

{% raw %}
```

PC-Portfolio Version S.1.0                                         Users Guide

                          PC-Portfolio Version S.1.0
                        Copyright F. Christopher 1988
                             All Rights Reserved




      User support

      If you find this software useful in your work please register. A
      suggested donation of $25.00 accompanied by the registration form
      at the end of this manual will entitle you to a disk with the
      latest version of PC-Portfolio and a reduced price on future
      versions.

      License

      This software is protected by the United States Copyright law.
      The author licenses this software to you for your personal, non-
      commercial use. You may copy it  and transfer it to another
      person at no charge. You may not alter it or the accompanying
      documentation.

      Disclaimer

      This software is provided "as is" without warranty of any kind
      either expressed or implied, including but not limited to, the
      implied warranties of merchantability or fitness for any
      particular purpose. In no event will the author be liable for any
      damages, including any lost profits, lost savings or other
      incidental or consequential loss or damages arising out of the
      use of or the inability to use this software.
























PC-Portfolio Version S.1.0                                               i

PC-Portfolio Version S.1.0                                         Users Guide


                       PC-Portfolio Version S.1.0
                            Table of Contents



          Introduction  .....................................  1
          Required Equipment  ...............................  1
          The Distribution Disk  ............................  1
          General  ..........................................  1
          The Main Menu  ....................................  3
            Edit  ...........................................  3
            Graph  ..........................................  3
            Portfolio  ......................................  4
              Update  .......................................  5
              Auto/Man  .....................................  5
              Edit  .........................................  5
              Graph  ........................................  5
              New Port  .....................................  6
              Report  .......................................  6
              Quit  .........................................  6
            Utilities  ......................................  6
              Copy  .........................................  6
              Delete  .......................................  6
              Options  ......................................  7
              Rename  .......................................  7
              Quit  .........................................  7
            Master  .........................................  7
            Quit  ...........................................  8
          Usage and Examples  ...............................  8
          Registration Form  ................................  9

























PC-Portfolio Version S.1.0                                               ii

PC-Portfolio Version S.1.0                                         Users Guide


      - Introduction -

      PC-Portfolio is a database designed specifically for the
      collection and analysis of financial data. PCP allows the user to
      organizes data into lists called portfolios, making updates much
      easier. A portfolio may include stocks, bonds, notes, mutual-
      funds or other portfolios. The program is menu driven for ease of
      use.

      PC-Portfolio does not make buy or sell recommendations, instead
      it gives you the ability to easily collect and view financial
      data.  Interpretation of the collected data is the responsibility
      of the user.

      PC-Portfolio provides three views of the collected data. They are:

      1) The History editor  -  allows you to inspect any record in an
                                equity or portfolio history file.
      2) The graphics routine - displays the last fifty three records in
                                an equity or portfolio history file.
      3) The portfolio report - compiles a summary report for a portfolio

      - Required Equipment -

      IBM PC or equivalent with 256k of memory one floppy a color
      graphics adapter (CGA) and MS-DOS 2.0 or higher.

      - The Distribution Disk -

      \              The root directory

       PCP.EXE       The executable PC-Portfolio.
       CONFIG.PCP    PCP configuration file - must be in the current
                     directory when PCP is loaded.
       STARTUP       Start up message - must be in the current
                     directory when PCP is loaded.
       PCP.DOC       This document.
       README        Directions for printing this document and starting PCP.

      \INVEST        The data directory

       *.DAT         Example history files.
       *.IDX
       *.POR         Example portfolio files.
       MASTER.PCP    master file - contains one record for each equity
                     and portfolio file.

      - General -

      Great care has been taken to insure consistency in the design of
      each menu. There are two types of menu, the  option menu and the
      data entry menu.

      The option menus allow the user to select from a list of items by

PC-Portfolio Version S.1.0                                            Page   1

PC-Portfolio Version S.1.0                                         Users Guide

      either entering the first letter of the item or using the cursor
      control keys to position the highlight on an item and pressing
      enter. All menus are circular, that is, if the highlight is on
      the last item in the menu and the down arrow key is pressed the
      highlight will move to the first item on the menu. The home and
      end keys may be used to position the highlight on the first and
      last items of the menu respectively.

      Data entry menus are used to add, delete, modify and view records
      in the database. Function keys are used to select the operation to
      be preformed on the displayed record. Specifically: F1 saves, F2
      deletes, F3 displays the next record, F4 displays the previous
      record, F5 searches for the nearest key and F6 positions the
      file at it's first record or "rewinds" the file. All files are
      circular. If you are at end of file selecting F3 will display the
      first record and F4 will display the last record when you are at
      the beginning of file. The escape key will always take you to the
      previous menu and Ctrl C will close all files and return you to
      DOS.

      Data entry menus are made up of fields. The keyer moves from
      field to field by using the up/down arrow keys, the enter key or
      the tab back-tab key. Data menus are also circular, entering data
      in the last field does not save the data; you must select F1 to
      save. Fields which contain information may be replaced or
      modified (edited).  The editing keys are right/left arrow for
      positioning within a field, back space and delete to remove
      characters, and the home/end keys to position at the beginning
      and end of a field respectively. If the cursor is at the end of a
      field delete will clear the field otherwise it will delete the
      character under the cursorn.  When editing a field characters
      entered by the user are normally inserted at the cursor and the
      rest of the field is pushed right to make room for them . If
      however, you wish to overwrite characters the editing mode may be
      toggled by pressing the insert key. When a field is full the bell
      will sound if an attempt is made to enter additional characters,
      the field is not terminated when full, all fields must be
      terminated with a return. One of the fields is always the key to
      the data-base and must be entered, the other fields are optional.
      Key fields will be discussed in detail later.

      Two last points, first line 25 of the display is used for error
      messages or to prompt the user for additional information when
      required.  Second, function key 10 (F10) will produce a listing
      of the data directory when the cursor is in a field or prompt
      which requires a file name. Once the directory has been displayed
      you may select a file name by positioning the cursor and pressing
      enter.  Esc will return with no selection. F10 will also return
      the system date if the cursor is in a field or prompt which
      requires a date. Note that all dates are enter as MM/DD/YY.






PC-Portfolio Version S.1.0                                            Page   2

PC-Portfolio Version S.1.0                                         Users Guide

      - The Main Menu -

      The main menu offers six options they are:

      Edit            Calls the history record editor.
      Graph           Displays the last fifty three records
                      of the selected history file.
      Portfolio       Selects the portfolio options menu.
      Utilities       Selects the utilities option menu.
      Master          Calls the master file record editor.
      Quit            Exit to the system.

      Note: The master menu may be called by Edit, Graph or Portfolio
            if no master record exists for the selected history or
            portfolio file.

      A detailed description of each option follows.

      Edit

        The history editor is used to add, delete and edit records in
        any history file. Each record contains six fields. The fields
        are Date, HI, Low, Close, Volume and P/E. History files are
        actually made up of two files, the index (.IDX) file contains
        data required to access the data (.DAT) file by key or
        sequentially.

        When the Edit option is selected the user will be asked to
        enter the symbol of the history file to be edited. The symbol
        must be a valid DOS file name of eight characters or less. If
        the file already exists but you have forgotten the symbol F10
        will produce a listing of valid files from which you may chose.

        When a valid symbol has been given the edit menu will be
        displayed with the first record of the file, if available. All
        history files are keyed on and sorted by date; if a new record
        is to be entered position the cursor and enter the date in the
        form MM/DD/YY or press F10 for the system date.  If the date
        already exists the data will be displayed if not the remainder
        of the menu will be cleared and "new entry" will appear in the
        lower left corner of the screen. The other fields on the menu
        are optional and numeric only, any attempt to enter alphabetic
        characters will fail and the bell will sound. To modify a field
        in an existing record select the record by entering the date or
        by using F3 and F4, move to the field in question and using the
        edit keys make the change. Remember to save the record with F1.

      Graph

        The purpose of graphics in a financial package is to display as
        much data as possible in the hope that a trend can be detected.
        For this reason a compact form of display has been used.

        When the Graph option is selected the user will be asked to
        enter the symbol of the history file to be graphed. As in the

PC-Portfolio Version S.1.0                                            Page   3

PC-Portfolio Version S.1.0                                         Users Guide

        edit option the symbol must be a valid DOS file name of eight
        characters or less, F10 will produce a list of existing files
        from which you may select.

        Once a file has been selected a graph of the last fifty three
        entries will be displayed. The graphics screen will be split
        into two parts the top or larger section will display the
        financial data and the lower section will display the volume.
        The small horizontal bars in the financial graph represent the
        closing price, the vertical bars represent the price range
        given by the hi-low fields. The last record displayed in the
        graph will have a box around it and the contents of the record
        will be displayed at the bottom of the screen. The registered
        version of PCP will allow the user to move the box with the
        left/right arrow and home/end keys. When the first or last
        entry is boxed the left/right arrow will cause the
        previous/next fifteen records to be displayed, if available.

        In the registered version of PCP a trend line (floating
        average of the closing prices) will overlay the graph of the
        hi, low and close data.  The number of periods for the trend
        line is set in the options menu. If the number of periods is
        set to zero no trend line will be drawn. A setting of one will
        produce the trend line only.

        No provision has been made for printing the graph. However, DOS
        does have the capability of printing a graphics screen when the
        "PrtSc" key is selected. Before using the "PrtSc" key the
        appropriate driver for your printer must be loaded, look on
        your DOS disks for a series of files with the name PSCXXXX
        where XXXX represents your printer manufacturer.


      Portfolio

        The primary difference between PC-Portfolio and other financial
        packages lies in it's ability to handle portfolios. A portfolio
        is simply a list of equity symbols on which you wish to collect
        or display data as a block. A portfolio may include stocks,
        bonds, notes, mutual-funds or other portfolios.

        When the Portfolio option is selected the user will be asked to
        enter the symbol of the portfolio file.

        The portfolio menu offers seven options they are:

        Update        Initiate a manual/automatic update of the portfolio.
        Auto/Man      Select the mode for update.
        Edit          Edit the selected portfolio.
        Graph         Graph the selected portfolio.
        New Port      Change the selected portfolio.
        Report        Generate a summary report for the selected portfolio.
        Quit          Exit the portfolio menu.



PC-Portfolio Version S.1.0                                            Page   4

PC-Portfolio Version S.1.0                                         Users Guide

        Update

          When the Update option is selected the user will be asked to
          enter the date for the update - F10 for the system date.

          If the manual mode has been selected PCP will take you
          through the history editor for each of the equities in the
          portfolio.

          Once the edit menu has been displayed the user can either
          make a new entry in the file and save it using F1 or display
          an existing entry and press the Esc key. In either case the
          displayed data will be used to build a new record for the
          portfolio history file and the editor will go to the next
          equity in the portfolio. When all of the equities in a
          portfolio have been updated you will be returned to the
          portfolio menu.

          If the automatic mode has been selected PCP will sequence
          through all of the history files selecting the record with
          the given date or the latest record for the update.

          In either mode a new record will have been added to the
          portfolio history file. The new record will contain the hi,
          low, close and volume totals for all equities included in the
          portfolio.  Note that a portfolio history file is identical
          to a equity history file and may be edited by the history
          editor.

        Auto/Man

          Selects the mode for update. When the highlight is moved to
          this option only the selected mode will be highlighted. To
          toggle the mode press enter.

        Edit

          This is the second editor in PCP, it is used to build or edit
          a portfolio file.  The order of the symbols in the portfolio
          determines the order of the update, so take the some time now
          and think before starting to build a new portfolio file. Each
          entry in the portfolio file must be a valid DOS file name of
          eight characters or less. F10 will produce a list of existing
          files from which you may choose. Note the list of valid
          function keys at the top of the menu, remember to save each
          new entry by selecting F1.

          Once the portfolio file is complete the update option may be
          used to start building a portfolio history file.

        Graph

          Graph the selected portfolio history file.



PC-Portfolio Version S.1.0                                            Page   5

PC-Portfolio Version S.1.0                                         Users Guide

        New Port

          Select a new portfolio without returning to the main menu.

        Report

          When this option is selected a summary report will be
          compiled for the current portfolio. The Report may be
          displayed on the CRT or output to the printer at the users
          option, you will also be asked to enter the date for the
          report; F10 for the system date as usual. The report routine
          will select data from the history files in the portfolio by
          date, if no record exists for the given date the last record
          in the file will be used.

          The registered version of PCP includes a separate report
          utility which generates reports for the history and master
          files as well as the portfolio summary.

        Quit

          Return to the main menu.

      Utilities

        The Utilities menu offers five options. They are:

        Copy          Copy any part of a history file.
        Delete        Delete any file in the data directory.
        Options       Select printer options and customize PCP.
        Rename        Rename any file in the data directory.
        Quit          Return to the main menu.

        Copy

          This option allows the user to copy any part of a history
          file.  When the copy option is selected the user must specify
          both the source and destination files. If the destination
          exists it will be cleared before the copy starts. Next the
          starting date for the copy must be selected, if you wish to
          start the copy with the first record of the file enter a
          return.  Last, the ending date must be entered, if you wish
          to copy to the end of file enter a return.

        Delete

          To delete both parts of a history file enter the equity
          symbol when asked for the file name. If you wish to
          delete any other file you must enter both the file name and
          it's extension. For example: if the portfolio file MYPORT is
          to be deleted you must enter "myport.por" when asked for the
          file name.




PC-Portfolio Version S.1.0                                            Page   6

PC-Portfolio Version S.1.0                                         Users Guide

        Options

          The options menu allows the user to customize the appearance
          of PCP and select printer options. This menu does not use the
          function keys, simply make the desired changes and hit Esc.
          Be sure to terminate the last change with a return.

          The option fields are as follows:

          Background color      Sets the background color for the menus.
                                Valid colors: black to lightgray. See menu
          Character color       Sets the character color for the menus.
                                Valid colors: black to white. See menu.
          Path                  Sets the path to the DOS directory you
                                wish to use for all data files. Leave
                                this field blank to use current directory.
          Printer Port          Sets the DOS printer port. Valid
                                selections are:
                                \dev\lpt1     (parallel printer #1)
                                \dev\lpt2     (parallel printer #2)
                                \dev\lpt3     (parallel printer #3)
                                \dev\com1     (serial printer #1)
                                \dev\com2     (serial printer #2)
                                \path\filename.ext (output to disk file)

        Rename

          To rename both parts of a history file enter the equity
          symbol when asked for the file name. If you wish to rename
          any other file you must enter both the file name and it's
          extension. see the example under delete.

        Quit

          Returns you to the main menu.

      Master

        The master file has one record for each equity or portfolio.
        The key field is the equity symbol, all other fields are
        optional. Note the list of function keys at the top of the
        menu. As usual the system date may be inserted in either date
        field by positioning the cursor and selecting F10.

        Much of the data entered here is needed to compile the reports
        available in PCP, If they are not entered their value is zero.

        The master fields are as follows:

        Stock name            26 character alphanumeric name.
        Stock symbol          Key field, must be a valid DOS file name.
        Dividend              Dividend paid per share.
        Category              Used to select equities for reports.
        Bought date           Date the equity was purchased.
        Sold date             Date the equity was sold (blank if still

PC-Portfolio Version S.1.0                                            Page   7

PC-Portfolio Version S.1.0                                         Users Guide

                              held).
        Cost                  Cost per share.
        Sales price           Sale price per share.
        Number of shares      Number of shares currently held.
        Beta                  Ratio of price variations relative
                              to the market.
      Quit

        Exit to DOS.

      - Usage and Examples -

      I have included an example of the way I use PC-Portfolio in the
      \INVEST directory of the distribution disk as a guide only.

      In my case there are a number of stocks which I follow but do not
      own, in addition I keep a history of two commonly followed market
      indices. A portfolio file called UPDATE.POR lists all of the
      things I wish to update regularly including the stocks I actually
      own. A second portfolio file MYPROT.POR lists only those equities
      I actually own. As a rule I use UPDATE to do a manual update
      weekly and follow that with an automatic update of MYPORT.  The
      history files UPDATE.DAT and UPDATE.IDX contain no useful
      information and may be deleted periodically. In addition there is
      a third portfolio which I do not update but keep for
      completeness, it is included in MYPORT and contains a list of
      bonds it's name is BONDS.POR. Once MYPORT has been updated I print
      a copy of the portfolio report and display a graph of MYPORT.

      One last suggestion; by including Hi, low and closing balances
      from your checking and credit card accounts it is possible to get
      net worth reports using PC-Portfolio, of course all liabilities
      such as credit cards must by entered as negative numbers.

      Warning the history (.DAT and .IDX) files are extremely sensitive
      to hardware errors and power failures these files should be
      backed up regularly. A recovery routine is provided with the
      registered version of PC-Portfolio.

      Questions, comments, suggestions and bug reports should be sent to:

      F. Christopher
      1208 N. Easy St.
      Payson, AZ. 85541












PC-Portfolio Version S.1.0                                            Page   8

PC-Portfolio Version S.1.0                                         Users Guide


      Registration Form

      Name _________________________________________________________

      Street _______________________________________________________

      City ______________________________ State ______ Zip _________


      Signature ____________________________________ Date __________

      Make check payable to Frank Christopher and mail with this form to:

      F. Christopher
      1208 N. Easy St.
      Payson, AZ. 85541







































PC-Portfolio Version S.1.0                                            Page   9

```
{% endraw %}

## README.DOC

{% raw %}
```
                                


                 * * * * * * * * * * * * * * *
                 *                           *
                 *           INTCAL          *
                 *                           *
                 *    Financial Calculator   *
                 *         Version 1.0       *
                 *                           *
                 *      Copyright 7/26/88    *
                 *        Scott G. Hix       *
                 *                           *
                 * * * * * * * * * * * * * * *



     The INTCAL Financial Calculator was designed to handle a
variety of calculations involving common compound interest
functions. The program was designed not as a high level financial
analysis tool for the professional finance guru, but as an easy
to use tool to aid in the normal every day financial decisions
that we must all make. The initial reason for my writing the
program was that I was tired of digging out my interest formulas
or tables every time I needed information about a loan, a savings
schedule, a comparison of cash flows, etc. The program is
designed with "ease of use" as the first criteria. 

     INTCAL is completely menu driven and requires little, if
any, computer knowledge other than how to turn on the computer
and load the program of course. Help screens are available by
pressing Function key "F1" while in the Main Menu screen. These
screens explain each function available and give examples of
their use.

     INTCAL may be run from the floppy disk or from your fixed
disk. To start intcal simply type INTCAL and press ENTER. The
program is self explanatory from that point. You may exit the
program by holding the "Ctrl" key down and pressing "Q".

          

                        LICENSE AGREEMENT

     INTCAL.EXE Version 1.0 is copyright protected and by using
this program you agree to the following terms. Users may copy the
program and give it to others but they may not:

* Modify the program or this documentation in any way.

* Sell or trade the program for money or other valuable  
  consideration, except for a nominal charge for postage,  
  handling, and materials.

* Remove reference to the author or the program copyright in the 
  program or in the documentation.

Also, the user agrees to register his copy of the program after a
reasonable period of use if he intends to continue using the
program. This software is not public domain and is not intended
to be free. You are free to use the program on a trial basis to
determine if the program is satisfactory for your purpose. If so,
you are expected to register your copy. If you find the program
unsatisfactory for your purpose, you must destroy the copy or
pass it along to someone else. 

     To register your copy of the program simply send your name,
address, and $10.00 to:

               Scott G. Hix
               Rt 2 Box 700
               Commerce, GA 30529

You will then be notified of any updates to the program or
additional utilities which become available.  

     Do not worry about viruses, trojans, or other nasty tricks
such as mind police, crazed silicon dwarf mites, or simple
harassment to entice you to register your copy of this program. I
do not believe in these tactics. In my opinion, shareware should
be based on the honor system alone and only you will know if you
are illegally using my software. If you find problems with the
software or think of useful additions I would like to hear from
you, and you are requested to drop me a note at the above
address.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1310

     Volume in drive A has no label
     Directory of A:\

    INTCAL   BAS     31841   9-07-88  10:57p
    INTCAL   EXE    113519   9-07-88  11:03p
    README   DOC      3648   9-07-88  11:35p
    FILE1310 TXT      1839   2-23-89   1:40p
    CONFIG   PCP        64   8-22-88  10:58a
    PCP      DOC     26036   8-31-88   8:01a
    PCP      EXE     93374   8-29-88   4:56p
    README             195   8-22-88  12:43p
    STARTUP            327   8-29-88  11:03a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1310   2-21-89  11:52a
    MANUAL   BAT       147  12-15-88  12:39p
    BONDS    DAT        92   8-22-88  11:10a
    BONDS    IDX       632   8-22-88  11:10a
    BONDS    POR        20   4-30-88   3:51p
    DOWIND   DAT       828   8-22-88  10:33a
    DOWIND   IDX       632   8-22-88  10:33a
    DOWUTL   DAT       782   8-22-88  10:33a
    DOWUTL   IDX       632   8-22-88  10:33a
    HI_YIELD DAT       828   8-22-88  11:08a
    HI_YIELD IDX       632   8-22-88  11:08a
    IBM      DAT       782   8-22-88  11:08a
    IBM      IDX       632   8-22-88  11:08a
    MASTER   PCP      1068   8-22-88  11:10a
    MYPORT   DAT       828   8-22-88  11:08a
    MYPORT   IDX       632   8-22-88  11:08a
    MYPORT   POR        40   4-30-88   3:53p
    PHOENIX  DAT        92   8-22-88  11:05a
    PHOENIX  IDX       632   8-22-88  11:05a
    PINWST   DAT      1426   8-22-88  11:03a
    PINWST   IDX      1264   8-22-88  11:03a
    SOUTH    DAT       828   8-22-88  10:33a
    SOUTH    IDX       632   8-22-88  10:33a
    TOLLESON DAT        92   8-22-88  11:05a
    TOLLESON IDX       632   8-22-88  11:05a
    UPDATE   POR        70   4-30-88   3:56p
    AT&T     DAT       828   8-30-88  11:15a
    AT&T     IDX       632   8-30-88  11:15a
           38 file(s)     288526 bytes
                           12288 bytes free
