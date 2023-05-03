---
layout: page
title: "PC-SIG Diskette Library (Disk #2161)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2161/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2161"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE CARDSHOP"

    Keep all of your favorite baseball cards at your fingertips with THE
    CARDSHOP. THE CARDSHOP is an efficient and easy-to-learn baseball card
    collection database. Organize your baseball card collection by year,
    player name, condition (mint, fair, etc.), card count (four Mickey
    Mantles, three Ted Williams, etc.), type (Rookie, Hall of Fame, etc.)
    and manufacturer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CARD.DOC

{% raw %}
```


                          The CardShop 
                 BaseBall Card Inventory Program
                       by Robert L. Manis


                 Please read all Documentation!


Hardware Requirement  :

               To use The Cardshop, you must have the Following

          * An IBM PC, XT, AT or 100% Compatible
          * An IBM DOS 2.0 or higher
          * AT least 512KB of memory
          * At least Two Floppy Drives (Hard Disk Recommended)
          * A Color or monochrome monitor
          * a printer (assuming you want to print reports)

     Note for large collections we recommend 640K ram.


Changing your Config.sys File:

          * You will need to have your config.sys file to read
            as follows.

               FILES=20
               BUFFERS=20

          
Two Floppy Drive Systems.

          * Take your Master Diskette and Make a Backup copy
          * Copy The Prun File(s) to another formatted diskette
          * Copy all Cardshop files to another formatted diskette

     To run The CardShop ....

          * After you have booted dos Set your path Command to
            Path=A:\;

          * Now put the Prun diskette in Drive  A
          * Place the Cardshop Diskette in Drive B
          * Make B  the Default Drive by entering B:
          * Now type at the B:\>Card    press return

     Follow directions on screen. (Have you read The Manual)

 



Hard Disk System.

          * You may use the install program on The Cardshop disk
            or do the following.

          * Make a subdirectory on drive C   call Card.
            Change Directories by entering  CD\CARD
            When the dos prompt reads  c:\card
            issue the following command  Copy A:*.*

     Please note that on a hard disk system all cardshop files
     and the Prun files should be in the same Directory.

     To start The CardShop at the prompt enter  CARD press
     return.  Follow Directions on Screen. (Have you read the
     Manual)
                             MANUAL

Once you have started The CardShop you will be presented with the
main screen. On this screen you will see nine menu items.

Item # 1 ) Display cards by year:  if you choose this item your
baseball card collection with be displayed with the card year in
the first column of the screen. **** Please note: just above the
first year displayed you will see a flashing cursor. It is at
this point you would type the year your are searching for. As an
example the first year dispayed is 1948, if you were looking for
1989 you would type in at the cursor 1989. The search bar will
move to the first 1989 in the group. Then you may use the arrow
keys to move up or down. ( use the back space key to delete any
mistakes in search parameter.) see ## for more Details.

Please note: The speed at which your search takes place does
depend on the speed of your computer.********************

Once you have found the year you are looking for you may Press
Enter to change that record. When you press Enter you will get
the Update cards Screen.  When Updating cards or Inserting new
cards be sure to fill out the fields according to this method
otherwise your cards will not sort correctly. Method Below.

Year of card: Enter the year with 4 digits.... 1989
Number of card: If the number of the card is 1 or 39 (as an      
                example) you would enter the nummber like this   
                001  or 039  you must use the zeros to allow the 
                program to sort correctly.
                
First name: Ricky
Last name: Jordon
Manufacturer:Upperdk (please see suggested abbreviations)
Condition/Card:Mt (please see suggested abbreviations)
Type of card: SC (Please see Suggested abbreviations)
Number Owned: 3 (use space bar to get to desired position )

After the last entry in the update screen, the database will
adjust your collection by updating the database.

Note the INS  (insert) feature works the same way. 
NOTE the DEL (delete record screen will ask you to press enter to
delete.)

ESC  pressing the escape key will take you back one screen.

Each Additonal DISPLAY menu item works the same Way.

Print Reports: This will Take you to the Print report Menu.
Exit From The CardShop: will return you to the DOS Prompt.

## One more note on the search feature. When you enter a letter
or other character, each one you enter helps to locate your
player.  The best way to see this is picking Display card by
players last name.  You will note that the sample data will be
displayed by  alphabetical order. Now with the Flashing cursor
above the Name Aaron enter the letter  C  , you will see that
the first name found is Canseco. Now each additional letter you
enter would narrow down Who you are Looking for.  Enter  O , you
should have been moved to   Cone. ***

Now Move the Select Bar over the Print Reports Menu Item and
Press return.  The Print reports menu is now Displayed. 

Before printing any reports, first line the top of the page up
with your printers  print head. Then Turn off the Printer and
turn it back on again. This will clear any Stray codes left from
your last Program.

Just as on the Main Menu your records will be printed by the
Selection you Choose from the Menu.  Be sure you have enough
paper to print the entire report  or turn your printer off when
it prints the section you need.

Portable or Laptop computer users....  If your computer uses LCD,
Backlighting or Gas plasma screens you may have Difficulty with
some items. It depends on your particular machine. If this
happens Try using Shift Print Screen to get a copy of the Screen
your having trouble with.   Please Drop me a Line a let me know
what screen and the type of machine you are using.  This program
was written for a color system. I have tried to make it as
compatible as I can, but I only had only Laptop to test it on.








Key Movement..

ESC          -- takes you back one screen
Arrow keys   -- move you up,down,left and right.
Page up      -- move up one screen full.
Page down    -- move down one screen full.
Home         -- Top of current screen
End          -- Bottom of current Screen.
Ctrl Pgdn    -- To the end of the file.
Ctrl Pgup    -- To the Beginning of the file.

Manufacturer Naming Convention.(for filling out Mfg section)
============================================================

Donruss  -- For regular Donruss issue cards.
DonrussR -- For Donruss series  The Rookies

Fleer    -- For regular Fleer issue cards.
FleerU   -- For Fleer Update cards.

Score    -- For regular score issue cards.
ScoreT   -- For Score Traded Sets.
Sptflic  -- For Sportflics  regular issue cards.

Topps    -- For regular Topps Issue cards.
ToppsT   -- For Topps Traded Sets.

GRADING ABBREVIATIONS
=====================

Mt   = Mint
NrMt = Near Mint
ExMt = Excellent Mint
Ex   = Excellent
Vg   = Very good
Gd   = Good
Fr   = Fair
Pr   = Poor

















             Suggested Abbreviation for Type of Card

AAS    = Action All Star (postcard  DR)
ALPC   = American League pitching Leaders
AS     = All Star
ATG    = All time great
CL     = Check List
CC     = Combination Card with 2 or more players(not a team card)
COM    = Command card
COR    = Corrected Card
CY     = Cy Young winner
DK     = Diamond King
ERR    = Error card
FC     = First Card
FDP    = First Draft Pick
HOF    = Hall OF Fame
HRP    = Hot rookie Prospect (upperdeck)
IA     = In Action
LL     = living Legends
MG     = Manager Card
MINI   = Small Card
MVP    = Most Valuable Player
MLP    = Major league prospect (fleer)
NLBL   = National League Batting Leaders
OLY    = Olympic baseball card
PC     = Puzzle card
RB     = Record Breaker
RC     = Rookie Card
RP     = Rookie Prospect
REG    = Regional Card
ROY    = Rookie of the Year
RR     = Rated Rookie (donruss)
SC     = Star Card
SSC    = Super Star Card
STC    = Sticker card
TBC    = Turn Back The Clock
TC     = Team Card
TL     = Team Leader
WS     = World Series Card

These abbreviations maybe used in combination to discribe a
single card.  Abbreviation are Many the above are only
Suggestions If you use different ones just be sure to be
consistent. A good source of abbreviations are the Large Paper
back books that list all baseball cards printed.




```
{% endraw %}

## CARDAD.DOC

{% raw %}
```






				The CardShop
           		Baseball Card Inventory Program
           Copyright 1989 by Robert L. Manis All Rights Reserved


The CardShop is a Baseball card inventory program designed for use by the
baseball card collector and  cardshop owners. The program is menu driven
and very easy to use. The manual for the program is only 5 pages long.

The CardShop is used to keep track of individual baseball cards.

The CardShop will Screen display and Print reports  by the following items.

By the Card Year, By the players Last Name, By the condition of the Card,
By the Number of the Card, By the Number of a particular Card on Hand,
By the Type of Card (Rookie, Hall of Fame, Etc.) and By the Ballball card
Manufacturer.

Please note: The Shareware edition allows only display by manufacturer
and print reports by manufacturer. 
The CardShop will allow searches on each of the above items also. 
The CardShop will use any standard Dot Matrix or Letter Quality printer.
The CardShop will update all records using the Insert key for Adding 
records, The Delete key to remove records and The enter key to Change an
existing record. The  ESC key takes you back one screen at a time.
The CardShop allows storage of records limited only by free disk space 
available.  If you are a Card collector, The CardShop is for you.



.
```
{% endraw %}

## COMMENTS.TXT

{% raw %}
```
====================================================================== 
                   SHAREWARE REVIEWER/WRITER WORKSHEET 
====================================================================== 
 
DISK #7843 

DATE:                    February 1, 1990   
REVIEWER'S NAME:         Linda M. Marek    

PROGRAM TITLE:           THE CARDSHOP
AUTHOR'S VERSION#:       ?        
AUTHOR'S NAME:           Robert L. Manis  
REQUESTED REGISTRATION:  $19.95 
 
 
BRIEFLY DESCRIBE WHAT THE PROGRAM DOES IN YOUR OWN WORDS: 
 
A database to store lists of baseball cards.   

WHO IS IT FOR? 

Anyone who collects baseball cards.
 

IS IT SIMILAR TO ANY OTHER SOFTWARE PROGRAM YOU'VE USED?  Compare: 

Similar to most very basic database programs.


SPECIAL SYSTEM REQUIREMENTS? 

None. 
 
ANY LIMITATIONS? 

None.
   
******* 
RATINGS 
******* 
 
EASE OF USE: (Rate-5 Easiest..1 Hardest) 
 
_5__  COMPUTER KNOWLEDGE REQUIRED JUST TO GET THE PROGRAM STARTED 
_5__  COMPUTER KNOWLEDGE REQUIRED TO USE PROGRAM 
_4__  KNOWLEDGE OF SUBJECT MATTER NEEDED TO USE PROGRAM 
 
QUALITY: (Rate - 5 Exceptional ..1 Awful) 
 
_5_   ERROR HANDLING 
_4_   DOCUMENTATION (Skip if no documentation is required to run.) 
_3_   GRAPHICS QUALITY 
_3_   VALUE FOR THE $$$ 
_3_   OVERALL RATING (Rate - 5 Best..1 Worst) 
 
PERSONAL COMMENTS: 
 
Very easy to use!  This is one of those rare programs you can start using
after spending only a few minutes reading the documentation.  The program
was straight forward and the documentation was ample.  The confirmation
prompt before deleting records was a good error check. 

ADDITIONAL REMARKS or RATINGS: 

Including an install batch file was helpful but need to indicate in the
documentation which batch file to use (e.g. INSTALLC.BAT INSTALLD.BAT
INSTALLE.BAT INSTNET.BAT). 

Simplify the set-up process even further by including an option to update
the buffers and files in the CONFIG.SYS file during INSTALL.BAT rather than
just instructing the customers to add these commands to CONFIG.SYS
themselves.

Increase the search features of THE CARDSHOP by including the abilities to
search using wildcards, operands and conditional logic.

Documentation was straight forward but spelling errors need to be
corrected. 

```
{% endraw %}

## FILE2161.TXT

{% raw %}
```
Disk No: 2161                                                           
Disk Title: The Cardshop                                                
PC-SIG Version: 1                                                       
                                                                        
Program Title: The CardShop                                             
Author Version: 2                                                       
Author Registration: $19.95                                             
Special Requirements: None.                                             
                                                                        
Keep Joe DiMaggio, Babe Ruth and other baseball greats at your fingertip
THE CARDSHOP lets you organize your baseball card collection by year, by
player's name, by condition (mint, fair, etc.), by card count (4 Mickey 
Mantles, 3 Ted Williams, etc.), by type (Rookie, Hall of Fame, etc.) and
manufacturer.                                                           
                                                                        
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
║                 <<<<  DISK #2161 THE CARDSHOP >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: CARD                                            ║
║ (You must have FILES=20 and BUFFERS=20 in your config.sys file)         ║
║ To print documentation, type: COPY CARD.DOC PRN                         ║
║ To install the program to the hard disk, type: INSTALLC                 ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2161

     Volume in drive A has no label
     Directory of A:\

    CARDS    DAT      2017   2-26-89   1:58p
    CARDS    K01      1024   2-26-89   1:58p
    CARDS    K02      1024   2-26-89   1:58p
    CARDS    K03      1024   2-26-89   1:58p
    CARDS    K04      1024   2-26-89   1:58p
    CARDS    K05      1024   2-26-89   1:58p
    CARDS    K06      1024   2-26-89   1:58p
    CARDS    K07      1024   2-26-89   1:58p
    CARDSHOP RUN     28997   3-10-89  10:19a
    PRUN     EXE    254171  10-11-88   2:00a
    CARD     BAT        25   2-24-89  11:07a
    INSTALLC BAT       743   2-26-89   2:16p
    INSTALLD BAT       743   2-26-89   2:12p
    INSTALLE BAT       743   2-24-89  10:46a
    INSTNET  BAT       887   2-24-89  11:06a
    CARD     DOC      8515   3-10-89  10:32a
    README   ONE      1142   3-10-89  11:13a
    CARDAD   DOC      1368   3-12-89  11:50a
    COMMENTS TXT      2316   2-19-90   1:00a
    FILE2161 TXT      1481   4-25-90   5:00p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   4-25-90   5:09p
           22 file(s)     311125 bytes
                            3072 bytes free
