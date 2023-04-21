---
layout: page
title: "PC-SIG Diskette Library (Disk #1784)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1784/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1784"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SMART CALCULATOR"

    Ever use a calculator or an adding machine? You don't need ANOTHER
    machine. You don't even need a spreadsheet. What you do need is
    SMARTCALC, an intelligent four-function business calculator which can
    double as a state-of-the-art adding machine.
    
    Display only and print display modes share billing with such advanced
    features as automatic repeat, store and recall, freeze display,
    on-line help, date/time stamped tapes, printed tape messages, tape
    entry count, double window, and stored memory display.
    
    The program has a range of -99,999,999.99 to 99,999,999.99.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CALC.DOC

{% raw %}
```
_________________________________________________________________
           
SmartCalc User's Guide                           October 17, 1989
_________________________________________________________________

o TABLE OF CONTENTS:

     Overview ............................................ 1
     General ............................................. 1
     Hardware Requirements ............................... 2
     Registration ........................................ 2
     Installation Procedure .............................. 2
     Configuration ....................................... 3
     Floppy Drive Start-Up Procedure ..................... 3
     Hard Drive Start-Up Procedure ....................... 3
     Tutorial ............................................ 3
     License Statement ................................... 6
     Registration Form ................................... 7

o OVERVIEW:
SmartCalc is an intelligent, non-memory resident, four  function,
business calculator which doubles as  a  state-of-the-art  adding
machine.  SmartCalc has a Display Only and a Print/Display  mode.
SmartCalc features include automatic repeat,  store  and  recall,
"freeze display", on-line help, date/time stamped tapes,  printed
tape messages, tape entry count and a double window  plus  stored
memory display.

o GENERAL:
This version of  SmartCalc  is  distributed  as  user  supported,
Shareware. The user is granted a limited license to use SmartCalc 
and to copy and freely share this program with others, subject to
the provisions of the License Statement.  If you  continue  using
SmartCalc, after a thirty (30) day  evaluation  period,  you  are
required to register. 

Three files CALC.EXE,  CALC.DAT  and  CALC.DOC  must  be  present
before SmartCalc can operate.  Before you begin,  make  a  backup
copy of the  original  disk  and  read  these  instructions.  The
instructions assume that you are familiar with your microcomputer
and have a basic  understanding  of  the  Disk  Operating  System 
(DOS).  



                              - 1 -

The conventions used for the carriage return and escape keys  are
ENTER and ESC. SmartCALC is not case sensitive, either  upper  or
lower case characters may be used. This guide contains five pages
plus a License Statement and  Registration  Form. 

o HARDWARE REQUIREMENTS:
An IBM PC/XT/AT/PS/2 or compatible with a minimum of 256K RAM and
DOS 2.1 or later are required.  

o REGISTRATION:
As a registered SmartCalc user you are eligible to receive update
information and one year of  free  technical  support.  When  you
register, if you do not have the latest version we will ship  you
the most current version.  To register complete the  Registration 
Form, enclose the $20 registration (outside USA $35  US  dollars) 
or applicable site license fee and mail to:

                   Cobrasoft, Inc.
                   4455 Torrance Blvd., Ste 273
                   Torrance, California 90503
                   Telephone: (213)532-6212

o INSTALLATION PROCEDURE:
SmartCalc may be operated from either a floppy or hard drive. The
instructions assume that drive A or C is  used.  If  a  different
drive is used substitute the correct drive designator. 

Installation is not required for floppy drive systems.  If a hard
drive is used, allow 200  kilobytes  of  free  disk  space.  When
creating a directory you must supply a name, CALC or other  valid
directory name may be used.  If a name other than CALC  is  used,
substitute the correct directory name.  To install SmartCalc onto
a directory named CALC, proceed as shown:

1. From the root directory C> prompt type: MD\CALC <ENTER>.
2. From the C> prompt type: CD\CALC <ENTER>.
3. Place the SmartCalc disk in drive A.
4. From the C> prompt type: COPY A:*.* C: <ENTER>. Note the space
   after the Y and second asterisk.





                              - 2 -

o CONFIGURATION:
As delivered, SmartCalc is configured  for  a  black  background,
white text, designated printer port LPT1, plus  red  accents  and
borders.  In nearly  all  cases,  the  default  configuration  is 
satisfactory.  If changes are required, a text editor may be used
to change the defaults.  The CALC.DAT file contains the defaults;
they are listed in the order described.

o FLOPPY DRIVE START-UP PROCEDURE:
1. Place the SmartCalc disk in drive A. 
2. At the DOS A> prompt type: CALC <ENTER>.

o HARD DRIVE START-UP PROCEDURE:
1. At the DOS C> prompt type: CD\CALC <ENTER>.  If a  name  other
   than CALC is used, substitute the correct directory name.
2. At the DOS prompt type: CALC <ENTER>.

o TUTORIAL:
This tutorial consists of two sample  problems  which  cover  the
Print Only and the Print/Display  modes.  Both  problems  can  be
completed in less than ten minutes.

The ten key pad should be used for the exercises.  Some keyboards
have a raised impression to identify the five (5) key, others  do 
not.  If your keyboard does not have a raised impression (on  the
ten key pad), a piece of tape will serve  the  same  purpose.  If 
your results do not agree with the  tutorial,  press  <ENTER>  to 
clear SmartCalc and try again.

Display Only Mode:
1.  Use the appropriate start-up procedure. 
2.  After the SELECT <D>DISPLAY  ONLY  <P>PRINT/DISPLAY  <F1>HELP
    <ESC>QUIT prompt appears, press D.
3.  Note that the mode (Display Only)  appears  above  the  right
    hand window and that the cursor is  positioned  to  the  left
    hand window.
4.  When entries are made, numbers are entered first followed  by
    a sign. The first entry must always be followed by a plus (+)
    or minus (-) sign.  Use the backspace key to  correct  keying
    errors.  Start by entering the first number, type:  165.076+.
    Note that the cumulative  total  is  always  rounded  to  two
    decimal places and that the cursor is moved to  the  leftmost
    position. 

                              - 3 -     

5.  The "freeze display" feature keeps  165.076  visible  in  the   
    left hand window.  If for any reason you are interrupted, the
    last entry is always displayed.  
6.  To subtract 32.09, type: 32.09-. The total should be  132.99.
7.  To multiply by 1.065, type: 1.065*.  The new total should  be
    141.63.
8.  To add 25, type: 25+.  The new total should be 166.63.  It is
    not necessary to enter trailing zeros when an integer or even
    dollar amount is entered.
9.  For the final entry divide by  .025,  type:  .025/.  The  new
    total should be 6665.20.  Note that it is  not  necessary  to
    enter a leading zero for fractional numbers.
10. SmartCalc can accept ten digits plus a decimal point.  Six of
    the ten digits  can  appear  after  the  decimal  point.  For
    general business use,  SmartCalc  can  handle  a  range  from
    -99,999,999.99 to 99,999,999.99. When an overflow or division
    by zero occurs, memory is automatically cleared.
11. To clear SmartCalc, press <ENTER>. Press F1 to view the first
    Help Screen.  Press <ENTER> to view the second  Help  Screen. 
    Note that the sample problems  shown  are  identical  to  the
    tutorial.  When through, press <ESC> to return to the  Smart-
    Calc display.

Print/Display Mode:
A printer is required for the Print/Display  mode.  Before  using
the Print/Display mode check that the printer  is  "on-line"  and
has an adequate supply of paper. Some printers can be set to skip
over the perforation. If a skip is required, consult your printer
manual  and  set  the  printer  according  to  the  manufacturers 
instructions.  If the printer is not adjusted to  skip  over  the
perforation, SmartCalc will print a continuous tape.

1.  Use the appropriate start-up procedure. 
2.  After the SELECT <D>DISPLAY  ONLY  <P>PRINT/DISPLAY  <F1>HELP
    <ESC>QUIT prompt appears, press P.  Note that the  cursor  is
    positioned at the message prompt.  Up to 30 characters may be
    entered. 
3.  Type any brief message then press <ENTER>. The message prompt
    may be bypassed by  pressing  <ENTER>.  Note  that  the  mode
    (Print/Display) appears above the right hand window and  that
    the message is displayed beneath the windows. 



                              - 4 - 

4.  When entries are made, numbers are entered first followed  by
    a sign. The first entry must always be followed by a plus (+)
    or minus (-) sign.  Use the backspace key to  correct  keying
    errors.  Begin by entering a negative number, type:  234.87-.
5.  If all has gone well a date/time stamp, message, number, sign
    and cumulative total will be printed on the tape.  Note  that
    the number is printed with six decimal places while the total
    is rounded to two decimal places. 
6.  The "freeze display" feature keeps  234.87-  visible  in  the   
    left hand window.  If for any reason you are interrupted, the
    last entry is always displayed.  
7.  To store 450 in memory and add it to the total, type:  450+S.
    It is not necessary to enter trailing zeros when  an  integer
    or even dollar amount is entered.  The new  total  should  be
    215.13.  Note that the stored number is displayed  above  the
    left hand window.
8.  To multiply by 1.7654, type: 1.7654*. The new total should be
    379.79.
9.  To recall 450 from memory and add  450,  type:  R+.  The  new
    total should be 829.79.  When a number has been recalled  and
    a backspace or keying error occurs, the  recalled  number  is
    deleted from the left hand window.
10. To add 450 again, type: +.  The new total should be  1279.79. 
    Note that an automatic repeat was used.
11. To multiply by 450, type: *. The new total, after the repeat,
    should be 575905.73.
12. To clear SmartCalc press <ENTER>.  Review the tape  and  note
    that the audit trail includes the entry, arithmetic operator,
    cumulative total and the number of entries. 
13. When Smartcalc is cleared from the  Print/Display  mode,  the
    CHANGE MESSAGE (Y/N) prompt will appear. If the message is to
    be repeated type: Y otherwise type: N.  Note that if the mode
    is changed to Display Only, the message is erased.
14. When through, press <ESC> to return to the SmartCalc display.
15. Press <ESC> to quit SmartCalc and exit to DOS. 









                              - 5 -

o LICENSE STATEMENT:
By using this software the user agrees to accept a non-exclusive,
limited license to use the software on any  single  computer  and
has permission to copy and freely share the software with  others
subject to the following provisions:

1. This version of the software is distributed as user  supported
   Shareware. It is entirely supported by user registration fees.
   Should the software be used beyond a thirty (30) day  evaluat-
   ion period, you are required to register.  Registration infor-
   mation and a Registration Form are contained in other sections
   of this file.
2. The software and/or documentation may be uploaded to  bulletin
   boards and can be used by clubs, schools or  other  non-profit 
   groups for educational purposes only.  When used  for  educat-
   ional purposes, one (1) copy must be registered for each fifty 
   (50) student copies distributed.
3. The software and/or documentation may not be sold  for  profit
   by other than Cobrasoft authorized  dealers.  When distributed
   as Shareware or for educational purposes,  reasonable  charges
   may be applied. 
4. The software and/or documentation may not be rented or leased.
5. The software and/or documentation may not be  distributed,  in
   whole or in  part, with  any  product  or  service  without  a
   commercial distribution and/or site license.

The software and/or documentation are distributed  "as  is".  The
software and/or  documentation  are  subject  to  change  without
notice and does  not  represent  a  commitment  on  the  part  of
Cobrasoft, Inc.  Cobrasoft, Inc. specifically disclaims all warr-
anties, either expressed or implied, including  but  not  limited 
to implied warranties of merchantability and fitness for a  part-
icular purpose.  In no event will Cobrasoft, Inc. be  liable  for
any loss of profit or other damage, including but not limited  to 
special, incidental, consequential, commercial or other damages.

This Statement shall be governed by  the  laws  of the  state  of
California, be submitted to  binding  arbitration,  or  use  such
other law as may be required to protect the legitimate  interests 
of Cobrasoft, Inc.




                              - 6 -    


=================================================================
                        Registration Form                        
=================================================================

Name:__________________________ Company:_________________________

Address:_______________________________________ Date:____________

City:____________________________ State:__________ ZIP:__________

Country:_____________________________ Phone:_____________________

Program Name:_________________________________ Version:__________

Number of Terminals/Computers Registered:______ Media Size:______

Amount Enclosed:________ Form of Payment(Cash/Check/Other):______

Site License Fees (License effective as of the date shown above):
                     
          1 through 25 Terminals/Computers  $20 per copy         
         26 through 50 Terminals/Computers  $18 per copy 
         51 through 75 Terminals/Computers  $16 per copy
         76 or more    Terminals/Computers  $14 per copy

Remarks/Comments:________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
=================================================================
Cobrasoft Inc., 4455 Torrance Blvd., Ste 273, Torrance, CA  90503
=================================================================




                              - 7 -

```
{% endraw %}

## FILE1784.TXT

{% raw %}
```
Disk No: 1784                                                           
Disk Title: Smart Calculator                                            
PC-SIG Version: S1                                                      
                                                                        
Program Title: Smart Calculator                                         
Author Version: 2.0                                                     
Author Registration: $20.00                                             
Special Requirements: Printer Recommended.                              
                                                                        
Ever need to use a calculator or an adding machine?  You don't need     
another machine.  You don't need a spreadsheet.  What you do need is    
SmartCALC.                                                              
                                                                        
SmartCALC is an intelligent four function business calculator which     
doubles as a state-of-the-art adding machine.                           
                                                                        
Display Only and Print Display modes share billing with such features   
as automatic repeat, store and recall, "freeze display", on-line help,  
date/time stamped tapes, printed tape messages, tape entry count and a  
double window plus stored memory display.                               
                                                                        
The program has a range of -99,999,999.99 to 99,999,999.99.             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1784

     Volume in drive A has no label
     Directory of A:\

    CALC     DAT        14   7-12-89   7:39p
    CALC     DOC     14473  10-17-89   8:06a
    CALC     EXE    100023   7-12-89   7:36p
    FILE1784 TXT      2073  12-20-89   5:32p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-20-89   5:38p
    README   DAT        11  10-17-89   8:02a
    README   EXE     48396  10-14-89   4:43p
            8 file(s)     165568 bytes
                          150528 bytes free
