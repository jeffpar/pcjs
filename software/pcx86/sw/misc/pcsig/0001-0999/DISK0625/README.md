---
layout: page
title: "PC-SIG Diskette Library (Disk #625)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0625/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0625"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-CALC FOR THE PCJR"

    This is Jim Button's famous spreadsheet program PC-CALC, specifically
    recommended for the PCjr.  Perfect for small to mid-size applications
    such as financial analysis and simple accounting.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #199, version v2 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  PC-CALC .EXE         CRC = 90 FE

--> FILE:  PCCALC  .EXE         CRC = 5E 3F

--> FILE:  PCCALC2 .EXE         CRC = 90 89

--> FILE:  PCCALC3 .EXE         CRC = A5 E1

--> FILE:  PCCALC  .MSG         CRC = 23 31

--> FILE:  PCCALC  .DOC         CRC = 98 64

--> FILE:  DOC     .BAT         CRC = FE 86

--> FILE:  PCOVL   .EXE         CRC = 82 B1

--> FILE:  EXAMPLE .            CRC = 3D 85

--> FILE:  RESPONSE.            CRC = 4E 43

 ---------------------> SUM OF CRCS = EE 3B

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FILES625.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 625   PC-Calc                                           v2 DS2
---------------------------------------------------------------------------
This is Mr. Jim Button's famous spreadsheet program PC-Calc. This version of the
program was included to fill a void for PCjr users. It is recommend that PCjr
users and owners purchase this version of the program, and all others purchase
the version on disk no 199.
 
PC-CALC  EXE  Spreadsheet program
PCCALC   DOC  Documentation for PC-Calc  (86k)
DOC      BAT  Batch file to print documentation
PCCALC   EXE  Part of pc-calc
PCCALC2  EXE  Part of pc-calc
PCCALC3  EXE  Part of pc-calc
PCCALC   MSG  Part of pc-calc
PCOVL    EXE  Part of pc-calc
EXAMPLE       Part of pc-calc
RESPONSE      Part of pc-calc
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## PCCALC.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
                                   PC-CALC(tm)
 
 
 
                              A Spreadsheet Program
                          For the IBM Personal Computer
 
                                   Version 2.0
 
 
 
                             (C)Copyright CALC, 1984
                          (C)Copyright ButtonWare, 1984
                Portions (C)Copyright Microsoft Corporation, 1983
                               All rights reserved
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
        Jim Button
        ButtonWare
        P.O. Box 5786
        Bellevue, WA 98006
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 2
 
 
                                TABLE OF CONTENTS
 
        Introduction  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .   4
        System Requirements .  .  .  .  .  .  .  .  .  .  .  .  .  .   5
        Getting Started  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .   6
        A Brief Tutorial .  .  .  .  .  .  .  .  .  .  .  .  .  .  .   7
        General Information .  .  .  .  .  .  .  .  .  .  .  .  .  .  11
        Keyboard Conventions   .  .  .  .  .  .  .  .  .  .  .  .  .  13
        Alphabetical Reference
           ABS Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  15
           ATN Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  15
           AVERAGE Function .  .  .  .  .  .  .  .  .  .  .  .  .  .  15
           BLANK Command     (/B) .  .  .  .  .  .  .  .  .  .  .  .  16
           CONFIGURE Command (/C) .  .  .  .  .  .  .  .  .  .  .  .  16
           COS Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  16
           COUNT Function   .  .  .  .  .  .  .  .  .  .  .  .  .  .  17
           DELETE Command    (/D) .  .  .  .  .  .  .  .  .  .  .  .  17
           EDIT Command      (/E) .  .  .  .  .  .  .  .  .  .  .  .  17
           EXP Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  18
           FIX Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  18
           FORMAT Command    (/F) .  .  .  .  .  .  .  .  .  .  .  .  18
           GLOBAL Command    (/G) .  .  .  .  .  .  .  .  .  .  .  .  20
           IF Function   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  20
           INSERT Command    (/I) .  .  .  .  .  .  .  .  .  .  .  .  21
           INT Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  21
           LOAD Command      (/L) .  .  .  .  .  .  .  .  .  .  .  .  22
           LOG Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  22
           MAX Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  23
           MIN Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  23
           NPV Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  23
           PRINT Command     (/P) .  .  .  .  .  .  .  .  .  .  .  .  24
           QUIT Command      (/Q) .  .  .  .  .  .  .  .  .  .  .  .  26
           REPLICATE Command (/R) .  .  .  .  .  .  .  .  .  .  .  .  27
           SAVE Command      (/S) .  .  .  .  .  .  .  .  .  .  .  .  28
           SGN Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  28
           SIN Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  29
           SQR Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  29
           SUM Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  29
           TAN Function  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  30
           TITLE Command     (/T) .  .  .  .  .  .  .  .  .  .  .  .  30
           XTERNAL Command   (/X) .  .  .  .  .  .  .  .  .  .  .  .  30
           ZAP Command       (/Z) .  .  .  .  .  .  .  .  .  .  .  .  31
        PC-CALC File Format .  .  .  .  .  .  .  .  .  .  .  .  .  .  31
        The Files On The PC-CALC Disk   .  .  .  .  .  .  .  .  .  .  31
        Some Frequently Asked Questions .  .  .  .  .  .  .  .  .  .  31
        If You Need Help .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  33
        Disclaimer .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  34
        The User-Supported Concept   .  .  .  .  .  .  .  .  .  .  .  34
        Why Should I Pay?   .  .  .  .  .  .  .  .  .  .  .  .  .  .  35
        Restricted Permission to Copy   .  .  .  .  .  .  .  .  .  .  35
        Order Form .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  37
        Index   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  38
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 3
 
 
 
 
                        A NOTE ABOUT YOUR EVALUATION COPY
 
 
        PC-CALC now includes a 110-page typeset User Guide. The manual
        has become far too large to include on diskette. Portions of
        the manual are included here, so you can evaluate the software.
        At several places in this copy of the User Guide you'll see the
        following notice.
 
                  *****************************************
                  *   Section omitted. Evaluation copy.   *
                  *****************************************
 
        We honestly feel that we've supplied enough of the manual to
        allow you to make a good evaluation of the program.  There are
        several reasons why we didn't provide the entire manual on disk.
 
           - We want to continually remind you to pay for PC-Calc if
             you're using it. We've priced it so that you can afford
             it. Frankly, it's the best bargain in the industry.  We also
             suspect and hope that you (the buying public) will want to
             cast your "vote" for lower priced software by paying readily
             for such programs. Other software publishers would then be
             forced to take notice.
 
           - We feel that the honesty of our "registered" users should be
             rewarded. They're entitled to some extra value that should
             rightfully be denied to those who don't pay.
 
           - It takes up too much room on the diskette.
 
 
        We trust that you'll be open-minded about the omissions. We hope
        that we can soon add you to our list of very satisfied customers.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 4
 
 
 
                                  INTRODUCTION
 
 
        PC-CALC is an easy-to-use "Visible Spreadsheet" program. If you
        work with numbers, at home, on the job or at school, PC-CALC is
        for you. Whether the task is simple or complex, PC-CALC can help
        you.  By using its powerful commands, reports can be produced in
        minutes that would take hours to do manually, or days to write in
        BASIC.
 
 
        Here are some examples of how people are using PC-CALC:
 
           - Computing interest and principal on loans, mortgages,
             savings accounts.
 
           - Preparing payroll journals, sales journals, accounts
             receivable journals.
 
           - Doing income tax computations, computing depreciation,
             accumulating income and expenses.
 
           - Preparing business forecasts, P&L's, ten-year projections,
             etc. and then playing "what if..." to see the impact of
             changing one or more numbers.
 
           - Analyzing investments, balancing checkbooks, keeping budgets.
 
           - Preparing homework assignments for classes in bookkeeping,
             accounting, math, etc.
 
 
        Spreadsheets created with PC-CALC can be displayed and altered on
        the screen, printed out, saved on disk and reloaded for further
        changes or review. If you create a really wide spreadsheet that
        won't fit on one page, no problem. PC-CALC will print two pages
        that can be attached to make one wide spreadsheet.
 
 
        And spreadsheets are not limited to the size of your computer
        screen. PC-CALC will scroll up, down and sideways to give you a
        spreadsheet up to 26 columns wide and 255 lines long. Numbers and
        words can be placed anywhere on the spreadsheet. The width of
        each column of your spreadsheet can be any size from 1 character
        to 75 characters wide, or it can be "zero" characters wide, which
        means it exists and contains data, but is hidden from view. A
        number can have from one to nine decimals, or no decimals at all.
 
 
        Spreadsheets can link to other spreadsheets to extract data,
        providing a "3-dimensional" capability. And if you are a PC-FILE
        database user, PC-CALC can reach into your databases and extract
        data or add up numbers. And there is no limit to the number of
 

        PC-CALC(tm) USER GUIDE                                     Page 5
 
 
        databases that can be accessed by a single spreadsheet. These are
        just a few of the features that PC-CALC provides.
 
 
        This manual describes all the features of PC-CALC in detail. It
        is recommended that the manual be read completely before using
        PC-CALC, but you will find that it is so easy to use, many of its
        features can be mastered even without the documentation. For that
        reason, this manual has been organized as a reference document
        rather than a tutorial. There is a tutorial section at the
        beginning, titled "A Brief Tutorial", but the rest of the manual
        is designed for quickly finding information about specific
        commands and functions.
 
 
        ----------------------------------------------------------------
 
                               SYSTEM REQUIREMENTS
 
 
        PC-CALC runs on the IBM PC and PCjr or compatible systems with
        this minimum configuration:
 
             - 128K computer memory.
 
             - An MSDOS or PCDOS operating system version 1.1 or later.
 
             - A monochrome or color monitor with either 40 or
               80 column display. A color graphics board is not
               necessary, but if you have one, PC-CALC will
               format its screens in your choice of colors. If
               your computer has less than 25 lines, PC-CALC can
               be configured for a shorter screen (8 lines
               minimum).
 
             - A double sided diskette drive. PC-CALC is also
               compatible with hard disks and electronic disks.
 
             - A printer is optional. PC-CALC will run on most
               printers. Special formatting options are
               available for the Epson printer and compatibles.
 
 
 
 
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 6
 
 
 
 
                                 GETTING STARTED
 
 
        1. Turn on your computer and load the MS-DOS operating system.
           (The PC-CALC diskette does not have MS-DOS on it, so use any
           diskette that does.)
 
        2. Put the PC-CALC diskette in drive A. (If you only have one
           copy of the PC-CALC diskette, this is a good time to make a
           backup copy of it.)
 
        3. At this point, most users will simply type:
 
                                 PC-CALC
 
           and press ENTER, which will load and run the program. However,
           there are some special cases when PC-CALC cannot automatically
           configure itself, and an extra code must be entered, as
           indicated below:
 
           Computers with a forty-column display:
 
                                 PC-CALC 40
 
           Computers with a color board, but a monochrome monitor:
 
                                 PC-CALC BW
 
           Computers with a color board, but a monochrome monitor, and a
           forty-column display:
                                 PC-CALC BW40
 
           Non-IBM computers which do not have IBM-compatible video
           memory mapping (such as the Tandy 2000):
 
                                 PC-CALC SL
 
        4. Press any key to move from the PC-CALC banner screen to the
           spreadsheet screen.
 
        5. Check the screen. If it doesn't look right, or if it doesn't
           show "A1 >" in the lower left corner, read the Configure (/C)
           section before proceeding. Otherwise, PC-CALC is ready to use!
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 7
 
 
 
                                A BRIEF TUTORIAL
 
 
        Now that you have PC-CALC loaded in your computer, note that
        across the top of the screen are letters: A, B, C, etc. These
        letters identify the columns of the spreadsheet. Down the left
        side are numbers. These numbers identify each row of the
        spreadsheet. Each coordinate in this grid is called a "cell". For
        example, the cell where the cursor is currently located is called
        "A1"; to its right is "B1"; below it is "A2"; at the end of the
        spreadsheet (not currently on the screen) is "Z255".
 
 
        Press the arrow keys and you will find that you can move the
        large cursor (called the "cell cursor") around on the screen.
        When moving left and right, it moves one column at a time. Up and
        down it moves one row at a time. In the lower left corner of the
        screen is an indicator called the "cursor coordinate", which
        shows the cell currently occupied. As the cursor is moved about
        the screen, this cursor coordinate will rapidly change to the new
        cell address.
 
 
        Press the right-arrow several times and you will see the screen
        "scroll sideways". In other words, column A will disappear on the
        left, and all the other columns will shift to the left, making
        room for a new column on the right. If you keep pressing the
        right-arrow key, eventually you will come to column Z and the
        cursor will no longer move. You have reached the edge of the
        spreadsheet. Using the down arrow key you can make the screen
        "scroll up" until the last row of the screen, row 255, is
        displayed.
 
 
        When pressing the arrow keys to scroll, if you hold down the
        arrow key, causing it to rapidly repeat, you will notice
        something a bit different. The cursor coordinate in the lower
        left corner of the screen starts advancing rapidly,  but the
        screen is not redisplayed until you let up on the arrow key. This
        allows you to scroll quickly to any position in the spreadsheet
        without waiting for the screen to be refreshed.
 
 
        Now let's try putting some data on the spreadsheet. Move the
        cursor to coordinate B4, and type 12345 then press the ENTER
        key. As you type the number, you will notice that it is displayed
        on the bottom line of the screen. This line is called the "entry
        line". When you press ENTER, the number on the entry line
        disappears, and is redisplayed up in the spreadsheet at
        coordinate B4. But it is slightly different. Instead of being
        simply the 12345 you typed, it is 12,345.00 and it is shifted to
        the right of the column. The number is displayed this way because
        of certain "defaults" in PC-CALC for displaying numbers. Unless
 

        PC-CALC(tm) USER GUIDE                                     Page 8
 
 
        otherwise specified, all numbers will have two decimal places,
        will have commas between the thousands, and will be "right-
        justified" in the column. Of course it is possible to change
        these defaults, for specific cells or for the whole screen, and
        this will be discussed later in the "Format Command" section.
 
 
        Now press the up-arrow and move the cell cursor to B2. Type the
        following (including the quote mark):
 
                        "This is a test of PC-CALC.
 
        and press the ENTER key. As you are typing, if you make an
        error, you can use the arrow keys to move the cursor back and
        forth across the entry line, then make typing corrections. After
        pressing ENTER, look at cell B2. It will now contain the text
        you typed, and the text will overlap into cells C2 and D2. Text
        is allowed to overlap cells in PC-CALC, provided the cells to the
        right have nothing in them. (Note: If your text didn't appear in
        cell B2, make sure you typed the quotation mark as the first
        character; the " mark tells PC-CALC that the data is text.)
 
 
        Now move the cursor to B6 and type:
 
                                     B4+B4
 
        then press the ENTER key. Cell B6 should display the number
        24,690.00 which is the sum of 12345 plus 12345. Let's examine
        what happened. By moving the cursor to B6, you told PC-CALC to
        put the result of the formula into B6. The formula B4+B4 told
        PC-CALC to get the number at B4, add it to itself, and put the
        result in B6. The formula could have been simpler or more complex
        and PC-CALC would have immediately gathered up all the numbers
        needed, computed the new value, and displayed the result at B6.
 
        Looking at the screen, you have now entered all three types of
        data that can go on a PC-CALC spreadsheet:
 
         At B2 you entered the  "text"     -  "This is a test of PC-CALC.
         At B4 you entered the  "value"    -  12345
         At B6 you entered the  "formula"  -  B4+B4
 
 
        Any cell on the spreadsheet can contain text, a value or a
        formula. Now move the cell cursor to each of the three cells with
        data in them. As the cell cursor moves into a cell, notice that
        the "cell contents" are displayed at the bottom of the screen on
        the "message line". The cell contents are the actual letters or
        numbers you typed when entering data into the cell.
 
 
        Now as a final exercise in this brief tutorial, type  /Z Y  to
        clear the worksheet (a complete explanation of the Zap (/Z)
 

        PC-CALC(tm) USER GUIDE                                     Page 9
 
 
        command appears later in the manual). Move the cursor to each
        cell listed below, and enter the data exactly as shown. If you
        get an error message on any of the lines, press CONTROL-C (hold
        down CONTROL while pressing C) to clear the entry line, then type
        it again. All lines should go in as shown without errors.
 
               At Coordinate:          Enter this data:
 
                    B2            "Compute Annual Interest
                    B4            "Rate:
                    C4            5.5
                    B6            "Year
                    C6            "  Balance
                    D6            " Interest
                    B7            "1983
                    C7            5000
                    D7            C7*C4/100
                    B8            "1984
                    C8            C7+D7
                    D8            C8*C4/100
                    B9            "1985
                    C9            C8+D8
                    D9            C9*C4/100
                    B11           "Totals
                    C11           C9+D9
                    D11           SUM(D7:D9)
 
 
        When the preceding data has been entered, your spreadsheet screen
        should look like this:
 
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
 
 
        This simple spreadsheet computes the interest on a savings
        account at a specified annual interest rate. Since this is a
        sample exercise, the spreadsheet has been kept small, but later
        you will learn how to use the "Replicate" command to extend a
        spreadsheet like this one to fifty years or more, in a matter of
        seconds. The "SUM" function in cell D11 is simply adding up the
        numbers in D7 through D9, so you can see the accumulated interest
        for all three years.
 
 

        PC-CALC(tm) USER GUIDE                                     Page 10
 
 
 
        Now let's try some "what if" experiments. What if the interest
        rate were seven percent instead of 5.5? To see the result, simply
        move to cell C4, type 7 and press ENTER. All the figures on the
        screen are immediately updated with the new interest computation.
        Or what if the interest were 18%? Try it. What if there were only
        $850.25 instead of $5000? Move the cursor to C7 and enter 850.25
        and the spreadsheet will immediately be recalculated.
 
 
        A printed report of the spreadsheet is often desirable.  Ready
        your printer, then type the command /P which invokes the Print
        routine. You will then be prompted for several options. For this
        simple spreadsheet, just press ENTER for each of the options.
        The spreadsheet will print, and PC-CALC will return to its
        original state, waiting for another command.
 
 
        Finally, before exiting from PC-CALC, let's save the spreadsheet
        on disk. Type /S to invoke the Save routine. You will be asked to
        enter the name of the spreadsheet; type TEST and press ENTER.
        PC-CALC will say "Saving file. Stand by . . ." and the file will
        be written to your PC-CALC disk. It can later be loaded using the
        /L command. (Note: If you get a message saying "File Exists.
        Overwrite Y/N?", it only means that someone before you saved a
        file called TEST. Reply Y to the message, and your TEST file will
        overwrite the one already on the disk.)
 
 
        This concludes the brief tutorial. The remainder of this manual
        is organized for reference. It is a good idea to read through it
        to familiarize yourself with some of the more sophisticated
        commands. But the best way to learn PC-CALC is to use it.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 11
 
 
 
                        GENERAL INFORMATION ABOUT PC-CALC
 
 
        The maximum size of a PC-CALC spreadsheet is 26 columns by 255
        rows. The maximum content of a cell is 64 characters, and the
        maximum column width is 75 characters. The amount of memory
        available for your spreadsheet is displayed at all times in the
        lower left corner of the screen. It is a number followed by the
        letter "K". If it says 16K, for example, you still have 16K of
        memory available for typing text and formulas. If it says 1K, be
        careful. Your spreadsheet is getting too big and may fill memory,
        causing the "MEMORY FULL" message.
 
 
        Three types of data may be entered into a cell:
 
           TEXT:    Precede a text entry with a quotation mark or
                    apostrophe. Any character may be typed in a text
                    entry, and all of the data will appear in the cell.
                    If the text data is wider than the column, and there
                    is nothing in the cell to its right, it will overlap
                    into subsequent cells. If there is something in the
                    cell to its right, the text data will be truncated on
                    the display and printout. The entire text entry is
                    retained in the cell, even if it does not all
                    display. Text may be left- or right-justified in the
                    column by using the Format (/F) command. Text entries
                    can be from 1 to 64 characters in length.
 
           VALUE:   A value is a number. When a value is entered into a
                    cell, it is displayed according to current defaults.
                    For example, you enter 12345 and it is displayed as
                    12,345.00. Each value is displayed according to the
                    display attributes of the cell.  These attributes can
                    be changed by using the Format (/F) command. In
                    PC-CALC a value cannot exceed 12 digits in total
                    length, and it can have no more than 9 digits to the
                    right of the decimal place. While these restrictions
                    in number size are acceptable for personal and
                    business applications, they may preclude the use of
                    PC-CALC for some scientific applications.
 
           FORMULA: A formula is one or more cell coordinates and/or one
                    or more values, combined using arithmetic operators.
                    For example, a formula might simply add together a
                    string of numbers: A1+B1+C1+D1 or it might perform a
                    more complex task: A1*2.5+(SUM(A1:D1)-.00005).
                    Formulas can be up to 64 characters in length.
 
 
        A formula can have any combination of cell coordinates, values,
        math functions, statistical functions and IF functions, each
        separated by an operator (+, -, *, /, ^). No blanks may be
 

        PC-CALC(tm) USER GUIDE                                     Page 12
 
 
        entered; if the space bar is pressed, PC-CALC ignores it.
        Exponentiation (^) is done first, then multiplication (*) and
        division (/) are done, and finally addition (+) and subtraction
        (-) are done.
 
 
        Parts of a formula may be nested in parentheses, up to thirty
        levels. These rules apply to formulas with parentheses:
 
             - Every left parenthesis must have a matching right
               parenthesis, or else the "Mismatched parentheses" error
               will occur.
 
             - Parenthesised expressions are always evaluated from the
               inner-most to the outer-most. Using parentheses, the
               precedence of the arithmetic operators can be overridden.
               For example, A1+5*C1 will do the multiplication first,
               then the addition. (A1+5)*C1 will do the addition first.
 
             - Use parentheses to separate two operators in a row. For
               example, to multiply A1 times -5, the formula A1*-5 is not
               valid because the * and - are together. Instead use this
               format: A1*(-5) to accomplish the arithmetic.
 
 
        A formula may also include a function, or consist solely of a
        function. Examples:
                               A1+SUM(B1:E1)
                               TAN(A1)
 
        For specific information on each function, see the alphabetical
        reference section.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 13
 
 
                              KEYBOARD CONVENTIONS
 
 
        Certain keys perform special functions in PC-CALC. These keys
        fall into two general categories; cell cursor keys and entry line
        keys. Once you have started entering data, PC-CALC goes into data
        entry mode, and only entry line keys will be recognized from the
        keyboard until the entry line is entered or canceled. In some
        cases, the same key that is used for cell cursor movement
        performs a different function when you are entering data. For
        ease of reference, the keys are listed within category.
 
                                CELL CURSOR KEYS
 
        Special Key      Alternate             Purpose of key
        -----------      ---------             --------------
        UP ARROW         CONTROL-E     Moves cell cursor up one row.
 
        DOWN ARROW       CONTROL-X     Moves cell cursor down one row.
 
        LEFT ARROW or    CONTROL-S     Moves cell cursor left one column.
        BACKSPACE or
        BACK-TAB
 
        RIGHT ARROW or   CONTROL-D     Moves the cell cursor right one
        TAB                            column.
 
        HOME                           Moves the cell cursor to the upper
                                       left corner of the screen.
 
        END                            Moves the cell cursor to the lower
                                       right corner of the screen.
 
        PAGE UP or       CONTROL-R     Moves the cell cursor back one
        UP/RIGHT ARROW                 screen. (to center row)
 
        PAGE DOWN or     CONTROL-C     Moves the cell cursor forward one
        DOWN/RIGHT ARROW               screen. (to center row)
 
        UP/LEFT ARROW    CONTROL-W     Moves the screen down one row
                                       without moving the cell cursor.
 
        DOWN/LEFT ARROW  CONTROL-Z     Moves the screen up one row
                                       without moving the cell cursor.
 
        CONTROL-N                      Inserts a row above the row where
                                       the cell cursor is located.
 
        CONTROL-Y                      Deletes the row where the cell
                                       cursor is located.
 
        =                CONTROL-Q     Prompts for a cell, and jumps to
                                       that cell.
 
 

        PC-CALC(tm) USER GUIDE                                     Page 14
 
 
                                ENTRY LINE KEYS
 
        Special Key      Alternate             Purpose of key
        -----------      ---------             --------------
        LEFT ARROW or    CONTROL-S     Moves the data cursor left one
        BACKSPACE                      character.
 
        RIGHT ARROW or   CONTROL-D     Moves the data cursor right one
        TAB                            character.
 
        CANCEL           CONTROL-C     Cancels the current command or
                                       entry, and erases the entry line.
 
        INSERT           CONTROL-V     Toggles on/off insert mode.
 
        DELETE           CONTROL-G     Deletes the character of input
                                       data at the cursor.
 
        ERASE EOF        CONTROL-T     Erases input data from the cursor
                                       to the end of the entry line.
 
        ENTER or         COMMA         Terminates a command or a command
        RETURN                         entry on the entry line.
 
        !                              Causes "recalculation"; i.e. all
                                       the formulas in the spreadsheet
                                       are re-computed.
 
        /                              Prompts for a command code.
 
 
        Note that some computers will not have all the keys described
        here. For the important keys, an alternate CONTROL-key has been
        assigned, which conforms to the CONTROL-key assignments of many
        popular software packages. Further discussion of each key
        follows:
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
 
 
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 15
 
 
 
                                  ABS Function
 
 
        Purpose: Computes the absolute value of a cell or formula, and
                 returns the value to the current cell or formula.
 
        Format:  ABS(-35)      Returns 35.
                 ABS(A1)       If A1 = 35,  then ABS(A1) = 35.
                               If A1 = 0,   then ABS(A1) = 0.
                               If A1 = -35, then ABS(A1) = 35.
                 ABS(A1*2/B5)  Resolves formula, then computes absolute
                               value of the result.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  ATN Function
 
 
        Purpose: Computes the arctangent of a cell or formula (in
                 radians), and returns the value to the current cell or
                 formula.
 
        Format:  ATN(3)        Returns 1.249045772
                 ATN(A1)       If A1 = 3, and cell has 2 decimal
                               places, returns 1.25
                 ATN(A1*2/B5)  Resolves formula, then computes
                               arctangent
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                AVERAGE Function
 
 
        Purpose: Computes the mean average of a range of numbers and
                 returns the result to the current cell or formula.
 
 
        Format:  AVERAGE(A1:A20)   Averages a column of numbers
                 AVERAGE(A1:E1)    Averages a row of numbers
                 AVERAGE(A1:D20)   Averages a block of numbers
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 

        PC-CALC(tm) USER GUIDE                                     Page 16
 
 
 
                               BLANK Command (/B)
 
 
        Purpose: Removes the contents from a cell or range of cells,
                 leaving them blank.
 
        Prompts: After entering /B you are prompted for the cell or cell
                 range. The default, if ENTER is pressed, is to blank the
                 current cell (the one where the cell cursor is located).
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                             CONFIGURE Command (/C)
 
 
        Purpose: Configures the PC-CALC display, keyboard and printer.
                 The width, height, layout, and color of the screen
                 display can be set, the keyboard can be custom
                 configured, and type of printer can be specified.
                 Configuration changes can be made temporarily or
                 permanently.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  COS Function
 
 
        Purpose: Computes the trigonometric cosine of a cell or formula
                 and returns the value to the current cell or formula.
 
        Format:  COS(3.14159)  Returns -1
                 COS(A1)       If A1 = 3.14159, returns -1
                 COS(A1*2/B5)  Resolves formula, then computes cosine
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 17
 
 
                                 COUNT Function
 
 
        Purpose: Counts the number of non-empty cells in a range of
                 numbers and returns the resulting count to the current
                 cell or formula.
 
        Format:  COUNT(A1:A20)   Counts a column of numbers
                 COUNT(A1:E1)    Counts a row of numbers
                 COUNT(A1:D20)   Counts a block of numbers
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                               DELETE Command (/D)
 
        Purpose: Deletes a row or column from the spreadsheet.
 
        Prompts: Enter /D and you are asked:
 
                                "Delete Row or Column?"
 
                 Reply either R or C. The next prompt is either:
 
                          "Enter row number to be deleted."
                                          or
                          "Enter column letter to be deleted."
 
                 The default, if ENTER is pressed, is to use the row
                 number or column letter of the current cell (the one
                 where the cell cursor is currently located).
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                EDIT Command (/E)
 
        Purpose: Displays the contents of a cell on the entry line, so it
                 does not have to be re-typed.
 
        Prompts: Enter /E and you will be prompted for the cell to be
                 edited. The default, if ENTER is pressed, is to edit the
                 contents of the current cell (the one where the cell
                 cursor is currently located).
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 

        PC-CALC(tm) USER GUIDE                                     Page 18
 
 
                                  EXP Function
 
 
        Purpose: Computes the mathematical number e raised to a specified
                 power. e is the base for natural logarithms. Returns the
                 resulting value to the current cell or formula.
 
        Format:  EXP(1)        Returns e, which is 2.718282
                 EXP(A1)       Returns e raised to the value in A1.
                 EXP(A1*2/A5)  Resolves the formula, then returns e
                               raised to the resolved value.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  FIX Function
 
 
        Purpose: Converts a number or formula to an integer, and returns
                 the resulting value to the current cell or formula. Does
                 not return the next lower number when negative, as does
                 the INT function.
 
        Format:  FIX(-2.5)     Returns -2
                 FIX(A1)       If A1 contains -2.5, returns -2.
                 FIX(A1*2/A5)  Resolves the formula, then returns the
                               fixed decimal portion of the result
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                               FORMAT Command (/F)
 
 
        Purpose: Sets the formatting options for a cell, a range of cells
                 or the entire spreadsheet.
 
        Prompts: Enter /F and you will be prompted:
 
                       "Enter range to be formatted (or ALL)."
 
                 You can enter a single cell, a range of cells (which may
                 be a block), or ALL. To format only the current cell,
                 press ENTER or comma. The next prompt is:
 
                     "Decimals, Width, Justify, Commas, *, $, (, %."
 
                 Enter a D, W, J, C, *, $, ( or % to indicate which type
 

        PC-CALC(tm) USER GUIDE                                     Page 19
 
 
                 of formatting you want to do. The next prompt depends on
                 which option you select:
 
                     D - "Number of decimal places (0 to 9)."
                         The number of places to the right of the decimal
                         can be changed using this command. This number
                         of decimals is used on the screen display, on
                         the printed output, and in computations.
 
                     W - "Enter column width (0 to 75)."
                         The width of a column or range of columns can be
                         changed using this command. A column width of
                         zero causes the column to be "hidden", allowing
                         data to be stored without being seen.
 
                     J - "Right-, Left- or Center-justify."
                         Specify "L" to have numbers shifted to the left
                         side of the column. Specify "R" to have text
                         shifted to the right side of the column. "C"
                         will center the cell's contents. PC-CALC
                         defaults to right-justify for numbers and left-
                         justify for text unless overridden by this
                         command.
 
                     C - "Commas between thousands (Y or N)."
                         To have 12345.00 print as 12,345.00 specify "Y"
                         to this prompt. To remove the commas from a
                         number, specify "N". For example, if the number
                         is a year such as 1985 you would not want it to
                         print as 1,985.
 
                     * - "Print numbers in bar graph format (Y or N)."
                         If a cell contains a value or formula, the
                         result will be displayed as a string of
                         asterisks. Using this format option, you can
                         produce simple horizontal bar graphs.
 
                     $ - "Print leading dollar sign (Y or N)."
                         If you specify Y, a dollar sign will be printed
                         immediately to the left of the most significant
                         digit.
 
                     ( - "Negative numbers in parentheses (Y or N)."
                         If Y is specified, a negative number will have
                         parentheses around it, rather than a minus sign.
                         To switch back to minus sign, specify N. Note:
                         When this format option is specified, positive
                         numbers have one blank space to the right. This
                         is necessary so a column of positive and
                         negative numbers will line up properly.
 
                     % - "Print a percent sign to the right (Y or N)."
                         If Y is specified, a percent sign will be
                         printed on the right of the number. Note: this
 

        PC-CALC(tm) USER GUIDE                                     Page 20
 
 
                         parameter has no bearing on the computation of a
                         formula; it is strictly a formatting option.
 
                 Each of the formatting options above which have
                 responses of "Y" or "N" will also accept a response of
                 ENTER. If you press the ENTER key instead of Y or N, the
                 formatting options for the specified cell(s) will clear
                 the format option, so the cell's format will revert to
                 the default (global) setting.
 
                 After responding to one of the formatting options,
                 PC-CALC will repeat the prior prompt, allowing you to
                 specify more than one formatting option for a cell or
                 range.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                               GLOBAL Command (/G)
 
        Purpose: Sets various system options of PC-CALC, including border
                 display, row/column calculation sequence, automatic
                 recalculation, and printing zeros as blanks.
 
        Prompts: Enter /G and you will be prompted:
 
                    "Border, Row, Column, Manual, Auto, Zero-as-blank"
 
                 To select a global option, enter the first letter of the
                 option. It is not necessary to press ENTER.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                   IF Function
 
 
        Purpose: Evaluates an expression as true or false, and returns
                 the "then" argument if true, or the "else" argument if
                 false.
 
        Format:  IF(A1=5,1,0)     If A1 contains a 5, a 1 is returned.
                                  Otherwise a 0 is returned.
 
                 IF(A1>B5,D3,99)  If the number in A1 is greater than the
                                  number in B5, the contents of D3 will
                                  be returned. Otherwise the number 99
                                  will be returned.
 

        PC-CALC(tm) USER GUIDE                                     Page 21
 
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                               INSERT Command (/I)
 
 
        Purpose: Inserts a row or column in the spreadsheet.
 
 
        Prompts: Enter /I and you will be asked:
 
                               "Insert Row or Column?"
 
                 to which you reply either R or C. The next prompt is:
 
                         "Enter row number. New row will be
                          inserted above it."
                                        or
                         "Enter Column letter. New column
                          will be inserted to the left of it."
 
                 The default, if ENTER is pressed, is to use the row
                 number or column letter of the current cell (the one
                 where the cell cursor is currently located).
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  INT Function
 
 
        Purpose: Converts a number or formula to an integer, and returns
                 the resulting value to the current cell or formula.
                 Returns the next lower number when negative. (See also
                 FIX function.)
 
        Format:  INT(5.1)      Returns 5
                 INT(A1)       If A1 contains -2.5, returns -3
                 INT(A1*2/A5)  Resolves the formula, then returns the
                               fixed decimal portion of the result
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 22
 
 
                                LOAD Command (/L)
 
 
        Purpose: Loads a spreadsheet file into memory so it can be
                 altered or printed.
 
        Prompts: Enter /L and you will be prompted:
 
                   "Enter the file name. (ENTER or A:, B:, etc. for
                   directory.)"
 
                 At this point, you have two choices: display a disk
                 directory or load a spreadsheet file. If you press
                 ENTER, the directory of the currently logged disk drive
                 is displayed. By entering A:, B:, etc. you can display
                 disk directories on other drives.
 
                 If instead you enter a file name, PC-CALC will load that
                 file. The file must be one that was produced earlier by
                 PC-CALC, or one that was created by another program to
                 exact PC-CALC specifications. (For example, the PC-FILE
                 Export command can create PC-CALC spreadsheets.) The
                 file name can be any valid MS-DOS file name; i.e. eight
                 characters or less, optional extension, optional drive
                 designation. Some examples of valid file names are:
 
                                    LOAN1
                                    B:WORKSHT5.OLD
                                    X
                                    A:HOMEWRK.A
 
                 After entering the file name, press ENTER and the file
                 will be loaded.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  LOG Function
 
 
        Purpose: Computes the natural logarithm of a number, and returns
                 the resulting value to the current cell or formula.
 
        Format:  LOG(-2.718282)  Returns 1
                 LOG(A1)         If A1 contains e, returns 1
                 LOG(A1*2/A5)    Resolves the formula, then returns the
                                 natural log of the result
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 

        PC-CALC(tm) USER GUIDE                                     Page 23
 
 
                                  MAX Function
 
        Purpose: Finds the largest number in a range of numbers and
                 returns it to the current cell or formula.
 
        Format:  MAX(A1:A20)     Searches a column of numbers
                 MAX(A1:E1)      Searches a row of numbers
                 MAX(A1:D20)     Searches a block of numbers
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  MIN Function
 
        Purpose: Finds the smallest number in a range of numbers and
                 returns it to the current cell or formula.
 
        Format:  MIN(A1:A20)     Searches a column of numbers
                 MIN(A1:E1)      Searches a row of numbers
                 MIN(A1:D20)     Searches a block of numbers
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  NPV Function
 
        Purpose: Computes the net present value of a stream of flows, at
                 a specified discount rate, and returns the result to the
                 current cell or formula.
 
        Format:  NPV(.12,A1:A20)     Rate specified as value
                 NPV(A1,B1:E1)       Rate in another cell
                 NPV(A1/100,B1:E1)   Rate specified as formula
 
 
        Remarks: The first operand of the NPV function is the discount
                 rate. It may be a value, a cell reference, or a formula.
                 The interval between the stream of flows must be
                 constant, and determined by the rate; i.e. if the flows
                 are annual, use an annual discount rate. If the flows
                 are monthly, use a monthly discount rate.
 
                 The second operand of the NPV function is a range of
                 contiguous cells, which contains the stream of flows.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 

        PC-CALC(tm) USER GUIDE                                     Page 24
 
 
                               PRINT Command (/P)
 
 
        Purpose: Prints a hard copy report of a spreadsheet.
 
        Prompts: Enter /P and you will be prompted:
 
                    "Enter range to be printed (or ENTER for all)."
 
                 The word ALL will appear on the entry line. If you want
                 to print only part of the spreadsheet, enter the
                 coordinates as a range (for example: A1:G15) over the
                 word ALL, then press ENTER or comma. To print the
                 complete spreadsheet, press ENTER. The next prompt is:
 
                    "Enter page width (number of characters across
                     printout)."
 
                 The number 80 will appear on the entry line. If the
                 printer is set up to accomodate an eighty-character
                 printout, just press ENTER. Otherwise, enter the width
                 of the printer page. The next prompt is:
 
                    "Enter page length (number of lines per page)."
 
                 The number 60 will appear on the entry line. If you are
                 printing on normal eleven-inch paper, at six lines per
                 inch, press ENTER. Otherwise, figure out how many lines
                 will print on a page and enter it. The next prompt is:
 
                        "Options: D=dbl space, S=setup, P=pause,
                         C=contents, B=border, O=offset"
 
                 If no special options are desired, just press ENTER.
                 Otherwise, enter one or more option characters and press
                 ENTER. The options are:
 
                 D - Double space the printout. Puts an extra blank line
                     between each line of your spreadsheet.
 
                 S - Allows you to send special setup codes to the
                     printer, to change character size, etc. If S is
                     selected, another prompt will follow, allowing the
                     setup codes to be entered.
 
                 P - If the report is more than one page, PC-CALC will
                     pause after each page. This option is useful when
                     using a printer that takes single sheets of paper.
 
                 C - Prints the contents of each cell rather than the
                     display. Each non-blank cell is displayed, one per
                     line, with its coordinate, attributes and contents.
 
                 B - Causes the row and column borders to be displayed on
 

        PC-CALC(tm) USER GUIDE                                     Page 25
 
 
                     the printed spreadsheet.
 
                 O - Specifies a left margin width on the report. If not
                     specified, the default is seven. If "O" is entered,
                     you are prompted for a new offset (see below).
 
 
                 SETUP
                 If "S" was specified above, the following prompt will be
                 given next:
 
                        "Enter printer setup codes, then ENTER."
 
                 For some printers, the setup codes have been built into
                 PC-CALC's /Configure routines. The standard diskette
                 comes configured for Epson (IBM) printers. The setup
                 prompt will have a second line saying:
 
                            Epson printers: "A" = 10 cpi,
                            "B" = 12 cpi, "C" = 17 cpi.
 
                 If your PC-CALC has been configured for another printer,
                 that printer's name will appear instead of Epson. If the
                 named printer matches your printer, you can alternately
                 enter the letters A, B or C to set your printer spacing
                 to 10, 12 or 17 characters per inch, respectively.
 
                 If PC-CALC has not been configured for your printer, you
                 can still send setup codes to the printer. Just
                 Press any key (other than A, B or C) at this time, and
                 its ASCII value will be sent directly to the printer.
                 For example, if the sequence "ESC,M" sets your printer
                 to twelve characters per inch, press the Escape key,
                 then the capital M. When all the setup codes have been
                 entered, press ENTER.
 
                 Some printer setup codes are special ASCII characters.
                 If you need to send an ASCII 15 to your printer, for
                 example, there are two ways to do this:
 
                       1. Hold down CTRL and press O (the letter). CTRL-O
                          at the keyboard generates an ASCII 15. (O is
                          the 15th letter of the alphabet. CTRL-A
                          generates an ASCII 1, etc.)
 
                       2. Hold down the ALT key, and type the number you
                          want sent on the numeric keypad. For example,
                          to send an ASCII 15, hold down ALT, press the
                          one then the five key, and let go of ALT. An
                          ASCII 15 will be sent. This feature is built
                          into the hardware of the IBM PC, and may not be
                          available on all compatibles. Be sure to type
                          the number on the numeric keypad, and not on
                          the numeric row across the top of the keyboard.
 

        PC-CALC(tm) USER GUIDE                                     Page 26
 
 
 
 
                 OFFSET
                 If "O" (offset) was specified as one of the options
                 above, PC-CALC will now prompt:
 
                      "Enter the page offset (left-margin size)."
 
                 The entry line will contain a "7". Enter any number,
                 from 0 to 99, and that many blanks will be printed to
                 the left of the spreadsheet.
 
                 The last prompt from the Print command is:
 
                                  "Printer or Disk."
 
                 Specify P to send the output directly to the printer. If
                 D is specified, you are prompted:
 
                                "Enter the file name."
 
                 Enter a valid MSDOS file name, and the printed output
                 will be written to a file by that name. You can print it
                 later with the MSDOS "COPY filename PRN:" command, or
                 access it with your word processor for further editing.
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                QUIT Command (/Q)
 
 
        Purpose: Exits from PC-CALC to the operating system.
 
        Prompts: Enter /Q and you will be prompted:
 
                                  "Quit? Y or N."
 
                 To exit, enter "Y". To continue with the spreadsheet,
                 reply "N" or CONTROL-C.
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 27
 
 
                             REPLICATE Command (/R)
 
 
        Purpose: Copies data from a cell or range to another cell, range
                 or block, and optionally adjusts the cell coordinates in
                 formulas. The format attributes such as decimals,
                 commas, etc. are copied along with the data. This
                 powerful command allows cells to be copied over and
                 over, with formulas adjusted, saving considerable data
                 entry.
 
        Prompts: Enter /R and you will be prompted:
 
                              "Enter the "from" range."
 
                 Enter a single cell or a range of cells (example:
                 A1:G1). If the "from" cell is the current cell (where
                 the cell cursor is currently), just press ENTER. The
                 current cell will be used. The next prompt is:
 
                              "Enter the "to" range."
 
                 Once again, enter a single cell or a range of cells.
                 This range specifies the receiving field. If the "to"
                 cell is the current cell, just press ENTER.
 
                 If your ranges are valid, the data in the "from" range
                 will now be copied to the "to" range. During the copying
                 operation if a formula is encountered in the "from"
                 range, a message will be given for each of the variables
                 in the formula. For example:
 
                              "(A5) Adjust A3  Y or N?"
 
                 This sample message says that in the "from" cell A5 it
                 found a formula. That formula contained a reference to
                 A3. If you reply Y to this message, each replication of
                 A5 will be changed so the formula refers to A4, then A5,
                 then A6, etc. If you reply N to this message, all
                 replications will refer to A3, unchanged. See the
                 examples below for more information.
 
 
                       *****************************************
                       *   Section omitted. Evaluation copy.   *
                       *****************************************
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 28
 
 
                                SAVE Command (/S)
 
 
        Purpose: Saves a spreadsheet file on disk so it can be retrieved
                 later for altering or printing.
 
        Prompts: Enter /S and you will be prompted:
 
                         "Enter the file name. (ENTER or A:, B:,
                          etc. for directory.)"
 
                 At this point, you have two choices: display a disk
                 directory or save the spreadsheet file. If you press
                 ENTER, the directory of the currently logged disk drive
                 is displayed. By entering A:, B:, etc. you can display
                 disk directories on other drives.
 
                 If instead you enter a file name, PC-CALC will save the
                 currently displayed spreadsheet onto disk, giving it
                 that name. The file name can be any valid MSDOS file
                 name; i.e. eight characters or less, optional extension,
                 optional drive designation. Some examples of valid file
                 names are:
                                      LOAN1
                                      B:WORKSHT5.OLD
                                      X
                                      A:HOMEWRK.A
 
                 After entering the file name, press ENTER and the file
                 will be saved.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  SGN Function
 
        Purpose: Determines the sign of a number, and returns 1 if the
                 number is positive, 0 if the number is zero, or -1 if
                 the number is negative. The value is returned to the
                 current cell or formula.
 
        Format:  SGN(-35)      Returns -1.
                 SGN(A1)       If A1 = 35,  then SGN(A1) =  1
                               If A1 = 0,   then SGN(A1) =  0
                               If A1 = -35, then SGN(A1) = -1
                 SGN(A1*2/B5)  Resolves formula, then determines the
                               sign of the result.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 

        PC-CALC(tm) USER GUIDE                                     Page 29
 
 
                                  SIN Function
 
 
        Purpose: Computes the trigonometric sine of a cell or formula and
                 returns the value to the current cell or formula.
 
        Format:  SIN(1.57079)  Returns 1
                 SIN(A1)       If A1 = 1.57079, returns 1
                 SIN(A1*2/B5)  Resolves formula, then computes sine
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  SQR Function
 
 
        Purpose: Computes the square root of a value, cell or formula and
                 returns the result to the current cell or formula.
 
        Format:  SQR(25)       Returns 5
                 SQR(A1)       If A1 = 25, returns 5
                 SQR(A1*2/B5)  Resolves formula, then computes square
                               root
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                                  SUM Function
 
 
        Purpose: Sums a range of numbers and returns the result to the
                 current cell or formula.
 
        Format:  SUM(A1:A20)   Sums a column of numbers
                 SUM(A1:E1)    Sums a row of numbers
                 SUM(A1:D20)   Sums a block of numbers
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 30
 
 
                                  TAN Function
 
 
        Purpose: Computes the trigonometric tangent of a value, cell or
                 formula and returns the result to the current cell or
                 formula.
 
        Format:  TAN(.7854)    Returns 1
                 TAN(A1)       If A1 = .7854, returns 1
                 TAN(A1*2/B5)  Resolves formula, then computes tangent
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                               TITLE Command (/T)
 
 
        Purpose: Locks spreadsheet titles along the top of the screen
                 and/or along the left side, so they remain in view.
 
        Prompts: Begin by moving the cell cursor to the line just below
                 and/or the column to the right of the titles to be
                 locked; i.e. the first "unlocked" cell. Then enter /T
                 and you will be prompted:
 
                         "Horizontal, Vertical, Both or None."
 
                 To lock one or more title lines at the top of the
                 screen, enter "H". To lock one or more columns along the
                 left edge of the screen, enter "V". To lock titles both
                 vertically and horizontally, enter "B".
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                              XTERNAL Command (/X)
 
 
        Purpose: Reads data from another PC-CALC spreadsheet, or from a
                 PC-FILE database, and places the data into the current
                 cell.
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 31
 
 
                                ZAP Command (/Z)
 
 
        Purpose: Clears the spreadsheet area and resets all the system
                 defaults.
 
        Prompts: Enter /Z and you will be prompted:
 
                             "Clear contents? (Y or N)."
 
                 To clear the current contents of every cell, and reset
                 all the system defaults, enter "Y". To leave the current
                 spreadsheet as is, reply "N" or CONTROL-C.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                               PC-CALC FILE FORMAT
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
        -----------------------------------------------------------------
 
                            FILES ON THE PC-CALC DISK
 
 
        This information is provided so you will know the function of
        each file in the PC-CALC system.
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
        -----------------------------------------------------------------
 
                         SOME FREQUENTLY ASKED QUESTIONS
 
 
        Q: What is your update policy?
        A: All registered (contributing) users will be notified by mail
           when a new version of PC-CALC becomes available. The cost of
           an update will usually be $20 (to registered users). If you
           aren't a registered user you will not receive notification of
           updates.
 
        Q: Can I obtain the source code for the program?
        A: Sorry, but the source code is proprietary.
 

        PC-CALC(tm) USER GUIDE                                     Page 32
 
 
 
        Q: Do you have any other programs you are distributing?
        A: Yes. PC-FILE, a powerful data base management program, and
           PC-DIAL, a communications program. There is also a graphics
           program called PC-GRAPH which allows you to prepare graphs
           from your PC-FILE database. PC-GRAPH is still under
           development, and not available at this time. The programs are
           available from ButtonWare for the following prices:
 
                         PC-FILE     $49
                         PC-DIAL     $25
                         PC-CALC     $48
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
        Q: What computers does PC-CALC run on?
        A: Based on our users' responses, we know that PC-CALC runs on the
           following computers:
 
                                 IBM PC
                                 IBM XT
                                 IBM PCjr
                                 IBM PC Portable
                                 IBM AT
                                 COLUMBIA 1600
                                 COMPAQ
                                 CORONA
                                 LEADING EDGE PC
                                 TAVA
                                 ZENITH Z-150
 
           If you have tested PC-CALC on another brand, please let us
           know, and we will add it to the list.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 33
 
 
 
                                IF YOU NEED HELP
 
 
        It's our express goal to provide the highest quality programs for
        the lowest price in the industry. Nobody benefits more from this
        policy than you, the computer user.
 
        Our products are so overwhelmingly popular that the telephone
        here rings almost constantly. While the author heartily enjoys
        talking with users, it's becoming impossible to spend any time
        enhancing the programs.
 
        If we have to install support lines and hire technical personnel
        to provide telephone assistance, the price of our products will
        have to be increased. We don't want to do this, and we're certain
        that you agree.
 
        We beg your indulgence with this problem. Please don't call
        unless it's an "emergency". Before calling, carefully read the
        User Guide one more time, looking for an answer to your question.
 
        The best way to receive help with your questions, or a response
        to your suggestions, is to write us a letter. Be sure to
        carefully detail the problem and all symptoms. Please include a
        stamped, self addressed return envelope. We'll try to respond to
        all such mailings.
 
        One last word. If you're not a registered user, please don't call
        or write. Because our availability is a limited resource, we feel
        it's only fair that we spend it on our registered users.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 34
 
 
 
                                   DISCLAIMER
 
 
        You assume the responsibility for the selection of the programs
        to achieve the results you desire and for the installation, use
        and results from the programs.
 
        ButtonWare makes no representation or warranties with respect to
        the contents hereof and disclaims any implied warranties of
        merchantability or fitness for any particular purpose.  The
        entire risk as to the quality and performance of the programs is
        with you.
 
        In no event will the Author be liable to you for any damages,
        including any lost profits, lost savings or other incidental or
        consequential damages arising out of the use of or inability to
        use these programs, even if the Author has been advised of the
        possibility of such damages, or for any claim by any other party.
 
 
        ----------------------------------------------------------------
 
                           THE USER-SUPPORTED CONCEPT
 
 
        You are encouraged to copy and share this diskette with others.
        If after evaluating this program you find it to be useful, you
        are trusted to send a $48 payment to:
 
                                   Jim Button
                                  P.O. Box 5786
                                Bellevue WA 98006
 
        User-supported software is an expreriment in distributing
        computer programs, based on these beliefs:
 
             1. That the value and utility of software is best assessed
                by the user on his/her own system.
 
             2. That the creation of personal computer software can and
                should be supported by the computing community.
 
             3. That copying of programs should be encouraged, rather
                than restricted.
 
        Anyone may legally obtain an evaluation copy of the program from
        a friend or computer club. After you've had a chance to use and
        evaluate the program in your own environment, you're trusted to
        either forward a payment to the author, or to discontinue use of
        the program. In any case, you are encouraged to copy the program
        for evaluation by others.
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 35
 
 
        Free distribution of software and voluntary payment for its use
        eliminates costs for advertising and copy protection schemes.
        Users obtain quality software at greatly reduced cost. They can
        try it out before buying, and do so at their own pace and in the
        comfort of their own home or office. The best programs will
        survive, based purely on their quality and usefulness.
 
        Please join the experiment.If you believe in these ideals, your
        payment is solicited to help make them work.
 
        ----------------------------------------------------------------
 
                                WHY SHOULD I PAY?
 
        We were hoping you would ask.
 
        You're trusted to use this copy of PC-CALC for evaluation
        purposes only, until the requested payment is made. There are
        some solid reasons for sending in your payment:
 
           - It's the right thing to do. You'll feel a lot better about
             yourself!
 
           - When we receive your payment, we'll send you the latest
             version of PC-CALC. This is the version with the fewest bugs
             and the newest enhancements. New features are being added
             regularly to this program.
 
           - You will receive a complete, printed copy of the User Guide.
 
           - We will add you to our database of supporters. Every time a
             new version comes out, we will automatically send you a
             flyer giving you the option of buying the new version for a
             nominal update charge - usually about $20.
 
           - We will give you "priority" treatment if you need to write
             to us with problems or questions.
 
 
        ----------------------------------------------------------------
 
                          RESTRICTED PERMISSION TO COPY
 
        PC-CALC(tm) is NOT a public domain program, and never has been.
        It is Copyright(C) 1984 by Jim Button.  The conditions under
        which you may copy the PC-CALC programs and documentation are
        clearly outlined below.  WARNING!!!  The author intends to
        vigorously prosecute copyright violations.
 
        Individuals are granted permission by the author to freely copy
        the PC-CALC diskette for their own use or for others to evaluate,
        so long as no price or other consideration is charged. The
        printed material may not be copied without the express written
        permission of the author.
 

        PC-CALC(tm) USER GUIDE                                     Page 36
 
 
 
        Computer clubs (non-profit) are granted permission by the author
        to copy the PC-CALC diskette and share it with their members, so
        long as:
 
        -   No price or other consideration is charged. However, a
            distribution fee may be charged for the cost of the diskette,
            so long as it is not more than $9 total.
 
        -   Club members who receive the programs are informed in writing
            of the user-supported concept and encouraged to support it
            with their payments.
 
        -   The program or documentation are not modified in any way and
            are distributed together.
 
        -   The PC-CALC diskette may not be packaged together with any
            other programs or materials. It may not be bundled and sold
            as part of some other more inclusive package.
 
        -   The programs may not be "rented" to others.
 
        -   The programs may not be distributed via computerized
            "bulletin boards" or through any other telecommunications
            link.
 
        -   The printed manual may not be copied or reproduced in any way.
 
        Any group, person or organization which purchases advertising
        space in any publication may not distribute PC-CALC under the
        "computer club" conditions.  You are not considered to be a
        "non-profit" club.
 
        Companies, schools, universities, government and other
        organizations are granted permission by the author to copy the
        PC-CALC programs and documentation for use on other computers and
        at other locations in the organization, so long as:
 
        -   The full registration fee of $48 has been paid for the
            original copy of the program.
 
        -   A usage fee of $40 is paid to ButtonWare for each additional
            building where PC-CALC will be used.  Within any building for
            which the usage fee has been paid, PC-CALC may be copied
            freely for use on any computer in that building.
 
 
 
 
 
 
 
 
 
 

 
                                   ORDER FORM
 
 
        JIM BUTTON                      Federal Employer I.D.# 91-1228699
        ButtonWare
        P.O. Box 5786                                (Quantity and dealer
        Bellevue WA 98006                             discounts available)
                                                       PRICE      PRICE
        PRODUCT                                QTY     EACH      EXTENDED
        ===============================        ====  =======    =========
        PC-CALC Version 2.0
        (with printed User's Guide)            ___      $48      $_______
 
        Usage fee for additional copies
        (each building)                        ___      $40      $_______
 
        PC-Calc Printed User's Guide
        (Registered users only)                ___      $25      $_______
 
        Package of 10 PC-Calc
        Printed User's Guides                  ___     $150      $_______
 
        Package of 100 PC-Calc
        Printed User's Guides                  ___    $1000      $_______
 
        PC-File III
        Data Base Program                      ___      $49      $_______
 
        PC-Dial
        Asynch Communications Program          ___      $29      $_______
 
                                                   SUBTOTAL:     $_______
        7.8% state sales tax
        (Washington state residents)                             $_______
 
 
                                                      TOTAL:     $_______
 
        (Available only on double sided diskettes)
 
        MasterCard____   or Visa____  or personal check____
 
        Card Number: ______________________
 
        Expiration date: __________   Signature: ________________________
 
        Name: ___________________________________________________________
 
        Address: ________________________________________________________
 
        City: ___________________________  State: ____  Zip: ____________
 
 
 

        PC-CALC(tm) USER GUIDE                                     Page 38
 
 
                                      INDEX
 
 
                    *****************************************
                    *   Section omitted. Evaluation copy.   *
                    *****************************************
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0625

     Volume in drive A has no label
     Directory of A:\

    PC-CALC  EXE      2048  11-10-84   2:00a
    PCCALC   EXE     48128  11-10-84   2:00a
    PCCALC2  EXE     48768  11-10-84   2:00a
    PCCALC3  EXE     46464  11-10-84   2:00a
    PCCALC   MSG     34816  11-10-84   2:00a
    PCCALC   DOC     86758  11-10-84   2:00a
    DOC      BAT       209  11-10-84   2:00a
    PCOVL    EXE     22656  11-10-84   2:00a
    EXAMPLE            768  11-10-84   2:00a
    RESPONSE          5632  11-10-84   2:00a
    CRC      TXT      1052   1-01-80   1:09a
    CRCK4    COM      1536  10-21-82   5:50p
    GO       BAT       376  12-28-91   8:59a
    FILES625 TXT      1024   1-01-80   6:55a
           14 file(s)     300235 bytes
                           16384 bytes free
