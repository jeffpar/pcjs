---
layout: page
title: "PC-SIG Diskette Library (Disk #323)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0323/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0323"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TRANSTOK"

    TRANSTOK helps anyone interested in the stock market to easily download
    constantly updated stock market information from The Source (a public
    communications network).
    
    TRANSTOCK acts as a data translator, enabling any data management
    software (spreadsheets, databases, graphics programs, etc.) to use this
    information for analysis and trend development.  Stock information can
    be imported to dBase II, III III+, Multiplan and Lotus 1-2-3.
    
    Track your stocks, analyze trends and be on top of your investments!
    File Descriptions:
    
    READ-ME   1ST  How to use PRINTDOC.BAT.
    PRINTDOC  BAT  Batch file to print documentation.
    PRINTDOC  MSG  Documentation message.
    TRANSTOK  DOC  Full Documentation for TRANSTOK.
    TRANSTOK  EXE  Main program.
    TRANSTOK  DFL  Default information file.
    TRANSTOK  DF2  Copy of TRANSTOK.DFL.
    DEFAULTS  EXE  Customizes TRANSTOK for you -- do first..
    AMEX      STB  Stock name abbreviations.
    NYSE      STB  Stock name abbreviations.
    STOKCHEK  DJI  Sample data file.
    UNISTOX   DJI  Sample data file.
    UNISTOX   DJC  Sample data file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES323.TXT

{% raw %}
```
Disk No  323
Program Title: TRANSTOK version 1.50
PC-SIG version 3

    TRANSTOK lets anyone interested in the stock market easily download
information from two databases on the source (a communication utility). It
acts as a translator, enabling any data management software (spreadsheets,
graphics programs, etc) to use this data for analyses and spot trends. It
also provides tools for manipulating files of selected stock, simplifying
these otherwise time-consuming tasks.

Usage: Stock Analysis Assistance Package

System Requirements: 128K memory, one disk drive, a modem, and access to
the Source communication service.

How to Start: Load DOS and type TRANSTOK (press enter) to enter the main
program (NOTE: first set default configuration through DEFAULTS.EXE).
Consult TRANSTOK.DOC for program documentation.

Suggested Registration: $30.00

File Descriptions:

READ-ME   1ST  How to use PRINTDOC.BAT.
PRINTDOC  BAT  Batch file to print documentation.
PRINTDOC  MSG  Documentation message.
TRANSTOK  DOC  Full Documentation for TRANSTOK.
TRANSTOK  EXE  Main program.
TRANSTOK  DFL  Default information file.
TRANSTOK  DF2  Copy of TRANSTOK.DFL.
DEFAULTS  EXE  Customizes TRANSTOK for you -- do first..
AMEX      STB  Stock name abbreviations.
NYSE      STB  Stock name abbreviations.
STOKCHEK  DJI  Sample data file.
UNISTOX   DJI  Sample data file.
UNISTOX   DJC  Sample data file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                      <<<<  Disk No 323 TRANSTOK  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: MANUAL (press enter)   ║
║                                                                         ║
║ To start the program, type: TRANSTOK (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TRANSTOK.DOC

{% raw %}
```










                                             (tm)
                                     TRANSTOK

                                   Version 1.50
                                   (March 1987)



          A Software Tool for Investors Using the IBM Personal Computer

            and The Source Unistox / StockCheck Electronic Data Bases










                       (C) Copyright 1984, 1985, 1986, 1987

                               All Rights Reserved











                               StockBridge Software

                                   PO Box 2470

                             Redmond, WA   98073-2470



















                   TRANSTOK USER'S GUIDE ---  TABLE OF CONTENTS


        PART I - OPERATIONS:   Instructions on how to use TRANSTOK,
              including its defaults, how to customize them, features
              provided within the program, and menu choices.
        PART II- APPLICATIONS:   Examples, discussion, and tips on how to
              use TRANSTOK's features effectively.
        PART III - COMMUNICATIONS:   Choose a Source database; an overview
              of different methods available for uploading and downloading
              stock quotations; and tips on communicating with The Source.
        PART IV -  INFORMATION & APPENDICES:   How to get program copies/
              updates, report problems, and make suggestions.  Appendices
              give specific examples of communications procedures.


        Please note, if you have an older version of TRANSTOK, make
        certain that you copy the new version of ALL THREE WORKING FILES
        onto your work disk.  These include:  TRANSTOK.EXE, TRANSTOK.DFL,
        and DEFAULTS.EXE.


                               PART I -- OPERATIONS

        INTRODUCTION .................................................. 1
           The TRANSTOK Difference .................................... 1
        WHY THE SOURCE?  .............................................. 2
           Data Advantage ............................................. 2
           Cost Advantage ............................................. 2
        SPECIAL TERMS ................................................. 2
        HARDWARE AND SOFTWARE REQUIRED ................................ 3
        TRANSTOK FILES ................................................ 3
        GETTING STARTED WITH TRANSTOK ................................. 4
        TRANSTOK DEFAULTS ............................................. 5
           Initial Defaults ........................................... 5
           Changing Defaults .......................................... 5
        BEGINNING OPERATION WITH TRANSTOK ............................. 8
           Features Common Throughout the Program ..................... 8
        THE MAIN MENU ................................................. 9
        MENU ITEM 1 - PROCESSING RAW UNISTOX QUOTES ................... 9
        MENU ITEM 2 - CREATE UNISTOX STUB LIST (USING RAW QUOTES) ..... 10
        MENU ITEM 3 - PROCESS RAW QUOTES FROM SOURCE-STOCKCHECK ....... 11
        MENU ITEM 4 - CREATE STOCKCHECK TICKER LIST (USING RAW QUOTES). 11
           Processing Quotes -- Processing Time ....................... 11
           Processing Quotes -- File Sizes ............................ 12
        MENU ITEM 5 - VERIFY STUBS/TICKER SYMBOLS AGAINST MASTER LIST . 12
        MENU ITEM 6 - SORT STUB/TICKER FILE ........................... 12
        MENU ITEM 7 - MERGE TWO FILES ................................. 13
        MENU ITEM 8 - EDIT FILE -- THE TRANSTOK EDITOR ................ 13
           Begin Editing .............................................. 13
           Keys Used by the Editor .................................... 14
           The Editor's FIND feature .................................. 15
           The Editor's MARK and UNMARK Feature ....................... 16
           Quit Editing ............................................... 16
           Edit File Notes ............................................ 17
        MENU ITEM 9 - DISK DIRECTORY AND FILE ACCESS .................. 17
        TRANSTOK ERROR MESSAGES ....................................... 18








                   TRANSTOK USER'S GUIDE ---  TABLE OF CONTENTS

                             PART II --  APPLICATIONS

        PROCESSING RAW QUOTES FROM THE UNISTOX DATABASE ............... 21
           Translated Output From Unistox Quotes ...................... 21
           The Exception File ......................................... 22
        CREATING UNISTOX STUB LIST .................................... 23
        PROCESSING RAW QUOTES FROM SOURCE-STOCKCHECK .................. 24
           Translated Output From StockCheck Quotes ................... 24
        VERIFYING STUBS/TICKER SYMBOLS AGAINST A MASTER LIST .......... 25
        SORTING STUB/TICKER FILES ..................................... 25
        MERGING FILES ................................................. 26
        EDITING STUB/TICKER FILE ...................................... 26
           Using The Editor's FIND Feature ............................ 26
           Using The Editor's MARK and UNMARK Feature ................. 27
        MOVING TRANSLATED DATA INTO ANALYSIS SOFTWARE ................. 27
           Lotus 1-2-3 Example ........................................ 28
           Multiplan Example .......................................... 28
           Database Example ........................................... 28


                            PART III -- COMMUNICATIONS

        GENERAL CONSIDERATIONS IN SELECTING A DATABASE ................ 30
           Advantages and Disadvantages of StockCheck ................. 30
           Advantages and Disadvantages of Unistox .................... 30
           Summary of Advantages and Disadvantages .................... 31
        CREATING CUSTOM PORTFOLIO(s) .................................. 31
        OVERVIEW OF FILE NAMES USED IN UPLOADING AND DOWNLOADING ...... 31
        OVERVIEW OF STOCK QUOTE RETRIEVAL FROM EACH DATABASE .......... 32
           Getting Quotes From StockCheck ............................. 32
           Getting Quotes From Unistox ................................ 33
        MIXING AND MERGING:  NYSE, AMEX AND O-T-C DATA ................ 34
        COMMUNICATING WITH THE SOURCE ................................. 34
        DELETING FILES AFTER DOWNLOADING .............................. 35
        GETTING OFF THE SOURCE ........................................ 36


                       PART IV -- INFORMATION & APPENDICES

        USER-SUPPORTED SOFTWARE ....................................... 37
        GETTING COPIES OF TRANSTOK .................................... 37
        SUGGESTIONS, FEEDBACK, AND BUG REPORTS ........................ 38
        PERMISSION TO COPY ............................................ 39
        DISCLAIMER .................................................... 39
        TRADEMARKS .................................................... 40


                                    APPENDICES

        A - ADDITIONAL NOTES ON DATA TRANSLATION AND FILE FORMATS ..... 40
        B - TRANSLATING ONLY PART OF A FILE OF RAW QUOTES ............. 40
        C - UPLOADING PORTFOLIOS FROM COMMAND LEVEL ................... 41
        D - DOWNLOADING FROM STOCKCHECK ............................... 42
        E - DOWNLOAD AN ENTIRE DAY'S TRADING FROM UNISTOX ............. 43
        F - DOWNLOAD CUSTOM NYSE OR AMEX PORTFOLIO FROM UNISTOX ....... 44
        G - DIRECT DOWNLOAD OF QUOTES WITHOUT USING A COMO FILE ....... 45
        H - MONITORING CHANGES IN YOUR UNISTOX STUB LISTS ............. 46
        I - DOWNLOAD NEW HIGH/LOW LIST FOR THE NYSE AND AMEX .......... 47







        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


                                   INTRODUCTION

           TRANSTOK provides two valuable capabilities for investors who
        use an IBM-PC to track and analyze stocks.  First, it is a
        "bridge" and data translator for stock market quotations from BOTH
        the Unistox and StockCheck data bases offered by The Source.  In
        the past, stock quotes from on-line databases could be viewed on
        your computer's screen, but were usually in a form that was
        completely unusable by any microcomputer software.  TRANSTOK
        changes that.  It rapidly converts raw quotes that you download
        from The Source into data that hundreds of popular programs can
        use.  This extends the power of investment analysis to any program
        that can "read" industry-standard data formats (e.g. spreadsheets,
        graphics and charting programs, and data-management software).

          Secondly, TRANSTOK provides an integrated set of tools for
        manipulating and managing lists of stocks (e.g., sorting, merging,
        and comparing) so you can use The Source databases effectively.
        For example, if you want to follow certain groups of securities,
        TRANSTOK makes it easy to produce a selected list that can be
        electronically sent to The Source requesting that only the quotes
        for those specific securities be transmitted back to you.


        The TRANSTOK Difference

           With TRANSTOK, there are none of the limits commonly imposed by
        many investment software packages.  For example:

           1) Some of them restrict the number of items you can retrieve
              from an on-line database, regardless of the capabilities of
              your analysis software.
           2) Some provide information on only certain securities.
           3) Some will analyze ONLY the data that you buy from the
              program's vendor through an expensive monthly data disk.
           4) Some will perform only one specialized kind of analysis
              (e.g., point-and-figure charts).
           5) Some even require that you manually enter long lists of
              stock names from your keyboard in order to retrieve data.

           TRANSTOK has no such arbitrary restrictions.  You may download
        an unlimited number of quotes using a standard Source subscription
        and your favorite communications hardware and software.  TRANSTOK
        then reads and translates the downloaded file so the data is ready
        for your analysis software just minutes after you sign off from
        The Source.  This method gives you TIMELY market information
        (daily if you wish) for ONLY the cost of connect-time.  Moreover,
        you get quotes for precisely the stocks you want to see, be it 10
        stocks on the AMEX (American Exchange) or the entire NYSE (New
        York Stock Exchange).

           TRANSTOK data translations permit an investor to analyze
        selected groups of securities, or trends in ENTIRE MARKETS, using
        the current generation of powerful spreadsheets, data managers,
        and charting programs (e.g., Lotus 1-2-3/Symphony, Microsoft

                                     page -1-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        Chart, dBase II/III and many others).  This enables you to use
        your PERSONAL investment strategy in manipulating, screening, and
        graphing market data.  Equally important, you can perform your
        analysis using software tools you already own instead of paying
        hundreds more for a program that may provide only one specialized
        type of securities analysis.

           With the TRANSTOK "bridge", any program that can read one of
        the "industry standard" data formats TRANSTOK supports can have
        access to stock market quotes from these Source databases and
        reports:

           1) StockCheck
           2) Unistox (New York Exchange quotes, report number 139)
           3) Unistox (American Exchange quotes, report number 149)
           4) Unistox daily New High/Low list for the New York and
              American exchanges (report number 087).


                                 WHY THE SOURCE?

           TRANSTOK concentrates on stock market data from The Source
        because of two distinct advantages The Source databases offer:

           (1) the quantity of data contained in quotes; and
           (2) a strong price advantage.

        Data Advantage

           Quotes from Unistox report numbers 139 and 149 contain more
        information than those from any other data service that we are
        currently aware of.  After being translated by TRANSTOK, these
        quotes contain 14 separate data elements, many of which are
        normally not found in quotes from other databases.

        Cost Advantage

            The cost is substantially lower with these databases than any
        others we know of.  For example, at 1200 baud, Unistox report 149,
        containing quotes for the entire American Stock Exchange (AMEX),
        can be downloaded in about 12 minutes for approximately $2.00
        (during non-prime usage hours).

           Also, The Source does not add an extra charge for each quote as
        some data services do; you pay only for the connect time.  Another
        on-line data service charges connect time PLUS 3 cents per quote.
        at that price, quotes for the entire AMEX (900-plus stocks) would
        cost you $24-$30, compared to $2 at The Source.  This is very
        important if you regularly analyze many stocks or want to analyze
        trends in an entire market.


                                  SPECIAL TERMS
           As much as possible, we have refrained from using special terms
        and jargon in this guide.  However, a couple of terms simply have
        no easy substitutes, so you should be aware of the following:

                                     page -2-





        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        STUB:  A stock name abbreviation used in the Source/UPI-Unistox
          database.  These typically consist of about 4 to 10 characters
          and are similar to the company name abbreviations you see in the
          stock tables of newspapers (e.g., Digital Equipment = DigiEq).

        TICKER SYMBOL:  A stock name abbreviation assigned by the market
          where the share is traded.  American and New York exchange
          Ticker symbols are 1 to 3 characters long, and always in upper
          case (e.g., Digital Equipment = DEC).

        UPLOAD:  Transmit data (e.g., stock stubs or ticker symbols) from
          your computer to The Source computer.

        DOWNLOAD:  Receive data on your computer from The Source computer.


                          HARDWARE AND SOFTWARE REQUIRED

           TRANSTOK's minimum requirements are:  an IBM PC, PC-XT, PC-AT,
        or PC-jr (or a computer that is fully-compatible with one of
        these); and any version (2.0 through 3.2) of PC or MS DOS; one
        floppy disk drive; an 80-column video monitor; and at least 128K
        of random access memory (192K recommended, especially if you use
        DOS version 3.0 or later).  No matter which version of DOS,
        TRANSTOK will perform certain operations faster if more than the
        bare minimum amount of RAM is available.  However, beyond 256K of
        RAM you won't notice any additional increase in performance.

           There are no specific requirements for communications hardware
        or software.  Whatever combination you are already using to
        communicate with The Source will do nicely because TRANSTOK simply
        reads raw data files from disk that were written there by the
        communications software.  If you intend to download large amounts
        of data from either Unistox or StockCheck on a regular basis, you
        will find that a modem that supports 1200 or 2400 baud data
        transmissions will complete the job faster, but this not a
        TRANSTOK requirement.


                                  TRANSTOK FILES

        When you first put your TRANSTOK disk into a disk drive and ask
        for a directory, the files you will see listed are:

        TRANSTOK.EXE     The program which does all data translation and
                         processing.
        TRANSTOK.DFL     A "default" information file that TRANSTOK needs
                         when it starts running.
        TRANSTOK.DF2     A second copy of TRANSTOK.DFL, in case the
                         original becomes damaged.
        DEFAULTS.EXE     Used to customize TRANSTOK defaults to your
                         preferences and hardware.  Most users will want
                         to run DEFAULTS before TRANSTOK is used for the
                         first time.
        NYSE.STB         These two files contain all the stock name

                                     page -3-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        AMEX.STB         abbreviations (called "stubs") used in the
                         Source/UPI-Unistox database.
        TRANSTOK.DOC     User's guide and program documentation.
        PRINTDOC.BAT     A batch file used to print the documentation.

           The files below contain sample raw data (quotes) that you can
           use to experiment with TRANSTOK's features, without having to
           log on to The Source.

        STOKCHEK.DJI     The 30 stocks in the Dow Jones Industrial Average
                         -- from the StockCheck database.
        UNISTOX.DJI      Stocks in the Dow Jones Industrial Average from
                         the Unistox database -- report 139.
        UNISTOX.DJC      The 65 stocks that comprise the Dow Jones
                         Composite -- from Unistox, report 139.


                          GETTING STARTED WITH TRANSTOK

        1) MAKE A WORKING COPY of the original TRANSTOK disk by copying
           all the files to a work disk (files related to this
           documentation are not required on the work disk, that is
           TRANSTOK.DOC, PRINTDOC.BAT and PRINTDOC.MSG).

           For hard disk users the "work disk" will probably be a
           subdirectory on the hard disk -- either a newly created
           directory or an existing one that is convenient.  If you have
           no hard disk, then first prepare a work diskette by formatting
           it, using the DOS FORMAT/S command, so that the 3 primary DOS
           files are on this diskette (2 hidden files plus COMMAND.COM).
           Then copy the files to the work disk, as described above.

        2) The next step is to customize TRANSTOK to your preferences and
           computer hardware.  This is not a necessity if the "generic"
           defaults that the program will use are acceptable to you (see
           "Initial Defaults", below).  If you need to make changes then
           continue reading here.  Otherwise, just skip ahead to the
           section titled "Beginning Operations With Transtok".

        3) If you intend to change defaults, please take a few moments to
           fully read the section, called "Changing Defaults", below.

        4) Insert your new working disk (step 1, above) into drive A: or,
           for a hard disk, switch to the subdirectory into which you just
           copied the TRANSTOK files; i.e., make that subdirectory the
           "current" directory.

        5) Start the DEFAULTS.EXE program by typing DEFAULTS.  It will
           display a menu (see "Changing Defaults", below).  Select the
           item numbers that you want changed.  When using TRANSTOK for
           the first time, the only items that need close attention are
           #1, #3, and, of course, #8 to save any changes you make.

        6) From now on, whenever you run TRANSTOK.EXE, the defaults you
           selected will be used.


                                     page -4-





        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


                                TRANSTOK DEFAULTS

           When TRANSTOK.EXE begins running, the first thing it does is
        read "default" information from the file called TRANSTOK.DFL.
        That file MUST be available on the same disk (or subdirectory)
        where the program itself is stored.  If the ".DFL" file cannot be
        found, or if it is damaged, TRANSTOK.EXE cannot run.

           Please note:   ALWAYS use the .DFL file that came on the SAME
        disk as the TRANSTOK.EXE and DEFAULTS.EXE files you are using.
        Never use a mixture of these three files from different versions
        of the program.


        Initial Defaults

           Because of the wide variety of hardware used with the IBM
        family of personal computers, the version of TRANSTOK.EXE and
        TRANSTOK.DFL that is delivered to you assumes the "generic"
        default values listed below.  They allow the program to run
        immediately on any machine with a minimum hardware configuration.
        All items below (and more) can be changed by running DEFAULTS.EXE.

           a) All data files are assumed to be on drive A: but this can be
              manually overridden by typing in a different drive letter
              when TRANSTOK.EXE asks for a file name (e.g., B:XYZ.DAT).
           b) The translated and processed stock quotes are written to
              disk in a form that is ready to import into Lotus 1-2-3/
              Symphony or any other program that can read that particular
              type of data file (Lotus .PRN format).
           c) A non-color monitor is assumed; i.e., black & white, amber,
              or green (including the IBM Monochrome).


        Changing Defaults

           When the program DEFAULTS.EXE is run, you will see its menu:

                             CHANGE TRANSTOK DEFAULTS

                    1  Default data drive
                    2  Default master stub file
                    3  Type of translation (Lotus, Multiplan, VisiCalc)
                    4  Matching length for stub comparison
                    5  Screen colors
                    6  Replacements for value = 0
                    7  Printer setup
                    8  All finished -- save changes on disk
                  ESC  Exit to DOS  -- no changes saved

           You may change the default value for any or all of these
        categories.  Select the item you want from the menu.  The program
        will show you the current default value and a prompt telling you
        how to change it.  Press the <ENTER> key if you want to leave a


                                     page -5-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS



        value unchanged.  The <ENTER> key is also used to advance to the
        next item in those categories, such as screen color, that ask
        multiple questions.

           Pressing the ESCape key will get you back to the main menu at
        any time.  If you want to check your answers, just select an item
        from the main menu a second time; when the current value is
        displayed, just press <ENTER> to indicate it is OK.  When you
        finish, be sure to choose item 8 so your changes will be saved on
        disk.  The paragraphs below explain all the DEFAULTS menu items.

        1) DEFAULT DATA DRIVE:   This is the drive or subdirectory that
        TRANSTOK will automatically use when reading or writing disk
        files, unless you override the default by specifying a different
        drive as part of a file name (e.g., A:XYZ.DAT).  If you want use a
        hard disk subdirectory for data, be sure to fully specify the
        DRIVE and PATH, and also add a BACKSLASH \ as the last character
        of what you type ( e.g., C:\STOCK\ ).

        2)  MASTER STUB FILE:   TRANSTOK.EXE will automatically use this
        file as your master list when comparing lists of Unistox "stubs".
        As with the default data disk, you may override the default just
        by typing in a different file name.  Note, DEFAULTS asks you to
        provide the drive letter, PATH (if applicable), and the file name
        for the master file; for example,  B:SPECIAL.STB  or
        C:\STOCK\AMEX.STB.  As it comes to you, the default is A:NYSE.STB.

        3) TYPE OF TRANSLATION:   This menu item determines how your raw
        quotes will be translated.  The choices are:

        Multiplan - Microsoft Symbolic (SYLK) format.  It can also be read
                    by MicroRIM's R:Base data management programs and
                    dozens of other programs.  The translated file's name
                    will have a .SLK extension.

        Lotus     - This data format is used by both Lotus 1-2-3 and
                    Symphony.  Each item in a line of data is separated by
                    a comma, and text items have double quotes around them
                    (e.g., part of a quote looks like:  48.750,"Xerox",).
                    This translation can also be imported into literally
                    hundreds of other programs, especially data managers
                    and spreadsheets (e.g., dBASE II and III, PC-File III,
                    and VP-Planner).  The translated file's name will have
                    the ".PRN" extension that Lotus software expects.

        VisiCalc  - Used by all versions of VisiCalc.  The translated
                    file's name will have a .VC extension; this format
                    can also be read by many spreadsheets and databases.

           Where the DEFAULTS sub-menu #3 asks you to specify the type of
        translation, just enter a 1, 2 or 3 (corresponding to Multiplan,
        Lotus, or VisiCalc).  The type of translation you choose cannot be
        manually overridden while TRANSTOK.EXE is running; you must use
        the DEFAULTS.EXE program to change it.

                                     page -6-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        4) MATCHING LENGTH FOR "STUB" COMPARISON:   When you tell TRANSTOK
        to compare a list of stubs to a master list, it first tries to
        find an exact match.  If none is found, it then tries to find a
        "near" match by looking only at the first part of the stub.

           You may designate what percentage of the stub name should be
        considered significant when looking for a "near" match.  Do not
        use a value less than 25% nor greater than 90%; it will produce
        meaningless results.  A value between 60% and 80% usually works
        best.  See the discussion of stub comparison below in the section
        entitled "Verify Stubs Against Master List".

        5) SCREEN COLORS:   As noted above, TRANSTOK is ready to run on
        any 80-column, non-color monitor.  With this default, a color
        monitor will display white letters on a black background.  On a
        green or amber monitor, the "white" letters appear as green or
        amber.  If you have a non-color monitor, there is no need to
        change the default colors.

        6) REPLACEMENTS FOR VALUE = 0:   When translating raw quotes,
        TRANSTOK frequently encounters "zero" values.  For example, a
        certain stock may pay no dividend, or there may have been no
        change from the previous day's close (change = 0).  If you wish,
        TRANSTOK will replace these zeros with anything you specify.

           For example, you may decide that "N/C" ("no change") is more
        meaningful to you than just plain 0 when there has been no change
        in the closing price.  If you select item 6 on the DEFAULTS menu,
        there are four places where you can customize a "zero" value:

                1) Dividend         3) Price/earnings ratio
                2) Yield            4) Daily price change

           These replacements for 0 values in the price/earnings field and
        in the daily change field will be used when processing both
        Unistox and StockCheck quotes.

        7) PRINTER SETUP:   DEFAULTS.EXE allows you to enter three items
        of information about your preferred printer setup:  (a) which
        printer TRANSTOK should use; (b) how many lines should be printed
        on a page; and (c) any special printer commands or "escape codes".

        a)  Most users have only one printer (called LPT1: by DOS); the
            initial default is already set to this.  However, if you have
            more than one printer, you may want TRANSTOK to use your LPT2:
            or LPT3:.  Answer 1, 2, or 3, when the program asks which one
            you want to use.

        b)  The initial default, 58 printed lines per page, provides a
            margin at the top and bottom of 11-inch paper, assuming the
            printer is set up for a normal 6 lines/inch (total 66 lines on
            11-inch paper).  You may want less or more than 58.  If your
            printer is set up for 8 lines/inch (88 lines on 11-inch paper)
            you will probably want to increase the number of printed lines
            per page from 58 to around 75-80.

                                     page -7-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        c)  This option allows you to have TRANSTOK send ESCape codes or
            special commands to your printer before printing (e.g., use
            bold print, or switch from 6 lines/inch to 8).  Check your
            printer manual for the necessary commands.  If the command(s)
            include an escape character, use a reverse apostrophe ` (next
            to the <ENTER> key on the PC) to show where the ESCape(s) is
            located in the command(s).   Example:   ESC E is used on most
            IBM and Epson dot matrix printers for emphasized print; this
            would be entered as `E in the special setup.


                        BEGINNING OPERATION WITH TRANSTOK

           If you have not read the section entitled "Getting Started" or
        if you have not yet prepared a work disk, then please do so now.


        Features Common Throughout The Program

           Certain screen and keyboard conventions are used throughout
        TRANSTOK.EXE, no matter which part of the program you happen to be
        working with.  These are:

        1)  All menu choices execute with just one keystroke; there is no
        need to press the <ENTER> key after a command.  The only time that
        <ENTER> is needed is after you have typed in a file name to
        indicate that you are finished.

        2)  Whenever you see the (ESC) symbol on the screen, it indicates
        that the PC's escape key is active.  At these times, just tap that
        key to undo a mistake and return to the main menu (e.g., if you
        accidentally select Sort when you actually want to Edit a file).

        3)  Throughout the program, your default data drive (or
        subdirectory) is shown on screen.  If the file you want is located
        there, then there is no need to type the drive letter or PATH
        (e.g., B: or C:\STOCK ) as part of a file name.

        4)  If you are asked for a file name but can't remember the exact
        spelling, you may request a DIRectory listing of your default data
        drive by pressing ALT-D (i.e., hold down the ALT key, press the
        letter D, then release both keys).  This feature is available even
        if you have begun typing the file name.  After the DIRectory is
        displayed, the program will return to where you stopped typing and
        you may continue with the rest of the file name.

        5)  Whenever TRANSTOK has a default file name or other default
        value, it will display the proposed response in square brackets.
        To accept the default, just press the <ENTER> key; or, to override
        the proposal, just key in the value or file name you want instead.

        6)  At the main menu and also within the built-in editor, the
        high-lighted reminders "NUM" and "CAP" will appear in the lower
        right corner of the screen if your keyboard is set in either the
        "Caps Lock" or "Num Lock" mode.

                                     page -8-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS



        7)  In certain parts of the program, TRANSTOK's proposed default
        file name will include numbers.  For example, when processing raw
        quotes, TRANSTOK will propose using a raw data file named
        "RAW####.DAT", where #### is today's month and day (e.g., on May
        15th it will suggest [RAW0515.DAT] ).

           This type of file name is proposed because it allows you to
        keep track of your data files by the day they were received and
        translated.  Again, you may override this by providing a different
        name.  If you like this naming scheme, then you may wish to have
        your communications software save raw data files using such names
        as they are received from The Source.  Then, when running
        TRANSTOK, all you have to do is press <ENTER> because the actual
        data file name will already match the proposed name.



                                  THE MAIN MENU

           When TRANSTOK starts, the first thing you see is the TRANSTOK
        logo, and then, after you press any key, the main menu.  It gives
        you access to the various functions within the program. Make a
        selection by pressing the key which corresponds to the item you
        want.  For example, 1 to process Unistox data, or 8 to edit
        (number keys on the keypad OR the top keyboard row will work).

        DATA = A:               TRANSTOK MAIN MENU

                   1   Process raw quotes from SOURCE-Unistox
                   2   Create Unistox stub list (using raw quotes)
                   3   Process raw quotes from SOURCE-StockCheck
                   4   Create StockCheck ticker list (using raw quotes)
                   5   Verify stubs/ticker symbols against master list
                   6   Sort stub/ticker file (max. 2400 items)
                   7   Merge two files
                   8   Edit stub/ticker file
                   9   Disk directory and file access
                   0   Quit (exit to DOS)

                           Command number:

           In the paragraphs below, we discuss the mechanical aspects of
        using each of these functions.  In places, a brief, simple example
        of their use is given.  Additional and more complete examples and
        discussion are provided in Part II of this manual, which deals
        specifically with program applications.



        MENU ITEM 1 - PROCESSING RAW STOCK QUOTES FROM THE UNISTOX REPORTS

           After your communications software has stored a file of raw
        Unistox quotes on disk report from 139 or 149, it is time to put
        TRANSTOK's translation feature to work.  Choose item 1 (Process

                                     page -9-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        Unistox) on TRANSTOK's main menu.  The screen display will change
        and you will be asked for the name of the "raw data" file that is
        to be translated.  After that, you will be asked:

        Process how?
            1  entire file  -- every quote
            2  entire file  -- only new highs & lows
            3  partial file -- every quote
            4  partial file -- only new highs & lows

           The meaning of Item 1 on this list is obvious:  All quotes in
        the file will be translated.  If you specify item 2, TRANSTOK will
        search the raw data file and selectively translate only the quotes
        for stocks that made a new 52-week high or low in today's trading.
        This option is indispensable if your market analysis strategy
        concentrates on securities showing unusual strength or weakness.

           Items 3 and 4 on the list allow you to break a large raw data
        file into separate, smaller translated files.  This is used when
        your analysis software can accept only a certain number of quotes
        at a time.  For example, older versions of VisiCalc and Multiplan
        allow spreadsheets to have a maximum of 255 lines.  See Appendix B
        for an example of processing only part of a raw file.

           Next, you are asked for a file name for the processed quotes,
        and finally, for a name for an "exception" file.  The exception
        file will be used ONLY if the program finds any quotes that it
        cannot process; otherwise, it will not appear on your disk.  See
        Part II -- Applications for a discussion of the "exception" file
        and what to do if exceptions are found.

           When processing begins, the name of both the raw data file and
        the file receiving the translation are displayed on the screen,
        along with a running count of how many quotes have been completed.

           At the end of processing, a summary is displayed which shows
        the total number of raw quotes found, the number of translated
        items in the new file, and the number of "exceptions" (usually
        zero).  If you specified that only new highs and lows were to be
        processed, an additional item is displayed which shows how many
        quotes in the raw file are NOT new highs or lows.



            MENU ITEM 2 - CREATE UNISTOX STUB LIST (USING RAW QUOTES)

           The prompts and screen displays for this option on TRANSTOK's
        main menu are almost identical to processing raw Unistox quotes,
        and the same raw data file is used.  The difference is that this
        operation extracts just the abbreviated security names ("stubs")
        from the raw data and puts them in a separate file.  Once done,
        this separate list can be used for other purposes, such as
        creating lists of "special-interest" securities (see Applications
        section).  Creating a stub file is fast, taking only 1/4 or 1/3 of
        the time needed for a full translation of quotes.

                                    page -10-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


             MENU ITEM 3 - PROCESS RAW QUOTES FROM SOURCE-STOCKCHECK
                                       and
          MENU ITEM 4 - CREATE STOCKCHECK TICKER LIST (USING RAW QUOTES)

           These items on TRANSTOK's main menu operate almost identically
        to working with Unistox data (i.e., processing Unistox quotes and
        extracting Unistox stubs).  The screen displays are the same, and
        you are asked for file names in the same manner.  For StockCheck
        quotes, the only difference occurs when you are asked:

        Process how?
            1  entire file  -- every quote

            3  partial file -- every quote

        Only choices 1 and 3 are displayed because StockCheck data does
        not contain new 52-week high/low information, so choices number 2
        and 4 (normally shown for Unistox) are meaningless here.

           When creating a list of ticker symbols from raw StockCheck
        quotes, the only difference is in the file name that TRANSTOK will
        propose using for the completed ticker-symbol list.  It  will have
        a .TIK extension instead of the .STB extension used for Unistox.


        Processing Quotes -- Processing time

           When processing raw quotes, the speed will vary, depending on
        your hardware and upon the kind of translation being done (i.e.,
        whether the data is being prepared in a Multiplan, Lotus, or
        VisiCalc format).  The table below shows some typical processing
        rates so you can make an estimate of what to expect.

         RAW DATA         PROCESSED DATA      QUOTES/MIN.      QUOTES/MIN.
           FROM             GOING TO          (Unistox)       (StockCheck)

        "RAM-drive"       "RAM-drive"         275 - 400        425 - 600
        hard disk         hard disk           225 - 325        350 - 525
        floppy            "RAM-drive"         175 - 225        275 - 375
        floppy            floppy              100 - 175        120 - 225

           Note how TRANSTOK takes advantage of a hard disk or "RAM-drive"
        by doubling or even tripling the work it does in a minute.  But,
        even if it has to wait for floppy disks to catch up, translations
        seldom take more than 2-3 minutes, unless you have a very large
        raw data file.  Often, your analysis software will take longer to
        load the translated file than TRANSTOK took to produce it!

        TECHNICAL NOTE:  If you are using DOS version 2.0 (or later),
          the number of quotes processed in a minute can often be
          increased substantially by increasing the number of disk buffers
          specified in your CONFIG.SYS file.  The table above is very
          conservative in that it assumes the DOS default configuration (2
          buffers).  For floppy disk drives, using between 4 and 10


                                    page -11-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


          buffers will generally produce the very good results.  For a
          PC-XT or PC-AT, BUFFERS=8, 16 or 32 will noticeably speed up
          quote processing.  Experiment to find out the right number for
          your exact hardware setup.

        Processing Quotes -- File Sizes

           A translated file of Unistox quotes is almost always larger
        than the original raw file.  In contrast, for StockCheck data
        there is commonly a DECREASE in size.  How much larger a Unistox
        file will become varies with the kind of translation being done.
        For Lotus ".PRN", the increase is 0-12%, so a 20,000-byte raw file
        will yield a translated file of less than 23,000 bytes.

           For VisiCalc and Multiplan the increase is much greater; the
        resulting ".VC" file will be about 2.5 times bigger.  A file
        translated into ".SLK" format is about 2.7 times larger than its
        raw form (e.g., 20,000 byte raw file = 54,000 byte ".SLK" file).
        If a large amount of raw data is going to be translated, make sure
        you have enough disk space.


          MENU ITEM 5 - VERIFY STUBS/TICKER SYMBOLS AGAINST MASTER LIST

           This main-menu option is used to compare one list of stock name
        abbreviations to another.  TRANSTOK will first ask for the name of
        the master list, against which the smaller file will be compared.
        It will automatically propose using the master list that is named
        in the default file.  Just press <ENTER> if this is the correct
        file to use, or key in a different name.

           Next, you are asked for the name of the file to be checked
        against the master list.  Lastly, TRANSTOK will propose using
        default names for 3 different output files; you can accept the
        proposed name just by pressing <ENTER>.  These 3 files are used
        depending on the outcome of the comparison:

        1) GOOD####.STB for names that exactly match the master file.
        2) NEAR####.STB for those that are "near" matches".
        3) EXCP####.STB for those not having a match in the master file.

           The "####"  part of the file name represents the month and day
        the report was prepared.  For example, GOOD0701.STB would be the
        file name for all the exact matches between your master stub file
        and your sample file on July 1.  This stub and ticker symbol
        comparison can be used in several different ways; a more complete
        discussion of their uses is given in Part II, Applications.



                       MENU ITEM 6 - SORT STUB/TICKER FILE

           When you invoke this function from the main menu, TRANSTOK will
        ask for the name of the file that is to be sorted.  Then it asks:

        Rewrite sorted list using:  1) Old file name, or 2) New file name?

                                    page -12-





        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


           If you select option 1, the sort will begin at once; whereas
        option 2 will ask for a new file name.  The sorting function is
        fast -- 300 items per second (on a standard IBM PC, but much
        faster on a PC/AT).  So, if you have a relatively short list,
        don't be surprised if TRANSTOK reports that it is finished almost
        immediately!


                          MENU ITEM 7 - MERGE TWO FILES

           When this service is requested from TRANSTOK's main menu, you
        will be asked for two file names:  (1) the "primary" file (onto
        which another file will be appended), and (2) the "secondary" file
        (it is added to the primary).  This is useful for joining smaller
        files to create a larger one.  For example, if you have created
        several special portfolios of stock names (or ticker symbols) and
        then want to see them as a single list, you would use MERGE to
        join them.

           Merge SHOULD NOT be used to join two files of translated stock
        quotes that are in VisiCalc or Multiplan format (.VC or .SLK)
        because these files contain information which tells the receiving
        spreadsheet where to place values in cells.  Two separate
        translation files will EACH contain references to the same cells;
        the spreadsheet will find this impossible.  Lotus ".PRN" files may
        be merged because they do not contain specific cell references.


                  MENU ITEM 8 - EDIT FILE -- THE TRANSTOK EDITOR

           The built-in editor within TRANSTOK is customized for working
        with stub and ticker files and for inspecting/fixing quotes that
        could not be processed.  Because of this special purpose, the
        editor is not a full-function word processor.

           It can edit files up to about 45,000 bytes in size, depending
        on the amount of memory in your machine.  The editor will easily
        accommodate the largest stub file you will have.  For example, a
        file containing stubs for the ENTIRE New York Exchange is only
        about 25,000 bytes.  The longest text line the editor will accept
        is 79 characters; but files of stock ticker sysmbols, stubs and
        quotes always have lines shorter than that so you will not
        encounter the 79-character maximum.


        Begin Editing

           To edit a file, choose item 8 on the main menu.  The new screen
        display will ask "Edit which file?".  Provide the name of the file
        you want.  TRANSTOK will retrieve it and then display the first 21
        lines in the file, with the cursor located on the first line.

           To create a new file (instead of retrieving one from disk),
        just press <ENTER> when you are asked "Edit which file?".  The
        editor will give you a blank screen so you can begin typing on

                                    page -13-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        line 1.  The file name displayed at the bottom of the screen is
        called "NEW".  This can be changed later when you save the file on
        disk (see "Quit Editing", below).


        Keys Used by the Editor

           When a file is loaded into the editor, the keys on the IBM-PC's
        keypad immediately take on special duties.  Also, the function
        keys F1 through F9 perform actions which are displayed at the
        bottom of the screen.  Here are what the keypad and special
        function keys do:

           KEY or
        COMBINATION         FUNCTION

        <ENTER>       Move cursor to next line, column 1

        ARROWS        Move cursor up, down, left, and right.

        PgDn/PgUp     Scroll text down and up, 20 lines at a time.

        Home          Move cursor to "home" position (upper left corner).

        Ins           Insert blank space at cursor's current location.

        Del           Delete character above the cursor.

        Backspace     Delete character to left of cursor.

        End +
        left-arrow    Move cursor to left end of text line.

        End +
        right-arrow   Move cursor to right end of text line.

        End +
        up-arrow      Move cursor to screen top (column stays the same).

        End +
        down-arrow    Move cursor to screen bottom (column stays the same).

        End + End     Move cursor to "end" position (lower left corner).

        Ctrl +
        right-arrow   Move cursor one "word" to right.

        Ctrl +
        left-arrow    Move cursor one "word" to left.


        NOTE 1:  21 lines of text are normally displayed on the screen.
                 When PgDn is pressed, what was the 21st line becomes the
                 top line on the new screen, so continuity is maintained.
                 When PgUp is pressed, a similar continuity occurs.

                                    page -14-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS



        NOTE 2:  Where a two-key combination is shown that involves the
                 control key <Ctrl>, the keys must be pressed TOGETHER.
                 Where a combination involves the <End> key, the two keys
                 are NOT pressed together; instead, the <End> key is
                 pressed FIRST, followed by the second key.


        F1 - FIRST   Displays the first 21 lines of the file and places
                     the cursor on the first line.
        F2 - LAST    Displays the last 11 lines of the file; places the
                     cursor on the last item.
        F3 - SORT    Sorts the stubs/ticker symbols being edited.
        F4 - FIND    Activates the "search" function, so text anywhere in
                     the file can be quickly located (see details below).
        F5 - ERASE   Erases everything from the cursor's position to the
                     right end of the line.  If the cursor is in column 1,
                     then the entire line is deleted and text below moves
                     up one line to fill the gap.
        F6 - INSERT  Inserts a blank line; the text below is pushed down
                     to make room for the new line.
        F7 - MARK/UN Marks and Unmarks stubs/ticker symbols (with two
                     asterisks **) so that marked items can be selectively
                     placed in a separate file.
        F8 - PRINT   Sends the text being edited to the printer.
        F9 - QUIT    Stops editing; presents a menu of "save" options.



        The Editor's FIND Feature

           When you press key F4 (FIND), a prompt will appear at the
        bottom of the screen that looks like this:  (ESC) Text to find:

        You will immediately recognize the (ESC) symbol, which indicates
        that escape is available if you pressed F4 by accident.  To find
        text in the file, just type the sequence of characters that you
        want to locate, then press <ENTER>.  For example, if you wanted to
        look for General Motors but couldn't remember the full stub, you
        might key in just "Gen" or perhaps just "Mot" (do not include
        quote marks unless the text you are searching for actually has
        quote marks).

           FIND begins searching for the characters you supplied.  If it
        finds a match, it temporarily stops looking and displays the
        "found" item in the middle of the screen, with the cursor on the
        first letter of the match.

           If this is not the item you had in mind, then press key F4
        again and FIND will look for another match.  However, if the item
        found IS the one you wanted, then press the ESC key to cancel the
        rest of the search.  If there are no matches, then the message
        "Not found" will be displayed at the bottom of the screen.  There
        is no need to press (ESC) if "Not found" is reported, because the
        search cancels itself when no match is found.

                                    page -15-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        The Editor's MARK / UNMARK Feature

           To construct a selected list of stocks, use TRANSTOK's editor
        to retrieve either of the master ".STB" (stub) files.  Then use
        the PgDn and PgUp keys to scroll through the file.  When you see a
        stock that you want to have in a separate "special interest" list,
        just place the cursor anywhere on that item and press key F7, the
        MARK/UNmark key.  The editor will add 2 asterisks ** to the end of
        an unmarked stock name to show it is now "marked".

           If you change your mind or mark one by accident, just place the
        cursor anywhere on that line and tap key F7 again to UNmark it.
        Whenever key F7 is pressed, it reverses the marked/unmarked status
        of the item where the cursor is located.  When you are finished
        marking, press key F9 to quit and select option 3 on the "quit"
        menu, which will write the marked items to disk.


        Quit Editing

           Press the F9 key to exit from the editor; then select:

        1  Save FILENAME   (this is the name of the file you were editing)
        2  Assign new name
        3  Write only marked items -- ## marked
        4  Resume edit
        5  Main menu (no save)

        Here is what each option does:

          1  The text in memory is immediately saved on disk.  The newly
             edited version replaces what was previously stored under that
             file name.

          2  The text in memory is assigned a new file name (which you
             supply) and then stored on disk.  The original disk file is
             unchanged.

          3  The number of items that have been marked is shown on this
             menu line.  You will be asked for a new file name for the
             marked items.  ONLY the marked ones are written to disk.  The
             ** at the end of each marked item is not included in the disk
             file, only the ticker symbol or stub itself (see "Edit File
             Notes", below).

          4  The editing screen returns.  The cursor is at the first line
             in the file, just as if you were starting to edit.

          5  The program immediately returns to the main TRANSTOK menu.
             The text you were editing is NOT SAVED.

           Once a file has been saved, the Editor's "exit" menu remains on
        the screen so you can make the next choice.  Most of the time you
        will return to the main menu; however, you can continue editing
        this file if you wish.

                                    page -16-






        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        Edit File Notes

           When menu option 3 is selected, TRANSTOK will transfer only the
        marked items to disk storage.  Note again, the two asterisks are
        not actually written to disk when using this option.

           If you have marked some items but instead choose option 1 or 2
        (write the file using the old or new file name), then TRANSTOK
        assumes you have a special reason for wanting the ** to stay
        attached to the names.  So it writes the file on disk exactly as
        it appears on the screen.  This is handy when you haven't finished
        marking and will do more later.  However, you should bear in mind
        that a stub/ticker file with ** attached to the names CANNOT be
        used for uploading to The Source, nor for doing a comparison of
        stub lists (TRANSTOK's "Verify" feature).  Obviously, "XYZ Corp**"
        is not the same as "XYZ Corp".


                   MENU ITEM 9 - DISK DIRECTORY AND FILE ACCESS

           Choosing item 9 on the main menu provides disk directories and
        disk file access functions listed on this sub-menu:

         1  Disk Directory
         2  View a file
         3  Rename a file
         4  Erase a file
         5  Print a file
         or (ESC) for Main Menu


        DISK DIRECTORY:    produces this prompt:

           "Disk directory for drive (A,B,C, etc.) or  @xxxx ?"

        To see an entire (root) directory, just press a letter which
        corresponds to the drive name.  Or, you may ask to see only
        selected files listed instead of the whole directory.  To do so,
        type the @ symbol first; then you may type any valid drive, PATH,
        or file specification you wish, including "wildcard" characters
        that DOS allows.  For example, @*.DAT will list only the ".DAT"
        files on the current default drive (or subdirectory).  Other
        examples might be:

        @A:*.STB     @B:NYSE*.*     @C:\STOCK\*.DAT     @C:\STOCK\*.*

           Especially notice the last example, where "\*.*" has been added
        to the subdirectory name.  This is required when you want to see
        all the files listed from a subdirectory.  If you type just
        @C:\STOCK the program cannot tell whether you mean a file named
        "STOCK" that is in the root directory of drive C: or whether you
        actually mean a subdirectory called \STOCK.  It may tell you
        "No such file name(s)"  if you do not clearly indicate that you
        want a subdirectory listing by adding a final backslash and some
        kind of file specifier ( e.g., \*.*   or  \AMEX.* ).


                                    page -17-





        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


           Remember, in other parts of the program, you may also ask for
        a directory of your default data drive (by pressing ALT-D) at any
        time that the program is asking for a file name.  See "Beginning
        Operation With TRANSTOK", near the beginning of this guide) for a
        discussion of this feature.

           Both directory functions retrieve a maximum of 112 file names
        from a disk's directory.  If you have more than that, some will
        not be displayed.  This maximum (which is actually not very
        limiting) coincides with the DOS limit of 112 files on a
        double-sided floppy disk.


        VIEW:
        Allows you to scroll through a file on disk and read it.  Supply a
        file name, then press <ENTER>; the first 23 lines of the text will
        be displayed.  To see the next 23 lines just tap any key other
        than (ESC) which is used to terminate Viewing at any time.

        RENAME:
        Asks for the original and new file name; it then changes the file
        on disk to the new name.

        ERASE:
        Deletes a disk file after you supply a file name and press <ENTER>.

        PRINT:
        Reads the file you specify from disk and sends it to the printer.


                             TRANSTOK ERROR MESSAGES

           TRANSTOK guards against the loss of your data by: (1) checking
        keyboard entries for a valid response, and (2) internally handling
        more serious errors such as a disk-drive door being open or a
        diskette becoming full.

           A "beep" from the PC's speaker that is NOT accompanied by a
        specific error message is TRANSTOK's method of notifying you of
        simple errors, such as inappropriate keyboard entries.  For
        example, a prompt may ask you to choose item 1 or 2 from a menu
        but you accidentally type a 3.  In such cases, TRANSTOK will
        simply ask for the information again.

           In addition to rejecting keyboard mistakes, the error messages
        listed below may appear under certain circumstances:

        Cannot work with FILENAME
        It has too many lines/bytes for TRANSTOK workspace
           The data file being read from disk exceeds TRANSTOK's internal
           limit of 2400 lines.  Or, even with less than 2400 lines, the
           file may be larger than the RAM workspace that TRANSTOK can
           use.  This error will not occur during quote processing, only
           during operations in which the program stores large amounts of
           data in its RAM workspace (e.g., during editing or sorting).


                                    page -18-





        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


        Cannot work with FILENAME
        It has text lines longer than 79 characters
           This message only appears when trying to use the TRANSTOK
           editor on files with very long text lines.  It will not occur
           with stock stubs, ticker symbols, or quotes.

        No such file name(s); OR disk is empty
           This message is produced by TRANSTOK's Disk Directory function.
           It is displayed instead of a directory listing if: 1) there are
           no files with the name you specified; OR, 2) the disk is
           totally blank; OR, 3) the drive does not exist (e.g., asking
           for a directory of drive D: when your PC has only 3 drives).

        DIRectory not available
           You pressed the ALT-D keys (request for default data drive
           directory) but that function is not available in this part of
           the program.  No harm done, just continue your operation.

        Illegal file name; OR too many files in disk directory
           The file name you supplied contains characters that DOS does
           not allow; OR, the total number of files on the disk has
           reached the limit imposed by DOS (112 files for 2-sided
           diskettes, 64 for 1-sided).

        Invalid file name; OR file is not on this disk/subdirectory
           The file name you typed is incorrect; OR, the file name is OK
           but it is not stored on the disk you specified.  In most cases,
           this error is simply the result of misspelling a file name.

        Drive door open; OR invalid drive specifier;
        OR write-protect tab on disk
           TRANSTOK is unable to do a read or write operation because you
           provided an invalid disk drive name, or because it cannot
           properly gain access to the disk (e.g., trying to write onto a
           disk that has the write-protect notch covered).

        Default file, TRANSTOK.DFL, is missing or damaged
           This usually indicates that TRANSTOK cannot find its default
           file, TRANSTOK.DFL.  If the file is indeed on the same disk/
           subdirectory as TRANSTOK.EXE, then some value in the default
           file is out of legal range.  Get out your backup TRANSTOK disk
           and copy the original .DFL file to the work disk.  Then use
           DEFAULTS.EXE to again customize the defaults.

        Program code and/or default file corrupt
           The program cannot run because the TRANSTOK.EXE program OR the
           TRANSTOK.DFL file has become internally damaged/altered;  OR
           the .DFL file you are using is incompatible with this version
           of TRANSTOK.EXE (e.g., an old .DFL file with a new version of
           the program).  Make new working copies (from your most current
           master disk) of TRANSTOK.EXE, TRANSTOK.DFL, and DEFAULTS.EXE.

        Disk is full; deleting incomplete files
           If a diskette becomes full while TRANSTOK is in the process of
           writing a file(s) (e.g., while writing translated quotes), it


                                    page -19-





        PART I                TRANSTOK USER'S GUIDE             OPERATIONS


           stops writing, and then erases the half-written file(s).  Under
           most conditions, it will then return to the main menu.  But, if
           other errors have also occurred, it may exit to DOS.  Once it
           has returned to the main menu, you may try the operation again
           by sending output to another drive or disk that has room.

        RAM workspace is full
        Cannot continue this operation
           While it is possible for this error to be reported, it is
           highly unlikely because of internal safeguards.  The program
           will return to the main menu.  Try the operation again.

        Printer not ready
           This error is reported when your printer is not turned on, or
           its "online" selector is in the offline position, or it is out
           of paper, or its cable to the computer is not attached.  Fix
           the problem, then retry the printing operation.

        Hardware error
        Cannot continue this operation
           You tried to access a disk drive that does not exist; OR DOS
           did not get a response from an existing disk drive.  The
           program returns to the main menu.

        SEVERE ERROR
        Cannot resume or handle internally
           The program has encountered an error from which it cannot
           recover, so it exits to DOS.  This is rare but can happen; for
           example, if it is trying to process stock quotes that are badly
           garbled, due to faulty data transmission across phone lines.

           If this occurs during quote translation, TRANSTOK displays the
           quote it was trying to process when the error occurred.  You
           can also isolate the "problem" quote by looking at the last one
           that was successfully written into the aborted translation file
           (the "bad" one in the raw data file will follow immediately
           after the last good one).  This can be done with the "View a
           File" service available under TRANSTOK's main menu "Disk and
           File Access" option, or by loading the file into the TRANSTOK
           editor (if the file is less than about 45K in size).  Once
           isolated, you should use the TRANSTOK editor (or any other
           editor) to delete badly garbled quotes from the raw data file.

        BAD#    BADNAME!
           Neither of these messages will ever appear while TRANSTOK.EXE
           is operating.  However, on very rare occasions, you might see
           one of them in translated data (e.g., in a spreadsheet or
           database).  If you see either of these messages, you will know
           that the original quote was garbled.  TRANSTOK did the best job
           it could in translating it, but the information is suspect.






                                    page -20-






        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS


            This section of the user's guide gives examples and tips on
        using program features listed in Part I -- Operations.
        Additionally, we discuss in greater detail how to use some of the
        features that have several options available.



                 PROCESSING RAW QUOTES FROM THE UNISTOX DATABASE

        Translated Output From Unistox Quotes

           When TRANSTOK processes a raw Unistox quote from report 139
        (NYSE) or 149 (AMEX), the translated output is divided into 14
        separate data elements or "fields".  In a spreadsheet, these items
        will occupy 14 adjacent columns.  Below are the 14 data elements
        in a processed stock quote:

           1     52-week high.
           2     52-week low.
           3     The letter H or L depending on whether the stock made a
                 new 52-week High or Low in today's trading; otherwise
                 blank.
           4     Stock name.
           5     For a preferred stock, the letters pf (and perhaps more
                 letters) will occupy this field (see example, below).
                 This field is blank for common stocks.
           6     Dividend.
           7     Yield (or percent stock distribution -- see field 8).
           8     The letter Y for a stock distribution in lieu of cash.
           9     Price/earnings ratio.
           10    Today's sales in 100-share lots.
           11    Today's high price.
           12    Today's low price.
           13    Roday's closing price.
           14    The change from the previous day's close.

           During processing, fractions such as 50 1-2 are converted to
        decimals so your analysis software can treat those fields as the
        numeric values they actually are.  Here are examples of raw quotes
        and a portion of their translation into Lotus ".PRN" format.

        35 7-8  25  ABC Corp  4.6 8  9  29  31   30 3-8  30 3-8_  7-8
        35.875,25.000," ","ABC Corp"," ",4.6,8.0," ",9.0,29,...........

           In this first example, field 3 (new high/low) is blank (" ") as
        is field 5 (the "preferred" indicator).  Contrast this with the
        next example, a preferred stock that made a new 52-week low.

        47 1-2  (L) XYZ Corp   5.25pfD 13. *  23 42 1-4 41  41  _1  1-4
        47.500,41.000,"L","XYZ Corp","pfD",5.25,13.0," ",0,23,42.000,41.000,..

           As TRANSTOK examines each quote, it uses fields 3, 5 and 8 to
        indicate anything special about the quote.  Additionally, it
        checks for and corrects several other conditions, including:


                                    page -21-






        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS


        1) Verifying that today's high/low trading price is properly
           reflected in the 52-week high/low fields for stocks that made a
           new high or low today.
        2) Dividing the dividend by today's closing price to compute a
           yield if the yield is missing.
        3) Converting "sales-in-full" to sales in hundred-share lots.
        4) Computing a yield for issues with stock distribution in lieu of
           cash.
        5) Inserting a zero for any value it is able to determine is
           missing.


        The Exception File

           When processing raw stock quotes, occasionally TRANSTOK's final
        summary of activity will show that one (or more) quotes could not
        be processed and were put into the "exception" file.  About 95-98%
        of the time, the reason a Unistox quote is rejected is that it is
        missing some information that the program needs for successful
        processing.  Exceptions are seldom found in StockCheck quotes.

           Often the reason for rejection may not be obvious until you
        inspect the quote carefully.  Below are 3 examples of rejected
        Unistox quotes.  The reason for rejection is noted in each of
        these examples, but is not included in an actual exception file.

        35 7-8  25  ABC Corp  4.6 8   29  31   30 3-8  30 3-8_  7-8
                                    ^ Price/Earnings ratio missing

        9 3-4  2 1-2 DEF Corp .28  1.6 11  10  7 1-2  7 1-4  7 1-2  1-4
                                          "change" symbol missing  ^

        1 3-8 9-32 GHI Corp   * *  29 13-32 13-32  13-32+1-32
                ^                        ^     ^      ^    ^
        TRANSTOK is not programmed to deal with stock sales in 32nds
        because stocks rarely trade that low on either the NYSE or AMEX.

           On rare occasions, TRANSTOK will reject a valid quote because
        of the arrangement of the numbers in it.  For example, in the
        quote below, even the human eye cannot immediately tell whether
        the numbers "1" and "7-8" belong together as "1 7-8" or whether
        they should be separate numbers.  It is little wonder then, that
        the program also has the same trouble!

           Because of the close spacing between the "1" and the "7-8",
        TRANSTOK must assume the two numbers belong together; but, in
        fact, they are separate.  As it processes the subsequent numbers,
        it finds there is not enough data to complete the quote so the raw
        quote is put into the "exception" file for your inspection.

        3 1-4   1-2  XYZ Corp  .05  1.5  9  231  1 7-8  15-16_1-16

           When exceptions are generated, we suggest that you use
        TRANSTOK's editor to retrieve the exception file and inspect the
        rejected quotes.  If those stocks are of no interest to you, then


                                    page -22-





        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS


        just erase the exception file.  If they are of interest, then
        simply use the editor to correct the problems in the quote(s) as
        best you can.  For example, if the "change" symbol is missing,
        then insert the missing symbol.

           In the case of the "1" and the "7-8" example above, just insert
        about 6 spaces between each of the numbers at the tail end of the
        quote so TRANSTOK can easily decide which numbers are supposed to
        stand alone.  Such a quote would look like this after being
        "fixed" with the editor:

        3 1-4   1-2  XYZ Corp  .05  1.5  9  231  1     7-8     15-16   _1-16

        After editing, the quotes in the exception file can be processed
        just like any other file of raw quotes.  Alternatively, you may
        Merge the "fixed" quotes onto the end of their original RAW data
        file (see "Merge", below) and reprocess the entire file.



                           CREATING UNISTOX STUB LISTS

            This procedure (main menu item #2) extracts just the
        abbreviated security names ("stubs") from the reports 139 (for the
        New York Stock Exchange) and 149 (for the American Stock Exchange)
        in the Unistox database, and places the stubs in a separate file.

           Included with each version of TRANSTOK that is released is the
        most current list of Unistox "stubs" for both the NYSE and AMEX.
        These are stored in two files on the disk:  NYSE.STB and AMEX.STB.
        If you get a copy of TRANSTOK from a friend and the DOS file
        directory listing (DIR) shows file dates more than a month old,
        some of the stubs in those files will have been changed by The
        Source.  There are two methods for getting a current list:

           1)  Get a current stub list directly from StockBridge Software
               (see Part IV of this manual for the procedure).

        or 2)  Download quotes for the entire NYSE or AMEX and extract the
               stubs from those quotes using menu item #2.

           Once you have current stubs, they can be used in conjunction
        with the TRANSTOK editor for creating lists of "special-interest"
        securities without tedious, error-prone keyboard entry.  You can
        use these stub files to create portfolios of the various groupings
        of stocks you want to follow.  TRANSTOK allows you to group stocks
        together in ANY manner you choose and to follow them in a single
        report.  For example, you could:

        1.  Follow not only the Dow Jones averages, but all the Dow stocks
            themselves, each in a separate portfolio of Industrials,
            Transportation, Utilities, and Composite.

        2.  Follow the S&P 500 stocks and the S&P 400 industrials in
            separate reports.

                                    page -23-






        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS


        3.  Create a portfolio of stocks for every month where there is an
            option traded.  You can now follow all the January, February,
            March, etc., stocks where options are available and follow
            them in a single report.

        4.  Follow stocks by industry groups:  The oils, airlines,
            computers, high technology, etc.

        5.  If you follow any of the index options (CBOE S&P 100; AMEX
            major market index, market value index, computer technology
            index, oil & gas index, oil index, and transportation index;
            the Philadelphia gold & silver index; the PSE technology
            index), create a portfolio of stocks that make up each index
            and track the price performance of each stock versus the
            component index.

            To maintain a current stub list, you can download Unistox
        report 000 once a week to check on stub changes The Source may
        have made during the previous week.  You can incorporate any
        changes into your master list quickly with the TRANSTOK editor
        (see Editor, in both Part I and Part II).



                   PROCESSING RAW QUOTES FROM SOURCE-STOCKCHECK

        Translated Output From StockCheck Quotes

           When TRANSTOK processes a raw StockCheck quote, the translated
        output is divided into 7 separate "fields".  In a spreadsheet,
        these will occupy 7 adjacent columns.  Below is a list of the 7
        data elements in a processed quote:

           1     Ticker symbol assigned by the stock exchange.
           2     Price/earnings ratio.
           3     Today's sales in 100-share (round) lots.
           4     Today's high price.
           5     Today's low price.
           6     Today's closing price.
           7     The change from the previous day's close.

           Here is an example of 3 StockCheck quotes, both in their raw
        form and after TRANSTOK has prepared them for Lotus 123/Symphony.

           10/31 18:15 AB   ..   439    2 3/8   2 1/8   2 1/4      ..
           10/31 18:15 SDJ  20   87   149 3/8  147 7/8   148   +1 5/8
           10/31 18:15 PDQ  14  6311   14 5/8  14 3/8  14 3/8   - 1/8

           "AB",0,439,2.375,2.125,2.250,0
           "SDJ",20,87,149.375,147.875,148.000,+1.625
           "PDQ",14,6311,14.625,14.375,14.375,-.125

        NOTE:  Raw StockCheck quotes for stocks trading in the Over-the-
               Counter market do not contain price/earnings ratios (data
               element 2, above).  TRANSTOK fills in the "missing" P/E


                                    page -24-





        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS



               ratio with a zero.  If you want to have something other
               than a zero displayed for the missing P/E, use item 6 on
               the DEFAULTS.EXE main menu to specify any substitute that
               you wish.



               VERIFYING STUBS/TICKER SYMBOLS AGAINST A MASTER LIST

           Suppose you have a list of about 300 stubs for stocks that are
        of special interest to you.  One of the Unistox reports available
        from The Source is report number 087, which lists the stubs for
        all stocks (on both the NYSE and AMEX) that made a new 52-week
        high or low in today's trading.  Here is how Verify can help you
        use the 087 report.

           To find out if any of the stocks on your "special-interest"
        list made a new high or low, just download report 087 and use the
        TRANSTOK Verify feature to compare the two lists.  TRANSTOK will
        be done comparing in less than 30 seconds.  Depending on the
        outcome of the comparison, TRANSTOK puts stubs from report number
        087 into 3 separate files (GOOD####.STB, NEAR####.STB, and
        EXCP###.STB).  See Part I, "Verify" for more information about
        these files.

           When you get the Unistox report 087, you will notice that it
        contains only the abbreviation of the company name (stub).  To
        complicate matters, the stub on the new high/low list MAY NOT be
        the same as the stub used by Unistox in the actual stock quotes.
        (The reason why The Source allows this discrepancy absolutely
        escapes us.)

            If there are no stocks in the "NEAR" or "EXCP" files that
        interest you, just erase the files.  However, if there APPEAR to
        be names in either of these files that look familiar, or for which
        you might want to see the daily trading summary, use the TRANSTOK
        editor to retrieve the NEAR####.STB file.  This file lists both
        the stub as it exists in your master file and as it was "spelled"
        in the 087 report.  Delete the stub that came from 087 and upload
        the correct stub from the master stub file.



                            SORTING STUB/TICKER FILES

           At times, you may find it convenient to sort lists; for
        example, after several stub or ticker symbol files have been
        MERGEd together (see Merge Two Files, below).  If several lists
        have been joined, the names will be out of order and may contain
        duplicates.  Sorting will put the new list into order and
        identical items will appear adjacent to each other.  Duplicates
        can then be deleted with TRANSTOK's editor.


                                    page -25-







        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS



           For example, suppose you had used Merge to join your
        GOODxxxx.STB file with your NEARxxxx.STB file, after you had
        edited the NEARxxxx.STB file with the TRANSTOK editor.  Once the
        file is Sort(ed), you can use the editor to delete duplicates and
        thus prepare the file for uploading to The Source.



                                  MERGING FILES

            You can use the Merge option to join files together to form a
        single file.  Suppose, for example, you had used the TRANSTOK
        Verify option to see if any stocks on the daily new high/new low
        list were stocks you were interested in.  Again, suppose that you
        found some stocks in the GOOD####.STB file that you were
        interested in, and also some stocks in the NEAR####.STB file.

           After using TRANSTOK's editor to clean up the NEAR####.STB
        file, you can use Merge to join the two files together.  Then the
        Merge(d) file can be uploaded to The Source to get quotes for
        those stocks.  In some cases, you may also want to have TRANSTOK
        Sort the list before uploading.

             Even though you maintain separate portfolio lists, you may
        wish to see quotes for all your stocks in one large worksheet or
        database.  Here again, Merge can help by joining all your separate
        lists into one large file instead of uploading several files.
        This can also save you some connect time/charges.



                            EDITING STUB/TICKER FILES

           Because the TRANSTOK editor is customized for working with
        stub/ticker files and for inspecting/fixing quotes, its services
        are extremely useful in conjunction with other options in the
        program.  Also, since it is built into TRANSTOK, you do not have
        the bother of exiting from this program and loading another editor
        to look at or change text files used by TRANSTOK.


        Using The Editor's FIND Feature

           The FIND feature operates so quickly that it can also be used
        for moving from one part of a file to another.  For example, if
        the top of the file is displayed on the screen and you wanted to
        look at stubs that begin with the letter "S", there is no need to
        use PgDn to scroll all the way through a long file.  Just use FIND
        and have it search for either "Sa" or "SA" (without quote marks)
        to rapidly get to the beginning of the "S" series of stub names.

           FIND can also be used in conjunction with both Mark/Unmark and
        Delete so you can quickly locate certain stubs and then carry out
        the next operation (see example below under "Using Mark").


                                    page -26-





        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS


        Using The Editor's MARK and UNMARK Features

           One of TRANSTOK's handiest features is its ability to work with
        many different stocks without ever asking you to type in a long
        list of stock names or symbols.  The Mark/Unmark function (key F7)
        has a primary role in making TRANSTOK a joy to use instead of a
        tedious and error-prone typing exercise.

           On your TRANSTOK distribution disk are two files called
        NYSE.STB and AMEX.STB.  They contain the Unistox stubs for all the
        securities listed on the New York and American Exchanges.  From
        these master stub files, you can easily select one or many
        specialized lists.

           For example, if you follow and analyze oil stocks, you can use
        the editor to retrieve and then page through the master stub file
        to select a portfolio or "special interest" list of just oil-
        related stubs.  There is no limit to the number of stubs in a
        special list, nor is there any limit on the number of lists you
        may have.  If you want to select a special list for every major
        industry group, TRANSTOK makes it easy.

           As explained in Part I, Operations, an item is Mark(ed) simply
        by placing the cursor anywhere on the same line as the item and
        then pressing key F7.  See Part I for a full discussion of the
        various options available once stubs have been Mark(ed).

           In many cases, the Mark feature can be combined with the
        editor's Find capability to give you a way to quickly find and
        mark stock stubs that belong to an industry group.  For example,
        the stubs for a great many airline stocks contain the letters
        "Air".  To rapidly isolate them you would:

        1) Retrieve the master NYSE.STB stub file (or AMEX.STB).
        2) Press key F4 (Find); it will respond with:
           (ESC) Text to Find:
        3) You type "Air" (without the quote marks) and press <ENTER>.
        4) When it finds the first occurrence of "Air" just press key
           F7 to mark that item.

           From then on, you just alternate between key F4 to Find the
        next occurrence of "Air" and key F7 to Mark it.  With just two
        keystrokes you can continue to isolate each "Air" stub on the
        entire NYSE or AMEX.  When Mark(ing) is complete, select item 3 on
        the "quit" menu (Write only Marked Stubs) and your list of airline
        stocks will be saved as a separate file.  The whole process takes
        less than 2 minutes from the time you first retrieve the master
        stub file until the separate airline list is written on your disk.


                  MOVING TRANSLATED DATA INTO ANALYSIS SOFTWARE

           While it is impossible to provide examples for all of the
        hundreds of programs that can import data from TRANSTOK
        tranlations, we show examples for a couple popular programs below.


                                    page -27-





        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS


        By looking at them, you can see how easy it is.  Check the
        documentation that comes with your analysis program for the
        specific commands it needs.


        Lotus 1-2-3 Example

           First place 1-2-3's large cell cursor in the cell where you
        want to locate the UPPER-LEFT corner of the spreadsheet.  Then:

        KEYSTROKE(s)        COMMENT

        /                   Switch from data-entry to command mode
        F                   (F)ile command
        I                   (I)mport command
        N                   (N)umbers command

           Then follow the normal 1-2-3 procedure to indicate which file
        name you want.


        Multiplan Example

           Before having Multiplan actually read the TRANSTOK data
        translation, you must tell MP what kind of file it will be
        reading.  Multiplan provides 3 choices:

            Normal   - Multiplan's standard binary spreadsheet format.
            Symbolic - Microsoft SYLK format (one of TRANSTOK'S options).
            Other    - Prior to version 2.0 of Multiplan, VisiCalc .VC
                       format (also a TRANSTOK option) was the "other"
                       file format.  In version 2, Lotus 1-2-3's binary
                       .WKS files is the "other" type.

        To tell Multiplan the file type, do this:

        KEYSTROKE(s)        COMMENT
        T                   (T)ransfer command
        O                   (O)ptions command
        S or O              (S)ymbolic for SYLK or (O)ther for .VC
        <ENTER>

           Then follow Multiplan's normal file loading procedure.  Once
        the data has been imported, you may save it as a "Normal" (binary)
        worksheet by again using (T)ransfer, (O)ptions.  Only this time
        you tell MP that you want to reset the file type to (N)ormal.


        Database Example

           To have data management software manipulate and screen stock
        market data, you must first tell the program how the database will
        be structured.  It must know how many fields there will be, what
        their names are, how wide the fields should be, and (for many
        programs) the type of data each field will contain (e.g., whether
        the data is alphabetic or numeric).

                                    page -28-





        PART II             TRANSTOK USER'S GUIDE             APPLICATIONS


           Follow the procedure your program uses for creating a new
        database.  You should only need to do this ONCE, before you import
        data for the first time.  From then on, that database definition
        is reused each time you move translated data into the program.
        Here is the information about each data element in a translated
        Unistox quote that you can use to set up a database.

         DATA               SUGGESTED    FIELD WIDTH     DATA
        ELEMENT             FIELD NAME   (characters)    TYPE

        52-week high           HI52          7        numeric (decimal)
        52-week low            LO52          7        numeric (decimal)
        new high/low flag      H/L           1          alphabetic
        stock name             NAME         15          alphabetic
        preferred stock flag   PF            4          alphabetic
        dividend               DIV           4        numeric (decimal)
        yield                  YIELD         5        numeric (decimal)
        stock distribution     STK           1          alphabetic
        price/earnings ratio   PE            4        numeric (decimal)
        sales in 100's         SALES         5             "
        today's high           HIGH          7             "
        today's low            LOW           7             "
        today's close          LAST          7             "
        change                 CHANGE        7             "

        NOTE:  Some programs don't care about the data type, others are
               very fussy.  Moreover, some do not distinguish between
               numeric-integer (e.g., 100) and numeric-decimal (e.g.,
               100.125); they treat all numeric data the same.

           Once a database structure has been defined, just follow the
        program's normal proceedure for importing data.  For dBASE, the
        command to import data which has a Lotus ".PRN" format, is:

        For dBASE II:        APPEND FROM <filename> DELIMITED
        For dBASE III:       APPEND FROM <filename> DELIMITED WITH ,

        For PC-File III, you simply run its PC-IMPOR.EXE utility program
        to import data that is in Lotus ".PRN" format.

















                                    page -29-






        PART III           TRANSTOK USER'S GUIDE            COMMUNICATIONS


           This section of the user's guide concentrates on communicating
        with The Source to retrieve quotes from either of the databases
        supported by TRANSTOK:  StockCheck and Unistox.

           PLEASE NOTE:   This section of the TRANSTOK manual is NOT
        intended to be a substitute for the information contained in your
        Source user's manual!  Here, we simply want to pass along to
        TRANSTOK users some tips and information that we have discovered
        that do not seem to be clearly discussed in The Source user's
        manual.

            Many subscribers use the facilities of The Source only for
        downloading information.  However, The Source Command Level can be
        a two-way street.  That is, one of its options is accepting lists
        of stock names that you upload.  Then, based upon your uploaded
        list, a database is searched and only the quotes for those
        specific securities are downloaded.  The stock "names" that you
        upload can be either:

            1. Stock exchange ticker symbols used in the StockCheck
               database.
            2. Stock name abbreviations called stock "stubs" used in the
               Unistox database.


                 GENERAL CONSIDERATIONS IN SELECTING A DATABASE

        Advantages and Disadvantages of StockCheck

        Advantages:  (1) The key identifier for a company in this database
          is the ticker symbol assigned by its trading market (e.g., NYSE,
          AMEX, or OTC), which rarely changes.  (2) Creation of the
          download file by the Source computer is faster than with
          Unistox.  (3) Over-the-counter (OTC) stocks can be included in
          your portfolio.

        Disadvantages:  (1) Less data per stock quote than Unistox (7 data
          elements versus 14 in Unistox); (2) The Source does not make it
          possible to retrieve an entire day's trading on an exchange just
          by specifying a report number (as can be done in Unistox).
          Instead, a file (list) of specific ticker symbols must first be
          uploaded; or, each symbol must be individually entered from your
          keyboard, one symbol at a time.


        Advantages and Disadvantages of Unistox

        Advantages:  (1) There is more information contained in each
          Unistox quote than in any other electronic database that we are
          aware of; (2) after translation by TRANSTOK, retrieved quotes
          present information in the same format that you are accustomed
          to seeing in your favorite newspaper; (3) you have the option of
          requesting quotes for only specific securities.  Or, if you
          wish, you can download quotes for an ENTIRE market (exchange)
          just by providing the appropriate report number.


                                    page -30-





        PART III           TRANSTOK USER'S GUIDE            COMMUNICATIONS


        Disadvantages:  (1) If quotes for only selected securities are
          being requested (as opposed to the entire exchange), you MUST
          know the stock stub.  (2) The "spelling" of specific stubs in
          this database changes from time to time for no apparent reason,
          which means you have to update your master list.  (3) The Source
          computer takes somewhat longer to create the download file than
          with StockCheck.

        Summary of Advantages and Disadvantages

           If your primary goal is simply to get the most recent trading
        volume and prices of stocks you follow, then the higher speed of
        the StockCheck database is preferable.  If however, you want the
        most complete information available (e.g., to do analysis), then
        the Unistox database makes the most sense.


                           CREATING CUSTOM PORTFOLIO(s)

           From the StockCheck database you can download quotes based only
        on a previously uploaded list of stock ticker symbols.  StockCheck
        does not allow you to download quotes for an entire day's trading
        from an exchange.  If you want to use StockCheck to follow only
        selected stocks on the AMEX, NYSE and/or the Over-The-Counter
        market, you can mix ticker symbols from any of these markets in a
        single list that you then upload to The Source.

            If you want to use Unistox to follow selected issues on both
        the NYSE and AMEX, you MUST maintain a separate stub list for each
        exchange.  These lists (portfolios) can easily be created offline
        with the TRANSTOK editor.  (See Editor in both Part I and II for a
        discussion of how to select stubs for custom portfolios).


             OVERVIEW OF FILE NAMES USED IN UPLOADING AND DOWNLOADING

            There are several different files being created when uploading
        portfolios and downloading stock quotes.  Here, we simply want you
        to become aware of the general scheme for naming such files and
        the sequence in which they are created.

           In the pages that follow (in Part III), we discuss the general
        procedures for uploading and downloading files.  In Appendices C
        thru K, we give examples of the actual procedures and commands
        involved.  Throughout all these discussions and examples, we will
        consistently use the following HYPOTHETICAL file names:

        UPFILE   -- A file of Unistox stubs, or StockCheck ticker symbols,
                    that you create offline with the TRANSTOK editor and
                    then upload to The Source.

        QUOTFILE -- A file of raw stock quotes that The Source computer
                    creates in a "COMO" file while you are online.  After
                    it has been created, you download this file.  "COMO"
                    files can be used for either StockCheck or Unistox.


                                    page -31-





        PART III           TRANSTOK USER'S GUIDE            COMMUNICATIONS


        A.  Offline -- prior to connecting with The Source

          Create your portfolio(s) of stubs and/or ticker symbols using
          the Mark feature in the TRANSTOK editor (see Part I, Operations
          and Part II, Applications).  Give them any legal file name that
          makes sense to you and store them on disk.  For example:
          NYSE.STB, or STUB.NYS, or MYFILE.

        B.  Online -- when connected with The Source

            1) Uploading:   Provide The Source computer with a name it
               should use to store your uploaded file of stub or ticker
               symbols, (for example, UPFILE).  This can be the same or a
               different file name that you used when the stub/ticker
               files were created offline with the TRANSTOK editor.  The
               Source computer "understands" file names either with or
               without a file-name extension, and in either upper- or
               lower-case (e.g., MYFIL or my.fil; it makes no difference).

            2) Downloading:  Provide The Source computer with a file name
               it should use to store your raw stock quotes in; this is
               called a "COMO" file.  For example, the command might be:

               -> COMO QUOTFILE -N

               This file CAN NOT have the same file name as the stub (or
               ticker symbol file) that you uploaded.  To download your
               raw stock quotes (the "COMO" file), you issue the command:

               -> TY QUOTFILE

        (( NOTE:  You DO NOT issue the command:   -> TY UPFILE ))

           When capturing data, be sure to store it on your disk using a
        file name that is relevant to you.  For example, RAW0701.DAT (raw
        data for July 1), or ASE0901.RAW (raw data from the AMEX for
        September 1).  Any word association which ties the exchange and
        the day's trading session together will be useful in keeping
        different days' trading segregated.


               OVERVIEW OF STOCK QUOTE RETRIEVAL FROM EACH DATABASE

           There are several different methods for retrieving quotes from
        both the StockCheck and Unistox databases.  Again, specific
        examples are provided in the Appendices.  Here, we want to
        familiarize you with the general concepts involved.

        Getting Quotes From StockCheck

           1)  Upload a list of ticker symbols to The Source and store
           them in a file on their computer.  The Source computer then
           retrieves just the raw quotes from its database that match the
           ticker symbols in your upload file.  It stores the quotes in a
           "COMO" file.  When it has finished, you download the COMO file.


                                    page -32-





        PART III           TRANSTOK USER'S GUIDE            COMMUNICATIONS


           While the COMO file is being created, you will not see the
           Command Level prompt ( -> ).  This search and file building
           typically takes only a few seconds; but, if The Source computer
           is extremely busy, it can take 10 minutes.

        OR

           2)  Select the StockCheck database at the Command Level prompt
           ( -> ).  Enter the name of the file containing the list of
           ticker symbols that you have previously uploaded.  You can
           watch as each quote is found and then downloaded to you.  As
           this method skips the building of a COMO file, it can take
           longer to get an equivalent number of quotes than method 1.

        OR

           3)  Select the StockCheck database at the Command Level prompt
           ( -> ).  Enter stock ticker symbols one at a time from the
           keyboard.  This is a much less desirable alternative than
           either method 1 or 2.  Entering ticker symbols from your
           keyboard is prone to error, time-consuming, and, in the final
           analysis, costly.  TRANSTOK is designed to take advantage of
           method 1 or 2, so you will probably never use method 3.


        Getting Quotes From Unistox

           1) Select the Unistox database at Command Level ( -> ).  Enter
           the report number for the appropriate exchange (139 for NYSE or
           149 for AMEX) and retrieve quotes for ALL stocks on the entire
           exchange that had trading activity today.

        OR
           2) This method for getting quotes for selected stocks from
           Unistox is nearly identical to method #1 in the StockCheck
           database.  The raw quotes are assembled in a COMO file, based
           on the list of stock names that you uploaded.  The primary
           difference is that you must specify a report number in Unistox,
           report 139 for the NYSE or 149 for the AMEX.

        OR
           3) This method of getting quotes for selected issues and seeing
           each line of data as it is being downloaded to you is nearly
           identical to method #2 in the StockCheck database.  You specify
           a report (either 139 or 149), and provide the name of the file
           that contains your previously uploaded stock stubs.  Here
           again, not using a COMO file can take longer.

        OR
           4)  Select the Unistox database at Command Level ( -> ).  Enter
           the report number for the appropriate exchange (139 for New
           York and 149 for American) and enter one stub at a time from
           the keyboard, or the first four letters of your "best guess" as
           to what the stub is.  If you enter a "best guess", you will get


                                    page -33-






        PART III           TRANSTOK USER'S GUIDE            COMMUNICATIONS



           quotes for all stocks that match the four letters you supplied
           as the first part of the stub.  Only one of these will be the
           one you want.  (This is clearly the least desirable of the four
           alternatives.)



                 MIXING AND MERGING:   NYSE, AMEX AND O-T-C DATA

           In the StockCheck database you can follow all your stocks, from
        all exchanges and from the over-the-counter market, in a single
        portfolio, because you can mix the ticker symbols together.

           If you use the Unistox database to follow stocks, you should be
        aware of the following:

        1) DO NOT mix both AMEX and NYSE stubs in a single upload file.
        If you do, The Source computer will spend a lot of your connect
        time searching its NYSE stock report for the non-existent AMEX
        stubs/stocks and vice-versa.  Keep keep your stub lists for each
        exchange separate.

        2) After separate files of raw AMEX and NYSE quotes have been
        received and stored on your disk, you can use TRANSTOK's MERGE
        feature to combine all the quotes into a single file before
        TRANSTOK translates the raw data.  However, DO NOT combine raw
        StockCheck quotes and raw Unistox quotes in the same file.

        3) Do not retrieve or attempt to translate OTC stocks from the
        Unistox database.  This version of TRANSTOK provides translation
        only for the Unistox-NYSE and Unistox-AMEX.  However, as noted
        above, OTC quotes CAN be obtained from the StockCheck database.

        4) DO NOT use TRANSTOK's Merge feature to combine quotes that have
        already been translated (see Part I, "Merge Two Files").



                          COMMUNICATING WITH THE SOURCE

           Using your communications software, sign on to The Source.
        You will see the following message on your screen:

        WELCOME TO THE SOURCE

        1  USING THE SOURCE
        2  TODAY
        3  BUSINESS UPDATE
        4  THE SOURCE MAIN MENU
        5  WHAT'S NEW
        6  COMMAND LEVEL

        Enter item number or help


                                    page -34-






        PART III           TRANSTOK USER'S GUIDE            COMMUNICATIONS


           To access stock and other financial market quotations, choose
        the "Command Level" (number 6), then press the ENTER key
        (hereafter designated as <ENTER>).  The Source responds with its
        Command Level prompt ( -> ).  It is at this prompt that you enter
        commands which give you access to the various financial databases.

           WARNING:  Before you start to upload and download data, we
        recommend that you specify that you DO NOT want to CHAT while
        uploading or downloading.  You do this at Command Level by typing:

           -> CHAT -OFF <ENTER>

        The LAST thing you need when uploading or downloading data is
        another subscriber interrupting the data transmission with CHAT.
        If you want to CHAT later, go back to Command Level and restore
        the CHAT facility by typing:

           -> CHAT -ON <ENTER>



                         DELETING FILES AFTER DOWNLOADING

            Once you have downloaded and captured your data and are once
        again at The Source Command Level prompt ( -> ), you should decide
        whether to leave your uploaded file of stock names stored in The
        Source computer or to delete it.  In some cases, you may find that
        storage charges are less than the connect time needed to upload
        the file at a future date.  Also, the convenience of not having to
        again upload a list may be attractive to you.

           In other cases, it is more economical to erase the list of
        stock names, particularly if the stocks on your list change (e.g.,
        if you follow stocks making new highs and lows).  Any "COMO" files
        that were created should definitely be deleted, because they hold
        the raw quotes which you have already downloaded.

          To delete a file, at the command level prompt ( -> ), do the
        following:

           -> DEL FILENAME <ENTER>    (The Source will respond with:)

              FILENAME Deleted.

            Also, at the command level prompt ( -> ), you can delete all
        files you have stored at The Source at various times (and forgot
        about) with a single delete command:

           -> DEL@@ <ENTER>           (The Source might respond with:)

              MYFIL Deleted.
              THIS.FIL Deleted.
              THAT.FIL Deleted.



                                    page -35-






        PART III           TRANSTOK USER'S GUIDE            COMMUNICATIONS



                              GETTING OFF THE SOURCE

            Once you have completed uploading, downloading, and deleting
        files, go back to The Source Command Level prompt ( -> ).  To
        PROPERLY EXIT The Source, type OFF.  The Source will go through
        its own log-off sequence, and you can then "hang up" your modem.

        NOTE:  If you do not type OFF at Command Level ( -> ), but simply
        disconnect your modem, The Source does not log you off
        immediately.  To avoid connect charges when you are not actually
        using the service, be sure to properly log off after each session.












































                                    page -36-






        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


                             USER-SUPPORTED SOFTWARE

           TRANSTOK is distributed under the "user-supported" concept.
        This means you get to try a full working version of the program,
        not a "demo" that has many of its functions disabled.  Moreover,
        the trial isn't for just 10 minutes in a crowded store, but in the
        comfort of your home or office and at your own pace.  However,
        TRANSTOK is NOT free software, nor is it "public domain" software.
        If you decide to use TRANSTOK, after thoroughly testing it at no
        cost, we trust that you will send a $30 payment for the program
        to:
                               StockBridge Software
                                   PO Box 2470
                             Redmond, WA  98073-2470

        If the program doesn't meet your needs, then you have lost
        nothing.  Our only request is that you pass copies along to
        friends and associates for their evaluation.

           Direct user-support of software authors works well because
        users get GOOD QUALITY SOFTWARE AT LOW COST.  This is possible
        because expensive advertising, copy protection schemes, and a long
        distribution chain (publishers, wholesalers, distributors, and
        dealers) are eliminated.  You deal directly with the authors.
        The user-supported concept is based on these beliefs:

        1)  The value and utility of software is best assessed by users on
            their own computer system.
        2)  Users should be able to obtain quality software at a
            reasonable cost, while, at the same time, software authors are
            fairly compensated for their efforts.
        3)  The best programs will survive, based purely on their quality,
            usefulness, and how well they are supported by their authors,
            NOT just because the vendor has a large advertising budget.

           If you believe in these ideals, your payment is requested to
        help make them work.  Thank you for supporting TRANSTOK and
        advancing the user-supported concept.


                            GETTING COPIES OF TRANSTOK

           While we strongly encourage users to pass copies of TRANSTOK
        along to others, this method has the disadvantage that you may not
        be getting the most current version of the program.  Also, a copy
        passed from user to user may well have lists of stock names that
        are not current or may have been modified by a previous user.
        Therefore, a copy directly from StockBridge Software assures you
        of the most up-to-date version of both the program and data files.
        You can get a copy from us by one of these methods:

        1)  Send a $30 payment to become a registered user and tell us
        which version number you have.  If a more recent version exists,
        we will immediately send it to you, at no cost, as our thanks for
        registering.


                                    page -37-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


        2)  An easy way to get an evaluation copy is to send $10 to
        StockBridge Software.  We will supply all the program, data, and
        documentation files plus a disk, mailer, and postage.  Should you
        decide that TRANSTOK meets your needs, you will receive a $10
        credit toward the $30 user registration payment.

           In addition to the program, we always maintain the most current
        list of stock name abbreviations (stubs) used in the Unistox
        database.  While the TRANSTOK program provides all the tools you
        need to maintain your own current list of names, we recognize that
        some investors simply don't have as much time as they would like
        for tracking and analyzing securities, much less for maintaining a
        name list.  Therefore, any registered TRANSTOK user can order a
        disk containing complete and current files of Unistox NYSE and
        AMEX stock name abbreviations ("stubs") from us for just $10.



                      SUGGESTIONS, FEEDBACK, AND BUG REPORTS

           We welcome and appreciate any feedback, suggestions, and
        problem reports about TRANSTOK or its documentation.  We want to
        respond to your questions and suggestions and to notify you of
        enhancements as we develop them.  Also, if you provide your Source
        mailbox number, we will be able to leave messages for you about
        new releases and revisions to TRANSTOK.

           Support is provided to users who have paid for the program.
        Send questions to us by mail (a stamped, self-addressed envelope
        will speed replies) or to our Source mailbox (BBF925).  If you
        have a bug report, include:  (1) a description of the conditions
        under which it occurred; (2) what hardware you have and what other
        software you use in conjunction with TRANSTOK; and (3) any
        explanatory notes.

           We are presently designing future versions with enhancements.
        However, we know from experience that excellent suggestions for
        new features and improvements come from investors using TRANSTOK
        on a regular basis.  We can't promise that every suggestion will
        be included, but you can be sure that your comments will be
        thoughtfully considered.

        *  Are there any changes that would make the documentation or
           programs easier for you to use, or any "missing" functions?

        *  Are there other Source financial databases for which you would
           like TRANSTOK bridge translations?

        *  Are there any data formats that you would like TRANSTOK to
           support other than the three it does now (Lotus ".PRN",
           Microsoft "SYLK", and VisiCalc ".VC").

        *  Are there on-line databases, other than The Source, that you
           would like to have TRANSTOK translate (e.g., CompuServe, Dow
           Jones, Warner, etc.)?


                                    page -38-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES



                                PERMISSION TO COPY

           Unlike software distributed through retail channels, you are
        encouraged to pass along copies of TRANSTOK so that other users
        can evaluate it.  Copying is subject to the following:

        1)  TRANSTOK is copyrighted and may not be copied if it has been
        modified, or if the copyright notices are altered.

        2)  It must be copied and distributed as a complete package.  This
        includes the TRANSTOK.EXE and DEFAULTS.EXE programs, the default
        file, the documentation file, and all data files that are included
        on this distribution disk.

        3)  No fee may be charged for copying, nor for the software itself
        unless specific written permission has been granted by StockBridge
        Software (see exception for non-profit groups in item 5).

        4)  Commercial sale of TRANSTOK is prohibited unless marketing and
        royalty agreements have been obtained from StockBridge Software.

        5)  Non-profit computer clubs and investment clubs are hereby
        granted permission by StockBridge Software to copy these programs
        and documentation and share them with their members, so long as:

           a) No price is charged for the software or documentation.
              However, a service fee may be requested to cover the cost of
              a diskette and copying.  This fee may not exceed $10 and
              members must be informed that the service fee is NOT a
              payment for the software itself.

           b) Club members are informed of the user-supported concept and
              are encouraged to support it.

        6)  Non-profit computer bulletin boards may make TRANSTOK
        available to their users.  The same restrictions and contribution
        encouragement, outlined above, apply.



                                    DISCLAIMER

           Because StockBridge Software has no control over how you use
        this software, nor the conditions under which you use it, we
        cannot and do not warrant its performance.  The TRANSTOK software
        is sold on an "AS IS" basis.  StockBridge Software makes no
        warranty, either expressed or implied, that the programs will
        achieve the results you desire; it is your responsibility to
        determine this under your specific conditions.  In no case, shall
        StockBridge Software be responsible to you for any direct,
        incidental, or consequential losses, damage, lost savings, lost
        profits, or costs that may occur in using TRANSTOK.



                                    page -39-






        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


                                    TRADEMARKS

           The following, which are mentioned in this manual, are
        trademarks, service marks, and/or copyrighted material of their
        respective organizations:  TRANSTOK/StockBridge Software;  IBM-PC,
        PC-XT, PC-AT, PC-jr/International Business Machines Corp.;
        Multiplan, Chart, and SYLK/Microsoft Corporation;  Lotus 1-2-3 and
        Symphony/Lotus Development, Inc.;  PC-File III/ ButtonWare;
        dBASE/Ashton-Tate;  R:BASE/MicroRIM, Inc;  VP-Planner/Paperback
        Software;  StockCheck/Associated Press;  The Source/Source
        Telecomputing Inc.; Unistox/United Press International;
        SuperCalc3/Sorcim;  VisiCalc/VisiCorp.


                                    APPENDIX A
              ADDITIONAL NOTES ON DATA TRANSLATION AND FILE FORMATS

           With hundreds of different database, spreadsheet, and
        investment analysis programs on the market, it is impossible to
        list all the different programs and types of data files they are
        capable of reading.  If you want to import translated quotes from
        TRANSTOK into an analysis program, we recommend that you check its
        documentation to see which data formats it can accept.  Many
        programs can read at least one of the "industry-standard" formats
        supported by TRANSTOK; some can read more than one.  For example,
        Microsoft's Multiplan (prior to version 2.0) has a built-in
        capability to read VisiCalc's ".VC" files and often does so faster
        than reading its own SYLK files.  Thus, it pays to experiment if
        you have a program that can read more than one of the formats
        TRANSTOK can write.

           Some programs may not have a built-in capability to read ANY of
        the standard data formats that TRANSTOK supports.  However, it is
        common for such programs to have a separate translation program on
        its disk.  For example, SuperCalc3 has a utility program which
        prepares a data file that is in one of the widely-used formats for
        SuperCalc's own unique requirements.  Unfortunately, data imports
        into such software requires two translations, rather than the
        direct import normally available from TRANSTOK.


                                    APPENDIX B
                  TRANSLATING ONLY PART OF A FILE OF RAW QUOTES

           Here is an example of how to use the "Partial file" option when
        processing and translating quotes (choice #1 or #3 on TRANSTOK's
        main menu).  This option is needed when the analysis program you
        want to use has a limit on how many quotes it can accept in one
        file, or is limited by the amount of RAM in your computer.

           Suppose you downloaded quotes for a large number of stocks, say
        400.  To analyze this data with VisiCalc, which has a limit of 255
        lines on a spreadsheet, the raw file must be translated in two
        separate groups.  In this case, two blocks, of about 200 lines
        each, would work well.


                                    page -40-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


           To do this, you use the processing option called "Partial
        file"; TRANSTOK will ask for the beginning and ending line number
        for the partial translation.  In this example, you would specify
        that processing begin with line 1 and end with line 200 for the
        first partial translation.  When that is finished, you would again
        invoke Process from the main menu, only this time you specify that
        processing should start at line 201.

           For the ENDING line, you should provide a number that you KNOW
        is larger than the number of lines contained in the raw file; in
        this example, line 500 would do nicely.  The larger number will
        insure that the entire file will be processed, whereas if you had
        told TRANSTOK to stop processing at line 400, you could not be
        certain that 400 was in fact, the last line.  In actual practice,
        there are almost always more lines in a raw file than quotes.  The
        "extra" lines usually contain text, part of your logon and sign
        off from The Source, and perhaps some blank lines also.

           TRANSTOK ignores all such lines when processing quotes, but
        must include them in the total line count of the file.  As a
        result, TRANSTOK's final processing summary may report, for
        example, that only 194 quotes came from the raw file even though
        you told it to translate line 1 through 200.  You may be assured
        that the program did, in fact, read 200 lines from the file, but
        that among those 200 lines were 6 lines containing extraneous text
        instead of stock quotes.

        When processing raw data in blocks, you should:
        1) Take care that each of the translated output files get a
           DIFFERENT file name.  If you don't, the next file with the same
           name will replace the one already on your disk.

        2) Remember, when TRANSTOK translates in SYLK or VisiCalc format,
           the first 4 lines of the spreadsheet are left blank so that you
           can add your own title lines (i.e., TRANSTOK tells the
           spreadsheet that the first data cell is row 5, column 1).
           Therefore, do not tell TRANSTOK to translate 255 lines of data
           in a partial translation, because 255 data lines plus 4 blank
           lines exceeds the 255-line limit of Multiplan and VisiCalc.



                                    APPENDIX C
                     UPLOADING PORTFOLIOS FROM COMMAND LEVEL

            After you have used the TRANSTOK editor to create your
        StockCheck and/or Unistox portfolios, you can then upload those
        lists to The Source and receive quotes based on those list(s).
        The uploading procedure takes place at The Source Command Level
        prompt ( -> ) in this manner:

        Step 1.  -> ENTER UPFILE <ENTER>   (The Source will prompt you ..)

                     Enter Text


                                    page -41-






        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


        Step 2.  When you see The Source prompt "Enter Text", send your
                 file of stock names (stubs/ticker symbols) using whatever
                 commands your communications software requires for
                 sending a file.  When the last stock name in your list
                 appears on the screen, press the <ENTER> key TWICE.  The
                 Source computer now has a list of names that it can use
                 for retrieving quotes.  If the file contains stock stubs,
                 you can receive quotes from the New York or American
                 stock exchanges from the Unistox database.  If the file
                 contains ticker symbols, you can receive quotes from the
                 StockCheck database.

           If you have several different lists (e.g., NYSE stubs and AMEX
        stubs), the individual files can be uploaded, one after the other,
        at the beginning of a connect session.  However, you must tell The
        Source computer to assign a different file name for each stub/
        ticker list you upload.  With multiple files, you repeatedly use
        the ENTER FILENAME command shown above.  For the duration of a
        communications session, you refer to each list of stock names by
        its file name within The Source computer (e.g., UPFILE).


                                    APPENDIX D
                           DOWNLOADING FROM STOCKCHECK

           Even though the procedure below is specific to the StockCheck
        database, the steps used to download quotes from Unistox are very
        similar.  Therefore, throughout the rest of these Appendices, you
        will frequently be referred to the procedure given below.

           REMINDER:  From the StockCheck database, you can only download
        quotes based upon a previously uploaded list of stock ticker
        symbols.  You cannot download quotes for an entire day's trading
        from an exchange.  Here are the commands and keystrokes used at
        each step in the process, starting at the Command Prompt ( -> ):

           Step 1.  -> COMO QUOTFILE -N <ENTER>
           Step 2.     STOCKCHECK 1     <ENTER>
           Step 3.     (UPFILE)         <ENTER><ENTER>
           Step 4.     QUIT             <ENTER>
           Step 5.     COMO -E -T       <ENTER>

           DISCUSSION:  (Step 1) Tell The Source computer you want to
        create a COMO file named QUOTFILE.  (Step 2) Designate the
        database you want to receive quotes from; StockCheck 1 in this
        example.  (Step 3) Provide the file name for your list of ticker
        symbols; this MUST be in parenthesis, for example (UPFILE).  Then
        press the <ENTER> key TWICE.  (Step 4 and Step 5)  Tell The Source
        computer to QUIT and end the transfer of data (COMO -E -T) into
        the COMO file.

           What you have actually done in steps 1 thru 5 is to give The
        Source computer a whole series of steps to execute in one
        continuous sequence without checking back with you at each step.
        This is quite similar to a series of commands you can execute on
        your PC by packaging them in a batch file (e.g., AUTOEXEC.BAT).

                                    page -42-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


           Following step 5, The Source will not return to the Command
        Prompt ( -> ) immediately.  Instead, for the next few/several
        minutes (depending on the number of stocks in your list), it
        collects all the quotes into the COMO file.  When it has finished
        that task, it will return you to the Command Level prompt ( -> ).

        Step 6.   Enable the save-to-disk feature of your communications
                  software.   Be sure that the disk you are using to
                  capture data has enough free space to hold the report.
                  (about 65 bytes per quote).

        Step 7.  -> TY QUOTFILE <ENTER>

                  Your stock quotes will scroll across your screen as the
                  contents of QUOTFILE (the COMO file) is transmitted to
                  your computer.



                                    APPENDIX E
          DOWNLOAD AN ENTIRE DAY'S TRADING FROM UNISTOX:   NYSE OR AMEX

           To download quotes from the Unistox database, for an entire
        day's trading data on the NYSE or AMEX, get to the Command Level
        prompt ( -> ), and then use these commands and keystrokes:

        Step 1.  -> COMO QUOTFILE -N <ENTER>
        Step 2.     UNISTOX          <ENTER>
        Step 3.     ???              <ENTER>
        Step 4.     <SPACE BAR>      <ENTER>
        Step 5.     STOP             <ENTER>
        Step 6.     QUIT             <ENTER>
        Step 7.     COMO -E -T       <ENTER>

           NOTE: Where ??? is shown in Step 3, you type in the report
        number you want (report 139 for NYSE, or 149 for the AMEX).

           DISCUSSION:  After you press <ENTER> in Step 7, it will appear
        as though nothing is happening -- the cursor will remain in the
        lower-left corner of the screen.  However, in a few minutes, the
        command level prompt ( -> ) will reappear.  This tells you that
        the Unistox report (for the exchange you selected) has been
        assembled by The Source computer into the COMO file you named in
        Step 1, and is available for download.  See Appendix D and F for a
        more detailed discussion of the commands in the steps above.

        Step 8.     Enable the save-to-disk feature of your communications
        software.  Be sure that the disk you are using to capture the data
        has at least 148,000 bytes of free space to capture the NYSE
        report.  For the entire AMEX report, you will need at least 55,000
        bytes of free space.

        Step 9.     To download the quotes in the COMO file:

                    -> TY QUOTFILE <ENTER>


                                    page -43-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


        The Source will proceed to download the NYSE or AMEX daily trading
        summary to you, which your communications software will capture.

           WARNING:  Report 149 (the AMEX) contains stock quotes followed
        by bond quotations.  Because this version of TRANSTOK does not
        provide bond translations, you should BREAK out of the ongoing
        download when you see that the last stock quote has been received.
        The actual keystrokes used to stop the download varies, depending
        on which communications program you use.



                                    APPENDIX F
             DOWNLOADING CUSTOM NYSE OR AMEX PORTFOLIOS FROM UNISTOX

           First, a list of stubs must have been previously uploaded to
        The Source computer, as was described in APPENDIX C, "Uploading
        Portfolios".  Then, at the Command Level prompt ( -> ), enter the
        following commands and keystrokes:

        Step 1.  -> COMO QUOTFILE -N <ENTER>
        Step 2.     UNISTOX          <ENTER>
        Step 3.     ???              <ENTER>
        Step 4.     (UPFILE)         <ENTER><ENTER>
        Step 5.     STOP             <ENTER>
        Step 6.     QUIT             <ENTER>
        Step 7.     COMO -E -T       <ENTER>

        NOTES:  a) Where ??? is shown in Step 3, you type in the report
                   number you want (report 139 for NYSE, 149 for AMEX).

                b) Where QUOTFILE appears, be sure to use a file name that
                   is DIFFERENT than the file name you used when you
                   uploaded your list of stubs; in this example, UPFILE.)

           DISCUSSION:  (Step 1) Create a COMO file named QUOTFILE.  (Step
        2) Select the database, UNISTOX, and (Step 3) the report from
        which you want to receive quotes, 139 for the NYSE or 149 for the
        AMEX.  (Step 4) Provide the file name that contains the list of
        stubs that you uploaded.  This file name MUST be in parenthesis,
        e.g., (UPFILE).  (Steps 6 and 7) are used to terminate this series
        of commands.  Quotes for the stocks listed in UPFILE are then
        loaded into the COMO file named in Step 1.

            While the COMO file is being assembled, it will appear as if
        nothing is happening.  The cursor will remain in the lower-left
        corner of the screen while the stocks listed in UPFILE are
        extracted from the designated Unistox report.  When the quotes are
        assembled in the COMO file, the Command Level prompt ( -> ) will
        reappear.  Prepare your computer to receive data.

        Step 9.     Enable the save-to-disk feature of your communications
                    software.  Be sure that the disk you are using to
                    capture the data has enough free space to hold the
                    report (about 70-80 bytes per quote).


                                    page -44-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


        Step 10.    To download the contents of the COMO file:

                 -> TY QUOTFILE <ENTER>



                                    APPENDIX G
               DIRECT DOWNLOAD OF QUOTES WITHOUT USING A COMO FILE

           If you wish, you may bypass the steps involved in creating a
        COMO file, and have The Source computer download quotes as soon as
        it extracts each one from the Unistox database.  However, this
        method can be noticeably slower than using a COMO file (see note
        below).  As is described in APPENDIX C  ("Uploading Portfolios"),
        you must have provided an uploaded list of stock stubs (or ticker
        symbols).  If you want to watch as each stock on your list is
        found and then transmitted to your computer, be sure to enable the
        save-to-disk feature of your software BEFORE you enter (UPFILE) at
        Step 4, below.  If you are not saving-to-disk before the report
        starts to download, you will miss capturing some of the quotes.

        Step 1.  ->  UNISTOX <ENTER>  (The Source will prompt you with...)

                     UPI UNISTOX...YOU ARE ON-LINE.
                     TYPE "HELP" OR "QUIT" AT ANY TIME
                     WHICH REPORT?

        Step 2.      139 <ENTER>           (139 for NYSE or 149 for AMEX)

             The Source will prompt you with...

                     ENTER KEYWORDS, ONE PER LINE, AND PRESS
                     RETURN TWICE, OR PRESS RETURN ONCE FOR
                     THE ENTIRE REPORT.

        Step 3.      Enable the save-to-disk feature of your
                     communications software.

        Step 4.      (UPFILE) <ENTER> <ENTER>

             Your stocks will print out and The Source will return to the
             command level prompt ( -> ) after you type:

        Step 5.      QUIT <ENTER>

           NOTE:  There are two disadvantages to viewing the data as each
        item is retrieved from The Source database, rather than assembling
        the quotes into a COMO file.

        1) When The Source assembles all the quotes in a COMO file, it can
        devote its full attention to just that task, rather than spending
        time after finding each quote to transmit it to your computer.
        Likewise, once the COMO file is assembled, the download proceeds
        rapidly because the search phase has already been completed.
        Thus, the entire process can be faster by using a COMO file.


                                    page -45-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


        2)  As you see the lines of transmitted data appear on your
        screen, you will notice a pause after each line.  Some of these
        pauses are longer than others, as The Source computer searches its
        database from one stock in your list to the next.

           If the pause between transmissions from The Source is too long,
        it can cause some communications software to assume that the
        capture is finished.  If this does occur, your software may close
        the disk file that was being used to capture data.  You will need
        to open a new file with a different name.  During this renaming
        procedure, you may miss capturing some quotes for the stocks on
        your list.  Therefore, in terms of speed and accuracy, it is much
        better to use the COMO-file method, because the are no pauses
        between lines of data during downloading.

            You may also bypass the COMO file when getting quotes from the
        StockCheck database.  Assuming that you have uploaded a file
        (list) of stock ticker symbols (called UPFILE in the example
        below), here are the steps used:

        Step 1.   -> StockCheck 1 <ENTER>

        Step 2.      Enable the save-to-disk feature of your
                     communications software.

        Step 3.      (UPFILE) <ENTER><ENTER>

        The Source computer will proceed to search for, and then to
        transmit, a stock quote for each ticker symbol listed in UPFILE.


                                    APPENDIX H
                  MONITORING CHANGES IN YOUR UNISTOX STUB LISTS

            Unistox stubs are continually being changed.  The stub you
        used to get data one day might have been changed by the next time
        you use it.  Unistox provides a means of determining which, if
        any, stubs have been changed over the past week.  To do this you
        need to download Unistox report 000.  At the Command Level prompt
        ( -> ), do this:

        Step 1.  -> UNISTOX <ENTER>   (The Source will prompt you with...)

                    ...UPI UNISTOX... YOU ARE ON-LINE!
                    TYPE "HELP" or "QUIT" AT ANY TIME...
                    WHICH REPORT?

        Step 2.     000 <ENTER>       (The Source will prompt you with...)

                    ENTER KEY WORDS, ONE PER LINE, AND
                    PRESS RETURN TWICE, OR PRESS RETURN
                    ONCE FOR THE ENTIRE REPORT.

        Step 3.     Enable the save (to-disk) feature of your
                    communications software.  Then you press:


                                    page -46-





        PART IV       TRANSTOK USER'S GUIDE       INFORMATION & APPENDICES


        Step 4.     <ENTER>

        The Source will proceed to download all changes in abbreviations
        for both NYSE and AMEX stubs in the Unistox data base.

        Step 5.      QUIT <ENTER>    (the Command Level prompt returns)



                                    APPENDIX I
             DOWNLOADING THE NEW HIGH/LOW LIST FOR THE NYSE AND AMEX

           You can find out which stocks made either a new 52-week high or
        52-week low in today's trading on BOTH the New York and American
        Stock Exchanges by downloading report 087 from the Unistox
        database.  At The Source Command Level prompt, enter:

        Step 1.  -> UNISTOX <ENTER>   (The Source will prompt you with...)

                    ...UPI UNISTOX... YOU ARE ON-LINE!
                    TYPE "HELP" OR "QUIT" AT ANY TIME...
                    WHICH REPORT?

        Step 2.     087 <ENTER>       (The Source will prompt you with...)

                    ENTER KEY WORDS, ONE PER LINE, AND
                    PRESS RETURN TWICE, OR PRESS RETURN
                    ONCE FOR THE ENTIRE REPORT.

        Step 3.  Enable the save-to-disk feature of your communications
                 software, then press:

        Step 4.     <ENTER>

        The Source will proceed to download the names (stubs) of all
        stocks on both exchanges that made EITHER a 52-week high or
        52-week low in today's trading.  When it is done you type:

        Step 5.      QUIT <ENTER>    (the Command Level prompt returns)

        NOTE:  You do not get any trading data using report 087, only
        stubs.  If there are any companies on this list that you either
        own or are interested in, you can out find more about them by:

        1) VERIFY(ing) the stubs against your master list, using item 5 on
           TRANSTOK's main menu.

        2) Send (upload) back to The Source any stubs that match your
           master list, following the procedure described in APPENDIX C
           ("Uploading Portfolios From Command Level").

        3) Then, follow the procedures for downloading a custom list of
           NYSE and/or AMEX stocks from Unistox, described in APPENDIX E,
           F, and G.


                                    page -47-

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0323

     Volume in drive A has no label
     Directory of A:\

    READ-ME  1ST       384   3-16-87   1:50a
    PRINTDOC BAT       128   3-16-87   1:50a
    PRINTDOC MSG       896   3-16-87   1:50a
    TRANSTOK DOC    144906   3-16-87   1:50a
    TRANSTOK EXE     65520   3-16-87   1:50a
    TRANSTOK DFL       384   3-16-87   1:50a
    TRANSTOK DF2       384   3-16-87   1:50a
    DEFAULTS EXE     22784   3-16-87   1:50a
    AMEX     STB     10268   3-16-87   1:50a
    NYSE     STB     23345   3-16-87   1:50a
    STOKCHEK DJI      2816   3-16-87   1:50a
    UNISTOX  DJC      5632   3-16-87   1:50a
    UNISTOX  DJI      3072   3-16-87   1:50a
    FILES323 TXT      1535   5-17-88   2:00p
    GO       BAT        38   5-11-88  10:03a
    GO       TXT       540   5-11-88  10:03a
    MANUAL   BAT       147   5-11-88  10:03a
           17 file(s)     282779 bytes
                           30720 bytes free
