---
layout: page
title: "PC-SIG Diskette Library (Disk #2046)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2046/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2046"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "APEX POINT & FIGURE DISK 1 OF 2 (2047)"

    APEX POINT & FIGURE enables you to do complete point and figure analysis
    for any stock.  Stock files will contain the high, low, close, and
    volume for each day.
    
    There is no registration fee, no start-up fee, but there is a per quote
    fee.  You can enter your own data or download it by modem from Warner
    Computer Systems, Inc.  There is a sample database on disk two of this
    program, allowing some initial experimentation.
    
    The program is easy to use, easy to set up, and useful.  The manual
    explains how to use the program but does not train the novice in
    learning the "markets game."
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APEX5-1.DOC

{% raw %}
```

	Select "A" for Access if you want to download data from Warner
Computer or if you want to edit data that you have previously
downloaded.  If you are just starting and have not created any data
files you will need to also select "A" to create your database of
tickers for downloading.  Once "A" is selected you will be taken to
another menu where additional selections can be made.

	Select "P" for Plot if you want to display/analyze the data
(tickers) in your database.  The first screen you will see will ask
you for the drive letter and path name (hard disk) for your database,
then you can select a file (ticker) for analysis.  You will then be
asked for the number of days to plot and the starting record.  Finally,
you will be at the Plot Menu which has another 'help' screen.

	Select "E" or "X" for exporting any of your data files to one or
more of the data formats shown.  You will be taken to the EXporting
Menu from which you can choose the option(s) you desire.

	Select "C" if you wish to change the background and foreground
colors of the program menus or select "D" or "T" if you wish to change
the date or time.

```
{% endraw %}

## APEX5-2.DOC

{% raw %}
```
<1> Access/Download Data - connects you to Warner Computer for
automatic downloading/updating of data files.
 
<2> Edit/Update Files (more help available at that menu).

<3> Create New Files is where you create your database of tickers. 

<4> Delete Data Files will remove unwanted files from your database.

<5> Change File Name lets you change a file name.

<6> Transfer Files will allow you to move a data file from one disk
(subdirectory) to another.

<7> Truncate Files will allow you to remove old data from a file.

<8> Sort Data Files will arrange them in alpabetical order.

<9> Create a Database will create a subdirectory and/or database.

```
{% endraw %}

## APEX5-3.DOC

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

## APEX5-4.DOC

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

## APEX5-5.DOC

{% raw %}
```
<1> Plot / Analyze Data -  will first take you to the Program Settings
Menu where you can change the plotting parameters.  A separate help
screen is available once you are at that menu.

<2> List / Print Data -  will display or print the actual numbers,
along with dates, for the tickers you have loaded.

<3> List / Print P&F Data - will display or print the data that was
used in computing the P&F chart.

<4> Select a New Chart Type - will take you to the listing of the four
charting options that you had when you first loaded the data.

<5> Select a New File - will give you the database prompt asking for the
drive letter and pathname to another database to plot and analyze.

<6> Change Graphics Mode - is where you can change the display mode for
the type of video equipment you are using.  Normally this is done when
first using the program and not changed.

<7> Change Graphics Colors - is where you can choose different colors
for your plotting display, if you have color equipment.

```
{% endraw %}

## APEX5-6.DOC

{% raw %}
```

The "Change Settings" Menu will allow you change the way the data
is displayed on your screen.

<A> Box Size: refers to the number of points a stock or commodity
has to move for a box to be drawn on the chart.

<B> Boxes per Reversal: refers to the number of boxes needed to begin
a new column of boxes going in the opposite direction.

<C> Box Heights in Pixels: refers to the physical size of the box on
the graphics screen.  The smaller the box, the more data you can display.

<D> Box Width in Pixels: refers to the physical size of the box on
the graphics screen.  Experiment until you find the size you like. 

```
{% endraw %}

## APEX5-7.DOC

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

## FILE2046.TXT

{% raw %}
```
Disk No: 2046                                                           
Disk Title: APEX Point & Figure disk 1 of 2 (2047)                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: APEX Point & Figure                                      
Author Version: 9/89                                                    
Author Registration: None.                                              
Special Requirements: 512K RAM, DOS 3.0 or higher, and a modem.         
                                                                        
Stocks, Bonds, Mutual Funds, Futures, Commodities.  Does anyone         
understand them?  APEX does.  They have put together five programs to   
assist any investor in examining, analyzing, comparing, plotting or     
charting their stocks, bonds, funds, and more.                          
                                                                        
This program is called APEX POINT & FIGURE.  Those who invest in the    
stock market will find it useful.                                       
                                                                        
If you are not an investor then this is not the program for you. Why?   
APEX POINT & FIGURE is designed for the investor, not the curious.  To  
use this program you must have a modem and a credit card. The modem     
provides you with access to Warner Communications where you can download
market information.  The credit card is how you pay for the service,    
since you are charged for each quotation downloaded.                    
                                                                        
There is no registration fee, and no start-up fee, but there is a per   
quote fee.  And, when you realize that you cannot enter your own data   
but must download it, then you may realize that you do not need this    
program.  For those active in the market, this program provides a quick 
means of data access with the added feature of plotting out the         
information easily.  For such investors, APEX POINT & FIGURE is a       
valuable program.                                                       
                                                                        
The program is easy to use, easy to set up, and useful.  The manual     
explains how to use the program but does not train the novice in        
learning the "markets game".  But, the price is nominal, as you are not 
billed for anything until you download a market quote.  Try it out and  
see what you think.                                                     
                                                                        
                                                                        
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
║              <<<<  Disk #2046  APEX POINT AND FIGURE  >>>>              ║
║                        (disk 1 of 2, 2047 also)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: APEX         (press enter)                      ║
║                                                                         ║
║ To print documentation, insert disk 2 and type: COPY MANUAL.DOC PRN     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2046

     Volume in drive A has no label
     Directory of A:\

    A5HELP             665  11-28-88  10:24a
    A5KOLORS           962   2-26-89   8:59a
    A5MENUS            625   9-08-88   8:35a
    A5SETS              56   2-26-89   8:59a
    APEXDATA            19  11-22-88  12:40p
    COLORS              21  12-05-88  12:17p
    README             845   7-31-89  12:59p
    TEMPWKS           1280   8-24-88   4:10p
    WCSETS             108   2-26-89   8:57a
    APEX     BAT         8   8-04-88   1:07p
    AUTOEXEC BAT         6  12-21-88  11:12a
    APEX5-1  DOC      1280   8-31-88  12:44p
    APEX5-2  DOC       765   9-08-88  12:34p
    APEX5-3  DOC      1024   8-03-88  10:14a
    APEX5-4  DOC       896   8-03-88  10:29a
    APEX5-5  DOC      1128   9-08-88  10:16a
    APEX5-6  DOC       658   9-08-88  10:21a
    APEX5-7  DOC      1024   8-03-88  11:15a
    ACCESS2  EXE     39746   8-20-89   9:56a
    BRUN30   EXE     70680   4-07-87  10:48a
    N2ACCESS EXE     48577   3-05-89  11:04a
    N2APEX   EXE     13201   3-05-89  11:05a
    N2EXPORT EXE     30946   5-12-89   7:28a
    N2PLOT5  EXE     55150   3-05-89  11:09a
    FILE2046 TXT      3257   1-16-90  10:59a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-16-90   9:01a
           27 file(s)     273582 bytes
                           33792 bytes free
