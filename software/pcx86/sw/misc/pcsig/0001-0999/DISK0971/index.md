---
layout: page
title: "PC-SIG Diskette Library (Disk #971)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0971/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0971"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MULTI BASE"

    MULTI-BASE is a database management system with many sophisticated
    features to complement its simple file management capabilities.
    
    The program has a built-in screen definer, report writer, forms
    generator, and menu generator.  MULTI-BASE can handle as many records in
    a database as the space on your hard disk will allow.  In fact, when
    first defining your database, you tell how many records you believe you
    will need, and MULTI-BASE will allocate the needed space for these
    records.
    
    The system can be completely menu-driven or you can use simple command
    language to manipulate the data in your database.  Since the
    representation of the data, format of the reports and menus are all
    determined by you, MULTI-BASE offers a great deal of flexibility in the
    way the program is used.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES971.TXT

{% raw %}
```
Disk No:  971
Program Title:  MULTI-BASE
PC-SIG version: 1.1

MULTI-BASE is a database management system that has many sophisticated
features to complement its simple file management capabilities.

It comes with a built-in screen definer, report writer, forms generator,
and menu generator.  It has a simple command language so you can define
command lists to manipulate the data in your database easily, but if you
wish the system can be run completely menu-driven.

Since the internal/outward representation of the data, the format of the
hard-copy reports, and the menus are all determined by you, MULTI-BASE
gives you a great deal of flexibility in the way you can use the
program.

Usage:  Database.

Spcicial Requirements:  A printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

ACTVDB        Database file.
MBASE    BAT  Batch file to run MULTI-BASE.
CONFIGUR BAT  Batch file to install program.
CONFIG   SYS  System configuration file.
PRTUG    BAT  Batch file for printing documentation.
MBASEUG  DOC  Documentation.
RUN      EXE  Main program.
READ     ME   How to get started.
???      PGM  Program files (24 files).

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## MBASEUG.DOC

{% raw %}
```
         MULTI-BASE INTRODUCTION

         Be sure and read the file READ.ME before you go any further.
         There are some very important instructions you must perform before
         you continue.

         To run the system, type MBASE at the A> prompt.  After reading the
         Multi-Base introductory screen, press any key and the Welcome to
         Multi-Base Screen will appear.  Press ENTER again and the Multi-
         Base sign on screen will appear.  Enter a four character data base
         name either of a previously existing database that you want to
         work with or a new database you want to create.

         The Multi-Base Master Menu will then appear.

         You should read thru the entire User's Guide before you begin
         working with Multi-Base.  This will give you a better
         understanding of its capabilities and help you in developing any
         applications you have in mind.


         DATABASE DEFINITION

         When defining a new information management application, the first
         thing you must do is define the database file.  Before selecting
         this option, you should have worked out on paper what information
         you want each record to contain.  You should have selected FIELD
         NAMEs for each field in the record.  You should have decided which
         fields are going to be alpha and which are to be numeric.  For
         each alpha field you should know how long it is going to be, ie.,
         the maximum number of characters the field should hold.  For
         numeric fields, you should know whether they're integer or
         floating point.  Integer fields are those without decimal points,
         ie., whole numbers.  For floating point fields you should know the
         maximum number of digits to the left and to the right of the
         decimal point.  Having all of this information down on paper will
         make database definition much easier.

         Some discretion should be used when deciding whether a field is to
         be numeric.  In general, fields should be numeric only if you plan
         to perform arithmetic with them.  Telephone numbers, social
         security numbers, zip codes, dates, etc., should be defined as
         alpha.  Fields should also be defined as numeric if you plan to do
         numerical searches or sorts against the field.

         ------------------------------------------------------------------
         Numeric fields cannot contain dashes or slashes or any other non-
         numeric character other than ".", "+", or +-+.  Commas are not
         allowed.
         ------------------------------------------------------------------

         To define a database, select Option 1, RECORD MAINTENANCE, from
         the Master Menu.  Then select Option 1 from the RECORD MAINTENANCE
         menu.  The following Menu will appear.


                       *****    DATABASE DEFINITION    *****

                      SELECT YOUR OPTION FROM THE LIST BELOW:

                           1 - DEFINE THE DATABASE
                           2 - LIST DATABASE DEFINITION
                           3 - RETURN TO MASTER MENU

                                 ENTER YOUR SELECTION  ?

         Select Option 1 from the Menu.  The following message will
         appear.


              REMEMBER THESE RULES:

              1 - THE FIRST FIELD YOU DEFINE WILL BE THE
                  RECORD KEY.  PLAN YOUR RECORD ACCORDINGLY.
              2 - FIELD NAMES MAY BE UP TO 15 CHARACTERS.
              3 - THE MAXIMUM FIELD LENGTH IS 72 FOR ALPHA FIELDS,
                  10 FOR NUMERIC FIELDS.
              4 - TYPE '.RESTART' TO RESTART DEFINITION.

              PRESS 'RETURN' WHEN READY.

         The system forces the first field in the record to be the key.
         Plan your record accordingly.  Should you discover an error while
         defining the database, type '.RESTART' for the FIELD NAME of a
         field to start over.

         After pressing RETURN, you will begin your record definition.  The
         first field you define will be the Key field.  It must be alpha
         and the system forces it to be.   Simply enter the FIELD NAME for
         the Key field and how many characters it will have.

         Next, each subsequent field in the record must be defined.  Since
         there are three different field types, alpha, integer, and
         floating point, there are three different sets of questions
         depending on which field type you select.

         For alpha fields, answer the following questions.

              ENTER FIELD NAME n ?
              ALPHA OR NUMERIC (A OR N) ?     (respond A)
              ENTER FIELD LENGTH FOR ---------- ?

         For integer fields, answer the following questions.

              ENTER FIELD NAME n ?
              ALPHA OR NUMERIC (A OR N) ?     (respond N)
              INTEGER OR FLOATING POINT (I OR F) ?     (respond I)
              NUMBER OF DIGITS (1-8) ?

         For floating point fields, answer the following questions.


              ENTER FIELD NAME n ?
              ALPHA OR NUMERIC (A OR N) ?     (respond N)
              INTEGER OR FLOATING POINT (I OR F) ?     (respond F)
              NUMBER OF DIGITS TO LEFT OF DECIMAL (1-8) ?
              NUMBER OF DIGITS TO RIGHT OF DECIMAL (0-8) ?

         Answer these questions for each field in your database record.

         ------------------------------------------------------------------
         FIELD NAMEs must not contain an apostrophe (').
         ------------------------------------------------------------------

         Consider the following when planning ahead.  The forms generation
         facility of Multi-Base has the capability of left filling dollar
         amounts with asterisks (*).  That is "$   120.50" can be printed
         as "$***120.50".  This is useful, for example, if you're printing
         checks.  In order to utilize this facility of the forms generator,
         the field must be defined as a dollar field at database definition
         time.  To do this, simply make the first character of the FIELD
         NAME a dollar sign ($), ie., '$NET PAY'.  This establishes that
         field as a dollar field.  Then at form definition time, you can
         select to have that field printed left filled with asterisks or
         printed normally, left filled with blanks.  If you enter a FIELD
         NAME beginning with a dollar sign, the system will force it to be
         numeric.

         ------------------------------------------------------------------
         ENTER .END as the FIELD NAME to end the record definition phase.
         ------------------------------------------------------------------

         You will then be asked for the maximum number of records you want
         the database to hold.  Simply respond with the maximum number of
         records you think you'll ever want the database to hold.  The
         system will automatically round the number you enter up to the
         next Prime Number.  Space will be allocated on the disk for that
         many records.

         Database initialization then takes place.  The entire database is
         propagated with null records.  The index file is also initialized.

         The database definition facility will attempt to create a default
         screen map for you.  Two conditions must be met in order for the
         default map to be generated successfully.  If the total number of
         fields in the database is less than or equal to 22, and no field
         has a length greater than 54 characters, then the default screen
         map will be generated and you can begin using your database
         immediately.  Otherwise, you'll have to define your own screen map
         using the Screen Mapping Facility.

         Database definition is now complete.  You should now select
         Option 2 from the menu to get a hardcopy of your database defini-
         tion.  You will need it for future reference.

         Select Option 3 to return to the Master Menu.


         Multi-Base supports a special type of database called a RECORD #
         database.  With this type of database, the record number is used
         as the Key.  It is assigned automatically by the system.  This
         frees you from having to worry about unique keys throughout the
         database.  Uniqueness is insured by the system.

         To define a RECORD # database, simply use the keyword RECORD # for
         the key FIELD NAME, ie., the first field in the record.
         Everything else is the same.  With this type of database, records
         can be retrieved directly by record number or relationally by any
         other field in the record.

         ------------------------------------------------------------------
         The maximum record length is 1584 characters, ie., the sum of the
         lengths of all fields in the database must not exceed 1584.
         ------------------------------------------------------------------



         CALCULATION (Calc) FIELDS

         A Calc field is a numeric field whose value is calculated from one
         or more other numeric fields.  Calc fields can be the result of
         the addition, subtraction, multiplication, or division of two
         other fields or one field and a constant.  For example.  You may
         have a field called 'INVY VALUE' defined as the product of "QTY ON
         HAND' and 'UNIT COST'.  You may have a field called 'RETAIL PRICE'
         defined as the product of 'COST' and 1.25.  Or, you may have a
         field called 'NET PAY' that results from subtracting 'FICA',
         'FED WH', and 'STATE WH' from 'GROSS'.

         Calc fields consist of four components.  The first component is
         the Calc field itself, ie., the name of the field that will
         receive the result of the calculation.  The second component is
         the first field contributing to the calculation.  The third
         component is one of the mathematical operations, + (addition), -
         (subtraction), * (multiplication), or / (division).  The fourth
         component is the second field or the constant contributing to the
         calculation.

         ------------------------------------------------------------------
         All 'FIELD NAME' components must be defined using the database
         definition facility of Multi-Base before defining any calculation
         fields.
         ------------------------------------------------------------------

         Define them in the usual way.  The arithmetic relationships
         between the result field and the two contributing fields is
         defined in a separate step.  Calc field relationships can be
         defined at any time after database definition.  It is not
         necessary to define them before screen, report, or form
         definition.  Whenever you define them, Multi-Base recognizes them
         and automatically adjusts itself accordingly.  You can even add
         Calc field relationships to previously existing databases.



         DEFINING CALC FIELDS

         Remember, Calc fields are simply ordinary numeric database fields.
         What you will actually be defining are the mathematic
         relationships between the 'RESULT FIELDS' and the 'CONTRIBUTING
         FIELDS'.

         Select Option 1, Record Maintenance, from the Multi-Base Master
         Menu.  Then select Option 1, Define a Database, from the Record
         Maintenance Menu.  Then select Option 3, Define Calculation
         Fields, from the database definition menu.  The following screen
         will appear.


         Remember these rules:

         1 - The RESULT FIELD is the name of the field that
             will receive the result of the calculation.

         2 - The FIRST CONTRIBUTING FIELD is the name of the
             first field contributing to the calculation.

         3 - The valid OPERATIONS are:
             + for addition
             - for subtraction
             * for multiplication
             / for division

         4 - The SECOND CONTRIBUTING FIELD is the name of the
             second field contributing to the calculation.

         5 - Calculated fields cannot be entered or updated manually.

         6 - A maximum of 10 calculation fields can be defined.


         Press RETURN to begin defining your calc field relationships.  The
         following prompt will appear.

              Result FIELD NAME ?

         Enter the name of the previously defined field that will receive
         the result of the calculation.  The following prompt will appear
         next.

              First Contributing FIELD NAME ?

         Enter the name of the previously defined field that will be the
         first field contributing to the calculation.  The following prompt
         will appear next.

              Operation (+,-.*,./) ?

         Enter one of the operations, + for addition, - for subtraction, *

         for multiplication, or / for division.  The following prompt will
         appear next.

              Second contributing FIELD NAME/VALUE ?

         Enter the name of the previously defined field that will be the
         second field contributing to the calculation or either enter the
         constant value to contribute to the calculation.

         The original prompt will re-appear.  If you have other calc fields
         to define, do it now.  Enter '.END' or press RETURN for the Result
         FIELD NAME to end calc field definition.  Control will return to
         the Database Definition Menu.

         ------------------------------------------------------------------
         The maximum number of calc fields you can define is 10.
         ------------------------------------------------------------------


         EXAMPLES:

         This example will calculate 'INVY VALUE' from 'QTY ON HAND' and

         'UNIT COST'.

              Result FIELD NAME ? INVY VALUE
              First Contributing FIELD NAME ? QTY ON HAND
              Operation (+,-,*,/) ? *
              Second Contributing FIELD NAME/VALUE ? UNIT COST

         This example will calculate 'RETAIL PRICE' from 'COST' and 1.25.

              Result FIELD NAME ? RETAIL PRICE
              First Contributing FIELD NAME ? COST
              Operation (+,-,*,/) ? *
              Second Contributing FIELD NAME/VALUE ? 1.25

         This example will calculate 'NET PAY' from 'GROSS', 'FICA', 'FED
         WH', and `STATE WH'.

              Result FIELD NAME ? NET PAY
              First Contributing FIELD NAME ? GROSS
              Operation (+,-,*,/) ? -
              Second Contributing FIELD NAME/VALUE ? FICA

              Result FIELD NAME ? NET PAY
              First Contributing FIELD NAME ? NET PAY
              Operation (+,-,*,/) ? -
              Second Contributing FIELD NAME/VALUE ? FED WH

              Result FIELD NAME ? NET PAY
              First Contributing FIELD NAME ? NET PAY
              Operation (+,-,*,/) ? -
              Second Contributing FIELD NAME/VALUE ? STATE WH



         SCREEN MAP DEFINITION

         The second step in defining a new information management applica-
         tion is to define the screen map.  Whereas database definition
         defined the internal representation of the data, the screen map
         defines the external representation of the data.

         If the default screen map was successfully generated by the
         database definition phase, you can proceed immediately to the
         Master Menu and begin adding records to your database.  You can
         return at any time to personalize your screen map.  You can either
         modify the default screen map to suit your own tastes, or you can
         completely build a new screen map.

         A further bit of explanation may be in order here.  You should
         understand the difference between database definition and screen
         definition, while at the same time understanding their close
         relationship.  When defining your database, you assigned FIELD
         NAMEs to the individual fields in the database record.  These
         names were limited to 15 characters and as such you may have had
         to abbreviate them.  Entering data based on these names may be
         confusing to an operator who didn't actually design and/or define
         the database.  Thus we have the screen map.

         Perhaps a better name would be a Screen Form.  What you're
         actually doing here is defining a form by which to enter and view
         the database records.  The form consists of static textual
         information as well as dynamic database information.  The textual
         information can thus be used as opposed to the field names to
         better identify exactly what the data is.  You can design a form
         that lays out exactly what is expected so that any operator knows
         what data to enter or what data is being viewed.

         The field names are used in defining the screen map, but once
         definition is complete, you can forget about them.  Understand
         that the idea of screen mapping is to get away from having to
         remember or decipher field names.  They do not have to appear
         anywhere on the screen.  Make is to any operator will understand
         what data is expected.


         SCREEN MAPPING FACILITY

         Select Option 1, RECORD MAINTENANCE, from the Master Menu.  Then
         select Option 2, SCREEN MAPPING FACILITY, from the RECORD
         MAINTENANCE menu.  The following Menu will appear.

                              SCREEN MAPPING FACILITY

                      SELECT YOUR OPTION FROM THE LIST BELOW:

                            1 - DEFINE / EDIT SCREEN MAP
                            2 - DISPLAY THE MAP
                            3 - PRINT MAP DEFINITION

                            4 - REGENERATE SCREEN OUTPUT MAP
                            5 - RETURN TO MASTER MENU

                                 ENTER YOUR SELECTION ?

         Select Option 1 to define a new screen map or to modify the
         existing one.  Select Option 2 to display the existing map or the
         screen.  Select Option 3 to produce a formatted listing of both
         the input map file, MAPI, and the output map file, MAPO.  Select
         Option 4 to regenerate the screen map output file, MAPO.  Select
         Option 5 to return to the Master Menu.

         Screen map definition is done in two stages.  In the first stage
         you define the static textual data, ie., the form from which you
         want to enter and view the database recores.  A + sign is entered
         on the screen at each place you want a field from the database to
         be displayed.  In the second stage, you must tell the system which
         fields you want displayed at each + sign.  This is called the
         field definition phase.  The system will prompt you for the FIELD
         NAMEs for each + sign you entered on the screen form.


         THE SCREEN EDITOR

         A screen editor is provided which allows you to create and
         maintain (modify) the screen map input file, MAPI.  Select
         Option 1 from the Menu and control will be passed to the editor.
         The following Menu will appear.


                           *****   SCREEN EDITOR   *****

                      SELECT YOUR OPTION FROM THE LIST BELOW:

                          IN - ENTER SCREEN DEFINITION
                          AP - APPEND TO SCREEN DEFINITION
                          ED - EDIT SCREEN DEFINITION
                          EX - EXIT FROM EDITOR
                          RT - RETURN TO MENU

                                    ENTER YOUR SELECTION?


         THE 'IN' COMMAND

         Enter IN to input your screen map.  This option should only be
         chosen to enter a new map.  If a map already exists, it will be
         overlaid.  After a few informative messages, you should press
         RETURN to begin your screen map definition.  The screen grid will
         be displayed and the cursor will be positioned at the upper left
         corner of the screen.

         The screen is divided into 22 lines.  Each line is 72 characters
         long.  Line 23 is reserved for editor commands and line 24 is for
         system messages.  The system will not let you enter a map more

         than 22 lines long.

         As with database definition, you should work out on paper the way
         you want the screen to appear.  Remember, it is 22 lines by 72
         characters.  Simply type in the screen exactly the way you want it
         to appear.  Type in any static data you choose.  The only
         restriction is that no static data should contain a "+" sign.
         Type a + sign at each place on the screen that you want a field
         from the database record to appear.  Use the RETURN key to move
         the cursor down one line.  Use the SPACE bar to move the cursor to
         the right and the BACKSPACE or RUBOUT key to move the cursor to
         the left.  If you make an error on the line you are currently
         typing, use the BACKSPACE key to move the cursor left to the error
         and then retype it correctly.  Should you discover an error in a
         previous line, don't worry about it.  You'll be able to correct it
         later.

         ------------------------------------------------------------------
         Although it is not absolutely necessary, it is very highly
         recommended that you make the first field on your screen the KEY
         field.  You will avoid an awful lot of confusion later on if you
         do it that way.
         ------------------------------------------------------------------

         When you are through typing in your screen map, type .END in the
         first 4 positions of a new line.  This will cause you to exit the
         IN mode and return to the editor menu.


         THE 'AP'COMMAND

         Use the AP command to append new lines of text to the end of a
         currently defined screen map.  Use this command only if you have
         several lines to append to the screen.  It is faster than using
         the .INS sub-command of the editor.


         THE 'ED' COMMAND

         The ED command is used to modify (edit) the existing map, usually
         the one you just typed in.  Use this command to correct any errors
         you made while in the IN mode or to otherwise modify the screen
         map.

         Enter ED.  The screen map will be displayed and the command prompt
         ">" will appear on line 23.  The editor supports six sub-commands,
         Each command begins with a ".".  Type HELP or ? at the command
         prompt for a summary of the sub-commands.

         Enter .DSP at the command prompt to display the current map.
         Simply pressing RETURN at the prompt has the same effect.  The map
         will be displayed.  Each line will have its respective line number
         to the right side.  Each of the other sub-commands require a line
         number.


         To delete a line of text, enter .DEL,n at the command prompt,
         where n is the number of the line you want to delete.  This line
         will be deleted and the updated map will be displayed.

         To replace a line of text, enter .REP,n at the command prompt,
         where n is the number of the line you want to replace.  The cursor
         will position itself on line 24 of the screen.  Type in the new
         line you want to replace line n with and press RETURN.  The
         updated map will be displayed.

         To insert a line of text, enter .INS,n at the command prompt,
         where n is the number of the line you want to modify.  The line
         you selected will be displayed on line 24 of the screen.  The
         cursor will be positioned at the first character.  Use the 'CTRL
         A'  sequence to position the cursor in the line where you want to
         make a modification.  Type in your change and press RETURN.  The
         line will be changed and the updated map displayed.  This command
         is especially handy for correcting single line typographical
         errors.

         Enter .END at the command prompt to exit the ED mode.  The screen
         editor menu will re-appear.

         Once the screen map is entered, you must exit the screen editor by
         selecting option EX from the menu.


         FIELD DEFINITION PHASE

         The next step is to generate the output map, MAPO.  This is
         referred to as the Field Definition Phase.  Here you must tell the
         system which field you want displayed at each of the + signs you
         entered on MAPI.  This phase starts automatically when you exit,
         EX, the screen editor.

         A few informative messages will appear.  Press RETURN to begin
         field definition.  The screen will clear and your input map will
         begin to be displayed.  Each time a + sign is encountered in the
         input map, the following prompts will appear.

                   LINE nn  COLUMN mm
                   ENTER FIELD NAME?

         Enter the FIELD NAME of the field you want displayed at the
         current line and column numbers.  Do this for each field you have
         defined as prompted.

         If you discover an error during field definition, type .END for
         the FIELD NAME to return to the Menu.  Then select Option 4,
         REGENERATE SCREEN OUTPUT MAP, to restart the field definition
         phase.

         Once field definition is complete, you can proceed to the Master
         Menu and begin using your new screen map.


         You can return to the screen editor at any time to modify the
         screen map.  Doing so will have no effect on the current records
         already in the database.  Feel free to modify the screen map all
         you want to until you get it exactly the way you want it.  If you
         make any changes to the map, even if it's just a change to the
         static data, you must go through the field definition phase to
         regenerate the screen output map MAPO.

         Select Option 5 from the menu to return to the Master Menu.



         ADDING RECORDS TO THE DATABASE

         Select Option 5 from the RECORD MAINTENANCE Menu to add records to
         the database.  After a short pause, the screen map will appear.
         The cursor will be positioned at the first field.  After each
         field will be a series of dots.  These indicate the length of the
         field.  Be careful not to enter more characters than there are
         dots.  Press RETURN after each field is entered.  The cursor will
         automatically position itself at the next field.  Numeric fields
         are automatically formatted according to the database definition
         and redisplayed in their correct format when you press RETURN.

         After all fields have been entered, the OK (Y OR N) ? prompt will
         appear at the bottom of the screen.  Look the record over very
         carefully.  If everything is OK, press RETURN and the record will
         be added to the database.  If you find an error, enter N.  Then
         press RETURN until the cursor is positioned at the field or fields
         in error.  Correct the field and continue to press RETURN until
         the OK prompt reappears.  You can do this as many times as you
         have to insure that the record is correct.  The record will not be
         added to the database until you reply Y to the OK prompt.

         Type .END in the first field and control will return to the Master
         Menu.  You can return via Option 5 at any time to add new records
         to the database.

         If you enter a record with a key that already exists on the
         database, an error message will be issued and the record will not
         be added.

         For RECORD # databases, the current record number will be auto-
         matically displayed in the key field position and the cursor will
         be positioned at the next field on the screen.

         You will be warned when the database is 80% full.  You will also
         be told when the database becomes completely full.

         Record keys are always alpha.  Database definition forces it to be
         defined that way.  Keys can contain any alpha or alphanumeric
         character.  They can also contain special characters and even
         imbedded blanks.  There is only one restriction.

         ------------------------------------------------------------------

         THE RECORD KEY MUST NOT BEGIN WITH A BLANK.
         ------------------------------------------------------------------


         If you try to enter a key beginning with a blank, it will not be
         accepted.

         Numeric fields are checked for validity when you enter them.
         If you enter an invalid numeric, the system will not accept it and
         will force you to re-enter it.  Numeric fields do not need to be
         positioned according to their format.  Simply enter the number
         where the cursor is positioned.  The system will automatically
         format the number and redisplay it in the correct format.  If the
         number is negative, simply enter a "-" sign before the number.
         Positive is the default.  You do not need to enter the "+" sign.
         Do not enter commas (,) in the number.  If you press RETURN
         without entering anything, the numeric will assume a value of zero
         (0).


         INQUIRE/UPDATE/DELETE RECORDS

         Select Option 6 from the RECORD MAINTENANCE Menu to inquire the
         database.  After a short pause, the screen map will appear.  The
         cursor will be positioned at the key field.  Enter the exact key
         for the record you want to retrieve.  You must enter the exact
         key.  If a record with that key does not exist, a "Record Not
         Found" error will appear.  Otherwise, the record will be
         displayed.

         Enter .HC in the key field and the currently displayed record will
         be printed in screen image format.

         Enter .DEL in the key field and the currently displayed record
         will be deleted from the database.

         If you want to modify the currently displayed record, press RETURN
         until the cursor is positioned at the field you want to modify.
         Type in the new information and press RETURN.  When modifying
         alpha fields, you must retype the entire field to insure
         correction.  If the new field is shorter than the old field, you
         must enter trailing blanks to completely replace the field.  For
         numerics, you need not worry about positioning the number in the
         field according to its format.  Simply retype the number at the
         cursor.  It will be correctly formatted and replaced in the field.
         Continue to press RETURN until the cursor is positioned back at
         the key field.  At this point the updated record is rewritten to
         the database.  You may then enter a new key to retrieve another
         record, or enter .END to return to the Master Menu.

         ------------------------------------------------------------------
         THE KEY FIELD CANNOT BE UPDATED.
         ------------------------------------------------------------------

         There are several advantages to using this retrieval technique.

         First, record retrieval is very fast.  Since you must enter the
         exact key for the record, the system can go right to it on the
         database.  Retrieval time should be negligible whether retrieving
         record 1 or record 1000.  Second, it is very easy to update
         individual records using this facility.  Third, this is the only
         facility that allows you to delete individual records from th  e
         database.

         Although this option is designed for direct retrieval by key, it
         will allow you to browse through the database.  Enter .BR in the
         key field field position to enter the "Browse Mode".  To browse
         thru the entire database, enter an "*" in the first position of
         any field.  Press RETURN and each record will be displayed.  To
         terminate the current browse session, type .END.  You can also
         browse thru the database based on a single equal relationship.
         Position the cursor at any field by pressing RETURN.  Type in any
         character string at the field selected and press RETURN.  Any
         record whose selected field is equal to or begins with the
         characters entered will be displayed.  For example.  Suppose you
         have a DATE field defined as MM/DD/YY.  If you position the cursor
         at the DATE field and enter 10/, then all records whose DATE field
         begins with 10/ will be displayed.  If you enter       83 in the
         DATE field, then only those records whose YY (year) is equal to 83
         will be displayed.  The   symbol means to ignore that relative
         character in the compare.  Type .END to terminate the current
         browse session.  If the browse mode is still indicated at the
         bottom of the screen, type .END again to return to the direct
         retrieval mode.

         Any currently displayed record in the browse mode can be printed
         by typing .HC in the key field.  Records cannot be updated or
         deleted in the browse mode.



         RELATIONAL RECORD SELECTION

         Multi-Base allows you to retrieve and/or process records based on
         up to five logical search arguments.  Five different facilities
         have this capability.  They are:

                   1 - Relational Retrieval
                   2 - Dynamic Reporting
                   3 - Report Writer
                   4 - Forms Generator
                   5 - Command Processor

         Each of these facilities uses a common record selection technique.
         The following is a discussion of the selection format and the
         manner in which the search arguments are communicated to Multi-
         Base.

         After selecting one of the above menu items, each of the FIELD
         NAMEs defined for the selected database will be displayed across
         the top of the screen.  This is simply to guide you in entering

         your selection arguments.  Next, the WHERE ? prompt will be
         displayed at the bottom of the screen.  You can then begin
         entering you logical selection arguments.  Up to five arguments
         can be entered.  Each argument is entered in the following format
         at the WHERE ? prompt.

              Field        1          2           3           4
                    'FIELD NAME 1"  |EQ|  |'FIELD NAME 2'|  |AND|
                                    |NE|  |NUMBER        |  |OR |
                                    |LT|  |"LITERAL"     |
                                    |LE|
                                    |GT|
                                    |GE|

         Each field must be followed by a single blank.  The vertical bars
         mean to select one from the group.  The first field is 'FIELD NAME
         1'.  It must be one of the field names displayed on the top
         portion of the screen.  It must be enclosed in apostrophes (').
         Field 2 is one of the following logical operators:  EQ for equal
         to, NE for not equal to, LT for less than, LE for less than or
         equal to, GT for greater than, GE for greater than or equal to.
         The third field can be either another field name, a numeric
         constant, or an alphanumeric literal.  'FIELD NAME 2' must be
         enclosed in apostrophes.  NUMBER is any numeric quantity.
         "LITERAL" is any alphanumeric literal and it must be enclosed in
         quotes (").  If field 3 is a literal, then you may select to
         search on a subfield of field 1.  For example.  Suppose you had a
         field named DATE defined as MM/DD/YY and you wanted to select
         records based on the YY subfield of DATE.  Then you could enter
         the following relation at the prompt.

              WHERE ? 'DATE' EQ "      83"

         The " " symbol says to ignore that relative character when doing
         the compare.  Then all reports whose YY subfield of 'DATE' is
         equal to "83" would be selected.  The last field is optional.  If
         your search criteria consists of more than one argument, they must
         be connected by one of the Boolean operators AND or OR.  If your
         criteria consists of only one argument, or if the current argument
         is the last one in your search criteria, then leave this field
         blank.

         If you want to select all records in the database, simple press
         RETURN at the first WHERE ? prompt.  Typing .END at any WHERE ?
         prompt will cause control to return to the Master Menu.

         Some other rules to remember are:

              1)  The maximum length of the argument is 70 characters.
              2)  FIELD NAME must be one displayed and is a maximum of
                  15 characters.
              3) Literal can be a maximum of 48 characters.

         Logical evaluation of the search arguments is done from left to
         right, ie., first to last.  Each argument is evaluated and

         assigned a value of either True or False.  The Boolean operations
         are then applied first to last to determine the final value of the
         search criteria.  Make Sure to enter the arguments in the order
         that you want them evaluated.  There is no way to alter the first
         to last evaluation hierarchy.  To insure correct logical
         evaluation, the Boolean operators should not change sense, ie.,
         from AND to OR or vice versa, more than one time in your list of
         search arguments.


         RELATIONAL RETRIEVAL

         Select Option 7 from the RECORD MAINTENANCE Menu for relational
         retrieval.  After a short pause, each of the defined field names
         will be displayed.  This is to guide you when entering your
         logical search arguments.  The WHERE ? prompt will then appear at
         the bottom of the screen.  Refer to the section on Relational
         Record Selection for details on how to enter your search
         arguments.

         Pressing RETURN at the first WHERE ? prompt will cause the entire
         database to be selected for retrieval.

         Each record satisfying the arguments you specified will then be
         displayed.  Press RETURN to continue to the next record.  Type .HC
         to cause the currently displayed record to be printed.  Once
         printing is complete, press RETURN to continue or type .END to end
         the search.  Typing .END will cause the original screen to be
         redisplayed.  You can either select to do another search or type
         .END again to return to the Master Menu.

         If you want a hardcopy of each record retrieved, enter Y at the
         prompt.  Each record selected will be printed in database
         definition format.  Records will still be displayed but there will
         be no pause between records.


         BATCH FILE MAINTENANCE


         In some instances you may want to update only one or several
         fields for a whole group (batch) or records.  For example, you may
         want to update TOTAL SALES from a batch of daily sales tickets.
         It would be inconvenient to use the regular update facility since
         each field is selected for update and you only want to update one
         field.

         The Batch File Maintenance facility allows you to select only
         those fields you want to update for a given batch.  Enter the key
         for the record.  The record will be displayed and the cursor will
         position itself only at the fields you have selected for update.

         Select Option 8 from the RECORD MAINTENANCE Menu for Batch File
         Maintenance.  After a short pause, the screen map will appear.
         Use the RETURN key to position the cursor at the different fields.

         At each field you want to update for this batch, enter an "X" and
         press RETURN.  Continue this until all fields you want have been
         selected.  The screen map will reappear and the cursor will be
         positioned at the key field.  Enter the key for the record you
         want to update.  The record will be displayed and the cursor will
         be positioned at the first field you selected for update.  Enter
         your change and press RETURN.  When all selected fields have been
         updated, the cursor returns to the key field.  You may then
         continue with the next record or type .END to return to the Master
         Menu.

         ------------------------------------------------------------------
         THE KEY FIELD CANNOT BE SELECTED FOR UPDATE.
         ------------------------------------------------------------------

         You can update numeric fields by selecting to add, subtract, or
         multiply the current field value by an entered constant.  For
         example, if you wanted to add 10 to the current value of TOTAL
         SALES, type in +10 when the cursor positions itself at the TOTAL
         SALES field.  Enter -10 to subtract 10 from the field.  To
         multiply a field by a value, enter * and the value.  For example,
         *1.10 would increase a field by 10%.

         The operators +,-, and * must be entered at the first position,
         ie., right where the cursor is positioned.  The constant value
         must immediately follow the operation.  If you don't enter one of
         the operators +, -, or *, then the number you enter will replace
         the one currently displayed.  If you want to replace a currently
         displayed value with a negative value, preceed the - sign with a
         blank, ie., enter " -10.2".

         You can print a hardcopy audit trail of your updates by entering Y
         at the prompt.  You must also enter the current date.  The Key and
         the old and new field values will be printed for each field in
         each record updated.  This will allow you to keep track of all
         changes you make to the database as well as the date you made the
         changes.  In some applications this information may be critical.



         REPORT DEFINITION


         Using the Report Definition Facility you can define reports that
         can be generated from the database on a request basis.  As with
         screen map definition, report definition is done in two stages.
         In the first stage you define the report header lines.  In the
         second stage you define which fields you want displayed on the
         report and where the fields are to be positioned on the line.

         Select Option 1 from the REPORT PROCESSING Menu to define a
         report.  The following menu will appear.

                         *****     REPORT DEFINITION *****


                      SELECT YOUR OPTION FROM THE LIST BELOW:

                           1 - DEFINE THE REPORT
                           2 - LIST REPORT DEFINITION
                           3 - RETURN TO MENU

                                      ENTER YOUR SELECTION ?


         Select Option 1 to define the report.  Select Option 2 to list the
         report definition.

         Each report must be identified by a four character name.  You will
         use this name when it comes time to actually generate the report.
         Enter the four character name when prompted.

         The report can be headed up by up to five header lines.  These
         header lines will be printed at the top of each page of the
         report.  As with database and screen map definition, you should
         plan ahead by designing your report on paper.

         Reports can be either 80 or 132 columns wide.  Select either line
         length when prompted.

         You will be prompted to enter the header lines.  A grid will
         appear to guide you as you enter the headers.  Enter each header
         as you want it to appear on the report.  Type .END in the first
         four positions of a new line if you want to have less than the
         five header lines provided for.

         Next, you must enter the FIELD NAMEs of each field you want to
         appear on the report.  Have a copy of your database definition
         handy to help you here.  For each FIELD NAME you must enter the
         position on the line where you want that field to appear.  You can
         optionally enter the length of the field.  If you want to use the
         length as defined in the database definition, simply press RETURN.
         In some cases though, you may want to display only the first few
         characters of a field so that you can get more information on a
         report.  If the field is numeric, you will be asked if you want to
         total that field.  Reply Y if you do.

         Enter single of multiple lines per record reports can be defined.
         The report line(s) must be defined left to right, top to bottom.
         If the line position for the current field is less than or equal
         to the line position for the previous field, then the report
         writer will skip to the next line when it prints the report.
         Thus, all you have to do is define your lines left to right, top
         to bottom.

         After all fields are defined, type .END for the FIELD NAME to end
         report definition and return to the Menu.

         If you make an error while defining the header line, type .RESTART
         in the first 8 positions of the next header line to start over
         from the beginning.  Typing .RESTART for a FIELD NAME will restart

         report definition at the line definition stage.  Reports can be
         redefined from the beginning or starting at the line definition
         step.  Simply enter the name of the existing report and follow the
         prompts.


         THE REPORT WRITER


         Predefined reports can be generated by the report writer.  Report
         formats must have been defined using the Report Definition
         Facility.  Reports can be generated on a request basis.  Records
         can be selected based on up to five logical search arguments.

         Select Option 2 from the REPORT PROCESSING Menu to write a report.
         The following prompt will appear.

                   ENTER FOUR CHARACTER REPORT NAME ?

         Enter the four character report name for the report you want to
         generate.  Each of the FIELD NAMEs defined for the database will
         then be displayed.  This is to guide you in entering your search
         arguments.  The WHERE ? prompt will appear at the bottom of the
         screen.  Refer to the section on Relational Record Selection for
         details on how to enter your logical search arguments.

         Pressing RETURN at the first WHERE ? prompt will cause the report
         to be generated for the entire database.

         The report writer has an option that allows you to break the
         report on any field in the record.  This option is only effective
         if the database is sorted on the field you want to break on.  At
         report generation time you will be prompted:

                   BREAK ON ?

         Enter the FIELD NAME you want to break on.  If you don't want to
         break the report, simply press RETURN.  If you select to break the
         report, the following prompt will appear.

                   START AT ?

         This prompt allows you to base the break on a subfield of the
         selected field.  If you want to use the entire field, simply press
         RETURN.  You should always do this if you're breaking on a numeric
         field.  If you want to base the break on a subfield of the
         selected field, enter the number of the character relative to the
         beginning of the field where the subfield starts.  You will then
         be prompted:

                   FOR LENGTH ?

         Enter the length of the subfield.  For example.  Suppose you had
         had an inventory database whose PART NUMBER was defined as
         XX-YYY-ZZZZ and you wanted to break on the subfield YYY.  Then

         your responses would be as follows.

                   BREAK ON ? PART NUMBER
                   START AT ? 4
                   FOR LENGTH ? 3

         Any time the field you selected to break on changes, the report
         will break.  If any numerics are being totaled, the subtotals will
         be printed at the break.  If there are no subtotals to print, two
         blank lines will be printed.

         Records can be selected based on up to 5 logical search arguments.
         Combining this feature with the break option, a single report
         definition can be used to provide many different combinations of
         data.

         Reports can only be routed to the printer.  You will be prompted
         to enter a report title.  The title can be up to 60 characters.
         Either enter an appropriate title, or simply press RETURN for no
         title.



         DYNAMIC REPORTING


         You can generate one time dynamic reports that can be displayed on
         the screen or printed on the printer.  Selection of fields you
         want displayed is by FIELD NAME.  A columnar report is produced
         headed up by the FIELD NAMEs you choose.  A maximum of five fields
         can be chosen to be displayed on a single report.

         Alpha fields are displayed left justified in their respective
         columns.  Numeric fields are right justified.  For neatness and
         readability, the system forces all alpha fields to be displayed on
         the left side of the report and all numeric fields on the right
         side.

         Records can be selected based on up to five logical search
         arguments.  Each argument must be entered at the WHERE ? prompt.
         Refer to the section on Relational Record Selection for details on
         how to enter your search arguments.

         Pressing RETURN at the first WHERE ? prompt will cause the entire
         database to be selected.

         Any numeric field selected for the report can be totaled.  Simply
         respond Y to the appropriate prompt.

         Select Option 3 from the REPORT PROCESSING Menu for dynamic
         Reporting.  The following prompt will appear.

              SELECT :  (Replace the ? with X to select a field.)
                        (Enter M for menu, S to stop selection.)


         Following this prompt, each of the field names will be displayed
         followed by a "?" .  To Select a field for the report, replace the
         "?" with an "X" .  If you don't want a particular field displayed,
         press RETURN to position the cursor at the next "?".  Continue to
         select fields by typing "X".  Either press RETURN until all fields
         are selected or type "S" to stop selection.

         As you are selecting fields for the report, the system keeps track
         of the current line length.  Should the line length ever exceed
         80, field selection is automatically terminated and your report
         will consist of all fields you have selected so far such that the
         total line length is less than or equal to 80.  Remember, the
         maximum number of fields you can select is five (5).

         After all fields are selected, the WHERE ? prompt will be
         displayed at the bottom of the screen.  Enter the record selection
         criteria.  For any numeric fields selected, the system will ask if
         you want it totaled.  Respond Y if you do.  You will then be asked
         if you want the report routed to the printer.  Respond
         accordingly.  If you select to print the report, you will be
         prompted for a report title.  You can enter up to 60 characters to
         appear at the top of each page of the report.

         The report will then be generated as requested.  When finished,
         the original screen will reappear.  You can then select to define
         and generate another report or type "M" to quit and return to the
         Master Menu.



         FORMS DEFINITION FACILITY


         The Form Definition Facility allows you to interactively design a
         form on which to print database records.  An editor is provided to
         enter and edit the form layout.

         Four types of information can be printed on the form:  1) Static
         text information, 2) Database fields, 3) Global variables, and
         4) Local variables.  Static text can be anything you want it to
         be.  It is printed exactly the same on each form.  Field
         information from the database can be printed at preassigned
         locations within the static text.  Fields are located by '+' signs
         within the text.  At form definition time you define which fields
         you want displayed at each '+' sign.  A GLOBAL variable is one
         that you enter from the keyboard at form generation time.  Globals
         are entered only one time and will subsequently appear on each
         printed form.  Globals are defined by placing a '#' symbol within
         the static text at each location a Global is to appear.  A LOCAL
         variable is similar to a global variable.  It also is entered from
         the keyboard.  But, Local variables have to be entered for each
         form printed.  Locals are defined by placing a '^' symbol within
         the text where each Local is to appear.

         A form letter might be an example where each type of variable

         would be used.  Suppose that you had a client name, address, and
         balance database.  Occasionally you need to send out a form letter
         to each client to verify his current balance.  You could use the
         Forms Definition Facility to do this.  The static text would be
         the form letter itself.  Fields from the database that would be
         included in the letter would be the client's name, address, and
         current balance.  The date of the letter would be defined as a
         Global variable.  Then at form generation time, you would enter
         the current date and it would subsequently be printed on each form
         letter.  To personalize each letter, you could define the
         salutation as a Local variable.  Then as each letter was printed,
         the printer would pause so that you could enter 'Dear Mr. Jones:',
         or 'Dear Mrs. Smith:', or 'Attn:  Accounting Department:', etc.

         The total number of all variables including Global, Locals, and
         database fields must not exceed 60.  The total length of all
         Global variables must not exceed 500 characters.



         FORM DEFINITION


         Form definition is very much like screen map definition.  The same
         editor is provided with the following exceptions.

              1)  Maximum for length is 96 lines rather than 22.
              2)  Maximum line length is 76 characters rather than 72.
              3)  The .DSP sub-command requires a line number, ie.,
                  .DSP,N would cause the form to be displayed starting
                  at line N.

         To define a form, select Option 1 from the FORMS PROCESSING Menu.
         The following Menu will appear.

                       ***   FORMS DEFINITION FACILITY   ***

                      SELECT YOUR OPTION FROM THE LIST BELOW:

                          1 - DEFINE / EDIT FORM
                          2 - PRINT FORM DEFINITION
                          3 - GENERATE DUMMY FORM
                          4 - REGENERATE OUTPUT FORM
                          5 - RETURN TO MAINTENANCE

                                  ENTER YOUR SELECTION ?

         Select Option 1 to define a new form or modify (edit) an existing
         one.  The following Menu will appear.

                             ***   FORMS EDITOR   ***

                       SELECT ONE OF THE FOLLOWING OPTIONS:

                           IN - ENTER FORM DEFINITION

                           AP - APPEND TO FORM DEFINITION
                           ED - EDIT FORM DEFINITION
                           EX - EXIT EDITOR
                           RT - RETURN TO MENU

                                  ENTER YOUR SELECTION ?


         If you are defining a new form, select the 'IN' Option.  Enter the
         3 character form name.

         The following is a brief explanation of how the Forms Definition
         Facility works.  You are effectively presented with a grid that is
         76 characters wide and up to 96 lines long.  You can use any
         positions in this grid to display static text, database fields,
         Global variables, or Local variables.

         If you are designing a form to be printed on plain paper, like a
         form letter, your task is a little easier.  Simple enter the
         static text exactly the way you want it to appear on the paper.
         Enter a '+' sign anywhere you want a field from the database to be
         displayed.  Be sure to leave enough blank spaces after the '+' to
         contain the entire field.  Enter a '#' symbol for each Global
         variable, and a '^' symbol for each Local variable.

         If you are designing a form to be printed on a preprinted form,
         you'll need a forms ruler and a blank form.  You must use the
         forms ruler to determine which line and which columns each
         variable field will be printed at.  Then on the form grid, simply
         space to each line and column and type the appropriate symbol,
         '+', '#', or '^'.  If you will be printing on continuous forms ,
         be sure to leave enough blank lines at the bottom so that line 1
         will be positioned at the top of the next form.

         After selecting the 'IN' option, you will be asked how many lines
         long the form is to be.  Be sure and allow enough lines to include
         blank lines for continuous forms.  You will then be asked for the
         total number of fields defined on the form.  Respond with a number
         that is greater than or equal to the total number of fields.  It
         doesn't have to be exact.  The screen will clear and the line
         number and grid line will appear.  Begin typing in the form
         exactly as you designed it, referencing the line number and the
         character position on the grid.

         Use the SPACE bar to move the cursor right and the BACKSPACE key
         to move it left.  Press RETURN to skip down to the next line.  You
         can use the BACKSPACE key to correct any errors you make while
         typing in a line.  If you discover an error in a previous line,
         don't worry about it.  You can correct it later with the editor.

         When you have completed typing in the entire form, type .END in
         the first four positions of a new line and control will return to
         the Menu.

         Enter 'ED' to edit an existing form.  The editor commands, with

         the exceptions mentioned, are the same as for the screen map
         editor.


         FIELD DEFINITION PHASE


         After you are satisfied that the form is exactly the way you want
         it, you must exit the editor using the 'EX' command.  DO NOT use
         the 'RT' command.  It is reserved for special cases that will be
         discussed later.

         You will then enter the Field Definition Phase.  In this step you
         will indicate which database fields are to be displayed at each of
         the '+' signs and assign FIELD NAMEs to Global and Local
         variables.  After a pause, which could be several minutes
         depending on the number of lines on the form, the form will begin
         to be displayed on the screen.  Each time a + sign is encountered,
         you will be asked for the FIELD NAME of the database field that
         you want displayed there.  Each time a # or ^ symbol is
         encountered, you will be asked to assign a descriptive FIELD NAME
         to the respective Global or Local Variable.  This name will be
         displayed at form generation time to prompt you in entering your
         global or local data.  For local variables, you can also enter the
         FIELD NAME of any database field to be displayed along with the
         local FIELD NAME when you are prompted for the local information.
         For example, if the local field is 'SALUTATION', you may want to
         select to display the database field 'NAME' to be displayed at the
         local prompt.  This would keep you from having to refer to the
         printer or other document to determine what to enter for
         'SALUTATION'.

         For any dollar fields, ie., fields whose name begins with a dollar
         sign ($), you will be asked if you want to left fill the field
         with asterisks (*).  If you do, simple press RETURN.  If not,
         respond N.

         After each field is defined, control will return to the Menu.

         If during the Field Definition Phase you find you've made an
         error, you can type .END for any FIELD NAME and control will
         return to the Menu.  You can then select Option 4 from the Menu to
         return to field definition.

         Select Option 2 from the Menu to print a hardcopy of the form
         definition.  This will be handy for reference.

         Select Option 3 from the Menu to print a dummy form.  This option
         will print the form placing X's into each field defined by a '+'
         sign.  This will give you the opportunity to see exactly how the
         form will appear, and if it is to go on a preprinted form, you can
         hold it up to the light and verify that each field is positioned
         correctly.

         Selected Option 5 to return to the Master Menu.


         You can return via Option 1 at any time to edit a form.  If you
         make any changes whatsoever, you must return via the 'EX' option
         to the field definition step, even if all you changed was static
         text data.  If you go into edit mode but decide not to make any
         changes, you can return to the Menu by selecting Option 'RT'.



         FORMS GENERATION


         Predefined forms can be generated by the Forms Generator.  The
         forms must have been defined using the Forms Definition Facility.
         Forms can be generated on a request basis.  Records can be
         selected based on up to 5 logical search arguments or they can be
         selected singly by Key.

         Select Option 2 from the FORMS PROCESSING Menu to generate a form.
         the following prompt will appear.

              ENTER NAME OF FORM (3 CHARACTERS) ?

         Enter the three character name of the form you want to generate.

         Records can be selected for forms generation either by Key or by
         Relational Selection.  If you want to generate the form for only
         one or a few records, and you know the key for each record you
         want, then select Keyed Retrieval (K).  Otherwise, select
         Relational Record Selection (R).  If you select R, then each of
         the FIELD NAMEs defined for the database will be displayed.  This
         is to guide you in entering your search arguments.  The WHERE ?
         prompt will then appear at the bottom of the screen.  Refer to the
         section on Relational Record Selection for details on how to enter
         your search arguments.

         Pressing RETURN at the first WHERE ? prompt will cause the form to
         be generated for all of the records on the database.

         For each GLOBAL variable, if any, defined for the form, the
         following prompt will appear.

              ENTER VALUE FOR GLOBAL VARIABLE :  'FIELD NAME'

         Enter the value you want the GLOBAL variable 'FIELD NAME' to
         assume.  The following prompt will then appear.

              DO YOU WANT EACH RECORD ON A NEW PAGE (Y OR N) ?

         If you want each record to begin on a new page, reply Y.
         Otherwise, the records will be printed in a continuous form.

         The following prompt will appear next.

              DO YOU WANT FORMS ALIGNMENT CHECK (Y OR N) ?


         If you are printing on a special preprinted form, reply Y.  A
         dummy form will be printed allowing you to check forms alignment.
         Reply N to begin forms generation.

         If you selected "R" for Relational Record Selection, a form will
         be produced for each record satisfying the search arguments you
         requested.  If there are any LOCAL variables defined on the form
         the printer will pause to let you type in the value that you want
         that LOCAL variable to assume.  The field you defined will be
         displayed and the prompt will appear to let you enter the value
         for the LOCAL variable.

         After all forms have been produced, control will return to the
         Master Menu.

         If you selected "K" for Keyed Record Selection, you must enter the
         key for each record that you want the form produced for.  The form
         will be printed as described above.  Enter .END for the key and
         control will return to the Master Menu.



         COMMAND PROCESSING


         Multi-Base provides a simple command language that allows you to
         set up Command Lists for mass updates to the database.  Seven
         commands are supported.  They are:  ADD, SUB, MUL, DIV, MOV, IF,
         and GOTO.  A Command List can consist of up to 50 commands which
         are processed in the order they are entered.  Each command will be
         discussed in detail.


         THE 'ADD' COMMAND

         The ADD command is used to add two fields together.  The general
         form of the add command is :

            ADD  |'FIELD NAME 1'|  TO 'FIELD NAME 2' GIVING 'FIELD NAME 3'
                 |NUMBER        |

         ADD is the keyword.  It must begin in the first position following
         the ">" prompt and it must be followed by a single blank.  The
         vertical bars mean to choose one of the options within the bars.
         'FIELD NAME 1' is any numeric field from the database.  It must be
         enclosed in apostrophes (').  Optionally, you can specify a
         numeric literal (NUMBER).  It is not enclosed in apostrophes and
         must immediately follow the single blank following ADD.  TO is the
         modifier.  It must be preceded and followed by a single blank.
         'FIELD NAME 2' is any numeric field from the database.  It must be
         enclosed in apostrophes.  GIVING is the second modifier.  It is
         optional.  If you leave the GIVING modifier off, 'FIELD NAME 2'
         will receive the result.  Otherwise, 'FIELD NAME 3' will receive
         the result.  GIVING must be preceded and followed by a single

         blank.

         With the exceptions noted, the above rules apply in general to
         each of the other commands.



         THE 'SUB' COMMAND


         The SUB command is used to subtract one field from another.  The
         general form of the SUB command is:

            SUB  |'FIELD NAME 1'| FROM 'FIELD NAME 2' GIVING 'FIELD NAME 3'
                 |NUMBER        |

         FROM is the first modifier.  It must be preceded and followed by a
         single blank.


         THE 'MUL" COMMAND

         The MUL command is used to multiply two fields together.  The
         general form of the MUL command is:

           MUL 'FIELD NAME 1' BY |'FIELD NAME 2'| GIVING 'FIELD NAME 3'
                                 |NUMBER        |

         BY is the first modifier.  It must be preceded and followed by a
         single blank.  If the GIVING modifier is left off, 'FIELD NAME 1'
         will receive the result.


         THE 'DIV' COMMAND

         The DIV command is used to divide one field by another.  The
         general form of the DIV command is:

           DIV 'FIELD NAME 1' BY |'FIELD NAME 2'| GIVING 'FIELD NAME 3'
                                 |NUMBER        |

         If the giving modifier is left off, 'FIELD NAME 1' will receive
         the result.  Should 'FIELD NAME 2' ever be zero (0), the result
         will be 999999.99.


         THE 'MOV' COMMAND

         The MOV command is used to move one field to another.  The general
         form of the MOV command is:

           MOV |'FIELD NAME 1'| TO 'FIELD NAME 2'
               |NUMBER        |
               |"LITERAL"     |


         "LITERAL" is an alphanumeric value.  It must be enclosed in quotes
         (").  The data type of the FROM and TO fields must match, ie.,
         they must both be numeric or they must both be alpha.

         A special form of the MOV command is supported by the Command
         Processor.  It is:

              MOV "#" TO 'DELETE FLAG'

         With this command you can cause selected records to be deleted
         from the database.  'DELETE FLAG' is a special keyword and is only
         valid with the MOV command.  Extreme caution should be exercised
         when using this command as you could very easily delete every
         record in the database.  Be sure to have a good backup before
         doing any kind of mass delete.


         THE 'IF' COMMAND

         The IF command is used to cause conditional transfer within a
         command list.  The general form of the IF command is:

           IF 'FIELD NAME 1'  |EQ| |'FIELD NAME 2'| THEN GOTO nn
                              |NE| |"LITERAL"     |
                              |LT| |NUMBER        |
                              |LE|
                              |GT|
                              |GE|

         For example, the command:

           IF 'GROSS' EQ 0 THEN GOTO 10

         would cause control to transfer to command #10 if 'GROSS' is equal
         to 0.  The following sequence of commands illustrates the use of
         the IF command.

           1  >IF 'GROSS' EQ 0 THEN GOTO 6
           2  >MOV 0 TO 'GROSS'
           3  >MOV 0 TO 'FICA'
           4  >MOV 0 TO 'FED WH'
           5  >MOV 0 TO 'STATE WH'
           6  >MUL 'HOURS' BY 'RATE' GIVING 'GROSS'
           7  >IF 'YTD GROSS' GT 35700 THEN GOTO 99
           8  >MUL 'GROSS' BY .067 GIVING 'FICA'

         If nn is greater than the number of the last command, then control
         is transferred to the end of the command list.

         If the "LITERAL" field is shorter than 'FIELD NAME 1', then all
         records where 'FIELD NAME 1' begins with the "LITERAL" would be
         processed.  For example:

           IF 'NAME' EQ "Ja" THEN GOTO 8


         would cause control to transfer to command #8 for all names
         beginning with the two characters "Ja".

         You can work with a substring of a field as follows.  Suppose your
         record had a field name 'DATE' defined as MMDDYY.  Then

           IF 'DATE' EQ '    83" THEN GOTO 16

         would cause control to transfer to command #16 for all records
         where the YY subfield of 'DATE' was equal to "83".  The " " symbol
         says to ignore that relative character when doing the compare.



         THE 'GOTO' COMMAND


         The GOTO command is used to unconditionally transfer control
         within a command list.  The format of the GOTO command is:

           GOTO nn

         where nn is another command number.  If nn is greater than the
         number of the last command in the list, then control is
         transferred to the end of the command list.

         The following sequence of commands illustrates the use of the GOTO
         command.

           1  >IF 'QTY ON HAND' LE 'MIN STK LVL' THEN GOTO 4
           2  >MOV "N" TO 'ON ORDER FLAG'
           3  >GOT0 5
           4  >MOV "Y" TO 'ON ORDER FLAG'
           5  >.....



         BUILDING THE COMMAND LIST


         Building a Command List is kind of like programming, but not
         nearly as complicated.  There are only seven commands and their
         syntax is very straight forward.

         Two types of Command Lists are available.  One type is for
         executing only one time and disgarding.  The other type is
         actually stored on a disk file by name so that you can return at
         any time to execute it by its name.  It's these types of Command
         Lists that allow you to really complete your application
         definition.

         To define a Command List, select Option 4 from the Master Menu.
         The following Menu will appear.



                          ***   COMMAND PROCESSING   ***

                      SELECT YOUR OPTION FROM THE LIST BELOW:

                         1 - BUILD A COMMAND LIST
                         2 - EXECUTE A COMMAND LIST
                         3 - DISPLAY A COMMAND LIST
                         4 - RETURN TO MENU

                                ENTER YOUR SELECTION ?


         Select Option 1 to build a Command List.  You will be asked to
         enter the name of the Command List.  If you want to permanently
         save the Command List, enter an 8 character name.  Make it as
         descriptive as possible.  If you want to build a Command List to
         execute only one time, simply press RETURN.

         The command line number and prompt (>) will then appear on the
         screen.  Enter each command at the prompt.  Enter .END for the
         last command or simply press RETURN at the prompt.  Remember, you
         can enter a maximum of 50 commands.

         If you want to execute the Command List immediately, reply Y to
         the prompt.  Otherwise, control will return to the Menu.


         EXECUTING A COMMAND LIST

         Select Option 2 from the Menu to execute a Command List.  You will
         be asked to enter the name of the Command List you want to
         execute.  If you did not name the list, ie., it is a one time
         Command List, simply press RETURN.  Otherwise, enter the name of
         the Command List you want to execute.

         Records can be selected for processing either by Key or by
         Relational Selection.  If you select relational selection, you can
         also select to display or not display the updated records as the
         command list is executing.  Selecting no to display the records
         will cause the Command List to execute faster, especially if you
         have a large record and/or a complex screen map.  If you select to
         display the records, you can actually watch the Command List as it
         is executing.

         The database FIELD NAMEs will be displayed followed by the WHERE ?
         prompt.  Refer to the section on Relational Record Selection for
         details on how to enter your search arguments.

         Pressing RETURN at the first WHERE ? prompt will cause the entire
         database to be selected for processing.  Otherwise, the Command
         List will apply to all records on the database that satisfy the
         selection criteria.

         If you selected record selection by Key, the screen map will
         appear.  Enter the Key for the record you want to process.  The

         Command List will be executed and the results will be displayed.
         You can then enter the Key for the next record you want to process
         or enter .END to return to the Master Menu.


         DISPLAYING A COMMAND LIST

         Select Option 3 to display a Command List.  The Command List can
         either be displayed on the screen, or routed to the printer for a
         permanent hardcopy.

         Since Command Lists are stored internally in a coded form, they
         cannot be updated.  If a command list has to be changed, the
         entire command list must be re-entered.


         USER MENU PROCESSING


         Multi-Base provides you with a number of system menus to guide you
         through the development and use of your application.  But once
         you've got your application completely developed, many of the
         options provided for on Multi-Base's menus are no longer needed ad
         in fact clutter up your application.  Also, its kind of
         inconvenient to have to enter the names of reports, forms, etc.,
         each time you use them.

         Thus, you can define a single User Menu to supervise control of
         your application.  On this menu you can define your own options
         and select only the facilities of Multi-Base that you need to run
         your application.  In effect, menu definition allows you to put a
         professional looking finishing touch on your application.

         Menu definition is very much like screen map definition.  The same
         editor is used.  thus the learning time for using this facility is
         greatly reduced.  The question and answer technique used allows
         you to get your menu defined in a minimum length of time.  Once a
         menu is defined, it gets control automatically after you Sign-On.
         There is no additional manual intervention required.  When under
         user menu control. you can return to the Multi-Base Master Menu by
         pressing CTRL-C.

         To define a menu, select Option 5, USER MENU PROCESSING, from the
         Master Menu.  Then select Option 1 from the USER MENU PROCESSING
         Menu.  The following Menu will appear.


                             MENU DEFINITION FACILITY

                      SELECT YOUR OPTION FROM THE LIST BELOW:

                            1 - DEFINE / EDIT THE MENU
                            2 - DEFINE THE MENU OPTIONS
                            3 - DISPLAY THE MENU
                            4 - PRINT MENU DEFINITION

                            5 - RETURN TO MASTER MENU

                                       ENTER YOUR SELECTION ?


         Select Option 1 to define your menu.  The following MENU EDITOR
         Menu will appear.


                            *****   MENU EDITOR   *****

                      SELECT YOUR OPTION FROM THE LIST BELOW:

                          IN - ENTER MENU DEFINITION
                          AP - APPEND TO MENU DEFINITION
                          ED - EDIT MENU DEFINITION
                          RT - RETURN TO MENU

                                     ENTER YOUR SELECTION ?


         Except for some of the wording, this is the same menu you see when
         you select to define a screen map.  Select Option 'IN' to enter
         your menu definition.  A few informative messages will appear.
         Press RETURN.  The screen will clear and the screen grid will
         appear.

         Menu definition is done in two phases.  In the first phase you
         define the "text" of the menu.  Simply type on the screen the
         exact information you want the screen to contain.  Each option
         MUST be identified by a number.  These numbers MUST begin with 1
         (one) and MUST be consecutive, ie., if your menu has five options,
         they must be numbered 1, 2, 3, 4, and 5.  Your menu can be up to
         22 lines of 72 characters each.  You can define a maximum of 25
         different options.  You may have several options that use the same
         facility.  For example, you application may have several different
         reports defined for it.  You would thus want to have a different
         option for each report.  Remember, your menu can display not   t
         only the available options, but any other directions or dress-up
         information you want.  For example, you might want to say at the
         bottom of the screen to "Press CTRL-C to return to the Master
         Menu".  Make it look nice.

         Once you've got the menu typed in, type .END in the first four
         positions of a new line to return to the editor menu.  If you need
         to, you can select the 'ED' option to edit or otherwise modify the
         menu.  Refer to the screen map editor for instructions on using
         the editor.

         At this point you must complete phase two of the definition
         process.  If you select option 'EX' from the editor menu, you will
         immediately proceed to the Option Definition phase.  If you don't
         otherwise have a hardcopy of your menu, you should select option
         'RT' to return to the Menu Definition Menu and then select Option
         4 to get a hardcopy of what you'll probably need some sort of

         hardcopy to successfully complete phase two of the definition.
         Select Option 2 from the Menu Definition menu to return to the
         Option Definition phase.

         You should have a copy of your database definition and a copy of
         your database Table of Contents handy to help in completing phase
         two of the menu definition.

         Upon entering the Option Definition phase, the following screen
         will appear.


            THE FOLLOWING FACILITIES ARE AVAILABLE FOR MENU SELECTION.

            1 - ENTER NEW RECORDS          8 - GENERATE A FORM
            2 - RETRIEVE RECORDS BY KEY    9 - EXECUTE A COMMAND LIST
            3 - UPDATE/DELETE RECORDS     10 - SORT A DATABASE
            4 - RELATIONAL RETRIEVAL      11 - NOT AVAILABLE
            5 - DYNAMIC REPORTING         12 - SWITCH DATABASES
            6 - BATCH FILE MAINTENANCE    13 - RETURN TO MASTER MENU
            7 - WRITE A REPORT            14 - EXIT MULTI-BASE

            FOR EACH OPTION ON YOU MENU, SELECT ONE OF THE ABOVE
            FACILITIES BY NUMBER.  ENTER 99 FOR THE LAST SELECTION.


         The top half of the screen lists each Multi-Base facility that is
         available to a user menu.  Notice that none of the application
         definition facilities are there.  You should be thru with them at
         this point.  The number by the side of each facility is the
         respective facility number.  At this time there is no relationship
         between these numbers and the option numbers on your menu.  There
         will be when you're through.

         Following this list is the prompt:

                            M E N U    O P T I O N :  1

         Now, this number represents the current option number on your
         menu.  Following this is the prompt:

                  T O   U S E   F A C I L I T Y   N U M B E R   ?

         Enter the corresponding number of the facility you want to get
         control when the current option number is entered from you menu.
         For example, if the current option is to generate a report, enter
         7 for the facility number.

         Each consecutive option number from you menu will be presented.
         For each one, enter the corresponding facility number.  When the
         options from your menu are exhausted, enter 99 for the facility
         number.  Menu definition is now complete.

         Depending on the facility number you select, you may be prompted
         for additional information.


         For facility number 7, Write a Report, you must enter the four
         character report name that you want to generate.  If you don't
         enter a name, the report writer will prompt you for the name when
         it gets control.

         For facility number 8, Generate a Form, you must enter the three
         character form name that you want to generate.  If you don't enter
         a name, the forms generator will prompt you for the name when it
         gets control.

         For facility number 9, Execute a Command List, you must enter the
         eight character command list name that you want to execute.  If
         you don't enter a name, the command processor will prompt you for
         the name when it gets control.

         For facility number 10, Sort the Database, you must enter the
         FIELD NAME of the field you want to use as the sort key.  If the
         field is alpha, you will be prompted for the relative starting
         position in the field.  If you want to start at the beginning,
         enter 1 or simply press RETURN.  You will then be prompted for the
         length of the sort key.  Press RETURN to use the defined length or
         enter the length you want to use.  For example, suppose you wanted
         to sort on the year subfield of a field named DATE defined as
         MMDDYY.  Then enter DATE as the FIELD NAME.  For the starting
         position enter 5.  For the length enter 2.  You will then be
         prompted whether you want an ascending or a descending sort.
         Enter A for ascending or D for descending.

         For facility number 12, Switch Databases, enter the 4 character
         name of the database you want to switch to.

         The menu processor does not provide a high degree of error
         trapping.  If an error occurs in the menu processor itself,
         control will be transferred to the Master Menu.  You should thus
         be very careful that you correctly define your options in phase
         two.  If an error occurs in one of the selected facilities, normal
         error trapping will take place.  You can then either stop or
         return to your menu.

         Control can be passed to a user menu from the Master Menu.  Select
         Option 5, USER MENU PROCESSING.  Then select Option 2 from the USE
         MENU PROCESSING Menu to transfer control to the user menu.



         DATABASE UTILITIES


         Multi-Base provides several utilities that complement the system.
         Select Option 6 from the Master Menu for the utilities.  The
         following menu will appear.


                                DATABASE UTILITIES


                           1 - DISPLAY DATABASE DEFINITION
                           2 - DISPLAY TABLE OF CONTENTS
                           3 - REORGANIZE THE DATABASE
                           4 - SORT THE DATABASE
                           5 - REINITIALIZE THE DATABASE
                           6 - RETURN

                                         ENTER YOUR SELECTION ?


         Select Option 1 to display the database definition.  The listing
         can be displayed on the screen or printed on the printer.

         Select Option 2 to display or print the Table of Contents.

         Select Option 3 to compress and reorganize the database.  When you
         delete records from the database, they are not physically removed.
         Instead, they are flagged as deleted and ignored by the system. If
         after an extended period of time you have deleted a number of
         records, you should run the reorganize utility to actually remove
         them from the database as they are taking up unnecessary disk
         space.

         The reorganize utility completely rebuilds the database.  It can
         be used to cure a world of ills.  If during normal operation find
         the system not working quite like you think it should, try running
         the reorganize utility.  Chances are it will shake loose some old
         dust that may be causing the problem.

         Since the reorganize utility may physically remove some records
         from the database, it tells you about it when it does.  When a
         record is removed, it is displayed.  If you want a permanent copy
         of the records deleted, select to hardcopy the list.

         Select Option 4 to sort a database.  You must enter the FIELD NAME
         of the field you want to use as the sort key.  If the field is
         alpha, you will be prompted for the relative starting position in
         the field.  If you want to start at the beginning enter 1 or
         simple press RETURN.  You will then be prompted for the length of
         the sort key.  Press RETURN to use the defined length or enter the
         length you want to use.  For example, suppose you wanted to sort
         on the year subfield of a field named DATE and MMDDYY.  Then enter
         DATE as the FIELD NAME.  For the starting position enter 5.  For
         the length enter 2.  You will then be prompted whether you want an
         ascending or a descending sort.  Enter A for ascending or D for
         descending.

         Select Option 5 to reinitialize a database.  This option removes
         all data from the database.  It does not effect the database
         definition, screen definition, report definitions, or form
         definitions.






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0971

     Volume in drive A has no label
     Directory of A:\

    ACTVDB             110   4-06-87   7:59p
    AMENU    PGM      1406   3-19-87   8:27a
    CONFIG   SYS        17   3-15-87   2:03p
    CONFIGUR BAT        14   3-17-87   3:23p
    CONFIGUR PGM      1736   3-19-87   8:38a
    DBFBUPD  PGM      8148   3-19-87   8:31a
    DBFCALC  PGM      4240   3-19-87   8:35a
    DBFCMDB  PGM     10960   3-19-87   8:32a
    DBFCMDP  PGM     14806   3-19-87   8:33a
    DBFCMDST PGM      5236   3-19-87   8:37a
    DBFCOMP  PGM      4474   3-19-87   8:34a
    DBFDEFFM PGM     12816   3-19-87   8:36a
    DBFDEFMU PGM     11954   3-20-87   3:47p
    DBFDEFN  PGM      9164   3-19-87   8:35a
    DBFDRPT  PGM     11220   3-19-87   8:30a
    DBFGENFM PGM     11262   3-19-87   8:32a
    DBFINPT  PGM      7060   3-19-87   8:28a
    DBFMENUP PGM      2348   3-19-87   8:28a
    DBFNQUD  PGM      8132   3-19-87   8:29a
    DBFOLMF  PGM     12078   3-19-87   8:35a
    DBFRELT  PGM      8838   3-19-87   8:29a
    DBFRPTFN PGM      8894   3-19-87   8:36a
    DBFSGON  PGM      1166   3-19-87   8:27a
    DBFSORT  PGM      6640   3-19-87   8:34a
    DBFSUP   PGM      8334   3-19-87   8:28a
    DBFWRITE PGM     12332   3-19-87   8:31a
    FILES971 TXT      1326   1-24-89   3:28p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-15-87   1:50p
    LOGO     PGM      1920   4-03-87   2:16p
    MBASE    BAT        15   3-15-87   2:04p
    MBASEUG  DOC     91440   4-06-87   2:01p
    PRTUG    BAT        24   4-06-87   2:02p
    READ     ME        822   1-18-87   1:00p
    RUN      EXE     49152   3-19-87   3:19p
           35 file(s)     328662 bytes
                           15360 bytes free
