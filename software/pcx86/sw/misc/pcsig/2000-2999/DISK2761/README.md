---
layout: page
title: "PC-SIG Diskette Library (Disk #2761)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2761/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2761"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2761.TXT

{% raw %}
```
Disk No: 2761                                                           
Disk Title: Papers                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Papers                                                   
Author Version: 2.02A                                                   
Author Registration: $60.00                                             
Special Requirements: 380K RAM. A hard drive and DOS 3.2 recommended.   
                                                                        
PAPERS is a custom database for scientific literature intended for      
librarians, scientists, and graduate students.  It has fields for       
author(s), title, journal (book), year, volume, pages, keywords (6), and
notes (64K).  The speedy text editor and search function work smoothly. 
Files can be sorted, merged, and are dBASE-compatible.                  
                                                                        
Other handy features include a DOS shell, storage in MedLine or ASCII   
formats, and a database size limited only by the available memory.      
PAPERS is intended for librarians, scientists, and graduate students.   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PAPERS.DOC

{% raw %}
```
















                            P A P E R S   version 2.02a

                      A Scientific Literature Database System

                          (C) 1990 by Tadeusz Skarzynski


























                                  - 2 -

                                
 PAPERS is a simple to use yet powerful scientific literature database
 system. The program is menu driven and as such is reasonably self
 explanatory. It is meant for IBM PC and compatibles and uses industry
 standard dBASE format files for storing reference data.

 ___________________________________________________________________________

 MAIN FEATURES OF THE PROGRAM:


        - Stores details of publications: authors, title, journal
          (book), year, volume, pages, keywords (6), notes (up to 64k
          characters);

        - Built in text editor for notes;

        - Records may be marked for quick access;

        - Search may be done on any combination of up to 11 fields:
          title, authors list, journal name, year, 6 keywords and mark;

        - Any fragment of title, authors list, journal name and keyword
          may be used in search;

        - Quick search using the first author's name, record number or mark;

        - A list of selected references and related notes, can be printed
          or directed to a file in a form suitable for word processors;

        - The references can be formatted using most common journal formats;

        - Lists of references stored in other formats (Current Contents on 
          Diskette, MedLine, ASCII files) may be imported to the database;

        - Two or more databases may be merged, new databases may be created
          from marked records;

        - An alphabetical list of all keywords may be produced;

        - DOS shell for leaving the program temporarily;

        - No limit on number of entries;

        - Files created by PAPERS may be used by dBASE and other
          dBASE compatible programs.

                                  - 3 -

 ___________________________________________________________________________

 HARDWARE REQUIREMENTS


     - An IBM PC compatible microcomputer with at least 380 KB of
       user memory;

     - A hard disk is recommended for speed and for larger files
       but the program can be run with floppy disk(s). For large databases,
       an AT or 80386 class machine with a quick-access hard disk would
       do the program justice.


 ___________________________________________________________________________

 INSTALLATION OF THE PROGRAM


     PAPERS is designed to work with version 2.0 (or higher) of DOS but
     we recommend that you use DOS 3.2 or higher.

     To install the program create a directory where the database will 
     be kept and copy PAPERS.EXE there. Keep the original program disk 
     as a backup copy. When the program is used for the first time, 
     it will create all the files it needs. 
     Make sure your CONFIG.SYS file contains the FILES=20 command.

 ___________________________________________________________________________

 FILES USED BY THE PROGRAM


     There are two main database files called "filename".DBF and 
     "filename".DBT (default "filename" is PAPERS) which contain all 
     bibliographic entries and notes corresponding to the entries. 
     These files are maintained completely by PAPERS. You should never try
     to modify them using any other program!

     * Make backup copies of these files from time to time for safety *
 
     If any of the other files used by PAPERS is missing it will be created
     again by the program.

     DEFAULT.PAR is a small file which stores information on the name and 
     location of the most recently used database and the display mode selected
     (colour or black and white). If you decide to change the display mode, 
     delete DEFAULT.PAR before starting PAPERS. 
     Files which names end with .NDX are index files that are used for
     quick access to references and for sorting the references alphabetically
     or according to a year of publication.

     There are also a few temporary files created by the program:
     KEY{}.TMP, KEY2{}.TMP, KEY{}.NDX, TEMP{}.TMP and DBASE{}.TMP which are
     normally deleted when you exit from PAPERS.
      

                                  - 4 -

 ___________________________________________________________________________

 STARTING PAPERS


     Type PAPERS and after the opening copyright message has been
     displayed confirm or change the default choice of the display
     mode. The program detects presence of a colour graphics card
     (eg. CGA, EGA) but some machines with monochrome monitors also
     use these cards and in such cases the colour scheme used by the
     program would provide less than readable results. An option to
     change the default setting has been included to avoid this.

     The selected display mode will be recorded in the DEFAULT.PAR
     file and will be used automatically when you run PAPERS next time.
     If you decide to change the mode, delete the DEFAULT.PAR file. 

     When the program is run for the first time it will display
     a message about missing files and a menu will be presented, from
     which the default option "New database" should be selected.
     After a while the main menu is displayed.


 ___________________________________________________________________________

 MAIN MENU OPTIONS

     To make a choice from all program menus, move the light bar
     to a desired command using "up" or "down" cursor keys and press
     Enter. Alternatively, type the first letter of the command name.



     _______________________________________________________________________

     1. ADD RECORDS.

     Selecting this will display the record layout with empty fields.
     Just fill in the fields you want to store. Press Enter after completing
     the field.  Use "up" and "down" cursor keys to move from one field 
     to another. 
     
     Include the title or at least a reasonable set of keywords. Databases
     containing just authors and journal information are not very useful in
     the long term. 
 
     Change the default value of "N" (no) in the NOTES field to "Y" (yes) 
     if you intend to add notes to the record at this stage. If you want to
     mark the current record replace "N" with "Y" in the MARK field.
 
     Press PgDn (or Ctrl/W) to store the entry in the database. Press Esc to
     return to the main menu.



                                  - 5 -

     _______________________________________________________________________

     2. FIND/EDIT/DELETE RECORDS.

     This is the section of the program which allows the database to
     be searched and edited as required. Notes can be added and references
     marked or existing marks removed.

     First, the template screen is presented that will be used
     as a search pattern. All records matching this pattern will be
     selected and displayed. Fill in only the fields you want to use in
     the search. Fragments of the title, authors list, journal name and
     keywords may be used to create the search pattern.

     At any time when the template is displayed on the screen you may use
     the "up" and "down" cursor keys to move between the fields and edit
     them. Type PgDn (or Ctrl/W) when the template is ready.
     If you leave all the fields empty, all records will be displayed.

     The search logic has to be chosen next (default ALL will select entries
     that satisfy all criteria at the same time), and a new menu is
     produced, from which a sort option must be selected. The default
     "Original order" is usually the best choice here.

     The database is searched and records that match the template are
     displayed. You can manipulate records using one of the commands
     from the menu at the bottom of the screen. As for all menus
     use "up" and "down" (or "left", "right") cursor keys to move from one
     option to another and press Enter or simply type the first letter of
     the command.

      -  FORWARD begins search for the next bibliographic entry matching 
         the template; 

      -  BACK does it in the opposite direction; 

      -  EDIT allows you to change contents of the record;

      -  DELETE marks the record as deleted - to remove it from the
         database completely you have to pack the database using OPTIONS, 
         but do not do it after every deletion - it takes time to complete
         packing;

      -  NOTES opens a window where you can write notes relevant to
         the record (notes can be very long - up to 64k characters) using
         the built in text editor; 
         PAPERS detects if there are any notes in the record and marks
         their presence by "NOTES" displayed below the keywords. To
         remove the notes delete their contents.
         Be sure the editor is in the 'insert' mode when you insert new 
         lines of text in the notes window.

      -  MARK marks the current record;

      -  UNMARK removes the existing mark;

      -  QUIT takes you back to the main menu (Esc does the same).


                                  - 6 -

     The standard keyboard editing keys are used in EDIT and NOTES,
     some other editing commands are displayed at the bottom line.
     A list of cursor movement and editing keys in NOTES is presented
     below.


     The cursor movement and editing keys for NOTES:


     up-arrow         or Ctrl/E    move up
     down-arrow       or Ctrl/X    move down
     left-arrow       or Ctrl/S    move left
     right-arrow      or Ctrl/D    move right
     Ctrl/left-arrow  or Ctrl/A    one word left
     Ctrl/right-arrow or Ctrl/F    one word right

     Home                 beginning of line
     End                  end of line
     Ctrl/Home            top of window
     Ctrl/End             bottom of window
     PgUp                 up one window
     PgDn                 down one window
     Ctrl/PgUp            top of notes
     Ctrl/PgDn            bottom of notes

     Ctrl/Y               delete line
     Ctrl/T               delete word
     Ctrl/B               reformat paragraph
     Ctrl/W               save and exit
     Esc                  exit without saving



     _______________________________________________________________________

     3. QUICK SEARCH

     Selecting this opens a new menu from which the following options 
     may be selected:

      - FIRST AUTHOR does a quick search using the first author's
        name or a fragment of it. 

      - RECORD NUMBER allows access to a record using its serial number.

      - MARKED does a quick search of all marked records.

      - QUIT takes you back to the main menu.


                                  - 7 -

     _______________________________________________________________________

     4. LIST OF REFERENCES


     This produces a list of references that match the search pattern.

     The template screen, similar to that in FIND/EDIT/DELETE,
     must be filled in first. If you leave all the fields empty, all
     references stored in the current database will be listed. 
     Next, you have to select options you want to use in search: search 
     logic, fields you want to output, printing, writing to a file (for 
     word processing). You may also select an option to mark all the records
     matching the template.
 
     Select one of the formatting options from the FORMAT MENU and select
     a sort method from the SORT MENU. Following this, enter parameters for 
     printing if the "to printer" option is in operation. Also, give a file
     name for an ASCII file if the "to file" option has been selected.

     A list of references corresponding to the template will be shown on 
     the screen and will be printed and/or directed to a file
     as required. Press Esc if you want to stop the procedure.



     _______________________________________________________________________

     5. KEYWORDS


     This command produces an alphabetical list of all keywords
     in the database. The list may be displayed on the screen or printed.
     It may be also directed to an ASCII file on a disk for future use.

     

     _______________________________________________________________________

     6. IMPORT RECORDS


     This produces a new menu with the following options:

      - DATABASE transfers the contents of another database created
        with PAPERS to the current database. 

      - CURRENT CONTENTS ON DISKETTE imports a list of references saved
        in a "Pro-Cite" format file by the CCoD program.

      - ASCII FILE imports an existing list of references stored in an ASCII
        file on a disk.          
        The file has to be edited a little, so that PAPERS can read it. 
        Each field (authors, title, year... etc.) must be delimited with 
        \ (backslash) and each record must end with # (hash).
        e.g.

                                  - 8 -


           Watson, J.D. and Crick, F.H.C.\ (1953)\
           A structure for deoxyribose nucleic acid.\
           Nature\ 183,\ 647-656.#


        All fields in the records must be in the same order and each 
        record should contain the same number of fields. Use \\ for
        missing fields.
        e.g. (if the title was missing in the above reference)

           Watson, J.D. and Crick, F.H.C.\ (1953)\\
           Nature\ 183,\ 647-656.#

        If your ASCII file is ready, you enter its name and, after the
        program has checked that the file exists, you specify which fields
        are present in the file and what is their order in each record
        by filling in a small table. Press PgDn (or Ctrl/W) to begin the
        transfer.
        All leading and trailing spaces, commas at the end of the fields,
        dots and commas at the beginning of the fields, line feeds and other
        control characters will be ignored.

        Do a few experiments in a temporary directory if you are not sure
        your ASCII file is suitably prepared.

      - MEDLINE imports the contents of a MedLine format file. Some MedLine
        type files do not contain separate fields for YEAR, VOLUME and PAGES.
        In this case all the relevant details will be stored in the JOURNAL
        (BOOK) field. You may edit the records later if necessary.

     You must supply appropriate file names for all the above options.
     Please note that ASCII FILE and MEDLINE procedures are much slower 
     than the first two.        


     _______________________________________________________________________

     7. NEW DATABASE


     This command will copy all marked records to a new database. 
     You have to provide a name for the new database, including
     full pathway if you want to create it in a directory other than
     current.

     The index files will not be created at this stage. PAPERS will make
     them when you use the newly created database for the first time.
     Use UTILITIES option to switch to the new database. 



                                  - 9 -

     _______________________________________________________________________

     8. UTILITIES

     The UTILITIES command opens a new menu and allows you to perform 
     the following:

      - CHANGE DATABASE closes currently used database files and asks 
        you for a name of a different database. If the name is valid 
        and the required database exists it becomes the current database.   
        The information panel at the bottom of the UTILITIES menu 
        displays the name of the current database, date of its most 
        recent modifications and number of entries.

      - NEW PATH enables you to access database files stored in a 
        different directory. 

      - DIRECTORY displays names of all databases stored in a current 
        directory. It may be used in conjunction with the NEW PATH 
        command to check which databases are present in a given 
        directory.
      
        Only the main database files (which names end with .DBF) are
        listed here along with the number of records and the date of 
        their last modification. The number of records displayed here is
        equal to the number of references plus one because there is always
        an empty record at the end of each database file.

      - UNMARK ENTRIES removes all marks from the database records.

      - PACK DATABASE removes all records marked as "deleted" and creates
        new index files.          
      
        Also, use this utility when the index files get corrupted for
        some reason (e.g. system crash or "disk full" error).

        When you delete records from the database using FIND/EDIT/DELETE, 
        the records are only marked as "deleted" but physically still exist
        in the database files. To remove these records completely and to
        release disk space occupied by them one has to "pack" the database.
        Do it after deleting a group of references to reduce the size of
        your database.

      - VERSION 2 updates the files created by versions of PAPERS
        earlier than 2.0. All commands involving marked records can be
        used only with the databases created with the version 2.0
        or later.

        There must be enough disk space to accommodate new versions of 
        the "filename.DBF" and "filename.DBT" files. PAPERS checks the
        disk space and asks you to enter a new database name.

                                  - 10 -

     _______________________________________________________________________
  
     9. SYSTEM


     This allows you to leave PAPERS temporarily and perform other
     DOS tasks like copying files, checking directories, etc.
     Note however, that the amount of available RAM memory is reduced
     and one should not install any memory resident programs from the
     DOS shell (eg. do not initiate PRINT).

     Some - earlier than 3.0 - versions of DOS do not allow use of DOS
     SHELL - the program will simply go back to the main menu. The same
     effect (return to the main menu) or the error message "cannot complete
     the operation" may be produced if there is not enough memory to load
     COMMAND.COM. Error "cannot find COMMAND.COM" indicates that PAPERS
     cannot find COMMAND.COM in the root directory (Drive A on floppy disk
     systems) or in the directory indicated by the SET COMSPEC (or SHELL)
     command of DOS (see DOS manual).


     _______________________________________________________________________

     10. EXIT

     You can use the Esc key to break almost any PAPERS operation and go
     back to the main menu, but the only legitimate way of getting out of
     the main menu is to use EXIT (just type E when the main menu is on
     the screen). This ensures that the database files are closed properly.
     
     Never switch off the computer when the program is running !



















                                  - 11 -

 ___________________________________________________________________________

 DISTRIBUTION INFORMATION


     PAPERS is distributed as shareware, which means you can try it
     out before you decide whether you would like to keep it.  Like all
     shareware, if you decide to keep PAPERS, you must pay a registration
     fee. This method of distribution allows you to determine whether
     PAPERS meets your needs before you pay for it.

     The registration fee is 30 UK pounds (60 US dollars) and should be
     sent to:

        DBF SYSTEMS
        10 Oakwood Crescent
        Greenford
        Middlesex UB6 0RQ
        England

     Make cheques or postal orders payable to: DBF SYSTEMS.

     In return, you will be sent the latest, registered version of PAPERS
     (specify the disk size required), we will put you on the mailing list
     for future upgrades and your questions and comments will be answered.

     You may copy PAPERS for backup purposes, and you may give copies of
     the UNREGISTERED version to others, which they may also use and copy.
     You may not give, sell, or otherwise transfer copies of the registered
     version of PAPERS to any other person. However, you may transfer
     ownership of your registered copy to another person, provided that
     when you do so, you stop using PAPERS and remove it from your computer,
     and notify us of the new owner.

 




                                   
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2761

     Volume in drive A has no label
     Directory of A:\

    PAPERS   DOC     21200   2-08-91   4:46p
    PAPERS   EXE    230562   1-30-90
    PREVIEW  EXE      7347   4-18-91   1:15p
    GO       BAT       103   8-07-91  12:13a
    FILE2761 TXT      1777   8-09-91   9:16a
            5 file(s)     260989 bytes
                           58368 bytes free
