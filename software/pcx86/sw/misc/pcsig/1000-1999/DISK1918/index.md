---
layout: page
title: "PC-SIG Diskette Library (Disk #1918)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1918/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1918"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EDITRAND"

    Browse and edit random files produced by any program, regardless of
    record structure.  EDITRAND can be used to analyze random data in ways
    not possible using the program that created the data.  Data can be
    viewed exactly as it exists on disk, allowing speedy verification of
    program output and intelligent troubleshooting of problem situations.
    EDITRAND is intended for programmers or other persons with intimate
    knowledge of DOS files and random files in particular.
    
    Avoid long hours of testing; use EDITRAND to peek at those random files
    and find the exact fields and records that are suspected of being
    corrupt or invalid.  Have you found that an application will not allow a
    change that is desired?  Load the data file into EDITRAND, swiftly make
    the desired changes, and put the data back into operation without a
    lengthy waiting period.
    
    EDITRAND offers many features including full text, hexidecimal, and
    ASCII data editing; cursor key navigation just like ordinary text
    editors; standard editing functions such as search, replace, word count,
    cut and paste; full featured binary number operations, based on IEEE
    (the default) and Microsoft binary formats (for BASIC programers);
    undo/undelete changes to records; works on files of unlimited size;
    works on random files created by any language.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1918.TXT

{% raw %}
```
Disk No: 1918                                                           
Disk Title: Editrand                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: EDITRAND                                                 
Author Version: 1.1                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
Browse and edit random files produced by any program, regardless of     
record structure.  EDITRAND can be used to analyze random data in ways  
not possible using the program that created the data.  Data can be      
viewed exactly as it exists on disk, allowing speedy verification of    
program output and intelligent troubleshooting of problem situations.   
EDITRAND is intended for programmers or other persons intimately        
knowledgeable of DOS files and random files in particular.              
                                                                        
Avoid long hours of testing - use EDITRAND to peek at those random files
and find the exact fields and records that are suspected of being       
corrupt or invalid.  Have you found that an application will not allow a
change that is desired?  Load the data file into EDITRAND, swiftly make 
the desired changes, and put the data back into operation without a     
lengthy waiting period.                                                 
                                                                        
EDITRAND offers many features including: full text, hexidecimal, and    
ASCII data editing; cursor key navigation just like ordinary text       
editors; standard editing functions such as Search, Replace, Word Count,
Cut and Paste; full featured binary number operations, based on IEEE    
(the default) and Microsoft Binary Formats (for BASIC programers);      
Undo/Undelete changes to records; works on files of UNLIMITED SIZE;     
works on random files created by any language.                          
                                                                        
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
║                 <<<<  Disk #1918  EDITRAND  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: ER           (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY ER.DOC PRN                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```

       Welcome to EditRand.  I hope you find this program to quite useful.
    The supplied documentation file ER.DOC can be printed on any
    Epson or Epson-compatible printer.  Do not attempt to edit the
    file ER.PRT.  If you edit and save, the file will NOT print
    correctly.  A full list of the files supplied with EditRand are
    as follows:

       ER.EXE       The EditRand executable program.
       README.DOC   This file
       1099A.DAT    A sample data file
       ER.DEF       A sample configuration file
       ER.DOC       The documentation file
       MAIN.SCR     Figure 1, goes between pages 10 and 11 of manual.
       FSEL.SCR     Figure 1, goes between pages 14 and 15 of manual.

                                * * * * * * * *

       EDITRAND can be used to analyze random data in ways not possible
    using the program that created the data.  Using EDITRAND, data can be
    viewed exactly as it exists on disk, allowing speedy verification of
    program output and intelligent troubleshooting of problem situations.
    Avoid long hours of testing - use EDITRAND to peek at those random
    files and find the exact fields and records that are suspected of being
    corrupt or invalid.  Have you found that an application will not allow
    a change that is desired?  Load the data file into EDITRAND, swiftly
    make the desired changes, and put the data back into operation without
    a lengthy waiting period.

       Highlights:

        *    Browse and edit random files produced by any program,
             regardless of record structure

        *    Display an entire record on the screen at one time

        *    Determine exact location of data fields with the use of
             ruled display and user definable tab stops

        *    Full text, hexidecimal, and ASCII data editing

        *    Cursor key navigation just like ordinary text editors

        *    Perform standard editing functions such as Search,
             Replace, Word Count, Cut and Paste

        *    Perform record functions such as Append, Delete, Copy,
             Move and Sort

        *    Full featured binary number operations, based on IEEE (the
             default) and MBF formats

        *    Restrict operations to a range of records and/or range
             of columns (this allows the user to focus operations on
             a particular data field)

        *    Undo/Undelete changes to records

        *    Create backup files for security purposes

        *    On line help screen showing all defined function keys

        *    Works on files of UNLIMITED SIZE

        *    Works on random files created by any language


                                * * * * * * * *

    The supplied sample data file is called 1099A.DAT.  As the name
    indicates, it contains 1099 A records as reported by banking people
    concerning the Acquisition or Abandonment of Secured Property.  Each
    record is 420 bytes long, so it should be loaded as:

        ER 1099A.DAT 420

    Also on the distribution disk is a defaults file ER.DEF that contains
    the working environment created for 1099A.DAT.  Of particular interest
    is the tab settings for 1099A.DAT contained in ER.DEF.  If you wish to
    check it out, make sure that this copy of ER.DEF is in the same default
    subdirectory as 1099A.DAT when you load it.  You will notice that there
    is a tab stop ("T" within the rule line) at the beginning of each data
    field.  The particulars of 1099A.DAT are not important, though most of
    the fields are obvious (name, address, SSN, etc.) 1099A.DAT is only
    intended for experimentation purposes.

```
{% endraw %}

## SUBMIT.TXT

{% raw %}
```

       This file contains responses to submission form additional
    information as found on the back of the PC-SIG Submission/Update Form.


    Program Title:  EditRand

    Detailed Program Description:

       EditRand is a random file browse/edit/sort utility.  Excerpts from
       the manual giving a good general description:

	    EDITRAND can be used to analyze random data in ways not
       possible using the program that created the data.  Using EDITRAND,
       data can be  viewed exactly as it exists on disk, allowing speedy
       verification of program output and intelligent troubleshooting of
       problem situations.  Avoid long hours of testing - use EDITRAND to
       peek at those random files and find the exact fields and records
       that are suspected of being corrupt or invalid.	Have you found that
       an application will not allow a change that is desired?	Load the
       data file into EDITRAND, swiftly make the desired changes, and put
       the data back into operation without a lengthy waiting period.

       Highlights:

	*    Browse and edit random files produced by any program,
	     regardless of record structure

	*    Display an entire record on the screen at one time

	*    Determine exact location of data fields with the use of
	     ruled display and user definable tab stops

	*    Full text, hexidecimal, and ASCII data editing

	*    Cursor key navigation just like ordinary text editors

	*    Perform standard editing functions such as Search,
	     Replace, Word Count, Cut and Paste

	*    Perform record functions such as Append, Delete, Copy,
	     Move and Sort

	*    Full featured binary number operations, based on IEEE (the
	     default) and MBF formats

	*    Restrict operations to a range of records and/or range
	     of columns (this allows the user to focus operations on
	     a particular data field)

	*    Undo/Undelete changes to records

	*    Create backup files for security purposes

	*    On line help screen showing all defined function keys

	*    Works on files of UNLIMITED SIZE

	*    Works on random files created by any language


    Who is the intended user?  EditRand is intended for programmers or
    other persons intimately knowledgable of DOS files and random files in
    particular.  It is intended to allow editing, troubleshooting, and
    debugging of random files and their parent applications.  (EditRand is
    NOT an application program debugger - examining a random file with
    EditRand can give clues as to application program problems.)


    This version (1.1) is new to the PC-SIG library.

    Unique features:  There are many file listing programs around, even a
    couple that will handle random files.  As far as I know, there are no
    such programs that allow standard editing features of random files.

    Program's capacity or limitations:  See Highlights above for capacity
    (such as files of any size, random files created by any application
    written in any language, etc).  Only restriction is a maximum record
    length of 1600 bytes per record.

    No special requirements (will run with 256K, single floppy disk, and
    monochrome monitor.)

    How to start the program:  ER filename recordlength

    Registration fee: $20

    Materials or services that come with registration: Printed
    documentation, latest version, removal of UNREGISTERED VERSION message.

    List of program files:

       ER.EXE	    The EditRand executable program.
       README.DOC   Quick glance at program features and accompanying files.
       1099A.DAT    A sample data file
       ER.DEF	    A sample configuration file
       ER.DOC	    The documentation file
       MAIN.SCR     Figure 1, goes between pages 10 and 11 of manual.
       FSEL.SCR     Figure 1, goes between pages 14 and 15 of manual.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1918

     Volume in drive A has no label
     Directory of A:\

    1099A    DAT     81900   9-25-89   5:36a
    ER       DEF       188  10-11-89   7:16a
    ER       DOC    111855  10-28-89   1:40p
    ER       EXE    144471   9-25-89   6:44a
    FILE1918 TXT      2739  12-28-89  11:47a
    FSEL     SCR      1527  10-28-89   1:42p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   2:44a
    MAIN     SCR       932  10-12-89   5:12a
    README   DOC      3754  10-28-89   1:47p
    SUBMIT   TXT      3943  10-28-89   1:47p
           11 file(s)     351887 bytes
                            5120 bytes free
