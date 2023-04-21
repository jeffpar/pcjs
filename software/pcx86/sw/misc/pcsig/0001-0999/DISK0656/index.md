---
layout: page
title: "PC-SIG Diskette Library (Disk #656)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0656/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0656"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "REAL ESTATE SYSTEM"

    RES is an asset for any professional real estate office.  It helps you
    maintain and organize information on properties for sale, as well as
    information on the agents in the company.
    
    Keep detailed records of sales and search for pending/closed sales at
    any time.  Keep agents's records of current/previous year
    commissions, add an agent, or search records of an agent.  Generate
    valuable reports on office/agent commissions, projected income,
    pending/closed sales, and unsold property listings.  An added feature is
    year-end processing which purges all closed sales from the system.
    
    Spend your time and energy on selling real estate and leave the tiresome
    bookkeeping to RES.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES656.TXT

{% raw %}
```
Disk No:  656
Program Title: REAL ESTATE SYSTEMS (RES) version 1.1
PC-SIG version: 1.2

RES is an asset for any real estate office to store/retrieve information
on properties for sale.  RES keeps detailed records of sale and you can
search for pending/closed sales at any time.  It keeps agents' records
current/previous year commissions, and lets you add an agent or search
records of an agent.  It generates valuable reports: office/agent
commissions report, projected income report, pending/closed sales
report, and unsold property listing report.  RES also has the added
special feature of year-end processing which purges all closed sales
from the system.  It is menu-driven with an easy-to-understand manual
which can be printed.

Usage:  Real Estate/Database

Special Requirements:  None.

How to Start: Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

AGENT    DBF  File on agents-add/search.
AGNTNAME NTX  Keeps agents record-current/previous years.
RES      DOC  77 pg. documentation file.
RES      EXE  Main Program.
SALE     DBF  Record of sale-search for pending/closed sale.
SELLER   NTX  Record of details of sale just made.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## RES.DOC

{% raw %}
```









              REAL ESTATE SYSTEM (Version 1.1)
              --------------------------------
 


                        USER MANUAL




                        MicroServices
                         P.O. Box 40
                    Brooksville, ME  04617
                       (207) 326-4847






                       Copyright  1984

                     ALL RIGHTS RESERVED























             










                          PREFACE
                          -------



   First of all,  thank you for considering our products.  We are 
committed to providing our customers with prompt answers to their 
questions and advice about the use of our products.  We encourage 
you to call us.


   It  has  been our experience that people learn how to use  new 
software products in many different ways.   Factors such as prior 
computer experience, time constraints, availability of help, ease 
of product,  etc.  will probably effect how you will learn to use 
the Real Estate System.   Keeping in mind these  differences,  we 
have developed this manual, as well as the entire system, so that 
you may choose from several different learning approaches.


   For  example,  if you have the time,  you might choose to read 
the  entire manual and then try the hands-on  demonstration.   Or 
you might feel that the hands-on demonstration is not  worthwhile 
and immediately begin to use the system.


   Another  approach would be to scan Sections A through D,  read 
the first subsection of Section E and then either read through or 
try the hands-on demonstration.  Since the functions described in 
Section E work virtually the same, you need only be familiar with 
one to understand the remainder.  This approach is the fastest.


  Whatever approach you follow, we would recommend the following:



-  Don't skip Section D (HOW TO GET STARTED)


-  While reading Section E (HOW EACH REAL ESTATE SYSTEM  FUNCTION 
   WORKS),  use  Appendices  D  (SAMPLE REPORTS)  and  E  (SAMPLE 
   SCREENS) to help you visualize what is going on.


-  Call us for answers to your questions.









                               i 










                      TABLE OF CONTENTS


                                                       Page

SECTION A.  WHAT IS THE REAL ESTATE SYSTEM ?            1

SECTION B.  DEFINITION OF TERMS                         2-3

SECTION C.  GENERAL OPERATING INSTRUCTIONS              4-5

SECTION D.  HOW TO GET STARTED                          6  

SECTION E.  HOW EACH REAL ESTATE SYSTEM FUNCTION WORKS
 
        1.  Property Listings                           7-12

        2.  Record of Sale                             13-16

        3.  Agent File                                 17-21

        4.  Reports                                    22-25

        5.  Year-End Processing                        26



APPENDIX

    A.  Hands-On Demonstration                         27-33

    B.  Making a Periodic Backup of Your Master Files  34-35

    C.  Definition of Screen Fields                    36-42

    D.  Sample Reports                                 43-48

    E.  Sample Screens                                 49-77

    F.  RES User Group                                 78

    G.  RES User Group Registration Form               79













                               ii










       SECTION A.  WHAT IS THE REAL ESTATE SYSTEM ?



First off, let's refer to the Real Estate System as 'RES'.  

Now,  just  what  is  RES?   RES is a  computer  software  system 
developed to assist the "typical" real estate office to store and
retrieve  information  about  properties for  sale,  pending  and 
closed  sales  as well as details about your agents. In addition, 
RES can automatically match your client needs with available pro-
perties and provide  a selection  of reports  that you  will find 
helpful.  


BUT I'M NOT A TYPICAL REAL ESTATE OFFICE !   
 

That's right, no one seems to be and that's the problem with most 
computer  software  systems.   For example,  if you are  using  a 
Multiple Listing Service, you might find it a bother to enter all 
the  details of a property listing in RES.   Does that  mean  RES 
isn't for you ?   Quite the contrary.   RES has been developed so 
that  you can choose NOT to use all of its functions...only those 
that make sense for you.

Other  problems often encountered with software systems developed  
for the "typical" real estate office are that they may not  store 
information in a manner that you like or provide reports that you 
need.  In order to overcome such problems, MicroServices not only 
provides the tools needed  by programmers to modify  RES but also
offers a low-cost service to customize RES to your exact needs.


AM I TOO BIG (OR SMALL) TO USE RES ?


Neither.   The  amount of information you plan to enter into  RES 
will effect how much storage capacity you'll need.  If you have a 
question about your specific needs, please contact us.


WHAT TYPE OF COMPUTER EQUIPMENT DO I NEED TO RUN RES ?


We recommend an IBM PC,  XT or compatible with a hard disk and at 
least 256K of RAM, plus an 80 column printer. If you have another 
brand of computer, or a floppy disk system, please call and we'll 
discuss how you'll still be able to use RES.






                               1










             SECTION B.  DEFINITION OF TERMS



Some  terms  will be introduced in this manual that  may  not  be 
familiar to you.  A brief explanation of each is provided below:



BACKSPACE  KEY  - The BACKSPACE key is used to  make your  screen 
cursor  skip  backward on the screen.  It is located on  the  top 
righthand side of your keyboard.   It looks like a straight arrow 
pointing to the left (not to be confused with the slightly larger 
ENTER key just below).


CURSOR  - The  cursor generally appears as a  blinking  underline 
character on your screen where you are to  begin entering data or 
a  command.   On some computer systems,  the cursor appears as  a 
rectangle the size of an uppercase letter.


DATA INPUT -  Data is information.  Data input refers to entering 
information into a computerized file by using your keyboard.


ENTER KEY - The  ENTER  key is pressed when you want the computer 
to  acknowledge  your command or data input.   The ENTER  key  is 
also known as the RETURN key.  It's located on the righthand side 
of your keyboard.  It looks like a straight arrow pointing to the 
left, bent upward at one end (not to be confused with the slight-
ly smaller BACKSPACE key just above).


FIELD - A field is a single piece of information about a specific 
topic.   For  example,  address is a single piece of  information 
about a property for sale.   Therefore,  we will refer to address 
as a field of a property listing.  Other fields would be seller's 
name, sale price, etc.


FILE  - A file is a collection of records about a specific topic.  
For  example,  all  your property listings can be  collected  and 
stored in a file cabinet as well as a computer file.


FUNCTION  - A  function can be thought of as a task you  need  to 
perform.   RES  currently supports 6 functions to help  you  with 
your  day-to-day tasks.  Please refer to Section E  for  complete 
details.





                               2










HARDCOPY - Hardcopy is a printed report of a screen. For example, 
while  looking at a property listing on your computer monitor you 
may  request  a  hardcopy of the listing to be  printed  on  your 
printer.


MENU - A screen that lists functions that are available to you.


RECORD  - A  record  is a collection of fields that  refer  to  a 
specific topic.  For example, address, seller's name, sale price, 
etc. combine to form a record about a specific property listing.


SCREEN  - A  screen refers to the video display you see  on  your 
computer monitor.







































                               3










        SECTION C.  GENERAL OPERATING INSTRUCTIONS  



Whenever we attempt to use something new, it's a good practice to 
know how that something works.  When you purchased your  computer  
you  hopefully  received instructions as to how it  worked.  With 
each   new  piece  of  equipment  and  software  product   you've 
purchased, you also received operating instructions.  


Likewise,  RES  has a specific set of operating instructions that 
you  should  become  familiar with.   No,  there's  not  alot  to 
remember.   In  fact,  as  you  use RES you'll find most  of  the 
following instructions are obvious and comfortable for you.



OPERATING INSTRUCTIONS TO REMEMBER


RES  is  a menu-based system.   That means when you start  RES  a   
MASTER MENU SCREEN will be displayed on your monitor.   The  menu 
lists all the functions available to you.  By entering the number 
corresponding  to a function,  RES will display another screen to 
carry out that function.


In turn,  many of these subsequent screens will ask you to choose 
WHAT  you  want to do.   The  choices will always  appear at  the 
bottom of your screen. They are activated by typing the letter in 
parentheses that corresponds to what you want to do.   Note  that 
the letter can be in upper or lower case, it doesn't matter.


When  entering the number or letter that corresponds to what  you 
want  to do,  RES will immediately respond to your  request...you 
are not required to press the ENTER key before RES responds.  


The  above convention contrasts with how you move from one  field 
to another on a RES screen. When you are adding or changing field 
information,  you  must  press the ENTER  key to 'skip' from  one 
field to the next.   The only exception is when you totally  fill 
the field with information, in which case, RES will automatically 
move you to the next field.   


Certain  fields  will  only accept numbers as  data  input.   For 
example,  all RES dates are expressed as MM/DD/YY.   Therefore, a 
valid  date  would be 01/31/84 for  January  31,  1984.   If  you 
attempt  to enter any other character,  RES will refuse to accept 
your entry.


                               4










Certain  fields  are designed to accept  money  values.   Several 
rules apply:  

-  Do not enter dollar signs ($) or commas...RES won't accept
   them.   

-  If you need to enter an amount with cents, you must enter the
   decimal  point...RES will accept decimal points.


If RES ever displays asterisks in a money field (or a message  at 
the bottom of the screen that reads NUMERIC FIELD OVERFLOW), that 
means  you've  entered  an  amount that is larger  than  RES  can 
accept.   This  will happen if you ignore the decimal  point  and 
continue  to enter a money value.   For example,  the LIST  PRICE 
field  on the PROPERTY LISTINGS SCREEN is capable of accepting  a 
number  as large as 9999999.99.   If you were to enter  a  number 
like 9999999999 (without a decimal point) you will either receive 
an error message or asterisks in the field.


Help screens are available at critical points within  RES.   They 
appear  as  choices on the MASTER MENU SCREEN and  several  other 
screens.


All  screens will display messages at the bottom that prompt  you 
to take an action.


When  RES detects a problem,  a brief explanation will appear  at 
the bottom of your screen.   Occasionally,  the explanation  will 
call  for an answer.   Most of the time,  you'll be told to press 
any key to continue the process.   If you're ever confused by the 
explanations, please refer to Section E  for additional details.


The  only true exit from RES can be found as the last  choice  on 
the  MASTER MENU SCREEN.   The exit choices you'll see  in  other 
parts  of  RES,  if chosen,  will return you to the  MASTER  MENU 
SCREEN.   In  effect,  the MASTER MENU SCREEN is a home base from 
which  you  venture to perform functions and always  return  when 
finished.












                               5










              SECTION D.  HOW TO GET STARTED


Before we get started, please make backup copies of your original 
RES diskette.  If you're not sure how to do this,  refer to  your 
DOS manual under the command COPY or DISKCOPY.


RES has been designed to work on hard disk systems.   If you have 
a floppy disk system,  please call us to discuss the availability 
of RES for your system.



HOW TO INSTALL RES ON YOUR HARD DISK SYSTEM
-------------------------------------------


STEP  1.   Create a subdirectory called RES on your hard disk.   


STEP  2.   Place the RES diskette in your 'A' drive and close the 
           diskette drive door.   This diskette contains all  the 
           programs and master files that make RES work.
 

STEP  3.   Copy the contents of the diskette to your subdirectory   
           with the following command: 

           COPY A:*.* \RES


STEP  4.   Go to the subdirectory,  type 'RES' and press the ENTER  
           key.   You will be presented with the RES logo screen.  
           Press  any  key  and the MASTER MENU  SCREEN  will  be 
           displayed.   That's it !   You're now ready to put RES 
           to the test.   


If this is the first time you've seen the MASTER MENU SCREEN, you 
may want to exit the screen by simply typing '8' so that you  can 
review  Section E as well as the Appendix.   In fact,  a complete 
hands-on,  step-by-step  demonstration  of  RES is  presented  in 
Appendix A.











                               6










     SECTION E.  HOW EACH REAL ESTATE SYSTEM FUNCTION WORKS



As  previously  mentioned,  RES was developed to  assist  in  the 
storage  and retrieval of information about properties for  sale, 
pending  and closed sales as well as details about  your  agents.  
RES  also  provides  a selection of reports that  you  will  find 
helpful.   This section outlines the purpose of each RES function 
and how it works.


Each  function will be discussed in the order as presented on the 
MASTER MENU SCREEN.   It may help to refer to the sample  screens 
in Appendix E as you read the following.



1.  PROPERTY LISTINGS


PURPOSE
-------


The Property Listings function is used to store information about 
local property listings.   Once the information has been  entered 
through  your keyboard into RES,  it is stored in a  computerized 
file called SALE.  Once stored, it can be recalled to the screen, 
changed, deleted or printed.  The  information acts as the  basis  
for printed reports described under Subsection 4 Reports.




HOW IT WORKS
------------


Upon  choosing  the  Property Listings function from  the  MASTER 
MENU SCREEN,  RES will display the PROPERTY LISTINGS SCREEN.   At 
the  bottom  of the screen you will be asked to choose  what  you 
want to do.   Your choices will be to ADD a listing, SEARCH for a 
particular  listing,  seek  HELP or to EXIT to  the  MASTER  MENU 
SCREEN.  HELP and EXIT work as their names imply.  ADD and SEARCH 
work as follows:









                               7










A.   ADD A LISTING


   Upon choosing to ADD a listing, the screen name will change, a 
   message  at  the  bottom of the screen will  appear  and  your 
   screen  cursor  will position itself just  beyond  the  SELLER 
   field near the top, lefthand corner of your screen.

  
   The  message at the bottom of the screen prompts you to  enter 
   the seller's last name.  As it states, you can press the ENTER  
   key  if   you decide NOT to add a listing.   By  pressing  the 
   ENTER key, RES will return you to the MASTER MENU SCREEN.


   If  you  decide  to go ahead and add a listing,  you  will  be 
   required to enter a seller's last name.   The  reason is  that 
   when  you  later search for a particular  listing,  you'll  be 
   searching by the seller's last  name.  Whether  you  choose to 
   put details in any of the other fields is up to you.
 

   After you've entered the seller's last name,  press the  ENTER    
   key and your screen cursor will 'skip' to the next field.   To 
   skip backward,  remember to use the BACKSPACE key. 


   Continue  to  enter  the details of the listing  until  you've 
   filled  the  entire  screen.  If  you  are  not  sure  what  a 
   particular  field  means,  all  the  fields  are  described in 
   Appendix C. If the details of any  particular  field happen to
   take up all the available space, you'll note that  your screen
   cursor will automatically skip to the next.


   Once  you've entered details into the last  field,  press  the 
   ENTER   key.   A  question will appear at the  bottom  of  the 
   screen  in order to confirm that what you've just  entered  is    
   correct.   If  you've made a mistake,  enter 'N' and RES  will    
   return the screen cursor to SELLER. 


   If,  for  example,  you made a mistake in the spelling of  the 
   address, press the ENTER  key until the screen cursor skips to 
   the address field.   Now enter the correct address.   If there 
   are other mistakes,  press the ENTER  key until you reach  the 
   bad field and enter the correct details.  When all corrections 
   have been made,  either continue to press the ENTER  key until 
   the question about correctness again appears at the bottom  of 
   the screen or press Ctrl-W.  To use Ctrl-W, hold down the Ctrl
   key  on the left side of your keyboard and then press the  'W' 
   key once.



                               8










   Now  enter 'Y' to confirm that the details are  correct.   RES    
   will  now  take the details you've just entered  and  make  an    
   entry  in  the  SALE master file except  under  the  following       
   condition:
      
      If the seller's last name already exists in the SALE master 
      file,  RES will display a message telling you so.  You must 
      then  choose  whether  to allow RES to make  an  additional 
      entry  under  the  same  name.    A  cautionary  note,  RES       
      tells  you of the duplicate so that you can avoid  entering       
      the same listing twice.


   If you do not receive the  above message,  rest assured that a
   new  listing has  been added to the  SALE master  file.  After
   adding the new listing, RES will return you to the MASTER MENU
   SCREEN. 






































                               9










B.   SEARCHING FOR A LISTING



   Upon  choosing to SEARCH for a listing,  the screen name  will 
   change,  a message at the bottom of the screen will appear and 
   your screen cursor will position itself just beyond the SELLER 
   field near the top, lefthand corner of your screen.

  
   Again, the message  at the bottom  of your screen is prompting
   you to take an action.  Proceed by either entering a  seller's 
   last name or pressing the ENTER key to exit.


   If  you choose to continue the search,  enter all or a portion 
   of   the  seller's  last name.  The entry can be in  upper  or       
   lower case.  Once entered, press the ENTER key.  


   RES will now attempt to find the name in the SALE master file. 
   If it cannot be found,  a message will appear at the bottom of
   the screen  to let you know.  It's  up to you  to research the 
   correct spelling or whether the listing was ever entered.


   If the search is successful,  RES will display all the details    
   it contains about the first listing it finds that matches  the 
   name  you  entered.   You should confirm that the  listing  is 
   actually the one you want.   


   For example, if you are searching for a listing under the name
   of 'SMITH' and RES has 2 listings under that name, the listing    
   of the first 'SMITH' will be  displayed.  It may turn out that 
   you  actually want  to  see  the second one.  


   You may have entered only 'SM' (as a shortcut) and  there  are    
   2 listings  under 'SMITH' and 1 under 'SMALLEY'.  In this case 
   RES will  display the  details of  'SMALLEY'  while  you might
   actually  want to see the  second  'SMITH'.  RES  provides the
   ability  to   skip   forward  and  backward   (to  be  covered 
   shortly) to view listings should this occur to you.


   At  the  bottom of the screen you'll note your options  as  to 
   what  you  can do next.  Enter the  letter that corresponds to 
   what you would like to do.






                               10










   If  you  choose to CHANGE the listing,  the screen  name  will 
   change,  a message at the bottom of the screen will appear and   
   RES will return the screen cursor to SELLER.   Press the ENTER
   key until the screen cursor skips to the field(s)  you want to  
   change and enter the changes.  When all corrections have  been  
   made, then  continue to press the ENTER key until the question 
   about correctness appears at the bottom of the screen or press 
   Ctrl-W.


   Now enter 'Y' to  confirm that  the details  are correct.  RES
   will now take the details you've just entered and   change the
   entry  in  the  SALE master file except  under  the  following    
   condition:
   
      If  you've  blanked  out  the  seller's last name, RES will          
      display a message at the bottom of the screen to remind you  
      that a seller's last name is required.
      

   If you do not receive such a message, rest assured that    RES 
   has  changed the listing in the SALE master  file.   RES  will    
   return you to the MASTER MENU SCREEN. 


   If  you choose to view the NEXT listing,  RES will display the 
   details  of the next listing (alphabetically) within the  SALE 
   master file.   Once displayed,  you will have the same options 
   to choose from at the bottom of the screen.    


   If you inadvertently ask for the next listing while at the end 
   of the SALE master file,  a  message  will be displayed at the 
   bottom of the screen telling you so.


   If you choose to view the  PRIOR listing, RES will display the 
   details of the prior listing  (alphabetically) within the SALE 
   master file.   Once displayed,  you will have the same options 
   to choose from at the bottom of the screen.    


   If you inadvertently  ask  for  the prior listing while at the 
   beginning of the SALE master file, a message will be displayed 
   at the bottom of the screen telling you so.


   If you choose to DELETE the listing displayed on the screen, a 
   message  will be displayed at the bottom of the screen  asking 
   you  to confirm your intention.   If you decide not to  delete 
   the  listing,  enter 'N',  otherwise,  enter  'Y'.   Depending 
   upon  your  response, RES will either  delete the listing from 
   the   SALE   master  file and return you to  the  MASTER  MENU 
   SCREEN or leave the listing unchanged.  

                               11










   If  you  choose  to create a HARDCOPY of the  listing  on  the 
   screen,  a  message  will be displayed at the  bottom  of  the 
   screen asking you to confirm your intention. If you decide not
   to create  the  hardcopy,  enter 'N',   otherwise  enter  'Y'. 
   Depending upon your response,   RES  will  either  print   the    
   listing or return you to the MASTER MENU SCREEN.


   If  you  just  want  to view the  property  listing  and  then       
   return  to the MASTER MENU SCREEN,  then you'll want to choose 
   EXIT.












































                               12










2.  RECORD OF SALE




PURPOSE
-------


Once  a  property  has been sold,  you will want  to  record  the 
details of its pending sale and, ultimately, the closing details.  
The  Record of Sale function is used to store  information  about 
pending and closed sales.   Once the information has been entered 
through  your  keyboard into RES,  it is stored,  along with  the 
details  of the property listing,  in a computerized file  called 
SALE.   Once stored, it can  be recalled  to the screen, changed, 
deleted or printed. The information acts as the basis for printed  
reports described under Subsection 4 Reports.




HOW IT WORKS
------------


Upon  choosing the Record of Sale function from the  MASTER  MENU 
SCREEN,  RES  will  display the RECORD OF SALE  SCREEN.   At  the 
bottom of the screen you will be asked to choose what you want to 
do.  Your choices will  be to SEARCH for  a  particular  property 
listing  in  order  to add or change details of  the  pending  or 
closed  sale,  seek  HELP or to EXIT to the MASTER  MENU  SCREEN.  
HELP  and  EXIT  work  as their names  imply.   SEARCH  works  as 
follows:





















                               13










A.   SEARCHING FOR A LISTING


   Upon  choosing to SEARCH for a listing,  the screen name  will 
   change,  a  message  at  the  bottom  of  the  screen  will be 
   displayed  and your screen cursor will   position  itself just 
   beyond the SELLER field near the top, lefthand corner  of your
   screen.    


   You may now be familiar with the message  that appears at  the 
   bottom  of  your  screen  prompting  you to  take  an  action.  
   Proceed  by either entering a seller's last name  or  pressing 
   the ENTER key to exit to the MASTER MENU SCREEN.


   Enter  all  or  a portion of the seller's last  name  for  the 
   sale  details  you are searching for.  After you've  made  the 
   entry, press the ENTER key.  


   RES will now attempt to find the name in the SALE master file.
   If it cannot be found, a message will appear at the bottom  of
   the screen to let you know.  It's up  to you  to research  the
   correct spelling or whether  the  property  listing  was  ever 
   entered.

   
   It's important  to remember that you need  to enter a property 
   listing  (MASTER MENU SCREEN #1) before you can enter  details 
   about its sale. If it's inconvenient for you to  enter all the 
   details  for a listing,  that's O.K.   Just create  a property 
   listing   with only the seller's name and address so that  RES 
   can make an entry in the SALE master file.


   If  the search is successful,  RES will display the details it 
   contains  about the property and its sale.   If the listing is 
   not the correct one,  you may use the NEXT or PRIOR options to 
   locate the correct listing.   


   At the bottom of the screen you'll  note  your  options  as to 
   what you can  do next.  Enter  the letter that corresponds  to 
   what you would like to do.


   If  you choose to CHANGE the details of the sale,  the  screen 
   name  will change,  a message at the bottom of the screen will 
   appear and RES will return the screen cursor to BUYER.  





                               14










   Begin entering the details of the sale or press the ENTER  key 
   until the  screen  cursor  skips to  the  field(s) you want to
   add information to or change.  Use the  BACKSPACE key to  skip    
   backward.  All fields displayed on the screen are described in    
   Appendix C.  


   When all entries have been made, either continue to  press the  
   ENTER key until the question about correctness appears  at the 
   bottom of the screen or press Ctrl-W.


   SPECIAL  NOTE - Notice that the screen cursor does  not  begin 
   with the details about the seller,  address, etc.  If you need 
   to  change these details,  please do so by using the  Property 
   Listings function.


   Now  enter 'Y' to confirm that the details are  correct.   RES    
   will  now take the details you've just entered and change  the      
   entry  in  the  SALE master file except  under  the  following          
   conditions:
   
      If you've blanked out the buyer's last name or neglected to 
      enter a last name, RES will display a message at the bottom 
      of the screen to remind you that a buyer's name is required.
      
      If you're adding details of a sale for the first time,  you       
      must  change the status from open to either pending (P)  or       
      closed  (C).   RES will display a message at the bottom  of       
      the screen to remind you if you don't change the status.


   If  you  do not receive either of the   above  messages,  rest 
   assured  that  RES has  changed the sale  details in the  SALE 
   master file.  RES will return you to the MASTER MENU SCREEN. 


   If  you choose to view the NEXT listing,  RES will display the       
   details  of  the next listing and  its  sale  (alphabetically) 
   within  the SALE  master file.  Once displayed,  you will have 
   the same options to choose from at the bottom of the screen. 


   If you inadvertently ask for the next listing while at the end
   of  the SALE master file,  a message will be displayed at  the 
   bottom of the screen telling you so.


   If  you choose to  view the PRIOR listing,  RES  will  display 
   details   of  the prior listing and its sale  (alphabetically)        
   within the SALE master file.   Once displayed,  you will  have    
   the same options to choose from at the bottom of the screen.  


                               15










   If  you  inadvertently ask for the prior listing while at  the 
   beginning of the SALE master file, a message will be displayed 
   at the bottom of the screen telling you so.


   If  you choose to DELETE the details of sale on the screen,  a    
   message  will be displayed at the bottom of the screen  asking    
   you to confirm your intention. If you decide not to delete the    
   sale,   enter  'N',  otherwise,  enter  'Y'.   Depending  upon       
   your response,  RES will either delete the details of the sale    
   (but  not  the entire listing) from the SALE master  file  and 
   return  you  to the MASTER MENU SCREEN or leave the record  of 
   sale unchanged.  


   If  you choose to create a HARDCOPY  of sale on the screen,  a    
   message  will be displayed at the bottom of the screen  asking    
   you to confirm your intention.  If you decide not to print the    
   sale,   enter  'N',  otherwise,  enter  'Y'.   Depending  upon       
   your response,  RES will either print  the details of the sale    
   or return you to the MASTER MENU SCREEN.


   If you just want to view the property listing sale details and 
   then return  to the MASTER MENU SCREEN,  then you'll  want  to 
   choose EXIT.





























                               16










3.  AGENT FILE




PURPOSE
-------


The  Agent File function is used to store information about  your 
agents.   Once  the  information  has been entered  through  your 
keyboard  into RES,  it is stored in a computerized  file  called 
AGENT.  Once stored, it can be recalled to the screen, changed or 
deleted.   The  information acts as the basis for printed reports 
described under Subsection 4 Reports.   Please note that RES will 
work  just  fine even if you never use the Agent  File  function.  
It's up to you whether it serves a useful purpose.



HOW IT WORKS
------------


Upon  choosing  the  Agent  File function from  the  MASTER  MENU 
SCREEN,  RES  will display the AGENT FILE SCREEN.   You  will  be 
asked to choose what you want to do.  Your choices will be to ADD 
an agent,  SEARCH for a particular agent, seek HELP or to EXIT to 
the MASTER MENU SCREEN.  HELP and EXIT work as their names imply.  
ADD and SEARCH work as follows:

























                               17










A.    ADD AN AGENT


   Upon choosing to ADD an agent,  the screen name will change, a 
   message  at  the  bottom  of  the screen  will appear and your 
   screen cursor will position itself just beyond  the NAME field
   near the top, lefthand corner of your screen.    
  
   
   The prompt message at the bottom of the screen will remind you 
   to enter an agent's name or press the ENTER key to exit.


   To  add  an agent, you will be required to enter a last  name. 
   The reason  is  that  when  you  later search for a particular  
   agent you'll  be searching by his or her  last  name.  Whether  
   you choose  to put details in any of the other fields is up to 
   you.


   After  you've  entered  the  agent's  last  name,   press  the    
   ENTER   key  and your screen cursor will 'skip'  to  the  next    
   field.   Continue  to  enter the agent  details  until  you've    
   filled the entire screen.  All fields displayed on this screen 
   are described in Appendix C.


   Once  you've entered details into the last  field,  press  the 
   ENTER   key.   A  question will appear at the  bottom  of  the 
   screen  in  order to confirm that what you've just entered  is 
   correct.   If  you've made a mistake,  enter 'N' and RES  will    
   return the screen cursor to NAME. 


   If,  for  example,  you made a mistake in the spelling of  the 
   address, press the ENTER  key until the screen cursor skips to 
   the address field.   Now enter the correct address.   If there 
   are other mistakes,  press the ENTER  key until you reach  the 
   bad field and enter the correct details.   Remember to use the 
   BACKSPACE  key to skip  backward.   


   When all corrections have been made, either  continue to press 
   the  ENTER  key  until the question  about  correctness  again 
   appears at the bottom of the screen or press Ctrl-W.










                               18










   Now  enter 'Y' to confirm that the details are  correct.   RES    
   will  now  take the details you've just entered  and  make  an    
   entry  into  the AGENT master file except under the  following       
   conditions:

      If you've blanked out the agent's last name or neglected to 
      enter a last name, RES will display a message at the bottom 
      of  the  screen to remind you that an agent's name  is  re-
      quired.


      If the agent's last name already exists in the AGENT master 
      file,  RES will display a message telling you so.  You must 
      then  choose  whether  to allow RES to make  an  additional 
      entry  under  the  same  name.    A  cautionary  note,  RES       
      tells  you of the duplicate so that you can avoid  entering       
      the same agent twice.


   If  you  do not  receive either of the  above  messages,  rest 
   assured that your new agent has been added to the AGENT master
   file.   After adding the new agent, RES will return you to the 
   MASTER MENU SCREEN. 
































                               19










B.   SEARCHING FOR AN AGENT 


   Upon  choosing  to SEARCH for an agent,  the screen name  will 
   change, a  message at the bottom of the screen will appear and 
   your screen cursor  will position itself  just beyond the NAME
   field near the top, lefthand corner of your screen.

  
   Proceed  by either entering an agent's last name  or  pressing 
   the ENTER key to exit to the MASTER MENU SCREEN.


   RES  will  now  attempt to find the name in the  AGENT  master 
   file.    If it cannot be found,  a message will appear at  the 
   bottom  of   the screen to let you know.  It's up  to  you  to 
   research  the  correct spelling  or whether the agent was ever 
   entered.

   
   If the search is successful,  RES will display all the details    
   it  contains about the agent.  If the agent is not the correct 
   one,  use the NEXT or PRIOR options to locate the correct one.   


   At  the  bottom of the screen you'll note your options  as  to 
   what  you can do next.   Enter the letter that corresponds  to 
   what you would like to do.


   If  you choose to CHANGE the agent details,  the  screen  name 
   will change, a message at the bottom of the screen will appear 
   and RES will return the screen cursor to NAME. Press the ENTER  
   key until the screen cursor  skips to the field(s) you want to 
   change and enter the changes.   


   When all corrections have been made, either continue  to press
   the ENTER key until the question about correctness appears  at
   the bottom of the screen or press Ctrl-W.


   Now  enter 'Y' to confirm that the details are  correct.   RES       
   will now take the details you've just entered and   change the   
   entry  in  the AGENT master file except  under  the  following    
   condition:
   
      If  you've  blanked  out  the  agent's  last name, RES will 
      display a message at the bottom of the screen to remind you 
      that an agent's last name is required.
      

   If  you do not receive the  above message,  rest assured  that    
   RES  has  changed the agent details in the AGENT master  file.  
   RES will return you to the MASTER MENU SCREEN. 
                               20










   If  you  choose to view the NEXT agent,  RES will display  the 
   details  of the next agent (alphabetically) within  the  AGENT 
   master file.   Once displayed,  you will have the same options 
   to choose from at the bottom of the screen.    


   If you inadvertently  ask  for the next agent while at the end 
   of the AGENT  master file,  a message will be displayed at the 
   bottom of the screen telling you so.


   If you  choose to view the  PRIOR  agent, RES will display the 
   details of the prior agent  (alphabetically) within the  AGENT
   master file.   Once displayed,  you will have the same options 
   to choose from at the bottom of the screen.    


   If you  inadvertently  ask for  the  prior agent  while at the 
   beginning of the AGENT master file,a message will be displayed 
   at the bottom of the screen telling you so.


   If  you  choose to DELETE the agent details displayed  on  the    
   screen,  a  message  will  be displayed at the bottom  of  the 
   screen  asking you to  confirm your  intention.  If you decide   
   not to delete the agent details, enter  'N', otherwise,  enter 
   "Y".  Depending upon your response, RES will either delete the    
   details  from  the  AGENT master file and return  you  to  the 
   MASTER MENU SCREEN or leave the details unchanged.   


   If  you  just  want  to  view  the  agent  details  and   then          
   return  to the MASTER MENU SCREEN,  then you'll want to choose 
   EXIT.





















                               21










4.  REPORTS




PURPOSE
-------


The  Report function is used to create a variety of reports about 
your  property  listings,  pending and closed sales  as  well  as 
commissions.



HOW IT WORKS
------------


Upon  choosing the Report function from the MASTER  MENU  SCREEN, 
RES  will  display the REPORT MENU SCREEN.  You will be asked  to 
choose  which  report  you  want  to  create.  Your  choices  are 
presented below in detail.   


When  requesting  any  of the following reports, RES will display
another screen reminding you to turn your printer on and to align
your  paper.  Depending  upon  the  report,  you  may be asked to 
provide additional details.  You will also be given the chance to
exit and not print the report.


Examples of the following reports are included in Appendix D.  It 
may  be  helpful to look at them as you're reading the  following 
descriptions.




















                               22










   AGENT COMMISSIONS



   The  Agent  Commissions  report will show each of your agent's 
   listing commissions, sales commissions and a total of both for 
   your fiscal year.   This information is derived from the AGENT 
   file, therefore, if you want this report you must make entries 
   in the file first.   The agent's will be printed in alphabeti-
   cal order.



   OFFICE COMMISSIONS



   The  Office  Commissions report will show  your  total  office    
   commissions  (exclusive of agent commissions) for your  fiscal       
   year.   The report is derived from your closed sales, in other    
   words,  from  your  sales that have a status of (C)losed  (See       
   Appendix C for further details about STATUS). 


   The report shows seller,  property  address, passing date  and 
   commission amount. The details  of  the report  are printed in 
   order by the passing date.  

 
   When  requesting this report,  you will be asked to wait while 
   the  SALE  file  is sorted.   If you  have a large  number  of 
   closed  sales,  be  prepared to wait several minutes  for  the 
   sorting to take place.   



   PROJECTED INCOME



   The   Projected   Income  report  will  show   your   expected    
   commissions (exclusive of agent commissions) from your pending   
   sales (Status equal 'P').   


   The  report shows seller,  property address,  passing date and   
   commission  amount.  The  details of the report are printed in 
   order by the passing date.  


   When  requesting this report,  you will be asked to wait while 
   the Sales file is sorted.   



                               23










   PENDING SALES



   The Pending Sales report will show relevant details from  your    
   pending  sales (Status equal 'P').   


   The  report shows seller,  MLS #,  property  address,  listing 
   price, listing date and office,  buyer name and address,  sale 
   price, sale date, sales agent #1 and #2, deposit and estimated 
   net.   The  details of the report are printed in  alphabetical 
   order by seller's name.    




   CLOSED SALES




   The  Closed Sales report will show relevant details from  your    
   closed sales (Status equal 'C').  


   The  report  shows  seller, MLS #, property  address,  listing 
   price, listing date and office,  buyer name and address,  sale 
   price,  sale date,  sales agent #1 and #2,  deposit, estimated 
   net,  pass date, pass net, office  commission, agent #1 and #2    
   commissions, cobroker and cobroker commission.  The details of    
   the report are printed in alphabetical order by seller's name.




   PROPERTY LISTINGS



   The  Property  Listing report will show details  of  all  open 
   property  listings (Status  equal 'O').   When  requesting the 
   report, you  will be asked whether the report should be placed 
   in order by  area,  price or type (Refer to Appendix C for de-
   tails about these screen fields).  


   The  report  will  display MLS #,  status, type, source, area, 
   seller,  property  address,  bedrooms,  baths,  age,  sq. ft.,  
   financing,  features, list  price,  listing  date  and office, 
   contract date, expiration date and listing agents #1 and #2.




                               24










   REPORT DESCRIPTIONS


 

   If you choose Report Descriptions, RES will display a screen
   that contains a brief description of the report options.




   EXIT


   If you decide that you don't want to create a report,  use the 
   EXIT option to return to the MASTER MENU SCREEN.





AN IMPORTANT NOTE ABOUT PRINTING REPORTS...


RES  has been developed to print your reports on most major types 
of  printers.   If  you should experience any  difficulties  with 
printing your reports, please contact us first.




























                               25










5.  YEAR-END PROCESSING




PURPOSE
-------


Year-End Processing performs 2 tasks.   First,  it  automatically 
purges  all details of your closed sales (Status equal 'C')  from 
your  SALE master file.  Second,  it automatically moves  current 
year  commissions  in  the  AGENT master file  to  previous  year 
commissions.   


You  may want to do this at the end of your fiscal year.  If  you 
don't use a fiscal year-end,  you may want to periodically do the 
year-end processing anyway.   Basically,  all this process really 
does for you is to recoup storage space on your master files  and 
avoid  the  possibility of continually reporting outdated  closed 
sales.   



HOW IT WORKS
------------


Upon  choosing  this  option,   RES  will  display  the  YEAR-END 
PROCESSING SCREEN.  It tells you what's doing to happen and gives 
you  a  chance to exit (perhaps to print a Closed Sales or  Agent 
Commissions report before proceeding).  


If  you  decide  to allow the process to  take  place,  RES  will 
automatically  purge closed sales from your SALE master file  and 
move agent current year commissions to previous year commissions.  
If  you don't use the Agent File function,  RES will  bypass  the 
last task.















                               26










APPENDIX A.   HANDS-ON DEMONSTRATION 




The  purpose  of this section is to give you  a  brief,  hands-on 
demonstration  of how to use RES.   We'll experience each of  its 
functions and how they work.  You'll also get a chance to see all 
RES menus and most screens in action.




HOW TO BEGIN
------------


Go to the RES subdirectory,  enter the command 'RES' followed  by 
pressing the ENTER key.


You should now be looking at the RES logo screen.   Press any key 
to display the MASTER MENU SCREEN.




THE DEMONSTRATION
-----------------


Let's  pretend  that you've used RES for  months  now.   On  this 
particular day you need to do the following:
   

   1.  Add details about a new property listing
   2.  Match a client's needs to a property listing
   3.  Record the details of a sale 
   4.  Add a new agent
   5.  Create a report about pending sales



The  following steps will show you how to accomplish  the  above.  
We  encourage  you  to follow these steps as presented  to  avoid 
confusion.   After  you are comfortable with how RES works, don't 
hesitate to experiment.








                               27










ADD DETAILS ABOUT A NEW PROPERTY LISTING



Observing   the  MASTER  MENU  SCREEN  you'll  note  the  choices 
available  to  you.   Since you need to add details about  a  new 
property listing, your choice is Property Listings.  Please enter 
your choice by typing '1'.  


You are now looking at the PROPERTY LISTINGS SCREEN.   Notice the 
choices  available to you at the bottom of the screen.   You  can 
ADD,  SEARCH,  seek HELP or EXIT back to the MASTER MENU  SCREEN.  
Since  you want to add a property listing,  enter your choice  by 
typing  'A'.   


RES will respond by placing the screen cursor at SELLER.  You may 
now enter the details of a new property listing.  A reminder, RES 
stores  your  property listings by the seller's last  name.   For 
this reason,  you'll be required to enter a name so that RES  can 
create  a property listing.  


Go   ahead  and  enter  a  property  listing  using  make-believe 
information.   Please use 'TEST' as the seller's name and  150000   
as the list price.  Skip the fields  (by pressing the ENTER  key) 
that you're unfamiliar  with.  For  a complete  discussion of all 
screen fields, please refer to Appendix C.  


Once you've entered information in the last field,  RES  will ask
"IS THE ABOVE CORRECT ? (Y/N)". If you enter 'Y' RES will now add 
your new property listing to the SALE master file.  If you  enter 
'N',  RES  will reposition the screen cursor at SELLER  so   that 
you may correct your entry.  Please enter 'Y'.


That's  all  there  is to adding new property  listings.   For  a 
complete discussion about the  other options available when using 
Property Listings,  please refer to Section E  Property Listings.  
To continue the demonstration, please turn to the next page.   To 
discontinue, enter '8' to exit RES.












                               28










MATCH A CLIENT'S NEEDS TO A PROPERTY LISTING


After adding a new property listing,  RES will return you to  the
MASTER MENU SCREEN.  Pretend that a client has just called to see
what  listings  are available at a certain price.   To accomplish
this task, you'll want to choose the fourth option on the screen,
Client/Property Matchup.  Please enter your choice by typing '4'.


You are now looking at the HOME MATCH REPORT SCREEN.  Please turn
your printer on and align your paper.   If you do not have an at-
tached printer,  press the ENTER key until you return to the MAS-
TER MENU SCREEN.


If you are ready to proceed with the report,  press the ENTER key
until  the cursor is at LIST PRICE.   Next,  enter the amount  of
150000  and  press the ENTER key.   RES will now print  the  Home
Match report which will display the information on the TEST  pro-
perty  listing you previously entered.   When the report is  com-
plete, press the ENTER key and RES will return to the MASTER MENU
SCREEN.
































                             29










RECORD THE DETAILS OF A SALE



After adding a new property listing,  RES will return you to  the 
MASTER MENU SCREEN.   You're now ready to record the details of a 
sale you've just made.   In this case,  you'll want to choose the 
second option on the screen,  Record of Sale.   Please enter your 
choice by typing '2'.


You  are  now looking at the RECORD OF SALE  SCREEN.  Notice  the 
choices  available to you at the bottom of the screen.   You  can 
SEARCH,  seek HELP or EXIT back to the MASTER MENU SCREEN.  Since 
you want to  add details of a  sale, shouldn't there be an option 
to add a sales record ?   You'll be able to add the details of  a 
sale,  but first you must find the property listing that has been 
sold.  


Remember the property listing you previously added under the name 
TEST  ?  We'll assume that it's been sold and you're now entering 
details  about  the sale.   Please note one of the few  rules  in 
using RES:
  
A PROPERTY LISTING MUST EXIST BEFORE ENTERING DETAILS OF ITS SALE



To  illustrate  this rule,  let's search for the  TEST   property 
listing.   Please  enter  'S' to search.   Notice that  RES  only 
lights-up  the SELLER field.  Enter the name TEST and  press  the 
ENTER   key.   RES will now search for your property listing  and 
display  the details.   If the listing cannot be found,  RES will 
present a message at the bottom of the screen telling you so.  In 
that case, check your spelling and retry.


Note the options available at the bottom of the screen.   You can 
CHANGE  the  record,  view the NEXT or PRIOR record,  DELETE  the 
record,  request  a HARDCOPY of the record or EXIT to the  MASTER 
MENU  SCREEN.   Since you want  to add details about the sale  of 
the property,  you'll need to "change" the current details (which 
are currently blank).  Please enter 'C'.  


Note  that  RES does not light-up all  the  data  fields.   Those 
fields  that  remain unlit are those you originally entered  when 
creating the property listing. If you want to change any of these 
unlit fields you must do so under the Property Listing function.





                               30










RES does light-up all the fields that pertain to the sale of  the 
property,  beginning  with the name of the buyer.   Go ahead  and 
enter  make-believe information using a buyer's name of JONES and 
by entering 'P' (for pending sale) in the STATUS field.  Skip the 
fields (by pressing the ENTER  key) that you're unfamiliar  with.  
For  a complete discussion of all screen fields,  please refer to 
Appendix C.  


Since you're entering information about a pending sale,  some  of 
the fields will remain empty.  Why ?  Because some of the details 
will not be known until the sale is closed.   RES was designed so 
that you can add details, as they're known, at your convenience.


Once  you've  entered information in the last field RES will  ask 
"IS  THE ABOVE CORRECT ?  (Y/N)".   If you enter 'Y' RES will now 
change your property listing by adding the details of the pending 
sale to the SALE master file.  If you enter 'N' RES will reposit
ion  the  screen  cursor at BUYER so that you  may  correct  your 
entry. Please enter 'Y'.


That's  all there is to adding details of a pending  sale.   Once 
the  sale is closed,  you would repeat the above steps to add the 
final details of the sale,  changing the status to 'C'.    For  a 
complete discussion about the  other options available when using 
Record of Sales,  please  refer to Section E. Record of Sale.  To
continue the demonstration,  please turn  to the next  page.   To 
discontinue, enter '8' to exit RES.

























                               31










ADD A NEW AGENT



After successfully adding the details of a pending sale, RES will 
return you to the MASTER MENU SCREEN.  Let's add the details of a 
new agent.  Please enter '3' to enter the AGENT FILE.


You  are now looking at the AGENT FILE SCREEN.   Your options are 
to ADD an agent, SEARCH for a particular agent, seek HELP or EXIT 
to the MASTER MENU SCREEN.  Please enter 'A' to add an agent.


RES  will place the screen cursor at NAME.   Enter a make-believe 
agent by the name of 'TEST',  skipping any fields you don't  want 
to use or don't understand.   For a complete discussion of screen 
fields, please refer to Appendix C.  


For  example,  if the agent has not earned any commissions,  skip 
the  current year and previous year commissions by  pressing  the 
ENTER   key.   By doing so,  RES will enter the amount of zero in 
these fields, as well as the total commissions fields.


When  you  have entered all the information,  RES will display  a 
message at the bottom of the screen that you should now be famil
iar  with.   Please turn to the next page to continue the  demon
stration.  To discontinue, enter '8' to exit RES.

























                               32










CREATE A REPORT ABOUT PENDING SALES




After  successfully adding an agent,  RES will return you to  the 
MASTER MENU SCREEN.  Let's complete the demonstration by creating 
a report about pending sales.   To do so,  you'll need to have  a 
printer  attached  to your computer,  turned on and  loaded  with 
paper.   If a printer is not available,  please enter '8' to exit 
RES.


We want to create a report so please enter '5'.  RES will display 
the REPORT MENU SCREEN,  listing the reports you may request.  We 
want to create a Pending Sales report, so please enter '4'.


RES now displays the PENDING SALES REPORT SCREEN, advising you to 
turn  your  printer on and to align your  paper.   You  are  also 
advised  that  you can avoid creating the report by entering  the 
word  'ABORT',  whereby  you will be returned to the REPORT  MENU 
SCREEN.  Please press the ENTER key to print the report.


The Pending Sales report should now be printing.   If it doesn't, 
check  to see that your printer is working.   When finished,  RES 
will return you to the MASTER MENU SCREEN when you can choose  to 
experiment further or choose to EXIT from RES.


After  you've  become comfortable with the delete option  in  the 
Property   Listings  function,   you  may  want  to  delete   our 
demonstration  record of TEST so that it doesn't appear  in  your 
future  reports.   Likewise,  the delete option in the Agent File 
function will get rid of our TEST agent.



















                               33










APPENDIX B. MAKING A PERIODIC BACKUP OF YOUR MASTER FILES



 
Nothing  lasts forever.   To guard against the accidental loss of 
your  valuable  data,  you  should develop a habit  of  making  a 
periodic backup of your master files.


BUT I ALREADY MADE A BACKUP OF THE ORIGINAL RES DISKETTE !


True.   And you needn't make another backup of the ORIGINAL.  You 
will,  however,  be  constantly  adding new information  to  your 
master  files  (whether  on a diskette or hard  disk)  which  you 
cannot afford to lose.   Therefore,  you need to make a  periodic 
backup of your master files.


Please refer to your DOS manual for backup instructions.   If you 
need help, please call us.



HOW OFTEN TO BACKUP
-------------------


It's really up to you. Keep in mind that if your RES MASTER FILES 
you use on a daily basis are damaged, you will lose only the data 
since the last backup.


With  this  in mind,  many of you will choose to  perform  backup 
after  entering  a large amount of data,  so as not to  take  the 
chance of losing what's just been entered.   Another approach  is 
to  peform a periodic backup on a given schedule,  such as once a 
day at the end of the day, once a week, etc.




WHAT SHOULD BE BACKED-UP ?
--------------------------


You should backup all files appended with .DBF and .NTX.







                               34










SPECIAL NOTE ABOUT LARGE MASTER FILES
-------------------------------------


For  those of you with master files that are larger than can  fit 
on  one floppy diskette,  you'll have to use IBM's BACKUP command 
to accomplish the above.   If you have doubts as to how it works, 
please call us.


One way to tell if your master files have grown too large for one 
floppy diskette, is to do the following:


   1.  List the directory of master files with the command...

       DIR *.DBF


   2.  Sum the size of each file.


   3.  List the directory of indices with the command...

       DIR *.NTX


   4.  Sum the size of each index and add to the earlier sum for 
       master files.


   5.  If  the  sum of master files and indices  is  approaching 
       360,000, you are at or near the limit of 1 floppy diskette.






















                               35










APPENDIX C.  DEFINITION OF SCREEN FIELDS



In this section we'll review all the fields you will encounter in 
the  Property Listings,  Record of Sale and Agent File functions.  
Again  a  'field'  can  be  thought  of  as  a  single  piece  of 
information.   The definitions of most of these fields are  self-
evident.   Several have particular definitions that are important 
to the proper use of RES.


The fields will be presented by function,  giving its name,  size 
(how  long it can be),  type (numeric only or any combination  of 
alphabetic  and  numeric) and definition.   Whenever you see  the 
word  'optional' it means that you can choose whether to use  the 
field.




PROPERTY LISTINGS SCREEN FIELDS


FIELD NAME    SIZE  TYPE                 DEFINITION
----------    ----  ----                 ---------- 


SELLER         20    AN     Seller's last name.   If you want  to 
                            include the first name initial, enter 
                            the last name followed by a comma and 
                            then the initial.   You must enter  a 
                            seller's  name  to create a  property 
                            listing.   The name can be entered in 
                            upper   or  lower  case.    RES  will 
                            convert all names to upper case. When 
                            searching  for a  particular  seller, 
                            you can enter all or a portion of the 
                            name.

ADDRESS        20    AN     The  seller's address.   Also used as 
                            the property listing address. Option-
                            al.

CITY           15    AN     The seller's city.  Optional.

STATE           2    AN     Abbreviated code for seller's  state.  
                            Optional.

ZIP             5    NUM    Seller's postal zip code.  Optional.

PHONE          15    AN     Seller's phone number.   Large enough 
                            to  hold an area code and  extension.  
                            Optional.

                               36










MLS #          10    AN     Can  be  used  to  store  your  local 
                            Multiple  Listing Service number  for 
                            the  property or a customized  office 
                            listing number.  The field can be any 
                            combination  of letters and  numbers.  
                            Optional.

STATUS          1    AN     Denotes  whether the listing is  open 
                            (no   pending  sales   activity),   a 
                            pending  sale or a closed sale.   The 
                            acceptable  input is 'O' (open  list-
                            ing),  'P' (pending) or 'C' (closed). 
                            When  adding a property  listing,  an 
                            'O'  is automatically placed  on  the 
                            screen for you. To change the status,  
                            you  must  use  the  Record  of  Sale 
                            function.  

TYPE            5    AN     Denotes  the  type  or style  of  the 
                            listing.   For example,  CONDO,  SFR, 
                            etc.   You can design codes that  are 
                            meaningful to you.  Optional.
 
SOURCE         10    AN     Denotes  an individual (other than  a 
                            listing  agent)  or  office  who  was 
                            responsible for obtaining the listing.
                            Optional.

AREA            5    AN     If  you  break down your  sales  area 
                            into territories,  you can enter your 
                            customized area code.  Optional.

BEDROOMS        2    NUM    Number of bedrooms.  Optional.

BATHS           1    NUM    Number of baths.  Optional.

SQ  FT          5    NUM    Square footage of property.  Optional.

AGE             3    NUM    Age of the property.  Optional.

FINANCING       3    AN     Type of financing available.  You can 
                            customize your own codes.  Optional.

FEATURES       50    AN     Use  this  field  as a  memo  pad  to 
                            record   unique   features   of   the 
                            property.  Optional.

LIST PRICE     10    NUM    Listing price of property.  Optional.

LISTING OFFICE 10    AN     Listing office.  Optional.

LIST DATE       6    NUM    Date property was listed.  Optional.

CONTRACT  DAYS  3    NUM    Number  of  days  the  listing  is 
                            contracted for.  Optional.
                               37










EXPIRES         6    NUM    Date the listing  contract  expires.  
                            Optional.

AGNT 1         10    AN     Name of the agent responsible for the 
                            listing.  Optional.

LIST COM        8    NUM    The commission for the listing agent.  
                            Optional.

AGNT 2         10    AN     If the listing is split,  enter  the 
                            second agent's name.  Optional.

LIST COM        8    NUM    The commission for the second listing 
                            agent.  Optional.









































                               38










RECORD OF SALE SCREEN FIELDS



The  fields  denoted  as  'display only'  are  those  fields  you 
originally input when you created a Property Listing.   They  are 
displayed  on the RECORD OF SALE SCREENS but can only be  changed 
in the Property Listing function.



FIELD NAME    SIZE  TYPE                 DEFINITION
----------    ----  ----                 ----------


SELLER         20    AN     Seller's name. Display only.

ADDRESS        20    AN     Seller's address. Display only.

CITY           15    AN     Seller's city. Display only.

STATE           2    AN     Seller's state. Display only.

ZIP             5    NUM    Seller's zip code. Display only.

PHONE          15    AN     Seller's phone number. Display only.

AREA            5    AN     Area designation of property. Display 
                            only.

MLS #          10    AN     Local  Multiple  Listing  Service 
                            number. Display only.
 
LIST PRICE     10    NUM    Listing price of  property.  Display 
                            only.

LISTING OFFICE 10    AN     Listing office.  Display only.

LIST DATE       6    NUM    Date property was  listed.   Display 
                            only.

BUYER          20    AN     Buyer's  name.   This  is a  required 
                            field.   RES will not create a Record 
                            of Sale without a buyer's name.

STATUS          1    AN     Property  status.    See  additional 
                            description  under  Property  Listing 
                            function.   This is a required field.  
                            If  the sale is pending,  input  'P'.  
                            If the sale is closed, input 'C'.

ADDRESS        20    AN     Buyer's address.  Optional.

CITY           15    AN     Buyer's city.  Optional.

                               39










STATE           2    AN     Buyer's state.  Optional.

ZIP             5    NUM    Buyer's zip code.  Optional.

PHONE          15    AN     Buyer's phone number.  Optional.

SALE PRICE     10    NUM    Purchase price  of  the  property.  
                            Optional.

SALE DATE       6    NUM    Date property was sold.  Optional.

AGENT 1        10    AN     Agent's name  responsible  for  the 
                            sale.  Optional.

COMM            8    NUM    Sales agent commission.  Optional.

AGENT 2        10    AN     For split sales,  the name  of  the 
                            second agent.  Optional.

COMM           8     NUM    Second sale agent commission. 
                            Optional.

DEPOSIT        10    NUM    Amount of deposit  made  by  buyer.  
                            Optional.

EST NET         8    NUM    The estimated net  profit  expected 
                            from sale. Optional.

PASS DATE       6    NUM    Date set for passing papers (close of 
                            escrow).  Optional.

PASS NET        8    NUM    The net profit at time  of  passing 
                            papers.  Optional.

OFFICE COMM     8    NUM    Net commission to your office at time 
                            of passing papers.  Optional.

CO-BROKER      10    AN     Name of cobroker, if any.  Optional.

COMM            8    NUM    Cobroker commission.  Optional.















                               40










AGENT FILE SCREEN FIELDS




FIELD NAME    SIZE  TYPE                 DEFINITION
----------    ----  ----                 ----------


NAME           20    AN     Agent's name.   This is a  required 
                            field.   It is suggested that you use 
                            last  names.   If you want to  record 
                            a first initial, input the last name, 
                            followed  by  a comma  and  then  the 
                            initial.

ADDRESS        20    AN     Agent's address.  Optional.

CITY           15    AN     Agent's city.  Optional.

STATE           2    AN     Agent's state.  Optional.

ZIP             5    NUM    Agent's zip code.  Optional.

PHONE          15    AN     Agent's phone number.  Optional.
 
SALES           9    NUM    This  years  total  commissions  from 
                            sales.   If  you  choose to  use  the 
                            Agent File function, you will want to 
                            update  this  field  ( and  the  next  
                            when  appropriate) each time  a  sale 
                            has  been  closed.   During  Year-End 
                            Processing,  this field (and the next 
                            2)  are  automatically moved  to  the 
                            corresponding  previous  year fields.
                            Optional.

LISTINGS        9    NUM    This years total  commissions  from 
                            listings.  Optional.

TOTAL           9    NUM    This years total commissions (sales + 
                            commissions).  RES will automatically 
                            calculate  this  field   by   summing
                            current sales plus current listings.

SALES           9    NUM    Last  years  total  commissions  from                             
                            sales.  Will be automatically updated 
                            if  Year-End  Processing is performed.
                            Optional.

LISTINGS        9    NUM    Last  years  total  commissions  from 
                            listings.   Will be automatically up-
                            dated  if Year-End Processing is per-
                            formed.  Optional.

                               41










TOTAL           9    NUM    Total last years commissions (sales +
                            listings).  Will be automatically up-
                            dated if Year-End Processing is  per-
                            formed.  Optional.
 


















































                               42










APPENDIX D.  SAMPLE REPORTS


AGENT COMMISSIONS REPORT SAMPLE









                      AGENTS COMMISSIONS


                LISTING             SALES              TOTAL
AGENT         COMMISSIONS        COMMISSIONS        COMMISSIONS


ADAMS, S        3475.00            12490.00           15965.00

HARRIS, L       2045.00             9460.00           11505.00

NELSON, H       5500.00             8250.00           13750.00

SWEAT, M        2275.00             6050.00            8325.00




























                               43










OFFICE COMMISSIONS SAMPLE REPORT












                     OFFICE COMMISSIONS
 
                       (Closed Sales)


                                           
SELLER                    PROPERTY       PASS DATE     AMOUNT 


HOLTON, B            7806 Anise Ave       3/14/84     2100.00

ABBOTT, J            114 Richdale Road    3/17/84     1800.00

JOHNSTON, M          17 Great Plain Ave   4/01/84     3725.00

FEENEY, A            230 Maple Road       4/11/84     1145.00
                                                    ---------
                                        TOTAL         8770.00
























                               44










PROJECTED INCOME SAMPLE REPORT












                       PROJECTED INCOME

                       (Pending Sales)


                                           
SELLER                   PROPERTY        PASS DATE     AMOUNT 


MORTON, A            1102 Centre St       5/11/84     1475.00

BENSON, M            1 Ashburton Center   5/13/84     3240.00

PETERSON, L          1400 Pleasant Ave    5/21/84     2380.00

HARRISON, G          11447 Bexley Dr      5/22/84     1350.00
                                                    ---------
                                        TOTAL         8445.00
























                               45










PENDING SALES SAMPLE REPORT






                         PENDING SALES


SELLER: BENSON, M              MLS: A-1000
ADDRESS: 1 Ashburton  Boston, MA 02134
LIST PRICE: 159000.00  LIST DATE: 2/21/84   LISTING OFFICE: ABBB
BUYER: JOHNSTON, P
ADDRESS: 80 Clancy St Boston, MA 02134     
SALE PRICE: 157500.00  SALE DATE: 4/10/84   AGENT 1: MACKLIN, M
AGENT 2: SMITH, L   DEPOSIT: 15000.00   EST. NET:  4500.00


SELLER: HARRISON, G            MLS: A-1102 
ADDRESS: 11447 Bexley Drive Natick, MA 02167
LIST PRICE: 124500.00  LIST DATE: 1/04/84   LISTING OFFICE: ABBB
BUYER: WALSH, D
ADDRESS: 1102 Lexington Ave Newton, MA 02455
SALE PRICE: 120000.00  SALE DATE: 4/14/84   AGENT 1: MAHLEN, H
AGENT 2:            DEPOSIT: 12000.00   EST. NET:  4100.00


SELLER: MORTON, A              MLS: A-1074 
ADDRESS: 1102 Centre St Newton, MA 02455
LIST PRICE: 211000.00  LIST DATE: 12/12/83  LISTING OFFICE: ABBB
BUYER: SKALNY, F
ADDRESS: 120 Richdale Rd Needham, MA 02194
SALE PRICE: 200000.00  SALE DATE: 4/02/84   AGENT 1: BERGIN, I
AGENT 2:            DEPOSIT: 25000.00   EST. NET:  7000.00


SELLER: PETERSON, L            MLS: A-1024 
ADDRESS: 1400 Pleasant Ave Needham MA 02192
LIST PRICE: 175500.00  LIST DATE: 3/15/84   LISTING OFFICE: ABBB
BUYER: GRAY, V
ADDRESS: 45 Harbor St. Wellesley, MA 02122
SALE PRICE: 172000.00  SALE DATE: 4/21/84   AGENT 1: SNOW, H
AGENT 2:            DEPOSIT: 15000.00   EST. NET:  5000.00











                               46










CLOSED SALES SAMPLE REPORT



                     CLOSED SALES


SELLER: ABBOTT, J              MLS: A-841  
ADDRESS: 114 Richdale Road Needham MA 02194
LIST PRICE: 149950.00  LIST DATE: 1/15/84   LISTING OFFICE: ABBB
BUYER: Pembroke, H
ADDRESS: 60 State St. Holliston, MA 02876
SALE PRICE: 149950.00  SALE DATE: 2/14/84   AGENT 1: LEWIS, K
AGENT 2:            DEPOSIT: 12500.00   EST. NET:  4500.00
PASS DATE: 3/1/84  PASS NET: 4500.00  OFFICE COMM: 1500.00
AGENT 1 COMM: 3000.00 AGENT 2 COMM:      COBROKER:       
COBROKER COMM:



SELLER: FEENEY, A              MLS: A-817  
ADDRESS: 230 Maple Road,  Needham MA 02192
LIST PRICE: 134000.00  LIST DATE: 1/07/84   LISTING OFFICE: ABBB
BUYER: LANSED, L
ADDRESS: 100 Corvette, Newton, MA 02155
SALE PRICE: 127000.00  SALE DATE: 3/10/84   AGENT 1: MARKLEY, G
AGENT 2: PIERSON, S DEPOSIT: 7000.00    EST. NET:  3700.00
PASS DATE: 4/1/84  PASS NET: 3700.00  OFFICE COMM: 1200.00
AGENT 1 COMM: 2500.00 AGENT 2 COMM:      COBROKER:       
COBROKER COMM:



SELLER: HOLTON, B              MLS: A-911  
ADDRESS: 7806 Anise Ave Needham MA 02192
LIST PRICE: 220000.00  LIST DATE: 3/01/84   LISTING OFFICE: ABBB
BUYER: BEDELL, P
ADDRESS: 76 Old Town Road Millis, MA 02712
SALE PRICE: 211000.00  SALE DATE: 3/11/84   AGENT 1: AKERS, S
AGENT 2:            DEPOSIT: 25000.00   EST. NET:  7800.00
PASS DATE: 4/1/84  PASS NET: 7800.00  OFFICE COMM: 2500.00
AGENT 1 COMM: 3000.00 AGENT 2 COMM: 2300.00 COBROKER:       
COBROKER COMM:












                               47










PROPERTY LISTINGS SAMPLE REPORT






                   PROPERTY LIST BY AREA


MLS: A-1234   STATUS: O    TYPE: SFD    SOURCE: ABBB   AREA: 1
SELLER: ROBERTS, L
ADDRESS: 70 Cooney Place, Natick, MA 02455
BEDROOMS: 4  BATHS: 2   AGE: 75+  SQ FT: 2400  FINANCING: CONV
FEATURES: Older Cape, good landscaping, excellant condition
LIST PRICE: 127500.00  LIST DATE: 4/21/84  LISTING OFFICE: ABBB
CONTRACT DAYS: 90   EXPIRES: 7/21/84   AGENT 1: ARNOLD, P
AGENT 2: 



MLS: A-1178   STATUS: O    TYPE: SFD    SOURCE: ABBB   AREA: 3
SELLER: KELLEY, K 
ADDRESS: 68 Oak Street, Needham, MA 02194
BEDROOMS: 3  BATHS: 1.5 AGE: 24   SQ FT: 1800  FINANCING: CONV
FEATURES: Split, inground pool, Mitchell school
LIST PRICE: 134000.00  LIST DATE: 5/14/84  LISTING OFFICE: ABBB
CONTRACT DAYS: 90   EXPIRES: 8/14/84   AGENT 1: BERGIN, J
AGENT 2: 


























                               48










APPENDIX E.  SAMPLE SCREENS




The  following screen will be displayed when you begin  each  RES 
session:




                      MASTER MENU SCREEN


                      1.  Property Listings

                      2.  Record of Sale

                      3.  Agent File

                      4.  Reports

                      5.  Year-End Processing

                      6.  HELP

                      7.  EXIT


                      PLEASE ENTER CHOICE  

























                               49










The following screen will be displayed when you choose the 
Property Listing function on the MASTER MENU SCREEN:





                   PROPERTY LISTINGS SCREEN


SELLER                   MLS #                STATUS       SOURCE

ADDRESS                         TYPE       AREA

CITY                  STATE     ZIP        PHONE

BEDROOMS     BATHS     AGE      SQ FT      FINANCING

FEATURES

LIST PRICE             LIST DATE           LISTING OFFICE

CONTRACT DAYS     EXPIRES

AGNT 1            LIST COM         AGNT 2        LIST COM


PLEASE ENTER YOUR CHOICE  (A)dd  (S)earch  (H)ELP   (E)XIT   





















 





                               50










The following screen will be displayed when you choose the ADD
option on the PROPERTY LISTINGS SCREEN:





                 PROPERTY LISTINGS ADD SCREEN



SELLER                   MLS #                STATUS       SOURCE

ADDRESS                         TYPE       AREA

CITY                  STATE     ZIP        PHONE

BEDROOMS     BATHS     AGE      SQ FT      FINANCING

FEATURES

LIST PRICE             LIST DATE           LISTING OFFICE

CONTRACT DAYS     EXPIRES

AGNT 1            LIST COM         AGNT 2        LIST COM


PLEASE ENTER THE SELLER'S NAME OR PRESS THE ENTER KEY TO EXIT.


























                               51










The following screen will be displayed when you choose the SEARCH
option on the PROPERTY LISTINGS SCREEN:





                 PROPERTY LISTINGS SEARCH SCREEN



SELLER                   MLS #                STATUS       SOURCE

ADDRESS                         TYPE       AREA

CITY                  STATE     ZIP        PHONE

BEDROOMS     BATHS     AGE      SQ FT      FINANCING

FEATURES

LIST PRICE             LIST DATE           LISTING OFFICE

CONTRACT DAYS     EXPIRES

AGNT 1            LIST COM         AGNT 2        LIST COM


PLEASE ENTER ALL OR A PORTION OF SELLER'S NAME OR PRESS THE
ENTER KEY TO EXIT.

























                               52










The  following  screen will be displayed when your search  for  a 
property listing is successful.  The screen will also contain the 
details of the listing.





                 PROPERTY LISTINGS SEARCH SCREEN



SELLER                   MLS #                STATUS       SOURCE

ADDRESS                         TYPE       AREA

CITY                  STATE     ZIP        PHONE

BEDROOMS     BATHS     AGE      SQ FT      FINANCING

FEATURES

LIST PRICE             LIST DATE           LISTING OFFICE

CONTRACT DAYS     EXPIRES

AGNT 1            LIST COM         AGNT 2        LIST COM


PLEASE ENTER (C)hange (N)ext (P)rior (D)elete (H)ardcopy (E)XIT        

























                               53










The following screen will be displayed when you  choose to CHANGE 
the  property  listing displayed on the PROPERTY  LISTINGS SEARCH 
SCREEN:





                 PROPERTY LISTINGS CHANGE SCREEN



SELLER                   MLS #                STATUS       SOURCE

ADDRESS                         TYPE       AREA

CITY                  STATE     ZIP        PHONE

BEDROOMS     BATHS     AGE      SQ FT      FINANCING

FEATURES

LIST PRICE             LIST DATE           LISTING OFFICE

CONTRACT DAYS     EXPIRES

AGNT 1            LIST COM         AGNT 2        LIST COM


PLEASE ENTER YOUR CHANGES.

























                               54










The  following screen will be displayed when you choose the  HELP 
option on the PROPERTY LISTINGS SCREEN:





                PROPERTY LISTINGS HELP SCREEN 


PURPOSE 

The PROPERTY LISTINGS SCREEN may be used to keep a record of 
residential properties that are for sale.  The listing details 
are available for quick reference and form the basis of numerous
reports. 

FUNCTION 

The PROPERTY LISTINGS SCREEN will allow you to ADD a new property 
listing or SEARCH for a particular listing already in the file.  

Enter 'A' to ADD.   When adding a listing you are required to    
enter a seller name.  If the name is already in the file, you
will be informed by a message on the screen.   At that point, 
you'll have to decide whether to add another listing or exit. 

Enter 'S' to SEARCH.  If the name you are searching for cannot 
be found, a message will appear. When your search is successful, 
you will be given the option to CHANGE the record, view the NEXT 
or PRIOR record, DELETE the record, request a HARDCOPY of the 
record or EXIT to the MASTER MENU SCREEN.

press any key to continue...





















                               55










The following screen will be displayed when you choose the Record 
of Sale function on the MASTER MENU SCREEN:





                    RECORD OF SALE SCREEN


SELLER                                      MLS #

ADDRESS                          AREA

CITY              STATE     ZIP         PHONE

LISTING OFFICE          LIST PRICE          LIST DATE


BUYER                            STATUS

ADDRESS

CITY              STATE     ZIP         PHONE

SALE PRICE           SALE DATE          EST NET

PASS DATE            PASS NET           DEPOSIT

AGENT 1          COMM            AGENT 2         COMM

CO-BROKER          COMM            OFFICE COMM


PLEASE ENTER YOUR CHOICE  (S)earch  (H)ELP  (E)XIT  




















                               56










The following screen will be displayed when you choose the SEARCH
option on the RECORD OF SALE SCREEN:





                RECORD OF SALE SEARCH SCREEN


SELLER                                      MLS #

ADDRESS                          AREA

CITY              STATE     ZIP         PHONE

LISTING OFFICE          LIST PRICE          LIST DATE


BUYER                            STATUS

ADDRESS

CITY              STATE     ZIP         PHONE

SALE PRICE           SALE DATE          EST NET

PASS DATE            PASS NET           DEPOSIT

AGENT 1          COMM            AGENT 2         COMM

CO-BROKER          COMM            OFFICE COMM


PLEASE ENTER ALL OR A PORTION OF SELLER'S NAME OR PRESS THE 
ENTER KEY TO EXIT.



















                               57










The  following  screen will be displayed when your search  for  a 
property listing is successful.  The screen will also contain the 
details of the listing.





                RECORD OF SALE SEARCH SCREEN


SELLER                                      MLS #

ADDRESS                          AREA

CITY              STATE     ZIP         PHONE

LISTING OFFICE          LIST PRICE          LIST DATE


BUYER                            STATUS

ADDRESS

CITY              STATE     ZIP         PHONE

SALE PRICE           SALE DATE          EST NET

PASS DATE            PASS NET           DEPOSIT

AGENT 1          COMM            AGENT 2         COMM

CO-BROKER          COMM            OFFICE COMM


PLEASE ENTER (C)hange (N)ext (P)rior (D)elete (H)ardcopy (E)XIT  



















                               58










The following screen will be displayed when you choose to  CHANGE 
the sales details of a property listing:





                RECORD OF SALE CHANGE SCREEN


SELLER                                      MLS #

ADDRESS                          AREA

CITY              STATE     ZIP         PHONE

LISTING OFFICE          LIST PRICE          LIST DATE


BUYER                            STATUS

ADDRESS

CITY              STATE     ZIP         PHONE

SALE PRICE           SALE DATE          EST NET

PASS DATE            PASS NET           DEPOSIT

AGENT 1          COMM            AGENT 2         COMM

CO-BROKER          COMM            OFFICE COMM


PLEASE ENTER YOUR CHANGES.




















                               59










The  following screen will be displayed when you choose the  HELP 
option on the RECORD OF SALE SCREEN:





                  RECORD OF SALE HELP SCREEN 


PURPOSE 

The RECORD OF SALE SCREEN may be used to keep a record of 
pending and closed property sales.  When a sale has been made 
you will want to record information about the buyer and other
details.  Once papers have been passed, the remaining details
may be entered.  The information is available for quick review
and forms the basis for numerous reports. 

FUNCTION 

The RECORD OF SALE SCREEN will only allow you to SEARCH for a 
listed property.  Remember, any or all of the seller's name may 
be searched.  If the search is unsuccessful, that means you will
have to enter the property listing (MASTER MENU SCREEN #1) 
before proceeding.  Once the search is successful, you will be 
given the option to CHANGE the record, view the NEXT or PRIOR 
record as well as DELETE the record, request a HARDCOPY of the 
record or EXIT to the MASTER MENU SCREEN.

press any key to continue...
























                               60










The following screen will be displayed when you choose the  Agent 
File function on the MASTER MENU SCREEN:




                
                      AGENT FILE SCREEN


NAME

ADDRESS

CITY                    STATE     ZIP        PHONE

CURRENT YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL

PREVIOUS YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL


PLEASE ENTER YOUR CHOICE  (A)dd  (S)earch  (H)ELP  (E)XIT  





























                               61










The following screen will be displayed when you choose the  ADD   
option on the AGENT FILE SCREEN:




                
                     AGENT FILE ADD SCREEN


NAME

ADDRESS

CITY                    STATE     ZIP        PHONE

CURRENT YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL

PREVIOUS YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL


PLEASE ENTER THE AGENT'S NAME OR PRESS THE ENTER KEY TO EXIT.





























                               62










The following screen will be displayed when you choose the SEARCH
option on the AGENT FILE SCREEN:




                
                     AGENT FILE SEARCH SCREEN


NAME

ADDRESS

CITY                    STATE     ZIP        PHONE

CURRENT YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL

PREVIOUS YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL


PLEASE ENTER ALL OR A PORTION OF AGENT'S NAME OR PRESS THE
ENTER KEY TO EXIT.




























                               63










The  following  screen will be displayed when your search for  an 
agent is successful.   The screen will also contain details about 
the agent.




                
                     AGENT FILE SEARCH SCREEN


NAME

ADDRESS

CITY                    STATE     ZIP        PHONE

CURRENT YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL

PREVIOUS YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL


PLEASE ENTER (C)hange  (N)ext  (P)rior  (D)elete  (E)XIT  




























                               64










The following screen will be displayed when you choose to CHANGE
the agent record: 


                
                     AGENT FILE CHANGE SCREEN


NAME

ADDRESS

CITY                    STATE     ZIP        PHONE

CURRENT YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL

PREVIOUS YEAR COMMISSIONS

            SALES         LISTINGS           TOTAL


PLEASE ENTER YOUR CHANGES.































                               65










The  following screen will be displayed when you choose the  HELP 
option on the AGENT FILE SCREEN:





                   AGENT FILE HELP SCREEN 

PURPOSE 

The AGENT FILE SCREEN may be used to keep a record of your agent 
addresses and telephone numbers.  Additionally, it may be used to
track their current year and previous year commissions for sales
and listings.  Once a sale has been closed, you will want to
to update the current listing and sales commission fields.  RES
will automatically update the total commission field for you.
The previous year commission fields are automatically updated 
during YEAR-END PROCESSING. 

FUNCTION 

The AGENT FILE SCREEN will allow you to ADD a new agent to your 
computerized file or SEARCH for an agent who is already in the 
file.  Enter 'A' to ADD or 'S' to SEARCH.  Remember, all or a
portion of a name may be searched.  If your search is successful,
the agent record will be displayed.  You will then be prompted to
CHANGE,  view the NEXT or PRIOR record, DELETE the record or EXIT 
to the MASTER MENU SCREEN.

press any key to continue...
























                               66










The  following  screen  will  be displayed when  you  choose  the 
Reports function on the MASTER MENU SCREEN:





                REPORT MENU SCREEN


                1.  Agent Commissions 

                2.  Office Commissions 

                3.  Projected Income 
 
                4.  Pending Sales 

                5.  Closed Sales 

                6.  Property Listings 
 
                7.  REPORT DESCRIPTIONS 

                8.  EXIT 


                PLEASE ENTER CHOICE 



























                               67










The  following screen will be displayed when you choose to create 
the Agent Commissions report on the REPORT MENU SCREEN:





                  AGENT COMMISSIONS SCREEN 


Please turn your printer on and make sure your paper is aligned.  
If you want a report on a particular agent, please enter his or  
her name.  If you want a report on all your agents, press the 
ENTER  key. If you decide not to print the report, enter 'ABORT'.









































                               68










The  following screen will be displayed when you choose to create 
the Office Commissions report from the REPORT MENU SCREEN:





                  OFFICE COMMISSIONS SCREEN 



Please stand by while the Sales File is sorted... 


(After the file is sorted...)



Thanks for waiting.  The Sales File has been sorted and the 
Office Commissions report can now be printed.  Please turn your
printer on and make sure your paper is aligned.  If you decide
not to print the report, enter 'ABORT', otherwise, press the
ENTER key.
































                               69










The  following screen will be displayed when you choose to create 
the Projected Income report from the REPORT MENU SCREEN:





                   PROJECTED INCOME SCREEN


Please stand by while the Sales File is sorted...


(After the file is sorted...)


Thanks for waiting.  The Sales File has been sorted and the 
Projected Income report can now be printed.  Please turn your
printer on and make sure your paper is aligned.  If you decide 
not to print the report, enter 'ABORT', otherwise, press the
ENTER key.


































                               70










The  following screen will be displayed when you choose to create 
the Pending Sales report from the REPORT MENU SCREEN:





                  PENDING SALES REPORT SCREEN


Please turn your printer on and make sure your paper is aligned.  
If you decide not to print the report, enter 'ABORT', otherwise 
press the ENTER key.










































                               71










The  following screen will be displayed when you choose to create 
the Closed Sales report from the REPORT MENU SCREEN:





                  CLOSED SALES REPORT SCREEN 



Please turn your printer on and make sure your paper is aligned.  
If you decide not to print the Closed Sales report, enter 'ABORT'
otherwise, press the ENTER key.









































                               72










The  following screen will be displayed when you choose to create 
the Property Listings report from the REPORT MENU SCREEN:





              PROPERTY LISTINGS REPORT SCREEN 


Would you like the PROPERTY LISTINGS REPORT sorted by:
          (A)rea, (P)rice or (T)ype ?  


(After entering your choice...)


Please stand by while the Property File is sorted... 


(After the file is sorted...)


Thanks for waiting.  The Property File has been sorted by (Area,
Price  or  Type)  and the Property Listings report  can  now  be  
printed.  Please turn your printer on and make sure your paper is 
aligned.  If you decide not to print the report, enter 'ABORT', 
otherwise, press the ENTER key.



























                               73










The following screen will be displayed when you choose the REPORT 
DESCRIPTIONS option on the REPORT MENU SCREEN:





                  REPORT DESCRIPTION SCREEN 


AGENT COMMISSIONS - Show the total commissions earned (closed
sales + listing commissions) for your agents.  You will be
asked whether the report is to cover all agents or just an
individual.

OFFICE COMMISSIONS - Show the total commissions earned by your 
office. 

PROJECTED INCOME - Show your pending sale activities.  The buyer, 
seller, property address, pass date and amount will be displayed. 

PENDING SALES - Show all details relevant to pending sales.  
The report is alphabetical by seller name. 

CLOSED SALES - Show all details relevant to closed sales.  The  
report is alphabetical by seller name. 

PROPERTY LISTINGS - Depending upon your choice, unsold properties 
will be displayed by area, price or type. 


press any key to continue...























                               74










The  following screen will be displayed when you choose the Year-
End Processing function from the MASTER MENU SCREEN:





                  YEAR-END PROCESSING SCREEN 


The purpose of Year-End Processing is to perform several tasks in 
preparation for beginning a new year.  You may decide when the 
new year begins...it can be a calendar or fiscal new year.  
Whatever you decide, the following tasks will be performed:

- All closed sale records are purged from the system. 
- Current year commissions are moved to prior year commissions. 

In the event that you want to postpone the Year-End Processing for 
the moment (perhaps to generate a year-end Closed Sales report or 
an Agent Commissions report) simply type 'ABORT'.  If you are
ready to perform Year-End Processing press the ENTER  key. 

































                               75










The  following screen will be displayed when you choose the  HELP 
option on the MASTER MENU SCREEN:





                   MASTER MENU HELP SCREEN 


Welcome to your new computerized Real Estate System, or 'RES' for
short.  RES provides 5 basic functions which you may find helpful 
on a day-to-day basis.  Briefly, these functions are:

- PROPERTY  LISTINGS where you'll be able to add, view or update 
  details of local properties that are for sale. 
- RECORD OF SALE where the details of pending/closed sales are 
  recorded. 
- AGENT FILE where information pertaining to your agents may be 
  kept. 
- REPORTS where you'll be able to ask for and receive numerous 
  reports. 
- YEAR-END PROCESSING where year-end housekeeping is performed. 

The MASTER MENU SCREEN is your directory to all of the functions 
available within RES.  You'll notice that each function is 
presented to you with a preceding number.  So, for example, if
you want to add a property listing or just look at one, you can 
simple enter a '1'.  RES will immediately present a new screen 
for adding or finding the desired listing.  The other options 
work in the same manner.  

If you're still learning how to use RES, enter 'Y' for more 
helpful pointers.  Otherwise, press any other key to return to
the MASTER MENU.




















                               76










The  following  screen  will  be displayed  when  you  choose  to 
view  the  helpful  pointers at the end of the MASTER  MENU  HELP 
SCREEN:





                 GENERAL INFORMATION HELP SCREEN 



The following pointers will help you to be more comfortable with 
RES.  

When using the PROPERTY LISTINGS and AGENT FILE functions, you 
will be asked if you want to ADD a new record or SEARCH for a 
particular record. If you decide to search, RES will prompt you
for a name.  If the search is successful, the record will be
displayed and you'll be able to do any of the following: 

   CHANGE the contents of the screen.  Show the NEXT or PRIOR 
   record.  DELETE the record appearing on the screen.  EXIT to 
   the MASTER MENU SCREEN.

The RECORD OF SALE function works the same except that you do not 
have an ADD capability.  This is because a property listing must 
already exist before the details of a pending or closed sale are
entered. 

When using the REPORT function, a menu (much the same as the
MASTER MENU SCREEN) will be displayed.  Simply enter your choice.
Subsequent  screens  will be displayed to assist you in  printing 
your report. 


press any key to continue...


















                               77










APPENDIX F.  RES USER GROUP



Upon registering as a member of the RES User Group,  you will ob-   
obtain the following benefits:


-  RES version 1.2 which contains all of version 1.1 plus a client
   prospect tracking & label system, the ability to generate
   amortization schedules and an automatic client/property match-up.

-  Free telephone support.  Telephone support will consist of an- 
   swering only RES-related questions.

-  Free  consultation  time to discuss modifications to RES  that 
   you may require.   
  

To register as a member, please complete the following page and
mail to:

                   MicroServices
                   General Delivery
                   Harborside, ME 04642






























                               78










G.  REAL ESTATE SYSTEM USER GROUP REGISTRATION FORM



NAME: ___________________________________________________________   
                               
ADDRESS: ________________________________________________________

CITY: _______________________________ STATE: ______  ZIP:________ 

CONTACT PERSON: _________________________________________________

PHONE #: _________________________________ DATE: ________________

COMPUTER SYSTEM: ________________________________________________

COMMENTS: _______________________________________________________
  
_________________________________________________________________

_________________________________________________________________





Make $25 check payable to: MicroServices

Send completed form and check to:  MicroServices
                                   P.O. Box 40
                                   Brooksville, ME 04617
























                               79

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0656

     Volume in drive A has no label
     Directory of A:\

    AGENT    DBF      1190   1-01-80  12:12a
    AGNTNAME NTX      2048   1-01-80  12:12a
    FILES656 TXT      1311   3-02-89   9:45a
    GO       BAT        38   5-09-88   3:54p
    GO       TXT       540   5-09-88   3:53p
    MANUAL   BAT       147   2-27-89   1:57p
    RES      DOC    103296   1-01-80   3:23a
    RES      EXE    181584   1-01-80   2:59a
    SALE     DBF      1497   1-01-80  12:05a
    SELLER   NTX      2048   1-01-80  12:05a
           10 file(s)     293699 bytes
                           23552 bytes free
