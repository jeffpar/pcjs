---
layout: page
title: "PC-SIG Diskette Library (Disk #644)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0644/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0644"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE STOCK TRADER"

    STOCK TRADER tracks selected stock performances and generates buy and
    sell signals according to trends over user-selected periods of time.
    There are 8 stocks at the start for demo purposes. Stocks may be added
    and deleted, and the DOW performance, or an other accepted market
    average is also displayed. Stock performance is graphed in x-y mode,
    and graphs may be printed. The program is menu-driven requires color
    graphics.
    
    System Requirements: 128K memory, two disk drives and color graphics.
    
    How to Start:  Load DOS and type STOCK to enter the main program.
    Consult READ.ME for program information.
    
    Suggested Registration: $35.00.
    
    File Descriptions:
    
    CONFIG   BAT  Batch file for configuration program.
    SCREENA2 DAT  Help screen #2 for updating stocks.
    SCREENA  DAT  Help screen #1 for updating stocks.
    READ     ME   File instructions for starting The STOCK TRADER.
    MONEY    DAT  Call-up screen for info on donations, copyrights, etc.
    GOER     BAT  Batch file used in configuration of the STOCK TRADER.
    FIGURA   EXE  Program for configuration.
    CONTROL  DAT  Screen data for help screen to set printer codes.
    CONFIG   DAT  Configuration data file used to format screens and graphs.
    SCREENM3 DAT  Help screen #3 for the menu menu.
    SCREENM2 DAT  Help screen #2 for the menu menu.
    SCREENM  DAT  Help screen #1 for the menu menu.
    SCREENJ2 DAT  Help screen  #2 for entering modifications to trading.
    SCREENJ  DAT  Help screen  #1 for entering modifications to trading.
    SCREENI  DAT  Help screen for changing printer codes.
    SCREENH  DAT  Help screen for stock splitting.
    SCREENF  DAT  Working screen for printout of stock performance.
    SCREENE  DAT  Working screen for posting the data entry date.
    SCREEND3 DAT  Help screen #3 for graphing a stock.
    SCREEND2 DAT  Help screen #2 for graphing a stock.
    SCREEND  DAT  Help screen #1 for graphing a stock.
    SCREENC  DAT  Help screen for deleting a stock.
    SCREENA3 DAT  Help screen #3 for updating stocks.
    SCREENB2 DAT  Help screen #2 for adding a stock to data file.
    SCREENB  DAT  Help screen #1 for adding a stock to data file.
    STOCK    COM  The STOCK TRADER main program.
    WARNING  DAT  Usage information screen.
    STOCKS   DAT  Data file for stocks for demonstration and additions.
    UNSTALL  EXE  Exe program to un-install the STOCK TRADER.
    NOTES    TXT  Notes on programs
    INFO     BAT  Prints out documentation files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  101  The Stock Trader
---------------------------------------------------------------------------
The Stock Trader is a menu driven program requiring a graphics monitor
for tracking selected stock performance and generating buy and sell signals
according to trends over user selected periods of time. There are 8 stocks
at the start for demo purposes. Stocks may be added and deleted, and the
DOW performance, or other accepted market average is also displayed.
Stock performance is graphed in x-y mode, and graphs may be printed.

------------  The Stock Trader -------------------------------------------
CONFIG   BAT  Bat file for configuration program
CONFIG   DAT  Configuration data file used to format screens and graphs.
CONTROL  DAT  Screen data for help screen to set printer codes.
FIGURA   EXE  Exe program for configuration
GOER     BAT  Bat file used in configuration of the Stock Trader.
MONEY    DAT  Call-up screen for info on donations, copyrights, etc.
README        Text file instructions for starting The Stock Trader
SCREENA  DAT  Help screen #1 for updating stocks.
SCREENA2 DAT  Help screen #2 for updating stocks.
SCREENA3 DAT  Help screen #3 for updating stocks.
SCREENB  DAT  Help screen #1 for adding a stock to data file.
SCREENB2 DAT  Help screen #2 for adding a stock to data file.
SCREENC  DAT  Help screen for deleting a stock.
SCREEND  DAT  Help screen #1 for graphing a stock.
SCREEND2 DAT  Help screen #2 for graphing a stock.
SCREEND3 DAT  Help screen #3 for graphing a stock.
SCREENE  DAT  Working screen for posting the data entry date.
SCREENF  DAT  Working screen for printout of stock performance.
SCREENH  DAT  Help screen for stock splitting.
SCREENI  DAT  Help screen for changing printer codes.
SCREENJ  DAT  Help screen  #1 for entering modifications to trading indicators.
SCREENJ2 DAT  Help screen  #2 for entering modifications to trading indicators.
SCREENM  DAT  Help screen #1 for the menu menu.
SCREENM2 DAT  Help screen #2 for the menu menu.
SCREENM3 DAT  Help screen #3 for the menu menu.
STOCK    COM  The Stock Trader main program
STOCKS   DAT  Data file for stocks for demonstration and additions.
WARNING  DAT  Usage information screen
UNSTALL  EXE  Exe program to un-install the Stock Trader





DSF Associates
P.O. Box 19624
Portland, OR  97219
(503) 244-4800
```
{% endraw %}

## FILES644.TXT

{% raw %}
```
Disk No  644
Program Title: STOCK TRADER version 4
PC-SIG version 4.1
 
    STOCK TRADER tracks selected stock performances and generates buy and
sell signals according to trends over user-selected periods of time. There
are 8 stocks at the start for demo purposes. Stocks may be added and
deleted, and the DOW performance, or an other accepted market average is
also displayed. Stock performance is graphed in x-y mode, and graphs may be
printed. The program is menu-driven requires color graphics.
 
Usage: Stock Tracking and Analysis
 
System Requirements: 128K memory, two disk drives and color graphics.
 
How to Start:  Load DOS and type STOCK to enter the main program.
Consult READ.ME for program information.
 
Suggested Donation: $35.00
 
File Descriptions:
 
CONFIG   BAT  Batch file for configuration program.
CONFIG   DAT  Configuration data file used to format screens and graphs.
CONTROL  DAT  Screen data for help screen to set printer codes.
FIGURA   EXE  Program for configuration.
GOER     BAT  Batch file used in configuration of the STOCK TRADER.
MONEY    DAT  Call-up screen for info on donations, copyrights, etc.
README        Text file instructions for starting The STOCK TRADER.
SCREENA  DAT  Help screen #1 for updating stocks.
SCREENA2 DAT  Help screen #2 for updating stocks.
SCREENA3 DAT  Help screen #3 for updating stocks.
SCREENB  DAT  Help screen #1 for adding a stock to data file.
SCREENB2 DAT  Help screen #2 for adding a stock to data file.
SCREENC  DAT  Help screen for deleting a stock.
SCREEND  DAT  Help screen #1 for graphing a stock.
SCREEND2 DAT  Help screen #2 for graphing a stock.
SCREEND3 DAT  Help screen #3 for graphing a stock.
SCREENE  DAT  Working screen for posting the data entry date.
SCREENF  DAT  Working screen for printout of stock performance.
SCREENH  DAT  Help screen for stock splitting.
SCREENI  DAT  Help screen for changing printer codes.
SCREENJ  DAT  Help screen  #1 for entering modifications to trading.
SCREENJ2 DAT  Help screen  #2 for entering modifications to trading.
SCREENM  DAT  Help screen #1 for the menu menu.
SCREENM2 DAT  Help screen #2 for the menu menu.
SCREENM3 DAT  Help screen #3 for the menu menu.
STOCK    COM  The STOCK TRADER main program.
STOCKS   DAT  Data file for stocks for demonstration and additions.
WARNING  DAT  Usage information screen.
UNSTALL  EXE  Exe program to un-install the STOCK TRADER.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## NOTES.TXT

{% raw %}
```
Program name:  The Stock Trader

Author name:   Freebooter Software - DSF Associates
Address:       P.O. Box 19624
               Portland, OR  97219

Telephone Number: (503) 244-4800

Suggested Donation:  $35

Program Description:

The Stock Trader is a menu driven stock trading program for tracking
the performance of a group of stocks selected by the user. Data normally
available in the daily newspapers is used and entered on a regular basis.
It is suggested that entry for the listed stocks be done daily, or the
information the program generates will be less accurate than expected.

The performance of selected issues is plotted over a thirty day period
in x-y mode at the user's request, and plotted performance can be printed.
The performance of a selected market average, such as the DOW, may also
be plotted for comparison to portfolio performance.

The program generates buy and sell signals for the stocks listed on the
data files, and the parameters by which these decisions are reached are
accessible to the user. A certain history is needed (a learning curve)
before it can be expected that a user could do the amendments to improve
the buy/sell suggestions. It is made very clear that the program is a tool
rather than a crystal ball.

This program runs from DOS and requires a graphics screen.

Review the README file for more indepth information.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0644

     Volume in drive A has no label
     Directory of A:\

    CONFIG   BAT       215   8-28-87   9:36a
    CONFIG   DAT       102   9-02-87   9:21a
    CONTROL  DAT      1100   8-21-87  12:37p
    FIGURA   EXE     72116  10-22-87   2:13p
    FILES    TXT      2458  10-08-87   8:27a
    FILES644 TXT      2557  12-01-87   8:49a
    GO       BAT        38  10-08-87   4:14p
    GO       TXT       617  10-08-87   4:15p
    GOER     BAT       214   9-01-87   2:24p
    INFO     BAT       245  10-10-87   5:55a
    MONEY    DAT      1310   8-19-87   3:24p
    NOTES    TXT      1402  10-08-87   8:30a
    READ     ME       1127   9-22-87   8:46a
    SCREENA  DAT      1360   8-19-87   3:45p
    SCREENA2 DAT      1792   1-28-86   9:55a
    SCREENA3 DAT      1612   8-19-87   3:48p
    SCREENB  DAT      1893   8-19-87   3:55p
    SCREENB2 DAT      1920   1-28-86  10:11a
    SCREENC  DAT      1719   8-19-87   3:59p
    SCREEND  DAT      1809   8-19-87   4:03p
    SCREEND2 DAT      1837   8-19-87   4:11p
    SCREEND3 DAT      1912   8-19-87   4:15p
    SCREENE  DAT      1920  12-23-85   2:51p
    SCREENF  DAT      2304  12-23-85  10:26a
    SCREENH  DAT      1792   1-31-86  10:36a
    SCREENI  DAT      1780   8-19-87   4:20p
    SCREENJ  DAT      1536   1-02-86   3:10p
    SCREENJ2 DAT      1352   8-21-87  11:37a
    SCREENM  DAT      2048   1-02-86   4:01p
    SCREENM2 DAT      2048  12-22-85  11:29a
    SCREENM3 DAT      2048  12-22-85  11:29a
    STOCK    COM     61896  10-22-87   3:27p
    STOCKS   DAT     24368   9-01-87   1:10p
    UNSTALL  EXE     45370   9-01-87   2:22p
    WARNING  DAT      1027   8-18-87   9:28a
           35 file(s)     248844 bytes
                           56320 bytes free
