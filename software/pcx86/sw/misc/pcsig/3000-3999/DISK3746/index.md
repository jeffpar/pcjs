---
layout: page
title: "PC-SIG Diskette Library (Disk #3746)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3746/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3746"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ACCTMAN.TXT

{% raw %}
```
(This is a text-only version of the Account Manager user manual.)

             Account Manager

               version 1.2


                WinnoVation
                    Innovation through Windows...


           (C) Copyright 1993
               Winnovation
              PO Box 271071
       Ft. Collins, CO  80527-1071
                   USA

       Telephone:  (303) 484-7204

       E-mail:   CompuServe: 71774,605
                   Internet: 71774.605@compuserve.com


Introduction
------------

Account Manager is a tool designed for people who must  keep
track  of how much time they spend on different projects  or
accounts.  Examples of such uses are...

   * A  person  who  charges their time to several  different
     projects
     
   * Someone who bills to multiple clients
     
   * An  entrepreneur who must keep records of  business  vs.
     personal use of a computer for tax purposes
     
   * And many more!
     
To  use  Account Manager, you "punch in" to each project  or
account as you begin working on it, and "punch out" when you
are  done.  At the end of the week, or whenever you  need  a
report  of  how  your time was spent, Account  Manager  will
generate  a report, showing your time in varying  levels  of
detail.

Account  Manager also has a convenient feature  to  make  it
even  easier to use.  After your list of projects  has  been
entered, you can click on the Account Manager icon with  the
right mouse button to get the Quick Access List.  This  list
shows  all of the projects in your list, and makes  it  very
easy and convenient to punch in and out of them.

For   even  greater  flexibility  and  convenience,  Account
Manager  can automatically punch in or out of a  project  or
activate itself when certain user-specified applications are
started.  You may never have to punch in or out manually!

For  those occasions when you must exit Windows for whatever
reason,   Account   Manager  includes  a  DOS   command-line
interface so you can punch in/out from DOS.

Note that Account Manager requires Windows 3.1.


Packing List
------------

Your package should include the following:

     This manual
     Distribution disk
     License statement
     
The  following  files should be present in the  distribution
disk:

     ACCTMAN.EXE    Account Manager starter
     $AM.EXE        Account Manager program
     ACCTDLL.DLL    Account Mgr. support library
     ACCTMAN.HLP    On-line help file
     DOSACCT.EXE    DOS command-line interface
     ACCTMAN.TXT    Documentation text file
     
If any files are missing, please contact Winnovation.


Installation
------------

Important:  You  must make sure no other copies  of  Account
Manager are running when you install this version.

First, make sure that no other copies of Account Manager are
currently  running.  Then simply copy all of the files  from
the Account Manager distribution disk to a directory such as
C:\ACCTMAN.   To  do  this  from  a  DOS  prompt,  type  the
following  (assuming your floppy drive is A: and  your  hard
disk is C:):

     MKDIR C:\ACCTMAN
     COPY A:\*.* C:\ACCTMAN
     
After the files are copied, add Account Manager to a Program
Manager  group.  To do this, find ACCTMAN.EXE with the  File
Manager  and  drag it to the group you want in  the  Program
Manager.   To  run  Account Manager  every  time  you  start
Windows, add Account Manager to the Startup group in Program
Manager.   See  your Windows manual if you are unsure  about
how to do any of these steps.


Upgrading from an older version
-------------------------------

If  you  are upgrading to Account Manager 1.2 from an  older
version, you should make a backup copy of your project  list
and database files.  The file formats that this version uses
are different from the previous versions, and the files will
be  converted  immediately to the new  format  when  Account
Manager 1.2 starts.


Registration
------------

When  Account  Manager  is first started,  you  will  see  a
registration reminder screen.  Click the Register...  button
and you will see the following registration screen:



Enter  your name EXACTLY as shown on your license statement,
and  enter  your serial number and registration  code  (also
found on the license statement).


Getting Started
---------------

This  section  is  intended as a general overview  to  using
Account  Manager.   For more detail,  please  refer  to  the
reference section.  Please note that the words "project" and
"account" are used interchangeably within this manual.

When  you  start  Account Manager, you  will  see  a  screen
similar to the following:



The  large space on the left side is the project list.   You
should enter each project or account that you work on in  to
this  list.  To do this, you should click on the top portion
of  the  list  (you will then see a flashing cursor  there),
type  the  name  of the project, and click the  Add  button.
When  you do this, you will notice that the project has been
added  to the list.  Repeat this step for each project  that
you want to enter.

For  each project that you enter, you may select whether  or
not  Account  Manager  should  prompt  for  a  comment  when
punching in to that project.  A comment is simply additional
information  to  help you track your time with  more  detail
(see   the   Comments  section  in  this  manual  for   more
information).

After  all of the projects have been entered, you may  punch
in  to one.  To punch in to a project, select the project in
the  list and click the In button.  Alternatively,  you  may
double-click on the project name in the list.  If the Prompt
for  Comment  box was checked, you will be  prompted  for  a
comment  for this session.  After you punch in,  the  status
line  at the bottom of the window will reflect which project
you are punched in to.

To punch out of a project, simply click the Out button.  You
can  also  just  punch in to another project  --  this  will
automatically punch you out of the first one.

To make punching in and out more convenient, Account Manager
provides a Quick Access List.  To access this list, minimize
Account  Manager and click on the icon with the right  mouse
button.  This will bring up a list of your projects for  you
to conveniently punch in to and out of.

If  you wish to delete a project, select it in the list  and
press the Delete button.  Note that this will not delete the
data  in  the  database for that project -- it  will  merely
remove the project from the Project List.

To  generate  a  report, select Create Reports...  from  the
Reports  menu.  You will have the option of creating several
different kinds of reports.  For details about the different
report types please refer to the reference section.


---------
Reference
---------


Project Lists and Databases
---------------------------

In  Account  Manager, the Project List and the Database  are
two  different  things.  It is important to  understand  the
difference.

A  Project  List is simply a list of your projects.   It  is
displayed  on the main window, and also in the Quick  Access
List  for easy access.  Project lists are usually saved with
a .AMP extension.

A  Database  contains all of the punch  in/punch  out  data.
Every time you punch in to or out of a project, the database
file  is updated.  Database files are usually stored with  a
.AMD extension.

Note that Project Lists and Database files are not connected
in   any   way.   A  Project  List  exists  only  for   your
convenience.  It is possible to punch in to a project  which
is  not even in the Project List (to do this, type the  name
of  the project and press In -- do not press the Add button,
which  would  add  it  to  the Project  List).   Conversely,
deleting a project from the Project List will NOT delete the
associated data in the database.

To  find  out  the current Project List and Database  files,
choose Get Status... from the File menu.

Note  that database files can grow quite large over  a  long
period  of  time  -- it is recommended that you  delete  old
records  periodically  via the Edit Database  option.   This
will   reduce  the  file  size  and  also  speed  up  report
generation.

Note  that  the  application  setup  information  (see   the
Application Setup section for more details) is stored in the
.AMP file with the Project List.


Comments
--------

Comments  are extra information you can enter when  punching
in   to  a  project,  to  provide  more  detail  about  your
activities.  This allows you to keep a more detailed log  of
your time.

Each project can be individually configured to prompt or not
prompt for a comment when punched in to.

When  you  are prompted for a comment, you will be  shown  a
drop-down box which contains a list of your 10 most recently
used  comments for your convenience.  You may either  select
one  from  this list, or type in a new comment.  Then  click
the  OK button to continue punching in.  Pressing Cancel  at
this point will cancel the punch in action.


Database Options
----------------

The  Database  menu  contains  several  options  related  to
database management.


Punch In Earlier
----------------

This  option  allows  you to punch in to  a  project  at  an
earlier  time.   This  is especially  useful  if  you  start
working on a given project, but forget to punch in to it.

When  you  select  this option, you will see  the  following
screen:



Information Fields:

     Previous Project: This is the name of the last  project
     that  was active.  If this is a new database and  there
     is  no  previous project on file, this field  will  say
     "(none)".
     
     Punched  In/Out At: This is the date and time that  the
     previous  project was punched in to or out of (whatever
     the  last  punch in/out event was).  If this is  a  new
     database and there is no previous project on file, this
     field will say "(N/A)".
     
Selection Fields:

     New  Project Name: Enter the project you wish to  punch
     in  to  here.  You can either type a project  name,  or
     select one from the drop-down list of projects.   If  a
     project  was selected in the project list on  the  main
     screen,  then  that project will be  shown  here  as  a
     default.
     
     Time To Punch In: There are two fields in this section.
     
      Date: Valid dates are in the format MM/DD/YY.
      
      Time:  Valid  times are in the format  HH:MM  (24-hr),
      HH:MMa  or  HH:MMp.   For example, the  following  are
      valid times:
      8:00, 14:35, 2:35p, 1:30a


If the project you punch in to is configured to prompt for a
comment, then you will be prompted for the comment.

Note that you are not permitted to punch in to a project  at
an earlier time than the previous punch in/out time.  If you
need  to  do  this, you must delete the last record  in  the
database  via  the Edit Database option.  You are  also  not
permitted  to enter a time which is later than  the  current
time of day.


Punch Out Earlier
-----------------

This  option  allows you to punch out of  a  project  at  an
earlier time.  This option is useful if you forget to  punch
out of a project, or if you are away from your computer when
you stop working on a project.

When  you  select  this option, you will see  the  following
screen:



Information Fields:

     Current  Project:  This is the name  of  the  currently
     active project.
     
     Punched  In  At:  This is the date and  time  that  the
     current project was punched in to.
     
Selection Fields:

     Time  To  Punch  Out:  There are  two  fields  in  this
     section.
     
      Date: Valid dates are in the format MM/DD/YY.
      
      Time:  Valid  times are in the format  HH:MM  (24-hr),
      HH:MMa  or  HH:MMp.   For example, the  following  are
      valid times:
      8:00, 14:35, 2:35p, 1:30a


Note that you are not permitted to punch out of a project at
an  earlier  time than the previous punch in time.   If  you
need  to  do  this, you must delete the last record  in  the
database via the Edit Database option.


Punch Out on Exit
-----------------

This  option  causes Account Manager to  punch  out  of  the
currently  active project when exiting.  This is  convenient
in case you forget to punch out at the end of the day, etc.

If  this option is not enabled, then you will remain punched
in to the active project when Account Manager is closed.


Warn if Active on Startup
-------------------------

If  this  option is selected, you will be warned if you  are
already punched in when Account Manager starts.  The warning
will be similar to the following:



The top lines reflect the currently active project including
the  time  it  was  punched in to.  You have  the  following
options:

     Remain  Punched In: Select this option if you  want  to
     remain  punched  in  to  the currently  active  project
     displayed.
     
     Punch  Out Now: Select this option if you want to punch
     out now from the currently active project displayed.
     
     Specify  Earlier Time to Punch Out: Select this  option
     if  you  want  to  punch out from the currently  active
     project at some time before now.  Note that you are not
     allowed  to  punch out before the current  project  was
     punched  in to, nor can you punch out after the current
     time.
     
      Date: Valid dates are in the format MM/DD/YY.
     
      Time:  Valid  times are in the format  HH:MM  (24-hr),
      HH:MMa  or  HH:MMp.   For example, the  following  are
      valid times:
      8:00, 14:35, 2:35p, 1:30a


This option is convenient if you stay in Windows all of  the
time.  If this is the case, then there is no reason that you
should  be  already  punched in when Account Manager  starts
(unless you forget to punch out), except for a system  crash
or other undesirable occurrences.


Enable Application Punch In/Out
-------------------------------

This  menu  option  enables the automatic application  punch
in/out  feature  of Account Manager.  For more  information,
refer to the Application Setup section of this manual.


Application Setup
-----------------

Account Manager has the capability of automatically punching
in or out or prompting for a project when other applications
are  started or closed.  To get to this setup screen, select
Application Setup... from the Database Menu.

To  enable automatic application punching in or out, set  up
the  applications  how  you want them from  the  Application
Setup screen and then select Enable Application Punch In/Out
from the Database Menu.

The  following is a typical Application Setup screen with  a
few applications set up:



The  following is a description of the various fields on the
Application Setup screen:

     Event:  This  is  either Start or Close,  depending  on
     whether you want to trigger on the application starting
     or closing.
     
     Application Title: This is the title of the application
     you wish to trigger on.  This is NOT the file name - it
     is  the name of the program, as shown on the title  bar
     of  the window when it is first started.  You only need
     to  enter  the first few characters of the name  -  for
     example, if you enter Calc, then Calculator will match.
     The  more  characters you enter, the more specific  you
     can  be as to which application will trigger the event.
     If   you   enter   less   characters,   then   multiple
     applications  will match and trigger  the  event.   For
     example, if you enter C, then Calculator and Clock will
     both match.
     
     If  an  application matches more than  one  event,  the
     event  is  chosen which matches the greatest number  of
     characters; i.e., the most specific event that matches.
     For  example, if you have two application  events  with
     titles  of  Cal and Calculator, then running Calculator
     will only trigger the second of the two.
     
     If  this  field  is left blank, then every  application
     will  match  the name (except those that match  another
     event more specifically).
     
     Action: This is the action you want Account Manager  to
     take  when the application starts/closes.  The  options
     are:
     
      Punch In: Punches into a project.
      
      Punch Out: Punches out.
      
      Activate:  Activates Account Manager and  prompts  for
      input.   Note that Account Manager will remain on  top
      of  all  other windows until some action is  taken  by
      the user.
     
     Project:  If  Punch In is selected as the Action,  then
     this is the project to punch into.
     
     Comment: There are three options for comments:
     
      None: No comment.
      
      Application Title: This enters a comment which is  the
      title  of  the application that triggered  the  event.
      This  is  convenient if more than one application  can
      trigger  an  event - this comment can tell  you  which
      application it was.
      
      Select:  Allows you to enter a comment, or select  one
      from the history list.


To add a new application event:

Fill  in the event you want using the field described above,
and click the Add button.

To change an existing application event:

Click  on the event in the list, make the modifications  you
want  using the fields described above, and click the Change
button.

To delete an existing application event:

Click on the event in the list, and click the Delete button.

Note  that application setup information is stored with  the
Project List in the .AMP file.


Editing the Database
--------------------

This  function  allows you to delete data from  the  current
database.   This can reduce the database size, resulting  in
faster  report generation.  Also, if you should accidentally
punch in or out of a project, you can delete the most recent
records  (punch in/out actions) from the database one  at  a
time.

When  this  function is selected, a screen  similar  to  the
following will be displayed:



Information Fields:

     Database: This is the filename of the currently  loaded
     DatabaseDATABASEFILES file.
     
     Database  contains information from {date}  to  {date}:
     These  are the range of dates for which information  is
     available in the database.
     
Selection Fields:

     Delete  data from {start date} to {end date}: Selecting
     this  option  and pressing OK will delete data  in  the
     database   ranging  from  start  date  to   end   date,
     inclusive.  A punch in/out pair will be deleted if  the
     punch in time is within the date range specified,  even
     if  the punch out time is not.  Valid dates are in  the
     format MM/DD/YY.
     
     Delete data up to and including {date}: Selecting  this
     option and pressing OK will delete data in the database
     from  the  beginning  up to date, inclusive.   A  punch
     in/out  pair will be deleted if the punch  in  time  is
     within the date range specified, even if the punch  out
     time is not.  Valid dates are in the format MM/DD/YY.
     
     Delete  last record in database: Selecting this  option
     and  pressing  OK will delete the last  record  in  the
     database.  This record will include both a punch in and
     a punch out.  The date and time shown are the time that
     the  project was punched out of.  Note that since using
     the  database editor automatically punches you  out  of
     the current project, there will always be a in/out pair
     at  the  end  of  the  database  when  this  option  is
     selected.
     
     Store deleted data: This option indicated that the data
     which  is  deleted from the database will be stored  in
     this  indicated  file (which is the database  filename,
     with  a  .BAK extension).  Note that if this .BAK  file
     already  exists, the new data will be appended  to  it.
     Note  that this option is not available when using  the
     Delete last record in database option.


Note  that  selecting this function will  cause  you  to  be
punched out of your current project.


Reports
-------

The  Reports menu contains options related to generating and
viewing reports.  See the following sections for details.


Selecting an Editor
-------------------

This  menu option allows you to select an editor to  use  to
view  your report files.  The default is notepad.exe,  which
is  normally in your Windows directory.  If you change  this
editor,  the  new  editor must support  a  filename  on  the
command line, i.e. notepad.exe report.txt.

Hint:  If you use CSV-format files (Comma Separated Values),
then  a  spreadsheet such as Microsoft Excel is  a  possible
editor.


Selecting a Time Format
-----------------------

This  option  allows  you to select  the  format  used  when
printing   time  durations in the  reports.   You  have  the
option  of  HH:MM:SS format (i.e. 03:20:00),  or  a  decimal
hours format (i.e. 3.33).

Note:  Some spreadsheets do not correctly interpret  a  time
span  in  HH:MM:SS format which is greater  than  24  hours.
These time spans may import as a string field, rather than a
time  field.   If  you have this problem, you  may  wish  to
switch to the decimal format for time spans.


Creating a Report
-----------------

This  option  allows you to create reports which  show  your
time   usage.   There  are  three  different  report  types,
detailed  in the following sections.  Note that the examples
in  the  following sections were not created from  the  same
database.

There  are  two  report  formats: Formatted  Text  and  CSV.
Formatted Text will create a space-formatted file,  suitable
for viewing with an editor such as notepad.  CSV will create
a comma-delimited report file, suitable for importing into a
spreadsheet.

The  following  example report files  are  examples  of  the
Formatted Text report format.

  Overall Summary by Project
  --------------------------
  This report shows the total time spent on each project  in
  the  database, from the starting date to the  ending  date
  (inclusive).  The following is an example Overall  Summary
  by Project report:
  
  Project Summary Report
  Starting 01/01/93, Ending 04/05/93
  
  Project Name                           Time (HH:MM:SS)
  ------------------------------------------------------
  Presentations                               1:14:02
  
  Meetings                                    0:25:12
  
  Project X                                   3:59:07
  
                                           ----------
                              Total Time:     5:38:21


  Daily Summary by Project
  ------------------------
  This report shows the total time spent on each project  in
  the  database, from the starting date to the  ending  date
  (inclusive).   The following is an example  Daily  Summary
  by Project report:
  
  Daily Project Summary Report
  Starting 01/01/93, Ending 04/05/93
  
  Date           Project Name                         Time (HH:MM:SS)
  ---------------------------------------------------------------------
  03/21/93       John Smith                               0:04:09
                 Patty Roburn                             0:03:52
                                                        ----------
                                             Total Time:  0:08:01
  
  03/23/93       John Smith                               1:00:07
                 Ed Hayes                                 3:25:09
                 Jane Doe                                 1:00:09
                                                        ----------
                                             Total Time:  5:25:25
  
  04/05/93       Ed Hayes                                 0:25:02
                                                        ----------
                                             Total Time:  0:25:02


  Detailed Report
  ---------------
  This  report shows the time of each action (punch  in/out)
  present  in  the database, from the starting date  to  the
  ending date (inclusive).  No summary is generated in  this
  report.   Note that a detailed report is the  only  report
  that  shows  the  comments that were  optionally  entered.
  The following is an example Detailed Report:
  
  Detailed Report
  Starting 01/01/93, Ending 05/19/93

  Project Name                   In/Out   Date     Time     Total Time  Comment
  -----------------------------------------------------------------------------
  Project 3                        In   04/05/93  3:00:00p
  Project 3                        Out  04/05/93  4:05:00p    1:05:00   
  Project 2                        In   04/05/93  4:20:00p
  Project 2                        Out  04/05/93  6:18:30p    1:58:30   
  Project 4                        In   04/05/93  6:18:36p
  Project 4                        Out  04/05/93  6:25:05p    0:06:29   
  Project 3                        In   05/19/93  9:08:31p
  Project 3                        Out  05/19/93  9:08:35p    0:00:04   Sample comment
  Project 5                        In   05/19/93  9:08:35p
  Project 5                        -- Still Punched In --               



Command Line
------------

The command line options for Account Manager are:

     ACCTMAN
     ACCTMAN -out
     ACCTMAN -in
     ACCTMAN project name
     
The  first option runs Account Manager normally.   The  -out
option  will  punch out of the currently active project,  if
any.   The  project name option will punch in to  the  named
project.

The  -in  option can only be used if you are  currently  not
punched in.  It will punch you in to the last project  which
was  active.  For example, if project "my proj" was  active,
then you punched out of it, and then ran "ACCTMAN -in", then
Account Manager would punch you in to "my proj".

Note that punching in via the command line, either with  the
project name option or with the -in option, will not  prompt
for  a  comment even if the project is configured to  prompt
for comments.

Only  one  copy  of  Account Manager will  run  at  a  time.
However, if Account Manager is running and you try to run it
again,  the  command  line options will  be  passed  to  the
running  copy.   So, if Account Manager is running,  running
"ACCTMAN  -out"  will punch you out of the current  project.
Similarly,  "ACCTMAN my project" will  punch  you  in  to  a
project called 'my project'.

This  powerful  capability could  be  used  with  a  program
scheduler      such      as     Clocker      (also      from
Winnovation)OTHERPRODUCTS.   This   would   give   you   the
capability to automatically punch out from 12:00  to  1:00pm
for lunch, for example.  If at 12:00 you executed "ACCTMAN -
out",  and at 1:00 you executed "ACCTMAN -in", you would  be
punched out from 12:00 to 1:00, and then punched back in  to
the  project  you were previously working on.  This  feature
could also be used for regular meetings, etc.


DOS Interface
-------------

Since many people have to exit Windows occasionally to run a
program  that  will  not  run in a DOS  box,  etc.,  Account
Manager  provides  a  DOS Interface to the  database.   This
interface  is limited, in that you can only punch in,  punch
out, or obtain the status of the database.

The DOS interface CANNOT be run from a Windows DOS box.   It
is  provided solely to be run completely outside of Windows.
If  you are inside Windows, you must use the Windows Account
Manager (ACCTMAN.EXE).

Command Line:

     DOSACCT [-db database] -status
     DOSACCT [-db database] -out
     DOSACCT [-db database] projectname
     DOSACCT [-db database] "project name"
     
The DOS interface will attempt to read your ACCTMAN.INI file
to get the name of the active database.  If this ACCTMAN.INI
file  is not accessible (if you are on a network workstation
other than your own, for example), then you can specify your
database  file with the -db option.  Use of this  option  is
not recommended, except where it is absolutely necessary.

The  -status option will tell you which (if any) project  is
currently active.  The -out option will punch you out of the
currently  active  project.  The last two  options  are  for
punching  in  to  a project.  If the project  name  contains
spaces,  you  must  enclose it in quotes as  in  the  fourth
example above.

Note that it is not possible to enter a comment from the DOS
command line interface.

Examples:

DOSACCT myproject

This  will punch in to the project called "myproject", using
the database file specified in the ACCTMAN.INI file.

DOSACCT -out

This  will  punch  out of the currently active  project  (if
any),  using  the database file specified in the ACCTMAN.INI
file.

DOSACCT -db time.amd myproject

This  will punch in to the project called "myproject", using
the database file TIME.AMD.


Miscellaneous Options/Features
------------------------------

Quick Access List
-----------------

The Quick Access List is accessed by clicking on the Account
Manager icon with the right mouse button.  This brings up  a
list  of  your projects/accounts, with the currently  active
one highlighted (if any).  From here, you can punch in to or
out of a project.

The  Quick Access List is especially convenient when you are
using  the  Icon Always On TopICONALWAYSONTOP option,  since
the icon will then always be visible.  The Quick Access List
is then never more than one mouse click away.

To punch in to a project:

Select  the project you wish to punch in to, and  click  the
"In"  button.   Alternatively,  you  can  double-click   the
project  name.   You may be prompted for a comment  at  this
point, depending on how the project was configured.

To punch out of a project:

Click  the  "Out" button.  Also, punching in to a  different
project will punch you out of the current project.

To  Exit  the Quick Access List without changing the  active
project:

Click the "Cancel" button or press ESC.

     
Get Status
----------

This  option, available on the File menu, will  display  the
file  names  of  the current project list  and  the  current
database.

     
Icon Always On Top
------------------

This option is available on the Account Manager System menu.
Enabling this option will cause the Account Manager icon  to
remain  on  top  of all other windows on the desktop.   This
makes it especially convenient to use the Quick Access List.

     

Registration and Support Information
------------------------------------

Single  copy Account Manager registration is $24.95, payable
in  US  dollars.   If  used  on a network,  Account  Manager
requires  one  license for each machine it  is  running  on.
Site license rates are as follows:

     5 users        $ 109.95
     10 users       $ 199.95
     20 users       $ 349.95
     50 users       $ 699.95
     100 users      $ 999.95
     
For  over 100 users, please contact Winnovation for  pricing
information.

     
To  register  additional copies, print out ORDERFRM.TXT  and
mail the completed form along with payment to:

     Winnovation
     PO Box 271071
     Ft. Collins, CO  80527-1071
     USA
     
After  your  registration is processed, you will  receive  a
serial number/registration code combination, a manual, and a
disk  for each copy you ordered.  Site licenses will receive
only  one  code,  manual, and disk, with  additional  manual
copies  available for a nominal fee.  Registered users  will
be  entitled to unlimited support and free upgrades  to  1.x
versions as they become available.  Future updates  will  be
available  at a significant discount.  Support will  be  via
telephone,  E-mail and US mail.  Winnovation can be  reached
at:

     Telephone:  (303) 484-7204

     E-mail:   CompuServe: 71774,605
                 Internet: 71774.605@compuserve.com
```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
*** Account Manager 1.2 Registration Form ***

NUMBER OF SINGLE COPIES TO REGISTER                  _________
     x $24.95 per copy (free shipping/handling)    x  $24.95

NUMBER OF USERS FOR SITE LICENSE  _______
   Fees: 5 users $109.95, 10 users $199.95,
        20 users $349.95, 50 users $699.95,
       100 users $999.95

SITE LICENSE FEE (free shipping/handling)            _________

NUMBER OF ADDITIONAL MANUALS (site licensees only)   _________
     x $2.50 shipping/handling fee per copy        x  $ 2.50

SUBTOTAL                                             _________

TAXES
   CO residents add 3% sales tax                     _________

   Ft. Collins, CO residents add
      additional 3% city sales tax                   _________

TOTAL DUE                                            _________

Specify disk format:   [ ] 3.5" 720K      [ ] 5.25" 1.2MB

Date: _______________

Name: ____________________________________________
Company:__________________________________________
Address: _________________________________________
         _________________________________________
City/State/Zip: __________________________________
Telephone #: _____________________________________

E-mail address: __________________________________
   (this will be used for an electronic mailing list)

Where did you hear about and/or find Account Manager :

    [ ]  From a friend
    [ ]  From USENET    Newsgroup : ______________
    [ ]  An FTP/uucp archive site : ______________
    [ ]  CompuServe Forum    Name : ______________
    [ ]  BBS    Name/Number: _____________________
    [ ]  Direct Advertisement from Winnovation
    [ ]  Shareware Disk Vendor: __________________
    [ ]  Other: __________________________________

Return to:      Winnovation
                P.O. Box 271071
                Ft. Collins, CO  80527-1071
                USA
```
{% endraw %}

## README.TXT

{% raw %}
```
Account Manager 1.2 -- Time usage tracking program for Windows 3.1
(C) 1993 Winnovation

(version 1.2 is a major enhancement, adding comment capability,
 automatic application start/stop sensing, and enhanced reporting
 capability.)

Do you...

  *  Charge your time to different projects?
  *  Bill to multiple clients?
  *  Need to track your computer time usage for the IRS?
  *  Have a need to track your time for any other reason?

If the answer to any of these questions is yes, then Account Manager
is for you!

Account Manager is a tool for Windows 3.1 designed to track your time
as you move from project to project, or account to account.  No more
guesswork!  You simply "punch in" to each project or account as you
begin working on it, and "punch out" when you are through...then,
when you need a summary of your time, Account Manager will create one
for you in seconds!  Many different report types are available for
your convenience.

Your time is valuable...that's why your list of projects is never
more than one mouse click away.  No fumbling through menus for simple
tasks such as punching in and out!

Account Manager can automatically punch in or out or activate itself
when other applications start or close!  This is fully configurable
by the user, of course...you may never have to manually punch in or
out again!

For those who cannot stay in Windows all of the time, Account Manager
includes a flexible DOS interface to allow you to punch in/out from
the DOS command line.  Don't be limited by Windows-only tools!

Registration is $24.95 for a single copy, and site licenses are
available at a discount.  Upon registration, you will receive a disk
with the latest version of Account Manager, a printed manual, and a
license statement with your personal serial number and registration
code combination.  Registered users will receive free unlimited
technical support and free upgrades to versions 1.x of Account
Manager, and future updates will be available at a significant
discount.

To register, fill out ORDERFRM.TXT and mail to the address given there.

For more information, contact

                       Winnovation
                       PO Box 271071
                       Ft. Collins, CO  80527-1071
                       USA
                       (303) 484-7204

   CompuServe: 71774,605
   Internet: 71774.605@compuserve.com

```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library.  Every shareware program we have is on one disc; over
900 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'INSTALL' at
the DOS prompt.  We've included all the tools you need for fast easy
access to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.  All the programs are logically divided into thirteen
major categories with subcategories, making it easier to find just the
right software.

All of the programs have been scanned for viruses.  There are also three
online virus utilities that can be run from the CD-ROM which will scan,
screen and clean viruses.  Not only does this save hard disk space, but
also gives every user added security from viruses.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

Additional BBS file descriptions are available from PC-SIG so that the
CD-ROM can be set up quickly on a bulletin board.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 530K memory DOS 3.1 or higher and
a graphics monitor (Hercules/EGA/VGA/SVGA).  A mouse is optional.





T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed by title, filename, PC-SIG disk
number, and every word in the program description.  A new utility, Narc,
is implemented so you can look at the program files and the author's
on-line documentation without having to first copy the program to your
hard disk.  By using WordCruncher and Narc, you can quickly find the
program you want and review it to be sure, without ever having to run it
from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.


                      The PC-SIG Games CD-ROM
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Now you can play a game a day fo over a year.  This CD-ROM is jammed
with over 380 shareware games of all types, designed to appeal to the
new generation of CD-ROM users out for fun.  The CD incorporates a
hypermedia interface and allows 250 of the games to be played directly
from the CD-ROM.

The hottest games in shareware are on this disk, including the
action/arcade games "Jill of the Jungle" and "Wolfenstein 3D," which
rival or surpass commercial PC and Nintendo for use of animation,
SoundBlaster audio, and VGA graphics.  There are also games designed to
teach children mathematics, spelling and even ecology.  All these games
for less than a dime each!

Over 250 of the games can be played directly from the CD without copying
them to a floppy or a hard drive.  Being able to run from the CD means
that users can explore games without using up valuable hard disk space
or spending time downloading and deleting files.  The hypermedia
interface makes it easy to browse the titles, read a one line
description or full review, and copy or start a game by clicking the
mouse or using the keyboard.


To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 3500 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.50 for 5.25" or $4.00 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $14.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $7.00  ______

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

GAMES CD Amazing Disk - Amazing Price!                 $25.00  ______

*** PC-SIG Library on CD-ROM 12th Edition  ***         $99.00  ______

Upgrade to the 12th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $59.00  ______

Upgrade from ANY other shareware CD-ROM just           $59.00  ______

                                                    Subtotal   ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2351
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3746

     Volume in drive A has no label
     Directory of A:\

    ACCTMAN  ZIP    149781   5-27-93   8:34a
    CDROM    TXT      4874   3-18-93   1:28p
    GO-FORM  DAT      3090   3-10-93   3:22p
    GO-STRT  DAT       552   5-27-93   8:58a
    GO       EXE     27162   4-28-93
    PCSIG    TXT      2335   2-10-93   8:50a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    SHAREMAG TXT      1837   1-21-92   6:11a
    SIGORDER TXT      3090   3-10-93   3:22p
            9 file(s)     222099 bytes
                           95232 bytes free
