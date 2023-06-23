---
layout: page
title: "PC-SIG Diskette Library (Disk #3222)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3222/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3222"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## SR.DOC

{% raw %}
```







                             SPEAKER'S RESOURCE
                                   1.00



     A Resource for Managing Speaker's Stories and Notes for IBM PC and
     Compatible Computers





                                 April 1992

                     (C)Copyright TexaSoft, 1983-1992
                               P.O. Box 1169
                          Cedar Hill, Texas 75104


     All Rights Reserved

     All rights reserved. Printed in the United States of America. No part
     of this book may be reproduced without prior permission. For
     information, address inquiries to TexaSoft, PO Box 1169, Cedar Hill,
     Texas 75104 USA or Fax:214-291-3400.

     No patent liability is assumed with respect to the use of the
     information contained herein. While every precaution has been taken in
     the preparation of this publication, the publisher assumes no
     responsibility for errors or omissions. Neither is any liability
     assumed for damages resulting from the use of the information herein.














     _______________________________________________________________
                           Please Register




                                        1






     Speaker's Resource
     _______________________________________________________________



                                                Contents
                                                --------

                    Introduction to Speaker's Resource
                    Installing Speaker's Resource
                    Beginning Speaker's Resource
                    Take a Quick Tour
                         Textbases on disk
                    How Speaker's Resource is Organized
                         Using the Files Menu
                         Using the Edit Menu
                         Using the View Menu
                    Options While Viewing Records
                    Using the IPPCX Program
                    Speaker's Resource Editor
                         Edit Function Keys
                         Edit Control Commands
                    Using Command Line Switches
                    User Ballot






















     _______________________________________________________________
                           Please Register




                                        2






     Speaker's Resource
     _______________________________________________________________


     Introduction to Speaker's Resource

     Speaker's Resource is a text storage and retrieval program allowing
     you to store stories, notes, quips, and other information that might
     be useful to you as a speaker. It gives you the ability to store an
     encyclopedia of information on the computer and to "look up" pieces of
     that information by searching for certain key words. Information about
     a certain topic is stored in an Speaker's Resource "textbase"
     database. Enter information from the keyboard, ASCII files, or import
     from your favorite word processor. Speaker's Resource textbases are
     compatible with TexaSoft's Information Please databases.

     For example, suppose you are required to give talks about the
     franchise business. In order to keep up with what is going on, and
     what is avaibable for particular industries, you may want to have a
     textbase the includes information on available franchises. Finding the
     right story or joke to tell is always a problem when preparing a
     speech. You can store hundreds of stories in a textbase, and search
     for them by topic or for a keyword. If you are a minister, you can
     store full sermons, selections from sermons, commentaries on passages
     of scripture, and so on in a textbase.

     When you begin to prepare a speech, you can search through one or more
     textbases, find information that you want to include in your speech
     and print it out or collect it into a file that can be used in your
     word processor.

     Speaker's Resource can replace your cumbersome paper files (and save a
     few trees while its at it), and make looking up information quicker
     and easier.

     Installing Speaker's Resource

     To place Speaker's Resource on your hard disk, place the Speaker's
     Resource distribution disk in your A: drive (or B:, C:, D: etc). Make
     A: (or B: etc) the default by typing A: (or B: etc) at the DOS prompt.
     Enter the command:

     INSTALL

     Then follow the prompts on the screen. You will be prompted to enter
     or confirm the name of the disk to install FROM, and the disk to
     _______________________________________________________________
                           Please Register




                                        3






     Speaker's Resource
     _______________________________________________________________


     install TO, and the DIRECTORY where you want the program installed.
     Suggested answers will be presented for each of these questions. To
     accept the suggestion, press Enter. To  enter a new TO, FROM or
     DIRECTORY, press backspace to erase the suggested answer,  then enter
     your own specification.

     Beginning Speaker's Resource

     To begin Speaker's Resource from the DOS prompt, make sure you are
     logged into the correct drive and are in the \SR directory. If you are
     not in the SR directory, enter the command:

     CD \SR

     To begin Speaker's Resource, enter the command

     SR

     Depending on what edition you are running, Copyright information may
     appear on the screen. If it does, press Enter. A screen will appear
     with a menu bar at the top and a status bar at the bottom. The Files
     menu will be displayed. To choose an option from the menu, press the
     first letter of the option or use the up and down arrow keys to
     highlight the desired option, then press Enter.

     Setup Speaker's Resource

     To setup Speaker's Resource for your computer, select "Choose Program
     Options" from the menu. You will be prompted to enter the path to be
     used for the program. For now, just enter the name of the disk drive,
     such as C: or A: and press Enter. You will then be prompted to choose
     the kind of monitor you are using. If your monitor will display
     colors, choose color. If you are using a laptop with an LCD monitor,
     you will probably choose the LCD option or else choose the monochrome
     option (black and white, green and black, etc).  Choose the one that
     is most comfortable to you. Next, you will choose your printer port,
     usually LPT1:.

     You will also be asked to enter default margins for printing our
     records, and you will be allowed to choose if you want to
     automatically have the printer go to the top of form each time a
     record is printed.
     _______________________________________________________________
                           Please Register




                                        4






     Speaker's Resource
     _______________________________________________________________



     The setup information is saved to disk so you will not have to set
     these options again unless you want to change something. You can reset
     these program options at any time by choosing the Choose Program
     Options from the FILES menu.

     Take a Quick Tour of Speaker's Resource

     To give you an idea of what Speaker's Resource can do, follow along
     with the example given here. All of the menus and options used here
     are explained later in more detail. Begin Speaker's Resource by
     entering the command SR at the DOS prompt. You should first see a
     copyright notice. Press Enter.

     1. Choose Textbase: Choose the Speaker's Resource textbase to use by
     selecting the option "Open a Textbase" from the Files menu (Either
     press the O (letter O, not zero) key or highlight this option and
     press Enter). When you choose this option, one or more textbase names
     will be listed on the screen. Using the up and down arrow keys,
     highlight the name "SUCCESS" and press Enter. At the bottom left of
     the screen, you should see a note that the textbase SUCCESS is
     currently in use.

     2. Go To View Menu: The View menu will now be extended. Use the up and
     down arrow keys to highlight the option "View Keyword List." With this
     option highlighted, press the Enter key to select it. A list of
     keywords, one list per line, will appear on the screen. Use the Up and
     Down arrow key to move to record number 5, then press the Enter key.
     This causes the contents of record number 5 to be displayed on the
     screen.

     3. View Nearby Records: With record number 5 displayed on the screen,
     press the F10 key a couple of times. This moves you forward in the
     textbase. Pressing the F9 key moves you backwards in the textbase.
     Press the Esc key to return to the screen listing the keywords. Press
     Esc again to return to the View Menu.






     _______________________________________________________________
                           Please Register




                                        5






     Speaker's Resource
     _______________________________________________________________


     4. Do A Keyword Search: While in the View menu, press the "K" key to
     choose the option "Keyword Search."  A list of match types will
     appear. Choose the Single Keyword Search option. You will be prompted
     to enter a keyword. Enter the word AMOS and press Enter. Speaker's
     Resource will now search the keyword lists for the word DISK, and will
     display the first record that contains that keyword.

     5. Continue Same Search: When a record is displayed, observe the
     keyword list to find the word DISK. Press the F10 key to continue the
     search to the next keyword list containing the word DISK, or press the
     F9 key to search backwards in the file. If there are no more matches,
     the search ends.

     6. End the Program: Press the Esc key one or more times until you are
     back to the View menu. Press Esc once more and you will be prompted

     End Speaker's Resource (y/N)

     Enter Y key and press Enter to end the program and return to the DOS
     prompt.

     You can also begin SR from the DOS prompt and automatically open a
     textbase to use. For example, to open the PARKS textbase, enter this
     command at the DOS prompt:

     SR /OPEN:PARKS

     This time the SR screen appears with the VIEW pull down menu extended
     and KEYWORD SEARCH highlighted. Press the downarrow key once to select
     In-Text search and press Enter (or press I). Choose single keyword
     search, and enter the word BEAR. The program will locate the first
     record in the PARKS textbase that matches the search word BEAR.

     This textbase also uses the PCX viewer to display a map of the park's
     location. Press the F4 key, and a map of Alaska should appear. (If it
     does not, you may not have a CGA compatible monitor.) Press Enter to
     go back to the text description. Press the Esc key one or more times
     until you are back to the View menu. Press Esc once more and you will
     be prompted

     End Speaker's Resource (y/N)

     _______________________________________________________________
                           Please Register




                                        6






     Speaker's Resource
     _______________________________________________________________


     Enter Y key and press Enter to end the program and return to the DOS
     prompt.

     Textbases On Disk

     Other Speaker's Resource textbases on disk are:

     IP-DOS: This textbase contains information about how to respond to DOS
     error messages concerning the use of disk drives. It gives suggestions
     for how to recover from problems you may encounter. PARKS Textbase:
     This textbase contains information about US National Parks. Open this
     textbase and look at the first record for an Alaska National Park.
     Notice that when the record is displayed, there is a menu item F4 at
     the bottom of the window. This indicates that there is a command
     associated with this record. In this case, it is a command to show a
     map of the Alaska National Parks. (Action commands are described
     later) If you have a CGA compatible monitor (including an EGA or VGA),
     press the F4 key and the Alaska parks map should appear on the screen.
     Press Enter to return to the text of the record.

     FRANCHISE Textbase: There is a file on disk called FRANCHIS.TXT that
     is the text of a textbase which you can use to try out the import
     feature of SR. From the SR Files menu, choose New Textbase, and call
     it FRANCHIS. Then go to the Edit menu and choose Import. Import the
     file FRANCHIS.TXT, then look at the records to see how this
     information was easily imported into SR. This textbase contains
     information about US Franchise Opportunities. Only a few records are
     included in this example textbase. Also, you might examine the
     FRANCHIS.TXT file with your word processor to see how to prepare a
     file to be imported into SR.

     Besides the information in these textbases, you can create your own
     textbases. The following information details the various commands and
     options available to you in Speaker's Resource.








     _______________________________________________________________
                           Please Register




                                        7






     Speaker's Resource
     _______________________________________________________________


     How Speaker's Resource is Organized

     The Speaker's Resource main menu consists of three options; Files,
     Edit, and View. When you choose one of these options, a menu will be
     displayed giving you another set of options. The FILE menu item is
     used to deal with file (textbase) related issues such as creating a
     new textbase, opening a current textbase, deleting a textbase and so
     on. The EDIT menu item is used to deal with individual entries
     (records) in the textbase such as editing a record, deleting records
     and so on. The VIEW menu item is used to search for and look at
     entries in the textbase.

     Each entry in an Speaker's Resource textbase is called a record. A
     record consists of two parts, a keyword list and a description. The
     keyword list is a list of  words that describe the entry. For example,
     the keywords might be "HARD DISK WILL NOT BOOT" and the entry might
     explain what can cause a hard disk to lose its ability to boot, and
     give some solutions for solving the problem. The Keyword list consists
     of up to 65 characters. The entry description can consists of up to
     500 lines (or about 32K of information) of free-form information -
     usually one or more paragraphs of information.

     Using The Files Menu

     The File menu allows you to use and manipulate Speaker's Resource
     files and also contains some options that deal with program setup and
     operation. The Files menu options are:

     Files Menu Options
     ------------------
     Help
     New Textbase
     Open a Textbase
     Delete a Textbase
     Edit Textbase Description
     Print a Textbase
     Encode/Decode a Textbase
     Sort a Textbase
     About Speaker's Resource
     Choose Program Options
     Go to DOS, Return with EXIT
     Quit, Return to DOS
     _______________________________________________________________
                           Please Register




                                        8






     Speaker's Resource
     _______________________________________________________________



     To choose one of these options, you may use the up and down arrow keys
     to highlight the desired option and then press the Enter key.
     Optionally, you can press the first letter of the option. For example,
     to choose the "About Speaker's Resource" option, press the A key.
     Following is a brief description of each of these options.

     HELP

     The Help option displays a series of help screens that summarize the
     contents of the manual. When Help is chosen, a menu of items will
     appear. You can then choose a topic to examine or return to the main
     menu.

     NEW TEXTBASE

     The New Textbase option allows you to name a new textbase. Before
     entering information into a textbase you must either open an existing
     textbase or create a new textbase.

     OPEN TEXTBASE

     The Open Textbase option allows you to choose which Speaker's Resource
     textbase on disk you will be using. A list of the available textbases
     will be displayed on the screen from which you can choose one to open.

     DELETE A TEXTBASE

     The Delete a Textbase option allows you to delete textbase files from
     your disk. It will delete the currently open textbase -- but will ask
     for a confirmation to make sure you really want to delete the textbase
     files.










     _______________________________________________________________
                           Please Register




                                        9






     Speaker's Resource
     _______________________________________________________________


     EDIT A TEXTBASE DESCRIPTION

     The Edit a Textbase Description option allows you to enter or edit the
     40 character description of the currently open textbase. This textbase
     description is displayed in the list of textbases when you choose the
     Open Textbase or Delete Textbase options.

     PRINT TEXTBASE

     The Print Textbase option allows you to print the contents of the
     textbase to a printer or to a file.

     ENCODE/DECODE A TEXTBASE

     The Encode/Decode option allows you to scramble the contents of a
     textbase to prevent unauthorized persons from extracting information
     from the textbase. When you encode a textbase, you will be asked to
     enter a password. Later, if you want to decode the textbase (and turn
     it back into a normal textbase) you will have to enter the same
     password before the program will decode the textbase. When you encode
     a textbase, you can choose to have:

     1. the information scrambled in the textbase but available for viewing
     from SR. No printing is allowed from the textbase. You would use this
     option when you want the information to be available for viewing, but
     you want some protection from the user printing the information to a
     printer or to the file.

     2. the information scrambled in the textbase and cannot be viewed
     unless the correct password is entered when requested. No printing is
     allowed from the textbase. You would use this option when you want to
     limit who will be able to read/print the contents of the textbase.

     3. Similar to 2, except printing is allowed. When you choose to encode
     a textbase, you will be asked questions about how you want to allow
     the information to be viewed (one of the three options described
     above).

     Encoding will slow the display and searching of records, particularly
     on PC's using 8088 microprocessors. You will want to test the encoded
     textbase to see if encoding makes search times too long. Encoding is
     not fool-proof. A competent hacker would be able to decipher the
     _______________________________________________________________
                           Please Register




                                        10






     Speaker's Resource
     _______________________________________________________________


     scrambled data eventually, but the encoding is sufficient enough that
     it will keep the nosy from easily viewing or capturing the contents of
     a textbase. The decoding process simply returns an encoded textbase
     back to its original non-encoded state.

     SORT Textbase

     The Sort Textbase option allows you to sort the textbase keyword
     lists. In order to effectively use the sort option, you may pre-plan
     your keyword list so they can be sorted. For example, you might make
     the first word in your keyword list your most important word. For
     example, in the Franchise Textbase, it might be the kind of franchise
     such as AUTOMOTIVE, BUSINESS, FOOD, and so on. Then, when you enter
     new items and want to place the keyword list in alphabetical order,
     you can sort on the first word of your keyword list. When you choose
     to Sort a Textbase, you will be asked to enter the range of the
     keyword list to use as the sort key. For example, if you want to use
     the first 5 characters of the keyword list, you would enter 1-5 as
     your sort key range. When Speaker's Resource sorts a textbase, the
     textbase is also automatically compressed. Thus, any records that have
     been marked for delete will be gone when you perform a sort. If this
     sort does not place your textbase in the order you want, another
     option is to print the textbase to a file, then use a word processor
     to move records around. When your textbase is in the order you want,
     delete the old Speaker's Resource textbase and re-create the textbase
     name and import the information from your word processed file (it must
     be an ASCII text file). - See Import.

     ABOUT Speaker's Resource

     The About Speaker's Resource option gives copyright information about
     the program.










     _______________________________________________________________
                           Please Register




                                        11






     Speaker's Resource
     _______________________________________________________________


     CHOOSE PROGRAM OPTIONS

     The Choose Program Options item allows you to choose the disk drive
     and path to use for Speaker's Resource and to indicate what kind of
     monitor you are using. For the path, you can enter just the disk drive
     name, such as C: or a drive and path, such as C:\SR\. If no path is
     specified, Speaker's Resource will use information in the current
     default directory on your disk. You may choose from monitor types
     Color, LCD or Monochrome. The color option refers to CGA, EGA, PGA,
     VGA or other monitor types that display color. The LCD option displays
     only black and white. The Monochrome option displays black, white and
     bright white. Choose the one that is most pleasant for your use. After
     you make your choice, the information is stored to disk so the
     settings will be the same the next time you begin the Speaker's
     Resource program.

     GO TO DOS

     The Go to DOS option allows you to temporarily return to the DOS
     prompt. You may enter DOS commands or run another program. When you
     type EXIT at the DOS prompt, Speaker's Resource will resume.

     QUIT

     The Quit, Return to DOS option ends the Speaker's Resource program and
     returns you to the DOS prompt.

     Using The Edit Menu

     The Edit menu is used to edit or manipulate individual records in the
     textbase. Before using the Edit menu, you must have an open textbase.
     If a textbase is open, the textbase name will be located at the bottom
     left of the screen. The options on the Edit menu are:

     Edit Menu Options
     -----------------
     Add New Entry
     Delete an Entry
     Restore a Deleted Entry
     Edit and Entry
     Import from a File
     Compress the Textbase
     _______________________________________________________________
                           Please Register




                                        12






     Speaker's Resource
     _______________________________________________________________



     ADD NEW ENTRY

     The Add New Entry option allows you to enter a new record into the
     textbase. This record consists of a description and a keyword list.
     When you choose to enter a record, the Speaker's Resource Editor will
     display with a mostly blank screen. On this screen, you will enter the
     description that you want to appear in the record. Also, you must
     enter a keyword description. To display the keyword entry box, press
     the F2 function key. A dialog box will appear in which you can enter
     the keywords for this record. Press enter to return to the editor.

     Optionally, you can enter an Action Command to be associated with this
     record. An Action Command is a DOS command that you want to be issued
     during the viewing of the record. For example, In the PARKS textbase,
     when you view information about Alaskan parks, you can view a map of
     the parks by pressing the F4 key. The F4 key invokes a command that
     was defined when this entry was added (or edited). To define a
     command, press the CTRL-K key while adding or editing this record. The
     command may be any DOS command up to 25 characters in length. The main
     stipulation is that there must be enough memory in the computer for
     this command to execute. See the discussion on ACTION COMMANDS later.

     When you have finished entering the description and keywords, press
     the F7 function key to save the information. If you decide to abandon
     this entry and not save the information, press the Esc key.

     DELETE AN ENTRY

     The Delete an Entry option allows you to delete a record from the
     textbase. You will be asked to enter the record number of the entry to
     delete. Optionally, you can enter a range of records to delete. This
     process does not actually permanently get rid of the entry or entries
     - you can restore a deleted entry. If a record is deleted, you cannot
     read it or display its contents. To permanently get rid of all deleted
     records, use the Compress option.






     _______________________________________________________________
                           Please Register




                                        13






     Speaker's Resource
     _______________________________________________________________


     RESTORE A DELETED ENTRY

     If you have deleted an entry, you can get it back by using the Restore
     a Deleted Entry option. You will be prompted to enter the number of
     the entry to restore.

     EDIT AN ENTRY

     The Edit an Entry option allows you to edit the keywords and
     description of an entry. The entry will be displayed in the Speaker's
     Resource editor, where you can change, add to, or delete information
     in the description. Use the F2 key to edit the keyword list or CTRL-K
     to edit the Action Command (see description for Adding an Entry).
     Editing records can cause slack space in your textbase file. This is
     space in your textbase that formerly held information, but now is not
     used because of editing. You should periodically run the Compress
     option to free up the slack space in the textbase.

     IMPORT FROM A FILE

     Using the Import from a File option, you can enter information that
     you may already have on your computer into an Speaker's Resource
     textbase. To import information into Speaker's Resource, your
     information should be in a standard ASCII text file with lines less
     than 75 characters long. Most word processors will save information in
     this manner as an option. Your text file should have keyword lists
     before each description. This keyword list must begin with KEY:
     followed by up to 65 characters for the key list. For example:

     KEY:HARD DISK WILL NOT BOOT

     After the key,  place  the text of the description. You may have any
     number of entries in your text file. When you import them into
     Speaker's Resource, the "KEY:" statement will signal the beginning of
     a new entry.

     Optionally, you may also have a command line in the file. For example,
     if you want the command

     SRPCX ALASKA /M:0

     to be available when this record is viewed, place
     _______________________________________________________________
                           Please Register




                                        14






     Speaker's Resource
     _______________________________________________________________



     COMMAND:SRPCX ALASKA /M:0

     flush left in the description of this record on a line following the
     KEY: line. (see Action Commands, described later). You may also
     include a title (Textbase description) in the text file by placing
     TITLE: and a description on the first line of the file. For example:

     TITLE:FRANCHISE INFORMATION

     Once you have created the file containing the entries you may choose
     the Import From a File option. You will be asked the name of the file
     to import, and Speaker's Resource will read the file and add those
     entries to the record of the currently opened textbase. If you are
     beginning with a blank textbase, choose Create a Textbase from the
     Files menu, then choose Import from the Edit menu.

     A sample text file that you can import is on disk. The file is named
     FRANCHIS.TXT. To import this file:

     1) From the FILES menu, choose NEW Textbase and enter the name FRAN.
     Leave the textbase description blank since the text file contains a
     TITLE.

     2) Go to the EDIT menu and choose IMPORT. When asked for the file
     name, enter FRANCHIS.TXT.

     The information will be converted to an Speaker's Resource textbase,
     and is now ready to be searched and used.

     COMPRESS THE TEXTBASE

     When you have deleted records from a textbase, they are not physically
     removed, and they may be restored. To permanently get rid of these
     records, use the Compress the Textbase option. This will free up space
     on your disk and make searching the textbase more efficient.






     _______________________________________________________________
                           Please Register




                                        15






     Speaker's Resource
     _______________________________________________________________


     Using The View Menu

     The View menu is where you search and view the information in the
     Speaker's Resource textbase. You may choose to view a record by
     number, by searching for a keyword in the keyword list, by searching
     for one or more words in the record description or by looking at a
     list of the keywords. The items on the View Menu are:

     View Menu Options
     -----------------
     Keyword Choice
     In-Text Search
     View Keyword List
     Number Choice

     You must have a currently open textbase to choose one of these
     options. Choose an option by highlighting the option and pressing the
     Enter key, or press the first letter of the option.

     KEYWORD CHOICE

     When you choose the Keyword Choice option, you will see another menu
     giving you the following options:

     Single Keyword Search
     AND - Multiple AND Search
     OR - Multiple OR Search
     Quit

     A single keyword search allows you to enter a keyword or phrase (such
     as DISK). Speaker's Resource will then display the first record that
     matches the search. Case is not checked, so DISK will match disk. You
     may use the F9 key to view the previous matching record, the F10 key
     to view the next matching record. Deleted records will not be
     displayed. Press the F2 key if you wish to edit this record. Press the
     Esc key to end the viewing.

     A Multiple AND search allows you to specify 2 to 10 words to match.
     For example, you might want to match on the words DISK and BOOT. The
     AND match criteria means that the keyword must contain BOTH the word
     DISK and the word BOOT. You will be prompted to enter a list of match
     words with the AND sign (&) between each word. In this case you would
     _______________________________________________________________
                           Please Register




                                        16






     Speaker's Resource
     _______________________________________________________________


     enter

     DISK&BOOT

     Speaker's Resource will display the first record that matches the
     search criteria. You may use the F9 key to view the previous matching
     record, the F10 key to view the next matching record. Deleted records
     will not be displayed. Press the F2 key if you wish to edit this
     record. Press the Esc key to end the viewing. A Multiple OR search
     allows you to specify 2 to 10 words to match. For example, you might
     want to match on the words DISK or BOOT. The match criteria means that
     the keyword must contain EITHER the word DISK or the word BOOT. You
     will be prompted to enter a list of match words with a ~ (tilde)
     between each word. In this case you would enter

     DISK~BOOT

     Speaker's Resource will display the first record that matches the
     search criteria. You may use the F9 key to view the previous matching
     record, the F10 key to view the next matching record. Deleted records
     will not be displayed. Press the F2 key if you wish to edit this
     record. Press the Esc key to end the viewing.

     IN-TEXT SEARCH

     An In-text Search searches the contents of the entry, not just the
     keyword list. This search tends to be slower than a keyword search.

     When you choose the In-Text Search option, you are give the same
     options as in the Keyword search - a single keyword search, multiple
     AND matches and multiple OR matches.

     VIEW KEYWORD LIST

     The View Keyword List option displays a list of the keyword
     descriptions of all of the entries in the currently opened textbase.
     If there are more entries than the screen can display, you may press
     the down arrow key or PgDn to view additional keyword lists. To move
     back up the list, press the up arrow key or PgUp. To view the contents
     of a record, highlight the keyword list and press the Enter key.
     Press the Esc key to end the View Keyword List option.

     _______________________________________________________________
                           Please Register




                                        17






     Speaker's Resource
     _______________________________________________________________


     NUMBER CHOICE

     When you choose the Number Choice option, you will be asked to enter
     the number of the record to view. This record will then be displayed
     on the screen. You may use the F9 key to view the previous record, the
     F10 key to view the next record. Deleted records will not be
     displayed. Press the F2 key if you wish to edit this record. Press the
     Esc key to end the viewing.

     Options While Viewing Records

     While viewing records, there are several function key commands that
     are available to you. Pressing the F10 function key will cause
     Speaker's Resource to search for the next record. The F9 key searches
     for the previous record. Pressing the F2 key allows you to edit the
     record being viewed. Pressing the F3 key allows you to print this
     record or save the contents to a file. If an action command has been
     defined for a record, the F4 key will activate that command. Press the
     Esc key to quit viewing records and return to the previous menu.

     USING ACTION COMMANDS (F4)

     An Action Command is a DOS command that you want to be issued during
     the viewing of the record. If an Action Command has been created for a
     record, while viewing the record the F4 function key will appear at
     the bottom of the view window. When the F4 function key is pressed,
     the Action Command is executed.

     An Action Command is defined when an entry is added (or edited) in an
     Speaker's Resource textbase. To define a command while in the editor,
     press the CTRL-K key. The command may be any DOS command up to 25
     characters in length. The main stipulation is that there must be
     enough memory in the computer for this command to execute. The Parks
     information file uses an Action Command to display a map of Alaska
     associated with the description of Alaskan National Parks. A program
     that displays PCX (Paintbrush) files is included on your Speaker's
     Resource disk. This program, SRPCX.EXE, displays a graphic on the
     screen. When the user presses any key, the program ends, and control
     is turned back over to Speaker's Resource. See the description about
     how to use the SRPCX program.

     You can use any DOS command as an Action Command. There are any number
     _______________________________________________________________
                           Please Register




                                        18






     Speaker's Resource
     _______________________________________________________________


     of programs available to you that can display graphics (PCX, GIF, TIF
     and others), programs that can display spreadsheets, textbase file,
     text files, and so on. When the program you have initiated quits,
     control will be turned back over to Speaker's Resource.

     The primary concern in using an Action Command is if the user's PC has
     that program available and if it will work on his or her PC. For
     example, if you have a PCX graphic created to be viewed on a VGA type
     monitor, a person with a CGA monitor will not be able to see the
     graphic properly.

     If the command you want to issue is longer than 25 characters, you can
     use the Action Command to call a batch file. The batch file can then
     contain other commands that you want executed. See your DOS manual for
     a description of batch files.

     The program SRPCX was included on disk to illustrate how to use an
     Action Command. A description of how SRPCX works follows.

     USING THE SRPCX PROGRAM

     The SRPCX Program allows you to display PCX type files to the monitor.
     The format of the SRPCX program is

     SRPCX filename [/M:n]

     where filename is the name of the PCX file and the optional switch
     /M:n designates the Monitor type being used. The option n may range
     from 0 to 9, with the following meanings:

     PCX Monitor Modes for the SRPCX Program
     ---------------------------------------
     0 - 320 x 200 pixel CGA (4 colors)
     1 - 640 x 200 pixel CGA (2 colors)
     2 - 320 x 200 pixel EGA (16 colors)
     3 - 640 x 299 pixel EGA (16 colors)
     4 - 640 x 350 pixel EGA (2 colors)
     5 - 640 x 350 pixel EGA (16 colors)
     6 - 640 x 480 pixel VGA (2 colors)
     7 - 640 x 480 pixel VGA (16 colors)
     8 - 320 x 200 pixel VGA (256 colors)
     9 - 720 x 348 pixel Hercules (2 colors)
     _______________________________________________________________
                           Please Register




                                        19






     Speaker's Resource
     _______________________________________________________________



     The monitor type should match the type used to create the PCX file. If
     a monitor cannot display the monitor type, the PCX graphic will appear
     distorted.

     For example, in the PARKS textbase, the command

     SRPCX ALASKA /M:0

     was used as an Action Command. This command began the SRPCX program to
     display the PCX file named ALASKA.PCX. The switch /M:0 indicates that
     this graphic is made to display on a CGA type monitor. (It will also
     display properly on most EGA and VGA monitors.)

     Using the Speaker's Resource Editor

     The Speaker's Resource editor allows you to enter new record
     descriptions or to modify descriptions already in a textbase. The
     following commands are available in the editor. Commands are accessed
     by pressing a function key or by entering a CTRL (control) command.
     The edit keys command are:

     EDIT Function Keys
     ------------------
     Esc-End - Exit without saving modifications
     F1-Help: Help screens.
     F2-Keyword - Enter or Modify Keyword list
     F3-Top: Move to the top of the record
     F4-Bottom: Move to the bottom of the record
     F5-Files: List files or get file from disk.
     F6-Center a line
     F7-Save Record and any modifications
     F8-Clear: Clears editor contents (Does not clear
     copy buffer).
     F9-Mark: Mark block for copy.
     F10-Copy: Copy text.  See also Ctrl-C.

     To edit or enter a keyword list, use the F2 function key. The F9 and
     F10 commands are used to copy text from one location to another. To
     mark text (store it to be moved), place the cursor at the top left of
     the text and press the F9 key once. Then move the cursor to the bottom
     right of the text and press the F9 key again. Make sure your rectangle
     _______________________________________________________________
                           Please Register




                                        20






     Speaker's Resource
     _______________________________________________________________


     covers all of the text to move. When you mark the text, it will be
     highlighted on the screen. Move your cursor to where you want the text
     to be moved and press the F10 key. This will insert the text between
     existing lines in the record. To copy text directly over exiting text,
     use the CTRL-C command rather than the F10 command.

     To exit the editor and save the description, press the F7-Save key. To
     exit and not save, press the Esc key.

     The following Control commands are issued by pressing the CTRL key
     like a shift key, and then simultaneously pressing a single command
     key.

     Control Commands (CTRL)
     ------------------------
     CTRL A - Makes characters UPPER CASE.

     CTRL C - Is similar to the F10 function key. However, instead of first
     inserting blank lines before making a copy, CTRL C will place the
     copied text in the position specified by the cursor, directly over any
     text that may happen to exist.

     CTRL D - Deletes all characters on the current line which are to the
     right of the cursor. If the cursor is in column one, the entire line
     will be deleted.

     CTRL K - Allows you to enter or edit an Action Command.

     CTRL F - "Fills" the text from the current line to the next blank line
     which starts with a dot "." Each line is filled with as many words as
     will fit while observing the current line length specifications.

     CTRL J - Justifies line to right line length (margin) in editor.

     CTRL L - Resets the line length (right margin) within EDIT. After
     pressing CTRL L, you will be prompted to enter the new line length.

     CTRL S - Will search for a specified text. You will be prompted to
     enter the text to be located. Each time this text is matched, it will
     be highlighted on the screen.

     CTRL W - Deletes text from the position of the cursor to the next
     _______________________________________________________________
                           Please Register




                                        21






     Speaker's Resource
     _______________________________________________________________


     blank. This is usually used to delete a word.

     CTRL Y - Deletes a line.

     CTRL Z - Makes characters lower case.

     Using Command Line Switches

     This section lists some special features of Speaker's Resource. These
     may be of particular interest to organizational PC Support
     Coordinators.

     Command Line Switches
     ---------------------
     The format for the Speaker's Resource command is

     SR [/MESS:filename][/OPEN:textbasename]

     The items in brackets are optional switches to the command.
     Information in switches must not contain any blank spaces. The /OPEN:
     switch allows you to open an Speaker's Resource textbase file without
     having to choose it from the Speaker's Resource menu. This allows you
     to setup the Speaker's Resource program to automatically use a
     particular textbase. For example, if you want the textbase SUCCESS to
     be open when you begin the program, you would enter the command:

     SR /OPEN:SUCCESS

     The /MESS: switch allows you to display the information from a text
     file on the screen at the beginning of the Speaker's Resource program.
     This could be helpful if you are using Speaker's Resource as a part of
     an organizational support program. You can use this "Special Message"
     as a description of how to use Speaker's Resource, what updates you
     have included in a textbase, and other important messages.  For
     example, suppose you place some ASCII text in a file named SPECIAL.TXT
     that you want displayed when Speaker's Resource is begun. You would
     use the command:

     SR /MESS:special.txt

     This message will be displayed in a message box with the caption
     "Special Message" at the top and "Press Enter to Continue" at the
     _______________________________________________________________
                           Please Register




                                        22






     Speaker's Resource
     _______________________________________________________________


     bottom. ASCII text files can be created by most word processors.
     Create a file using margins that create a document about 60 characters
     wide. Save the document as a DOS, ASCII or Text file (different word
     processors use different terms.). Then, use the /MESS: switch in the
     Speaker's Resource command to display the message.

     Application Notes

     Speaker's Resource allows you to store and retreive information on
     disk. However, it can do more than that. It can provide a resource for
     working with other programs.

     Using Speaker's Resource with Word Processors

     Although Speaker's Resource is not itself a word processor, it can be
     a valuable tool for using your own word processor. When you are
     beginning to write a talk, you will want to gather material -- that's
     where Speaker's Resource comes in. Search for the information you need
     from one or more texbases. When you find an entry you want, choose the
     option to print it out. Then you can choose to print to the printer or
     to capture it to a file. If you are locating the material for the
     purpose of importing it to yout word processor, you will want to
     append the material to the same file each time you save to a file.

     To save a located record to a file, display the record on the screen.
     Press F3, which is the option to print or save to a file. Choose the
     option to save to a file, and enter a file name such as TALK.TXT. The
     next time you choose to save to the file, enter the name TALK.TXT+.
     The "+" plus disk tells SR to append the information to the existing
     file naemd TALK.TXT. When you have finished locating and saving
     information, the file TALK.TXT will contain all of the records you
     have saved.

     The information in the saved file (i.e., TALK.TXT) is in standard
     ASCII format, which virtually every word processor will import. For
     example, to import this information into Word Perfect, Enter Word
     Perfect and choose the Shift-F10 Retreive command, and enter the name
     TALK.TXT (or \SR\TALK.TXT, if appropriate). The information from the
     TALK.TXT file will then be imported into your Word Perfect Document.
     You can also use the F5-List Files and Ctrl-Text inOut commands in
     Word Perfect to import a text file. Other word processors have similar
     ways to import, retreive or merge files into a document.
     _______________________________________________________________
                           Please Register




                                        23






     Speaker's Resource
     _______________________________________________________________












































     _______________________________________________________________
                           Please Register




                                        24






     Speaker's Resource
     _______________________________________________________________



     USER BALLOT

     In order to continue to improve Speaker's Resource, we need your
     input. This ballot is used to help us prioritize changes in future
     versions. Please indicate the changes you would like to see most in
     this program. Place a number from 0 to 10 next to each item, where 10
     indicates a HIGH priority for change and 0 means a LOW priority for
     change. We appreciate your suggestions.

          Your Vote    Item
          ---------    -------------------------------
          _____        Support use of a mouse
          _____        Make the program searching faster
          _____        Make the keyword field longer
          _____        Allow fixed-length fields within the
                        keyword field
          _____        Allow sort by numeric and/or date keyword
                        items
          _____        Provide more examples on disk & in the
                        manual
          _____        Allow mixed AND and OR search criteria in
                        a search
          _____        Use single keystroke commands for commonly
                        used options (such as Alt-V to go to
                        view keyword list)
          _____       _____________________________________
          _____       _____________________________________
          _____       _____________________________________

          Write Other Suggestions Here:






     Please fill out this ballot and return to Texasoft, PO Box
     1169, Cedar Hill, Texas 75104, or fax to 214-291-3400.









                                        25


```
{% endraw %}

## SRORDER.TXT

{% raw %}
```
                      ORDER BLANK FOR SPEAKER'S RESOURCE
                                  SN:SR1000692

      SPEAKER'S RESOURCE software package, bound manual, latest version
      registration, diskette               ($49) x _______= $____________
      BONUS:A copy of the book A DAILY DOSE OF THE AMERICAN DREAM included 
      with each order of SPEAKER's RESOURCE, while supplied last.

      DAILY DOSE OF THE AMERICAN DREAM, Book containing 365 success
      stories in attractive binding($12.95 each)  X ______= $____________

      Other TexaSoft Programs:
      KWIKSTAT:Statistical Analysis Package ($69)x _______= $____________
      PC-CAI:Write your own tutorials       ($49)x _______= $____________
      SPELL GAMES:Practice spelling game    ($19)x _______= $____________
      BANNERIFIC:Vertical/Horizontal Banners($15)x _______= $____________

      ALL ORDERS:Add $4 P&H or $8 if PO, COD or RUSH,       $____________      
      $15 for US Express Mail or add $10 if overseas.
      Texas Residents add 7.25% sales tax                   $____________

      TOTAL ENCLOSED                                        $
                                                             ============
                Ask about quantity discounts and site licenses
      -------------------------------------------------------------------
      Specify:    ____5 1/4 inch disk or      ____ 3.5 inch disk
      -------------------------------------------------------------------
      Check one:___Check/M.O. ___MC ___VISA ___Am. Exp. ___P.O. #________
      -------------------------------------------------------------------

        IF CREDIT CARD:Name on card:______________________________

        Card Number is:____________________________Exp Date_______

        Authorized Signature:_____________________________________
      -------------------------------------------------------------------
        Mail order to:____________________________________________
        Address:__________________________________________________
        City, State, Zip:_________________________________________
        Phone (    )______________________________________________
      -------------------------------------------------------------------
      Where did you hear about SPEAKER'S RESOURCE?_______________________
      -------------------------------------------------------------------
      MAIL TO:TexaSoft, P.O. Box 1169, Cedar Hill, TX 75104. Thanks!
      30 day guaranteed satisfaction or return for a full refund.
      Phone Orders: Call 214-291-2115 (MasterCard, Visa, American Express)
      Order by Fax:214-291-3400. U.S. Order Line 1-800-955-TEXAS.
                                                     
                                  ORDER TODAY!
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Note to shareware vendors: We are members of the Association of 
Shareware Professionals (ASP), Distribute this disk under the 
guidelines of the ASP. We do not allow our product to appear in 
catalogues that also contain sexually explicit material.

Program: Speaker's Resource
Version: 1.0
Reason for version: First Version
Registration fee: $49.00 plus P&H

BBS filename: SPEAKR.ZIP or SPEAKR10.ZIP

Support: Registered user receives 3 months phone support, Compuserve 
support on 70721, 3145. Also gets printed, bound manual, newsletter, 
information on upgrades, changes and discounts on new versions. 

Disks needed: Hard Disk, 512K RAM, DOS 3.0, Graphics optional

SHORT DESCRIPTION: Speaker's Resource is for speakers, ministers,
teachers and others who want to collect and retreive stories, quips, 
jokes and other info. Store textual info then find, view or print by a 
keyword search. Link PCX graphic to a text record. Many stories 
included in sample database. TexaSoft shareware. ASP. 

LONGER DESCRIPTION: Speaker's Resource is for speakers, ministers, 
teachers and others who want to collect and retreive stories, quips, 
jokes and other info. Store textual info then find, view or print by a 
keyword search. Link PCX graphic to a text record. Many stories 
included in sample database. 

Enter information from keyboard or import from ASCII file. Search, 
Display and Print entries using keyword or full-text searches that 
allow mulitple AND and OR criteria. Relate text to a PCX graphic or 
another program. User interface is an easy to learn pull down menu 
(Windows-Like) interface. Contains example "textbase" containing many 
"success" and human interest stories. Requires 360K RAM. 

ASP Shareware. Register through TexaSoft, PO Box 1169, Cedar Hill, 
Texas 75104, or by phone (MC/VISA/AM. EXP) U.S. Order Line is 
1-800-955-TEXAS, Others: 214-291-2115. FAX:214-291-3400. 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3222

     Volume in drive A has no label
     Directory of A:\

    (C)TEXAS OFT        63   9-18-92   1:01a
    INSTALL  EXE      7996   9-18-92   1:01a
    SR       DOC     51737   9-18-92   1:01a
    PRINTDOC EXE      4549   9-18-92   1:01a
    README   BAT       900   9-18-92   1:01a
    TXINSTAL INI       214   9-18-92   1:01a
    FILE_ID  DIZ       323   9-18-92   1:01a
    VENDOR   DOC      1939   9-18-92   1:01a
    SRORDER  TXT      2828   9-18-92   1:01a
    XXSRARC  EXE    275219   9-18-92   1:01a
    GO       BAT        32  10-05-92   6:22a
    SHOW     EXE      2040   9-12-88  10:48a
           12 file(s)     347840 bytes
                            9216 bytes free
