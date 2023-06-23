---
layout: page
title: "PC-SIG Diskette Library (Disk #1671)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1671/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1671"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-BROWSE REFERENCE DISK (1670 ALSO)"

    Want a straightforward wordprocessor you can use without reading a
    manual?  Easy to learn and easier to use, WORDMASTER offers a full
    function wordprocessor for either computer beginners or folks who do
    not need something close to desktop publishing.
    
    What's best about WORDMASTER is its menu system.  Almost any command can
    be located by moving about it.  After flicking a few keys, a beginner
    will suddenly be using windows without needing hours of study and
    explanation.  More advanced users will find every basic command in
    wordprocessing available on screen.
    
    Macros come alive with WORDMASTER.  The excellent user guide offers a
    clear explanation of this handy tool.  The simple command setups lets
    users set up blocks of macros almost instantly.  Likewise, lots of
    commands let the more sophisticated format a page in virtually any way.
    
    The program includes drivers for Epson dot matrix compatibles,
    lasers, Okidata 92's, and Star printers.  It offers full font commands
    that work on almost every Epson compatible.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BR1.DOC

{% raw %}
```













                                   tm
                          PC-Browse      User's Guide


                By Steven B. Levy, Bob Wallace, and Corey Smith


                                  Version 1.00

                                September, 1989

    The unmodified PC-Browse distribution diskettes may be freely copied
    and shared in the United States, Canada, Australia and New Zealand, but
    not in Great Britain or elsewhere in the world. Printed copies of this
    document may not be copied in any way without a license from Quicksoft.
    For more information, see the Licensing Appendix.


       (c) Copyright 1989 by Bob Wallace, Quicksoft. All Rights Reserved.

      Quicksoft, 219 First Ave N. #224, Seattle, WA 98109. (206) 282-0452.

                        Printed and published in U.S.A.


    PC-Browse is a trademark of Quicksoft.
    Quicksoft is a registered trademark of Quicksoft.
    PC-Write is a registered trademark of Quicksoft.
    Microsoft Word is a registered trademark of Microsoft Corporation.
    WordPerfect is a registered trademark of WordPerfect Corporation.
    WordStar is a registered trademark of WordStar Inc.
    WordPerfect is a registered trademark of WordPerfect Corporation.
    IBM PC, PC AT, and PS/2 are registered trademarks of the IBM
    Corporation.

    Any other trademarks should be credited to their respective companies.

    Additional editing:  Betty Houser

    Special thanks to our Beta testers for their suggestions and
    corrections, and to all of our registered users for their continued
    support.

    Package   ISBN  0-926447-00-9
    Manual    ISBN  0-926447-01-7
    Disk 1    ISBN  0-926447-02-5
    Disk 2    ISBN  0-926447-03-3
    Table of Contents

    What is PC-Browse                                                5
        About this User's Guide                                      6
        Manual Terminology and Notation                              6
    Installing PC-Browse                                             7
    PC-Browse Tutorial                                               9
        For People Who Don't Read Manuals                            9
        What Does PC-Browse Do?                                     10
        Finding, Viewing, and Pasting Text                          11
        Using PC-Browse Applications                                17
            More Advanced Applications                              20
        Developing Your Own PC-Browse Applications                  23
        Summary                                                     27
    Suggested Applications                                          29
        Dictionary                                                  29
        PC-Write Page Layout Library                                29
        Political Party Platform                                    30
        Family Tree                                                 30
        Class Notes                                                 31
        Telemarketing Script                                        31
        On-Line Help                                                31
        Programmer's Library                                        32
    How to Build PC-Browse Files                                    33
        About Delimiters                                            33
            Rules for Delimiters                                    33
        What are Targets and Triggers?                              34
        The Linear Search                                           34
        The Lookup Search                                           37
            Requirements for a Lookup File                          37
            Entering and Sorting the Data                           38
            Merging the Data                                        40
            Defining the Parameters                                 41
            Using the File                                          41
            Links Between Files                                     43
        Creating an Index Page                                      43
            Using the Index Page                                    44
    Reference Section                                               45
        Getting Help                                                45
            Viewing the Main Menu                                   45
        Running PC-Browse                                           46
        Exiting PC-Browse                                           49
        Popping up PC-Browse                                        49
        File Name Patterns                                          51
        Loading a File into PC-Browse                               52
            Files You Can Load with PC-Browse                       54
        Moving Around in PC-Browse                                  55
        Normal Search                                               58
            Case Matching and Wild Cards in a Search                59
            Foreign and Special Characters in a Search              61
            Searching Multiple Files                                62
        Keyword Searches                                            64
            Links Between Files                                     68
            Running Other Programs                                  69
        Additional Windows                                          70
        Navigating Within PC-Browse                                 71
            The Location List                                       71
            The Bookmark                                            73
        Pasting and Printing                                        73
            Setting the Output File Name                            76
    Customizing                                                     77
        Descriptions of the Parameters                              77
        File Load Parameters                                        77
        Startup Parameters                                          81
        How to Define Parameters                                    85
        Summary of Parameters                                       88
    Appendix                                                        89
        Using PC-Browse with Other Programs                         89
        About the Program's Author                                  89
        Licensing PC-Browse                                         89
        Glossary                                                    91

    What is PC-Browse?

    PC-Browse is a memory-resident program for IBM PC compatible computers
    that helps you find information in your files. In its most basic form,
    it searches a file (or a number of files) for specific text. It uses
    about 60K of memory; or 3K if you put it into EMS memory.

    You can pop up a PC-Browse window over your application program, enter
    the name of a file to search and the text you want to find, and press
    the search key. PC-Browse quickly finds and displays the information
    you seek. Press the search key again to continue searching until it
    finds all occurrences of the text. You can paste information into your
    application program, copy it to a file, or print it. PC-Browse offers
    some "navigational" tools, or place markers, so you can quickly move
    back and forth between pages of text.

    PC-Browse offers a second level of search features, used with easy-to-
    build PC-Browse application files. First you can do a linear search for
    a keyword in a file, which is a word defined by special characters.
    Second, you can do a much faster lookup search in a file whose keywords
    are in alphabetic or numeric order. Finally, you can trigger either
    kind of search from a cross-reference at one place to a keyword at
    another place, in the same file or another file. This link ability
    gives PC-Browse a hypertext quality.

    Some applications for PC-Browse:

    *  Create pop up on-line help for a custom application.
    *  Look-up customer information while you're doing something else.
    *  Find a lost memo when all you remember is a word or two from it.
    *  Make catalog and pricing information quickly available online.
    *  Pop up your company procedures manual.

    PC-Browse is a brand new product. As with version 1.00 of any product,
    be extra careful. We have tested PC-Browse extensively, but just to be
    on the safe side:

    1. Save your application file before you bring up PC-Browse.
    2. Use extra caution when using PC-Browse with EMS memory (/E switch).

    On the other hand, don't hesitate to search for or look at any file
    with PC-Browse. Because it doesn't write to the file, there is no
    chance of harming your file.

    Finally, we'd really appreciate your ideas and suggestions for new
    features or changes. We'd also like to know how PC-Browse helps you get
    your work done. Write to us at:

                            Quicksoft - Browse Ideas
                             219 First Ave N. #224
                               Seattle, WA  98109

                                      - 5 - 
    About this User's Guide

    This Guide is divided into seven main sections:

    The Installation section shows how to put PC-Browse on your computer.

    The Tutorial guides you through PC-Browse, giving you hands-on
    experience with the sample files included on the PC-Browse diskette.

    The Suggested Uses section presents several sample applications of
    PC-Browse, emphasizing the lookup search.

    In How to Build PC-Browse Files you learn how to build application
    files, using the lookup search, the linear search, and cross-
    referencing.

    The Reference section contains definitive information on every
    PC-Browse operation.

    The Customizing section gives detailed instructions on adapting
    PC-Browse to your files and preferences.

    Finally, the Appendix contains a glossary and special PC-Browse
    information.


    Manual Terminology and Notation

    *  The notation <Enter> means you should press the Enter or Return key.

    *  This manual uses abbreviations for some keys. These are:

       Shf    The Shift key
       Ctl    The Ctrl key
       Bksp   The Back Space key
       Grey+  The grey-colored + (plus) key at the right of your keyboard.
       Grey-  The grey-colored - (minus) key at the right of your keyboard.

    *  Text that you should type is often surrounded by double quote marks.
       For instance, if the instructions tell you to type "A:", type only
       A: and not the quotes.

    *  If a command requires that you press a combination of keys
       simultaneously, they are shown as a unit. For instance, Shf Ctl F1
       means press and hold the Shift key and the Ctrl key and while
       holding them down press the F1 key.

    *  If a command requires pressing a sequence of keys, they are shown
       following each other, separated by the word "then". For instance, F9
       then Grey+ means press the F9 key, then release it and press the
       Grey+ key.

                                      - 6 - 
    *  Since most printers are unable to print the entire extended ASCII
       character set (0 to 31 and 128 to 255) this on-disk version of the
       manual does not contain any.  These characters are described or
       represented by other printable characters.  The printed version of
       this manual does contain them, as do most printer manuals.

    Installing PC-Browse

    The following instructions assume you have some familiarity with your
    computer and DOS. If you are unfamiliar with terms such as "default
    drive," "file name," "subdirectories,"  or "path", or with basic DOS
    commands such as COPY and FORMAT, you may want to review your PC-Write
    or DOS manual before installing PC-Browse.

    PC-Browse comes on two 5 1/4 inch diskettes or one 3 1/2 inch diskette.
    The Program diskette contains the PC-Browse program plus some
    documentation and sample application files:

    GO.BAT      Types the next file, READ.ME.
    READ.ME     Text file with any last minute release information.
    BR.EXE      PC-Browse program; the only file you need to use PC-Browse.
    BR.HLP      PC-Browse help file (has links to BTUT.BRS and BREF.BRS).
    BTUT.BRS    PC-Browse on-line tutorial (used with BR.HLP).
    BREF.BRS    PC-Browse on-line reference (used with BR.HLP).
    BRxxx.DEF   Various control files to set alternate color combinations.
    BRDEF.LST   Describes all the BRxxx.DEF files.
    AREACODE    Area code and city listings, explores linking concepts.
    MISUSED     Commonly misused words, explores finding the word at the
                cursor.
    HAMLET      Heavily cross-referenced "To be or not to be" hypertext
                example.
    QUARTO      Subsidiary file used by the HAMLET application.
    GLOSSARY    Subsidiary file used by the HAMLET application.
    DECISION    Decision-tree application that shows how to create online-
                help.
    SAILBOAT    A parts list for a sailboat that shows the lookup search.
    MENU        A menuing application that launches other programs.
    CATALET     Text file used with the MENU application.
    CREDLET     Text file used with the MENU application.
    PCWRHELP    Text file used with the MENU application.
    ADDRESS     An address "book" that shows the PC-Browse paste feature.
    PARTTEM     A PC-Write merge template used in building a lookup file.
    PARTSRT     A sorted parts-list for use with PARTTEM.
    SUPPLIER    A cross-referenced listing to demonstrate the index page.

    The Reference diskette contains PC-Browse documentation. The GO command
    on this disk types the instructions for using it. The full PC-Browse
    manual is in files BR1.DOC, BR2.DOC, BR3.DOC, and BR4.DOC. You can
    print the manual with a DOS command like:

    COPY BR?.DOC PRN   <Enter>

                                      - 7 - 
    To install PC-Browse on a hard disk system:

    1. Choose or create a directory on your hard disk to be your PC-Browse
       work directory. Make it the default directory. You can install
       PC-Browse either in an existing directory (with your PC-Write files,
       for example) or in a directory of its own. To create a new directory
       to use PC-Browse and make it the default, at the DOS prompt type:

       MKDIR drive:\directory   <Enter>
       CHDIR drive:\directory   <Enter>

       where "drive" is the letter of your hard drive and "directory" is
       the name you want. For example, for a subdirectory called PCBR on
       your C drive, type:

       MKDIR C:\PCBR  <Enter>
       CHDIR C:\PCBR  <Enter>

       Move ahead to "To continue installing PC-Browse:", below.

    To install PC-Browse on a two-floppy-drive system:

    1. Select a blank, formatted diskette. Label it "PC-Browse Work Disk".
       Place it in the B drive, and make B the default drive.

    To continue installing PC-Browse:

    2. Place your original PC-Browse Program diskette in drive A. Copy the
       PC-Browse files to your work diskette or directory by typing:

       COPY A:*.*   <Enter>

    3. Decide if you want the full plain text manual. The PC-Browse
       Reference diskette contains the full PC-Browse manual in plain text
       form.  If you want these files, replace the diskette in drive A with
       the PC-Browse Reference diskette and type:

       COPY A:*.*   <Enter>

    4. Add a line to your AUTOEXEC.BAT file so PC-Browse can find its Help
       file. To use PC-Browse from any directory and have PC-Browse help
       available, add this line to your AUTOEXEC.BAT file (where
       drive:\directory is the same as above):

       SET PCBROWSE=drive:\directory

    5. That's it. Remove your original PC-Browse diskettes and store in a
       safe place.




                                      - 8 - 
    PC-Browse Tutorial


    First, A Word for People Who Don't Read Manuals

    What's that? You never read manuals? Not even if we say, "Pretty
    please?" Aw, c'mon, just the first two sections of the Tutorial. We
    promise they'll be short. Just skip the introduction and read the
    section What Does PC-Browse Do?  Then load PC-Browse and your favorite
    word processor (that's PC-Write, right?), and try the examples in the
    next section, Finding, Viewing, and Pasting Text.

    Many of the hints, suggestions, and sample uses described in this
    manual have come from people who tested early versions of the product
    as we developed it; we're grateful for their suggestions. In fact, we'd
    love to hear from you about how you're using PC-Browse; drop us a line
    at Quicksoft.


    Now, Back to the Tutorial

    Remember your first Swiss Army Knife? Remember looking at all those
    blades and gizmos, trying to figure out each one? Remember, too, how
    quickly it became indispensable?

    Sure, there were better knives if you needed to do some serious
    cutting, and real screwdrivers for assembling your bookshelves. But all
    of your "real" tools were bulky. There was the Swiss Army Knife, always
    ready to work for you when you needed to tighten a screw, or cut a
    loose thread. Likewise, PC-Browse is a tool you can always keep on your
    computer, to help when you need it to look at or find a file, or get a
    directory.

    PC-Browse is both a familiar and a completely new type of product.

    You've already used many of its functions. Pop-up programs (or TSRs)
    have been around for years. There are a number of find-text-on-my-disk
    utilities. You can use any word processor to view text files and
    extract portions of them for further use; even hypertext, or cross-
    referenced on-screen information, is used for on-line help in a few
    products. In some ways, there's little new in PC-Browse.

    What is new is that PC-Browse combines these concepts, with a few more,
    into a handy Swiss Army Knife utility. As with any product, there are
    two steps to learning it: first, figuring out what it does and second,
    discovering how to do it. In this tutorial, you'll learn the "what" and
    the "how."

    This tutorial is divided into the following topics:

    *   What Does PC-Browse Do?
        An overview of the capabilities of your new Swiss Army Knife.
                                     - 9 - 
    *   Finding, Viewing, and Pasting Text.
        How to use PC-Browse with the text files already on your disk.

    *   Using PC-Browse Applications.
        A view of more interesting application files, along with an
        introduction to cross-referenced material (hypertext).

    *   Developing Your Own PC-Browse Applications.
        How to develop PC-Browse applications for your own use or for
        distribution to other folks.


    What Does PC-Browse Do?

    In this tutorial, we'll look at some problems you could solve with
    PC-Browse:

    1.  How can I find the memo on restructuring I wrote 6 months ago?
         Pop-up PC-Browse and tell it to search the whole disk for, say,
         "restruct." It will quickly find each file containing the search
         text, and show you that text in context!  A single keystroke moves
         from one reference to the next. You can even use multiple windows
         to keep track of different references.

    2.  What's Mr. Walton's address?
         If you're typing a letter to him, put the cursor on his name and
         pop up PC-Browse to jump to his page in your address file.
         PC-Browse can even paste the address right into your letter.

    3.  What's the area code for El Paso?
         Simply pop-up PC-Browse's area code application and ask it to find
         El Paso.

    4.  Is it correct to say, "What's the affect of this decision?"
         With our sample misused-words application, just put the cursor on
         "affect" and press the hot key. You'll see how to use "affect" and
         "effect" correctly.

    5.  What do we charge for part #73241?
         Pop up PC-Browse with your parts list, type in the part number,
         and you can look it up in a flash! It takes only a few seconds to
         look up any of thousands of parts.

    6.  How do I add online help to an application or product designed
        without it?
         You can create a PC-Browse file with an index of help topics on
         the first page. A user needing help just pops up PC-Browse, uses
         the arrow or tab keys to select a topic, and jumps right to it.




                                    - 10 - 
    7.  Could I do that with an online procedures manual?
         Of course. You can use PC-Browse's cross-referencing feature
         (hypertext) to let users explore company procedures and decision-
         making policies in as much detail as necessary.

    We'll answer all seven of these questions in greater detail at the end
    of the tutorial.


    Finding, Viewing, and Pasting Text

    We suggest that you read this section at your computer, with PC-Browse
    and a word processing program loaded. It takes only a few minutes to
    copy PC-Browse to a disk and try out the dozen or so main commands.


    Loading PC-Browse:

    1. If you haven't installed PC-Browse on your computer, just copy the
       following files from your PC-Browse Program diskette to a work disk
       (if you have a hard disk, put them in a new subdirectory such as
       \PCBR):

             BR.EXE    ADDRESS     DECISION    HAMLET    QUARTO
             BR.HLP    AREACODE    GLOSSARY    MISUSED   SAILBOAT

    2. Load PC-Browse from the DOS prompt by typing:

       BR  <Enter>

       If you have a full-color monitor, instead type:

       BR /C  <Enter>

    You'll see the copyright screen, and then the DOS prompt.

    3. Now load your favorite word processor, and create a "scratch" file
       for editing.

    This file is only for practice, as you explore ways in which PC-Browse
    and other applications can communicate. With a hard disk, start your
    word processor from the PC-Browse subdirectory if possible (or else
    give the PC-Browse subdirectory path whenever you enter PC-Browse file
    names during the tutorial).

    Remarks
    Like most pop-up programs, PC-Browse works only with text-based
    programs such as PC-Write, Word Perfect, WordStar, Microsoft Word in
    text mode, etc. PC-Browse won't pop up over Microsoft Word in graphics
    mode, other graphic programs, or Windows.


                                    - 11 - 
    Popping Up PC-Browse:

    You should be in your word processor, editing a practice file.

    1. Hold down the Shift and Ctrl keys, and press the F1 key.

       We'll refer to this process as "Press Shf Ctl F1". This is the main
       hot key that pops-up PC-Browse "over" whatever program you're using.
       PC-Browse covers the top part of your screen. (If you need to change
       this hot key because another of your programs uses Shf Ctl F1, see
       the Customizing section.) The initial screen is:

    +File:------------------------------Find:cursorword-------------------+
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    +Esc:Exit  F1:Help  F6:File  F9:Find----------------------------------+

    2. To return to your application, simply press the Esc key.

       Your word processor's screen is restored. Now press Shf Ctl F1 again
       to pop PC-Browse back up.

    The basic operation in PC-Browse is file viewing. You can view one file
    while you're working in another. Even with a multiple-window word
    processor such as PC-Write or Microsoft Word, it's easier to keep a
    file you're referring to in PC-Browse and pop it up when you need it.
    If you're in Lotus 123 and need to review the memo that describes your
    spreadsheet, PC-Browse may be the only way to go.

    Viewing a File with PC-Browse:

    1. Press F6 to select a file.

    2. Type the file name "ADDRESS" and press the Enter key.

       PC-Browse quickly loads the file and displays the first page.

    3. Browse through the file by pressing the PgDn or PgUp keys.

       These keys scroll the file one line at a time, within a page. To
       scroll faster, a whole window at a time and across pages, press
       Shf PgDn or Shf PgUp. If you reach the start or end of the file,
       PC-Browse beeps. Little triangles just above the lower right corner
       point up or down to show you which direction you can scroll.
                                    - 12 - 
    4. Look at the major PC-Browse functions on the menu at the bottom of
       the window:

    |                                                                     |
    +Esc:Exit F1:Help F4:Backtrack F6:File F7:Paste F9:Find F10:First-page+

    5. Press and hold the Shift key by itself to view another group of
       functions:

    |                                                                     |
    +Esc:Unload       F4:View-locations    F7:Print ----------PgUp/Dn:more+

       Now you've seen both of the PC-Browse menus. This will be easy.
       There are a few more function key operations, not on these menus.
       You can use PC-Browse with an alternate pair of menus which show all
       function keys but with more abbreviated labels (see: Customizing).

    6. Release the shift key to see the Main Menu again.

    7. Press the F1 key to see on-line help.

       You can use PgDn, Shf PgDn, and so on to browse through the help
       screens. When you're done, press the Esc key (or the F1 key) to
       return to PC-Browse.

    Let's search for Spencer Katt's address in this file.

    Searching for Text in One File:

    1. Press the F9 key to type the Find text. Type:

       katt

       The Find text is the text you're asking PC-Browse to search for.
       We're searching a single file, ADDRESS, as you can see on the top
       line of the window.

    2. Press the Grey+ key to begin the search.

       You don't have to press the Enter key after typing the Find text. If
       you do press Enter after typing the Find (or the File) text, either
       Grey+ or a second Enter starts the search. The Grey+ key is the
       darker + key on the right side of the keyboard.

       PC-Browse finds the right address immediately. Of course, this is a
       small file, but it can search files quite rapidly, even on a basic
       PC or XT. Mr. Katt's address is on the screen, and the word "Katt"
       is highlighted.

       What if this is not the Katt you're looking for? Press Grey+ or
       Enter to continue the search. Since this is the only Katt in the
       ADDRESS file, PC-Browse will beep and tell you it couldn't find it.
                                    - 13 - 
    PC-Browse can interact with your host application in two ways. First,
    when you pop it up, the word at the cursor (if any) automatically
    becomes the Find text. Second, you can paste selected text directly
    into your application, just as if you had typed it yourself.

    3. Press Esc to return to your word processor.

    4. Enter "Walton" on a line in your practice file. Leave the cursor
       just after the "n".

    5. Try to remember the address.  Scratch your head, since you don't
       know it, unless you've done the Tutorial before!

    6. Press Shf Ctl F1 to pop-up PC-Browse.  The Find text will be the
       name "walton".

    7. Press Enter or Grey+ to search. PC-Browse finds "Walton" this time.

    Let's paste this address into your word-processing practice file.

    Pasting Text Into Another Program:

    1. Press Esc to return to your word processor, and put the cursor at a
       place in the document to insert the address. Press Shf Ctl F1 to
       pop-up PC-Browse again.

    2. Press the F7 key. The Paste Menu appears:

    |                                                                     |
    +Esc:Cancel F4:Start mark F5:Marked text F6:Filename F7:Window F8:Page+

    3. Use the Up and Down Arrow keys to move the cursor to the first line
       of the address.

    4. Press the F4 key to start marking lines for pasting.

    5. Use the Down Arrow key to extend the marked (highlighted) area
       through the last line of the address.

       If you didn't start with the right line, simply move the cursor to
       the correct first line and press F4 again to restart the marking
       process.










                                    - 14 - 
    +File:address.sam------------------Find:walton------------------------+
    |                                                                     |
    |Jack Walton                                                          |
    |1139 73rd Place                                                      |
    |Seattle, WA                                                          |
    |                                                                     |
    |Victoria I. Warshawski                                               |
    |Lake Front Drive                                                     |
    |Chicago, IL                                                          |
    |                                                                     |
    |                                                                     |
    +Esc:Cancel F4:Start mark F5:Marked text F6:Filename F7:Window F8:Page+

    6. Press the F5 key to tell PC-Browse that you want to paste the marked
       lines.

       PC-Browse asks when you want to paste the text:

    |                                                                     |
    +Esc:Cancel paste F9:Paste now F10:Paste when Paste-hotkey pressed----+

       Your word-processor's cursor (since it's the host application, this
       cursor is not visible) was just after the "n" in "Walton", but you
       want to paste it to the line below. Press F10 to tell PC-Browse you
       will press the Shf Ctl F7 key to paste these lines into your
       application. (You could press F9 to paste them after "Walton", and
       put it on the next line with your word processor.) Pressing F10 (or
       F9) returns to your word processor.

    7. Move to the next line in your word processing file, make sure you're
       in "push" or "insert" mode, and press the Shf Ctl F7 hot key. The
       address is pasted into your file.

       You can also print text if your printer is hooked up (Shf F7 on the
       Main Menu), or print text to a file (Shf F6 to set the file name,
       then Shf F7). See Printing and Pasting in the Reference section for
       more information.

    We knew where to look for Mr. Walton's address. What if we don't know
    what file it's in?

    Searching for Text in Many Files:

    1. Press Shf Ctl F1 to pop-up PC-Browse again.

       This time, we'll search the entire directory (or diskette) for
       references to "walton".

    2. Press F6 to type a file name. Type *.* and press Enter.

       The "*.*" says to search all files in the current directory. These
       are the same wild card characters you use with DOS. You could type
                                    - 15 - 
       "?." for all one-character file names or "*.doc" for files with .DOC
       extensions. Since we haven't specified a particular file and haven't
       told PC-Browse to search yet, no file is loaded into the PC-Browse
       window.

    3. Press F9 to type the Find text. Type "walton" and press Grey+ to
       begin the search.

       This multi-file search can present the results to you in two ways:
       showing you each file in turn, or showing you a list of files by
       name. Now PC-Browse asks which you would like, with the following
       prompt:

    |                                                                     |
    +Esc:Cancel F9:View each match as found F10:Collect matches and list--+

    4. Press F9 to see each file containing "walton".

       PC-Browse quickly loads and scans each file in turn, looking for the
       Find text. As it scans a file, it displays the file name at the top
       of the window. When it finds your text, it displays the file,
       highlighting the text found. If this is not the reference you were
       looking for, you could press Enter (or Grey+) again to keep
       searching. Don't do this quite yet, however.

    Before we move to the next section of the Tutorial, we'll describe two
    other features  related to finding text, with suggestions for exploring
    these features on your own.

    Exploring on Your Own:

    First, suppose you're not sure this is the "walton" you're looking for.
    You could search for another with the Grey+ or Enter key, but how would
    you get back to this one if you wanted to? PC-Browse offers two ways to
    do this. The first method is to open another PC-Browse window. The
    second method uses the automatic location list.

    1. Press F2 to Open another window.

       There's room on your screen for two windows (you can set this; see
       Customizing). PC-Browse copies the current window to the bottom half
       of the screen, and all activity now occurs in this lower window. The
       upper window is "frozen" for now.

    2. Press Enter (or Grey+) to search again in the new window.

       PC-Browse first saves your place (location) in a list. In a few
       seconds you'll find another reference to "walton". Let's return to
       the first "walton" you found.



                                    - 16 - 
    3. Press F4 to return to the previous location.

       Even if that reference was in a different file, PC-Browse quickly
       switches back to the first one. It saves your "trail" back to where
       you started, if it can. When the list gets too long (about ten
       levels by default) it only saves the most recent locations.

    4. Return to the upper window by pressing Shf F2.

       This closes the lower window. The original text returns to the lower
       part of the screen.

    What if you want to search your entire hard disk for "walton"?

    5. Press F6, type "\*\*.*", and press Enter.

       The "\*\" represents all directories on the disk. We've extended the
       DOS asterisk convention a bit. Just as "\brs\*.*" tells PC-Browse to
       search all files in the BRS directory, "\*\*.*" tells PC-Browse to
       search all files in all directories.

       Press Enter again to start the search. You can also press Grey+
       right after typing the File text to start searching immediately.
       Since the PC-Browse directory, if you created one, is one of the
       last directories, it may take a while to reach the ADDRESS file.

       PC-Browse asks you to press F9 to see each file containing the
       search text, or F10 to see a list of all such files. If you have
       more than one disk drive, you can also search multiple drives. For
       example, "ce:\*\*.*" searches both drives C and E.


    Using PC-Browse Applications

    PC-Browse comes with a number of sample applications. Some are useful
    on their own; others simply help you explore the various tools of the
    PC-Browse Swiss Army Knife.

    We'll start with two "real" applications that you may find useful. Then
    we'll use some of the "demonstration" files to explore more features,
    such as hypertext. Finally, we'll look more closely at these files so
    you can learn how to design your own applications.

    1. If you haven't already loaded PC-Browse and then your word
       processor, please do so. Make sure you have a practice file loaded
       in your word processor.

    2. Pop-up PC-Browse by pressing Shf Ctl F1.

    3. Press F6, type the file name AREACODE, then press Enter.

    4. Press Ctl PgDn and Ctl PgUp to browse through the file page by page.
                                    - 17 - 
       Each page has an area code, the state and time zone for that area
       code, and a list of the major cities in that area. Since this file
       (like most PC-Browse oriented files) is divided into pages, you can
       look through it quickly with Ctl PgDn. In this file each page is
       shorter than the window, but that's not always the case. (You can
       look at a longer page with the scrolling keys PgUp and PgDn, but
       they don't skip across pages like the Ctl PgUp and Ctl PgDn keys.)

    What's the area code for El Paso?  We need to find El Paso in the
    AREACODE file.

  Finding an Area Code for a City:

    1. Press F9 and then type "El Paso".

       Previously, we used Grey+ to start a search. However, it searches
       from your current position in the file to the end. Since you may be
       in the middle of this file, we need to search from the top.

    2. Press F10 or Shf Grey+ from the Find prompt to search from the start
       of the file.

       PC-Browse finds El Paso and highlights it. Since the 915 area code
       covers two time zones, El Paso is noted specifically as being on
       Mountain Time.

    +File:areacode---------------------Find:El Paso-----------------------+
    |915                                                                  |
    |Texas <TX> (CST/MST)                                                 |
    |Abilene (CST), El Paso (MST), Midland  (CST), Odessa  (CST)          |
    |San Angelo  (CST), Sweetwater (CST)                                  |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    +Esc:Exit F1:Help F4:Backtrack F6:File F7:Paste F9:Find F10:First-page+

    Let's try a harder city to spell, such as Hamtramck (near Detroit).
    Luckily, we don't have to spell the whole word.

    3. Press F9, type "hamt", then press F10 to search from the beginning.

       PC-Browse finds whatever text you type; you're not limited to whole
       words. You can also use PC-Browse wild cards in the Find text, as
       described in the Reference section under Using Wild Cards in a
       Search.

       Note that a city in this area code, Warren, has the same name as a
       city in another state. The city name is followed by a
       cross-reference to this other state, with the state abbreviation in
       a different color (depending on your monitor type).
                                    - 18 - 
    4. Press Tab to highlight the cross-reference (to Ohio).

       The Find text changes to the text you highlighted, surrounded by a
       pair of "funny characters." These characters indicate a cross-
       reference, or hypertext link.

    5. The Find text is now "oh" surrounded by PC-Write's bold face
       characters (code 2). Press Enter to search for it.

       PC-Browse finds the first page in the file with OH as the "page
       title." You can now check the area code for Warren, OH rather than
       Warren, MI.

    Automatic cross-referencing is the heart of the hypertext concept. You
    select text that is specially marked, and then at the press of a key
    you're whisked off to the material referenced by that text.

    In PC-Browse terminology, the "OH" that you tabbed to is called the
    trigger keyword, because the code 2 characters trigger a search for
    other material.  When you pressed Enter, PC-Browse jumped to the target
    keyword of that search, the <OH> on the Ohio page. This type of
    searching is called keyword searching.

    6. Press F4 to return to the page you started the cross-reference from.

       As you jump around a cross-referenced document or group of
       documents, pursuing ideas and connections, you can always work your
       way back up the trail you followed.

    Checking a Commonly Misused Word:

    1. Press F6, type the PC-Browse application file name MISUSED, then
       press Enter.

       This file contains about 100 often misused words, listed in an index
       in the first page. Each word in this list is the trigger to a page
       of information about correct and incorrect usage of the word. To get
       back to this first page at any time, press F10 (or Shf Grey+).

    2. Use Tab and Shf Tab to select words. The Find text reflects each
       selection.

       Since this list is arranged as a table, you can also use the four
       Arrow (cursor) keys to move about it. When the trigger words are not
       in nicely lined-up rows and columns, only Tab and Shf Tab select
       them.

    Let's assume you're writing about Swiss Army Knives and "Their Affect
    on Software Utilities". Should you use "Effect" instead?



                                    - 19 - 
    3. Select (with Tab or Arrows) affect (or effect) and press Enter.

       PC-Browse displays a page of information about the use of the words
       "affect" and "effect". A little reading, and you discover that the
       correct word here is "effect."

    You can also conduct a keyword search by typing in a word directly.

    4. Press F9, type "alter", and then (instead of pressing Enter) press
       F3. This converts the Find text to a trigger keyword and does a
       keyword search from the start of the file.

    Of course, that's a lot of keys to check one word. Now let's see how to
    call PC-Browse directly from your application and check a word with
    just one keystroke.

    5. Press Esc to return to your word processing practice file.

       Assume that you're typing along when you're confronted by the
       devastating question of using "it's" or "its" in a sentence. You
       could pop up PC-Browse, press F9, type the word, and press F3, or
       you could pop up PC-Browse, point to "its" in the index at the start
       of the file, and press Enter. But there's an easier way.

    6. Type "its" (or "it's") in your word processing practice file. With the
       cursor still on or just after the word, press Shf Ctl F3.

       PC-Browse pops up and automatically jumps to the page where "its"
       and "it's" are discussed. The Shf Ctl F3 hot key is simply a
       shortcut to look something up from your word processor or other
       program.


    More Advanced Applications

    From here on, the Tutorial is addressed to users who might want to
    create their own PC-Browse files, whether for their own use or for use
    by others. If this doesn't describe you, here's a good point to leave
    the Tutorial and simply begin using PC-Browse. As you work further with
    the program, feel free to turn to the Reference section of the manual
    to learn more about the features we've introduced here.

    "Hyper-Documents" That Span More Than One File:

    1. Load the sample PC-Browse file HAMLET. Use the Tab key to mark the
       trigger keyword "To be..." on the first page, and then press Enter
       to link to the famous speech.

       This file contains a heavily annotated version of the most famous
       passage in English-language theatre. Normally when you read
       Shakespeare, the footnotes are distracting, pulling your eye to the
       bottom of the page and making it hard to concentrate. Most notes
                                    - 20 - 
       contain only simple definitions of obscure words; notes about the
       content refer to essays at the back of the book, so you have to flip
       back and forth.

       Hypertext solves these problems. HAMLET is simply a neutral example
       of some heavily cross-referenced material. It could be a procedures
       manual or employee handbook, on-line help specific to a Lotus
       payroll application, or a genealogy record.

    2. Use Shf PgDn to browse through the speech a bit. When you're done,
       use Shf Grey+ or F10 to return to the first page, and then Tab to
       the reference "Quarto Text".  It will appear in the Find text prompt
       surrounded by the trigger delimiters, code 22 and code 20.

       The so-called First Quarto is the first published version of
       Shakespeare's Hamlet; it's different, to say the least. Note the
       word (a file name) in brackets after the reference. This means the
       cross-reference is in another file. The Find text doesn't show the
       other file name, but PC-Browse keeps track of it.

    +File:hamlet-----------------------Find: quarto text -----------------+
    |of the play.                                                         |
    |                                                                     |
    |    The text given here of "To be, or not to be" is from the First   |
    |Folio; the few significant differences from the later Quartos are    |
    |noted in the cross-references.                                       |
    |                                                                     |
    |    This famous speech also exists in the First Quarto in a much     |
    |different form (see Quarto Text [quarto] for comparison.)            |
    |                                                                     |
    |                     (Press F4 to return to previous view)           |
    |                                                                     |
    +Esc:Exit F1:Help F4:Backtrack F6:File F7:Paste F9:Find F10:First-page+

    3. Press Enter to find the target of the cross-reference "Quarto Text".

       PC-Browse automatically switches files. The file name on the top
       line changes.

    4. Tab to the "To be..." trigger, then press Enter to view this speech
       as it appeared in 1602. Now Tab to the note on "Marry" to the right
       of the text.

       The "Marry" trigger also cross-references to another file, but here
       you can't see the file name. When you build a PC-Browse file, you
       decide whether a cross-reference shows the file name or not. Here it
       would have been distracting. In fact, we could have made "marry" in
       the text itself the trigger, once again hiding the file name.

    5. Press Enter to follow the "Marry" cross-reference into the GLOSSARY
       file.

                                    - 21 - 
    6. Press F4 a few times, backtracking along your reference trail and
       eventually returning to the HAMLET file.

       If you did some exploring already, the location list may have filled
       up, so you may not get all the way back. Explore this file on your
       own, tracing some of the cross-reference trails between the
       different files.

    "Hyper-Fast" Searching with Lookup Trigger Keywords:

    So far in this Tutorial, we've been looking at normal text searching
    and one type of PC-Browse keyword search, linear keyword searching.
    Here we'll look at the other type of keyword search, lookup keyword
    searching.

    A lookup search is extremely fast; it can search a two megabyte file in
    under 2 seconds on a PC AT. A file designed for lookup searching has
    several special requirements:  the keywords must be unique, and the
    pages in the file must be sorted by keyword. Lookup files are usually
    created from a database program. Common uses include parts lists,
    customer names, and so on.

    1. Load the PC-Browse file SAILBOAT.

       We have a customer who ordered part 9047; we need to know how much
       it costs.

    2. Press F9 and type "9047" as the Find text. Press F2 to do a lookup
       search.

       PC-Browse places special characters around the Find text to turn it
       into a lookup trigger. A lookup search isn't noticeably faster on a
       short file such as SAILBOAT. By the time your parts file grows to
       100K or so, the speed difference will be obvious.

       Cross-references within the file can also trigger a lookup search.
       There's one for the part we're looking at, a "Barberhauler Bullet
       Block w/Becket." It's actually the special trigger characters, not
       the F2 or F3 key, that indicate a lookup search is appropriate. This
       parts list is designed for lookup by part number, but it could have
       used a part name instead. Your database program can create a lookup
       file for each case.

       You could also search for a part by pressing F9, typing the part
       number, and pressing F3 to do a linear keyword search. This would
       not search as quickly, however. You could even press F9, type the
       part number, and press Grey+ to just search for the number as normal
       text. This is as slow as a linear search, and it would also find the
       same number within a phone number or address, not just as a part
       number.


                                    - 22 - 
    As you see, from the user's perspective lookup keyword searching is
    almost the same as linear keyword searching. The differences are
    internal, within the file. In the next section, we'll examine these
    differences.


    Developing Your Own PC-Browse Applications

    In this last section, we'll see how PC-Browse files are created by
    examining them "side-by-side" in your word processor and in PC-Browse.

    To follow along in this section, you'll need a word processor that can
    display the ASCII characters between 1 and 31, often called control
    codes. PC-Write is ideal; however, the non-document mode of WordStar
    also works, as well as WordPerfect, Microsoft Word, and most other word
    processors in their "no-format" modes. You can build PC-Browse files
    with any word processor or editor that can produce ASCII text; you
    don't have to use control codes. The files we'll examine were built
    using these control codes. PC-Browse files that use control codes are
    cleaner looking, since the control codes are invisible.

    A Simple PC-Browse File: AREACODE

    1. If you haven't already loaded PC-Browse and then your word
       processor, please do so.

       Follow the instructions in the first part of this Tutorial, under
       Loading PC-Browse.

    2. Load the file AREACODE into your word processor. Pop up PC-Browse
       (Shf Ctl F1) and then press F6 to load AREACODE there, too.

       Some word processors may keep a file open, preventing other programs
       from using it. PC-Browse loads a file in read-only mode, but your
       word processor may still have it locked out. In this case, return to
       DOS and make copies of the files AREACODE, MISUSED, HAMLET, and
       SAILBOAT under alternate names. Now you can look at one copy of the
       file in your word processor and another copy in PC-Browse.

    3. Press Esc from PC-Browse to return to your word processor. Note the
       form feeds separating each PC-Browse page, shown as a pair of
       characters, code 12 and 15, or "^L".

       Information in a PC-Browse file should be divided into "bite-sized"
       nuggets for easy digestion by users. PC-Browse can handle pages of
       any size, but 5 to 20 lines, or one window full, is a good size for
       most application pages. Consider breaking up longer material into
       two or more pages, connected with hypertext links.

    4. In your word processor, go to the first line of the file and scroll
       horizontally to the end (In PC-Write, press End. In WordStar, press
       Ctrl-Q D.) Note the material in brackets that begins [BR=.
                                    - 23 - 
       The text in brackets defines the file characteristics for PC-Browse.
       It looks for [BR= when it loads a file, in the first 160 characters
       of the first line. We place it out beyond character 80 in our files
       so that it doesn't show up on the screen and confuse users. The /I,
       /J, and /K parameters define the characters that delimit trigger and
       target keywords in this file.

       The /I part gives the first and last character of a target keyword.
       The target keyword is the text sought during a keyword search
       (either a linear search or a lookup search). The /I:60.62 says a
       target keyword is any text that begins with character 60 ( < ) and
       ends with character 62 ( > ). These characters are called
       Delimiters. Note the "<NJ>" on the second line of the file; since
       it's surrounded by angle brackets, "NJ" is a target in this file.
       The target delimiters can be different in each application; that's
       why there can be a [BR=  line in each application file.

       The /J part gives the delimiters for a linear search-trigger
       keyword. Here, /J:2.2 says that a linear trigger is any text with a
       character 2 on both sides of it. (In PC-Write, this appears as the
       bold face font; in WordStar, as "^B".) On the fifth line of the
       file, note the two cross-references, "DE" and "OH", surrounded by
       these symbols. PC-Browse does not display characters whose ASCII
       value is less than 32. Therefore they make ideal characters to use
       for delimiting keywords, since they don't interfere with the text.

       The /K part would give the delimiter for a lookup search-trigger
       keyword. Here, /K is undefined, since this file isn't designed for
       lookup searching.

       The various keyword delimiters highlight their keyword on screen.
       Characters less than 32 that aren't used as delimiters also
       highlight text on the screen, making them valuable for emphasizing
       words. You can control both kinds of highlighting (see Customizing).
       You'll see an example of this when we look at MISUSED.

    5. Pop up PC-Browse to see how this file appears in a PC-Browse window.

       Skip back and forth through the file in PC-Browse and in your word
       processor to see how it looks in PC-Browse and what's really in the
       file.

    PC-Browse Index Page: MISUSED

    1. Load the file MISUSED into your word processor. Pop up PC-Browse and
       load MISUSED there, too. In your word processor, find [BR= on the
       first line of the file.

       The target and trigger keyword delimiters are different here from
       those used in AREACODE. Also, neither the target nor the trigger
       delimiters for this file are visible in PC-Browse, because both are
       less than 32.
                                    - 24 - 
    2. Scroll your word processor file down about 20 lines until you come
       to the page titled "ACCEPT versus EXCEPT". Pop up PC-Browse and
       press Ctl PgDn from the first page to find this page, too; then
       press Esc to return to the word processor.

       This page has target keyword delimiters around ACCEPT and EXCEPT at
       the top as well as general-emphasis "font" characters around the
       words as used in a sentence. The in-sentence words are neither
       triggers nor targets; they are just emphasized with the PC-Write
       bold font, character 2. Some monitors show this emphasis
       highlighting better than others; pop up PC-Browse briefly to see how
       it appears on yours.

       Don't be confused by the fact that we used character 2 as a trigger
       keyword delimiter in the file AREACODE. Each PC-Browse file can have
       the same delimiters, or every file can use different ones. You can
       develop a style and stick to it for your applications; we've mixed
       and matched in ours for demonstration purposes.

    3. Return to the start of the file in both PC-Browse and your word
       processor. In PC-Browse, all of the columns line up; in PC-Write and
       some other word processors, they also line up.

    The trigger keywords must line up in columns to be selected in
    PC-Browse with the up and down Arrow keys as well as the Tab key. If
    there is an index page, it is normally the first page of the file, but
    a row-and-column index works on any page.

    Cross-References to Other Files: HAMLET

    1. Load HAMLET into your word processor. Pop up PC-Browse and load
       HAMLET there, too. In your word processor, find the [BR= in the
       first line.

       This file uses visible delimiters for target keywords (characters 60
       and 62, the angle brackets) and hidden delimiters for the linear
       trigger keywords (characters 22 and 20).

    2. In your word processor, look at the third paragraph. Note that the
       trigger keyword "Quarto Text" is followed by a word in brackets.

       The word in brackets is the name of the file that will be loaded and
       searched when the user Tabs to this trigger and presses Enter to
       follow the link.

       This cross-reference file name in brackets is visible in PC-Browse.
       Pop up PC-Browse to confirm this. A bracketed file name must follow
       the trigger immediately (one space between them is allowed, to keep
       the screen from looking cluttered).



                                    - 25 - 
    3. In your word processor, scroll down about 30 lines to the middle of
       the soliloquy. Find the trigger keyword "Rub" followed by a word in
       brackets.

       This is also the name of the file to load when the user Tabs to this
       trigger and presses Enter. Because the file name starts with a
       question mark, it is invisible in PC-Browse. Pop up PC-Browse to
       confirm this.

    4. The triggers in parentheses to the right of the soliloquy may not
       line up in your word processor. Pop up PC-Browse briefly and press
       Shf PgDn to reach this part of the file; confirm that they are
       aligned in PC-Browse.

       PC-Write font characters (values 0 to 31) are not displayed in
       PC-Browse; therefore, they're ignored in counting column positions
       for alignment. The line with the "Rub" note also has a trigger in
       the text of the soliloquy. Therefore the "Rub" note may appear to
       the right of the "Coil" note a few lines below in your word
       processor, since there are no other triggers on the "Coil" line.

  Lookup-Search Files: SAILBOAT

    1. Load the file SAILBOAT into your word processor. Pop up PC-Browse
       and load SAILBOAT there, too. In your word processor, find the
       "[BR=" text.

       This file uses a visible start-delimiter for targets (character 35,
       #) and hidden delimiters for the lookup triggers (characters 22 and
       20). This time there is no linear search-trigger, only a lookup
       search-trigger.

       The end-delimiter for target keywords in this file, character 8, has
       a special meaning to PC-Browse. It indicates that a target keyword
       is ended by any character that is not a letter or a number. So in
       this file any space, end-of-line, or other non-letter-or-number
       after the word or number marks the end of the target. In this file,
       the ending delimiter is usually the end-of-line.

       Here, too, character 2 is used for emphasis on part names and
       prices.

    2. Look at the second page of this file (part #1012, the shroud pin).

       In a lookup file, each page must contain exactly one target (1012 on
       this page). It can contain any other information you wish. The
       targets must also appear in ASCII-sort order (basically
       alphabetical, with numbers sorting ahead of letters). It is this
       ordering that makes lookup searching so fast even on huge files.



                                    - 26 - 
    Summary

    That's your guided tour of PC-Browse features. There are a number of
    features we haven't covered, such as more Hot Key shortcuts, search
    wild cards, printing information, and the many customization options.

    We started this Tutorial by asking a series of seven questions in the
    section "What does PC-Browse Do". Now we'll give the specific answers:

    1. How can I find the memo on restructuring I wrote 6 months ago?

       Pop up PC-Browse, press F6, type "\*\*.*", and press Enter. Then
       press F9, type "restruc", and press Grey+ then F9. If it's on your
       disk, PC-Browse will find it.

    2. What's Mr. Walton's address?

       Put the cursor on "Walton" in your word processor. Pop-up PC-Browse,
       press F6, and load the ADDRESS file. Press Enter or Grey+ to find
       the address. To paste in the address, press F7, move to the first
       line of the address, press F4, move to the last line, press F5, and
       then press F9.

    3. What's the area code for El Paso?

       Pop up PC-Browse and press F6 to load the AREACODE application. Then
       press F9, type  "El Paso", and press Grey+.

    4. Is it correct to say, "What's the affect of this decision?"

       Put the cursor on "affect", pop up PC-Browse, press F6, and load the
       application MISUSED; then press F9, then F3. Read the text of the
       page PC-Browse displays.

    5. What do we charge for part #9054?

       Load the SAILBOAT file, press F9, type "9054", and press F2 to do a
       lookup search for the part number.

    6. How do I add online help to an application or product designed
       without it?

       Cannibalize a copy of the MISUSED application. Build a table of
       contents of all the terms you think users might look under; set them
       up as keyword triggers to help-text pages, as they are in MISUSED.
       Even if a specific term isn't in the table, users can search for it
       by typing it at the Find prompt and pressing Enter. You could even
       build a series of sub-indexes; certain terms in the table of
       contents could link to another table with additional choices.



                                    - 27 - 
    7. Could I do that with an online procedures manual or decision tree?

       Adapt the sample DECISION file, "What To Do on the Weekend". This is
       a computerized decision tree for deciding what to do on a weekend in
       Seattle.

    8. Explore PC-Browse on your own. Modify our sample files to see how
       they work. Experiment.

       What do you mean, there wasn't a Question 8? Life always gives you a
       Question 8 -- "Where do I go from here?"









































                                    - 28 - 

```
{% endraw %}

## BR2.DOC

{% raw %}
```
    Suggested Applications

    In this chapter you will find some uses for PC-Browse in addition to
    those touched on earlier. We hope this will stimulate your own
    creativity and allow you to develop unique applications of your own.

    Dictionary

    You could build just a word list, or a true dictionary with
    definitions, parts of speech, hyphenation, and the like. If you sort
    the dictionary alphabetically, you can search it quickly with a lookup
    search. You can even trigger a lookup search of a word in the host
    document with the Shf Ctl F2 hot key. Cross references between words
    are easy to include. The dictionary acts like part of the application
    program you are working on.

    When you type a word into a document and want to verify its meaning,
    press Shf Ctl F2. The definition is displayed in the window. To paste
    the information into your document, press F7. You can also pop up
    PC-Browse with Shf Ctl F9, type the word into the Find text and press
    F2. When you are unsure of the spelling as well as the definition,
    search for just the part of the word you know, using a normal search
    with wild cards instead of a fast lookup Search.

    Some examples of dictionaries that you can build:
       Foreign Language dictionary
       Chemical Engineering dictionary
       Dictionary of Dept. of Education terminology
       Dictionary of terms used in The Dune Trilogy
       Accounting dictionary
       Parts dictionary
       Glossary


    PC-Write Page Layout Library

    If you find that most of the word processing documents you create
    follow a few given formats, you can build a library of format templates
    that can be pasted into a document when you create it. Each page of the
    library can be dedicated to a different page layout:  one for memos,
    one for monthly reports, one for letters, and so on. You can include
    standard text, such as your letterhead, as well as Guide lines and
    Ruler lines.

    To use a particular template, pop up PC-Browse and search for the
    corresponding page. Then use paste, F7, to insert the page layout
    information directly into your document.





                                    - 29 - 
    Political Party Platform

    You can assemble position papers, speeches, and other documentation
    together into a single file that outlines the candidate's (or party's)
    views on the issues. The file can be used by people who are on the
    phone or as a training tool for any campaign worker. It may also be an
    interesting tool to send to the press.

    A user pops up PC-Browse and is presented with a list of choices or
    general topics of interest. They simply highlight the topic they wish
    to learn about and press Enter. PC-Browse presents the information on
    that topic, or it can be broken down into subtopics. The user continues
    to step through the levels, moving from general towards specific.
    Information from one topic area can be cross referenced to another. For
    instance, one aspect of the education reform policy may include money
    for a drug education campaign. If the two topics are linked at this
    point, users can read about the drug program in brief and return to the
    specific information about educational reform.

    You could also use PC-Browse to do a political analysis of a city or
    county. Enter information about the elected officials, corporate board
    members, "Old-Boy" networks, and real estate owners and developers.
    Fill in cross-references based on current and prior relationships. Find
    out who's really important, and why.


    Family Tree

    You may think your family is already overly cross-referenced
    (especially during the holidays) but reading a family history can leave
    you flipping a lot of pages. The hypertext links that are created with
    PC-Browse make flipping "pages" much easier. You can save both
    genealogical information and your family history.

    Pop up PC-Browse and type in your Find text. That could be the name of
    a relative, a date, a city, or perhaps the old family home. Pressing
    Enter quickly whisks you off to that place in history. If there is a
    cross reference to another person or place you can highlight it with
    the Tab key and press Enter to move on. As you move through the
    branches of the tree, you can use the location list to quickly return
    to your starting point.

    Just as family members share common experiences, they share a page
    describing those experiences, because each member can have a link to
    the event. So your Great Grandmother will have a link to "Winter 1894"
    about surviving in the family home in South Dakota and so will each of
    her siblings. Now you can leave your family's branch of the tree and
    see how your Great, Great Aunts and Uncles fared after that terrible
    winter.



                                    - 30 - 
    Class Notes

    Notes taken during a lecture can be extremely useful. But often at the
    end of a semester, half of them are unreadable and the other half don't
    make sense. The only way to find anything is to read this scribble,
    line by line, from day one. By entering your notes into the computer
    every night (ok, once a week) you can clear up any inconsistencies
    before you forget the entire lecture. Then you can PC-Browse through
    them line by line, or search for specific words, phrases, or dates. The
    search and paste features will make that term paper a snap.

    If you feel adventurous you can build search triggers to link one piece
    of information with another, or perhaps link notes from another class
    in another file. Your class notes can be the foundation for a
    specialized dictionary or glossary useful in future courses. For some
    fields such as history or anatomy, cross references can be quite
    useful. "Oh, the tibia is linked to the fibula, the fibula is linked to
    the patella,...."

    Your only problem comes when you try to explain to your instructor that
    you can't take the test today because your dog ate your floppy disk.


    Telemarketing Script

    A telemarketing script can be formatted as a decision tree that walks
    the salesperson through the sales pitch. Again, the ability to be
    resident is an advantage, since you can pop up the script on top of
    another program, such as an order entry form. Since PC-Browse links the
    pieces of the script quickly and quietly, the customer doesn't wait
    while the salesperson pages through his or her notebook.

    The salesperson pops up PC-Browse with the Shf Ctl F10 hot key which
    automatically moves to the beginning of the script. As the conversation
    progresses, he or she need only use the Tab or Arrow keys and the Enter
    key to move to the next part of the script. Related information such as
    warranties, product descriptions, and the like can be quickly accessed
    using cross references. The F4 key jumps back from the related
    information to the previous place in the script.

    The customer list can also be kept in a PC-Browse file, to quickly pop
    up ordering history, preferences, or any collections problems you have
    had. At Quicksoft, we use PC-Browse to check for valid registration
    numbers. You can also link in your price list, terms, shipping rates;
    all those notes taped to the office wall. Great for networks!







                                    - 31 - 
    On-Line Help

    PC-Browse is an outstanding tool for adding on-line help to an
    application you've developed or a program you've purchased, because it
    is memory resident and can pop up over any non-graphics application.
    PC-Browse also uses the word at the cursor in the host document as the
    Find text, which helps you create context sensitive help screens.

    When users pop up PC-Browse, they are presented with an index of help
    topics. They  highlight the topic they need and press Enter to see that
    information. You can design a help file with topics (target keywords)
    that match the headings or other vocabulary of the application program.
    Then the user can move the cursor in the application program to the
    heading and then pop up PC-Browse with Shf Ctl F3 to jump right to the
    topic. And topics can have cross-reference links to other topics in the
    same or other files.


    Programmer's Library

    The search and paste features of PC-Browse allow a programmer to avoid
    retyping often repeated code. There are two methods used to accomplish
    this.

    First, you can browse existing files for the code you want. No extra
    effort is required to create an additional file. Pop up PC-Browse,
    designate file or files to be searched, and enter the Find text. Paste
    any lines you like back into the program you're writing.

    Second, you can create a file with only commonly used code. This
    library file can be indexed and cross referenced for faster retrieval.
    Shf Ctl F10 pops up an index of available routines. Highlight your
    selection with the arrow keys and press Enter to find the lines of code
    you need.

    Either way, F7 pastes the code directly into the host program file,
    saving time and eliminating typing errors.















                                    - 32 - 
    How to Build PC-Browse Files

    Don't let the idea of having to "build" a file keep you from making
    your own PC-Browse applications. The files are easy to create. These
    examples use PC-Write to make files, but you can use any text editor,
    or a word processor in "non-document" mode (also called ASCII, "un-
    formatted" or "DOS text" mode).

    In this section, you will build some sample files. This serves two
    purposes: to teach you the basics of constructing a PC-Browse file and
    to stimulate your creativity. There are many possible ways to use
    PC-Browse, from the very simple to the highly complex.


    About Delimiters

    A delimiter is a symbol that sets a keyword apart from the rest of the
    text. You define your own delimiter pairs (a starting symbol before the
    keyword, and an ending symbol after it) for the three kinds of
    keywords. The three customization parameters are:

    *  Target keyword (parameter /I)
    *  Linear search-trigger keyword (parameter /J)
    *  Lookup search-trigger keyword (parameter /K)

    These delimiters are called file load parameters because they define
    keywords in the file and can change with each file loaded. Targets and
    triggers are covered more below.


    Rules for Delimiters

    *  You can use almost any character as a delimiter. You can also use a
       special "non-alpha" wild card, indicated by character code 8, as the
       ending delimiter only. The non-alpha character matches any character
       that is not a letter (a through z, A through Z) or a number (0
       through 9). The effect is to define a keyword as any word
       (alphanumeric string) following the starting delimiter you choose.

    *  There are six characters that you cannot use as delimiters. They are
       character codes:

      0 (keyword not used)    11 (PC-Write Guide Line font) 10 (line feed)
      8 (non-alpha wild card) 13 (carriage return)          12 (page break)

    *  The same character can be used as both the starting and the ending
       delimiter in either kind of search-trigger keyword or in a target
       keyword that is used in a linear search. However, for a target
       keyword used in a lookup search, the beginning and ending delimiters
       must be different.


                                    - 33 - 
    What are Targets and Triggers?

    Just remember that "to hit the target you must first pull the trigger".
    The trigger keyword is composed of the text you wish to find plus the
    delimiters that define the type of search. This concept, that the
    delimiters define the type of search, is very important. PC-Browse
    reads the delimiters to decide whether to use a lookup search or a
    linear search.

    Now we can type trigger keywords with their delimiters, or place
    trigger delimiters around existing text in the file. This creates a
    trigger (also called a link or cross-reference) to somewhere else: the
    same keyword, but surrounded by target delimiters. If you select a
    trigger and press the Enter key, you get a lookup or a linear search
    (depending on the delimiters) for the target. This ability to link or
    cross-reference text is called hypertext.

    A target keyword is the goal of the search, the location you want to
    find. In a lookup search, each target keyword must occur only once. In
    a linear search, the same target keyword can occur one or more times
    within the same file.

    A word of warning about the characters you define as delimiters: When
    you create a file, be careful not to use the delimiter characters for
    anything else. An extra trigger delimiter just gives a meaningless
    cross-reference, so an occasional occurrence is okay. But suppose the
    leading delimiter for a target keyword is the # symbol (code 35). If
    you use the # symbol in an address (as in Suite #100), PC-Browse will
    think it's a target keyword, too. If you try a lookup search in this
    file, this out-of-sequence target can make the lookup search fail.

    Get in the habit of using delimiter characters that are not likely to
    be used in normal situations. PC-Write font characters (codes 1 to 31,
    with the above exceptions) are fine. They are also invisible, which you
    may prefer in your application. You can enter them in most word
    processors by holding down the Alt key and entering the code number
    with the right-hand keypad. Whether or not the delimiters are visible,
    they cause the keyword itself to be highlighted, unless you change this
    (see: Customizing).


    The Linear Search

    In this exercise you are the owner of a small neighborhood hardware
    store. You have already created a file called SUPPLIER with information
    about the companies that supply your store with merchandise. Each of
    your suppliers has two pages in the file. The first page contains the
    name of a contact person plus their office address and phone number.
    The second page contains more detailed information about ordering
    procedures. You want to create a link between the two pages, placing a


                                    - 34 - 
    trigger keyword on the address page and a target keyword on the
    ordering information page.

    To Create a Link:

    1. Load the SUPPLIER file into PC-Write or your word processor.

    2. Skip to the second page. The first page is an index page. The second
       page looks like:

          *Humble Beginnings Seeds*
          Sandra Hansen
          1616 Whatcom Dr
          Bellingham, WA 98725
          (206) 345-6821
          comments:

       Here the "*" (code 42) is the target keyword delimiter.

    3. Move your cursor to the comments line and type:

          <HBS Order Info>

       Here the "<" (code 60) and ">" (code 62) are the linear search
       keyword delimiters.

    4. Move your cursor down through SUPPLIER until you reach this entry:

          Humble Beginnings Seeds account #  N/A

          Order Policy:
          phone orders  1 800 717 3483   9:00am to 5:30pm PST
          no mail orders

          Delivery:
          Normal UPS is standard. Blue or Red label extra.
          Expect delivery time of a week or so from order date.

          Payment:
          Payment due 30 days from order date. no discounts

          NOTE:   Their beginnings may be humble but the accounts
                  receivable staff isn't. Get payment there no later
                  than 30 days past due!!!!

          Return Policy:

    5. On the line above "Humble Beginnings Seeds account #" type the
       following:

          *HBS Order Info*

                                    - 35 - 
    Try setting the delimiter characters for the next supplier in the file,
    JKY Electronics. Use <JKY Order Info> as the trigger and *JKY Order
    Info* for the target.

    Now that the delimiter characters are in place, you must tell PC-Browse
    what they are.

    To define the Delimiters:

    1. Move your cursor to the very first line of the file, past the end
       of the line.

    2. Type:

          [BR=/I:42.42/J:60.62]

       Now it should look something like this:

    Index of Suppliers                       [BR=/I:42.42/J:60.62]

    <Humble Beginnings Seeds> <JKY Electronics>     <Jennings & Jennings>
    <Hon Ltd. of America>     <Nordic Garden Works> <Rivers Wholesale>
    <Old Mare Glue Works>

    The /I:42.42 defines the character "*" as the target delimiter on both
    sides, and the /J:60.62 defines the characters "<" and ">" as the
    linear search keyword delimiters.

    4. Save the SUPPLIER file.

    We placed [BR=....] in the middle of the screen where it is visible in
    the PC-Browse window. If you would prefer not to see it, move the
    entire string out to the right beyond column 80. The parameters will
    take effect, but be out of the visible range of the window.

    Now let's follow a link in the SUPPLIER file.

    To Follow a link:

    1. Pop up PC-Browse with Shf Ctl F1.

    2. Press F6. PC-Browse asks for the name of the file to load. Type:

          SUPPLIER   <enter>








                                    - 36 - 
    3. Press the Ctl PgDn key to go to the second page:

          *Humble Beginnings Seeds*
          Sandra Hansen
          1616 Whatcom Dr
          Bellingham, WA 98725
          (206) 345-6821
          comments: <HBS Order Info>

    4. Press Tab to highlight <HBS Order Info>, and then press Enter (or
       Grey+).  When PC-Browse reads the < and >, it knows to strip them
       off, add * and *, and do a search for *HBS Order Info*.


    The Lookup Search

    A lookup is an extremely fast search of records that are sorted in
    alphabetic or numerical order. It is especially useful for very large
    files created with a database. For example, you can create an on-line
    catalog, or a list of your customer's addresses and phone numbers.
    Since PC-Browse is RAM-resident, you don't have to exit your word
    processor to lookup your information. And with the PC-Browse paste
    feature, you can insert that information right into the file you are
    working on.

    Requirements for a Lookup File

    A lookup search only works on a file that meets these conditions:

    1. Exactly one target keyword must be defined per page. Every page must
       have a target keyword, and no page can have two of them.

    2. Every page must fit into the PC-Browse text buffer (memory that
       holds text from the disk). By default, the buffer is 4096 bytes, but
       you can change this (see Customizing).

    3. The pages in the file must be sorted by their target keyword. This
       sort order starts with the numbers 0 through 9, then the letters A
       through Z. The sort does not differentiate between upper and lower
       case letters.

    4. If the target keywords are numbers, they all must be the same length
       (with leading zeros if necessary) to lookup correctly. For instance,
       this:

          8  zebra  3485  help  0912  AppLE  67  HELLO

       sorts into the following order:

          0912  3485  67  8  AppLE  HELLO  help  zebra


                                    - 37 - 
    In this example, we'll make a PC-Browse file listing parts for a
    hardware store. To make things easy, it contains only 15 items. These
    items are sorted by part number, the target keyword in this example.
    Each page will have a part number, brief description of the item,
    retail price, name of the manufacturer, and an area for additional
    comments.

    We'll use the PC-Write merge procedure to create the file, and the DOS
    sort command to put the items in order. If you are using another text
    editor to do this, or a database program to sort and produce the file,
    the discussion here should help you adapt to these other programs. In
    fact, a database program is recommended for organizing, sorting, and
    preparing data for the PC-Write merge function, or directly for the
    PC-Browse file.

    Entering and Sorting the Data

    If you prefer not to type the entries in this example, you will find a
    copy of the sorted file, ready to be merged, in a file called PARTSRT.
    If you wish to use the PARTSRT file, copy it to your word processor's
    work diskette or directory. If you are using the PARTSRT file you can
    skip over this section and move directly to the next section, Merging
    the Data.

    To enter and sort the data:

    1. Create a file called PARTLST using PC-Write or your word processor.

       If you are using another text editor, create an ASCII (non-document)
       file.

    2. Type the following into the file PARTLST, starting in column number
       one. The information is shown in unsorted comma-separated form, a
       standard merge format.

          7055,2 hp lawn mower,South Lawn & Garden,$145.00
          6002,Swiss Army Knife,Hon Ltd. of America,$5.95
          7004,seeds - bush beans,Humble Beginnings Seeds,$0.30
          6010,No. 1 phillips screwdriver,Rivers Wholesale,$2.00
          8065,toaster oven,JKY Electronics,$45.00
          6035,carpenters glue - 12 oz bottle,Old Mare Glue Works,$2.80
          6047,tape measure - 25 foot,Rivers Wholesale,$15.50
          8045,light bulb - 25 watt,Benson Lighting,$1.00
          6051,combination square with level,Rivers Wholesale,$7.85
          7023,legume inoculant,Humble Beginnings Seeds,$1.00
          6098,16 piece socket set - metric,Hon Ltd. of America,$4.00
          6022,spray lubricant - 6 oz aerosol,Hon Ltd. of America,$2.95
          7018,garden rake - 6 foot handle,Nordic Garden Works,$10.00
          6001,No. 2 phillips screwdriver,Rivers Wholesale,$2.95
          8002,multi-outlet power strip,Jennings & Jennings,$6.95


                                    - 38 - 
       Each line is equivalent to a record in a database program. The
       commas separate the fields of information. The arrangement is:

          number,description,manufacturer,price

    3. Save the file and exit to the DOS prompt.

    4. To sort the contents of PARTLST and send the output to a file called
       PARTSRT, type:

          SORT <PARTLST >PARTSRT

       The DOS redirection operators < and > tell DOS to sort the contents
       of the file PARTLST and send the sorted data to a file called
       PARTSRT. You may need to copy the file SORT.EXE from your DOS
       diskette first.

    5. Look at the file PARTSRT with your word processor or the DOS TYPE
       command. If the file is correct it will look like this:

          6001,No. 2 phillips screwdriver,Rivers Wholesale,$2.95
          6002,Swiss Army Knife,Hon Ltd. of America,$5.95
          6010,No. 1 phillips screwdriver,Rivers Wholesale,$2.00
          6022,spray lubricant - 6 oz aerosol,Hon Ltd. of America,$2.95
          6035,carpenters glue - 12 oz bottle,Old Mare Glue Works,$2.80
          6047,tape measure - 25 foot,Rivers Wholesale,$15.50
          6051,combination square with level,Rivers Wholesale,$7.85
          6098,16 piece socket set - metric,Hon Ltd. of America,$4.00
          7004,seeds - bush beans,Humble Beginnings Seeds,$0.30
          7018,garden rake - 6 foot handle,Nordic Garden Works,$10.00
          7023,legume inoculant,Humble Beginnings Seeds,$1.00
          7055,2 hp lawn mower,South Lawn & Garden,$145.00
          8002,multi-outlet power strip,Jennings & Jennings,$6.95
          8045,light bulb - 25 watt,Benson Lighting,$1.00
          8065,toaster oven,JKY Electronics,$45.00

    Remarks
    If you are using a database program, create the file and a data entry
    screen to input the data. Enter all the data as shown. Next, sort the
    information in the part number column in ascending order. Send the
    output of the sort to a file called PARTSRT using standard comma
    separated merge format.










                                    - 39 - 
    Merging the Data

    If you use PC-Write, load the merge template file PARTTEM. For a
    database or another merge program, use this file to understand the
    general format. PARTTEM looks like this:

          {part,}
          {description,}
          {manufacturer,}
          {price,}
          {}
          *{part}
          {description}

          {price}
          <{manufacturer}>[SUPPLIER]
          Comments:

    The line directly following "Comments" contains a hard page break,
    codes 12 and 15. The page break at the end divides each merge entry
    into separate pages. Make sure at least the form feed (code 12)
    separates each page. The code 15 after it is optional.

    The braces define the merge variables in PC-Write format, except for {}
    which separates the input template from the output template. The first
    four lines define the input file, and the final seven lines define the
    output file. The leading asterisk in *{part} is the starting target
    keyword delimiter, which you'll define later with  /I:42.8.

    Similarly, <{manufacturer}> is a linear search-trigger keyword. The
    [SUPPLIER] after it is a cross-reference to a file called SUPPLIER.

    To merge the comma-separated information into new file:

    1. Load the template file PARTTEM. (We assume you are using PC-Write.)

    2. Press the Shf F3 key. The PC-Write Merge Menu appears across the top
       of the screen.

    3. Press F9 and type the name of the input file, PARTSRT. Don't press
       Enter yet.

    4. Press F10, type the name of the output file, PARTS, and press Enter.

    5. To merge all of the records automatically, press F10.

    Remarks
    If you have a problem with the PC-Write merge, check to make sure the
    information in PARTSRT is correct. Check for extra or missing commas,
    particularly in an address. If a comma is used that does not separate
    fields, surround the field with quote marks ("). Check your PC-Write
    manual for further details.
                                    - 40 - 
    Defining the Parameters

    The last step in building a lookup file is to define the keyword
    delimiters.

    To define the delimiters:

    1. Load the PARTS file into PC-Write or your word processor.

    2. Move to the top line in the file, anywhere after the part number.

    3. Type the following:

          [BR=/I:42.8/J:60.62/K:40.41]

       Here /I:, /J: and /K: define the target, linear search, and lookup
       search keyword delimiters respectively. The target keyword is
       delimited by a leading "*", the linear trigger is delimited by "<"
       and ">", and the lookup trigger is delimited by "(" and ")".

    Using the File

    Now let's pop up PC-Browse, load your PARTS file, and try searching
    for some items.

    To Do a Lookup Search:

    1. From DOS, PC-Write, or another application, press Shf Ctl F1.

    2. Press F6. PC-Browse asks you for the name of the file to load. Type:

          PARTS  <Enter>

       If the file PARTS is not in the current directory (or the PCBROWSE=
       or PATH= directories) you will need to supply a path name so
       PC-Browse can find the file.

    3. Press F9, type 7004, and press F2 (not Enter).  The F2 key places
       the lookup delimiters around the part number and starts a lookup
       search. You get:

    +File:PARTS-------------------------Find:#7004 -----------------------+
    |                                                                     |
    |*7004                                                                |
    |seeds - bush beans                                                   |
    |                                                                     |
    |$0.30                                                                |
    |<Humble Beginnings Seeds>[supplier]                                  |
    |comments:                                                            |
    |                                                                     |
    |                                                                     |
    +Esc:Exit F1:Help F4:Backtrack F6:File F7:Paste F9:Find F10:First-page+
                                    - 41 - 
    Try a lookup for the following numbers:
       6022
       8002
       7023
       8065

    Let's suppose that the owner of a store would like to sell more of the
    multi-outlet power strips, part number 8002. We think the toaster oven
    is an obvious candidate for a power strip. Let's add a lookup
    cross-reference to the comment line.

    To place a Lookup trigger into a file:

    1. Call up the PARTS file in your word processor and find the toaster
       oven page.

    2. Move to the comments section and type:

          Don't forget the power strip (8002)

       where "(" and ")" are the lookup trigger keyword delimiters, defined
       with /K:40.41 in [BR=/I:42.8/J:60.62/K:40.41].

    Now you can jump directly from the toaster oven page to the power strip
    page. Just tab to the (8002) and press Enter.

    +File:PARTS------------------------Find:#8065 ------------------------+
    |                                                                     |
    |*8065                                                                |
    |toaster oven                                                         |
    |                                                                     |
    |$45.00                                                               |
    |<JKY Electronics>[supplier]                                          |
    |comments: Don't forget the power strip (8002)                        |
    |                                                                     |
    |                                                                     |
    +Esc:Exit F1:Help F4:Backtrack F6:File F7:Paste F9:Find F10:First-page+

    Remarks
    A lookup search is much faster than a linear search, which just scans
    the whole file. It works like this:

    1. Compare the lookup keyword wanted with the current page's target
       keyword.
    2. If they are the same, we're done.
    3. If they aren't the same, restrict the search to the part below or
       above the current page as appropriate, and try again from the middle
       of what's left.




                                    - 42 - 
    Links Between Files

    From each part number page, there's a link to the source in the
    SUPPLIER file.

    To link to another file:

    1. From PC-Browse, using the PARTS file, find part 6002.  It's the
       Swiss Army Knife.

    2. Press the Tab key to select the manufacturer, <Hon Ltd. of America.>

    3. Press Grey+ (or Enter). You see the SUPPLIER page for Hon Ltd. of
       America.

    4. Press F4 to return to the PARTS file.

    Your PARTS file has one supplier for each part. Suppose you discover an
    alternate supplier; for example, Rivers Wholesale also sells Swiss Army
    Knives. Unlike using a fixed-format database, adding a second supplier
    as an inter-file link is easy to do.

    To make a link between files:

    1. Call up the PARTS file in your word processor and find the Swiss
       Army Knife page.

    2. Add the following line under Hon Ltd. of America:

          <Rivers Wholesale> [SUPPLIER]

    That's it. From PC-Browse, you can select <Rivers Wholesale>, and jump
    to its page in the SUPPLIER file.

    Remarks
    Even if two files are linked with a keyword search, the various keyword
    delimiters could be different in each file. In this case the SUPPLIER
    file and the PARTS file use the same keyword delimiters.

    Following a link can do more than just switch to another text file. It
    can also run another program. For example, following a link with the
    keyword ORDER could start running your accounting package to enter a
    purchase order. See the Reference Section for details.


    Creating an Index Page

    By placing a trigger for each target on the first page of a file, you
    create an index page. This gives you (or an end user) a way to quickly
    jump to any page, without typing.


                                    - 43 - 
    To create an index page:

    1. Edit the file SUPPLIER. Go to the first page.

       The first page looks like this:

      Index of Suppliers                        [BR=/I:42.42/J:60.62]

      <Humble Beginnings Seeds> <JKY Electronics>     <Jennings & Jennings>
      <Hon Ltd. of America>     <Nordic Garden Works> <Rivers Wholesale>
      <Benson Lighting>

    Several keyword triggers are in place. However, there are two left for
    you to enter.

    2. Under <Nordic Garden Works>, type:  <Old Mare Glue Works>

    3. Under <Rivers Wholesale>, type:  <South Lawn & Garden>

    Using the Index Page

    In a keyword search, typing a close but incorrect name like "Benson
    Lights" will not match the target keyword. With the index page, you can
    select the name from the list.

    To use the index page:

    1. Press Shf Ctl F10. PC-Browse pops up and moves to the first page in
       the file.

    2. Use the Tab or Arrow keys to highlight one of the triggers. Try "Hon
       Ltd. of America".

    3. Press Grey+. PC-Browse reads the delimiters surrounding the text and
       does a Linear search for *Hon Ltd. of America*.

    This gives us four different ways to find our suppliers:

    1. Link from the part number.
    2. Link from the index.
    3. Pop-up PC-Browse with Shf Ctl F9, enter the name at the F9 prompt
       and press F3.
    4. Pop-up PC-Browse with Shf Ctl F3 with the name at the original
       program cursor.








                                    - 44 - 

```
{% endraw %}

## BR3.DOC

{% raw %}
```
    Reference Section

    In this section, you will learn how to:

    Get Help                           Do a Normal Search
    Load PC-Browse                     Do a Keyword Search
    Exit PC-Browse                     Run other programs
    Pop-up PC-Browse                   Bring up additional windows
    Load a File                        Use the location list
    Move around                        Paste and print

    You don't have to read this section of the manual in any particular
    order. Each subsection is self-contained, containing detailed
    information about a specific topic.


    Getting Help

    To View the PC-Browse Help Screens:

    1. Press F1 when the main PC-Browse menu is displayed. You'll see brief
       descriptions of the function keys, shifted function keys, cursor
       control keys, and navigation keys.

    2. Use the normal PC-Browse viewing keys to browse the Help file:

       Scrolling          PgUp, PgDn, and their Shf and Ctl versions
       Select Topic       Arrows, Tab, Shf Tab
       Jump to Topic      Enter or Grey+
       Searching          F9, Grey+
       Begin/End          F10 or Shf Grey+, Shf F10 or Shf Grey-
       Location list      F4, Shf F4, F5, Shf F9

    3. Press the Esc or F1 key to leave the Help screens. You'll return to
       where you left off in the PC-Browse window.

    Remarks
    The help screens are simply the PC-Browse file BR.HLP, with links to
    the on-line tutorial file BTUT.BRS and reference file BREF.BRS. You can
    edit these files if you like.


    Viewing the Main Menu

    There are two sets of main menus, one with descriptive terms for common
    functions, the other with abbreviated terms for all functions.






                                    - 45 - 
    The simpler main menus are the default:

    *  The simplified Main Menu is visible when you have a file loaded:

    Esc:Exit F1:Help F4:Backtrack F6:File F7:Paste F9:Find F10:First-page

    *  The simplified Shift Main Menu is visible if you hold down either
       shift key:

    Esc:Unload       F4:View-locations    F7:Print           PgUp/Dn:more

    The abbreviated main menus are turned on with the /A switch (see:
    Customizing):

    *  The abbreviated Main Menu is visible whenever you have a file
       loaded (Esc:Ext, not shown, is at the left):

    F1:Hlp F2:Opn F3:Op+ F4:Lc- F5:Lc+ F6:Fil F7:Pst F8:Dir F9:Fnd F10:Top

    *  The abbreviated Shift Main Menu is visible if you hold down either
       shift key (Esc:UnL, not shown, is at the left):

           F2:Op-        F4:Lst        F6:PTo F7:Prt        F9:Lc* F10:Bot

    Function keys aren't used with Ctl or Alt. Here's a preview of function
    key operations:

    Key  Normal Operation              Key Shift Operation
    --------------------------------   ---------------------------------
    Esc  Ext    Exit to application    F1  UnL   Unload from memory
    F1   Hlp    Browse help file       F1
    F2   Opn    Open new window        F2  Op-   Shut current window
    F3   Op+    Re-open a window       F3
    F4   Lc-    To prior location      F4  Lst   Show location list
    F5   Lc+    Re-visit location      F5
    F6   Fil    Enter File name        F6  PTo   Enter file to print to
    F7   Pst    Paste text             F7  Prt   Print text
    F8   Dir    Enter directory name   F8
    F9   Fnd    Enter Find text        F9  Lc*   Set protected location
    F10  Top    Jump to first page     F10 Bot   Jump to last page


    RUNNING PC-BROWSE

    Running PC-Browse is a two-step process. First, you load the PC-Browse
    program into your computer's memory. You usually do this only once, at
    the start of a day's work session. Then, to call PC-Browse into action,
    you pop it up by pressing its "hot key."




                                    - 46 - 
    PC-Browse is a pop-up program, also called a TSR (for "Terminate and
    Stay Resident," a program that stays in memory). Pop-up programs are
    different from most other programs. To use your word processor, say,
    you must exit the program you're currently using first. A pop-up
    program, on the other hand, is always loaded and ready. Even if you're
    working with your word processor or spreadsheet, you can use PC-Browse
    without exiting simply by "waking it up" with its hot key. When you're
    done PC-Browsing, you return to your spreadsheet or word processor
    exactly where you left off.

    The only catch is you must load PC-Browse at the start of your work
    session (or, at any rate, before your word processor or spreadsheet).
    "Loading" a pop-up program simply means copying it from disk into
    memory, and running the initial startup portion. You can also unload
    PC-Browse from memory, to get more memory for a large program.

    You can use one of three methods to load PC-Browse into memory:

    1. Load PC-Browse without a file. When you pop it up from DOS or
       another program, you load the file you want to browse.

    2. Load PC-Browse along with the file you want to display. Then you can
       view this file automatically whenever you pop up PC-Browse.

    3. Include either method in your AUTOEXEC.BAT file to automatically
       load PC-Browse each time you start your computer.

    To load PC-Browse only:

    *  At the DOS prompt, type:

          BR  <Enter>

    The PC-Browse front screen will appear. It contains information about
    the product. The DOS prompt is redisplayed below the message. To load
    PC-Browse from another disk or directory, include the drive
    specification and path before the BR command.

    Now you can run a word processor, database, etc. PC-Browse waits in the
    background until you press the hot key to pop it up; the unique
    combination of keys that tells PC-Browse to become active.

    To load PC-Browse along with an initial file:

    *  At the DOS prompt, type:

          BR  drive:\path\filename  <Enter>





                                    - 47 - 
       where drive, path, and filename define the file to be loaded into
       PC-Browse. For example, to load PC-Browse with an initial file named
       file.one, type:

          BR  FILE.ONE  <Enter>

       You'll need to specify the drive and/or path if the file you want to
       use is not in the current directory, or a PATH= or PCBROWSE=
       directory (see: Loading a File into PC-Browse), such as:

          BR  D:\BR2\FILE.TWO  <Enter>

    To load PC-Browse whenever you start your computer:

    1. Using PC-Write (or an ASCII text editor), modify your AUTOEXEC.BAT
       file.  This file, in the root directory of your hard disk or boot
       diskette, is run every time you start your computer. If you don't
       have one, use PC-Write or your text editor to create one.

    2. Add one of the following lines to the file:

          drive:\path\BR                        (To load without a file)
          drive:\path\BR  drive:\path\filename  (To load with a file)

       where BR loads PC-Browse into memory and "drive:\path\filename"
       defines the file to be loaded. The "drive" and "path" in front of BR
       are important, since the current directory when AUTOEXEC.BAT runs is
       the root directory. For example, if PC-Browse is in the directory
       PCBR on your C drive, and you want to load an initial file from your
       PCW directory, the  AUTOEXEC.BAT line might be:

          C:\PCBR\BR  C:\PCW\MYFILE.DOC

    Remarks
    There are various customizing switches you can use when you load (see:
    Customizing). Two are common. The first, /C, turns on color if you have
    a color monitor. The second, /E, tells PC-Browse to load most of itself
    into expanded memory (also call EMS or LIM memory). If your computer
    has this kind of memory, and all your applications use it in the
    standard way (like PC-Browse), then PC-Browse uses only 3K (instead of
    60K) of normal memory. These switches go after the BR command, usually
    last on the line. For example:

          BR AREACODE /C /E


    To unload PC-Browse from memory:

    1. If PC-Browse is not active, pop it up with Shf Ctl F1 (or any
       PC-Browse hot key).


                                    - 48 - 
    2. Press Shf Esc; then press F9 to confirm.  PC-Browse removes itself
       from memory.

    PC-Browse may not be able to free itself from memory. In some cases, it
    must stay to maintain an internal structure called the "Interrupt
    Chain." This happens if you load additional pop-up programs after you
    load PC-Browse (these programs must "chain" through PC-Browse to get
    keyboard "interrupts"). If you load PC-Browse after all other resident
    programs, you can free it with Shf Esc.


    Exiting PC-Browse

    When you "exit" from PC-Browse, it becomes inactive, but stays in
    memory until you need it again. To remove PC-Browse from memory, you
    need to "unload" it (above).

    To exit PC-Browse temporarily:

    *  Press Esc.

    *  Or, press Shf F2 if you have only one PC-Browse window open.

       The PC-Browse window disappears from your screen as it becomes
       inactive; you return to the original program you were running when
       you popped up PC-Browse. It is still in memory, waiting in the
       background until you need it again. The Shf F2 key closes the
       current window, so if there's only one window, PC-Browse exits in
       the same way.


    Popping Up PC-Browse

    The hot key is the key (or combination of keys) that pops up PC-Browse,
    making it the active program on your screen. There are six hot keys,
    but all except the first are shortcut keys to do various PC-Browse
    operations immediately after it pops up. The hot key combinations are
    written in the form "Shf Ctl F1." This means that you must hold down
    the shift and the control keys and then press the F1 key.

    You can change the hot key combinations. If one of your programs uses
    Shf Ctl F1, or you have a computer that does not recognize Shf Ctl
    combinations, you could tell PC-Browse to pop up with a hot key like
    Alt Ctl F1 or Ctl B. (see: Customizing.)

    To pop up PC-Browse:

    *  Press Shf Ctl F1.




                                    - 49 - 
       Shf Ctl F1 is the "basic" hot key. If you had already loaded a file
       into PC-Browse, the page you last viewed is in the PC-Browse window
       and the full Main Menu appears. All windows, files, and other items
       are the same as when you left. If you pop up PC-Browse without an
       active file, the screen looks like this:

    +File:-----------------------------Find:cursorword--------------------+
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    |                                                                     |
    +Esc:Exit  F1:Help  F6:File  F9:Find----------------------------------+

    When you pop up PC-Browse, the word at the cursor in the underlying
    application becomes the Find text. Say you're writing a letter to Ms.
    Sanchez and your address file is loaded in PC-Browse. To find her
    address, put the cursor on her name, pop up PC-Browse with Shf Ctl F1,
    and hit the search (Grey+) key.

    The text at the cursor depends on the application. In a word processor,
    it's the word just typed. In a spreadsheet, it's the current cell. In
    DOS, it's usually the current drive or directory. If the cursor is just
    after a word, that word becomes the Find text. If the cursor isn't on
    or right after a word, the original Find text isn't changed when you
    pop up. PC-Browse skips commas and some other punctuation when scanning
    back to find the start of a word.

    To start a Lookup search for the word at the cursor:

    *  Press Shf Ctl F2.

       PC-Browse pops up and does a lookup search, the same as Shf Ctl F1
       then F9 then F2. The word at the cursor becomes a lookup search-
       trigger keyword.

    To start a Linear search for the keyword at the cursor:

    *  Press Shf Ctl F3.

       PC-Browse pops up and does a linear search, the same as Shf Ctl F1
       then F9 then F3. The word at the cursor becomes a linear search-
       trigger keyword.




                                    - 50 - 
    To pop up PC-Browse and prepare to get a directory:

    *  Press Shf Ctl F8.

       PC-Browse pops up with the cursor at the File prompt, the same as
       Shf Ctl F1 then F8. Type the file name pattern you want.

    To pop-up PC-Browse and move the cursor to the Find prompt:

    *  Press Shf Ctl F9
       PC-Browse pops up with the page you last viewed, but with the cursor
       at the Find prompt, the same as Shf Ctl F1 then F9. The word at the
       cursor becomes the Find text. Press Grey+ to search for it, or F10
       or Shf Grey+ to search from the start of the file.

    To pop-up PC-Browse and view the first page of the current file:

    *  Press Shf Ctl F10.

       PC-Browse pops up at the first page of the file, the same as Shf Ctl
       F1 then F10. This is particularly useful with files that have an
       index page at the start. Use the arrow keys to highlight a keyword,
       then Grey+ or Enter to jump to the target keyword.


    File Name Patterns

    Several PC-Browse operations apply to a group of files, not just one
    file. For these, you type a File Name Pattern at the "F6:File" prompt.
    A file name pattern looks like this:

       drive\path\filename

    "drive" can be:
    *  A drive specification of one or more drive letters followed by a
       colon. For example, to search drive C, type "C:". To search drives A
       and C, type "AC:" (but you can't get a directory with multiple
       drives, only search through them). To search the default drive, you
       don't need a drive letter.

    "path" can be:
    *  A specific directory path, such as "\PCW\" to search the PCW
       subdirectory in the root directory, or "LETT\" to search the
       subdirectory LETT in the current directory.
    *  path\*\ to also search all paths "downstream" from a given
       directory. For example, "PCW\*\CAT" finds PCW\CAT, PCW\R1\CAT,
       PCW\R2\D2\CAT, and so on.
    *  *\ to search all paths "downstream" from the current directory
       (i.e., the current  directory and any of its subdirectories).
    *  \*\ to search the whole disk (all paths on the drive from the root
       directory).

                                    - 51 - 
       You can also put "/s" after the file name to search all
       subdirectories, as you can with many DOS commands. For example,
       "\CAT/s" finds all files on the disk named CAT, and "PCW\KIT/s"
       finds PCW\KIT, PCW\D3\KIT, and so on.

    "filename" can be:
    *  A specific file name.
    *  *.* to search all files.
    *  A combination of DOS wild card characters and text to narrow the
       search:

       The ? wild card matches any one character.
       The * wild card matches all characters that follow it.

       The ?'s and *'s can only be used at the end of the file name or
       extension; a pattern such as "?BC" will not work (see your DOS
       manual for further details). For example, "*.BAT" finds all files
       with the extension BAT, and "A??.*" finds any three-letter file name
       starting with A and any extension.

    Here are some examples of file name patterns:

       CD:*.DOC

    searches all files with the extension DOC on the current directories of
    drives C and D.

       CE:\PCW\*.*

    searches all files in the PCW directories on both drives C and E. (You
    wouldn't believe how hard it is to find files when you have several
    hard disks. Or maybe you would....)

       C:*\*.BAT

    searches all .BAT files on the current directory and its subdirectories
    on drive C.

       \*\*.*

    searches all files on the current drive.


    Loading a File into PC-Browse

    Unless you always use the BR filename command to use PC-Browse with one
    file, you'll need to tell PC-Browse to load new files. A directory
    option makes this easy to do.




                                    - 52 - 
    To Load a File into PC-Browse:

    *  Press F6. PC-Browse prompts you to type a file name in the "File:"
       area of the top line. When you're done, press Enter. PC-Browse
       displays the first page of the file.

       You can specify a drive (b:myfile.doc), a path (\br\myfile.doc), or
       both (c:\pcw\myfile.doc). If you don't specify a drive or path
       (myfile.doc), PC-Browse looks for your file in the current
       directory, and then each directory specified by your PCBROWSE= or
       PATH=  environment variables.


    PC-Browse shows (and remembers) the full name of your file on the top
    line. If you exit, change directories, and then pop up PC-Browse again,
    it uses this path to find the file. For example, if MYFILE.DOC is in
    your PC-Write directory, the "File:" prompt shows:

    +File:C:\PCW\MYFILE.DOC------------Find:------------------------------+
    |                                                                     |

    You can enter a file name pattern at this prompt if you don't know the
    exact file you want. Then you can either get a directory of all
    matching file names, or all matching file names whose files also
    contain the Find text. (This is covered in Searching Multiple Files.)

    To Select a File from a Directory:

    1. Press F6, type a file name pattern, then press F8 (not Enter).

    2. Or, press F8, type a file name pattern, then press Enter (or F8).

       A list of file names matching this pattern appears. The pattern must
       be for a single drive only. The first one is highlighted. File name
       patterns are described above.

    3. Use the Arrow keys to select the file (or subdirectory) you want.
       The name also appears in the "File:" prompt. There are two kinds of
       file name lists:


       *  If your file name pattern includes directories, such as \*\ or
          /s, the matching names are listed in one column. Use the Up and
          Down Arrows to select the file you want.

       *  If your file name pattern assumes the current directory, such as
          P?.DOC or *.*, the matching names and subdirectories are listed
          in five columns. All four Arrow keys select a file name or
          subdirectory. Subdirectory names end with "\". The parent
          directory is also listed, as "..\".


                                    - 53 - 
    4. Press Enter to load the selected file.  If you select a directory
       name ending in "\" instead, you get a list of its files in this
       directory. Select "..\" to go back to the parent directory. Note
       that PC-Browse does not actually change your current directory.

    Remarks
    Your path is set by the PATH command, which tells DOS and PC-Browse
    where to look for files if they are not in the current directory. The
    path lets programs find your files as you change directories on your
    hard disk. The PATH command puts the various paths into the PATH=
    environment string. There is also a PC-Browse "path" environment
    string, PCBROWSE=. The PCBROWSE= environment string is searched first.
    Put PC-Browse text files into a separate directory (one not in your
    PATH) to keep DOS searches fast. The PCBROWSE= and PATH= strings can
    have multiple paths, separated by semicolons.

    If PC-Browse can't find a file in your current directory or along your
    path, it beeps and displays "Can't find filename", where "filename" is
    the file you asked for.


    Files You Can Load With PC-Browse

    Text Files:

    PC-Browse works easily with "straight-ASCII" text files. These files
    contain only "printable" characters; they have no formatting or
    "control" codes. These files include:

    *  PC-Write files without format commands (or with them; see below).
    *  Output files from a database or spreadsheet "print to file" option.
    *  Word processor files saved in "non-document" mode.
    *  Batch (.BAT) files or program source files (.C, .PAS, or .ASM).
    *  Text files downloaded from bulletin boards.

    In normal text files, each line ends with a carriage return and line
    feed (code 13 then 10). PC-Browse assumes the line feed (code 10) ends
    a line. Carriage return (code 13) doesn't force the end of a line; it
    is ignored before a line feed, and assumed to be a PC-Write X font any
    other place. For extremely large files with very short lines, you can
    save some room by leaving out the carriage returns. This applies to
    some PC-Browse applications using the lookup search. But for most text
    files, and any file created with PC-Write, each line should end with
    the normal carriage return and line feed pair. Tabs (code 9) are also
    accepted, and shown assuming Tabs are set every 4 columns.

    Word Processing Files:

    Most word processing files include formatting codes for margins, fonts,
    and so forth. PC-Browse knows how to read these codes in PC-Write
    files; it displays them as easily as it does text files. PC-Write font

                                    - 54 - 
    characters (all codes below 32) and guidelines (all lines starting with
    code 11) are "hidden", as they would be in PC-Write's Hide mode.
    PC-Write page break lines (code 12, or the pair 12 then 15) are hidden,
    but actual text on a line after a form feed is visible (including
    PC-Write page numbers).

    Many other word processors store formatting information in the first
    few hundred bytes of their files. You never see it when you're working
    in the word processor, but it's there. The rest of the file is
    relatively "clean", so just use Shf PgDn to skip the first screen.

    In some word processors, every paragraph is stored as one very long
    line. You can use the Shf Left and Right Arrow, Home, and End keys to
    view the long "lines" in these files.

    A few word processors store your text in a completely non-ASCII,
    proprietary format. You may have difficulty reading such files with
    PC-Browse.

    Other File Types:

    Other files, such as programs (.EXE, .COM) or spreadsheet files (.WK1)
    can also be displayed in PC-Browse, but, since they are not ASCII
    files, you will probably have trouble recognizing more than small
    fragments of them. You may find the text of any messages they display.
    Some database files (dBase, PC-File) are partially readable.

    You can't read encrypted files (so much for peeking at the passwords)
    or files compressed with archiving programs. PC-Browse won't show
    understandable text. There's nothing wrong with your file, or with
    PC-Browse; the contents just aren't in standard text format. Since
    PC-Browse never writes to the file, you can always PC-Browse a file
    without harm.


    Moving Around in PC-Browse

    Information in a PC-Browse file is divided into pages. Pages are always
    separated by a form feed (a PC-Write page break). The form feed symbol
    is character code 12 and looks like a plus sign with the letter "o" on
    top of it. In PC-Browse, as with a printed report, each page of text is
    separate. In order to display material as clearly as possible, PC-
    Browse shows only one page at a time. You won't see the bottom of one
    page and the top of another (as you would with PC-Write.)

    To scroll one line at a time within a page:

    *  Press PgDn to scroll forward (toward the end of the file).

    *  Press PgUp to scroll backward (toward the top of the file).


                                    - 55 - 
       PgDn and PgUp allow you to scroll one line at a time within a page
       of text. Scrolling stops when you reach the top or the bottom of the
       page.

    To move in larger jumps (even across pages), use Shf PgDn or Shf PgUp.

    To scroll one window at a time:

    *  Press Shf PgDn to scroll down one window.

    *  Press Shf PgUp to scroll up one window.

       Shf PgDn and Shf PgUp scroll one window's worth at a time, until you
       reach the top or bottom of the page. Shf PgDn at the bottom of a
       page goes to the top of the next page. Likewise, Shf PgUp at the top
       of a page jumps to the bottom of the preceding page. Shf PgDn at the
       end of the last page or Shf PgUp at the top of the first page just
       beep.

       You will notice the graphical reminder, near the bottom of the right
       edge of the window (marked by the # in the figure below). If you can
       page down, you see a downward pointing triangle.  If you can page
       up, the triangle will point upwards.  If you can page in either
       direction, the triangles join to become a diamond.

    |                                                                     #
    +Esc:Unload       F4:View-locations    F7:Print ----------PgUp/Dn:more+

       Finally, if the entire file fits in the window and has no page
       breaks, you can't scroll in either direction, and no PgUp/Dn marker
       appears on this line.

    To move directly from page to page, use the Ctl PgUp and Ctl PgDn keys.

    To scroll one page at a time:

    *  Press Ctl PgDn to move to the next page.

    *  Press Ctl PgUp to move to the prior page.

       Ctl PgDn takes you to the top of the next page (except on the last
       page of the file). In the middle of a page, Ctl PgUp moves to the
       top of that page. If you press it again, it moves to the top of the
       preceding page, and so on until you reach the top of the file.

    People are particular about PgUp and PgDn. About 30% feel they move in
    the wrong direction. Another group feels PgUp/Dn and Shf PgUp/Dn should
    be swapped. You can alter these keys to suit yourself with the /A:
    switch (see: Customizing).



                                    - 56 - 
    To move to the top or bottom of the file:

    *  Press F10 or Shf Grey+ to move to the top of the file.

    *  Press Shf F10 or Shf Grey- to move to the end of the file.

       Grey+ and Grey- refer to the plus and minus keys on the numeric
       keypad at the far right of the keyboard, not the keys across the top
       of the keyboard. They're grey rather than white on most keyboards.
       Not all keyboards have Grey+ and Grey- keys.

    You may be looking at a file wider than 78 columns. You can scroll the
    window left or right on the page to see the entire file through the
    PC-Browse window.

    To scroll the window left:

    *  Press Shf Left Arrow.  The text on the page moves right, so you can
       see 20 more columns on the left.

    To scroll the window right:

    *  Press Shf Right Arrow.  The text on the page moves left, so you can
       see 20 more columns on the right.

    To scroll left to the left margin:

    *  Press the Home key.  The start of every line is visible.

    To scroll one window right from the left margin:

    *  Press the End key.  Columns 79 to 156 (one window width right) are
       visible.

    You can also move to the next or prior trigger keyword (a highlighted
    word that links to the location of its target keyword). The selected
    trigger keyword replaces the Find text. Any upper case letters in the
    trigger keyword become lower case in the Find text, since lower case
    matches both upper and lower case in a keyword search.

    To scroll to next or prior trigger keyword:

    *  Press Tab to move to the next trigger keyword.

    *  Press Shf Tab to move to the prior trigger keyword.

    *  Press an Arrow key to select a trigger keyword if they're lined up
       in rows and columns.

       A trigger keyword is a word surrounded by special characters
       (delimiters) that initiates a linear or lookup search. (Keyword

                                    - 57 - 
       Search discusses triggers and delimiters.) If there are no (more)
       trigger keywords in the file, PC-Browse beeps. If the file is long,
       the bottom line of the window shows you it's searching for the
       trigger.


    Normal Search

    In a normal search, PC-Browse scans the file for the next occurrence of
    the find text.

    To do a normal search:

    1. Press F9. The cursor moves to the Find text area. You see the Find
       menu:

    MATCH F5:Any alpha F6:Non-alpha. SEARCH F10:From top Grey+:From cursor.

    2. Type the text you want to search for.

       The default Find text is the word at the cursor in the original
       program when you pressed the hot key. (If there was no text at the
       cursor, the Find text does not change). If this is the text you want
       to search for, you don't need to press F9 or type it in again.

    3. Press the Enter key to just accept the Find text without starting a
       search.

    4. Or press one of the search keys to start searching from the F9
       prompt:

       Grey+ (or Ctl-L) to search from the current location forward.
       Grey- (or Ctl-O) to search from the current location backward.
       Shf Grey+ (or F10) to go to the top of the file and search forward.
       Shf Grey- (or Shf F10) to go to the very end and search backward.

    To do a normal search on a word from another program:

    1. From that program, place the cursor on the word you wish to search
       for. The cursor can be on any character of the word. It can also be
       on the space just after the word, so you can type the word and then
       search for it with PC-Browse.

    2. Press Shf Ctl F9. PC-Browse pops up and puts the word at the cursor
       in the original program into the Find text. The cursor is in the
       Find text.

    3. Press one of the search keys described above.

    Once PC-Browse finds the text, the search stops and the found text is
    highlighted.

                                    - 58 - 
    To search for further occurrences of the find text:

       *  Grey+ (or Ctl-L) searches forward.
       *  Grey- (or Ctl-O) searches backward.
       *  Enter searches forward (at the Find or File prompt, Enter just
          accepts the text).
       *  Shf Grey+ (or F10) then Grey+ searches forward from the top.
       *  Shf Grey- (or Shf F10) then Grey- searches backward from the end.

    While PC-Browse is searching, it displays the following message:

    |                                                                     |
    +Finding... (xx%) [Press any key to stop search]----------------------+

    where "xx" indicates how far the search has progressed through the
    file. If you press a key while this message is displayed, the search
    stops.

    If PC-Browse finds the text, the window shows the page, with the found
    text highlighted (if you found invisible text, like a font , the next
    character is highlighted). The file locations both before and after you
    made the jump are saved in the location list. Press F4 to return to the
    previous location, or Shf F4 to view the list. (See: Location List.)

    If PC-Browse does not find the text, it displays "Not found: text"
    where "text" is the text you were searching for. The message is cleared
    the next time you press a key.


    Case Matching and Wild Cards in a Search

    PC-Browse has case matching rules and wild card characters that help
    you search for text. It uses the same case matching and wild cards as
    PC-Write's Find function. These aren't the same as the file name wild
    card characters * and ? used at the File: prompt.

    During a search, lower case letters match the corresponding upper case
    and accented letters. For example, "a" matches "a", "A", or any of the
    foreign language A's in the upper ASCII set. To match only the lower
    case "a", press F4 (a right facing triangle) before the "a". (Lookup
    keyword searches are different; all cases match.)

    Also, a single space matches any combination of spaces, font characters
    (codes 1 to 31, except 12), line boundaries (code 13,10 pair), or PC-
    Write Guide Lines (any line starting with code 11). Again, the F4 wild
    card before a space makes it match exactly one space.

    PC-Browse normally ignores PC-Write font characters in the file (codes
    less than 32). For example, if your Find text is Gregor, PC-Browse
    finds Gregor even if the "G" is boldfaced. However, if you put
    explicit font characters in the Find text, they must occur in the file

                                    - 59 - 
    to match (unless they are also wild cards, in which case you need the
    F4 wild card in front of them).

    Like a wild card, a trigger keyword delimiter modifies the search.
    Either a linear or a lookup search-trigger keyword delimiter matches
    the corresponding target keyword delimiter. A lookup trigger delimiter
    also invokes a lookup search instead of a normal, linear search. Also
    in a lookup search, all letter cases match.

    You can use the following wild cards to find a text string with a
    particular pattern:

    Key   Code  Description

    F4    16    Matches the next character exactly. In particular:

                   A space matches exactly.
                   A lower case letter matches exactly.
                   A trigger keyword delimiter matches exactly.
                   A character that represents a wild card matches exactly:
                     Alt-A (code 14), Alt-D (code 16), Alt-J (code 8),
                     Alt-M (code 7), Alt-X (code 13) and Alt-Z (code 15).
                   If you want to search for one of these PC-Write font
                   characters, you must precede it with F4 so that it does
                   not act like a wild card.

    F5    07       Matches any letter or number found at that position, but
                   not spaces or symbols (i.e., matches "a" or "3" but not
                   "." or "$").

    F6    08       Matches any space or symbol found at that position, but
                   not letters or numbers (i.e., matches "." or "$" but not
                   "A" or "3"). Use F6 to find whole words: "at" surrounded
                   by F6 characters won't find "cat" or "match".

    F7    15       Matches any one character, blank, letter, number, or
                   symbol.

    F8    13,10    Matches a line boundary, the characters at the end of a
                   line. Line boundaries contain a carriage return (code
                   13) and line feed (code 10). Code 13 by itself matches the
                   carriage return; code 14 by itself, a line feed.

    Here are some examples (for this example, ! is used for the F4 wild
    card, @ for F5, # for F6, and $ for F7):

    Text        Wild Card      Matches              Doesn't match
    ax!$        F4             ax$                  axe, ax*
    Ho@se       F5             House, Horse         Hose, Ho-se
    C#PO        F6             C.PO, C+PO           C3PO, CAPO
    A$om        F7             Atom, A:om           Aom, A..om

                                    - 60 - 
    Foreign and Special Characters in a Search


    If the text you want to find contains foreign or special characters,
    you can enter them from the keyboard using the Accent key. Each special
    character is created typing the first of a pair of characters, then the
    Accent key, then the second of the pair. The Accent key acts like a
    special Left Arrow, overstriking the first character with the second.

    PC-Browse supports both the normal IBM extended character set and the
    alternate "Code Page 850" character set (if your computer hardware
    supports its use).

    To enter foreign or special characters with the Accent key:

    *  Type one of the characters below, then the Accent key, then the
       second character.

    Here's the table of the keystroke combination that create the accented
    characters (since many printers cannot print them, we did not put the
    accented characters themselves in this manual):

          Code  Keys      Code  Keys      Code  Keys      Code  Keys
          128   C and ,   141   i and `   154   U and "   222 * 7 and `
          129   u and "   142   A and "   155   c and /   224 * a and /
          130   e and '   143   A and o   157   = and Y   226 * g and /
          131   a and ^   144   E and '   160   a and '   227 * p and /
          132   a and "   145   a and e   161   i and '   228 * S and /
          133   a and `   146   A and E   162   o and '   229 * s and /
          134   o and a   147   o and ^   163   u and '   231 * t and /
          135   c and ,   148   o and "   164   n and ~   232 * F and /
          136   e and ^   149   o and `   165   N and ~   233 * h and /
          137   e and "   150   u and ^   166   a and _   234   M and /
          138   e and `   151 * u and `   167   o and _   235 * d and /
          139   i and "   152   y and "   168   ? and ?   236 * $ and `
          140   i and ^   153   O and "   173   ! and !   237 * f and /

    If you have a VGA display and are using the code page 850 extended
    character set, you lose the above characters marked with *; however you
    gain the following:

         Code  Keys      Code  Keys      Code  Keys      Code  Keys
         155   o and /   209   D and -   216   I and "   231   t and h
         157   O and /   210   E and ^   222   I and `   232   T and H
         181   A and '   211   E and "   224   O and '   233   U and '
         182   A and ^   212   E and `   226   O and ^   234   U and ^
         183   A and`    213   i and .   227   O and `   235   U and `
         198   a and ~   214   I and '   228   o and ~   236   y and '
         199   A and ~   215   I and ^   229   O and ~   237   Y and '
         208   d and -


                                    - 61 - 
    Remarks
    PC-Browse also accepts PC-Write font characters, entered with the Alt
    key and a letter.

    You can also search for any character by entering its numeric code at
    the Find prompt. Just hold down the Alt key as you enter the decimal
    code using the numeric keypad. The character appears when you release
    the Alt key.


    Searching Multiple Files

    PC-Browse allows you to search for the Find text in multiple files on
    your disk. Basically, you use the DOS wild card characters you're
    already familiar with, ? and *. You can view each file containing the
    Find text, or put a list of such files onto the location list.

    To search multiple files:

    1. If the text you want to search for is not already in the Find
       prompt, press the F9 key, type the search text, and press Enter.
       Don't start the search by pressing Grey+ yet.

    2. Press F6, or F8. PC-Browse prompts you to enter a file name. Press
       F8 if you know you want a list of files, not a view of each one.

    3. Type the file name pattern using a combination of text and file name
       wild cards.

    4. Press the Enter key to accept the file name, or Grey+ to accept it
       and then search.

    5. When the search first starts, you get the following prompt (unless
       you pressed F8; then PC-Browse knows you want a list of files):

    |                                                                     |
    +Esc:Cancel F9:View each match as found F10:Collect matches and list--+

       *  Press F9 to load each file containing the Find text.

          When a match is found, PC-Browse displays the file, highlighting
          the found text. You can move around through this file freely with
          PgDn, Shf PgDn, and so on. If this is not the occurrence of the
          Find text that you're looking for, press Grey+ or Enter to keep
          searching. The search will continue through the end of the
          current file and then on to the next file that matches the file
          name pattern.

          You can also press Shf Enter to go right to the next file and
          search. Press Shf Enter as soon as you know the current file is


                                    - 62 - 
          not the one you want. You can also press Grey- to search
          backwards in the file; however, it won't go back to a prior file.

       *  Press F10 to put all files containing the Find text on the
          location list.

          This process may take a while. It adds to the location list,
          described below. When it finishes, the location list is
          displayed. Use the arrow keys to select a file to load. Since the
          location list has a limited size, all locations may not fit. This
          means you only get the end of the list. However, you can press
          the Shf F9 key first to set a protected location, and then cancel
          the search when the list fills. Then you get the first part of
          the list. You can also make the location list bigger (see:
          Customizing).

    As each file matching the pattern is searched, its name is displayed in
    the File prompt, along with the original file name pattern. For
    example, if the pattern is:

       CE:\PCW\*.*

    the File prompt might display:

    +File:CE:\PCW\*.*=C:\PCW\MYFILE.DOC---Find:browse---------------------+
    |                                                                     |

    While PC-Browse is searching, it displays the following message:

    |                                                                     |
    +Finding... (xx%) [Press any key to stop search]----------------------+

    where "xx" indicates how far the search has progressed through the file
    being searched (the counter starts over with each file). If you press
    any key while PC-Browse is searching, the search stops (the key's
    normal action does not occur).

    If you change the Find text after a multi-file search and search again,
    PC-Browse asks if you want to continue the multi-file search, or just
    search the current file:

    |                                                                     |
    +Esc:Cancel  F9:This file only  F10:All files matching file spec------+

    Press F9 to just search the current file, or F10 to continue the multi-
    file search but look with the different Find text.

    If PC-Browse can't find any file that matches the file name pattern, it
    shows the message: "Can't find filename pattern" where "filename



                                    - 63 - 
    pattern" is what you entered at the File prompt. (The message clears
    the next time you press a key to do something.)

    If no (more) occurrences of the Find text can be found in any file that
    matches the file name pattern, PC-Browse displays "Not found  text"
    where "text" is the text you were searching for. PC-Browse shows the
    last file (if any) that contained "text."

    Remarks
    PC-Browse, by default, skips certain non-text files in a multiple file
    search. Files with extensions .COM, .EXE, .OBJ, .OVL, and .OVR are
    skipped unless you specifically tell PC-Browse to search them (e.g., by
    setting the File text to *.EXE). In addition, hidden files are skipped,
    but again if you know the name of a hidden file you can search it by
    giving the name at the File prompt. Also, you can customize the list of
    excluded file name extensions, to skip large non-text files like
    compressed files or fonts (see: Customizing).

    Keyword Searches

    There are two kinds of keyword searches; a linear keyword search and a
    lookup keyword search. This section describes keyword searches in
    general, and linear and lookup searches in particular.

    A linear keyword search is a kind of normal search. The Find text has
    linear search-trigger keyword delimiters, which match the same text
    with target keyword delimiters. In a normal search, "paint" finds
    "paint" (or "Paint", "PAINT", etc). In a linear keyword search
    "<paint>" finds "^paint*" (or "^Paint*", etc.), assuming < > and ^ *
    are the defined linear-search trigger and target keyword delimiters.

    A lookup keyword search appears on the surface like a linear keyword
    search. However, it does not scan the whole file like a normal search
    or a linear keyword search; instead it uses a much faster method
    (divide and conquer) since the file is sorted by the keyword. The
    lookup search is an extremely fast search of sorted data, most useful
    with large files created from a data base program. There are four
    requirements for a lookup search:

    1. Each target keyword can appear only once in the file.
    2. Each page must have one and only one target keyword.
    3. Each page is limited to no more than 4096 bytes (or current buffer
       size).
    4. The lookup targets must occur in alphanumeric sort order, so a page
       with "Beckett" comes before the one with "Brecht," which comes
       before the one with "Shakespeare."

    PC-Browse does a "divide and conquer" to do a lookup search. First it
    compares the target keyword on the current page to the one it's
    seeking. If it's looking for "Marimba" and finds "Glockenspiel," it
    knows the target keyword must occur later in the file. But if it finds

                                    - 64 - 
    "Sousaphone," it knows "Marimba" lies in the first part of the file. It
    repeats this strategy with the selected portion of the file, choosing a
    page in the middle and comparing keywords again. This continues until
    it hits the target. Should there be two occurrences of the target text,
    there is no guarantee which one it will find.

    Note that both lookup and linear searches find the same target keyword;
    they simply use different methods. The lookup search is much faster on
    large files (perhaps 20 times faster on a 2-megabyte file), but lookup
    files have more exacting design requirements.

    To describe a keyword search, we use the idea of a trigger keyword and
    a target keyword. The trigger keyword is the word that can start a
    search; the target keyword is the word found by such a search. A
    keyword search only finds words delimited (specially marked) as search
    targets. Keyword searching requires files designed for PC-Browse. If
    you just want to find a text string within a normal file, use the
    normal search, described above.

    There are three ways to trigger a keyword search:

    1. Convert normal PC-Browse Find text to a trigger keyword, and then
       search.
    2. Pop up PC-Browse and do a keyword search for the word at the
       application cursor.
    3. Start a search from a trigger embedded in the text. This method
       allows you to link (cross reference) related information. This
       capability is often referred to as hypertext.

    To do a keyword search on a word you type in:

    1. Press F9 to put the cursor at the Find prompt. Type the text you
       want to search for.

    2. Press F3 to convert the Find text to a linear trigger keyword and
       begin the search. PC-Browse places the linear search-trigger
       delimiters around the Find text and forces the text to lower case.
       It then searches the file (from the top, not simply from the current
       location) for the first occurrence of the Find text as a target
       keyword.

    3. Or, press F2 to convert the Find text to a lookup trigger and begin
       the search.  PC-Browse places the lookup search-trigger delimiters
       around the Find text and does a faster lookup search. There should
       only be one occurrence of the lookup target text.


    Let's assume your linear search-trigger keyword delimiters are "{" and
    "}", your target keyword delimiters are "<" and ">", and you typed "hi"
    at the Find prompt. If you simply press Grey+, PC-Browse does a normal
    search, finding "hi", "this" and "<hi>". However, if you press F3

                                    - 65 - 
    instead, it converts the Find text to "{hi}" and finds only "<hi>". The
    braces in the Find text "{hi}" tell it to look in the file for "<hi>";
    the trigger delimiters match the target delimiters. Now if you press
    Grey+, you get a linear keyword search, because the find text "{hi}" is
    still active.

    While PC-Browse is doing a linear search, it displays the following
    message:

    |                                                                     |
    +Finding... (xx%) [Press any key to stop search]----------------------+

    where "xx" indicates how far the search has progressed. If you press a
    key while this message is displayed, the search stops (the key's action
    is ignored).

    If PC-Browse finds the target, the search stops and the found text is
    highlighted. If not, it displays "Not found  {text}" where "text" is
    the target you were searching for and "{" and "}" are the search-
    trigger delimiters. (The message clears when you press a key.)

    For a lookup search, if the targets are not sorted in the file,
    PC-Browse may (or may not) discover this and display: "Pages must be
    sorted for a Lookup search to work". PC-Browse displays the page with
    the target keyword that caused it to give this message. However, often
    it won't detect that the file is not sorted, since this faster search
    does not read the whole file. It simply tells you it can't find your
    text. Also, each page must fit into the PC-Browse text buffer. If it
    finds a page larger than the buffer (4096 bytes by default) with no
    target keyword, it displays the message "Pages in this file are too
    long".

    To continue searching for the same target keyword:

    *  Press the Grey+ or Enter key.  The target keyword for a linear search
       may occur more than once. Grey+ or Enter finds the next one. (Grey-
       finds prior ones.) The braces are still in the Find text, so each
       repeated search is still a linear keyword search. If you press F9
       then F3, you also get a linear keyword search, but from the top of
       the file.

    For example, in the file AREACODE, each state abbreviation is a target
    keyword. Since some states have several area codes, some target
    keywords occur several times. If you type CA as the Find text and then
    press F3, PC-Browse finds the first page, 209/Fresno. If you press
    Grey+, it finds the next one, 213/Carson.

    If you press Grey+ after doing a lookup search, it does the lookup
    search again. Since each target appears only once, it finds the same
    page. This is one way to get back to a target page after you've found


                                    - 66 - 
    it (via lookup search) and then browsed around the file. You might also
    change files and press Grey+ to repeat the lookup search in the new
    file.

    To do a keyword search on a word from another program:

    1. From that program, place the cursor on the word you wish to search
       for.  The cursor can be on any character of the word. It can also be
       on the space just following the word, so you can type the word and
       then search with PC-Browse.

    2. Press Shf Ctl F3 to do a linear keyword search. PC-Browse pops up,
       grabs the word at the cursor in the original program, makes it lower
       case, adds the delimiters to create the linear search-trigger
       keyword in the Find text, and searches for the first occurrence in
       the PC-Browse file of that word as a target keyword.

    3. Or, press Shf Ctl F2 to do a lookup search.  A similar process
       occurs, using lookup search-trigger delimiters.

       If the PC-Browse file has no appropriate keyword definitions, it
       pops up, but gives you a message and leaves the cursor at the Find
       text prompt.

    For example, load the sample file MISUSED into PC-Browse. Press Esc to
    return to your original application (or the DOS prompt). Type the word
    "its" and then press Shf Ctl F3. PC-Browse pops up and jumps to the
    page covering the proper use of "its" and "it's."

    To do a keyword search on a cross-referenced word:

    1. Use Tab (or Shf Tab) to select the next (or previous) trigger
       keyword. If the trigger keywords are aligned in rows and columns,
       you can also use the four Arrow keys. When you select a trigger
       keyword, it appears as new the Find text, in lower case. These keys
       stop at both linear and lookup search-trigger keywords.

    2. Press the Grey+ or Enter key to search for the target keyword. This
       searches from the start of the file for the first occurrence of the
       text as a target keyword.


    For example, load the sample file HAMLET into PC-Browse. Each time you
    press Tab, the next trigger is highlighted. The Find text shows the
    trigger you just found. If you tab to the "outrageous fortune" trigger
    (the fourth trigger in the file) and press Grey+, you jump to the page
    with "<OUTRAGEOUS FORTUNE>" at the top as the target keyword.

    If the triggers are lined up in contiguous rows and columns (called an
    index page), the four Arrow keys also select a trigger keyword. For
    example, in the sample file MISUSED the first page is an index page.

                                    - 67 - 
    You can use the Arrow keys to highlight a trigger keyword, and then
    Enter or Grey+ to jump to the corresponding target page.

    You may want to search for a particular trigger keyword itself. For
    example, you want to find all cross-references to a given target
    keyword.

    To search for references to a keyword:

    1. Place the trigger keyword in the Find text. You can type the keyword
       at the F9 prompt and press F3, use the Tab key to select it, or type
       the keyword and delimiters yourself.

    2. Press F9 to go to the Find text.

    3. Press Ins, then F4. This inserts the F4 wild card in front of the
       first search trigger keyword delimiter, to make it match exactly.

    4. Press End, then Bksp. This removes the final search-trigger keyword
       delimiter.

    5. Press Grey+ to search. Because of the F4 wild card, you get a normal
       search.

    Remarks
    Most of our sample files use PC-Write font characters as trigger
    delimiters. In MISUSED, for example, the index on the first page
    doesn't show the trigger delimiters, because PC-Write font characters
    are hidden in PC-Browse. This makes the table easier to read. Fonts do
    appear in the Find text when you use Tab or Arrow keys to highlight a
    trigger.


    Links Between Files

    You can put a file name in square brackets after a trigger keyword to
    link to the target keyword in that file. This can be handy to organize
    your application files. An earlier example used PARTS and SUPPLIER
    files to keep different information in different files. Very large
    applications can be easier to manage if divided into separate files.

    The left square bracket must come either right after the trigger
    keyword, or with one space between. If you want the file name in
    brackets hidden in PC-Browse, put a question mark after the left square
    bracket; in this case you can't put a space between the keyword and the
    bracket. Some examples:

       #3478 [PARTS]          Link to part #3478 in the PARTS file.
       <PLIERS>[TOOL.LST]     Link to keyword PLIERS in the file TOOL.LST.
       <HAS CAR>[?SCRIPT2A]   Link to keyword HAS CAR in the SCRIPT2A file,
                              but don't show the brackets or the file name.

                                    - 68 - 
    Running Other Programs

    PC-Browse can also run another program when a trigger keyword is
    selected, instead of linking to the other file. In fact, it can run any
    DOS command. Basically, you just put the DOS command in square brackets
    instead of a file name. But there are some rules.

    First, PC-Browse must be in non-resident mode. You must run PC-Browse
    as a normal program, instead of a resident (TSR) program. DOS can't
    handle a resident program that pops up over a second program and runs a
    third program. In non-resident mode, you cannot use the Esc key to
    exit; you must use Shf Esc to unload PC-Browse from memory and exit.

    To load PC-Browse in non-resident mode, use the /M startup
    customization option, usually by giving it on the command line that
    starts PC-Browse. For example:

       BR MAINMENU.BRS /M

    Next, you must tell PC-Browse you want to do a DOS command, not just
    link to a file. To do this, follow the "[" (or the "[?" if you want to
    hide it) with a ">". For example:

    Lotus [>123 PAYABLES]
    *Word Processor*[?>ED]
    "Regrets-Letter"[?>ED BOZOLET.TMP /e]
    *Prepare New Disk*[?>c:\sys\FORMAT B:/s]

    After PC-Browse runs the other program, the PC-Browse window returns.
    For example, [>TYPE BETA.DOC] types BETA.DOC and returns to PC-Browse.
    In this case, the file would whiz by so fast you couldn't see it. But
    you can tell PC-Browse to give the message "Press any key to continue"
    and wait for the user to press a key before returning. Put a /P before
    the command text to do this. For example, [/P >TYPE BETA.DOC]

    Even though PC-Browse is "non-resident", when you use it to run another
    program you can pop up PC-Browse in that other program (you just can't
    run yet another program). You can give users of these programs access
    to on-line help, customer information, etc. When you include a command
    to run another program, you can also give the name of a PC-Browse file
    to be made available when the user pops up PC-Browse. Every program you
    run can have its own PC-Browse help file. The /H switch does this. For
    example:

       *Payroll[? /H:FEEDEM.BR  >123 PAYRLL89.WKS]
       *Payables[?/H:STALLEM.BR >123 PAYBLE89.WKS]

    If you use several of these options, start with the "?" that hides the
    entry, then put the /H:File and /P switches, and finally the ">"
    followed by the DOS command line.


                                    - 69 - 
    This ability to "launch" other programs can be used to create a menu of
    programs and commands to run from PC-Browse. This can be handy for
    people who are not overjoyed when they see a DOS prompt. The sample
    application file MENU gives you a model to start from. Here's a sample
    page from this file:

       <DOS>
       Dir[?/p>dir /w]
       Check Disk[?/p>chkdsk]
       Shell to DOS[?>c:\command]
        (remember: type the word 'EXIT' to return to this menu.)
       F10 to Return to the Main Menu

    "Dir", "Check Disk", and "Shell to DOS" are all triggers surrounded by
    the delimiters code 22 (leading) and code 20 (trailing).

    The first line, <DOS>, is a target keyword used to reach this page from
    the main menu. The second contains the trigger keyword Dir (the
    [?/p>dir /w] part is invisible). When the user selects this trigger
    with the Tab key and hits Enter, the DOS directory appears, followed by
    Press any key to continue. After viewing the directory and pressing a
    key, the user sees this menu page again.

    The third menu item runs a program called COMMAND. Since this is the
    DOS command processor, when the user selects this option they get a
    normal DOS prompt, and can run any DOS commands (similar to PC-Write's
    F1 then F4 option). The DOS command exit leaves this shell of DOS and
    returns to the PC-Browse menu again.


    Additional Windows

    PC-Browse can display a large amount of information. You can view
    different but related references at the same time with multiple
    windows. The number of windows depends on the height of the windows,
    which you can define yourself (see: Customizing).

    To open a new window:

    *  Press F2. If there is room on the screen, an exact copy of the
       current window is opened below it. You continue working in the new
       window while the original remains visible.

    There must be room on the screen to display the full window (minus 1
    line; the top line covers the bottom of the window above). By default,
    there are 25 screen lines; the first window takes lines 1-13, the
    second lines 13-25. If you change the height to 9 lines, three windows
    fit, on lines 1-9, 9-17, and 17-25. If your screen can display more
    lines (as EGA and VGA adapters do) you can tell PC-Browse to use a
    longer screen. (See: Customizing.)


                                    - 70 - 
    To shut the current window:

    *  Press Shf F2. The current window is closed and you are returned to
       the window above. Pressing Shf F2 at the first window exits; you are
       returned to the original program.

    To reopen a window:

    *  Press F3. Unlike F2, which opens a new window, F3 reopens the last
       one that was shut. A window can be reopened as long as another
       window has not been opened with F2.

    You can slide the PC-Browse windows down on the screen, to see your
    application screen underneath. Then you can slide it back again. The
    Shf Up and Down Arrow keys do this.

    To slide the window down:

    *  Press Shf Down Arrow.

    To slide the window up:

    *  Press Shf Up Arrow.


    Navigating Within PC-Browse

    As you explore with PC-Browse, traveling within a file or across
    several files, there is always the chance that you may get "lost."
    PC-Browse provides you with two navigational aids that allow you to go
    off on tangents, confident that you can return to your starting point
    or to any interesting "way stations" that you noted while PC-Browsing.


    The Location List

    The location list is the main navigational aid. Each location records
    the file, your position in it, and any "found" text. Every time you
    search for text or link to a keyword, PC-Browse puts both the original
    and the new location on a list. If the original was already on the
    list, it doesn't go on twice. Pressing Tab to select a trigger word
    doesn't save the location, but does change it (since the selected text
    changes). If you press Enter to follow this link, then the location is
    saved. All PC-Browse windows share one location list.

    You can put any location on the list yourself. If you are viewing one
    file but have set a location in another, PC-Browse automatically
    returns to the correct file when you return to that location. The file
    name, screen position, and selected ("found") text are restored.



                                    - 71 - 
    The location list is sequential; location 1 is followed by location 2,
    then location 3, and so on. You can go back up the list with F4, then
    either go down the same list again with F5, or start a new branch with
    any search or with the set-location key, Shf F9. You can also view the
    entire list and select a location from it, with Shf F4. There is only
    one path, so if you start a new path at location 3, every location
    beyond that (such as 4 and 5) is cleared.

    There is a limit to the number of location marks you can set, and that
    number varies. PC-Browse allocates 1024 bytes by default for storing
    the location list for all windows. You can increase this to store a
    longer location list (see: Customizing). When the list is full and you
    add a new location, the oldest location is normally removed.

    However, when you use Shf F9 to put a location on the list, that
    location is protected. PC-Browse asks if it's okay to remove a
    protected location from the list with the prompt:

    |                                                                     |
    +Protected location found:   Esc:Cancel  F9:Overwrite it--------------+

    A small arrow in the upper right hand window border shows the location
    list status. If the arrow is pointing down, you are at the start of the
    list. If it is pointing up, you are at the end of the list. A double
    headed arrow means you are in the middle of the list and can go in
    either direction.

    To set a position on the location list:

    *  Press Shf F9.  Any search also puts the locations before and after
       the jump on the list.

    To move to the prior location on the list:

    *  Press F4.  If you're at the start of the list, PC-Browse beeps.

    To move to the next location on the list:

    *  Press F5.  If you're at the end of the list, PC-Browse beeps.

    To view and select from the location list:

    *  Press Shf F4.  The last location on the list (where F4 would take
       you) is highlighted.

    *  Press Up or Down Arrow to select a location. F4 and F5 also move the
       selection up and down. The list scrolls to show all locations.





                                    - 72 - 
    *  Press Grey+ or Enter to jump to the location.  The old location does
       not go on the list.

    *  Or, press Esc to cancel the location list view.

    The location list indicates a protect location with a character that
    looks like an upper case "P" and a lower case "t" (code 158). A
    location added by a multi-file search for the find text is marked with
    a fancy "f" (code 159). Both of these marks are shown just to the left
    of the filename. ( directly below the "F" in File in the example
    below).

    +File:c:\br\hamlet-----------------Find:Thus conscience does make-----+
    |  a:\launch                            browsers                      |
    |  c:\br\address                        Walton                        |
    |  c:\br\hamlet                         of the play.                  |
    |  c:\br\hamlet                         <TO BE, OR NOT TO BE>         |
    |  c:\br\hamlet                         Must give us pause.           |
    |  c:\br\hamlet                         Thus conscience does make     |
    |  c:\br\quarto                         in his mind with              |
    |                                                                     |
    +Arrows highlight entries, Enter selects (Esc:Cancel)-----------------+

    Remarks
    One kind of multiple-file search adds a list of all files that contain
    the Find text to the location list. (See: Searching Multiple Files.)


    The Bookmark

    The bookmark also saves a location (like the location list), but only
    you can set it (PC-Browse never sets it). The bookmark remains in
    effect until you set a new one.

    To set the bookmark:

    *  Press Ctl Home.

    To return to the bookmark:

    *  Press Ctl End.


    Pasting and Printing

    You can paste selected text into your original application. You can
    also print selected text to your printer or to a file. Pasting into
    your application tells PC-Browse to "type" it just like it came from
    the keyboard. If you're pasting text into a word processor, make sure
    it is set for "insert" or "pushright" mode; otherwise, existing text
    may be overwritten.

                                    - 73 - 
    To paste or print with PC-Browse:

    1. Press F7 to paste, or Shf F7 to print.  You get the following menu:

    |                                                                     |
    +Esc:Cancel F4:Start mark F5:Marked text F6:Filename F7:Window F8:Page+

    2. Press one of the following keys:

       Esc        Cancels the operation and returns to the PC-Browse Main
       Menu.

       Up/Down    The up- and down-arrow keys move the blinking cursor to
       Arrow      select lines for marking (this is the only time PC-Browse
                  uses a cursor).

       F4         Starts marking lines, beginning with the cursor line.

       F5         Pastes or prints the marked lines.

       F6         Pastes or prints the name of the current file, with the
                  drive and path.

       F7         Pastes or prints the contents of the current PC-Browse
                  window.

       F8         Pastes or prints the entire current page that you are
                  viewing. The page may extend in either direction beyond
                  the window to the page break.

    3. For a Paste, PC-Browse then asks when you want to paste the selected
       text:

    |                                                                     |
    +Esc:Cancel paste F9:Paste now F10:Paste when Paste-hotkey pressed----+

    4. Now you have three Paste choices:

       Esc        Cancels the entire paste operation.

       F9         Exits PC-Browse and immediately pastes the text into your
                  application. You must be confident that your cursor is
                  correctly positioned.

       F10        Exits PC-Browse and returns to your application. When
                  you're ready to paste in the text, press Shf Ctl F7 and
                  the selected text will be pasted.





                                    - 74 - 
    5. For a Print, PC-Browse asks if you want a form feed with the
       following menu:

    |                                                                     |
    +Esc:Cancel F9:Send form feed at end (force page out) F10:No form feed+

    6. Now you have three Print choices:

       Esc        Cancels the entire print operation.

       F9         Sends a form feed after printing. This advances
                  continuous feed paper to the next sheet, or ejects
                  sheet-fed paper, including laser printer paper.

       F10        Does not send a form feed after printing. To print
                  several short items on one piece of paper, select F10 for
                  all but the last. On the last item select F9 to advance
                  or eject the paper.

    7. For Paste or Print, if PC-Browse finds any PC-Write font characters
       (codes below 32), it prompts you with:

    |                                                                     |
    +Esc:Cancel Font char found; F9:No font chars F10:Include font chars--+

    8. Now you have three choices:

       Esc        Cancels the entire operation.

       F9         Skips over (does not include) all PC-Write font
                  characters. Select this if you're pasting to an
                  application other than PC-Write, or if you don't want the
                  font characters in a PC-Write document. If you're pasting
                  "hypertext" material with cross-references that use font
                  characters as delimiters, this removes them. Use this
                  option for printing, unless you are printing to a PC-
                  Write file or these characters are printer escape
                  sequences.

       F10        Includes the font characters. This pastes or prints the
                  characters exactly; they are not translated as in
                  PC-Write. For example, if the word "text" is in PC-Write
                  bold font characters (code 2), it sends the code 2's and
                  the word "text" to the printer. It does not print the
                  word "text" in boldface.

    Remarks
    You can turn off the form feed and font character prompts, opting
    instead for a setting of Always (always send form feed, always include
    font characters) or Never (never send a form feed, never include font
    characters). (See: Customizing.)

                                    - 75 - 
    A paste, by default, simulates pressing the Enter key at the end of
    each line. You can change this. For example, if the end-of-line
    character is a space, pasted text will word wrap in a word processing
    program. In a database program, you might want to simulate the Tab key
    at the end of each line, since the Enter key might exit the data-entry
    screen.

    For some applications, including PC-Write versions before 3.03, a paste
    incorrectly simulates the Shf Enter key at the end of a line, instead
    of the Enter key. This is not serious. To correct this, you can
    customize PC-Browse to always include something called the piping
    delay, or to have each paste prompt you as to whether to include it. By
    default, the piping delay never occurs. If you have problems pasting,
    set this parameter to prompt you about including the piping delay, and
    try it both ways. If you include the piping delay, some applications
    may "hang" when you try to paste in text from PC-Browse.


    Setting the Output File Name

    You can set the name of the print output file. You can print to a disk
    file, or add to the end of a file, to accumulate text. You can also set
    a device name, such as LPT2.

    To change the output file name:

    1. Press Shf F6. The cursor jumps to the File prompt.

    2. To print the file on your printer, type PRN and press Enter. PRN
       is the DOS name for the printer. (PC-Browse also sends output to the
       printer if there's no text in this field.)

       To send the output to a file, type the name of the output file. If
       the file already exists, PC-Browse asks you if you want to replace
       it with the new material, append the material to the end of the
       existing file, or cancel the request entirely:

    |                                                                     |
    +File found;  Esc:Cancel  F9:Replace file  F10:Append to end----------+

       Press F9 to replace the file, or F10 to add the material to the end
       of the file.










                                    - 76 - 

```
{% endraw %}

## BR4.DOC

{% raw %}
```
    Customizing

    You customize PC-Browse by defining parameters. There are two types of
    parameters: File Load Parameters and Startup Parameters. This section
    includes:

    *  Descriptions of the parameters
    *  Places you can define parameters


    Descriptions of the Parameters

    Each parameter controls one PC-Browse feature. You only need to define
    a parameter if the default setting of the feature does not fit your
    needs. A parameter consists of:

    *  The switch character, "/" (slash)
    *  The letter or number that represents the parameter
    *  A colon (optional)
    *  One or more letters or numbers, separated by periods.

    You can put spaces between parameters, but not within a parameter. Here
    are some examples of parameters:
       /A:N.A
       /I:60.62
       /W:7

    You can omit any options you don't need in parameters with several
    options. For example, /A:N.N.A  could be written as  /A:..A  since N is
    the default setting.

    In each description below, the first line shows the parameter with its
    default value.


    File Load Parameters

    File load parameters define the window length, keyword delimiters,
    print and paste options, and screen colors for a file. You can include
    file load parameters directly in each PC-Browse file. Then, when you
    load a file, it uses the specific parameters for that file. They can
    also be given as startup parameters when you first load PC-Browse.

    File load parameters in one file can be defined differently from those
    in the next file. Once the parameter is defined it remains active until
    you load another file that actually changes it (loading a new file per
    se doesn't reset parameters to their default settings).





                                      - 77 - 
    Window Length Parameter

    /W:13
       Sets the number of lines in the PC-Browse window, and therefore how
       many windows can fit on the screen (this is also affected by the
       screen length, parameter Y).  The default of 13 lines allows for two
       windows. The minimum total length is three lines, and the maximum is
       the number of lines on the screen (25, or as set by parameter Y).
       The maximum number of windows is limited for small /W: values, as
       shown below.  Here are some possible choices for a 25 line screen:

       /W:13  2 windows of 11 lines  /W:5  5 windows of 3 lines
       /W:9   3 windows of 7 lines   /W:4  6 windows of 2 lines
       /W:7   4 windows of 5 lines   /W:3  8 windows of 1 line

    Keyword Delimiter Parameters

    Delimiters are the symbols that define text as a target keyword, lookup
    trigger keyword, or linear trigger keyword. A delimiter can be any one
    character, empty (no such keyword defined), or a "non-alpha" code that
    matches any space or character that is not a letter (A to Z, a to z) or
    digit (0 to 9). Characters are defined by their character codes. The
    empty delimiter is code 0; non-alpha is code 8. By default, all
    delimiters are zero, so no keywords are defined. Codes 10, 11, 12, and
    13 cannot be delimiters, except 12 (page break) can be used as a start
    delimiter if the keyword is always the first thing on a page. The
    parameter value is the starting and ending delimiter, separated by a
    period.

    /I:0.0
       Defines the target keyword delimiters. There is only one kind of
       target keyword, whether you are doing a linear search or a lookup
       search. To use a lookup search, the two delimiters must be
       different. For example:

       /I:60.62      Starting delimiter is "<"; ending delimiter is ">".

    /J:0.0
       Defines the linear search-trigger keyword delimiters. Using the
       linear trigger and target keyword allows you to link related text
       for easy retrieval. For example:

       /J:47.8       Starting delimiter is " / "; ending is any non-alpha.

    /K:0.0
       Defines the lookup search-trigger delimiters. A lookup is a fast
       search of sorted pages. A lookup trigger can also be included in the
       file for linking text. For example:

       /K:35.8       Starting delimiter is "#"; ending is any non-alpha.


                                      - 78 - 
    Print and Paste Parameters

    /G:P.P.0
       For printing, tells whether or not to include PC-Write font
       characters, whether to include a final form feed, and what
       end-of-line character to use.

       /G:A.x.x      Always print font characters.
       /G:N.x.x      Never print font characters.
       /G:P.x.x      Prompt each time to ask user about font characters
                     (default).

       Printing font characters (most codes from 1 to 31) is different than
       printing the text in the font style. Normally you would only include
       font characters if you were printing to a file to be used with
       PC-Write, or a file with embedded printer codes.

       /G:x.A.x      Always send a form feed after each print request.
       /G:x.N.x      Never send a form feed after the print request.
       /G:x.P.x      Prompt the user after each print request (default).

       For some kinds of files, you may always or never want the form feed.

       /G:x.x.13     Sets end-of-line character to carriage return only.
       /G:x.x.32     Sets end-of-line character to a space.

       By default, PC-Browse sends a carriage return and line feed to the
       printer at the end of each line. You may want to change this because
       of the way your printer works.

    /H:P.N.0
       For pasting, tells whether or not to include PC-Write font
       characters, whether to include a "piping delay", and what
       end-of-line character to use.

       /H:A.x.x      Always paste font characters.
       /H:N.x.x      Never paste font characters.
       /H:P.x.x      Prompt each time to ask user about pasting font
                     characters (default).

       Normally, you only include font characters (codes 1 to 31) when you
       paste PC-Write text from one file to another.

       /H:x.A.x      Always include the piping delay.
       /H:x.N.x      Never include the piping delay (default).
       /H:x.P.x      Prompt each time to ask user about including the
                     piping delay.

       The piping delay makes PC-Browse wait until the second request for
       each key from the host program when pasting. This fixes pasting into
       PC-Write versions up to 3.02, and some other programs. PC-Write

                                      - 79 - 
       versions 3.03 and up, and PC-Write Lite, work with or without it.
       Some programs work without the delay, but hang if you include it.

       /H:x.x.0      Enter keystroke at end-of-line.
       /H:x.x.9      Tab keystroke at end-of-line.
       /H:x.x.32     Space at end-of-line.

       You can set the end-of-line character to fit the needs of the
       program you are pasting to. In many database programs Tab moves from
       field to field. In most word processors, a space makes the pasted
       text wrap correctly. The Enter value (0) and Tab value (9) do not
       actually send codes 0 and 9; instead they simulate the pressing of
       these keys.

    Screen Attribute Parameters

    Screen attributes define the way parts of the PC-Browse window are
    displayed: reversed, underlined, in a color. etc. The parameter has
    three parts, giving values for monochrome, single color, and full color
    displays. Since most people only use one type of monitor, you can enter
    a single value that sets the value for all three (/1:7 is the same as
    /1:7.7.7). To set attributes for a full-color monitor, you must add a
    foreground and a background color to form a complete attribute. Since
    these are file load parameters, each file can use different colors.
    Here are the parts of the PC-Browse window and their default values:

    /0:112.112.112   The Window Frame; the single line border surrounding
                     the window.
    /1:9.15.79       The Menu, found along the bottom frame; displays your
                     options.
    /2:7.7.116       General Text; the text from the file you are viewing.
    /3:1.7.126       Font text; text surrounded by PC-Write font
                     characters.
    /4:9.112.127     Target keywords; text surrounded by target keyword
                     delimiters.
    /5:15.15.113     Trigger keywords; text surrounded by linear or lookup
                     delimiters.
    /6:112.120.64    Text found by a normal search, or selected trigger
                     keyword.
    /7:9.120.79      Top line prompt text, for File and Find prompts.
    /8:7.7.126       Help Text; general text when you view the help file.
    /9:1.120.79      Message Text, on the bottom line.










                                      - 80 - 
    Screen Attribute Values

    Monochrome                  Value    Single Color                 Value
    ---------------------------------    ----------------------------------
    Black                           0    Black                            0
    Underline                       1    Normal (light on dark)           7
    Normal (light on dark)          7    Normal Bright                   15
    Bright underline                9    Reverse (dark on light)        112
    Normal Bright                  15    Reverse Bright                 120
    Reverse (dark on light)       112    Blinking, add                 +128
    Blinking, add                +128

    Full Color
    Foreground     Value      Foreground    Value       Background    Value
    --------------------      -------------------       -------------------
    Black              0      Dark Grey         8       Black             0
    Blue               1      Light Blue        9       Blue             16
    Green              2      Light Green      10       Green            32
    Cyan               3      Light Cyan       11       Cyan             48
    Red                4      Light Red        12       Red              64
    Magenta            5      Light Magenta    13       Magenta          80
    Brown              6      Yellow           14       Brown            96
    Light Grey         7      White            15       Light Grey      112

    Here are some examples:

    /6:9.15.31
       When a search finds the text, it is displayed underlined (9) on a
       monochrome monitor, in bright characters (15) on single color
       composite monitor, and as white letters on a blue background (15 +
       16) on a full color monitor.

    /0:7
       The frame of the window will be displayed with normal light-on-dark
       characters on monochrome and single-color composite monitors. Full-
       color monitors will display the frame as light grey on black.


    Startup Parameters

    Startup parameters tell PC-Browse about your computer and allow you to
    define preferences such as window attributes and hot keys. You enter
    these parameters when you load PC-Browse into memory. Do not put them
    into the file load parameter area.








                                      - 81 - 
    User Preference Parameters

    /A:N.N.N
       Sets three options for interacting with PC-Browse.

       /A:A.x.x       Full but abbreviated main menu option.

       This sets whether you get the abbreviated menu with all function
       keys listed, or the normal main menu with more descriptive key
       names.

       /A:x.A.x      Swap PgUp/PgDn keys with Shf PgUp/PgDn keys.

       Swaps the PgUp/Dn and Shf PgUp/Dn keys, so PgUp and PgDn scroll by
       screenful.

       /A:x.x.A      Swap PgUp and PgDn (also Shf and Ctl versions).

       Swaps the direction of the PgUp and PgDn keys (and their Shf'd and
       Ctl'd versions).

    /Z:COM.EXE.OBJ.OVL.OVR

       This gives file name extensions that PC-Browse doesn't search. If
       you don't want to search a particular database, spreadsheet, etc.
       files, add their extensions to this list. A "+" after the ":" adds
       to the default list; without a "+", this list replaces the default.
       There is a limit of 25 extensions. Note that periods (not commas)
       separate the items.

       /Z:+DBL.WKS   Don't search *.DBL or *.WKS files either.
       /Z:COM.EXE    Search all but *.COM and *.EXE files


    System Parameters

    /C  (default is off)
       Turn on color when present; use color attributes.

       /C            Use color attributes.

    /E  (default is off)
       Tells PC-Browse to use EMS memory, if available. By default it
       doesn't use EMS, since some programs use EMS in non-standard ways.
       PC-Browse can share EMS with most other programs, since it uses EMS
       in standard ways. LIM 3.2 and up is supported. Additional buffers
       set with /X go into EMS, to a maximum of 20K.

       /E            Set PC-Browse to use EMS memory.



                                      - 82 - 
    /M  (default is off)
       Tells PC-Browse to run stand-alone. By default, PC-Browse is
       memory-resident, using approximately 60K of memory. When it runs
       stand-alone, you must load the program each time you want it. Needed
       to run programs from PC-Browse, as in a menu system.

       /M            Set PC-Browse to run stand-alone.

    /X:4096.1024
       Tells PC-Browse how much memory to reserve for the text buffer and
       the location list. A larger text buffer makes searching faster.
       Also, each page in a file used for a lookup search must fit in the
       text buffer. The location list size indicates approximately how many
       location entries can be saved, with about 45 bytes per entry. The
       total of both numbers cannot exceed 36K bytes (less any extra screen
       buffer set with /Y).

       /X:6000.1024  Increase text buffer to 6000 bytes.
       /X:4096.2000  Increase location list to 2000 bytes.

    /Y:25.80
       If your monitor supports more than 25 lines (many EGAs and VGAs
       offer this option) or more than 80 characters per line, this option
       lets you use the full height. PC-Browse windows are always 80
       columns wide, but it uses the true screen width to save the
       application screen. PC-Browse knows about some 132 column displays
       automatically. Increasing these parameters requires memory (about 4K
       more for a 50-line display), limiting the maximum PC-Browse text
       buffer length (see /X parameter).

       /Y:43.80      EGA with 43 line display.
       /Y:50.80      VGA with 50 line display.
       /Y:66.132     Special 66 line by 132 column display.

    /B:N.N
       Sets two options for display adapters.

       /B:A.x        Remove synchronization, speed up EGA/VGA. Normal video
                     synchronization avoids "snow" on CGA display adapters.
                     If you have an EGA or VGA adapter this option can
                     speed up operation.
       /B:x.A        Remove text mode check, permit non-standard modes.
                     Removes the check for a normal video text mode. If
                     PC-Browse won't pop up with a non-standard or
                     extra-function display adapter, try it. If you get
                     non-textual garbage when PC-Browse pops up, the
                     display is in graphics mode and PC-Browse won't work.





                                      - 83 - 
    Hot Key Parameters

    To avoid conflicts with other programs, or just for personal
    preference, you can redefine the hot key combinations. You may use any
    one key with the Shf, Ctl, and Alt keys. The value is a number from 0
    to 7 for the Shf/Ctl/Alt status, a period, and a number (the scan code)
    for the individual key. Here are the Hot Key parameters and their
    defaults:

    /P:3.59   (Shf Ctl F1)   Pop up PC-Browse to the last place viewed.
    /Q:3.60   (Shf Ctl F2)   Pop up and do a lookup search for the word at
                             the cursor.
    /R:3.61   (Shf Ctl F3)   Pop up and do a linear search for the word at
                             the cursor.
    /S:3.65   (Shf Ctl F7)   Paste text into application, if paste is
                             active.
    /T:3.66   (Shf Ctl F8)   Pop up and move to the File text area to do a
                             directory.
    /U:3.67   (Shf Ctl F9)   Pop up and move to the Find text area.
    /V:3.68   (Shf Ctl F10)  Pop up and move to the first page.

    Shf/Ctl/Alt keys:
    0   (none)       2   Ctl          4   Alt          6   Ctl Alt
    1   Shf          3   Shf Ctl      5   Shf Alt      7   Shf Ctl Alt

    Keyboard Scan Codes:

       Key   Code    Key   Code    Key   Code    Key   Code    Key   Code
       ----------    ----------    ----------    ----------    ----------
       Esc    1      E     18      J     36      PtSc  55            76*
       1      2      R     19      K     37      SpBar 57      Rt    77
       2      3      T     20      L     38      F1    59      G+    78
       3      4      Y     21      ;     39      F2    60      End   79
       4      5      U     22      '     40      F3    61      Dn    80
       5      6      I     23      `     41      F4    62      PgDn  81
       6      7      O     24      \     43      F5    63      Ins   82
       7      8      P     25      Z     44      F6    64      Del   83
       8      9      [     26      X     45      F7    65
       9     10      ]     27      C     46      F8    66
       0     11      Rtrn  28      V     47      F9    67
       -     12      A     30      B     48      F10   68
       =     13      S     31      N     49      Hm    71
       Bksp  14      D     32      M     50      Up    72
       Tab   15      F     33      ,     51      PgUp  73
       Q     16      G     34      .     52      G-    74
       W     17      H     35      /     53      Lf    75

      * (Code 76 is the center key of the numeric keypad, with NumLock on
        it is the 5 key.)



                                      - 84 - 
    Here are some examples:

       /P:4.25       Sets the hot key for popping up to Alt P.
       /U:0.57       Sets the Paste hot key to the space bar (fine as long
                     as you don't ever use spaces. As a rule, don't
                     redefine a hot key as a single keyboard key without
                     one of the shift keys.)

    Remarks
    Redefining hot keys can be useful, but you can run into conflicts with
    other programs. Be aware of key combinations used by other programs,
    including other pop-up programs. For example, PC-Write uses Shf Ctl F5 to
    clear the hold area, and Shf Ctl F6 to append a box to the hold area.


    How to Define Parameters

    There are four ways to define parameters. PC-Browse reads them in the
    following order:

       1. The control file called BR.DEF
       2. The environment string SET BR=
       3. The command line when you enter the BR command.
       4. Within a text file, in [BR=...] brackets on the first line.


    Defining Parameters in the BR.DEF File

    When you run PC-Browse, it first looks for a file called BR.DEF. This
    file must be in the current directory when you call PC-Browse, or in a
    directory listed in PCBROWSE or PATH environment strings. You can
    create BR.DEF with PC-Write or any text editor. BR.DEF is limited in
    size to the text buffer size, usually 4K.

    The main advantage of using BR.DEF is that each parameter can go on a
    separate line. This means you can place comments after the parameters
    to document them. In the other methods, all parameters must be listed
    on the same line.

    To define parameters with BR.DEF:

    1. Using a text editor or PC-Write, create a file named BR.DEF in the
       directory from which you normally call PC-Browse or in a directory
       in the PATH.

    2. Place each parameter definition on its own line. If you want to use
       comments, start each with a left parenthesis. You don't need to end
       them with a right parenthesis. For example, to use a color monitor,
       set the basic pop-up hot key, set the length of the window, and



                                      - 85 - 
       change the color of the text in the window, create a BR.DEF file
       like this:

       /C            (use a color monitor
       /P:5.48       (set basic pop-up key to Shf Alt B (B is for Browse)
       /W:7          (set window length to 7 lines; allows 4 windows
       /2:4          (set normal text to black with red


    Defining Parameters in the Environment

    After it checks for a BR.DEF file, PC-Browse checks the computer's
    environment for a BR= string. If PC-Browse finds the same parameter
    defined in both BR.DEF and the environment, the environment setting
    takes precedence.

    The environment is an area of memory where DOS holds text parameters.
    You place text into the environment with the DOS SET command. The
    information from the DOS PATH and PROMPT commands is put into the
    environment. There is one restriction; the default environment is
    limited to 160 bytes. If you exceed this, you get the message:

       Out of environment space

    If you have a long PROMPT (it might look neat, but it eats space) or
    PATH, you can decrease their sizes, leaving more room. If you use DOS
    version 3.1 or later, you can increase the environment (to a maximum of
    32,768 bytes) by adding the SHELL command to your CONFIG.SYS file, as
    follows:

       SHELL=c:\command.com /e:# /p

    where "c:\command.com" is the command processor and "#" is the new
    size, in bytes. (DOS 3.1 only: /e: is in 16 byte blocks, and you must
    remove all spaces in the line.)

    To define parameters in the environment:

    *  At the DOS prompt type:

       SET BR=/parameter1/parameter2/parameter3/...........

       Note that there must be no space between "BR" and the equals sign.
       For example, to set a color monitor, the basic pop-up hot key, the
       window length, and the color of the text in the window, type the
       following at the DOS prompt:

       Set BR=/C/P:5.48/W:7/2:4




                                      - 86 - 
    Defining Parameters from the Command Line

    After PC-Browse checks the environment, it searches the command line
    for parameters. You enter parameters on the command line like you do in
    the environment, all on one line and one right after the other (or
    separated by spaces). Place the parameters after the BR command, and
    after the file name, if any. If there are parameter conflicts with
    either the BR.DEF file or the BR= environment string, the command line
    takes precedence.

    To define parameters from the command line:

    *  At the DOS prompt, type:

       BR filename /parameter1 /parameter2 /parameter3 /.....

       where "filename" is the file to load into PC-Browse (optional). For
       example, to load the default file HAMLET, and set a color monitor,
       the basic pop-up hot key, the window length, and the color of the
       text, type the following when loading PC-Browse into:

       BR HAMLET /C /P:5.48 /W:7 /2:4


    Defining Parameters Within a File

    Finally, as PC-Browse loads each file, it checks for parameters on the
    first line. You can only define file load parameters in a file, not
    startup parameters. These parameters take precedence over all others. A
    parameter in a file stays set until you load another file with a
    different setting for that parameter. Parameters must occur in the
    first 160 characters of the first line of the file.

    To include file load parameters in a file:

    *  Anywhere in the first 160 characters of the first line of the file,
       type:

       [BR=/parameter1/parameter2/......]

       For example, to set the window length type the following on the
       first line of the file:

       [BR=/W:7]








                                      - 87 - 
    Summary of Parameters

    Parameter(default)   Description
    ------------------   --------------------------------------------
    /A:N.N.N             Choose Menu type and PgUp/Dn actions.
    /B:N.N               Video Synchronization and Text Mode check.
    /C (off)             Use Full Color screen attributes.
    /E (off)             Use EMS expanded memory.
    /G:P.P.0             Print: include fonts, form feed, end-of-line char.
    /H:P.N.0             Paste: include fonts, piping delay,end-line char.
    /I:0.0               Target keyword delimiter.
    /J:0.0               Linear search-trigger delimiter.
    /K:0.0               Lookup search-trigger delimiter.
    /M (off)             Run in stand alone mode.
    /P:3.59              Set basic "last page viewed" hot key.
    /Q:3.60              Set "lookup search word at cursor" hot key.
    /R:3.61              Set "linear search word at cursor" hot key.
    /S:3.65              Set "Paste text" hot key.
    /T:3.66              Set "Directory" hot key.
    /U:3.67              Set "Pop up to Find text" hot key.
    /V:3.68              Set "Pop up to first page" hot key.
    /W:13                Set length of window, in lines.
    /X:4096.1024         Set size of text buffer and location list.
    /Y:25.80             Set size of screen display (rows and columns).
    /0:112.112.112       Set screen attribute for the Window Frame.
    /1:9.15.79           Set screen attribute for the Menu.
    /2:7.7.116           Set screen attribute for the General text.
    /3:1.7.126           Set screen attribute for PC-Write font text.
    /4:9.112.127         Set screen attribute for Target keywords.
    /5:15.15.113         Set screen attribute for Trigger keywords.
    /6:112.120.64        Set screen attribute for text found by a search.
    /7:9.120.79          Set screen attribute for File and Find prompts.
    /8:7.7.126           Set screen attribute for Help text.
    /9:1.120.79          Set screen attribute for Message text.


















                                      - 88 - 
    Appendix


    Using PC-Browse with other programs

    PC-Browse is designed to be as friendly as it can be with other
    application programs and TSR's (memory resident programs). You may load
    PC-Browse first if other TSR's request that they be loaded last (don't
    they all). Conflicts may, however, occur whenever you are using a TSR.
    Sometimes redefining the hot key will resolve the problem, sometimes
    changing the load order will help, and sometimes two programs or a
    combination of programs simply will not work together. Here are the
    conflicts we are aware of:

    Novell Network
       Load PC-Browse before network software. Novell must be loaded last.
    Ventura Publisher
       Unload PC-Browse before running Ventura; it needs plenty of memory.
    PC-Tools, version 5.0
       If you use the shell program, load PC-Browse first.
       Works ok with version 5.5.
    Software Carousel
       Don't pop up PC-Browse with left shift key; it blanks the screen.
    TallScreen
       Incompatible with PC-Browse.
    Turbo Lightning v1.00a
       If PC-Browse is loaded first, it won't pop up.
       If PC-Browse is loaded last, it works until Lightning pops up.
    Concurrent DOS v2.0
       Incompatible with PC-Browse.
    Sidekick
       Load PC-Browse first. It pops up over Sidekick, but not reverse.
    InSet
       PC-Browse will pop up over InSet, even in graphics mode.
    Other TSR's in general:
       To avoid possible conflicts within DOS, PC-Browse sets a DOS flag
       to "claim" DOS when it pops up, and checks this flag to be sure DOS
       is free before it pops up itself.  Many other disk-based TSR's do
       the same thing. This means PC-Browse won't pop up over an active
       disk-based TSR, and vice versa.


    Using PC-Browse with other hardware

    Keytronics 5151 Keyboard
       PC-Browse may interpret keys on the separate cursor pad as shifted
       when they are not.  Check with Keytronics for an EPROM upgrade to
       solve this problem.




                                      - 89 - 
    About the Program's Author

    Steven B. Levy has been programming, on and off, since the late '60s.
    In the "on" periods, he created one of the earliest microcomputer-to-
    typesetting conversion programs. Among the other software he has
    developed are a variety of educational programs for the high school and
    college markets and interactive, computer-based training materials for
    companies ranging from A.I. giants to retail stores. He joined
    Quicksoft as Senior Programmer and Development Manager in 1988. (In the
    "off" times, he was Artistic Director for eight years of an Off-Off-
    Broadway theatre company and played in a bunch of rock-and-roll bands.)


    Licensing PC-Browse

    PC-Browse is shareware. This is an unusual approach to marketing
    software, one we at Quicksoft have used for many years and that works
    well for us and our many customers.

    If you have a PC-Browse full registration, printed PC-Browse manual, or
    just a user certificate, you have the right to use the PC-Browse
    software with your own files. If not, we do expect you to pay for the
    use of PC-Browse by purchasing one of these items. Prices are:

      Full PC-Browse Registration (include current software, full printed
        manual, PC-Browse user certificate, technical support for one year,
        and our newsletter, Quicknotes, for one year)....$49.00

      PC-Browse printed manual and User Certificate......$24.00

      PC-Browse user certificate only....................$10.00

    We have group and campus licenses available for cases in which multiple
    users in an organization will be using PC-Browse.

    If you received PC-Browse with application files from someone else,
    they are responsible for paying for your use of PC-Browse with their
    files. You still need to pay for the use of PC-Browse if you use it
    with your own files.

    Assuming you have a copy of the PC-Browse software diskettes, you are
    also encouraged to give copies of these diskettes to other people to
    evaluate PC-Browse, with some restrictions given below.

    If you want to distribute PC-Browse with your own information
    (application files), you must get a license from Quicksoft. This is
    only fair, since people receiving your information (your customers,
    clients, employees, students, etc.) are indeed using PC-Browse with
    your information, not just evaluating PC-Browse for their own use.



                                      - 90 - 
    This license is simple, easy to get, and inexpensive. There are three
    payment options:
      1. A one-time fee based on projected use.
      2. A royalty per unit sold or distributed.
      3. A user certificate per person using it.

    To order, or for more information call Quicksoft at 1-800-888-8088.

    The rules on shareware distribution of PC-Browse are:

    1. Please don't copy this printed manual. Purchases of the book pay for
       the software. That's why each book comes with a User Certificate.

    2. Please distribute complete, unmodified copies only. The person
       receiving it deserves a full collection of all files. You can
       compress and/or transmit files.

    3. Please do not include your own PC-Browse application files (where
       PC-Browse is used in a productive way) unless this use is licensed
       as described above. You may include other types of files when you
       distribute PC-Browse, such as descriptions or tutorials.

    4. Please don't distribute copies outside the United States, Canada,
       Australia, and New Zealand. In other countries like Great Britain,
       France, and Germany, PC-Browse is not distributed as shareware.

    5. If you're advertising the diskettes, please describe PC-Browse as
       "shareware" and note Quicksoft trademarks "PC-Browse" and
       "Quicksoft".

    Quicksoft is a member of the Association of Shareware Professionals
    (ASP). For more information about shareware, you can contact ASP at PO
    Box 5786, Bellevue, WA  98006.



















                                      - 91 - 
    Glossary

    Application File
       A file loaded into PC-Browse used to help people manage information.
    Application Program
       The program running on the computer when PC-Browse pops up, from
       which PC-Browse gets a word to find, and to which PC-Browse can
       paste text.
    ASCII
       American Standard for Computer Information Interchange, a character
       set.
    Bookmark
       A PC-Browse tool for marking your place in a file so you can quickly
       return to it.
    Cross-reference
       See Link.
    Delimiter
       A character used to "flag" text as a type of keyword in the file.
    File Area
       The area on the top frame of the window (left side) where the file
       name or file name pattern to be searched is typed.
    File Load Parameter
       Parameters that define information that applies to a particular
       file. The definitions of file load parameters are kept with each
       file on the first line.
    File Name Pattern
       A combination of text and/or wild card characters that defines which
       files to include in a multi-file search. The file name pattern is
       used in place of a specific file name.
    Find Area
       The area on the top frame of the window where the text to be
       searched for is typed.
    Find Text
       The text that is to be searched for.
    Host Document
       The application software (or DOS) that is running when you activate
       PC-Browse.
    Hot Key
       Key or combination of keys that activates (pops up) a TSR program.
    Hypertext
       Non-linear text; text with links from one point or block to another
       pointer or block (term invented by Ted Nelson).
    Linear Search
       One of the three search methods. Instead of searching for all
       occurrences of text, searches only for text designated as a target
       keyword, through the use of delimiters.
    Link
       A connection between two places in a file or between two files,
       based on a trigger keyword in one place and a target keyword in the
       other place; a cross-reference.


                                      - 92 - 
    Location List
       A method of remembering each place (location) as you search within a
       file or across files. You can move quickly, back and forth, along
       the list.
    Lookup Search
       One of the three search methods. Like the linear search it only
       looks for text designated as a target keyword. Lookup search can
       only be done on a file sorted alpha-numerically. It is a fast method
       of searching large amounts of information.
    Multi-File Search
       Any search that automatically searches more than one file for the
       find text. Wild card characters are used to build a file name
       pattern in place of a specific file name. PC-Browse then searches
       for all files that match the file name pattern.
    Normal Search
       A search for any and all occurrences of the find text.
    Open
       Creates another window on your screen (assuming space is available).
       The new window will be an exact copy of the current window.
    Parameter
       Defines the way PC-Browse works. See File Load and Startup
       Parameters.
    RAM-resident
       See TSR.
    Shut
       Close the current window and return to the last window opened, or to
       the host document if there is only one window.
    Startup Parameter
       Parameters that define information common to all files.
    Target Keyword
       The delimited text within a file that both a lookup and linear
       search attempt to find.
    Trigger Keyword
       The delimited text within a file that initiates (triggers) a lookup
       or keyword search for the matching target keyword.
    TSR
       Terminate and Stay Resident. A TSR program loaded into your computer
       memory (RAM) remains inactive and invisible until you activate it.
       Also called RAM-resident.
    Wild Card
       A special character that matches or represents another character or
       characters. There are two kinds: file name pattern wild cards and
       text search wild cards.
    Window
       The box that appears over the top of your host document when the hot
       key is pressed. PC-Browse allows for more than one window to be
       visible at a time. The actual number of windows that can be
       displayed depends on the number of lines on the screen and length of
       each window. See also Open and Shut.



                                      - 93 - 
    Index
    entries with * are found in the tutorial section.

    43 line display                 83    Find Prompt                   51
    50 line display                 83    Linear                        50
    About this User's Guide          6    Lookup                        50
    Application files                7    Popping up                   12*
    ASCII                           54    Paste                         74
    Attributes                      80    Top of File                   51
    Bksp                             6  How to define parameters        85
    Bookmark                        73  Hypertext                  19*, 65
    BR.DEF                          85    building links                43
    BREF.BRS                         7    Hamlet application           20*
    BTUT.BRS                         7  Index page creating             43
    Case matching                   59  Installation                     7
    Color monitor                   82  Keyword delimiters              78
    Colors                          80  keyword search                  64
    Command line parameters         87    using an index page          19*
    Ctl                              6  LIM memory                      82
    Customizing                     77  Linear search                   64
    Delimiter rules                 33    adding a trigger              35
    Delimiters                      33    building an application       34
    Delimiters care in using        34    defining delimiters           36
    Directory selecting a file      53    delimiters                    78
    Display size                    83  Linking files                   68
    Documentation on disk            7  Loading PC-Browse              11*
    EGA                             83    an application                52
    EMS memory                      82    autoexec.bat                  48
    End-of-line character               Location list                   71
      for pasting                   79    adding manually               72
      for printing                  79    changing size                 83
    Environment                           limit                         72
      defining parameters in        86    move back                     72
      increasing size               86    move forward                  72
    Exit                            49    view entries                  72
    Expanded memory                 82  Lookup search               37, 64
    File load parameters        77, 87    adding a trigger              42
    Font characters                       build file with mail merge    40
      for pasting                   79    defining the parameters       41
      for printing                  79    requirements               37,64
    Foreign characters              61    Sailboat application         22*
    Form feed handling              79    sorting the targets           39
    Function key summary            46    delimiters                    78
    Glossary                        91  Manual Terminology & Notation    6
    Grey+                            6  Memory loading into             47
    Grey-                            6  Menu                        45, 69
    Help                            45    abbreviated                   46
    Hot key                         49    default                       46
      Basic                         49    set style of                  82
      Definition                    84    viewing main menu             45
      Directory                     51  Monitor display size            83

                                      - 94 - 
    Multiple file search            62  PCBROWSE=               48, 53, 53
      list files                    62  PgUp/Dn options                 82
      load files                    63  Piping delay                    79
      files not searched            64  Pop up                     12*, 49
    Non-alpha character             33  Print                           73
    Non-ASCII files                 55    PC-Write font characters      75
    Non-document                    54    sending form feeds            75
    Non-resident mode           69, 83    to a file                     76
    Normal search                  58  Program diskette                 7
      multiple files               15*  Reference diskette               7
      one file                     13*  Running other programs          69
      word from another program     58  Sample files using AREACODE    17*
    Parameters                      77  Sample files using HAMLET      20*
      BR.DEF file                   85  Sample files using MISUSED     19*
      color monitor                 82  Sample files using Quarto      21*
      defining  from command line   87  Sample files using SAILBOAT    22*
      defining in environment       86  Screen attributes               80
      EMS memory                    82    values                        81
      end-of-line character paste   79  Screen colors                   80
      end-of-line character print   79  Screen size                     83
      File Load                     77  Scroll
      Files not to search           82    bottom of file                57
      font characters for pasting   79    horizontally                  57
      font characters for printing  79    next trigger                  57
      form feed handling            79    one line                      55
      hot key                       84    one page                      56
      how to define                 85    one window                    56
      keyword delimiters            78    top of file                   57
      linear search delimiters      78  Search keys                     58
      location list size            83  Searching a single file        13*
      lookup search delimiters      78  Searching multiple files   15*, 62
      Menu option                   82  Selecting a file               12*
      monitor display size          83  SET BR=                         86
      PgUp/Dn options               82  SET PCBROWSE=           48, 53, 54
      piping delay                  79  Shf                              6
      screen attributes             80  Shf Ctl F1                      49
      SET BR=                       86  Shf Ctl F2                      50
      stand alone version           83  Shf Ctl F3                      50
      startup                       81  Shf Ctl F7                      74
      summary                       88  Shf Ctl F8                      51
      target keyword delimiters     78  Shf Ctl F9                      51
      text buffer size              83  Shf Ctl F10                     51
      text mode check               83  Sort order                      37
      video synchronization         83  Stand alone version         69, 83
      Window Length                 78  Startup parameters              81
      file load                     87  Subdirectory-creating            8
    Paste                           73  Suggested Applications          29
      end-of-line character         75  Summary of parameters           88
      into another program          14  Target                     19*, 34
      marking text                 14*  Target keyword delimiters       78
      PC-Write font characters      75  Text buffer changing size       83

                                      - 95 - 
    Text mode check                 83
    Trigger                    19*, 34
    Trigger jump to next            57
    TSR
      conflicts with other programs 89
      definition                    47
      working with other programs   89
    Unload                          48
    Using with other programs       89
    Using sample file AREACODE     17*
    Using sample file HAMLET       20*
    Using sample file MISUSED      19*
    Using sample file SAILBOAT     22*
    Using sample QUARTO            21*
    VGA                             83
    Video synchronization           83
    Viewing a File                 12*
    What is PC-Browse                5
    Wild card patterns          51, 62
      multi-file search             15
      searching                     59
    Windows
      length                        78
      multiple                      70
      open                     16*, 70
      reopen                        71
      shut                          71
    "Snow"                          83
    [BR=...                         87























                                      - 96 - 

```
{% endraw %}

## FILE1671.TXT

{% raw %}
```
Disk No: 1671                                                           
Disk Title: PC-Browse Reference Disk (1670 also)                        
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: PC-BROWSE                                                
Author Version: 1.01                                                    
Author Registration: $69.00 plus $5 shipping                            
Special Requirements: None.                                             
                                                                        
The PC's primary limitation has just been overcome! Finally you can be  
working in one application, and still have access to the information    
contained in all your other text files. Imagine you're working in your  
spreadsheet when you realize you need some information in a memo you    
wrote two days earlier.  No need to exit your spreadsheet, just use PC- 
BROWSE to pop the old memo onto the top of your screen.  Better still,  
PC-BROWSE will let you cut and paste part or all of that memo right into
your spreadsheet--even though the original memo was written with your   
wordprocessor.  Sounds incredible, and it is!                           
                                                                        
PC-BROWSE is a top notch software product from Quicksoft, the authors of
famed PC-Write.  As expected, PC-BROWSE is loaded with all the extras   
needed to optimize your use of this powerful tool. PC-BROWSE will let   
you search entire directories for a word or phrase, then view each file 
in that directory where the requested word or phrase occurs.  Once you  
find what you were looking for, you're free to browse through the       
surrounding text.                                                       
                                                                        
Because PC-BROWSE can actually recognize the word at your cursor when   
activated, it has hypertext-style functionality never before possible on
an overhead memory program requiring only 60K of RAM (3K if loaded into 
EMS).  PC-BROWSE is so well designed, it can even remove itself from    
memory when you no longer need its unique skills, all without rebooting-
-now that's polished software.                                          
                                                                        
The uses for PC-BROWSE are numerous:  create on-line context-sensative  
help files for any program, create study guides or customized           
dictionaries, compile a program with often used lines of code, write a  
telemarketing script with various categories of information, keep       
product literature handy and accessible by product number, features, or 
use.  But most importantly, you will never have to exit your current    
application to go browse text files in an attempt to find additional    
data; PC-BROWSE will do it for you.                                     
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1671

     Volume in drive A has no label
     Directory of A:\

    BR1      DOC     64780   9-29-89   7:27p
    BR2      DOC     35051   9-29-89   7:27p
    BR3      DOC     76158   9-29-89   7:28p
    BR4      DOC     46831   9-29-89   7:28p
    FILE1671 TXT      3627   1-01-80  12:14a
    GO       BAT        20   9-29-89   7:20p
    READ2    ME        603   9-29-89   7:29p
            7 file(s)     227070 bytes
                           91136 bytes free
