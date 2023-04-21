---
layout: page
title: "PC-SIG Diskette Library (Disk #964)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0964/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0964"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MINI COUPCAT - COUPON CATALOGER"

    MINI COUPCAT is a coupon management program to help catalog and organize
    your grocery coupons.  This database also helps you make easy
    retrievals.  If you have a lot of coupons, you won't need to go through
    all of them to find the right one, MINI COUPCAT does it for you.  For
    instance, on every coupon there's an expiration date and MINI COUPCAT
    shows you the expiration date of any coupons you want.  It helps you
    organize your shopping and save money.  The program stores such
    important information as category of coupon, brand of item the coupon is
    for, value of coupon, and expiration date.  It has on-line help and you
    can access the list of already-defined categories whenever you like.
    
    MINI COUPCAT is a smaller version of the full program COUPCAT, with the
    only difference being the number of records that can be entered (MINI
    COUPCAT can handle only ten coupons per category, while COUPCAT can
    handle 99,999).
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $30.00 + tax for COUPCAT and manual.
    
    File Descriptions:
    
    CATEG    CIF  Data file for MINI COUPCAT.
    COUPNO   CIF  Data file for MINI COUPCAT.
    EDATE    CIF  Data file for MINI COUPCAT.
    MNCAT    CIF  Data file for MINI COUPCAT.
    REPNO    CIF  Data file for MINI COUPCAT.
    SCREEN   CIF  Data file for MINI COUPCAT.
    STRNAM   CIF  Data file for MINI COUPCAT.
    AVAILCHA CDF  Data file for MINI COUPCAT.
    CATFILE  CDF  Data file for MINI COUPCAT.
    COUNTER  CDF  Data file for MINI COUPCAT.
    MAINFILE CDF  Data file for MINI COUPCAT.
    MARKCNT  CDF  Data file for MINI COUPCAT.
    SCRCNT   CDF  Data file for MINI COUPCAT.
    WEEKLY   CDF  Data file for MINI COUPCAT.
    INSTFLOP BAT  Floppy installation batch file.
    MISFILE  DFD  Data file for MINI COUPCAT.
    SYSTDAT  DFD  Data file for MINI COUPCAT.
    MINICOUP EXE  Main program.
    MINICOUP DOC  Documentation file for MINI COUPCAT.
    INSTHARD BAT  Hard disk installation batch file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES964.TXT

{% raw %}
```
Disk No:  964
Program Title:  MINI COUPCAT - Coupon Cataloger
PC-SIG version: 1.1

MINI COUPCAT is a coupon management program to help catalog and organize
your grocery coupons.  This database also helps you make easy
retrievals.  If you have a lot of coupons, you won't need to go through
all of them to find the right one, MINI COUPCAT does it for you.  For
instance, on every coupon there's an expiration date and MINI COUPCAT
shows you the expiration date of any coupons you want.  It helps you
organize your shopping and save money.  The program stores such
important information as category of coupon, brand of item the coupon is
for, value of coupon, and expiration date.  It has on-line help and you
can access the list of already-defined categories whenever you like.

MINI COUPCAT is a smaller version of the full program COUPCAT, with the
only difference being the number of records that can be entered (MINI
COUPCAT can handle only ten coupons per category, while COUPCAT can
handle 99,999).

Usage:  Coupon Management System/Database.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $30.00 + tax for COUPCAT and manual.

File Descriptions:

CATEG    CIF  Data file for MINI COUPCAT.
COUPNO   CIF  Data file for MINI COUPCAT.
EDATE    CIF  Data file for MINI COUPCAT.
MNCAT    CIF  Data file for MINI COUPCAT.
REPNO    CIF  Data file for MINI COUPCAT.
SCREEN   CIF  Data file for MINI COUPCAT.
STRNAM   CIF  Data file for MINI COUPCAT.
AVAILCHA CDF  Data file for MINI COUPCAT.
CATFILE  CDF  Data file for MINI COUPCAT.
COUNTER  CDF  Data file for MINI COUPCAT.
MAINFILE CDF  Data file for MINI COUPCAT.
MARKCNT  CDF  Data file for MINI COUPCAT.
SCRCNT   CDF  Data file for MINI COUPCAT.
WEEKLY   CDF  Data file for MINI COUPCAT.
INSTFLOP BAT  Floppy installation batch file.
MISFILE  DFD  Data file for MINI COUPCAT.
SYSTDAT  DFD  Data file for MINI COUPCAT.
MINICOUP EXE  Main program.
MINICOUP DOC  Documentation file for MINI COUPCAT.
INSTHARD BAT  Hard disk installation batch file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## MINICOUP.DOC

{% raw %}
```


          MINICOUP


          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
                          MINICOUP COUPON MANAGEMENT SYSTEM
                          ---------------------------------                  
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
                       (C) Copyright 1987, PARKER MICROSYSTEMS
                                 ALL RIGHTS RESERVED 
          
          
          
          


                                         1


          MINICOUP


          
          
          
          
          
          
          
          
          
          
                                       NOTICE
                                       ------
          
          MINI COUPCAT is licensed to you subject to the following
          conditions:
          
               (a) You may freely make copies and distribute this program
          provided:
                    (1) The program is not modified in any way.
                    (2) The program is copied in its entirety along with
                        all files.
                    (3) No fee is charged except a copying/distribution
                        fee not to exceed Ten dollars.
          
               (b) The program is supplied as-is and no warranties are
                   made including implied warranties as to merchantibility
                   or fitness for any purpose.
          
               (c) The program and/or its documentation may not be packaged
                   and sold or given away with any other product without   
                   written permission of the copyright holder.
          
          
                         The entire program and the documentation are
                            (c) Copyright 1987 Parker Microsystems
                                     ALL RIGHTS RESERVED
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          


                                         2


          MINICOUP


          
          
          
          
          
          
          MINI COUPCAT is a smaller version of COUPCAT, the only difference
          being the number of records that can be entered. COUPCAT has a on
          -disk tutorial. The maximum number of records for each system is
          given below:
          
                                   MINI COUPCAT            COUPCAT
                                   ------------            -------
          
          Categories                   20                     676
          Coupons per category         10                   99999
          Shopping list items          10                     676
          Store specials               10               Unlimited
          
          To order the full COUPCAT system, which includes a 64 page
          printed user manual, send $ 30 (California residents add
          $ 1.95 for state sales tax) and the following information:
                                         
                               Your Name
                               Your Address
                               Your City, State and Zip Code
                               Serial No of this program    
          
          Send your order to:
                         
                               PARKER MICROSYSTEMS
                               2521 N. GRAND AVE., STE F
                               SANTA ANA, CA 92701
          
          
          
          
          
          
          The following is a list of all the files. Except for Minicoup.doc,
          all the other files must be present for the program to work properly.
          
                  Minicoup.exe     Misfile.dfd    Systdat.dfd    Availcha.cdf
                  Catfile.cdf      Counter.cdf    Mainfile.cdf   Markcnt.cdf
                  Scrcnt.cdf       Weekly.cdf     Categ.cif      Coupno.cif
                  Edate.cif        Mncat.cif      Repno.cif      Screen.cif
                  Strnam.cif       Instflop.bat   Insthard.bat   Minicoup.doc
          
          
          
          
          
          
          
          
          


                                         3


          MINICOUP


          INTRODUCTION
          ------------
          
               MINI  COUPCAT is a coupon management system  for  cataloging
          and  organizing  grocery coupons.  Most people who collect  these
          coupons have hundreds or even thousands of these  coupons.  After
          some time it becomes a big chore keeping these organized for easy
          retrieval.  Most  coupons have an expiry date and looking through
          thousands  of coupons for those that are about to expire or  have
          expired  can be a very tiring process to say the least.  Most  of
          the supermarkets run specials every week.  If an item is on  sale
          in a store and you have a coupon for that item,  then substantial
          savings  can result.  Some stores offer double coupons which  can
          add to the savings.
          
               Using MINI COUPCAT you can create a database of the coupons 
          you have, storing such information as category, brand, value of 
          coupon, expiry date, etc. Store specials can then be entered as 
          well as your shopping list. A report can then be generated
          showing what coupons you have for the store specials that week 
          and your shopping list. You can also use MINI COUPCAT to find out
          what coupons you have that are expiring or have expired.
          
               MINI COUPCAT is a smaller version of COUPCAT. The only 
          difference between the two is the number of records that can be 
          entered. If you find that your needs grow beyond the record 
          capability of MINI COUPCAT, we invite you to send for COUPCAT.
                    
          
          
          INSTALLATION
          ------------
               
               MINI COUPCAT can be run either from one floppy disk, two 
          floppy disks (one disk for the program files and another for the 
          data), or from a hard disk. (You MUST use 360K floppy disks).
          
          
               One Drive 
               --------- 
                    There is no installation required when you run MINI 
          COUPCAT from one drive.
          
          
               Two Drives
               ----------
                    Insert the MINI COUPCAT system disk drive in A:. Insert 
          a new formatted disk in drive B:. 
          
                               Type INSTFLOP B
          
                    Follow the prompts on the screen till installation is 
          completed.
          
          
          


                                         4


          MINICOUP


          
               Hard Drive
               ----------
                    Insert the MINI COUPCAT system disk in drive A:.
             
                               Type INSTHARD C
          
                    If your hard disk has a different drive letter 
          designation instead of C, use that. The installation procedure 
          will make a directory MINICOUP in your root directory and copy
          all files to that directory.
          
          
          
          Starting MINI COUPCAT
          ---------------------
          
               Running MINI COUPCAT from Hard disk or from One drive
               -----------------------------------------------------
                    Simply type MINICOUP to start the program.
          
          
               Running MINI COUPCAT from Two floppy drives
               -------------------------------------------
                    Insert the system disk in drive A:, and insert the data 
                    disk in drive B:. Type MINICOUP to start the program.
          
          
               The first screen that you will see is the title screen. 
          Press the space bar to continue. The next screen has the 
          licensing notice. Press the space bar to continue. The next 
          screen has details of the differences between MINI COUPCAT and
          COUPCAT. Ordering information is also provided for COUPCAT. From 
          this screen you can either go to the COUPCAT Order Entry Screen 
          by pressing the ENTER key, or go to the Main Menu by pressing the
          space bar. If you have a printer connected to your computer, you 
          can print the order form from the order entry screen.
          
          
          The Main Menu
          -------------
               You will now be asked to check the date. The program uses
          the system date to calculate coupons that are expiring, so the date
          is important. If this is the first time the program is running, you
          will now be asked to select the drives on which you are going to
	  to have your data files. This is  a very important step as the
          program will not execute unless it can find them. If you are using
          a two floppy drive setup, you MUST have the data disk in drive B.
          You need set the data drives only the first time you use the 
          program. If you change your drive setup, that is you switch from 
          a floppy disk to a hard disk, or a hard disk to a floppy, or from 
          a one drive system to  a two drive system or the other way round, 
          you must set your drives again.
          
               If your files are not where they are supposed to be as per 
          your drive configuration, you will get a message informing you as 


                                         5


          MINICOUP


          to what files are missing. You cannot run the program unless 
          those files are placed on that drive.
          
               Option A - Define Category
               --------
                    This will bring the screen where you can enter the 
          different categories of coupons, that is soap, candy and so on. 
          Help is available by pressing F1. A list of categories that have
          already been defined is listed by pressing F2. You must first 
          define the category before a coupon can be entered. The maximum 
          number of categories you can define with MINI COUPCAT is 20. The 
          maximum in COUPCAT is 676 categories.
          
               Option B - Enter Coupon Information
               --------
                    This is where the coupon information is entered. First 
          enter the category. If the category has not been defined yet, you 
          can do so at this point. The coupon information can then be 
          entered. Once you have entered valid coupon information, a coupon 
          no appears at the bottom of the screen. This number is assigned 
          by the program and you should write it down on the coupon so that 
          they can be filed in sequence. Each category has a two letter 
          number (AB, FK, etc.,). Help is  available by pressing F1 and a
          list of categories by pressing F2. The maximum  number of coupons 
          per category in MINI COUPCAT is 10, while tha maximum number in
          COUPCAT is 99999 per category.
          
               Option C - Enter Shopping List
               --------
                    This will bring up a list of categories. You can then 
          mark your shopping list by moving the light bar with the arrow 
          keys and pressing the insert key when you want to mark the item. 
          You can mark upto 10 shopping list items in MINI COUPCAT, while
          in COUPCAT you can mark 676 items.
          
          
          
               Option D - Enter Store Specials
               --------
                    Supermarket  specials are entered using this option. 
          The store name is first entered, after which you will be asked 
          whether the store is offering double coupons. Next a listing of 
          items is displayed. Selection is made by moving the light bar and 
          pressing the insert key. This will open a window where details of 
          the store special can be entered. The maximum number of store 
          specials that can be entered in MINI COUPCAT is 10, while in 
          COUPCAT there is no limit (subject to the size of your disk).
          
          
               Option E - Display / Print Reports
               --------
                    This will take you to the reports menu which is 
          discussed later.
          
          
          


                                         6


          MINICOUP


          
               Option F - Modify Database
               --------
                    When you select this option, a window opens up and 
          three options are available.
          
                         (1) Categories. This lets you modify or delete 
          categories.
          
                         (2) Coupon. This lets you delete coupon by coupon 
          no.
          
                         (3) Coupon Info. You can modify coupon information 
          by paging through each record in a category.
          
          
               Option G - Reindex Files
               -------- 
                    Selecting this option rebuilds all the index files.
          This is seldom necessary, unless you feel that for some reason or 
          the other (power surge, bad disk, etc.,) your database has been 
          corrupted. Reindexing will ensure that what you see on the screen 
          is really what is in your database. Of course if data has been 
          erased, reindexing will not bring it back.
          
          
          
               Option H - Select Screen Colors
               --------
                    You can select the screen colors that you like by using 
          this option. You have a choice of sixteen foreground colors and 
          eight background colors. You can select colors for text, text 
          background, entry field text and background, error messages, and 
          boxes. Certain color combinations are invalid. Obviously you 
          cannot see anything if you set color to blue text on a blue 
          background. Use the arrow keys to move the flashing arrow to the 
          color of your choice and press ENTER to select. The box on top of
          the color chart tells you what you are selecting color for. 
          Pressing ESC at any time will cancel all colors selected and
          return you to the main menu.
          
          
               Option I - Set Default Screen Colors
               --------
                    If you get tired of the bright blue text on the red 
          background that you have selected, press "I" to set the screen to
          the colors we have selected.
          
          
               Option J - Set Data Drives
               --------
                    This has been previously explained. You should set 
          drives the first time you run the program. After that you need 
          set the drives again only if you have moved your data files to a 
          different drive.
          


                                         7


          MINICOUP


          
          Reports Menu
          ------------
               The reports menu is divided into two sections - display 
          reports and print reports. As both are identical in function only 
          the display reports section is described here.
          
          
               Option A - Display Categories
               --------
                    This has two suboptions. One lists the categories 
          sorted in alphabetic sequence, while the other lists the
          categories sorted by category nos.
          
          
               Option B - Display Coupons
               --------
                    Again you have two options. List all the coupons in the 
          database, or list only the coupons in the category that you 
          specify.
                  
          
               Option C - Display Expiring Coupons
               --------
                    This will list all coupons that have expired and those 
          that are expiring within the next 30 days. The expired coupons
          are highlighted, so that you can remove those coupons from your 
          system as well as physically remove them from your coupon file.
          
          
               Option D - Display Shopping List
               --------
                    This will list the shopping list that you have marked.
          
          
               Option E - Display Store Specials
               --------
                    This option displays all the store specials that you 
          have entered.
          
          
               Option F - Display Coupon Selections
               --------
                    This is the most important section of the program. It 
          has two selections.
                         
                         (1) The first displays the store specials, if any, 
          and the coupons that available, for each item on your shopping
          list. You can see at once all the coupons that are available for 
          any item that is on sale. 
          
                         (2) The second displays each store special and the 
          coupons, if any, for that item. You can see what coupons you have 
          for the sale items and buy those that are good value even if they 
          are not on your shopping list this week.
          


                                         8


          MINICOUP


          
               The difference between the two options is that the first one 
          takes your shopping list and lists all the store specials and 
          available coupons for that item. The second option gives you all 
          the coupons that you have for all the items that are on sale, so 
          that you can buy now at savings and save the item for use at a 
          later time.
          
          
          
          
                    This has been a very generalized description of the 
          features of the program. The system is described in detail in the 
          64 page printed COUPCAT user manual. COUPCAT also include an on-
          disk tutorial demo which shows step by step using actual screens 
          how the coupon management system effectively and efficiently
          manage a coupon collection
          
                    MINI COUPCAT with its limited record capacity is 
          adequate for some people. If you find that you have outgrown the 
          system, you are invited to send for COUPCAT. 
          
                    Any suggestions for improvement or any problems that 
          you come across while using MINI COUPCAT, is most welcome. Please 
          send all correspondence regarding this program to:
          
          
                                 PARKER MICROSYSTEMS
                              2521 N. GRAND AVE., STE F
                                 SANTA ANA, CA 92701
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          

          
          
          
          
          
          
          

          
          
          
          
          
          
          


                                         9


          MINICOUP


          
                          C O U P C A T  O R D E R  F O R M
                          ---------------------------------
          
          
               
               Name.............................................
          
               Address..........................................
          
               City.............................................
          
               State................. Zip.......................
          
               Serial No (of this program)......................
          
          
          
               Please send me
          
               ----- Copies of COUPCAT at $ 30 (US) each..---------
          
               California residents add $ 1.95 sales tax..---------
          
               Total enclosed.............................---------
          
          
          
               I have enclosed payment by ( ) check ( ) money order.
          
          
               Please send order form with payment to
          
          
                                 PARKER MICROSYSTEMS
                              2521 N. GRAND AVE., STE F
                                 SANTA ANA, CA 92701
          
          
          
          
          
          
          
          
          
          
          











                                         10


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0964

     Volume in drive A has no label
     Directory of A:\

    AVAILCHA CDF        69   8-09-87  10:04p
    CATEG    CIF      2048   8-09-87  10:04p
    CATFILE  CDF       512   8-09-87  10:02p
    COUNTER  CDF        69   8-09-87   1:22p
    COUPNO   CIF      2048   8-09-87  10:04p
    EDATE    CIF      2048   8-09-87  10:04p
    FILES964 TXT      2210   1-25-89   8:55a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-15-87  10:57a
    INSTFLOP BAT       475   8-02-87   5:13p
    INSTHARD BAT       214   8-01-87   9:08p
    MAINFILE CDF       512   8-09-87  10:02p
    MARKCNT  CDF        70   8-09-87  10:03p
    MINICOUP DOC     22282   8-09-87   9:06p
    MINICOUP EXE    234288   8-17-87   8:51p
    MISFILE  DFD       248   7-05-87  12:47a
    MNCAT    CIF      2048   8-09-87  10:04p
    REPNO    CIF      2048   8-09-87  10:04p
    SCRCNT   CDF        69   8-09-87  10:04p
    SCREEN   CIF      2048   8-09-87  10:04p
    STRNAM   CIF      2048   8-09-87  10:04p
    SYSTDAT  DFD       352   8-09-87  10:31p
    WEEKLY   CDF       512   8-09-87  10:03p
           23 file(s)     276950 bytes
                           34816 bytes free
