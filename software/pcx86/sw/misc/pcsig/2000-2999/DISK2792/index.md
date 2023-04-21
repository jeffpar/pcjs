---
layout: page
title: "PC-SIG Diskette Library (Disk #2792)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2792/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2792"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## WALLST.DOC

{% raw %}
```



                         Wall $treet - The Bottom Line
                         _____________________________

                                  Version 5.3
                                  ___________

                                    9/10/90



                           Stock Market / Securities
                           _________________________

                     Database Tracking & Analysis Software
                     _____________________________________



                              Color / Monochrome

                            EGA / VGA / CGA / MCGA




                            (C) Copyright 1989/1990

                                      by

                                 Dan M. Schell

                              IMAGE PLUS SOFTWARE


                                      ___




                                 STANCOatlanta

                         2615 Shallowford Road., N.E.

                            Atlanta, Georgia  30345

                                (404) 636-2179





                              All Rights Reserved
                          FILES & PACKAGE OVERVIEW
Files On Disk
................................................................

    WALLST.EXE  ------  MAIN LOADER PROGRAM
    WSMAIN.OVL  ------  MAIN OVERLAY MODULE 
    PNTWST.OVL  ------  PRINT MODULE
    WSUTIL.OVL  ------  UTILITY MODULE 
    WSGRAPH.OVL ------  GRAPH MODULE 
    WSTRACK.OVL ------  CURRENT PRICING MODULE 
    SAMPLE.DAT  ------  SAMPLE DATA FILE - Can be deleted. 
    WALLST.DTA  ------  CURRENT PRICING DATA FILE with data for SAMPLE.DAT
    WALLST.CTL  ------  SYSTEM CONFIGURATION FILE - Can be deleted.
    PRINTER.CTL ------  SYSTEM CONFIGURATION FILE - Can be deleted.
    BRUN45.EXE  ------  RUN TIME MODULE 
    WALLST.DOC  ------  PROGRAM DOCUMENTATION 
    INSTALL.EXE ------  INSTALLATION PROGRAM
    READ.ME     ------  May be included with the latest notes & revisions.

Program Overview ............................................................

    This database program was written to track your investments in the stock
& bond markets.  Each time you buy & sell a security you will be able to
quickly & easily store the details of the transaction.  You will have a
permanent record of each transaction for future use.  You will be able to
edit & delete individual records, allowing you to keep your records current. 


    With the addition of the current pricing module, you will be able to
evaluate your current investments based on their current pricing, & obtain a
year to date performance evaluation based on current pricing and trades
completed in the current year.

    You will be able to use different data files as desired, as specified
from the Utility menu.  The data file last used, will be automatically loaded
from the menu the next time you start the program.  

    When you start the program, It will remind you of the last date the
program was executed.  It will also keep track of how long you have been in
the program & provide that information to you when you exit.

    The program will accommodate "Short Sells" as well as traditional
investments.  It will calculate, & display various factors based on buy/sell
prices, fees/commissions paid, date bought/sold, & number of shares includ-
ing:

    O  Total cost to purchase a security.
    O  Total received from sale of a security.
    O  Day of the week that a transaction occurred.  
    O  Number of Days held to date, while still in your portfolio.
    O  Number of Days Security held when a trade is complete.    
    O  Profit or Loss Percentage, Based on the investment & on the time held.

    The analysis portion of the program will display various summaries for
all trades occurring in the year you choose.  One option will summarize a
listing of all trades reportable to the IRS in the chosen year.   This is
very useful at tax time.

    The Graph portion of the program will display several graphs displayed by
record number to aid in visualizing your trading performance over time. 

    Menu Interface: The selections from the menu are made by pressing the
indicated key.  You can use upper or lower case.  For example: 
                   "Press Your Choice ( A, L, D, C, or M )"

    Make your selection by pressing "A" or "a". No return is needed, as the
selection is automatic.  

    The Menu will indicate the appropriate choice by parentheses.  For
example "Cum-(S)ummary Graph would be selected by pressing "S" or "s".

    In addition to the direct selection from the menus, The "ESC" key will
return you to the parent menu.  When at the Main menu the "ESC" key will exit
the program.


                              Menu Descriptions:
                           ________________________

                    .............. MAIN MENU ..............

DISPLAY & ANALYZE DATA ON FILE:  Branch to the Investment Display Menu.

ADD NEW DATA TO DATABASE:  Add a new entry to the Data Base. The input fields
are as listed & described below.  An "I" indicates an input, "Q" Question &
"R", a system Response.

I  Name of Security:    The name of the security (Up to 20 characters).  You
                        may want to use your own naming system for use as a
                        quick search  as described in the Video Print Menu.
I  Number of Shares:    The number of shares purchased.  Maximum of 5,000,000
                        shares in integer format.  Optional format maximums
                        are 999999.9; 99999.99; 9999.999 if shares entered
                        require non integer format.
Q  Short Sell (Y/N):    A short sell occurs when a security is sold first, &
                        then later bought back at, hopefully, a lower price. 
                        Answer "N" to normal "Buy now - Sell Later" transac-
                        tions.   
I  Year of Purchase:    The year security purchased, default to current year.
I  Month of Purchase:   The Month security purchased, default to current
                        month.
I  Day of Purchase:     The Day security purchased, default to current day.
R  Day of the Week:     The system will reply with the Day of the Week that
                        this purchase took place.
I  Price Per Share:     The price paid per share.
I  Commission to Buy:   The total commission & fees paid at Purchase.
R  Total Cost to Buy:   The system will then reply with the total cost of
                        purchase based on Number of Shares; Price paid per
                        share; & Commission/Fees paid.
Q  Has this been Sold:  If you answer "Y", you will then be able input the
                        sell data.  If you answer "N";  you will be allowed
                        to exit to store the purchase data. 
I  Year Security Sold:  The year security sold, default to current year.
I  Month Security Sold: The month security sold, default to current month.
I  Day Security Sold:   The day security sold, default to current day.
R  Day of the Week:     The system will reply with the Day of the Week that
                        this sale took place.
I  Price Per Share:     The price received per share when sold.
I  Commission to Sell:  The total commission & fees paid when sold.
R  Total Received:      The system will then reply with the total amount
                        received when sold, based on Number of Shares; Price
                        per share received when sold; & Commission/Fees paid.
R  Total Loss or Gain:  The system will then calculate the total amount of
                        loss or gain based on the above data.
Q  Is this Correct:     Enter "Y" to store the record; "N" to try again or
                        "A" to abort the addition of the record.

    Hint: Even if you make a mistake, you may find it quicker to go ahead &
save the data already entered by answering "Y", & simply correcting the error
later by using the Edit Command described below.   

EDIT OR UPDATE EXISTING DATA:  Edit any item of a security record.  Once the
record is sold, you will want to edit that record to enter the sell data. 
After entering this option, you will be asked to enter the record number to
edit.  If you don't know the correct record number, you can simply press
return to display a pop up window of available records on file.   Highlight
the record of choice using the UP or DOWN arrow keys, PGUP, PGDN, HOME, or
END keys, & press return.

    After your selection, you will be able to enter "E" to edit the item, "A"
to abort the edit screen, or "D" to delete this record.  If you select "D"
you will be asked to confirm the deletion of this record by entering a "Y".

    If you choose to edit the chosen record using the "E" option, each item
of the record will be displayed for your inspection.  If this item is
correct, press "Y", to continue to the next item.  If the item is not
correct, enter "N", to modify this item or value.

    If you wish to change the buy or sell status, enter "0" when asked if the
year is correct.  The record status will be modified accordingly. For exam-
ple; to modify the status of a record that was stored as being sold, you
simply enter "N" & then "0", when asked if the Sell Year is correct.  This
would then change the status of this record to "Not Yet Sold".

GENERATE GRAPH OF EXISTING DATA:  Branch to the Graph Display Menu.

PRINT DATA & REPORTS MENU:  Branch to the Main Print Menu.  

CURRENT PRICING & DATA MENU:  Branch to the Current Pricing Menu.

UTILITIES MENU - FILE/CALENDAR/SETUP:  Branch to the Utility Menu.    
        
QUIT & EXIT - WALL $TREET - TBL:  When ready to exit Wall $treet TBL, simply
enter "Q" from the main menu.  You will be able to Print a registration form
to your printer, Begin again or Exit.

             .............. INVESTMENT DISPLAY MENU ..............

INDEX OF DATA ON FILE:  Present a summary of all the records in index format
to your screen.  You will be able to select "A" for all records, "Q" to quit,
or search by Name, Symbol or Buy & Sell Year.  The search string must be 2 to
10 characters in length.  For example entering "TEX" would return all records
with the characters "TEX" in the security or symbol name.  Entering "1980" or
"80", will return all records bought or sold in 1980 or with those characters
in the name or symbol.

SELECTED ITEM DISPLAY:  To view the details of a specific record, simply
enter the corresponding record number here.  A window can be popped up, by
pressing return.  
  
DISPLAY MULTIPLE ITEMS:  This works much the same as the Index option, except
each record is displayed in detail format.  The up/down arrow keys can be
used to select the next, & prior records accordingly.  The number of days
held to date will be displayed if the record is still in your portfolio. 
This is based on your Computer system Date as displayed. The record number is
displayed at the top of the screen during this search.  Enter "Q" at any time
to abort the data display.

ANALYSIS MENU - YEAR/CURRENT:  Branch to the Analysis Print Menu.

MAIN WSTBL MENU:  Branch to Wall $treet The Bottom Line Main Menu



             ..............INVESTMENT ANALYSIS MENU ..............

INVESTMENTS BY YEAR:  Display in index format, all trading activity for the
selected year.  A simple summary analysis will also be displayed at the
bottom of the screen.

PROFIT ANALYSIS BY YEAR:  Display in index format, all records that were
sold, (or bought, in the case of a short sell) during the selected year.  A
summary analysis will also be displayed at the bottom of the screen.  This is
a useful summary report at tax time. 

CURRENT INVESTMENTS HELD:  Display in index format, a listing of all securi-
ties currently held, along with a simple summary analysis.  The current
prices are not displayed here, but rather the investment data.  See Current
Pricing Menu.

INVESTMENT DISPLAY MENU:  Branch to the Investment Display Menu.

MAIN WSTBL MENU:  Branch to Main Wall $treet The Bottom Line Main Menu. 



                 .............. MAIN PRINT MENU ..............

PRINT: INDEX - DATA ON FILE:  Send a hard copy of your Security data file in
Index format to your printer.  The printout will be double spaced & printed
in compressed print.  A summary will be printed at the bottom based on the
records printed.  You can choose to print all records by entering "A" or
select a portion of your data records by:

    1:  Entering a Bxx where xx is the beginning record number.  A listing of
    all records, beginning with the selected record number will be sent to
    your printer.  This is useful to provide an update of recent investments
    without printing the entire file.
    2:  Entering a search data string of between 2 & 10 characters.  For
    example entering "89" will produce a listing of all records with "89" in
    the Year, Symbol or Name fields. 

You may also enter "Q" to return to the prior menu without sending any data
to your printer.

PRINT: SELECTED DATA RECORD:  Print a hard copy of a single data record in
detail format.  You will need to know the record number you want to print. 
This printout will closely resemble the detail record view option from the
main menu. 
PRINT: GROUP - DATA RECORDS:  Print a hard copy of a group of data records in
detail format.  The printout of each record will closely resemble the detail
record view option from the main menu.  The search option will function as
described above.

ANALYSIS MENU - YEAR/CURRENT:  Branch to the Analysis Print Menu.

MAIN WSTBL MENU:  Branch to Wall $treet The Bottom Line Main Menu.

    Print Menu Note:  You must have a printer connected to use this option. 
    If the printer is not "on-line" you will be prompted to place the printer
    on line before the menu selections may be made.  If you do not correct
    this after a reasonable length of time, the program will automatically
    re-load the main menu.

CAUTION:    In some cases, the Program will not be able to tell if your
printer is on.  If the program locks up after selecting a print selection,
turn on the printer & place the printer on line.  If this does not correct
the problem, you may be forced to reboot, or re-start your system. 


               .............. ANALYSIS PRINT MENU ..............

PRINT: INVESTMENT HISTORY BY YEAR:  Print a hard copy in index format, of all
data records either bought or sold in the selected year.

PRINT: PROFIT ANALYSIS BY YEAR:  Print a hard copy in index format, of all
records that were sold in the selected year.  In the case of short sells, the
records will be selected based on the year purchased.

PRINT: CURRENT INVESTMENTS HELD:  Print a hard copy in index format, of all
records that are currently still in your portfolio.   This is quite useful to
obtain a listing of the securities you are currently holding.  See Current
Pricing Menu.

RETURN TO MAIN PRINT MENU:  Branch to the Main Print Menu.

MAIN WSTBL MENU:  Branch to Wall $treet The Bottom Line Main Menu.

             .............. WSTBL GRAPH CHOICE MENU ..............

PROFIT / LOSS GRAPH:  Display a graph of Profit or Loss by record number. 
Similar to the video print option, you will be able to select "A" for all re-
cords, "Q" to quit, "C" for Currently held investments, search by Symbol,
Name, or Buy or Sell year.  The search string will function as described
earlier.
    When entering a "C" for currently held investments, All records currently
being held are displayed.  The P & L on these items is calculated based on
the prices set in the current pricing module.  Potential losses will be
displayed below the line in red, & profit will be displayed above the line in
green.

% PROFIT / LOSS GRAPH:  Display percent profit or loss by record number. The
available options are the same as described above, with a similar graph
layout.

CURRENT HOLDINGS:  Display graphically the amount invested of the currently
held securities, by record number.  If your current holdings include any
"short sells", these will be displayed in magenta on a color display
(EGA/VGA).  Use the "C" option from the Profit / Loss Graph selection to
examine the current P/L status of the currently held investments. 

FEES PAID % GRAPH:  This will display the percentage of the total investment
that was paid as commission & fees, by record number.  All records will be
displayed, including those currently being held.   The percent paid at
security purchase will be above the line.  The percent paid at the sale of
each security will be below the line.  Each record will generate two bars,
except for those records currently being held.  This is useful to gain a
graphical representation of the % commission being paid over multiple
records, or an extended period of time.

CUM-SUMMARY GRAPH:  Display a CUM-SUM chart for profit or loss by record
number.  From left to right, each bar is the sum of the prior displayed bars. 
This could be used to determine the total amount of profit or loss over
numerous records.

GRAPH MODE SELECT MENU:  Branch to the Graphic Mode Select Menu.

MAIN WSTBL MENU:  Branch to Wall $treet The Bottom Line Main Menu. 

General Graph Notes: 
    1:  Although there is no limit to the number of records that can be
    maintained on WSTBL, the maximum number of records that can be graphed at
    a single time is 300.  If you attempt to exceed this limit, a warning
    will be printed & the first 300 items selected will be displayed.  In the
    case of the Fees Paid graph, 300 bars can be generated for 150 records.

    2:  The vertical scale is set automatically to simplify the graphing
    process.  A multiplying factor is displayed at the top of the graph.  For
    example, if the top of the vertical axis displayed 125 x 10^2, this would
    mean that a full scale vertical bar would represent $12,500.

    3:  The horizontal axis will be labeled with the record number & space
    permitting, with the name of the security.  The name will be truncated to
    include the first several characters as space permits.  When more than 8
    records are displayed, only the record number will be displayed.  When
    more than 17 records are displayed a skip sequence will be used to label
    the records at regular intervals.  When large number of records are
    printed, the number of records included in the graph, will displayed at
    the upper left corner of the graph screen. 
    

             .............. GRAPH MODE SELECT MENU ..............

AUTO DETECT:  An attempt will be made to determine the graphic capability of
your system.   Once you select this option the detected Graphic capability
will be displayed at the bottom of the screen for a short period of time.  In
each case, a warning will be presented if you attempt to select a graphic
mode that is not supported by your hardware.  If a lockup should occur, you
can reset the graphic mode by deleting the wallst.ctl file and restarting the
program.

VGA COLOR:  Set the Graphic Mode to VGA Color.  Graphs will be displayed in
color in a 640x480 resolution mode.

EGA COLOR:  Set the Graphic Mode to EGA Color.  Graphs will be displayed in
color in a 640x350 resolution mode.

CGA MONOCHROME:  Set the Graphic Mode to CGA Monochrome.  Graphs will be
displayed in Monochrome in a 640x200 resolution mode.

MCGA MONOCHROME:  Set the Graphic Mode to MCGA Monochrome.  Graphs will be
displayed in Monochrome in a 640x200 resolution mode.

MAIN GRAPH MENU:  Branch to the Main Graph Menu. 


           .............. CURRENT PRICING & DATA MENU ..............

UPDATE CURRENT INVESTMENT MENU:  Once a list of symbols has been defined for
all current investments, (see Define Symbol Option described below) you will
be able to input current investment pricing, earnings per share, dividend
paid per share, & enter a comment as shown in the sample data file.  From
these values the P-E ratio, & % dividend information will be calculated. 
Each time the current pricing information is updated the PE & % Dividend
information will be updated automatically.  The formulas used are as follows:

                PE   = Current Price / Earnings per Share.
            % Dividend = Dividend per Share / Current Price * 100.

    The current pricing information can be used to evaluate your current
investments.  If you simply want to keep track of the current prices, you may
choose not to update the Earnings & Dividend fields.  Once the current price
has been input, or verified correct, pressing the "ESC" key will advance to
the next symbol, for quick & simple update capability.
    
OPTIONS:    
    CHANGE CURRENT DATE:  The Current system date is displayed.  It is used
    for you to be able to determine the date that current pricing information
    is entered.  
    
    UPDATE ALL:  Each symbol defined in the symbol database, will be dis-
    played & you will be able to update the current pricing information on
    each individually.  
    
    SELECT SYMBOL:  This will pop up a window with all current symbols
    listed.  You can easily select the correct symbol by using the arrow
    keys.  After the Current information has been entered for this symbol,
    the Option Screen will be displayed allowing you to select another symbol
    for update.  This feature is useful if you have a large number of symbols
    active & want to update the current pricing information on a single
    symbol.
 
    SYMBOL UPDATE SCREEN:  The symbol is displayed at the top of the screen,
    along with the number or current investments from the currently active
    data file assigned to this symbol.  The date of the last update is
    displayed at the bottom of the screen.  The Active Data File, Record
    Number, & the Investment Name are displayed to identify the investment
    for you.  Pressing ESC will advance to the next symbol, Pressing "N" will
    allow you to change the current information.  Pressing "A"bort will
    return you to the parent menu.  If a current symbol is no longer desired
    in the symbol database, pressing "D" will delete this symbol.  

    DEFINE INVESTMENT SYMBOLS:  Define the symbols you will use to identify
    each of the investments you wish to track.  Initially, your current
    investments will be scanned & you are asked to assign a symbol to each
    one.  The symbol can be added if necessary or selected from an existing
    list, which can be displayed in a pop up window.  This feature prevents
    you from having to remember the symbol or abbreviation used previously. 
    Once the pop up window is displayed, you can select from an existing
    symbol, by using the up & down arrow keys to place the highlight on the
    symbol of choice & press return.
        If the symbol is not listed in the current list, press ESC & you will
    able to add the new symbol.  Once the new symbol has been added, it will
    be included in the symbol list, in alphabetical order.

    Note: You may choose to maintain symbols in your symbol file with current
    pricing information even if you do not currently hold any shares of this
    security.  This will not create a problem & can be used to track invest-
    ments that you are considering for purchase or just wish to monitor on a
    regular basis.  

SUMMARY SYMBOL/PRICE/DATA LIST:  This will display to the screen, a summary
of the symbol, initial investment price, current price, & associated data
currently assigned to each of your current investments.  The potential profit
or loss is displayed based on the current price, & initial investment.  One
should note that any commission or fees that may be required, to sell the
investment are not included in this calculation.   A summary of the number of
current investments, number of symbols, & total amount currently invested is
summarized at the bottom of the screen.  Trades completed in the current year
are also included in this display to provide a summary for the current year.

PRINT REPORTS & ANALYSIS MENU: Branch to the Current Pricing Report Menu. 

INITIALIZE SYMBOL DATABASE:  This will initialize the symbol database.  All
current pricing information will be lost from the symbol file.  The last
price & active symbol will still be stored in the main data file.  You can
easily recreate the active symbol list, for securities currently held, by the
simple process outlined below:
    
    1:  Initialize the Symbol Data Base
    2:  Select the Define Symbol option & press return to accept the current
        symbols still stored on the Main Database.
    3:  Select the Update Current Pricing option, & Enter the current prices,
        and associated data for each symbol as appropriate.
   
Note:   This module was written to be able to track numerous portfolios with
the same investments, as well as numerous investments of the same security in
the same portfolio.  For this reason, the first time you use this module, &
for any new securities not currently in your symbol database, you are
required to establish a symbol or abbreviation, for each investment.  It is
intended that the standard "Ticker Symbol" be used, but any symbol (2 to 6
characters ) will work, as long as you are consistent.


  ......... PRINT REPORTS & ANALYSIS MENU (CURRENT PRICING MODULE) .........

PRINT: INDEX - AT CURRENT PRICES:  Print an index listing of your current
investments with the current pricing information incorporated in the analy-
sis.  You are also allowed to select a subset of your current investments. 
Year to date completed trades are also included.

PRINT: CURRENT DATA - INDEX PRINT:  Print an index listing of your current
investments with the current pricing, PE, & % Dividend information.

PRINT: SELECTED INVESTMENT ITEM:  Print in Detail format any single invest-
ment by record number.  If this investment is currently being held the
potential P/L calculations are included based on current pricing.

PRINT: GROUP INVESTMENT ITEMS:  Print in Detail format a group of investments
by specifying a search string.  The search string will function as described
earlier.  If any of the investments selected are currently being held the
potential P/L calculations are included based on current pricing.

MAIN CURRENT PRICE/DATA MENU:  Branch to the Main Current Pricing Menu.


                  ..............  UTILITY MENU ..............

FILE MANAGEMENT MENU:  Branch to the File Management Menu.

SYSTEM CONFIGURATION:  Display several aspects of your current system
configuration.  
    1:  Current Operation System Version, & System Memory.
    2:  Current Active Disk Drive & Available Space on Active Drive.
    3:  Active Data File & Number of Records that can be stored on current
        system based on Available Space on Current Disk Drive.   
    4:  System environment variables currently set on your system.  The dis-
        play will include the active "PATH" & DOS environment variables.
    5:  Current Graphics Capability, active number of columns, & Bios Mode
    6:  Number of detected Serial, Parallel, & Game ports.
    7:  Current System Time & Date.
GRAPHIC MODE CHANGE:  Branch to change Graphic Modes.

CALENDAR GENERATOR:  This option will generate a calendar for any month &
year from 1899 to the year 2099.  Once the desired month is displayed, you
can display the next or prior month, by pressing "N" or "P" accordingly.  You
can also select a new month by pressing "C" to change the active date.  This
is useful in determining the exact date a trade took place & also as a
utility for other applications.  You can quickly select the current year &
month, by simply pressing return in response to the year & month inquires. 
Press "Q" to return to the Main Utility Menu.

PRINTER CONTROL CODES:  This option will allow you to modify the default
printer control codes.  Most users will not have to change these codes.  In
the event that your printer does not use standard escape sequences, they can
be changed as noted below.  The default control codes are sent as described
Below:
                
        Universal Escape Code:  Sent as CHR$(27)
        Compressed Print Code:  Sent as CHR$(15)
        Cancel Compressed Print:Sent as CHR$(18)
        Line Feed Command Code: Sent as CHR$(10)
        Form Feed Command Code: Sent as CHR$(12)

The following use the Universal escape code as described above, indicated
below by ESC:
        10 Pitch Char Space:    Sent as CHR$(ESC) CHR$(121)
        6 Lines/inch Spacing:   Sent as CHR$(ESC) CHR$(50)

The following printer initialization code consists of a 3 code string.  If
you only need a 2 code string, #2 can be set to 0 as noted below.

        Printer Initialize Code:Sent as CHR$(ESC) CHR$(0) CHR$(0)

These codes are currently turned off by sending 0 for both values.  

        Printer Bold Print Code:Sent as CHR$(ESC) CHR$(69)
        Printer Expanded Print: Sent as CHR$(14)

Caution:  Consult your printer control manual before attempting to modify any
of these control codes.  You can reset these codes to the default values
listed above by pressing "R" from this menu.

MAIN WSTBL MENU: Branch to Wall $treet The Bottom Line Main Menu.


              .............. FILE MANAGEMENT MENU ..............

ACTIVE FILE CHANGE:  Modify the data file that is currently active in WSTBL. 
You may also open a new file from this menu choice.  You may find it useful
to keep separate data files for different investment types, or perhaps a new
file each year.  This is strictly a matter of preference.  The size data file
that can be successfully handled is limited only by disk space.

    You can select from the existing file names by pressing return to invoke
the pop up window with all available .DAT files in the current
drive/directory.    If you know the name of the file, or to input a new file
name, you can simply type in up to eight characters to form your file name. 
Valid characters are limited to A-Z & 0-9.  The DOS suffix of ".Dat" will be
added to the end of the file name. 
    
    The screen will remind you of the last date the file was accessed, as
well as the currently active file.  When a new data file is accepted, the
program will read & verify all data for syntax & content.  You will also be
notified of the number of active records in the selected file.  

    The file format has been changed in version 5.3 from prior versions to
permit partial share data to be stored.  The program will automatically
convert to the new file format if your data file was created with a version
of WSTBL after 5.0.   The screen will notify you of this conversion when it
occurs.  You will not be able to use the version 5.3 data files with prior
versions of WSTBL.

LIST ALL FILES:  This option will display a listing of all files in your
current directory.  If you maintain your WSTBL software in a directory of
it's own, all files should fit on one screen.  If you have a large number of
data files, the display will pause at the end of each screen. 

DELETE DATA FILE:  This option will allow you to delete a ".DAT" (Data) file. 
Similar input screen will be available as described above.  You will be
notified if the deletion was successful.

COPY DATA FILE:  This option will allow you to copy an existing ".DAT" (Data)
file.  This feature is useful if you decide to divide an existing file into
smaller separate files.  This can be done by copying the source file & then
deleting the desired, records from the files using the main menu, edit
option.

MAIN UTILITY MENU:  Branch to the Main Utility Menu.


              ..............  GRAPHIC - COLOR MENU ..............

NO GRAPHICS / MONOCHROME:  EGA Graphic Borders will be ignored, & all colors
will be set to high intensity white.  ASCII borders will be displayed.

COLOR / NO GRAPHICS:  EGA Graphic Borders will be ignored, menu items will be
displayed in full color, with Blue ASCII Borders.
    
EGA / COLOR GRAPHICS:  EGA screen graphics will be displayed in full color
with EGA Graphic Borders.  If your system does not support EGA or VGA, do not
select this option.  
    Note: The pop up windows will exit the EGA mode temporarily while the
window is being displayed.  You may choose no select COLOR / NO GRAPHICS,
even if you have EGA/VGA capability.  This will make the windows function
more efficiently.

ALTER DEFAULT COLORS:  Change the color settings.  The colors will only be
modified when setting the graphics to "C" or "E", as described above.   The
current color choices are displayed, along with the valid 15 system colors. 
These are displayed for your choice, & are numbered 1 through 15.  The
standard color assignments are as noted below:
 
            Red will be used to indicate a loss.
            Green to indicate a profit.
            Magenta to indicate a short Sell.               
            White to indicate an investment still held.

Note:  If you choose to install, by simply copying the files, or if you
delete the Wallst.Ctl file, the default setup will be color, no graphics. 
This does not effect the generation of Graphs.  The graphic choices for the
Graph Menu are available separately.  

MAIN UTILITY MENU:  Branch to the Main Utility Menu.
             ............... BUGS OR PROBLEMS ...............

    Reasonable care was taken to ensure that you will not encounter any
problems while using Wall $treet - The Bottom Line.  These include range
checking on the input fields & testing prior to release.  If you should
encounter any problems while using this product please report these to:

                                STANCOatlanta
                        Wall $treet - The Bottom Line
                         2615 Shallowford RD., N.E.
                           Atlanta, Georgia  30345
                               (404) 636-2179

    Please include as much information as possible.  In the case of a system
error, please include: the error number, the conditions that produced the
error, & a hardware description of your system.  Where possible, we will
identify & correct the problem & provide a corrected copy to you at no
charge.

             ............ OPERATING NOTES & HINTS .............

NOTE 1: If you have entered a record as being sold & later determine that it
        is not sold, you may correct this by entering "0" in the year field,
        to change the sold status.  For example, if you entered a record as
        being sold, & wish to modify it to be unsold;  When asked if the year
        data is correct, just enter "N" for not correct & "0" for the year.
NOTE 2: If you make an error from one of the menus, & wish to abort the
        current screen, enter a reply of "Q" or "q" (Short for Quit), to the
        first field on the screen, & the system will return you to the parent
        menu.  When viewing a menu, a the "ESC" key will return you to the
        parent menu, or to the exit screen if currently at the parent menu.
NOTE 3: If you specify a graphic mode, & your system locks up, you can reset
        to the standard color settings, with no graphics by deleting the file
        "WALLST.CTL", using DOS, before restarting WSTBL.
NOTE 4: If you modify the printer control codes, & do not achieve the desired
        results, you can reset these codes from the utility menu.  You can
        also delete the PRINTER.CTL file before starting WSTBL, which will
        also reset these codes. 
NOTE 5: The ".CTL" file format has changed from earlier (Pre 5.0) versions of
        the program.  You must use the new file or allow the WSTBL to create
        a new one when you use the new version of WSTBL.
NOTE 6: The Data file structure has changed from earlier versions of the
        program.  File structures created with WSTBL prior to version 5.0 are
        not supported.  The program will automatically convert 5.0, 5.1 or
        5.2 version files to version 5.3.
NOTE 7: Although WSTBL can be successfully run from a floppy disk drive, a
        hard drive is recommended.  This will greatly increase the speed of
        the program & increase the number of records that can be displayed. 
        If you choose to run WSTBL from a floppy drive, & you find that you
        need more storage space, you can delete the Sample.Dat, Wallst.Doc &
        Read.Me files.  This will increase the number of records that can be
        stored on the disk by approximately 500 records.  The number of
        records that will fit on the disk at any time, can be read directly
        from the utility menu - System display option.   


                   ............ RESTRICTIONS ............

    You may not alter, modify, or adapt the software, including, but not
limited to, translating, decompiling, disassembling, or creating derivative
works.

    Image Plus Software makes no warranty or representation either expressed
or implied, with respect to this software or documentation, including their
quality, performance, or fitness for a specific purpose. 

    Because software is inherently complex & may not be completely free of
errors, you are advised to verify your work.  In no event will Image Plus
Software be liable for direct, indirect, special, incidental, or consequen-
tial damages arising out of the use or inability to use the software or
documentation, even if advised of the possibility of such damages.


               ........... REGISTRATION AGREEMENT ............

    If you wish to obtain a personalized copy of Wall $treet - The Bottom
Line, with all limitations removed, please fill out the registration form.
This form is available by pressing "P" as indicated when you begin or end the
program. 

    Registered users will receive the latest version customized with their
name on the system menus, & with all time limitations removed.  You will also
be added to our mailing list & will be made aware of all future releases.  

    Drop us a line if you have any questions or recommendations on Wall
$treet - The Bottom Line.  We want to hear from you!


            Thank You for choosing Wall $treet - The Bottom Line
                     & Good Luck with your Investments!

                                 Dan Schell
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2792

     Volume in drive A has no label
     Directory of A:\

    PRINTER  CTL        32  11-05-90
    WALLST   CTL        81  11-19-90  10:40a
    SAMPLE   DAT      1968  11-08-90   3:55p
    WALLST   DOC     38894  11-05-90  12:41p
    WALLST   DTA       504  11-08-90   3:55p
    BRUN45   EXE     77440  11-05-90
    INSTALL  EXE     12752  11-05-90
    WALLST   EXE     18360  11-05-90
    PNTWST   OVL     29912  11-05-90
    WSGRAPH  OVL     24048  11-05-90
    WSMAIN   OVL     56096  11-05-90
    WSTRACK  OVL     54318  11-05-90
    WSUTIL   OVL     41330  11-05-90
           13 file(s)     355735 bytes
                               0 bytes free
