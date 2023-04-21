---
layout: page
title: "PC-SIG Diskette Library (Disk #3256)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3256/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3256"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MED_ICD9.DOC

{% raw %}
```





                            MED_ICD9


                MS-DOS DOWN LOAD & SEARCH UTILITY
                               for
      The American Medical Association ICD-9-CM Code Table


                               by





                         MEDshare, Inc.
                      4100 West 15th, #103
                       Plano, Texas  75093

                         1-800-233-0560










               Copyright (C) 1992, MEDshare, Inc.
                       All Rights Reserved


     


While  the American Medical Association distributes (for a  small 
fee) their ICD-9-CM codes in an ASCII format on either 3 1/2"  or 
5  1/4" floppy disks, it does not provide you with  the  computer 
software  necessary to access this information.   MEDshare,  Inc. 
has developed 'MED_ICD9.EXE' ICD-9-CM search utility to allow all 
medical  practitioners and medical billing professionals  to  use 
their  MS-DOS micro computer to quickly locate  desired  ICD-9-CM 
codes.   Using  your computer to search for  specific  diagnostic 
codes will save you valuable time and at the same time reduce the 
need  to  keep those large ICD-9 code books within  reach.   This 
'MED_ICD9'  program can be used either on a single user  computer 
or with multiple users on a network of connected micro computers.  
No  other  software  is required to be  purchased  to  make  this 
utility function other than purchasing diskettes of the AMA  ICD-
9-CM  code  (table).  If you are a current user of  the  MED#1  - 
Medical  Office  Management System you will gain the  ability  to 
down  load selected ICD-9-CM codes directly into the MED#1  ICD-9 
table.

Almost  all software currently on the market must be  fully  paid 
for before you - the user - are given the ability to use or  EVEN 
TEST  a program to see how it covers your needs.  Anyone who  has 
purchased software will soon develop a small library of  programs 
they  had  to purchase before they found out  that  the  programs 
would  not provide the needed functions.  All software  developed 
by  MEDshare,  Inc.  is  distributed  on  a  'TRY-BEFORE-YOU-BUY' 
concept  that  eliminates  this excessive up  front  cost.   With 
software from MEDshare, Inc. you know if it will cover your needs 
before you purchase it.  With 'MED_ICD9.EXE' you have immediate - 
unrestricted access - to all of its features the minute you  load 
it into your computer.  You can load the entire AMA ICD-9-CM code 
table into it and utilize its searching functions immediately.  

                        *****************
BECAUSE MEDSHARE, INC. IS IN THE BUSINESS OF DEVELOPING  SOFTWARE 
FOR A PROFIT YOU WILL BE PRESENTED WITH TWO (and after 90 days  - 
three)  PRODUCT  INFORMATION  SCREENS  EACH  TIME  YOU  LOAD  THE 
PROGRAM.  EACH OF THESE SCREENS WILL BE DISPLAYED FOR 15  SECONDS 
EACH.   UPON RECEIVING YOUR PAID REGISTRATION YOU WILL RECEIVE  A 
UNIQUE  PASSWORD  (REGISTRATION NUMBER) THAT  WILL  REMOVE  THESE 
PROMOTIONAL  SCREENS FROM YOUR VIEW.  THIS IS THE ONLY  INCENTIVE 
BUILT  INTO THIS 'MED_ICD9' PROGRAM TO ENCOURAGE YOU TO  REGISTER 
YOUR  USAGE.   KEEP  IN  MIND THOUGH  THAT  WITHOUT  'PROFIT'  NO 
BUSINESS  CAN STAY IN EXISTENCE AND OTHER PROGRAMS YOU  MAY  FIND 
USEFUL MAY NEVER BE DEVELOPED.

IF  YOU  FIND 'MED_ICD9' TO BE BENEFICIAL TO YOU PLEASE  SEND  IN 
YOUR PAID REGISTRATION.
                       ******************


                              INDEX

System requirements...........................

American Medical Association ICD-9-CM codes...

How to register your use of 'MED_ICD9'........

CONFIG.SYS modifications:
     Single user systems......................
     Network users............................

Sub-directory setup:
     Users not using MED#1....................
     Current MED#1 users......................

Initial setup:
     Sample ICD-9-CM table....................
     Removing sample ICD-9-CM table...........

Search functions:
     Search by code...........................
     Search by description (key words)........
          (N)ext function.....................
          Need for correct spelling...........
     Capture ICD-9 code and transfer to MED#1.

Utilities:
     Rebuilding file index pointers...........
     Load AMA ICD-9-CM codes to disk..........
     Delete ICD-9-CM codes from disk..........
     Update personalization information.......
     Printing 'User Registration' form........
     Entering your 'Unique Registration No.'..



                       SYSTEM REQUIREMENTS
                       *******************

                 MS-DOS Version 3.3 (or greater)
                         640k of Memory
           * Hard disk with 5 Mega bytes of free space 
          1 Floppy disk drive (either 3 1/2" or 5 1/4")
              Monitor (either color or monochrome)
                          Printer (any)

* To load and test the MED_ICD9 program you will only need  about 
1  Mega bytes of disk space.  To load the full AMA ICD-9-CM  code 
table you will need an additional 3+ Mega bytes of disk space.




           AMERICAN MEDICAL ASSOCIATION ICD-9-CM CODES
           *******************************************

MEDshare,  Inc.  does not distribute, nor will  ever  distribute, 
copies  of  the AMA ICD-9-CM code tables.  The  sample  table  of 
about  100 ICD-9-CM codes  distributed with the MED_ICD9  program 
is only provided to allow you to test the basic functions of  the 
MED_ICD9  program.   Before you can make productive  use  of  the 
MED_ICD9  program you will need to purchase your copy of the  AMA 
ICD-9-CM  codes directly from the American  Medical  Association.  
You  can order your copy of the ICD-9-CM on diskettes by  writing 
to:

                  AMERICAN MEDICAL ASSOCIATION
                      100 ENTERPRISE PLACE
                         DOVER, DE 19901
                         1-800-621-8335

    Be sure to request: Item # OP050891 - 91 ICD9 FLOPPY DISK

(Note  -  The AMA does not distribute this  information  free  of 
charge.   If you are a member of the AMA you can expect to pay  a 
fee  of around $150.00.  If you are not a member of the AMA  your 
fee will be around $180.00.)

The  MED_ICD9 program has only been tested using this version  of 
the  AMA code table.  Prior versions, or newer versions, may  not 
work  correctly with our program.  If you have any problems  with 
the  table you have received from the AMA please give us a  call.  
A newer version of MED_ICD9 may be available and may be  required 
to be used.



             HOW TO REGISTER YOUR USE OF 'MED_ICD9'
             **************************************

                           IT'S SIMPLE!  

1. Bring up the 'MED_ICD9' program.

2. Pull up the 'Utilities' Sub-Menu.

3. Verify and update your personalization information.

4. Print out your 'User Registration' form.

5.  Complete  any missing information. (Be sure to  indicate  the 
size of disk you are currently using: 5 1/4" or 3 1/2".)

6. Send in your 'User Registration' form along with the  required 
registration fee ( $100.00 single user, $200.00 network) to:

                         MEDshare, Inc.
                      4100 West 15th, #103
                       Plano, Texas  75093

6.  Upon receipt of your paid registration, MEDshare,  Inc.  will 
release  to  you a unique user registration number that  you  can 
enter  into your system.  The entry of this  unique  registration 
number will: A) clear all 'Un-registered' messages from the  sign 
on screen, and B) remove the product promotion display screen.

7. If any new changes have been made to the MED_ICD9 program, you 
will also receive a new copy of the updated program.

(Note - If you are in a hurry to receive your registration number 
you can request that you be telephoned upon receipt of your  paid 
registration.)


                    CONFIG.SYS Modifications
                    ************************

SINGLE  USER  SYSTEMS:  If you are a current user of  MED#1  your 
current  system  configuration will handle  all  requirements  by 
MED_ICD9.  If you are not a current MED#1 user you should  review 
your current CONFIG.SYS values and ensure that you have at  least 
'FILES=20'  and 'BUFFERS=9'.  Any values greater than  these  are 
sufficient to allow MED_ICD9 to operate correctly.


NETWORK  USER  SYSTEMS:  MED_ICD9 will require the use of  up  to 
five  file  handles.   Ensure that your  CONFIG.SYS  file  has  a 
'FILES=n' value large enough to handle the total number of  files 
equal to the sum of the largest application(s) available to  each 
user.  MED_ICD9  network user requirement should work  well  with 
this calculated value.

(Note:  Sometimes  you may encounter a 'sharing'  violation  when 
trying  to  use MED_ICD9 on a network.  In almost  all  of  these 
situations  you can correct this by setting the ATTRIBUTE of  the 
MED_ICD9.EXE module to 'READ ONLY'. Read the DOS 'ATTRIB' command 
instructions on how to do this.)


PEER  TO  PEER NETWORK USERS:  After you have loaded all  of  the 
distribution files onto your hard disk you will need to create  a 
small  file  named 'PCNETLIB.LOK' used by your network  to  track 
file status.  The 'MAKELOK.COM' program will create this file for 
you.  To execute the 'MAKELOK.COM' program just enter:

                        C>MAKELOK <enter>

This 'PCNETLIB.LOK' file must reside in the same sub-directory as 
your 'MED_ICD9' data files.



                          INITIAL SETUP
                          *************

1.  If you are a current user of MED#1 install MED_ICD9.EXE  into 
the  same  sub-directory  that you have  installed  the  MED1.EXE 
module in.  

If  you are not a current user of MED#1 you should create a  sub-
directory  to contain the MED_ICD9.EXE and all  distribution  and 
data files.  To do this enter the following command:

                         MD\MED1 <enter> 
        (this will create a sub-directory named 'MED1'.)

2. Make the MED1 sub-directory your current default sub-directory 
you are operating from by entering:

                         CD\MED1 <enter>

3.  Load the MED_ICD9 distribution disk into your  computers  'A' 
drive  and  copy  its  contents into  the  current  default  sub-
directory.

                       COPY A:*.* <enter>

Upon  completion of this copy, remove the  MED_ICD9  distribution 
disk from the 'A' drive and place in a safe place.

4.  All data files needed by MED_ICD9 are created the first  time 
you  load the program.  To load the MED_ICD9 program just enter:

                        MED_ICD9 <enter>

If you are not a current MED#1 user, you will be requested  first 
to  enter in your personalization information.  This  information 
is  required before you can continue.  The information  requested 
will  consist  of  your  name and  address  and  the  disk  drive 
reference your data files will reside on. 

If  you  are a current MED#1 user, the information  contained  in 
your  MED#1  personalization record will be used  to  personalize 
your  copy  of the MED_ICD9 program and will use  the  same  disk 
drive that MED#1 uses for its data files. (Note - The total space 
required  on your hard disk for a full set of ICD-9-CM codes  and 
related index files will be about 4 mega-bytes.  Be sure you have 
sufficient free disk space before loading the full set of  ICD-9-
CM codes.)

After  your data files have been built you will be asked  if  you 
are  installing  MED_ICD9 for either 'SINGLE USER'  or  'NETWORK' 
use.  Select the correct configuration and press the 'ENTER' key.


(Note: When you initially build your MED_ICD9 data files you will 
also  be  loading a limited sample of the AMA  ICD-9-CM  codes  - 
about 100 codes.  Before you attempt to load the full set of  AMA 
ICD-9-CM  codes you will need to delete this sample set of  codes 
otherwise  you  will have these codes duplicated.  This  is  done 
through the use of the 'UTILITY - DELETE ICD-9 CODES'.)


 ** YOU CAN NOW TEST YOUR 'MED_ICD9' PROGRAM SEARCH FEATURES. **


                        SEARCH FUNCTIONS
                        ****************

SEARCH  BY  CODE:   Searching  by CODE is  the  simplest  of  all 
searches.  With this search function you can immediately  display 
all ICD-9 codes starting with a given value.  To locate codes  in 
the '100' code range just enter the value '100'.  The first  code 
equal  to  - or greater than - the entered search value  will  be 
located  and  displayed  to you.  Keep in mind that  if  you  are 
looking for a code value of '10' you will need to insert a '0' in 
front of this value to make it '010'.  All of the ICD-9-CM  codes 
are  loaded in a code format of three leading digits,  a  decimal 
point separator, and up to a two digit trailing number.


SEARCH  BY DESCRIPTION:   The true power of MED_ICD9  search  and 
display feature is when you need to locate ICD-9-CM codes and you 
only know certain key words to look for.  You can enter in up  to 
three key words (or portions of key words) to search for.  You do 
not need to enter full key words BUT YOU MUST SPELL CORRECTLY THE 
PORTIONS  OF  THE KEY WORDS YOU ARE SEARCHING  FOR.   INCORRECTLY 
SPELLED WORDS CANNOT BE LOCATED!  Each ICD-9-CM code on file  can 
have up to 250 characters of descriptive text.  When you use  KEY 
WORDS as your search arguments the MED_ICD9 program will look for 
elements of text that will match.  Sequence of KEY WORD entry  is 
not  important as only one key element is looked for at  a  time.  
Once one key element is located then the MED_ICD9 program  checks 
for  the  existence of the remaining search elements  within  the 
total text for the located ICD-9 code.  If no match is found then 
the search continues for the next ICD-9-CM code that has a  match 
for the KEY WORDS you are looking for.  ONLY THOSE ICD-9-CM CODES 
THAT  HAVE TEXT THAT EXACTLY MATCH THE KEY WORDS OF  YOUR  SEARCH 
ARGUMENT WILL BE LOCATED AND DISPLAYED TO YOU.

NEXT search:  The 'NEXT' search function is only available to you 
when you SEARCH BY KEY WORD.  With the 'NEXT' search function the 
MED_ICD9 program will continue the search starting with the  LAST 
successful search ICD-9 code.  If you have used the arrow keys to 
scroll  up and down the display of ICD-9 codes you could be  past 
the  ICD-9  code  that  will be  located  by  the  'NEXT'  search 


function.  THE 'NEXT' SEARCH FUNCTION STARTS ITS SEARCH FROM  THE 
ICD-9 CODE LOCATED IN THE LAST SUCCESSFUL SEARCH.

CORRECT SPELLING:  When you enter key words to search on you MUST 
correctly  spell  that element of the key words you use  in  your 
search  argument.   INCORRECT SPELLING CANNOT BE USED  TO  LOCATE 
ICD-9  CODES  IN SEARCHING TEXT.  You do not need to  start  with 
first  characters in each key word to search for.  You only  need 
to  enter  correctly spelled portions of the key  words  you  are 
searching for.  CORRECT SPELLING IS A MUST.


CAPTURE AND TRANSFER: If you are not a current user of MED#1  you 
will not be displayed this feature.  If you are a current user of 
MED#1  you have the ability to capture the located ICD-9-CM  code 
and  transfer  a  copy  of it  directly  into  your  MED#1  ICD-9 
(diagnostic)  code table.  The descriptive text of each  ICD-9-CM 
code in the MED_ICD9 data file can be up to 250 characters.   The 
maximum  size  of the descriptive text you can  transfer  to  the 
MED#1 ICD-9 code table is 32 characters.  Due to this  difference 
in descriptive text size you have the ability to modify the  text 
description  being passed to MED#1.  If you capture and  transfer 
an  ICD-9-CM code that you already have in your MED#1 ICD-9  code 
table - YOU WILL NOT DUPLICATE THAT CODE BUT YOU WILL MODIFY  ITS 
DESCRIPTIVE TEXT TO THAT OF THE TEXT YOU ARE TRANSFERRING.   With 
this  'CAPTURE  AND  TRANSFER' capability you  can  easily  build 
and/or maintain your MED#1 ICD-9 code table.


              UTILITY - RE-INDEX ICD-9-CM DATA FILE
              *************************************

It  is  possible that over time your ICD-9-CM data  file  index's 
(pointer files that maintain your data file in code sequence) can 
become  corrupted.   This does not mean your data  files  are  in 
error,  it  just  means  that  the  MED_ICD9  program  will  have 
difficulty in locating specific ICD-9 codes.  Use this 'RE-INDEX' 
utility to regenerate your ICD-9-CM file pointers.


            UTILITY - LOAD AMA ICD-9-CM CODES TO DISK
            *****************************************

The  master ICD-9-CM code set that you will receive from the  AMA 
will consist of four ASCII data files.  These data files are in a 
special  text format that can be read by almost all text  editors 
and  by specific programs designed to process this data.  Due  to 
the  variable  length  of each  ICD-9-CM  code  descriptive  text 
element  (maximum of 250 characters of text per code), the  ASCII 
files  distributed by the AMA can contain from one to four  lines 
of  ASCII  text.   Before you can  utilize  the  MED_ICD9  search 
features,  you  must first load these ASCII files onto  the  hard 
disk  in a format the program can use.  This is done through  the 


use  of  this utility.  When you receive your AMA  ICD-9-CM  code 
files they will be on from one to four floppy disks and each disk 
will  contain at least one block of ICD-9-CM codes and text,  and 
up to four blocks of codes and text.  

Each ASCII code block will have a file type of 'ASC'.  Only those 
files  that  have a file type of 'ASC' will be looked at  by  the 
MED_ICD9  'LOAD' utility.  When you are asked to enter  the  disk 
drive reference you are loading these ASCII code blocks from  the 
MED_ICD9  program will display the names of the 'ASC' type  files 
found on that disk.  You then are presented with the name of  the 
first file displayed and asked if you wish to load that file onto 
your  hard disk.  If you have more than one file name listed  you 
can change the name of the file to be loaded to any of the  other 
displayed  names.   The  file having the name that  you  wish  to 
process will then be accessed by the MED_ICD9 program and  loaded 
onto  your  hard disk in a format that the MED_ICD9  program  can 
read  and  search.  This cycle will be repeated  until  you  have 
loaded  all  distributed ASCII code files onto  your  hard  disk.  
TAKE  CARE NOT TO DUPLICATE YOUR LOAD FILE NAME REQUEST  AS  THIS 
WILL RESULT IN DUPLICATE SETS OF ICD-9-CM CODES BEING PLACED INTO 
YOUR MED_ICD9 DATA FILE. 

(Note:   When  the  MED_ICD9  program  data  files   were   first 
initialized  a sample set of ICD-9-CM codes were loaded into  the 
newly  created  MED_ICD9  data file.  There are  only  about  100 
sample codes in this set but unless you delete these codes before 


you load your AMA ICD-9-CM ASCII code files, you will end up with 
a  duplicate set of these 100 codes in your search file.   PLEASE 
BE SURE TO DELETE ALL CODES IN YOUR MED_ICD9 DATA FILE BEFORE YOU 
LOAD YOUR FULL AMA ICD-9-CM CODE SET.)


            UTILITY - DELETE ICD-9-CM CODES FROM DISK
            *****************************************

If  for some reason you must remove and/or replace a  section  of 
your AMA ICD-9-CM master code set from your hard disk search data 
file  you will need to use this utility.  There are  three  basic 
functions provided by this utility:
 
1)  remove all entries in your ICD-9-CM search data  file.   This 
utility  will  return to you a blank ICD-9-CM search  data  file.  
(Note  -  When you first initialized your MED_ICD9  program  data 
files  a sample set of 100 ICD-9-CM codes were setup for  you  in 
your  ICD-9-CM  search data file.  You must  delete  these  codes 
before you load your full set of AMA ICD-9-CM codes.  Failure  to 
remove  these  sample codes will result in  duplicates  of  these 
codes in your search data file.)  


2)  remove  a selected block of codes from your  ICD-9-CM  search 
data  file  (these defined blocks of ICD-9-CM codes  are  grouped 
identically to the range of codes distributed in each of the  AMA 
ICD-9-CM 'ASC' text file code blocks).  If you have a damaged set 
of  distribution disks from the AMA, or for some reason you  wish 
to reload a section of your MED_ICD9 search data file, use one of 
these specific file deletion routines.  You will then be able  to 
reload  from the AMA ICD-9-CM master distribution  disk(s)  those 
specific codes by selecting the correct 'ASC' distribution file.

3)  reorganize  your ICD-9-CM search data base into  the  primary 
order  of CODE.  All new ICD-9-CM codes are physically loaded  at 
the  end of the current MED_ICD9 search data file.  If  you  load 
the AMA ICD-9-CM distribution files out of order, or delete a set 
of ICD-9-CM codes from your search data file and reload them, you 
should reorganize your ICD-9-CM file back into CODE order.   This 
will  require  about 2 Mega-bytes of disk space.   The  resulting 
ICD-9-CM  search data file will be in CODE order which will  make 
your  KEY  WORD  search start with the lowest code  on  file  and 
progressively advance through to the end of the file.



          UTILITY - UPDATE PERSONALIZATION INFORMATION 
          ********************************************

Before  you register your use of the MED_ICD9 program you  should 
be  sure that your personalization information is correct.   This 
personalization consists of your name and address and your use of 
the  system as either a 'SINGLE USER' or 'NETWORK USER'.  If  you 
are  a current user of MED#1 you will not be able to change  your 
personalization name and address because the name and address you 
are using for MED#1 will be used.  Keep in mind that your  unique 
registration number (password) will be derived from your name and 
postal  zip code.  Any change made later to your name  or  postal 
zip code will make your unique registration number invalid.  

      PLEASE VERIFY THE ACCURACY OF YOUR NAME AND ADDRESS!



             UTILITY - PRINT USER REGISTRATION FORM
             **************************************

To  register your usage of the MED_ICD9 program you will need  to 
submit your registration form along with the proper  registration 
fee.    Your  registration  fee  is  set  depending   upon   your 
registration of either a 'SINGLE USER' or 'NETWORK USER' usage of 
the MED_ICD9 program.  Each usage type will result is a  specific 
unique  registration  number for you to enter into  the  MED_ICD9 
program.   Each registration number is unique. You cannot  use  a 


'SINGLE  USER'  registration  number to register  as  a  'NETWORK 
USER'.

PLEASE VERIFY THE ACCURACY OF YOUR NAME AND ADDRESS AS ANY CHANGE 
LATER  TO  THIS INFORMATION WILL MAKE  YOUR  REGISTRATION  NUMBER 
INVALID!

After you have printed out your 'USER' registration form be  sure 
to  complete  any missing information.  Be sure to  indicate  the 
size of disk you are using on your computer system ( 5 1/4" or  3 
1/2").   Also if you need a copy of the MED_ICD9 program for  use 
on  a NOVELL 2.XX or greater network system, be sure to  indicate 
you require a 'NOVELL' specific program version - NOVELL requires 
special  file handling features. (NOVELL LITE - This  version  of 
NOVELL  does not require any special file handling  features  and 
therefore  does  not  require - AND YOU SHOULD NOT ASK  FOR  -  a 
NOVELL specific version of MED_ICD9.)

Submit  a  signed  copy  of  your  'USER  REGISTRATION'  form  to 
MEDshare,  Inc.  -  along  with  a  check  for  the  proper  user 
registration fee.  Upon receipt of both your 'USER  REGISTRATION' 
form and registration fee MEDshare, INC. will release to you your 
unique registration number and if necessary a more current  copy 


of the MED_ICD9 search program.  THIS NUMBER IS UNIQUE TO YOU AND 
YOU ALONE.  ANY CHANGE IN YOUR NAME OR POSTAL ZIP CODES WILL MAKE 
YOUR REGISTRATION NUMBER INVALID.  PLEASE REVIEW THE ACCURACY  OF 
YOU NAME AND ADDRESS BEFORE SUBMITTING YOUR REGISTRATION FORM.


            UTILITY - ENTER USER REGISTRATION NUMBER
            ****************************************

With  this utility you can enter your unique  'USER  REGISTRATION 
NUMBER'  into the MED_ICD9 program.  Once you enter  your  number 
you  will  then exit from the MED_ICD9 program and  be  asked  to 
reload  it into memory.  YOUR 'USER REGISTRATION NUMBER' IS  ONLY 
VALIDATED  AT  THE  TIME YOU LOAD  THE  'MED_ICD9'  PROGRAM  INTO 
MEMORY.   If  you  have not entered a  valid  'USER  REGISTRATION 
NUMBER'  or have changed your name or address, your  user  unique 
registration number will be invalid. 

Once you have entered a VALID 'USER REGISTRATION NUMBER' you will 
immediately notice two items of change:

1.  Your  'MED_ICD9'  sign-on  screen will  no  longer  say  'UN-
REGISTERED' anywhere on it.

2.  The MEDshare, Inc. product information display  screens  that 
appeared  for fifteen seconds each will no longer  display.   YOU 
WILL HAVE IMMEDIATE ACCESS TO THE ICD-9-CM SEARCH FUNCTIONS.



              VALUE OF BECOMING A REGISTERED USER
              ************************************

Registered users of 'MED_ICD9' will also receive notification  of 
new releases of the 'MED_ICD9' program and other programs as they 
become  available.  New releases of the AMA ICD-9-CM  code  table 
may  not  be the same format as that currently supported  by  the 
MED_ICD9  program.   Registered  users will  have  the  right  to 
purchase  updates at a reduced price (normally 50% or less) of  a 
new registration.  In the near future MEDshare, Inc. should  also 
have a search module for CPT codes.



                      HELP SPREAD THE WORD
                      ********************

The  'MED_ICD9' program is distributed in a form that allows  all 
potential  users  to  'TRY  BEFORE YOU BUY'.   If  you  find  the 
'MED_ICD9' program to be of value to you and you feel that others 
you  know could possible make use of its features - FEEL FREE  TO 


GIVE THEM COPIES OF THE MED_ICD9 PROGRAM DISK.  KEEP IN MIND THAT 
YOUR  REGISTRATION NUMBER IS UNIQUE TO YOU AND WILL NOT WORK  FOR 
ANYONE ELSE.

MEDshare, Inc. strongly believes in the value of 'WORD OF  MOUTH' 
advertising.   Our  entire product line of medical  programs  are 
distributed  on a 'TRY BEFORE YOU BUY' concept.  ALL  USERS,  AND 
POTENTIAL USERS, OF OUR PROGRAMS ARE ENCOURAGED TO GIVE COPIES OF 
OUR  PRODUCTS TO ANYONE THEY FEEL COULD BENEFIT FROM  THEIR  USE.  
OUR  BUILT  IN  USER REGISTRATION CONCEPT THAT  MAKES  EACH  USER 
REGISTRATION  UNIQUE ALLOWS THIS TYPE OF DISTRIBUTION.  Also,  as 
long  as  our  primary source of new users comes  from  'WORD  OF 
MOUTH'  advertising  our product pricing will be kept  low.   The 
cost  of  advertising is one of the major  reasons  most  medical 
software packages cost so much.

PASS  ON  COPIES OF ALL 'MEDshare, Inc.' PRODUCTS TO  ANYONE  YOU 
FEEL WILL BENEFIT FROM THEIR USE.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3256

     Volume in drive A has no label
     Directory of A:\

    ICD9TEMP DBF     31232   7-22-92   8:51a
    MAKELOK  COM       200   7-04-91   1:00a
    MED_ICD9 DOC     27629   7-21-92   2:52p
    MED_ICD9 EXE    286601   7-31-92  10:03a
    PRTMANL  BAT        24   7-21-92   1:55p
    README   1ST      7290   7-21-92   6:53p
    GO       TXT       694  11-11-92  12:59p
    GO       BAT        27  11-11-92  12:21p
            8 file(s)     353697 bytes
                            4096 bytes free
