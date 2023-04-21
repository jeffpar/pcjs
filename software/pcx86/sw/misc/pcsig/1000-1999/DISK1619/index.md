---
layout: page
title: "PC-SIG Diskette Library (Disk #1619)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1619/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1619"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANALYZE AND X-BATCH"

    X-BATCH is a bunch of utilities that can serve as commands in batch
    files for the busy, no frills programmer.
    
    While some of the X-BATCH commands can be started at the DOS prompt,
    they are most useful as part of batch commands.  BOX displays boxes with
    optional borders.  CHECKENVIR tests environmental variables.  CHKSCREN
    searches for text, while CLRSCRN clears screens with selected colors.
    
    COMPFILE compares data, time and file size.  CREATE creates files and
    CURSOR positions the cursor.  DISPFILE displays file text in a box,
    while DISPLAY shows it on the screen.  GETCHAR awaits specific keys and
    report.  SHOW  displays date, time or day of week.  SOUND beeps a tone
    for N seconds, while WAIT waits for time of day, key or N seconds.
    
    ANALYZE verifies or determines the exact contents or format of files.
    
    ANALYZE displays file character data and their ASCII values. It
    displays byte values of binary data (dump). It analyzes files to
    determine record length, type and internal (field) format. Fully
    configurable, ANALYZE lets you select the number base and numbering
    system. It supports several record types and scrolls up and down
    through data records and horizontally within records. It allows quick
    access to specific records by record number.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ANALYZE.DOC

{% raw %}
```






                                          
                                          
                                          
                                          
                                          
                                          
                                      ANALYZE
                                          
                                    Version 1.1
                                          
                                          
            Copyright (c) 1989 by Gary R. Pannone   All rights reserved.
                                          
                 You may freely distribute this version of ANALYZE.
                                          
                                          
                                          
                                          
            If you  find this program useful, please send a contribution
            ($20 suggested) to the address below.  For a contribution of
            $25 you will receive an enhanced version of this program and
            notification of planned future versions.
            
                                  Gary R. Pannone
                                  35 Park View Rd.
                                  Hamden, CT 06514
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
            If you  have problems  with this program, please send a note
            to the address above.





























                                 TABLE OF CONTENTS
                                 -----------------
            
            
            1.  Introduction.................................... 1
            
            2.  Starting ANALYZE................................ 1
            
            3.  The Configuration Screen........................ 2
            3.1 The Configuration File.......................... 2
            3.2 The Configuration Screen Keys................... 2
            3.3 The Configuration Data Items.................... 3
            3.4 The Configuration Function Keys................. 5
            
            4.  Displaying Data................................. 6
            4.1 The Data Screen................................. 6
            4.2 The Data Screen Keys............................ 7
            4.3 Displaying a File "Dump"........................ 7
            
            5.  Record Types.................................... 8
            5.1 Text Records.................................... 8
            5.2 Fixed Length Records............................ 8
            5.3 Variable Length Records with a Byte Header...... 9
            5.4 Variable Length Records with a Word Header...... 9







































                                                       Page 1                        


            1.  Introduction
            ----------------
            
            ANALYZE is a powerful tool for programmers, or anyone that
            needs to verify or determine the exact contents, or format,
            of a file.  ANALYZE is an interactive program that displays
            the data contained in files.
            
            ANALYZE can be used to:
            
                 1. Display the character data contained in a file.
                 2. Display the ASCII values of character data.
                 3. Display the byte values of binary data (dump).
                 4. Analyze a file to determine its record length,
                    record type, or internal (field) format.
            
            ANALYZE's special features include:
            
                 1. Fully configurable - you select the number
                    base, numbering system (starts at 0 or 1),
                    display format, display options, etc.
                 2. Supports several record types (see chap. 5).
                 3. Scrolls up and down through data records,
                    scrolls horizontally within records.
                 4. Allows quick access to specific records by
                    record number.
            
            
            
            
            2.  Starting ANALYZE
            --------------------
            
            To start ANALYZE, type -
            
                 ANALYZE <ENTER>
            
            You can specify the name of the data file that you would
            like to display at startup time by typing -
            
                 ANALYZE filename <ENTER>






















                                                       Page 2                        


            
            
            
            
            3.  The Configuration Screen
            ----------------------------
            
            The Configuration Screen lets you:
            
                 . Specify the name of the data file.
                 . Select the data file's record type.
                 . Select the first record to be displayed.
                 . Select how the data should be displayed.
                 . Select whether numbering starts at 0 or 1.
                 . Select the number base.
                 . Select the screen colors.
            
            The Configuration  Screen is  displayed whenever  you  start
            ANALYZE or  press the  ESC key  while  the  Data  Screen  is
            displayed.   There are  two  types  of  data  items  on  the
            Configuration Screen.   Data  entry items,  such as the File
            Name item, require you to type in data.  Menu items, such as
            the Include  Header item,  require  you  to  choose  one  of
            several choices.
            
            
            3.1 The Configuration File
            --------------------------
            
            ANALYZE lets  you save  the configuration  items in  a  file
            called ANALYZE.CNF.   When  you start  ANALYZE, the  program
            reads the configuration file from the current directory.  If
            the file does not exist in the current directory and you are
            running DOS  version 3.0  (or higher),  the program looks in
            the directory  from which  the program  was read.    If  the
            configuration file  is  not  found  there,  ANALYZE  uses  a
            default configuration.
            
            See section  3.3 for details on saving the program configur-
            ation.
            
            
            3.2 The Configuration Screen Keys
            ---------------------------------
            
            You select  the  data  item  that  you  want  to  change  by
            highlighting the  item name.   Use  the ENTER  or DOWN ARROW
            keys to  highlight the  next Configuration Screen data item.
            Use the UP ARROW to highlight the previous data item.
            
                 Note:   Some data  items may be disabled.  You can
                 not change the value of a disabled data item.  For
                 example, if  you select  the  record  type  called










                                                       Page 3                        


                 Text, the  Record Length item is disabled, and the
                 highlight can  not be  moved to  the Record Length
                 item.
            
            When you highlight a data entry item, you can edit the value
            using the standard editing keys:
            
                 Key            Description
                 -----------    ----------------
                 RIGHT ARROW    Move the cursor to the right
                 LEFT ARROW     Move the cursor to the left
                 BACKSPACE      Delete the previous character
                 DEL            Delete the current character
                 INS            Toggle insert mode on/off
                 HOME           Move the cursor to the beginning
                 END            Move the cursor to end
                 CTRL END       Delete to end of field
            
            When you  highlight a  menu item,  you can select a value by
            pressing the SPACE BAR, LEFT ARROW key, or RIGHT ARROW key.
            
            
            3.3 The Configuration Data Items
            --------------------------------
            
            The following items are configurable:
            
            FILE NAME - Enter the name of the data file to be displayed.
            You can  enter a  full file  specification including a drive
            letter and a directory specifier.
            
            RECORD TYPE  -  Choose  the  appropriate  Record  Type  (see
            chapter 5 for a description of the record types):
            
                 Type           Description
                 ----------     -------------------------
                 TEXT           Records terminated by CR and LF
                 FIXEDLENGTH    Fixed length records
                 BYTEHEADER     Variable length with byte header
                 WORDHEADER     Variable length with word header
            
            START AT RECORD - Enter the number of the first record to be
            displayed.   This number can not be less than the configured
            1ST RECORD NUMBER or greater than 65535.
            
                 Note:   This value MUST be entered in the selected
                 NUMBER BASE.
            
            DISPLAY TERM  - Choose  NO  to  display  only  actual  data.
            Choose YES  to also display record terminators (the carriage
            return and  line feed  at the  end of  text records, and the
            byte or  word header at the beginning of byte header or word
            header variable length records).
            









                                                       Page 4                        


            RECORD LENGTH  - Enter the length of the data records in the
            fixed length  data file.   This  item is  ignored for  other
            types of  records.   The minimum  value is 1 and the maximum
            value is 32767.
            
                 Note:   This value MUST be entered in the selected
                 NUMBER BASE.
            
            INCLUDE HEADER  - Choose  NO if the value of the byte header
            or word  header does  NOT include  the length  of the header
            itself.   Choose YES if the value does include the length of
            the header.   See  chapter 5  for details.    This  item  is
            ignored for text and fixed length records.
            
            DISPLAY FORMAT  -  Choose  CHARACTER  to  display  only  the
            characters that  correspond to  each byte  of data.   Choose
            DUMP to  display the  byte values  above each  character  of
            data.
            
            1ST DISPLAY  POS -  Enter the  number of the first character
            position of  each record to be displayed.  The minimum value
            is the  configured 1ST  CHARACTER POSITION  and the  maximum
            value is 32767.
            
                 Note:   This value MUST be entered in the selected
                 NUMBER BASE.
            
            1ST CHARACTER  POSITION -  Choose ZERO if you want to number
            the  character   positions  of  each  record  starting  with
            position 0  (zero).   Choose ONE  if you  want to number the
            character positions  of each record starting with position 1
            (one).
            
            1ST RECORD  NUMBER -  Choose ZERO  if you want to number the
            records in  the file  starting with record 0 (zero).  Choose
            ONE if you want to number the records starting with record 1
            (one).
            
            NUMBER BASE  - Choose OCTAL to display all numbers in octal.
            Choose DECIMAL  to display  all numbers  in decimal.  Choose
            HEX to display all numbers in hexidecimal.
            
                 Note:   If you  change the NUMBER BASE, be sure to
                 convert the  START AT  RECORD, RECORD  LENGTH, and
                 1ST DISPLAY POS values to the new number base.
            
            DISPLAY  OPT   -  Choose   NONE  to   display  no   optional
            information.   Choose NUM/LEN  to display  the record number
            and record  length of each record.  Choose OFFSET to display
            the byte  offset to  the beginning of the record, as well as
            the number and record length of each record.
            











                                                       Page 5                        


            DATA - Choose the color in which you want the character data
            to be highlighted.
            
            TEXT - Choose the color in which you want the screen text to
            be displayed.
            
            HIGHLIGHT  -   Choose  the  color  in  which  you  want  the
            highlighted text to be displayed.
            
            BACKGROUND -  Choose the  color in which you want the screen
            background to be displayed.
            
                 Note:  The background color can not be the same as
                 one of the other colors that you have chosen.
            
            
            3.4 The Configuration Function Keys
            -----------------------------------
            
            The following  function keys are active in the Configuration
            Screen:
            
            F1 (DISPLAY  DATA)  -  Displays  the  specified  data  file,
            starting at the specified record, in the specified format.
            
            F2 (SAVE  CONFIG) - Displays the message "Save Configuration
            ? (Y/N)".   If  you press  Y, the  current configuration  is
            written to  the CURRENT  directory.   If you  press  N,  the
            configuration is not saved.
            
                 Note:  You can save the configuration with no file
                 name.   This allows  you to save a generic config-
                 uration, which  can  be  used  with  several  data
                 files.
            
            F3  (RESTORE   CONFIG)  -   Displays  the  message  "Restore
            Configuration ?  (Y/N)".   If you press Y, the configuration
            information  is   read  from   the  configuration  file  and
            displayed.   If  you  press  N,  the  configuration  is  not
            changed.
            
            F4 (SET  START) -  Sets the  starting record  number to  the
            number of  the first  data record  that was displayed on the
            last Data Screen.
            
            ESC (EXIT) - Stops the ANALYZE program.

















                                                       Page 6                        


            
            
            
            
            4.  Displaying Data
            -------------------
            
            When  you   press  the   F1  key  (Display  Data)  when  the
            Configuration Screen  is displayed,  ANALYZE looks  for  the
            specified data  file.   If the  file is  found, the  program
            displays the specified starting record.
            
                 Note:   If the record type is not FIXEDLENGTH, the
                 program displays  the message  "Reading ..." while
                 it searches for the starting record.
            
            
            4.1 The Data Screen
            ---------------------------
            
            The top of the Data Screen displays the:
            
                 1. Data file name
                 2. Number base
                 3. Record type
                 4. The first record number
                 5. The first character position
                 6. Whether headers are included in record lengths
            
            The main window displays:
            
                 1. The byte offset (if configured)
                 2. The record number (if configured)
                 3. The  record   length  (if   configured).     If
                    configured  not  to  display  terminators,  the
                    record length  will be  the length  of only the
                    actual data,  and a  plus sign  (+) will follow
                    the record length.
                 4. One or more data records
            
            A ruler  is displayed just above the main window.  The ruler
            is numbered in the number base that was configured.  The 1st
            display position is displayed just above the left end of the
            ruler.   For example,  if you specified that the 1st display
            position is 15, the first digit on the ruler will be a 5 and
            the number 15 is displayed just above the 5.

















                                                       Page 7                        


            
            
            4.2 The Data Screen Keys
            ------------------------
            
            The following keys are active in the Data Screen:
            
            CTRL LEFT  ARROW -  Scroll the  data one window-width to the
            right, if possible.
            
            CTRL RIGHT  ARROW -  Scroll the data one window-width to the
            left.
            
            DOWN ARROW - Displays the next data record, if any.
            
            HOME - Displays the beginning of the data record.
            
            LEFT ARROW  - Scroll the data one character to the right, if
            possible.
            
            PGDN - Displays the next screen of data records, if any.
            
            PGUP - Displays the previous screen of data records, if any.
            
            RIGHT ARROW - Scroll the data one character to the left.
            
            UP ARROW - Displays the previous data record, if any.
            
            ESC (EXIT) Redisplays the Configuration Screen.
            
            
            4.3 Displaying a File "Dump"
            ----------------------------
            
            It is  often useful to display a data file in "dump" format,
            that is,  display  every  byte  of  the  file  in  both  its
            character, and byte value, forms. To do this using ANALYZE:
            
            1. Choose  FIXEDLENGTH Record  Type (even is it doesn't have
            fixed length records)
            2. Choose DUMP Display Format
            3. Specify  a Record  Length less  than or equal to the data
            window width (for example, 50).
            
            This method  provides a  way of displaying the data in fixed
            length chunks, the way a typical dump program displays it.

















                                                       Page 8                        


            
            
            
            
            5.  Record Types
            ----------------
            
            This  chapter   describes  the  record  types  supported  by
            ANALYZE.
            
            In the  examples in  the following sections, square brackets
            enclose  individual  bytes.    Numbers  enclosed  in  square
            brackets are decimal.  For example:
            
                 BYTE SPEC      DECIMAL VALUE
                 ---------      -------------
                 [19]           19
                 [CR]           13 (ASCII carriage return)
                 [LF]           10 (ASCII line feed)
            
            
            5.1 Text Records
            ----------------
            
            Text records are fixed or variable length records terminated
            by carriage return and line feed characters.  For example:
            
                 Record 1 text[CR][LF]
                 Record 2 text[CR][LF]
                 Record 3 text here[CR][LF]
            
            
            5.2 Fixed Length Records
            ------------------------
            
            Fixed length  records are  assumed to  have  no  terminating
            characters  or   header  characters;   all  data  bytes  are
            displayed and assumed to be data.  For example:
            
                 Record 1 data
                 Record 2 data
                 Record 3 data
            
            It is  often useful to display a data file as a fixed length
            record file,  even is  it doesn't have fixed length records.
            This method  provides a  way of displaying the data in fixed
            length chunks,  the way  a typical dump program displays it.
            This also  provides a  way of displaying entire data records
            that are longer than the data screen window width.














                                                       Page 9                        


            
            
            5.3 Variable Length Records with a Byte Header
            ----------------------------------------------
            
            Byte Header  records have  a one  byte prefix that specifies
            the actual length of the record.
            
            Here is data in a  file with record lengths that include the
            header byte:
            
                 [14]Record 1 data
                 [14]Record 2 data
                 [19]Record 3 data here
            
            Note that the record length of the first record, 14, equals
            the length of the actual data (Record 1 data) plus the
            length of the header itself (which is 1 byte).
            
            Here is the same data in a  file with record lengths that do
            not include the header byte:
            
                 [13]Record 1 data
                 [13]Record 2 data
                 [18]Record 3 data here
            
            
            5.4 Variable Length Records with a Word Header
            ----------------------------------------------
            
            Word Header  records have  a one  word prefix that specifies
            the actual length of the record.
            
            Here is data in a  file with record lengths that include the
            header bytes:
            
                 [15][0]Record 1 data
                 [15][0]Record 2 data
                 [20][0]Record 3 data here
            
            Note that the record length of the first record, 15, equals
            the length of the actual data (Record 1 data) plus the
            length of the header itself (which is 2 bytes).
            
            Here is the same data in a  file with record lengths that do
            not include the header bytes:
            
                 [13][0]Record 1 data
                 [13][0]Record 2 data
                 [18][0]Record 3 data here
            
            








```
{% endraw %}

## FILE1619.TXT

{% raw %}
```
Disk No: 1619                                                           
Disk Title: Analyze / X-Batch                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: X-Batch                                                  
Author Version: 1.1                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
X-BATCH is a bunch of utilities that can serve as commands in batch     
files for the busy, no frills programmer.                               
                                                                        
While some of the X-BATCH commands can be started at the DOS prompt,    
they are most useful as part of batch commands.  BOX displays boxes with
optional borders.  CHECKENVIR tests environmental variables.  CHKSCREN  
searched for text while CLRSCRN clears screens with selected colors.    
COMPFILE compares data, time and file size.  CREATE creates files and   
CURSOR positions the cursor.  DISPFILE displays file text in a box while
DISPLAY shows it on the screen.  GETCHAR awaits specific keys and       
report.  SHOW  displays date, time or day of week.  SOUND beeps a tone  
for N seconds while WAIT waits for time of day, key or N seconds.       
                                                                        
File Descriptions:                                                      
                                                                        
README        Describes X-BATCH files.                                  
XBATCH   DOC  X-BATCH documentation.                                    
???????? EXE  Command files.                                            
???????? BAT  Demonstration files.                                      
SCREENS  DAT  Demo screen text data.                                    
Program Title: Analyze                                                  
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
ANALYZE verifies or determines the exact contents or format of files.   
                                                                        
ANALYZE displays file character data and the their ASCII values.   It   
displays byte values of binary data (dump).  It analyzes files to       
determine record length, type and internal (field) format.  Fully       
configurable, ANALYZE lets you select the number base and numbering     
system.  It supports several record types and scrolls up and down       
through data records and horizontally within records.  It allows quick  
access to specific records by record number.                            
                                                                        
File Descriptions:                                                      
                                                                        
ANALYZE  EXE  Main program.                                             
ANALYZE  DOC  Documentation text.                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## XBATCH.DOC

{% raw %}
```






                                  
                                  
                                  
                                  
                                  
                  X-BATCH Extended Batch Commands
                                  
                            Version 1.1
                                  
                                  
               Copyright (c) 1989 by Gary R. Pannone
                        All rights reserved.
                                  
        You may freely distribute this version of X-BATCH if
       you include this documentation file and the demo batch
                               files.
                                  
                                  
                                  
                                  
       If you  find these  programs  useful,  please  send  a
       contribution ($20  suggested) to  the  address  below.
       For a contribution of $25 you will receive an enhanced
       version of  these programs and notification of planned
       future versions.
       
                          Gary R. Pannone
                          35 Park View Rd.
                          Hamden, CT 06514
                                  
                                  
                                  
                                  
                                  
                                  
       If you  have problems with these programs, please send
       a note to the address above.





























                       TABLE OF CONTENTS
                       -----------------
     
     
     1.  Introduction..................................1
     
     2.  Running the Demo..............................2
     
     3.  Using the Extended Batch Commands.............3
     3.1   Creating Batch Files........................3
     3.2   Specifying Command Parameters and Keywords..3
     3.2.1   Specifying Colors.........................4
     3.2.2   Specifying Line and Column Numbers........6
     3.2.3   Specifying Text...........................7
     3.3   Checking the ERRORLEVEL Exit Code...........7
     
     4.  Commands......................................9
           BOX.........................................10
           CHKENVIR....................................12
           CHKSCRN.....................................14
           CLRSCRN.....................................16
           COMPFILE....................................18
           CREATE......................................20
           CURSOR......................................21
           DISPFILE....................................22
           DISPLAY.....................................25
           GETCHAR.....................................27
           SHOW........................................29
           SOUND.......................................31
           WAIT........................................32




































       
       
       
       
       1.   Introduction
       -----------------

       X-BATCH is  a collection  of useful  utility programs.
       Some of  the programs  (CLRSRCN, CREATE,  SHOW, SOUND)
       can be  used by  starting them  at the DOS prompt. The
       programs are  especially useful, however, when used as
       commands in batch files.
       
       Command        Description
       ---------      ----------------------------------
       BOX            Display a box with optional border
       CHKENVIR       Test environment variable
       CHKSCRN        Search screen for text
       CLRSCRN        Clear screen with selected colors
       COMPFILE       Compare date, time, or size of files
       CREATE         Create a file
       CURSOR         Position cursor on screen
       DISPFILE       Display text from file in box
       DISPLAY        Display text on screen
       GETCHAR        Wait for specific keys, and report
       SHOW           Display date, time, or day of week
       SOUND          Sound a specific tone for N seconds
       WAIT           Wait for time of day, key, or N seconds

       If this manual is printed at 6 vertical lines per inch
       (the standard),  the pages  can be  cut to fit in your
       DOS manual.










                                 1























     
     
     
     
     2.   Running the Demo
     ---------------------

     An instructional  demonstration is  provided  on  this
     diskette. Although  the  demo  can  be  run  from  the
     diskette, it runs much faster from a hard disk.

     To run the demo:

     1. Copy  the  files  on  this  diskette  to  an  empty
     subdirectory on your hard disk.

     2. Start the demo:

          a. If you are using a monochrome monitor, type-

               DEMO  /M  <ENTER>

          b. If you are using a color monitor, type-

               DEMO  <ENTER>

















                               2























       
       
       
       
       3.   Using The Enhanced Batch Commands
       --------------------------------------
       
       
       3.1  Creating Batch Files
       -------------------------

       You can create batch files with almost any editor that
       produces standard text files. These include:
            
            . EDLIN
            . The IBM Personal Editor
            . The IBM Professional Editor
            . Many popular word processors
       

       If possible, save the batch file text without imbedded
       tab characters.
       
       
       3.2  Specifying Command Parameters
       ----------------------------------

       Command parameters can be values, or keywords (such as
       BRIGHT), or  keywords followed  by one or more values.
       For example:
       
            screens.dat
       
            CHOICES "abc"
       
            COLORS 7 3
       
            BRIGHT
            



                                 3























     This manual describes the format of each command using
     the same notation as your DOS manual:
     
          . Optional parameters are enclosed in []
          . Non-optional choices are enclosed in {}
          . Choices are separated with |

     For example:
     
          filename.ext
     
     Means that you must specify a filename.
     
          [BLINK]
     
     Means that the keyword "BLINK" is optional.
     
          [COLOR fg | COLORS fg bg]
     
     Means that you can, for example,  specify "COLOR 5",
     "COLORS 6 5", or neither.
     
          {BYDATE | BYTIME | BYSIZE}
     
     Means that you must specify "BYDATE", "BYTIME", or
     BYSIZE".

     Keywords  can  be  typed  in  uppercase  or  lowercase
     letters. Optional  parameters can  be entered  in  any
     order after required parameters.
     
     
     3.2.1  Specifying Colors
     ------------------------

     There are  several parameters  that  can  be  used  to
     specify colors.





                               4























       The COLORS parameter lets you specify a foreground and
       a background color. For example,
       
            COLORS 4 3

       specifies a  foreground color  of 4  and a  background
       color of 3.

       The COLOR  parameter lets  you specify  just a   fore-
       ground color. For example,
       
            COLOR 5

       specifies a foreground color of 5.

       If you  have a  Color/Graphics Adapter,  the available
       foreground colors are:
       
       0 Black        8  Gray
       1 Blue         9  Light Blue
       2 Green        10 Light Green
       3 Cyan         11 Light Cyan
       4 Red          12 Light Red
       5 Magenta      13 Light Magenta
       6 Brown        14 Yellow
       7 White        15 Bright White
















                                 5























     If you  have a  Monochrome Display Adapter, the avail-
     able foreground colors are:
     
     0         Black when  the background  color is 0 or 7,
               white otherwise.
     
     1         Underlined white.
     
     2-7       White.
     
     8         Black when  background is  0  or  7,  bright
               white otherwise.
     
     9         Underlined bright white.
     
     10-15     Bright white.
     

     If you specify a low intensity foreground color (0-7),
     you can  make  it  bright  by  specifying  the  BRIGHT
     parameter.

     You can  make the characters blink by adding 16 to the
     number  of   the  desired   foreground  color,  or  by
     specifying the BLINK parameter.

     Background colors  are always  low intensity, and must
     be in the range 0 to 7.
     
     
     3.2.2  Specifying Line and Column Numbers
     -----------------------------------------

     Line numbers  are numbered from 1 to 25. Line 1 is the
     top line  on the screen. Line 25 is the bottom line on
     the screen.






                               6























       Column numbers  are numbered from 1 to 80. Column 1 is
       the left-most  column on  the screen. Column 80 is the
       right-most column on the screen.
       
       
       3.2.3  Specifying Text
       -----------------------

       Some parameters are text strings:
       
            . Text to be displayed (DISPLAY command)
            . Text to be search for (CHKSCRN command)
            . Text to be compared (CHKENVIR command)
            . Environment variable names (CHKENVIR command)
            . Valid characters list (GETCHAR command)

       You  can   specify  text  with  or  without  enclosing
       quotation marks. For example:
       
            DISPLAY text AT 6 30
            
                 or
       
            DISPLAY "Some text" AT 6 30

       The quotation  marks are  required only  if  the  text
       contains blanks.   If  enclosing quotation  marks  are
       used, a  quotation mark can be imbedded in the text by
       inserting a  back-slash (\)  in front of the quotation
       mark. For example, "He said \"Hello.\"".
       
       
       3.3  Checking the ERRORLEVEL Exit Code
       --------------------------------------

       Every command  returns an exit code that can be tested
       using the IF ERRORLEVEL batch command.





                                 7























     The  IF  ERRORLEVEL  command  performs  the  specified
     action if  the exit  code is  GREATER OR  EQUAL TO the
     specified number. For example, the batch command:
     
          IF ERRORLEVEL == 2 ECHO Exit code is >= 2

     will display  the message  "Exit code  is >= 2" if the
     exit code is 2, or greater than 2.

     Because of the way the IF ERRORLEVEL command works, be
     sure to  check for  the highest  exit codes first. For
     example, to  perform different  actions  depending  on
     exit code values of 0,1,2, or 9, you can write:
     
          IF ERRORLEVEL == 9  action
          IF ERRORLEVEL == 2  action
          IF ERRORLEVEL == 1  action
          default action

     The description  of each  command lists  the  possible
     exit codes.  See your  DOS manual for details on using
     IF ERRORLEVEL,  and see the sample batch files on this
     diskette for examples of exit code checking.

          Note:   When a  command detects  a syntax
          error or  invalid  parameter,  it  always
          displays an  error message  on the screen
          at the current cursor position.














                               8























       
       
       
       
       4.   Commands
       -------------

       This chapter  contains descriptions  of  each  X-BATCH
       command.

































                                 9




















      BOX Command
      -----------

     
     
     Purpose:

         The BOX  command displays  a box  on  the  screen.
         Optionally, a border is draw around the box.
     
     Format:
     
         BOX [FROM line1 col1] [TO line2 col2]
             [BORDER | SINGLE | DOUBLE] [NOCLEAR]
             [COLORS fg bg | COLOR fg] [BRIGHT]
             [BLINK]
     
     Remarks:

         Specify parameters:

         [FROM line1  col1] to  set  the  screen  line  and
         column of  the upper-left  corner of the box.  The
         default is  the upper-left  corner of  the  screen
         (line 1 and column 1).

         [TO line2  col2] to set the screen line and column
         of the lower-right corner of the box.  The default
         is the  lower-right corner  of the screen (line 25
         and column 80).

         [BORDER] to  draw a  block border  around the box.
         The border will appear in the background color.

         [SINGLE] to  draw a  single-line border around the
         box.

         [DOUBLE] to  draw a  double-line border around the
         box.

         [NOCLEAR] to  prevent clearing the interior of the
         box (inside the border).



                               10




















                                                    BOX Command
                                                    -----------

           [COLORS fg bg] to specify the foreground color and
           the background  color of  the box (both border and
           interior). The  default foreground  color is white
           (7) and the default background color is black (0).

               Note:  See section 3.2.1 for a list of
               the color choices.

           [COLOR fg] to specify the foreground color.

           [BRIGHT] to specify a bright foreground color.

           [BLINK] to make the displayed characters blink.
       
       Notes:

           Borders connect  the screen  coordinates given  by
           the FROM  and TO  parameters. That  is, the border
           around a  box specifed with the parameters "FROM 4
           10 TO 20 70", will start on line 4 not line 3.
       
       Returned exit codes:
       
           0     Success
           9     Command syntax error or invalid parameter
       
       Examples:
           
           BOX FROM 4 10 TO 20 69 COLORS 15 1

           Clears a  blue box,  and sets the foreground color
           within the  box to  bright white.   The upper-left
           corner of the box is at line 4 column 10.
           
           BOX FROM 4 10 TO 20 69 COLORS 15 1 SINGLE NOCLEAR

           Draws a  bright-white-on-blue single  line  border
           around a box.  The upper-left corner of the border
           is at line 4 column 10. The interior is unchanged.



                                 11




















      CHKENVIR Command
      ----------------

     
     
     Purpose:

         The CHKENVIR command checks whether an environment
         variable is  defined, or  whether it  is set  to a
         specific value.
     
     Format:
     
         CHKENVIR varname [DEFINED | EQUALS "value" [CASE]]
     
     Remarks:

         Specify parameters:

         [DEFINED] to test whether the variable is defined.

         [EQUALS] "value"  to test  whether the variable is
         set equal to "value".

         [CASE] to make a case-sensitive comparison (upper-
         case and  lowercase  letters  are  not  considered
         equal).
     
     Notes:

         DEFINED is the default action.

         The quotation marks are required only if the value
         contains blanks.  If enclosing quotation marks are
         used, a quotation mark can be imbedded in the text
         by inserting  a back-slash  (\) in  front  of  the
         quotation mark. For example, "He said \"Hello.\"".
     







                               12




















                                             CHKENVIR Command
                                             ----------------

       Returned exit codes:
       
           0     Defined, or Equal to
           1     Not equal to
           2     Not defined
           9     Command syntax error or invalid parameter
       
       Examples:

           CHKENVIR path DEFINED

           Tests whether  the environment  variable  PATH  is
           defined.   The exit  code is  set to  0 if  it  is
           defined, or 2 othewise.

           CHKENVIR comspec EQUALS "C:\COMMAND.COM"

           Tests whether  the environment variable COMSPEC is
           equal to "C:\COMMAND.COM" (uppercase and lowercase
           letters are considered equivalent).  The exit code
           is set  to 0  if it  is equal,  1  if  COMSPEC  is
           defined to   a different value, or 2 if COMSPEC is
           undefined.



















                                 13




















      CHKSCRN Command
      ---------------

     
     
     Purpose:

         The CHKSCRN command searches the screen for a text
         string.   You can  check every line of the screen,
         or only one line.
     
     Format:
     
         CHKSCRN "text string" [LINE n]
     
     Remarks:

         Specify parameters:

         [LINE n] to check only screen line n.
     
     Notes:

         For CHKSCRN  to find  a match,  the complete  text
         string must  fit completely  on one  screen  line.
         Uppercase and  lowercase  letters  are  considered
         equal.

         The quotation  marks are required only if the text
         contains blanks.  If enclosing quotation marks are
         used, a quotation mark can be imbedded in the text
         by inserting  a back-slash  (\) in  front  of  the
         quotation mark.
     
     Returned exit codes:
     
         0     Found
         1     Not found
         9     Command syntax error or invalid parameter
     





                               14




















                                              CHKSCRN Command
                                              ---------------

       Examples:

           CHKSCRN "Can't create directory"

           Searches every  line of  the screen  for the  text
           "Can't create directory".

           CHKSCRN "Can't create directory" LINE 2

           Searches screen  line 2 for the text "Can't create
           directory".































                                 15




















      CLRSCRN Command
      ---------------

     
     
     Purpose:

         The CLRSCRN command clears the screen and sets the
         selected foreground and background colors.
     
     Format:
     
         CLRSCRN [BCOLOR bg | COLORS fg bg] [BRIGHT]
                 [BLINK]
     
     Remarks:

         Specify parameters:

         [COLORS fg  bg]  to  specify  the  foreground  and
         background  colors   to  be   used.  The   default
         foreground color  is white  (7), and  the  default
         background color is black (0).

             Note:  See section 3.2.1 for a list of
             the color choices.

         [BCOLOR bg] to specify the background color.

         [BRIGHT] to specify a bright foreground color.

         [BLINK] to make the displayed characters blink.
     
     Returned exit codes:
     
         0     Success
         9     Command syntax error or invalid parameter
     







                               16




















                                              CLRSCRN Command
                                              ---------------

       Examples:

           CLRSCRN

           Clears to  screen to white on black. Equivalent to
           the DOS CLS command.

           CLRSCRN BCOLOR 4

           Clears the screen to white on red.

           CLRSCRN COLORS 4 2

           Clears the screen to red on green.




























                                 17




















      COMPFILE Command
      ----------------

     
     
     Purpose:

         The  COMPFILE   command  compares   the  sizes  or
         creation dates/times of two files.
     
     Format:
     
         COMPFILE [d:][path]filename1.ext
                  [d:][path]filename2.ext
                  {BYDATE | BYSIZE | BYTIME}
     
     Remarks:

         Specify parameters:

         BYDATE to compare the creation dates of the files.

         BYSIZE to compare the sizes of the files.

         BYTIME to  compare the creation dates and times of
         the files.  The dates  are compared.  If the dates
         are equal, the times are compared.
     
     Returned exit codes:
     
         0     Equal to
         1     File1 > file2
         2     File2 > file1
         9     Command syntax error or invalid parameter
     
     Examples:

         COMPFILE demo.bat dd2.dat BYDATE

         Compares the  creation dates of the files demo.bat
         and dd2.bat.




                               18




















                                             COMPFILE Command
                                             ----------------

           COMPFILE demo.bat dd2.dat BYTIME

           Compares the creation dates and times of the files
           demo.bat and dd2.bat.






































                                 19




















      CREATE Command
      --------------

     
     
     Purpose:

         The CREATE command creates a file.
     
     Format:
     
         CREATE [d:][path]filename.ext
     
     Remarks:

         The CREATE  command creates  a zero-length (empty)
         file if the file does not currently exist.
     
     Returned exit codes:
     
         0     Success
         1     Already exists
         2     Can't create
         9     Command syntax error or invalid parameter
     
     Examples:

         CREATE temp.dat

         Looks for a file called TEMP.DAT. If the file does
         not exist, CREATE creates it.














                               20




















                                               CURSOR Command
                                               --------------

       
       
       Purpose:

           The CURSOR  command positions  the cursor  on  the
           screen.
       
       Format:
       
           CURSOR AT line col
       
       Remarks:

           The  CURSOR   command  moves  the  cursor  to  the
           specified line and column.
       
       Returned exit codes:
       
           0     Success
           9     Command syntax error or invalid parameter
       
       Examples:

           CURSOR AT 2 5

           Moves the cursor to the fifth column on the second
           line.















                                 21




















      DISPFILE Command
      ----------------

     
     
     Purpose:

         The DISPFILE  command reads  text from a disk file
         and displays it in a box on the screen.
     
     Format:
     
         DISPFILE [d:][path]filename.ext [SCREEN n]
                  [FROM line1 col1] [TO line2 col2]
                  [BORDER | SINGLE | DOUBLE | EDGE]
                  [COLORS fg bg | COLOR fg] [NOCLEAR]
                  [BRIGHT] [BLINK]
     
     Remarks:

         Specify parameters:

         [SCREEN  n]   to  specify   what  text  is  to  be
         displayed. The screens are numbered starting at 1.
         The text  in  the  file  must  be  separated  into
         "screens" by  lines that  begin  with  two  dollar
         signs ($$). The default screen number is 1.

             Note: The  DISPFILE  command  may  not
             work as  expected if the text contains
             tab  characters,   or  other   control
             characters.

         [FROM line1  col1] to  set  the  screen  line  and
         column of  the upper-left  corner of  the box. The
         default is  the upper-left  corner of  the  screen
         (line 1 and column 1).

         [TO line2  col2] to set the screen line and column
         of the  lower-right corner of the box. The default
         is the  lower-right corner  of the screen (line 25
         and column 80).



                               22




















                                             DISPFILE Command
                                             ----------------

           [BORDER] to  draw a  block border  around the box.
           The border will appear in the foreground color.

           [SINGLE] to  draw a  single-line border around the
           box.

           [DOUBLE] to  draw a  double-line border around the
           box.

           [EDGE] to  draw a block border around the box. The
           border will appear in the background color.

           [COLORS fg bg] to specify the foreground color and
           the background  color of  the box (both border and
           interior).

               Note:  See section 3.2.1 for a list of
               the color choices.

           [COLOR fg] to specify the foreground color.

           [NOCLEAR] to  prevent clearing the interior of the
           box (inside  the  border)  before  displaying  the
           text.

           [BRIGHT] to specify a bright foreground color.

           [BLINK] to make the displayed characters blink.
       
       Notes:

           Borders connect  the screen  coordinates given  by
           the FROM  and TO  parameters. That  is, the border
           around a  box specifed with the parameters "FROM 4
           10 TO 20 70", will start on line 4 not line 3.
       






                                 23




















      DISPFILE Command
      ----------------

     Returned exit codes:
     
         0     Success
         9     Command syntax error or invalid parameter
     
     Examples:

         If the file TFILE.TXT contains the following text,
     
               Screen 1 line 1
               Screen 1 line 2
               Screen 1 line 3
               $$
               Screen 2 line 1
               Screen 2 line 2
               Third line on Screen 2
               $$

         this command,

         DISPFILE tfile.txt SCREEN 2 FROM 4 4 TO 12 76

         displays the following text in the box:
     
               Screen 2 line 1
               Screen 2 line 2
               Third line on Screen 2















                               24




















                                              DISPLAY Command
                                              ---------------

       
       
       Purpose:

           The DISPLAY command displays text on a line of the
           screen.
       
       Format:
       
           DISPLAY "text" [AT line col | LINE line] [CLEAR]
                   [COLORS fg bg | COLOR fg] [CENTER]
                   [NORETURN] [BRIGHT] [BLINK]
       
       Remarks:

           Specify parameters:

           [AT line  col] to  specify  the  screen  line  and
           column where the text should be displayed.

           [LINE line]  to specify the line on which the text
           should  be   displayed.  The   text  is  displayed
           starting in column 1 unless the [CENTER] parameter
           is also specified.

           [CLEAR] to  clear the  entire line before the text
           is displayed.

           [COLORS fg bg] to specify the foreground color and
           the background color of the text.

               Note:  See section 3.2.1 for a list of
               the color choices.

           [COLOR fg] to specify the foreground color.

           [CENTER] to center the text on the line.





                                 25




















      DISPLAY Command
      ---------------

         [NORETURN] to  leave the  cursor at the end of the
         text after it is displayed.

         [BRIGHT] to specify a bright foreground color.

         [BLINK] to make the displayed characters blink.
     
     Notes:

         If neither  the LINE,  nor the  AT parameters  are
         specified, the  text is  displayed at  the current
         cursor position.

         The quotation  marks are required only if the text
         contains blanks.  If enclosing quotation marks are
         used, a quotation mark can be imbedded in the text
         by inserting  a back-slash  (\) in  front  of  the
         quotation mark. For example, "He said \"Hello.\"".
     
     Returned exit codes:
     
         0     Success
         9     Command syntax error or invalid parameter
     
     Examples:

         DISPLAY "any text" AT 3 10 COLORS 14 1

         Displays "any  text" on  line 3  at column  10  in
         yellow on blue.












                               26




















                                              GETCHAR Command
                                              ---------------

       
       
       Purpose:

           The GETCHAR  command waits for the user to press a
           key, and then returns the key's ASCII value.
       
       Format:
       
           GETCHAR [CHOICES "keys"] [AT line col]
                   [NOECHO] [CASE]
       
       Remarks:

           Specify parameters:

           [CHOICES "keys"] to specify which keys to wait for
           (by default,  GETCHAR  waits  for  any  key).  For
           example, to wait for the M or K keys, specify:
       
                 CHOICES "mk"    or   CHOICES "MK"  , etc.

           [AT line  col] to  specify where  to position  the
           cursor while  waiting for  the user  to press  the
           key. If  the AT  parameter is  not specified,  the
           cursor position is unchanged.

           [NOECHO] to  prevent GETCHAR  from displaying  the
           character equivalent of the key on the screen.

           [CASE] to  specify that  lowercase  and  uppercase
           letters are NOT to be treated as equivalent.
       









                                 27




















      GETCHAR Command
      ---------------

     Notes:

         You can  specify special  keys, such  as the ENTER
         key, by inserting a back-slash (\) followed by the
         decimal value  of the  key's  ASCII  value.  ASCII
         values of 1 to 126 are allowed. For example:
          
          Key Name       Insert
          -----------    ------
          ENTER          \013
          ESC            \027
          TAB            \009
          BACKSPACE      \008

         The quotation  marks are required only if the text
         contains blanks.  If enclosing quotation marks are
         used, a quotation mark can be imbedded in the text
         by inserting  a back-slash  (\) in  front  of  the
         quotation mark. For example, "ab\"cd".
     
     Returned exit codes:
     
         1-126 ASCII value of key pressed
         255   Command syntax error or invalid parameter
     
     Examples:

         GETCHAR

         Waits until the user presses any key.

         GETCHAR CHOICES "ab\027"

         Waits until the user presses the A key, the B key,
         or the ESC key.







                               28




















                                                 SHOW Command
                                                 ------------

       
       
       Purpose:

           The SHOW  command displays the current date, time,
           or day of the week.
       
       Format:
       
           SHOW {DAY | DATE | TIME | TIME12} [AT line col]
                [NORETURN] [COLORS fg bg | COLOR fg]
                [BRIGHT] [BLINK]
       
       Remarks:

           Specify parameters:

           DAY to display the day of the week (e.g., Monday).

           DATE to display the current date (e.g., 12/01/88).

           TIME to display the current time in 24-hour format
           (e.g., 17:15 is 5:15 PM).

           TIME12 to  display the  current  time  in  12-hour
           format (e.g., 5:15 is both 5:15 AM and 5:15 PM).

           [AT line  col] to  specify  the  position  on  the
           screen where  the information should be displayed.
           If the  AT parameter is not specified, the text is
           displayed at the current cursor position.

           [NORETURN] to  leave the  cursor  after  the  last
           character displayed.
       







                                 29




















      SHOW Command
      ------------

         [COLORS fg bg] to specify the foreground color and
         the background color of the displayed text.

             Note:  See section 3.2.1 for a list of
             the color choices.

         [COLOR fg] to specify the foreground color.

         [BRIGHT] to specify a bright foreground color.

         [BLINK] to make the displayed characters blink.
     
     Notes:

         If the  AT parameter is not specified, the text is
         displayed at the current cursor position.
     
     Returned exit codes:
     
         0     Success
         9     Command syntax error or invalid parameter
     
     Examples:

         SHOW DATE

         Displays the  current date  at the  current cursor
         position.

         SHOW TIME AT 6 20 COLOR 14

         Displays the time at line 6 column 20 in yellow on
         black.









                               30




















                                                SOUND Command
                                                -------------

       
       
       Purpose:

           The SOUND command sounds a tone (beeps).
       
       Format:
       
           SOUND [FREQ frequency] [FOR secs]
       
       Remarks:

           Specify parameters:

           [FREQ frequency]  to specify  the frequency of the
           tone. The default is 1000.

           [FOR secs]  to specify the duration of the tone in
           seconds. The default is 1 second.
       
       
       Returned exit codes:
       
           0     Success
           9     Command syntax error or invalid parameter
       
       Examples:

           SOUND

           Sounds a 1000 hertz tone for 1 second.

           SOUND FREQ 3000 FOR 3

           Sounds a 3000 hertz tone for 3 seconds.







                                 31




















      WAIT Command
      ------------

     
     
     Purpose:

         The WAIT command waits for an event.
     
     Format:
     
         WAIT {ANYKEY | FOR secs | UNTIL time}
     
     Remarks:

         Specify parameters:

         ANYKEY to wait until the user presses any key.

         FOR secs  to  wait  until  a  specific  number  of
         seconds have passed.

         UNTIL time  to wait  until a specific time of day.
         The time  must be  specified as  hh:mm in  24-hour
         time.

             Note: Both  the hours and minutes must
             be specified  as 2-digit  numbers. For
             example, 7  AM is  specified as 07:00,
             not 7:00.
     
     Returned exit codes:
     
         0     Success
         9     Command syntax error or invalid parameter
     









                               32




















                                                 WAIT Command
                                                 ------------

       Examples:

           WAIT anykey

           Waits until the user presses any key.

           WAIT FOR 5

           Waits for 5 seconds.

           WAIT UNTIL 13:05

           Waits until 1:05 PM.





























                                 33

















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1619

     Volume in drive A has no label
     Directory of A:\

    ANALYZE  DOC     24029   4-07-89   4:22p
    ANALYZE  EXE     47235   4-07-89   4:18p
    BOX      EXE     12091   9-14-88   6:13p
    CHKENVIR EXE      9787   9-13-88  11:11p
    CHKSCRN  EXE     10851   9-13-88  11:05p
    CLRSCRN  EXE     10127   9-14-88   4:07p
    COMPFILE EXE      8985   9-11-88   7:17p
    CREATE   EXE      9285   9-10-88  11:16p
    CURSOR   EXE      9791   9-13-88  11:01p
    DD2      BAT      4083   9-14-88   7:23p
    DD3      BAT      2995   9-14-88   7:35p
    DD4      BAT      1035   9-14-88  10:14a
    DD5      BAT      1057   9-14-88  10:08a
    DD6      BAT       802   9-13-88  11:49p
    DEMO     BAT       112   9-14-88  10:27a
    DISPFILE EXE     14835   9-14-88   8:33p
    DISPLAY  EXE     12415   9-14-88   9:50a
    FILE1619 TXT      3923  10-16-89   9:08p
    GETCHAR  EXE     14927   9-13-88  12:01p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       781  10-18-89   1:22p
    README            1089   9-28-88  11:53a
    SCREENS  DAT      1640   4-07-89   4:57p
    SHOW     EXE     16637   9-14-88   9:18a
    SOUND    EXE     24556   9-13-88  11:16p
    WAIT     EXE     28248   9-13-88  11:55a
    XBATCH   DOC     37908   4-07-89   4:35p
           27 file(s)     309262 bytes
                           38912 bytes free
