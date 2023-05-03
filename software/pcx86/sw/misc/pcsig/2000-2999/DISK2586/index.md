---
layout: page
title: "PC-SIG Diskette Library (Disk #2586)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2586/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2586"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2586.TXT

{% raw %}
```
Disk No: 2586                                                           
Disk Title: The Better Diet Analyzer                                    
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: The Better Diet Analyzer                                 
Author Version: 2.04                                                    
Author Registration: $24.95                                             
Special Requirements: 384K RAM and hard disk recommended.               
                                                                        
Have you been advised to be keep an eye on your calorie, fat,           
cholesterol, and/or sodium consumption?  Or, are you the lucky one who  
monitors someone else's diet?                                           
                                                                        
THE BETTER DIET ANALYZER is an interactive nutritional database with    
records on more than 1,000 foods, including packaged brands and fast    
food restaurant menu items.  All data gathered is from U.S. government  
sources and food manufacturers/vendors.  Users can track calories, fat, 
percentage of calories from fat, cholesterol, and sodium, as well as    
their weight.  Personal logs, with daily lists, daily summary, and a    
weekly summary can be kept indefinitely.                                
                                                                        
THE BETTER DIET ANALYZER is extremely fast, flexible, and easy to use.  
There is no need to remember or enter food categories.  For instance, if
the user enters "cheese," THE BETTER DIET ANALYZER instantly displays a 
list of data records containing the word "cheese."  The desired entry   
can be highlighted and chosen.  To find the nutritional content of a    
"Big Mac," just type "Big Mac" (or "big mac" -- the program is not case 
sensitive).  THE BETTER DIET ANALYZER has one of the most extensive     
databases available in popular diet software, including those that      
nutrition-conscious individuals may want to avoid!  Moreover, THE BETTER
DIET ANALYZER's database is user-expandable.  Add your favorite foods...
if you so dare!                                                         
                                                                        
THE BETTER DIET ANALYZER can handle up to approximately 9,000 day's     
worth of dietary summaries.  Though detailed daily diet lists are kept  
by the program for only seven days, each day's list automatically       
generates a daily summary (the total of the day's calories, fat,        
cholesterol, and sodium consumption, plus your weight, if entered) which
is maintained indefinitely.  And the lists don't have to be lost        
forever.  Data can be printed to an ASCII file where the report can be  
formatted and printed.                                                  
                                                                        
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
║        <<<<  PC-SIG Disk #2586  THE BETTER DIET ANALYZER  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To read the preliminary documentation and installation instructions,   ║
║  type:  README  (press Enter)                                           ║
║                                                                         ║
║  To print the program manual, type:  COPY MANUAL.DOC PRN  (press Enter) ║
║                                                                         ║
║  To install THE BETTER DIET ANALYZER, type:  INSTALL  (press Enter)     ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```






          
          
          
          
          
          
          
          
          
                                The Better Diet Analyzer
                 A computer tool for analyzing and monitoring your diet
                                 For PCs and compatibles
                                       User Manual
                        Copyright 1990, 1991 by Syntonic Software
          
                                        CONTENTS
          
          1. System requirements  . . . . . . . . . . . . . . . . . . . . 3
          2. Installing . . . . . . . . . . . . . . . . . . . . . . . . . 3
          3. Entering meals . . . . . . . . . . . . . . . . . . . . . . . 3
          4. Keeping daily lists  . . . . . . . . . . . . . . . . . . . . 6
          5. Making weekly summaries  . . . . . . . . . . . . . . . . . . 7
          6. Saving and retrieving files  . . . . . . . . . . . . . . . . 8
          7. Printing . . . . . . . . . . . . . . . . . . . . . . . . . . 9
          8. Adding to and editing the main database  . . . . . . . . . . 9
          9. Hints on searching for foods . . . . . . . . . . . . . . . .10
          10. Using the pop-up calculator . . . . . . . . . . . . . . . .11
          11. Special features. . . . . . . . . . . . . . . . . . . . . .12
          12. Using MAKETAB.EXE . . . . . . . . . . . . . . . . . . . . .12
          13. Hot keys  . . . . . . . . . . . . . . . . . . . . . . . . .13
          14. Order/registration form . . . . . . . . . . . . . . . . . .14
          
          
          
          
          





















                                          1








               The Better Diet Analyzer is a shareware program. That means
          it is distributed free, or for a nominal fee -- but it does NOT
          mean the program is free. You may copy the program for your own
          and others' evaluation. If you find The Better Diet Analyzer
          useful, please register the program with Syntonic Software. The
          fee for registration is $24.95. Registration entitles you to user
          support, the latest version of The Better Diet Analyzer, and one
          free upgrade, when avaiable, including an expanded database of
          foods. Registered users will also be offered future upgrades,
          beyond the one free one, at a reduced price. While you are free
          to copy The Better Diet Analyzer for your own and others'
          evaluation, you are explicitly prohibited from altering the
          program or its documentation in any way and from charging any fee
          for it without written authorization from Syntonic Software.
               To register The Better Diet Analyzer, use the registration
          form included at the end of this documentation.
               If you have any questions, comments or suggestions
          concerning The Better Diet Analyzer, you may contact John Byrd on
          CompuServe, 72060,1556. Or write Syntonic Software, P.O. Box
          13471, Charlotte, N.C. 28270-6993.
          
               Whether you're trying to lower your cholesterol, lose weight
          or learn more about your diet habits, The Better Diet Analyzer
          can help you. The Better Diet Analyzer is a fast, easy-to-use
          database of common food items. The database contains information
          on more than 1,000 food items, including fast-food restaurants
          and brand-name products you will find in your supermarket.
          Moreover, you can easily add nutritional information on any food
          you choose. With more food processors disclosing nutritional
          information on their packages, this feature can help you maintain
          a current database of all the foods you eat.
          
               The Better Diet Analyzer is a tool to aid you in analyzing
          and monitoring your diet. In no way should it be considered a
          substitute for medical or nutritional advice on your diet or
          health risks. Much effort has been made to assure the accuracy of
          data in The Better Diet Analyzer's database and to include the
          most current information available. However, because of the large
          volume of data in the program and because processed food formulas
          and composition are subject to change, Syntonic Software can not
          guarantee the absolute accuracy of all items in the database.
          
               Data was obtained from several sources, including the U.S.
          Department of Agriculture Handbook No. 456, "Nutritive Value of
          American Foods in Common Units;" the USDA's Agriculture Handbook
          Number 8 series, "Composition of Foods ... Raw, Processed,
          Prepared;" directly from restaurant chains, food venders and
          manufacturers and from food packaging labels.
          
               All the data in The Better Diet Analyzer's database is based
          on estimates derived from samples. Actual contents may vary as
          manufacturers adjust formulas or as ingredients come from
          different sources. And the portions you use are also estimates.
          One of the most common errors among people who "count calories"



                                          2








          is underestimating the amount you actually eat. Take the time to
          learn how a cup of mashed potatoes looks on the plate. And be
          honest. If you're going to err, err on the side of
          overestimating. It's much less painful to try to trim 500
          calories out of 2,500 calories a day than out of 1,200.
          
          
          REQUIREMENTS
          
               The Better Diet Analyzer requires an IBM PC or compatible,
          DOS 2.0 or later and 384K of RAM. A hard disk is helpful but not
          essential. The Better Diet Analyzer has been tested on a variety
          of displays and will run on most monochrome and color systems.
          
          INSTALLING THE BETTER DIET ANALYZER
          
               It's best to install The Better Diet Analyzer in its own
          subdirectory on your hard disk. The utility program, INSTALL.EXE,
          included on the distribution diskette, will make the installation
          for you. If you have a previous version of The Better Diet
          Analyzer's database, INSTALL will search that database for custom
          food records you have entered, and preserve them for you. If you
          are running The Better Diet Analyzer on a two-drive floppy disk
          machine, be sure and have the disk with your custom records in
          Drive B.
               INSTALL will ask you if you are installing on a hard drive.
          If you answer no, the program will install itself on Drive B. If
          you answer yes, INSTALL will ask you to provide a subdirectory
          name. Be sure and use a qualified DOS directory name, such as
          "c:\diet". INSTALL will install the program in that directory. If
          it doesn not exist, it will create it, if possible. If the file,
          FOOD.GTC, is already in that subdirectory, INSTALL will search it
          for custom food records you may have entered and add them to the
          new database.
               Alternatively, you may install the program by copying the
          files BETTER.EXE, FOOD.GTC, FOOD.KEY and FOOD.DEX into a
          subdirectory or on a floppy. All four files must be in the same
          subdirectory, and that subdirectory must be the current
          subdirectory when you run the program. The utility program,
          MAKETAB.EXE, should also be in this subdirectory. MAKETAB is
          discussed on page 12.
          
          UP AND RUNNING WITH THE BETTER DIET ANALYZER
          
               The Better Diet Analyzer is so easy to use it almost runs
          itself. If you've used any other computer programs, you already
          know enough to instinctively use The Better Diet Analyzer's basic
          functions. To load the program, just type "better" at the DOS
          prompt. About the only special key you need to remember is the
          <F10> key. It activates the pull-down menus at the top of the
          screen. The <ESC> key will back you out of almost any operation.
          To end the program, use the "File" pull-down menu and select
          "Quit," or  ype <Alt-X>.




                                          3








               To begin totaling the nutritional analysis of any list of
          foods, just type the food's name. The Better Diet Analyzer will
          automatically begin recording the food name in a dialog box. If
          you'd like to see the dialog box before you begin typing, press
          the <Insert> key, but that isn't necessary.
               Once you've entered a food name, press <Enter>. The Better
          Diet Analyzer will display a list of all matching entries in its
          database. If more than one item is listed, you can scroll through
          the list using the cursor keys and Page Up and Page Down keys.
          Select the highlighted food by pressing <Enter>. Then type the
          number of portions, and your entry is added to the list. A
          running total of calories, fat grams, percentage of calories from
          fat, sodium milligrams and cholesterol milligrams appears at the
          bottom of the screen.
               Here's an example:
          
               For lunch you ate a bologna and cheese sandwich and an
          apple. With lunch you drank a cup of skim milk.
          
          Type "bologna." You'll see the following list:
          
               beef bologna                89     1 slice -- 1 ounce
               turkey bologna              70     1 slice -- Butterball
               turkey bologna              57     1 slice -- USDA average
          
               The left entry is the food name. The middle is the number of
          calories in each portion. At the right is a comment field, which
          will always contain the measurement of the portion and usually
          will include a short description. While The Better Diet Analyzer
          maintains data on calories, fat, sodium and cholesterol for all
          its database, only the calorie listing is displayed when you are
          offered a list of foods to choose from. (To learn how to view the
          complete listing for any food without entering it into a food
          list, see "Editing or Adding To the Database" on page 9.)
          
               The highlight will already be on beef bologna. Let's assume
          that's what you had, so press <Enter>. Now, type "1" because you
          had 1 slice. Again press <Enter> and beef bologna is entered into
          your list of foods.
          
               The bologna was on whole wheat, so type "whole wheat bread."
          The Better Diet Analyzer displays this list:
          
               whole wheat bread          60     1 slice -- Pepperidge Farm
               whole wheat bread          67     1 slice -- USDA average
          
               Move the highlight to select USDA average and press <Enter>.
          You had two slices, so type "2" and again press <Enter>.
               Now, type "cheese." The Better Diet Analyzer's screen fills
          with cheese listings, and at the bottom you'll notice that it
          informs you there are "65 entries" total. If you like, you can
          scroll through all the listings to find the cheese you ate. But
          there's an easier way. Press <ESC> to clear the screen. Now type
          "swiss cheese."



                                          4








               You'll see this list:
          
               swiss cheese               107     1 ounce
               swiss cheese slices        130     1 1/4 oz. 7 1/2 by 4 inch
                                                  slice
          
               You had a slice that was about half the size of that listed.
          So select the second entry and press <Enter>. Now you can type
          either "1/2" or ".5" and The Better Diet Analyzer will accept
          your entry.
          
               On your sandwich was a tablespoon of mayonnaise. Type
          "mayonnaise." You'll see
          
               mayonnaise                 1577    1 cup
               mayonnaise                   99    1 tablespoon
               Weight Watchers mayonnaise   50    1 tablespoon
               Wendy's mayonnaise           90    1 tablespoon
               Select the second entry and type "1".
          
               Now, add your apple and the skim milk.
          
               When you've finished, you'll see nutritional estimates for
          all the foods you've eaten, plus a total at the bottom of the
          screen.
               Lunch was approximately 553 calories, of which 41.5 percent
          came from fat. There were approximately 25 grams of fat in your
          lunch, 910 milligrams of sodium and at least 43 milligrams of
          cholesterol. Note that the cholesterol figure includes an
          asterisk. That's because it was computed using incomplete data.
          In The Better Diet Analyzer's cholesterol column opposite the
          whole wheat bread entry you'll see an "NA." That means that data
          on the cholesterol content of whole wheat bread was "not
          availble."
          
               Unfortunately, cholesterol information is not as readily
          available as caloric, fat and sodium information for many food
          items. Some food processors and manufacturers simply do not
          provide it. Hopefully, this will improve as consumers become more
          cholesterol-conscious and begin demanding better information. In
          this example, you can be reasonably confident in the cholesterol
          total because bread is made mostly from vegetable products, which
          contain no cholesterol. Cholesterol is present only in animal
          products such as meat, eggs, cheese, milk, lard, etc. It is
          entirely possible that the bread contained milk, eggs or lard,
          though in small amounts.
          
               After reviewing your lunch, you'll see that more than 40
          percent of your calories came from fat, even though you included
          two very low fat items -- the apple and the skim milk. Forty
          percent is typical of an American diet, but the American Heart
          Association recommends that no more than 30 percent of your
          calories come from fat. Some medical researchers recommend that
          the total should be even lower. If you are concerned about



                                          5








          cholesterol, heart disease and dietary fat, you should discuss
          the issue with your doctor.
          
               The above example focuses on a hypothetical meal. You can
          use the same process to evaluate recipes. Just type in the
          ingredients as listed, and The Better Diet Analyzer will return
          totals for the whole recipe. If you'd like, you can divide those
          totals by the number of portions, give the recipe a name and
          enter it permanently in The Better Diet Analyzer's database. (See
          "Editing and Adding To the Database.")
          
               That takes care of lunch, but what about breakfast, supper
          and snacks? You can enter listings for as many meals as you like,
          and The Better Diet Analyzer will maintain a running total of the
          day's food intake.
          
          KEEPING DAILY LISTS
          
               Keeping track of your calorie and fat consumption on item-
          by-item basis is helpful. But to really get control of your diet,
          you need to track your consumption over several days, or even
          weeks. The Better Diet Analyzer can help you do that.
          
               You can keep all your records in a file by saving your
          information to disk. Use the pull-down menu and select
          "File/Save," or press <F2>. The Better Diet Analyzer will prompt
          you for a file name. Use any name within the DOS restrictions. If
          you don't specify an extension, The Better Diet Analyzer will
          append an extension of "DAT".  If a file exists with the name you
          select, it will be saved as a back up file with the extension
          ".BAK". (See more on using files, including working with
          subdirectories and floppy disks in SAVING AND RETRIEVING FILES,
          page 8.)
               You can now reload your file in future sessions of The
          Better Diet Analyzer by using the pull-down menu and selecting
          "File/Load." Or you may press <Alt-L>. Whenever you load a file,
          if you don't specify an extension, The Better Diet Analyzer will
          assume the default extension of "DAT".
          
               You can save your information periodically during any
          session of The Better Diet Analyzer. Doing so automatically
          creates or updates a "DAY" record, which maintains a summary of
          the day's food.
               To see your DAY records, use the pull-down menu and select
          "Screen/Days." Or you may press <Alt-D>. The Better Diet Analyzer
          lists each day for which you've kept records and then averages
          all your previous daily records into a summary at the bottom of
          the screen. The current day's food totals are excluded from the
          summary average because the chances are you're still adding items
          to the day's record.
               While you're looking at the DAY screen you can add your
          weight. If you type numbers, The Better Diet Analyzer will
          automatically post another dialog box and record your weight,
          just as it did with food entries while you were looking at the



                                          6








          MEAL screen. Or, you can press the <Insert> key to post the box
          before you begin typing. The current day's weight will be
          calculated in the average at the bottom of the screen.
          
               To return to the MEAL screen use the pull-down menu and
          select "Screen/Meals," or press <Alt-M>.
          
          WEEKLY SUMMARIES
          
               If you're interested in long-term dieting, The Better Diet
          Analyzer can even keep weekly summaries for you (or 10-day
          summaries or monthly summaries or whatever period you choose).
               Suppose you have a list of seven daily summaries that you'd
          like to convert into a weekly summary. All you need to do is
          highlight those daily summaries and press the <Insert> key. To
          highlight a list of daily summaries, use the pull-down menu and
          select "Screen/Highlight." Or you may press the <F3> key. Using
          the cursor keys will now move the highlight bar over individual
          daily summaries.
               To highlight a group of DAY records, hold down one of the
          shift keys while you move the highlight bar with the cursor keys.
          Once you've selected a group, press <Insert> and The Better Diet
          Analyzer will create a weekly summary. If you'd like to delete
          the daily summaries from your DAY list, press <Delete> and all
          the highlighted summaries will disappear from your screen and
          from your file. If you want to back out of this operation, just
          press <ESC> and The Better Diet Analyzer will return you to your
          previous operation.
          
               To view your weekly summaries, use the pull-down menu and
          select "Screen/Weeks," or press <Alt-W>. You can return to the
          MEAL or DAY screens by using the pull-down menu or pressing <Alt-
          M> for MEALS or <Alt-D> for DAYS.
          
          CHANGING THE DATE
          
               You've learned to keep an ongoing list of food consumption
          and store lists in daily summaries. What do you do if you want to
          add items to yesterday's list or change an item?  Suppose today
          is Thursday and you never finished making Wednesday's list?
          Change the date. Select "Tools/Change Date," or press <F9>. The
          Better Diet Analyzer will prompt you for the date. You may enter
          only the month and day if it is the current year, for instance
          "10-15" for October 15. Press Enter and The Better Diet Analyzer
          will change its internal clock and display the selected date's
          MEAL list. You may then make any additions or changes you wish.
          To return to the current date, again select "Change Date" and
          enter "today" at the date prompt.
               It is important to set your computer's DOS clock correctly
          when running The Better Diet Analyzer. If the program detects
          what it considers an invalid date (any year before 1989) when it
          begins running, it will prompt you for the correct date before
          continuing. Because The Better Diet Analyzer keeps complete,
          detailed lists of all foods eaten for up to seven days in memory,



                                          7








          it cannot tolerate large changes in the date. So, the change-date
          function will not allow you to reset the date to more than six
          days prior to the current date, or into the future past the
          current date. Attempting to do so will result in the error
          message, "Date out of range."
               You CAN over-ride this limitation by changing your
          computer's date from the DOS prompt, but this is not recommended.
          Confusing The Better Diet Analyzer's sense of time will almost
          certainly result in lost data from any files that are loaded (but
          not from the main database of 1,000 food records). The reason
          this happens is because The Better Diet Analyzer automatically
          discards any MEAL records that are more than a week old in order
          to conserve memory and disk space.
               Though the program discards older MEAL records, it continues
          to keep a nearly unlimited number of DAY and WEEK summaries.
               We've covered the basics of using The Better Diet Analyzer.
          You can use the pull-down menus to get anywhere in the program,
          or use hot key combinations. You don't need to try to memorize
          the hot keys -- they're all listed beside each menu operation,
          where you'll soon see them often enough to learn the ones you
          use.
          
          SAVING AND RETRIEVING FILES
          
               You can save your files to disk by accessing "File/Save" in
          the pull-down menu, or by pressing <F2>. If the file has been
          previously saved, or was loaded from disk, The Better Diet
          Analyzer will overwrite it. If not, the program will prompt you
          for a name. To change the name of an existing file that you are
          editing, select "File/Save as," or press <Alt-F2>. Again, The
          Better Diet Analyzer will prompt you for a name.
               You can see a directory of all The Better Diet Analyzer's
          data files in the current directory by selecting
          "File/Directory." The program will display all files ending with
          the extension ".DAT." Pressing <Enter> will load and display the
          highlighted file.
               You can also load a file by selecting "File/Load," or
          pressing <Alt-L>. If any files exist in the current directory
          with the ".DAT" extension, they will be displayed in the
          directory list. If you strike any key other than the cursor keys
          or the carriage return, The Better Diet Analyzer will begin
          recording your keystrokes in a file-input prompt. This can be
          useful if the file you want exists in another subdirectory. In
          that case, be sure to enter the full path name, such as
          "c:\mydiet\file.dat." (The ".dat" extension is optional.)
          
               It's a good idea to set up The Better Diet Analyzer in its
          own subdirectory and keep your data files there. That way, the
          files you want will always be in the current directory. You can,
          however, designate another subdirectory as your primary data
          directory. Select "File/File options" and type a valid full path.
          (Note: You must designate an existing directory or subdirectory -
          - The Better Diet Analyzer will not create a new subdirectory. If
          you type an invalid name, The Better Diet Analyzer will accept



                                          8








          your entry, but will display a warning when you attempt to save
          the file.)
               Why would you want to designate another subdirectory for
          your data files? More than one user may be using The Better Diet
          Analyzer, each with his or her own subdirectory of files. Or,
          operators of machines without a hard drive can designate the "B:"
          drive as the data path while running The Better Diet Analyzer
          from the "A:" drive. That way they can store their data files on
          a separate disk from the program file.
          
          PRINTING YOUR FILES
          
               The Better Diet Analyzer will print your MEAL list, DAY
          list, WEEK list, or all three. You can print either to an ASCII
          file or to your printer. All formatting is automatic.  From the
          pull-down menu select "Tools/Print screen." The default option
          will print the MEAL list to your printer connected to LPT1. To
          change those defaults, select "Options." If you send your output
          to an ASCII file, The Better Diet Analyzer will prompt you for a
          file name. If you don't specify a file extension, the program
          will add the default extension of ".PRN".
               You can cycle through the list of screens that The Better
          Diet Analyzer will print by highlighting the "Screen" option and
          pressing the space bar. The options are: MEALS, DAYS, WEEKS, or
          ALL. You may override the default options in future sessions by
          saving your options to a configuration file.
          
          ADDING TO OR EDITING THE DATABASE
          
               You may view the complete records for any item in The Better
          Diet Analyzer's database of more than 1,000 food items. Select
          "Screen/Edit database," or press <F1>. The Better Diet Analyzer
          will display the first item in the database, and a menu of hot-
          key commands -- "A-Add, N-Next, P-Previous, F-Find, E-Edit, ESC-
          Quit." These keys should be self-explanatory, but we'll briefly
          describe them here.
               "Next" and "Previous" allow you to step through food records
          one at a time. To find an item quickly, press "F" for find, then
          enter the food name. The Better Diet Analyzer will display a list
          of matching items. Use the cursor keys to select one, then press
          <Enter>. Press "E" to edit an existing food record.
               Once you've made your edit, press <F2> to save, or <ESC> to
          exit without saving. You may add a new record by pressing "A."
          Press <ESC> to leave the Database Editor and return to The Better
          Diet Analyzer's main screen.
               You can use the Better Diet Analyzer to analyze recipes and
          add them to the database. The process is as simple as entering
          the recipe's ingredients, as if it were a meal. When you've
          entered all the ingredients, open the Database Editor <F1> and
          press "A." Now, enter an appropriate name for the recipe (one
          that you'll remember and one that's distinctive in three words or
          less) and the approximate size of each portion. Divide each of
          the totals (calories, fat, sodium and cholesterol) by the number
          of portions. You can use The Better Diet Analyzer's handy pop-up



                                          9








          calculator for this. (See Using The Better Diet Analyzer's
          Calculator, page 11.) The Database Editor will skip over the
          Percentage Field, then automatically calculate the percentage of
          calories from fat when you press <F2> to save the data.     You
          can add as many new foods as you want, and edit them as many
          times as you want. The foods that are distributed with The Better
          Diet Analyzer cannot be edited, however. They are labeled
          "Created by Syntonic." The foods YOU enter are labeled "Created
          by User." In addition to protecting the integrity of The Better
          Diet Analyzer's distributed database, this also allows you to
          preserve the records you enter as long as you want. Future
          upgrades of The Better Diet Analyzer will be able to recognize
          your custom records and add them to a modified or expanded
          database in future releases.
               A NOTE ON NUTRITIONAL INFORMATION: Package labels can be an
          excellent source of nutritional information. Unfortunately, not
          all food processors provide them, or provide complete
          information. If you don't see the information you need, don't
          hesitate to write to the processor. Likewise, contact the
          restaurants that you frequent and request nutritional information
          if they have it, or ingredients if they don't. Increasingly food
          processors and restaurant chains are becoming nearly as
          nutrition-conscious as some of their best customers. But
          remember, they didn't suddenly discover nutrition on their own.
          They discovered it because their customers began demanding it,
          and they understood that disclosing nutritional information was
          good business.
               If you write a food processor or restaurateur, say something
          good about their food. They always appreciate that, and it
          frequently encourages them to speed you a reply. Some food
          companies reply promptly, some seem to forget your request only
          to unearth it six months later. A small number don't respond at
          all. (Don't buy their product!) Often you will get a four-color
          brochure, sometimes a typewritten sheet, other times a photocopy
          of a package label. Many will send you recipes, brochures on
          nutrition and even discount coupons for their products.
               It's important to let food companies know we value the
          nutritive quality of their food. Writing and asking for the
          information encourages more manufacturers to provide the
          information without being asked. And over the longer term, it may
          even prod some companies to provide healthier food.
          
          HINTS ON ENTERING DATA
          
               The Better Diet Analyzer is designed to be as user-friendly
          as possible. You don't need to worry about food categories or the
          order in which you enter names. Simply enter the name you think
          the food will be recognized by, for instance, "fried chicken
          breast." But "chicken breast, fried" or even "fried breast" will
          work just as well. You could even enter "fried" individually,
          "chicken" or "breast" and receive a list of items from which to
          choose.
               Generally, The Better Diet Analyzer will recognize almost
          any food description, but a few tips may help you construct your



                                          10








          queries more effectively. The Better Diet Analyzer recognizes up
          to three words in your query, and ignores any others beyond that.
          In other words, "fried chicken breast meat" would mean the same
          thing to The Better Diet Analyzer as "fried chicken breast."     I
          t doesn't matter what order you enter the words. Also, The Better
          Diet Analyzer is case-insensitive -- you don't need to
          worry about whether the words are capitalized or not.
               You don't need to enter three words. One or two words will
          usually do.
               If The Better Diet Analyzer can't find a match for your
          query it will display the message: "Food not found." In this
          case, try the query using a different description. It usually
          helps to be less specific. If you had entered "Campbell's chicken
          noodle" as your query and The Better Diet Analyzer couldn't find
          what you wanted, then try "soup."  Remember, if your query fails,
          try a more general approach.
               While The Better Diet Analyzer doesn't care about
          capitalization, it does care about spelling, up to a point. At
          least the first five letters -- if there are that many -- must be
          spelled correctly in each word.
          
               The Better Diet Analyzer's food descriptions and portion
          descriptions are designed to be as helpful as possible. Whenever
          possible, we've used volume, rather than weight measures, because
          it is easier for most people to judge a 1-cup portion as opposed
          to, say, a 4-ounce portion.  Whenever using brand names, we've
          tried to include the measure for the total package. For instance,
          most canned goods are listed with the total for the can -- it's
          much easier for most people to estimate whether they've eaten 1/3
          of a can of something rather than a half cup. Even microwave
          popcorn is listed for the whole bag (which is usually around 8
          cups!) rather than by the cup. Some manufacturers are
          inconsistent in their listing of portion sizes. For instance, a
          portion of one product may be described as "1 ounce" or "1/12
          cake," while the portion size of another, similar product is
          described as "1 1/4 ounce" or "1/14 cake." Whenever possible in
          cases like this, Syntonic has tried to translate the
          manufacturer's listed portion size and nutritional contents to
          those that are consistent across product lines.
               An exception to the volume versus weight policy is meat.
          Almost all information on meat is provided by the ounce or the
          gram. We've tried to consistently use 4 ounce portions. It may
          help to purchase an inexpensive kitchen scale as an aid in
          estimating meat portions.
               Another point is worth noting: fluid ounces and weight
          ounces are not equivalent. To help avoid confusion, we've used
          the term "fluid ounces" when appropriate in portion descriptions.
          
          USING THE BETTER DIET ANALYZER'S CALCULATOR
          
               A handy, pop-up calculator is included in The Better Diet
          Analyzer for your convenience. The calculator is modeled on
          standard pocket models and operates in a similar fashion.




                                          11








               Activate the calculator by choosing "Tools/Calculator" from
          the pull-down menu, or press <Alt-C>. Use the numeral keys at the
          top of the keyboard, or press <NumLk> and use the cursor keypad
          keys. To return to your program, press <ESC> or <F6>. Pressing
          <ESC> will vanish the calculator from the screen and erase your
          calculated result. Pressing <F6> "freezes" the calculator. This
          shrinks the calculator to just its display, and preserves your
          calculation. You may use any part of The Better Diet Analyzer
          just as you normally would while the calculator is "frozen," and
          you may return to the calculator by pressing <F6> again.
               You can see a summary of the calculator's commands and keys
          (+, -, *, /, =, Clear) by pressing <F10> while the calculator is
          active.
          
          MORE FEATURES
          
               ZOOMING: As your food lists grow, they will begin to scroll
          off The Better Diet Analyzer's screen. You can enlarge the screen
          from the pull-down menu by selecting "Screen/Zoom/UnZoom," or you
          can press <F5>.
          
               CORRECTING ENTRIES: Suppose you make a mistake in entering a
          food item in the MEAL list, or you want to delete an item? From
          the pull-down menu select "Screen/Highlight," or press <F3>. Use
          the cursor keys to select an item, then use <Delete> to eliminate
          it. Press <ESC> to exit from highlight mode. If you want to
          delete a group of food items, hold down one of the two shift keys
          while using the cursor keys. The Better Diet Analyzer will
          highlight all records selected.
          
               CHANGING A FILE NAME: To rename an existing file, use the
          pull-down menu and select "File/Save As," or press <Alt-F2>. The
          Better Diet Analyzer will prompt you for a new name.
          
               DIRECTORY: You can view a directory of all files in the
          current directory with extensions of ".DAT." From the pull-down
          menu select "File/Director." Selecting any file name and pressing
          <Enter> will load that file. Also, whenever you load a file --
          either by selecting "File/Load file" or by pressing <Alt-L>, The
          Better Diet Analyzer will display a list of ".DAT" files, if
          there are any in the current directory.
          
               CHANGING COLORS: If you have a CGA, an EGA or VGA monitor
          you can change The Better Diet Analyzer's default colors. Select
          "Tools/Change colors" from the pull-down menu.
          
          USING MAKETAB.EXE
          
               The Better Diet Analyzer is able to search its database much
          faster and with much more flexibility than similar programs
          through the use of a two-dimensional lookup table. This table is
          constructed on program initialization from data in two files:
          FOOD.KEY and FOOD.DEX. If at any time either of these two files
          are erased or become corrupted, The Better Diet Analyzer will be



                                          12








          unable to search its database. You should suspect file corruption
          if The Better Diet Analyzer fails to find food items you know are
          in the database. If that happens, run the utility program
          MAKETAB.EXE by typing MAKETAB while in the directory that
          contains the file FOOD.GTC. MAKETAB will reconstruct the
          necessary files.
          
          
          THE BETTER DIET ANALYZER FAST-KEY SUMMARY
          
          HOT KEYS
          
          The following keys are assigned these functions:
          
          F1      Activate the database editor
          F2      Save file (user file or database file)
          F3      Activate the highlighter
          F5      Zoom/Unzoom
          F6      Toggle between a previously activated calculator
                  and the main program
          F9      Change the date
          F10     Activate the pull-down menus
          F10     Display calculator commands (while calculator is
                  active)
          Alt-C   Pop up and active the calculator
          Alt-D   See the DAY screen
          Alt-L   Load a user file
          Alt-M   See the MEALS screen
          Alt-W   See the WEEK screen
          Delete  Delete highlighted records (MEALS, DAYS and WEEKS
                  screens)
          Delete  Delete food record (database editor)
          Insert  Activate Input boxes
          Insert  Create a weekly record
          






















                                          13








          ORDER FORM
          
          Mail to:
          
          Syntonic Software
          P.O. Box 13471
          Charlotte, North Carolina
                         28270-6993
          
          
          
          
          ______________________________________________________
          (Name)
          
          ______________________________________________________
          (Address)
          
          ______________________________________________________
          (City/State/Zip)
          
          
          Number of copies (@ $24.95 each)             _________
          
                                                       x   24.95
          Subtotal                                     _________
          
          N.C. residents add 5% sales tax              _________
          
          Shipping and handling                       $      .95
          
          Total enclosed                              $_________
          
          
          (Enclose a check or money order)
          
          
          
          
          
          
















                                          14


```
{% endraw %}

## README.DOC

{% raw %}
```
Thanks for obtaining The Better Diet Analyzer. First, make a backup copy of
your new program disk to protect against accidental erasure or damage. If
you have a hard disk, just insert your distribution diskette in Drive A and
type "install". The installation utility will prompt you for a
subdirectory. If you have previously added database records to The Better
Diet Analyzer or GET CONTROL -- the same program under another name -- the
installation utility will preserve them for you, then install all the files
you need to run the program.

If you have a two-disk floppy disk system, insert the working disk you
intend to use in Drive B. If you have a previous copy of The Better Diet
Analyzer or GET CONTROL to which you have added database records, use that
disk in Drive B. Insert the distribution diskette in Drive A and type
"install".

To run the program, type "better". To run the program from a floppy drive
system, use one drive for the program files and another for your data
file(s). After you load the program, select "Files/Options" and enter
"B:\". Then select "Tools/Save options" to save that data path.

NOTE: The files FOOD.GTC, FOOD.KEY and FOOD.DEX must be in the current
subdirectory when the program is launched or it will abort. Also, your
machine's internal clock must be set to the current date. If the program
detects an invalid date it will prompt you for the correct one.

Additional program documentation is in the file MANUAL.DOC, which is a
standard ASCII file. To make a hard copy of the file, enter:  type
manual.doc > prn.  The manual is 15 printed pages.




List of files on this diskette:

INSTALL.EXE          Installation utility
BETTER.EXE           Main program
FOOD.GTC             Main program database
FOOD.KEY             Database search keys
FOOD.DEX             Database search keys
MAKETAB.EXE          Utility program
MANUAL.DOC           Program documentation
README.DOC           This file
























```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2586

     Volume in drive A has no label
     Directory of A:\

    README   BAT        36   4-11-91   2:04a
    README   DOC      2035   4-11-91   2:04a
    BETTER   EXE    106160   4-11-91   2:04a
    MANUAL   DOC     42744   4-11-91   2:04a
    MAKETAB  EXE     11968   4-11-91   2:04a
    FOOD     KEY     12420   4-11-91   2:04a
    INSTALL  EXE     15936   4-11-91   2:04a
    FOOD     DEX     18753   4-11-91   2:04a
    FOOD     GTC     93544   4-11-91   2:04a
    GO       BAT        38   5-03-91   3:08p
    GO       TXT      1002   3-04-91   7:29a
    FILE2586 TXT      3479   5-03-91   3:13p
           12 file(s)     308115 bytes
                            8192 bytes free
