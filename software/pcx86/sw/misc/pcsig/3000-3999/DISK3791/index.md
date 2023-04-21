---
layout: page
title: "PC-SIG Diskette Library (Disk #3791)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3791/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3791"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```



                                   README.DOC
                                 ICP VERSION 9.5

        ================================================================
        
             Please follow these instructions to install the ICP...
             Type "<source drive>:install" and press the 'Enter' key. For 
        example,  if the program disk is in drive A (source drive),  type 
        "a:install" and hit 'Enter'.
             The  install  program will detect data  files  from  earlier 
        installations and will copy the data into this version.  However, 
        if  your previous installation is version 7.0 or less,  you  will 
        loose data in the description field and in the retail and  whole-
        sale price levels.
             The  files  and buffers must be set to AT LEAST  31  and  29 
        respectively. Please verify these parameters in your "config.sys" 
        file in the root directory of your boot drive.
             The  shareware version of the ICP contains several  document 
        (*.doc)  files that you should read before attempting to run  the 
        program.  Only "readme.doc" (this file) and "vendor.doc" will  be 
        available before the system is installed.
        
             1. Manual.doc is the ICP User's Guide.
             2. Register.doc is the registration form and invoice.
             3. Vendor.doc is included  for software  vendors  which  may 
                Wish to distribute the shareware version of this program.
             4. Readme.doc is this file.
             5. Pics.doc describes the PICS upgrade to the ICP program.
             6. Custom.doc describes our software customizing service.
             7. Sitelice.doc describes the site license.
             8. Barcodes.doc describes the optional bar code module.
        
                                     NOTICE
             You  will  always find the latest version of  this  software 
        posted  in the ASP directory of our support BBS. We update  these 
        files  as often as significant changes occur. You may access  the 
        BBS free of charge by dialing 703-949-4464. Please set your modem 
        protocol to 8,n,1. The BBS supports baud rates up to 96,000.
        
             If  you  find a "bug" or anomaly in  this  software,  please 
        contact  us immediately. We will correct the program and  replace 
        your defective copy FREE OF CHARGE within five (5) working days. 
        
        Spirit7 Software, Ltd.
        PO Box 777
        Waynesboro, VA  22980
        (703) 943-4635 (phone and fax)
        (703) 949-4464 (BBS)
        Compuserve # 73530,3236



```
{% endraw %}

## VENDOR.DOC

{% raw %}
```



                                   VENDOR.DOC
                                 ICP VERSION 9.5

        =================================================================
                
             Vendor  Encouragements and Restrictions
             This  document specifies Spirit7 Software's policy for  disk 
        copying and bulletin board services.
             Thank you for your interest in this product. You are a vital 
        link in our distribution and marketing process.
                
             You are hereby authorized to include the enclosed  Inventory 
        Control   Program  (ICP)  shareware  software  program   in  your  
        Shareware catalog and disk copying service. This is a   nonexclu-
        sive authorization.
             You  may sell disks containing copies of this software  pro-
        vided that you DO NOT imply to your customers that this is "free" 
        software.  It  is desirable if your catalogs make it  clear  that 
        this is Shareware software which the end user must register  with 
        Spirit7 to continue using beyond the evaluation period (60 days). 
        If  you  specify registration fees in your catalog,  DO  NOT  use 
        words   like "donation". "contribution", or other such words.  It 
        is a registration fee or cost of $65.00.
             If you are a disk copying or bulletin board service and  you 
        obtained this software from a source other than Spirit7 Software, 
        Ltd., you may not have the latest version. You are encouraged  to 
        write or call Spirit7 and request the latest version.
             You  may NOT alter or omit any of the files  provided,  How-
        ever, you may add your own  files to this disk as long as none of 
        them imply that this software is "free".
                
                              COMPLETE DESCRIPTION
             The  ICP  system is a very powerful and  complete  inventory 
        management system. It includes modules to sell, order and receive
        inventory.  It  tracks  purchase orders  and  automatically  adds 
        inventory  to the re-order report when the count (on hand)  total 
        falls  below  the minimum acceptable stock level  for  the  item. 
        Inventory  can  be ordered and received  both  automatically  and 
        manually. A flag can be set so that the item will be deleted when 
        the  count reaches zero rather than being added to  the  re-order 
        report for items that will not be re-stocked.
             ICP supports LIFO, FIFO, and weighted average costing  tech-
        niques.
             Serialized  inventory  and  composite  inventory  (inventory 
        items consisting of other inventory items) is supported.
             The numeric keypad is used to make all menu selections  thus 
        requiring  only the fingers of one hand to navigate  the  system.  
        The menu options are presented at the bottom of the screen allow-
        ing  information  to  be constantly  displayed.  The  information 
        window is not obstructed by pop-up or pull-down windows for  menu 
        selections.
             Record "templates" facilitate the rapid and efficient  entry 
        of data and in no other system is the entry of new records easier 
        or more efficient than in the ICP.
             The data base can be segmented by setting a complex  filters 
        including the "and/or" logical operators.
             Records  can be located by searching for specific item  num-
        bers,  descriptions, manufacturers, or vendors or  by  "browsing" 
        the data base or a restricted segment of the data base. 
             Inventory   can   be  re-priced by formula  (any  legitimate 






        mathematical  expression) on any price level. Re-pricing  Reports  
        are available before and after the re-pricing process.
             The package contains a setup program to custom configure ICP 
        and  a  report generator for creating and modifying  reports  and 
        labels.
        
                               CATALOG DESCRIPTION
             ICP  is  a general purpose inventory  control  program  with 
        modules  to sell, order and receive inventory. The system  tracks 
        orders,  backorders,  purchase orders, inventory  balances,  item 
        histories  and vendors. It orders and receives  inventory  either 
        automatically  or  manually. ICP supports  serialized  inventory, 
        composite inventory (inventory items composed of other  inventory 
        items),  multiple locations, and LIFO,FIFO, and weighted  average 
        costing.  It features complex filtering (segmenting) of the  data 
        base  by "and/or" logical operators. This feature makes  possible 
        the  isolation of target records by any field or  combination  of 
        fields.  A  very powerful report generator provides  many  useful 
        reports  and labels. ICP can be upgraded to a complete  point-of-
        sale system (PICS) with no loss of data.
                
                              ONE LINE DESCRIPTION
             Full featured gereral purpose inventory control program with 
        modules to sell, order, and receive inventory.
                
                                  FEATURE LIST
                  * Sell, order and receive inventory .
                  * Supports LIFO, FIFO and weighted average costing.
                  * Tracks serialized inventory.
                  * Multi-level security protection.
                  * Add new records easily using "pattern templates".
                  * Locate records by item,description,manufacturer, ven
                  * Browse a specified range of records.
                  * Set complex "filters" to segment the data base.
                  * Zoom on vendor information for a displayed record.
                  * Enter a memo for each item.
                  * Reprice any segment and/or price level by formula.
                  * Identify fastest and slowest moving items.
                  * Determine optimum stock levels.
                  * Track backorders.
                  * Modify or create reports and labels.
                  * Use independently or as part of the PICS system.
                
                               SYSTEM REQUIREMENTS
                  1. MS DOS 3.3 or greater
                  2. Hard Drive
                  3. 640 K RAM        
                
             Thank  you  very much for offering this  Shareware  software 
        product. If you have ANY questions or comments, please contact:
                
        Spirit7 Software, Ltd.
        PO Box 777
        Waynesboro, Va 22980
        phone and fax (703) 943-4635
        Compuserve # 73530,3236
        Support BBS (703) 949-4464
                
        July, 1992
        






        




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3791

     Volume in drive A has no label
     Directory of A:\

    INSTALL  CFG      6305   8-16-93  11:13a
    README   DOC      2730   8-14-93  12:52p
    VENDOR   DOC      7070   8-14-93  12:53p
    ICP95-2  EXE    253208   8-16-93  10:56a
    INSTALL  EXE     54229   6-01-93   8:00a
    GO       BAT        32   9-20-93  12:44p
    SHOW     EXE      2040   9-12-88  10:48a
            7 file(s)     325614 bytes
                           33792 bytes free
