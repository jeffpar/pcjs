---
layout: page
title: "PC-SIG Diskette Library (Disk #2388)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2388/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2388"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ADVANCED CHURCH INFORMATION SYSTEMS:ACIS"

    ACIS (Advanced Church Information Systems) is a friendly system
    designed to increase church productivity by keeping relevant
    information about members, visitors, and organizations.  This
    information can then be used to print mailing labels, Rolodex cards,
    and a variety of reports.
    
    Menu-driven ACIS requires no prior experience with database programs in
    order to be productive right away.
    
    ACIS was programmed by John M. Phillips for the First United Methodist
    Church of Allen, Texas, but has been adapted for use with most
    denominations.  ACIS is divided into four distinct systems:  the member
    information system, capable of storing 800 records; the visitor
    information system, also 800 records; the organization information
    system, 500 records; and the utility functions.  The variety of reports
    the systems generate, together with an informative manual and easy
    program, fit in well with a church that wants to be the ``home''
    church of its congregation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACIS.DOC

{% raw %}
```
66


                                      ACIS
                        Copyright 1989  John M. Phillips
                                  Version 2.1


     ACIS (pronounced AY-SEZ) (Advanced Church Information Systems) is an
     easy-to-use computer software system designed to run on IBM Personal
     Computer family. ACIS is designed to increase church productivity by
     keeping relevant information about members, visitors, and
     organizations. This information can then be used to print mailing
     labels, Rolodex (tm) cards, and a variety of reports.

     ACIS is menu-driven, meaning that all available options are selected
     from a series of menus. No prior experience with database programs is
     needed to become productive with ACIS. ACIS was programmed by John M.
     Phillips for the First United Methodist Church of Allen, Texas, but
     has been adapted for use with most denominations.

     ACIS is divided into four distinct systems: the member information
     system (capable of storing 800 records), the visitor information
     system (also 800 records), the organization information system (500
     records), and the utility functions. This manual will describe,
     primarily, the member information system, but most of the
     documentation applies also to the visitor and organization
     information systems. Where there are differences, it will be noted.

     Each ACIS system has many available options including:
              
              * Add a member
              * Change a member
              * Delete a member
              * Inquire a member
              * Print labels
              * Print Rolodex(tm) cards
              * Print reports
              * Return to ACIS main menu

     ACIS requires and IBM PC or compatible, and at least 384K of
     available memory. ACIS must be executed from a hard disk system and
     you must have 1.5 megabytes of hard disk space available to install
     ACIS. The organization system data is stored on a floppy disk.  If a
     color graphics card and monitor are used, ACIS chooses to display
     titles, prompts, and informative messages in aesthetically pleasing
     colors. Monochrome systems may use ACIS and no text distortion will
     occur due to color conflicts. A printer attached to the PRN: OR LPT1:
     port of the PC completes the functionality of ACIS.

     ACIS was designed and programmed by John M. Phillips entirely in Utah
     COBOL version 5.0 on an IBM PC XT compatible computer. Many, many
     hours of work went into this product. If you intend to use the ACIS
     system for your church or organization, please register your copy by
     completing the registration form at the back of this manual and
     sending in your registration fee. *********** SPECIAL NOTICE *** :
     Registrants will receive the newly released CONTRIBUTIONS system!!






                                   - Page 1 -


                      IMPORTANT NOTES ABOUT ENTERING DATA


     It is not necessary to press "RETURN" or "ENTER" after any menu
     selection or prompt. Simply press the requested key(s) and you will
     automatically move to that option. For example, the ACIS main menu
     asks you to choose between four options (F1-F4). To go to option 1,
     press the "F1" key and you will be immediately taken to the MEMBER
     INFORMATION SYSTEM.

     It is STRONGLY recommended that you type all names in UPPER CASE.
     ACIS uses a case-sensitive algorithm to search the index when
     locating records. For example if you typed the last name as
     'PHILLIPS' and the first name as 'John' and then did an inquiry on
     last name as 'PHILLIPS' and first name as 'JOHN', ACIS would tell you
     that the requested member does not exist. You may feel free to type
     all other fields in upper or lower case, but, as a rule of thumb, put
     all NAME fields in UPPER CASE. ACIS will require you to type the last
     name in all caps.


                              AUTOMATIC FIELD SKIP

     When entering input fields, such as birthday or phone number, the
     cursor will automatically skip to the next available field when you
     have completely filled the previous field. For instance, if you typed
     "214" in the area code input field, the cursor would move over to the
     prefix field as soon as you typed the "4" in the area code. This
     feature is called "AUTOSKIP".


                             DOS SORT REQUIREMENTS

     ACIS utilizes the DOS SORT.EXE routine to perform the sort routines
     while reports, labels and rolodex cards are being printed. In order
     for ACIS to operate properly, you must have SORT.EXE (included on
     your original DOS diskettes) located on your hard disk. In addition,
     the subdirectory that SORT.EXE is located in must be on the PATH
     specified when your computer is booted up.

     Most hard disk users place all the DOS utilities in a subdirectory
     named C:\DOS. The PATH command placed in the AUTOEXEC.BAT file
     (located in the root directory of C:\) usually reads: PATH
     C:\;C:\DOS.

     Consult your system manuals for a complete description of
     subdirectories and paths. The main points to remember are:

              o  SORT.EXE is on your hard disk
              o  your PATH points to that subdirectory










                                   - Page 2 -


                                CURSOR MOVEMENT


     There are several keys available which allow you to move the "cursor"
     around the screen. These keys are listed below.

     HOME                 Moves the cursor to the first available input field
     END                          Moves the cursor to the last available input field
     ENTER                 Accepts information and moves to the next field
     UP-ARROW,
      PG UP,
      SHIFT-TAB                 Moves the cursor to the previous field
     DOWN-ARROW,
      PG DN,
      TAB                 Moves the cursor to the next available field

     When entering information, there are several keys which control the
     "cursor" within the input field. These keys are listed below.

     BACKSPACE                 Move the cursor back one character and erase that
                               character (called "destructive backspace")
     LEFT ARROW                 Move the cursor back one character and leave all
                               other characters intact ("nondestructive backspace")
     RIGHT ARROW                 Move the cursor forward one character and leave all
                               other characters intact

     Other miscellaneous keys that are available are listed below:

     F1                          Help key (available on most screens)
     F2                          Last name search/Personal notes
     F10                          Accept all input information (available on most
                               input screens)
     ESC                          Escape key to cancel most transactions and return
                               to the previous menu (available on most screens)

     Any other key pressed will generally result in the computer "beeping"
     at you to signal an invalid key press.























                                   - Page 3 -


                                    STARTING


     Installing ACIS is a simple process. Insert the ACIS master disk into
     drive A: or B:. From your DOS prompt, change to that drive by typing
     either A: or B:. Once you have changed the drive, type INSTALL. The
     rest of the install procedure is automatic and will take about 5
     minutes. When complete, the install procedure will have placed all
     the required files on your hard disk under the directory C:\ACIS.

     To start the ACIS system, change to your hard disk by typing C: from
     the DOS prompt. Enter the ACIS subdirectory by typing CD\ACIS. Once
     in the ACIS subdirectory, type ACIS and the ACIS main menu will
     appear.


                                 ACIS MAIN MENU

     The ACIS main menu has four five available options on it. Press F1 to
     enter the MEMBER INFORMATION SYSTEM. Press F2 to enter the VISITOR
     INFORMATION SYSTEM. Press F3 to enter the ORGANIZATION INFORMATION
     SYSTEM. Press F4 to enter the UTILITIES menu. Press ESCape to exit
     from ACIS altogether.

     When MEMBER, VISITOR, or ORGANIZATION INFORMATION SYSTEM is first
     started, a screen appears telling you that the members or visitors
     are loading. This load process is very brief. Once complete, the main
     menu for each of these systems will appear.

     NOTE: In the organization system, a screen will appear instructing
     you to place the desired organization disk in drive A:. In order to
     use the organization system, you must have prepared an organization
     disk ahead of time. If you have prepared a disk, place the disk in
     drive A: and press any key. The data will load. If you have not
     prepared an organization disk, press ESC and the procedure will be
     terminated. See the UTILITY FUNCTIONS section for a description of
     how to prepare an organization disk.

     The UTILITIES main menu has eight available options on it. Please
     refer to the section on utilities for a description of those options.




















                                   - Page 4 -


                              THE OTHER MAIN MENUS


     Each of the information systems (MEMBER, VISITOR, ORGANIZATION) has
     its own main menu with eight options on it (as previously mentioned
     above) (NOTE: The ORGANIZATION system has seven options) . To select
     an option, enter the number corresponding to the menu item you desire
     at the "Your choice?" prompt. You will be taken to that option. The
     ACIS color system uses BLUE for titles and headings, GREEN for
     informative messages, and RED for choice prompts. Choice prompts are
     usually 1-key responses, like Y for yes or N for no. All prompts DO
     NOT require that you press ENTER after the choice.

     In addition to the eight options, the main menu also displays
     pertinent information at the top of the screen. The name of the
     system you are currently accessing (member, visitor, organization) is
     shown along with the number of records stored in the database. The
     utility functions will also show this pertinent information.

     When the last option of each system main menu (QUIT) is chosen, you
     will be returned to the ACIS main menu.

     Listed below is a description of each option available in the MEMBER,
     VISITOR, and ORGANIZATION INFORMATION SYSTEMS.




































                                   - Page 5 -


                                  ADD A MEMBER


     This menu option allows you to add information to your database. When
     ADD A MEMBER is chosen from the main menu, a new screen appears and
     awaits your input. You will see the information that is to be entered
     in a nice, formatted fashion on the screen. The fields to be entered
     are:

     FIELD NAME                 DESCRIPTION                                                                                    LENGTH                                                    OTHER
     ----------                 -----------                                                                                    ------                                                    -----
              LAST                 LAST NAME                                                                                    15     REQUIRED
              CODE                 UNIQUE IDENTIFYING CODE                                              6                                                                                                    OPTIONAL
              HM #                 AREA CODE, PREFIX, SUFFIX                                             3-3-4                                                    AREA-EXCHG-NUMBER
     @         JOIN                 DATE THE MEMBER JOINED                                              6                                                    MONTH/DAY/YEAR
              FIRST                 FIRST NAME                                                                                    15                                                    REQUIRED
     #         #                 CHRONOLOGICAL NUMBER                                                                                     5                                                    NUMERIC
     *         BY                 HOW JOINED THE CHURCH                                                                                      2                                                    OD/CT/PF/R/??/CN/OT
              WK #                 AREA CODE, PREFIX, SUFFIX                                             3-3-4
              BDAY                 FIRST'S BIRTHDAY                                                                                      6
     #         SPOUSE                 SPOUSE NAME                                                                                    15
     #         #                 CHRONOLOGICAL NUMBER                                                                                     5     NUMERIC
     #         BY                 HOW JOINED THE CHURCH                                                                                      2                                                    OD/CT/PF/R/??/CN/OT
     #         WK #                 AREA CODE, PREFIX, SUFFIX                                             3-3-4
     #         BDAY                 SPOUSE'S BIRTHDAY                                                                                     6
              MOD CHLD?MODIFY CHILDREN INFO?                                              1                                                    Y/N
              # CHILD ?NUMBER OF CHILDREN                                                                                      1                                                    0-6 (0=ERASE ALL)
              ------ REPEATS 6 TIMES
     #         |NAME                 CHILD NAME                                                                                    15
     #         |#                     CHRONOLOGICAL NUMBER                                                                                     5     NUMERIC
     *         |BY                 HOW CHILD JOINED CHURCH                                              2                                                    OD/CT/PF/R/??/CN/OT
     #         |BDAY                 CHILD'S BIRTHDATE                                                                                      6
     #         |BAPT?                 BAPTISM STATUS                                                                                      1                                                                                                    Y/N/U/?/BLANK
         ------
              ADDR                 STREET ADDRESS                                                                                    40
              CITY                 CITY                                                                  15
              ST                 STATE                                                                    2     ABBREVIATED
              ZIP                 ZIP CODE                                                                                                 5-4    FOR 9-DIGIT ZIP CODES
              ZONE                 MAILING ZONE                                              6     LETTERS OR NUMBERS
              NOTES                 PERSONAL NOTES                                                         45
     #         ANNV                 ANNIVERSARY DATE                                                         6

     * = available only on member information system
     # = available on member and visitor information system, but not
         on organization system
     @ = on the visitor system this field reads "VISIT" to indicate the
         first visit date

     Any field may be left blank EXCEPT for the LAST name and the FIRST
     name. If there is an error in a field (i.e. typing letters in a phone
     number), you will hear a beep and the cursor will not move to the
     next field. Correct your error and you may go on.








                                   - Page 6 -


     Your cursor should be sitting on the LAST name field. Type the last
     name (preferably in UPPER CASE). Be sure to follow the editing
     suggestions in the IMPORTANT NOTES ABOUT ENTERING DATA section above.
     When you have typed the entire last name, press ENTER (or TAB or PG
     DN or DOWN-ARROW). Your cursor will move to the CODE field.

     Type in an identifying code. This code may be any combination of
     letters or numbers or symbols which can be used to categorize a
     member. You have the option to print mailing labels sorted and
     grouped by this code. Once you have entered the code, press ENTER.
     Your cursor will move to the HM #: field.

     Type in the area code. Notice how the cursor automatically moves to
     the prefix field when you have filled in the area code (remember the
     autoskip feature?). Your cursor will be positioned on the prefix
     portion of the field. Type the three-digit prefix. Your cursor will
     move to the suffix portion of the field. Type the four-digit suffix.
     Your cursor will now be on the JOIN field.

     Type the month that the member joined. You may enter a single digit
     (for example, '7' as opposed to '07'). ACIS will automatically fill
     in the leading zero for you when you move to the join day field. When
     you have entered the month, your cursor will move to the day field.
     Do the same here. When you are finished entering the day field, your
     cursor will move to the year field. Enter the year (2 digits). Your
     cursor will move to the FIRST name field.

     Enter the first name. Once entered, your cursor will move to the #
     field. This is a chronological number used to indicate the member
     number (typically in chronological order). This field must be
     numeric. Press ENTER when you have entered the number (or leave it
     blank, if you prefer).

     Your cursor will move to the BY? field (NOTE: only on member system).
     You may enter 'OD' (other denomination), 'PF' (profession of faith),
     'CT' (certificate of transfer), 'R' (restored), 'CN' (confirmed),
     'OT' (other),  or '?', '??', blanks if this information is unknown.
     If you cannot remember what values to place in the field, you can ask
     for help by pressing F1. This will bring up some help text near the
     bottom of the screen which describes what values are allowed. Press
     any key to exit help and return to the BY? field.

     Once the BY? field is entered, your cursor will move to the WK #
     field. Enter the WK PHONE field just as you did the HM phone field.
     When you are finished with the WK PHONE field, your cursor will move
     to the BDAY field. Enter the birthday for the first name just as you
     did the JOIN field. When you are finished with the BDAY field, your
     cursor will advance to the SPOUSE name field.

     NOTE: SPOUSE is not kept on the organization information system.










                                   - Page 7 -


     Entering the spouse's name is entirely optional. If you choose not to
     enter a spouse (just press ENTER on the SPOUSE name field), the
     cursor will blank the WK #, BDAY, and ANNV fields fields
     automatically. If you do decide to enter the spouse information,
     follow the same guidelines as the FIRST name field (including #, BY?,
     WK #, and BDAY fields for the SPOUSE).

     NOTE: Since children information is not carried on the organization
     information system, you may skip over the next 3 paragraphs if you
     are working with the organization information system.

     Your cursor will now be at the MOD CHILD? prompt. If there are
     children to add, answer 'Y' to this prompt. Your cursor will now be
     at the #  CHILDREN field. Enter the number of children (from 0 to 6).
     Your cursor will advance to the top NAME field. If you enter 0 in the
     # CHILDREN field, ACIS will erase all information about every child.
     You will then move to the ADDR field.

     From here, enter the name of each child. When you press ENTER, the
     cursor will advance to that child's chronological # field. If the
     chronological number is entered, the cursor will move to the BY?
     field (NOTE: only on member information system). Enter the BY? like
     you did for the first name. Your cursor will now be positioned at the
     BDAY field. Likewise, enter the BDAY field as you did the first BDAY
     field. Your cursor will now be positioned at the BAPT field. Indicate
     whether the child has been baptized. You may enter 'Y', 'N', or '?',
     'U' ,blank if this information is unknown. If you cannot remember the
     valid values, ask for help by pressing F1. You will repeat this
     procedure for each child. Once the cursor has gone past the last
     child indicated in the # OF CHILDREN field, it will move to the ADDR
     field.

     Continue to enter the ADDRESS, CITY, ST, ZIP, and ZONE fields. The
     ZIP field is divided into prefix and suffix to accommodate the new
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

     The last field is the ANNV field. This is where a wedding anniversary
     is stored. If no spouse is entered, the cursor will not move to this
     field at all. If a spouse is entered, you may enter the month, day
     and year of the anniversary. Follow the same guidelines and the JOIN
     field.

     NOTE: The ANNV field is not found on the organization system.




                                   - Page 8 -


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

     Please note that you cannot correct the spouse #, BY?, WK #, BDAY or
     ANNV fields if no spouse is entered.

     If all the information is correct, press 'Y' at the prompt. If the
     member does not exist, the record will be added to the database. If
     the member list is full or the member already exists on the database,
     an error message will appear indicating so.

     If a member is successfully added, the member will be assigned an
     ENVELOPE #. This field is used by the ACIS CONTRIBUTIONS SYSTEM,
     which is sent to those who register their copy of ACIS. If you would
     like to know more about the contributions system, there is a
     description of the product near the end of this manual.

     A new prompt will now appear asking you if you wish to add any more
     members. If you do, just press ENTER (a default of 'Y' is given). The
     fields will clear and you will be ready to enter another member. If
     you have no more to add, type 'N' in the prompt field and you will be
     returned to the main menu.




























                                   - Page 9 -


                                CHANGE A MEMBER


     If you have chosen this option by accident, you may press the ESC
     key, or you may simply type MENU (all caps) in the LAST field and you
     will be returned to the MAIN MENU.

     This menu option allows you to change information on your database.
     When CHANGE A MEMBER is chosen from the main menu, a new screen
     appears and awaits your input. In order to change a member, you must
     tell ACIS what member you want to change. You can accomplish this by
     entering the LAST name field, and either the FIRST name field, the
     SPOUSE name field, or both the FIRST and SPOUSE name field. Remember,
     you must type the LAST, FIRST, or SPOUSE name field in the same case
     as originally entered (UPPER, lower, or Mixed case).

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

     When you have filled in this "key" information, press F10. ACIS will
     attempt to find the member you are looking for. If it cannot find it,
     a message will be displayed indicating this. If it does find the
     member, all the fields will be filled in and you will then be able to
     change any information on any field (similar to the add process).

     You may type a zero in the # OF CHILDREN field. However, please note
     that this will erase all the information for all the children you may
     have entered. This is a quick way of deleting all children from a
     member (i.e. in the case of divorce).












                                  - Page 10 -


     To erase a single child, move your cursor to the MOD CHILD? field and
     type 'Y'. Your cursor will move to the # CHILDREN? field. DO NOT
     change the number of children!! The system will do that for you. Move
     your cursor to the NAME field of the child to delete. Blank out the
     child's NAME by using the spacebar, then press ENTER. Once blank, all
     remaining information for the child is removed. Now use your TAB or
     ENTER or PG DN or DOWN-ARROW key to move through the rest of the
     children.

     Once the cursor leaves the last child, the children will be ordered
     sequentially and the # CHILDREN field will be recalculated.

     To erase a SPOUSE, move the cursor to the SPOUSE field and blank out
     the name. The #, BY?, WK #, BDAY, and ANNV fields will immediately be
     cleared. Please note that you cannot correct the spouse #, BY?, WK #,
     BDAY or ANNV fields if no spouse is entered.

     When you move your cursor to the NOTES field, the PERSONAL NOTES
     function key will appear at the bottom of the screen. If you wish to
     change personal notes, press F2 and you may edit the notecard as you
     did on the ADD screen.

     When you have changed all the information you need, press F10 to
     accept the changes. You will again be prompted for correctness and
     for additional changes (similar to the add process).



































                                  - Page 11 -


                                DELETE A MEMBER


     If you have chosen this option by accident, you may press the ESC
     key, or you may simply type MENU (all caps) in the LAST field and you
     will be returned to the MAIN MENU.

     This menu option allows you to delete a member from your database.
     When DELETE A MEMBER is chosen from the main menu, a new screen
     appears and awaits your input. In order to delete a member, you must
     tell ACIS what member you want to delete. You can accomplish this by
     entering the LAST name field, and either the FIRST name field, the
     SPOUSE name field, or both the FIRST and SPOUSE name field. Remember,
     you must type the LAST, FIRST, or SPOUSE name field in the same case
     as originally entered (UPPER, lower, or Mixed case).

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






















                                  - Page 12 -


                                INQUIRE A MEMBER


     If you have chosen this option by accident, you may press the ESC
     key, or you may simply type MENU (all caps) in the LAST field and you
     will be returned to the MAIN MENU.

     This menu option allows you to simply view information on your
     database. Common uses are to get a phone number or an address from
     the screen as opposed to printing a record. When INQUIRE A MEMBER is
     chosen from the main menu, a new screen appears and awaits your
     input. In order to inquire a member, you must tell ACIS what member
     you want to inquire. You can accomplish this by entering the LAST
     name field, and either the FIRST name field, the SPOUSE name field,
     or both the FIRST and SPOUSE name field. Remember, you must type the
     LAST, FIRST, or SPOUSE name field in the same case as originally
     entered (UPPER, lower, or Mixed case).

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
























                                  - Page 13 -


                                  PRINT LABELS


     Mailing labels may be printed with ACIS. The labels must be  one-inch
     high (actually, 7/8") and single-column. They can be purchased at
     most computer or stationery stores.

     When this option is chosen from the main menu, another menu is
     presented listing the available print label options. They are:

              1) LABEL   - ONE MEMBER
              2) LABEL   - ALL MEMBERS ALPHABETICALLY (OR BY LETTER)
              3) LABEL   - ALL MEMBERS BY ZIP CODE (OR BY SINGLE ZIP)
              4) LABEL   - ALL MEMBERS BY ZONE (OR BY SINGLE ZONE)
              5) LABEL   - ALL MEMBERS BY ZONE (OR BY SINGLE ZONE)
              6) LABEL   - MEMBERS BY BIRTHDATE RANGE
              7) LABEL   - MEMBERS BY JOINED DATE RANGE
              8) LABEL   - MEMBERS BY ANNIVERSARY DATE RANGE
              9) RETURN TO MAIN MENU

     NOTE: Options 5 and 8 are not available on the ORGANIZATION system.
           The ROLODEX card options are placed on this menu in the
           ORGANIZATION system.


     * LABEL   -  ONE MEMBER allows you to print a single mailing label.
     Fill in the "key" information. When the member is displayed, a prompt
     appears asking you if you want to print the displayed member. Respond
     to the prompt. Another prompt appears asking you how many copies of
     the label you want to print (from 1 to 9). Respond to this prompt.
     Finally, a prompt will appear asking you if you wish to print the
     mailing label with the FIRST name only (F), the SPOUSE name only (S),
     or BOTH names on the label (B). If the member has children, an
     additional option is offered which allows a mailing label to be
     addressed to a child (C).
     The default is 'B' (for both).

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










                                  - Page 14 -


     * LABEL   - ALL ALPHABETICALLY (OR BY LETTER) allows you to print an
     entire set of labels sorted alphabetically. This is useful if you
     wish to send labels to all members of your organization.

     A prompt appears asking you if you wish to print labels for a single
     letter of the alphabet. If you do, enter the letter and press ENTER.
     If you wish to print all letters, leave the field blank.

     NOTE: This feature is not available in the ORGANIZATION SYSTEM.

     Another prompt appears asking you if you are sure you want to
     continue. Respond 'Y' if you are sure. Responding 'N' returns you to
     the PRINT LABELS MENU. The prompts for number of copies and to whom
     are also displayed. The labels will then begin printing in
     alphabetical order.

     You may experience some delay from time to time. This is only time
     the computer is taking to sort the labels. Do not be worried about
     any pauses in the printing.


     * LABEL   -  ALL MEMBERS BY ZIP CODE (OR BY SINGLE ZIP) allows you to
     print a complete set of mailing labels sorted by the 9-digit ZIP CODE
     field. Names are sorted alphabetically within zip code.

     A prompt appears asking you if you wish to print labels for a single
     zip code prefix. If you do, enter the 5-digit zip code prefix and
     press ENTER. If you wish to print all zip codes, leave the field
     blank and press ENTER.

     NOTE: This feature is not available in the ORGANIZATION SYSTEM.

     Another prompt appears asking you if you are sure you want to
     continue. Respond 'Y' if you are sure. Responding 'N' returns you to
     the PRINT LABELS MENU. The prompts for number of copies and to whom
     are also displayed. The labels will then begin printing in zip code
     order.


     * LABEL   -  ALL BY ZONE (OR BY SINGLE ZONE) allows you to print an
     entire set of labels sorted by the zone field. Names are printed
     alphabetically within zone. Often times the Post Office requires that
     organizational mailers be sorted by zone code in order to receive
     "bulk rate" postage fees. This option was added to accommodate this.

     A prompt appears asking you if you wish to print labels for a single
     zone. If you do, enter the 6-character zone and press ENTER. If you
     wish to print all zones, leave the field blank and press ENTER.

     NOTE: This feature is not available in the ORGANIZATION SYSTEM.

     Another prompt appears asking you if you are sure you want to
     continue. Respond 'Y' if you are sure. Responding 'N' returns you to
     the PRINT LABELS MENU. The prompts for number of copies and to whom
     are also displayed. The labels will then begin printing in zone
     order.




                                  - Page 15 -


     * LABEL   -  ALL BY CODE (OR BY SINGLE CODE) allows you to print an
     entire set of labels sorted by the code field. Names are printed
     alphabetically within code.

     A prompt appears asking you if you wish to print labels for a single
     code. If you do, enter the 6-character code and press ENTER. If you
     wish to print all codes, leave the field blank and press ENTER.

     Another prompt appears asking you if you are sure you want to
     continue. Respond 'Y' if you are sure. Responding 'N' returns you to
     the PRINT LABELS MENU. The prompts for number of copies and to whom
     are also displayed. The labels will then begin printing in code
     order.

     NOTE: This option is not available in the ORGANIZATION SYSTEM.


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


     * LABEL   -  MEMBERS BY JOINED DATE RANGE allows you to print a set
     of labels sorted alphabetically, contingent on a beginning and ending
     joined date, including years. This would allow you to print a set of
     mailing labels to all persons, for instance, who joined between
     1/1/88 and 12/31/89. The effect would be to print mailing labels for
     all members joined the past two years (The VISITOR system has FIRST
     VISIT DATE in place of JOINED DATE).

     When you choose this option, a screen appears asking you to enter a
     beginning date and an ending date. Enter the dates as you did before
     and press F10 to accept them. Press ESC to cancel the request. The
     prompts for number of copies is also displayed.


     * LABEL   -  MEMBERS BY ANNIVERSARY DATE RANGE allows you to print a
     set of labels sorted alphabetically, contingent on a beginning and
     ending anniversary, including years. This would allow you to print a
     set of mailing labels to all persons, for instance, married between
     1/1/88 and 12/31/89. The effect would be to print mailing labels for
     all members married the past two years.

     When you choose this option, a screen appears asking you to enter a
     beginning date and an ending date. Enter the dates as you did before
     and press F10 to accept them. Press ESC to cancel the request. The
     prompts for number of copies is also displayed.





                                  - Page 16 -


                            PRINT ROLODEX(TM) CARDS


     Rolodex cards may also be printed with ACIS. Tractor-feed Rolodex
     cards must be three-inches high by five-inches wide. They may also be
     purchased at most computer or stationery stores.

     When this option is chosen from the main menu, another menu is
     presented listing the available print label options. They are:

              1) ROLODEX   - ONE MEMBER
              2) ROLODEX   - ALL MEMBERS ALPHABETICALLY (OR BY LETTER)
              3) RETURN TO MAIN MENU

     NOTE: These options are combined with the label options on the
           ORGANIZATION system.


     * ROLODEX -  ONE MEMBER is identical to LABEL - ONE MEMBER, but no
     prompt is given for which name to print.


     * ROLODEX -  ALL ALPHABETICALLY is identical to LABEL - ALL
     ALPHABETICALLY but no prompt is given for which name to print.


     * RETURN TO MAIN MENU returns you from the PRINT ROLODEX MENU to the
     MAIN MENU.
































                                  - Page 17 -


                                 PRINT REPORTS


     Reports may be printed with ACIS. The reports are printed on standard
     8.5" by 11" tractor-feed paper.

     When this option is chosen from the main menu, another menu is
     presented listing the available print report options. They are:

              1) COMPREHENSIVE MEMBER DIRECTORY
              2) ALL MEMBERS BY MEMBERSHIP NUMBER
              3) BIRTHDAY REPORT
              4) ANNIVERSARY REPORT
              5) DATE JOINED REPORT
              6) BIRTHDATE RANGE REPORT
              7) JOINED DATE RANGE REPORT
              8) ANNIVERSARY DATE RANGE REPORT
              9) RETURN TO MAIN MENU

     NOTE: Options 2, 4 and 8 are not available on the ORGANIZATION
           system.

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


     * ALL MEMBERS BY MEMBERSHIP NUMBER provides a report, sorted by
     chronological membership number, of all members. The report simply
     lists the number and name of the member.


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





                                  - Page 18 -


     A separate line will appear for each person, including children
     (except for organization system), who has a birthday in that month-
     day date range. For example if both a FIRST name and SPOUSE name have
     a birthday in the same month-day date range, a separate report line
     will be generated for each party.

     If an output line is for a child, one parent's name will also be
     printed to help you locate that record on the database, if needed.


     * ANNIVERSARY REPORT is a useful report that provides a list of names
     who have an anniversary in a given timeframe. The report prints the
     name and anniversary date of all members and is not sorted in any
     manner. Follow the same input guidelines as the BIRTHDAY REPORT.

     NOTE: The ANNIVERSARY REPORT is not available in the organization
           information system.


     * JOINED DATE REPORT is a useful report that provides a list of names
     who have a join date within a given timeframe. The report prints the
     name and date joined for all members and is not sorted in any manner.
     Follow the same input guidelines as the BIRTHDAY REPORT.

     NOTE: The visitor information system does not have a JOINED DATE
           REPORT. Instead, it produces a FIRST VISIT REPORT.


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


     * JOINED DATE RANGE REPORT is similar to the BIRTHDATE RANGE report,
     except joined dates are used.

     NOTE: The visitor information system does not have a JOINED DATE
           RANGE REPORT. Instead, it produces a FIRST VISIT REPORT.


     * ANNIVERSARY DATE RANGE REPORT is similar to the BIRTHDATE RANGE
     report, except anniversaries are used.

     NOTE: The ANNIVERSARY RANGE REPORT is not available in the
           organization information system.






                                  - Page 19 -


     * RETURN TO MAIN MENU returns you from the PRINT REPORTS MENU to the
     MAIN MENU.


























































                                  - Page 20 -


                            RETURN TO ACIS MAIN MENU


     The RETURN TO ACIS MAIN MENU option is very important. If you have
     added, changed, or deleted any members, you MUST exit the system
     through this option in order for your members to be properly saved.
     DO NOT reboot your computer or turn off your computer if you have
     added, changed or deleted members unless you have properly terminated
     the program!

     If you have only printed or inquired members, you may warmboot your
     computer or turn it off. No information will be lost.

     When you do choose to quit, a prompt appears asking you if you are
     sure you want to quit. Press 'Y' to return to the ACIS main menu.
     Press 'N' to return to the main menu.

     After you press 'Y', an information screen is displayed which lists
     how many members you inquired, added, changed, or deleted and also
     how many members are on your database. This is called a "session
     log". If you would like a printout of the session log, press your
     SHIFT-PRTSCN key on your keyboard.






































                                  - Page 21 -


                               UTILITY FUNCTIONS


     * CREATE NEW ORGANIZATION DISK is a utility that prepares a diskette
     for use with the organization information system. You must prepare a
     diskette BEFORE you can add any members to it.

     When this utility is started, an information screen is presented.
     Place a floppy disk in drive A: and press a key. The disk will be
     formatted, erasing any previous information on the disk.

     Next, a screen will appear asking you to enter a name for the
     organization. Enter a name (up to 15 characters) and press ENTER. The
     name will be written to the disk and an empty database will be
     created. Once this process is complete, you may feel free to use the
     diskette in the organization information system.


     * TRANSFER VISITOR TO MEMBER is a utility that will allow you to
     transfer a visitor from the visitor information system to the member
     information system (personal notes are included in the transfer).

     When this utility is started, the members and visitors are loaded and
     a menu is presented. Press 1 to transfer a visitor, press 2 to quit
     the utility and return to the UTILITIES menu..

     When you choose to transfer, an input screen is presented similar to
     the inquiry screen of any information system. Enter the "key"
     information, and press F10. When the visitor is displayed, a prompt
     will appear asking you if you want to transfer this visitor. If you
     do, press 'Y' and the visitor will be added to the member database
     (and deleted from the visitor database). If you do not want to
     transfer that visitor, press 'N'.

     A prompt will appear asking you if you want to transfer any more.
     Respond accordingly.

     When all transfers are finished, choose option 2 from the main menu
     and both databases will be saved.


     * TRANSFER MEMBER TO ORGANIZATION is a utility that will allow you to
     transfer a single member (first name, spouse name or child) from the
     member information system to an organization system floppy disk
     (personal notes are included).

     When this utility is started, you will be requested to insert your
     organization disk in drive A:. Place the disk in drive A: and press
     any key. The organization and members will begin loading. A main menu
     will then be presented. Press 1 to transfer a member, press 2 to quit
     the utility.

     When you choose to transfer, an input screen is presented similar to
     the inquiry screen of any information system. Enter the "key"
     information, and press F10. When the member is displayed, a prompt
     will appear asking you if you want to transfer this member. If you




                                  - Page 22 -


     do, press 'Y'.

     At this point, another prompt will appear asking you which member to
     transfer: First, Spouse, or Child. This is similar to the processes
     in the member and visitor information system regarding single mailing
     labels. Choose the appropriate person (by pressing 'F', 'S' or 'C').
     The member will be added to the organization database in drive A:
     (the member WILL NOT be deleted from the member database). If you do
     not want to transfer that member, press 'N'.

     A prompt will appear asking you if you want to transfer any more.
     Respond accordingly.

     When all transfers are finished, choose option 2 from the main menu
     and the organization database will be saved. You will then return to
     the UTILITIES menu.

     * BACKUP MEMBERS TO FLOPPY DISK is a utility that allows you to make
     a copy of the MEMBER database on a floppy disk. It is considered a
     VERY WISE practice to do this as a loss of member data would result
     in a very lengthy recovery time if you had to retype each individual
     member.

     When this utility is started, an information screen is presented
     giving you instructions. Place a FORMATTED, empty disk in drive A:
     and press any key. The member database (BUT NOT THE PERSONAL NOTES)
     is saved on the floppy disk. You will automatically be returned to
     the UTILITIES main menu.

     Place the backup floppy disk in a safe place. It is recommended that
     you do this procedure at least once a week, if not more often. You
     should mark the time and date of the backup on the floppy disk label.
     This might be helpful if you need to restore the database for some
     reason.

     * BACKUP VISITORS TO FLOPPY DISK is much the same as the BACKUP
     MEMBERS utility, only the VISITORS database is copied.

     * RESTORE MEMBERS FROM FLOPPY DISK is a utility which will copy the
     previously backed-up MEMBER database from a floppy disk to your
     C:\ACIS subdirectory. You would choose this procedure if you ever
     wanted to restore the MEMBER database from a previous backup.

     When this utility is started, an information screen is presented
     giving you instructions. Place the floppy disk containing the
     backed-up MEMBER database in drive A: and press any key. The member
     database (BUT NOT THE PERSONAL NOTES) is copied from the floppy disk
     to your C:\ACIS subdirectory. You will automatically be returned to
     the UTILITIES main menu.

     * RESTORE VISITORS FROM FLOPPY DISK is much the same as the RESTORE
     MEMBERS utility, only the VISITORS database is restored.

     * RETURN TO ACIS MAIN MENU will return you to the ACIS main menu.






                                  - Page 23 -


                                OTHER UTILITIES


     There may be a time when you wish to erase all the data in the MEMBER
     or VISITOR databases. A facility has been provided for you in this
     case.

     To completely erase your MEMBERS database, change to the C:\ACIS
     subdirectory from your DOS prompt (C:> CD\ACIS) and type the command
     STARTM. Follow the on-screen directions. If you do not want to
     continue with the procedure, press CTRL-C and your MEMBER database
     will not be erased. Otherwise, press any key and your MEMBER database
     will be erased (along with the PERSONAL NOTES).

     To completely erase your VISITORS database, change to the C:\ACIS
     subdirectory from your DOS prompt (C:> CD\ACIS) and type the command
     STARTV. Follow the on-screen directions. If you do not want to
     continue with the procedure, press CTRL-C and your VISITOR database
     will not be erased. Otherwise, press any key and your VISITOR
     database will be erased (along with the PERSONAL NOTES).

     There may be an instance where your data cannot be read due to disk
     damage. If this happens, you may be able to rebuild the index to your
     database. Change to the C:\ACIS subdirectory from your DOS prompt,
     and type RUN5 REBUILD (for the member database) or RUN5 REBUILDV (for
     the visitor database).

     To recover an organization disk, place the disk in drive A: and type
     COPY A:ANSI.RND C:\ACIS\A.RND from your DOS prompt. Once copied,
     change to your ACIS subdirectory (CD\ACIS) and type RUN5 REBUILDO. If
     successful, you may remove the extra copy of the data by typing DEL
     C:\ACIS\A.RND.




























                                  - Page 24 -


                           ACIS CONTRIBUTIONS SYSTEM


     The ACIS CONTRIBUTIONS SYSTEMS are now available to those who
     register their copy of ACIS. The contributions system is an excellent
     addition to the ACIS system and integrates perfectly with the data
     already stored in the member and visitor systems.

     The contributions system is designed to track pledges and givings of
     all members and visitors. Its data entry features are unbelievably
     easy to use and the reporting system will save many hours of work for
     your financial staff.

     Members or visitors may be recalled by typing their name, their
     envelope number, or scrolling backwards and forwards through the
     database. Once chosen, the member or visitor's contribution record is
     retrieved. You may then add information regarding the date of the
     pledge or offering, the contribution category (you may define up to
     40 separate categories), and the amount. Each member or visitor may
     have up to 300 entries which may be scrolled up or down on the
     screen!!

     A reporting section allows you to print one member's contribution
     statement (for a given timeframe or for year-to-date), all members'
     contribution statements, a contribution category summary statment for
     a given timeframe or for year-to-date, a list of all members and
     their envelope numbers, ledger sheets for recording contributions
     before data entry, and a list of contribution categories.

     The contributions system has four levels of security ranging from
     unlimited privileges to the authority to print only selected reports.
     Prying eyes not privy to the password system will not be allowed into
     contributions system at all.

     If financial record keeping is a must for your church or
     organization, your registration of ACIS is well-worth the price to
     receive the contributions system upgrade.























                                  - Page 25 -


                                  REGISTRATION

     I think you will find ACIS to be a very professional and useful
     product for your church or organization. There are other systems that
     you may purchase for hundreds of dollars which do not provide the
     level of detail and functionality that ACIS provides.

     The registration fee for ACIS is forty-nine dollars. The registration
     fee, in addition to helping the author justify the reason for
     creating ACIS, will entitle you to free upgrades and revisions as
     they become available (including the now-available CONTRIBUTIONS
     system!!).

     ACIS is an evolving product. As you register, please be sure to give
     feedback on how you think this product could be improved. Your
     suggestions may very well be incorporated in the next release.

     Thank you for registering your copy of ACIS . . . John Phillips.
     *-------------------------------------------------------------------*
     |                      ACIS REGISTRATION FORM                       |
     |                                                                   |
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
     | WHERE DID YOU RECEIVE YOUR COPY OF ACIS?                          |
     |                                                                   |
     | _____________________________________________  VERSION: ________  |
     |                                                                   |
     |                                                                   |
     | PLEASE SEND A CHECK FOR $ 49.00 PAYABLE TO JOHN M. PHILLIPS TO:   |
     |                                                                   |
     |        JOHN M. PHILLIPS                                           |
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




                                  - Page 26 -6
```
{% endraw %}

## FILE2388.TXT

{% raw %}
```
Disk No: 2388                                                           
Disk Title: Advanced Church Information Systems:ACIS                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Advanced Church Information System (ACIS)                
Author Version: 2.1                                                     
Author Registration: $49.00                                             
Special Requirements: 384K RAM and a hard drive.                        
                                                                        
ACIS (Advanced Church Information Systems) is a friendly computer       
software system designed to increase church productivity by keeping     
relevant information about members, visitors, and organizations.  This  
information can then be used to print mailing labels, Rolodex (tm)      
cards, and a variety of reports.                                        
                                                                        
ACIS is menu-driven, meaning that all available options are selected    
from a series of menus.  No prior experience with database programs is  
needed to become productive with ACIS.  ACIS was programmed by John M.  
Phillips for the First United Methodist Church of Allen, Texas, but has 
been adapted for use with most denominations.                           
                                                                        
ACIS is divided into four distinct systems:  the member information     
system (capable of storing 800 records), the visitor information system 
(also 800 records), the organization information system (500 records),  
and the utility functions.  The variety of reports the systems generate,
together with an informative manual and easy program, fit in well with  
a church that wants to be the "home" church of its congregation.        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2388

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT      1328   3-21-90   1:17p
    PKXARC   COM     10368   8-25-87   1:40p
    READ     BAT        27   3-21-90   1:17p
    READ     ME        926   3-21-90   1:19p
    ACIS     ARC    277922   3-28-90   9:46a
    FILE2388 TXT      2443   9-18-90   8:58a
            6 file(s)     293014 bytes
                           25600 bytes free
