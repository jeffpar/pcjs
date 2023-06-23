---
layout: page
title: "PC-SIG Diskette Library (Disk #116)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0116/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0116"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICROGOURMET 1 OF 2  (#117 SECOND DISK)"

    MicroGourmet is a two-disk software package, which functions through
    dBASE II, but will also run through dBASE III after it is converted. It
    was designed to help those of you who spend great gobs of time looking
    through cookbooks and rummaging through scraps of paper to find those
    elusive recipes you put right here or maybe here...or!!!
    
    MicroGourmet will help reduce the time spent choosing recipes to
    prepare for both family and guest meals.  It is also an aid to menu
    planning.  You can select recipes for whatever time period you wish (a
    week, for instance), print the recipes (as a reference), and prepare
    and print a shopping list to take to the store.  You can also add and
    change recipes. A great way to increase your culinary skills.
    
    System Requirements: Two disk drives, dBASEII
    
    How to Start:  Access microGOURMET through DBASEII.  At the dot prompt,
    type DO MENU.  Consult MANUAL.DOC for program documentation.
    
    File Descriptions:
    
    The First Disk Contains:
    GOURMET  LOW  Version of M-G for single-sided drives (rename .PRG)
    GOURMET  HI   Version of M-G for 360K or HDU drives  (rename .PRG)
    READ     ME   Notes about MicroGOURMET programs and listing documentatio
    MANUAL   DOC  MicroGOURMET manual in listable DOS file format
    ITEM     NDX  MicroGOURMET dBASE II index file
    NUMBER   NDX  MicroGOURMET dBASE II index file
    TYPE     NDX  MicroGOURMET dBASE II index file
    SHOP     DBF  MicroGOURMET dBASE II database file
    ITEM     DBF  MicroGOURMET dBASE II database file
    
    The Second Disk Contains:
    MANUAL   TXT  MicroGOURMET manual  (WORDSTAR format)
    GOURMET  DBF  MicroGOURMET dBASE II database file
    UNWS     BAS  Program for converting WORDSTAR files to DOS files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #116, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  READ    .ME          CRC = 8D 3C

--> FILE:  GOURMET .HI          CRC = AB 81

--> FILE:  GOURMET .LOW         CRC = AC 08

--> FILE:  ITEM    .DBF         CRC = 21 7F

--> FILE:  SHOP    .DBF         CRC = D1 20

--> FILE:  TYPE    .NDX         CRC = 92 76

--> FILE:  NUMBER  .NDX         CRC = E4 55

--> FILE:  ITEM    .NDX         CRC = 45 57

--> FILE:  MANUAL  .DOC         CRC = 63 82

 ---------------------> SUM OF CRCS = F7 08

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
...CO 65


















     Copyright (c) 1983 microGOURMET.  All rights reserved.

                           created by

                        Barbara Dalrymple
                           Ron Cleaver




                           Release 1.10




                       System Requirements

1.  dBASE II
2.  At least 180k bytes of disk storage,  with at least 90k bytes 
    per disk. 
3.  A display screen with at least 40 columns and 24 rows.
4.  CP/M-80 or CP/M-86 or MP/M OR MP/M-86 or PC-DOS or MS-DOS. 









dBASE II is a trademark of Ashton-Tate
CP/M and MP/M are trademarks of Digital Research
PC-DOS is a trademark of IBM
MS-DOS is a trademark of Microsoft


...T1
                             Preface

...T2
Versions

microGOURMET  is  distributed  in  two  versions,  one  for  high 
capacity disks (e.g., double density disks used with the IBM PC), 
and  one for low capacity disks (e.g.,  single density disks used 
with  the Osborne 1).   The versions vary in  their  installation 
procedure, and in their capabilities.  Both versions are supplied 
on  the distribution disk.   This procedure will allow  you,  for 
example,  to use the low capacity version initially,  and use the 
high  capacity  version  if  you upgrade your  system  to  larger 
capacity disks.

The  installation  procedures are discussed  separately,  in  two 
ways.   First,  if  you  are familiar with  computers  and  their 
operation, there is a section entitled "If You Can't Wait To Read 
the  Manual".   This section summarizes the method of  installing 
each  version.   If you don't understand that section,  then read 
the Installation Section,  which elaborates on both  installation 
procedures.

...T2
Files

The following files are included with the package:

     GOURMET.HI     Program for high capacity disks
     GOURMET.LOW    Program for low  capacity disks
     GOURMET.DBF    Recipe data base
     ITEM.DBF       Ingredient data base
     SHOP.DBF       Shopping list data base (empty)
     TYPE.NDX       Category Index
     NUMBER.NDX     Record number index
     ITEM.NDX       Ingredient Index

The  file ITEM.NDX will be present only if the capacity  of  your 
disk  will permit.   Otherwise,  if you will be using the program 
for high capacity disks,  you must create it using the option  on 
the Data Base Maintenance Menu.

microGOURMET  also uses other files.   OPTION.MEM will be created 
by  the installation process on the default disk drive.   A  file 
named  TEMP.DBF  is used in the process of deleting the  shopping 
list file, for temporary storage (this accommodates a peculiarity 
of some operating systems).  Finally, INGREDNT.DBF is a temporary 
file used when creating the ingredient index.

...T2
Ingredient Index

For this package,  which provides ninety gourmet recipes, and for 
each  additional  recipe  disk  released,   we  will  include  an 
ingredient  listing  in  alphabetical  order.   This  listing  is 
primarily  for those of you who will be using  GOURMET.LOW.   But 
you  can  also  use it in lieu of  displaying  ingredients,  when 
searching for recipes by category and ingredient.
                        Table of Contents

  Preface  . . . . . . . . . . . . . . . . . . . . . . . . .    2
     Versions  . . . . . . . . . . . . . . . . . . . . . . .    2
     Files . . . . . . . . . . . . . . . . . . . . . . . . .    2
     Ingredient Index  . . . . . . . . . . . . . . . . . . .    2
  If You Can't Wait To Read the Manual . . . . . . . . . . .    4
     Low Capacity Disks  . . . . . . . . . . . . . . . . . .    4
     High Capacity Disks . . . . . . . . . . . . . . . . . .    5
  Installation . . . . . . . . . . . . . . . . . . . . . . .    6
     Preparation - Low Capacity Disks  . . . . . . . . . . .    6
        Total floppy disk storage of 180k bytes  . . . . . .    6
        Hard Disk  . . . . . . . . . . . . . . . . . . . . .    7
        Memory Disk  . . . . . . . . . . . . . . . . . . . .    7
     Installing - Low Capacity Disks . . . . . . . . . . . .    7
     Preparation - High Capacity Disks . . . . . . . . . . .    8
        Total floppy disk storage of more than 180k bytes. .    8
        Hard Disk  . . . . . . . . . . . . . . . . . . . . .    9
        Memory Disk  . . . . . . . . . . . . . . . . . . . .    9
     Installing - High Capacity Disks  . . . . . . . . . . .    9
  Overview . . . . . . . . . . . . . . . . . . . . . . . . .   10
     Category  . . . . . . . . . . . . . . . . . . . . . . .   10
     Category and Name . . . . . . . . . . . . . . . . . . .   11
     Category and Ingredients  . . . . . . . . . . . . . . .   11
     Category and Preparation Time . . . . . . . . . . . . .   11
  Program Operation  . . . . . . . . . . . . . . . . . . . .   13
     Main Menu . . . . . . . . . . . . . . . . . . . . . . .   14
     Option 1 - Recipe Retrieval . . . . . . . . . . . . . .   14
     Option 2 - Shopping List  . . . . . . . . . . . . . . .   16
     Option 3 - Data Base Maintenance  . . . . . . . . . . .   17
        Data Base Record Structure . . . . . . . . . . . . .   20
     Option 4 - Switching Disks  . . . . . . . . . . . . . .   21
     Option 5 - Exiting to the Operating System  . . . . . .   21
     Option 6 - Exiting to dBASE II  . . . . . . . . . . . .   21
  Ingredient List  . . . . . . . . . . . . . . . . . . . . .   22




















...T1
              If You Can't Wait To Read the Manual

...T2
                       Low Capacity Disks

To  get you started in a hurry,  you can read only this  section.  
If  you don't have any problems understanding this  summary,  you 
should  be enjoying microGOURMET in a few minutes.   If you  have 
only  180k  bytes of total usable disk  storage,  then  use  this 
procedure.

1.  Make a backup copy of the disk(s) which you received. Put the 
    original(s) away in your disk library and use the copy(ies).

2.  Put  the  following  dBASE  II files  on  the  default  disk: 
    (normally A:)

    - DBASE.COM
    - DBASEMSG.OVR
    - DBASEMAI.OVR
    - DBASEMSC.OVR
    - GOURMET.CMD (copy GOURMET.LOW and rename it)
    - NUMBER.NDX
    - TYPE.NDX
    - SHOP.DBF

    Put the file GOURMET.DBF on drive B:.

    The program file you use should be on the default disk.   You 
    should rename it either GOURMET.CMD or GOURMET.PRG, depending 
    on  which  extension your version of dBASE II  requires.   We 
    assume  here  that you use the  extension  .CMD.   When  this 
    program  is initiated by typing DBASE GOURMET,  it will  look 
    for  a  file named OPTION.MEM.   If it is not on the  default 
    disk,  the  program  displays the other  files  required  for 
    operation  and  asks you to change their disk drive  location 
    (the  default  is B:) and/or name.  Make sure you  enter  the 
    correct disk drive letter to reflect where you put the files.  
    If any file cannot be found,  an error message of the form  - 
    Bad  <filename>  - will  be displayed.   Next you  enter  the 
    number of columns which your screen can display.  The default 
    is  80 but you can change it to any other number  between  40 
    and 132.

3.  Several  screens offer a help option.   On these screens  you 
    should  respond  with  a  ?  (question mark)  until  you  are 
    familiar  with program operation.   The help text will  guide 
    you through the options,  but read the manual further if  you 
    still have questions.

4.  Letter  or  word responses may be entered in either upper  or 
    lower  case.   Press  the  return  or  enter  key  after  all 
    responses.

5.  If you don't understand what you have read so far,  then  you 
    should take the time to read the manual.

...T2
                       High Capacity Disks


To  get you started in a hurry,  you can read only this  section.  
If  you don't have any problems understanding this  summary,  you 
should  be enjoying microGOURMET in a few minutes.   If you  have 
more than 180k bytes of total usable disk storage,  then use this 
procedure.

1.  Make a backup copy of the disk(s) which you received. Put the 
    original(s) away in your disk library and use the copy(ies).

2.  The  dBASE II files (i.e.,  DBASE*.*) must be on the  default 
    disk.   The  microGOURMET  program  file  you  use  is  named 
    GOURMET.HI.   The  program  file  you use should  be  on  the 
    default  disk.   You  should rename it either GOURMET.CMD  or 
    GOURMET.PRG,  depending  on which extension your  version  of 
    dBASE  II   requires.   We  will  assume  that  you  use  the 
    extension .CMD.  Put all the other microGOURMET files on disk 
    B: if you have sufficient space.

    When  this program is initiated by typing DBASE  GOURMET,  it 
    will look for a file named OPTION.MEM.   If it is not on  the 
    default  disk,  the program begins the installation process.

3.  If you don't have sufficient disk space on logical disk drive 
    B:,  or  you  want  to put the program and data  files  on  a 
    "memory  disk"  or  hard disk,  then  read  the  installation 
    section of the manual.

4.  Several  screens offer a help option.   On these screens  you 
    should  respond  with  a  ?  (question mark)  until  you  are 
    familiar  with program operation.   The help text will  guide 
    you through the options,  but read the manual further if  you 
    still have questions.

5.  Letter  or  word responses may be entered in either upper  or 
    lower  case.   Press  the  return  or  enter  key  after  all 
    responses.

6.  If you don't understand what you have read so far,  then  you 
    should take the time to read the manual.












...T1
                          Installation

...T2
                Preparation - Low Capacity Disks

microGOURMET  is  designed to be used on a variety  of  different 
hardware  and with a variety of operating systems.   The hardware 
may vary in its configuration,  and installation of this  package 
will  accommodate  these variations.   If you have 180k bytes  of 
total disk storage, use this procedure.

It's not difficult to install microGOURMET,  because it  requires 
only two screens,  and entry of a few items.  The primary purpose 
of  installation  is to account for variations  in  disk  storage 
capacity  (i.e.,  the  number of characters which each  disk  can 
hold),   and  the  screen  size  (in  particular  the  number  of 
characters  which  can be displayed on a horizontal line  of  the 
screen).

Before you do anything else,  make a copy of the disk(s) supplied 
with the package,  put the original(s) away in your disk library, 
and use the copy(ies).

We will discuss the preparation of microGOURMET disk(s) for three 
types of installations:

     - total floppy disk storage of 180k bytes
     - hard disks
     - memory disks 

The  following assumes that A:  is the default disk drive and  B: 
contains the data, for floppy disk installation.

...T3
Total floppy disk storage of 180k bytes

1.  Put the following files on A:
    - DBASE.COM
    - DBASEMSG.OVR
    - DBASEMAI.OVR
    - DBASEMSC.OVR
    - GOURMET.CMD (copy GOURMET.LOW and rename it)
    - NUMBER.NDX
    - TYPE.NDX
    - SHOP.DBF

2.  Put the file GOURMET.DBF ON B:

    You can also put the file DBASEAPP.OVR on A:.   This file  is 
    required  for data base maintenance (see option 3 on the main 
    menu).  However, its presence will reduce the space available 
    for  building a shopping list using SHOP.DBF.   We  recommend 
    that  you prepare a separate disk as above for  A:  including 
    DBASEAPP.OVR for use when you add, change or delete recipes.

3.  Run  the program when you have the A> prompt by typing  DBASE 
    GOURMET.
...T3
Hard Disk

Copy  all  dBASE  II  files to your hard disk,  as  well  as  the 
microGOURMET files supplied (use GOURMET.HI).   Assuming that the 
hard disk is drive C:,  then at the C> prompt enter DBASE GOURMET 
and press the return or enter key. 

...T3
Memory Disk

Set  up a batch file to copy all dBASE II and microGOURMET  files 
(use  GOURMET.HI) your memory disk.   Assuming the memory disk is 
D:, then at the D> prompt type DBASE GOURMET and press the return 
or   enter  key.    With  a  memory  disk  you  must   re-install 
microGOURMET (i.e.,  recreate the file OPTION.MEM) each time  you 
use it.

...T2
Installing - Low Capacity Disks

When  microGOURMET  begins,  the first screen displays  the  full 
file  specification for the files which you can install.   Change 
the disk drive identifier, if necessary, to reflect the manner in 
which  you  prepared your disks.   You may also change  the  file 
names if you already have a file on the disk with the same  name.  
But you must rename them when preparing the disks (not here).

Then  enter  a number on the next screen equal to the  number  of 
columns your screen can display on a row.  microGOURMET will then 
create a file named OPTION.MEM on the default disk.  microGOURMET 
is now installed.  Enjoy it. 

Some  display screens which are not adjusted correctly may  shift 
the  entire  display to the left or right.   If the  microGOURMET 
screens  don't look centered on your screen,  you can  erase  the 
file  OPTION.MEM on the default disk,  and reinstall the  program 
changing the screen parameter to compensate for your display.




















...T2
                Preparation - High Capacity Disks

microGOURMET  is  designed to be used on a variety  of  different 
hardware  and with a variety of operating systems.   The hardware 
may vary in its configuration,  and installation of this  package 
will  accommodate these variations.   If you have more than  180k 
bytes of total usable disk storage, then use this procedure.

It's not difficult to install microGOURMET,  because it  requires 
entry of a few items.   The primary purpose of installation is to 
account for variations in disk storage capacity (i.e., the number 
of characters which each disk can hold),  and the screen size (in 
particular  the number of characters which can be displayed on  a 
horizontal line of the screen).

Before you do anything else,  make a copy of the disk(s) supplied 
with the package,  put the original(s) away in your disk library, 
and use the copy(ies).

We will discuss the preparation of microGOURMET disk(s) for three 
types of installations:

     - total floppy disk storage of more than 180k bytes
     - hard disks
     - memory disks 

The  following assumes that A:  is the default disk drive and  B: 
contains the data, for floppy disk installation.

...T3
Total floppy disk storage of more than 180k bytes.

1.  Put  the dBASE II files and the program file (use GOURMET.HI) 
    on A:.   Use GOURMET.HI for the program file and rename it as 
    appropriate for your version of dBASE II,  with the extension 
    .CMD OR .PRG."

2.  If  you  have two disk drives and sufficient space on one  of 
    them,  (about  140k bytes or more to allow for shopping  list 
    storage)  we  recommend that you put all the  other  supplied 
    files on B:.

3.  At the A> prompt, enter DBASE GOURMET.

4.  If  you don't have enough space on the B:  disk for  all  the 
    supplied  files,  then some of these files must be placed  on 
    A:, at your discretion.









...T3
Hard Disk

Copy  all dBASE II files to your hard disk,  as well as the  ones 
supplied (use GOURMET.HI).   Assuming that the hard disk is drive 
C:,  then  at  the  C> prompt enter DBASE GOURMET and  press  the 
return or enter key. 

...T3
Memory Disk

Set  up a batch file to copy all dBASE II and microGOURMET  files 
(use  GOURMET.HI) to your memory disk.   Assuming the memory disk 
is  D:,  then at the D> prompt type DBASE GOURMET and  press  the 
return  or  enter key.   With a memory disk you  must  re-install 
microGOURMET  (i.e.,  recreate the file OPTION.MEM) each time you 
use it.

...T2
Installing - High Capacity Disks

When microGOURMET begins,  it asks you to enter a value equal  to 
the number of columns your screen can display on a row.   Next it 
asks  for the number of disk drives in your system.   The  number 
you  enter  should equal the number of logical  disks  you  have.  
(Sometimes  hard  disks are divided into several  logical  disks, 
e.g.,  C: and D:.  Memory disks usually have a logical disk drive 
designation as well.)  You can also enter the number of disks you 
want the program to search.  If, for example, you have two disks, 
but  have all the files on A:,  you could enter 1 here,  so  that 
drive B: would not be searched (and doesn't need a disk in it).

Next  you  are asked whether you want to change any of  the  file 
names  which the program uses.   This should only be necessary if 
you  already have a file on a disk with the same name.   In  that 
case,  answer yes,  and the file names are displayed.  The cursor 
will position itself at the first entry.   For each  file,  press 
return  if  you don't want to change the name,  or enter the  new 
name and then press return.

The program will search your disks (in ascending order,  i.e.  A: 
first,  then B:,  etc.) to find the files it needs.   However, it 
you don't want to search all your disk drives or you simply don't 
want  to  remember to put a disk in all  drives,  then  the  next 
screen  will accommodate you.   It asks you which drive to  start 
the search.   Specify the drive to begin with,  or leave it blank 
and press return to search all disk drives.   For example, if you 
have three disk drives, but have placed all the files on C:, then 
enter C here, and A: and B: will not be searched.

microGOURMET  will  then ask you to wait while it  completes  the 
process, including the creation of a file named OPTION.MEM on the 
default disk.  microGOURMET is now installed.  Enjoy it. 

Some  display screens which are not adjusted correctly may  shift 
the  entire display to the left or right.   If the screens  don't 
look  centered on your screen,  you can erase the file OPTION.MEM 
on the default disk, and change the screen parameter.
...T1
                            Overview

This  section will tell you about what  microGOURMET  does.   The 
next section will explain in detail how it works.

microGOURMET  is  a software package which was designed  to  help 
those of you who spend lots of time looking through cookbooks and 
rummaging through scraps of paper to find recipes.   It will help 
reduce the time spent choosing recipes to prepare for both family 
and  guest meals.   It is also an aid to menu planning.   You can 
select  recipes for whatever time period you wish  (a  week,  for 
instance),  print  the recipes (as a reference),  and prepare and 
print a shopping list to take to the store.

You can also add recipes of your own at any time.  You can change 
the   recipes  supplied  if  your  taste  dictates  a  change  in 
ingredient proportions, or you want to modify the instructions to 
suit your cooking style.  You can also delete any recipe that you 
don't like (we hope that doesn't happen often).

microGOURMET  uses  a hierarchy of menus.   When  you  select  an 
option  from the main menu,  another menu may then be  displayed, 
offering  a further refinement to your choice of  actions.   This 
process continues until you have focused on exactly what you want 
to do, and then, for example, recipes are retrieved and displayed 
or printed, and, if you like, added to a shopping list file.

microGOURMET  is  menu  driven.   This  means  that,  except  for 
responses which require a yes or no, all options are labeled with 
numbers (and you can enter a ? for help).  The number 0 (zero) is 
reserved for returning to a previous menu.   Normally,  you  just 
press  a key corresponding to the number you want,  press  return 
and go on.  This allows you to selectively "navigate" through the 
many options provided.

Until  you are familiar with the functions of this package (which 
shouldn't  take long),  we suggest you use the help screens as  a 
guide.   On any screen which allows it,  just enter a ? (question 
mark) in response to a request for option selection.

With microGOURMET you can retrieve recipes by category alone,  or 
by  category  and one other criterion,  such as  recipe  name  or 
ingredients or preparation time.

...T2
Category

All  microGOURMET recipes are classified according  to  category. 
The category is intended to provide the main window into the data 
base,  and designed to correspond to the main selection criterion 
normally used to search for a recipe.   The categories are always 
numbered from 1 to 7 and are defined as follows:




                          1) Appetizers
                          2) Salads
                          3) Main Dishes
                          4) Vegetable Dishes
                          5) Breads
                          6) Desserts
                          7) Cookies

You  will probably want to retrieve recipes by category alone  if 
you just want to study what's available for a particular type  of 
dish  you have in mind.  In this case,  nothing else is asked  of 
you.   Then the text of the recipes in the category selected will 
be  retrieved for you to examine.   If you want to browse through 
the data base looking for an idea regardless of category, you can 
tell the program to ignore the category in finding  recipes,  and 
then the recipes will be retrieved sequentially.

...T2
Category and Name

When  you want to spend less time searching for something good to 
fix,  add another selection criterion.   If you want a quick look 
at the names of recipes in a category, select recipes by category 
and name.   You will then be shown a list of names from which you 
can choose one that appeals to you.

...T2
Category and Ingredients

If you are using GOURMET.HI, you can examine the ingredient index 
before  proceeding,  to  see whether the ingredients you have  in 
mind  are  in  a recipe somewhere.   You can  also  see  how  the 
ingredient   is   specified,   and  whether  there  are   several 
alternatives (i.e., variations) for your ingredients.

If  you  have two or three items in the cupboard or  refrigerator 
which you want to use for a dish,  select recipes by category and 
ingredients.    When   you  retrieve  recipes  by  category   and 
ingredients,  you may use upper or lower case for the name of the 
ingredient.   The  program  will look for ingredients exactly  as 
spelled,  so  be  careful  here.   You can be as  general  or  as 
specific  as  you  want in entering  the  ingredient  name.   For 
example,  you  can  enter chicken as an  ingredient,  or  chicken 
breasts.  Up to three ingredients may be specified.  If no recipe 
matches the ingredient(s) entered, try being less specific.  

...T2
Category and Preparation Time

If  you have just come home from work and don't want to  spend  a 
lot  of time cooking,  select recipes by category and preparation 
time.

We  have  personally prepared and tasted all  recipes  which  are 
supplied   with  this  package.    Besides  enjoying  the   meals 
tremendously,  (no,  we  didn't get fat in the process.) we  have 
determined  a reasonable preparation time for each  recipe.   The 
times given are for an experienced cook, so novices beware.
We  define  preparation  time to be the total number  of  minutes 
necessary to complete a recipe,  from start to finish,  including 
time for cooking, refrigeration, etc.
  
Recipes  which  take  a long time (e.g.,  must be left  to  chill 
overnight), will have a preparation time of 999 minutes.




If you have never used menu driven software before,  all of  this 
may seem a bit vague.  But don't worry.  Reading the next section 
should help clear things up.










































...T1
                        Program Operation

This section will tell you how the program works,  in detail.  We 
will explain each option on each menu,  and each response that is 
requested.  Examples of the appearance of the display screen will 
be shown to help you get the feel of using the package.   We will 
provide  some basic information and then go on to the menus.

Some messages and response are common to the entire program.   To 
avoid  repeating a complete explanation of them in all the places 
where they occur, we summarize them here:

     - If  your response to selection of an option is not one  of 
       the responses allowed, you will see the following message:

                    Invalid Input
                    Press Return to Continue     

       Depending on your keyboard, press the key which is labeled 
       return,  or  enter,  or newline.   Sometimes this key  has 
       other  labels,  such as an arrow pointing down and to  the 
       left (as on the IBM PC).

     - If a delay will be encountered in fulfilling your request, 
       a message will be displayed:

                    One Moment Please...

     - In many cases,  while searching for recipes,  you will  be 
       given  the  option to find additional recipes  which  meet 
       your  selection  criteria.   In  that case  the  following 
       message will be displayed and you decide whether or not to 
       go on:

                    Continue Searching?
                         (Y or N)

     - After  completing  a  search  for  recipes,   one  of  the 
       following  two messages will appear,  depending on whether 
       or not the end of the recipe data base was reached:

                    End of Search
                    Press Return to Continue

                    End of File
                    Press Return to Continue

All  responses  will  have a value pre-defined  by  the  program, 
called  the default response.   If you like the response  already 
defined for you,  then entry of a response is not required.  Just 
press  return in that case.   When the program is initiated,  the 
default  response will be the first item in the list of  options.  
After  using  the  program for a while,  you will  see  that  the 
default  responses often become the last response (or an inferred 
response) which you entered in answer to a choice of options.
...T2
                            Main Menu

We  assume at this point that you have installed the  program  as 
you wish,  after having read the Installation Section.  The first 
screen which you will see is:

                     
                    microGOURMET Main Menu

                 1 Find Recipes
                 2 Prepare Shopping List
                 3 Perform Data Base Maintenance
                 4 Change to Another Recipe Disk
                 5 Exit to Operating System
                 6 Exit to dBASE II


Option  1.  The  next  level menu is  displayed,  explaining  the 
options you have for recipe retrieval.  

Option 2. A menu of shopping list options appears.  Note that, if 
part  of your goal if to prepare a shopping list,  then you  must 
execute this option first,  to tell the program that you will  be 
compiling the list while searching for recipes.  

Option 3. A menu of data base maintenance options is displayed.

Option 4.  This option allows you to change recipe and/or program 
disks (if you have multiple recipe disks, for example).  

Option 5. With this option, you exit the program, and dBASE II as 
well, returning you to the operating system.  

Option 6.  This option lets you exit the program,  but leaves you 
within dBASE II, to do whatever else you like.

If you don't know what to do,  you may enter a ? in response, and 
a summary of what you can do will be displayed.

Next we will explain what happens in more detail when you  choose 
each  of  the  above  options.   We will  start  with  option  1, 
explaining  all  of  its options,  and then go on  to  options  2 
through 6.


...T2
                   Option 1 - Recipe Retrieval

When you choose option 1 on the Main Menu,  the next menu you see 
is the following:






                    microGOURMET Recipe Retrieval Menu

                       Find Recipes by:

                       1 Category
                       2 Category & Name
                       3 Category & Ingredients
                       4 Category & Preparation Time

Now  you will focus on the type of search you want to do.  All of 
the  options  above  include  category  as  the  first  selection 
criterion.   However,  you need not use the category.   The  next 
menu  lists  the categories available.   If you don't  care  what 
category  the recipe falls in,  leave it blank (i.e.,  press  the 
space  bar).   Then  the category will be ignored  in  retrieving 
recipes.

After picking a category option,  you are asked whether you  want 
to  display or print the recipes selected.   For the print option 
only  the text of the recipes is printed,  not the  other  screen 
displays  which solicit responses,  and not the list of names  of 
recipes,  etc.  If you want to change from displaying recipes  to 
printing them,  you must return to the above menu,  and select an 
option (not necessarily a different one).   Each time a recipe is 
printed  the  program  asks you to ready the  printer  and  press 
return.
 
The  next  screen displays the recipe categories.  You  can  then 
select  a category.   In the remainder of  this  section,  option 
numbers  refer to the list above.   We will also assume that  you 
have chosen to display recipes.

If you choose option 1,  then recipes in the desired category are 
retrieved  and  displayed  (using  two  screens  for  the  entire 
recipe),  one after another.   In between recipes,  you are asked 
whether  you  want to continue retrieving other recipes  in  this 
category.

If  you choose option 2,  then the record number and the name  of 
the recipe are displayed.   Twenty recipes per screen are  shown.  
If  you  want  to look at any of these,  you may then  enter  the 
number of the recipe.   Otherwise press return,  and then you are 
asked whether you want to continue looking. 

As  long  as  there  are additional recipes  to  find,  you  will 
continue to see one screen after another of recipe names.  If you 
choose a recipe number at any time, then that recipe is found and 
displayed.  After looking at the recipe, you are asked whether to 
continue,  and if you answer yes, the process begins again.  When 
you  find  something  you like,  respond no,  and  then  you  are 
returned to select another category or go on to another option.




If you choose option 3,  then you may first view the  ingredients 
available,  if you are using GOURMET.HI.  With both versions, you 
are  asked to enter one to three ingredients as a  supplement  to 
your  search.   If  you  decide  that you don't  want  to  do  an 
ingredient  search  after all,  then leave the  first  ingredient 
blank,  and  you are returned to the previous  menu.   Otherwise, 
enter  the  first  ingredient and press  return.   You  are  then 
prompted  for the second and third ingredients.   If you want  to 
search for recipes based on one ingredient,  then leave the other 
two  blank.   If  you  want two ingredients to be  used  in  your 
search,   then  leave  the  third  blank.    After  entering  the 
ingredient(s)  of your choice,  you will see a message indicating 
that  the search may take a few minutes.   If a recipe is  found, 
its  name  is displayed and you may  retrieve  it.   Whether  you 
retrieve  it or not,  you have the option to continue looking for 
others.

If  you choose option 4,  then you are asked to enter the maximum 
preparation  time,  in minutes,  for your search.   You enter  an 
appropriate  number (such as 60) and press return.   The  program 
finds all the recipes which have a preparation time less than  or 
equal to the number you entered.   Remember that preparation time 
is  defined as the total time,  from beginning to end,  including 
time for cooking, refrigeration, etc.

A maximum of twenty recipe names per screen are displayed,  along 
with  their record numbers and associated preparation times.   As 
above with the category and name search,  you may select a number 
for display,  or go on to the next screen, if any.  After viewing 
a  recipe,  you  will be asked whether to continue,  and  if  you 
answer yes, the process is started again.

Note that,  for options 2 and 4,  you may enter a number which is 
not shown on the screen.  Any valid recipe number may be entered.  
However,  if you enter a number for which there is no recipe,  or 
an invalid number (such as -1), the program will tell you that no 
recipe  was  found.   Then you must enter a valid  number  before 
going on. 

If  you want to return to the Main Menu,  enter 0.   If you  need 
some help, enter a ? for guidance.

...T2
                    Option 2 - Shopping List

Whenever  you want to prepare a shopping list,  you must  execute 
option 2 on the Main Menu first.  When you do, the following menu 
is displayed:

                    microGOURMET Shopping List

                          1 Compile List
                          2 Print   List
                          3 Display List


To compile the shopping list,  pick option 1 on this menu.  After 
a short pause,  you are returned to the Main Menu,  where you can 
proceed  to retrieve recipes.   If you have elected the  shopping 
list option,  then after each recipe is displayed or printed, you 
are asked whether you want to add it to the shopping  list.   The 
default answer is yes,  so you must indicate no if you don't want 
it.

After  you  have finished retrieving recipes and  preparing  your 
shopping  list,  return to this menu.   Normally you will  select 
option  2 to print the shopping list.   Option 3 is for those  of 
you who want to review the shopping list before printing it,  and 
for those of you without printers.

After  you  display or print the shopping  list,  you  are  asked 
whether  you  want to delete it.   If you're satisfied with  what 
you've seen,  and have a copy of it (by printing it or writing it 
down),  you can delete it.  If you're not finished with the list, 
just answer no, and it is kept on the disk.

After  displaying  or  printing the shopping  list,  the  program 
assumes  that you don't want to build another,  and disables  the 
option.   You must explicitly return to option 1 on this menu  to 
enable it again.

If  you  are using GOURMET.HI,  the status of the  shopping  list 
option (off or on) is displayed on the menu screen.

For those of you with 180k bytes of disk storage on your  system, 
you will have only about 4k bytes to use for the shopping list. 

...T2
                Option 3 - Data Base Maintenance

Option 3 on the Main Menu allows you to add,  change,  or  delete 
recipes.  The following menu appears when you pick this option:

                    microGOURMET Data Base
                       Maintenance Menu

                      1 Add    Recipe(s)
                      2 Change Recipe(s)
                      3 Delete Recipe(s)
                      4 Update Ingredient Index
                      5 Create Ingredient Index
                      6 Create Record     Index
                      7 Create Category   Index

Options   4  to  7  apply  only  to  the  high  capacity  version 
(GOURMET.HI).

If you want to add one or more recipes to the data  base,  choose 
option 1 on this menu.   You are then reminded that you must have 
space  on  the disk to add new recipe(s),  and asked whether  you 
want  to continue.  We used the dBASE II APPEND command for  this 
function,  so  you  should  consult your dBASE II  manual  for  a 
further  description,  if necessary.   The structure of the  data 
base record is shown below, along with a description of the field 
names, as a guide for adding records.

When  you enter the ingredients,  remember that later you will be 
updating the ingredient index, if you are using GOURMET.HI.  Each 
ingredient  in the index may have up to  twenty-five  characters. 
The  ingredients  in  the recipe file (GOURMET.DBF)  are  allowed 
thirty  characters,  including the amount of the  ingredient  and 
perhaps descriptive information.  To allow for the variation, you 
should  enter a comma after the ingredient name,  and before  the 
amount.   The  program which creates the ingredient index doesn't 
require  the comma,  (it has other means to detect names) but  it 
saves time.

For particularly long recipes,  you may have to abbreviate either 
the  ingredients or the instructions,    Even so,  you should  be 
able to fit all but the longest recipe into the format.

Option 2 allows you to change a recipe.   To change a recipe, you 
must know the record number.   This number is always displayed or 
printed  whenever a recipe is retrieved.   We used the  dBASE  II 
EDIT command, so you should check your dBASE II manual if you are 
not familiar with it.

Option  3  enables recipe deletion.   We used the dBASE  II  EDIT 
command here also.   To delete a recipe, you must once again know 
the  record  number.   A  message appears after you  select  this 
option, indicating that you can delete a record by depressing and 
holding  the  control  key  (sometimes  labeled  CTRL)  and  then 
pressing   the  U  key.    This  deletes  the  record,   but  not 
permanently.

After  you have deleted one or more records,  you respond to  the 
record number prompt by pressing the return key, which terminates 
the  edit.   Next  a message appears asking whether you  want  to 
delete  the record(s) permanently.   The default is no.   If  you 
want  to eliminate the records from the data base  forever,  then 
respond  yes.   Then you are asked to wait while the data base is 
updated.

Option  4 will add new ingredients to the ingredient index.   Use 
this option after you have added recipes.

Option  5 will recreate the ingredient index from  scratch.   Use 
this  option after deleting recipes or deleting  ingredients,  to 
keep  the  ingredient index up to date.   You can also  use  this 
option  if you use GOURMET.LOW initially,  and then upgrade  your 
disk capacity such that you can use GOURMET.HI.

Both  option 4 and 5 take a long time to complete,  so don't  use 
them unless you really must.

Option 6 will recreate the record number index.   Use this option 
after deleting recipes permanently.  
Option 7 will recreate the category index.   Normally you  should 
not  have  to  use  this option.   But if you  suspect  that  the 
category index is fouled up, then use this option.

Caution.   For  any of the three data base  maintenance  options, 
don't use control Q while appending or editing records.  This has 
a tendency to damage the index files.

Caution.   Make  a  backup of the  files  GOURMET.DBF,  TYPE.NDX, 
NUMBER.NDX,   (and  ITEM.DBF  and  ITEM.NDX  if  you  are   using 
GOURMET.HI) after using any of the data base maintenance options.












































...T3
Data Base Record Structure

Field Name         Description             Length
                                        (characters)

NAME               Recipe Name               40
REMARKS            Recipe remarks            30

ITEM1              Ingredient 1              30
ITEM2              Ingredient 2              30
ITEM3              Ingredient 3              30
ITEM4              Ingredient 4              30
ITEM5              Ingredient 5              30
ITEM6              Ingredient 6              30
ITEM7              Ingredient 7              30
ITEM8              Ingredient 8              30
ITEM9              Ingredient 9              30
ITEM10             Ingredient 10             30
ITEM11             Ingredient 11             30
ITEM12             Ingredient 12             30
ITEM13             Ingredient 13             30
ITEM14             Ingredient 14             30
ITEM15             Ingredient 15             30

INSTRUCT1          Instructions Line 1       40
INSTRUCT2          Instructions Line 2       40
INSTRUCT3          Instructions Line 3       40
INSTRUCT4          Instructions Line 4       40
INSTRUCT5          Instructions Line 5       40
INSTRUCT6          Instructions Line 6       40
INSTRUCT7          Instructions Line 7       40
INSTRUCT8          Instructions Line 8       40
INSTRUCT9          Instructions Line 9       40
INSTRUCT10         Instructions Line 10      40
     
TYPE               Recipe Category            2    
PREPTIME           Preparation Time           3
HINT1              Serving Hints Line 1      35
HINT2              Serving Hints Line 2      35
















...T2
                   Option 4 - Switching Disks

Option  4  on the Main Menu will allow you to change  to  another 
recipe  disk.   Note that this option will not work at all if you 
are using an operating system other than CP/M.   (The command  to 
do this is not implemented in some versions of dBASE II).   Also, 
if  the capacity of your disks will not allow you to keep all the 
files associated with the recipe data base on one disk, then this 
option cannot work correctly unless you change both  disks.   See 
the Installation Section for more information.

If  you select this option,  a message is displayed asking you to 
change disks,  then press return.   After you have changed one or 
two  disks,  press  return.   dBASE II is  exited  and  restarted 
automatically, using the new recipe disk and/or program disk.

...T2
           Option 5 - Exiting to the Operating System

Option 5 enables an orderly termination of the program.  The data 
base will be closed and control returned to the operating system.  

...T2
                 Option 6 - Exiting to dBASE II

Option  6 allows you to exit the program but remain in  dBASE  II 
for   other   activities.    The  recipe  data  base  is   closed 
automatically.



You should always use option 5 or 6 to end the program to be sure 
that dBASE II closes the data base.
























...T1
                         Ingredient List

.po 4
  Allspice                  Almond extract            Almonds                  
  Apple juice               Apples                    Applesauce               
  Apricots                  Asparagus                 Bacon                    
  Baking powder             Baking soda               Banana Liqueur           
  Bananas                   Bay leaf                  Bay leaves               
  Beef                      Beef bouillon cubes       Beef gravy mix           
  Beef ground               Beer                      Bing cherries            
  Biscuit baking mix        Black olives              Bouillon beef            
  Bouillon chicken          Bread                     Bread crumbs             
  Broccoli                  Broth                     Broth beef               
  Broth chicken             Brown sugar               Burgundy wine            
  Butter                    Buttermilk                Cabbage                  
  Caraway seeds             Carrots                   Cayenne pepper           
  Celery                    Celery seeds              Cheddar cheese           
  Cherries                  Cherry pie filling        Chicken                  
  Chicken bouillon cubes    Chicken breasts           Chicken coating mix      
  Chili powder              Chipped beef              Chocolate                
  Chocolate chips           Cinnamon                  Cinnamon stick           
  Cloves                    Cocoa                     Coconut                  
  Cognac                    Confectioners sugar       Consomme                 
  Corn chips                Corn cream style          Corn meal                
  Corn syrup                Cornstarch                Cottage cheese           
  Crackers                  Cream                     Cream cheese             
  Cucumber                  Custard mix with egg      Dates                    
  Egg                       Egg yolk                  Egg yolks                
  Eggplant                  Eggs                      Flour                    
  Garlic                    Garlic cloves             Garlic powder            
  Ginger                    Ginger ale                Gingersnaps              
  Gravy mix                 Green beans               Green chilies            
  Green pepper              Ham                       Heavy Cream              
  Heavy cream               Italian seasoning         Jalapana peppers         
  Kahlua                    Ketchup                   Kidney beans             
  Lasagne                   Lemon                     Lemon extract            
  Lemon gelatin             Lemon juice               Lemon pudding            
  Lemon rind                Lemons                    Lettuce                  
  Light cream               M&Ms                      Macaroni                 
  Margarine                 Marshmallows              Mayonnaise               
  Milk                      Molasses                  Mozzarella cheese        
  Mushrooms                 Mustard                   Nacho cheese chips       
  Nutmeg                    Oatmeal                   Oil                      
  Onion                     Onions                    Orange extract           
  Orange juice              Oranges                   Oregano                  
  Oreo cookies              Paprika                   Parmesan cheese          
  Parsley                   Parsley flakes            Peaches                  
  Pear halves               Peas & carrots            Pecans                   
  Pepper                    Peppercorns               Pepperoni                
  Pie shell                 Pimiento                  Pineapple                
  Pineapple chunks          Pistachio pudding mix     Pizza sauce              
  Pork                      Pork chops                Potato chips             
  Potatoes                  Pound cake                Process cheese food      
  Provolone cheese          Raisins                   Raspberry gelatin        
  Raspberry preserves       Red cabbage               Red pepper               
  Red wine                  Rice                      Rice Krispies            
  Rice mix                  Rice uncooked             Rum                      
  Salad dressing            Salami                    Salmon                   
  Salmon steaks             Salt                      Sausage                  
  Sausage links             Savory                    Scallops                 
  Sesame seeds              Shallot                   Shallots                 
  Sherry                    Shortening                Shrimp                   
  Soup cream of celery      Soup cream of chicken     Soup cream of mushroom   
  Soup cream of onion       Soup tomato               Soup vegetable           
  Sour cream                Soy sauce                 Spaghetti                
  Spaghetti sauce           Spinach                   Steak                    
  Steaks                    Strawberries              Strawberry gelatin       
  Strawberry jam            Sugar                     Swiss cheese             
  Taco mix                  Tarragon                  Thyme                    
  Tomato paste              Tomato sauce              Tomatoes                 
  Tuna                      Turkey                    V-Eight juice            
  Vanilla                   Vanilla ice cream         Vanilla pudding mix      
  Veal                      Vegetables mixed          Velvetta cheese          
  Vinegar                   Walnuts                   Water                    
  Water chestnuts           Whipped topping           White cake mix           
  White wine                Worchestershire           Zucchini                 
.po 8
.pa
                 Comments and Problem Reporting


                          microGOURMET
                 6958 Hanover Parkway, Suite 301
                       Greenbelt, MD 20770



If  you have any comments about microGOURMET,  or suggestions for 
improvements,  or if you found a problem,  please photocopy  this 
page,  complete  the requested entries,  and send it to the above 
address.


Name ___________________________________________________________

Company ________________________________________________________

Address ________________________________________________________

City ___________________________________________________________

State _________________________________________ Zip ____________


Check One

Comment    __
Suggestion __
Problem    __


Description






















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0116

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       982  11-09-84   2:39p
    CRCK4    COM      1536  10-21-82   7:54p
    GOURMET  HI      40448   1-03-84  10:40p
    GOURMET  LOW     32512   8-22-83   6:10p
    ITEM     DBF      6656   1-05-85   7:05p
    ITEM     NDX     10240   8-20-83   7:34p
    MANUAL   DOC     50245   2-28-84   9:36p
    NUMBER   NDX      2560   1-05-85   7:16p
    READ     ME       1187   1-05-84   9:21p
    SHOP     DBF      1024   1-05-85   7:13p
    TYPE     NDX      2560   8-08-83   9:47p
           11 file(s)     149950 bytes
                            9216 bytes free
