---
layout: page
title: "PC-SIG Diskette Library (Disk #383)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0383/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0383"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DBMS"

    PC-DBMS is a relational database management system that provides screen-
    editing functions and on-line help.  The data of a database is in named
    tables that have records and fields.  Each table resides in its own
    file.  There may be any number of data files associated with a
    database.
    
    Features:
    
    ~ Dynamically formatted full-screen forms for data entry.
    ~ A query command that can retrieve records.
    ~ Dynamic files.
    ~ A fast-screen editor.
    ~ A menu-based help system.
    ~ Files resemble the data tables.
    ~ Indexing with an automatic index update.
    
    System Requirements:  Two disk drives
    
    How to Start:  From DOS, enter TYPE MANUAL.1 and TYPE MANUAL.2 for
    documentation.  To run program, enter PC-DBMS at the DOS prompt.
    
    Suggested Registration:  $35.00
    
    File Descriptions:
    
    PC-DBMS  SMP  Color table
    ???      TXT  Additional documentation files
    MUSIC    DEF  A sample database used in the tutorial
    MANUAL   1    First half of the manual
    OPUS     DAT  A sample database used in the tutorial
    COMPOSER DAT  A sample database used in the tutorial
    REQUEST  DOC  Payment form and invoice
    READ     ME   Printing instructions for the manual
    PC-DBMS  EXE  The PC-DBMS program
    MANUAL   2    Second half of the manual
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDENDUM.TXT

{% raw %}
```









             Addendum to PC-DBMS User's Guide


This  addendum  updates  the  version 1.0 User's Guide to
reflect changes up to version 1.2.

In the version 1.0 distribution,  the  User's  Guide  was
provided  in  the  files  MANUAL.1 and MANUAL.2.  In this
(version 1.2) distribution,  it may be in a  single  file
called  PC-DBMS.DOC.  Only  two changes have been made to
the Guide.  First, the three occurrences of "=>" on pages
3-4 and 3-5 have been corrected to read ">=".  This error
caused some users to think PC-DBMS couldn't  process  its
own  where  clause.  Second,  Appendix C,  User Supported
Software,  has been updated to reflect unbundling of  PC-
DBMS  and  lower  prices.  That appendix is reproduced in
the addendum.  If you already have a  User's  Guide,  you
may wish to skip printing PC-DBMS.DOC (or MANUAL.*).

In  addition  to  the  new  Appendix  C,   this  addendum
describes  changes  and  extensions  to  the  version 1.0
program.  Bug fixes are documented in RELNOTES.TXT.










































DISTRIBUTION DISKETTE

The distribution diskette contains  the  files  shown  in
Figure 1.

READ.ME         getting started
PC-DBMS.DOC     User's Guide (or MANUAL.1 & MANUAL.2)
RELNOTES.TXT    description of changes in this version
ADDENDUM.TXT    this file
MUSIC.DEF       a sample data base
COMPOSER.DAT            for the tutorial
OPUS.DAT                       in the User's Guide
PC-DBMS.EXE     the dbms program
PC-DBMS.SMP     sample start-up file
REQUEST.DOC     order/payment form and invoice

Figure 1.  Files on the distribution diskette.



MISSING FILE ERROR HANDLING

When PC-DBMS fails to find a data or index file,  it will
so report and halt execution of the command.


RECORD COUNTS

The select,  display,  pack and key commands can  process
existing data table records sequentially,  i.e.,  without
index look-ups.  Previous versions processed  the  number
of  records  shown  in  the  schema  if  that  count  was
consistent  with  the  file  size  and   record   length.
Occasionally,  records  added by other other applications
to narrow tables were ignored as a result.

Beginning with version 1.2,  all records are read.  Those
beginning  with  a  backslash or a null are ignored.  The
backslash records are marked  as  deleted  and  the  null
records   are  inserted  by  PC-DBMS  and  certain  other

                            2   























programs to fill files to 128 byte boundaries.


SELECT AND SHOW COMMANDS

In the select command,  the wildcard indicator *  can  be
used in place of ALL.

In  the select and show commands,  control num-lock still
halts scrolling but control-S no longer does.


PACK COMMAND

The deletion of data records and the  removal  of  tables
(with the remove command) leaves unused space in data and
schema  files,  respectively.  The  pack command recovers
that space by pushing undeleted data  or  schema  records
passed  deleted  ones.  It  then truncates the file.  The
syntax is:

        PACK  [\SCHEMA]  [table-name ...]

To pack the schema file,  append the qualifier \schema to
the keyword pack.  If the qualifier is not specified,  at
least one table name must be given.

For example,

        PACK\SCH  COMP OPUS

packs the schema and two data files.

The pack command will also delete trailing  nulls  (ascii
zeros)  which  PC-DBMS  uses  to  pad files to a 128 byte
boundary.

When a data file is  packed  the  schema's  record  count
(which  includes deleted records) is updated.  The change
is apparent when the show command is executed.


                            3   























It is necessary to remove indices on files to  be  packed
because  indices  store  record  numbers and these change
during packing.  The schema will be  updated  to  show  a
previously  keyed  field  as  unkeyed  and the associated
index file will be deleted.  However, if the packing does
not change record numbers (no deleted records before  the
last  undeleted  record),  no  change will be made to the
index file or the schema keying information.


THE INITIALIZATION FILE

After PC-DBMS presents its welcome screen, it attempts to
find and  read  a  file  called  PC-DBMS.INI.  This  file
specifies  the  video attributes for various parts of the
main screen  and  the  display  utility's  screen.  These
parts  are  called  screen  items.  Video  attributes are
characteristics such as bright,  color or reverse  video.
Without an initialization file,  PC-DBMS will use default
video attributes.  Also,  the initialization file can set
the  command window editing default to overstrike instead
of pushright.


1.  Specifying Video Attributes

Even color systems (color board and color monitor) do not
require  the  initialization  file.  However,  they  will
behave  like  monochrome without it.  If you have a color
system,  you can use a text editor to create a file  with
just  these two characters in it:  %C.  Name the file PC-
DBMS.INI and keep it in the current directory or  in  any
subdirectory  named  in the path command.  You'll get the
default colors.  If the defaults  are  satisfactory,  you
need read no further regardless of the kind of system you
have.

There are three display system types:




                            4   

























(1) monochrome board and monochrome (single color)
    monitor,
(2) color board and monochrome monitor, and
(3) color board and multi-color monitor.

PC-DBMS   has   a  distinct  set  of  screen  item  video
attributes for each system.  System (1) is easy  for  PC-
DBMS  to  identify  but  the other two look alike because
software can't tell what kind of monitor  you  have.  The
%C  flag  solves  that  problem  by  indicating  a  color
monitor.  (The color monitor flag will be ignored if  you
have a monochrome board.)

Figure 2 shows a sample initialization file.


























                            5   

























%C    full color, please!
%E    overstrike editing

            color   color    (Monochrome columns
   mono-    board,  board,    have default values.
   chrome    mono   color     The values could
   board    screen  screen    have been omitted,
   ------   ------  ------    leaving only commas.)

&A    7,       7,     30       display screen: background
&B  112,     112,     12       display screen: blocks
&C   15,      15,     78       command window: frame
&D    7,       7,     71       command window: interior
&E  112,     112,    103       main screen: top rt menu
&F     ,     112,     88       message stripe
&G    1,       7,    112       column headings stripe
&H  112,     112               output window

Figure 2.  An initialization file.


There  are eight screen items which can be assigned video
attributes.  The interior of  the  command  window  is  a
screen  item,  for example.  The screen items are denoted
by the flags &A-&H.  They are defined by the comments  in
Figure 2.

Each screen item gets its own line in the file.  However,
you  can omit any of the screen item lines.  For example,
the &E row could have  been  omitted.  Defaults  will  be
assumed.

There  are  256 possible video attributes numbered 0-255.
Their construction is shown in Figure 3.






                            6   
























    Video Attributes for Systems (1) and (2)

  Attribute               Value        Comment

Underlined                    1     system (1) only
Normal (white on black)       7
Underlined bright             9     system (1) only
Normal bright                15
Reverse (black on white)    112
Reverse bright              120


     Video Attributes for System (3)

Color        Foreground         Background

Black             0                  0
Blue              1                 16
Green             2                 32
Cyan              3                 48
Red               4                 64
Magenta           5                 80
Brown             6                 96
White             7                112
Gray              8
Lt blue           9
Lt green         10
Lt cyan          11
Lt red           12
Lt magenta       13
Yellow           14
Bright white     15

The attribute value is the sum of the
foreground and background numbers.

For all system types, add 128 to the
attribute value for blinking.

Figure 3.  Construction of Video Attribute Values.

                            7   

























The initialization file can specify  one,  two  or  three
video  attribute  numbers  per  screen  item.  The  three
numbers   correspond   to   the   three   system   types,
respectively.  Hence,  a  single  initialization file can
work on any kind of system.

You can omit a number.  It will assume the default value.
See the &F and &H lines in Figure  2,  for  example.  The
first  comma  in  line  &F  serves  as  a necessary place
holder.  A trailing comma is unneeded.  See line &H.

Each flag must be flush  left.  There  must  be  a  comma
between numbers.  Space(s) can precede numbers or commas.
Comments  can  be  inserted.  There is no special comment
marker  and  a  comment  ends  parsing  of  a  line  when
encountered.

All default values are shown in Figure 4.


            color   color
   mono-    board,  board,
   chrome    mono   color
   board    screen  screen
   ------   ------  ------

&A    7,      7,     30
&B  112,    112,     12
&C   15,     15,     14
&D    7,      7,      3
&E  112,    112,    112
&F  112,    112,     71
&G    1,      7,    112
&H  112,    112,     30

Figure 4.  Default video attributes




                            8   
























2.  Changing the Editing Default

The  editor  in  the command window uses pushright as its
default.  If you wish the default to be overstrike,  just
put these two characters at the beginning of any start-up
file line: %E.  See Figure 2.


3.  Creating a Start-up File

The  PC-DBMS  distribution  includes   PC-DBMS.SMP,   the
initialization  file  I  use.  Most  but  not  all of its
values are the defaults.  It is an easy starting point to
develop your own initialization file.  Use the  DOS  copy
command

    A> copy  pc-dbms.smp  *.ini

to  produce a version which PC-DBMS will read.  (Note the
new name assigned in the copy command.) The file must  be
in  the current directory or in one of the subdirectories
specified in a path command.  If yours is a  system  (2),
remove the color flag %C with a text editor.  Execute PC-
DBMS  and  see  which  video attributes you would like to
change.  Exit PC-DBMS and edit  the  file.  Repeat  until
happy.















                            9   































                       APPENDIX C

                 USER SUPPORTED SOFTWARE



PC-DBMS is distributed as user  supported  software.  You
are   encouraged  to  give  copies  of  the  distribution
diskette for others.  There is no license  agreement  but
please  pass  along all files without modification.  User
groups and similar organizations  may  impose  a  nominal
charge to cover the cost of duplication.

The user supported concept of software is  a  significant
innovation  (not  mine)  which  benefits  both  user  and
author.  For  the  user,  there  is  the  convenience  of
leisurely evaluation of the program on your own system in
your own home or office to see if  it's  right  for  your
application.   The  low  cost  of user supported software
distribution also  makes  possible  a  voluntary  payment
lower  than  the  price  of commercial software.  And, of
course,  there's  no  copy  protection  to  diminish  the
utility of the program.

For the author, there is the satisfaction  of  getting  a
far  larger  number  of  copies into use than is possible
with conventional marketing.  Also, the  interference  of
piracy is turned into a reinforcement in the distribution
of the program.   Finally,  if  you  have  dealt  with  a
publisher,   print  or  electronic,  you  understand  the
undesirability of that alternative.

However,  it doesn't work unless you want it to.  If  you





















                 USER SUPPORTED SOFTWARE



find PC-DBMS useful, I hope you will register by making a
voluntary  payment of $35,  by check or through your bank
credit card.  Beyond what you already have,  this is what
you will receive from me.

      -  Support  for a year.  Comments,  suggestions and
         especially bug reports are welcome from  anyone.
         However,   only   registered  users  can  expect
         replies to  their  questions.  Support  will  be
         provided  on  a  best  efforts basis by mail and
         through  CompuServe.   My   CompuServe   id   is
         74216,3033.

      -  Notices  of  subsequent PC-DBMS releases.  Disks
         and documentation will be available as indicated
         below.

      -  My thanks.  PC-DBMS took a year to develop, test
         and document.  I enjoyed every minute of it.


Now,  I ask that you send your voluntary payment with the
order/payment  form.  A  copy of that form is on the next
page or, if you wish to leave your manual intact, another
copy is in the file REQUEST.DOC.  If you need an invoice,
you'll find one following the order/payment form in  both
the manual and in REQUEST.DOC.

IF YOU REGISTER BY FEBRUARY 1,  1986,  WE WILL SEND YOU A
FREE COPY OF THE TYPESET USER'S GUIDE.

For  quantity purchases of PC-DBMS or to distribute it in
conjunction with your data base, contact Kware.

Whether or not you register,  you are welcome to purchase
the     typeset     User's    Guide    ($10)    or    the
program/documentation   disk   ($10)   or   both   ($18).
Purchasing  materials is one way to support the continued
development of PC-DBMS and to keep yourself supplied with
the most current version.


                           C-2   



















                 USER SUPPORTED SOFTWARE



One way to keep current is to pre-order the next release.
It  will  be  sent to you as soon as it's issued.  You'll
get it faster and more  reliably  than  through  bulletin
boards  and user groups.  Just mark "next release" on the
applicable line of the order/payment form.

To  register  or to order materials,  enter your name and
address on the form below  and  indicate  the  quantities
desired of the various items in the quantity column.  Pay
by check or complete the credit card form.
































                           C-3   



















                 USER SUPPORTED SOFTWARE




                    ORDER/PAYMENT FORM


Name    _____________________________  Phone ____________

Company _____________________________

Address _____________________________

        _____________________________

City    _________________  State ________  Zip _________


Description        Qty      Price       Extension
-----------        ---      -----       ---------

registration                $35.00

User's Guide                 10.00

PC-DBMS disk                 10.00

Guide & disk                 18.00
                                        ---------
                   Sub-total

Tax @ 4%  (Va. residents only)
                                        ---------
                   Amount due


Kware                           Please make check payable
P.O. Box 16206                  to Kware or complete
Arlington, Va. 22215            credit card form below.


Visa  __   or Mastercard __   card #  ___________________

exp mo/yr  ______/______  signature  ____________________

                           C-4   



















                 USER SUPPORTED SOFTWARE




                      INVOICE


Vendor:  Kware, Inc.              Federal EIN: 54-1304150
         P. O. Box 16206
         Arlington, Va. 22215     Date:    /    /


Description        Qty      Price       Extension
-----------        ---      -----       ---------

PC-DBMS,                    $35.00
 reg & support

User's Guide                 10.00

PC-DBMS disk                 10.00

User's Guide                 18.00
 & disk
                                        ---------
                   Sub-total

Tax @ 4%  (Va. residents only)

                                        ---------
                   Amount due



You may retain this invoice.










                           C-5   

















```
{% endraw %}

## FILES383.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 383   PC-DBMS v1.0                                      V1 DS
------------------------------------------------------------------------
PC-DBMS is a relationaldata base management system that provides screen
editing functions and on-line help.
 
MUSIC    DEF  A sample data base used in the tutorial
COMPOSER DAT  A sample data base used in the tutorial
OPUS     DAT  A sample data base used in the tutorial
MANUAL   1    First half of the manual
MANUAL   2    Second half of the manual
PC-DBMS  EXE  The PC-DBMS program
READ     ME   Printing instructions for the manual
REQUEST  DOC  Payment form and invoice
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## RELNOTES.TXT

{% raw %}
```


                      Release Notes
                       for PC-DBMS
                       version 1.2


This   text   describes   cumulative   corrections    and 
performance improvements to PC-DBMS to remedy problems or 
shortcomings.  The  User's  Guide for PC-DBMS version 1.0 
is  in   MANUAL.*   (or   PC-DBMS.DOC)   and   cumulative 
enhancements are documented in ADDENDUM.TXT.  



                CORRECTIONS IN VERSION 1.1


DOCUMENTATION

The User's Guide contained a repeated error on pages  3-4 
and  3-5.  The  illustrated  select  ...  where  commands 
produced error messages.  In the  current  User's  Guide, 
the  three  occurrences of the incorrect string "=>" have 
been replaced by ">=".  


DISPLAY UTILITY

The display ... where command was improperly parsed under 
some  circumstances  producing  a spurious error message.  
This problem has been fixed.  

The default qualifier on the display command was  \query.  
In  the  current version,  it is \edit in conformity with 
the User's Guide.  


EDITING OF FLOATING POINT ENTRIES

User entered numbers and numbers read from data files are 
converted to binary in a consistent  manner.  In  version 
1.0,   inconsistent  conversion  algorithms  occasionally 
caused equal floating points numbers to be converted into 
unequal binary numbers resulting  in  failure  of  the  = 
where clause operator.


SCREEN ATTRIBUTES ON EXIT

Version 1.1 sets screen attributes to white characters on 
black  background  upon exiting.  Version 1.0 left screen 
attributes as they were in the command window.  


SCREEN HANDLING

The output window, the message and column heading stripes 
are now output by  writing  directly  to  display  memory 
enhancing performance. 


                CORRECTIONS IN VERSION 1.2


SELECT AND DISPLAY UTILITY

The select and display ...  where  commands  occasionally 
failed  to retrieve qualifying records when doing a keyed 
look up on = and <> operators.  Problem fixed.  


DISPLAY UTILITY

The display utility sometimes  improperly  handled  index 
updates  when  a record was deleted or modified.  Problem 
fixed.  Also, when an index was used to retrieve a record 
which was then deleted,  the first  record  in  the  file 
might be overwritten.  Problem fixed.  


SELECT COMMAND

The select ...  sorted by ...  into ...  command produced 
an unusable target table.  Problem fixed.  
```
{% endraw %}

## REQUEST.DOC

{% raw %}
```

                 USER SUPPORTED SOFTWARE


To  register  or to order materials,  enter your name and
address on the form below  and  indicate  the  quantities
desired of the various items in the quantity column.  Pay
by check or complete the credit card form.




                    ORDER/PAYMENT FORM


Name    _____________________________  Phone ____________

Company _____________________________

Address _____________________________

        _____________________________

City    _________________  State ________  Zip _________


Description        Qty      Price       Extension
-----------        ---      -----       ---------

registration                $35.00

User's Guide                 10.00

PC-DBMS disk                 10.00

Guide & disk                 18.00
                                        ---------
                   Sub-total

Tax @ 4%  (Va. residents only)
                                        ---------
                   Amount due


Kware                           Please make check payable
P.O. Box 16206                  to Kware or complete
Arlington, Va. 22215            credit card form below.


Visa  __   or Mastercard __   card #  ___________________

exp mo/yr  ______/______  signature  ____________________























                      INVOICE


Vendor:  Kware, Inc.              Federal EIN: 54-1304150
         P. O. Box 16206
         Arlington, Va. 22215     Date:    /    /


Description        Qty      Price       Extension
-----------        ---      -----       ---------

PC-DBMS,                    $35.00
 reg & support

User's Guide                 10.00

PC-DBMS disk                 10.00

User's Guide                 18.00
 & disk
                                        ---------
                   Sub-total

Tax @ 4%  (Va. residents only)

                                        ---------
                   Amount due



You may retain this invoice.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0383

     Volume in drive A has no label
     Directory of A:\

    READ     ME        816   9-18-85   8:25p
    MANUAL   1       45193   8-14-85   8:39p
    MANUAL   2       55808   8-14-85   8:00p
    MUSIC    DEF      1420   8-10-85   6:11p
    COMPOSER DAT       506  11-25-84  11:47a
    OPUS     DAT        92  11-25-84  11:50a
    PC-DBMS  EXE    115562   9-04-85  10:56p
    REQUEST  DOC      2051   8-14-85  11:49p
    FILES383 TXT       809   7-08-85   2:41p
    RELNOTES TXT      2481   9-18-85  10:14p
    ADDENDUM TXT     17286   9-18-85   7:57p
    PC-DBMS  SMP       931   8-14-85  11:37p
           12 file(s)     242955 bytes
                           73728 bytes free
