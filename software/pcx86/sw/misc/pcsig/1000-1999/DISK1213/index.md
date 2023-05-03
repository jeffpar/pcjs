---
layout: page
title: "PC-SIG Diskette Library (Disk #1213)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1213/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1213"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DRINKS.DOC

{% raw %}
```



	 PC BARTENDER
	 Version 2.00
	 SHAREWARE



	 PC Bartender was written in 1986 and has since been forgotten 
	 in our files.	When it was re-discovered the documentation 
	 files were missing.  The following provides a quick summary 
	 of PC Bartender's capabilities.  If you should decide to 
	 become a registered user you will receive a copy of the 
	 printed manual (we still have several hundred).

	 To become a registered user send $25 to:


	 HomeCraft
	 P.O. Box 974
	 Tualatin,  OR	97062


	     PC Bartender is fairly simple to use.  Prompts are 
	 provided on each screen to indicate the available choices.









     When the first (Main) menu appears you have four choices.	Push 
     F4 to search for a drink recipe, F5 for the inventory section and 
     F6 for definitions.  We'll discuss each of these.


     Push F4 brings up another menu with four choices.	You can search 
     the recipe files for all drinks (F4); for just cocktails (drinks 
     that contain alcohol); just mocktails (no alcohol); or you can 
     add a drink to the recipe file.

























     If you push F4, F5 or F6 the next menu allows you to select how 
     you want to search for the drink - by name, ingredient, type or 
     based on your inventory.  If you do a search based on the 
     inventory only those drinks that can be made with *just* the 
     ingredients in your inventory will be identified.

     If you search for a name (i.e. Brandy Alexander, Flying 
     Grasshoppper, Gin Buck, etc.) or ingredient (gin, scotch, 
     tequila, etc.) any recipe whose name or ingredient list contains 
     what you enter will be identified as a match.  For example, if 
     you search by name and just enter the letter F to search for, 
     over 30 drinks will be identified ranging from a Fog Cutter to a 
     Southern Freeze.


     When you search for drinks by type a list of types will appear at 
     the bottom of the screen.	Just enter the number that corresponds 
     to the type of drink you want to find.


     When a search is started that drinks that are identified as 
     matching the search criteria will be listed on the screen.      
     To see a recipe push the return key and an arrow will appear on 
     the screen in the upper left.  Use the cursor keys to move this 
     arrow to the drink you want then push enter again.  The drink 
     recipe will appear.

     With the recipe on the screen there are several things you can 
     do.  Pushing the letter "E" allows you to make changes in the 
     recipe.  When you push "E" a second menu line will appear.  Use 
     the up/down cursor keys to move the arrow to the line you want to 
     edit then push the letter "E" again.  You can then enter the 
     corrected information.

     The last line on the screen that the arrow will move to is call 
     "Search for file" and there may be a number after this.  This 
     number is used to link this recipe to another.  The file number 
     for this recipe is shown in the upper right corner.  When you 
     push "M" or "C" to convert to a Mocktail or Cocktail the software 
     displays the recipe stored as the search for file.

     Getting back to the menu line at the bottom of a recipe.  Pushing 
     "D" removes the recipe from that data file.  You can get a 
     printed copy of the recipe by pushing "P."  A second menu can be 
     viewed by pushing "O" for other.






















     On the second menu are prompts that allow you to convert the 
     recipe to metric (or back to english units), and adjust the size 
     of the recipe.

     There may also be a prompt for Cocktail or Mocktail (it only 
     appears when needed).  Pushing "C" or "M" will display the recipe 
     stored in the file number identified as the search for file.  
     This is used to link files together that have mocktail versions 
     of the cocktail.  It allows PC Bartender to convert between the 
     non-alcohol version of a drink and the version with alcohol in 
     it.



     Going back to the Main Menu.  The second item is your bar 
     inventory.  Push F5 to use this function.

     The bar inventory is 3 pages (60 lines) long.  Push the letter 
     "A" to advance through the pages or the letter "P" to print the 
     entire list.

     To make additions or changes to the inventory push the letter 
     "E".  You can then use the cursor keys to move around on the page 
     that is being displayed.  Just type in the new information and 
     push F2 to save it.



     The last item on the Main Menu is the list of Definitions and 
     Substitutes.  Push F6 to use this function.  A list will appear 
     on the screen.  Use the cursor keys to position the arrow next to 
     the item you want information about then push ENTER.




































 the item you want information about then push ENTER
```
{% endraw %}

## FILE1213.TXT

{% raw %}
```
Disk No: 1213
Program Title:  PC BARTENDER version 2.00
PC-SIG version: 1.1

Bring exotica to your next party by serving all those wonderful drinks
with the amazing names you never can remember the next day!
PC-BARTENDER can turn anyone into a talented mixicologist (uh, that's a
bartender) with its directions for mixing hundreds of legendary drinks
such as Brandy Alexanders, Black Russians, Zombies, and old standbys
like eggnog, and mulled wine.

A full featured program, PC BARTENDER helps you learn how to mix almost
any alcoholic and nonalcoholic drinks, suggest drinks, keep inventory
and know what drinks your inventory will make.  PC Bartender tells you
in detail how to mix most any drink and you can easily add new
concoctions.

It boasts nonalcoholic recipes called Mocktails for most drinks.  If you
are overstocked in some mixes or liquors, tell PC BARTENDER.  It will
tell you what drinks can be made from them.

Usage:  Mixing and Inventory of Drinks and Cocktails.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

DINV     DAT  Bar Inventory file.
DRINKS   DOC  Three page manual.
DRINKS   EXE  PC-BARTENDER executable progam.
INTRO    DOC  Introduction text.
MENU     OVL  Overlay file.
OTHER    DOC  Description of other programs by developer.
PRINT    BAT  Prints manual.
READ     ME   First text to read.
RECIPE   DAT  Recipe file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 1213 PC BARTENDER  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type DRINKS (press enter)                         ║
║                                                                         ║
║ To copy the documentation to your printer, type PRINT (press enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INTRO.DOC

{% raw %}
```





				PC BARTENDER
				VERSION  2.00







	       This disk contains version 2.00 of PC Bartender dated
	 07-12-88.  This disk contains the following files:


	       DRINKS.EXE - Main Menu and program
		    *.DOC - Introduction and documentation
	       RECIPE.DAT - Drink recipe files
		 DINV.DAT - Inventory data
		OTHER.DOC - Information about other HomeCraft products





	 ****************************************************************
	 ****************************************************************
	 ****************************************************************





     SYSTEM REQUIREMENTS:  PC Bartender_ will run on an IBM PC, XT,
     AT, PS/2 or compatible with a minimum of 256K of memory.



	 ****************************************************************
	 ****************************************************************
	 ****************************************************************




  ADDITIONAL SOFTWARE

	     Please read the OTHER.DOC file for information about
	 other software from HomeCraft.  We specialize in data base
	 software for collectors - including records, comic books,
	 baseball cards, films/videos, photographs, and books/
	 magazines.  Plus we're developing new data bases weekly.
	 Write us for more information.


	 ***********************************************************
	 ***********************************************************
	 ***********************************************************



  USER-SUPPORTED SOFTWARE

	    This software has been placed in circulation under the 
	 user supported concept.  Non-profit groups and individuals 
	 are encouraged to make copies of this disk and distribute it 
	 to their members and friends as long as the software is 
	 provided at no cost.  A distibution charge of up to $10 may
	 be charged to cover the cost of diskettes, handling and duplicating,
	 if prior written permission is obtained from the author.

	    Under the user-supported concept, you are given a 
	 complete, working software free. If you find you are using 
	 this software, a contribution of $25 is suggested.

	     The contribution will make you a registered user.	As a 
	 registered user you will receive a copy of the printed manual.
	 PC Bartender is considered as discontinued software, however,
	 should sufficient registrations be received we may possible
	 put additional work into it and provide improvements (most
	 likely at no charge to registered users).


	 ***********************************************************
	 ***********************************************************


  DISCLAIMER


	 THIS SOFTWARE IS PROVIDED "AS IS,"  THERE ARE NO WARRANTIES, 
	 EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
	 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A 
	 PARTICULAR PURPOSE, AND ALL SUCH WARRANTIES ARE EXPRESSLY AND 
	 SPECIFICALLY DISCLAIMED.  NEITHER HOMECRAFT COMPUTER PRODUCTS 
	 NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE CREATION, 
	 PRODUCTION, OR DELIVERY OF THIS SOFTWARE SHALL BE LIABLE FOR 
	 ANY DIRECT, INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES 
	 ARISING OUT OF THE USE OR INABILITY TO USE SUCH SOFTWARE EVEN 
	 IF HOMECRAFT COMPUTER PRODUCTS HAS BEEN ADVISED OF THE 
	 POSSIBILITY OF SUCH DAMAGES OR CLAIMS.

	 This disclaimer shall be governed by the laws of 
	 the State of Oregon and shall inure to the benefit of Steve
	 Hudgik, his successors, administrators, heirs and assigns.




	       HomeCraft
	       P.O. Box 974
	       Tualatin, OR  97062








inistrators, heirs and assigns.




	       HomeCraft
	     
```
{% endraw %}

## OTHER.DOC

{% raw %}
```






OTHER SOFTWARE PUBLISHED BY HOMECRAFT:




***************************************************************************
***************************************************************************
***************************************************************************

THE COLLECTORS SERIES


All of the software in the collector's series has been specifically
designed for a certain type of collection.  Each allows you to catalog
your collection using 21 different characteristics and you can perform
searches based on any combination of the information you've entered.

This series is unique in that each of the programs provides three levels
of operation providing screens for beginning collectors through professionals.
You can change from one level two another via a selection on the main menu.

All of the software in the collectors series has been designed so your
computer does all the work - and it's easy for you to learn and use.  Over
half of our users purchased their first computer so they could use one of
the programs listed below.

The following programs are a part of the collectors series:


	FOR RECORD COLLECTORS (LPs, 45s, CDs, cassettes, etc.)
	FOR RECORD COLLECTORS - CLASSICAL MUSIC VERSION
	BOOK MINDER (Books and magazine articles)
	FOR COMIC BOOK COLLECTORS (comic books)
	FOR PHOTOGRAPHERS (Slides, negatives and prints)
	THE VIDEO VEWER (Video tapes & laser disks)
	FOR BASE BALL CARDS
	THE INFORMATION INDEX (Misc. information such as
	  recipes, dieting instructions, jokes, trivia,
	  exercise instructions, etc.).


Plus there's more collector's software on the way!



















***************************************************************************
***************************************************************************
***************************************************************************

HOME FINANCIAL SOFTWARE


Home Money Manager II - Checkbook and budgeting software designed specifically
			for the home user.  In addition to being able to
			provide the normal features that most home accounting
			has, HMM-II has several unique features.  For example,
			in addition to split entries, you can also split
			your checking accounts; each portion of a split entry
			can have its own memo; there are four editors that
			allow you to make changes at any time; and HMM-II
			automatically adjusts itself for use with any micro-
			computer printer (including laser printers set for
			66 lines per page).

			HMM-II prints checks, tracks up to 12 checking accounts
			on a floppy disk (plus 12 credit accounts), can handle
			ATM and telephone transactions, provides over 950
			expense catagories, and allows tracking of tax
			deductible expenses.


Home Loan (The Financial Calculator) - Home Loan not only calculates the
			monthly payment for nearly any type loan, it
			provides tables showing the effects of various loan
			options at a glance.  Calculation of amortization
			tables, the value of an annuity, present value, and
			future value are also provided.  In addition, Home
			Loan has special sections to help plan for your
			retirement, calculate the value of your IRA, plan
			for your children's college expenses and to do
			equity calculations for your home.


Home Insurance (Home Inventory and Insurance Planning) - provides a way for
			you to keep track of what you own, where it is
			located, what it cost, and any identifying marks.
			Home Insurance uses the same user interface as the
			collectors series and thus each item in your
			inventory can be cataloged using any of 22 
			characteristics (serial #, model #, color, etc.)

			Home Insurance also provides several other features
			to help with your insurance planning.  A life
			insurance estimator will take your current financial
			status and your future plans, and calculate the
			amount of life insurance you need.  An insurance
			records file provides a convient place to store
			vital information about your insurance policies.


Personal Asset Manager (tm) - Combines all three of the above into a single
			integrated system.








***************************************************************************
***************************************************************************
***************************************************************************


EDUCATIONAL


Play 'n' Learn - combines 6 education games (plus an additional 12 variations)
		 for very young children - ages 18 months to 4 years.  These
		 games include:

		 Amanda's Letter Lotto > learn the alphabet
		 Zach-A-Doodle > Etch-A-Sketch type game
		 Color Screen > a very simple game that changes screen colors
		 Color Match > learn colors and the alphabet
		 Word Whirl > learn about words and names
		 Next Number > learn numbers 1-9
		 Black Board Shapes > learn to match shapes


		 The Play 'n' Learn games are also designed to help your
		 learn about using computers.  They teach skills ranging
		 from just getting a response from pushing any key, to
		 multiple key combinations and making menu selections.



COMING SOON - Play 'n Learn II, educational games for children
	      3 to 5 years old.  Your support of Play 'n' Learn, shown
	      by becoming a registered user, will help speed the
	      development of Play 'n' Learn II.

































***************************************************************************
***************************************************************************
***************************************************************************


HOME PRODUCTIVITY


Software in this catagory will be released in 1989 and will include
HOLIDAY MANAGER to help with sending cards for the holidays and
special occassions.



***************************************************************************
***************************************************************************
***************************************************************************


For more information on any of the above write to:


		HomeCraft
		P.O. Box 974
		Tualatin,  OR  97062























If you missed any of the information, push CTRL NUM LOCK to pause the
screen and any other key to restart it.










u missed any of the information, push CTRL NUM LO
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1213

     Volume in drive A is DISK1213
     Directory of A:\

    DINV     DAT      3840   7-12-88   4:54p
    DRINKS   DOC      5120  11-24-89  10:04p
    DRINKS   EXE    125866   7-12-88   8:32p
    FILE1213 TXT      1576   1-09-89   9:29a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  11-04-88  11:13a
    INTRO    DOC      3712  10-28-88  11:09p
    MENU     OVL       150  12-06-88  10:04a
    OTHER    DOC      6528  10-28-88  11:01p
    PRINT    BAT       384   7-12-88   8:05p
    READ     ME        256   7-12-88   5:13p
    RECIPE   DAT     74496
           12 file(s)     222506 bytes
                           94208 bytes free
