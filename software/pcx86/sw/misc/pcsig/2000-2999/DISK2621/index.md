---
layout: page
title: "PC-SIG Diskette Library (Disk #2621)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2621/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2621"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CALCOUNT.TXT

{% raw %}
```
CALCOUNT Version 2.1 Copyright 1990 by K. R. Haeusler
------------------------------------------------------

A. INTRODUCTION

CALCOUNT, the Calorie Counting System, is designed around
three files, FOODCAL.DAT, MEALCAL.DAT and PERS.DAT.
FOODCAL.DAT has more than 550 different food items (165 in
Demo) and contains each item's caloric value per a specific
unit of measure.  MEALCAL.DAT is an empty file in which you
will record "meals" which are created using CALCOUNT.
PERS.DAT is also an empty file in which you will record
personal data including weight, blood pressure and caloric
intake on a daily basis.

You may add food items and created meals to the files using
the "Edit" options.  Also, you may record a created "meal" as
a food item in FOODCAL.DAT with a measure of 1 EACH.  This
makes it easy to use in a more complex meal (See Operating
Hints.)  A hardcopy can be made of the data in each file from
the Main Menu "Print" option.

CALCOUNT is menu driven and does not require a complicated
set of computer commands to be used effectively.



B. SYSTEM REQUIREMENTS

An IBM(tm) PC or compatible system using MS(tm)-DOS version
2.0 or later operating system is required.  A single disk
drive is sufficient.  System memory should be at least 192K.
Graphic capability similar to Hercules(tm) is required to
take advantage of the graphing option.  A printer, using
Epson(tm) or IBM(tm) character sets, is desirable although
not absolutely required.


C. START UP

It's wise to make a working copy of the distribution disk
before proceeding with the program installation.

Prior to using CALCOUNT, run the installation program by
typing <INST-CAL> with the distribution disk in the current
drive.  This creates (or modifies) a file called "Config.cal"
which contains the information you supply regarding data file
locations, printer configuration and screen attributes.  The
CONFIG.CAL file must be located in the same directory as
CALCOUNT.EXE while running the program.

A copy of your MS(tm)-DOS operating system may be installed
on a CALCOUNT system disk and an autoexec.bat file provided
to start the system using <calcount> as the command.
Thereafter it is only necessary to turn on the computer with
the system disk in Drive A to autoboot and run the program.
Of course the program may also be installed on a hard disk.
The data files and program file need not be in the same
directory if you have properly executed Inst-Cal.

Start the system by typing <calcount> [RETURN]; the system
will come up with the CALCOUNT main menu.


D. SPECIAL KEYS

ESC KEY

Pressing [ESC] during most operations will return you to a
previous menu or the main menu.

ALT-L and ALT-D KEYS

Holding down the ALT key while pressing the "L" key is used
to load a food or meal from the respective list to the
working position.  Similarly the ALT plus "D" keys are used
in deleting a food or meal from the files.

E. DEFAULT ENTRIES

Any time a date entry is called for, pressing [RETURN]
without an entry will select the current system date.

When entering food measures, pressing [RETURN] without an
entry will select the measure as noted for the food.  Any
other compatible measure may be entered and the calories will
be correctly calculated by the system.  The system will not
allow an incompatible measure to be chosen.

F. FILE SORTING

Anytime a food or meal is added to the respective files, the
system will automatically sort the file so that the next time
you call up the list items are in the proper order.

When a food or meal is deleted it is not actually removed
from the file (although it will not be listed) until the file
is next sorted.  A sorting option is provided on the edit
menus to allow you to clear the files if they should get
cumbersome with deleted entries.

G. MENU OPERATION

You may select a menu option by moving the cursor to the
selection and pressing [RETURN] or by pressing the key for
the first letter of the desired command.  Use the cursor
arrow keys to move the cursor around the menu.

H. MAIN MENU

CREATE MEAL - This option leads you through the creation of a
              meal using food items already in FOODCAL.DAT.
              Prior to creating a meal, FOODCAL.DAT should be
              checked to verify that all the necessary food
              items are there.  A "meal" is limited to a
              total of 8 food items.  However, see "Operating
              Hints" for examples of easy ways to surmount
              this limitation.  After creation, a "meal" may
              be saved in MEALCAL.DAT and also may be saved
              in FOODCAL.DAT.  A hardcopy is an option.  (See
              below also.)

RECALL MEAL - This option lets you select the name of a meal
              which has been previously created.  MEALCAL.DAT
              will be searched for the meal.  When found, the
              meal including all its food items will be
              printed on the monitor screen.  The meal may be
              edited, printed, and its calories added to the
              running total.  (See below also.)

EDIT        - This option will allow you to edit FOODCAL.DAT,
              MEALCAL.DAT or PERS.DAT files.

PRINT       - This option will provide a hardcopy of any of
              the three files.

GRAPH       - This option will lead you through the steps to
              provide a graph of personal data for a maximum
              period of 30 days.

EXIT        - Exit from the program and return to the DOS
              prompt.


I. CREATING MEAL/RECALLING MEAL

A meal is created by selecting items from the food list,
moving them to the meal and entering the quantity and measure
for each.  Note that pressing [RETURN] without entering a
measure will use the measure noted for that item.  After
entering the last item press [RETURN] at the "START LETTER?"
prompt and a summation of the calories will appear as the
meal total and the following menu will come up:

EDIT        - This option will allow deleting or adding
              an item or changing the quantities.

INCLUDE IN TOTAL - The total will be summed with previous
              totals and the running total retained.  With
              this option you can retain several meals for a
              daily total to be entered in PERS.DAT.

SAVE IN MEAL FILE - Name the meal and save.

ADD TO FOOD FILE - Save as a food (the quantity used will be
              1 Each.)

TOTAL TO PERS FILE - Retains the current total and calls up
              the file content for the specified date and
              identifier.  The underlying menu allows the
              total to be added to the total already in the
              file or to replace it; the data to be edited;
              and the final result put back in the file.

PRINT       - A copy of the created meal is sent to the
              printer.

MAIN MENU   - Return to the top menu.

A meal is recalled by selected the wanted meal from the meal
list.  The meal will be printed in the operating area and the
menu just described will appear allowing the options as
described above.


J. EDIT MENUS

The choices when editing the food or meal files are as
follows:

EDIT ITEM   - This option leads you through selecting a food
              or meal item which then is called up and
              displayed.  The underlying menu provides
              options to change the measure or calorie count,
              and, in the case of a meal, add or delete
              constituent items.

ADD ITEM    - A food item may be added to the file with this
              option.  If the edit meal option is selected,
              the system will go to "Create Meal."

DELETE ITEM - A food or meal item may be deleted from the
              file with this option.

SORT FILE   - This option sorts the file and removes
              previously deleted items.

When editing the personal data file the system asks for a
date and identifier and retrieves and print the data found
under the defined parameters.  The underlying menu displayed
is:

EDIT        - This will allow you to change any of the
              displayed data.

DELETE      - This will allow you to delete the entire entry
              from the file.

ADD Cals    - This option will ask for the number of calories
              you wish to be added to the days total and then
              make the addition.

PUT IN FILE - You must select this option after making a
              change if you want the change to be saved.

SORT FILE   - This option will put the file in order by date.

QUIT        - Returns to the Main Menu.

K. OPERATING HINTS

CREATING A COMPLEX MEAL - The 8 food item limitation for a
meal is readily overcome with a little pre-planning.  For
example, if you are creating a spaghetti dinner, all the
ingredients going into the spaghetti sauce may quickly use up
the allowed number of items.  However, this dinner can be put
together easily using sub-meals, i.e. "Presauce" and
"Spaghetti Sauce".  First create the "meal" named "PRESAUCE"
with up to 8 of the sauce ingredients.  Save this "meal" as a
meal in MEALCAL.DAT (to record the ingredients) and also in
FOODCAL.DAT as a food item with the caloric value as
calculated by CALCOUNT and a measure of "1, EACH".  Now
create another "meal" named "SPAGHETTI SAUCE".  This "meal"
is created using the previously created food item "PRESAUCE"
and all the remaining items used in the spaghetti sauce.
Save it too, both in MEALCAL.DAT and FOODCAL.DAT.  Finally
create the whole dinner, "SPAGHETTI DINNER", using the food
item "SPAGHETTI SAUCE" plus all other required food items.
Using this technique, an unlimited number of items can be
used in a complex meal.

NOTE - It is wise to ascertain beforehand that the needed
items are in FOODCAL.DAT before getting very far in creating
a meal.  You can check immediately after entering "Create" by
paging through the food item list.  (NOTE - PRESSING [ESC]
WHILE IN THE FOOD LISTING MODE WILL CLEAR THE LIST AND START
AGAIN BY ASKING  "START LETTER?")  If needed food items are
not present, the FOOD LIST option on the EDIT MENU can be
used to add the missing item or items before proceeding.

WARNING - If you make a change in a meal item which has also
been saved as a food item, remember you must save the changed
meal again in the FOODCAL.DAT file (or edit the food file).
It will not be done automatically.
```
{% endraw %}

## CALSHARE.TXT

{% raw %}
```
CALCOUNT Version 2.1 Copyright 1990 by K. R. Haeusler
------------------------------------------------------------

I.  Registration Information and Shareware concept.

    CALCOUNT is a copyrighted program.  It is distributed as
    User-Supported Software.  This means that you are free to
    use the program as distributed for your own personal use.
    You are encouraged to register and pay the current
    license fee so that you can obtain the most current
    release with the latest features.  Registered users will
    also receive a fully loaded copy of the food file
    FOODCAL.DAT containing more than 550 items.  By registering
    now you will be supporting this "try now, pay later"
    concept of software distribution.

    Individuals are granted permission and encouraged to copy
    and pass along copies of this diskette provided that no
    price or other consideration is charged, except for the
    cost of distribution materials, and provided that copies
    are not modified in any way and include all
    documentation.

    Registration includes a copy of the most current program
    and documentation, technical support and a fully loaded
    copy of the FOODCAL.DAT file.

    The current price for registration is $19.95.

             Send a check or money order to:

             K. R. Haeusler
             Rt #2 Box 487
             Ten Mile, TN 37880


II.  Disclaimer

    The author assumes no liability to you or any other
    person for any damage or loss caused by this software,
    either directly or indirectly.

III.  Problems or Bugs

    If you have any problems and are a registered user
    or wish to report any bugs, please contact the author.

             K. R. Haeusler
             Rt #2 Box 487
             Ten Mile, TN 37880
             (615) 376-4726















IV.  Order Blank

-------------------------------------------------------------
                    CALCOUNT ORDER FORM
-------------------------------------------------------------

Name ______________________________

Address ___________________________

City ______________________    State ____   Zip _________

Phone _____________________

Computer __________________             DOS Version _____

Printer ___________________
```
{% endraw %}

## FILE2621.TXT

{% raw %}
```
Disk No: 2621                                                           
Disk Title: CalCount                                                    
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: CALCOUNT                                                 
Author Version: 2.2                                                     
Author Registration: $19.95                                             
Special Requirements: Graphics capability and printer recommended.      
                                                                        
Dieters rejoice! With CALCOUNT you can easily track your daily calorie  
consumption, weight, and blood pressure. The extensive food and         
calorie lists make menu planning a breeze. CALCOUNT includes automatic  
calculation of calories per serving and extensive editing capability    
(without lots of typing). Graphs and printouts are also available.      
The registered version includes an even larger food file.               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2621

     Volume in drive A has no label
     Directory of A:\

    CALCOUNT EXE    153774   2-26-91   9:22a
    CALCOUNT TXT     10752  10-27-90  11:18a
    CALSHARE TXT      2560  10-24-90   2:46p
    CONFIG   CAL        42  11-09-90   2:21p
    FOODCAL  DAT      5376  10-25-90  11:26a
    INST-CAL COM     46971  11-09-90  10:37a
    MEALCAL  DAT         0  10-25-90  11:30a
    PERS     DAT         0  10-25-90  11:30a
    FILE2621 TXT      1555   6-06-91  11:15a
    GO       BAT        37   1-23-91  10:48a
    GO       TXT       927   1-01-80   3:29a
           11 file(s)     221994 bytes
                           95232 bytes free
