---
layout: page
title: "PC-SIG Diskette Library (Disk #3198)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3198/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3198"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library.  Every shareware program we have is on one disc; over
700 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.

The Narc utility, newly instituted with the tenth edition, allows you to
look directly at all the compressed program files on the CD without
having to download the program to your hard disk.  So if you want to
look at the programmer's notes or on-line documentation before using
valuable hard disk space, you can.

The PC-SIG Encyclopedia of Shareware is included on the disk, and a
printed copy of the book is included so you can peruse the available
programs from the comfort of your favorite chair.  All the programs are
logically divided into one-hundred twenty categories making it easier to
find just the right software.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.





T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed

by title, filename, PC-SIG disk number, and every word in the program
description.  A new utility, Narc, is implemented so you can look at the
program files and the author's on-line documentation without having to
first copy the program to your hard disk.  By using WordCruncher and
Narc, you can quickly find the program you want and review it to be
sure, without ever having to run it from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.



To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

```
{% endraw %}

## IMPORT.DOC

{% raw %}
```




                       MEAL-MASTER IMPORT FILE SPECIFICATIONS


       The Meal-Master import function was only designed to import recipes
       previously exported from the program.  However, the export format is a
       simple text file that can be created by most text editor programs.
       Many people have found that recipes from other sources can be edited to
       look like a MM export file, allowing them to be imported to MM with
       little or no retyping.  All it takes is some patience, some practice,
       and an understanding of exactly what the import process is expecting.
       This file won't help with the first two, but here is a description of
       what the program expects to see in an importable file:

       FIXED FORMAT (LINES 1 THROUGH 6)

         Line 1  The first line of a valid recipe is a "recipe header" line.
                 This line must begin with at least 5 hyphens ('-----'), and
                 must contain the words "Meal-Master" somewhere on the line.
                 Any lines found prior to this "recipe header" line will be
                 ignored by Meal-Master.

         Line 2  Must be blank.

         Line 3  The word "Title:" must begin the line, in any position, and
                 followed by one blank space.  The recipe title must start
                 after the blank space, and may be a maximum of 60 characters
                 in length.

         Line 4  The word "Categories:" must begin the line, in any position,
                 and followed by one blank space.  A maximum of 5 category
                 names may be entered, beginning after the blank space.  Each
                 category MUST start with a capital letter, and all remaining
                 letters must be lower case.  The names must be separated by
                 one, and only one, space.

         Line 5  The word "Servings:" should start the line, but is not
                 required.  A numeric quantity between 1 and 9999 must appear
                 somewhere on this line.

         Line 6  Must be blank.

       VARIABLE FORMAT - LINES 7 AND GREATER

         Beginning with line 7, Meal-Master will attempt to identify each line
         as being an ingredient line, direction line, or the "end of recipe"
         trailer line.

         If a line is found that starts with 5 hyphens, and contains no
         characters other than hyphens and spaces, the program considers this
         the "end of recipe" trailer line.  It will store the current recipe
         and begin searching for another "recipe header" as described in "line
         1" above.

         If all the following are true, the line will be interpreted as an
         ingredient and loaded into Meal-Master:

            1) Positions 9-10 contain one of the valid Meal-Master unit of
               measure codes.  (see list in program or user's manual)



            2) Positions 1-7 contain a valid numeric quantity, either
               expressed as a whole number, decimal fraction, or common
               fraction.

            3) Positions 12-39 contain text for an ingredient name.

         If the line does not qualify as an ingredient line or end of recipe
         line, as specified above, data in positions 3-77 (or 1-75 if
         positions 1-2 are non-blank) will be imported as a direction line.

       Files can contain multiple recipes, so long as each begins with a
       "header line" and ends with a "trailer line".  Any text in the file
       that is not between the header and trailer lines is ignored.

       NOTE:  THIS SPECIFICATION IS ONLY VALID FOR MEAL-MASTER VERSION 6.21
              AND HIGHER, AND WILL NOT WORK PROPERLY WITH EARLIER VERSIONS.
              PLEASE OBTAIN VERSION 6.21 OR GREATER FOR PROPER RESULTS!
```
{% endraw %}

## MMQUICK.DOC

{% raw %}
```





                      ****************************************
                      *                                      *
                      *              MEAL-MASTER             *
                      *       Quick-Start Instructions       *
                      *                                      *
                      ****************************************


          ***  WELCOME TO MEAL-MASTER!  ***

          Thank you for trying Meal-Master.  Meal-Master is a menu-driven
          database system tailored to manage recipes.  It will help you
          store, update, and print your recipes in a variety of formats.
          But the real power of Meal-Master lies in its search and utility
          functions!

          You can search for recipes using any combination of Title,
          Category, or Ingredient criteria.  Imagine being able to find all
          the recipes that can be made with a certain ingredient!  Plus,
          just change the number of servings a recipe makes, and all the
          individual ingredient amounts will be adjusted automatically!

          To help in entire menu preparation, you can "mark" recipes as you
          select them.  Then activate the Shopping List function and
          Meal-Master will locate the ingredients for all the marked
          recipes, total the quantities of like items, and print a shopping
          list!

          Other features allow you to print a recipe index by title or
          category, "batch" print a set of recipes, or "extract" recipes to
          a standard DOS file, so you can use them in a word processor or
          upload them to a bulletin board system.  Extracted recipes can
          also be "imported" back into Meal-Master without retyping -
          making recipe exchange with other Meal-Master users a real snap!

          Meal-Master not only replaces the dog-eared, disorganized
          collection of index cards found in most kitchens, it provides a
          valuable tool for meal selection and preparation!


          ***  REQUIRED EQUIPMENT AND CONFIGURATION  ***

          Meal-Master should run on any IBM-PC, PC-XT, or 100% compatible
          with at least 384k of memory.  It will run on floppy or hard disk
          systems, with either a color or monochrome monitor.  (A FILES=xx
          statement is required in your CONFIG.SYS file, where xx is at
          least 12)






                                       Page 1


          Meal-Master Quick-Start

          ***  CAPACITY  ***

          Meal-Master can be used to create one or several Meal-Master
          databases.  Each database must be located on a separate disk or
          subdirectory, and is capable of storing several thousand recipes,
          subject to available disk space.  Each recipe is limited to a
          combined total of 100 direction lines and ingredients.

          On the average, you can expect to store about 300 recipes on each
          360k disk, 600 on each 720k disk, 1200 on each 1.44mb disk, and
          several thousand on a large hard disk.  The actual number will
          depend upon the average size of the recipes you create.


          ***  STARTING THE PROGRAM  ***

          To start using Meal-Master, you need only the program file, named
          MM.EXE.  When you type "MM" and press return, Meal-Master should
          begin running.

          Meal-Master stores your recipes in three files:  INDEX.MMF,
          INGRED.MMF, and DIRECT.MMF.  It uses a fourth file, PARM.MMF, to
          store information such as what kind of forms you are using on
          your printer.  Finally, a fifth file named CATFILE.MMF is used to
          store a list of valid recipe categories.  If any of these files
          are not found when Meal-Master starts, they are created
          automatically.  This makes Meal-Master very easy to install:
          Just copy the MM.EXE file to the diskette or hard disk directory
          of your choice, type MM, and press return.  Meal-Master will ask
          you for the operating parameters it needs to build the PARM.MMF
          file, then create a new recipe database.

          IMPORTANT NOTE: If you have been using a previous version of
          Meal-Master (or Meal-Meister), with a version number less than
          5.01, then your current working disk or hard drive directory will
          contain the file MM.COM.  The presence of this file will prevent
          the current version from running.  You will need delete MM.COM
          (or move it to another directory) before attempting to use the
          current program's MM.EXE file.  Recipe files created with
          previous versions are still fully compatible with the current
          program.

          Also, for Meal-Master to run properly you must have the file
          CONFIG.SYS in the root directory of the disk you boot from, and
          it must contain a "FILES=xx" statement, where "xx" is at least
          (11).  If not, some Meal-Master functions will not operate.

          If you're in a hurry to see how some of Meal-Master's advanced
          features work, you can try it out with the sample recipe database
          provided.  Make sure that the provided INDEX.MMF, INGRED.MMF,
          DIRECT.MMF, PARM.MMF, and CATFILE.MMF are on the same disk and


                                       Page 2


          Meal-Master Quick-Start

          directory as the program files before starting Meal-Master.  Then
          try out the search, shopping list and batch print options.  You
          can keep these recipes and add to them, or delete the files and
          start your own database.


          ***  USING THE DATABASE  ***

          Meal-Master is completely menu driven and very easy to use.

          ADDING RECIPES
          --------------
          Selecting 'A' from the main menu allows you to add new recipes to
          the file.  You will be prompted for the title, categories (each
          recipe can reference up to five categories), and number of
          servings.  When asked for categories, a window will be displayed
          containing all the valid category names (If more than one page of
          names exist, the PGUP and PGDN keys will move through the
          categories; and category names can be changed, added, or deleted
          from the Maintenance/Setup menu). You can highlight the desired
          category names using the up and down arrow keys, or type the
          names in directly.

          Next, Meal-Master will display the ingredient screen.  To insert
          an ingredient, press the "I" key.  A new line will be inserted,
          and you will be prompted first for the ingredient quantity, then
          the unit of measure, and, finally, the ingredient name.

          The quantity can be entered as either a common fraction (i.e.,
          1/2) or as the decimal equivalent (i.e., 0.5), but will be
          displayed in the format selected on the Maintenance/Setup Screen
          (MM comes setup to display common fractions; if you want to see
          decimal equivalents, simply change the format option on the
          Maintenance/Setup Screen).  The quantity field will also accept
          an "H", to allow a heading to be entered for a group of
          ingredients.  When you have entered the quantity, press the
          return key to move on to the unit of measure field.

          While the cursor is in the unit of measure field, a window will
          be displayed listing the valid codes you may use.  Use the page
          up and page down keys to view the list.  You may select a unit of
          measure from the list by highlighting it with the up and down
          arrow keys, or you can type the value in directly.  After
          selecting a valid code, press the return key to move on to the
          ingredient name field.

          Enter the ingredient name and press return to complete the
          ingredient entry.  Press "I" and repeat the above steps for each
          ingredient you wish to add.  When finished entering ingredients,
          pressing the ESC key will proceed to directions entry.



                                       Page 3


          Meal-Master Quick-Start

          Recipe directions are added similar to ingredient entry - simply
          press the "I" or "Insert" keys to create a new line, enter the
          line of text, then press return.  In addition, there is a
          complete "word-wrap" feature available.  If you continue typing
          past the end of the line, the cursor will automatically break
          between words and continue on the next line.  There are also
          functions available to split a line, or to reformat paragraphs.
          A legend of keys and their functions is displayed at the bottom
          of the directions window.  When all directions have been entered,
          press the "ESC" key again.

          If you make a mistake and wish to delete an ingredient or a line
          of direction text, use the up/down arrow keys to position that
          line to the center of the display window, then press the F10 key.


          SEARCHING FOR RECIPES
          ---------------------
          Selecting 'S' from the main menu takes you to the heart of
          Meal-Master.  Here you can specify search criteria find the
          recipes that match.  You can instruct Meal-Master to select only
          those recipes that:

          a)  Contain a certain word or phrase in their title;
          b)  Reference a certain category (i.e., "Soups" or "Main
              Dishes");
          c)  Use a specific ingredient;
          d)  A combination of the above three criteria.

          Once you have entered your search criteria, pressing "S" will
          start the search.  The number and title of each recipe that
          qualifies will be listed.  If you start the search without
          entering any search criteria, all recipes in the file will be
          listed.  You may also use the PgUp and PgDn keys to page forward
          and backward through the list of recipes found.

          LISTING, REVISING, and MARKING
          ------------------------------
          Recipes found by the search function will be followed by a prompt
          asking if you wish to List, Revise, or Mark any of them.

          If you type "L" at the List/Revise/Mark prompt, you will be asked
          to indicate which recipe you want to list.  You may select a
          recipe from the list using the up and down arrow keys, or type in
          the number directly.  Next you will be asked if you wish to list
          the recipe to the screen or on your printer.  If you select the
          printer, the recipe will be printed using the parameters
          specified in the "Maintenance/Setup" section of the program ('M'
          from the main menu; there you can specify what size and type
          forms you are using for Recipe printouts and for Listings, and
          specify special printer controls).


                                       Page 4


          Meal-Master Quick-Start


          If you type 'R' at the List/Revise/Mark prompt, you will be asked
          to indicate which recipe you want to revise.  You may select a
          recipe from the list using the up and down arrow keys, or type in
          the number directly.  This will take you to the Revise menu for
          the selected recipe.  From here, you can update the selected
          recipe title and category list; add, delete or revise ingredients
          and directions; or change the number of servings.  When
          changing the number of servings, Meal-Master will ask if you want
          the ingredient quantities adjusted.  If you answer yes, Meal-
          Master will adjust all the ingredient quantities in the same
          proportions as the serving size change you have made!

          You can also 'Remove' a recipe from the file.  When you use this
          option, the recipe is not really deleted, but just marked as
          removed.  The recipe can still be seen in searches and can be
          'Restored' until it is permanently deleted by use of the Rebuild
          option on the Maintenance menu.  This gives you a "second chance"
          in case you accidentally delete a recipe!

          If you type an 'M', a prompt will ask which recipe you want to
          mark.  You may select a recipe from the list using the up and
          down arrow keys, or type in a number directly.  Once you have
          marked some recipes, you can use the 'Shopping List' and 'Batch
          Print' features on the Utilities Menu. These options only process
          marked recipes, allowing you to quickly print several selected
          recipes, or produce a consolidated list of ingredients to use as
          a shopping list!


          ***  IMPORT/EXPORT FEATURE ***

          A very useful feature of Meal-Master is its ability to export and
          import recipe files.  These options allow you to move recipes
          between the Meal-Master database and standard DOS files, allowing
          easy exchange of recipes between Meal-Master users.  Hundreds of
          recipes are available in Meal-Master export format, and
          conversion programs are available to convert other popular
          formats into Meal-Master format.  Recipe files can be found on
          many electronic bulletin board systems, and on the Compuserve
          Information System.  By acquiring these files and importing them
          into Meal-Master, you can build a large recipe database with
          little or no typing!


          ***  SHOPPING LIST  ***

          After using the Search feature to "Mark" several recipes, the
          Shopping list function can be selected from the Utilities menu.
          The ingredients from each marked recipe will be extracted and
          combined into one list, sorted alphabetically.  Quantities of


                                       Page 5


          Meal-Master Quick-Start

          ingredients that occur on multiple recipes will be combined, and
          their unit of measure automatically converted when needed.


          ***  COMMON PROBLEMS  ***

          The most commonly reported problem with Meal-Master is caused by
          taking an "installed" copy from one machine and putting it on
          another.  Meal-Master records information about your setup in a
          file called PARM.MMF, and this file should not be moved between
          machines.  The distribution copy of MM released by us purposely
          does not have this file included, so that the program will create
          one for your machine.  Unfortunately, since MM is Shareware, it
          is often distributed to Bulletin Board Systems and Shareware
          Distributors by users that accidentally include their own
          PARM.MMF file.  If you are having trouble with Meal-Master on
          your machine, try deleting the PARM.MMF file and running the
          program again.

          Meal-Master will work with any "100% PC Compatible" machine. Some
          machines, particularly certain Tandy and ATT models, use a video
          architecture that is not fully PC compatible.  If MM does not run
          on your machine, and you suspect a video incompatibility, try
          starting the program with "MM /C" to see if this solves the
          problem.  This will solve some display adapter conflicts,
          although it also makes the program run somewhat slower.

          ***  MORE HELP  ***

          These brief instructions and some experimentation should get you
          started using Meal-Master. If you decide to keep and register
          Meal-Master, you will receive a comprehensive user's manual with
          over 70 pages describing Meal-Master's many features.  As a
          registered user, you will also receive top priority technical
          support should you have questions or problems that need our help.


          ***  REGISTERING MEAL-MASTER  ***

          Meal-Master is shareware.  That means it is not free, but you get
          a chance to "try-before-you-buy".  If you like Meal-Master, and
          decide after trying it to keep and use it, you should register.

          Registered users receive a registered master disk with the latest
          version of Meal-Master and the user's manual.  The user's manual
          is professionally typeset and bound, with over 70 pages of
          description, examples, and a helpful index.  Registered users are
          given complete technical support, and receive discounted upgrade
          offers on future releases.




                                       Page 6


          Meal-Master Quick-Start

          In addition, several utility programs for Meal-Master are
          provided to registered users.  These utilities will allow you to
          customize Meal-Master's text and background colors, do global
          search and replace operations on recipe categories, and see
          statistics about your recipe database, including analysis and
          projection of how may more recipes can be entered based on the
          average size of your existing recipes.  These utilities are not
          shareware, and are provided only to registered users.

          To register, and receive the latest version of Meal-Master, along
          with the complete user's manual and utility programs, simply send
          a check or money order for $35.00 in U.S. funds (Washington state
          residents must add 7.8% sales tax; shipping is included in the
          U.S. and Canada, others add $5.00) to:


                                   Episoft Systems
                                     Suite #143
                                 10121 Evergreen Way
                                 Everett, WA  98204

































                                       Page 7
```
{% endraw %}

## NEW610.DOC

{% raw %}
```
WHATS NEW IN VERSION 6.1 OF MEAL-MASTER:

Additional unit codes for volume and weight have been added, including full
support for common metric measures.  Metric units now include milliliter (ml), 
cubic centimeter (cc), centiliter (cl), deciliter (dl), liter (l), 
milligram (mg), centigram (cg), decigram (dg), gram (g), and kilogram (kg).
Common U.S. units now include teaspoon (t or ts), tablespoon (T or tb), 
fluid ounce (fl), cup (c), pint (pt), quart (qt), gallon (ga), ounce (oz),
and pound (lb).  Automatic conversion between unit types is provided, 
including conversion between U.S. and Metric units.

Additional item units have also been added.  Item units now include each (ea),
can (cn), package (pk), pinch (pn), drop (dr), dash (ds), and "as required." 

When entering or revising an ingredient, the unit of measure can now be 
selected by highlighting the desired unit on a list.  Previously, the list
was displayed but the unit name had to be typed in manually.

Category names can now be chosen by highlighting them from a list, rather than
typing the category name.  This applies to new recipe entry, revisions, and 
when specifying a category on the search specification screen.

The list of recipes resulting from a search can now be paged forward AND
backwards.  In previous versions, the list could only be paged forward. 

When specifying a recipe to be marked, cleared, listed or revised, the recipe
can be chosen by highlighting it on the search results list.  Previously, the
number of the recipe had to be typed in manually.

After completion of a list or revise operation, the program returns to the 
search results list at the same point where the list or revise operation was
started.  Previously, the program returned to the search menu, requiring the
search to be repeated to list or revise additional recipes.

Searches can now be interrupted, then restarted where the interruption was
made.  While interrupted, recipes listed to the point of interruption can
be listed or revised, then the search can be continued or cancelled.  
Previously, when a search was interrupted the program returned to the
search menu.

When printing recipes, the automatic top-of-forms to the next page can now be
suppressed by specifying 999 for the number of lines per page.  This will allow
multiple recipes to be printed on the same page if desired.

A new option on the Maintenance menu allows recipes to be resized dynamically
at the time they are listed or printed.  The "Serving size on Lists" option is
toggled between "As Stored" and "Prompted" using the "S" option on the 
Maintenance menu.  When set to "As Stored" recipes are listed using their 
stored servings value.  When set to "Prompted" a secondary menu is displayed
when a recipe list is requested, allowing a different serving size to be 
specified.  This different size is used only for the list operation, and does
not affect the recipes stored serving size.  

Marked recipes now remain marked when the program is exited.  Marks are cleared
only when the Erase option is chosen on the Search menu.  Previously, marks 
were not retained when exiting the program.

Additional error messages have replaced some of the cryptic error "codes" from
previous versions.

Additional internal buffering has been added to search, index, shopping list
and file rebuild features, making significant speed improvements in these
operations.

Some minor "bugs" have been exterminated.


```
{% endraw %}

## NEW620.DOC

{% raw %}
```
WHATS NEW IN VERSION 6.20 of MEAL-MASTER

          SPECIAL EXPORT FORMAT FOR PRODIGY (tm) Users
          --------------------------------------------
          A special extract format has been added for users of the Prodigy
          (tm) online service.  This format is compatible with direct
          upload and download for users exchanging recipes via the Prodigy
          service.  The "Extract Recipe Format" option on the Maintenance
          Menu allows choosing the "Normal" extract format or the new
          "Special *P" format for Prodigy.  More information on exchanging
          recipes via Prodigy can be found in Prodigy's "Food and Wine" club, 
          under the "Food Forum" subject.

          Note: Prodigy is a registered trademark of Prodigy Services
          Company.


          CONVERSION UTILITY FOR COMPUCHEF (tm) RECIPES
          ---------------------------------------------
          A conversion utility program, CC2MM.EXE, is provided to convert
          recipes in the CompuChef v1.5 export format to Meal-Master import
          format.  Recipes are first exported from CompuChef to form a
          CompuChef Export file, then CC2MM is used to convert that file
          into a Meal-Master import file, then Meal-Master is used to
          actually import the file.

          Note: CompuChef is a trademark of Hillstepper Software.


          IMPORT FORMAT RELAXED, ERROR MESSAGES ADDED
          -------------------------------------------
          For users that are using a word processor to prepare recipes that
          match the Meal-Master Import format, that format has been made
          easier than before.  In addition, errors are analyzed and
          displayed on-screen to aide in resolution.  See the file
          "IMPORT.DOC" for import file specifications.


          AUTOMATIC DUPLICATE REJECTION ON NON-STOP IMPORT
          ------------------------------------------------
          A new import option has been added to allow mass-import of
          recipes with automatic rejection of titles that already exist in
          the database.  Selecting the "D)Nonstop w/Check" option when
          importing will check each recipe against the existing database
          and not import those that already exist.  Optionally, a file
          named IMPORT.LOG can be created to provide a history of which
          recipes were rejected.


          SUPPRESSION OF "AS REQUIRED" QUANTITY AND UNIT
          ----------------------------------------------
          Ingredients with an "As Required" quantity (Quantity=1, Unit of
          Measure = x) are now shown on lists with a blank quantity and
          unit field.


          OVERRIDE OF CATEGORY ERROR ALLOWED
          ----------------------------------
          Previous versions of MM would not allow entering a recipe
          category that was not on the category list.  Now an error message
          is generated warning that the category is not on the list, but
          you are allowed to override the error and enter the category
          anyway if desired.


          IMPORT MENU REWRITTEN
          ---------------------
          The Import Menu has been rewritten for easier use.


```
{% endraw %}

## NEW621.DOC

{% raw %}
```
WHATS NEW IN VERSTION 6.21 OF MEAL-MASTER  IMPORT FORMAT RELAXED FURTHER -----------------------------
          The first two lines of a recipe being imported require the keyword
          "Title: " in front of the title, and "Categories: " in front of the
          categories.  Prior to v6.21, these had to be in specific columns, 
          and with 6.21 they can occur in any column.  

          Prior to v6.21, the line following the Categories line had to begin
          with the keyword "Servings:".  With v6.21, Meal-Master will scan
          the entire line, ignoring any non-numeric characters, to find the
          serving quantity.  The keyword is no longer required, and the 
          serving quantity can appear anywhere on the line.
          
          Prior to version 6.21, direction lines had to begin in position 3.  
          With 6.21, direction text can begin in position 3 (as with exported
          recipes) or in position 1.


          SEARCH MENU REORGANIZED
          -----------------------
          Items on the search menu have been resequenced to place the "display
          marks" and "erase marks" options on the same line.

        
          MULTIPLE INGREDIENT SEARCH ADDED
          --------------------------------
          You can now search for only those recipes that contain several
          specific ingredients.  For example, entering "Beef and Cheese" as
          the ingredient search criteria would return only those recipes that
          contain BOTH Beef and Cheese as ingredients.  
          (Note: Since Meal-Master performs a substring search, recipes with
          variations of Beef and Cheese will also be found.  For example, a
          recipe containing the ingredients "Roast beef" and "Cheddar Cheese"
          would qualify for the above search example.


          EXPORT FROM SEARCH AND REVISE MENUS
          -----------------------------------
          Access to the Export function has been added to the Search list
          and Revise menus.  Selecting "E" from either of these menus allows
          you to export a recipe without returning to the Utilities menu.


          REVISE MENU REORGANIZED
          -----------------------
          Along with the addition of the Export option, the Revise menu
          has been reorganized to make options easier to find.


          DYNAMIC UPDATE OF CATEGORY LIST
          -------------------------------
          When adding or revising a recipe which contains a cateogory that
          is not on the valid category table, you now have the choice of 
          ignoring the error and keeping the category on that recipe, 
          revising the category to another value, or immediately adding that
          category to the valid category table.  It is no longer required to 
          exit the recipe, go to the maintenance menu, and add the category
          there. 
  

  
        
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3198

     Volume in drive A has no label
     Directory of A:\

    FIN110   ZIP     51707   2-28-92   4:29p
    MM621C   ZIP    118232   2-25-92   3:19p
    GO       EXE     57040   2-06-92   2:16a
    GO-FORM  DAT      2987   3-13-92  11:17a
    GO-STRT  DAT       550  10-15-92  12:55p
    CDROM    TXT      3693   1-21-92   6:10a
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    PKUNZIP  EXE     23528   3-15-90   1:10a
            9 file(s)     261909 bytes
                           57344 bytes free
