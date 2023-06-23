---
layout: page
title: "PC-SIG Diskette Library (Disk #1298)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1298/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1298"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "3X5 CARD STARTER KIT 2 OF 2 (ALSO 253)"

    This program is an information handling system that allows your computer
    to act like a very efficient 3x5 card system, thus it's name.  This
    program would be great for keeping track of small pieces of information
    such as a patient listing or small library card catalog.
    
    The 3by5 Starter Kit offers you the following features:
    
    ~ Fields - up to 10 variable length fields.
    ~ Sort records by one field.
    ~ Improved indexing for records greater that 512 bytes.
    ~ Multiple print formats for mailing labels, 3by5 cards etc.
    ~ Start-up Files that will automatically open your files and set printer
    parameters, etc.
    ~ Directory commands Change, Make, Remove and List directories.
    ~ List files on a disk from within the program along with the date and
    time last modified, and file size.
    ~ Report generator.  Print records in a user defined format.
    ~ Reference Manager.  Enter journal, book and chapter references in a
    standard format and the 3by5 Reference Manager will rearrange them
    into the style required by any journal.
    ~ Correspondence Manager.  Handles all your correspondence needs:
    writing letters, mail merge, correspondence follow-up.
    ~ Field definitions.  Specify Free-text, Line, Numeric, Date, Time, Mask
    and Person fields.
    ~ Macros.  Insert predefined text or issue commands sequences with a
    single key stoke.  Limit of ten user defined macros.
    ~ Manual on Disk.
    ~ Technical support by the author by mail only.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $69.95
    
    File Descriptions:
    
    3BY5     EXE  Main program.
    3BY5HELP 3X5  Data file.
    ADDRESS  3X5  Data file.
    ADDRESS  MAP  Data file.
    CONFIG   SYS  Configuration file used by DOS
    FORMLET  PFM  Data file.
    FORMS    IFM  Data file.
    FORMS    PFM  Data file.
    INTRO    3X5  Data file.
    JOHN     PRG  Data file.
    LETTERS  LET  Data file.
    MACRO    IAC  Data file.
    MACRO    MAC  Data file.
    NOFIELDS 3X5  Data file.
    NOFIELDS MAP  Data file.
    PROGRAMS 3X5  Data file.
    PROGRAMS MAP  Data file.
    README        Brief direction on how to print documentation
    REF      IEF  Data file.
    REF      REF  Data file.
    REFSTYLE IFS  Data file.
    REFSTYLE RFS  Data file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAP01.DOC

{% raw %}
```

















                         3by5 Programs
                          Version 5.0
                      INSTRUCTION MANUAL




                        Written for the
                    IBM PC and PS/2 Series
















                      (c) Copyright 1988
                    Softshell Corporation 
          1254 Thornbury Road, West Chester, PA 19380
                      Phone (215) 793-1431







      TABLE OF CONTENTS

      CHAPTER 1. INTRODUCTION 
                 Overview of 3by5 for the PC          1
                 3by5 Models                          3
                 Version 5.0 Update                   5

      CHAPTER 2. GETTING STARTED                      9
                 Notations Used in the Manual         9 
                 Equipment Needed to Run 3by5         9 
                 Note to Color Monitor Owners         9
                 Files on the 3by5 diskette          10
                 Installing 3by5                     11
                 DOS Environment Command             14 
                 Introduction File                   15

      CHAPTER 3. SCREENS, MENUS AND HELP
                 Screen Sections                     17
                 Menus                               18
                 Help                                19

      CHAPTER 4. EDITING
                 EDIT COMMAND                        21
                 3by5 EDITOR                         22
                 TEMPORARY TEXT BUFFER               23
                 ENTERING TEXT                       24
                 MOVING THE CURSOR                   25
                 FONTS                               26
                   Bold <F6>                         26
                   Underline <F8>                    27
                 EDIT COMMANDS                       28
                   Search Command <F2>               28
                   Block Command <Alt-F4>            29
                   Insert Command <Ctrl-F4>          31
                   Retrieve Command <Shift-F10>      31
                   Print Command <Shift-F7>          31
                   Other Command                     32
                     Sheet Command <Shift-F8>        32
                     Count Command <Ctrl-F1>         36
                     Field Command <F9>              36
                     Load Command                    36
                     Date Command                    36
                   Hold Command                      37
                   Quit Command                      38


      CHAPTER 5. SEARCHING                           41
                 SEARCH COMMAND                      41
                 SEARCH KEY COMMANDS                 43
                 SEARCH OPTIONS                      44
                   Display Format                    44
                   Output File                       44
                   Auto Mode                         45
                   Mark                              45
                 SEARCH KEY OPERATORS                46
                 SEARCH KEYS                         47
                   Single Search Keys                47
                   Multiple Search Keys              47
                   Multiple Fields                   48
                   Numerical Comparison              51
                   Alphabetic Comparison             52
                   NULL Field Search                 53
                   FILLED Field Search               54
                   Extended Characters               55
                 INTERACTIVE SEARCH COMMANDS         56
                   Forward Search Command            57
                   Backward Search Command           57
                   Goto Command                      58
                   Edit Command                      58
                   Print Command                     59
                   Write Command                     59
                   Load Command                      60
                   Mark Command                      60
                   Copy Command                      61
                   Other Command                     62
                     Key Command                     62
                     Auto Command                    62
                     Unmark Command                  63
                   Quit Command                      63
                 SEARCH END COMMANDS                 64
                 UPDATE COMMAND                      65




      CHAPTER 6. PRINTING                            71
                 PRINT COMMAND                       72
                 FORM COMMAND                        74
                 PRINT FORM CODES                    94
                 SHEET COMMAND                       96
                 DIRECT COMMAND                      98
                 CODES COMMAND                       99
                 HARDWARE COMMAND                   101
                 TOP COMMAND                        102 

      CHAPTER 7. FILE COMMANDS                      105
                 FILE TYPES                         108
                 OPEN COMMAND                       109
                   Building a 3by5 File             110
                     Field Types                    113
                     Record Size                    116
                   Index Density                    118
                   Opening a non-3by5 File          119
                   Numbered Reference Files         122
                   Building a non-3by5 File         123
                 CLOSE COMMAND                      125
                 RECORDS COMMAND                    126
                   Copying Records                  127
                   Sorting Records while Copying    127
                   Moving Records                   129
                   Erasing Records                  130
                 LIST COMMAND                       131
                 DIRECTORY COMMAND                  134
                 MAINTENANCE COMMAND                136
                   Index Command                    136
                   Pack Command                     137
                 FIELDS COMMAND                     138
                   Filter Command                   138
                   Redefine                         140
                 STATUS COMMAND                     141
                 VARIABLE LENGTH RECORDS            143




      CHAPTER 8. WINDOWS                            145

      CHAPTER 9. UTILITIES                          147
                 SCREEN COMMAND                     147
                 LOAD COMMAND                       150
                 RUN COMMAND                        151
                 DOS COMMAND                        152

      CHAPTER 10. QUIT COMMAND                      153

      CHAPTER 11. PROGRAM FILES                     155
                 
      CHAPTER 12. MACROS, LEARN COMMAND AND
                  EXTENDED CHARACTER SET            165

      CHAPTER 13. LETTERS AND DOCUMENTS             175

      CHAPTER 14. REFERENCE MANAGER                 181

      APPENDIX: LESSONS                             205

      INDEX

      WARRANTY



      3by5 SK VERSION 5.0  TECHNICAL SUPPORT REQUEST       
         

      This form can be used to obtain technical support from
      Softshell by mail.  Telephone support is not available 
      for the Starter Kit.

      Name:   _________________________________________
      Company:_________________________________________
      Street: _________________________________________
      City:   _________________________________________
      State:  __________________________    ZIP  ______
      Telephone: ______________________________________
                            

      Equipment:

         [ ]  IBM PC       [ ] IBM XT     [ ] IBM AT   
         [ ]  IBM PS/2     [ ] COMPAQ     [ ] AT&T 6300
         [ ]  OTHER (please specify manufacturer):
         
         Ram memory:        
         Hard disk? (Y/N): 
         Monitor (Monochrome, Color):
         Monitor adapter board:
         Printer:

      PROBLEM: (Use other side if your need more room) 





      Mail to:  SOFTSHELL 
                1254 Thornbury Road
                West Chester, PA 19382
                (215) 793-1431





     3by5 ORDER FORM                                     November 1, 1988


                                               UNIT
     ITEM#  DESCRIPTION                        COST       QTY       COST





     1110   3by5 V5.0  with printed manual     $69.95    _____      _______
            [] 5.25" or [] 3.5"  diskette

                                                                  
     6% state tax (Pennsylvania residents)                          _______

     Shipping and Handling 
                 USA and Canada                 $5.00               _______
                 Other Countries (Air Mail)    $20.00               _______


                                               TOTAL                _______




     SHIP TO ADDRESS:                     BILL TO ADDRESS: (Include P.O.)







     Telephone number:


     All programs require an IBM PC, XT, AT, PS/2, or 100% IBM compatible 
     microcomputer with 320K memory, DOS 2.x or 3.x, and one disk drive
     (DSDD diskette).

     Prices subject to change.  Please make all payments by check or money
     order.  Payment must accompany purchase orders that total less than
     $50.00.  Purchase orders accepted from universities, government agencies
     and businesses with established purchasing departments.


     Send orders to:

     SOFTSHELL                            Telephone: (215) 793-1431
     1254 Thornbury Rd.
     West Chester, PA 19380




                                            INTRODUCTION

      CHAPTER  1  -  INTRODUCTION


      OVERVIEW OF 3by5 PROGRAMS FOR THE PC

      3by5 information management programs offer speed,
      simplicity and versatility in entering, indexing and
      retrieving free-text and structured data.  They are as
      simple to use as 3x5 card files.  Potential uses include:


        Indexing personal literature collections.

        Client, customer or patient records.

        Card catalogs for small libraries.

        Mailing lists of clients, customers, patients.

        Cataloging and cross-referencing research notes.

        Writing notes and memos.

        Cataloging paper documents. 

        Preparing tests from a set of standard questions you
        have developed.

        Student records.

        Litigation support, exhibit files.

        Medical notes, prescription lists, insurance information.

        Cataloging slide and video tape collections.

        Parts inventories.





                                                         1




      3by5

      You can use 3by5's integrated text editor or any other
      word processor, text editor or computer program to enter
      data in any format:  words, phrases, sentences, paragraphs
      or variable length fields.

      Searching files is fast.  Just enter a search key, and 3by5
      will find the first and all subsequent occurrences of the
      key in your file.  Moreover, when the key is found, it is
      displayed in the context of the record in which it
      appears.  As each occurrence is found, you have the option
      of continuing the search, editing the record, printing the
      information, transferring records from one file to another,
      or ending the search. 

      You may search for partial keys, i.e. an incomplete word or
      phrase.  For example, the search key "cdona" will locate
      the name "McDonald" and "MacDonald".  You may also
      search for combinations of key terms which appear in the
      same record.

      A search may be limited to specific fields.  For example, if
      you are searching for Henry George who lives in
      Washington State, you can search for all records containing
      "George" in the name field, "Washington" in the state field.

      You may search and edit up to five files at a time. 
      Standard ASCII files, and WordStar and WordPerfect
      document files may be searched directly (without indexing)
      or imported into 3by5 files for editing and indexing.  3by5
      records may be transferred to ASCII, Wordstar and
      WordPerfect files.  

      3by5 programs are not copy protected.  They require an
      IBM PC, XT, AT, PS/2 or 100% compatible microcomputer
      with at least 320K memory and one disk drive.  Optimum
      performance is obtained on a machine with 512K or more.






       2




                                            INTRODUCTION

      This manual contains general instructions for the following
      3by5 models:


      3by5 Standard

      The standard 3by5 program offers you the following
      features:

        1.  Fields  - up to 26 variable length fields.
        3.  Sort records by one or two fields when copying or
            printing.
        2.  Underline and bold commands.
        3.  Improved indexing for records greater that 512 bytes.
        4.  Multiple print formats for mailing labels, 3by5 cards
            etc. 
        5.  Start-up Files that will automatically open your files
            and set printer parameters, etc.
        6.  Directory commands  Change, Make, Remove and List
            directories.
        7.  List files on a disk from within the program along
            with the date and time last modified, and file size.
        8.  Variable length records (reduces the amount of
            unused space on a disk).
        9.  Report generator.  Print records in a user defined
            format.
       10.  Reference Manager.  Enter journal, book and chapter
            references in a standard format and the 3by5
            Reference Manager will rearrange them into the style
            required by any journal.
       11.  Correspondence Manager.  Handles all your
            correspondence needs:  writing letters, mail merge,
            correspondence follow-up. 
       12.  Field definitions.  Specify Free-text, Line, Numeric,
            Date, Time, Mask and Person fields.
       13.  Macros.  Insert predefined text or issue commands
            sequences with a single key stoke.
       14.  Printed manual.
       15.  Technical support by telephone or mail.



                                                         3




      3by5

      3by5 Starter Kit 

      The 3by5 Starter Kit is an Adware (ADvertising softWARE)
      product from Softshell.  It is a free, fully functional
      program designed to introduce you to Softshell's 3by5
      product line.  The Starter Kit includes all the features
      listed in the 3by5 overview except:

        1.  Multiple fields and sorting capability are limited to
            ten fields per record (except for reference files).
        2.  There is no underline or bold capability.
        3.  Sorting is limited to one field at a time.
        4.  Variable length records may not be edited.
        5.  There is a limit of only ten user defined Macros.
        6.  Index density is limited to 1.
        7.  Documentation is provided on diskette.
        8.  Technical support by mail only.

      The 3by5 Starter Kit may be distributed without charge. 
      Owners of 3by5 may create databases and distribute the
      databases along with a copy of the 3by5 Starter Kit.





















       4




                                            INTRODUCTION

      INFORMATION FOR USERS OF PREVIOUS VERSIONS

      Converting Old Files

      Version 3.1 introduced a new file format that has not been
      changed with the release of Verions 4.0 and 5.0.  3by5 files
      created by 3by5 Versions 1.0, 1.1, 2.0 and 3.0 can be read
      and modified by Version 5.0, but should be converted to
      the new format.  The conversion process is simple.  First,
      open an old 3by5 file; then build a new 3by5 file using the
      same file parameters.  Use the Records Command to copy
      records from the old file to the new.


      Version 4.0 added the following features:  

      Underline and bold characters are displayed directly on the
      screen.  

      The editor highlights blocked areas of text in reverse
      video.  

      Searches may include the extended character set (e.g.
      Greek letters).  

      Printing was improved to include word wrap that adjusts
      for page margins.  

      The 3by5 Reference Manager was improved to include books
      and book chapters in addition to journal references.  An
      author's first name may be included in the reference rather
      than his initials.  

      You could define 26 fields with seven field types:  Free-
      form text, Line, Number, Date, Time, Mask and Person.  
      While searching you can mark records for later printing,
      copying and sorting.  

      Macros, for text entry and commands, were added.



                                                         5




      3by5

      Version 5.0 contains all the features in Version 4.0 and the
      following additions:

      You can search any file while editing a record.  

      The Update Command allows you to modify records that
      contain specified keys (similar to search and replace in a
      word processor).  

      One or two windows may be specified.  

      A Status Line has been added to the top of the screen to
      inform you of your location in the program.  

      Search keys now include not, and numeric and alphabetic
      comparisons.

      Editing of a record may be put on hold while you perform
      another 3by5 task.

      You may exit to DOS, execute a program, and return to
      3by5.




















       6




                                            INTRODUCTION


      Trademarks used in this manual

        WordPerfect is a trademark of WordPerfect Corp.
        WordStar is a trademark of Micropro Corp.
        IBM PC, IBM XT, IBM AT and IBM PS/2 are trademarks of IBM Corp.
        Compaq is a trademark of Compaq Corp.

          
                
           































                                                         7




      3by5

         









































       8

```
{% endraw %}

## CHAP02.DOC

{% raw %}
```



                                         GETTING STARTED

      CHAPTER  2  -  GETTING STARTED


      NOTATIONS USED IN THE 3by5 OWNER'S MANUAL

      [xxxxx]    Square brackets enclose characters you type at
                 the keyboard.

      <Enter>    Angled brackets indicate function and special
                 keys:  <Enter>, <Esc>, <F10>, <Ctrl-F10>.


      EQUIPMENT NEEDED TO RUN 3by5

          IBM PC, XT, AT, PS/2 or 100% IBM compatible.

          320K RAM and at least one disk drive.

          PC DOS Version 2.0 or higher.

          A printer is optional. 



      NOTE TO COLOR MONITOR OWNERS

      3by5 writes directly to RAM video for fast updating of the
      screen.  This may cause excessive screen noise on some
      color monitors.  Most color monitors do not display
      underline (underlined text is displayed in blue).   See
      Chapter 9 for more information.











                                                         9


      3by5 Chapter 2

      FILES ON THE 3by5 DISKETTE

      3BY5.EXE        The main 3by5 program.  It is a machine
                      language program and has no overlay
                      routines.  It may be removed from the
                      disk drive after 3by5 is loaded into
                      memory.


      3BY5HELP.3X5     3by5 Help file

      INTRO.3X5        3by5 Introduction (demonstration) file

      README          If the file is present, it contains
                      information about 3by5 that has been
                      released since your documentation was
                      printed.

      CONFIG.SYS      This configuration file instructs DOS to
                      reserve space for up to 16 open files at a
                      time.  You may edit it as you need.


      ADDRESS.3X5      Sample file
      FORMLET.LET      Sample form letters
      FORMS.PFM        Sample file with print forms
      LETTERS.LET      Sample letters
      NOFIELDS.3X5     Sample file
      PROGRAMS.3X5     Sample file
      REF.REF          Sample file of references
      REFSTYLE.RFS     Reference style file
      JOHN.PRG         Sample 3by5 program file

      ADDRESS.MAP      Index file for ADDRESS.3X5
      FORMLET.IET      Index file for FORMLET.LET
      FORMS.IFM        Index file for FORMS.PFM
      LETTERS.IET      Index file for LETTERS.LET
      NOFIELDS.MAP     Index file for NOFILEDS.3X5          
      PROGRAMS.MAP     Index file for PROGRAMS.3X5
      REF.IEF          Index file for REF.REF
      REFSTYLE.IFS     Index file for REFSTYLE.RFS

       10


                                         GETTING STARTED

      INSTALLING 3by5


      MAKING A BACK-UP COPY OF THE 3by5 MASTER
      DISKETTE

      1.  Place a DOS system diskette into drive A and turn on
          the computer.

      2.  If asked, enter the date and time.
       
      3.  Place a new or blank diskette in drive B.

      4.  Type [diskcopy a: b:] <Enter>.  This will copy the
          contents of the diskette in drive A to the diskette in
          drive B.  The diskcopy program will pause.

      5.  Remove the DOS system diskette from drive A and
          insert the 3by5 Master Diskette into drive A.  Make
          certain that the diskette in drive B is new or has no
          files that you want to save.  

      6.  Press <Enter>.  The program will copy all of the files
          from drive A to drive B.  Use this diskette as your
          working copy of the 3by5 Master Diskette.

















                                                        11


      3by5 Chapter 2

      MAKING A WORKING COPY OF THE 3by5 PROGRAM

      The only files you need to run the 3by5 program are
      3BY5.EXE and CONFIG.SYS.  The purpose of the
      CONFIG.SYS file is to instruct DOS to provide space in
      memory for up to five source files and five index files. 
      You may copy them onto any diskette (system or data
      type) or hard disk.  For diskette based systems, the
      simplest method is to format a DOS system diskette.  Then
      place your backup copy of the 3by5 Master Diskette in
      drive A, the newly formatted diskette in drive B, and
      type: [copy a:3by5.exe b:] <Enter> and then type [copy
      a:config.sys b:] <Enter>.

      You may copy the file 3BY5HELP.3X5 to the new diskette.
      The 3BY5HELP.3X5 file is optional (see Chapter 3 on the
      Help Feature).

      IF YOU NEED TO OPEN MORE THAN TWO 3by5 FILES
      AT A TIME, IT IS IMPORTANT THAT YOU BOOT THE
      SYSTEM WITH A CONFIG.SYS FILE THAT SETS THE
      MAXIMUM NUMBER OF OPEN FILES TO 16.




















       12


                                         GETTING STARTED

      LABELING AND STORING 3by5 DISKETTES

      When the installation process is complete, remove the 3by5
      Master Diskette from drive A and store it in a safe
      location.  It will be your master backup copy in the event
      of a disaster.

      Label the diskette onto which you have just transferred
      the 3by5 files with the following:
        
          3by5 Version 5.0  (C)  1988,  Softshell Corp.

      All subsequent copies of the 3by5 programs should also be
      labeled with the 3by5 title and the Softshell copyright
      notice.


      If you have a copy of the 3by5 Starter Kit, you may copy
      it and distribute copies without charge.

      If you have 3by5, you may only make copies of the
      program for your own use.  3by5 may not be distributed to
      other parties except by Softshell Corp. or its designated
      dealers.


















                                                        13


      3by5 Chapter 2

      DOS ENVIRONMENT COMMAND

      The DOS Set Command may be used to specify the default
      drives and directories (paths) for the 3BY5HELP.3X5 and
      3BY5AUTO.PRG files.


      3BY5HELP.3X5  (See Chapter 3)

      From the DOS Command Line type:

        C>SET 3BY5HELP=C:\LEVEL1\LEVEL2


      where the text to the right of the equal sign is the path
      for the 3by5 Help File 3BY5HELP.3X5.




      3BY5AUTO.PRG  (See Chapter 11)

      From the DOS Command Line type:

        C>SET 3BY5AUTO=C:\LEVEL1\LEVEL2


      where the text to the right of the equal sign is the path
      for the 3by5 Start-up File 3BY5AUTO.PRG.



      The Set Command may be placed in your DOS
      AUTOEXEC.BAT file.  See your DOS Manual for more
      information on the Set Command and AUTOEXEC file.
       






       14


                                         GETTING STARTED

      INTRODUCTION TO 3BY5

      New users of 3by5 may run through a brief introduction by
      starting 3by5 in the following manner.  Drive A should be
      the default drive.  Place the 3by5 diskette in drive A and
      type

         3by5 intro<Enter>

      3by5 will be loaded into memory, and the title screen
      displayed.  After you press any key to continue, the
      program will prompt you to place the file INTRO.3X5 in
      drive A.  Since the file is already on the diskette, press
      any key to continue.  The remainder of the introduction is
      self explanatory.



























                                                        15


      3by5 Chapter 2

           
          








































       16

```
{% endraw %}

## CHAP03.DOC

{% raw %}
```







      CHAPTER  3  -  SCREENS, MENUS AND HELP


      SCREEN SECTIONS

      3by5 divides the computer screen into three parts:


      3by5 Status Line:  The top line of the screen indicates
      where you are in the program (searching, editing, etc).
      It is highlighted, i.e. displayed in reverse video. 

      Text Window:  Text while editing and searching is
      displayed in this area.  The names of open files are also
      displayed in this section as needed.

      Command Menu: The last two lines of the screen are
      reserved for menus that are used to issue instructions to
      the program.

      For example:
         
        _____________________________________________________________________
        3by5
              Open Files
         1
         2
         3
         4
         5




        >Edit<  Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________






                                                        17


      3by5 Chapter 3

      MENUS   

      The Main Menu will be used as an example of the standard
      3by5 menu.  When you first enter the progam, the Main
      Menu is displayed:

        _____________________________________________________________________
        >Edit<  Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________
       

      The first line (Command Line) of the Main Menu lists the
      commands that may be executed.

      The second line (Auto Help Line) is highlighted.  It gives
      you information on the current command.

      On the Command Line the command EDIT is highlighted
      (depicted in this documentation by being enclosed by ><
      signs).  The area in reverse video is called the Command
      Indicator.  Press the space bar once and the command
      EDIT will appear in standard video and the command
      SEARCH will be highlighted.  Press the space bar again
      and the PRINT command will be highlighted.  You may
      move the Command Indicator by pressing the space bar,
      left or right arrow keys, or back space key.

      You may execute a command by positioning the Command
      Indicator on the command and pressing <Enter>, or by
      pressing the first letter of the command, regardless of
      where the command indicator is located.

      If you become lost while using 3by5 and are not certain
      what to do next, read the Auto Help Line at the bottom of
      the screen.  The information on the line should help you
      decide what to do next.  If you are still lost, press <F1>
      for help.




       18


                                       SCREENS AND MENUS

      HELP


      Press <F1> for help.

      3by5 has context sensitive help screens that display
      information about the 3by5 command or function you are
      using.  The text for the help screens is contained in a file
      called 3BY5HELP.3X5.  The first time you press <F1> for
      help, the program searches the current directory for
      3BY5HELP.3X5.  If the file is not in the current directory,
      the program will prompt you to enter the drive and
      directory in which the help file may be found - in which
      case type the drive and directory (e.g C:\3by5 or A:).  You
      may press <Esc> to bypass this function.

      3BY5HELP.3X5 is a standard 3by5 file (without an index). 
      You may edit the file if you want to make specific changes
      in any of the help screens.


      You use the DOS Set Command to specify the path for the
      3BY5HELP.3X5 file as follows:

      From the DOS Command Line type:

        A>SET 3BY5HELP=A:\LEVEL1\LEVEL2

      where the text to the right of the equal sign is the path
      for the 3BY5HELP.3X5 file.

      The Set Command may be placed in your DOS
      AUTOEXEC.BAT file.  See your DOS Manual for more
      information on the Set Command and AUTOEXEC file.








                                                        19


      3by5 Chapter 3

         
        








































       20

```
{% endraw %}

## CHAP04.DOC

{% raw %}
```






             
      CHAPTER  4  -  EDITING



      EDIT COMMAND

        _____________________________________________________________________
        >Edit< Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________



      The Edit Command is used to modify an existing record or
      add a new record to an open 3by5 file.  Press [E].  If two
      or more files are open, the program will list the files and
      ask you to enter the number or name of the file that you
      want to edit.  

      The program will then display the following at the bottom
      of the screen:

        _____________________________________________________________________
        Edit Record:  zzzzz
        Records in file: yyyy
        _____________________________________________________________________


      Where yyyy is the number of records in the file and zzzzz
      is the number of the record to edit.  The program defaults
      to the number of records in the file plus one.  Pressing
      <Enter> will automatically add another record to the file. 
      Otherwise type in the number of the record you want to
      edit and press <Enter>.









                                                        21


      3by5 Chapter 4

      3by5 EDITOR

      3by5's editor uses many of the same function keys as those
      used by WordPerfect.  Features include:  word wrap, insert
      and delete functions with automatic alignment of text,
      numerous cursor control commands and block copy, move
      and erase commands.  It is not, however, a full word
      processor.

      When you first enter the editor, the cursor will be at
      column one of line one.  The 3by5 Status Line at the top
      of the screen will display the name of the file and the
      record number:

        _____________________________________________________________________
        3by5 Edit[A:\ADDRESS.3X5]#1
        _____________________________________________________________________



      At the bottom of the screen, the line number and column
      number will be displayed on the right hand side of the 24th
      line:


        _____________________________________________________________________
                                                          Line 1  Col 1
        <F1> Help  <F7> Commands       Mask ###-##-###
        _____________________________________________________________________


      The 25th line contains the message 

        "<F1> Help  <F7> Commands" 








       22


                                                 EDITING

      In the center of the 25th line the field type will be displayed
      along with the format or mask.

      For example:    Numeric:  10.2    
                      Date:     mm/dd/yyyy
                      Time:     hh:mm
                      Mask:     ###-##-##

      The editor allows you to enter up to 66 lines of text per
      record, regardless of the number of characters (bytes) per
      record.  If you enter more characters than the record will
      hold, the program can save only the number of bytes allocated
      per record.  To determine the number of bytes typed and the
      number of bytes per record, press <Ctrl-F1> and the number of
      bytes in the record will be displayed.



      TEMPORARY TEXT BUFFER

      3by5's Editor has one buffer that is used to temporarily store
      blocks of text during copy and cut commands.  The contents of
      this buffer are erased each time you perform a new copy or
      cut command.  

      The Search-Copy Command retrieves selected fields from a
      record found during a search and places the text into the
      Temporary Text Buffer.  The contents of the buffer may be
      inserted into any record you are editing.













                                                        23


      3by5 Chapter 4

      ENTERING TEXT

      To enter text in a new record just type as you would with a
      word processor.  Words that extend beyond the right margin
      are automatically wrapped down to the next line.  Pressing
      <Enter> indicates the end of a paragraph (or block of text) and
      is indicated by a solid, left-pointing triangle.  Text will not
      wrap around an end of paragraph mark.

      You may type over text by moving the cursor with the cursor
      control keys to the appropriate position.  Press <Ins> and the
      message "OVER" will appear on the bottom line of the screen. 
      The program is now in overtype mode.  Type the new text you
      want to enter.  If an end of paragraph (solid, left-facing
      triangle) is encountered while over-typing, the program will
      switch to Insert Mode.



      DELETING TEXT ONE CHARACTER AT A TIME

      You may delete the character at the current cursor position by
      pressing <Del>.  Each time you press <Del>, a character is
      deleted.  Text is automatically realigned as you delete
      characters.



      BACK SPACE

      Pressing the back space key deletes the character to the left
      of the cursor and moves the cursor to the left one space. 
      After backspacing, any movement of the cursor by the arrow
      keys will realign the text.








       24


                                                 EDITING

      MOVING THE CURSOR


      The 3by5 editor allows you to move the cursor by using the
      following keys:

      <Rt Arrow> or <Ctrl-D>  cursor right one space

      <Lt Arrow> or <Ctrl-S>  cursor left one space

      <Up Arrow> or <Ctrl-E>  cursor up one line

      <Down Arrow> or <Ctrl-X> cursor down one line

      <Home>  cursor to the beginning of the current line

      <End>  cursor to the end of the current line

      <PgUp>  cursor to the line 1 column 1

      <PgDn>  cursor to the last column of the last line of text

      <F9> or <Ctrl-Enter>  move the cursor from one field to the
      start of the next field.

      <Ctrl-Rt Arrow> or <Ctrl-F>  cursor to the right one word

      <Ctrl-Lt Arrow> or <Ctrl-A>  cursor to the left one word

      <Ctrl-End>  delete from the cursor to the end of line












                                                        25


      3by5 Chapter 4

      FONTS:  BOLD AND UNDERLINE


      BOLD  <F6>  

      While typing text:  Press <F6> to designate the beginning of a
      section of text to be printed in bold.  Type the text.  It will
      be displayed in bold.  When you are finished typing the text in
      bold, press <F6> again to turn off bold.

      Block of text:  Use <Alt-F4> to turn on the block command;
      define the block of text and press <F6>.  The block of text
      will be displayed in bold. 

      Alternatively, you can press <Alt-F4>, define a block of text
      and then press <Alt-F4>.  The following prompt will be
      displayed:


        _____________________________________________________________________
        1 Cut   2 Copy   3 Delete   4 Underline   5 Bold   6 Block off:  0
        _____________________________________________________________________

      To convert the entire block of text to bold, press [5]. To
      delete all bold within the block of text, press [3] and the
      following prompt will be displayed:

        _____________________________________________________________________
        Delete:  1 Underline   2 Bold   3 Text:  0
        _____________________________________________________________________

      Press [2] to delete all bold in the block.










       26


                                                 EDITING

      UNDERLINE <F8>  

      While typing text:  Press <F8> to designate the beginning of a
      section of text to be underlined.  Type the text.  It will be
      displayed with underline on monochrome monitors and in blue
      on color monitors.  When you are finished typing the text in
      bold, press <F8> again to turn off underline.

      Block of text:  Use <Alt-F4> to turn on the block command;
      define the block of text and press <F8>.  The block of text
      will be displayed in underline. 

      Alternatively, you can press <Alt-F4>, define a block of text
      and then press <Alt-F4>.  The following prompt will be
      displayed:

        _____________________________________________________________________
        1 Cut   2 Copy   3 Delete   4 Underline   5 Bold   6 Block off:  0
        _____________________________________________________________________

      To convert the entire block of text to underline press [4]. To
      delete all bold within the block of text, press [3] and the
      following prompt will be displayed:

        _____________________________________________________________________
        Delete:  1 Underline   2 Bold   3 Text:  0
        _____________________________________________________________________

      Press [1] to delete all underline in the block.













                                                        27


      3by5 Chapter 4

      EDIT COMMANDS 

      Edit commands (such as block copy, print and quit) can be
      issued by pressing <F7> for the following Edit Command Menu:

        _____________________________________________________________________
        Search  Block  Insert  Retrieve  Print  Other  Hold  Quit 
        Search a file <F2>
        _____________________________________________________________________


      The Auto Help Line (bottom line) displays information
      about the command and the function key that can be used
      to issue the command without using the Edit Command
      Menu.  For example, the <F2> function key can be pressed
      for the Search Command.

      Many of the Edit Commands can also be issued by pressing
      a function key.  In the pages that follow the function key
      assignments are indicated next to the name of the function.


      EDIT-SEARCH Command <F2>

      The Search Command is used to search the same file or
      another while editing.  Information from the search may be
      placed in 3by5's temporary buffer and transferred to the
      record being edited.

      Press [S] to start a search.  The commands are the same
      as those for searching from the Main Menu and are
      described in Chapter 5.










       28


                                                 EDITING

      EDIT-BLOCK Command  <Alt-F4>    

      The Block Command is used to define a block of text that
      will be cut, copied, or deleted.  It can also be used to turn
      on or off underline or bold for the entire block of text. 
      The cursor position when <Alt-F4> is pressed defines the
      origin of the block of text.  You use the cursor control
      keys (e.g. the arrow keys, <Pg Up>, <End>, etc.) to define
      the block of text.  The current block of text is defined as
      that text from the block origin to the current cursor
      position.  It is highlighted in reverse video.

      After you have defined a block of text, you can copy it to
      a temporary buffer, delete it, underline it, or convert it to
      bold type.  Press <Alt-F4> and the program will prompt
      you:

        _____________________________________________________________________
        1 Cut  2 Copy  3 Delete  4 Underline  5 Bold  6 Block off:  0
        _____________________________________________________________________

      Press <Enter> to return to the block definition or select
      one of the following:


      1.  Cut:  The cut block command copies the block of text
          into the Temporary Text Buffer where it stays until
          the buffer is filled with new text.  The block of text
          is erased after it is copied to the buffer.

      2.  Copy:  The copy block command copies the block of
          text into the Temporary Text Buffer where it stays
          until the buffer is filled with new text.  This allows
          you to copy the text to multiple places: within the
          current record, to another record in the same file or
          to another file.






                                                        29


      3by5 Chapter 4

      3.  Delete:  The delete command deletes the current block
          of text, or all bold or underline within the block:

              _________________________________________________________
              Delete:  1 Underline   2 Bold   3 Text:  0
              _________________________________________________________


          Press [1] to delete all underline in the block of text.

          Press [2] to delete all bold in the block of text.

          Press [3] to delete all text defined by the highlight.

          NO COPY IS MADE BEFORE THE TEXT IS ERASED!  
          Once you delete a block of text, you cannot restore
          the original text. 

      4.  Underline:  underline all text in the block.

      5.  Bold:  The bold command causes all text in the block
          to be printed and displayed in bold.

      6.  Block Off:  Press [0] to turn off the block command.


















       30


                                                 EDITING

      EDIT-INSERT Command  <Ctrl-F4>

      The Insert Command allows you to insert the block of text
      in the Temporary Text Buffer at the current cursor
      position.  The block of text must have been previously
      defined by using the block Copy or Cut Commands.  The
      insert command can be used to move a block of text (saved
      in the temporary buffer with the Copy or Cut Command)
      from one record to one or more other records (within the
      same file or from one file to another).  This allows you to
      create templates and insert them in each record you edit.



      EDIT-RETRIEVE RECORD Command  <Shift-F10> 

      This command retrieves a record from any open file and
      inserts it in the record you are editing.  Press <Shift-F10>
      and the program will display the files that are open.  If
      more than one file is open, you will be asked to select a
      file.  Type the number of the file.  The program will then
      prompt you for the number of the record to retrieve. 
      Type the number of the record and press <Enter>.  



      EDIT-PRINT Command  <Shift-F7>

      The current record will be printed using the current print
      form.












                                                        31


      3by5 Chapter 4

      EDIT-OTHER Command

      The following commands are available under the Other
      Command:


      EDIT-OTHER-SHEET Command  <Shift-F8>

      The Sheet Command is used to change the page length and
      margins of the record you are editing or the default values
      for the entire file.  

      The following parameters can be defined:

      Page Length

      The Page Length is the length of the page in lines.  A
      standard 8.5 x 11 inch page has 66 lines (6 lines per
      inch).  A 3by5 card has 18 lines per page.


      Left Margin

      The Left Margin is the left margin for printing.  The left
      margin of text is always positioned at column one of the
      video screen.


      Right Margin 

      The Right Margin is the right margin of printing.  Any
      attempt to print past the right margin results in a carriage
      return and new line feed.  


      Top Margin

      The Top Margin is the number of lines the printer will
      leave at the top of a page before printing records.  



       32


                                                 EDITING

      Bottom Margin 

      The Bottom Margin is the number of lines the printer will
      leave at the bottom of the page.


      Conditional New Page

      This parameter defines how records will be split at page
      boundaries when printing.  This parameter is fully defined
      in Chapter 6 under the Print-Sheet Command.































                                                        33


      3by5 Chapter 4

      Sheet Command for Standard 3by5, Program, Macro
      Reference and Reference Style Files

      These files are considered data files and as such do not
      contain printing information.  Only the right margin can be
      changed.  This feature is strictly for editing purposes. 
      Print margins are determined by the Print Form used to
      print the contents of the data file.

      The following prompt will be displayed:
        _____________________________________________________________________

        Right margin: (11 - 120)          76
        _____________________________________________________________________


      You can only change the right margin of a Standard 3by5
      File, 3by5 Program File and Macro File.  The left margin is
      fixed at column position 11 while editing.

      Other Sheet parameters (e.g. page length, top and bottom
      margins) are determined by the Print Form used to print
      the file.

      After you have typed the right margin, press <Enter> to
      save the results.  The setting of the right margin affects
      all records in the file.















       34


                                                 EDITING

      Sheet Command for Print Form, Letter and Document Files

      The following screen will be displayed:
        _____________________________________________________________________


        Page length:   (0  - 66)               66
        Left margin:   (1  - 110)              11
        Right margin:  (11 - 120)              76
        Top margin:    (0  - 25)                6
        Bottom margin: (0  - 25)                6
        Conditional:   (0  - 66)                1




        <Esc> Cancel   <F10> save
        _____________________________________________________________________


      Enter the values and press <F10> to save the results.  The
      program will prompt you:


        _____________________________________________________________________
        >Record< File  Erase
        Set values for current record only
        _____________________________________________________________________

      Press [R] to save the Sheet Parameters for the record you
      are editing (no other records are affected).

      Press [F] to make the Sheet Parameters the default values
      for the entire file.

      Press [E] to erase the Sheet Parameters for the current
      record and reset them to the default values of the file.





                                                        35


      3by5 Chapter 4

      EDIT-OTHER-COUNT Command  <Ctrl-F1>  

      The Count Command displays the number of characters in
      the current record at the bottom of the screen.  Press any
      key to continue editing.


      EDIT-OTHER-FIELD Command <Shift-F9>

      The Field On/Off Command will turn off the predefined
      fields in a record so that you may add additional fields to
      a record or move fields around.  The key works as a
      toggle switch.  When fields are off, <F9> or <Ctrl-Enter>
      insert an end of field mark at the cursor position (|<).


      EDIT-OTHER-LOAD Command

      The Load Command is used to load the contents of the
      current record into memory: a Print Form for Printing, a
      Reference Style Form for the Reference Manager, or a
      Macro record.


      EDIT-OTHER-DATE Command <Shift-F5> 

      The Date Command is used to insert the current date,
      time, or date and time at the current cursor location.  The
      Date Command gives you the option of changing the format
      of the date (e.g 11/21/88 or 11-21-88).












       36


                                                 EDITING

      HOLD <Shift-F3>

      The Hold Command temporarily suspends editing and
      returns the program to the Main Menu.  The 3by5 Status
      Line at the top of the screen will display the word "Hold"
      after the name of the file you were editing.  You may then
      perform other tasks (for example: open another file, search
      or edit a file).  When you are finished and are at the Main
      Menu Command, press [Q] to Quit and you will be returned
      to the place at which you placed editing on hold.
































                                                        37


      3by5 Chapter 4

      QUIT COMMAND 

      The Quit Command has several options:

        _____________________________________________________________________
        >Save< Abort  Next  Previous  Goto  Bypass
        Save record; return to parent task
        _____________________________________________________________________


          Save saves the record and returns you to the parent
          task (Main Menu or Search).

          Abort aborts the editing of the record.  No changes
          are saved, and you are returned to the parent task
          (Main Menu or Search).

          Next saves the record and moves to the next record.

          Previous saves the record and moves to the previous
          record.

          Goto saves the record and allows you to select the
          next record to edit.

          Bypass aborts the editing of the record and allows you
          to select the next record to edit.


          Alternative methods of doing the above are:

          <F10> or <Ctrl-PgDn>  saves the edited record and
          moves to the next record in the file.

          <Ctrl-PgUp>  saves the edited record and moves to the
          previous record.






       38


                                                 EDITING

      This page reserved for notes.









































                                                        39


      3by5 Chapter 4

          
             








































       40

```
{% endraw %}

## CHAP05.DOC

{% raw %}
```







      CHAPTER 5  -  SEARCHING

      SEARCH COMMAND

        _____________________________________________________________________
        Edit >Search< Print  Files  Windows  Utilities  Quit
        Search file
        _____________________________________________________________________



      Once a file has been opened, you can search it for any
      search key by pressing [S] in response to the Main Menu. 


      If there are two or more files open, the program will list
      the files and ask you for a range of files to search.  If
      you want to search only one file, type the number of the
      file and press <Enter>.  If you want to search two or more
      files, type the number of the first file, a hyphen, and the
      number of the last file.  Then press <Enter>.

      If only one file is open, you will not be asked to select a
      file.

      If records have been marked during a search, select file 0
      to search or browse the marked records.
















                                                        41


      3by5 Chapter 5

      After you have selected a file for searching, or the
      program defaults to the only open file, the following
      screen will appear:
                         
        _____________________________________________________________________
        3by5 Search[FILENAME]
        Global
        Field A name
        Field B name
        Field C name
        Field D name
        Field E name




        Type search keys; press <F7> for commands
        _____________________________________________________________________
























       42


                                               SEARCHING

      SEARCH KEY COMMANDS


      Type the search keys and press <F7> for the Search Key
      Command Menu:

        _____________________________________________________________________
        >Search< Browse  Files  Print  Write  Update  Options  Clear  Quit
        Start Search
        _____________________________________________________________________


      Search:  Start interactive search using search keys

      Browse:  Browse through a file without specifying a search
      key.  Previous search keys are not altered.

      Files:  Select a different range of files to search.

      Print:  Generate a printed report without manually
      selecting records.

      Write:  Generate automatic output to a file.

      Update:  Modify records (search/replace) found during a
      search.

      Options:  Select Search Options.

      Clear: Erase any previous search keys.  The keys may be
      edited by using the insert and delete keys and by over-
      typing.

      Quit:  Return to the parent task (the Main Menu or the
      Editor)







                                                        43


      3by5 Chapter 5

      SEARCH OPTIONS

      The Search Options Menu displays the options available:

        _____________________________________________________________________
        >Display< Output  Auto  Mark
        Page  Topline
        _____________________________________________________________________



      SEARCH-KEYS-OPTIONS-DISPLAY Command

      The Page Display Format displays one record at a time. 
      The Topline Display Format lists the record number and
      first line of each record found during a search.


      SEARCH-KEYS-OPTIONS-OUTPUT Command

      You may specify the name of a file to which you can
      output (write) records found during the search.  The file
      may be a 3by5, ASCII, WordStar or WordPerfect file. 
      Records written to the output file during a search are
      appended to the end of the file.  

      The program will display the open files and ask you to
      select an output file.  Select file 0, to turn off the output
      option.













       44


                                               SEARCHING

      SEARCH-KEYS-OPTIONS-AUTO Command

      The search procedure may be manual (the program stops
      after each record is found and displayed) or automatic (the
      entire search is performed without pausing).  The automatic
      mode is useful for printing select records, counting the
      number of hits in a file, and for copying records to the
      output file.


      SEARCH-KEYS-OPTIONS-MARK Command 

      During a manual search you can manually mark up to 500
      records.  These marked records may be sorted and then
      copied to a file (using the Files-Records-Copy Command),
      or printed using the Print Command.

      The Mark Option can be set to All, and all records found
      during a search will be marked (for use with automatic
      searches).

      The Mark Option can be reset to zero to reset the number
      of marked records to 0.



















                                                        45


      3by5 Chapter 5

      SEARCH KEY OPERATORS

      The following operators and reserved words are used to
      specify search key characteristics:

      |          The OR character.  For example, "dog|cat"
                 means "dog" or "cat".

      &          The AND character.  For example, "dog&cat"
                 means "dog" and "cat".

      >          Greater than.

      >=         Greater than or equal.

      <          Less than.

      <=         Less than or equal.

      !=         Not equal.

      NULL       Field without text.

      FILLED     Field with text.



      The uses of the above operators and reserved words are
      described in the following pages.













       46


                                               SEARCHING

      SEARCH KEYS

      SINGLE SEARCH KEYS

      A single search key can contain one or more characters. 
      For example  "cart", "carton" and "arto" are all valid
      search keys that will locate the word "carton".  Any one
      search key may be up to 60 characters in length.  If a
      search key is three or more characters in length, the index
      is used and the search is very rapid.  On average, the
      longer the search key, the faster the search.  If the search
      key is less than three characters in length, each source
      record is searched sequentially, resulting in somewhat
      slower searches.

      Capitalization is ignored during a search.  The string
      "Computer" is equivalent to the string "computer".

      To initiate a search, type a search key and press <Enter>. 
      For example, typing [adams] <Enter> will initiate a search
      for all records that contain the name Adams.  


      NO SEARCH KEYS

      If you do not specify a search key and press [S] to search,
      the program will treat each record as a match.  This is
      equivalent to browsing.


      MULTIPLE SEARCH KEYS

      Records that contain two or more keys may be found by
      using the logical operators "AND" (&) or "OR" (|).  The
      "AND" operator is represented by the ampersand (&).  The
      "OR" operator by the vertical bar(|).

      For example, the search key "computer&basic" will only
      find records with both terms "computer" and "BASIC".



                                                        47


      3by5 Chapter 5

      A space between two search keys is treated as a logical
      AND.  For example, the search key John Smith is
      equivalent to John&Smith and will find all records with:

          John Smith
          John F. Smith
          Smith, John Q.


      If you need to search for the string "John Smith", enclose
      it in quotes and only John Smith will be found, not John
      F. Smith.

      The search key "computer|basic" will locate all records that
      contain either the term "computer" or "BASIC" or both
      "computer" and "BASIC".

      The search key "computer&basic|computer&fortran" will
      locate all records that contain either the terms "computer"
      and "BASIC", "computer" and "FORTRAN", or both
      "computer" and "BASIC" and "computer" and "FORTRAN".



      MULTIPLE FIELDS

      If the file you are going to search has two or more fields,
      you can specify that a key be present in a particular field,
      search the record globally without regard to fields, or
      search globally for one or more keys and at the same time
      search specific fields for other keys.  You may also
      combine keys in searches.  


      For example, a file with four fields:

      FIELD A:   NAME
      FIELD B:   HOME      (home address)
      FIELD C:   WORK      (business address)
      FIELD D:   AGE


       48


                                               SEARCHING

      The following searches may be performed:

          1.     Find all records with the name John Smith in
                 the name field and the word township anywhere
                 within the record.
       
                 Field     Search key  
                 Global    township
                 NAME:     John&Smith
                 HOME:
                 WORK:
                 AGE:

          This is the same as:
       
                 Field     Search key  
                 Global    township
                 NAME:     John Smith
                 HOME:
                 WORK:
                 AGE:

          In this case a space separates John from Smith.



















                                                        49


      3by5 Chapter 5

          2.     Find all records of all John Smiths or Jane
                 Jones who live in Philadelphia.


                 Field     Search key  
                 Global
                 NAME:     John&Smith|Jane&Jones
                 HOME:     Philadelphia
                 WORK:
                 AGE:


          3.     Find all individuals who live in Maryland and
                 work in the District of Columbia

                 Field     Search key  
                 Global
                 NAME:
                 HOME:     Maryland
                 WORK:     Washington|District&Columbia
                 AGE:

                 In this example the address may have been
                 entered as Washington DC or District of
                 Columbia.  The search will find either
                 District&Columbia or Washington. 
















       50


                                               SEARCHING

      NUMERICAL COMPARISON

      Numeric fields may be searched using the following
      comparison operators:

        >        Greater than
        >=       Greater than or equal
        <        Less than
        <=       Less than or equal
        =        Equal
        !=       Not equal
       

      For example, the following search keys will find all John
      Smiths between the ages of 21 and 65 years:

                 Field     Search key  
                 Global
                 NAME:     John Smith
                 HOME:
                 WORK:
                 AGE:      >=21&<=65

      NOTE:  Numerical comparison searches are much slower
      than string match searches since 3by5 indexes words and
      not number ranges.  You can increase the speed of a
      numerical comparison search by including a string match
      (e.g. the "John Smith" key in the name field).

      If you need to search for a string that includes one of the
      numerical operators, enclose the string in quotes. For
      example:
      "a = b".

      The equal comparison will locate numbers that are equal
      numerically, but not equivalent strings.  For example:
      .33 = 0.3300    





                                                        51


      3by5 Chapter 5

      ALPHABETIC STRING COMPARISON

      The following comparison operators may be used to search
      for a range of strings:

        >        Greater than
        >=       Greater than or equal
        <        Less than
        <=       Less than or equal
        =        Equal
        !=       Not equal
       

      For example, the following search keys will find all records
      with names from Jones to Smith:

                 Field     Search key  
                 Global
                 NAME:     >=Jones&<=Smith
                 HOME:
                 WORK:
                 AGE:


      Capitalization is ignored.  The string "de la Vega" is
      equivalent to the string "De la vega".


      NOTE:  String comparison searches are much slower than
      string match searches.  You can increase the speed of a
      string comparison search by including a string match (e.g.
      the key "Boston" in the Address field).










       52


                                               SEARCHING

      NULL FIELD SEARCH

      The term NULL (Null or null) is a reserved word that
      instructs the program to search for records in which a
      field contains no text.  For example:

          Global
          NAME:       Smith
          ADDRESS:    NULL
          PHONE:
          AGE:

      The above search key will locate all records that contain
      the string "Smith" in the Name field and contain no text in
      the Address field.

      The following key will find all records with the string
      "unknown" in the Address field, or records without text in
      the Address field:

          Global
          NAME:
          ADDRESS:    unknown|NULL
          PHONE:
          AGE:


      To search for the strings "NULL", "Null" or "null", enclose
      the string in quotes.













                                                        53


      3by5 Chapter 5

      FILLED FIELD SEARCH

      The term FILLED (Filled or filled) is a reserved word that
      instructs the program to search for records in which a
      field contains text of any type.  For example:

          Global
          NAME:       Smith
          ADDRESS:    FILLED
          PHONE:
          AGE:

      The above search key will locate all records that contain
      the string "Smith" in the Name field and contain text in
      the Address field.

      To search for the strings "FILLED", "Filled" or "filled",
      enclose the string in quotes.
























       54


                                               SEARCHING

      EXTENDED CHARACTERS IN THE SEARCH KEY

      To include extended characters (non-ASCII characters such
      as the Greek alpha) in the search key, hold <Alt> and type
      the decimal value of the character on the numeric keypad. 
      For example, holding <Alt> while typing [224] will give you
      the Greek letter alpha.  The extended character codes are
      listed in the IBM Basic Manual and Chapter 13 of this
      manual.  

      Alternatively, you can press <Alt-X> for the 3by5 Extended
      Character Menu and select the extended character that you
      want to enter.

      If you use the extended character set frequently, you may
      want to develop a series of macros for the characters you
      use most often.

























                                                        55


      3by5 Chapter 5

       INTERACTIVE SEARCH MENU COMMANDS

        _____________________________________________________________________
        >Forward< Backward Goto Edit Print Write Load Mark Copy Other Quit
        Search/Browse; forward direction
        _____________________________________________________________________


      While searching or browsing manually, the program pauses
      after each record is located and displays the record and
      the above Interactive Search Command Menu.  

      If the record has more than 23 lines, you may scroll
      through the text by pressing the <Up Arrow> and 
      <Down Arrow> keys.  <PgDn> will display the last 23 lines
      of text and <PgUp> will display the first 23 lines.

      At any time during a search, you may press <Esc> to abort
      the search.  To issue any other command you must wait
      until the program has found a record and one of the
      commands is highlighted.





















       56


                                               SEARCHING

      SEARCH-FORWARD Command

        _____________________________________________________________________
        >Forward< Backward Goto Edit Print Write Load Mark Copy Other Quit
        Search/Browse; forward direction
        _____________________________________________________________________


      If the Manual Search Option is in effect, the program will
      stop after each record that matches the search key is
      found and displayed.  Press [F] to move forward to the
      next record that matches the search keys.


      SEARCH-BACKWARD Command

        _____________________________________________________________________
        Forward >Backward< Goto Edit Print Write Load Mark Copy Other Quit
        Search/Browse; backward direction
        _____________________________________________________________________

      The Backward Search Command moves you back to the last
      record found during a search.  If you are at record one of
      the second file in a search, the program will go to the last
      record in the first file that matches the search key.  

      The Backward Command does not allow you to move
      backward in a non-3by5 file.














                                                        57


      3by5 Chapter 5

      SEARCH-GOTO Command

        _____________________________________________________________________
        Forward Backward >Goto< Edit Print Write Load Mark Copy Other Quit
        Go to a record
        _____________________________________________________________________


      The Goto Command allows you to jump directly to any
      record in the file.  Just press [G].  The program will
      prompt you for the number of the record.




      SEARCH-EDIT Command

        _____________________________________________________________________
        Forward Backward Goto >Edit< Print Write Load Mark Copy Other Quit
        Edit record
        _____________________________________________________________________


      The Edit Command lets you edit the current record
      (i.e. the record last displayed during the search).  When
      you are finished editing, you are returned to the search.  
















       58


                                               SEARCHING

      SEARCH-PRINT Command

        _____________________________________________________________________
        Forward Backward Goto Edit >Print< Write Load Mark Copy Other Quit
        Print current record
        _____________________________________________________________________


      The Print Command prints the current record to your
      computer's printer.  After you press [P] a "P" will be
      displayed in reverse video in the upper right corner of the
      screen indicating the record is being printed.  It will
      remain there until you continue the search for another
      record.   Each time you press [P], the current record will
      be printed.  



      SEARCH-WRITE Command

        _____________________________________________________________________
        Forward Backward Goto Edit Print Write Load Mark Copy Other Quit
        Write current record to output file
        _____________________________________________________________________



      The Write Command allows you to copy records from a
      3by5 file to the current Output File (as defined by the
      Search Options).  If no Output File has been specified, the
      program will ask you to specify the output file. Each time
      you press [W] a copy of the current record is written to
      the Output File, and the program displays a "W" in reverse
      video in the upper right corner of the screen.








                                                        59


      3by5 Chapter 5

      SEARCH-LOAD Command

        _____________________________________________________________________
        Forward Backward Goto Edit Print Write >Load< Mark Copy Other Quit
        Print  Macro  Reference
        _____________________________________________________________________


      The Load Command can be used to load into memory the
      Print Form used for printing and the Reference Style Form
      for the Reference Manager, or a macro record.



      SEARCH-MARK Command

        _____________________________________________________________________
        Forward Backward Goto Edit Print Write Load >Mark< Copy Other Quit
        Mark record for sorting, printing or copying
        _____________________________________________________________________


      The Mark Command allows you to mark the most recently
      displayed record for future sorting, printing and/or
      copying.  After you press [M] an "M" will be displayed in
      reverse video in the upper right corner of the screen
      indicating the record has been marked.  It will remain
      there until you continue the search for another record.   














       60


                                               SEARCHING

      SEARCH-COPY Command

        _____________________________________________________________________
        Forward Backward Goto Edit Print Write Load Mark >Copy< Other Quit
        Copy selected fields into temporary buffer
        _____________________________________________________________________

      The Copy Command of the interactive search mode allows
      you to copy selected fields of a record into 3by5's
      temporary text buffer.  The text may then be inserted into
      a record that is being edited.  For example, if you are
      typing a memo, you can search an address file, copy the
      name and address of an individual, return to the memo and
      insert the text into the memo.


      Press [C].  The program will display the file's current Field
      Filter.  You may modify the Filter.  Press <Enter> to use a
      modified filter without saving it, press <F10> save the
      filter and copy the specified fields.  Press <Esc> to bypass
      the copy process.  

      Take for example a search file with the following fields:

          NAME:       John Smith
          STREET:     101 Baltimore Pike
          CITY:       Springfield
          STATE:      Pennsylvania
          ZIPCODE:    19064

      The filter: A+~+B+~+C+,+ +D+ +E 
      will copy the following into the temporary text buffer:

          John Smith<
          101 Baltimore Pike
          Springfield, PA 19064

      See the Files-Field Filter Command for more information
      on Field Filters.



                                                        61


      3by5 Chapter 5

      SEARCH-OTHER Command


        _____________________________________________________________________
        Forward Backward Goto Edit Print Write Load Mark Copy >Other< Quit
        Key  Auto  Unmark
        _____________________________________________________________________


      The following other commands are available by first
      pressing [O]:


      SEARCH-OTHER-KEY Command

        _____________________________________________________________________
        >Key< Auto  Unmark
        Display search keys
        _____________________________________________________________________


      Press [K] to display the current search key (if, for example
      you do not remember what you entered).  The search key
      will be displayed, and the program will prompt you to press
      any key to continue the search.


      SEARCH-OTHER-AUTO Command

        _____________________________________________________________________
        Key >Auto< Unmark
        Automatic Search
        _____________________________________________________________________

      This command converts from Manual Search Mode to
      Automatic Search Mode.  The program will not pause after
      each record is found during a search.  

      This command is useful if you want to print all records
      during a search, but want to confirm the first few records
      found.

       62


                                               SEARCHING



      SEARCH-OTHER-UNMARK Command

        _____________________________________________________________________
        Key  Auto >Unmark<
        Unmark records
        _____________________________________________________________________

      The Unmark Command works only while searching or
      browsing through marked records, or if you are at a record
      that you have accidentally marked and have not left the
      record.



      SEARCH-QUIT Command

        _____________________________________________________________________
        Forward  Backward  Goto  Edit  Print  Write  Load  Mark  Other >Quit<
        Quit search
        _____________________________________________________________________


      The Quit Command allows you to stop a search after a
      record has been displayed.  Press [Q] to end the search.  

      The program will display the Search End Commands:


        _____________________________________________________________________
        >Modify< Add  Back  Count  Return
        Modify search keys
        _____________________________________________________________________


      The text on the following page contains instructions for
      the Search End Commands.




                                                        63


      3by5 Chapter 5

      SEARCH END COMMANDS

      When the search is completed or you have quit the search,
      the following menu will be displayed:

        _____________________________________________________________________
        >Modify< Add  Back  Count  Return
        Modify search keys
        _____________________________________________________________________


      Modify Command:  The Modify Search Keys Command
      returns to the search key window and allows you to modify
      the search keys for a new search.


      Add Command:  The Add Command is used to add a record
      to the file.  For example, if you search for John Smith and
      no record is found, you can add his record to the file.


      Back Command:  The Back Command takes you back to the
      search at the last record found.


      Count Command:  The Count Command gives you a count
      of the number of records searched, the number found and
      the number screened (the number of records that the
      program retrieved from the file and searched for the
      search keys).


      Return:  The Return Command returns the program to the
      parent task (either the Main Menu or the Editor).








       64


                                               SEARCHING

      SEARCH-UPDATE Command

        _____________________________________________________________________
        Search  Browse  Files  Print  Write >Update< Options  Clear  Quit
        Modify records (search and replace)
        _____________________________________________________________________


      The Search-Update Command is similar to a word
      processor's search and replace command.


      First specify a search key.  For example:

          Field       Search key  
          Global
          NAME:       Smith
          ADDRESS:
          PHONE:
          AGE:


      Then press <F7> for the search key Command Menu:

        _____________________________________________________________________
        Search  Browse  Files  Print  Write >Update< Options  Clear  Quit
        Modify records (search and replace)
        _____________________________________________________________________














                                                        65


      3by5 Chapter 5

      Press [U] for the Update Command and the Update Screen
      will be displayed:
                       
        _____________________________________________________________________
        3by5 Update[FILENAME]
        Global
        Field A name
        Field B name
        Field C name
        Field D name
        Field E name




        Type update strings; press <F7> for commands
        _____________________________________________________________________


      To replace a string with another string, type the string to
      be replaced, an equal sign (=), followed by the replacement
      string.  For example:

          Global
          NAME:  Smith=Jones
          HOME:
          WORK:
          AGE:

      All occurrences of the string "Smith" will be replaced with
      the string "Jones".











       66


                                               SEARCHING

      Replacement strings in the Global field will cause the
      string to be replaced in all fields.  Replacement strings in
      a specific field will act only on that field.  For example:

          Global      Washington=Pennsylvania
          NAME:       Smith=Jones
          ADDRESS:
          PHONE:
          AGE:

      In this example the string "Washington" will be replaced by
      the string "Pennsylvania" in every field that Washington is
      found.  (e.g. George Washing in the name field and
      Washington, D.C. in the address field).  The string "Jones"
      will be replaced with "Smith" only if it appears in the
      Name field.  The town of "Smithville" in the Address field
      will not be changed to "Jonesville".

























                                                        67


      3by5 Chapter 5

      Other Update Functions

      Other Update functions include:

      1.  Replace entire contents of a field.  This is indicated
          by using the asterisk (*) to indicate the entire
          contents of the field.  For example:

                 Field     Replacement string
                 Global
                 NAME:     *=John Smith
                 ADDRESS:
                 PHONE:
                 AGE:

          The string "John Smith" will replace all strings in the
          Name field.



      2.  Append string to contents of a field.  The contents of
          the field are indicated by an asterisk (*) and the
          append function by the plus sign (+):

                 Field     Replacement string
                 Global
                 NAME:     *+, Ph.D.
                 ADDRESS:
                 PHONE:
                 AGE:

          The string ", Ph.D." will be appended to names in the
          Name field.  "Jane Smith will become "Jane Smith,
          Ph.D."








       68


                                               SEARCHING

      3.  Insert string at beginning of field.  The contents of
          the field are indicated by an asterisk (*).  The
          concatenation operation by the plus sign (+):


                 Field     Replacement string
                 Global
                 NAME:     Mr. +*
                 ADDRESS:
                 PHONE:
                 AGE:

          The string "Mr. " will be inserted before all names in
          the Name field.  "John Smith" will become "Mr. John
          Smith".



      4.  Erase contents of a field.  This is a specific case of
          the standard search and replace.  The contents of the
          field are indicated by the asterisk (*).  The field is
          replaced with a null (empty) string:

                 Field     Replacement string
                 Global
                 NAME:
                 ADDRESS:  *=
                 PHONE:
                 AGE:













                                                        69


      3by5 Chapter 5

      Running Update

      After you have entered the update strings press <Esc> and
      the following menu will appear:


        _____________________________________________________________________
        >Start< Quit
        Start update
        _____________________________________________________________________

      Press [Q] to return to the Search Key Screen.  Press [S]
      to start the Update process.  The first record that matches
      the search key will be found modified and displayed.  The
      following prompt will appear:


        _____________________________________________________________________
        >Save< Bypass  Auto  Quit
        Save update; continue manual search
        _____________________________________________________________________

      Press [S] and the file will be updated with the modified
      record. 

      Press [B] to bypass (do not save) the modified record and
      continue the search.

      Press [A] to save the updated record and automatically
      modify all other records found.  This feature allows you to
      verify the first few changes, then you can automate the
      procedure.

      Press [Q] to return to the Search Key Screen.








       70

```
{% endraw %}

## CHAP06.DOC

{% raw %}
```



                                                PRINTING

      CHAPTER 6  -  PRINTING
       

      PRINT COMMAND

      _____________________________________________________________________
      Edit  Search >Print< Files  Windows  Utilities  Quit
      Print  Form  Sheet  Direct  Codes  Hardware  Top
      _____________________________________________________________________

      Press [P] in response to the Main Menu to issue any of
      the following commands:


      Print:     Print a group of records.

      Form:      Specify the format for printing records.

      Sheet:     Define page length and margins.
                 Specify how records are split at page
                 boundaries.

      Direct:    Send text or codes directly to the printer.

      Codes:     Define the printer codes for underline and bold.

      Hardware:  Select the printer port.
                 Specify whether a carriage return and new line
                 feed are sent to the printer at the end of each
                 line.
                 Specify whether the program pauses before
                 printing a new page.

      Top:       Set the printer to the top of a page.








                                                        71


      3by5 Chapter 6

      PRINT COMMAND: PRINT MENU 

      _____________________________________________________________________
      >Print< Form Sheet  Direct  Codes  Hardware  Top
      Print records from a file
      _____________________________________________________________________

      The Print Menu's Print Command is used to print a group
      of records to a printer, the screen or a file.  The records
      are printed by record number and may be sorted alpha-
      betically.  To print a group of records by a search key,
      use the Search Command.


      Press [P] to print.  If more than one file is open, the
      program will ask you to select the file for printing.  It
      will then ask for the range of records to print.

      Type the starting record number and press <Enter>.  Then
      type the ending record number and press <Enter>.  

      The program will then ask you:  

      _____________________________________________________________________
      From file FILENAME print records:
      Sort records? (Y/N)
      _____________________________________________________________________

      If you press [N], the program will start printing the
      records in numerical sequence.

      If you pressed [Y] to sort the records, the program will
      begin to sort the records by the first line of text if there
      are no fields in the file.  Otherwise, the program will
      display the names of the fields and ask for primary and
      secondary sort fields.  If you want to sort by one field
      alone, just press <Enter> in response to the secondary field
      prompt.




       72


                                                PRINTING

      Aborting printing:  To abort a printing session, press
      <Esc>.  The program will ask you to confirm the command. 
      Press [Y].







































                                                        73


      3by5 Chapter 6

      FORM COMMAND   

      _____________________________________________________________________
      Print >Form< Sheet  Direct  Codes  Hardware  Top
      Select print format
      _____________________________________________________________________


      This command is used to specify a format for printing
      records.  Formats for printing records are stored as
      standard 3by5 file records and are called PRINT FORMS. 
      In response to the Print Command, press [F] for the Form
      Command.  The program will ask you for the number of
      the file that contains the Print Form:

      ____________________________________________________________________
      File:
      Enter number of file with Print Form.      0 = standard listing
      ____________________________________________________________________


      Type the file number.  The program will then ask for the
      number of the record that contains the Print Form you
      want to use.  Type the record number and press <Enter>. 
      The Print Form will be loaded into memory and any
      records printed will be printed in the format specified by
      that record.

      If you want to reset the program to the standard format
      for printing, type [0] <Enter>.  



      Selecting a Print Form While Searching

      Alternatively, you may load a Print Form while searching. 
      After the record is located, the Search Command Menu will
      be displayed at the bottom of the screen.  Press [L] to
      load the record.



       74


                                                PRINTING

      STANDARD FORM

      The standard Print Format is to print one record after
      another.  The record number is printed before the
      record, all fields are included and the record is followed by
      a blank line.  There is a six line top margin with the name
      of the file on the second line and a six line bottom
      margin.  For example:


































                                                        75


      3by5 Chapter 6

      _____________________________________________________________________

      A:\PROGRAMS.3X5




          4
      3by5 Starter Kit

      Softshell Corp.

      A good way to get started with free-text management systems.  
      Features include five variable length fields per record, sort by
      any field and the 3by5 Reference Manager.

          5
      3by5

      Softshell Corp.

      3by5 is an information management program that offers speed, 
      simplicity and versatility in entering, indexing and retrieving 
      free-text and structured data.  Up to 26 variable length fields 
      per record are allowed.

          6
      3by5 Plus

      Softshell Corp.

      With the release of 3by5 Version 5.0, the features of 3by5 Plus 
      have been incorporated into 3by5, and 3by5 Plus is no longer 
      published.





      _____________________________________________________________________


       76


                                                PRINTING

      Many other formats are possible.  The formats are stored
      in standard 3by5 Print Form Files.  These files have the
      extension "PFM".  Your 3by5 master diskette has a file
      FORMS.PFM with sample Print Forms.  The forms will be
      reviewed as an introduction to printing with 3by5.  Once
      you load a Print Form into memory, you may close the file
      that contained the Print Form.


      Print Forms define the way in which text will be printed. 
      Any text in the form will be printed.  The "@" symbol is
      used as an instruction for printing specific information
      (e.g. fields, field names, file names, etc.)





























                                                        77


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 1

      _____________________________________________________________________
      @A<                                  
       



      _____________________________________________________________________


      Record one of FORMS.PFM contains the simplest Print
      Form. It is designed for printing from a file with no fields
      or at most one field (e.g. file PROGRAMS.3X5).

      The "@A" on the first line indicates that the contents of
      field A will be printed.  The field letter must be in upper
      case for the contents to be printed.  In this case file
      PROGRAMS.3X5 has no fields and the entire record is
      considered to be field A.

      The "<" symbol indicates the carriage return mark that
      results from pressing the <Enter> key.

      If a field is longer than one line, the following lines of
      print will be adjusted downward.  

      This Print Form will result in one record being printed
      after another.  Assuming that the Sheet Command settings
      are unchanged, there will be a top margin of six blank
      lines and a bottom margin of six blank lines.

      No spaces will be printed between records.  

      The results of using this FORM with file PROGRAMS.3X5
      are shown on the next page.

      Note that there is a standard top margin of 6 lines and a
      standard bottom margin of 6 lines.  Since no headers or
      footers were defined, there is no text in either the top or
      bottom margins.

       78


                                                PRINTING


      _____________________________________________________________________






      3by5 Starter Kit

      Softshell Corp.

      A good way to get started with free-text management systems.  
      Features include ten variable length fields per record, sort by
      any field and the 3by5 Reference Manager.
      3by5

      Softshell Corp.

      3by5 is an information management program that offers speed
      simplicity and versatility in entering, indexing and retrieving 
      free-text and structured data.  Up to 26 variable length fields 
      per record are allowed.
      3by5 Plus

      Softshell Corp.

      With the release of 3by5 Version 5.0, the features of 3by5 Plus 
      have been incorporated into 3by5, and 3by5 Plus is no longer 
      published.





      _____________________________________________________________________






                                                        79


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 2    (Blank lines between records)

      _____________________________________________________________________
      @A<
      <




      _____________________________________________________________________

      Record two of FORMS.PFM contains a record format that
      is very similar to record one of FORMS.PFM.  The only
      difference is that there is a carriage return on line two. 
      This will result in a blank line being printed after each
      record.

      The results of using this FORM with file PROGRAMS.3X5
      are shown on the next page.

      In this case the blank line with a carriage return in the
      form record causes a blank line to be printed between
      records.  If there were two blank lines in the Print Form
      record, there would be two blank lines between records in
      the printout.

















       80


                                                PRINTING

          
      _____________________________________________________________________







      3by5 Starter Kit

      Softshell Corp.

      A good way to get started with free-text management systems.  
      Features include ten variable length fields per record, sort by
      any field and the 3by5 Reference Manager.

      3by5

      Softshell Corp.

      3by5 is an information management program that offers speed,
      simplicity and versatility in entering, indexing and retrieving 
      free-text and structured data.  Up to 26 variable length fields 
      per record are allowed.

      3by5 Plus

      Softshell Corp.

      With the release of 3by5 Version 5.0, the features of 3by5 Plus 
      have been incorporated into 3by5, and 3by5 Plus is no longer 
      published.






      _____________________________________________________________________
                   

                                                        81


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 3      (Record numbers)

      _____________________________________________________________________
      RECORD NUMBER: @#
      @A<
      <



      _____________________________________________________________________
       
      Record three of FORMS.PFM contains a record format that
      is very similar to record two of FORMS.PFM.  The only
      difference is that the first line contains the text "RECORD
      NUMBER:" and is followed by the symbol "@#".  The text
      "RECORD NUMBER:" will be printed on the line before
      each reference and will be followed by the number of the
      record.  The "@#" symbol can appear anywhere on a Print
      Form (except the header or footer). 

      The results of using this FORM with file PROGRAMS.3X5
      are shown on the next page.




















       82


                                                PRINTING

             
      _____________________________________________________________________






      RECORD NUMBER:   4
      3by5 Starter Kit

      Softshell Corp.

      A good way to get started with free-text management systems.  
      Features include ten variable length fields per record, sort by
      any field and the 3by5 Reference Manager.

      RECORD NUMBER:   5
      3by5

      Softshell Corp.

      3by5 is an information management program that offers speed,
      simplicity and versatility in entering, indexing and retrieving 
      free-text and structured data.  Up to 26 variable length fields 
      per record are allowed.

      RECORD NUMBER:   6
      3by5 Plus

      Softshell Corp.

      With the release of 3by5 Version 5.0, the features of 3by5 Plus 
      have been incorporated into 3by5, and 3by5 Plus is no longer 
      published.




      _____________________________________________________________________
       

                                                        83


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 4      (Headers)

      _____________________________________________________________________
      @.<
      @.RECORDS FROM FILE: @*<
      @.< 
      @.< 
      @.< 
      @.< 
      REC# @#<
      @A< 
      -------------------------------------------------------------------<
      _____________________________________________________________________

      Record four of FORMS.PFM contains a record format that
      is similar to record three of FORMS.PFM.  The differences
      are: 

      Six header lines have been added.  The symbol "@." at the
      start of a line indicates a header or footer.  If the
      "@." symbol is at the top of a Print Form, it indicates a
      header.  If it is at the bottom of a Print Form, it
      indicates a footer.

      The second line of the Print Form is a header line.  It
      contains the text "RECORDS FROM FILE:", followed by the
      symbol "@*".  The symbol "@*" indicates that the name of
      the file being printed should be included at that location.

      Line nine of the Print Form has a dashed line.  It will
      separate records.

      The results of using this FORM with file PROGRAMS.3X5
      are shown on the next page.

      A header may contain any text you want to print.  It is
      not necessary to include all the lines of a header.  If you
      do not specify the text for a header line, it will be printed
      as a blank line.



       84


                                                PRINTING

             
      _____________________________________________________________________

      RECORDS FROM FILE: A:\PROGRAMS.3X5




      REC#    4
      3by5 Starter Kit

      Softshell Corp.

      A good way to get started with free-text management systems.  
      Features include ten variable length fields per record, sort by
      any field and the 3by5 Reference Manager.
      -------------------------------------------------------------------
      REC#    5
      3by5

      Softshell Corp.

      3by5 is an information management program that offers speed,
      simplicity and versatility in entering, indexing and retrieving 
      free-text and structured data.  Up to 26 variable length fields 
      per record are allowed.
      -------------------------------------------------------------------
      REC#    6
      3by5 Plus

      Softshell Corp.

      With the release of 3by5 Version 5.0, the features of 3by5 Plus 
      have been incorporated into 3by5, and 3by5 Plus is no longer 
      published.
      -------------------------------------------------------------------


      _____________________________________________________________________



                                                        85


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 5      (Headers and Footers)

      _____________________________________________________________________
      @.<
      @.RECORDS FROM FILE: @*<
      @.<
      @.<
      @.<
      @.<
      @*                         REC# @#
      @A<
      -------------------------------------------------------------------<
      @.<
      @.*****************************************************************
      _____________________________________________________________________


      Record five of FORMS.PFM contains a record format that
      is similar to record four of FORMS.PFM.  The first two
      footer lines have been defined:  the first footer line is
      blank and the second contains a row of asterisks.  

      The results of using this Print Form with file
      PROGRAMS.3X5 are shown on the next page.

      As with a header, it is necessary to only define those lines
      of a footer that you want to contain text (or other
      characters such as the asterisks above).

      Note that in this example, the file name and record number
      are printed before each record.  It is shown just to
      demonstrate that a file name can be placed anywhere
      within a record and anywhere on a page.  The record
      number was intentionally moved to the right side of the
      page.







       86


                                                PRINTING

      _____________________________________________________________________

      RECORDS FROM FILE A:\PROGRAMS.3X5




      A:\PROGRAMS.3X5                                         REC#    4
      3by5 Starter Kit

      Softshell Corp.

      A good way to get started with free-text management systems.  
      Features include ten variable length fields per record, sort by
      any field and the 3by5 Reference Manager.
      -------------------------------------------------------------------
      A:\PROGRAMS.3X5                                         REC#    5     
      3by5

      Softshell Corp.

      3by5 is an information management program that offers speed,
      simplicity and versatility in entering, indexing and retrieving 
      free-text and structured data.  Up to 26 variable length fields 
      per record are allowed.
      -------------------------------------------------------------------
      A:\PROGRAMS.3X5                                         REC#    6
      3by5 Plus

      Softshell Corp.

      With the release of 3by5 Version 5.0, the features of 3by5 Plus 
      have been incorporated into 3by5, and 3by5 Plus is no longer 
      published.
      -------------------------------------------------------------------



      ********************************************************************
      _____________________________________________________________________


                                                        87


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 6      (Multiple Fields)

      _____________________________________________________________________
      @.<         
      @.@*<       
      @.<         
      @.<         
      @.<         
      @.<         
      @a       @A              REC# @#<
      @b       @B<
      @c       @C<
      <
      @d       @D<
      <
      _____________________________________________________________________

      Record 6 of FORMS.PFM is designed for use with file
      ADDRESS.3X5 of your 3by5 master diskette.  ADDRESS.3X5
      has four fields:

        A:  Name field
        B:  Address field
        C:  Phone number(s)
        D:  Comments

      In this example the name of the file will be printed in the
      second line of the top margin.

      The "@a" symbol indicates that the name of the A field
      should be printed, while the "@A" symbol indicates that the
      contents of the A field should be printed.  If the "@"
      symbol is followed by a lower case letter, the name of a
      field is printed; if it is followed by an upper case letter,
      the contents of the field are printed.

      The single carriage return on line 10 causes a blank line to
      be printed between the telephone field and the comments
      field.  If a field contains several lines, the following lines
      of print will be adjusted downward.  


       88


                                                PRINTING

      Record six of FORMS.PFM has the following Sheet
      Command settings:

        Page Length:   66
        Left margin:   11
        Right margin:  76
        Top Margin:     6
        Bottom margin:  6
        Conditional:    1

      The Sheet Command settings were entered into the record
      by using the editor's Sheet Command function key
      <Shift-F8>.  See page 32 for more information.

      The Conditional New Page value of 1 indicates that if
      there is at least one line of text at the bottom of a page
      (excluding the footer lines), the next record will be printed
      on the current page and continued, if necessary, on the
      following page.  This minimizes the number of pages
      required to print a group of records, but may result in
      some records being split across page boundaries.  

      If records 1 through 10 from file ADDRESS.3X5 are printed
      using this Print Form, record 6 will be split across page
      boundaries.

      Sheet Command settings entered into a Print Form using
      the editor will over-ride the default settings defined by the
      Print-Sheet Command.













                                                        89


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 7      (Conditional New Page)

      _____________________________________________________________________
      @.<         
      @.@*<       
      @.<         
      @.<         
      @.<         
      @.<         
      @a       @A              REC# @#<
      @b       @B<
      @c       @C<
      <
      @d       @D<
      <
      _____________________________________________________________________

      Record 7 of FORMS.PFM is designed for use with file
      ADDRESS.3X5 of your 3by5 master diskette.  It has the
      same format as record 6, except that it has the following
      Sheet Command settings:

        Page Length:   66
        Left margin:   11
        Right margin:  76
        Top margin:     6
        Bottom margin:  6
        Conditional:    0


      The Conditional New Page value of 0 indicates that if
      there must be enough room on a page for a record to be
      printed, or the program will skip to the next page and
      print the current record.  This prevents records from being
      printed across page boundaries, but may result in wasted
      space at the bottom of each page.

      If records 1 through 10 from file ADDRESS.3X5 are printed
      using this Print Form, record 6 will be printed on a new
      page.


       90


                                                PRINTING

      PRINT FORM: EXAMPLE 8      (Mailing labels)

      _____________________________________________________________________
      @A<
      @B


      _____________________________________________________________________

      Record 8 of FORMS.PFM is designed for use with file
      ADDRESS.3X5 of your 3by5 master diskette.  It will print
      mailing labels containing the name and address fields.  As
      noted in Example 6,  ADDRESS.3X5 has four fields:

        A:       Name field
        B:       Address field (street, city, state, zip, etc.)
        C:       Phone number(s)
        D:       Comments

      Record 8 has the following Sheet Command parameters that
      were set while editing the record:

        Page length        =    6    (assumes five lines per
                                     label and one in between)
        Left margin        =    10
        Right margin       =    50
        Top margin         =    0
        Bottom Margin      =    0
        Conditional        =    6    (one record per label)


      The above settings will eliminate the printing of a header
      or footer (top and bottom margins = 0).  Each label will be
      treated as a page (Conditional New Page = Page Length). 
      See pages 32 and 96 for information on using the Sheet
      Command.

      The format of the record is simple.  On line one the name
      of the person in field A will be printed.  On line two, the
      address will begin.  It may be up to 5 lines long.  One
      record is printed per page (label).

                                                        91


      3by5 Chapter 6

      PRINT FORM: EXAMPLE 9      (Printing Person Fields)

      _____________________________________________________________________
      Last_name, First_name:       @A<
      First_name Last_name:        @A1<
      First_name only:           @A2<
      Last_name only:            @A3<
      <
      _____________________________________________________________________

      Record 9 of FORMS.PFM is designed for use with  record
      6 of file ADDRESS.3X5 of your 3by5 master diskette. 
      Record 6 of ADDRESS.3X5 has the name Wilkins, Robert P.
      in the first field which is defined as a Person Field.

      The contents of a Person Field are usually entered:

        Last_name, First_name Middle_name or Middle_initial.

      If the field letter is not followed by a digit, the contents
      of the field are printed unchanged.  If the field letter is
      followed by the digit 1, the contents of the field are
      printed First_name Middle_name or Middle_intitial
      Last_name.  If the field letter is followed by the digit 2,
      only the first name is printed.  If the field letter is
      followed by the digit 3, only the last name is printed.

      If Record 9 of FORMS.PFM is used as the Print Form for
      printing Record 6 of ADDRESS.3X5, the following record
      will be printed:

      _____________________________________________________________________
      Last_name, First_name:      Wilkins, Robert P.
      First_name Last_name:       Robert P. Wilkins
      First_name only:          Robert
      Last_name only:           Wilkins
       
      _____________________________________________________________________

                           


       92


                                                PRINTING

      APPENDING FIELDS

      Sometimes you may want to append several fields
      together.  For example, you may have a file with the
      following fields:

        A Last name
        B First name
        C Street address
        D City
        E State
        F ZIP Code

      You can append the last name and first name fields
      together to get one name.  Similarly the City, State and
      Zip Code fields can be appended.

      The rule for appending fields is as follows:
        
      After the initial "@" symbol, there is a field letter.  This
      is followed immediately by another "@" which may be
      followed by a character to be printed or by another field
      name.  

      For example:

         @B@ @A            will print the first name, a space,
                           and the last name.

         @D@ @E@ @F        will print the city, a space, the state,
                           a space, and the ZIP Code.


      The ability to append fields has been added to 3by5 at the
      request of users who sort 3by5 records by ZIP Code or
      state and want to be able to print labels with the city,
      state and ZIP Code on one line.





                                                        93


      3by5 Chapter 6

      PRINT FORM CODES

      3by5 used the "@' symbol to signify a Print Form
      command.  The following codes may be used:

      @A  designates that the contents for field A will be printed
          at the location of the "@" symbol.  The field must be
          specified as an upper case letter (i.e. A - Z).

      @a  designates that the name of the field will be printed at
          the location of the "@"     
           (i.e. a - z).

      @#  designates that the current record number will be
          printed at the location of the "@".  The "#" symbol
          may be followed by a "-" sign to specify that the
          record number will be left justified.
           
          A "0" (zero) designates zero filling of any blank
          spaces. 
           
          Finally, a digit from 1 to 9 may be used to specify the
          number of spaces in the record field.  The rules are
          those used by the C language function printf(). 

      @*  The current file name will be printed

      @.  The line is a header or footer

      @$  The sheet format control line was used in Version 4.0
          Print Forms to set margins for printing. With the
          release of Version 5.0, Print Form margins are set
          using the Sheet Command while editing (see page 32).

          The sheet format control line created by earlier
          versions of 3by5 can still be read by 3by5 V5.0.  This
          command can appear only as the first two characters
          of the first line.  It must be followed by the page
          length, left margin, right, top margin, bottom margin,
          and Form Parameter (Y or N).  For example:


       94


                                                PRINTING

                @$ 66 6 6 15 90 Y

          Each parameter is separated by one or more spaces. 
          The order of the parameters is the same as that used
          by the Sheet Command. 

          In the above example, the page length is set to 66, the
          top and bottom margins to 6 lines each, the left
          margin to column 15 and the right margin to column
          90.  The Form Parameter set to Y indicates that each
          record will be printed on a separate page.

      @=  This symbol should appear at the end of a line.  It
          indicates that the contents of the line are to be
          printed on the same line as the form line.  The text
          will not be adjusted in an upward or downward
          direction.

      @-  This symbol should appear at the end of a line.  It
          indicates that the contents of the line should be moved
          up to the last printed line of text.
           


      \xxx A back slash followed by three digits is used to send
      a printer code.  The value of the three digits is sent to
      the printer. For example, \027 is sent as 27 (the escape
      code).
           
          












                                                        95


      3by5 Chapter 6

      SHEET COMMAND

      _____________________________________________________________________
      Print  Form >Sheet< Direct  Codes  Hardware  Top
      Set sheet margins, pause and form options
      _____________________________________________________________________


      The Sheet Command is used to specify the number of lines
      per page, the left, right, top and bottom margins.  It also
      specifies how records are split at page boudaries. 

      Press [S] to specify the Sheet Command.  The following
      screen will be displayed:

        _____________________________________________________________________


        Page length:   (0  - 66)               66
        Left margin:   (1  - 110)              11
        Right margin:  (11 - 120)              76
        Top margin:    (0  - 25)                6
        Bottom margin: (0  - 25)                6
        Conditional:   (0  - 66)                1




        <Esc> Cancel   <F10> save
        _____________________________________________________________________


      Page length is the length of the page in lines.  A standard
      8.5 x 11 inch page has 66 lines (6 lines per inch).  A 3by5
      card has 18 lines per page.

      Left Margin is the left margin for printing.

      Right Margin is the right margin for printing.  Any
      attempt to print past the right margin results in a carriage
      return and new line feed.  

       96


                                                PRINTING

      Top Margin is the number of lines the printer will leave at
      the top of a page before printing records.  

      Bottom Margin is the number of lines the printer will leave
      at the bottom of the page.

      Conditional refers to Conditional New Page.  It defines how
      the printer splits records at page boundaries.  The
      Conditional New Page is the number of lines that must be
      present at the bottom of the page before the program will
      start printing a record.  

      If the Conditional New Page is greater than or equal to
      the page length, each record is printed as a separate
      page.  For printing 3x5 cards or large records the Page
      Length should be set to 18 lines and the Condition New
      Page set to 18.  If you are printing references on standard
      8.5 x 11 inch paper, most likely you will want to print
      several records on a page, in which case the Conditional
      New Page should be set between 0 and 6.

      If the Conditional New Page is set to 0 (zero) and there
      are not enough lines remaining on the current page to
      print the entire contents of the next record, the program
      will skip to the next page.

      Type in your new printer parameters and press enter after
      each value.  You may use the Up and Down Arrow keys to
      move from one value to another.  

      When you are finished, press <F10> to save the new
      values.  Press <Esc> to cancel any values you have entered.










                                                        97


      3by5 Chapter 6

      DIRECT COMMAND

      _____________________________________________________________________
      Print  Form  Sheet >Direct< Codes  Hardware  Top
      Type text or printer codes directly to printer
      _____________________________________________________________________

      The Direct Command allows you to type a line of text and
      have it printed directly to the printer after you press
      <Enter>.  

      Codes may be inserted by using a back slash followed by
      three decimal digits for the code.  For example, the line

        \027\071<Enter> 

      will send codes 27 and 71 to the printer and will turn on
      bold printing on an IBM or Epson dot matrix printer.

      Press <Esc> when you are finished sending text or codes
      directly to the printer.





















       98


                                                PRINTING

      CODES COMMAND

      _____________________________________________________________________
      Print  Form  Sheet  Direct >Codes< Hardware  Top
      Set printer codes for underline and bold
      _____________________________________________________________________

      The Codes Command allows you to specify the printer
      codes for printing bold text and for underlining.  3by5 bold
      and underline commands are set for the IBM or Epson dot
      matrix printer.  If you have another printer, you can
      specify the codes that will be sent to the printer for
      printing bold text and for underlining.  

      Press [D] and the following prompt will appear:

      _____________________________________________________________________
      Bold on: \027\071
      Type command sequence and press <Enter>.
      _____________________________________________________________________

      This is the command sequence to start bold printing on
      IBM and Epson dot matrix printers.  You may type in any
      code sequence up to 20 characters in length.  Each code
      character is formed by a "\" followed by three decimal
      digits. 

      After you press <Enter>, the program will prompt you for
      the command sequence to stop bold printing:  "Bold off:
      \027\072"

      You may type a new command sequence or press <Enter> to
      retain the current command sequence.


      After you press <Enter>, the program will prompt you for
      the command sequence to start underlining:  
      "Underline on: \027\045\001"

      You may type a new command sequence or press <Enter> to
      retain the current command sequence.

                                                        99


      3by5 Chapter 6

      After you press <Enter>, the program will prompt you for
      the command sequence to stop underlining:  
      "Underline off: \027\045\000"

      You may type a new command sequence or press <Enter> to
      retain the current command sequence.

      See your printer manual to determine the proper codes for
      bold printing and underlining.

































       100


                                                PRINTING

      HARDWARE COMMAND

      _____________________________________________________________________
      Print  Form  Sheet  Direct  Codes >Hardware< Top
      Set hardware parameters
      _____________________________________________________________________


      The Printer Hardware Command is used to specify the printer
      port (0 - 3), whether a new line feed should be transmitted to
      the printer after each carriage return, and whether the printer
      should pause after each page.  The default printer port is #1
      and the default end of line is to send a carriage return and
      new line feed. 


      Press [H] for the Hardware Command.  The program will
      display the following:

      _____________________________________________________________________
      Printer 1    New Line Feed  Y    Pause N
      Printer number (0=Screen  1=Printer 1  2=Printer 2  3=Print File
      _____________________________________________________________________



      The default printer is number 1.  If you want to direct
      printing to the screen, just type [0] and all printing will
      be directed to the screen.  If you want to print to an
      ASCII print file, press [3].  The program will ask for the
      number of the open file to which printing will be directed. 
      Select a non-3by5 file.    

      The program will move to the New Line Feed prompt.  If
      your printer performs a new line feed after each carriage
      return, type [N] in response to the New Line Feed prompt.

      The program will move to the Pause prompt.  Press [Y] if
      you want the printer to pause after each page is printed. 
      This will allow you to insert another sheet of paper.


                                                       101


      3by5 Chapter 6

      TOP COMMAND

      _____________________________________________________________________
      Print  Form  Sheet  Direct  Codes Hardware >Top<
      Set printer to top of page
      _____________________________________________________________________

      The Top Command is used to direct 3by5 that you are
      setting the printer to the top of a new page.  It is used if
      the paper is not aligned properly, if you change paper
      while printing, or if you abort printing and want to start
      on a new page.

      Press [T] and the program will prompt you:

      _____________________________________________________________________
      Set printer to top of page.
      Press <Enter> to continue.
      _____________________________________________________________________

      Manually position the paper to the top of the page, and
      press <Enter>.




















       102


                                                PRINTING

      This page reserved for notes.









































                                                       103


      3by5 Chapter 6

           
          








































       104

```
{% endraw %}

## CHAP07.DOC

{% raw %}
```







      CHAPTER 7  -  FILE COMMANDS

      FILES COMMAND MENU


        _____________________________________________________________________
        Edit  Search  Print >Files< Utilities  Quit
        Open  Close  Records  List  Dir  Maintenance  Fields  Status
        _____________________________________________________________________


      The Files Command Menu is entered from the Main Command
      Menu by pressing [F].  The Files Command Menu will appear:

        _____________________________________________________________________
        >Open< Close  Records  List  Dir  Maintenance  Fields  Status 
        Open file
        _____________________________________________________________________


      The Open Command lets you open a 3by5 file or any ASCII,
      WordStar or WordPerfect file.  Only 3by5 files may be edited
      from the 3by5 program.  However, ASCII, WordStar and
      WordPerfect files may be imported, into a 3by5 file. 
      Alternatively, 3by5 records may be exported to ASCII, WordStar
      and WordPerfect files.

      The Close Command is used to close an open file.

      The Records Command is used to copy and move records from
      one file to another.  It is also used to erase records within a
      file.  The source and destination files may be 3by5, ASCII,
      WordStar or WordPerfect files.  If the source file is a 3by5
      file, you may sort the records before transferring them to
      another file.

      The Records Command can also be used to sort and copy/print
      records marked during a search.





                                                       105


      3by5 Chapter 7

      The List Command allows you to determine what files are on a
      disk.  You may use the List Command to open a file, rename
      it, or erase it from the disk.  The List Command can also be
      used to navigate through directories.

      The Dir Command is used to change the current directory
      (and/or disk drive), make or remove directories, and list
      subdirectories.

      The Maintenance Command is used to index a 3by5 file that
      has a damaged or deleted index file, or pack a 3by5 file that
      has deleted records or wasted space.

      The Fields Command is used to indicate which fields in a
      record will be copied to another record in a different file or
      redefine the fields in a file.

      The Status Command is used to display additional information
      about currently open files (e.g file size, index density.























       106


                                           FILE COMMANDS

      Open files are assigned a number from 1 to 5:  

        _____________________________________________________________________
        3by5 Files
             Open Files
        1 
        2
        3
        4
        5
          
        Dir: A:\ 
          
          
          
          
          
        >Open<  Close  Records  List  Dir  Maintenance  Fields  Status
        Open file
        _____________________________________________________________________


      File numbers are used to refer to the open files and help
      you avoid typing the name of the file each time you want
      to issue a command.

      After a file is opened, the file drive, directory path, file
      name and extension will be displayed.  














                                                       107


      3by5 Chapter 7

      3by5 FILE TYPES

      3by5 stores your text in files on hard disk or diskette. 
      3by5 files come in pairs:  a SOURCE FILE that contains
      text and structured data, and a companion INDEX FILE. 
      The various types of files are designated by the file
      extension:


      File Type                 Source         Index
                                Extension      Extension

      Standard 3by5             3X5            MAP

      Letter                    LET            IET

      Document                  DOC            IOC

      Macro                     MAC            IAC

      Print Form                PFM            IFM

      Reference                 REF            IEF

      Reference Style           RFS            IFS

      3by5 Program              PRG            IRG

      ASCII text                TXT            (no index)

      Print                     PRN            (no index)

      Microsoft Word            MW             (no index)

      Wordstar                  WS             (no index)

      WordPerfect               WP             (no index)





       108


                                           FILE COMMANDS

      FILES-OPEN Command

        _____________________________________________________________________
        >Open< Close  Records  List  Dir  Maintenance  Fields  Status
        Open file
        _____________________________________________________________________


      You may open up to five 3by5 or other files at one time. 
      When a 3by5 file is opened, its companion index file is also
      opened.  The index file is not included as one of the five files
      that may be opened.

      Press [O] to open a file, and the program will prompt you to
      enter the name of the file to open.

      Type in the name of the file that you want to open.  If the
      file is on a disk drive that is not the default DOS drive,
      include the disk drive using standard DOS file specification
      (e.g. B:FILE1).  If the file is in a directory other than the
      default directory, include the directory path.  For example:

         C:\LEVEL1\LEVEL2\FILENAME

      If you enter a file name without an extension, the program will
      assume that the file is a 3by5 file and append the extension
      "3X5".  

      If the file is NOT a 3by5 file and does not have an extension,
      place a "." (period) after the file name to indicate that the file
      has no extension and is not a 3by5 file.

      For example, "FILE1" will open the file FILE1.3X5, while
      "FILE1." will open the file FILE1.  "FILE1.WS" will open the
      file FILE1.WS.

      If the file is found, it will be opened.  If the file is not a
      standard 3by5 file, the program will ask you for the file type
      (ASCII, WordStar or Word Perfect). 

      The List Command may also be used to open files.

                                                       109


      3by5 Chapter 7

      BUILDING A 3by5 FILE

      If you attempt to open a file that does not exist, you will be
      asked whether you want to build the file:


        _____________________________________________________________________
        Unable to open file.  Do you want to build the file? (Y/N). Y
        _____________________________________________________________________


      Press [Y] to build the file.

      If one or more files are open, the program will prompt
      you:

        _____________________________________________________________________
        File:  filename
        Build like file (0-5):         0 = new file
        _____________________________________________________________________


      This prompt allows you to build a file similar to one that
      is already open.  The file parameters (e.g. file type, record
      length, number and name of fields) of an open file may be
      used to build the new file.  You may modify any of the
      parameters. 

      If you want to use an open file as a model for building a
      new file, type the number of the file.  












       110


                                           FILE COMMANDS

      If not, press [N], and the program will display the file
      types and ask you to specify a type:

        _____________________________________________________________________


        File Types:

        A  3by5
        B  Letter  
        C  Document
        D  Reference
        E  Reference Style
        F  Print Form
        G  Macro
        H  Program
        I  Mark
        J  ASCII, WordStar, WordPerfect



        Select file type: A
        _____________________________________________________________________

                       
      If the file is a non-3by5 file, see page 123.

      If the file is a Letter, Document, Print Form or Program
      File, see page 116.

      If you select a Standard 3by5, Reference, Reference Style,
      or Macro file, the program will ask you to define the
      fields.  The following screen will be displayed:









                                                       111


      3by5 Chapter 7


        _____________________________________________________________________
        3by5 Files
             Open Files
        1 
        2
        3
        4
        5
           FILENAME
           Name      Type    Format/Mask     Name      Type    Format/Mask
        A                                 N
        B                                 O
        C                                 P
        D                                 Q
        E                                 R
        F                                 S
        G                                 T
        H                                 U
        I                                 V
        J                                 W
        J                                 X
        L                                 Y
        M                                 Z

        Field Name:
        <Esc> Cancel  <F10> Save  <F3> Delete Field  <F4> Insert Field
        _____________________________________________________________________


      A field name may be from 0 to 8 characters long.  Type
      the name of the field, and press <Enter>.  The program
      will prompt for the field type:

        _____________________________________________________________________
        >Free< Line  Number  Date  Time  Mask  Person
        Free-form text
        _____________________________________________________________________




       112


                                           FILE COMMANDS

      The field types are:

      FREE-TEXT: You can type any text in this field.  Multiple
      lines of text may be entered.


      LINE:  You may type only one line of text in this field. 
      The program will prompt for the maximum number of
      characters in the field.

      NUMBER:  This field is used to enter only numeric data or
      blank spaces.  If you select this field type, the program
      will ask for the field length (up to 24 characters).  After
      you specify the field length, the program will ask for the
      number of spaces to the right of the decimal place.  Enter
      0 (zero) if the number is an integer.

      DATE:  This field is used to enter dates in a fixed format. 
      If you select this field type, the program will ask for the
      date mask.  The date mask is entered using dd, mm, mmm,
      yy, and yyyy characters.  For example:
                 mm/dd/yy            01/12/52
                 mm/dd/yyyy          01/12/1952
                 mm-dd-yy            01-12-52
                 dd.mm.yyyy          12.01.1952
                 mmm-dd-yyyy         Jan-12-1952

      The date field may be up to 15 characters long.


      TIME:  This field is used to enter time in a fixed format. 
      If you select this field type, the program will ask for the
      time mask.  The time mask is entered using hh, mm, and ss
      characters.  For example:
                 hh:mm               15:30
                 hh:mm:ss            01:20:33

      The time field may be up to 15 characters long.




                                                       113


      3by5 Chapter 7

      MASK:  This field type is used to enter numeric and
      alphanumeric data in a fixed format.  The # character
      specifies that a number (0 to 9) may be entered.  The ?
      character specifies that any alphanumeric character may be
      entered.  The ! character specifies that any alphabetic
      character will be converted to upper case (other characters
      are not converted).


      For example:
                 ###-###-####        123-345-4567
                 IBM CODE: ??;###    IBM CODE: AD;3423
                 !#! #!#             N9B 3P4

      The mask field may be up to 15 characters long.


      PERSON:  This field is used to enter a person's name.  The
      name is entered in the format:  

          Last_name, First_name, Middle_name.
          Last_name, First_name, Middle_initial.
          Last_name, First_initial, Middle_name.
          Last_name, First_initial, Middle_initial.

      This format allows you to sort on this field by last name,
      then first name.  When the field is printed, you may
      specify the format in which the name is to be printed. 
      For example:

          Shell, John M.
          Shell, J.M.
          John M. Shell









       114


                                           FILE COMMANDS

      Multiple Fields

      After you define a field, the program will move you to the
      next field.  Use the Up and Down Arrow keys to move to
      any previously defined field to modify it.

      After you are finished defining fields, press <F10>.


      You do not have to define any fields in a file.  A file
      without fields can be used to store text notes, print forms
      or memos.






























                                                       115


      3by5 Chapter 7

      Record Size

      The next step in building a file is defining the record size. 
      The following menu will be displayed:

        _____________________________________________________________________
        2x4 >3x5< 4x6  5x7  Page  VLR  Other
        512 bytes
        _____________________________________________________________________


      With this menu you define the size of each record in the
      file.  This is an important number.  Once you specify it
      for a file, it cannot be changed.


      The following standard, fixed length record sizes are
      available:

          2x4          256  bytes
          3x5          512  bytes
          4x6         1024  bytes
          5x7         2048  bytes
          Page        4800  bytes


      The default record size is 512 bytes.  This number of
      characters is sufficient for most references and addresses.

      The standard variable length record size is 256 bytes
      (minimum record length with a maximum length of 4800
      bytes).  See page 143 for more information on variable
      length records.









       116


                                           FILE COMMANDS

      Other (User defined record lengths and index densities)

      If you select Other, the program will ask whether the
      records are fixed length or variable length.  Select one or
      the other.  If you select fixed length, the program will ask
      for the record size (all records will be the same size).  If
      you select variable length records, the program will ask for
      the minimum record length (all records will be at least as
      long as the minimum record length - see page 143 for more
      information).
































                                                       117


      3by5 Chapter 7

      Index Density

      Next, the program will prompt you for the Index Density. 
      This is a number between 1 and 5 and determines the size
      of the index for each record.  Larger records should have
      higher index densities.  The relationship between Index
      Density and index record size is:
        
                 Index               Index Size per
                 Density             Record (bytes)

                    1                     32
                    2                     64
                    3                    128
                    4                    256
                    5                    512

      You may change the index density of a file by re-indexing
      it.  The program will ask for the new Index Density.  The
      most efficient Index Density for a file is dependent upon
      many factors.  You can experiment with the Index Density
      for a particular file to find which value gives you the
      fastest searches.

      The program will then build the 3by5 source file and its
      companion index file.
















       118


                                           FILE COMMANDS

      OPENING A NON-3by5 FILE

      You may open and search (but not edit) a standard ASCII
      text file or a WordStar or WordPerfect file.  If the
      program opens the file and finds that it is not a standard
      3by5 file, it will ask you for the file type:

        _____________________________________________________________________
        FILE TYPE:  1.ASCII  2.WordStar  3.WordPerfect
        _____________________________________________________________________

      Press [1], [2] or [3] to indicate the file type.

      If the file is not a dBASE file, the program will then ask
      whether the file is a numbered reference file.  If you type
      [N] the following questions will be asked:


























                                                       119


      3by5 Chapter 7

      The program will first ask you for record delimiter (i.e. the
      character or pair of characters that defines the end of a
      record):
        _____________________________________________________________________
        RECORD DELIMITER: 1.<CR><CR>  2.<CR>  3.Form Feed  4.Other
        _____________________________________________________________________


      [1] Specifies that each record is separated by two carriage
          returns (one blank line). Each record is equivalent to a
          paragraph of text.

      [2] Specifies that each record is separated by one carriage
          return.  Each record is equivalent to a line of text.

      [3] Specifies that the each record is delimited by a Form
          Feed.  Each record is equivalent to a page of text. 

      [4] Specifies that a special character is used to delimit
          records.  For example:


          Name:  John Jones
          DOB:        09/23/45
          @
          Name:  John Smith
          DOB:        01/12/52
          @

          The character "@" had been defined as the Record
          Delimiter,  each line from the name line to the line
          with "@" will be considered a block of text (record). 










       120


                                           FILE COMMANDS

      After the record delimiter is specified, the program will
      then ask:

        _____________________________________________________________________
        FIELD DELIMITER: 0.None  1.<CR>  2.PRN  3.MailMerge  4.Other
        _____________________________________________________________________


      [0] Indicates that there are no fields in the record.

      [1] Indicates that each field is separated by a carriage
          return.

      [2] Indicates that the file is a 1-2-3 PRN file in which
          fields are separated by commas and text field are
          enclosed in quotation marks.  This type of record may
          be generated in Basic by using the Write command.

      [3] Indicates that each field is enclosed in quotation marks
          and separated by a comma.

      [4] Indicates another character is used to separate fields. 
          If you select this option, the program will prompt you
          for the character to be used to separate fields.


















                                                       121


      3by5 Chapter 7

      Numbered Reference Files 

      If you specify that the file is a Numbered Reference File,
      the program will ask you whether there are less than 100
      references in the file.  The answer to this question is used
      to determine spacing of reference numbers when references
      are written to the file.

      Next the program will ask whether there is a blank line
      between references.  Type [Y] or [N] depending on the file.

      Then the program will ask for the starting reference
      number.  This question allows you to start with a reference
      number other than one when appending references to an
      already existing file.  Type the starting reference number
      and press <Enter>.


























       122


                                           FILE COMMANDS

      BUILDING A NON-3by5 FILE


      If you attempt to open a file that does not exist, you will
      be asked whether you want to build the file:

        _____________________________________________________________________
        Unable to open file.  Do you want to build the file? (Y/N)
        _____________________________________________________________________


      Press [Y] to build the file, [N] to jump back to the Files
      Command Menu. 


      If you pressed [Y], and any files are open, the program
      will ask you:

        _____________________________________________________________________
        File:  filename
        Build like file (0-5):       0 = new file
        _____________________________________________________________________


      If one of the files is a non-3by5 file, type the number of
      the file, and 3by5 will create the file on disk.  Then you
      will be asked for the file type and record delimiter.















                                                       123


      3by5 Chapter 7

      If no files are open, the program will ask you for the file
      type:


        _____________________________________________________________________


        File Types:

        A  3by5
        B  Letter  
        C  Document
        D  Reference
        E  Reference Style
        F  Print Form
        G  Macro
        H  Program
        I  Mark
        J  ASCII, WordStar, WordPerfect



        Select file type: A
        _____________________________________________________________________



      Press [J] to select a non-3by5 file.  The file will be
      opened, and the program will then ask you for the file
      type:
         
        _____________________________________________________________________
        FILE TYPE:  1.ASCII  2.WordStar  3.WordPerfect  
        _____________________________________________________________________

      Press [1], [2], or [3] to indicate the file type.

      The program will then ask you for record delimiter and the
      field delimiter.  See the section on opening a non-3by5 file
      for information on record and field delimiters.


       124


                                           FILE COMMANDS

      FILES-CLOSE Command

        _____________________________________________________________________
        Open >Close< Records  List  Dir  Maintenance  Fields  Status
        Close file
        _____________________________________________________________________


      Whenever you exit from 3by5 by using the Exit Command,
      all open files are automatically closed.

      If you are going to remove a diskette from its drive while
      running 3by5, make certain that any files on that diskette
      are closed before removing the diskette.  This prevents
      DOS from writing incorrect information to the new
      diskette.

      To close a file, press [C] in response to the Files Command
      Menu.  The program will ask you for the number of the
      file to close.  Type the number of the file that you want
      to close.





















                                                       125


      3by5 Chapter 7

      FILES-RECORDS Command

        _____________________________________________________________________
        Open  Close >Records< List  Dir  Maintenance  Fields  Status
        Copy, Move or Erase records (sort option)
        _____________________________________________________________________


      The Records Command is used to copy or move records
      from a source file to a destination file or from one
      location in a file to another.  The Copy Command makes a
      copy of the source record and does not affect the source
      record.  The Move Command makes a copy and then erases
      the source record.

      Records that are Copied or Moved from a 3by5 file may be
      sorted prior to being placed in the destination file.

      The Records Command is also used to erase groups of
      records.  When a record is erased, the contents of the
      record are over-written with blank spaces (ASCII 32).


      Records marked during a search may be copied to a
      destination file.  The marked records are treated as file 0.

      Press [R] for the Records Command.  The following prompt
      will appear at the bottom of the screen:

        _____________________________________________________________________
        >Copy< Move Erase
        Copy a group of records (source records are not changed)
        _____________________________________________________________________


      Press [C] to copy a group of records from one file to
      another.  There are three possible ways to copy records. 
      From a 3by5 file to another 3by5 file, from a non-3by5 file
      to a 3by5 file and from a 3by5 file to a non-3by5 file. 
      Each will be considered separately. 


       126


                                           FILE COMMANDS

      Copying from one 3by5 file to another 3by5 file


      Press [C] to copy records.  The program will ask for the
      source file.  Enter the number of the source file.  The
      program will then prompt you for the destination file. 
      Enter the number of the destination file.  (The source file
      and destination file can be the same file.)

      Next the program will ask for the source range.  Type the
      starting record number and press <Enter>.  Then type the
      ending record number and press <Enter>.

      The program will then ask for the destination starting
      record.  Type the starting record and press <Enter>.

      If you are copying more than one record, the program will
      ask if you want to sort the records.  Press [Y] to sort the
      records.  If you sort the records and the source file has
      one or more fields, the program will display all fields in
      the file and ask you to select a primary sort field.  Select
      the field by pressing the corresponding field letter.  If the
      file has two or more fields, the program will ask for the
      secondary sort field.  Press <Enter> if there is no
      secondary sort field.  Otherwise select the secondary sort
      field.  The program will then sort the records and copy
      them to the destination file.  

      As the records are being copied, the program will display
      the number of the source record being copied and the
      number of the corresponding destination record.  

      At the bottom of the screen the program will prompt you
      to press <Esc> to stop the copying process.  








                                                       127


      3by5 Chapter 7

      Copying Records from a Non-3by5 file to a 3by5 file

      If the source file is a non-3by5 file, the program will
      transfer all records into the 3by5 destination file.  The
      records will be appended to the end of the 3by5
      destination file.


      Copying Records from a 3by5 file to a non-3by5 file.  

      If the destination file is not a 3by5 file, the program will
      append the records to the end of the file.  The program
      will prompt you for the range of records to be copied from
      the 3by5 file.  As with a 3by5 to 3by5 copy, you may sort
      the records.



























       128


                                           FILE COMMANDS

      MOVING RECORDS

      You may move records from a 3by5 source file to either a
      3by5 destination file or a non-3by5 destination file.  When
      a record is moved, it is copied to the destination file, and
      the original contents in the source file are erased.  The
      record is not deleted from the file and you may add text
      to it at a later date.

      The instructions for moving records are the same as for
      copying records.































                                                       129


      3by5 Chapter 7

      ERASING RECORDS

      You may erase any group of records in a 3by5 file.  The
      program will prompt you for the starting number and the
      ending number.  It will then erase the contents of each
      record.  The index will be updated.  A record that is
      erased, remains in the file and new information may later
      be added.  During a Copy, Move or Pack Command, records
      that have been erased are not copied to the destination
      file. 
































       130


                                           FILE COMMANDS

      FILES-LIST Command

        _____________________________________________________________________
        Open  Close  Records >List< Dir  Maintenance  Fields  Status
        List of files in directory
        _____________________________________________________________________


      In response to the Files Command Menu press [L] to obtain
      a listing of files in any directory.  The program will
      prompt you:

        _____________________________________________________________________
        List:
        Type pattern for file.  Press <Enter> for file list
        _____________________________________________________________________


      The program will inform you that you may press <F10> for
      an extended list of the files (includes the file size and
      date and time of creation or last update).


      Type [*.3X5] <Enter> to list all 3by5 files with the
      extension "3X5" in the current directory.  

      Type [*.*]  <Enter> to list all files in the current
      directory.   

      Type [*] <Enter> to list all 3by5 source files in the current
      directory (files with extensions 3X5, LET, DOC, MAC, PFM,
      REF, RFS and PRG).  

      The drive and directory path may also be specified (e.g.
      A:\LEVEL1\LEVEL2\*.*].

      After you press <Enter>, the current drive or directory will
      be displayed and the files in the current directory will be
      listed:  



                                                       131


      3by5 Chapter 7

       
        _____________________________________________________________________
        3by5 Files
             Open Files
        1 
        2
        3
        4
        5
          

        Dir: A:\                                           Free: 
        xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx
        xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx
        xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx
        xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx      xxxxxxxxxx




        (O)pen  (E)rase  (R)ename  (C)hange directory  (Q)uit
        _____________________________________________________________________

       

      If there are more files in the directory than can fit on the
      screen at one time, you can use the <Down Arrow> key to
      scroll through the files.  Up to 120 files may be listed in one
      directory.

      To open a file, position the cursor bar to the file and press
      [O].  The file will be opened.  Similarly, files may be erased
      from the diskette by pressing [E], or renamed by pressing [R]. 
      If you attempt to erase or rename a file that is open, the
      program will inform you that the file is open.  You must first
      close the file, before erasing it.

      Subdirectories are marked by a terminal asterisk (e.g.
      LEVEL2*).  To change directories, position the cursor bar to
      the directory and press [C].


       132


                                           FILE COMMANDS

      Extended Listings

      Press <F10> after typing the file pattern the following will be
      displayed:

        _____________________________________________________________________
        3by5 Files
             Open Files
        1 
        2
        3
        4
        5

          
        Drive A:\                                          Free:
        xxxxxx  zzz  mm-dd-yyyy hh:mm | xxxxxx  zzz  mm-dd-yyyy hh:mm
        xxxxxx  zzz  mm-dd-yyyy hh:mm | xxxxxx  zzz  mm-dd-yyyy hh:mm
        xxxxxx  zzz  mm-dd-yyyy hh:mm | xxxxxx  zzz  mm-dd-yyyy hh:mm
        xxxxxx  zzz  mm-dd-yyyy hh:mm | xxxxxx  zzz  mm-dd-yyyy hh:mm
        xxxxxx  zzz  mm-dd-yyyy hh:mm | xxxxxx  zzz  mm-dd-yyyy hh:mm
        xxxxxx  zzz  mm-dd-yyyy hh:mm | xxxxxx  zzz  mm-dd-yyyy hh:mm


        (O)pen  (E)rase  (R)ename  (C)hange directory  (Q)uit

        _____________________________________________________________________



      xxxxxx          is the name of the file.
      zzz             is the size of the file in bytes.
      mm-dd-yyyy      is the month, day and year of the creation
                      or last update.
      hh:mm           is the hour and minute of the creation or
                      last update.






                                                       133


      3by5 Chapter 7

      FILES-DIRECTORY Command


        _____________________________________________________________________
        Open  Close  Records  List >Dir< Maintenance Fields  Status
        Directory Commands
        _____________________________________________________________________


      The Directory Command allows you to change the current
      directory, or make or remove a directory.  This command
      is most useful for systems with hard disk drives, but may
      be used on diskette based systems to specify the current
      drive (e.g. A:\ or B:\).

      Press [D] for the Directory Command.  The following menu
      will appear:

        _____________________________________________________________________
        >Change< Make  Remove  List
        Change current directory
        _____________________________________________________________________



      Changing the current directory

      Press [C].  The program will display the current directory
      if you have changed it previously while in 3by5.  It will
      then prompt you for the name of the current directory.

        _____________________________________________________________________
        Directory:
        Change current directory
        _____________________________________________________________________


      Type the path (including disk drive) of the directory that
      you want to select as the current one and press <Enter>. 
      The program will set that directory as the current
      directory.  If there were any errors, you will be informed. 

       134


                                           FILE COMMANDS

      For example, A:\ will select the A drive and the root
      directory; C:\LEVEL1\LEVEL2 will select the C drive and
      directory level2.  


      Making or Removing a Directory

      The Make and Remove Directory commands work similarly
      to the Change Directory command.  The name of the
      directory must start with the drive, colon and back slash. 
      For example, the command to remove the following
      directory "A:\LEVEL1\LEVEL2 will remove directory
      LEVEL2.  All files in a directory must be deleted before it
      can be removed.


      Listing Directories

      Press [L] to list the directories directly accessible from the
      current directory.  The Directory-List Command works
      similarly to the Files-List Command.





















                                                       135


      3by5 Chapter 7

      FILES-MAINTENANCE Command

        _____________________________________________________________________
        Open  Close  Records  List  Dir >Maintenance< Fields  Status
        Index  Pack  
        _____________________________________________________________________


      FILES-MAINTENANCE-INDEX Command

      The Index Command is used to index a 3by5 file that does
      not have an index file (e.g. it was deleted using the DOS
      Erase Command) or used to re-index a 3by5 file in which
      the index file was damaged (e.g. disk write error).

      Press [I] to index a file.  The program will list the open
      files and you will be asked to select a file.  Press <Esc> if
      you do not want to index a file.  Otherwise select a file.

      The program will ask you to enter the index density. 
      Enter a number between 1 and 5. 

      The program will then start to index the file.  The number
      of the record being indexed will be displayed at the bottom
      of the screen.

      Non-3by5 Files cannot be indexed.















       136


                                           FILE COMMANDS

      FILES-MAINTENANCE-PACK Command

      The Files-Maintenance-Pack Command removes wasted space
      from Fixed Length Record and Variable Length Record
      files.  This includes records that have been erased and
      wasted space that develops during the modification of
      Variable Length Records.

      Press [P] for Pack.  The program will ask you to specify
      the disk drive and directory that the program will use for
      its temporary files.  The free space on the disk drive
      should be at least as much as that occupied by the Source
      and Index Files being Packed.   

      After you specify the disk drive, the program will start the
      packing procedure, which may take some time.  You will be
      informed of the program's progress.

      Variable Length Record Files should be packed when the
      amount of wasted space exceeds 20% of the file size.






















                                                       137


      3by5 Chapter 7

      FIELDS COMMAND

        _____________________________________________________________________
        Open  Close  Records  List  Dir  Maintenance >Fields< Status
        Filter  Redefine
        _____________________________________________________________________


      The Fields Command is used to filter (specify) fields that
      will be copied to another file, or redefine the fields in a
      file.


      FILES-FIELDS-FILTER Command

      The Fields Command is used to specify fields that will be
      copied from one record to another.  For example, you may
      have a reference file with the following fields:

          REF
          CODE
          KEYWORDS
          COMMENTS

      The REF field contains the authors, title and source in any
      standard format suitable for publication.  The CODE field
      contains the code number under which you file the article. 
      The KEYWORDS field contains keywords that do not appear
      in the title, but are useful in retrieving the document. 
      The COMMENTS field contains your comments on the
      reference.

      Suppose that you want to copy only the text in the REF
      fields to a file for editing with your word processor.  The
      Fields Command is used to specify that when a record is
      copied from the file only the text in the REF field is
      copied.  The destination file may be another 3by5 file, a
      WordStar or WordPerfect document file or an ASCII text
      file.  

      Press [F] to issue the Fields Command.  If more than one

       138


                                           FILE COMMANDS

      file is open, the program will ask you to enter the number
      of the file for the Fields Command.  The program will then
      list the letter and name of the fields in the file:
        
        _____________________________________________________________________


        Fields in NEWREF.3X5                                          
        A REF
        B CODE
        C KEYWORDS
        D COMMENTS


        Fields to copy:
        Type order of fields for copying.  Empty line = all fields
        _____________________________________________________________________


      At the bottom of the screen the program will ask you to
      type the order of the fields to be copied.  If you enter a
      blank line, the program will copy all fields in the same
      order as they are in the file.  

      If you type [C] <Enter> only the KEYWORDS field will be
      copied to another file.

      You can specify the order of the fields.  For example:  if
      you type [ADB] <Enter>, any records copied to another file
      will include the REF field, the COMMENTS field and the
      KEYWORDS field in that order.

      The asterisk is used to insert a blank field.  The "+"
      character is used to concatenate two or more fields.  The
      "+" character followed by a "~" is used to concatenate a
      carriage return to a field.    

      For example, the command [AC+~+B**D] <Enter> will copy
      field A, concatenate the contents of field C, a carriage
      return and the contents of field B and copy them as one
      field, insert two blank fields in the destination file, and

                                                       139


      3by5 Chapter 7

      then copy the contents of field D.


      FILES-FIELDS-REDEFINE Command

      Press [R] to redefine the fields in a file.  The program will
      request the number of the file to use.  Select the file.

      If the file is a 3by5 file, the program will display the
      fields in the file.  You may modify the field types, field
      formats and insert/delete fields.  However, 3by5 does not
      automatically change the contents of previously entered
      data to match the new fields definitions.  This must be
      performed manually.

      If the file is a non-3by5 file, the program will ask you to
      redefine the fields.

























       140


                                           FILE COMMANDS

      STATUS COMMAND

        _____________________________________________________________________
        Open  Close  Records  List  Dir  Maintenance  Fields >Status<
        Display status information on open files
        _____________________________________________________________________


      The Status Command is used to display information on an
      open file.  Press [S] to issue the command.  If one file is
      open, the status information will be displayed.  If more
      than one file is open, the program will ask you to enter
      the number of the file. Type the number of the file and
      the following information will be displayed:

      File name:      The drive, path and name of the file.

      File type:      If the file is a 3by5 file that was created
                      by a version of 3by5 before 4.0, the type
                      will be listed as 3by5OLD.  Old source
                      files should be converted to the 4.0 format
                      by building a new file, and then using the
                      Files-Record-Copy Command to copy all
                      records to the new file.
        

      Index:          Indicates the type of index for the file. 
                      All 3by5 files use Signature Screening
                      indexes (designated by a "Sig").           
                          
      Record Size:    Maximum length of each record if the file
                      has fixed length records.  Minimum length
                      of each record if the file has variable
                      length records. 
         
      Fields:         Up to 26 fields may be designated in a
                      3by5 file.

      Records:        The number of records in a file.



                                                       141


      3by5 Chapter 7

      If the file is a variable length record file, the program will
      display the number of unused bytes in the file.

      If the file is a non-3by5 file, the record and field
      delimiters will be displayed.





































       142


                                           FILE COMMANDS

      VARIABLE LENGTH RECORDS

      Variable length records have the advantage of reducing
      wasted disk space.  For example, if you are using standard
      fixed length records of length 1000 bytes and have a
      record with only 200 characters, then 800 bytes of disk
      space are wasted.

      The procedure for building a file is the same as that for a
      standard 3by5 file except that the program will ask for the
      minimum record size rather than the maximum record size. 
      The reason for requesting a minimum record size is as
      follows.

      As you add records to a 3by5 file, the records are
      appended to the end of a file.  In the diagram below the
      file has 6 variable length records:


           --------------------------------------
          |    1    |  2   | 3 | 4 |   5   |  6  |
           --------------------------------------


      If you later want to update a record in the middle of a
      file (e.g. record 4) there must be enough room for the
      updated record.  If you shorten the length of the record or
      do not change its length, then the updated record is stored
      in the original location:


        
           
           --------------------------------------
          |    1    |  2   | 3 | 4 |   5   |  6  |
           --------------------------------------
                                 * record 4 updated in place

      If the updated record is longer than the original record,
      the program must append the updated record to the end of
      the file and delete the data where the old record was:

                                                       143


      3by5 Chapter 7



           -----------------------------------------------
          |    1    |  2   | 3 |xxx|   5   |  6  |    4   |
           -----------------------------------------------
                                *deleted data       *new position of
                                                     record 4


      Pointers in the index file allow you to read the file in the
      original order of the records even though the sequential
      order of the records has changed.

      Assigning a minimum record length assures you that you
      will be able to update most records in place.  For example,
      you may have a file that you update frequently.  Most
      records are on average 250 characters long, but some are
      as long as 2000 characters.  Assigning a minimum record
      length of 250 bytes would allow you to update most records
      in place.  

      When a record is modified beyond its minimum length, it is
      appended to the end of the file, and the disk space
      occupied by the original record is erased and is not used. 
      If you have frequent updates of this type, there can be a
      considerable waste of disk space.  

      The File Status Command will inform you of the amount of
      unused file space.  If this number becomes too large, the
      records in the file should be "packed" into another file
      using the Files-Maintenance-Pack Command.

      Alternatively, you can use the Files-Records-Copy
      Command.  For example, if the file is called REF, build a
      new file (e.g. NEWREF) of the same type (same minimum
      record length, fields, etc.).  Copy all records from REF to
      NEWREF.  No deleted data will be copied to the new file. 
      You must use the 3by5 File Copy Command.  The DOS
      Copy Command will copy the entire 3by5 file and will not
      eliminate any wasted space.


       144

```
{% endraw %}

## CHAP08.DOC

{% raw %}
```



                                                 WINDOWS

      CHAPTER 8  -  3by5 WINDOWS

      The window area of the 3by5 screen between the 3by5
      Status Line and the Command Menu may be divided into
      two separate windows.  The top window contains eleven
      lines of text, the bottom window contains ten lines of text. 
      A solid line separates the windows:

       
        _____________________________________________________________________
        3by5



                                   Top Window 



        _____________________________________________________________________




                                   Bottom Window



        >Edit<  Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________












                                                       145


      3by5 Chapter 8

      The Windows Command is issued from the Main Menu.  No
      task can be on hold.  Press [W] and the program will
      display the following menu:


        _____________________________________________________________________
        >One< Two
        One window
        _____________________________________________________________________
       

      Press [O] to display all text in one window (the default
      setting for 3by5).


      Press [T] for two windows.  The program will display the
      following menu:


        _____________________________________________________________________

        File  Window

         1    T
         2    T
         3    T
         4    T
         5    T


        T = Top window;  B = Bottom window;  Press <F10> to save
        _____________________________________________________________________
       


      Specify either the Top window or Bottom window for each
      file.  Text while editing and searching a file will be
      displayed in the window specified for the file. 

      When you are finished specifying windows, press <F10> to
      save the changes.  Press <Esc> to bypass any changes.

       146

```
{% endraw %}

## CHAP09.DOC

{% raw %}
```








      CHAPTER 9  -  UTILITIES

        _____________________________________________________________________

        Edit  Search  Print  Files Windows >Utilities< Quit
        Screen  Load  Run  DOS
        _____________________________________________________________________


      The Utilities Command is used to configure 3by5 screen
      options, load reference style, print form and macro records,
      or execute a child process (run another program) and then
      return to 3by5).


      UTILITIES-SCREEN Command

      The options included are the speed of screen display and
      screen color.


      Press [U] for the Utilities command and the following menu
      will appear:

        _____________________________________________________________________
        >Screen< Load  Run  DOS
        Screen display utilities
        _____________________________________________________________________


      Press [S] for the Screen Display Utilities, and the
      following screen will be displayed:

        _____________________________________________________________________
        >Speed<  Text  Underline  Highlight  Commands
        Screen display speed
        _____________________________________________________________________

          



                                                       147


      3by5 Chapter 9 

      SPEED OF DISPLAY

      Normally 3by5 writes directly to video ram for fast
      updating of the screen.  This method of updating the
      screen creates screen noise on some equipment (e.g. an
      IBM PC with a color graphics card).  If there is
      considerable noise on your screen during editing, set the
      Slow display option to "Y" for yes.  All screen output will
      be slowed to reduce noise on the screen.

        _____________________________________________________________________

         Slow display (Y/N): N  
         Slow display reduces screen noise
        _____________________________________________________________________



      COLOR COMMANDS

      The Color Commands are used to adjust the color of the
      screen.  These commands may be used if you do not have a
      color monitor, but the results are unpredictable.  

      The Color command line will appear as follows:

        _____________________________________________________________________
        >Text< Underline  Highlight  Commands
        Text color
        _____________________________________________________________________


      Press [T] to select text color, [U] to select Underline
      color, [H] to select the Highlight color and [C] to select
      the Command Line and 3by5  Status Line color.  The
      following menu will appear:






       148


                                               UTILITIES


        _____________________________________________________________________
        3by5 Utilities
        Color Code

            A  Black
            B  Blue
            C  Green
            D  Cyan
            E  Red
            F  Magenta
            G  Brown
            H  White
            I  Gray
            J  Light Blue
            K  Light Green
            L  Light Cyan
            M  Light Red
            N  Light Magenta
            O  Yellow
            P  White (High Intensity)

         TEXT COLOR              Background color: A Foreground color: H
         Background codes: (A - H)
        _____________________________________________________________________

      Only codes A through H may be used for the background
      code.  Press the code letter you want to select and the
      program will then prompt you for the Foreground Color
      (i.e. the color of the letters):
        _____________________________________________________________________
         TEXT COLOR              Background color: A Foreground color: H
         Foreground codes: (A - P)
        _____________________________________________________________________

      Press the code letter of the color you want to select for
      the foreground color of the window.  If the background
      and foreground colors you selected are the same, the
      program will inform you that they cannot be the same
      color (the characters would not be visible) and you will be
      asked to repeat your selection.

                                                       149


      3by5 Chapter 9 

      UTILITIES-LOAD Command


        _____________________________________________________________________
        Screen >Load< Run  DOS
        Print  Macro  Reference
        _____________________________________________________________________

      The load utility is used to load a Reference Style record,
      Print Form record or Macro record into memory.  Press [L]
      and then [R], [P] or [M] to load a Reference Style record,
      Print Form record or Macro record.  

      The program will ask for the number of the file.  Select
      the file.  Then type the number of the record to be loaded
      and press <Enter>.  The record will be loaded into memory
      and you will be returned to the Main Menu.

      Alternatively, you can load a record while searching a file
      by using the Search-Load Command.






















       150


                                               UTILITIES

      UTILITIES-RUN Command

        _____________________________________________________________________
        Screen  Load >Run< DOS
        Run a 3by5 program file
        _____________________________________________________________________

      The Utilities-Run Command runs a 3by5 program.  

      Press [R].  The program will ask you to specify the file. 
      Type the name of the file or enter the file name.  

      Next the program will ask for the record number.  Type
      the record number and press <Enter>.

      3by5 Program Files are described in Chapter 11.


























                                                       151


      3by5 Chapter 9 

      UTILITIES-DOS Command

        _____________________________________________________________________
        Screen  Load  Run >DOS<
        Run a program in DOS
        _____________________________________________________________________


      Press [D] to run a program in DOS.  The following menu
      will be displayed:

        _____________________________________________________________________
        >Command< One
        Run programs in DOS; type [EXIT] <Enter> to return to 3by5
        _____________________________________________________________________


      If you press [C], DOS will start a secondary command
      processor that can be used to execute any number of
      programs.  The screen will clear and the DOS prompt will
      be displayed (e.g. A>).  When you want to return to 3by5,
      type [EXIT] <Enter>.  See Command in your DOS manual
      for more details.


      If you press [O] for one program only, the program will
      prompt you for the name of the program to execute.  Type
      the name of the program and press <Enter>.  When the
      child process is finished, you will be returned to the 3by5
      Main Menu.












       152

```
{% endraw %}

## CHAP10.DOC

{% raw %}
```







      CHAPTER 10  -  QUIT COMMAND


      QUIT COMMAND

        _____________________________________________________________________
        Edit  Search  Print  Files  Windows  Utilities >Quit<
        Quit 3by5  
        _____________________________________________________________________


      The Quit Command is used to end a 3by5 session and exit
      to the operating system.  If any files are open, it is
      important to always use the Quit Command when you are
      finished since it automatically closes all files.


      IF YOU HAVE ANY OPEN FILES, DO NOT REMOVE THE
      SOURCE FILE DISKETTE(S) UNTIL YOU HAVE EXITED
      FROM THE PROGRAM BY USING THE QUIT COMMAND.


      The above restriction applies only to 3by5 source file
      diskettes.  The 3by5 program diskette may be removed from
      the disk drive as soon as the program is loaded since the
      3by5 program is completely loaded into memory.

      In response to the Main Menu press [Q] for the Quit
      Command.  The following message will appear:

        _____________________________________________________________________
        >No< Yes  
        Do not quit; continue 3by5 
        _____________________________________________________________________


      If you press <Enter> or [N] you will be returned to the
      Main Menu.  

      If you press the space bar, the following prompt will



                                                       153


      3by5 Chapter 10

      appear:
               

        _____________________________________________________________________
        No >Yes<
        Quit 3by5
        _____________________________________________________________________


      Press <Enter> or [Y] to close all open files and return to
      DOS.  Alternatively, press [N] to return to the Main Menu.































       154

```
{% endraw %}

## CHAP11.DOC

{% raw %}
```



                                           PROGRAM FILES

      CHAPTER 11  -  3by5 PROGRAM AND START-UP FILES


      You can create Program Files that give 3by5 instructions. 
      A Program File can set parameters (such as auto line feed
      after a carriage return and the default window for editing
      or searching a file), open files, and type text.

      The instructions in a Program File are executed by one of
      two methods:

       1. The Utilities-Run Command is used to specify a
          Program File and record number to be executed.

       2. The Program File name is specified at the start of the
          3by5 program.  The record of the Program File is
          loaded into memory and executed.  This special type of
          Program File is called a Start-up File.  If the name of
          the Program File is 3BY5AUTO.PRG, 3by5 will open the
          file automatically and execute record one of the file.






















                                                       155


      3by5 Chapter 11

      A Program File contains a series of 3by5  commands in the
      exact order that you would enter them if you were
      interactively typing 3by5 commands.  

      Take, for example, a Program File that has the following
      contents:

          FOREF~FOADDRESS~`


      The commands work as follows: 

          F           issues the Files Command
          O           issues the Open Command
          REF         is the name of the 3by5 file to open
          ~           represents the <Enter> key that you press
                      to indicate that you have finished typing
                      the name of the file
          ADDRESS     is the name of the second 3by5 file to be
                      opened.
          ~           represents the <Enter> key.
          `           represents the <Esc> key that returns you
                      from the Open Command to the Main
                      Menu.


















       156


                                           PROGRAM FILES

      The rules for making a Program File are:

        1.   The file is a 3by5 file with a record length 512
             bytes and contains one or more records.  

        2.   The instructions in the Program File should be the
             same as you would type when starting 3by5.  The
             only differences are:
             a.  Use ~ to represent the <Enter> key.
             b.  Use ` to represent the <Esc> key (This is the
                 accent mark, not the apostrophe)

        3.   The commands  can be no longer than 512
             characters in length.

        4.   Comments can be inserted into the record.  The
             comment starts with /* and ends with */.  For
             example:  /*comments*/
























                                                       157


      3by5 Chapter 11

      Creating a 3by5 Program File is simple:  

        1.   Place your 3by5 program diskette in drive A and
             start 3by5.

        2.   Use the Files Command to open a file called
             TEST.PRG.  If the file does not exist, build it.  It
             is a standard 3by5 file with a record length of 512
             characters per record.

        3.   Edit the first record of the file.

        4.   Type [FOREF~ADDRESS~`] <Enter>. 

        5.   Save the record.



      Use the Utilities-Run Command to execute the program.























       158


                                           PROGRAM FILES

      Technical Note  

      Once 3by5 starts to execute a Program File record, it
      processes  all characters in the record until it reaches the
      end of the record.  In the above example when  the file
      REF.3X5 is not present, the program continues to read the 
      characters "ADDRESS~`" in response to the question:

        "Do you want to build this file? (Y/N)"

      Since no "y" or "n" is present in the program record, the
      program exhausts the characters in the record and returns
      control to the keyboard at the build  query.

      If the Program File had been:  "FOREF~NEWREF~``" and
      the file REF.3X5  were not present, the following would
      happen:  First, the program would try to open REF.3X5. 
      Then it would ask whether you want to build the file - 
      expecting a "Y" or "N" response.  It would read the "N" in
      NEWREF as an "N"  to not build the file.  It would then
      process the rest of the record  (EWREF~``) incorrectly. 
      For this reason, it is important that the files  you want to
      open be present on the appropriate disk drives.



















                                                       159


      3by5 Chapter 11

      START-UP FILES

      A Program File that is executed when 3by5 is loaded is
      called a Start-up File.  You may specify the name of the
      Start-up File on the DOS Command Line or, if no file is
      specified, 3by5  will search the current directory for a file
      called  3BY5AUTO.PRG.  

      The Start-up Files can be in a directory other that the
      current directory if you use the DOS Set Command.  The
      path for the Start-up Files can be specified as follows:

      From the DOS Command Line type:

        A>SET 3BY5AUTO=A:\LEVEL1\LEVEL2

      where the text to the right of the equal sign is the path
      for the 3by5 Start-up Files.

      The Set Command may be placed in your DOS
      AUTOEXEC.BAT file.  See your DOS Manual for more
      information on the Set Command and AUTOEXEC file.




















       160


                                           PROGRAM FILES

      SAMPLE PROGRAM FILE

      Your 3by5 Master diskette contains a file called
      JOHN.PRG.  It is a sample 3by5 Program File.

      You may use it one of three ways:

      1. User Selected Start-up File

      From the DOS prompt load 3by5 by typing:

        A>3by5 john.prg<Enter>


      2. Default Start-up File 

      Use the DOS Rename Command to change the name to
      3BY5AUTO.PRG.

      From the DOS prompt load 3by5 by typing:

        A>3by5<Enter>

      When you start 3by5 using this file, new printer parameters
      will be set, the Slow Display option will be set to "Y" and
      the files ADDRESS.3X5  and PROGRAMS.3X5 will be
      opened.  It is only an example and you may modify it to
      fit your requirements.


      3. Utilities-Run Command

      The file JOHN.PRG must be open.  From the Main Menu
      press [U] for utilities, then [R] for run.  The program will
      prompt you to select the program file if more than one
      program file is open.  Then it will ask for the record
      number of the Program File to run.  Type the number and
      press <Enter>.




                                                       161


      3by5 Chapter 11

      SPECIAL KEY SEQUENCES

      Special key sequences (e.g. Function Keys) can be entered
      in the 3by5 Start-up File by using the back slash character
      "\" along with a three digit code.  The code value is equal
      to the IBM BIOS key scan code plus 256.  For example, the
      scan code for the <F4> key is 62 and it can entered as
      "\318".  The back slash must be followed by three decimal
      digits.  Two back slashes in a row "\\" are treated as one
      back slash.  Chapter 12 of this manual lists the codes for
      special sequences.































       162


                                           PROGRAM FILES

      DOS COMMAND LINE

      3by5 searches the DOS command line for text and treats
      any text preceeded by an asterisk (*) as the contents of a
      3by5 Start-up file.  For example:

        A>3by5 *FOREF~REFSTYLE~`

      The text "FOREF~REFSTYLE~` will be considered an Start-
      up File. After the 3by5 title screen is displayed, the
      program will perform the following as though you were
      typing.

      Characters      Significance

          F           File Command
          O           Open Command
          REF         Name of file to open
          ~           Enter command (carriage return)
          REFSTYLE    Name of second file to open
          ~           Enter command (carriage return)
          `           Esc command that returns you to previous
                      menu (in this case, the Main Menu)


      To try this example, set the default drive to A.  Put your
      new diskette in drive A and type:

          3by5 FOREF~REFSTYLE~`

      There must be a space after "3by5".  The program will load
      and display the 3by5 Title Screen.  Press any key to
      continue and the program will automatically open REF.3X5
      and REFSTYLE.3X5.

      If you enter text on the DOS Command Line, 3by5 will
      execute the commands and will ignore any Start-up Files.





                                                       163


      3by5 Chapter 11











































       164

```
{% endraw %}

## CHAP12.DOC

{% raw %}
```







      CHAPTER 12  -   MACROS, LEARN COMMAND AND
                      EXTENDED CHARACTER SET



      3by5 provides Macros that can be used to speed data entry
      or perform a sequence of routine commands.  

      A 3by5 Macro file consists of a 3by5 file with 26 fields: A
      through Z.  Each record in the file can contain a set of
      macros that can be loaded into memory.  This means that
      the maximum size of a set of macros is limited to 4800
      bytes.  Larger macros may be simulated by using the
      Utilities-Run Command.

      Macros A through W and Y may be executed by holding the
      <Alt> key and pressing the corresponding letter.  The
      contents of the macro will be entered as though you typed
      them at the key board.

      There are two special macros: <Alt-X> and <Alt-Z>.






















                                                       165


      3by5 Chapter 12

      <ALT-X>   Extended Character Set Macro  

      The <Alt-X> macro is used to execute the Extended
      Character Set Macro.  This macro is used to enter
      characters beyond the standard ASCII range (e.g. Greek
      and European characters).  
      Press <Alt-X>, and the following menu will be displayed at
      the bottom of the screen:

        _____________________________________________________________________
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

        _____________________________________________________________________




      3by5 comes with a file called MACRO.3X5.  It contains
      several macro sets of general use.  

      Select a subset of extended characters by pressing A
      through Z.  The program will then display the characters
      available.  Press the letter above the character to be
      entered.


















       166


                                                  MACROS

      <ALT-Z>

      The <ALT-Z> command is used to display the first line of
      any of the available macros.  Press <ALT-Z> and the
      following menu will be displayed:


        _____________________________________________________________________
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        Contents of macro dislpayed on this line
        _____________________________________________________________________


      Use the space bar, the back space key or the cursor key
      to move to any letter and the first line of each macro will
      be displayed.  Type the corresponding letter or press
      <Enter> and the selected macro will be executed.

























                                                       167


      3by5 Chapter 12

      Designing Macros

      A 3by5 macro file has records with 26 fields.  The fields
      are named A through Z.  Macros follow the same rules as
      3by5Auto files.  

      The ~ character is used to indicate the <Enter> key.
      The ` character is used to indicate the <Esc> key.


      Special key sequences can be entered in 3by5 macros by
      using the back slash character "\" along with a three digit
      code.  The code value is equal to the IBM BIOS key scan
      code plus 256.  For example, the scan code for the <F4>
      key is 62 and it can entered as "\318".  The back slash
      must be followed by three decimal digits.  Two back
      slashes in a row "\\" are treated as one back slash.  The
      Basic manual that comes with the computer lists the key
      scan codes for the function keys.

      The last instruction of a Macro may be a call to another
      Macro or the execution of a 3by5 Program File Record.




















       168


                                                  MACROS

      LEARN COMMAND

      The Learn Command can be used to store key strokes in
      the Temporary Text Buffer 3by5 uses for copying and
      moving blocks of text.  Commands and text are stored
      together.  

      Press <Ctrl-F10> and the temporary buffer will be cleared
      of all text and commands.  The message "LEARN" will be
      displayed at the bottom of the screen.  

      Any text or commands you type will be stored in the
      Temporary Text Buffer.  As an example, make a copy of
      your 3by5 diskette and erase the file AUTO3BY5.PRG if it
      is present.  The files REF.3X5 and REFSTYLE.3X5 should
      be on the diskette.  The default disk drive should be A. 
      Place the diskette in drive A and type 

          3by5 <Enter>

      The program will be loaded into memory and the 3by5 Title
      Screen displayed.  Press any key to continue, and the Main
      Menu will be displayed.  Press <Ctrl-F10> and the message
      "LEARN" will be displayed.  Next type:

          F                     for the Files Command.
          O                     for the Open Command.
          REF <Enter>           to open REF.3X5
          REFSTYLE <Enter>      to open REFSTYLE.3X5.
          <Esc>                 to return to the Main Menu
          U                     for the Utilities Command
          L                     for the Load Command
          R                     to load a Reference Record
          2                     to select file 2 (REFSTYLE) as
                                the Reference Style File.
          9 <Enter>             to select record 9
          F                     for the Files Command
          C                     for the Close Command
          2                     to close file 2 (REFSTYLE)
          <Esc>                 to return to the Main Menu


                                                       169


      3by5 Chapter 12

      Now press <Ctrl-F10> to turn off the Learn Command.

      Then build an AUTO3BY5 file as follows:

      Type [F] to for the Files Command, [O] for the Open
      Command  and then type [AUTO3BY5.PRG] <Enter>  The
      program will ask if you want to build the file.  Type [Y].  

      Build a file with no fields and a record length of 256
      bytes).  Edit record one of the file.  The record should be
      blank and the cursor should be at Line 1 Column 1.  Press
      <Ctrl-F4> to retrieve the text in the 3by5 temporary
      buffer.  The text will appear as follows:

          foref~refstyle~`ulr29~fc2`

      Note that ~ represents the <Enter> key and ` the <Esc>
      key.

      Save the record: press <Esc> then press S.

      Exit 3by5 and then restart the program, the new
      AUTO3BY5 file will be loaded and its instructions executed
      (files REF.3X5 and REFSTYLE.3X5 will be opened, the
      reference style for Science will be loaded into memory and
      REFSTYLE.3X5 will be closed).  It is not necessary to close
      the Reference Style File after loading a reference style.

      The Learn Command may also be used to develop macro
      commands.  Use <Ctrl-F4> to load the commands into a
      Macro record that you are editing.











       170


                                                  MACROS

      Macro codes for special key sequences

      Key        Code                Key       Code

      Alt-A      \286                Alt-N     \305
      Alt-B      \304                Alt-O     \280
      Alt-C      \302                Alt-P     \281
      Alt-D      \288                Alt-Q     \272
      Alt-E      \274                Alt-R     \275
      Alt-F      \289                Alt-S     \287
      Alt-G      \290                Alt-T     \276
      Alt-H      \291                Alt-U     \278
      Alt-I      \279                Alt-V     \303
      Alt-J      \292                Alt-W     \273
      Alt-K      \293                Alt-X     \301
      Alt-L      \294                Alt-Y     \277
      Alt-M      \306                Alt-Z     \300

      Alt-1      \376                Alt-6     \381
      Alt-2      \377                Alt-7     \382
      Alt-3      \378                Alt-8     \383
      Alt-4      \379                Alt-9     \384
      Alt-5      \380                Alt-0     \385

      Key             Code

      Ctrl-Cursor Lt  \371
      Ctrl-Cursor Rt  \372
      Ctrl-End        \373
      Ctrl-Pg Down    \374
      Ctrl-Pg Up      \388
      Cursor Left     \331
      Cursor Right    \333
      Cursor Up       \328
      Cursor Down     \336
      Del             \339
      End             \335
      Ins             \338
      Pg Down         \337
      Pg Up           \329


                                                       171


      3by5 Chapter 12

      Key        Code                Key       Code

      F1         \315                F6        \320
      F2         \316                F7        \321
      F3         \317                F8        \322
      F4         \318                F9        \323
      F5         \319                F10       \324

      Shift-F1   \340                Shift-F6  \345
      Shift-F2   \341                Shift-F7  \346
      Shift-F3   \342                Shift-F8  \347
      Shift-F4   \343                Shift-F9  \348
      Shift-F5   \344                Shift-F10 \349

      Ctrl-F1    \350                Ctrl-F6   \355
      Ctrl-F2    \351                Ctrl-F7   \356
      Ctrl-F3    \352                Ctrl-F8   \357
      Ctrl-F4    \353                Ctrl-F9   \358
      Ctrl-F5    \354                Ctrl-F10  \359

      Alt-F1     \360                Alt-F6    \365
      Alt-F2     \361                Alt-F7    \366
      Alt-F3     \362                Alt-F8    \367
      Alt-F4     \363                Alt-F9    \368
      Alt-F5     \364                Alt-F10   \369

















       172


                                                  MACROS

      This page left blank.









































                                                       173


      3by5 Chapter 12

         
          








































       174

```
{% endraw %}

## CHAP13.DOC

{% raw %}
```







      CHAPTER 13  -  LETTERS AND DOCUMENTS



      STANDARD LETTERS AND MEMOS

      3by5 can be used to write individual or form letters and
      memos.  Standard letters and memos are entered into files
      with the extension "LET".  These files contain the print
      sheet settings for the letters so there is no need to use a
      print form when typing.  



      FORM LETTERS

      Form letters can be printed by typing the letter as a Print
      Form.  On your diskette you will find a file called
      FORMLET.PFM.  It is a Print Form File that contains two
      sample print forms.  The first Print Form is:























                                                       175


      3by5 Chapter 13



        _____________________________________________________________________
        @$ 66 11 76 6 6 66<
        @.<
        @.                               SOFTSHELL<
        @.                               1254 Thornbury Road<
        @.                               West Chester, PA 19380<
        @. <             
        November 1, 1988<
        < 
        < 
        < 
        @A
        @B
        < 
        Dear Sir:<
        <         
        This letter is a reminder that 3by5 can be used to write
        form letters to clients.  The method is simple.  The form    
        part of the letter is stored in a print form file.           
        < 
        In this example, our company's name and address are printed  
        in the header.  The letter is written in block style.  The   
        name and address of the recipient are printed, then the sal- 
        utation, and then the body of the text.  Other formats are 
        possible.
        <
        <
        Sincerely<
        <
        <
        <
        John Shell<
        <
        _____________________________________________________________________


      It is designed to be used with the ADDRESS.3X5 file.  



       176


                                  LETTERS AND DOUCUMENTS

      Open ADDRESS.3X5.  Then specify FORMLET.PFM as the
      Print Form File and select record two as the Print Form. 
      Then print records one to two in file ADDRESS.3X5.

      The Print Form contains the body of the text.  The @A
      symbol indicates that the first field (NAME) of
      ADDRESS.3X5 should be printed, and the @B symbol
      indicates that the second field (ADDRESS) should be
      printed.

      The form letter is printed with margins of 11 and 76 as
      specified by the Sheet Command Line (first line of the
      Print Form). 





























                                                       177


      3by5 Chapter 13

      DOCUMENT FILES

      This file type is reserved for future 3by5 enhancements.  
      Document Files are designed to contain one document. 
      These files can be used while preparing text for later use
      with a word processor (copy the contents of the Document
      file into an ASCII, WordStar or WordPerfect file.



































       178


                                  LETTERS AND DOUCUMENTS

      This page reserved for future updates.









































                                                       179


      3by5 Chapter 13

         
         








































       180

```
{% endraw %}

## CHAP14.DOC

{% raw %}
```







      CHAPTER 14  -   REFERENCE MANAGER

      INTRODUCTION

      Researchers often cite the same reference in several papers
      written for different journals.  Usually, each journal has
      its unique bibliographic style.  The 3by5 Plus Reference
      Manager helps you rearrange the elements in references
      (journals, books and book chapters) to meet the
      requirements of a publisher's bibliographic style. 

      If you need only one reference format for all your
      publications, it is not necessary to use the Reference
      Manager.  Just enter each reference in a field.  For
      example:


          REF         McKusick, VA and Ruddle, FH: The status
                      of the gene map of the human
                      chromosomes. Science 196: 390-405, 1977.
          KEYWORDS    GENETICS; HGM
          COMMENTS    Several updates to this classic paper.


      If, however, you publish in journals that have different
      formats, you should use the Reference Manager.

      The Reference Manager is designed to be as flexible as
      possible.  It will handle most reference styles.  In a few
      cases you may need to make minimal changes to the
      reformatted reference to meet a publisher's requirements
      (much easier than retyping each reference).











                                                       181


      3by5 Chapter 14

      3by5 owners: If you cannot find a reference format on the
      disk that meets your needs, send us a copy of the format
      (samples of the reference style from the journal) and a
      blank diskette with return postage.  We will design a
      format for you or modify the program to include the
      format.  If you are having trouble converting your
      references to our format, send us a copy on disk with
      return postage, and we will help develop a conversion
      routine.  

































       182


                                       REFERENCE MANAGER

      USING THE REFERENCE MANAGER


      The easiest way to learn how to use the 3by5 Reference
      Manager is by example.

      First place a DOS system diskette in drive A and turn on
      your computer.  The A> prompt should be present.  Then
      place a copy of the 3by5 Master Diskette in drive A.  Type
      [3by5] <Enter>.  After the program loads, press any key to
      continue.  Then press [F] for the Files Command and then
      [O] for the Open Command.  Type [ref] <Enter> to open
      the sample reference file.  Then type [refstyle] <Enter> to
      open the Reference Style File (a file containing various
      formats for references).  Then press <Esc> to return to the
      Master Menu.



      SPECIFYING THE REFERENCE STYLE


      Method A:  Using the Utilities Command

      Press [U] for utilities.  The program will prompt you:

        _____________________________________________________________________
        >Screen< References
        Screen display utilities
        _____________________________________________________________________

      Type [R] for the Reference Manager.  The program will
      then ask you for the number of the Reference Style File. 
      Press [2].  Then the program will ask you for the number
      of the record that contains the reference style format that
      you want to use.  Press [9] for record nine, which contains
      the format for the journal Science.  The program will load
      the record into memory and return you to the master
      menu.



                                                       183


      3by5 Chapter 14

      Method B:  Using the Search Command

      Press [S] to search a file.  Type [2] <Enter> to search file
      REFSTYLE.3X5.  The Search Key prompt will be displayed. 
      Type [science] <Enter> to search for the journal Science. 
      The reference style record for Science will be displayed
      and the Search Command Menu displayed at the bottom of
      the screen:

        _____________________________________________________________________
        >Search<Edit Key Forward Backward Goto Print Write Load Quit
        Continue search
        _____________________________________________________________________


      Press [L] to load a record.  The following prompt will be
      displayed:

        _____________________________________________________________________
        >Print< Reference
        Load print form
        _____________________________________________________________________


      Press [R] to load the current record into memory as the
      Reference Style record that will be used to format the
      references in REF.3X5.  Then press <Esc> three times to
      return to the Main Menu.














       184


                                       REFERENCE MANAGER

      Searching Reference Files

      Press [S] to search a file.  Type [1] <Enter> to select file
      one for searching.  When the program asks for the search
      key press <F2> to search all records.  The first record will
      be displayed:

        _____________________________________________________________________
        AUTHORS   Anderson, J.R.; Boyle, C.F.; Reiser, B.J.
        TITLE     Intelligent Tutoring Systems
        SOURCE    Science
        YEAR      1985
        VOLUME    228
        PAGES     456-462
        PUB_CO
        PUB_LOC
        EDITORS
        EDITION#
        CODE
        KEYWORDS
        COMMENTS
        STYLE     J. R. Anderson, C. F. Boyle, B. J. Reiser, Science
                  228, 456 (1985).
        _____________________________________________________________________


      Note that the record has 14 fields.  The last field contains
      the reference in the style for the journal Science.  This
      field can be written to another file or printed.  Normally,
      you do not edit this field.  The program inserts the
      reformatted reference in this field.  

      The first ten fields are  mandatory and must be named
      AUTHORS, TITLE, SOURCE, YEAR, VOLUME, PAGES,
      PUB_NAME, PUB_LOC, EDITORS and EDITION# (in upper
      case letters).  

      There must be at least one additional field (STYLE) which
      is always the LAST field in the record.  Do not enter data
      into this field; the program will insert the reformatted
      reference into this field.

                                                       185


      3by5 Chapter 14


      You may have additional fields between the PAGES field
      and the STYLE field.  In the above example three fields
      are included: CODE, KEYWORDS and COMMENTS.

      The SOURCE field contains either the name of a Journal or
      Book.  The TITLE field contains either the title of an
      article in a journal or a chapter in a book.  The Reference
      Manager distinguishes among the three by the following
      rules:

      Book:  If there is no text in the TITLE field, the reference
      is considered a book reference.  

      Journal:  If there is text in the TITLE and SOURCE fields,
      but none in the EDITORS field, then the reference is
      considered a journal reference.  

      Chapter:  If there is text in the TITLE and SOURCE fields
      and in the EDITORS field, the reference is considered a
      chapter in a book.  

      Press [S] to continue the search.  Review the other
      references in REF.3X5.  When you are finished press <Esc>
      three times to return to the Main Command Menu.  Press
      [U] for utilities and then [R] for the Reference Manager. 
      Select file 2 for the Reference Style File and select record
      7.  

      Press [S] to search.  Select file 1.  Press <F2> to browse
      through the file.  You will see that the format of the
      reference has changed considerably.  It is in the format
      used by the New England Journal of Medicine.









       186


                                       REFERENCE MANAGER

      RULES FOR ENTERING DATA INTO REFERENCE FIELDS

      The rules for entering data into fields in a reference file
      are:

      AUTHORS:   Format 1: Last name, a comma, a space, initial
                 of first name, a period, initial of middle name,
                 a period and the initial of the 2nd middle name
                 (if any) followed by a period.

                 For example:  Jones, J.R.W.; Smith, J.

                 Format 2:  Last name, a comma, a space, first
                 name, middle name, 2nd middle name.

                 For example:   Jones, John Richard William
                                Smith, Luke C; Doe, J. Mark

                 Use a carriage return or semicolon and space to
                 separate authors.


      TITLE:     Title of journal article or chapter in a book. 
                 The first letter of nouns and verbs should be
                 capitalized. An @ in front of the leading letter
                 of a word will insure that the letter is not
                 converted to lower case (e.g. @DNA will not be
                 converted to dNA).


      SOURCE:    Enter the name of the journal or book.  The
                 first letter of nouns and verbs should be
                 capitalized.  Journal abbreviations should be
                 followed by periods (e.g. N. Engl. J. Med.).


      YEAR:      Enter the year as four digits (e.g. 1977).


      VOLUME:    Enter the volume number in Arabic numerals 
                 (e.g. 12 or 111).

                                                       187


      3by5 Chapter 14


      PAGES:     Enter the page numbers (Arabic numerals)
                 separated by a hyphen.  (e.g. 23-29).  If there
                 is only one page it must be entered as two (e.g.
                 22-22).  If the pages field is left blank, then no
                 page numbers are transferred to the reformatted
                 reference.


      PUB_CO:    Enter the Publisher's name.


      PUB_LOC:   Enter the location of the publisher (e.g.
                 Reading, Mass.).


      EDITORS:   Enter the names of the editors of a book using
                 the same format as that used for authors.


      EDITION#:  Enter the edition number in arabic numerals
                 (e.g. 33).  The edition number may range from 1
                 to 99.



















       188


                                       REFERENCE MANAGER

      USING THE REFERENCE MANAGER TO PREPARE 
      A BIBLIOGRAPHY

      The preferred method of using the reference manager is to
      direct your reformatted references to another file.  This
      file is usually a WordPerfect, WordStar or ASCII file
      (although it could be a 3by5 file or the printer).  The
      output file can be incorporated into your manuscript and
      edited as needed.

      The steps for copying reformatted references are:


      STEP 1

      Open your Reference Style File and select the format that
      you want to use.  For example, open REFSTYLE.3X5 as the
      first file.  Press [U] for the Utilities Command.  Then
      press [R] for the Reference Manager.  Select file 1 and
      then select record 9 (Science format).  

      After you have retrieved the reference format you may
      close the Reference Style File so that you can open a
      maximum number of reference files.  This step is an
      option.  You may keep the Reference Style File open if
      you want.


      STEP 2

      Open one or more source reference files.  For example
      open REF.3X5.  This file (or files) will be the source of
      your references.


      STEP 3 

      Open an output file.  For example open "TEST.REF" as a
      file.  When the program cannot locate the file, it will ask
      you whether you want to build it.  Type [Y].  It will then
      ask you whether it is a 3by5 file.  Press [N].  It will build

                                                       189


      3by5 Chapter 14

      the file and ask you the file type.


      Select the file type.  The program will then ask:

         Numbered reference file? (Y/N) N

      Press [Y] if you want the references numbered.

      If you specify that the references are numbered, the
      following questions will be asked:

      First, the program will ask whether there are less than 
      100 references in the output file.  This question allows 
      the program to indent the reference numbers appropriately. 
      Press [Y] or [N].

      Next it will ask whether there is a blank line between
      references.  Press [Y] or [N].

      Lastly, it will ask the starting number of the first
      reference.  Type the starting reference number (usually 1)
      and press <Enter>.

      Press <Esc> to return to the Main Menu.  



      STEP 4

      The Main Menu should be present.  Press [F] for the Files
      Command.  Then press [F] for the Fields Command.  Select
      the source reference file.  The program will display the
      fields in the file.  Type only the letter of the last 
      field in the record and press <Enter>.  (For REF.3X5 you
      would type [N] <Enter>.)  Only the contents of the last
      field (STYLE) will be copied from the source file to any
      destination file.




       190


                                       REFERENCE MANAGER

      STEP 5

      Copy records from the source reference file to the
      destination file.  You may use the File Records Command
      to copy a range of records or use the Search Options to
      search and selectively write references to the destination
      file.

      After you have copied records to the destination file, you
      can edit the file with your word processor.  The references
      may be appended to a manuscript.































                                                       191


      3by5 Chapter 14

      SELECTING A REFERENCE STYLE

      The file REFSTYLE.3X5 has numerous reference styles for
      your use.  You can browse through the file and should be
      able to select a style that you need.  

      The following two paragraphs apply only to 3by5 owners: 

      If you cannot find a style format that you require,
      Softshell will design a format for you.  All you have to do
      is send a sample of the reference style (from as many
      journals as necessary) and a diskette with return postage. 
      We will design a format for you or modify the program if
      needed.  

      The Reference Style format has changed considerably since
      version 3.1, and the rules are much more complicated.  For
      this reason, and the fact the Reference Style codes may
      change in the future, we prefer to design a format for you. 
      If, however, you want to design your own formats, the
      information on the following pages will guide you through
      the design process.




















       192


                                       REFERENCE MANAGER

      REFSTYLE CODES AND STRUCTURES

      The following technical information is for those who want
      to design their own reference formats for use with 3by5. 

      INTRODUCTION

      The 3by5 Reference Manager was developed to handle
      references for scientific publication in which 95% of
      references consist of journal articles, books and chapters
      within books.  The Reference Manager is also used by
      many users for non-scientific reference management (legal,
      business, liberal arts).



      References consist of one or more of the following
      elements:

          Authors
          Title       (article or chapter)
          Source      (journal or book)
          Year        (date of publication)
          Volume
          Pages
          Publisher
          Editors
          Edition number

      For example, a journal article consists of authors, title,
      source (journal), year, volume and pages, while a book
      consists of authors, source (book name), publisher, location,
      editors, edition number and pages.









                                                       193


      3by5 Chapter 14

      References have two major levels of organization:

      Level one: arrangement of elements within reference.  The
      elements of a reference may be arranged in numerous
      permutations:


          Folstein S, Abbott MH, Moser R, Parfad I, Clark A,
          Folstein M. Hereditary disorders of dystonic movement
          - a phenocopy of Huntington's disease: lucunar infarcts
          of the corpus striatum. Johns Hopkins Med J 1981;
          148:104-113.

          S. Folstein, M. H. Abbott, R. Moser, I. Parfad, A.
          Clark, M. Folstein, Johns Hopkins Med. J. 148, 104
          (1981).

          Folstein, S., Abbott, M. H., Moser, R., Parfad, I.,
          Clark, A. & Folstein, M. Johns Hopkins Med. J. 148,
          104-113 (1981).

          Folstein, S., Abbott, M. H., Moser, R., Parfad, I.,
          Clark, A., & Folstein, M. (1981). Hereditary disorders
          of dystonic movement - a phenocopy of Huntington's
          disease: lucunar infarcts of the corpus striatum. Johns
          Hopkins Med. J., 148, 104-113.



      Formats consist not only of the order of elements within a
      format, but the characters that separate elements: periods,
      semicolons, comas, spaces etc.

      Level 2: Organization of sub-elements with each element. 
      For example, authors may be formatted in many different
      ways:

                 Abbott MH
                 M. H. Abbott
                 Abbott, M. H.


       194


                                       REFERENCE MANAGER

      Reference Style Format.

      The American Psychological Association reference style is a
      good example of a reference style format:
        _____________________________________________________________________

        JOURNAL  AMERICAN PSYCHOLOGICAL ASSOCIATION STYLE
        SAMPLE   Spetch, M. L., & Wilkie, D. M. (1983). Subjective shortening: A
                 model of pigeons' memory for event duration. Journal of
                 Experimental Psychology: Animal Behavior Processes. 9, 14-30.

                 Bernstein, T. M. (1965). The careful writer: A modern guide
                 to English usage. New York: Atheneum.

                 Hartley, J. T., Harker, J. O., & Walsh, D. A. (1980). Contemporary
                 issues and new directions in adult development of learning and
                 memory.  In L. W. Poon (Ed.), Aging in the 1980's: Psychological
                 issues (pp. 239-252).  Washington, DC: American Psychological
                 Association.
        FORMAT   @A (@Y). @T. @S, @V, @P.~@A (@Y). @S@N. @L: @H.
                 @A (@Y). @T. In @E (Ed@#), @S@N (@P). @L: @H.
        AU_CODE  ABCDEFGHIJK
        2AUconj  , &
        3AUconj  , &
        ETAL     0,0~0,0~0,0~0
        TI_CODE  L~L~L
        SO_CODE  U
        VOL_CODE S~Sp. ;pp. ~Sp. ;pp.
        PAGECODE 
        PUB_CODE
        LOC_CODE
        ED_CODE  DEFGHIJKLCA
        ED#_CODE ~ (@O ed.)~ (@O ed.)
        _____________________________________________________________________
                  







                                                       195


      3by5 Chapter 14

      The record has 15 fields.  Each field except the first
      contains information for the following formats:

          Journal
          Book
          Chapter in a book

      The formats are separated by carriage returns or ~'s.  For
      example:


        FORMAT   @A (@Y). @T. @S, @V, @P.~@A (@Y). @S@N. @L: @H.
                 @A (@Y). @T. In @E (Ed@#), @S@N (@P). @L: @H.

       
                  

      The journal format (@A (@Y). @T. @S, @V, @P.) is
      separated by a ~ from the book format (@A (@Y). @S@N.
      @L: @H.) which is separated by a carriage return from the
      chapter format
      (@A (@Y). @T. In @E (Ed@#), @S@N (@P). @L: @H.).


      JOURNAL  (FIELD A) 

      This field lists the journal, journals or organization that
      uses the format specified in the record.  In the above
      example the organization is the American Psychological
      Association.  This format is used by many journals.


      SAMPLE  (FIELD B) 

      This field contains sample references.  The purpose of the
      field is to allow you to pick a journal that has the same
      reference style as the one you are looking for, or one that
      is similar so that you can create a new Reference Style
      Format.



       196


                                       REFERENCE MANAGER

      FORMAT  (FIELD C)

      This field contains the level 1 (general) format of the
      reference.  The format for journals, books, and book
      chapters are included in this field.  Each is separated by a
      carriage return or ~.

      The following symbols are used:

        @A        =   Author field
        @T        =   Title field (journal article or book chapter)
        @S        =   Source field (journal or book)
        @Y        =   Year field
        @V        =   Volume field
        @P        =   Page field
        @H        =   Publisher (publishing house)
        @L        =   Location of publisher
        @E        =   Editors
        @#        =   Number of editors
        @N        =   Edition number


      Where one of these symbols appears, the contents of the
      appropriate field will be placed.  Any other characters in
      the Format Field are included directly in the reference
      (e.g. periods, colons, spaces, and abbreviations such as
      Vol.).

      In the APA example, the Format Code for a journal article
      is  "@A (@Y). @T. @S, @V, @P."  The authors are placed
      first, followed by a space;  then an opening parenthesis,
      the year of publication, a closing parenthesis, a period and
      a space,  next the title followed by a period and a space;
      then the source (in this case journal), a period, space and
      the volume number, comma, space; finally, the page
      numbers and a period.






                                                       197


      3by5 Chapter 14

      AU_CODE  (FIELD D) 

      The AU_CODE field specifies the order in which each
      author's name will be printed.  The elements of each
      author's name are:

         A       Last name
         B       comma
         C       space
         D       First initial
         E       period
         F       space
         G       Second initial
         H       period
         I       space
         J       Third initial
         K       period
         L       space
         M       reserved
         N       reserved
         O       First name
         P       Middle name
         Q       Additional middle name



      For example:
        _____________________________________________________________________

              A  BCDEFGHIJKL
              |  ||||||||||| 
            Jones, R. F. G. 
        _____________________________________________________________________


      A is the last name "Jones"; B is the comma after the name
      Jones, C is the space after the comma and so on.





       198


                                       REFERENCE MANAGER


      THE NAME OF EACH AUTHOR MUST BE ENTERED
      INTO A REFERENCE RECORD IN THE ABOVE
      FORMAT, EXCEPT THAT THE SPACES BETWEEN
      INITIALS ARE NOT INCLUDED.  THE REFERENCE
      MANAGER ADDS THESE TO THE NAME.  

      In the above example the author's name would be entered
      as "Jones, R.F.G." and the program would expand it to
      "Jones, R. F. G.".  



      2AUconj  (FIELD E)   Two Authors

      This field specifies the punctuation and conjunction used to
      join authors in a reference when there are only two
      authors.  For example:
        
                 Spetch, M.L., & Wilke, D.M. 
                 Abbritton, Robert B. and Jarol B. Menheim

      It is important  to include spaces in the field.  In the APA
      format, the 2AUconj = ", & ".  The conjunction "&" is
      followed by one space.  In the second example there is a
      space before and after the conjunction "&".



      3AUconj  (FIELD F)  Three or more Authors

      This field specifies the punctuation and conjunction used to
      join the last author to the other authors in a reference. 
      It is important  to include spaces in the field.  In the APA
      format, the conjunction format for 3 or more authors is
      the same as for 2.  



       


                                                       199


      3by5 Chapter 14

      ETAL  (FIELD G)

      This field consists of two digits separated by a comma. 
      The first digit indicates the number of authors allowed in a
      reference before using the abbreviation et al. and the
      second digit indicates the number of authors to be placed
      before the et al.  For example, the code "3,1" indicates
      that if a reference has more than three authors, the
      abbreviation et al. should be used.  The 1 indicates that
      the first author's name will be printed before inserting et
      al.  The code "3,2" would print the first and second
      authors' names before inserting et al.



      TI_CODE  (FIELD H)

      This field contains one of three codes:

      L:  All letters of the title will be converted to lower case
          except for the first letter of the title.  Any upper case
          letter preceded by a "@" symbol will always be in
          upper case.  The "@" symbol will not be included.  For
          example: "Modern art in the USA" would be converted
          to "Modern art in the uSA", while "Modern art in the
          @USA" would be converted to "Modern art in the
          USA".

      A:  The title will be included as is (i.e. no modification of
          the title) in the reference record.

      N:  The title will not be included.










       200


                                       REFERENCE MANAGER

      SO_CODE  (FIELD I)

      The first letter of the Source Code field contains one of
      two codes:

      A:  Include the source as it is in the reference record. 
          For example:  "J. Wildl. Manage." for Journal of
          Wildlife Management.

      D:  Delete periods after abbreviations unless the period is
          preceded by a "@" symbol.  For example:  "J Wildl
          Manage" for Journal of Wildlife Management.

      The second letter of the Journal Code Field may be a "U"
      that indicates that the journal should be underlined.

      For example, the code "AU" indicates that the journal
      name is to be printed as it is (with periods after
      abbreviations) and it will be underlined.


      The 3by5 Reference Manager cannot abbreviate Journal
      names automatically.  If you enter a journal as "Journal of
      Wildlife Management", it cannot be automatically converted
      to "J. Wildl. Manage."


      VOL_CODE  (FIELD J)

      The Volume Code field can be blank or it can contain a
      "B" to indicate that the volume will be printed in bold.











                                                       201


      3by5 Chapter 14

      PAG_CODE  (FIELD K)

      The Page Code Field can contain one of three commands:

      S:  Standard page format.  First page, a hyphen and the
          last page.  For example: 836-839.

      F:  First page only.  For example: 836.

      C:  Compress the last page.  For example: 836-9.



      PUB_CODE  (FIELD L)

      The Publisher Code field is reserved for future use.


      LOC_CODE  (FIELD M)

      The Location Code field is reserved for future use.


      ED_CODE  (FIELD N)

      The Editor Code field specifies the order in which each
      editor's name will be printed.  The Editor Codes are the
      same as those used for the Author Code field.  Note that
      in the example of the APA format, the Author Code
      (ABCDEFGHIJK) is different than the Editor Code
      (DEFGHIJKLCA).


      ED#_CODE  (FIELD O)

      The Edition Number Code field specifies the way in which
      the edition number of a book will be printed.  Editions
      numbers can be converted to ordinal format (e.g. 1st, 2nd,
      3rd, 4th) by using the code @O.  In the APA format the
      Edition Number Code " @O ed." will be converted to " 1st
      ed.", " 2nd ed.", " 3rd ed.", " 4th ed.", etc. 

       202


                                       REFERENCE MANAGER

      This page reserved for notes.









































                                                       203


      3by5 Chapter 14

             
                  








































       204

```
{% endraw %}

## FILE1298.TXT

{% raw %}
```
Disk No: 1298
Program Title: 3by5 Starter Kit version 5.0 (Disk 2 of 2)
PC-SIG version: 2.1

This program is an information handling system that allows your computer
to act like a very efficient 3x5 card system, thus it's name.  This
program would be great for keeping track of small pieces of information
such as a patient listing or small library card catalog.

The 3by5 Starter Kit offers you the following features:

o Fields - up to 10 variable length fields.
o Sort records by one field.
o Improved indexing for records greater that 512 bytes.
o Multiple print formats for mailing labels, 3by5 cards etc.
o Start-up Files that will automatically open your files and set printer
  parameters, etc.
o Directory commands Change, Make, Remove and List directories.
o List files on a disk from within the program along with the date and
  time last modified, and file size.
o Report generator.  Print records in a user defined format.
o Reference Manager.  Enter journal, book and chapter references in a
  standard format and the 3by5 Reference Manager will rearrange them
  into the style required by any journal.
o Correspondence Manager.  Handles all your correspondence needs:
  writing letters, mail merge, correspondence follow-up.
o Field definitions.  Specify Free-text, Line, Numeric, Date, Time, Mask
  and Person fields.
o Macros.  Insert predefined text or issue commands sequences with a
  single key stoke.  Limit of ten user defined macros.
o Manual on Disk.
o Technical support by the author by mail only.

Usage:  Business.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $69.95

File Descriptions:

???????? DOC  Manual (16 files).
README        Brief direction on how to print documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║  <<<<  Disk No: 1298  3by5 Starter Kit version 5.0 (Disk 2 of 2)  >>>>  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the manual, type:                                            ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run the program, insert disk #253 and type:                        ║
║                                                                         ║
║             3BY5 (press enter)                                          ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INDEX.DOC

{% raw %}
```



      INDEX
                                                  Pages

      Adding records                                21
      AUTO3BY5.PRG                                 160
      Automatic start-up                           160
      Block Command                                 29
      Bold Command                                  26
      Browsing                                      41
      Building a 3by5 file                         110
      Building a non-3by5 file                     123
      Close Command                                125
      Codes (special key sequences)                171
      Color settings                               148
      Conditional New Page                          97
      Copy Command (between files)                 127
      Copy Command (within a file)                 127
      Copy Command (within a record)                29
      Copy Fields (while searching)                 61
      Correspondence (Letters and Memos)           175
      Count Command                                 36
      Creating a 3by5 file                         110
      Creating a non-3by5 file                     123
      Cursor movement                               25
      Date Command                                  36
      Directory (Files) Command                    134
      Document Files                               178
      DOS Command                                  152
      DOS Command Line                             163
      Edit Command                                  21
      Editing records                               21
      Environment (DOS)                             14
      Equipment needed to run 3by5                   9
      Erase Command (erase record)                 130
      Erase Command (erase text within a record)    30
      Extended Character Set (Macros)              166
      Extended Character Set (Searching)            55 
      Extended Character Set Codes                 171
      Field Command (On/Off while editing)          36
      Field Types                                  113
      Fields Filter Command                        138
      Fields Redefine Command                      140
      Files Command                                105
      Files Maintenance Command                    136
      Filled Field Search                           54


      INDEX
                                                  Pages

      Help                                          19
      Hold Command (while editing)                  37
      Index Command                                136
      Insert Command (insert a block of text)       31
      Introduction program                          15
      Learn Command                                169
      List Command                                 131
      Load Command (Utilities)                     150
      Load Command (while editing)                  36
      Load Command (while searching)                60
      Macros                                       165
      Margins (editing)                             32
      Margins (printing)                            96
      Mark Command                                  60
      Masks, Field                                 114
      Menus                                         18
      Move Command (between files)                 129
      Move Command (within a file)                 129  
      Move Command (within a record)                30    
      Non-3by5 files                               119
      NULL Field Search                            53
      Numeric String Fields                        113
      Numeric Comparison Operators                  51
      Open Command                                 109
      Pack Command                                 137
      Print Codes Command                           99
      Print Command                                 71
      Print Command (while editing)                 31
      Print Form Codes                              94
      Print Form Command                            74
      Print Hardware Command                       101
      Print Mailing Lists                           91
      Print Top Command                            102
      Printing while editing a record               31
      Program Files                                155
      Quit Command (quit 3by5)                     153
      Quit Command (while editing)                  38
      Quit Command (while searching)                63
      Records Command                              126
      Reference Manager                            181
      Reference Rules                              187
      Reference Style File                         163


      INDEX
                                                  Pages

      Retrieve Command (while editing)              31
      Saving a record (while editing)               38
      Screen display: Slow display                 148
      Screen display: Color settings               148
      Search Command                                41
      Search Command                                47
      Search Auto option                            45
      Search Display option                         44
      Search Mark option                            45
      Search keys (while editing)                   28
      Search Options                                44
      Set Command (DOS)                             14
      Sheet Command (editor)                        32
      Sheet Command (print default value)           96
      Sorting while copying                        127
      Sorting while printing                        72
      Start-up Files                               160
      Status Command                               141
      Underline Command                             27
      Unmark Command                                63
      Update Command                                65
      Utilities Command                            147
      Variable length records                      143
      Windows                                      145
      Write Command (write to Output File)          59
       


        LIMITED WARRANTY

          This program, instruction manual and reference materials are sold
        "As Is" without warranty as to the performance, merchantability, or
        fitness for any particular purpose.  The entire risk as to the results
        and performance of this program is assumed by the customer.
          However, to the original customer only, the publisher warrants the
        magnetic diskette on which the program is recorded to be free from
        defects in materials and faulty workmanship under normal use for a
        period of ninety days from the date of purchase.  If during this
        ninety day period the diskette should become defective, it may be
        returned to the publisher for a replacement without charge (except for
        postage and handling) provided the customer has previously sent in
        customer's limited warranty registration form to the publisher or sent
        proof of purchase of the program.
          Customer's sole and exclusive remedy in the event of a defect is
        expressly limited to replacement of the diskette as provided above. If
        failure of a diskette has resulted from accident or abuse, the
        publisher shall have no responsibility to replace the diskette under
        terms of this limited warranty.
          Any implied warranties relating to the diskette, including any
        implied warranty of fitness for a particular purpose is limited to a
        period of ninety days from date of purchase.  Publisher shall not be
        liable for indirect, special or consequential damages resulting from
        the use of this product.  Some states do not allow the exclusion or
        limitation of incidental or consequential damages, so the above
        limitations may not apply to customer.  This warranty gives the
        customer specific legal rights, and the original customer may also
        have other rights that vary from state to state.

        SOFTSHELL SOFTWARE LICENSE: Softshell grants to customer a
        non-exclusive, paid-up license to use the Softshell Corp. software,
        subject to the following provisions:
        A:       Except as otherwise provided in this software license,
                 applicable copyright laws shall apply to the software.
        B:       Title to the medium on which the software is stored or
                 transferred to customer.
        C:       Customer shall not make, manufacture or reproduce modified or
                 unmodified copies of software for resale.
        D:       Customer may NOT distribute unmodified copies of the software
                 free or for charge unless arrangements have been made with 
                 Softshell Corp.
        E:       All copyright notices shall be retained on all copies of the
                 software.


```
{% endraw %}

## LESSONS.DOC

{% raw %}
```







      APPENDIX: TRAINING LESSONS


      In these training lessons we use the case study method. 
      Our subject is John Shell, a computer consultant who uses
      3by5 in his daily activities.  He uses the following 3by5
      files routinely:

      ADDRESS:  a file of clients, suppliers, business contacts
      and computer journal editors.  Their addresses and
      telephone numbers are included.  He also lists the
      equipment at each client's site.  This file is divided into
      fields of information (e.g. Name, Address, Phone).

      PROGRAMS:  notes and comments on programs the
      consultant uses and recommends.

      REF:  references on sundry topics.

      PROJECTS:  a file of ongoing projects in which the
      consultant is involved.

      MEMOS:  memoranda from the consultant.

      SLIDES:  a list of John's 35mm slides that he uses for
      talks.

      QUIZ:  test questions that John uses for an evening class
      in data processing that he teaches.

      The 3by5 disk comes with samples of John's ADDRESS,
      PROGRAMS and REF files.  You will build the MEMOS file
      as part of a training lesson.










                                                       205


      Lesson 1

      LESSON 1 - Searching 3by5 Files


      3by5 FILES

      3by5 stores your text in files on hard disk or diskette. 
      3by5 files come in pairs:  a SOURCE FILE that contains
      text and structured data, and a companion INDEX FILE. 
      The various types of files are designated by the file
      extension:


      File Type                 Source         Index
                                Extension      Extension

      Standard 3by5             3X5            MAP

      Letter                    LET            IET

      Document                  DOC            IOC

      Macro                     MAC            IAC

      Print Form                PFM            IFM

      Reference                 REF            IEF

      Reference Style           RFS            IFS

      3by5 Program              PRG            IRG




      The significance of the different file types will become
      apparent as you proceed through the lessons.






       206


                                            3by5 LESSONS

      Opening 3by5 Files

      Before you can work with a 3by5 file you must open it. 
      3by5 allows you to open, search and edit up to five files at
      a time.  The open files are referred to as files 1 to 5. 
      The numbering of files is for your convenience in issuing
      commands and referring to the open files.


      Loading the Program

      Insert into drive A the DOS system diskette onto which
      you have copied the 3by5 files (see Installing 3by5 in
      Chapter 2).  Turn on the computer or reset it by pressing
      the Ctrl, Alt and Del keys simultaneously.  Enter the date
      and time if asked.

      DURING THESE LESSONS IT IS IMPORTANT THAT YOU 
      REBOOT THE SYSTEM SINCE 3BY5 REQUIRES THAT 
      DOS BE CONFIGURED FOR 16 OR MORE FILES.

      A NOTE TO HARD DISK USERS:  For these lessons you
      will use only drive A with the system booted to drive A.


      Starting 3by5

      When the "A>" prompt appears, type [3by5] <Enter>.  
      The program will be loaded into memory and the 3by5 Title
      Screen displayed.  Press any key to continue, and the
      following screen will be displayed:











                                                       207


      Lesson 1

         
        _____________________________________________________________________
        3by5
              Open Files
         1
         2
         3
         4
         5




        >Edit<  Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________


      The screen has three sections:  

      3by5 Status Line:  The top line of the screen indicates
      where you are in the program (searching, editing, etc).

      Text Window:  Text while editing and searching is
      displayed in this area.  The names of open files are also
      displayed in this section as needed.

      Command Menu: The last two lines of the screen are
      reserved for menus used to issue instructions.













       208


                                            3by5 LESSONS

      MAIN MENU   

      When you first enter the progam, the Main Menu is
      displayed:

        _____________________________________________________________________
        >Edit<  Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________
       

      The first line (Command Line) of the Main Menu lists the
      commands that may be executed.

      The second line (Auto Help Line) is highlighted,
      i.e. displayed in reverse video.  It gives you information on
      the current command.

      On the Command Line the command EDIT is highlighted
      (depicted in this documentation by being enclosed by ><
      signs).  The area in reverse video is called the Command
      Indicator.  Press the space bar once and the command
      EDIT will appear in standard video and the command
      SEARCH will be highlighted.  Press the space bar again
      and the PRINT command will be highlighted.  You can
      move the Command Indicator by pressing the space bar,
      left or right arrow keys, or back space key.

      You may execute a command by positioning the Command
      Indicator on the command and pressing <Enter>, or by
      pressing the first letter of the command, regardless of
      where the command indicator is located.

      If you become lost while using 3by5 and are not certain
      what to do next, read the Auto Help Line at the bottom of
      the screen.  The information on the line should help you
      decide what to do next.  If you are still lost, press <F1>
      for help.




                                                       209


      Lesson 1

      Opening Files

      Press [F] to issue the Files Command.  The current
      directory will be displayed under the list of open files. 
      The Files Command Menu will be displayed at the bottom
      of the screen:

        _____________________________________________________________________
        >Open< Close Records List Dir Maintenance Fields Status 
        Open file
        _____________________________________________________________________


      The Auto Help Line informs you that you use the Open
      Command to open a file.  Press [O] and the program will
      prompt you:

        _____________________________________________________________________
        File:
        Type name of file to open and press <Enter>;   <Esc> to quit
        _____________________________________________________________________

        
      The cursor will be blinking; waiting for you to enter the
      name of the file you want to open.

      Type [programs] <Enter> to open the first sample file. 
      Type only the characters within the square brackets [ ],
      but not the brackets.
        
      The program will open the file.  If there are any errors in
      opening the file, the program will inform you of the
      problem, wait for you to press <Enter> and then allow you
      to re-enter the file name.  If there were no errors, the
      screen will appear as follows:







       210


                                            3by5 LESSONS

        _____________________________________________________________________
        3by5 Files
            Open Files
        1   A:/PROGRAMS.3X5  
        2
        3
        4
        5

        Dir: A:/




        File:
        Type name of file to open and press <Enter>;  Press <Esc> to quit
        _____________________________________________________________________




      After the source and index files have been opened, the
      name of the file will be displayed on the third line of the
      screen across from the number 1.  

      The program will prompt you for the name of the second
      file to open.  We will not open another file at this time. 
      Press <Esc> to return to the Main Menu.


      Searching a File
       
      The Main Menu should appear as below:

        _____________________________________________________________________
        >Edit< Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________




                                                       211


      Lesson 1

      You are now ready to search the file.  Press [S] and the
      following screen will appear:


        _____________________________________________________________________
        3by5 Search[A:\PROGRAMS.3X5]
        Global








        Type search keys; press <F7> for commands
        _____________________________________________________________________



      The program is ready to accept a search key.  A key is
      any word, partial word, phrase or number that you want to
      search for.  As you will see, you may also search for
      combinations of keys.


      The term "Global" under the Field title designates that the
      search will include the entire record.


      Finding Single Keys

      A client has called John and asked him to recommend a
      program for storing and retrieving textual information. 
      The client wants to be able to search on any word, partial
      word or combination of words.

      Type [text].  Note that with 3by5 you do not have to be
      concerned about capitalization.  



       212


                                            3by5 LESSONS

      Press <F7> for the Search Key Menu:

        _____________________________________________________________________
        >Search< Browse  Files  Print  Write  Update  Options  Clear  Quit
        Start Search <F2>
        _____________________________________________________________________



      The Search Menu Commands are:


      Search:    Press [S] to start an interactive
                 search for records that match the
                 search key.

      Browse:    Press [B] to browse forward and
                 backward through one or more files.

      Files:     Press [F] to select the files to be searched.

      Print:     Press [P] to Print all records found during the
                 search to the current printer or print file.

      Write:     Press [W] to Write (copy) all records
                 found during the search to another
                 file, the output file.

      Update:    Press [U] to update (modify, search
                 and replace) records found during
                 the search.

      Options:   Press [O] to select Search Options:
                   Select Output File
                   Specify search display
                   Select record marking options

      Clear:     Press [C] to clear previous search keys.

      Quit:      Press [Q] to return to the previous task.


                                                       213


      Lesson 1

      Press [S] to begin a search.

      The message "Search[A:\PROGRAMS.3X5]" will be displayed
      on the top line to indicate that the program is searching
      PROGRAMS.3X5. 

      The first summary will be found, and the record displayed.
      The number of the record will be displayed on the top line.

      In the manual search mode 3by5 displays one record at a
      time and waits for instructions from you before
      continuing.  At the bottom of the screen the Search
      Command Menu will be displayed:

        _____________________________________________________________________
        >Forward< Backward Goto Edit Print Write Load Mark Copy Other Quit
        Search/Browse; forward direction
        _____________________________________________________________________


      We will examine the various commands of the Search
      Command Menu as we proceed through the lessons.  Press
      [F] to continue the search.  The next record containing
      the search key "text" will be displayed.  

      You may quit the search at any time by pressing [Q] in
      response to the Search Menu.  When the search is
      completed the following menu will be displayed:


        _____________________________________________________________________
        >Modify< Add  Back  Count  Return
        Modify search keys
        _____________________________________________________________________



      Press [M] to return to the Search Key Screen.




       214


                                            3by5 LESSONS

      Using Partial Keys

      John has a request from a client to find a program that
      will help him determine the best carrier for his long
      distance calls.  John knows of a program that will handle
      the task but can't remember whether it's called
      "TELEDOLL" or "TELEDIAL".

      The Search prompt should be present.  Press <F7> then [C]
      to clear the last search key.  Type [teled] and press <F2>
      (an alternate method to start a search).  The program will
      begin to search for all records with the letters "teled". 
      One record is found.  John calls his client with the
      information.

      Press [Q] to quit, then [M] for the Search Key Screen. 
      Press <F3> to erase the previous search key.


      Using Multiple Keys

      Records that contain two or more key terms may be found
      by using the logical operators "AND" (&) or "OR" (|).  The
      "AND" operator is represented by the ampersand (&).  The
      "OR" operator is represented by the vertical bar (|).

      To search for a program that stores free-text and has
      special features to handle references type [free-text&refer]
      <F2>.  One program will be found.  Press [Q] then [M].

      When the Search prompt appears again, the prior search
      key "free-text&refer" will be displayed.  The cursor will be
      under the letter "f" in free-text.  Press the right arrow
      key nine times and the cursor will be under the ampersand
      ("&").  Now hold the shift key and press the "|" key. 
      Then press <Del> to delete the ampersand.  Press <F2> and
      the program will locate all records with either "free-text"
      or "reference".




                                                       215


      Lesson 1

      Spaces in Search Keys

      A space character in a search key is treated as a logical
      AND operator (&).  The search key "John Smith" is
      equivalent to "John&Smith" and will locate "John Smith",
      "Smith, John", and "John B. Smith".  If the search key is
      enclosed in quotes, spaces are treated as text, not the
      logical AND operator.


      Browsing

      The Browse Mode of the Search Command allows you to
      look at a file without specifying a search key.  All records
      will be displayed.  Press <F7> for the Search Key Menu. 
      Then press [B] to browse through records one at a time. 
      The first record in the file will be displayed and the
      Search Command Menu will be displayed.  Press <Enter> or
      [F] again and the second record will be found.  Press [B]
      and the previous record will be displayed.  Press [G] and
      the program will prompt you:

        _____________________________________________________________________
        Goto Record
        Records in file A:\PROGRAMS.3X5: 15
        _____________________________________________________________________

      Type [6] <Enter> and the program will take you to record
      6.

      You may want to browse through all the records in the file
      to review the other programs listed.










       216


                                            3by5 LESSONS

      LESSON 2  -  Building and Editing 3by5 Files


      Building a 3by5 File

      Start from the Main Menu.  Press [F] for the Files
      Command, then press [O] to OPEN a file.  The program
      will prompt you to enter the name of the file to be
      opened.

      Type [memos.let] <Enter> to open file MEMOS.LET and its
      companion index file MEMOS.IET.

      The program will attempt to open the file.  Since the file
      is not present on the diskette, the program will prompt
      you:

        _____________________________________________________________________
        File: memos.let
        Unable to open file.  Do you want to build the file? (Y/N) Y
        _____________________________________________________________________


      If you do not want to create a new file (e.g., if you typed
      the wrong name), press [N].


      We want to build a new file, so press [Y] and the
      following prompt will appear:

        _____________________________________________________________________
        File: memos.let
        Build like: (0 - 5)        0 = new file
        _____________________________________________________________________


      If one or more files are already open and you build a file,
      the program will allow you to use the file settings of an
      open file for the new file.  



                                                       217


      Lesson 2

      We will use the default settings, so press [0] and the
      program will display the following screen:

        _____________________________________________________________________


        File Types:

        A  3by5
        B  Letter
        C  Document
        D  Reference
        E  Reference Sytle
        F  Print Form
        G  Macro
        H  Program
        I  Mark
        J  ASCII, WordStar, WordPerfect




        Select file type: A
        _____________________________________________________________________

      Press [B] to instruct the program to build a 3by5 Letter
      file.  The program will display the following menu:

        _____________________________________________________________________
        2x4 >3x5< 4x6  5x7  Page  VLR  Other
        512 bytes
        _____________________________________________________________________


      With this menu you define the size of each record in the
      file.  This is an important number.  Once you specify it
      for a file, it cannot be changed.

      Press [5] to define a record size of 2048 bytes.



       218


                                            3by5 LESSONS

      The program will build both the source and index files, and
      then prompt you to enter the name of another file to
      open.  

      Press <Esc> to return to the Main Menu:

        _____________________________________________________________________
        >Edit< Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________


      Adding a Record to a 3by5 File

      You will now learn how to edit records using file MEMOS. 
      The Main Menu should appear at the bottom of the screen,
      if not, press <Esc>.

      Press [E] to Edit the file.  The program will ask you to
      select a file to edit.  Press [2] to select the second file
      (MEMOS.3X5).  The program will then prompt you for the
      number of the record to edit: 

        _____________________________________________________________________
        Edit Record: 1
        Records in file A:\MEMOS.LET: 0
        _____________________________________________________________________

      The number adjacent to the message "Edit Record" is
      always equal to the number of records in the file plus
      one.  This allows you to just press <Enter> to add a record
      to the file.  Since there are no records in the new file,
      the number "1" is displayed.  
       
      Press <Enter> to add a record to the file.







                                                       219


      Lesson 2

      The screen will be blank except for the Edit Command
      Message at the bottom of the screen:

        _____________________________________________________________________
                                                       Line 1  Col 1
        <F1> Help   <F7> Commands
        _____________________________________________________________________



      The blinking cursor is positioned at the upper left corner
      of the window.  The  bottom two lines of the screen
      provide editing information.  The first line displays the line
      and column numbers of the cursor.  


      The bottom line informs you that pressing <F7> will give
      you the Edit Command Menu, and pressing <F1> will give
      you a list of the function key assignments.

      If you press the Caps Lock, or Num Lock keys the message
      "CAPS" or "NUM" will be displayed at the bottom right of
      the screen.  Pressing the key again turns the message off. 




      Typing New Text

      Type the following text (remember, type only the
      characters within the square brackets, not the brackets):

          [This is line one] <Enter>
          [This is l two] <Enter>
          [Thas are line three] <Enter>







       220


                                            3by5 LESSONS

      The text will appear as shown below:

        _____________________________________________________________________
            This is line one<
            This is l two<
            Thas are line three<
        _____________________________________________________________________

      Note that when you press <Enter>, the program places a
      solid left pointing triangle at the end of the line
      (represented by "<" in this documentation).

      Next you will correct the errors in the text. 



      Inserting one character at a time

      The 3by5 editor is routinely in the Insert Mode.  Use the
      arrow keys to position the cursor on the space to the right
      of the solitary letter "l" in line 2.  Type [ine]. The text
      will appear as follows:

        _____________________________________________________________________
            This is line one<
            This is line two<
            Thas are line three<
        _____________________________________________________________________


      Overtyping

      Use the cursor keys to position the cursor on the third
      character of the third line (the "a" in "thas").  Press <Ins>
      to switch to the Overtype Mode.  The message "OVER" will
      appear on the bottom line.    Press [i] to enter the letter
      "i" where the letter "a" is.  Press <Ins> to return to the
      Insert Mode.  




                                                       221


      Lesson 2

      The screen will appear as follows:

        _____________________________________________________________________
            This is line one<
            This is line two<
            This are line three<
        _____________________________________________________________________


      Deleting one character at a time

      You should be in insert mode.  If not, press <Ins> and the
      message "OVER" will be erased from the bottom of the
      screen.  Position the cursor on the letter "a" in the word
      "are" in the third line and type [is].  The screen will
      appear as follows:


      _____________________________________________________________________
          This is line one<
          This is line two<
          This isare line three<
      _____________________________________________________________________

                  

      The cursor will now be positioned at the letter "a".  Press
      <Del> three times to delete the letters "a", "r" and "e"
      respectively.  The text will now appear as follows:


        _____________________________________________________________________
            This is line one<
            This is line two<
            This is line three<
        _____________________________________________________________________






       222


                                            3by5 LESSONS

      Inserting multiple lines of text - word wrap

      In the example above inserting text was confined to one
      line.  The same method is used to insert multiple lines of
      text.  For example, position the cursor to the space to the
      right of the word "is" in line two.  Type:

          [ a test of character insertion and word wrap.  By the
      time I have typed this far, the cursor is no longer on]

      Press the Up or Down arrow key to realign the text. 


      Deleting multiple characters

      Position the cursor on the first "c" of the word "character"
      on the second line.  Press <Del> twenty four times and
      watch the characters to the right of the cursor shift to
      the left each time you press <Del>.  Then press the Up or
      Down arrow key to realign the text.



      Saving Your Text

      Press <F7> and the Edit Command Menu will appear at the
      bottom of the screen:
        
           

        _____________________________________________________________________
        Search  Block  Insert  Retrieve  Print  Other  Hold  Quit
        Search a file <F2>
        _____________________________________________________________________


        





                                                       223


      Lesson 2

      Press [Q] to quit, and the following menu will be displayed:
         

        _____________________________________________________________________
        >Save< Abort  Next  Next  Previous  Goto  Bypass
        Save record; return to previous task
        _____________________________________________________________________
       


      Press [S] to save the record and the program will add the
      record to the file and return to the Main Menu:

        _____________________________________________________________________
        >Edit<  Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________


      If you wanted to add another record to the file, you could
      have pressed [N] for Next and the record would have been
      saved and the next record made available for editing.




















       224


                                            3by5 LESSONS

      Editing while searching

      Press [F] for the Files Command.  When the Files Command
      Menu appears, press [C] to close a file.  The program will
      prompt you:

        _____________________________________________________________________
        File: 1
        Enter number of file to close
        _____________________________________________________________________

      Press [1] to close the file PROGRAMS.3X5.

      Then press [O] to open another file. Type [ADDRESS]
      <Enter> to open the file ADDRESS.3X5.  After the file is
      opened, press <Esc> to return to the Main Menu.  Then
      press [S] to begin a search.  The program will prompt you
      for the range of files to search:

        _____________________________________________________________________
        Enter range of files to search: 1-1

        _____________________________________________________________________


      You may specify a range of files to search by typing a
      starting number, a hyphen, an ending file number and then
      press <Enter>.  If you type only one file number and press
      <Enter>, then only that file will be searched.

      Type [1] <Enter> for file 1, the ADDRESS file, and the
      following screen will appear:










                                                       225


      Lesson 2


        _____________________________________________________________________
        3by5 Search[A:Address.3x5]
        Global
        NAME
        ADDRESS
        PHONE
        COMMENTS



        Type search keys; press <F7> for commands
        _____________________________________________________________________




      When the prompt Search Screen appears, press <F3> to
      clear any previous keys.  The cursor will be on the Global
      search line.  Press the down arrow once to move to the
      Name field, and type [softshell] <F2>.

      The first record with the name Softshell in the Name field
      will be displayed.  It is the Softshell Crab Company of
      Baltimore.  Press [F] to continue the search.  Record 13
      will be displayed. 

      Type [E] to edit the record.  The 3by5 editor will take over
      and the Edit Command Message lines will displayed at the
      bottom of the screen.  The cursor will be at row 1, column
      1.    
       
      The records in the address file are different than those that
      you have worked with before.  There are four fields:


        1.       NAME
        2.       ADDRESS
        3.       PHONE 
        4.       COMMENTS


       226


                                            3by5 LESSONS

      To move from one field to another, press <Ctrl-Enter> or
      <F9>.  The cursor will move from its current location to the
      start of the next field.

      If the cursor is in the last field it will move up to the first
      field.  

      You will insert the new comments in the comment field. 
      Move to the end of the comments field by pressing
      <PgDn>.  Type [  This is an additional comment.]


      Press <F7> for the Edit Command Menu.  Press [Q] to quit
      and [S] to save the changes made to record 13.  

      The program will then return to the search mode.  Press
      [Q] to quit the search.  The program will display the
      following menu:

        _____________________________________________________________________
        >Modify<  Add Back  Count  Return
        Modify search keys
        _____________________________________________________________________


      Press [R] to return to the Main Menu:

        _____________________________________________________________________
        >Edit< Search  Print  Files  Windows  Utilities  Quit
        Edit file
        _____________________________________________________________________











                                                       227


      Lesson 2

      Searching While Editing



      In this part of the lesson you will return to the first record
      that you edited.  Type [E] for Edit, type [2] to select file
      two, and then type [1] <Enter> to select record one.  The
      program will retrieve the record and display it on the
      screen.  Press <Alt-F4> to define a block of text.  

      Press <PgDn> and the cursor will move to the end of
      text. The entire text will be highlighted.  Press <Alt><F4>
      again and the following prompt will appear at the bottom
      of the screen:

        _____________________________________________________________________
        1 Cut  2 Copy  3 Delete  4 Underline  5 Bold  6 Block off:  0

        _____________________________________________________________________


      Press [3] to delete the block of text.  The program will
      prompt you: 

        _____________________________________________________________________
        Delete  1 Underline   2 Bold   3 Text:  0

        _____________________________________________________________________


      Press [3] and the text that is highlighted will be erased. 
      The cursor will now be at row 1, column 1.










       228


                                            3by5 LESSONS

      You are now ready to type a memo.  Type the following:

                   

        MEMORANDUM <Enter>
        <Enter>
        TO:    My Clients <Enter>
        FROM:  John Shell <Enter>
        <Enter>
        <Enter>
        This is a brief note to inform you that Softshell has released a
        new version of 3by5.  Version 5.0 has multiple field types, 
        macros for editing and issuing commands, extended character set 
        menus and record marking while searching.<Enter>
        <Enter>
        <Enter>
        Their current address is:<Enter>
        <Enter>
























                                                       229


      Lesson 2

      Stop after you type the last <Enter>.  The screen should appear
      as follows:
                   
        _____________________________________________________________________
        3by5 Edit[A:\MEMOS.LET]#1
        MEMORANDUM <
        <
        TO:    My Clients <
        FROM:  John Shell <
        <
        <
        This is a brief note to inform you that Softshell has released a 
        new version of 3by5.  Version 5.0 has multiple field types, 
        macros for editing and issuing commands, extended character set 
        menus and record marking while searching.<
        <
        <
        Their current address is:<
        <
        _____________________________________________________________________


      Searching While Editing


      You will suspend editing and search the file ADDRESS.3X5
      for the address of Softshell.

      Press <F7> for the Edit Command Menu.  Then press [S] to
      search a file.  The names of the open files will be displayed
      and the program will prompt you to enter the range of
      files to search.  Type [1] <Enter> to select file
      ADDRESS.3X5.  The following search screen will be
      displayed:








       230


                                            3by5 LESSONS

        _____________________________________________________________________
        3by5 Edit[A:\MEMOS.LET] Search[A:\ADDRESS.3X5]
        Global
        NAME
        ADDRESS
        PHONE
        COMMENTS



        Type search keys; press <F7> for commands
        _____________________________________________________________________


      The 3by5 Status Line informs you that you had been editing
      and started to search.


      If any previous search keys are present, press <F7> and [C]
      to clear the screen. 

      The cursor should be in the Global field.  Type
      [softshell&3by5].  Press <F7> then [S] to begin a search.

      The record for Softshell will be located and displayed. 
      Press [C] to copy part of the record.

      The program will prompt you:

        _____________________________________________________________________
        Fields to copy:
        Type order of fields for copying.  Empty line = all fields
        _____________________________________________________________________


      Type [B] <Enter>.  The program will copy the contents of
      field B (address) into the Temporary  Text Buffer. Press
      [Q] to quit the search, then [R] to return to editing of
      MEMOS.LET.



                                                       231


      Lesson 2

      Press <Ctrl-F4> to retrieve the contents of the Temporary
      Text Buffer.  The screen will look as follows:
                  
        _____________________________________________________________________
        3by5 Edit[MEMOS.LET]#1
        MEMORANDUM <
        <
        TO:    My Clients <
        FROM:  John Shell <
        <
        <
        This is a brief note to inform you that Softshell has released 
        a new version of 3by5.  Version 5.0 has multiple field 
        types, macros for editing and issuing commands, extended 
        character set menus and record marking while searching.<
        <
        <
        Their current address is:<
        <
        Softshell
        1254 Thornbury Road<
        West Chester, PA 19382<


        _____________________________________________________________________


      A single macro can be designed to execute all the steps
      needed to copy a block of text into another record while
      searching.

      Press <PgDn> to go to the end of text and finish the memo
      by typing:


           <Enter>
           <Enter>
           [Please contact me if you have any questions]

      Press <F7> for the Edit Command Menu.


       232


                                            3by5 LESSONS

      If you have a printer attached to the computer, you may
      print a copy of the memo by pressing [P].

      Press [Q] to quit.  Then [S] to save the memo.


      Press [Q] to quit 3by5.  The program will prompt you: 

        _____________________________________________________________________
        >No< Yes
        Do not quit; continue 3by5
        _____________________________________________________________________


      This last question prevents you from accidentally quitting
      3by5.  You must press [Y] to quit.  Press [Y] and the program
      will automatically close all open 3by5 files and return to DOS.  


      See Chapter 4 for more details on editing records.  






















                                                       233


      LESSON 3  -  COPYING AND SORTING RECORDS


      In this session you will learn how to selectively copy (and in
      the process sort) records from one file to another file.  The
      file may be a standard ASCII file, WordStar or WordPerfect
      Document file or another 3by5 file.  


      Opening files REF.REF and NEWREF.REF

      Restart 3by5.  Press any key after the Title Screen is
      displayed.  Then press [F] for the Files Command and then
      press [O] for the Open Command.  Type [ref] <Enter> to open
      the reference file.  After the file is opened, the program will
      prompt you for the name of the next file to open.  Type 
      [newref] <Enter>.  The program will attempt to open the file,
      but the file is not present on the diskette.  It will then ask
      you whether you want to build the file:

        _____________________________________________________________________
        File: newref
        Unable to open file.  Do you want to build the file? (Y/N)
        _____________________________________________________________________

      Press [Y] to build the file, and the program will prompt you:

        _____________________________________________________________________
        File: newref
        Build like (0 - 5)        0 = New file
        _____________________________________________________________________

      Press [1].  











       234


                                            3by5 LESSONS

      The following screen will be displayed:

        _____________________________________________________________________
        3by5 Files
          Open Files
        1 A:\REF.REF
        2
        3
        4
        5

        Build File: A:\NEWREF.REF
           Name      Type    Format/Mask     Name      Type    Format/Mask
        A  AUTHORS   Free                 N  STYLE     Free
        B  TITLE     Free                 O
        C  SOURCE    Free                 P
        D  YEAR      Date    yyyy         Q
        E  VOLUME    Line    20           R
        F  PAGES     Line    20           S
        G  PUB_CO    Free                 T
        H  PUB_LOC   Line    50           U
        I  EDITORS   Free                 V
        J  EDITION#  Number  02.00        W
        J  CODE      Line    30           X
        L  KEYWORDS  Free                 Y
        M  COMMENTS  Free                 Z

        Field Name: AUTHORS
        <Esc> Cancel  <F10> Save  <F3> Delete Field  <F4> Insert Field
        _____________________________________________________________________












                                                       235


      Lesson 3

      The fields are:

      AUTHORS:   The authors of the reference.

      TITLE:     The title of the reference.

      SOURCE:    The name of the journal in which the reference
                 appears.

      YEAR:      The year of publication.

      VOLUME:    The volume in which the reference appears.

      PAGES:     The pages of the reference.

      PUB_CO:    The name of the publisher.

      PUB_LOC:   The location of the publisher.

      EDITORS:   The editors, if any.

      EDITION#:   Edition number.

      CODE:      A code number assigned to the article that
                 designates where the article is filed in a collection
                 of reprints.

      KEYWORDS:   Keywords that do not appear in the title, but are 
                  useful in retrieving the document.

      COMMENTS:    Comments on the article.

      STYLE:     This field is empty.  The reformatted reference will
                 be placed in this field.








       236


                                            3by5 LESSONS

      Field names may range from zero to eight character in length.

      Use the Up and Down Arrow keys to move to a field to make
      any changes or corrections.  When you are ready, press <F10>
      to save the field definitions.  The following prompt will appear:


        _____________________________________________________________________
        2x4  >3x5< 4x6 5x7  Page  VLR  Other
        512 bytes
        _____________________________________________________________________


      Press [4], and the file will be built with a record length of
      1024 bytes.

      After NEWREF.REF is opened, the program will ask you for the
      name of the next file to open.  Press <Esc>.  The Main Menu
      will appear.  Type [F] for the Files Command Menu:
       
        _____________________________________________________________________
        >Open< Close  Records  List  Dir  Maintenance  Fields  Status 
        Open file
        _____________________________________________________________________

                                 
















                                                       237


      Lesson 3

      Copying and sorting records from REF.3X5 to NEWREF.3X5

      Press [R] for the Records Command.  At the bottom of the
      screen the following prompt will appear:

        _____________________________________________________________________
        >Copy< Move Erase
        Copy a group of records (source records are not changed)
        _____________________________________________________________________

      Press [C] to Copy records.  The program will ask for the
      source file.  Type [1] to specify REF.3X5 as the source file. The
      program will then ask for the destination file.  Type [2] to
      select NEWREF.REF.  

      The program will then ask you for the source range.  Type [4]
      <Enter>.  This is the start of the range of records to copy. 
      Then type [16] <Enter>.  This is the last record in the source
      file to copy.  

      The program will ask for the destination range.  Press <Enter>
      for the default record, number one.



      Then you will be asked:

        _____________________________________________________________________
        Sort records? (Y/N)                       Sort buffer size: xxxxx
        _____________________________________________________________________


      Press [Y] and the program will prompt you:   









       238


                                            3by5 LESSONS

                    

        _____________________________________________________________________



         A    AUTHORS         H   PUB_LOC 
         B    TITLE           I   EDITORS 
         C    SOURCE          J   EDITION#
         D    YEAR            K   CODE
         E    VOLUME          L   KEYWORDS
         F    PAGES           M   COMMENTS
         G    PUB_CO          N   STYLE



         
        Primary sort field (A-N): A
        _____________________________________________________________________


      The program is prompting you to specify the primary field for
      sorting.  Press [A].  The program will then prompt you for the
      secondary sort field.  Press [D] to select the year field.

      The program will sort the records and display the record
      numbers as each source record is copied to the destination
      file.  

      When the program is finished sorting and copying the records,
      press <Esc> two times to return to the Main Menu.  

      Press [S] and then press [2] <Enter> to search the file
      NEWREF.REF.  In response to the search key prompt,  press
      <F7> then [B] browse through the file.  You will see that the
      references have been sorted by first author and the year of
      publication.  





                                                       239


      LESSON 4  -  REFERENCE MANAGER

      The fields in REF.REF:

      AUTHORS:   The authors of the reference.

      TITLE:     The title of the reference.

      SOURCE:    The name of the journal in which the reference
                 appears.

      YEAR:      The year of publication.

      VOLUME:    The volume in which the reference appears.

      PAGES:     The pages of the reference.

      PUB_NAME:  The name of the publisher.

      PUB_LOC:   The location of the publisher.

      EDITORS:   The editors, if any.

      EDITION#:   Edition number.

      CODE:      A code number assigned to the article that
                 designates where the article is filed in a collection
                 of reprints.

      KEYWORDS:   Keywords that do not appear in the title, but are 
                  useful in retrieving the document.

      COMMENTS:    Comments on the article.

      STYLE:     This field is empty.  The reformatted reference will
                 be placed in this field.








       240


                                            3by5 LESSONS

      Selectively writing records from REF.3X5 using the 3by5
      Reference Manager.

      You will now search for a few references and write certain
      ones to an output file.  The references will be formatted to
      the style of the journal Nature.

      Press <Esc> one or more times to return to the Main Menu. 
      Then press [F] for the files command.  Press [O] to open a
      file.  Type [refstyle] <Enter> in response to the file name
      prompt.  The program will open the Reference Style file
      REFSTYLE.REF.  

      It will then prompt you for the name of the next file to open. 
      Type [ref.txt] <Enter>.  If you have not used the disk for this
      lesson before, the file will not be found, and the program will
      ask you whether you want to build it.  Type [Y] and then [0]. 
      The program will then ask for the file type.  Press [J].


      The program will pause and then ask you:

       FILE TYPE:  1.ASCII  2.WordStar  3.WordPerfect  1

      Press [1].

      The program will then ask:

         Numbered reference file? (Y/N) N

      Press [Y].

      Next the program will ask whether the are less than 100
      references in the output file.  Press [Y].

      Next it will ask whether there is a blank line between
      references.  Press [Y].


      Lastly, it will ask the starting number of the first reference. 
      Type [1] <Enter>.

                                                       241


      Lesson 4


      The file will be opened.  Press <Esc> to return to the Main
      Menu.  

      Press [S] to Search.  The program will ask for the range of
      files.  Type [3] <Enter> to search the file REFSTYLE.  

      The Search Key Menu will be displayed.  Type [nature] <F2>. 
      The record for the journal Nature will be found.  The Search
      Command Menu will be displayed at the bottom of the screen:  

        _____________________________________________________________________
        >Forward< Backward Goto Edit Print Write Load Mark Copy Other Quit
        Search/Browse; forward direction
        _____________________________________________________________________


      Press [L] to load a record.  The program will load the record
      as a Reference Style record that will be used to format the
      references in REF.REF.  Then press <Esc> several times to
      return to the Main Menu.

      Press [S] to Search.  Type [1] <Enter> to specify that REF.REF
      will be searched.  

      The prompt "Search Key:" will appear.  Press <F7>, then [O]
      for the Search Options Menu:
        














       242


                                            3by5 LESSONS

       
        _____________________________________________________________________
        >Display< Output  Auto  Mark
        Page  Topline
        _____________________________________________________________________



      Press the space bar several times to review the different
      options.  You will only change one, the output file.


      Press [O] to specify the output file.  The program will list the
      open files and ask you to enter the number of the output file
      (i.e. the file that will receive the records).  Press [4] to select
      REF.TXT.  The Search Options will be displayed again;  press
      <Esc> to return to the Search Key window.  Clear any previous
      search keys by pressing <F3>.  

      Type [abbott] <F2> to begin a search for records with the
      name Abbott. 

      When the first reference with the name "Abbott" is displayed,
      the Record Command Menu will be displayed at the bottom of
      the screen.  Press [W] to write the currently displayed record
      to the Output File.  

      The letter "W" will be displayed in reverse video in the upper
      right corner of the screen to inform you that the record was
      written.  It will stay there until you continue the search for
      another record.  If you should press [W] again, a second copy
      of the record will be written.  The letter "W" in the upper
      right corner alerts you to the fact that you have written the
      record to the output file once and should prevent multiple
      copies of the record being written to the output file by mistake.

      Now press [F] to continue the search, and the search will end
      since there are no other records with the name "Abbott".  




                                                       243


      Lesson 4

      Press [M] to Modify the search key.  Erase the search key and
      type [murphy] <F2>.

      The first reference with the name "Murphy" will be displayed. 
      Press [W] to write the reference to the output file, then press
      [F] to continue the search.

      The second reference with the name "Murphy" will be
      displayed.  It is not one that we will copy to the output file,
      so press [S] to continue the search.

      No other references will be found.  Press <Esc> four times to
      return to the Main Menu.  


      Press [S] to begin a new search.  This time select file
      REF.TXT.  Press <F7>, then [B] to browse through the entire
      file.  You will see that the references that you copied to
      REF.TXT have been formatted according to the style used in
      the journal Nature. Since the file is an ASCII file, bold and
      underline commands are not present.  If the file were a
      WordStar or WordPerfect file, the commands would be present.

      The output file may be imported into a word processing file. 


















       244


                                            3by5 LESSONS

      LESSON 5  -  ADDING AND MODIFYING FIELDS IN A FILE

      3by5 files that have no fields may be converted to files with
      fields by a two-step process.  First you Redefine the fields in
      the file, then you manually mark the end of each field. 
      NOFIELDS.3X5 is a 3by5 file provided on the 3by5 diskette for
      practice converting files without fields to those with fields. 
      The first record is:

        _____________________________________________________________________
        Jones, John<
        Purchasing Agent<
        <
        ACME Industries<
        Suite 234<
        111 Eastern Highway<
        Baltimore, MD 21230<
        <
        301-555-2385<
        <
        _____________________________________________________________________


      Step 1.  Redefining Fields in the File

      Close any open files.  Open file NOFIELDS.3X5.  Then return
      to the Main Menu.  Press [F] for the Files Command, the [F]
      again for the Fields Command:


        _____________________________________________________________________
        >Filter<  Redefine

        _____________________________________________________________________

      Press [R] to instruct the program to redefine the fields in a
      file.  The program will ask for the number of the file.  Select
      the file NOFIELDS.  The screen will the appear as follows:




                                                       245


      Lesson 5


        _____________________________________________________________________
        3by5 Files
            Open Files
        1   A:\NOFIELDS.3X5
        2
        3
        4
        5

        Redefine file: A:\NOFIELDS.3X5
           Name      Type    Format/Mask     Name      Type    Format/Mask
        A                                 N
        B                                 O
        C                                 P
        D                                 Q
        E                                 R
        F                                 S
        G                                 T
        H                                 U
        I                                 V
        J                                 W
        J                                 X
        L                                 Y
        M                                 Z

        Field Name:
        <Esc> Cancel  <F10> Save  <F3> Delete Field  <F4> Insert Field
        _____________________________________________________________________













       246


                                            3by5 LESSONS


      This screen is used to redefined fields for the file.

      Define the following fields:

      Field      Field Name     Type      Mask/Format

       A         NAME           Person    30
       B         TITLE          Line      50
       C         ADDRESS        Free
       D         PHONE          Mask       ###-###-####
       E         COMMENTS       Free

      Press <F10> to save the new field definitions.
      Press <Esc> to return to the Main Menu.


      Step 2.  Inserting End of Field Marks

      Edit record one of file NOFIELDS.3X5.  It will appear as
      follows:

        _____________________________________________________________________
        NAME      Jones, John<
                  Purchasing Agent<
                  <
                  ACME Industries<
                  Suite 234<
                  111 Eastern Highway<
                  Baltimore, MD 21230<
                  <
                  301-555-2385<
                  <
        TITLE
        ADDRESS
        PHONE
        COMMENTS
        _____________________________________________________________________




                                                       247


      Lesson 5

      Note that the entire contents of the first record are in the
      first field of the record.  Now press <Shift><F9> and the
      record will appear as follows:
                  

        _____________________________________________________________________
        Jones, John<
        Purchasing Agent<
        <
        ACME Industries<
        Suite 234<
        111 Eastern Highway<
        Baltimore, MD 21230<
        <
        301-555-2385<
        <
        |<
        |<
        |<
        |<
        _____________________________________________________________________


      The field names have been removed, and the fields are
      delimited by an end of field mark: |<.


      You will divide the first field into four fields - name, title,
      address and telephone number.

      Position the cursor to the end of line one and press
      <F9>.  A double arrow and a small triangle will appear,
      designating the end of the field.  This is the End of Field
      Mark that designates the end of one field and the beginning
      of another.   

      Next, move to the title line and put an End of Field Mark
      at the end of the word Agent.  

      Then move the cursor to the end of the ZIP code and press
      <F9> to designate the end of the address field.

       248


                                            3by5 LESSONS


      Move to the end of the telephone number and press <F9>.

      To avoid excessive blank lines between fields, you should
      remove any blank lines by deleting any triangles that
      appear on blank lines.  The screen will appear as:

        _____________________________________________________________________
        Jones, John|<
        Purchasing Agent|<
        ACME Industries<
        Suite 234<
        111 Eastern Highway<
        Baltimore, MD 21230|<
        301-555-2385|<
        |<
        |<
        |<
        |<
        _____________________________________________________________________


      The |< mark signifies the end of a field.

      Press <Shift><F9> to restore the stand field format.  You
      will see that the record has five fields with the appropriate
      information in each field:

        _____________________________________________________________________
        NAME      Jones, John
        TITLE     Purchasing Agent
        ADDRESS   ACME Industries<
                  Suite 234<
                  111 Eastern Highway<
                  Baltimore, MD 21230
        PHONE     301-555-2385
        COMMENTS
        _____________________________________________________________________




                                                       249


      Lesson 5

      Save the changes to record by pressing <F7> and then [Q]
      [S] to Quit and Save the record.  Edit the remaining
      records in the same manner.







































       250

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1298

     Volume in drive A has no label
     Directory of A:\

    CHAP01   DOC     19178   1-23-89   7:08p
    CHAP02   DOC      7763   1-20-89   9:50p
    CHAP03   DOC      4408   1-20-89   9:52p
    CHAP04   DOC     22942  10-24-88  11:31a
    CHAP05   DOC     34444   1-20-89  10:01p
    CHAP06   DOC     41878   1-20-89  10:08p
    CHAP07   DOC     49973  10-24-88  11:39a
    CHAP08   DOC      2204   1-23-89   7:27a
    CHAP09   DOC      7546   1-23-89   7:29a
    CHAP10   DOC      1991   1-23-89   7:30a
    CHAP11   DOC      9531   1-23-89   7:32a
    CHAP12   DOC     10458   1-23-89   7:35a
    CHAP13   DOC      3672   1-23-89   7:36a
    CHAP14   DOC     30044  10-24-88  11:45a
    FILE1298 TXT      1911   3-24-89   9:42a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   3-24-89   9:42a
    INDEX    DOC      9254   1-23-89   7:55a
    LESSONS  DOC     60409  10-24-88  11:25a
    MANUAL   BAT       147   3-02-89  10:00a
    README             880   1-23-89   7:35p
           21 file(s)     319673 bytes
                           32768 bytes free
