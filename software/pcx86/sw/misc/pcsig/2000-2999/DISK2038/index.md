---
layout: page
title: "PC-SIG Diskette Library (Disk #2038)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2038/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2038"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "APEX FINANCIAL MARKETS DISK 1OF2 (2039)"

    APEX FINANCIAL MARKETS allows you to analyze market indexes/averages,
    foreign exchange rates, interest rates, industry groups, and market
    breadth data.
    
    APEX FINANCIAL MARKETS is easy to set up, easy to use, and effective for
    the individual with some prior experience in the market.  The manual
    explains how to use the program but does not train the novice in
    learning the "markets game."  APEX lets you create strategies using
    single or double moving averages, based on buying long, selling short,
    or both.  A valuable feature is the charting of optimization trials,
    allowing you to see the most effective choices for short and long term
    moving averages.
    
    There is no registration fee, no start-up fee, but there is a per quote
    fee.  You can enter your own data or download it by modem from Warner
    Computer Systems, Inc.  Apex users can waive Warner's standard $48 sign-
    up fee.  Warner currently has over 330 items that can be downloaded.
    Most of the data goes back at least 10 years.  There is a sample
    database on disk two of this program, allowing some initial
    experimentation.
    
    For those active in the market, the program provides a quick means to
    gain access to current rates and to plot them on the screen for review.
    For such investors, APEX FINANCIAL MARKETS is a valuable program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APEX1-1.DOC

{% raw %}
```
	Select "A" for Access if you want to download data from Warner
Computer or if you want to edit data that you have previously
downloaded.  If you are just starting and have not created any data
files you will need to also select "A" to create your database of
tickers for downloading.  Once "A" is selected you will be taken to
another menu where additional selections can be made.

	Select "P" for Plot if you want to display or analyze trading 
strategies on your database.  The first screen you will see will ask
you for the drive letter and path name (hard disk) for your database,
then you will need to select either one or two files of tickers for
analysis, and finally, you will be asked to select two tickers from
the file(s) that you selected previously.  You will now be shown the
Plot Menu from which you have many options.

	Select "E" or "X" for exporting any of your data files to one or
more of the data formats shown.  You will be taken to the EXporting
Menu from which you can choose the option(s) you desire.

	Select "C" if you wish to change the background and foreground
colors of the program menus or select "D" or "T" if you wish to change
the date or time.

```
{% endraw %}

## APEX1-2.DOC

{% raw %}
```
<1> Access/Download Data - connects you to Warner Computer for
automatic downloading/updating of data files.
 
<2> Edit/Update Files (more help available at that menu).

<3> Create New Files is where you create your database of tickers. 
You will first give a name to a file and then you can enter up to nine
ticker symbols in that file.

<4> Delete Data Files will remove unwanted files from your database.

<5> Modify Files lets you change file names and ticker symbols,
along with deleting tickers within a file.

<6> Transfer Files will allow you to move a data file from one disk
(subdirectory) to another.

<7> Truncate Files will allow you to remove old data from a file.

<8> Sort Data Files will arrange them in alpabetical order.

<9> Create a Database will create a new subdirectory and/or database.

```
{% endraw %}

## APEX1-3.DOC

{% raw %}
```
	The Edit/Update Menu allows you to do a variety of record
maintenance, that is, work on individual entries in your data file(s).

	List, Change, Delete, and Print Records, once selected, will
allow to you input your choice by record number or by date (YYMMDD).

	Enter Records will let you update your files manually.

	Adjust Records enables you to adjust any or all records for
splits, dividends, etc.

	Sort Records will ensure that they are in chronological order. 
This will allow you to enter old data at the end of a file and then
sort it to rearrange it in the proper order.

	Search Records will display minimums and maximums for each ticker
and let you enter values to search for within that file.

	Write to Disk will save permanently any changes that you have
made to the data file.  Any changes will be so noted with a flashing
asterisk and the Write to Disk selection will be flashing.  If you exit
this menu without saving your changes to disk, all changes will be lost.

```
{% endraw %}

## APEX1-4.DOC

{% raw %}
```
   <A> The local Telenet Number can be obtained from Warner Computer at
(800) 626-4634 or you can call Telenet at (800) 336-0437.  The number is
normally entered as a seven digit number.

   <B> The direct Warner number will let you call Warner directly,
bypassing the Telenet network.

   Your account number MUST be entered in selection <C> and your
password MUST be entered in selection <D>.  These entries are obtained
from Warner Computer when you open an account.

   <E> Printer Port and <F> Comm Port refer to the location of your
printer and modem, respectively.

   <G> Baud Rate refers to the speed at which your modem is set.

   <H> Use TELENET (Y/N) allows you to switch between <A> and <B> above.

   <I> Wait Limit in seconds tells the computer how long to wait before
hanging up if no transmissions are occuring.

```
{% endraw %}

## APEX1-5.DOC

{% raw %}
```
<1> On-Screen Graphic Analysis -  will first take you to the Program
Settings Menu where you can change the plotting parameters, then plot.

<2> Analyze trading strategies - will take you to a new menu system.

<3> List / Print Data -  will display or print the actual numbers,
along with dates, for the tickers you have loaded.

<4> List / Print Statistics - will display or print statistics on
every ticker in the file(s) that you have loaded.

<5> Change Graphics Mode - is where you can change the display mode for
the type of video equipment you are using.  Normally this is done when
first using the program and not changed.

<6> Change Graphics Colors - is where you can choose different colors
for your plotting display, if you have color equipment.

<7> Select New Tickers - will take you to the listing of the tickers in
the file(s) that is currently loaded.  Choose two more tickers to plot.

<8> Select New File - will give you the database prompt asking for the
drive letter and pathname to your database for more data to plot.

```
{% endraw %}

## APEX1-6.DOC

{% raw %}
```

The "Change Settings" Menu will allow you change the way the data
is displayed on your screen.

<A> Charts: (1) or (2) Plots determines whether you want a plot of
just the first ticker or a plot of both tickers.

<B> Plot Overlap: (0 to 100%) is automatically 100% if you have
selected a single plot from <A> above.  If you want both tickers to be
plotted, then you can determine how much overlap the two plots will
have with this feature.  If you choose 100% overlap with 2 plots
displayed, they will use the same scale.  If you have 2 plots
displayed and do not choose 100%, then the two scales will be
independent.

<C> Plot 2: Line (1) or Bar (2) will let you display the second ticker
as a line plot or a bar (histogram plot).  A histogram (bar) plot is
the normal method of displaying volume or data that has both positive
and negative values.

```
{% endraw %}

## APEX1-7.DOC

{% raw %}
```
   The APEX EXport Menu is where you can convert any or all of your
data files into one or more of the file formats listed on the screen.
The following shows the differences in the two ASCII formats:

   ASCII Comma Delimited-    DATE,HIGH,LOW,CLOSE,VOLUME
                             880802,12.88,12.25,12.5,4400

   ASCII Space Delimited-    DATE   HIGH   LOW    CLOSE  VOLUME
                             880802 12.88  12.25  12.5   4400

   The 'DIF' (Data Interchange Format) format is a special type of
ASCII file that is standard for translating data between programs.  

   The 123 'WKS' format is the format used by the '123' program.  It
can be read by most other spreadsheet programs.

   You must have a formatted diskette available or you must have
already setup a subdirectory for the converted file to be saved to.

   If you are going to convert a file to the CompuTrac format,
the destination disk (or subdirectory) must be a CompuTrac database.

```
{% endraw %}

## APEX1-8.DOC

{% raw %}
```
<1> This will take you to a parameter selection menu which has its own
help screen available.

<2> This will show you a trade-by-trade analysis of the ticker value and a
single moving average.  After scrolling or printing, you will get the op-
portunity to plot the ticker with the selected average showing each trade.

<3> Same as <2> above except two moving averages are used instead of the
ticker value and one moving average.

<4> This will display all possibilities with the parameters you have
selected in <1> above and then the range of values for the moving average,
including a step increment.

<5> Same as <4> above except that ranges for both a short and a long
moving average can be selected along with their increments.

<6> After <4> or <5> above have been calculated, this selection will let
you sort the results on numerous parameters.

```
{% endraw %}

## APEX1-9.DOC

{% raw %}
```
<A> Selecting "(1) Yes" will set up the trading analysis to trade the
long side (buy side) of the market being evaluated.  In other words, if
you buy and the value goes up, you have made a profit.

<B> This is the opposite of the long trade; it is where you make a profit
if you sell short (or buy puts, etc.) and the value goes down, you have
made a profit.

<C> Crossover duration will allow a delay in the execution of a signal by
the number of periods (days, weeks, etc.) that you select here.

<D> Start Record defaults to the data that was initially loaded when you
selected the P>lot option from the main menu.  Here you can test any
portion of the data that was loaded by changing the start record number.

<E> End Record is the same as <D> except the end record can be changed.

<F> This will let you determine the value used for the trading signals,
either today's close or tomorrow's close.

<G> Ignoring the first trade is a good idea because an actual crossover
has not occured yet and may distort the optimization results.

```
{% endraw %}

## FILE2038.TXT

{% raw %}
```
Disk No: 2038                                                           
Disk Title: APEX Financial Markets disk 1of2 (2039)                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: APEX Financial Markets                                   
Author Version: 9/89                                                    
Author Registration: None.                                              
Special Requirements: 512K RAM, DOS 3.0 or higher, and a modem.         
                                                                        
Stocks, Bonds, Mutual Funds, Futures, Commodities.  Does anyone         
understand them?  APEX does.  They have put together five programs to   
assist any investor in examining, analyzing, comparing, plotting or     
charting their stocks, bonds, funds, and more.                          
                                                                        
This program is called APEX FINANCIAL MARKETS.  Those who make          
investments in this market will find it useful.  APEX F/M is designed to
allow you to analyze market indexes/averages, foreign exchange rates,   
interest rates, industry groups, and market breadth data.  Further, data
can be downloaded from APEX for current/previous rates and data.        
                                                                        
On the down side, if you do not know what the Financial Markets are or  
are not an investor then this is not the program for you.  Why?  APEX   
FINANCIAL MARKETS are designed for the investor.  To use this program   
you must have a modem and a credit card.  The modem provides you with   
access to current information.  The credit card is the means to pay for 
any information that you download, since are charged for each quotation.
                                                                        
There is no registration fee, no start-up fee, but there is a per quote 
fee.  You cannot enter your own data but must download it. For  those   
active in the market, the program provides a quick means to gain access 
to current rates and then to plot it out on the screen for review.  For 
such investors, APEX Financial Markets is a valuable program.           
                                                                        
The program is easy to use, easy to set up, and useful.  The manual     
explains how to use the program but does not train the novice in        
learning the "markets game".  But, the price is nominal, as you are not 
billed for anything until you download a market quote.  Try it out.     
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #2038  APEX FINANCIAL MARKETS  >>>>             ║
║                        (disk 1 of 2, 2039 also)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: APEX         (press enter)                      ║
║                                                                         ║
║ To print documentation, insert disk 2 and type: COPY MANUAL.DOC PRN     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2038

     Volume in drive A has no label
     Directory of A:\

    A1HELP             586  11-28-88  10:21a
    A1KOLORS           951   2-26-89   8:56a
    A1MENUS            735   8-22-88   1:53p
    A1SETS              57   2-26-89   8:56a
    APEXDATA            21  10-29-88   8:47a
    COLORS              21  12-05-88  12:07p
    OP1SETS             53   2-26-89   9:00a
    OV1SETS             55   2-26-89   9:02a
    README             845   7-31-89  12:59p
    TEMPWKS           1280   8-24-88   4:10p
    WCSETS             108   2-26-89   8:56a
    APEX     BAT         8   8-04-88   1:07p
    AUTOEXEC BAT         6  12-05-88  12:29p
    APEX1-1  DOC      1282  11-25-88   4:32p
    APEX1-2  DOC       906   9-08-88  12:06p
    APEX1-3  DOC      1024   8-03-88  10:14a
    APEX1-4  DOC       896   8-03-88  10:29a
    APEX1-5  DOC      1176  11-25-88   4:41p
    APEX1-6  DOC       896   8-02-88   4:31p
    APEX1-7  DOC      1024   8-03-88  11:15a
    APEX1-8  DOC       983  11-25-88   4:43p
    APEX1-9  DOC      1085  11-25-88   4:44p
    ACCESS2  EXE     39746   7-31-89   8:46a
    BRUN30   EXE     70680   4-07-87  10:48a
    N2ACCESS EXE     48577   3-05-89  11:04a
    N2APEX   EXE     13201   3-05-89  11:05a
    N2EXPORT EXE     30946   5-12-89   7:28a
    N2PLOT1  EXE     78560   6-07-89  12:01p
    FILE2038 TXT      3257   1-16-90  10:54a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-16-90  11:20a
           31 file(s)     299620 bytes
                            5120 bytes free
