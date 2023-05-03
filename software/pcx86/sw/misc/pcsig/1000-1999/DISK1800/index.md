---
layout: page
title: "PC-SIG Diskette Library (Disk #1800)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1800/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1800"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STOCK MARKET TIMER"

    When should you buy and when should you sell your stocks?  What numbers
    should you watch?  The STOCK MARKET TIMER uses figures from your daily
    newspaper to time your actions to ongoing trends, not whims.
    This market analyzer is based upon M. G. Zahorchak's book entitled "The
    Art of Low Risk Investing."  Mr. Zahorchak's main idea was to help the
    individual investor to protect himself from himself.  That is, to give
    the investor a method of investing other than investing on hot tips or a
    stock some "guru" is touting that week.
    
    To that end, he presented guidelines to investing based on several
    moving averages.  If followed, the investor could expect to at least
    approach future investments with some discipline in his trading
    activities.
    
    The data STOCK MARKET TIMER uses is quite simple and readily
    available.  Market direction is determined from three sources:  the
    weekly closing DJIA; the weekly number of Advancing and Declining
    stocks on the NY Stock Exchange; and the S&P500 weekly closing
    figures.  Individual stocks are selected by the system user and are thus
    unique to the individual.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1800.TXT

{% raw %}
```
Disk No: 1800                                                           
Disk Title: Stock Market Timer                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: Stock Market Timer                                       
Author Version: 2.1                                                     
Author Registration: $29.00                                             
Special Requirements: None.                                             
                                                                        
This market analyzer is based upon ideas in a book by M. G. Zahorchak   
entitled "The Art of Low Risk Investing".  The main idea of Mr.         
Zahorchak's was to help the individual investor to protect himself, from
himself.  That is, to give the investor a method of investing besides   
investing on hot tips or a stock that some Guru is touting that week.   
                                                                        
To that end, he presented guidelines to investing based on several      
moving averages.  If followed, the investor could expect to at least    
approach future investments with some discipline in his trading         
activities and to limit buying when the risk to his capital was low.    
                                                                        
The data the STOCK MARKET TIMER uses is quite simple and readily        
available.  Market direction is determined from three sources; (1) The  
weekly closing DJIA, (2) The weekly number of Advancing and Declining   
stocks on the NY Stock Exchange, and (3) The S&P500 weekly closing      
figures.  Individual stocks are selected by the system user and are thus
unique to the individual.                                               
                                                                        
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
║                 <<<<  Disk #1800  STOCK MARKET TIMER  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: SMTMENU                                         ║
║                                                                         ║
║ To print documentation, type: COPY MARKET.DOC                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MARKET.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                       STOCK MARKET TIMER 




 
 
                    Version 2.1, Mar. 12 1989 
 
                       Stock Market Timer 
                   COPYR. 1986-1989 Ron West 
                      All rights reserved. 
 
                            Ron West   
                       2207 Lochwood Court 
                       Richmond, VA 23233 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Requirements: 
 
     An IBM PC/XT/AT or compatible with PC-DOS/MS-DOS versions
2.0 or higher should be used.  While floppies are acceptable, a
hard disk is recommended. 
 
Copying and Distribution: 
 
     This version of the Stock Market Timer is intended to be 
distributed for evaluation purposes and therefore you are 
welcome and encouraged to distributed it provided that you make 
no charge beyond media and handling costs ($7 Max). 
 
License Agreement: 
 
     If you think that the Stock Market Timer can assist you in 
your stock trading activities and would like to install the 
latest version plus auxiliary print programs, send your payment 
of $29.00 (plus $2.00 shipping) to: 
 
                       Ron West 
                       2207 Lochwood Court 
                       Richmond, VA  23233 
 
     User support will enable the development of additional 
features and future versions of the Stock Market Timer.  Also, by
sending in your payment you will be a registered user, enabling 
you to receive both technical support, announcements of possible
later releases, the latest version of the Stock Market Timer and
several auxiliary programs. Please feel free to contribute your 
ideas regarding desired additional features to the product. 
                                 
                     DISCLAIMER OF WARRANTY 
 
THIS SOFTWARE AND MANUAL ARE SOLD "AS IS" AND WITHOUT WARRANTIES
AS TO PERFORMANCE OF MERCHANTABILITY OR ANY OTHER WARRANTIES 
WHETHER EXPRESSED OR IMPLIED.  BECAUSE OF THE VARIOUS HARDWARE 
AND SOFTWARE ENVIRONMENTS INTO WHICH THIS PROGRAM MAY BE PUT, NO
WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE IS OFFERED. 

GOOD DATA PROCESSING PROCEDURE DICTATES THAT ANY PROGRAM BE 
THOROUGHLY TESTED WITH NON-CRITICAL DATA BEFORE RELYING ON IT.  
THE USER MUST ASSUME THE ENTIRE RISK OF USING THE PROGRAMS.  ANY
LIABILITY OF THE SELLER WILL BE LIMITED EXCLUSIVELY TO PRODUCT 
REPLACEMENT OR REFUND OF PURCHASE PRICE. 
 
 
 
 
 
 
 
 
 
 
                                                                
                                                         Page  2 
                                                                 
 
 
 
 
 
 
 
 
 
 
 
                        TABLE OF CONTENTS 
 
 
Title                                                       Page

 
Requirements                                                  2 
 
License agreement                                             2 
 
Background                                                    4 
 
Data sources                                                  4 
 
Stock selection                                               5 
 
Getting started                                               5 
 
Building your Data Base                                       6 
 
Weekly stock analysis                                         7 
 
Data Base correction                                          8 
 
Data Base backup                                              9 
 
Stock splits                                                  9 
 
Quick start Data Base                                        10 
 
Change history                                               10

Weekly Stock Price form                                      11 
 
Registration form                                            12  

Comment form                                                 13 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 


Background: 
 
     In the late 70's an article appeared in a forgotten APPLE 
magazine which discussed a computer program that was developed 
based upon ideas in a book by M. G. Zahorchak entitled "The  Art
of Low Risk Investing".  At the time I was interested in the 
Stock Market and was looking for some means of timing the 
purchase or selling of stocks.  I located a copy of the book and
after examining the program began writing my own market timing 
system to implement many of the ideas the author expressed.  I 
began using early versions of the Stock Market Timer in 1983 and
have continued to do so with all my investments.  During this 
period I have been very satisfied with the results of the system.
Of course, since late 1982 we have been in a historic Bull market
and I'm sure that played a roll in the performance of my stock 
portfolio.  Be that aside, I have compared the Stock Market 
Timer's Buy/Sell signals with many of the "Wall Street Gurus" 
Buy/Sell signals and it is remarkable how similar the timing of 
the calls are.  I have also bought stocks during a declining 
market in spite of the Systems recommendation and subsequently 
sold them at a loss.  Needless to say, that was a very expensive
lesson which I hope I will not make again. 
 
     The main idea of Mr. Zahorchak's was to help the individual
investor to protect himself, from himself.  That is, to give the
investor a method of investing besides investing on hot tips or a
stock that some Guru is touting that week.  To that end, he 
presented guidelines to investing based on several moving 
averages that if followed, the investor could expect to at least
approach future investments with some discipline in his trading 
activities and to limit buying when the risk to his capital was 
low. 
 
     Another principle noted by Mr. Zahorchak is that the market
moves in emotional cycles.  That people become overly 
enthusiastic and bid stocks to unmaintainable levels.  Likewise,
they become overly pessimistic and selling will drive prices 
down.  These swings in emotions cause temporary price 
fluctuations in stocks which will eventually be corrected to  
more normal prices. These changes can occur even with no change 
in a company's outlook. 
 
     One final point, Mr. Zahorchak notes that the technique of 
moving averages are not designed to anticipate exact market tops
or bottoms but will show market changes as soon as possible and 
that pretty much is what has occurred. 
 
Data sources: 
 
     The data the Stock Market Timer uses is quite simple and 
readily available.  Market direction is determined from three 
sources; (1) The weekly closing DJIA, (2) The weekly number of 
Advancing and Declining stocks on the NY Stock Exchange, and  
(3) The S&P500 weekly closing figures.  Individual stocks are 
selected by the system user and are thus unique to the 
individual.  Buy/Sell recommendations for these stocks are 

                                                         Page  4








determined from weekly closing price movements collected from a 
local or national newspaper in conjunction with the system 
generated Market direction indicators.  All of the 
recommendations are based on 5, 15, and 40 week moving averages 
for indices and prices.  
 
Stock Selection: 
 
     Several thoughts are offered on stock selection. Select 
volatile stocks, ideally with 100 percent changes in price in a 
year.  Stocks with these swings can easily be seen using a chart
book readily available in your local library.  An alternative is
to select stocks with a high (ie., >100)  "Beta" which is a risk
measure.  This information is available in publications such as 
"ValueLine".  Pick only stocks you would want to own.  This 
system works only with the limited number of stocks you have 
included from the thousands available in the market.  Don't buy 
new issues.  Its been pointed out that most new issues collapse 
during the first Bear market and frequently never recover.  
Select only actively traded stocks.  If obtaining prices is 
difficult, its tough to track a stock.  Select stocks from as 
many different industry groups as you can and try to avoid 
selecting too many from a single industry.  Doing this will 
hopefully insure that whichever industry group will lead a coming
Bull market, you will have some stock representation in it.  
Finally, select stocks from an industry group that have "good" 
fundamentals. This information is also available in publications
such as "ValueLine" and "Standard and Poor's" stock reports.  
Reports are grouped by industry and show the stocks most 
attractive in the group. 
 
Getting Started: 
 
     Obtaining the weekly closing prices for the stocks you will
follow is initially a rather tedious task that will take some 
time to compile and enter into the Stock Market Timer. (There is
a Quick Start procedure that uses a prebuilt Data Base composed 
of 5 predefined stocks for those who would like a very quick 
overview of the Stock Market Timer. See below for the procedure 
for setting it up).  I suggest preparing a single page form for 
each stock that you will follow plus a form for the DJIA of 30 
stocks, the S&P 500 stocks, and weekly advance/decline figures. 
An example is included in the Appendix that you can modify with 
appropriate dates and have the necessary copies reproduced at 
your local copy center.       
 
     With your forms in hand, again visit your local library and
using Barron's Weekly Magazine, The Wall Street Journal (Mondays
issue for Fridays closing prices), or your local newspaper's 
financial section with Fridays closing prices, begin the task of
building a 41 week history of prices.  Because of the amount of 
time this will require you may want to begin with only a small 
number of stocks (maybe 30?) that you will track and add to it as
time permits.  The Stock Market Timer allows for the addition of
stocks at any time as well as the correction of all data entered. 
 
                                                         Page  5









     In any case, enter the Stock's name, Line of business, 
Earnings for the last 12 months, and the closing stock prices for
the last 41 weeks onto your forms.  All Prices are entered with 
only two decimal places and fraction conversion is as follows; 
1/8 = .13, 1/4 = .25, 3/8 = .38, 1/2 = .50, 5/8 = .63, 3/4 = .75,
7/8 = .88.  
 
Building your Data Base: 
 
     Once you have collected your historical data you are ready 
to enter it into a file called MARKET.DAT.  From DOS enter 
SMTMENU to bring up the main menu.  Select the "Edit" function 
from the main menu which will bring up the Edit Menu.  Select the
"Add" function to begin adding your data to your data base.  The
first item entered into your data base must be the Advance- 
Decline data (Record #1).  This is important because only 16 
weeks of data is required for the first entry.  The System will 
advise you that this is Record #1 and you should note the record
number in the proper place on your form.  The system then prompts
you for the Stock's Name.  Respond with "Advance/Decline" and hit
"Enter".  Next it will ask for Line of Business.  Respond with 
"10000 + (Prev Weeks Advance - Declines)" or whatever you want.
Just don't enter commas into any field for any record.  Next it
will prompt you for Earnings to which you can respond with 0 and
hit "Enter".  Finally, it will ask for Purchase Price to which
you can also respond with a 0. It will then prompt you for the
weekly "Prices" to which you will respond with the weekly
Advance/Decline data.  To enter the first Advance/Decline data
element a trivial calculation is required.  Subtract the 
number of Declining stocks from the number of Advancing stocks 
for the oldest week (ie., week 16) and add that figure (whether 
plus or minus) to 10,000. The 10,000 is a number which should be
large enough to keep the Advance/Decline numbers positive. For 
the remaining 15 weekly entries simply subtract the number of 
Declining stocks from the number of Advancing stocks for each 
week and add the result to the preceding weeks calculation and 
enter the result into the Data Base. 
 
     After you have entered 16 weeks of Advance/Decline data the
system will exit to the Edit Menu.  Again select the "Add" 
function and the system will again advise you of the Record 
Number for this Stock.  Note the Record Number on your form 
(Record #2) and the System will prompt you for the Stock's Name. 
The procedure is same for this entry as for Record #1 except you
respond to the Name prompt with "DJ 30 Industrials", and you 
respond to Line of Business prompt with "Dow Jones 30 Industrial
Index" or whatever strikes your fancy. However, this time and for
all remaining entries, when the system prompts you for your 
oldest price its referring to 41 Weeks ago and it requires 41 
price entries. 
 
     After you have entered 41 weeks of DJ30 data, the system 
will again exit to the Edit Menu.  Select the "Add" function, 
note the Record number (Record #3), and enter S&P500 data for 41

 
                                                         Page  6
 
 
 
 
 
 
 
 
 
weeks.  Finally, you are ready to enter your first stock entry. 
The procedure is exactly the same as the previous records. Note 
the Record number, enter the Stock's Name, enter the Line of 
Business, enter the Earnings for the last 12 months, enter the 
Purchase Price if you own the stock, otherwise enter 0, and then
begin entering the Closing Prices for the last 41 weeks beginning
with the oldest data.  After you enter your stock information the
system will return to the Edit Menu. Repeat this for your 
remaining stocks.  After entering your last stock, exit back to 
the Main Menu as this completes the Data Base building.  Place
the forms in a 3 ring binder in Record Number sequence for ease
of use each week.  While this may sound very time consuming, its
not.  It takes about 1.5 hours per week to gather and enter the
data on about 175 stocks. 
 
Weekly Stock Analysis: 
 
     Weekly, obtain the Friday's Closing Price for the stocks you
follow and have entered into your Data Base, plus Advance- 
Decline, DJ30 Industrials, and S&P500 data.  Enter this data onto
the appropriate form for the week and after collecting the data 
for all your stocks you are ready to Analyze the Market for the 
week.  If you miss a closing price for a stock simply repeat the
closing price for the previous week, note the stock and when the
price becomes available correct the price using the "Edit" 
function which is discussed below.  
 
     Begin by entering SMTMENU from the DOS prompt which will 
bring up the Main Menu and then select the Analysis function. 
The program will first ask if you would like to backup Market.Dat
before beginning.  It is a good idea to do this if you have
enough space on your disk.  It only takes a moment and if you
have a power failure or really mess up your data base you can
easily restore from the backup (The backup is called Market.Bak). 
If you have Graphics capability and are displaying in 80
character format, the program will ask if you would like to
display a price graph with each stock.  A graph is useful not
only in seeing both the weekly and 5 week averages but you can
spot bad data you have entered and correct it. 
     
     After those housekeeping chores are completed you are ready
to begin the weekly stock analysis.  The first Record up will be
the Advance/Decline record. The system will display identifying
information and ask you for the number of Advancing stocks for
the week and then the number of Declining stocks.  The second
record will then be brought in and the closing value for the DJ30
Index will be requested.  This will be repeated for the third
record, the S&P500 Index, and then Overall Market Information
will be displayed.  The system waits for you to digest that
information and after you signal the system to proceed, by
hitting any key, it begins asking you for the closing prices 
for each of the Stocks in your Data Base and responds with Stock
Advisory Information for each Stock as well as a price graph.  If
a stock which you own declines by 10% or more from either the
highest price obtained in the last 40 weeks or declines 10% or
more from the price you paid, a sell recommendation is generated.

                                                         Page  7 








This should either prevent losing a large part of your stock's
gain in the first case or will allow you to cut your losses in
the latter.    
 
     If you should enter an erroneous closing price for a stock,
note the Record number for the stock and go ahead and complete 
the data entry for your remaining stocks and then select the Edit
function and "Verify" the stock and reenter the correct price. 
 
     The deletion of a stock is done by replacement of the
existing stock.  That is, by selecting the Edit function and
"Changing" all fields with entries from the new stock.  You will
probably find that you will be doing this from time-to-time as
new ideas present themselves.

     As you enter the weekly closing prices for your stocks any 
new Buy/Sell signals generated by the program are accompanied by
a "beep" to bring it to your attention. 
  
     The reason yearly earnings data is captured, is to present 
Price/Earnings ratios for the stocks which you have chosen to 
follow, and you may be reluctant to buy a recommended stock when
the P/E Ratio is very high or you may become "nervous" retaining
ownership of a stock which has had a nice run up in price and is
now experiencing a high P/E.  But that's your decision. There is
no substitute for your own good judgement and I cannot over 
stress the need to study all available financial information you
can get your hands on. You'll find a gold mine of financial 
information at your public library and it will not only provide 
you with new possibilities and interesting stocks but you can 
evaluate other's ideas about the direction of the market and 
economy. 
 
     One other comment about market averages to aware of, and 
that is what is called "whip-sawing".  This will happen when a 
Stock or Market is moving in a very narrow price range for an 
extended period of time.  The Market will make a slight move out
of the narrow range and cause a "Buy/Sell" signal and the next 
week move back into the narrow range again and shortly thereafter
cause the opposite "Buy/Sell" signal to be issued. Of course, I 
try to spot this and remain on the sidelines. Sometimes a good 
indicator of this is when the 5, 15, and 40 Weekly Averages are 
very close together and the current price jumps enough to cause a
Buy/Sell.  So be on guard against the "Whip-Saw".            
 
     It is very important that the data be collected weekly and 
entered into the Stock Market Timer on a regular weekly basis to
be of any use. Further, it is recommended that Quarterly you 
visit your local library and update your Earnings information for
each of the Stocks you have selected.  A handy source for 
Earnings information is the Standard & Poor's "Stock Guide" which
is issued monthly and is widely available.  Programs are provided
upon Registration that will print forms for ease in gathering
Earnings information. 
 

                                                         Page  8








Data Base Correction: 
 
     From time to time you may want to add another stock to your
Data Base.  Simply collect the 41 week history for the stock as 
you did when you created the Market Data Base originally and 
select the Edit function from the Main Menu and then the Add 
function from the Edit Menu.  A good source of information is
alternate weeks of "Barrons" which shows the weekly price changes
for most all stocks.  This also minimizes your newspaper
handling.  
 
     If you make an error in entering the weekly price of a 
stock, from the Edit Menu select the Verify function and reenter
the incorrect Closing Price when it is displayed.  The system 
will ask you for the Record Number for the Stock to be changed, 
so it is important that the Record Number was noted as you Added
the Stock to your Data Base.  However, if you would rather use
the stock's name, "Change" or "Verify" will prompt you for the
name.  Key enough characters to make the name search unique.  Be
aware also that the search is "case sensitive".  That is, a stock
with the name of "Pepsico" is not the same as "PepsiCo" or
"PEPSICO".  
 
     If you want to change more than a few Prices for a stock 
select the Change function from the Edit Menu.  This function 
will allow you to change any data field in a stock record.  With
this function the system will ask if you want to change the 
Stock's Name, Line of Business, Earnings, or Purchase Price.  It
will then ask if you want to change ALL the prices.  If you reply
yes, then you will have to reenter the last 41 weeks of Prices 
again.   
 
Data Base backup: 
 
     If you are using a Hard Disk on your system I hope you are 
regularly backing up your files.  Its been frequently said that 
there are two kinds of Hard Disk users, those that have had a 
hard disk failure and those that are going to.  Its very, very 
true.  So do yourself a favor, and back up your files.  If you 
don't have a tape streaming device, I recommend that you copy 
MARKET.DAT to a floppy before doing your weekly Stock Analysis. 
This can be done as follows; 
 
    COPY C:MARKET.DAT A:MARKET.DAT 
 
     Of course, you may have to modify the statement to 
accommodate the path name of a sub-directory if you are using 
one. You may also want to name the Market data on the floppy as 
the date of the update, for example "12-06-88.DAT" as an aid to 
jogging your memory in case you need to restore the data.  
 
Stock Splits: 
 
     If your stock has a split, respond at the appropriate prompt
with "split".  The program will then request that a divisor be 
entered.  To determine the divisor on a stock split take the 
number of new shares divided by the number of old shares and that
will be the divisor.
                                                         Page  9
                  





 
 
          If a split is            then divide by 
 
             2 for 1                    2 
             3 for 1                    3 
             4 for 1                    4 
             5 for 1                    5 
             3 for 2                    1.5 
             4 for 3                    1.33 
             5 for 4                    1.25 
             5 for 2                    2.5 
             1 for 2                    0.5 
             1 for 3                    0.33 
             1 for 4                    0.25 
             1 for 5                    0.20 

Quick start Data Base: 
 
     If you do not want to spend the time collecting historical 
stock data because you simply want to quickly "sample the flavor"
of the Stock Market Timer, then the Quick Start Data Base is for
you.  
 
     First copy QUICK.DAT to MARKET.DAT then begin by entering 
SMTMENU from the DOS prompt which will bring up the Main Menu and
then select the Analysis function.  The first Record up will ask
you for the number of Advancing stocks for the week, Enter 1820. 
Then you will be asked for the number of Declining, Enter 215. 
(A great week!).  The second Record will be brought in and the 
closing value for the DJ30 Industrial Index will be requested, 
Enter 2194.29.  Next, the S&P500 record will be read in and the 
weeks closing figure will be requested, Enter 280.67. At this 
time the Overall Market information will be displayed and the 
system waits for you to hit a key to continue.  The first Stock 
will be displayed asking you for the weekly closing price, enter
33.50.  The Stock's Advisory Information is then displayed and 
the second Stock will be displayed requesting the weekly closing
price, enter 29.75.  Repeat this for the third Stock, entering 
23.38; the fourth Stock, entering 67.75; and finally for the 
fifth and last Stock, enter 47.63.  And there you have it.    
 
     If you have done this and decide to build your own Market 
Data Base, then delete MARKET.DAT and follow the earlier 
instructions for getting started.  And oh yes, don't forget to 
register.        
 
Stock Market Timer change history:

  Version 1.X  Apple II+ and Apple IIe sytems
  Version 2.0  IBM PC/XT/AT Original release (Jan 10, 1989)
  Version 2.1  Price graphs and Backup options added (Mar12,1989)


 
 
  
 
 
                                                          Page 10
 
 
 



                    Weekly Stock Prices 
 
StockName___________________________________________RecNo________
 
Exchange_____________    Symbol_____________  Beta____________ 
 
Line of Business_________________________________________________

=================================================================
 
1/8   ______________   6/10  ______________  11/11 _____________
 
1/15  ______________   6/17  ______________  11/18 _____________
 
1/22  ______________   6/24  ______________  11/25 _____________
 
1/29  ______________   7/1   ______________  12/2  _____________
 
2/5   ______________   7/8   ______________  12/9  _____________
 
2/12  ______________   7/15  ______________  12/16 _____________
 
2/19  ______________   7/22  ______________  12/23 _____________

2/26  ______________   7/29  ______________  12/30 _____________
 
3/4   ______________   8/5   ______________  1/6   _____________

3/11  ______________   8/12  ______________  1/13  _____________
 
3/18  ______________   8/19  ______________  1/20  _____________ 
 
3/25  ______________   8/26  ______________  1/27  _____________

4/1   ______________   9/2   ______________  2/3   _____________
 
4/8   ______________   9/9   ______________  2/10  _____________
 
4/15  ______________   9/16  ______________  2/17  _____________
 
4/22  ______________   9/23  ______________  2/24  _____________
 
4/29  ______________   9/30  ______________  3/3   _____________
 
5/6   ______________   10/7  ______________  3/10  _____________
 
5/13  ______________   10/14 ______________  3/17  _____________
 
5/20  ______________   10/21 ______________  3/24  _____________
 
5/27  ______________   10/28 ______________  3/31  _____________
 
6/3   ______________   11/4  ______________  4/7   _____________

 
 
 
                                                         Page 11
 
 
 
 
 
 
 
 
                         Registration Form 
 
      
          Please register me as a user of the Stock Market 
          Timer.  I understand I will receive the latest  
          version of SMT as well as other programs of interest. 
 
 
NAME_________________________________________  DATE_____________
                                         
STREET__________________________________________________________
 
CITY_________________________________ STATE________ ZIP_________
 
TELEPHONE_______________________STOCK MARKET TIMER VER._________

 
Registration fee                      $ 29.00 
Postage & Handling                       2.00
COD or not US/Canada (8.00)           _______     
  
Total Due                             _______ 
 
 
To: Ron West
    2207 Lochwood Court
    Richmond, VA  23233 
   
    or call 804-740-0918 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                         Page 12
 
 
 
 
 
 
 
 
 
 
 
                               COMMENT FORM 
 
 
Your comments about the Stock Market Timer Software are welcome. 
Please take the time to fill out this form or write/call us with
your comments and/or suggestions for improvements. 
 
NAME________________________________________ 
 
ADDRESS_____________________________________ 
 
CITY__________________________________ STATE__________ZIP________

Phone Work___________________________ Home_______________________
 
STOCK MARKET TIMER Version Number________________________________
 
_________________________________________________________________
 
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
 
_________________________________________________________________
 
_________________________________________________________________
 
_________________________________________________________________
 
_________________________________________________________________
 
_________________________________________________________________

 
 
Mail to:  Ron West 
          2207 Lochwood Ct. 
          Richmond VA 23233 
 
 
 
 
                                                         Page 13
 
 
 
 
 
 
 
 
          

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1800

     Volume in drive A has no label
     Directory of A:\

    FILE1800 TXT      2369  12-20-89   4:10p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   7:39a
    MARKET   DOC     29976   3-13-89   9:37a
    QUICK    DAT      1856   1-28-89   6:40p
    SMTANALY EXE     70630   3-04-89   2:16p
    SMTCHANG EXE     49206   2-15-89   6:27a
    SMTMENU  EXE     36110   2-13-89  10:33a
            8 file(s)     190725 bytes
                          126976 bytes free
