---
layout: page
title: "PC-SIG Diskette Library (Disk #1227)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1227/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1227"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ROKMAR ASSETS INVENTORY"

    The ASSETS INVENTORY SYSTEM is an inventory log program from Rokmar that
    enables you to keep track of your home or office assets.
    
    In case of fire, theft, etc., your insurance company will want an
    itemized list of each piece of merchandise, the model numbers, the
    serial numbers, the location the article was kept, the purchase/
    replacement cost, etc.  This information can be difficult to piece
    together with any amount of accuracy after the disaster strikes.
    
    The ASSETS INVENTORY SYSTEM keeps track of all you own, allows for easy
    updating on a regular basis, and provides a detailed inventory report of
    assets sorted by type, location or user defined index.  It is also able
    to generate customized files for importing to spreadsheets or financial
    analysis programs.
    
    You may be amazed to find out how much money you have tied up in
    household/office assets, in what areas this money is concentrated, and
    in what type of merchandise!  This information is useful for capital
    budgeting, tax planning, developing reasonable precautions against
    losses due to theft and fire, and, of course, documentation for
    insurance claims.
    
    The INVENTORY SYSTEM also provides helpful guidance on how to take
    inventory, such as hints concerning often overlooked items: expensive
    clothing articles, landscaping purchases, books, telephones, computer
    software, lighting fixtures, custom curtains, hot water heater, kitchen
    appliances and utensils, tap water filters, children's articles, outside
    articles, items loaned to someone else, important papers, etc.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASSETS.DOC

{% raw %}
```
       
       
       
       
       
       
       
       
                        ROKMAR ASSETS INVENTORY SYSTEM
       
       
                                  Version 2.0
       
                                 System Manual
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
                            ROKMAR Computer Systems
                                2089 East Kern
                               Tulare, Ca. 93274
       
       
       
       
       
                    
                        ROKMAR ASSETS INVENTORY SYSTEM
       
       
       
       
       
       
       
       
       
       
       
       
       
                                     INDEX
       
                        Copyright Notice ............ 1
                        What Is It For? ............. 2
                        Set Up ...................... 3
                        Field Editing ............... 4
                        Program Usage ............... 5
                        How To Use It ............... 7
                        Field Descriptions .......... 8
                        Interfacing ................. 9
                        Error Recovery .............. 11
       
       
       
                                COPYRIGHT NOTICE                 Page  1
       
       This  software  product  is the copyrighted  property  of  ROKMAR 
       Computer  Systems,  and  the usual  shareware  limited  agreement 
       applies:
       
       1.  No  fee may be charged for the retail sale  of  this  product 
       other than a reasonable copy and distribution charge.
       
       2.  This  product  may only be distributed in  its  original  and 
       complete form, including documentation and copyright notice.
       
       3.  This product may not be distributed, whole or in any part  as 
       a  section  or  part of any commercial  product  without  written 
       permission of ROKMAR COMPUTER SYSTEMS. 
       
       
                                   DISCLAIMER
       
       RokMar  Computer Systems, its owners, management, or   associates 
       will  not be liable for any damages or claims related in any  way 
       to  the  use  of this product and  disclaims  all  warranties  or 
       implied warranties by the distributor.
       
       Other  than these minor trivialities, feel free to copy and  give 
       out  as  many  copies  of this product as  you  wish.   Place  an 
       archived version on any BBS.
       
       Should  you receive any use from this program, please  contribute 
       $10, or if you wish to receive an updated version of this program 
       with  bug fixes and possible enhancements, and notices to  future 
       updates, send $15 to:
       
                              Robert O Keith, Jr.
                              2089 East Kern
                              Tulare, Ca. 93274
       
       Anything you might send, $, suggestions, problems will be greatly 
       appreciated and will prompt me to produce many more products  for 
       the  home and office. The registration fee will also entitle  you 
       to a list of other available products. 
       
       Have fun, and remember... Press F1 for Help!
       
       
       
                                 WHAT IS IT FOR?                 Page  2
       
       Now that I have my own Assets Inventory DataBase system, what  do 
       I do with it?  What good is it? 
       
           Most people may or may not think they have much money  laying 
       around the house or office.  In any case, most will be  surprised 
       at  how  much has been collected over the months and  years.   In 
       most  cases,  much of this money sits  around  mostly  unnoticed. 
       People  who have used this product have been shocked to find  out 
       how  much money was tied up in household/office assets,  in  what 
       areas   this  money  was  concentrated,  and  in  what  type   of 
       merchandise  they  had.   In  case  of  fire,  theft,  etc.,  the 
       insurance  company  wants  an  itemized list  of  each  piece  of 
       merchandise, the model numbers, the serial numbers, the  location 
       the  article was kept, the purchase/replacement cost,  etc.  This 
       bit  of information can be difficult to piece together  with  any 
       amount of accuracy, especially in the midst of emotional  strife. 
       If  this information was gathered together in  advance  manually, 
       what  a  maintenance chore this could be: new items  are  bought, 
       sold, thrown away, lost, etc., every month.
           This  information  is also useful for  management  decisions: 
       adequate security, fire protection, adequate insurance  coverage, 
       or  even  how  much money is invested  by  merchandise  type,  at 
       certain  locations,  etc.    The Assets Inventory  DataBase  will 
       retain  this information on a dynamic medium, where at the  press 
       of  a button the information can be listed, sorted and summed  up 
       by  type,  location, etc. This product will also  print  a  list, 
       ready  to mail off to the insurance company or store off-site  at 
       any time.
       
       The Assets Inventory DataBase Contains:
         -  Pull Down Menu System, very simple to use.
         -  Pop  Up  windows  including help windows so that  you  don't                  
            become lost inside the integrated programs.
         -  Full Feature Search/Inquiry screens, to browse your data  by       
            key words.
         -  Index Reports for your own information, (where, how much, of            
            what, etc.)
         -  Full  Detailed  Reports for safe storage and to mail off  to         
            the insurance companies.
         -  Data  Entry Input form printable on your own printer at  any       
            time.
       
       Can you use this?
       
       
       
                                    SET UP                       Page  3
       
       INSTALLING UP THIS SYSTEM ON YOUR COMPUTER.
       
       Make a copy of this disk for your own backup at once!
       
       An   installation  program  is  not  included;  they   are   more 
       complicated than simply copying the files to your hard disk,  and 
       most of them cause more trouble than help anyway.
       
       
       Installation on any Floppy Disk Drive:
           Simply  copy  the  original  disk and use  the  copy  as  the 
       program/data disk. One disk and drive is all that is required for 
       use.  These files may also be copied to a bootable floppy disk. 
       
       Hard Drive:
           Create  a  directory  (\ASSETS,  \HOMEINV,  \OFFINVEN,  etc.), 
       anything  you  wish and copy the contents of this disk  into  the 
       directory.  Remember,  only  rookies copy  all  of  the  software 
       including DOS to the root directory.
       
             Example: C>COPY A:*.* A:\ASSETS
       
       The  executable program file of this system is ASSETS.EXE, so  to 
       run,  move  to  the drive and directory where  the  programs  are 
       installed and type: 
       
             ASSETS
       
             Example:
       
             One floppy drive: A>ASSETS
             Hard Disk:C>CD \ASSETS
                       C>ASSETS
       
       
       
       The  pull  down menu will come up on your screen.   If  you  have 
       never  used  this  type  of menu, Press F1  for  Help.  Press  F1 
       anywhere inside this system, and a help screen will appear.
       
       Important!  The  computer must be booted with a  CONFIG.SYS  file 
       containing  a FILES= statement for 10 files or more.  An  example  
       CONFIG.SYS file is included with the system files.
       
       
       
                                FIELD EDITING                    Page  4
       
       Using the data entry fields.
       
            The  data entry screens and the inquiry screens have one  or 
       many  entry  fields.   The data in each of these  fields  may  be 
       edited  after  some value has been entered.  The  type  of  edits 
       available  for  each field include, inserting  characters  inside 
       data  already edited, deleting characters, etc.  This  scheme  is 
       similar  to word processors, spread sheets, etc.  Following is  a 
       detailed list of each function and the key to be used for each.
       
       Key    Function
       ____   __________________________________________________________
       
       Ins    This  will  toggle into or out of  the  insert  mode.  The 
              cursor  will  be a block character when inside the  insert
              mode. When  inside the insert mode, any data above and  to
              the right  of the  cursor will be moved over and the  data
              typed will be  shoved inside, inserted.
       
       Del    The Delete Key: The character above  the  cursor  will  be 
              deleted and the data to the right will be  moved  over  to  
              fill the space created by the character deleted.
       
       BS     The Back-Space Key: The cursor will be moved to the  left;
              any data above the cursor will be deleted; the data to the
              right will be moved to the left.
       
       -->    The  right  arrow  key:  The  cursor  will  be  moved  one 
              character to the right, no data will be affected.
       
       <--    The left arrow key: The cursor will be moved one character
              to the left, no data will be affected.
       
       Up     The up arrow key: The cursor will jump up to the  previous
              data entry field.
       
       Down   The down arrow key: The cursor will jump down to the  next
              data entry field.
       
       Return The return/entry key: The cursor  will  jump  down  to the
              next data entry field.
       
       Esc    The escape key: This will exit  the  mode  of  the program 
              without doing any updates to the database.
       
       
       
                                  PROGRAM USAGE                  Page  5
       
       A Walk through of the system.
       
            This  section  will be listed in sections in  the  order  of 
       initial  usage.  Any semi-experienced user can breeze  over  this 
       section  quickly and not work through the exercises, but keep  in 
       mind the overall program flow and the uses of each function. 
       
       TRACK
       This  screen  is used for doing quick data updates, such  as  for 
       users  who  wish to track items that are always  moving,  or  for 
       simply relocating items without risking the update of other  data 
       fields.
       
       RPTFORM
       Print  an input form.  This is the last option on the menu.  Once 
       this  is  printed,  you may print as many as  you  wish  or  make 
       photocopies  of the printed version.  With this version  you  can 
       manually  take  inventory,  listing the  pertinent  data  on  the 
       sheets,  then  use the sheets as data entry forms to sit  at  the 
       computer and enter the data.  The first field on the sheet is the 
       key field. This can be any value you wish, but it must be unique. 
       Numbering  the  items  is usually the simplest way  to  choose  a 
       unique key, but the add function will accept any unique string of 
       characters. 
       
       ADD
       Enter  the  data. This is the first option on the   menu.  Simply 
       transcribe  the data directly from the input sheets into the  add 
       function.   Press  F1 if any field is confusing, a  pop  up  help 
       window will appear. A full description of each field is described 
       in a later chapter.
       
       UPDATE
       If you make any entry mistakes, use the third menu option.  These 
       functions will allow data entry record modifications or to delete 
       the entire record.  Again, Press F1 for guidance. 
       
       
                                 PROGRAM USAGE (cont.)           Page  6
       
       
       INQUIRY
       At  any  time,  you may wish to search through  the  data  for  a 
       particular item, to do this, use the forth menu function.
            This  is  the most complicated screen, but don't  worry,  it 
       does  no  updates so you can not hurt anything  by  pressing  the 
       wrong button.  The three inquiry screens work basically the  same 
       but  work  against different keys, TYPE, LOCATION and  the  USER-
       DEFINED  key.  Specific  key info is at the  upper  left  of  the 
       screen.  A quick run through:
            - Enter the screen via the menu.
            - Enter the key value desired.
            This  may be the whole key, the first few     characters  of 
       this  key,  or  to  begin  at  the  beginning,  leave  the  field     
       blank.  Then press F2 to begin the search.  
            - Continue   to press F2 to search from the last  record  on 
              the screen...
            - Or, Enter a different search key value...
            - Or, Press F7 to scroll backwards; F8 to scroll forward.
            - The  up/down arrow  keys will move the  high-lighted  line 
              upward or downward. 
            - Press  the  F3 key, and the high-lighted  record  will  be 
              shown in detail inside another window in the middle of the 
              screen.
       
       
       RPT  INDX
       These reports are for your use as management information.  Simply 
       selecting  the  menu  option desired  and  pressing  return  will     
       bring up a selection window. By selecting a specific key, such as 
       location,  only the records at this location will  print.  Living 
       the field blank will cause all records to print.
       
       
       RPT FULL
       These  reports  are detailed reports sorted by  the  menu  option 
       chosen.  They are for your permanent off-site storage and  to  be 
       sent to insurance agencies, etc. 
       
       
       
       
                                 HOW TO USE IT                   Page  7
       
            Anyone  who  has been through a fire, burglary,  or  any  of 
       numerous  disasters, and have had to try to list everything  they 
       own,  how  much  the  items were worth,  and  prove  it,  (Serial 
       numbers?)  all this in the midst of an emotionally  trying  time, 
       wishing  they  had been better prepared.     Insurance  companies 
       usually  request  an  updated listing of  inventories  every  six 
       months. Pictures should also be included with this list.  An even 
       better  solution is a video tape recording of the articles,  time 
       and date stamped.  The entire room can be panned across  catching 
       everything in the room.
            Don't  forget articles left inside closets  or  behind/under 
       furniture.
            Anything  one  might forget to take a  snapshot  of  usually 
       shows up in a video tape, somewhere in the background.   Remember 
       to get a shot of the camera. Of course, pictures are not  enough, 
       serial  numbers,  costs, etc. are still required.     You  should 
       also keep your own version of this file, but include  photocopies 
       of receipts, and store this off-site in a safe location. 
       
            How  many think to keep backups of software  off-site?  This 
       system will tell you how important that might be. 
       
       Hints/Reminders:
        -  Include  items  often forgotten in  this  list:
            Expensive Clothing Articles          Landscaping Purchases
            Books                                Telephones
            Computer Software                    Lighting Fixtures
            Customized Curtains                  The Hot Water Heater
            Kitchen Appliances and Utensils      Tap Water Filters
            Children's Articles                  Outside Articles
            Credit Cards
       
        -   Search  through  the closets, garages, in  the  automobiles, 
            off-site    storage,  cellars, etc., places  not  frequently 
            visited. 
        -   Items  that  may  be  lended to someone  else  at  the  time 
            inventory is taken.
        -   Include important papers which may become lost or destroyed.
       
       
       
                                 FIELD DESCRIPTIONS                 Page  8
       
       
         Field              Description                   Size    Cobol Pic
       -----------------    ---------------------------   ------  ---------
        ASSET_KEY            A unique key                  5      X(5)
       
        DESC                 The Description of the        25     X(25)
                              article of value.
       
        TYPE                 The Type code. A category     8      X(8)
                              for the article, ie., tools,
                              equipment, etc.
       
        LOCATION_STORED      The Location Code where the   8      X(85)
                              article is stored, ie.,
                              garage, off-site, xa-01-01, 
                              etc.
       
        USER_DEFINED         A User-Defined code for any   8      X(8)
                              special purpose requirement,
                              ie., persons name, sub-
                              breakdowns of Type or
                              Location, anything you wish.
       
        DATE_PURCHASED       The date the article was      6      X(6)
                              purchased.                         (MMDDYY)  
       
        PURCHASE_COST        The purchase cost or value    7      9(5)v99
                              of the article.                  (characters)
       
        PURCHASED_FROM       Description of where the      25     X(25)
                              article was purchased from.
       
        APPRAISAL            The appraisal value, if       9      9(5)V99
                              applicable.                          
       
        MODEL_NUMBER         The article model number.     10     X(10)
       
        SERIAL_NUMBER        The article serial number.    20     X(20)
       
        COMMENT1             First line of Comments.       50     X(50)
       
        COMMENT2             Second line of Comments.      50     X(50)
       
       
       
                                  INTERFACING                    Page  9
       
           This  feature  is for the advanced computerist,  and  is  not 
       required to use this package as it was intended.  If, though, you 
       are interested or have a special requirement, such as including a 
       portion  of  this  data  in a financial  statement,  or  using  a 
       spreadsheet for more elaborate calculations on the data, or  even 
       want  to  extract  the data maintained here and  upload  it  into 
       another database, you will want to read this section completely. 
       
           This  database  application package contains  a  very  useful 
       report  writer/data extractor.  This can be used to  create  your 
       own reports, specify any subset of fields to extract, browse  the 
       data very quickly, extract data into an ASCII file uploadable  to 
       any word processor, spreadsheet, database package, report writer, 
       etc.  This  feature does not work under the menu system,  so  you 
       will  have  to  be at the operating system prompt  to  use  these 
       commands.
       
           The command name is ASREPORT.
       
           The  following descriptions will use the A> prompt. Don't  be 
       confused  if  you  are  using a  different  disk  drive  and  see 
       something else. 
       
           For a demonstration, type:
               A>ASREPORT ASSETS
       
           The  entire list of records will scroll across  your  screen. 
       This is interesting if used as a browse of the data. Now try: 
       
               A>ASREPORT ASSETS ASSET_TYPE DESC
       
           Notice  that  only the data fields you selected, and  in  the 
       order  you  selected  appear. Interesting?  The  format  of  this 
       command is: 
       
               A>ASREPORT ASSETS [file-element1 file-element2 ...]
       
           The  file elements are those listed in the  previous  chapter 
       and must be spelled exactly.  If the file elements are not  used, 
       all  elements  will be extracted.  If listed on the  screen,  the 
       right most elements will be truncated.  Now lets print something: 
       
          A>ASREPORT ASSETS TYPE DESC LOCATION_STORED PURCHASE_COST > PRN
       
           Another way to do this would be:
       
          A>ASREPORT ASSETS TYPE DESC LOCATION_STORED PURCHASE_COST > MYFILE
          A>COPY MYFILE PRN
       
           The  first method extracts the data and redirects the I/O  to 
       the  printing  device. The second method extracts  the  data  and 
       redirects the I/O into a file of your own choosing. 
       
       
                                  INTERFACING (cont.)            Page 10
       
            Why extract the data into another file?
            This is one of the nicer features of this system.  This file 
       can  be  imported  into  any  spreadsheet,  (Lotus  123,   etc.), 
       database,  or word processing program.  The data may be  used  by 
       the spreadsheet program to be reformatted, sorted in other  ways, 
       or  used for more elaborate calculations.  The database  may  use 
       this data to be uploaded into other databases or report the  data 
       in other formats. The data may be included into a word  processor 
       for  use  inside  a financial report, or for  any  other  special 
       purpose. 
       
       
       
                               ERROR RECOVERY                    Page 11
       
            The  error  messages displayed in the error  window  at  the 
       bottom,  or inside other windows at various locations  should  be 
       obvious,  ie., RECORD NOT FOUND, etc. There is one killer:  INDEX 
       CORRUPTED. 
       
            The index corrupted message means that the database has been 
       corrupted,  and the whole system is hung up.  Nothing will  work.        
       All is not lost.
       
            To recover from this, a special program was developed called 
       ASINDEX.
       
            To recover, type:
       
            Floppy system:
            A>ASINDEX ASSETS
       
            Hard Disk:
            C>ASINDEX ASSETS
       
            A corrupted database happens when inside the system and  the 
       power is lost, if there is a disk error, etc.  It is not a normal 
       condition and should not happen frequently. 
       
       REMEMBER TO BACKUP YOUR DATA REGULARLY!!!
       
            The database routines used in this system will put the  disk 
       drive  through its paces. Occasionally, a machine will  return  a 
       "index  corrupted" message when using any of the functions  which 
       access data.  This could mean that the disk drive is slightly out 
       of  alignment,  even though most of other programs may  work.  If 
       this  is the case, reindexing and running the system  on  another 
       machine may be necessary.
       
        Technical Information:
       
        Equipment needed: IBM-PC (128K) 
                          Floppy or hard disk
                          Color or Monochrome monitor
                          Printer
       
        Configuration:    Printer Port (LST1:)
                          (If  necessary to print to another  port,  use 
                          the MODE command or the PSWAP utility to redirect
                          printer output.)
       
        Files contained on this disk:
                       ASSETS.EXE   -  The main program to execute
                       ASSETS.HLP   -  The help data file
                       ASSETS.DOC   -  The usage manual
                       ASSETS.DAT   -  The main data database file
                       ASSETS.X01   -  The key index file
                       ASSETS.X02   -  The type index file
                       ASSETS.X03   -  The location index file
                       ASSETS.X04   -  The user-defined field index file
                       ASREPORT.EXE -  The report writer program
                       EXTRACT.EXE  -  Date extractor
                       ASINDEX.EXE  -  The reindexer program
                       PSWAP.EXE    -  Printer swap utility
                       PSWAP.DOC    -  Printer swap documentation
                       CONFIG.SYS   -  System file (must have >=10 FILES=)
                       TECHMAN.DOC  -  Manual for customization
                       CUSTMENU.*   -  Files for the custom menu system
```
{% endraw %}

## CUSTMENU.DOC

{% raw %}
```
       
       
       
       
       
       
       
       
       
       
       
       
       
                           ROKMAR Simple Menu System
       
                                  Version 1.0
       
                                 System Manual
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
                            ROKMAR Computer Systems
                              Copyright (c) 1990
       
       
       
       
                           ROKMAR SIMPLE MENU SYSTEM             
       
       
                                    FEATURES
       
       
       
               * Easy to use, no user training necessary
               * Execute applications and commands with one keystroke,
                   no need to remember the tricky syntax
               * Executes any program, DOS command or BAT file
               * Isolate users from the confusing and cumbersome DOS
                   language
               * Setup new menus in minutes; utilizes the full power 
                   of DOS
               * No need to learn complicated menu languages;
                   setup menu with a simple data entry screen
               * On-line help available
       
       
       
       
       
                           ROKMAR SIMPLE MENU SYSTEM             
       
       
       
       
       
       
       
       
       
       
       
       
       
                                       INDEX
       
                         Copyright Notice ............ 1
                         What Is It .................. 2
                         Installation ................ 3
                         Program Usage ............... 4
                         Menu System Usage ........... 13
       
                         Appendices
                         Field Editing ............... 17
                         Example Menu Setups.......... 18
                         Useful DOS Commands ......... 20
                         Technical Info .............. 22
       
       
       
                                COPYRIGHT NOTICE                 Page  1
       
       This  software  product  is the copyrighted  property  of  ROKMAR 
       Computer  Systems,  and  the usual  shareware  limited  agreement 
       applies:
       
       1.  No  fee may be charged for the retail sale  of  this  product 
       other than a reasonable copy and distribution charge.
       
       2.  This  product  may only be distributed in  its  original  and 
       complete form, including documentation and copyright notice.
       
       3.  This product may not be distributed, whole or in any part  as 
       a  section  or  part of any commercial  product  without  written 
       permission of ROKMAR COMPUTER SYSTEMS. 
       
       
                                   DISCLAIMER
       
       ROKMAR Computer Systems, its owners or other related parties will 
       not be liable for any damages or claims related in any way to the 
       use  of  this  product and disclaims all  warranties  or  implied 
       warranties by the distributor. 
       
       
       
       
                                  WHAT IS IT?                    Page  2
       
       
            A  menu system is a DOS command executor, similar to  a  DOS 
       shell. What it does is:
            - to store one or many sometimes complicated and  cumbersome 
       commands  in a group which will accomplish something, like run  a 
       program or backup a disk drive,
            - present these command sets on the screen in the form of  a 
       catalog or list and,
            - provide  a means of conveniently executing these  commands 
       or group of commands by simply pressing a key.
        
            The  system  should  pop right back  after  the  command  is 
       finished and allow another command to be executed.
       
            This menu system is designed specifically for removable disk 
       systems.  Each  disk  or  cartridge  can  contain  its  own  menu 
       installation. As a disk is swapped with another, pressing the "Z" 
       key will display the new system title and new menu selections. 
       
                                                                 Page  3
                                 INSTALLATION
       
       INSTALLING UP THIS SYSTEM ON YOUR COMPUTER.
       
       Make a copy of this disk for your own backup at once!
       
            Because  of  the  variety  of  hardware  configurations,  an 
       installation  program  is  not included.  The  core  system  only 
       contains  a few files, so simply copying the files one at a  time 
       only takes a few seconds.
       
       The  menu  system   requires these files  be  contained  in   the 
       current directory. Simply copy these files to your work area  and 
       the installation is complete.
       
           CUSTMENU.EXE
           CUSTMENU.CFG
           CUSTMENU.HLP
       
       The COMMAND.COM file must be available to the current  directory, 
       either  in the current disk:directory, or specified in the  PATH= 
       statement.
       
       The main system files are:
           CUSTMENU.EXE   - The main menu program 
           CUSTMENU.CFG   - The menu configuration file
           CUSTMENU.HLP   - Help screens for maintenance portion
       
                                                                  Page 4
       
       
       CUSTMENU.EXE
       
       CUSTMENU [drive:][path][configfile]
       
       The main menu program 
       
       PARAMETERS
       
       drive:  -  The  drive  letter of  the  disk  which  contains  the 
       configuration file. When the program is begun, a config file must 
       exist  on that drive for the menu program to be able to  load  an 
       initial menu. This drive becomes the default drive and at the end 
       of  each command line, the menu resets the current drive back  to 
       this drive.
       
         Default: The drive where the menu program is executed from.
       
       
       path - The directory which contains the configuration file.  When 
       the program is begun, a config file must exist in this  directory 
       for  the  menu program to be able to load an initial  menu.  This 
       directory  becomes the default directory path and at the  end  of 
       each command line, the menu resets the current drive back to this 
       directory.
       
         Default: The directory where the menu program is executed from.
       
       
       configfile - The menu configuration file. This file contains  the 
       command  titles,  the  specific  disk title,  and  the  group  of 
       commands  themselves.
         
         Default: CUSTMENU.CFG   
       
                                                                  Page 5
       
       
       SCREEN:
       -----------------------------------------------------------------
       05/05/1989            ROKMAR Simple Menu System       Version 1.0
       
                           ******* Disk Title     *******
       
       
       A - Format Disk in Drive A         I - ROKMAR HouseHold Inventory          
       
       B - Copy Disk (A -->B)             J - 
       
       C - Check disk A for errors        K -          
       
       D - Print a file                   L -          
       
       E - Show disk label                M -          
       
       F -                                N - Star Wars (Shoot-em-up)
       
       G -                                O - Chess program (Sargon)
       
       H - Run Basic                      P - Black Jack (Basic program)
       
       
       F9- Update Menu                    Z - Reload Menu Configuration
                                              (Press after changing disks)
       
       Press  the  letter for the selection.                 (ESC  exits 
       menu)
       -----------------------------------------------------------------
       
                                                                  Page 6
       
       
       To  run  a command, simply press the preceding letter.  When  the 
       command(s) are complete or exited, the menu will take over  again 
       and display the menu on the screen.
       
       Pressing  F9  will place you inside the  maintenance  module  and 
       screen.
       
       Pressing  the  Z  key  will  cause  the  program  to  reread  the 
       configuration  file  and  redisplay the  changed  menu.  This  is 
       usually done when a different disk is inserted into the drive.
       
       To exit from the menu system, press the ESC key. The program will 
       confirm  that  you  want to leave the  menu  system  on  purpose. 
       Pressing the Y key will cause the menu system to terminate.
       
       
                                                                 Page 7
       MENU MAINTENANCE
       
       This  module  is contained inside the main menu  program.  It  is 
       executable by pressing F9.
       
       
       SCREEN:
       -----------------------------------------------------------------
       05/05/1989          ROKMAR Floppy Disk Menu System    Version 1.0
       
                                                     Press F1 for Help
                                                     Press F2 to Update
                                                     Press Esc to Exit
       
                           ******* Disk Title     *******
       A - Format Disk in Drive A         I - ROKMAR HouseHold Inventory          
       B - Copy Disk (A -->B)             J - 
       C - Check disk A for errors        K -          
       D - Print a file                   L -          
       E - Show disk label                M -          
       F -                                N - Star Wars (Shoot-em-up)
       G -                                O - Chess program (Sargon)
       H - Run Basic                      P - Black Jack (Basic program)
       
           Selection:   _         (A -> P  or  * = DISK TITLE)
           Description: _________________________
           Command:     ________________________________________________
       
       Enter the selection, then overtype the desired data. F2 updates.   
       -----------------------------------------------------------------
                                                                 Page 8
       
       
       The top part of the screen contains a display of the current menu 
       configuration including the disk menu title. As each selection of 
       the menu is updated, the menu display is refreshed.
       
       FIELDS
       
       SELECTION:  This  element  is the  selection  letter.  The  valid 
       letters  are A through P and *. Entering the * in  the  selection 
       field will allow the disk menu title to be updated.
       
       DESCRIPTION: This is the selection description which will  appear 
       on  the  screen  and describe the program, system  or  action  to 
       happen when that selection is chosen.
       
       COMMAND: This is the field where the commands themselves actually 
       reside.  One  or  more  commands can  be  placed  on  this  line, 
       delimited by a tilde (~). Any command that can be entered at  the 
       DOS  prompt  (A>)  can be entered here. There  is  no  difference 
       between  each command. The menu handles each command the same  as 
       DOS  would  require,  using the same  input  format.  Appendix  A 
       contains examples of this. 
       
       
                                                                 Page 9
                                MENU SYSTEM USAGE
       
       The system can either be started automatically when the  computer 
       is  booted  by placing the command in the AUTOEXEC.BAT  file,  or 
       once the menu program is running, swapping disks and pressing the 
       Z  key  will reload the next disk's menu configuration  file  and 
       display this on the screen. 
       
       Once  the menu us running, it waits for a selection to  be  made. 
       The  computer  can be shut off anytime without exiting  the  menu 
       program.
       
       The command to run the menu program is:  CUSTMENU
       
       Points to know and keep in mind in setting up the menu:
         (full explanation follows)
       
       1.  Commands on another drive should begin with the drive letter.
       
       2.  Multiple commands can be executed from one selection.
       
       3.  If there too many commands to fit on a command line, put them 
       inside a bat file.
       
       4.  The  menu  program returns to the drive letter and  directory 
       from where the menu program was executed. 
       
       
         
       
       1.  Commands on another drive should begin with the drive letter.
       
       When executing commands on another drive, the command line in the 
       menu should start by setting the current drive to the drive where 
       the commands reside. Example:
       [C:~CD \LOTUS~123                                  ]
       
       The first part of the command line sets the current drive to  the 
       C  drive. This tells the computer where to find the  programs  to 
       execute.
       
       An exception to this is when the commands are located in an  area 
       specified  by  a PATH statement. For example, if  a  command  was 
       located at B:\DOS and a path was specified as PATH=C:\DOS,   this 
       command could be executed from anywhere and DOS would know  where 
       to  find the command. (DOS restrictions apply here and should  be 
       understood before using the PATH method).
       
                                                                 Page 10
       
       
       
       2.  Multiple commands can be executed from one selection.
       
       As  many  commands  as  could  fit  on  a  command  line  can  be 
       concatenated  in  the command line. As  each  command  completes, 
       control is passed immediately to the next command on the  command 
       line,  as if someone had typed the command immediately  into  the 
       computer. 
       
       Example: to run lotus again:
       [C:~CD \LOTUS~123                                 ]
       
       For  the  sake  of  redundancy also notice  that  each  of  these 
       commands  are the same as would be typed at the DOS  prompt.  The 
       tilde (~) is used instead of hitting the enter key. In this  case 
       the commands being executed are:
       
       A>C:
       C>CD \LOTUS
       C>123
       
       In summary, the commands entered on the command line are  exactly 
       the  same as would be typed on the screen at the DOS prompt.  The 
       menu  system  simply passes each command to DOS to  be  executed, 
       then  DOS  passes control back to the menu  program,  which  will 
       execute the next command on the command line if one exists.  When 
       the  commands  on the command line have been executed,  the  menu 
       program  will clear the screen and redisplay the menu  selections 
       screen.
       
                                                                 Page 11
       
       
       
       3.  If there too many commands to fit on a command line, put them 
       inside a bat file.
       
       Most  needs can be met by placing several commands inside the  60 
       byte command line. For example:
       [ECHO Type EXIT to return to the menu~COMMAND     ]
       
       But  other times more room than this is needed. BAT files can  be 
       used for this need. Example:
       
       REM *** This BAT file is to check the hard drive if it does not
       REM *** seem to want to boot up.
       REM
       ECHO OFF
       ECHO
       ECHO  **** Check a disk for errors ****
       ECHO
       ECHO Load in the DOS system disk into drive A.
       ECHO When this is done
       PAUSE
       
       Save this as SYSA.BAT.
       The command line would be:
       [SYSA~A:~CHKDSK C:/F                              ]
       This might be for working on the C drive after a crash.
                                                                 Page 12
       
       
       Another Example:
       REM This is a BAT file to load the accounting system
       REM into the background, then to start up the system
       REM
       ECHO Load the GL system disk #1 in Drive A
       PAUSE
       ACCTSYS
       ECHO Load the GL system disk #2 in Drive A
       PAUSE
       GL
       
       Save as GLA.BAT.
       
       The command line would be:
       [GLA                                              ]
       
       Yes, some applications are setup this complicated. The first part 
       of  the  BAT file are comments as documentation. The  first  ECHO 
       statement  tells  the operator to load in the GL disk  #1,   then 
       runs the program ACCTSYS. This is for security or something. Then 
       the  next  ECHO statement tells the operator to load  in  the  GL 
       application disk, then the BAT file runs the GL application. 
       
       4.   The  menu program returns to the drive letter and  directory 
       from  where the menu program was executed. Remember, the  default 
       drive and directory can be set on the command line.
            Each  time  a selection is invoked, the  system  resets  the 
       computer  to the default drive and directory. For example if  the 
       menu program was executed initially from the A drive and the root 
       directory  (\), and the menu executes a program from drive B  and 
       directory  \lotus, when the program completes, the computer  will 
       be back to drive A and the root directory.
            With  this  in mind, short cuts can be made when setting  up 
       the  menu  when  programs are executed from the  same  drive  and 
       directory where the menu program resides.
       
       For  example, if the menu and lotus  both exist on one  disk  and 
       the same directory, the command line would be:
       [123                                              ]
       
       If  lotus exists on another disk and directory, then the  command 
       line becomes:
       [C:~CD \LOTUS~123                                 ]
       
       Notice how simple the first example was.
       
       
       
       
       
       
       
       
       
       
       
       
       
                                  APPENDICES
       
                                FIELD EDITING                    Page 13
       
       Using the data entry fields.
       
            The  data entry screen has three entry fields.  The data  in 
       each  of  these fields may be edited after some  value  has  been 
       entered.   The  type of edits available for each  field  include, 
       inserting   characters  inside  data  already  edited,   deleting 
       characters,  etc.   This scheme is similar  to  word  processors, 
       spread  sheets,  etc.   Following  is a  detailed  list  of  each 
       function and the key to be used for each.
       
       Key    Function
       ____   __________________________________________________________
       
       Ins    This  will  toggle into or out of  the  insert  mode.  The 
              cursor  will  be a block character when inside the  insert
              mode. When  inside the insert mode, any data above and  to
              the right  of the  cursor will be moved over and the  data
              typed will be  shoved inside, inserted.
       
       Del    The Delete Key: The character above  the  cursor  will  be 
              deleted and the data to the right will be  moved  over  to  
              fill the space created by the character deleted.
       
       BS     The Back-Space Key: The cursor will be moved to the  left;
              any data above the cursor will be deleted; the data to the
              right will be moved to the left.
       
       -->    The  right  arrow  key:  The  cursor  will  be  moved  one 
              character to the right, no data will be affected.
       
       <--    The left arrow key: The cursor will be moved one character
              to the left, no data will be affected.
       
       Up     The up arrow key: The cursor will jump up to the  previous
              data entry field.
       
       Down   The down arrow key: The cursor will jump down to the  next
              data entry field.
       
       Return The return/entry key: The cursor  will  jump  down  to the
              next data entry field.
       
       Esc    The escape key: This will exit  the  mode  of  the program 
              without doing any updates to the database.
       
       
                                                                 Page 14
                            
       
       
                              EXAMPLE MENU SETUPS
       
       
       
       1. Run from Drive A: Menu on Disk 1, program on Disk 1
       
       Menu Description: [Lotus               ]
       Command Line: [123                                               ]
       
       
       
       2. Menu on Drive A, program on drive B
       
       Menu Description: [Lotus               ]
       Command Line: [ECHO Load lotus disk in drive B~PAUSE~B:~123      ]
       
       
       
       3. Menu on Drive A, program on hard disk C
       
       Menu Description: [Lotus               ]
       Command Line: [C:~CD \LOTUS~123                                  ]
       
       
       4. Run from Drive A: Menu on Disk 1, program on Disk 2
          (This is not a usual setup; see #7 for a better alternative).
       
       Menu Description: [Lotus               ]
       Command Line: [123A                                              ]
       Bat File1: ECHO Load lotus disk in drive A
                  PAUSE
                  A:
                  123
       Bat File2: ECHO Load menu disk in drive A
                  PAUSE
                  A:
                  
       (the menu program does not have to be run again)                    
       
       5. DOS Command: Display a directory
       
       Menu Description: [Show Directory of Drive A ]
       Command Line: [DIR A:~PAUSE                                      ]
       
       
       
       6. Exit to DOS temporarily, then return to menu
       
       Menu Description: [Exit to DOS, then Return  ]
       Command Line: [ECHO Type EXIT to return to menu~COMMAND          ]
                                                                 Page 15
       
       
       7. Menu program on disk A, config file on drive B
          (To start this, begin menu by: CUSTMENU B:)
       
       Menu Description: [Lotus               ]
       Command Line: [123                                               ]
       
       
       
       8. Print an ASCII file
       
       Menu Description: [Print an ASCII file       ]
       Command Line: [RPRINT                                            ]
         or
       Command Line: [PASSF File name to print,TEMP~PRINT TEMP~DEL TEMP ]
       
       Note:  RPRINT and PASSF are special utilities included  with  the 
       CUSTMENU system.
       
       
       
       9. Copy files
       
       Menu Description: [Copy files                ]
       Command Line: [RCOPY                                             ]
         or
       Use the "Exit to DOS" approach
       
       Note: RCOPY is a special utility included with the CUSTMENU system.
       
       
       
       10. CUSTMENU calling another CUSTMENU
           This will allow more than 20 menu selections. Add a selection 
       on the main menu that calls another menu.
       
       Menu Description: [DOS commands menu         ]
       Command Line: [CUSTMENU CUSTMENU.CF2                                 ]
       
       The  configuration file CUSTMENU.CF2 assumes that you have  created 
       another configuration file.
       
                                                                 Page 16
       
                              USEFUL DOS COMMANDS
       
            The following are a list of standard DOS commands which  are 
       useful  in  setting up some menus. A full  explanation  of  these 
       commands are in the DOS system manual.
       
       
       
       CHDIR    - Change  the current directory to the one specified  by 
                  this command.
       CD       - Same as CHDIR.
       
       CHKDSK   - Checks a disk's file system index. Good to have in the 
                  autoexec.bat.
       
       ECHO     - Display a message on the screen.
       
       MORE     - Allows the viewing of ASCII files, one page at a time.
       
       PAUSE    - Display "Hit a key to continue..." and wait for a  key 
                  to be pressed.
       
       REM      - Allows comments in a BAT file.
                                                                Page 17
       
       
       
        Technical Information:
       
       
       
        Equipment needed: IBM-PC (128K) 
                          Floppy, cartridge or hard disk
                          Color or Monochrome monitor
       
        Operating System: DOS 2.0 or higher
       
       
        System files
           CUSTMENU.EXE   - The main menu program w/maintenance module
           CUSTMENU.CFG   - The menu configuration file
           CUSTMENU.HLP   - Help screens for maintenance program
       
```
{% endraw %}

## FILE1227.TXT

{% raw %}
```
Disk No: 1227                                                           
Disk Title: Rokmar Assets Inventory                                     
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: Assets Inventory System                                  
Author Version: 2.0                                                     
Author Registration: $15.00 for version with updates.                   
                                                                        
ROKMAR HOME/OFFICE ASSETS INVENTORY SYSTEM is an inventory log program  
that enables you to keep track of your home or office assets.           
                                                                        
In case of fire, theft, etc., your insurance company will want an       
itemized list of each piece of merchandise, the model numbers, the      
serial numbers, the location the article was kept, the purchase/        
replacement cost, etc.  This information can be difficult to piece      
together with any amount of accuracy after the disaster strikes.        
                                                                        
The INVENTORY SYSTEM keeps track of all you own, allows for easy        
updating on a regular basis, and provides a detailed inventory report of
assets sorted by type, location or user defined index.  It is also able 
to generate customized files for importing to spreadsheets or financial 
analysis programs.                                                      
                                                                        
You may be amazed to find out how much money you have tied up in        
household/office assets, in what areas this money is concentrated, and  
in what type of merchandise!  This information is useful for capital    
budgeting, tax planning, developing reasonable precautions against      
losses due to theft and fire, and, of course, documentation for         
insurance claims.                                                       
                                                                        
The INVENTORY SYSTEM also provides helpful guidance on how to take      
inventory, such as hints concerning often overlooked items: expensive   
clothing articles, landscaping purchases, books, telephones, computer   
software, lighting fixtures, custom curtains, hot water heater, kitchen 
appliances and utensils, tap water filters, children's articles, outside
articles, items loaned to someone else, important papers, etc.          
                                                                        
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
    ╔══════════════════════════════════════════════════════════════════╗
    ║                       <<< Disk #1227 >>>                         ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║                                                                  ║
    ║  To start program type:  ASSETS                                  ║
    ║                                                                  ║
    ║                                                                  ║
    ║  Type "README" for information                                   ║
    ║                                                                  ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
    (c) Copyright 1990, PC-SIG Inc.
~
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
       
       
                               LICENSE AGREEMENT
       
       
                  (C) Copyright 1988, ROKMAR Computer Systems
                             All rights reserved.
       
       ROKMAR  Computer Systems grants the user the right to  reproduce, 
       distribute  and use copies of ROKMAR  Household/Office  Inventory 
       System, Version 2.0 programs and documentation providing that  no 
       payment   or   commercial  benefit,  other  than   a   reasonable 
       distribution  fee,  be charged without  written  permission  from 
       ROKMAR  Computer  Systems, and that no modifications be  made  to 
       programs or documentation. 
       
       ROKMAR  products  are  being  constantly  updated  and  enhanced. 
       Payment  of $15 entitles the user for an updated version  of  the 
       system as it becomes available, and notices of enhancements. Your 
       support enables this "shareware" distribution system to continue, 
       allowing you to test the usefulness of a system on your  hardware 
       before   you   purchase  it.  Your  payment  would   be   greatly 
       appreciated. 
       
       Send payment to:
                              Robert O. Keith Jr.
                                2089 East Kern 
                              Tulare, Ca.  93274
       
       
              
                                  DISCLAIMER
              
       RokMar   Computer  Systems or any of its management will  not  be 
       liable  for any damages or claims  related  in  any  way  to  the  
       use   of   this  product  and disclaims    all    warranties   or  
       implied   warranties   by   the distributor.
       
       
                               REGISTRATION FORM
       
       To obtain the latest release of this product, please fill out the 
       form below.
       
       Date:    _____________
       
       Name:    _____________________________________
       
       Company: ________________________________________________________
       
       Address: ________________________________________________________
       
                ________________________________________________________
       
                ________________________________________________________ 
       
       
       Quantity  Description                          Cost     Total
       
       ________  ROKMAR Floppy Disk Menu System       $6.95    _________
       
       ________  ROKMAR HouseHold/Office Inventory    $15.00   _________
       
       ________  ROKMAR Records Management System     $30.00   _________

                 Shipping cost if overseas add $2.00           _________
                 If diskette format is 3.5, add $2.00 per      _________
                 Indicate format  5.25[ ] or 3.5 [ ]
       
                                                       TOTAL:  =========
       
       
                                   COMMENTS
       
       Your  comments  and suggestions about this  product  are  greatly 
       appreciated. Please comment on shortcomings or suggestions on how 
       this product could possibly better suit your needs.
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
              
       
```
{% endraw %}

## PSWAP.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       PSWAP
       
       PSWAP - There are no input parms. 
       
       
            This  utility swaps the printer ports LPT1 <-->  LPT2.  Once 
       swapped,  they  will  stay swapped until  swapped  back,  or  the 
       computer is rebooted. 
       
            The  use  of  this is to easily swap  between  two  printers 
       without  having to reconfigure software, hardware, etc.  This  is 
       especially useful inside batch files or menu systems.
       
       
       
       
```
{% endraw %}

## SAMPRPT1.BAS

{% raw %}
```bas
10 ' ************************************************************************
20 ' *****  Example report: Simple list report sorted by model number.  *****
30 ' ************************************************************************
40 ' ****** extract record description
50 OPEN "R",#1,"tempsort.dat",241
60 FIELD #1, 5 AS ASSETKEY$,25 AS DESC$,8 AS TYPE$,8 AS LOCATION$,8 AS USERDEF$, 8 AS DATEPUR$, 11 AS PURCOST$,25 AS PURFROM$,11 AS APPRAISAL$,10 AS MODELNO$,  20 AS SERIAL$,50 AS COMMENT1$, 50 AS COMMENT2$, 1 AS CR$
70 '
80 LINESPERPAGE = 55
90 PAGECOUNT = 0
100 LINECOUNT = 0
110 TOTAL = 0
120 GOSUB 320                   ' Print the column headers
130 '
140 IF EOF(1) THEN 250
150 GET #1                      ' read the next record
160 '
170 IF VAL(PURCOST$) < 100 THEN GOTO 140
180 '
190 ' ******* record  selection
200 IF LINECOUNT >= LINESPERPAGE THEN GOSUB 320
210 TOTAL = TOTAL + VAL(PURCOST$)
220 LPRINT ASSETKEY$;" ";TYPE$;" ";DATEPUR$;"    ";MODELNO$;" ";SERIAL$;" ";               PURCOST$
230 LINECOUNT = LINECOUNT + 1
240 GOTO 140
250 '
260 ' ******** exit section
270 LPRINT "                                                      Total:  ";
280 LPRINT TOTAL
290 CLOSE #1
295 SYSTEM
300 END
310 '
320 ' ************************************************************************
330 ' *****  Print heading routine.                                   *****
340 ' ************************************************************************
350 PAGECOUNT = PAGECOUNT + 1
360 LINECOUNT = 5
370 LPRINT CHR$(12)                  ' print a form feed character
380 LPRINT DATE$;"         ********* ROKMAR example report *********";
390 LPRINT "        page: ";PAGECOUNT
400 LPRINT "                           List of items over $100.00"
410 LPRINT
420 LPRINT "Key   Type     Date Purch  Model#     Serial#              Purch Cost"
430 RETURN
```
{% endraw %}

## TECHMAN.DOC

{% raw %}
```
       
       
       
       
       
       
       
       
       
       
       
       
       
                        ROKMAR ASSETS INVENTORY SYSTEM
       
       
                                  Version 2.0
       
                          Technical Reference Manual
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
                            ROKMAR Computer Systems
                              Copyright (c) 1990
       
       
                    
                       ROKMAR ASSETS INVENTORY SYSTEM
       
       
       
       
       
       
       
       
       
       
       
       
       
                                     INDEX
       
                       Introduction ................  1
                       Copyright Notice ............  3
                       ASREPORT ....................  4
                       BASIC Reporting .............  6
                       Data Dictionary .............  8
                       Custom Help Windows .........  9
                       Custom Report Menu .......... 10
       
                                                                 Page  1
                                 INTRODUCTION      
       
       
       This  document  describes  the internal workings  of  the  ROKMAR 
       Assets  Inventory  System  and methods to  customize  the  report 
       outputs.
       
       The most user requested feature of any application is the ability 
       to  create custom reports. Reports are one of the most  important 
       and useful outputs from an application, and certainly one of  the 
       most  visible. The usefulness of the report can be degraded  when 
       the  report  heading and field names are described in  a  generic 
       fashion  using terms not used by the company. Most users want  to 
       customize  their  reports and create business  specific  versions 
       that  are immediately recognizable. This document will  tell  you 
       how to do just that.
       
       This application is built over a relational database model.  This 
       means  that  fields  in files can be linked to  fields  in  other 
       files. The fact that this system sits on a database allows us  to 
       be  able  to extract data by field name without  having  to  know 
       where that data is. A quick example would be to try this program:
       
       Type: ASREPORT ASSETS ASSET_KEY DESC
       
       The screen will display the data fields from the records from the 
       file  ASSETS  sorted  by ASSET_KEY. We  have  written  our  first 
       report;  see how simple this can be. This program and a  list  of 
       all the data fields are described later. 
       
                                                                 Page  2
       INTRODUCTION (cont.)      
       
       
       There  are  two  custom reporting  methods  available  with  this 
       system: the method described above using program ASREPORT,  which 
       is  a  simple  data  lister; and a  second  method  which  allows 
       complete   format  control  of  the  data.  Any  extraction   and 
       formatting  scheme is possible from printing small gum labels  to 
       printing  large 162 character wide reports to any  printer  type. 
       Method  two requires some programming expertise or the desire  to 
       fiddle  around with some code. Since these reports are read  only 
       from  extracts, no harm to the database is possible, so  you  can 
       not hurt anything by tinkering. 
           
       
       
                                                                 Page  3
                                COPYRIGHT NOTICE                         
       
       This  software  product  is the copyrighted  property  of  ROKMAR 
       Computer  Systems,  and  the usual  shareware  limited  agreement 
       applies:
       
       1.  No  fee may be charged for the retail sale  of  this  product 
       other than a reasonable copy and distribution charge.
       
       2.  This  product  may only be distributed in  its  original  and 
       complete form, including documentation and copyright notice.
       
       3.  This product may not be distributed, whole or in any part  as 
       a  section  or  part of any commercial  product  without  written 
       permission of ROKMAR COMPUTER SYSTEMS. 
       
       
                                   DISCLAIMER
       
       ROKMAR  Computer Systems, its owners, management, or   associates 
       will  not be liable for any damages or claims related in any  way 
       to  the  use  of this product and  disclaims  all  warranties  or 
       implied warranties by the distributor.
       
       
                                                                 Page  4
       ASREPORT PROGRAM
       
       
       This program us useful for quick report lists to the screen, to a 
       printer  or  to  an  ASCII  file that  can  be  imported  to  any 
       spreadsheet or wordprocessor to create business statements.
       
       This program is not incorporated into the application in general, 
       but runs under DOS. This program can be included into the  custom 
       menu  which  is  a part of the ASSETS  custom  report  system  in 
       general. The name of the program is ASREPORT.EXE.
       
           The  following descriptions will use the C> prompt. Don't  be 
       confused  if  you  are  using a  different  disk  drive  and  see 
       something else. 
       
           For a demonstration, type:
               C>ASREPORT ASSETS
       
           The  entire list of records will scroll across  your  screen. 
       This is interesting if used as a browse of the data. Now try: 
       
               C>ASREPORT ASSETS ASSET_KEY DESC
       
       Notice  that only the data fields you selected, and in the  order 
       you selected appear. Interesting?  The format of this command is: 
       
               C>ASREPORT filename [file-element1 file-element2 ...]
       
       The filename in this case is ASSETS.
       
       The file elements are those listed in a later chapter and must be 
       spelled exactly.  If the file elements are not used, all elements 
       will  be  extracted.   If listed on the screen,  the  right  most 
       elements will be truncated.  Now lets print something: 
       
          C>ASREPORT ASSETS ASSET_TYPE DESC USER_DEF > PRN
       
           Another way to do this would be:
       
          C>ASREPORT ASSETS ASSET_TYPE DESC USER_DEF > myfile
          C>COPY MYFILE PRN
       
           The  first method extracts the data and redirects the I/O  to 
       the  printing  device. The second method extracts  the  data  and 
       redirects  the I/O into a file of your own choosing, then  prints 
       the file. 
       
                                                                 Page  5
       ASREPORT PROGRAM (cont.)
       
       
       Why extract the data into another file?
       
       This is one of the nicer features of this program.  This file can 
       be imported into any spreadsheet, (Lotus 123, etc.), database, or 
       word processing program.  The data may be used by the spreadsheet 
       program to be reformatted, sorted in other ways, or used for more 
       elaborate uses.  A program may use this data to upload into other 
       databases  or report the data in other formats. The data  may  be 
       included into a word processor for use inside a business  report, 
       or for any other special purpose. 
       
                                                                 Page  6
       BASIC REPORTING
       
       This  section describes a more elaborate reporting  system.  This 
       system  is  more complicated, but is without limitations  in  its 
       usage for reporting, extracting, etc.
       
       This  section is called BASIC reporting because it actually  uses 
       the BASIC language distributed with every MS-DOS/PC-DOS operating 
       system. BASIC has all the power of any report writer program  and 
       more.  It  is virtually as simple to use, but is not  limited  in 
       power as most every report writer programs available. 
       
       Report writing is typically composed of three parts:
       
       1.  Extraction: The data is read from the data files and  written 
       to an ASCII file.
       
       Extraction  is done in ASSETS by a program similar  to  ASREPORT, 
       called EXTRACT. This program is used from DOS in the same way:
       
               C>EXTRACT filename [file-element1 file-element2 ...]
       
       
       2.  Sorting:  The  ASCII  file is then sorted in  the  order  the 
       output is desired.
       
       Sorting  is  then  done by a sort program. DOS  supplies  a  sort 
       program  called SORT. The only problem with this program is  that 
       it  will  only work with files small enough to fit  into  memory. 
       Sorting  can  be  done with any sorting  program  available  from 
       numerous sources. If your database is not too large, the DOS sort 
       will work fine. A typical example would be:
       
               C>SORT <infile >outfile
       
       Notice  that in this case the sorting routine sorts the  data  in 
       the  order that the elements are in the record. This  means  that 
       when extracting the data, you should list the elements to extract 
       by the extract program in the order you wish to sort by.
       
       
       3.  Output  Formatting: The  sorted ASCII file is then  read  and 
       written  to the printer in some defined format. This can be  done 
       with any language, but examples are supplies using BASIC. 
       
       The program should:
       
       -  Read in each record of data from the ASCII file.
       -  Either select or reject this record.
       -  Format the output report line with the data and write this line.
       
       Any  of  the  programs  ending in .BAS  are  examples  of  report 
       programs.
                                                                 Page  7
       BASIC REPORTING (cont.)
       
       Finally,  all three of these steps should be placed into  a  .BAT 
       file as a packaged report program. This will require the use of a 
       text  editor such as the DOS EDLIN program, or a  word  processor 
       which creates ASCII output files.
       
       This  .BAT  file can then be run from the DOS  prompt  or  placed 
       inside the custom reporting menu supplied with ASSETS.
       
       
       Following is an example, the file name is SAMPRPT1.BAT:
       
       REM ******************************************************
       REM **** SAMPLE REPORT 1, SIMPLE LIST BY KEY         *****
       REM ******************************************************
       ECHO OFF
       EXTRACT ASSETS > TEMP.DAT
       SORT <TEMP.DAT >TEMPSORT.DAT
       GWBASIC SAMPRPT1
       DEL TEMP.DAT
       DEL TEMPSORT.DAT
       
       Notice  the  three main parts of a  report  program:  extraction, 
       sorting then formatting done here with GWBASIC. The BASIC program 
       used here is SAMPRPT1.BAS.
       
       An example type of custom report might be:
       The  user defined field 1 has been defined by your company to  be 
       the department responsible for the record. You will want a report 
       which  lists all records by department, then by client,  then  by 
       record number.
       
       EXTRACT  ASSETS  USER_DEF  ASSET_KEY  DESC 
       APPRAISAL DATE_PURCHASED > rptfile.tmp
       SORT <rptfile.tmp >sortfile.tmp
       GWBASIC MYRPT.BAS
       DEL rptfile.tmp
       DEL sortfile.tmp
       
       The  BASIC program could put your company's name on  the  heading 
       and  describe the report as you use it. The field USER_DEF  could 
       be called DEPARTMENT CODE (or whatever you wish). 
       
       You can even select only specific departments to print; in  fact, 
       any selection criteria you wish is possible. There are no  limits 
       at all imposed on a creative user.
       
       
       
                                                                 Page  8
       DATA DICTIONARY
       
       The   two  data  files  are  described  here.  For  an   in-depth 
       textual description of each field, refer to the help windows.
       
       File ASSETS
       
       
         Field              Description                   Size    Cobol Pic
       -----------------    ---------------------------   ------  ---------
        ASSET_KEY            A unique key                  5      X(5)
       
        DESC                 The Description of the        25     X(25)
                              article of value.
       
        TYPE                 The Type code. A category     8      X(8)
                              for the article, ie., tools,
                              equipment, etc.
       
        LOCATION_STORED      The Location Code where the   8      X(85)
                              article is stored, ie.,
                              garage, off-site, xa-01-01, 
                              etc.
       
        USER_DEFINED         A User-Defined code for any   8      X(8)
                              special purpose requirement,
                              ie., persons name, sub-
                              breakdowns of Type or
                              Location, anything you wish.
       
        DATE_PURCHASED       The date the article was      6      X(6)
                              purchased.                         (MMDDYY)  
       
        PURCHASE_COST        The purchase cost or value    7      9(5)v99
                              of the article.                  (characters)
       
        PURCHASED_FROM       Description of where the      25     X(25)
                              article was purchased from.
       
        APPRAISAL            The appraisal value, if       9      9(5)V99
                              applicable.                          
       
        MODEL_NUMBER         The article model number.     10     X(10)
       
        SERIAL_NUMBER        The article serial number.    20     X(20)
       
        COMMENT1             First line of Comments.       50     X(50)
       
        COMMENT2             Second line of Comments.      50     X(50)
       
       
                                                                 Page  9
       CUSTOM HELP WINDOWS
       
       Be sure to make a copy of the original help file before  altering 
       this file!
       
       The help windows are also user customizable with any text editor. 
       Caution  must  be  exercised here in that the  windows  follow  a 
       special format. The format is :
       
       <field   >  Must be 8 characters
       
       Text 
       
       <next    >
       
       The last help window should be terminated with an <end>.
       
       Refer  to  the  current help window  file  distributed  with  the 
       system. This file is ASSETS.HLP. 
       
       The  window automatically adjusts itself to the size of the  text 
       created  by the user. This does not mean that the text can be  of 
       any size; any sentences going past the edge of the screen will be 
       truncated.  This will not hurt anything, so if it  happens,  just 
       return and shorten the sentences of the help text.
       
       Customizing  this  file can be helpful when a company  is  making 
       special uses of the fields provided. One example might be if  the 
       user defined field #1 is used for a persons name. The help window 
       might become:
       
       <user-def>
       
        The enter the person's name that is
        responsible for this record.
       
        Be sure to left justify this field and 
        always type with caps on.
       
                                                                 Page 10
       CUSTOM REPORT MENU
       
       Provided  with  the ROKMAR Records Management System  is  a  menu 
       system  to  run  any custom reports without  leaving  the  ASSETS 
       system. This menu system is documented in a separate document: 
       CUSTMENU.DOC.
       
       This  menu  system can be replaced by any other menu  system  the 
       user might feel more comfortable with. When the user selects  the 
       custom  reports  menu from the main ASSETS  pull-down  menu,  the 
       ASSETS  system  simply  executes an  external  DOS  command.  The 
       command that ASSETS performs is "CUSTMENU". Since the menu system 
       supplied  with this system is CUSTMENU.EXE, this program is  run. 
       The command that ASSETS does is equivalent to doing:
       
       C>CUSTMENU
       
       This means that any program or .BAT file called CUSTMENU could be 
       run  instead. To install another menu system, create a .BAT  file 
       called  CUSTMENU.BAT  which runs your favorite menu  program  and 
       remove the CUSTMENU.EXE program from the directory. Then load all 
       your report programs that you have into your menu. Commands  that 
       you might also place here are programs to backup your data, etc.
       
       
       
       
       
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1227

     Volume in drive A has no label
     Directory of A:\

    README   1ST       837   4-03-89   6:38p
    ASSETS   EXE     95427   2-09-90  11:24p
    ASSETS   DOC     25942   2-07-90   3:08a
    ASSETS   HLP      2011   9-25-89   3:48p
    ASSETS   DAT      1732   5-06-89   5:08p
    ASSETS   X01      1024   5-06-89   5:08p
    ASSETS   X02      1024   5-06-89   5:08p
    ASSETS   X03      1024   5-06-89   5:08p
    ASSETS   X04      1024   5-06-89   5:08p
    ASINDEX  EXE     24348   2-04-90  11:33a
    ASREPORT EXE     25674   2-07-90   3:16a
    PSWAP    EXE      5582   5-15-89  10:18p
    PSWAP    DOC       646   5-16-89   7:28p
    TECHMAN  DOC     17976   2-07-90   3:00a
    LICENSE  DOC      3940   4-03-89   6:42p
    CUSTMENU EXE     25460   2-03-90   4:52a
    CUSTMENU HLP       719   5-03-89   9:51p
    CUSTMENU DOC     26549   2-03-90   5:43a
    CUSTMENU CFG      1505   5-06-89   5:03p
    EXTRACT  EXE     23156   2-04-90  11:54a
    SAMPRPT1 BAS      1795   2-04-90  12:04p
    SAMPRPT1 BAT       106   2-04-90  11:59a
    CONFIG   SYS        31   5-20-89   6:16a
    GO       BAT        17   7-09-90   5:52a
    GO       TXT       852   7-09-90   5:52a
    FILE1227 TXT      3109   7-09-90   5:51p
           26 file(s)     291510 bytes
                           20480 bytes free
