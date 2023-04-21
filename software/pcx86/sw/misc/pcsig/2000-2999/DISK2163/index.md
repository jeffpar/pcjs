---
layout: page
title: "PC-SIG Diskette Library (Disk #2163)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2163/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2163"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME FINDER"

    A sophisticated database program specifically for Real Estate Agents
    and property consultants, HOME FINDER puts your listings at your
    fingertips.
    
    It sets up three databases: properties for sale, properties for rent,
    and properties currently rented.  Each database can have up to 250
    records (the registered version holds 20,000 records).  Search quickly
    for properties that match a customers requirements in size, number of
    bedrooms, location, type of dwelling, swimming pool, parking, and many
    other criteria.  Add and change criteria to meet your needs.
    
    The program is sophisticated enough to also search for properties that
    almost match a customer's requirements as well.  Searches can also be
    done by address or any keyed word or phrase.  Results are displayed on
    the screen or you can print them . Impress your clients with personal
    reports of the properties they are interested in.  HOME FINDER's
    client report format never prints vital property information that would
    let a customer simply go to the property owner.
    
    HOME FINDER is an easy-to-use program that lets you move easily
    through its series of menus using your cursor keys.  Help screens
    either automatically appear as you move through the operations or can
    be called up whenever you need them.  You can print reports in
    five different formats.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2163.TXT

{% raw %}
```
Disk No: 2163                                                           
Disk Title: Home Finder                                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: Home Finder                                              
Author Version: 3.0                                                     
Author Registration: $65.00                                             
Special Requirements: A hard drive.                                     
                                                                        
HOME FINDER is a sophisticated database program written specifically    
for Real Estate Agents and property consultants.  HOME FINDER keeps     
all your listings easily available and very easy to retrieve.           
                                                                        
HOME FINDER sets up three databases, one for properties for sale, one   
for properties for rent and one for properties that are currently       
rented.  Each database can contain up to 250 records, (the registered   
version will hold 20,000 records in each database!)  Each database can  
be searched quickly for properties that match a customers requirements  
in size of property, number of bedrooms, location, type of dwelling,    
swimming pool, parking, and many other criteria.  You add and change    
criteria to meet your needs.  The program is sophisticated enough to    
also search for properties that almost match a customer's requirements  
as well.  Searches can also be done by address or any keyed word or     
phrase.  The results of your search are displayed on the screen or      
printed out.  Impress your clients with personal reports of the         
properties they are interested in.  HOME FINDER's client report format  
never prints vital property information that would allow a customer to  
simply go to the property owner.                                        
                                                                        
HOME FINDER is an easy to use program that lets you move easily         
through its series of menus using your curser keys.  Help screens       
either automatically appear as you move through the operations or can   
be called up whenever you need them.  You can print reports in any of   
five different formats in either draft or letter quality.  This is an   
easy to use, professional standard program to put the listings you      
want in your customer's hands.                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FINDHELP.TXT

{% raw %}
```
        HOW TO SEARCH FOR A PROPERTY WHICH MEETS YOUR REQUIREMENTS                                                                                               1)  First of all you may choose which districts to look in.                    If you enter 0 into all 3 choices for district, then the computer will          look in all the districts for properties which meet your other requirements.    However you may confine the search to 1, 2 or 3 particular districts by         entering the district numbers you are interested in.                                                                                                             2)  Next you may enter the types of property you are looking for.              Up to 3 types my be specified, leaving all blank will search through all        types for properties which meet your other requirements.                                                                                                         3)  Next you may enter values for the maximum rent you are prepared to         pay (or maximum sale price ), the minimum floor area that you require,          and the minimum number of bedrooms required.  If these are unimportant          use  a high rent/sale value and low values for the area and bedrooms.                                                                                            4)  For the other choices, eg parking, a Y means Yes you want it,              an N means No you don`t want it and a blank means it doesn`t matter.                                                                                             5)  You may enter U, F, S, or a blank for Un/Furnished, Serviced or            no particular requirement in the furnished/serviced choice.                                                                                                                        PRESS ANY KEY TO RETURN TO THE PROGRAM                                                                                                       
```
{% endraw %}

## HFMANUAL.TXT

{% raw %}
```
                          CONTENTS
An OVERVIEW of the program ................................  2

INSTALLATION ..............................................  3

What DATA is STORED by the program ........................  3

How to use Home Finder - THE MENUS ........................  6

The MAIN menu - Selecting a Database ......................  6

The TASK menu - The Primary Functions .....................  7

The UPDATE menu - Changing the stored records ............   7

ADDING Records ............................................  7

EDITING Existing Records ..................................  8

DELETING Records ..........................................  9

RESTORING Deleted Records .................................  9

TRANSFERRING Records between Databases ....................  9

PACKING the Databases .....................................  9

The LOCATE Menu ...........................................  10

FINDING Records by REQUIREMENT ............................  10

SEARCHING for Records by ADDRESS ..........................  10

LOCATING Records by Entry/Deletion Date ...................  11

The VIEW Menu .............................................  11

The PRINT Menu ............................................  12

ROUTINE USAGE .............................................  12

HARDWARE Requirements .....................................  13

The SETUP Program - Configuring to suit your computer .....  14

Video Mode ................................................  14

CHANGING the VARIABLE FIELDS ..............................  15

PRINTER DRIVER - Setup for your printer ...................  15

The DATA CHECK variables ..................................  16

Changing up the District Help Screen ......................  16
OVERVIEW


Home Finder is a purpose written computer database  program for
Real Estate Agents and Property Consultants, and the data to be
stored is dedicated to this purpose;  however some  of the data
fields can be re-configured using the  setup program.

The program  sets  up  3  databases,  one  each  for properties
currently offered for sale,  properties  currently  offered for
rent  and properties  which have been let and which  are  to be
re-called at an appropriate date.

Each database can contain up to 250  (20,000 in the  registered
version) entries, and because selection data is kept in memory,
can be searched quickly for properties which meet  a customer's
requirements (If  the  exact  requirements  cannot  be  found a
search  will  be  made  for properties  which  almost  suit the
requirements).  Similarly a search for properties which contain
a certain word or phrase in  their address can be  made quickly
and effortlessly.   After making a search  all matching entries
can be displayed on screen and printed out if required.

The strength  of  the program is  its  extremely  friendly user
interface.   All  the tasks  carried  out  by  the  program are
controlled by the user  either by moving  a marker  around on a
menu  list,  or by  pressing  a single  key  in  response  to a
question asked by the computer.  In the case of menu selections
a message describing the current  function appears on screen as
the marker is moved from choice to choice.  If an incorrect key
is pressed the computer will respond with an  appropriate error
message and the user can re-try.

All critical activities such as  the deletion of a  record from
the  database  require double confirmations  to proceed, before
being carried out.

Help Screens to  assist  in  various aspects of  the operations
appear either  automatically or  as  requested by  the  user as
appropriate.

Data entry and the editing  of existing entries are  checked to
ensure  that  sensible  and legal (user set)  values  are being
entered.

Reports are printed in 5  formats: full reports, medium reports
and short reports for internal use,  and a long and medium type
report for issuing to clients. In addition a choice of draft or
letter  quality  printing  (subject  to   printer  ability)  is
available.   The program  can  be  configured  to  a particular
printer using the setup program.  Printing is spooled from disk
allowing the user  to  continue   using Home Finder.


INSTALLATION

Computers with a Hard Disk:

Place the diskette in drive A:  and type HFINST this will cause
the following actions to take place:

     A directory called \HOMEFIND will be created on drive C: 

     All the files  on the diskette will  be copied to  the new
     directory;

     a program called  HFMAKE will be  run which will  create 3
     test databases to assist your evaluation of the program;

Computers without a Hard Disk:

   Copy all the files except the manuals onto  a new disk, then
   use the new disk and type HFMAKE, to make 3 databases on it;

All Computers:

     if you are using a computer with a monochrome  adaptor you
     must use the configuration program  by  typing  HFSETUP to
     reset  the video mode;  it is  suggested that  you  do not
     alter any of the other setup settings at this stage.

     Home  Finder  can  then  started  by  typing   HF  at  the
     appropriate DOS prompt.


WHAT IS STORED ?

Most  of  the fields  to  store the information are  fixed, and
dedicated to  the nature  of a real-estate  program.  However 6
fields can be altered using the setup program.


Each entry stores the following information:
     
     The  date  the  entry  was  entered  or  deleted,  this is
     obtained automatically from the computer clock;
     
     The type of the property, House, Condominium, Apartment,  
     Town House or Row House, input the initial letters;
     
     The number of stories, enter a number between 1 and 5;
     
     The Address of the property stored as 2  lines.  The first
     line  which  normally  contains  the  flat  number  and/or
     building name will not appear  on  the client's printouts.
     This is to prevent customers by-passing  your  agency, and
     approaching the property owners directly;
     A two line description of the accommodation;
     
     The  District  Code  of  the property,  this is  a 2 digit
     numeric code  which you set yourself  in  order to  enable
     searches for properties  by district;   Whenever it has to
     be entered  a list of codes and districts  created  by the
     setup program will be displayed;
     
     For records in the Rental or Sales Database  the date that
     the property  will  become  available;   If it  is unknown
     enter U for the first part of  the date,  and the computer
     will enter a date of Unknown;   Otherwise fill in the date
     in European or American format as previously selected with
     the setup program and without  typing  the  /  between the
     digits;
     
     For records in the Re-call Database, the month 1 to 12 and
     year (88,89,90....) to re-call the record;
     
     The  Floor  area  in  square  feet  or  square  meters  as
     previously selected with the setup program;
     
     A short description of the view;  eg. City, Sea, Mountain;
     A maximum length of 10 letters is allowed;
     
     The monthly rent or  sale price as appropriate;   Input is
     any numeric value within the permissible limits previously
     set with the setup program;
     
     The management fees and the property taxes;
     These 2  fields may be  redefined by the  setup program to
     store  other   financial or  numeric data;   Input  is any
     numeric value within  the permissible limits  set with the
     setup program, or if unknown input a U;
     
     The number of bedrooms.  Enter a value between 1 and 7;
     
     The the approximate age  of the property in  years;  Input
     is any number between 0  (for new)  and 100, or a U if the
     age is unknown;
     
     Whether there is  a swimming  pool,  or garden  and  if so
     whether it is  private or communal;   Input is Y or  N for
     Yes or  No,  if yes then  input  P  or  C  for  Private or
     Communal;   Enter  C if  the  status  of  the  facility is
     unknown;
     
     Whether  there  is  a  balcony,  a  children's playground,
     tennis or racket ball facilities;   The last  2 fields can
     be redefined to some other Yes/No requirement by using the
     setup program;  Input a Y or an N as appropriate;
     
     Whether  there is  car parking,  and if  so  the number of
     spaces;   Input is Y  or N for  Yes or No;   If you answer
     yes,  input  the number  of covered  and uncovered parking
     spaces as a number between 0 and 5, or U for unknown; 
     
     Whether the property is air-conditioned or  not and  if so
     whether centrally or by separate units;  Input is as usual
     Y or N.   If  you answer  yes input C  for  central  U for
     unknown or the actual number  of separate air-conditioning
     units;
     
     Whether  the property has  central heating and if  so what
     kind of fuel is used;   Input is as usual  Y or N followed
     by the first letter of the fuel type;
     
     Whether   the   property  is  furnished,   unfurnished  or
     serviced;  Input F, U, or S as appropriate;
     
     Details  of the commission and the lease;   Both  these 26
     character text fields can be  redefined for other  uses by
     using  the setup program.   Only the Lease  field  will be
     printed on client's printouts.
     
     Up to 12  lines of remarks,  any lines beginning with an *
     will not appear on client's printouts.
USING HOME FINDER

Travelling Around the Menus

There are 6 menus :

     The MAIN   menu; selects which records to work with.

     The TASK   menu; selects one of the menus below.

     The UPDATE menu; makes changes to the stored data. 

     The LOCATE menu; locates specific records by address, type
     or entry date.
 
     The VIEW   menu;  allows viewing of records,  and optional
     printing

     The PRINT  menu; allows printing of records. 

Other than the main menu which appears when the program starts,
all  the  other  menus  are   selected  from  the   task  menu.
Selections  are made  by  positioning  the  highlight  over the
required  selection on  the menu  bar with the  cursor keys and
pressing the Enter key,  which is also known as the Return key.
A  message  describing  the  current  selection's  function  is
displayed   under the menu bar.

The menu bar is moved by using  the left and  right arrow keys.
(Cursor keys)  If the bar is at the  left hand end of  the menu
and the left arrow is  pressed it  will move to  the right hand
end.  Similarly when it is on the extreme right it will move to
the left hand end if the right arrow is pressed.

A menu that you have just left can be returned to  by selecting
the Return option on the menu you just selected.

THE MAIN MENU

As with a physical card system you  must first open the  box of
cards you wish  to  search.   The main  menu  which  appears on
switch on (and whenever else  you want it)  "opens" the Rental,
Sales or  Re-calls  database  or quits the  program. You should
always quit the program in this way rather than  simply turning
off the computer.   After choosing which database to work with,
the choice will  appear in the left  hand section  of the lower
status bar.   You must return to this menu whenever you wish to
change databases.
THE TASK MENU

After  choosing the database the Task  Menu  will be displayed.
Here  you may choose  from  the primary tasks  of  updating the
records,   finding  specific  records and  printing  or viewing
records.   Further menus as chosen will then appear,   you will
return to this menu whenever you want to  begin another primary
task.  Alternatively you may choose to Return to  the main menu
to change Databases.


THE UPDATE MENU

The Update menu has 6 choices:
   
   Edit;     to edit the information on an existing record.
   Add;      to add a new record to the database.
   Delete;   to remove a record from the database.
   Restore;  to restore a deleted record to the database.
   Transfer; to transfer records between databases.
   Pack;     to  increase   disk space by  packing  the current
             database. 

When any of these options are selected you will  immediately be
asked to confirm your intention by pressing Enter, pressing any
other key will return you to the Update Menu.

Add

A blank input screen will appear, with the record number of the
new record.   You will proceed through the input screen filling
in the particulars.   The program will move from field to field
automatically when you finish an entry by  completely filling a
field with  data, or for partially filled fields when you press
Enter.   If the  entry is invalid  you will be prompted  with a
helpful  error  message  to  re-enter  the  data  until  it  is
acceptable.

The text fields such as address and view  will  accept any form
of input or can be left blank.   For details of valid  input to
the other fields see under WHAT CAN BE STORED.

After  filling the   first input screen,  you will be  asked to
press Enter to confirm that no changes are to be made.   If you
are not satisfied press another  key,  and then you may re-edit
your   entries.    (See   next   menu   "Edit"   for  details).
Alternatively you may press Escape to abandon the input at this
stage.

After confirming that the first input screen is satisfactory  a
second  blank screen  will appear for you to  fill  in, and the
process is completed in the same  way as  it is with  the first
screen.

The remarks field deserves a special explanation.   With all of
the  other fields  entry is  made  using the  normal typewriter
keys,  and the only  other keys  which have any  effect are the
backspace key to erase mistakes and the Enter key  to enter the
data.   With the comments  field a far greater  set  of editing
commands is available:

   Home will move the cursor to the beginning of a line.
   End will move the cursor to the end of a line.
   Pg Up (page up) will move the cursor to line 1.
   Pg Dn (page down) will move the cursor to line 12.
   Left  arrow &  right  arrow move  the cursor  to  the left &
   right.
   Up arrow & down arrow move the cursor up and down.
   Del deletes the character under the cursor & re-justifies
   the text to suit.
   Backspace deletes the character to the left of the cursor
   without re-justifying the text.
   Enter will move to the start of the next line.

When the remarks have been  entered to  your satisfaction press
the Esc (Escape key), if you wish to make no remarks press this
key as soon as the field is entered.

Remember any remark line starting with  a *  will not appear on
the client's printout.

When the second input screen is completed  to your satisfaction
you will be asked to confirm that you wish to  save the record.
Pressing Enter will save the record, other keys will return you
to the Update menu without saving the entry.  After saving, you
will be asked if you wish to  enter another record  press Enter
to do so, or another key to return to the Update menu.


Edit

Editing an existing record is a very similar process  to adding
a new one.  The principle differences are:

   You must enter the number of the record to be edited.

   The input screens appear filled in with the current data    
   for the chosen record.

   You do not have to enter information into every field.  Move
   the cursor to the fields you  wish to alter by  pressing any
   key    except Enter,   press  Enter on any  fields which you
   want  to  edit.  For  reference  the  old  entry  will      
   appear under the new entry  as data is being entered.
Delete  

After confirming your intention to continue,  you will be asked
for the number of the record to be deleted.   The chosen record
will appear on the screen, and you will be asked to confirm its
deletion by pressing Enter.   Upon confirmation the record will
be   deleted,  and you will  be  asked if  you  wish  to delete
another.   The reply is as usual by pressing Enter or any other
key.


Restore

Deleted  records are not  actually  deleted  from  the database
until you pack the database.  When a record is deleted all that
actually happens is that a flag is  set to tell the  program to
ignore these entries when making searches (except  when looking
for deleted records).   Consequently the  Restore option allows
you  to  re-activate  a  deleted  record  in  the  same  way as
deleting a record.  

Transfer    

The mechanics of the transferring  option are  similar to those
of the delete option.   However please note  that transfers are
only possible between the Rental and Recall  databases (in both
directions).    In  addition  you  will  be  prompted  for  the
available  date  for  transfers  to  the  rentals  database, or
re-call date for transfers to the recall database.


Pack

Deleted records do increase   search time and  take up valuable
disk space.   From time to time when you are sure that you will
never want to restore currently deleted records you should pack
the data base to permanently remove the records from the disk.
As with the other options packing only occurs  on the currently
selected database and ample  opportunity will be given  for you
to back out if you decide not to proceed.  However once packing
has begun  you must allow  it to complete,  otherwise your disk
files may be corrupted - it is suggested that a disk back up be
carried out prior to packing.
THE LOCATE MENU

The Locate menu has 5 options:

   By Type;   to find records which meet certain requirements.
   By Address; to search for records by their address.
   By Date; to search for records by entry or deletion date.
   View;   to enter the view menu after locating records.
   Print;  to enter the print menu after locating records.


By Type

This option has 2 variations, it is used to find records in the
rental and sales  databases which meet  certain requirements or
it can be used to search the re-call database for records to be
re-called up to and including a specified date.

Dealing with the first option:
After  confirmation  of intent an  input screen  will appear in
which  information is  entered  in  a  similar  manner  to when
records are being edited.  You will be asked to confirm whether
you wish to retain the current search parameters which you have
entered previously or return to the default values.  This saves
you the work  of re-entering  all your conditions if  there has
been only a slight change in your requirements since a previous
search.   Up to 3  districts may be specified, if all 3 are set
to zero all districts will be searched.  Up to 3 dwelling types
can be  entered,  if  all are  left  blank  all  types  will be
searched. You may enter all your other requirements in terms of
maximum  rent,  minimum  number  of  bedrooms,  the  facilities
required etc. and edit if necessary, eventually confirming your
acceptance  (press  F1  to  F10  for  help).   After  a further
confirmation to proceed with the search,  a search for matching
records will be made.

There  are 3  possible results.   Matching  records  are found,
records  which almost  match are found,   (in  either  of these
cases you are advised to proceed to  print or view them)  or no
matching records are found.  In the last case you will be asked
whether  you  wish  to  edit  your  requirements  or  leave the
procedure.

In the case of the  re-call database the  procedure is similar,
but simpler in that only the re-call date can be entered.


By Address

This option is used to search for records which  have a certain
name in  their addresses.   For example you might  want to find
all properties in Maple Street or in Paramount Towers.

After the usual confirmations an input screen  appears.  If you
are only interested in a particular district,  you may enter up
to 3  district codes to specify which districts to look in.  If
the district codes are all set to  zero then all  the districts
will be searched (which will take longer);

Data entry is similar to the record editing procedure, and upon
completion you are asked to confirm the search is to be made.
The computer will  then search and tell  you how  many matching
records were found.


By Date

This option is used to identify all records  which were entered
between  the  set  dates,  or  which  were  deleted/transferred
between set dates.   Use is self explanatory and similar to the
options above.


Print & View

These options can be entered from the find menu to allow you to
conveniently proceed to these menus after completing a search.


THE VIEW MENU

The view menu allows you to view the records on the  screen, it
has 2 main options Numbered or Selected.  Choose selected after
carrying out a find  or  search  operation.   You may then scan
through the chosen records by using the up and down arrow keys.
Choose Numbered if you want to see a specific  record. You will
be prompted  for the  number  and  the  record  will  appear on
screen.   You may then scan through the records   one at a time
by using the cursor keys.  

It  is  not possible  to view all the information  on  a record
simultaneously,  pressing any function  key  (F1  to  F10) will
switch between the primary and secondary information stored for
each record.   Press the Escape key to return to the menu.  Any
record on  screen  can be  printed by pressing P,  but printing
will not start until viewing is complete.

The remaining options Style and Quality set  the  printout type
and  the  printing  quality  to  either  draft  or  Near Letter
Quality.  These options should  be  set before   commanding any
printing.   The current settings are visible in the  middle  of
the lower status bar.
THE PRINT MENU

This menu is similar to the view menu with an additional choice
of Cancel, which will stop any printing which is in progress.
After  selecting Cancel you  should turn off your  printer, and
re-align the paper.

The operational difference between the Print and  View menus is
that  when   viewing,  printing is optional and carried  out on
request by pressing P on each individual  record.  However when
printing   from the Print menu all selected records are printed
automatically without having  to  press P.   If your search has
just found 1000  records, printing Selected from the Print menu
will attempt to print them all so beware.  Press the Escape key
to abort such an unwelcome occurrence.


ROUTINE USAGE

Once the initial data has been entered into the system  you can
begin  using   Home  finder  for   your   Residential  property
management system.

On a typical day you would add any new properties which come to
your  attention  into  the   Rentals  or   Sales  databases  as
appropriate.   Any  properties  which have  been  sold would be
deleted  from  the Sales database.   Any properties  which have
been let would be transferred to the Re-calls  database.  Lists
of the additions and deletions can  be  conveniently  made with
the Locate by Date option and the Short printing style.

On  enquiry from  clients printouts  of  properties  which meet
their  requirements  would  be  produced  by  locating suitable
records and printing them out.

Internal   printouts  would  be  produced  at   will   for  the
information of your sales team.

Once  a  month  you  would  search  the  Re-calls  database for
properties  which are soon to come to the end of their tenancy,
and print them out.  Enquiries would then be made as to whether
the current tenancies are to be renewed in which case you would
edit the re-call date,  or whether  the  properties  are  to be
re-let;  in which case you would transfer  the property  to the
Rentals database.

From time to time or when forced to  do so you should  pack the
databases.
SYSTEM REQUIREMENTS

Computer -  IBM XT or AT compatible with at least 256 Kb of RAM
installed.   The  minimum memory  of  256  Kb  will  allow your
largest database to contain 4000  records,  as installed memory
is increased to the maximum of 640  Kb up to 20,000 records can
be handled.   The computer should have a hard disk  drive ( C:)
preferably of at  least 20  Mb.  capacity.  The total number of
records in  all 3  databases is limited by  disk  size to about
2,000 per Mb. of disk space.


Monitor -  A monochrome or color monitor with a color card (CGA
or VGA) or a monochrome monitor with an IBM monochrome card can
be used.

The program is configured  to use your particular  monitor with
the Setup program. 

Printer  -  The printer should be  an 80  or 130 column printer
with  tractor  feed;    Epson  compatible  preferred.   Printer
effects are set by using the setup program  described  later in
this manual.  

Operating System - IBM PC DOS or MS DOS version 2.0 or higher.
THE SETUP PROGRAM

Home Finder comes ready configured to run on a  computer with a
monochrome monitor using a CGA card, printer codes (which allow
your printer to   underlined or print enlarged  characters etc)
are set to typical Epson type codes and the maximum and minimum
values  for  data  checking  are  set  to   reasonable  values.
District Codes on  the automatic help  screen  are set  to "Not
Used" or to some local Hong Kong place names.

If using a moochrome card IT IS ESSENTIAL that you re-configure
to suit  your display monitor,  and save any change  before the
program's  first  use.   otherwise  Home  Finder  will  not  be
displayed properly on your screen monitor.

The configuration program  is started by issuing  the following
command sequence :
     
     C:           to ensure you are using hard disk drive C:
     cd \homefind to select the correct sub-directory.
     HFCONFIG     to start the program.

Using  the Configuration  program  is  similar  to  the editing
procedures used  in  the main  program,  the highlight is moved
from   field to  field by  pressing  any key except  Enter.  If
Enter is pressed the parameter can be  edited  using the normal
typewriter keys  and backspace  to  erase.   The  new  entry is
complete when the field is full or Enter is pressed.

Before Home  Finder  is   used for real  data  you should think
carefully about how you wish to configure Home Finder  for your
needs.   Complications may arise if  you have  to  make changes
after  a significant amount  of  data  has  been  entered.  For
example  if  you  alter  the  district   code  of  one  of your
districts you would have to edit every record  in that district
to  the  new  code.    Changing  the  tennis  field   to  store
information  on  badminton    would    involve  reviewing every
record in  accordance  with  the change.   Reducing the maximum
rent might invalidate data already stored.  etc etc. - SO THINK
ABOUT IT FIRST !!


Video Mode

The first decision  to  be  made  when running  HFCONFIG is the
video mode.  The  program will  not continue  until you  make a
valid reply of 1,  2  or 3.  If you change the mode you will be
warned   that  you  must   save  the  change   when  given  the
opportunity,  or  the new video mode  will not  be stored. Some
computers have   display adaptors which driven  by hybrid cards
which appear  to  work  correctly   with mode 2  (CGA with mono
screen),  but the district and help find screens do  not appear
when they are supposed to, try re-configuring to mode 1 (mono).

Variable Fields

This section allows you to rename the 6 variable  fields:

   The 2  re-configurable numeric fields can be  re-labeled and
   output as numbers, or as money preceded by your chosen money
   sign. Entering a Y in the money option will cause the figure
   to be interpreted as money.  You can also set text to follow
   them on the printout such as per year per week etc.
   
   The 2 yes/no fields can be re-labeled and the text to appear
   under facilities if the field =  Y can be input; for example
   'Games Room' 'a games room'.   
   
   Finally  the  2  text  fields  can  be  re-labeled  to  your
   requirements,   but  remember  that  only  the  first  field
   (labeled Lease as default) will appear on client printouts.

Printer Driver

The  printer  driver  section,   allows  you  to   control  the
appearance of your printouts by  setting the printer  codes for
underlined characters, enlarged characters, near letter quality
etc.  

Many printer codes appear as  strange characters  such as funny
faces and cannot be entered directly from the  keyboard.  These
characters can be entered by holding down the key marked Alt on
the keyboard and then using the Numeric  keys (usually situated
on the right hand  side)  to key  in  the  ASCII  value  of the
character, releasing the  Alt key will then cause the character
to appear.   For example to enter ASCII code 1 which appears as
a face;  hold down the Alt key press 1  on the numeric  key pad
(ensure you are not using the other  numeric key on  the top of
the key board)  releasing the Alt key will cause this character
to appear.   Code 27 which is essential to most Epson   printer
codes  can by  input by  pressing  the Escape  key.  A  list of
Printer codes and their ASCII values will be contained  in your
printer  manual. However it should be noted that Pin Writer and
Wheel Writer  type  printers cannot perform  Enlarged Character
or sub-script character printing.   Blank the appropriate codes
if using these printers. 

Additionally this section allows you to input the  message that
appears below your  company name  on the  client printouts, the
currency symbol to be used ($, FF, DM, ECU etc),  whether areas
are to measured in meters  or feet and the number of  lines per
page for both kinds of report.  (6 lines / inch (25.4mm)).  The
standard length for 11 inch paper is 66 and for A4, 70 lines.  

If  the  area  units  are   changed  your  file   data  can  be
automatically   adjusted  when  you save  the changes.  However
conversion  will  not be  successful if you have  already input
mixed units into your data.

Data Check Parameters

This section deals with the maximum and minimum values to check
data input against.  Setting these values is  a balance between
making sure incorrect data cannot be  entered on  the one hand,
and ensuring an adequate range for your needs on the other.

If the maximum sale  price or  rental value are changed and you
save the changes, the existing  record data for price index can
be adjusted automatically.   However reducing these values will
cause all  records over the  new maximums to carry  the maximum
index value.  This might cause selection by price or rent to be
less precise.

Finally you may choose between the European (day/month/year) or
American (month/day/year) date systems.

Saving the changes 

At this point you have the  choice of saving  or abandoning all
the changes that you have made so  far before  continuing on to
assign new names to the 28 district codes.  If you have changed
any of the critical factors :  Date system, Area units, Maximum
Rent or Maximum Sale Price.  You will be asked if you wish your
existing data to be converted to  suit.   The normal reply of Y
for Yes will cause your existing  data to be  converted to your
new format.   For example if the  date format is  to be changed
from  European to American  then all records will be changed as
follows 29/06/88  will  become 06/29/88.   Conversion will take
several minutes. 

Setting The District Names 

The final section allows you to give names to the  28 districts
which appear on the help screen.  After which you may choose to
save your changes or not.   If you save the changes  a new help
screen  will  be  created  in  accordance  with  your allocated
district names.   This has no  effect on the district  codes of
any  data that you may have  already stored.   Consequently you
should decide on the districts to be used before entering data,
and  try not to  make  changes other than  the addition  of new
districts  when  necessary.   If you increase  or  decrease the
number of areas in use you should  reset the maximum  value for
the maximum number of  districts variable using  the Data Check
Variables section of the setup program. 

Next time  you run Home  Finder its operation  will reflect any
changes you have made.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2163

     Volume in drive A has no label
     Directory of A:\

    HFMANUAL FW3     34784   4-15-89   4:26p
    HFMANUAL PRT     34952   4-15-89   4:28p
    HFMANUAL TXT     33016   4-15-89   4:27p
    HFMANUAL DOC     38912   4-15-89   4:29p
    HFMANUAL WP      30922   4-15-89   4:31p
    TYPE_ME  OUT       962   4-14-89  10:12p
    GO       BAT        33   4-14-89  10:16p
    HF       EXE    108144   4-15-89  10:40a
    HFMAKE   EXE     23296   4-14-89  10:24p
    HFSETUP  EXE     35040   4-14-89  10:23p
    HFCONFIG DAT       455   4-14-89  10:27p
    FINDHELP TXT      4000   4-05-89  11:29a
    DISTHELP DTA      2560   4-14-89  10:27p
    DISTRICT DTA       812   4-14-89  10:27p
    FILE2163 TXT      3109   4-25-90   7:28p
    HFINST   BAT       184   7-09-90  11:24p
           16 file(s)     351181 bytes
                            3072 bytes free
