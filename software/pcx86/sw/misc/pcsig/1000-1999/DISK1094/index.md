---
layout: page
title: "PC-SIG Diskette Library (Disk #1094)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1094/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1094"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SBW 1 OF 2 (ALSO 1095)"

    SYSTEM FOR BUSINESS AND THE WORKPLACE (SBW) is a multifaceted
    integrated system that meets many common business needs. The system has
    five different functions and a separate module for each: customer
    information system, human resource (personnel) management, accounting,
    inventory, and production system. It also has an extensive
    documentation manual covering all five modules. The system is written
    in dBase III+ and you will need dBase III+ to run it. Also included is
    the DBase source code.
    
    The customer file lets you maintain a complete customer database
    including purchase information and demographics about the customer. You
    can even print mailing labels or generate form letters. With the human
    resources management portion of the system you can maintain detailed
    personnel records on your employees. Previous employment history,
    personnel reports, and payroll are all supported. The accounting system
    is also designed for the small business. It handles both accounts
    payable and receivable. It maintains your chart of accounts and
    posts all expenses and income. Inventory management is for either
    manufactured goods or raw materials.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAP1.TXT

{% raw %}
```

1. THE CUSTOMER INFORMATION SYSTEM

1.1. OPERATING SYSTEM           

1.1.1. STARTING UP
Loading up dbase.

 SCREEN 1-1: STARTING UP
/---------------------------------------------------------------------------\

A>

\---------------------------------------------------------------------------/

Look at the screen, and find the "A>".
To me, it shows that the computer (defaults and/or) expects me to
insert disk 1 of the Dbase III plus program in drive A and  the 
Smith's Bikeworks program diskette in drive B.
Next, I  want to type dbase and press return, because I want to 
load dbase.

INSERT: Disk 1 of the dBASE III PLUS program in drive A

INSERT: Smith's Bikeworks program diskette in drive B

TYPE:  DBASE
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Load up dbase.

Q&A 1-1: Why do you want to type DBASE at A>?

SCREEN 1-2: Load up dbase
/--------------------------------------------------------------------------\
ZDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD?
3                 dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                 3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3                                                                             3
3                                                                             3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up,  non-transferable,  personal license to use     3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of  the package,  nor do  you have  the right to     3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable  for any violation of  the  License  Agreement  or of     3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY

                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
\--------------------------------------------------------------------------/

Look at the screen, and find the message below the copyright warning.
To me, it shows that the computer (defaults and/or) expects me to
insert the second disk and press return.
Next, I want to insert the second Dbase III plus disk and press return, 
because I want to continue loading dbase.

INSERT:  Disk 2 of the dBASE III PLUS program in drive A
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Continue loading dbase and display the dbase prompt.

Q&A 1-2: Why must a second disk be inserted?

 SCREEN 1-3: Display the dbase prompt
/--------------------------------------------------------------------------\
ZDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD?
3                 dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                 3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3                                                                             3
3                                                                             3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up, non-transferable, personal license to use       3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of the package, nor do you have the right to         3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable for any violation of the License Agreement or of          3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY

                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
(DEMO) .
\--------------------------------------------------------------------------/

Look at the screen, and find the "(DEMO) ." prompt.
To me, it shows that the computer (defaults and/or) expects me to
type a dbase command.
Next,  I want to type DO SYSMENU and press return, because I want 
to display the first menu in the Smith's Bikeworks system.

TYPE:  DO SYSMENU
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Execute the SYSMENU program.

Q&A 1-3: Why must you type DO SYSMENU?

Comment:  If you use a full blown version of Dbase III plus you will not 
see the word DEMO in front of the dot prompt.

 1.2. SYSMENU
The system menu controls entry into the Smith's Bikeworks subsystems.

 SCREEN 1-4: Execute the SYSMENU program
/--------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM

                               >> Activity Menu <<

                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System

                       Press Letter Matching Desired Option
\--------------------------------------------------------------------------/
Look at the screen, and find the "Activity Menu".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice between A and F.
Next, I want to type A, because I want to load the customer information 
system.

TYPE:  A
AND THE SYSTEM WILL:  Activate the Customer Information System.

Q&A 1-4: How do you load the Customer Information System?

Comment: The Activity Menu controls entry into the Smith's Bikeworks 
subsystems. It is maintained as part of the Customer Information System.

 1.3. THE CUSTOMER INFORMATION MENU
 This menu displays all the options for the customer information system.

SCREEN 1-5: Activate the Customer Information System
/--------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM

                         >> Customer Information System <<

                    A. Customer File MAINTENANCE
                    B. Print CUSTOMER REPORT
                    C. Print MAILING LABELS
                    D. Generate FORM LETTER File
                    E. CUSTOMER File CLEAN UP
                    F. Move PURCHASE AMOUNTS Back a Year
                    G. Return to SYSTEM MENU

                       Press Letter Matching Desired Option
\--------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to G.
Next, I want to type A,  because I want to go into customer file 
MAINTENANCE.

TYPE:  A
AND THE SYSTEM WILL: Load the maintenance program which is named 
CUSTMNT.PRG.

Q&A 1-5: What does the customer file maintenance do?

Comment: Customer File Maintenance allows the user to add, change, or 
delete records in the CUSTOMER file.
The CUSTOMER file keeps track of customers, their location, and the extent 
and nature of their purchasing activity.

1.3.1. THE CUSTOMER FILE MAINTENANCE
This option allows the user to add, change, or delete records in the
CUSTOMER file.

SCREEN 1-6: Load the maintenance program which is named CUSTMNT.PRG
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:03/03/87     Record          6 of        7

 Name -- Last  FARMER                 First  BEN               Initial  Y
 Title    FIELD REPRESENTATIVE          Company  ROCHE BIKE WORKS
 Street   4444 5TH STREET           City  NOTHINGHAM      State  MA  Zip  33334
 Purchase Codes -- 1  99999   2  88888   3  77777
 Last Buy  01/01/85  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 05/19/86
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the "submenu of options at the bottom of the 
screen".
To me, it shows that the computer expects me to enter  a command.
Next,  I  want to type F,  because I want to <F>ind a record in the 
CUSTOMER file.

TYPE:  F
AND THE SYSTEM WILL: Display the find screen with an entry field containing 
the key value of the current record.

Q&A 1-6: Why is the key value of the current record displayed in the entry area?

Comment: The submenu of options at the bottom of the maintenance screen 
controls operation of CUSTMNT.PRG. An option is requested by pressing the 
letter key associated with that option.





SCREEN 1-7: Entry field containing the key value of the current record
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:03/03/87     Record          6 of        7

 Name -- Last  FARMER                 First  BEN               Initial  Y
 Title    FIELD REPRESENTATIVE          Company  ROCHE BIKE WORKS
 Street   4444 5TH STREET           City  NOTHINGHAM      State  MA  Zip  33334
 Purchase Codes -- 1  99999   2  88888   3  77777
 Last Buy  01/01/85  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 05/19/86
-------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE NOW SHOWN IS FROM DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR  FARMER,BEN
\--------------------------------------------------------------------------/

Look at the screen, and find the blinking cursor at the bottom of the 
screen.
To me, it shows that the computer expects me to press Ctrl-Y to clear the 
reverse video area.
Next, I want to press Ctrl Y, because I want to clear the reverse video 
area.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
AND THE SYSTEM WILL:  Clear the entry area.

Q&A 1-7: Why press Ctrl-Y?

Comment:  Reverse video area means an area on the screen that has been 
inverted for easier visibility.

 SCREEN 1-8: Clear the entry area
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:03/03/87     Record          6 of        7

 Name -- Last  FARMER                 First  BEN               Initial  Y
 Title    FIELD REPRESENTATIVE          Company  ROCHE BIKE WORKS
 Street   4444 5TH STREET           City  NOTHINGHAM      State  MA  Zip  33334
 Purchase Codes -- 1  99999   2  88888   3  77777
 Last Buy  01/01/85  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 05/19/86
-------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE NOW SHOWN IS FROM DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR
\--------------------------------------------------------------------------/

Look at the screen, and find the cursor in the highlighted entry area.
To me, it shows that the computer (defaults and/or) expects me to
enter a search value.
Next, I want to type a last name and press return, because I want 
to look for a customer with that last name.

TYPE:  MUSKAT      
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Search for a customer with that last name.


Q&A 1-8: How does the system search for the customer requested?

Comment: Although LAST NAME,FIRST NAME is displayed, only the LAST NAME  
must be entered for the search.
The name must be entered exactly as it appears in the file. Attention       
must be paid to lower and upper case.

SCREEN 1-9: Search for a customer with that last name
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:03/03/87     Record          6 of        7

 Name     -- Last      MUSKAT                     First      ALAN Initial  N
 Title    JANITOR                       Company  UAS    
 Street   7503 MAIN APT A      City  CLEVELAND  State  SC         zip    45555
 Purchase Codes -- 1          2          3       
 Last Buy  01/01/85  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 01/31/85
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the new record of customer "MUSKAT".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type A, because I want to <A>dd a record. 

TYPE:  A
AND THE SYSTEM WILL:  Display a blank record and allow you to enter the 
field values.

Q&A 1-9: What Dbase command allows a new record to be added to the database?

Comment: Place the data for the new record at the cursor position starting 
at the top of the screen. Move among fields using the cursor control keys. 
Press RETURN to advance to the next field.
Do not press RETURN after an entry that fills the entire field.

SCREEN 1-10: Enter the field values
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:03/03/87     Record          8 of        8

 Name -- Last                         First                    Initial
 Title                                  Company
 Street                             City                  State      Zip
 Purchase Codes -- 1          2          3
 Last Buy    /  /    Value This Year        .    Value Last Year        .
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
-------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\--------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item "Name --
Last".
To me, it shows that the computer (defaults and/or) expects me to
enter the new customer's last name.
Next, I want to enter the last name of the new customer and press 
return, because I want to add a new customer.

TYPE:  ALBERTI
PRESS:    [<-']  Enter/Return key
AND THE SYSTEM WILL:  Accept the entry and move on to the next item.

Q&A 1-10: What commands are used to store the new data typed on the screen into 
the record fields?

Continue entering the record:

TYPE:  FRAN
PRESS:  [<-']  Enter/Return key
TYPE:  A
TYPE:  MANAGER
PRESS:  [<-']  Enter/Return key
TYPE:  ALHAZME EAST
PRESS:  [<-']  Enter/Return key
TYPE:  8065 S.W 107 AVENUE 
PRESS:  [<-']  Enter/Return key
TYPE:  MIAMI
PRESS:  [<-']  Enter/Return key
TYPE:  FL
TYPE:  33173
TYPE:  A
PRESS:  [<-']  Enter/Return key
TYPE:  B
PRESS:  [<-']  Enter/Return key
TYPE:  C
PRESS:  [<-']  Enter/Return key
TYPE:  011587
TYPE:  200000
PRESS:  [<-']  Enter/Return key
TYPE:  500000
PRESS:  [<-']  Enter/Return key

SCREEN 1-11: Move on to the next item
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:02/03/87     Record          7 of        7

 Name -- Last  ALBERTI                First  FRAN              Initial  A
 Title     MANAGER                      Company  ALHAZME EAST
 Street    8065 S.W 107 AVENUE      City   MIAMI          State  FL  Zip  33173
 Purchase Codes -- 1  A       2  B       3  C
 Last Buy  01/15/87  Value This Year  200000.00  Value Last Year  500000.00
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
-------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\--------------------------------------------------------------------------/

Look at the screen, and find the "message at the bottom of the screen".
To me, it shows that the computer (defaults and/or) expects me to
press any key or type C to add another record.
Next,  I  want to press any key,  because I do not wish to add any 
more records.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Update the CUSTOMER file and bring back the 
maintenance submenu.

Q&A 1-11: What must you do if you want to add another record?

SCREEN 1-12: Bring back the maintenance submenu
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:02/03/87     Record          7 of        7

 Name -- Last  ALBERTI                First  FRAN              Initial  A
 Title     MANAGER                      Company  ALHAZME EAST
 Street    8065 S.W 107 AVENUE      City   MIAMI          State  FL  Zip  33173
 Purchase Codes -- 1  A       2  B       3  C
 Last Buy  01/15/87  Value This Year  200000.00  Value Last Year  500000.00
 Last Updated :   /  /
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type D, because I want to flag the currently displayed 
record for deletion.

TYPE:  D
AND THE SYSTEM WILL:  Flag the current (displayed) record for deletion and 
display the word "*DELETED*" in the upper left hand corner of the screen.

Q&A 1-12: Does the command DELETE remove a record permanently?

Comment: In order to permanently remove a record from the CUSTOMER file, 
the CUSTOMER File CLEAN Up option must be selected from the Customer 
Information System menu. 

SCREEN 1-13: Display the word "*DELETED*"  
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM                    
                                                                              
               >> Customer Information System File Maintenance <<             
 * DELETED *     Today's Date:02/06/87     Record          6 of        7
                                                                              
 Name -- Last  ALBERTI                First  FRAN              Initial  A
 Title     MANAGER                      Company  ALHAZME EAST
 Street    8065 S.W 107 AVENUE      City   MIAMI          State  FL  Zip  33173
 Purchase Codes -- 1  A       2  B       3  C
 Last Buy  01/15/87  Value This Year  200000.00  Value Last Year  500000.00
 Last Updated :   /  /
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type D again, because I want to recall the deleted record.

TYPE:  D
AND THE SYSTEM WILL: Remove the flag from the deleted record.

Q&A 1-13: Why does pressing "D" again recall the record?

SCREEN 1-14: Remove the flag from the deleted record 
/--------------------------------------------------------------------------\
               >> Customer Information System File Maintenance <<

                 Today's Date:02/03/87     Record          7 of        7

 Name -- Last  ALBERTI                First  FRAN              Initial  A
 Title     MANAGER                      Company  ALHAZME EAST
 Street    8065 S.W 107 AVENUE      City   MIAMI          State  FL  Zip  33173
 Purchase Codes -- 1  A       2  B       3  C
 Last Buy  01/15/87  Value This Year  200000.00  Value Last Year  500000.00
 Last Updated :   /  /
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type E, because I want to edit a record.

TYPE:  E
AND THE SYSTEM WILL: Display the edit screen.

Q&A 1-14: What must be done if you want to edit a record other than the one 
currently displayed?

Comment: The user can change the data at the current cursor position. Use 
the arrow and backspace keys to move within a field or to go back to a 
previous field. Press RETURN to advance to the next field.
Leave a field unchanged by pressing the enter/return key only.

SCREEN 1-15: Display the edit screen
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:02/03/87     Record          7 of        7

 Name -- Last  ALBERTI                First  FRAN              Initial  A
 Title     MANAGER                      Company  ALHAZME EAST
 Street    8065 S.W 107 AVENUE      City   MIAMI          State  FL  Zip  33173
 Purchase Codes -- 1  A       2  B       3  C
 Last Buy  01/15/87  Value This Year  200000.00  Value Last Year  500000.00
 Last Updated : 02/03/87
      ******** PRESS ANY KEY TO FINISH EDIT AND RETURN TO SUBMENU
-------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\--------------------------------------------------------------------------/

Look at the screen, and find the "instruction message at the bottom".
To me, it shows that the computer (defaults and/or) expects me to
enter a new last name or change the current one.
Next, I want to type ALBERTI and Pg Dn, because I want to correct the last 
name.

HOLD DOWN: [Ctrl]
AND PRESS:  Y  
TYPE:  ALBERTI
PRESS:  [PgDn]  
AND THE SYSTEM WILL:  Accept the entry and redisplay the maintenance 
submenu.


Q&A 1-15: What does the PgDn key do?

SCREEN 1-16: Redisplay the maintenance submenu
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<

                 Today's Date:02/03/87     Record          2 of        7

 Name -- Last  ALBERTI                First  FRAN              Initial  A
 Title     MANAGER                      Company  ALHAZME EAST
 Street    8065 S.W 107 AVENUE      City   MIAMI          State  FL  Zip  33173
 Purchase Codes -- 1  A       2  B       3  C
 Last Buy  01/15/87  Value This Year  200000.00  Value Last Year  500000.00
 Last Updated :   /  /
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I  want to type P, because I want to look at the previous 
record.

TYPE:  P
AND THE SYSTEM WILL:  Locate and display the previous record in the current 
index.

Q&A 1-16: Why is the record number not sequential?

SCREEN 1-17: Display the previous record in the current index
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

               >> Customer Information System File Maintenance <<
                 Today's Date:02/03/87     Record          2 of        7

 Name -- Last  XRAY                   First  ALICE             Initial  O
 Title    BUYER                         Company  OUTDOOR WORLD
 Street   12 EASTWOOD PLAZA         City  NORBROOK        State  ME  Zip  22222
 Purchase Codes -- 1          2          3
 Last Buy  1 /1 /80  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 04/08/83
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type N, because I want to look at the next record.

TYPE:  N
AND THE SYSTEM WILL: Locate and display the next record in the current 
index.

Q&A 1-17: What will happen if you use the SKIP command and the current record is 
the last record in the file?

Comment: Next and Previous records are defined logically according to the 
active index, rather than physically.

SCREEN 1-18: Display the next record in the current index
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
               >> Customer Information System File Maintenance <<
                 Today's Date:02/06/87     Record          6 of        7

 Name -- Last  FARMER                 First  BEN               Initial  Y
 Title    FIELD REPRESENTATIVE          Company  ROCHE BIKE WORKS
 Street   4444 5TH STREET           City  NOTHINGHAM      State  MA  Zip  33334
 Purchase Codes -- 1  99999   2  88888   3  77777
 Last Buy  01/01/85  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 02/03/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: NAME
                    *** NEXT ACTION TO PERFORM
\--------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type K, because I want to change the index key.

TYPE:  K
AND THE SYSTEM WILL: Display the key options.

Q&A 1-18: Which option would you select if you want to change the 
order of the file?

Comment:  Find the item "KEY" in the right hand bottom corner of 
the screen.  As you can see, the current index key is "NAME".
Always check this display before choosing any of the options to make sure 
that the correct index is in effect.

SCREEN 1-19: Display the key options
/--------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
               >> Customer Information System File Maintenance <<
                 Today's Date:02/06/87     Record          6 of        7

 Name -- Last  FARMER                 First  BEN               Initial  Y
 Title    FIELD REPRESENTATIVE          Company  ROCHE BIKE WORKS
 Street   4444 5TH STREET           City  NOTHINGHAM      State  MA  Zip  33334
 Purchase Codes -- 1  99999   2  88888   3  77777
 Last Buy  01/01/85  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 02/03/87
--------------------------------------------------------------------------------
          A. NAME B. COMPANY C. ZIP
          Press letter of desired key
\--------------------------------------------------------------------------/

Look at the screen, and find the "index selections at the bottom of the 
screen".
To me, it shows that the computer (defaults and/or) expects me to
type A, B or C.
Next, I want to type C, because I want to index the file by zip.

TYPE:  C
AND THE SYSTEM WILL: Change the index key.

Q&A 1-19: Why would you change the index key?

SCREEN 1-20: Change the index key
/-----------------------------------------------------------------------------\                      SMITH'S BIKEWORKS INFORMATION SYSTEM
               >> Customer Information System File Maintenance <<
                 Today's Date:02/06/87     Record          6 of        7

 Name -- Last  FARMER                 First  BEN               Initial  Y
 Title    FIELD REPRESENTATIVE          Company  ROCHE BIKE WORKS
 Street   4444 5TH STREET           City  NOTHINGHAM      State  MA  Zip  33334
 Purchase Codes -- 1  99999   2  88888   3  77777
 Last Buy  01/01/85  Value This Year       0.00  Value Last Year       0.00
 Last Updated : 02/03/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ZIP 
                        *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type M, because I want to return to the CIS menu.

TYPE:  M
AND THE SYSTEM WILL: Display the Customer Information System menu.

Q&A 1-20: What choice do you select to return to the CIS menu from the maintenance 
function?

Comment: Throughout the system, "M" is designated as the return key from 
all submenus.

1.3.2. PRINT CUSTOMER REPORT
This option provides a report listing of the customer file.



SCREEN 1-21: Display the Customer Information System Menu
/-----------------------------------------------------------------------------\                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Customer Information System <<

                    A. Customer File MAINTENANCE
                    B. Print CUSTOMER REPORT
                    C. Print MAILING LABELS
                    D. Generate FORM LETTER File
                    E. CUSTOMER File CLEAN UP
                    F. Move PURCHASE AMOUNTS Back a Year
                    G. Return to SYSTEM MENU

                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to G.
Next, I  want  to type B, because I want to print the customer report.

TYPE:  B
AND THE SYSTEM WILL: Display the screen to allow user to set up report 
ranges.

Q&A 1-21: Can you list only a certain range of customers in the report function?

Comment: Presently, there is only one file and one report format in the 
customer information system. Therefore, these defaults must be accepted.

SCREEN 1-22: Set up report ranges 
/-----------------------------------------------------------------------------\                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                 >> Customer Information System File Listing <<

                             Today's Date: 02/03/87

 Beginning LAST NAME to Include in Report
 Ending LAST NAME to Include in Report     zzzzzzzzzzzzzzzzzzzz
 Range of ZIP CODES to Include in Report            0  to       99999
 Run Report From The Following FILE  CUSTOMER
 Ordered by the Following INDEX      NAME
 Using the REPORT FORMAT Named       CUSTLIST
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the first highlighted entry 
box".
To me, it shows that the computer expects me to enter the last name to 
begin printing with.
Next, I want to type ALBERTI and press return, because I want to 
print a report beginning with this customer's record.

TYPE:  ALBERTI
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Accept the entry and proceed to the next item.

Q&A 1-22: Can you list the entire file?

Comment: You can type in new values to specify the beginning and end of the 
desired range of records to be included in the report or just press RETURN 
to accept the default values displayed.
The default includes all records in the report and uses the NAME index. You 
can change the index to ZIP or COMPANY. Blank the index field to obtain a
listing of the file as it exists on disk.
Continue specifying your options so as to obtain a list of records from 
ALBERTI to MUSKAT inclusive ordered by company:

TYPE: MUSKAT
PRESS: RETURN
PRESS: RETURN
PRESS: RETURN
PRESS: RETURN
TYPE: COMPANY
PRESS: RETURN
PRESS: RETURN

Q&A 1-23: Can you list the file in order of zip codes?

Comment: Enter 'M' in the last field to abort the report program.
Any other value causes the report to be printed.
Be sure that printer is set up with paper positioned at the top of a       
form before pressing a value to begin printing. Printer must be on.

TYPE: P

1.3.3. PRINTING MAILING LABELS
This option allows for the printing of mailing labels consisting of
customers' names and addresses.

SCREEN 1-23: Customer Information System
/-----------------------------------------------------------------------------\                    
                  >> Customer Information System <<

                    A. Customer File MAINTENANCE
                    B. Print CUSTOMER REPORT
                    C. Print MAILING LABELS
                    D. Generate FORM LETTER File
                    E. CUSTOMER File CLEAN UP
                    F. Move PURCHASE AMOUNTS Back a Year
                    G. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to G.
Next, I want to type C, because I want to print mailing labels.

TYPE: C
AND THE SYSTEM WILL:  Display the labels input screen.

Q&A 1-24: What does the Print mailing labels option do?

SCREEN 1-24: Display the labels input screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Customer Information System Mailing Labels <<

 Beginning LAST NAME to Include in Labels
 Ending LAST NAME to Include in Labels     zzzzzzzzzzzzzzzzzzzz
 Range of ZIP CODES to Include in Labels            0  to       99999
 Run Labels From The Following FILE  CUSTOMER
 Ordered by the Following INDEX      ZIP
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT LABEL DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE LABELS =>

\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the highlighted entry box".
To me, it shows that the computer expects me to enter the last name to 
start printing with.
Next, I want to press PgDn, because I do not want to specify any ranges.

PRINTER MUST BE ON
PRESS:  [PgDn]  Page Down key
AND THE SYSTEM WILL: Accept all defaults, print the labels, and return to 
the CIS menu.

Q&A 1-25: What is the default printing order for labels?

Comment: You can type in new values to specify the beginning and end of the 
desired range of records to be included in the labels or just press RETURN 
to accept the default values displayed.

The default includes all records in the report and uses the ZIP index. You 
can change the index to NAME or COMPANY. Blank the index field to obtain a 
listing of the file as it exists on disk.

1.3.4. GENERATE FORM LETTER
This option displays the screen for generating the file to produce a form
letter.

SCREEN 1-25: Display the labels input screen
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Customer Information System <<

                    A. Customer File MAINTENANCE
                    B. Print CUSTOMER REPORT
                    C. Print MAILING LABELS
                    D. Generate FORM LETTER File
                    E. CUSTOMER File CLEAN UP
                    F. Move PURCHASE AMOUNTS Back a Year
                    G. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer expects me to enter a choice from A to G.
Next,  I want to type D, because I want to generate a form letter 
file.

TYPE:  D
AND THE SYSTEM WILL: Display the input screen for Generating the file.

Comment: This option creates a file called NAMESLIST.MRG containing 
customers' names and addresses. This file can be used as a data file during 
MailMerge to insert the names and addresses in form letters. 

SCREEN 1-26: Display the input screen for generating the file
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                 >> Customer Information System Form Letters <<
                             Today's Date: 02/03/87

 Beginning LAST NAME to Include in List  
 Ending LAST NAME to Include in List     zzzzzzzzzzzzzzzzzzzz
 Range of ZIP CODES to Include in List            0    to       99999
 Run List From The Following FILE  CUSTOMER
 Ordered by the Following INDEX    ZIP
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT VALUE IS O.K. PRESS
 'M' TO RETURN TO MENU, ANY OTHER KEY TO PRODUCE NAMELIST.MRG FILE =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor".
To me, it shows that the computer (defaults and/or) expects me to
enter a last name.
Next, I want to press PgDn, because I wish to accept the defaults.

PRESS:   [PgDn]  Page Down key 
AND THE SYSTEM WILL: Accept all the default values, generate the file, and 
return to the CIS menu.

Q&A 1-26: What file does the form letter produce?

Comment: You can type in new values to specify the beginning and end of the 
desired range of records to be included in the form letter file or just 
press RETURN to accept the default values displayed.
The default includes all records in the report and uses the ZIP index. You 
can change the index to NAME or COMPANY. Blank the index field to obtain a 
listing of the file as it exists on disk.

1.3.5. CUSTOMER FILE CLEANUP
This option allows the user to remove records flagged for deletion permanently
from the customer file.





SCREEN 1-27: Return to the CIS menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Customer Information System <<

                    A. Customer File MAINTENANCE
                    B. Print CUSTOMER REPORT
                    C. Print MAILING LABELS
                    D. Generate FORM LETTER File
                    E. CUSTOMER File CLEAN UP
                    F. Move PURCHASE AMOUNTS Back a Year
                    G. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer expects me to enter a choice from A to G.
Next,  I want to type E,  because I want to clean up the CUSTOMER 
file.

TYPE:  E
AND THE SYSTEM WILL:  Display the file clean up screen.

Q&A 1-27: What does the file clean up option do?

SCREEN 1-28: File Clean UP       
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Customer Information System File Clean Up <<

                             Today's Date: 02/03/87

      THIS PROGRAM PERMANENTLY REMOVES RECORDS  FLAGGED FOR DELETION FROM THE
      CUSTOMER FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
press any key or type "M".
Next, I want to press return, because I want to clean up the file. 

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Begin the packing process.

Q&A 1-28: Can you recall your records after file clean up?

1.3.6. MOVE PURCHASE AMOUNTS BACK ONE YEAR
This option moves this year's sales amount for each customer to the
previous year value, then sets the current year variable to zero.

SCREEN 1-29: CIS Menu   
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM

                    A. Customer File MAINTENANCE
                    B. Print CUSTOMER REPORT
                    C. Print MAILING LABELS
                    D. Generate FORM LETTER File
                    E. CUSTOMER File CLEAN UP
                    F. Move PURCHASE AMOUNTS Back a Year
                    G. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer expects me to enter a choice from A to G.
Next, I want to type F, because I want to close this year's account and 
start a new year.

TYPE:  F
AND THE SYSTEM WILL:  Display the screen for moving the purchasing amounts 
back one year.

Q&A 1-29: What does the Move PURCHASE AMOUNTS option do?

Comment: This option should be used to annually update sales amounts to keep
them current.
Select this option at the end of each calendar year. As the program now
stands, there is no way to prevent running the update more than once a
year.

SCREEN 1-30: Moving the purchasing amounts back one year
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Customer Information System Purchase Update <<
                             Today's Date: 02/03/87

 THIS PROGRAM MOVES THIS YEAR'S PURCHASE AMOUNT TO PREVIOUS YEAR VALUE, THEN
 CLEARS AMOUNT. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS PROGRAM =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
press any key or type "M".
Next, I want to press return, because I want to start a new accounting 
period.

PRESS: [<-'] Enter / Return key
AND THE SYSTEM WILL: Move the purchasing amounts back one year and clear
the current amounts.

Q&A 1-30: What do you do if you do not wish to clear the accounts now?

1.3.7. RETURNING TO SYSMENU
This option returns you to the system activity menu.





SCREEN 1-31: Clear the correct amounts
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Customer Information System <<
     
                    A. Customer File MAINTENANCE
                    B. Print CUSTOMER REPORT
                    C. Print MAILING LABELS
                    D. Generate FORM LETTER File
                    E. CUSTOMER File CLEAN UP
                    F. Move PURCHASE AMOUNTS Back a Year
                    G. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to G.
Next, I want to type G, because I want to return to the system menu.

TYPE:  G
AND THE SYSTEM WILL:  Display the system activity menu.

Q&A 1-31: How do you return to the system activity menu?

SCREEN 1-32: Display the system activity menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<

                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor".
To me, it shows that the computer expects me to enter a choice from A to F.
Next, I want to type F, because I want to return to dbase.

TYPE:  F
AND THE SYSTEM WILL:  Return to the dbase dot prompt.

Q&A 1-32: What will happen if you enter a letter that doesn't match one 
of the options.

SCREEN 1-33: Return to the dbase dot prompt
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<

                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option  F


(DEMO) .
\-----------------------------------------------------------------------------/

Look at the screen, and find the "(DEMO) .".
To me, it shows that the computer (defaults and/or) expects me to
type a dbase command.
Next, I want to type QUIT and press return, because I want to exit dbase.

TYPE:  QUIT
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Exit dbase and return to A>.

Q&A 1-33: What will happen if you don't type QUIT?


































```
{% endraw %}

## CHAP2.TXT

{% raw %}
```

2. THE HUMAN RESOURCE MANAGEMENT SYSTEM

 2.1. STARTING UP
  Loading up dbase.

 SCREEN 2-1: STARTING UP
/-----------------------------------------------------------------------------\
A>




\-----------------------------------------------------------------------------/

Look at the screen, and find the "A>.
To me, it shows that the computer (defaults and/or) expects me to
insert Disk 1 of the Dbase III plus program in drive "A" and the Smith 
Bikeworks program diskette in drive "B".
Next, I want to type Dbase and press return, because I want to load Dbase.

INSERT: Disk 1 of the Dbase III plus program in drive A
INSERT: Smith's Bikeworks program diskette in drive B

TYPE:  DBASE
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Load dbase.

SCREEN 2-2: Load dbase 
/-----------------------------------------------------------------------------\
ZDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD?
3                dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                  3
3     Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.       3
3             dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate               3
3                       are trademarks of Ashton-Tate                         3
3                                                                             3
3      You may use the dBASE III PLUS software and  printed materials in      3
3      the dBASE III PLUS software package under the terms  of the dBASE      3
3      III  PLUS  Software  License Agreement.   In summary, Ashton-Tate      3
3      grants you a paid-up,  non-transferable,  personal license to use      3
3      dBASE III PLUS on one  microcomputer or workstation.   You do not      3
3      become the owner of  the package,  nor do  you have  the right to      3
3      copy or alter the software or printed materials.  You are legally      3
3      accountable  for any violation of  the  License  Agreement  or of      3
3      copyright, trademark, or trade secret laws.                            3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
\-----------------------------------------------------------------------------/

Look at the screen, and find the message below the copyright warning.
To me, it shows that the computer expects me to insert the second disk .
Next, I want to insert the second disk and press return, because I want to 
continue loading Dbase.


INSERT: Disk 2 of the Dbase III plus program in drive A
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Continue loading Dbase and display the Dbase prompt.

Q&A 2-1: Why must a second disk be inserted?

SCREEN 2-3: Display the dBASE prompt 
/-----------------------------------------------------------------------------\
ZDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD?
3              dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                    3
3     Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.       3
3             dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate               3
3                       are trademarks of Ashton-Tate                         3
3                                                                             3
3      You may use the dBASE III PLUS software and  printed materials in      
3      the dBASE III PLUS software package under the terms  of the dBASE      3
3      III  PLUS  Software  License Agreement.   In summary, Ashton-Tate      3
3      grants you a paid-up,  non-transferable,  personal license to use      3
       dBASE III PLUS on one  microcomputer or workstation.   You do not      3
       become the owner of  the package,  nor do  you have  the right to      3
       copy or alter the software or printed materials.  You are legally      3
       accountable  for any violation of  the  License  Agreement  or of      3
       copyright, trademark, or trade secret laws.                            3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.


(DEMO) .
\-----------------------------------------------------------------------------/

Look at the screen, and find the "(DEMO) . prompt".
To me, it shows that the computer expects me to enter a dbase command.
Next, I want to type DO SYSMENU and press return, because I want to start 
up the Smith's Bikework system.

TYPE:  DO SYSMENU
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Execute the SYSMENU program.

Q&A 2-2: How do you start up the Smith's Bikeworks system?

Comment: If you use a full blown version of Dbase III plus, you will not 
see the word DEMO in front of the dot prompt.
 
 2.2. SYSMENU
 The system menu controls entry into the Smith's Bikeworks subsystems.

SCREEN 2-4: Execute the SYSMENU program                    
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                                 <<ACTIVITY MENU>>

                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "Activity Menu".
To me, it shows that the computer expects me to enter a choice from A to F.
Next, I want to type B, because I want to execute the Human Resource 
Management subsystem program.

TYPE:  B
AND THE SYSTEM WILL: Display the Human Resource Management system main 
menu.

Q&A 2-3: How would you load the HRM system?

Comment: The Activity Menu controls entry into the Smith's Bikeworks 
subsystems. It is maintained as part of the Customer Information System.

 2.3. THE HUMAN RESOURCE MANAGEMENT SYSTEM MENU
 This menu displays all the options of the human resource management system.

2.3.1. THE MAINTENANCE OPTIONS
The first two options allow users to maintain files used in the human resouce
system.

SCREEN 2-5: Display the Human Resource Management system main menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Human Resources Management System <<

                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer expects me to enter a choice from A to H.
Next, I want to type A, because I want to enter the Personnel file 
maintenance.

TYPE:  A
AND THE SYSTEM WILL: Load the maintenance program - HRMNT.PRG.

Q&A 2-4: What does the Personnel file contain?

Q&A 2-5: What are the two .dbf files this system maintains?

Comment: Personnel File Maintenance allows users to add, change, delete, 
and recall records in the PERSONNL file.  It also makes it possible to 
reorder the file.

2.3.1.1. PERSONNEL
The personnel file maintenance.

SCREEN 2-6: Load the maintenance program - HRMNT.PRG
/-----------------------------------------------------------------------------\                         SMITH'S BIKEWORKS INFORMATION SYSTEM
         >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          1 of        2

 EMPLOYEE ?  Y                          SSAN  111111111
 Name --Last  JONES                   First  SAM               Initial  C

 Street  101 EAST MAIN              City  SMITHERS        State  SC  Zip  12222
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date    /  /
 Hourly ?  N  Rate/Salary   500.00  Overtime Factor  1.00  Exemptions   4
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/03/87
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "submenu of options at the bottom 
of the screen".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type "F", because I want to <F>ind a record.

TYPE:  F
AND THE SYSTEM WILL:  Display the find screen with an entry field 
containing the key value from the current record.

Q&A 2-6: Why is the key value of the current record displayed in the entry area?

Comment: The submenu of options at the bottom of the maintenance screen 
controls operation of HRMNT.PRG. An option is requested by pressing the 
letter key associated with the option - the letter within the < >.
 
SCREEN 2-7: Key value from the current record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          1 of        2

 EMPLOYEE ?  Y                          SSAN  111111111
 Name --Last  JONES                   First  SAM               Initial  C
 Street  101 EAST MAIN              City  SMITHERS        State  SC  Zip  12222
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date    /  /
 Hourly ?  N  Rate/Salary   500.00  Overtime Factor  1.00  Exemptions   4
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/03/87
-------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the highlighted entry box".
To me, it shows that the computer (defaults and/or) expects me to
press Ctrl-Y.
Next, I want to press Ctrl-Y, because I want to clear the reverse video 
area.

HOLD DOWN: [Ctrl]
AND PRESS: Y
AND THE SYSTEM WILL:  Clear the entry area.

Q&A 2-7: Why press Ctrl-Y?

SCREEN 2-8: Clear the entry area
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          1 of        2

 EMPLOYEE ?  Y                          SSAN  111111111
 Name --Last  JONES                   First  SAM               Initial  C
 Street  101 EAST MAIN              City  SMITHERS        State  SC  Zip  12222
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date    /  /
 Hourly ?  N  Rate/Salary   500.00  Overtime Factor  1.00  Exemptions   4
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/03/87
-------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the reverse video area".
To me, it shows that the computer expects me to enter a last name.
Next, I want to type PETERS and press return, because I want to look for an 
employee with that last name.

TYPE: PETERS    
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Search for an employee with that last name.

Comment: The name must be entered exactly as it appears in the file. 
Attention must be paid to lower and upper case.





SCREEN 2-9: Search for an employee with that last name
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          2 of        2

 EMPLOYEE ?  Y                          SSAN  222222222
 Name --Last  PETERS                  First  PETER             Initial  A
 Street  11 EAST APT 4              City  NEWTOWN         State  GA  Zip  23233
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  S    Birth Date  08/16/50
 Hourly ?  F  Rate/Salary     7.00  Overtime Factor  1.50  Exemptions   3
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 10/02/86
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME

                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/
Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type "A", because I want to <A>dd a record.

TYPE:  A
AND THE SYSTEM WILL: Display a blank record and allow you to enter the 
field values.

Q&A 2-8: What Dbase command allows a new record to be added to the database?

Comment: Place the data for the new record at the cursor starting at the 
top of the screen. Move among fields using the cursor control keys. Press 
RETURN to advance to the next field. 
Do not press RETURN after an entry that fills the entire field.

SCREEN 2-10: Allow you to enter the field values
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3

 EMPLOYEE ?  ?                          SSAN
 Name --Last                          First                    Initial
 Street                             City                  State      Zip
 Education -- Grades          College        Phys Limits
 Sex      Marital Status       Birth Date    /  /
 Hourly ?  ?  Rate/Salary      .    Overtime Factor   .    Exemptions
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
-------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item EMPLOYEE".
To me, it shows that the computer expects me to enter Y or N.
Next, I want to type Y because the new information concerns an employee.

TYPE:  Y
AND THE SYSTEM WILL:  Accept the entry and proceed to the next item.

Q&A 2-9: What should you do if the current addition is not an employee?

Continue entering the record:

TYPE:  333333333
TYPE:  ALBERTI
PRESS:  [<-']  Enter/Return key
TYPE:  FRAN
PRESS:  [<-']  Enter/Return key 
TYPE:  A
TYPE:    8065 S.W 107 avenue #211
PRESS:  [<-']  Enter/Return key
TYPE:    MIAMI
PRESS:  [<-']  Enter/Return key 
TYPE:  FL
TYPE:  33173
TYPE:   A 
PRESS:  [<-']  Enter/Return key
TYPE:   UM
PRESS:  [<-']  Enter/Return key
TYPE:   NONE
PRESS:  [<-']  Enter/Return key
TYPE:  M
TYPE:  M
TYPE:  010158
TYPE:   N
TYPE:  1000
PRESS:  [<-']  Enter/Return key
TYPE:  2
PRESS:  [<-']  Enter/Return key 
TYPE:  5
PRESS:  [<-']  Enter/Return key 
PRESS:  [<-']  Enter/Return key 
PRESS:  [<-']  Enter/Return key 
PRESS:  [<-']  Enter/Return key 

SCREEN 2-11: Proceed to the next item
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3
 EMPLOYEE ?  Y                          SSAN    333333333
 Name --Last  ALBERTI                First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
-------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the box after QUIT".
To me, it shows that the computer expects me to enter a C to Continue 
adding or any other key to QUIT the add mode.
Next, I want to press return, because I do not wish to add any more 
records.

PRESS:   [<-']    Enter/Return key
AND THE SYSTEM WILL:  Update the PERSONNL file and redisplay the 
maintenance submenu.

Q&A 2-10: How would you add another record?

SCREEN 2-12: Redisplay the maintenance submenu
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM

           >> Human Resources Management System File Maintenance <<

 EMPLOYEE ?  Y                          SSAN   333333333
 Name --Last  ALBERTI                First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated :   /  /
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type D, because I want to <D>elete the current record.

TYPE:  D
AND THE SYSTEM WILL:  Flag the current record for deletion.

Q&A 2-11: Is the record permanently removed?

Comment: When a record has been flagged for deletion, the system displays 
the word "* DELETED *" in the upper left hand corner of the screen as an 
indication.


SCREEN 2-13: Flag the current record for deletion
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
 * DELETED *       Today's Date:02/05/87     Record          3 of        3

 EMPLOYEE ?  Y                          SSAN   333333333
 Name --Last  ALBERTI                First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/05/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type "D" again, because I want to recall the record.

TYPE:  D
AND THE SYSTEM WILL:  Remove the deletion flag.

Q&A 2-12: How would you delete a record that is not displayed?

Comment: Recall is possible at this stage because the record has not been 
removed from the disk.

 SCREEN 2-14: Remove the deletion flag
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3

 EMPLOYEE ?  Y                          SSAN  333333333
 Name --Last  ALBERTI                First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/05/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type "E", because I want to edit the displayed record.

TYPE:  E
AND THE SYSTEM WILL:  Display the edit screen.

Q&A 2-13: Which record does the edit work on?

Comment: You can change the data at the current cursor position. Use the 
arrow and backspace keys to move within a field or to go back to a previous 
field. Press RETURN to advance to the next field.
Leave a field unchanged by pressing the enter/return key only.

SCREEN 2-15: Display the edit screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3

 EMPLOYEE ?  Y                          SSAN   333333333
 Name --Last  ALBERTI                First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/05/87
      ******** PRESS ANY KEY TO FINISH EDIT AND RETURN TO SUBMENU
-------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item EMPLOYEE".
To me, it shows that the computer expects me to change or accept the 
current data.
Next, I wish to correct the last name.  Use cursor control key to move 
cursor to the last name field .

PRESS: DOWN ARROW KEY 
PRESS: DOWN ARROW KEY
TYPE:  ALBERTI
PRESS:  [PgDn] Page Down key
AND THE SYSTEM WILL:  Accept values displayed and redisplay the maintenance 
submenu.

Comment: Pressing PgDn accepts the entry and returns to the file 
maintenance screen without the user having to press return at every other 
item.

SCREEN 2-16: Redisplay the maintenance submenu
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3

 EMPLOYEE ?  Y                          SSAN  333333333
 Name --Last  ALBERTI                 First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/05/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type P, because I want to see the previous record.

TYPE:  P
AND THE SYSTEM WILL: Locate and display the previous record in the current 
index.

Q&A 2-14: How is the file indexed?

Comment: The previous record is the record that comes before the current 
one according to the logical order of the active index.

SCREEN 2-17: Display the previous record in the current index
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          2 of        3
 EMPLOYEE ?  Y                          SSAN  222222222
 Name --Last  PETERS                  First  PETER             Initial  A
 Street  11 EAST APT 4              City  NEWTOWN         State  GA  Zip  23233
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  S    Birth Date  08/16/50
 Hourly ?  F  Rate/Salary     7.00  Overtime Factor  1.50  Exemptions   3
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 10/02/86
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type N, because I want to see the next record.

TYPE:  N
AND THE SYSTEM WILL: Locate and display the next record in the current 
index.

Q&A 2-15: Is the record number sequential?

Comment: Next and Previous records are defined logically according to the 
active index, rather than physically.

SCREEN 2-18: Display the next record in the current index
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3

 EMPLOYEE ?  Y                          SSAN  333333333
 Name --Last  ALBERTI                 First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/05/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type K, because I want to change the index key.

TYPE:  K
AND THE SYSTEM WILL: Display the key options.

Q&A 2-16: How many indexes does the Personnel file have?

SCREEN 2-19: Display the key options
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3
 EMPLOYEE ?  Y                          SSAN   333333333
 Name --Last  ALBERTI                 First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/05/87
-------------------------------------------------------------------------------
          A. PNAME B. PSSAN
          Press letter of desired key
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the highlighted box".
To me, it shows that the computer expects me to type A or B.
Next, I want to type B, because I want to order the file by social 
security number.

TYPE:  B
AND THE SYSTEM WILL:  Change the logical order of the file.

Q&A 2-17: Why would you change the index key?

Comment: Find the item "KEY" in the right hand bottom corner of the screen. 
Notice that the current index key is PSSAN.
Always check this display before choosing any of the options to ensure that 
the correct index is in effect.

SCREEN 2-20: Change the logical order of the file
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3
 EMPLOYEE ?  Y                          SSAN  333333333
 Name --Last  ALBERTI                 First  FRAN              Initial  A
 Street  8065 S.W 107 avenue #211   City  MIAMI           State  FL  Zip  33173
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  M    Birth Date  01/01/58
 Hourly ?  N  Rate/Salary  1000.00  Overtime Factor  2.00  Exemptions   5
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 02/05/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PSSAN
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type P, because I want to see the previous record.

TYPE:  P
AND THE SYSTEM WILL:  Display the previous record.

Q&A 2-18: What previous record does the system look for now?

 SCREEN 2-21: Display the previous record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/05/87     Record          3 of        3

 EMPLOYEE ?  Y                          SSAN  2222222222
 Name --Last  PETERS                  First  FRAN              Initial  A
 Street  11 EAST APT 4              City  NEWTOWN       State  GA    Zip  23233
 Education -- Grades          College        Phys Limits
 Sex  M   Marital Status  S    Birth Date  08/16/50
 Hourly ?  N  Rate/Salary     7.00  Overtime Factor  1.50  Exemptions   3
 Year To Date -- Pay $       .     Withholding $       .    FICA $       .
 Last Updated : 10/02/86
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PSSAN
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word PERFORM.
To me, it shows that the computer expects me to enter the next command.
Next, I want to type M, because I wish to return to the HRM main 
menu.

TYPE:  M
AND THE SYSTEM WILL: Exit the maintenance program and display the HRM 
main menu.

Q&A 2-19: How do you return to the HRM menu from the maintenance function?

2.3.1.2. EXPHIST FILE MAINTENANCE
Human Resources Management System File Maintenance

SCREEN 2-22: Display the HRM main menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Human Resources Management System <<
                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to H.
Next, I want to type B, because I want to see the employment 
history file maintenance screen.

TYPE:  B
AND THE SYSTEM WILL: Load the maintenance program which is named 
EXPMNT.PRG.

Q&A 2-20: What is the name of the employment history file?

Comment: The employment history file is related to the personnel file and 
contains job-history (experience) information about applicants and 
employees. 
Each record in the EXPHIST file is related to a record in the PERSONNL 
file, and several experience records may be linked to a single employee or 
applicant record.



SCREEN 2-23: Load the maintenance program named EXPMNT.PRG
/-----------------------------------------------------------------------------\                         SMITH'S BIKEWORKS INFORMATION SYSTEM
         >> Human Resources Management System File Maintenance <<
                 Today's Date:02/06/87     Record          2  of         3

 EMPLOYEE ?  Y                                              SSAN  222222222
 Name--Last   PETERS                First  PETER            Initial  A
 Street  11 EAST APT 4              City  NEWTOWN          State GA  Zip  23233
 Education                    College        Phys Limits
 Sex  M   Marital Status  S    Birth Date  08/16/50
 Hourly ?  F  Rate/Salary     7.00  Overtime Factor  1.50  Exemptions   3
 Year to Date -- Pay $    0.00     Withholding $    0.00    FICA $    0.00
 Work Code         Title  MANAGER                Start  08/15/55 End  08/16/84
 By SOUTHERN BELL         Strt                      City FT LAUDERDALE   St FL
 Last Updated : 10/02/86 10/02/86
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
  < prev, next linked record >     *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to enter <,  because I want to see the  employee's 
previous employment history record if there is more than one.

TYPE:  <
AND THE SYSTEM WILL: Display the employee's previous employment record.

Q&A 2-21: Can an employee have more than one record in the EXPHIST file?

SCREEN 2-24: Display the employee's previous employment record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/06/87     Record          2  of         3
 EMPLOYEE ?  Y                                              SSAN  222222222
 Name--Last   PETERS                First  PETER            Initial  A
 Street  11 EAST APT 4              City  NEWTOWN          State GA  Zip  23233
 Education                    College        Phys Limits
 Sex  M   Marital Status  S    Birth Date  08/16/50
 Hourly ?  F  Rate/Salary     7.00  Overtime Factor  1.50  Exemptions   3
 Year to Date -- Pay $    0.00     Withholding $    0.00    FICA $    0.00
 Work Code         Title  MANAGER                Start  08/15/55 End  08/16/84
 By SOUTHERN BELL         Strt                      City FT LAUDERDALE   St FL
 Last Updated : 10/02/86 10/02/86
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
  < prev, next linked record >     *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type  >, because I want to see the next employment record 
if there is more than one.

TYPE:  >
AND THE SYSTEM WILL:  Display the next record.

SCREEN 2-25: Display the next record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Human Resources Management System File Maintenance <<
                 Today's Date:02/06/87     Record          2  of         3

 EMPLOYEE ?  Y                                              SSAN  222222222
 Name--Last   PETERS                First  PETER            Initial  A
 Street  11 EAST APT 4              City  NEWTOWN          State GA  Zip  23233
 Education                    College        Phys Limits
 Sex  M   Marital Status  S    Birth Date  08/16/50
 Hourly ?  F  Rate/Salary     7.00  Overtime Factor  1.50  Exemptions   3
 Year to Date -- Pay $    0.00     Withholding $    0.00    FICA $    0.00
 Work Code         Title  MANAGER                Start  08/15/55 End  08/16/84
 By SOUTHERN BELL         Strt                      City FT LAUDERDALE   St FL
 Last Updated : 10/02/86 10/02/86
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PNAME
  < prev, next linked record >     *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type M, because I want to return to the HRM menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the HRM menu.

2.3.2. PRINT PERSONNEL REPORT
Prints a report from both the exphist and personnl files including all or a 
subset of the employees in the database.

SCREEN 2-26: Display the HRM menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Human Resources Management System <<
                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to H.
Next, I want to type C, because I want to print a Personnel report.

TYPE:  C
AND THE SYSTEM WILL:  Display the set up screen.

Q&A 2-22: Can you choose the order by which the report is printed?

Comment: You can type the name of the index file at the entry item asking 
which index is to be used. Blank this field if you want the file printed in 
the physical order.

SCREEN 2-27: Display the setup screen
/-----------------------------------------------------------------------------\                         SMITH'S BIKEWORKS INFORMATION SYSTEM
            >> Human Resources Management System File Listing <<
                             Today's Date: 02/05/87

 Beginning LAST NAME to Include in Report
 Ending LAST NAME to Include in Report     zzzzzzzzzzzzzzzzzzzz
 Include APPLICANTS in the Report ?  YES
 Run Report From The Following FILE  PERSONNL
 Ordered by the Following INDEX      PNAME
 Include EMPLOYMENT HISTORY in the Report ?  YES

 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the first highlighted box".
To me, it shows that the computer (defaults and/or) expects me to
enter a last name.
Next,  I want to type ALBERTI and press return, because I want to 
begin printing with this name.

TYPE:  ALBERTI
PRESS:  [<-']  Enter/Return key
TYPE:  PETERS
PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key

Q&A 2-23: Will the employment history also be listed?

 SCREEN 2-28: Human Resources Management System File Listing
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Human Resources Management System File Listing <<
                             Today's Date: 02/05/87
 Beginning LAST NAME to Include in Report  ALBERTI
 Ending LAST NAME to Include in Report     PETERSzzzzzzzzzzzzzz
 Include APPLICANTS in the Report ?  YES
 Run Report From The Following FILE  PERSONNL
 Ordered by the Following INDEX      PNAME
 Include EMPLOYMENT HISTORY in the Report ?  YES

 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the =>".
To me, it shows that the computer (defaults and/or) expects me to
type "M" to abort the report program or press any other key to complete 
printing.
Next, I want to type P, because I want to print the report.

PRINTER MUST BE ON

TYPE: P
AND THE SYSTEM WILL: Accept the entry and print the report.

Q&A 2-24: What will happen if you enter "M"?

2.3.3. PROCESS PAYROLL
This option prepares payroll transactions with operator input of 
withholding amount.

SCREEN 2-29: Print the report
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Human Resources Management System <<
                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the highlighted box".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to H.
Next, I want to type D, because I want to process payroll.

TYPE:  D
AND THE SYSTEM WILL: Display the process payroll screen.

Q&A 2-25: How many screens are there in the payroll processing function?





SCREEN 2-30: Display the process payroll screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
            >> Human Resources Management System Payroll Processing <<
                             Today's Date: 02/05/87

 Run Payroll From The FILE        PERSONNL        INDEX  PSSAN
 Payables Will be Output to PAYFILE
 Social Security -- Employee Rate           6.70  Employer Rate           6.70
 Maximum Earnings on Which Social Security is Paid       34200.00
 Unemployment Ins -- Fed Rate           0.70 State Rate           2.70
 Max Earnings for Unemployment Insurance        6000.00
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT PAYROLL DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS PAYROLL INPUT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the first highlighted box".
To me, it shows that the computer (defaults and/or) expects me to
enter a file name.
Next, I want to PgDn, because I want to accept the defaults.

PRESS:  [PgDn]  Page Down key
AND THE SYSTEM WILL:  Accept all the defaults and proceed to the second 
screen.

Q&A 2-26: Can you type a different file name?

Q&A 2-27: What is the other index possible?

Comment: You can make changes to the payroll description or just press 
RETURN to accept the defaults. PgDn accepts all the defaults and moves to 
the second screen.

SCREEN 2-31: Proceed to the second screen
/-----------------------------------------------------------------------------\
 Employee -- Name :ALBERTI,FRAN A                            SSAN :  333333333
 Hourly ? :.F.      Rate/Salary :1000.00     Overtime Factor :2.00
 Hours Worked (Hourly) -- Regular           0.00       Overtime           0.00
 Pay -- Regular $ 1000.00          Overtime $    0.01        Gross $ 1000.00
 Input Withholding Amount For 5 Exemptions M Marital Status               0.00

\-----------------------------------------------------------------------------/

Look at the screen and find the cursor at the withholding amount entry.

TYPE: 50
PRESS: RETURN

SCREEN 2-32: Display the process payroll screen
/-----------------------------------------------------------------------------\
 Employee -- Name :ALBERTI,FRAN A                            SSAN :  333333333
 Hourly ? :.F.      Rate/Salary :1000.00     Overtime Factor :2.00
 Hours Worked (Hourly) -- Regular           0.00       Overtime           0.00
 Pay -- Regular $ 1000.00          Overtime $    0.01        Gross $ 1000.00
 Input Withholding Amount For 5 Exemptions M Marital Status               0.00
 Social Security -- Employee  $    67.00      Employer  $    67.00
 Net Pay  $   933.00     Fed. Unempl. Ins.  $     7.00    State  $    27.01
 YTD --Pay  $  2000.01   Withholding  $     0.01   FICA  $   134.00

 PRESS 'R' TO RECORD PAYROLL DATA, 'M' TO RETURN TO MENU
 'S' TO SKIP. ANY OTHER KEY ALLOWS RE-ENTRY OF ALL DATA =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter R, M, S or any other key.
Next, I want to type S, because I want to skip this record.

TYPE:  S
AND THE SYSTEM WILL: Skip this record and proceed to the next record.

 SCREEN 2-33: Proceed to the next record
/-----------------------------------------------------------------------------\
 Employee -- Name :ALBERTI,FRAN A                            SSAN :  333333333
 Hourly ? :.F.      Rate/Salary :1000.00     Overtime Factor :2.00
 Hours Worked (Hourly) -- Regular           0.00       Overtime           0.00
 Pay -- Regular $ 1000.00          Overtime $    0.01        Gross $ 1000.00
 Input Withholding Amount For 5 Exemptions M Marital Status               0.00


\-----------------------------------------------------------------------------/

Look at the screen and find the cursor at the withholding amount entry.

PRESS: RETURN

SCREEN 2-34: Human Resources Management System Payroll Processing
/-----------------------------------------------------------------------------\
Employee -- Name :PETERS,PETER A                           SSAN :222222222
 Hourly ? :.F.      Rate/Salary :   7.00     Overtime Factor :1.50
 Hours Worked (Hourly) -- Regular           0.00       Overtime           0.00
 Pay -- Regular $    7.00          Overtime $    0.01        Gross $    7.00
 Input Withholding Amount For 3 Exemptions S Marital Status               0.00
 Social Security -- Employee  $     0.47      Employer  $     0.47
 Net Pay  $     6.54     Fed. Unempl. Ins.  $     0.05    State  $     0.19
 YTD --Pay  $    14.01   Withholding  $     0.01   FICA  $     0.94

 PRESS 'R' TO RECORD PAYROLL DATA, 'M' TO RETURN TO MENU
 'S' TO SKIP. ANY OTHER KEY ALLOWS RE-ENTRY OF ALL DATA =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter R, M, S pr any key.
Next,  I want to type M,  because because I want to return to the 
HRM menu.

TYPE:  M
AND THE SYSTEM WILL: Display the HRM menu.

Q&A 2-28: What will entering "R" do?

2.3.4. THE CLEANUPS
The next two options allow the user to permanently delete records flagged for
deletion in the maintenances.

SCREEN 2-35: Display the HRM menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Human Resources Management System <<

                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/
Look at the screen, and find the "cursor in the highlighted box".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to H.
Next,  I want to type E,  because I want to clean up the PERSONNL 
file.

TYPE:  E
AND THE SYSTEM WILL: Display the PERSONNL file clean up screen.

Q&A 2-29: What does the PERSONNL file clean up do?

2.3.4.1. PERSONNL
The personnl file cleanup.

 SCREEN 2-36: Display the Personnel file clean up screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
             >> Human Resources Management System File Clean Up <<
                             Today's Date: 02/05/87

 THIS PROGRAM PERMANENTLY REMOVES RECORDS FLAGGED FOR DELETION FROM THE
 EXPHIST FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter M to return to the HRM menu or any other key to start clean up.
Next, I want to press return, because I want to start clean up.

PRESS:  [<-'] Enter / Return key
AND THE SYSTEM WILL:  Begin packing.

Q&A 2-30: What is the purpose of the PACK command?

SCREEN 2-37: HRM Menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM

                     >> Human Resources Management System <<

                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU

                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to H.
Next, I want to type F, because clean up the EXPHIST file.

TYPE:  F
AND THE SYSTEM WILL:  Display the EXPHIST file clean up screen.

Q&A 2-31: What does the EXPERIENCE file CLEAN up accomplish?

2.3.4.2. EXPHIST
The employment history file cleanup.

SCREEN 2-38: Display the EXPHIST file clean up screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
             >> Human Resources Management System File Clean Up <<
                             Today's Date: 02/05/87

 THIS PROGRAM PERMANENTLY REMOVES RECORDS FLAGGED FOR DELETION FROM THE
 EXPHIST FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the =>".
To me, it shows that the computer (defaults and/or) expects me to
type M to return to the HRM menu or any other key to start clean up.
Next, I want to type M, because I do not wish to clean up the file.

TYPE:  M
AND THE SYSTEM WILL:  Skip the packing and display the HRM menu.

Q&A 2-32: Does clean up allow you to recall the records?

2.3.5. CLEAR YEAR TO DATE PAYROLL FIELDS
This option allows the user to clear payroll fields of current values and
initialize them to zero.

SCREEN 2-39: Display the HRM menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Human Resources Management System <<

                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU
                        Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to H.
Next,  I want to type G, because I wish to clear the Year to date 
payroll.

TYPE:  G
AND THE SYSTEM WILL: Display the screen for clearing the year to 
date payroll.

Q&A 2-33: What does the CLEAR Year-to Date Payroll Fields option do?

SCREEN 2-40: Clear the year to date payroll 
/-----------------------------------------------------------------------------\
                     SMITH'S BIKEWORKS INFORMATION SYSTEM
       >> Human Resource Management System Payroll Initialize <<
                        Today's Date: 02/05/87

  THIS PROGRAM CLEARS YEAR-TO-DATE FIELDS FOR ALL EMPLOYEES IN PERSONNEL
 FILE, 'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS PROGRAM =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter M to return to the menu or any other key to start clearing.
Next, I want to press return, because I want to start clearing.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Begin clearing the year to date fields.

2.3.6. RETURNING TO SYSTEM MENU

SCREEN 2-41: HRM Menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Human Resources Management System <<
                    A. PERSONNEL File Maintenance
                    B. EMPLOYMENT HISTORY File Maintenance
                    C. Print PERSONNEL REPORT
                    D. Process PAYROLL
                    E. PERSONNEL File CLEAN UP
                    F. EXPERIENCE File CLEAN UP
                    G. CLEAR Year-to-Date Payroll Fields
                    H. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to H.
Next, I want to type H, because I want to return to the system menu.

TYPE:  H
AND THE SYSTEM WILL:  Display the system menu.

 SCREEN 2-42: Display the system menu 
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<

                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a choice from A to F.
Next, I want to type F, because I wish to exit the Smith's Bikeworks 
system.

TYPE:  F
AND THE SYSTEM WILL: Return to the dot prompt.

Q&A 2-34: Where will the system return you to?

SCREEN 2-43: Return to the dot prompt  
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<

                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option

(DEMO).
\-----------------------------------------------------------------------------/

Look at the screen, and find the (DEMO) .
To me, it shows that the computer (defaults and/or) expects me to
enter a dbase command.
Next,  I  want to type QUIT and press return,  because I wish  to 
return to DOS.

TYPE:  QUIT
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return to DOS.


Q&A 2-35: Why should you type QUIT?

Comment: It is always a good habit to type QUIT because this updates all 
files properly and helps maintain data integrity.

SCREEN 2-44: *END RUN   dBASE III PLUS      
/-----------------------------------------------------------------------------\

**END RUN   dBASE III PLUS

A>

\-----------------------------------------------------------------------------/





























```
{% endraw %}

## CHAP3.TXT

{% raw %}
```
3. THE ACCOUNTING SYSTEM

3.1. STARTING UP

SCREEN 3-1: Starting dBASE
/-----------------------------------------------------------------------------\
A>
   
\-----------------------------------------------------------------------------/

Look at the screen, and find the "A>"
To me, it shows that the computer expects me to type a command.
Next, I want to type DBASE and then press return, because I wish to load 
dbase.

INSERT: Disk 1 of the dBASE III PLUS program in drive A
INSERT: Smith's Bikeworks program diskette in drive B

TYPE:  DBASE
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Load dbase.

Q&A 3-1: Why do you type DBASE at the A> prompt? 

SCREEN 3-2: Load dbase
/-----------------------------------------------------------------------------\
ZDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD?
3                 dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                 3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up,  non-transferable,  personal license to use     3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of  the package,  nor do  you have  the right to     3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable  for any violation of  the  License  Agreement  or of     3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "message at the bottom of the screen".
To me, it shows that the computer expects me to insert the second dbase disk.
Next, I want to put in disk 2 of dbase and press return, because I wish to 
load dbase.

INSERT: Disk 2 of the dBASE III PLUS program in drive A
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Continue to load dbase.

Q&A 3-2: Why do you need to insert a second disk?

SCREEN 3-3: Continue to load dbase
/-----------------------------------------------------------------------------\
3                 dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                 3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up,  non-transferable,  personal license to use     3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of  the package,  nor do  you have  the right to     3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable  for any violation of  the  License  Agreement  or of     3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
(DEMO) .
\-----------------------------------------------------------------------------/

Look at the screen, and find the "(DEMO) .".
To me, it shows that the computer (defaults and/or) expects me to
enter a dbase command.
Next, I want to execute the sysmenu program because I want to get
into the accounting system.

TYPE:  DO SYSMENU
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Execute the program SYSMENU.

Q&A 3-3: Why do you type DO SYSMENU?

Comment: If you use a full blown version of Dbase III plus, you will not 
see the word DEMO in front of the dot prompt.

3.2. SYSMENU
The system menu.

SCREEN 3-4: Activity Menu                               
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<
                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer expects me to enter a letter matching one 
of the options.
Next, I want to type C, because I want to go to the accounting system.

TYPE:  C
AND THE SYSTEM WILL: Load the accounting subsystem's first program.

Q&A 3-4: How do you load the Accounting System?

Comment: The Activity Menu controls entry into the Smith's Bikeworks 
subsystems. It is maintained as part of the Customer Information System.

3.3. THE ACCOUNTING MENU
This menu displays all the options in the accounting system.

SCREEN 3-5: Accounting Subsystem's Menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer expects me to enter a letter matching one 
of the options.
Next, I want to type "A", because I wish to perform the account chart file 
maintenance.

TYPE:  A
AND THE SYSTEM WILL: Load the account chart file maintenance program.

Q&A 3-5: What does the "Account Chart file maintenance" option do?

Comment: If an action is selected which is not one of the program's legal 
options, the screen will be erased, the menu redisplayed, and a new 
operator input accepted.
An option is provided in each of the accounting system command files to 
return to the ACCOUNTING menu without doing any processing. 

3.3.1. THE FILE MAINTENANCE OPTIONS
The first 3 choices allow users to add, change, or delete records in the 
accounting system files.

3.3.1.1. ACCTCHRT
This is the chart of accounts file maintenance.

SCREEN 3-6: Load the account chart file maintenance program
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record          1 of       25
 Account Number    1.00   Description  RAW MATERIALS, COMPONENTS  Acct Type  e
 January          0.00      May              0.00        September        0.00
 February         0.00      June             0.00        October          0.00
 March            0.00      July             0.00        November         0.00
 April            0.00      August           0.00        December         0.00
                          Year to Date Total         0.00
 Last Updated : 02/05/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter a letter matching one 
of the letters enclosed in the pointed brackets.
Next, I want to enter F, because I want to try to Find a record in the file.

TYPE:  F
AND THE SYSTEM WILL: Display the find screen with an entry field containing 
the key value for the current record.

Comment: The submenu of options at the bottom of the screen controls 
operation of this program. An option is requested by pressing the letter 
key associated with that option.

SCREEN 3-7: Entry field containing the key value 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record          1 of       25
 Account Number    1.00   Description  RAW MATERIALS, COMPONENTS  Acct Type  e
 January          0.00      May              0.00        September        0.00
 February         0.00      June             0.00        October          0.00
 March            0.00      July             0.00        November         0.00
 April            0.00      August           0.00        December         0.00
                          Year to Date Total         0.00
 Last Updated : 02/05/87
--------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR           1.00
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the reverse video area at the 
bottom of the screen".
To me, it shows that the computer expects me to enter an account number that 
I want to look for.
Next, I want to type Ctrl Y, to clear the entry before typing the search 
entry.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
AND THE SYSTEM WILL: Clear the account number displayed at the bottom of the 
screen.

Q&A 3-6: How can you clear the account number displayed?

Comment: Clearing the entry area is a good habit to avoid confusion.

SCREEN 3-8: Clear the account number 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record          4 of       25
Account Number    4.00   Description  AUTOMOBILE EXPENSE         Acct Type  E
 January          0.00      May              0.00        September        0.00
 February         0.00      June             0.00        October          0.00
 March            0.00      July             0.00        November         0.00
 April            0.00      August           0.00        December         0.00
                          Year to Date Total         0.00
 Last Updated : 01/01/80
------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR            .
\-----------------------------------------------------------------------------/

Look at the screen,  and find the "cursor in the  reverse  video 
area at the bottom of the screen".
To me, it shows that the computer expects me to enter an account number.
Next, I want to enter 12, because I want to look for a record with the account 
number 12.

TYPE:  12
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Search for the account number 12.

Q&A 3-7: What will happen after you enter "12" for the account number ?

Comment: The search value is dependent on which index file is open. The 
ACCOUNT index is currently open so the search will be conducted on account 
number.

SCREEN 3-9: Search for the account number 12
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record          8 of       25
 Account Number   12.00   Description  INSURANCE                  Acct Type  E
 January          0.00      May              0.00        September        0.00
 February         0.00      June             0.00        October          0.00
 March            0.00      July             0.00        November         0.00
 April            0.00      August           0.00        December         0.00
                          Year to Date Total         0.00
 Last Updated : 01/01/80
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type A, because I want to add a record.

TYPE:  A
AND THE SYSTEM WILL:  Display the screen to add a record.

Q&A 3-8: How do you add a record to the database?

Comment: Place the data for the new record at the cursor position starting 
at the top of the screen. Move among fields using the cursor control keys. 
Press RETURN to advance to the next field.
Do not press RETURN after an entry that fills the entire field.

SCREEN 3-10: Display the screen to add a record
/-----------------------------------------------------------------------------\
                         SMITH'S BIKEWORKS INFORMATION SYSTEM
         >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         26 of       26
 Account Number     .     Description                             Acct Type
 January           .        May               .          September         .
 February          .        June              .          October           .
 March             .        July              .          November          .
 April             .        August            .          December          .
                          Year to Date Total          .
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item Account 
Number".
To me, it shows that the computer expects me to enter the new account number.
Next, I want to enter the new account number 200.00 and press return, because  
I am adding the new record with account number 200.00.

TYPE:  200
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Accept the value and go on to the next.

Q&A 3-9: What do you type at the cursor next to the item Account Number?
Continue entering the record:

TYPE:  TRAINING
PRESS:  [<-']  Enter/Return key
TYPE:  E
TYPE:  20
PRESS:  [<-']  Enter/Return key
TYPE:  30
PRESS:  [<-']  Enter/Return key
TYPE:  50
PRESS:  [<-']  Enter/Return key
TYPE:  40
PRESS: [<-']  Enter/Return key
TYPE:  50
PRESS:  [<-']  Enter/Return key
TYPE:  60
PRESS:  [<-']  Enter/Return key
TYPE:  40
PRESS:  [<-']  Enter/Return key
TYPE:  90
PRESS:  [<-']  Enter/Return key
TYPE:  30
PRESS:  [<-']  Enter/Return key
TYPE:  60
PRESS:  [<-']  Enter/Return key
TYPE:  100
PRESS:  [<-']  Enter/Return key
TYPE:  110
PRESS:  [<-']  Enter/Return key
TYPE:  680
PRESS: [<-']  Enter/Return key

SCREEN 3-11: Accept the value and go on to the next
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         26 of       26
 Account Number  200.00   Description  TRAINING                   Acct Type  E
 January         20.00      May             50.00        September       30.00
 February        30.00      June            60.00        October         60.00
 March           50.00      July            40.00        November       100.00
 April           40.00      August          90.00        December       110.00
                          Year to Date Total       680.00
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor".
To me, it shows that the computer expects me to either type C or anything else 
to quit.  Next, I want to just press return, because I want to quit.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Update the account chart file and return to the 
maintenance screen to accept the next command.


Q&A 3-10: How can you continue to add another new record?

SCREEN 3-12: Return to the maintenance screen 
/-----------------------------------------------------------------------------\
                    SMITH'S BIKEWORKS INFORMATION SYSTEM
         >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         26 of       26
 Account Number  200.00   Description  TRAINING                   Acct Type  E
 January         20.00      May             50.00        September       30.00
 February        30.00      June            60.00        October         60.00
 March           50.00      July            40.00        November       100.00
 April           40.00      August          90.00        December       110.00
                          Year to Date Total       680.00
 Last Updated :   /  /
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter a command.
Next, I want to type D, because I want to flag the currently displayed 
record for deletion.

TYPE:  D
AND THE SYSTEM WILL:  Flag the current record for deletion.

Q&A 3-11: Does the DELETE command delete the record permanently?

Comment: When a record has been flagged for deletion, the system displays 
the word "DELETED" in the upper left hand corner of the screen as an 
indication.

SCREEN 3-13: Flag the current record for deletion
/-----------------------------------------------------------------------------\
           >> Accounting System Chart of Accounts File Maintenance <<
 * DELETED *     Today's Date:02/08/87     Record         26 of       26
 Account Number  200.00   Description  TRAINING                   Acct Type  E
 January         20.00      May             50.00        September       30.00
 February        30.00      June            60.00        October         60.00
 March           50.00      July            40.00        November       100.00
 April           40.00      August          90.00        December       110.00
                          Year to Date Total       680.00
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type D again, because I want to recall the deleted record. 

TYPE:  D
AND THE SYSTEM WILL:  Remove the deletion flag.

Q&A 3-12: What does pressing "D" a second time do?

Comment: Recall is possible at this stage because the record has not been 
removed from the disk.

SCREEN 3-14: Remove the deletion flag
/----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         26 of       26
 Account Number  200.00   Description  TRAINING                   Acct Type  E
 January         20.00      May             50.00        September       30.00
 February        30.00      June            60.00        October         60.00
 March           50.00      July            40.00        November       100.00
 April           40.00      August          90.00        December       110.00
                          Year to Date Total       680.00
 Last Updated : 02/08/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type E, because I want to edit the record on display.

TYPE:  E
AND THE SYSTEM WILL: Prepare the screen for users to edit the displayed 
record.

Q&A 3-13: Which record does the <E>dit command work on?

Comment: You can change the data at the current cursor position. Use 
the arrow and backspace keys to move within a field or to go back to a 
previous field. Press RETURN to advance to the next field.
Leave a field unchanged by pressing the enter/return key only.

SCREEN 3-15: Edit the displayed record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         26 of       26
 Account Number  200.00   Description  TRAINING                   Acct Type  E
 January         20.00      May             50.00        September       30.00
 February        30.00      June            60.00        October         60.00
 March           50.00      July            40.00        November       100.00
 April           40.00      August          90.00        December       110.00
                          Year to Date Total       680.00
 Last Updated : 02/08/87
      ******** PRESS ANY KEY TO FINISH EDIT AND RETURN TO SUBMENU
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Account 
Number".
To me, it shows that the computer expects me to correct the account number.
Next,  I want to type 150 and the press return, because I want to 
change the account number from 200 to 150.

TYPE:  150
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Accept the change and go on to the next item.

TYPE:  TRAINING & DEV.
PRESS: [PgDn]

Q&A 3-14: How can you move from one description to another without 
making changes?
Press return alone to leave the description unchanged.

Comment: Pressing PgDn accepts the entry and returns to the file 
maintenance screen without the user having to press return at every other 
item.
Changing account numbers that affect the payroll requires corresponding 
changes to the PAYROLL program.

SCREEN 3-16: Go on to the next line
/-----------------------------------------------------------------------------\
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         26 of       26
 Account Number  150.00   Description  TRAINING & DEV.            Acct Type  E
 January         20.00      May             50.00        September       30.00
 February        30.00      June            60.00        October         60.00
 March           50.00      July            40.00        November       100.00
 April           40.00      August          90.00        December       110.00
                          Year to Date Total       680.00
 Last Updated : 02/08/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type P, because I want to see the previous record.

TYPE:  P
AND THE SYSTEM WILL: Display the previous record.

Q&A 3-15: What previous record would you see?


SCREEN 3-17: Display the previous record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         21 of       26
 Account Number  102.00   Description  WHOLESALE SALES INCOME     Acct Type  I
 January          0.00      May              0.00        September        0.00
 February         0.00      June             0.00        October         71.41
 March            0.00      July             0.00        November         0.00
 April            0.00      August           0.00        December         0.00
                          Year to Date Total        71.41
 Last Updated : 10/10/86
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type N, because I wish to see the next record.

TYPE:  N
AND THE SYSTEM WILL:  Display the next record in file.

Q&A 3-16: Why is the next record number not in sequence?

Comment: Next and Previous records are defined logically according to the 
active index, rather than physically.

SCREEN 3-18: Display the next record in file
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Accounting System Chart of Accounts File Maintenance <<
                 Today's Date:02/08/87     Record         26 of       26
 Account Number  150.00   Description  TRAINING & DEV.            Acct Type  E
 January         20.00      May             50.00        September       30.00
 February        30.00      June            60.00        October         60.00
 March           50.00      July            40.00        November       100.00
 April           40.00      August          90.00        December       110.00
                          Year to Date Total       680.00
 Last Updated : 02/08/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ACCOUNT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type M, because I want to return to the accounting system menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the accounting system menu.

Q&A 3-17: What do you do if you want to return to the accounting menu?

3.3.1.2. PAYFILE

This section describes the pay file maintenance.

SCREEN 3-19: Display the accounting system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer expects me to enter a letter matching one 
of the options.
Next, I want to type B, because I want to go into the accounts payable file 
maintenance.

TYPE:  B
AND THE SYSTEM WILL: Display the accounts payable file maintenance screen.

Q&A 3-18: What does choice "B" do?

SCREEN 3-20: Display the accounts payable file maintenance screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/10/87     Record         22 of       22
 Account Number     .                   Date Recorded  02/10/87
 Payee
 Date Due      /  /                     Amount Due       .
 Date Paid     /  /                     Check Number
 Ref
 Last Updated : 02/10/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PFACTNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter a command.
Next, I want to type F, because I want to Find a record in the account payable 
file.

TYPE:  F
AND THE SYSTEM WILL:  Display a screen to enable user to enter a search 
value.

Q&A 3-19: How can you find a record?

SCREEN 3-21: Display a screen to enable user to enter a search value
/----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/10/87     Record         22 of       22
 Account Number     .                   Date Recorded  02/10/87
 Payee
 Date Due      /  /                     Amount Due       .
 Date Paid     /  /                     Check Number
 Ref
 Last Updated : 02/10/87
------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR           0.00
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor in the reverse video area at the 
bottom of the screen".
To me, it shows that the computer expects me to press Ctrl Y to clear the 
area and then enter a search value.
Next, I want to press Ctrl Y and type 52.00 and press return, because I want 
to look for an account number 52.00 in the payable file.

HOLD DOWN: [Ctrl]
AND PRESS: Y
TYPE:   52
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Display the record 52.00 if it finds it.

Q&A 3-20: What is the account payable file indexed by?

Comment: The search is conducted on account number because the current 
index file is PFACTNO.

SCREEN 3-22: Display the record 52.00          
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/10/87     Record          2 of       22
 Account Number   52.00                 Date Recorded  08/29/83
 Payee       INTERNAL REVENUE SERVICE
 Date Due    08/29/83                   Amount Due    180.00
 Date Paid     /  /                     Check Number
 Ref  111111111 Withholding 08/29/83
 Last Updated :   /  /
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PFACTNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type A, because I want to add a record to the account payable 
file.

TYPE:  A
AND THE SYSTEM WILL: Display a blank record and allow users to enter new 
data. 

Q&A 3-21: How can you add a record to the payable file?

SCREEN 3-23: Allow users to enter new data
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/10/87     Record         23 of       23
 Account Number     .                   Date Recorded  02/10/87
 Payee
 Date Due      /  /                     Amount Due       .
 Date Paid     /  /                     Check Number
 Ref
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item Account 
number".
To me, it shows that the computer expects me to enter a new account number 
for the payable file.
Next, I want to type 26 and press return, because I want to add an account 
number 26.

TYPE:  26
PRESS: [<-']  Enter/Return 
PRESS: [<-']  Enter/Return 
AND THE SYSTEM WILL:  Accept the two values and go on to the next item.

Q&A 3-22: Why do you type in '26' at the cursor next to the Account number?
Continue entering the record:

TYPE: Mortgage company
PRESS:   [<-']  Enter/Return key
TYPE:  021587

Q&A 3-23: What is the Date due?
PRESS:  [<-']  Enter/Return key
TYPE:  021187

Q&A 3-24: What do you do if the company has not paid yet?    

TYPE:  93
PRESS:  [<-']  Enter/Return key

Q&A 3-25: What do you do if you have not paid?
PRESS:  [<-']  Enter/Return key

Q&A 3-26: What should you do if there are some references?

SCREEN 3-24: Data Entry Screen           
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/11/87     Record         26 of       26
 Account Number   26.00                 Date Recorded  02/11/87
 Payee       Mortgage Company
 Date Due    02/15/87                   Amount Due     10.00
 Date Paid   02/11/87                   Check Number  93
 Ref
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word QUIT".
To me, it shows that the computer expects me to either type C or anything to 
quit.  Next, I want to return, because I want to quit.

PRESS: [<-'] Enter/Return key
AND THE SYSTEM WILL: Update the file and return to the payable file 
maintenance screen.

SCREEN 3-25: Return to the payable file maintenance screen          
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/11/87     Record         26 of       26
 Account Number   26.00                 Date Recorded  02/11/87
 Payee       Mortgage Company
 Date Due    02/15/87                   Amount Due     10.00
 Date Paid   02/11/87                   Check Number  93
 Ref
 Last Updated :   /  /
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PFACTNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter a command.
Next, I want to type E, because I want to edit the record displayed.

TYPE:  E
AND THE SYSTEM WILL:  Display the screen to edit the currently displayed 
record.

SCREEN 3-26: Edit the currently displayed record          
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                 >> Accounts Payable File Maintenance <<
                 Today's Date:02/11/87     Record         26 of       26
 Account Number   26.00                 Date Recorded  02/11/87
 Payee       Mortgage Company
 Date Due    02/15/87                   Amount Due     10.00
 Date Paid   02/11/87                   Check Number  93
 Ref
 Last Updated : 02/11/87
      ******** PRESS ANY KEY TO FINISH EDIT AND RETURN TO SUBMENU
-------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item Account Number.
To me, it shows that the computer expects me to correct the account number.
Next, I want to type Insurance Company and press return, because the payee 
should be corrected to Insurance Company.

PRESS:  [<-']  Enter/Return key 
PRESS:  [<-']  Enter/Return key 
TYPE: Insurance Company
PRESS:  [PgDn] 
AND THE SYSTEM WILL:  Accept the value and return to the maintenance 
screen.

Q&A 3-27: What key should you press if the payee's name is correct?

SCREEN 3-27: Return to the maintenance screen           
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/11/87     Record         26 of       26
 Account Number   26.00                 Date Recorded  02/11/87
 Payee       Insurance Company
 Date Due    02/15/87                   Amount Due     10.00
 Date Paid   02/11/87                   Check Number  93
 Ref
 Last Updated : 02/11/87
-------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PFACTNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter a command.
Next,  I want to type N, because I want to see the next record in 
the payable file.

TYPE:  N
AND THE SYSTEM WILL: Display the next record in the payable file according 
to its logical index.

Q&A 3-28: When 'N' is pressed, which record will be brought up?

SCREEN 3-28: Accounts Payable File Maintenance         
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                 >> Accounts Payable File Maintenance <<
                 Today's Date:02/11/87     Record          1 of       26
 Account Number   31.00                 Date Recorded  08/29/83
 Payee       111111111 JONES,SAM C
 Date Due    08/29/83                   Amount Due    286.50
 Date Paid     /  /                     Check Number
 Ref    500.00    0.00  500.00  180.00   33.50  286.50 1000.00  360.00   67.00
 Last Updated : 01/03/80
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PFACTNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next,  I  want  to type D,  because I want to delete  the  record 
currently displayed.

TYPE:  D
AND THE SYSTEM WILL:  Flag the displayed record for deletion.

Q&A 3-29: Is there any indication that the current record is deleted?










```
{% endraw %}

## CHAP4.TXT

{% raw %}
```

SCREEN 3-29: Accounts Payable File Maintenance
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
 * DELETED *     Today's Date:02/11/87     Record          1 of       26
 Account Number   31.00                 Date Recorded  08/29/83
 Payee       111111111 JONES,SAM C
 Date Due    08/29/83                   Amount Due    286.50
 Date Paid     /  /                     Check Number
 Ref    500.00    0.00  500.00  180.00   33.50  286.50 1000.00  360.00   67.00
 Last Updated : 01/03/80
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PFACTNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type D again, because I want to recall the record 
I deleted.

TYPE:  D
AND THE SYSTEM WILL:  Recall the record by removing the flag.

SCREEN 3-30: Recall the record by removing the flag
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                    >> Accounts Payable File Maintenance <<
                 Today's Date:02/11/87     Record          1 of       26
 Account Number   31.00                 Date Recorded  08/29/83
 Payee       111111111 JONES,SAM C
 Date Due    08/29/83                   Amount Due    286.50
 Date Paid     /  /                     Check Number
 Ref    500.00    0.00  500.00  180.00   33.50  286.50 1000.00  360.00   67.00
 Last Updated : 01/03/80
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: PFACTNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type M, because I want to return to the accounting system menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the accounting system menu.

4.3.1.3. RECFILE
This section describes the receivable file maintenance.


SCREEN 3-31: Display the Accounting System menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options (A to L).
Next,  I want to type C, because I want to go into the receivable 
file maintenance.

TYPE:  C
AND THE SYSTEM WILL:  Display the receivable file maintenance screen.

Q&A 3-30: Which choice goes into the receivable file maintenance?

SCREEN 3-32: Display the receivable file maintenance screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Accounts Receivable File Maintenance <<
                 Today's Date:02/11/87     Record          5 of        5
 Account Number  102.00       Date Recorded  08/30/83       Invoice ID  100
 Customer    WILSON'S OUTFITTERS
 Date Due    02/10/86                   Amount Due    -51.41
 Date Paid   10/10/86                   Check Number
 Reference
 Last Updated : 10/10/86
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RFINVID
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type F, because I want to find a record in the receivable file.

TYPE:  F
AND THE SYSTEM WILL: Display the screen to allow user to enter a search 
value.

Q&A 3-31: What does the system search by?

SCREEN 3-33: Enter a search value
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Accounts Receivable File Maintenance <<
                 Today's Date:02/11/87     Record          5 of        5
 Account Number  102.00       Date Recorded  08/30/83       Invoice ID  100
 Customer    WILSON'S OUTFITTERS
 Date Due    02/10/86                   Amount Due    -51.41
 Date Paid   10/10/86                   Check Number
 Reference
 Last Updated : 10/10/86
--------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR  100
\-----------------------------------------------------------------------------/

Look  at  the screen,  and find the "cursor in the reverse  video 
area at the bottom of the screen".
To me, it shows that the computer (defaults and/or) expects me to
enter a search value.
Next,  I  want to type Ctrl Y,  because I want to clear  the  100 
displayed, then enter a search value.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
TYPE:  1234
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Display the record with invoice number 1234 if it 
finds it.

Q&A 3-32: What happens if the system cannot find the invoice number?

SCREEN 3-34: Display the record with invoice number 1234
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Accounts Receivable File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        5
 Account Number  101.00       Date Recorded  01/20/83       Invoice ID  1234
 Customer    JONES INC
 Date Due    08/30/86                  Amount Due     38.00
 Date Paid   10/02/86                   Check Number  34
 Reference   BIKE RACKS
 Last Updated : 02/03/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RFINVID
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type K, because I want to change the index key.

TYPE:  K
AND THE SYSTEM WILL:  Display the screen to enable user to change 
the index key.

SCREEN 3-35: Change the index key
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Accounts Receivable File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        5
 Account Number  101.00       Date Recorded  01/20/83       Invoice ID  1234
 Customer    JONES INC
 Date Due    08/30/86                   Amount Due     38.00
 Date Paid   10/02/86                   Check Number  34
 Reference   BIKE RACKS
 Last Updated : 02/03/87
--------------------------------------------------------------------------------
          A. RFINVID B. RFCUSTDT
          Press letter of desired key
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the words desired key".
To me, it shows that the computer (defaults and/or) expects me to
either type A or B to select a key.
Next, I want to type B, because I want to change the index.

TYPE:  B
AND THE SYSTEM WILL: Change the index to RFCUSTDT.

Q&A 3-33: What is RFCUSTDT?

SCREEN 3-36: Change the index to RFCUSTDT
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Accounts Receivable File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        5
 Account Number  101.00       Date Recorded  01/20/83       Invoice ID  1234
 Customer    JONES INC
 Date Due    08/30/86                   Amount Due     38.00
 Date Paid   10/02/86                   Check Number  34
 Reference   BIKE RACKS
 Last Updated : 02/03/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RFCUSTDT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter the next command.
Next, I want to type F, because I want to find a record based on 
the new index key.

TYPE:  F
AND THE SYSTEM WILL:  Display the screen for the user to enter a 
search value.

Q&A 3-34: What will the system search for the record by?

Comment: The search value is dependent on which index file is open.
Find the item "KEY" in the right hand bottom corner of the screen.  As you 
can see, the current index file is "RFCUSTDT".
Always check this display before choosing any of the options to make sure 
that the correct index is in effect.

SCREEN 3-37: Enter a search value
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Accounts Receivable File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        5
 Account Number  101.00       Date Recorded  01/20/83       Invoice ID  1234
 Customer    JONES INC
 Date Due    08/30/86                   Amount Due     38.00
 Date Paid   10/02/86                   Check Number  34
 Reference   BIKE RACKS
 Last Updated : 02/03/87
--------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR  JONES INC                08/30/86
\-----------------------------------------------------------------------------/

Look at the screen,  and find the "cursor in the reverse video area at the 
bottom of the screen".
To me, it shows that the computer (defaults and/or) expects me to
enter a search value.
Next, I want to press Ctrl Y, then enter a search value.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
TYPE:  WILLIAMS HARDWARE   08/15/86
AND THE SYSTEM WILL: Display the record if found.

Q&A 3-35: What happens if the record is not found?

Comment: The date must be entered so that the last number takes up the last 
space in the entry area and there is no need to press return.

SCREEN 3-38: Display the record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Accounts Receivable File Maintenance <<
                 Today's Date:02/11/87     Record          2 of        5
 Account Number  101.00       Date Recorded  01/20/82       Invoice ID  345677
 Customer    WILLIAMS HARDWARE
 Date Due    08/15/86                   Amount Due    200.00
 Date Paid     /  /                     Check Number
 Reference
 Last Updated : 05/21/86
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RFCUSTDT
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word PERFORM".
To me, it shows that the computer expects me to enter the next command.
Next, I want to type M, because I want to return to the accounting system menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the accounting system menu.

Q&A 3-36: Can you return to the system menu at any time?

3.3.2. PROCESSING BILLS AND RECEIPTS
This section describes how bills and receipts are processed.

3.3.2.1. PAYING BILLS AND POSTING EXPENSES
This subsection describes how bills are paid and expenses are posted.

SCREEN 3-39: Display the accounting system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options (A to L).
Next, I want to type D, because I wish to make payments.

TYPE:  D
AND THE SYSTEM WILL:  Display the screen for making payments.

Q&A 3-37: What is the "PAY BILLS and Post expenses" option used for?

Comment: Checks are assumed to be written by hand, with the check number 
recorded in the payable record.


SCREEN 3-40: Display the screen for making payments
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                   >> Accounting System Bill Payer Program <<
                             Today's Date: 02/11/87
 Process PAYABLES for account number  ALL
 Examine only bills DUE AFTER         00/00/00
 Examine only bills FROM  ALL PAYEES
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE PROGRAM =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor at the word ALL".
To me, it shows that the computer (defaults and/or) expects me to
enter an account number.
Next, I want to press return, because I am using the default value 
ALL.

PRESS:  [<-']  Enter/Return key

Q&A 3-38: What will happen if you type an account number?

TYPE: 010186
PRESS:  [<-']  Enter/Return key

Q&A 3-39: What if a payee's name is entered?

SCREEN 3-41: Accounting System Bill Payer Program         
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                   >> Accounting System Bill Payer Program <<
                             Today's Date: 02/11/87
 Process PAYABLES for account number  ALL
 Examine only bills DUE AFTER         00/00/00
 Examine only bills FROM  ALL PAYEES
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE PROGRAM =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer (defaults and/or) expects me to
either type M or press any key to start processing.
Next, I want to press return, because I want to start processing.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Begin processing and display the first record found  
to match the values we entered or if all default values are used, the first 
record in the file is displayed.

Q&A 3-40: What happens if no records can be found?





SCREEN 3-42: Accounting System Bill Payer Program          
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                   >> Accounting System Bill Payer Program <<
                             Today's Date: 02/14/87
 Account Number :  26.00     Date Recorded : 02/11/87
 Payee : Mortgage Company            $    10.00   Last Update : 02/11/87
 Ref :
 Paid With Check Number           Amount Paid  0.00  Date Paid  02/14/87
 TYPE REQUESTED DATA AT CURSOR. PRESS ENTER KEY TO MOVE TO NEXT
 FIELD. TYPE 'P' TO POST, 'M' FOR MENU, ANYTHING ELSE TO SKIP ENTRY =>

\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item Check Number".
To  me,  it  shows that the computer expects me to type  a  check 
number.  Next, I want to type 84, because I the check number is 84.

TYPE: 84
PRESS:  [<-']  Enter/Return key

Q&A 3-41: What if cash is paid instead of check?

TYPE: 10
PRESS:  [<-']  Enter/Return key

Q&A 3-42: What if this company is only  paying partially?

PRESS: [<-']  Enter/Return key
AND THE SYSTEM WILL:  Accept the default and proceed.

SCREEN 3-43: Accept the default and proceed
/-----------------------------------------------------------------------------\
                   >> Accounting System Bill Payer Program <<
 Account Number :  26.00     Date Recorded : 02/11/87
 Payee : Mortgage Company            $    10.00   Last Update : 02/11/87
 Ref :
 Paid With Check Number  84       Amount Paid          10.00Date Paid  02/14/87
 TYPE REQUESTED DATA AT CURSOR. PRESS ENTER KEY TO MOVE TO NEXT
 FIELD. TYPE 'P' TO POST, 'M' FOR MENU, ANYTHING ELSE TO SKIP ENTRY =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer expects me to enter P, M or any 
key.
Next, I want to press M,  because I want to return to the accounting menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the accounting system menu.

Q&A 3-43: Will any updating be done if 'M' is pressed?

3.3.2.2. PROCESSING RECEIPTS
This subsection describes how receipts from customers are processed.


SCREEN 3-44: Display the accounting system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a matching letter (A to L).
Next, I want to type E, because I want to process receipts.

TYPE:  E
AND THE SYSTEM WILL: Display the screen for processing receipts.

Q&A 3-44: What does the "PROCESS RECEIPTS and Post Income" option do?

SCREEN 3-45: Display the screen for processing receipts         
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Accounting System Cash Receipts Program <<
                             Today's Date: 02/11/87
 Income Account Number         101.00   Invoice ID
 Amount Paid           0.00             Date Paid  02/11/87
 Paid With Check Number
 TYPE REQUESTED DATA AT CURSOR. PRESS ENTER KEY TO MOVE TO NEXT
 FIELD. TYPE 'P' TO POST, 'M' FOR MENU, ANYTHING ELSE TO SKIP ENTRY =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the item Income Account 
Number".
To me, it shows that the computer expects me to enter an income account number.
Next,  I want to type 102 and press return, because I am updating 
an account number 102.

TYPE:  102
PRESS:  [<-']  Enter/Return key
TYPE:  220
PRESS:  [<-']  Enter/Return key

TYPE:  320
PRESS:  [<-']  Enter/Return key

Q&A 3-45: What if the amount is greater than that which is owed?

TYPE:  020987
TYPE:  52
PRESS:  [<-']  Enter/Return key

Q&A 3-46: What if customers are paid by cash instead of check ?

SCREEN 3-46: Accounting System Cash Receipts Program
/-----------------------------------------------------------------------------\                         SMITH'S BIKEWORKS INFORMATION SYSTEM
               >> Accounting System Cash Receipts Program <<
                             Today's Date: 02/11/87
 Income Account Number         102.00   Invoice ID  220
 Amount Paid         320.00             Date Paid  02/9/87
 Paid With Check Number  52
 TYPE REQUESTED DATA AT CURSOR. PRESS ENTER KEY TO MOVE TO NEXT
 FIELD. TYPE 'P' TO POST, 'M' FOR MENU, ANYTHING ELSE TO SKIP ENTRY =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer (defaults and/or) expects me to
either enter P, M or any key.
Next, I want to type P, because I want to post entries and update 
the files.

TYPE:  P
AND THE SYSTEM WILL: Update the account chart file and the account 
receivable file.

Q&A 3-47: What would happen if only return was pressed?

3.3.3. THE RECEIVABLE REPORT
This report lists the status of all customers: how much they owe and how long
hey have owed.

SCREEN 3-47: Accounting System Menu 
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/


Look at the screen, and find the "cursor next to the word Option".
To me,  it shows that the computer expects me to enter a matching 
letter (A to L).
Next, I want to type F, because I want to print the accounts receivable report.

TYPE: F
AND THE SYSTEM WILL: Display the screen for printing the report.

Q&A 3-48: What does the receivable report print?

SCREEN 3-48: Print the report
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                     >> Aged Accounts Receivable Report <<
                             Today's Date: 02/14/87
      PRESS 'M' TO RETURN TO MENU, ANY OTHER KEY TO START OUTPUT =>
\-----------------------------------------------------------------------------/
Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer expects me to type M or press any key.
Next, I want to press return, because I want to list the report.

PRINTER MUST BE ON

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Print the receivables report.

Q&A 3-49: What will happen if M is pressed?

SCREEN 3-49: Print the receivables report
/-----------------------------------------------------------------------------\
   SMITH'S BIKEWORKS AGED ACCOUNTS RECEIVABLE REPORT FOR 02/14/87  PAGE:   1

Customer                 Inv ID Due Date  Current   30-Day    60-Day    90-Day

JONES INC                1234   08/30/86                                 38.00
PETERSON'S BIKES         101011 06/01/86                                300.00
PETERSON'S BIKES         204567 06/30/86                                 45.00
WILLIAMS HARDWARE        345677 08/15/86                                200.00
\-----------------------------------------------------------------------------/

THE SYSTEM WILL:  Automatically return to the accounting menu after printing 
the report, the previous screen will still remain while the report is 
printing.

3.3.4. CLEANING UP THE SYSTEM
This section contains the options to clear the files and accounts to prepare
for a new fiscal year.

3.3.4.1. PAYFILE CLEAN UP
This option deletes all unwanted records in the payables file.




SCREEN 3-50: Accounting System
/-----------------------------------------------------------------------------\   
                     SMITH'S BIKEWORKS INFORMATION SYSTEM
                          >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option"
To me, it shows that the computer expects me to enter a matching letter 
(A to L).
Next, I want to type G, because I want to clean up the payable file.

TYPE:  G
AND THE SYSTEM WILL: Display the screen for payable file clean up.

Q&A 3-50: What does the payable file clean up choice do?

SCREEN 3-51: Display the screen for payable file clean up
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                      >> Accounting System File Clean Up <<
                             Today's Date: 02/11/87
 THIS PROGRAM PERMANENTLY REMOVES RECORDS FLAGGED FOR DELETION FROM THE
 PAYABLES FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer expects me to either type M or any key to 
start the clean up.
Next, I want to type M, because I want to return to the accounting menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the accounting menu.

Q&A 3-51: What will happen if any other key is pressed?

Warning: Records cannot be recalled once they have been deleted from the 
disk.

3.3.4.2. RECFILE CLEAN UP
This option deletes unwanted records from the receivables file.


SCREEN 3-52: Display the accounting menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer expects me to enter a matching letter 
Next, I want to type H, because I want to clean up the receivable file.

TYPE:  H
AND THE SYSTEM WILL:  Display the receivable file clean up screen.

Q&A 3-52: What does receivable file clean up do?

SCREEN 3-53: Accounting System File Clean Up
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                      >> Accounting System File Clean Up <<
                             Today's Date: 02/11/87
 THIS PROGRAM PERMANENTLY REMOVES RECORDS FLAGGED FOR DELETION FROM THE
 RECEIVABLES FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer expects me to either enter M or any key to 
start clean up.
Next, I want to type C, because I want to clean up the file.

TYPE:  C
AND THE SYSTEM WILL: Clean up the file by deleting flagged records and 
then return to the accounting menu.

Q&A 3-53: What will entering M bring you to?

3.3.4.3. ZEROING ACCOUNTS IN THE ACCTCHRT FILE
This option initializes all accounts in the chart of account file to zero, but
no records are deleted.




SCREEN 3-54: Return to the Accounting menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                          >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer expects me to enter a matching letter.
Next, I want to type I, because I want to clear the accounts in the account 
chart file.

TYPE:  I
AND THE SYSTEM WILL:  Display the account chart clean up screen.

Q&A 3-54: What does the account chart clean up do?

SCREEN 3-55: Display the account chart clean up screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Accounting System Annual Balance Reset to Zero <<
                             Today's Date: 02/11/87
 THIS PROGRAM RESETS ALL MONTHLY ACCOUNT BALANCES TO ZERO AND CLEARS THE YTD
 AMOUNT. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS PROGRAM =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer expects me to either enter M or any key to 
start clean up.
Next, I want to enter Y or any other key, because I want to initialize the 
values in the account chart file to zero.

TYPE:  Y
AND THE SYSTEM WILL: Set all numerical values to zero and return to the 
accounting menu.

3.3.5. OTHER PRINTOUTS (REPORTS)
Two other reports are described.

3.3.5.1. THE PAYABLES TRANSACTION REPORT
This report lists the amount the company owes and to whom it owes.


SCREEN 3-56: Return to the accounting menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                             >> Accounting System <<
                    A. CHART OF ACCOUNTS File Maintenance
                    B. ACCOUNTS PAYABLE File Maintenance
                    C. ACCOUNTS RECEIVABLE File Maintenance
                    D. PAY BILLS and Post Expenses
                    E. PROCESS RECEIPTS and Post Income
                    F. Print ACCOUNTS RECEIVABLE Report
                    G. ACCOUNTS PAYABLE File Cleanup
                    H. ACCOUNTS RECEIVABLE File Cleanup
                    I. CLEAR ACCOUNTS -- End Fiscal Year
                    J. Print PAYABLES TRANSACTION Summary
                    K. Print ACCOUNTING SUMMARY Report
                    L. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the word Option".
To me, it shows that the computer expects me to enter a matching 
letter (A to L).
Next, I want to type J, because I want to print the payables transaction 
report.

TYPE:J
AND THE SYSTEM WILL:  Display the payable transaction report screen.

Q&A 3-55: What is the payable transaction report ?

SCREEN 3-57: Display the payable transaction report screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                   >> Payables Transaction Summary Report <<
                             Today's Date: 02/14/87
      PRESS 'M' TO RETURN TO MENU, ANY OTHER KEY TO START OUTPUT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor next to the sign =>".
To me, it shows that the computer expects me to either enter M or 
any key to start printing the report.
Next, I want to type P or any key, because I want to print the report.

PRINTER MUST BE ON

TYPE:P
AND THE SYSTEM WILL:  Start printing the report and return to the 
accounting menu after it is done.
```
{% endraw %}

## CHAP5.TXT

{% raw %}
```

4. THE INVENTORY MANAGEMENT SYSTEM
This section documents the Inventory Management System of the Smith's
Bikeworks information system.

 4.1. STARTING UP
  Loading up dbase.

SCREEN 4-1: STARTING UP THE INVENTORY SYSTEM
/-----------------------------------------------------------------------------\
A>


\-----------------------------------------------------------------------------/

Look at the screen, and find the "A>".
To me, it shows that the computer (defaults and/or) expects me to
enter a command.
Next, I want to insert the program diskettes, then type dbase, because I 
want to load dbase III plus.

INSERT: Disk 1 of the dbase III plus program in drive A
INSERT: Smith's Bikeworks program diskette in drive B

TYPE:  DBASE
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  load dbase III plus.

Q&A 4-1: Why do you type DBASE at the A>?

SCREEN 4-2: Load dbase III plus
/-----------------------------------------------------------------------------\
ZDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD3
3              dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                    3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up,  non-transferable,  personal license to use     3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of  the package,  nor do  you have  the right to     3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable  for any violation of  the  License  Agreement  or of     3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word abort.
To me, it shows that the computer (defaults and/or) expects me to
remove diskette 1 and insert diskette 2 in drive A..
Next, I want to insert diskette 2 of the dbase III plus program
and press return to continue loading dbase III plus."

INSERT: Disk 2 of the dbase III plus program in drive A
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Continue loading dbase III plus and display 
the dbase prompt.

Q&A 4-2: Why do you insert a second diskette in drive A?

4.2. Display the dbase prompt

SCREEN 4-3: Display the dbase prompt
/-----------------------------------------------------------------------------\
3                 dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                 3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up,  non-transferable,  personal license to use     3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of  the package,  nor do  you have  the right to     3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable  for any violation of  the  License  Agreement  or of     3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
(DEMO) .
\-----------------------------------------------------------------------------/

Look at the screen, and find the "(DEMO) ." prompt.
To me, it shows that the computer defaults and/or expects me to
type a dbase III plus command.
Next, I want to type DO SYSMENU,  because I want to invoke the program
SYSMENU which produces the system menu for the Smith's Bikeworks system.

TYPE:  DO SYSMENU
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Execute the SYSMENU program.

Q&A 4-3: Why do you type DO SYSMENU?
Comment: If you use a full blown version of dbase III plus, you will not 
see the word DEMO in front of the dot prompt.

 SCREEN 4-4: Execute the SYSMENU program
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<
                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the choices (A to F).
Next, I want to type D, because I want to activate the inventory
management system.

TYPE:  D
AND THE SYSTEM WILL: Activate the Inventory Management system and display 
its system menu.

Q&A 4-4: How do you load the Inventory Management system?

Comment: The Activity Menu controls entry into the Smith's Bikeworks 
subsystems. It is maintained as part of the Customer Information System.
If an action is selected which is not one of the program's legal options,  
the screen will be erased, the menu redisplayed, and a new operator input 
accepted.

 4.3. THE INVENTORY MANAGEMENT SYSTEM MENU
 This menu displays all the options in the inventory management system.

4.3.1. THE FILE MAINTENANCE OPTIONS
The first two options allow the user to maintain files used in the inventory
system.

SCREEN 4-5: Display its system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
type a letter between (A) and (I).
Next, I want to type "A", because I want to perform the inventory file 
maintenance.

TYPE:  A
AND THE SYSTEM WILL:  Load the maintenance program which is named 
MFGMNT.PRG. This displays the inventory file maintenance submenu screen 
and the first record in the index.

Q&A 4-5: What does the Manufactured Inventory file maintenance do?

Comment: The MFGMNT program creates and maintains the Manufacturing 
Inventory file (MFGINV.DBF); and it creates the file's indexes the first 
time the program is run. Available options are to find, add, delete, 
recall, or edit records.

4.3.1.1. MANINV
This is the maintenance operation for all manufactured inventory.

SCREEN 4-6: Display first record in the index
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          5 of        5

 Stock Number                           Description
 Vendor                                 Merchandise Category Code
 Selling Price       .                  Cost       .
 Quantity -- On Hand          On Order            Reorder Point
 Sales This Period           Cumulative Sales          Order Lead Time    .
 Last Updated : 02/11/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: MSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM"
To me, it shows that the computer (defaults and/or) expects me to
enter a letter enclosed in the pointed brackets.
Next, I want to enter "K", because I want to change the key the
file is indexed on.

TYPE:  K
AND THE SYSTEM WILL:  display the key choices at the bottom of the screen 
and allow the user to choose a key value.

Q&A 4-6: What option would you select if you want to change the order of the file?

Comment: The submenu of options at the bottom of the maintenance screen 
controls operation of MFGMNT.PRG. An option is requested by pressing the 
letter key associated with that option - the letter within the < >.

SCREEN 4-7: Allow the user to choose a key value
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          5 of        5

 Stock Number                           Description
 Vendor                                 Merchandise Category Code
 Selling Price       .                  Cost       .
 Quantity -- On Hand          On Order            Reorder Point
 Sales This Period           Cumulative Sales          Order Lead Time    .
 Last Updated : 02/11/87
--------------------------------------------------------------------------------
          A. MSTOCKNO
          Press letter of desired key
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "key".
To me, it shows that the computer (defaults and/or) expects me to
enter the letter next to the index file I desire.
Next, I want to enter "A", because I want the file to be indexed on the 
field STOCKNO.

TYPE:  A
AND THE SYSTEM WILL: Utilize the index file MSTOCKNO.ndx.

Q&A 4-7: Why change the index key?

SCREEN 4-8: Utilize the index file MSTOCKNO.ndx
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          5 of        5

 Stock Number                           Description
 Vendor                                 Merchandise Category Code
 Selling Price       .                  Cost       .
 Quantity -- On Hand          On Order            Reorder Point
 Sales This Period           Cumulative Sales          Order Lead Time    .
 Last Updated : 02/11/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: MSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word"PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the letter options enclosed in the pointed 
brackets.
Next, I want to type "F", because I want to <F>ind a record in the 
manufactured inventory file.

TYPE:  F
AND THE SYSTEM WILL:  Display the find screen with an entry field 
containing the key value of the current record.

Q&A 4-8: Why is the key value of the current record displayed in the entry area?

 SCREEN 4-9: Manufactured Inventory System File Maintenance
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          5 of        5

 Stock Number                           Description
 Vendor                                 Merchandise Category Code
 Selling Price       .                  Cost       .
 Quantity -- On Hand          On Order            Reorder Point
 Sales This Period           Cumulative Sales          Order Lead Time    .
 Last Updated : 02/11/87
--------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "CLEAR".
To me, it shows that the computer (defaults and/or) expects me to
clear the field to remove the search value of the current record.
Next, I want to type the desired search value (F100000-10), 
because I want to find the record containing that search value.

HOLD DOWN: Ctrl
TYPE:  Y
TYPE:  F100000-10
AND THE SYSTEM WILL: Display the first occurrence of the key value 
F100000-10.

Q&A 4-9: What type of value should be entered as a search value?

Comment: The search value is dependent on which index file is active. The 
MSTOCKNO is currently active, so the search will be conducted on stock 
number (STOCKNO).

SCREEN 4-10: Display the first occurrence of the key value F100000-10
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        5

 Stock Number  F100000-10               Description  26" FRAME SET MENS FUTURA
 Vendor  FUTURA                         Merchandise Category Code  B
 Selling Price    290.00                Cost    170.00
 Quantity -- On Hand     9    On Order     0      Reorder Point     2
 Sales This Period     1     Cumulative Sales    11    Order Lead Time   6.0
 Last Updated : 08/30/83
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: MSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one enclosed in the pointed brackets.
Next, I want to type "A",  because I want to add a record to the 
file.

TYPE:  A
AND THE SYSTEM WILL: display a blank record and allow you to enter 
the new field values.

Q&A 4-10: Why does a blank screen appear when performing an add?

Comment: Place the data for the new record at the cursor position starting 
at the top of the screen. Move among fields using the cursor control keys. 
Press RETURN to advance to the next field.
Do not press RETURN after an entry that fills the entire field.

SCREEN 4-11: Allow you to enter the new field values
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          7 of        7

 Stock Number                           Description
 Vendor                                 Merchandise Category Code
 Selling Price       .                  Cost       .
 Quantity -- On Hand          On Order            Reorder Point
 Sales This Period           Cumulative Sales          Order Lead Time    .
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after  the word "Stock 
number".
To me, it shows that the computer (defaults and/or) expects me to
enter a stock number for the new record and other field values.
Next, I want to enter a stock number for the new record, because 
the cursor is at the stock number field.

TYPE:  KH1000-10
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Advance to the next field.

Q&A 4-11: Why do you type "return" after entering a field value?

Continue entering the record:

TYPE:  TRAINING TOOLS
PRESS:  [<-']  Enter/Return key
TYPE:  BIKEWORKS
PRESS:  [<-']  Enter/Return key
TYPE:  B
TYPE:  240
PRESS:  [<-']  Enter/Return key
TYPE:  150
PRESS:  [<-']  Enter/Return key
TYPE:  6
PRESS:  [<-']  Enter/Return key
TYPE:  0
PRESS:  [<-']  Enter/Return key
TYPE:  2
PRESS:  [<-']  Enter/Return key
TYPE:  1
PRESS:  [<-']  Enter/Return key
TYPE:  8
PRESS:  [<-']  Enter/Return key
TYPE:  5
PRESS:  [<-']  Enter/Return key

SCREEN 4-12: Allow you to enter the new field values
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          8 of        8
 Stock Number  KH1000-10                Description  TRAINING TOOLS
 Vendor  BIKEWORKS                      Merchandise Category Code  B
 Selling Price    240.00                Cost    150.00
 Quantity -- On Hand     6    On Order     0      Reorder Point     2
 Sales This Period     1     Cumulative Sales     8    Order Lead Time   5.0
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "blinking cursor after the word 
QUIT".
To me, it shows that the computer (defaults and/or) expects me to
type "C" to continue adding records or type any other key to return to the 
submenu.
Next, I want to press the return key because I want to return to 
the submenu.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return to the submenu screen.

Q&A 4-12: Why would you type "C"?

SCREEN 4-13: Return to the submenu screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          8 of        8
 Stock Number  KH1000-10                Description  TRAINING TOOLS
 Vendor  BIKEWORKS                      Merchandise Category Code  B
 Selling Price    240.00                Cost    150.00
 Quantity -- On Hand     6    On Order     0      Reorder Point     2
 Sales This Period     1     Cumulative Sales     8    Order Lead Time   5.0
 Last Updated : 02/11/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: MSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one enclosed in the pointed brackets.
Next, I want to enter "N", because I want to view the next record 
in the file.

TYPE:  N
AND THE SYSTEM WILL: Locate and display the next record in the current 
index along with the submenu.
                         
Q&A 4-13: What is the purpose of the SKIP command?

Comment: Next and Previous records are defined logically according to the 
active index, rather than by the physical order of the file.

SCREEN 4-14: Display the next record in the current index 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          4 of        8
 Stock Number  TR10000-00               Description  TRAINING ROLLERS
 Vendor  BIKEWORKS                      Merchandise Category Code  A
 Selling Price    149.95                Cost      0.00
 Quantity -- On Hand    23    On Order     0      Reorder Point     0
 Sales This Period     0     Cumulative Sales    92    Order Lead Time   0.0
 Last Updated : 03/10/85
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: MSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the letter options in the pointed brackets.
Next, I want to type "D", because I want to mark the currently displayed 
record for deletion.

TYPE:  D
AND THE SYSTEM WILL: flag the currently displayed record for deletion.

Q&A 4-14: Does the DELETE command remove a record permanently?

Comment:  When a record has been flagged for deletion, the system displays 
the word " * DELETED * " in the upper left hand corner of the screen as an 
indication.

SCREEN 4-15: Flag the currently displayed record for deletion
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
 * DELETED *     Today's Date:02/11/87     Record          4 of        8
 Stock Number  TR10000-00               Description  TRAINING ROLLERS
 Vendor  BIKEWORKS                      Merchandise Category Code  A
 Selling Price    149.95                Cost      0.00
 Quantity -- On Hand    23    On Order     0      Reorder Point     0
 Sales This Period     0     Cumulative Sales    92    Order Lead Time   0.0
 Last Updated : 03/10/85
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: MSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the letter options enclosed in the pointed 
brackets.
Next, I want to type "D", because I want to recall the record just flagged 
for deletion.

TYPE:  D
AND THE SYSTEM WILL:  remove the deletion flag from the record.

Q&A 4-15: Why do you type "D" again?

Comment: Recall is possible at this stage because the record has not been 
removed from the disk.
 
SCREEN 4-16: Remove the deletion flag from the record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          4 of        8
 Stock Number  TR10000-00               Description  TRAINING ROLLERS
 Vendor  BIKEWORKS                      Merchandise Category Code  A
 Selling Price    149.95                Cost      0.00
 Sales This Period     0     Cumulative Sales    92    Order Lead Time   0.0
 Last Updated : 03/10/85
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: MSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the letter options enclosed in the pointed 
brackets.
Next, I want to type "M", because I want to return to the inventory 
system menu.

TYPE:  M
AND THE SYSTEM WILL: display the inventory system menu.

Q&A 4-16: Why do you type "M"?

4.3.1.2. RAWINV
This is the maintenance operation for raw materials inventory.

SCREEN 4-17: Display the inventory system menu
/-----------------------------------------------------------------------------\   
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "B", because I want to perform maintenance operations 
on the raw materials inventory file.

TYPE:  B
AND THE SYSTEM WILL: Present the raw materials inventory file maintenance 
screen with a submenu for maintenance functions.

Q&A 4-17: Why is there raw materials file maintenance?

Comment: The submenu of options at the bottom of the maintenance screen 
controls the operation of the RAWMNT program. An option is requested 
by pressing the letter key associated with that option - the letter
within the < >.

 SCREEN 4-18: Present the raw materials inventory file
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Raw Materials Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        4
 Stock Number  AT005-0.75               Description  ALUMINUM TUBING .75" O.D.
 Vendor -- Primary  ALUMCO              Secondary  MITCHELL'S METL
 Units Per Package  FT                  Cost Per Package      0.30
 Packages -- On Hand   8000   On Order      0     Reorder Point    500
 Order Lead Time   0.5
 Last Updated : 08/30/83
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of those contained within the pointed 
brackets.
Next, I want to type "F", because I want to perform the <F>ind selection.

TYPE:  F
AND THE SYSTEM WILL: Display the find screen with an entry field containing 
the key value of the current record.

Q&A 4-18: What value will the search be conducted on?

SCREEN 4-19: Raw Mateials Inventory System File
/-----------------------------------------------------------------------------\
              >> Raw Materials Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        4
 Stock Number  AT005-0.75               Description  ALUMINUM TUBING .75" O.D.
 Vendor -- Primary  ALUMCO              Secondary  MITCHELL'S METL
 Units Per Package  FT                  Cost Per Package      0.30
 Packages -- On Hand   8000   On Order      0     Reorder Point    500
 Order Lead Time   0.5
 Last Updated : 08/30/83
--------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR  AT005-0.75
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "CLEAR".
To me, it shows that the computer (defaults and/or) expects me to
enter a search value.
Next, I want to clear the field to remove the search value of the 
current record.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
TYPE:  BC002-.25
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  locate and display the first record with a matching 
stocknumber value.

Q&A 4-19: Why do you enter a search value?

SCREEN 4-20: Display first record with a matching stocknumber
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Raw Materials Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          3 of        4
 Stock Number  BC002-.25                Description  BOLT,PLT STL 2"/.25"
 Vendor -- Primary  AAA HARDWARE        Secondary  JONES SUPPLY CO
 Units Per Package  100                 Cost Per Package     12.50
 Packages -- On Hand     99   On Order      0     Reorder Point     50
 Order Lead Time   1.0
 Last Updated : 05/21/86
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of those enclosed in the pointed brackets.
Next, I want to type "P", because I want to display the previous 
record in the index.

TYPE:  P
AND THE SYSTEM WILL:  Locate and display the previous record in the current 
index.


Q&A 4-20: Why is the record number not sequential?

SCREEN 4-21: Display the previous record in the current index 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Raw Materials Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        4
 Stock Number  AT005-0.75               Description  ALUMINUM TUBING .75" O.D.
 Vendor -- Primary  ALUMCO              Secondary  MITCHELL'S METL
 Units Per Package  FT                  Cost Per Package      0.30
 Packages -- On Hand   8000   On Order      0     Reorder Point    500
 Order Lead Time   0.5
 Last Updated : 02/11/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of those enclosed in the pointed brackets.
Next, I want to type "E", because I want to edit the record 
currently displayed on the screen.

TYPE:  E
AND THE SYSTEM WILL: display the file maintenance edit screen.

Q&A 4-21: What must be done if you want to edit a record other than the one 
currently displayed?

SCREEN 4-22: Display the file maintenance edit screen
/-----------------------------------------------------------------------------\
              >> Raw Materials Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        4
 Stock Number  AT005-0.75               Description  ALUMINUM TUBING .75" O.D.
 Vendor -- Primary  ALUMCO              Secondary  MITCHELL'S METL
 Units Per Package  FT                  Cost Per Package      0.30
 Packages -- On Hand   8000   On Order      0     Reorder Point    500
 Order Lead Time   0.5
 Last Updated : 02/11/87
      ******** PRESS ANY KEY TO FINISH EDIT AND RETURN TO SUBMENU
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the "Stock Number" 
field.
To me, it shows that the computer (defaults and/or) expects me to
make a change to the field which contains the cursor.
Next, I want to press return to move to the next field to be edited.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Advance to the next field to be edited.
TYPE:   ALUMINUM TUBING .85" O.D.
PRESS:  [PgDn]  Page Down key
AND THE SYSTEM WILL:  Change the field description from .75"  to .85" 

Q&A 4-22: Why was the description field edited?

SCREEN 4-23: Return to the maintenance screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Raw Materials Inventory System File Maintenance <<
                 Today's Date:02/11/87     Record          1 of        4
 Stock Number  AT005-0.75               Description  ALUMINUM TUBING .85" O.D.
 Vendor -- Primary  ALUMCO              Secondary  MITCHELL'S METL
 Units Per Package  FT                  Cost Per Package      0.30
 Packages -- On Hand   8000   On Order      0     Reorder Point    500
 Order Lead Time   0.5
 Last Updated : 02/11/87
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: RSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERFORM".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of those contained in the pointed brackets.
Next, I want to type "M", because I want to return to the inventory 
management system main menu.

TYPE:  M
AND THE SYSTEM WILL: display the inventory management system menu.


4.3.2. THE ORDER ENTRY SYSTEM
The order entry system allows the user to enter items that are at or below
reorder point.

SCREEN 4-24: Display the inventory management system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
type a letter matching one of the options "A" to "I".
Next, I want to type "C", because I want to enter orders from 
manufacturing inventory.

TYPE:  C
AND THE SYSTEM WILL:  display the order entry screen.

Comment: ORDERS.PRG allows entry of orders, produces an invoice and packing 
slip for each order, updates the manufactured inventory file (MFGINV.DBF) 
by reducing the quantity on hand of each item sold, and updates the 
accounts receivable file (RECFILE.DBF) for credit sales.

The period-to-date and the year-to-date sales values are updated in the 
accounts receivable file (RECFILE.DBF).
Also, the years value and the last update fields are updated in the 
customer maintenance file (CUSTOMER.DBF).

SCREEN 4-25: Display the order entry screen
/-----------------------------------------------------------------------------\
                     SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Order Entry System <<
                             Today's Date: 02/11/87
Beginning Invoice Number   100
Sales Tax Rate  0.045
Default Account Number  102.00
REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT VALUES ARE
O.K. 'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS ORDER PROCESSING =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Number".
To me, it shows that the computer (defaults and/or) expects me to
to enter a new invoice number or press the return key.
Next, I want to press the return key, because I want to accept the default 
value.

PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key

Q&A 4-23: What is sales tax rate?

PRESS:  [<-']  Enter/Return key

Q&A 4-24: What does the "orders" form do?

SCREEN 4-26: Order Entry System
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                            >> Order Entry System <<
                             Today's Date: 02/11/87
Beginning Invoice Number   100
Sales Tax Rate  0.045
Default Account Number  102.00

REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT VALUES ARE
O.K. 'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS ORDER PROCESSING =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the "=>" prompt.
To me, it shows that the computer (defaults and/or) expects me to
enter "M" to return to inventory system menu or any other key to 
start order processing.
Next, I want to type S, because I want to start processing orders.

TYPE: S
AND THE SYSTEM WILL:  Begin orders processing and present the results from 
the order entry system on the screen.

Comment: Notice the selection bar at the bottom of the screen. Your chapter 
describes what each of these options allow you to do.

 SCREEN 4-27: Order Entry System
/-----------------------------------------------------------------------------\                         SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Order Entry System <<
                             Today's Date: 02/11/87
                Buyer                                   Ship To
Name                                    Name
Address                                 Address
City                  St     Zip        City                  St     Zip
          Tax Rate For This Sale  0.045           Invoice Number   100
<C>ash/<M>Chg/<V>isa/<B>ill       Card, Check Num                Account  102.0
     STOCK NUMBER   DESCRIPTION                      PRICE      QTY   SUBTOTAL
                                                            TAX:          0.01
                                                            TOTAL:        0.01
<B>uyer  <S>hip  <P>ay  <A>dd.Item  <D>el.Item  <C>ancel  <E>nter  <M>enu
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Menu".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of those enclosed in the pointed brackets.
Next, I want to type "B", because I want to enter a buyer's name.

TYPE:  B
AND THE SYSTEM WILL: Display the orders processing screen.

Q&A 4-25: What does the <B>uyer option do?




SCREEN 4-28: Display the orders processing screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                            >> Order Entry System <<
                             Today's Date: 02/11/87
                Buyer                                   Ship To
Name                                    Name
Address                                 Address
City                  St     Zip        City                  St     Zip
          Tax Rate For This Sale  0.045           Invoice Number   100
<C>ash/<M>Chg/<V>isa/<B>ill       Card, Check Num                Account  102.0

     STOCK NUMBER   DESCRIPTION                      PRICE      QTY   SUBTOTAL

                                                            TOTAL:        0.01
<B>uyer  <S>hip  <P>ay  <A>dd.Item  <D>el.Item  <C>ancel  <E>nter  <M>enu  B
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Name".
To me, it shows that the computer (defaults and/or) expects me to
enter a new buyer's name.
Next, I want to type the buyer's name, because I want the name to 
appear in orders processing.

TYPE:  HARRIS SUMMIT COMP.
PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key

AND THE SYSTEM WILL: Accept the entry and move down to allow the entry of 
the address.

Q&A 4-26: Why do you enter a buyer's name?


SCREEN 4-29: Move down to allow the entry of the address
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                            >> Order Entry System <<
                             Today's Date: 02/11/87
                Buyer                                   Ship To
Name    HARRIS SUMMIT COMP.             Name
Address                                 Address
City                  St     Zip        City                  St     Zip

          Tax Rate For This Sale  0.045           Invoice Number   100
<C>ash/<M>Chg/<V>isa/<B>ill       Card, Check Num                Account  102.0

     STOCK NUMBER   DESCRIPTION                      PRICE      QTY   SUBTOTAL

                                                            TAX:          0.01
                                                            TOTAL:        0.01
<B>uyer  <S>hip  <P>ay  <A>dd.Item  <D>el.Item  <C>ancel  <E>nter  <M>enu  B
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Address".
To me, it shows that the computer (defaults and/or) expects me to
enter the address of the buyer. 
Next, I want to type the buyer's address.

TYPE:  P.O.BOX 1224
PRESS:  [<-']  Enter/Return key
TYPE:  MIAMI
PRESS:  [<-']  Enter/Return key
TYPE:  FL
TYPE:  33124
AND THE SYSTEM WILL: enter the buyer's address information and proceed to 
the buyer's information sub-menu.

Q&A 4-27: What is the purpose of storing the address?

Comment:  There are enough lines to accommodate a four line address.

SCREEN 4-30: Proceed to the buyer's information sub-menu
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                            >> Order Entry System <<
                             Today's Date: 02/11/87
                Buyer                                   Ship To
Name    HARRIS SUMMIT COMP.             Name
Address P.O.BOX 1224                    Address
City MIAMI            St FL  Zip 33124  City                  St     Zip
          Tax Rate For This Sale  0.045           Invoice Number   101
<C>ash/<M>Chg/<V>isa/<B>ill       Card, Check Num                Account  102.0
     STOCK NUMBER   DESCRIPTION                      PRICE      QTY   SUBTOTA
                                                            TAX:          0.01
                                                            TOTAL:        0.01
<B>uyer  <S>hip  <P>ay  <A>dd.Item  <D>el.Item  <C>ancel  <E>nter  <M>enu
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Menu".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching the letters enclosed in the pointed 
brackets.  Next, I want to type "A", because I want to add the item.

TYPE:  A
AND THE SYSTEM WILL:  move the cursor down to the stock number field for 
entry of the item purchased.

SCREEN 4-31: Order Entry System
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                          Today's Date: 02/11/87
                Buyer                                   Ship To
Name    HARRIS SUMMIT COMP.             Name
Address P.O.BOX 1224                    Address
City MIAMI            St FL  Zip 33124  City                  St     Zip
          Tax Rate For This Sale  0.045           Invoice Number   101
<C>ash/<M>Chg/<V>isa/<B>ill       Card, Check Num                Account  102.0

     STOCK NUMBER   DESCRIPTION                      PRICE      QTY   SUBTOTAL
    F100000-10
                                                            TAX:          0.01
                                                            TOTAL:        0.01
<B>uyer  <S>hip  <P>ay  <A>dd.Item  <D>el.Item  <C>ancel  <E>nter  <M>enu  A
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor in the "STOCK NUMBER" field.
To me, it shows that the computer (defaults and/or) expects me to
enter the stock number.
Next, I want to enter the  stock number of the item being purchased.
because I want the description of the item to appear.
  
TYPE:  F100000-10
AND THE SYSTEM WILL:  Access the MFGINV file to find the record for that 
stock number. If it is found, the current price and quantity on hand from 
the inventory file are displayed at the bottom of the screen.

Comment: The PRICE and QTY fields can be edited. You would edit the PRICE 
field in the case of discount prices for wholesalers.

SCREEN 4-32: Order Entry System
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                            >> Order Entry System <<
                             Today's Date: 02/11/87
                Buyer                                   Ship To
Name    HARRIS SUMMIT COMP.             Name
Address P.O.BOX 1224                    Address
City MIAMI            St FL  Zip 33124  City                  St     Zip
          Tax Rate For This Sale  0.045           Invoice Number   101
<C>ash/<M>Chg/<V>isa/<B>ill       Card, Check Num                Account  102.0
     STOCK NUMBER   DESCRIPTION                      PRICE      QTY   SUBTOTAL
    F100000-10      26" FRAME SET MENS FUTURA      290.00        2

                                                            TAX:          0.01
                                                            TOTAL:        0.01
Current Item Price $  290.00    Current Quantity on Hand :    9
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor in the "PRICE" field.
To me, it shows that the computer (defaults and/or) expects me to 
change the price or press return.
Next, I want to press return, because I want to compute the subtotal.

PRESS:  [<-']  Enter/Return key
TYPE:   2
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Compute the subtotal.

SCREEN 4-33: Compute the subtotal
/-----------------------------------------------------------------------------\
                    SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Order Entry System <<
                             Today's Date: 02/11/87
                Buyer                                   Ship To
Name    HARRIS SUMMIT COMP.             Name
Address P.O.BOX 1224                    Address
City MIAMI            St FL  Zip 33124  City                  St     Zip
          Tax Rate For This Sale  0.045           Invoice Number   101
<C>ash/<M>Chg/<V>isa/<B>ill       Card, Check Num                Account  102.0

     STOCK NUMBER   DESCRIPTION                      PRICE      QTY   SUBTOTAL
1:   F100000-10     26" FRAME SET MENS FUTURA       290.00        2     580.00

                                                            TAX:         26.10
                                                            TOTAL:      606.11
<B>uyer  <S>hip  <P>ay  <A>dd.Item  <D>el.Item  <C>ancel  <E>nter  <M>enu
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Menu".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of those enclosed in the pointed 
brackets.
Next, I want to type "M", because I want to return to the 
inventory system menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the inventory system menu.

4.3.3. THE MANUFACTURED INVENTORY FILE LISTING
This is the option that allows the user to print a report containing
information on all manufactured inventory.

SCREEN 4-34: Display the inventory system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer expects me to enter an option 
matching letters "A" to "I".
Next, I want to print the manufactured inventory report.

TYPE: D
AND THE SYSTEM WILL:  Activate the manufactured inventory file 
listing and display the corresponding menu.

Q&A 4-28: What file is the manufactured inventory report printed from?

Comment: MFGRPT.PRG prints a variety of specialized inventory summary 
reports of the Manufactured Inventory file. 

Report options are for the entire inventory: items out of stock, items at 
or below reorder point, and items on order.
All these reports may be indexed on stock number, vendor, or item category 
code if desired.

4.3.3.1. LIST ALL INVENTORY ITEMS
This item in the submenu prints all manufactured items.

SCREEN 4-35: Display the corresponding menu
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System File Listing <<
                             Today's Date: 02/15/87
                    A. List ALL INVENTORY Items
                    B. List Items OUT OF STOCK
                    C. List Items at or BELOW REORDER Point
                    D. List Items ON ORDER
                    E. Return to INVENTORY MENU
                       Press Letter Matching Desired Option

\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer expects me to enter an option
matching letters "A" to "E".
Next, I want to type "A".

TYPE: A
AND THE SYSTEM WILL:  Display a setup screen for entering the parameters.

SCREEN 4-36: Display a setup screen for entering the parameters
/-----------------------------------------------------------------------------\
                    SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Manufactured Inventory System File Listing <<
                             Today's Date: 02/15/87
 Beginning STOCK NUMBER to Include in Report
 Ending STOCK NUMBER to Include in Report     zzzzzzzzzz
 Run Report From The Following FILE  MFGINV
 Ordered by the Following INDEX      MSTOCKNO
 Using the REPORT FORMAT Named       MFGLIST

 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Report".
To me, it shows that the computer expects me to enter the stock
number the report should begin with.  Next, I want to type CT10000-00.

TYPE: CT10000-00
AND THE SYSTEM WILL: Advance the cursor to the next entry.


Q&A 4-29: Why type CT10000-00?

SCREEN 4-37: Advance the cursor to the next entry
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System File Listing <<
                             Today's Date: 02/15/87

 Beginning STOCK NUMBER to Include in Report  CT10000-00
 Ending STOCK NUMBER to Include in Report     zzzzzzzzzz
 Run Report From The Following FILE  MFGINV
 Ordered by the Following INDEX      MSTOCKNO
 Using the REPORT FORMAT Named       MFGLIST

 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen,  and find the cursor after the word "Report".
To me, it shows that the computer expects me to a either accept the default 
values or enter new values for the remaining parameters.
Next, I want to press the Page Down key to accept the remaining default 
values and print the report.

PRINTER MUST BE ON

PRESS: [PgDn]  Page Down key
AND THE SYSTEM WILL:  begin printing the report and then return to the 
inventory menu

Q&A 4-30: What is the last stock number to appear in the report?

SCREEN 4-38: Return to the inventory menu
/-----------------------------------------------------------------------------\   
                    SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer expects me to enter a letter matching one 
of the options "A" to "I".
Next, I want to print the manufactured inventory report.

TYPE: D
AND  THE SYSTEM WILL:  Activate the manufactured inventory file listing and 
display the corresponding menu.

4.3.3.2. LIST ITEMS OUT OF STOCK
This option lists all items out of stock.

SCREEN 4-39: Display the corresponding menu
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System File Listing <<
                             Today's Date: 02/15/87
                    A. List ALL INVENTORY Items
                    B. List Items OUT OF STOCK
                    C. List Items at or BELOW REORDER Point
                    D. List Items ON ORDER
                    E. Return to INVENTORY MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer expects me to enter a letter
matching one of the options "A" to "E".  Next, I want to enter "B".

TYPE: B
AND THE SYSTEM WILL: Display the setup screen for out of stock items.

PRINTER MUST BE ON

TYPE:  F100000-10
PRESS: [PgDn] Page Down key
AND THE SYSTEM WILL:  print the report and return to display the inventory 
menu. 

TYPE: D

4.3.3.3. LIST ITEMS AT OR BELOW REORDER POINT
This option prints a list of all items at or below reorder point.

SCREEN 4-40: Return to display the inventory menu
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System File Listing <<
                             Today's Date: 02/15/87

                    A. List ALL INVENTORY Items
                    B. List Items OUT OF STOCK
                    C. List Items at or BELOW REORDER Point
                    D. List Items ON ORDER
                    E. Return to INVENTORY MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer expects me to enter an option
matching one of the letters "A" to "F".  Next, I want to enter "C".

TYPE: C

Q&A 4-31: What do you do when an item is below reorder point?

SCREEN 4-41: Manufactured Inventory System
/-----------------------------------------------------------------------------\
              >> Manufactured Inventory System File Listing <<
                             Today's Date: 02/15/87
 Beginning STOCK NUMBER to Include in Report
 Ending STOCK NUMBER to Include in Report     zzzzzzzzzz
 Run Report From The Following FILE  MFGINV
 Ordered by the Following INDEX      MSTOCKNO
 Using the REPORT FORMAT Named       MFGLIST

 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Report".
To me, it shows that the computer expects me to enter a stock number to 
indicate the beginning of the range of records to include in the report.
Next, I want to type AT005-0.75.

PRINTER MUST BE ON

TYPE:  AT005-0.75
PRESS: [PgDn]  Page Down key

Q&A 4-32: Why start the search for stockout items on KAT005-0.75?

TYPE: D

4.3.3.4. LIST ITEMS ON ORDER
This option prints a listing of items currently on order.

SCREEN 4-42: Manufactured Inventory System File Listing 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System File Listing <<
                             Today's Date: 02/15/87
                    A. List ALL INVENTORY Items
                    B. List Items OUT OF STOCK
                    C. List Items at or BELOW REORDER Point
                    D. List Items ON ORDER
                    E. Return to INVENTORY MENU
                       Press Letter Matching Desired Option  1
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer expects me to enter an option
"A" to "E".  Next, I want to enter option "D".

TYPE: D
AND THE SYSTEM WILL: Activate the program for listing MFGINV items that
are presently on order.
Next, I want to type CT10000-00.

PRINTER MUST BE ON

TYPE: CT10000-00
PRESS: [PgDn]  Page Down key

Q&A 4-33: What is the difference between the MFGINV file and the RAWINV file?

4.3.4. THE RAW MATERIALS INVENTORY REPORT
This option prints a listing of all raw materials in stock

SCREEN 4-43: Activate the program for listing MFGINV items
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer expects me to enter a letter
matching one of the options "A" to "E".  Next, I want to type "E".

TYPE: E
AND THE SYSTEM WILL:  Display the set up screen for the Raw Materials 
Inventory report.

Raw Materials Inventory System File Listing
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Raw Materials Inventory System File Listing <<
                             Today's Date: 02/15/87

 Beginning STOCK NUMBER to Include in Report
 Ending STOCK NUMBER to Include in Report     zzzzzzzzzz
 Run Report From The Following FILE  MFGINV
 Ordered by the Following INDEX      MSTOCKNO
 Using the REPORT FORMAT Named       MFGLIST
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word  "Report".
To me, it shows that the computer expects me to enter the stock number of 
the first record to include in the report.  Next, I want to type CT10000-00.

TYPE: CT10000-00
AND THE SYSTEM WILL: Advance the cursor to the next entry field.

PRINTER MUST BE ON

PRESS: [PgDn]  Page Down key
AND THE SYSTEM WILL:  Print the report and return to the inventory menu.

4.3.5. CLEAR SALES COUNTS
This option resets this period's sales figures and cumulative sales figures 
in the Manufactured Inventory file to zero.

SCREEN 4-44: Return to the inventory menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
type an letter matching one of the options "A" to "I".
Next, I want to type "F", because I want to clear sales accounts.

TYPE:  F
AND THE SYSTEM WILL: Display the manufactured materials inventory sales 
reset screen.

Q&A 4-34: What does the clear accounts function do?

SCREEN 4-45: Manufactured Inventory System Sales Reset
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System Sales Reset <<
                             Today's Date: 02/11/87

 Figure to Clear: PERIOD or CUMULATIVE  PERIOD
 THIS PROGRAM CLEARS THE CURRENT PERIOD SALES FIGURE, OR BOTH THE CURRENT AND
 CUMULATIVE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS PROGRAM =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "PERIOD".
To me, it shows that the computer (defaults and/or) expects me to
specify whether this period's sales figures or cumulative sales figures are 
to be cleared.

PRESS: [<-']  Enter/Return key

SCREEN 4-46: Manufactured Inventory System Sales Reset
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System Sales Reset <<
                             Today's Date: 02/11/87

 Figure to Clear: PERIOD or CUMULATIVE  PERIOD
 THIS PROGRAM CLEARS THE CURRENT PERIOD SALES FIGURE, OR BOTH THE CURRENT AND
 CUMULATIVE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS PROGRAM =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the "=>" prompt.
To me, it shows that the computer (defaults and/or) expects me to
enter either a "M" to return to the menu or any other key to 
clear the accounts.  Next, I want to enter any key to clear the accounts.

TYPE:  C
AND THE SYSTEM WILL: Clear the accounts andreturn to the Inventory menu.

Q&A 4-35: What inventory file was the clear accounts function performed on?

4.3.6. FILE CLEANUP OPTIONS
These options allow the user to permanently remove deleted records.

SCREEN 4-47: Return to the Inventory menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options.
Next, I want to type "G", because I want to perform the  manufactured 
inventory file clean up.

TYPE:  G
AND THE SYSTEM WILL: Execute the program named MIREPACK.PRG.

Q&A 4-36: What does the MANUFACTURED INVENTORY File CLEAN UP option accomplish?

4.3.6.1. MANINV CLEANUP
Remove records flagged for deletion in the MANINV file.

SCREEN 4-48: Execute the program named MIREPACK.PRG
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Manufactured Inventory System File Clean Up <<
                             Today's Date: 02/11/87

 THIS PROGRAM PERMANENTLY REMOVES RECORDS FLAGGED FOR DELETION FROM THE
 MFGINV FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after "=> prompt".
To me, it shows that the computer (defaults and/or) expects me to
enter either a "M" to return to menu and abort the packing or 
enter any other key to pack.
Next, I want to type "M", because I want to return to the menu and abort 
the clean up.

TYPE:  M
AND THE SYSTEM WILL:  Display the Inventory menu.

Q&A 4-37: Can you recall your records after the file clean up?

SCREEN 4-49: Display the Inventory Manu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "H", because I want to perform the raw materials 
inventory file clean up.

TYPE:  H
AND THE SYSTEM WILL: Display the raw materials inventory clean up screen.

Q&A 4-38: What program performs the raw materials inventory file clean up?

4.3.6.2. RAWINV CLEANUP
Removes records flagged for deletion in the raw inventory file.


SCREEN 4-50: Display the raw materials inventory clean up screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
               >> Raw Materials Inventory System File Clean Up <<
                             Today's Date: 02/11/87

 THIS PROGRAM PERMANENTLY REMOVES RECORDS FLAGGED FOR DELETION FROM THE
 RAWINV FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the "=>" prompt. 
To me, it shows that the computer (defaults and/or) expects me to
enter either an "M" to return to the menu and abort or any other 
key to perform.
Next, I want to type "K", because I want to pack the file.

TYPE:  K
AND THE SYSTEM WILL:  Pack the file.

Q&A 4-39: What does the PACK command perform?

4.3.7. RETURNING TO SYSMENU
Option "I" allows the user to return to the system activity menu

SCREEN 4-51: Inventory Management System Menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                        >> Inventory Management System <<
                    A. MANUFACTURED INVENTORY File Maintenance
                    B. RAW MATERIALS INVENTORY File Maintenance
                    C. Enter ORDERS From Manufactured Inventory
                    D. Print MANUFACTURED INVENTORY Reports
                    E. Print RAW MATERIALS INVENTORY Reports
                    F. Clear SALES COUNTS
                    G. MANUFACTURED INVENTORY File CLEAN UP
                    H. RAW MATERIALS INVENTORY File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to Type "I", because I want to return to the Smith's Bikeworks 
main menu.

TYPE:  I
AND THE SYSTEM WILL:  return to the System menu.

SCREEN 4-52: Return to the system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<

                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the word "Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "F".
Next,  I want to type "F", because I want to exit Smith's Bikeworks 
altogether.

TYPE:  F
AND THE SYSTEM WILL: Return to the dbase prompt.

SCREEN 4-53: Return to the dbase prompt
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<
                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option  F

(DEMO) .
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the "(DEMO)." 
prompt.
To me, it shows that the computer expects me to enter a Dbase III 
plus command.  Next, I want to type QUIT.

TYPE: QUIT
PRESS: [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return to the DOS A>.

Q&A 4-40: What does the Quit command do?

Comment: It's a good habit to exit Dbase by typing QUIT because this 
updates all files properly and helps maintain data integrity.

SCREEN 4-54: Return to the DOS A>
/-----------------------------------------------------------------------------\
END RUN   dBASE III PLUS END RUN   dBASE III PLUS
A>

\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor after the "A>" prompt.
To me, it shows that the computer expects me to take out my 
diskettes. 
Next, I want to take out my disks. 





















































```
{% endraw %}

## CHAP6.TXT

{% raw %}
```

5. PRODUCTION PLANNING SYSTEM
This section contains the documentation for the production planning system.

5.1. GETTING STARTED
This section describes how to load dbase.

SCREEN 5-1: STARTING DBASE
/-----------------------------------------------------------------------------\
A>


\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the A>".
To me, it shows that the computer (defaults and/or) expects me to
enter a command.
Next, I want to insert disk 1 of the dbase III plus program and type Dbase, 
because I want to load Dbase III plus.

INSERT: Disk 1 of the dbase III plus program in drive A
INSERT: Smith's Bikeworks program diskette in drive B
TYPE:  DBASE
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Load Dbase III plus.

Q&A 5-1: Why do you enter the DBASE command?

SCREEN 5-2: Load Dbase III plus
/-----------------------------------------------------------------------------\
3                 dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                 3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up,  non-transferable,  personal license to use     3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of  the package,  nor do  you have  the right to     3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable  for any violation of  the  License  Agreement  or of     3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word abort".
To me, it shows that the computer (defaults and/or) expects me to
Insert the sampler disk 2 and type return.
Next, I want to Insert Disk 2 of dbase III plus and press Return, because I 
want to continue loading Dbase.

INSERT: Disk 2 of the dbase III plus program in drive A
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Load Dbase and display the Dbase prompt.

SCREEN 5-3: Load Dbase and display the Dbase prompt
/-----------------------------------------------------------------------------\
3                 dBASE III PLUS  version 1.0  IBM/MSDOS DEMO                 3
3      Copyright (c) Ashton-Tate 1984, 1985, 1986.  All Rights Reserved.      3
3              dBASE, dBASE III, dBASE III PLUS, and Ashton-Tate              3
3                        are trademarks of Ashton-Tate                        3
3       You may use the dBASE III PLUS software and  printed materials in     3
3       the dBASE III PLUS software package under the terms  of the dBASE     3
3       III  PLUS  Software  License Agreement.   In summary, Ashton-Tate     3
3       grants you a paid-up,  non-transferable,  personal license to use     3
3       dBASE III PLUS on one  microcomputer or workstation.   You do not     3
3       become the owner of  the package,  nor do  you have  the right to     3
3       copy or alter the software or printed materials.  You are legally     3
3       accountable  for any violation of  the  License  Agreement  or of     3
3       copyright, trademark, or trade secret laws.                           3
@DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDY
                           Press the F1 key for HELP.
       Insert Sampler Disk 2 and press ENTER, or press Ctrl-C to abort.
(DEMO) .
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the DEMO .".
To me, it shows that the computer (defaults and/or) expects me to
enter a dbase III plus command .
Next, I want to type DO SYSMENU,  because I want to activate the
program  that  produces the system menu for the  Smith's  Bikeworks
system.

TYPE:  DO SYSMENU
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Display the system menu.

Q&A 5-2: Why type Do Sysmenu?

Comment: If you use a full blown version of dbase III plus, you will not 
see the word DEMO in front of the dot prompt.

5.2. SYSMENU

This section contains the system menu of Smith's Bikeworks.

SCREEN 5-4: Display the system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<
                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the choices "A" to "F".
Next, I want to type "E", because I want to load the production and 
planning system.

TYPE:  E
AND THE SYSTEM WILL: Activate the Production and Planning system
and display its system menu.

Q&A 5-3: How do you load the Production and Planning System?

Comment: The Activity Menu controls entry into the Smith's Bikeworks 
subsystems. It is maintained as part of the Customer Information System.

5.3. THE PRODUCTION PLANNING MENU
This menu displays all the choices available in the production planning system.

SCREEN 5-5: Display its system menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
 
                      Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word Option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "A", because I want to perform the assembly file 
maintenance.

TYPE:  A
AND THE SYSTEM WILL:  Display the assembly file maintenance submenu screen 
showing the first record in the index.

Q&A 5-4: What does the Assembly file maintenance do?

Comment: If an action is selected which is not one of the program's legal 
options, the screen will be erased, the menu redisplayed, and a new 
operator input accepted.
An option is provided in each of the production system command files to 
return to the production  menu without doing any processing.


5.3.1. THE FILE MAINTAINANCE OPTIONS
This section describes the options that allow users to maintain the two 
files within the production planning system.

5.3.1.1. ASSEMBLY FILE
This section describes the assembly file maintenance.

SCREEN 5-6: Display the first record in the index
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/06/87     Record         14 of       29
 Stock Number For This Assembly  BC0002-.25
 Assembly Description  BOLT,PLT STL 2"/.25"
 Subassembly/Machine/Labor Component Code
 Number of Units of Subassembly/Machine/Labor Required      0.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
 <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
 <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ASTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next,  I want to type "F", because I want to find a record in the
file.

TYPE:  F
AND THE SYSTEM WILL: Display the find screen with an entry field
containing the key value of the current record.

Q&A 5-5: Why is the key value of the current record displayed in the entry field?

Comment: The submenu of options at the bottom of the maintenance screen 
controls operation of ASSEMMNT.PRG. An option is requested by pressing the 
letter key associated with that option - the letter within the < >.

 SCREEN 5-7: Production System Assembly File Maintenance
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/06/87     Record         14 of       29
 Stock Number For This Assembly  BC0002-.25
 Assembly Description  BOLT,PLT STL 2"/.25"
 Subassembly/Machine/Labor Component Code
 Number of Units of Subassembly/Machine/Labor Required      0.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR  BC0002-.25
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word clear".
To me, it shows that the computer (defaults and/or) expects me to
enter a new search value for the record I want to find.
Next,  I want to type ctrl Y,  because I want to clear the entry
field of the current value.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
AND THE SYSTEM WILL: clear the field of any characters.

Q&A 5-6: Why type "Ctrl Y"?

SCREEN 5-8: Clear the field of any characters
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Production System Assembly File Maintenance <<
                 Today's Date:02/06/87     Record         14 of       29
 Stock Number For This Assembly  BC0002-.25
 Assembly Description  BOLT,PLT STL 2"/.25"
 Subassembly/Machine/Labor Component Code
 Number of Units of Subassembly/Machine/Labor Required      0.00
 Last Updated : 08/25/83
--------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word clear".
To me, it shows that the computer (defaults and/or) expects me to
enter a new search value.
Next,  I want to type CT10000-00, because I want to locate and display 
the first record with a stock number matching this search value.

TYPE:  CT10000-00
AND THE SYSTEM WILL:  Display the first occurrence of the key value.

Q&A 5-7: If there is more than one record with the stock number "CT10000-00", 
how would you find the second occurrence?

Comment: The search value is dependent on which index file is active. The 
ASTOCKNO index is currently active, so the search will be conducted on 
stock number.
The name must be entered exactly as it appears in the file. Attention must 
be paid to lower and upper case.

SCREEN 5-9: Display the first occurrence of the key value
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/06/87     Record          1 of       29
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  AT005-0.75
 Number of Units of Subassembly/Machine/Labor Required     25.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ASTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next, I want to type "D", because I want to mark the  currently 
displayed record for deletion.

TYPE:  D
AND THE SYSTEM WILL: Display the record with a "* DELETED *" indication.

Q&A 5-8: What does the command "DELETE" do to a record?

Comment: When a record has been flagged for deletion, the system displays 
the word " * DELETED * "in the upper left hand corner of the screen as an 
indication.

SCREEN 5-10: Display the record with a "* DELETED *" indication
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
 * DELETED *     Today's Date:02/12/87     Record          1 of       29
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  AT005-0.75
 Number of Units of Subassembly/Machine/Labor Required     25.00
 Last Updated : 08/25/83
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ASTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next, I want to type "D",  because I want to recall the  record 
previously flagged for deletion.

TYPE:  D
AND THE SYSTEM WILL: Remove the delete flag from the record.

Q&A 5-9: What does the entry option "D" do?

Comment: Recall is possible at this stage because the record has not been 
removed physically from the disk.

SCREEN 5-11: Remove the delete flag from the record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/12/87     Record          1 of       29
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  AT005-0.75
 Number of Units of Subassembly/Machine/Labor Required     25.00
 Last Updated : 08/25/83
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ASTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next,  I want to type "N", because I want to view the next record 
in the index.

TYPE:  N
AND THE SYSTEM WILL: Display the next record in the index and the submenu.

Q&A 5-10: What command in dbase allows you to move to the next record?

Comment: Next and Previous records are defined logically according to the 
active index, rather than physically.

SCREEN 5-12: Display the next record in the index 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/12/87     Record          1 of       30
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  AT005-0.75
 Number of Units of Subassembly/Machine/Labor Required     25.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
 <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
 <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: ASTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next, I want to type "K", because I want to perform the maintenance function 
on a different index key.

TYPE:  K
AND THE SYSTEM WILL: Display the keys for users to select.
 
SCREEN 5-13: Display the keys for users to select
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/12/87     Record          1 of       30
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  AT005-0.75
 Number of Units of Subassembly/Machine/Labor Required     25.00
 Last Updated : 08/25/83
--------------------------------------------------------------------------------
          A. ASTOCKNO B. SSTOCKNO
          Press letter of desired key
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word key".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the key options.
Next, I want to type "B", because I want to perform maintenance 
functions on the SSTOCKNO index.

TYPE:  B
AND THE SYSTEM WILL: Reindex the assembly file on sub_stockno and 
display a submenu screen as well as the first record of that index.

Q&A 5-11: Why change the index key?

SCREEN 5-14: Production System Assembly File Maintenance
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/12/87     Record          1 of       30
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  AT005-0.75
 Number of Units of Subassembly/Machine/Labor Required     25.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next, I want to type "F", because I want to perform a find.

TYPE:  F
AND THE SYSTEM  WILL:  Display a find screen to enter the sub_stkno search 
value.

Q&A 5-12: Why type the <F>ind command?
Comment: The search value is dependent on which index file is open. The 
current index is SSTOCKNO.NDX whose key is SUB_STKNO.

SCREEN 5-15: Enter the sub_stkno search value
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/12/87     Record          1 of       30
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  AT005-0.75
 Number of Units of Subassembly/Machine/Labor Required     25.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR  AT005-0.75
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word clear".
To me, it shows that the computer (defaults and/or) expects me to
enter a search value.
Next, I want to clear the entry field, because I want to enter a 
new search value.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
TYPE:  SR0005-1.0
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:   display the screen of the matching record 
as well as, the sub menu.

Q&A 5-13: Why press Ctrl-Y?

SCREEN 5-16: Display the screen of the matching record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/12/87     Record         26 of       30
 Stock Number For This Assembly  TR10000-00
 Assembly Description  TRAINING ROLLERS
 Subassembly/Machine/Labor Component Code  SR0005-1.0
 Number of Units of Subassembly/Machine/Labor Required      2.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter  a  letter  matching  one of the options  enclosed  in  the
pointed brackets.
Next, I want to type "P", because I want to view the previous record in 
the index.

TYPE:  P
AND THE SYSTEM WILL:  Locate and display the previous record in the index 
as well as display the sub-menu.

Q&A 5-14: What does the command "P" do?

SCREEN 5-17: Display the previous record in the index
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:02/12/87     Record          5 of       30
 Stock Number For This Assembly  CT10000-00
 Assembly Description  CAR TOP CARRIER 4 BK
 Subassembly/Machine/Labor Component Code  SC0500-2.0
 Number of Units of Subassembly/Machine/Labor Required      4.00
 Last Updated : 08/25/83
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next, I want to enter "A" because I want to append a record to the data 
base.

TYPE:  A
AND THE SYSTEM WILL: Display the assembly file maintenance append screen.

Comment: Place the data for the new record at the cursor position starting 
at the top of the screen. Move among fields using the cursor control keys. 
Press RETURN to advance to the next field.
Do not press RETURN after an entry which fills the entire field.

SCREEN 5-18: Display the assembly file maintenance append 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:03/20/87     Record         30 of       30
 Stock Number For This Assembly
 Assembly Description
 Subassembly/Machine/Labor Component Code
 Number of Units of Subassembly/Machine/Labor Required       .
 Last Updated :   /  /
      *** PRESS 'C' TO CONTINUE ADDING NEW RECS, ANYTHING ELSE TO QUIT
------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/


Look at the screen, and find the "cursor after the word stock number".
To me, it shows that the computer (defaults and/or) expects me to
enter a return or a new stock number to add a record.
Next, I want to enter returns for all the fields because I want to complete 
the append function .

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Advance the cursor to the next field for every return 
typed, upon reaching the last field in the record display and typing return  
provides you with the option of returning to the submenu or continuing to add 
records.

Q&A 5-15: What Dbase command allows a new record to be added to the database?

SCREEN 5-19: Production System Assembly File Maintenance
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:03/20/87     Record         30 of       30
 Stock Number For This Assembly
 Assembly Description
 Subassembly/Machine/Labor Component Code
 Number of Units of Subassembly/Machine/Labor Required       .
 Last Updated :   /  /
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
Brackets.
Next, I want to type "E" because I want to edit the record previously 
appended.

TYPE:  E
AND THE SYSTEM WILL: Display the assembly file maintenance edit screen.

Q&A 5-16: What must you do if you want to edit a record other than the one
currently displayed?

SCREEN 5-20: Display the assembly file maintenance edit 
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:03/20/87     Record         30 of       30
 Stock Number For This Assembly
 Assembly Description
 Subassembly/Machine/Labor Component Code
 Number of Units of Subassembly/Machine/Labor Required       .
 Last Updated : 03/20/87
      ******** PRESS ANY KEY TO FINISH EDIT AND RETURN TO SUBMENU
--------------------------------------------------------------------------------
          Enter data at cursor position. Move among fields with
          cursor control keys. Press ENTER to move to next field.
          Press ENTER alone to leave field unchanged.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word assembly".
To me, it shows that the computer (defaults and/or) expects me to
edit the contents of the field that the cursor is presently in.
Next, I want to type  a return because I want to leave the contents the 
same in every field for the record.

PRESS:  [PgDn]  Page Down Key  
AND THE SYSTEM WILL: Accept all current values and redisplay the 
maintenance menu..

Q&A 5-17: What do you enter to leave all fields unchanged?

SCREEN 5-21: Redisplay the maintenance menu
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                >> Production System Assembly File Maintenance <<
                 Today's Date:03/20/87     Record         30 of       30
 Stock Number For This Assembly
 Assembly Description
 Subassembly/Machine/Labor Component Code
 Number of Units of Subassembly/Machine/Labor Required       .
 Last Updated : 03/20/87
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SSTOCKNO
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter that matches one of the options enclosed in the
pointed brackets.
Next,  I want to type "M", because I want to return the system to
the Production and Planning System Menu.

TYPE:  M
AND THE SYSTEM WILL:  Performs the menu program to display  the
desired menu.

Q&A 5-18: What choice do you select to return to the Production menu?

5.3.1.2. REQUIREMENT SCHEDULE FILE MAINTAINANCE
This section describes the requirement schedule file maintainance.

SCREEN 5-22: Performs the menu program to display the desired menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "B", because I want to perform maintenance 
operations on the schedule file.

TYPE:  B
AND THE SYSTEM WILL:  Present the schedule file maintenance 
screen as well as, a sub-menu for maintenance functions.

Q&A 5-19: Why is there a schedule file maintenance?

Comment: The submenu of options at the bottom of the maintenance screen 
controls operation of the maintenance program. An option is requested by 
pressing the letter key associated with that option - the letter 
within the < >.

SCREEN 5-23: Present the schedule file maintenance screen
/-----------------------------------------------------------------------------\
           >> Production System Requirements Schedule Maintenance <<
                 Today's Date:02/12/87     Record          2 of       17
 Manufactured Product Stock Number  CT10000-00
 Number Required     50.00
 Week Required   8.0
 Last Updated : 05/21/86
--------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SKSTOCK
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next, I want to type "K", because I want to change the index key.

TYPE:  K
AND THE SYSTEM WILL:  Display the index key selection screen.

Q&A 5-20: Why would you change the index key?

Comment: Find the item "KEY" in the right hand bottom corner of the screen.
Notice that the active index is SKSTOCK whose key is ASM_STNNO.
Always check this display before choosing any of the options to ensure that 
the correct index is in effect.

SCREEN 5-24: Display the index key selection screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Production System Requirements Schedule Maintenance <<
                 Today's Date:02/12/87     Record          2 of       17
 Manufactured Product Stock Number  CT10000-00
 Number Required     50.00
 Week Required   8.0
 Last Updated : 05/21/86
------------------------------------------------------------------------------
          A. SKSTOCK B. WKREQ
          Press letter of desired key
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word key".
To me, it shows that the computer (defaults and/or) expects me to
enter the corresponding letter of one of the index choices.
Next, I want to type "A", because I want the file index on stock
number.

TYPE:  A
AND THE SYSTEM WILL: Reindex the file by ASM_STKNO(SKSTOCK).

Q&A 5-21: What does the REINDEX command perform?

5.4. PRODUCTION SYSTEM REQUIREMENTS SCHEDULE MAINTENANCE

SCREEN 5-25: Reindex the file by ASM_STKNO(SKSTOCK)
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Production System Requirements Schedule Maintenance <<
                 Today's Date:02/12/87     Record          2 of       17
 Manufactured Product Stock Number  CT10000-00
 Number Required     50.00
 Week Required   8.0
 Last Updated : 05/21/86
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SKSTOCK
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word perform".
To me, it shows that the computer (defaults and/or) expects me to
enter  a  letter  matching one of the  options  enclosed  in  the 
pointed brackets.
Next,  I want to type "F", because I want to find a record in the 
index.

TYPE:  F
AND THE SYSTEM WILL: Display the find screen for schedule file 
maintenance.

Q&A 5-22: What does the FIND command perform?

SCREEN 5-26: Display the find screen for schedule file maintenance
/-----------------------------------------------------------------------------\
           >> Production System Requirements Schedule Maintenance <<
                 Today's Date:02/12/87     Record          2 of       17
 Manufactured Product Stock Number  CT10000-00
 Number Required     50.00
 Week Required   8.0
 Last Updated : 05/21/86
------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR  CT10000-00
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word clear".
To me, it shows that the computer (defaults and/or) expects me to
enter a new search value.
Next, I want to type ^Y, because I want to clear the entry field.

HOLD DOWN:  [Ctrl]
AND PRESS: Y
AND THE SYSTEM WILL:  Clear the entry field.

SCREEN 5-27: Clear the entry field
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Production System Requirements Schedule Maintenance <<
                 Today's Date:02/12/87     Record          2 of       17
 Manufactured Product Stock Number  CT10000-00
 Number Required     50.00
 Week Required   8.0
 Last Updated : 05/21/86
--------------------------------------------------------------------------------
 ENTER SEARCH VALUE. VALUE SHOWN IS FROM THE DISPLAYED RECORD. PRESS
 CTRL-Y TO CLEAR
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word clear".
To me, it shows that the computer (defaults and/or) expects me to
enter a new search value.
Next, I want to type the new search value, because I want to view 
another record which is in the file.

TYPE:  TR10000-00
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Locate and display the sub-menu screen for 
this record.

Q&A 5-23: What will happen if the record is not found?




SCREEN 5-28: Display the sub-menu screen for this record
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
           >> Production System Requirements Schedule Maintenance <<
                 Today's Date:02/12/87     Record          2 of       17
 Manufactured Product Stock Number  CT10000-00
 Number Required     50.00
 Week Required   8.0
 Last Updated : 05/21/86
------------------------------------------------------------------------------
  <F>ind Record  <A>dd Record   <D>elete/Recall  <E>dit Record   Current Active
  <P>rev Record  <N>ext Record  <M>enu (return)  <K>ey Select    Key: SKSTOCK
                    *** NEXT ACTION TO PERFORM
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word peform".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options enclosed in the pointed 
brackets.
Next, I want to type "M", because I want to return to the production 
and planning menu.

TYPE:  M
AND THE SYSTEM WILL: Display the production and planning menu.

Q&A 5-24: Why return to the main menu?

5.4.1. PRINTOUTS FROM THE SYSTEM
This section describes the reports generated by this system.

SCREEN 5-29: Display the production and planning menu 
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU

                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "C", because I want to print the requirements 
schedule.

TYPE:  C
AND THE SYSTEM WILL: Display the entry screen for printing requirements 
schedule.

Q&A 5-25: What does the "Print REQUIREMENTS SCHEDULE option" do?

5.4.1.1. THE REQUIREMENT SCHEDULE
This section describes the requirement schedule report.

SCREEN 5-30: Display the screen for printing requirements schedule
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
          >> Production System Requirements Schedule File Listing <<
                             Today's Date: 02/15/87
 Run Report From The Following FILE  SCHEDULE
 Ordered by the Following INDEX      SKSTOCK
 Using the REPORT FORMAT Named       SCHDLIST
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word file".
To me, it shows that the computer (defaults and/or) expects me to
enter a new filename or press return to accept the default.
Next, I want to enter a return, because I want to use the defaults.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Advance the cursor to the next entry field.

Comment: Although you are given the option to change the file, the program 
will currently only run from the schedule file.

SCREEN 5-31: Advance the cursor to the next entry field
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
          >> Production System Requirements Schedule File Listing <<
                             Today's Date: 02/15/87
 Run Report From The Following FILE  SCHEDULE
 Ordered by the Following INDEX      SKSTOCK
 Using the REPORT FORMAT Named       SCHDLIST
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word index".
To me, it shows that the computer (defaults and/or) expects me to
select an index.
Next, I want to type return, because I want the index to remain 
the same.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Advance the cursor to the next field.

Q&A 5-26: How many indexes does the schedule file have?

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Advance the cursor to the next entry field.

SCREEN 5-32: Advance the cursor to the next entry field
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
          >> Production System Requirements Schedule File Listing <<
                             Today's Date: 02/15/87
 Run Report From The Following FILE  SCHEDULE
 Ordered by the Following INDEX      SKSTOCK
 Using the REPORT FORMAT Named       SCHDLIST
 REPLACE VALUES AT CURSOR, OR JUST PRESS ENTER IF CURRENT REPORT DESCRIPTION
 IS O.K.  'M' HERE RETURNS TO MENU, ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter either "M" to return to menu or any other key to start 
report.
Next, I want to type any other key, because I want to run the 
report.

PRINTER MUST BE ON

TYPE:  Any other key but M
AND THE SYSTEM WILL:  Run the report.

Q&A 5-27: What is the requirements schedule comprised of?

Comment: This report is the facility by which the user can list the 
production schedule for each finished component.

SCREEN 5-33: Run the report
/-----------------------------------------------------------------------------\
             SMITH'S BIKEWORKS REQUIREMENTS SCHEDULE
     Stock Number   Required Week Rqd Last Update
     CT10000-00          50        8 05/21/86
     CT10000-00          50       12 08/25/83
     CT10000-00          50       16 08/25/83
     CT10000-00         300       20 08/25/83
     CT10000-00         300       24 08/25/83
     CT10000-00         300       28 08/25/83
     CT10000-00          50       32 08/25/83
     CT10000-00          50       36 08/25/83
     TR10000-00         200        4 08/25/83
     TR10000-00          50        8 08/25/83
     TR10000-00          50       12 08/25/83
     TR10000-00          50       16 08/25/83
     TR10000-00         200       40 08/25/83
     TR10000-00         200       44 08/25/83
     TR10000-00         200       48 08/25/83
     TR10000-00         200       48 08/25/83
     TR10000-00         200       52 08/25/83

Press any key to continue...
\-----------------------------------------------------------------------------/


Look at the screen, and find the "cursor after the word continue...".
To me, it shows that the computer (defaults and/or) expects me to
press any key to continue.
Next, I want to type any key, because I want to continue.

TYPE:  S
AND THE SYSTEM WILL: Return to the menu.

Q&A 5-28: What Dbase command produces the "press any key to continue..." message?

5.4.1.2. BILL OF MATERIALS
This section describes the report on Bill of Materials.

SCREEN 5-34: Return to the menu   
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I"^P.
Next, I want to type "D", because I want to print the bill of 
materials.

TYPE:  D
AND THE SYSTEM WILL: Display the entry screen for printing bill of 
materials.

Q&A 5-29: What is a Bill of Materials?

Comment: The Bill of Materials is a list of all sub-assemblies and 
components that are required to produce a certain product.

SCREEN 5-35: Entry screen for printing bill of materials
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Production System Bill Of Materials Processing <<
                             Today's Date: 02/15/87
 Produce Bill of Materials For Stock Number
 Produce Bill For Following Mfg. Quantity        1
 REPLACE VALUE AT CURSOR. 'M' HERE RETURNS TO THE PRODUCTION SYSTEM MENU,
 ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word stock number".
To me, it shows that the computer (defaults and/or) expects me to
enter the stock number of the item I want the report for.
Next, I want to type the stock number of the item, because I want 
to see the report on that item.

TYPE:  CT10000-00
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Advance the cursor to the next entry field.

Q&A 5-30: What does the return do?

PRESS:  [<-']  Enter/Return key

Q&A 5-31: What does quantity specify?

SCREEN 5-36: Advance the cursor to the next entry field
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
              >> Production System Bill Of Materials Processing <<
                             Today's Date: 02/15/87
 Produce Bill of Materials For Stock Number  CT10000-00
 Produce Bill For Following Mfg. Quantity        1
 REPLACE VALUE AT CURSOR. 'M' HERE RETURNS TO THE PRODUCTION SYSTEM MENU,
 ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter either "M" or any other key to print.
Next, I want to type any other key, because I want to print report.

PRINTER MUST BE ON 

TYPE:  Any other key but M 
AND THE SYSTEM WILL:  Print the report.

SCREEN 5-37: Print the report
/-----------------------------------------------------------------------------\
SMITH'S BIKEWORKS -- BILL OF MATERIALS            02/15/87            PAGE  1

Stock Num                   Description              Assemblies     Qty. Req'd
CT10000-00  CAR TOP CARRIER 4 BK                 1.00
PRESS M TO RETURN
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word return".
To me, it shows that the computer (defaults and/or) expects me to
type "M".
Next, I want to type "M", because I want to return to menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the main menu for PROD. and Plan.


5.4.1.3. WHERE USED REPORT
This report identifies all the assemblies and components which use a 
particular resource.

SCREEN 5-38: Display the main menu for Production 
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "E", because I want the where used analysis 
report.

TYPE:  E
AND THE SYSTEM WILL:  Display the entry screen for the where used 
analysis report.

Q&A 5-32: What does the "Print WHERE USED Report" option do?

SCREEN 5-39: Production System Where-Used Analysis                                
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Production System Where-Used Analysis <<
                             Today's Date: 02/15/87
 Produce Where-Used Analysis For Stock Number
 REPLACE VALUE AT CURSOR. 'M' HERE RETURNS TO THE PRODUCTION SYSTEM MENU,
 ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word number".
To me, it shows that the computer (defaults and/or) expects me to
enter the stock number.
Next, I want to type the stock number, because I want to see 
where it was used.

TYPE:  SR0005-1.0
AND THE SYSTEM WILL:  Advance the cursor to the next entry screen.

Q&A 5-33: What does the GET function do?



SCREEN 5-40: Advance the cursor to the next entry screen
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Production System Where-Used Analysis <<
                             Today's Date: 02/15/87
 Produce Where-Used Analysis For Stock Number  SR0005-1.0
 REPLACE VALUE AT CURSOR. 'M' HERE RETURNS TO THE PRODUCTION SYSTEM MENU,
 ANY OTHER KEY STARTS THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter either "M" or any other key.
Next, I want to type any other key, because I want to see the 
report.

PRINTER MUST BE ON

TYPE:  ANY OTHER KEY BUT M
AND THE SYSTEM WILL:  Print the Where Used Report.

Q&A 5-34: What does Where Used mean?

SCREEN 5-41: Print the where used report
/-----------------------------------------------------------------------------\
SMITH'S BIKEWORKS -- WHERE-USED ANALYSIS          02/15/87            PAGE  1
Stock Num                    Description              Assemblies     Qty. Req'd
SR0005-1.0  SIDE RAIL 5' X 1"
     TR10000-00  TRAINING ROLLERS                     1.00
                                       Total Requirement For Assembly:     1.00

PRESS M TO RETURN
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word return".
To me, it shows that the computer (defaults and/or) expects me to
enter "M" to return.
Next, I want to type "M", because I want to return to the menu.

TYPE:  M
AND THE SYSTEM WILL:  Display production menu.
 
5.4.1.4. REQUIREMENT ANALYSIS
This report tabulates and lists the components required in production by 
week sequence.

SCREEN 5-42: Display production menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter  matching one of the options enclosed in the 
pointed brackets.
Next, I want to type "F", because I want to print the requirements 
analysis report.

TYPE:  F
AND THE SYSTEM WILL:  Display the entry screen for requirements 
analysis from schedule.

Q&A 5-35: What is REQUIREMENTS ANALYSIS?

SCREEN 5-43: Entry screen for requirements analysis from schedule
/-----------------------------------------------------------------------------\
                      SMITH'S BIKEWORKS INFORMATION SYSTEM
                  >> Production System Requirements Summary <<
                             Today's Date: 02/15/87
 Process Requirements From The File  SCHEDULE
 NOW PROCESSING:
 Assembly  : CT10000-00  CAR TOP CARRIER 4 BK
 Component : RD00001-00  CAR DRIP RAIL HOOK
 For Week  : 28.0
 'M' HERE RETURNS TO THE PRODUCTION SYSTEM MENU, ANY OTHER KEY STARTS
 THE REPORT =>  
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word file".
To me, it shows that the computer (defaults and/or) expects me to
enter a file name.
Next, I want to type return, because I want to use the default.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Advance to the next entry field.

SCREEN 5-44: Advance to the next entry field
/-----------------------------------------------------------------------------\
                  >> Production System Requirements Summary <<
                             Today's Date: 02/15/87
 Process Requirements From The File  SCHEDULE
 NOW PROCESSING:
 Assembly  : CT10000-00 CAR TOP CARRIER 4 BK
 Component : RD00001-00 CAR DRIP RAIL HOOK
 For Week  : 28.0
 'M' HERE RETURNS TO THE PRODUCTION SYSTEM MENU, ANY OTHER KEY STARTS
 THE REPORT =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter an "M" or any other key.
Next, I want to type "M", because I want to return to menu.

TYPE:  M
AND THE SYSTEM WILL: Display the Prod. menu.

5.4.2. CLEANING UP THE SYSTEM
This portion describes how to remove unwanted records from each file the
system maintains.

5.4.2.1. ASSEMBLY FILE CLEAN UP
This section describes the process for deleting unwanted records from the
assembly file.

SCREEN 5-45: Display the Production menu
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "G", because I want to pack the assembly 
file .

TYPE:  G
AND THE SYSTEM WILL: Display the assembly file cleanup screen.

Q&A 5-36: What does the PACK command perform?

SCREEN 5-46: Display the assembly file cleanup screen
/-----------------------------------------------------------------------------\
                 >> Production System Assembly File Clean Up <<
                             Today's Date: 02/15/87
 THIS PROGRAM PERMANENTLY REMOVES RECORDS FLAGGED FOR DELETION FROM THE
 ASSEMBLY FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter either "M" or any other key to pack the assembly file.
Next, I want to type "M", because I want to return to the menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the Prod. menu.

Q&A 5-37: What does the DELETE command do?

Comment: PACK is the command that permanently removes records from the disk 
and reindexes all open index files.

5.4.2.2. SCHEDULE FILE CLEAN UP
This section describes the process for removing unwanted records from the
schedule file.

SCREEN 5-47: Display the Production menu
/-----------------------------------------------------------------------------\
                         >>Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to "I".
Next, I want to type "H", because I want to pack the schedule 
file.

TYPE:  H
AND THE SYSTEM WILL: Display the schedule file cleanup screen.

Q&A 5-38: What does the schedule file cleanup do?

SCREEN 5-48: Display the schedule file cleanup screen
/-----------------------------------------------------------------------------\
           >> Production System Requirements Schedule File Clean Up <<
                             Today's Date: 02/15/87
 SCHEDULE FILE. 'M' HERE RETURNS TO MENU. ANY OTHER KEY STARTS REPACK =>
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the =>".
To me, it shows that the computer (defaults and/or) expects me to
enter either "M" or any other key.
Next, I want to type "M", because I want to return to menu.

TYPE:  M
AND THE SYSTEM WILL:  Display the Prod. menu.

5.4.3. GETTING OUT OF THE SYSTEM
This concludes the documentation on the production planning system.

SCREEN 5-49: Display the Production menu                    
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                         >> Production Planning System <<
                    A. ASSEMBLY File Maintenance
                    B. REQUIREMENTS SCHEDULE File Maintenance
                    C. Print REQUIREMENTS SCHEDULE
                    D. Print BILL OF MATERIALS
                    E. Print WHERE USED Report
                    F. Print REQUIREMENTS ANALYSIS From Schedule
                    G. ASSEMBLY File CLEAN UP
                    H. SCHEDULE File CLEAN UP
                    I. Return to SYSTEM MENU
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
enter a letter matching one of the options "A" to "I".
Next, I want to type "I", because I want to return to system main 
menu.

TYPE:  I
AND THE SYSTEM  WILL:  Display the Smith Bikeworks main menu 
screen.

SCREEN 5-50: Display the Smith Bikeworks main menu screen
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<
                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the word option".
To me, it shows that the computer (defaults and/or) expects me to
enter a letter matching one of the options "A" to"F".
Next, I want to type "F",  because I want to exit the Smith 
Bikeworks information system.

TYPE:  F

SCREEN 5-51: Activity menu  
/-----------------------------------------------------------------------------\
                       SMITH'S BIKEWORKS INFORMATION SYSTEM
                               >> Activity Menu <<
                    A. CUSTOMER INFORMATION System
                    B. HUMAN RESOURCES MANAGEMENT System
                    C. ACCOUNTING System
                    D. INVENTORY MANAGEMENT System
                    E. PRODUCTION PLANNING System
                    F. EXIT From Bikeworks' Information System
                       Press Letter Matching Desired Option  F
(DEMO) .
\-----------------------------------------------------------------------------/

Look at the screen, and find the "cursor after the DEMO .".
To me, it shows that the computer (defaults and/or) expects me to
enter a dbase III plus command.
Next, I want to type "QUIT", because I want to exit Dbase.

TYPE:  QUIT
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Exit dbase.

Q&A 5-39: What does Quit do?

SCREEN 5-52: Exit dbase
/-----------------------------------------------------------------------------\
A>

\-----------------------------------------------------------------------------/

Look at the screen, and find the "A>".
To me, it shows that the computer (defaults and/or) expects me to
take out my diskettes.
Next, I want to remove my disks, because I am done.


























```
{% endraw %}

## FILE1094.TXT

{% raw %}
```
Disk No: 1094
Program Title: System for Business & the Workplace (SBW)  (Disk 1 of 2)
PC-SIG Version: V1.1

SYSTEM for BUSINESS & the WORKPLACE (SBW) is a multifaceted integrated
system that meets many common business needs.  The system has five
different functions and a separate module for each: customer information
system, human resource (personnel) management, accounting, inventory,
and production system.  It also has an extensive documentation manual
covering all five modules.  The system is written in dBase III+ and you
will need dBase III+ to run it.

The Customer File allows you to maintain a complete customer database
including purchase information and demographics about the customer.  You
can even print mailing labels or generate form letters.  With the Human
Resources Management portion of the system you can maintain detailed
personnel records on your employees.  Previous employment history,
personnel reports and payroll are all supported.  The accounting system
is also designed for the small business.  It handles both accounts
payable and receivable.  It will maintain your chart of accounts and
post all expenses and income.  Inventory Management is for either
manufactured goods or raw materials.

Usage:  Business/Educational Database.

Special Requirements:  A printer, and dBase III+.

Suggested Registration:  $10.00

File Descriptions:

CHAP1    TXT  Customer Information System Documentation.
CHAP2    TXT  Human Resources (Personnel) Documentation.
CHAP3    TXT  Accounting Part I Documentation.
CHAP4    TXT  Accounting Part II Documentation.
CHAP5    TXT  Inventory System Documentation.
CHAP6    TXT  Production & Planning Documentation.
PRINTEXT BAT  Batch file to print the tutorial.
READ     ME   How to start.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1094

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       384   3-24-88   3:03p
    CHAP1    TXT     50304   3-21-88   8:00p
    CHAP2    TXT     63488   3-21-88   8:02p
    CHAP3    TXT     45312   3-21-88   8:04p
    CHAP4    TXT     37376   3-24-88   3:36p
    CHAP5    TXT     78592   3-21-88   8:07p
    CHAP6    TXT     67072   3-21-88   8:09p
    DISPLAY  BAT       256   3-24-88   3:05p
    FILE1094 TXT      1899  11-08-88   4:03p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1541   6-08-88   9:02a
    PRINTALL BAT       256   3-24-88   3:29p
    PRINTEXT BAT       256   3-24-88   3:30p
    READ     ME       7936   3-24-88   3:44p
           14 file(s)     354710 bytes
                               0 bytes free
