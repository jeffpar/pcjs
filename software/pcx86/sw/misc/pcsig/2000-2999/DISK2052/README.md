---
layout: page
title: "PC-SIG Diskette Library (Disk #2052)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2052/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2052"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MULTIBAK AND FINDZZ"

    MULTIBAK makes computer tasks requiring multiple file changes less
    frustrating and safer from disaster. Many programs, such as
    wordprocessors, database managers, and spreadsheets, provide for a
    single generation of backup, usually renaming the old version of
    "filename.ext" to "filename.bak" before writing a new "filename.ext" to
    disk. When a new revision is again saved, the old version again becomes
    "filename.bak," wiping out the backup file saved earlier.
    
    But what if we change our minds about a major revision and need to
    return the document or spreadsheet to its state several generations
    earlier? Or if we later discover a major error and the loss of earlier
    versions could seriously set our work back? MULTIBAK allows for
    creation of backups whenever significant changes are made, accumulating
    them until a final version is completed and verified. MULTIBAK allows
    sequential creation of up to 99 backup versions of a file. These backup
    files can be conveniently erased later using the PURGE program.
    
    FINDZZ locates misplaced files in the blink of an eye! Use wildcard
    characters to find files created at specified dates and times. FINDZZ
    is much faster than DOS because FINDZZ creates a disk index which
    allows for speedy access of up to 300 subdirectories.
    
    FINDZZ consists of four easy to use screens: "find files;" "found
    files"; "selected file"; and "configuration file." Indicate search
    criteria in the "find files" screen, then see the list of files found in
    the "Files Found" screen. Highlight one of the found files, press
    return and the "selected file" screen allows you to edit this file using
    your text editor. Up to eight of your programs can be added to the
    "selected file" screen program menu. FINDZZ is convenient, and it's a
    great time saver for any hard disk owner!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2052.TXT

{% raw %}
```
Disk No: 2052                                                           
Disk Title: MultiBak and Findzz                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: MULTIBAK                                                 
Author Version: 1.2                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
MULTIBAK makes computer tasks requiring multiple file changes less      
frustrating and safer from disaster.  Many programs, such as word       
processors, data base managers, and spreadsheets, provide for a single  
generation of backup, usually renaming the old version of "filename.ext"
to "filename.bak" before writing a new "filename.ext" to disk.  When a  
new revision is again saved, the old version again becomes              
"filename.bak," wiping out the backup file saved earlier.  But what if  
we change our minds about a major revision and need to return the       
document or spreadsheet to its state several generations earlier?   Or  
if we later discover a major error and the loss of earlier versions     
could seriously set our work back?  MULTIBAK allows for creation of     
backups whenever significant changes are made, accumulating them until a
final version is completed and verified. MULTIBAK allows sequential     
creation of up to 99 backup versions of a file. These backup files can  
later be conveniently erased using the PURGE program.                   
                                                                        
                                                                        
Program Title: Findzz                                                   
Author Version: 1.1                                                     
Author Registration: $19.00                                             
Special Requirements: None.                                             
                                                                        
FINDZZ locates misplaced files in the blink of an eye!  Use wildcard    
characters to find files created at specified dates and times.  FINDZZ  
is much faster than DOS's sluggish XTREE command because FINDZZ creates 
a disk index which allows for speedy access of up to 300 subdirectories.
                                                                        
FINDZZ consists of four easy to use screens: "Find Files"; "Found       
Files"; "Selected File" and "Configuration File".  Indicate search      
criteria in the "Find Files" screen then see the list of files found in 
the "Files Found" screen.  Highlight one of the found files, press      
return and the "Selected File" screen allows you to edit this file using
your text editor.  Up to eight of your programs can be added to the     
"Selected File" screen program menu.  FINDZZ is convenient, and it's a  
great time saver for any hard disk owner!                               
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```

File description for the FINDZZ shareware disk.


MANUAL   BAT       80   9-09-89  10:13a   Print the manual
README   BAT       38   6-20-87   8:50a   Start screen
REGISTER BAT       23   9-15-89   8:36a   Print registration form
REPORT   BAT       21   4-29-89  10:49a   Print problem report form
FNZ      EXE    22528   9-09-89  11:24a   The FINDZZ program
READ     ME      1045   9-09-89  10:12a   Start screen text
FNZMAN   TXT    32909   9-15-89   8:34a   Manual text
REGISTER TXT     1681   9-09-89   9:55a   Registration text
REPORT   TXT     2069   4-29-89  10:45a   Problem report text
```
{% endraw %}

## FNZMAN.TXT

{% raw %}
```









                              THE FINDZZ PROGRAM
                                OPERATING GUIDE

                         Version 1.10 (September 1989)
                        Published by Aeius Corporation
                                 PO BOX 700457
                              San Jose, CA 95170
                                (408) 257 0658

                    Copyright (c) 1989 by Aeius Corporation
                             All rights reserved.  


            The FINDZZ program is a shareware program.  This means you
         are encouraged to give a copy of the program to your friends.  
         If you  use  the  program  regularly,  you  are  expected  to
         register.   When you register, you recieve the latest program
         disk and will recieve the following version of  the  program,
         free, when it is released.  To print out a registration form,
         place your master disk in your floppy  drive,  and  type  the
         command:

            REGISTER










         Table of Contents                  Page
         -----------------                  ----

         REGISTRATION FORM                    R
         
         INTRODUCTION                         1

         GETTING STARTED                      2

           Installation                       2

           Sample Installation                2

           Quick Tryout                       2

         FIND FILES                           5

           Editing a Field                    6

           File Name and File Extension       6

           Path                               7

           Date                               7

           Time                               7

           Find, Update Index, and Reset      8

         FOUND FILES                          9

           Selecting a File For Viewing       9

         SELECTED FILE                       10

         CONFIGURATION                       11

         HELPFUL HINTS                       12

         FIELD REPORT FORM                   Last Page








                             FINDZZ REGISTRATION FORM

         If you  use the  program regularly, you are expected to  register.
      This provides us with revenue to continue working on improvements and 
      additions to the program.  When you  register  as an FINDZZ  User, we 
      will send you the latest program  disk.  In addition, we will provide 
      you  with a  free  copy of  the  next  improved  version,  when it is 
      released.  You can register by mail or phone.

      MAIL TO: AEIUS CORPORATION   OR PHONE: (408) 257 0658
               PO BOX 700457         Leave your order, credit card
               SAN JOSE, CA 95170    number, name, address and phone
                                     number on our recorder.  Use
                                     form below as a guide.  Or
                                     leave your phone number for
                                     call back.


     The price for registration is $19.00 POSTPAID and  TAX PAID.   Check, 
     money order or credit card.  Canadian or foreign customers use credit 
     card or postal money order in US funds.  Overseas customers add $5.00 
     postage.


        Name______________________________________________________________

        Address___________________________________________________________

        City____________________________State_______Zip___________________

        ( ) Visa ( ) Master Charge Number ________ ________ _______ _______

        Exp Date ____/____ Phone Number (________) ________ ________

        Signature for charge only___________________________ Date ________


                                         
                                         R







         INTRODUCTION

            The FINDZZ  program  is  simple  to  use  even  though  it
         provides  you  a  very powerful and flexible addition to your
         computing  capability.    The  program  operates  from   four
         windows.   Each  window is marked with operating instructions
         so most customers can operate the program without reading the
         manual.  To find a file, enter a search pattern consisting of
         partial file name  and/or  path,  date,  time.   The  program
         quickly  lists  the  matching  files.  You can then instantly
         flip back to narrow the search pattern. A selected  file  may
         be  viewed  or  edited from within the program using any of 8
         editor, word processor, or spreadsheet programs  that  reside
         on your disk.
             FINDZZ uses an index to search files,  so  the  searching
         occurs  at  blazing  speed.   As you become familiar with the
         program, you will use it to invoke your  word  processor  and
         editor  more  frequently   to   avoid   constantly   changing
         subdirectories and looking for forgotten files.
            FINDZZ  will handle up to 300 subdirectories and unlimited
         files.  It uses 85k of  memory  and  can  be  configured  for
         either a monochrome or color monitor.  It will run on any IBM
         PC or IBM compatible PC machine.
            If  you  discover a problem with the FINDZZ program or you
         have a suggestion for improvement, please fill  out  a  Field
         Report  Form  and  send  it  to  us.  We will appreciate your
         assistance greatly.  The FINDZZ Master Disk contains a report
         form which can be printed by placing the Master Disk in  your
         floppy drive and typing the command:

            REPORT

            The Master Disk also contains an order form which  can  be
         printed out with the command:

            ORDER


                                        1







         GETTING STARTED

         Installation

            The FINDZZ program is installed  on  your  hard  disk  (or
         floppy) by simply copying the program from the master disk to
         a subdirectory on your hard disk.  The root directory or  any
         existing subdirectory can be chosen or a new subdirectory can
         be created.  The following procedure will install FINDZZ in a
         subdirectory named "findzz".

         Sample Installation

            Start your computer and change directories  to  your  root
         directory with the command:

            CD \

            Then create the directory "findzz" with the command:

            MKDIR FINDZZ

            Change directories to the new directory with the command:

            CD \FINDZZ

            Place  the  Master  Disk  in your floppy disk drive A: and
         type the command:

            COPY A:FNZ.EXE

            The program will be copied from the Master  Disk  to  your
         hard  disk  and  the installation is complete.  Of course you
         can use an existing subdirectory on  your  disk  or  you  can
         create the subdirectory with a name of your own choosing.

         Quick Tryout

            Now quickly try the program  before  reading  through  the
         rest of this manual.  Make sure your default directory is the
         directory in which the program is installed.  If you followed
         the sample in the preceding Installation Section, the default
         directory will be "\FINDZZ".  Start the program by typing the
         command:

         FNZ


                                         2






            A CopyRight screen will appear with a  prompt  "Press  any
         key".   Press  the  space  bar to start the program.  Because
         this is the first time you have run  the  program,  an  Index
         File  will  be  created  by  the  program.  A blinking prompt
         "Index file missing, Wait.." will appear in  the  upper  left
         hand corner of the screen.   It takes from 5 to 30 seconds to
         create the index depending on the number  of  files  on  your
         disk  and  the  speed  of  your disk and computer.  Then four
         windows will be drawn on your  screen  with  the  FIND  FILES
         window  in  front of the others.  At the bottom of the screen
         there are function key reminders in intensified display.  The
         date  of  the  last  index  update will be highlighted in the
         upper left area of your screen.
            You can move from one window to another by pressing the F3
         key to go to the next window or F5  to  go  to  the  previous
         window.   Try  this  now  to  take a look at each of the four
         windows.  Return to the first window FIND FILES.
            Look at this window for a second.  The first line contains
         blanks for the file name and the file extension.  A  flashing
         cursor  is  located  at the first character of the file name.  
         Other lines in the first window provide blanks for entering a
         path  name,  a  starting  and ending date, and a starting and
         ending time.  Press the down arrow cursor key and the  cursor
         will move to the first character of the file extension.  Type
         "EXE" into the extension blanks.  Then press  the  PgDn  key.  
         The  cursor will jump to the bottom of the window.  Press the
         letter "F". The program will quickly find all  files  with  a
         ".exe"  extension,  switch  to the second window FOUND FILES,
         and display the first 15 of the files  in  the  window.   The
         number  of  files  found is displayed at the top right of the
         window.  Press the PgDn key to view the second page of files.  
         Press  the  down  arrow cursor key to move the highlight down
         the page.  The files are listed in  subdirectory  order  with
         deeper subdirectories listed last.  Use the up or down cursor
         arrow keys to highlight any ".exe" file.  Press the  <return>
         key  to select that file.  The program will jump to the third
         window and the selected file will be highlighted.  
            Press  the PgDn key and then press the "A" key to add this
         file to the list of programs you  can  use.   The  disk  will
         operate  as the program saves your selection.  You will later
         use this simple method to create a list of programs that  you
         can  use  to  view  a selected file.  Now you can delete this
         program from the list by pressing "D".
            Move back to the first window by pressing F5 twice.  Press
         the down arrow cursor key 5 times to move the cursor down  to
         the  STARTING DATE year position.  Type the current year over
         the "1980" previously displayed in that position.  Press  the
         PgDn  key  and then "F" to get a list of files with an ".exe"
         extension which were created this year.   If  no  files  meet
         this  criteria, the window will be blank and "Found no Files"
         will be displayed in the  upper  right  hand  corner  of  the
         second window.


                                         3





            Press F3 twice to move to the fourth window which is  used
         for  configuring  the  program  to your needs.  If you have a
         color monitor, you can select a  color  display  by  pressing
         "C".    Later you can eliminate some paths from the search by
         setting the starting path in the second line.  Press PgDn  to
         move  the  cursor  to  the third line.  If you press "S", the
         configuration will be saved on disk.  
            Press  the  Esc key to get out of the program.  A blinking
         prompt "Do you really want to quit (Y/N)?" will be displayed.  
         Press the "Y" key to end the program.


                                         4






         FIND FILES

            The  FINDZZ  program is designed to make it convenient and
         intuitive for you to find a file by repetitive narrowing of a
         search.   For  example,  you  might be looking for a file you
         created in 1988.  A search of the disk might list  200  files
         matching  that  year.   You  might  then  narrow  the list by
         specifying a file name starting with "B".  That search  might
         narrow  the  list  to 28 files.  At this point you could view
         one or two likely  files  or  you  could  narrow  the  search
         further  based  on  hints you get from the files listed.  The
         program operates so quickly that iterative searches  of  this
         type are painless and fun to conduct.  It is sometimes easier
         to edit a series of files using FINDZZ, than it is to operate
         from the DOS command line even if you know the file names you
         are looking for.
            The  FIND FILES window contains several lines for entering
         file  specifications.   A  file  must  match   all   of   the
         specifications  to be  accepted  as  a match.  The first line
         contains a field for the file name and file  extension.   You
         can enter full or partial  names  in  these  fields  and  the
         program  will  search  for  all  files  which  contain  those
         entries.  A blank field means the  program  will  accept  all
         files as matching that field.  
            The next line specifies a starting search  path.   If  you
         enter a path name in this field, the program will search that
         path and all subordinate paths.  This allows you to eliminate
         subdirectories  from  the  search  that could not contain the
         file.
            The  next  two  lines  specify the calendar interval to be
         searched.  The first line specifies the starting date of  the
         interval.   It  is defaulted to Jan 1, 1980.  The second line
         specifies the ending date of the interval.  It  is  defaulted
         to  the  present  date.  During a search, the program accepts
         any file which was created or last modified on or  after  the
         starting date but also created or modified on or  before  the
         ending date.
            The  next  two  lines  specify  the  time  interval  to be
         searched.  The first line specifies the starting time of  the
         interval and the second line specifies the ending time of the
         interval.  For example, if the starting time is set to  06:00
         and  the  ending  time is set to 12:00 the search will accept
         any file created or last modified in the morning.
            The  bottom  line  is used to execute the search, to reset
         the search fields,  or to update the index.  When the  cursor
         is  on  the  bottom  line, keying a "F" will make the program
         search for a list of files which meet the specification.   If
         you key an "I", the program will update the  index.   If  you
         key  an  "R",  the FIND FILES window will be reset to all its
         default fields.  


                                         5






         Editing a Field

            FINDZZ uses standard  editing  procedures  for  adding  or
         deleting  characters  in  a  file  specification  field.  The
         default edit mode is "REPLACE", meaning  that  the  character
         above  the  cursor  is replaced by the character entered from
         the keyboard.  You can switch to the "INSERT" editing mode by
         pressing  the "Ins" key and switch back to the "REPLACE" mode
         by pressing "Ins" again.  The INSERT mode  causes  the  keyed
         character  to  be  placed  in  front  of  the  cursor and all
         characters from the cursor to the end of the field are  moved
         one  space  to  the  right. A highlighted prompt at the upper
         right of your  screen  tells  you  whether  you  are  in  the
         "INSERT" or "REPLACE" edit mode.
         Pressing  the "Del" key deletes the character over the cursor
         and  pressing  the  backspace  key  deletes   the   character
         preceding  the cursor.  The right arrow and left arrow cursor
         keys move the cursor to the  right  and  left  in  the  field
         respectively.   The  "End"  key  moves the cursor to the last
         character in the field and the "Home" key moves the cursor to
         the beginning of the field.
            Pressing the down arrow cursor key moves the  cursor  from
         one  field  to  the  next field while the up arrow cursor key
         moves the cursor to the preceding field.  The PgDn key  moves
         the  cursor  to the last field on the screen and the PgUp key
         moves the cursor to the first field.
            The  F3  function key takes you to the next window and the
         F5 key takes you back to the preceding window.

         File Name and File Extension

            The  File  Name  field  is used to enter a partial or full
         file name.  The program then searches each file name  in  the
         index  for a match to the characters entered in the File Name
         field.  A "?" can be used as a wild card place holder. A  "*"
         is  not  used  by the FINDZZ program.  The search looks for a
         matching string of characters anywhere in each file name.   A
         '/'  at  the  end of the string means look for an exact match
         for that string.    The  search  process is  best illustrated
         with an example.  
         Suppose we search these seven files.

            EDUCATOR
            TEDDY
            TREDLITE
            FIXED
            WANTED
            LOCATED
            PROVIDED


                                         6






            If we enter "ED" in the File Name field, and run a search,
         all  seven  files  will  be  listed  because there is a match
         somewhere in each file name with "ED".  If we enter  "???ED",
         only  the last four files will match, because the first three
         characters of each file name are covered with a  "?"  so  the
         match  against  "ED"  starts  with  the fourth letter.  If we
         enter "ED??????" only the first file name would match because
         the last 6 letters are covered with a "?" so "ED" will not be
         searched  against  those  last  6 letters.  An entry of "ED/"
         would  match  no files since only the file name "ED" would be
         an exact match.
            The File Extension is searched in the same manner but that
         field only holds 3 characters instead of 8.

         Path

            The Path field  is  used  to  restrict  the  search  to  a
         starting  subdirectory  and  all  subordinate subdirectories.  
         Enter the starting path name in the second line.  The default
         path  is  "\"  which  specifies the starting directory as the
         root directory.  If the  path  does  not  exist,  a  blinking
         prompt  "DIRECTORY  DOES  NOT EXIST" will appear in the upper
         left of the screen when you execute the search.  Subdirectory
         names  are  separated  with  a  "\"  in the path field in the
         standard DOS manner.  A typical path entry would be:

            \JOHN\TEXT\MEMOS

         Date

            The starting date field specifies a month, day and year on
         or  after  which  a  file must have been created or modified.  
         The default starting date is 01/01/1980.  Either a "0"  or  a
         blank will specify an unused left digit.  
            The ending date field specifies a month, day and  year  on
         or  before  which  a file must have been created or modified.
         The default ending date is the present date.

         Time

            The starting time field specifies  a  time  in  hours  and
         minutes  on  or  after which a file must have been created or
         modified.  The default starting time is 00:00 or midnight  of
         the  previous  day.   A  24  hour  time  is  used  so 2 pm is
         specified as 14:00.   Either a "0" or a blank will specify an 
         unused left digit.  
            The ending time  field  specifies  a  time  in  hours  and
         minutes  on  or before which a file must have been created or
         modified.  The default ending time is 24:00  or  midnight  of
         the present day.


                                         7






         Find, Update Index, and Reset

            The last field on the FIND FILES window is a one character
         field used to tell the program to find files,  recompile  the
         index,  or  reset  all  the  search  fields  to their default
         values.  To move the cursor to this field, press PgDn.  Enter
         a  "F"  to  conduct  a  search.  FINDZZ will quickly scan the
         index, switch  to  the  FOUND  FILES  window,  and  list  the
         matching files.
            If you enter an "I' in the last field,  the  program  will
         recompile  an  up  to  date  index  of your disk.  A blinking
         prompt "Updating index.." will appear on  your  screen  while
         the  index  is  being  recompiled.  It will take from 5 to 30
         seconds to update the index, depending on the number of files
         on your disk and the speed of your computer  and  disk.   The
         date  and time of the last Index Update is shown in the upper
         left hand corner of the window for your convenience.   It  is
         advisable  to  recompile  your index daily at some convenient
         time.  You can also recompile the index when  you  start  the
         program by specifying an "I" parameter in the command line as
         in:

            FNZ I

            If  you  enter an "R" in the last field, all fields in the
         FIND FILES window will be reset to their default values.


                                       8






         FOUND FILES

            After you command a search by pressing the "F" key, a  new
         window  is  drawn  on  the  screen and the matching files are
         listed in  this  FOUND  FILES  window.   The  first  file  is
         highlighted.   The  number  of  matches found is shown in the
         upper right corner of the window.  If no matching files  were
         found, "Found no files" will be shown.  
            Each file name is listed with its full path and the  drive
         letter.   A  file  number  is  also listed at the left of the
         line.  At the right of the line, the date  and  time  of  the
         file's  creation  or  last  change  is  shown.  The files are
         listed  in subdirectory order, with the root directory first,
         followed by the shallowest paths,  followed  by  increasingly
         deeper  paths.   If the path is too long to display, only the
         right hand portion of the path is shown and "--" is drawn  at
         the left of the path to indicate it has been truncated.
            15 files are listed at one time in the FOUND FILES window.  
         If more than 15 files were found, you can  display  the  next
         page  of  15  files  by  pressing the PgDn key.  The PgUp key
         displays the previous page of files.  The down  arrow  cursor
         key  moves  the  highlight  to the next file and the up arrow
         cursor key moves the highlight to the previous file name.
            The  program  is limited to displaying the first 512 files
         in a very long list.  However the  correct  number  of  files
         found is listed in the upper right corner of the window.

         Selecting a File For Viewing

            To  select  a file, move the highlight to the desired file
         name and press the <return> key.  This tells FINDZZ you  want
         to select that file to view or to add to your program list.


                                       9






         SELECTED FILE

            When  you  have  selected  a file and pressed the <return>
         key, the SELECTED FILE window is drawn on the  screen.   This
         window  displays the selected file name on the first line and
         also displays a list of programs which can be used to view or
         edit the selected file.  
            First you will need a list of programs.  To  compile  this
         list  you  need  to  find  a  program  you wish to add to the
         program list.  Use the FIND FILES window to find  the  editor
         or  word  processor you wish to add.  Enter the file name and
         extension of the program to be added and run a  search.   The
         extension  must  be  either  "EXE"  or "COM".  You will get a
         short list of  file  names.  (Usually  one  file.)  Move  the
         highlight  to your program name and press <return>.  The file
         name will be shown in the SELECTED FILE window.   The  cursor
         will be located in a one character field marked "Press "A" to
         add selected file to program list".  Press the "A" key to add
         the  selected  file  to  your  program  list.   The disk will
         operate  and  the  selected  file  will  be  displayed  under
         "Programs:".   This program list is saved in the index so you
         only have to make up your list once.  It is a  good  idea  to
         make  up  your  program list while the default path is set to
         the root directory so that none of the programs you  wish  to
         add to the list are hidden from the index.
            Up to eight programs can be added  to  the  program  list.  
         Any  program  will work, but programs that will accept a file
         name as an argument  are  best.   Most  word  processors  and
         editors  will accept a file name on the command line and will
         open  the  desired file when they are invoked.  Some programs
         will not accept a file name  argument.   These  programs  can
         still be used in your program list but the selected file will
         not  be opened automatically.  In this case you will have jot
         down the selected file path and name and open it from  within
         the application.  
            Once you have completed your program  list,  the  selected
         file  can  be  viewed  or edited by simply finding a selected
         file, highlighting the desired program in the  program  list,
         and pressing the <return> key.  FINDZZ will call your program
         and give the selected file as the command  line  argument  so
         the  next  thing  you will see is the selected file from your
         editor or word processor.  
            Programs  are  not  limited to editors and word processors
         but can include spreadsheets or any other type of program you
         find  useful.   "EDLIN.COM"  and  "PRINT.COM"  are  two  good
         programs to start with.  Batch  files  are  not  accepted  as
         programs by FINDZZ.
            A  program  can  be  deleted  from  the  program  list  by
         highlighting  it  and  pressing the 'D' key.  Programs can be
         added or deleted at any time.


                                        10







         CONFIGURATION

            The  last  window  is used for configuring FINDZZ  to your
         needs.  The first field is a one character field.  It is used
         to  select  either  a monochrome display by entering "M" or a
         color display by entering "C".  The  default  is  monochrome.  
         When  you  change  the  display selection, the screen will be
         redrawn but the selection is temporary until it is  saved  as
         described below.
            The second field  allows  you  to  select  a  subdirectory
         Starting  Path  for  the  index  search.   The  Starting Path
         feature can be used to eliminate paths from the  Index  which
         you know you will never search.
            To set the Starting  Path, enter a path name in the second
         field.  Use the "\" backslash to separate directory names  as
         in "\TEXT\LETTERS".   The  path  must  start  with  the  root
         directory.   If the path does not exist a warning prompt will
         be displayed.
            Any  configuration  settings  are temporary until they are
         saved in your index file.  Once the configuration is saved it
         will  be  used  every  time  FINDZZ  is  used.   To  save the
         configuration move the cursor down to the last  line  in  the
         window  marked "Press 'S' to save configuration".  Then press
         the  'S'  key  and  the  disk  will  operate  to   save   the
         configuration and recompile the index.


                                        11






         HELPFUL HINTS

            In  this  section several common problems and pointers are
         presented in a problem/solution format to help  you  get  the
         most out of the program.

         Problem:  "I can't find a memo that I typed this morning even
            though I am sure the file name is correct."
         Solution:   Make  sure  that  your  Index has been recompiled
            since this morning.  If a file has been created, moved  or
            deleted  since  the  last  compilation,  the  Index is not
            informed about that file.

         Problem: "I can't find a file that I just found  ten  minutes
            ago in another search."
         Solution:  You may have dates or times left from  a  previous
            search  which  prevent the file from being matched.  Reset
            your dates and times to the default values by entering  an
            'R' at the bottom of the FIND FILES window.

         Problem:   "I  have a 750 Megabyte disk.  How do I get around
            the 300 subdirectory limit?"
         Solution:   Install  FINDZZ  in two or more subdirectories in
            your  root  directory.   Use  the   CONFIGURATION   window
            Starting  Path  to  separate  your  disk into chunks which
            contain less than 300 subdirectories each.



                                        12







                          FINDZZ PROBLEM REPORT FORM

            We would  appreciate it if you  would  report any problems 
         you  may discover  with the  program or the manual.   We will 
         update the program and  manual  from time to  time  and  your  
         comments will help us eliminate errors from future versions.
            If  you have an idea on how the program or manual could be
         improved or made easier  to  use  and  understand,  we  would
         appreciate your comments in these areas also.
            Please fill out all applicable sections of  the  form  and
         send  it  to  us at the address given below.  Thanks for your
         help.

            DESCRIPTION OF PROBLEM: Use other side if necessary.

         ____________________________________________________________

         ____________________________________________________________

         ____________________________________________________________

         Has the problem occurred more than once?____________________

         Program function being used when problem occurred.__________

         ____________________________________________________________


               I would like to see the following features added to the
         program or manual: _________________________________________

         ____________________________________________________________

         ____________________________________________________________

         Computer Type______________________Disk Size________________

         Name________________________________________________________

         Address_____________________________________________________

         City________________________State______________Zip__________

         Telephone including area code_______________________________

         Mail to: AEIUS CORPORATION
                  FINDZZ FIELD REPORT
                  PO BOX 700457
                  SAN JOSE, CA 95170

         Phone:   (408) 257 0658




```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #2052  MULTIBACK AND FINDZZ  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start COPY model of MULTIBAK, type:  MBC (press enter)               ║
║ To start RENAME model of MULTIBAK, type:  MBR (press enter)             ║
║ To start FINDZZ, type:  FNZ (press enter)                               ║
║                                                                         ║
║ To print MULTIBAK documentation, type:  MANUAL                          ║
║ To print FINDZZ documentation, type:  COPY FNZMAN.TXT PRN               ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MULTIBAK.DOC

{% raw %}
```
             MULTIBAK: A Multiple Generation File Backup Utility

                        Copyright 1989 Gilbert Shapiro

                                  **********


                                  I. Purpose

Many microcomputer programs that modify files, such as word processors, data
base managers, and spreadsheets, provide for a single generation of backup,
usually renaming the old version of "filename.ext" to "filename.bak" before
writing a new "filename.ext" to disk. When a new revision is again saved, the
old version again becomes "filename.bak," wiping out the backup file saved
earlier.  This is not always satisfactory. We may change our minds about a
major change later, and want to return the document or the spreadsheet to its
state several generations earlier. We may even discover much later a major
error and the loss of earlier versions could seriously set our work back. For
these reasons, some mainframe operating systems provide the option of multiple
generations of backup.  Not only the previous version of a file, but as many
generations as the user wishes (or as many as can fit in his disk space) can
be preserved. MULTIBAK is a set of programs intended to provide the most
important features of such mainframe services for MSDOS systems.

Any computer work that creates multiple changes in files can be made less
frustrating and safer from disaster by using this collection of programs. 
When editing a document or developing a spreadsheet, for example, one might
create a backup almost at the stroke of a key whenever significant changes are
made, accumulating them until a final version is completed and verified. The
backup files can then be conveniently erased using the PURGE program provided.  



                         II. Versions of MULTIBAK

This is the freely distributed version of MULTIBAK.  You are invited to  make
as many copies of this program as you wish for your own use or the use of
others, for non-commercial purposes. You may not, however, charge anything for
MULTIBAK (except for user groups, who may charge a cost-based fee, not to
exceed $10, to cover their own costs).

The free version of MULTIBAK consists of the following files:

    MULTIBAK.DOC    This file.
    MBC.EXE         The COPY model of MULTIBAK.
    MBR.EXE         The RENAME model of MULTIBAK.
    PURGE.EXE       A program for conveniently and safely erasing backup files.

These programs comprise a fully functional system that will be sufficient for
many users.  A more elaborate system, with additional conveniences, is
also available. If you send $20 to:

    CN Software
    Dept. 183
    414 S. Craig St., Suite 280
    Pittsburgh, PA 15213

as a registered user of MULTIBAK you will receive a copy of an enhanced
system, which includes 

    1. MEMORY RESIDENT versions of both the COPY and RENAME models. These make 
        MULTIBAK available to the user at the touch of a Hot Key of his choice,
        permitting execution from within programs that do not provide
        facilities for the execution of DOS commands.

    2. Two additional utilities: REVERT, which quickly and simply returns you to
        an earlier version of your file while preserving the current version,
        and RENUMBER, a facility to change a broken series of backup names to
        an unbroken series beginning at number one.


                      III. General Functions of MULTIBAK

MULTIBAK saves the current version of a file under a new file name; it is
normally called immediately prior to issuing a "save" command to some program,
such as a word processor, to write a new version.  The name of the backup file
is, by default, provided by MULTIBAK.  Unless over-ridden by the user, by means
described below, it is constructed as follows:

     - The drive, directory, and first file name are identical with the 
       original file.
     - The extension is the first character of the extension of the original 
       file, followed by the lowest integer from 1 to 99 not yet used in
       backup versions of that file. If  the original file has no extension,
       the backup file extension will begin with a dash:  for example, the first
       backup of MYFILE.  will be MYFILE.-1, the second MYFILE.-2.

Thus, if the file to be backed up is MYFILE.EXT, the first call to MULTIBAK
will produce a backup file named MYFILE.E1, the second backup will be called
MYFILE.E2, and so on.  If, after the call to MULTIBAK, a new version is saved
by a spreadsheet or word processor, it can always have the original name,
MYFILE.EXT. Note that the preservation of the first letter of the original
extension permits us to distinguish the backups of MYPROG.C, MYPROG.EXE and
MYPROG.DOC, which will, respectively, have extensions beginning with C, E, and
D. (The backups of MYFILE.BAS, MYFILE.BAT, and MYFILE.BAK will be jumbled
together, however.) 

The COPY model, MBC.EXE, creates a new backup file by copying the current
version, without disturbing the original.  The RENAME model, MBR.EXE, on the
other hand, calls upon DOS to rename the original, changing the name in
the directory. Generally, these two procedures behave like the DOS commands
with the same names, but with one exception:  the RENAME model of MULTIBAK
permits backups to appear in a directory different from the directory of the
original file, which the DOS command does not. Like the DOS "copy" command,
the COPY model of MULTIBAK permits backups to a different drive, while the
RENAME model, like the rename command in DOS, does not. Like the DOS "copy"
command, the COPY model of MULTIBAK keeps the original file intact, under its
original name; like the "rename" command, the RENAME model does not, since it
changes the file's name. On the other hand, long files can take considerably
longer to back up using the COPY model, although they can be RENAMEd in an
instant, and, in fact, as quickly as short files.


                           IV. How to Use MULTIBAK

In the following discussion, we will use the name MULTIBAK when we wish to
describe commands or features common to both the COPY model, MBC.EXE, and
the RENAME model, MBR.EXE.

At a DOS prompt (such as "C>") MULTIBAK is called as follows:

       C>MULTIBAK filespec [backup filename root] [max files]

(the arguments in square brackets, as usual, being optional). 

"Filespec" refers to the specification of the file to be backed up. It can be
a "full" specification, including an optional drive and directory path.  

The "backup filename root," if provided, over-rides the default filename for
backup files, which is described above (Section III). The rules for
constructing this argument are provided below, Section V.

"Max files," the final argument, specifies the maximum number of versions to
be saved. That value can be any number up to 99. If this optional argument is
provided, it over-rides the program default of 50. In case very large files
are saved when disk space is at a premium, it might be set as low as 2 or 3.
When plenty of disk space is available, or files are short and the recovery of
earlier versions might be critical, a value of 99 makes sense. Since the
program seeks the lowest integer available for a new backup by searching for
existing files starting at the maximum and proceeding down, an unnecessarily
large number might slightly slow execution. Note that "max files" can not be
entered unless an explicit "backup filename root" is also entered:  otherwise
the number entered as the maximum number of files will be taken as the file
name root.  For example, on its first execution

    MBC MYFILE 10

will produce a backup of MYFILE named "10.-1".

    MBC MYFILE MYFILE 10

will produce what is desired, a backup named "MYFILE.-1" searching only from
10 to 1 instead of from 50 to 1 for already existing backup files.

In all of the following examples, the file to be backed up is understood to be
C:\SUBDIR\MYFILE.EXT. MBC.EXE and MBR.EXE are either in the current default
directory or in the directory path. MULTIBAK means either MBC or MBR.

1. Succession of executions of COPY model, with default backup filenames.

Command                     Files existing after command executed.
-------                     --------------------------------------

C>MBC MYFILE.EXT              C:\SUBDIR\MYFILE.EXT
                              C:\SUBDIR\MYFILE.E1

C>MBC MYFILE.EXT              c:\subdir\MYFILE.EXT
                              c:\subdir\MYFILE.E1
                              c:\subdir\MYFILE.E2

                                    ******

2. Succession of executions of RENAME model, with default backup filenames.

Command                     Files existing after command executed.
-------                     --------------------------------------

C>MBR MYFILE.EXT              C:\SUBDIR\MYFILE.E1

C>MBR MYFILE.EXT              C:\SUBDIR\MYFILE.E1
                              C:\SUBDIR\MYFILE.E2

Note: Ordinarily, in this case, another program such as a word processor would
create a new version of MYFILE.EXT when MULTIBAK creates a backup.

                                    *****

3. Backup to a different directory.

Command                             Files existing after command executed.
-------                             --------------------------------------

C>MBC MYFILE.EXT \ALTDIR\MYFILE      C:\SUBDIR\MYFILE.EXT
                                     C:\ALTDIR\MYFILE.E1

                                      or

C>MBR MYFILE.EXT \ALTDIR\MYFILE      C:\ALTDIR\MYFILE.E1

                                    *****

4. Backup to a different drive.
        
Command                             Files existing after command executed.
-------                             --------------------------------------

C>MBC MYFILE.EXT D:\ANYDIR\MYFILE     C:\SUBDIR\MYFILE.EXT
                                      D:\ANYDIR\MYFILE.E1

                                    *****

5. Backup to a new backup filename.

Command                             Files existing after command executed.
-------                             --------------------------------------

C>MULTIBAK MYFILE.EXT BACKFILE        C:\SUBDIR\MYFILE.EXT
                                      C:\SUBDIR\BACKFILE.E1

                                    *****

5. Backup using the same filename, to a different drive and directory.

Command                             Files existing after command executed.
-------                             --------------------------------------

C>MBC MYFILE.EXT D:\ANYDIR\MYFILE     C:\SUBDIR\MYFILE.EXT
                                      D:\ANYDIR\MYFILE.E1   

NOTE: In this example, the explicit filename MYFILE may NOT be omitted in
specifying the backup filename, even though it may be omitted when calling the
DOS COPY program.


                         V. The Backup Filename Root

The "backup filename root," if provided, over-rides the default filename for
backup files. It is called a "root" since an extension including a sequence
number is appended to it to construct the full backup filename. 

The filename root:

     MUST include a first name for the backup file;
     MAY include a directory path;
     MUST NOT include an extension. If one is entered, it is ignored.

The extension will always be assigned by the program, by the rules described
above. 

The rule on including a drive in the backup filename root differs for the COPY
and the RENAME models.  

     You MAY include ANY drive when executing the COPY model.
     You MUST include the same drive if any is named in "filespec," i.e., the
        drive of the original file, when executing the RENAME model.

For example:

             C>MBR D:\SUBDIR\FILE.EXT D:\NEWDIR\BACKUP 

is a correct command line entered from the current default disk C:, which
would rename the current version of FILE.EXT in directory \SUBDIR of
disk D: to one of BACKUP.E1, BACKUP.E2, BACKUP.E3, etc. (using the first
unused integer) in directory \NEWDIR of disk D:.

If the second "D:" is omitted, 

             C>MBR D:\SUBDIR\FILE.EXT \NEWDIR\BACKUP

the command will be interpreted as an attempt to backup a file located on D:,
by renaming, to drive C:, the default drive, and the error message "Can not
back up to a different drive"  will appear on the screen. On the other hand,

             C>MBC D:\SUBDIR\FILE.EXT \NEWDIR\BACKUP

using the COPY version, will create the backup file demanded:
C:\NEWDIR\BACKUP.E?? where ?? represents a sequence number.


                               VI. PURGE

PURGE permits the deletion of selected generations of backup files created by
MULTIBAK. Particularly when files are long, storing many  generations could
use considerable disk space to little purpose.  But the chore of erasing large
numbers of backups might be  burdensome, since wild cards would probably wipe
out useful files, including the current version.  PURGE permits the user to
select the generations to be erased with a single command. On each execution
of MULTIBAK, the user is advised of the size in bytes and the serial number of
the new backup, so that he can use the purge facility when he feels the number
of backups is becoming excessive.

PURGE is called at the DOS prompt as follows:

       C>PURGE [filename] [highest sequence number] [starting sequence number]

where the "filename" is the name of the file whose backups are to be erased,
including an optional drive, directory, and extension. The "highest sequence
number" option permits erasing only the oldest generations, up to the
specified number. Thus, if a file has 12 generations of backup on disk it is
possible to erase, for example, the first six, or the first eleven. The second
argument to PURGE, the starting sequence number, permits still more
flexibility, the erasing of only the generations beginning at the number
entered.  Thus, if a file named "PROGRAM.C" has been backed up 8 times the
directory will show:

 PROGRAM.C1 
 PROGRAM.C2
 PROGRAM.C3
 PROGRAM.C4
 PROGRAM.C5
 PROGRAM.C6
 PROGRAM.C7
 PROGRAM.C8

After execution of

     C:>PURGE PROGRAM.C 6 3

the disk will hold:

 PROGRAM.C1
 PROGRAM.C2
 PROGRAM.C7
 PROGRAM.C8

If, as in this case, the sequence is broken, C>PURGE PROGRAM.C will erase
files only until it finds a missing backup, i.e., in this case, it will erase
PROGRAM.C1 and PROGRAM.C2. If, however, an upper limit is given as an argument
to the command line all files up to that limit will be erased, regardless of
missing versions. Thus, all files in the broken list above will be deleted by
the command  C>PURGE PROGRAM.C 8.

These rules present an apparent danger to any file with an extension composed
exclusively of two digits. When MULTIBAK backs up a file called FILE.12 its
first backup will be called FILE.11, and its second backup will be called
FILE.13. (If FILE.12 exists, it will skip that name.) Now the original file,
FILE.12, appears to the computer as it does to a human observer as
indistinguishable from a backup, and the command PURGE FILE.12 would seem to
destroy the current version, FILE.12, along with its backups.  PURGE, however,
is programmed to avoid this;  it will never erase the current version entered
as its first argument on the command line.

Examples of the Use of PURGE
============================

                  Erasing all backup files:  PURGE MYFILE

Files existing before command       Files existing after command
=============================       ============================

 MYFILE.EXT                             MYFILE.EXT
 MYFILE.E1
 MYFILE.E2
 MYFILE.E3


          Erasing all backups except the most recent:   PURGE MYFILE 2

Files existing before command       Files existing after command
=============================       ============================

 MYFILE.EXT                             MYFILE.EXT
 MYFILE.E1                              MYFILE.E3
 MYFILE.E2 
 MYFILE.E3


         Erasing all except the first two backups:  PURGE MYFILE 4 3

Files existing before command       Files existing after command
=============================       ============================

 MYFILE.EXT                             MYFILE.EXT
 MYFILE.E1                              MYFILE.E1
 MYFILE.E2                              MYFILE.E2
 MYFILE.E3
 MYFILE.E4


                 VII. Executing MULTIBAK from Other Programs

While MULTIBAK can be called from the DOS prompt like any other program, it is
specifically designed to be called from within applications that write
modifications to files and provide either a DOS command call facility or a DOS
Shell option.  For example, SPRINT is an editor that, like many others,
provides a macro, "call," that executes a DOS command.  The following macro
can be bound to a function key, so that it executes each time that key is
pressed:

        call MBR fname write fname

This stores the  current version of the file being edited (SPRINT calls it
"fname") without destroying previous backup versions, and then writes the
newly edited version to disk, under the original file name. This backup
procedure is very fast, and can be called a dozen times or more in a given
editing session, so as to provide the possibility of returning to many
different versions if desired. At the end of an editing session, some or all
of these backups can be PURGEd.

The popular word processor Word Perfect offers a different method of using
MULTIBAK while editing.  Instead of a macro for executing a DOS command,
Word Perfect offers a "shell" command. Pressing Control-F1, the user sees a 
DOS prompt, which enables him to execute any DOS command including MBR or
MBC.


                               VIII. Disclaimer

Used properly, this software will perform as described. By using this
software, you acknowledge that this software may not suit your particular
requirements or be completely trouble-free. We are not responsible for your
specific application or any problems resulting from use of this software. We
have no liability to you or any other person or entity for any damage or loss,
including special, incidental, or consequential damages, caused by this
software, directly or indirectly.  Some states do not allow the limitation or
exclusion of liability for incidental or consequential damages, so the above
limitation or exclusion may not apply to you.

```
{% endraw %}

## REGISTER.TXT

{% raw %}
```





                             FINDZZ REGISTRATION FORM

         If you  use the  program regularly, you are expected to  register.
      This provides us with revenue to continue working on improvements and 
      additions to the program.  When you  register  as an FINDZZ  User, we 
      will send you the latest program  disk.  In addition, we will provide 
      you  with a  free  copy of  the  next  improved  version,  when it is 
      released.  You can register by mail or phone.

      MAIL TO: AEIUS CORPORATION   OR PHONE: (408) 257 0658
               PO BOX 700457         Leave your order, credit card
               SAN JOSE, CA 95170    number, name, address and phone
                                     number on our recorder.  Use
                                     form below as a guide.  Or
                                     leave your phone number for
                                     call back.


     Registration costs $19.00 POSTPAID and  TAX  PAID.    Pay  by  check, 
     money order or credit card.  Canadian or foreign customers use credit 
     card or postal money order in US funds.  Overseas customers add $5.00 
     postage.


        Name______________________________________________________________

        Address___________________________________________________________

        City____________________________State_______Zip___________________

        ( ) Visa ( ) Master Charge Number ________ ________ _______ _______

        Exp Date ____/____ Phone Number (________) ________ ________

        Signature for charge only___________________________ Date ________




```
{% endraw %}

## REPORT.TXT

{% raw %}
```





                          FINDZZ PROBLEM REPORT FORM

            We would  appreciate it if you  would  report any problems 
         you  may discover  with the  program or the manual.   We will 
         update the program and  manual  from time to  time  and  your  
         comments will help us eliminate errors from future versions.
            If  you have an idea on how the program or manual could be
         improved or made easier  to  use  and  understand,  we  would
         appreciate your comments in these areas also.
            Please fill out all applicable sections of  the  form  and
         send  it  to  us at the address given below.  Thanks for your
         help.

            DESCRIPTION OF PROBLEM: Use other side if necessary.

         ____________________________________________________________

         ____________________________________________________________

         ____________________________________________________________

         Has the problem occurred more than once?____________________

         Program function being used when problem occurred.__________

         ____________________________________________________________


               I would like to see the following features added to the
         program or manual: _________________________________________

         ____________________________________________________________

         ____________________________________________________________

         Computer Type______________________Disk Size________________

         Name________________________________________________________

         Address_____________________________________________________

         City________________________State______________Zip__________

         Telephone including area code_______________________________

         Mail to: AEIUS CORPORATION
                  FINDZZ FIELD REPORT
                  PO BOX 700457
                  SAN JOSE, CA 95170

         Phone:   (408) 257 0658

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2052

     Volume in drive A has no label
     Directory of A:\

    FILE2052 TXT      3775   1-24-90  11:53a
    FILES    TXT       609   9-15-89   8:52a
    FNZ      EXE     22528   9-09-89  11:24a
    FNZMAN   TXT     32909   9-15-89   8:34a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   1-24-90  12:20p
    MANUAL   BAT        80   9-09-89  10:13a
    MBC      EXE      9935  10-05-89   9:29p
    MBR      EXE      8647  10-05-89   9:00p
    MULTIBAK DOC     18696  10-06-89  10:43a
    PURGE    EXE      8739   9-11-89   5:01p
    READ     ME       1045   9-09-89  10:12a
    README   BAT        38   6-20-87   8:50a
    REGISTER BAT        23   9-15-89   8:36a
    REGISTER TXT      1681   9-09-89   9:55a
    REPORT   BAT        21   4-29-89  10:49a
    REPORT   TXT      2069   4-29-89  10:45a
           17 file(s)     111604 bytes
                           42496 bytes free
