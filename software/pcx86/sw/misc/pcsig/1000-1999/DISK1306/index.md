---
layout: page
title: "PC-SIG Diskette Library (Disk #1306)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1306/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1306"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GANTT CHARTING AND EXACCT"

    Keep track of that project, know where your resources are and how
    they've been committed.  Analyze your progress with a Gantt chart.
    
    Produce Gantt charts lengthwise on paper.  Plot up to 20 tasks with
    timespan ranges from 24 to 36 months.  If space allows, timespan
    increments can be in weeks.  The program is self-explanatory and checks
    extensively for invalid input.
    
    Monitor your finances and know where you are with EXACCT, a "no
    frills" aid to financial control.
    
    EXACCT records and keeps a running total of all your financial
    transactions and allows for flagging groups of transactions to perform
    various operations. EXACCT is functional, yet easy to use, and can be
    used for checking/savings/credit accounts, business income and expenses,
    and loan payments.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EXACCT.DOC

{% raw %}
```
          EXACCT 2.1                                              PAGE:   1
          =================================================================


               TABLE OF CONTENTS                                  PAGE
               -------------------------------------------------------

               Program Specifications ............................  2
               General Description ...............................  3
               Program Uses ......................................  3
               Installation ......................................  4
               Selecting Processes ...............................  4

               Append ............................................  5
               Insert ............................................  6
               Modify ............................................  7
               Delete ............................................  7
               Undelete ..........................................  7

               Find ..............................................  8
               Totals ............................................  8
               Print .............................................  9
               Reorder ...........................................  9

               Name .............................................. 10
               Load .............................................. 10
               Save .............................................. 11
               Clear ............................................. 11

               Help .............................................. 11
               Quit .............................................. 12

               Function Keys ..................................... 12
                    F1 - Quick Mark/Unmark Toggle ................ 12
                    F2 - Repeat Last Find ........................ 12
                    F3 - Estimated Interest Calculator ........... 12
                    F4 - DOS Shell ............................... 12
                    F5 - Modify an Auto Description .............. 13
                    F6 - Display Auto Descriptions ............... 13
                    F7 - Modify a Key Code Description ........... 13
                    F8 - Display Key Code Descriptions ........... 13
                    F9 - Change Default Drive/Subdirectory ....... 13
                   F10 - File Directory .......................... 14

               Account Data Files ................................ 14
               Auto Description File ............................. 14
               Key Code Description File ......................... 15

               EXACCT 2.0 Enhancements ........................... 15
               EXACCT 2.1 Enhancements ........................... 16
               Future Enhancements ............................... 17

               Remarks ........................................... 18
          EXACCT 2.1                                              PAGE:   2
          =================================================================


          PROGRAM SPECIFICATIONS
          ----------------------

                 Name:  EXACCT 2.1 (November 1989)    
          Description:  Financial Account Recordkeeper 
                        (for checking, savings, and credit accounts; 
                        income and expenses; loans).
            Shareware:  Try it; if you like it, buy it.
                        Comments and problem reports will be appreciated.
                        Questions will be answered.
                        $15.00 for registered copy, 
                                   logo bypass, and 
                                   next release.
               Author:  John P. Gangwisch
                        320 Hadfield Road
                        Downingtown, PA  19335
           Disclaimer:  No warranties, expressed or implied, are included 
                        with this program.  All risk of use lies with the 
                        user. 
           Disk Files:  README      --  Read it first 
                        EXACCT.DOC  --  Documentation (you're reading it now)
                        EXACCT.EXE  --  The EXACCT (Exact Account) program
                        EXACCT.AD   --  The auto description file, 
                                        created the first time EXACCT is run
                        EXACCT.KCD  --  The key code description file, 
                                        created the first time EXACCT is run
                        ??????.@A   --  Data files for each account saved
             Hardware:  IBM PC/XT/AT/compatible with at least 256K of memory
                        DOS 2.1 or later
             To Start:  At DOS prompt, enter:  
                             EXACCT [[drive:][\subdir\][file]] [/FB]  
                        where:
                             "drive:" for default drive (optional)
                             "\subdir\" for default subdirectory (optional)
                             "file" for file to load (optional)
                             "/fb" for foreground and background colors (opt)
                                  valid colors codes for "f" and "b" include:
                                       N - No color     R - Red
                                       B - Blue         M - Magenta
                                       G - Green        Y - Yellow
                                       C - Cyan         W - White
                                  (the default colors are /WN)
          EXACCT 2.1                                              PAGE:   3
          ================================================================= 

     
          GENERAL DESCRIPTION
          -------------------

          EXACCT (Exact Account) is a financial account recordkeeping 
          program which is both easy to use and versatile.  It allows the 
          user to store financial transactions (+/-), keep a running 
          balance of those transactions, and mark transactions which have 
          appeared on a statement.  It also allows for the tagging (by way 
          of a key code) of transactions to provide for totaling of a 
          specific key code, of positive and negative transactions, and 
          of marked transactions.  


          PROGRAM USES
          ------------
  
          EXACCT can be used to record and balance a checking or savings 
          account.  Transactions can be entered in the same sequence they 
          appear in the account ledger in order to verify the running 
          balance of the account.  The key code field can be used to tag 
          entries that appear on statements.  Another field allows 
          transactions that have appeared on a statement to be marked and 
          totalled for reconcilement purposes (see function key F1 for 
          mark/unmark).

          EXACCT can be used to record credit card transactions.  Credit 
          card purchases and payments can entered as they occur.  When 
          statements are received, finance charges can be entered and 
          credit card statement amounts verified. 

          EXACCT can be used to record business income and expenses.  Each 
          transaction can be tagged (using the key code) to describe what 
          kind of transaction it is (such as T for transportation expense 
          and P for phone expense).  At tax time, separate totals can be 
          calculated for income, expenses, and each transaction type. 

          EXACCT can be used to record loan payments.  Each payment can be 
          entered as it is made.  The interest which has accrued since the 
          last payment can be estimated using the interest calculator and 
          entered into EXACCT in order to keep an estimate of the current 
          balance of the loan.  
          EXACCT 2.1                                              PAGE:   4
          ================================================================= 


          INSTALLATION
          ------------                                                  

          Floppy Disk:  - Format a new diskette using the DOS "FORMAT" 
                          command.  If this diskette will be used to boot 
                          (start up) the system, use a "FORMAT" command 
                          with the "/S" option (system diskette). 
                        - Copy the file "EXACCT.EXE" to the new diskette 
                          using the DOS "COPY" command.
                        - To run EXACCT, place the new diskette in the 
                          disk drive, change that drive to the default 
                          drive (if drive A, enter "A:" at the dos prompt), 
                          and then enter "EXACCT" at the DOS prompt.

            Hard Disk:  - Make a new subdirectory on the hard disk using 
                          the DOS "MD" command by entering "MD \EXACCT" 
                          at the DOS prompt.
                        - Copy the file "EXACCT.EXE" to the new 
                          subdirectory by entering 
                          "COPY A:EXACCT.EXE C:\EXACCT" at the DOS prompt.
                        - In the root directory of the hard disk, create a 
                          batch file to change the subdirectory, run 
                          EXACCT, and reset the subdirectory by entering
                          "COPY CON: C:\EXACCT.BAT"
                          ECHO OFF
                          CD \EXACCT
                          EXACCT %1 %2
                          CD \
                          CLS           
                          and finally CTL-Z and ENTER to end the copy.
                          To start EXACCT, enter "EXACCT" from any 
                          subdirectory on the hard drive.



          SELECTING PROCESSES
          -------------------

          Process options are displayed along the bottom of the main EXACCT 
          screen.

          A process can be selected from the list at the bottom of the 
          screen in either of two ways:
               - a process can be selected by pressing the letter key that 
                 corresponds to the first letter of the process name
               - a process can also be selected by moving the highlighted 
                 process box left and right (using the left and right 
                 arrow keys, or by using the tab and backtab keys) and 
                 pressing the enter key when the desired process is 
                 highlighted. 
          EXACCT 2.1                                              PAGE:   5
          ================================================================= 


          Additional processes can be selected by pressing the associated 
          function key (see Function Key section below).

          The ESC key (escape key) can be used to cancel (terminate) any 
          process and return the user to the main EXACCT screen. 


          APPEND
          ------

          From the main EXACCT screen, pressing the "A" key or selecting 
          "Appnd" will initiate the append process.  

          The append process allows the user to add entries to the end of 
          the file.  This process will continue to add entries until the 
          user exits the append process by pressing the ESC key. 

          The append process allows the user to enter the transaction/check 
          number, date, description, negative or positive amount, and key 
          code for the entry. 

          To end input in one field and start input in the next field, 
          press the tab key or the enter key.  The back tab key can be used 
          to go back and modify a previously entered field. 

          The transaction/check number field can be left blank by skipping 
          over it.  If entered, it must be numeric and cannot be more than 
          four digits long.  Pressing CTL-C (hold down CTRL key and press 
          the C key) will copy the last entered transaction/check number 
          and add 1 to it. 

          The date field must be entered in month-day-year format with no
          imbedded slashes.  It is automatically pre-filled with the date
          of the prior entry.  

          The description field can be left blank by skipping over it.  Any 
          description up to 22 characters can be entered.  Pressing CTL-C 
          will copy the description field from the prior entry.  Pressing 
          ALT-x (where x is any letter of the alphabet) will automatically 
          enter a description predefined to that letter (see function key 
          F5 for modifying auto descriptions).

          The negative amount field can be left blank by skipping over it.  
          If entered, it must be numeric with no more than 6 leading digits 
          or more than 2 decimal digits.  A decimal point must be entered 
          before any decimal digits.  The negative sign is optional.  If 
          left out, it will be assumed.  Commas are not allowed.  If an 
          amount is entered in the negative amount field, the positive 
          amount field will be skipped when the tab or enter key is 
          pressed.  Pressing CTL-C will copy the amount field from the 
          prior entry. 
          EXACCT 2.1                                              PAGE:   6
          =================================================================


          If an amount was entered in the negative amount field, the 
          positive amount field will be skipped when the tab or enter key
          is pressed.  Otherwise, the positive amount field can be left
          blank by skipping over it.  If entered, it must be numeric with
          no more than 6 leading digits or more than 2 decimal digits.  A
          decimal point must be entered before any decimal digits.  Commas
          are not allowed.  Pressing CTL-C will copy the amount field from 
          the prior entry. 

          The key code field is a two-character field and can be any 
          combination of letters, numbers, or special characters.  If lower 
          case letters are entered, they will automatically be converted to 
          upper case letters.  Leaving the field blank or entering spaces 
          are both considered identical values.  Pressing CTL-C will copy 
          the key code from the prior entry. 

          The backspace, left arrow, right arrow, insert, delete, home, and 
          end keys can be used to edit the current field. 

          Pressing the tab or enter key on the key code field will accept 
          the entry and start the append process over again. 

          Pressing the ESC key will end the append process and return the 
          user to the main EXACCT screen with the process selections being 
          redisplayed at the bottom of the screen. 


          INSERT
          ------

          From the main EXACCT screen, pressing the "I" key or selecting 
          "Ins" will initiate the insert process.  

          The insert process allows the user to add a single entry behind 
          the currently selected entry (the entry with the pointer). This 
          allows the user to manually maintain the order of the entries in 
          the file. 

          The method for entering information for the insert process 
          (transaction number, date, description, amount, and key code) is 
          identical to the method described for the append process, except 
          that it does not repeat and the date is not automatically copied 
          from the prior entry.  Instead, pressing CTL-C in the date field 
          will copy the date from prior entry. 
          EXACCT 2.1                                              PAGE:   7
          ================================================================= 


          MODIFY
          ------

          From the main EXACCT screen, pressing the "M" key or selecting 
          "Mod" will initiate the modify process.  

          The modify process allows the user to modify the currently 
          selected entry (the entry with the pointer).
          
          Modification of an entry's information is similar to how it is 
          appended or inserted, except that the fields are prefilled with 
          the currently selected entry's information.  


          DELETE
          ------

          From the main EXACCT screen, pressing the "D" key or selecting 
          "Del" will initiate the delete process.  

          The delete process allows the user to delete the currently 
          selected entry (the entry with the pointer).  The user will be 
          asked to verify the deletion of the selected entry.  Pressing "Y" 
          will delete the entry.  Pressing "N" will ignore the delete 
          request. 

          A deleted entry can be reinserted into the file at any position 
          using the undelete process, thus providing the ability to move 
          and copy entries within the file.


          UNDELETE
          --------

          From the main EXACCT screen, pressing the "U" key or selecting 
          "Undel" will initiate the undelete process.  

          The undelete process allows the user to insert the last entry 
          deleted behind the currently selected entry (the entry with the 
          pointer).

          The undelete process will first display the entry to be undeleted 
          (inserted behind the currently selected entry).  Pressing "Y" 
          will undelete this entry.  Pressing "N" will ignore the undelete 
          request. 
          EXACCT 2.1                                              PAGE:   8
          ================================================================= 


          FIND
          ----

          From the main EXACCT screen, pressing the "F" key or selecting 
          "Find" will initiate the find process.  

          The find process allows the user to search for a specific value 
          in any of the data field types.  The user is first asked for the 
          field to be searched.  Press: 
               N -- to search the transaction number field
               D -- to search the date field
               C -- to search the description field
               A -- to search the negative/positive amount fields
               B -- to search the balance field
               K -- to search the key code field

          The user will then be asked whether to start the search at the 
          top of the file (press "T") or at the currently selected entry 
          (press "S"). 

          The user will then be asked for the value to find.  Searches on 
          description and key code will ignore differences in upper and 
          lower case. 

          If the find is successful, the found entry will become the 
          currently selected entry.  If the find is unsuccessful, the 
          message "Not found" will be displayed. 

          Function key F2 can be used to repeat the last find starting 
          after the currently selected entry.


          TOTALS
          ------

          From the main EXACCT screen, pressing the "T" key or selecting 
          "Totals" will initiate the totals process.

          The totals process allows the user to get an amount total for all 
          entries that have a specific key code.  It also allows the user 
          to total all the positive, negative, marked, or unmarked entries. 

          The user must enter a "K" and the key code to be totalled to 
          total all the entries with a specific key code, a "+" to total 
          all the entries with positive amounts, a "-" to total all the 
          entries with negative amounts, an "M" to total all marked 
          entries, or a "U" to total all unmarked entries. 

          Function keys F7 and F8 allow the user to maintain a list of 
          descriptions which are associated with specific key codes and 
          are displayed along with the totals. 
          EXACCT 2.1                                              PAGE:   9
          =================================================================


          PRINT
          -----

          From the main EXACCT screen, pressing the "P" key or selecting 
          "Print" will initiate the print process.  

          The print process allows the user to print either entries or 
          totals.  The user may print the entries or totals for:  all
          entries, only those entries from the selected entry to the end of 
          the file, or only those entries within a specific date range. 

          Function keys F7 and F8 allow the user to maintain a list of 
          descriptions which are associated with specific key codes.  These 
          descriptions are used in the printing of totals for key codes. 


          REORDER
          -------

          From the main EXACCT screen, pressing the "R" key or selecting 
          "Reord" will initiate the reorder process.

          The reorder process allows the user to reorder (sort) the file in 
          ascending or descending sequence on any of the data field types.  
          The user is first asked for the field to reorder on.  Press: 
               N -- to reorder by transaction number
               D -- to reorder by date 
               C -- to reorder by description 
               A -- to reorder by negative/positive amount
               K -- to reorder by key code

          The user then must select whether to reorder the file in 
          ascending order (press "A") or descending order (press "D"). 

          The reordering of the entries is done in memory.  This means that 
          no disk space is needed for the reordering and that the original 
          disk file loaded will remain unchanged until a save is done.  
          
          NOTE:  If a reordered file is saved, there may be no way to 
          return the file to the order in which the entries were originally 
          entered. 
          EXACCT 2.1                                              PAGE:  10
          =================================================================


          NAME
          ----

          From the main EXACCT screen, pressing the "N" key or selecting 
          "Name" will initiate the name process.  

          The name process allows the user to assign a file name to a 
          currently unnamed set of entries or to rename the current set of 
          entries. 

          The file name must follow the standard DOS file name conventions 
          and can be 1 to 8 characters in length.  No period or extension 
          should be entered.  EXACCT account automatically assigns an 
          extension of ".@A" to data files.


          LOAD
          ----

          From the main EXACCT screen, pressing the "L" key or selecting 
          "Load" will initiate the load process.  

          The load process allows the user to load a file of entries (an 
          account) into the EXACCT program from a disk file on the default 
          drive/subdirectory (see function key F9 for changing the default 
          drive/subdirectory). 

          If the currently loaded file has been modified, the user will 
          first be asked whether or not he/she wants to save the current 
          file.

          The user is asked for the file name to load.  The file name must 
          follow the standard DOS file name conventions and can be 1 to 8 
          characters in length.  No period or extension should be entered.  
          EXACCT account automatically assigns an extension of ".@A" to 
          data files.

          If the file name is left blank and enter is pressed, a file 
          directory of EXACCT files will be displayed for the default 
          drive/subdirectory. 
          EXACCT 2.1                                              PAGE:  11
          =================================================================


          SAVE
          ----

          From the main EXACCT screen, pressing the "S" key or selecting 
          "Save" will initiate the save process.  

          The save process allows the user to save the currently loaded 
          entries to a disk file on the default drive/subdirectory (see 
          function key F9 for changing the default drive/subdirectory). 

          The file name to save to will be prefilled with the current file 
          name.  This name can be modified by using standard editing keys.
          Pressing return will save the currently loaded entries to a data
          file with an extension of ".@A".


          CLEAR
          -----

          From the main EXACCT screen, pressing the "C" key or selecting 
          "Clear" will initiate the clear process.  

          The clear process allows the user to purge all the currently 
          loaded entries from memory.  It also clears the current file 
          name.

          If the currently loaded file has been modified, the user will 
          first be asked whether or not he/she wants to save the current 
          file.


          HELP
          ----

          From the main EXACCT screen, pressing the "H" key or selecting 
          "Help" will initiate the help process.  

          The help process provides the user with descriptions of the 
          available processes.  

          Pressing ESC will return the user to the main EXACCT screen.
          Pressing the first letter or function key of a process will 
          initiate that process.
          EXACCT 2.1                                              PAGE:  12
          =================================================================


          QUIT
          ----

          From the main EXACCT screen, pressing the "Q" key or selecting 
          "Quit" will initiate the quit process.  

          The quit process allows the user to exit the EXACCT program.  
          
          The user will be asked to verify his/her request to quit the 
          program.  Pressing "Y" will exit EXACCT.  Pressing "N" will 
          return the user to the main EXACCT screen.

          If the currently loaded file has been modified, the user will 
          be asked whether or not he/she wants to save the current file. 


          FUNCTION KEYS
          -------------

          F1  -- QUICK MARK/UNMARK TOGGLE.  
                 This process affects only the currently selected entry.  
                 If the mark field is marked, this process will blank out 
                 the mark.  If the mark field is blank, this process will 
                 mark the currently selected entry with a "#".  This is 
                 useful for marking which entries have appeared on 
                 statements and which ones have not. 

          F2  -- REPEAT LAST FIND.  
                 This process will repeat the last find command entered 
                 starting at the currently selected entry.  If the end of 
                 file is reached ("Not found" message), pressing this key 
                 again will start the search again from the top of the 
                 file. 

          F3  -- ESTIMATED INTEREST CALCULATOR.  
                 This process prompts the user for principal amount, annual 
                 interest rate, and number of days.  It returns an 
                 estimated interest amount (assumes daily compounding).  
                 This is useful for estimating the amount of interest 
                 accrued on a credit account or loan since the last payment 
                 (it is not designed for calculating monthly payments for a 
                 loan or mortgage). 

          F4  -- DOS SHELL.  
                 This process allows the user to temporarily exit the 
                 EXACCT program and return to the DOS prompt.  The EXACCT 
                 program has not been terminated, only suspended.  When the 
                 user has completed his/her DOS processing, entering "EXIT" 
                 at the DOS prompt will resume the EXACCT program.  
          EXACCT 2.1                                              PAGE:  13
          =================================================================


          F5  -- MODIFY AN AUTO DESCRIPTION.
                 This process allows the user to add or modify an auto 
                 description.  The user is prompted for the ALT-key 
                 combination to be associated with a description.  Next the 
                 user is presented with either a blank field (an add) or 
                 the currently defined description (a modify).  The user 
                 can then enter or modify the description for this ALT-key 
                 combination.  Pressing enter will accept the description. 

          F6  -- DISPLAY AUTO DESCRIPTIONS.
                 This process allows the user to display all the automatic
                 descriptions assigned to various ALT-key combinations.  
                 Auto descriptions allow the user to fill the description 
                 field of an entry with a predefined description.  Auto 
                 description are assigned to 1 of 26 ALT-key combinations 
                 (ALT-A through ALT-Z).  After an auto description is 
                 defined (see F5), the user, during addition or 
                 modification of an entry, can press a letter while holding  
                 down the ALT key and prefill that entry with an auto 
                 description.  Auto descriptions are stored in the 
                 EXACCT.AD file and are shared by all account data files. 

          F7  -- MODIFY A KEY CODE DESCRIPTION.
                 This process allows the user to add or modify a 
                 description for a key code.  The user is prompted for the 
                 key code to describe.  Next the user is presented with 
                 either a blank field (an add) or the currently defined 
                 description (a modify).  The user can then enter or modify 
                 the description for this key code.  Pressing enter will 
                 accept the description.

          F8  -- DISPLAY KEY CODE DESCRIPTIONS.
                 This process allows the user to display all the 
                 descriptions assigned to various key codes.  Key codes can 
                 be used without assigning descriptions to them.  Key code 
                 descriptions are useful for describing the use of a key 
                 code.  Key code descriptions are only displayed when the 
                 user requests a total for a key code or when he/she prints 
                 totals for the account.  Key code descriptions are stored 
                 in the EXACCT.KCD file and are shared by all account data 
                 files. 

          F9  -- CHANGE DEFAULT DRIVE AND/OR SUBDIRECTORY.  
                 This process will prompt the user for the drive name 
                 and/or subdirectory to be used for loading files, saving 
                 files, and displaying file directories (examples are "B:", 
                 "\ACCTS", or "B:\ACCTS").  This does not affect the 
                 assumed location of the EXACCT.KCD and EXACCT.AD files.
          EXACCT 2.1                                              PAGE:  14
          =================================================================


          F10 -- FILE DIRECTORY.  
                 Display all EXACCT account data files (.@A) on the default 
                 drive and/or subdirectory (see F9 for changing default 
                 drive and/or subdirectory). 


          ACCOUNT DATA FILES
          ------------------

          Account data file names end with an extension of ".@A".

          Account data files are displayable ASCII files.  Each file entry 
          ends with a carriage return and a line feed character.  Each file 
          ends with a control Z end-of-file marker. 

          Account data file entries can contain from 41 to 44 bytes of data 
          per record depending on whether of not the key code and mark 
          fields are included. 

          The account data file entry layout is as follows:
               Date   -- 6 bytes, format yymmdd, right justified, 
                         leading zeroes
               Number -- 4 bytes, 1 to 4 numeric digits, right 
                         justified, leading spaces
               Desc   -- 22 bytes, left justified  
               Amount -- 9 bytes, 1 to 8 numeric digits, leading sign, 
                         no decimal point, right justified, leading 
                         spaces
               Key    -- 2 bytes, upper case only, optional field
               Mark   -- 1 byte, either # or blank, optional field

          Account data files can be created and/or modified using a text 
          editor such as PC-WRITE or WordStar (non-document mode).  Files 
          can be externally sorted using the DOS Sort command. 

          Minimum number of entries per file is 0.

          Maximum number of entries per file is 1200.
 

          AUTO DESCRIPTION FILE
          ---------------------

          The auto description file is named "EXACCT.AD" and is created on 
          the drive and/or subdirectory currently active when the EXACCT 
          program is started. 

          This auto description file will be used for all account data 
          files accessed.  
          EXACCT 2.1                                              PAGE:  15
          =================================================================


          The auto description file is updated and saved whenever an auto
          description is modified. 

          The auto description file is a random access data file which 
          should not be modified with a text editor. 

          Minimum number of entries per file is 0.

          Maximum number of entries per file is 26.


          KEY CODE DESCRIPTION FILE
          -------------------------

          The key code description file is named "EXACCT.KCD" and is 
          created on the drive and/or subdirectory currently active when 
          the EXACCT program is started. 

          This key code description file will be used for all account data 
          files accessed.  

          The key code description file is updated and saved whenever a key 
          code description is modified.

          The key code description file is a random access data file which 
          should not be modified with a text editor.

          Minimum number of entries per file is 0.

          Maximum number of entries per file is 600.


          EXACCT 2.0 ENHANCEMENTS
          -----------------------

          Corrected a bug which caused the Load function to drop entries 
          which had descriptions containing commas (Invalid entry length 
          error). 

          Switched order in which fields are displayed.  Transaction/check
          number now precedes date.

          Condensed two help screens into one.

          Simplified use of function keys.

          Append mode now copies the date from the previous entry.
          EXACCT 2.1                                              PAGE:  16
          =================================================================


          Full field editing capability, including:
                    LEFT -- moves cursor left one character 
                   RIGHT -- moves cursor right one character
                    HOME -- moves cursor to first character
                     END -- moves cursor behind last character
                CTL-LEFT -- moves cursor left one word
               CTL-RIGHT -- moves cursor right one word
                     INS -- inserts blank character at cursor
                     DEL -- deletes character at cursor
                    BKSP -- deletes character to left of cursor
                CTL-BKSP -- deletes from cursor to end of field

          During field editing, the enter key now has the same function
          the tab key.  The entry is now accepted as complete when the
          tab or enter key is pressed on the key code field.

          EXACCT can now be started from the DOS prompt with an optional
          drive, subdirectory, and/or file name behind it.  If a 
          directory is entered without a file, the subdirectory name 
          must end with a "\".

          EXACCT now defaults to color and monochrome mode.  The option
          "/B" has been added to set colors for computer with CGA cards
          and single color monitors.  (Note:  This is replaced by the 
          "/fb" option in version 2.1).


          EXACCT 2.1 ENHANCEMENTS
          -----------------------

          Increased the size of the key code field from 1 to 2 characters.

          Separated the mark/unmark function (#) from the key code 
          function.  Marks are now stored in a mark field.  Account data 
          files from prior versions will be automatically converted to the 
          new file format.

          The speed of the reorder function has been greatly increased, 
          thus making it a more useful function.  NOTE:  once an account 
          data file is reordered AND SAVED, the original order (as they 
          were entered), may not be able to be re-established.

          The maximum number of entries per account data file has been 
          increased from 900 to 1200 entries.

          Added a CTL-C editing command which copies the field value from 
          the prior entry.  In the case of transaction/check number, it 
          also increments the value by one.

          Added auto descriptions which allows the user to assign commonly 
          used descriptions to the ALT-A through ALT-Z keys.
          EXACCT 2.1                                              PAGE:  17
          =================================================================


          The print function now allows printing based on date range, as 
          well as from top entry or selected entry, for the printing of 
          both entries and totals. 

          Added totalling of unmarked entries.

          Registration price has increased to $15.

          Source code is no longer available for sale.

          Added the ability to set the foreground and background colors 
          by appending a "/fb" string at the end of the start-up command.  
          Valid values for "f" and "b" include:  N - No color, B - Blue, 
          G - Green, C - Cyan, R - Red, M - Magenta, Y - Yellow, and 
          W - White.  (Note:  This replaces the "/B" option that existed in 
          version 2.0).

          Key code descriptions are no longer stored in ".@K" files.  They 
          are now stored in the "EXACCT.KCD" file.  Before, key code 
          description files related one to one with account data files.  
          Now, there is only one key code description file which is used by 
          all account data files (this is also true of the new auto 
          description file, "EXACCT.AD").

          NOTE:  EXACCT 2.1 has a different account data file (".@A") 
          format than previous versions.  Older files will be automatically 
          converted when loaded and saved by version 2.1.  Once older files
          have been converted though, they will no longer be loadable by 
          earlier versions of EXACCT.


          FUTURE ENHANCEMENTS
          -------------------

          Improve estimated interest calculation feature for use with 
          credit card accounts.

          Allow the total function to display totals for all key codes at 
          one time, instead of just individually.

          Allow for the automatic filling of the amount and/or key code 
          along with the description when using the auto description 
          feature.

          Provide an improved print of totals by sorting the key codes.
          EXACCT 2.1                                              PAGE:  18
          ================================================================= 


          REMARKS
          -------

          I wrote this program because:
               - I like to program
               - I needed to balance my wife's check book

          Even though it takes a considerable amount of time to enter all 
          the information for a financial account, I have found this 
          program very useful in finding discrepancies between personal 
          account ledgers and bank statements.

          I will appreciate any comments you have to make about this 
          program (especially problem reports).  I do plan to continue to 
          make improvements to it as time allows.

          Thank you for using EXACCT.

```
{% endraw %}

## FILE1306.TXT

{% raw %}
```
Disk No: 1306                                                           
Disk Title: Gantt Charting and Exacct                                   
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Gantt Charting                                           
Author Version: 1.00                                                    
Author Registration: None.                                              
Special Requirements: CGA, SIDEWAYS, and dot-matrix printer.            
                                                                        
Keep track of that project, know where your resources are and how       
they've been committed.  Analyze your progress with a Gantt chart.      
                                                                        
Produce Gantt charts lengthwise on paper.  Plot up to 20 tasks with     
timespan ranges from 24 to 36 months.  If space allows, timespan        
increments can be in weeks.  The program is self-explanatory and checks 
extensively for invalid input.                                          
Program Title: Exacct                                                   
Author Version: 2.1                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Monitor your finances and know where you are with EXACCT, a ``no        
frills'' aid to financial control.                                      
                                                                        
EXACCT records and keeps a running total of all your financial          
transactions and allows for flagging groups of transactions to perform  
various operations.  EXACCT is simple and easy to use, and can be used  
for checking/savings/credit accounts, business income and expenses, and 
loan payments.                                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GANTT.DOC

{% raw %}
```

                     GANTT CHARTING PROGRAM
                with SIDEWAYS(c) printer utility
                           USER MANUAL


    The program is self-explanatory and checks extensively for
invalid input.  The user may return to the main menu at any time
by pressing the <ESC> key.  You will be asked for confirmation:

                  ABANDON THIS CHART? (Y/N) _

Cursor movement in this program is either:
                         with the arrow keys,
                         <enter>
                         mouse (if available)

MAIN MENU
                    <<< MAIN MENU >>>

                    1  NEW CHART
                    2  UPDATE OLD CHART
                    3  PRINT CHART

                    Q  QUIT


(Select #1 to make a new chart)

A. SELECT  1) Wide chart  (for printing sideways or on wide printer)
           2) Narrow chart (for printing on narrow printer)		

B. ENTER TITLES

ENTER A 3-LINE CHART TITLE:        ______________________________
                                   ______________________________
                                   ______________________________

ENTER 3 LINES OF CREDITS/FOOTINGS: ______________________________
                                   ______________________________
                                   ______________________________

     a. When finished, move cursor to the DONE box and press
<enter> (or left mouse button).

     b. You are allowed up to 3 lines for a chart title.  Titles
may be a maximum of 30 characters long, and will be printed out
in enlarged font.

     c. You are allowed up to 3 lines of chart footers which are
printed out in regular size.  It is recommended to enter these in
lower case letters to make them appear smaller.

B. ENTER TASK NAMES

          ENTER THE NAMES OF UP TO 20 TASKS TO SCHEDULE:
                                 ______________________________
                                 ______________________________
                                 ______________________________
                                 ______________________________
                                               .
                                               .
                                               .
Task names may be up to 30 characters in length.
After all tasks are entered, move the cursor to the DONE box and
press <enter> (or left mouse button).


C. ENTER DATES

ENTER PROJECT START DATE (MM/DD/YY): __/__/__

ENTER PROJECT FINISH DATE (MM/DD/YY): __/__/__


Start and finish dates must be in the format of MM/DD/YY.
Leading zeros are optional.
Dates are checked for validity, and an invalid entry is blanked
out for re-entry.
The  finish  date  must be after the  start  date.
Elapsed time must be within the range specified.


D. ENTER TIME SPANS

If using a mouse, hold down the left button to draw a time span,
and the right mouse button to erase.

If not using a mouse,  use arrow keys to position.  Press any
printable key to draw a time span, and <space> to erase.

After all time spans are entered, move the cursor to the DONE box
and press <enter>.

Only part of the chart is displayed on the screen at once.  When
the cursor is moved to the right edge of the screen, the second
half of the chart appears for editing.


E. SAVE CHART

                FILENAME TO SAVE UNDER:________

Enter a valid filename. If the filename exists then you will be
asked asked:

                      OVERWRITE (Y/N)? _

If you answer N, then you will again be prompted for a filename.

A <space> will allow you to select a file from disk, or to change
drives/paths.  Beware--this version of GANTT does not check for
disk space until it saves--if there is no room, your present
chart will be lost!  (9000 bytes are needed).

You will now returned to the main menu.


To print your chart, select
                        PRINT CHART

You will be allowed to either print the file just saved, or to
select a file from those available on disk.

UPDATE OLD CHART is similar to NEW CHART except that the
information from the old chart is already entered; just change
what you want to.


Any comments/suggestions/bug reports should be reported to:

Karen Stallworth
Box 253
Macomb, Il. 61455
(309) 833-3883

--KS 5/3/87
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
CONFIGURING SIDEWAYS(c) for GANTT:

           Run SIDEWAYS

           You are greeted by the following screen:

                  S I D E W A Y S  version ---
Printer port:       LPT1

Vertical form size (inches):  11.00
Horizontal form size (inches): 8.00

Character font:                 ????         -- x -- dot matrix
Density:                        Double
Character spacing (dots):       ?         ---- characters per inch
Line spacing (dots):            ?         ---- lines per inch

Left margin (inches):          0.50         -- lines per page
Top margin (inches):           0.75
Bottom margin (inches):        0.00

Starting page:                    1
Glue lines:                       0
Directory: A:\
Enter name of print file: ---------

    You will need to enter information in the place of the ?? marks,
to center the chart on the paper.  The exact numbers you enter
will vary with the printer you are using.

    First fill in the following:
        Density: Double
        Left margin:  .5
        Top margin:   .75
        Bottom margin: 0
        Starting Page: 1
        Glue lines:    0
        Directory: A:
        Print file:  (leave blank!!)

    While you are filling in these fields, the fields on the right
side of the chart will be adjusting to your data.

You need the 'Lines per page' to be 53 or slightly less.
             'Characters per inch' to be about 11.

Vary the: Character font
          Character spacing
          Line spacing

When you have finished, press
      <F3> to save this as a named options file.
You will be asked for the name. Type GANTT
Now, save this configuration as Default by pressing
      <F9>
You are finished now, so press <F10> to exit.

Adjust these parameters as needed to center your charts; always
save with F3 to GANTT.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
Programming details:


GANTT CHARTING PROGRAM
by: Karen Stallworth
    Box 253, 503 N. McArthur
    Macomb, Il  61455
    (309) 833-3883
Date: 8/87

This program produces Gantt Charts on paper.  Up to 20
task names of 30 characters or less are input, and the maximum
timespan ranges from 36 months to 24 months, depending on the
length of the longest task.  Timespan increments are in weeks,
space permitting.

The printer utility Sideways (c) Funk Software, Inc. is needed 
for sideways printing wide charts.

Included on these disks are:

   GANTT.COM      Gantt program

   GANTT.PRN      Sample Gantt chart (wide)
   GANTT.DTA
   NARROW.PRN       "           "    (narrow)
   NARROW.DTA    

   GANTT.DOC       User manual (this file)




                 PROGRAMMER'S ABSTRACT

Environment: IBM PC/XT/AT under MS-DOS 3.0+
             Turbo Pascal 3.0+ (3.02A+ recommended)
             Color Graphics Adapter
             SIDEWAYS printer utility (c) Funk Software, Inc.
             Dot matrix printer
             Mouse (optional) -- Microsoft or Mouse Systems
                 (other may work)

Project summary: This is a business graphics package for the use of
producing Gantt Charts printed sideways on paper.

    The Gantt Charting Program is  programmed in Color Text
Mode, but could be easily adapted for monochrome screens by
changing the color constants at the beginning of the program to
black and white.  A Color Graphics Adapter is still required,
though, for the use of the graphics pages.  Only half of the
Gantt Chart fits on the screen at a time; the other half is kept
on the computer's graphics page.  This speeds the transition
between pages when editing.  Page 1 and 2 were used.

     Data structures were simple, and are well commented in
the soure code.

     As noted in the source code, this program must be
COMPILED with the mAximum stack size reduced to 600 (if that is
too small, try higher).  This is to allow the module SPAWN to run
the program SIDEWAYS as a child process.


Suggestions for future improvement:

1) Add more tasks: up to 42 tasks can be programmed using the
paging method;  many more may be added by using linked lists.

2) Make the program bomb proof.  The program should check on free
disk space before any save, and allow the user to change disks.
The environment should be searched for the comspec, or programmed
so it is not necessary.

3) A printer installation routine could be included.


                                     --KS
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1306

     Volume in drive A has no label
     Directory of A:\

    EXACCT   DOC     41934  11-10-89   9:39a
    EXACCT   EXE    122278  11-12-89   9:42a
    FILE1306 TXT      2591  12-11-89   1:28p
    GANTT    COM     51847   5-10-88  11:01p
    GANTT    DOC      8960   5-10-88  11:22p
    GANTT    DTA      3844  11-11-86   1:25p
    GANTT    INC     45915   5-10-88  10:59p
    GANTT    PAS     49857   5-10-88  10:58p
    GANTT    PRN      4830  11-11-86   1:25p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1310   2-21-89  11:26a
    MANUAL   BAT       147   1-13-89  12:16p
    MOUSE    TBP       157   8-28-86  11:00a
    NARROW   DTA      3844   5-10-88  11:02p
    NARROW   PRN      3348   5-10-88  11:02p
    READ     ME       3014  11-11-86  11:50a
    README            1843  11-10-89   9:38a
           17 file(s)     345757 bytes
                            9216 bytes free
