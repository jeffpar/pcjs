---
layout: page
title: "PC-SIG Diskette Library (Disk #958)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0958/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0958"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STOCK INVENTORY CONTROL"

    STOCK was created specifically for maintaining inventory control for
    businesses with a standard list of inventory items with specific order
    levels. (Businesses that stock one-of-a-kind items can use STOCK, but
    they must ignore references to order levels and year-to-date sales for
    each item.)
    
    Items are listed as individual records in the database and each item has
    an order level. The program was written in dBase III+, compiled and
    runs directly from DOS. For those who know dBase, and like to tinker,
    the source code is provided.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES958.TXT

{% raw %}
```
Disk No  958
Program Title: STOCK
PC-SIG version 1
 
    STOCK is a specialized database for maintaining inventory control. It
is best for businesses with a standard list of inventory items that need to
be stocked and identified on order levels. Businesses that stock
one-of-a-kind items can use the system but have to ignore references to
order levels and year-to-date sales for each item. Items are listed as
individual records in the database and each item has its own order level.
The program was written using dBase III+ but you do not need dBase to use
it because it is compiled and runs directly from DOS. For those who know
dBase, and like to tinker, the source code is provided.
 
Usage: Inventory Control
 
System requirements: 256K memory and one disk drive.
 
How to start: Type: STOCK (press enter).
 
Suggested Registration: None
 
File descriptions:
 
DELETE   PRG  Source code (14 files).
STOCK    DBF  Source code.
VENDOR   NTX  Vendor index.
ITEM     NTX  Item index.
STOCK    EXE  Main program.
INDEXSTK EXE  Setup program to initialize the index file.
STOCK    DOC  Documentation file.
VENDOR   FRM  Reprot format file.
FEED     OBJ  Makes a change to the clipper library file.
MINIMUM  FRM  Report format file.
STOCK    FRM  Report format file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                      <<<<  Disk No 958 STOCK  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, Type:                                       ║
║             COPY STOCK.DOC LPT1: (press enter)                          ║
║                                                                         ║
║ To run the program, Type: STOCK (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## STOCK.DOC

{% raw %}
```



        March 25, 1987

        A few notes about STOCK.

             1:  Stock  is written in dBASE III Plus (with extentions  to 
                 CLIPPER).
             2:  Both the source code and executable code are provided.
             3:  The executable files were compiled with CLIPPER.
             4:  dBASE index files are not compatable with CLIPPER.
                 So  INDEXSTK  is provided to generate the CLIPPER  index 
                 files.

        Since the source code is provided,  it should be fairly easy  for 
        someone to modify the program for their own particular needs.  To 
        do so you will need either dBASE III Plus or CLIPPER.

        If you do modify the program and only have dBASE you will need to 
        change or delete the CLIPPER extentions.  

        If you have CLIPPER and recompile after making changes,  you will 
        notice a difference in the reports.  Mainly, my version generates 
        reports in compressed print mode, while your new version will use 
        the  standard 80 col format.   Unlike dBASE which allows you  the 
        option  of  controlling form feeds to the printer  during  report 
        generation,  CLIPPER  does  not.   Clipper will send a form  feed 
        after  each report and/or each page.   Personally I like to  have 
        control  of  such  things.   So I made a change  in  the  CLIPPER 
        library.   I  changed  to form feed character to  the  compressed 
        print  character.   So now when CLIPPER sends a form feed  it  is 
        really telling the printer to go into compressed mode.

        If you want to make this change to your library do the following:

                        ******************************
             MOST  IMPORTANT  - make a copy of your CLIPPER library  file 
        and  ONLY  work  with the copy - NEVER make any  changes  to  the 
        original file.
                        ******************************

        You  will need NORTON UTILITIES or some other such  utility  that 
        will allow you to make changes directly to a disk sector.

        On  my  CLIPPER library file (winter 85) the sector to change  is 
        sector #287, byte offset 84 decimal.  The original byte is 0A hex 
        and  this needs to be changed to 0E hex.   Thats it.   Write  the 
        sector and you are done.

        For  those of you with other versions of CLIPPER,  the sector  to 
        change  is the last sector in module CTERM.   STERM is  the  next 
        module.  

        PLINK86  will give a checksum error in module CTERM during link - 
        just  ignore  it.   To replace the lost form  feed,  FEED.OBJ  is 
        provided, and will need to linked.  It is invoked with CALL FEED.
        See the .PRG files for examples.

        I place the contents of this disk in the public domain for one
        and all to use as they see fit.  I further state that I am the
        originator of these files.
        Declan Cowley, Redding, Ca.  1987
        
                                        1



        March 10, 1987


                            INVENTORY CONTROL PROGRAM


        The program is started by entering STOCK at the DOS prompt.

        Once loaded you will be presented with the MAIN MENU (fig 1).

        The menu selection will now be discussed in order.

        #1:  ENTER NEW ITEM
             
             Selecting  entry #1 allows you to add new items (records) to 
             the database.   The display (fig 2) shows the items required 
             for entry and the reverse video is the maximum field length.

             Once the last screen entry is made you will be asked if  you 
             want  to make any changes.   Pressing N (no) will write  the 
             information to the file,  clear the entries and position the 
             cursor to the first field for new input.

             Pressing Y (yes) will position the cursor to the first field 
             for corrections.  Hitting RETURN will accept the field as is 
             (ie:  without  change)  otherwise enter the  correction  and 
             press RETURN.  Repeat for each field.

             Continue adding new items until complete.  When you are done 
             and  wish  to  terminate entry,  simply hit  RETURN  without 
             entering any data for each field.  This will then return you 
             to the main menu.


        #2:  DELETE ITEM

             Selecting #2 will allow you to delete an item (record)  from 
             the database.   The display (fig 3) will show the STOCK ITEM 
             field in reverse video.   This is the entry you make to find 
             the  record that you want to delete.   The program will then 
             go any find a record that matches your entry. 

             NOTE:  What you enter MUST match what was entered originally 
                    -- bad spelling and spaces and all!!!

             The  screen will then display the information in the  record 
             matching  your  entry.   You will be  prompted  with  DELETE 
             (Y/N).    Entering  Y  will  delete  this  record  from  the 
             database.   Entering  N  will get you the prompt SEARCH  FOR 
             NEXT MATCH.   Entering Y will cause the program to look  for 
             another  match  to your entry.   Entering N will  clear  the 
             fields  and  position the cursor in the reverse video  field 
             awaiting  your  next input for deletion.   If you  are  done 
             hitting  RETURN without any other entry will terminate  this 
             section and return you to the main menu.



                                        2



        #3:  MODIFY ENTRY

             Selecting  #3  allows you to change a field in  an  existing 
             record.   Display (fig 4) will appear and is very similar to 
             fig 3.   Input and termination work the same as for deleting 
             a record.   Here when you answer Y (yes) to the CHANGE  THIS 
             RECORD prompt, all the fields will turn to reverse video and  
             allow  you  to  make changes to one or more  fields  in  the 
             record.   As in #1, hitting RETURN only will leave the field 
             unchanged.



        NOTE:   The previous three selections are grouped together on the 
        main menu under the heading DATABASE.  This is because they cause 
        direct  action to be taken on the database itself (as opposed  to 
        the  inventory  data).   ie:  add new record,  delete record  and 
        change a record.

        The  next three item are also grouped together on the  main  menu 
        under  the heading INVENTORY.   Here we are manipulating the data 
        representing the quantity of stock on hand.

        ALSO NOTE:  A particular item (say sodium sulphate) can be in the 
        database more than once.   When entering a new item (#1) you will 
        not  be told if an entry exists.   The reason for this is that  a 
        particular  item  can  come  from  more  than  one  supplier,  be 
        available  in  more the a single UNIT SIZE and in more  than  one 
        purity.   All will have different CATALOG NUMBERs,  however.   So 
        when  entering new records,  plan ahead and be aware of  what  is 
        already in the database.


        #4:  ADD INVENTORY

             Selecting  #4  allows you to add inventory to the  database.  
             Display  (fig 5) will appear and prompt for the STOCK  ITEM.  
             If  found you will be prompted ADD to this  entry.   N  will 
             get  the next match.   Y will prompt for NUMBER of UNITS  to 
             ADD.   The  capitalized UNITS is to remind you to check  the 
             UNIT SIZE.

             Once  entered the fields will be cleared and the cursor will 
             be  in the STOCK ITEM field for a new entry.   As  before  a 
             RETURN will send you back to the main menu.


        #5:  DELETE INVENTORY

             Selecting  #5  allows  you to subtract  inventory  from  the 
             database.   Display  (fig 6) will appear and its  appearance 
             and the function of this module is very similar to #4.
             When you enter the number to delete,  the current stock will 
             be  reduced  and the year to date will be increased  by  the 
             amount entered.



                                        3



        #6:  REPORTS

             Selecting #6 will call up the REPORTS MENU (fig 7).

             Here  you  have  three selections that deal  with  different 
             report formats.

             #1:  INVENTORY BELOW MINIMUM

             This  will  generate  a report for only  those  items  whose 
             current  stock level is below the minimum value defined  for 
             that item.

             #2:  INVENTORY BY VENDOR

             This  will  produce a report of all items in  the  database, 
             grouped by vendor.

             #3:  EVERYTHING ON FILE

             This  will produce a report of all items in the database  in 
             alphabetical order.



             #4:  START NEW YEAR

             This will set the YEAR TO DATE entry to zero for every  item 
             in the database.

             To  explain why this is even here we need to understand what 
             happens  when we delete inventory.   The  year-to-date  item 
             shows  up  primarily only in the reports.   When you  delete 
             inventory,  the  current stock is reduced by the  value  you 
             enter  and  the year-to-date value is increased by the  same 
             amount.   This  allows  a  running total of  what  has  been 
             consumed  to date.   Assuming the information  is  important 
             only  on an annual basis,  we need a way to reset this value 
             for the start of a new annual cycle -- and that is what this 
             selection does.

             Should you select #4, you will get a WARNING screen (fig 8).

             Proceed  at  your  own risk.   You should  notice  that  the 
             default response is No.   Hitting RETURN will send you  back 
             to the reports menu.


             #5:  RETURN TO MAIN MENU

             When  finished  with reports this will take you back to  the 
             main menu.





                                        4


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0958

     Volume in drive A has no label
     Directory of A:\

    ADD      PRG      1792   3-10-87  10:18a
    ALLREP   PRG       384   3-10-87   9:52a
    CHANGE   PRG      2432   3-10-87  12:06p
    DELETE   PRG      1920   3-10-87  12:05p
    ENTER    PRG      1408   3-10-87  10:20a
    FEED     OBJ        69   1-01-80  12:04a
    FILES958 TXT      1407  12-17-87   2:31p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617  12-13-87  11:00a
    INDEXSTK EXE    128320   3-09-87  11:54a
    INDEXSTK PRG       256   3-09-87  12:20p
    ITEM     NTX      2048   3-09-87  11:54a
    MINIMUM  FRM      1990   3-09-87  11:33a
    MINREP   PRG       384   3-10-87  10:39a
    MORECHG  PRG      2048   3-10-87  12:12p
    MOREDEL  PRG      1536   3-10-87  12:12p
    NEWYTD   PRG      1408   3-10-87  11:15a
    REPORT   PRG      1024   3-10-87  12:12p
    STOCK    DBF       424   3-25-87   4:36p
    STOCK    DOC     11008   5-09-87   3:35p
    STOCK    EXE    153568   3-25-87   4:46p
    STOCK    FRM      1990   3-09-87  11:38a
    STOCK    PRG      1408   3-09-87  10:46a
    SUB      PRG      2304   3-10-87  12:06p
    VENDOR   FRM      1990   3-09-87  11:17a
    VENDOR   NTX      2048   3-09-87  11:54a
    VENREP   PRG       384   3-10-87   9:52a
           27 file(s)     324205 bytes
                           26624 bytes free
