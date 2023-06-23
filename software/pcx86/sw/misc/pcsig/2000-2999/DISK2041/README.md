---
layout: page
title: "PC-SIG Diskette Library (Disk #2041)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2041/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2041"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "APEX FUTURES & COMMODITIES DSK 2OF2 2040"

    APEX F/C will let you analyze futures/commodities with open-
    high-low-close bar charts and volume and open interest.  Futures
    files will keep the open, high, low, close, volume, and open
    interest values for each day in the data.  APEX lets you create
    strategies using single or double moving averages, based on buying long,
    selling short, or both.  A valuable feature is the charting of
    optimization trials, allowing you to see the most effective choices for
    short and long term moving averages.  For those active in the market,
    APEX FUTURES & COMMODITIES provides a means of data access with the
    added feature of plotting out the information easily.
    
    There is no registration fee, no start-up fee, but there is a per quote
    fee.  You can enter your own data or download it by modem from Warner
    Computer Systems, Inc.  There is a sample database on disk two of this
    program, allowing some initial experimentation.
    
    The program is easy to use, easy to set up, and useful.  The manual
    explains how to use the program but does not train the novice in
    learning the "markets game."
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2041.TXT

{% raw %}
```
Disk No: 2041                                                           
Disk Title: APEX Futures & Commodities dsk 2of2 2040                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: APEX Futures & Commodities                               
Author Version: 9/89                                                    
Author Registration: None.                                              
Special Requirements: 512K RAM, DOS 3.0 or higher, and a modem.         
                                                                        
Stocks, Bonds, Mutual Funds, Futures, Commodities.  Does anyone         
understand them?  APEX does.  APEX FUTURES & COMMODITIES is one of five 
programs they have put together to assist any investor in examining,    
analyzing, comparing, plotting or charting their stocks, bonds, funds,  
and more.                                                               
                                                                        
Those who invest in this market will find APEX FUTURES & COMMODITIES a  
useful program.                                                         
                                                                        
On the down side, if you do not know what the futures and commodities   
market is or are not an investor then this is not the program for you.  
Why?  APEX FUTURES & COMMODITIES is designed for the investor, not the  
curious.  To use this program you must have a modem and a credit card.  
The modem provides you with access to Warner Communications where you   
can download market information.  The credit card is how you pay for the
service, since you are charged for each quotation downloaded.           
                                                                        
There is no registration fee, and no start-up fee, but there is a per   
quote fee.  And, when you realize that you cannot enter your own data   
but must download it, then you may realize that you do not need this    
program.  For those active in the market, this program provides a quick 
means of data access with the added feature of plotting out the         
information easily.  For such investors, APEX FUTURES & COMMODITIES is a
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
║           <<<<  Disk #2041  APEX FUTURES AND COMMODITIES  >>>>          ║
║                        (disk 2 of 2, 2040 also)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, insert disk 1 and type: APEX         (press enter)    ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
The APEX Series

The FIRST thing you should do is open an account with Warner
Computer Systems, Inc.  If you tell them that you are an APEX
user, they will waive the $48 sign-up fee.  After that, all you will
pay for is the data that you download.  If you do not download
any data, there is no fee.

Please feel free to make copies of this software to distribute
to your friends.


DISCLAIMER

N-Squared Computing and/or G.Morris Corporation shall have no
liability or responsibility to Purchaser or any other person or
entity with respect to any liability or loss of anticipatory
profits caused, or alleged to be caused, directly or indirectly,
by use or operation of this software.  Neither N-Squared
Computing and/or G.Morris Corporation can be held responsible for
any losses incurred while using this software, nor do we expect
to share in any profits.


                          Introduction


     The APEX Series of graphical analysis software for IBM and
compatible computers is completely menu-driven.  Numerous help
screens are only one key away.

     If you are familiar with using menu-driven software and
familiar with the basic DOS commands, you can probably set this
documentation aside.  Reviewing the Getting Started section still
might be a good idea, though.

     If you are not that familiar with menu-driven software and
DOS, please follow the instructions in the Getting Started
section of this manual.


Hardware Requirements

     IBM or Compatible computer
     512K RAM
     One Floppy Drive or a Hard Disk
     DOS 3.0 or higher
     Modem 300/1200 baud (Hayes compatible)
     Graphics card and video monitor
          CGA, EGA, VGA, or Hercules Mono

Phone Numbers

     Warner Computer Systems
          (800) 626-4634

     Telenet Information
          (800) 336-0437

The APEX Series

     Currently there are five APEX programs covering almost all
areas of financial data analysis.  Each program works with its
own data and should not be combined with other APEX programs.

     With each APEX Program you will receive a "Ticker Diskette"
which can be accessed through the Access portion of the program.
Also, on the Ticker Diskette, is a Sample Database representing
the type of data to be used with the APEX program you have
received.  This way you can explore the powerful features of the
APEX program immediately.  If you received your APEX program on a
3 1/2" diskette; the APEX program, the Ticker information, and
the Sample Database will all be on the same diskette.


The N-Squared APEX Program Menu

     Each APEX program will have an identical Program Menu with
the exception of an identifying description at the top showing
which APEX program is in use.  The three main subprograms can be
selected from the APEX Program Menu by selecting:

     A   for Access

     P   for Plot

     E or X   for EXport

     Additionally, the screen colors can also be changed from
this menu by first selecting C and following the prompts.  The
Date and Time can also be changed from this menu by selecting D
or T, respectively.


APEX Financial/Market Data

     APEX F/M will allow you complete analysis of market
indexes/averages, foreign exchange rates, interest rates,
industry groups, and market breadth data.  Warner Computer
currently has over 330 items that can be downloaded and then
updated daily.  Most of the data goes back at least 10 years.

     Data is stored in files that can contain up to nine items.
There is no restriction as to what can go in any file, just that
there cannot be more than nine items in any one file.  You may
have as many files as necessary.


APEX Stocks/Options

     APEX S/O will let you analyze any stocks or options using
the popular high-low-close bar format with volume displayed below
the price.  If you have stock files, the data will be kept in
individual files with high, low, close, and volume values for
each day.  If you have option files, open interest will also be
stored in the file.


APEX Futures/Commodities

     APEX F/C will let you analyze futures/commodities with open-
high-low-close bar charts and volume and open interest.  Futures
files will keep the open, high, low, close, volume, and open
interest values for each day in the data file.


APEX Mutual Funds

     APEX MF will allow plotting and comparing any mutual funds.
Mutual Fund files can contain up to nine different funds in each
file.  The file name can be anything you wish, but should
represent what type of funds are in the file, such as the name of
the fund family.  Warner Computer currently has about 1600 Mutual
Funds using standard ticker symbols.


APEX Point & Figure

     APEX P&F will let you do complete point & figure analysis of
any stocks.  Stock files will contain the high, low, close, and
volume for each day.

                            IMPORTANT

     To view the latest changes/information about your APEX
program, see the README file on your APEX program diskette.  To
print the contents of this file, at the DOS prompt, type:  COPY
README PRN <Enter>.  Make sure that your printer is on.  If you
just want to view the contents on your screen, type:  TYPE README
<Enter>.  To stop and start the scrolling, use Ctrl 'S'.


                         Getting Started

Copying Your APEX Disk

     Your APEX master disk is NOT copy protected.

     Please:  copy your APEX master disk NOW and put it away for
safe-keeping.  Disks can be easily destroyed.

     If the following instructions do not make sense to you,
please review the format, diskcopy, and copy commands in your DOS
book.  There are many good books on the subject available at most
bookstores.

     To A Floppy Drive

     If you have a "floppy only" system, you should make an
identical copy of the APEX master disk by using the "Diskcopy"
command on your DOS diskette.  This is done by inserting your DOS
disk into a drive and typing: DISKCOPY A: B: <Enter>.  This will
start the diskcopy process and give you instructions on the
screen referring to the drive configuration that you have.
In this particular case, with two floppy drives, you would insert
the APEX master in drive A and the new blank diskette in drive B.
With only one floppy drive, just follow the prompts on the
screen.

     NOTE:  Because of the size of the APEX program, you
cannot install DOS onto the working copy unless your diskettes are
greater than 360K.  Therefore you must always load DOS first
and then run the APEX program by typing APEX <Enter>.

     To A Hard Disk

     You may copy APEX to its own subdirectory on your hard disk.
To do this, go to the C>, put your APEX master disk in drive A:
and type:

     C>md\apexfm         Creates a new APEX
                         subdirectory

     C>cd\apexfm         Change to that new
                         subdirectory

     C>copy a: *.*       Copies all files to new
                         subdirectory

     The name of the subdirectory should reflect which APEX
program(s) you have.  In the above example "apexfm" represented
the APEX Financial/Market Data program.  APEX will now be in its
own subdirectory.  You can go to that subdirectory at any time by
typing:

     C>cd\apexfm


Starting the APEX program

     Once you have loaded DOS, insert the APEX working copy into
drive A or change to the APEX(FM) subdirectory if using a hard
disk and then type:

     apex <Enter>

Database diskettes/subdirectories

     All data used with the APEX program should be kept on
separate disks or subdirectories from the APEX program.  All you
will need to start with is a formatted diskette if you have a
floppy system or you can create a subdirectory if you have a hard
disk.

     If you have a hard disk, it is recommended that your data
subdirectories be subdirectories of the APEX program
subdirectory.  You can make data subdirectories by first typing:

     C>cd\apexfm         Changes to the APEX
                         subdirectory

     C>md\stocks         Creates a subdirectory called
                         stocks.

     The name of your data subdirectories can be anything you desire
as long as they are DOS compatible names.  It is also
recommended that you think of each subdirectory like a separate
diskette.  If you have a diskette for stocks, then you have a
subdirectory for stocks, if you have a diskette for mutual funds,
then you have a subdirectory for mutual funds.  These are just
suggestions for basic "bookkeeping" for your various data.  Warner
password

     Before you can download any data from Warner Computer, you
will need to call them at 1-800-626-4634, tell them which APEX
program(s) you have and they will issue you an account number and
password which can be inserted into the Access portion of the
APEX program (discussed later).


APEX Help Screens and Prompts

     Each APEX program has its own built-in Help Screens.  You
can tell if a Help Screen is available by the prompts information
displayed at the bottom of the screen.  It might look like this:

     Press Key (1-8) or <Esc> for Menu or <?> for Help

     By pushing "?," you will see a detailed explanation of all
the features and options available to you on that screen.
Pushing the spacebar will return you to the screen you were on
when you pushed the "?."

     You should be able to navigate around the program just by
reading the screen prompts.  Almost every screen is displaying
some type of information that tells you what your choices are.
If you reach a screen and you are not sure what to do next, be
sure to scan the screen thoroughly for some type of prompting
information.  If nothing is displayed, select <Esc>.


Quick Start

     The following is a brief summary of the steps required to
become fully operational with the APEX software.

1.  Make backup copies of all APEX diskettes.

2.  Install APEX program on hard disk (if applicable).

3.  Call Warner at (800) 626-4634 to open an account.

4.  Start APEX program by typing 'apex <Enter>' at prompt.

5.  Select Access for database maintenance.

6.  Select "*" to view the Ticker file (if applicable).

7.  Create file(s) for the Tickers you want to download.

8.  Select '1' to download data from Warner.

9.  Enter appropriate information in program settings.

10. Follow prompts to download data from Warner.

11. After downloading data, return to APEX Program Menu.

12. Select Plot to graphically analyze the new data.

13. Use Trading Strategies to see the magic of moving averages.

14. Enjoy limitless onscreen analysis in beautiful color.


                             Access

Description

     The Access program will let you download, update, and manage
your data files.  This is accomplished through a menu-driven
process that will enable you to do any and all database
management operations quickly and easily.  To enter the Access
program, merely type "A" from the APEX Program menu.

     The Access Program Menu has nine items for numerous database
management functions.  There are three primary areas of database
management; file management, individual records management, and
downloading of data from Warner Computer.

Access Program Menu

     <1> Access/Download Data
     <2> Edit/Update Files
     <3> Create New Files
     <4> Delete Data Files
     <5> Modify Files OR Change File Name
     <6> Transfer Files
     <7> Truncate Files
     <8> Sort Data Files
     <9> Create a Database
     <*> View Ticker File


     NOTE:  The discussion of each item on this menu will not be
in the order of the items on the menu.  The order of discussion
is more representative of the order in which you will first use
the features being discussed.

Create a Database (9)

     The FIRST order of business, if you are just starting to use
the program, is to create a database of TICKERS for downloading
from Warner Computer.  This is accomplished by first selecting
item "(9) Create a Database" from the Access Program Menu.  You
will be asked to provide the drive letter and path to your
database location.  If you are using a floppy drive only system,
put a formatted diskette into drive B and type the drive letter
(B) followed by <Enter>.  If you are using a hard disk system,
select the drive (normally C:) and then type the pathname for the
database location.  If you have not created a subdirectory, one
will be created for you.

Create New Files (3)

     Once a database has been created you will need to create the
data files containing the TICKERS you wish to download.  This is
easily accomplished by selecting item "(3) Create New Files" from
the Access Program Menu.  From there you will be prompted to
again give the database location and, depending upon the APEX
program(s) you have, a request to input the file name for the data.

File Names

     Financial/Market Data

     If you are using APEX Financial/Market Data or APEX Mutual
Funds, the File Name can be any DOS-compatible name you wish.
The File Name should reflect the type of data you are going to
put into that file.  Up to nine different TICKERS can be kept in
any single file.  For example, if you have the APEX
Financial/Market Data program and wish to follow foreign exchange
rates, the File Name might be called EXCHG#1.  Subsequent files
of foreign exchange rates could be called EXCHG#2, EXCHG#3, etc.,
depending upon how many foreign exchange rate TICKERS you are
going to keep.

     Mutual Funds

     If you are using APEX Mutual Funds, the File Name could be
the name of the fund family (FIDELITY) or some form of
alphabetical notation (A-EGROUP).

     Once you decide upon a file name, you will then be polled by
the program to input the TICKER symbols for the data you wish to
follow.

     Stocks/Options
     Futures/Commodities
     Point & Figure

     If you are using APEX Stocks/Options, APEX
Futures/Commodities, or APEX Point & Figure, the File Name IS the
TICKER symbol.  All you will need to do is follow the prompts and
select the correct option, depending upon the type of data you
want.

     Check with Warner Computer for any tickers that are not on
the ticker files or any tickers that you do not know.

Database Limitations

     Floppy disks can contain up to 55 data files.  Hard disk
subdirectories can contain up to 255 data files.  Each individual
data file can contain up to 1600 records of data.  Of course, you
can overcome these limitations by using additional diskettes or
by creating additional subdirectories.

View Ticker File (*)

     The ticker symbols can be viewed by selecting (*) from the
Access Program Menu.  When you select (*), you will be asked to
input the drive letter and pathname (hard disk) for your Ticker
Diskette.  If you wish, you can copy the ticker files onto your
hard disk along with the program files.  The ticker file for
Futures/Commodities only shows the ticker and not the expiration
month and year.  For example, Comex Gold is shown only as GC, but
to download an actual Gold contract, you would need to follow the
ticker with the month and year, such as:  GC1288.  The exception to
the futures/commodities tickers, is the cash values, the
complete ticker is included in the ticker file (GCCASH).
Delete Data Files (4)

     This selection "(4) Delete Data Files" will ask for the
database location, then it will display the list of files on that
database and ask you to select the one for deletion.  You will be
given a couple of chances to change your mind.

     NOTE:  This is the ONLY method of deleting data files you
should ever use.  If you try to delete data files using any DOS
commands, you will cause a problem that cannot be recovered.

Modify Files OR Change File Name (5)

     If you have APEX Financial/Market Data or APEX Mutual Funds,
selection "(5) Modify Files" will let you change the File Name,
change the TICKER symbol, or delete a TICKER symbol within a
File.

     If you have one or more of the other three APEX programs,
selection "(5) Change File Name" will only let you change the
File Name, which IS the TICKER symbol.

Transfer Files (6)

     Selection "(6) Transfer Files" will let you move individual
files from floppy disk to floppy disk or to a hard disk.

Truncate Files (7)

     Selection "(7) Truncate Files" will let you remove old data
from any or all data files.  All data files are limited to 1600
records of data.  When your files begin to reach 1600 days of
data you will need to truncate them.

Sort Data Files (8)

     Selection "(8) Sort Data Files" will rearrange the files on
your database in alphabetical order.

Access/Download Data (1)

     This selection will let you download data into new files
that you have created or update files that already exist by using
your modem and an account with Warner Computer Systems.  If you
have not yet opened an account with Warner, you should do so
immediately by calling 1-800-626-4634.

     The first screen you will see after selecting "(1)
Access/Download Data" will be the Program Settings menu where you
enter various information about your system and Warner accounts.

     The entries should be self-explanatory.  Selection "<H> Use
Telenet (Y/N):" will alternate the highlighted area between
either selection <A> or <B>.  Normally, selection <A> should be
highlighted.  Selection "<I> Wait Limit" tells the software when
to disconnect the modem in the event of line problems (recommend 45).
If you are unsuccessful at connecting to Warner, try a
different Comm port setting.

     As with all other settings menus, selecting "S" to save will
write the changes to disk and that is the way they will stay
until you change them.  Normally, the settings on this screen
will not change after they are initially set.

     If you are downloading new data, you will be asked whether
you want daily or weekly data.  Then you will be asked to input
the date that you want the data to begin with (YYMMDD).  Finally,
you will be asked what date to end the downloading.  Do not ask
for data on the current date unless it is after about 8:00pm
Eastern time.  Check with Warner for availability times.

Logon Sequence

     When using Telenet to call Warner, you will see something
very similar to the following on your screen while the APEX
program logs onto Warner's system.

ATV1Q0E1DXXX-XXXX
     The XXX-XXXX is your Telenet number.

CONNECT

TELENET
XXX 2B
     The XXX will be your area code.

TERMINAL=

@C20168
     This will be 20167 if using 300 baud.

201 68 CONNECTED

warner computer systems
18:12 OCT 19, '87 user#F  line#98
logon please: 1SQUARE, #S0XXXX, XXXXXX
     This information will vary considerably.

T 37,0

On at 18:12 OCT 19, '87

     From this point on the sequence depends upon the APEX
program you are using.  Please note that you may not see
everything exactly as shown above, but it will be very similar.

IMPORTANT:  Monitor the logon sequence to ensure it is operating
properly.  There are many things that can interrupt the sequence,
such as:  call forwarding, thunderstorms, line problems, etc.  If
you suspect anything wrong during the logon sequence, just push
"ESC" and the process will be aborted.  If you see a message that
says:  'A603 no such program' or 'who?,' you should also abort
the logon because there has been a problem.  Normally, all you
will need to do is just try again.

     If you are dialing Warner direct, the first part of the
logon sequence will not appear.  After the phone number has been
dialed, you will see the warner computer name next.

Edit/Update Files (2)

     This is the section of database management that lets you
work on individual records (days) of data.  Once you have
answered the database location prompt you will see another menu
called the File Edit/Update Menu.  At the top of the screen you
will see the name of the file you have selected, the number of
records in the file, the starting date of the file, and the
ending date of the file.

Edit/Update Menu

     <1> List Records
     <2> Enter Records
     <3> Adjust Records
     <4> Change Records
     <5> Delete Records
     <6> Print Records
     <7> Sort Records
     <8> Search Records
     <9> WRITE to Disk


     List Records (1)

     You can view all of your data by listing it to the screen.
You will be asked to input a starting record number or starting
date to begin the listing.  The scrolling of data can be stopped
and started with the spacebar.  Once you have stopped the listing
you can return to the Edit/Update Menu by pushing <Esc>.

     Enter Records (2)

     The ability to enter data manually has been provided.  The
date must be entered in the YYMMDD format.  The values of the
last record in the file are displayed for reference.  In case of
an erroneous entry, continue entering the remainder of the data
for that record, then respond "N" for NO to the OK? prompt and
enter the correct data by following the prompts.

     Adjust Records (3)

     This selection will let you adjust any data for splits,
dividends, distributions, etc.  You will be asked to input the
starting record and ending record for the adjustment period along
with the amount of the adjustment.  For example, to adjust a
stock file for a 2 for 1 split you could enter a 2 for the
adjustment factor.  Then you would divide all of the price data
by 2 and multiply the volume by 2.  Since the changes are not
written to disk until you select that option, experimentation
with this feature will help in understanding all of its
capabilities.  Basically, you can perform any arithmetical
computation to any or all of the data over any time period.

     Change Records (4)

     This will let to make changes to any record in your data
file.  Most errors in data become quite obvious when the data is
displayed graphically.

     Delete Records (5)

     With this selection, you can delete a single data record,
any number of records from the beginning of the file, or any
number records from the end of the data file.

     Print Records (6)

     This will print the data file on your printer using the
instructions that you give it.  If it says it requires more than
80 columns, you will need to set your printer to condensed mode,
unless you have a wide carriage printer.

     Sort Records (7)

     This will ensure that all the data records are in
chronological order.

     Search Records (8)

     This option allows you to locate any data value for any
component of the data file.  It will initially display the
minimum and maximum values for each TICKER or data component in
the file.  You will be able to select exact values, greater than,
and less than.  You can also input a tolerance if not searching
for exact values.

                        *** IMPORTANT ***

     With the exception of List, Print, and Search, the results
of any of these operations are only stored in the computer's
memory.  None of the operations are stored permanently on your
database disk (subdirectory) until selection "(9) WRITE to Disk"
has been chosen.  Therefore, you can always experiment with the
various features as long as you do not select "(9) WRITE to
Disk."  On the other hand, if you wish changes to be made, you
MUST select "(9) WRITE to Disk" or all changes will be lost when
you <Esc> from the Edit/Update Menu.

     Note that as each option is selected and actually used, a flag
flashes to remind you of the operations used and that the
changes have not yet been written to disk.


                              Plot

     The APEX Plot program consists of two separate but related
modules; the graphical analysis module and the analyze trading
strategies module.  The graphical analysis module will be covered
first, then a complete description of the strategies module will
be discussed.

                       Graphical Analysis

Description

     The Plot program will let you display any of your data
graphically and allow you to do further analysis once the data is on
the screen.  The APEX Plot Program is available by selecting P
from the APEX Program Menu.

     The first thing you will be asked for is the location (path)
of your database.  Type the drive letter and path (hard disk) and
you will then see a listing of the files in that database.  If
you are using APEX Financial/Market Data or APEX Mutual Funds,
you will be asked to select one or two files for analysis.  If
you want only one file, enter a zero for the number of the second
file.  If you have not opened an account with Warner and
downloaded any data, use the sample database that is on the
Ticker Diskette.

     You will next be asked to select the number of records to be
plotted.  Once you select the number of records for plotting, the
prompt will automatically show the starting record for the data
you have selected.  If you want the most recent data, just push
<Enter> and the most recent data will be loaded for the number of
records you have selected.  If you wish to look at earlier data,
you must type an earlier record number; typing 1 will load the
first part of the data file.

     If you are using APEX Financial/Market Data or APEX Mutual
Funds, after the files are loaded into the computer's memory, you
will be asked to select two TICKERS for analysis.  Select any two
from the list of TICKERS displayed on the screen, by typing the
number(s) that precede the TICKER.

     Next you will be shown the APEX Plot Menu.

     APEX Financial/Market Data
     APEX Mutual Funds

     <1> On-Screen Graphic Analysis
     <2> Analyze Trading Strategies
     <3> List / Print Data
     <4> List / Print Statistics
     <5> Change Graphics Mode
     <6> Change Graphics Colors
     <7> Select New Tickers
     <8> Select New File(s)

     If you are using APEX Stocks/Options or APEX Futures/Commodities
you will not have item "<7> Select New
Tickers" because each TICKER is an individual file.  The menu for
these two programs is as follows:

     APEX Stocks/Options
     APEX Futures/Commodities

     <1> On-Screen Graphic Analysis
     <2> Analyze Trading Strategies
     <3> List / Print Data
     <4> List / Print Statistics
     <5> Change Graphics Mode
     <6> Change Graphics Colors
     <7> Select New File

     If you are using APEX Point & Figure, the Plot program menu
will be as follows:

     APEX Point & Figure

     <1> Plot / Analyze Data
     <2> List / Print Data
     <3> List / Print P&F Data
     <4> Select a New Chart Type
     <5> Select a New File
     <6> Select Graphics Mode
     <7> Select Graphics Colors


On-Screen Graphic Analysis

     When "(1) On-Screen Graphic Analysis" (or Plot/Analyze Data
for Point & Figure) is selected you will be shown the plot
settings menu which determines how the data is going to be
plotted.  The Change Settings menus are different for each APEX
program and are discussed individually below.

APEX Financial/Market Data
APEX Mutual Funds

     If you have APEX Financial/Market Data or APEX Mutual Funds,
the Change Settings menu will look like this:

     <A> Charts: (1) or (2) Plots       = 2
     <B> Plot Overlap: (0 to 100)%      = 25
     <C> Plot 2: Line (1) or Bar (2)    = 1

     Selection A will let you display the first TICKER loaded or
both TICKERS.  Selection B will determine the amount (%) of
overlap of the two graphs if you have selected two plots.  If you
select A equal to 1, selection B will automatically change to
100.  You can experiment with this to get the display you like.
Selection C will let you display plot 2 as a line or bar
(histogram) plot.

APEX Stocks/Options
APEX Futures/Commodities

     If you have APEX Stocks/Options or APEX Futures/Commodities,
the Change Settings menu will look like this:

     <A> Screen: Full(1) or Split(2)         = 2
     <B> Plot 1: (25-100)% Full Screen       = 60
     <C> Plot 1: Line(1) or Bar(2)           = 2
     <D> Plot 2: Line(1) or Bar(2)           = 2
     <E> Scale 1: Linear(0), Log(1)          = 0
     <F> Open Interest Plot: Off(0), On(1)   = 1

     Selection A will let you display only the price data (Full)
or the price data with the Volume data (Split).  Selection B will
determine the relative size of the two plots, if A is equal to 2.  When
you enter a percentage between 25 and 100, plot 2 will fill
up the remainder of the screen.  If selection A is 1, selection B
will automatically be set to 100.

     Selection C will determine whether the price data is
displayed as a bar (high-low-close) chart or as just a line plot of
the close price.

     Selection D will display the volume as a
line plot or as a more typical volume histogram.

     Selection E will let you display the price data with a
linear price scale or a log price scale.

     Selection F will determine whether Open Interest is
overlayed over the volume plot.  If Open Interest is not in the
database (common stocks), this selection has no affect on the
plot.

APEX Point & Figure

     If you have APEX Point & Figure the Change Settings menu
will look like this:

     <A> Box Size: (0.25,0.5,1,2,3,...)      = 1
     <B> Boxes per Reversal: (1,2,3,...)     = 3
     <C> Box Height in Pixels: (3 to 10)     = 5
     <D> Box Width in Pixels: (3 to 10)      = 5

     The Box size refers to the number of points a stock must
move to have a box displayed on the screen.  The number of boxes
per reversal refers to when the display will change direction
based upon stock movement.  Many good books are available on
Point & Figure analysis.  It is not the intent or purpose of this
software to explain methods of analysis.  However, a box size of
one and a reversal of 3 boxes is usually considered a standard.

     The Box Height and Width refer to the physical size of the
boxes on your screen.  You can experiment with them until you
find the size you like.

Saving Changes

     Once you have made changes to the Change Settings menu(s),
you can write them to disk by selecting "S" for Save and this is
the way the plots will always be displayed until you change them.
If you make any changes to the Change Settings menu without
saving them, they will stay in effect until you exit the program
or you change them again.  If you do not wish to make any changes
to the Change Settings menu, just select <Enter> and the data
will be plotted according to the Graphics Modes and Colors that
you have selected from the Plot Menu (discussed later in this
section).

The Graphics Screen(s)

     Once the data is displayed on the screen you have a large
number of analysis features that are available to you.  These can
all be reviewed by continual pushing of the "?" key and reading
the features list at the bottom of the screen.

Onscreen Analysis Features

<M> for Menu.  Returns you to the APEX Plot Menu.

<I> for Information.

     This information will depend upon the data you have plotted, but
is normally the high-low-close for the data plotted, the
mean, standard deviation, and file name(s).

<A> for Arithmetic moving average.  Same as a simple average.

     Once you select A, you will be asked whether it is for plot
1 or 2 (if two plots are on the screen), then you will be able to
input any period for the average.  Lastly, you will be asked if
you wish to shift the average to the left and by how many
periods.  If you do not want to shift the average, just push
<Enter>.

<S> for Smooth.  Same as an exponential moving average.

     Smooth works the same as Average except that you cannot
shift the smooth to the left.

<%> for Trading Bands.  Percentage bands.

     Once you have an Average or a Smooth on the screen you can
put percentage trading bands around it by selecting %, then you
will be asked to input the percentage.  The bands can only be
used with the last Average/Smooth that was put on the screen.

<P> for Print.  Prints the screen on your dot matrix printer.

     Works with most IBM/Epson compatible printers.

<Ctrl><P> for alternate dot matrix printout.

<Ctrl><L>, then 1, 2, or 3 for small, medium, or large laser
printer support.  Works with Laserjet compatibles.

<N> for Next.  Displays the next set of onscreen options.
     Continue to push "N" to see all of the options.

<?> for Help.  Displays the meaning of each onscreen feature.

     Continue to push "?" to see all of the features.

<D> for Date.  Puts meaningful date lines across the screen.

     The date lines have been preset depending upon the amount of
data you have plotted.  Use the Cursor Read feature to identify
exact dates.

<*> for Title.  Allows you to input a title of your choice.

     You will be prompted to enter a title that will be displayed
at the top of the graph.  If you try to enter a title that is too
long you must start over.

<^> for Form Feed.  Form feeds your printer.

<+> for Line Feed.  Line feeds your printer.

<C> for Cursor.  Displays a full-function vertical cursor.

     The cursor can be moved a period at a time with the left and
right arrow keys or it can be moved 10 periods at a time with the
Tab and Shift Tab key.

     <R> for Read.

          Displays information about the data under the cursor.
This information will normally be the date, the price data
values, volume, and open interest.  If the Open Interest is "off"
in the Plot Change Settings menu, the value of the last
Average/Smooth put on the screen will be displayed.

     <L> for Lines.

          Puts you into the onscreen line drawing mode.
Trendlines can be drawn anywhere on the graphics screen.
Trendlines can be drawn by first moving the small tick mark on
the cursor to the left end of the line you wish to draw.  This
tick can be moved in any direction with the four arrow keys.
Once you have the tick where you want it, push the "M" key to
Mark that point, then move the tick (arrow keys) to the second
point and push the "M" key again.  A line will be drawn from the
left point through the second point and to the right margin of
the plot.  Any number of trendlines can be drawn on any plot.

          <E> for Parallel Lines.

               Draw parallel line(s) to last trendline.  Once you
have any trendline on the screen, a parallel line can be drawn by
placing the small ticker at the point you want the line to begin
and then pushing the "E" key.  Any number of parallel lines can
be drawn this way.  Think of the "E" as Equal.  "P" could not be
used for parallel because "P" is for Print.

     If you have APEX Point & Figure, you will not have many of the
above mentioned features because they are not relevant to
point & figure analysis.

     APEX Point & Figure has two unique onscreen features:  (/)
for Upward trendlines and (\) for downward trendlines.  Once
these trendlines are invoked, you may move them anywhere on the
graphics screen by using the four arrow keys on your keyboard.
They may be increased in length by using the '+' key and
decreased in length by the '-' key.  When you want the trendlines
to remain on the screen, use the 'F' key to 'Fix' them to the
graphics screen.  Pushing "ESC" will take you out of the
trendline mode.

Change Graphics Mode

     This feature will let you keep your APEX software current
with the video capabilities of your computer system, both now and
in the future.  Of course, if you select a mode that is not available
with your system, the results are unpredictable.  If
you are not sure what graphics capability you have, select any
mode, return to the Plot menu and select number one to plot the
data.  Select <Enter> at the Change Settings menu and you should
see the plot appear on your screen.  If the screen goes blank,
select "M" for menu and try the process over again by selecting a
different graphics mode.  The most common mode is "C" for normal
CGA graphics.  If you have a monochrome screen, the mode
"I"(Hercules) is probably the correct mode.

Change Graphics Colors

     If you have a color video system and have selected a color
graphics mode, you can select a wide variety of color
combinations for your graphics display.  The overlay colors refer
to the numerous moving averages and exponential smoothings that
can be on a graphics plot.  Once you have the colors you like,
you have the option to Save them to disk.  They can always be
changed at any time.

List / Print Data

     This will let you view on the screen or print on your
printer the data that you have loaded.  If scrolling on the
screen, the spacebar will stop and start the scrolling.

List / Print Statistics

     This feature will display on your screen or print on your
printer various statistics about the data you have loaded.  The
data statistics are:  Number of records, Maximum value, Minimum
value, Mean, and Sigma.

Select New File(s)

     This will let you load new data files for further analysis.
If you have APEX Financial/Market Data or APEX Mutual Funds, you
can select one or two files.  The other APEX programs will let
you choose only one file at a time.

Select New Tickers

     This menu selection is only available on APEX
Financial/Market Data and APEX Mutual Funds.  It will display the
TICKERS in the data file(s) that you have already loaded and then
let you choose two more TICKERS to analyze using the same
plotting periods as before.


                   Analyze Trading Strategies

General Concepts and Definitions

     A thorough discussion of trading systems and methods will
not be included in this manual.  There are numerous good books on
the subject that may be referred to for more information.

     A trading system is a set of rules that are used to generate
signals.  Most trading systems have more than one parameter.
Parameters are values that can be assigned in a system to affect the
timing of trading signals.  Each parameter can usually be
incrementally tested by itself or in combination with other
parameters.  A problem exists with trading systems that have too
many parameters; that is the ability or difficulty in testing
more than a small selection of the parameters.  If each parameter
can have 10 values, there would be 1000 possible combinations if
there were just 3 parameters.  Six parameters with only 10 values
would yield One Million combinations.

     Therefore a system that includes the important parameters,
yet keeps the testing relatively simple, is likely to produce
results that are more than reasonable.  The APEX system is
designed to be used as multiple parameter system with only two
parameters that can be incrementally tested.  These two
parameters are the Price and a Single Moving Average or Two
Moving Averages.  The other parameters that can be used with
either of these techniques are a time-delay (duration) and the
execution price (today or tomorrow).

     Optimization refers to the process of finding the best
performing combination of parameters for a given market.  The
underlying premise of optimization is that parameter combinations
that worked best in the past have a greater probability of good
performance in the future.

Program Operation

     Selection [2] from the Plot Program Menu will take you to a
new menu called: "Analyze Trading Strategies."  Immediately below
the title you will see the name of the ticker you have loaded for
analysis.  Note the <?> at the bottom of the screen showing you
that a help screen is available for this menu.


<1> Select Trading Strategy Parameters

<2> Display Single Moving Average Trades

<3> Display Double Moving Average Trades

<4> Calculate Optimum Single Moving Average Period

<5> Calculate Optimum Double Moving Average Periods

<6> Display Optimization Results


     The following discussion will cover each item in this menu.
Included in the operational discussion will be the theory and
logic behind the optimization of moving averages.  More
information can also be found at the end of this section in the
Summary.

Select Trading Strategy Parameters

     Upon selecting <1> you will be shown a parameter setting
screen from which you can change up to seven different trading
parameters.  Note that there is also a help screen available.
The "Select Trading Strategy Parameters" screen looks like this:

PARAMETER                                       SETTING
<A> Buy Long and Sell to Close: (0)No or (1)Yes   = 1
<B> Sell Short and Buy to Close: (0)No or (1)Yes  = 1
<C> Crossover Duration:  (>0 Periods)             = 1
<D> Start Record:                                 = 1
<E> End Record:                                   = 240
<F> Trade at Close: (0)Today or (1)Tomorrow       = 0
<G> Ignore First Trade: (0)No or (1)Yes           = 1

     Any of these parameters can be changed by first typing the
letter for the parameter you wish to change and then entering the
new setting.  The prompts at the bottom of the screen will step
you through the process.

     Parameters <A> and <B> refer to the "long" and "short" side
of the market.  In other words, if you wish to trade both sides
of the market, these parameters should both be set to (1).  The
"Long" or BUY side of the market refers to buying a security and
a profit is realized if the price of that security goes up.  This
is the most common method of security investing and in some
markets (mutual funds) is the only method of investing.

     The "Short" or SELL side of the market refers to the act of
short selling or put buying (options).  This means that you make
a profit if the price of the security goes down.  If you are only
interested in the BUY side of the market, you should set
parameter <B> to 0.  There are numerous other vehicles and
methods available, but that is not the purpose of this manual.

     As an example, if you invest in a mutual fund, you will buy
the mutual fund and hope to sell it at a later time at a higher
price.  When you sell the mutual fund you will probably put your
money into cash or a money market fund for safety.  In other
words, you are out of the market and waiting for another
opportunity to invest in the mutual fund.  To set up the
parameters for this type of strategy, you would set <A> to 1 and
<B> to 0.

     Some traders will want to maintain exposure to the market
by being active on the long side and the short side.  This means
that when a sell signal is given, they will sell and sell short
and when a buy signal is given, they will cover their shorts and
buy.  Most commodity/futures speculators trade this way.  The
terminology used here doesn't always apply to futures, but should
be understood by all.  To set up for this strategy, both <A> and
<B> should be set to 1.

     The crossover duration <C> allows you to experiment with
delays in the timing of the trading signals.  A duration of 1
period means that the signal was executed immediately based upon
the parameter setting for <F> (explained later).  In other words,
if a buy signal was generated by the moving average(s), a delay
of so many days would occur before the actual purchase or sale
was made.  This feature will help eliminate the dreaded "whipsaw"
that hampers so many trading techniques.  Remember, though,
eliminating whipsaws also dampens timing.

     Selections <D> and <E> allow you to optimize and test
only certain portions of the loaded data file.  This is good for
optimizing the averages over the first portion of the data and
then trading the results over the latter portion to see if
similar results are obtained.  The values are always defaulted to
the beginning record (1) and the ending record (based upon how
much data was loaded).

     Selection <F> allows you to test a strategy based upon the
time of actual execution of the trade.  Executing at the close
today is somewhat theoretical because the close today was needed
to obtain the trading signal.  You could, however, enter a value
for the close in the database during midday and work under the
assumption that if the actual close is near that value, then you
could still get an execution just prior to the close of the
market.  By selecting the close tomorrow you will get a precise
execution, but a full day's activity will have gone by before you
act upon a trading signal.

     Ignoring the first trade (selection G) is necessary for
fine-tuning the strategy.  It is recommended, but not required,
that this parameter be set to (1)Yes.  This is due to the nature
of arithmetic moving averages.  If you have a 25 day average, the
first actual calculated value for the moving average is 25 days
(periods) after the start of the actual data.  If the price is
above the average at that point, then that day is considered the
day of the first buy signal.  Likewise, if the price is below the
average on that day, it is considered the first sell signal.  By
ignoring the first trade, you will get an actual crossing of
average and price or crossing of two moving averages for the
first actual trade signal.

     Pressing <Esc> will return you to the "Analyze Trading
Strategies" Menu from where you can begin the optimization
process or calculating actual trade histories based upon single
or double moving averages.

Single and Double Moving Averages

     At this point an explanation of single and double moving
average theory would be appropriate.  Using a single moving
average for a trading technique is quite simple.  If the moving
average rises above the price, then a sell signal is generated,
and when the moving average goes below the price a buy signal is
given.  This, of course, is the simple case.  The Trading
Strategy Parameters discussed earlier will alter the actual
timing and results of this, but the general concept is the same.

     The technique of using two (double) moving averages
eliminates the use of the actual price and substitutes another
moving average.  Normally, this is referred to as the Short Term
Average.  This is a moving average that smooths the actual price
so that there are fewer "whipsaws" in the trading system.  The
other moving average (Long Term Average) serves the same purpose
as the moving average in the single trading system; that is, to
provide crossover signals for the Short Term Average.

Calculate Optimum Single Moving Average Periods

     Selection <4> from the "Analyze Trading Strategies" Menu will
take you to a three item selection menu designed to set the
testing range for the Short Term Average.  When using the single
moving average strategy, the average is referred to as the Short
Term Average.

     <A> Short Term Average Low Value:       = 6
     <B> Short Term Average High Value:      = 44
     <C> Short Term Average Increment (>0):  = 2

     Here you will set the beginning value for optimizing the
single moving average system (6 in this example).  This means
that the optimization routine will start with a moving average
value of 6.  Selection <B> is where you will set the high value
for the optimization routine.  Selection <C> is where you can set
the incremental value or step value as the optimization routing
makes its calculations.  In the above example the low value is at
6, the high value is at 44, and the increment is at 2.  This
means that the first average will be 6, the second one will be 8,
the third will be 10, and so on, up to 44.

     At the top of the screen, below the title, you will see the
number of different trials that will be calculated based upon the
parameters you set in A, B, and C.  Obviously, the more trials,
the longer it will take to finish.  The time will also be
dependent upon the computer you are using.  There is one
limitation here, and that is a limit of 1600 trials.

     Once you have entered the low, high, and increment values
for the Short Term Average, pressing <Enter> will let you review
the current trading strategy parameters you entered earlier and
then begin the optimization calculations.  Upon answering 'Y' at
the prompt you will be given the opportunity to send the results
to your printer.  If you answer 'N' to the printer prompt, the
results will be shown on the screen as they are being calculated.
Once the calculations are finished, you will be returned to the
"Analyze Trading Strategies" Menu.

Display Optimization Results

     To see the results of the optimization run in a logical
order, select <6> from the 'Analyze Trading Strategies' Menu.
You will see a prompt at the bottom asking if you wish to sort
the results.  If you answer 'N', the results will be displayed in
the order that they were calculated.  Of course, you will be
given the opportunity to send the results to either your printer
or to the computer screen.  A better method is to sort the
results by answering the "Sort Results (Y/N)" prompt with a 'Y'.
Here you will see a new screen of items that have been calculated
for each of the optimization trials.

Sort Results

     High to Low

     <0> Trial
     <1> Buys
     <2> Sells
     <3> Trades
     <4> Gain
     <5> AvgGain
     <6> B-Draw
     <7> S-Draw
     <8> Avg#1
     <9> Avg#2 (Double Average only)

     First determine whether you want the results sorted high to
low or low to high.  Pushing the spacebar will change the order.
Next select the item you wish to sort on by entering the number
preceding it.  For example, if you have it sort from high to low
and then sort on the Gain, the same information you saw in the
unsorted display will be rearranged in order of highest Gain to
lowest Gain.

     The following discussion will define each of the items that
are calculated in the optimization routine.

     TRIAL - this is merely a numerical reference to the order in
which the calculations were performed.

     BUYS - this is the number of BUY trades generated by the
specific strategy you have selected.

     SELLS - this is the number of SELL trades generated by the
specific strategy.

     TRADES - this is the total of BUYS and SELLS.

     GAIN - this is the total gain from the optimized trading
strategy.

     AVGGAIN - this is the GAIN divided by the TRADES.

     B-DRAW - this is the amount of points that the price went against
(DOWN) you during a long position.  In other words, it
represents the quality of the timing signal and how much staying
power you would need to follow this specific strategy.  Drawdown
is a term used almost exclusively with futures and commodity
trading.  However, when evaluating a trading strategy, it is
necessary to assess the risk factor.

     S-DRAW - this is the amount of points that the price went
against (UP) you during a sell signal.

     AVG#1 - this is the value of the Short Term Average.

     AVG#2 - this is the value of the Long Term Average (if using
the double average optimization routine).

     At the bottom of the listing will be a repeat of important
information about the optimization routine, such as:  the TICKER
name, the required Duration, etc.

     Once you have the information sorted to your liking, take
note of the value of AVG#1 and return to the 'Analyze Trading
Strategies' Menu (press spacebar).  From here you can select <2>
to analyze the specific trading history of the moving average
that had the most appealing features.  Note that Gain is not
always the most important feature, B-Draw and S-Draw and AvgGain are
also noteworthy items to consider.

Display Single Moving Average Trades

     When you select <2> you will be shown again the current
strategy that you entered earlier and you will be prompted to
enter the value of the Single (Short Term) Average that you liked
from the optimization results.  Type the number and press
<Enter>, again the opportunity to send the results to the printer
or not will be shown.  The next display will show the Ticker, the
value of the moving average you just entered, and the crossover
duration at the top.  Then you will see a trade by trade summary
of the buy and sell signals generated with the average you have
selected.

     The Gain is the gain on that specific trade and the Net Gain
is the cumulative gain from beginning to end.  The Buy Draw and
Sell Draw are based on the amount the price went against you for
each trade.  A zero in the B-Draw or S-Draw column means that the
timing was very good.

     Once you have viewed the tabular results, press the spacebar
and you will be given the opportunity to plot the data with the
selected average.  The price data will be a line plot of the
close price only.  A dotted line will be overlayed on the price
representing the average that you selected.  At the bottom of the
screen will be small up and down arrows denoted the buy and sell
signals for this trading strategy.  Refer to the Plot section for
more details on the graphics screen analysis that is available to
you here.

     It should be noted here that you do not need to calculate optimum
moving averages before you can review a trading history.
You could select <2> or <3> and pick a moving average value at
random and then view the trading results as before.

Calculate Optimum Double Moving Average Periods

     The previous discussion dealt with the single or short term
moving average analysis.  You have essentially the same
capability with two moving averages, referred to as Double Moving
Averages.  This technique is also known as crossover analysis.
Once you select <5> from the 'Analyze Trading Strategies' Menu,
you will see a screen similar to the Single Average page, but has
three additional settings.  The first three (A-C) are the same as
the values entered for the Single Moving Average optimization,
but can be changed here if desired.  The last three deal with the
Long Term Average or second average.

     Keep in mind that the Double Moving Average is very similar
to the Single Moving Average if the Short Term Average were equal
to 1.  This would then make the Short Term Average equal to the
price and the results would be the same.  As before, enter values
for the low, high, and increment for both the short and long term
averages.  If you are using daily data, short term averages
between 4 and 20 with an increment of 2 would be a good place to
start.  For the long term average, values between 25 and 80 with
an increment of 5 would be adequate.  You, of course, can choose any
values you desire.  See the summary discussion at the end of
this section.

IMPORTANT:  You should not select a Long Term Average Low Value
that is lower than the Short Term Average High Value.  The
software will ignore the overlap during calculation if you
forget.

Display Double Moving Average Trades

     As with the single average, you have the opportunity to
display the results on your printer or screen and then you can
select <6> to review the results in a sorted order.  From the
sorted order, depending upon your priorities, you can then select
<3> to see a trade by trade history using the two moving averages
that gave the results you liked.  And, as before, you can plot
the results and see the price, the short term average, the long
term average, and the buy and sell arrows.

Summary

     It should be noted that in a single or double moving average
system, it is not necessary to test all possible combinations.
For example, in the single moving average system in which you
wish to test the performance for values from 5 to 60, it is not
necessary to test every integer value in this range.  A faster
and more efficient method would be to test the system with an
increment of 5 (5, 10, 15, etc.) and then to focus in on any
areas that became of interest from the results.  For instance, if
the values of 25, 30, and 35 yield good results, you might run
the optimization routine again with a range between 25 and 35 and
an increment of 1.

     Another practical example would be with the double moving
average system or crossover system.  If you were interested in
the performance of the system for parameter values 5-30 for the
short term average, 20-100 for the long term average, and time-
delay or duration from 1-15, there would be a total of about
29,940 combinations - impractical to test, let alone evaluate the
results.  You cannot reduce the range without damaging the basic
intent of the testing.  Therefore, a limited number of parameters
can be tested by spacing the parameters or increasing the amount
of the increment.  This will provide a good approximation without
hurting the overall performance of the trading system.  It should
be noted here, that the time-delay (duration) can be changed with
each test run.  It cannot be setup with a range and increment
like the moving averages.

     Once you have reduced the number of trials (combinations),
the results can be analyzed to find an area of interest and then
another optimization run can be performed with a range of
parameter values that fall around that area.

     The number of trials or combinations is calculated
automatically whenever you change the range or increment.
Therefore you should experiment to find a total number of trials
that you are happy with.  Remember that the limit is 1600 trials.

     One more point to keep in mind; any optimization results that end
in substantial losses is more valuable than first
impression.  If some of the losses are greater than the best
gains, then just do the opposite when a signal is generated.


                             EXport

Description

     The EXport program will let you export (transfer) any or all
of your data into numerous other popular data formats for use
with a wide variety of software programs.

     If you use this feature be sure to have a formatted diskette
or a new subdirectory available for the data to exported to.  If
you are going to export data to the CompuTrac format, the
destination must be a CompuTrac compatible database.

     The following conversions can be performed quickly and
easily; just follow the prompts.  First select the format and
then you will need to give the drive letter and path (hard disk)
to the APEX database that has the file(s) you wish to export.
Once a file is selected you will then be asked for the drive
letter and path for the exported file to be written to.

          FORMAT                   SUFFIX

     ASCII Comma-Delimited Format  .ASC

     ASCII Space-Delimited Format  .ASC

     DIF Data Interchange Format   .DIF

     WKS Lotus 123 Format          .WKS

     CT CompuTrac Format           N/A


     Data can only be exported to these formats.  More formats
and data importing may be available with future updates to the
APEX series.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2041

     Volume in drive A has no label
     Directory of A:\

    BASENAME            22   4-07-89   7:26a
    FILE2041 TXT      3405   1-16-90  10:56a
    GCNE30   HDR        48   4-07-89   7:26a
    GCNE30   NDX     11144   7-31-89  12:17p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617   1-16-90  11:24a
    MANUAL   DOC     59640   7-28-89   1:43p
    TICKER3           5105  10-01-88  10:34a
    TICKER3  BIN       193  11-09-88  12:09p
    TRNE21   HDR        48   4-07-89   7:26a
    TRNE21   NDX     11172   7-31-89  12:17p
           11 file(s)      91432 bytes
                           65536 bytes free
