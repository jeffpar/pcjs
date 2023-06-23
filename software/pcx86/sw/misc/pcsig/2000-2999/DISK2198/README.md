---
layout: page
title: "PC-SIG Diskette Library (Disk #2198)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2198/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2198"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PERSONAL SECRETARY"

    PERSONAL SECRETARY could become the best secretary you've ever had!
    You'll never lose a number again because you'll have a place to store
    your contacts. Keep track of all those customer and personal contacts
    with this easy-to-use database.
    
    Log necessary information about a customer contact in a database that
    is foolproof and user-definable. Hold as many names and addresses as
    you want -- PERSONAL SECRETARY has no size limitation. For each
    customer record there is room to enter a name, address, company name,
    telephone, and a note about the customer. And if that's not enough,
    add your own fields to the record.
    
    Once the records are added, take advantage of the mini word processor
    to write letters and memos up to four pages long. The labeling and
    mail merge capability in PERSONAL SECRETARY can make mass mailings a
    snap. Don't waste any more time exiting your current database and
    entering your word processor because you need to write a letter -- do
    it all from PERSONAL SECRETARY.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2198.TXT

{% raw %}
```
Disk No: 2198                                                           
Disk Title: Personal Secretary                                          
PC-SIG Version: 1                                                       
                                                                        
Program Title: Personal Secretary                                       
Author Version: 2.00                                                    
Author Registration: $25.00                                             
Special Requirements: 640K Ram.                                         
                                                                        
This program could become the best secretary ever had!  You'll never    
lose a number again because you'll have a place to store your           
contacts.  And you'll be able to keep track of all those customer and   
personal contacts with this easy-to-use database.                       
                                                                        
Log necessary information about a customer contact in a database that   
is foolproof and user-definable.  Hold as many names and addresses as   
you want, PERSONAL SECRETARY has no size limitation.  For each          
customer record there is room to enter name, address, company name,     
telephone, and a note about the customer.  And if that's not enough,    
you can add your own fields to the record.                              
                                                                        
Once you've added your records, take advantage of the mini              
wordprocessor to write letters and memos up to four pages long.         
The labeling and mail merge capability in PERSONAL SECRETARY can make   
mass mailings a snap.  Don't waste any more time by exiting your        
current database and then entering your wordprocessor because you need  
to write a letter; do it all from PERSONAL SECRETARY.                   
                                                                        
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
║              <<<<  Disk No 2198 PERSONAL SECRETARY  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type: PS  (press enter)                           ║
║                                                                         ║
║ To print the documentation, type: COPY README PRN (press enter)         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PS.DOC

{% raw %}
```



         Personal Secretary file structure & indexes:


         Database:   PS.DBF
         Index file: PS1.NTX  Key: UPPER(SUBSTR(LNAME,1,10)) (last name)
                     PS2.NTX  Key: UPPER(SUBSTR(NAME,1,10))  (company)
                     PS3.NTX  Key: UPPER(SUBSTR(ZIP)         (zip)
         Memo file:  PS.DBT   Contains: personal notes

         Field Name  Type  Width  Dec   Description
         ----------  ----  -----  ----  ---------------------------------------
         TITLE       Char     5         Title such as Mr., Mrs., Dr., Ms.
         FNAME       Char    15         First name (and middle initial)
         LNAME       Char    15         Last name
         JOB_TITLE   Char    35         Job position (President, VP, Marketing)
         NAME        Char    35         Company name
         ADDR1       Char    35         Line 1 address
         ADDR2       Char    35         Line 2 address
         CITY        Char    20         City name
         STATE       Char     2         State code
         ZIP         Char    10         Zip code
         COUNTRY     Char    15         Country name
         PHONE       Char    13         Home phone
         PHONE1      Char    13         Work phone
         FAX         Char    13         FAX phone
         SELECTED    Char     1         Is this record selected for something
         CONTACTED   Date     8         Date they last contacted us
         REPLIED     Date     8         Date we responded to them
         BIRTHDAY    Date     8         Their birthday
         NOTES       Memo    10         32K note field
         FIELD1      Char    40         User defined field #1 - character
         FIELD2      Char    40         User defined field #2 - character
         FIELD3      Date     8         User defined field #3 - date
         FIELD4      Date     8         User defined field #4 - date
         FIELD5      Nume    11    2    User defined field #5 - numeric


         Database:   PS-DOCS.DBF
         Memo file:  PS-DOCS.DBT  (contains document text and merge fields)

         Field Name  Type  Width  Dec   Description
         ----------  ----  -----  ----  ---------------------------------------
         DOC_TITLE   Char    50         Full descriptive document title
         CREATED   * Date     8         Original creation date
         EDITED    * Date     8         Last date of editing
         LEFT_MAR  * Nume     2         Left margin indent (in columns/chars)
         LINE_LEN  * Nume     3         Full line length (in columns/chars)
         TRIM_FLDS * Logi     1         Shall I trim spaces from fields as merged
         DOC_TEXT    Memo    10         32K document text

         * new field for version 2.0
         



         Personal Secretary file structure & indexes (cont):


         Database:   PS-FLDS.DBF

         Field Name  Type  Width  Dec   Description
         ----------  ----  -----  ----  ---------------------------------------
         PROMPT      Char    14         Merge window prompt for user
         FIELDNAME   Char    12         Related field name in PS.DBF to merge
         ACTIVE      Logi     1         Available for mail-merge?


         Database:   HELPFILE.DBF
         Memo file:  HELPFILE.DBT (contains help screen text)

         Field Name  Type  Width  Dec   Description
         ----------  ----  -----  ----  ---------------------------------------
         HELPID      Char    20         Unique identifying title of help window
         TOP         Nume     2         Top row of help window
         LEFT        Nume     2         Left column of help window
         BOTT        Nume     2         Bottom row of help window
         RIGHT       Nume     2         Right column of help window
         CURSORON    Logi     1         Is the cursor on after window?
         TEXT        Memo    10         Actual help window text
         

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2198

     Volume in drive A has no label
     Directory of A:\

    README            3754   3-06-90  11:58a
    HELPFILE DBF      1778   4-08-90  12:28p
    PS       DBF      1206   4-08-90   7:15a
    PS-DOCS  DBF       424   4-08-90   7:15a
    PS-FLDS  DBF       858   2-22-90  11:54p
    HELPFILE DBT     52224   4-08-90  12:28p
    PS       DBT      1697   4-08-90   7:15a
    PS-DOCS  DBT      1621   4-08-90   7:15a
    PS       DOC      3993   2-23-90   9:30a
    PS       EXE    236080   4-08-90   7:13a
    PS1      LBL      1034   2-23-90   6:25p
    PS2      LBL      1034   2-23-90   6:24p
    PS3      LBL      1034   2-23-90   6:20p
    PS4      LBL      1034   2-23-90   6:20p
    PS       MEM      5757   5-18-90   8:56p
    PS1      NTX      2048   4-08-90   7:15a
    PS2      NTX      2048   4-08-90   7:15a
    PS3      NTX      2048   4-08-90   7:15a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540   5-01-90  12:36p
    FILE2198 TXT      2443   5-18-90  12:35p
           21 file(s)     322693 bytes
                           29696 bytes free
