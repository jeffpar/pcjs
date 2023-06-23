---
layout: page
title: "PC-SIG Diskette Library (Disk #218)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0218/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0218"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ADDRESS MANAGER"

    ADDRESS MANAGER helps you keep multiple databases of names, addresses,
    phone numbers, and useful comments.  You can add new entries and delete
    or update current ones easily.
    
    The program is especially designed to address envelopes -- always a
    problem area, as well as print labels and even entire mailing lists.
    Labels can be printed on sheets from one to four across, and all
    entries can be sorted by zip code before printing.
    
    ADDRESS MANAGER menus are function-key driven.  On-line help is
    available from each menu.  This provides a quick and user-friendly
    interface, one that is easy to learn and use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDRESS.DOC

{% raw %}
```


      
      
                         Address Manager Program - Version 4.1
      
      1.  Overview
      
      The  Address Manager is primarily a mailing list program which can  meet
      most  home  and  business applications.   It  is  designed  to  maintain
      multiple  databases  of names,  addresses,  phone numbers,   and  useful
      comments.    Every  person  or place of business can be organized  as  a
      database  entry.    New  entries can be added and current  ones  can  be
      deleted or updated easily.   The Address Manager has a powerful retrieve
      facility  which  allows  you  to find a database  entry  by  just  about
      anything  (e.g.  name,  zip code,  state,  area code).   It is also well
      suited  for  addressing  envelopes and  printing out  lists  of  labels.
      Because of its implementation of using memory resident databases, you'll
      probably  find the Address Manager much faster than other  mailing  list
      programs.
      
      The Address Manager is easy to learn since it comes with on-screen help.
      Help  is  available from any menu by pressing the ESCape key.    General
      help  as  well  as specific help on each function  is  available.    The
      Address Manager has 3 display menus which are function key driven.  Each
      command (function) is invoked by pressing a function key.
      
      Many  enhancements have been made over previous versions. Following is a
      list of the major new features:
              Up to 4 columns of labels may be printed
              Larger database file size
              Retrieve on any string
              On-screen help for all menus
              Entries in database may be marked for selective use
              Can print only selective portion of database for labels
              Attention line available for printing envelopes
              Can sort database by zip code or name
              Startup  configuration file:  You can specify a database
                  file to read in on startup; your printer can be set up in
                  some desired state automatically
              Basic utilities are included for converting between database
                  files and edit files and for creating a phone list
                  (You can load a database from an edit file!)
      
      The Address Manager is designed to run on the IBM Personal Computer with
      either the monochrone or composite (B/W or color)  displays.  It is menu
      oriented  with menus designed for each type of monitor.   There are  two
      menu files supplied,  one designed for color monitors and  one  designed
      for monochrone monitors.  [Use color menus for an EGA based system.]
      
      This program may be incompatible with some IBM PC clones.   It  bypasses
      DOS services when displaying a menu.   This helps make the program  very
      fast.  In case of compatibility problems, let me know.  A simple program
      modification may be all that is necessary.
      



      
                                            1
                                     Address Manager
      






      
      2.  General Menu Information
      
      There are three program menus from which all operations  are  initiated:
      the Database Menu for loading, saving, and sorting database files,   the
      Maintenance  Menu  for database maintenance,  and  the  Print  Menu  for
      printing labels,  envelopes,  or a whole database.   The  menus  contain
      unprotected fields for entering data.   Unprotected fields are areas  on
      the screen which you can modify by typing over its contents.  Each field
      is identified by the  word or phase which appears on  the  screen before
      it.    The cursor will automatically move to the  next unprotected field
      when typing  beyond the current one.   Also pressing  'Tab'  or 'Return'
      will move the cursor to the next field.   Pressing a 'Backtab' will move
      the cursor to the previous field.   The 'Home' key moves  the cursor  to
      the first field and the 'End'  key moves the  cursor to  the last.   The
      cursor  arrow  keys  allow  you to move the cursor to  anywhere  on  the
      screen.   However typing a number or letter will cause to cursor to jump
      to the next field.   The 'Insert'  and 'Delete'  keys are functional for
      contents  within a field.   Some unprotected fields are also used by the
      Address  Manager to output information to you.   All other positions  on
      the menu are protected and cannot be modified.
      
      
      3.  Database Menu
      
      This is the menu first seen when the Address Manager program is invoked.
      
      The  Database  menu reads address database files from disk into  memory,
      invokes the Maintenance menu, sorts memory contents by name or zip code,
      and  writes  memory  contents to disk  files.    The  following  diagram
      illustrates the function of this menu:
      
                     F5 - Read                         F7, F8
        +------+    ------------>    +----------+   <----------->  Sorting
        | Disk |                     | Computer |
        | File |     F6 - Write      |  Memory  |        F10       Maintenance
        +------+   <------------     +----------+    ----------->     Menu
      
      The  Database  menu allows you to select an address database  file  from
      your disk to work with.  A copy of it is made in memory (F5).  This copy
      may be modified by the Maintenance menu (F10).   It can also be  written
      back out to disk (F6), either overwriting an existing file or creating a
      new one.
      
      Functions for this menu are as follows:
           F1  - Exit Program
           F5  - Read Database               F6  - Write Database
           F7  - Sort by Name                F8  - Sort by Zip Code
                                             F10 - Go To Maintenance Menu
      
      F1:  Exit Program  -  Returns control back to DOS.   After pressing this
           key,  the Address Manager will prompt you to press it again to exit
           (so you will not accidently exit the program by pressing this key).
           Pressing  this  key  a  second time  will  terminate  the  program.
           Pressing any other key will cancel this function.
      
      
                                            2
                                     Address Manager
      






           CAUTION:    If  you  are creating a new database,  or  if  you  are
           modifying  an  existing  database file and you want  to  save  your
           changes on disk,  make sure you use function key 6 before  exiting.
           Otherwise your work will be lost.
      
      F5:  Read Database  -  Reads the database  file listed in the first menu
           input  field  (it appears in inverse  video  following  "F5  - Read
           Database") into memory.   You may type in any valid Address Manager
           database file name into this field before pressing this key.
      
           If  no  database file has been loaded,  or if the current  database
           file  has  not been modified,  or if the current database has  been
           saved (F6), the new database file is read in.  Otherwise, a  second
           push  of this function key is required (Address Manager will prompt
           you   so   you  will  not  inadvertantly  wipe  out   the   current
           modifications  before saving them).  Hitting any other key  cancels
           the operation.
      
           Upon completion of this function, the read database field is copied
           into  the  write database field (the inverse video field  following
           F6).    This helps you from later inadvertantly updating the  wrong
           database file when you use F6.
      
           Note:    It  is  not necessary to read in a  database  file  before
           invoking  F10.   This  is  what is normally done to  create  a  new
           database file.
      
      F6:  Write Database - Updates or creates a database  file on disk.   The
           current  memory contents will be written to the file listed in  the
           Write Database field following F6 on the menu.
      
           Upon  invoking  this  key,   Address Manager  will  check  for  the
           existence of the file.  If the file exists, a  prompt will be given
           to update the file.  If the file doesn't exist,  a  prompt will  be
           given to create the file.   A second push of this key (F6)  is then
           required  to complete the operation.   Hitting any other  key  will
           cancel  the operation.   Writing the database makes  permanent  any
           changes made with the Address Manager Maintenance menu.
      
      F7:  Sort By Name  -  Sorts the current memory contents in  alphabetical
           order  by  name.   The "Name"  field for each database  entry  (see
           regular documentation for more information on "Name" field) is used
           for sorting.
      
      F8:  Sort By Zip Code  -  Sorts the current memory contents  in  numeric
           order  by zip code.   The "Address" fields for each database  entry
           (these are displayed on the Maintenance menu)  are searched to find
           the zip code.   The zip code must be the last item in the "Address"
           fields in order to be found.   Both regular 5 digit zip  codes  and
           extended  zip codes of the form xxxxx-xxxx are  supported.    Those
           entries whose zip codes are not found are moved to the beginning of
           the database.
      
      F10: Go To Maintenance Menu - Brings up the Maintenance menu.
      
      
      
                                            3
                                     Address Manager
      






      4.  Maintenance Menu
      
      The Maintenance Menu is displayed by pressing F10  on the Database  Menu
      or  F1  on the Print Menu.   This menu is used to create,  update,   and
      delete entries of the database loaded in memory.  Changes made here (F5,
      F6,  and F7)  do not necessarily affect your database file on disk.   To
      make your changes permanent, you must use F6 on the Database menu.
      
      Two  keys  (F3   and  F4)  allow you to step  through  the  database  by
      displaying  the next or previous entry.   You can display only selective
      entries by using the "Selective Entries"  field on this menu.   Then any
      entry can be displayed by F3  or F4  only if some portion of its  second
      comment field exactly matches the "Selective Entries"  field.   Thus the
      second  comment  field  can help distinguish entries of  relatives  from
      those of businesses.
      
      The  "Mark"   field  is  used to mark entries (F8)   for  later  use  by
      "Selective  entries".   For instance,  you may want to mark relatives by
      marking those entries with "/R".
      
      Functions for this menu are as follows:
           F1  - Return To Database Menu     F2  - Clear Entry
           F3  - Get Previous Entry          F2  - Get Next Entry
           F5  - Add New Entry               F6  - Update Current Entry
           F7  - Delete Current Entry        F8  - Mark Entry (Update)
           F9  - Retrieve                    F10 - Go To Print Menu
      
      F1:  Return To Database Menu - The Database menu is displayed.
      
      F2:  Clear Entry - Clears the "Name", "Address", "Phone",  and "Comment"
           fields with spaces.  The database in memory is not affected.
      
           You may use this function to clear those fields prior to filling in
           and adding a new entry.
      
      F3:  Previous Entry - Displays the previous entry in the database.
      
           If  any  characters have been typed into  the  "Selective  Entries"
           field,  then the previous database entry which has those characters
           in its second comment field will be found.
      
      F4:  Next Entry - Displays the next entry in the database.
      
           If  any  characters  have been typed into the  "Selective  Entries"
           field,   then the next database entry which has those characters in
           its second comment field will be found.
      
      F5:  Add Entry -  Adds the displayed entry to the database.   The "name"
           field must  not match that of another entry in the database  or  an
           "entry already exists" error will occur.   New entries are added in
           alphabetical  order  if  the database is  already  in  alphabetical
           order.




      
                                            4
                                     Address Manager
      






      
      F6:  Update Entry  -  Updates the displayed entry in the database.   You
           would normally display an entry first using F3,  F4,  or F9  first,
           make changes on the menu,  then press this key.  You can also enter
           the  whole  entry  manually,  then press this key.    You  will  be
           prompted to press this key a second time to complete the operation.
      
           The  "name"  field  must  exactly match that of  an  entry  in  the
           database.   Otherwise an "entry not found" error will occur.   Thus
           you  can not use this key to modify the "name" field for an  entry.
           To  modify the "name" field a combination of adding the  new  entry
           (F5) and deleting the old entry (F7) should be done.
      
           You can also use this key to manually mark entries (marking is done
           using  F8)   or to remove a mark by modifying  the  second  comment
           field.
      
      F7:  Delete Entry - Deletes the displayed entry from the database.  Only
           the  "name"  field needs to be filled in.   The "name"  field  must
           belong to an  entry in the database or a "nonexistent entry"  error
           will occur.
      
      F8:  Mark Entry  (Update) - Places the contents of the "Mark" field into
           the second comment field at the end of any contents there.  You may
           also  mark  an  entry by typing into the second comment  field  and
           updating the entry using F6.
      
           Marking an entry allows you to distinguish entries.   All relatives
           could be marked with "/R"  or some other indicator by placing those
           characters into the second comment field.   Then placing "/R"  into
           the  selective  entries  field  will cause you only  to  see  those
           entries when you are stepping through the database (F3 and F4).
      
      F9:  Retrieve  -  Retrieves and displays an entry in the database.   You
           may  retrieve by anything that appears in an entry.   For instance,
           to find the first Smith in the database, just place "Smith"  in the
           retrieve field and press F9.  To find the first entry having a area
           code of 303, place "303" in the retrieve field and press F9.
      
           After  retrieving  the first entry,  the contents of  the  retrieve
           field are shifted to the right 1 character and a "+"  is placed  at
           the beginning (e.g.  "Smith"  becomes "+Smith",  or "303"   becomes
           "+303").   If you press F9  again,  the "+"  means to retrieve  and
           display the next occurence in the database.
      
           To  find the next Smith from the current displayed entry,  fill  in
           "+Smith" and press F9.
      
      F10: Go To Print Menu - Brings up the Print menu.







      
                                            5
                                     Address Manager
      






      
      Other relevant information:
      
      The  numbers in the upper right hand corner of the box in the menu  show
      the  total  number  of  database entries and the  present  size  of  the
      database by percent.  The size in percent cannot grow beyond 100%.   Use
      it as a guide to determine when you might run out of room.  The database
      should be large enough for most home users.  Each database file can hold
      from  250   to 1200  entries depending on the amount of information  per
      entry.    My database of friends and relatives contains 62  entries  but
      only  takes 15%  of the maximum file size.   Some businesses may need  a
      much larger data base than  for  which this  program was  designed.   To
      accomodate  these users,  multiple database files may be  utilized.    A
      future version of the Address Manager will likely allow even much larger
      database files.
      
      The  name field of each database entry will be transposed by  the  Print
      menu  if a comma followed by a space is encountered.   For  example,  an
      entry which has
                      "Smith, John D                  "
      on the name field will be displayed as and printed as
                      "John D Smith                   ".
      This is handy as you can organize the database by last name but print it
      normally.   If you want to use a comma but don't want a transpose of the
      name field, use an underscore instead of a blank:
                      "AJAX,_Inc.                     ".
      The  Print menu will display and print the first underscore on the  name
      field as a blank:
                      "AJAX, Inc.                     ".
      As a further example,
                      "Smith,_PhD., John D            "
      will be displayed and printed by the Print menu as
                      "John D Smith, PhD.             ".
      
      The  name  field must be unique for each entry in the  database.    This
      could be a problem if someone has two addresses.   If you want to  place
      the  same  name in a database file more than once,  use a vertical  bar.
      The vertical  bar and anything to the right of it will not be  displayed
      or  printed  by  the  Print menu.   The position of  the  bar  can  also
      designate a new entry.   The following name fields are considered unique
      by the Address Manager:
                      "Smith,_PhD., John D   |        ",
                      "Smith,_PhD., John D   |1       ",
                      "Smith,_PhD., John D    |       ".
      In each case the following is printed:
                      "John D Smith, PhD.             ".
      
      The comment fields of each database entry have a dual purpose.  They are
      handy  for recording such items as birthdays,  anniversaries,  names  of
      children,   etc.   The second comment field can also be used to  segment
      your database.   You may use 1 and 2 character symbols  to mean specific
      things.    "/R"  could mean a relative and "/B"  a  business.   This  is
      considered a mark.  When two or more entries have the same mark you have
      established a subset of your database.   You can limit the scope of your
      database  to  just  those  entries  by placing  the  same  mark  in  the
      "Selective Entries" field.  Then F3 and F4 will only find those entries.
      
                                            6
                                     Address Manager
      






      
      
      5.  Print Menu
      
      The Print Menu is invoked by pressing function key 10 in the Maintenance
      Menu.  It is used for printing envelopes,  labels, or an entire database
      (all fields).   You may also  print  only  selective entries.   Like the
      Maintenance menu,  the Print menu allows  you to retrieve by any string,
      step to the next or previous entry, or step to selective entries.
      
      Labels may be printed on sheets up to 4 labels wide.  A  single database
      entry may be printed repeatedly up to 999 times.
      
      Any of the print operations (F5,  F7, or F10) can be aborted in progress
      by  hitting any key.   This is useful if the printer malfunctions or the
      wrong function key is pressed.  However,  your printer may keep going if
      it  has  a large internal buffer storing many lines or you are  using  a
      print spooler program.
      
      Functions for this menu are as follows:
           F1  - Return To Maintenance Menu  F2  - Clear Entry
           F3  - Get Previous Entry          F2  - Get Next Entry
           F5  - Print Database              F6  - Update This Menu
           F7  - Labels                      F8  - Clear Messages
           F9  - Retrieve                    F10 - Print Envelope
      
      F1:  Return To  Maintenance Menu - The Maintenance menu is displayed.
      
      F2:  Clear Entry - Clears the mailing address with blanks.
      
           You  may want to do this prior to filling in a mailing address  not
           in the database.  You can then address an envelope or print a label
           with this information using F10.
      
      F3:  Previous Entry - Displays the previous entry in the database.
      
           If  any  characters have been typed into  the  "Selective  Entries"
           field,  then the previous database entry which has those characters
           in its second comment field will be found.
      
      F4:  Next Entry - Displays the next entry in the database.
      
           If  any  characters  have been typed into the  "Selective  Entries"
           field,   then the next database entry which has those characters in
           its second comment field will be found.
      
      F5:  Print Database  - Database entries are printed.  All information is
           printed including phone numbers and comments.
      
           This  function is controlled by the same menu fields as F7  (see F7
           for description).   The only difference is the "Rows/Entry"   field
           must be greater than 6 since each database entry takes 7 lines.




      
                                            7
                                     Address Manager
      






      
      F6:  Update This Menu - The current  print menu is written back to  disk
           into the file ADDRESS.MEN (the menu file).   In this manner you can
           configure  the  menu  to your own liking.   The next  time  Address
           Manager is run,  the print menu will have the input fields the  way
           you like them.
      
           This  is useful in that you may want to place your own address into
           the return address fields and have the mailing address begin at row
           15  column 30.   After filling in these fields press F6.   The next
           time you run this program, these fields will be the way you defined
           them.
      
      F7:  Labels  -  Names  and addresses are sent to the printer.   You  can
           start  at  any entry and print multiple entries.   Entries  can  be
           spaced at four rows or greater and can start at any column(s)  on a
           page.  From one to four columns of labels may be printed.  A single
           entry may be printed repeatedly.   When this function finishes, the
           next entry to be printed is displayed in the mailing address field.
      
           This function is controlled by the following fields:
      
           Selective  Entries  - If characters other than blanks are typed  in
           here,   only those entries having the same characters appearing  in
           their second comment field are printed.
      
           Rows/Entry  -  Used to determine the row spacing for  entries  when
           printing labels or dumping the database.  Must be greater than 3 (1
           line for the name and 3 for the address).  The standard label sheet
           has 1 label per inch and the standard printer line feed is 1/6   of
           an  inch.    Therefore  "6"   should  be  entered  here  for   most
           applications.
      
           Columns  -  There  are four column fields.    These  determine  the
           printer tab positions where entries start when printing labels.  To
           print one column of labels beginning at column 10  on a page, place
           a  10   in the first column field and a blank or zero in the  other
           column fields.   To print three columns of labels place the desired
           numbers in the first three column fields and a blank or zero in the
           last  column  field.    From one to four columns of labels  may  be
           printed at a time.  Column fields can range from 0 to 91 for F5 and
           0 to 111 for F7.
      
           Start - Used to specify the first entry to be printed when printing
           labels.   You can start at the 17th entry by placing a 17  in  this
           field.  Alternately, you can place an "X" in this field to start at
           the  entry displayed in the mailing address field.   For  instance,
           you can start at the first "Smith" by first finding it with F9.  As
           another option,  you can place an "R"  in this field if you wish to
           repeat  printing a single entry.   Start field can range from  1  -
           999, "X", and "R".
      
           Count - Used to specify the number of entries printed when printing
           labels.   In addition,  it is the number of times a single entry is
           printed if an "R"  is placed in the Start field.   Count field  can
           range from 1 - 999.
      
                                            8
                                     Address Manager
      






      
      F8:  Clear  Messages  -  Clears  informative and error  messages.    [In
           addition, pressing any function key clears the previous messages.]
      
      F9:  Retrieve  -  Retrieves and displays an entry in the database.   You
           may  retrieve by anything that appears in an entry.   For instance,
           to find the first Smith in the database, just place "Smith"  in the
           retrieve field and press F9.  To find the first entry having a area
           code of 303, place "303" in the retrieve field and press F9.
      
           After retrieving the first entry the contents of the retrieve field
           are  shifted to the right 1 character and a "+"  is placed  at  the
           beginning (e.g. "Smith" becomes "+Smith", or "303" becomes "+303").
           If you press F9  again,  the "+"  means to retrieve and display the
           next occurence in the database.
      
           To  find the next Smith from the current displayed entry,  fill  in
           "+Smith" and press F9.
      
      F10: Print Envelopes  -  Prints the mailing address and  optionally  the
           return address.
      
           To  print with a return address the following 4 fields must be  set
           up in the following manner:
                    1  <=   (return row)    <=   (mailing row)    <=  99
                    1  <=  (return column)  <=  (mailing column)  <=  99
           To print without a return address the following must be true:
               return row = blank or 0,      1  <=   (mailing row)    <=  99
               return column = blank or 0,   1  <=  (mailing column)  <=  99
      
           You may also print one or two labels at a time.   I use this option
           to  print both a return address label and a mailing address  label.
           I set the return address row field to 1 and the mailing address row
           to  7 with both columns set to 1.  The contents of the  return  and
           mailing address fields are printed in order on two labels.
      
           You  are  free to enter anything in the Return Address and  Mailing
           Address  fields  directly.    You can address an envelope  with  an
           entry not in the database.
      
           This function is controlled by the following fields:
      
           Return Address Row - Row where return address is to be printed.  If
           a return address is not to be printed, leave blank.  The printer is
           assumed to be currently at row 1.
      
           Return  Address  Column  - Column where return  address  is  to  be
           printed.  If a return address is not to be printed, leave blank.
      
           Mailing  Address Row - This is the row where the mailing address is
           to be printed.  The printer is assumed to be currently at row 1.
      
           Mailing  Address  Column  -  Column where  mailing  address  is  to
           printed.


      
                                            9
                                     Address Manager
      






      
           Eject  -  Number of blank lines to add after an envelope  has  been
           addressed. This is used to eject an envelope from your printer.  It
           can range from 0 to 99.
      
           Return  Address  - The return address to be printed.   There are  4
           lines.
      
           Mailing  Address - The mailing address to be printed.   There are 4
           lines.
      
           Attention Line - This is the field on the lower left portion on the
           envelope.   It  is used for messages such as "Attn:    Director  of
           Admissions"   or  "Dated material inside".   This field  is  always
           printed  at  the row following the mailing address and  the  column
           where  the  return address begins (column 1 if there is  no  return
           address).
      
      
      6.  Notes on Printing Labels
      
      An entire database may be printed as 1 - 4 columns of labels in one step
      using  function  key 7 on the print menu.   Use the Rows/Entry field  to
      specify the number of rows allocated to each entry.  Placing a 6 in this
      field  will cause entries to be printed at rows 1,  7,  13,  etc.   Most
      printers  are normally configured to print 6 lines to an inch  which  is
      the spacing of typical  labels.   Set the Columns fields so the printing
      will  lie in the desired columns.   Practice with scratch  paper  first.
      Remember,  printing can be cancelled by hitting any key [you may want to
      disable  your print spooler if enabled].   The Address Manager should be
      able  to utilize any printer since it doesn't rely on  printer  specific
      characteristics.
      
      If you wish to print only part of a database, there are two suggestions:
      
          1.  Use the selective entries option.
      
          2.  Delete  those entries you don't want to print.   Then print  the
          modified  database.    Skip updating the database when  exiting  the
          program.
      
      
      7.  Notes on Printing Envelopes
      
      Some  printers have special features for printing envelopes.    If  your
      printer does not have these special features, the easiest way to address
      envelopes may be to print labels and then apply them to envelopes.
      
      Before printing on thick envelopes,  you may need to move the print head
      away  from  from the platen (the roller in your printer).   This  allows
      more room for the envelope to prevent jamming.  Check your user's manual
      on this procedure.




      
                                            10
                                     Address Manager
      






      
      The  paper  out detector may have to be disabled on the  printer  before
      envelopes  can  be  printed.   The paper out detector is disabled  by  a
      hardware switch, by software control,  or both depending on the printer.
      Please  consult your printer manual.   I  have a "Gemini-10x"   which  I
      disable using software control.   I use the following procedure prior to
      running this program:
      
           Place a diskette containing BASIC in Drive A.
      
           Place this diskette in Drive B.
      
           Type:     A:BASIC <B:PAPER.OUT     <cr>
           [PAPER.OUT  is provided as an example.   Modify it for your printer
           as  required.   Further modification will be needed if the user has
           DOS 1.0 or 1.1 (notice the redirection of the input.)]
      
      
      8.  Program Files
      
      Running the program is done by typing in      ADDRESS   <cr>   . However
      before doing so,  a backup copy should be made of this disk.   There are
      several  files  covering  the  Address Manager program.    They  are  as
      follows:
      
           ADDRESS .EXE   Executable program file - Address Manager
           ADDRESS .MEN   Menu file read by program (must be present)
           ADDRESS .DAT   Example database file
           ADDRESS .DOC   Reference guide
           ADDRESS1.HLP   On-screen help file for Database Menu
           ADDRESS2.HLP   On-screen help file for Maintenance Menu
           ADDRESS3.HLP   On-screen help file for Print Menu
           ADDRESS .BW    Menu file for monochrome monitor
           ADDRESS .COL   Menu file for color monitor
           ADDRESS .CFG   Configuration file
           AM_ED   .BAS   Basic utility to convert from a database file
                          into an ASCII edit file for your editor
           ED_AM   .BAS   Basic utility to convert an edit file from your
                          editor into a database file compatible with Address
                          Manager
           PHONELST.BAS   Basic utility to print a phone list from a database
                          file
           PAPER   .OUT   Disables paper out detector on printer (example)
      
      The  basic utility files listed above are not described in detail  here.
      You  can list the files to see how they work.   These listings will also
      describe the structure of a database file.   ED_AM.BAS is a very helpful
      utility  in  that  you can load a database file from a file created from
      your  editor without having to enter each entry in manually.   Since the
      source to the basic utilities are included,  you can modify them to your
      own needs.





      
                                            11
                                     Address Manager
      






      
      The  following should be typed prior to running the Address Manager  the
      first time:
      
          If you have a color monitors type:
                          COPY ADDRESS.COL ADDRESS.MEN  <cr>
          If you have a monochrome monitors type:
                          COPY ADDRESS.BW  ADDRESS.MEN  <cr>
      
      
      9.  Configuration
      
      The  Address  Manager  can be configured upon startup.    Currently  the
      following options are avaliable:
      
          o You  can specify a database file to automatically read  in  before
            the first menu appears.
      
          o You  can specify a character string to configure you printer prior
            to printing and to un-configure when you are through.
      
          o If you have an IBM Color Graphics Adaptor (CGA) card, you may have
            snow on your monitor when the screen is updated.   You can prevent
            the snow.
      
      To  do any of the above,  you can create the file "ADDRESS.CFG"  with an
      editor  and  place  the appropriate lines in it.   The  Address  Manager
      automatically  checks  for this file upon startup and will  execute  its
      instructions.  The following is an example of this file.
      
        +----------------------------------------------------------------+
        |DATABASE  RELATIVE.DAT                                          |
        |PRINT SET 27  69                                                |
        |PRINT CLR 27  70                                                |
        |BLINK                                                           |
        +----------------------------------------------------------------+
      
      The  first  line  instructs  the Address Manager to  read  in  the  file
      "RELATIVE.DAT"   as  a database file.   You don't need to do F5  on  the
      Database menu.  "DATABASE" must appear as capital letters in the first 8
      columns.    The database file must begin at column 11  and be no  longer
      than 12 characters long.
      
      The  second  line  describes a string of characters to be  sent  to  the
      printer just prior to printing the first time.  "PRINT SET"  must appear
      as capital letters in the first 9 columns.   The string of characters to
      be sent to the printer appears as decimal values.  Each value occupies 4
      columns  with the first one beginning at column 11.   The above  example
      sends  2  characters,  an ESCape and an "E",  to place the printer  into
      enhanced print mode.  Up to 18 characters may be defined.






      
                                            12
                                     Address Manager
      






      
      The  third  line  describes a string of characters to  be  sent  to  the
      printer just before the program exits.   It is sent only if the  printer
      was  used.   "PRINT CLR"  must appear as capital letters in the first  9
      columns.   The string of characters to be sent to the printer appears as
      decimal  values.    Each  value occupies 4 columns with  the  first  one
      beginning at column 11.  The above example sends 2 characters, an ESCape
      and  an  "F",  to cancel the printer's enhanced print mode.   Up  to  18
      characters may be defined.
      
      The fourth line tells the Address Manager to blink the screen  to  avoid
      the  snow  when  updating the screen (this is the method  IBM  chose  to
      update  the screen when scrolling CGA display systems).   This  line  is
      ignored if you are using a an IBM standard monochrome monitor.   "BLINK"
      must appear as capital letters in the first 5 columns of a line.
      
      The configuration file,  ADDRESS.CFG,  is optional.   It may contain any
      combination of the above 4 lines in any order.
      
      
      10.  Suggestions and Contributions
      
      If you copy this program and find it useful,  please register by sending
      $20.00 to:
      
                     Brad Simpson
                     990 Oakwood Dr.
                     Castle Rock, CO 80014
                     (303) 688-2954
      
      You   will   be  provided  with  support  and   upgrade   announcements.
      Suggestions are welcome.  The following improvements are being planned:
      
          o  Break 64K limit for even larger database file sizes
          o  Incorporate  group editing database files via attributes.    E.G.
             Delete all entries having (or not having) a specific attribute.
          o  Allow merging of database files.
      
      If you have ideas or specific needs,  let me know.  They could be put in
      the next version.
      















      
                                            13
                                     Address Manager
      





```
{% endraw %}

## AM_ED.BAS

{% raw %}
```bas
10 '     PROGRAM TO CONVERT AN ADDRESS MANAGER DATABASE FILE INTO AN
20 '     EDIT FILE.
30 '  
40 '     AN ADDRESS MANAGER DATABASE FILE HAS THE FOLLOWING FORMAT:
50 '             SIZE | ENTRY 1 | ENTRY 2 | ... | ENTRY N | <FF>
60 '        WHERE SIZE IS A 4 BYTE INTEGER AND EACH ENTRY HAS THE
70 '        FOLLOWING FORMAT:
80 '             <FF> NAME <CR> ADDRESS LINE 1 <CR> ADDRESS LINE 2 <CR>
90 '             ADDRESS LINE 3 <CR> AREA CODE <CR> PHONE PREFIX <CR>
100 '            LAST 4 DIGITS <CR> COMMENT LINE 1 <CR> COMMENT LINE 2
110 '       WHERE <FF> IS A FORM FEED BYTE AND <CR> IS A CARRIAGE RETURN BYTE
120 '  
130 '    THE ADDRESS MANAGER TREATS A DATABASE FILE AS A DIRECT ACCESS FILE
140 '    HAVING A RECORD LENGTH OF 512 BYTES.  THIS PROGRAM ACCESS THE FILE
150 '    64 BYTES AT A TIME FOR CONVENIENCE.
160 '------------------------------------------------------------------------
170 INPUT "Enter input database file:  ",FILE1$
180 OPEN FILE1$ AS #1 LEN=64
190 FIELD #1,64 AS B$
200 INPUT "Enter output ASCII file:    ",FILE2$
210 OPEN FILE2$ FOR OUTPUT AS #2
215 INPUT "Ouput Comments on 2 lines:  ",C$
216 CMNT$ = MID$( C$, 1, 1 ) : IF CMNT$ = "y" THEN CMNT$ = "Y"
220 IREC%=1
230 GET #1,IREC%
240 A$ = B$
250 IREC% = IREC% + 1
260 GET #1,IREC%
270 C$ = A$ + B$
280 '---------------------------DISPLAY THE FILE SIZE
290 SIZE = CVI( MID$( C$, 1, 2 ) )
300 IF SIZE < 0 THEN SIZE = SIZE + 65536
310 PRINT "DATABASE SIZE ";SIZE;" BYTES"
320 '        DEFINE THE FORM FEED CHARACTER, FF
330 FF$ = CHR$( 12 )
340 J% = INSTR(C$,FF$)
350 '        THE FF CHARACTER MUST BE THE 5TH CHARACTER IN FILE
360 IF J% <> 5 THEN PRINT "ILLEGAL FILE TYPE" : END
370 J% = J% + 1
380 '        DEFINE THE CARRIAGE RETURN CHARACTER, CR
390 CR$ = CHR$( 13 )
400 '---------------------------ENTRY OUTPUT LOOP
410 '---------------------------NAME
420 GOSUB 1000
430 K% = INSTR( J%, C$, CR$ )
440 IF J% >= SIZE THEN END
450 L$ = MID$( C$, J%, K%-J% )
460 PRINT L$
470 PRINT #2,L$
480 J% = K% + 1
490 '---------------------------ADDRESS LINE 1
500 GOSUB 1000
510 K% = INSTR( J%, C$, CR$ )
520 L$ = MID$( C$, J%, K%-J% )
530 PRINT L$
540 PRINT #2,L$
550 J% = K% + 1
560 '---------------------------ADDRESS LINE 2
570 GOSUB 1000
580 K% = INSTR( J%, C$, CR$ )
590 L$ = MID$( C$, J%, K%-J% )
600 PRINT L$
610 PRINT #2,L$
620 J% = K% + 1
630 '---------------------------ADDRESS LINE 3
640 GOSUB 1000
650 K% = INSTR( J%, C$, CR$ )
660 L$ = MID$( C$, J%, K%-J% )
670 PRINT L$
680 PRINT #2,L$
690 J% = K% + 1
700 '---------------------------PHONE LINE
710 GOSUB 1000
720 K% = INSTR(J%,C$,CR$)
730 L1$ = MID$(C$,J%,K%-J%)
740 J%=K%+1
750 K% = INSTR(J%,C$,CR$)
760 L2$ = MID$(C$,J%,K%-J%)
770 J%=K%+1
780 K% = INSTR(J%,C$,CR$)
790 L3$ = MID$(C$,J%,K%-J%)
800 PRINT "(";L1$;")";L2$;"-";L3$
810 PRINT #2,"(";L1$;")";L2$;"-";L3$
820 J% = K% + 1
830 '---------------------------COMMENT LINE 1
840 GOSUB 1000
850 K% = INSTR(J%,C$,CR$)
860 L$ = MID$(C$,J%,K%-J%)
870 IF CMNT$ = "Y" THEN PRINT L$ : PRINT #2,L$
890 J% = K% + 1
900 '---------------------------COMMENT LINE 2
910 GOSUB 1000
920 K% = INSTR(J%,C$,FF$)
930 L$ = MID$(C$,J%,K%-J%)
940 IF CMNT$ = "Y" THEN PRINT L$ : PRINT #2,L$
950 PRINT : PRINT #2,""
960 J% = K% + 1
970 GOTO 420
980 '---------------------------END OF LOOP
990 '  
1000 '---------------------INPUT BUFFER UPDATE ROUTINE
1010 IF J% <= 64 THEN RETURN
1020 J% = J% - 64 : SIZE = SIZE - 64
1030 A$ = B$
1040 IREC% = IREC% + 1
1050 ON ERROR GOTO 1100
1060 GET #1,IREC%
1070 ON ERROR GOTO 0
1080 C$ = A$ + B$
1090 RETURN
1100 '---------------------ERROR TRAPPING
1110 B$ = ""
1120 RESUME
```
{% endraw %}

## ED_AM.BAS

{% raw %}
```bas
10 '     PROGRAM TO CONVERT AN EDIT FILE TO AN ADDRESS MANAGER DATABASE 
11 '     FILE.
12 '  
13 '     AN ADDRESS MANAGER DATABASE FILE HAS THE FOLLOWING FORMAT:
14 '             SIZE | ENTRY 1 | ENTRY 2 | ... | ENTRY N | <FF>
15 '        WHERE SIZE IS A 4 BYTE INTEGER AND EACH ENTRY HAS THE
16 '        FOLLOWING FORMAT:
17 '             <FF> NAME <CR> ADDRESS LINE 1 <CR> ADDRESS LINE 2 <CR>
18 '             ADDRESS LINE 3 <CR> AREA CODE <CR> PHONE PREFIX <CR>
19 '            LAST 4 DIGITS <CR> COMMENT LINE 1 <CR> COMMENT LINE 2
20 '        WHERE <FF> IS A FORM FEED BYTE AND <CR> IS A CARRIAGE RETURN BYTE
21 '  
22 '     THE ADDRESS MANAGER TREATS A DATABASE FILE AS A DIRECT ACCESS FILE
23 '     HAVING A RECORD LENGTH OF 512 BYTES.  THIS PROGRAM ACCESS THE FILE
24 '     64 BYTES AT A TIME FOR CONVENIENCE.
25 '------------------------------------------------------------------------
100 INPUT "Enter input ASCII file:            ",FILE1$
110 OPEN FILE1$ FOR INPUT AS #1
120 INPUT "Enter output database file:        ",FILE2$
130 OPEN FILE2$ AS #2 LEN=128
140 FIELD #2,128 AS A$
145 INPUT "Are comments lines in edit file?:  ",C$
146 CMNT$ = MID$( C$, 1, 1 ) : IF CMNT$ = "y" THEN CMNT$ = "Y"
150 '--------DEFINE THE FORM FEED CHARACTER, FF
160 FF$ = CHR$( 12 )
170 '--------DEFINE THE CARRIAGE RETURN CHARACTER, CR
180 CR$ = CHR$( 13 )
190 '   THE FIRST 5 BYTES OF THE FILE CONTAIN THE TOTAL NUMBER OF BYTES
200 '--------------------------------------------
210 X$ = MKI$( 0 )
220 C$ = X$ + X$ + FF$
230 SIZE = 5
240 IREC% = 0
300 '--------------------------------------------
305 '---------------------------ENTRY OUTPUT LOOP
310 '---------------------------NAME
320 IF EOF(1) THEN GOTO 900
330 LINE INPUT #1,X$
340 IF LEN(X$) <= 2 GOTO 320
345 PRINT X$
350 C$ = C$ + X$ + CR$
360 SIZE = SIZE + LEN(X$) + 1
370 GOSUB 1000
380 '---------------------------ADDRESS LINE 1
385 IF EOF(1) THEN X$ = "" : GOTO 395
390 LINE INPUT #1,X$
395 PRINT X$
400 C$ = C$ + X$ + CR$
410 SIZE = SIZE + LEN(X$) + 1
420 GOSUB 1000
430 '---------------------------ADDRESS LINE 2
435 IF EOF(1) THEN X$ = "" : GOTO 445
440 LINE INPUT #1,X$
445 PRINT X$
450 C$ = C$ + X$ + CR$
460 SIZE = SIZE + LEN(X$) + 1
470 GOSUB 1000
480 '---------------------------ADDRESS LINE 3
485 IF EOF(1) THEN X$ = "" : GOTO 495
490 LINE INPUT #1,X$
495 PRINT X$
500 C$ = C$ + X$ + CR$
510 SIZE = SIZE + LEN(X$) + 1
520 GOSUB 1000
530 '---------------------------PHONE LINE
535 IF EOF(1) THEN X$ = "" : GOTO 542
540 LINE INPUT #1,X$
542 PRINT X$
545 '    REMOVE EXISTING PUNCTUATION, IF ANY
550 K% = INSTR( X$, "(" ) : IF K% > 0 THEN GOSUB 590
560 K% = INSTR( X$, ")" ) : IF K% > 0 THEN GOSUB 590
570 K% = INSTR( X$, "-" ) : IF K% > 0 THEN GOSUB 590
580 GOTO 610
590    X$ = MID$( X$, 1, K%-1 ) + MID$( X$, K%+1, LEN(X$)-K% )
600    RETURN
605 '    IF RESULTING STRING IS NOT 10 LONG, IGNORE IT
610 IF LEN(X$) = 10 THEN GOTO 650
615   C$ = C$ + CR$ + CR$ + CR$
620   SIZE = SIZE + 3
630   GOTO 670
640 '    PHONE STRING IS 10 LONG:
650   C$ = C$ + MID$(X$,1,3) + CR$ + MID$(X$,4,3) + CR$ + MID$(X$,7,4) + CR$
660   SIZE = SIZE + 13
670 GOSUB 1000
680 '---------------------------COMMENT LINE 1
685 IF CMNT$ <> "Y" OR EOF(1) THEN X$ = "" : GOTO 695
690 LINE INPUT #1,X$
695 PRINT X$
700 C$ = C$ + X$ + CR$
710 SIZE = SIZE + LEN(X$) + 1
720 GOSUB 1000
730 '---------------------------COMMENT LINE 2
735 IF CMNT$ <> "Y" OR EOF(1) THEN X$ = "" : GOTO 745
740 LINE INPUT #1,X$
745 PRINT X$
750 C$ = C$ + X$ + FF$
760 SIZE = SIZE + LEN(X$) + 1
770 GOSUB 1000
780 GOTO 320
790 '---------------------------END OF LOOP
800 '--------------------------------------
900 '---------------------------WRAP UP OUTPUT FILE
910 IF LEN(C$) < 128 THEN C$ = C$ + SPACE$( 128-LEN(C$) )
920 LSET A$ = C$
930 IREC% = IREC% + 1
940 PUT #2,IREC%
945 '  NOTE:  File must be a multiple of 512 bytes (4 128-byte records)
950 K% = IREC% MOD 4
960 IF K% = 0 THEN GOTO 985
970   LSET A$ = SPACE$(128)
980   FOR I% = 1 TO 4-K% : IREC% = IREC% + 1 : PUT #2,IREC% : NEXT I%
985 PRINT "Database size is ";SIZE;" bytes"
987 IF SIZE > 32767! THEN SIZE = SIZE - 65536!
988 K% = SIZE
991 GET #2,1
992 B$ = A$
993 MID$( B$, 1, 2 ) = MKI$( K% )
994 LSET A$ = B$
995 PUT #2,1
999 END
1000 '---------------------INPUT BUFFER UPDATE ROUTINE
1010 IF LEN(C$) <= 128 THEN RETURN
1020 B$ = MID$( C$, 1, 128 )
1030 C$ = MID$( C$, 129, LEN(C$)-128 )
1040 LSET A$ = B$
1050 IREC% = IREC% + 1
1060 PUT #2,IREC%
1070 RETURN
```
{% endraw %}

## FILE0218.TXT

{% raw %}
```
Disk No:  218                                                           
Disk Title: Address Manager                                             
PC-SIG Version: S4.1                                                    
                                                                        
Program Title: Address Manager                                          
Author Version: 4.1                                                     
Author Registration: $20.00.                                            
Special Requirements: None.                                             
                                                                        
ADDRESS MANAGER helps you keep multiple databases of names, addresses,  
phone numbers, and useful comments.  You can add new entries and delete 
or update current ones easily.                                          
                                                                        
The program is especially designed to address envelopes -- always a     
problem area, as well as print labels and even entire mailing lists.    
Labels can be printed on sheets from one to four across, and all        
entries can be sorted by zip code before printing.                      
                                                                        
ADDRESS MANAGER menus are function-key driven.  On-line help is         
available from each menu.  This provides a quick and user-friendly      
interface, one that is easy to learn and use.                           
                                                                        
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
║                 <<<<  Disk #218 Address Manager  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To start using the program, type:  COPY README.DOC PRN  (press enter)  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG, Inc.
```
{% endraw %}

## PHONELST.BAS

{% raw %}
```bas
10 '     PROGRAM TO CREATE A PHONE LIST FROM AN ADDRESS MANAGER DATABASE FILE
30 '  
40 '     AN ADDRESS MANAGER DATABASE FILE HAS THE FOLLOWING FORMAT:
50 '             SIZE | ENTRY 1 | ENTRY 2 | ... | ENTRY N | <FF>
60 '        WHERE SIZE IS A 4 BYTE INTEGER AND EACH ENTRY HAS THE
70 '        FOLLOWING FORMAT:
80 '             <FF> NAME <CR> ADDRESS LINE 1 <CR> ADDRESS LINE 2 <CR>
90 '             ADDRESS LINE 3 <CR> AREA CODE <CR> PHONE PREFIX <CR>
100 '            LAST 4 DIGITS <CR> COMMENT LINE 1 <CR> COMMENT LINE 2
110 '       WHERE <FF> IS A FORM FEED BYTE AND <CR> IS A CARRIAGE RETURN BYTE
120 '  
130 '    THE ADDRESS MANAGER TREATS A DATABASE FILE AS A DIRECT ACCESS FILE
140 '    HAVING A RECORD LENGTH OF 512 BYTES.  THIS PROGRAM ACCESS THE FILE
150 '    64 BYTES AT A TIME FOR CONVENIENCE.
160 '------------------------------------------------------------------------
170 INPUT "Enter input database file:     ",FILE1$
180 OPEN FILE1$ AS #1 LEN=64
190 FIELD #1,64 AS B$
200 INPUT "Enter output phone list file:  ",FILE2$
210 OPEN FILE2$ FOR OUTPUT AS #2
220 IREC%=1
230 GET #1,IREC%
240 A$ = B$
250 IREC% = IREC% + 1
260 GET #1,IREC%
270 C$ = A$ + B$
280 '---------------------------COMPUTE THE FILE SIZE
290 SIZE = CVI( MID$( C$, 1, 2 ) )
300 IF SIZE < 0 THEN SIZE = SIZE + 65536
310 PRINT "DATABASE SIZE ";SIZE;" BYTES"
320 '        DEFINE THE FORM FEED CHARACTER, FF
330 FF$ = CHR$( 12 )
340 J% = INSTR(C$,FF$)
350 '        THE FF CHARACTER MUST BE THE 5TH CHARACTER IN FILE
360 IF J% <> 5 THEN PRINT "ILLEGAL FILE TYPE" : END
370 J% = J% + 1
380 '        DEFINE THE CARRIAGE RETURN CHARACTER, CR
390 CR$ = CHR$( 13 )
400 '---------------------------ENTRY OUTPUT LOOP
410 '---------------------------NAME
420 GOSUB 1000
430 K% = INSTR( J%, C$, CR$ )
440 IF J% >= SIZE THEN END
450 PERSON$ = MID$( C$, J%, K%-J% )
480 J% = K% + 1
490 '---------------------------ADDRESS LINE 1
500 GOSUB 1000
510 K% = INSTR( J%, C$, CR$ )
520 L$ = MID$( C$, J%, K%-J% )
550 J% = K% + 1
560 '---------------------------ADDRESS LINE 2
570 GOSUB 1000
580 K% = INSTR( J%, C$, CR$ )
590 L$ = MID$( C$, J%, K%-J% )
620 J% = K% + 1
630 '---------------------------ADDRESS LINE 3
640 GOSUB 1000
650 K% = INSTR( J%, C$, CR$ )
660 L$ = MID$( C$, J%, K%-J% )
690 J% = K% + 1
700 '---------------------------PHONE LINE
710 GOSUB 1000
720 K% = INSTR(J%,C$,CR$)
730 L1$ = MID$(C$,J%,K%-J%)
740 J%=K%+1
750 K% = INSTR(J%,C$,CR$)
760 L2$ = MID$(C$,J%,K%-J%)
770 J%=K%+1
780 K% = INSTR(J%,C$,CR$)
790 L3$ = MID$(C$,J%,K%-J%)
792 PERSON$ = PERSON$ + SPACE$( 40-LEN(PERSON$) )
794 PERSON$ = PERSON$ + "(" + L1$ + ")" + L2$ + "-" + L3$
800 PRINT PERSON$
810 PRINT #2,PERSON$
820 J% = K% + 1
830 '---------------------------COMMENT LINE 1
840 GOSUB 1000
850 K% = INSTR(J%,C$,CR$)
860 L$ = MID$(C$,J%,K%-J%)
890 J% = K% + 1
900 '---------------------------COMMENT LINE 2
910 GOSUB 1000
920 K% = INSTR(J%,C$,FF$)
930 L$ = MID$(C$,J%,K%-J%)
960 J% = K% + 1
970 GOTO 420
980 '---------------------------END OF LOOP
990 '  
1000 '---------------------INPUT BUFFER UPDATE ROUTINE
1010 IF J% <= 64 THEN RETURN
1020 J% = J% - 64 : SIZE = SIZE - 64
1030 A$ = B$
1040 IREC% = IREC% + 1
1050 ON ERROR GOTO 1100
1060 GET #1,IREC%
1070 ON ERROR GOTO 0
1080 C$ = A$ + B$
1090 RETURN
1100 '---------------------ERROR TRAPPING
1110 B$ = ""
1120 RESUME
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0218

     Volume in drive A has no label
     Directory of A:\

    ADDRESS  BW      12288   9-07-87   7:11p
    ADDRESS  CFG         7   9-20-87   9:13p
    ADDRESS  COL     12288   9-07-87   7:54p
    ADDRESS  DAT      1024   1-15-87   7:36p
    ADDRESS  DOC     40061   2-04-89  10:42a
    ADDRESS  EXE     53659   1-29-89   4:33p
    ADDRESS  MEN     12288   9-07-87   7:11p
    ADDRESS1 HLP      4459   9-20-87   8:58p
    ADDRESS2 HLP      4875   9-20-87   8:58p
    ADDRESS3 HLP      8217   9-20-87   8:59p
    AM_ED    BAS      3701   3-29-87   4:59p
    ED_AM    BAS      4564   4-11-87   4:02p
    PAPER    OUT       128   5-31-84  10:37p
    PHONELST BAS      3424   3-29-87   7:40p
    README   DOC      1542   9-20-87   9:10p
    GO       BAT      1519   9-14-88   3:45p
    GO       TXT       576   1-01-80   3:10a
    FILE0218 TXT      1999   7-09-90   7:26p
           18 file(s)     166619 bytes
                          147456 bytes free
