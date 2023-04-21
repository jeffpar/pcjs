---
layout: page
title: "PC-SIG Diskette Library (Disk #1528)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1528/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1528"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STOCK CHARTS"

    STOCK CHARTS is for the investor with an eye towards technical analysis
    of stocks or mutual funds.  STOCK CHARTS graphically displays the price
    and volume action of stocks or mutual funds by producing charts similar
    to those found in books on technical analysis of the stock market.  The
    program charts high, low, close, volume, and moving averages of stocks,
    mutual funds, or stock averages such as the Dow Jones Industrial
    Average.  STOCK CHARTS is designed for the small investor who keeps
    track of day-to-day stock prices and volume movements through sources
    such as the Wall Street Journal or some other financial publication.
    
    STOCK CHARTS is fully menu-driven and intuitive to operate.  From the
    main menu you can choose to draw charts, list stocks, add/delete/insert
    data, or view data.  Each option presents you with a sub-menu for ease
    of operation.  Three charting options are available: chart high, low,
    close, volume; chart close only; and chart moving average.  The list
    stocks option will show you all stock symbols that are currently in the
    database.  STOCK CHARTS produces high resolution black and white CGA
    graphics and full color EGA graphics.  Charts can also be printed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1528.TXT

{% raw %}
```
Disk No: 1528
Program Title: STOCK CHARTS version 1.0
PC-SIG version 1

STOCK CHARTS is for the investor with an eye towards technical analysis
of stocks or mutual funds.  STOCK CHARTS graphically displays the price
and volume action of stocks or mutual funds by producing charts similar
to those found in books on technical analysis of the stock market.  The
program charts high, low, close, volume, and moving averages of stocks,
mutual funds, or stock averages such as the Dow Jones Industrial
Average.  STOCK CHARTS is designed for the small investor who keeps
track of day-to-day stock prices and volume movements through sources
such as the Wall Street Journal or some other financial publication.

STOCK CHARTS is fully menu driven and intuitive to operate.  From the
main menu you can choose to Draw charts, List stocks, Add/Delete/Insert
data, or View data.  Each option presents you with a sub-menu for ease
of operation.  Three charting options are available: Chart high, low,
close, volume; Chart close only; and Chart moving average.  The List
stocks option will show you all stock symbols that are currently in the
database.  STOCK CHARTS produces high resolution black and white CGA
graphics and full color EGA graphics.  Charts can also be printed.

Synopsis: Technical analysis of stocks or mutual funds graphically
displayed.

Usage:  Investments/Financial/Stock Analysis.

Special Requirements:  CGA, EGA.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

Author: David Todd, Delta Computer Group

File Descriptions:

STKCHT    EXE Main program.
STKCHT    DOC Documentation.
STOCK     LST Data file.
DOW           Demo file.
README    1ST Intro file.

The PC-SIG Library
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## STKCHT.DOC

{% raw %}
```



                                  - 1 -



                                DISCLAIMER

       Although every effort has been made to verify the accuracy
       of this document, no liability for errors or omissions can
       be assumed.  No warranty or other guarantee can be given as
       to the accuracy or suitability of the Stock Charts software
       for a particular purpose.  Also, no liability can be assumed
       for any loss or damage in connection with, or arising out
       of, the furnishing, performance, or the use of the Stock
       Charts software or documentation.




















































                                  - 2 -



       1.  INTRODUCTION

       Stock Charts is for the investor with an eye toward
       technical analysis of stocks or mutual funds.  Stock Charts
       graphically displays the price and volume action of stocks
       or mutual funds by producing charts similar to those found
       in books on technical analysis of the stock market.  The
       program charts high, low, close, volume, and moving averages
       of stocks, mutual funds, or stock averages such as the Dow
       Jones Industrial Average.

       A function key provides graph printing capabilities and a
       menuing interface provides easy data management (inputting,
       reviewing, and deleting information).

       Stock Charts produces high resolution black and white CGA
       graphics and full color EGA graphics on IBM personal
       computers and compatibles.


       2.  HARDWARE AND SOFTWARE REQUIREMENTS

       In order to run the Stock Charts software, you must have an
       IBM personal computer or a strict compatible and a CGA or
       EGA graphics card.

       MS-DOS version 2.0 or higher is also required.


       3.  A QUICK DEMONSTRATION OF STOCK CHARTS

       To begin working with Stock Charts, make a directory and
       copy the following files to it.

            stkcht.exe
            stock.lst
            dow







       __________

         * IBM is a registered trademark of IBM Corporation.

        ** MS-DOS is a registered trademark of Microsoft
           Corporation.












                                  - 3 -



       After the files are copied, type

            stkcht <Enter>

       and a screen displaying general information on copyright and
       registration will appear.  Strike any key and the main menu
       appears with the following entries:

            1 - Draw charts
            2 - List stocks
            3 - Add data
            4 - Delete/Insert data
            5 - View data
            6 - Exit program

       Follow the procedure below for a quick demonstration of
       Stock Charts.

         1.  Enter 1 and the Charts Menu appears with the following
             information:

                  1 - Chart high, low, close, volume
                  2 - Chart close only
                  3 - Chart moving average

         2.  Enter 1 and the following prompt appears:

                  Enter stock symbol:

         3.  Enter the word dow in response to the prompt, strike
             <Enter> and the following prompt appears:

                  Enter starting date:

         4.  Enter 09/01/88 in response to the prompt, strike
             <Enter> and the following prompt appears:

                  Enter ending date:

         5.  At this prompt simply strike <Enter>.

             A chart of the Dow Jones Industrial Average is drawn
             starting at 09/01/88 showing the high, low, close, and
             volume for the time frame.

         6.  Strike <Esc> and the Charts Menu appears again.

         7.  Strike 2 and the following prompt appears:

                  Enter stock symbol:












                                  - 4 -



         8.  Enter the word dow in response to the prompt, strike
             <Enter> and the following prompt appears:

                  Enter starting date:

         9.  Enter 09/01/88 in response to the prompt, strike
             <Enter> and the following prompt appears:

                  Enter ending date:

        10.  At this prompt simply strike <Enter>.

             A chart of the Dow Jones Industrial Average is drawn
             starting at 09/01/88 showing the close and volume for
             the time frame.

        11.  Strike <Esc> to return to the Charts Menu.

        12.  Select 3 from the Charts Menu and the following prompt
             appears:

                  Enter stock symbol:

        13.  Enter the word dow in response to the prompt, strike
             <Enter> and the following prompt appears:

                  Enter number of days:

        14.  Enter 30 in response to the prompt, strike <Enter> and
             the following prompt appears:

                  Enter starting date:

        15.  Enter 09/01/88 in response to the prompt, strike
             <Enter> and the following prompt appears:

                  Enter ending date:

        16.  Again, simply strike <Enter>.

             A chart of the Dow Jones Industrial Average is drawn
             starting at 09/01/88 showing the close, volume, and a
             30 day moving average for the time frame.

        17.  Strike <Esc> twice to return to the Main Menu, and
             then enter 6 to exit the program and return to the DOS
             environment.















                                  - 5 -



       4.  COLLECTING STOCK PRICE AND VOLUME DATA

       Stock Charts is designed for the small investor who keeps
       track of day-to-day stock price and volume movements through
       sources such as the Wall Street Journal or some other
       financial publication.  At present, there is no capability
       to download data from online databases.

       However, if there is sufficient feedback showing an interest
       in this feature, it may be considered in a future release of
       Stock Charts.


       5.  FORMAT FOR ENTERING DATA

       The following guidelines must be adhered to when entering
       data or responding to some of the prompts within Stock
       Charts' menus.  Failure to do so will result in corrupted
       stock data files.

       5.1  THE STOCK SYMBOL PROMPT

       Use stock symbols when responding to the "Enter stock
       symbol:" prompt.  The "stock symbol" is the stock exchange
       trading symbol that is assigned to a particular issue (e.g.,
       the AT&T stock symbol is T).

       5.2  ENTERING DATES AND RESPONDING TO DATE PROMPTS

       When entering dates and responding to date prompts, the date
       entered must be in the following format:

            01/12/89

            or

            12/21/89

       5.3  ENTERING PRICE DATA

       When entering price data, all prices must be in decimal
       notation.  For example, to enter 24 1/4, as the high price
       for a particular day, you must type 24.25 in response to the
       "High:" prompt.


















                                  - 6 -



       6.  NAVIGATING WITHIN STOCK CHART MENUS

       To navigate to a particular menu within Stock Charts, simply
       strike the key number shown to the left of the menu.  To
       leave a menu or chart screen, strike the <Esc> key.


       7.  AN OVERVIEW OF STOCK CHART MENUS

       After entering Stock Charts, the main menu appears with the
       following entries:

            1 - Draw charts
            2 - List stocks
            3 - Add data
            4 - Delete/Insert data
            5 - View data
            6 - Exit program

       A discussion of each of these entries follows.

       7.1  DRAW CHARTS

       The "Draw charts" selection charts the price and volume
       movement of stocks.  Charts are scaled based on the high and
       low prices for a particular time frame.  Therefore when the
       first set of data for a stock is entered, the high and low
       prices will span the entire y axis.  The chart will assume a
       more natural scaled appearance after a month or two of
       entering data.

       Three different charts may be drawn - they are:

            High, Low, Close, and Volume
            Close and Volume only
            Close, Moving average, and Volume

       Sub-menus to the "Draw charts" selection display the
       following prompts:

            Enter stock symbol:
            Enter starting date:
            Enter ending date:

       Read section 5 before responding to any of the prompts.

       At the "Enter starting date:" prompt, enter a starting date
       from which the chart will be drawn and strike <Enter>.

       At the "Enter ending date:" prompt, enter an ending date at
       which the chart will stop and strike <Enter>.  Simply











                                  - 7 -



       striking <Enter> in response to this prompt will draw the
       chart from the starting date to the most current data that
       has been entered or to the end of the x axis.

       If "Chart moving average" is selected, a "Enter number of
       days:" prompt appears.  The number of days is used in
       calculating a moving average.  For example, to chart a 30
       day moving average enter 30 in response to the prompt and
       strike <Enter>.

       Stock charts may be printed on a dot matrix printer by
       striking the <F1> function key after the charts are
       displayed on the screen.  To print charts, the Stock Charts
       program requires the presence of the MS-DOS graphics.com
       program.  The graphics.com program must be accessible either
       from the current directory or through the PATH environment
       variable in your autoexec.bat file.

       7.2  LIST STOCKS

       The "List stocks" selection displays all stock symbols that
       are currently in the database.  The stock symbols are
       presented in a window which can be scrolled upward by
       striking the <Enter> key.  When all symbols have been
       displayed, an "End of List" message is issued.

       7.3  ADD DATA

       The "Add data" selection is used to enter date, high, low,
       close, and volume information for a particular stock.  When
       selected, the following prompts are displayed:

            Enter stock symbol:
            Enter date:
            Enter high:
            Enter low:
            Enter close:
            Enter volume:

       Read section 5 before responding to any of the prompts.

       At the "Enter stock symbol:" prompt, enter the stock trading
       symbol and strike <Enter>.  When responding to this prompt,
       if the stock is not in the working directory, you will be
       prompted to add it to your list of stocks.  After entering
       the stock trading symbol, the last date previously entered
       for the particular issue is displayed in the lower left
       corner.

       At the "Enter date:" prompt, enter the date that will be
       added to the stock's data file and strike <Enter>.  Continue











                                  - 8 -



       responding to the prompts with high, low, close, and volume
       information.

       After responding to the "Enter volume:" prompt, you are
       asked if there is more data that you wish to add to the
       stocks data file.  If the answer is yes, the cycle is
       started again at the "Enter date:"  prompt.

       NOTE: No data is added to the stock's data file until a
       response is entered to the last prompt.  This prompt appears
       as

            Add more data [y or n]:

       Thus, at any point before answering this question, the <Esc>
       key may be depressed and all previously entered data that is
       currently displayed on the screen is erased.

       7.4  DELETE/INSERT DATA

       By selecting "Delete/Insert data" you may remove high, low,
       close, and volume information for a single date, a range of
       dates, or an entire issue.  You may also insert data into an
       existing stock's data file.  The following menu is displayed
       when selecting "Delete/Insert data":

            1 - Remove a single date
            2 - Remove a range of dates
            3 - Remove entire issue
            4 - Insert data

       "Remove a single date" removes one set of data from a
       stock's data file.  A set of data is considered to be the
       high price, low price, closing price, and volume for a
       particular date.  "Remove a range of dates" removes multiple
       sets of data from a stock's data file.  You are prompted to
       enter a starting and ending date for the range.  "Remove
       entire issue" erases the stock data file from the disk.
       "Insert data" will insert one set of data after the date
       that you enter in response to the "Insert after what date:"
       prompt.

       7.5  VIEW DATA

       "View data" allows you to review data that has been entered
       into a stock's data file.  The following menu is displayed
       when "View data" is selected.















                                  - 9 -



            1 - Scroll entire file
            2 - Scroll from specific date
            3 - View specific date

       "Scroll entire file" will scroll through an entire stock's
       data file from beginning to end.  "Scroll from specific
       date" scrolls from the date entered to the end of the
       stock's data file.  "View specific date" displays
       information on the specific date entered.

       The data is presented in a window which can be scrolled
       upward by striking the <Enter> key.  When all the data for a
       particular stock has been displayed, an "End of Data"
       message is issued.

       7.6  EXIT PROGRAM

       Selecting "Exit program" will exit the program and return
       you to the DOS environment.


       8.  SUPPORT AND DISTRIBUTION OF STOCK CHARTS

       Plans are now underway to provide Stock Charts with a better
       menuing interface and additional charting capabilities.
       Therefore if you find the program useful, please consider
       registering it.  The benefits of registration include
       telephone support for any questions that you may have and
       notice of updates to the software.  Also, registered owners'
       comments and suggestions will be considered in future
       updates to the software.

       Commercial use of this program requires registration.  If
       you use Stock Charts in your work, you are required to
       register it.

       The registration fee is $20.

       Regardless of whether you register or not, you may freely
       copy and distribute Stock Charts for noncommercial use.  All
       files (stkcht.exe, stock.lst, dow, and stkcht.doc) must be
       distributed together.  If you post Stock Charts on a public
       bulletin board, please put all the files in an archive
       called STOCKS.ARC.


















                                  - 10 -



       9.  ONLINE DOW JONES INDUSTRIAL AVERAGE DATA

       As an additional service, each month Delta Computer Group
       will send you a 360 KB floppy disk with the latest high,
       low, close, and volume information on the Dow Jones
       Industrial Average.  This information can be used to keep
       abreast of chart patterns in the Dow Jones Industrial
       Average.  The information on the floppy disk will be
       formatted and ready to use with the Stock Charts program.
       This service is available at a subscription fee of $50.00
       per year (12 disks).

       Questions or comments may be directed to:

                        The Delta Computer Group
                        P. O. Box 17052
                        Winston-Salem, NC 27116
                        Phone: (919) 924-2400












































                                  - 11 -



       10.  REGISTRATION FORM FOR STOCK CHARTS




       Name:_____________________________________________

       Address:__________________________________________

       City, State, Zip:_________________________________

       Country:__________________________________________

       Stock Charts Version Number:______________________



       Please feel free to make comments or suggestions.






















       Mail To:
                        The Delta Computer Group
                        P. O. Box 17052
                        Winston-Salem, NC 27116






















                        Stock Charts - Version 1.0
               Copyright (c) 1989 The Delta Computer Group
                           All rights reserved.



                                 CONTENTS


        1.  INTRODUCTION.......................................   2

        2.  HARDWARE AND SOFTWARE REQUIREMENTS.................   2

        3.  A QUICK DEMONSTRATION OF STOCK CHARTS..............   2

        4.  COLLECTING STOCK PRICE AND VOLUME DATA.............   5

        5.  FORMAT FOR ENTERING DATA...........................   5
            5.1  THE STOCK SYMBOL PROMPT.......................   5
            5.2  ENTERING DATES AND RESPONDING TO DATE
                 PROMPTS.......................................   5
            5.3  ENTERING PRICE DATA...........................   5

        6.  NAVIGATING WITHIN STOCK CHART MENUS................   6

        7.  AN OVERVIEW OF STOCK CHART MENUS...................   6
            7.1  DRAW CHARTS...................................   6
            7.2  LIST STOCKS...................................   7
            7.3  ADD DATA......................................   7
            7.4  DELETE/INSERT DATA............................   8
            7.5  VIEW DATA.....................................   8
            7.6  EXIT PROGRAM..................................   9

        8.  SUPPORT AND DISTRIBUTION OF STOCK CHARTS...........   9

        9.  ONLINE DOW JONES INDUSTRIAL AVERAGE DATA...........  10

       10.  REGISTRATION FORM FOR STOCK CHARTS.................  11
















                                  - i -





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1528

     Volume in drive A has no label
     Directory of A:\

    DOW               5359   2-24-89  10:57a
    FILE1528 TXT      1853   8-11-59   9:38a
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       694   8-09-89   4:46p
    MANUAL   BAT       147   8-09-89   4:47p
    PAGE     COM       325   1-06-87   4:21p
    README   1ST      2646   2-27-89  10:26a
    STKCHT   DOC     18952   2-27-89   8:06a
    STKCHT   EXE     63309   2-24-89  10:57a
    STOCK    LST         5   2-24-89  10:57a
    VIEW     BAT        42   8-09-89   4:47p
           11 file(s)      93370 bytes
                           62976 bytes free
