---
layout: page
title: "PC-SIG Diskette Library (Disk #1581)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1581/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1581"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIMPLICITY"

    SIMPLICITY is an easy-to-use record-keeping database system that also
    prints mailing labels and Rolodex cards. It is fully menu-driven, so
    there is no need to read lengthy documentation in order to begin and no
    prior experience with database programs is necessary. SIMPLICITY is
    perfect for organizations, small businesses, and home use.
    
    SIMPLICITY supports a 500 record database, with each record having the
    following format: last name, first name, work phone, birthday, spouse
    name, work phone, up to six children's names and birthdays, street
    address, city, state, nine digit zip code, mailing zone, anniversary,
    personal note field, extended personal note card, and join date. All
    fields, except the first two, are optional. You can add, delete, or
    edit any record in the database using simple menu option selections.
    Search the database for matching records based on specific key fields.
    
    SIMPLICITY provides nine reports, three Rolodex options, and eight
    mailing label options. Printing reports, cards and labels may be by
    date range, zip code, alphabetic by letter, mailing code, or by
    selected fields. A comprehensive record directory can be printed that
    is a complete list of the database content sorted alphabetically.  A
    birthday report can be printed that will print a list of names who have
    a birthday on a given date or within a date range.
    
    Mailing labels can be printed by first name, spouse name, or both
    names. Mailing labels can be sorted by zip code and up to six copies
    can be printed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1581.TXT

{% raw %}
```
Disk No: 1581                                                           
Disk Title: Simplicity                                                  
PC-SIG Version: S1.1                                                      
                                                                        
Program Title: Simplicity                                               
Author Version: 2.1                                                     
Author Registration: $12.00                                             
Special Requirements: Hard Drive and ANSI.SYS from MS-DOS.              
                                                                        
SIMPLICITY is an easy-to-use record keeping database system that also   
prints mailing labels.  SIMPLICITY is fully menu-driven with all options
selected from a series of menus.  There is no need to read through      
lengthy documentation in order to begin using SIMPLICITY.  No prior     
experience with database programs is needed to become productive with   
SIMPLICITY.  SIMPLICITY is perfect for organizations, small businesses, 
and home use.                                                           
                                                                        
SIMPLICITY supports a 500 record database with each record having the   
following format; Last Name, First Name, Birthday, Spouse Name,         
Birthday Street Address, City, State, Zip Code, Phone Number, and       
Personal Notes. All fields, except the first two, are optional.  You    
can add, delete, or edit any record in the database using simple menu   
option selections. You can also search the database for matching        
records based on specific key fields.                                   
                                                                        
SIMPLICITY provides two reporting functions.  A Comprehensive Record    
Directory can be printed that is a complete list of the database        
content sorted alphabetically.  A Birthday report can be printed that   
will print list of names who have a birthday in a given month.          
                                                                        
Mailing labels can be printed by first name, spouse name, or both       
names. Mailing labels can be sorted by zip code and up to six copies    
can be printed.                                                         
                                                                        
                                                                        
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
║                 <<<<  Disk #1581  SIMPLICITY  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install program on hard drive, type:  INSTALL (press ente)           ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║ To print documentation, type:  COPY SIMPLE.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SIMPLE21.DOC

{% raw %}
```








                                SIMPLICITY V.2.1
                        Copyright 1989  John M. Phillips
                                  Version 2.0

     SIMPLICITY V.2.1  is an easy-to-use computer software system designed
     to run on IBM Personal Computer family. SIMPLICITY V.2.1 is designed
     to increase productivity by keeping relevant information about
     people!  This information can then be used to print mailing labels,
     Rolodex (tm) cards, and a variety of reports.

     SIMPLICITY V.2.1 is menu-driven, meaning that all available options
     are selected from a series of menus. No prior experience with
     database programs is needed to become productive with SIMPLICITY
     V.2.1. SIMPLICITY V.2.1 was programmed by John M. Phillips for the
     First United Methodist Church of Allen, Texas. SIMPLICITY V.2.1 is
     capable of storing 500 records.

     SIMPLICITY V.2.1 has many available options including:
                  
                  * Add a member
                  * Change a member
                  * Delete a member
                  * Inquire a member
                  * Print labels or Rolodex cards
                  * Print reports
                  * Exit SIMPLICITY V.2.1 (SAVE DATABASE)

     SIMPLICITY V.2.1 requires and IBM PC or compatible, and at least 384K
     of available memory. SIMPLICITY V.2.1 must be executed from a hard
     disk system and you must have 500,000 bytes of hard disk space
     available to install SIMPLICITY V.2.1. If a color graphics card and
     monitor are used, SIMPLICITY V.2.1 chooses to display titles,
     prompts, and informative messages in aesthetically pleasing colors.
     Monochrome systems may use SIMPLICITY V.2.1 and no text distortion
     will occur due to color conflicts. A printer attached to the PRN: OR
     LPT1: port of the PC completes the functionality of SIMPLICITY V.2.1.

     SIMPLICITY V.2.1 was designed and programmed by John M. Phillips
     entirely in Utah COBOL version 5.0 on an IBM PC XT compatible
     computer. Many, many hours of work went into this product. If you
     intend to use the SIMPLICITY V.2.1 system for your organization,
     please register your copy by completing the registration form at the
     back of this manual and sending in your registration fee. Should any
     updates occur, registered users will receive automatic updates.













                                     PAGE 1





                      IMPORTANT NOTES ABOUT ENTERING DATA

     It is not necessary to press "RETURN" or "ENTER" after any menu
     selection or prompt. Simply press the requested key(s) and you will
     automatically move to that option. For example, the SIMPLICITY V.2.1
     main menu asks you to choose between Seven options (1-7). To go to
     option 1, press the "1" key and you will be immediately taken to the
     ADD MEMBER screen.

     It is STRONGLY recommended that you type all names in UPPER CASE.
     SIMPLICITY V.2.1 uses a case-sensitive algorithm to search the index
     when locating records. For example if you typed the last name as
     'PHILLIPS' and the first name as 'John' and then did an inquiry on
     last name as 'PHILLIPS' and first name as 'JOHN', SIMPLICITY V.2.1
     would tell you that the requested member does not exist. You may feel
     free to type all other fields in upper or lower case, but, as a rule
     of thumb, put all NAME fields in UPPER CASE. SIMPLICITY V.2.1 will
     require you to type the last name in all caps.


                              AUTOMATIC FIELD SKIP

     When entering input fields, such as birthday or phone number, the
     cursor will automatically skip to the next available field when you
     have completely filled the previous field. For instance, if you typed
     "214" in the area code input field, the cursor would move over to the
     prefix field as soon as you typed the "4" in the area code. This
     feature is called "AUTOSKIP".


                             DOS SORT REQUIREMENTS

     SIMPLICITY V.2.1 utilizes the DOS SORT.EXE routine to perform the
     sort routines while reports, labels and rolodex cards are being
     printed. In order for SIMPLICITY V.2.1 to operate properly, you must
     have SORT.EXE (included on your original DOS disk) located on your
     hard disk. In addition, the subdirectory that SORT.EXE is located
     must be on the PATH specified when your computer is booted up.

     Most hard disk users place all the DOS utilities in a subdirectory
     named C:\DOS. The PATH command placed in the AUTOEXEC.BAT file
     (located in the root directory of C:\) usually reads: PATH
     C:\;C:\DOS.

     Consult your system manuals for a complete description of
     subdirectories and paths. The main points to remember are:

                  o  SORT.EXE is on your hard disk
                  o  your PATH points to that subdirectory








                                     PAGE 2





                                CURSOR MOVEMENT


     There are several keys available which allow you to move the "cursor"
     around the screen. These keys are listed below.

     HOME                                  Moves the cursor to the first available input field
     END                                  Moves the cursor to the last available input field
     ENTER                                  Accepts information and moves to the next field
     UP-ARROW,
       PG UP,
       SHIFT-TAB                      Moves the cursor to the previous field
     DOWN-ARROW,
       PG DN,
       TAB                                  Moves the cursor to the next available field

     When entering information, there are several keys which control the
     "cursor" within the input field. These keys are listed below.

     BACKSPACE                     Move the cursor back one character and erase that
                                       character (called "destructive backspace")
     LEFT ARROW                     Move the cursor back one character and leave all
                                       other characters intact ("nondestructive backspace")
     RIGHT ARROW                     Move the cursor forward one character and leave all
                                       other characters intact

     Other miscellaneous keys that are available are listed below:

     F1                                  Help key (available on most screens)
     F2                                  Last name search/Personal notes
     F10                                  Accept all input information (available on most
                                       input screens)
     ESC                                  Escape key to cancel most transactions and return
                                       to the previous menu (available on most screens)

     Any other key pressed will generally result in the computer "beeping"
     at you to signal an invalid key press.




















                                     PAGE 3





                                    STARTING


     Installing SIMPLICITY V.2.1 is a simple process. Insert the
     SIMPLICITY V.2.1 master disk into drive A: or B:. From your DOS
     prompt, change to that drive by typing either A: or B:. Once you have
     changed the drive, type INSTALL. The rest of the install procedure is
     automatic and will take about 5 minutes. When complete, the install
     procedure will have placed all the required files on your hard disk
     under the directory C:\SIMPLE21.

     To start the SIMPLICITY V.2.1 system, change to your hard disk by
     typing C: from the DOS prompt. Enter the SIMPLICITY V.2.1
     subdirectory by typing CD\SIMPLE21. Once in the SIMPLICITY V.2.1
     subdirectory, type SIMPLE21 and the SIMPLICITY V.2.1 main menu will
     appear.


                            UPGRADE FROM VERSION 2.0

     If you are currently using SIMPLICITY version 2.0, you do not have to
     enter all your data into SIMPLICITY version 2.1! A transfer mechanism
     has been provided for you.

     After installing version 2.1 on your hard disk, you must copy your
     data and index files from version 2.0 to the SIMPLE21 subdirectory.
     If your data is currently stored on floppy disk, type the following
     commands from your DOS prompt:

                  COPY A:\ANSI.IDX  C:\SIMPLE21\A.IDX
                  COPY A:\ANSI.RND  C:\SIMPLE21\A.RND

     If you already have SIMPLICITY version 2.0 on your hard disk, type
     the following commands from your DOS prompt:

                  COPY C:\pathname\ANSI.IDX  C:\SIMPLE21\A.IDX
                  COPY C:\pathname\ANSI.RND  C:\SIMPLE21\A.RND

     Be sure to replace "pathname" with the subdirectory that SIMPLICITY
     version 2.0 resides.

     Once the data and index have been copied in the above format, change
     to the SIMPLCITY 2.1 subdirectory (from DOS type: CD\SIMPLE21), and
     type the following command:

                  RUN5 TRANSFER

     Your old data will be transformed to the new format. You may now feel
     free to remove A.IDX and A.RND from the SIMPLE21 subdirectory.








                                     PAGE 4





                           SIMPLICITY V.2.1 MAIN MENU


     The main menu has seven options on it (as previously mentioned
     above). To select an option, enter the number corresponding to the
     menu item you desire at the "Your choice?" prompt. You will be taken
     to that option. The SIMPLICITY V.2.1 color system uses BLUE for
     titles and headings, GREEN for informative messages, and RED for
     choice prompts. Choice prompts are usually 1-key responses, like Y
     for yes or N for no. All prompts DO NOT require that you press ENTER
     after the choice.

     In addition to the seven options, the main menu also displays
     pertinent information at the top of the screen including the number
     of records stored in the database.

     Listed below is a description of each option available in SIMPLICITY
     V.2.1.







































                                     PAGE 5





                                  ADD A MEMBER


     This menu option allows you to add information to your database. When
     ADD A MEMBER is chosen from the main menu, a new screen appears and
     awaits your input. You will see the information that is to be entered
     in a nice, formatted fashion on the screen. The fields to be entered
     are:

     FIELD NAME                          DESCRIPTION                                                                                                           LENGTH    OTHER
     ----------                          -----------                                                                                                           ------    -----
     LAST                                  LAST NAME                                                                      15      REQUIRED
     HM #                           AREA CODE, PREFIX, SUFFIX                                                       3-3-4  AREA-EXCH-#
     JOIN                           DATE THE MEMBER JOINED                                                          6      MONTH/DAY/YEAR
     FIRST                                  FIRST NAME                                                                     15      REQUIRED
     WK #                           AREA CODE, PREFIX, SUFFIX                                                       3-3-4
     BDAY                           FIRST'S BIRTHDAY                                                                6
     SPOUSE                         SPOUSE NAME                                                                    15
     WK #                           AREA CODE, PREFIX, SUFFIX                                                       3-3-4
     BDAY                           SPOUSE'S BIRTHDAY                                                               6
     MOD CHLD?                      MODIFY CHILDREN INFO?                                                           1      Y/N
     # CHILD?                       NUMBER OF CHILDREN                                                              1      0-6 (0=ERASE
                                                                                                                                                                                                                                                                        ALL)
     ------ REPEATS 6 TIMES
     |NAME                           CHILD NAME                                                                     15
     |BDAY                           CHILD'S BIRTHDATE                                                               6
     ------
     ADDR                           STREET ADDRESS                                                                 40
     CITY                           CITY                                                                           15
     ST                             STATE                                                                           2      ABBREVIATED
     ZIP                            ZIP CODE                                                                        5-4    9-DIGIT ZIP
     ZONE                                  MAILING ZONE                                                                                                                                              6      LETTERS OR #S
     NOTES                          PERSONAL NOTES                                                                 45
     ANNV                           ANNIVERSARY DATE                                                                6

     Any field may be left blank EXCEPT for the LAST name and the FIRST
     name. If there is an error in a field (i.e. typing letters in a phone
     number), you will hear a beep and the cursor will not move to the
     next field. Correct your error and you may go on.

     Your cursor should be sitting on the LAST name field. Type the last
     name (preferably in UPPER CASE). Be sure to follow the editing
     suggestions in the IMPORTANT NOTES ABOUT ENTERING DATA section above.
     When you have typed the entire last name, press ENTER (or TAB or PG
     DN or DOWN-ARROW). Your cursor will move to the HM # field.

     Type in the area code. Notice how the cursor automatically moves to
     the prefix field when you have filled in the area code (remember the
     autoskip feature?). Your cursor will be positioned on the prefix
     portion of the field. Type the three-digit prefix. Your cursor will
     move to the suffix portion of the field. Type the four-digit suffix.
     Your cursor will now be on the JOIN field.





                                     PAGE 6





     Type the month that the member joined. You may enter a single digit
     (for example, '7' as opposed to '07'). SIMPLICITY V.2.1 will
     automatically fill in the leading zero for you when you move to the
     join day field. When you have entered the month, your cursor will
     move to the day field. Do the same here. When you are finished
     entering the day field, your cursor will move to the year field.
     Enter the year (2 digits). Your cursor will move to the FIRST name
     field.

     Enter the first name. Your cursor will move to the WK # field. Enter
     the WK PHONE field just as you did the HM phone field. When you are
     finished with the WK PHONE field, your cursor will move to the BDAY
     field. Enter the birthday for the first name just as you did the JOIN
     field. When you are finished with the BDAY field, your cursor will
     advance to the SPOUSE name field.

     Entering the spouse's name is entirely optional. If you choose not to
     enter a spouse (just press ENTER on the SPOUSE name field), the
     cursor will blank the WK #, BDAY, and ANNV fields fields
     automatically. If you do decide to enter the spouse information,
     follow the same guidelines as the FIRST name field (including WK #,
     and BDAY fields for the SPOUSE).

     Your cursor will now be at the MOD CHILD? prompt. If there are
     children to add, answer 'Y' to this prompt. Your cursor will now be
     at the #  CHILDREN field. Enter the number of children (from 0 to 6).
     Your cursor will advance to the top NAME field. If you enter 0 in the
     # CHILDREN field, SIMPLICITY V.2.1 will erase all information about
     every child. You will then move to the ADDR field.

     From here, enter the name of each child. When you press ENTER, the
     cursor will advance to that child's  BDAY field. Likewise, enter the
     BDAY field as you did the first BDAY field. You will repeat this
     procedure for each child. Once the cursor has gone past the last
     child indicated in the # OF CHILDREN field, it will move to the ADDR
     field.

     Continue to enter the ADDRESS, CITY, ST, ZIP, and ZONE fields. The
     ZIP field is divided into prefix and suffix to accomodate the new
     9-digit zip codes. You do not have to enter the 4-digit suffix.

     The next field is the NOTES. This is a 45-character free-form field
     where you can keep personal notes about someone. You don't have to
     enter any notes if you feel none are necessary.

     An extended feature is available when the cursor is placed on the
     NOTES field. A new function key prompt will appear at the bottom of
     the screen which reads F2="PERSONAL NOTES". When you press F2, a
     3-line notecard will appear near the bottom of the screen. This will
     allow you to keep additional notes about any member. Type whatever
     notes you feel are relevant or important. Press ESC on the notecard
     to cancel any notes you have just typed, or press F10 to accept the
     notecard. Your cursor will return to the NOTES field.




                                     PAGE 7






     The last field is the ANNV field. This is where a wedding anniversary
     is stored. If no spouse is entered, the cursor will not move to this
     field at all. If a spouse is entered, you may enter the month, day
     and year of the anniversay. Follow the same guidelines and the JOIN
     field.
     When you press ENTER after the NOTES field (if no spouse is entered)
     or after the ANNV field (if a spouse is entered), the cursor will
     return to the LAST field. You may continue to move from field to
     field, correcting any information you may have overlooked. When all
     the information you have is complete, press F10 to accept the member.

     A prompt will appear asking you if the information is correct (a
     default 'N' for no also appears). Study the screen carefully. If you
     see any information which needs correction, type 'N' in the prompt
     (or just press ENTER due to the default 'N'). Your cursor will move
     the the LAST field and you may use your cursor movement keys to
     change any fields in error.

     Please note that you cannot correct the spouse WK #, BDAY or ANNV
     fields if no spouse is entered.

     If all the information is correct, press 'Y' at the prompt. If the
     member does not exist, the record will be added to the database. If
     the member list is full or the member already exists on the database,
     an error message will appear indicating so.

     A new prompt will now appear asking you if you wish to add any more
     members. If you do, just press ENTER (a default of 'Y' is given). The
     fields will clear and you will be ready to enter another member. If
     you have no more to add, type 'N' in the prompt field and you will be
     returned to the main menu.

























                                     PAGE 8





                                CHANGE A MEMBER


     If you have chosen this option by accident, you may press the ESC
     key, or you may simply type MENU (all caps) in the LAST field and you
     will be returned to the MAIN MENU.

     This menu option allows you to change information on your database.
     When CHANGE A MEMBER is chosen from the main menu, a new screen
     appears and awaits your input. In order to change a member, you must
     tell SIMPLICITY V.2.1 what member you want to change. You can
     accomplish this by entering the LAST name field, and either the FIRST
     name field, the SPOUSE name field, or both the FIRST and SPOUSE name
     field. Remember, you must type the LAST, FIRST, or SPOUSE name field
     in the same case as originally entered (UPPER, lower, or Mixed case).

     EXAMPLES: If there is no spouse on a member, you would fill in the
     LAST name field and the FIRST name field. If there is a spouse on a
     record, you could  (a) fill in the LAST name field and the FIRST name
     field  (b) fill in the LAST name field and the SPOUSE name field  (c)
     fill in the LAST name field and both the FIRST/SPOUSE name fields.

     HINT: As a shortcut, you only need to enter the first six (6)
     characters of the LAST name and the first four (4) characters of the
     FIRST/SPOUSE name fields.

     A function key option is available on the change screen that may help
     you to locate a member if you cannot remember the "key" information
     (last name, first name or spouse name). This option appears at the
     bottom of the screen as F2=LAST NAME SEARCH.

     To use this function, type in the last name (or the first six letters
     of the last name) and, while the cursor is still on the LAST field,
     press F2. A new screen will appear and list the LAST name, FIRST name
     and SPOUSE name of every member matching the first six letters of the
     LAST name you typed in. When the search is complete, you will be
     returned to your previous screen.

     When you have filled in this "key" information, press F10. SIMPLICITY
     V.2.1 will attempt to find the member you are looking for. If it
     cannot find it, a message will be displayed indicating this. If it
     does find the member, all the fields will be filled in and you will
     then be able to change any information on any field (similar to the
     add process).

     You may type a zero in the # OF CHILDREN field. However, please note
     that this will erase all the information for all the children you may
     have entered. This is a quick way of deleting all children from a
     member (i.e. in the case of divorce).

     To erase a single child, move your cursor to the MOD CHILD? field and
     type 'Y'. Your cursor will move to the # CHILDREN? field. DO NOT
     change the number of children!! The system will do that for you. Move




                                     PAGE 9





     your cursor to the NAME field of the child to delete. Blank out the
     child's NAME by using the spacebar, then press ENTER. Once blank, all
     remaining information for the child is removed. Now use your TAB or
     ENTER or PG DN or DOWN-ARROW key to move through the rest of the
     children.

     Once the cursor leaves the last child, the children will be ordered
     sequentially and the # CHILDREN field will be recalculated.

     To erase a SPOUSE, move the cursor to the SPOUSE field and blank out
     the name. The WK #, BDAY, and ANNV fields will immediately be
     cleared. Please note that you cannot correct the spouse WK #, BDAY or
     ANNV fields if no spouse is entered.

     When you move your cursor to the NOTES field, the PERSONAL NOTES
     function key will appear at the bottom of the screen. If you wish to
     change personal notes, press F2 and you may edit the notecard as you
     did on the ADD screen.

     When you have changed all the information you need, press F10 to
     accept the changes. You will again be prompted for correctness and
     for additional changes (similar to the add process).



































                                    PAGE 10





                                DELETE A MEMBER


     If you have chosen this option by accident, you may press the ESC
     key, or you may simply type MENU (all caps) in the LAST field and you
     will be returned to the MAIN MENU.

     This menu option allows you to delete a member from your database.
     When DELETE A MEMBER is chosen from the main menu, a new screen
     appears and awaits your input. In order to delete a member, you must
     tell SIMPLICITY V.2.1 what member you want to delete. You can
     accomplish this by entering the LAST name field, and either the FIRST
     name field, the SPOUSE name field, or both the FIRST and SPOUSE name
     field. Remember, you must type the LAST, FIRST, or SPOUSE name field
     in the same case as originally entered (UPPER, lower, or Mixed case).

     A function key option is available on the delete screen that may help
     you to locate a member if you cannot remember the "key" information
     (last name, first name or spouse name). This option appears at the
     bottom of the screen as F2=LAST NAME SEARCH.

     To use this function, type in the last name (or the first six letters
     of the last name) and, while the cursor is still on the LAST field,
     press F2. A new screen will appear and list the LAST name, FIRST name
     and SPOUSE name of every member matching the first six letters of the
     LAST name you typed in. When the search is complete, you will be
     returned to your previous screen.

     Follow the same procedures as CHANGE A MEMBER. When the member is
     displayed, a prompt will appear asking you if you really want to
     delete this member. The default is 'N' to prevent accidental
     erasures. If you do want to delete that member, type 'Y' in the
     prompt field. Your member is deleted (along with the personal notes)
     and cannot be recovered. If you do not want to delete the member
     displayed, just press ENTER or press 'N'.

     You will again be prompted for additional deletions (similar to the
     add process).



















                                    PAGE 11





                                INQUIRE A MEMBER


     If you have chosen this option by accident, you may press the ESC
     key, or you may simply type MENU (all caps) in the LAST field and you
     will be returned to the MAIN MENU.

     This menu option allows you to simply view information on your
     database. Common uses are to get a phone number or an address from
     the screen as opposed to printing a record. When INQUIRE A MEMBER is
     chosen from the main menu, a new screen appears and awaits your
     input. In order to inquire a member, you must tell SIMPLICITY V.2.1
     what member you want to inquire. You can accomplish this by entering
     the LAST name field, and either the FIRST name field, the SPOUSE name
     field, or both the FIRST and SPOUSE name field. Remember, you must
     type the LAST, FIRST, or SPOUSE name field in the same case as
     originally entered (UPPER, lower, or Mixed case).

     A function key option is available on the inquire screen that may
     help you to locate a member if you cannot remember the "key"
     information (last name, first name or spouse name). This option
     appears at the bottom of the screen as F2=LAST NAME SEARCH.

     To use this function, type in the last name (or the first six letters
     of the last name) and, while the cursor is still on the LAST field,
     press F2. A new screen will appear and list the LAST name, FIRST name
     and SPOUSE name of every member matching the first six letters of the
     LAST name you typed in. When the search is complete, you will be
     returned to your previous screen.

     Follow the same procedures as CHANGE A MEMBER. The member will be
     displayed. A prompt will appear asking you if you want to inquire
     more members. The default is 'Y'. If you do not want to inquire any
     more members, type 'N' in the prompt field. You will be returned to
     the main menu. If you do want to inquire more members, just press
     ENTER or press 'Y'.





















                                    PAGE 12





                         PRINT LABELS AND ROLODEX CARDS


     Mailing labels may be printed with SIMPLICITY V.2.1. The labels must
     be  one-inch high (actually, 7/8") and single-column. They can be
     purchased at most computer or stationery stores. Rolodex cards can
     also be printed with SIMPLICITY V.2.1. Tractor-feed Rolodex cards
     must be three-inches high by five-inches wide. They may also be
     purchased at most computer or stationery stores.

     When this option is chosen from the main menu, another menu is
     presented listing the available print label options. They are:

                  1) LABEL   - ONE MEMBER
                  2) LABEL   - ALL MEMBERS ALPHABETICALLY
                  3) LABEL   - ALL MEMBERS BY ZIP CODE
                  4) LABEL   - ALL BY ZONE
                  5) LABEL   - MEMBERS BY BIRTHDATE RANGE
                       6) LABEL   - MEMBERS BY JOINED DATE RANGE
                  7) LABEL   - MEMBERS BY ANNIVERSARY RANGE
                  8) ROLODEX - ONE MEMBER
                       9) ROLODEX - ALL MEMBERS ALPHABETICALLY
                  0) RETURN TO MAIN MENU

     * LABEL   -  ONE MEMBER allows you to print a single mailing label.
     Fill in the "key" information. When the member is displayed, a prompt
     appears asking you if you want to print the displayed member. Respond
     to the prompt. Another prompt appears asking you how many copies of
     the label you want to print (from 1 to 9). Respond to this prompt.
     Finally, a prompt will appear asking you if you wish to print the
     mailing label with the FIRST name only (F), the SPOUSE name only (S),
     or BOTH names on the label (B). If the member has children, an
     additional option is offered which allows a mailing label to be
     addressed to a child (C).The default is 'B' (for both).

     This option is useful in that it allows you to store the FIRST name
     and SPOUSE name on the same record, but gives you the flexibility to
     print either name. It also allows individual mailing labels to be
     printed for children. For example, you would not want to send a
     birthday card addressed to JOHN and JEAN PHILLIPS if it was John's
     birthday.

     If you responded 'C' to this prompt, another prompt appears asking
     which child is to be printed. The very top name on the screen is
     child 1, the very bottom name is child 6. Enter the appropriate child
     number.
     After responding to this last prompt, the labels will be printed. You
     will be returned to the PRINT LABELS MENU.

     * LABEL   - ALL ALPHABETICALLY allows you to print an entire set of
     labels sorted alphabetically. This is useful if you wish to send
     labels to all members of your organization.





                                    PAGE 13





     A prompt appears asking you if you are sure you want to continue.
     Respond 'Y' if you are sure. Responding 'N' returns you to the PRINT
     LABELS MENU. The prompt for the number of copies is also displayed.
     The labels will then begin printing in alphabetical order.

     You may experience some delay from time to time. This is only time
     the computer is taking to sort the labels. Do not be worried about
     any pauses in the printing.

     * LABEL   -  ALL MEMBERS BY ZIP CODE allows you to print a complete
     set of mailing labels sorted by the 9-digit ZIP CODE field. Names are
     sorted alphabetically within zip code.

     A prompt appears asking you if you are sure you want to continue.
     Respond 'Y' if you are sure. Responding 'N' returns you to the PRINT
     LABELS MENU. The prompt for the number of copies is also displayed.
     The labels will then begin printing in zip code order.

     * LABEL   -  ALL BY ZONE allows you to print an entire set of labels
     sorted by the zone field. Names are printed alphabetically within
     zone. Often times the Post Office requires that organizational
     mailers be sorted by zone code in order to receive "bulk rate"
     postage fees. This option was added to facilitate this need.

     A prompt appears asking you if you are sure you want to continue.
     Respond 'Y' if you are sure. Responding 'N' returns you to the PRINT
     LABELS MENU. The prompt for the number of copies is also displayed.
     The labels will then begin printing in zone order.

     * LABEL   -  MEMBERS BY BIRTHDATE RANGE allows you to print a set of
     labels sorted alphabetically, contingent on a beginning and ending
     birthdate, including years. This would allow you to print a set of
     mailing labels to all persons, for instance, born between 1/1/88 and
     12/31/89. The effect would be to print mailing labels for all babies
     born the past two years.

     When you choose this option, a screen appears asking you to enter a
     beginning date and an ending date. Enter the dates as you did before
     and press F10 to accept them. Press ESC to cancel the request. The
     prompts for number of copies is also displayed.

     * LABEL   -  MEMBERS BY JOIN DATE RANGE allows you to print a set of
     labels sorted alphabetically, contingent on a beginning and ending
     joined date. This process is similar to the birthdate range.

     * LABEL   -  MEMBERS BY ANNIVERSARY RANGE allows you to print a set
     of labels sorted alphabetically, contingent on a beginning and ending
     anniversary date. This process is similar to the birthdate range.









                                    PAGE 14





     * ROLODEX -  ONE MEMBER is identical to LABEL - ONE MEMBER, but no
     prompt is given for which name to print.

     * ROLODEX -  ALL ALPHABETICALLY is identical to LABEL - ALL
     ALPHABETICALLY but no prompt is given for which name to print.

     * RETURN TO MAIN MENU returns you from the PRINT LABELS MENU to the
     MAIN MENU.

















































                                    PAGE 15





                                 PRINT REPORTS


     Reports may be printed with SIMPLICITY V.2.1. The reports are printed
     on standard 8.5" by 11" tractor-feed paper.

     When this option is chosen from the main menu, another menu is
     presented listing the available print report options. They are:

                  1) COMPREHENSIVE MEMBER DIRECTORY
                  2) BIRTHDAY REPORT
                  3) ANNIVERSARY REPORT
                  4) DATE JOINED REPORT
                  5) BIRTHDATE RANGE REPORT
                  6) JOIN DATE RANGE REPORT
                  7) ANNIVERSARY RANGE REPORT
                  8) RETURN TO MAIN MENU

     * COMPREHENSIVE MEMBER DIRECTORY allows you to print a complete list
     of your database, sorted alphabetically, page-broken by letter,
     complete with headings, page numbers and the date printed.

     A prompt appears asking you if you are sure you want to continue.
     Respond 'Y' if you are sure. Responding 'N' returns you to the PRINT
     REPORTS MENU. Another prompt will appear asking you if you wish to
     print notes. If you respond 'Y', the NOTES field (not the personal
     notecard) will be printed on the report along with the other member
     information. The reports will begin printing in alphabetical order.

     You may experience some delay from time to time. This is only time
     the computer is taking to sort the members. Do not be worried about
     any pauses in the printing.

     * BIRTHDAY REPORT is a useful report that provides a list of names
     who have a birthday in a given timeframe. The report prints the name
     and birth date of all members and is not sorted in any manner.

     A prompt appears requesting you type in the beginning month you wish
     the report for. If you do not wish to print a report, press ESC. You
     will be returned to the PRINT REPORTS MENU.

     After you enter the desired month, a prompt appears asking for the
     beginning day. After entering the day, another set of prompts appear
     asking for the ending month and day. Once you have entered both
     months and both days, press F10. the report will begin printing.

     A separate line will appear for each person, including children, who
     has a birthday in that month-day date range. For example if both a
     FIRST name and SPOUSE name have a birthday in the same month-day date
     range, a separate report line will be generated for each party.







                                    PAGE 16





     If an output line is for a child, one parent's name will also be
     printed to help you locate that record on the database, if needed.

     * ANNIVERSARY REPORT is a useful report that provides a list of names
     who have an anniversay in a given timeframe. The report prints the
     name and anniversary date of all members and is not sorted in any
     manner. Follow the same input guidelines as the BIRTHDAY REPORT.

     * JOINED DATE REPORT is a useful report that provides a list of names
     who have a join date within a given timeframe. The report prints the
     name and date joined for all members and is not sorted in any manner.
     Follow the same input guidelines as the BIRTHDAY REPORT.

     * BIRTHDATE RANGE REPORT allows you to print a report sorted
     alphabetically, contingent on a beginning and ending birthdate. This
     would allow you to print a report for all members, for instance, born
     between 1/1/88 and 12/31/89. The effect would be to print a report of
     all babies born the past two years.

     When you choose this option, a screen appears asking you to enter a
     beginning date and an ending date. Enter the dates as you did before
     and press F10 to accept them. Press ESC to cancel the request.

     If an output line is for a child, one parent's name will also be
     printed to help you locate that record on the database, if needed.

     * JOIN DATE RANGE REPORT is similar to BIRTHDATE RANGE REPORT except
     joined dates are used.

     * ANNIVERSARY RANGE REPORT is similar to BIRTHDATE RANGE REPORT
     except anniversaries are used.

     * RETURN TO MAIN MENU returns you from the PRINT REPORTS MENU to the
     MAIN MENU.























                                    PAGE 17





                     EXIT SIMPLICITY V.2.1 (SAVE DATABASE)


     The EXIT SIMPLICITY V.2.1 option is very important. If you have
     added, changed, or deleted any members, you MUST exit the system
     through this option in order for your members to be properly saved.
     DO NOT reboot your computer or turn off your computer if you have
     added, changed or deleted members unless you have properly terminated
     the program!

     If you have only printed or inquired members, you may warmboot your
     computer or turn it off. No information will be lost.

     When you do choose to quit, a prompt appears asking you if you are
     sure you want to quit. Press 'Y' to exit out of SIMPLICITY V.2.1.
     Press 'N' to return to the main menu.

     After you press 'Y', an information screen is displayed which lists
     how many members you inquired, added, changed, or deleted and also
     how many members are on your database. This is called a "session
     log". If you would like a printout of the session log, press your
     SHIFT-PRTSCN key on your keyboard.


                                OTHER UTILITIES

     There may be a time when you wish to erase all the data in the
     SIMPLICITY V.2.1  database. A facility has been provided for you in
     this case.

     To completely erase your MEMBERS database, change to the C:\SIMPLE21
     subdirectory from your DOS prompt (C:> CD\SIMPLE21) and type the
     command WIPEOUT. Follow the onscreen directions. If you do not want
     to continue with the procedure, press CTRL-C and your SIMPLICITY
     V.2.1 database will not be erased. Otherwise, press any key and your
     SIMPLICITY V.2.1 database will be erased (along with the PERSONAL
     NOTES).




















                                    PAGE 18





                                  REGISTRATION


     I think you will find SIMPLICITY V.2.1 to be a very professional and
     useful product for your organization. The registration fee for
     SIMPLICITY V.2.1 is eighteen ($18) dollars. The registration fee, in
     addition to helping the author justify the reason for creating
     SIMPLICITY V.2.1, will entitle you to free upgrades and revisions as
     they become available.

     SIMPLICITY V.2.1 is an evolving product. As you register, please be
     sure to give feedback on how you think this product could be
     improved. Your suggestions may very well be incorporated in the next
     release.

     Thank you for registering your copy of SIMPLICITY V.2.1 . . . John
     Phillips.

     *-------------------------------------------------------------------*
     |                      SIMPLICITY V.2.1 REGISTRATION FORM           |
     |                                                                   |
     | NAME    : ______________________________________________________  |
     |                                                                   |
     | COMPANY : ______________________________________________________  |
     |                                                                   |
     | ADDRESS : ______________________________________________________  |
     |                                                                   |
     | CITY    : ________________________  ST: ____  ZIP: _____________  |
     |                                                                   |
     | PHONE   : (______) ______ - ________                              |
     |                                                                   |
     | WHERE DID YOU RECEIVE YOUR COPY OF SIMPLICITY V.2.1 FROM?         |
     |                                                                   |
     | _____________________________________________  VERSION: ________  |
     |                                                                   |
     | PLEASE MAIL A CHECK FOR $18.00 PAYABLE TO  JOHN M. PHILLIPS TO:   |
     |                                                                   |
     |        1100 TIMBERBEND TRAIL                                      |
     |        ALLEN, TX  75002                                           |
     |        (214) 727-8668                                             |
     |                                                                   |
     | SUGGESTIONS:                                                      |
     |                                                                   |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     | _________________________________________________________________ |
     *-------------------------------------------------------------------*




                                    PAGE 19
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1581

     Volume in drive A has no label
     Directory of A:\

    BOX      EXE       689   2-06-89   3:42p
    CREATE   OBJ       650   2-18-90   9:42a
    DATABASE OBJ     86979   2-18-90  10:10a
    FILE1581 TXT      2963   1-01-80   4:43a
    GO       BAT        38  10-12-89   9:53a
    GO       TXT       694   1-01-80   4:40a
    INSTALL  BAT      2868   2-18-90   2:07p
    RUN5     EXE     22817   8-24-89   2:10p
    SIMPLE21 BAT       116   2-18-90  10:21a
    SIMPLE21 DOC     45192   2-18-90   2:42p
    TRANSFER OBJ      1413   2-18-90  10:15a
    WIPEOUT  BAT       389   2-18-90   1:39p
           12 file(s)     164808 bytes
                          151552 bytes free
