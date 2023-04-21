---
layout: page
title: "PC-SIG Diskette Library (Disk #2149)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2149/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2149"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CRAFTY LI'L HELPER"

    Here's a home business system that lets you concentrate on your
    craft, not your paperwork.  Its menu system guides you painlessly
    through tracking costs, supplies, customers, and products counted.
    
    The lure of running a business, making some extra money, or helping
    with a charity, has overcome all of us at one time or another.  So what
    went wrong?  We didn't have CRAFTY LI'L HELPER doing all the hard work!
    This is a very crafty helper, and the only thing that's
    "little" about it is its registration fee.  Among its features is an
    easy-to-use menu system that guides you painlessly through inventory
    and invoicing, sales tax, and UPS shipping rates.
    
    CRAFTY LI'L HELPER keeps track of your inventory size and cost; tracks
    your retail, wholesale and consignment customers; and follows all
    outstanding orders and billing.  Although it can run on just one
    floppy drive, its record number is limited only by your disk storage
    size.  With CRAFTY LI'L HELPER, all of the really difficult parts of
    running your own small business have been taken care of, and you're
    left with all the fun!
    
    CRAFTY LI'L HELPER is a big help for small businesses with items to
    sell.  It carefully shows where money is spent and how much has been
    made.  Plus, it is very easy to use, with clear instructions on moving
    around in the program and encouraging words when you make a sale!
    Especially if you are going into a craft business, take along CRAFTY
    LI'L HELPER.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRAFTY.TXT

{% raw %}
```












                    H I ! . . . . . . . 

                    I ' M   Y O U R . .


        "  C  R  A  F  T  Y     L  I ' L      H  E  L  P  E  R "



          A SHAREWARE PRODUCT WRITTEN IN DBASE III+. . .

          (c) 1989, 1990  HERBERT I FULLER

                          333 ROCKWOOD AVE
                          DAYTON, OH 45405
                          (513) ASK-HERB













                       CRAFTY LI'L HELPER

                       TABLE OF CONTENTS


                    A. INTRODUCTION
                    
                       1. PROGRAM DESCRIPTION
                       2. DISTRIBUTION DISK CONTENTS
                       3. FEATURE LIST
                       4. HARDWARE REQUIREMENTS
     
                    B. DATABASE DESCRIPTION

                       1. CUSTOMER FILE
                       2. INVOICE FILE
                       3. INVOICE DETAIL FILE
                       4. INVENTORY FILE
                       5. CONSIGNMENT FILE
                       6. UPS CHARGES FILE   
                       7. CONTROL FILE
                         
                    C. MISCELLANEOUS INFORMATION

                    D. TO START CRAFTY LI'L HELPER:

                        - type CRAFTY and hit ENTER !     A. INTRODUCTION

     WELCOME TO THE WORLD OF COTTAGE INDUSTRY SOFTWARE!! 
 
     CRAFTY LI'L HELPER was developed for the entrepreneur like you!! 
     The functionality you will find in your CRAFTY LI'L HELPER, will  
     complement your day to day operation and give you a chance to     
     breath.  This software is uncomplicated and easy to use and will  
     increase your productivity because it allows you to concentrate on
     building and marketing your products; not losing valuable time    
     doing record keeping activities by hand. 

     CRAFTY LI'L HELPER was developed in conjunction with an          
     entrepreneur in the specific Cottage Industry of 'Country
     Woodworking'.  You will find the data necessary to run your
     'cottage industry' available in this package.  

     CRAFTY LI'L HELPER does not provide all the features and function
     of the many software packages on the market today, most of which  
     provide too many 'bells and whistles' which tend to bog down the  
     user.  However, I will be more than happy to entertain custom     
     modifications for your operation.  

     CRAFTY LI'L HELPER is Shareware, therefore, if you use it in your
     business please register your copy with me for $30.00.  A single
     registration will allow you to use CRAFTY on one PC only.  If you 
     use CRAFTY on more than one PC, please purchase multiple
     registrations.  Your registration will allow you to receive
     periodic upgrades.  

     Thank you!     1.  PROGRAM DESCRIPTION

     Invoice accounting program which keeps track of Customers (retail,
     wholesale, consignment), Inventory, and Invoices.  A menu-driven  
     user interface which allows functions to Add, Delete, Change, and 
     Display your records and to produce printed Reports.  Easy to use:
     after you have entered your Customers and your Inventory, you are 
     ready to record your sales which in turn will produce Packing     
     Slips to send with the orders and Invoices for billing the        
     purchase.  If you have your product on Consignment, this program  
     will keep track of which product has been sold or returned, and   
     which items are still for sale.  A Crafty Control record keeps    
     data about your business, various UPS calculation parameters, and 
     other system information.  A varied set of printed reports allows 
     for hard-copy review of your data.  Keeps track of the number of  
     invoices not yet filled, and the inventory required to fill these 
     orders.  UPS charges are calculated automatically for up to six   
     boxes per invoice.  State tax is automatically calculated for     
     retail invoices.

     2. DISTRIBUTION DISK CONTENTS

        conscusn.ntx - consignment file index by customer number
        conscust.frm - format file for consignment report
        consign.dbf  - consignment file
        consign.ntx  - consignment file index by inventory item
        consitem.frm - format file for consignment report
        consnum.ntx  - consignment file index by consignment
                       prefix + consignment number
        consponu.ntx - consignment file index by invoice number
        control.dbf  - Crafty control file
        crafty.exe   - Crafty Li'L Helper
        crafty.txt   - Crafty Li'L Helper information 
        custlabl.lbl - 1-up name and address labels
        custname.ntx - customer file index by customer name
        custnum.ntx  - customer file index by customer number
        customer.dbf - customer file
        detail.dbf   - invoice detail file
        invitem.ntx  - inventory file index by inventory item number
        invntory.dbf - inventory file
        invntory.frm - format file for inventory report   
        invoice.dbf  - invoice file
        invoice.frm  - format file for invoice report
        invslim.frm  - format file for modified invoice report
        pocstnum.ntx - invoice file index by customer number
        podetnum.ntx - invoice detail file index by invoice number
        ponumber.ntx - invoice file index by invoice number
        prtpo.mem    - memory variable file
        upschgs.dbf  - UPS charges file
        upscode.ntx  - UPS charges file index by code        3. FEATURE LIST

           a. AUTOMATIC ASSIGNMENT OF INVOICE NUMBER
           b. AUTOMATIC CALCULATION OF UNITED PARCEL SERVICE FEES
           c. HANDLES RETAIL, WHOLESALE, AND CONSIGNMENT         
              CUSTOMERS
           d. REPORTS CURRENT INVENTORY FOR A CONSIGNMENT        
              CUSTOMER
           e. UPDATE CONSIGNMENT RECORD WITH PAID OR RETURNED    
              DATE
           f. 2-UP CUSTOMER LIST FROM CUSTOMER FILE
           g. PREPARES PACKING SLIPS AND INVOICES
           h. CHANGEABLE CUSTOMER MESSAGE ON INVOICE
           i. STATE TAX CALCULATED ON RETAIL INVOICES
           j. CONSIGNMENT ITEM LIST FOR CONSIGNOR'S RECORDS
           k. NUMBER OF RECORDS ONLY LIMITED BY DISK STORAGE
           l. FOUR NAME AND ADDRESS LINES PER CUSTOMER
           m. PREPARES 1-UP CUSTOMER NAME AND ADDRESS LABELS
  
     4. HARDWARE REQUIREMENTS

           1. ANY IBM COMPATIBLE PERSONAL COMPUTER (PC,XT,or AT)
           2. DOS 2.0 OR GREATER OPERATING SYSTEM 
           2. MINIMUM 384K OF MEMORY
           3. MINIMUM 1 FLOPPY DISK  see --NOTE--
           4. PRINTER
           5. MONOCHROME or COLOR MONITOR
           6. KEYBOARD

          --NOTE--
          DO NOT EXCEED THE FILE CAPACITY FOR EITHER YOUR FLOPPY DISK  
          OR YOUR HARD DISK.  THIS PROGRAM DOES NOT CONTAIN ERROR LOGIC
          IF YOU RUN OUT OF DISK SPACE WHILE ADDING A RECORD TO A FILE.     B. DATABASE DESCRIPTION

        CRAFTY LI'L HELPER is comprised of files linked together to
        provide a true database for your information.

        Each file will have multiple records, and each record contains
        multiple fields.  The following information will help you to   
        understand what data is to be recorded in each of these files. 

        1. CUSTOMER FILE

           File Name: CUSTMER.DBF

           Relationship: Related to INVOICE FILE on field CUSTNUM

           Field  Field Name  Type       Width    Dec

               1  CUSTNUM     Numeric        3
               2  TYPE        Character      1
               3  BUYER       Character     15
               4  NAME        Character     30
               5  ADDRESS1    Character     30
               6  ADDRESS2    Character     30
               7  CITY        Character     15
               8  STATE       Character      2
               9  ZIP         Character     10
              10  ZONE        Character      1
              11  PHONE       Character     13
              12  DATEFRSTPO  Date           8
              13  ORDERNUM    Character      3
              14  CONS_MATH   Character      1
              15  CONS_PRICE  Numeric        3     1  
              16  CONSIGNPRE  Character      3
              17  CONSIGNNUM  Character      4        2. INVOICE FILE

           File Name: INVOICE.DBF

           Relationship: Related to INVOICE DETAIL FILE on field NUMBER

 
           Field  Field Name  Type       Width    Dec

               1  NUMBER      Numeric        6
               2  CUSTNUM     Numeric        3
               3  SALESMAN    Character      3
               4  BUYER       Character     10
               5  BUYERSPO    Character      6
               6  DATERECVD   Date           8
               7  DATEENTER   Date           8
               8  DATETOSHIP  Date           8
               9  DATESHIPD   Date           8     
              10  DATEPAID    Date           8
              11  TERMS       Character      8
              12  UPS         Logical        1
              13  UPSBOXES    Numeric        1
              14  WEIGHTBOX1  Numeric        2
              15  WEIGHTBOX2  Numeric        2
              16  WEIGHTBOX3  Numeric        2
              17  WEIGHTBOX4  Numeric        2
              18  WEIGHTBOX5  Numeric        2
              19  WEIGHTBOX6  Numeric        2
              20  NETPO       Numeric        9      2
              21  UPSCHG      Numeric        6      2
              22  STTAX       Numeric        7      2        3. INVOICE DETAIL FILE

           File Name: DETAIL.DBF

           Relationship: Related to INVENTORY FILE on field ITEM 

           Field  Field Name  Type       Width    Dec

               1  NUMBER      Numeric        6
               2  ITEM        Character      6
               3  QUANTITY    Numeric        2
   

        4. INVENTORY FILE

           File Name: INVNTRY.DBF
     
           Field  Field Name  Type       Width    Dec

               1  ITEM        Character      6
               2  WIPCOUNT    Numeric        3
               3  DESC        Character     50
               4  ONHAND      Numeric        4
               5  LASTUPDATE  Date           8
               6  MANUFCOST   Numeric        7      2
               7  WHOLESALE   Numeric        7      2
               8  RETAIL      Numeric        7      2


        5. CONSIGNMENT FILE

           File Name: CONSIGN.DBF

           Field  Field Name  Type       Width    Dec

               1  CUSTNUM     Numeric        3
               2  NUMBER      Numeric        6
               3  ITEM        Character      6
               4  CONSIGNPRE  Character      3
               5  CONSIGNNUM  Character      4
               6  DATEPAID    Date           8
               7  DATERETURN  Date           8
 
        6. UPS CHARGES FILE

        7. CONTROL FILE (CRAFTY BUSINESS FILE)     C. MISCELLANEOUS INFORMATION

        1. EACH SUB MENU UNDER THE MAIN MENU CONTAINS A FUNCTION TO: 

           - ADD RECORDS
           - CHANGE RECORDS
           - DELETE RECORDS
           - DISPLAY RECORDS

           WITHIN A PARTICULAR DATABASE FILE.

        2. A UNIQUE 'LETTER' WILL TAKE YOU TO THE NEXT SUB MENU, AND   
           'E' WILL RETURN YOU TO THE PREVIOUS MENU.  'E' ON THE MAIN  
           MENU WILL TAKE YOU BACK TO THE DOS PROMPT.        

        3. FUNCTION KEY 8 (F8) IS USED AT TIMES TO LIST EITHER CUSTOMER
           OR INVENTORY RECORDS FOR YOU, SO THAT YOU MAY MAKE A        
           SPECIFIC RECORD CHOICE FOR THE OPERATION BEING PERFORMED.

        4. FUNCTION KEY 10 (F10) IS USED TO RETURN TO THE MENU FROM AN
           INPUT FIELD SUCH AS CUSTOMER NUMBER OR INVOICE NUMBER YOU   
           MAY BE ASKED TO ENTER.

        5. THE CONTROL RECORD IS YOUR 'CRAFTY BUSINESS RECORD' WHICH   
           WILL CONTAIN INFORMATION ABOUT YOUR BUSINESS, UPS CHARGE    
           CALCULATION PARAMETERS, AND SYSTEM QUESTIONS.

        6. THE PRINTER MUST BE POWERED UP AND IN THE READY STATE TO    
           PRINT A REPORT.

        7. IF YOU HAVE AN EPSON PRINTER, YOU WILL ANSWER THE QUESTION  
           IN THE CONTROL RECORD, WITH A 'Y'.  THIS WILL ALLOW SPECIAL 
           PRINTER CONTROL CHARACTERS TO GO TO THE PRINTER.  IF YOU    
           EXPERIENCE ANY PRINTER PROBLEMS, SET THIS FIELD TO 'N'.

        8. IF YOU HAVE A COLOR MONITOR, YOU WILL ANSWER THE QUESTION IN
           THE CONTROL RECORD, WITH A 'Y'.  THE NEXT TIME YOU BEGIN    
           'CRAFTY', COLOR WILL APPEAR.

        9. 'CRAFTY' MAY BE RUN FROM A FLOPPY DRIVE, HOWEVER, YOU WILL  
           OBTAIN INCREASED PERFORMANCE IF YOU COPY THIS SOFTWARE TO A 
           SUBDIRECTORY ON YOUR HARD DISK.

       10. CUSTOMER NUMBERS ARE ASSIGNED TO NEW CUSTOMERS BASED ON THE
           NUMBER SET IN YOUR CONTROL FILE.  WARNING...NUMBERS MUST NOT
           OVERLAP AND ONCE YOU HAVE DETERMINED YOUR CUSTOMER NUMBER   
           RANGES, DO NOT CHANGE THE NUMBERS IN THE CONTROL FILE.  EACH
           CUSTOMER TYPE (RETAIL, WHOLESALE, CONSIGNMENT) USES IT'S OWN
           SET OF NUMBERS.
    C. MISCELLANEOUS INFORMATION (continued)

       11. THE CUSTOMER NUMBERS ASSOCIATED WITH DELETED CUSTOMER       
           RECORDS CAN NOT BE RE-USED, AS NEW CUSTOMER NUMBERS ARE
           AUTOMATICALLY ASSIGNED BASED UPON THE NEXT AVAILABLE
           NUMBER IN THE CRAFTY CONTROL RECORD.        

       12. INVOICE NUMBERS ARE AUTOMATICALLY ASSIGNED, AND ARE A      
           COMBINATION OF THE 3-DIGIT CUSTOMER NUMBER FOLLOWED BY A   
           3-DIGIT INVOICE NUMBER TAKEN FROM A FIELD IN THE CUSTOMERS  
           RECORD.  THE INVOICE NUMBER IS UPDATED EACH TIME A NEW      
           INVOICE IS CREATED.

       13. UPS CALCULATION: THE WEIGHT OF UP TO SIX BOXES MAY BE       
           ENTERED FOR AUTOMATIC UPS CHARGE CALCULATION.

       14. INVENTORY: THE QUANTITY ONHAND OF A PARTICULAR INVENTORY
           ITEM IS DECREASED BY THE QUANTITY ENTERED WHEN A NEW INVOICE
           IS CREATED.

       15. CONSIGNMENT ACCOUNTING: 

           - ALONG WITH THE PACKING SLIP FOR A CONSIGNMENT CUSTOMER IS
             PRINTED A LIST OF THE CONSIGNMENT ITEMS. THIS REPORT MAY  
             BE USED BY THE CONSIGNOR TO INDICATE THOSE ITEMS SOLD AND 
             RETURNED, AND GIVEN BACK TO YOU WITH YOUR CHECK.
     
           - CONSIGNMENT RECORDS ARE DYNAMICALLY ADDED TO THE
             CONSIGNMENT FILE FROM THE NEW INVOICE ROUTINE AFTER AN    
             INVENTORY ITEM IS CHOSEN.  THE NUMBER OF RECORDS ADDED IS 
             EQUAL TO THE QUANTITY YOU WISH TO GIVE TO THE CONSIGNOR.  
             EACH INVENTORY ITEM ON THE INVOICE FOR WHICH CONSIGNMENT  
             RECORDS WERE ADDED TO THE CONSIGNMENT FILE WILL BE GIVEN A
             'CONSIGNMENT NUMBER'.  THIS CONSIGNMENT NUMBER IS CREATED 
             FROM TWO FIELDS IN THE CUSTOMER RECORD, AND IS A          
             COMBINATION OF A 3-DIGIT PREFIX AND A SEQUENTIAL          
             CONSIGNMENT NUMBER.

       16. THE 'ORDERS OUTSTANDING' REPORT CAN BE USED TO KEEP TRACK OF
           THE INVOICES YOUR ARE CURRENTLY WORKING TO FILL, AND        
           PARTICULARLY, THE QUANTITIES OF EACH INVENTORY ITEM REQUIRED
           TO FILL THE INVOICES-IN-PROCESS.           

       17. STATE TAX IS ONLY CALCULATED IF THE INVOICE IS A 'RETAIL'
           CUSTOMER.  STATE TAX IS CALCULATED BASED UPON THE 'STATE OF
           TAX' FIELD IN THE CONTROL RECORD.  IF THE CUSTOMER'S STATE
           EQUALS THE CONTROL RECORD STATE, TAX IS CALCULATED.


 
              " HAVE FUN USING YOUR NEW FOUND . . . 

                CRAFTY LI'L HELPER !!!"


     





















```
{% endraw %}

## FILE2149.TXT

{% raw %}
```
Disk No: 2149                                                           
Disk Title: Crafty Li'l Helper                                          
PC-SIG Version: S1.03                                                   
                                                                        
Program Title: CRAFTY LI'L HELPER                                       
Author Version: 1.02.                                                   
Author Registration: $30.00                                             
Special Requirements: 384K RAM                                          
                                                                        
Here's a home business system that lets you concentrate on your         
craft, not your paperwork.  Its menu system guides you painlessly       
through tracking costs, supplies, customers, and products counted.      
                                                                        
The lure of running a business, making some extra money, or helping     
with a charity, has overcome all of us at one time or another.  So      
what went wrong?  We didn't have CRAFTY LI'L HELPER doing all the hard  
work!  This is a very crafty helper, and the only thing that's          
"little" about it is its registration fee.  Among its features is an    
easy-to-use menu system that guides you painlessly through inventory    
and invoicing, sales tax, and UPS shipping rates.                       
                                                                        
CRAFTY LI'L HELPER keeps track of your inventory size and cost; tracks  
your retail, wholesale and consignment customers; and follows all       
outstanding orders and billing.  Although it can run on just one        
floppy drive, its record number is limited only by your disk storage    
size.  With CRAFTY LI'L HELPER, all of the really difficult parts of    
running your own small business have been taken care of, and you're     
left with all the fun!                                                  
                                                                        
CRAFTY LI'L HELPER is a big help for small businesses with items to     
sell.  It carefully shows where money is spent and how much has been    
made.  Plus, it is very easy to use, with clear instructions on moving  
around in the program and encouraging words when you make a sale!       
Especially if you are going into a craft business, take along CRAFTY    
LI'L HELPER.                                                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2149

     Volume in drive A has no label
     Directory of A:\

    CONSCUCN NTX      2048   7-18-90   6:10p
    CONSCUST FRM      1990   5-23-89  10:02p
    CONSIGN  DBF       258   7-18-90   6:10p
    CONSIGN  NTX      2048   7-18-90   6:10p
    CONSITEM FRM      1990   5-23-89   9:59p
    CONSNUM  NTX      2048   7-18-90   6:10p
    CONSPONU NTX      2048   7-18-90   6:10p
    CONTROL  DBF      1172   7-18-90   6:07p
    CRAFTY   EXE    263769   7-11-90  11:34p
    CRAFTY   TXT     16140   7-18-90   5:31p
    CUSTLABL LBL      1034   6-04-90  10:04p
    CUSTNAME NTX      2048   7-18-90   6:13p
    CUSTNUM  NTX      2048   7-18-90   6:13p
    CUSTOMER DBF       578   7-18-90   6:13p
    DETAIL   DBF       130   7-18-90   6:12p
    INVITEM  NTX      2048   7-18-90   6:08p
    INVNTORY DBF       290   7-18-90   6:08p
    INVNTORY FRM      1990   6-03-90   8:52p
    INVOICE  DBF       770   7-18-90   6:12p
    INVOICE  FRM      1990   6-03-90   8:48p
    INVSLIM  FRM      1990   6-03-90   8:45p
    POCSTNUM NTX      2048   7-18-90   6:12p
    PODETNUM NTX      2048   7-18-90   6:12p
    PONUMBER NTX      2048   7-18-90   6:12p
    PRTPO    MEM       794   1-01-80   1:14a
    UPSCHGS  DBF      2960   5-24-90   1:09p
    UPSCODE  NTX      7168   5-24-90   1:22p
    SIGSUIF3 TXT      3767   9-10-90   7:19a
    FILE2149 TXT      3035   9-20-90   9:45a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       771   1-01-80   1:48a
           31 file(s)     333106 bytes
                           21504 bytes free
