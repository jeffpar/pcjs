---
layout: page
title: "PC-SIG Diskette Library (Disk #75)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0075/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0075"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORMS MANAGER DEMO"

    File Descriptions:
    
    DEMO     BAT  Batch file to start demo
    DEMO1    CAL  Demo data file.
    DEMO1    DAT  Demo data file.
    DEMO1    IX   Demo data file.
    DEMO2    CAL  Demo data file.
    DEMO2    DAT  Demo data file.
    DEMODFM  EXE  Main program
    DEMOEX1  FM   Demo form.
    DEMOEX2  FM   Demo form.
    DEMOFED  EXE  Demo of program.
    DEMOX    FM   Demo form.
    DFM      HLP  Help file.
    KBDDFM   TXT  Information text file.
    KBDFED   TXT  Information text file.
    ORDER    FM   Order form
    XXXAUTOF DAT  Data file.
    XXXPAD   FM   Sample form.
    XYZ      FM   Sample form.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #75, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ORDER   .FM          CRC = 73 9D

--> FILE:  XYZ     .FM          CRC = 8E 21

--> FILE:  XXXPAD  .FM          CRC = AC D4

--> FILE:  DEMOEX2 .FM          CRC = 12 7F

--> FILE:  DEMOX   .FM          CRC = 2E 5D

--> FILE:  DEMOEX1 .FM          CRC = 75 4F

--> FILE:  XXXAUTOF.DAT         CRC = 00 00

--> FILE:  DEMO1   .DAT         CRC = 83 BC

--> FILE:  DEMO2   .DAT         CRC = EC FF

--> FILE:  DEMO1   .CAL         CRC = 00 00

--> FILE:  DEMO2   .CAL         CRC = 00 00

--> FILE:  DEMO1   .IX          CRC = C2 5C

--> FILE:  DEMO    .BAT         CRC = 2E D0

--> FILE:  KBDFED  .TXT         CRC = FF D7

--> FILE:  KBDDFM  .TXT         CRC = 76 82

--> FILE:  DEMOFED .EXE         CRC = B8 7F

--> FILE:  DEMODFM .EXE         CRC = 97 64

--> FILE:  DFM     .HLP         CRC = 29 65

 ---------------------> SUM OF CRCS = B6 45

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## KBDDFM.TXT

{% raw %}
```
&@05
 @!05"45,01,34,16
  Here is our form again...now
  displayed with the attribute
  characters we specified and
  we can begin filling in the
  fields.  Pressing the cursor
  move keys causes us to jump
  from field to field.  Typing
  character keys causes data
  to be entered in the current
  field.  Note the line at the
  bottom which shows status
  (this line may be turned off
  if you prefer).  So let's
  create some records... as
  usual, I'll do the typing.
"
!15#
Jane Doe{dn}Huge Computers{dn}111 Southwest Northeast St{dn}{dn}{dn}95000{dn}
777-9999{dn}
"45,01,34,05
  We filled in the blanks.
  Note that we didn't need to
  type ^5San Jose^1 or ^5CA^1 since
  they were default entries.
"
!07#
"45,01,34,21
  You may have noticed that
  it took a while to enter
  the first two fields.  That
  was because those fields
  were defined as ^5keyed^1 when
  the data file was created
  with ^5Data File Create^1.
  ^5Keyed^1 fields are useful
  as your file gets larger,
  since they save much time
  during searches and report
  generation.  However, the
  first time you enter data
  in record 1 of a keyed
  field, we must create an
  index file.  After record
  1, you probably won't notice
  any difference between ^5keyed^1
  and ^5non-keyed^1 fields
  (except during searches).
"
!07#
"45,01,34,03
  We now press F5 to create
  the next record...
"
!05#
{F5}
"45,01,34,06
  A brand new screen with
  blanks.  Note that at the
  bottom it says Record 2 of 2.
  We could create up to 32,767
  records.
"
!07#
John Doe{dn}Small Computers
{dn}2200 Small Street{dn}
{dn}{dn}95111{dn}(408) 777-8888{dn}
@!05{F5}
George Smith{dn}Joes Computers{dn}1900 Happy Street{dn}{dn}{dn}33333{dn}
777-7777{dn}
@!05{F5}
Able Baker{dn}Breads and Such{dn}333 Yeast Road{dn}{dn}{dn}6666{dn}
(408) 773-7777{dn}
@!05{F5}
Zeti Zimmerman{dn}Zeegers Creepers{dn}777 Haleluya Avenue{dn}{dn}{dn}66666{dn}
(415) 999-9999{dn}
@!05
"45,01,34,09
  Now that we have created 5
  records, let me show you
  the variety of ways there
  are to ^5search^1 for data.
  First we can search for a
  string, ^5anywhere in any
  field of any record^1.
  We start by pressing F9.
"
!07#
{F9}@!!!!!!05able
"45,01,34,04
  We are going to look for
  the record which contains
  ^5able^1.
"
!07#{cr}
"45,01,34,05
  Note that it was found in
  record 4, and the cursor is
  placed in the field it was
  found in.
"
!07#
"45,01,34,12
  We could also limit the search
  for a string to a ^5single^1
  ^5field^1.
  Yet another way of searching
  is sequentially stepping
  through the records.  If we
  place the cursor on a ^5keyed^1
  field and press F3, we will
  find the ^5next^1 record in
  alphabetic order.  F4 will
  find the ^5previous^1 record.
"
!10#
"45,01,34,06
  Allow me to demonstrate.
  The current field is ^5keyed^1.
  Each time you hit a key, I
  will press F3 to find the
  next record...
"
!07#
{F3}@!03
{F3}@!03
{F3}@!03
{F3}
"45,01,34,04
  OK.  Now we will step
  backwards by pressing the
  F4 key...
"
!07#
{F4}@!03
{F4}@!03
{F4}@!03
{F4}
"45,01,34,16
  You could also find the
  first record or the last
  record by pressing the
  ALT-6 and ALT-7 keys
  respectively.

  If the cursor is not on
  a ^5keyed^1 field and you
  press F3 or F4, you will
  be presented with the
  previous or next record
  numerically (ie. if you
  are in record 1 and you
  press F3, you will go to
  record 2).
"
!15#
{A1}y
"00,01,50,07
  That's about all I can show you with such a
  simple form.  We will now progress to a more
  complex example to demonstrate the math
  calculation capabilities...
  While we are here, take a second to look at
  the main ^5Data File Manager^1 menu options.
"
!12
1demoz.dat{cr}
"45,01,34,08
  Take a few moments to study
  this form.  It demonstrates
  many of the powerful data
  entry features of ^4Data File^1
  ^4Manager^1.  Hit a key and
  I'll get this box out of
  your way...
"
!10#
@!15
"00,00,44,10
  Notice the Date and Time fields were
  defined as ^4Auto-Date^1 and ^4Auto-Time^1
  so they will be updated to current date
  and time whenever the page is displayed.

  Also, ^4Data File Manager^1 will make
  sure you don't enter the wrong data in
  a field.  Look what happens when we type
  a character in the ^3price^1 field...
"
!20#
{cr}{cr}{cr}{cr}{cr}{cr}
{cr}{cr}{cr}{cr}{cr}a
"00,01,44,05
  That happened because we defined the
  price field to be ^3numeric only^1. How
  about if we type a value of 100 in the
  ^3qty^1 field...
"
!10#
{F0}89.95{le}{le}{le}{le}{le}{le}100{pd}
"00,01,44,05
  Again, ^4Data File Manager^1 won't let
  you do that because that field was
  defined to only allow numbers from 1 to
  99... we meant that to be a 10.
"
!10#{F0}10{cr}
"00,00,44,05
  Note the bottom status line shows you
  the Page number and record number.
  We are on page 1.  To see the next
  page you can press PgDn...
"
!07#{pd}
"45,01,34,03
  Pressing PgUp takes us back
  one page...
"
!07#{pu}
"45,01,34,04
  Let's get rid of the bottom
  status line now so we can
  see what is behind it...
"
!05#{F6}@!05
"00,00,79,23
  Well that was fun, but the real reason we are here is to show you the
  way ^4FormManager^1 does calculations.  Instead of forcing you to wait
  until report time to see the results of calculations, ^5Data File Manager^1
  works more like a spreadsheet, performing pre-defined calculations when
  you press F2.

  You define the calculations to take place with ^3assignment^1 statements,
  much like you would in a high level language like BASIC or PASCAL.  The
  calculation language was designed to allow general expressions almost
  everywhere, making it a very powerful tool.  We can't begin to describe
  the full power of the calculation facility, but hopefully a small example
  will get you started ...

  Before we begin though, you need to understand what ^3field arrays^1 are.
  When the current form was created with ^5Forms Editor^1, the Prod. No.,
  Description, Qty, Price, and Total fields were all defined as ^3field^1
  ^3arrays^1.  That is, each field in a given column has the same name, but
  a different ^3field index number^1.  Line 1 is index number 1, etc.

  So to refer to line 2 of the field array ^4total^1, we would use the
  expression ^4total[2]^1.
"
!20#
"00,01,34,11
  Consider the current page.
  We would like ^4Data File^1
  ^4Manager^1 to calculate the
  Total and Amount Due values
  for us.  To do this, we must
  define 2 equations using the
  field names (note: if you
  forgot the field names, you
  could press ALT-n to get a
  list of field names).
"
!10#
"00,01,34,04
  If you are ready, let's go
  ahead and edit the formula we
  want to perform...
"
!07#{F8}
"30,12,49,05
  We are now in the Formula Editor.  Pressing
  the up and down arrow keys causes us to jump
  from line to line.  Let's type in a formula
  to calculate the ^5total^1 column values.
"
!!10
total[1] = qty[1] * price[1]{dn}
"30,12,49,08
  This statement will put the value of ^4qty[1]^1
  times ^4price[1]^1 into the field ^4total[1]^1.  But
  what about the other 5 lines?  Well, we could
  type the same statement on the next 5 lines
  and change the numbers, but that seems too
  boring... that is why the ^5Data File Manager^1
  has the ^4$do^1 statment and ^4scratch variables^1.
"
!!10
"30,12,49,08
  The single letters ^4a-z^1 may be used as scratch
  variables.  This is useful for breaking up
  large expressions (by assigning intermediate
  values to scratch variables).  It is also
  nice to have scratch variables for the
  $do statement.

"
!!10
{up}$do(a, 1, 6): total[a] = qty[a] * price[a]{dn}
"30,12,49,08
  Note we have now replaced our statement with
  a $do statement.  This says "execute the
  following statement, assigning the value of
  '1' to scratch variable ^4a^1 the first time,
  '2' the second time, ..., and '6' the last
  time.  Thus the value of total[1] through
  total[6] will be filled.
"
!!10
"30,12,49,08
  We also want to assign a value to the field
  named ^4due^1.  This is easy, since we just
  want the sum of the ^5field array^1 named total.
  We use the ^4sum^1 function for this.
  Note: we could have used a $do statement, but
  using functions tends to be faster...

"
!!10
due = sum(total[1..*]);{dn}
"30,12,49,09
  The ^4total[1..*]^1 is what we call a ^5range^1
  specification.  This says sum ^5field index
  numbers^1 1 till the highest that exists for
  that field name (in this case, 6).

  OK. We have defined our equations.  Let's
  save the formula file and return to the data
  entry screen.
"
!!10
{A1}
"00,01,34,05
  It won't actually ^3do^1 the
  calculation until we press
  the F2 key... ready when you
  are...
"
!07#{F2}
"00,01,34,05
  If you just want to do a
  quick calculation, you can use
  the calculator function by
  pressing the F7 key...
"
!05#{F7}
"00,01,34,06
  We can now enter any general
  expression and the result will
  be displayed.  We can even
  invoke functions...
  Here is a simple one...
"
!!!!!05#33^4+5@!!!!!05{cr}
"00,01,34,02
  Here is a more complex one...
"
!!!!!05#((2+3)*max(total[1..*]))@!!!!!05{cr}@!!!!!05
"00,01,34,04
  As you can see, it is OK to
  use functions in calculator
  mode.
"
!!!!!05#{cr}
"00,00,79,24
  The power of the math portion of ^4FormManager^1 can only be light touched
  here.  Refer to Appendix A of the manual for a complete description of
  its features and use, plus more examples.

  To summarize the math calculation features:

      Enter formulas in scientific notation (not reverse polish)
      Built-in variables
          @crec - current record number
          @date - current date
          @time - current time
      Scratch variables
      $do, $if, $goto, $skip, $error, and $exit statements
      General expressions can be used anywhere
      Control calculation order with parenthesis
      Large number of built-in functions:
          abs     sign    trunc   round   frac    mod
          sqr     sqrt    exp     ln      log
          sin     arcsin  cos     arccos  tang    arctan
          max     min     mean    std     median
          sum     mult
"
!20
"00,00,79,24
  As you have seen, the ^4Data File Manager^1 is a very powerful interactive
  tool.  Again, we could not describe all the features but we hope you were
  able to understand how its power could be applied to your needs.

  Feature Summary:

      Data validation and range checking
      ^5Fill-in-the-blank^1 data entry
      Function keys for current date and time
      Auto-date and Auto-time fields
      Display-only fields (to be filled by calculations)
      Variety of search methods
      B-tree field indexing on up to 10 fields
      Full function calculator mode
      Edit and display formulas
      Interactive math calculation
      Print field data on pre-printed forms
      On-line HELP function
"
!20
"00,00,79,24
  Once you have created some data, ^4Data File Print^1 can be used to print
  selected fields from each record (for example, mailing list applications).

  Optional programs to go with ^4FormManager^1 will be available soon.
  The following is a partial list:

  ^4FormManager:Report^1
             Multiple selection criteria
             Sorting on up to 10 fields
             Full report formating capabilities

  ^4FormManager:Utilities^1
             BASIC sub-program interface to retrieve field values
             Data transfer capability for VisiCalc data files

  We hope you have enjoyed our demo.  If you would like to order ^4FormManager^1,
  please contact:
         Alamo Electronic Components, Inc.
         San Jose, California
         (408) 578-1490
"
!30
```
{% endraw %}

## KBDFED.TXT

{% raw %}
```
{Ac}&{Ac}"00,00,79,24

                    Welcome to the World of ^4FormManager^1
           A remarkable tool to help you automate your paper office.

  ^3What is it?^1
  ^5FormManager^1 is an integrated software package that allows you to design
  forms interactively on the screen.  The forms can match your paper forms
  exactly, or be arranged any way you wish.

  Once you have defined your form, it will be used as a template for data
  ^3entry^1, ^3retrieval^1, ^3update^1, and ^3calculation^1.  Of course you can also print
  the data, either to normal paper or pre-printed forms.

  ^5FormManager^1 is actually a collection of the following components:

      ^4Forms Editor     ^1  -- To design forms
      ^4Data File Create ^1  -- To create/re-organize data files
      ^4Data File Manager^1  -- For data entry, retrieval, and calculation
      ^4Data File Print  ^1  -- To print selected records
"
20
"00,00,79,24

  ^3What can you do with it?^1
  ^5FormManager^1 allows you to define your application needs quickly ...
  without any programming effort, and without the constraint of column and
  row format.  Because of it's flexibility, there is a wide variety of
  functions it can help automate.

  Typical uses include:

      Customer lists
      Inventory tracking
      Sales orders
      Budgeting
      Expense report
      Home financing

  In general, most anything you currently do on paper forms can be easily
  defined and done with ^5FormManager^1, with greater accuracy, efficiency,
  and usefulness.

  But enough of this.
  Let me show you how easy it is to create a form...
"
20#
{hm}Let's begin by creating a box...
{hm}{dn}{dn}{dn}{ri}{ri}{ri}{F3}{dn}{dn}{dn}{dn}{dn}
{dn}{dn}{dn}{dn}{dn}{dn}{dn}{dn}{dn}{dn}{dn}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{F4}{F6}
"00,16,51,05
  That was easy enough, but generally we like to
  put things ^5into^1 boxes.  In this case, we would
  like to define some fields to contain peoples
  names, addresses, and phone numbers.
"
07
{hm}                                   {hm}{dn}{dn}{dn}{dn}
{dn}{ri}{ri}{ri}{ri}{ri}{ri} Name:{dn}{dn}{le}{le}{le}{le}{le}Address:{dn}{dn}{le}
{le}{le}{le}{le}{le}{le}{le}City:                            State:     Zip:{ri}{ri}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{dn}{dn}Phone Number:
"00,16,54,07
  Oops... I got this far and just remembered that
  I would also like to keep the ^5company name^1.  But
  it sure would be nice if that were located under
  the name of the person.  That's no big problem
  with ^5FormManager^1, since we can easily move
  and copy blocks of text in the form...
"
08
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{up}{up}{up}{up}{le}{F3}{dn}{dn}{dn}{dn}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{F4}{up}{up}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{F7}{F0}{up}{up}{up}{up}{up}{up}Company:
"00,16,54,07
  Now we would like to define the location and
  attributes of the ^4input fields^1, that is, where
  we will actually be entering data.  We do this
  by first defining where the field is, and then
  defining the attributes by filling in the blanks
  in a prompting window... as follows...
"
08
{up}{up}{le}{le}
{F3}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{F4}@02{F5}name{dn}{dn}0{dn}
{dn}{dn}{dn}{dn}{dn}{dn}{dn}5
"61,01,18,14
  We have now
  defined a
  field named
  ^4name^1 which
  is alphabetic
  only, and
  which will be
  underlined
  when used by
  the Data File
  Manager (we
  will get to
  that later).
"
10
{F2}
"00,20,54,03
  Note the ^5⌂^1 character shows where an input field
  has been defined...
"
03
"00,16,54,08
  Now we need to define each of the other fields
  we would like to have.  As you saw before, we
  define what type of data the field will contain
  and what the valid range of values are (so the
  DataFileManager can check input).  You also can
  give a default value, and specify the display
  attributes (eg. ^5bright^1, ^2blinking^1, etc.).
"
08#
"00,20,54,03
  Let's define the rest of the fields... this
  won't take too long...
"
04
{dn}{dn}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{F3}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{F4}~01{F5}company{dn}{dn}0~01{F2}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{dn}{dn}
{F3}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{F4}~01{F5}address{dn}{dn}1{dn}{dn}{dn}{dn}{dn}{dn}{dn}{dn}2~01{F2}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{dn}{dn}{F3}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{F4}~01{F5}
city{dn}{dn}0{dn}San Jose{dn}y
"61,01,18,12
  Note that we
  have defined
  a default
  value for this
  field, and we
  asked for the
  default to be
  displayed when
  the Data File
  Manager is
  run.
"
08
{F2}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{F3}
{ri}{F4}~01{F5}state{dn}{dn}0{dn}CA{dn}y~01{F2}
{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{F3}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{F4}~01{F5}zip{dn}{dn}1~01{F2}
{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}{le}
{dn}{dn}
{F3}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}{ri}
{ri}{ri}{ri}{F4}~01{F5}phone{dn}{dn}5{dn}{dn}{dn}{dn}{dn}{dn}{dn}{dn}3~01{F2}
"00,16,54,08
  OK.  That is all there is to it.  Of course if
  you were doing this yourself, you might need a
  little help.  Pressing F1 at any time when using
  ^5FormManager^1 will give you a short description
  of the function keys.  Pressing F1 again will
  give you a more detailed multi-page help screen.
  Lets press F1 and see what we get...
"
08#
{F1}@10
"00,19,54,03
  Next I'd like to show you a list of features
  for ^5Forms Editor^1 and some more fancy forms.
"
04
"00,00,79,23
  ^4Forms Editor^1 is a very powerful interactive editor of screen data.  What
  you have seen is a small example of it's power.  Following is a summary
  of it's features:

   Interactive forms editing
   Ability to draw lines and boxes anywhere
   Define fields and field arrays
   Define field validation and range checking
   Set display attributes anywhere on screen
   Define display-only fields
   Online HELP
   22 edit functions, including:
       UNDO, COPY, MOVE, LIST FIELDS,
       READ FORM,  SAVE FORM, LIST DISK DIRECTORY

  You can use these features to create extremely complex forms, with up to
  100 fields per form.  Allow me to show you a couple of examples of what
  people have done with this tool...
"
20#
{A5}demoex1.fm
{F2}@05
{A5}demoex2.fm{F2}
@05
"00,00,79,23
  Once you have designed a form with ^5Forms Editor^1, the next step is to
  use ^5Data File Create^1.  This tool gives you the ability to:

   Define which fields will be "keyed" fields
   Specify any order for displaying forms
   Ability to share same form with other data files
   Ability to re-structure existing data files

  ^5Data File Create^1 combines 1 to 10 forms to make what is called a ^5record^1.
  Each form then becomes a ^5page^1 of a record.  Pictorially this looks like:

          ┌────────────┐         ┌────────────┐                ┌────────────┐
          │ Page n     │         │ Page n     │                │ Page n     │
          │            │         │            │     ....       │            │
    ┌────────────┐     │   ┌────────────┐     │          ┌────────────┐     │
    │ Page 2     │     │   │ Page 2     │     │          │ Page 2     │     │
 ┌──┴─────────┐  │ ────┘┌──┴─────────┐  │ ────┘       ┌──┴─────────┐  │  ───┘
 │ Page 1     │  │      │ Page 1     │  │             │ Page 1     │  │
 │            │  │      │            │  │             │            │  │
 │            ├──┘      │            ├──┘             │            ├──┘
 │ Record 1   │         │ Record 2   │       ....     │ Record n   │
 └────────────┘         └────────────┘                └────────────┘
"
20
"00,00,79,23
  After using ^5Data File Create^1, you can get to the heart of ^4FormManager^1.
  You now use ^5Data File Manager^1, which allows you to put data into your
  fields, define calculations to take place between fields, create/delete
  records,  and search for information.

  We will now switch to the ^5Data File Manager^1 so we can show you all
  (well, most) of it's features.

  To do this we must exit back to DOS and do a little setup.
  Be right back...
"
10
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0075

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1404  11-09-84  11:44a
    CRCK4    COM      1536  10-21-82   7:54p
    DEMO     BAT       198   7-09-83  10:01p
    DEMO1    CAL         1   7-04-83  12:02p
    DEMO1    DAT       837   7-04-83   9:21p
    DEMO1    IX        244   7-04-83  12:02p
    DEMO2    CAL         1   7-04-83  11:57a
    DEMO2    DAT      3495   7-05-83  10:31p
    DEMODFM  EXE    110080   7-10-83  11:41a
    DEMOEX1  FM       5458   5-19-83  10:39p
    DEMOEX2  FM       7922   5-19-83  10:59p
    DEMOFED  EXE     86016   7-09-83  10:25p
    DEMOX    FM       4446   7-04-83  11:58a
    DFM      HLP     11626   6-19-83  12:39p
    KBDDFM   TXT     12066   7-05-83  11:15p
    KBDFED   TXT      9849   7-04-83   5:22p
    ORDER    FM       5774   7-05-83  10:28p
    XXXAUTOF DAT         4   9-04-83  10:10a
    XXXPAD   FM       5066   3-04-83   9:42p
    XYZ      FM       4986   7-03-83   7:59p
           20 file(s)     271009 bytes
                           40960 bytes free
