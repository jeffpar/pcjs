---
layout: page
title: "PC-SIG Diskette Library (Disk #640)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0640/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0640"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LIST"

    LIST is a printer-related utility program designed to aid programmers
    and others with simple document printing requirements.  The program
    controls printing of documents, providing automatic pagination, page
    numbering, titling, printing of headers and footers, and a number of
    other similar features.  Most significantly, the program easily
    handles printing multiple documents, such as might occur when a
    programmer wishes to print out all program source code files used on a
    project.
    
    System Requirements: 256K, one floppy drive and a monochrome,
    black & white, or color monitor.  To print hardcopy documents, a
    parallel (LPT) printer is required.
    
    How to Start: After consulting the documentation in LIST.DOC,
    initiate the program by running INSTALL and then LIST.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    README   DOC  Contents,  installation and execution  of LIST
    LINSTALL COM  Program run by the BAT file
    INSTALL  BAT  Batch file to install LIST for display type
    LIST     COM  Main program
    LIST     DOC  Documentation file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES640.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  640  LIST                                                 v1   DS2
---------------------------------------------------------------------------
LIST  permits formatting of documents for printing.  LIST enables
the use of headers, footers, and pagination. LIST works best with
previously unformatted files.
 
------------  LIST
README   DOC  Contents,  installation and execution  of LIST
INSTALL  BAT  Batch file to install LIST for display type
LINSTALL COM  Program run by the BAT file
LIST     COM  Main program
LIST     DOC  Documentation file
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## LIST.DOC

{% raw %}
```





























                                   LIST User's Guide

                                      Version 1.0
                                    October 1, 1986












                                                Systems Design & Implementation
                                                2331 Cheshire Way
                                                Redwood City, CA 94061



    Disclaimer

    Systems Design & Implementation warrantees that this program is generally
    suitable for the purpose for which it is intended.  Should this not be the
    case, a full refund will be made of any remittances.  There is no guarantee,
    express or implied, that this program is error-free.  Under no circumstances
    will Systems Design & Implementation be responsible for any consequential
    damages which may occur through either intended or unintended actions of
    this program.

                                 LIST User's Guide

    Introduction

    What does LIST do?
    
    LIST is a printer-related utility program designed to aid programmers and
    others with simple document printing requirements.  The program controls
    printing of documents, providing automatic pagination, page numbering,
    titling, printing of headers and footers, and a number of other similar
    features.  Most significantly, the program easily handles printing multiple
    documents, such as might occur when a programmer wishes to print out all
    program source code files used on a project.

    What doesn't LIST do?

    The only formatting which LIST performs on text in the file to be printed is
    pagination (page length formatting), i.e., the user-defined number of lines
    per page are printed, and then a new page is started.  LIST does virtually
    no actual within-line text formatting, e.g., right-hand margin adjustment,
    hyphenation, etc.  There are two exceptions to this: LIST does recognize tab
    (control I) characters), and "hard" form-feed (control L) characters.  Tabs
    are expanded according to a user defined tab-width setting, and form-feeds
    cause the current page to end and a new page to start.

    What equipment does LIST require?

    LIST requires an IBM or compatible PC, XT or AT-type microcomputer with a
    monochrome, black & white, or color monitor, 256K RAM, and DOS 2.0 or later.
    To print hardcopy documents, a parallel (LPT) printer is required.  Other-
    wise, files may be output to disk files for viewing, later printing, etc.

    What does LIST cost?
    
    LIST is a proprietary and copyrighted product.  All rights to this program
    remain with Systems Design & Implementation.  It is distributed on a user-
    supported basis.  You are free to try the program, and to copy and dis-
    seminate the program as long as you copy and disseminate the distribution
    diskette in its entirety.  If you feel the program is useful, you are asked
    to remit $10 for each copy of the program that you use on your various
    systems.  Remittances and correspondence should be mailed to:
    
                       Systems Design & Implementation
                       2331 Cheshire Way
                       Redwood City, CA 94061




















                                        -1-                                     
                                 LIST User's Guide

    Installation
    
    It is suggested that you make a backup copy of the distribution diskette
    before beginning the installation process.
    
    To install the program, at the DOS prompt type: A:INSTALL <Return>
    
    The installation program will prompt you first for the type of monitor
    your system has (monochrome, black & white, or color).  Next you will be
    prompted for the directory where the LIST program is to be installed.
    The currently logged directory will be shown as the default.

    Once installed, the program COM file (LIST.COM) may in fact be moved to any
    other directory, disk or diskette without going through the installation
    procedure again.  However, if the type of monitor your system uses changes,
    you MUST reinstall the program.  The LIST program records internally the
    type of monitor your system has, and when this changes you must change this
    internal record by reinstalling the program.  Finally, the program on the
    distribution diskette will not operate if copied directly from the diskette
    onto your system -- you MUST install the program.  For this reason, if you
    distribute the program to others you must include the entire distribution
    diskette.
    
    
    
    Using LIST - An Overview
    
    
    General Operation
    
    To begin LIST, at the DOS prompt type: LIST <Return>
    
    After a brief copyright delay, the main program screen will be displayed.
    This screen contains 17 fields to be filled in.  Use the up or down arrows
    or the RETURN key to move the cursor to a field.  Once at the field, use
    the alphabetic or numeric keys to enter the text.  Full editing of the text
    is provided: the left and right arrows move the cursor, the INS key toggles
    between insert and overwrite mode, and the DEL and BACKSPACE keys are opera-
    tional.  CTRL-left arrow moves the cursor to the first position of a field,
    CTRL-right arrow moves it to the end, CTRL-D deletes the entire field, and
    HOME restores a field to its original value (the value before any editing
    was begun).
    
    Pressing the up or down arrow or the RETURN key signifies that you have com-
    pleted entering information into a field and wish to proceed to the next
    field.   The system will verify the information that you have entered before
    allowing you to move on.  If an error is found, a message will be displayed
    on the status line (line 23), and you will be required to correct it.
    
    Once all fields have been filled in, pressing the END key instructs the
    system to begin printing the requested file(s).  If you requested that out-
    put be sent to the printer, LIST will insure that the printer is turned on
    and online; if you requested that output be sent to a file, LIST will
    prepare the file accordingly.
    
    The Default Directory

    The current logged or default directory is displayed at the top right of the
    screen.  A new directory may be selected by pressing the F1 key.  You will
    be prompted for a new directory: enter the new directory name and press the
    RETURN or END key, or press the ESC key to retain the current directory.

                                        -2-                                     
                                 LIST User's Guide

    Viewing a Directory

    To review a list of files currently available (e.g., perform a DOS directory
    command but without returning to DOS) press the F2 key. You will be prompted
    for a file name pattern.  Enter a file name (complete with the wild card *
    if appropriate), and press the RETURN key.  As a default, you may leave the
    field blank -- this results in the same display as entering the pattern *.*.
    To complete the directory listing and continue with filling in fields, press
    the END or ESC key.
    
    Exiting LIST
    
    To exit LIST simply press the ESC key while the cursor is in any field.  If
    printing has begun, it can be interrupted by pressing the ESC key; pressing
    the RETURN key will resume printing where it was interrupted, while pressing
    the ESC key a second time causes the printing to be halted altogether.  You
    will then be prompted for whether you wish to print another file.

    Invoking DOS

    If your computer has sufficient internal memory to permit the operation, you
    may also temporarily suspend LIST and invoke DOS.  If LIST finds that your
    computer does have sufficient memory, the line on the bottom of the screen
    will include the option "Alt+D-DOS", meaning that pressing the ALT key and
    the D key simultaneously will invoke DOS.  Once DOS has been invoked, you
    may perform any standard DOS-related function.  It is important to under-
    stand that LIST has not been ended, it is merely suspended.  Therefore,
    file-related operations (such as deleting files, renaming files, etc.) may
    cause problems if LIST previously had reason to use those files;  once LIST
    resumes, it will still expect those files to be available.

    This DOS capability is intended primarily to offer a method of interrupting
    a long print out and giving you access to your system for some short high
    priority task.  Simply press the ESC key once printing has begun.  Then,
    once you are prompted about continuing, press ALT+D.  Once in DOS, perform
    whatever task is at hand.  Once that is completed, type EXIT to resume LIST.
    Once back in LIST, press ENTER to continue the printing where it left off.
    

    
    Using LIST - Field Descriptions
    
    The first field is for the name of the file or files that you wish to print.
    You may enter a single file name, or several file names separated by blanks.
    
    A number of other fields will already have a default value displayed
    in them.  If these values are acceptable, then no changes need be made;
    otherwise, move the cursor to the field to be changed, and enter the
    corrections.  Finally, some fields will be blank: if you wish to enter
    information in these fields, do so; otherwise they may be left blank.
    Once all fields have been filled in, press the END key to begin printing.
    
    >Field 1: File(s) to Print
    
    This field is for the name of the file or files that you wish to print.
    You may enter a single file name, or several file names separated by blanks.
    
    A file name must contain a complete path specification if the file is
    located in a directory other than the default.  Note that if all files to
    be printed are located in the same non-default directory, it would be
    easiest to change the default directory (see The Default Directory above).

                                        -3-
                                 LIST User's Guide


    File names may also contain the wild card *.  When you complete entering
    data in this field, LIST will automatically replace wild card names with
    an alphabetized list of file names matching the pattern(s) entered.

    Wild card file name replacement may result in a list of file names too long
    to display in this field (60 characters).  In this case, the list as dis-
    played will be abbreviated:  the first and last names will be retained, and
    the middle names will be replaced by '...'.  However, the entire list of
    files will be printed.  If no matching files are found, a "No Matches Found"
    message is displayed, and you are reprompted for a file name; alternatively,
    if the total length of all matching file names exceeds 255 characters, a
    "Too Many Matches Found" message is displayed, and you must enter a pattern
    resulting in a shorter list.
    
    A form of input (or I/O) redirection is also supported.  If a file name of
    the form @SomeName is entered, a line of text (up to 255 characters) is read
    from the file specified by SomeName, and inserted into the field just as if
    you had typed it in.  For this field, the line of text read should contain a
    list of valid file names.  Note that the line of text read may contain up to
    255 characters; if the list exceeds the length of the field (60 characters),
    the list displayed will be abbreviated as described above, but the entire
    list will be printed.  Finally, wild card file name replacement is not auto-
    matically undertaken on a file list entered through input redirection, i.e.,
    through @SomeName.  However, pressing the RETURN key a second time (after a
    "File Not Found" message is displayed) will result in the wild card names
    being replaced by valid matching names.
    
    >Field 2: Print to
    
    This is the name of the output printer or file where the formatted output
    is to be sent.  Entering a name of the form LPT, LPT0, LPT1, LPT2, etc.,
    or leaving the field blank, will result in output being sent to the main
    system printer.
    
    (Technical Note: This version of LIST does NOT support multiple printers,
    and all printed output is directed to the system list device.  The DOS MODE
    command may be used to provide redirection to serial (COM) ports; refer to
    your DOS documentation for an explanation of the MODE command.)
    
    Any name of a form other than LPT, LPT0, LPT1, etc. is assumed to refer to
    a standard disk file.  The output name must contain a complete path specifi-
    cation if the output file is located in a directory other than the default.
    LIST will check whether the specifed file already exists;  if it does, you
    are given the choice of erasing the currently existing file first, or of ap-
    pending the new output to it.  (You may also press the ESC key when prompted
    for a response, and enter a new output file name.)
    
    Directing output to a disk file is useful for previewing what a printed
    document will look like, or for preformatting a document which can then
    be printed via a background print spooler.
    
    When formatting output, LIST does not distinguish between output directed
    to a printer and output directed to a disk file.  As a consequence, output
    sent to a disk file is EXACTLY the same as would be sent to a printer.
    
    >Field 3: Lines per page
    
    This field specifies the total number of lines to be printed on each page,
    including the text lines and any header and footer lines.  After the
    appropriate number of lines have been printed, a form-feed is output.

                                        -4-                                     
                                 LIST User's Guide


    If a form-feed (control L) character is detected in the first column of a
    text line in the file being printed, the current page is ended and a new
    page begun.  NO OTHER TEXT on that text line will be printed.
    
    >Field 4: Line length
    
    This field specifies the expected maximum length of a text line.  It is used
    only for the purpose of formatting headers and footers, e.g, deciding in
    which column to print headings, footers, page numbers, etc.  The line length
    is NOT used to truncate or expand any actual text read from the file being
    printed; lines of a length greater than the specified line length will still
    be output to the printer or disk file in their entirety.
    
    >Field 5: # Header lines (Number of Header lines)
    
    This field specifies the number of lines to be output as a header at the top
    of each printed page.  Any heading and date and time stamp will be printed
    on the first header line; subsequent header lines will be output as blank
    lines.  If zero header lines are requested, a heading or date and time stamp
    will not be printed even if requested; to print a heading or date and time
    stamp at least 1 header line must be specified.
    
    >Field 6: Heading
    
    This field specifies the heading to be printed as the first line of the
    header at the top of each printed page.  The heading will be centered with-
    in the line, with centering based upon the specified line length (see Field
    4).  A header containing at least one line must also have been specified
    for the heading to be printed (see Field 5).
    
    If more than one file is to be printed several headings may be specified,
    separated by blanks.  The headings will correspond positionally to the file
    name list entered in Field 1, e.g., the first file will be printed with
    first heading, the second with the second heading, etc.  If the heading list
    contains fewer entries than the file name list, the last file(s) will be
    printed without a heading; if the heading list contains more entries than
    the file name list, the last headings will be ignored.
    
    If a heading is to contain blanks the heading must be enclosed in match-
    ing single (') or double (") quotes.  If a heading is to contain a single
    quote, the heading should be enclosed in double quotes, and vice versa.
    
    A heading may also be made up of a file name (or names) containing the wild
    card *.  When you complete entering data in this field, LIST will automati-
    cally replace wild card names with an alphabetized list of file names match-
    ing the pattern (or patterns) entered.  Input redirection is also allowed in
    this field.  The line of text read from the specified file should contain a
    list of valid headings.  (Note:  Since headings are automatically CENTERED,
    in order to print a non-centered heading it will be necessary to use input
    redirection and read in a heading with as many characters as the line length
    specified in Field 4.  In this case, LIST's centering will have no effect.)
    
    If a heading list resulting from wild card replacement or input redirection
    is too long to be displayed within this field, an abbreviated list will be
    displayed (see the discussion under Field 1).
    
    >Field 7: # Footer lines (Number of Footer lines)
    
    This field specifies the number of lines to be output as a footer at the
    bottom of each printed page.  Any footing and page numbers will be printed

                                        -5-                                     
                                 LIST User's Guide

    on the last footer line; previous footer lines will be output as blank
    lines.  If zero footer lines are requested, a footing or page number will
    not be printed even if requested; to print a footing or page number at least
    1 footer line must be specified.
    
    >Field 8: Footing
    
    This field specifies the footing to be printed as the last line of the
    footer at the bottom of each printed page.  The footing will be centered
    within the line, with centering based upon the specified line length (see
    Field 4).  A footer containing at least one line must also have been speci-
    fied for the footing to be printed (see Field 7).
    
    If more than one file is to be printed several footings may be specified,
    separated by blanks.  The footings will correspond positionally to the file
    name list entered in Field 1, e.g., the first file will be printed with
    first footing, the second with the second footing, etc.  If the footing list
    contains fewer entries than the file name list, the last file(s) will be
    printed without a footing; if the footing list contains more entries than
    the file name list, the last footings will be ignored.
    
    If a footing is to contain blanks, the footing must be enclosed in match-
    ing single (') or double (") quotes.  If a footing is to contain a single
    quote, the footing should be enclosed in double quotes, and vice versa.
    
    A footing may also be made up of a file name (or names) containing the wild
    card *.  When you complete entering data in this field, LIST will automati-
    cally replace wild card names with an alphabetized list of file names match-
    ing the pattern (or patterns) entered.  Input redirection is also allowed in
    this field.  The line of text read from the specified file should contain a
    list of valid footings.  (Note:  Since footings are automatically CENTERED,
    in order to print a non-centered footing it will be necessary to use input
    redirection and read in a footing with as many characters as the line length
    specified in Field 4.  In this case, LIST's centering will have no effect.)
    
    If a footing list resulting from wild card replacement or input redirection
    is too long to be displayed within this field, an abbreviated list will be
    displayed (see the discussion under Field 1).
    
    >Field 9: Line spacing
    
    This field specifies the line spacing with which text should be printed.
    Single spacing (line spacing equal to 1) results in text being printed
    on every line, double spacing (line spacing equal to 2) results in one
    blank line being printed between every text line, etc.
    
    Line spacing applies only to the main text being printed; headers and foot-
    ers are always single-spaced.  For example, specifying a 3 line header and
    double spacing will still result in only 3 lines being printed at the top
    of each page.
    
    >Field 10: Left margin
    
    This field specifies the left margin which is to be inserted before the
    printing of header, footer and main text lines.  Specifying a left margin
    of zero will result in print output beginning in column 1 of each line;
    specifying a left margin of 5 will result in 5 blank columns, and print
    output beginning in column 6 of each line.




                                        -6-                                     
                                 LIST User's Guide

    >Field 11: Document begins with page
    
    This field specifies the page number of the first page found within the file
    being printed.  Typically, the first page in a file is page one.  However,
    if you have broken a single long document into several smaller files, some
    files will begin with a page after page one.
    
    >Field 12: Start printing with page
    
    This field specifies the first page which should actually be printed.  For
    example, while a document may begin with page 1 (see Field 11), you might
    request that printing begin with page 10.  LIST would then internally for-
    mat pages 1 through 9 (but not print them) and then begin actual printing
    once page 10 was reached.  This is useful when only selected pages in a
    long document require printing, perhaps because of corrections, edits, etc.
    
    >Field 13: Stop printing with page
    
    This field specifies the last page which should actually be printed.  For
    example, while a document may contain 20 pages, you might request that only
    the first 10 pages be printed.  LIST would then stop printing once the re-
    quested 10 pages had been printed.  Since you might not know how many pages
    a document will have, to print to the end of a document specify the special
    value of zero: this will indicate that you wish to print to the end of the
    document.
    
    Note:  Together, fields 11 through 13 allow you to print any section of a
    document, and have the pages numbered arbitrarily.  For example, suppose
    a file contained materials from the second chapter of a document, where
    Chapter 2 begins on page 50.  You have made some minor typographical cor-
    rections to pages 10 through 12 of this file, and now wish to print out
    these corrected pages with appropriate page numbers.  To do so, specify
    field 11 as 50 (i.e., the document begins with page 50), specify field 12
    59 (start printing with page 59) and specify field 13 as 61 (stop printing
    with page 61).
    
    >Field 14: Number pages?
    
    This field indicates whether page numbers should be printed. If so, the
    page numbers are printed centered on the last line of the footer, with
    centering based upon the specified line length (see Field 4).  A footer
    containing at least one line must also be specified for page numbers to
    be printed (see Field 7).
    
    >Field 15: Date and Time stamp?
    
    This field indicates whether the printed document should be stamped with
    the current data and time.  If so, the date is printed on the left-hand
    side of the first header line, and the time is printed on the right-hand
    side.  The column in which the time is printed is based upon the specified
    line length (see Field 4).  A header containing at least one line must also
    have been specified for the document to be stamped (see Field 5).
    
    >Field 16: Pause between pages?
    
    This field indicates whether LIST should pause and prompt you between print-
    ed pages. If so, a message is displayed whenever a page has been completed,
    giving you an opportunity to hand-feed paper for the next page into your
    printer.  Care must be taken when inserting the paper, as printing will
    begin exactly where YOU have aligned the page.


                                        -7-                                     
                                 LIST User's Guide

    >Field 17: Tab width setting
    
    This field indicates how LIST should assume tab stops have been set.  When
    LIST encounters a tab (control I) character in the text to be printed, the
    tab is replaced with just enough spaces to move the text over to the next
    tab stop.  For example, if you specify a tab width setting of 5, then LIST
    assumes that tabs have been set in columns 1, 6, 11, etc.  If LIST now en-
    counters a tab in column 7, enough spaces will be inserted so that the re-
    maining text begins in column 11.  A text line may contain multiple tabs;
    each will be expanded in turn.
    
    Final Comments
    
    Reports of any problems are welcome, and errors will be corrected on a
    timely basis for registered users.  Suggestions for improvements are also
    welcome, and attempts will be made to incorporate them in future releases
    of LIST.













































                                        -8-                                     

```
{% endraw %}

## NOTES640.TXT

{% raw %}
```
Program name: LIST     (v1)
 
Author name: None Listed
 
Address:  System Design & Implementation
          2331 Cheshire Way
          Redwood City CA 94061
 
Telephone Number: None Listed
 
Suggested Donation: $10.00
 
Program Description:
 
LIST  is  a printer utility that allows the user to format  files
for  output to a printer or into a file that have  no  particular
format of their own.  DOS 2.0 and a parallel printer are required
however  the program will work with the PCjr if enough memory  is
present.  The  parameters  that LIST applies are selected from  a
screen  that appears when the program is run.  Your  choices  are
made  by moving the cursor with the arrow keys and entering  data
in  each  field.  The  program checks for obvious errors  and  no
mistake need be permanent.
 
The program has some special features.  The time and date can  be
printed   in  the  header  and  user-defined  page  numbering  is
permitted. LIST allows the use of wildcards (*) in file selection,
enabling  mass  printing of files.  If enough memory  is  present
(256K  minimum required) the program also offers the  ability  to
view  all  available directories and access DOS from  within  the
program.
 
It  seems particularly suited for programers to use  with  source
code since it adds features like headers, footers, and pagination
to files.  Since the only control characters LIST recognizes  are
Tab  and  Line-feed,  the program is more suited to printing  un-
formatted docments.
```
{% endraw %}

## README.DOC

{% raw %}
```


Files

The following files are included on the distribution diskette:

   README.DOC   - an overview of LIST, the files included, etc.
   INSTALL.BAT  - batch file to install program
   LINSTALL.COM - program to install LIST (invoked by INSTALL.BAT)
   LIST.COM     - prints multiple files, with pagination, titles, etc.
                  (note: must be installed by INSTALL.BAT)
   LIST.DOC.    - complete LIST User's Guide

What does LIST do?

LIST is a printer-related utility program designed to aid programmers and
others with simple document printing requirements.  The program controls
printing of documents, providing automatic pagination, page numbering,
titling, printing of headers and footers, and a number of other similar
features.  Most significantly, the program easily handles printing multiple
documents, such as might occur when a programmer wishes to print out all
program source code files used on a project.

What doesn't LIST do?

The only formatting which LIST performs on text in the file to be printed is
pagination (page length formatting), i.e., the user-defined number of lines
per page are printed, and then a new page is started.  LIST does virtually
no actual within-line text formatting, e.g., right-hand margin adjustment,
hyphenation, etc.  There are two exceptions to this: LIST does recognize tab
(control I) characters), and "hard" form-feed (control L) characters.  Tabs
are expanded according to a user defined tab-width setting, and form-feeds
cause the current page to end and a new page to start.

What equipment does LIST require?

LIST requires an IBM or compatible PC, XT or AT-type microcomputer with a
monochrome, black & white, or color monitor, 256K RAM, and DOS 2.0 or later.
To print hardcopy documents, a parallel (LPT) printer is required.  Other-
wise, files may be output to disk files for viewing, later printing, etc.

What does LIST cost?

LIST is a proprietary and copyrighted product.  All rights to this program
remain with Systems Design & Implementation.  It is distributed on a user-
supported basis.  You are free to try the program, and to copy and dis-
seminate the program as long as you copy and disseminate the distribution
diskette in its entirety.  If you feel the program is useful, you are asked
to remit $10 for each copy of the program that you use on your various
systems.  Remittances and correspondence should be mailed to:

                   Systems Design & Implementation
                   2331 Cheshire Way
                   Redwood City, CA 94061

Installation

To install the program, at the DOS prompt type: A:INSTALL <Return>

The installation program will prompt you first for the type of monitor
your system has (monochrome, black & white or color).  Next you will be
prompted for the directory where the LIST program is to be installed.
The currently logged directory will be shown as the default.


                                      -1-                                       
                                                                                

General Operation

To begin LIST, at the DOS prompt type: LIST <Return>

Documentation

Complete documentation for LIST is included on the distribution diskette
in the file LIST.DOC.  It may be printed on any IBM-compatible printer
using the DOS PRINT command.





















































                                      -2-                                       

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0640

     Volume in drive A has no label
     Directory of A:\

    FILES640 TXT       765   1-04-80   5:11p
    GO       BAT       409   1-04-80   5:08p
    INSTALL  BAT       348  10-06-86   5:01p
    LINSTALL COM     12919  10-06-86   4:57p
    LIST     COM     45353  12-07-86   8:52p
    LIST     DOC     26287  10-09-86   7:13a
    NOTES640 TXT      1531   1-04-80   5:13p
    README   DOC      3588  10-10-86   8:37a
            8 file(s)      91200 bytes
                           67072 bytes free
