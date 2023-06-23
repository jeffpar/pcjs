---
layout: page
title: "PC-SIG Diskette Library (Disk #575)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0575/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0575"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-STOCK"

    PC-STOCK finance program is a stock evaluation and tracking system.  It
    will help you analyze stock trends with an easy to use, menu-driven
    system and informative graphics.  Support is also included for graphics
    printers, enabling you to save your analysis to hard copy.  Produce line
    graphs for: high, volume, composite, on-balance volume and average
    high/low analysis.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES575.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No  575  PC-STOCK version 1.4                                   v2.5
--------------------------------------------------------------------------
PC-STOCK Finance Program is a stock evaluation and tracking system .
 
PC-STOCK EXE  Stock trend analysis program (128K + colorgraphicard)
PC-STOCK DOC  Documentation
PC-STOCK INF  Over lay program for PC-Stock
README        Documentation (brief) for printing manual
??????   STK  Stock Trend Files (17 files)
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG
 
```
{% endraw %}

## PC-STOCK.DOC

{% raw %}
```









                                   PC-STOCK
                           A stock analysis program
                         for the IBM Personal Computer

                                  Version 1.4































Charles Overton
P.O. Box 2610
Goleta, Ca 93118














                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 1


                                   PC-STOCK
                               TABLE OF CONTENTS

             GENERAL INFORMATION.................................2
             CAUTION.............................................2
             WHAT YOU NEED.......................................2
             GETTING STARTED.....................................2
             THE MAIN MENU.......................................3
             F1 - APPEND DATA....................................3
             F2 - MODIFY DATA....................................4
             F3 - PRINT DATA.....................................4
             F4 - TREND ANALYSIS MENU............................4
             F5 - CHANGE STOCK FILE..............................5
             F7 - INSERT DATA....................................5
             F9 - DELETE DATA....................................5
             F10 - EXIT TO SYSTEM................................6
             THE TREND ANALYSIS MENU.............................6
             F1 - LAST ANALYSIS..................................6
             F2 - ON BALANCE VOLUME..............................7
             F3 - HIGH ANALYSIS..................................7
             F4 - AVG HIGH/LOW ANALYSIS..........................7
             F5 - VOLUME ANALYSIS................................8
             F6 - CHANGE ANALYSIS................................8
             F7 - COMPOSITE ANALYSIS.............................8
             F8 - SET MOVING AVERAGE.............................9
             F9 - SET NUMBER OF PERIODS..........................9
             F10 - EXIT TO MAIN MENU.............................9
             DISCLAIMER..........................................9
             USER SUPPORT........................................10




























                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 2


    GENERAL information:

    PC-STOCK is a general purpose stock trend analysis program. It was
    developed with ease of use and graphic presentation of data as the
    primary objectives. PC-STOCK is entirely menu driven, making it very
    easy for the occasional user as well as the professional user to enter,
    modify, and obtain graphic trend analysis of stock data.


    CAUTION:

    PC-STOCK can be a valuable computing aid in the analysis of stock data
    and can be of great assistance in making buy/sell decisions, but is NOT
    a substitute for common sense or sound financial advice. It can simply
    provide mechanical assistance to the user in the graphic presentation
    of the data entered by the user. It places the responsibility for
    making important financial decisions on the user.


    WHAT YOU NEED:

    PC-STOCK requires a 192k (or larger) IBM PC (or compatible) with high
    resolution graphics (199 by 640 pixels, non IBM compatible cards are
    not supported ) with DOS 2.1 or higher and at least one disk drive. A
    graphics printer is optional.


    GETTING STARTED:

    PC-STOCK is contained in one file PC-STOCK.EXE.  To start the program,
    put the PC-STOCK DISK in either drive and enter the drive name followed
    by a colon and PC-STOCK [A:PC-STOCK]. The program will then display a
    list of the .STK files on the default drive, and you will be prompted
    to input the stock history file name. Enter the file name (.STK
    extension is not required). A message will then appear "
    xxxx". If the stock history file previously existed the data from the
    file will be loaded into memory ready for analysis and modification. If
    the file did not previously exist then a new file will be created. A
    menu of the available functions and the associated function key will be
    displayed. To select a function simply depress the function key
    associated with the desired function. You will be prompted for any
    necessary input.















                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 3


    THE MAIN MENU:

    From the main menu the following functions are available:

              1. Appending data to the current .STK file
              2. Modification of the current .STK file
              3. Printing the current .STK file
              4. Selection of the TREND ANALYSIS MENU
              5. Changing the currently active .stk file
              6. not used
              7. Inserting data into the current .STK file
              8. not used
              9. Deleting data from the current .STK file
              10. Exit to the operating system

    To select one of the above functions, depress the associated function
    key.


    F1 - APPEND DATA:

    When this function is selected, a screen as follows will be displayed:

                     DATE (MM/DD/YY) :? __/__/__

                              VOLUME :  ________

                                HIGH :  ________

                                 LOW :  ________

                                LAST :  ________

                              CHANGE :  ________

    Then you should enter the date(month/day/year) followed by <return>,
    the Volume (in hundreds)<return>, the high<return>, the low<return>,
    the last<return>, the change<return>. After entry of the data you will
    be asked if the data is correct or not. If the data is correct, respond
    with a "y" ,"Y", or a <return> and the data will be appended to the end
    of the file.  If the data is not correct, respond with a "n" or "N" and
    the above sequence will be repeated and the data just entered will be
    discarded.  If you responded with a "y" , "Y", or <return> then you
    will be next asked if you want to continue appending data. If you
    respond with a "y" , "Y" <return> then the entire above sequence
    will be repeated to append another record to the file. If this is the
    first time data has been entered in the file, you should append at
    least two records to prevent possible loss of data on a subsequent
    append.  After you have finished appending data to the file, the
    program will return you to the main menu to make another function
    selection.






                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 4


F2 - MODIFY DATA:

    When this function is selected, you will be prompted to input the
    record number of the record to modify. After entry of the record
    number, the following screen with the data from the selected record
    will be displayed:

                     DATE (MM/DD/YY) :? mm/dd/yy

                              VOLUME :  nnn_____

                                HIGH :  nn.nnn__

                                 LOW :  nn.nnn__

                                LAST :  nn.nnn__

                              CHANGE :  nn.nnn__

    Then you should enter the correct date(month/day/year) followed by
    <return>, the Volume (in hundreds)<return>, the high<return>, the
    low<return>, the last<return>, the change<return>. If the data in the
    record is correct do not enter the data again, simply enter return and
    the original data for that data element will be retained. If the data
    is to be corrected, then enter the entire data element, do not correct
    just one character.  After entry of the data you will be asked if the
    data is correct or not. If the data is correct, respond with a "y"
    ,"Y", or a <return> and the corrected data will be entered into the
    file, the file reinitialized and the main menu redisplayed so you may
    select another function.


    F3 - PRINT DATA:

    When this function is selected, the data from the current stock record
    will be printed. Included in the print line is the record number, date,
    volume, high, low, last and change. When the listing of the stock file
    has finished printing, the main menu will be displayed where you may
    select another function. You should keep this listing of the stock for
    reference while modifying the file and obtaining the graphic displays.


    F4 - TREND ANALYSIS MENU:

    Selection of this function will cause the trend analysis menu to be
    displayed, where you may select other functions to graphically analyze
    the stock data. This menu is explained fully on pages 6 to 9.










                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 5


    F5 - CHANGE STOCK FILE:

    When this function is selected, you will be prompted to input the disk
    (A,B,C, or D) which contains the stock data. After you have entered the
    drive, a list of all the .STK files on the drive will be displayed to
    you, and you will be prompted to select one for analysis. Enter the
    filename (minus the .STK extension) and press enter. A message will
    then be displayed indicating the new file is being initialized. During
    file initialization, the file will be first sorted by year/month/day
    and then the records loaded into program storage and made ready for
    analysis. If there is more data available than will fit in memory, only
    the latest data will be loaded and while the menues are displayed on
    the screen the number of records in memory will be displayed to you on
    line 25 of the monitor. After the file is initialized, the main menu
    will be displayed where you may select another function.


    F7 - INSERT DATA:

    When this function is selected, you will be prompted to input the
    record number after which a new record will be inserted in the file.
    After entry of the record number the following screen will be
    displayed:

                     DATE (MM/DD/YY) :? __/__/__

                              VOLUME :  ________

                                HIGH :  ________

                                 LOW :  ________

                                LAST :  ________

                              CHANGE :  ________

    Then you should enter the date(month/day/year) followed by <return>,
    the Volume (in hundreds)<return>, the high<return>, the low<return>,
    the last<return>, and the change<return>. After entry of the data you
    will be asked if the data is correct or not. If the data is correct,
    respond with a "y" ,"Y", or a <return> and the data will be inserted in
    the file.  If the data is not correct, respond with a "n" or "N" and
    the above sequence will be repeated and the data just entered will be
    discarded.  If you responded with a "y" , "Y", or <return> then the
    stock file will be reinitialized, and the main menu displayed where you
    may make another function selection.











                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 6


    F9 - DELETE DATA:

    When you select this function, you will be prompted for the record
    number from the current stock file to delete. After you have entered
    the record number, and the record you have selected has been deleted,
    the stock file will be reinitialized and the main menu displayed so you
    may make another function selection.

    F10 - EXIT TO SYSTEM:

    Selection of this function will cause PC-STOCK to terminate and return
    to the operating system.


    THE TREND ANALYSIS MENU:

    From the trend analysis menu the following functions are available:

              1. Analyze the last(closing) data
              2. Analyze the low data
              3. Analyze the high data
              4. Analyze the average of the high and low data
              5. Analyze the volume data
              6. Analyze the change data
              7. Analyze the a composite of the data
              8. Set the moving average for analysis
              9. Set the number of periods for analysis
              10. Exit to the main menu

    To select one of the above functions, depress the associated function
    key.


    F1 - LAST ANALYSIS:

    When this function is selected, a time series graphic plot will be
    displayed for the last (closing) price of the periods on display.  The
    first time line to be displayed is the "raw" last price data taken from
    the "last" field in the the .STK file.  The number of periods displayed
    will be as you selected using the F9 function key, or if you have not
    selected a number of periods, then the data for the number of periods
    in memory will be displayed. The second time line to be displayed
    (which is smoother and overlaid on top of the first line) is the moving
    average line.  The number of periods for the moving average is as set
    by the F8 function key.  If you have not used the F8 key, then no
    moving average will be displayed.  The first period for the moving
    average is the first period displayed (set by function key 9) and not
    necessarily the first entry in the .STK file.









                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 7


    F2 - ON-BALANCE VOLUME:

    When this function is selected, a time series graphic plot will be
    displayed for the on-balance volume during the periods on display.  The
    first time line to be displayed is the cumulative total of the volume
    (divided by 100) in which the volume has been added or subtracted
    (depending whether change is a gain or a loss) from the previous
    on-balance volume.  The number of periods displayed will be as you
    selected using the F9 function key, or if you have not selected the
    number of periods, the on-balance volume for the number of periods in
    memory will be displayed. The second time line to be displayed (which
    is smoother and overlaid on top of the first line) is the moving
    average line. The number of periods for the moving average is as set by
    the F8 function key.  If you have not used the F8 key, then no moving
    average will be displayed. The first period for the moving average is
    the first period displayed (set by function key 9) and not necessarily
    the first entry in the .STK file.

    F3 - HIGH ANALYSIS:

    When this function is selected, a time series graphic plot will be
    displayed for the high price during the periods on display. The first
    time line to be displayed is the raw data taken from the "high" field
    in the the .STK file. The number of periods displayed will be as you
    selected using the F9 function key, or if you have not selected a
    number of periods, the high price data for the number of periods in
    memory will be displayed. The second time line to be displayed (which
    is smoother and overlaid on top of the first line) is the moving
    average line. The number of periods for the moving average is as set by
    the F8 function key.  If you have not used the F8 key, then no moving
    average will be displayed.  The first period for the moving average is
    the first period displayed (set by function key 9) and not necessarily
    the first entry in the .STK file.

    F4 - AVG HIGH/LOW ANALYSIS:

    When this function is selected, a time series graphic plot will be
    displayed for the average of the high and low price during the periods
    on display.  The first time line to be displayed is the average of the
    data taken from the "high" and "low" field in the the .STK file. The
    number of periods displayed will be as you selected using the F9
    function key, or if you have not selected a number of periods, the
    average price data for the number of periods in memory will be
    displayed. The second time line to be displayed (which is smoother and
    overlaid on top of the first line) is the moving average line. The
    number of periods for the moving average is as set by the F8 function
    key, if you have not used the F8 key, then no moving average will be
    displayed.  The first period for the moving average is the first period
    displayed (set by function key 9) and not necessarily the first entry
    in the .STK file.







                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 8


    F5 - VOLUME ANALYSIS:

    When this function is selected, a time series graphic plot will be
    displayed for the volume ( in hundreds ) during the periods on display.
    The first time line to be displayed is the raw data taken from the
    "volume" field in the the .STK file. The number of periods displayed
    will be as you selected using the F9 function key, or if you have not
    selected a number of periods, the volume data for the number of periods
    in memory will be displayed. The second time line to be displayed
    (which is smoother and overlaid on top of the first line) is the moving
    average line. The number of periods for the moving average is as set by
    the F8 function key.  If you have not used the F8 key, then no moving
    average will be displayed.  The first period for the moving average is
    the first period displayed (set by function key 9) and not necessarily
    the first entry in the .STK file.

    F6 - CHANGE ANALYSIS:

    When this function is selected, a time series graphics plot will be
    displayed for the change in price during the periods on display.  The
    first time line to be displayed is the raw data taken from the "change"
    field in the the .STK file. The number of periods displayed will be as
    you selected using the F9 function key, or if you have not selected a
    number of periods, the volume data for the number of periods in memory
    will be displayed. The second time line to be displayed (which is
    smoother and overlaid on top of the first line) is the moving average
    line. The number of periods for the moving average is as set by the F8
    function key. If you have not used the F8 key, then no moving average
    will be displayed.  The first period for the moving average is the
    first period displayed (set by function key 9) and not necessarily the
    first entry in the .STK file.

    F7 - COMPOSITE ANALYSIS:

    When you select this function, the four main elements plus moving
    average, if enabled, are displayed in one time series plot. Near the
    bottom, a bar chart will be displayed showing the activity of the
    volume of stock traded during the period. Near the middle of the plot,
    bars connecting the high and low for the stock are displayed.
    Connecting the vertical bars of the high and low are horizontal bars
    indicating the last price for the period. Overlaid on the price
    combination bar chart is the moving average (if a moving average has
    been set with F8) of the average of the high and low of the stock.














                    Copyright (c) 1984 Charles Overton





                                          PC-STOCK USERS GUIDE ---- PAGE 9


    F8 - SET MOVING AVERAGE:

    When you select this function, you will be prompted to input the number
    of moving averages you wish to display -- enter a number between 1 and
    10.  After entry of the number of moving averages to display you will
    be prompted to input the number of periods for each moving average. If
    you input a value of 1, then the moving average feature will be
    disabled and no moving average line will be overlaid on the analysis
    displays. If you select a value greater than 1 then a moving averaging
    for the number of periods you selected will be a applied to the "raw"
    data, and the resulting moving average data will be overlaid on the
    plot of the "raw" data on the analysis displays you select.


    F9 - SET NUMBER OF PERIODS:

    When you select this function, you will be prompted to input the number
    of periods for analysis. You may enter a number less than the number of
    records currently in memory. After entry of the number of periods,
    the program will return to the main menu where you may select another
    function. When you select an analysis function only the latest number
    of periods which you entered will be used for moving averages and for
    the analysis display.


    F10 - EXIT TO MAIN MENU:

    When you select this function, the program will exit back to the main
    menu where another file may be selected for analysis, or modification
    of the current file may be made.

    DISCLAIMER

    In no event will the author be liable for any damages, including any
    lost profits, lost  savings or other incidental or consequential loss
    or damages arising out of the use of or the inability to use this
    program -- even if the author has been advised of the possibility of
    such damages. The author makes no warranties, either express or
    implied, respecting the software, its quality, performance,
    merchantability, or fitness for any particular purpose.

















                    Copyright (c) 1984 Charles Overton





                                         PC-STOCK USERS GUIDE ---- PAGE 10


    USER SUPPORT

    If you are using this program and finding it of value, your
    contribution ($33 suggested) will be appreciated.

                                Charles Overton
                                 P.O. Box 2610
                               Goleta CA. 93118

    Contributing users will also receive a copy of the program source,
    the program is written in basic.

    Regardless of whether a contribution is made, the user is encouraged to
    copy and share the program with others, for trial use.

    -----------------------------------------------------------------------
    NOTICE -- A limited license is granted to all users of this program,
              to make copies of this program and distribute them to other
              users on a trial basis, with the following conditions:

              1. The program is not to distributed to others in modified
                 form.
              2. No fee (or other consideration) is to be charged for
                 copying or distributing the program without written
                 permission of the author.
              3. Contributing users retain the source for the program
                 for their private use.






























                    Copyright (c) 1984 Charles Overton




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0575

     Volume in drive A has no label
     Directory of A:\

    PC-STOCK EXE     83418  12-15-86   9:28a
    PC-STOCK DOC     23424  10-28-86  12:21p
    README             252   3-04-87   3:49p
    AMFESCO  STK     13716   1-11-87   1:03a
    DAYTON   STK     10141   1-11-87   1:04a
    DJ20BND  STK      9881   1-11-87   1:10a
    DJIND    STK      9556   1-11-87   1:09a
    GOLD     STK      8061   1-11-87   1:12a
    INTHARV  STK      5981   2-23-86   1:57p
    MESABI   STK     10076   1-11-87   1:04a
    MIDSUT   STK      8906   1-11-87   1:05a
    PANAM    STK     10141   1-11-87   1:05a
    S&P20T   STK      9881   1-11-87   1:08a
    S&P400I  STK      9881   1-11-87   1:07a
    S&P40FIN STK      9881   1-11-87   1:09a
    S&P40UT  STK      9881   1-11-87   1:08a
    S&P500   STK      9881   1-11-87   1:06a
    SILVER   STK      8126   1-11-87   1:12a
    TESORO   STK     10076   1-11-87   1:06a
    FRANKUS  STK      3121   1-11-87   1:11a
    GO       BAT        16   3-04-87   3:48p
    FILES575 TXT       648   3-04-87   3:52p
    AUTOEXEC BAT        66   2-18-85   4:39p
           23 file(s)     265011 bytes
                           48128 bytes free
