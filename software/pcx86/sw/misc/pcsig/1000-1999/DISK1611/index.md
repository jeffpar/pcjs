---
layout: page
title: "PC-SIG Diskette Library (Disk #1611)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1611/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1611"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EZ-TREE"

    EZ-TREE is a genealogy program to track and report on family trees. You
    can keep track of up to 16 marriages per person and up to 32
    children per marriage.  There is no logical limit to the number of
    generations you can have for each family tree.  Each record contains
    first name, middle name, last name, maiden name, sex, birth date and
    information, death date and information, personal comments, marriage
    date and information, divorce date and information, and marriage and
    divorce notes.
    
    From the main menu you can retrieve an existing family tree, create a
    new family tree, work on the current family tree, delete the current
    family tree, save the current family tree, or modify the program's
    configuration, such as colors, disk directory, and screen blanking
    timeout.  You can easily add parents, spouse and children to the family
    tree.  For convenience, function keys are used to select family tree
    options, such as:  edit a record, find a specific record (person), zoom
    in on a particular person, etc.
    
    EZ-TREE will produce three different reports, which can be directed to
    the screen or the printer.  You can produce a report containing detailed
    information about a person, or a report on all people in a family tree,
    or a list of all descendants of a person.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZT.DOC

{% raw %}
```
                               EZ-TREE

EZ-Tree is a genealogy program to track and report on family trees.  
The program records information in variable length records and fields 
with the following maximum field sizes:

              First Name . . . . . . . . . . .  16 characters
              Middle Name  . . . . . . . . . .  16 characters
              Last Name  . . . . . . . . . . .  16 characters
              Maiden Name  . . . . . . . . . .  16 characters

              Sex (M or F) . . . . . . . . . .   1 character
              Birth Date & Information . . . .  32 characters
              Death Date & Information . . . .  32 characters
              Personal Comments  . . . . . . . 144 characters

              Marriage Date & Information  . .  32 characters
              Divorce Date & Information . . .  32 characters
              Marriage & Divorce Notes . . . . 144 characters

You can keep track of up to 16 marriages per person and up to 32 
children per marriage.  There is no logical limit to the number of
generations you can have for each family tree.  There are provisions
currently in the program to handle 90 different family trees with 200
people and marriages per family tree.  Both of these last two numbers
will be increased in the future.


                        INSTALLATION AND SETUP

There is only one file (EZT.COM) you need to run EZ-Tree.  To start 
the program simply key in EZT and press the ENTER key.  The program 
will create other files that it uses to store information in.  They 
are:
              CONFIG.EZT  used to store program configuration info.
              FAMILY.EZT  used to store an index to the family trees.
              TREE1.EZT - TREE90.EZT stores all the family tree data.


                              MAIN MENU

To choose an entry from the main menu use the up and down arrow keys 
to highlight the one you want to use, then press the ENTER key; or
just press the first letter of the entry.  The first entry you may
want to choose is the Modify configuration entry.  This lets you
choose a different disk drive and directory to store the Family and
Tree files if you need to do that.  This would actually allow you to
use more than 90 family trees by putting 90 families in each
directory you create for that purpose.  Also with this entry you can
change your screen colors and the screen save time out feature that
will blank out the screen after a certain amount of time.

The next entry you will choose is either Create a new family tree or
Retrieve an existing one.  To create a new one, choose the Create
option, then key in a description of the family tree your creating.

You can use up to 60 characters.  Next you would choose Work on the
current family tree to start entering the detailed information.  If 
you already had some family trees created and chose the Retrieve a 
family tree entry, you would be presented with a list of available 
family trees.  To choose one use the up or down arrow keys to 
highlight the one you want and press the ENTER key.  Then you would 
choose Work on current family tree.

The remaining main menu entries allow you to save the family tree on
disk any time while your working on it or to delete the current 
family tree from the index and from your disk.


                       WORKING ON A FAMILY TREE

You start by keying in information about the first person you want to 
add to the family tree.  Pressing ENTER takes you to the next field 
until all fields are used.  Then the person's name is displayed in a 
box in the upper left hand corner of the screen and a function key 
menu is displayed below it.  Press the F1 (help) key to see the 
details of what each key on the keyboard will do.  Press any key to 
return.  You can now add parents to the person you keyed in or add a
spouse.  The top two boxes are always used to display a husband and 
wife if there is a marriage.  Children are added and displayed below 
the couple.  The ESCAPE key can be used at any time to cancel or back 
out of any procedure.


                               REPORTS

Presently there are three reports that can be produced by using the 
F9 (list) key.  More will be added later.  You can get detailed 
information about the person currently highlighted by the cursor, a 
report on all people in the current family tree, and a list of all 
descendents of the person currently highlighted by the cursor.  The
detailed report and the report on all people have reference numbers
listed in front of each person.  This lets you locate information on
a person by that reference number because the report is produced in
reference number sequence.  The descendents report puts an asterisk
in front of people who are related by marriage, but are not actually
in the blood line.  A listing can be directed to your printer or to
the screen and it can be cancelled any time by pressing the ESCAPE
key.


              MORE INFORMATION, SUGGESTIONS, & PROBLEMS

    Write to:
                               Jim Hass
                             P.O. Box 447
                             Richfield, OH
                              44286-0447


```
{% endraw %}

## FILE1611.TXT

{% raw %}
```
Disk No: 1611                                                           
Disk Title: EZ-Tree                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: EZ-Tree                                                  
Author Version: 1.26                                                    
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
With EZ-TREE you can keep track of up to 16 marriages per person and up 
to 32 children per marriage.  There is no logical limit to the number   
of generations you can have for each family tree.  Each record contains 
first name, middle name, last name, maiden name, sex, birth date and    
information, death date and information, personal comments, marriage    
date and information, divorce date and information, and marriage &      
divorce notes.  From the main menu you can retrieve an existing family  
tree, create a new family tree, Work on the current family tree, delete 
the current family tree, save the current family tree, or modify the    
program's configuration, such as colors, disk directory, and screen     
blanking timeout.  You can easily add parents, spouse and children to   
the family tree.  For convenience, function keys are used to select     
family tree options, such as, edit a record, find a specific record     
(person), zoom in on a particular person, etc.  EZ-TREE will produce    
three different reports, which can be directed to the screen or the     
printer.  A report containing detailed information about a person can   
be produced, or a report on all people in a family tree can be          
produced, or a list of all descendents of a person can be produced.     
                                                                        
File Descriptions:                                                      
                                                                        
EZT      EXE  Main genealogy program.                                   
EZT      DOC  Documentation for genealogy program.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1611

     Volume in drive A has no label
     Directory of A:\

    EZT      DOC      5263   3-02-88   4:06p
    EZT      EXE     51984   3-06-88   6:32p
    FILE1611 TXT      2813  10-16-89   9:07p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       694   1-01-80   1:04a
            5 file(s)      60792 bytes
                           97792 bytes free
