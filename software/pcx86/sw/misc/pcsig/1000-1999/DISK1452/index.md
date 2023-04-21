---
layout: page
title: "PC-SIG Diskette Library (Disk #1452)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1452/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1452"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROPMAN  3 OF 3 (ALSO 1179, 1180)"

    PROPMAN will do property management accounting and record keeping for
    individual owners with up to 50 rental units.  These may be 50
    individual houses or one 50-unit building or any combination in between.
    Financial records are kept individually for each building.  PROPMAN is
    an on-line accounting system.  All data is updated throughout the system
    each time new information is entered.  Displays and reports are always
    current.  There are no transactions to post or trial balances to run.
    PROPMAN maintains monthly and year-to-date data about properties.
    Historical data is also kept about past tenants.
    
    PROPMAN does move-in and move-out prorates, calculates mortgage
    payments, schedules rent changes and can also print three-day notices
    and rent change notices.
    
    PROPMAN is completely menu-driven and has on-line help to guide you
    through its operation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEMO.DOC

{% raw %}
```
               PropMan - residential property management software
                               309 S. Ynez Ave.
                         Monterey Park, CA 91754-3203
                                (818) 570-1071




                          PropMan self-running demo

      Short instructions

           The demo may be run directly from the floppy disk. Put the
      floppy in drive A and enter the command A:PMDEMO. When the demo
      is finished it will redisplay the initial screen. Press the <Esc>
      key to return to DOS.


      Rest of the information

           The entire demo is in the sub-directory PMDEMO. To run the
      demo from a hard disk, copy all of the files from the sub-directory
      PMDEMO to a sub-directory on the hard disk, change to the
      sub-directory and enter the command PMDEMO.

        There are two ways to run the demo. The PMDEMO command runs the
      demo one time through, redisplays the initial screen and then waits
      to be restarted. The command PMDEMOLP (LP as in loop) only displays
      the initial screen one time. It then runs the demo continuously
      until stopped.

           There are four control operations.

           1) When the initial screen is displayed, press any key except
              <Esc> to start the demo. 
           2) When the initial screen is displayed, press <Esc> to return
              to DOS.
           3) When the demo is running, press the space bar see the next
              display without waiting for the timer.
           4) When the demo is running, press <Alt> Q to restart the demo
              with the initial screen.

           To break the demo while it is running, press <Alt> Q to get the
      initial screen back and then press <Esc>.


      To anyone who sees this

           If this demo has been useful, let us know. If there are things
      that would make it more useful, let us know. Thanks. 
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```




                                    PropMan

                   Residential Property Management Software









                                REFERENCE MANUAL

                                      for

                      Shareware Property Management System


















                            PropMan REFERENCE MANUAL
                            (C) Copyright 1986,1988
                                      by
                      G. Curtis Feger and Jeffrey G. Gobel


                                PropMan Software
                            (C) Copyright 1986,1988
                                      by
                      G. Curtis Feger and Jeffrey G. Gobel
                                 309 S. Ynez Ave.
                           Monterey Park, CA 91754-3203
                                  (818) 570-1071




                                  Copyright

                     PropMan  software  is  copyrighted.  This
                REFERENCE  MANUAL   is  copyrighted.   Illegal
                copying  of  either  is  a  violation  of both
                criminal and civil law.




                                  Shareware
                                     and
                               Copy Protection

                     The shareware copies  of PropMan software
                are  clearly  marked  as  shareware  in  their
                startup messages. Only copies so marked may be
                given to others. 

                     The  shareware  copies  of  the reference
                manual  are  clearly  marked  on  their  title
                pages.  Only copies so marked  may be given to
                others. 

                     PropMan software is not "copy protected".
                We  do not  copy protect  our software for the
                simple  reason  that  such  schemes  give only
                minor  protection against  illegal copying but
                cause major inconvience to legitimate users.

     The following is an excerpt from our bound reference manual. An *
     denotes those sections or partial sections which are included here.


                             Table of Contents 


               SECTION                                Page 

             *   1   Read Me First  . . . . . . . . . 1 - 1 
             *   2   Using PropMan. . . . . . . . . . 2 - 1 
             *   3   General Information  . . . . . . 3 - 1 
                 4   Menus and Screens  . . . . . . . 4 - 1
                     Main Menu  . . . . . . . . . . . 4 - 2
             *       Daily Operations . . . . . . . . 4 - 4
                     Month End Operations . . . . . . 4 -22
                     On Demand Operations . . . . . . 4 -31
                     System Maintenence . . . . . . . 4 -36
                     Reference Listings . . . . . . . 4 -55
                     Archive Review . . . . . . . . . 4 -60
                     New System Setup . . . . . . . . 4 -63
                 5   Errors . . . . . . . . . . . . . 5 - 1 


                APPENDICIES 

                 A  Installing PropMan  . . . . . . . A - 1 
                 B  Archiving and Backups . . . . . . B - 1 
                 C  Menus and Screens . . . . . . . . C - 1
                 D  Freeform Letters and Notices  . . D - 1 
                 E  On Screen Calculator  . . . . . . E - 1 
                 F  Error Messages  . . . . . . . . . F - 1 
                 G  License Agreement . . . . . . . . G - 1




               Ver 2.0 
               (C) 1988 G. Curtis Feger/Jeffrey G. Gobel



                                 READ ME FIRST 


                The PropMan residential property management software 
           was  designed  specifically   for  property  owners   and 
           managers.  It  provides  these  people with an accounting 
           system to handle  financial transactions in  a consistent 
           manner for  all properties  under their  control. Yet  it 
           keeps  the  information  separate  for  each property for 
           individual reporting and income and expense analysis. 

                PropMan has  its reference  manual and  instructions 
           built  in.   Anytime  PropMan  is  in  use,  one  or  two 
           keystrokes will bring the reference manual to the screen.  
           In an  afternoon you  can begin  using PropMan.

     THIS BOOK 

                The section  "Using PropMan"  explains starting  and 
           stopping  PropMan.    It  also   explains  the   built-in 
           reference manual and how the Menus and Function Keys  are 
           used to  control PropMan's  actions. It  will show  a new 
           user how to begin operating the PropMan system. 

                The   "General   Information"   section  covers  the 
           accounting and record keeping done by PropMan. This  will 
           introduce you to the terms and concepts involved and also 
           explain the over-all organization of PropMan. 

                "Menus and Screens"  is the detailed  description of 
           each field on each display. 

                The section  "Errors" describes  the types  of error 
           indications used by PropMan. 

                The APPENDICES contain information that some persons 
           may   find   helpful.   Appendix  A - Installing  PropMan 
           explains  how  to  install  the  system in your computer. 
           Appendix B - Archiving  and Backups discusses  what these 
           operations are, why  and how often  they should be  done. 
           Appendix C - Menu and  Screen Displays contains copies of 
           the   various   displays   used   by   PropMan.  Appendix 
           D - Freeform Letters  and Notices  explains how  to write 
           custom notices or mass mailings.  Appendix E - On  Screen 
           Calculator   explains  the  operation  of  the  built  in 
           calculator.    Appendix   F - Error   Messages    is   an 
           alphabetical list  of the  error messages.  Appendix G -  
           License Agreement  is a copy of the agreement under which 
           you use PropMan.



                                USING PropMan 


                This  section  is  an  introduction  to  the  actual 
           operation of the PropMan system. Its purpose is to get  a 
           new user started quickly. It  will show you how to  start 
           and stop the system, how to ask PropMan for help and  how 
           to read  the displays.  If possible  follow along  on the 
           computer as you read this section. Figures referred to in 
           this section are in appendix C. 

                For more information  on the displays  or operations 
           see  section  4.  Or,  if  you  are  running  the PropMan 
           program, use  the Help  function, covered  below in  this 
           section, to call up reference material on how to use  the 
           system. 

                PropMan uses Menus and Function Keys to control  its 
           operation.  Menus  are  simply  lists  of  operations  or 
           categories of operations that can be performed. The  user 
           selects from the list. Function Keys are used to  request 
           certain features and to call up various data displays. 

     STARTING PropMan 

                The computer  must always  be set  with the  current 
           date  and  time  when  running  PropMan.  If  these   are 
           incorrect, PropMan can make serious miscalculations. 

                From the main or root directory, type in the command 
           PROPMAN  (note:  all  one  word)  and  press the Enter or 
           Carriage Return  key. The  PropMan system  will load  and 
           then display the Main Menu. 

     STOPPING PropMan 

                PropMan uses  a single  key for  all exits  or ends.  
           The Escape  key (Esc)  exits whatever  operation is being 
           performed at the time. An Escape from a data entry screen 
           redisplays the  menu that  the screen  was selected from. 
           Escape during  a Help  display removes  that display.  An 
           Escape from a menu causes a redisplay of the next  higher 
           menu,  until,  at  the  Main  Menu, Escape will cause the 
           PropMan system to stop running and return control to DOS. 

                Escape is not a break  or a reset. It is  the normal 
           exit for all operations. It  will NOT stop in the  middle 
           of  interconnected  operations.

                NEVER SHUT THE POWER  OFF WHILE PropMan IS  RUNNING. 
           First, use  the Escape  to exit  completely from PropMan, 
           then  shut  down  the  computer.  If  power is lost while 
           PropMan is running, it may cause no problem; it may cause 
           some minor data loss; or  it may cause serious errors  in 
           the  recordkeeping.  There  is  no  way to tell until the 
           system  is  restarted  and  the  data  examined in minute 
           detail.   If  a  power  failure  occurs  while PropMan is 
           running  the  wisest  action,  by  far, is to restore the 
           system from the most recent backup and re-enter the  lost 
           data.  This  is  an  important  reason for making regular 
           system backups (see Appendix - B). 


     HELP - F1 

                Figure C-2 (Appendix C) shows the Help displays. The 
           HELP function is a reference manual that is available  at 
           all times.  For HELP  press the  F1, or  Function 1, key. 
           Anywhere in  the system,  help may  be requested  and the 
           reference   material   for   those   operations  will  be 
           displayed. Even novices can use any of PropMan's features 
           very easily  by selecting  the desired  features and then 
           accessing these built in instructions. 

                When F1 is  first pressed a  graphic display of  the 
           function  keys  is  shown  on  the  screen.  (Only  F1 is 
           discussed  here,  the   function  key  display   and  the 
           remainder of the function keys are covered later in  this 
           section under "FUNCTION KEYS"). The key display will vary 
           but the key F1 is always labeled MORE. 

                For  MORE  help  press  F1  a  second  time. The key 
           display is removed  and a window  appears on the  screen. 
           PropMan will begin to display detailed information  about 
           the current cursor position. On menus, an explanation  is 
           given of  what will  happen if  the action  at the cursor 
           location is selected. On  data entry or display  screens, 
           detailed  information  is  given  about  the  data at the 
           cursor location.  HELP will  also explain  how this  data 
           relates to other data on  the screen or to data  on other 
           screens. 

                Often there  is more  than a  single window-full  of 
           information. In this  case, the word  "MORE" is shown  as 
           the last word on the last line in the window. Press F1 to 
           see  the  next  window-full  of  material.  This  can  be 
           continued until  all windows  have been  seen, or  can be 
           stopped. Use the Escape key to exit the Help operation at 
           anytime.  

                When an operation  is to be  performed, Help can  be 
           requested  on  the  various  menus  to locate the correct 
           section of PropMan. Help  can then be requested  from the 
           data  screen  itself  to  lead  the  operator through the 
           process. Anytime  there is  any question  about where you 
           are, what is  needed or how  to do some  operation, first 
           press F1. 

     SCREEN DISPLAYS 

                Figure  C-1  (Appendix  C)  shows the general screen 
           format. Always  shown at  the top  of the  screen are the 
           system  owners  name,  the  current  processing  month or 
           archive review month the  current date and time.  Most of 
           PropMan's operations are  performed on a  single building 
           at a time. During  these operations, the building  number 
           and name also are in the heading. 

                The middle portion of  the screen contains the  menu 
           or data entry display  for whichever PropMan activity  is 
           in progress. 

                At the bottom of each screen are two message  lines. 
           The last line is a  data entry prompt.  It specifies  the 
           type of  input allowed  at the  current cursor  position.  
           The line above these prompts is for error messages.  When 
           an entry is  rejected PropMan will  tell you why.   Error 
           messages are removed  when the next  key is pressed.  See 
           section 5, Errors and Appendix F, Error Messages. 


     MENUS 
                PropMan has small and relatively few menus. This  is 
           because PropMan performs  so many actions  automatically, 
           based  on  data  entered  by  the  user.  These automatic 
           actions do not need  to be specifically requested  from a 
           menu. 

                Each of the selections  from the Main Menu  leads to 
           another  menu.  The  selections  from  these second level 
           menus lead to the screens used to enter data and  control 
           operations.  

                Notice that the data  entry prompt at the  bottom of 
           the menu  screen tells  how to  select an  item from  the 
           menu. Move the cursor by using the up and down arrows  or 
           by keying  the first  letter of  the desired  item.  Then 
           press the Enter or Carriage Return key.  The next menu or 
           a data display will appear. 

                For  more   information  about   any  of   the  menu 
           selections, move the cursor to that selection and call up 
           HELP by pressing the F1 key. 


     DATA ENTRY SCREENS / CONTROL SCREENS 

                After the desired action has been selected from  the 
           menus, you can begin reviewing or entering data, or start 
           the desired operation.  It is these  screens that do  the 
           work of PropMan. Examples: 1) To work on payables, select 
           "Daily  operations"  from  the  Main  menu  (C-3); select 
           "Invoices" from  the Daily  menu (C-4).  The Invoice data 
           entry screen (C-5) is displayed. You may now review,  add 
           or change invoices. 2) to close out the accounts at month 
           end, Select  "Month end  operations" from  the Main  menu 
           (C-3); select  "Close out  accounts" from  the Month  end 
           menu  (C-13).  The  Month  end  close  screen  (C-17)  is 
           displayed.  You  may  now  initiate  the  month end close 
           operation. 

     COLOR USAGE 

                 PropMan  does not  require a  color display  but is 
           designed  to  take  full  advantage  of  color  if  it is 
           available on your system.  For a complete description  of 
           the  color  coding  scheme  and  color selection, see the 
           System Parameters screen in section 4; or select  "System 
           maintenance"   from   the   Main   menu,  select  "System 
           parameters" from  the System  maintenance menu,  then ask 
           for HELP (use  F1) on the  Colorset and Color  items. See 
           figure C-38. 

                Color coding is used to show different categories of 
           information in different colors. The operator can tell at 
           a glance what type of information is being displayed. For 
           example, colorset number 3  uses the full range  of color 
           coding available. The examples here refer to figure  C-5, 
           an Invoice screen.  When  using this colorset the  screen 
           and menu titles are in  bold colors to set them  off from 
           the data. The  labels identifying the  data are in  white 
           (ie. "Invoice  Number:", "Distribution  Amount") and  the 
           data itself is in black (ie. "6", "500.00"). 

                In  addition,  there  are  two  kinds  of data being 
           displayed. Data that can  be directly entered or  changed 
           from the current  screen is black  on a white  background 
           (ie. invoice amount, distribution account number).  There 
           is also data  that is calculated  by PropMan for  display 
           only. This  is black  on a  green background  (ie. vendor 
           name, on hold date). 

                The cursor will  not move to  every position on  the 
           screen. It moves only to those items that may be  entered 
           or changed. Data for  display only is inaccessible.  This 
           may be  historical data  or data  calculated by  PropMan. 
           Data that is accessible at one time may not be accessible 
           at another.  On  the Invoice screen  most of the  data on 
           the screen can be  accessed anytime until the  invoice is 
           paid. After payment no changes may be made at all. 

                This distinction between accessible data and display 
           only data  is one  use of  the color  coding.  When using 
           colorset number  3 mentioned  above, positions  where the 
           cursor will move are the black data on white  background. 
           The remainder of the  data is black on  green background. 
           As the status of the data changes between accessible  and 
           inaccessible, the color coding will change also. 

     ENTERING AND CHANGING DATA 

                The same data display screens are used to enter  new 
           data and to change data previously entered. To enter  new 
           data a  "NEW" or  blank screen  is called  up. To  change 
           existing data, the data is  called to the screen and  the 
           new values  entered. For  instructions go  to the desired 
           screen and ask for HELP (use F1). 

                Information  may  be  entered  in  any sequence. The 
           enter (or Carriage Return), the forward and backward  tab 
           and the up, down, left  and right arrow keys are  used to 
           move  the  cursor  around  the  screen.  As  each item is 
           entered it is edited. Any errors are rejected immediately 
           by PropMan. If an entry impacts other data on the  screen 
           that data will be changed as necessary to stay in step. 

                The user may make as many changes as desired on  the 
           screen. As  long as  the data  remains on  the screen  no 
           permanent  changes  have   been  made.  Then,   when  the 
           operation is terminated or  a new display is  called for, 
           PropMan saves  the final  values. No  special command  is 
           needed to save the data. If you enter or change data on a 
           screen and  then leave  the screen,  PropMan assumes that 
           the data is to be saved and acted upon. Up until the time 
           this save  takes place  the user  may cancel  all of  the 
           changes he has made and redisplay the original data  (see 
           "Function Keys" below). 

                As soon as data is saved by PropMan, it is reflected 
           in  all  appropriate  areas  of  the  system.  No further 
           operations or instructions  are required to  tell PropMan 
           to  process  the  information.  As  an  example, when the 
           receipt of a deposit  is entered on the  Tenant Financial 
           screen, all of the following items will immediately  have 
           new values to reflect this deposit: the tenant's  deposit 
           balance, the building's  deposit balance, the  building's 
           deposit income account, and the owners earnings. This  is 
           done for both current month and year-to-date values. 


     FUNCTION KEYS 

                Function  keys  are  used  to  manipulate  data on a 
           screen and to move  between screens that contain  related 
           data. They  control actions  that immediately  operate on 
           the screen or on data being displayed. The function  keys 
           give flexibility and control over the detailed actions of 
           PropMan. 

                PropMan  recognizes   two  different   function  key 
           layouts. The  IBM XT  style keyboard  has keys  marked F1 
           through F10 on the left side of the keyboard. The IBM  AT 
           style keyboard has keys marked F1 through F12 across  the 
           very top of the keyboard. The keyboard style is specified 
           on the System parameters screen. All of the functions are 
           available on either keyboard. The uses of the  particular 
           keys are  not the  same, however.  The descriptions below 
           show  how  to  use  the  functions  from either keyboard. 
           Figure C-2  shows the  Help display  of the  function key 
           layout. 

               The functions and keys: 

           10 Key      12 Key 

             F1 - Help - F1     The  HELP  function  is  a reference 
                                manual  that  is  available  at  all 
           times. When  F1 is  first pressed,  a graphic  display of 
           these function keys is shown  on the screen.  Not all  of 
           the keys are labeled every time they are shown. Only  the 
           keys that are currently  active have labels. Keys  F1, F2 
           and Esc are always active and always labeled. The  labels 
           for keys  F3 through  F10, are  determined by  the cursor 
           position. Only active  keys are shown  and the labels  on 
           the  keys  match  the  screens  and fields being entered. 
           Pressing  F1  a  second  time  calls  up  more   detailed 
           information about the current activities (see "HELP - F1" 
           above, in this section). When using Help remember to  use 
           the  Esc  key  to  exit  from  the  Help  function before 
           pressing another function key. 

           10 Key      12 Key 

             F2 - Calc - F2     Calls a three memory calculator onto 
                                the screen. This is available at all 
                                times and can  be moved to  any spot 
                                on the screen. See appendix E. 

           10 Key                12 Key 

             F4  - Clear "field"  -  F9 
             F6 - Restore "field" - F10     In operation, "field" is 
                                            replaced  by  the actual 
           name of the field at the current cursor location. A field 
           is any one  thing of interest.  The Building Number  is a 
           field. The  Building Name  is a  field. Each  line in  an 
           address is a field,  as are phone numbers,  tenant names, 
           and so on. The Clear function sets the field to zeros  or 
           blanks  as  appropriate.   The  Restore function sets the 
           field back to its  most recently saved value.  These keys 
           are active only when the cursor is on a data field. 

           10 Key                12 Key 

             F3  - Clear screen -  F5 
             F5 - Restore screen - F6     A screen displays a  group 
                                          of fields that pertain  to 
           each other.  The Clear  function sets  all fields  on the 
           screen to blank or zero. Remember the original values are 
           not lost until new values  are stored when you leave  the 
           screen. The Restore function discards all of the data  on 
           the  screen  and  sets  all  fields  back  to  their most 
           recently saved values. These keys are only active on data 
           entry screens. 

           10 Key                        12 Key 

             F7 - "Previous type" screen - F3 
             F9  -  "Next type" screen  -  F4     In       operation 
                                                  "Previous    type" 
           and "Next type" are replaced  by the actual names of  the 
           screens.  Some groups of  related data are so  large that 
           they will  not fit  in a  single display.  In these cases 
           multiple screens are used. The screen type is the name of 
           the format or layout of the screen. 

                For example:  PropMan records  three screens  (three 
           different screens-full) of information about each tenant, 
           the Tenant Financial activity, Tenant Payment History and 
           Tenant   Personal   information   screens   (see  figures 
           C-6,7,8). When Tenant Activity is selected from the Daily 
           menu, the Tenant Financial activity screen is  displayed. 
           Using the Help function (press F1) displays the  function 
           keys. The Previous Type key is labeled "Prsnl scrn";  the 
           "previous  type"  of   screen  is  the   Tenant  Personal 
           information screen. The Next Type key is labeled  "PmtHst 
           scrn"; the "next  type" of screen  is the Tenant  Payment 
           History screen. 

                These keys  are only  active if  there are  multiple 
           screen types. When there  are, the titles of  the screens 
           include  a  note  such  as  "(Tenant  scrn  1 of 3)" as a 
           reminder that the other screens are also available. 


           10 Key                   12 Key 

             F8 - Previous "screen" - F7 
             F10  - Next "screen"  -  F8     In  operation  "screen" 
                                             is   replaced   by  the 
           actual name of the screen. These functions do not  change 
           the  screen  format.  They  allow  calling  the  next  or 
           previous  group  of  information  with  the  same format. 
           Whatever is named in the title of the screen is the group 
           these functions  operate on.  Examples: 1) in  the Vendor 
           List the next or previous vendor's data will be shown; 2) 
           on a unit  screen, data about  the next or  previous unit 
           will be shown. These keys are only active when such  data 
           exists. 

             10 Key                        12 Key 

           F8(Shift) - Previous "field" - F9(Shift) 
           F10(Shift)  - Next "field" -  F10(Shift)     In operation 
                                                        "field"   is 
           replaced by the actual name  of the field at the  current 
           cursor location. When these functions are available,  the 
           "field" name used  here will be  the same as  the "field" 
           name  used  for  the  Clear  "field"  and Restore "field" 
           functions. 

                On some screens there  are fields whose values  have 
           an inherent  sequence of  their own,  independent of  the 
           other data on the  screen. The Next and  Previous "field" 
           functions allow these fields to be stepped through  their 
           values.  Examples  of   these  fields:  1)   the  Account 
           Corrections are in order by correction number but on that 
           screen Acct can be stepped through in sequence (... 1430, 
           1440, 1450, ... )  for any correction (see  figure C-25); 
           2) Invoices are in  order by invoice  number but on  that 
           screen Vendor  can be  stepped through  in vendor  number 
           sequence 1, 2, 3, ...  for any invoice (see figure  C-5); 
           3) data for tenants is kept  in order by unit but  on the 
           Tenant Financial screen the Tenant Name can be stepped to 
           see previous tenants in the same unit (see figure C-6). 

                These keys  are only  active if  the cursor  is on a 
           field  that has  such stepping.  Whenever these functions 
           are available the Input Message includes the note "(Prev/ 
           Next)" to remind you. 

     For the 10 function key keyboard: 

           *   Always available: 

               Esc - Escape 
               F1 - Help 
               F2 - Calculator 

           *   Available during data entry: 

               F4 - Clear "field" 
               F6 - Restore "field" 
               F3 - Clear screen 
               F5 - Restore screen 
               F8 (shift) - Previous "field" (some fields) 
              F10 (shift) - Next "field" (some fields) 

           *   Available when multiple displays exist: 

               F7 - "previous type" screen 
               F9 - "next type" screen 
               F8 - Previous "screen" 
              F10 - Next "screen" 

     For the 12 function key keyboard: 

           *   Always available: 

               Esc - Escape 
               F1 - Help 
               F2 - Calculator 

           *   Available during data entry: 

               F9 - Clear "field" 
              F10 - Restore "field" 
               F5 - Clear screen 
               F6 - Restore screen 
               F9 (shift) - Previous "field" (some fields) 
              F10 (shift) - Next "field" (some fields) 

           *   Available when multiple displays exist: 

               F3 - "previous type" screen 
               F4 - "next type" screen 
               F7 - Previous "screen" 
               F8 - Next "screen" 



                              General Information 


                This  section  describes  the  record  keeping   and 
           accounting done  by PropMan.  Its purpose  is to  explain 
           PropMan  as  a  rental  management system without getting 
           overly involved in the details of the computerization  or 
           computer operation aspects. 

                PropMan keeps information at several levels. Some is 
           universal, used for all  buildings, tenants, etc. in  the 
           system. Other information is building specific. And other 
           information  is  recorded  on  a  per  unit or per tenant 
           basis. 


     UNIVERSAL DATA 

                The PropMan  Registered   Property Management System 
           is  designed for use by persons who own and manage a  few
           properties.   Each  building  is  a  completely  separate 
           accounting  or  financial  entity.  Buildings have unique 
           numbers between 100 and 999. The system will handle up to
           50 units. That may be one 50 unit building or 50 one unit
           buildings or any combination inbetween.

                In PropMan a vendor  is anyone to whom  invoices are 
           charged. There  is a  single  vendor  file  used  by  all
           buildings. The file can  have 9999  vendors.  You may use
           different vendors for each building if desired, but  they
           will  all  be  kept in one file.  PropMan  assigns vendor
           numbers in sequence. 

                PropMan has a common chart of accounts to define the 
           names and  numbers of  the accounts.  Each building   has
           separate  financial   information  but   uses  the   same
           categories to organize  it.  

                In the Chart of Accounts  accounts are numbered from
           1200  to  2850  by  10's.  The  even hundreds are summary
           accounts and their names cannot be changed. The remainder
           are detail  accounts. Most  detail  account  names can be
           changed at will. 

                All  accounting  charges  are  made  to  the  detail 
           accounts. Summary  accounts cannot  be charged  directly. 
           Their value is  always the total  of all of  their detail 
           accounts. 

                PropMan operates by account number so charges to  an 
           account (1580  or 1310  or etc.)  remain charges  to that 
           account independent of any  name it might be  given. Each 
           building has seperate accounting data. 

                The  detail  accounts  with  fixed  names have fixed 
           uses.  PropMan must have these accounts available to  use 
           as part of its automatic operations. Most of the mortgage 
           expense accounts, some of  the income accounts and  a few 
           others are fixed.  

                The  numbered  accounts  are  all  monthly  activity 
           accounts. They have no  running balances. In addition  to 
           these  are  15  balance  accounts.  There  are 5 mortgage 
           principal,  5  deposit,  and  5 reserve balance accounts. 
           These  balance  accounts  keep  running  balances for the 
           income and  expense transactions  in their  corresponding 
           activity accounts. For example; activity account 2010 1st 
           Trust Deed Principal records how much was paid toward the 
           principal in a given  month, and the balance  account 1st 
           Trust Deed Balance is the amount still owed. 



     BUILDING INFORMATION 

                The  building  is  the  major  entity  around  which 
           PropMan is organized.  Each building's financial  records 
           are serarate from all others. Buildings may use the  same 
           vendors, but are not required to. 

                When a building is  entered in the system,  the user 
           assigns  a  number  in  the  range  100-999.  They may be 
           assigned in  any order  desired but  must be  unique. For 
           each  building  there  is  a  physical   description  and 
           information on reserves, mortgagees and so on. There is a 
           list of the units in  the building and a list  of tenants 
           for  each  unit.  Each  building  has  its  own invoices, 
           corrections and  its own  year-to-date and  month-to-date 
           accounting data and archives. 

                The building is  an accounting grouping.  If several 
           physically distinct buildings are  to be grouped and  run 
           as a whole, you may call them by a single building number 
           and use the  unit IDs to  identify them. The  opposite is 
           also  true.  If  accounts  are  to  be  kept separate for 
           different portions of a single site, it may be entered as 
           several buildings with each containing only a portion  of 
           the units. 

                Buildings  may  have  a  status  of  NEW,  ACTIVE or 
           DELETED. A building is NEW  when it first entered in  the 
           system. Background information  may be entered  about the 
           building,  its  units   and  tenants  but   no  financial 
           activities take place. An ACTIVE building is an operating 
           building.  All  normal  rental  activities  take place. A 
           DELETED building has no further activity. Its data may be 
           examined and listed but no transactions are accepted. 

     UNIT INFORMATION 

                The  unit  information  is  the  most  basic.  It is 
           nothing more than  notes or record  keeping. There is  no 
           financial   information   about   units,   only  physical 
           descriptions and historical records. PropMan does nothing 
           with this information except store and retrieve it. 



     TENANT INFORMATION 

                Tenants may be PREVIOUS, CURRENT or NEW. A  PREVIOUS 
           tenant is  one that  has moved  out of  a unit. A CURRENT 
           tenant has moved in and  not yet moved out. A  NEW tenant 
           has not yet moved in. The records for each tenant include 
           personal information about  spouse, work, cars  and such; 
           financial  information  about  monthly  rent,  due dates, 
           deposits  and  so  on;  and  a  financial  history of the 
           tenant's activity. 

                For each unit  there is at  least one set  of tenant 
           information. When  tenant information  is requested,  the 
           current tenant is  recalled first. Any  previous tenants' 
           or new tenant's data are then available. 

     ACCOUNTING ACTIVITIES 

                PropMan  is  an  on-line  single  entry   accounting 
           system. All transactions are posted as they are  entered. 
           This means  that there  are no  posting or  trial balance 
           operations to  perform. It  also means  that all  PropMan 
           accounting reports are always  current. Up to the  second 
           Month-to-date and  Year-to-date information  is available 
           at any time. 

                Invoices  and  tenant   refunds  are  reflected   in 
           statements when entered  even if they  are not yet  paid. 
           All of  these pending  invoices must be  marked paid each 
           month.  PropMan will not close a month until the  month's 
           business is complete. 

                When the month's  business is closed  PropMan forces 
           the money available and the money used to match. At month 
           end any cash on hand is paid to the owner. Alternatively, 
           if there is a shortage, money will be taken from reserves 
           to  cover  it.  (You  have  to  replenish  the   reserves 
           yourself.) In either case, for each building, each  month 
           the money available always equals the money used.  

     ARCHIVES 

                PropMan  archives  data  and  keeps it available for 
           review and  listings. Monthly  data is  available for the 
           last eleven months.  Year-end data is  kept indefinitely. 
           This archiving is  done as part  of the normal  month end 
           and year end closes.  No special action is  required from 
           the user. See Appendix B concerning archives and backups. 


     FILE PURGES 

                Data   for   buildings   and   tenants   accumulates 
           continuously. Outdated data should be purged occasionally 
           to free  disk space  for reuse.  See the  warnings in the 
           Help for these operations before using them. 



                               Menus and Screens 


                This section contains a detailed description of each 
           menu selection and each  item on the data  displays. Most 
           of this information can also  be found in the PropMan  F1 
           Help. 


     TENANT ACTIVITY 

                Tenant activity  requires three  screens to  contain 
           the data.  The Tenant  Financial screen  is shown  first. 
           From  this  either  the  Payment  History  or  the Tenant 
           Personal screens may be  requested by using the  function 
           keys. 

                In addition,  this data  is maintained  for previous 
           tenants and tenants not yet moved in. This information is 
           accessed  by  calling  up  the  appropriate Unit and then 
           using function keys at the Tenant Name field. 


     TENANT FINANCIAL SCREEN 

                The Tenant  Financial screen  has the  most commonly 
           used operations  and data.  Here rent  receipts and other 
           financial transactions are entered, rents are changed and 
           tenants moved in and out. See figure C-6. 

                In  the  ongoing  operation  of  ACTIVE   buildings, 
           virtually all  actions involving  tenants are  controlled 
           from this screen. There are three categories of  tenants, 
           NEW, CURRENT and PREVIOUS,  (see Status on this  screen). 
           For  each  tenant  status,  slightly  different  data  is 
           allowed and the cursor only moves to the allowable fields 
           or actions. As data  is entered or changed,  accounts are 
           kept up to date and future actions scheduled. 

                When a building is NEW (see New Building Start  Up), 
           Tenant  Financial  only  allows  entry  of  historical or 
           background  data  about  tenants.  In  NEW  buildings all 
           tenants show  a Status  of NEW.  No accounting activities 
           (see  Activity  fields  on  this  screen) are allowed for 
           these NEW buildings. Information such as original move in 
           date, deposits  being held  etc. should  be entered. This 
           information  is  used  as  the  starting  point  for  the 
           building when  the building  status is  changed to ACTIVE 
           (see Status on the building General changes screen). 

                The fields on the Tenant Financial screen: 

           Building:   All  Tenant  Activities  require  a  building 
                       number. It  may be  a NEW,  ACTIVE or DELETED 
           Name:       building. The allowable actions vary for  NEW 
                       or  ACTIVE  buildings.  In  DELETED buildings 
           data may be  reviewed only. When  the Building number  is 
           accepted, the Name is displayed. 

           Unit:   All tenant information is  called up by Unit  ID. 
                   The Unit ID must  match one of the  IDs specified 
                   when  the  building  was  first  started  in  the 
           PropMan system. There are Next/Prev function keys to step 
           through the Unit IDs. 

           Post full rent paid (Y/N)?   This question is shown  only 
                                        for CURRENT tenants who have 
                                        not  paid  any  rent  so far 
           this month. A "N"o  answer removes the question.  A "Y"es 
           answer removes the question but first enters a  financial 
           activity  (see  Activity ...  fields  on  this   screen), 
           showing the full scheduled rent paid on the current date. 

           Tenant:   Enter  or  change  the  name  of  the   tenant. 
                     Changing the name  does not change  the tenant. 
                     A  tenant  name  changed  here  is  changed  to 
           correct  spelling  or  some  such.  All of the other data 
           stays the  same. There  is just  a new  name for the same 
           person. See Status, Date In and Date Out on this screen. 
                On  this  field  function  keys  are used to call up 
           information  about  other  tenants  who have occupied the 
           unit (PREVIOUS  tenants), and  tenants who  have not  yet 
           moved into the  unit (NEW tenants).  When tenant data  is 
           displayed the tenant name and all other data are for  the 
           CURRENT or  most recent  tenant in  the unit.   There are 
           function keys labeled Next and Previous Tenant name.  The 
           Prev Tenant Name calls up data about the previous  tenant 
           in the unit. The Prev Tenant Name function will step back 
           one tenant at  a time through  any previous tenants.  The 
           Next Tenant Name function  steps forward one tenant  at a 
           time. Stepping as far forward as possible calls up a  NEW 
           tenant. This is data about a tenant who has not yet moved 
           in.  

           Status:   This field is  maintained by PropMan  according 
                     to the Date In  and Date Out fields  entered by 
                     the  user.  There  are  three  statuses.  A NEW 
           tenant has not yet moved into a unit. For each unit there 
           may be  only one  NEW tenant.  The CURRENT  tenant is the 
           occupant of  the unit.  For each  unit there  may be  one 
           CURRENT  tenant.  When  a  CURRENT  tenant moves out they 
           become a PREVIOUS tenant.   The data on PREVIOUS  tenants 
           accumulates indefinitely until Purge Files is performed. 

           Activity   Not used  by PropMan.   PropMan maintains  and 
           Date:      displays it for the user.  It defaults to  the 
                      current date. Activities, independent of their 
                      date, are always accepted as business for  the 
           current Processing Month. See NOTE after Activity Type on 
           this screen. 

           Activity   Enter  the  money  involved.  The  accounts in 
           Amount:    PropMan for this building will be affected  by 
                      this amount. See  NOTE after Activity  Type on 
                      this screen. 

           Activity   There are  only a  few reasons  a tenant might 
           Type:      have a financial activity; rent paid,  deposit 
                      paid,  deposit  refunded;  and  so on. PropMan 
                      contains a list of these activities. There are 
           function keys  for Next  and Previous  Activity Type,  to 
           step through the list.  
                Use the function keys to step through the activities 
           to find the  one that applies.  They are listed  with the 
           more common first and the seldom used last. 

                The activities are: 

           1)Rent Paymnt - Money was received for rent; cash, check, 
           money order  are all  entered the  same. This  is account 
           2510. 

           2)Other Pymnt - Money  was received for Other  Due; cash, 
           check,  money  order  are  all  entered the same. This is 
           account 2550. 

           3-7)"deposit" Pymnt - Money was received to be held in  a 
           deposit account; cash, check, money order are all entered 
           the same. These are accounts 2610 through 2650. 

           8-12)"deposit" Refnd - Money will be taken from a deposit 
           account and  a refund  check written.  These are accounts 
           1910 through 1950. 

           13)Other Assmt - The  tenant has been charged  for damage 
           or a fee. The money will be added to Other Due. 

           14)Rent NSF - A check  accepted for Rent Paymnt has  been 
           returned, uncashed. It is backed out of account 2510. 

           15)Other NSF - A check accepted for Other Pymnt has  been 
           returned, uncashed. It is backed out of account 2550. 

           16-20)"deposit" NSF  - A  check accepted  for a "deposit" 
           Pymnt has been  returned, uncashed. It  is backed out  of 
           the appropriate 2610-2650 account. 

           21)Rpeal Assmt - No  money has been received.  The tenant 
           was assessed a  charge using Other  Assmt. The charge  is 
           now being removed from Other Due without payment. 

           22)Rent Credit - No  money has been received.  The tenant 
           is being given credit as  if rent had been paid.  This is 
           shown as  income in  account 2530  and as  an expense  in 
           account 1720. 

           23)Rent Refund - The tenant has a credit balance for Rent 
           Due. Money will  be taken from  the credit balance. It is
           backed out of account 2510. 

           24)Other Refund  - The  tenant has  a credit  balance for 
           Other Due. Money will be taken  from the credit  balance.
           It is backed out of  account 2550. 

           25)Apt Allow - No money has been received. The tenant  is 
           given an  apartment allowance  as credit  toward the Rent 
           Due. This is  shown as income  in account 2520  and as an 
           expense in account 1110.  

           26)L-M-R Used - No  money has been received.  The deposit 
           for the last  months rent is  to be used.  Money is taken 
           from  the  tenant's  L-M-R  deposit  balance and credited 
           toward Rent  Due. This  is shown  as a  deposits refunded 
           expense in account 1950 and as income in account 2540. 

           NOTE:  Activities  that  involve  money  received  or NSF 
           checks returned are entered in the current Bank  Deposit. 
           These activities may be  changed as long as  that deposit 
           remains  open.  Once  the  Bank  Deposit has been closed, 
           activities up to that point are fixed. Reversing  entries 
           may be made  but no changes  to the original  entries are 
           allowed. An example: a check  for rent is in one  deposit 
           and the deposit  is closed; the  NSF entry for  the check 
           can be  in another  deposit but  the entry  made when the 
           check was received cannot be accessed. 

           Sched rent:   The Scheduled  Rent is  the normal  monthly 
                         rent.  Each  Due   Day  the  Rent   Due  is 
                         increased  by  this  amount,  Move   In/Out 
                         prorates excepted. 

           Due day:   This is the  day of the  month when the  Sched 
                      Rent is due.  It may be  entered only for  NEW 
                      tenants. After a tenant  moves in the Due  Day 
                      cannot be changed. 

           Paid to:   This is the last day for which rent is paid in 
                      full. When a tenant first moves in the Paid To 
                      date is one  month after the  Date In. In  the 
           second month the rent is  prorated to adjust the Paid  To 
           date to the day before the rent Due Day. The Paid To date 
           will fall on the day before a Due Day from then on, until 
           a move  out prorate  is performed.  In the  month when  a 
           tenant moves out, the rent  is prorated so that the  Paid 
           to date matches the Date Out. 

           Rent due:   This is  the total  amount needed  to pay  in 
                       full  all  rents  due  up through the current 
                       date. Partial payments lower the Rent Due but 
           do not advance the Paid To date. When a full months  rent 
           is accumulated the Paid To date is advanced. Overpayments 
           show as a credit balance for Rent Due until a full months 
           overpayment  is  accumulated.  The  Paid  To date is then 
           advanced and  one months  rent deducted  from the  credit 
           balance. 

           Other Due:   This is a running total of Other Assessments 
                        charged  less  Other  Payments  made.  It is 
                        money  owed by  the tenant,  but the charges 
                        and payments are not part of the rent. 

           Last Rent:   These two  fields are a  record of the  last 
                        time the rent  was changed for  this tenant. 
           Last Date:   The Last Rent was the monthly rent that this 
                        tenant  paid  before  it  was changed to the 
                        current Scheduled Rent. The Last Date is the 
           date the change took place and the current Scheduled Rent 
           went to effect. 

           New Rent:   These two fields show when the next change in 
                       rent is scheduled. The New Rent is the amount 
           New Date:   the rent will be changed to. The New Date  is 
                       the date when the change will take place.  On 
                       the  New  Date,  the  Scheduled  Rent will be 
           changed to the amount of the New Rent. It must always  be 
           a rent  Due day  for this  tenant. On  that date and from 
           then on this new Scheduled  Rent will be due each  month. 
           The Last  Rent and  Date on  this screen  will be  set to 
           record this change. The New Rent and Date will be set  to 
           blank. 

           Date in:   PropMan uses this  date to schedule  automatic 
                      move in of tenants. When entering data about a 
                      NEW tenant for the  unit, enter the date  that 
           the tenant will  move in. On  that date, this  NEW tenant 
           will be  moved in  and marked  as CURRENT.  If there is a 
           tenant in the unit, that tenant will be given a Date  out 
           and marked as PREVIOUS. The Date in may be entered before 
           or after the actual move in, but PropMan will not  accept 
           dates that are  earlier than the  1st day of  the current 
           Processing Month. 

           NOTE: If this tenant is  in a NEW building being  started 
           in PropMan for  the first time,  enter the date  that the 
           tenant originally  moved in.  PropMan will  merely record 
           the date. 

           Lease exp:   The Lease Expiration date is used to print a 
                        tickler  file  of  leases.  See  the   Lease 
                        Expiration   Report   in   the   Unit/Tenant 
                        reference listings. 

           Pay / Quit   The date of the most recent 3 day notice for 
                        this tenant. If a  3 day notice is  prepared 
                        by hand, you may  enter the date here.  When 
           PropMan writes a 3 day  notice, it enters the date  here. 
           See 3-Day Notices on the Letters / Notices screen. 

           Date out:   PropMan  uses this date to schedule automatic 
                       move out  of tenants. Enter the date that the 
                       tenant  will  move  out.  On  that  date  the 
           CURRENT tenant will be moved out and marked PREVIOUS. The 
           unit will be vacant until a NEW tenant moves in. The date 
           may be entered before  or after the actual move  out, but 
           PropMan will not  accept dates that are  earlier than the 
           1st day of the current Processing Month. 

           Close:   Should this tenant's accounts be closed? Closing 
                    a tenant's accounts means that there will be  no 
                    more financial transactions with the tenant. You 
           have collected all of the payments that you are going  to 
           get; and you  have paid all  of the refunds  that you are 
           going to pay. 
                To close, answer 'Y'es.  After the tenant has  moved 
           out, the  retained  deposits  will  be  deducted from the 
           deposit balances for the  building. Any unpaid rent  will 
           no longer be shown as overdue. 

           Deposit Balances   The 5 deposit  account names from  the 
                              Chart of Accounts are shown here along 
                              with the amounts  being held for  this 
           tenant.  Normally   these  are   maintained  by   PropMan 
           according to deposit activities. 
                When entering start  up data for  a tenant in  a NEW 
           building,  the  amounts  of  deposits  already being held 
           should be entered. 


     TENANT PAYMENT HISTORY 

                The  second  tenant  screen  is  a  history  of  the 
           tenant's financial activities. There is no data entry  on 
           this screen. See figure C-7. 

                The fields on the Tenant Payment History: 

           Building:   See the Tenant Financial screen, above. 
           Name: 

           Unit:   See Tenant Financial screen, above. 

           Tenant:   No  data  entry.  The  Next/Prev  Tenant  Name, 
                     function keys may be used to see other  tenants 
                     who  have  used  this  unit.  The  name  may be 
                     entered  on  the  Tenant  Financial  or  Tenant 
                     Personal screens. 


           The history data   The lower  portion of  the screen  has 
                              the  last  26  Activities  entered for 
                              this  tenant.  These  do  not  include 
           activity for the current  Processing Month. At Month  End 
           Close all of  the Activities for  the month being  closed 
           are moved  from the  Tenant Financial  screen, above,  to 
           this Payment History screen.  Older data is removed  from 
           the top of the left column. The new activities are  added 
           at the bottom of the right column. 


     TENANT PERSONAL SCREEN 

                The  third  screen  contains  personal  information. 
           PropMan does little with this except maintain and display 
           it for the user. See figure C-8. 

           Building:   See the Tenant Financial screen, above 
           Name: 

           Unit:   See Tenant Financial screen. 

           Tenant:   See Tenant Financial screen. 

           Status:   See Tenant Financial screen. 

           Other Occupants   Other  occupants  in  addition  to  the 
                             tenant may be listed here.  These names 
                             can  be   used  on   the  3-Day-Notices 
                             printed   in   the   Letters/   Notices 
                             operations. 

           Phone:   Enter one or two  if desired. These are  used in 
                    the telephone lists printed by PropMan. See  the 
                    Telephone List on the General reference listings 
           screen and  the Tenant  Phone List  on the  Unit / Tenant 
           reference listings screen. 

           Garage:   These  are  not  used  by  PropMan.  They  are. 
           Locker:   maintained and displayed for the user. 
           Car: 

           Tenant's Employer   These items are not used by  Propman. 
           Spouse's Employer   They are maintained and displayed for 
                               the user. 

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
               PropMan - residential property management software
                               309 S. Ynez Ave.
                         Monterey Park, CA 91754-3203
                                (818) 570-1071

SHIP TO:








     I am currently using PropMan:
 
     Serial Number              and Release      2.6     .
                   ------------              ----------

     These are shown on the PropMan System Parameters screen.



                I am not ordering at this time, but please
     -------    put me on your mailing list.



                                         Quantity       Price       Amount

     PropMan  Shareware version                     @   $12.00
                                         --------                  ---------
     Includes: Shareware version
               PropMan       (2 disks)
               Documentation
                       /Demo (1 disk)

     PropMan  Registered version                    @  $135.00
                                         --------                  ---------
     Includes: Registered version
               PropMan       (4 disks)
               Reference Manual
               User Guide
               90 day phone support


     California residents add  6.5% sales tax
                                  (.78, 8.78)                      ---------



                                          Total enclosed
                                                                   --------- 
```
{% endraw %}

## USRGUIDE.DOC

{% raw %}
```




                                    PropMan

                   Residential Property Management Software







                                   USER GUIDE

                                      for

                      Shareware Property Management System

















                              PropMan USER GUIDE
                            (C) Copyright 1986,1988
                                      by
                      G. Curtis Feger and Jeffrey G. Gobel


                                PropMan Software
                            (C) Copyright 1986,1988
                                      by
                      G. Curtis Feger and Jeffrey G. Gobel
                                 309 S. Ynez Ave.
                           Monterey Park, CA 91754-3203
                                  (818) 570-1071



                                  Copyright

                     PropMan  software  is  copyrighted.  This
                USER GUIDE  is  copyrighted.   Illegal copying
                of  either  is  a  violation  of both criminal
                and civil law.




                                  Shareware
                                     and
                               Copy Protection

                     The shareware copies  of PropMan software
                are  clearly  marked  as  shareware  in  their
                startup messages. Only copies so marked may be
                given to others. 

                     The   shareware   copies   of   the  user
                guide   are  clearly  marked  on  their  title
                pages.  Only copies so marked  may be given to
                others. 

     The following is an excerpt from our bound User Guide. An * denotes
     those sections or partial sections which are included here.


Table of Contents 

    1. Getting Started 
         Read Me First............................ 1-1
         Terminology.............................. 1-2
         Installation............................. 1-3
         Starting Up PropMan...................... 1-4
         Shutting Down PropMan.................... 1-5
         Help..................................... 1-6
         Initial Processing Month and Year........ 1-7
         Entering Your Company Heading............ 1-9
         Changing Colors.......................... 1-10 
         Chart of Accounts........................ 1-11
         Entering Vendors......................... 1-12
   *     New Building Startup..................... 1-13
   *     New Building Startup - General Screen.... 1-14
   *     New Building Startup - Mortgage Screen... 1-15
   *     New Building Startup - Units Screen...... 1-16
   *     Entering Tenants for New Buildings....... 1-17
         Building Changes......................... 1-18
         Building Changes - General Screen........ 1-19
         Building Changes - Mortgage Screen....... 1-20
         Building Changes - Units Screen.......... 1-21
         Unit Information......................... 1-22
   *     Activating a New Building................ 1-23
         Entering Tenant Personal Information..... 1-24
   *     Building Statuses........................ 1-25

    2. Day to Day 
         Monthly Operations....................... 2-1
         Moving In Tenants........................ 2-2
         Moving Out Tenants....................... 2-3
         Entering Rents........................... 2-4 
         Entering Tenant Financial Transactions... 2-5
         Paying Bills............................. 2-6
         Entering Invoices........................ 2-7
         Changing Invoices........................ 2-8
         Entering Tenant Personal Information..... 2-10
         Entering Vendors......................... 2-11
         Tenant Payment History................... 2-12
         Miscellaneous Income..................... 2-13
         Reserve Account Activity................. 2-14
         Bank Deposits............................ 2-15

    3. When Needed 
         Printing Notices and Letters............. 3-1
         Rent Changes............................. 3-2
         Accounting Corrections................... 3-3
         Printing Reference Lists................. 3-4
         Printing General Reference Listings...... 3-5
         Printing Building Reference Listings..... 3-6
         Printing Unit / Tenant Reference Listings 3-7
         Deleting Vendors......................... 3-8

    4. Month End 
         Income and Expense Recap................. 4-1
         Month End Statements..................... 4-2
         Backing Up PropMan....................... 4-3
         Closing out the Month.................... 4-4


    5. Archives 
         Reviewing Archived Information........... 5-1
         Reviewing Archived Invoices.............. 5-2
         Reviewing Archived Miscellaneous Receipts 5-3
         Reviewing Archived Accounting Corrections 5-4
         Printing Archived Information............ 5-5
         Reviewing Archived Income and Expenses... 5-6

    6. Index 



New Building Startup 

    As defined in PropMan, a building is any entity you wish to 
    keep accounting records on as a whole. An apartment complex, 
    duplex, a single family dwelling or group of homes, are all 
    considered buildings. There are several simple steps required 
    to startup a new building in PropMan. 

               1. If the building you are entering has a mortgage 
               then (if you have not already done so) enter the 
               lender as a vendor by following the steps outlined 
               under Entering Vendors. 

               2. From the Main Menu press <S> for System 
               Maintenance and press <Enter>. 

               3. From the System Maintenance Menu press <N> for 
               New Building Startup and press <Enter>. 

               4. Your cursor is on Building. Type in the the 
               number you wish to associate with the building you 
               are entering. This number will be used to identify 
               this building when ever you need to refer to it. 
               The building number can be any number between 100 
               and 999. 

               5. The screen displays a message either saying that 
               the building number you have entered is unused or 
               in use already, and the cursor is on Startup 
               building. If the building number you have entered 
               is not in use then you will be creating a 
               completely new set of building records. If the 
               number was already in use and you reuse this number 
               it will destroy any accounting, unit, tenant and 
               history information that may exist for this 
               building. If you have made a mistake and want to 
               type in another building number then press <N> for 
               No, press <Enter>, and go back to step 4. If you 
               wish to continue then press <Y> for Yes and press 
               <Enter>. 

               6. If the building number you have selected was 
               unused then go to step 7. If you are reusing a 
               building number then you have the option of 
               retaining the background information for this 
               building, such as it's name and address, mortgage 
               information, apartment numbers, etc., even though 
               the unit, tenant, and accounting information will 
               be lost. Your cursor is on Clear data. Press <N> 
               for No if you wish to retain the background 
               information, or press <Y> for Yes to clear all of 
               the old building data. Press <Enter>. 

               7. In steps 7 through 9 don't press <Esc> until you 
               have finished entering the information outlined in 
               all three steps If you do the building will be 
               created incompletely and you will have to begin 
               again at step 3. 

               Perform the operations outlined under New Building 
               Startup - General Screen. 

               8. Perform the operations outlined under New 
               Building Startup - Mortgagee Screen. 

               9. Perform the operations outlined under New 
               Building Startup - Units Screen. 

               10. Perform the operations outlined under Entering 
               Tenants for New Buildings. 

               11. Perform the operations outlined under Unit 
               Information. 

               12. Perform the operations under Activating a 
               Building. 



New Building Startup - General Screen 

    This screen contains the general information about a building, 
    and it is the first of three screens required during New 
    Building Startup. 

               1. Your cursor is on Name. Type in the name you 
               wish to associate with this building and press 
               <Enter>. 

               2. The cursor skips by Building status and Number 
               of Units. While you are entering a new building it 
               will always have a status of New (see Activating a 
               Building). The Number of units starts out as one 
               (buildings must always have at least one unit) but 
               as you enter the apartment numbers for this 
               building (see New Building Startup - Units Screen) 
               this number will change accordingly.  

               Your cursor is on the first line of the building 
               Address so type it in and press <Enter>. Do the 
               same for the other three Address lines as required. 

               3. Your cursor is on Monthly under Reserve 
               Accounts. Enter the amount you wish to reserve 
               monthly for each of the reserve categories listed 
               to the left. Press <Enter> after typing in each 
               amount. For example: Suppose your real estate taxes 
               are $12,000 annually. You decide to put $1,000 
               aside each month. Enter 1000 under the Taxes 
               reserve account. Each month, PropMan will 
               automatically increase your tax reserve account by 
               $1,000 and show the new balance on your monthly 
               statement. 

               4. After you press <Enter> on the last Monthly 
               reserve amount field the cursor will be under 
               Balance. Enter the your current cash balance for 
               each of the reserve categories by typing in an 
               amount and pressing <Enter>. This balance may only 
               be entered when setting up new buildings, PropMan 
               will maintain the balance once the building has 
               been made active. 

               5. After you press <Enter> on the last reserve 
               account Balance, your cursor will be under Notes. 
               This space is provided for any notations you may 
               wish to keep. Type in your notes, pressing <Enter> 
               after completing each line. 

               6. You have now finished with the first New 
               Building Startup screen. The next screen is the 
               Mortgagee screen. To get there you must press <F1>, 
               find the function key labeled Mtgee Screen, press 
               <Esc>, then press the Mtgee Screen function key. 

               If you have already completed all three New 
               Building Startup screens and want to have PropMan 
               create all of the records for this building, then 
               press <Esc>. This may take several minutes, but 
               when finished you will be back on the System 
               Maintenance Menu. From the System Maintenance Menu 
               you can press <Esc> again to return to the Main 
               Menu. 



New Building Startup - Mortgagee Screen 

    This is one of three screens associated with New Building 
    Startup. This screen allows you to enter mortgage information 
    for this building. PropMan allows for up to five mortgages per 
    building. At each month end close PropMan will automatically 
    make an invoice for the next month, for each of the mortgages 
    entered here.  On those mortgage invoices PropMan will 
    calculate how much of each payment will be applied to 
    principal and how much will be applied to interest and will 
    update the mortgage balance accordingly. 

               1. The cursor is now on Mortgagee Number. Type in a 
               number from one to five corresponding to the trust 
               deed you are entering, and press <Enter>. For 
               example if you were entering mortgage information 
               for the second trust deed on this building you 
               would press <2> and <Enter>. 

               2. Your cursor is now on Vendor. The mortgage 
               lenders should all be entered as vendors (see 
               Entering Vendors). Type in the vendor number 
               corresponding to the mortgage lender for the trust 
               deed you are entering now and press <Enter>. The 
               lender's name, address, and phone numbers will come 
               up automatically. 

               If you have not already entered the mortgage lender 
               for this trust deed as a vendor then skip this 
               field and continue with step 3. After you are 
               completely finished with New Building Startup then 
               enter the lender following the steps outlined under 
               Entering Vendors. You may then follow the steps 
               outlined under Building Changes - Mortgagee Screen. 

               If you have already entered the mortgage lender for 
               this trust deed as a vendor, but do not remember 
               the number that was assigned to that vendor, then 
               press <F1>. Find the function key number labeled 
               Next Vendor. Press <Esc>. Press that function key 
               number to step through vendors until you find the 
               one you are looking for. 


               3. The cursor is now on Loan No. This is for your 
               reference. Type in the number of the loan for this 
               trust deed and press <Enter>. 

               4. The cursor is on Terms. This space is also 
               provided for your reference only. You may type in 
               the length and type of the loan. For example "30 
               Year Fixed 5/1/64". Press <Enter>. 

               5. On Due day, type in the day of the month that 
               the loan payment falls due, and press <Enter>. For 
               example you might type in "1" for the 1st or "15" 
               if the loan is due on the 15th. 

               6. The cursor is now on Loan Balance. Type in the 
               balance for this trust deed and press <Enter>. 

               7. On Interest rate type in the rate and press 
               <Enter>. 

               8. On Prncpl & Int type in the monthly payment 
               amount of the loan and press <Enter>. 

               9. On Impound type in the amount of any monthly 
               impounds and press <Enter>. Your total monthly 
               payment will appear next to Total. 

               10. This completes the mortgage setup for this 
               trust deed. If you wish to enter another mortgage 
               for this building then return to step 1.  

               Otherwise continue with New Building Startup by 
               going on to the Units screen. Press <F1>. Find the 
               function key number labeled Units Screen. Press 
               <Esc>. Press the Units Screen function key number. 

               If you have already completed all three New 
               Building Startup screens and want to have PropMan 
               create all of the records for this building then 
               press <Esc>. This may take several minutes, but 
               when finished you will be back on the System 
               Maintenance Menu. From the System Maintenance Menu 
               you can press <Esc> again to return to the Main 
               Menu. 



New Building Startup - Units Screen 

    This is one of three screens associated with New Building 
    Startup, and is where you specify what the apartment or unit 
    numbers are for this building. It is important that the list 
    of apartment numbers is complete and correct as you will not 
    be able to change them outside of the New Building Startup 
    procedure. 

               1. The cursor is on the first unit number. 
               Buildings must have at least one unit, so when they 
               are created the first apartment number is set to 
               match the building number. If this is not one of 
               the apartment numbers in this building then type 
               the first apartment number over this one. Press 
               <Enter>. 

               2. Type in the rest of the apartment numbers for 
               this building pressing <Enter> after each one.  

               If you make a mistake you can back up by holding 
               down the <Shift> key and pressing the <Tab> key. Do 
               this until you are on the unit you need to change 
               and then type over it with the correct apartment 
               number and press <Enter> until you are again on a 
               blank space (ready for the next unit number). 

               If you need to delete an apartment number you have 
               entered, back up using the <Shift> and <Tab> keys 
               until you cursor is on that unit, type over it with 
               blanks using the space bar, and press <Enter>. 

               If the building you are entering has more than 
               fifty units then when you have filled in the last 
               apartment number space provided for this block of 
               units then press <F1>. Find the function key number 
               labeled Next 50Unts. Press <Esc>. Then press the 
               Next 50unts function key and continue entering 
               apartment numbers. 

               Should you want to return to a previously entered 
               block of fifty units, press <F1>. Find the function 
               key number labeled Prev 50Unts. Press <Esc>, and 
               then press the Prev 50Unts function key. 

               If you have already completed all three New 
               Building Startup screens and want to have PropMan 
               create all of the records for this building then 
               press <Esc>. This may take several minutes, but 
               when finished you will be back on the System 
               Maintenance Menu. From the System Maintenance Menu 
               you can press <Esc> again to return to the Main 
               Menu. 



Entering Tenants for New Buildings 

    This section is designed to show you how to enter the tenants 
    already residing in a building which is just now being entered 
    into PropMan. It does not outline the procedures for the 
    normal month to month tenant move ins (see Moving in Tenants). 
    For the procedures described below to work as outlined the 
    building must have a status of New (see Building Statuses). 

               1. From the Main Menu press <D> for Daily 
               Operations and press <Enter>. 

               2. From the Daily Operations Menu press <T> for 
               Tenant activity and press <Enter>. 

               3. Your cursor is on Building. Type in the number 
               of the building you are starting up and press 
               <Enter>. The name of the building will appear at 
               the top of the screen. 

               4. The cursor is on Unit. Type in the apartment 
               number of a unit in this building and press 
               <Enter>. 

               If you don't remember the apartment numbers for 
               this building or you would like to step through the 
               apartments sequentially then press <F1>. Find the 
               function key number labeled Next Unit. Press <Esc> 
               and then press the Next Unit function key. When you 
               reach the apartment you want, press <Enter>. 

               5. Your cursor is on Tenant. Type in the name of 
               the tenant residing in this unit and press <Enter>. 
               Names are entered last name comma first name. 

               If there is more than one tenant responsible for 
               this unit pick only one to enter here. The other 
               tenants will be entered later. (See Entering Tenant 
               Personal Information). 

               6. On Sched rent, type in the amount of the normal 
               monthly rent and press <Enter>. 

               7. On Due day type in the number corresponding to 
               the day of the month that the rent becomes due, and 
               press <Enter>. For example the first would be 1, or 
               the fifteenth would be entered 15. 

               8. On Paid to, type in the date of the last day for 
               which the rent has been paid, and press <Enter>. It 
               must always be the day before a rent Due day. You 
               may only enter this date during New Building Setup, 
               once the building is made active the Paid to date 
               will be automatically kept in step with any tenant 
               financial activity entered. 

               9. On Other due type in the balance of any 
               assessments for this tenant and press <Enter>. This 
               may only be entered during New Building Setup. Once 
               the building is made active, the Other due balance 
               will automatically be kept in step with any tenant 
               financial activity entered. 

               10. On Last under Rent type in the amount of the 
               most recent previous Sched rent for this tenant and 
               press <Enter>. This amount should have been the 
               monthly rental amount before the last rent raise. 

               11. On Last under Date type in the date of the last 
               rent raise and press <Enter>. 

               12. The cursor is on New under Rent. If there is a 
               rent change pending for this tenant then type in 
               the amount of the new rent and press <Enter>. 

               13. The cursor is on New under Date. If there is a 
               rent change pending for this tenant then type in 
               the date the new rent will become effective and 
               press <Enter>. 

               14. On Date in type in the date this tenant moved 
               in and press <Enter>. 

               15. On Lease exp type in the date that the lease 
               expires for this tenant and press <Enter>. 


               16. The cursor is on Pay / Quit. If a 3-Day-Notice 
               has been served to this tenant then type in the 
               date of service here and press <Enter>. 

               17. The cursor is under Deposit Balances. There are 
               five deposit categories labeled at the left and 
               your cursor is beside the first one. Type in the 
               amount being held from this tenant for this first 
               deposit category and press <Enter>. Do the same for 
               the other four categories. 

               18. You have now finished entering this tenant. To 
               enter the next tenant in this building return to 
               step 4. 

               When you are finished entering all of the tenants 
               residing in this building, press <Esc> to return to 
               the Daily Operations Menu. 

               Press <Esc> again from the Daily Operations Menu to 
               return to the Main Menu. 



Activating a New Building 

    While buildings are being entered into PropMan they have a 
    status of New. This status determines what operations can be 
    performed on the building throughout the PropMan system.  

    New buildings are still in the start up process. All of the 
    background information about the building can be entered. 
    Mortgage, reserve and deposit balances can be entered 
    directly, as well as the information about the tenants already 
    residing in the building. No operational activities will be 
    accepted for New buildings. Money collected cannot be entered. 
    No rents come due. No invoices can be put in. 

    So, when you have entered all of the background information 
    about a building and wish to begin normal monthly processing, 
    the status of the building must be changed to Active. Active 
    is the status of operating buildings. 

    To change the status of a building from New to Active, follow 
    the steps outlined below. Please check that you have completed 
    all of the steps outlined under New Building Start Up before 
    you activate the building. Some of the building background 
    information may not be entered directly once the building is 
    made active, such as tenant deposit balances and paid to 
    dates, mortgage balances, etc. This is a good place to make a 
    backup of your system (see Backing Up PropMan ). 


               1. From the Main Menu press <S> for System 
               Maintenance and press <Enter>. 

               2. From the System Maintenance Menu press <B> for 
               Building Changes and press <Enter>. 

               3. Your cursor is on Building. Type in the number 
               of the building you wish to activate and press 
               <Enter>. 






               If you don't remember the number of the building 
               you want, press <F1>. Find the function key labeled 
               Next Build. Press <Esc>. Then press that function 
               key to step through the buildings in your system 
               until you find the one you are looking for, then 
               press <Enter>. 

               4. Press <Enter> until your cursor is on Status. 
               The current status of the building will be 
               flashing, and for the purposes of this section that 
               status should be New. To change the status of the 
               building from New to Active, merely press <A> for 
               Active and press <Enter>. 

               5. If you need to activate another building then 
               press <Enter> until your cursor is again on 
               Building and then return to step 3. If you have 
               finished activating buildings then press <Esc> to 
               return to the System Maintenance Menu. 

               Press <Esc> again from the System Maintenance Menu 
               to return to the Main Menu. 



Building Statuses 

    Buildings in PropMan may have one of three statuses at any one 
    time. The statuses are New, Active, and Deleted. 

    New buildings are still in the start up process. PropMan is 
    still holding information for them but the building is not 
    being operated in the normal sense. No invoices can be entered 
    or paid. No rents come due. No operational activities are 
    allowed at all. While a building is New, its initial 
    information can be entered. Mortgage, reserve and deposit 
    balances are entered. Money collected cannot be entered while 
    a building is New, only money already held in account 
    balances. 

    Active is the status of operating buildings. Rents come due 
    each month; invoices can be entered and paid; all of the 
    PropMan operations can now be performed on this building. The 
    monthly accounting reports are available. Once a building is 
    Active, changes to its financial information must be done with 
    accounting transactions, and those transactions will generate 
    an audit trail. An Active Building is one that is being run 
    and PropMan will track what happens. 

    Deleted is for buildings that are no longer operating. Perhaps 
    it has been sold or is being rebuilt or converted. For 
    whatever reason, no more accounting is being done for the 
    building operations. The information for the building is 
    retained but no activity is allowed. Reports about the 
    building and the archives are still available, however. 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1452

     Volume in drive A has no label
     Directory of A:\

    DEMO     DOC      1978   8-26-88  10:48a
    MANUAL   DOC     59111   3-18-89  12:01p
    PMDEMO   BAT        28   8-16-88   4:08p
    README   TWO      1289   3-18-89  11:54a
    REGISTER DOC      1537   3-18-89  12:16p
    USRGUIDE DOC     29432   3-18-89  12:12p
    AMORE    WIN       228  10-15-87  11:12a
    ARC      WIN       632   8-11-88  12:57p
    ARCH     WIN       360   8-11-88   3:08p
    BACK     WIN       572  10-09-87   6:41p
    BACK3    WIN       688   8-13-88  12:46a
    BAL      WIN       872  10-14-87   4:46p
    BAL2     WIN       800   8-14-88   2:42p
    BAL3     WIN       674  10-13-87   1:10p
    BAL4     WIN       768  10-13-87  12:41p
    BAL5     WIN       728  10-13-87   4:39p
    BLDN     WIN       596   8-13-88  12:42a
    BLDN3    WIN       596   8-14-88   2:30p
    CLS      WIN       400   8-14-88   2:22p
    COLOR    WIN       872   8-13-88  12:51a
    COLOR2   WIN       400  10-15-87   1:23p
    COLOR3   WIN       568   8-12-88   2:37p
    COLORA   WIN       782   8-12-88   2:36p
    COLORB   WIN       782   8-13-88   1:20a
    DAILY    WIN       492   8-12-88   8:16p
    DAY      WIN       632   8-11-88   3:55p
    DEP      WIN        70   8-11-88  10:25p
    DM       WIN       596  10-12-87   2:06p
    EMORE    WIN       458  10-15-87  10:23a
    EXHELP   WIN      1658   8-12-88   2:44p
    FIN      WIN       596   8-12-88  10:13p
    FKEYS    WIN      1352   8-12-88   2:39p
    FKEYS2   WIN       302  10-15-87  11:11a
    FKEYS3   WIN       344  10-15-87  11:11a
    HELP     WIN       243   8-14-88   1:40p
    HELP2    WIN       470   8-14-88   1:41p
    HELP2A   WIN       509   8-14-88   1:41p
    HELP3    WIN       531   8-14-88   1:41p
    HELP3A   WIN       527   8-14-88   1:42p
    HELP4    WIN       464   8-14-88   1:42p
    HIST     WIN       744   8-12-88  10:10p
    HIST2    WIN       666  10-09-87   5:07p
    IER      WIN       360  10-14-87   4:53p
    IER2     WIN       330   8-15-88   1:39p
    IN       WIN       458   8-11-88   4:00p
    INTRO    WIN       618   8-14-88   1:39p
    INV      WIN       404   8-12-88   8:20p
    IROPTION IR        110   7-26-88   2:08p
    KEY10    WIN       406   8-14-88   1:40p
    KEY12    WIN       434   8-14-88   1:39p
    MEC      WIN       448  10-13-87  12:37a
    MEM      WIN       596  10-14-87   4:52p
    MM       WIN       596  10-12-87   2:05p
    MM2      WIN       596  10-05-87   4:50p
    MORE     WIN       284  10-15-87  11:12a
    MTD      WIN       824  10-14-87   4:42p
    MTD2     WIN       296  10-13-87  12:31p
    MTD3     WIN       452   8-15-88   1:50p
    MTD3A    WIN       512  10-13-87   4:37p
    MTD4     WIN       440  10-13-87   1:07p
    MTD5     WIN       512   8-14-88   2:39p
    MTD6     WIN       512   8-14-88   2:41p
    MTH      WIN       632   8-11-88  12:52p
    MTHLY    WIN       492  10-05-87   4:52p
    NUM      WIN        70   8-12-88  10:08p
    ON       WIN       632   8-11-88  12:54p
    OND      WIN       448  10-05-87   4:54p
    OTHX     WIN       504  10-09-87   6:31p
    PDTO     WIN        68   8-11-88  10:19p
    PERS     WIN       476   8-13-88  12:44a
    PERS2    WIN       572  10-09-87   5:54p
    PET      WIN        18   8-11-88  10:25p
    PMDEMO~1 BAT        48   8-16-88   3:21p
    PMDEMOLP BAT        50   8-16-88   2:57p
    PMDM     IRP       392   8-12-88   9:10p
    PMDM     PTO       512   8-11-88   3:49p
    PMDM     SLD       297   8-12-88  10:53p
    PMDMLP   IRP       400   8-16-88   3:16p
    PMMM     IRP      1104   8-12-88   8:12p
    PMMM     PTO       512   8-11-88  12:39p
    PMMM     SLD       589   8-12-88  10:52p
    PMMM1    SLD       863   8-12-88  10:53p
    PMMM2    SLD       340   8-12-88  10:53p
    PMMMLP   IRP      1112   8-16-88   3:15p
    PMMTH    IRP      1228   8-15-88   1:38p
    PMMTH    PTO       512   8-14-88   1:47p
    PMMTH    SLD       311   8-14-88   2:18p
    PMMTH1   SLD       571   8-14-88   2:27p
    PMMTH2   SLD      1099   8-14-88   2:28p
    PMMTH3   SLD       820   8-14-88   2:28p
    PMMTHLP  IRP      1380   8-16-88   3:14p
    PMSPL    IRP      1492   8-15-88  12:57p
    PMSPL    PTO       512   8-12-88   1:45p
    PMSPL    SLD      1077   8-13-88  12:54a
    PMSPLLP  IRP      1500   8-16-88   3:17p
    PMTN     IRP      1404   8-13-88   1:22a
    PMTN     PTO       512   8-11-88   6:57p
    PMTN     SLD       887   8-12-88  10:54p
    PMTN1    SLD      1428   8-12-88  10:54p
    PMTN2    SLD       769   8-13-88   1:19a
    PMTN3    SLD      1074   8-12-88  10:54p
    PMTNLP   IRP      1412   8-16-88   3:16p
    POST     WIN       584   8-13-88  12:43a
    POST2    WIN       648   8-13-88   1:14a
    POST3    WIN       484  10-06-87   3:19a
    PROTO    COM     41661  10-02-87   1:17p
    RCP      WIN       400   8-14-88   2:19p
    RCPDT    WIN       407   8-14-88   2:25p
    REG1     WIN       824   8-11-88   3:12p
    RNT      WIN        70   8-11-88  10:18p
    ROREPLAY 000      9472  12-15-87   5:18p
    ROREPLAY 001     15616  12-15-87   5:18p
    ROREPLAY COM     47658  12-15-87   5:18p
    SECUR    WIN       596  10-09-87   6:14p
    SECUR2   WIN       428   8-12-88  10:48p
    SELF     WIN       792   8-12-88   8:08p
    SELF1    WIN       792   8-12-88   7:21p
    SELF2    WIN       792   8-12-88   7:48p
    SELF3    WIN       792   8-12-88   7:35p
    SELF4    WIN       263   8-12-88   7:36p
    STM      WIN       400   8-14-88   2:21p
    STMT     WIN       624  10-14-87   4:54p
    TEN      WIN       668  10-02-87   1:06a
    TEN2     WIN       386   8-12-88   9:02p
    TN       WIN       476   8-11-88   3:59p
    TNDT     WIN      2248   8-11-88  10:12p
    UN10     WIN       424   8-14-88   1:38p
    UN12     WIN       797   8-14-88   1:37p
    UNHELP   WIN       400   8-14-88   1:43p
    UNIT     WIN       808  10-06-87  12:05a
    UNIT2    WIN       688  10-06-87  12:43a
    UNT      WIN        18   8-11-88  10:10p
    YES      WIN        14   8-11-88  10:17p
    YTD      WIN      1268  10-14-87   4:55p
          134 file(s)     284152 bytes
                          897024 bytes free
