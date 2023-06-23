---
layout: page
title: "PC-SIG Diskette Library (Disk #1579)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1579/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1579"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DIETAID 2 OF 2 (ALSO 1578)"

    DIETAID is a diet and menu planner in which the user consults tables of
    calorie, fat, protein and dietary exchange equivalents for each of the
    items in his diet/menu/recipe.  The system can provide a daily allowance
    based on height, weight, age and activity level and compare them to
    actual meal plans or meals consumed.  Personal recipes can be entered in
    the database for future use in menu planning.  Tables of food can be
    amended with items the user will use that have not been included.  The
    table will support up to 3000 items.
    
    DIETAID is valuable to anyone who is interested in diet, meal planning
    and good nutrition.  Doctors, nutritionists and dietary specialists
    would be interested not only in using this program, but could also
    encourage their clients to utilize it in food and menu planning.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1579.TXT

{% raw %}
```
Disk No: 1579                                                           
Disk Title: DietAid 2 of 2 (also 1578)                                  
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: DIETAID                                                  
Author Version: 2.1                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
DIETAID is a diet and menu planner in which the user consults tables of 
calorie, fat, protein and dietary exchange equivalents for each of the  
items in his diet/menu/recipe.  The system can provide a daily allowance
based on height, weight, age and activity level.  Personal recipes can  
be entered in the database for future use in menu planning.  Tables of  
food can be amended with items the user will use that have not been     
included.  The table will support up to 3000 items.                     
                                                                        
DIETAID is valuable to anyone who is interested in diet, meal planning  
and good nutrition.  Doctors, nutritionists and dietary specialists     
would be interested not only in using this program, but could also      
encourage their clients to utilize it in food and menu planning.        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  Disk #1579  DIETAID  disk 2 of 2 (also 1578)  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start DIETAID, insert disk #1578 and type:  DIETAID (press enter)    ║
║                                                                         ║
║ To view the documentation, insert disk #1578 and type:                  ║
║                                                README (press enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.TXT

{% raw %}
```
INTRODUCTION
------------

DIETAID is a computerized diet planner.  Its goal is to assist
the individual by comparing planned menus to the diet prescribed
for that individual.  To accomplish this, DIETAID contains
functions for storing a diet prescription and examining proposed
menus.  Since each individual will have his or her own favorite
recipes, DIETAID also contains procedures for adding new foods
and recipes to the food data base.

In general you will use DIETAID as follows:

        . Enter a Diet Prescription from your doctor or
          nutritionist, or have DIETAID suggest one for
          you based on your age, weight, sex, and activity
          level.  The DIET Option allows planning in terms
          of Proteins, Fats, and Carbohydrates (PFCs) OR
          Exchange Units (EUs), as well as calories.

        . Plan various Menus of foods that match the Diet
          prescribed.  Each Menu consists of the specific
          foods and amounts to be eaten at each meal.  The
          MENU Option allows quick comparison of how each
          meal compares to the Diet so adjustments may
          be made to food items or amounts.

        . You will probably return to the MENU Option to
          compare how your actual meal intake compares to
          your planned menu, and/or to try out variations
          on the menu that do not affect the overall balance
          of the menu or meal (eg if I have a Grapefruit
          instead of an Orange will I be too far off my
          diet prescription).

Additional options include:

        . Enter various favorite recipes by specifying the
          food items and amounts that the recipe calls for.
          The RECIPE Option will save these items for future
          reference and will also add the recipe to the food
          item data base to include it in Menu planning.

        . Directly modify the food item table through the
          TABLES Option.  This option requires the entry of
          food item names, calories, serving sizes, and grams
          of protein, fat, and carbohydrate.  It will
          automatically compute EUs or allow direct entry.

        . Print out Diets, Menus, and Recipes.

        . Obtain Help (what you are doing now)...



FUNCTION Keys

Request the various Options by pressing the "Function Key"
shown on the top of the screen.  As shown there:

        . Press F1 to plan/view/modify a DIET.

        . Press F2 to plan/view/modify a MENU.

        . Press F3 to plan/view/modify a RECIPE.

        . Press F4 to view/modify the food item TABLE.

        . Press F9 to print the contents of the Option
          currently in use.

        . Press F10 to obtain help with the Option
          currently in use.

Press these keys at any time to indicate what Option to
exercise.  If you have pressed F1 and entered a DIET and now
wish to plan a MENU, press F2 and you will be shown the MENU
Options.

The remaining function keys will vary with each screen being
viewed.  F5, F6, F7, and F8 will be described on each screen
where they are allowed.


Switching Units - F5

Whenever switching between PFC units and EU units are allowed
it will always be the F5 key that performs the action.


ESCAPE Key

Press the ESCAPE key (labeled ESC) at any time to exit from
the Option you are doing.  To completely exit DIETAID keep
pressing ESC until DIETAID terminates.


DIALOG BOXES

Pressing a Function Key (FKEY) causes a "Dialog Box" to be shown
requesting additional information.  For each of the F1, F2, and
F3 keys (Diet, Menu, and Recipe) you will be asked if you wish
to start a New ..., retreive an Old ..., see a List of old ...,
or Delete an old...


File Names:

In each of these cases you will be prompted for a name (either
a New name to start, or an Old name of a ... you previously
created).  These names must be composed of just the letters a-z
and must be 8 characters in length or less.

If you are currently working on a ... and press its related FKEY
you will also be given the opportunity to Save the ....


DIET - F1
----

Press the F1 key at any time to begin or resume diet planning.
When you first start DIETAID you will be prompted for the name
of a diet to use.  This is because most often you will be using
a diet even when doing MENUs and RECIPES for comparison to your
plan.  To skip the DIET portion, press the Fkey for the option
to execute next (or the ESC key to exit).


BASIS FOR DIET

The DIET option allows entry of some personal information that
can be used as the BASIS for suggesting a diet.  Use the TAB
and BACKTAB (SHIFT Key + TAB) to move around the area labeled
BASIS FOR DIET.  If you enter your AGE, SEX (M/F), whether you
are PREGnant (Y/N, female only), LACTating (Y/N, female only,
breast feeding), your HEIGHT (inches), WEIGHT (pounds), and
whether you have Light, Moderate, or Active physical ACTIVITY,
DIETAID will be able to SUGGEST your total daily caloric intake.


Activity

No regular aerobic exercise would be marked 'L'ight.  Three to
five times a week of easily paced jogging, swimming, biking, etc
for up to 30 minutes would be marked 'M'oderate.  Four or more
times a week of strenuous running etc for over 30 minutes would
be marked 'A'ctive.


F7 - CALCULATING A DIET         F5 - SWITCHING DIET UNITS

Based on your total daily calories, DIETAID will suggest either
PFC or EU values for each meal, including snacks (press the F7
key).  If YOUR INPUT is blank, DIETAID will use suggested cal-
ories.  You may switch back and forth between PFC and EU units
by pressing the F5 key.  The distribution of calories by meal
and measure (PFC or EU) that DIETAID uses may be modified using
the F4-TABLES option (discussed below).


F6 - CONVERT UNITS

The F5 key just switches the display between the calculated (or
entered) PFC and EU units, it does no conversion.  The F6 key
can be used to convert the EU diet to its PFC equivalent or the
PFC diet to a nearly EU equivalent.  The EU to PFC conversion is
accurate, the PFC to EU is somewhat subjective since many EU
combinations equal the same PFC values.  The PFC to EU conversion
is done by allocating the calories for each meal and allocating
them to EU's based on the total EU allocation table (total = sum
of all meals for each EU).


DIRECT ENTRY OF DIET PLAN

You may also directly enter your PFC or EU values as prescribed
by a doctor or nutritionist by using the TAB and BACKTAB keys
to move around the DIET PLAN area of the screen and entering
the values.  As you enter values here, DIETAID will compute the
total calories represented by your values in the BASIS field
labeled YOUR INPUT.


SAVING THE DIET

Once the diet is the way you want it, save it by pressing the
F1 - DIET key.  The Dialog Box will appear with the S Option
displayed to allow saving the diet.  When you press S, you will
be prompted with the name you gave when starting the DIET.  Press
the ENTER key to use this name, or type a new name to save it as,
or press the ESC key to not save the DIET.



MENU - F2
----

Press the F2 key at any time to begin or resume menu planning.


MENU OVERVIEW SCREEN

The MENU option first displays an overview of the MENU in
process.  It displays each meal along with the DIET plan values
for the meal.  It also shows the ACTUAL values for the meal for
the menu items you have entered for that meal.  This allows
comparison of the meal you are planning to the DIET plan. When
you are working on a new menu all ACTUAL figures will start as
zero.  This screen also shows your planned and actual calorie
totals.


Selecting Meal to Plan

You select which meal to plan next by using the UP and DOWN
arrow keys to HIGHLIGHT each meal.  Press ENTER when the meal
you wish to plan is highlighted.  This will display the screen
for entering food items, quantities, etc for that meal.


F5 - SWITCHING DIET UNITS

The F5 key will switch all the menu displays between PFC and EU
units.


MENU MEAL ENTRY SCREEN

This screen is divided into the top half and the bottom half.


Item Entry Half of Screen (Bottom Half)

The bottom half of the screen allows entry of food item names
and quantities of that item to include in the menu for this meal.
Type in the food item name and press the ENTER key to retrieve
the food item from the data base.

        Matching Item           (and F6 Measure Conversion).

If the item is found in the data base, the rest of the row will
be filled in with the serving size, measure, and calories.
Press the TAB key and enter the quantity (of the shown measure)
to include in the meal.

If you are unsure of the quantity of the shown measure, press
the F6 key and you will be given a list of measures to convert
from.  For instance if the measure is cups and you only know
the liters of an item, press F6 and you may specify liters to
convert from, and the number of liters.  DIETAID will place the
number of cups in the quantity column.

        Non-Matching Item       (and F8 Food Name Lookup).

If the item is not found a message will appear on the bottom of
the screen and the row will rest of the row will remain blank.
Try the name again with a different spelling, or press F8 to be
shown a list of items similar to the one typed.  Use the UP and
DOWN ARROW keys (or PgUp and PgDn) keys to look around for
the item you want.  Press ENTER with the cursor on any item
and it will be entered in the food item column.  Press ESC to
not select any names from the displayed F8 list.


        Deleteing an Item       (F7 key)

To delete the item under the cursor from this meal press the F7
key.  The item will be removed and all its contributions to the
the meal will be subtracted.

        Scrolling            (ARROW, PgUp, PgDn, CTRL+HOME/END)

To enter more items than fit on the bottom of the screen, press
one of the above keys, and items will scroll to allow further
entry.  You may enter up to 50 items for each meal.


Meal Summary Half of the Screen (Top Half)

The top half of the screen displays the diet plan for this meal
(if any diet has been selected), along with the totals for the
items and quantities entered so far.  As quantities are entered
in the bottom half of the screen, these figures are updated.  As
mentioned press F5 to switch between PFC and EU displays.

The top half also displays the item under the cursor in the
bottom half of the screen along with its PFC or EU units.  This
allows you to gauge the effect changes in quantity for the item
will have on the totals for the meal.

Lastly the top half displays the total calories for the meal so
far.


Exiting the Meal

Press the ESC key when finished with the meal and the MENU
OVERVIEW screen will be displayed to allow selection of the
next meal to plan.


SAVING THE MENU

Once the menu is the way you want it, save it by pressing the
F2 - MENU key.  The Dialog Box will appear with the S Option
displayed to allow saving the menu.  When you press S, you will
be prompted with the name you gave when starting the MENU.  Press
the ENTER key to use this name, or type a new name to save it as,
or press the ESC key to not save it.


MENU and TABLE REVISIONS

The MENU is saved as just items and quantities.  When you use
the MENU the actual calories, PFCs, and EUs are gotten from the
food item table (FIT) as the MENU is loaded.  Thus if changes are
made to an item in the FIT that happens to be in a MENU, the MENU
total calories, PFCs etc will be different than when you saved it
(reflecting the changes to the values of the affected food item).


RECIPE - F3
-------

Press the F3 key at any time to begin or resume recipe planning.


RECIPE INTRO SCREEN

The RECIPE option first displays a screen to allow you to select
a DIET plan meal to compare the recipe to (if there is a DIET
plan loaded.  Select the meal to compare to by the UP and DOWN
arrow keys and pressing ENTER on the meal to use.  If there is
no DIET plan loaded, there will be no meal selection option.

Number of Servings

With or without selecting a meal, press the F6 key to be
prompted the number of servings the RECIPE provides.  All
figures computed for the recipe will be kept as totals and
per serving.  Thus when this recipe is selected in MENU
planning you will enter quantities in terms of servings, not
in terms as part of the total recipe.


F5 - SWITCHING DIET UNITS

The F5 key will switch all the recipe displays between PFC and EU
units.


RECIPE ENTRY SCREEN

This screen is divided into the top half and the bottom half.


Item Entry Half of Screen (Bottom Half)

The bottom half of the screen allows entry of food item names
and quantities of that item to include in the recipe for this
meal.  Type in the food item name and press the ENTER key to
retrieve the food item from the data base.

        Matching Item           (and F6 Measure Conversion).

If the item is found in the data base, the rest of the row will
be filled in with the serving size, measure, and calories.
Press the TAB key and enter the quantity (of the shown measure)
to include in the meal.

If you are unsure of the quantity of the shown measure, press
the F6 key and you will be given a list of measures to convert
from.  For instance, if the measure is cups and you only know
the liters of an item, press F6 and you may specify liters to
convert from, and the number of liters.  DIETAID will place the
number of cups in the quantity column.

        Non-Matching Item       (and F8 Food Name Lookup).

If the item is not found a message will appear on the bottom of
the screen and the rest of the row will remain blank.  Try the
name again with a different spelling, or press F8 to be shown a
list of items similar to the one typed.  Use the UP and DOWN
ARROW keys (or PgUp and PgDn) keys to look around for the item
you want.  Press ENTER with the cursor on any item and it will
be entered in the food item column.  Press ESC to not select
any names from the displayed F8 list.


        Deleteing an Item       (F7 key)

To delete the item under the cursor from this recipe press the
F7 key.  The item will be removed and all its contributions to
the meal will be subtracted.


        Scrolling            (ARROW, PgUp, PgDn, CTRL+HOME/END)

To enter more items than fit on the bottom of the screen, press
one of the above keys, and items will scroll to allow further
entry.  You may enter up to 50 items for the recipe.


Recipe Summary Half of the Screen (Top Half)

The top half of the screen displays the diet plan for this meal
(if any diet has been selected), along with the totals for the
items and quantities entered so far.  As quantities are entered
in the bottom half of the screen, these figures are updated.  As
mentioned press F5 to switch between PFC and EU displays.

The top half also displays the item under the cursor in the
bottom half of the screen along with its PFC or EU units.  This
allows you to gauge the effect changes in quantity for the item
will have on the totals for the recipe.

Lastly the top half displays the total calories for the meal so
far, the number of servings, and the calories per serving.


Exiting the Recipe

Press the ESC key when finished with the recipe and the RECIPE
INTRO screen will be displayed to allow revision of the number
of servings or selection of a different meal to compare to.


SAVING THE RECIPE

Once the recipe is the way you want it, save it by pressing the
F3 - RECIPE key.  The Dialog Box will appear with the S Option
displayed to allow saving the recipe.  When you press S, you will
be prompted with the name you gave when starting the RECIPE.
Press the ENTER key to use this name, or type a new name to save
it as, or press the ESC key to not save it.


Entry of Recipe into Food Item Table

The recipe will be saved in a recipe file (like menus), but it
will also be saved in the fool item table just like any food
item.  This will allow selection of the recipe in future MENU
planning just like any other food item without having to enter
all the ingredients in the MENU.


RECIPE and TABLE REVISIONS

The RECIPE is saved as just items and quantities.  When you use
the RECIPE the actual calories, PFCs, and EUs are gotten from the
food item table (FIT) as the RECIPE is loaded.  Thus if changes
are made to an item in the FIT that happens to be in a RECIPE,
the RECIPE total calories, PFCs etc will be different than when
you saved it (reflecting the changes to the values of the
affected food item).

Note the values stored for the RECIPE itself in the FIT are not
directly affected by changes to items that occur in the RECIPE.
The RECIPE values in the FIT will only be updated when the
RECIPE is loaded and saved.


TABLES  - F4
------

Press the F4 key at any time to view or modify the tables used
by DIETAID.  There are two tables available at the present time.
These are the Diet Allocation Table (DAT), and the Food Item
Table (FIT).  Press F4 to access the DAT, F6 to access the FIT.


Diet Allocation Table (DAT) - F4.

This table allows the experienced person such as a doctor or
nutritionist to specify the distribution of calories to allocate
to protein, fat, and carbohydrate by meal or to each Exchange
Unit by meal.  This table is used in the DIET option when F7 is
pressed to Compute Diet.  The total of all entries in the table
should sum to 100%.  You are only warned if they do not sum, so
be sure you know what you are doing if you choose to use values
that do not sum to 100%.

As distributed the DAT calls for 20% of calories to be allocated
to Protein, 30% to Fat, and 50% to Carbohydrate.  DIETAID distri-
butes them to meals as 30% to Breakfast, 30% to Lunch, 30% to
Supper, and 10% as a Bedtime Snack.  Thus the table says:

        6% Protein for Breakfast, Lunch, and Supper (30% of 20%)
        2% Protein for Bedtime Snack (10% of 20%)

                3 meals at 6% plus one at 2% = 20% Total Protein

        9% Fat for Breakfast, Lunch, and Supper (30% of 30% each)
        3% Fat for Bedtime Snack (10% of 30%)

                3 meals at 9% plus one at 3% = 30% Total Fat

        15% Carb for Breakfast, Lunch, and Supper (30% of 50%)
         5% Carb for Bedtime Snack (10% of 50%)

                3 meals at 15% plus one at 5% = 50% Total Carb

The distributed EU allocation calls for 10% of calories to be
allocated to Milk, 25% Meat, 30% Bread, 5% Vegetable, 10% Fruit,
and 20% Fat.  This is allocated to each meal as follows:

        3% Milk for Breakfast, Lunch, and Supper
        1% Milk for Bedtime Snack

        8% Meat for Breakfast, Lunch, and Supper
        1% Meat for Bedtime Snack

        9% Bread for Breakfast, Lunch, and Supper
        3% Bread for Bedtime Snack

        1% Vegetable for Breakfast
        2% Vegetable for Lunch and Supper

        3% Fruit for Breakfast, Lunch, and Supper
        1% Fruit for Bedtime Snack

        6% Fat for Breakfast, Lunch, and Supper
        2% Fat for Bedtime Snack


Press F5 to switch between the two tables.  Note that the DAT
is always saved even when ESC is pressed, so be sure the values
on the screen are the ones you want.


Food Item Table (FIT) - F6

This table allows entry of additional food items to the table.
The table may hold up to 3000 total food items.  The food items
are displayed in alphabetical order by the first four characters
of their name.  You may scroll through the table with ARROW keys
and PgUp, PgDn keys (CTRL+HOME goes to top of list, CTRL+END
goes to the end of the list).

Note that to ADD a food item (see below) all that is needed is

        . Calories
        . Grams of Protein, Fat, and Carbohydrate

Each of the above are PER ONE MEASURE.  These items are commonly
listed on the back of most packaged foods.


Pauses during scrolling

The FIT is handled in chunks since it will not all fit in memory
so there will be occasional longer pauses during scrolling as it
becomes necessary to read in the next chunk.  Note also that as
changes are made, they are written to the data base as chunks, so
there will be an additional pause during scrolling to write out
any changes to the chunk currently in memory.


Index file

Similarly there is an index to the food item table that is
changed whenever the food name is changed, or an item is added
or deleted.  There will be a pause as you exit the FIT to rewrite
the index file if any of these changes have occured.


Modifying the FIT       (EU calculation F5 and SHIFT+F5)

Modifications may be made to the table by just typing over old
entries.  If any of the PFC or calories are changed DIETAID will
automatically re-compute the EU values for the item.

Pressing SHIFT+F5 will tell DIETAID to not recompute EUs when the
above values are changed.  The status of automatic recomputing is
shown on the bottom of the screen.  SHIFT+F5 will toggle re-
computation on and off as needed.

Press F5 to directly view and/or modify the EU values yourself,
regardless of whether DIETAID has calculated any values.


Adding New items                (F6)

Press F6 to add a new item.  This causes a screen with many rows
with item "~~~~" to appear.  The ~~~~ is a marker that this item
slot is available to make new entries in.  You may continue to
enter new items by typing over the ~~~~ entries.  ARROW keys and
PgUp and PgDn keys will display additional ~~~~~ entries up to
a max table size of 3000 items.

                Primary EU

Note that if DIETAID is recomputing EUs automatically, a PRIMARY
EU must be specified.  DIETAID can determine EUs once it knows
which Unit to allocate the majority of PFCs to.


Relocating Items

As you modify item names, or add new items DIETAID will keep the
names in alpha order.  DIETAID waits until a new chunk (see
Pauses above) needs to be read or written to do this.  If a
revised name falls in a different alpha location or for all new
names you will notice the items moving to their proper alpha
location as chunks of the table are accessed.


Deleting Items                  (F7)

Press F7 while the cursor is resting on an item and the item will
be deleted from the table.  You will be asked to verify that you
wish to delete the item.  Answering Y will delete it, N or ESC
ignore the delete request.


Locating Items                  (F8)

Press F8 to be prompted for an item name (or beginning part of
an item name, any number of letters) to locate in the table.
This does not require an exact match.  You will be moved to that
part of the table that matches or is just prior to where such
an item would occur alphabetically.


PRINTING - F9
--------

Press F9 at any time to print the contents of the Option
currently (or most recently) being accessed.  You may only
print Diets, Menus, or Recipes (print does not print the
FIT or DAT).  You are not reprompted for which Diet, Menu,
or Recipe to print, print merely prints whichever you are
currently working on.

For instance if you have just completed a diet and have it
on the screen, press F9 to print it.  You will be prompted
to press any key when your printer is ready.  Press any key
to begin, or press ESC to NOT print anything.

If your printer is not ready or is out of paper, DIETAID will
pause and display a message to this effect.  Fix the problem
and press any key to continue, or press ESC to discontinue
printing.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1579

     Volume in drive A has no label
     Directory of A:\

    ITEMS    ASC    306001   5-12-90  12:39p
    ITEMSPTR DAT     18000   1-10-90  12:28a
    HELP     TXT     23883   2-17-90  11:11a
    ALLOCTAB PFC       146   9-02-89  10:22a
    ALLOCTAB EU        290   9-02-89  10:19a
    GO       BAT        38  10-18-89   4:57p
    GO       TXT       617   5-05-90   2:12p
    FILE1579 TXT      2005   5-29-90   3:56a
            8 file(s)     350980 bytes
                            7168 bytes free
