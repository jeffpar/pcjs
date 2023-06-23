---
layout: page
title: "PC-SIG Diskette Library (Disk #1150)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1150/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1150"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIMPLY LABELS III, 1 OF 2 (ALSO 1679)"

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

## FILE1150.TXT

{% raw %}
```
Disk No: 1150                                                           
Disk Title: Simply Labels III                                           
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1150

     Volume in drive A has no label
     Directory of A:\

    READ     ME       4217  11-02-89  12:00p
    CHANGES  TXT      5758  11-02-89  12:00p
    SL       EXE    174408  11-02-89  12:00p
    SL       DEF      8015  11-02-89  12:00p
    SL       CNF      1170  11-02-89  12:00p
    SL2TO3   EXE     39706  11-02-89  12:00p
    SF       EXE     52992  11-02-89  12:00p
    ----                 2  11-02-89  12:00p
    BOOK     LAB      1056  11-02-89  12:00p
    CASSETTE LAB      2508  11-02-89  12:00p
    DATETIME LAB      2084  11-02-89  12:00p
    DISKETTE LAB       852  11-02-89  12:00p
    FLOP3A   LAB      3020  11-02-89  12:00p
    FLOP5A   LAB      4518  11-02-89  12:00p
    FLOP5B   LAB      4526  11-02-89  12:00p
    MAILING  LAB       890  11-02-89  12:00p
    PRNDEMO  LAB      1221  11-02-89  12:00p
    PRNDEMO1 LAB      1658  11-02-89  12:00p
    REPAIR   LAB       552  11-02-89  12:00p
    VCR      LAB       868  11-02-89  12:00p
    -----                2  11-02-89  12:00p
    PEOPLE   LNK       706  11-02-89  12:00p
    PEOPLE   HDR       384  11-02-89  12:00p
    PEOPLE   DTA      3685  11-02-89  12:00p
    EMPCARD  LNK      1265  11-02-89  12:00p
    EMPMAIL  LNK       715  11-02-89  12:00p
    EMPLOYEE DBF      1874  11-02-89  12:00p
    GO       BAT       334  11-21-89  12:17a
    FILE1150 TXT      2517  12-08-89   4:40p
           29 file(s)     321503 bytes
                           25600 bytes free
