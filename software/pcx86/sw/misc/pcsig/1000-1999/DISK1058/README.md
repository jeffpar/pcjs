---
layout: page
title: "PC-SIG Diskette Library (Disk #1058)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1058/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1058"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EXPRESSGRAPH"

    EXPRESSGRAPH is an easy-to-use business graphics program.  Numbers can
    be analyzed much more easily and quickly when they are displayed in
    graphic form.  It lets you display numbers in a variety of graphic
    formats.  Then you can choose the display you like best, and print your
    graph.
    
    Here are some examples of how people use EXPRESSGRAPH:
    
    ~ Graphing sales dollars and gross profit on a weekly basis
    
    ~ Displaying financial data graphically
    
    ~ Analyzing budgets and expenses with a pie chart
    
    ~ Spotting trends amid a "sea of numbers"
    
    ~ Providing summarized data in graphic form to accompany financial
    statements, for quick analysis and trend spotting
    
    The data for the graph can be imported from one of three formats,
    including DIF, or entered from within EXPRESSGRAPH.  Save the data on
    disk and reload later for further changes or review.  Graphs created
    with EXPRESSGRAPH can be displayed in one of 10 graphic formats (pie,
    line, bar, etc.), altered in various ways, and printed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1058.TXT

{% raw %}
```
Disk No: 1058
Program Title: EXPRESSGRAPH version 1.04
PC-SIG version: 1.1

EXPRESSGRAPH is an easy-to-use business graphics program.  Numbers can
be analyzed much more easily and quickly when they are displayed in
graphic form.  It lets you display numbers in a variety of graphic
formats.  Then you can choose the display you like best, and print your
graph.

Here are some examples of how people use EXPRESSGRAPH:

   ~ Graphing sales dollars and gross profit on a weekly basis.
   ~ Displaying financial data graphically.
   ~ Analyzing budgets and expenses with a pie chart.
   ~ Spotting trends amid a "sea of numbers."
   ~ Providing summarized data in graphic form to accompany financial
     statements, for quick analysis and trend spotting.

Graphs created with EXPRESSGRAPH can be displayed in one of ten graphic
formats, altered in various ways, and printed out.  The data for the
graph can be saved on disk and reloaded later for further changes or
review.

Usage:  Business Graphics

Special Requirements:  None.

How to Start:  Type PRINTDOC (press enter).

Suggested Registration:  $49.00

File Descriptions:

EXAMPLE? ???  Example graphic files (2 files).
FIX      COM  Fix-it program.
GRAPH    DOC  Documentation.
GRAPH    EXE  Main program file.
GRAPH?   EXE  Sub-programs (2 files).
ORDER    BAT  Batch file for printing order.
ORDERFRM DOC  Explanation of Order Form.
PRINTDOC BAT  Batch file for printing manual.
README        Information about EXPRESSGRAPH.
SAMPLE?? GRF  Sample graph data files (17 files).
TUTORIAL GRF  Graph data file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GRAPH.DOC

{% raw %}
```
-






    ---------------------------------------------------------------










                          E x p r e s s G r a p h

                               User's Guide




                                     by
                                David Berdan














                            E X P R E S S W A R E
                                CORPORATION
                                P.O. Box 230
                             Redmond, WA 98073

                            (C) Copyright 1986





    ---------------------------------------------------------------













-






    ---------------------------------------------------------------


                                PREFACE

    This diskette version of the documentation contains the complete
    ExpressGraph manual. The text on this diskette is almost identical
    to the text in the typeset version of the manual which comes with
    registered ExpressGraph. However, because of the limitations of
    most users' printers, it is not possible to include the illustrations,
    such as examples of graphs.


    Most of the illustrations in the ExpressGraph manual are simply
    displays of graphs as they would appear on the screen. In this
    manual, wherever one of those illustrations would have appeared,
    you will instead see something like this:

            --------------------------------------------------

                               ILLUSTRATION


                              Load TUTORIAL
                        Select BAR CHART - REGULAR

            --------------------------------------------------

    By following the instructions in each box, you can create the
    illustration on your screen as it appears in the typeset manual. If
    you have a graphics printer, and you want to save a copy of the
    graph for future reference, press the F9 key to print it out.
















    ---------------------------------------------------------------










-






    ---------------------------------------------------------------







    Changes are periodically made to the information contained herein.
    These changes will be incorporated into future editions of this
    publication.


    A User Response Form is provided at the back of this publication.
    If this form has been removed, please address your comments to:


                           E X P R E S S W A R E
                           C O R P O R A T I O N
                                P.O. Box 230
                             Redmond, WA 98073














                             Proprietary Notice

    ExpressGraph is a proprietary product written by David Berdan, and
    is published by Expressware Corporation, Redmond, Washington.


    All rights reserved except those expressly granted to the user by
    this document.




    ---------------------------------------------------------------











-






    Contents


    ---------------------------------------------------------------



          1       Introduction

          3       System Requirements

          4       Getting Started

          6       A Brief Tutorial

          12      General Information

          14      Keyboard Conventions

          16      The Main Menu

          18      Entering Data

          23      Drawing Graphs
          27      Line Graphs
          33      Bar Charts
          40      Pie Charts

          43      Saving Data To Disk

          45      Loading Data From Disk

          54      Optional Specifications

          62      Pattern Sequences

          63      Advanced Features
          63      Transpose and Flip
          65      Adding Text to Graphs

          69      Technical Information
          69      System Requirements
          69      Capacities
          69      Single Drive Users
          70      Users With Hard Disks
          70      Users With RAM Disks
          71      Color Monitors












-






                                                            Contents








          72      Customizing ExpressGraph

          74      ExpressGraph File Format

          77      The Files On The Disk

          78      Some Frequently Asked Questions

          79      Distribution Notice

          80      User Response Form

          83      Order Form

          85      Index



































-







                                                         INTRODUCTION


    ---------------------------------------------------------------

                             INTRODUCTION


    ExpressGraph is an easy-to-use business graphics program. Numbers
    can be analyzed much more easily and quickly when they are displayed
    in graphic form. ExpressGraph allows you to display numbers in a
    variety of graphic formats. Then you can choose the display you like
    best, and print your graph.

    Here are some examples of how people use ExpressGraph:

      * Graphing sales dollars and gross profit on a weekly basis, using
        line graphs and bar charts.

      * Displaying financial data graphically, to see how a company is
        changing, or to compare two or more companies' financial status.

      * Analyzing budgets and expenses with a pie chart: which expenses
        are most significant? Which ones are increasing?

      * Spotting trends amid a "sea of numbers". A graph can make a
        strong trend easy to identify, while the same data may go
        unnoticed when displayed numerically.

      * Providing summarized data in graphic form to accompany financial
        statements, for quick analysis and trend spotting.


    Graphs created with ExpressGraph (GRAPH) can be displayed in one of
    ten graphic formats, altered in various ways, and printed out. The
    data for the graph can be saved on disk and reloaded later for further
    changes or review.

    And if you want to add some finishing touches to your graph, just move
    the cursor around on the screen and enter additional text in small,
    medium and large sizes.




                                                                        1












-







    INTRODUCTION


    There is an old saying that a picture is worth a thousand words. To
    paraphrase that old saying, a graph is worth a thousand numbers. In
    fact, a recent research study compared businessmens' ability to absorb
    information from graphs, versus absorbing the same information from
    financial statements and other business reports. The study showed that
    the businessmen absorbed information 1200 times faster when it was in
    graphic form. And they tended to retain the information longer too,
    because their mind had a "picture" to remember. So maybe in the
    interest of accuracy, our paraphrase should read: "a graph is worth
    1200 numbers".

    This manual describes all the features of GRAPH in detail. It is
    recommended that the manual be read completely before using
    GRAPH, but you will find that it is so easy to use, many of its
    features can be mastered even without the documentation. For that
    reason, this manual has been organized as a reference document rather
    than a tutorial. There is a tutorial section at the beginning, titled
    "A Brief Tutorial", but the rest of the manual is designed for quickly
    finding information about specific commands and functions.























    2












-







                                               SYSTEM REQUIREMENTS


    ---------------------------------------------------------------

                         SYSTEM REQUIREMENTS


    GRAPH runs on the IBM PC and compatible systems with the following
    minimum configuration:

         * 256K computer memory.

         * An MSDOS or PCDOS operating system version 2.0 or later.

         * A graphics monitor, either monochrome or color.

         * A graphics adapter board. GRAPH does not work with mono-
           chrome boards.

         * A double sided diskette drive. GRAPH is also compatible
           with hard disks and RAM disks.

         * A printer is optional. To print graphs, your printer must
           either be an IBM or Epson compatible graphics printer, or
           must have a special graphics program for doing screen prints
           of graphic displays.


















                                                                        3












-







    GETTING STARTED


    ---------------------------------------------------------------


                           GETTING STARTED

    The following information is provided to get you up and running with
    GRAPH as quickly as possible. We recognize that most people try
    running a program before they read the User's Guide. This section
    gives you enough information to make a backup copy of GRAPH and to
    get the program started.

    1. Turn on your computer and load the DOS operating system. The
       GRAPH disk does not have DOS on it, so use a diskette that does.

    2. FORMAT a blank diskette using the DOS FORMAT command. (See
       your DOS manual if needed.) If you would like the diskette to be
       self-booting, use the /S command so the DOS operating system
       is included on it.

    3. Copy all the program files from the original GRAPH Program
       Disk onto this diskette. GRAPH may also be used on a hard disk, by
       creating a separate subdirectory and copying the files from the
       diskette to it.

    4. In order to print graphs on a dot-matrix printer, your DOS needs
       to be set up so that pressing the Print Screen key prints
       graphic images. If you are using IBM's PCDOS, and you have an IBM
       Graphics Printer, Proprinter, Epson printer or compatible, then
       simply run the program called GRAPHICS. You may want to
       include GRAPHICS in your AUTOEXEC.BAT file. It can be
       useful for screen prints other than ExpressGraph displays. If your
       DOS does not have a program called GRAPHICS, or if your
       printer is not Epson graphics compatible, consult your DOS manual
       or printer manual for information on graphic screen print.

    5. To start ExpressGraph, type: GRAPH and press ENTER. For
       monochrome graphic monitors type: GRAPH /M
       (For more information on /M and other command line options, such
       as turning off sound or specifying a default drive, see the section
       titled "Customizing ExpressGraph".)


    4












-







                                                   GETTING STARTED


    6. The GRAPH banner screen appears:

              --------------------------------------------------




                                 ILLUSTRATION


                                 Start GRAPH
                                 Press PrtSc





              --------------------------------------------------

       Enter the letter of the disk drive where GRAPH disk files are
       to be saved and loaded. Or press ENTER to default to the
       currently logged disk drive.

    7. The Main Menu screen displays. GRAPH is ready to use!

                ----------------------------------------------



                                 ILLUSTRATION


                                 Start GRAPH
                        Press ENTER, then press PrtSc





                ----------------------------------------------


                                                                        5












-







    A BRIEF TUTORIAL


    ---------------------------------------------------------------

                          A BRIEF TUTORIAL


    These are the steps required to prepare a typical graph:

                   1. ENTER the numbers to be graphed.
                   2. SAVE the numbers on disk, if desired.
                   3. DISPLAY the various graphs available until
                      you find the one you want.
                   4. ADD special text to the graph, if any.
                   5. PRINT the graph.

    This tutorial takes you through these steps using a simple graphic
    example. The graph we want to produce analyzes a company's monthly
    sales and monthly gross profit for a year. Here are the numbers to be
    graphed:


                       Month          Sales        Gross Profit
                       -----          -----        ------------
                        JAN           48,000       21,000
                        FEB           31,000       16,000
                        MAR           45,000       20,000
                        APR           51,000       22,000
                        MAY           55,000       24,000
                        JUN           58,000       26,000
                        JUL           43,000       21,000
                        AUG           61,000       28,000
                        SEP           65,000       32,000
                        OCT           74,000       37,000
                        NOV           110,000      58,000
                        DEC           90,000       45,000

    To prepare a graph of these numbers, load GRAPH into your computer,
    following the instructions in the previous section. When the Main
    Menu appears, select 1 - Enter / Edit Data by pressing either
    the <1> key or the <E> key.



    6












-







                                                    A BRIEF TUTORIAL


    The Edit Mode screen appears. If you have used a spreadsheet program
    before, you will find that this screen functions similarly, with rows
    and columns of numbers. The cursor is positioned at the Title field.
    Enter:

                       Annual Sales and Gross Profit

    then press ENTER. The cursor moves to the group heading above the
    first column. Enter:
                                  Sales

    and press ENTER. Each time ENTER is pressed, the cursor moves
    to the next field or "cell" in the column. Before entering any more
    data, let's get a feel for the keyboard and cursor movement.

    In a later section we will discuss the keyboard conventions in
    depth, so for now let's just learn enough to get our sample graph
    data into the computer. Press ENTER a few times. The cursor moves
    downward to the next field. Keep pressing ENTER all the way past
    the sixteenth line. The screen "scrolls" downward, and the next
    sixteen lines are displayed.

    To move upward to a higher cell, press the UP ARROW key. To
    move sideways, press the TAB key to move right, or SHIFT and
    TAB to move left. If you have not entered anything into a field yet,
    then the LEFT ARROW key will move into the left column also. Now
    you have enough information to move around the screen to every field.

    For this tutorial, all the data fits on one screen. For larger
    graphs with more data, it is possible to move off the screen to the
    right or to the bottom, in which case the screen "scrolls" upward or
    sideways to display more columns and lines.

    Now let's enter the month abbreviations, which are Value Names on
    our graph. Although the full month names fit into the fields provided,
    we will only use the first three letters of each month name. Move left
    into the Value Name column using the LEFT ARROW key, then upward
    to the first line, using the UP ARROW. Enter:

                                JAN


                                                                        7












-







    A BRIEF TUTORIAL


    and press ENTER. Then type in each of the remaining eleven month
    abbreviations. They are displayed on the graphs to identify each
    month's data.

    When the month abbreviations have all been entered, move the cursor to
    the top of the first column of numbers, by pressing the HOME key.
    Now enter the sales and gross profit figures to be graphed. (Note: for
    those in a hurry, or those who feel they have mastered the data entry
    part of this tutorial, there is a graph already on disk which contains
    this data; it is named TUTORIAL. Use the Load command on the main
    menu if you don't want to enter these numbers.) Here are the numbers
    once again:

                       Month          Sales        Gross Profit
                       -----          -----        ------------
                        JAN           48,000       21,000
                        FEB           31,000       16,000
                        MAR           45,000       20,000
                        APR           51,000       22,000
                        MAY           55,000       24,000
                        JUN           58,000       26,000
                        JUL           43,000       21,000
                        AUG           61,000       28,000
                        SEP           65,000       32,000
                        OCT           74,000       37,000
                        NOV           110,000      58,000
                        DEC           90,000       45,000

    You may have noticed that all the numbers in this graph have been
    rounded to the nearest thousand dollars. Considering the size of the
    amounts, this has little or no effect on the graph. As a rule, graphs
    are not intended to reveal detail; they show overall trends. So
    numbers that are "in the ballpark" usually produce graphs identical to
    those with more precise numbers. In fact, if we just left off the
    three trailing zeros on all the numbers, the graphs drawn would be
    identical. But then the scale along the edge of the graphs would read
    10, 20, 30 instead of 10000, 20000, 30000.





    8












-







                                                    A BRIEF TUTORIAL


    When all the numbers have been entered, examine your screen
    to make sure it has all the legends, numbers, group names and title.
    Now let's save the data on disk, so it can be reloaded later if
    necessary. Hold down the ALT key and press S. (This is referred
    to in this manual as "pressing ALT-S"). A window appears, prompting
    for a file name. Enter MYBAR as the file name, and press ENTER.
    There is a brief pause while the graph is written to disk.

    Now let's do what we set out to do in the first place -- look at some
    graphs. At any time in GRAPH you can go directly to the Graph
    Menu by pressing ALT-G.

    The Graph Menu is displayed. This menu lets you decide whether your
    graph will be a line graph, bar chart or pie chart, and lists some
    variations of each. Use the up and down arrow keys or press the space
    bar to select the style of graph. A small arrow points at the
    currently selected style, and a sample of that style is shown on the
    screen. Note that the sample graph is using sample data, not your
    data. Use the down arrow key to select:

                            Bar Chart  -  Regular

    then press ENTER. Your graph is displayed:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load TUTORIAL
                          Select BAR CHART - REGULAR





              --------------------------------------------------


                                                                        9












-







    A BRIEF TUTORIAL


    The bar chart on the screen is a graphic representation of the twelve
    months of sales and gross profit figures. If your graph doesn't look
    like the previous one, you may have entered some data incorrectly, or
    may have selected a style other than Regular Bar Chart. If it doesn't
    look right, press ESC twice to return to the Main Menu, then go back
    to the start of the tutorial and review your work.

    A unique feature of GRAPH is the TRANSPOSE command. When you are
    viewing a graph, or even when entering data, hold down ALT and press
    the T key. The data being graphed is "rotated"; i.e. data along the
    x-axis (bottom of the graph) moves to the y-axis (side of the graph)
    and vice versa. Try pressing ALT-T. Your graph is re-drawn with the
    data transposed. Sometimes a transposed graph is more meaningful or
    easier to read. When you press ALT-T, the data in the Edit/Enter
    (spreadsheet) Screen is transposed also.

    Another interesting command is the FLIP command. When viewing a graph
    or when entering data, press ALT-F. All the columns of data in your
    graph are flipped, as if in a mirror image. Press ALT-F on your
    tutorial graph, and the month abbreviations reverse themselves; i.e.
    the sequence changes to DEC, NOV, OCT, etc. This is not likely a
    useful sequence, so press ALT-F a second time to restore the graph to
    its original format.

    Now try pressing combinations of ALT-T and ALT-F a few times to
    see the various arrangements of the data. There are eight different
    ways your data can be configured, using TRANSPOSE, FLIP and
    combinations of the two. Experiment until you decide which format you
    prefer.

    Now notice the large cursor flashing in the upper right-hand corner of
    the screen. This cursor allows additional text to be entered on the
    screen, so you can add finishing touches to your graph. Press ENTER
    several times until the flashing cursor is in the lower left corner,
    as low as it will go, then type:

                             ACME SHOE COMPANY





    10












-







                                                    A BRIEF TUTORIAL


    If you make a mistake while typing, use the backspace key to back up
    and erase a character. Now press the F1 key. The cursor becomes
    smaller. Press the space bar a couple times, then type:

                           Seattle, Washington

    Now let's print the graph. Make sure your printer is on and that the
    paper is set to top of page. press F9 to print. A hard copy of your
    graph as it appears on the screen is printed. (Note: If nothing
    prints, or if your computer locks up, or your printer makes funny
    noises, then the graphics screen print routine is probably not properly
    installed. Refer to the Getting Started section for more information.)

    So now we have performed each of the five steps required to prepare
    a graph. We have:

                1. Entered the data to be graphed.
                2. Saved the data on disk.
                3. Displayed the various graphs available until
                   we found the one we wanted (regular bar chart).
                4. Added special text to the graph.
                5. Printed the graph.

    Now let's go look at the same data, displayed in other graphic forms.
    Maybe there is another format which we prefer instead of the bar
    chart format. Press ESC once, and the Graph Menu is displayed. Now
    it's your turn. Display a few different styles of graphs, and see the
    various ways the same data can be displayed graphically. When you are
    finished viewing or printing a graph, just press ESC to return to the
    menu, and try another one. There are ten different possible selections
    on the graph menus, and with the TRANSPOSE (ALT-T) command
    and FLIP (ALT-F) command, there are eight ways of looking at
    each one.

    This concludes the tutorial. The remainder of this manual is
    organized for reference. It is a good idea to read through it to
    familiarize yourself with some of the more sophisticated commands.
    But the best way to learn GRAPH is to use it.




                                                                        11












-







     GENERAL INFORMATION


    ---------------------------------------------------------------


                         GENERAL INFORMATION

    From 1 to 16 "groups", or columns of numbers may be graphed by
    ExpressGraph. Each group can have from 1 to 52 values (numbers). So
    the most data which may be represented in a single graph is 832
    numbers (16 x 52 = 832). However, too much data can cause a graph to
    be so cluttered that nothing can be learned from it. And since the
    graphic image is formed by thousands of tiny dots on your screen and
    on your printer, the "resolution", or detail, is reduced as the amount
    of data being graphed is increased.

    The easiest graphs to read are usually those with two or three groups
    (columns) and fewer than 20 values (numbers) per group. Just as
    printed reports with too many numbers can be difficult to read, when a
    graph has too many numbers represented in graphic form, the same
    "forest for the trees" problem occurs.

    Numbers entered into GRAPH may be in the range 999,999,999,999 to
    -99,999,999,999. Numbers may have decimals up to 11 places, provided
    the total digits plus sign and decimal point do not exceed 12
    characters. Negative numbers in the data prevent the use of some
    graphs, such as pie charts, which inherently can't handle negatives.

    Graphs are displayed on the screen and printer as a pattern of tiny
    dots. If many numbers are being graphed, the clarity or detail of
    the graphic image may suffer somewhat. This is because there are
    fewer dots available when drawing a small object or line. Some
    styles of graphs work better than others with certain kinds of data.
    When a graph looks bad because of dot resolution, try the other
    styles. One of them may look better. Or try summarizing your data so
    there are fewer numbers to graph.

    The quality of the graphic image is also a function of the printer
    being used. All printers display your graph as the same number of
    dots, but some displays are better than others. For example, the
    screen displays and illustrations in this manual were produced with
    ExpressGraph on a laser printer, in Epson-compatibility mode. The


    12












-







                                                GENERAL INFORMATION


    quality of these graphic displays is very good, even though the number
    of dots in the graph are the same as on any other printer.

    ExpressGraph can display the following kinds of graphs:

                         1. Line Graph
                            a. Regular (no symbols)
                            b. With symbols

                         2. Bar Chart
                            a. Regular
                            b. Overlapped
                            c. Stacked
                            d. Percentage
                            e. 3-Dimensional

                         3. Pie Chart
                            a. Uncut
                            b. Separated
                            c. Exploded






















                                                                        13












-







    KEYBOARD CONVENTIONS


    ---------------------------------------------------------------
                         KEYBOARD CONVENTIONS

    GRAPH supports most of the keys on the PC keyboard. Some prompts
    can be answered with a single keystroke, in which case it is not
    necessary to press ENTER after pressing the key, because GRAPH acts
    on the keystroke immediately. When entering data into a field of two
    or more characters, the cursor positions at the first character of the
    field, and the field length is denoted by underscores on the right.
    While entering data into a field, the following special keys may be
    used:

                             CONTROL KEYS

    Special Key      Alternate      Purpose of key
    ---------------  -------------  -------------------------------------

    UP ARROW         CONTROL-E      Moves the cursor upward to the field
                                    above the current field.

    DOWN ARROW       CONTROL-X      Moves the cursor downward to the
                                    field below the current field.

    LEFT ARROW       CONTROL-S      Moves the cursor left one character.
    BACKSPACE

    RIGHT ARROW      CONTROL-D      Moves the cursor right one character.

    TAB              CONTROL-F      Moves the cursor right one column.

    BACKTAB          CONTROL-A      Moves the cursor left one column.

    HOME                            Moves the cursor to the upper left
                                    field on the screen.

    END or                          Exits from the current menu to
    ESCAPE                          the previous (higher level) menu.





    14












-







                                              KEYBOARD CONVENTIONS



                              CONTROL KEYS

    Special Key      Alternate      Purpose of key
    ---------------  -------------  -------------------------------------

    INSERT           CONTROL-V      Toggles on/off insert mode, allowing
                                    characters to be inserted in a field.

    DELETE           CONTROL-G      Deletes the character at the cursor.

    ENTER                           Moves the cursor to the start of the
                                    next lower field.

    PAGE DOWN        CONTROL-C      On multiple-screen displays, moves
                                    down to the next (lower) screen.

    PAGE UP          CONTROL-R      On multiple-screen displays, moves
                                    up to the previous (higher) screen.

                     CONTROL-T      Erases input data from the cursor
                                    to the end of the field.

                     CONTROL-Y      Erases all the data in the field.


















                                                                        15












-







    THE MAIN MENU


    ---------------------------------------------------------------

                           THE MAIN MENU


    The first screen to appear after the banner screen is the Main Menu:

              --------------------------------------------------




                                 ILLUSTRATION


                              Display Main Menu
                                 Press PrtSc





              --------------------------------------------------

    From the Main Menu, all the other menus and functions of GRAPH are
    invoked. To perform one of the functions on the Main Menu, either
    press the number of the item, or press the first letter of the
    function. For example, to graph data, you can press either <2> or <G>.
    (GRAPH also accepts ALT-G, CTRL-G or lower case g.) To get back
    to the Main Menu from one of the submenus, press ESC or END.

    A unique feature of GRAPH is that you do not have to return to the
    Main Menu in order to go to another submenu. To go directly to the
    Enter / Edit Data screen at any time, from anywhere in GRAPH, just
    press ALT-E. To go to the Graph Menu at any time, press ALT-G.
    Pressing ALT plus one of the keys E, G, S, L, O, P or Q takes
    you immediately to a screen listed on the Main Menu.





    16












-







                                                      THE MAIN MENU


    Each of the items listed on the Main Menu is discussed in its own
    chapter following this one, except for "7 - Quit and return to DOS".
    Use item 7 to exit from GRAPH. Press either <7> or <Q> and the
    following window pops up:

              --------------------------------------------------
                                 ILLUSTRATION

                            On Main Menu, press Q
                       (Show only the pop up box here)
              --------------------------------------------------

    Reply <Y> to exit from GRAPH, or reply <N> to return to the Main Menu
    and continue with GRAPH.

    Main Menu selections 1 through 6 are discussed in the following
    chapters.

























                                                                        17












-







    ENTERING DATA


    ---------------------------------------------------------------

                            ENTERING DATA

    The first step in producing a graph is to provide numbers to GRAPH.
    To enter numbers and legends into GRAPH, select "Enter / Edit Data"
    from the Main Menu, by pressing either <1> or <E>. The following screen
    is displayed:

              --------------------------------------------------




                                 ILLUSTRATION


                           Select Enter / Edit Data
                     (If data appears on screen, press <Alt-C>
                             then press <Y> to clear)
                                 Press PrtSc



              --------------------------------------------------


    GRAPH TITLE

    When this screen is displayed, the cursor is on the line labelled
    Graph Title. A description of the graph may be entered here, or the
    field may be left blank. This description is displayed at the top of
    each graph.

    Title letters can be one of three sizes: small, medium or large. The
    default size is medium. To print small letters, add /1 to the end of
    the title. To print large letters, add /3. To suppress the title
    display, add /0 at the end.




    18












-







                                                       ENTERING DATA


    GROUP NAMES
    Below the title line are four Group Name fields, numbered 1 to 4.
    These group names are used to label each group of numbers in the
    graph. GRAPH allows up to 16 groups to be entered, but only four
    groups fit on the screen at a time. Press the TAB key to move from
    group to group. After moving across the four groups numbered 1 to 4,
    the spreadsheet area "scrolls sideways" to the next four groups
    numbered 5 to 8. If you continue pressing the TAB key, GRAPH
    keeps moving to the next group until it hits group number 16.
    Pressing SHIFT-TAB or left arrow moves back to the left.

    The group names you enter are displayed
    on each graph. On line graphs and bar
    charts, they are displayed in a Legend
    box on the graph, as in the example to      ---------------------
    the right. On pie charts, they are               ILLUSTRATION
    displayed under each pie chart.                 Load TUTORIAL
                                               Select LINE GRAPH - Regular
    Each group name may be up to twelve         (Show only legend box)
    characters. The Legend box on line
    graphs and bar charts is exactly wide
    enough for the longest group name, so
    short group names create a narrow
    Legend box, which in turn leaves room
    for a wider graph. If there are no
    group names entered, the Legend box is
    not displayed, so the graph is wider
    still. However, group names are
    recommended for graphs with more than       ---------------------
    one group.


    VALUE NAMES
    Along the left edge of the Edit Mode screen are the Value Name fields.
    Sixteen of them appear on the screen, but if you move the cursor
    downward past the 16th line, the screen "scrolls" to lines 17 to 32.
    If you continue moving the cursor downward, GRAPH scrolls down until
    it hits line 52. Pressing the UP ARROW multiple times moves back up to
    line 1. Pressing the HOME key moves to Group 1, Value 1. The PAGE
    UP and PAGE DOWN keys scroll up and down a screen at a time.


                                                                        19












-







    ENTERING DATA


    The Value Names you enter are displayed on each graph. On line graphs
    and bar charts they are displayed along the bottom of the graph. On
    pie charts, they are displayed as a legend to the right of the chart.

    Each Value Name may be up to twelve characters, or may be left blank.
    It is usually best to keep these names short, because they have to
    print side-by-side along the bottom of line graphs and bar charts,
    like this:

              --------------------------------------------------
                                 ILLUSTRATION
                                Load TUTORIAL
                         Select LINE GRAPH - REGULAR
                         (Show only the bottom line)
              --------------------------------------------------

    If the group names are too wide to fit on one line, GRAPH staggers
    them, alternating on two lines, like this:

              --------------------------------------------------
                                 ILLUSTRATION
                                Load SAMPLE01
                          Select BAR CHART - REGULAR
                         (Show only the bottom line)
              --------------------------------------------------

    If the value names are still too wide after staggering, consider the
    following options:

         a. Abbreviate them.
         b. Skip every other one.
         c. Transpose the graph. (See "Transpose and Flip" section.)
         d. Widen the graph by changing the edges of the chart on the
            "Optional Specifications" screen.
         e. Widen the graph by omitting the right-hand legend. To do this,
            reply "N" to the "Print Legend Titles" prompt on the "Optional
            Specifications" screen. Removing all the group names will
            also omit the right-hand legend.




    20












-







                                                       ENTERING DATA


    ENTERING NUMBERS
    Numbers are entered on the Edit Mode screen in the grid with the
    rectangle around it. Use the arrow keys to move around the grid, then
    type in the number corresponding to that group and value.

    Numbers entered into GRAPH may be in the range 999,999,999,999 to
    -99,999,999,999. Numbers may have up to 11 decimal places, provided
    the total digits plus sign and decimal point do not exceed 12
    characters. Negative numbers in the data prevent the use of some
    graphs, such as pie charts, which inherently can't handle negatives.

    To change a number, move the cursor to it, then type the new number
    over it. Use the left and right arrow keys to position to a digit to
    be changed. To remove a number, press the DEL key several times, or
    press the space bar to erase from the cursor to the end of the number,
    or press CTRL-Y to erase the entire number. To erase all the numbers
    and descriptions on the screen, press ALT-C.


    SPECIAL COMMANDS
    The following two lines appear across the bottom of the Edit Mode
    screen:
              --------------------------------------------------
                                 ILLUSTRATION
                             Select Enter / Edit
                                 Press PrtSc
                       (Show only the bottom two lines)
              --------------------------------------------------

    <Alt-A> Automatic Value Names
    Since so many graphs are by month name, GRAPH has a means of
    quickly filling in the value names with month names January through
    December, or abbreviations Jan through Dec. There is also an option
    for day names. Press ALT-A and a window pops up, prompting for
    the automatic values to be filled in.

    <Alt-C> Clear Data
    Pressing ALT-C clears all the data on the Edit Mode screen. It does
    not alter the Optional Specifications. A warning message is given
    before clearing the data, which appears in a pop-up window. The prompt


                                                                        21












-







    ENTERING DATA


    gives you a chance to change your mind, in case you did not really
    want to erase all the data.

    <Alt-D> Delete Row or Column
    <Alt-I> Insert Row or Column
    Press ALT-D to delete a row or column of numbers. A window prompts
    for whether a row or column is to be deleted. Press ALT-I to insert
    a row or column of numbers.

    <Alt-S> Save
    Pressing ALT-S causes the "Save Window" to pop up in the center of
    the screen, allowing you to save your graph data to disk. For more
    information, see the section titled "Saving Data To Disk".

    <Alt-T> Transpose
    <Alt-F> Flip
    These commands cause the data to be rearranged. ALT-T changes rows
    to columns and columns to rows. Pressing ALT-T a second time restores
    the data to its original sequence. ALT-F causes columns (groups) to be
    "flipped"; for example, if there are four group names, A, B, C, D then
    pressing ALT-F rearranges them so their sequence is D, C, B, A.
    Pressing ALT-F a second time restores them to their original
    positions. For more information on these commands, plus examples, see
    the section titled "Transpose and Flip".

    <Alt-G> Graph
    Leaves the Edit Mode screen and goes directly to the Graph Menu
    screen.

    <End> Finished
    Pressing the END key returns to the Main Menu. Your data remains
    intact, and can be changed later by selecting Enter / Edit Data.
    Pressing the ESC key also returns to the Main Menu.

    <F9> Print Data
    If you want a printed copy of the numbers being graphed, press F9
    when the Edit Mode screen is displayed. The numbers are printed in
    columnar form similar to the screen display. Group Names are printed
    as column headings and Value Names are printed on the left.



    22












-







                                                     DRAWING GRAPHS


    ---------------------------------------------------------------

                            DRAWING GRAPHS

    This section describes each of the graphs which can be produced by
    ExpressGraph. Examples are shown, and suggestions made for using each
    type of graph. There are some general rules which apply to all graphs,
    regardless of type:


    LIMIT THE DATA
    Try to limit the amount of data to be graphed. Too much data makes a
    graph too cluttered, making it hard to read. GRAPH has a maximum
    capacity of 16 groups of 52 numbers (or 52 groups of 16 numbers). If
    the data to be graphed is larger than that, it is necessary (and
    probably desirable) to summarize it in some way before graphing.


    RELATIVE SIZE OF GROUPS
    When a graph contains more than one group of numbers, the numbers
    should be relatively the same in size, or else the smaller group does
    not graph well. Consider this example: A company sells videotape, and
    they also occasionally sell video recorders. In a typical month they
    sell 50,000 units of videotape but only forty recorders. If they were
    to combine their monthly unit sales of both items on the same graph,
    it might look like the graph below. As you can see from the sample
       -------------------------------------
                                              graph, the sales of the
                                              videotape are graphed very
                  ILLUSTRATION                well, but the much smaller
                                              quantities of the video
                  Load SAMPLE01               recorders appear as no more
                                              than a smudge along the
           Select BAR CHART - REGULAR         bottom of the graph. When
                                              groups of numbers are this
                                              different in size, it is
                                              best to show them in
                                              separate graphs.
       -------------------------------------



                                                                        23












-







    DRAWING GRAPHS


    ADDING CONTOUR
    On occasion, the numbers you are graphing may be so consistent that a
    line graph or bar chart appears to be exactly flat, with no peaks or
    valleys at all. Sometimes that may be exactly what you want to see.
    Other times, you may want a bit more "motion" in your graph. For
    example, when graphing dollar amounts in the millions, a change of
    $10,000 appears as no change at all. To see a visible trend in
    numbers which are too constant to display a trend, change the Starting
    Scale Adjustment value. This number is found on the Optional
    Specifications menu, and usually is zero. The number is subtracted
    from each of your data numbers before graphing them. For example,
    the following line graph would have appeared perfectly flat if each
    number were graphed as is. But by changing the Starting Scale
    Adjustment to one million, GRAPH subtracts a million from every
    number before graphing, so the graph gets some contour:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE02
                         Select LINE GRAPH - REGULAR





              --------------------------------------------------

    Now it can be seen that the numbers were dropping off, but have now
    begun a gradual ascent. This would have been obvious by simply looking
    at the numbers themselves, but comparitive numbers such as these are
    often buried amid many other numbers and only a very patient, detail-
    oriented examination reveals such trends after close study.




    24












-







                                                     DRAWING GRAPHS


    NEGATIVE NUMBERS
    GRAPH accomodates negative numbers on many of its graphs by simply
    starting the bottom scale value at the largest negative number. When
    negative values are drawn on a bar chart, the bar extends downward
    from zero, as in this example:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE03
                          Select BAR CHART - REGULAR





              --------------------------------------------------

    Some of the graphs which GRAPH produces do not work if there is a
    negative number in the data, usually because the inherent nature of
    the graph does not permit negatives. For example, in a pie chart,
    there is no way to draw a negative slice. If your data contains
    negative numbers, GRAPH gives the message:

    Data contains negative number(s). Can't draw the chart...press any key.

    This message occurs on all Pie Charts, and on Stacked, Percentage and
    Three-D bar charts when negative numbers are present. To use one of
    those styles when data is negative, either remove the negative numbers
    or consider combining them with other numbers so that the combined
    result is positive.






                                                                        25












-







    DRAWING GRAPHS


    SCALING
    Two of the graphs available are percentage-oriented: the Pie Chart and
    the Percentage Bar Chart. The scale on those two graphs is based on
    100%, so regardless of the size of the numbers, the pie or bar is
    always the same physical size.

    The remaining eight graphs have a series of scale numbers on the left
    edge of the graph, which usually start at zero in the lower left
    corner, and increase in large enough increments so that the largest
    number graphed does not go above the top line. GRAPH examines the
    numbers you have entered, and determines the best scale to use. If you
    don't like the scaling provided by GRAPH, you can control it to some
    degree. On the Optional Specifications menu there are two fields which
    change the scaling: Scale Increment and Starting Scale Value. See the
    section titled "Optional Specifications" for more information.



























    26












-







                                                          LINE GRAPHS


    ---------------------------------------------------------------

                             LINE GRAPHS

    Line graphs are the most common of all graphs, perhaps because they
    are the easiest to draw with pencil and paper. ExpressGraph offers
    two types of line graphs: Regular, and With Symbols. This section
    discusses line graphs and gives some suggestions for their use.


    WITH SYMBOLS
    The only difference between Regular line graphs and those With
    Symbols is that the latter has a small symbol such as a triangle or
    square drawn at each plotted point on the graph.

    Symbols are useful when a graph contains two or more sets of lines,
    because they identify the lines. If group names have been specified, a
    legend is drawn to the right of the graph showing the symbol used for
    each line. The drawback to symbols is that they tend to clutter large
    graphs, especially when lines are close to one another.

    Most line graphs do not require symbols, because either:

              (a) only one group of numbers is being plotted, or
              (b) the meaning of each line is intuitively obvious.

















                                                                        27












-







    LINE GRAPHS


    For example, the following graph plots a company's monthly sales,
    gross profit and net profit as three lines. The management people who
    look at these graphs are well aware that sales are always greater than
    gross profit which is always greater than net profit (they went to
    college to learn that). So in this graph, symbols are not necessary.
    But they have been used here anyway, so you can see an example of
    them:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE04
                       Select LINE GRAPH - WITH SYMBOLS





              --------------------------------------------------


















    28












-







                                                          LINE GRAPHS


    INTERSECTING LINES
    When overlap of numbers is significant information, line graphs are
    best because the lines physically cross one another. For example, in
    the following graph, a company compares the cost of manufacturing a
    truck part in their own plant versus purchasing the part from an
    outside source. They find that when quantity requirements are low,
    they can purchase it for less than they can make it. But as more units
    of the part are needed, they can make it themselves for less. To
    graphically illustrate this to management, an engineer prepares the
    following graph:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE05
                         Select LINE GRAPH - REGULAR





              --------------------------------------------------

    The graph above illustrates the benefit of purchasing the part when
    small quantities are needed, and manufacturing the part when the
    quantity requirements increase. And it shows the exact break-even
    point where the two lines cross. A bar chart could show the same
    trend, but the break-even (cross-over) would not be as vividly
    illustrated. Other types of graphs, such as pie charts for instance,
    would not be suitable for this application.







                                                                        29












-







    LINE GRAPHS


    LARGE AMOUNTS OF DATA
    On graphs with many display points, line graphs look less cluttered
    than other types, because each number being graphed takes only a small
    amount of room. For example, this graph contains three groups of 52
    numbers, yet is still readable:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE06
                         Select LINE GRAPH - REGULAR





              --------------------------------------------------




















    30












-







                                                          LINE GRAPHS


    CONTINUOUS FLOW
    On some graphs, even though just a few points are plotted, all the
    points in between are meaningful too. For example, in the following
    graph only six points are plotted, yet more than six values may be
    taken from the graph. The data being graphed is the printing cost of a
    brochure. Even though the cost of printing 4,000 brochures was not one
    of the numbers plotted, it is easy to determine that 4,000 brochures
    cost about $51 per thousand:

              --------------------------------------------------




                                 ILLUSTRATION


                                 Load SAMPLE07
                       Select LINE GRAPH - WITH SYMBOLS





              --------------------------------------------------

















                                                                        31












-







    LINE GRAPHS


    HORIZONTAL LINES
    When a graph is to be compared to some specific constant, such as an
    average or standard, a solid horizontal line can be easily drawn on a
    line graph to represent the constant. For example, in the following
    graph, a sales manager shows the actual sales as a line graph. He
    shows the monthly goal as a solid horizontal line at $30,000 and the
    year's average as a solid horizontal line at $36,000. This was easily
    accomplished by simply entering the number 30,000 in all twelve of the
    Group 2 values, and entering 36,000 in all twelve of the Group 3
    values. Here is the graph which results:

              --------------------------------------------------




                                 ILLUSTRATION


                                 Load SAMPLE08
                           Turn off horizontal grid
                         Select LINE GRAPH - REGULAR




              --------------------------------------------------

    Note that the graph above is missing the dotted horizontal lines which
    usually run across the graph at each scale mark. It is sometimes
    desirable on line graphs with flat lines to remove the horizontal
    grid. See the "Optional Specifications" section for more information
    on horizontal and vertical grid lines.

    This concludes the discussion of line graphs. For more information
    about changing the physical appearance of your line graphs, see the
    section titled "Optional Specifications" and the section titled
    "Transpose and Flip".




    32












-







                                                            BAR CHARTS


    ---------------------------------------------------------------


                             BAR CHARTS

    Bar charts are the most flexible type of graph, providing numerous
    ways of looking at the same data. GRAPH can produce the following
    types of bar charts:

    ----------------------

        ILLUSTRATION

       Go to Graph Menu     REGULAR
       Select REGULAR                               ----------------------
       Press PrtSc key
                                                        ILLUSTRATION
    ----------------------
                                     OVERLAPPED        Go to Graph Menu
                                                       Select OVERLAPPED
    ----------------------                             Press PrtSc key

        ILLUSTRATION                                ----------------------

       Go to Graph Menu     STACKED
       Select STACKED                               ----------------------
       Press PrtSc key
                                                        ILLUSTRATION
    ----------------------
                                     PERCENTAGE        Go to Graph Menu
                                                       Select PERCENTAGE
    ----------------------                             Press PrtSc key

        ILLUSTRATION                                ----------------------

       Go to Graph Menu     THREE-D
       Select THREE-D
       Press PrtSc key

    ----------------------


                                                                        33












-







    BAR CHARTS


    You may note several similarities between regular bar charts and the
    line graphs in the previous chapter. In fact, for many graphs,
    choosing between the line graph format and bar chart format is largely
    a matter of personal taste. But there are subtle differences between
    bar charts and line graphs.

    Because it is a continuous line, a line graph, is often used to show
    the upward and downward "flow" of a series of numbers. Bar charts,
    on the other hand, are usually used when the numbers being graphed are
    separate, discrete values with no flow implied. For example, the data
    in our earlier tutorial (sales dollars and profit dollars by month) is
    usually considered more suitable for a bar chart than a line graph,
    because the value for each month is a separate total for the entire
    month. A daily or weekly graph of the same data might demonstrate
    more clearly the ebb and flow of a company's sales, and a line graph
    may be more suitable for that data.

    There is another time when a bar chart is preferable to a line graph:
    when the lines are overlapping too much, making the line graph hard to
    read. On a bar chart each number has its own equal share of horizontal
    space, so all numbers have equal representation or "opportunity" to be
    seen. The size of a number determines the height of its bar, and it's
    the height that makes the number appear large or small in comparison
    to the other numbers.

    On bar charts, as on line graphs, numbers are graphed in comparison to
    each other. If all the numbers are small, the scale is reduced so that
    the largest number fills the height of the graph. Then each of the
    other numbers is represented by a bar whose height is shorter than the
    largest number's bar.


    REGULAR vs OVERLAPPED
    Regular Bar Charts and Overlapped Bar Charts are almost identical.
    The only difference is that in the latter, the bars overlap one another
    slightly. It is mainly a cosmetic difference, since some people prefer the
    bars to overlap and others don't. On bar charts with a lot of data, there
    is one small advantage to overlapping bars: each bar takes up less
    room on the graph, so the bars are slightly wider.



    34












-







                                                            BAR CHARTS



    STACKED BAR CHART
    The stacked bar chart is a specialty chart, which works well for some
    types of data, and is totally meaningless for other types. Another name
    for a stacked bar chart might be "consolidated groups" chart. Stacked
    bars are only meaningful when:

         a) two or more groups are being graphed; and

         b) the numbers in each group can be added together to
            represent some meaningful total.

    An example of a meaningless stacked bar chart is one produced with the
    data in the tutorial: sales dollars and gross profit dollars. When
    these two groups of numbers are added together, they have no meaning.
    However, let's re-enter the sales amounts as expense amount. Now a
    stacked bar chart is very meaningful (although this new data may be
    meaningless on other types of graphs). Each bar in the chart below
    represents total sales by its total height. The shaded portion at the
    bottom of each bar indicates the portion of the sales dollars which
    were gross profit:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE09
                          Select BAR CHART - STACKED





              --------------------------------------------------




                                                                        35












-







    BAR CHARTS



    PERCENTAGE BAR CHART
    The Percentage Bar Chart is similar in many respects to a pie chart.
    The bars from each group are stacked on top of one another as in a
    stacked bar chart. But the size of each segment represents a
    percentage of the whole bar, not the actual value.

    The scale along the left-hand edge of a Percentage Bar Chart is always
    the same, regardless of the values (see the example below). And every
    bar is always a full 100% in height. Like the stacked charts discussed
    earlier, Percentage Bar Charts are only meaningful if the values from
    all Groups add up to some meaningful total. In the previous example,
    the data from the tutorial example was re-entered, with the sales
    figures reduced by the amount of gross profit. That same example works
    for a Percentage Bar Chart as well, and shows graphically the
    percentage of sales which are gross profit:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE10
                        Select BAR CHART - PERCENTAGE





              --------------------------------------------------

    Note the differences between this example and the previous one for
    stacked bar charts. They are both graphing the same data, but this
    chart shows profit as a percentage of sales, while the stacked bar
    chart shows profit as a proportionate part of sales.




    36












-







                                                            BAR CHARTS



    THREE-D BAR CHART
    The Three-Dimensional Bar Chart is probably the most exotic of all the
    graphs that ExpressGraph can produce. A 3-D graph usually impresses
    people the most, but it is also usually harder to read than the other
    graphs. Let's look at the tutorial example again, this time in 3-D:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load TUTORIAL
                          Select BAR CHART - THREE-D





              --------------------------------------------------

    The three-dimensional effect of the graph is eye-catching, and for
    many applications the 3-D Bar Chart is has great appeal. However, the
    example above demonstrates two common problems with 3-D charts:

         a) the bars in front cover up some of the bars in back; and

         b) it is difficult to determine the value of a bar because of
            the angle of the graph.










                                                                        37












-







    BAR CHARTS


    In many applications, both of these drawbacks are acceptable. And
    there are some customizations which can be done with the 3-D Bar Chart
    to make it more readable. For example, by simply pressing ALT-F, the
    two group columns are flipped, and the 3-D chart now looks like this:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load TUTORIAL
                          Select BAR CHART - THREE-D
                                 Press ALT-F




              --------------------------------------------------

    Now the smaller numbers--the gross profit figures--are in front, so
    the back row is visible. See the section titled "Transpose and Flip"
    for more information on the ALT-F command.

















    38












-







                                                            BAR CHARTS


    Another way to get a better "vantage point" when looking at 3-D Bar
    Charts is to change a field on the Optional Specifications screen
    which is called the "3-D Aspect Angle". This field normally has a
    value of 30, but may be any value from 20 to 80. Decreasing the aspect
    angle causes the 3-D Bar Chart to sit more flatly; i.e. not to tilt
    downward quite so much. Increasing the angle gives the impression that
    the chart is opening toward you. For example, this is the same data
    as above, but with an aspect angle of 60:

              --------------------------------------------------



                                 ILLUSTRATION


                                Load TUTORIAL
                          Change Aspect Angle to 60
                          Select BAR CHART - THREE-D
                                 Press ALT-F




              --------------------------------------------------

    Note that the graph is really not being "rotated". The rear grid
    remains vertical regardless of changes in the aspect angle. Changing
    the angle simply "opens up" the graph more widely, by moving the base
    of the graph downward -- a sort of wide-angle lense effect.












                                                                        39












-







    PIE CHARTS


    ---------------------------------------------------------------

                            PIE CHARTS

    The pie chart is a popular way to represent data graphically. There
    are some inherent differences between pie charts and other types of
    graphs. Each slice of a pie chart represents a percentage of some
    total amount. Consequently, all the numbers used for a pie chart must
    add up to some meaningful total amount. Using the example from the
    tutorial, let's take a look at a pie chart of the data:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load TUTORIAL
                           Select PIE CHART - UNCUT





              --------------------------------------------------

    The Uncut Pie Chart on the left represents a year's sales, while the
    one on the right represents a year's profits. Even though total profit
    is much smaller than total sales, both pies are the same size. That is
    because they are representing percentages, not actual amounts. Each
    pie is 100%. The slices in this example each represent one month, so
    there are twelve slices in each pie.

    Earlier we discussed the Percentage Bar Chart, and indicated that in
    many respects it is similar to a rectangular pie chart. (Some might
    call it a cake chart.) Just as in the percentage bar chart, the size
    of each pie slice represents a percentage of the whole pie, not the
    actual value.


    40












-







                                                           PIE CHARTS



    If there is only one group of values, GRAPH draws a single large
    pie chart. If there are two or three groups, GRAPH draws two or
    three pie charts side-by-side. GRAPH cannot draw more than three pie
    charts. If there are more than three groups to be graphed, they must
    be drawn in separate graphs. Or alternatively, they might be displayed
    as percentage bar charts, which are similar to pie charts, but allow
    up to 52 bars to be displayed on the screen at once.


    SEPARATED PIE CHART
    A Separated Pie Chart is just like an Uncut Pie Chart, except that the
    slices are all pulled out from the pie a small distance. This makes
    each slice a bit more visible:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load TUTORIAL
                         Select PIE CHART - SEPARATED





              --------------------------------------------------


    EXPLODED SLICES
    On an Exploded Pie Chart, one or more slices are pulled out from the
    pie a small distance. The default is to explode only the first slice
    (the slice associated with value number 1). It is possible to explode
    more than one slice, and to indicate which slices to explode, by
    changing the value called "Exploded Pie Chart Sections" on the
    Optional Specifications screen. For example, this is the same pie


                                                                        41












-







    PIE CHARTS


    chart as above, but with slices 3, 5 and 10 exploded:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load TUTORIAL
                 Change Exploded Pie Chart Sections to 3 5 10
                         Select PIE CHART - EXPLODED




              --------------------------------------------------

    There is also a field on the Optional Specifications screen called
    "Distance to explode", which tells GRAPH how far out of the pie each
    slice should be pulled. A small number (minimum 10) causes the slice
    to be pulled out a small distance. A larger number (maximum 40) causes
    the slice to be pulled out more.


















    42












-







                                                SAVING DATA TO DISK


    ---------------------------------------------------------------

                         SAVING DATA TO DISK

    When you have finished preparing your graph, the data can be saved on
    disk for future use. To save your data at any time, regardless of what
    screen you are on, press ALT-S. A window appears on the screen that
    looks like this:

              --------------------------------------------------

                                 ILLUSTRATION

                                 Press ALT-S
                       (include only the pop-up window)

              --------------------------------------------------

    To save your graph data to disk, enter any valid file name from one to
    eight characters. GRAPH adds an extension of GRF to your file name.
    For example, if you enter ABC and press ENTER, then GRAPH
    creates a file on your disk called ABC.GRF. If there is already a file
    on disk by the same name as the one you specified, a warning message
    is given. The warning pops up in another window:

              --------------------------------------------------

                                 ILLUSTRATION

                          Save TUTORIAL, Press ENTER
                       (include only the pop-up window)

              --------------------------------------------------

    When this window appears, if you do not want to destroy the file on
    disk which has the same name, then Press ESC and change the name of
    the file you are saving. If the file on disk with the same name can be
    erased, and this one written over it, reply "O". If you want to save
    the old file as backup, reply "B". The file on disk gets renamed from
    name.GRF to name.BAK, then the current data is saved as name.GRF.


                                                                        43












-







    SAVING DATA TO DISK



    All the data about your graph is saved in the .GRF file, including:

              * Titles, group names, value names
              * All numbers
              * Dimension of matrix (16 x 52 or 52 x 16)
              * All fields on the Optional Specifications screen
              * Currently selected type of graph
              * Override pattern sequence

































    44












-







                                            LOADING DATA FROM DISK


    ---------------------------------------------------------------

                          LOADING DATA FROM DISK

    The previous section explained how to save data for a GRAPH file onto
    disk. To read data from disk into GRAPH, press ALT-L. A window
    pops up which looks like this:

              --------------------------------------------------


                                 ILLUSTRATION

                                 Press ALT-L
                       (include only the pop-up window)

              --------------------------------------------------

    Usually the data you are loading was saved earlier by GRAPH as a
    GRF file. The other two types of files (.FE and .DIF) are discussed
    later in this section. Press 1 or E to load an ExpressGraph (.GRF)
    file. The following screen appears:

              --------------------------------------------------




                                 ILLUSTRATION


                                 Press ALT-L
                                   Press 1





              --------------------------------------------------



                                                                        45












-







    LOADING DATA FROM DISK


    All the GRF files on the disk are displayed on this screen, and each
    one is numbered sequentially. To load a data file, enter the file's
    number, then press ENTER.

    When a file is loaded, it replaces all the data currently in GRAPH,
    including the numbers and descriptions on the Enter Data screen and
    the values on the Optional Specifications screen. If there is data
    which you do not want to lose, use ALT-S to save it before loading a
    new file in over it.


    REPORT FILES (.FE)
    Users of File Express, Expressware's popular database program, may
    sometimes want to produce graphs from information in their databases.
    To accomodate that need, the .FE file type is included in GRAPH. The
    quickest and easiest way to summarize data from a File Express
    database is to use the report writer to create a report. Write the
    report to disk with a file name that ends with .FE which can then be
    read by GRAPH.

    Most databases have a large number of records, and need to be sorted
    and summarized before meaningful graphs can be produced from them.
    For example, a database with five hundred sales invoice entries
    produces a meaningless graph if its detailed, raw data is graphed. But
    let's say each of the sales entries has a month number: 1 for January,
    2 for February, and so forth. The database is sorted into month
    sequence, then a summary report is prepared, with sales dollar totals
    and profit dollar totals for each month. A summary report called
    SALES.FE is written to disk. On disk, the report looks like this:













    46












-







                                            LOADING DATA FROM DISK



                       Annual Sales and Gross Profit
    July 1, 1986                                                  Page 1

    Sales       Gross Profit
    ----------  ------------
        48,000      21,000
        31,000      16,000
        45,000      20,000
        51,000      22,000
        55,000      24,000
        58,000      26,000
        43,000      21,000
        61,000      28,000
        65,000      32,000
        74,000      37,000
       110,000      58,000
        90,000      45,000


    These are the steps to follow to write the above report to disk:

         1. Sort the database index by MONTH.
         2. Select "Print Reports".
         3. Select "Define REPORT LAYOUT".
         3. Select <A>utomatic spacing between fields.
         4. Select SALES and PROFIT, then press the END key.
         5. For Title line 1, enter: "Annual Sales and Gross Profit".
         6. Leave Title line 2 blank.
         7. Select any report width.
         8. Select <S>ubtotals.
         9. Select <A>ll fields to be subtotaled.
        10. For field to determine subtotals, select MONTH.
        11. For length of MONTH to compare, press ENTER.
        12. For Duplicate Grouping, select Y or N (doesn't matter).
        13. For Save Report Format, select N.
        14. Select Write to <D>isk.
        15. Name of Output File is SALES.FE.
        16. Select <S>ubtotals only.



                                                                        47












-







    LOADING DATA FROM DISK


    Now exit from File Express and start ExpressGraph, then press
    ALT-L. On the first prompt, indicate that a "Report File (.FE)"
    is being loaded. Then select the report (.FE) file called SALES.
    The data from the summary report is now on GRAPH's data screen,
    and looks like this:


              --------------------------------------------------




                                 ILLUSTRATION


                                Load TUTORIAL

                          Blank all the value names




              --------------------------------------------------

    To add month names of Jan, Feb, etc., press ALT-A for Automatic
    Value Names. A window pops up which looks like this:

              --------------------------------------------------


                                 ILLUSTRATION

                                 Press ALT-A
                       (include only the pop-up window)


              --------------------------------------------------





    48












-







                                            LOADING DATA FROM DISK


    Press 1 for abbreviated month names. Another window appears:

              --------------------------------------------------


                                 ILLUSTRATION

                             Press ALT-A then 1
                       (include only the pop-up window)


              --------------------------------------------------

    Press 1, then press the ENTER key. The value name column is
    automatically filled with month abbreviations, starting with January.
    Now the data is ready to graph. For a sample of the graph which is
    produced from this data, see the Tutorial section.


    DIF FILES (.DIF)
    GRAPH can also read the popular DIF files which can be produced by
    many software programs. "DIF" is an acronym for Data Interchange
    Format, which is a standard format for numbers and text to be passed
    from one program to another.

    A DIF file is simply one or more columns of data and one or more
    rows of data, arranged in an array. For GRAPH's purposes, there are
    four types of data which go into the DIF file:

                             * Report Title
                             * Group Name(s)
                             * Value Name(s)
                             * Numbers to be graphed









                                                                        49












-







    LOADING DATA FROM DISK


    These four types of data are stored in a simple row-column array in
    the following format:

         Report Title    Grp Name 1    Grp Name 2    Grp Name 3 . . .
         Value Name 1      Value         Value         Value
         Value Name 2      Value         Value         Value
         Value Name 3      Value         Value         Value
         .
         .
         .

    Users of ExpressCalc, Expressware's popular spreadsheet program, can
    pass data to GRAPH using DIF files. The following example illustrates
    the use of DIF files, and also demonstrates the ease of interfacing
    between CALC and GRAPH.

    Start CALC and load the spreadsheet called EXAMPLE, a simple interest
    calculation spreadsheet discussed in the CALC tutorial. EXAMPLE looks
    like this on the screen:


                   A          B          C          D
            1
            2            Compute Annual Interest
            3
            4            Rate:             5.50
            5
            6            Year          Balance    Interest
            7            1983          5,000.00     275.00
            8            1984          5,275.00     290.13
            9            1985          5,565.13     306.08
           10
           11            Totals        5,871.21     871.21

    The numbers to be graphed are in cells C7:D9. The two Group Names
    are "Balance" (in C6) and "Interest" (in D6). The three Value Names
    are "1983, 1984, 1985" (in B7:B9). The title of the graph is to be
    "Annual Interest: 5.5%", and does not appear on the spreadsheet.




    50












-







                                            LOADING DATA FROM DISK


    Comparing the sample spreadsheet to GRAPH's DIF format above, we
    can see that the array to be graphed is in cells B6:D9. The only thing
    that array is missing is the report title. Move the cursor to cell B6
    and enter the text Annual Interest: 5.5%/1. (Note: the /1 on the end
    of the title tells GRAPH to display it in small letters, since it is
    too big to display in medium letters.)

    Now use the /Save function of CALC, and specify EXAMPLE.DIF as the
    file name. When CALC notices that the file being saved is a .DIF file,
    it prompts for the range to be saved. Enter B6:D9, and press ENTER
    twice (defaulting to "save by rows").

    Now exit from CALC, and start GRAPH. Press L (for load) and D
    (for DIF), then select EXAMPLE.DIF from the list of files. The
    following prompt appears:

              --------------------------------------------------


                                 ILLUSTRATION

                                Press L, then D
                       (include only the pop-up window)


              --------------------------------------------------

    Since our DIF file had group names and value names, reply Y to this
    prompt. If the DIF file had only contained numbers, we would reply N
    to this message (to prevent the first row and column of numbers from
    ending up in the group name and value name columns).











                                                                        51












-







    LOADING DATA FROM DISK


    Now that EXAMPLE.DIF is loaded, you can review it on the Data
    Entry screen:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE11





              --------------------------------------------------

    The data is ready to graph, without adding anything more. Press
    ALT-G and select BAR CHART - REGULAR to display the graph:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load SAMPLE11
                          Select BAR GRAPH - REGULAR






              --------------------------------------------------



    52












-







                                            LOADING DATA FROM DISK


    This is not much of a graph, with only three years' data. Later in the
    CALC manual, in Example #2 of the /Replicate command, the same
    graph is carried out for twenty years. Using that example, with a 12%
    annual interest rate, save cells B6:D26 as a DIF file, then load that
    file into GRAPH. This data makes for a bit more interesting graph:

              --------------------------------------------------




                                 ILLUSTRATION


                                Load EXAMPLE2.DIF
                          Select BAR GRAPH - REGULAR





              --------------------------------------------------




















                                                                        53












-







    OPTIONAL SPECIFICATIONS


    ---------------------------------------------------------------

                          OPTIONAL SPECIFICATIONS


    The Optional Specifications screen can be selected from the Main Menu
    by pressing the letter O. It can also be selected from anywhere in
    GRAPH at any time by pressing ALT-O. The screen looks like this:

              --------------------------------------------------





                                 ILLUSTRATION


                                 Press ALT-O





              --------------------------------------------------

    For most graphing applications, the optional specification fields do
    not need to be changed, because GRAPH determines the best value to
    use. But sometimes you may want to customize a graph by changing one
    or more of these fields.


    EDGES OF CHART
    The graphics screen is composed of thousands of tiny dots. There are
    640 columns of dots across the screen and 200 rows of dots vertically,
    for a total of 128,000 dots. The first four fields of the Optional
    Specifications screen define the boundaries on the screen within which
    GRAPH confines its drawing. As you can see from the default settings
    shown in the screen above, a graph normally occupies almost the entire
    screen. Changing the left or right edges of the area causes the graph


    54












-







                                           OPTIONAL SPECIFICATIONS


    to be "squeezed" into a narrower space. This changes the appearance
    of the graph, giving it         --------------------------------------
    a taller look. For example,
    the graph on the right
    shows how the TUTORIAL
    bar chart looks when the
    left edge is changed to                     ILLUSTRATION
    150 and the right edge is
    changed to 450.
                                                Load TUTORIAL
    Note the month descriptions         Left edge to 150, right to 450
    in the graph on the right.
    They have overlapped one
    another until they are
    unreadable. On narrow
    graphs, it may be necessary
    to eliminate the value
    names, or to leave some of
    them blank.
                                    --------------------------------------

    To give a graph a low, flat look, change the top and bottom edges to
    70 and 130, but leave the left and right edges unchanged:

              --------------------------------------------------

                                 ILLUSTRATION
                                Load TUTORIAL
                  Change top edge to 70, bottom edge to 130

              --------------------------------------------------

    The problem of overlapping value names that occurred with tall, thin
    graphs is not a problem when flattening a graph. If there is not
    enough room for the vertical scale numbers to fit on a flat graph,
    then GRAPH uses fewer scale numbers so they don't overlap.

    Changing all four edges of a graph simply makes the graph smaller.
    For a small graph or one that is flat or tall, try experimenting with
    the four edge values to change the graph's shape and size.


                                                                        55












-







    OPTIONAL SPECIFICATIONS



    PERCENT OF CHART USED
    Looking at some of the line graphs and bar charts in this manual, you
    may notice that the tallest bar never goes all the way to the top of
    the graph. In fact, it always occupies exactly 90% of the vertical
    space available, unless you tell GRAPH otherwise. If you decrease the
    Percent of Chart Used value, GRAPH uses less of the vertical graphing
    area. This can be useful, for example, when creating graphs with
    different values, but trying to keep them proportionate to one
    another. The two graphs below reflect sales figures for the years
    1985 and 1986:

    ----------------------------------  ----------------------------------

            ILLUSTRATION                          ILLUSTRATION

            Load SAMPLE13                         Load SAMPLE14
      Select Bar Chart - Regular            Select Bar Chart - Regular

    ----------------------------------  ----------------------------------

    At first glance, it would appear that 1986 sales are no better than
    1985 sales. But actually, sales doubled in 1986. How can the charts be
    made more proportionate to one another? One solution is to graph all
    24 months on a single graph. But then the graph becomes cluttered, and
    the bars become very narrow. An alternative is to change the Percent
    of Chart Used value on the 1985 graph, so that the bars are not as
    tall. Since the 1985 numbers are roughly half the size of the 1986
    numbers, try 45% as the 1985 Percent of Chart Used. It may take some
    experimenting to get both of the charts with the same high value; in
    this case, 37%. Now the charts look like this:

    ----------------------------------  ----------------------------------

            ILLUSTRATION                          ILLUSTRATION

            Load SAMPLE13                         Load SAMPLE14
         Change % used to 37                    Leave % used at 90
      Select Bar Chart - Regular            Select Bar Chart - Regular
    ----------------------------------  ----------------------------------


    56












-







                                           OPTIONAL SPECIFICATIONS



    THREE-D ASPECT ANGLE
    Three-dimensional bar charts sometimes have a unique problem: the bars
    in front block the bars in back so they can't be seen. There are
    multiple solutions to this problem. The first is to Flip (ALT-F) the
    columns, causing the sequence of the bars to be reversed. Sometimes a
    Flip is all that is needed, because the larger sales figures are
    blocking the profit figures, or the larger 1986 figures are blocking
    the '85 figures. But sometimes no amount of flipping or transposing
    can make the bars in back more visible.

    Changing the 3-D Aspect Angle effectively "opens up" the 3-D chart, as
    if it were a pop-out birthday card. The wider it is opened, the easier
    it is to see the bars in
    back. Another comparison is      -------------------------------------
    to imagine yourself on an
    airplane, flying toward                      ILLUSTRATION
    a "city" of 3-D bars. From
    a distance, the city looks                   Load SAMPLE15
    like the graph to the right.             Select 20% Aspect Angle
    Some of the buildings in                  Select 3-D Bar Chart
    front are blocking the           -------------------------------------
    buildings behind them.
                                     -------------------------------------

    As the airplane gets                         ILLUSTRATION
    closer, (50% aspect angle),
    the "roofs" of the hidden                    Load SAMPLE15
    bars in back become                      Select 50% Aspect Angle
    visible, as in the second                 Select 3-D Bar Chart
    example to the right.            -------------------------------------

                                     -------------------------------------
    Finally, as the airplane
    nears the city, (80% aspect                  ILLUSTRATION
    angle), you can see all the
    buildings, and maybe even                    Load SAMPLE15
    part of the street between               Select 80% Aspect Angle
    them.                                     Select 3-D Bar Chart
                                      -------------------------------------


                                                                        57












-







    OPTIONAL SPECIFICATIONS



    CIRCLE ASPECT RATIO
    Some printers and video screens distort the circular shape of a pie
    chart, giving it either a flat, oval shape or a tall, stretched oval
    shape. For example:

    ---------------------------------   ---------------------------------

              ILLUSTRATION                        ILLUSTRATION

             Load TUTORIAL                       Load TUTORIAL
    Change circle aspect ratio to 25    Change circle aspect ratio to 75
        Select PIE CHART - UNCUT            Select PIE CHART - UNCUT

    ---------------------------------   ---------------------------------

    On a video monitor, this distortion can usually be adjusted with the
    vertical height adjustment on your video monitor. On printers, an
    adjustment is usually not available; it is inherent in the dot pattern
    produced by the printer.

    Reducing the Circle Aspect Ratio causes circles to be drawn flatter.
    Increasing the Ratio causes circles to be drawn taller. If pie charts
    are not perfectly circular on your printer, change the Circle Aspect
    Ratio until the pie chart becomes round. Changing the aspect ratio
    changes both the screen image and the printed image, so it may be
    necessary for the screen image to be slightly distorted so that the
    printed pie chart can be circular.

    The distorted pie charts produced by changing the Circle Aspect Ratio
    value may even be desirable sometimes. The flat pie chart in the
    example above has a sort of slanted, three-dimensional effect which
    may be desirable for some charts.









    58












-







                                           OPTIONAL SPECIFICATIONS



    HORIZONTAL AND VERTICAL GRIDS
    GRAPH prints rows of dotted lines across line graphs and bar charts,
    alongside each scale number. These dotted lines can be removed by
    changing the Horizontal Grid field from Y to N. Vertical grid lines
    can also be printed, but are normally left off the graph. To print
    vertical grid lines, change the Vertical Grid field from N to Y. Here
    are examples of graphs with and without grid lines:

    ----------------------------------  ----------------------------------

            ILLUSTRATION                          ILLUSTRATION

            Load SAMPLE03                          Load SAMPLE03
      Select Bar Chart - Regular            Select Bar Chart - Regular
     N for Vert grid, Y for Horiz.         N for Vert grid, N for Horiz.

    ----------------------------------  ----------------------------------


    ----------------------------------  ----------------------------------

            ILLUSTRATION                          ILLUSTRATION

            Load SAMPLE03                          Load SAMPLE03
      Select Bar Chart - Regular            Select Bar Chart - Regular
     Y for Vert grid, N for Horiz.         Y for Vert grid, Y for Horiz.

    ----------------------------------  ----------------------------------


    PRINT LEGENDS
    Sometimes the legend to the right of a graph is not necessary, either
    because the legends are intuitively obvious, or because there is only
    one entry in the legend. Legends can be removed by specifying N on the
    Print Legends field.

    A secondary benefit of removing legends is that the area available for
    the graph becomes wider. On graphs with many numbers, a wider
    graphing area usually improves readability.


                                                                        59












-







    OPTIONAL SPECIFICATIONS



    SCALE INCREMENT AND STARTING SCALE
    The numbers which run up the left side of a line graph or bar chart
    are called the scale numbers. GRAPH usually does a good job of
    determining the best scaling increment for you. The default increment
    is usually a power of ten: 10, 100, 1000, 10000, etc. There may be
    times when you want the increment to be something different. For
    example, if you are graphing accounts receivable aging, you may want
    the scales to read 0, 30, 60, 90, 120. All it takes is to change the
    scale increment to 30.

    The Starting Scale Adjustment was discussed in the section titled
    Drawing Graphs -- Adding Contour. An example is given in that section
    of a graph which appears flat and unchanging. Then the starting scale
    value is changed from zero (the default) to one million, and the graph
    gets some contour.


    EXPLODED PIE CHART SECTIONS AND DISTANCE
    When drawing pie charts, it is often useful to have certain sections or
    "slices" pulled out from the rest of the pie. GRAPH automatically pulls
    out the first section (value 1) on an exploded pie chart. To explode a
                                                   different section, or
      ----------------------------------------     more than one section,
                                                   change the field called
                   ILLUSTRATION                    Exploded Pie Chart
                                                   Sections. To explode
                   Load TUTORIAL                   more than one slice,
           delete "Gross Profits" column           enter two or more
    Set "Exploded pie chart sections to "1 5 11"   numbers separated by a
           Select Pie Chart - Exploded             space. For example, the
                                                   pie chart on the left
                                                   has an Exploded Pie
                                                   Chart Sections field of
                                                   1 5 11, so the first,
       ---------------------------------------     fifth and eleventh
                                                   sections are exploded.





    60












-







                                           OPTIONAL SPECIFICATIONS



    CURRENT DATA DRIVE
    The disk drive you selected in response to the banner screen message
    (or on the command line) is shown on the Optional Specifications menu.
    Another drive can be selected for loading and saving graphic data by
    simply changing the drive letter.

    If a drive letter is specified which does not exist on your computer,
    then no files are available to be loaded, and a message is given when
    saving indicating the file cannot be opened.
































                                                                        61












-







    PATTERN SEQUENCES


    ---------------------------------------------------------------

                          PATTERN SEQUENCES

    Pressing 6 or P on the main menu, or pressing ALT-P at any time,
    passes control to the Pattern Screen:

              --------------------------------------------------





                                 ILLUSTRATION


                                 Press ALT-P





              --------------------------------------------------

    Use this screen to change the shading patterns on your graph. The
    sixteen available patterns are displayed across the top of the screen,
    and the current pattern sequence is displayed across the bottom. The
    default pattern sequence is ABCDEFGHIJKLMNOP. When a bar chart
    or pie chart is drawn, group 1 is shaded with pattern A, Group 2 with
    pattern B, and so on. Symbols for line graphs can be resequenced in
    the same manner.

    To change the sequence, press R, then type one or more characters over
    the old pattern sequence characters. For example, if your graph is to
    be done only with black and white shadings, use a pattern sequence of
    AFAFAF. The sequence needs to only be as long as the number of
    groups in your graph. If all the shadings are to be black, (white when
    printed), press CONTROL-Y to clear the pattern sequence field. If you
    find it hard to differentiate, for example, between patterns A, B and
    K, omit B and K by using a pattern sequence of ACDEFGHIJLMNOP.


    62












-







                                                 ADVANCED FEATURES


    ---------------------------------------------------------------

                           ADVANCED FEATURES


    TRANSPOSE AND FLIP
    It is not easy to visualize how your data will look graphically until
    you graph it. So after the data is all entered and you are looking at
    your graph, you may decide that it is backward or upside down. You can
    rearrange your data with Transpose and Flip. These commands can be
    invoked at any time by pressing ALT-T or ALT-F. If you are displaying
    a graph when you enter ALT-T or ALT-F, the data is rearranged and the
    graph is redrawn. If you are looking at the Enter Data screen when the
    keys are pressed, the data is redisplayed in the new sequence.

    TRANSPOSE (ALT-T) is a "rotate" command. It moves groups to
    values and values to groups. For example, this data:

                                Sales   Profit
                         Jan     10        1
                         Feb     20        2
                         Mar     30        3

    looks like this after transposition:

                                Jan   Feb   Mar
                         Sales   10    20    30
                         Profit   1     2     3

    FLIP (ALT-F) is a "mirror image" command. It swings around all the
    columns of data so the last one is first. For example, the transposed
    data above looks like this when flipped:

                                Mar   Feb   Jan
                         Sales   30    20    10
                         Profit   3     2     1

    After one of the ALT-T or ALT-F keys is pressed, if the resulting
    graph is undesirable, press the key a second time to return the graph
    to its previous state.


                                                                        63












-







    ADVANCED FEATURES


    Using Transpose and Flip, the same graph can be displayed in eight
    different ways:

    ----------------------------------  ----------------------------------
              ILLUSTRATION                        ILLUSTRATION

              Load SAMPLE16                       Load SAMPLE16
        Select Bar Chart - Regular          Select Bar Chart - Regular
                                                   Press ALT-T
    ----------------------------------  ----------------------------------
                 Normal                             Transposed

    ----------------------------------  ----------------------------------
              ILLUSTRATION                        ILLUSTRATION

              Load SAMPLE16                       Load SAMPLE16
         Select Bar Chart - Regular          Select Bar Chart - Regular
                Press ALT-F                    Press ALT-T then ALT-F
    ----------------------------------  ----------------------------------
                Flipped                      Transposed then Flipped

    ----------------------------------  ----------------------------------
              ILLUSTRATION                        ILLUSTRATION

              Load SAMPLE16                       Load SAMPLE16
        Select Bar Chart - Regular          Select Bar Chart - Regular
          Press ALT-F then ALT-T            Press ALT-T, ALT-F, ALT-T
    ----------------------------------  ----------------------------------
          Flipped then Transposed            Transposed then Flipped
                                                 then Transposed

    ----------------------------------  ----------------------------------
              ILLUSTRATION                        ILLUSTRATION

              Load SAMPLE16                       Load SAMPLE16
         Select Bar Chart - Regular          Select Bar Chart - Regular
         Press ALT-F, ALT-T, ALT-F        Press ALT-T, ALT-F, ALT-T, ALT-F
    ----------------------------------  ----------------------------------
         Flipped then Transposed              Transposed then Flipped
               then Flipped                 then Transposed then Flipped


    64












-







                                                 ADVANCED FEATURES


    ADDING TEXT TO GRAPHS
    After a graph is drawn, there is a large flashing cursor at the top,
    immediately to the right of the title. This cursor can be moved around
    the screen with the arrow keys, and additional text can be entered on
    the screen at the spot the cursor occupies. The following keys control
    movement of the cursor:

                             CONTROL KEYS

    Special Key      Alternate      Purpose of key
    ---------------  -------------  -------------------------------------
    UP ARROW         CONTROL-E      Moves the cursor upward one line.
    PAGE UP

    DOWN ARROW       CONTROL-X      Moves the cursor downward one line.
    PAGE DOWN

    LEFT ARROW       CONTROL-S      Moves the cursor left one character.

    BACKSPACE                       Moves the cursor left one character,
                                    and erases the current position.

    RIGHT ARROW      CONTROL-D      Moves the cursor right one character.

    HOME                            Moves the cursor to the upper left
                                    corner of the screen.

    END                             Moves the cursor to the lower right
                                    corner of the screen.

    ENTER                           Moves the cursor to the start of the
                                    next lower line.

    CONTROL-LEFT ARROW              Moves the cursor left one dot.

    CONTROL-RIGHT ARROW             Moves the cursor right one dot.

    CONTROL-PAGE UP                 Moves the cursor up one dot.

    CONTROL-PAGE DOWN               Moves the cursor down one dot.


                                                                        65












-







    ADVANCED FEATURES



    Fine-Tuning The Cursor
    As it is moved around the screen, the cursor normally moves upward and
    downward a distance equal to its height. It moves left and right a
    distance equal to its width. For "fine tuning" the cursor to an exact
    location, hold down the CONTROL key and press LEFT ARROW,
    RIGHT ARROW, PAGE UP or PAGE DOWN, and the cursor moves only
    a single dot (pixel) at a time.

    Destructive Backspace
    The BACKSPACE key erases the entire area occupied by the cursor after
    moving to the left. If the area contains part of your graph as well as
    text, the graph data is erased as well as any text.

    Text in Three Sizes
    Text may be added to a graph in three different sizes. Press the F1
    key to change the size of the cursor. Press F1 multiple times to
    rotate through the three sizes. The cursor size roughly indicates the
    size of the letters:

              --------------------------------------------------


                                 ILLUSTRATION

                                Load TUTORIAL
                  Select PIE CHART - UNCUT (with no legend)
              Across the top, type "These are large characters"
                 Below it, type "These are medium characters"
              And below that, type "These are small characters"


              --------------------------------------------------

    Text in White or Black
    Text is normally added on the screen as white letters on a black
    background (on the printer these become black letters on white paper).
    But suppose you want to enter some text in the middle of a pie chart
    slice which is white. Pressing F3 toggles the character color from
    white to black, so that characters display by removing dots instead of


    66












-







                                                 ADVANCED FEATURES


    adding dots. Entering black characters on a black background has no
    effect; it looks like nothing is happening. But if black characters
    are entered on a white or shaded background, they appear as in this
    example:

              --------------------------------------------------


                                 ILLUSTRATION

                                Load SAMPLE17
                         Display BAR GRAPH - REGULAR
         In the center of the first bar, enter 1985 in large letters
         In the center of the second bar, enter 1986 in large letters



              --------------------------------------------------

    Unfortunately, not all printers have the precise resolution of the
    laser printer used for preparing this manual. On some dot matrix
    printers, the 1985 and 1986 in the graph above would appear as little
    more than a blur. There is another way to label the inside of a white
    or shaded area of the graph: use the backspace key to "make a hole"
    in the middle of a shaded area, then type your descriptions into it.
    For example:

              --------------------------------------------------


                                 ILLUSTRATION

                                Load SAMPLE17
                          Select BAR GRAPH - REGULAR
          In the center of the first bar, press BACKSPACE four times,
                       then enter 1985 in large letters
         In the center of the second bar, press BACKSPACE four times,
                       then enter 1986 in large letters

              --------------------------------------------------


                                                                        67












-







    ADVANCED FEATURES



    Extra text on graphs is not saved in any form. If the Redraw key
    (F5) is pressed, the graph is redrawn and all extra text disappears.
    Likewise, when the graph is saved to disk, extra text is not saved
    with it. Consequently, if the graph is to be changed and reprinted at
    some time in the future, it is best to use the graph title, group
    names and value names for labelling, because they are saved with the
    graph and redrawn each time.


































    68












-







                                             TECHNICAL INFORMATION


    ---------------------------------------------------------------

                        TECHNICAL INFORMATION


    SYSTEM REQUIREMENTS

    Computer:      IBM PC / XT / AT or 100% compatible
    Memory:        256K RAM minimum
    DOS:           Version 2.0 or higher
    Disk Drives:   1
    Printer:       Dot Matrix Graphics
                   Graphics screen printing required
    Display:       Graphics Adapter required
    Monitor:       Color or Graphic monochrome


    CAPACITIES

    Maximum Numbers Graphed:      832
    Maximum Groups:               52 (with 16 values)
    Maximum Values:               52 (with 16 groups)
    Maximum Number:               999,999,999,999
    Minimum Number:               -99,999,999,999
    Types of Graphs:              10


    SINGLE DRIVE USERS

    GRAPH works fine on systems with only one diskette drive. There is
    adequate room on a single diskette for the programs, the complete
    documentation, and dozens of graphs. If your diskette starts filling
    up, delete the GRAPH.DOC file to make more room. Just remember
    if you share GRAPH with a friend, be certain to share the
    GRAPH.DOC file too.







                                                                        69












-







    TECHNICAL INFORMATION



    USERS WITH HARD DISKS
    To install GRAPH on a hard disk, boot up DOS, then follow these
    steps:

            C:                    If not already logged to drive C (the
                                  hard disk), then log to it.

            CD\                   Log to the root directory of the hard
                                  disk.

            MD GRAPH              Make a new directory called GRAPH.

            CD GRAPH              Log to the new directory.

            COPY A:*.*            Copy all the files from the GRAPH
                                  Program Disk in drive A to the hard
                                  disk. GRAPH is now installed on your
                                  hard disk.


    To start GRAPH from the hard disk, follow these steps:

            CD \GRAPH             Change to the GRAPH subdirectory.

            GRAPH C:              Run the GRAPH program, specifying
                                  drive C as the drive for saving data.
                                  Data is saved in the GRAPH
                                  subdirectory with the programs.



    USERS WITH RAM DISKS
    If you are using part of your computer's memory to emulate an
    additional disk drive, there is typically no advantage to installing
    GRAPH on the RAM disk. When GRAPH is started, the entire program
    is loaded into memory, and remains there at all times. GRAPH files
    are usually so small that it takes just a few seconds to load or save
    one from even the slowest disk drive. Consequently, there is little or
    no benefit to using GRAPH with a RAM disk.


    70












-







                                             TECHNICAL INFORMATION



    COLOR MONITORS
    Those who have a monochrome graphics monitor connected to a color
    graphics card may not see everything displayed on the screen, or the
    screen may appear blurred and unreadable. If this happens, press ESC
    to leave GRAPH, then start the program again, using the /M option:

                                GRAPH /M

    Users with color monitors may also use the /M option to cause all
    screens to display in black and white.































                                                                        71












-







    CUSTOMIZING EXPRESSGRAPH


    ---------------------------------------------------------------

                      CUSTOMIZING EXPRESSGRAPH



    When GRAPH is started, several optional fields may be included on the
    command line. First of all, a file name and optional drive designation
    may be included. For example:

                               GRAPH C:TUTORIAL

    starts GRAPH, then loads the GRF file from drive C. The first prompt
    for "drive to use for data" is not given, since the drive has already
    been specified. After loading the specified file, the Enter/Edit Data
    screen is displayed. The drive designation may also be specified by
    itself:

                                   GRAPH C:


    There are also some optional commands which may be included on the
    command line at startup. If there is a file name and/or drive
    designation, these commands follow them. The commands are:

         /M        Monochrome (black and white) display: This command is
                   usually necessary when using GRAPH on a monochrome
                   graphics monitor with a color graphics board. Users
                   with color graphics monitors may also use the command
                   to make menus appear in black and white.

         /S        Turn off the sound: GRAPH makes a distinctive "beep"
                   when it accepts a data field from the keyboard. It
                   makes a slightly different sound when an invalid
                   character is entered. Some computers have louder
                   speakers than others, and the sound may be annoying to
                   you or to others around you. Use the /S command to
                   turn it off.




    72












-







                                          CUSTOMIZING EXPRESSGRAPH


         /B        BIOS Calls for screen display: Some computers' video
                   memory is not fully compatible with the IBM PC. To
                   display data on the screen as quickly as possible,
                   GRAPH places data directly into video RAM. If
                   characters are not being properly displayed on your
                   compatible computer, or if "snowy" static appears on
                   the screen when characters are displayed, use the /B
                   option. GRAPH will call the ROM BIOS routines in your
                   computer to display characters on the screen. This
                   usually results in slower screen display.

         /F        Fast startup: If you have specified the drive letter or
                   file name on the command line, use the /F command to
                   bypass the banner screen and go directly to GRAPH.




























                                                                        73












-







    GRAPH FILE FORMAT


    ---------------------------------------------------------------

                          GRAPH FILE FORMAT

    This section is for programmers whose programs access data in .GRF
    files, or whose programs create .GRF files. The file format is
    designed so user programs can access or create .GRF files easily. All
    data is saved in ASCII string format.


    READING AND WRITING THE FILE
    In Microsoft BASIC, use the INPUT# command to read data from a
    GRF file, and PRINT# to write a GRF file. All data fields
    are string format. Numeric data can be read into a string workarea,
    then converted to a double-precision numeric value using the VAL
    function.

    Here is an example of a simple GRF file, which contains two groups,
    Sales and Profit, and three value names, Jan, Feb and Mar:

              GRAPH 1.0
              16,52
              2,3
              Sales
              48000
              31000
              45000
              Profit
              21000
              16000
              20000
              Jan
              Feb
              Mar
              Sales and Gross Profit
              10,600,20,150,90,30,50,1,0,1,0,0," 1 ",15
              1
              ABCDEFGHIJKLMNOP
              0



    74












-







                                                   GRAPH FILE FORMAT



    HEADER FIELD
    The first field is the header field. It looks like this:

                                GRAPH 1.0

    To verify that the input file is a GRAPH file, check the first
    five characters of this field for the letters "GRAPH". The "1.0"
    is the version number of GRAPH that produced the output. If you are
    creating a GRAPH file in your own program, it is recommended that
    you use "0.0" through "0.9" in this field, so it is evident that the
    file was not created by GRAPH, but by another program. You can also
    put descriptive info in the field, starting at column 20, to describe
    the source and/or contents of the file.


    MAXIMUM DIMENSION
    Following the header field are two numbers separated by a comma,
    which indicate the maximum dimension of the data matrix. For files
    created by GRAPH, these numbers are either: 16,52 or 52,16.


    DIMENSION USED
    Following the maximum dimension are two more numbers separated by a
    comma, which indicate the Number Of Groups Used and the Number Of
    Values Used. The earlier example has two groups (sales and profit)
    and three values per group (Jan, Feb, Mar), so the two numbers are
    2,3.


    GROUP NAMES AND VALUES
    Next comes the first group name, on a line by itself. Following it is
    each value (number) for the group, on a separate line. (The Number
    of Values Used tells you the exact count). Following the last value
    is the second group name. It is in turn followed by all the values
    for the second group, and so forth for as many groups as are specified
    in the Number Of Groups Used.





                                                                        75












-







    GRAPH FILE FORMAT


    REMAINING FIELDS OPTIONAL
    The fields explained below, which follow the group names and values,
    are optional. If the GRF file ends with none or only some of the
    optional fields, GRAPH loads the fields that are present, and uses
    system defaults for the rest.


    VALUE NAMES AND GRAPH TITLE
    Next come the value names, one per line. If no value names were
    specified, the lines are still present, but contain blanks or null.
    Following the last value name is the graph title. It also is present
    even if blank.


    OPTIONAL SPECIFICATIONS
    The next line contains each of the values from the Optional
    Specifications screen, separated by commas.


    OTHER PARAMETERS
    Following the optional specifications are the following parameters:

             * Current selection on the Graph Menu (1 to 10)
             * Alternate pattern selection
             * Starting scale adjustment

    As this product is enhanced, more special parameters will be added at
    the end. The program checks for end-of-file as it loads, so if some
    new parameters are missing, the module will still load, and use
    standard defaults for the missing parameters. None of these parameters
    are required for the graph to display, and it is recommended that
    programs passing data to GRAPH not include Optional Specification
    parameters or the fields following them. Bad data in one of the
    fields can cause unpredictable results.








    76












-







                                            FILES ON THE GRAPH DISK


    ---------------------------------------------------------------

                       FILES ON THE GRAPH DISK

    The following files are included on your GRAPH diskette:

    *  README: Contains general information about ExpressGraph and
       Expressware. It can be displayed with the TYPE command, or can
       be printed using this DOS command:   COPY README PRN:

    *  GRAPH.EXE: The GRAPH startup program. It must be on the
       logged disk drive.

    *  GRAPH2.EXE, GRAPH3.EXE, etc.: Overlay programs used by
       GRAPH. They must be on the currently logged disk drive.

    *  GRAPH.DOC: The GRAPH User Guide in a disk file. This is an
       evaluation copy of the guide, provided so you can share the program
       with others. This file is not needed to run GRAPH.

    *  PRINTDOC.BAT: This batch file is used to print the evaluation
       copy of the User Guide.

    *  RESPONSE: This is a file similar to the User Response Form at
       the end of this manual. You can either remove the pages from the
       manual, or COPY RESPONSE PRN: to print this file.

    *  SAMPLE01.GRF, SAMPLE02.GRF, etc.: Sample graph files which are
       referenced in the documentation on the diskette. Since the diskette
       documentation does not contain the illustrations found in the
       registered User's Guide, all the illustrations have been saved as
       GRF files on diskette for easy display by GRAPH.

    *  TUTORIAL.GRF: A sample of the graph file referenced and
       discussed in the tutorial at the beginning of the User's Guide.







                                                                        77












-







    FREQUENTLY ASKED QUESTIONS


    ---------------------------------------------------------------

                           SOME FREQUENTLY
                           ASKED QUESTIONS


    Q: What is your update policy?
    A: All registered Expressware users are notified by mail when a new
       version of GRAPH becomes available. The cost of an update is
       usually $20 (to registered users).

    Q: Do you have any other programs you are distributing?
    A: Yes. File Express, a powerful data base management program, and
       ExpressCalc, an easy-to-use spreadsheet.

    Q: What else are you working on?
    A: An advanced report writer, as yet to be named. And new versions
       of ExpressCalc, File Express and ExpressGraph are also in
       development. In the section titled "User Response Form" we list
       some future enhancements, and ask you to indicate which ones are
       the most desirable to you. By filling out and returning the form,
       you can help us decide which improvements should be made first.

    Q: In what language was GRAPH written?
    A: It was written in BASIC, then compiled with the Microsoft
       QuickBASIC Compiler. It also has some assembler subroutines.

    Q: What computers does GRAPH run on?
    A: Based on our users' responses, we know that GRAPH runs on
       the following computers (provided they have a graphics adapter):

       IBM PC                COMPAQ Deskpro           TANDY 1000
       IBM XT                COMPAQ Portable          TANDY 1200
       IBM PCjr              CORONA                   ZENITH Z-150
       IBM PC Portable       ITT Xtra                 ZENITH AT
       IBM AT                TAVA
       AT&T 6300

    If you have tested GRAPH on another brand, please let us know,
       and we will add it to the list.


    78












-







                                                  DISTRIBUTION NOTICE


    ---------------------------------------------------------------

                          DISTRIBUTION NOTICE


    Expressware is distributing GRAPH as a "SHAREWARE" product.
    After trying the product, if you decide to use it, we trust you to
    purchase the registered set.

    You may obtain a production copy of GRAPH for $10 from your local
    software dealer or directly from Expressware. The $10 disk set
    contains a diskette with the complete GRAPH software and the
    complete documentation, ready to be printed on your own printer. The
    disk set also contains a $10 rebate coupon to be used toward the
    purchase of the GRAPH registered set.

    The complete GRAPH registered set is also available from software
    dealers throughout the U.S. and Canada, or may be purchased directly
    from Expressware. The registered set includes a commercially printed
    copy of the User's Guide, one diskette and a user registration form.
    Registered owners of GRAPH receive phone support on Expressware
    products, newsletters, product announcements, and update service.

    Whether or not you purchase a registered copy, you are still
    encouraged to copy GRAPH and share it with your friends, so they
    can evaluate it. The following restrictions apply:

    * No charge is to be made for copying or distributing GRAPH.

    * No alterations may be made to the files on the diskette.

    * The printed manual may not be copied or reproduced in any way.

    * Commercial sale or use of GRAPH in any manner is prohibited
      without Expressware's written permission.







                                                                        79












-







    USER RESPONSE FORM


    ---------------------------------------------------------------


                         USER RESPONSE FORM


    We are always interested in knowing more about our users. This
    information helps us to channel our efforts in the directions you
    want. Please help us by completing the questionaire on the
    following page and mailing it to:

                               Expressware
                              P. O. Box 230
                            Redmond, WA 98073


    If you do not want to remove these pages from your manual, and a
    copy machine is not readily available, there is a file on the
    GRAPH diskette called RESPONSE which is a copy of this form.
    The file can be printed by typing the following on the DOS command
    line:

                            COPY RESPONSE PRN:



















    80












-







                                                  USER RESPONSE FORM


    1.
       Where did you hear about GRAPH?  _________________________________
    2.
       System being used to run GRAPH:

       a)  Computer brand/model  ________________________________________

       b)  Amount of computer memory?   _________________________________

       c)  Type of disk?  _______________________________________________

       d)  Black & white or color monitor?  _____________________________

       e)  Printer brand/model? _________________________________________

    3.
       For what types of applications do you use GRAPH?

        _________________________________________________________________

    4.
       ____ Registered user                   ____ Non-registered user

       (If you are a non-registered user, we are interested in knowing
       why. Is the price too high? Is GRAPH missing features you need?)

    5. Which database manager do you use?   _____________________________

    6. Which word processor do you use?   _______________________________

    7. Which spreadsheet do you use?    _________________________________

    8. Name and address (optional):
                                     ____________________________________

                                     ____________________________________

                                     ____________________________________




                                                                        81












-







    USER RESPONSE FORM


    9.
       Here are some of the enhancements to GRAPH that are planned.
       Help us prioritize these enhancements. Put a "1" on each feature
       you would find useful. Put a "2" on any you feel are important,
       and a "3" on those you feel are absolutely essential.

       ___ Help screens.
       ___ Scatter graphs.
       ___ Area charts.
       ___ Horizontal bar charts.
       ___ Subtotals and totals.
       ___ Overlay/combine different types of graphs.
       ___ Save screen dump images to disk.
       ___ Profiles (configuration files).
       ___ Formulas in data fields.
       ___ Smart keys (keyboard macros).
       ___ Save extra text entered on graph.
       ___ Mark a block of data to be graphed.
       ___ Specify a subdirectory for data files.
       ___ Move portions of the graph around on the screen.
       ___ Allow user-defined shading patterns.
       ___ ____________________________________________
       ___ ____________________________________________
       ___ ____________________________________________

    10.
       If you find a bug in GRAPH, an error in the manual, or you just
       have a suggestion for doing it a better way, we would like to hear
       from you. Write your comments here, or attach a separate sheet.

       ________________________________________________

       ________________________________________________

       ________________________________________________

       ________________________________________________

       ________________________________________________



    82












-







                                                         Index


    -----------------------------------------------------------

    A                             D
    adding text  65               data drive  61
    advanced features  63         delete column  22
    aspect angle  37, 57          delete row  22
    aspect ratio  58              destructive backspace  66
    automatic value names  21     dimensions  75
    available patterns  62        disk files
                                     loading  45
                                     saving  43
    B                             diskette drive  3
    backspace, destructive  66    diskette files  77
    bar chart  33                 distance to explode  60
       overlapped  34             distorted circles  58
       percentage  36             double precision  74
       regular  34                double-sided diskette  3
       stacked  35                drawing graphs  23
       three-D  37                drive letter  61
    bell, turning off  72         DIF files  49
    black and white monitor  71   DOS version required  69
    black text  66
    bugs, reporting  80
    BIOS  72                      E
    bypass banner screen  72      edges of chart 54
                                  entering data  18
                                  entering numbers  21
    C                             erase column  22
    capacities  12, 69            erase row  22
    circle aspect ratio  58       exploded sections  60
    clear data  21                exploded slice  41
    color                         extra text  65
       graphics board  3          ExpressCalc, graphing data  49
       monitor  3, 71
    compatible computers  78
    computers, runs on  78
    continuous flow  27
    current data drive  61
    cursor movement  66



                                                                        85












-







    Index



    F                             K
    file format  74               keyboard  conventions  14
    file names   77               keys, alternate  14
    files on disk  77             kinds of graphs  13
    fine-tuning cursor  66
    flatten graph  54
    flip  37, 63                  L
    format, file  74              language  78
    frequent questions  78        large text  66
    future enhancements  80       learning  6
    fast startup  72              letter sizes  18
    FE files  46                  line graph
    File Express, graphing data      regular  27
                                     with symbols  27
                                  loading data  45
    G
    getting started  4
    graph title  18               M
    graphic types  13             main menu  16
    graphing databases  46        maximums  12, 69
    graphing spreadsheets  49     memory required  3, 69
    grid lines  59                minimum configuration  3
    group names  19               monitor
                                     color  3
                                     monochrome   3
    H                             monochrome mode  72
    hard disk  70                 monochrome monitor  3, 71
    header record  75             Microsoft BASIC  74, 78
    horizontal grids  59          MSDOS  3
    horizontal lines  27


    I
    installing on hard disk  70
    installing GRAPH  4
    invert matrix  63





    86












-







                                                 Index


    N                             Q
    narrow graph  54              question & answer  78
    negative numbers  23
    non-IBM computers  78         R
    numbers, entering  21         regular bar chart  34
                                  regular line graph  27
                                  reporting bugs  80
    O                             requirements  3
    omit legends  59              response form  80
    one drive  69                 reverse matrix  63
    operating system   3          RAM disks  70
    optional specs  54            ROM BIOS  72
    order form  83
    ordering software  83
    overlapped bar chart  34      S
    overlapped legends  54        saving data  43
                                  scale increment  60
                                  scaling  23
    P                             separated pie  41
    pattern sequences  62         shading  62
    percent used  56              single drive  69
    percentage bar chart  36      slash commands  72
    permission to copy  79        sound, turn off  72
    pie chart  40, 60             stacked bar chart  35
    policy, updates  78           starting scale value  60
    prices, software  78          startup options  72
    prices, software  83          symbols  27
    print legends  59             system requirements  3, 69
    print numeric data  22        Skip banner screen  72
    printer  3                    Slow display  72
    programming language  78
    public domain  79
    PCDOS  3









                                                                        87












-




    Index


    T
    technical info  69
    text sizes  66
    three-D aspect  37
    three-dimensional bar chart  37
    transpose  63
    turn off sound  72
    tutorial  6
    Three-D aspect angle  57


    U
    update policy  78
    user response  80


    V
    vertical grids  59


    W
    white text  66
    widen graph  59


    3
    3-D aspect angle  57
    3-D bar chart  37

















    88













```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```
-

       -----------------------------------------------------------------
                            O R D E R   F O R M
       -----------------------------------------------------------------

                           E X P R E S S W A R E
                               P.O. Box 230
                            Redmond, WA  98073
                           Phone (206) 481-3040


                                                         PRICE   PRICE
       DESCRIPTION                           QUANTITY     EACH  EXTENDED
       -----------------------------------------------------------------

       File Express Disk Set                  _____      $15.00  $_______

       File Express Registered Copy           _____      $69.95  $_______
         Includes User's Guide, program
         diskette, supplemental diskette,
         technical support and newsletters

       ExpressCalc Disk Set                   _____      $15.00  $_______

       ExpressCalc Registered Copy            _____      $49.00  $_______

       ExpressGraph Disk Set                  _____      $10.00  $_______

       ExpressGraph Registered Copy           _____      $49.00  $_______

       ExpressCheck Disk Set                  _____      $15.00  $_______

       ExpressCheck Registered Copy           _____      $29.95  $_______


       Subtotal                                                  $_______

       Shipping and Handling:                                       $3.50

       Special handling: COD $3  *  Rush $5  *  Foreign $15      $_______

       Washington residents add 8.1% State Sales Tax             $_______

                                                Total:           $_______

       Visa _____    MC _____   Check _____   COD _____

       Card Number:  ____________________________________________________

       Expiration Date: ________________

       Signature: _______________________________________________________

       Please make checks payable to : EXPRESSWARE (U.S. funds only)

       Name:   __________________________________________________________

       Address:__________________________________________________________

               __________________________________________________________

       City:   ______________________  State: _____  Zip Code: __________



-





       If you have received this program from a User's Group or a friend
       and would like to be put on Expressware's mailing list so that
       you will receive information on upcoming releases and notification
       of new products, please fill in your name and address below and
       send to:

                           E X P R E S S W A R E
                           P.O. Box 230
                           Redmond, WA  98073




       Name ___________________________________________________________

       Address ________________________________________________________

       ________________________________________________________________

       City _________________________ State _________ Zip Code ________


       We would also appreciate any input you would care to offer about
       our products. If you have any ideas or comments that would make
       them better programs, please let us know.

       We are working hard to make Expressware software the best, most
       useful, and affordable products of their kind on the market today.
       With your input we will be well on our way to achieving that goal.

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       ____________________________________________________________________

       __________________________________________________________________EG



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1058

     Volume in drive A has no label
     Directory of A:\

    EXAMPLE  DIF       304  12-01-87   1:04a
    EXAMPLE2 DIF      1152  12-01-87   1:04a
    FILE1058 TXT      1717   2-08-89   2:21p
    FIX      COM        14  12-01-87   1:04a
    GRAPH    DOC    141729  12-01-87   1:04a
    GRAPH    EXE     27713  12-01-87   1:04a
    GRAPH2   EXE     94865  12-01-87   1:04a
    GRAPH3   EXE     59117  12-01-87   1:04a
    ORDER    BAT       640  12-01-87   1:04a
    ORDERFRM DOC      4696  12-01-87   1:04a
    PRINTDOC BAT       450  12-01-87   1:04a
    README            3712  12-01-87   1:04a
    SAMPLE01 GRF       319  12-01-87   1:04a
    SAMPLE02 GRF       223  12-01-87   1:04a
    SAMPLE03 GRF       241  12-01-87   1:04a
    SAMPLE04 GRF       318  12-01-87   1:04a
    SAMPLE05 GRF       328  12-01-87   1:04a
    SAMPLE06 GRF      1282  12-01-87   1:04a
    SAMPLE07 GRF       209  12-01-87   1:04a
    SAMPLE08 GRF       436  12-01-87   1:04a
    SAMPLE09 GRF       356  12-01-87   1:04a
    SAMPLE10 GRF       360  12-01-87   1:04a
    SAMPLE11 GRF       207  12-01-87   1:04a
    SAMPLE12 GRF       637  12-01-87   1:04a
    SAMPLE13 GRF       241  12-01-87   1:04a
    SAMPLE14 GRF       242  12-01-87   1:04a
    SAMPLE15 GRF       228  12-01-87   1:04a
    SAMPLE16 GRF       148  12-01-87   1:04a
    SAMPLE17 GRF       117  12-01-87   1:04a
    TUTORIAL GRF       375  12-01-87   1:04a
           30 file(s)     342376 bytes
                               0 bytes free
