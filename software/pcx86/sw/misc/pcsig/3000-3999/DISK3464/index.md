---
layout: page
title: "PC-SIG Diskette Library (Disk #3464)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3464/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3464"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## LICENSE.DOC

{% raw %}
```


                                LICENSE AGREEMENT


        (C) Copyright 1992 Advanced Data Solutions for this software
        and documentation. All rights reserved.

        Advanced Data Solutions permits you to use this software product 
        in the "Shareware" concept.  If you decide, after testing, to use
        the SHAREWARE MARKETING & MANAGEMENT SYSTEM product please send your registration fee of $40.00 to:

                           Advanced Data Solutions
                            15 Springcrest Drive
                              Luray, Va. 22835

        The rights to receive any such financial or other benefit, and to
        modify the product or its components, are reserved exclusively by
        Advanced Data Solutions.

        Support from users enables us to develop additional features and
        future versions of the SHAREWARE MARKETING & MANAGEMENT SYSTEM 
        product. Your payment of $40.00 would be greatly appreciated.

        Also, by sending in your payment, together with your name,
        mailing address, and where you got the SHAREWARE MARKETING & 
        MANAGEMENT SYSTEM program you will be registered with us thereby 
        enabling you to receive the current version, announcements of 
        possible later releases.  Also, please feel free to contribute 
        your ideas regarding desired additional product features and
        functionality.


        THIS PRODUCT IS LICENSED WITHOUT ANY WARRANTY OF MERCHANTABILITY,
        FITNESS OF PARTICULAR PURPOSE, PERFORMANCE, OR OTHERWISE; ALL
        WARRANTIES ARE DISCLAIMED. BY USING THE SHAREWARE MARKETING & 
        MANAGEMENT SYSTEM PRODUCT, YOU AGREE THAT NEITHER ADVANCED DATA 
        SOLUTIONS NOR ANY OF OUR EMPLOYEES, AFFILIATES, OWNERS, OR OTHER 
        RELATED PARTIES WILL BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY 
        USE OF (OR INABILITY TO USE) THIS SOFTWARE, OR FOR ANY DAMAGES 
        WHATSOEVER. EVEN IF WE ARE APPRISED OF POSSIBLITY OF SUCH DAMAGES 
        OCCURING.


                    ---------------------------------------
                    SHAREWARE MARKETING & MANAGEMENT SYSTEM 
                           Registration Payment Form
                    ---------------------------------------

        To register SHAREWARE MARKETING & MANAGEMENT SYSTEM (SMMS), please 
        fill out the form below. 

                                                      Date: _____________

        Name: ___________________________________________________________

        Address: ________________________________________________________

        City: ___________________________________________________________

        State/Country: ________________________ Zip: ____________________


        Method of payment: Please complete the worksheet below. Virginia
        State residents must add sales tax. ALL CHECKS AND MONEY ORDERS
        MUST BE DRAWN ON U.S. ACCOUNTS ONLY.


        +----------+------------------------------+----------+----------+
        |          |                              |   Cost   |   Total  |
        | Quantity |          Description         | per unit |   Cost   |
        +==========+==============================+==========+==========+
        |          |                              |          |          |
        |          |  SMMS Software Package       |  $40.00  |          |
        |          |                              |          |          |
        +==========+==============================+==========+==========+
        |                                                    |          |
        | Virginia Residents, please add $1.80 sales tax     |          |
        |                                                    |          |
        +----------------------------------------------------+==========+
                                                             |          |
                                                      TOTAL  |          |
                                                             |          |
                                                             +==========+
        *****************************************************************
        Send to:               Advanced Data Solutions
                               15 Springcrest Drive
                               Luray, Va 22835 USA
        *****************************************************************



                                 --------------
                                  COMMENT FORM
                                 --------------

        Your comments about this software and documentation are welcome.
        Please take the time to fill out this form or write us with your
        comments.

        Name: __________________________________________________________

        Address: _______________________________________________________

        ________________________________________________________________

        City: __________________________________________________________

        State/Country: ________________________ Zip: ___________________

        SMMS Version Number: _________________  Date: __________________


        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        *****************************************************************
        Send to:               Advanced Data Solutions
                               15 Springcrest Drive
                               Luray, Va 22835 USA
        *****************************************************************
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
             Shareware Marketing & Management System


     Introduction                                               2

     SMMS Requirement                                           2

     To Install SMMS                                            2

     Starting SMMS for the First Time                           3

     Using Menus                                                3

     HELP                                                       4

     Add Data                                                   4
               1.  Registration of Users                        5
               2.  New/Add Distributors                         5
               3.  Program History Changes                      5

     Edit/Change                                                5
               1.  Registered Users                             5
               2.  Distributors                                 6

     Marketing Activity                                         6
               1.  Sending Program to Distributor               7
               2.  Labels                                       8
               3.  Announce New Upgrade                         8

     Reports                                                    8
               1.  Program Summary & Tax Report                 9
               2.  Annual Program Summary                       9
               3.  Distributor List                             9
               4.  Marketing Summary                            9
               5.  Program History                              9

     File Maintenance                                           9
               1.  Indexing                                     9
               2.  Backup/Restore Datafiles                    10
               3.  Write New Defaults                          10

 
           SHAREWARE MARKETING AND MANAGMENT SYSTEM
                             SMMS


     Introduction

     Shareware Marketing and Management System (SMMS) is a system to
     help shareware programmers organize the marketing and management 
     of their shareware programs.  SMMS contains databases for keeping 
     everything they need to know about their registered users and
     distributors.  SMMS provides marketing features, reports, form 
     letters, labels and much more.


     SMMS Requirement

     SMMS can be installed on any IBM compatible computer with:
       MS-DOS or PC-DOS, 2.0 or greater
       A 5.25" or 3.5" floppy disk drive
       A hard disk of any size
       640K RAM memory
       A printer capable of printing 132 columns of compressed print.



     To Install SMMS

     1.  Create a separate directory on your hard disk to hold the
     SMMS program and data files.  This directory should be named
     "SMMS".  This directory is created by typing at a DOS prompt:
 
      C:>  MD/SMMS  + Enter Key
      ---  -------
       |     |
       |      ->   Type this
       |
        ------->   DOS prompt

     2.  Once this has been done, make this your default directory. 
     This is done by typing at a DOS prompt:

      C:>  CD/SMMS   + Enter Key

     3.  Copy all files from the program disk to this directory. 
     Place program disk in your floppy drive (normally Drive A:).

      C:>  COPY  A:*.*  + Enter Key

     4.  A number of files will be copied.  Once they have been
     copied you are ready to start SMMS.


                                 2


     Starting SMMS for the First Time

     You should always start SMMS from within the SMMS directory.  This
     directory contains the data files, help files and indexes which are
     needed by SMMS.  Starting anywhere other than in the SMMS directory
     will not enable SMMS to locate the files it needs.

     Start SMMS at a DOS prompt by typing:

      C:>  SMMS   + Enter Key

     The first time SMMS is started, several things will occur.  First,
     a setup screen will appear.  This screen will ask you to enter the
     following:

     Name/Company.   - self explanatory  -+
     Street Address. - self explanatory   |  These, will
     City.           - self explanatory   |  appear on reports,
     State.          - self explanatory   |  labels, etc.
     Zip.            - self explanatory  -+  
     Compressed Print Code    - Check printer manual for this code
     Cancel Compressed Print  -   "     "        "    "    "    "
     Bold On Code             -   "     "        "    "    "    "
     Bold Off Code            -   "     "        "    "    "    "
     Double High On Code      -   "     "        "    "    "    "
     Double High Off Code     -   "     "        "    "    "    "
     Default Drive (where backup floppy will be)- USUALLY 'A'
     Label 1, 2, or 3 wide                      - SEE LABELS

     As an example the printer defaults codes for Epson are:
               Compressed Print          - CHR(15)   
               Cancel Compressed Print   - CHR(18)
               Bold On                   - CHR(27)+"E"
               Bold Off                  - CHR(27)+"F"
               Double High On            - CHR(27)+CHR(119)+CHR(1)
               Double High Off           - CHR(27)+CHR(119)+CHR(0)

     These defaults may be changed at any time by selecting the menu
     option - Write New Defaults.



     Using Menus

     All menus in SMMS may be activated by either of two methods.  The
     simplest and quickest is to press the key which corresponds to the
     first letter of the menu option.  Pressing C would activate the
     menu option entitled "Change Registered User".  The wording of all
     menu options has been arranged to take advantage of this method. 
     The second method is to use the up and down arrows to highlight the
     options.  When the desired option is highlighted press the enter
     key to activate it.  When highlighting the menu options a message
     describing each option is displayed at the bottom of the screen.  


                                   3
     The following is SMMS's Main Menu when first activated and with
     the Registration of Users highlighted.
  
     +----------------------------------------------------------------+
     |           SHAREWARE MARKETING AND MANAGEMENT SYSTEM            |
     +----------------------------------------------------------------+
     |  +-------------------------+  +-----------------------------+  |
     |  |        ADD DATA         |  |       EDIT / CHANGE         |  |
     |  |Registration of Users    |  |Change Registered user       |  |
     |  |New/Add Distributor      |  |Edit Distributors            |  |
     |  |History-Program Changes  |  |Update Distrib. Responses    |  |
     |  |                         |  |                             |  |
     |  |   MARKETING ACTIVITY    |  |         REPORTS             |  |
     |  |Send Program to Distr.   |  |Tax Summary                  |  |
     |  |Labels                   |  |Program (Annual) Summary     |  |
     |  |Announce New Upgrade     |  |Distributor List             |  |
     |  |                         |  |Marketing Summary            |  |
     |  |   FILE MAINTENANCE      |  |Version Change Summary       |  |
     |  |Indexing Datafiles       |  |                             |  |
     |  |Backup/Restore Datafiles |  |                             |  |
     |  |Write New Defaults       |  |Quit                         |  |
     |  +-------------------------+  +-----------------------------+  |
     |      Register Users who have paid you a registration fee       |
     +----------------------------------------------------------------+
        F1 HELP



     HELP

     A message "F1 HELP" is display on the very bottom of most screens.  
     This reminds you that a on-line HELP (F1) is available for the 
     displayed screen.  Pressing F1 at any point in SMMS and will cause 
     a window with a brief Help message to appear.  This Help message 
     provides instructions about what you should do at the cursors 
     location.  Once the Help message has been read you must either 
     press a key (if the entire Help message is visible) or press ESC 
     if the message is larger than the popup window.



     Add Data

     The first three menu options contain the data entry screens. 
     Select the first option to register users who have sent you the
     registration fee for your program.  The second option (New/Add
     Distributors) adds commercial disk vendors and other distributors
     you have identified and sent your program.  These distributors can 
     be found in magazines like Shareware, Home Office Computing, and 
     address managers such as $hareware Marketing $ystem found in 
     shareware catalogs.  The third option, (History - Program
     Changes) allows you to maintain a history of the changes made to
     your programs.

                                   4


     All three data entry screens are, for the most part, self
     explanatory - name, address, etc.  The following are a couple of
     clarifications.

     1.  Registration of Users.  
 
     My Program.  This is a 8-character name for your program.  Normally
     this would be the filename of the executable file which activates
     your program.  If you choose not to use the filename be sure to be
     consistent throughout SMMS with what ever you decide to use.
 
     Distributor.  Enter the distributor code (see below) which identifies
     the distributor where this person obtained the program.  This may not 
     be known.  To obtain this include a spot for the user to complete on 
     your registration form.  The distributor may be identified by a
     specific serial number or other mechanism.  Pressing F10 will display 
     a list of distributors you have entered in your database.


     2.  New/Add Distributors.  

     Distributor Code.  A code for each distributor reduces the database
     storage and makes for easy access without having to type the entire
     name each time.  It is recommended you use the first three or four
     characters of the name and the remainder from the next word in the
     name.  SMMS will check and let you know if the code is already in
     use.

     Type Distributor.  Four types of distributors are monitored by SMMS 
     - Distributor (commercial disk vendors), BBS, Club (organizations) 
     and Magazines.

     Selection Category.  If you want to identify the specialization of
     the distributor - press F10 for specializations or add another. 
     Some distributors specialize in areas you may want to take
     advantage of.


     3.  Program History Changes.

     Version.  SMMS automatically enters the next number.  You may
     override this if you want.
 
     Changes.  This is a memo field which contains the information about
     the program changes.  Press F1 for list of cursor movement keys.



     Edit/Change

     There always seems to be some reason to change the data previously
     entered - you misspelled the name or address, someone changes their
     address, etc.  These first two items permit you to change the 
     registration and distributor data previously entered.  The last 
     option is to update the marketing file which was created in the 
     marketing activity section.  See (Send Program to Distr[ibutor]).  

                                   5

     1.  Registered Users.

     You may edit registered users by three different ways.  First is by
     name - last and then first.  The name has to be entered exactly the
     same way it was previously entered.  Since you may forgotten how it 
     was entered select the second option, alphabetical.  Using this option
     enter only the first letter of the last name.  All persons with last
     names beginning with the same first letter can be displayed.  A edit 
     menu will be displayed below the first.

        +----------------------------------------------------+
        |  (E)dit   (D)elete   (N)ext   (P)rior   (Q)uit     |
        +----------------------------------------------------+

     Press N until the person you want to edit is displayed then press
     E.  The edit screen is the same as the data entry screen.

    NOTE:  This edit option may be used as a quick check, during
    telephone support calls, to see if person is registered.  The third 
    option is to enter the serial number of the program the person 
    registered.  If previously entered this will locate the person.  
    If you have more than one program you should make your serial numbers 
    distinguish between your programs.

    2.  Distributors.

    You may edit distributors by three different ways.  First is by the 
    distributors name.  The name has to be entered exactly the same way 
    it was previously entered.  Since you may forgotten how it was entered 
    select the second (Distributor Code) or third option, (Alphabetical).  
    The second option is to enter the 6-character distributor code if known.  
    Using the alphabetical option, enter only the first letter of the 
    distributors name.  All distributors whose name begins with this letter 
    will be displayed in alphabetical order.   A edit menu (described above) 
    will be displayed below the record of each distributor.  

    3.  Distributor Response.

    When sending new program to distributor (see marketing below) a 
    marketing datafile is developed to contain the date sent, the 
    distributor code for company sent to, the name of the program and 
    it's version.  When your receive the distributors response, select 
    this option to update that file.  Enter the distributor code or name, 
    your program name and version number.  At the Record Response from 
    Distributor screen confirm the date and type of response.  A list of 
    responses can be seen by pressing F10.
  

    Marketing Activity
  
    To be a successful shareware author you must market your programs. 
    The first menu option in this group (Send Program Changes) should be 
    used when you send distributors a new program or release a new version 
    of an existing program.  This option will print a letter and labels.  

                                   6

    The second option permits the printing of labels.  And the last is an
    announcement to registered users that you have a new upgrade or
    version available.  This will also print a letter and labels.
 
    1.  Sending Program to Distributor.

    The program is finished and ready for distribution.  Select this
    option and enter the program name, version and select what type of
    distributor to send the program to - All, Clubs only, BBS only,
    Commercial Distributors only.  SMMS creates a temporary file with
    this information.  Now decide if you want to send a letter, labels
    only or both.  If a letter is being sent you will see the following menu:


          ====Create====Edit====Delete====Print====Return=====


    Create.  This allows you to develop a new form letter/press
    release.  The created document can contain several variables from
    the distributor database that makes the letter personalized - name, 
    address, program name, version, etc.  First give the letter a name 
    and enter its description.  The actual creation screen is displayed
    below with an actual letter being created:

                           CREATING FORM LETTERS
+--------------------------------------------------------------------------+
|Ctrl-PgUp- Top of Letter     Ctrl-Y-Delete line  Ctrl-left - 1 word left  |
|Ctrl-PgDn- Bottom of Letter  Ctrl-T-Delete word  Ctrl-right - 1 word right|
+--------------------------------------------------------------------------+
  |                       ADVANCED DATA SOLUTIONS                       |
  |                         15 Springcrest Drive                        |
  |                           LURAY  VA  22835                          |
  |                                               +----------------+    |   
  |                             June 27, 1992     |COMPANY         |    |
  |                                               |COMP_CODE       |    |
  |  &V_COMPANY                                   |STREET          |    |
  |  &v_STREET                                    |CITY            |    |
  |  &V_CITY &V_STATE &V_ZIP                      |STATE           |    |
  |                                               |TYPE_DIST       |    |
  |  Dear Sir/Madam:                              |LASTNAME        |    |
  |                                               |FIRSTNAME       |    |
  |  We are pleased to announce                   |POSITION        |    |
  +---------------------------------------------------------------------+
     F9 = Save    F10 = Choose Field          Line: 15  Column: 42

    The first box at the top contains the cursor movement keys.  Others
    can be seen by pressing F1.

    The small box on the right contains the fields within the
    Distributor datafile.  This box appears if F10 is pressed.  The
    cursor is controlled by the up and down arrow keys.  To enter a
    variable highlight it and press the enter key.  The chosen field
    appears as &V_COMPANY if the Company field was selected.  Note the
    inside address already created here.  A separate letter will be
    printed for each distributor, each with their own address.

                                   7

    After the letter is created press F9 to save and exit.  If you
    don't want to save this letter press ESC.
  
    NOTE:  For some unknown reason anything entered in the first four
    spaces of the first line will not be printed.  Center the first
    line using TAB key.  Check the letter before printing with the EDIT
    function to see if the heading is centered.
 
    Edit.  Selecting this option allows you to edit previously entered
    letters.  Select the name and make the changes using the same
    cursor keys and suggestions above.  Press F9 to save and exit.

    Delete.  This option will display a list of letters.  Highlight the
    one you want to delete and press the enter key.  SMMS asks you to
    confirm the deletion.

    Print.  Be sure your printer is on.  This option lists the letters
    available to print.  Highlight the desired letter and press the
    enter key.  A letter for each distributor will be printed.  When
    finished printing change your printer to print labels (if you choose 
    label and letter) and the labels will print.  See labels below for 
    more information about them.  



    2.  Labels

    You may use three different types of labels:

               One label across    - 3 1/2" x 15/16"
               Two labels across   - 3 1/2" x 15/16"
               Three labels across - 2 1/2" x 15/16"

    When printing labels be sure your printer is on and the labels 
    aligned.  SMMS will print two lines of test labels to be sure your 
    labels are aligned.  The printer will pause while you readjust them
    if necessary.  After adjusting them press any key to have the labels
    printed.

    3.  Announce New Upgrade.

    This is very similar to the first Marketing Activity option except
    that it will create letters to registered users.  The screen and
    cursor movements are the same as the Send Program to Distr option.
    The F10 list will display fields in the registration database.
 


    Reports

    Five reports can be printed by SMMS.  Be sure your printer is on
    before selecting this option.  SMMS will check your printer and
    notify you if it is not ready.

                                   8

    1.  Program Summary & Tax Report.

    This report first prompts you for a beginning and ending date.  All
    data from the beginning date and through the ending date will be
    included in the report.  A registration summary is first printed - 
    the program name, number registered, tax collected, registration 
    fee collected and total collected.  A grand total line is printed.  
    This can help with annual or monthly tax reports.  A marketing summary 
    is printed below with a summary by program how many distributors have 
    received the program.

    2.  Annual Program Summary

    This report summarizes, by the month, the number sold and revenue
    received for each of your programs.

    3.  Distributor List

    This option prints a list with the distributor code, company name, 
    address and telephone both regular and fax.

    4.  Marketing Summary

    This summarizes the types of response received from distributors.  
    This list may influence you to delete certain distributors in the future
    or to concentrate on certain few.

    5.  Program History

    This report prints the program changes as entered in the History-
    Program Changes.

 

    File Maintenance

    This section of the main menu provides some helpful options.
 
    1.  Indexing

    There may be times when you are wanting to edit a specific item,
    however something different is displayed than what you expected. 
    Or you get a message that the item was not found when you are
    positive it has been entered.  Or you print a report but only a few
    items are printed.  Or the report is completely blank except for
    the headings.  In these incidents the index may have become
    corrupted.  Should this occur you should reindex the files.  The
    indexing option of the File Maintenance menu has several options. 
    You can index All Datafiles at one time or you can select the
    particular datafile you are having problems with.  If this doesn't
    correct your problem the actual data may have become corrupt.  See
    Backup and Restore sections immediately following.

                                  9

    2.  Backup / Restore Datafiles

    It is highly recommended that you backup your data files on a
    regular basis.  You should backup data after every data entry
    session.  If the situations explained above in the indexing files
    section occurs and the reindexing doesn't correct your problem it
    is quite possible that the data itself has become corrupted.  You
    are saved from having to reenter your entire data file if you have
    a backup file. 

    Highlight Backup and press the Enter key.  Be sure you have your
    Backup Disk in your default (primary) drive.  SMMS will prompt you
    to place your disk in the drive.  A message will be displayed
    indicating that the backup is taking place.

    Restoring data is just the opposite of backing up your data. 
    Restore takes data from your backup disk and restores in on your
    hard drive in the SMMS directory.  You can select a particular data
    file to restore or can restore all datafiles.

    3.  Write New Defaults

    As described in starting SMMS for the first time, you can change
    the defaults entered at installation.  The same screen that
    appeared then will appear with existing defaults.  Edit this screen
    as normal.



    While most of this program and manual are self explanatory, should
    you have questions or need additional support call Advanced Data
    Solutions at (703) 743-4910 for support.  Advanced Data Solutions
    is available to customize SMMS to meet your needs.

                                                  Advanced Data Solutions
                                                  15 Springcrest Drive
                                                  Luray, Va. 22835
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
                     SHAREWARE MARKETING & MANAGEMENT SYSTEM

                       V E N D O R    I N F O R M A T I O N
                       ------------------------------------

     This file provides information for Shareware Distributors, Disk 
     Vendors, BBS SYSOPs and Computer Clubs who wish to distribute 
     SHAREWARE MARKETING & MANAGEMENT SYSTEM application program.

     Program Name:     Shareware Marketing & Management System, 
                       Version 1.0

     Program Category: Business, Home Business, Applications

     System Requirements: IBM compatible computer with hard drive and 
                          printer

     Short Description:     

      A must for Shareware programmers!  This application does everything 
      to market and manage your program.  Maintains information about the 
      registrations received, distributors who received your program, and 
      program changes.  Prepare form letter/press release and mailing labels 
      to accompany release to distributors or upgrades to license holders.  
      Prints summary (sales tax collected), annual sales summary, list
      distributors, marketing summary and program history.  This and 
      much more!

     Long Description:

      A major, full-featured marketing and management system for all 
      Shareware programmers.  SMMS does everything - maintain adequate 
      records of those persons registering your program, distributors you 
      sent the program to along with their response, and history of all 
      changes to the program.  Features include beside the databases, the 
      ability to create form letters or press releases to accompany your 
      disk to distributors or to announce a new upgrade to previous license 
      holders.  It prints mailing labels to distributors or license holders.  
      It prints return address labels and labels for marking your program 
      diskettes.  SMMS records the response from distributors for future
      reference in submitting future releases.  

      SMMS prints five different reports.  A report covering a designated 
      period (month, year) and tabulates income received and sales tax 
      collected.  A annual program summary recording number sold, revenue 
      received for each program marketed.  Other reports include a market 
      summary, list of distributors and a program history.

      It is menu driven and very easy to use.  It includes a on-line HELP 
      and manual on the disk.  Uses dBaseIII compatible files.

     Registration Information:

      The shareware registration fee is $40.00.  The registration fee 
      entitles the registrant to receive the most recent version of SMMS, 
      manual, telephone support, and notices of future upgrades.

     Recommended BBS Name:   SMMS

     BBS Description: Shareware Writers marketing & management system

     Author-Publisher Information:  Larry L. Hakel, Advanced Data Solutions,
     15 Springcrest Drive, Luray, VA 22835,   (703) 743-4910

     For complete user registration information please refer to the 
     LICENSE.DOC text file.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3464

     Volume in drive A has no label
     Directory of A:\

    READ     ME        962   6-28-92   8:03p
    SMMS     ZIP    164294   7-09-92   1:14p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       BAT        33   4-13-93  11:05a
    SHOW     EXE      2040   9-12-88  10:48a
            5 file(s)     190857 bytes
                          130048 bytes free
