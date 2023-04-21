---
layout: page
title: "PC-SIG Diskette Library (Disk #1679)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1679/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1679"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIMPLY LABELS III 2 OF 2 (1150 ALSO)"

    SIMPLY LABELS is a unique free form label program that lets you design
    your own label formats and maintain files containing your labels.
    
    Each label format you create can have its own standard background text,
    which can include graphics characters.  In this way you can create
    labels with blank lines or boxes for data entry.  You can also specify
    the length of the label and the number of lines each label has.  Each
    line of the label you create can have a different kind of typeface, such
    as normal print, condensed, elite, etc.  You can create mailing labels,
    tape labels, VCR labels, filing labels, or any kind of label for
    whatever you need.
    
    Designated keys can be used to enter commonly used text with a single
    keystroke.  Labels can be imported into SIMPLY LABELS from a text
    file
    or dBase III or PC-File database files.  Labels are defined by
    selecting
    database fields from a menu and placing them directly into a label
    format.
    
    Several predefined label formats are included in the program, and you
    can design up to 25 different label formats.  SIMPLY LABELS sends the
    labels to the printer, a disk file, or the screen.  You can print
    single
    or multiple copies of labels, and print multiple labels across the
    printer.  Powerful searching and sorting routines allow you to select
    and organize your labels any way you like.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.TXT

{% raw %}
```






                         Simply Labels III


          Simply  Labels  version  III  is  a  complete  rewrite  with many
          improvements and new features.    The  first  difference  you may
          notice is  that the  program is  now in an EXE format and is much
          larger.  This is due to many new features and  partly due  to the
          new compiler used.

          Because of  the many changes in this version, the file format has
          been changed.  To use data files created  with version  2.xx they
          must first  be converted.  A utility has been included to do this
          for you.  See appendix B in the  main manual  for instructions on
          how to convert your files.



          NEW FEATURES

          - Total user control over all program colors.

          - Allows full use of pathnames.

          - Many more labels per file.  (Over 2100 mailing labels / 640k)
            Able to use all available memory for label data.

          - Provides a Shell to DOS from any menu.

          - Allows Qwik keys for commonly used text.  Up to 20 characters
            may be entered with one keypress.  Qwik keys may be used as
            label text or any program input including menu commands.

          - Allows custom  keyboard definitions for special characters.    
            Good for other languages or printer codes.

          - Much faster loading and saving of label files.

          - Allows smaller labels.  Sizes down to 16 characters wide.

          - Date and Time stamps.  A stamp (MM/DD/YYYY or HH:MM:SS)
            included in background text will be filled in when label is
            printed.  Pressing Alt-D or Alt-T while editing label text will
            insert the system Date/Time at the cursor position.

          - Improved Label Editing
              - Insert and Delete line functions
              - <Ctrl><Home> moves to start of label
              - <Ctrl><End> moves to end of label
              - <Home> moves to start of line 
              - <End> moves to end of text/line

          - All printing options now work when using the screen as the
            output device.






          - Allows non printing lines in your labels.  This allows  more
            information to be included than needs to be printed.  For
            example a phone number or employee number may be included for
            searching or sorting but does not need to be printed.

          - Allows printing to different printer ports. (1-3)

          - New method of selecting labels to print
              - All labels now have flags to tell if they are selected
              - Labels may be selected for printing or deleting
              - Labels may be selected individually, by whole file, ranges,
                or by searching.  All selection functions may be used to
                Set, Clear or Toggle print flags.

          - New Printing Options
              - Automatic centering of labels
              - Removal of blank lines
              - Double strike background text
              - Print all copies together or as complete sets
              - Multiple copies of a report
              - Pause option for envelopes
              - Twice as many typeface selections
              - Up to 9999 copies of any label, envelope, or report
              - New device for printing, called "Label File".  Allows
                cloning current file with flagged labels only.

          - Improved movement through your files
              - <PgUp> moves to previous label
              - <PgDn> moves to next label
              - <Home> moves to first label in file
              - <End> moves to last label in file
              - <Alt><M> moves directly to any label
              - <Ctrl><PgUp> moves to previous flagged label
              - <Ctrl><PgDn> moves to next flagged label
              - All movement keys work whenever a label is displayed

          - Complete searches may use any number of wild (?) characters

          - Conditional searches are now selected from a menu and may
            specify any part of any line to search including first or last
            words.

          - Both searches and sorts now use pop up definition screens.

          - Reports may have up to 9 columns and you may specify any part
            of any line to include in report.

          - New file type called link files
              - Link files link to and directly read dBase III or PC-File
                type database files.
              - Allows printing labels directly from database files.
              - Assigns a label format to the database file
              - Allows placing data into label by field name
              - Reads records directly from database. No need to Import





              - Does not modify database file in any way
              - Full network support
              - All Simply Labels print formats and options may be used

          - Utility for floppy disk labels (SF.EXE)
              - Automatically makes label when floppy disk is read
              - User defines format by using background text
              - Adds file and dir names from the floppy as label text
              - Format may include user input fields for disk titles
              - Volume name may be added or changed when disk is read
              - Bytes free, disk format, and file count may be added
              - Files and dir names may be sorted
              - File sizes and dates may optionally be included
              - Labels are printed with Simply Labels


```
{% endraw %}

## FILE1679.TXT

{% raw %}
```
Disk No: 1679                                                           
Disk Title: Simply Labels III (1150 also)                               
PC-SIG Version: S2                                                      
                                                                        
Program Title: Simply Labels                                            
Author Version: 3.0                                                     
Author Registration: $25.00                                             
Special Requirements: Printer.                                          
                                                                        
SIMPLY LABELS is a unique label program that lets you design your own   
labels, any size you want.                                              
                                                                        
Each label format you create can have its own standard background text, 
which can include graphics characters.  In this way you can create      
labels with blank lines or boxes for data entry.  You can also specify  
the length of the label and the number of lines each label has.  Each   
line of the label you create can have a different kind of type- face,   
such as normal print, condensed, elite, etc.  You can create mailing    
labels, tape labels, VCR labels, filing labels, or any kind of label for
whatever you need.                                                      
                                                                        
Several predefined label formats are included in the program, and you   
can design up to 25 different label formats.  SIMPLY LABELS sends the   
labels to the printer, a disk file, or the screen.  You can print single
or multiple copies of labels, and print multiple labels across the      
printer.  Label entries can be searched, edited, deleted, and sorted.   
Labels can be sorted alphabetically by any line in the label.  Labels   
can also be imported into SIMPLY LABELS from a text file.               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SL.DOC

{% raw %}
```



















                              S I M P L Y   L A B E L S
           
                                     Users Guide

                                     Version III




                                    SimpleWare
                                    P.O. Box 877
                                    Windsor, NF
                                    Canada, A0H 2H0






















                         Copyright 1987-1989 by Robert E. Pitcher
                                   All Rights Reserved

                                  October 1989 Release








                               Table of Contents



          1.0 - Introduction . . . . . . . . . . . . . . . . . . . . .  1

          2.0 - Who May Use This Software  . . . . . . . . . . . . . .  2 
                  How to Register  . . . . . . . . . . . . . . . . . .  4
                  Technical Support  . . . . . . . . . . . . . . . . .  5
                  Warranty . . . . . . . . . . . . . . . . . . . . . .  6

          3.0 - Getting Started  . . . . . . . . . . . . . . . . . . .  6

          4.0 - Program Conventions  . . . . . . . . . . . . . . . . .  8

          5.0 - Label Formats  . . . . . . . . . . . . . . . . . . . .  11
             5.1 - Creating New Formats  . . . . . . . . . . . . . . .  11
             5.2 - Editing Formats . . . . . . . . . . . . . . . . . .  11
                     Label Size  . . . . . . . . . . . . . . . . . . .  12
                     Description . . . . . . . . . . . . . . . . . . .  13
                     Background Text . . . . . . . . . . . . . . . . .  13
                     Print . . . . . . . . . . . . . . . . . . . . . .  14
                     Typeface  . . . . . . . . . . . . . . . . . . . .  14

             5.3 - Deleting a Format . . . . . . . . . . . . . . . . .  14
             5.4 - Saving Formats  . . . . . . . . . . . . . . . . . .  15

          6.0 - Using Files  . . . . . . . . . . . . . . . . . . . . .  15
             6.1 - Creating New Files  . . . . . . . . . . . . . . . .  16
             6.2 - Loading a File  . . . . . . . . . . . . . . . . . .  17
                6.2.1 - Selecting Files  . . . . . . . . . . . . . . .  18

             6.3 - Browsing Around . . . . . . . . . . . . . . . . . .  19
                6.3.1 - Flagging Labels  . . . . . . . . . . . . . . .  19
                6.3.2 - Searching for Labels . . . . . . . . . . . . .  21
                          Types of Searches  . . . . . . . . . . . . .  22

                6.3.3 - Browsing with Searches . . . . . . . . . . . .  24
                6.3.4 - Moving Around Your File  . . . . . . . . . . .  25
                6.3.5 - Deleting Labels  . . . . . . . . . . . . . . .  25

             6.4 - Printing Labels . . . . . . . . . . . . . . . . . .  26
                6.4.1 - Output Devices . . . . . . . . . . . . . . . .  27
                6.4.2 - Print Options  . . . . . . . . . . . . . . . .  29
                6.4.3 - Print Formats  . . . . . . . . . . . . . . . .  30
                          Labels . . . . . . . . . . . . . . . . . . .  30
                          Envelopes  . . . . . . . . . . . . . . . . .  32
                          Reports  . . . . . . . . . . . . . . . . . .  34
                       
             6.5 - Adding Labels . . . . . . . . . . . . . . . . . . .  35
                6.5.1 - The Label Editor . . . . . . . . . . . . . . .  36
                6.5.2 - Importing Labels from Other Files  . . . . . .  37
                          Label Files  . . . . . . . . . . . . . . . .  38





                          Column Files . . . . . . . . . . . . . . . .  40
                          Fixed Length Files . . . . . . . . . . . . .  41

             6.6 - Sorting Files . . . . . . . . . . . . . . . . . . .  42
             6.7 - Saving Files  . . . . . . . . . . . . . . . . . . .  43
             6.8 - Deleting Old Files  . . . . . . . . . . . . . . . .  44

          7.0 - Link Files . . . . . . . . . . . . . . . . . . . . . .  44
             7.1 - Editing Link Files  . . . . . . . . . . . . . . . .  45
             7.2 - Searching with Link Files . . . . . . . . . . . . .  48
             7.3 - Limitations of Link Files . . . . . . . . . . . . .  48

          8.0 - Other Features
             8.1 - Non Printing Lines  . . . . . . . . . . . . . . . .  49
             8.2 - Date and Time Stamps  . . . . . . . . . . . . . . .  50
             8.3 - DOS Shell . . . . . . . . . . . . . . . . . . . . .  50
             8.4 - Qwik Keys . . . . . . . . . . . . . . . . . . . . .  50

          9.0 - Setting Program Options  . . . . . . . . . . . . . . .  51
             9.1 - Selecting Colors  . . . . . . . . . . . . . . . . .  52
             9.2 - Keyboard Definitions  . . . . . . . . . . . . . . .  52
             9.3 - Printer Settings  . . . . . . . . . . . . . . . . .  53
             9.4 - General Program Options . . . . . . . . . . . . . .  56

          10.0 - Potential Problems  . . . . . . . . . . . . . . . . .  57


          Appendix A - Error Messages  . . . . . . . . . . . . . . . .  59
          Appendix B - Converting Older Files  . . . . . . . . . . . .  61
          Appendix C - Simply Floppies . . . . . . . . . . . . . . . .  62
          Appendix D - Simply Labels Command Keys  . . . . . . . . . .  67
          Appendix E - Simply Labels Menu Tree . . . . . . . . . . . .  69
          Appendix F - Registration Form . . . . . . . . . . . . . . .  71










          SimpleWare would like to acknowledge and thank Mr. William Hiltz,
          Sysop Foxnet BBS, for his help  in supporting  and promoting this
          product.


          dBase and dBase III are registered trademarks of Ashton-Tate

          PC-File is a registered trademark of ButtonWare, Inc.


                                         ii






          1.0 Introduction

          Welcome to  Simply Labels.  While it is not necessary to read all
          of this manual, it is recommended that you  read at  least to the
          end of  section 4 that covers program conventions and getting the
          program started.  The documentation  for  Simply  Labels  is best
          used  as  a  reference.    If  you  have problems while using the
          program, just find the topic causing the problems in the table of
          contents and then read the section on that topic.

          This version  has many  new or improved features and the speed of
          almost every operation has been improved.  For  users of previous
          versions, please  read the file called CHANGES.TXT on the program
          disk for a list of the new features.  Because of the many changes
          it was  necessary to  change the  format for data files so please
          read Appendix B if you wish to use  your data  files from version
          2.xx.

          Many people  have a  very narrow  view of what makes a label.  Of
          course the most common  type of  label is  the mailing  label and
          this  program  handles  them  with  ease.    But Simply Labels is
          capable of so much more.  Instead of using a database approach to
          printing labels this program allows you to enter labels in a free
          form manner.  This free form approach allows  very flexible label
          designs.   No longer  will you  be forced  to use  a program that
          won't accept information the way you want to enter it.  In Simply
          Labels  a  label  is  a  rectangular  area  which  contains text,
          (background or normal) and instructions on how to  print any text
          contained in  the label.   This information is combined to create
          what is  called  a  label  format.    There  are  several formats
          included with  this program  but you  can design  your own if you
          need a special type of label. 

          Simply Labels will  create  and  maintain  data  files containing
          labels that use your formats.  It has many advanced features such
          as searching and  sorting  your  files  in  many  different ways,
          importing labels from text files, full label editing, date & time
          stamps, Qwik keys for commonly used text, printing to the screen,
          printer or  a disk  file, printing  multiple copies with multiple
          labels per line, background  label  text,  graphic  characters in
          your  labels  and  the  ability  to  use  all  of  your printer's
          capabilities.  The information  in your  label files  can also be
          printed in  other formats.   Instead of the standard label format
          you can also print your  data  files  in  an  Envelope  or Report
          format.

          New in  this version  is a  very powerful  feature for people who
          have their information stored in database files.  This feature is
          a new  file type called Link Files.  With link files you assign a
          label format to a database file  and provide  instructions on how
          to build  a label from a record in the database.  This is done by

                                          1





          placing database fields directly  into the  label by  field name.
          Simply Labels  supports two of the most popular types of database
          files.  It can link to,  and directly  read dBase  III or PC-File
          type data files.

          Also  included  is  a  nice  utility  (SF.EXE) that will read the
          directories of floppy disks and  build  very  fancy  user defined
          disk labels.   Some things that may be included in the labels are
          Volume name, bytes free,  disk format,  file and  directory names
          and others.  This program is described in appendix C.

          Simply Labels  is powerful enough to meet the needs of most small
          business and flexible enough  for the  many uses  at home.   When
          used for  standard mailing  labels it can handle over 2100 labels
          per file (640K memory) with  no  limit  on  the  number  of files
          allowed  (Link   files  allow   many  more).    It  can  transfer
          information between label files even if  the files  use different
          formats.    With  the  ability  to  use  graphic  characters  and
          background text you can design custom labels to meet most of your
          needs.

          Some types of labels that may be created with Simply Labels:

               Mailing Labels           Book Reports Labels
               Recipe Cards             Labels for Preserves
               Disk Labels              Packing Labels
               Name Tags                Inventory Cards
               Cassette Jackets         VCR Labels
               Post Cards               File Holder Labels
               Specialty Labels         3 x 5 Index Cards


          These are only sample ideas and you may find you have other types
          of labels in mine.  As a matter of fact  labels don't  have to be
          the stick on kind.  You can print many types of labels on regular
          paper.  If you currently use several programs to handle different
          types of  labels you may be surprised that one program is capable
          of meeting all your label needs.
           




          2.0 Who May Use This Software

          This software is not free and it is not in the public domain.  It
          is copyright  1987-1989 by  Robert E.  Pitcher and SimpleWare and
          all rights  are reserved.   This  software is  distributed by the
          "ShareWare" method.   The ShareWare method of distribution allows
          you to try a program before you buy  it so  you never  waste your
          money on programs that you don't use.


                                          2





          If  you  use  this  program  you  should  support  the  author by
          registering your copy.  Non-registered users of Simply Labels are
          permitted to  use the program on a trial basis only, for the sole
          purpose of determining whether or not it meets their needs.   ANY
          AND ALL  other use  after a  trial period of three weeks requires
          registration.  Use  of  non-registered  copies  of  Simply Labels
          beyond the trial period is strictly prohibited. 

          Simply Labels  may be copied and distributed to others as long as
          the following conditions are met.


               Simply Labels must be  distributed  in  a  complete and
               unmodified form including the following files.

                       READ.ME   -  Basic instructions
                         SL.EXE  -  Main program
                         SL.DOC  -  Documentation for the program
                      PRINT.BAT  -  Batch file to print documentation
                      CODES.DOC  -  Keyboard codes for graphic mode
                    CHANGES.TXT  -  Describes latest version
                         SL.CNF  -  Program configuration file
                         SL.DEF  -  Label definition file
                         SF.EXE  -  Simply Floppies
                     SL2TO3.EXE  -  File conversion utility
                       ????.LAB  -  Sample Label files
                       ????.LNK  -  Sample link files
                       ????.DBF  -  Sample dBase files
                       ????.HDR  -  Sample header files
                       ????.DTA  -  Sample data files


               No  charge,  other  than  a maximum disk copying fee of
               $5.00, may be charged for Simply Labels.

               Simply Labels may not be  distributed  as  part  of any
               other   product   without   written   permission   from
               SimpleWare.



          Bulletin board system operators  (Sysops) may  make Simply Labels
          available to  their users  for downloading  as long  as all above
          conditions are met.

          Commercial Distributors  of  Public  Domain,  ShareWare,  or User
          Supported software  may distribute  Simply Labels  but only after
          sending in a registration  form,  for  the  purpose  of receiving
          update notifications.

          The copy of the program you have is not limited in any way and is
          fully functional.  Why then should you register  when you already

                                          3





          have the  complete program and documentation.  There are several.


               When you register your  copy of  Simply Labels  you will
               receive notification of all major upgrades by mail.

               You  will  receive  support  directly from the author by
               mail or through the Foxnet BBS.  This  bulletin board is
               available,  for  support,  free  of charge to registered
               users of Simply Labels.

               You will receive a unique registration  number that when
               entered  will  modify  the  program  to remove shareware
               notices and display your name as the registered owner.

               You will help shape  future  versions  of  this program.
               This is the third shareware release of Simply Labels and
               most  improvements  are   a   direct   result   of  user
               suggestions.    Without  registered  users  this program
               would not exist.




          How to Register

          There are two methods  of registering  Simply Labels.   First you
          can  send  a  completed  registration form (See appendix F) along
          with your payment to SimpleWare.

          You can also register on line at the Foxnet BBS.  To  register on
          line  you  must  have  a  valid  Visa card.  After you log on the
          Foxnet BBS you have to open the registration door, answer several
          questions and  give your Visa card number and expiry date.  After
          this is done you will receive your unique registration number.

          The single user registration fee is $25.00.   This allows  you to
          register the  program in  your name  and grants a licence for the
          continued use of Simply  Labels.    We  assume  you  have already
          obtained  the  program  and  documentation elsewhere.  The single
          user registration  fee  does  not  entitle  you  to  diskettes or
          printed  manuals.    For  an additional $10.00 ($35.00 total) you
          will receive the latest version on disk and a printed manual.

          After you register  you  will  receive  your  unique registration
          number.   This number is based on the name of the registered user
          that you supplied.  When you receive this number you register the
          program by typing the following.

                         SL REGISTER

          You will  be asked  to enter  the name  of the registered user (2

                                          4





          lines, 30 characters per line max)  and the  registration number.
          The name  must be  entered exactly as it was given to SimpleWare.
          Upper and lower case and spaces are important.   The registration
          number must  match the  name exactly  for the program to register
          itself.  If the  information is  correct the  program will modify
          itself to  include the  registered name  and remove all shareware
          notices.  

          If Simply Labels is used in  a corporation,  government office or
          any type  of business  then registration  is mandatory.  Quantity
          discounts are available in the form  of a  site licence.  For all
          site licenses, only one copy of disks and manual are provided and
          the customer  is responsible  for printing  the documentation and
          copying the disks.  The discounts are as follows:


                              Qty            Price
                          ---------------------------
                             5 - 9          $22.00
                            10 - 19         $20.00
                            20 - 49         $18.00
                                 50+        $15.00

          All Copies at a site licence will be registered in the same name.




          Technical Support

          If you  have registered  the program every effort will be made to
          support you in your use of Simply  Labels.    If  you  are  not a
          registered  user  you  may  contact  the  author but there are no
          promises.  Whenever looking for support please include your name,
          telephone number, version number and an exact description of your
          problem.

          Support will be provided in one of the two following ways.  First
          you may write to SimpleWare explaining in detail exactly what the
          problem is.  The second method of getting support is  to call The
          Foxnet BBS and leave a message to the author or to the Sysop.  
          The latest  version of  Simply Labels  will always  be posted and
          available for downloading on the Foxnet BBS.


                              F o x n e t    B B S
           
                     PC Board  24 hrs a day / 7 days a week

                          12/24/9600 baud  Hayes V.42

                                (709) 489-4758 

                                          5







          Please send any suggestions  for improvements  you would  like to
          see to  SimpleWare.   If enough interest is shown the suggestions
          may be included in future versions.  





          Warranty

          SimpleWare makes no warranty of any kind, express  or implied, as
          to  the  suitability  of  this  program to perform any particular
          purpose or function.  SimpleWare shall  in no  way be  liable for
          any damages,  whether direct,  indirect, special or consequential
          arising from the use of, or inability to use this  program by any
          user.   In no event will SimpleWare be liable to any user of this
          program for any damages, including any lost profits, lost savings
          or any  other damages arising out of your use or inability to use
          the program, or for any claim by any other party.





          3.0 Getting Started

          To use this program you must have the following equipment:


                         IBM PC/XT/AT/PS2 or True Compatible
                         MS-DOS or PC-DOS 2.0 or higher
                         Minimum of 256K of memory
                         A Printer


          Setting up Simply Labels is very easy.  The first  thing you must
          do is make a backup of your program disk.  If you do not know how
          to do this  check  your  DOS  manual  and  look  up  the DISKCOPY
          command.   If you  use a  floppy system you should use the backup
          copy and store the original in a safe place.

          To install  Simply Labels  on a  hard disk  you need  to create a
          directory to store the files in.  Next you must copy all files to
          this directory.  The  following DOS  commands may  be used  to do
          this for  you.  You may use any valid drive or directory name you
          wish.

                         C:                    <RETURN>
                         MD\LABELS             <RETURN>
                         COPY A:*.* C:\LABELS  <RETURN>

                                          6







          If you have problems with  this  you  should  refer  to  your DOS
          manuals.

          To start the program type the following:

                         SL

          If you  wish to load a file from the command line you may do this
          by entering the complete path and filename as follows:

                         SL D:\LABELS\MAILING.LAB

          This would load the file called MAILING.LAB stored on D  drive in
          the directory called LABELS.  

          If you  use DOS version 3.0 or higher you may place Simply Labels
          in your PATH statement and start it from anywhere.   You may also
          rename the  program if  you wish.  If you use an older version of
          DOS do not rename the  program  and  you  must  run  it  from the
          default directory  or Simply  Labels will not be able to find the
          files it needs to run properly.

          When you first start  the  program  a  title  screen  will appear
          showing a  copyright notice  and the name of the registered user.
          Press any key to continue after reading it.  What you see next is
          the Main menu and it can be recognized by the words SIMPLY LABELS
          printed in big letters in the label window.   When  you start the
          program with  a filename  on the command line, the file is loaded
          and you go straight to the Use  menu  so  the  Main  menu  is not
          displayed.  See section 6 for information on using your files.





















                                          7






          4.0 Program Conventions

          Throughout this  manual you  will see references made to parts of
          the program screen.  To help you identify them a sample screen is
          shown below with the major areas marked.


           --|  <1>  |---------------------------------------------------
          |                 <2>                                          |
          |                                                              |
          |                 ----------------------<3>--                  |
          |                | <4>                       |                 |
          |                |                           |                 |
          |                |    Sample Label Text      |                 |
          |                |                           |                 |
          |                |                           |                 |
          |                 ---------------------------                  |
          |                                                              |
          |                                                              |
          |                                                              |
          |                                                              |
          |--------------------------------------------------------------|
          |    <5>   |        <6>        |        <7>         |   <8>    |
          |--------------------------------------------------------------|
          | F1 Browse  F2 Print  F3 Add  F4 Sort....     <9>             |
          | Use a file stored on disk                    <10)            |
           --------------------------------------------------------------
           MESSAGES:     <11>         
          ----------------------------------------------------------------



               1 - This area will show the name of the file currently
                   loaded into memory.  This will be blank is no file has
                   been loaded.

               2 - This is called the label window and is where your labels
                   are displayed.  This area is also used to enter options.

               3 - This is a frame drawn around your label, showing its
                   size.  All editing of label text is done inside this
                   frame.

               4 - Your label text is displayed here.  

               5 - Areas 5 through 8 are combined to make up what is called
                   the information area.  When a file is loaded these areas
                   display information about the file.  Area 5 will display
                   the number of labels are currently selected (Flagged) for
                   printing.


                                          8





               6 - This area will give the number of the displayed label
                   and how many labels are in the current file.  It will
                   also show if the displayed label is selected for printing
                   or to be deleted.  It will look like this:
           
                               [   Label#     1 /  1234 ]

                   With 1 being the number of the displayed label in a file
                   of 1234 labels.

               7 - For label files this area will show how many more labels
                   may be added to a file before it is full.  For link files
                   it will show the name of the database file used for the
                   link.

               8 - This area will display the name of the current menu and
                   will help you find your way around the program.  See the
                   menu tree in appendix E.

               9 - All menus are displayed on this line and are discussed
                   below.

              10 - This line will always give a description of the
                   highlighted choice in the menu.

              11 - This is the message line and it is used to give
                   instructions and report errors.



           
          The ESCape  key is  very popular  in this program and will prevent
          you from making many mistakes.  If you find yourself  somewhere in
          the program where you don't want to be you can back up by pressing
          the ESC key.  This will  work anywhere  including at  menus, input
          prompts and while printing.  If you press it enough times you will
          usually end up back at the DOS prompt.

          The menus used in this program  are very  simple and  easy to use.
          Menus are  the wrap  around type  with all  choices displayed on a
          single line.  There  is also  a line  just below  the menu  with a
          description of  the highlighted  choice.   There are three ways to
          make a menu  choice.    First  you  may  use  the  cursor  keys to
          highlight  a  choice  and  then  press  RETURN.   This will be the
          preferred method until you are familiar  with the  program because
          it will  allow you  to read  the descriptions for each choice. The
          second method is to press the function key listed by  each choice.
          The third and fastest way is to press the key corresponding to the
          first letter of the choice you wish to make.   One note  about the
          menus is  that the  ESCape key  is the  same as selecting Quit and
          usually returns you to the previous menu.


                                          9





          All input to the program may be edited by using the keys listed in
          appendix D.   The  only exception  to this  is when the program is
          asking for a single character response.  Upper  or Lower  case may
          be used  for all input.  Depending on the type of input asked for,
          some keys may not be  active.    For  example  if  the  program is
          looking for  a numeric entry you will not be able to type letters.
          ESC may be used at any input prompt to exit and usually return you
          to a menu. 

          Most  times  in  this  program,  when input is required, a default
          response will be  displayed.    This  response  may  be  edited or
          selected as  is by pressing RETURN.  If you just start typing, the
          program assumes you want to enter  a new  response and  will erase
          the default.   The default response may be restored at any time by
          pressing Alt-R.

          Many  things  in  this  program  are  performed  by  entering  key
          combinations such  as Alt-D or Ctrl-PgUp.  To enter these you must
          hold down the Alt or Ctrl key and then press the second key.

          Many times you will be asked for a yes or  no answer  and you will
          see either  (Y/n) or  (y/N).  The upper case letter is the default
          response and may be selected by pressing Return.

          When entering file names  the program  will convert  your entry to
          upper case  characters.  Also do not add an extension unless asked
          for because the program supplies the proper one.

          There are many windows  used in  this program  for setting  up the
          program, defining  searches and  sorts and  for selecting options.
          Whenever a window is displayed  you  may  freely  move  around the
          window with  the Up and Down cursor keys changing only the options
          you want.  Most  windows require  you to  press ESC  when you have
          finished entering your selections. 

          Link  files  are  very  similar  to label files but there are some
          differences.   For the  purpose of  this manual  all references to
          label files will also apply to link files unless stated otherwise.





          5.0 Label Formats

          Selecting Formats from the Main  menu  will  bring  up  the Format
          menu.   From this  menu you  can create custom label formats which
          you will use in your label files.   A label  file must  use one of
          the defined  formats.   If you  have special  label needs you will
          have to design a format for it, otherwise one of  the defaults may
          meet  your  needs.    A  maximum  of 25 formats are allowed and 12
          standard label formats are provided to get you started.  These may

                                         10





          be deleted or modified in any way you like.

          A  label  format  consists  of  the size of the label, the spacing
          between labels, a description  of the  label, the  background text
          for the  label as  well as instructions on how to print the label.
          The sizes allowed for labels are from 16 to 74  characters wide by
          2 to  15 lines  high.   The description is just a name you give to
          the format for your own reference.  The  spacing is  the number of
          lines skipped  between each  label and is normally 1 but may be as
          many as 99.

          The idea of background text may not be  familiar to  you but  is a
          very simple idea.  Background text is text which will be common to
          all labels in the file and cannot be written over.  It  may or may
          not be  used depending  on the  application.  For standard mailing
          labels you  would not  want any  background text  but for cassette
          tape labels  you would  want to  design boxes and areas for side A
          and B.  Background text allows  you to  create custom  fill in the
          blank type labels.



            Format Menu

            F1 New  F2 Edit  F3 Delete  F4 Quit




          5.1 Creating New Formats

          To create  a new label format you select New from the Format menu.
          You have to fill  out the  size window  (See the  section below on
          Label Size for more information) to define the label size and then
          you will be asked to enter a description for the label.   Next you
          will go  to the  Edit Formats menu where you can work on all parts
          of your format and print sample  labels on  your printer  to check
          your design.  See the section below on Editing Formats.



          5.2 Editing Formats

          When  you  select  Edit  from  the Format menu you must select the
          format you wish to edit.  This is done by  pressing the  SPACE BAR
          to view the different formats on the screen.  You may also use the
          UP and DOWN cursor keys to  cycle through  the formats.   When the
          one you  wish to edit is displayed press RETURN to select it.  The
          Edit Formats menu is then displayed which allows you to change any
          part of  that label  format.   The Configure option is included in
          this menu to allow you to change your  printer definitions  as you
          work on  a label  format.  See section 9.0 and 9.3 for information

                                         11





          on setting program and printer options.



            Edit Format Menu

          F1 Size  F2 Descr  F3 Back  F4 Print  F5 Typeface  F6 Configure



          Label Size

          Selecting Size from the  Edit Formats  menu will  display a window
          for you  to fill  out, allowing  you to  define the label size and
          spacing.  This window is shown below.




             ---| Label Size |----------------------------------------
            |                                                         |
            |                                                         |
            |    Width of the label. (16 - 74)   30                   |
            |                                                         |
            |    Lines in the label. (2 - 15)    5                    |
            |                                                         |
            |    Lines in the label to print.    5                    |
            |                                                         |
            |    Lines between labels. (1 - 66)    1                  |
            |                                                         |
             ---------------------------------------------------------


          The current values for the label are displayed  and may  be edited
          or you may press RETURN to keep the original values.  The Width of
          the label will determine the  number  of  characters  that  may be
          entered in  your labels.   The  Lines in  the label  is simply the
          number of lines of text in each label. 

          The Lines in the label to print will normally be  the same  as the
          number of  lines in  the label  but it  may be  less.  This option
          allows what is called non printing lines.   For example  you could
          have a  label with  7 lines  but choose  to only print five lines.
          This will give you  2  lines  that  may  be  used  to  store other
          information.   This option  may be changed at any time from within
          the program so the main thing to remember at this time is  to make
          the label  big enough  to hold  all information you may need.  See
          section 8.1 for more information on non-printing lines.

          The Lines between labels  is the  number of  lines printed between
          each label.  After all values have been entered just press Esc and
          the label will be redrawn at the new  size.   One note  of caution

                                         12





          when making  a label  smaller.  Any background text that no longer
          fits in the label will be lost.  The size you enter will determine
          the amount of text that can be entered into the label.  The actual
          printed label may  look  quite  a  bit  different  than  the label
          displayed on  the screen  because of  the different typefaces that
          can be used when printing to your printer.  A good idea is to make
          the label  just big  enough to hold the text you need and then you
          can fit it to your  labels  by  using  the  spacing  and different
          typefaces.    Remember  to  check  your  format  design for proper
          appearance on your printer before using it in a file.




          Description

          Allows you to edit the description  of  the  label  format.   This
          description  is  only  for  your  reference  and  can  be up to 40
          characters  long.    Full  editing  functions  are  available when
          entering the description.




          Background Text

          This  allows  you  to  edit  the  background  text  of  the label.
          Background text allows  your  blank  labels  to  contain  text and
          graphic  characters.    The  background  text  will be part of all
          labels using this format and cannot be edited.  This  is handy for
          a lot of applications.  You can design boxes around your labels or
          you can design labels with blanks that will be filled  in by hand.
          Depending  on  the  application  you  may  or  may not want to use
          background text.  If you do not need to use  this option  you just
          have  to  leave  the  label  blank. Look at the sample file called
          CASSETTE.LAB to  see a  format that  makes good  use of background
          text.

          Editing background  text is done the same way you would edit label
          text.  See the section on the Label Editor (6.5.1) for information
          on  how  to  edit  label  text.   Press Esc when you have finished
          editing and you will be returned to the Edit Formats  menu.  There
          are a  couple of  differences between  editing background text and
          editing label text.  First if you use the date or time keys (Alt-D
          or  Alt-T)   when  editing   background  text   the  proper  stamp
          (MM/DD/YYYY or HH:MM:SS) will be placed into the  label instead of
          the current  date or time.  Also there may be times when you would
          like to have spaces as  part  of  your  background  text.   Simply
          Labels will normally look at a space as not being background text,
          so to allow spaces, the tilde character (~) is used.   The program
          will replace this character with a space and recognize it as valid
          background text.

                                         13








          Print

          This will print a sample of your label format to  your printer. It
          will let  you check  all parts  of your label format.  A series of
          "+" signs are printed for each line in  your format.   This sample
          label will  use any  typeface selections  you may have assigned to
          your format.  This is handy for checking sizes.   It is  worth the
          extra time  to print lots of samples to make sure your format fits
          your labels.  Another good  idea  is  to  use  regular  paper when
          checking formats to save on labels.




          Typeface

          With this  option you  can assign  a typeface to each line of your
          label.  See the  section  on  Setting  Program  Options  (9.3) for
          information on  setting up  your printer definitions or typefaces.
          This is a powerful feature which  lets  you  create  all  kinds of
          special labels.  You can use big bold headings or very small print
          or any combination you like.

          When you select this option you will see a window which displays a
          list of all the lines in your label.  All you have to do to assign
          a typeface is to move the cursor to  the line  you want  and press
          RETURN.   A menu  will pop  up and display all typeface selections
          you have defined.  You can use the up and down arrow  keys to move
          to the  typeface you  want and  press RETURN to select it for that
          line. 

          Once a setup is selected it will stay on until it is turned off so
          it is  not necessary  to fill  in all  lines.   For example if you
          wanted all lines of your label printed in Near Letter  Quality you
          would just  select N  L Q for line 1.  The typeface selections are
          saved as  part of  the label  format.   Any label  file you create
          using this format will also use the typeface selections.  Typeface
          selections may be changed at any time, even after a  file has been
          created.





          5.3 Deleting a Format

          You will  select this  option to  get rid of formats you no longer
          need.  First select the format  you want  to delete.   See Editing
          Current Formats above on how to select a format.  The program will

                                         14





          ask if you are sure you want to delete this format.   Press "Y" to
          delete it.   Deleting  a format  will in  no way  affect any label
          files that already use that format.
           



          5.4 Saving Formats

          Simply Labels will know if any changes have been made by editing a
          format, deleting  a format  or by  creating a  new format and will
          automatically save your formats  if necessary.   Your  formats are
          stored in the default directory in a file called  SL.DEF .  If you
          delete this file the  program will  only remember  the 12 standard
          formats that come as part of the program.





          6.0 Using Files

          When  you  first  start  the  program  a  title screen will appear
          showing a copyright notice  and the  name of  the registered user.
          Press any  key to continue after reading it.  What you see next is
          the Main menu and it can be recognized by the  words SIMPLY LABELS
          printed in big letters in the label window. 



            Main Menu

            F1 New  F2 Use  F3 Delete  F4 Configure  F5 Formats  F6 Quit



          There are  two main functions or parts in this program.  The first
          allows you to define label formats and the second lets  you create
          and work with your files.

          Simply Labels is capable of creating and maintaining two different
          types of user data files.  These are  called label  and link files
          and have  the extensions  of .LAB  and .LNK.   These  are not text
          files but files to be used  only by  Simply Labels.   If  you need
          your labels  in a  text file  you may print them to a disk file to
          get a pure ASCII file.  To get familiar with  the program  you may
          want  to  try  several  of  the  sample  files  that came with the
          program.

          A label file is a file containing a group of labels that  have the
          same format.   When  a label  file is  first created  there are no
          labels in the file.  You have to Use the  file and  Add the labels

                                         15





          to it.   The number of labels allowed in a file will depend on the
          label format used for the file  and  the  amount  of  free memory.
          This will  be displayed  in the information area after the file is
          loaded into memory.   A label  file contains  a copy  of the label
          format  used,   all  typeface  selections,  all  current  printing
          options, as well as  all options  entered for  envelope and report
          formats, and of course all of your label data.

          The main  difference between  label files  and link  files is that
          link files  contain no  label data.   They  contain the  name of a
          database file  which provides  the label  data and instructions on
          how the labels are made from the database file.  The data  for the
          labels is read from the database file as needed.  Once a link file
          has been loaded it is very similar to a label  file but  there are
          some differences.   See  section 7  for information  on using link
          files.

          Before you can do any work with labels you must first load  a file
          into memory.   File  selection is explained below in section 6.2.1
          After a file has been loaded the Use Menu will be displayed.


            Use Menu

            F1 Browse  F2 Print  F3 Add  F4 Sort  F5 Configure


          This is the only part of the program that uses your files  and all
          files must  be saved  before leaving  this menu or any changes you
          made will be lost.  From this menu you can  do all  work with your
          files.   You can search, edit, delete, sort, import and print your
          labels.  When you first come to the  Use menu  the first  label in
          the file  is displayed  on your screen.  If there are no labels in
          the file a blank label is displayed.






          6.1 Creating New Files

          The first step in creating a new file is to  make sure  there is a
          label format that meets your needs.  If you need a special type of
          label you may want to create a format for it.  See section 5.1

          To create a new file you must select New from the Main  menu which
          will bring  up the New menu.  From here you may create a new label
          file or a new link file.  See  section 7  for information  on link
          files.



                                         16






             New Menu

             F1 Label  F2 dBase III  F3 PC-File  F4 Quit
           

          Creating a  label file  is a simple matter of selecting Label from
          the New menu and entering a  file name.   The  program will  add a
          ".LAB" extension  to your name so do not enter an extension.  Next
          you have to select the label format you would like to use for this
          file.   To select a format you just have to press the Space Bar to
          view the label formats on the  screen and  press Return  to select
          the one  you want.   After  this is done the Use menu will appear.
          From here you can add labels and do  any work  you wish  with your
          file.   A newly  created file  is not saved until you are finished
          using it.  See the section  on Saving  your labels  (6.7) for more
          information.   This was done to allow you to create quick one-time
          labels without having to save the file and clutter up your disks.

          To create a new link file you select  New from  the Main  menu and
          then  select  either  dBase  III  or  PC-File  from  the New menu,
          depending on which type of database  file you  wish to  link with.
          You also  have to  enter a  name for  your link  file and select a
          label format.  Next you must  select  the  database  file  to link
          with.    This  file  may  be  located on any drive or in any path.
          Simply Labels will remember how to find the database file  when it
          loads  your  link  file.    See  section  6.2.1 for information on
          selecting files.  When this has  been done  a window  called "Edit
          Link" will pop up and you will see the Edit menu.  It is from this
          window that you define the layout of your label.   See section 7.2
          for information  on editing  link files.  When you leave this menu
          you will see your label displayed  on the  screen and  you may use
          your new  link file  in much  the same  way as a label file.  Your
          link file will have the extension .LNK but will not be saved until
          you choose  to save  it.   See the  section on  saving your files.
          (6.7)  If you plan to use link files it is very  important to read
          section 7.




          6.2 Loading a File

          From the  Main menu  you can select Use to work with a file stored
          on disk.  Before you can use a  label file  you must  load it into
          memory.  When Use is selected from the Main menu you will be asked
          to select the file you wish  to use  from the  Select File window.
          This window will display the names of all label and link files for
          selection.  See the section below  on Selecting  a file.   After a
          file is  selected it  will be  loaded into memory and the Use menu
          will be displayed.  Pressing  ESC  before  selecting  a  file will
          return you  to the  Main menu.   If an error occurs for any reason

                                         17





          while loading a file the program  will beep  and display  an error
          message and you will be returned to the Main menu. 

          After  a  file  has  been  successfully  loaded  you will see some
          information about your file.  In the top left corner of the screen
          you will  see the name of the file you are currently working with.
          Just above the menu line you  will see  four blocks  that give you
          information  about  your  file.    These  blocks  are  called  the
          information area.  The block on the far left will  show the number
          of labels  currently flagged for printing which will be 0 when the
          file is  first loaded.   The  next block  shows the  number of the
          label currently displayed on the screen and how many labels are in
          the file.  In this block you will also see if the  displayed label
          is flagged  to be printed or deleted.  The next block on the right
          will show how many more labels may be added to this file or in the
          case of  link files it will show the name of the database file you
          are linked to.  You should also see  the first  label in  the file
          displayed on your screen.




          6.2.1 Selecting Files

          Any time  Simply Labels  requests you  to select  a file a window,
          called  Select  File,  will  pop  up   that  lists   all  possible
          selections.   This is used when selecting label files, link files,
          text files, and database files.  From within  this window  you can
          access any  file on  any disk  in your system.  All file names are
          displayed in lower case and directory names are in upper case.

          Selections are made by highlighting the proper choice and pressing
          RETURN.   You may  use the  four cursor keys, PgUp, PgDn, Home, or
          the End key to move around the window.  Also you may  press any of
          the letter  keys and  the next choice that starts with that letter
          will be highlighted.

          If you press RETURN on a  directory name  you will  get a  list of
          files in that directory.  If you are not at the root directory the
          first choice in the window will be "..       " which when selected
          will move you up one directory level towards the root directory. 

          The current  path for  the displayed  files is always displayed at
          the bottom of the  window.   By pressing  Alt-P you  can edit this
          path name  to view  any valid  drive or  directory.  If you do not
          wish  to  make  a  selection  you  may  press  Esc  to  cancel the
          operation.






                                         18





          6.3 Browsing Around

          By selecting  Browse from the Use menu you can bring up the Browse
          menu.  From this menu  you  can  move  around  your  file  in many
          different ways to edit or delete labels.  You may also flag labels
          for printing from this menu.


            Browse Menu

            F1 Flag  F2 Toggle  F3 Search  F4 Move  F5 Edit  F6 Delete




          6.3.1  Flagging Labels

          Simply Labels uses a system of flags to determine which labels are
          to be  printed or  deleted.   Each label  in a  file will have two
          flags associated with it.  One for printing and one for deleting.
          When a label is  displayed on  the screen  you can  easily see the
          status  of  it's  flags  by  looking  at  the  label number in the
          information area.  If a label is flagged for printing a check mark
          (ASCII 251)  will be  displayed in  front of the label number.  If
          the label is flagged to be deleted it will have an asterisk (ASCII
          42) displayed.   If  the label  is selected to be both printed and
          deleted, both characters will be displayed.   The  total number of
          labels flagged  for printing is always displayed in the left block
          in the information area.  Whenever you choose to print your labels
          from the  Print menu  this is  the number  of labels  that will be
          printed.

          Note that with link files you can't delete labels but  if a record
          in the database is marked as deleted then the delete flag for it's
          label will be set to show that it is a deleted record.

          Some very powerful features are included  to allow  you to  set or
          clear these flags any way you want.  The first two choices in both
          the Browse and Print menus are  the same  and are  used to control
          the print flags of your labels.  These choices are:

             F1 Flag  F2 Toggle

          The Toggle  choice will  simply change the state of the print flag
          for the displayed label.  If  the  label  is  flagged  it  will be
          cleared and  if the label is not selected it will be flagged.  The
          total number of flagged labels will also be updated.

          Selecting Flag  from the  Browse or  Print menus  will display the
          Flag menu  and allow you to work with label print flags in several
          ways.


                                         19






              Flag Menu
             
             F1 All  F2 Range  F3 Search  F4 Quit


          This menu allows you to  control  label  flags  in  many different
          ways.   Even after  you have selected the labels you want you will
          still have to tell the program how you want to flag them.  This is
          done with the Flag Action menu shown below.


              Flag Action Menu

             F1 Set  F2 Clear  F3 Toggle  F4 Quit


          By using  these two menus together you can control the print flags
          in any way you want.  For example to flag all labels in a file for
          printing you  would simply  select Flag / All / Set.  To clear all
          print flags you would select   Flag / All / Clear.

          Any group of consecutive labels in your file is considered a Range
          and may  be easily  flagged.   If Range  is selected from the Flag
          menu a small window will pop up asking you to  enter the  Range of
          labels to  flag.   It will  ask for  the first  label and the last
          label to  flag.   The defaults  for these  are the  first and last
          labels in your file.


            ---| Define Range |-------------------------------------------
           |                                                              |
           |     Select From Label  [1   ]      To Label  [10  ]          |
           |                                                              |
            --------------------------------------------------------------



          Pressing Esc  will close the window and return you to the previous
          menu without changing any  flags.   After you  enter the  range of
          labels to flag you have to select the desired action from the Flag
          Action menu.  If  you wanted  to set  the flags  for the  first 10
          labels in your file you would enter:


                     Flag / Range / - enter 1 and 10 - / Set.


          The third  choice from  the Flag menu is called Search.  This will
          allow very flexible searches to be used to control the print flags
          of your  labels.   See the  section below  for the complete use of
          searches.

                                         20







          6.3.2  Searching for Labels

          Simply labels includes many  different types  of searches  to help
          you find  labels in  your files.  The searches are used throughout
          the program to find, delete and  flag  your  labels.    Whenever a
          search is used the Search menu will be displayed for you to select
          the type of search to use.

          After you select the type of search to use from the Search  menu a
          window, called Define Search, will pop up for you to fill out.  If
          you press Esc before it is  filled out,  or at  any time  during a
          search,  the  search  will  be  cancelled.   This window will look
          slightly different  depending on  the purpose  of the  search.  If
          Search was selected from the Flag menu there will be an extra line
          where you select the type of flag action  desired for  any matches
          found.   If Search is selected from the Browse menu this option is
          not displayed and after each match is found you have the choice of
          flagging, editing,  deleting, or continuing with the search.  This
          is explained fully below under browsing with searches.

          In all searches the case of the text  does not  matter.  Searching
          for "SMITH"  will find  Smith, SMith  or smith.  The searches only
          check the number of  characters you  enter for  a match.   This is
          handy if you are not sure of the correct spelling.




           --| Define Search |-------------------------------------------
          |                                                              |
          | Search for  [Text1               ] - [Text2               ]  |
          |                                                              |
          | Search Line #  [1 ]   using the full line                    |
          |                                                              |
          | Flag Action:  Set Flags                                      |
          |                                                              |
          | Start Searching at Label  [1    ]                            |
          |                                                              |
           --------------------------------------------------------------



          The top  line in  the window is used to enter the text you wish to
          search for.  In  this  field  you  can  enter  any  text including
          special or  graphic characters  that you wish to find.  The second
          text field on the first line is only used for Range searches which
          are explained below.

          The  second  line  of  the  window  is  used to tell Simply Labels
          exactly what line and what part of that line to look at during its

                                         21





          search.   After entering  the line  number you  wish to search you
          have to select which part of the line  to use.   You  will see the
          following message  displayed in the window, and the Part Line Menu
          will be displayed.

                    "Select Part of line to use from menu"


            Part Line Menu

            F1 All  F2 Part  F3 First  F4 Last


                 All - Uses the complete line
                Part - Starts at any position and uses rest of line.  You
                       will have to enter the starting position if this
                       choice is used.
               First - Uses only the first word
                Last - Used only the last word



          This allows you to narrow  your  searches  down  to  very specific
          parts  of  the  label.    For  example  you may easily search your
          mailing labels for anyone with the last name of Smith by searching
          line 1 using the last word.  

          After specifying  the part of the label to search you have to tell
          the program what to do with any matches  it may  find.   If Search
          was selected from the Flag menu you will see the following message
          and the Flag Action menu will be displayed.

                        "Select action from menu"

          You can choose to Set, Clear  or Toggle  the flags  of any matches
          that the search may find.  

          The last line in the Search window lets you enter the label number
          you want to start searching at.  This  will normally  be the first
          label but  any valid  label number may be entered.  This is useful
          with link files or very large label files.




          Types of Searches

          The Search menu is always used  to select  the type  of search you
          wish to use.  Each type of search will have different uses and you
          will find that the first two are used the most often.   When using
          searches to  flag labels any number of searches may be combined to
          select labels that match very complex conditions.   For example to

                                         22





          find all  people in a mailing list who live in California and have
          a last name of Smith you would use two searches.   Always  use the
          broadest searches  first which, in the example, would be to select
          or Set the flags of all people who live in California.  After this
          was done  you would search and clear the flags of all people who's
          last name is Not Equal  to  Smith.    All  types  of  searches are
          explained below. 


            Search Menu

            F1 Complete  F2 Equal  F3 Less  F4 Greater  F5 Not Eq  F6 Range



          Complete Searches

          The first  choice in  the Search  menu is called a complete search
          and it is the  simplest  type  of  search  in  Simply  Labels.   A
          complete search will find any occurrence of your text any place in
          your label.  The text can be in any position on any  line and this
          search will  find it.   When  filling out  the Search window for a
          Complete search you will note that you do not have  to specify the
          part of  the label to search because the complete label is checked
          for a match.



          All other searches listed in the Search menu are considered  to be
          conditional searches.  This means that some condition must be true
          before the label is considered a match.  Also conditional searches
          must be  told exactly  what part of the label to check for a match
          and do not care what is outside of this area.




          Equal Searches

          This type of search will find any label  that exactly  matches the
          text  you  entered.    The  difference between this search and the
          complete search is that you must specify the part of the label you
          wish to search.  This is a straight forward search that is easy to
          use.  

          There is however, one other feature of this  search that  makes it
          much more  flexible.  This feature is called a scanning search and
          it is used by  placing the  tilde (~)  character in  front of your
          search text.   Whenever Simply Labels does an Equal type search it
          checks the first character of your  search text  for a  tilde.  If
          one is  found Simply  Labels will  scan the  part of the label you
          specified, looking  for a  match.   For example,  an Equal search,

                                         23





          searching for  ~CA (read  as scan  for CA)  using a full line will
          find all  labels that  have "CA"  anywhere in  that line.   If the
          scanning feature  was not  used the  line would have to start with
          "CA" to be considered a match.   The  scanning feature  only works
          with Equal type searches but it will work with any part of a label
          including first and last words.



          Less Searches

          This search will find all labels that are  less than  the text you
          entered.   You must  specify the  part of the label to use for the
          search.  As an example you could search for all people who  have a
          last name  that is  less than Smith by performing a Less than type
          of search on line #1 using only the last word.



          Greater Searches

          This will find labels that are greater than your text.   Again you
          must specify the part of the label to use.



          Not Equal Searches

          Find all labels that are not equal to your text.  This search will
          find a lot of  matching labels  unless you  limit the  search to a
          very specific part of your label.  



          Range Searches

          A Range  search will find all labels that fall within a range that
          you specify.  If  you look  at the  Define Search  window you will
          notice a  second text  field at the right of the first line.  This
          field is used to specify the upper limit for range searches.  In a
          Range search  a label  will be  considered a  match if  it is ">="
          Greater than or equal  to "Text1"  OR "<="  Less than  or equal to
          "Text2".




          6.3.3 Browsing with Searches

          When  you  select  Search  from  the  Browse menu the searches are
          performed slightly different.  The  searches  are  defined  in the
          same way,  with the  Define Search  window, but  you are no longer

                                         24





          dealing with print flags so line 3 in the window is blank.   After
          the search  finds a  match the  Browse Search Menu is displayed to
          allow you to work with the matching label.  This menu was included
          to allow  you to  edit or  delete any  group of labels that can be
          found with a search.  It allows you to see each label that matches
          the search before you do any work on the label.  


            Browse Search Menu

            F1 Continue Search  F2 Toggle  F3 Edit  F4 Delete


          Selecting Continue Search will just restart the search at the next
          label after the match, using the  same search  definition.  Toggle
          will allow you to control the print flag of the label found in the
          search.  Edit will allow you to edit  the label  text, if  you are
          using a label file, or allow you to edit the label definition with
          link files.  By selecting Delete you can  control the  delete flag
          of the label.  Note Delete is not allowed with link files.





          6.3.4 Moving Around Your Files

          This version  of Simply  Labels makes  it very easy to move around
          your label files.  By pressing Alt-M at any menu  you can  move to
          any label  by entering  its number.  This is the same as selecting
          Move from the Browse menu.  The Home  key will  move to  the first
          label and  the End  key will  move to the last label in your file.
          The PgUp key will move to the previous label and the PgDn key will
          move to the next label.

          You can  quickly move  between flagged  labels in  your file. (See
          section 6.3.1 for information on flagging labels)   Pressing Ctrl-
          PgUp will  move to  the previous  flagged label and Ctrl-PgDn will
          move to the next flagged label.

          All of  these  move  functions  will  work  any  time  a  label is
          displayed on your screen.  These keys are listed in Appendix D but
          you can get a list on your screen at any time by pressing Alt-H.





          6.3.5 Deleting Labels

          Selecting Delete  from the  Browse menu  will bring  up the Delete
          menu and  allow you  to delete labels you no longer need.  Deleted

                                         25





          labels are just flagged  and not  actually removed  until you save
          your file.   When  you save your file you will be asked to confirm
          that you wish to delete the labels.  


            Delete Menu

            F1 Displayed  F2 Flagged  F3 Clear All


          When a label has  been flagged  for deletion  you will  see an "*"
          displayed in front of the label number in the information area.  
          From the  Delete menu  you can select Displayed to toggle the flag
          for the displayed label.   If  the label  was already  flagged you
          will unflag it or clear the delete flag.

          Selecting Flagged  from the  delete menu  will allow you to delete
          all labels that have been flagged  for printing.   This  means you
          can  use  all  of  the  search features in Simply Labels to delete
          labels by first flagging them for  printing.   See the  section on
          Searching for Labels (6.3.2) for more information. 

          The last  choice in  the Delete Menu is call Clear All and is very
          simple.  It will clear the delete flags for all labels.





          6.4 Printing Labels

          All labels are printed from the Print menu which is  selected from
          the Use  menu.  Normally the name of the current menu is displayed
          in the block on the right in the information area.  With the Print
          menu you  will see the name Print plus a letter.  This letter will
          be L, E, or R and  will  tell  you  the  printing  format  that is
          currently  selected.    "Print  L"  is  for  labels, "Print E" for
          envelopes, and "Print R" for report format.  This menu  allows you
          to control all printing options and print your labels in a variety
          of ways.



            Print Menu

            F1 Flag  F2 Toggle  F3 Go  F4 Sample  F5 Edit  F6 Options



          Before any labels can be printed  they must  be flagged (selected)
          for printing.   This  may be  done with the first two choices from
          the Print  menu.   See section  6.3.3 for  information on flagging

                                         26





          labels.   After you have flagged the labels you wish to print they
          may be printed by selecting Go from the Print Menu.  You will have
          to  select  the  output  device  for the labels which is explained
          below.  If you press any  key  at  any  time  during  printing the
          printing will  pause.   You can  then press  Esc to  return to the
          Print menu or any other key to continue  the printing.   After the
          labels are  printed you  will notice that the print flags have not
          changed.  This allows you to  print the  same labels  to different
          devices or in different formats without having to flag them again.

          Selecting Sample  from the Print menu will print a sample label on
          your printer using the current format and options  selected.  This
          is  used  to  help  you  align  your labels in your printer before
          printing your file.

          From the Print menu  you also  have control  of the  paper in your
          printer.  By pressing Alt-L the printer will advance one line at a
          time.  A top of form command may  be sent  by pressing  Alt-P.  In
          this program  Top of  Form means  one label  for Label format, one
          envelope for Envelope format, and the normal form  feed when using
          Report format.






          6.4.1 Output Devices

          Simply Labels  allows you  to print your labels to several devices
          including the screen, printer, a disk  file or  a new  label file.
          Whenever you choose to print labels you will be asked to select an
          output device from the Device Menu.  



            Device Menu

            F1 Printer  F2 Disk  F3 Screen  F4 Label File



          Printer

          When using your printer as  the  output  device  the  program will
          check to  make sure  your printer is ready to print before sending
          any labels to be printed.    If  your  printer  is  not  ready the
          program will  beep and ask you to check it.  At this point you can
          fix your printer and continue or press ESC to abort  and return to
          the Print menu.

          When printing  labels to  the printer,  any typefaces selected for

                                         27





          that label will be used as the label is printed.  Note  that these
          typefaces are  not used  when printing  to the screen or to a disk
          file.  Therefore if you print your labels to a disk file  and then
          later print  the disk  file on  your printer, your labels will not
          contain the typefaces selected in your label file.  



          Disk File

          Printing your  labels  to  a  disk  file  is  very  important when
          combined with  the Import option because it allows you to transfer
          data between files.  When you select Disk from the Device menu you
          will  be  asked  for  a  file  name  for the text file.  If a file
          already exists with the name you entered you will be  asked if you
          wish to  replace it.  No extension is assumed so you must enter an
          extension if you want one.  The files that Simply Labels prints to
          disk are standard ASCII text files and may be read by any program.
          For example you can use the search functions  in Simply  Labels to
          select certain  mailing labels, print them to a disk file and your
          word processor can use the file  to create  form letters.   If any
          errors occur  during printing  to the  disk file the printing will
          stop and an error message will be displayed.



          Screen

          The screen is handy for checking  to make  sure the  proper labels
          will be  printed.  When you are sure you have selected the correct
          labels you can print the same labels to the printer to get  a hard
          copy.   When printing  to the screen, the screen is cleared except
          for the message line at the  bottom.    This  line  will  show the
          progress  of  the  printing.    See the section on Setting Program
          Options (9.4)  for  information  on  setting  the  screen printing
          speed.   The printing  will pause  when any key is pressed and you
          have the option of continuing or aborting the printing.



          Label File

          This option does not actually print your labels but rather it will
          create  a  new  label  file  containing  only  the labels that are
          flagged.  This new file will be a clone of the file  you are using
          and will  be the  same except for the label data.  All you have to
          do to use this option is  select Label  File from  the Device menu
          and enter a file name.  

          This device  is very  handy for  splitting large  label files into
          smaller files but its main use is converting link files into label
          files.   If you  use this  device when  a link file is loaded, all

                                         28





          labels that are flagged will be read from  the database  and saved
          in a new label file.  Be careful using this option with link files
          because it is possible to create label files that are too large to
          load back into memory.





          6.4.2 Print Options

          The  last  choice  in  the  Print  menu is Options and it lets you
          change all options used when  printing  your  labels.    When this
          choice is selected a window is displayed showing all current print
          options along with the Options Menu.   From  the Options  Menu you
          can select  one of  three different  printing formats  to use when
          printing your labels, change all print  options and  make typeface
          selections for  your label  file.   All options set from this menu
          are saved as part of your label file.  If  you select  a different
          format,  all  options  for  that  format will be in effect just by
          selecting that format.  This allows you to  quickly change between
          formats while maintaining all settings.



            Print Options Menu

            F1 Labels  F2 Envelopes  F3 Report  F4 Other  F5 Typeface



          From the  Print Options menu there is a choice called Other.  This
          is used to set the other  or general  printing options.   A window
          called  Other  Options  will  pop  up  allowing  you  to set these
          options.  Press Esc when you have finished entering them.



              --| Other Options |-----------------------------
             |                                                |
             |  Number of Copies  [1   ]                      |
             |                                                |
             |  Print All Copies Together (Y/n) [Yes]         |
             |                                                |
             |  Double Strike Background Text (Y/n) [Yes]     |
             |                                                |
             |  Center Labels (y/N) [No ]                     |
             |                                                |
             |  Remove Blank Lines (y/N) [No ]                |
              ------------------------------------------------



                                         29





          The number of copies will be a number  from 1  to 9999  and is the
          number of  times you  want each  label printed.  The second option
          allows you to print all copies of a label together.   This  is the
          normal  way  labels  are  printed  but  you  may  want copies of a
          complete set of labels  in  which  case  all  selected  labels are
          printed and  then this  is repeated  for each copy required.  Note
          that when  using the  Report format  this option  will control the
          number of reports printed.

          Double  Striking  background  text  is  a  way of highlighting any
          background text you use in your label.   This is  done without the
          use of  any printer  codes by first printing the complete line and
          then with a second pass printing only the  background text.   This
          works with  most print options, including multiple labels per line
          and envelopes but does not work  when  you  choose  the  option of
          centering your  labels.   It is  automatically turned  off in this
          case.

          The Center Labels option  will center  the label  text within your
          printed label.   This works very nice with mailing labels and will
          work with any number of  labels  across.    Short  address  are no
          longer printed on the left side but will be centered in the label.
          This also works with envelopes.

          The last option is  used mostly  with link  files but  may be used
          with label  files as  well.  When a label is made from fields in a
          database it is common  to get  blank lines  in your  labels.  This
          will  remove  them  and  move  all  other lines up to fill in your
          label.



          Typeface

          Selecting Typeface from the Print Options  menu will  allow you to
          select any  of the  defined typefaces (See Setting Program Options
          (9.3) for more information.) for any line in your label.   See the
          section on  Editing Label  Formats (5.2) for information on how to
          use this option.  This option is not used when  printing labels in
          Report format.   With  Report formats the typefaces are set in the
          report options.





          6.4.3 Print Formats

          Label Format

          Selecting this choice will tell the program to print your  file as
          standard labels  and let  you set the options for this format.  To

                                         30





          set most  label options  you must  select Labels  from the Options
          Menu.   When this  is done a window, called Label Options, will be
          displayed showing all options  that are  available with  the Label
          format and  allow you to change them.  This window is shown below.
          When the options are set the way you like just press ESC to return
          to the Options Menu.




                --| Label Options |--------------------------------
               |                                                   |
               |  Number of Labels Across. (1-5)  [ ]              |
               |                                                   |
               |  Spacing Between Labels.  [  ]                    |
               |                                                   |
               |  Lines Between Labels.  [  ]                      |
               |                                                   |
               |  Lines in Label to Print.  [  ]                   |
               |                                                   |
               |  Left Margin.  [  ]                               |
               |                                                   |
               |                                                   |
               |  Print Sample Label.  [ ]                         |
                ---------------------------------------------------



          Simply labels  will allow  you to  print up  to 5  labels across a
          page.  If you select more than 1 label across you will  be able to
          enter the spacing between your labels.  You may have to experiment
          with this value to find the proper spacing.   The  values for this
          option are  from 0  to 99 characters.  If only one label across is
          selected you will not be able to set this option.

          The next option is the lines between your labels and it just means
          the  number  of  blank  lines  printed between each row of labels.
          This is normally set when the label was first designed  but may be
          changed in  this window.   The  left margin helps in aligning your
          paper.

          The Lines in Label to  Print  option  allows  you  to  control the
          number of  non-printing lines.   This  option is  normally set the
          same as the number of lines in your label.  Non printing lines may
          be used  to store  information in your files that does not need to
          be printed as part of the label.  This topic  is discussed further
          in section 8.1

          The next option allows you to print sample labels on your printer.
          This is the same as selecting  Sample from  the Print  menu but it
          lets you  see what  your options  are set like without leaving the
          options screen.  To print sample labels just  press the  space bar

                                         31





          when the cursor is at this option.




          Envelope Format

          By  choosing  Envelope  from  the  Print Options menu you tell the
          program to print your file as  envelopes.   This format  is really
          only useful  if your  file contains mailing labels but there is no
          reason it can't be used with any type of label.  To  change or set
          any  envelope  options  you  must select Envelopes from the Option
          Menu.  When this format  is  selected  a  window,  called Envelope
          Options is displayed showing all available options.  When you have
          finished entering the options just  press  ESC  to  return  to the
          Options menu.  Whenever the envelope format is selected all labels
          that are printed will be printed as envelopes.





           --| Envelope Options |----------------------------------------
          |                                                              |
          |  Print Return Address. (Y/n)  [Yes]                          |
          |  Pause Before Printing Envelopes. (y/N)  [No ]               |
          |                                                              |
          |   --| Return Address |----------------------------------     |
          |  |                                    Label # [1    ]   |    |
          |  |                                                      |    |
          |  |  [Your Name                 ] -  N L Q               |    |
          |  |  [Your Address              ] -                      |    |
          |  |  [Your City & State         ] -                      |    |
          |  |  [                          ] -                      |    |
          |  |  [                          ] -                      |    |
          |   ------------------------------------------------------     |
          |                                                              |
          |  Envelope Width. (Char) [90 ]          Height. (Lines) [25]  |
          |  Starting Line for Address. [10]                             |
          |                                                              |
          |  Print Sample Envelope. [ ]                                  |
           --------------------------------------------------------------  




          The first option on this screen gives you the choice of printing a
          return address  or not.   If  "N" is entered for this choice, only
          the main address from your label file will be printed and you will
          not be  able to  enter any  return address  options.  Entering "Y"
          will display the current  return address  and allow  you to change
          it.   The return  address shown  in the Envelope Options window is

                                         32





          used with all envelopes printed from the current file.
          Inside the Return Address window you are asked for a  label number
          for the  return address.  You can enter any label number from your
          file and the program will use  that label  as the  return address.
          If you  don't want to use a label from your file you can just move
          down and enter it manually.   In  either  case  you  may  edit the
          return  address  and  add  any  typeface you wish to use with this
          address.  The typefaces entered here are only used for  the return
          address and are different from the selections entered for the main
          file.  The typeface selections made from the Option menu  are used
          for the main address of the envelope.

          There is  an option  to pause  before printing each envelope which
          allows single envelopes to  be  used.    This  option  is normally
          turned off. 
           
          Simply Labels  will print  any size envelope you can fit into your
          printer.  Instead of just allowing one or  two envelope  sizes you
          can define  any size  you like by entering the width and number of
          lines in the envelope.

          When entering the  size  options  just  remember  that  the return
          address is  fixed at  the top  left and  you can position the main
          address any where you like.   The width  option is  used to center
          the main  address.   If you  want to  move the main address to the
          right just increase the width number.   The  height option  is the
          total lines  in the envelope and should be adjusted to move you to
          the top of the  next  envelope.  (Tractor  feed  envelopes)   With
          single  feed  envelopes  you  may  find  that it is better to stop
          printing right after the main address has been printed.  This will
          prevent paper  out error  messages.   The last option for envelope
          size is the Starting Line for Address and  it controls  which line
          in the  envelope the  main address  starts on.   To  move the main
          address up, just decrease this number  or  to  move  it  down just
          increase it.

          The  last  option  on  this  screen  allows  you  to  print sample
          envelopes.  When the cursor is on this option just press the space
          bar and  a sample  envelope will be printed on your printer.  This
          is the same as selecting Sample from the Print Menu  but you don't
          have to leave the envelope option screen.

          The method  of entering  the envelope  size was  chosen because it
          allows any size envelope to be  used  and  it  will  allow  you to
          adjust  for  special  typefaces.    For example if the size of the
          envelope was fixed and you wanted the main address printed in wide
          characters, the  main address  would be way over on the right side
          of the  envelope.   This way  you can  center the  main address by
          adjusting the  width option.   A  good idea is to print out sample
          envelopes on normal paper  until you  get the  set up  just right.
          You won't  have to enter these values each time you load your file
          because all options are saved as part of your file.

                                         33







          Report Format

          This choice will tell the program to print your labels in a report
          format and  allow you  to set  all available  report options.  The
          Report format consists of a page heading or title and  the body of
          the report which will be information from your labels.  Each label
          you print from the Print Menu will make up one line in the report.
          This  is  a  good  way  to  get summaries or lists from your label
          files.  The report can contain up to  nine columns,  each of which
          may be  any part of any line in your label and a column containing
          the label numbers.  You can  have two  title lines  and the report
          can be  printed on  any size page.  This format is very useful for
          all types  of label  files.   You could  use the  report format to
          print out  a list  of all parts from a parts file or a list of all
          cassettes from a tape file.  To use this format all you have to do
          is enter or select the options you want and press ESC when you are
          finished.  Whenever the report format is selected  all labels that
          are  printed  will  be  printed  in the report format.  All report
          options are set in the Report Options window shown below.



           --| Report Options |------------------------------------------
          |                                                              |
          |  Title 1 - [                                               ] |
          |  Title 2 - [                                               ] |
          |                                                              |
          |                                       Report Contents        |
          |        General Options                                       |
          |                               Column  Line#  Position Length |
          | Repeating Titles (Y/n) [Yes]                                 |
          | Title Typeface  N L Q           1  -  [  ]  -  [  ]  -  [  ] |
          | Report Width  [78]              2  -  [  ]  -  [  ]  -  [  ] |
          | Print Date (Y/n) [Yes]          3  -  [  ]  -  [  ]  -  [  ] |
          | Print Label Numbers  [Yes]      4  -  [  ]  -  [  ]  -  [  ] |
          | Report Typeface  Condensed      5  -  [  ]  -  [  ]  -  [  ] |
          | Page Length  [66]               6  -  [  ]  -  [  ]  -  [  ] |
          | Top Margin  [3]                 7  -  [  ]  -  [  ]  -  [  ] |
          | Bottom Margin  [3]              8  -  [  ]  -  [  ]  -  [  ] |
          | Left Margin  [ ]                9  -  [  ]  -  [  ]  -  [  ] |
           --------------------------------------------------------------



          The top part of this screen allows you to enter the report titles.
          Two title lines are printed and can be left blank if desired.  The
          repeating titles option will if selected cause the  title lines to
          be printed at the top of each new page.  If you enter "N" for this
          option the title lines are only printed on the first  page and two
          extra labels are printed on all remaining pages. 

                                         34






          If you  want to print the date as part of your report, just select
          that option and the  date will  be printed  as part  of the second
          title line.   The report format does not use any typeface settings
          from the main label  file  but  instead  allows  you  to  select a
          typeface for  the title  lines and  a different  typeface for your
          labels, or the body of the report.  The report width is  just used
          to center the title lines and should be set accordingly.

          The other options allow you to set options that affect the body of
          the report.  The  first  option  allows  you  to  print  the label
          numbers as  part of  the report.   If  this is  selected the label
          numbers are printed as  the  first  column  in  the  report.   The
          typeface for  the body of the report will normally be condensed to
          allow as much as possible to  fit  on  one  line  but  can  be any
          typeface you have defined.

          The page length, top and bottom margins combine to define the size
          of the printed page.  The defaults are set for a standard page but
          can be  set for  almost any  size page.   If you want a continuous
          printout without  any page  breaks just  set the  page length less
          than the  top margin  plus the  bottom margin.   Setting it to one
          works just fine.

          The next set of options will control what  is actually  printed in
          your report.   To  print data  from your labels in your report all
          you have to do is put the number of the line you want printed next
          to the  column you  want the line to be printed in.  You must also
          specify the part  of  the  line  to  use  by  entering  a starting
          position and  length.  When printing in the report format blank or
          empty columns are not printed.




          6.5 Adding Labels

          Selecting Add from the Use menu will cause the program  to display
          the Add  menu allowing  you to add more labels to your label file.
          Please note that you cannot add any labels to a link file.


             Add Menu

             F1 Blank  F2 Copy  F3 Import  F4 Quit

          If Blank is selected from the Add menu a blank  label is displayed
          for you to fill in.  If you select Copy instead, you will be asked
          for the number of the label you wish to copy.  After  entering the
          label number,  that label is displayed and may be edited to create
          the new label.  The Copy feature is very handy  if you  have a lot
          of labels  with similar text.  A good use for this feature is when

                                         35





          entering a lot of mailing labels that have  the same  City, State,
          and Zip.   You  could enter  the first label and then use the Copy
          feature to Copy the rest and edit the name and address.

          If you enter or edit any text, the new label will not  be added to
          your file.  This was done to prevent blank or duplicate labels.

          See section 6.5.2 for information on importing labels.




          6.5.1 The Label Editor

          When editing  text inside a label you have a full label editor and
          what you see on the screen is exactly what the label will contain.
          A  help  screen  showing  the  editing  commands  is  available by
          pressing <Alt-H> and these keys are listed in Appendix D which may
          be used as a quick reference card.

          You can  use the cursor keys to move freely around the label.  The
          HOME key will move to the first position  on the  current line and
          the END  key will move to the end of the text on the current line.
          Pressing End a second  time will  move to  the end  of the current
          line.  Ctrl-Home will move to the beginning of the label and Ctrl-
          End will move to the end of the  label.   Pressing the  RETURN key
          will move  to the  start of  the next line, or field if your label
          has background text.

          The INS key will toggle between Insert and Typeover modes  and the
          cursor will  change shape  to show  the current  mode.  The cursor
          will be a solid block when in typeover mode and an underscore when
          in insert  mode.   The DEL key will delete the character under the
          cursor and move all remaining text on that line to the left.   The
          BACKSPACE key  will delete the character to the left of the cursor
          and move all remaining text  and  the  cursor  back  one position.
          When in insert mode all text pushed outside the label is lost.

          Pressing Ctrl-Left  will move  you to  the left one word at a time
          and Ctrl-Right will move one word to the right.  You can  center a
          line of  text within  your label by placing the cursor on the line
          and pressing the Alt-C  keys.   An erase  to the  end of  the line
          function is provided which will delete all text from the cursor to
          the end of the current line.  This is done  by pressing  the Alt-E
          keys.

          The current  system date  may be  inserted into your label text by
          pressing Alt-D and the  current time  may be  inserted with Alt-T.
          Simply Labels  also allows  commonly used  text to be entered with
          Qwik keys.  See section 8.2 Date and Time Stamps or 8.4  Qwik keys
          for more information.
           

                                         36





          If your labels do not contain any background text you can insert a
          blank line at the cursor position  by  pressing  Alt-I.    You can
          remove a complete line of text by pressing Alt-R. 

          When  editing   labels  with   background  text   there  are  some
          differences.  First of all  the  cursor  will  never  rest  on any
          background text, preventing you from changing it.  Background text
          breaks your label up  into fields.   A  field is  any blank spaces
          between background  text.   The word left and word right functions
          also work as field left and field right  functions when background
          text is  used.   Also the  INS, DEL  and BACKSPACE  keys will only
          affect text in the current field.  Any remaining text on that line
          will not  be affected.  Also the center a line and erase to end of
          line functions only affect text in  the  current  field.    Load a
          sample file containing background text and add a few labels to see
          how background text works.

          Simply Labels allows you  to use  any character  except the Return
          character  (ASCII  code  13)  as  text  in  your  labels.    These
          characters may be used for either background text  or normal label
          text.   There are  three ways of entering extended characters into
          your labels.  The first is  to use  the DOS  convention of holding
          down the  Alt key  and typing the ASCII code for the character you
          want.  The second is to  use  the  special  characters  defined in
          Simply Labels (See section 9.2 for more information).

          The third  method allows  the graphic  characters contained in the
          extended character set  to  be  easily  entered  as  text  in your
          labels.   These characters  may be used for either background text
          or normal text and are very  useful for  making fancy  labels with
          boxes or  logos in them.  To use these characters in Simply Labels
          you just have to press F1 at any time while editing label text and
          you  will  be  switched  to  graphic  mode.  A small happy face is
          displayed on the menu  line  to  show  you  that  you  are  in the
          graphics  mode.    Pressing  F1  a  second time will return you to
          normal text mode.  All of  the graphic  characters are represented
          by standard ASCII characters and can be entered from the keyboard.
          To see which keys represent which graphic characters copy the file
          CODES.DOC to  your printer.   If this file does not print properly
          on your printer you should  not  use  graphic  characters  in your
          labels.





          6.5.2 Importing Labels From Other Files

          The  Import  option  used  in  Simply Labels is quite flexible and
          allows you to import labels from most types  of data  files.  This
          has  many  uses  such  as  transferring  information between label
          files,  creating sub-files containing only  parts of  the original

                                         37





          file,  and to transfer information from other application programs
          into your label files.

          This program can read ASCII text files created  by any application
          such  as  a  spreadsheet  or  data  base  program and pick out the
          information you want to include in  your labels.   The  only thing
          that is  assumed about the text files is that they fit into one of
          three broadly defined types.  These are called  Label type, Column
          type or  Fixed Length  data files and are explained below.  To use
          the Import option you will have  to tell  the program  the name of
          the text  file to  import from  and exactly  what text you want to
          include in your labels.   This  information is  entered by filling
          out the  Import window.   After  you enter this information Simply
          Labels will read the file, build a label  according to  your input
          and then  display it  on the screen.  At this point you can add it
          to your file or read another label.  You may also press "A" to Add
          All imported labels.  Labels may be added until your label file is
          full or the end of the text file is reached.   Esc  will abort the
          import operation and return you to the Import menu.



            Import Menu

            F1 Label  F2 Column  F3 Fixed Length  F4 Quit



          Some notes  on importing  labels.   All labels  start out as blank
          labels, containing any background text that  may be  in your label
          format.   Background text is always preserved during importing and
          cannot be written over.  If  you try  to place  more text  than is
          allowed in  one line/field of your label the program will clip the
          imported text to make it fit. 






          Label Type Files

          Label type files are text files in which  the information required
          to make  a label  is contained in 66 lines or less and repeats for
          each label required.  Some examples of this  type of  file are the
          text files created by Simply Labels when printing labels to a disk
          file.  Most data base programs will also print this  type of file.
          It is  assumed that  if more than one label is to be read that the
          information in the text file be repeated every so many  lines.  If
          a  data  base  program  prints  mailing labels to a disk file, the
          first label will take from lines  1 to  6 and  the second  will be
          from lines  7 to 12.  This is an example of a repeating label type

                                         38





          file.  You can even build one label from each page of  a report by
          setting the  lines to  66.   When you  create text files from your
          applications you  may  want  to  turn  off  options  such  as page
          headings which may destroy the repeating nature of the text file.

          To import labels from this type of text file you will select Label
          from the Import Menu.  Next you will be asked  to select  the file
          you  wish  to  import  from.    This file is selected by using the
          Select File window (See Section 6.2.1).

          After the file has been selected you have  to fill  out the Import
          window shown below.




           --| Import |-------------------------------------------------
          |         Number of lines to make one label. [  ]             |
          |                                                             |
          |           ------  Disk File  ------        -- Label --      |
          |   Link    Line#    Start    Length         Line   Pos       |
          |     1      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     2      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     3      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     4      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     5      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     6      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     7      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     8      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |     9      [  ]     [  ]     [  ]          [  ]   [  ]      |
          |    10      [  ]     [  ]     [  ]          [  ]   [  ]      |
           -------------------------------------------------------------

           


          The first  information that  the program requires is the number of
          lines from the text file required to build one label.  This can be
          from 1  to 66  lines and represents how many lines before the text
          file repeats.  If you enter  a value  such as  6 the  program will
          read 6  lines from  the text  file, build one label, and then read
          the next 6 lines to build the second label.

          Once you tell the  program how  many lines  to read  from the text
          file you  have to  tell it  what text to include from those lines.
          You can place up to 10 pieces of information (Links) from the text
          file into  your label.   Each piece of information may be any part
          of any line read from the text file.  You must specify the line to
          use, where  to start  on that  line, the  length to  use from that
          line, and the position in the label for  the text.   To  enter the
          label position  a blank  label is  displayed on  the screen.  Just
          move to the desired position and press RETURN.

                                         39






          Defaults are used for most of these values and may  be selected by
          pressing RETURN.   The  default values  for each line in the label
          will be the corresponding line in the text  file, with  a starting
          position of  1 and  a length equal to the width of your label.  Do
          not worry about the length unless  you only  want part  of a line.
          This value  is adjusted as the label is built to make the text fit
          into your label.  When you have finished entering all values press
          Esc to start importing labels.

          This  method  of  specifying  how  to  build your label allows the
          program to read any text file  and arrange  the imported  text any
          way you  like in your label.  You can even take text from one line
          in your text file and use it on several lines in your label.  





          Column Files

          Column type files are text  files  in  which  all  the information
          needed to  make a  label is contained on a single line.  This type
          of text file is common with data base and spreadsheet programs (or
          the Report  format in  Simply Labels).   When  Simply Labels reads
          this type of text file a  label is  built from  every line  in the
          text file.




          Sample Column Type Text File:


          EMP#      Name     Age     Address           City
          --------------------------------------------------------------
          1999   John Doe     29   P.O. Box 23      St. John's, Nfld.
          1234   Janet Smith  34   P.O. Box 1234    Corner Brook, Nfld.
          9876   Dick Jones   23   P.O. Box 543     St. John's, Nfld.



          Importing labels  from this type of text file is done by selecting
          Column from the Import  menu.   Next you  have to  select the text
          file to import from.  You have to tell the program how you want to
          build your labels by  filling out  the Import  window shown below.
          This is  very similar  to importing  from label type text files as
          described above.





                                         40





           --| Import |-------------------------------------------------
          |                                                             |
          |                                                             |
          |           ------  Disk File  ------        -- Label --      |
          |   Link             Start    Length         Line   Pos       |
          |     1               [  ]     [  ]          [  ]   [  ]      |
          |     2               [  ]     [  ]          [  ]   [  ]      |
          |     3               [  ]     [  ]          [  ]   [  ]      |
          |     4               [  ]     [  ]          [  ]   [  ]      |
          |     5               [  ]     [  ]          [  ]   [  ]      |
          |     6               [  ]     [  ]          [  ]   [  ]      |
          |     7               [  ]     [  ]          [  ]   [  ]      |
          |     8               [  ]     [  ]          [  ]   [  ]      |
          |     9               [  ]     [  ]          [  ]   [  ]      |
          |    10               [  ]     [  ]          [  ]   [  ]      |
           -------------------------------------------------------------


          For each line in your label you must  tell the  program which part
          of  the  line  from  the  text  file  to use.  For example to make
          mailing labels from the sample text file above you would enter the
          following values at the Import window.


          Link   Start  Length        Line  Pos      Result

            1      8      13            1    1       (Name)
            2      26     17            2    1       (Address) 
            3      43     20            3    1       (City)
            4    


          After  the  values  needed  to  build  your labels are entered the
          program will read each line  of  the  text  file  and  display the
          resulting label on the screen.  You then have the choice of adding
          it to your file or pressing "N" to skip that label and display the
          next one.  





          Fixed Length

          This file  type is  used with  most database programs.  You may be
          using a dedicated database program that  has its  own non-standard
          file format.   You  can easily build labels from this type of file
          by selecting Fixed Length from the  Import menu.   This  works the
          same way  as with  the other  file types except you must give some
          additional information  about the  file.   To import  from a fixed
          length file  Simply Labels needs to know the record length and the
          length of any header that may be in the file.   The  length of the

                                         41





          header is  called the File Offset and if the file does not contain
          a header just enter 0.   PC-File database  files may  be read this
          way.



           --| Import |-------------------------------------------------
          |         File OffSet [    ]     Record Length [   ]          |
          |                                                             |
          |           ------  Disk File  ------        -- Label --      |
          |   Link             Start    Length         Line   Pos       |
          |     1               [  ]     [  ]          [  ]   [  ]      |
          |     2               [  ]     [  ]          [  ]   [  ]      |
          |     3               [  ]     [  ]          [  ]   [  ]      |
          |     4               [  ]     [  ]          [  ]   [  ]      |
          |     5               [  ]     [  ]          [  ]   [  ]      |
          |     6               [  ]     [  ]          [  ]   [  ]      |
          |     7               [  ]     [  ]          [  ]   [  ]      |
          |     8               [  ]     [  ]          [  ]   [  ]      |
          |     9               [  ]     [  ]          [  ]   [  ]      |
          |    10               [  ]     [  ]          [  ]   [  ]      |
           -------------------------------------------------------------


          When Simply Labels imports from a fixed length file it first skips
          over the number of bytes you entered as  the File  Offset and then
          reads a  single record.   This  is the  text that  is then used to
          build the first label.  Everything else about importing with fixed
          length files is the same as with column type files.






          6.6 Sorting Files

          Most standard  mailing label  programs are  set up  as a data base
          type program with fields for Name, Address, City and so on.  While
          this is  fine for  mailing labels  it severely  limits the type of
          labels you can generate.  Simply Labels takes a free form approach
          allowing what you see is what you get type of labels.  This allows
          much more flexibility in  designing label  formats but  presents a
          problem for  sorting labels.   When  using mailing labels the most
          basic sort is to sort the file by Last Name.  To do this in Simply
          Labels the  sort routines were written to allow you to sort on any
          part of any line.  It is possible to sort on the whole line or you
          can select  a sort  biased on  only the  first or last word in the
          line.  There is a  primary  and  a  secondary  sort  and  both can
          specify which part of any line to use.  For example you could sort
          a mailing label file on the  line containing  Zip or  Postal codes
          and then  as a  secondary sort, sort on the last word in the first

                                         42





          line.  This would sort your file by Zip codes and by Last Name. 

          To define the type of sort you  want  you  have  to  fill  out the
          define Sort  window.   This is similar to the Define Search window
          and is shown below.




            --| Define Sort |------------------------------------------
           |                                                           |
           |  Primary Sort:                                            |
           |     Sort on Line # [1 ]   using the last word             |
           |                                                           |
           |  Secondary Sort:                                          |
           |     Sort on Line # [0 ]   No secondary sort               |
           |                                                           |
           |                                                           |
           |     Ascending or Descending [A]       Start Sorting [ ]   |
            -----------------------------------------------------------



          You will be asked to enter the line number to use for  the primary
          sort.   Next you  have to select which part of the line to use for
          the primary sort.   This is  done by  making a  selection from the
          Part Line  menu.   See 6.3.2  for information  on using parts of a
          line.  After this is done  you have  to repeat  the above  for the
          secondary sort.   Entering  0 for the line number will disable the
          secondary sort.   Next  you  have  a  choice  of  an  ascending or
          descending sort.   Press RETURN at the Start Sorting field and the
          program will begin sorting your file.  If  you press  Esc any time
          in this  window the  sort is cancelled and you are returned to the
          Use menu.  The program will beep when the sort  is completed.   If
          you press any key while the program is sorting you have the option
          of continuing  with the  sort or  to abort  and return  to the Use
          menu.   When you  save your files they will be saved in the sorted
          order.  This way you only have to sort your  file when  labels are
          added or changed.





          6.7 Saving Files

          There are  two ways  to save your label files.  First any time you
          are at a menu with a file loaded into memory  you may  press F9 or
          Alt-S to  manually save  your file.     This is handy when you are
          adding a lot of labels and want to  save your  work.   You will be
          asked if  you want to save your file with its default name.  Press
          return to save it or you may edit  the filename  or path  or both.

                                         43





          This is  a very  easy way to make backups of your label files.  If
          you press Esc when the file name is displayed you will be returned
          without saving the file.

          Whenever you  choose to  leave the  Use menu you will see the save
          file message.  If you return to the Main menu  without saving your
          files any  changes you  made will be lost!!  If in doubt save your
          files.  If you do not want to save your file just press Esc.

          When saving  a file,  if a  file already  exists you  will see the
          message Replace [Filename]? (Y/n).  If you wish to replace it just
          press Return but if you do not want  to replace  the file  on disk
          say no and you will be given a chance to enter a new name.





          6.8 Deleting Old Files

          You can  delete label files you no longer need by selecting Delete
          from the Main menu.  You will have  to select  the file  to delete
          from the Select File window.  See section 6.2.1 on selecting files
          for more information.  To delete the file you will have to confirm
          that you  do indeed  want to  delete it.  Pressing "Y" will delete
          the file.





          7.0 Link Files

          Link files are a powerful new  feature of  Simply Labels.   A link
          file allows  you to  print any kind of labels from information you
          have already stored in a database  file.    They  are  called link
          files because  they actually  link to the database file to get the
          label data.  Whenever you load a link file the associated database
          is opened  and one label is made from each record in the database.
          See the  section below  to see  how the  labels are  made.  Simply
          Labels can  read two  types of  database files and will understand
          the file structure, so you work  with  your  data  by  field names
          only.  The two types of database files are dBase files (*.dbf) and
          PC-File (*.dta).  With dBase files the file structure is contained
          in a header in the database file itself.  This information is read
          when the file is first opened.  

          With PC-File a separate header file is needed  (*.hdr) to  get the
          file structure.   Therefore  to link  with a  PC-File database you
          must have both the header file (*.hdr) and  the data  file (*.dta)
          available.   The program will show that it is linked to the header
          file but  it will  read data  from the  data file  (*.dta).  Other

                                         44





          support  for  PC-File  database  files  includes  the  ability  to
          recognize the flip data character (~).   Try  out the  sample link
          files included on your program disk.

          One major point to remember about link files is that Simply Labels
          will never change your database file.  This means that  you cannot
          use  any  of  the  delete,  add  or sort options in Simply Labels.
          These operations are best  left to  the program  that created your
          database in the first place.

          Link files  have many  advantages over  label files.  First a link
          file can access many more labels.   The  maximum number  of labels
          for a  link file  is 32500.  If you have more records than this in
          your database they will be ignored.  Another advantage is that you
          do not  have to  enter your  data into two programs.  As you enter
          new records into your database  they  are  automatically  seen and
          available to your link file for printing.

          When  Simply  Labels  opens  your  database  file it is opened for
          reading only while allowing  other programs  to share  the file at
          the same  time.   This allows  Simply Labels to work on a network.
          The program has been tested on a small  network with  no problems.
          However any records added to the database after it has been opened
          by Simply Labels will  not be  seen until  the link  file has been
          closed and  reopened.  This should not be a problem as long as you
          are aware of it.





          7.1 Editing Link Files

          Building labels from your database is  a simple  matter of telling
          Simply Labels how to arrange the fields in your label.  Each piece
          of information (a field) placed into your label  is considered one
          link.  Up to 18 links may be used to build your label.  To do this
          a window, called Edit Link is used along with the  Edit Link menu.
          Both are  shown below.   Link  files may  be edited at any time by
          choosing Edit from the Browse or Print menus.  Any changes made to
          your links  can be  seen in  your labels as soon as you leave this
          menu.




             Edit Link Menu

            F1 Add  F2 Delete  F3 Move  F4 Position




                                         45





           --| Edit Link |-----------------------------------------------
          |                                                              |
          | Link  Field    Line Pos Len      Link  Field    Line Pos Len |
          |   1  NAME        1   1  30        10                         |
          |   2  ADDRESS     2   1  30        11                         |
          |   3  CITY        3   1  30        12                         |
          |   4  STATE       3   1  3         13                         |
          |   5  ZIP         3   1  5         14                         |
          |   6                               15                         |
          |   7                               16                         |
          |   8                               17                         |
          |   9                               18                         |
          |                                                              |
          |                                                              |
           --------------------------------------------------------------


          When you first create a link  file your  labels and  the Edit Link
          window will  both be  blank.  You must add links to this window to
          tell the program how to make  your labels.   When  Add is selected
          from the  Edit Link  menu you  add a  new link to your label.  The
          first thing you must do is select the name of  the field  you wish
          to use.   A  menu will  pop up showing all fields in the database,
          along with their type and length, for you to select one.   You can
          use the  Up, Down,  Home, End,  PgUp, PgDn keys or press the first
          letter in the field name to  highlight the  field you  want.  When
          the proper field is highlighted just press RETURN to select it.

          After a  field has been selected you have to position the field in
          your label.  To  do this  a blank  label is  displayed.   Move the
          cursor to the desired position in the label and press RETURN.  

          Next you  must tell the program how much of the field data to use.
          The default for this is the length of data that will fit  into the
          label and  unless you really want less, just press RETURN.  If the
          field is too big to fit into the label the program will clip it.

          Thats all there is to it.  Your new link will now  be displayed in
          the Edit  Link window.   Add  as many as you need to complete your
          label and then select Quit to return and see your  label displayed
          on the screen.

          If you  want to delete a link just select Delete from the menu and
          enter the link number.  The  Position option  in this  menu allows
          you to reposition any link in the label.  Just select Position and
          enter the link number.  A blank label  will be  displayed with the
          cursor at  the old  position.   Move to the new position and press
          RETURN.  You will  also have  to enter  the length  again and then
          your updated link will be displayed in the window. 

          To understand  the Move  option you  have to  know how  a label is
          built from a series of links.  Simply Labels starts with the first

                                         46





          link and  adds it to the label, remembering the last position used
          in that line.  Next it  tries  to  add  the  second  link  at it's
          position.  If the position of the second link has been used by any
          previous link, the program  shifts it  right to  the last position
          used in  that line.  Of course if the second link is the first one
          on the line it will not be shifted.  

          By building labels this way you  can  place  several  fields  on a
          single line  without having  to worry  about the length of data in
          the fields.  To place several  fields on  a single  line just give
          each link the same position and the program will shift them to the
          right as needed.  Simply Labels will use the order of the links to
          determine which  links get added first and which ones get shifted.
          This is where the Move option comes in.  You can change  the order
          of the links by selecting Move and entering the number of the link
          you want to move.   After  you select  the link  to move  you just
          enter the  new number  for that link and the window is drawn again
          showing the links in their new order.  

          Look at the sample Edit Link window above and you will notice that
          3 links  (3,4,5) have  the same  position.  This would result in a
          line looking like the one below.


                        Sunnyvale CA 94086


          If the order of the links was changed to the following

                    3  State      3    1   3
                    4  Zip        3    1   5
                    5  City       3    1   30

          The new line would look like this

                        CA 94086 Sunnyvale

          You can see that the order of your links in  the Edit  Link window
          can be  important.   Just remember to order your links in the same
          order you would use if you were writing the label out by  hand and
          your labels will turn out fine.

          Some  notes  on  building  labels.    All  background text will be
          protected and if necessary field data is clipped  to do  this.  If
          it is necessary to shift field data to the right a space is always
          left between the two fields.  







                                         47






          7.2 Searching with Link Files

          Searching with link files is performed in the same manner  as with
          label files  (See section 6.3.2) but there are some points to keep
          in mind.  Simply Labels makes  no attempt  to use  any index files
          belonging  to   your  database   file  so  all  searches  will  be
          sequential.  Searches will  be  slower  than  searches  with label
          files.

          With label files a Complete search will find text anywhere in your
          label.  With link files a  Complete  search  will  find  your text
          anywhere in  a record  even if the text is not part of your label.
          This was done for  several reasons.   First  it is  much faster to
          check the  complete record  than to  build a label for each record
          and check the label text.  It also allows more  flexible searches.
          For  example  you  can  find  records  that  match a certain field
          without having to include that field in your labels.  

          All other searches work the same as with label files.  Conditional
          searches must  make a  label for  each record and then perform the
          search on the label text.   For  this  reason  these  searches are
          slower than Complete searches.
           





          7.3 Limitations of Link Files

          There  are  several  limitations  to  keep in mind when using link
          files.  First of  all if  your database  file has  more than 32500
          records,  Simply  Labels  will  ignore  them.    The program has a
          maximum number of labels of 32500.

          If you change the  structure of  a database  file you  may have to
          create a  new link  file for that database.  When the link file is
          loaded you can quickly see if your labels are correct.

          Simply Labels cannot change the data contained in your database so
          you will  not be  able to  use any  Sort, Add or Delete functions.
          You will  see the  message: This  operation not  allowed with link
          files.









                                         48





          8.0 Other Features

          8.1 Non Printing Lines

          This is an option that may be used with any type of file and it is
          very handy if you need it.   It  allows you  to mark  line in your
          label as non printing lines.  This allows you to store information
          in your files that you don't  want  printed.    For  example  in a
          mailing list  you could  have a non printing line that contained a
          persons phone number or employee  number.    This  information can
          then be used for searches or sorts or even in reports but it would
          not be printed in a label or envelope.

          The number of non printing lines may be  changed at  any time from
          the Print  Options menu.  All non printing lines will always be on
          the bottom of the  label and  they will  always be  together.  You
          can't select  for example lines 1 and 4 as non printing lines.  If
          you enter 2 for the number of non printing lines in a label with 5
          lines, then  lines 4  and 5  will be the non printing lines.  When
          you see your label displayed on the screen any non  printing lines
          will be seen with double lines in the label frame.  A sample label
          with non printing lines is shown  below.   When using  label files
          remember  that  non  printing  lines  take  up  memory the same as
          printing lines and will reduce the  maximum number  of labels that
          can be  in a  file.  Also remember that non printing lines are not
          extra lines added to your label but current lines you  do not want
          to print.



                         -----------------------------------
                        |                                   |
                        |             Label Text            |
                        |                                   |
                       ||          Non printing line        ||
                       ||          Non printing line        ||
                         -----------------------------------



          This option  is even more useful when using link files.  Since the
          label data is not kept in memory with link files it is a good idea
          to always  add extra  lines to  your label format and mark them as
          non printing lines.  The advantage of this  is that  you can place
          any field from the database in the non printing lines and use this
          information in reports and for searches.  Remember  link files may
          be edited  on the  fly at  any time  so if you need to search on a
          particular field you can just select Edit and  Add the  field to a
          non printing line.




                                         49






          8.2 Date and Time Stamps

          There are two ways to use time and date information in your labels
          and the method you use will depend on the application.   The first
          method is  to enter  the current  date or  time into your label as
          text.  This can only be done from within the  label editor  and is
          done with the following keys.

                      Alt-D   enters system date as text (MM/DD/YYYY)
                      Alt-T   enters system time as text (HH:MM:SS)

          This text may be edited just like any other text after it has been
          entered.  This method is good if you need to know the date or time
          the label was created or edited.

          If you  have a  label that you print on different days and need to
          know the date or time that the label  was printed,  you should use
          the stamp  method.   A stamp  is background  text that is replaced
          with the proper information when a  label is  printed.   The valid
          stamps are listed below.

                     MM/DD/YYYYY - replaced with system date
                        HH:MM:SS - replaced with system time
                           HH:MM - replaced with system time (No seconds)

          If  you  press  Alt-D  or  Alt-T while editing background text the
          proper stamp is inserted into your label as background text.   You
          cannot insert the actual system date or time as background text.





          8.3 DOS Shell

          Simply Labels  allows you  to exit  to DOS  any time  you are at a
          menu.  If you press Alt-D  you  will  see  the  following message:
          Shell to DOS? (Y/n).  Press "Y" or RETURN to go to DOS.  To return
          from DOS just type "Exit" and you will  be returned  exactly where
          you were.   It  is up  to you  to make sure your system can find a
          copy of COMMAND.COM  If the command processor cannot be loaded the
          shell will fail.




          8.4 Qwik Keys

          When working with labels there are some things that you seem to be
          entering over and over  again.   It would  be nice  to be  able to
          enter these  text strings with a single keypress instead of always

                                         50





          retyping them.  That is exactly  what Qwik  keys allow  you to do.
          You can define up to 10 Qwik keys (See section 9.4 for information
          on defining Qwik keys) and  enter  them  with  a  single keypress.
          Qwik keys are entered by holding down the ALT key and pressing one
          of the number  keys.  (0-9)    In  case  you  can't  remember your
          definitions  you  can  press  Alt-Q  and  all  definitions will be
          displayed on the screen.

          Qwik keys  are handy  for things  such as  the name  of your City,
          State, Zip  code or  any other text you enter over and over.  Qwik
          keys are active at all times  and  may  be  used  for  any program
          input.   One use  that you  may not  see right away is to use Qwik
          keys as macros.   For example  "FAS" will  make the  menu choices:
          Flag  /  All  /  Set    and  select  all labels for printing.  The
          following Qwik key  could  be  used  to  print  your  entire file:
          "PFASGP"  Print / Flag / All / Set / Go / Printer.







          9.0 Setting Program Options

          Program  configuration  may  be  done  from  several places in the
          program.  Any time you see the Configure choice in a menu  it will
          allow you  to set most program options.  This can be done from the
          Main menu, the Use menu  and  from  the  Format  menu.   Selecting
          Configure will bring up the configure menu shown below.



             Configure Menu

            F1 Screen  F2 Keyboard  F3 Printer  F4 Other  F5 Quit


          Most options  set from this menu will be in effect as soon as they
          have been set but they are  not saved  until you  leave this menu.
          Before leaving  you will  see the  message:  Save current Options?
          (Y/n)  If you choose not to save your options they will  remain in
          effect as  long as  the program is running.  The next time you run
          the program, the options saved on  disk  will  be  used.    If you
          choose  to  save  your  options  they are written to a file called
          SL.CNF.  All options are meant to be  set from  within the program
          and this  file should not be edited.  If this file cannot be found
          when you start Simply Labels the program will reset to its default
          settings.




                                         51






          9.1 Selecting Colors

          If you  select Screen  from the  Configure menu the Screen menu is
          displayed.   The choices in this menu allow you to quickly set the
          program to work on a Mono system or choose the Default colors.  If
          you don't like these you can choose your  own colors  by selecting
          Custom.


             Screen Menu

            F1 Custom  F2 Mono  F3 Default  F4 Quit


          If you choose Custom a screen is displayed allowing you to control
          every color used in the program.  You can see  the effect  of your
          selections as  you make  them.   Press Esc after you have selected
          your colors and don't forget to save them.




          9.2 Keyboard Definitions

          Simply Labels allows you to use almost the  complete character set
          as text  in your  labels.   One way  you can enter characters that
          cannot be entered directly from your keyboard is to define what is
          called a  special character.   With  special characters you assign
          the character you want to one of the letter keys and enter it into
          your label  text by  holding down the CONTROL key and pressing the
          letter key.   These  characters may  be used  as any  input to the
          program  including  label  text,  Qwik  keys, and for searching or
          sorting.

          These special characters are very useful for languages that do not
          have  all  their  characters  on  the  keyboard.   Another use for
          special characters is to place printer control codes directly into
          your labels.  If you find using the graphic mode for drawing boxes
          awkward you can assign the box  characters to  any keys  you want.
          One caution about using the control characters (below ASCII 32) in
          your labels.  These codes may  cause  some  printers  to  act very
          strange but should do no harm.

          To define your special characters you have to select Keyboard from
          the Configure menu and a window  will pop  up showing  the current
          definitions.  Just press the letter you want to define and use the
          Up and Down cursor keys to select the  special character  for that
          letter.   Press Esc  after you  have defined  all of your keys and
          don't forget to save your options.



                                         52






          9.3 Printer Settings

          This is a major problem for individuals who  write software.   Big
          software companies  have the  resources to  write drivers for most
          brands of printers.   There are  advantages to  the printer driver
          method but  what happens  if your printer is not supported.  Tough
          Luck!!

          A different approach was  taken with  Simply Labels  that lets the
          program work  with almost  any printer.  This approach also allows
          you to use options that may be unique to your printer.   In effect
          what the  program does  is allow  you to write a limited driver to
          match your printer, which assures that the program  will work with
          all different brands of printers.  One disadvantage of this method
          is that it requires you to dig out your printer manual and look up
          the codes needed to set up your printer the way you want.

          By selecting Printer from the Configure menu you will see a window
          pop up that allows you to define your printer. 



            --| Printer Options |----------------------------------------
           |                                                             |
           |               Parallel printer port (1-3)  1                |
           |                                                             |
           |             Name                     Definition             |
           |   1 - [N L Q            ] - [27/@/27/x/1               ]    |
           |   2 - [N L Q  U L       ] - [27/@/27/x/1/27/-/1        ]    |
           |   3 - [Condensed        ] - [27/@/27/15                ]    |
           |   4 - [Condensed  U L   ] - [27/@/27/15/27/-/1         ]    |
           |   5 - [Bold Italic      ] - [27/@/27/!/24/27/4         ]    |
           |   6 - [Wide             ] - [27/@/27/!/49              ]    |
           |   7 - [Big and Bold     ] - [27/@/27/G/27/E/27/h/01    ]    |
           |   8 - [Baby Print       ] - [27/@/27/S/0/27/3/18/27/M  ]    |
           |   9 - [Normal Print     ] - [27/@                      ]    |
            -------------------------------------------------------------



          The first option in this window  is the  printer port  you wish to
          use for  your labels.   It  would be nice to have a printer always
          loaded with labels and hooked to a second port.  If you  have this
          setup the  program is  capable of using ports 1 through 3.  If you
          have only one printer leave this set at 1.

          The rest of the window  allows  you  to  enter  up  to  18 printer
          typefaces for  your printer.   A typeface definition consists of a
          name, which describes the  typeface, and  the codes  needed to set
          your printer  to print  in that typeface.  In most cases the codes
          can be read directly from a table in  your printer  manual.  There

                                         53





          are only  9 definitions  shown in  the window  but if you move the
          cursor  down  past  the  9th  field,  the  extra  fields  will  be
          displayed.  

          If you  happen to  own a  Star NX10  printer, then you are in luck
          because that is the default printer for the program.   Even if you
          don't it  is a  good idea  to look  at the defaults to see how the
          typefaces are entered.  Load in  the file  called PRNDEMO.LAB that
          came on  your disk and print out the label in that file.  You will
          then see which of the default typefaces work on your printer.

          In any case here is how  to enter  your own  settings.   First you
          have to  decide which features you want to define and then look up
          the codes needed to put your printer in that mode.  The  rules for
          entering the  codes are  very simple:   The slash (/) is used as a
          separator  between  the  codes  to  be   sent  to   your  printer.
          Everything between  the slashes will result in one character being
          sent to your printer.  If there is a single  character between the
          slashes it  is sent  to the  printer exactly  as you  typed it. If
          there is more than one character  between the  slashes the program
          assumes that you entered an ASCII code and will send the character
          that has the ASCII value you entered.  The first and last slash do
          not need to be entered.  For Example:

               27/M      Will send ESCAPE  "M" to your printer

               27/77     Will send exactly the same codes to your printer 
                         because 77 is the ASCII code for "M".  This will 
                         set most dot matrix printers to Elite pitch.

               27/x/1    Will send  ESCAPE  "x1" to your printer.  This will
                         set most printers to Near Letter Quality

          If you cannot type the character needed directly from the keyboard
          use the  ASCII code  for that  character.  To send the ASCII codes
          from 0 to 9 just place a zero in front of the number (00 to 09).

          One  caution   about  using   your  typeface   definitions.    The
          definitions you  enter are  common to all of your files and if you
          change a definition after using it in a label file, that file will
          use the  new definition and not the original one.  The label files
          only  contain  a  reference  to  the   definitions  and   not  the
          definitions themselves.   You  should decide  what definitions you
          want and not change them.



          Star NX10

          1 -  [N L Q          ]-[27/@/27/x/1               ]
               This is standard Near Letter Quality.


                                         54





          2 -  [N L Q   U L    ]-[27/@/27/x/1/27/-/1        ]
               This is Near Letter Quality With underline turned on.

          3 -  [Condensed      ]-[27/@/27/15                ]
               This is standard condensed pitch.

          4 -  [Condensed U L  ]-[27/@/27/15/27/-/1         ]
               This is condensed with underlining.

          5 -  [Bold Italic    ]-[27/@/27/!/24/27/4         ]
               This is the Italic font with double strike and Emphasized.

          6 -  [Wide           ]-[27/@/27/!/49              ]
               This is double width Elite with double strike.
           
          7 -  [Big and Bold   ]-[27/@/27/G/27/E/27/h/01    ]
               This is double size printing with emphasis and double strike.

          8 -  [Baby Print     ]-[27/@/27/S/0/27/3/18/27/M  ]
               This is Elite Superscript with line spacing set to 18/216"
               Line spacing is set to fit two lines of baby print in one
               line of normal text.

          9 -  [Normal Print   ]-[27/@                      ]
               This is the reset command.



          Note that all the typeface definitions start with the code "27/@".
          This code  is the  reset code  for the printer and is used to make
          sure that all previous  typefaces  are  cancelled.    Most printer
          options will stay on until they are turned off, so the easiest way
          to make sure the printer is set the way you want is to reset it to
          the default  mode first.   You  do not have to follow this example
          but it makes it easier to get exactly what you want.

          Resetting the printer may not work  with some  brands of printers,
          most notably Tandy printers, because they do not support the reset
          codes used above.  If this is the case with  your printer  you may
          define one  code to turn on a typeface and another code to turn it
          off again.  This would only  be  a  problem  when  designing fancy
          labels using many different typefaces.  Remember you don't have to
          use any typefaces if you don't want, in  which case  Simply Labels
          will not change the way your printer is set up.

          Some Epson  printers (FX-80/100)  don't seem to have a single code
          for near letter quality.  With these printers  you can  get NLQ by
          turning on double strike and bold.





                                         55





          Star SG-10/15

          Because  these  printers  are  so  popular  their  codes have been
          included in this manual.  If you own  this printer  just enter and
          save these codes.


          1 -  [N L Q          ]-[27/@/27/4                 ]
          2 -  [N L Q   U L    ]-[27/@/27/4/27/-/1          ]
          3 -  [Condensed      ]-[27/@/27/15                ]
          4 -  [Condensed U L  ]-[27/@/27/15/27/-/1         ]
          5 -  [Bold Italic    ]-[27/@/27/!/24/27/I/01      ]
          6 -  [Wide           ]-[27/@/27/W/01/27/G         ]
          7 -  [Big and Bold   ]-[Not supported in the SG-XX]
          8 -  [Baby Print     ]-[27/@/27/S/O/27/3/18/27/M  ]
          9 -  [Normal Print   ]-[27/@                      ]




          9.4 General Program Options

          Selecting Other  from the  Configure menu  will bring  up a window
          used to set some general options used in the program.   The window
          is shown below.



            --| Other Options |------------------------------------------
           |                                                             |
           |  Screen Printing Speed (1-9)  7        Sound (Y/n)  Yes     |
           |                                                             |
           |  Default Data Path                                          |
           |                                                             |
           |  Memory to Reserve for Other Programs (KBytes)  0           |
           |                                                             |
           |                           Qwik Keys                         |
           |                                                             |
           |  0 - [                   ]      5 - [                     ] |
           |  1 - [                   ]      6 - [                     ] |
           |  2 - [                   ]      7 - [                     ] |
           |  3 - [                   ]      8 - [                     ] |
           |  4 - [                   ]      9 - [                     ] |
            -------------------------------------------------------------



          The first  option in  this window  will control the speed at which
          labels are printed to the  screen.    The  higher  the  number the
          faster the  printing.  Without this option you would never be able
          to see your labels.  The next option allows you to get  rid of all
          sound.  This option might be best left on until you are familiar

                                         56





          with the program.

          The default data path is used to tell Simply Labels where you keep
          your label files.   Whenever the  Select File  window is displayed
          this is  the directory  that will be read, although you can easily
          move to any other  directory.   If this  option is  left blank the
          default drive  and path  will be  used.   Unless you  always use a
          directory other than the default, to  store your  files you should
          leave this option blank.

          The purpose  of the  next option  is to  control how Simply Labels
          uses memory.  Normally when a label file is loaded into memory the
          program will  reserve all available memory for that label file and
          it is not released until you have finished using your  file.  This
          option tells  the program  to leave some memory for other programs
          that you may want to run when you shell out to DOS.   Even  if you
          leave  this  set  to  0  the  program will always leave about 50K,
          enough for working space and to load the command processor.   This
          gives  you  enough  memory  to  perform  most  of  the  basic  DOS
          functions.  Changing this option when a file is loaded into memory
          will have no effect until you quit Using the current file and load
          another.

          The  rest  of  this  window  is  used  to  enter  your   Qwik  key
          definitions.  See section 8.3 for more information on Qwik keys.




          10.0 Potential Problems

          Simply Labels  was written  with the  computer novice  in mind and
          provides traps for most errors.   For the  most part  the problems
          you may  encounter won't  be errors  but rather unexpected results
          which occur mostly when printing labels to your printer.

          Areas  which  cause  the  most  problems  are  printing  labels or
          envelopes  that  use  more  than  one  typeface per label.  If you
          select typefaces that change the pitch  or characters  per inch of
          your printer  you will  not get  the desired results when printing
          multiple labels per line.  Remember the pitch is also  changed for
          the spacing between the labels which causes the different lines in
          your labels not to line up.   This  will also  apply when printing
          envelopes.  If your labels use graphic characters to draw boxes in
          your labels  you may  also run  into this  problem.   The best way
          around this  problem is  to stick  to typefaces which don't change
          the pitch of  the  printer  when  printing  envelopes  or multiple
          labels per  line.   You can  still use settings such as bold, near
          letter quality and italics.  Remember this is only a  problem when
          using more  than one typeface per label.  You can use any typeface
          with no problems if  that typeface  is used  for the  whole label.
          Underlining  can  also  cause  some problems because some printers

                                         57





          will underline the whole line including all the spaces between the
          labels.

          Another  area  which  may  cause  unexpected results is when using
          typefaces that change the line spacing of your printer.   This may
          cause your  labels to  drift and  not to  line up on your printer.
          This problem  can be  avoided by  careful design  of your formats.
          When designing  label formats  check them  from the Format menu by
          using the Print option to print out sample labels.   When entering
          printer definitions that change the line spacing it is a good idea
          to use multiples of the normal line spacing.  For  example if your
          normal line  spacing is  1/6" and you wanted small print you could
          set your  printer to  superscript with  1/12" spacing.   This will
          allow two lines of small print to fit in one line of normal print.
          With this set up  you could  have 10  lines instead  of five  in a
          standard  mailing  label.    Remember  when  designing  your label
          formats that the size of your label only determines the  number of
          characters that  will fit in your label and not the actual printed
          size.  This will depend on the number  of characters  per inch and
          the line  spacing set  on your  printer and  you have full control
          over this.

          If you have problems setting up  your printer  you can  use Simply
          Labels to print labels without using any typeface selections.  You
          can set up your  printer any  way you  want before  running Simply
          Labels and  as long  as you  don't use any typeface settings, your
          printer setup will not change.


























                                         58






          APPENDIX A     Error Messages


          Program Errors:

          There are no labels in this file
                    Some operations in  Simply  Labels  cannot be
                    performed until you add at least one label to
                    your file.

          Label file is full
                    This error may occur when adding or importing
                    labels and  means there  is not enough memory
                    for any more labels.  You can remove  any TSR
                    programs,  change  the memory option (Section
                    9.4) or split your file into smaller ones.

          No labels selected for printing
                    You selected Go  to  print  labels  with none
                    flagged for  printing.  The left block in the
                    information area shows  how  many  labels are
                    currently flagged. See section 6.3.1

          No Match found
                    The search  found no labels that matched your
                    search definition.

          No more formats allowed
                    Simply Labels allows a maximum of 25 formats.
                    You may delete any you no longer need.

          This operation not allowed with link files
                    When using link files you cannot use the Add,
                    Delete, or Sort functions.

          Not enough memory for label file
                    Occurs when trying to load a file that is too
                    large.   Remove TSR  programs or check memory
                    option.

          Error in file format, cannot load file
                    You tried to load a file that was not created
                    by Simply  Labels III.  To convert files from
                    other versions see appendix B.

          No files found
                    This will occur in the Select  File window if
                    no files  or directories are found.  You will
                    have to edit the path or press Esc.



                                         59






          Invalid registration number
                    Occurs while  trying to  register the program
                    and the  registration name  and number do not
                    match.  Try again, making sure both are typed
                    exactly as received from SimpleWare.




          DOS Errors

          Please check your printer / Out of paper
                    A problem  exists with your printer.  Fix the
                    problem and press RETURN.    Esc  will cancel
                    printing.

          Drive not ready
                    You  tried  to  access  a  drive that was not
                    ready.  Make sure a disk is in  the drive and
                    the door is closed.

          Write protect violation
                    Program tried  to save  a file on a protected
                    disk.  Remove write protect from disk.

          Path not found / File not found
                    This error occurs mostly with link files when
                    the database  program cannot be opened.  Edit
                    the path/name of the database file.

          Disk is full
                    Not enough room on a disk for the file.  Save
                    file on a new disk.

          Bad Filename
                    You entered an invalid file name or path when
                    creating a new file.  See your DOS manual.

          Access denied / Sharing conflict
                    These  errors  occur  with  link  files  on a
                    network when  another program  has control of
                    the database file.

          Input past end
                    The  end  of  file  has  been   reached  when
                    importing labels.






                                         60






          APPENDIX B     Converting Files From Other Versions


          If you  used an  older version  of Simply Labels you will have to
          convert your files before you can use them  with version  III.  A
          file conversion  program (SL2TO3.EXE)  is included to do this for
          you.

          To convert your files just run  this utility  and enter  the path
          for the version 2.xx files.  Just press RETURN if they are in the
          default directory.  You also have to enter  the path  for the new
          version  III  files.    If  you  want  them stored in the default
          directory just press RETURN.  If you enter the same path for both
          the program  will ask you if you want to backup your version 2.xx
          files.  It does this by renaming them files with  an extension of
          .BAK before creating the new version of the file.

          The program  will read all label files it can find and prompt you
          before converting each file.   You  can  answer  with Yes/No/All.
          Selecting  All  will  convert  all valid version 2.xx label files
          without asking.

          Your files will now be ready for use with Simply Labels          
          version III.




























                                         61






          APPENDIX C            Simply Floppies


          Simply Floppies is a utility to help print labels for your floppy
          disks.  This program will load a Simply Labels label file and add
          one label  to the  file for each floppy disk that is read.  After
          the disks have been read into the label  file you  may use Simply
          Labels to  print the  file like  you would  any other label file.
          Simply Floppies is capable  of  using  any  label  file  that was
          created with  Simply Labels  III but  it cannot create new files.
          The program is used only to add labels to an existing file.

          This program  is very  flexible because  it allows  you to design
          your own  formats and  place information from your disks anywhere
          you want in your labels.   Several sample  files are  included on
          your program  disk for  you to  try.   If one  of these meet your
          needs, then by all means use it so you won't have to  worry about
          designing a  format.   If you keep any collection of floppy disks
          at all  you will  find that  by using  this utility  you can very
          easily print professional labels for your whole library.

          When you  run Simply  Floppies you  will be  shown a  list of the
          label files in the current directory and asked to enter  the name
          of the  file you  wish to  use.   You may  enter one of the files
          displayed or any file from another drive or directory by entering
          the full  path for the file.  Entering no name will return you to
          DOS.  After the  name is  entered the  label file  is loaded into
          memory and  the background  text for the file is displayed on the
          screen.  If any errors occur while loading the file  a message is
          displayed and you will be asked for another name.  After the file
          has been loaded you are asked to confirm that this is the correct
          file.  If you answer with "N" you will be asked for a new name.

          Once you have confirmed that the file is the correct one you will
          be asked to enter the letter  of  the  drive  you  wish  to read.
          Enter the  letter of a valid diskette drive.  Hard drives are not
          allowed.  You may now insert the disk you wish  to read  into the
          drive and  press any  key to  continue.  Simply Floppies will now
          analyze the disk and read the directory.   Note that  the program
          will only read the root directory of the disk.  Next it will make
          a label from this information and display it on the  screen.  You
          will be  asked if you want to add this label to your file.  After
          you answer this you  will be  asked if  you wish  to read another
          disk.   You may  read as  many disks  as you want until the label
          file is full.  When you have finished reading all your disks just
          answer with a "N".

          You will now be asked if you wish to save your file.  Answer with
          "Y" if you want to keep the labels you added.  If your label file
          was in  the drive you used to read diskettes you will be asked to
          insert the disk containing your label file.  If any  errors occur

                                         62





          during saving,  a message  is displayed and you will be given the
          chance to try again.  The most likely error will  be a  full disk
          so  you  can  change  disks  and  try  again.   After the file is
          successfully saved you will be returned to DOS.




          How a Label is Made

          This program looks at the information contained in the background
          text  for  instructions  on  how  to  make  your label.  There is
          certain text that, when entered as  background text  in the label
          format,  Simply  Floppies  will  understand  and replace with the
          desired information.  These are called functions in this program.
          Functions for  Simply Floppies are the "@" symbol followed by the
          name of the function.  Some functions do not add any text  to the
          label but  control options that are used when making your labels.
          Any background text that is not understood as a function  will be
          considered normal  background text  and will be left untouched as
          the label is built.  This allows fancy boxes or  company names or
          any other  common text  to be part of your labels.  All functions
          valid in Simply Floppies are listed below.

          The program makes the assumption that you want to add  file names
          to your labels and has several rules it uses for placing the file
          names into  your labels.   First  of all  a file  name will never
          overwrite background  text or  text placed  into the label by any
          functions.  After  a  directory  has  been  read  Simply Floppies
          starts at  the beginning line (See @Start) in the label and looks
          for a blank space big enough for a file name.  For  a normal file
          or directory name a blank of 13 spaces is needed (See @Full).  If
          it can find a place in the line it will insert the  name and move
          to the  right of the name and look again.  After the line is full
          it will move to the next line and continue adding names until the
          last line  is full  (See @End).  A space will be added after each
          name to keep them from running together.  The list  of file names
          is added  to the  label from the top to bottom but you have a lot
          of control over how the list will look. (See @Dir,  @Sort, @Full,
          and @Ext).  Note that directory names are shown in upper case and
          file names are shown in lower case.

          It is important to know how the program adds names to your labels
          because  the  width  of  your  label format will control how many
          columns of file names  there will  be.   It is  also important to
          note that  the sample  files on  your program disk use a typeface
          called Condensed  Baby.   If these  labels were  printed with any
          normal size typeface, the label would never fit on your disks.





                                         63





          List of Functions


               @Volume -  This function  will place the volume name for the
                         disk into your label.  When the program  sees this
                         function it  will display  the current volume name
                         for the diskette and ask you if you want to change
                         it.   Type the new volume name or just press enter
                         for no change.  Simply Floppies will write the new
                         name  to  disk  and  place the volume name in your
                         label, replacing the name of the function.  


                @Input - This function will pause the program  to allow
                         you to  enter any text you want.  This may be used
                         to enter a title or any instructions on how to run
                         a  program  on  the  floppy.  When Simply Floppies
                         finds this function it  will  display  the message
                         "User input  requested on line xx at position xx".
                         The length of the text you enter is  controlled by
                         the background text on that line or the end of the
                         label.  You can type  as  many  characters  as you
                         want but  the program  will only use as many as it
                         can  fit  into  the  label.    Remember  you can't
                         overwrite  background  text.    You  may  use this
                         function as often as you want and at  any location
                         in your label.  When your file is loaded back into
                         Simply Labels for printing you may edit the labels
                         like you  would edit  any other file.  This option
                         just  allows  you  to  enter  text  while  you are
                         handling  your  disks  so  you don't have to worry
                         about which label is for which disk.


                 @Free - This function will insert the number of free bytes
                         remaining on the disk.


                 @Date - This function will place the system date into your
                         label. 


               @Format - This function will show the format of the
                         diskette.  Only standard DOS formats are supported
                         and  one  of  the  following will be inserted into
                         your label  depending  on  the  way  the  disk was
                         formatted.

                         160K , 180k , 320k , 360k , 720k , 1.2M , 1.44M




                                         64






                @Count -  This will insert the number of files on the disk.
                         If you  choose  to  include  directory  names (See
                         @Dir) they will be added to this number.



                  @Dir  -  This  function  does not place any text directly
                         into your labels but  it tells  Simply Floppies to
                         include  any  directory  names  it  finds  in your
                         label.


                 @Sort - This tells the program to sort all file and
                         directory names before  inserting  them  into your
                         label.


                 @Full - Normally Simply Floppies will only insert the file
                         names (and directory names)  into your  labels but
                         if  you  place  this  function into your label you
                         tell the program to also include the file size and
                         date.   If this option is used a blank space of at
                         least 30 characters is needed for a file name.


                  @Ext - This function stands for extension.  There will be
                         times when  there are  too many files on a disk to
                         fit into your label.   This  function will  try to
                         filter out  the unimportant files and include only
                         those that are meaningful.  It  does this  by only
                         including  files  with  the  following extensions:
                         BAT, EXE, COM, ARC, ZIP.   This function  does not
                         need to  be included in your background text to be
                         used but you may do so  if  you  wish.    When the
                         program reads  a directory,  if there are too many
                         files to fit into your label it will  tell you and
                         offer you  the option  of turning on this function
                         for the current label.  If  you select  to turn on
                         the function the directory is read again and a new
                         label is made using this function.  Even with this
                         option it  is still  possible that  all files will
                         not fit into your  label.   Any files  that do not
                         fit are  just ignored  but they are still included
                         in the @Count function.


          @Start/@End -  These functions are used to control where the file
                         and directory names are placed in your label.  The
                         @Start function is placed  in the  first line that
                         you want to contain names and the @End function is
                         used to tell the program where to stop adding file

                                         65





                         names.    If  these  functions  are  not  used the
                         program will assume the defaults of  the first and
                         last lines in the label.


          Look at  the sample  files included on your program disk to get a
          better idea of how  all this  fits together  to print  labels for
          your floppies.   All  sample files for Simply Floppies start with
          FLOP.












































                                         66






          APPENDIX D    Command Summary for Simply Labels Ver III


           
          Moving Around the Label File (When labels are displayed) 

                   <PgUp> - Moves one label towards beginning of file 
                   <PgDn> - Moves one Label towards end of file 
             <Ctrl><PgUp> - Moves to Previous flagged label 
             <Ctrl><PgDn> - Moves to Next flagged label 
                   <Home> - Moves to first label in file 
                    <End> - Moves to last label in file 
                 <Alt><M> - Moves to any label 


           
          Editing Label Text 

                     <Up> - Moves up one line 
                   <Down> - Moves down one line 
                   <Left> - Moves left one character 
                  <Right> - Moves right one character 
             <Ctrl><Left> - Moves left one word or field 
            <Ctrl><Right> - Moves right one word or field 
                   <Home> - Moves to beginning of line 
                    <End> - Moves to end of line 
             <Ctrl><Home> - Moves to beginning of label 
              <Ctrl><End> - Moves to end of label 
              <Backspace> - Deletes character to left of the cursor 
                    <Del> - Deletes character under cursor 
                    <Ins> - Toggles between insert and typeover modes 
                 <Alt><C> - Centers a line or field 
                 <Atl><E> - Erases to the end of the line or field 
              +  <Alt><T> - Places current date at cursor position 
              +  <Alt><D> - Places current time at cursor position 
              *  <Alt><I> - Inserts a blank line 
              *  <Alt><R> - Removes a line of text
                 <Alt><H> - Help / lists these keys 
                     <F1> - Toggles graphic mode on or off
                 <Escape> - Ends editing label text 




              * - These functions only work in labels that do not contain
                  any background text.

              + - If these are used when editing background text they will
                  insert the proper stamp, to be filled in during printing.



                                         67






                Command Summary for Simply Labels Ver III (Cont)



          Editing Program Input 

                   <Home> - Moves to start of input field 
                    <End> - Moves to end of input text 
              <Backspace> - Deletes character to left of the cursor 
                    <Del> - Deletes character under cursor 
                    <Ins> - Toggles between insert and typeover modes 
                   <Left> - Moves left one character 
                  <Right> - Moves right one character 
             <Ctrl><Left> - Moves left one word 
            <Ctrl><Right> - Moves right one word 
                 <Atl><C> - Clears all input text 
                 <Alt><E> - Clears input text from cursor to end of field 
                 <Alt><R> - Restores original input text 
                 <Escape> - Cancels operation or quits editing 
                 <Up> or <Down> - will move to another field



          Other Keys 

                 <Alt><Q> - Displays a list of Qwik key definitions
               <Alt><0-9> - Enters Qwik key definition assigned by user 
                 <Alt><D> - Shell to DOS / Type EXIT to return
                 <Alt><H> - Summary of Command keys























                                         68






          APPENDIX E    Menu Tree for Simply Labels Ver III

  Main Menu
  |                                             .. Input required
  |--New..------.                              -># Goto menu number
  |  (File)     |- Label..----------.->1        <  Return to previous menu 
  |             |- dBase III Link --|           *  Only with link files 
  |             |- PC-File Link..---' 
  |             `- Quit <
  |
  |
  |          <1> (Use Menu)                                 <2> (Search Menu)
  |- Use..----|- Browse --.                                  |
  |           |           |- Flag --------------------.      |- Complete
  |           |           |- Toggle                   |      |- Equal
  |           |           |- Search..->2-.            |      |- Less
  |           |           |              |- Continue  |      |- Greater 
  |           |           |- Move..      |- Toggle    |      |- Not Eq 
  |           |           |              |- Edit..    |      |- Range 
  |           |           |              |- Delete    |      `- Quit <
  |           |           |- Edit..->3*  `- Quit <    |
  |           |           |                           |
  |           |           |- Delete -----.- Displayed |
  |           |           `- Quit <      |- Flagged   |
  |           |                          |- Clear All |
  |           |                          `- Quit <    |
  |           |- Print ---.                           |
  |           |           |- Flag ------------------->|
  |           |           |- Toggle                   |
  |           |           |- Go  --------.            |- All --------.
  |           |           |              |- Printer   |- Range..-----|
  |           |           |- Sample      |- Disk..    |- Search..->2-|
  |           |           |              |- Screen    `- Quit <      |
  |           |           |- Edit..->3*  |- Label File..             |- Set
  |           |           |              `- Quit <                   |- Clear
  |           |           |- Options ----.                           |- Toggle
  |           |           `- Quit <      |- Labels..                 `- Quit <
  |           |                          |- Envelopes..
  |           |- Add -----.              |- Report..
  |           |           |- Blank..     |- Other..
  |           |           |- Copy..      |- Typeface..
  |           |           |- Import --.  `- Quit <
  |           |           `- Quit <   `--.
  |           |                          |- Label..            *
  |- Delete.. |                          |- Column..        <3> (Edit Link)
  |  (File)   |- Sort..                  |- Fixed Length..   |
  |           |                          `- Quit <           |- Add
  |           |                                              |- Delete
  |           |- Configure -> 4                              |- Move
  |           |                                              |- Position
  V           `- Quit..<                                     `- Quit

                                         69






                 Simply Labels Ver III Menu Tree (Cont)


  |
  |
  |
  |                      <4> (Configure Menu)
  |- Configure ---------------|
  |                           |- Screen  ----.
  |                           |- KeyBoard..  |- Custom..
  |                           |- Printer..   |- Mono
  |- Formats ---.             |- Other..     |- Default
  |             |- New..      `- Quit.. <    `- Quit <
  |             |- Edit ..---.
  |             |            |- Size..
  |             |            |- Descr..
  `- Quit..     |- Delete..  |- Back..
     (DOS)      |            |- Print
                `- Quit <    |- Typeface..
                             |- Configure ->4
                             `- Quit <
   



                         Keys Active at Menus
                    ------------------------------

                    F9/Alt S - Save File
                       Alt D - Shell to DOS
                       Alt H - Help Screen

                       Alt P - Page Eject (Form Feed)    Print Menu
                       Alt L - Line Feed                 Only


















                                         70






          APPENDIX F    Registration Form.     Send completed form To:

           SimpleWare / P.O. Box 877 / Windsor, NF / Canada  A0H 2H0


           Qty.         Description                             Amount

          ____   Single user Registration (Ver III)  $25.00   ____________

          ____   Printed Manual and Disk             $10.00   ____________
                 (Can only be ordered with
                  Registration above)
                                                     Total:   ____________

          Payment: [  ] Check     [  ] Visa

          Orders outside Canada and the USA Please Add $5.00 

          ----------------------------------------------------------------
          Text to place in Registered Program  (Maximum 30 Chars/line)

              Line#1:  [_________________________________]     Please
                                                               Print
              Line#2:  [_________________________________]



          Name:    __________________________________________________

          Address: __________________________________________________

          City:    ______________________  State:____  Zip:__________

          Phone:   (____) ____________

          Visa #:  ___________________________  Expiry Date:_________

          Signature of Cardholder:___________________________________


          Type of Computer:  ________________________________________

          Type of Printer:   ________________________________________

          Where did you
          Obtain your Copy:  ________________________________________

          Comments:  ________________________________________________




                                         71

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1679

     Volume in drive A has no label
     Directory of A:\

    CHANGES  TXT      5758  10-29-89  12:00p
    READ     ME       4217  10-29-89  12:00p
    PRINT    BAT       378  10-29-89  12:00p
    SL       DOC    190823  10-29-89  12:00p
    CODES    DOC      2176  10-29-89  12:00p
    PC-SIG            4086  11-21-89  12:23a
    GO       BAT       334  11-21-89  12:17a
    FILE1679 TXT      2517  12-08-89   4:55p
            8 file(s)     210289 bytes
                          107520 bytes free
