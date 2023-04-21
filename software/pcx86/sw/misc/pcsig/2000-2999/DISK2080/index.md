---
layout: page
title: "PC-SIG Diskette Library (Disk #2080)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2080/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2080"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WINE CELLAR"

    WINE CELLAR is a simple database designed to keep track of all the wines
    you have encountered, good and bad, and your evaluation of each one.
    This database allows you to store practically every bit of information
    about the wine:  each record contains fields for the name of the winery,
    the variety of wine, the color of the wine, the vintage year, the place
    the wine was grown and where it was bottled, the date the wine was
    bought, the cost of the wine, the percentage of alcohol, and a one line
    comment concerning how the wine tasted.
    
    WINE CELLAR allows you to edit, search, and print the records.  The wine
    records may be selectively searched by any field of the records, and the
    results may be sent to the screen or the printer.  A floppy disk will
    contain all the working files and about 1300 wine records, but the
    number of wine records that WINE CELLAR may store on a hard disk is
    practically unlimited.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2080.TXT

{% raw %}
```
Disk No: 2080                                                           
Disk Title: Wine Cellar                                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: Wine Cellar                                              
Author Version: 1.52                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
WINE CELLAR is a simple database designed to keep track of all the wines
you have encountered, good and bad, and your evaluation of each one.    
This database allows you to store practically every bit of information  
about the wine:  each record contains fields for the name of the winery,
the variety of wine, the color of the wine, the vintage year, the place 
the wine was grown and where it was bottled, the date the wine was      
bought, the cost of the wine, the percentage of alcohol, and a one line 
comment concerning how the wine tasted.                                 
                                                                        
WINE CELLAR allows you to edit, search, and print the records.  The wine
records may be selectively searched by any field of the records, and the
results may be sent to the screen or the printer.  A floppy disk will   
contain all the working files and about 1300 wine records, but the      
number of wine records that WINE CELLAR may store on a hard disk is     
practically unlimited.                                                  
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WCMAN.TXT

{% raw %}
```








                                WINE CELLAR















NOTE:  This is a SHAREWARE VERSION of WINE CELLAR (ver. 1.52).

                      Give copies to your friends!

       BUT:  If you find WINE CELLAR to be useful, please send $25,
             and your suggestions for improving WINE CELLAR to:

                               KCS SOFTWARE
                              927 MEARS COURT
                         STANFORD, CA  94305-1041











                         (C) Copyright 1986, 1987

                               KCS SOFTWARE
                              927 Mears Court
                         Stanford, CA  94305-1041
                              (415) 493-7210





                             TABLE OF CONTENTS





              CHAPTER 1.  ORGANIZING YOUR WINE CELLAR

              CHAPTER 2.  MAKE A WORKING COPY OF WINE CELLAR

              CHAPTER 3.  MAIN MENU

              CHAPTER 4.  ENTER DATA ON YOUR WINES

              CHAPTER 5.  CORRECT YOUR WINE LIST

              CHAPTER 6.  DELETE LISTINGS FOR YOUR WINES

              CHAPTER 7.  SEARCH YOUR WINE CELLAR

              CHAPTER 8.  PRINT A LIST OF YOUR WINES BY NUMBER

              CHAPTER 9.  SUBJECT INDEX


CHAPTER 1.  ORGANIZING YOUR WINE CELLAR


    You obviously enjoy good wines, and you want to evaluate your wines 
when you drink them, and keep a permanent record of your evaluations.  
WINE CELLAR is ideal for storing and updating records on your wines, and 
more importantly, for searching and printing your records.  With WINE 
CELLAR you can search for any of the data fields, e.g., variety of wine, 
color, vintage year, winery, etc. (see below for a list of all fields), 
and print them to the screen or to a printer.  You can also print out the 
list by number (all or part of the list).  Before a party, just consult 
your own Wine List, and make the appropriate selection.

    The data fields and their sizes are:

              1.  Name of winery  (30 spaces)
              2.  Variety of wine  (30 spaces)
              3.  Color of wine (R/W/B/RO)  (2 spaces)
              4.  Vintage year (as 85)  (2 spaces)
              5.  Where grown  (25 spaces)
              6.  Where bottled  (25 spaces)
              7.  Date bought (as 0785)  (4 spaces)
              8.  Cost (as 99.99)  (5 spaces)
              9.  Percent alcohol (as 12.5)  (4 spaces)
              10. In cellar? (Y/N)  (1 space)
              11. Comments  (78 spaces)       (Total spaces: 206)

    A sample printout for WINE CELLAR is listed below.   The first listing 
is the wine bottle number (automatically assigned by the computer), the 
remaining listings are for data fields 1 - 11, listed above.


104  HEITZ CELLARS                 CABERNET SAUVIGNON            R     67
MARTHA'S VINEYARD      ST. HELENA, CA         0681    $8.50    12.5%    N
8/27/85, GOOD NOSE, ASTRINGENT, FULL BODIED, EXCELLENT


    If there is some item of information about a wine that you want to 
save, but it is not listed above as one of the data-field names, you can 
enter it in the COMMENTS line.  The SEARCH routine will find it there.

    There are many ways to organize a WINE CELLAR, so let us explain how 
this one is organized.  Each bottle of wine is numbered consecutively.  
Use "TIME" label tape or adhesive tape and a waterproof marker pen, and 
label the end of each bottle with numbered tape.  You don't have to enter 
these numbers into the computer, because the computer keeps track of the 
numbers for you.  Now enter the data on all of your wines.







                                    1-1
    After you drink a bottle of wine, write down the date and your 
COMMENTS on that wine so that you can enter this information into the 
computer when convenient.  At that time you will also change data field 
No. 10 from  Y  to  N  , i.e., the wine is no longer in your cellar.

    Since all of the wines are numbered consecutively, as you drink up 
wines you will need to occasionally move your wine bottles up to the front 
to fill the spaces in your cellar so that you can buy more wines.

    There may be an interim time when you don't want to reposition all of 
your wines to fill in the gaps in your cellar, but you need to put new 
wines in your cellar.  If you have a cellar with neat columns and rows you 
can label the columns with letters and the rows with numbers (as in a 
spreadsheet).  Then you can, for example, put your new wine No. 605 in 
slot A5, and then enter  A5  in the Comments line for wine No. 605.  Now 
when you print out the listing for wine No. 605 you will see that it is 
located in slot  A5.  When time permits, then you can reposition your 
wines to be in proper numerical order.

    WINE CELLAR holds the information on 100 wines in each data file 
(called WC1.DAT, WC2.DAT, etc.).  Each full data file requires 20,600 
bytes of disk memory.  The WINE CELLAR program (WC EXE) uses about 80K 
bytes.  There are two small data files generated by the program; 
WCTOTDAT.DAT (15 bytes) keeps track of the total number of wines on file 
and the date the last entry or correction was made, and WCVARIAB.DAT (99 
bytes) stores the variables needed for searching multiple files.  A 
double-sided, double-density disk holds 362,496 bytes.  Therefore, on a 
floppy disk you can hold the above working files plus 13 data files on 
your wines, or a total of 1300 wines on a disk.  If you have more wines 
than this, you will need to install WINE CELLAR on a hard disk, where the 
number of records that you can store on your wines is almost unlimited.  
Alternatively, you can start a second floppy disk and start numbering your 
new wines from 1-1300 again, perhaps using a different color for the 
labels for numbering your new wines.




















                                    1-2
CHAPTER 2.  MAKE A WORKING COPY OF WINE CELLAR


USING A FLOPPY DISK.

    Prepare a specially formatted disk in drive B that carries the 
COMMAND.COM (i.e., with a DOS disk in drive A type: FORMAT B: /S).  For 
more information on formatting disks, see your DOS Manual.

    Copy your new WINE CELLAR program  (WC.EXE) from drive A to your 
formatted disk in drive B; type: COPY A:WC.EXE B: <RETURN>.  Put your 
distribution disk away in a safe place.  Put your copy of WINE CELLAR in 
drive A, and reboot the system (press Alt-Ctrl-Del all at once).  When you 
see  A> , type:  WC  <RETURN>, and WINE CELLAR will run.


USING A HARD DISK.

    For those who want to run WINE CELLAR on a hard disk, first set up a 
special subdirectory, e.g., from the root directory (type CD\ <RETURN>) 
type MD\WC <RETURN> to make a subdirectory named  WC.  Then type CD\WC 
<RETURN> to enter your new WC subdirectory.

    To transfer your new WINE CELLAR program to your hard disk, put yoor 
WINE CELLAR distribution disk in drive A, and type:  COPY A:WC.EXE C: 
<RETURN> .

    Now type:  WC  <RETURN>  and WINE CELLAR will run.


























                                    2-1
CHAPTER 3.  MAIN MENU


    The Main Menu shows how many wines are listed in your WINE CELLAR, and 
the date on which the files were last updated.

    The current date and a running clock are also displayed.  If no 
entries are made on the keyboard for about 3.5 minutes, the time display 
will go blank.  This is done so that if you have a Screen Save routine in 
your computer it will work (usually after an additional 5 minutes after 
the clock in WINE CELLAR turns off).  If you don't have a Screen Save 
routine (and some graphics boards don't support this type of program), 
then be sure to darken your screen if you are going to leave your computer 
turned on, but are going to be absent for an extended period of time.  
This practice will lengthen the life of your monitor.

    You are then asked to select what you want to do:

              (1)  ENTER WINES?
              (2)  CORRECT RECORDS?
              (3)  SEARCH RECORDS?
              (4)  PRINT RECORDS BY NUMBER?
              (5)  EXIT to SYSTEM?


    If you want to display or print a record on a specific numbered bottle 
of wine, then enter No. 4 (PRINT RECORDS BY NUMBER). 

    If you want to display or print files on wines selected by any other 
criterion, then enter No. 3 (SEARCH RECORDS).
























                                    3-1
CHAPTER 4.  ENTER DATA ON YOUR WINES


    You are shown the number to use for your next bottle of wine.

    A full featured Line Editor is included in WINE CELLAR.  When you 
enter data, the number of spaces available is shown by a line of periods.  
The Line Editor prevents you from entering more data than permitted in 
each data field.

All entries of letters are automatically converted to capital letters.  
Some of the data fields permit the entry of any keyboard character, some 
data fields permit only numbers plus a period and a minus sign, one field 
allows only letters to be entered, and one field allows only the letters Y 
and N to be entered.  If you press an incorrect key you will hear a 
"BEEP", and no entry will be shown on the screen.

Several special keys are activated to help you edit your entries:

         <RETURN>  or  <Down Arrow> -  Save entry as shown
         <Up Arrow>                 -  Move to previous lines
         <Esc>                      -  Restore original text
         <Left Arrow>               -  Jump left one character
         <Right Arrow>              -  Jump right one character
         <Ctrl>  <Left Arrow>       -  Jump to front of line
         <Ctrl>  <Right Arrow>      -  Jump to end of line
         <Ins>                      -  Toggle Insert ON/OFF
         <Del>  or  <BACKSPACE>     -  Delete current character


    For the color of the wine, R = red; W = white; B = blush; and RO = 
rose.

    When entering a case of wine, you certainly don't want to type 
everything over 12 times, and with WINE CELLAR you don't have to.  WINE 
CELLAR has a repeat feature.  After you type in all the information for 
the first bottle of wine, you will be shown the number for the next bottle 
of wine and will be asked to enter the Name Of The Winery.  Since it is 
the same as the winery just entered for the previous bottle, just key  Alt 
R (R=Repeat) and the entry for the previous bottle of wine will be entered 
for the current bottle of wine, and will be displayed on the screen.  
Continue this process for the rest of the entries.  The COMMENTS line, 
however, does not have this repeat feature because you probably won't have 
any COMMENTS until you drink the wine.  Just key  <RETURN> if you have no 
COMMENTS.  [Note: the  Alt R  keys will not work on the first entry of new 
session; just on the second and subseqent entries of a given session.]








                                    4-1
    Why do you need 12 entries for a case of wine?  First, you need to 
keep track of how many bottles you have on hand, and second, the COMMENTS 
on the different bottles of wine in the case may change with time.  For 
example, the COMMENTS for the first bottle of the case may suggest that 
the wine needs more aging before you drink the second bottle, and your 
COMMENTS will probably continue to change as the wine matures.

    If you want to make more comments than the 78-space COMMENTS line will 
hold, you can set up an abbreviation code system.  You could assign 
numbers to mean different things, for example, the number  1  could mean 
"crisp", the number  2  could mean "sweet", etc.  You would type in these 
numbers surrounded by asterisks, e.g., *1*4*13*22*44*.  Then your search 
string would be a number surrounded by asterisks, for example, *11* .  By 
entering asterisks and searching with asterisks, the computer can 
distinguish, for example, between  1  and  11  . 

    After you have entered all of your wines into WINE CELLAR, we suggest 
that you print out a total list of your wines (use the PRINT ALL or PART 
OF FILE routine).  Then print out a SEARCH for your wines by their color 
as a handy list for selecting your next wine to drink.

    Actually, you will probably find that you will use these "hard copies" 
more frequently than you will use your computer.  The computer will be 
used mostly for updating your WINE CELLAR (i.e., adding new wines, and 
comments on the wines that you have drunk, etc.), for performing special 
searches, and for impressing your friends.




























                                    4-2
CHAPTER 5.  CORRECT YOUR WINE LIST


    The screen shows you how many wines are on file.  Then you are asked 
to enter the number of the wine that you want to correct.  The computer 
then loads the correct file and prints the listings for the wine whose 
number that you entered.

    If a listing is incorrect then correct it using the Line Editor 
features (see page 4-1).  If it is correct just key  <RETURN>  or  <Down 
Arrow>  and the original entry will be saved.  If you mess up a 
correction, just key  <Esc>  and the original entry will be restored so 
that you can try again.  If you missed a line, just use the  <Up Arrow>  
key to get back to the line that you want to correct.  Then use  <RETURN>  
or  <Down Arrow> to get back down the list.

    After you have gone through all of the data fields for that wine, you 
will be asked if you want to correct another record in that same file of 
100 wines.  If the answer is  YES, you will again be asked to specify the 
number of the wine to be corrected.  If the answer is  NO, then your 
corrected records will be saved, and you will be returned to the Main 
Menu.
































                                    5-1
CHAPTER 6.  DELETE LISTINGS FOR YOUR WINES


    Since WINE CELLAR is set up to be a permanent record of your wine 
experience, there is no direct provision for deleting a record from the 
computer.  However, what do you do if you break a bottle of wine before 
you have a chance to drink it?  We hope that this doesn't happen, but if 
you do need to delete a wine, just use the CORRECT routine and delete the 
data in each field.  The wine number will be saved so that you can enter 
another wine for this number by again using the CORRECT routine to add the 
new information.











































                                    6-1
CHAPTER 7.  SEARCH YOUR WINE CELLAR


    The first Menu of the SEARCH routine asks you to choose whether you 
want to print the results of your search to the computer screen or to your 
printer.  Just make the appropriate entry.

    Then you are told how many wines are on file, and how many files there 
are (N.B., There are 100 wines per file).  You are then asked to choose 
which file you want your search to start with.   As time goes by and, for 
example, you have already enjoyed the first 100 bottles of wine, you may 
not want the computer to search through these older records each time.  
This is why you are allowed to specify which file to start the search 
with.

    Then you are shown a list of all the data fields, and are asked to 
select which data field you want to search on (e.g., Name of Winery, 
Variety of Wine, Color of Wine, etc.)

    Then you are asked to enter your SEARCH STRING (i.e., the word or 
phrase to be searched for).  If the search string contains more than one 
word, e.g., PINOT NOIR, then put a slash (/) between each word instead of 
a space, e.g., PINOT/NOIR.  The Line Editor will convert all entries of 
letters to upper case letters.

    Be very specific in choosing your search string.  If you just type in 
a partial name the computer will find it.  For example, if you just type  
PINOT  for the Variety Of Wine, the computer will print out all of your 
PINOT NOIRS as well as your PINOT BLANCS.  Obviously, the more restrictive 
that the search string is the more exact and the faster your search will 
be.  Yes, a large search string will be found faster than a small one.

    Then you are asked if the search is to be only among the wines that 
are currently in your cellar (if so, enter:  1), or among the wines that 
you have already enjoyed (i.e., still listed in the computer, but no 
longer in your wine cellar) (if so, enter:  2), or do you want to search 
through all of your wines, past and present (if so, enter:  3).

    The search then begins, and you are shown which File No. is currently 
being searched.  When a wine is found that matches your search string, it 
is either printed on the screen or the printer, as you selected.

    Five wines are displayed on the screen at a time, and you are given 
the choice of continuing the display on the screen (key  <RETURN> ) or of 
restarting the program (type: M  <RETURN>).

    If the computer doesn't find what you are searching for it will show 
on the screen  *** NOT FOUND ***,  DID YOU TYPE IN THE SEARCH STRING 
CORRECTLY?  Try the search again.

    To stop the printer just turn it off.  In a few moments the computer 
screen will show "Device time out ----"   "Hit any key to return to 
system".  Just hit any key, and then type  WC  <RETURN>, and the WINE 
CELLAR program will restart.
                                    7-1
CHAPTER 8.  PRINT A LIST OF YOUR WINES BY NUMBER


    SAMPLE PRINTOUT:  

104  HEITZ CELLARS                 CABERNET SAUVIGNON            R     67
MARTHA'S VINEYARD      ST. HELENA, CA         0681    $8.50    12.5%    N
8/27/85, GOOD NOSE, ASTRINGENT, FULL BODIED, EXCELLENT

    For an explanation of the various data fields, see page 1-1.


    The PRINT RECORDS BY NUMBER routine is especially useful when you want 
to print a partial list of wines, e.g., the wines that you just finished 
entering (e.g., wines 70 - 85) so that you can check for typographical 
errors, etc.

    If you want to print the information for a certain bottle number, or 
group of bottle numbers, then use the PRINT RECORDS BY NUMBER routine.  If 
you want to locate wines by any other criterion and print a list, then use 
the SEARCH routine (Chapter 7).

    The first Menu of the PRINT RECORDS BY NUMBER routine asks if you want 
to display your list of wines on the screen, or to print it on your 
printer.  If the latter, the screen warns you to turn on your printer.

    Your are then asked to specify which wines are to be printed.  You are 
asked to enter the number of the wine to be printed first, and then are 
asked to enter the number of the wine to be printed last.

    If you only want to print the file on one bottle of wine, then enter 
that number twice, i.e., both for the number of the wine to be printed 
first and last.

    If you specified that you wanted the wines displayed on the screen, 
five wines at a time will be shown.  You can continue the display by 
keying  <RETURN> , or you can return to the Main Menu by typing: M 
<RETURN>.

    If you want to stop the printer, just turn it off.  In a few moments 
the computer screen will show "Device time out ----"   "Hit any key to 
return to system".  Just hit any key, and then type  WC  <RETURN>, and the 
WINE CELLAR program will restart.











                                    8-1
CHAPTER 9.  SUBJECT INDEX


Abbreviation Codes For COMMENTS .....................................  4-2

Correct Your Wine List ..............................................  5-1

Data Fields Defined .................................................  1-1

Delete Listings For Your Wines ......................................  6-1

Enter Data on Your Wines ............................................  4-1

Entering a Case of Wine .............................................  4-1

Floppy Disk (using a) ...............................................  2-1

Hard Disk (using a) .................................................  2-1

How Many Wines Will WINE CELLAR Hold? ...............................  1-2

Line Editor Explained ...............................................  4-1

Main Menu ...........................................................  3-1

Make a Working Copy of WINE CELLAR ..................................  2-1

Organizing Your Wine Cellar .........................................  1-1

Print a List of Your Wines by Number ................................  8-1

Repeating Entries in WINE CELLAR ....................................  4-1

Sample Printout of WINE CELLAR .................................. 1-1, 8-1

Screen Save .........................................................  3-1

Search Your Wine Cellar .............................................  7-1

Stopping Your Printer ........................................... 7-1, 8-1

What if You Break a Bottle of Wine? .................................  6-1












                                    9-1

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2080

     Volume in drive A has no label
     Directory of A:\

    FILE2080 TXT      2295   1-29-90   3:48p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-29-90   4:19p
    WC       EXE     83252  11-14-87   7:19p
    WC1      DAT     20600   9-20-87   9:49a
    WC2      DAT     20600   9-20-87   9:47a
    WC3      DAT      4120   9-26-87   8:40p
    WCMAN    TXT     21488  11-14-87   7:00p
    WCTOTDAT DAT        15   9-26-87   8:40p
    WCVARIAB DAT        99   9-20-87   9:59a
           10 file(s)     153047 bytes
                            3584 bytes free
